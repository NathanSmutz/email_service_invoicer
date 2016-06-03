// Compiled by ClojureScript 1.8.51 {}
goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('reagent.core');
reagent.session.state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Returns a cursor from the state atom.
 */
reagent.session.cursor = (function reagent$session$cursor(ks){
return reagent.core.cursor.call(null,reagent.session.state,ks);
});
/**
 * Get the key's value from the session, returns nil if it doesn't exist.
 */
reagent.session.get = (function reagent$session$get(var_args){
var args__19530__auto__ = [];
var len__19523__auto___20133 = arguments.length;
var i__19524__auto___20134 = (0);
while(true){
if((i__19524__auto___20134 < len__19523__auto___20133)){
args__19530__auto__.push((arguments[i__19524__auto___20134]));

var G__20135 = (i__19524__auto___20134 + (1));
i__19524__auto___20134 = G__20135;
continue;
} else {
}
break;
}

var argseq__19531__auto__ = ((((1) < args__19530__auto__.length))?(new cljs.core.IndexedSeq(args__19530__auto__.slice((1)),(0),null)):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19531__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__20131){
var vec__20132 = p__20131;
var default$ = cljs.core.nth.call(null,vec__20132,(0),null);
var temp_a = reagent.session.cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
var or__18453__auto__ = cljs.core.deref.call(null,temp_a);
if(cljs.core.truth_(or__18453__auto__)){
return or__18453__auto__;
} else {
return default$;
}
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

reagent.session.get.cljs$lang$applyTo = (function (seq20129){
var G__20130 = cljs.core.first.call(null,seq20129);
var seq20129__$1 = cljs.core.next.call(null,seq20129);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(G__20130,seq20129__$1);
});
reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 *   returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(var_args){
var args__19530__auto__ = [];
var len__19523__auto___20140 = arguments.length;
var i__19524__auto___20141 = (0);
while(true){
if((i__19524__auto___20141 < len__19523__auto___20140)){
args__19530__auto__.push((arguments[i__19524__auto___20141]));

var G__20142 = (i__19524__auto___20141 + (1));
i__19524__auto___20141 = G__20142;
continue;
} else {
}
break;
}

var argseq__19531__auto__ = ((((1) < args__19530__auto__.length))?(new cljs.core.IndexedSeq(args__19530__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19531__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__20138){
var vec__20139 = p__20138;
var default$ = cljs.core.nth.call(null,vec__20139,(0),null);
var or__18453__auto__ = cljs.core.deref.call(null,reagent.session.cursor.call(null,ks));
if(cljs.core.truth_(or__18453__auto__)){
return or__18453__auto__;
} else {
return default$;
}
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

reagent.session.get_in.cljs$lang$applyTo = (function (seq20136){
var G__20137 = cljs.core.first.call(null,seq20136);
var seq20136__$1 = cljs.core.next.call(null,seq20136);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(G__20137,seq20136__$1);
});
/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__19530__auto__ = [];
var len__19523__auto___20145 = arguments.length;
var i__19524__auto___20146 = (0);
while(true){
if((i__19524__auto___20146 < len__19523__auto___20145)){
args__19530__auto__.push((arguments[i__19524__auto___20146]));

var G__20147 = (i__19524__auto___20146 + (1));
i__19524__auto___20146 = G__20147;
continue;
} else {
}
break;
}

var argseq__19531__auto__ = ((((1) < args__19530__auto__.length))?(new cljs.core.IndexedSeq(args__19530__auto__.slice((1)),(0),null)):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19531__auto__);
});

reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,reagent.session.state,f,args);
});

reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq20143){
var G__20144 = cljs.core.first.call(null,seq20143);
var seq20143__$1 = cljs.core.next.call(null,seq20143);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20144,seq20143__$1);
});
/**
 * Remove all data from the session and start over cleanly.
 */
reagent.session.clear_BANG_ = (function reagent$session$clear_BANG_(){
return cljs.core.reset_BANG_.call(null,reagent.session.state,cljs.core.PersistentArrayMap.EMPTY);
});
reagent.session.reset_BANG_ = (function reagent$session$reset_BANG_(m){
return cljs.core.reset_BANG_.call(null,reagent.session.state,m);
});
/**
 * Remove a key from the session
 */
reagent.session.remove_BANG_ = (function reagent$session$remove_BANG_(k){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.dissoc,k);
});
/**
 * Associates a value in the session, where ks is a
 * sequence of keys and v is the new value and returns
 * a new nested structure. If any levels do not exist,
 * hash-maps will be created.
 */
