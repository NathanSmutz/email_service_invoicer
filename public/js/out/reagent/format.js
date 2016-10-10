// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
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
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (c){
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\"",c)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("'",c))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\\",c], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c], null);
}
}),cljs.core.array_seq([[cljs.core.str(s)].join('')], 0)));
});
reagent.format.center = (function reagent$format$center(text,w){
var c = cljs.core.count(text);
var l = Math.ceil(((w - c) / (2)));
var r = Math.floor(((w - c) / (2)));
return [cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(l," "))),cljs.core.str(text),cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(r," ")))].join('');
});
/**
 * Formats a string using goog.string.format.
 * e.g: (format "Cost: %.2f" 10.0234)
 */
reagent.format.format = (function reagent$format$format(var_args){
var args__7489__auto__ = [];
var len__7482__auto___12760 = arguments.length;
var i__7483__auto___12761 = (0);
while(true){
if((i__7483__auto___12761 < len__7482__auto___12760)){
args__7489__auto__.push((arguments[i__7483__auto___12761]));

var G__12762 = (i__7483__auto___12761 + (1));
i__7483__auto___12761 = G__12762;
continue;
} else {
}
break;
}

var argseq__7490__auto__ = ((((1) < args__7489__auto__.length))?(new cljs.core.IndexedSeq(args__7489__auto__.slice((1)),(0),null)):null);
return reagent.format.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7490__auto__);
});

reagent.format.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args);
});

reagent.format.format.cljs$lang$maxFixedArity = (1);

reagent.format.format.cljs$lang$applyTo = (function (seq12758){
var G__12759 = cljs.core.first(seq12758);
var seq12758__$1 = cljs.core.next(seq12758);
return reagent.format.format.cljs$core$IFn$_invoke$arity$variadic(G__12759,seq12758__$1);
});

/**
 * Prints formatted output, as per format
 */
reagent.format.printf = (function reagent$format$printf(var_args){
var args__7489__auto__ = [];
var len__7482__auto___12765 = arguments.length;
var i__7483__auto___12766 = (0);
while(true){
if((i__7483__auto___12766 < len__7482__auto___12765)){
args__7489__auto__.push((arguments[i__7483__auto___12766]));

var G__12767 = (i__7483__auto___12766 + (1));
i__7483__auto___12766 = G__12767;
continue;
} else {
}
break;
}

var argseq__7490__auto__ = ((((1) < args__7489__auto__.length))?(new cljs.core.IndexedSeq(args__7489__auto__.slice((1)),(0),null)):null);
return reagent.format.printf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7490__auto__);
});

reagent.format.printf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$3(reagent.format.format,fmt,args)], 0));
});

reagent.format.printf.cljs$lang$maxFixedArity = (1);

reagent.format.printf.cljs$lang$applyTo = (function (seq12763){
var G__12764 = cljs.core.first(seq12763);
var seq12763__$1 = cljs.core.next(seq12763);
return reagent.format.printf.cljs$core$IFn$_invoke$arity$variadic(G__12764,seq12763__$1);
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
var args__7489__auto__ = [];
var len__7482__auto___12775 = arguments.length;
var i__7483__auto___12776 = (0);
while(true){
if((i__7483__auto___12776 < len__7482__auto___12775)){
args__7489__auto__.push((arguments[i__7483__auto___12776]));

var G__12777 = (i__7483__auto___12776 + (1));
i__7483__auto___12776 = G__12777;
continue;
} else {
}
break;
}

var argseq__7490__auto__ = ((((2) < args__7489__auto__.length))?(new cljs.core.IndexedSeq(args__7489__auto__.slice((2)),(0),null)):null);
return reagent.format.date_format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7490__auto__);
});

reagent.format.date_format.cljs$core$IFn$_invoke$arity$variadic = (function (date,fmt,p__12771){
var vec__12772 = p__12771;
var tz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12772,(0),null);
var formatter = (new goog.i18n.DateTimeFormat(fmt));
if(cljs.core.truth_(tz)){
return formatter.format(date,tz);
} else {
return formatter.format(date);
}
});

reagent.format.date_format.cljs$lang$maxFixedArity = (2);

reagent.format.date_format.cljs$lang$applyTo = (function (seq12768){
var G__12769 = cljs.core.first(seq12768);
var seq12768__$1 = cljs.core.next(seq12768);
var G__12770 = cljs.core.first(seq12768__$1);
var seq12768__$2 = cljs.core.next(seq12768__$1);
return reagent.format.date_format.cljs$core$IFn$_invoke$arity$variadic(G__12769,G__12770,seq12768__$2);
});

