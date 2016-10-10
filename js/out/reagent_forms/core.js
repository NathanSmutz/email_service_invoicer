// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('reagent_forms.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('reagent.core');
goog.require('reagent_forms.datepicker');
reagent_forms.core.value_of = (function reagent_forms$core$value_of(element){
return element.target.value;
});
reagent_forms.core.id__GT_path = cljs.core.memoize((function (id){
if(cljs.core.sequential_QMARK_(id)){
return id;
} else {
var segments = clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$2([cljs.core.str(id)].join(''),(1)),/\./);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,segments);
}
}));
reagent_forms.core.set_doc_value = (function reagent_forms$core$set_doc_value(doc,id,value,events){
var path = (reagent_forms.core.id__GT_path.cljs$core$IFn$_invoke$arity$1 ? reagent_forms.core.id__GT_path.cljs$core$IFn$_invoke$arity$1(id) : reagent_forms.core.id__GT_path.call(null,id));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (path){
return (function (p1__13544_SHARP_,p2__13543_SHARP_){
var or__6407__auto__ = (p2__13543_SHARP_.cljs$core$IFn$_invoke$arity$3 ? p2__13543_SHARP_.cljs$core$IFn$_invoke$arity$3(path,value,p1__13544_SHARP_) : p2__13543_SHARP_.call(null,path,value,p1__13544_SHARP_));
if(cljs.core.truth_(or__6407__auto__)){
return or__6407__auto__;
} else {
return p1__13544_SHARP_;
}
});})(path))
,cljs.core.assoc_in(doc,path,value),events);
});
reagent_forms.core.mk_save_fn = (function reagent_forms$core$mk_save_fn(doc,events){
return (function (id,value){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(doc,reagent_forms.core.set_doc_value,id,value,cljs.core.array_seq([events], 0));
});
});
reagent_forms.core.wrap_get_fn = (function reagent_forms$core$wrap_get_fn(get,wrapper){
return (function (id){
var G__13546 = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
return (wrapper.cljs$core$IFn$_invoke$arity$1 ? wrapper.cljs$core$IFn$_invoke$arity$1(G__13546) : wrapper.call(null,G__13546));
});
});
reagent_forms.core.wrap_save_fn = (function reagent_forms$core$wrap_save_fn(save_BANG_,wrapper){
return (function (id,value){
var G__13549 = id;
var G__13550 = (wrapper.cljs$core$IFn$_invoke$arity$1 ? wrapper.cljs$core$IFn$_invoke$arity$1(value) : wrapper.call(null,value));
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__13549,G__13550) : save_BANG_.call(null,G__13549,G__13550));
});
});
reagent_forms.core.wrap_fns = (function reagent_forms$core$wrap_fns(opts,node){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$doc,cljs.core.cst$kw$doc.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$get,(function (){var temp__4655__auto__ = cljs.core.cst$kw$in_DASH_fn.cljs$core$IFn$_invoke$arity$1(cljs.core.second(node));
if(cljs.core.truth_(temp__4655__auto__)){
var in_fn = temp__4655__auto__;
return reagent_forms.core.wrap_get_fn(cljs.core.cst$kw$get.cljs$core$IFn$_invoke$arity$1(opts),in_fn);
} else {
return cljs.core.cst$kw$get.cljs$core$IFn$_invoke$arity$1(opts);
}
})(),cljs.core.cst$kw$save_BANG_,(function (){var temp__4655__auto__ = cljs.core.cst$kw$out_DASH_fn.cljs$core$IFn$_invoke$arity$1(cljs.core.second(node));
if(cljs.core.truth_(temp__4655__auto__)){
var out_fn = temp__4655__auto__;
return reagent_forms.core.wrap_save_fn(cljs.core.cst$kw$save_BANG_.cljs$core$IFn$_invoke$arity$1(opts),out_fn);
} else {
return cljs.core.cst$kw$save_BANG_.cljs$core$IFn$_invoke$arity$1(opts);
}
})()], null);
});
if(typeof reagent_forms.core.format_type !== 'undefined'){
} else {
reagent_forms.core.format_type = (function (){var method_table__7332__auto__ = (function (){var G__13551 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13551) : cljs.core.atom.call(null,G__13551));
})();
var prefer_table__7333__auto__ = (function (){var G__13552 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13552) : cljs.core.atom.call(null,G__13552));
})();
var method_cache__7334__auto__ = (function (){var G__13553 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13553) : cljs.core.atom.call(null,G__13553));
})();
var cached_hierarchy__7335__auto__ = (function (){var G__13554 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13554) : cljs.core.atom.call(null,G__13554));
})();
var hierarchy__7336__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("reagent-forms.core","format-type"),((function (method_table__7332__auto__,prefer_table__7333__auto__,method_cache__7334__auto__,cached_hierarchy__7335__auto__,hierarchy__7336__auto__){
return (function (field_type,_){
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.fromArray([field_type], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$range,cljs.core.cst$kw$numeric], null)))){
return cljs.core.cst$kw$numeric;
} else {
return field_type;
}
});})(method_table__7332__auto__,prefer_table__7333__auto__,method_cache__7334__auto__,cached_hierarchy__7335__auto__,hierarchy__7336__auto__))
,cljs.core.cst$kw$default,hierarchy__7336__auto__,method_table__7332__auto__,prefer_table__7333__auto__,method_cache__7334__auto__,cached_hierarchy__7335__auto__));
})();
}
reagent_forms.core.valid_number_ending_QMARK_ = (function reagent_forms$core$valid_number_ending_QMARK_(n){
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(".",cljs.core.last(cljs.core.butlast(n)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(".",cljs.core.last(n)))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("0",cljs.core.last(n)));
});
reagent_forms.core.format_value = (function reagent_forms$core$format_value(fmt,value){
if(cljs.core.truth_((function (){var and__6395__auto__ = cljs.core.not((function (){var G__13558 = parseFloat(value);
return isNaN(G__13558);
})());
if(and__6395__auto__){
return fmt;
} else {
return and__6395__auto__;
}
})())){
return goog.string.format(fmt,value);
} else {
return value;
}
});
reagent_forms.core.format_type.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$numeric,(function (_,n){
if(cljs.core.truth_(cljs.core.not_empty(n))){
var parsed = parseFloat(n);
if(cljs.core.truth_(isNaN(parsed))){
return null;
} else {
return parsed;
}
} else {
return null;
}
}));
reagent_forms.core.format_type.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (_,value){
return value;
}));
if(typeof reagent_forms.core.bind !== 'undefined'){
} else {
reagent_forms.core.bind = (function (){var method_table__7332__auto__ = (function (){var G__13559 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13559) : cljs.core.atom.call(null,G__13559));
})();
var prefer_table__7333__auto__ = (function (){var G__13560 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13560) : cljs.core.atom.call(null,G__13560));
})();
var method_cache__7334__auto__ = (function (){var G__13561 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13561) : cljs.core.atom.call(null,G__13561));
})();
var cached_hierarchy__7335__auto__ = (function (){var G__13562 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13562) : cljs.core.atom.call(null,G__13562));
})();
var hierarchy__7336__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("reagent-forms.core","bind"),((function (method_table__7332__auto__,prefer_table__7333__auto__,method_cache__7334__auto__,cached_hierarchy__7335__auto__,hierarchy__7336__auto__){
return (function (p__13563,_){
var map__13564 = p__13563;
var map__13564__$1 = ((((!((map__13564 == null)))?((((map__13564.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13564.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13564):map__13564);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13564__$1,cljs.core.cst$kw$field);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.fromArray([field], true),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$text,cljs.core.cst$kw$numeric,cljs.core.cst$kw$password,cljs.core.cst$kw$email,cljs.core.cst$kw$tel,cljs.core.cst$kw$range,cljs.core.cst$kw$textarea], null)))){
return cljs.core.cst$kw$input_DASH_field;
} else {
return field;
}
});})(method_table__7332__auto__,prefer_table__7333__auto__,method_cache__7334__auto__,cached_hierarchy__7335__auto__,hierarchy__7336__auto__))
,cljs.core.cst$kw$default,hierarchy__7336__auto__,method_table__7332__auto__,prefer_table__7333__auto__,method_cache__7334__auto__,cached_hierarchy__7335__auto__));
})();
}
reagent_forms.core.bind.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$input_DASH_field,(function (p__13567,p__13568){
var map__13569 = p__13567;
var map__13569__$1 = ((((!((map__13569 == null)))?((((map__13569.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13569.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13569):map__13569);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13569__$1,cljs.core.cst$kw$field);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13569__$1,cljs.core.cst$kw$id);
var fmt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13569__$1,cljs.core.cst$kw$fmt);
var map__13570 = p__13568;
var map__13570__$1 = ((((!((map__13570 == null)))?((((map__13570.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13570.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13570):map__13570);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13570__$1,cljs.core.cst$kw$get);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13570__$1,cljs.core.cst$kw$save_BANG_);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13570__$1,cljs.core.cst$kw$doc);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,(function (){var value = (function (){var or__6407__auto__ = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
if(cljs.core.truth_(or__6407__auto__)){
return or__6407__auto__;
} else {
return "";
}
})();
return reagent_forms.core.format_value(fmt,value);
})(),cljs.core.cst$kw$on_DASH_change,((function (map__13569,map__13569__$1,field,id,fmt,map__13570,map__13570__$1,get,save_BANG_,doc){
return (function (p1__13566_SHARP_){
var G__13573 = id;
var G__13574 = (function (){var G__13575 = field;
var G__13576 = reagent_forms.core.value_of(p1__13566_SHARP_);
return (reagent_forms.core.format_type.cljs$core$IFn$_invoke$arity$2 ? reagent_forms.core.format_type.cljs$core$IFn$_invoke$arity$2(G__13575,G__13576) : reagent_forms.core.format_type.call(null,G__13575,G__13576));
})();
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__13573,G__13574) : save_BANG_.call(null,G__13573,G__13574));
});})(map__13569,map__13569__$1,field,id,fmt,map__13570,map__13570__$1,get,save_BANG_,doc))
], null);
}));
reagent_forms.core.bind.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$checkbox,(function (p__13577,p__13578){
var map__13579 = p__13577;
var map__13579__$1 = ((((!((map__13579 == null)))?((((map__13579.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13579.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13579):map__13579);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13579__$1,cljs.core.cst$kw$id);
var map__13580 = p__13578;
var map__13580__$1 = ((((!((map__13580 == null)))?((((map__13580.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13580.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13580):map__13580);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13580__$1,cljs.core.cst$kw$get);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13580__$1,cljs.core.cst$kw$save_BANG_);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$default_DASH_checked,(get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id)),cljs.core.cst$kw$on_DASH_change,((function (map__13579,map__13579__$1,id,map__13580,map__13580__$1,get,save_BANG_){
return (function (){
var G__13583 = id;
var G__13584 = cljs.core.not((get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id)));
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__13583,G__13584) : save_BANG_.call(null,G__13583,G__13584));
});})(map__13579,map__13579__$1,id,map__13580,map__13580__$1,get,save_BANG_))
], null),(cljs.core.truth_((get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id)))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$checked,"checked"], null):null)], 0));
}));
reagent_forms.core.bind.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (_,___$1){
return null;
}));
reagent_forms.core.set_attrs = (function reagent_forms$core$set_attrs(var_args){
var args__7489__auto__ = [];
var len__7482__auto___13596 = arguments.length;
var i__7483__auto___13597 = (0);
while(true){
if((i__7483__auto___13597 < len__7482__auto___13596)){
args__7489__auto__.push((arguments[i__7483__auto___13597]));

var G__13598 = (i__7483__auto___13597 + (1));
i__7483__auto___13597 = G__13598;
continue;
} else {
}
break;
}

var argseq__7490__auto__ = ((((2) < args__7489__auto__.length))?(new cljs.core.IndexedSeq(args__7489__auto__.slice((2)),(0),null)):null);
return reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7490__auto__);
});

reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic = (function (p__13588,opts,p__13589){
var vec__13590 = p__13588;
var seq__13591 = cljs.core.seq(vec__13590);
var first__13592 = cljs.core.first(seq__13591);
var seq__13591__$1 = cljs.core.next(seq__13591);
var type = first__13592;
var first__13592__$1 = cljs.core.first(seq__13591__$1);
var seq__13591__$2 = cljs.core.next(seq__13591__$1);
var attrs = first__13592__$1;
var body = seq__13591__$2;
var vec__13593 = p__13589;
var default_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13593,(0),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([default_attrs,(reagent_forms.core.bind.cljs$core$IFn$_invoke$arity$2 ? reagent_forms.core.bind.cljs$core$IFn$_invoke$arity$2(attrs,opts) : reagent_forms.core.bind.call(null,attrs,opts)),attrs], 0))], null),body);
});

reagent_forms.core.set_attrs.cljs$lang$maxFixedArity = (2);

reagent_forms.core.set_attrs.cljs$lang$applyTo = (function (seq13585){
var G__13586 = cljs.core.first(seq13585);
var seq13585__$1 = cljs.core.next(seq13585);
var G__13587 = cljs.core.first(seq13585__$1);
var seq13585__$2 = cljs.core.next(seq13585__$1);
return reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic(G__13586,G__13587,seq13585__$2);
});

