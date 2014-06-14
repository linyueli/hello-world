function openImageChooserDialog(C){window._imageChooserDefered=new $.Deferred();C=$.extend({},C);var D=C.title||translate("fileManager.selectImage");var E=C.width||850;var A=C.filetype||"pic";var F=C.id||"wp-picmanage_panel";var B=C.zIndex||1003;wp_floatpanel(parseToURL("wp_widgets","common_pic_chooser",{filetype:A}),{title:D,id:F,width:E,overlay:true,isCenter:true,swfFix:true,zIndex:B});if(!C.cancelNotCloseDialog){window._imageChooserDefered.fail(function(){$.modal.close()})}return window._imageChooserDefered.promise()}function openMyDocChooserDialog(D){window._myDocChooserDefered=new $.Deferred();D=$.extend({},D);var E=D.title||translate("fileManager.myFile"),F=D.width||850,B=D.isCenter||true,G=D.id||"wp-file_explore",C=D.zIndex||1003,A=D.overlay||true;wp_floatpanel(parseToURL("wp_fileexplore","file_explore",{"geturl":"1"}),{swfFix:true,title:E,width:F,isCenter:B,id:G,zIndex:C,overlay:A});return window._myDocChooserDefered.promise()}function transferToPageSetDialog(I,H,C){window._pagesetDefered=new $.Deferred();C=$.extend({},C);var G=window;if(C.iframe){G=parent}var E=C.title||translate("page.add");var D=C.mode||"create";var F="";if(D=="edit"){var A=C.pageid;F=parseToURL("wp_page","editpage",{id:A})}else{var B=C.createparam||{};F=parseToURL("wp_page","addpage",B)}$.get(F,function(J){$(I).html(J).show();$(H).hide();wp_update_floatpanel($("#wp-manage_menu"),E,376,function(K){K.find(".wp-panel_button").hide();K.find("#page_set_prop_div .wp-panel_button").show()})}).error(function(K,J,L){wp_alert((L||J)+"(edit/add a page).<br/>"+translate("Request failed!"))});return window._pagesetDefered.promise()}function transferToPageSetDialogcur(K,J,E){window._pagesetDefered=new $.Deferred();E=$.extend({},E);var I=window;if(E.iframe){I=parent}var G=E.title||translate("page.add");var F=E.mode||"create";var H="";var A=E.pageid;var B=E.page_id;var C=E.blockid;if(F=="edit"){H=parseToURL("navigation","editpage",{id:A,page_id:B,blockid:C})}else{var D=E.createparam||{};H=parseToURL("navigation","addpage",{page_id:B,blockid:C,parentid:A})}$.get(H,function(L){$(K).html(L).show();$(J).hide()}).error(function(M,L,N){wp_alert((N||L)+"(edit/add a navigation page).<br/>"+translate("Request failed!"))});return window._pagesetDefered.promise()}function openPageSetDialog(C){window._pagesetDefered=new $.Deferred();C=$.extend({},C);var D=C.title||translate("page.add");var E=C.width||400;var A=C.mode||"create";var F="";if(A=="edit"){var G=C.pageid;F=parseToURL("wp_page","editpage",{id:G})}else{E=400;var B={};if(C.mtype){B._mtype=C.mtype}if(C.parentid){B.parentid=C.parentid}F=parseToURL("wp_page","addpage",B)}wp_floatpanel(F,{title:D,contentClass:"wp-site-set_panel_c",id:"wp-add_page",overlay:true,isCenter:true,width:E,zIndex:1002,cache:false,open:function(H){if(C.callback&&$.isFunction(C.callback)){$(H).bind("addPageLink",function(I,J){C.callback(J)})}}});if(!C.cancelDefaultOp){window._pagesetDefered.done(function(H){if(H.refresh){$.saveLayout.save(true);window.location.reload();$("#wp-add_page").triggerHandler("wpdialogclose")}else{setTimeout(function(){$.saveLayout.save(true);window.location.href=H.forward},100)}});window._pagesetDefered.fail(function(){$("#wp-add_page").triggerHandler("wpdialogclose")})}return window._pagesetDefered.promise()}function setModuleLink(B,A){openPageSetDialog({"mtype":B,"callback":A})}function initFrame(E,F,C){var K=E,G=K.contentWindow.document.body.scrollHeight,I=K.contentWindow.document.documentElement.scrollHeight,D=Math.max;var A=$(K).closest(".wp-floatpanel_dialog"),J=0,M=D(G,I);M+=1;if($.browser.msie){M=M+25}A.find("."+F).siblings().each(function(P,O){J+=$(O).outerHeight(true)});var B=function(P){var O=parseFloat(P);if(isNaN(O)){return 0}return O};var L=B(C),H=L?L:$(document).height(),N=H-J-10;if(N<M){M=N}E.height=D(M,200);$(K).closest(".wp-floatpanel_dialog").triggerHandler("wpdialogsetpos")}(function(C){var A={};C.multi_exec_once=function(D,E,F){var G=A[D];if(G!=null){clearTimeout(G);delete A[D]}G=setTimeout(E,F);A[D]=G};var B={};C.beforeLoaded={add:function(D,F,E){if(C.isFunction(E)){if(!B[D]){B[D]={}}B[D][F]=E}},run:function(D,F,G){var E=B[D];if(typeof E=="undefined"){return false}E=E[F];if(C.isFunction(E)){return E(G)}return false}}})(jQuery);function wp_update_floatpanel(B,H,G,A){var E=B.find(".wp-title > h2"),F=E.html();B.width(G);if(H){E.data("origin_title",F)}else{H=F}E.html(H);if(A&&$.isFunction(A)){A(B)}var I=window,C=$(I).width(),K=$(I).height(),D=Math.floor,J=B.outerHeight(true);B.css({"left":D((C-G)/2),"top":D((K-J)/2)})}(function(C,B){var A=".wpcstselect";C.widget("wp.cstselect",{options:{selectclass:"wp-diy-selected"},_create:function(){var E=this;var D=E.options.selectclass;if(D.length==0){D="wp-diy-selected"}if(E.element.prop("multiple")){return}E._doinit(E).done(function(F,J){var G=F,I=G.next("."+D+"-outside").find("."+D+"");setTimeout(function(){var N=I.children("."+D+"-left"),M=N.siblings("."+D+"-button").outerWidth()+2,L=E._int(N.css("paddingLeft"))+E._int(N.css("paddingRight")),K=I.width()-M-L;if(K<=0){K=Math.max(65,G.width())-L-16}N.width(K).attr("val",G.val()).html(G.find("option:selected").html());N=M=K=null},50);I.bind("click"+A,function(K){if(E.options.disabled||!J.length){return}var M=C(J).appendTo("body"),N=M.outerHeight(true);E._selected(M,G.val());if(M.is(":hidden")){var L=C(this);M.find("li").bind("mouseenter"+A,function(O){C(this).addClass("local").siblings().removeClass("local")}).bind("mouseleave"+A,function(O){C(this).removeClass("local")}).bind("click"+A,function(O){var Q=C(this),P=Q.attr("val");L.children("."+D+"-left").html(Q.html()).attr("val",P);G.val(P).trigger("change")}).end().slideDown("slow",function(){var S=C(this);var T=S[0],Q=T.clientHeight,R=S.find("li.local");if(R.size()>0){var P=C._parseFloat(S.css("top")),O=P+R[0].offsetTop-T.offsetTop+R.height();if(Q<O){T.scrollTop=O-Q}}C(document).one("click"+A,function(U){S.slideUp().remove();return false})});H(L,M,N);C(window).resize(function(){H(L,M,N)})}});function H(O,K,N){var M=O,L=M.offset();K.css({"top":function(Q,U){var T=window.innerHeight||E.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,P=E._int(L.top),R=M.outerHeight(true),S=0;if(T<P+N+R){S=P-N-1;C(this).css({"border-bottom":"none","border-top":"1px solid #B5B5B5"})}else{S=P+R+1}T=P=R=null;return S+"px"},"left":function(P,Q){return E._int(L.left)+"px"}})}})},value:function(G){var E=this;var D=E.options.selectclass;if(D.length==0){D="wp-diy-selected"}var F=E.element,H=F.next("."+D+"-outside");F.val(G);H.find("."+D+"-left").attr("val",G).html(F.children("option:selected").html())},_doinit:function(F){var L=C.Deferred(),G=F,E=G.element;var D=G.options.selectclass,K=function(M){return(M+"").replace(/\\(.?)/g,function(O,N){switch(N){case"\\":return"\\";case"0":return"\u0000";case"":return"";default:return N}})};if(D.length==0){D="wp-diy-selected"}E.hide();var I="",J=Math.max(E.width(),65);var H='<div class="'+D+'-outside overz" style="float:left;width:'+J+'px;"><div class="'+D+'">';E.children("option").each(function(M,O){var N=O;I+='<li val="'+N.value+'">'+K(N.innerHTML)+"</li>"});H+='<div class="'+D+'-left" val="0"> </div><div class="'+D+'-button"><a href="###" onclick="return false;"></a></div></div></div>';E.after(H);L.resolve(E,'<div class="'+D+'-content overz" style="width:'+(J-2)+'px;"><ul>'+I+"</ul></div>");return L.promise()},_int:function(D){var E=parseInt(D);if(isNaN(E)){return 0}return E},_selected:function(D,E){D.find("li").each(function(F,I){var H=C(I),G="";G=(H.attr("val")==E)?"addClass":"removeClass";H[G]("local")});return true},enable:function(){var E=this;var D=E.options.selectclass;if(D.length==0){D="wp-diy-selected"}var F=E.element.next("."+D+"-outside");F.find("."+D+"-left").css("color","#5A5A5A");F.find("."+D+"-button > a").removeClass("disabled");C.Widget.prototype.enable.call(E)},disable:function(){var E=this;var D=E.options.selectclass;if(D.length==0){D="wp-diy-selected"}var G=E.element,H=G.next("."+D+"-outside");var F=G.find("option")[0];G[0].selectedIndex=0;H.find("."+D+"-left").css("color","#7C7C7C").attr("val",F.value).html(F.innerHTML);H.find("."+D+"-button > a").addClass("disabled");C.Widget.prototype.disable.call(E)},destroy:function(){var E=this;var D=E.options.selectclass;if(D.length==0){D="wp-diy-selected"}C(document).unbind(A);E.element.next("."+D+"-outside").unbind(A).remove();C.Widget.prototype.destroy.call(E)}})})(jQuery);(function(D,B){var A=true,C=".wpcstinput";D.widget("wp.cstinput",{options:{value:"",regexp:/^\d+(\.\d+)?$/,range:[0],maxlength:4,unit:"px",step:1,style:"",nmnode_style:"",btnnode_style:"",upbtn_style:"",downbtn_style:"",complete:function(){}},_create:function(){var P=this,Q=P.element,L=P.options;var I=(L.hasOwnProperty("style")&&L.style.length)?' style="'+L.style+'"':"",O=(L.hasOwnProperty("nmnode_style")&&L.nmnode_style.length)?' style="'+L.nmnode_style+'"':"",G=(L.hasOwnProperty("btnnode_style")&&L.btnnode_style.length)?' style="'+L.btnnode_style+'"':"",E=(L.hasOwnProperty("upbtn_style")&&L.upbtn_style.length)?' style="'+L.upbtn_style+'"':"",F=(L.hasOwnProperty("downbtn_style")&&L.downbtn_style.length)?' style="'+L.downbtn_style+'"':"";Q.wrap('<div class="wp_cstinput_helper"'+I+' unselectable="on"><div class="nminput_helper"'+O+' unselectable="on"></div><div class="minplus_helper"'+G+' unselectable="on"><span class="up"'+E+' unselectable="on"></span><span class="down"'+F+' unselectable="on"></span></div></div>');if(L.hasOwnProperty("value")&&L.regexp.test(L.value)){Q.focus().val(L.value)}if(L.hasOwnProperty("maxlength")&&/^[1-9]{1}\d*$/.test(L.maxlength)){Q.attr("maxlength",L.maxlength)}if(L.hasOwnProperty("unit")&&L.unit.length){Q.closest(".wp_cstinput_helper").after('<div class="wp_cstunit_helper" unselectable="on">'+L.unit+"</div>")}D.each(["keydown","keyup","change","focus","blur"],function(R,S){Q.bind(S+C,function(T){if(!A&&(S=="blur")){return false}P._trigger("on"+S,T,null)})});var H,K,J;H=P.buttons=Q.closest(".wp_cstinput_helper").find(".minplus_helper > span");K=H[0];J=H[1];H.mousedown(N).mouseup(M).mouseout(M);function N(){if(L.disabled){return}var R=(this===K)?L.step:-L.step;Q.focus();Q.select();A=false;P._doCount(R);return false}function M(){if(!A){A=true}return false}},_doCount:function(E){var F,I=this.options.range,G=this.element[0].value;if(!G.length){return false}F=this._parseValue(G)+E;if(D.isArray(I)&&(I.length>0)){var H,J;if(typeof I[0]!="undefined"){H=I[0]}if(typeof I[1]!="undefined"){J=I[1]}if((E<0)&&(typeof H==="number")&&(F<H)){F=H}if((E>0)&&(typeof J==="number")&&(F>J)){F=J}}this.element[0].value=F;if(D.isFunction(this.options.complete)){this.options.complete(this.element,F)}},_parseValue:function(F){var E=parseFloat(F);if(isNaN(E)){return 0}return E},enable:function(){this.buttons.removeClass("cstinput_disabled");D.Widget.prototype.enable.call(this)},disable:function(){this.buttons.addClass("cstinput_disabled");D.Widget.prototype.disable.call(this)},destroy:function(){var E=this.element,F=E.closest(".wp_cstinput_helper");E.removeAttr("maxlength").unbind(C);F.before(E[0]);F.siblings(".wp_cstunit_helper").remove().end().remove();D.Widget.prototype.destroy.call(this)}})})(jQuery);function fGuid(C){var B=A();if(C){return B}return(B+"").replace(/\{|\}|-/g,"");function A(){var D="";for(var E=1;E<=32;E++){var F=0;F=parseInt(Math.random()*16);D+=F.toString(16);if(E==8||E==12||E==16||E==20){D+="-"}}return"{"+D.toUpperCase()+"}"}}(function(A){var B={};function C(V,g){var I=$.extend({},{title:"Title",titlebg:true,contentClass:"wp-panel_outpadding",id:"wp-float_panel",width:286,height:"auto",left:5,top:60,isCenter:false,overlay:false,isIframe:false,contain:$("body"),zIndex:1000,showBottom:false,cache:true,postbody:false,swfFix:false,open:function(){},close:function(){}},g||{});var D,N,M,a=I.id,Z=a?$("#"+a):$(".wp-floatpanel_dialog"),J=I.contain;var L=/^\d+$/i,S=I.width,e=I.height,c=I.left,T=I.top,X=I.contentClass,G=I.isCenter,Y=I.overlay,d=I.zIndex,R=I.showBottom,Q=I.isIframe;if(!Z.size()){var O="";if(Y){var P=$("#wp-floatpanel_overlay");if(P.size()>0){P.remove()}O='<div id="wp-floatpanel_overlay" style="z-index:'+d+';"></div>';d+=1}var U="";if(R){U+='<div class="wp-show_allpage"><input type="checkbox" name="show_allpage" value="" /><span>'+translate("property.showInBottom")+'</span></div><div class="wp-coordinate"><span>x:<input type="text" name="xpos" value="0" id="xpos" /></span><span>y:<input type="text" name="ypos" value="0" id="ypos" /></span><span class="wp-coordinate-w">w:<input type="text" name="xwidth" value="0" id="xwidth" /></span><span>h:<input type="text" name="xheight" value="0" id="xheight"/></span><span class="wp-coordinate-lock overz"><img src="../您的网站名称_files/'+relativeToAbsoluteURL("template/default/images/un-lock.png")+'" width="16" height="15" /></span></div>'}var F=$(A),b=$("#wp-floatpanel_loading"),K='<div id="wp-floatpanel_loading" style="z-index:'+(d-1)+';"><img src="../您的网站名称_files/'+relativeToAbsoluteURL("template/default/images/loading.gif")+'" width="32" height="32" /></div>';if(b.size()>0){b.remove()}var H=$.options?$.options.superid:0;var E=$('<div id="'+a+'" class="wp-floatpanel_dialog wp-manage_panel overz" style="display:none;position:absolute;z-index:'+d+';" belong="'+(H||null)+'"><div class="wp-title overz'+(I.titlebg?" wp-title_black":"")+'"><h2>'+I.title+'</h2><div class="wp-icon" style="width:19px;"><a href="javascript:;" class="close"></a></div></div><div class="'+X+' overz"></div>'+U+"</div>"+O+K).appendTo(J);D=E[0];N=$(D);var f=F.width(),W=N.width();$("#wp-floatpanel_loading").width(f).height(F.height());N.draggable({handle:".wp-title",cancel:".wp-icon",cursor:"move",scroll:false,iframeFix:true,start:function(j,h){var k=$(this),i=k.find(".wp-title").outerHeight();$(".wp-diy-selected-content").slideUp().remove();if(I.swfFix){var m=k.find("object");if(m.length>0){m.parent().data("wpswfsize",{"width":m.width(),"height":m.height()});m.css({"height":"0","width":"0","visibility":"hidden"})}m=null}if(k.find("iframe").length>0){var l=k.find(".ui-resizable-innerIframeFix");(l.length>0)&&l.remove();$('<div class="ui-resizable-innerIframeFix" style="background-color:#FFF;"></div>').css({left:0,top:i+"px",position:"absolute",opacity:"0.001",zIndex:1000,width:k.width()+"px",height:(k.height()-i)+"px"}).appendTo(k)}},drag:function(i,h){var j=h.position;if(j.top<0){j.top=0}if(j.left<0){j.left=0}if(f<W+j.left){j.left=f-W}},stop:function(){var h=$(".ui-resizable-innerIframeFix",this);(h.length>0)&&h.remove();if(I.swfFix){var k=$(this).find("object");if(k.length>0){var i=k.parent(),j=i.data("wpswfsize");k.css({"height":(j.height||24)+"px","width":(j.width||82)+"px","visibility":"visible"});i.removeData("wpswfsize");i=j=null}k=null}}}).bind("wpdialogclose",function(i){N={};clearTimeout(M);var h=$(i.target);if(Y){h=h.add("#wp-floatpanel_overlay")}if($.isFunction(I.close)){I.close(h[0])}$(document).trigger("click");return h.add("#wp-floatpanel_loading").remove()})}else{N=Z;D=Z[0]}$.Deferred(function(h){if(Q==false){if(I.cache&&B[V]){var l=B[V];h.resolve(l)}else{var k={};if(I.postbody){k={data:I.postbody}}$.ajax($.extend({type:"POST",url:V,beforeSend:function(){},success:function(m){if(m.length>0){if(m=="Session expired"){A.location.href=getSessionExpiredUrl()}h.resolve(m);if(I.cache){B[V]=m}}else{h.reject()}},error:function(n,m,o){wp_alert((o||m)+"("+I.title+").<br/>"+translate("Request failed!"));N.triggerHandler("wpdialogclose");return false}},k))}}else{var i=S-26,j='<div class="wp-iframe_beforloaded"><img src="../您的网站名称_files/'+relativeToAbsoluteURL("template/default/images/loading.gif")+'" width="32" height="32" /></div><iframe id="'+a+'_frame" name="'+a+'_frame" allowtransparency="true" frameborder="0" src="../您的网站名称_files/'+V+'" scrolling="auto" width="'+i+"\" onload=\"this.height=200;$('.wp-iframe_beforloaded','#"+a+"').remove();initFrame(this,'"+X+"','"+e+"');\"></iframe>";h.resolve(j)}return h.promise()}).done(function(i){$("#wp-floatpanel_loading").remove();var h={};$("."+X,D).html(i);if(L.test(S)){h["width"]=S+"px"}if(L.test(e)){h["height"]=e+"px"}if(G||Y){N.show().css(h);M=setTimeout(function(){N.triggerHandler("wpdialogsetpos")},30);$(A).resize(function(){panel_position(N,S,e,Y,"wp-floatpanel_overlay")});N.bind("wpdialogsetpos",function(j){panel_position(N,S,e,Y,"wp-floatpanel_overlay")})}else{if(L.test(c)){h["left"]=c+"px"}if(L.test(T)){h["top"]=T+"px"}N.css(h).show()}I.open(D)}).fail(function(){wp_alert(I.title+"(deferred fail).<br/>"+translate("Request failed!"));N.triggerHandler("wpdialogclose");return false});$(".wp-title a.close",D).bind("click",function(h){N.triggerHandler("wpdialogclose");h.preventDefault()});return null}A.wp_floatpanel=C})(window);function panel_position(C,J,N,D,H){if(C instanceof jQuery==false){return}var B=C,L=B.outerWidth(true),A=B.outerHeight(true),M=Math.floor,F=/^\d+$/i,G={};var K=$(document).scrollTop();if(F.test(N)){A=N}L=Math.max(L,J);var I=window.innerWidth||self.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,E=window.innerHeight||self.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;pltp=M((E-A)/2);pllt=M((I-L)/2);if(D){$("#"+H).width(I).height(E)}G["left"]=pllt+"px";G["top"]=((pltp>0?pltp:0)+K)+"px";B.css(G)}$._parseFloat=function(B){var A=parseFloat(B);if(isNaN(A)){return 0}return A};function fix_img_url_path(A){var E=/\/([^\/]+)$/;var B=A.match(E);var F="";if(B){var C=B[1];var G=encodeURIComponent(C);var D=new RegExp(C+"$");F=A.replace(D,G)}else{F=encodeURIComponent(A)}return F}function set_pic(I){var C=new Image();C.src=$(I).attr("src");var E=C.width;var J=C.height;if(E==0){E=107}if(J==0){J=107}var G=107;var A=107;var F=107;var B=107;var D=0;if(E>J){B=(J*A)/E;D=(G-B)/2;$(I).attr("style","width: "+F+"px;height:"+B+"px;");$(I).parent().css("top",D)}else{F=(E*A)/J;D=(G-F)/2;$(I).attr("style","width: "+F+"px;height:"+B+"px;left:"+D+"px;");$(I).parent().css({"top":0,"left":D})}};