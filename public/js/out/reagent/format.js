// Compiled by ClojureScript 1.8.51 {}
goog.provide('reagent.format');
goog.require('cljs.core');
goog.require('goog.crypt');
goog.require('goog.crypt.Md5');
goog.require('goog.crypt.Sha384');
goog.require('goog.string');
goog.require('goog.crypt.Sha1');
goog.require('goog.i18n.NumberFormat');
goog.require('goog.i18n.NumberFormatSymbols');
goog.require('goog.crypt.Sha2');
goog.require('goog.i18n.DateTimeFormat');
goog.require('goog.crypt.Sha512');
goog.require('goog.string.format');
goog.require('clojure.string');
goog.require('goog.crypt.Sha256');
reagent.format.add_slashes = (function reagent$format$add_slashes(s){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.mapcat.call(null,(function (c){
if((cljs.core._EQ_.call(null,"\"",c)) || (cljs.core._EQ_.call(null,"'",c))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\\",c], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c], null);
}
}),[cljs.core.str(s)].join('')));
});
reagent.format.center = (function reagent$format$center(text,w){
var c = cljs.core.count.call(null,text);
var l = Math.ceil(((w - c) / (2)));
var r = Math.floor(((w - c) / (2)));
return [cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,l," "))),cljs.core.str(text),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,r," ")))].join('');
});
/**
 * Formats a string using goog.string.format.
 * e.g: (format "Cost: %.2f" 10.0234)
 */
reagent.format.format = (function reagent$format$format(var_args){
var args__19530__auto__ = [];
var len__19523__auto___20043 = arguments.length;
var i__19524__auto___20044 = (0);
while(true){
if((i__19524__auto___20044 < len__19523__auto___20043)){
args__19530__auto__.push((arguments[i__19524__auto___20044]));

var G__20045 = (i__19524__auto___20044 + (1));
i__19524__auto___20044 = G__20045;
continue;
} else {
}
break;
}

var argseq__19531__auto__ = ((((1) < args__19530__auto__.length))?(new cljs.core.IndexedSeq(args__19530__auto__.slice((1)),(0),null)):null);
return reagent.format.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19531__auto__);
});

reagent.format.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

reagent.format.format.cljs$lang$maxFixedArity = (1);

reagent.format.format.cljs$lang$applyTo = (function (seq20041){
var G__20042 = cljs.core.first.call(null,seq20041);
var seq20041__$1 = cljs.core.next.call(null,seq20041);
return reagent.format.format.cljs$core$IFn$_invoke$arity$variadic(G__20042,seq20041__$1);
});
/**
 * Prints formatted output, as per format
 */
reagent.format.printf = (function reagent$format$printf(var_args){
var args__19530__auto__ = [];
var len__19523__auto___20048 = arguments.length;
var i__19524__auto___20049 = (0);
while(true){
if((i__19524__auto___20049 < len__19523__auto___20048)){
args__19530__auto__.push((arguments[i__19524__auto___20049]));

var G__20050 = (i__19524__auto___20049 + (1));
i__19524__auto___20049 = G__20050;
continue;
} else {
}
break;
}

var argseq__19531__auto__ = ((((1) < args__19530__auto__.length))?(new cljs.core.IndexedSeq(args__19530__auto__.slice((1)),(0),null)):null);
return reagent.format.printf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19531__auto__);
});

reagent.format.printf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.print.call(null,cljs.core.apply.call(null,reagent.format.format,fmt,args));
});

reagent.format.printf.cljs$lang$maxFixedArity = (1);

reagent.format.printf.cljs$lang$applyTo = (function (seq20046){
var G__20047 = cljs.core.first.call(null,seq20046);
var seq20046__$1 = cljs.core.next.call(null,seq20046);
return reagent.format.printf.cljs$core$IFn$_invoke$arity$variadic(G__20047,seq20046__$1);
});
/**
 * formats currency using the current locale
 * to change locale set goog.i18n.NumberFormatSymbols eg:
 * (set! goog.i18n.NumberFormatSymbols goog.i18n.NumberFormatSymbols_it_IT)
 * see here for supported locales
 * https://github.com/google/closure-library/blob/master/closure/goog/i18n/compactnumberformatsymbols.js
 *   
 */