if(typeof reagent_forms.core.init_field !== 'undefined'){
} else {
reagent_forms.core.init_field = (function (){var method_table__7332__auto__ = (function (){var G__13599 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13599) : cljs.core.atom.call(null,G__13599));
})();
var prefer_table__7333__auto__ = (function (){var G__13600 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13600) : cljs.core.atom.call(null,G__13600));
})();
var method_cache__7334__auto__ = (function (){var G__13601 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13601) : cljs.core.atom.call(null,G__13601));
})();
var cached_hierarchy__7335__auto__ = (function (){var G__13602 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13602) : cljs.core.atom.call(null,G__13602));
})();
var hierarchy__7336__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("reagent-forms.core","init-field"),((function (method_table__7332__auto__,prefer_table__7333__auto__,method_cache__7334__auto__,cached_hierarchy__7335__auto__,hierarchy__7336__auto__){
return (function (p__13603,_){
var vec__13604 = p__13603;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13604,(0),null);
var map__13607 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13604,(1),null);
var map__13607__$1 = ((((!((map__13607 == null)))?((((map__13607.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13607.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13607):map__13607);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13607__$1,cljs.core.cst$kw$field);
var field__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(field);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.fromArray([field__$1], true),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$range,cljs.core.cst$kw$text,cljs.core.cst$kw$password,cljs.core.cst$kw$email,cljs.core.cst$kw$tel,cljs.core.cst$kw$textarea], null)))){
return cljs.core.cst$kw$input_DASH_field;
} else {
return field__$1;
}
});})(method_table__7332__auto__,prefer_table__7333__auto__,method_cache__7334__auto__,cached_hierarchy__7335__auto__,hierarchy__7336__auto__))
,cljs.core.cst$kw$default,hierarchy__7336__auto__,method_table__7332__auto__,prefer_table__7333__auto__,method_cache__7334__auto__,cached_hierarchy__7335__auto__));
})();
}
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$container,(function (p__13610,p__13611){
var vec__13612 = p__13610;
var seq__13613 = cljs.core.seq(vec__13612);
var first__13614 = cljs.core.first(seq__13613);
var seq__13613__$1 = cljs.core.next(seq__13613);
var type = first__13614;
var first__13614__$1 = cljs.core.first(seq__13613__$1);
var seq__13613__$2 = cljs.core.next(seq__13613__$1);
var map__13615 = first__13614__$1;
var map__13615__$1 = ((((!((map__13615 == null)))?((((map__13615.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13615.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13615):map__13615);
var attrs = map__13615__$1;
var valid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13615__$1,cljs.core.cst$kw$valid_QMARK_);
var body = seq__13613__$2;
var map__13616 = p__13611;
var map__13616__$1 = ((((!((map__13616 == null)))?((((map__13616.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13616.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13616):map__13616);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13616__$1,cljs.core.cst$kw$doc);
return ((function (vec__13612,seq__13613,first__13614,seq__13613__$1,type,first__13614__$1,seq__13613__$2,map__13615,map__13615__$1,attrs,valid_QMARK_,body,map__13616,map__13616__$1,doc){
return (function (){
var temp__4655__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4655__auto__)){
var visible__13535__auto__ = temp__4655__auto__;
if(cljs.core.truth_((function (){var G__13619 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(doc) : cljs.core.deref.call(null,doc));
return (visible__13535__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__13535__auto__.cljs$core$IFn$_invoke$arity$1(G__13619) : visible__13535__auto__.call(null,G__13619));
})())){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,(function (){var temp__4655__auto____$1 = (cljs.core.truth_(valid_QMARK_)?(function (){var G__13620 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(doc) : cljs.core.deref.call(null,doc));
return (valid_QMARK_.cljs$core$IFn$_invoke$arity$1 ? valid_QMARK_.cljs$core$IFn$_invoke$arity$1(G__13620) : valid_QMARK_.call(null,G__13620));
})():null);
if(cljs.core.truth_(temp__4655__auto____$1)){
var valid_class = temp__4655__auto____$1;
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(attrs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$class], null),((function (valid_class,temp__4655__auto____$1,visible__13535__auto__,temp__4655__auto__,vec__13612,seq__13613,first__13614,seq__13613__$1,type,first__13614__$1,seq__13613__$2,map__13615,map__13615__$1,attrs,valid_QMARK_,body,map__13616,map__13616__$1,doc){
return (function (p1__13609_SHARP_){
if(!(cljs.core.empty_QMARK_(p1__13609_SHARP_))){
return [cljs.core.str(p1__13609_SHARP_),cljs.core.str(" "),cljs.core.str(valid_class)].join('');
} else {
return valid_class;
}
});})(valid_class,temp__4655__auto____$1,visible__13535__auto__,temp__4655__auto__,vec__13612,seq__13613,first__13614,seq__13613__$1,type,first__13614__$1,seq__13613__$2,map__13615,map__13615__$1,attrs,valid_QMARK_,body,map__13616,map__13616__$1,doc))
);
} else {
return attrs;
}
})()], null),body);
} else {
return null;
}
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,(function (){var temp__4655__auto____$1 = (cljs.core.truth_(valid_QMARK_)?(function (){var G__13621 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(doc) : cljs.core.deref.call(null,doc));
return (valid_QMARK_.cljs$core$IFn$_invoke$arity$1 ? valid_QMARK_.cljs$core$IFn$_invoke$arity$1(G__13621) : valid_QMARK_.call(null,G__13621));
})():null);
if(cljs.core.truth_(temp__4655__auto____$1)){
var valid_class = temp__4655__auto____$1;
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(attrs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$class], null),((function (valid_class,temp__4655__auto____$1,temp__4655__auto__,vec__13612,seq__13613,first__13614,seq__13613__$1,type,first__13614__$1,seq__13613__$2,map__13615,map__13615__$1,attrs,valid_QMARK_,body,map__13616,map__13616__$1,doc){
return (function (p1__13609_SHARP_){
if(!(cljs.core.empty_QMARK_(p1__13609_SHARP_))){
return [cljs.core.str(p1__13609_SHARP_),cljs.core.str(" "),cljs.core.str(valid_class)].join('');
} else {
return valid_class;
}
});})(valid_class,temp__4655__auto____$1,temp__4655__auto__,vec__13612,seq__13613,first__13614,seq__13613__$1,type,first__13614__$1,seq__13613__$2,map__13615,map__13615__$1,attrs,valid_QMARK_,body,map__13616,map__13616__$1,doc))
);
} else {
return attrs;
}
})()], null),body);
}
});
;})(vec__13612,seq__13613,first__13614,seq__13613__$1,type,first__13614__$1,seq__13613__$2,map__13615,map__13615__$1,attrs,valid_QMARK_,body,map__13616,map__13616__$1,doc))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$input_DASH_field,(function (p__13622,p__13623){
var vec__13624 = p__13622;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13624,(0),null);
var map__13627 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13624,(1),null);
var map__13627__$1 = ((((!((map__13627 == null)))?((((map__13627.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13627.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13627):map__13627);
var attrs = map__13627__$1;
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13627__$1,cljs.core.cst$kw$field);
var component = vec__13624;
var map__13628 = p__13623;
var map__13628__$1 = ((((!((map__13628 == null)))?((((map__13628.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13628.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13628):map__13628);
var opts = map__13628__$1;
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13628__$1,cljs.core.cst$kw$doc);
return ((function (vec__13624,_,map__13627,map__13627__$1,attrs,field,component,map__13628,map__13628__$1,opts,doc){
return (function (){
var temp__4655__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4655__auto__)){
var visible__13535__auto__ = temp__4655__auto__;
if(cljs.core.truth_((function (){var G__13631 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(doc) : cljs.core.deref.call(null,doc));
return (visible__13535__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__13535__auto__.cljs$core$IFn$_invoke$arity$1(G__13631) : visible__13535__auto__.call(null,G__13631));
})())){
return reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic(component,opts,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,field], null)], 0));
} else {
return null;
}
} else {
return reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic(component,opts,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,field], null)], 0));
}
});
;})(vec__13624,_,map__13627,map__13627__$1,attrs,field,component,map__13628,map__13628__$1,opts,doc))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$numeric,(function (p__13634,p__13635){
var vec__13636 = p__13634;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13636,(0),null);
var map__13639 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13636,(1),null);
var map__13639__$1 = ((((!((map__13639 == null)))?((((map__13639.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13639.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13639):map__13639);
var attrs = map__13639__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13639__$1,cljs.core.cst$kw$id);
var fmt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13639__$1,cljs.core.cst$kw$fmt);
var map__13640 = p__13635;
var map__13640__$1 = ((((!((map__13640 == null)))?((((map__13640.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13640.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13640):map__13640);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13640__$1,cljs.core.cst$kw$doc);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13640__$1,cljs.core.cst$kw$get);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13640__$1,cljs.core.cst$kw$save_BANG_);
var input_value = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return ((function (input_value,vec__13636,type,map__13639,map__13639__$1,attrs,id,fmt,map__13640,map__13640__$1,doc,get,save_BANG_){
return (function (){
var temp__4655__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4655__auto__)){
var visible__13535__auto__ = temp__4655__auto__;
if(cljs.core.truth_((function (){var G__13643 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(doc) : cljs.core.deref.call(null,doc));
return (visible__13535__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__13535__auto__.cljs$core$IFn$_invoke$arity$1(G__13643) : visible__13535__auto__.call(null,G__13643));
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$text,cljs.core.cst$kw$value,(function (){var or__6407__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(input_value) : cljs.core.deref.call(null,input_value));
if(cljs.core.truth_(or__6407__auto__)){
return or__6407__auto__;
} else {
return (get.cljs$core$IFn$_invoke$arity$2 ? get.cljs$core$IFn$_invoke$arity$2(id,"") : get.call(null,id,""));
}
})(),cljs.core.cst$kw$on_DASH_change,((function (visible__13535__auto__,temp__4655__auto__,input_value,vec__13636,type,map__13639,map__13639__$1,attrs,id,fmt,map__13640,map__13640__$1,doc,get,save_BANG_){
return (function (p1__13632_SHARP_){
var G__13644 = input_value;
var G__13645 = reagent_forms.core.value_of(p1__13632_SHARP_);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13644,G__13645) : cljs.core.reset_BANG_.call(null,G__13644,G__13645));
});})(visible__13535__auto__,temp__4655__auto__,input_value,vec__13636,type,map__13639,map__13639__$1,attrs,id,fmt,map__13640,map__13640__$1,doc,get,save_BANG_))
,cljs.core.cst$kw$on_DASH_blur,((function (visible__13535__auto__,temp__4655__auto__,input_value,vec__13636,type,map__13639,map__13639__$1,attrs,id,fmt,map__13640,map__13640__$1,doc,get,save_BANG_){
return (function (p1__13633_SHARP_){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(input_value,null) : cljs.core.reset_BANG_.call(null,input_value,null));

var G__13646 = id;
var G__13647 = (function (){var G__13648 = cljs.core.cst$kw$numeric;
var G__13649 = reagent_forms.core.format_value(fmt,reagent_forms.core.value_of(p1__13633_SHARP_));
return (reagent_forms.core.format_type.cljs$core$IFn$_invoke$arity$2 ? reagent_forms.core.format_type.cljs$core$IFn$_invoke$arity$2(G__13648,G__13649) : reagent_forms.core.format_type.call(null,G__13648,G__13649));
})();
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__13646,G__13647) : save_BANG_.call(null,G__13646,G__13647));
});})(visible__13535__auto__,temp__4655__auto__,input_value,vec__13636,type,map__13639,map__13639__$1,attrs,id,fmt,map__13640,map__13640__$1,doc,get,save_BANG_))
], null),attrs], 0))], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$text,cljs.core.cst$kw$value,(function (){var or__6407__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(input_value) : cljs.core.deref.call(null,input_value));
if(cljs.core.truth_(or__6407__auto__)){
return or__6407__auto__;
} else {
return (get.cljs$core$IFn$_invoke$arity$2 ? get.cljs$core$IFn$_invoke$arity$2(id,"") : get.call(null,id,""));
}
})(),cljs.core.cst$kw$on_DASH_change,((function (temp__4655__auto__,input_value,vec__13636,type,map__13639,map__13639__$1,attrs,id,fmt,map__13640,map__13640__$1,doc,get,save_BANG_){
return (function (p1__13632_SHARP_){
var G__13650 = input_value;
var G__13651 = reagent_forms.core.value_of(p1__13632_SHARP_);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13650,G__13651) : cljs.core.reset_BANG_.call(null,G__13650,G__13651));
});})(temp__4655__auto__,input_value,vec__13636,type,map__13639,map__13639__$1,attrs,id,fmt,map__13640,map__13640__$1,doc,get,save_BANG_))
,cljs.core.cst$kw$on_DASH_blur,((function (temp__4655__auto__,input_value,vec__13636,type,map__13639,map__13639__$1,attrs,id,fmt,map__13640,map__13640__$1,doc,get,save_BANG_){
return (function (p1__13633_SHARP_){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(input_value,null) : cljs.core.reset_BANG_.call(null,input_value,null));

var G__13652 = id;
var G__13653 = (function (){var G__13654 = cljs.core.cst$kw$numeric;
var G__13655 = reagent_forms.core.format_value(fmt,reagent_forms.core.value_of(p1__13633_SHARP_));
return (reagent_forms.core.format_type.cljs$core$IFn$_invoke$arity$2 ? reagent_forms.core.format_type.cljs$core$IFn$_invoke$arity$2(G__13654,G__13655) : reagent_forms.core.format_type.call(null,G__13654,G__13655));
})();
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__13652,G__13653) : save_BANG_.call(null,G__13652,G__13653));
});})(temp__4655__auto__,input_value,vec__13636,type,map__13639,map__13639__$1,attrs,id,fmt,map__13640,map__13640__$1,doc,get,save_BANG_))
], null),attrs], 0))], null);
}
});
;})(input_value,vec__13636,type,map__13639,map__13639__$1,attrs,id,fmt,map__13640,map__13640__$1,doc,get,save_BANG_))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$datepicker,(function (p__13659,p__13660){
var vec__13661 = p__13659;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13661,(0),null);
var map__13664 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13661,(1),null);
var map__13664__$1 = ((((!((map__13664 == null)))?((((map__13664.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13664.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13664):map__13664);
var attrs = map__13664__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13664__$1,cljs.core.cst$kw$id);
var date_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13664__$1,cljs.core.cst$kw$date_DASH_format);
var inline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13664__$1,cljs.core.cst$kw$inline);
var auto_close_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13664__$1,cljs.core.cst$kw$auto_DASH_close_QMARK_);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13664__$1,cljs.core.cst$kw$lang,cljs.core.cst$kw$en_DASH_US);
var map__13665 = p__13660;
var map__13665__$1 = ((((!((map__13665 == null)))?((((map__13665.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13665.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13665):map__13665);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13665__$1,cljs.core.cst$kw$doc);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13665__$1,cljs.core.cst$kw$get);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13665__$1,cljs.core.cst$kw$save_BANG_);
var fmt = reagent_forms.datepicker.parse_format(date_format);
var selected_date = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
var selected_month = (((cljs.core.cst$kw$month.cljs$core$IFn$_invoke$arity$1(selected_date) > (0)))?(cljs.core.cst$kw$month.cljs$core$IFn$_invoke$arity$1(selected_date) - (1)):cljs.core.cst$kw$month.cljs$core$IFn$_invoke$arity$1(selected_date));
var today = (new Date());
var year = (function (){var or__6407__auto__ = cljs.core.cst$kw$year.cljs$core$IFn$_invoke$arity$1(selected_date);
if(cljs.core.truth_(or__6407__auto__)){
return or__6407__auto__;
} else {
return today.getFullYear();
}
})();
var month = (function (){var or__6407__auto__ = selected_month;
if(cljs.core.truth_(or__6407__auto__)){
return or__6407__auto__;
} else {
return today.getMonth();
}
})();
var day = (function (){var or__6407__auto__ = cljs.core.cst$kw$day.cljs$core$IFn$_invoke$arity$1(selected_date);
if(cljs.core.truth_(or__6407__auto__)){
return or__6407__auto__;
} else {
return today.getDate();
}
})();
var expanded_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return ((function (fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__13661,_,map__13664,map__13664__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__13665,map__13665__$1,doc,get,save_BANG_){
return (function (){
var temp__4655__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4655__auto__)){
var visible__13535__auto__ = temp__4655__auto__;
if(cljs.core.truth_((function (){var G__13668 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(doc) : cljs.core.deref.call(null,doc));
return (visible__13535__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__13535__auto__.cljs$core$IFn$_invoke$arity$1(G__13668) : visible__13535__auto__.call(null,G__13668));
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$datepicker_DASH_wrapper,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$input_DASH_group$date,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_control,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$read_DASH_only,true,cljs.core.cst$kw$type,cljs.core.cst$kw$text,cljs.core.cst$kw$on_DASH_click,((function (visible__13535__auto__,temp__4655__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__13661,_,map__13664,map__13664__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__13665,map__13665__$1,doc,get,save_BANG_){
return (function (p1__13656_SHARP_){
p1__13656_SHARP_.preventDefault();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(expanded_QMARK_,cljs.core.not);
});})(visible__13535__auto__,temp__4655__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__13661,_,map__13664,map__13664__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__13665,map__13665__$1,doc,get,save_BANG_))
,cljs.core.cst$kw$value,(function (){var temp__4657__auto__ = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
if(cljs.core.truth_(temp__4657__auto__)){
var date = temp__4657__auto__;
return reagent_forms.datepicker.format_date(date,fmt);
} else {
return null;
}
})()], null),attrs], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$input_DASH_group_DASH_addon,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (visible__13535__auto__,temp__4655__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__13661,_,map__13664,map__13664__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__13665,map__13665__$1,doc,get,save_BANG_){
return (function (p1__13657_SHARP_){
p1__13657_SHARP_.preventDefault();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(expanded_QMARK_,cljs.core.not);
});})(visible__13535__auto__,temp__4655__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__13661,_,map__13664,map__13664__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__13665,map__13665__$1,doc,get,save_BANG_))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$glyphicon$glyphicon_DASH_calendar], null)], null)], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.datepicker.datepicker,year,month,day,expanded_QMARK_,auto_close_QMARK_,((function (visible__13535__auto__,temp__4655__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__13661,_,map__13664,map__13664__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__13665,map__13665__$1,doc,get,save_BANG_){
return (function (){
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
});})(visible__13535__auto__,temp__4655__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__13661,_,map__13664,map__13664__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__13665,map__13665__$1,doc,get,save_BANG_))
,((function (visible__13535__auto__,temp__4655__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__13661,_,map__13664,map__13664__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__13665,map__13665__$1,doc,get,save_BANG_){
return (function (p1__13658_SHARP_){
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(id,p1__13658_SHARP_) : save_BANG_.call(null,id,p1__13658_SHARP_));
});})(visible__13535__auto__,temp__4655__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__13661,_,map__13664,map__13664__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__13665,map__13665__$1,doc,get,save_BANG_))
,inline,lang], null)], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$datepicker_DASH_wrapper,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$input_DASH_group$date,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_control,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$read_DASH_only,true,cljs.core.cst$kw$type,cljs.core.cst$kw$text,cljs.core.cst$kw$on_DASH_click,((function (temp__4655__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__13661,_,map__13664,map__13664__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__13665,map__13665__$1,doc,get,save_BANG_){
return (function (p1__13656_SHARP_){
p1__13656_SHARP_.preventDefault();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(expanded_QMARK_,cljs.core.not);
});})(temp__4655__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__13661,_,map__13664,map__13664__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__13665,map__13665__$1,doc,get,save_BANG_))
,cljs.core.cst$kw$value,(function (){var temp__4657__auto__ = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
if(cljs.core.truth_(temp__4657__auto__)){
var date = temp__4657__auto__;
return reagent_forms.datepicker.format_date(date,fmt);
} else {
return null;
}
})()], null),attrs], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$input_DASH_group_DASH_addon,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (temp__4655__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__13661,_,map__13664,map__13664__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__13665,map__13665__$1,doc,get,save_BANG_){
return (function (p1__13657_SHARP_){
p1__13657_SHARP_.preventDefault();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(expanded_QMARK_,cljs.core.not);
});})(temp__4655__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__13661,_,map__13664,map__13664__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__13665,map__13665__$1,doc,get,save_BANG_))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$glyphicon$glyphicon_DASH_calendar], null)], null)], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.datepicker.datepicker,year,month,day,expanded_QMARK_,auto_close_QMARK_,((function (temp__4655__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__13661,_,map__13664,map__13664__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__13665,map__13665__$1,doc,get,save_BANG_){
return (function (){
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
});})(temp__4655__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__13661,_,map__13664,map__13664__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__13665,map__13665__$1,doc,get,save_BANG_))
,((function (temp__4655__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__13661,_,map__13664,map__13664__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__13665,map__13665__$1,doc,get,save_BANG_){
return (function (p1__13658_SHARP_){
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(id,p1__13658_SHARP_) : save_BANG_.call(null,id,p1__13658_SHARP_));
});})(temp__4655__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__13661,_,map__13664,map__13664__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__13665,map__13665__$1,doc,get,save_BANG_))
,inline,lang], null)], null);
}
});
;})(fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__13661,_,map__13664,map__13664__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__13665,map__13665__$1,doc,get,save_BANG_))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$checkbox,(function (p__13669,p__13670){
var vec__13671 = p__13669;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13671,(0),null);
var map__13674 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13671,(1),null);
var map__13674__$1 = ((((!((map__13674 == null)))?((((map__13674.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13674.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13674):map__13674);
var attrs = map__13674__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13674__$1,cljs.core.cst$kw$id);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13674__$1,cljs.core.cst$kw$field);
var checked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13674__$1,cljs.core.cst$kw$checked);
var default_checked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13674__$1,cljs.core.cst$kw$default_DASH_checked);
var component = vec__13671;
var map__13675 = p__13670;
var map__13675__$1 = ((((!((map__13675 == null)))?((((map__13675.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13675.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13675):map__13675);
var opts = map__13675__$1;
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13675__$1,cljs.core.cst$kw$doc);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13675__$1,cljs.core.cst$kw$get);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13675__$1,cljs.core.cst$kw$save_BANG_);
if(cljs.core.truth_((function (){var or__6407__auto__ = checked;
if(cljs.core.truth_(or__6407__auto__)){
return or__6407__auto__;
} else {
return default_checked;
}
})())){
(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(id,true) : save_BANG_.call(null,id,true));
} else {
}

return ((function (vec__13671,_,map__13674,map__13674__$1,attrs,id,field,checked,default_checked,component,map__13675,map__13675__$1,opts,doc,get,save_BANG_){
return (function (){
var temp__4655__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4655__auto__)){
var visible__13535__auto__ = temp__4655__auto__;
if(cljs.core.truth_((function (){var G__13678 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(doc) : cljs.core.deref.call(null,doc));
return (visible__13535__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__13535__auto__.cljs$core$IFn$_invoke$arity$1(G__13678) : visible__13535__auto__.call(null,G__13678));
})())){
return reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic(component,opts,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,field], null)], 0));
} else {
return null;
}
} else {
return reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic(component,opts,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,field], null)], 0));
}
});
;})(vec__13671,_,map__13674,map__13674__$1,attrs,id,field,checked,default_checked,component,map__13675,map__13675__$1,opts,doc,get,save_BANG_))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$label,(function (p__13679,p__13680){
var vec__13681 = p__13679;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13681,(0),null);
var map__13684 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13681,(1),null);
var map__13684__$1 = ((((!((map__13684 == null)))?((((map__13684.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13684.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13684):map__13684);
var attrs = map__13684__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13684__$1,cljs.core.cst$kw$id);
var preamble = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13684__$1,cljs.core.cst$kw$preamble);
var postamble = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13684__$1,cljs.core.cst$kw$postamble);
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13684__$1,cljs.core.cst$kw$placeholder);
var map__13685 = p__13680;
var map__13685__$1 = ((((!((map__13685 == null)))?((((map__13685.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13685.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13685):map__13685);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13685__$1,cljs.core.cst$kw$doc);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13685__$1,cljs.core.cst$kw$get);
return ((function (vec__13681,type,map__13684,map__13684__$1,attrs,id,preamble,postamble,placeholder,map__13685,map__13685__$1,doc,get){
return (function (){
var temp__4655__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4655__auto__)){
var visible__13535__auto__ = temp__4655__auto__;
if(cljs.core.truth_((function (){var G__13688 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(doc) : cljs.core.deref.call(null,doc));
return (visible__13535__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__13535__auto__.cljs$core$IFn$_invoke$arity$1(G__13688) : visible__13535__auto__.call(null,G__13688));
})())){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,preamble,(function (){var temp__4655__auto____$1 = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
if(cljs.core.truth_(temp__4655__auto____$1)){
var value = temp__4655__auto____$1;
return [cljs.core.str(value),cljs.core.str(postamble)].join('');
} else {
return placeholder;
}
})()], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,preamble,(function (){var temp__4655__auto____$1 = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
if(cljs.core.truth_(temp__4655__auto____$1)){
var value = temp__4655__auto____$1;
return [cljs.core.str(value),cljs.core.str(postamble)].join('');
} else {
return placeholder;
}
})()], null);
}
});
;})(vec__13681,type,map__13684,map__13684__$1,attrs,id,preamble,postamble,placeholder,map__13685,map__13685__$1,doc,get))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$alert,(function (p__13689,p__13690){
var vec__13691 = p__13689;
var seq__13692 = cljs.core.seq(vec__13691);
var first__13693 = cljs.core.first(seq__13692);
var seq__13692__$1 = cljs.core.next(seq__13692);
var type = first__13693;
var first__13693__$1 = cljs.core.first(seq__13692__$1);
var seq__13692__$2 = cljs.core.next(seq__13692__$1);
var map__13694 = first__13693__$1;
var map__13694__$1 = ((((!((map__13694 == null)))?((((map__13694.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13694.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13694):map__13694);
var attrs = map__13694__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13694__$1,cljs.core.cst$kw$id);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13694__$1,cljs.core.cst$kw$event);
var touch_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13694__$1,cljs.core.cst$kw$touch_DASH_event);
var closeable_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13694__$1,cljs.core.cst$kw$closeable_QMARK_,true);
var body = seq__13692__$2;
var map__13695 = p__13690;
var map__13695__$1 = ((((!((map__13695 == null)))?((((map__13695.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13695.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13695):map__13695);
var opts = map__13695__$1;
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13695__$1,cljs.core.cst$kw$doc);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13695__$1,cljs.core.cst$kw$get);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13695__$1,cljs.core.cst$kw$save_BANG_);
return ((function (vec__13691,seq__13692,first__13693,seq__13692__$1,type,first__13693__$1,seq__13692__$2,map__13694,map__13694__$1,attrs,id,event,touch_event,closeable_QMARK_,body,map__13695,map__13695__$1,opts,doc,get,save_BANG_){
return (function (){
var temp__4655__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4655__auto__)){
var visible__13535__auto__ = temp__4655__auto__;
if(cljs.core.truth_((function (){var G__13698 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(doc) : cljs.core.deref.call(null,doc));
return (visible__13535__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__13535__auto__.cljs$core$IFn$_invoke$arity$1(G__13698) : visible__13535__auto__.call(null,G__13698));
})())){
if(cljs.core.truth_(event)){
if(cljs.core.truth_((function (){var G__13699 = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
return (event.cljs$core$IFn$_invoke$arity$1 ? event.cljs$core$IFn$_invoke$arity$1(G__13699) : event.call(null,G__13699));
})())){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(attrs,event)], null),body);
} else {
return null;
}
} else {
var temp__4655__auto____$1 = cljs.core.not_empty((get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id)));
if(cljs.core.truth_(temp__4655__auto____$1)){
var message = temp__4655__auto____$1;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,(cljs.core.truth_(closeable_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$close,cljs.core.PersistentArrayMap.fromArray([cljs.core.cst$kw$type,"button",cljs.core.cst$kw$aria_DASH_hidden,true,(function (){var or__6407__auto__ = touch_event;
if(cljs.core.truth_(or__6407__auto__)){
return or__6407__auto__;
} else {
return cljs.core.cst$kw$on_DASH_click;
}
})(),((function (message,temp__4655__auto____$1,visible__13535__auto__,temp__4655__auto__,vec__13691,seq__13692,first__13693,seq__13692__$1,type,first__13693__$1,seq__13692__$2,map__13694,map__13694__$1,attrs,id,event,touch_event,closeable_QMARK_,body,map__13695,map__13695__$1,opts,doc,get,save_BANG_){
return (function (){
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(id,null) : save_BANG_.call(null,id,null));
});})(message,temp__4655__auto____$1,visible__13535__auto__,temp__4655__auto__,vec__13691,seq__13692,first__13693,seq__13692__$1,type,first__13693__$1,seq__13692__$2,map__13694,map__13694__$1,attrs,id,event,touch_event,closeable_QMARK_,body,map__13695,map__13695__$1,opts,doc,get,save_BANG_))
], true, false),"X"], null):null),message], null);
} else {
return null;
}
}
} else {
return null;
}
} else {
if(cljs.core.truth_(event)){
if(cljs.core.truth_((function (){var G__13700 = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
return (event.cljs$core$IFn$_invoke$arity$1 ? event.cljs$core$IFn$_invoke$arity$1(G__13700) : event.call(null,G__13700));
})())){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(attrs,event)], null),body);
} else {
return null;
}
} else {
var temp__4655__auto____$1 = cljs.core.not_empty((get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id)));
if(cljs.core.truth_(temp__4655__auto____$1)){
var message = temp__4655__auto____$1;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,(cljs.core.truth_(closeable_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$close,cljs.core.PersistentArrayMap.fromArray([cljs.core.cst$kw$type,"button",cljs.core.cst$kw$aria_DASH_hidden,true,(function (){var or__6407__auto__ = touch_event;
if(cljs.core.truth_(or__6407__auto__)){
return or__6407__auto__;
} else {
return cljs.core.cst$kw$on_DASH_click;
}
})(),((function (message,temp__4655__auto____$1,temp__4655__auto__,vec__13691,seq__13692,first__13693,seq__13692__$1,type,first__13693__$1,seq__13692__$2,map__13694,map__13694__$1,attrs,id,event,touch_event,closeable_QMARK_,body,map__13695,map__13695__$1,opts,doc,get,save_BANG_){
return (function (){
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(id,null) : save_BANG_.call(null,id,null));
});})(message,temp__4655__auto____$1,temp__4655__auto__,vec__13691,seq__13692,first__13693,seq__13692__$1,type,first__13693__$1,seq__13692__$2,map__13694,map__13694__$1,attrs,id,event,touch_event,closeable_QMARK_,body,map__13695,map__13695__$1,opts,doc,get,save_BANG_))
], true, false),"X"], null):null),message], null);
} else {
return null;
}
}
}
});
;})(vec__13691,seq__13692,first__13693,seq__13692__$1,type,first__13693__$1,seq__13692__$2,map__13694,map__13694__$1,attrs,id,event,touch_event,closeable_QMARK_,body,map__13695,map__13695__$1,opts,doc,get,save_BANG_))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$radio,(function (p__13701,p__13702){
var vec__13703 = p__13701;
var seq__13704 = cljs.core.seq(vec__13703);
var first__13705 = cljs.core.first(seq__13704);
var seq__13704__$1 = cljs.core.next(seq__13704);
var type = first__13705;
var first__13705__$1 = cljs.core.first(seq__13704__$1);
var seq__13704__$2 = cljs.core.next(seq__13704__$1);
var map__13706 = first__13705__$1;
var map__13706__$1 = ((((!((map__13706 == null)))?((((map__13706.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13706.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13706):map__13706);
var attrs = map__13706__$1;
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13706__$1,cljs.core.cst$kw$field);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13706__$1,cljs.core.cst$kw$name);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13706__$1,cljs.core.cst$kw$value);
var checked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13706__$1,cljs.core.cst$kw$checked);
var default_checked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13706__$1,cljs.core.cst$kw$default_DASH_checked);
var body = seq__13704__$2;
var map__13707 = p__13702;
var map__13707__$1 = ((((!((map__13707 == null)))?((((map__13707.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13707.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13707):map__13707);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13707__$1,cljs.core.cst$kw$doc);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13707__$1,cljs.core.cst$kw$get);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13707__$1,cljs.core.cst$kw$save_BANG_);
if(cljs.core.truth_((function (){var or__6407__auto__ = checked;
if(cljs.core.truth_(or__6407__auto__)){
return or__6407__auto__;
} else {
return default_checked;
}
})())){
(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(name,value) : save_BANG_.call(null,name,value));
} else {
}

return ((function (vec__13703,seq__13704,first__13705,seq__13704__$1,type,first__13705__$1,seq__13704__$2,map__13706,map__13706__$1,attrs,field,name,value,checked,default_checked,body,map__13707,map__13707__$1,doc,get,save_BANG_){
return (function (){
var temp__4655__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4655__auto__)){
var visible__13535__auto__ = temp__4655__auto__;
if(cljs.core.truth_((function (){var G__13710 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(doc) : cljs.core.deref.call(null,doc));
return (visible__13535__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__13535__auto__.cljs$core$IFn$_invoke$arity$1(G__13710) : visible__13535__auto__.call(null,G__13710));
})())){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$radio,cljs.core.cst$kw$default_DASH_checked,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(name) : get.call(null,name))),cljs.core.cst$kw$on_DASH_change,((function (visible__13535__auto__,temp__4655__auto__,vec__13703,seq__13704,first__13705,seq__13704__$1,type,first__13705__$1,seq__13704__$2,map__13706,map__13706__$1,attrs,field,name,value,checked,default_checked,body,map__13707,map__13707__$1,doc,get,save_BANG_){
return (function (){
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(name,value) : save_BANG_.call(null,name,value));
});})(visible__13535__auto__,temp__4655__auto__,vec__13703,seq__13704,first__13705,seq__13704__$1,type,first__13705__$1,seq__13704__$2,map__13706,map__13706__$1,attrs,field,name,value,checked,default_checked,body,map__13707,map__13707__$1,doc,get,save_BANG_))
], null),attrs], 0))], null),body);
} else {
return null;
}
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$radio,cljs.core.cst$kw$default_DASH_checked,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(name) : get.call(null,name))),cljs.core.cst$kw$on_DASH_change,((function (temp__4655__auto__,vec__13703,seq__13704,first__13705,seq__13704__$1,type,first__13705__$1,seq__13704__$2,map__13706,map__13706__$1,attrs,field,name,value,checked,default_checked,body,map__13707,map__13707__$1,doc,get,save_BANG_){
return (function (){
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(name,value) : save_BANG_.call(null,name,value));
});})(temp__4655__auto__,vec__13703,seq__13704,first__13705,seq__13704__$1,type,first__13705__$1,seq__13704__$2,map__13706,map__13706__$1,attrs,field,name,value,checked,default_checked,body,map__13707,map__13707__$1,doc,get,save_BANG_))
], null),attrs], 0))], null),body);
}
});
;})(vec__13703,seq__13704,first__13705,seq__13704__$1,type,first__13705__$1,seq__13704__$2,map__13706,map__13706__$1,attrs,field,name,value,checked,default_checked,body,map__13707,map__13707__$1,doc,get,save_BANG_))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$typeahead,(function (p__13714,p__13715){
var vec__13716 = p__13714;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13716,(0),null);
var map__13719 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13716,(1),null);
var map__13719__$1 = ((((!((map__13719 == null)))?((((map__13719.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13719.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13719):map__13719);
var attrs = map__13719__$1;
var result_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13719__$1,cljs.core.cst$kw$result_DASH_fn,cljs.core.identity);
var item_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13719__$1,cljs.core.cst$kw$item_DASH_class);
var input_placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13719__$1,cljs.core.cst$kw$input_DASH_placeholder);
var highlight_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13719__$1,cljs.core.cst$kw$highlight_DASH_class);
var list_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13719__$1,cljs.core.cst$kw$list_DASH_class);
var data_source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13719__$1,cljs.core.cst$kw$data_DASH_source);
var input_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13719__$1,cljs.core.cst$kw$input_DASH_class);
var clear_on_focus_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13719__$1,cljs.core.cst$kw$clear_DASH_on_DASH_focus_QMARK_,true);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13719__$1,cljs.core.cst$kw$id);
var choice_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13719__$1,cljs.core.cst$kw$choice_DASH_fn,cljs.core.identity);
var map__13720 = p__13715;
var map__13720__$1 = ((((!((map__13720 == null)))?((((map__13720.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13720.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13720):map__13720);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13720__$1,cljs.core.cst$kw$doc);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13720__$1,cljs.core.cst$kw$get);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13720__$1,cljs.core.cst$kw$save_BANG_);
var typeahead_hidden_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
var mouse_on_list_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var selected_index = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((-1));
var selections = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var choose_selected = ((function (typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__13716,type,map__13719,map__13719__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__13720,map__13720__$1,doc,get,save_BANG_){
return (function (){
if(cljs.core.truth_((function (){var and__6395__auto__ = cljs.core.not_empty((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selections) : cljs.core.deref.call(null,selections)));
if(cljs.core.truth_(and__6395__auto__)){
return ((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_index) : cljs.core.deref.call(null,selected_index)) > (-1));
} else {
return and__6395__auto__;
}
})())){
var choice = cljs.core.nth.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selections) : cljs.core.deref.call(null,selections)),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_index) : cljs.core.deref.call(null,selected_index)));
(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(id,choice) : save_BANG_.call(null,id,choice));

(choice_fn.cljs$core$IFn$_invoke$arity$1 ? choice_fn.cljs$core$IFn$_invoke$arity$1(choice) : choice_fn.call(null,choice));

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(typeahead_hidden_QMARK_,true) : cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true));
} else {
return null;
}
});})(typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__13716,type,map__13719,map__13719__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__13720,map__13720__$1,doc,get,save_BANG_))
;
return ((function (typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__13716,type,map__13719,map__13719__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__13720,map__13720__$1,doc,get,save_BANG_){
return (function (){
var temp__4655__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4655__auto__)){
var visible__13535__auto__ = temp__4655__auto__;
if(cljs.core.truth_((function (){var G__13723 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(doc) : cljs.core.deref.call(null,doc));
return (visible__13535__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__13535__auto__.cljs$core$IFn$_invoke$arity$1(G__13723) : visible__13535__auto__.call(null,G__13723));
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$type,cljs.core.cst$kw$text,cljs.core.cst$kw$placeholder,input_placeholder,cljs.core.cst$kw$class,input_class,cljs.core.cst$kw$value,(function (){var v = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
if(!(cljs.core.iterable_QMARK_(v))){
return v;
} else {
return cljs.core.first(v);
}
})(),cljs.core.cst$kw$on_DASH_focus,((function (visible__13535__auto__,temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__13716,type,map__13719,map__13719__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__13720,map__13720__$1,doc,get,save_BANG_){
return (function (){
if(cljs.core.truth_(clear_on_focus_QMARK_)){
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(id,null) : save_BANG_.call(null,id,null));
} else {
return null;
}
});})(visible__13535__auto__,temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__13716,type,map__13719,map__13719__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__13720,map__13720__$1,doc,get,save_BANG_))
,cljs.core.cst$kw$on_DASH_blur,((function (visible__13535__auto__,temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__13716,type,map__13719,map__13719__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__13720,map__13720__$1,doc,get,save_BANG_){
return (function (){
if(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mouse_on_list_QMARK_) : cljs.core.deref.call(null,mouse_on_list_QMARK_)))){
return null;
} else {
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(typeahead_hidden_QMARK_,true) : cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true));

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(selected_index,(-1)) : cljs.core.reset_BANG_.call(null,selected_index,(-1)));
}
});})(visible__13535__auto__,temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__13716,type,map__13719,map__13719__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__13720,map__13720__$1,doc,get,save_BANG_))
,cljs.core.cst$kw$on_DASH_change,((function (visible__13535__auto__,temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__13716,type,map__13719,map__13719__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__13720,map__13720__$1,doc,get,save_BANG_){
return (function (p1__13711_SHARP_){
var temp__4657__auto__ = clojure.string.trim(reagent_forms.core.value_of(p1__13711_SHARP_));
if(cljs.core.truth_(temp__4657__auto__)){
var value = temp__4657__auto__;
var G__13724_13746 = selections;
var G__13725_13747 = (function (){var G__13726 = value.toLowerCase();
return (data_source.cljs$core$IFn$_invoke$arity$1 ? data_source.cljs$core$IFn$_invoke$arity$1(G__13726) : data_source.call(null,G__13726));
})();
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13724_13746,G__13725_13747) : cljs.core.reset_BANG_.call(null,G__13724_13746,G__13725_13747));

var G__13727_13748 = id;
var G__13728_13749 = reagent_forms.core.value_of(p1__13711_SHARP_);
(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__13727_13748,G__13728_13749) : save_BANG_.call(null,G__13727_13748,G__13728_13749));

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(typeahead_hidden_QMARK_,false) : cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,false));

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(selected_index,(-1)) : cljs.core.reset_BANG_.call(null,selected_index,(-1)));
} else {
return null;
}
});})(visible__13535__auto__,temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__13716,type,map__13719,map__13719__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__13720,map__13720__$1,doc,get,save_BANG_))
,cljs.core.cst$kw$on_DASH_key_DASH_down,((function (visible__13535__auto__,temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__13716,type,map__13719,map__13719__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__13720,map__13720__$1,doc,get,save_BANG_){
return (function (p1__13712_SHARP_){
var G__13729 = p1__13712_SHARP_.which;
switch (G__13729) {
case (38):
p1__13712_SHARP_.preventDefault();

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_index) : cljs.core.deref.call(null,selected_index)),(0))){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(selected_index,cljs.core.dec);
}

break;
case (40):
p1__13712_SHARP_.preventDefault();

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_index) : cljs.core.deref.call(null,selected_index)),(cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selections) : cljs.core.deref.call(null,selections))) - (1)))){
return null;
} else {
var G__13730_13751 = id;
var G__13731_13752 = reagent_forms.core.value_of(p1__13712_SHARP_);
(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__13730_13751,G__13731_13752) : save_BANG_.call(null,G__13730_13751,G__13731_13752));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(selected_index,cljs.core.inc);
}

