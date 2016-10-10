// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('email_invoicer.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent_forms.core');
goog.require('reagent.format');
goog.require('cljs.reader');
goog.require('alandipert.storage_atom');
email_invoicer.core.email_line_width = (40);
if(typeof email_invoicer.core.home_office !== 'undefined'){
} else {
email_invoicer.core.home_office = alandipert.storage_atom.local_storage(reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),cljs.core.cst$kw$home_DASH_office);
}
if(typeof email_invoicer.core.client_item_storage !== 'undefined'){
} else {
email_invoicer.core.client_item_storage = alandipert.storage_atom.local_storage(reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),cljs.core.cst$kw$client_DASH_item_DASH_storage);
}
if(typeof email_invoicer.core.invoice_form_atom !== 'undefined'){
} else {
email_invoicer.core.invoice_form_atom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$items,cljs.core.PersistentVector.EMPTY], null));
}
if(typeof email_invoicer.core.display_attributes !== 'undefined'){
} else {
email_invoicer.core.display_attributes = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$display_DASH_user_DASH_menu,false], null));
}
email_invoicer.core.download = (function email_invoicer$core$download(var_args){
var args__7489__auto__ = [];
var len__7482__auto___14353 = arguments.length;
var i__7483__auto___14354 = (0);
while(true){
if((i__7483__auto___14354 < len__7482__auto___14353)){
args__7489__auto__.push((arguments[i__7483__auto___14354]));

var G__14355 = (i__7483__auto___14354 + (1));
i__7483__auto___14354 = G__14355;
continue;
} else {
}
break;
}

var argseq__7490__auto__ = ((((2) < args__7489__auto__.length))?(new cljs.core.IndexedSeq(args__7489__auto__.slice((2)),(0),null)):null);
return email_invoicer.core.download.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7490__auto__);
});

email_invoicer.core.download.cljs$core$IFn$_invoke$arity$variadic = (function (filename,content,p__14349){
var vec__14350 = p__14349;
var mime_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14350,(0),null);
var mime_type__$1 = (function (){var or__6407__auto__ = mime_type;
if(cljs.core.truth_(or__6407__auto__)){
return or__6407__auto__;
} else {
return [cljs.core.str("text/plain;charset="),cljs.core.str(document.characterSet)].join('');
}
})();
var blob = (new Blob(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null)),cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,mime_type__$1], null))));
return saveAs(blob,filename);
});

email_invoicer.core.download.cljs$lang$maxFixedArity = (2);

email_invoicer.core.download.cljs$lang$applyTo = (function (seq14346){
var G__14347 = cljs.core.first(seq14346);
var seq14346__$1 = cljs.core.next(seq14346);
var G__14348 = cljs.core.first(seq14346__$1);
var seq14346__$2 = cljs.core.next(seq14346__$1);
return email_invoicer.core.download.cljs$core$IFn$_invoke$arity$variadic(G__14347,G__14348,seq14346__$2);
});

/**
 * Merges loaded file with currentl client and item data
 */
email_invoicer.core.handle_data_upload = (function email_invoicer$core$handle_data_upload(e){
var reader = (new FileReader());
reader.onload = ((function (reader){
return (function (e__$1){
var file_data = cljs.reader.read_string(e__$1.target.result);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(email_invoicer.core.client_item_storage,cljs.core.merge,file_data);
});})(reader))
;

var x = e.currentTarget;
var x__$1 = x.files;
var x__$2 = (x__$1[(0)]);
var x__$3 = ((function (x,x__$1,x__$2,reader){
return (function (a){
console.log(a);

return a;
});})(x,x__$1,x__$2,reader))
.call(null,x__$2);
return reader.readAsText(x__$3);
});
/**
 * Stores the client and price of an item
 */
