// Compiled by ClojureScript 1.8.51 {}
goog.provide('plato.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.reader');
plato.core.assoc_nil = (function plato$core$assoc_nil(x,y){

if((y == null)){
return null;
} else {
return cljs.core.assoc.call(null,cljs.core.PersistentArrayMap.EMPTY,x,y);
}
});
plato.core.diff_states = (function plato$core$diff_states(old_state,new_state){

if(cljs.core._EQ_.call(null,old_state,new_state)){
return null;
} else {
if(!((cljs.core.map_QMARK_.call(null,old_state)) && (cljs.core.map_QMARK_.call(null,new_state)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((new_state == null))?old_state:null),new_state], null);
} else {
var all_keys = cljs.core.vec.call(null,cljs.core.set.call(null,cljs.core.into.call(null,cljs.core.keys.call(null,old_state),cljs.core.keys.call(null,new_state))));
var substates = cljs.core.map.call(null,((function (all_keys){
return (function (p1__25729_SHARP_){
return plato$core$diff_states.call(null,cljs.core.get.call(null,old_state,p1__25729_SHARP_),cljs.core.get.call(null,new_state,p1__25729_SHARP_));
});})(all_keys))
,all_keys);
var old_vals = cljs.core.map.call(null,plato.core.assoc_nil,all_keys,cljs.core.map.call(null,cljs.core.first,substates));
var new_vals = cljs.core.map.call(null,plato.core.assoc_nil,all_keys,cljs.core.map.call(null,cljs.core.second,substates));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.merge,old_vals),cljs.core.apply.call(null,cljs.core.merge,new_vals)], null);
}
}
});
/**
 * Returns a list of keys as split from a nested key string.
 */
plato.core.split_key = (function plato$core$split_key(nested_key){
return cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.keyword,clojure.string.split.call(null,nested_key,/:/)));
});
/**
 * Removes the base-key from the nested-key.
 *   Note: The : is added to base-key to avoid getting a trailing :
 *   when the nested key is turned into a collection
 */
plato.core.clean_key = (function plato$core$clean_key(base_key,nested_key){
return clojure.string.replace_first.call(null,nested_key,[cljs.core.str(base_key),cljs.core.str(":")].join(''),"");
});
/**
 * Takes an arbitrarily nested map and returns a list
 *   vectors, where each vectors is a tuple of a path
 *   describing, as well as a value.
 *   
 *   For example, called with the base-vector ["com.example"],
 *   and the map {:a 1 :b {:c 2 :d 3}}, the function returns
 *   ([["com.example" :a] 1]
 *   [["com.example" :b :c] 2]
 *   [["com.example" :b :d] 3])
 */
plato.core.pathify = (function plato$core$pathify(base_vector,m){
return cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__19233__auto__ = (function plato$core$pathify_$_iter__25738(s__25739){
return (new cljs.core.LazySeq(null,(function (){
var s__25739__$1 = s__25739;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__25739__$1);
if(temp__4657__auto__){
var s__25739__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25739__$2)){
var c__19231__auto__ = cljs.core.chunk_first.call(null,s__25739__$2);
var size__19232__auto__ = cljs.core.count.call(null,c__19231__auto__);
var b__25741 = cljs.core.chunk_buffer.call(null,size__19232__auto__);
if((function (){var i__25740 = (0);
while(true){
if((i__25740 < size__19232__auto__)){
var vec__25744 = cljs.core._nth.call(null,c__19231__auto__,i__25740);
var k = cljs.core.nth.call(null,vec__25744,(0),null);
var v = cljs.core.nth.call(null,vec__25744,(1),null);
cljs.core.chunk_append.call(null,b__25741,(function (){var built_vector = cljs.core.conj.call(null,base_vector,k);
if(cljs.core.map_QMARK_.call(null,v)){
return plato$core$pathify.call(null,built_vector,v);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [built_vector,cljs.core.pr_str.call(null,v)], null)], null);
}
})());

var G__25746 = (i__25740 + (1));
i__25740 = G__25746;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25741),plato$core$pathify_$_iter__25738.call(null,cljs.core.chunk_rest.call(null,s__25739__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25741),null);
}
} else {
var vec__25745 = cljs.core.first.call(null,s__25739__$2);
var k = cljs.core.nth.call(null,vec__25745,(0),null);
var v = cljs.core.nth.call(null,vec__25745,(1),null);
return cljs.core.cons.call(null,(function (){var built_vector = cljs.core.conj.call(null,base_vector,k);
if(cljs.core.map_QMARK_.call(null,v)){
return plato$core$pathify.call(null,built_vector,v);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [built_vector,cljs.core.pr_str.call(null,v)], null)], null);
}
})(),plato$core$pathify_$_iter__25738.call(null,cljs.core.rest.call(null,s__25739__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19233__auto__.call(null,m);
})());
});
/**
 * Takes a base-key and a map of entries on format
 *   {com.example:a 1
 *   com.example:nested:c 2}
 *   and returns a map such that the base-key is removed from the beginning
 *   of each key, and the rest is parsed into a map structure. The example above
 *   should return
 *   {:a 1 :nested {:c 2}}
 */
plato.core.unkeyify = (function plato$core$unkeyify(base_key,keyified_map){
var unkeyified_map = cljs.core.map.call(null,(function (x){
var vec__25750 = x;
var k = cljs.core.nth.call(null,vec__25750,(0),null);
var v = cljs.core.nth.call(null,vec__25750,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plato.core.split_key.call(null,plato.core.clean_key.call(null,base_key,k)),cljs.reader.read_string.call(null,v)], null);
}),keyified_map);
return cljs.core.reduce.call(null,((function (unkeyified_map){
return (function (p1__25747_SHARP_,p2__25748_SHARP_){
return cljs.core.apply.call(null,cljs.core.assoc_in,p1__25747_SHARP_,p2__25748_SHARP_);
});})(unkeyified_map))
,cljs.core.PersistentArrayMap.EMPTY,unkeyified_map);
});
plato.core.to_string = (function plato$core$to_string(base_key,path_vector){
return [cljs.core.str(base_key),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,path_vector))].join('');
});
/**
 * Updates a particular key stored in local storage.
 *   For example, (store! "com.test" [:foo :bar] "Hello World!")
 *   will update the key com.test:foo:bar to have value "Hello world"
 *   in local storage.
 */
