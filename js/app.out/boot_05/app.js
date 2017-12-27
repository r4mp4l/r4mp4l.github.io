// Compiled by ClojureScript 1.7.228 {}
goog.provide('boot_05.app');
goog.require('cljs.core');
goog.require('reagent.core');
boot_05.app.component = (function boot_05$app$component(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Did you know ? I am really a reagent component"], null);
});
boot_05.app.init = (function boot_05$app$init(){
var container = document.getElementById("container");
return reagent.core.render_component.call(null,boot_05.app.component,container);
});

//# sourceMappingURL=app.js.map