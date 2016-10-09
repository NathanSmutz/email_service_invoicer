(ns email-invoicer.core
    (:require [reagent.core       :as reagent   :refer [atom]]              
              #_ [reagent.session    :as session]
              [reagent-forms.core               :refer [bind-fields]]
              [reagent.format     :as rf]
              #_ [secretary.core     :as secretary :include-macros true]
              #_ [plato.core         :as plato]
              #_ [cljs.pprint        :as pp]
              #_ [cljs.pprint                      :refer [cl-format]]
              #_ [clojure.string     :as string]
              [cljsjs.filesaverjs]
              [cljs.reader :as reader]
              [alandipert.storage-atom          :refer [local-storage]])    
    (:require-macros [reagent.ratom             :refer [reaction]]))

(def email-line-width 40)

(defonce home-office         (local-storage (atom {}) :home-office))
(defonce client-item-storage (local-storage (atom {}) :client-item-storage))
(defonce invoice-form-atom   (atom {:items []}))
(defonce display-attributes  (atom {:display-user-menu false}))

;; User storage
;(plato/restore-atom! "home-office" home-office)
;(plato/keep-updated! "home-office" home-office)

;; Item and client storage
;(plato/restore-atom! "client-item-storage" client-item-storage)
;(plato/keep-updated! "client-item-storage" client-item-storage)

(defn download [filename content & [mime-type]]
  (let [mime-type (or mime-type (str "text/plain;charset=" (.-characterSet js/document)))
        blob (new js/Blob
                  (clj->js [content])
                  (clj->js {:type mime-type}))]
    (js/saveAs blob filename)))



(defn handle-data-upload 
  "Merges loaded file with currentl client and item data"
  [e]
  (let [reader (js/FileReader.)]
    (set! (.-onload reader) (fn [e] (let [file-data (-> e
                                                        .-target
                                                        .-result
                                                        reader/read-string)]
                                      ;(.log js/console file-data)
                                      (swap! client-item-storage merge file-data))))
                              
    (as-> (.-currentTarget e) x
          (.-files x)
          (aget x 0)
          ((fn [a]                ;; Debuggery here
             (.log js/console a) 
             a) x)
          (.readAsText reader x))))


(defn store-item-details 
  "Stores the client and price of an item"
  []
  (swap! client-item-storage 
    update-in [:item (:item @invoice-form-atom)]
    merge (select-keys @invoice-form-atom [:client :charge :item-name]))
  (swap! client-item-storage 
    update-in [:client (:client @invoice-form-atom)]         
    merge (select-keys @invoice-form-atom [:client-email])))

(defn change-invoice-form-event
  "Event for invoice form"
  [[id & ids] value doc]
  ;(println id ":" ids)   ;; Debugging code
  (case id
    (:client) (when-let [saved-info (get-in @client-item-storage [id value])]              
                (merge doc saved-info))
    :item     (when-let [saved-info (get-in @client-item-storage [id value])]
                (merge doc saved-info (get-in @client-item-storage [:client (:client saved-info)])))                  
    nil))
  
  

(defn toggle-user-menu [] (swap! display-attributes update-in [:display-user-menu] not))

(defn add-item-to-list []
  (store-item-details)
  (swap! invoice-form-atom #(-> %
                                (update-in [:items] conj (select-keys @invoice-form-atom [:item :charge :item-name]))
                                (assoc :item nil)
                                (assoc :item-name nil)
                                (assoc :charge nil))))

(defn remove-from-vector [v i]
  (vec (concat (subvec v 0 i) (subvec v (inc i)))))

;; Text Helpers
(defn line-item [left-item right-item width fill-char]
  (let [l-str      (str left-item)
        r-str      (str right-item)
        l-width    (count l-str)
        r-width    (count r-str)
        fill-width (- width l-width r-width)
        filler     (apply str (repeat fill-width fill-char))]
    (str l-str filler r-str)))

(defn fill-middle [left-item right-item width fill-char]
  (let [l-str      (str left-item)
        r-str      (str right-item)
        l-width    (count l-str)
        r-width    (count r-str)
        fill-width (- width l-width r-width)
        filler     (apply str (repeat fill-width fill-char))]
    (str l-str filler r-str)))

(defn item-line [id name charge sub-width]
  (str (fill-middle charge id sub-width "_") name))

