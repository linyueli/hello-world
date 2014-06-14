(function(Y){var d=Y.$LAB,Q="UseLocalXHR",R="AlwaysPreserveOrder",W="AllowDuplicates",j="CacheBust",k="BasePath",l=/^[^?#]*\//.exec(location.href)[0],m=/^\w+\:\/\/\/?[^\/]+/.exec(l)[0],X=document.head||document.getElementsByTagName("head"),e=(Y.opera&&Object.prototype.toString.call(Y.opera)=="[object Opera]")||("MozAppearance" in document.documentElement.style),S=document.createElement("script"),n=typeof S.preload=="boolean",T=n||(S.readyState&&S.readyState=="uninitialized"),p=!T&&S.async===true,f=!T&&!p&&!e;function v(A){return Object.prototype.toString.call(A)=="[object Function]"}function a(A){return Object.prototype.toString.call(A)=="[object Array]"}function g(A,C){var B=/^\w+\:\/\//;if(/^\/\/\/?/.test(A)){A=location.protocol+A}else{if(!B.test(A)&&A.charAt(0)!="/"){A=(C||"")+A}}return B.test(A)?A:((A.charAt(0)=="/"?m:l)+A)}function U(A,C){for(var B in A){if(A.hasOwnProperty(B)){C[B]=A[B]}}return C}function h(A){var C=false;for(var B=0;B<A.scripts.length;B++){if(A.scripts[B].ready&&A.scripts[B].exec_trigger){C=true;A.scripts[B].exec_trigger();A.scripts[B].exec_trigger=null}}return C}function V(A,C,B,D){A.onload=A.onreadystatechange=function(){if((A.readyState&&A.readyState!="complete"&&A.readyState!="loaded")||C[B]){return}A.onload=A.onreadystatechange=null;D()}}function b(A){A.ready=A.finished=true;for(var B=0;B<A.finished_listeners.length;B++){A.finished_listeners[B]()}A.ready_listeners=[];A.finished_listeners=[]}function Z(B,D,C,E,A){setTimeout(function(){var F,H=D.real_src,G;if("item" in X){if(!X[0]){setTimeout(arguments.callee,25);return}X=X[0]}F=document.createElement("script");if(D.type){F.type=D.type}if(D.charset){F.charset=D.charset}if(A){if(T){C.elem=F;if(n){F.preload=true;F.onpreload=E}else{F.onreadystatechange=function(){if(F.readyState=="loaded"){E()}}}F.src=H}else{if(A&&H.indexOf(m)==0&&B[Q]){G=new XMLHttpRequest();G.onreadystatechange=function(){if(G.readyState==4){G.onreadystatechange=function(){};C.text=G.responseText+"\n//@ sourceURL="+H;E()}};G.open("GET",H);G.send()}else{F.type="text/cache-script";V(F,C,"ready",function(){X.removeChild(F);E()});F.src=H;X.insertBefore(F,X.firstChild)}}}else{if(p){F.async=false;V(F,C,"finished",E);F.src=H;X.insertBefore(F,X.firstChild)}else{V(F,C,"finished",E);F.src=H;X.insertBefore(F,X.firstChild)}}},0)}function c(){var A={},D=T||f,C=[],G={},B;A[Q]=true;A[R]=false;A[W]=false;A[j]=false;A[k]="";function E(I,K,J){var L;function M(){if(L!=null){L=null;b(J)}}if(G[K.src].finished){return}if(!I[W]){G[K.src].finished=true}L=J.elem||document.createElement("script");if(K.type){L.type=K.type}if(K.charset){L.charset=K.charset}V(L,J,"finished",M);if(J.elem){J.elem=null}else{if(J.text){L.onload=L.onreadystatechange=null;L.text=J.text}else{L.src=K.real_src}}X.insertBefore(L,X.firstChild);if(J.text){M()}}function F(K,J,L,N){var M,O,P=function(){J.ready_cb(J,function(){E(K,J,M)})},I=function(){J.finished_cb(J,L)};J.src=g(J.src,K[k]);J.real_src=J.src+(K[j]?((/\?.*$/.test(J.src)?"&_":"?_")+~~(Math.random()*1000000000)+"="):"");if(!G[J.src]){G[J.src]={items:[],finished:false}}O=G[J.src].items;if(K[W]||O.length==0){M=O[O.length]={ready:false,finished:false,ready_listeners:[P],finished_listeners:[I]};Z(K,J,M,((N)?function(){M.ready=true;for(var i=0;i<M.ready_listeners.length;i++){M.ready_listeners[i]()}M.ready_listeners=[]}:function(){b(M)}),N)}else{M=O[0];if(M.finished){I()}else{M.finished_listeners.push(I)}}}function H(){var O,P=U(A,{}),o=[],I=0,i=false,J;function L(q,r){q.ready=true;q.exec_trigger=r;K()}function M(q,s){q.ready=q.finished=true;q.exec_trigger=null;for(var r=0;r<s.scripts.length;r++){if(!s.scripts[r].finished){return}}s.finished=true;K()}function K(){while(I<o.length){if(v(o[I])){try{o[I++]()}catch(q){}continue}else{if(!o[I].finished){if(h(o[I])){continue}break}}I++}if(I==o.length){i=false;J=false}}function N(){if(!J||!J.scripts){o.push(J={scripts:[],finished:true})}}O={script:function(){for(var q=0;q<arguments.length;q++){(function(r,t){var s;if(!a(r)){t=[r]}for(var u=0;u<t.length;u++){N();r=t[u];if(v(r)){r=r()}if(!r){continue}if(a(r)){s=[].slice.call(r);s.unshift(u,1);[].splice.apply(t,s);u--;continue}if(typeof r=="string"){r={src:r}}r=U(r,{ready:false,ready_cb:L,finished:false,finished_cb:M});J.finished=false;J.scripts.push(r);F(P,r,J,(D&&i));i=true;if(P[R]){O.wait()}}})(arguments[q],arguments[q])}return O},wait:function(){if(arguments.length>0){for(var q=0;q<arguments.length;q++){o.push(arguments[q])}J=o[o.length-1]}else{J=false}K();return O}};return{script:O.script,wait:O.wait,setOptions:function(q){U(q,P);return O}}}B={setGlobalDefaults:function(I){U(I,A);return B},setOptions:function(){return H().setOptions.apply(null,arguments)},script:function(){return H().script.apply(null,arguments)},wait:function(){return H().wait.apply(null,arguments)},queueScript:function(){C[C.length]={type:"script",args:[].slice.call(arguments)};return B},queueWait:function(){C[C.length]={type:"wait",args:[].slice.call(arguments)};return B},runQueue:function(){var I=B,K=C.length,J=K,L;for(;--J>=0;){L=C.shift();I=I[L.type].apply(null,L.args)}return I},noConflict:function(){Y.$LAB=d;return B},sandbox:function(){return c()}};return B}Y.$LAB=c();(function(A,C,B){if(document.readyState==null&&document[A]){document.readyState="loading";document[A](C,B=function(){document.removeEventListener(C,B,false);document.readyState="complete"},false)}})("addEventListener","DOMContentLoaded")})(this);