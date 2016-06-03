// Compiled by ClojureScript 1.8.51 {}
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
reagent_forms.core.id__GT_path = cljs.core.memoize.call(null,(function (id){
if(cljs.core.sequential_QMARK_.call(null,id)){
return id;
} else {
var segments = clojure.string.split.call(null,cljs.core.subs.call(null,[cljs.core.str(id)].join(''),(1)),/\./);
return cljs.core.map.call(null,cljs.core.keyword,segments);
}
}));
reagent_forms.core.set_doc_value = (function reagent_forms$core$set_doc_value(doc,id,value,events){
var path = reagent_forms.core.id__GT_path.call(null,id);
return cljs.core.reduce.call(null,((function (path){
return (function (p1__20492_SHARP_,p2__20491_SHARP_){
var or__18453__auto__ = p2__20491_SHARP_.call(null,path,value,p1__20492_SHARP_);
if(cljs.core.truth_(or__18453__auto__)){
return or__18453__auto__;
} else {
return p1__20492_SHARP_;
}
});})(path))
,cljs.core.assoc_in.call(null,doc,path,value),events);
});
reagent_forms.core.mk_save_fn = (function reagent_forms$core$mk_save_fn(doc,events){
return (function (id,value){
return cljs.core.swap_BANG_.call(null,doc,reagent_forms.core.set_doc_value,id,value,events);
});
});
reagent_forms.core.wrap_get_fn = (function reagent_forms$core$wrap_get_fn(get,wrapper){
return (function (id){
return wrapper.call(null,get.call(null,id));
});
});
reagent_forms.core.wrap_save_fn = (function reagent_forms$core$wrap_save_fn(save_BANG_,wrapper){
return (function (id,value){
return save_BANG_.call(null,id,wrapper.call(null,value));
});
});
reagent_forms.core.wrap_fns = (function reagent_forms$core$wrap_fns(opts,node){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"get","get",1683182755),(function (){var temp__4655__auto__ = new cljs.core.Keyword(null,"in-fn","in-fn",-1938980694).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,node));
if(cljs.core.truth_(temp__4655__auto__)){
var in_fn = temp__4655__auto__;
return reagent_forms.core.wrap_get_fn.call(null,new cljs.core.Keyword(null,"get","get",1683182755).cljs$core$IFn$_invoke$arity$1(opts),in_fn);
} else {
return new cljs.core.Keyword(null,"get","get",1683182755).cljs$core$IFn$_invoke$arity$1(opts);
}
})(),new cljs.core.Keyword(null,"save!","save!",-1137373803),(function (){var temp__4655__auto__ = new cljs.core.Keyword(null,"out-fn","out-fn",747295447).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,node));
if(cljs.core.truth_(temp__4655__auto__)){
var out_fn = temp__4655__auto__;
return reagent_forms.core.wrap_save_fn.call(null,new cljs.core.Keyword(null,"save!","save!",-1137373803).cljs$core$IFn$_invoke$arity$1(opts),out_fn);
} else {
return new cljs.core.Keyword(null,"save!","save!",-1137373803).cljs$core$IFn$_invoke$arity$1(opts);
}
})()], null);
});
if(typeof reagent_forms.core.format_type !== 'undefined'){
} else {
reagent_forms.core.format_type = (function (){var method_table__19378__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19379__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19380__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19381__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19382__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"reagent-forms.core","format-type"),((function (method_table__19378__auto__,prefer_table__19379__auto__,method_cache__19380__auto__,cached_hierarchy__19381__auto__,hierarchy__19382__auto__){
return (function (field_type,_){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([field_type], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"numeric","numeric",-1495594714)], null)))){
return new cljs.core.Keyword(null,"numeric","numeric",-1495594714);
} else {
return field_type;
}
});})(method_table__19378__auto__,prefer_table__19379__auto__,method_cache__19380__auto__,cached_hierarchy__19381__auto__,hierarchy__19382__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19382__auto__,method_table__19378__auto__,prefer_table__19379__auto__,method_cache__19380__auto__,cached_hierarchy__19381__auto__));
})();
}
reagent_forms.core.valid_number_ending_QMARK_ = (function reagent_forms$core$valid_number_ending_QMARK_(n){
return ((cljs.core.not_EQ_.call(null,".",cljs.core.last.call(null,cljs.core.butlast.call(null,n)))) && (cljs.core._EQ_.call(null,".",cljs.core.last.call(null,n)))) || (cljs.core._EQ_.call(null,"0",cljs.core.last.call(null,n)));
});
reagent_forms.core.format_value = (function reagent_forms$core$format_value(fmt,value){
if(cljs.core.truth_((function (){var and__18441__auto__ = cljs.core.not.call(null,isNaN(parseFloat(value)));
if(and__18441__auto__){
return fmt;
} else {
return and__18441__auto__;
}
})())){
return goog.string.format(fmt,value);
} else {
return value;
}
});
cljs.core._add_method.call(null,reagent_forms.core.format_type,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),(function (_,n){
if(cljs.core.truth_(cljs.core.not_empty.call(null,n))){
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
cljs.core._add_method.call(null,reagent_forms.core.format_type,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,value){
return value;
}));
if(typeof reagent_forms.core.bind !== 'undefined'){
} else {
reagent_forms.core.bind = (function (){var method_table__19378__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19379__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19380__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19381__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19382__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"reagent-forms.core","bind"),((function (method_table__19378__auto__,prefer_table__19379__auto__,method_cache__19380__auto__,cached_hierarchy__19381__auto__,hierarchy__19382__auto__){
return (function (p__20493,_){
var map__20494 = p__20493;
var map__20494__$1 = ((((!((map__20494 == null)))?((((map__20494.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20494.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20494):map__20494);
var field = cljs.core.get.call(null,map__20494__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([field], true),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"numeric","numeric",-1495594714),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Keyword(null,"tel","tel",224138159),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"textarea","textarea",-650375824)], null)))){
return new cljs.core.Keyword(null,"input-field","input-field",289353943);
} else {
return field;
}
});})(method_table__19378__auto__,prefer_table__19379__auto__,method_cache__19380__auto__,cached_hierarchy__19381__auto__,hierarchy__19382__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19382__auto__,method_table__19378__auto__,prefer_table__19379__auto__,method_cache__19380__auto__,cached_hierarchy__19381__auto__));
})();
}
cljs.core._add_method.call(null,reagent_forms.core.bind,new cljs.core.Keyword(null,"input-field","input-field",289353943),(function (p__20497,p__20498){
var map__20499 = p__20497;
var map__20499__$1 = ((((!((map__20499 == null)))?((((map__20499.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20499.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20499):map__20499);
var field = cljs.core.get.call(null,map__20499__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var id = cljs.core.get.call(null,map__20499__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var fmt = cljs.core.get.call(null,map__20499__$1,new cljs.core.Keyword(null,"fmt","fmt",332300772));
var map__20500 = p__20498;
var map__20500__$1 = ((((!((map__20500 == null)))?((((map__20500.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20500.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20500):map__20500);
var get = cljs.core.get.call(null,map__20500__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.call(null,map__20500__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var doc = cljs.core.get.call(null,map__20500__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var value = (function (){var or__18453__auto__ = get.call(null,id);
if(cljs.core.truth_(or__18453__auto__)){
return or__18453__auto__;
} else {
return "";
}
})();
return reagent_forms.core.format_value.call(null,fmt,value);
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__20499,map__20499__$1,field,id,fmt,map__20500,map__20500__$1,get,save_BANG_,doc){
return (function (p1__20496_SHARP_){
return save_BANG_.call(null,id,reagent_forms.core.format_type.call(null,field,reagent_forms.core.value_of.call(null,p1__20496_SHARP_)));
});})(map__20499,map__20499__$1,field,id,fmt,map__20500,map__20500__$1,get,save_BANG_,doc))
], null);
}));
cljs.core._add_method.call(null,reagent_forms.core.bind,new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),(function (p__20503,p__20504){
var map__20505 = p__20503;
var map__20505__$1 = ((((!((map__20505 == null)))?((((map__20505.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20505.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20505):map__20505);
var id = cljs.core.get.call(null,map__20505__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__20506 = p__20504;
var map__20506__$1 = ((((!((map__20506 == null)))?((((map__20506.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20506.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20506):map__20506);
var get = cljs.core.get.call(null,map__20506__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.call(null,map__20506__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default-checked","default-checked",1039965863),get.call(null,id),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__20505,map__20505__$1,id,map__20506,map__20506__$1,get,save_BANG_){
return (function (){
return save_BANG_.call(null,id,cljs.core.not.call(null,get.call(null,id)));
});})(map__20505,map__20505__$1,id,map__20506,map__20506__$1,get,save_BANG_))
], null),(cljs.core.truth_(get.call(null,id))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"checked","checked",-50955819),"checked"], null):null));
}));
cljs.core._add_method.call(null,reagent_forms.core.bind,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,___$1){
return null;
}));
reagent_forms.core.set_attrs = (function reagent_forms$core$set_attrs(var_args){
var args__19530__auto__ = [];
var len__19523__auto___20516 = arguments.length;
var i__19524__auto___20517 = (0);
while(true){
if((i__19524__auto___20517 < len__19523__auto___20516)){
args__19530__auto__.push((arguments[i__19524__auto___20517]));

var G__20518 = (i__19524__auto___20517 + (1));
i__19524__auto___20517 = G__20518;
continue;
} else {
}
break;
}

var argseq__19531__auto__ = ((((2) < args__19530__auto__.length))?(new cljs.core.IndexedSeq(args__19530__auto__.slice((2)),(0),null)):null);
return reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19531__auto__);
});

reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic = (function (p__20512,opts,p__20513){
var vec__20514 = p__20512;
var type = cljs.core.nth.call(null,vec__20514,(0),null);
var attrs = cljs.core.nth.call(null,vec__20514,(1),null);
var body = cljs.core.nthnext.call(null,vec__20514,(2));
var vec__20515 = p__20513;
var default_attrs = cljs.core.nth.call(null,vec__20515,(0),null);
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,default_attrs,reagent_forms.core.bind.call(null,attrs,opts),attrs)], null),body);
});

reagent_forms.core.set_attrs.cljs$lang$maxFixedArity = (2);

reagent_forms.core.set_attrs.cljs$lang$applyTo = (function (seq20509){
var G__20510 = cljs.core.first.call(null,seq20509);
var seq20509__$1 = cljs.core.next.call(null,seq20509);
var G__20511 = cljs.core.first.call(null,seq20509__$1);
var seq20509__$2 = cljs.core.next.call(null,seq20509__$1);
return reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic(G__20510,G__20511,seq20509__$2);
});
if(typeof reagent_forms.core.init_field !== 'undefined'){
} else {
reagent_forms.core.init_field = (function (){var method_table__19378__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19379__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19380__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19381__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19382__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"reagent-forms.core","init-field"),((function (method_table__19378__auto__,prefer_table__19379__auto__,method_cache__19380__auto__,cached_hierarchy__19381__auto__,hierarchy__19382__auto__){
return (function (p__20519,_){
var vec__20520 = p__20519;
var ___$1 = cljs.core.nth.call(null,vec__20520,(0),null);
var map__20521 = cljs.core.nth.call(null,vec__20520,(1),null);
var map__20521__$1 = ((((!((map__20521 == null)))?((((map__20521.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20521.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20521):map__20521);
var field = cljs.core.get.call(null,map__20521__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var field__$1 = cljs.core.keyword.call(null,field);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([field__$1], true),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Keyword(null,"tel","tel",224138159),new cljs.core.Keyword(null,"textarea","textarea",-650375824)], null)))){
return new cljs.core.Keyword(null,"input-field","input-field",289353943);
} else {
return field__$1;
}
});})(method_table__19378__auto__,prefer_table__19379__auto__,method_cache__19380__auto__,cached_hierarchy__19381__auto__,hierarchy__19382__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19382__auto__,method_table__19378__auto__,prefer_table__19379__auto__,method_cache__19380__auto__,cached_hierarchy__19381__auto__));
})();
}
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"container","container",-1736937707),(function (p__20524,p__20525){
var vec__20526 = p__20524;
var type = cljs.core.nth.call(null,vec__20526,(0),null);
var map__20527 = cljs.core.nth.call(null,vec__20526,(1),null);
var map__20527__$1 = ((((!((map__20527 == null)))?((((map__20527.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20527.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20527):map__20527);
var attrs = map__20527__$1;
var valid_QMARK_ = cljs.core.get.call(null,map__20527__$1,new cljs.core.Keyword(null,"valid?","valid?",-212412379));
var body = cljs.core.nthnext.call(null,vec__20526,(2));
var map__20528 = p__20525;
var map__20528__$1 = ((((!((map__20528 == null)))?((((map__20528.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20528.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20528):map__20528);
var doc = cljs.core.get.call(null,map__20528__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return ((function (vec__20526,type,map__20527,map__20527__$1,attrs,valid_QMARK_,body,map__20528,map__20528__$1,doc){
return (function (){
var temp__4655__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4655__auto__)){
var visible__20483__auto__ = temp__4655__auto__;
if(cljs.core.truth_(visible__20483__auto__.call(null,cljs.core.deref.call(null,doc)))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,(function (){var temp__4655__auto____$1 = (cljs.core.truth_(valid_QMARK_)?valid_QMARK_.call(null,cljs.core.deref.call(null,doc)):null);
if(cljs.core.truth_(temp__4655__auto____$1)){
var valid_class = temp__4655__auto____$1;
return cljs.core.update_in.call(null,attrs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996)], null),((function (valid_class,temp__4655__auto____$1,visible__20483__auto__,temp__4655__auto__,vec__20526,type,map__20527,map__20527__$1,attrs,valid_QMARK_,body,map__20528,map__20528__$1,doc){
return (function (p1__20523_SHARP_){
if(!(cljs.core.empty_QMARK_.call(null,p1__20523_SHARP_))){
return [cljs.core.str(p1__20523_SHARP_),cljs.core.str(" "),cljs.core.str(valid_class)].join('');
} else {
return valid_class;
}
});})(valid_class,temp__4655__auto____$1,visible__20483__auto__,temp__4655__auto__,vec__20526,type,map__20527,map__20527__$1,attrs,valid_QMARK_,body,map__20528,map__20528__$1,doc))
);
} else {
return attrs;
}
})()], null),body);
} else {
return null;
}
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,(function (){var temp__4655__auto____$1 = (cljs.core.truth_(valid_QMARK_)?valid_QMARK_.call(null,cljs.core.deref.call(null,doc)):null);
if(cljs.core.truth_(temp__4655__auto____$1)){
var valid_class = temp__4655__auto____$1;
return cljs.core.update_in.call(null,attrs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996)], null),((function (valid_class,temp__4655__auto____$1,temp__4655__auto__,vec__20526,type,map__20527,map__20527__$1,attrs,valid_QMARK_,body,map__20528,map__20528__$1,doc){
return (function (p1__20523_SHARP_){
if(!(cljs.core.empty_QMARK_.call(null,p1__20523_SHARP_))){
return [cljs.core.str(p1__20523_SHARP_),cljs.core.str(" "),cljs.core.str(valid_class)].join('');
} else {
return valid_class;
}
});})(valid_class,temp__4655__auto____$1,temp__4655__auto__,vec__20526,type,map__20527,map__20527__$1,attrs,valid_QMARK_,body,map__20528,map__20528__$1,doc))
);
} else {
return attrs;
}
})()], null),body);
}
});
;})(vec__20526,type,map__20527,map__20527__$1,attrs,valid_QMARK_,body,map__20528,map__20528__$1,doc))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"input-field","input-field",289353943),(function (p__20531,p__20532){
var vec__20533 = p__20531;
var _ = cljs.core.nth.call(null,vec__20533,(0),null);
var map__20534 = cljs.core.nth.call(null,vec__20533,(1),null);
var map__20534__$1 = ((((!((map__20534 == null)))?((((map__20534.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20534.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20534):map__20534);
var attrs = map__20534__$1;
var field = cljs.core.get.call(null,map__20534__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var component = vec__20533;
var map__20535 = p__20532;
var map__20535__$1 = ((((!((map__20535 == null)))?((((map__20535.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20535.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20535):map__20535);
var opts = map__20535__$1;
var doc = cljs.core.get.call(null,map__20535__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return ((function (vec__20533,_,map__20534,map__20534__$1,attrs,field,component,map__20535,map__20535__$1,opts,doc){
return (function (){
var temp__4655__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4655__auto__)){
var visible__20483__auto__ = temp__4655__auto__;
if(cljs.core.truth_(visible__20483__auto__.call(null,cljs.core.deref.call(null,doc)))){
return reagent_forms.core.set_attrs.call(null,component,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),field], null));
} else {
return null;
}
} else {
return reagent_forms.core.set_attrs.call(null,component,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),field], null));
}
});
;})(vec__20533,_,map__20534,map__20534__$1,attrs,field,component,map__20535,map__20535__$1,opts,doc))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),(function (p__20540,p__20541){
var vec__20542 = p__20540;
var type = cljs.core.nth.call(null,vec__20542,(0),null);
var map__20543 = cljs.core.nth.call(null,vec__20542,(1),null);
var map__20543__$1 = ((((!((map__20543 == null)))?((((map__20543.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20543.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20543):map__20543);
var attrs = map__20543__$1;
var id = cljs.core.get.call(null,map__20543__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var fmt = cljs.core.get.call(null,map__20543__$1,new cljs.core.Keyword(null,"fmt","fmt",332300772));
var map__20544 = p__20541;
var map__20544__$1 = ((((!((map__20544 == null)))?((((map__20544.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20544.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20544):map__20544);
var doc = cljs.core.get.call(null,map__20544__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.call(null,map__20544__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.call(null,map__20544__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var input_value = reagent.core.atom.call(null,null);
return ((function (input_value,vec__20542,type,map__20543,map__20543__$1,attrs,id,fmt,map__20544,map__20544__$1,doc,get,save_BANG_){
return (function (){
var temp__4655__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4655__auto__)){
var visible__20483__auto__ = temp__4655__auto__;
if(cljs.core.truth_(visible__20483__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__18453__auto__ = cljs.core.deref.call(null,input_value);
if(cljs.core.truth_(or__18453__auto__)){
return or__18453__auto__;
} else {
return get.call(null,id,"");
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (visible__20483__auto__,temp__4655__auto__,input_value,vec__20542,type,map__20543,map__20543__$1,attrs,id,fmt,map__20544,map__20544__$1,doc,get,save_BANG_){
return (function (p1__20538_SHARP_){
return cljs.core.reset_BANG_.call(null,input_value,reagent_forms.core.value_of.call(null,p1__20538_SHARP_));
});})(visible__20483__auto__,temp__4655__auto__,input_value,vec__20542,type,map__20543,map__20543__$1,attrs,id,fmt,map__20544,map__20544__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),((function (visible__20483__auto__,temp__4655__auto__,input_value,vec__20542,type,map__20543,map__20543__$1,attrs,id,fmt,map__20544,map__20544__$1,doc,get,save_BANG_){
return (function (p1__20539_SHARP_){
cljs.core.reset_BANG_.call(null,input_value,null);

return save_BANG_.call(null,id,reagent_forms.core.format_type.call(null,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),reagent_forms.core.format_value.call(null,fmt,reagent_forms.core.value_of.call(null,p1__20539_SHARP_))));
});})(visible__20483__auto__,temp__4655__auto__,input_value,vec__20542,type,map__20543,map__20543__$1,attrs,id,fmt,map__20544,map__20544__$1,doc,get,save_BANG_))
], null),attrs)], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__18453__auto__ = cljs.core.deref.call(null,input_value);
if(cljs.core.truth_(or__18453__auto__)){
return or__18453__auto__;
} else {
return get.call(null,id,"");
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (temp__4655__auto__,input_value,vec__20542,type,map__20543,map__20543__$1,attrs,id,fmt,map__20544,map__20544__$1,doc,get,save_BANG_){
return (function (p1__20538_SHARP_){
return cljs.core.reset_BANG_.call(null,input_value,reagent_forms.core.value_of.call(null,p1__20538_SHARP_));
});})(temp__4655__auto__,input_value,vec__20542,type,map__20543,map__20543__$1,attrs,id,fmt,map__20544,map__20544__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),((function (temp__4655__auto__,input_value,vec__20542,type,map__20543,map__20543__$1,attrs,id,fmt,map__20544,map__20544__$1,doc,get,save_BANG_){
return (function (p1__20539_SHARP_){
cljs.core.reset_BANG_.call(null,input_value,null);

return save_BANG_.call(null,id,reagent_forms.core.format_type.call(null,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),reagent_forms.core.format_value.call(null,fmt,reagent_forms.core.value_of.call(null,p1__20539_SHARP_))));
});})(temp__4655__auto__,input_value,vec__20542,type,map__20543,map__20543__$1,attrs,id,fmt,map__20544,map__20544__$1,doc,get,save_BANG_))
], null),attrs)], null);
}
});
;})(input_value,vec__20542,type,map__20543,map__20543__$1,attrs,id,fmt,map__20544,map__20544__$1,doc,get,save_BANG_))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"datepicker","datepicker",821741450),(function (p__20548,p__20549){
var vec__20550 = p__20548;
var _ = cljs.core.nth.call(null,vec__20550,(0),null);
var map__20551 = cljs.core.nth.call(null,vec__20550,(1),null);
var map__20551__$1 = ((((!((map__20551 == null)))?((((map__20551.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20551.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20551):map__20551);
var attrs = map__20551__$1;
var id = cljs.core.get.call(null,map__20551__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var date_format = cljs.core.get.call(null,map__20551__$1,new cljs.core.Keyword(null,"date-format","date-format",-557196721));
var inline = cljs.core.get.call(null,map__20551__$1,new cljs.core.Keyword(null,"inline","inline",1399884222));
var auto_close_QMARK_ = cljs.core.get.call(null,map__20551__$1,new cljs.core.Keyword(null,"auto-close?","auto-close?",-1675434568));
var lang = cljs.core.get.call(null,map__20551__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"en-US","en-US",1221407245));
var map__20552 = p__20549;
var map__20552__$1 = ((((!((map__20552 == null)))?((((map__20552.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20552.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20552):map__20552);
var doc = cljs.core.get.call(null,map__20552__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.call(null,map__20552__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.call(null,map__20552__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var fmt = reagent_forms.datepicker.parse_format.call(null,date_format);
var selected_date = get.call(null,id);
var selected_month = (((new cljs.core.Keyword(null,"month","month",-1960248533).cljs$core$IFn$_invoke$arity$1(selected_date) > (0)))?(new cljs.core.Keyword(null,"month","month",-1960248533).cljs$core$IFn$_invoke$arity$1(selected_date) - (1)):new cljs.core.Keyword(null,"month","month",-1960248533).cljs$core$IFn$_invoke$arity$1(selected_date));
var today = (new Date());
var year = (function (){var or__18453__auto__ = new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(selected_date);
if(cljs.core.truth_(or__18453__auto__)){
return or__18453__auto__;
} else {
return today.getFullYear();
}
})();
var month = (function (){var or__18453__auto__ = selected_month;
if(cljs.core.truth_(or__18453__auto__)){
return or__18453__auto__;
} else {
return today.getMonth();
}
})();
var day = (function (){var or__18453__auto__ = new cljs.core.Keyword(null,"day","day",-274800446).cljs$core$IFn$_invoke$arity$1(selected_date);
if(cljs.core.truth_(or__18453__auto__)){
return or__18453__auto__;
} else {
return today.getDate();
}
})();
var expanded_QMARK_ = reagent.core.atom.call(null,false);
return ((function (fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__20550,_,map__20551,map__20551__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__20552,map__20552__$1,doc,get,save_BANG_){
return (function (){
var temp__4655__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4655__auto__)){
var visible__20483__auto__ = temp__4655__auto__;
if(cljs.core.truth_(visible__20483__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.datepicker-wrapper","div.datepicker-wrapper",2036556212),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-group.date","div.input-group.date",-987970676),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"read-only","read-only",-191706886),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (visible__20483__auto__,temp__4655__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__20550,_,map__20551,map__20551__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__20552,map__20552__$1,doc,get,save_BANG_){
return (function (){
return cljs.core.swap_BANG_.call(null,expanded_QMARK_,cljs.core.not);
});})(visible__20483__auto__,temp__4655__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__20550,_,map__20551,map__20551__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__20552,map__20552__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"value","value",305978217),(function (){var temp__4657__auto__ = get.call(null,id);
if(cljs.core.truth_(temp__4657__auto__)){
var date = temp__4657__auto__;
return reagent_forms.datepicker.format_date.call(null,date,fmt);
} else {
return null;
}
})()], null),attrs)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.input-group-addon","span.input-group-addon",-1300181023),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (visible__20483__auto__,temp__4655__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__20550,_,map__20551,map__20551__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__20552,map__20552__$1,doc,get,save_BANG_){
return (function (){
return cljs.core.swap_BANG_.call(null,expanded_QMARK_,cljs.core.not);
});})(visible__20483__auto__,temp__4655__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__20550,_,map__20551,map__20551__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__20552,map__20552__$1,doc,get,save_BANG_))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.glyphicon.glyphicon-calendar","i.glyphicon.glyphicon-calendar",-1048928069)], null)], null)], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.datepicker.datepicker,year,month,day,expanded_QMARK_,auto_close_QMARK_,((function (visible__20483__auto__,temp__4655__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__20550,_,map__20551,map__20551__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__20552,map__20552__$1,doc,get,save_BANG_){
return (function (){
return get.call(null,id);
});})(visible__20483__auto__,temp__4655__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__20550,_,map__20551,map__20551__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__20552,map__20552__$1,doc,get,save_BANG_))
,((function (visible__20483__auto__,temp__4655__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__20550,_,map__20551,map__20551__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__20552,map__20552__$1,doc,get,save_BANG_){
return (function (p1__20547_SHARP_){
return save_BANG_.call(null,id,p1__20547_SHARP_);
});})(visible__20483__auto__,temp__4655__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__20550,_,map__20551,map__20551__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__20552,map__20552__$1,doc,get,save_BANG_))
,inline,lang], null)], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.datepicker-wrapper","div.datepicker-wrapper",2036556212),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-group.date","div.input-group.date",-987970676),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"read-only","read-only",-191706886),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (temp__4655__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__20550,_,map__20551,map__20551__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__20552,map__20552__$1,doc,get,save_BANG_){
return (function (){
return cljs.core.swap_BANG_.call(null,expanded_QMARK_,cljs.core.not);
});})(temp__4655__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__20550,_,map__20551,map__20551__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__20552,map__20552__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"value","value",305978217),(function (){var temp__4657__auto__ = get.call(null,id);
if(cljs.core.truth_(temp__4657__auto__)){
var date = temp__4657__auto__;
return reagent_forms.datepicker.format_date.call(null,date,fmt);
} else {
return null;
}
})()], null),attrs)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.input-group-addon","span.input-group-addon",-1300181023),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (temp__4655__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__20550,_,map__20551,map__20551__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__20552,map__20552__$1,doc,get,save_BANG_){
return (function (){
return cljs.core.swap_BANG_.call(null,expanded_QMARK_,cljs.core.not);
});})(temp__4655__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__20550,_,map__20551,map__20551__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__20552,map__20552__$1,doc,get,save_BANG_))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.glyphicon.glyphicon-calendar","i.glyphicon.glyphicon-calendar",-1048928069)], null)], null)], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.datepicker.datepicker,year,month,day,expanded_QMARK_,auto_close_QMARK_,((function (temp__4655__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__20550,_,map__20551,map__20551__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__20552,map__20552__$1,doc,get,save_BANG_){
return (function (){
return get.call(null,id);
});})(temp__4655__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__20550,_,map__20551,map__20551__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__20552,map__20552__$1,doc,get,save_BANG_))
,((function (temp__4655__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__20550,_,map__20551,map__20551__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__20552,map__20552__$1,doc,get,save_BANG_){
return (function (p1__20547_SHARP_){
return save_BANG_.call(null,id,p1__20547_SHARP_);
});})(temp__4655__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__20550,_,map__20551,map__20551__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__20552,map__20552__$1,doc,get,save_BANG_))
,inline,lang], null)], null);
}
});
;})(fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__20550,_,map__20551,map__20551__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__20552,map__20552__$1,doc,get,save_BANG_))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),(function (p__20555,p__20556){
var vec__20557 = p__20555;
var _ = cljs.core.nth.call(null,vec__20557,(0),null);
var map__20558 = cljs.core.nth.call(null,vec__20557,(1),null);
var map__20558__$1 = ((((!((map__20558 == null)))?((((map__20558.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20558.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20558):map__20558);
var attrs = map__20558__$1;
var id = cljs.core.get.call(null,map__20558__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var field = cljs.core.get.call(null,map__20558__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var checked = cljs.core.get.call(null,map__20558__$1,new cljs.core.Keyword(null,"checked","checked",-50955819));
var default_checked = cljs.core.get.call(null,map__20558__$1,new cljs.core.Keyword(null,"default-checked","default-checked",1039965863));
var component = vec__20557;
var map__20559 = p__20556;
var map__20559__$1 = ((((!((map__20559 == null)))?((((map__20559.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20559.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20559):map__20559);
var opts = map__20559__$1;
var doc = cljs.core.get.call(null,map__20559__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.call(null,map__20559__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.call(null,map__20559__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
if(cljs.core.truth_((function (){var or__18453__auto__ = checked;
if(cljs.core.truth_(or__18453__auto__)){
return or__18453__auto__;
} else {
return default_checked;
}
})())){
save_BANG_.call(null,id,true);
} else {
}

return ((function (vec__20557,_,map__20558,map__20558__$1,attrs,id,field,checked,default_checked,component,map__20559,map__20559__$1,opts,doc,get,save_BANG_){
return (function (){
var temp__4655__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4655__auto__)){
var visible__20483__auto__ = temp__4655__auto__;
if(cljs.core.truth_(visible__20483__auto__.call(null,cljs.core.deref.call(null,doc)))){
return reagent_forms.core.set_attrs.call(null,component,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),field], null));
} else {
return null;
}
} else {
return reagent_forms.core.set_attrs.call(null,component,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),field], null));
}
});
;})(vec__20557,_,map__20558,map__20558__$1,attrs,id,field,checked,default_checked,component,map__20559,map__20559__$1,opts,doc,get,save_BANG_))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"label","label",1718410804),(function (p__20562,p__20563){
var vec__20564 = p__20562;
var type = cljs.core.nth.call(null,vec__20564,(0),null);
var map__20565 = cljs.core.nth.call(null,vec__20564,(1),null);
var map__20565__$1 = ((((!((map__20565 == null)))?((((map__20565.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20565.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20565):map__20565);
var attrs = map__20565__$1;
var id = cljs.core.get.call(null,map__20565__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var preamble = cljs.core.get.call(null,map__20565__$1,new cljs.core.Keyword(null,"preamble","preamble",1641040241));
var postamble = cljs.core.get.call(null,map__20565__$1,new cljs.core.Keyword(null,"postamble","postamble",-500033366));
var placeholder = cljs.core.get.call(null,map__20565__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var map__20566 = p__20563;
var map__20566__$1 = ((((!((map__20566 == null)))?((((map__20566.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20566.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20566):map__20566);
var doc = cljs.core.get.call(null,map__20566__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.call(null,map__20566__$1,new cljs.core.Keyword(null,"get","get",1683182755));
return ((function (vec__20564,type,map__20565,map__20565__$1,attrs,id,preamble,postamble,placeholder,map__20566,map__20566__$1,doc,get){
return (function (){
var temp__4655__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4655__auto__)){
var visible__20483__auto__ = temp__4655__auto__;
if(cljs.core.truth_(visible__20483__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,preamble,(function (){var temp__4655__auto____$1 = get.call(null,id);
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
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,preamble,(function (){var temp__4655__auto____$1 = get.call(null,id);
if(cljs.core.truth_(temp__4655__auto____$1)){
var value = temp__4655__auto____$1;
return [cljs.core.str(value),cljs.core.str(postamble)].join('');
} else {
return placeholder;
}
})()], null);
}
});
;})(vec__20564,type,map__20565,map__20565__$1,attrs,id,preamble,postamble,placeholder,map__20566,map__20566__$1,doc,get))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"alert","alert",-571950580),(function (p__20569,p__20570){
var vec__20571 = p__20569;
var type = cljs.core.nth.call(null,vec__20571,(0),null);
var map__20572 = cljs.core.nth.call(null,vec__20571,(1),null);
var map__20572__$1 = ((((!((map__20572 == null)))?((((map__20572.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20572.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20572):map__20572);
var attrs = map__20572__$1;
var id = cljs.core.get.call(null,map__20572__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.call(null,map__20572__$1,new cljs.core.Keyword(null,"event","event",301435442));
var touch_event = cljs.core.get.call(null,map__20572__$1,new cljs.core.Keyword(null,"touch-event","touch-event",-1071581783));
var closeable_QMARK_ = cljs.core.get.call(null,map__20572__$1,new cljs.core.Keyword(null,"closeable?","closeable?",1490064409),true);
var body = cljs.core.nthnext.call(null,vec__20571,(2));
var map__20573 = p__20570;
var map__20573__$1 = ((((!((map__20573 == null)))?((((map__20573.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20573.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20573):map__20573);
var opts = map__20573__$1;
var doc = cljs.core.get.call(null,map__20573__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.call(null,map__20573__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.call(null,map__20573__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
return ((function (vec__20571,type,map__20572,map__20572__$1,attrs,id,event,touch_event,closeable_QMARK_,body,map__20573,map__20573__$1,opts,doc,get,save_BANG_){
return (function (){
var temp__4655__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4655__auto__)){
var visible__20483__auto__ = temp__4655__auto__;
if(cljs.core.truth_(visible__20483__auto__.call(null,cljs.core.deref.call(null,doc)))){
if(cljs.core.truth_(event)){
if(cljs.core.truth_(event.call(null,get.call(null,id)))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.dissoc.call(null,attrs,event)], null),body);
} else {
return null;
}
} else {
var temp__4655__auto____$1 = cljs.core.not_empty.call(null,get.call(null,id));
if(cljs.core.truth_(temp__4655__auto____$1)){
var message = temp__4655__auto____$1;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,(cljs.core.truth_(closeable_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.close","button.close",-1545560743),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),true,(function (){var or__18453__auto__ = touch_event;
if(cljs.core.truth_(or__18453__auto__)){
return or__18453__auto__;
} else {
return new cljs.core.Keyword(null,"on-click","on-click",1632826543);
}
})(),((function (message,temp__4655__auto____$1,visible__20483__auto__,temp__4655__auto__,vec__20571,type,map__20572,map__20572__$1,attrs,id,event,touch_event,closeable_QMARK_,body,map__20573,map__20573__$1,opts,doc,get,save_BANG_){
return (function (){
return save_BANG_.call(null,id,null);
});})(message,temp__4655__auto____$1,visible__20483__auto__,temp__4655__auto__,vec__20571,type,map__20572,map__20572__$1,attrs,id,event,touch_event,closeable_QMARK_,body,map__20573,map__20573__$1,opts,doc,get,save_BANG_))
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
if(cljs.core.truth_(event.call(null,get.call(null,id)))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.dissoc.call(null,attrs,event)], null),body);
} else {
return null;
}
} else {
var temp__4655__auto____$1 = cljs.core.not_empty.call(null,get.call(null,id));
if(cljs.core.truth_(temp__4655__auto____$1)){
var message = temp__4655__auto____$1;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,(cljs.core.truth_(closeable_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.close","button.close",-1545560743),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),true,(function (){var or__18453__auto__ = touch_event;
if(cljs.core.truth_(or__18453__auto__)){
return or__18453__auto__;
} else {
return new cljs.core.Keyword(null,"on-click","on-click",1632826543);
}
})(),((function (message,temp__4655__auto____$1,temp__4655__auto__,vec__20571,type,map__20572,map__20572__$1,attrs,id,event,touch_event,closeable_QMARK_,body,map__20573,map__20573__$1,opts,doc,get,save_BANG_){
return (function (){
return save_BANG_.call(null,id,null);
});})(message,temp__4655__auto____$1,temp__4655__auto__,vec__20571,type,map__20572,map__20572__$1,attrs,id,event,touch_event,closeable_QMARK_,body,map__20573,map__20573__$1,opts,doc,get,save_BANG_))
], true, false),"X"], null):null),message], null);
} else {
return null;
}
}
}
});
;})(vec__20571,type,map__20572,map__20572__$1,attrs,id,event,touch_event,closeable_QMARK_,body,map__20573,map__20573__$1,opts,doc,get,save_BANG_))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"radio","radio",1323726374),(function (p__20576,p__20577){
var vec__20578 = p__20576;
var type = cljs.core.nth.call(null,vec__20578,(0),null);
var map__20579 = cljs.core.nth.call(null,vec__20578,(1),null);
var map__20579__$1 = ((((!((map__20579 == null)))?((((map__20579.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20579.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20579):map__20579);
var attrs = map__20579__$1;
var field = cljs.core.get.call(null,map__20579__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var name = cljs.core.get.call(null,map__20579__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var value = cljs.core.get.call(null,map__20579__$1,new cljs.core.Keyword(null,"value","value",305978217));
var checked = cljs.core.get.call(null,map__20579__$1,new cljs.core.Keyword(null,"checked","checked",-50955819));
var default_checked = cljs.core.get.call(null,map__20579__$1,new cljs.core.Keyword(null,"default-checked","default-checked",1039965863));
var body = cljs.core.nthnext.call(null,vec__20578,(2));
var map__20580 = p__20577;
var map__20580__$1 = ((((!((map__20580 == null)))?((((map__20580.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20580.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20580):map__20580);
var doc = cljs.core.get.call(null,map__20580__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.call(null,map__20580__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.call(null,map__20580__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
if(cljs.core.truth_((function (){var or__18453__auto__ = checked;
if(cljs.core.truth_(or__18453__auto__)){
return or__18453__auto__;
} else {
return default_checked;
}
})())){
save_BANG_.call(null,name,value);
} else {
}

return ((function (vec__20578,type,map__20579,map__20579__$1,attrs,field,name,value,checked,default_checked,body,map__20580,map__20580__$1,doc,get,save_BANG_){
return (function (){
var temp__4655__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4655__auto__)){
var visible__20483__auto__ = temp__4655__auto__;
if(cljs.core.truth_(visible__20483__auto__.call(null,cljs.core.deref.call(null,doc)))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"radio","radio",1323726374),new cljs.core.Keyword(null,"default-checked","default-checked",1039965863),cljs.core._EQ_.call(null,value,get.call(null,name)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (visible__20483__auto__,temp__4655__auto__,vec__20578,type,map__20579,map__20579__$1,attrs,field,name,value,checked,default_checked,body,map__20580,map__20580__$1,doc,get,save_BANG_){
return (function (){
return save_BANG_.call(null,name,value);
});})(visible__20483__auto__,temp__4655__auto__,vec__20578,type,map__20579,map__20579__$1,attrs,field,name,value,checked,default_checked,body,map__20580,map__20580__$1,doc,get,save_BANG_))
], null),attrs)], null),body);
} else {
return null;
}
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"radio","radio",1323726374),new cljs.core.Keyword(null,"default-checked","default-checked",1039965863),cljs.core._EQ_.call(null,value,get.call(null,name)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (temp__4655__auto__,vec__20578,type,map__20579,map__20579__$1,attrs,field,name,value,checked,default_checked,body,map__20580,map__20580__$1,doc,get,save_BANG_){
return (function (){
return save_BANG_.call(null,name,value);
});})(temp__4655__auto__,vec__20578,type,map__20579,map__20579__$1,attrs,field,name,value,checked,default_checked,body,map__20580,map__20580__$1,doc,get,save_BANG_))
], null),attrs)], null),body);
}
});
;})(vec__20578,type,map__20579,map__20579__$1,attrs,field,name,value,checked,default_checked,body,map__20580,map__20580__$1,doc,get,save_BANG_))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"typeahead","typeahead",-1364611797),(function (p__20586,p__20587){
var vec__20588 = p__20586;
var type = cljs.core.nth.call(null,vec__20588,(0),null);
var map__20589 = cljs.core.nth.call(null,vec__20588,(1),null);
var map__20589__$1 = ((((!((map__20589 == null)))?((((map__20589.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20589.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20589):map__20589);
var attrs = map__20589__$1;
var result_fn = cljs.core.get.call(null,map__20589__$1,new cljs.core.Keyword(null,"result-fn","result-fn",-726333573),cljs.core.identity);
var item_class = cljs.core.get.call(null,map__20589__$1,new cljs.core.Keyword(null,"item-class","item-class",1277553858));
var input_placeholder = cljs.core.get.call(null,map__20589__$1,new cljs.core.Keyword(null,"input-placeholder","input-placeholder",-965612860));
var highlight_class = cljs.core.get.call(null,map__20589__$1,new cljs.core.Keyword(null,"highlight-class","highlight-class",1738202282));
var list_class = cljs.core.get.call(null,map__20589__$1,new cljs.core.Keyword(null,"list-class","list-class",1412758252));
var data_source = cljs.core.get.call(null,map__20589__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var input_class = cljs.core.get.call(null,map__20589__$1,new cljs.core.Keyword(null,"input-class","input-class",-62053138));
var clear_on_focus_QMARK_ = cljs.core.get.call(null,map__20589__$1,new cljs.core.Keyword(null,"clear-on-focus?","clear-on-focus?",330213424),true);
var id = cljs.core.get.call(null,map__20589__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var choice_fn = cljs.core.get.call(null,map__20589__$1,new cljs.core.Keyword(null,"choice-fn","choice-fn",-1053191627),cljs.core.identity);
var map__20590 = p__20587;
var map__20590__$1 = ((((!((map__20590 == null)))?((((map__20590.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20590.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20590):map__20590);
var doc = cljs.core.get.call(null,map__20590__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.call(null,map__20590__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.call(null,map__20590__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var typeahead_hidden_QMARK_ = reagent.core.atom.call(null,true);
var mouse_on_list_QMARK_ = reagent.core.atom.call(null,false);
var selected_index = reagent.core.atom.call(null,(-1));
var selections = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var choose_selected = ((function (typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__20588,type,map__20589,map__20589__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__20590,map__20590__$1,doc,get,save_BANG_){
return (function (){
if(cljs.core.truth_((function (){var and__18441__auto__ = cljs.core.not_empty.call(null,cljs.core.deref.call(null,selections));
if(cljs.core.truth_(and__18441__auto__)){
return (cljs.core.deref.call(null,selected_index) > (-1));
} else {
return and__18441__auto__;
}
})())){
var choice = cljs.core.nth.call(null,cljs.core.deref.call(null,selections),cljs.core.deref.call(null,selected_index));
save_BANG_.call(null,id,choice);

choice_fn.call(null,choice);

return cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);
} else {
return null;
}
});})(typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__20588,type,map__20589,map__20589__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__20590,map__20590__$1,doc,get,save_BANG_))
;
return ((function (typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__20588,type,map__20589,map__20589__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__20590,map__20590__$1,doc,get,save_BANG_){
return (function (){
var temp__4655__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4655__auto__)){
var visible__20483__auto__ = temp__4655__auto__;
if(cljs.core.truth_(visible__20483__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),input_placeholder,new cljs.core.Keyword(null,"class","class",-2030961996),input_class,new cljs.core.Keyword(null,"value","value",305978217),(function (){var v = get.call(null,id);
if(!(cljs.core.iterable_QMARK_.call(null,v))){
return v;
} else {
return cljs.core.first.call(null,v);
}
})(),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),((function (visible__20483__auto__,temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__20588,type,map__20589,map__20589__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__20590,map__20590__$1,doc,get,save_BANG_){
return (function (){
if(cljs.core.truth_(clear_on_focus_QMARK_)){
return save_BANG_.call(null,id,null);
} else {
return null;
}
});})(visible__20483__auto__,temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__20588,type,map__20589,map__20589__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__20590,map__20590__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),((function (visible__20483__auto__,temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__20588,type,map__20589,map__20589__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__20590,map__20590__$1,doc,get,save_BANG_){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,mouse_on_list_QMARK_))){
return null;
} else {
cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

return cljs.core.reset_BANG_.call(null,selected_index,(-1));
}
});})(visible__20483__auto__,temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__20588,type,map__20589,map__20589__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__20590,map__20590__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (visible__20483__auto__,temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__20588,type,map__20589,map__20589__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__20590,map__20590__$1,doc,get,save_BANG_){
return (function (p1__20583_SHARP_){
var temp__4657__auto__ = clojure.string.trim.call(null,reagent_forms.core.value_of.call(null,p1__20583_SHARP_));
if(cljs.core.truth_(temp__4657__auto__)){
var value = temp__4657__auto__;
cljs.core.reset_BANG_.call(null,selections,data_source.call(null,value.toLowerCase()));

save_BANG_.call(null,id,reagent_forms.core.value_of.call(null,p1__20583_SHARP_));

cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,false);

return cljs.core.reset_BANG_.call(null,selected_index,(-1));
} else {
return null;
}
});})(visible__20483__auto__,temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__20588,type,map__20589,map__20589__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__20590,map__20590__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (visible__20483__auto__,temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__20588,type,map__20589,map__20589__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__20590,map__20590__$1,doc,get,save_BANG_){
return (function (p1__20584_SHARP_){
var G__20593 = p1__20584_SHARP_.which;
switch (G__20593) {
case (38):
p1__20584_SHARP_.preventDefault();

if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,selected_index),(0))){
return null;
} else {
return cljs.core.swap_BANG_.call(null,selected_index,cljs.core.dec);
}

break;
case (40):
p1__20584_SHARP_.preventDefault();

if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,selected_index),(cljs.core.count.call(null,cljs.core.deref.call(null,selections)) - (1)))){
return null;
} else {
save_BANG_.call(null,id,reagent_forms.core.value_of.call(null,p1__20584_SHARP_));

return cljs.core.swap_BANG_.call(null,selected_index,cljs.core.inc);
}

break;
case (9):
return choose_selected.call(null);

break;
case (13):
return choose_selected.call(null);

break;
case (27):
cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

return cljs.core.reset_BANG_.call(null,selected_index,(0));

break;
default:
return "default";

}
});})(visible__20483__auto__,temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__20588,type,map__20589,map__20589__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__20590,map__20590__$1,doc,get,save_BANG_))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),(cljs.core.truth_((function (){var or__18453__auto__ = cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,selections));
if(or__18453__auto__){
return or__18453__auto__;
} else {
return cljs.core.deref.call(null,typeahead_hidden_QMARK_);
}
})())?new cljs.core.Keyword(null,"none","none",1333468478):new cljs.core.Keyword(null,"block","block",664686210))], null),new cljs.core.Keyword(null,"class","class",-2030961996),list_class,new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),((function (visible__20483__auto__,temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__20588,type,map__20589,map__20589__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__20590,map__20590__$1,doc,get,save_BANG_){
return (function (){
return cljs.core.reset_BANG_.call(null,mouse_on_list_QMARK_,true);
});})(visible__20483__auto__,temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__20588,type,map__20589,map__20589__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__20590,map__20590__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),((function (visible__20483__auto__,temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__20588,type,map__20589,map__20589__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__20590,map__20590__$1,doc,get,save_BANG_){
return (function (){
return cljs.core.reset_BANG_.call(null,mouse_on_list_QMARK_,false);
});})(visible__20483__auto__,temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__20588,type,map__20589,map__20589__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__20590,map__20590__$1,doc,get,save_BANG_))
], null),cljs.core.doall.call(null,cljs.core.map_indexed.call(null,((function (visible__20483__auto__,temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__20588,type,map__20589,map__20589__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__20590,map__20590__$1,doc,get,save_BANG_){
return (function (index,result){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"tab-index","tab-index",895755393),index,new cljs.core.Keyword(null,"key","key",-1516042587),index,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,selected_index),index))?highlight_class:item_class),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (visible__20483__auto__,temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__20588,type,map__20589,map__20589__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__20590,map__20590__$1,doc,get,save_BANG_){
return (function (p1__20585_SHARP_){
return cljs.core.reset_BANG_.call(null,selected_index,parseInt(p1__20585_SHARP_.target.getAttribute("tabIndex")));
});})(visible__20483__auto__,temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__20588,type,map__20589,map__20589__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__20590,map__20590__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (visible__20483__auto__,temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__20588,type,map__20589,map__20589__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__20590,map__20590__$1,doc,get,save_BANG_){
return (function (){
cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

save_BANG_.call(null,id,result);

return choice_fn.call(null,result);
});})(visible__20483__auto__,temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__20588,type,map__20589,map__20589__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__20590,map__20590__$1,doc,get,save_BANG_))
], null),result_fn.call(null,result)], null);
});})(visible__20483__auto__,temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__20588,type,map__20589,map__20589__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__20590,map__20590__$1,doc,get,save_BANG_))
,cljs.core.deref.call(null,selections)))], null)], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),input_placeholder,new cljs.core.Keyword(null,"class","class",-2030961996),input_class,new cljs.core.Keyword(null,"value","value",305978217),(function (){var v = get.call(null,id);
if(!(cljs.core.iterable_QMARK_.call(null,v))){
return v;
} else {
return cljs.core.first.call(null,v);
}
})(),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),((function (temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__20588,type,map__20589,map__20589__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__20590,map__20590__$1,doc,get,save_BANG_){
return (function (){
if(cljs.core.truth_(clear_on_focus_QMARK_)){
return save_BANG_.call(null,id,null);
} else {
return null;
}
});})(temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__20588,type,map__20589,map__20589__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__20590,map__20590__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),((function (temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__20588,type,map__20589,map__20589__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__20590,map__20590__$1,doc,get,save_BANG_){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,mouse_on_list_QMARK_))){
return null;
} else {
cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

return cljs.core.reset_BANG_.call(null,selected_index,(-1));
}
});})(temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__20588,type,map__20589,map__20589__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__20590,map__20590__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__20588,type,map__20589,map__20589__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__20590,map__20590__$1,doc,get,save_BANG_){
return (function (p1__20583_SHARP_){
var temp__4657__auto__ = clojure.string.trim.call(null,reagent_forms.core.value_of.call(null,p1__20583_SHARP_));
if(cljs.core.truth_(temp__4657__auto__)){
var value = temp__4657__auto__;
cljs.core.reset_BANG_.call(null,selections,data_source.call(null,value.toLowerCase()));

save_BANG_.call(null,id,reagent_forms.core.value_of.call(null,p1__20583_SHARP_));

cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,false);

return cljs.core.reset_BANG_.call(null,selected_index,(-1));
} else {
return null;
}
});})(temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__20588,type,map__20589,map__20589__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__20590,map__20590__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__20588,type,map__20589,map__20589__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__20590,map__20590__$1,doc,get,save_BANG_){
return (function (p1__20584_SHARP_){
var G__20594 = p1__20584_SHARP_.which;
switch (G__20594) {
case (38):
p1__20584_SHARP_.preventDefault();

if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,selected_index),(0))){
return null;
} else {
return cljs.core.swap_BANG_.call(null,selected_index,cljs.core.dec);
}

break;
case (40):
p1__20584_SHARP_.preventDefault();

if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,selected_index),(cljs.core.count.call(null,cljs.core.deref.call(null,selections)) - (1)))){
return null;
} else {
save_BANG_.call(null,id,reagent_forms.core.value_of.call(null,p1__20584_SHARP_));

return cljs.core.swap_BANG_.call(null,selected_index,cljs.core.inc);
}

break;
case (9):
return choose_selected.call(null);

break;
case (13):
return choose_selected.call(null);

break;
case (27):
cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

return cljs.core.reset_BANG_.call(null,selected_index,(0));

break;
default:
return "default";

}
});})(temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__20588,type,map__20589,map__20589__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__20590,map__20590__$1,doc,get,save_BANG_))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),(cljs.core.truth_((function (){var or__18453__auto__ = cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,selections));
if(or__18453__auto__){
return or__18453__auto__;
} else {
return cljs.core.deref.call(null,typeahead_hidden_QMARK_);
}
})())?new cljs.core.Keyword(null,"none","none",1333468478):new cljs.core.Keyword(null,"block","block",664686210))], null),new cljs.core.Keyword(null,"class","class",-2030961996),list_class,new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),((function (temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__20588,type,map__20589,map__20589__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__20590,map__20590__$1,doc,get,save_BANG_){
return (function (){
return cljs.core.reset_BANG_.call(null,mouse_on_list_QMARK_,true);
});})(temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__20588,type,map__20589,map__20589__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__20590,map__20590__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),((function (temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__20588,type,map__20589,map__20589__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__20590,map__20590__$1,doc,get,save_BANG_){
return (function (){
return cljs.core.reset_BANG_.call(null,mouse_on_list_QMARK_,false);
});})(temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__20588,type,map__20589,map__20589__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__20590,map__20590__$1,doc,get,save_BANG_))
], null),cljs.core.doall.call(null,cljs.core.map_indexed.call(null,((function (temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__20588,type,map__20589,map__20589__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__20590,map__20590__$1,doc,get,save_BANG_){
return (function (index,result){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"tab-index","tab-index",895755393),index,new cljs.core.Keyword(null,"key","key",-1516042587),index,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,selected_index),index))?highlight_class:item_class),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__20588,type,map__20589,map__20589__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__20590,map__20590__$1,doc,get,save_BANG_){
return (function (p1__20585_SHARP_){
return cljs.core.reset_BANG_.call(null,selected_index,parseInt(p1__20585_SHARP_.target.getAttribute("tabIndex")));
});})(temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__20588,type,map__20589,map__20589__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__20590,map__20590__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__20588,type,map__20589,map__20589__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__20590,map__20590__$1,doc,get,save_BANG_){
return (function (){
cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

save_BANG_.call(null,id,result);

return choice_fn.call(null,result);
});})(temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__20588,type,map__20589,map__20589__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__20590,map__20590__$1,doc,get,save_BANG_))
], null),result_fn.call(null,result)], null);
});})(temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__20588,type,map__20589,map__20589__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__20590,map__20590__$1,doc,get,save_BANG_))
,cljs.core.deref.call(null,selections)))], null)], null);
}
});
;})(typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__20588,type,map__20589,map__20589__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__20590,map__20590__$1,doc,get,save_BANG_))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"file","file",-1269645878),(function (p__20598,p__20599){
var vec__20600 = p__20598;
var type = cljs.core.nth.call(null,vec__20600,(0),null);
var map__20601 = cljs.core.nth.call(null,vec__20600,(1),null);
var map__20601__$1 = ((((!((map__20601 == null)))?((((map__20601.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20601.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20601):map__20601);
var attrs = map__20601__$1;
var id = cljs.core.get.call(null,map__20601__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__20602 = p__20599;
var map__20602__$1 = ((((!((map__20602 == null)))?((((map__20602.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20602.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20602):map__20602);
var doc = cljs.core.get.call(null,map__20602__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var save_BANG_ = cljs.core.get.call(null,map__20602__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
return ((function (vec__20600,type,map__20601,map__20601__$1,attrs,id,map__20602,map__20602__$1,doc,save_BANG_){
return (function (){
var temp__4655__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4655__auto__)){
var visible__20483__auto__ = temp__4655__auto__;
if(cljs.core.truth_(visible__20483__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (visible__20483__auto__,temp__4655__auto__,vec__20600,type,map__20601,map__20601__$1,attrs,id,map__20602,map__20602__$1,doc,save_BANG_){
return (function (p1__20597_SHARP_){
return save_BANG_.call(null,id,cljs.core.first.call(null,cljs.core.array_seq.call(null,p1__20597_SHARP_.target.files)));
});})(visible__20483__auto__,temp__4655__auto__,vec__20600,type,map__20601,map__20601__$1,attrs,id,map__20602,map__20602__$1,doc,save_BANG_))
], null),attrs)], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (temp__4655__auto__,vec__20600,type,map__20601,map__20601__$1,attrs,id,map__20602,map__20602__$1,doc,save_BANG_){
return (function (p1__20597_SHARP_){
return save_BANG_.call(null,id,cljs.core.first.call(null,cljs.core.array_seq.call(null,p1__20597_SHARP_.target.files)));
});})(temp__4655__auto__,vec__20600,type,map__20601,map__20601__$1,attrs,id,map__20602,map__20602__$1,doc,save_BANG_))
], null),attrs)], null);
}
});
;})(vec__20600,type,map__20601,map__20601__$1,attrs,id,map__20602,map__20602__$1,doc,save_BANG_))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"files","files",-472457450),(function (p__20606,p__20607){
var vec__20608 = p__20606;
var type = cljs.core.nth.call(null,vec__20608,(0),null);
var map__20609 = cljs.core.nth.call(null,vec__20608,(1),null);
var map__20609__$1 = ((((!((map__20609 == null)))?((((map__20609.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20609.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20609):map__20609);
var attrs = map__20609__$1;
var id = cljs.core.get.call(null,map__20609__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__20610 = p__20607;
var map__20610__$1 = ((((!((map__20610 == null)))?((((map__20610.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20610.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20610):map__20610);
var doc = cljs.core.get.call(null,map__20610__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var save_BANG_ = cljs.core.get.call(null,map__20610__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
return ((function (vec__20608,type,map__20609,map__20609__$1,attrs,id,map__20610,map__20610__$1,doc,save_BANG_){
return (function (){
var temp__4655__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4655__auto__)){
var visible__20483__auto__ = temp__4655__auto__;
if(cljs.core.truth_(visible__20483__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"multiple","multiple",1244445549),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (visible__20483__auto__,temp__4655__auto__,vec__20608,type,map__20609,map__20609__$1,attrs,id,map__20610,map__20610__$1,doc,save_BANG_){
return (function (p1__20605_SHARP_){
return save_BANG_.call(null,id,p1__20605_SHARP_.target.files);
});})(visible__20483__auto__,temp__4655__auto__,vec__20608,type,map__20609,map__20609__$1,attrs,id,map__20610,map__20610__$1,doc,save_BANG_))
], null),attrs)], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"multiple","multiple",1244445549),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (temp__4655__auto__,vec__20608,type,map__20609,map__20609__$1,attrs,id,map__20610,map__20610__$1,doc,save_BANG_){
return (function (p1__20605_SHARP_){
return save_BANG_.call(null,id,p1__20605_SHARP_.target.files);
});})(temp__4655__auto__,vec__20608,type,map__20609,map__20609__$1,attrs,id,map__20610,map__20610__$1,doc,save_BANG_))
], null),attrs)], null);
}
});
;})(vec__20608,type,map__20609,map__20609__$1,attrs,id,map__20610,map__20610__$1,doc,save_BANG_))
}));
reagent_forms.core.group_item = (function reagent_forms$core$group_item(p__20613,p__20614,selections,field,id){
var vec__20620 = p__20613;
var type = cljs.core.nth.call(null,vec__20620,(0),null);
var map__20621 = cljs.core.nth.call(null,vec__20620,(1),null);
var map__20621__$1 = ((((!((map__20621 == null)))?((((map__20621.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20621.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20621):map__20621);
var attrs = map__20621__$1;
var key = cljs.core.get.call(null,map__20621__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var touch_event = cljs.core.get.call(null,map__20621__$1,new cljs.core.Keyword(null,"touch-event","touch-event",-1071581783));
var body = cljs.core.nthnext.call(null,vec__20620,(2));
var map__20622 = p__20614;
var map__20622__$1 = ((((!((map__20622 == null)))?((((map__20622.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20622.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20622):map__20622);
var save_BANG_ = cljs.core.get.call(null,map__20622__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var multi_select = cljs.core.get.call(null,map__20622__$1,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287));
var handle_click_BANG_ = ((function (vec__20620,type,map__20621,map__20621__$1,attrs,key,touch_event,body,map__20622,map__20622__$1,save_BANG_,multi_select){
return (function reagent_forms$core$group_item_$_handle_click_BANG_(){
if(cljs.core.truth_(multi_select)){
cljs.core.swap_BANG_.call(null,selections,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),cljs.core.not);

return save_BANG_.call(null,id,cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,cljs.core.second,cljs.core.deref.call(null,selections))));
} else {
var value = cljs.core.get.call(null,cljs.core.deref.call(null,selections),key);
cljs.core.reset_BANG_.call(null,selections,cljs.core.PersistentArrayMap.fromArray([key,cljs.core.not.call(null,value)], true, false));

return save_BANG_.call(null,id,(cljs.core.truth_(cljs.core.get.call(null,cljs.core.deref.call(null,selections),key))?key:null));
}
});})(vec__20620,type,map__20621,map__20621__$1,attrs,key,touch_event,body,map__20622,map__20622__$1,save_BANG_,multi_select))
;
return ((function (vec__20620,type,map__20621,map__20621__$1,attrs,key,touch_event,body,map__20622,map__20622__$1,save_BANG_,multi_select){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(cljs.core.get.call(null,cljs.core.deref.call(null,selections),key))?"active":null),(function (){var or__18453__auto__ = touch_event;
if(cljs.core.truth_(or__18453__auto__)){
return or__18453__auto__;
} else {
return new cljs.core.Keyword(null,"on-click","on-click",1632826543);
}
})(),handle_click_BANG_], true, false),attrs),body], null);
});
;})(vec__20620,type,map__20621,map__20621__$1,attrs,key,touch_event,body,map__20622,map__20622__$1,save_BANG_,multi_select))
});
reagent_forms.core.mk_selections = (function reagent_forms$core$mk_selections(id,selectors,p__20625){
var map__20632 = p__20625;
var map__20632__$1 = ((((!((map__20632 == null)))?((((map__20632.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20632.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20632):map__20632);
var get = cljs.core.get.call(null,map__20632__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var multi_select = cljs.core.get.call(null,map__20632__$1,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287));
var value = get.call(null,id);
return cljs.core.reduce.call(null,((function (value,map__20632,map__20632__$1,get,multi_select){
return (function (m,p__20634){
var vec__20635 = p__20634;
var _ = cljs.core.nth.call(null,vec__20635,(0),null);
var map__20636 = cljs.core.nth.call(null,vec__20635,(1),null);
var map__20636__$1 = ((((!((map__20636 == null)))?((((map__20636.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20636.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20636):map__20636);
var key = cljs.core.get.call(null,map__20636__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return cljs.core.assoc.call(null,m,key,cljs.core.boolean$.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([key], true),(cljs.core.truth_(multi_select)?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)))));
});})(value,map__20632,map__20632__$1,get,multi_select))
,cljs.core.PersistentArrayMap.EMPTY,selectors);
});
/**
 * selectors might be passed in inline or as a collection
 */
reagent_forms.core.extract_selectors = (function reagent_forms$core$extract_selectors(selectors){
if((cljs.core.ffirst.call(null,selectors) instanceof cljs.core.Keyword)){
return selectors;
} else {
return cljs.core.first.call(null,selectors);
}
});
reagent_forms.core.selection_group = (function reagent_forms$core$selection_group(p__20640,p__20641){
var vec__20649 = p__20640;
var type = cljs.core.nth.call(null,vec__20649,(0),null);
var map__20650 = cljs.core.nth.call(null,vec__20649,(1),null);
var map__20650__$1 = ((((!((map__20650 == null)))?((((map__20650.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20650.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20650):map__20650);
var attrs = map__20650__$1;
var field = cljs.core.get.call(null,map__20650__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var id = cljs.core.get.call(null,map__20650__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var selection_items = cljs.core.nthnext.call(null,vec__20649,(2));
var map__20651 = p__20641;
var map__20651__$1 = ((((!((map__20651 == null)))?((((map__20651.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20651.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20651):map__20651);
var opts = map__20651__$1;
var get = cljs.core.get.call(null,map__20651__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var selection_items__$1 = reagent_forms.core.extract_selectors.call(null,selection_items);
var selections = reagent.core.atom.call(null,reagent_forms.core.mk_selections.call(null,id,selection_items__$1,opts));
var selectors = cljs.core.map.call(null,((function (selection_items__$1,selections,vec__20649,type,map__20650,map__20650__$1,attrs,field,id,selection_items,map__20651,map__20651__$1,opts,get){
return (function (item){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"visible?","visible?",2129863715),new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,item)),new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.group_item.call(null,item,opts,selections,field,id)], null)], null);
});})(selection_items__$1,selections,vec__20649,type,map__20650,map__20650__$1,attrs,field,id,selection_items,map__20651,map__20651__$1,opts,get))
,selection_items__$1);
return ((function (selection_items__$1,selections,selectors,vec__20649,type,map__20650,map__20650__$1,attrs,field,id,selection_items,map__20651,map__20651__$1,opts,get){
return (function (){
if(cljs.core.truth_(get.call(null,id))){
} else {
cljs.core.swap_BANG_.call(null,selections,((function (selection_items__$1,selections,selectors,vec__20649,type,map__20650,map__20650__$1,attrs,field,id,selection_items,map__20651,map__20651__$1,opts,get){
return (function (p1__20638_SHARP_){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (selection_items__$1,selections,selectors,vec__20649,type,map__20650,map__20650__$1,attrs,field,id,selection_items,map__20651,map__20651__$1,opts,get){
return (function (p__20654){
var vec__20655 = p__20654;
var k = cljs.core.nth.call(null,vec__20655,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,false], null);
});})(selection_items__$1,selections,selectors,vec__20649,type,map__20650,map__20650__$1,attrs,field,id,selection_items,map__20651,map__20651__$1,opts,get))
,p1__20638_SHARP_));
});})(selection_items__$1,selections,selectors,vec__20649,type,map__20650,map__20650__$1,attrs,field,id,selection_items,map__20651,map__20651__$1,opts,get))
);
}

return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs], null),cljs.core.map.call(null,new cljs.core.Keyword(null,"selector","selector",762528866),cljs.core.filter.call(null,((function (selection_items__$1,selections,selectors,vec__20649,type,map__20650,map__20650__$1,attrs,field,id,selection_items,map__20651,map__20651__$1,opts,get){
return (function (p1__20639_SHARP_){
var temp__4655__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(p1__20639_SHARP_);
if(cljs.core.truth_(temp__4655__auto__)){
var visible_QMARK_ = temp__4655__auto__;
return visible_QMARK_.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(opts)));
} else {
return true;
}
});})(selection_items__$1,selections,selectors,vec__20649,type,map__20650,map__20650__$1,attrs,field,id,selection_items,map__20651,map__20651__$1,opts,get))
,selectors)));
});
;})(selection_items__$1,selections,selectors,vec__20649,type,map__20650,map__20650__$1,attrs,field,id,selection_items,map__20651,map__20651__$1,opts,get))
});
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"single-select","single-select",1327691774),(function (p__20656,p__20657){
var vec__20658 = p__20656;
var _ = cljs.core.nth.call(null,vec__20658,(0),null);
var attrs = cljs.core.nth.call(null,vec__20658,(1),null);
var field = vec__20658;
var map__20659 = p__20657;
var map__20659__$1 = ((((!((map__20659 == null)))?((((map__20659.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20659.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20659):map__20659);
var opts = map__20659__$1;
var doc = cljs.core.get.call(null,map__20659__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return ((function (vec__20658,_,attrs,field,map__20659,map__20659__$1,opts,doc){
return (function (){
var temp__4655__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4655__auto__)){
var visible__20483__auto__ = temp__4655__auto__;
if(cljs.core.truth_(visible__20483__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,opts], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,opts], null);
}
});
;})(vec__20658,_,attrs,field,map__20659,map__20659__$1,opts,doc))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),(function (p__20661,p__20662){
var vec__20663 = p__20661;
var _ = cljs.core.nth.call(null,vec__20663,(0),null);
var attrs = cljs.core.nth.call(null,vec__20663,(1),null);
var field = vec__20663;
var map__20664 = p__20662;
var map__20664__$1 = ((((!((map__20664 == null)))?((((map__20664.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20664.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20664):map__20664);
var opts = map__20664__$1;
var doc = cljs.core.get.call(null,map__20664__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return ((function (vec__20663,_,attrs,field,map__20664,map__20664__$1,opts,doc){
return (function (){
var temp__4655__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4655__auto__)){
var visible__20483__auto__ = temp__4655__auto__;
if(cljs.core.truth_(visible__20483__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),true)], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),true)], null);
}
});
;})(vec__20663,_,attrs,field,map__20664,map__20664__$1,opts,doc))
}));
reagent_forms.core.map_options = (function reagent_forms$core$map_options(options){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__19233__auto__ = (function reagent_forms$core$map_options_$_iter__20682(s__20683){
return (new cljs.core.LazySeq(null,(function (){
var s__20683__$1 = s__20683;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__20683__$1);
if(temp__4657__auto__){
var s__20683__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20683__$2)){
var c__19231__auto__ = cljs.core.chunk_first.call(null,s__20683__$2);
var size__19232__auto__ = cljs.core.count.call(null,c__19231__auto__);
var b__20685 = cljs.core.chunk_buffer.call(null,size__19232__auto__);
if((function (){var i__20684 = (0);
while(true){
if((i__20684 < size__19232__auto__)){
var vec__20692 = cljs.core._nth.call(null,c__19231__auto__,i__20684);
var _ = cljs.core.nth.call(null,vec__20692,(0),null);
var map__20693 = cljs.core.nth.call(null,vec__20692,(1),null);
var map__20693__$1 = ((((!((map__20693 == null)))?((((map__20693.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20693.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20693):map__20693);
var key = cljs.core.get.call(null,map__20693__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.nth.call(null,vec__20692,(2),null);
cljs.core.chunk_append.call(null,b__20685,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(label)].join(''),key], null));

var G__20698 = (i__20684 + (1));
i__20684 = G__20698;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20685),reagent_forms$core$map_options_$_iter__20682.call(null,cljs.core.chunk_rest.call(null,s__20683__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20685),null);
}
} else {
var vec__20695 = cljs.core.first.call(null,s__20683__$2);
var _ = cljs.core.nth.call(null,vec__20695,(0),null);
var map__20696 = cljs.core.nth.call(null,vec__20695,(1),null);
var map__20696__$1 = ((((!((map__20696 == null)))?((((map__20696.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20696.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20696):map__20696);
var key = cljs.core.get.call(null,map__20696__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.nth.call(null,vec__20695,(2),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(label)].join(''),key], null),reagent_forms$core$map_options_$_iter__20682.call(null,cljs.core.rest.call(null,s__20683__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19233__auto__.call(null,options);
})());
});
reagent_forms.core.default_selection = (function reagent_forms$core$default_selection(options,v){
return cljs.core.last.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__20699_SHARP_){
return cljs.core._EQ_.call(null,v,cljs.core.get_in.call(null,p1__20699_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"key","key",-1516042587)], null)));
}),options)));
});
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"list","list",765357683),(function (p__20702,p__20703){
var vec__20704 = p__20702;
var type = cljs.core.nth.call(null,vec__20704,(0),null);
var map__20705 = cljs.core.nth.call(null,vec__20704,(1),null);
var map__20705__$1 = ((((!((map__20705 == null)))?((((map__20705.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20705.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20705):map__20705);
var attrs = map__20705__$1;
var field = cljs.core.get.call(null,map__20705__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var id = cljs.core.get.call(null,map__20705__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var options = cljs.core.nthnext.call(null,vec__20704,(2));
var map__20706 = p__20703;
var map__20706__$1 = ((((!((map__20706 == null)))?((((map__20706.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20706.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20706):map__20706);
var doc = cljs.core.get.call(null,map__20706__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.call(null,map__20706__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.call(null,map__20706__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var options__$1 = reagent_forms.core.extract_selectors.call(null,options);
var options_lookup = reagent_forms.core.map_options.call(null,options__$1);
var selection = reagent.core.atom.call(null,(function (){var or__18453__auto__ = get.call(null,id);
if(cljs.core.truth_(or__18453__auto__)){
return or__18453__auto__;
} else {
return cljs.core.get_in.call(null,cljs.core.first.call(null,options__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"key","key",-1516042587)], null));
}
})());
save_BANG_.call(null,id,cljs.core.deref.call(null,selection));

return ((function (options__$1,options_lookup,selection,vec__20704,type,map__20705,map__20705__$1,attrs,field,id,options,map__20706,map__20706__$1,doc,get,save_BANG_){
return (function (){
var temp__4655__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4655__auto__)){
var visible__20483__auto__ = temp__4655__auto__;
if(cljs.core.truth_(visible__20483__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,attrs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default-value","default-value",232220170),reagent_forms.core.default_selection.call(null,options__$1,cljs.core.deref.call(null,selection)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (visible__20483__auto__,temp__4655__auto__,options__$1,options_lookup,selection,vec__20704,type,map__20705,map__20705__$1,attrs,field,id,options,map__20706,map__20706__$1,doc,get,save_BANG_){
return (function (p1__20700_SHARP_){
return save_BANG_.call(null,id,cljs.core.get.call(null,options_lookup,reagent_forms.core.value_of.call(null,p1__20700_SHARP_)));
});})(visible__20483__auto__,temp__4655__auto__,options__$1,options_lookup,selection,vec__20704,type,map__20705,map__20705__$1,attrs,field,id,options,map__20706,map__20706__$1,doc,get,save_BANG_))
], null)),cljs.core.doall.call(null,cljs.core.filter.call(null,((function (visible__20483__auto__,temp__4655__auto__,options__$1,options_lookup,selection,vec__20704,type,map__20705,map__20705__$1,attrs,field,id,options,map__20706,map__20706__$1,doc,get,save_BANG_){
return (function (p1__20701_SHARP_){
var temp__4655__auto____$1 = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__20701_SHARP_));
if(cljs.core.truth_(temp__4655__auto____$1)){
var visible_QMARK_ = temp__4655__auto____$1;
return visible_QMARK_.call(null,cljs.core.deref.call(null,doc));
} else {
return true;
}
});})(visible__20483__auto__,temp__4655__auto__,options__$1,options_lookup,selection,vec__20704,type,map__20705,map__20705__$1,attrs,field,id,options,map__20706,map__20706__$1,doc,get,save_BANG_))
,options__$1))], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,attrs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default-value","default-value",232220170),reagent_forms.core.default_selection.call(null,options__$1,cljs.core.deref.call(null,selection)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (temp__4655__auto__,options__$1,options_lookup,selection,vec__20704,type,map__20705,map__20705__$1,attrs,field,id,options,map__20706,map__20706__$1,doc,get,save_BANG_){
return (function (p1__20700_SHARP_){
return save_BANG_.call(null,id,cljs.core.get.call(null,options_lookup,reagent_forms.core.value_of.call(null,p1__20700_SHARP_)));
});})(temp__4655__auto__,options__$1,options_lookup,selection,vec__20704,type,map__20705,map__20705__$1,attrs,field,id,options,map__20706,map__20706__$1,doc,get,save_BANG_))
], null)),cljs.core.doall.call(null,cljs.core.filter.call(null,((function (temp__4655__auto__,options__$1,options_lookup,selection,vec__20704,type,map__20705,map__20705__$1,attrs,field,id,options,map__20706,map__20706__$1,doc,get,save_BANG_){
return (function (p1__20701_SHARP_){
var temp__4655__auto____$1 = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__20701_SHARP_));
if(cljs.core.truth_(temp__4655__auto____$1)){
var visible_QMARK_ = temp__4655__auto____$1;
return visible_QMARK_.call(null,cljs.core.deref.call(null,doc));
} else {
return true;
}
});})(temp__4655__auto__,options__$1,options_lookup,selection,vec__20704,type,map__20705,map__20705__$1,attrs,field,id,options,map__20706,map__20706__$1,doc,get,save_BANG_))
,options__$1))], null);
}
});
;})(options__$1,options_lookup,selection,vec__20704,type,map__20705,map__20705__$1,attrs,field,id,options,map__20706,map__20706__$1,doc,get,save_BANG_))
}));
reagent_forms.core.field_QMARK_ = (function reagent_forms$core$field_QMARK_(node){
return (cljs.core.coll_QMARK_.call(null,node)) && (cljs.core.map_QMARK_.call(null,cljs.core.second.call(null,node))) && (cljs.core.contains_QMARK_.call(null,cljs.core.second.call(null,node),new cljs.core.Keyword(null,"field","field",-1302436500)));
});
/**
 * creates data bindings between the form fields and the supplied atom
 * form - the form template with the fields
 * doc - the document that the fields will be bound to
 * events - any events that should be triggered when the document state changes
 */
reagent_forms.core.bind_fields = (function reagent_forms$core$bind_fields(var_args){
var args__19530__auto__ = [];
var len__19523__auto___20713 = arguments.length;
var i__19524__auto___20714 = (0);
while(true){
if((i__19524__auto___20714 < len__19523__auto___20713)){
args__19530__auto__.push((arguments[i__19524__auto___20714]));

var G__20715 = (i__19524__auto___20714 + (1));
i__19524__auto___20714 = G__20715;
continue;
} else {
}
break;
}

var argseq__19531__auto__ = ((((2) < args__19530__auto__.length))?(new cljs.core.IndexedSeq(args__19530__auto__.slice((2)),(0),null)):null);
return reagent_forms.core.bind_fields.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19531__auto__);
});

reagent_forms.core.bind_fields.cljs$core$IFn$_invoke$arity$variadic = (function (form,doc,events){
var opts = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"doc","doc",1913296891),doc,new cljs.core.Keyword(null,"get","get",1683182755),(function (p1__20709_SHARP_){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,doc),reagent_forms.core.id__GT_path.call(null,p1__20709_SHARP_));
}),new cljs.core.Keyword(null,"save!","save!",-1137373803),reagent_forms.core.mk_save_fn.call(null,doc,events)], null);
var form__$1 = clojure.walk.postwalk.call(null,((function (opts){
return (function (node){
if(cljs.core.truth_(reagent_forms.core.field_QMARK_.call(null,node))){
var opts__$1 = reagent_forms.core.wrap_fns.call(null,opts,node);
var field = reagent_forms.core.init_field.call(null,node,opts__$1);
if(cljs.core.fn_QMARK_.call(null,field)){
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

reagent_forms.core.bind_fields.cljs$lang$applyTo = (function (seq20710){
var G__20711 = cljs.core.first.call(null,seq20710);
var seq20710__$1 = cljs.core.next.call(null,seq20710);
var G__20712 = cljs.core.first.call(null,seq20710__$1);
var seq20710__$2 = cljs.core.next.call(null,seq20710__$1);
return reagent_forms.core.bind_fields.cljs$core$IFn$_invoke$arity$variadic(G__20711,G__20712,seq20710__$2);
});

//# sourceMappingURL=core.js.map