reagent.format.line_numbers = (function reagent$format$line_numbers(s){
var s__$1 = [cljs.core.str(s)].join('');
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (s__$1){
return (function (p1__12778_SHARP_,p2__12779_SHARP_){
return [cljs.core.str((p1__12778_SHARP_ + (1))),cljs.core.str(". "),cljs.core.str(p2__12779_SHARP_)].join('');
});})(s__$1))
,clojure.string.split.cljs$core$IFn$_invoke$arity$2(s__$1,/\n/)));
});
/**
 * pluralizes the word based on the number of items
 * (util/pluralize ["John"] "lad")
 * (util/pluralize ["John" "James"] "lad")
 * (util/pluralize ["Alice"] "lad" "y" "ies")
 */
reagent.format.pluralize = (function reagent$format$pluralize(var_args){
var args__7489__auto__ = [];
var len__7482__auto___12788 = arguments.length;
var i__7483__auto___12789 = (0);
while(true){
if((i__7483__auto___12789 < len__7482__auto___12788)){
args__7489__auto__.push((arguments[i__7483__auto___12789]));

var G__12790 = (i__7483__auto___12789 + (1));
i__7483__auto___12789 = G__12790;
continue;
} else {
}
break;
}

var argseq__7490__auto__ = ((((1) < args__7489__auto__.length))?(new cljs.core.IndexedSeq(args__7489__auto__.slice((1)),(0),null)):null);
return reagent.format.pluralize.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7490__auto__);
});

reagent.format.pluralize.cljs$core$IFn$_invoke$arity$variadic = (function (items,p__12782){
var vec__12783 = p__12782;
var word = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12783,(0),null);
var ending1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12783,(1),null);
var ending2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12783,(2),null);
var opts = vec__12783;
var n = cljs.core.count(items);
var plural = (function (){var G__12786 = cljs.core.count(opts);
switch (G__12786) {
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
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.count(opts))].join('')));

}
})();
var singular = (function (){var G__12787 = cljs.core.count(opts);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$list,G__12787)){
return "";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),G__12787)){
return "";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),G__12787)){
return "";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),G__12787)){
return ending1;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.count(opts))].join('')));

}
}
}
}
})();
return [cljs.core.str(n),cljs.core.str(" "),cljs.core.str(word),cljs.core.str(((((1) === n))?singular:plural))].join('');
});

reagent.format.pluralize.cljs$lang$maxFixedArity = (1);

reagent.format.pluralize.cljs$lang$applyTo = (function (seq12780){
var G__12781 = cljs.core.first(seq12780);
var seq12780__$1 = cljs.core.next(seq12780);
return reagent.format.pluralize.cljs$core$IFn$_invoke$arity$variadic(G__12781,seq12780__$1);
});

reagent.format.capitalize_words = (function reagent$format$capitalize_words(s){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.capitalize,clojure.string.split.cljs$core$IFn$_invoke$arity$2([cljs.core.str(s)].join(''),/ /)));
});
/**
 * removes specified tags, eg:
 * (remove-tags "<p>foo bar</p>" "p")
 */
reagent.format.remove_tags = (function reagent$format$remove_tags(var_args){
var args__7489__auto__ = [];
var len__7482__auto___12794 = arguments.length;
var i__7483__auto___12795 = (0);
while(true){
if((i__7483__auto___12795 < len__7482__auto___12794)){
args__7489__auto__.push((arguments[i__7483__auto___12795]));

var G__12796 = (i__7483__auto___12795 + (1));
i__7483__auto___12795 = G__12796;
continue;
} else {
}
break;
}

var argseq__7490__auto__ = ((((1) < args__7489__auto__.length))?(new cljs.core.IndexedSeq(args__7489__auto__.slice((1)),(0),null)):null);
return reagent.format.remove_tags.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7490__auto__);
});

reagent.format.remove_tags.cljs$core$IFn$_invoke$arity$variadic = (function (s,tags){
if(cljs.core.not(tags)){
return s;
} else {
var s__$1 = [cljs.core.str(s)].join('');
var tags__$1 = [cljs.core.str("("),cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",tags)),cljs.core.str(")")].join('');
var opening = cljs.core.re_pattern([cljs.core.str("(?i)<"),cljs.core.str(tags__$1),cljs.core.str("(/?>|(\\s+[^>]*>))")].join(''));
var closing = cljs.core.re_pattern([cljs.core.str("(?i)</"),cljs.core.str(tags__$1),cljs.core.str(">")].join(''));
return clojure.string.replace(clojure.string.replace(s__$1,opening,""),closing,"");
}
});

reagent.format.remove_tags.cljs$lang$maxFixedArity = (1);

reagent.format.remove_tags.cljs$lang$applyTo = (function (seq12792){
var G__12793 = cljs.core.first(seq12792);
var seq12792__$1 = cljs.core.next(seq12792);
return reagent.format.remove_tags.cljs$core$IFn$_invoke$arity$variadic(G__12793,seq12792__$1);
});

reagent.format.encode_uri = (function reagent$format$encode_uri(uri){
return encodeURIComponent(uri);
});
