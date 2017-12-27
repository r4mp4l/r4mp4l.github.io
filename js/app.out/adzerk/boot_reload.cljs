(ns adzerk.boot-reload (:require [adzerk.boot-reload.client :as client] boot-05.app))
(client/connect "ws://localhost:59688" {:asset-host nil, :on-jsload (fn* [] (boot-05.app/init))})