email_invoicer.core.store_item_details = (function email_invoicer$core$store_item_details(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(email_invoicer.core.client_item_storage,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$item,cljs.core.cst$kw$item.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(email_invoicer.core.invoice_form_atom) : cljs.core.deref.call(null,email_invoicer.core.invoice_form_atom)))], null),cljs.core.merge,cljs.core.array_seq([cljs.core.select_keys((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(email_invoicer.core.invoice_form_atom) : cljs.core.deref.call(null,email_invoicer.core.invoice_form_atom)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$client,cljs.core.cst$kw$charge,cljs.core.cst$kw$item_DASH_name], null))], 0));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(email_invoicer.core.client_item_storage,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$client,cljs.core.cst$kw$client.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(email_invoicer.core.invoice_form_atom) : cljs.core.deref.call(null,email_invoicer.core.invoice_form_atom)))], null),cljs.core.merge,cljs.core.array_seq([cljs.core.select_keys((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(email_invoicer.core.invoice_form_atom) : cljs.core.deref.call(null,email_invoicer.core.invoice_form_atom)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$client_DASH_email], null))], 0));
});
/**
 * Event for invoice form
 */
email_invoicer.core.change_invoice_form_event = (function email_invoicer$core$change_invoice_form_event(p__14356,value,doc){
var vec__14361 = p__14356;
var seq__14362 = cljs.core.seq(vec__14361);
var first__14363 = cljs.core.first(seq__14362);
var seq__14362__$1 = cljs.core.next(seq__14362);
var id = first__14363;
var ids = seq__14362__$1;
var G__14364 = (((id instanceof cljs.core.Keyword))?id.fqn:null);
switch (G__14364) {
case "client":
var temp__4657__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(email_invoicer.core.client_item_storage) : cljs.core.deref.call(null,email_invoicer.core.client_item_storage)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,value], null));
if(cljs.core.truth_(temp__4657__auto__)){
var saved_info = temp__4657__auto__;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([doc,saved_info], 0));
} else {
return null;
}

break;
case "item":
var temp__4657__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(email_invoicer.core.client_item_storage) : cljs.core.deref.call(null,email_invoicer.core.client_item_storage)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,value], null));
if(cljs.core.truth_(temp__4657__auto__)){
var saved_info = temp__4657__auto__;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([doc,saved_info,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(email_invoicer.core.client_item_storage) : cljs.core.deref.call(null,email_invoicer.core.client_item_storage)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$client,cljs.core.cst$kw$client.cljs$core$IFn$_invoke$arity$1(saved_info)], null))], 0));
} else {
return null;
}

