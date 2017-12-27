// Compiled by ClojureScript 1.7.228 {}
goog.provide('adzerk.boot_cljs_repl');
goog.require('cljs.core');
goog.require('weasel.repl');
var repl_conn_9340 = "ws://localhost:59734";
if(cljs.core.truth_((function (){var and__6443__auto__ = repl_conn_9340;
if(cljs.core.truth_(and__6443__auto__)){
return cljs.core.not.call(null,weasel.repl.alive_QMARK_.call(null));
} else {
return and__6443__auto__;
}
})())){
weasel.repl.connect.call(null,"ws://localhost:59734");
} else {
}

//# sourceMappingURL=boot_cljs_repl.js.map