plato.core.store_BANG_ = (function plato$core$store_BANG_(base_key,path_vector,value){
var the_key = plato.core.to_string.call(null,base_key,path_vector);
return localStorage.setItem(the_key,value);
});
/**
 * Stores a collection of path vectors in local storage.
 *   The path vectors should be on format:
 *   ([[:a] 1]
 *   [[:b :c] 2]
 *   [[:b :d] 3])
 */
plato.core.store_many_BANG_ = (function plato$core$store_many_BANG_(base_key,path_vectors){
var put = cljs.core.partial.call(null,plato.core.store_BANG_,base_key);
return cljs.core.doall.call(null,cljs.core.map.call(null,((function (put){
return (function (p1__25751_SHARP_){
return cljs.core.apply.call(null,put,p1__25751_SHARP_);
});})(put))
,path_vectors));
});
/**
 * Takes hash-map and stores it in local storage.
 */
plato.core.store_state_BANG_ = (function plato$core$store_state_BANG_(base_key,state){
return plato.core.store_many_BANG_.call(null,base_key,plato.core.pathify.call(null,cljs.core.PersistentVector.EMPTY,state));
});
/**
 * Takes an atom and stores the state it contains in local storage.
 */
plato.core.store_atom_BANG_ = (function plato$core$store_atom_BANG_(base_key,an_atom){
return plato.core.store_state_BANG_.call(null,base_key,cljs.core.deref.call(null,an_atom));
});
/**
 * From a list of all keys, return a list with the keys that
 *   contains our base-key only.
 */
plato.core.filter_our_keys = (function plato$core$filter_our_keys(base_key,all_keys){
var base_pattern = cljs.core.re_pattern.call(null,[cljs.core.str("^"),cljs.core.str(base_key)].join(''));
return cljs.core.filter.call(null,((function (base_pattern){
return (function (p1__25752_SHARP_){
return cljs.core.re_find.call(null,base_pattern,p1__25752_SHARP_);
});})(base_pattern))
,all_keys);
});
plato.core.get_by_string = (function plato$core$get_by_string(path_string){

return (localStorage[path_string]);
});
plato.core.get_our_keys = (function plato$core$get_our_keys(base_key){
var all_keys = Object.keys(localStorage);
return plato.core.filter_our_keys.call(null,base_key,all_keys);
});
plato.core.restore = (function plato$core$restore(base_key,path_vector){

return plato.core.get_by_string.call(null,plato.core.to_string.call(null,base_key,path_vector));
});
/**
 * Get all localStorage entries beginning with the given base-key.
 */
plato.core.restore_state = (function plato$core$restore_state(base_key){
var our_keys = plato.core.get_our_keys.call(null,base_key);
var all_data = cljs.core.reduce.call(null,((function (our_keys){
return (function (p1__25753_SHARP_,p2__25754_SHARP_){
return cljs.core.assoc.call(null,p1__25753_SHARP_,p2__25754_SHARP_,plato.core.get_by_string.call(null,p2__25754_SHARP_));
});})(our_keys))
,cljs.core.PersistentArrayMap.EMPTY,our_keys);
return plato.core.unkeyify.call(null,base_key,all_data);
});
/**
 * Get stored state from local storage and reset the given atom with it.
 */
