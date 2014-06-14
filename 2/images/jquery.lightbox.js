(function(A){A.fn.lightBox=function(N){N=jQuery.extend({overlayBgColor:"#000",overlayOpacity:0.8,fixedNavigation:false,imageLoading:"images/lightbox-ico-loading.gif",imageBtnPrev:"images/lightbox-btn-prev.gif",imageBtnNext:"images/lightbox-btn-next.gif",imageBtnClose:"images/lightbox-btn-close.gif",imageBlank:"images/lightbox-blank.gif",containerBorderSize:10,containerResizeSpeed:400,txtImage:"Image",txtOf:"of",keyToClose:"c",keyToPrev:"p",keyToNext:"n",imageArray:[],activeImage:0},N);var M=this;function J(){B(this,M);return false}function B(V,U){A("embed, object, select").css({"visibility":"hidden"});I();N.imageArray.length=0;N.activeImage=0;if(U.length==1){N.imageArray.push(new Array(V.getAttribute("href"),V.getAttribute("title")))}else{for(var T=0;T<U.length;T++){N.imageArray.push(new Array(U[T].getAttribute("href"),U[T].getAttribute("title")))}}while(N.imageArray[N.activeImage][0]!=V.getAttribute("href")){N.activeImage++}R()}function I(){A("#scroll_container").append('<div id="jquery-overlay"></div><div id="jquery-lightbox"><div id="lightbox-container-image-box"><div id="lightbox-container-image"><img id="lightbox-image"><div style="" id="lightbox-nav"><a href="#" id="lightbox-nav-btnPrev"></a><a href="#" id="lightbox-nav-btnNext"></a></div><div id="lightbox-loading"><a href="#" id="lightbox-loading-link"><img src="../您的网站名称_files/'+N.imageLoading+'"></a></div></div></div><div id="lightbox-container-image-data-box"><div id="lightbox-container-image-data"><div id="lightbox-image-details"><span id="lightbox-image-details-caption"></span><span id="lightbox-image-details-currentNumber"></span></div><div id="lightbox-secNav"><a href="#" id="lightbox-secNav-btnClose"><img src="../您的网站名称_files/'+N.imageBtnClose+'"></a></div></div></div></div>');var U=S();A("#jquery-overlay").css({backgroundColor:N.overlayBgColor,opacity:N.overlayOpacity,width:U[0],height:U[1]}).fadeIn();var T=K();A("#jquery-lightbox").css({top:T[1]+(U[3]/10),left:T[0]}).show();A("#jquery-overlay,#jquery-lightbox").click(function(){D()});A("#lightbox-loading-link,#lightbox-secNav-btnClose").click(function(){D();return false});A(window).resize(function(){var W=S();A("#jquery-overlay").css({width:W[0],height:W[1]});var V=K();A("#jquery-lightbox").css({top:V[1]+(W[3]/10),left:V[0]})})}function R(){A("#lightbox-loading").show();if(N.fixedNavigation){A("#lightbox-image,#lightbox-container-image-data-box,#lightbox-image-details-currentNumber").hide()}else{A("#lightbox-image,#lightbox-nav,#lightbox-nav-btnPrev,#lightbox-nav-btnNext,#lightbox-container-image-data-box,#lightbox-image-details-currentNumber").hide()}var T=new Image();T.onload=function(){A("#lightbox-image").attr("src",N.imageArray[N.activeImage][0]);Q(T.width,T.height);T.onload=function(){}};T.src=N.imageArray[N.activeImage][0]}function Q(X,Z){var a=A("#lightbox-container-image-box").width();var T=A("#lightbox-container-image-box").height();var Y=(X+(N.containerBorderSize*2));var V=(Z+(N.containerBorderSize*2));var W=a-Y;var U=T-V;A("#lightbox-container-image-box").animate({width:Y,height:V},N.containerResizeSpeed,function(){G()});if((W==0)&&(U==0)){if(A.browser.msie){F(250)}else{F(100)}}A("#lightbox-container-image-data-box").css({width:X});A("#lightbox-nav-btnPrev,#lightbox-nav-btnNext").css({height:Z+(N.containerBorderSize*2)})}function G(){A("#lightbox-loading").hide();A("#lightbox-image").fadeIn(function(){C();E()});O()}function C(){A("#lightbox-container-image-data-box").slideDown("fast");A("#lightbox-image-details-caption").hide();if(N.imageArray[N.activeImage][1]){A("#lightbox-image-details-caption").html(N.imageArray[N.activeImage][1]).show()}if(N.imageArray.length>1){A("#lightbox-image-details-currentNumber").html(N.txtImage+" "+(N.activeImage+1)+" "+N.txtOf+" "+N.imageArray.length).show()}}function E(){A("#lightbox-nav").show();A("#lightbox-nav-btnPrev,#lightbox-nav-btnNext").css({"cursor":"default","background":"transparent url("+N.imageBlank+") no-repeat"});if(N.activeImage!=0){if(N.fixedNavigation){A("#lightbox-nav-btnPrev").css({"cursor":'url("'+N.cursorBtnPrev+'"),default'}).unbind().bind("click",function(){if(N.activeImage>0){N.activeImage=N.activeImage-1;R()}return false})}else{A("#lightbox-nav-btnPrev").unbind().hover(function(){A(this).css({"cursor":'url("'+N.cursorBtnPrev+'"),default'})},function(){A(this).css({"cursor":"default"})}).show().bind("click",function(){if(N.activeImage>0){N.activeImage=N.activeImage-1;R()}return false})}}else{A("#lightbox-nav-btnPrev").bind("click",function(){return false})}if(N.activeImage!=(N.imageArray.length-1)){if(N.fixedNavigation){A("#lightbox-nav-btnNext").css({"cursor":'url("'+N.cursorBtnNext+'"),default'}).unbind().bind("click",function(){if(N.activeImage<N.imageArray.length-1){N.activeImage=N.activeImage+1;R()}return false})}else{A("#lightbox-nav-btnNext").unbind().hover(function(){A(this).css({"cursor":'url("'+N.cursorBtnNext+'"),default'})},function(){A(this).css({"cursor":"default"})}).show().bind("click",function(){if(N.activeImage<N.imageArray.length-1){N.activeImage=N.activeImage+1;R()}return false})}}else{A("#lightbox-nav-btnNext").bind("click",function(){return false})}H()}function H(){A(document).keydown(function(T){L(T)})}function P(){A(document).unbind()}function L(T){if(T==null){keycode=event.keyCode;escapeKey=27}else{keycode=T.keyCode;escapeKey=T.DOM_VK_ESCAPE}key=String.fromCharCode(keycode).toLowerCase();if((key==N.keyToClose)||(key=="x")||(keycode==escapeKey)){D()}if((key==N.keyToPrev)||(keycode==37)){if(N.activeImage!=0){N.activeImage=N.activeImage-1;R();P()}}if((key==N.keyToNext)||(keycode==39)){if(N.activeImage!=(N.imageArray.length-1)){N.activeImage=N.activeImage+1;R();P()}}}function O(){if((N.imageArray.length-1)>N.activeImage){objNext=new Image();objNext.src=N.imageArray[N.activeImage+1][0]}if(N.activeImage>0){objPrev=new Image();objPrev.src=N.imageArray[N.activeImage-1][0]}}function D(){A("#jquery-lightbox").remove();A("#jquery-overlay").fadeOut(function(){A("#jquery-overlay").remove()});A("embed, object, select").css({"visibility":"visible"})}function S(){var T=A("#scroll_container_bg");var U=new Array(T.width(),T.height(),A(window).width(),A(window).height());return U}function K(){var U=A("#scroll_container");var T=new Array(0,U.scrollTop());return T}function F(T){var U=new Date();V=null;do{var V=new Date()}while(V-U<T)}return this.unbind("click").click(J)}})(jQuery);