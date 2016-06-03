// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__26283 = cljs.core._EQ_;
var expr__26284 = (function (){var or__18453__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e26287){if((e26287 instanceof Error)){
var e = e26287;
return false;
} else {
throw e26287;

}
}})();
if(cljs.core.truth_(or__18453__auto__)){
return or__18453__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__26283.call(null,"true",expr__26284))){
return true;
} else {
if(cljs.core.truth_(pred__26283.call(null,"false",expr__26284))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__26284)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e26289){if((e26289 instanceof Error)){
var e = e26289;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e26289;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__19530__auto__ = [];
var len__19523__auto___26291 = arguments.length;
var i__19524__auto___26292 = (0);
while(true){
if((i__19524__auto___26292 < len__19523__auto___26291)){
args__19530__auto__.push((arguments[i__19524__auto___26292]));

var G__26293 = (i__19524__auto___26292 + (1));
i__19524__auto___26292 = G__26293;
continue;
} else {
}
break;
}

var argseq__19531__auto__ = ((((0) < args__19530__auto__.length))?(new cljs.core.IndexedSeq(args__19530__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__19531__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq26290){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26290));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__26294){
var map__26297 = p__26294;
var map__26297__$1 = ((((!((map__26297 == null)))?((((map__26297.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26297.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26297):map__26297);
var message = cljs.core.get.call(null,map__26297__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__26297__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18453__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18453__auto__)){
return or__18453__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18441__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18441__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18441__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__21710__auto___26459 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21710__auto___26459,ch){
return (function (){
var f__21711__auto__ = (function (){var switch__21598__auto__ = ((function (c__21710__auto___26459,ch){
return (function (state_26428){
var state_val_26429 = (state_26428[(1)]);
if((state_val_26429 === (7))){
var inst_26424 = (state_26428[(2)]);
var state_26428__$1 = state_26428;
var statearr_26430_26460 = state_26428__$1;
(statearr_26430_26460[(2)] = inst_26424);

(statearr_26430_26460[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26429 === (1))){
var state_26428__$1 = state_26428;
var statearr_26431_26461 = state_26428__$1;
(statearr_26431_26461[(2)] = null);

(statearr_26431_26461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26429 === (4))){
var inst_26381 = (state_26428[(7)]);
var inst_26381__$1 = (state_26428[(2)]);
var state_26428__$1 = (function (){var statearr_26432 = state_26428;
(statearr_26432[(7)] = inst_26381__$1);

return statearr_26432;
})();
if(cljs.core.truth_(inst_26381__$1)){
var statearr_26433_26462 = state_26428__$1;
(statearr_26433_26462[(1)] = (5));

} else {
var statearr_26434_26463 = state_26428__$1;
(statearr_26434_26463[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26429 === (15))){
var inst_26388 = (state_26428[(8)]);
var inst_26403 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26388);
var inst_26404 = cljs.core.first.call(null,inst_26403);
var inst_26405 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_26404);
var inst_26406 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_26405)].join('');
var inst_26407 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_26406);
var state_26428__$1 = state_26428;
var statearr_26435_26464 = state_26428__$1;
(statearr_26435_26464[(2)] = inst_26407);

(statearr_26435_26464[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26429 === (13))){
var inst_26412 = (state_26428[(2)]);
var state_26428__$1 = state_26428;
var statearr_26436_26465 = state_26428__$1;
(statearr_26436_26465[(2)] = inst_26412);

(statearr_26436_26465[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26429 === (6))){
var state_26428__$1 = state_26428;
var statearr_26437_26466 = state_26428__$1;
(statearr_26437_26466[(2)] = null);

(statearr_26437_26466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26429 === (17))){
var inst_26410 = (state_26428[(2)]);
var state_26428__$1 = state_26428;
var statearr_26438_26467 = state_26428__$1;
(statearr_26438_26467[(2)] = inst_26410);

(statearr_26438_26467[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26429 === (3))){
var inst_26426 = (state_26428[(2)]);
var state_26428__$1 = state_26428;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26428__$1,inst_26426);
} else {
if((state_val_26429 === (12))){
var inst_26387 = (state_26428[(9)]);
var inst_26401 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_26387,opts);
var state_26428__$1 = state_26428;
if(cljs.core.truth_(inst_26401)){
var statearr_26439_26468 = state_26428__$1;
(statearr_26439_26468[(1)] = (15));

} else {
var statearr_26440_26469 = state_26428__$1;
(statearr_26440_26469[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26429 === (2))){
var state_26428__$1 = state_26428;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26428__$1,(4),ch);
} else {
if((state_val_26429 === (11))){
var inst_26388 = (state_26428[(8)]);
var inst_26393 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26394 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_26388);
var inst_26395 = cljs.core.async.timeout.call(null,(1000));
var inst_26396 = [inst_26394,inst_26395];
var inst_26397 = (new cljs.core.PersistentVector(null,2,(5),inst_26393,inst_26396,null));
var state_26428__$1 = state_26428;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26428__$1,(14),inst_26397);
} else {
if((state_val_26429 === (9))){
var inst_26388 = (state_26428[(8)]);
var inst_26414 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_26415 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26388);
var inst_26416 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26415);
var inst_26417 = [cljs.core.str("Not loading: "),cljs.core.str(inst_26416)].join('');
var inst_26418 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_26417);
var state_26428__$1 = (function (){var statearr_26441 = state_26428;
(statearr_26441[(10)] = inst_26414);

return statearr_26441;
})();
var statearr_26442_26470 = state_26428__$1;
(statearr_26442_26470[(2)] = inst_26418);

(statearr_26442_26470[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26429 === (5))){
var inst_26381 = (state_26428[(7)]);
var inst_26383 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_26384 = (new cljs.core.PersistentArrayMap(null,2,inst_26383,null));
var inst_26385 = (new cljs.core.PersistentHashSet(null,inst_26384,null));
var inst_26386 = figwheel.client.focus_msgs.call(null,inst_26385,inst_26381);
var inst_26387 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_26386);
var inst_26388 = cljs.core.first.call(null,inst_26386);
var inst_26389 = figwheel.client.autoload_QMARK_.call(null);
var state_26428__$1 = (function (){var statearr_26443 = state_26428;
(statearr_26443[(9)] = inst_26387);

(statearr_26443[(8)] = inst_26388);

return statearr_26443;
})();
if(cljs.core.truth_(inst_26389)){
var statearr_26444_26471 = state_26428__$1;
(statearr_26444_26471[(1)] = (8));

} else {
var statearr_26445_26472 = state_26428__$1;
(statearr_26445_26472[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26429 === (14))){
var inst_26399 = (state_26428[(2)]);
var state_26428__$1 = state_26428;
var statearr_26446_26473 = state_26428__$1;
(statearr_26446_26473[(2)] = inst_26399);

(statearr_26446_26473[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26429 === (16))){
var state_26428__$1 = state_26428;
var statearr_26447_26474 = state_26428__$1;
(statearr_26447_26474[(2)] = null);

(statearr_26447_26474[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26429 === (10))){
var inst_26420 = (state_26428[(2)]);
var state_26428__$1 = (function (){var statearr_26448 = state_26428;
(statearr_26448[(11)] = inst_26420);

return statearr_26448;
})();
var statearr_26449_26475 = state_26428__$1;
(statearr_26449_26475[(2)] = null);

(statearr_26449_26475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26429 === (8))){
var inst_26387 = (state_26428[(9)]);
var inst_26391 = figwheel.client.reload_file_state_QMARK_.call(null,inst_26387,opts);
var state_26428__$1 = state_26428;
if(cljs.core.truth_(inst_26391)){
var statearr_26450_26476 = state_26428__$1;
(statearr_26450_26476[(1)] = (11));

} else {
var statearr_26451_26477 = state_26428__$1;
(statearr_26451_26477[(1)] = (12));

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
});})(c__21710__auto___26459,ch))
;
return ((function (switch__21598__auto__,c__21710__auto___26459,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__21599__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__21599__auto____0 = (function (){
var statearr_26455 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26455[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__21599__auto__);

(statearr_26455[(1)] = (1));

return statearr_26455;
});
var figwheel$client$file_reloader_plugin_$_state_machine__21599__auto____1 = (function (state_26428){
while(true){
var ret_value__21600__auto__ = (function (){try{while(true){
var result__21601__auto__ = switch__21598__auto__.call(null,state_26428);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21601__auto__;
}
break;
}
}catch (e26456){if((e26456 instanceof Object)){
var ex__21602__auto__ = e26456;
var statearr_26457_26478 = state_26428;
(statearr_26457_26478[(5)] = ex__21602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26428);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26456;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26479 = state_26428;
state_26428 = G__26479;
continue;
} else {
return ret_value__21600__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__21599__auto__ = function(state_26428){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__21599__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__21599__auto____1.call(this,state_26428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__21599__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__21599__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__21599__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__21599__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__21599__auto__;
})()
;})(switch__21598__auto__,c__21710__auto___26459,ch))
})();
var state__21712__auto__ = (function (){var statearr_26458 = f__21711__auto__.call(null);
(statearr_26458[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21710__auto___26459);

return statearr_26458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21712__auto__);
});})(c__21710__auto___26459,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__26480_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__26480_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_26487 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_26487){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_26485 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_26486 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_26486;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_26485;
}}catch (e26484){if((e26484 instanceof Error)){
var e = e26484;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_26487], null));
} else {
var e = e26484;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_26487))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__26488){
var map__26495 = p__26488;
var map__26495__$1 = ((((!((map__26495 == null)))?((((map__26495.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26495.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26495):map__26495);
var opts = map__26495__$1;
var build_id = cljs.core.get.call(null,map__26495__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__26495,map__26495__$1,opts,build_id){
return (function (p__26497){
var vec__26498 = p__26497;
var map__26499 = cljs.core.nth.call(null,vec__26498,(0),null);
var map__26499__$1 = ((((!((map__26499 == null)))?((((map__26499.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26499.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26499):map__26499);
var msg = map__26499__$1;
var msg_name = cljs.core.get.call(null,map__26499__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26498,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__26498,map__26499,map__26499__$1,msg,msg_name,_,map__26495,map__26495__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__26498,map__26499,map__26499__$1,msg,msg_name,_,map__26495,map__26495__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__26495,map__26495__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__26505){
var vec__26506 = p__26505;
var map__26507 = cljs.core.nth.call(null,vec__26506,(0),null);
var map__26507__$1 = ((((!((map__26507 == null)))?((((map__26507.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26507.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26507):map__26507);
var msg = map__26507__$1;
var msg_name = cljs.core.get.call(null,map__26507__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26506,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__26509){
var map__26519 = p__26509;
var map__26519__$1 = ((((!((map__26519 == null)))?((((map__26519.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26519.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26519):map__26519);
var on_compile_warning = cljs.core.get.call(null,map__26519__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__26519__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__26519,map__26519__$1,on_compile_warning,on_compile_fail){
return (function (p__26521){
var vec__26522 = p__26521;
var map__26523 = cljs.core.nth.call(null,vec__26522,(0),null);
var map__26523__$1 = ((((!((map__26523 == null)))?((((map__26523.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26523.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26523):map__26523);
var msg = map__26523__$1;
var msg_name = cljs.core.get.call(null,map__26523__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26522,(1));
var pred__26525 = cljs.core._EQ_;
var expr__26526 = msg_name;
if(cljs.core.truth_(pred__26525.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__26526))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__26525.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__26526))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__26519,map__26519__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__21710__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21710__auto__,msg_hist,msg_names,msg){
return (function (){
var f__21711__auto__ = (function (){var switch__21598__auto__ = ((function (c__21710__auto__,msg_hist,msg_names,msg){
return (function (state_26734){
var state_val_26735 = (state_26734[(1)]);
if((state_val_26735 === (7))){
var inst_26662 = (state_26734[(2)]);
var state_26734__$1 = state_26734;
if(cljs.core.truth_(inst_26662)){
var statearr_26736_26782 = state_26734__$1;
(statearr_26736_26782[(1)] = (8));

} else {
var statearr_26737_26783 = state_26734__$1;
(statearr_26737_26783[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26735 === (20))){
var inst_26728 = (state_26734[(2)]);
var state_26734__$1 = state_26734;
var statearr_26738_26784 = state_26734__$1;
(statearr_26738_26784[(2)] = inst_26728);

(statearr_26738_26784[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26735 === (27))){
var inst_26724 = (state_26734[(2)]);
var state_26734__$1 = state_26734;
var statearr_26739_26785 = state_26734__$1;
(statearr_26739_26785[(2)] = inst_26724);

(statearr_26739_26785[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26735 === (1))){
var inst_26655 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_26734__$1 = state_26734;
if(cljs.core.truth_(inst_26655)){
var statearr_26740_26786 = state_26734__$1;
(statearr_26740_26786[(1)] = (2));

} else {
var statearr_26741_26787 = state_26734__$1;
(statearr_26741_26787[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26735 === (24))){
var inst_26726 = (state_26734[(2)]);
var state_26734__$1 = state_26734;
var statearr_26742_26788 = state_26734__$1;
(statearr_26742_26788[(2)] = inst_26726);

(statearr_26742_26788[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26735 === (4))){
var inst_26732 = (state_26734[(2)]);
var state_26734__$1 = state_26734;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26734__$1,inst_26732);
} else {
if((state_val_26735 === (15))){
var inst_26730 = (state_26734[(2)]);
var state_26734__$1 = state_26734;
var statearr_26743_26789 = state_26734__$1;
(statearr_26743_26789[(2)] = inst_26730);

(statearr_26743_26789[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26735 === (21))){
var inst_26689 = (state_26734[(2)]);
var state_26734__$1 = state_26734;
var statearr_26744_26790 = state_26734__$1;
(statearr_26744_26790[(2)] = inst_26689);

(statearr_26744_26790[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26735 === (31))){
var inst_26713 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_26734__$1 = state_26734;
if(cljs.core.truth_(inst_26713)){
var statearr_26745_26791 = state_26734__$1;
(statearr_26745_26791[(1)] = (34));

} else {
var statearr_26746_26792 = state_26734__$1;
(statearr_26746_26792[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26735 === (32))){
var inst_26722 = (state_26734[(2)]);
var state_26734__$1 = state_26734;
var statearr_26747_26793 = state_26734__$1;
(statearr_26747_26793[(2)] = inst_26722);

(statearr_26747_26793[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26735 === (33))){
var inst_26711 = (state_26734[(2)]);
var state_26734__$1 = state_26734;
var statearr_26748_26794 = state_26734__$1;
(statearr_26748_26794[(2)] = inst_26711);

(statearr_26748_26794[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26735 === (13))){
var inst_26676 = figwheel.client.heads_up.clear.call(null);
var state_26734__$1 = state_26734;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26734__$1,(16),inst_26676);
} else {
if((state_val_26735 === (22))){
var inst_26693 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26694 = figwheel.client.heads_up.append_message.call(null,inst_26693);
var state_26734__$1 = state_26734;
var statearr_26749_26795 = state_26734__$1;
(statearr_26749_26795[(2)] = inst_26694);

(statearr_26749_26795[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26735 === (36))){
var inst_26720 = (state_26734[(2)]);
var state_26734__$1 = state_26734;
var statearr_26750_26796 = state_26734__$1;
(statearr_26750_26796[(2)] = inst_26720);

(statearr_26750_26796[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26735 === (29))){
var inst_26704 = (state_26734[(2)]);
var state_26734__$1 = state_26734;
var statearr_26751_26797 = state_26734__$1;
(statearr_26751_26797[(2)] = inst_26704);

(statearr_26751_26797[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26735 === (6))){
var inst_26657 = (state_26734[(7)]);
var state_26734__$1 = state_26734;
var statearr_26752_26798 = state_26734__$1;
(statearr_26752_26798[(2)] = inst_26657);

(statearr_26752_26798[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26735 === (28))){
var inst_26700 = (state_26734[(2)]);
var inst_26701 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26702 = figwheel.client.heads_up.display_warning.call(null,inst_26701);
var state_26734__$1 = (function (){var statearr_26753 = state_26734;
(statearr_26753[(8)] = inst_26700);

return statearr_26753;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26734__$1,(29),inst_26702);
} else {
if((state_val_26735 === (25))){
var inst_26698 = figwheel.client.heads_up.clear.call(null);
var state_26734__$1 = state_26734;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26734__$1,(28),inst_26698);
} else {
if((state_val_26735 === (34))){
var inst_26715 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26734__$1 = state_26734;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26734__$1,(37),inst_26715);
} else {
if((state_val_26735 === (17))){
var inst_26682 = (state_26734[(2)]);
var state_26734__$1 = state_26734;
var statearr_26754_26799 = state_26734__$1;
(statearr_26754_26799[(2)] = inst_26682);

(statearr_26754_26799[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26735 === (3))){
var inst_26674 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_26734__$1 = state_26734;
if(cljs.core.truth_(inst_26674)){
var statearr_26755_26800 = state_26734__$1;
(statearr_26755_26800[(1)] = (13));

} else {
var statearr_26756_26801 = state_26734__$1;
(statearr_26756_26801[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26735 === (12))){
var inst_26670 = (state_26734[(2)]);
var state_26734__$1 = state_26734;
var statearr_26757_26802 = state_26734__$1;
(statearr_26757_26802[(2)] = inst_26670);

(statearr_26757_26802[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26735 === (2))){
var inst_26657 = (state_26734[(7)]);
var inst_26657__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_26734__$1 = (function (){var statearr_26758 = state_26734;
(statearr_26758[(7)] = inst_26657__$1);

return statearr_26758;
})();
if(cljs.core.truth_(inst_26657__$1)){
var statearr_26759_26803 = state_26734__$1;
(statearr_26759_26803[(1)] = (5));

} else {
var statearr_26760_26804 = state_26734__$1;
(statearr_26760_26804[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26735 === (23))){
var inst_26696 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_26734__$1 = state_26734;
if(cljs.core.truth_(inst_26696)){
var statearr_26761_26805 = state_26734__$1;
(statearr_26761_26805[(1)] = (25));

} else {
var statearr_26762_26806 = state_26734__$1;
(statearr_26762_26806[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26735 === (35))){
var state_26734__$1 = state_26734;
var statearr_26763_26807 = state_26734__$1;
(statearr_26763_26807[(2)] = null);

(statearr_26763_26807[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26735 === (19))){
var inst_26691 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_26734__$1 = state_26734;
if(cljs.core.truth_(inst_26691)){
var statearr_26764_26808 = state_26734__$1;
(statearr_26764_26808[(1)] = (22));

} else {
var statearr_26765_26809 = state_26734__$1;
(statearr_26765_26809[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26735 === (11))){
var inst_26666 = (state_26734[(2)]);
var state_26734__$1 = state_26734;
var statearr_26766_26810 = state_26734__$1;
(statearr_26766_26810[(2)] = inst_26666);

(statearr_26766_26810[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26735 === (9))){
var inst_26668 = figwheel.client.heads_up.clear.call(null);
var state_26734__$1 = state_26734;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26734__$1,(12),inst_26668);
} else {
if((state_val_26735 === (5))){
var inst_26659 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_26734__$1 = state_26734;
var statearr_26767_26811 = state_26734__$1;
(statearr_26767_26811[(2)] = inst_26659);

(statearr_26767_26811[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26735 === (14))){
var inst_26684 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_26734__$1 = state_26734;
if(cljs.core.truth_(inst_26684)){
var statearr_26768_26812 = state_26734__$1;
(statearr_26768_26812[(1)] = (18));

} else {
var statearr_26769_26813 = state_26734__$1;
(statearr_26769_26813[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26735 === (26))){
var inst_26706 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_26734__$1 = state_26734;
if(cljs.core.truth_(inst_26706)){
var statearr_26770_26814 = state_26734__$1;
(statearr_26770_26814[(1)] = (30));

} else {
var statearr_26771_26815 = state_26734__$1;
(statearr_26771_26815[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26735 === (16))){
var inst_26678 = (state_26734[(2)]);
var inst_26679 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26680 = figwheel.client.heads_up.display_exception.call(null,inst_26679);
var state_26734__$1 = (function (){var statearr_26772 = state_26734;
(statearr_26772[(9)] = inst_26678);

return statearr_26772;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26734__$1,(17),inst_26680);
} else {
if((state_val_26735 === (30))){
var inst_26708 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26709 = figwheel.client.heads_up.display_warning.call(null,inst_26708);
var state_26734__$1 = state_26734;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26734__$1,(33),inst_26709);
} else {
if((state_val_26735 === (10))){
var inst_26672 = (state_26734[(2)]);
var state_26734__$1 = state_26734;
var statearr_26773_26816 = state_26734__$1;
(statearr_26773_26816[(2)] = inst_26672);

(statearr_26773_26816[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26735 === (18))){
var inst_26686 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26687 = figwheel.client.heads_up.display_exception.call(null,inst_26686);
var state_26734__$1 = state_26734;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26734__$1,(21),inst_26687);
} else {
if((state_val_26735 === (37))){
var inst_26717 = (state_26734[(2)]);
var state_26734__$1 = state_26734;
var statearr_26774_26817 = state_26734__$1;
(statearr_26774_26817[(2)] = inst_26717);

(statearr_26774_26817[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26735 === (8))){
var inst_26664 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26734__$1 = state_26734;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26734__$1,(11),inst_26664);
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
});})(c__21710__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__21598__auto__,c__21710__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21599__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21599__auto____0 = (function (){
var statearr_26778 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26778[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21599__auto__);

(statearr_26778[(1)] = (1));

return statearr_26778;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21599__auto____1 = (function (state_26734){
while(true){
var ret_value__21600__auto__ = (function (){try{while(true){
var result__21601__auto__ = switch__21598__auto__.call(null,state_26734);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21601__auto__;
}
break;
}
}catch (e26779){if((e26779 instanceof Object)){
var ex__21602__auto__ = e26779;
var statearr_26780_26818 = state_26734;
(statearr_26780_26818[(5)] = ex__21602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26734);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26779;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26819 = state_26734;
state_26734 = G__26819;
continue;
} else {
return ret_value__21600__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21599__auto__ = function(state_26734){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21599__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21599__auto____1.call(this,state_26734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21599__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21599__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21599__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21599__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21599__auto__;
})()
;})(switch__21598__auto__,c__21710__auto__,msg_hist,msg_names,msg))
})();
var state__21712__auto__ = (function (){var statearr_26781 = f__21711__auto__.call(null);
(statearr_26781[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21710__auto__);

return statearr_26781;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21712__auto__);
});})(c__21710__auto__,msg_hist,msg_names,msg))
);

return c__21710__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__21710__auto___26882 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21710__auto___26882,ch){
return (function (){
var f__21711__auto__ = (function (){var switch__21598__auto__ = ((function (c__21710__auto___26882,ch){
return (function (state_26865){
var state_val_26866 = (state_26865[(1)]);
if((state_val_26866 === (1))){
var state_26865__$1 = state_26865;
var statearr_26867_26883 = state_26865__$1;
(statearr_26867_26883[(2)] = null);

(statearr_26867_26883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26866 === (2))){
var state_26865__$1 = state_26865;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26865__$1,(4),ch);
} else {
if((state_val_26866 === (3))){
var inst_26863 = (state_26865[(2)]);
var state_26865__$1 = state_26865;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26865__$1,inst_26863);
} else {
if((state_val_26866 === (4))){
var inst_26853 = (state_26865[(7)]);
var inst_26853__$1 = (state_26865[(2)]);
var state_26865__$1 = (function (){var statearr_26868 = state_26865;
(statearr_26868[(7)] = inst_26853__$1);

return statearr_26868;
})();
if(cljs.core.truth_(inst_26853__$1)){
var statearr_26869_26884 = state_26865__$1;
(statearr_26869_26884[(1)] = (5));

} else {
var statearr_26870_26885 = state_26865__$1;
(statearr_26870_26885[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26866 === (5))){
var inst_26853 = (state_26865[(7)]);
var inst_26855 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_26853);
var state_26865__$1 = state_26865;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26865__$1,(8),inst_26855);
} else {
if((state_val_26866 === (6))){
var state_26865__$1 = state_26865;
var statearr_26871_26886 = state_26865__$1;
(statearr_26871_26886[(2)] = null);

(statearr_26871_26886[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26866 === (7))){
var inst_26861 = (state_26865[(2)]);
var state_26865__$1 = state_26865;
var statearr_26872_26887 = state_26865__$1;
(statearr_26872_26887[(2)] = inst_26861);

(statearr_26872_26887[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26866 === (8))){
var inst_26857 = (state_26865[(2)]);
var state_26865__$1 = (function (){var statearr_26873 = state_26865;
(statearr_26873[(8)] = inst_26857);

return statearr_26873;
})();
var statearr_26874_26888 = state_26865__$1;
(statearr_26874_26888[(2)] = null);

(statearr_26874_26888[(1)] = (2));


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
});})(c__21710__auto___26882,ch))
;
return ((function (switch__21598__auto__,c__21710__auto___26882,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__21599__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__21599__auto____0 = (function (){
var statearr_26878 = [null,null,null,null,null,null,null,null,null];
(statearr_26878[(0)] = figwheel$client$heads_up_plugin_$_state_machine__21599__auto__);

(statearr_26878[(1)] = (1));

return statearr_26878;
});
var figwheel$client$heads_up_plugin_$_state_machine__21599__auto____1 = (function (state_26865){
while(true){
var ret_value__21600__auto__ = (function (){try{while(true){
var result__21601__auto__ = switch__21598__auto__.call(null,state_26865);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21601__auto__;
}
break;
}
}catch (e26879){if((e26879 instanceof Object)){
var ex__21602__auto__ = e26879;
var statearr_26880_26889 = state_26865;
(statearr_26880_26889[(5)] = ex__21602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26865);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26879;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26890 = state_26865;
state_26865 = G__26890;
continue;
} else {
return ret_value__21600__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__21599__auto__ = function(state_26865){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__21599__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__21599__auto____1.call(this,state_26865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__21599__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__21599__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__21599__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__21599__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__21599__auto__;
})()
;})(switch__21598__auto__,c__21710__auto___26882,ch))
})();
var state__21712__auto__ = (function (){var statearr_26881 = f__21711__auto__.call(null);
(statearr_26881[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21710__auto___26882);

return statearr_26881;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21712__auto__);
});})(c__21710__auto___26882,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__21710__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21710__auto__){
return (function (){
var f__21711__auto__ = (function (){var switch__21598__auto__ = ((function (c__21710__auto__){
return (function (state_26911){
var state_val_26912 = (state_26911[(1)]);
if((state_val_26912 === (1))){
var inst_26906 = cljs.core.async.timeout.call(null,(3000));
var state_26911__$1 = state_26911;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26911__$1,(2),inst_26906);
} else {
if((state_val_26912 === (2))){
var inst_26908 = (state_26911[(2)]);
var inst_26909 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_26911__$1 = (function (){var statearr_26913 = state_26911;
(statearr_26913[(7)] = inst_26908);

return statearr_26913;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26911__$1,inst_26909);
} else {
return null;
}
}
});})(c__21710__auto__))
;
return ((function (switch__21598__auto__,c__21710__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__21599__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__21599__auto____0 = (function (){
var statearr_26917 = [null,null,null,null,null,null,null,null];
(statearr_26917[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__21599__auto__);

(statearr_26917[(1)] = (1));

return statearr_26917;
});
var figwheel$client$enforce_project_plugin_$_state_machine__21599__auto____1 = (function (state_26911){
while(true){
var ret_value__21600__auto__ = (function (){try{while(true){
var result__21601__auto__ = switch__21598__auto__.call(null,state_26911);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21601__auto__;
}
break;
}
}catch (e26918){if((e26918 instanceof Object)){
var ex__21602__auto__ = e26918;
var statearr_26919_26921 = state_26911;
(statearr_26919_26921[(5)] = ex__21602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26911);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26918;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26922 = state_26911;
state_26911 = G__26922;
continue;
} else {
return ret_value__21600__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__21599__auto__ = function(state_26911){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__21599__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__21599__auto____1.call(this,state_26911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__21599__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__21599__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__21599__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__21599__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__21599__auto__;
})()
;})(switch__21598__auto__,c__21710__auto__))
})();
var state__21712__auto__ = (function (){var statearr_26920 = f__21711__auto__.call(null);
(statearr_26920[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21710__auto__);

return statearr_26920;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21712__auto__);
});})(c__21710__auto__))
);

return c__21710__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__26923){
var map__26930 = p__26923;
var map__26930__$1 = ((((!((map__26930 == null)))?((((map__26930.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26930.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26930):map__26930);
var ed = map__26930__$1;
var formatted_exception = cljs.core.get.call(null,map__26930__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__26930__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__26930__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__26932_26936 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__26933_26937 = null;
var count__26934_26938 = (0);
var i__26935_26939 = (0);
while(true){
if((i__26935_26939 < count__26934_26938)){
var msg_26940 = cljs.core._nth.call(null,chunk__26933_26937,i__26935_26939);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26940);

var G__26941 = seq__26932_26936;
var G__26942 = chunk__26933_26937;
var G__26943 = count__26934_26938;
var G__26944 = (i__26935_26939 + (1));
seq__26932_26936 = G__26941;
chunk__26933_26937 = G__26942;
count__26934_26938 = G__26943;
i__26935_26939 = G__26944;
continue;
} else {
var temp__4657__auto___26945 = cljs.core.seq.call(null,seq__26932_26936);
if(temp__4657__auto___26945){
var seq__26932_26946__$1 = temp__4657__auto___26945;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26932_26946__$1)){
var c__19264__auto___26947 = cljs.core.chunk_first.call(null,seq__26932_26946__$1);
var G__26948 = cljs.core.chunk_rest.call(null,seq__26932_26946__$1);
var G__26949 = c__19264__auto___26947;
var G__26950 = cljs.core.count.call(null,c__19264__auto___26947);
var G__26951 = (0);
seq__26932_26936 = G__26948;
chunk__26933_26937 = G__26949;
count__26934_26938 = G__26950;
i__26935_26939 = G__26951;
continue;
} else {
var msg_26952 = cljs.core.first.call(null,seq__26932_26946__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26952);

var G__26953 = cljs.core.next.call(null,seq__26932_26946__$1);
var G__26954 = null;
var G__26955 = (0);
var G__26956 = (0);
seq__26932_26936 = G__26953;
chunk__26933_26937 = G__26954;
count__26934_26938 = G__26955;
i__26935_26939 = G__26956;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__26957){
var map__26960 = p__26957;
var map__26960__$1 = ((((!((map__26960 == null)))?((((map__26960.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26960.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26960):map__26960);
var w = map__26960__$1;
var message = cljs.core.get.call(null,map__26960__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__18441__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18441__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18441__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__26968 = cljs.core.seq.call(null,plugins);
var chunk__26969 = null;
var count__26970 = (0);
var i__26971 = (0);
while(true){
if((i__26971 < count__26970)){
var vec__26972 = cljs.core._nth.call(null,chunk__26969,i__26971);
var k = cljs.core.nth.call(null,vec__26972,(0),null);
var plugin = cljs.core.nth.call(null,vec__26972,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26974 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26968,chunk__26969,count__26970,i__26971,pl_26974,vec__26972,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_26974.call(null,msg_hist);
});})(seq__26968,chunk__26969,count__26970,i__26971,pl_26974,vec__26972,k,plugin))
);
} else {
}

var G__26975 = seq__26968;
var G__26976 = chunk__26969;
var G__26977 = count__26970;
var G__26978 = (i__26971 + (1));
seq__26968 = G__26975;
chunk__26969 = G__26976;
count__26970 = G__26977;
i__26971 = G__26978;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26968);
if(temp__4657__auto__){
var seq__26968__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26968__$1)){
var c__19264__auto__ = cljs.core.chunk_first.call(null,seq__26968__$1);
var G__26979 = cljs.core.chunk_rest.call(null,seq__26968__$1);
var G__26980 = c__19264__auto__;
var G__26981 = cljs.core.count.call(null,c__19264__auto__);
var G__26982 = (0);
seq__26968 = G__26979;
chunk__26969 = G__26980;
count__26970 = G__26981;
i__26971 = G__26982;
continue;
} else {
var vec__26973 = cljs.core.first.call(null,seq__26968__$1);
var k = cljs.core.nth.call(null,vec__26973,(0),null);
var plugin = cljs.core.nth.call(null,vec__26973,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26983 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26968,chunk__26969,count__26970,i__26971,pl_26983,vec__26973,k,plugin,seq__26968__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_26983.call(null,msg_hist);
});})(seq__26968,chunk__26969,count__26970,i__26971,pl_26983,vec__26973,k,plugin,seq__26968__$1,temp__4657__auto__))
);
} else {
}

var G__26984 = cljs.core.next.call(null,seq__26968__$1);
var G__26985 = null;
var G__26986 = (0);
var G__26987 = (0);
seq__26968 = G__26984;
chunk__26969 = G__26985;
count__26970 = G__26986;
i__26971 = G__26987;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args26988 = [];
var len__19523__auto___26991 = arguments.length;
var i__19524__auto___26992 = (0);
while(true){
if((i__19524__auto___26992 < len__19523__auto___26991)){
args26988.push((arguments[i__19524__auto___26992]));

var G__26993 = (i__19524__auto___26992 + (1));
i__19524__auto___26992 = G__26993;
continue;
} else {
}
break;
}

var G__26990 = args26988.length;
switch (G__26990) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26988.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__19530__auto__ = [];
var len__19523__auto___26999 = arguments.length;
var i__19524__auto___27000 = (0);
while(true){
if((i__19524__auto___27000 < len__19523__auto___26999)){
args__19530__auto__.push((arguments[i__19524__auto___27000]));

var G__27001 = (i__19524__auto___27000 + (1));
i__19524__auto___27000 = G__27001;
continue;
} else {
}
break;
}

var argseq__19531__auto__ = ((((0) < args__19530__auto__.length))?(new cljs.core.IndexedSeq(args__19530__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19531__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__26996){
var map__26997 = p__26996;
var map__26997__$1 = ((((!((map__26997 == null)))?((((map__26997.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26997.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26997):map__26997);
var opts = map__26997__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq26995){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26995));
});

//# sourceMappingURL=client.js.map