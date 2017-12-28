(ns adzerk.boot-reload (:require [adzerk.boot-reload.client :as client] chapter01.app))
(client/connect "ws://localhost:59637" {:on-jsload (fn* [] (chapter01.app/init))})