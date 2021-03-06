// Compiled by ClojureScript 1.7.170 {}
goog.provide('adzerk.boot_reload.reload');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('goog.async.DeferredList');
goog.require('goog.net.jsloader');
adzerk.boot_reload.reload.page_uri = (new goog.Uri(window.location.href));
adzerk.boot_reload.reload.ends_with_QMARK_ = (function adzerk$boot_reload$reload$ends_with_QMARK_(s,pat){
return cljs.core._EQ_.call(null,pat,cljs.core.subs.call(null,s,(cljs.core.count.call(null,s) - cljs.core.count.call(null,pat))));
});
adzerk.boot_reload.reload.reload_page_BANG_ = (function adzerk$boot_reload$reload$reload_page_BANG_(){
return window.location.reload();
});
adzerk.boot_reload.reload.normalize_href_or_uri = (function adzerk$boot_reload$reload$normalize_href_or_uri(href_or_uri){
var uri = (new goog.Uri(href_or_uri));
return adzerk.boot_reload.reload.page_uri.resolve(uri).getPath();
});
adzerk.boot_reload.reload.changed_href_QMARK_ = (function adzerk$boot_reload$reload$changed_href_QMARK_(href_or_uri,changed){
if(cljs.core.truth_(href_or_uri)){
var path = adzerk.boot_reload.reload.normalize_href_or_uri.call(null,href_or_uri);
if(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.filter.call(null,((function (path){
return (function (p1__6362_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__6362_SHARP_),path);
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
var seq__6367 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__6368 = null;
var count__6369 = (0);
var i__6370 = (0);
while(true){
if((i__6370 < count__6369)){
var s = cljs.core._nth.call(null,chunk__6368,i__6370);
var temp__4425__auto___6371 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___6371)){
var sheet_6372 = temp__4425__auto___6371;
var temp__4425__auto___6373__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_6372.href,changed);
if(cljs.core.truth_(temp__4425__auto___6373__$1)){
var href_uri_6374 = temp__4425__auto___6373__$1;
sheet_6372.ownerNode.href = href_uri_6374.makeUnique().toString();
} else {
}
} else {
}

var G__6375 = seq__6367;
var G__6376 = chunk__6368;
var G__6377 = count__6369;
var G__6378 = (i__6370 + (1));
seq__6367 = G__6375;
chunk__6368 = G__6376;
count__6369 = G__6377;
i__6370 = G__6378;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__6367);
if(temp__4425__auto__){
var seq__6367__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6367__$1)){
var c__5789__auto__ = cljs.core.chunk_first.call(null,seq__6367__$1);
var G__6379 = cljs.core.chunk_rest.call(null,seq__6367__$1);
var G__6380 = c__5789__auto__;
var G__6381 = cljs.core.count.call(null,c__5789__auto__);
var G__6382 = (0);
seq__6367 = G__6379;
chunk__6368 = G__6380;
count__6369 = G__6381;
i__6370 = G__6382;
continue;
} else {
var s = cljs.core.first.call(null,seq__6367__$1);
var temp__4425__auto___6383__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___6383__$1)){
var sheet_6384 = temp__4425__auto___6383__$1;
var temp__4425__auto___6385__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_6384.href,changed);
if(cljs.core.truth_(temp__4425__auto___6385__$2)){
var href_uri_6386 = temp__4425__auto___6385__$2;
sheet_6384.ownerNode.href = href_uri_6386.makeUnique().toString();
} else {
}
} else {
}

var G__6387 = cljs.core.next.call(null,seq__6367__$1);
var G__6388 = null;
var G__6389 = (0);
var G__6390 = (0);
seq__6367 = G__6387;
chunk__6368 = G__6388;
count__6369 = G__6389;
i__6370 = G__6390;
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
var seq__6395 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__6396 = null;
var count__6397 = (0);
var i__6398 = (0);
while(true){
if((i__6398 < count__6397)){
var s = cljs.core._nth.call(null,chunk__6396,i__6398);
var temp__4425__auto___6399 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___6399)){
var image_6400 = temp__4425__auto___6399;
var temp__4425__auto___6401__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_6400.src,changed);
if(cljs.core.truth_(temp__4425__auto___6401__$1)){
var href_uri_6402 = temp__4425__auto___6401__$1;
image_6400.src = href_uri_6402.makeUnique().toString();
} else {
}
} else {
}

var G__6403 = seq__6395;
var G__6404 = chunk__6396;
var G__6405 = count__6397;
var G__6406 = (i__6398 + (1));
seq__6395 = G__6403;
chunk__6396 = G__6404;
count__6397 = G__6405;
i__6398 = G__6406;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__6395);
if(temp__4425__auto__){
var seq__6395__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6395__$1)){
var c__5789__auto__ = cljs.core.chunk_first.call(null,seq__6395__$1);
var G__6407 = cljs.core.chunk_rest.call(null,seq__6395__$1);
var G__6408 = c__5789__auto__;
var G__6409 = cljs.core.count.call(null,c__5789__auto__);
var G__6410 = (0);
seq__6395 = G__6407;
chunk__6396 = G__6408;
count__6397 = G__6409;
i__6398 = G__6410;
continue;
} else {
var s = cljs.core.first.call(null,seq__6395__$1);
var temp__4425__auto___6411__$1 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___6411__$1)){
var image_6412 = temp__4425__auto___6411__$1;
var temp__4425__auto___6413__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_6412.src,changed);
if(cljs.core.truth_(temp__4425__auto___6413__$2)){
var href_uri_6414 = temp__4425__auto___6413__$2;
image_6412.src = href_uri_6414.makeUnique().toString();
} else {
}
} else {
}

