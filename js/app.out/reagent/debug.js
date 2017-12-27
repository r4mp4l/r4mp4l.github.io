// Compiled by ClojureScript 1.7.228 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = {};
o.warn = ((function (o){
return (function() { 
var G__7895__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__7895 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7896__i = 0, G__7896__a = new Array(arguments.length -  0);
while (G__7896__i < G__7896__a.length) {G__7896__a[G__7896__i] = arguments[G__7896__i + 0]; ++G__7896__i;}
  args = new cljs.core.IndexedSeq(G__7896__a,0);
} 
return G__7895__delegate.call(this,args);};
G__7895.cljs$lang$maxFixedArity = 0;
G__7895.cljs$lang$applyTo = (function (arglist__7897){
var args = cljs.core.seq(arglist__7897);
return G__7895__delegate(args);
});
G__7895.cljs$core$IFn$_invoke$arity$variadic = G__7895__delegate;
return G__7895;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__7898__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__7898 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7899__i = 0, G__7899__a = new Array(arguments.length -  0);
while (G__7899__i < G__7899__a.length) {G__7899__a[G__7899__i] = arguments[G__7899__i + 0]; ++G__7899__i;}
  args = new cljs.core.IndexedSeq(G__7899__a,0);
} 
return G__7898__delegate.call(this,args);};
G__7898.cljs$lang$maxFixedArity = 0;
G__7898.cljs$lang$applyTo = (function (arglist__7900){
var args = cljs.core.seq(arglist__7900);
return G__7898__delegate(args);
});
G__7898.cljs$core$IFn$_invoke$arity$variadic = G__7898__delegate;
return G__7898;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map