break;
case (9):
return choose_selected();

break;
case (13):
return choose_selected();

break;
case (27):
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(typeahead_hidden_QMARK_,true) : cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true));

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(selected_index,(0)) : cljs.core.reset_BANG_.call(null,selected_index,(0)));

break;
default:
return "default";

}
});})(visible__13535__auto__,temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__13716,type,map__13719,map__13719__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__13720,map__13720__$1,doc,get,save_BANG_))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$display,(cljs.core.truth_((function (){var or__6407__auto__ = cljs.core.empty_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selections) : cljs.core.deref.call(null,selections)));
if(or__6407__auto__){
return or__6407__auto__;
} else {
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(typeahead_hidden_QMARK_) : cljs.core.deref.call(null,typeahead_hidden_QMARK_));
}
})())?cljs.core.cst$kw$none:cljs.core.cst$kw$block)], null),cljs.core.cst$kw$class,list_class,cljs.core.cst$kw$on_DASH_mouse_DASH_enter,((function (visible__13535__auto__,temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__13716,type,map__13719,map__13719__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__13720,map__13720__$1,doc,get,save_BANG_){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mouse_on_list_QMARK_,true) : cljs.core.reset_BANG_.call(null,mouse_on_list_QMARK_,true));
});})(visible__13535__auto__,temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__13716,type,map__13719,map__13719__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__13720,map__13720__$1,doc,get,save_BANG_))
,cljs.core.cst$kw$on_DASH_mouse_DASH_leave,((function (visible__13535__auto__,temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__13716,type,map__13719,map__13719__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__13720,map__13720__$1,doc,get,save_BANG_){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mouse_on_list_QMARK_,false) : cljs.core.reset_BANG_.call(null,mouse_on_list_QMARK_,false));
});})(visible__13535__auto__,temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__13716,type,map__13719,map__13719__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__13720,map__13720__$1,doc,get,save_BANG_))
], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (visible__13535__auto__,temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__13716,type,map__13719,map__13719__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__13720,map__13720__$1,doc,get,save_BANG_){
return (function (index,result){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$tab_DASH_index,index,cljs.core.cst$kw$key,index,cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_index) : cljs.core.deref.call(null,selected_index)),index))?highlight_class:item_class),cljs.core.cst$kw$on_DASH_mouse_DASH_over,((function (visible__13535__auto__,temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__13716,type,map__13719,map__13719__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__13720,map__13720__$1,doc,get,save_BANG_){
return (function (p1__13713_SHARP_){
var G__13732 = selected_index;
var G__13733 = (function (){var G__13734 = p1__13713_SHARP_.target.getAttribute("tabIndex");
return parseInt(G__13734);
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13732,G__13733) : cljs.core.reset_BANG_.call(null,G__13732,G__13733));
});})(visible__13535__auto__,temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__13716,type,map__13719,map__13719__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__13720,map__13720__$1,doc,get,save_BANG_))
,cljs.core.cst$kw$on_DASH_click,((function (visible__13535__auto__,temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__13716,type,map__13719,map__13719__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__13720,map__13720__$1,doc,get,save_BANG_){
return (function (){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(typeahead_hidden_QMARK_,true) : cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true));

(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(id,result) : save_BANG_.call(null,id,result));

return (choice_fn.cljs$core$IFn$_invoke$arity$1 ? choice_fn.cljs$core$IFn$_invoke$arity$1(result) : choice_fn.call(null,result));
});})(visible__13535__auto__,temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__13716,type,map__13719,map__13719__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__13720,map__13720__$1,doc,get,save_BANG_))
], null),(result_fn.cljs$core$IFn$_invoke$arity$1 ? result_fn.cljs$core$IFn$_invoke$arity$1(result) : result_fn.call(null,result))], null);
});})(visible__13535__auto__,temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__13716,type,map__13719,map__13719__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__13720,map__13720__$1,doc,get,save_BANG_))
,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selections) : cljs.core.deref.call(null,selections))))], null)], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$type,cljs.core.cst$kw$text,cljs.core.cst$kw$placeholder,input_placeholder,cljs.core.cst$kw$class,input_class,cljs.core.cst$kw$value,(function (){var v = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
if(!(cljs.core.iterable_QMARK_(v))){
return v;
} else {
return cljs.core.first(v);
}
})(),cljs.core.cst$kw$on_DASH_focus,((function (temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__13716,type,map__13719,map__13719__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__13720,map__13720__$1,doc,get,save_BANG_){
return (function (){
if(cljs.core.truth_(clear_on_focus_QMARK_)){
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(id,null) : save_BANG_.call(null,id,null));
} else {
return null;
}
});})(temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__13716,type,map__13719,map__13719__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__13720,map__13720__$1,doc,get,save_BANG_))
,cljs.core.cst$kw$on_DASH_blur,((function (temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__13716,type,map__13719,map__13719__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__13720,map__13720__$1,doc,get,save_BANG_){
return (function (){
if(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mouse_on_list_QMARK_) : cljs.core.deref.call(null,mouse_on_list_QMARK_)))){
return null;
} else {
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(typeahead_hidden_QMARK_,true) : cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true));

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(selected_index,(-1)) : cljs.core.reset_BANG_.call(null,selected_index,(-1)));
}
});})(temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__13716,type,map__13719,map__13719__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__13720,map__13720__$1,doc,get,save_BANG_))
,cljs.core.cst$kw$on_DASH_change,((function (temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__13716,type,map__13719,map__13719__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__13720,map__13720__$1,doc,get,save_BANG_){
return (function (p1__13711_SHARP_){
var temp__4657__auto__ = clojure.string.trim(reagent_forms.core.value_of(p1__13711_SHARP_));
if(cljs.core.truth_(temp__4657__auto__)){
var value = temp__4657__auto__;
var G__13735_13753 = selections;
var G__13736_13754 = (function (){var G__13737 = value.toLowerCase();
return (data_source.cljs$core$IFn$_invoke$arity$1 ? data_source.cljs$core$IFn$_invoke$arity$1(G__13737) : data_source.call(null,G__13737));
})();
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13735_13753,G__13736_13754) : cljs.core.reset_BANG_.call(null,G__13735_13753,G__13736_13754));

var G__13738_13755 = id;
var G__13739_13756 = reagent_forms.core.value_of(p1__13711_SHARP_);
(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__13738_13755,G__13739_13756) : save_BANG_.call(null,G__13738_13755,G__13739_13756));

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(typeahead_hidden_QMARK_,false) : cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,false));

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(selected_index,(-1)) : cljs.core.reset_BANG_.call(null,selected_index,(-1)));
} else {
return null;
}
});})(temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__13716,type,map__13719,map__13719__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__13720,map__13720__$1,doc,get,save_BANG_))
,cljs.core.cst$kw$on_DASH_key_DASH_down,((function (temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__13716,type,map__13719,map__13719__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__13720,map__13720__$1,doc,get,save_BANG_){
return (function (p1__13712_SHARP_){
var G__13740 = p1__13712_SHARP_.which;
switch (G__13740) {
case (38):
p1__13712_SHARP_.preventDefault();

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_index) : cljs.core.deref.call(null,selected_index)),(0))){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(selected_index,cljs.core.dec);
}

break;
case (40):
p1__13712_SHARP_.preventDefault();

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_index) : cljs.core.deref.call(null,selected_index)),(cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selections) : cljs.core.deref.call(null,selections))) - (1)))){
return null;
} else {
var G__13741_13758 = id;
var G__13742_13759 = reagent_forms.core.value_of(p1__13712_SHARP_);
(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__13741_13758,G__13742_13759) : save_BANG_.call(null,G__13741_13758,G__13742_13759));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(selected_index,cljs.core.inc);
}