reagent.format.currency_format = (function reagent$format$currency_format(n){
return (new goog.i18n.NumberFormat(goog.i18n.NumberFormat.Format.CURRENCY)).format(n);
});
reagent.format.date_format = (function reagent$format$date_format(var_args){
var args__19530__auto__ = [];
var len__19523__auto___20056 = arguments.length;
var i__19524__auto___20057 = (0);
while(true){
if((i__19524__auto___20057 < len__19523__auto___20056)){
args__19530__auto__.push((arguments[i__19524__auto___20057]));

var G__20058 = (i__19524__auto___20057 + (1));
i__19524__auto___20057 = G__20058;
continue;
} else {
}
break;
}

var argseq__19531__auto__ = ((((2) < args__19530__auto__.length))?(new cljs.core.IndexedSeq(args__19530__auto__.slice((2)),(0),null)):null);
return reagent.format.date_format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19531__auto__);
});

reagent.format.date_format.cljs$core$IFn$_invoke$arity$variadic = (function (date,fmt,p__20054){
var vec__20055 = p__20054;
var tz = cljs.core.nth.call(null,vec__20055,(0),null);
var formatter = (new goog.i18n.DateTimeFormat(fmt));
if(cljs.core.truth_(tz)){
return formatter.format(date,tz);
} else {
return formatter.format(date);
}
});

reagent.format.date_format.cljs$lang$maxFixedArity = (2);

reagent.format.date_format.cljs$lang$applyTo = (function (seq20051){
var G__20052 = cljs.core.first.call(null,seq20051);
var seq20051__$1 = cljs.core.next.call(null,seq20051);
var G__20053 = cljs.core.first.call(null,seq20051__$1);
var seq20051__$2 = cljs.core.next.call(null,seq20051__$1);
return reagent.format.date_format.cljs$core$IFn$_invoke$arity$variadic(G__20052,G__20053,seq20051__$2);
});
reagent.format.line_numbers = (function reagent$format$line_numbers(s){
var s__$1 = [cljs.core.str(s)].join('');
return clojure.string.join.call(null,"\n",cljs.core.map_indexed.call(null,((function (s__$1){
return (function (p1__20059_SHARP_,p2__20060_SHARP_){
return [cljs.core.str((p1__20059_SHARP_ + (1))),cljs.core.str(". "),cljs.core.str(p2__20060_SHARP_)].join('');
});})(s__$1))
,clojure.string.split.call(null,s__$1,/\n/)));
});
/**
 * pluralizes the word based on the number of items
 * (util/pluralize ["John"] "lad")
 * (util/pluralize ["John" "James"] "lad")
 * (util/pluralize ["Alice"] "lad" "y" "ies")
 */
reagent.format.pluralize = (function reagent$format$pluralize(var_args){
var args__19530__auto__ = [];
var len__19523__auto___20067 = arguments.length;
var i__19524__auto___20068 = (0);
while(true){
if((i__19524__auto___20068 < len__19523__auto___20067)){
args__19530__auto__.push((arguments[i__19524__auto___20068]));

var G__20069 = (i__19524__auto___20068 + (1));
i__19524__auto___20068 = G__20069;
continue;
} else {
}
break;
}

var argseq__19531__auto__ = ((((1) < args__19530__auto__.length))?(new cljs.core.IndexedSeq(args__19530__auto__.slice((1)),(0),null)):null);
return reagent.format.pluralize.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19531__auto__);
});

