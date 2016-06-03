// Compiled by ClojureScript 1.8.51 {}
goog.provide('reagent.impl.util');
goog.require('cljs.core');
goog.require('reagent.debug');
goog.require('reagent.interop');
goog.require('clojure.string');
reagent.impl.util.is_client = (typeof window !== 'undefined') && (!(((window["document"]) == null)));
reagent.impl.util.extract_props = (function reagent$impl$util$extract_props(v){
var p = cljs.core.nth.call(null,v,(1),null);
if(cljs.core.map_QMARK_.call(null,p)){
return p;
} else {
return null;
}
});
reagent.impl.util.extract_children = (function reagent$impl$util$extract_children(v){
var p = cljs.core.nth.call(null,v,(1),null);
var first_child = ((((p == null)) || (cljs.core.map_QMARK_.call(null,p)))?(2):(1));
if((cljs.core.count.call(null,v) > first_child)){
return cljs.core.subvec.call(null,v,first_child);
} else {
return null;
}
});
reagent.impl.util.get_argv = (function reagent$impl$util$get_argv(c){
return (c["props"]["argv"]);
});
reagent.impl.util.get_props = (function reagent$impl$util$get_props(c){
return reagent.impl.util.extract_props.call(null,(c["props"]["argv"]));
});
reagent.impl.util.get_children = (function reagent$impl$util$get_children(c){
return reagent.impl.util.extract_children.call(null,(c["props"]["argv"]));
});
reagent.impl.util.reagent_component_QMARK_ = (function reagent$impl$util$reagent_component_QMARK_(c){
return !(((c["props"]["argv"]) == null));
});
reagent.impl.util.cached_react_class = (function reagent$impl$util$cached_react_class(c){
return (c["cljsReactClass"]);
});
reagent.impl.util.cache_react_class = (function reagent$impl$util$cache_react_class(c,constructor$){
return (c["cljsReactClass"] = constructor$);
});
reagent.impl.util.memoize_1 = (function reagent$impl$util$memoize_1(f){
var mem = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (mem){
return (function (arg){
var v = cljs.core.get.call(null,cljs.core.deref.call(null,mem),arg);
if(!((v == null))){
return v;
} else {
var ret = f.call(null,arg);
cljs.core.swap_BANG_.call(null,mem,cljs.core.assoc,arg,ret);

return ret;
}
});
;})(mem))
});
reagent.impl.util.dont_camel_case = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["aria",null,"data",null], null), null);
reagent.impl.util.capitalize = (function reagent$impl$util$capitalize(s){
if((cljs.core.count.call(null,s) < (2))){
return clojure.string.upper_case.call(null,s);
} else {
return [cljs.core.str(clojure.string.upper_case.call(null,cljs.core.subs.call(null,s,(0),(1)))),cljs.core.str(cljs.core.subs.call(null,s,(1)))].join('');
}
});
reagent.impl.util.dash_to_camel = (function reagent$impl$util$dash_to_camel(dashed){
if(typeof dashed === 'string'){
return dashed;
} else {
var name_str = cljs.core.name.call(null,dashed);
var vec__19704 = clojure.string.split.call(null,name_str,/-/);
var start = cljs.core.nth.call(null,vec__19704,(0),null);
var parts = cljs.core.nthnext.call(null,vec__19704,(1));
if(cljs.core.truth_(reagent.impl.util.dont_camel_case.call(null,start))){
return name_str;
} else {
return cljs.core.apply.call(null,cljs.core.str,start,cljs.core.map.call(null,reagent.impl.util.capitalize,parts));
}
}
});

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
*/
reagent.impl.util.partial_ifn = (function (f,args,p){
this.f = f;
this.args = args;
this.p = p;
this.cljs$lang$protocol_mask$partition0$ = 6291457;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
reagent.impl.util.partial_ifn.prototype.call = (function() { 
var G__19706__delegate = function (self__,a){
var self____$1 = this;
var _ = self____$1;
var or__18453__auto___19707 = self__.p;
if(cljs.core.truth_(or__18453__auto___19707)){
} else {
self__.p = cljs.core.apply.call(null,cljs.core.partial,self__.f,self__.args);
}

return cljs.core.apply.call(null,self__.p,a);
};
var G__19706 = function (self__,var_args){
var self__ = this;
var a = null;
if (arguments.length > 1) {
var G__19708__i = 0, G__19708__a = new Array(arguments.length -  1);
while (G__19708__i < G__19708__a.length) {G__19708__a[G__19708__i] = arguments[G__19708__i + 1]; ++G__19708__i;}
  a = new cljs.core.IndexedSeq(G__19708__a,0);
} 
return G__19706__delegate.call(this,self__,a);};
G__19706.cljs$lang$maxFixedArity = 1;
G__19706.cljs$lang$applyTo = (function (arglist__19709){
var self__ = cljs.core.first(arglist__19709);
var a = cljs.core.rest(arglist__19709);
return G__19706__delegate(self__,a);
});
G__19706.cljs$core$IFn$_invoke$arity$variadic = G__19706__delegate;
return G__19706;
})()
;

reagent.impl.util.partial_ifn.prototype.apply = (function (self__,args19705){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args19705)));
});