break;
case (9):
return choose_selected();

break;
case (13):
return choose_selected();

break;
case (27):
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(typeahead_hidden_QMARK_,true) : cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true));

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(selected_index,(0)) : cljs.core.reset_BANG_.call(null,selected_index,(0)));

break;
default:
return "default";

}
});})(temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__13716,type,map__13719,map__13719__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__13720,map__13720__$1,doc,get,save_BANG_))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$display,(cljs.core.truth_((function (){var or__6407__auto__ = cljs.core.empty_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selections) : cljs.core.deref.call(null,selections)));
if(or__6407__auto__){
return or__6407__auto__;
} else {
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(typeahead_hidden_QMARK_) : cljs.core.deref.call(null,typeahead_hidden_QMARK_));
}
})())?cljs.core.cst$kw$none:cljs.core.cst$kw$block)], null),cljs.core.cst$kw$class,list_class,cljs.core.cst$kw$on_DASH_mouse_DASH_enter,((function (temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__13716,type,map__13719,map__13719__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__13720,map__13720__$1,doc,get,save_BANG_){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mouse_on_list_QMARK_,true) : cljs.core.reset_BANG_.call(null,mouse_on_list_QMARK_,true));
});})(temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__13716,type,map__13719,map__13719__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__13720,map__13720__$1,doc,get,save_BANG_))
,cljs.core.cst$kw$on_DASH_mouse_DASH_leave,((function (temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__13716,type,map__13719,map__13719__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__13720,map__13720__$1,doc,get,save_BANG_){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mouse_on_list_QMARK_,false) : cljs.core.reset_BANG_.call(null,mouse_on_list_QMARK_,false));
});})(temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__13716,type,map__13719,map__13719__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__13720,map__13720__$1,doc,get,save_BANG_))
], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__13716,type,map__13719,map__13719__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__13720,map__13720__$1,doc,get,save_BANG_){
return (function (index,result){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$tab_DASH_index,index,cljs.core.cst$kw$key,index,cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_index) : cljs.core.deref.call(null,selected_index)),index))?highlight_class:item_class),cljs.core.cst$kw$on_DASH_mouse_DASH_over,((function (temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__13716,type,map__13719,map__13719__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__13720,map__13720__$1,doc,get,save_BANG_){
return (function (p1__13713_SHARP_){
var G__13743 = selected_index;
var G__13744 = (function (){var G__13745 = p1__13713_SHARP_.target.getAttribute("tabIndex");
return parseInt(G__13745);
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13743,G__13744) : cljs.core.reset_BANG_.call(null,G__13743,G__13744));
});})(temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__13716,type,map__13719,map__13719__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__13720,map__13720__$1,doc,get,save_BANG_))
,cljs.core.cst$kw$on_DASH_click,((function (temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__13716,type,map__13719,map__13719__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__13720,map__13720__$1,doc,get,save_BANG_){
return (function (){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(typeahead_hidden_QMARK_,true) : cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true));

(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(id,result) : save_BANG_.call(null,id,result));

return (choice_fn.cljs$core$IFn$_invoke$arity$1 ? choice_fn.cljs$core$IFn$_invoke$arity$1(result) : choice_fn.call(null,result));
});})(temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__13716,type,map__13719,map__13719__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__13720,map__13720__$1,doc,get,save_BANG_))
], null),(result_fn.cljs$core$IFn$_invoke$arity$1 ? result_fn.cljs$core$IFn$_invoke$arity$1(result) : result_fn.call(null,result))], null);
});})(temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__13716,type,map__13719,map__13719__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__13720,map__13720__$1,doc,get,save_BANG_))
,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selections) : cljs.core.deref.call(null,selections))))], null)], null);
}
});
;})(typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__13716,type,map__13719,map__13719__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__13720,map__13720__$1,doc,get,save_BANG_))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$file,(function (p__13761,p__13762){
var vec__13763 = p__13761;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13763,(0),null);
var map__13766 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13763,(1),null);
var map__13766__$1 = ((((!((map__13766 == null)))?((((map__13766.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13766.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13766):map__13766);
var attrs = map__13766__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13766__$1,cljs.core.cst$kw$id);
var map__13767 = p__13762;
var map__13767__$1 = ((((!((map__13767 == null)))?((((map__13767.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13767.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13767):map__13767);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13767__$1,cljs.core.cst$kw$doc);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13767__$1,cljs.core.cst$kw$save_BANG_);
return ((function (vec__13763,type,map__13766,map__13766__$1,attrs,id,map__13767,map__13767__$1,doc,save_BANG_){
return (function (){
var temp__4655__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4655__auto__)){
var visible__13535__auto__ = temp__4655__auto__;
if(cljs.core.truth_((function (){var G__13770 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(doc) : cljs.core.deref.call(null,doc));
return (visible__13535__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__13535__auto__.cljs$core$IFn$_invoke$arity$1(G__13770) : visible__13535__auto__.call(null,G__13770));
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$file,cljs.core.cst$kw$on_DASH_change,((function (visible__13535__auto__,temp__4655__auto__,vec__13763,type,map__13766,map__13766__$1,attrs,id,map__13767,map__13767__$1,doc,save_BANG_){
return (function (p1__13760_SHARP_){
var G__13771 = id;
var G__13772 = cljs.core.first(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(p1__13760_SHARP_.target.files));
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__13771,G__13772) : save_BANG_.call(null,G__13771,G__13772));
});})(visible__13535__auto__,temp__4655__auto__,vec__13763,type,map__13766,map__13766__$1,attrs,id,map__13767,map__13767__$1,doc,save_BANG_))
], null),attrs], 0))], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$file,cljs.core.cst$kw$on_DASH_change,((function (temp__4655__auto__,vec__13763,type,map__13766,map__13766__$1,attrs,id,map__13767,map__13767__$1,doc,save_BANG_){
return (function (p1__13760_SHARP_){
var G__13773 = id;
var G__13774 = cljs.core.first(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(p1__13760_SHARP_.target.files));
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__13773,G__13774) : save_BANG_.call(null,G__13773,G__13774));
});})(temp__4655__auto__,vec__13763,type,map__13766,map__13766__$1,attrs,id,map__13767,map__13767__$1,doc,save_BANG_))
], null),attrs], 0))], null);
}
});
;})(vec__13763,type,map__13766,map__13766__$1,attrs,id,map__13767,map__13767__$1,doc,save_BANG_))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$files,(function (p__13776,p__13777){
var vec__13778 = p__13776;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13778,(0),null);
var map__13781 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13778,(1),null);
var map__13781__$1 = ((((!((map__13781 == null)))?((((map__13781.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13781.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13781):map__13781);
var attrs = map__13781__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13781__$1,cljs.core.cst$kw$id);
var map__13782 = p__13777;
var map__13782__$1 = ((((!((map__13782 == null)))?((((map__13782.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13782.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13782):map__13782);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13782__$1,cljs.core.cst$kw$doc);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13782__$1,cljs.core.cst$kw$save_BANG_);
return ((function (vec__13778,type,map__13781,map__13781__$1,attrs,id,map__13782,map__13782__$1,doc,save_BANG_){
return (function (){
var temp__4655__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4655__auto__)){
var visible__13535__auto__ = temp__4655__auto__;
if(cljs.core.truth_((function (){var G__13785 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(doc) : cljs.core.deref.call(null,doc));
return (visible__13535__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__13535__auto__.cljs$core$IFn$_invoke$arity$1(G__13785) : visible__13535__auto__.call(null,G__13785));
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$file,cljs.core.cst$kw$multiple,true,cljs.core.cst$kw$on_DASH_change,((function (visible__13535__auto__,temp__4655__auto__,vec__13778,type,map__13781,map__13781__$1,attrs,id,map__13782,map__13782__$1,doc,save_BANG_){
return (function (p1__13775_SHARP_){
var G__13786 = id;
var G__13787 = p1__13775_SHARP_.target.files;
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__13786,G__13787) : save_BANG_.call(null,G__13786,G__13787));
});})(visible__13535__auto__,temp__4655__auto__,vec__13778,type,map__13781,map__13781__$1,attrs,id,map__13782,map__13782__$1,doc,save_BANG_))
], null),attrs], 0))], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$file,cljs.core.cst$kw$multiple,true,cljs.core.cst$kw$on_DASH_change,((function (temp__4655__auto__,vec__13778,type,map__13781,map__13781__$1,attrs,id,map__13782,map__13782__$1,doc,save_BANG_){
return (function (p1__13775_SHARP_){
var G__13788 = id;
var G__13789 = p1__13775_SHARP_.target.files;
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__13788,G__13789) : save_BANG_.call(null,G__13788,G__13789));
});})(temp__4655__auto__,vec__13778,type,map__13781,map__13781__$1,attrs,id,map__13782,map__13782__$1,doc,save_BANG_))
], null),attrs], 0))], null);
}
});
;})(vec__13778,type,map__13781,map__13781__$1,attrs,id,map__13782,map__13782__$1,doc,save_BANG_))
}));
reagent_forms.core.group_item = (function reagent_forms$core$group_item(p__13790,p__13791,selections,field,id){
var vec__13823 = p__13790;
var seq__13824 = cljs.core.seq(vec__13823);
var first__13825 = cljs.core.first(seq__13824);
var seq__13824__$1 = cljs.core.next(seq__13824);
var type = first__13825;
var first__13825__$1 = cljs.core.first(seq__13824__$1);
var seq__13824__$2 = cljs.core.next(seq__13824__$1);
var map__13826 = first__13825__$1;
var map__13826__$1 = ((((!((map__13826 == null)))?((((map__13826.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13826.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13826):map__13826);
var attrs = map__13826__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13826__$1,cljs.core.cst$kw$key);
var touch_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13826__$1,cljs.core.cst$kw$touch_DASH_event);
var body = seq__13824__$2;
var map__13827 = p__13791;
var map__13827__$1 = ((((!((map__13827 == null)))?((((map__13827.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13827.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13827):map__13827);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13827__$1,cljs.core.cst$kw$save_BANG_);
var multi_select = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13827__$1,cljs.core.cst$kw$multi_DASH_select);
var handle_click_BANG_ = ((function (vec__13823,seq__13824,first__13825,seq__13824__$1,type,first__13825__$1,seq__13824__$2,map__13826,map__13826__$1,attrs,key,touch_event,body,map__13827,map__13827__$1,save_BANG_,multi_select){
return (function reagent_forms$core$group_item_$_handle_click_BANG_(){
if(cljs.core.truth_(multi_select)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(selections,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),cljs.core.not);

var G__13848 = id;
var G__13849 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.second,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selections) : cljs.core.deref.call(null,selections))));
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__13848,G__13849) : save_BANG_.call(null,G__13848,G__13849));
} else {
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selections) : cljs.core.deref.call(null,selections)),key);
var G__13850_13854 = selections;
var G__13851_13855 = cljs.core.PersistentArrayMap.fromArray([key,cljs.core.not(value)], true, false);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13850_13854,G__13851_13855) : cljs.core.reset_BANG_.call(null,G__13850_13854,G__13851_13855));

var G__13852 = id;
var G__13853 = (cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selections) : cljs.core.deref.call(null,selections)),key))?key:null);
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__13852,G__13853) : save_BANG_.call(null,G__13852,G__13853));
}
});})(vec__13823,seq__13824,first__13825,seq__13824__$1,type,first__13825__$1,seq__13824__$2,map__13826,map__13826__$1,attrs,key,touch_event,body,map__13827,map__13827__$1,save_BANG_,multi_select))
;
return ((function (vec__13823,seq__13824,first__13825,seq__13824__$1,type,first__13825__$1,seq__13824__$2,map__13826,map__13826__$1,attrs,key,touch_event,body,map__13827,map__13827__$1,save_BANG_,multi_select){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentArrayMap.fromArray([cljs.core.cst$kw$class,(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selections) : cljs.core.deref.call(null,selections)),key))?"active":null),(function (){var or__6407__auto__ = touch_event;
if(cljs.core.truth_(or__6407__auto__)){
return or__6407__auto__;
} else {
return cljs.core.cst$kw$on_DASH_click;
}
})(),handle_click_BANG_], true, false),attrs], 0)),body], null);
});
;})(vec__13823,seq__13824,first__13825,seq__13824__$1,type,first__13825__$1,seq__13824__$2,map__13826,map__13826__$1,attrs,key,touch_event,body,map__13827,map__13827__$1,save_BANG_,multi_select))
});
reagent_forms.core.mk_selections = (function reagent_forms$core$mk_selections(id,selectors,p__13856){
var map__13865 = p__13856;
var map__13865__$1 = ((((!((map__13865 == null)))?((((map__13865.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13865.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13865):map__13865);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13865__$1,cljs.core.cst$kw$get);
var multi_select = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13865__$1,cljs.core.cst$kw$multi_DASH_select);
var value = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (value,map__13865,map__13865__$1,get,multi_select){
return (function (m,p__13867){
var vec__13868 = p__13867;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13868,(0),null);
var map__13871 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13868,(1),null);
var map__13871__$1 = ((((!((map__13871 == null)))?((((map__13871.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13871.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13871):map__13871);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13871__$1,cljs.core.cst$kw$key);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,key,cljs.core.boolean$(cljs.core.some(cljs.core.PersistentHashSet.fromArray([key], true),(cljs.core.truth_(multi_select)?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)))));
});})(value,map__13865,map__13865__$1,get,multi_select))
,cljs.core.PersistentArrayMap.EMPTY,selectors);
});
/**
 * selectors might be passed in inline or as a collection
 */
