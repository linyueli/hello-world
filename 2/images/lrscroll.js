(function(D){D.fn.jCarouselLite=function(E){E=D.extend({btnPrev:null,btnNext:null,btnGo:null,mouseWheel:false,auto:null,speed:200,easing:null,vertical:false,circular:true,visible:3,start:0,scroll:1,beforeStart:null,afterEnd:null},E||{});return this.each(function(){var Q=false,G=E.vertical?"top":"left",P=E.vertical?"height":"width";var W=D(this),M=D("ul",W),J=D("li",M),L=J.size(),I=E.visible;var U=E.start;var N=W.closest(".wp-effectimage_content");var S=N.width()-D("a.prev",N).width()-D("a.next",N).width()-20;var R=B(J);I=Math.min(L,Math.floor(S/R));if(E.circular){M.prepend(J.slice(L-I-1+1).clone()).append(J.slice(0,I).clone());E.start+=I}var H=D("li",M),O=H.size(),Y=E.start;W.css("visibility","visible");H.css({overflow:"hidden","float":E.vertical?"none":"left"});M.css({margin:"0",padding:"0",position:"relative","list-style-type":"none","z-index":"1"});W.css({overflow:"hidden",position:"relative","z-index":"2",left:"0px"});var V=E.vertical?A(H):B(H);var K=V*O;var X=V*I;H.css({width:H.width(),height:H.height()});M.css(P,K+"px").css(G,-(Y*V));W.css(P,X+"px");W.bind("mod_resize",function(c){var f=c.data;var b=W.closest(".wp-effectimage_content");var Z=b.width()-D("a.prev",b).width()-D("a.next",b).width()-20;var a=Math.min(L,Math.floor(Z/V));if(a==I){return}E.start=U;I=a;var d=J.clone();M.empty().append(d);J=D("li",M);if(E.circular){M.prepend(J.slice(L-I-1+1).clone()).append(J.slice(0,I).clone());E.start+=I}X=V*I;Y=E.start;H=D("li",M),O=H.size();K=V*O;H.css({width:H.width(),height:H.height()});M.css(P,K+"px").css(G,-(Y*V));W.css(P,X+"px")});if(E.btnPrev){D(E.btnPrev).click(function(){return F(Y-E.scroll)})}if(E.btnNext){D(E.btnNext).click(function(){return F(Y+E.scroll)})}if(E.btnGo){D.each(E.btnGo,function(Z,a){D(a).click(function(){return F(E.circular?E.visible+Z:Z)})})}if(E.mouseWheel&&W.mousewheel){W.mousewheel(function(a,Z){return Z>0?F(Y-E.scroll):F(Y+E.scroll)})}if(E.auto){setInterval(function(){F(Y+E.scroll)},E.auto+E.speed)}function T(){return H.slice(Y).slice(0,I)}function F(Z){if(!Q){if(E.beforeStart){E.beforeStart.call(this,T())}if(E.circular){if(Z<=E.start-I-1){M.css(G,-((O-(I*2))*V)+"px");Y=Z==E.start-I-1?O-(I*2)-1:O-(I*2)-E.scroll}else{if(Z>=O-I+1){M.css(G,-((I)*V)+"px");Y=Z==O-I+1?I+1:I+E.scroll}else{Y=Z}}}else{if(Z<0||Z>O-I){return}else{Y=Z}}Q=true;M.animate(G=="left"?{left:-(Y*V)}:{top:-(Y*V)},E.speed,E.easing,function(){if(E.afterEnd){E.afterEnd.call(this,T())}Q=false});if(!E.circular){D(E.btnPrev+","+E.btnNext).removeClass("disabled");D((Y-E.scroll<0&&E.btnPrev)||(Y+E.scroll>O-I&&E.btnNext)||[]).addClass("disabled")}}return false}})};function C(E,F){return parseInt(D.css(E[0],F))||0}function B(E){return E[0].offsetWidth+C(E,"marginLeft")+C(E,"marginRight")}function A(E){return E[0].offsetHeight+C(E,"marginTop")+C(E,"marginBottom")}})(jQuery);