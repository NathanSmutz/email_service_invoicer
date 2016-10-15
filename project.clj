(defproject email-invoicer "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :dependencies [[org.clojure/clojure "1.8.0" :scope "provided"]
                 [org.clojure/clojurescript "1.9.229" :scope "provided"]
                 [reagent "0.5.1"]
                 [reagent-forms "0.5.24"]
                 [reagent-utils "0.1.9"]
                 #_ [secretary "1.2.3"]
                 #_ [plato "0.1.12"]
                 [cljsjs/filesaverjs "1.1.20151003-0"]
                 [alandipert/storage-atom "2.0.1"]]
  :plugins [[lein-cljsbuild "1.1.4"]]

  :min-lein-version "2.5.0"

  :clean-targets ^{:protect false}
  [:target-path
   [:cljsbuild :builds :app :compiler :output-dir]
   [:cljsbuild :builds :app :compiler :output-to]]

  :resource-paths ["public"]

  :cljsbuild {:builds {:app {:source-paths ["src"]
                             :compiler {:output-to "public/js/app.js"
                                        :output-dir "public/js/out"
                                        :asset-path   "js/out"
                                        :optimizations :none
                                        :pretty-print  true}}}}

  :profiles {:dev {:dependencies [#_ [prone "1.0.2"]
                                  [prone "1.1.2"]
                                  ;[lein-figwheel "0.5.4-3"]
                                  [lein-figwheel "0.5.7"]
                                  [org.clojure/tools.nrepl "0.2.12"]
                                  [com.cemerick/piggieback "0.2.1"]]

                   :plugins [;; [lein-figwheel "0.5.3-2"]
                             [lein-figwheel "0.5.7"]]

                   :figwheel {:http-server-root "public"
                              :nrepl-port 7002
                              :nrepl-middleware ["cemerick.piggieback/wrap-cljs-repl"]
                              :css-dirs ["public/css"]}

                   :cljsbuild {:builds {:app {:source-paths ["env/dev/cljs"]
                                              :compiler {:main "email-invoicer.dev"
                                                         :source-map true}}}}}

             :prod {:cljsbuild {:jar true
                                :builds {:app
                                         {:source-paths ["env/prod/cljs"]
                                          :compiler
                                          {:optimizations :advanced
                                           :pretty-print false}}}}}})