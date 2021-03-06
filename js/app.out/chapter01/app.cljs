(ns chapter01.app
  (:require [reagent.core :as reagent :refer [atom]]))

(defn some-component []
  [:div
   [:h5 "I am a component and I am free!"]
   [:p.someclass
    "I have " [:strong "bold"]
    [:span {:style {:color "red"}} " and red"]
    " text."]])

(defn calling-component []
  [:div "Parent component"
   [some-component]])


(defn init []
  (reagent/render-component [calling-component]
                            (.getElementById js/document "container")))