reagent.impl.util.partial_ifn.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__19710__delegate = function (a){
var _ = this;
var or__18453__auto___19711 = self__.p;
if(cljs.core.truth_(or__18453__auto___19711)){
} else {
self__.p = cljs.core.apply.call(null,cljs.core.partial,self__.f,self__.args);
}

return cljs.core.apply.call(null,self__.p,a);
};
var G__19710 = function (var_args){
var self__ = this;
var a = null;
if (arguments.length > 0) {
var G__19712__i = 0, G__19712__a = new Array(arguments.length -  0);
while (G__19712__i < G__19712__a.length) {G__19712__a[G__19712__i] = arguments[G__19712__i + 0]; ++G__19712__i;}
  a = new cljs.core.IndexedSeq(G__19712__a,0);
} 
return G__19710__delegate.call(this,a);};
G__19710.cljs$lang$maxFixedArity = 0;
G__19710.cljs$lang$applyTo = (function (arglist__19713){
var a = cljs.core.seq(arglist__19713);
return G__19710__delegate(a);
});
G__19710.cljs$core$IFn$_invoke$arity$variadic = G__19710__delegate;
return G__19710;
})()
;

reagent.impl.util.partial_ifn.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return (cljs.core._EQ_.call(null,self__.f,other.f)) && (cljs.core._EQ_.call(null,self__.args,other.args));
});

reagent.impl.util.partial_ifn.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.f,self__.args], null));
});

