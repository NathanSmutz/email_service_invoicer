// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
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
var seq__25910_25924 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25911_25925 = null;
var count__25912_25926 = (0);
var i__25913_25927 = (0);
while(true){
if((i__25913_25927 < count__25912_25926)){
var f_25928 = cljs.core._nth.call(null,chunk__25911_25925,i__25913_25927);
cljs.core.println.call(null,"  ",f_25928);

var G__25929 = seq__25910_25924;
var G__25930 = chunk__25911_25925;
var G__25931 = count__25912_25926;
var G__25932 = (i__25913_25927 + (1));
seq__25910_25924 = G__25929;
chunk__25911_25925 = G__25930;
count__25912_25926 = G__25931;
i__25913_25927 = G__25932;
continue;
} else {
var temp__4657__auto___25933 = cljs.core.seq.call(null,seq__25910_25924);
if(temp__4657__auto___25933){
var seq__25910_25934__$1 = temp__4657__auto___25933;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25910_25934__$1)){
var c__19264__auto___25935 = cljs.core.chunk_first.call(null,seq__25910_25934__$1);
var G__25936 = cljs.core.chunk_rest.call(null,seq__25910_25934__$1);
var G__25937 = c__19264__auto___25935;
var G__25938 = cljs.core.count.call(null,c__19264__auto___25935);
var G__25939 = (0);
seq__25910_25924 = G__25936;
chunk__25911_25925 = G__25937;
count__25912_25926 = G__25938;
i__25913_25927 = G__25939;
continue;
} else {
var f_25940 = cljs.core.first.call(null,seq__25910_25934__$1);
cljs.core.println.call(null,"  ",f_25940);

var G__25941 = cljs.core.next.call(null,seq__25910_25934__$1);
var G__25942 = null;
var G__25943 = (0);
var G__25944 = (0);
seq__25910_25924 = G__25941;
chunk__25911_25925 = G__25942;
count__25912_25926 = G__25943;
i__25913_25927 = G__25944;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_25945 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18453__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18453__auto__)){
return or__18453__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_25945);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_25945)))?cljs.core.second.call(null,arglists_25945):arglists_25945));
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
var seq__25914 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25915 = null;
var count__25916 = (0);
var i__25917 = (0);
while(true){
if((i__25917 < count__25916)){
var vec__25918 = cljs.core._nth.call(null,chunk__25915,i__25917);
var name = cljs.core.nth.call(null,vec__25918,(0),null);
var map__25919 = cljs.core.nth.call(null,vec__25918,(1),null);
var map__25919__$1 = ((((!((map__25919 == null)))?((((map__25919.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25919.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25919):map__25919);
var doc = cljs.core.get.call(null,map__25919__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25919__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25946 = seq__25914;
var G__25947 = chunk__25915;
var G__25948 = count__25916;
var G__25949 = (i__25917 + (1));
seq__25914 = G__25946;
chunk__25915 = G__25947;
count__25916 = G__25948;
i__25917 = G__25949;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25914);
if(temp__4657__auto__){
var seq__25914__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25914__$1)){
var c__19264__auto__ = cljs.core.chunk_first.call(null,seq__25914__$1);
var G__25950 = cljs.core.chunk_rest.call(null,seq__25914__$1);
var G__25951 = c__19264__auto__;
var G__25952 = cljs.core.count.call(null,c__19264__auto__);
var G__25953 = (0);
seq__25914 = G__25950;
chunk__25915 = G__25951;
count__25916 = G__25952;
i__25917 = G__25953;
continue;
} else {
var vec__25921 = cljs.core.first.call(null,seq__25914__$1);
var name = cljs.core.nth.call(null,vec__25921,(0),null);
var map__25922 = cljs.core.nth.call(null,vec__25921,(1),null);
var map__25922__$1 = ((((!((map__25922 == null)))?((((map__25922.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25922.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25922):map__25922);
var doc = cljs.core.get.call(null,map__25922__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25922__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25954 = cljs.core.next.call(null,seq__25914__$1);
var G__25955 = null;
var G__25956 = (0);
var G__25957 = (0);
seq__25914 = G__25954;
chunk__25915 = G__25955;
count__25916 = G__25956;
i__25917 = G__25957;
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