reagent.format.pluralize.cljs$core$IFn$_invoke$arity$variadic = (function (items,p__20063){
var vec__20064 = p__20063;
var word = cljs.core.nth.call(null,vec__20064,(0),null);
var ending1 = cljs.core.nth.call(null,vec__20064,(1),null);
var ending2 = cljs.core.nth.call(null,vec__20064,(2),null);
var opts = vec__20064;
var n = cljs.core.count.call(null,items);
var plural = (function (){var G__20065 = cljs.core.count.call(null,opts);
switch (G__20065) {
case (1):
return "s";

break;
case (2):
return ending1;

break;
case (3):
return ending2;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.count.call(null,opts))].join('')));

}
})();
var singular = (function (){var G__20066 = cljs.core.count.call(null,opts);
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"list","list",-1889078086,null),G__20066)){
return "";
} else {
if(cljs.core._EQ_.call(null,(1),G__20066)){
return "";
} else {
if(cljs.core._EQ_.call(null,(2),G__20066)){
return "";
} else {
if(cljs.core._EQ_.call(null,(3),G__20066)){
return ending1;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.count.call(null,opts))].join('')));

}
}
}
}
})();
return [cljs.core.str(n),cljs.core.str(" "),cljs.core.str(word),cljs.core.str(((((1) === n))?singular:plural))].join('');
});

reagent.format.pluralize.cljs$lang$maxFixedArity = (1);

reagent.format.pluralize.cljs$lang$applyTo = (function (seq20061){
var G__20062 = cljs.core.first.call(null,seq20061);
var seq20061__$1 = cljs.core.next.call(null,seq20061);
return reagent.format.pluralize.cljs$core$IFn$_invoke$arity$variadic(G__20062,seq20061__$1);
});
reagent.format.capitalize_words = (function reagent$format$capitalize_words(s){
return clojure.string.join.call(null," ",cljs.core.map.call(null,clojure.string.capitalize,clojure.string.split.call(null,[cljs.core.str(s)].join(''),/ /)));
});
/**
 * removes specified tags, eg:
 * (remove-tags "<p>foo bar</p>" "p")
 */
reagent.format.remove_tags = (function reagent$format$remove_tags(var_args){
var args__19530__auto__ = [];
var len__19523__auto___20073 = arguments.length;
var i__19524__auto___20074 = (0);
while(true){
if((i__19524__auto___20074 < len__19523__auto___20073)){
args__19530__auto__.push((arguments[i__19524__auto___20074]));

var G__20075 = (i__19524__auto___20074 + (1));
i__19524__auto___20074 = G__20075;
continue;
} else {
}
break;
}

var argseq__19531__auto__ = ((((1) < args__19530__auto__.length))?(new cljs.core.IndexedSeq(args__19530__auto__.slice((1)),(0),null)):null);
return reagent.format.remove_tags.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19531__auto__);
});

reagent.format.remove_tags.cljs$core$IFn$_invoke$arity$variadic = (function (s,tags){
if(cljs.core.not.call(null,tags)){
return s;
} else {
var s__$1 = [cljs.core.str(s)].join('');
var tags__$1 = [cljs.core.str("("),cljs.core.str(clojure.string.join.call(null,"|",tags)),cljs.core.str(")")].join('');
var opening = cljs.core.re_pattern.call(null,[cljs.core.str("(?i)<"),cljs.core.str(tags__$1),cljs.core.str("(/?>|(\\s+[^>]*>))")].join(''));
var closing = cljs.core.re_pattern.call(null,[cljs.core.str("(?i)</"),cljs.core.str(tags__$1),cljs.core.str(">")].join(''));
return clojure.string.replace.call(null,clojure.string.replace.call(null,s__$1,opening,""),closing,"");
}
});

reagent.format.remove_tags.cljs$lang$maxFixedArity = (1);

reagent.format.remove_tags.cljs$lang$applyTo = (function (seq20071){
var G__20072 = cljs.core.first.call(null,seq20071);
var seq20071__$1 = cljs.core.next.call(null,seq20071);
return reagent.format.remove_tags.cljs$core$IFn$_invoke$arity$variadic(G__20072,seq20071__$1);
});
reagent.format.encode_uri = (function reagent$format$encode_uri(uri){
return encodeURIComponent(uri);
});

//# sourceMappingURL=format.js.map