reagent_forms.core.extract_selectors = (function reagent_forms$core$extract_selectors(selectors){
if((cljs.core.ffirst(selectors) instanceof cljs.core.Keyword)){
return selectors;
} else {
return cljs.core.first(selectors);
}
});
reagent_forms.core.selection_group = (function reagent_forms$core$selection_group(p__13875,p__13876){
var vec__13890 = p__13875;
var seq__13891 = cljs.core.seq(vec__13890);
var first__13892 = cljs.core.first(seq__13891);
var seq__13891__$1 = cljs.core.next(seq__13891);
var type = first__13892;
var first__13892__$1 = cljs.core.first(seq__13891__$1);
var seq__13891__$2 = cljs.core.next(seq__13891__$1);
var map__13893 = first__13892__$1;
var map__13893__$1 = ((((!((map__13893 == null)))?((((map__13893.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13893.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13893):map__13893);
var attrs = map__13893__$1;
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13893__$1,cljs.core.cst$kw$field);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13893__$1,cljs.core.cst$kw$id);
var selection_items = seq__13891__$2;
var map__13894 = p__13876;
var map__13894__$1 = ((((!((map__13894 == null)))?((((map__13894.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13894.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13894):map__13894);
var opts = map__13894__$1;
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13894__$1,cljs.core.cst$kw$get);
var selection_items__$1 = reagent_forms.core.extract_selectors(selection_items);
var selections = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(reagent_forms.core.mk_selections(id,selection_items__$1,opts));
var selectors = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (selection_items__$1,selections,vec__13890,seq__13891,first__13892,seq__13891__$1,type,first__13892__$1,seq__13891__$2,map__13893,map__13893__$1,attrs,field,id,selection_items,map__13894,map__13894__$1,opts,get){
return (function (item){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$visible_QMARK_,cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.second(item)),cljs.core.cst$kw$selector,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.group_item(item,opts,selections,field,id)], null)], null);
});})(selection_items__$1,selections,vec__13890,seq__13891,first__13892,seq__13891__$1,type,first__13892__$1,seq__13891__$2,map__13893,map__13893__$1,attrs,field,id,selection_items,map__13894,map__13894__$1,opts,get))
,selection_items__$1);
return ((function (selection_items__$1,selections,selectors,vec__13890,seq__13891,first__13892,seq__13891__$1,type,first__13892__$1,seq__13891__$2,map__13893,map__13893__$1,attrs,field,id,selection_items,map__13894,map__13894__$1,opts,get){
return (function (){
if(cljs.core.truth_((get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id)))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(selections,((function (selection_items__$1,selections,selectors,vec__13890,seq__13891,first__13892,seq__13891__$1,type,first__13892__$1,seq__13891__$2,map__13893,map__13893__$1,attrs,field,id,selection_items,map__13894,map__13894__$1,opts,get){
return (function (p1__13873_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (selection_items__$1,selections,selectors,vec__13890,seq__13891,first__13892,seq__13891__$1,type,first__13892__$1,seq__13891__$2,map__13893,map__13893__$1,attrs,field,id,selection_items,map__13894,map__13894__$1,opts,get){
return (function (p__13897){
var vec__13898 = p__13897;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13898,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,false], null);
});})(selection_items__$1,selections,selectors,vec__13890,seq__13891,first__13892,seq__13891__$1,type,first__13892__$1,seq__13891__$2,map__13893,map__13893__$1,attrs,field,id,selection_items,map__13894,map__13894__$1,opts,get))
,p1__13873_SHARP_));
});})(selection_items__$1,selections,selectors,vec__13890,seq__13891,first__13892,seq__13891__$1,type,first__13892__$1,seq__13891__$2,map__13893,map__13893__$1,attrs,field,id,selection_items,map__13894,map__13894__$1,opts,get))
);
}

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$selector,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (selection_items__$1,selections,selectors,vec__13890,seq__13891,first__13892,seq__13891__$1,type,first__13892__$1,seq__13891__$2,map__13893,map__13893__$1,attrs,field,id,selection_items,map__13894,map__13894__$1,opts,get){
return (function (p1__13874_SHARP_){
var temp__4655__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__13874_SHARP_);
if(cljs.core.truth_(temp__4655__auto__)){
var visible_QMARK_ = temp__4655__auto__;
var G__13901 = (function (){var G__13902 = cljs.core.cst$kw$doc.cljs$core$IFn$_invoke$arity$1(opts);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13902) : cljs.core.deref.call(null,G__13902));
})();
return (visible_QMARK_.cljs$core$IFn$_invoke$arity$1 ? visible_QMARK_.cljs$core$IFn$_invoke$arity$1(G__13901) : visible_QMARK_.call(null,G__13901));
} else {
return true;
}
});})(selection_items__$1,selections,selectors,vec__13890,seq__13891,first__13892,seq__13891__$1,type,first__13892__$1,seq__13891__$2,map__13893,map__13893__$1,attrs,field,id,selection_items,map__13894,map__13894__$1,opts,get))
,selectors)));
});
;})(selection_items__$1,selections,selectors,vec__13890,seq__13891,first__13892,seq__13891__$1,type,first__13892__$1,seq__13891__$2,map__13893,map__13893__$1,attrs,field,id,selection_items,map__13894,map__13894__$1,opts,get))
});
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$single_DASH_select,(function (p__13903,p__13904){
var vec__13905 = p__13903;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13905,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13905,(1),null);
var field = vec__13905;
var map__13908 = p__13904;
var map__13908__$1 = ((((!((map__13908 == null)))?((((map__13908.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13908.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13908):map__13908);
var opts = map__13908__$1;
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13908__$1,cljs.core.cst$kw$doc);
return ((function (vec__13905,_,attrs,field,map__13908,map__13908__$1,opts,doc){
return (function (){
var temp__4655__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4655__auto__)){
var visible__13535__auto__ = temp__4655__auto__;
if(cljs.core.truth_((function (){var G__13910 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(doc) : cljs.core.deref.call(null,doc));
return (visible__13535__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__13535__auto__.cljs$core$IFn$_invoke$arity$1(G__13910) : visible__13535__auto__.call(null,G__13910));
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,opts], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,opts], null);
}
});
;})(vec__13905,_,attrs,field,map__13908,map__13908__$1,opts,doc))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$multi_DASH_select,(function (p__13911,p__13912){
var vec__13913 = p__13911;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13913,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13913,(1),null);
var field = vec__13913;
var map__13916 = p__13912;
var map__13916__$1 = ((((!((map__13916 == null)))?((((map__13916.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13916.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13916):map__13916);
var opts = map__13916__$1;
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13916__$1,cljs.core.cst$kw$doc);
return ((function (vec__13913,_,attrs,field,map__13916,map__13916__$1,opts,doc){
return (function (){
var temp__4655__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4655__auto__)){
var visible__13535__auto__ = temp__4655__auto__;
if(cljs.core.truth_((function (){var G__13918 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(doc) : cljs.core.deref.call(null,doc));
return (visible__13535__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__13535__auto__.cljs$core$IFn$_invoke$arity$1(G__13918) : visible__13535__auto__.call(null,G__13918));
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$multi_DASH_select,true)], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$multi_DASH_select,true)], null);
}
});
;})(vec__13913,_,attrs,field,map__13916,map__13916__$1,opts,doc))
}));
reagent_forms.core.map_options = (function reagent_forms$core$map_options(options){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7187__auto__ = (function reagent_forms$core$map_options_$_iter__13945(s__13946){
return (new cljs.core.LazySeq(null,(function (){
var s__13946__$1 = s__13946;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__13946__$1);
if(temp__4657__auto__){
var s__13946__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13946__$2)){
var c__7185__auto__ = cljs.core.chunk_first(s__13946__$2);
var size__7186__auto__ = cljs.core.count(c__7185__auto__);
var b__13948 = cljs.core.chunk_buffer(size__7186__auto__);
if((function (){var i__13947 = (0);
while(true){
if((i__13947 < size__7186__auto__)){
var vec__13961 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7185__auto__,i__13947);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13961,(0),null);
var map__13964 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13961,(1),null);
var map__13964__$1 = ((((!((map__13964 == null)))?((((map__13964.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13964.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13964):map__13964);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13964__$1,cljs.core.cst$kw$key);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13961,(2),null);
cljs.core.chunk_append(b__13948,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(label)].join(''),key], null));

var G__13971 = (i__13947 + (1));
i__13947 = G__13971;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13948),reagent_forms$core$map_options_$_iter__13945(cljs.core.chunk_rest(s__13946__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13948),null);
}
} else {
var vec__13966 = cljs.core.first(s__13946__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13966,(0),null);
var map__13969 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13966,(1),null);
var map__13969__$1 = ((((!((map__13969 == null)))?((((map__13969.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13969.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13969):map__13969);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13969__$1,cljs.core.cst$kw$key);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13966,(2),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(label)].join(''),key], null),reagent_forms$core$map_options_$_iter__13945(cljs.core.rest(s__13946__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7187__auto__(options);
})());
});
reagent_forms.core.default_selection = (function reagent_forms$core$default_selection(options,v){
return cljs.core.last(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__13972_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__13972_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),cljs.core.cst$kw$key], null)));
}),options)));
});
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$list,(function (p__13975,p__13976){
var vec__13977 = p__13975;
var seq__13978 = cljs.core.seq(vec__13977);
var first__13979 = cljs.core.first(seq__13978);
var seq__13978__$1 = cljs.core.next(seq__13978);
var type = first__13979;
var first__13979__$1 = cljs.core.first(seq__13978__$1);
var seq__13978__$2 = cljs.core.next(seq__13978__$1);
var map__13980 = first__13979__$1;
var map__13980__$1 = ((((!((map__13980 == null)))?((((map__13980.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13980.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13980):map__13980);
var attrs = map__13980__$1;
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13980__$1,cljs.core.cst$kw$field);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13980__$1,cljs.core.cst$kw$id);
var options = seq__13978__$2;
var map__13981 = p__13976;
var map__13981__$1 = ((((!((map__13981 == null)))?((((map__13981.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13981.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13981):map__13981);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13981__$1,cljs.core.cst$kw$doc);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13981__$1,cljs.core.cst$kw$get);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13981__$1,cljs.core.cst$kw$save_BANG_);
var options__$1 = reagent_forms.core.extract_selectors(options);
var options_lookup = reagent_forms.core.map_options(options__$1);
var selection = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var or__6407__auto__ = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
if(cljs.core.truth_(or__6407__auto__)){
return or__6407__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.first(options__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),cljs.core.cst$kw$key], null));
}
})());
var G__13984_13993 = id;
var G__13985_13994 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selection) : cljs.core.deref.call(null,selection));
(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__13984_13993,G__13985_13994) : save_BANG_.call(null,G__13984_13993,G__13985_13994));