var G__6415 = cljs.core.next.call(null,seq__6395__$1);
var G__6416 = null;
var G__6417 = (0);
var G__6418 = (0);
seq__6395 = G__6415;
chunk__6396 = G__6416;
count__6397 = G__6417;
i__6398 = G__6418;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__6421){
var map__6424 = p__6421;
var map__6424__$1 = ((((!((map__6424 == null)))?((((map__6424.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6424.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6424):map__6424);
var on_jsload = cljs.core.get.call(null,map__6424__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__6424,map__6424__$1,on_jsload){
return (function (p1__6419_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__6419_SHARP_,".js");
});})(map__6424,map__6424__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.async.DeferredList.gatherResults(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__6424,map__6424__$1,on_jsload){
return (function (p1__6420_SHARP_){
return goog.net.jsloader.load(goog.Uri.parse(p1__6420_SHARP_).makeUnique());
});})(js_files,map__6424,map__6424__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__6424,map__6424__$1,on_jsload){
return (function() { 
var G__6426__delegate = function (_){
return on_jsload.call(null);
};
var G__6426 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__6427__i = 0, G__6427__a = new Array(arguments.length -  0);
while (G__6427__i < G__6427__a.length) {G__6427__a[G__6427__i] = arguments[G__6427__i + 0]; ++G__6427__i;}
  _ = new cljs.core.IndexedSeq(G__6427__a,0);
} 
return G__6426__delegate.call(this,_);};
G__6426.cljs$lang$maxFixedArity = 0;
G__6426.cljs$lang$applyTo = (function (arglist__6428){
var _ = cljs.core.seq(arglist__6428);
return G__6426__delegate(_);
});
G__6426.cljs$core$IFn$_invoke$arity$variadic = G__6426__delegate;
return G__6426;
})()
;})(js_files,map__6424,map__6424__$1,on_jsload))
,((function (js_files,map__6424,map__6424__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__6424,map__6424__$1,on_jsload))
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
var page_path = adzerk.boot_reload.reload.page_uri.getPath();
var html_path = (cljs.core.truth_(adzerk.boot_reload.reload.ends_with_QMARK_.call(null,page_path,"/"))?[cljs.core.str(page_path),cljs.core.str("index.html")].join(''):page_path);
if(cljs.core.truth_(adzerk.boot_reload.reload.changed_href_QMARK_.call(null,html_path,changed))){
return adzerk.boot_reload.reload.reload_page_BANG_.call(null);
} else {
return null;
}
});
adzerk.boot_reload.reload.group_log = (function adzerk$boot_reload$reload$group_log(title,things_to_log){
console.groupCollapsed(title);

var seq__6433_6437 = cljs.core.seq.call(null,things_to_log);
var chunk__6434_6438 = null;
var count__6435_6439 = (0);
var i__6436_6440 = (0);
while(true){
if((i__6436_6440 < count__6435_6439)){
var t_6441 = cljs.core._nth.call(null,chunk__6434_6438,i__6436_6440);
console.log(t_6441);

var G__6442 = seq__6433_6437;
var G__6443 = chunk__6434_6438;
var G__6444 = count__6435_6439;
var G__6445 = (i__6436_6440 + (1));
seq__6433_6437 = G__6442;
chunk__6434_6438 = G__6443;
count__6435_6439 = G__6444;
i__6436_6440 = G__6445;
continue;
} else {
var temp__4425__auto___6446 = cljs.core.seq.call(null,seq__6433_6437);
if(temp__4425__auto___6446){
var seq__6433_6447__$1 = temp__4425__auto___6446;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6433_6447__$1)){
var c__5789__auto___6448 = cljs.core.chunk_first.call(null,seq__6433_6447__$1);
var G__6449 = cljs.core.chunk_rest.call(null,seq__6433_6447__$1);
var G__6450 = c__5789__auto___6448;
var G__6451 = cljs.core.count.call(null,c__5789__auto___6448);
var G__6452 = (0);
seq__6433_6437 = G__6449;
chunk__6434_6438 = G__6450;
count__6435_6439 = G__6451;
i__6436_6440 = G__6452;
continue;
} else {
var t_6453 = cljs.core.first.call(null,seq__6433_6447__$1);
console.log(t_6453);

var G__6454 = cljs.core.next.call(null,seq__6433_6447__$1);
var G__6455 = null;
var G__6456 = (0);
var G__6457 = (0);
seq__6433_6437 = G__6454;
chunk__6434_6438 = G__6455;
count__6435_6439 = G__6456;
i__6436_6440 = G__6457;
continue;
}
} else {
}
}
break;
}

return console.groupEnd();
});
adzerk.boot_reload.reload.reload = (function adzerk$boot_reload$reload$reload(changed,opts){
adzerk.boot_reload.reload.group_log.call(null,"Reload",changed);

var G__6459 = changed;
adzerk.boot_reload.reload.reload_js.call(null,G__6459,opts);

adzerk.boot_reload.reload.reload_html.call(null,G__6459);

adzerk.boot_reload.reload.reload_css.call(null,G__6459);

adzerk.boot_reload.reload.reload_img.call(null,G__6459);

return G__6459;
});

//# sourceMappingURL=reload.js.map