// Compiled by ClojureScript 1.7.228 {}
goog.provide('adzerk.boot_reload.reload');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('goog.async.DeferredList');
goog.require('goog.net.jsloader');
adzerk.boot_reload.reload.page_uri = (function adzerk$boot_reload$reload$page_uri(){
return (new goog.Uri(window.location.href));
});
adzerk.boot_reload.reload.ends_with_QMARK_ = (function adzerk$boot_reload$reload$ends_with_QMARK_(s,pat){
return cljs.core._EQ_.call(null,pat,cljs.core.subs.call(null,s,(cljs.core.count.call(null,s) - cljs.core.count.call(null,pat))));
});
adzerk.boot_reload.reload.reload_page_BANG_ = (function adzerk$boot_reload$reload$reload_page_BANG_(){
return window.location.reload();
});
adzerk.boot_reload.reload.normalize_href_or_uri = (function adzerk$boot_reload$reload$normalize_href_or_uri(href_or_uri){
var uri = (new goog.Uri(href_or_uri));
return adzerk.boot_reload.reload.page_uri.call(null).resolve(uri).getPath();
});
adzerk.boot_reload.reload.changed_href_QMARK_ = (function adzerk$boot_reload$reload$changed_href_QMARK_(href_or_uri,changed){
if(cljs.core.truth_(href_or_uri)){
var path = adzerk.boot_reload.reload.normalize_href_or_uri.call(null,href_or_uri);
if(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.filter.call(null,((function (path){
return (function (p1__7614_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__7614_SHARP_),path);
});})(path))
,changed)))){
return goog.Uri.parse(path);
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_css = (function adzerk$boot_reload$reload$reload_css(changed){
var sheets = document.styleSheets;
var seq__7619 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__7620 = null;
var count__7621 = (0);
var i__7622 = (0);
while(true){
if((i__7622 < count__7621)){
var s = cljs.core._nth.call(null,chunk__7620,i__7622);
var temp__4425__auto___7623 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___7623)){
var sheet_7624 = temp__4425__auto___7623;
var temp__4425__auto___7625__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_7624.href,changed);
if(cljs.core.truth_(temp__4425__auto___7625__$1)){
var href_uri_7626 = temp__4425__auto___7625__$1;
sheet_7624.ownerNode.href = href_uri_7626.makeUnique().toString();
} else {
}
} else {
}

var G__7627 = seq__7619;
var G__7628 = chunk__7620;
var G__7629 = count__7621;
var G__7630 = (i__7622 + (1));
seq__7619 = G__7627;
chunk__7620 = G__7628;
count__7621 = G__7629;
i__7622 = G__7630;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7619);
if(temp__4425__auto__){
var seq__7619__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7619__$1)){
var c__7258__auto__ = cljs.core.chunk_first.call(null,seq__7619__$1);
var G__7631 = cljs.core.chunk_rest.call(null,seq__7619__$1);
var G__7632 = c__7258__auto__;
var G__7633 = cljs.core.count.call(null,c__7258__auto__);
var G__7634 = (0);
seq__7619 = G__7631;
chunk__7620 = G__7632;
count__7621 = G__7633;
i__7622 = G__7634;
continue;
} else {
var s = cljs.core.first.call(null,seq__7619__$1);
var temp__4425__auto___7635__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___7635__$1)){
var sheet_7636 = temp__4425__auto___7635__$1;
var temp__4425__auto___7637__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_7636.href,changed);
if(cljs.core.truth_(temp__4425__auto___7637__$2)){
var href_uri_7638 = temp__4425__auto___7637__$2;
sheet_7636.ownerNode.href = href_uri_7638.makeUnique().toString();
} else {
}
} else {
}