return ((function (options__$1,options_lookup,selection,vec__13977,seq__13978,first__13979,seq__13978__$1,type,first__13979__$1,seq__13978__$2,map__13980,map__13980__$1,attrs,field,id,options,map__13981,map__13981__$1,doc,get,save_BANG_){
return (function (){
var temp__4655__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4655__auto__)){
var visible__13535__auto__ = temp__4655__auto__;
if(cljs.core.truth_((function (){var G__13986 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(doc) : cljs.core.deref.call(null,doc));
return (visible__13535__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__13535__auto__.cljs$core$IFn$_invoke$arity$1(G__13986) : visible__13535__auto__.call(null,G__13986));
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attrs,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$default_DASH_value,reagent_forms.core.default_selection(options__$1,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selection) : cljs.core.deref.call(null,selection))),cljs.core.cst$kw$on_DASH_change,((function (visible__13535__auto__,temp__4655__auto__,options__$1,options_lookup,selection,vec__13977,seq__13978,first__13979,seq__13978__$1,type,first__13979__$1,seq__13978__$2,map__13980,map__13980__$1,attrs,field,id,options,map__13981,map__13981__$1,doc,get,save_BANG_){
return (function (p1__13973_SHARP_){
var G__13987 = id;
var G__13988 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options_lookup,reagent_forms.core.value_of(p1__13973_SHARP_));
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__13987,G__13988) : save_BANG_.call(null,G__13987,G__13988));
});})(visible__13535__auto__,temp__4655__auto__,options__$1,options_lookup,selection,vec__13977,seq__13978,first__13979,seq__13978__$1,type,first__13979__$1,seq__13978__$2,map__13980,map__13980__$1,attrs,field,id,options,map__13981,map__13981__$1,doc,get,save_BANG_))
], null)], 0)),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (visible__13535__auto__,temp__4655__auto__,options__$1,options_lookup,selection,vec__13977,seq__13978,first__13979,seq__13978__$1,type,first__13979__$1,seq__13978__$2,map__13980,map__13980__$1,attrs,field,id,options,map__13981,map__13981__$1,doc,get,save_BANG_){
return (function (p1__13974_SHARP_){
var temp__4655__auto____$1 = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__13974_SHARP_));
if(cljs.core.truth_(temp__4655__auto____$1)){
var visible_QMARK_ = temp__4655__auto____$1;
var G__13989 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(doc) : cljs.core.deref.call(null,doc));
return (visible_QMARK_.cljs$core$IFn$_invoke$arity$1 ? visible_QMARK_.cljs$core$IFn$_invoke$arity$1(G__13989) : visible_QMARK_.call(null,G__13989));
} else {
return true;
}
});})(visible__13535__auto__,temp__4655__auto__,options__$1,options_lookup,selection,vec__13977,seq__13978,first__13979,seq__13978__$1,type,first__13979__$1,seq__13978__$2,map__13980,map__13980__$1,attrs,field,id,options,map__13981,map__13981__$1,doc,get,save_BANG_))
,options__$1))], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attrs,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$default_DASH_value,reagent_forms.core.default_selection(options__$1,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selection) : cljs.core.deref.call(null,selection))),cljs.core.cst$kw$on_DASH_change,((function (temp__4655__auto__,options__$1,options_lookup,selection,vec__13977,seq__13978,first__13979,seq__13978__$1,type,first__13979__$1,seq__13978__$2,map__13980,map__13980__$1,attrs,field,id,options,map__13981,map__13981__$1,doc,get,save_BANG_){
return (function (p1__13973_SHARP_){
var G__13990 = id;
var G__13991 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options_lookup,reagent_forms.core.value_of(p1__13973_SHARP_));
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__13990,G__13991) : save_BANG_.call(null,G__13990,G__13991));
});})(temp__4655__auto__,options__$1,options_lookup,selection,vec__13977,seq__13978,first__13979,seq__13978__$1,type,first__13979__$1,seq__13978__$2,map__13980,map__13980__$1,attrs,field,id,options,map__13981,map__13981__$1,doc,get,save_BANG_))
], null)], 0)),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (temp__4655__auto__,options__$1,options_lookup,selection,vec__13977,seq__13978,first__13979,seq__13978__$1,type,first__13979__$1,seq__13978__$2,map__13980,map__13980__$1,attrs,field,id,options,map__13981,map__13981__$1,doc,get,save_BANG_){
return (function (p1__13974_SHARP_){
var temp__4655__auto____$1 = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__13974_SHARP_));
if(cljs.core.truth_(temp__4655__auto____$1)){
var visible_QMARK_ = temp__4655__auto____$1;
var G__13992 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(doc) : cljs.core.deref.call(null,doc));
return (visible_QMARK_.cljs$core$IFn$_invoke$arity$1 ? visible_QMARK_.cljs$core$IFn$_invoke$arity$1(G__13992) : visible_QMARK_.call(null,G__13992));
} else {
return true;
}
});})(temp__4655__auto__,options__$1,options_lookup,selection,vec__13977,seq__13978,first__13979,seq__13978__$1,type,first__13979__$1,seq__13978__$2,map__13980,map__13980__$1,attrs,field,id,options,map__13981,map__13981__$1,doc,get,save_BANG_))
,options__$1))], null);
}
});
;})(options__$1,options_lookup,selection,vec__13977,seq__13978,first__13979,seq__13978__$1,type,first__13979__$1,seq__13978__$2,map__13980,map__13980__$1,attrs,field,id,options,map__13981,map__13981__$1,doc,get,save_BANG_))
}));
reagent_forms.core.field_QMARK_ = (function reagent_forms$core$field_QMARK_(node){
return (cljs.core.coll_QMARK_(node)) && (cljs.core.map_QMARK_(cljs.core.second(node))) && (cljs.core.contains_QMARK_(cljs.core.second(node),cljs.core.cst$kw$field));
});
/**
 * creates data bindings between the form fields and the supplied atom
 * form - the form template with the fields
 * doc - the document that the fields will be bound to
 * events - any events that should be triggered when the document state changes
 */