reagent.session.assoc_in_BANG_ = (function reagent$session$assoc_in_BANG_(ks,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc_in,ks,v);
});
/**
 * Destructive get from the session. This returns the current value of the key
 *   and then removes it from the session.
 */
reagent.session.get_BANG_ = (function reagent$session$get_BANG_(var_args){
var args__19530__auto__ = [];
var len__19523__auto___20152 = arguments.length;
var i__19524__auto___20153 = (0);
while(true){
if((i__19524__auto___20153 < len__19523__auto___20152)){
args__19530__auto__.push((arguments[i__19524__auto___20153]));

var G__20154 = (i__19524__auto___20153 + (1));
i__19524__auto___20153 = G__20154;
continue;
} else {
}
break;
}

var argseq__19531__auto__ = ((((1) < args__19530__auto__.length))?(new cljs.core.IndexedSeq(args__19530__auto__.slice((1)),(0),null)):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19531__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__20150){
var vec__20151 = p__20150;
var default$ = cljs.core.nth.call(null,vec__20151,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq20148){
var G__20149 = cljs.core.first.call(null,seq20148);
var seq20148__$1 = cljs.core.next.call(null,seq20148);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20149,seq20148__$1);
});
/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__19530__auto__ = [];
var len__19523__auto___20159 = arguments.length;
var i__19524__auto___20160 = (0);
while(true){
if((i__19524__auto___20160 < len__19523__auto___20159)){
args__19530__auto__.push((arguments[i__19524__auto___20160]));

var G__20161 = (i__19524__auto___20160 + (1));
i__19524__auto___20160 = G__20161;
continue;
} else {
}
break;
}

var argseq__19531__auto__ = ((((1) < args__19530__auto__.length))?(new cljs.core.IndexedSeq(args__19530__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19531__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__20157){
var vec__20158 = p__20157;
var default$ = cljs.core.nth.call(null,vec__20158,(0),null);
var cur = reagent.session.get_in.call(null,ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq20155){
var G__20156 = cljs.core.first.call(null,seq20155);
var seq20155__$1 = cljs.core.next.call(null,seq20155);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20156,seq20155__$1);
});
/**
 * Updates a value in session where k is a key and f
 * is the function that takes the old value along with any
 * supplied args and return the new value. If key is not
 * present it will be added.
 */
reagent.session.update_BANG_ = (function reagent$session$update_BANG_(var_args){
var args__19530__auto__ = [];
var len__19523__auto___20166 = arguments.length;
var i__19524__auto___20167 = (0);
while(true){
if((i__19524__auto___20167 < len__19523__auto___20166)){
args__19530__auto__.push((arguments[i__19524__auto___20167]));

var G__20168 = (i__19524__auto___20167 + (1));
i__19524__auto___20167 = G__20168;
continue;
} else {
}
break;
}

var argseq__19531__auto__ = ((((2) < args__19530__auto__.length))?(new cljs.core.IndexedSeq(args__19530__auto__.slice((2)),(0),null)):null);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19531__auto__);
});

reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__20162_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update,p1__20162_SHARP_,k,f),args);
}));
});

reagent.session.update_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_BANG_.cljs$lang$applyTo = (function (seq20163){
var G__20164 = cljs.core.first.call(null,seq20163);
var seq20163__$1 = cljs.core.next.call(null,seq20163);
var G__20165 = cljs.core.first.call(null,seq20163__$1);
var seq20163__$2 = cljs.core.next.call(null,seq20163__$1);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20164,G__20165,seq20163__$2);
});
/**
 * 'Updates a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(var_args){
var args__19530__auto__ = [];
var len__19523__auto___20173 = arguments.length;
var i__19524__auto___20174 = (0);
while(true){
if((i__19524__auto___20174 < len__19523__auto___20173)){
args__19530__auto__.push((arguments[i__19524__auto___20174]));

var G__20175 = (i__19524__auto___20174 + (1));
i__19524__auto___20174 = G__20175;
continue;
} else {
}
break;
}

var argseq__19531__auto__ = ((((2) < args__19530__auto__.length))?(new cljs.core.IndexedSeq(args__19530__auto__.slice((2)),(0),null)):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19531__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__20169_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__20169_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq20170){
var G__20171 = cljs.core.first.call(null,seq20170);
var seq20170__$1 = cljs.core.next.call(null,seq20170);
var G__20172 = cljs.core.first.call(null,seq20170__$1);
var seq20170__$2 = cljs.core.next.call(null,seq20170__$1);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20171,G__20172,seq20170__$2);
});

//# sourceMappingURL=session.js.map