reagent.impl.util.partial_ifn.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),cljs.core.with_meta(new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

reagent.impl.util.partial_ifn.cljs$lang$type = true;

reagent.impl.util.partial_ifn.cljs$lang$ctorStr = "reagent.impl.util/partial-ifn";

reagent.impl.util.partial_ifn.cljs$lang$ctorPrWriter = (function (this__19059__auto__,writer__19060__auto__,opt__19061__auto__){
return cljs.core._write.call(null,writer__19060__auto__,"reagent.impl.util/partial-ifn");
});

reagent.impl.util.__GT_partial_ifn = (function reagent$impl$util$__GT_partial_ifn(f,args,p){
return (new reagent.impl.util.partial_ifn(f,args,p));
});

reagent.impl.util.merge_class = (function reagent$impl$util$merge_class(p1,p2){
var class$ = (function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1);
if(cljs.core.truth_(temp__4657__auto__)){
var c1 = temp__4657__auto__;
var temp__4657__auto____$1 = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p2);
if(cljs.core.truth_(temp__4657__auto____$1)){
var c2 = temp__4657__auto____$1;
return [cljs.core.str(c1),cljs.core.str(" "),cljs.core.str(c2)].join('');
} else {
return null;
}
} else {
return null;
}
})();
if((class$ == null)){
return p2;
} else {
return cljs.core.assoc.call(null,p2,new cljs.core.Keyword(null,"class","class",-2030961996),class$);
}
});
reagent.impl.util.merge_style = (function reagent$impl$util$merge_style(p1,p2){
var style = (function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(p1);
if(cljs.core.truth_(temp__4657__auto__)){
var s1 = temp__4657__auto__;
var temp__4657__auto____$1 = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(p2);
if(cljs.core.truth_(temp__4657__auto____$1)){
var s2 = temp__4657__auto____$1;
return cljs.core.merge.call(null,s1,s2);
} else {
return null;
}
} else {
return null;
}
})();
if((style == null)){
return p2;
} else {
return cljs.core.assoc.call(null,p2,new cljs.core.Keyword(null,"style","style",-496642736),style);
}
});
reagent.impl.util.merge_props = (function reagent$impl$util$merge_props(p1,p2){
if((p1 == null)){
return p2;
} else {
if(cljs.core.map_QMARK_.call(null,p1)){
} else {
throw (new Error("Assert failed: (map? p1)"));
}

return reagent.impl.util.merge_style.call(null,p1,reagent.impl.util.merge_class.call(null,p1,cljs.core.merge.call(null,p1,p2)));
}
});
reagent.impl.util._STAR_always_update_STAR_ = false;
if(typeof reagent.impl.util.roots !== 'undefined'){
} else {
reagent.impl.util.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.impl.util.clear_container = (function reagent$impl$util$clear_container(node){
var G__19715 = node;
if((G__19715 == null)){
return null;
} else {
return (G__19715["innerHTML"] = "");
}
});
reagent.impl.util.render_component = (function reagent$impl$util$render_component(comp,container,callback){
var rendered = cljs.core.volatile_BANG_.call(null,null);
try{var _STAR_always_update_STAR_19718 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return cljs.core.vreset_BANG_.call(null,rendered,(React["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_19718,rendered){
return (function (){
var _STAR_always_update_STAR_19719 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.impl.util.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_19719;
}});})(_STAR_always_update_STAR_19718,rendered))
));
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_19718;
}}finally {if(cljs.core.truth_(cljs.core.deref.call(null,rendered))){
} else {
reagent.impl.util.clear_container.call(null,container);
}
}});
reagent.impl.util.re_render_component = (function reagent$impl$util$re_render_component(comp,container){
return reagent.impl.util.render_component.call(null,comp,container,null);
});
reagent.impl.util.unmount_component_at_node = (function reagent$impl$util$unmount_component_at_node(container){
cljs.core.swap_BANG_.call(null,reagent.impl.util.roots,cljs.core.dissoc,container);

return (React["unmountComponentAtNode"])(container);
});
reagent.impl.util.force_update_all = (function reagent$impl$util$force_update_all(){
var seq__19724_19728 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.impl.util.roots)));
var chunk__19725_19729 = null;
var count__19726_19730 = (0);
var i__19727_19731 = (0);
while(true){
if((i__19727_19731 < count__19726_19730)){
var v_19732 = cljs.core._nth.call(null,chunk__19725_19729,i__19727_19731);
cljs.core.apply.call(null,reagent.impl.util.re_render_component,v_19732);

var G__19733 = seq__19724_19728;
var G__19734 = chunk__19725_19729;
var G__19735 = count__19726_19730;
var G__19736 = (i__19727_19731 + (1));
seq__19724_19728 = G__19733;
chunk__19725_19729 = G__19734;
count__19726_19730 = G__19735;
i__19727_19731 = G__19736;
continue;
} else {
var temp__4657__auto___19737 = cljs.core.seq.call(null,seq__19724_19728);
if(temp__4657__auto___19737){
var seq__19724_19738__$1 = temp__4657__auto___19737;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19724_19738__$1)){
var c__19264__auto___19739 = cljs.core.chunk_first.call(null,seq__19724_19738__$1);
var G__19740 = cljs.core.chunk_rest.call(null,seq__19724_19738__$1);
var G__19741 = c__19264__auto___19739;
var G__19742 = cljs.core.count.call(null,c__19264__auto___19739);
var G__19743 = (0);
seq__19724_19728 = G__19740;
chunk__19725_19729 = G__19741;
count__19726_19730 = G__19742;
i__19727_19731 = G__19743;
continue;
} else {
var v_19744 = cljs.core.first.call(null,seq__19724_19738__$1);
cljs.core.apply.call(null,reagent.impl.util.re_render_component,v_19744);

var G__19745 = cljs.core.next.call(null,seq__19724_19738__$1);
var G__19746 = null;
var G__19747 = (0);
var G__19748 = (0);
seq__19724_19728 = G__19745;
chunk__19725_19729 = G__19746;
count__19726_19730 = G__19747;
i__19727_19731 = G__19748;
continue;
}
} else {
}
}
break;
}

return "Updated";
});
reagent.impl.util.force_update = (function reagent$impl$util$force_update(comp,deep){
if(cljs.core.truth_(deep)){
var _STAR_always_update_STAR_19750 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (comp["forceUpdate"])();
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_19750;
}} else {
return (comp["forceUpdate"])();
}
});

//# sourceMappingURL=util.js.map