var G__7639 = cljs.core.next.call(null,seq__7619__$1);
var G__7640 = null;
var G__7641 = (0);
var G__7642 = (0);
seq__7619 = G__7639;
chunk__7620 = G__7640;
count__7621 = G__7641;
i__7622 = G__7642;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_img = (function adzerk$boot_reload$reload$reload_img(changed){
var images = document.images;
var seq__7647 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__7648 = null;
var count__7649 = (0);
var i__7650 = (0);
while(true){
if((i__7650 < count__7649)){
var s = cljs.core._nth.call(null,chunk__7648,i__7650);
var temp__4425__auto___7651 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___7651)){
var image_7652 = temp__4425__auto___7651;
var temp__4425__auto___7653__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_7652.src,changed);
if(cljs.core.truth_(temp__4425__auto___7653__$1)){
var href_uri_7654 = temp__4425__auto___7653__$1;
image_7652.src = href_uri_7654.makeUnique().toString();
} else {
}
} else {
}

var G__7655 = seq__7647;
var G__7656 = chunk__7648;
var G__7657 = count__7649;
var G__7658 = (i__7650 + (1));
seq__7647 = G__7655;
chunk__7648 = G__7656;
count__7649 = G__7657;
i__7650 = G__7658;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7647);
if(temp__4425__auto__){
var seq__7647__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7647__$1)){
var c__7258__auto__ = cljs.core.chunk_first.call(null,seq__7647__$1);
var G__7659 = cljs.core.chunk_rest.call(null,seq__7647__$1);
var G__7660 = c__7258__auto__;
var G__7661 = cljs.core.count.call(null,c__7258__auto__);
var G__7662 = (0);
seq__7647 = G__7659;
chunk__7648 = G__7660;
count__7649 = G__7661;
i__7650 = G__7662;
continue;
} else {
var s = cljs.core.first.call(null,seq__7647__$1);
var temp__4425__auto___7663__$1 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___7663__$1)){
var image_7664 = temp__4425__auto___7663__$1;
var temp__4425__auto___7665__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_7664.src,changed);
if(cljs.core.truth_(temp__4425__auto___7665__$2)){
var href_uri_7666 = temp__4425__auto___7665__$2;
image_7664.src = href_uri_7666.makeUnique().toString();
} else {
}
} else {
}

var G__7667 = cljs.core.next.call(null,seq__7647__$1);
var G__7668 = null;
var G__7669 = (0);
var G__7670 = (0);
seq__7647 = G__7667;
chunk__7648 = G__7668;
count__7649 = G__7669;
i__7650 = G__7670;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__7673){
var map__7676 = p__7673;
var map__7676__$1 = ((((!((map__7676 == null)))?((((map__7676.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7676.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7676):map__7676);
var on_jsload = cljs.core.get.call(null,map__7676__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__7676,map__7676__$1,on_jsload){
return (function (p1__7671_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__7671_SHARP_,".js");
});})(map__7676,map__7676__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.net.jsloader.loadMany(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__7676,map__7676__$1,on_jsload){
return (function (p1__7672_SHARP_){
return goog.Uri.parse(p1__7672_SHARP_).makeUnique();
});})(js_files,map__7676,map__7676__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__7676,map__7676__$1,on_jsload){
return (function() { 
var G__7678__delegate = function (_){
return on_jsload.call(null);
};
var G__7678 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__7679__i = 0, G__7679__a = new Array(arguments.length -  0);
while (G__7679__i < G__7679__a.length) {G__7679__a[G__7679__i] = arguments[G__7679__i + 0]; ++G__7679__i;}
  _ = new cljs.core.IndexedSeq(G__7679__a,0);
} 
return G__7678__delegate.call(this,_);};
G__7678.cljs$lang$maxFixedArity = 0;
G__7678.cljs$lang$applyTo = (function (arglist__7680){
var _ = cljs.core.seq(arglist__7680);
return G__7678__delegate(_);
});
G__7678.cljs$core$IFn$_invoke$arity$variadic = G__7678__delegate;
return G__7678;
})()
;})(js_files,map__7676,map__7676__$1,on_jsload))
,((function (js_files,map__7676,map__7676__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__7676,map__7676__$1,on_jsload))
);

