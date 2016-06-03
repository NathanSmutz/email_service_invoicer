// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__18453__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18453__auto__){
return or__18453__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__18453__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__18453__auto__)){
return or__18453__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__24604_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__24604_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__24609 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__24610 = null;
var count__24611 = (0);
var i__24612 = (0);
while(true){
if((i__24612 < count__24611)){
var n = cljs.core._nth.call(null,chunk__24610,i__24612);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__24613 = seq__24609;
var G__24614 = chunk__24610;
var G__24615 = count__24611;
var G__24616 = (i__24612 + (1));
seq__24609 = G__24613;
chunk__24610 = G__24614;
count__24611 = G__24615;
i__24612 = G__24616;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__24609);
if(temp__4657__auto__){
var seq__24609__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24609__$1)){
var c__19264__auto__ = cljs.core.chunk_first.call(null,seq__24609__$1);
var G__24617 = cljs.core.chunk_rest.call(null,seq__24609__$1);
var G__24618 = c__19264__auto__;
var G__24619 = cljs.core.count.call(null,c__19264__auto__);
var G__24620 = (0);
seq__24609 = G__24617;
chunk__24610 = G__24618;
count__24611 = G__24619;
i__24612 = G__24620;
continue;
} else {
var n = cljs.core.first.call(null,seq__24609__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__24621 = cljs.core.next.call(null,seq__24609__$1);
var G__24622 = null;
var G__24623 = (0);
var G__24624 = (0);
seq__24609 = G__24621;
chunk__24610 = G__24622;
count__24611 = G__24623;
i__24612 = G__24624;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__24663_24670 = cljs.core.seq.call(null,deps);
var chunk__24664_24671 = null;
var count__24665_24672 = (0);
var i__24666_24673 = (0);
while(true){
if((i__24666_24673 < count__24665_24672)){
var dep_24674 = cljs.core._nth.call(null,chunk__24664_24671,i__24666_24673);
topo_sort_helper_STAR_.call(null,dep_24674,(depth + (1)),state);

var G__24675 = seq__24663_24670;
var G__24676 = chunk__24664_24671;
var G__24677 = count__24665_24672;
var G__24678 = (i__24666_24673 + (1));
seq__24663_24670 = G__24675;
chunk__24664_24671 = G__24676;
count__24665_24672 = G__24677;
i__24666_24673 = G__24678;
continue;
} else {
var temp__4657__auto___24679 = cljs.core.seq.call(null,seq__24663_24670);
if(temp__4657__auto___24679){
var seq__24663_24680__$1 = temp__4657__auto___24679;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24663_24680__$1)){
var c__19264__auto___24681 = cljs.core.chunk_first.call(null,seq__24663_24680__$1);
var G__24682 = cljs.core.chunk_rest.call(null,seq__24663_24680__$1);
var G__24683 = c__19264__auto___24681;
var G__24684 = cljs.core.count.call(null,c__19264__auto___24681);
var G__24685 = (0);
seq__24663_24670 = G__24682;
chunk__24664_24671 = G__24683;
count__24665_24672 = G__24684;
i__24666_24673 = G__24685;
continue;
} else {
var dep_24686 = cljs.core.first.call(null,seq__24663_24680__$1);
topo_sort_helper_STAR_.call(null,dep_24686,(depth + (1)),state);

var G__24687 = cljs.core.next.call(null,seq__24663_24680__$1);
var G__24688 = null;
var G__24689 = (0);
var G__24690 = (0);
seq__24663_24670 = G__24687;
chunk__24664_24671 = G__24688;
count__24665_24672 = G__24689;
i__24666_24673 = G__24690;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__24667){
var vec__24669 = p__24667;
var x = cljs.core.nth.call(null,vec__24669,(0),null);
var xs = cljs.core.nthnext.call(null,vec__24669,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__24669,x,xs,get_deps__$1){
return (function (p1__24625_SHARP_){
return clojure.set.difference.call(null,p1__24625_SHARP_,x);
});})(vec__24669,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__24703 = cljs.core.seq.call(null,provides);
var chunk__24704 = null;
var count__24705 = (0);
var i__24706 = (0);
while(true){
if((i__24706 < count__24705)){
var prov = cljs.core._nth.call(null,chunk__24704,i__24706);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__24707_24715 = cljs.core.seq.call(null,requires);
var chunk__24708_24716 = null;
var count__24709_24717 = (0);
var i__24710_24718 = (0);
while(true){
if((i__24710_24718 < count__24709_24717)){
var req_24719 = cljs.core._nth.call(null,chunk__24708_24716,i__24710_24718);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24719,prov);

var G__24720 = seq__24707_24715;
var G__24721 = chunk__24708_24716;
var G__24722 = count__24709_24717;
var G__24723 = (i__24710_24718 + (1));
seq__24707_24715 = G__24720;
chunk__24708_24716 = G__24721;
count__24709_24717 = G__24722;
i__24710_24718 = G__24723;
continue;
} else {
var temp__4657__auto___24724 = cljs.core.seq.call(null,seq__24707_24715);
if(temp__4657__auto___24724){
var seq__24707_24725__$1 = temp__4657__auto___24724;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24707_24725__$1)){
var c__19264__auto___24726 = cljs.core.chunk_first.call(null,seq__24707_24725__$1);
var G__24727 = cljs.core.chunk_rest.call(null,seq__24707_24725__$1);
var G__24728 = c__19264__auto___24726;
var G__24729 = cljs.core.count.call(null,c__19264__auto___24726);
var G__24730 = (0);
seq__24707_24715 = G__24727;
chunk__24708_24716 = G__24728;
count__24709_24717 = G__24729;
i__24710_24718 = G__24730;
continue;
} else {
var req_24731 = cljs.core.first.call(null,seq__24707_24725__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24731,prov);

var G__24732 = cljs.core.next.call(null,seq__24707_24725__$1);
var G__24733 = null;
var G__24734 = (0);
var G__24735 = (0);
seq__24707_24715 = G__24732;
chunk__24708_24716 = G__24733;
count__24709_24717 = G__24734;
i__24710_24718 = G__24735;
continue;
}
} else {
}
}
break;
}

var G__24736 = seq__24703;
var G__24737 = chunk__24704;
var G__24738 = count__24705;
var G__24739 = (i__24706 + (1));
seq__24703 = G__24736;
chunk__24704 = G__24737;
count__24705 = G__24738;
i__24706 = G__24739;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__24703);
if(temp__4657__auto__){
var seq__24703__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24703__$1)){
var c__19264__auto__ = cljs.core.chunk_first.call(null,seq__24703__$1);
var G__24740 = cljs.core.chunk_rest.call(null,seq__24703__$1);
var G__24741 = c__19264__auto__;
var G__24742 = cljs.core.count.call(null,c__19264__auto__);
var G__24743 = (0);
seq__24703 = G__24740;
chunk__24704 = G__24741;
count__24705 = G__24742;
i__24706 = G__24743;
continue;
} else {
var prov = cljs.core.first.call(null,seq__24703__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__24711_24744 = cljs.core.seq.call(null,requires);
var chunk__24712_24745 = null;
var count__24713_24746 = (0);
var i__24714_24747 = (0);
while(true){
if((i__24714_24747 < count__24713_24746)){
var req_24748 = cljs.core._nth.call(null,chunk__24712_24745,i__24714_24747);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24748,prov);

var G__24749 = seq__24711_24744;
var G__24750 = chunk__24712_24745;
var G__24751 = count__24713_24746;
var G__24752 = (i__24714_24747 + (1));
seq__24711_24744 = G__24749;
chunk__24712_24745 = G__24750;
count__24713_24746 = G__24751;
i__24714_24747 = G__24752;
continue;
} else {
var temp__4657__auto___24753__$1 = cljs.core.seq.call(null,seq__24711_24744);
if(temp__4657__auto___24753__$1){
var seq__24711_24754__$1 = temp__4657__auto___24753__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24711_24754__$1)){
var c__19264__auto___24755 = cljs.core.chunk_first.call(null,seq__24711_24754__$1);
var G__24756 = cljs.core.chunk_rest.call(null,seq__24711_24754__$1);
var G__24757 = c__19264__auto___24755;
var G__24758 = cljs.core.count.call(null,c__19264__auto___24755);
var G__24759 = (0);
seq__24711_24744 = G__24756;
chunk__24712_24745 = G__24757;
count__24713_24746 = G__24758;
i__24714_24747 = G__24759;
continue;
} else {
var req_24760 = cljs.core.first.call(null,seq__24711_24754__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24760,prov);

var G__24761 = cljs.core.next.call(null,seq__24711_24754__$1);
var G__24762 = null;
var G__24763 = (0);
var G__24764 = (0);
seq__24711_24744 = G__24761;
chunk__24712_24745 = G__24762;
count__24713_24746 = G__24763;
i__24714_24747 = G__24764;
continue;
}
} else {
}
}
break;
}

var G__24765 = cljs.core.next.call(null,seq__24703__$1);
var G__24766 = null;
var G__24767 = (0);
var G__24768 = (0);
seq__24703 = G__24765;
chunk__24704 = G__24766;
count__24705 = G__24767;
i__24706 = G__24768;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__24773_24777 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__24774_24778 = null;
var count__24775_24779 = (0);
var i__24776_24780 = (0);
while(true){
if((i__24776_24780 < count__24775_24779)){
var ns_24781 = cljs.core._nth.call(null,chunk__24774_24778,i__24776_24780);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_24781);

var G__24782 = seq__24773_24777;
var G__24783 = chunk__24774_24778;
var G__24784 = count__24775_24779;
var G__24785 = (i__24776_24780 + (1));
seq__24773_24777 = G__24782;
chunk__24774_24778 = G__24783;
count__24775_24779 = G__24784;
i__24776_24780 = G__24785;
continue;
} else {
var temp__4657__auto___24786 = cljs.core.seq.call(null,seq__24773_24777);
if(temp__4657__auto___24786){
var seq__24773_24787__$1 = temp__4657__auto___24786;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24773_24787__$1)){
var c__19264__auto___24788 = cljs.core.chunk_first.call(null,seq__24773_24787__$1);
var G__24789 = cljs.core.chunk_rest.call(null,seq__24773_24787__$1);
var G__24790 = c__19264__auto___24788;
var G__24791 = cljs.core.count.call(null,c__19264__auto___24788);
var G__24792 = (0);
seq__24773_24777 = G__24789;
chunk__24774_24778 = G__24790;
count__24775_24779 = G__24791;
i__24776_24780 = G__24792;
continue;
} else {
var ns_24793 = cljs.core.first.call(null,seq__24773_24787__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_24793);

var G__24794 = cljs.core.next.call(null,seq__24773_24787__$1);
var G__24795 = null;
var G__24796 = (0);
var G__24797 = (0);
seq__24773_24777 = G__24794;
chunk__24774_24778 = G__24795;
count__24775_24779 = G__24796;
i__24776_24780 = G__24797;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__18453__auto__ = goog.require__;
if(cljs.core.truth_(or__18453__auto__)){
return or__18453__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__24798__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__24798 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24799__i = 0, G__24799__a = new Array(arguments.length -  0);
while (G__24799__i < G__24799__a.length) {G__24799__a[G__24799__i] = arguments[G__24799__i + 0]; ++G__24799__i;}
  args = new cljs.core.IndexedSeq(G__24799__a,0);
} 
return G__24798__delegate.call(this,args);};
G__24798.cljs$lang$maxFixedArity = 0;
G__24798.cljs$lang$applyTo = (function (arglist__24800){
var args = cljs.core.seq(arglist__24800);
return G__24798__delegate(args);
});
G__24798.cljs$core$IFn$_invoke$arity$variadic = G__24798__delegate;
return G__24798;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__24802 = cljs.core._EQ_;
var expr__24803 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__24802.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__24803))){
var path_parts = ((function (pred__24802,expr__24803){
return (function (p1__24801_SHARP_){
return clojure.string.split.call(null,p1__24801_SHARP_,/[\/\\]/);
});})(pred__24802,expr__24803))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__24802,expr__24803){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e24805){if((e24805 instanceof Error)){
var e = e24805;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e24805;

}
}})());
});
;})(path_parts,sep,root,pred__24802,expr__24803))
} else {
if(cljs.core.truth_(pred__24802.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__24803))){
return ((function (pred__24802,expr__24803){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__24802,expr__24803){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__24802,expr__24803))
);

return deferred.addErrback(((function (deferred,pred__24802,expr__24803){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__24802,expr__24803))
);
});
;})(pred__24802,expr__24803))
} else {
return ((function (pred__24802,expr__24803){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__24802,expr__24803))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__24806,callback){
var map__24809 = p__24806;
var map__24809__$1 = ((((!((map__24809 == null)))?((((map__24809.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24809.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24809):map__24809);
var file_msg = map__24809__$1;
var request_url = cljs.core.get.call(null,map__24809__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__24809,map__24809__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__24809,map__24809__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__21710__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21710__auto__){
return (function (){
var f__21711__auto__ = (function (){var switch__21598__auto__ = ((function (c__21710__auto__){
return (function (state_24833){
var state_val_24834 = (state_24833[(1)]);
if((state_val_24834 === (7))){
var inst_24829 = (state_24833[(2)]);
var state_24833__$1 = state_24833;
var statearr_24835_24855 = state_24833__$1;
(statearr_24835_24855[(2)] = inst_24829);

(statearr_24835_24855[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24834 === (1))){
var state_24833__$1 = state_24833;
var statearr_24836_24856 = state_24833__$1;
(statearr_24836_24856[(2)] = null);

(statearr_24836_24856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24834 === (4))){
var inst_24813 = (state_24833[(7)]);
var inst_24813__$1 = (state_24833[(2)]);
var state_24833__$1 = (function (){var statearr_24837 = state_24833;
(statearr_24837[(7)] = inst_24813__$1);

return statearr_24837;
})();
if(cljs.core.truth_(inst_24813__$1)){
var statearr_24838_24857 = state_24833__$1;
(statearr_24838_24857[(1)] = (5));

} else {
var statearr_24839_24858 = state_24833__$1;
(statearr_24839_24858[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24834 === (6))){
var state_24833__$1 = state_24833;
var statearr_24840_24859 = state_24833__$1;
(statearr_24840_24859[(2)] = null);

(statearr_24840_24859[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24834 === (3))){
var inst_24831 = (state_24833[(2)]);
var state_24833__$1 = state_24833;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24833__$1,inst_24831);
} else {
if((state_val_24834 === (2))){
var state_24833__$1 = state_24833;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24833__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_24834 === (11))){
var inst_24825 = (state_24833[(2)]);
var state_24833__$1 = (function (){var statearr_24841 = state_24833;
(statearr_24841[(8)] = inst_24825);

return statearr_24841;
})();
var statearr_24842_24860 = state_24833__$1;
(statearr_24842_24860[(2)] = null);

(statearr_24842_24860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24834 === (9))){
var inst_24819 = (state_24833[(9)]);
var inst_24817 = (state_24833[(10)]);
var inst_24821 = inst_24819.call(null,inst_24817);
var state_24833__$1 = state_24833;
var statearr_24843_24861 = state_24833__$1;
(statearr_24843_24861[(2)] = inst_24821);

(statearr_24843_24861[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24834 === (5))){
var inst_24813 = (state_24833[(7)]);
var inst_24815 = figwheel.client.file_reloading.blocking_load.call(null,inst_24813);
var state_24833__$1 = state_24833;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24833__$1,(8),inst_24815);
} else {
if((state_val_24834 === (10))){
var inst_24817 = (state_24833[(10)]);
var inst_24823 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_24817);
var state_24833__$1 = state_24833;
var statearr_24844_24862 = state_24833__$1;
(statearr_24844_24862[(2)] = inst_24823);

(statearr_24844_24862[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24834 === (8))){
var inst_24819 = (state_24833[(9)]);
var inst_24813 = (state_24833[(7)]);
var inst_24817 = (state_24833[(2)]);
var inst_24818 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_24819__$1 = cljs.core.get.call(null,inst_24818,inst_24813);
var state_24833__$1 = (function (){var statearr_24845 = state_24833;
(statearr_24845[(9)] = inst_24819__$1);

(statearr_24845[(10)] = inst_24817);

return statearr_24845;
})();
if(cljs.core.truth_(inst_24819__$1)){
var statearr_24846_24863 = state_24833__$1;
(statearr_24846_24863[(1)] = (9));

} else {
var statearr_24847_24864 = state_24833__$1;
(statearr_24847_24864[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__21710__auto__))
;
return ((function (switch__21598__auto__,c__21710__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__21599__auto__ = null;
var figwheel$client$file_reloading$state_machine__21599__auto____0 = (function (){
var statearr_24851 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24851[(0)] = figwheel$client$file_reloading$state_machine__21599__auto__);

(statearr_24851[(1)] = (1));

return statearr_24851;
});
var figwheel$client$file_reloading$state_machine__21599__auto____1 = (function (state_24833){
while(true){
var ret_value__21600__auto__ = (function (){try{while(true){
var result__21601__auto__ = switch__21598__auto__.call(null,state_24833);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21601__auto__;
}
break;
}
}catch (e24852){if((e24852 instanceof Object)){
var ex__21602__auto__ = e24852;
var statearr_24853_24865 = state_24833;
(statearr_24853_24865[(5)] = ex__21602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24833);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24852;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24866 = state_24833;
state_24833 = G__24866;
continue;
} else {
return ret_value__21600__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__21599__auto__ = function(state_24833){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__21599__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__21599__auto____1.call(this,state_24833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__21599__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__21599__auto____0;
figwheel$client$file_reloading$state_machine__21599__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__21599__auto____1;
return figwheel$client$file_reloading$state_machine__21599__auto__;
})()
;})(switch__21598__auto__,c__21710__auto__))
})();
var state__21712__auto__ = (function (){var statearr_24854 = f__21711__auto__.call(null);
(statearr_24854[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21710__auto__);

return statearr_24854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21712__auto__);
});})(c__21710__auto__))
);

return c__21710__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__24867,callback){
var map__24870 = p__24867;
var map__24870__$1 = ((((!((map__24870 == null)))?((((map__24870.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24870.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24870):map__24870);
var file_msg = map__24870__$1;
var namespace = cljs.core.get.call(null,map__24870__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__24870,map__24870__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__24870,map__24870__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__24872){
var map__24875 = p__24872;
var map__24875__$1 = ((((!((map__24875 == null)))?((((map__24875.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24875.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24875):map__24875);
var file_msg = map__24875__$1;
var namespace = cljs.core.get.call(null,map__24875__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__18441__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__18441__auto__){
var or__18453__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18453__auto__)){
return or__18453__auto__;
} else {
var or__18453__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18453__auto____$1)){
return or__18453__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__18441__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__24877,callback){
var map__24880 = p__24877;
var map__24880__$1 = ((((!((map__24880 == null)))?((((map__24880.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24880.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24880):map__24880);
var file_msg = map__24880__$1;
var request_url = cljs.core.get.call(null,map__24880__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__24880__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__21710__auto___24968 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21710__auto___24968,out){
return (function (){
var f__21711__auto__ = (function (){var switch__21598__auto__ = ((function (c__21710__auto___24968,out){
return (function (state_24950){
var state_val_24951 = (state_24950[(1)]);
if((state_val_24951 === (1))){
var inst_24928 = cljs.core.nth.call(null,files,(0),null);
var inst_24929 = cljs.core.nthnext.call(null,files,(1));
var inst_24930 = files;
var state_24950__$1 = (function (){var statearr_24952 = state_24950;
(statearr_24952[(7)] = inst_24930);

(statearr_24952[(8)] = inst_24929);

(statearr_24952[(9)] = inst_24928);

return statearr_24952;
})();
var statearr_24953_24969 = state_24950__$1;
(statearr_24953_24969[(2)] = null);

(statearr_24953_24969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24951 === (2))){
var inst_24930 = (state_24950[(7)]);
var inst_24933 = (state_24950[(10)]);
var inst_24933__$1 = cljs.core.nth.call(null,inst_24930,(0),null);
var inst_24934 = cljs.core.nthnext.call(null,inst_24930,(1));
var inst_24935 = (inst_24933__$1 == null);
var inst_24936 = cljs.core.not.call(null,inst_24935);
var state_24950__$1 = (function (){var statearr_24954 = state_24950;
(statearr_24954[(11)] = inst_24934);

(statearr_24954[(10)] = inst_24933__$1);

return statearr_24954;
})();
if(inst_24936){
var statearr_24955_24970 = state_24950__$1;
(statearr_24955_24970[(1)] = (4));

} else {
var statearr_24956_24971 = state_24950__$1;
(statearr_24956_24971[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24951 === (3))){
var inst_24948 = (state_24950[(2)]);
var state_24950__$1 = state_24950;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24950__$1,inst_24948);
} else {
if((state_val_24951 === (4))){
var inst_24933 = (state_24950[(10)]);
var inst_24938 = figwheel.client.file_reloading.reload_js_file.call(null,inst_24933);
var state_24950__$1 = state_24950;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24950__$1,(7),inst_24938);
} else {
if((state_val_24951 === (5))){
var inst_24944 = cljs.core.async.close_BANG_.call(null,out);
var state_24950__$1 = state_24950;
var statearr_24957_24972 = state_24950__$1;
(statearr_24957_24972[(2)] = inst_24944);

(statearr_24957_24972[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24951 === (6))){
var inst_24946 = (state_24950[(2)]);
var state_24950__$1 = state_24950;
var statearr_24958_24973 = state_24950__$1;
(statearr_24958_24973[(2)] = inst_24946);

(statearr_24958_24973[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24951 === (7))){
var inst_24934 = (state_24950[(11)]);
var inst_24940 = (state_24950[(2)]);
var inst_24941 = cljs.core.async.put_BANG_.call(null,out,inst_24940);
var inst_24930 = inst_24934;
var state_24950__$1 = (function (){var statearr_24959 = state_24950;
(statearr_24959[(7)] = inst_24930);

(statearr_24959[(12)] = inst_24941);

return statearr_24959;
})();
var statearr_24960_24974 = state_24950__$1;
(statearr_24960_24974[(2)] = null);

(statearr_24960_24974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__21710__auto___24968,out))
;
return ((function (switch__21598__auto__,c__21710__auto___24968,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21599__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21599__auto____0 = (function (){
var statearr_24964 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24964[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21599__auto__);

(statearr_24964[(1)] = (1));

return statearr_24964;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21599__auto____1 = (function (state_24950){
while(true){
var ret_value__21600__auto__ = (function (){try{while(true){
var result__21601__auto__ = switch__21598__auto__.call(null,state_24950);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21601__auto__;
}
break;
}
}catch (e24965){if((e24965 instanceof Object)){
var ex__21602__auto__ = e24965;
var statearr_24966_24975 = state_24950;
(statearr_24966_24975[(5)] = ex__21602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24950);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24965;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24976 = state_24950;
state_24950 = G__24976;
continue;
} else {
return ret_value__21600__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21599__auto__ = function(state_24950){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21599__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21599__auto____1.call(this,state_24950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21599__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21599__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21599__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21599__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21599__auto__;
})()
;})(switch__21598__auto__,c__21710__auto___24968,out))
})();
var state__21712__auto__ = (function (){var statearr_24967 = f__21711__auto__.call(null);
(statearr_24967[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21710__auto___24968);

return statearr_24967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21712__auto__);
});})(c__21710__auto___24968,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__24977,opts){
var map__24981 = p__24977;
var map__24981__$1 = ((((!((map__24981 == null)))?((((map__24981.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24981.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24981):map__24981);
var eval_body__$1 = cljs.core.get.call(null,map__24981__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__24981__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__18441__auto__ = eval_body__$1;
if(cljs.core.truth_(and__18441__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__18441__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e24983){var e = e24983;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__24984_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__24984_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__24989){
var vec__24990 = p__24989;
var k = cljs.core.nth.call(null,vec__24990,(0),null);
var v = cljs.core.nth.call(null,vec__24990,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__24991){
var vec__24992 = p__24991;
var k = cljs.core.nth.call(null,vec__24992,(0),null);
var v = cljs.core.nth.call(null,vec__24992,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__24996,p__24997){
var map__25244 = p__24996;
var map__25244__$1 = ((((!((map__25244 == null)))?((((map__25244.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25244.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25244):map__25244);
var opts = map__25244__$1;
var before_jsload = cljs.core.get.call(null,map__25244__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__25244__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__25244__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__25245 = p__24997;
var map__25245__$1 = ((((!((map__25245 == null)))?((((map__25245.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25245.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25245):map__25245);
var msg = map__25245__$1;
var files = cljs.core.get.call(null,map__25245__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__25245__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__25245__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__21710__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21710__auto__,map__25244,map__25244__$1,opts,before_jsload,on_jsload,reload_dependents,map__25245,map__25245__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__21711__auto__ = (function (){var switch__21598__auto__ = ((function (c__21710__auto__,map__25244,map__25244__$1,opts,before_jsload,on_jsload,reload_dependents,map__25245,map__25245__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_25398){
var state_val_25399 = (state_25398[(1)]);
if((state_val_25399 === (7))){
var inst_25259 = (state_25398[(7)]);
var inst_25261 = (state_25398[(8)]);
var inst_25260 = (state_25398[(9)]);
var inst_25262 = (state_25398[(10)]);
var inst_25267 = cljs.core._nth.call(null,inst_25260,inst_25262);
var inst_25268 = figwheel.client.file_reloading.eval_body.call(null,inst_25267,opts);
var inst_25269 = (inst_25262 + (1));
var tmp25400 = inst_25259;
var tmp25401 = inst_25261;
var tmp25402 = inst_25260;
var inst_25259__$1 = tmp25400;
var inst_25260__$1 = tmp25402;
var inst_25261__$1 = tmp25401;
var inst_25262__$1 = inst_25269;
var state_25398__$1 = (function (){var statearr_25403 = state_25398;
(statearr_25403[(7)] = inst_25259__$1);

(statearr_25403[(8)] = inst_25261__$1);

(statearr_25403[(11)] = inst_25268);

(statearr_25403[(9)] = inst_25260__$1);

(statearr_25403[(10)] = inst_25262__$1);

return statearr_25403;
})();
var statearr_25404_25490 = state_25398__$1;
(statearr_25404_25490[(2)] = null);

(statearr_25404_25490[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25399 === (20))){
var inst_25302 = (state_25398[(12)]);
var inst_25310 = figwheel.client.file_reloading.sort_files.call(null,inst_25302);
var state_25398__$1 = state_25398;
var statearr_25405_25491 = state_25398__$1;
(statearr_25405_25491[(2)] = inst_25310);

(statearr_25405_25491[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25399 === (27))){
var state_25398__$1 = state_25398;
var statearr_25406_25492 = state_25398__$1;
(statearr_25406_25492[(2)] = null);

(statearr_25406_25492[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25399 === (1))){
var inst_25251 = (state_25398[(13)]);
var inst_25248 = before_jsload.call(null,files);
var inst_25249 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_25250 = (function (){return ((function (inst_25251,inst_25248,inst_25249,state_val_25399,c__21710__auto__,map__25244,map__25244__$1,opts,before_jsload,on_jsload,reload_dependents,map__25245,map__25245__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__24993_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__24993_SHARP_);
});
;})(inst_25251,inst_25248,inst_25249,state_val_25399,c__21710__auto__,map__25244,map__25244__$1,opts,before_jsload,on_jsload,reload_dependents,map__25245,map__25245__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25251__$1 = cljs.core.filter.call(null,inst_25250,files);
var inst_25252 = cljs.core.not_empty.call(null,inst_25251__$1);
var state_25398__$1 = (function (){var statearr_25407 = state_25398;
(statearr_25407[(14)] = inst_25248);

(statearr_25407[(13)] = inst_25251__$1);

(statearr_25407[(15)] = inst_25249);

return statearr_25407;
})();
if(cljs.core.truth_(inst_25252)){
var statearr_25408_25493 = state_25398__$1;
(statearr_25408_25493[(1)] = (2));

} else {
var statearr_25409_25494 = state_25398__$1;
(statearr_25409_25494[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25399 === (24))){
var state_25398__$1 = state_25398;
var statearr_25410_25495 = state_25398__$1;
(statearr_25410_25495[(2)] = null);

(statearr_25410_25495[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25399 === (39))){
var inst_25352 = (state_25398[(16)]);
var state_25398__$1 = state_25398;
var statearr_25411_25496 = state_25398__$1;
(statearr_25411_25496[(2)] = inst_25352);

(statearr_25411_25496[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25399 === (46))){
var inst_25393 = (state_25398[(2)]);
var state_25398__$1 = state_25398;
var statearr_25412_25497 = state_25398__$1;
(statearr_25412_25497[(2)] = inst_25393);

(statearr_25412_25497[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25399 === (4))){
var inst_25296 = (state_25398[(2)]);
var inst_25297 = cljs.core.List.EMPTY;
var inst_25298 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_25297);
var inst_25299 = (function (){return ((function (inst_25296,inst_25297,inst_25298,state_val_25399,c__21710__auto__,map__25244,map__25244__$1,opts,before_jsload,on_jsload,reload_dependents,map__25245,map__25245__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__24994_SHARP_){
var and__18441__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__24994_SHARP_);
if(cljs.core.truth_(and__18441__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__24994_SHARP_));
} else {
return and__18441__auto__;
}
});
;})(inst_25296,inst_25297,inst_25298,state_val_25399,c__21710__auto__,map__25244,map__25244__$1,opts,before_jsload,on_jsload,reload_dependents,map__25245,map__25245__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25300 = cljs.core.filter.call(null,inst_25299,files);
var inst_25301 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_25302 = cljs.core.concat.call(null,inst_25300,inst_25301);
var state_25398__$1 = (function (){var statearr_25413 = state_25398;
(statearr_25413[(17)] = inst_25296);

(statearr_25413[(12)] = inst_25302);

(statearr_25413[(18)] = inst_25298);

return statearr_25413;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_25414_25498 = state_25398__$1;
(statearr_25414_25498[(1)] = (16));

} else {
var statearr_25415_25499 = state_25398__$1;
(statearr_25415_25499[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25399 === (15))){
var inst_25286 = (state_25398[(2)]);
var state_25398__$1 = state_25398;
var statearr_25416_25500 = state_25398__$1;
(statearr_25416_25500[(2)] = inst_25286);

(statearr_25416_25500[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25399 === (21))){
var inst_25312 = (state_25398[(19)]);
var inst_25312__$1 = (state_25398[(2)]);
var inst_25313 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_25312__$1);
var state_25398__$1 = (function (){var statearr_25417 = state_25398;
(statearr_25417[(19)] = inst_25312__$1);

return statearr_25417;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25398__$1,(22),inst_25313);
} else {
if((state_val_25399 === (31))){
var inst_25396 = (state_25398[(2)]);
var state_25398__$1 = state_25398;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25398__$1,inst_25396);
} else {
if((state_val_25399 === (32))){
var inst_25352 = (state_25398[(16)]);
var inst_25357 = inst_25352.cljs$lang$protocol_mask$partition0$;
var inst_25358 = (inst_25357 & (64));
var inst_25359 = inst_25352.cljs$core$ISeq$;
var inst_25360 = (inst_25358) || (inst_25359);
var state_25398__$1 = state_25398;
if(cljs.core.truth_(inst_25360)){
var statearr_25418_25501 = state_25398__$1;
(statearr_25418_25501[(1)] = (35));

} else {
var statearr_25419_25502 = state_25398__$1;
(statearr_25419_25502[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25399 === (40))){
var inst_25373 = (state_25398[(20)]);
var inst_25372 = (state_25398[(2)]);
var inst_25373__$1 = cljs.core.get.call(null,inst_25372,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_25374 = cljs.core.get.call(null,inst_25372,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_25375 = cljs.core.not_empty.call(null,inst_25373__$1);
var state_25398__$1 = (function (){var statearr_25420 = state_25398;
(statearr_25420[(21)] = inst_25374);

(statearr_25420[(20)] = inst_25373__$1);

return statearr_25420;
})();
if(cljs.core.truth_(inst_25375)){
var statearr_25421_25503 = state_25398__$1;
(statearr_25421_25503[(1)] = (41));

} else {
var statearr_25422_25504 = state_25398__$1;
(statearr_25422_25504[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25399 === (33))){
var state_25398__$1 = state_25398;
var statearr_25423_25505 = state_25398__$1;
(statearr_25423_25505[(2)] = false);

(statearr_25423_25505[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25399 === (13))){
var inst_25272 = (state_25398[(22)]);
var inst_25276 = cljs.core.chunk_first.call(null,inst_25272);
var inst_25277 = cljs.core.chunk_rest.call(null,inst_25272);
var inst_25278 = cljs.core.count.call(null,inst_25276);
var inst_25259 = inst_25277;
var inst_25260 = inst_25276;
var inst_25261 = inst_25278;
var inst_25262 = (0);
var state_25398__$1 = (function (){var statearr_25424 = state_25398;
(statearr_25424[(7)] = inst_25259);

(statearr_25424[(8)] = inst_25261);

(statearr_25424[(9)] = inst_25260);

(statearr_25424[(10)] = inst_25262);

return statearr_25424;
})();
var statearr_25425_25506 = state_25398__$1;
(statearr_25425_25506[(2)] = null);

(statearr_25425_25506[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25399 === (22))){
var inst_25320 = (state_25398[(23)]);
var inst_25316 = (state_25398[(24)]);
var inst_25315 = (state_25398[(25)]);
var inst_25312 = (state_25398[(19)]);
var inst_25315__$1 = (state_25398[(2)]);
var inst_25316__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25315__$1);
var inst_25317 = (function (){var all_files = inst_25312;
var res_SINGLEQUOTE_ = inst_25315__$1;
var res = inst_25316__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_25320,inst_25316,inst_25315,inst_25312,inst_25315__$1,inst_25316__$1,state_val_25399,c__21710__auto__,map__25244,map__25244__$1,opts,before_jsload,on_jsload,reload_dependents,map__25245,map__25245__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__24995_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__24995_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_25320,inst_25316,inst_25315,inst_25312,inst_25315__$1,inst_25316__$1,state_val_25399,c__21710__auto__,map__25244,map__25244__$1,opts,before_jsload,on_jsload,reload_dependents,map__25245,map__25245__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25318 = cljs.core.filter.call(null,inst_25317,inst_25315__$1);
var inst_25319 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_25320__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25319);
var inst_25321 = cljs.core.not_empty.call(null,inst_25320__$1);
var state_25398__$1 = (function (){var statearr_25426 = state_25398;
(statearr_25426[(23)] = inst_25320__$1);

(statearr_25426[(24)] = inst_25316__$1);

(statearr_25426[(26)] = inst_25318);

(statearr_25426[(25)] = inst_25315__$1);

return statearr_25426;
})();
if(cljs.core.truth_(inst_25321)){
var statearr_25427_25507 = state_25398__$1;
(statearr_25427_25507[(1)] = (23));

} else {
var statearr_25428_25508 = state_25398__$1;
(statearr_25428_25508[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25399 === (36))){
var state_25398__$1 = state_25398;
var statearr_25429_25509 = state_25398__$1;
(statearr_25429_25509[(2)] = false);

(statearr_25429_25509[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25399 === (41))){
var inst_25373 = (state_25398[(20)]);
var inst_25377 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_25378 = cljs.core.map.call(null,inst_25377,inst_25373);
var inst_25379 = cljs.core.pr_str.call(null,inst_25378);
var inst_25380 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_25379)].join('');
var inst_25381 = figwheel.client.utils.log.call(null,inst_25380);
var state_25398__$1 = state_25398;
var statearr_25430_25510 = state_25398__$1;
(statearr_25430_25510[(2)] = inst_25381);

(statearr_25430_25510[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25399 === (43))){
var inst_25374 = (state_25398[(21)]);
var inst_25384 = (state_25398[(2)]);
var inst_25385 = cljs.core.not_empty.call(null,inst_25374);
var state_25398__$1 = (function (){var statearr_25431 = state_25398;
(statearr_25431[(27)] = inst_25384);

return statearr_25431;
})();
if(cljs.core.truth_(inst_25385)){
var statearr_25432_25511 = state_25398__$1;
(statearr_25432_25511[(1)] = (44));

} else {
var statearr_25433_25512 = state_25398__$1;
(statearr_25433_25512[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25399 === (29))){
var inst_25320 = (state_25398[(23)]);
var inst_25316 = (state_25398[(24)]);
var inst_25318 = (state_25398[(26)]);
var inst_25315 = (state_25398[(25)]);
var inst_25312 = (state_25398[(19)]);
var inst_25352 = (state_25398[(16)]);
var inst_25348 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_25351 = (function (){var all_files = inst_25312;
var res_SINGLEQUOTE_ = inst_25315;
var res = inst_25316;
var files_not_loaded = inst_25318;
var dependencies_that_loaded = inst_25320;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25320,inst_25316,inst_25318,inst_25315,inst_25312,inst_25352,inst_25348,state_val_25399,c__21710__auto__,map__25244,map__25244__$1,opts,before_jsload,on_jsload,reload_dependents,map__25245,map__25245__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25350){
var map__25434 = p__25350;
var map__25434__$1 = ((((!((map__25434 == null)))?((((map__25434.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25434.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25434):map__25434);
var namespace = cljs.core.get.call(null,map__25434__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25320,inst_25316,inst_25318,inst_25315,inst_25312,inst_25352,inst_25348,state_val_25399,c__21710__auto__,map__25244,map__25244__$1,opts,before_jsload,on_jsload,reload_dependents,map__25245,map__25245__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25352__$1 = cljs.core.group_by.call(null,inst_25351,inst_25318);
var inst_25354 = (inst_25352__$1 == null);
var inst_25355 = cljs.core.not.call(null,inst_25354);
var state_25398__$1 = (function (){var statearr_25436 = state_25398;
(statearr_25436[(28)] = inst_25348);

(statearr_25436[(16)] = inst_25352__$1);

return statearr_25436;
})();
if(inst_25355){
var statearr_25437_25513 = state_25398__$1;
(statearr_25437_25513[(1)] = (32));

} else {
var statearr_25438_25514 = state_25398__$1;
(statearr_25438_25514[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25399 === (44))){
var inst_25374 = (state_25398[(21)]);
var inst_25387 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25374);
var inst_25388 = cljs.core.pr_str.call(null,inst_25387);
var inst_25389 = [cljs.core.str("not required: "),cljs.core.str(inst_25388)].join('');
var inst_25390 = figwheel.client.utils.log.call(null,inst_25389);
var state_25398__$1 = state_25398;
var statearr_25439_25515 = state_25398__$1;
(statearr_25439_25515[(2)] = inst_25390);

(statearr_25439_25515[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25399 === (6))){
var inst_25293 = (state_25398[(2)]);
var state_25398__$1 = state_25398;
var statearr_25440_25516 = state_25398__$1;
(statearr_25440_25516[(2)] = inst_25293);

(statearr_25440_25516[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25399 === (28))){
var inst_25318 = (state_25398[(26)]);
var inst_25345 = (state_25398[(2)]);
var inst_25346 = cljs.core.not_empty.call(null,inst_25318);
var state_25398__$1 = (function (){var statearr_25441 = state_25398;
(statearr_25441[(29)] = inst_25345);

return statearr_25441;
})();
if(cljs.core.truth_(inst_25346)){
var statearr_25442_25517 = state_25398__$1;
(statearr_25442_25517[(1)] = (29));

} else {
var statearr_25443_25518 = state_25398__$1;
(statearr_25443_25518[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25399 === (25))){
var inst_25316 = (state_25398[(24)]);
var inst_25332 = (state_25398[(2)]);
var inst_25333 = cljs.core.not_empty.call(null,inst_25316);
var state_25398__$1 = (function (){var statearr_25444 = state_25398;
(statearr_25444[(30)] = inst_25332);

return statearr_25444;
})();
if(cljs.core.truth_(inst_25333)){
var statearr_25445_25519 = state_25398__$1;
(statearr_25445_25519[(1)] = (26));

} else {
var statearr_25446_25520 = state_25398__$1;
(statearr_25446_25520[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25399 === (34))){
var inst_25367 = (state_25398[(2)]);
var state_25398__$1 = state_25398;
if(cljs.core.truth_(inst_25367)){
var statearr_25447_25521 = state_25398__$1;
(statearr_25447_25521[(1)] = (38));

} else {
var statearr_25448_25522 = state_25398__$1;
(statearr_25448_25522[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25399 === (17))){
var state_25398__$1 = state_25398;
var statearr_25449_25523 = state_25398__$1;
(statearr_25449_25523[(2)] = recompile_dependents);

(statearr_25449_25523[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25399 === (3))){
var state_25398__$1 = state_25398;
var statearr_25450_25524 = state_25398__$1;
(statearr_25450_25524[(2)] = null);

(statearr_25450_25524[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25399 === (12))){
var inst_25289 = (state_25398[(2)]);
var state_25398__$1 = state_25398;
var statearr_25451_25525 = state_25398__$1;
(statearr_25451_25525[(2)] = inst_25289);

(statearr_25451_25525[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25399 === (2))){
var inst_25251 = (state_25398[(13)]);
var inst_25258 = cljs.core.seq.call(null,inst_25251);
var inst_25259 = inst_25258;
var inst_25260 = null;
var inst_25261 = (0);
var inst_25262 = (0);
var state_25398__$1 = (function (){var statearr_25452 = state_25398;
(statearr_25452[(7)] = inst_25259);

(statearr_25452[(8)] = inst_25261);

(statearr_25452[(9)] = inst_25260);

(statearr_25452[(10)] = inst_25262);

return statearr_25452;
})();
var statearr_25453_25526 = state_25398__$1;
(statearr_25453_25526[(2)] = null);

(statearr_25453_25526[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25399 === (23))){
var inst_25320 = (state_25398[(23)]);
var inst_25316 = (state_25398[(24)]);
var inst_25318 = (state_25398[(26)]);
var inst_25315 = (state_25398[(25)]);
var inst_25312 = (state_25398[(19)]);
var inst_25323 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_25325 = (function (){var all_files = inst_25312;
var res_SINGLEQUOTE_ = inst_25315;
var res = inst_25316;
var files_not_loaded = inst_25318;
var dependencies_that_loaded = inst_25320;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25320,inst_25316,inst_25318,inst_25315,inst_25312,inst_25323,state_val_25399,c__21710__auto__,map__25244,map__25244__$1,opts,before_jsload,on_jsload,reload_dependents,map__25245,map__25245__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25324){
var map__25454 = p__25324;
var map__25454__$1 = ((((!((map__25454 == null)))?((((map__25454.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25454.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25454):map__25454);
var request_url = cljs.core.get.call(null,map__25454__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25320,inst_25316,inst_25318,inst_25315,inst_25312,inst_25323,state_val_25399,c__21710__auto__,map__25244,map__25244__$1,opts,before_jsload,on_jsload,reload_dependents,map__25245,map__25245__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25326 = cljs.core.reverse.call(null,inst_25320);
var inst_25327 = cljs.core.map.call(null,inst_25325,inst_25326);
var inst_25328 = cljs.core.pr_str.call(null,inst_25327);
var inst_25329 = figwheel.client.utils.log.call(null,inst_25328);
var state_25398__$1 = (function (){var statearr_25456 = state_25398;
(statearr_25456[(31)] = inst_25323);

return statearr_25456;
})();
var statearr_25457_25527 = state_25398__$1;
(statearr_25457_25527[(2)] = inst_25329);

(statearr_25457_25527[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25399 === (35))){
var state_25398__$1 = state_25398;
var statearr_25458_25528 = state_25398__$1;
(statearr_25458_25528[(2)] = true);

(statearr_25458_25528[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25399 === (19))){
var inst_25302 = (state_25398[(12)]);
var inst_25308 = figwheel.client.file_reloading.expand_files.call(null,inst_25302);
var state_25398__$1 = state_25398;
var statearr_25459_25529 = state_25398__$1;
(statearr_25459_25529[(2)] = inst_25308);

(statearr_25459_25529[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25399 === (11))){
var state_25398__$1 = state_25398;
var statearr_25460_25530 = state_25398__$1;
(statearr_25460_25530[(2)] = null);

(statearr_25460_25530[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25399 === (9))){
var inst_25291 = (state_25398[(2)]);
var state_25398__$1 = state_25398;
var statearr_25461_25531 = state_25398__$1;
(statearr_25461_25531[(2)] = inst_25291);

(statearr_25461_25531[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25399 === (5))){
var inst_25261 = (state_25398[(8)]);
var inst_25262 = (state_25398[(10)]);
var inst_25264 = (inst_25262 < inst_25261);
var inst_25265 = inst_25264;
var state_25398__$1 = state_25398;
if(cljs.core.truth_(inst_25265)){
var statearr_25462_25532 = state_25398__$1;
(statearr_25462_25532[(1)] = (7));

} else {
var statearr_25463_25533 = state_25398__$1;
(statearr_25463_25533[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25399 === (14))){
var inst_25272 = (state_25398[(22)]);
var inst_25281 = cljs.core.first.call(null,inst_25272);
var inst_25282 = figwheel.client.file_reloading.eval_body.call(null,inst_25281,opts);
var inst_25283 = cljs.core.next.call(null,inst_25272);
var inst_25259 = inst_25283;
var inst_25260 = null;
var inst_25261 = (0);
var inst_25262 = (0);
var state_25398__$1 = (function (){var statearr_25464 = state_25398;
(statearr_25464[(7)] = inst_25259);

(statearr_25464[(8)] = inst_25261);

(statearr_25464[(32)] = inst_25282);

(statearr_25464[(9)] = inst_25260);

(statearr_25464[(10)] = inst_25262);

return statearr_25464;
})();
var statearr_25465_25534 = state_25398__$1;
(statearr_25465_25534[(2)] = null);

(statearr_25465_25534[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25399 === (45))){
var state_25398__$1 = state_25398;
var statearr_25466_25535 = state_25398__$1;
(statearr_25466_25535[(2)] = null);

(statearr_25466_25535[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25399 === (26))){
var inst_25320 = (state_25398[(23)]);
var inst_25316 = (state_25398[(24)]);
var inst_25318 = (state_25398[(26)]);
var inst_25315 = (state_25398[(25)]);
var inst_25312 = (state_25398[(19)]);
var inst_25335 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_25337 = (function (){var all_files = inst_25312;
var res_SINGLEQUOTE_ = inst_25315;
var res = inst_25316;
var files_not_loaded = inst_25318;
var dependencies_that_loaded = inst_25320;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25320,inst_25316,inst_25318,inst_25315,inst_25312,inst_25335,state_val_25399,c__21710__auto__,map__25244,map__25244__$1,opts,before_jsload,on_jsload,reload_dependents,map__25245,map__25245__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25336){
var map__25467 = p__25336;
var map__25467__$1 = ((((!((map__25467 == null)))?((((map__25467.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25467.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25467):map__25467);
var namespace = cljs.core.get.call(null,map__25467__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__25467__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25320,inst_25316,inst_25318,inst_25315,inst_25312,inst_25335,state_val_25399,c__21710__auto__,map__25244,map__25244__$1,opts,before_jsload,on_jsload,reload_dependents,map__25245,map__25245__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25338 = cljs.core.map.call(null,inst_25337,inst_25316);
var inst_25339 = cljs.core.pr_str.call(null,inst_25338);
var inst_25340 = figwheel.client.utils.log.call(null,inst_25339);
var inst_25341 = (function (){var all_files = inst_25312;
var res_SINGLEQUOTE_ = inst_25315;
var res = inst_25316;
var files_not_loaded = inst_25318;
var dependencies_that_loaded = inst_25320;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25320,inst_25316,inst_25318,inst_25315,inst_25312,inst_25335,inst_25337,inst_25338,inst_25339,inst_25340,state_val_25399,c__21710__auto__,map__25244,map__25244__$1,opts,before_jsload,on_jsload,reload_dependents,map__25245,map__25245__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25320,inst_25316,inst_25318,inst_25315,inst_25312,inst_25335,inst_25337,inst_25338,inst_25339,inst_25340,state_val_25399,c__21710__auto__,map__25244,map__25244__$1,opts,before_jsload,on_jsload,reload_dependents,map__25245,map__25245__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25342 = setTimeout(inst_25341,(10));
var state_25398__$1 = (function (){var statearr_25469 = state_25398;
(statearr_25469[(33)] = inst_25335);

(statearr_25469[(34)] = inst_25340);

return statearr_25469;
})();
var statearr_25470_25536 = state_25398__$1;
(statearr_25470_25536[(2)] = inst_25342);

(statearr_25470_25536[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25399 === (16))){
var state_25398__$1 = state_25398;
var statearr_25471_25537 = state_25398__$1;
(statearr_25471_25537[(2)] = reload_dependents);

(statearr_25471_25537[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25399 === (38))){
var inst_25352 = (state_25398[(16)]);
var inst_25369 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25352);
var state_25398__$1 = state_25398;
var statearr_25472_25538 = state_25398__$1;
(statearr_25472_25538[(2)] = inst_25369);

(statearr_25472_25538[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25399 === (30))){
var state_25398__$1 = state_25398;
var statearr_25473_25539 = state_25398__$1;
(statearr_25473_25539[(2)] = null);

(statearr_25473_25539[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25399 === (10))){
var inst_25272 = (state_25398[(22)]);
var inst_25274 = cljs.core.chunked_seq_QMARK_.call(null,inst_25272);
var state_25398__$1 = state_25398;
if(inst_25274){
var statearr_25474_25540 = state_25398__$1;
(statearr_25474_25540[(1)] = (13));

} else {
var statearr_25475_25541 = state_25398__$1;
(statearr_25475_25541[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25399 === (18))){
var inst_25306 = (state_25398[(2)]);
var state_25398__$1 = state_25398;
if(cljs.core.truth_(inst_25306)){
var statearr_25476_25542 = state_25398__$1;
(statearr_25476_25542[(1)] = (19));

} else {
var statearr_25477_25543 = state_25398__$1;
(statearr_25477_25543[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25399 === (42))){
var state_25398__$1 = state_25398;
var statearr_25478_25544 = state_25398__$1;
(statearr_25478_25544[(2)] = null);

(statearr_25478_25544[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25399 === (37))){
var inst_25364 = (state_25398[(2)]);
var state_25398__$1 = state_25398;
var statearr_25479_25545 = state_25398__$1;
(statearr_25479_25545[(2)] = inst_25364);

(statearr_25479_25545[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25399 === (8))){
var inst_25259 = (state_25398[(7)]);
var inst_25272 = (state_25398[(22)]);
var inst_25272__$1 = cljs.core.seq.call(null,inst_25259);
var state_25398__$1 = (function (){var statearr_25480 = state_25398;
(statearr_25480[(22)] = inst_25272__$1);

return statearr_25480;
})();
if(inst_25272__$1){
var statearr_25481_25546 = state_25398__$1;
(statearr_25481_25546[(1)] = (10));

} else {
var statearr_25482_25547 = state_25398__$1;
(statearr_25482_25547[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21710__auto__,map__25244,map__25244__$1,opts,before_jsload,on_jsload,reload_dependents,map__25245,map__25245__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__21598__auto__,c__21710__auto__,map__25244,map__25244__$1,opts,before_jsload,on_jsload,reload_dependents,map__25245,map__25245__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21599__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21599__auto____0 = (function (){
var statearr_25486 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25486[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__21599__auto__);

(statearr_25486[(1)] = (1));

return statearr_25486;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21599__auto____1 = (function (state_25398){
while(true){
var ret_value__21600__auto__ = (function (){try{while(true){
var result__21601__auto__ = switch__21598__auto__.call(null,state_25398);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21601__auto__;
}
break;
}
}catch (e25487){if((e25487 instanceof Object)){
var ex__21602__auto__ = e25487;
var statearr_25488_25548 = state_25398;
(statearr_25488_25548[(5)] = ex__21602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25398);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25487;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25549 = state_25398;
state_25398 = G__25549;
continue;
} else {
return ret_value__21600__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__21599__auto__ = function(state_25398){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21599__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21599__auto____1.call(this,state_25398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__21599__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21599__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__21599__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21599__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21599__auto__;
})()
;})(switch__21598__auto__,c__21710__auto__,map__25244,map__25244__$1,opts,before_jsload,on_jsload,reload_dependents,map__25245,map__25245__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__21712__auto__ = (function (){var statearr_25489 = f__21711__auto__.call(null);
(statearr_25489[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21710__auto__);

return statearr_25489;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21712__auto__);
});})(c__21710__auto__,map__25244,map__25244__$1,opts,before_jsload,on_jsload,reload_dependents,map__25245,map__25245__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__21710__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__25552,link){
var map__25555 = p__25552;
var map__25555__$1 = ((((!((map__25555 == null)))?((((map__25555.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25555.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25555):map__25555);
var file = cljs.core.get.call(null,map__25555__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__25555,map__25555__$1,file){
return (function (p1__25550_SHARP_,p2__25551_SHARP_){
if(cljs.core._EQ_.call(null,p1__25550_SHARP_,p2__25551_SHARP_)){
return p1__25550_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__25555,map__25555__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__25561){
var map__25562 = p__25561;
var map__25562__$1 = ((((!((map__25562 == null)))?((((map__25562.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25562.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25562):map__25562);
var match_length = cljs.core.get.call(null,map__25562__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__25562__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__25557_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__25557_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args25564 = [];
var len__19523__auto___25567 = arguments.length;
var i__19524__auto___25568 = (0);
while(true){
if((i__19524__auto___25568 < len__19523__auto___25567)){
args25564.push((arguments[i__19524__auto___25568]));

var G__25569 = (i__19524__auto___25568 + (1));
i__19524__auto___25568 = G__25569;
continue;
} else {
}
break;
}

var G__25566 = args25564.length;
switch (G__25566) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25564.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__25571_SHARP_,p2__25572_SHARP_){
return cljs.core.assoc.call(null,p1__25571_SHARP_,cljs.core.get.call(null,p2__25572_SHARP_,key),p2__25572_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__25573){
var map__25576 = p__25573;
var map__25576__$1 = ((((!((map__25576 == null)))?((((map__25576.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25576.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25576):map__25576);
var f_data = map__25576__$1;
var file = cljs.core.get.call(null,map__25576__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__25578,files_msg){
var map__25585 = p__25578;
var map__25585__$1 = ((((!((map__25585 == null)))?((((map__25585.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25585.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25585):map__25585);
var opts = map__25585__$1;
var on_cssload = cljs.core.get.call(null,map__25585__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__25587_25591 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__25588_25592 = null;
var count__25589_25593 = (0);
var i__25590_25594 = (0);
while(true){
if((i__25590_25594 < count__25589_25593)){
var f_25595 = cljs.core._nth.call(null,chunk__25588_25592,i__25590_25594);
figwheel.client.file_reloading.reload_css_file.call(null,f_25595);

var G__25596 = seq__25587_25591;
var G__25597 = chunk__25588_25592;
var G__25598 = count__25589_25593;
var G__25599 = (i__25590_25594 + (1));
seq__25587_25591 = G__25596;
chunk__25588_25592 = G__25597;
count__25589_25593 = G__25598;
i__25590_25594 = G__25599;
continue;
} else {
var temp__4657__auto___25600 = cljs.core.seq.call(null,seq__25587_25591);
if(temp__4657__auto___25600){
var seq__25587_25601__$1 = temp__4657__auto___25600;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25587_25601__$1)){
var c__19264__auto___25602 = cljs.core.chunk_first.call(null,seq__25587_25601__$1);
var G__25603 = cljs.core.chunk_rest.call(null,seq__25587_25601__$1);
var G__25604 = c__19264__auto___25602;
var G__25605 = cljs.core.count.call(null,c__19264__auto___25602);
var G__25606 = (0);
seq__25587_25591 = G__25603;
chunk__25588_25592 = G__25604;
count__25589_25593 = G__25605;
i__25590_25594 = G__25606;
continue;
} else {
var f_25607 = cljs.core.first.call(null,seq__25587_25601__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_25607);

var G__25608 = cljs.core.next.call(null,seq__25587_25601__$1);
var G__25609 = null;
var G__25610 = (0);
var G__25611 = (0);
seq__25587_25591 = G__25608;
chunk__25588_25592 = G__25609;
count__25589_25593 = G__25610;
i__25590_25594 = G__25611;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__25585,map__25585__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__25585,map__25585__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map