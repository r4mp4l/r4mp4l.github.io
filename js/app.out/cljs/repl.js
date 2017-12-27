// Compiled by ClojureScript 1.7.228 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__9203_9217 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__9204_9218 = null;
var count__9205_9219 = (0);
var i__9206_9220 = (0);
while(true){
if((i__9206_9220 < count__9205_9219)){
var f_9221 = cljs.core._nth.call(null,chunk__9204_9218,i__9206_9220);
cljs.core.println.call(null,"  ",f_9221);

var G__9222 = seq__9203_9217;
var G__9223 = chunk__9204_9218;
var G__9224 = count__9205_9219;
var G__9225 = (i__9206_9220 + (1));
seq__9203_9217 = G__9222;
chunk__9204_9218 = G__9223;
count__9205_9219 = G__9224;
i__9206_9220 = G__9225;
continue;
} else {
var temp__4425__auto___9226 = cljs.core.seq.call(null,seq__9203_9217);
if(temp__4425__auto___9226){
var seq__9203_9227__$1 = temp__4425__auto___9226;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9203_9227__$1)){
var c__7258__auto___9228 = cljs.core.chunk_first.call(null,seq__9203_9227__$1);
var G__9229 = cljs.core.chunk_rest.call(null,seq__9203_9227__$1);
var G__9230 = c__7258__auto___9228;
var G__9231 = cljs.core.count.call(null,c__7258__auto___9228);
var G__9232 = (0);
seq__9203_9217 = G__9229;
chunk__9204_9218 = G__9230;
count__9205_9219 = G__9231;
i__9206_9220 = G__9232;
continue;
} else {
var f_9233 = cljs.core.first.call(null,seq__9203_9227__$1);
cljs.core.println.call(null,"  ",f_9233);

var G__9234 = cljs.core.next.call(null,seq__9203_9227__$1);
var G__9235 = null;
var G__9236 = (0);
var G__9237 = (0);
seq__9203_9217 = G__9234;
chunk__9204_9218 = G__9235;
count__9205_9219 = G__9236;
i__9206_9220 = G__9237;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_9238 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__6455__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_9238);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_9238)))?cljs.core.second.call(null,arglists_9238):arglists_9238));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__9207 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__9208 = null;
var count__9209 = (0);
var i__9210 = (0);
while(true){
if((i__9210 < count__9209)){
var vec__9211 = cljs.core._nth.call(null,chunk__9208,i__9210);
var name = cljs.core.nth.call(null,vec__9211,(0),null);
var map__9212 = cljs.core.nth.call(null,vec__9211,(1),null);
var map__9212__$1 = ((((!((map__9212 == null)))?((((map__9212.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9212.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9212):map__9212);
var doc = cljs.core.get.call(null,map__9212__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__9212__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__9239 = seq__9207;
var G__9240 = chunk__9208;
var G__9241 = count__9209;
var G__9242 = (i__9210 + (1));
seq__9207 = G__9239;
chunk__9208 = G__9240;
count__9209 = G__9241;
i__9210 = G__9242;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__9207);
if(temp__4425__auto__){
var seq__9207__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9207__$1)){
var c__7258__auto__ = cljs.core.chunk_first.call(null,seq__9207__$1);
var G__9243 = cljs.core.chunk_rest.call(null,seq__9207__$1);
var G__9244 = c__7258__auto__;
var G__9245 = cljs.core.count.call(null,c__7258__auto__);
var G__9246 = (0);
seq__9207 = G__9243;
chunk__9208 = G__9244;
count__9209 = G__9245;
i__9210 = G__9246;
continue;
} else {
var vec__9214 = cljs.core.first.call(null,seq__9207__$1);
var name = cljs.core.nth.call(null,vec__9214,(0),null);
var map__9215 = cljs.core.nth.call(null,vec__9214,(1),null);
var map__9215__$1 = ((((!((map__9215 == null)))?((((map__9215.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9215.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9215):map__9215);
var doc = cljs.core.get.call(null,map__9215__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__9215__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__9247 = cljs.core.next.call(null,seq__9207__$1);
var G__9248 = null;
var G__9249 = (0);
var G__9250 = (0);
seq__9207 = G__9247;
chunk__9208 = G__9248;
count__9209 = G__9249;
i__9210 = G__9250;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map