if(cljs.core.truth_((window["jQuery"]))){
return jQuery(document).trigger("page-load");
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_html = (function adzerk$boot_reload$reload$reload_html(changed){
var page_path = adzerk.boot_reload.reload.page_uri.call(null).getPath();
var html_path = (cljs.core.truth_(adzerk.boot_reload.reload.ends_with_QMARK_.call(null,page_path,"/"))?[cljs.core.str(page_path),cljs.core.str("index.html")].join(''):page_path);
if(cljs.core.truth_(adzerk.boot_reload.reload.changed_href_QMARK_.call(null,html_path,changed))){
return adzerk.boot_reload.reload.reload_page_BANG_.call(null);
} else {
return null;
}
});
adzerk.boot_reload.reload.group_log = (function adzerk$boot_reload$reload$group_log(title,things_to_log){
console.groupCollapsed(title);

var seq__7685_7689 = cljs.core.seq.call(null,things_to_log);
var chunk__7686_7690 = null;
var count__7687_7691 = (0);
var i__7688_7692 = (0);
while(true){
if((i__7688_7692 < count__7687_7691)){
var t_7693 = cljs.core._nth.call(null,chunk__7686_7690,i__7688_7692);
console.log(t_7693);

var G__7694 = seq__7685_7689;
var G__7695 = chunk__7686_7690;
var G__7696 = count__7687_7691;
var G__7697 = (i__7688_7692 + (1));
seq__7685_7689 = G__7694;
chunk__7686_7690 = G__7695;
count__7687_7691 = G__7696;
i__7688_7692 = G__7697;
continue;
} else {
var temp__4425__auto___7698 = cljs.core.seq.call(null,seq__7685_7689);
if(temp__4425__auto___7698){
var seq__7685_7699__$1 = temp__4425__auto___7698;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7685_7699__$1)){
var c__7258__auto___7700 = cljs.core.chunk_first.call(null,seq__7685_7699__$1);
var G__7701 = cljs.core.chunk_rest.call(null,seq__7685_7699__$1);
var G__7702 = c__7258__auto___7700;
var G__7703 = cljs.core.count.call(null,c__7258__auto___7700);
var G__7704 = (0);
seq__7685_7689 = G__7701;
chunk__7686_7690 = G__7702;
count__7687_7691 = G__7703;
i__7688_7692 = G__7704;
continue;
} else {
var t_7705 = cljs.core.first.call(null,seq__7685_7699__$1);
console.log(t_7705);

var G__7706 = cljs.core.next.call(null,seq__7685_7699__$1);
var G__7707 = null;
var G__7708 = (0);
var G__7709 = (0);
seq__7685_7689 = G__7706;
chunk__7686_7690 = G__7707;
count__7687_7691 = G__7708;
i__7688_7692 = G__7709;
continue;
}
} else {
}
}
break;
}

return console.groupEnd();
});
/**
 * Perform heuristics to check if a non-shimmed DOM is available
 */
adzerk.boot_reload.reload.has_dom_QMARK_ = (function adzerk$boot_reload$reload$has_dom_QMARK_(){
return (typeof window !== 'undefined') && (typeof window.document !== 'undefined') && (typeof window.document.documentURI !== 'undefined');
});
adzerk.boot_reload.reload.reload = (function adzerk$boot_reload$reload$reload(changed,opts){
var changed_STAR_ = cljs.core.map.call(null,(function (p1__7710_SHARP_){
return [cljs.core.str(new cljs.core.Keyword(null,"asset-host","asset-host",-899289050).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str(p1__7710_SHARP_)].join('');
}),changed);
adzerk.boot_reload.reload.group_log.call(null,"Reload",changed_STAR_);

adzerk.boot_reload.reload.reload_js.call(null,changed_STAR_,opts);

if(cljs.core.truth_(adzerk.boot_reload.reload.has_dom_QMARK_.call(null))){
var G__7712 = changed_STAR_;
adzerk.boot_reload.reload.reload_html.call(null,G__7712);

adzerk.boot_reload.reload.reload_css.call(null,G__7712);

adzerk.boot_reload.reload.reload_img.call(null,G__7712);

return G__7712;
} else {
return null;
}
});

//# sourceMappingURL=reload.js.map