(defn item-list []
  (let [name-width (apply max 
                          (map (comp count :item-name)
                               (:items @invoice-form-atom)))
        id-width (apply max 
                        (map (comp count str :item)
                             (:id @invoice-form-atom)))]
        ;charge-width (apply max 
        ;                    (map (comp count str :item-name)
        ;                         (:charge @invoice-form-atom))))]
      (map-indexed (fn [i item]
                    ^{:key i}
                    [:li.list-group-item (str (:item-name item) 
                                              " " 
                                              (rf/format (str "%" id-width "s") (:item item)) 
                                              " $" 
                                              (:charge item))
                     [:button.delete-button {:on-click #(swap! invoice-form-atom 
                                                          update-in [:items]
                                                          remove-from-vector i )} "x"]])
        (:items @invoice-form-atom)))) 


(def email-link (reaction
                  (let [{:keys [:office-email :agent-name :business-name]} @home-office
                        {:keys [:client-email :client :items]}             @invoice-form-atom]
                    (str "mailto:"
                      client-email
                      "?"
                      "cc=" office-email              
                      "&subject=" 
                      (rf/encode-uri 
                        (str "Invoice from " 
                          business-name))
                      "&body="
                      (rf/encode-uri 
                        (str
                          "Invoice" "\n"
                          business-name "\n"
                          "\n"
                          "Bill To: " client "\n"
                          "\n"
                          "Serviced by: " agent-name "\n"
                          (line-item "Charge" "Item" email-line-width "_") "\tDescription" "\n"
                          (apply str (interpose "\n"
                                      (for [{:keys [:charge :item :item-name]} items]
                                        (str
                                          (line-item                                         
                                            (rf/currency-format charge)
                                            item
                                            email-line-width
                                            "_")
                                          "\t"
                                          item-name))))
                          "\n"
                          "\n"                        
                          "Total:"
                          "\n"
                          (->> items
                               (map :charge)
                               (apply +)
                               rf/currency-format)))))))
  
(def user-info-template
  [:div#user-menu.container-fluid 
   [:div.row
    [:label {:id :business-name
             :field :label
             :preamble "Business Name: "}]             
    [:input.form-control {:id :business-name
                          :field :text}]]
   [:div.row
    [:label {:id :office-email
             :field :label
             :preamble "Home Office Email: "
             :placeholder "...@..."}]
    [:input.form-control {:id :office-email
                          :field :email}]]
   [:div.row
    [:label {:id :agent-name
             :field :label
             :preamble "Agent Name: "}]
    [:input.form-control {:id :agent-name
                          :field :text}]]
   [:div.row
    [:p [:br]
     [:button {:on-click #(download "item_and_client_data.txt" (pr-str @client-item-storage))}
              "Save App Data"]]
    [:p 
     [:label {:for "file-upload"} "Load Client and Item Data" [:input#file-upload {:type "file" :on-change handle-data-upload}]]]
              
    [:p
     [:button {:on-click #(reset! client-item-storage {})}
      "Clear Client and Item Data"]]]])         
                                                     

(def invoice-form-template
  [:div.container-fluid
   
   [:div.row [:label {:field :label :preamble "Item ID: "
                      :placeholder "..." :id :item}]
    [:input.form-control {:field :text :id :item}]]
   
   [:div.row [:label {:field :label :preamble "Item Name: "
                      :placeholder "..." :id :item-name}]
    [:input.form-control {:field :text :id :item-name}]]
   
   [:div.row 
    [:label {:field :label
             :preamble "Charge: $"
             :placeholder "..."
             :id :charge}]
    [:input.form-control {:field :numeric
                          :fmt "%.2f"
                          :id :charge}]]   
   
   [:div.row
    [:label {:id :client
             :field :label
             :preamble "Client: "}]
    [:input.form-control {:field :text
                          :id :client}]]
   [:div.row
    [:label {:id :client-email
             :field :label
             :preamble "Client Email: "
             :placeholder "...@..."}]
    [:input.form-control {:field :email
                          :id :client-email}]]])
       
(defn invoice-form-page []
  [:div 
   [:button#user-menu-button.btn.btn-default {:on-click toggle-user-menu}
    (str (when (:display-user-menu @display-attributes) "Close ") "User Menu")]
   [:h3 "Invoice"]
   [:h6 (:business-name @home-office) " Agent: " (:agent-name @home-office)]
   (when (:display-user-menu @display-attributes) 
     [bind-fields user-info-template home-office])
   [bind-fields invoice-form-template invoice-form-atom change-invoice-form-event]
   [:button.btn.btn-default {:on-click add-item-to-list} "Add Item and Charge"]
   [:ul.list-group (item-list)] 
   [:a.btn.btn-default {:href @email-link
                        :target "blank"}       
     "Email Invoice"]])

   
   

;; -------------------------
;; Initialize app

(defn mount-root []
  (reagent/render [invoice-form-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))
