// Compiled by ClojureScript 1.8.51 {}
goog.provide('email_invoicer.core');
goog.require('cljs.core');
goog.require('reagent.format');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('reagent.session');
goog.require('plato.core');
goog.require('reagent_forms.core');
email_invoicer.core.email_line_width = (40);
if(typeof email_invoicer.core.display_attributes !== 'undefined'){
} else {
email_invoicer.core.display_attributes = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display-user-menu","display-user-menu",-1518074388),false], null));
}
if(typeof email_invoicer.core.home_office !== 'undefined'){
} else {
email_invoicer.core.home_office = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof email_invoicer.core.invoice_form_atom !== 'undefined'){
} else {
email_invoicer.core.invoice_form_atom = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.PersistentVector.EMPTY], null));
}
if(typeof email_invoicer.core.client_item_storage !== 'undefined'){
} else {
email_invoicer.core.client_item_storage = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
plato.core.restore_atom_BANG_.call(null,"home-office",email_invoicer.core.home_office);
plato.core.keep_updated_BANG_.call(null,"home-office",email_invoicer.core.home_office);
plato.core.restore_atom_BANG_.call(null,"client-item-storage",email_invoicer.core.client_item_storage);
plato.core.keep_updated_BANG_.call(null,"client-item-storage",email_invoicer.core.client_item_storage);
/**
 * Stores the client and price of an item
 */
email_invoicer.core.store_item_details = (function email_invoicer$core$store_item_details(){
cljs.core.swap_BANG_.call(null,email_invoicer.core.client_item_storage,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item","item",249373802),cljs.core.keyword.call(null,new cljs.core.Keyword(null,"item","item",249373802).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,email_invoicer.core.invoice_form_atom)))], null),cljs.core.merge,cljs.core.select_keys.call(null,cljs.core.deref.call(null,email_invoicer.core.invoice_form_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"charge","charge",426796560)], null)));

return cljs.core.swap_BANG_.call(null,email_invoicer.core.client_item_storage,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client","client",-1323448117),cljs.core.keyword.call(null,new cljs.core.Keyword(null,"client","client",-1323448117).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,email_invoicer.core.invoice_form_atom)))], null),cljs.core.merge,cljs.core.select_keys.call(null,cljs.core.deref.call(null,email_invoicer.core.invoice_form_atom),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-email","client-email",-548011185)], null)));
});
/**
 * Event for invoice form
 */
email_invoicer.core.change_invoice_form_event = (function email_invoicer$core$change_invoice_form_event(p__25882,value,doc){
var vec__25885 = p__25882;
var id = cljs.core.nth.call(null,vec__25885,(0),null);
var ids = cljs.core.nthnext.call(null,vec__25885,(1));
cljs.core.println.call(null,id,":",ids);

var G__25886 = (((id instanceof cljs.core.Keyword))?id.fqn:null);
switch (G__25886) {
case "client":
var temp__4657__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,email_invoicer.core.client_item_storage),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,cljs.core.keyword.call(null,value)], null));
if(cljs.core.truth_(temp__4657__auto__)){
var saved_info = temp__4657__auto__;
return cljs.core.merge.call(null,doc,saved_info);
} else {
return null;
}

