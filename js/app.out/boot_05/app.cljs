(ns boot-05.app
	(:require [reagent.core :as reagent]))

(defn component []
  [:p "Did you know ? I am really a reagent component"])

(defn init[]
  (let [ container (.getElementById js/document "container")]
  	(reagent/render-component 
  		component
        container))
  )


(comment 

(defn component []
  [:a {:href "http://www.manning.com"} "Get me to Manning please"])

	)