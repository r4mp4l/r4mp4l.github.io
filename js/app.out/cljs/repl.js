// Compiled by ClojureScript 1.7.170 {}
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
var seq__7543_7557 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__7544_7558 = null;
var count__7545_7559 = (0);
var i__7546_7560 = (0);
while(true){
if((i__7546_7560 < count__7545_7559)){
var f_7561 = cljs.core._nth.call(null,chunk__7544_7558,i__7546_7560);
cljs.core.println.call(null,"  ",f_7561);

var G__7562 = seq__7543_7557;
var G__7563 = chunk__7544_7558;
var G__7564 = count__7545_7559;
var G__7565 = (i__7546_7560 + (1));
seq__7543_7557 = G__7562;
chunk__7544_7558 = G__7563;
count__7545_7559 = G__7564;
i__7546_7560 = G__7565;
continue;
} else {
var temp__4425__auto___7566 = cljs.core.seq.call(null,seq__7543_7557);
if(temp__4425__auto___7566){
var seq__7543_7567__$1 = temp__4425__auto___7566;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7543_7567__$1)){
var c__5789__auto___7568 = cljs.core.chunk_first.call(null,seq__7543_7567__$1);
var G__7569 = cljs.core.chunk_rest.call(null,seq__7543_7567__$1);
var G__7570 = c__5789__auto___7568;
var G__7571 = cljs.core.count.call(null,c__5789__auto___7568);
var G__7572 = (0);
seq__7543_7557 = G__7569;
chunk__7544_7558 = G__7570;
count__7545_7559 = G__7571;
i__7546_7560 = G__7572;
continue;
} else {
var f_7573 = cljs.core.first.call(null,seq__7543_7567__$1);
cljs.core.println.call(null,"  ",f_7573);

var G__7574 = cljs.core.next.call(null,seq__7543_7567__$1);
var G__7575 = null;
var G__7576 = (0);
var G__7577 = (0);
seq__7543_7557 = G__7574;
chunk__7544_7558 = G__7575;
count__7545_7559 = G__7576;
i__7546_7560 = G__7577;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_7578 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4986__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4986__auto__)){
return or__4986__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_7578);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_7578)))?cljs.core.second.call(null,arglists_7578):arglists_7578));
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
var seq__7547 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__7548 = null;
var count__7549 = (0);
var i__7550 = (0);
while(true){
if((i__7550 < count__7549)){
var vec__7551 = cljs.core._nth.call(null,chunk__7548,i__7550);
var name = cljs.core.nth.call(null,vec__7551,(0),null);
var map__7552 = cljs.core.nth.call(null,vec__7551,(1),null);
var map__7552__$1 = ((((!((map__7552 == null)))?((((map__7552.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7552.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7552):map__7552);
var doc = cljs.core.get.call(null,map__7552__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__7552__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__7579 = seq__7547;
var G__7580 = chunk__7548;
var G__7581 = count__7549;
var G__7582 = (i__7550 + (1));
seq__7547 = G__7579;
chunk__7548 = G__7580;
count__7549 = G__7581;
i__7550 = G__7582;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7547);
if(temp__4425__auto__){
var seq__7547__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7547__$1)){
var c__5789__auto__ = cljs.core.chunk_first.call(null,seq__7547__$1);
var G__7583 = cljs.core.chunk_rest.call(null,seq__7547__$1);
var G__7584 = c__5789__auto__;
var G__7585 = cljs.core.count.call(null,c__5789__auto__);
var G__7586 = (0);
seq__7547 = G__7583;
chunk__7548 = G__7584;
count__7549 = G__7585;
i__7550 = G__7586;
continue;
} else {
var vec__7554 = cljs.core.first.call(null,seq__7547__$1);
var name = cljs.core.nth.call(null,vec__7554,(0),null);
var map__7555 = cljs.core.nth.call(null,vec__7554,(1),null);
var map__7555__$1 = ((((!((map__7555 == null)))?((((map__7555.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7555.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7555):map__7555);
var doc = cljs.core.get.call(null,map__7555__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__7555__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__7587 = cljs.core.next.call(null,seq__7547__$1);
var G__7588 = null;
var G__7589 = (0);
var G__7590 = (0);
seq__7547 = G__7587;
chunk__7548 = G__7588;
count__7549 = G__7589;
i__7550 = G__7590;
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