break;
case "item":
var temp__4657__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,email_invoicer.core.client_item_storage),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,cljs.core.keyword.call(null,value)], null));
if(cljs.core.truth_(temp__4657__auto__)){
var saved_info = temp__4657__auto__;
return cljs.core.merge.call(null,doc,saved_info,cljs.core.get_in.call(null,cljs.core.deref.call(null,email_invoicer.core.client_item_storage),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client","client",-1323448117),cljs.core.keyword.call(null,new cljs.core.Keyword(null,"client","client",-1323448117).cljs$core$IFn$_invoke$arity$1(saved_info))], null)));
} else {
return null;
}

break;
default:
return null;

}
});
email_invoicer.core.toggle_user_menu = (function email_invoicer$core$toggle_user_menu(){
return cljs.core.swap_BANG_.call(null,email_invoicer.core.display_attributes,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"display-user-menu","display-user-menu",-1518074388)], null),cljs.core.not);
});
email_invoicer.core.add_item_to_list = (function email_invoicer$core$add_item_to_list(){
email_invoicer.core.store_item_details.call(null);

return cljs.core.swap_BANG_.call(null,email_invoicer.core.invoice_form_atom,(function (p1__25888_SHARP_){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.update_in.call(null,p1__25888_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938)], null),cljs.core.conj,cljs.core.select_keys.call(null,cljs.core.deref.call(null,email_invoicer.core.invoice_form_atom),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item","item",249373802),new cljs.core.Keyword(null,"charge","charge",426796560),new cljs.core.Keyword(null,"item-num","item-num",-2083960904)], null))),new cljs.core.Keyword(null,"item","item",249373802),null),new cljs.core.Keyword(null,"charge","charge",426796560),null);
}));
});
email_invoicer.core.remove_from_vector = (function email_invoicer$core$remove_from_vector(v,i){
return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.subvec.call(null,v,(0),i),cljs.core.subvec.call(null,v,(i + (1)))));
});
email_invoicer.core.item_list = (function email_invoicer$core$item_list(){
return cljs.core.map_indexed.call(null,(function (i,item){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",-843562308),[cljs.core.str(new cljs.core.Keyword(null,"item","item",249373802).cljs$core$IFn$_invoke$arity$1(item)),cljs.core.str(" $"),cljs.core.str(new cljs.core.Keyword(null,"charge","charge",426796560).cljs$core$IFn$_invoke$arity$1(item))].join(''),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.delete-button","button.delete-button",-1297875331),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,email_invoicer.core.invoice_form_atom,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938)], null),email_invoicer.core.remove_from_vector,i);
})], null),"x"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null));
}),new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,email_invoicer.core.invoice_form_atom)));
});
email_invoicer.core.line_item = (function email_invoicer$core$line_item(left_item,right_item,width,fill_char){
var l_str = [cljs.core.str(left_item)].join('');
var r_str = [cljs.core.str(right_item)].join('');
var l_width = cljs.core.count.call(null,l_str);
var r_width = cljs.core.count.call(null,r_str);
var fill_width = ((width - l_width) - r_width);
var filler = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,fill_width,fill_char));
return [cljs.core.str(l_str),cljs.core.str(filler),cljs.core.str(r_str)].join('');
});
email_invoicer.core.email_link = reagent.ratom.make_reaction.call(null,(function (){
return [cljs.core.str("mailto:"),cljs.core.str(new cljs.core.Keyword(null,"client-email","client-email",-548011185).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,email_invoicer.core.invoice_form_atom))),cljs.core.str("?"),cljs.core.str("cc="),cljs.core.str(new cljs.core.Keyword(null,"office-email","office-email",2088992971).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,email_invoicer.core.home_office))),cljs.core.str("&subject="),cljs.core.str(reagent.format.encode_uri.call(null,[cljs.core.str("Invoice from "),cljs.core.str(new cljs.core.Keyword(null,"business-name","business-name",1397535689).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,email_invoicer.core.home_office)))].join(''))),cljs.core.str("&body="),cljs.core.str(reagent.format.encode_uri.call(null,[cljs.core.str("Invoice"),cljs.core.str("\n"),cljs.core.str(new cljs.core.Keyword(null,"business-name","business-name",1397535689).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,email_invoicer.core.home_office))),cljs.core.str("\n"),cljs.core.str("\n"),cljs.core.str("Bill To: "),cljs.core.str(new cljs.core.Keyword(null,"client","client",-1323448117).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,email_invoicer.core.invoice_form_atom))),cljs.core.str("\n"),cljs.core.str("\n"),cljs.core.str("Serviced by: "),cljs.core.str(new cljs.core.Keyword(null,"agent-name","agent-name",-916187942).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,email_invoicer.core.home_office))),cljs.core.str("\n"),cljs.core.str(email_invoicer.core.line_item.call(null,"Charge","Item",email_invoicer.core.email_line_width,"_")),cljs.core.str("\n"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"\n",(function (){var iter__19233__auto__ = (function email_invoicer$core$iter__25889(s__25890){
return (new cljs.core.LazySeq(null,(function (){
var s__25890__$1 = s__25890;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__25890__$1);
if(temp__4657__auto__){
var s__25890__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25890__$2)){
var c__19231__auto__ = cljs.core.chunk_first.call(null,s__25890__$2);
var size__19232__auto__ = cljs.core.count.call(null,c__19231__auto__);
var b__25892 = cljs.core.chunk_buffer.call(null,size__19232__auto__);
if((function (){var i__25891 = (0);
while(true){
if((i__25891 < size__19232__auto__)){
var item = cljs.core._nth.call(null,c__19231__auto__,i__25891);
cljs.core.chunk_append.call(null,b__25892,email_invoicer.core.line_item.call(null,[cljs.core.str("$"),cljs.core.str(new cljs.core.Keyword(null,"charge","charge",426796560).cljs$core$IFn$_invoke$arity$1(item))].join(''),new cljs.core.Keyword(null,"item","item",249373802).cljs$core$IFn$_invoke$arity$1(item),email_invoicer.core.email_line_width,"_"));

var G__25893 = (i__25891 + (1));
i__25891 = G__25893;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25892),email_invoicer$core$iter__25889.call(null,cljs.core.chunk_rest.call(null,s__25890__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25892),null);
}
} else {
var item = cljs.core.first.call(null,s__25890__$2);
return cljs.core.cons.call(null,email_invoicer.core.line_item.call(null,[cljs.core.str("$"),cljs.core.str(new cljs.core.Keyword(null,"charge","charge",426796560).cljs$core$IFn$_invoke$arity$1(item))].join(''),new cljs.core.Keyword(null,"item","item",249373802).cljs$core$IFn$_invoke$arity$1(item),email_invoicer.core.email_line_width,"_"),email_invoicer$core$iter__25889.call(null,cljs.core.rest.call(null,s__25890__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19233__auto__.call(null,new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,email_invoicer.core.invoice_form_atom)));
})()))),cljs.core.str("\n"),cljs.core.str("\n"),cljs.core.str("\n"),cljs.core.str(email_invoicer.core.line_item.call(null,"Total",[cljs.core.str("$"),cljs.core.str(cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,new cljs.core.Keyword(null,"charge","charge",426796560),new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,email_invoicer.core.invoice_form_atom)))))].join(''),email_invoicer.core.email_line_width,"_"))].join('')))].join('');
}));
email_invoicer.core.user_info_template = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#user-menu.container-fluid","div#user-menu.container-fluid",1321872927),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"business-name","business-name",1397535689),new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"preamble","preamble",1641040241),"Business Name: "], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"business-name","business-name",1397535689),new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"text","text",-1790561697)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"office-email","office-email",2088992971),new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"preamble","preamble",1641040241),"Home Office Email: ",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"...@..."], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"office-email","office-email",2088992971),new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"email","email",1415816706)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"agent-name","agent-name",-916187942),new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"preamble","preamble",1641040241),"Agent Name: "], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"agent-name","agent-name",-916187942),new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"text","text",-1790561697)], null)], null)], null)], null);
email_invoicer.core.invoice_form_template = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container-fluid","div.container-fluid",3929737),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"preamble","preamble",1641040241),"Item: ",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"...",new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"item","item",249373802)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"item","item",249373802)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"preamble","preamble",1641040241),"Charge: $",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"...",new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"charge","charge",426796560)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"numeric","numeric",-1495594714),new cljs.core.Keyword(null,"fmt","fmt",332300772),"%.2f",new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"charge","charge",426796560)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"preamble","preamble",1641040241),"Client: "], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"client","client",-1323448117)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"client-email","client-email",-548011185),new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"preamble","preamble",1641040241),"Client Email: ",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"...@..."], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"client-email","client-email",-548011185)], null)], null)], null)], null);
email_invoicer.core.invoice_form_page = (function email_invoicer$core$invoice_form_page(){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#user-menu-button.btn.btn-default","button#user-menu-button.btn.btn-default",-559707476),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),email_invoicer.core.toggle_user_menu], null),[cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"display-user-menu","display-user-menu",-1518074388).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,email_invoicer.core.display_attributes)))?"Close ":null)),cljs.core.str("User Menu")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Invoice"], null),(cljs.core.truth_(new cljs.core.Keyword(null,"display-user-menu","display-user-menu",-1518074388).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,email_invoicer.core.display_attributes)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.bind_fields,email_invoicer.core.user_info_template,email_invoicer.core.home_office], null):null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.bind_fields,email_invoicer.core.invoice_form_template,email_invoicer.core.invoice_form_atom,email_invoicer.core.change_invoice_form_event], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default","button.btn.btn-default",-991846011),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),email_invoicer.core.add_item_to_list], null),"Add Item and Charge"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.list-group","ul.list-group",-1445267512),email_invoicer.core.item_list.call(null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-default","a.btn.btn-default",1697165854),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),cljs.core.deref.call(null,email_invoicer.core.email_link),new cljs.core.Keyword(null,"target","target",253001721),"blank"], null),"Email Invoice"], null)], null);
});
email_invoicer.core.mount_root = (function email_invoicer$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [email_invoicer.core.invoice_form_page], null),document.getElementById("app"));
});
email_invoicer.core.init_BANG_ = (function email_invoicer$core$init_BANG_(){
return email_invoicer.core.mount_root.call(null);
});

//# sourceMappingURL=core.js.map