plato.core.restore_atom_BANG_ = (function plato$core$restore_atom_BANG_(base_key,an_atom){
return cljs.core.reset_BANG_.call(null,an_atom,plato.core.restore_state.call(null,base_key));
});
/**
 * Erase an entry from local storage given the supplied string.
 */
plato.core.erase_string_BANG_ = (function plato$core$erase_string_BANG_(a_string){
return localStorage.removeItem(a_string);
});
/**
 * Removes a value from local storage.
 */
plato.core.erase_BANG_ = (function plato$core$erase_BANG_(base_key,path_vector){
var the_key = plato.core.to_string.call(null,base_key,path_vector);
return plato.core.erase_string_BANG_.call(null,the_key);
});
/**
 * Remove all keys that belonging to the given base-key
 *   from local storage.
 */
plato.core.erase_many_BANG_ = (function plato$core$erase_many_BANG_(base_key,path_vectors){
var remove = cljs.core.partial.call(null,cljs.core.remove,base_key);
return cljs.core.doall.call(null,cljs.core.map.call(null,((function (remove){
return (function (p1__25755_SHARP_){
return cljs.core.apply.call(null,plato.core.erase_BANG_,p1__25755_SHARP_);
});})(remove))
,path_vectors));
});
/**
 * Remove all data belonging to the supplied base-key.
 */
plato.core.erase_all_BANG_ = (function plato$core$erase_all_BANG_(base_key){
return cljs.core.doall.call(null,cljs.core.map.call(null,plato.core.erase_string_BANG_,plato.core.get_our_keys.call(null,base_key)));
});
plato.core.added_to_strings = (function plato$core$added_to_strings(pathified){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,", ",cljs.core.map.call(null,(function (p1__25756_SHARP_){
return [cljs.core.str(cljs.core.first.call(null,p1__25756_SHARP_)),cljs.core.str(" to "),cljs.core.str(cljs.core.second.call(null,p1__25756_SHARP_))].join('');
}),pathified)));
});
plato.core.removed_to_strings = (function plato$core$removed_to_strings(pathified){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,", ",cljs.core.map.call(null,(function (p1__25757_SHARP_){
return [cljs.core.str(cljs.core.first.call(null,p1__25757_SHARP_))].join('');
}),pathified)));
});
/**
 * Updates local storage with all changes made to an atom.
 *   Call with true as third arg to switch on logging.
 */
plato.core.keep_updated_BANG_ = (function plato$core$keep_updated_BANG_(var_args){
var args25758 = [];
var len__19523__auto___25761 = arguments.length;
var i__19524__auto___25762 = (0);
while(true){
if((i__19524__auto___25762 < len__19523__auto___25761)){
args25758.push((arguments[i__19524__auto___25762]));

var G__25763 = (i__19524__auto___25762 + (1));
i__19524__auto___25762 = G__25763;
continue;
} else {
}
break;
}

var G__25760 = args25758.length;
switch (G__25760) {
case 2:
return plato.core.keep_updated_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return plato.core.keep_updated_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25758.length)].join('')));

}
});

plato.core.keep_updated_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (base_key,an_atom){
return plato.core.keep_updated_BANG_.call(null,base_key,an_atom,false);
});

plato.core.keep_updated_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (base_key,an_atom,log_updates){
cljs.core.add_watch.call(null,an_atom,new cljs.core.Keyword(null,"a-key","a-key",-539452860),(function (a_key,the_reference,old_state,new_state){
var the_diff = plato.core.diff_states.call(null,old_state,new_state);
var added = plato.core.pathify.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.second.call(null,the_diff));
var removed = plato.core.pathify.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.first.call(null,the_diff));
if(cljs.core.empty_QMARK_.call(null,added)){
} else {
if(cljs.core.truth_(log_updates)){
console.log("Updating in localStorage",plato.core.added_to_strings.call(null,added));
} else {
}

plato.core.store_many_BANG_.call(null,base_key,added);
}

if(cljs.core.empty_QMARK_.call(null,removed)){
return null;
} else {
if(cljs.core.truth_(log_updates)){
console.log("Removing in localStorage",plato.core.removed_to_strings.call(null,removed));
} else {
}

return plato.core.erase_many_BANG_.call(null,base_key,removed);
}
}));

return an_atom;
});

plato.core.keep_updated_BANG_.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=core.js.map