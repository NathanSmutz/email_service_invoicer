(ns email-invoicer.prod
  (:require [email-invoicer.core :as core]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(core/init!)
