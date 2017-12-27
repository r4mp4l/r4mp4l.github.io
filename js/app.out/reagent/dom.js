// Compiled by ClojureScript 1.7.228 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('cljsjs.react.dom');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.debug');
goog.require('reagent.interop');
if(typeof reagent.dom.dom !== 'undefined'){
} else {
reagent.dom.dom = (function (){var or__6455__auto__ = (function (){var and__6443__auto__ = typeof ReactDOM !== 'undefined';
if(and__6443__auto__){
return ReactDOM;
} else {
return and__6443__auto__;
}
})();
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
var and__6443__auto__ = typeof require !== 'undefined';
if(and__6443__auto__){
return require("react-dom");
} else {
return and__6443__auto__;
}
}
})();
}
if(cljs.core.truth_(reagent.dom.dom)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Could not find ReactDOM"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"dom","dom",403993605,null)))].join('')));
}
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.dom["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_8462 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.dom["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_8462){
return (function (){
var _STAR_always_update_STAR_8463 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_8463;
}});})(_STAR_always_update_STAR_8462))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_8462;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args8464 = [];
var len__7513__auto___8467 = arguments.length;
var i__7514__auto___8468 = (0);
while(true){
if((i__7514__auto___8468 < len__7513__auto___8467)){
args8464.push((arguments[i__7514__auto___8468]));

var G__8469 = (i__7514__auto___8468 + (1));
i__7514__auto___8468 = G__8469;
continue;
} else {
}
break;
}

var G__8466 = args8464.length;
switch (G__8466) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8464.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.dom["findDOMNode"])(this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
var seq__8475_8479 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__8476_8480 = null;
var count__8477_8481 = (0);
var i__8478_8482 = (0);
while(true){
if((i__8478_8482 < count__8477_8481)){
var v_8483 = cljs.core._nth.call(null,chunk__8476_8480,i__8478_8482);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_8483);

var G__8484 = seq__8475_8479;
var G__8485 = chunk__8476_8480;
var G__8486 = count__8477_8481;
var G__8487 = (i__8478_8482 + (1));
seq__8475_8479 = G__8484;
chunk__8476_8480 = G__8485;
count__8477_8481 = G__8486;
i__8478_8482 = G__8487;
continue;
} else {
var temp__4425__auto___8488 = cljs.core.seq.call(null,seq__8475_8479);
if(temp__4425__auto___8488){
var seq__8475_8489__$1 = temp__4425__auto___8488;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8475_8489__$1)){
var c__7258__auto___8490 = cljs.core.chunk_first.call(null,seq__8475_8489__$1);
var G__8491 = cljs.core.chunk_rest.call(null,seq__8475_8489__$1);
var G__8492 = c__7258__auto___8490;
var G__8493 = cljs.core.count.call(null,c__7258__auto___8490);
var G__8494 = (0);
seq__8475_8479 = G__8491;
chunk__8476_8480 = G__8492;
count__8477_8481 = G__8493;
i__8478_8482 = G__8494;
continue;
} else {
var v_8495 = cljs.core.first.call(null,seq__8475_8489__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_8495);

var G__8496 = cljs.core.next.call(null,seq__8475_8489__$1);
var G__8497 = null;
var G__8498 = (0);
var G__8499 = (0);
seq__8475_8479 = G__8496;
chunk__8476_8480 = G__8497;
count__8477_8481 = G__8498;
i__8478_8482 = G__8499;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map