break;
default:
return null;

}
});
email_invoicer.core.toggle_user_menu = (function email_invoicer$core$toggle_user_menu(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(email_invoicer.core.display_attributes,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$display_DASH_user_DASH_menu], null),cljs.core.not);
});
email_invoicer.core.add_item_to_list = (function email_invoicer$core$add_item_to_list(){
email_invoicer.core.store_item_details();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(email_invoicer.core.invoice_form_atom,(function (p1__14366_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(p1__14366_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$items], null),cljs.core.conj,cljs.core.select_keys((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(email_invoicer.core.invoice_form_atom) : cljs.core.deref.call(null,email_invoicer.core.invoice_form_atom)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$item,cljs.core.cst$kw$charge,cljs.core.cst$kw$item_DASH_name], null))),cljs.core.cst$kw$item,null),cljs.core.cst$kw$item_DASH_name,null),cljs.core.cst$kw$charge,null);
}));
});
email_invoicer.core.remove_from_vector = (function email_invoicer$core$remove_from_vector(v,i){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,(0),i),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,(i + (1)))));
});
email_invoicer.core.line_item = (function email_invoicer$core$line_item(left_item,right_item,width,fill_char){
var l_str = [cljs.core.str(left_item)].join('');
var r_str = [cljs.core.str(right_item)].join('');
var l_width = cljs.core.count(l_str);
var r_width = cljs.core.count(r_str);
var fill_width = ((width - l_width) - r_width);
var filler = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(fill_width,fill_char));
return [cljs.core.str(l_str),cljs.core.str(filler),cljs.core.str(r_str)].join('');
});
email_invoicer.core.fill_middle = (function email_invoicer$core$fill_middle(left_item,right_item,width,fill_char){
var l_str = [cljs.core.str(left_item)].join('');
var r_str = [cljs.core.str(right_item)].join('');
var l_width = cljs.core.count(l_str);
var r_width = cljs.core.count(r_str);
var fill_width = ((width - l_width) - r_width);
var filler = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(fill_width,fill_char));
return [cljs.core.str(l_str),cljs.core.str(filler),cljs.core.str(r_str)].join('');
});
email_invoicer.core.item_line = (function email_invoicer$core$item_line(id,name,charge,sub_width){
return [cljs.core.str(email_invoicer.core.fill_middle(charge,id,sub_width,"_")),cljs.core.str(name)].join('');
});
email_invoicer.core.item_list = (function email_invoicer$core$item_list(){
var name_width = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.cst$kw$item_DASH_name),cljs.core.cst$kw$items.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(email_invoicer.core.invoice_form_atom) : cljs.core.deref.call(null,email_invoicer.core.invoice_form_atom)))));
var id_width = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.count,cljs.core.str,cljs.core.cst$kw$item),cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(email_invoicer.core.invoice_form_atom) : cljs.core.deref.call(null,email_invoicer.core.invoice_form_atom)))));
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (name_width,id_width){
return (function (i,item){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$list_DASH_group_DASH_item,[cljs.core.str(cljs.core.cst$kw$item_DASH_name.cljs$core$IFn$_invoke$arity$1(item)),cljs.core.str(" "),cljs.core.str(reagent.format.format.cljs$core$IFn$_invoke$arity$variadic([cljs.core.str("%"),cljs.core.str(id_width),cljs.core.str("s")].join(''),cljs.core.array_seq([cljs.core.cst$kw$item.cljs$core$IFn$_invoke$arity$1(item)], 0))),cljs.core.str(" $"),cljs.core.str(cljs.core.cst$kw$charge.cljs$core$IFn$_invoke$arity$1(item))].join(''),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$delete_DASH_button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (name_width,id_width){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(email_invoicer.core.invoice_form_atom,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$items], null),email_invoicer.core.remove_from_vector,cljs.core.array_seq([i], 0));
});})(name_width,id_width))
], null),"x"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,i], null));
});})(name_width,id_width))
,cljs.core.cst$kw$items.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(email_invoicer.core.invoice_form_atom) : cljs.core.deref.call(null,email_invoicer.core.invoice_form_atom))));
});
email_invoicer.core.email_link = reagent.ratom.make_reaction((function (){
var map__14367 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(email_invoicer.core.home_office) : cljs.core.deref.call(null,email_invoicer.core.home_office));
var map__14367__$1 = ((((!((map__14367 == null)))?((((map__14367.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14367.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14367):map__14367);
var office_email = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14367__$1,cljs.core.cst$kw$office_DASH_email);
var agent_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14367__$1,cljs.core.cst$kw$agent_DASH_name);
var business_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14367__$1,cljs.core.cst$kw$business_DASH_name);
var map__14368 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(email_invoicer.core.invoice_form_atom) : cljs.core.deref.call(null,email_invoicer.core.invoice_form_atom));
var map__14368__$1 = ((((!((map__14368 == null)))?((((map__14368.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14368.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14368):map__14368);
var client_email = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14368__$1,cljs.core.cst$kw$client_DASH_email);
var client = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14368__$1,cljs.core.cst$kw$client);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14368__$1,cljs.core.cst$kw$items);
return [cljs.core.str("mailto:"),cljs.core.str(client_email),cljs.core.str("?"),cljs.core.str("cc="),cljs.core.str(office_email),cljs.core.str("&subject="),cljs.core.str(reagent.format.encode_uri([cljs.core.str("Invoice from "),cljs.core.str(business_name)].join(''))),cljs.core.str("&body="),cljs.core.str(reagent.format.encode_uri([cljs.core.str("Invoice"),cljs.core.str("\n"),cljs.core.str(business_name),cljs.core.str("\n"),cljs.core.str("\n"),cljs.core.str("Bill To: "),cljs.core.str(client),cljs.core.str("\n"),cljs.core.str("\n"),cljs.core.str("Serviced by: "),cljs.core.str(agent_name),cljs.core.str("\n"),cljs.core.str(email_invoicer.core.line_item("Charge","Item",email_invoicer.core.email_line_width,"_")),cljs.core.str("\tDescription"),cljs.core.str("\n"),cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("\n",(function (){var iter__7187__auto__ = ((function (map__14367,map__14367__$1,office_email,agent_name,business_name,map__14368,map__14368__$1,client_email,client,items){
return (function email_invoicer$core$iter__14371(s__14372){
return (new cljs.core.LazySeq(null,((function (map__14367,map__14367__$1,office_email,agent_name,business_name,map__14368,map__14368__$1,client_email,client,items){
return (function (){
var s__14372__$1 = s__14372;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__14372__$1);
if(temp__4657__auto__){
var s__14372__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14372__$2)){
var c__7185__auto__ = cljs.core.chunk_first(s__14372__$2);
var size__7186__auto__ = cljs.core.count(c__7185__auto__);
var b__14374 = cljs.core.chunk_buffer(size__7186__auto__);
if((function (){var i__14373 = (0);
while(true){
if((i__14373 < size__7186__auto__)){
var map__14381 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7185__auto__,i__14373);
var map__14381__$1 = ((((!((map__14381 == null)))?((((map__14381.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14381.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14381):map__14381);
var charge = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14381__$1,cljs.core.cst$kw$charge);
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14381__$1,cljs.core.cst$kw$item);
var item_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14381__$1,cljs.core.cst$kw$item_DASH_name);
cljs.core.chunk_append(b__14374,[cljs.core.str(email_invoicer.core.line_item(reagent.format.currency_format(charge),item,email_invoicer.core.email_line_width,"_")),cljs.core.str("\t"),cljs.core.str(item_name)].join(''));

var G__14385 = (i__14373 + (1));
i__14373 = G__14385;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14374),email_invoicer$core$iter__14371(cljs.core.chunk_rest(s__14372__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14374),null);
}
} else {
var map__14383 = cljs.core.first(s__14372__$2);
var map__14383__$1 = ((((!((map__14383 == null)))?((((map__14383.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14383.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14383):map__14383);
var charge = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14383__$1,cljs.core.cst$kw$charge);
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14383__$1,cljs.core.cst$kw$item);
var item_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14383__$1,cljs.core.cst$kw$item_DASH_name);
return cljs.core.cons([cljs.core.str(email_invoicer.core.line_item(reagent.format.currency_format(charge),item,email_invoicer.core.email_line_width,"_")),cljs.core.str("\t"),cljs.core.str(item_name)].join(''),email_invoicer$core$iter__14371(cljs.core.rest(s__14372__$2)));
}
} else {
return null;
}
break;
}
});})(map__14367,map__14367__$1,office_email,agent_name,business_name,map__14368,map__14368__$1,client_email,client,items))
,null,null));
});})(map__14367,map__14367__$1,office_email,agent_name,business_name,map__14368,map__14368__$1,client_email,client,items))
;
return iter__7187__auto__(items);
})()))),cljs.core.str("\n"),cljs.core.str("\n"),cljs.core.str("Total:"),cljs.core.str("\n"),cljs.core.str(reagent.format.currency_format(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$charge,items))))].join('')))].join('');
}));
email_invoicer.core.user_info_template = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_user_DASH_menu$container_DASH_fluid,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,cljs.core.cst$kw$business_DASH_name,cljs.core.cst$kw$field,cljs.core.cst$kw$label,cljs.core.cst$kw$preamble,"Business Name: "], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_control,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,cljs.core.cst$kw$business_DASH_name,cljs.core.cst$kw$field,cljs.core.cst$kw$text], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,cljs.core.cst$kw$office_DASH_email,cljs.core.cst$kw$field,cljs.core.cst$kw$label,cljs.core.cst$kw$preamble,"Home Office Email: ",cljs.core.cst$kw$placeholder,"...@..."], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_control,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,cljs.core.cst$kw$office_DASH_email,cljs.core.cst$kw$field,cljs.core.cst$kw$email], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,cljs.core.cst$kw$agent_DASH_name,cljs.core.cst$kw$field,cljs.core.cst$kw$label,cljs.core.cst$kw$preamble,"Agent Name: "], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_control,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,cljs.core.cst$kw$agent_DASH_name,cljs.core.cst$kw$field,cljs.core.cst$kw$text], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return email_invoicer.core.download("item_and_client_data.txt",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(email_invoicer.core.client_item_storage) : cljs.core.deref.call(null,email_invoicer.core.client_item_storage))], 0)));
})], null),"Save App Data"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,"file-upload"], null),"Load Client and Item Data",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input_SHARP_file_DASH_upload,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"file",cljs.core.cst$kw$on_DASH_change,email_invoicer.core.handle_data_upload], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
var G__14386 = email_invoicer.core.client_item_storage;
var G__14387 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14386,G__14387) : cljs.core.reset_BANG_.call(null,G__14386,G__14387));
})], null),"Clear Client and Item Data"], null)], null)], null)], null);
email_invoicer.core.invoice_form_template = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container_DASH_fluid,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$field,cljs.core.cst$kw$label,cljs.core.cst$kw$preamble,"Item ID: ",cljs.core.cst$kw$placeholder,"...",cljs.core.cst$kw$id,cljs.core.cst$kw$item], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_control,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$field,cljs.core.cst$kw$text,cljs.core.cst$kw$id,cljs.core.cst$kw$item], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$field,cljs.core.cst$kw$label,cljs.core.cst$kw$preamble,"Item Name: ",cljs.core.cst$kw$placeholder,"...",cljs.core.cst$kw$id,cljs.core.cst$kw$item_DASH_name], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_control,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$field,cljs.core.cst$kw$text,cljs.core.cst$kw$id,cljs.core.cst$kw$item_DASH_name], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$field,cljs.core.cst$kw$label,cljs.core.cst$kw$preamble,"Charge: $",cljs.core.cst$kw$placeholder,"...",cljs.core.cst$kw$id,cljs.core.cst$kw$charge], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_control,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$field,cljs.core.cst$kw$numeric,cljs.core.cst$kw$fmt,"%.2f",cljs.core.cst$kw$id,cljs.core.cst$kw$charge], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,cljs.core.cst$kw$client,cljs.core.cst$kw$field,cljs.core.cst$kw$label,cljs.core.cst$kw$preamble,"Client: "], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_control,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$field,cljs.core.cst$kw$text,cljs.core.cst$kw$id,cljs.core.cst$kw$client], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,cljs.core.cst$kw$client_DASH_email,cljs.core.cst$kw$field,cljs.core.cst$kw$label,cljs.core.cst$kw$preamble,"Client Email: ",cljs.core.cst$kw$placeholder,"...@..."], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_control,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$field,cljs.core.cst$kw$email,cljs.core.cst$kw$id,cljs.core.cst$kw$client_DASH_email], null)], null)], null)], null);
email_invoicer.core.invoice_form_page = (function email_invoicer$core$invoice_form_page(){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button_SHARP_user_DASH_menu_DASH_button$btn$btn_DASH_default,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,email_invoicer.core.toggle_user_menu], null),[cljs.core.str((cljs.core.truth_(cljs.core.cst$kw$display_DASH_user_DASH_menu.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(email_invoicer.core.display_attributes) : cljs.core.deref.call(null,email_invoicer.core.display_attributes))))?"Close ":null)),cljs.core.str("User Menu")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,"Invoice"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h6,cljs.core.cst$kw$business_DASH_name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(email_invoicer.core.home_office) : cljs.core.deref.call(null,email_invoicer.core.home_office)))," Agent: ",cljs.core.cst$kw$agent_DASH_name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(email_invoicer.core.home_office) : cljs.core.deref.call(null,email_invoicer.core.home_office)))], null),(cljs.core.truth_(cljs.core.cst$kw$display_DASH_user_DASH_menu.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(email_invoicer.core.display_attributes) : cljs.core.deref.call(null,email_invoicer.core.display_attributes))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.bind_fields,email_invoicer.core.user_info_template,email_invoicer.core.home_office], null):null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.bind_fields,email_invoicer.core.invoice_form_template,email_invoicer.core.invoice_form_atom,email_invoicer.core.change_invoice_form_event], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_default,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,email_invoicer.core.add_item_to_list], null),"Add Item and Charge"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$list_DASH_group,email_invoicer.core.item_list()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$btn$btn_DASH_default,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(email_invoicer.core.email_link) : cljs.core.deref.call(null,email_invoicer.core.email_link)),cljs.core.cst$kw$target,"blank"], null),"Email Invoice"], null)], null);
});
email_invoicer.core.mount_root = (function email_invoicer$core$mount_root(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [email_invoicer.core.invoice_form_page], null),document.getElementById("app"));
});
email_invoicer.core.init_BANG_ = (function email_invoicer$core$init_BANG_(){
return email_invoicer.core.mount_root();
});