reagent_forms.core.bind_fields = (function reagent_forms$core$bind_fields(var_args){
var args__7489__auto__ = [];
var len__7482__auto___13999 = arguments.length;
var i__7483__auto___14000 = (0);
while(true){
if((i__7483__auto___14000 < len__7482__auto___13999)){
args__7489__auto__.push((arguments[i__7483__auto___14000]));

var G__14001 = (i__7483__auto___14000 + (1));
i__7483__auto___14000 = G__14001;
continue;
} else {
}
break;
}

var argseq__7490__auto__ = ((((2) < args__7489__auto__.length))?(new cljs.core.IndexedSeq(args__7489__auto__.slice((2)),(0),null)):null);
return reagent_forms.core.bind_fields.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7490__auto__);
});

reagent_forms.core.bind_fields.cljs$core$IFn$_invoke$arity$variadic = (function (form,doc,events){
var opts = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$doc,doc,cljs.core.cst$kw$get,(function (p1__13995_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(doc) : cljs.core.deref.call(null,doc)),(reagent_forms.core.id__GT_path.cljs$core$IFn$_invoke$arity$1 ? reagent_forms.core.id__GT_path.cljs$core$IFn$_invoke$arity$1(p1__13995_SHARP_) : reagent_forms.core.id__GT_path.call(null,p1__13995_SHARP_)));
}),cljs.core.cst$kw$save_BANG_,reagent_forms.core.mk_save_fn(doc,events)], null);
var form__$1 = clojure.walk.postwalk(((function (opts){
return (function (node){
if(cljs.core.truth_(reagent_forms.core.field_QMARK_(node))){
var opts__$1 = reagent_forms.core.wrap_fns(opts,node);
var field = (reagent_forms.core.init_field.cljs$core$IFn$_invoke$arity$2 ? reagent_forms.core.init_field.cljs$core$IFn$_invoke$arity$2(node,opts__$1) : reagent_forms.core.init_field.call(null,node,opts__$1));
if(cljs.core.fn_QMARK_(field)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [field], null);
} else {
return field;
}
} else {
return node;
}
});})(opts))
,form);
return ((function (opts,form__$1){
return (function (){
return form__$1;
});
;})(opts,form__$1))
});

reagent_forms.core.bind_fields.cljs$lang$maxFixedArity = (2);

reagent_forms.core.bind_fields.cljs$lang$applyTo = (function (seq13996){
var G__13997 = cljs.core.first(seq13996);
var seq13996__$1 = cljs.core.next(seq13996);
var G__13998 = cljs.core.first(seq13996__$1);
var seq13996__$2 = cljs.core.next(seq13996__$1);
return reagent_forms.core.bind_fields.cljs$core$IFn$_invoke$arity$variadic(G__13997,G__13998,seq13996__$2);
});

