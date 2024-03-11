/*! For license information please see 7fafe070bbac85fe815d12481324739e7e39d437-b570af7cd59412c3f1c3.js.LICENSE.txt */
(self.webpackChunkflowalpin=self.webpackChunkflowalpin||[]).push([[9],{4184:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var s=a.apply(null,n);s&&e.push(s)}}else if("object"===o){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var i in n)r.call(n,i)&&n[i]&&e.push(i)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},9712:function(e,t){},1234:function(e,t,n){"use strict";var r=n(7294),a=n(4160),o=n(682),s=n(4051),i=n(1555),l=n(8518),c=n.n(l),f=n(7909),u=n.n(f),d=n(166),m=n.n(d),p=n(3339),h=n.n(p);t.Z=e=>{let{footerData:t}=e;return r.createElement(o.Z,{fluid:!0,className:"footer-container bg-footer footer p-3 rounded-t-[50px]"},r.createElement(s.Z,{className:"py-3 font-sharp font-normal text-[14px]"},r.createElement(i.Z,{md:4,className:"flex justify-content-center align-items-center cursor-pointer",onClick:()=>(0,a.c4)("/")},r.createElement(h(),null)),r.createElement(i.Z,{md:4,className:"flex flex-column justify-content-center align-items-center"},r.createElement("h6",{className:"text-white mb-3"},"Kapcsolat"),r.createElement("a",{href:"#",className:"no-underline"},"flowalpin@gmail.com"),r.createElement("a",{href:"#",className:"no-underline hover:no-underline mt-1"},"Tel.: +36204116443"),r.createElement("div",{className:"flex mt-3"},r.createElement("a",{title:"facebook",href:"#",className:"mr-3"},r.createElement(c(),null)),r.createElement("a",{title:"instagram",href:"#",className:"mr-3"},r.createElement(u(),null)),r.createElement("a",{title:"linkedin",href:"#"},r.createElement(m(),null)))),r.createElement(i.Z,{md:4,className:"flex flex-column justify-content-center align-items-center pt-[16px] lg:pt-[0px]"},r.createElement(a.rU,{to:"/impressum",className:"no-underline mb-3"},"Impresszum"),r.createElement(a.rU,{to:"/terms",className:"no-underline mb-3"},"ÁSZF"),r.createElement(a.rU,{to:"/privacy",className:"no-underline"},"Adatvédelem"))))}},3536:function(e,t,n){"use strict";n.d(t,{Z:function(){return Va}});var r=n(7294),a=n.t(r,2),o=n(682),s=n(4051),i=n(1555),l=n(5893);var c=function(){function e(e){var t=this;this._insertTag=function(e){var n;n=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,n),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var n=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{n.insertRule(e,n.cssRules.length)}catch(r){0}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){return e.parentNode&&e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}(),f=Math.abs,u=String.fromCharCode,d=Object.assign;function m(e){return e.trim()}function p(e,t,n){return e.replace(t,n)}function h(e,t){return e.indexOf(t)}function y(e,t){return 0|e.charCodeAt(t)}function g(e,t,n){return e.slice(t,n)}function v(e){return e.length}function b(e){return e.length}function x(e,t){return t.push(e),e}var C=1,E=1,w=0,k=0,N=0,L="";function O(e,t,n,r,a,o,s){return{value:e,root:t,parent:n,type:r,props:a,children:o,line:C,column:E,length:s,return:""}}function S(e,t){return d(O("",null,null,"",null,null,0),e,{length:-e.length},t)}function j(){return N=k>0?y(L,--k):0,E--,10===N&&(E=1,C--),N}function $(){return N=k<w?y(L,k++):0,E++,10===N&&(E=1,C++),N}function M(){return y(L,k)}function R(){return k}function A(e,t){return g(L,e,t)}function P(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function T(e){return C=E=1,w=v(L=e),k=0,[]}function z(e){return L="",e}function V(e){return m(A(k-1,_(91===e?e+2:40===e?e+1:e)))}function D(e){for(;(N=M())&&N<33;)$();return P(e)>2||P(N)>3?"":" "}function F(e,t){for(;--t&&$()&&!(N<48||N>102||N>57&&N<65||N>70&&N<97););return A(e,R()+(t<6&&32==M()&&32==$()))}function _(e){for(;$();)switch(N){case e:return k;case 34:case 39:34!==e&&39!==e&&_(N);break;case 40:41===e&&_(e);break;case 92:$()}return k}function Z(e,t){for(;$()&&e+N!==57&&(e+N!==84||47!==M()););return"/*"+A(t,k-1)+"*"+u(47===e?e:$())}function I(e){for(;!P(M());)$();return A(e,k)}var B="-ms-",Y="-moz-",K="-webkit-",W="comm",H="rule",X="decl",G="@keyframes";function U(e,t){for(var n="",r=b(e),a=0;a<r;a++)n+=t(e[a],a,e,t)||"";return n}function q(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case X:return e.return=e.return||e.value;case W:return"";case G:return e.return=e.value+"{"+U(e.children,r)+"}";case H:e.value=e.props.join(",")}return v(n=U(e.children,r))?e.return=e.value+"{"+n+"}":""}function J(e){return z(Q("",null,null,null,[""],e=T(e),0,[0],e))}function Q(e,t,n,r,a,o,s,i,l){for(var c=0,f=0,d=s,m=0,g=0,b=0,C=1,E=1,w=1,k=0,N="",L=a,O=o,S=r,A=N;E;)switch(b=k,k=$()){case 40:if(108!=b&&58==y(A,d-1)){-1!=h(A+=p(V(k),"&","&\f"),"&\f")&&(w=-1);break}case 34:case 39:case 91:A+=V(k);break;case 9:case 10:case 13:case 32:A+=D(b);break;case 92:A+=F(R()-1,7);continue;case 47:switch(M()){case 42:case 47:x(te(Z($(),R()),t,n),l);break;default:A+="/"}break;case 123*C:i[c++]=v(A)*w;case 125*C:case 59:case 0:switch(k){case 0:case 125:E=0;case 59+f:-1==w&&(A=p(A,/\f/g,"")),g>0&&v(A)-d&&x(g>32?ne(A+";",r,n,d-1):ne(p(A," ","")+";",r,n,d-2),l);break;case 59:A+=";";default:if(x(S=ee(A,t,n,c,f,a,i,N,L=[],O=[],d),o),123===k)if(0===f)Q(A,t,S,S,L,o,d,i,O);else switch(99===m&&110===y(A,3)?100:m){case 100:case 108:case 109:case 115:Q(e,S,S,r&&x(ee(e,S,S,0,0,a,i,N,a,L=[],d),O),a,O,d,i,r?L:O);break;default:Q(A,S,S,S,[""],O,0,i,O)}}c=f=g=0,C=w=1,N=A="",d=s;break;case 58:d=1+v(A),g=b;default:if(C<1)if(123==k)--C;else if(125==k&&0==C++&&125==j())continue;switch(A+=u(k),k*C){case 38:w=f>0?1:(A+="\f",-1);break;case 44:i[c++]=(v(A)-1)*w,w=1;break;case 64:45===M()&&(A+=V($())),m=M(),f=d=v(N=A+=I(R())),k++;break;case 45:45===b&&2==v(A)&&(C=0)}}return o}function ee(e,t,n,r,a,o,s,i,l,c,u){for(var d=a-1,h=0===a?o:[""],y=b(h),v=0,x=0,C=0;v<r;++v)for(var E=0,w=g(e,d+1,d=f(x=s[v])),k=e;E<y;++E)(k=m(x>0?h[E]+" "+w:p(w,/&\f/g,h[E])))&&(l[C++]=k);return O(e,t,n,0===a?H:i,l,c,u)}function te(e,t,n){return O(e,t,n,W,u(N),g(e,2,-2),0)}function ne(e,t,n,r){return O(e,t,n,X,g(e,0,r),g(e,r+1,-1),r)}var re=function(e,t,n){for(var r=0,a=0;r=a,a=M(),38===r&&12===a&&(t[n]=1),!P(a);)$();return A(e,k)},ae=function(e,t){return z(function(e,t){var n=-1,r=44;do{switch(P(r)){case 0:38===r&&12===M()&&(t[n]=1),e[n]+=re(k-1,t,n);break;case 2:e[n]+=V(r);break;case 4:if(44===r){e[++n]=58===M()?"&\f":"",t[n]=e[n].length;break}default:e[n]+=u(r)}}while(r=$());return e}(T(e),t))},oe=new WeakMap,se=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,n=e.parent,r=e.column===n.column&&e.line===n.line;"rule"!==n.type;)if(!(n=n.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||oe.get(n))&&!r){oe.set(e,!0);for(var a=[],o=ae(t,a),s=n.props,i=0,l=0;i<o.length;i++)for(var c=0;c<s.length;c++,l++)e.props[l]=a[i]?o[i].replace(/&\f/g,s[c]):s[c]+" "+o[i]}}},ie=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}};function le(e,t){switch(function(e,t){return 45^y(e,0)?(((t<<2^y(e,0))<<2^y(e,1))<<2^y(e,2))<<2^y(e,3):0}(e,t)){case 5103:return K+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return K+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return K+e+Y+e+B+e+e;case 6828:case 4268:return K+e+B+e+e;case 6165:return K+e+B+"flex-"+e+e;case 5187:return K+e+p(e,/(\w+).+(:[^]+)/,K+"box-$1$2"+B+"flex-$1$2")+e;case 5443:return K+e+B+"flex-item-"+p(e,/flex-|-self/,"")+e;case 4675:return K+e+B+"flex-line-pack"+p(e,/align-content|flex-|-self/,"")+e;case 5548:return K+e+B+p(e,"shrink","negative")+e;case 5292:return K+e+B+p(e,"basis","preferred-size")+e;case 6060:return K+"box-"+p(e,"-grow","")+K+e+B+p(e,"grow","positive")+e;case 4554:return K+p(e,/([^-])(transform)/g,"$1"+K+"$2")+e;case 6187:return p(p(p(e,/(zoom-|grab)/,K+"$1"),/(image-set)/,K+"$1"),e,"")+e;case 5495:case 3959:return p(e,/(image-set\([^]*)/,K+"$1$`$1");case 4968:return p(p(e,/(.+:)(flex-)?(.*)/,K+"box-pack:$3"+B+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+K+e+e;case 4095:case 3583:case 4068:case 2532:return p(e,/(.+)-inline(.+)/,K+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(v(e)-1-t>6)switch(y(e,t+1)){case 109:if(45!==y(e,t+4))break;case 102:return p(e,/(.+:)(.+)-([^]+)/,"$1"+K+"$2-$3$1"+Y+(108==y(e,t+3)?"$3":"$2-$3"))+e;case 115:return~h(e,"stretch")?le(p(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==y(e,t+1))break;case 6444:switch(y(e,v(e)-3-(~h(e,"!important")&&10))){case 107:return p(e,":",":"+K)+e;case 101:return p(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+K+(45===y(e,14)?"inline-":"")+"box$3$1"+K+"$2$3$1"+B+"$2box$3")+e}break;case 5936:switch(y(e,t+11)){case 114:return K+e+B+p(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return K+e+B+p(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return K+e+B+p(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return K+e+B+e+e}return e}var ce=[function(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case X:e.return=le(e.value,e.length);break;case G:return U([S(e,{value:p(e.value,"@","@"+K)})],r);case H:if(e.length)return function(e,t){return e.map(t).join("")}(e.props,(function(t){switch(function(e,t){return(e=t.exec(e))?e[0]:e}(t,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return U([S(e,{props:[p(t,/:(read-\w+)/,":-moz-$1")]})],r);case"::placeholder":return U([S(e,{props:[p(t,/:(plac\w+)/,":"+K+"input-$1")]}),S(e,{props:[p(t,/:(plac\w+)/,":-moz-$1")]}),S(e,{props:[p(t,/:(plac\w+)/,B+"input-$1")]})],r)}return""}))}}],fe=function(e){var t=e.key;if("css"===t){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var r=e.stylisPlugins||ce;var a,o,s={},i=[];a=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),(function(e){for(var t=e.getAttribute("data-emotion").split(" "),n=1;n<t.length;n++)s[t[n]]=!0;i.push(e)}));var l,f,u,d,m=[q,(d=function(e){l.insert(e)},function(e){e.root||(e=e.return)&&d(e)})],p=(f=[se,ie].concat(r,m),u=b(f),function(e,t,n,r){for(var a="",o=0;o<u;o++)a+=f[o](e,t,n,r)||"";return a});o=function(e,t,n,r){l=n,U(J(e?e+"{"+t.styles+"}":t.styles),p),r&&(h.inserted[t.name]=!0)};var h={key:t,sheet:new c({key:t,container:a,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:s,registered:{},insert:o};return h.sheet.hydrate(i),h};function ue(e,t,n){var r="";return n.split(" ").forEach((function(n){void 0!==e[n]?t.push(e[n]+";"):r+=n+" "})),r}var de=function(e,t,n){var r=e.key+"-"+t.name;!1===n&&void 0===e.registered[r]&&(e.registered[r]=t.styles)},me=function(e,t,n){de(e,t,n);var r=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var a=t;do{e.insert(t===a?"."+r:"",a,e.sheet,!0),a=a.next}while(void 0!==a)}};var pe={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function he(e){var t=Object.create(null);return function(n){return void 0===t[n]&&(t[n]=e(n)),t[n]}}var ye=/[A-Z]|^ms/g,ge=/_EMO_([^_]+?)_([^]*?)_EMO_/g,ve=function(e){return 45===e.charCodeAt(1)},be=function(e){return null!=e&&"boolean"!=typeof e},xe=he((function(e){return ve(e)?e:e.replace(ye,"-$&").toLowerCase()})),Ce=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(ge,(function(e,t,n){return we={name:t,styles:n,next:we},t}))}return 1===pe[e]||ve(e)||"number"!=typeof t||0===t?t:t+"px"};function Ee(e,t,n){if(null==n)return"";if(void 0!==n.__emotion_styles)return n;switch(typeof n){case"boolean":return"";case"object":if(1===n.anim)return we={name:n.name,styles:n.styles,next:we},n.name;if(void 0!==n.styles){var r=n.next;if(void 0!==r)for(;void 0!==r;)we={name:r.name,styles:r.styles,next:we},r=r.next;return n.styles+";"}return function(e,t,n){var r="";if(Array.isArray(n))for(var a=0;a<n.length;a++)r+=Ee(e,t,n[a])+";";else for(var o in n){var s=n[o];if("object"!=typeof s)null!=t&&void 0!==t[s]?r+=o+"{"+t[s]+"}":be(s)&&(r+=xe(o)+":"+Ce(o,s)+";");else if(!Array.isArray(s)||"string"!=typeof s[0]||null!=t&&void 0!==t[s[0]]){var i=Ee(e,t,s);switch(o){case"animation":case"animationName":r+=xe(o)+":"+i+";";break;default:r+=o+"{"+i+"}"}}else for(var l=0;l<s.length;l++)be(s[l])&&(r+=xe(o)+":"+Ce(o,s[l])+";")}return r}(e,t,n);case"function":if(void 0!==e){var a=we,o=n(e);return we=a,Ee(e,t,o)}}if(null==t)return n;var s=t[n];return void 0!==s?s:n}var we,ke=/label:\s*([^\s;\n{]+)\s*(;|$)/g;var Ne=function(e,t,n){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var r=!0,a="";we=void 0;var o=e[0];null==o||void 0===o.raw?(r=!1,a+=Ee(n,t,o)):a+=o[0];for(var s=1;s<e.length;s++)a+=Ee(n,t,e[s]),r&&(a+=o[s]);ke.lastIndex=0;for(var i,l="";null!==(i=ke.exec(a));)l+="-"+i[1];var c=function(e){for(var t,n=0,r=0,a=e.length;a>=4;++r,a-=4)t=1540483477*(65535&(t=255&e.charCodeAt(r)|(255&e.charCodeAt(++r))<<8|(255&e.charCodeAt(++r))<<16|(255&e.charCodeAt(++r))<<24))+(59797*(t>>>16)<<16),n=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&n)+(59797*(n>>>16)<<16);switch(a){case 3:n^=(255&e.charCodeAt(r+2))<<16;case 2:n^=(255&e.charCodeAt(r+1))<<8;case 1:n=1540483477*(65535&(n^=255&e.charCodeAt(r)))+(59797*(n>>>16)<<16)}return(((n=1540483477*(65535&(n^=n>>>13))+(59797*(n>>>16)<<16))^n>>>15)>>>0).toString(36)}(a)+l;return{name:c,styles:a,next:we}},Le=!!a.useInsertionEffect&&a.useInsertionEffect,Oe=Le||function(e){return e()},Se=(Le||r.useLayoutEffect,{}.hasOwnProperty),je=r.createContext("undefined"!=typeof HTMLElement?fe({key:"css"}):null);je.Provider;var $e=function(e){return(0,r.forwardRef)((function(t,n){var a=(0,r.useContext)(je);return e(t,a,n)}))};var Me=r.createContext({});var Re="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Ae=function(e){var t=e.cache,n=e.serialized,r=e.isStringTag;return de(t,n,r),Oe((function(){return me(t,n,r)})),null},Pe=$e((function(e,t,n){var a=e.css;"string"==typeof a&&void 0!==t.registered[a]&&(a=t.registered[a]);var o=e[Re],s=[a],i="";"string"==typeof e.className?i=ue(t.registered,s,e.className):null!=e.className&&(i=e.className+" ");var l=Ne(s,void 0,r.useContext(Me));i+=t.key+"-"+l.name;var c={};for(var f in e)Se.call(e,f)&&"css"!==f&&f!==Re&&(c[f]=e[f]);return c.ref=n,c.className=i,r.createElement(r.Fragment,null,r.createElement(Ae,{cache:t,serialized:l,isStringTag:"string"==typeof o}),r.createElement(o,c))}));var Te=Pe,ze=(n(434),n(8679),l.Fragment);function Ve(e,t,n){return Se.call(t,"css")?l.jsx(Te,function(e,t){var n={};for(var r in t)Se.call(t,r)&&(n[r]=t[r]);return n[Re]=e,n}(e,t),n):l.jsx(e,t,n)}function De(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Ne(t)}var Fe=function(){var e=De.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},_e=function e(t){for(var n=t.length,r=0,a="";r<n;r++){var o=t[r];if(null!=o){var s=void 0;switch(typeof o){case"boolean":break;case"object":if(Array.isArray(o))s=e(o);else for(var i in s="",o)o[i]&&i&&(s&&(s+=" "),s+=i);break;default:s=o}s&&(a&&(a+=" "),a+=s)}}return a};var Ze=function(e){var t=e.cache,n=e.serializedArr;return Oe((function(){for(var e=0;e<n.length;e++)me(t,n[e],!1)})),null},Ie=$e((function(e,t){var n=[],a=function(){for(var e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];var o=Ne(r,t.registered);return n.push(o),de(t,o,!1),t.key+"-"+o.name},o={css:a,cx:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return function(e,t,n){var r=[],a=ue(e,r,n);return r.length<2?n:a+t(r)}(t.registered,a,_e(n))},theme:r.useContext(Me)},s=e.children(o);return!0,r.createElement(r.Fragment,null,r.createElement(Ze,{cache:t,serializedArr:n}),s)}));var Be=Object.defineProperty,Ye=(e,t,n)=>(((e,t,n)=>{t in e?Be(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n})(e,"symbol"!=typeof t?t+"":t,n),n),Ke=new Map,We=new WeakMap,He=0,Xe=void 0;function Ge(e){return Object.keys(e).sort().filter((t=>void 0!==e[t])).map((t=>{return`${t}_${"root"===t?(n=e.root,n?(We.has(n)||(He+=1,We.set(n,He.toString())),We.get(n)):"0"):e[t]}`;var n})).toString()}function Ue(e,t,n={},r=Xe){if(void 0===window.IntersectionObserver&&void 0!==r){const a=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:"number"==typeof n.threshold?n.threshold:0,time:0,boundingClientRect:a,intersectionRect:a,rootBounds:a}),()=>{}}const{id:a,observer:o,elements:s}=function(e){let t=Ge(e),n=Ke.get(t);if(!n){const r=new Map;let a;const o=new IntersectionObserver((t=>{t.forEach((t=>{var n;const o=t.isIntersecting&&a.some((e=>t.intersectionRatio>=e));e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=o),null==(n=r.get(t.target))||n.forEach((e=>{e(o,t)}))}))}),e);a=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:o,elements:r},Ke.set(t,n)}return n}(n);let i=s.get(e)||[];return s.has(e)||s.set(e,i),i.push(t),o.observe(e),function(){i.splice(i.indexOf(t),1),0===i.length&&(s.delete(e),o.unobserve(e)),0===s.size&&(o.disconnect(),Ke.delete(a))}}var qe=class extends r.Component{constructor(e){super(e),Ye(this,"node",null),Ye(this,"_unobserveCb",null),Ye(this,"handleNode",(e=>{this.node&&(this.unobserve(),e||this.props.triggerOnce||this.props.skip||this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=e||null,this.observeNode()})),Ye(this,"handleChange",((e,t)=>{e&&this.props.triggerOnce&&this.unobserve(),function(e){return"function"!=typeof e.children}(this.props)||this.setState({inView:e,entry:t}),this.props.onChange&&this.props.onChange(e,t)})),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:a,fallbackInView:o}=this.props;this._unobserveCb=Ue(this.node,this.handleChange,{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:a},o)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:e}=this.props;if("function"==typeof e){const{inView:t,entry:n}=this.state;return e({inView:t,entry:n,ref:this.handleNode})}const{as:t,triggerOnce:n,threshold:a,root:o,rootMargin:s,onChange:i,skip:l,trackVisibility:c,delay:f,initialInView:u,fallbackInView:d,...m}=this.props;return r.createElement(t||"div",{ref:this.handleNode,...m},e)}};function Je({threshold:e,delay:t,trackVisibility:n,rootMargin:a,root:o,triggerOnce:s,skip:i,initialInView:l,fallbackInView:c,onChange:f}={}){var u;const[d,m]=r.useState(null),p=r.useRef(),[h,y]=r.useState({inView:!!l,entry:void 0});p.current=f,r.useEffect((()=>{if(i||!d)return;let r;return r=Ue(d,((e,t)=>{y({inView:e,entry:t}),p.current&&p.current(e,t),t.isIntersecting&&s&&r&&(r(),r=void 0)}),{root:o,rootMargin:a,threshold:e,trackVisibility:n,delay:t},c),()=>{r&&r()}}),[Array.isArray(e)?e.toString():e,d,o,a,s,i,n,c,t]);const g=null==(u=h.entry)?void 0:u.target,v=r.useRef();d||!g||s||i||v.current===g||(v.current=g,y({inView:!!l,entry:void 0}));const b=[m,h.inView,h.entry];return b.ref=b[0],b.inView=b[1],b.entry=b[2],b}var Qe=n(4954);Fe`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`,Fe`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`,Fe`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`,Fe`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`,Fe`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`,Fe`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,Fe`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,Fe`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,Fe`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,Fe`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`,Fe`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`,Fe`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,Fe`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;const et=Fe`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,tt=Fe`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,nt=Fe`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,rt=Fe`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,at=Fe`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ot=Fe`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,st=Fe`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,it=Fe`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,lt=Fe`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ct=Fe`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ft=Fe`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ut=Fe`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,dt=Fe`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function mt(e,t){return n=>n?e():t()}function pt(e){return mt(e,(()=>null))}function ht(e){return pt((()=>({opacity:0})))(e)}const yt=e=>{const{cascade:t=!1,damping:n=.5,delay:a=0,duration:o=1e3,fraction:s=0,keyframes:i=ot,triggerOnce:l=!1,className:c,style:f,childClassName:u,childStyle:d,children:m,onVisibilityChange:p}=e,h=(0,r.useMemo)((()=>function({duration:e=1e3,delay:t=0,timingFunction:n="ease",keyframes:r=ot,iterationCount:a=1}){return De`
    animation-duration: ${e}ms;
    animation-timing-function: ${n};
    animation-delay: ${t}ms;
    animation-name: ${r};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${a};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}({keyframes:i,duration:o})),[o,i]);return null==m?null:"string"==typeof(y=m)||"number"==typeof y||"boolean"==typeof y?Ve(vt,{...e,animationStyles:h,children:String(m)}):(0,Qe.isFragment)(m)?Ve(bt,{...e,animationStyles:h}):Ve(ze,{children:r.Children.map(m,((i,m)=>{if(!(0,r.isValidElement)(i))return null;const y=a+(t?m*o*n:0);switch(i.type){case"ol":case"ul":return Ve(Ie,{children:({cx:t})=>Ve(i.type,{...i.props,className:t(c,i.props.className),style:Object.assign({},f,i.props.style),children:Ve(yt,{...e,children:i.props.children})})});case"li":return Ve(qe,{threshold:s,triggerOnce:l,onChange:p,children:({inView:e,ref:t})=>Ve(Ie,{children:({cx:n})=>Ve(i.type,{...i.props,ref:t,className:n(u,i.props.className),css:pt((()=>h))(e),style:Object.assign({},d,i.props.style,ht(!e),{animationDelay:y+"ms"})})})});default:return Ve(qe,{threshold:s,triggerOnce:l,onChange:p,children:({inView:e,ref:t})=>Ve("div",{ref:t,className:c,css:pt((()=>h))(e),style:Object.assign({},f,ht(!e),{animationDelay:y+"ms"}),children:Ve(Ie,{children:({cx:e})=>Ve(i.type,{...i.props,className:e(u,i.props.className),style:Object.assign({},d,i.props.style)})})})})}}))});var y},gt={display:"inline-block",whiteSpace:"pre"},vt=e=>{const{animationStyles:t,cascade:n=!1,damping:r=.5,delay:a=0,duration:o=1e3,fraction:s=0,triggerOnce:i=!1,className:l,style:c,children:f,onVisibilityChange:u}=e,{ref:d,inView:m}=Je({triggerOnce:i,threshold:s,onChange:u});return mt((()=>Ve("div",{ref:d,className:l,style:Object.assign({},c,gt),children:f.split("").map(((e,n)=>Ve("span",{css:pt((()=>t))(m),style:{animationDelay:a+n*o*r+"ms"},children:e},n)))})),(()=>Ve(bt,{...e,children:f})))(n)},bt=e=>{const{animationStyles:t,fraction:n=0,triggerOnce:r=!1,className:a,style:o,children:s,onVisibilityChange:i}=e,{ref:l,inView:c}=Je({triggerOnce:r,threshold:n,onChange:i});return Ve("div",{ref:l,className:a,css:pt((()=>t))(c),style:Object.assign({},o,ht(!c)),children:s})};Fe`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`,Fe`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Fe`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Fe`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Fe`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Fe`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`,Fe`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`,Fe`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`,Fe`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`,Fe`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;const xt=Fe`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,Ct=Fe`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,Et=Fe`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,wt=Fe`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,kt=Fe`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,Nt=Fe`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,Lt=Fe`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,Ot=Fe`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,St=Fe`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,jt=Fe`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,$t=Fe`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,Mt=Fe`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,Rt=Fe`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;const At=e=>{const{big:t=!1,direction:n,reverse:a=!1,...o}=e,s=(0,r.useMemo)((()=>function(e,t,n){switch(n){case"bottom-left":return t?Ct:tt;case"bottom-right":return t?Et:nt;case"down":return e?t?kt:at:t?wt:rt;case"left":return e?t?Lt:st:t?Nt:ot;case"right":return e?t?St:lt:t?Ot:it;case"top-left":return t?jt:ct;case"top-right":return t?$t:ft;case"up":return e?t?Rt:dt:t?Mt:ut;default:return t?xt:et}}(t,a,n)),[t,n,a]);return Ve(yt,{keyframes:s,...o})};Fe`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`,Fe`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,Fe`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,Fe`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`,Fe`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;Fe`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`,Fe`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`,Fe`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Fe`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;Fe`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,Fe`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,Fe`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,Fe`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,Fe`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,Fe`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`,Fe`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`,Fe`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,Fe`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,Fe`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;Fe`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Fe`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Fe`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Fe`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Fe`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,Fe`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,Fe`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,Fe`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;Fe`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`,Fe`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Fe`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Fe`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Fe`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Fe`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`,Fe`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Fe`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`,Fe`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`,Fe`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;var Pt=n.p+"static/Alpin_Promo-740e0d1440e820100c9a57caa24afa21.mp4";var Tt=e=>{let{videoData:t}=e;return r.createElement("video",{autoPlay:!0,muted:!0,loop:!0,className:"w-full h-[700px] lg:h-[850px] object-cover rounded-[8px]"},r.createElement("source",{src:Pt,type:"video/mp4"}))},zt=n(4184),Vt=n.n(zt);const Dt=(e,t=null)=>null!=e?String(e):t||null;var Ft=r.createContext(null);function _t(){return _t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_t.apply(this,arguments)}function Zt(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n(1143);function It(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function Bt(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function Yt(e,t){return Object.keys(t).reduce((function(n,a){var o,s=n,i=s[It(a)],l=s[a],c=Zt(s,[It(a),a].map(Bt)),f=t[a],u=function(e,t,n){var a=(0,r.useRef)(void 0!==e),o=(0,r.useState)(t),s=o[0],i=o[1],l=void 0!==e,c=a.current;return a.current=l,!l&&c&&s!==t&&i(t),[l?e:s,(0,r.useCallback)((function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];n&&n.apply(void 0,[e].concat(r)),i(e)}),[n])]}(l,i,e[f]),d=u[0],m=u[1];return _t({},c,((o={})[a]=d,o[f]=m,o))}),e)}n(9712);var Kt=n(6792);const Wt=r.forwardRef((({bsPrefix:e,className:t,as:n,...r},a)=>{e=(0,Kt.vE)(e,"navbar-brand");const o=n||(r.href?"a":"span");return(0,l.jsx)(o,{...r,ref:a,className:Vt()(t,e)})}));Wt.displayName="NavbarBrand";var Ht=Wt;function Xt(e){return e&&e.ownerDocument||document}function Gt(e,t){return function(e){var t=Xt(e);return t&&t.defaultView||window}(e).getComputedStyle(e,t)}var Ut=/([A-Z])/g;var qt=/^ms-/;function Jt(e){return function(e){return e.replace(Ut,"-$1").toLowerCase()}(e).replace(qt,"-ms-")}var Qt=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;var en=function(e,t){var n="",r="";if("string"==typeof t)return e.style.getPropertyValue(Jt(t))||Gt(e).getPropertyValue(Jt(t));Object.keys(t).forEach((function(a){var o=t[a];o||0===o?!function(e){return!(!e||!Qt.test(e))}(a)?n+=Jt(a)+": "+o+";":r+=a+"("+o+") ":e.style.removeProperty(Jt(a))})),r&&(n+="transform: "+r+";"),e.style.cssText+=";"+n},tn=n(1721),nn=n(3935),rn=!1,an=r.createContext(null),on="unmounted",sn="exited",ln="entering",cn="entered",fn="exiting",un=function(e){function t(t,n){var r;r=e.call(this,t,n)||this;var a,o=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?o?(a=sn,r.appearStatus=ln):a=cn:a=t.unmountOnExit||t.mountOnEnter?on:sn,r.state={status:a},r.nextCallback=null,r}(0,tn.Z)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===on?{status:sn}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==ln&&n!==cn&&(t=ln):n!==ln&&n!==cn||(t=fn)}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!=typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t)if(this.cancelNextCallback(),t===ln){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:nn.findDOMNode(this);n&&function(e){e.scrollTop}(n)}this.performEnter(e)}else this.performExit();else this.props.unmountOnExit&&this.state.status===sn&&this.setState({status:on})},n.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,a=this.props.nodeRef?[r]:[nn.findDOMNode(this),r],o=a[0],s=a[1],i=this.getTimeouts(),l=r?i.appear:i.enter;!e&&!n||rn?this.safeSetState({status:cn},(function(){t.props.onEntered(o)})):(this.props.onEnter(o,s),this.safeSetState({status:ln},(function(){t.props.onEntering(o,s),t.onTransitionEnd(l,(function(){t.safeSetState({status:cn},(function(){t.props.onEntered(o,s)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:nn.findDOMNode(this);t&&!rn?(this.props.onExit(r),this.safeSetState({status:fn},(function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:sn},(function(){e.props.onExited(r)}))}))}))):this.safeSetState({status:sn},(function(){e.props.onExited(r)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:nn.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var a=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],o=a[0],s=a[1];this.props.addEndListener(o,s)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if(e===on)return null;var t=this.props,n=t.children,a=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,Zt(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return r.createElement(an.Provider,{value:null},"function"==typeof n?n(e,a):r.cloneElement(r.Children.only(n),a))},t}(r.Component);function dn(){}un.contextType=an,un.propTypes={},un.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:dn,onEntering:dn,onEntered:dn,onExit:dn,onExiting:dn,onExited:dn},un.UNMOUNTED=on,un.EXITED=sn,un.ENTERING=ln,un.ENTERED=cn,un.EXITING=fn;var mn=un,pn=!("undefined"==typeof window||!window.document||!window.document.createElement),hn=!1,yn=!1;try{var gn={get passive(){return hn=!0},get once(){return yn=hn=!0}};pn&&(window.addEventListener("test",gn,gn),window.removeEventListener("test",gn,!0))}catch(Da){}var vn=function(e,t,n,r){if(r&&"boolean"!=typeof r&&!yn){var a=r.once,o=r.capture,s=n;!yn&&a&&(s=n.__once||function e(r){this.removeEventListener(t,e,o),n.call(this,r)},n.__once=s),e.addEventListener(t,s,hn?r:o)}e.addEventListener(t,n,r)};var bn=function(e,t,n,r){var a=r&&"boolean"!=typeof r?r.capture:r;e.removeEventListener(t,n,a),n.__once&&e.removeEventListener(t,n.__once,a)};var xn=function(e,t,n,r){return vn(e,t,n,r),function(){bn(e,t,n,r)}};function Cn(e,t,n){void 0===n&&(n=5);var r=!1,a=setTimeout((function(){r||function(e,t,n,r){if(void 0===n&&(n=!1),void 0===r&&(r=!0),e){var a=document.createEvent("HTMLEvents");a.initEvent(t,n,r),e.dispatchEvent(a)}}(e,"transitionend",!0)}),t+n),o=xn(e,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(a),o()}}function En(e,t,n,r){null==n&&(n=function(e){var t=en(e,"transitionDuration")||"",n=-1===t.indexOf("ms")?1e3:1;return parseFloat(t)*n}(e)||0);var a=Cn(e,n,r),o=xn(e,"transitionend",t);return function(){a(),o()}}function wn(e,t){const n=en(e,t)||"",r=-1===n.indexOf("ms")?1e3:1;return parseFloat(n)*r}function kn(e,t){const n=wn(e,"transitionDuration"),r=wn(e,"transitionDelay"),a=En(e,(n=>{n.target===e&&(a(),t(n))}),n+r)}var Nn=function(...e){return e.filter((e=>null!=e)).reduce(((e,t)=>{if("function"!=typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(...n){e.apply(this,n),t.apply(this,n)}}),null)};function Ln(e){e.offsetHeight}const On=e=>e&&"function"!=typeof e?t=>{e.current=t}:e;var Sn=function(e,t){return(0,r.useMemo)((()=>function(e,t){const n=On(e),r=On(t);return e=>{n&&n(e),r&&r(e)}}(e,t)),[e,t])};var jn=r.forwardRef((({onEnter:e,onEntering:t,onEntered:n,onExit:a,onExiting:o,onExited:s,addEndListener:i,children:c,childRef:f,...u},d)=>{const m=(0,r.useRef)(null),p=Sn(m,f),h=e=>{var t;p((t=e)&&"setState"in t?nn.findDOMNode(t):null!=t?t:null)},y=e=>t=>{e&&m.current&&e(m.current,t)},g=(0,r.useCallback)(y(e),[e]),v=(0,r.useCallback)(y(t),[t]),b=(0,r.useCallback)(y(n),[n]),x=(0,r.useCallback)(y(a),[a]),C=(0,r.useCallback)(y(o),[o]),E=(0,r.useCallback)(y(s),[s]),w=(0,r.useCallback)(y(i),[i]);return(0,l.jsx)(mn,{ref:d,...u,onEnter:g,onEntered:b,onEntering:v,onExit:x,onExited:E,onExiting:C,addEndListener:w,nodeRef:m,children:"function"==typeof c?(e,t)=>c(e,{...t,ref:h}):r.cloneElement(c,{ref:h})})}));const $n={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function Mn(e,t){const n=t[`offset${e[0].toUpperCase()}${e.slice(1)}`],r=$n[e];return n+parseInt(en(t,r[0]),10)+parseInt(en(t,r[1]),10)}const Rn={[sn]:"collapse",[fn]:"collapsing",[ln]:"collapsing",[cn]:"collapse show"},An=r.forwardRef((({onEnter:e,onEntering:t,onEntered:n,onExit:a,onExiting:o,className:s,children:i,dimension:c="height",in:f=!1,timeout:u=300,mountOnEnter:d=!1,unmountOnExit:m=!1,appear:p=!1,getDimensionValue:h=Mn,...y},g)=>{const v="function"==typeof c?c():c,b=(0,r.useMemo)((()=>Nn((e=>{e.style[v]="0"}),e)),[v,e]),x=(0,r.useMemo)((()=>Nn((e=>{const t=`scroll${v[0].toUpperCase()}${v.slice(1)}`;e.style[v]=`${e[t]}px`}),t)),[v,t]),C=(0,r.useMemo)((()=>Nn((e=>{e.style[v]=null}),n)),[v,n]),E=(0,r.useMemo)((()=>Nn((e=>{e.style[v]=`${h(v,e)}px`,Ln(e)}),a)),[a,h,v]),w=(0,r.useMemo)((()=>Nn((e=>{e.style[v]=null}),o)),[v,o]);return(0,l.jsx)(jn,{ref:g,addEndListener:kn,...y,"aria-expanded":y.role?f:null,onEnter:b,onEntering:x,onEntered:C,onExit:E,onExiting:w,childRef:i.ref,in:f,timeout:u,mountOnEnter:d,unmountOnExit:m,appear:p,children:(e,t)=>r.cloneElement(i,{...t,className:Vt()(s,i.props.className,Rn[e],"width"===v&&"collapse-horizontal")})})}));var Pn=An;const Tn=r.createContext(null);Tn.displayName="NavbarContext";var zn=Tn;const Vn=r.forwardRef((({children:e,bsPrefix:t,...n},a)=>{t=(0,Kt.vE)(t,"navbar-collapse");const o=(0,r.useContext)(zn);return(0,l.jsx)(Pn,{in:!(!o||!o.expanded),...n,children:(0,l.jsx)("div",{ref:a,className:t,children:e})})}));Vn.displayName="NavbarCollapse";var Dn=Vn;var Fn=function(e){const t=(0,r.useRef)(e);return(0,r.useEffect)((()=>{t.current=e}),[e]),t};function _n(e){const t=Fn(e);return(0,r.useCallback)((function(...e){return t.current&&t.current(...e)}),[t])}const Zn=r.forwardRef((({bsPrefix:e,className:t,children:n,label:a="Toggle navigation",as:o="button",onClick:s,...i},c)=>{e=(0,Kt.vE)(e,"navbar-toggler");const{onToggle:f,expanded:u}=(0,r.useContext)(zn)||{},d=_n((e=>{s&&s(e),f&&f()}));return"button"===o&&(i.type="button"),(0,l.jsx)(o,{...i,ref:c,onClick:d,"aria-label":a,className:Vt()(t,e,!u&&"collapsed"),children:n||(0,l.jsx)("span",{className:`${e}-icon`})})}));Zn.displayName="NavbarToggle";var In=Zn;const Bn=void 0!==n.g&&n.g.navigator&&"ReactNative"===n.g.navigator.product;var Yn="undefined"!=typeof document||Bn?r.useLayoutEffect:r.useEffect;const Kn=new WeakMap,Wn=(e,t)=>{if(!e||!t)return;const n=Kn.get(t)||new Map;Kn.set(t,n);let r=n.get(e);return r||(r=t.matchMedia(e),r.refCount=0,n.set(r.media,r)),r};function Hn(e,t=("undefined"==typeof window?void 0:window)){const n=Wn(e,t),[a,o]=(0,r.useState)((()=>!!n&&n.matches));return Yn((()=>{let n=Wn(e,t);if(!n)return o(!1);let r=Kn.get(t);const a=()=>{o(n.matches)};return n.refCount++,n.addListener(a),a(),()=>{n.removeListener(a),n.refCount--,n.refCount<=0&&(null==r||r.delete(n.media)),n=void 0}}),[e]),a}const Xn=function(e){const t=Object.keys(e);function n(e,t){return e===t?t:e?`${e} and ${t}`:t}function a(n){const r=function(e){return t[Math.min(t.indexOf(e)+1,t.length-1)]}(n);let a=e[r];return a="number"==typeof a?a-.2+"px":`calc(${a} - 0.2px)`,`(max-width: ${a})`}return function(t,o,s){let i;return"object"==typeof t?(i=t,s=o,o=!0):i={[t]:o=o||!0},Hn((0,r.useMemo)((()=>Object.entries(i).reduce(((t,[r,o])=>("up"!==o&&!0!==o||(t=n(t,function(t){let n=e[t];return"number"==typeof n&&(n=`${n}px`),`(min-width: ${n})`}(r))),"down"!==o&&!0!==o||(t=n(t,a(r))),t)),"")),[JSON.stringify(i)]),s)}}({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400});var Gn=Xn;function Un(e){void 0===e&&(e=Xt());try{var t=e.activeElement;return t&&t.nodeName?t:null}catch(Da){return e.body}}function qn(e,t){return e.contains?e.contains(t):e.compareDocumentPosition?e===t||!!(16&e.compareDocumentPosition(t)):void 0}function Jn(e){const t=function(e){const t=(0,r.useRef)(e);return t.current=e,t}(e);(0,r.useEffect)((()=>()=>t.current()),[])}const Qn="data-rr-ui-";function er(e){return`${Qn}${e}`}const tr=er("modal-open");var nr=class{constructor({ownerDocument:e,handleContainerOverflow:t=!0,isRTL:n=!1}={}){this.handleContainerOverflow=t,this.isRTL=n,this.modals=[],this.ownerDocument=e}getScrollbarWidth(){return function(e=document){const t=e.defaultView;return Math.abs(t.innerWidth-e.documentElement.clientWidth)}(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(e){}removeModalAttributes(e){}setContainerStyle(e){const t={overflow:"hidden"},n=this.isRTL?"paddingLeft":"paddingRight",r=this.getElement();e.style={overflow:r.style.overflow,[n]:r.style[n]},e.scrollBarWidth&&(t[n]=`${parseInt(en(r,n)||"0",10)+e.scrollBarWidth}px`),r.setAttribute(tr,""),en(r,t)}reset(){[...this.modals].forEach((e=>this.remove(e)))}removeContainerStyle(e){const t=this.getElement();t.removeAttribute(tr),Object.assign(t.style,e.style)}add(e){let t=this.modals.indexOf(e);return-1!==t?t:(t=this.modals.length,this.modals.push(e),this.setModalAttributes(e),0!==t||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),t)}remove(e){const t=this.modals.indexOf(e);-1!==t&&(this.modals.splice(t,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(e))}isTopModal(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e}};const rr=(0,r.createContext)(pn?window:void 0);rr.Provider;function ar(){return(0,r.useContext)(rr)}const or=(e,t)=>pn?null==e?(t||Xt()).body:("function"==typeof e&&(e=e()),e&&"current"in e&&(e=e.current),e&&("nodeType"in e||e.getBoundingClientRect)?e:null):null;var sr=function({children:e,in:t,onExited:n,mountOnEnter:a,unmountOnExit:o}){const s=(0,r.useRef)(null),i=(0,r.useRef)(t),l=_n(n);(0,r.useEffect)((()=>{t?i.current=!0:l(s.current)}),[t,l]);const c=Sn(s,e.ref),f=(0,r.cloneElement)(e,{ref:c});return t?f:o||!i.current&&a?null:f};function ir({children:e,in:t,onExited:n,onEntered:a,transition:o}){const[s,i]=(0,r.useState)(!t);t&&s&&i(!1);const l=function({in:e,onTransition:t}){const n=(0,r.useRef)(null),a=(0,r.useRef)(!0),o=_n(t);return Yn((()=>{if(!n.current)return;let t=!1;return o({in:e,element:n.current,initial:a.current,isStale:()=>t}),()=>{t=!0}}),[e,o]),Yn((()=>(a.current=!1,()=>{a.current=!0})),[]),n}({in:!!t,onTransition:e=>{Promise.resolve(o(e)).then((()=>{e.isStale()||(e.in?null==a||a(e.element,e.initial):(i(!0),null==n||n(e.element)))}),(t=>{throw e.in||i(!0),t}))}}),c=Sn(l,e.ref);return s&&!t?null:(0,r.cloneElement)(e,{ref:c})}function lr(e,t,n){return e?(0,l.jsx)(e,Object.assign({},n)):t?(0,l.jsx)(ir,Object.assign({},n,{transition:t})):(0,l.jsx)(sr,Object.assign({},n))}const cr=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];let fr;function ur(e){const t=ar(),n=e||function(e){return fr||(fr=new nr({ownerDocument:null==e?void 0:e.document})),fr}(t),a=(0,r.useRef)({dialog:null,backdrop:null});return Object.assign(a.current,{add:()=>n.add(a.current),remove:()=>n.remove(a.current),isTopModal:()=>n.isTopModal(a.current),setDialogRef:(0,r.useCallback)((e=>{a.current.dialog=e}),[]),setBackdropRef:(0,r.useCallback)((e=>{a.current.backdrop=e}),[])})}const dr=(0,r.forwardRef)(((e,t)=>{let{show:n=!1,role:a="dialog",className:o,style:s,children:i,backdrop:c=!0,keyboard:f=!0,onBackdropClick:u,onEscapeKeyDown:d,transition:m,runTransition:p,backdropTransition:h,runBackdropTransition:y,autoFocus:g=!0,enforceFocus:v=!0,restoreFocus:b=!0,restoreFocusOptions:x,renderDialog:C,renderBackdrop:E=(e=>(0,l.jsx)("div",Object.assign({},e))),manager:w,container:k,onShow:N,onHide:L=(()=>{}),onExit:O,onExited:S,onExiting:j,onEnter:$,onEntering:M,onEntered:R}=e,A=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,cr);const P=ar(),T=function(e,t){const n=ar(),[a,o]=(0,r.useState)((()=>or(e,null==n?void 0:n.document)));if(!a){const t=or(e);t&&o(t)}return(0,r.useEffect)((()=>{t&&a&&t(a)}),[t,a]),(0,r.useEffect)((()=>{const t=or(e);t!==a&&o(t)}),[e,a]),a}(k),z=ur(w),V=function(){const e=(0,r.useRef)(!0),t=(0,r.useRef)((()=>e.current));return(0,r.useEffect)((()=>(e.current=!0,()=>{e.current=!1})),[]),t.current}(),D=function(e){const t=(0,r.useRef)(null);return(0,r.useEffect)((()=>{t.current=e})),t.current}(n),[F,_]=(0,r.useState)(!n),Z=(0,r.useRef)(null);(0,r.useImperativeHandle)(t,(()=>z),[z]),pn&&!D&&n&&(Z.current=Un(null==P?void 0:P.document)),n&&F&&_(!1);const I=_n((()=>{if(z.add(),X.current=xn(document,"keydown",W),H.current=xn(document,"focus",(()=>setTimeout(Y)),!0),N&&N(),g){var e,t;const n=Un(null!=(e=null==(t=z.dialog)?void 0:t.ownerDocument)?e:null==P?void 0:P.document);z.dialog&&n&&!qn(z.dialog,n)&&(Z.current=n,z.dialog.focus())}})),B=_n((()=>{var e;(z.remove(),null==X.current||X.current(),null==H.current||H.current(),b)&&(null==(e=Z.current)||null==e.focus||e.focus(x),Z.current=null)}));(0,r.useEffect)((()=>{n&&T&&I()}),[n,T,I]),(0,r.useEffect)((()=>{F&&B()}),[F,B]),Jn((()=>{B()}));const Y=_n((()=>{if(!v||!V()||!z.isTopModal())return;const e=Un(null==P?void 0:P.document);z.dialog&&e&&!qn(z.dialog,e)&&z.dialog.focus()})),K=_n((e=>{e.target===e.currentTarget&&(null==u||u(e),!0===c&&L())})),W=_n((e=>{f&&function(e){return"Escape"===e.code||27===e.keyCode}(e)&&z.isTopModal()&&(null==d||d(e),e.defaultPrevented||L())})),H=(0,r.useRef)(),X=(0,r.useRef)();if(!T)return null;const G=Object.assign({role:a,ref:z.setDialogRef,"aria-modal":"dialog"===a||void 0},A,{style:s,className:o,tabIndex:-1});let U=C?C(G):(0,l.jsx)("div",Object.assign({},G,{children:r.cloneElement(i,{role:"document"})}));U=lr(m,p,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!n,onExit:O,onExiting:j,onExited:(...e)=>{_(!0),null==S||S(...e)},onEnter:$,onEntering:M,onEntered:R,children:U});let q=null;return c&&(q=E({ref:z.setBackdropRef,onClick:K}),q=lr(h,y,{in:!!n,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:q})),(0,l.jsx)(l.Fragment,{children:nn.createPortal((0,l.jsxs)(l.Fragment,{children:[q,U]}),T)})}));dr.displayName="Modal";var mr=Object.assign(dr,{Manager:nr});const pr={[ln]:"show",[cn]:"show"},hr=r.forwardRef((({className:e,children:t,transitionClasses:n={},onEnter:a,...o},s)=>{const i={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...o},c=(0,r.useCallback)(((e,t)=>{Ln(e),null==a||a(e,t)}),[a]);return(0,l.jsx)(jn,{ref:s,addEndListener:kn,...i,onEnter:c,childRef:t.ref,children:(a,o)=>r.cloneElement(t,{...o,className:Vt()("fade",e,t.props.className,pr[a],n[a])})})}));hr.displayName="Fade";var yr=hr;const gr=r.forwardRef((({className:e,bsPrefix:t,as:n="div",...r},a)=>(t=(0,Kt.vE)(t,"offcanvas-body"),(0,l.jsx)(n,{ref:a,className:Vt()(e,t),...r}))));gr.displayName="OffcanvasBody";var vr=gr;const br={[ln]:"show",[cn]:"show"},xr=r.forwardRef((({bsPrefix:e,className:t,children:n,in:a=!1,mountOnEnter:o=!1,unmountOnExit:s=!1,appear:i=!1,...c},f)=>(e=(0,Kt.vE)(e,"offcanvas"),(0,l.jsx)(jn,{ref:f,addEndListener:kn,in:a,mountOnEnter:o,unmountOnExit:s,appear:i,...c,childRef:n.ref,children:(a,o)=>r.cloneElement(n,{...o,className:Vt()(t,n.props.className,(a===ln||a===fn)&&`${e}-toggling`,br[a])})}))));xr.displayName="OffcanvasToggling";var Cr=xr;var Er=r.createContext({onHide(){}}),wr=n(5697),kr=n.n(wr);const Nr={"aria-label":kr().string,onClick:kr().func,variant:kr().oneOf(["white"])},Lr=r.forwardRef((({className:e,variant:t,"aria-label":n="Close",...r},a)=>(0,l.jsx)("button",{ref:a,type:"button",className:Vt()("btn-close",t&&`btn-close-${t}`,e),"aria-label":n,...r})));Lr.displayName="CloseButton",Lr.propTypes=Nr;var Or=Lr;const Sr=r.forwardRef((({closeLabel:e="Close",closeVariant:t,closeButton:n=!1,onHide:a,children:o,...s},i)=>{const c=(0,r.useContext)(Er),f=_n((()=>{null==c||c.onHide(),null==a||a()}));return(0,l.jsxs)("div",{ref:i,...s,children:[o,n&&(0,l.jsx)(Or,{"aria-label":e,variant:t,onClick:f})]})}));var jr=Sr;const $r=r.forwardRef((({bsPrefix:e,className:t,closeLabel:n="Close",closeButton:r=!1,...a},o)=>(e=(0,Kt.vE)(e,"offcanvas-header"),(0,l.jsx)(jr,{ref:o,...a,className:Vt()(t,e),closeLabel:n,closeButton:r}))));$r.displayName="OffcanvasHeader";var Mr=$r;const Rr=(Ar="h5",r.forwardRef(((e,t)=>(0,l.jsx)("div",{...e,ref:t,className:Vt()(e.className,Ar)}))));var Ar;const Pr=r.forwardRef((({className:e,bsPrefix:t,as:n=Rr,...r},a)=>(t=(0,Kt.vE)(t,"offcanvas-title"),(0,l.jsx)(n,{ref:a,className:Vt()(e,t),...r}))));Pr.displayName="OffcanvasTitle";var Tr=Pr;var zr=Function.prototype.bind.call(Function.prototype.call,[].slice);function Vr(e,t){return zr(e.querySelectorAll(t))}function Dr(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}const Fr=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",_r=".sticky-top",Zr=".navbar-toggler";class Ir extends nr{adjustAndStore(e,t,n){const r=t.style[e];t.dataset[e]=r,en(t,{[e]:`${parseFloat(en(t,e))+n}px`})}restore(e,t){const n=t.dataset[e];void 0!==n&&(delete t.dataset[e],en(t,{[e]:n}))}setContainerStyle(e){super.setContainerStyle(e);const t=this.getElement();if(function(e,t){e.classList?e.classList.add(t):function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}(e,t)||("string"==typeof e.className?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))}(t,"modal-open"),!e.scrollBarWidth)return;const n=this.isRTL?"paddingLeft":"paddingRight",r=this.isRTL?"marginLeft":"marginRight";Vr(t,Fr).forEach((t=>this.adjustAndStore(n,t,e.scrollBarWidth))),Vr(t,_r).forEach((t=>this.adjustAndStore(r,t,-e.scrollBarWidth))),Vr(t,Zr).forEach((t=>this.adjustAndStore(r,t,e.scrollBarWidth)))}removeContainerStyle(e){super.removeContainerStyle(e);const t=this.getElement();!function(e,t){e.classList?e.classList.remove(t):"string"==typeof e.className?e.className=Dr(e.className,t):e.setAttribute("class",Dr(e.className&&e.className.baseVal||"",t))}(t,"modal-open");const n=this.isRTL?"paddingLeft":"paddingRight",r=this.isRTL?"marginLeft":"marginRight";Vr(t,Fr).forEach((e=>this.restore(n,e))),Vr(t,_r).forEach((e=>this.restore(r,e))),Vr(t,Zr).forEach((e=>this.restore(r,e)))}}let Br;var Yr=Ir;function Kr(e){return(0,l.jsx)(Cr,{...e})}function Wr(e){return(0,l.jsx)(yr,{...e})}const Hr=r.forwardRef((({bsPrefix:e,className:t,children:n,"aria-labelledby":a,placement:o="start",responsive:s,show:i=!1,backdrop:c=!0,keyboard:f=!0,scroll:u=!1,onEscapeKeyDown:d,onShow:m,onHide:p,container:h,autoFocus:y=!0,enforceFocus:g=!0,restoreFocus:v=!0,restoreFocusOptions:b,onEntered:x,onExit:C,onExiting:E,onEnter:w,onEntering:k,onExited:N,backdropClassName:L,manager:O,renderStaticNode:S=!1,...j},$)=>{const M=(0,r.useRef)();e=(0,Kt.vE)(e,"offcanvas");const{onToggle:R}=(0,r.useContext)(zn)||{},[A,P]=(0,r.useState)(!1),T=Gn(s||"xs","up");(0,r.useEffect)((()=>{P(s?i&&!T:i)}),[i,s,T]);const z=_n((()=>{null==R||R(),null==p||p()})),V=(0,r.useMemo)((()=>({onHide:z})),[z]);const D=(0,r.useCallback)((t=>(0,l.jsx)("div",{...t,className:Vt()(`${e}-backdrop`,L)})),[L,e]),F=r=>(0,l.jsx)("div",{...r,...j,className:Vt()(t,s?`${e}-${s}`:e,`${e}-${o}`),"aria-labelledby":a,children:n});return(0,l.jsxs)(l.Fragment,{children:[!A&&(s||S)&&F({}),(0,l.jsx)(Er.Provider,{value:V,children:(0,l.jsx)(mr,{show:A,ref:$,backdrop:c,container:h,keyboard:f,autoFocus:y,enforceFocus:g&&!u,restoreFocus:v,restoreFocusOptions:b,onEscapeKeyDown:d,onShow:m,onHide:z,onEnter:(e,...t)=>{e&&(e.style.visibility="visible"),null==w||w(e,...t)},onEntering:k,onEntered:x,onExit:C,onExiting:E,onExited:(e,...t)=>{e&&(e.style.visibility=""),null==N||N(...t)},manager:O||(u?(M.current||(M.current=new Yr({handleContainerOverflow:!1})),M.current):function(e){return Br||(Br=new Ir(e)),Br}()),transition:Kr,backdropTransition:Wr,renderBackdrop:D,renderDialog:F})})]})}));Hr.displayName="Offcanvas";var Xr=Object.assign(Hr,{Body:vr,Header:Mr,Title:Tr});const Gr=r.forwardRef(((e,t)=>{const n=(0,r.useContext)(zn);return(0,l.jsx)(Xr,{ref:t,show:!(null==n||!n.expanded),...e,renderStaticNode:!0})}));Gr.displayName="NavbarOffcanvas";var Ur=Gr;const qr=r.forwardRef((({className:e,bsPrefix:t,as:n="span",...r},a)=>(t=(0,Kt.vE)(t,"navbar-text"),(0,l.jsx)(n,{ref:a,className:Vt()(e,t),...r}))));qr.displayName="NavbarText";var Jr=qr;const Qr=r.forwardRef(((e,t)=>{const{bsPrefix:n,expand:a=!0,variant:o="light",bg:s,fixed:i,sticky:c,className:f,as:u="nav",expanded:d,onToggle:m,onSelect:p,collapseOnSelect:h=!1,...y}=Yt(e,{expanded:"onToggle"}),g=(0,Kt.vE)(n,"navbar"),v=(0,r.useCallback)(((...e)=>{null==p||p(...e),h&&d&&(null==m||m(!1))}),[p,h,d,m]);void 0===y.role&&"nav"!==u&&(y.role="navigation");let b=`${g}-expand`;"string"==typeof a&&(b=`${b}-${a}`);const x=(0,r.useMemo)((()=>({onToggle:()=>null==m?void 0:m(!d),bsPrefix:g,expanded:!!d,expand:a})),[g,d,a,m]);return(0,l.jsx)(zn.Provider,{value:x,children:(0,l.jsx)(Ft.Provider,{value:v,children:(0,l.jsx)(u,{ref:t,...y,className:Vt()(f,g,a&&b,o&&`${g}-${o}`,s&&`bg-${s}`,c&&`sticky-${c}`,i&&`fixed-${i}`)})})})}));Qr.displayName="Navbar";var ea=Object.assign(Qr,{Brand:Ht,Collapse:Dn,Offcanvas:Ur,Text:Jr,Toggle:In}),ta=n(8032);n(4391);const na=r.createContext(null);na.displayName="NavContext";var ra=na;var aa=r.createContext(null);const oa=["as","disabled"];function sa({tagName:e,disabled:t,href:n,target:r,rel:a,role:o,onClick:s,tabIndex:i=0,type:l}){e||(e=null!=n||null!=r||null!=a?"a":"button");const c={tagName:e};if("button"===e)return[{type:l||"button",disabled:t},c];const f=r=>{(t||"a"===e&&function(e){return!e||"#"===e.trim()}(n))&&r.preventDefault(),t?r.stopPropagation():null==s||s(r)};return"a"===e&&(n||(n="#"),t&&(n=void 0)),[{role:null!=o?o:"button",disabled:void 0,tabIndex:t?void 0:i,href:n,target:"a"===e?r:void 0,"aria-disabled":t||void 0,rel:"a"===e?a:void 0,onClick:f,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),f(e))}},c]}const ia=r.forwardRef(((e,t)=>{let{as:n,disabled:r}=e,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,oa);const[o,{tagName:s}]=sa(Object.assign({tagName:n,disabled:r},a));return(0,l.jsx)(s,Object.assign({},a,o,{ref:t}))}));ia.displayName="Button";var la=ia;const ca=["as","active","eventKey"];function fa({key:e,onClick:t,active:n,id:a,role:o,disabled:s}){const i=(0,r.useContext)(Ft),l=(0,r.useContext)(ra),c=(0,r.useContext)(aa);let f=n;const u={role:o};if(l){o||"tablist"!==l.role||(u.role="tab");const t=l.getControllerId(null!=e?e:null),r=l.getControlledId(null!=e?e:null);u[er("event-key")]=e,u.id=t||a,f=null==n&&null!=e?l.activeKey===e:n,!f&&(null!=c&&c.unmountOnExit||null!=c&&c.mountOnEnter)||(u["aria-controls"]=r)}return"tab"===u.role&&(u["aria-selected"]=f,f||(u.tabIndex=-1),s&&(u.tabIndex=-1,u["aria-disabled"]=!0)),u.onClick=_n((n=>{s||(null==t||t(n),null!=e&&i&&!n.isPropagationStopped()&&i(e,n))})),[u,{isActive:f}]}const ua=r.forwardRef(((e,t)=>{let{as:n=la,active:r,eventKey:a}=e,o=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,ca);const[s,i]=fa(Object.assign({key:Dt(a,o.href),active:r},o));return s[er("active")]=i.isActive,(0,l.jsx)(n,Object.assign({},o,s,{ref:t}))}));ua.displayName="NavItem";var da=ua;const ma=["as","onSelect","activeKey","role","onKeyDown"];const pa=()=>{},ha=er("event-key"),ya=r.forwardRef(((e,t)=>{let{as:n="div",onSelect:a,activeKey:o,role:s,onKeyDown:i}=e,c=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,ma);const f=function(){const[,e]=(0,r.useReducer)((e=>!e),!1);return e}(),u=(0,r.useRef)(!1),d=(0,r.useContext)(Ft),m=(0,r.useContext)(aa);let p,h;m&&(s=s||"tablist",o=m.activeKey,p=m.getControlledId,h=m.getControllerId);const y=(0,r.useRef)(null),g=e=>{const t=y.current;if(!t)return null;const n=Vr(t,`[${ha}]:not([aria-disabled=true])`),r=t.querySelector("[aria-selected=true]");if(!r||r!==document.activeElement)return null;const a=n.indexOf(r);if(-1===a)return null;let o=a+e;return o>=n.length&&(o=0),o<0&&(o=n.length-1),n[o]},v=(e,t)=>{null!=e&&(null==a||a(e,t),null==d||d(e,t))};(0,r.useEffect)((()=>{if(y.current&&u.current){const e=y.current.querySelector(`[${ha}][aria-selected=true]`);null==e||e.focus()}u.current=!1}));const b=Sn(t,y);return(0,l.jsx)(Ft.Provider,{value:v,children:(0,l.jsx)(ra.Provider,{value:{role:s,activeKey:Dt(o),getControlledId:p||pa,getControllerId:h||pa},children:(0,l.jsx)(n,Object.assign({},c,{onKeyDown:e=>{if(null==i||i(e),!m)return;let t;switch(e.key){case"ArrowLeft":case"ArrowUp":t=g(-1);break;case"ArrowRight":case"ArrowDown":t=g(1);break;default:return}var n;t&&(e.preventDefault(),v(t.dataset[(n="EventKey",`rrUi${n}`)]||null,e),u.current=!0,f())},ref:b,role:s}))})})}));ya.displayName="Nav";var ga=Object.assign(ya,{Item:da});const va=r.createContext(null);va.displayName="CardHeaderContext";var ba=va;const xa=r.forwardRef((({className:e,bsPrefix:t,as:n="div",...r},a)=>(t=(0,Kt.vE)(t,"nav-item"),(0,l.jsx)(n,{ref:a,className:Vt()(e,t),...r}))));xa.displayName="NavItem";var Ca=xa;new WeakMap;const Ea=["onKeyDown"];const wa=r.forwardRef(((e,t)=>{let{onKeyDown:n}=e,r=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,Ea);const[a]=sa(Object.assign({tagName:"a"},r)),o=_n((e=>{a.onKeyDown(e),null==n||n(e)}));return(s=r.href)&&"#"!==s.trim()&&"button"!==r.role?(0,l.jsx)("a",Object.assign({ref:t},r,{onKeyDown:n})):(0,l.jsx)("a",Object.assign({ref:t},r,a,{onKeyDown:o}));var s}));wa.displayName="Anchor";var ka=wa;const Na=r.forwardRef((({bsPrefix:e,className:t,as:n=ka,active:r,eventKey:a,disabled:o=!1,...s},i)=>{e=(0,Kt.vE)(e,"nav-link");const[c,f]=fa({key:Dt(a,s.href),active:r,disabled:o,...s});return(0,l.jsx)(n,{...s,...c,ref:i,disabled:o,className:Vt()(t,e,o&&"disabled",f.isActive&&"active")})}));Na.displayName="NavLink";var La=Na;const Oa=r.forwardRef(((e,t)=>{const{as:n="div",bsPrefix:a,variant:o,fill:s=!1,justify:i=!1,navbar:c,navbarScroll:f,className:u,activeKey:d,...m}=Yt(e,{activeKey:"onSelect"}),p=(0,Kt.vE)(a,"nav");let h,y,g=!1;const v=(0,r.useContext)(zn),b=(0,r.useContext)(ba);return v?(h=v.bsPrefix,g=null==c||c):b&&({cardHeaderBsPrefix:y}=b),(0,l.jsx)(ga,{as:n,ref:t,activeKey:d,className:Vt()(u,{[p]:!g,[`${h}-nav`]:g,[`${h}-nav-scroll`]:g&&f,[`${y}-${o}`]:!!y,[`${p}-${o}`]:!!o,[`${p}-fill`]:s,[`${p}-justified`]:i}),...m})}));Oa.displayName="Nav";var Sa=Object.assign(Oa,{Item:Ca,Link:La}),ja=n(4160),$a=n(6049),Ma=n.n($a);var Ra=e=>{let{title:t,path:n,hasIcon:a=!1,isSmallFont:o=!1}=e;return r.createElement(ja.rU,{to:n,className:"flex items-center gap-[10px] px-[20px] py-[10px] bg-lead rounded-[30px] border-2 border-solid border-transparent no-underline"},r.createElement("span",{className:"flex w-fit font-sharp font-medium text-text text-[16px] sm:text-[12px] lg:text-[16px] leading-[normal]",style:{fontSize:o?"14px":"16px"}},t),a&&r.createElement(Ma(),null))};var Aa=()=>r.createElement(Sa,{className:"ml-auto"},r.createElement(Sa.Item,{className:"lg:flex lg:items-center p-[27px] text-left font-sharp font-normal text-lead text-[14px] tracking-[0.20px] leading-[normal] whitespace-nowrap"},r.createElement(Sa.Link,{href:"/about",eventKey:"link-1",className:"mr-7"},"Rólunk"),r.createElement(Sa.Link,{href:"/alpintechnic",eventKey:"link-2",className:"mr-7"},"Alpintechnika"),r.createElement(Sa.Link,{href:"/references",eventKey:"link-3",className:"mr-7"},"Referenciák"),r.createElement(Sa.Link,{href:"/contact",eventKey:"link-4",className:"mr-7"},"Kapcsolat"),r.createElement(Sa.Item,{className:"ml-auto flex"},r.createElement(Ra,{title:"Azonnali ajánlat",hasIcon:!1,path:"/contact",isSmallFont:!0})))),Pa=n(3791),Ta=n.n(Pa);var za=()=>{const{0:e,1:t}=(0,r.useState)(!1);return r.createElement(ea,{collapseOnSelect:!0,expand:"lg",bg:"none",variant:"light",className:"text-right text-lg-left align-items-start pt-4"},r.createElement(ea.Brand,{href:"/",className:"d-none d-md-block pl-[30px] m-0"},r.createElement(ta.S,{height:150,src:"../../images/Brand/logo.png",alt:"flowalpin logo",placeholder:"blurred",className:"ml-5 mt-3",__error:'No data found for image "../../images/Brand/logo.png"\n              undefinedCould not read image data file "/Users/deradam/Desktop/WorkSpace/Gatsby-Contentful-project/.cache/caches/gatsby-plugin-image/3268560836.json". \nThis may mean that the images in "/Users/deradam/Desktop/WorkSpace/Gatsby-Contentful-project/src/components/Navbar/index.tsx" were not processed.\nPlease ensure that your gatsby version is at least 2.24.78.'})),r.createElement(ea.Toggle,{"aria-controls":"responsive-navbar-nav",style:{border:"none",outline:"none",boxShadow:"none"},onClick:()=>t(!e)},e&&r.createElement(Ta(),null)),r.createElement(ea.Collapse,{className:"mobile-nav justify-content-end mw-100",id:"responsive-navbar-nav"},r.createElement(Aa,null)),r.createElement("div",{className:"custom-mobileNav rounded-[8px] h-150 z-10",style:{left:e?"0":"-100%"}},r.createElement(Aa,null)),r.createElement("div",{className:"ml-auto d-lg-none mr-14"},r.createElement(ea.Brand,{href:"/"},r.createElement(ta.S,{height:150,src:"../../images/Brand/logo.png",alt:"Veritgo logo",placeholder:"blurred",__error:'No data found for image "../../images/Brand/logo.png"\n              undefinedCould not read image data file "/Users/deradam/Desktop/WorkSpace/Gatsby-Contentful-project/.cache/caches/gatsby-plugin-image/3268560836.json". \nThis may mean that the images in "/Users/deradam/Desktop/WorkSpace/Gatsby-Contentful-project/src/components/Navbar/index.tsx" were not processed.\nPlease ensure that your gatsby version is at least 2.24.78.'}))))};var Va=e=>{let{headerData:t,isVideoHeader:a}=e;return r.createElement(o.Z,{fluid:!0,className:"h-auto mt-3 p-0 rounded-[8px] relative"},a&&r.createElement(Tt,null),!a&&r.createElement(ta.S,{height:400,width:1300,src:"../../images/References/header8.png",alt:"Váci út",placeholder:"blurred",className:"w-full object-cover rounded-[8px]",__imageData:n(6239)}),r.createElement("div",{className:"absolute top-0 left-0 w-full h-full bg-overlay rounded-[8px]"}),r.createElement(At,{triggerOnce:!0},r.createElement(s.Z,{className:"absolute top-0 left-0 w-full h-full"},r.createElement(za,null),a&&r.createElement(i.Z,{className:"hidden md:block"}),a&&r.createElement(i.Z,{md:{span:3,offset:2},className:"flex flex-col items-center h-auto gap-[32px] mx-3"},r.createElement("span",{className:"font-tanker font-normal text-white text-[38px] lg:text-[70px] text-center tracking-[0] leading-[42px] lg:leading-[72px]"},"A magasban végzett munkák specialistája"),r.createElement("span",{className:"relative font-sharp font-medium text-lead text-[14px] lg:text-[16px] text-center tracking-[0] leading-[14px] lg:leading-[22px]"},"Egy megbízható, profi és rugalmas partner az alpintechnikai munkákhoz több éves tapasztalattal.",r.createElement("br",null),"Ismerd meg referenciáinkat és bízd ránk a magaslati kihívásokat!"),r.createElement(Ra,{title:"Azonnali ajánlatot szeretne?",hasIcon:!0,path:"/contact"})),a&&r.createElement(i.Z,null))))}},8679:function(e,t,n){"use strict";var r=n(9864),a={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},s={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},i={};function l(e){return r.isMemo(e)?s:i[e.$$typeof]||a}i[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},i[r.Memo]=s;var c=Object.defineProperty,f=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,m=Object.getPrototypeOf,p=Object.prototype;e.exports=function e(t,n,r){if("string"!=typeof n){if(p){var a=m(n);a&&a!==p&&e(t,a,r)}var s=f(n);u&&(s=s.concat(u(n)));for(var i=l(t),h=l(n),y=0;y<s.length;++y){var g=s[y];if(!(o[g]||r&&r[g]||h&&h[g]||i&&i[g])){var v=d(n,g);try{c(t,g,v)}catch(b){}}}}return t}},4391:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,o.default)((function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];var a=null;return t.forEach((function(e){if(null==a){var t=e.apply(void 0,n);null!=t&&(a=t)}})),a}))};var r,a=n(2613),o=(r=a)&&r.__esModule?r:{default:r};e.exports=t.default},2613:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,n,r,a,o,s){var i=a||"<<anonymous>>",l=s||r;if(null==n[r])return t?new Error("Required "+o+" `"+l+"` was not specified in `"+i+"`."):null;for(var c=arguments.length,f=Array(c>6?c-6:0),u=6;u<c;u++)f[u-6]=arguments[u];return e.apply(void 0,[n,r,i,o,l].concat(f))}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n},e.exports=t.default},4415:function(e,t){"use strict";var n,r=Symbol.for("react.element"),a=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.server_context"),u=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),m=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),y=Symbol.for("react.offscreen");function g(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case o:case i:case s:case d:case m:return e;default:switch(e=e&&e.$$typeof){case f:case c:case u:case h:case p:case l:return e;default:return t}}case a:return t}}}n=Symbol.for("react.module.reference"),t.isFragment=function(e){return g(e)===o}},4954:function(e,t,n){"use strict";e.exports=n(4415)},1555:function(e,t,n){"use strict";var r=n(4184),a=n.n(r),o=n(7294),s=n(6792),i=n(5893);const l=o.forwardRef(((e,t)=>{const[{className:n,...r},{as:o="div",bsPrefix:l,spans:c}]=function({as:e,bsPrefix:t,className:n,...r}){t=(0,s.vE)(t,"col");const o=(0,s.pi)(),i=(0,s.zG)(),l=[],c=[];return o.forEach((e=>{const n=r[e];let a,o,s;delete r[e],"object"==typeof n&&null!=n?({span:a,offset:o,order:s}=n):a=n;const f=e!==i?`-${e}`:"";a&&l.push(!0===a?`${t}${f}`:`${t}${f}-${a}`),null!=s&&c.push(`order${f}-${s}`),null!=o&&c.push(`offset${f}-${o}`)})),[{...r,className:a()(n,...l,...c)},{as:e,bsPrefix:t,spans:l}]}(e);return(0,i.jsx)(o,{...r,ref:t,className:a()(n,!c.length&&l)})}));l.displayName="Col",t.Z=l},682:function(e,t,n){"use strict";var r=n(4184),a=n.n(r),o=n(7294),s=n(6792),i=n(5893);const l=o.forwardRef((({bsPrefix:e,fluid:t=!1,as:n="div",className:r,...o},l)=>{const c=(0,s.vE)(e,"container"),f="string"==typeof t?`-${t}`:"-fluid";return(0,i.jsx)(n,{ref:l,...o,className:a()(r,t?`${c}${f}`:c)})}));l.displayName="Container",t.Z=l},4051:function(e,t,n){"use strict";var r=n(4184),a=n.n(r),o=n(7294),s=n(6792),i=n(5893);const l=o.forwardRef((({bsPrefix:e,className:t,as:n="div",...r},o)=>{const l=(0,s.vE)(e,"row"),c=(0,s.pi)(),f=(0,s.zG)(),u=`${l}-cols`,d=[];return c.forEach((e=>{const t=r[e];let n;delete r[e],null!=t&&"object"==typeof t?({cols:n}=t):n=t;const a=e!==f?`-${e}`:"";null!=n&&d.push(`${u}${a}-${n}`)})),(0,i.jsx)(n,{ref:o,...r,className:a()(t,l,...d)})}));l.displayName="Row",t.Z=l},6792:function(e,t,n){"use strict";n.d(t,{pi:function(){return c},vE:function(){return l},zG:function(){return f}});var r=n(7294);n(5893);const a=["xxl","xl","lg","md","sm","xs"],o=r.createContext({prefixes:{},breakpoints:a,minBreakpoint:"xs"}),{Consumer:s,Provider:i}=o;function l(e,t){const{prefixes:n}=(0,r.useContext)(o);return e||n[t]||t}function c(){const{breakpoints:e}=(0,r.useContext)(o);return e}function f(){const{minBreakpoint:e}=(0,r.useContext)(o);return e}},9921:function(e,t){"use strict";var n="function"==typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,a=n?Symbol.for("react.portal"):60106,o=n?Symbol.for("react.fragment"):60107,s=n?Symbol.for("react.strict_mode"):60108,i=n?Symbol.for("react.profiler"):60114,l=n?Symbol.for("react.provider"):60109,c=n?Symbol.for("react.context"):60110,f=n?Symbol.for("react.async_mode"):60111,u=n?Symbol.for("react.concurrent_mode"):60111,d=n?Symbol.for("react.forward_ref"):60112,m=n?Symbol.for("react.suspense"):60113,p=n?Symbol.for("react.suspense_list"):60120,h=n?Symbol.for("react.memo"):60115,y=n?Symbol.for("react.lazy"):60116,g=n?Symbol.for("react.block"):60121,v=n?Symbol.for("react.fundamental"):60117,b=n?Symbol.for("react.responder"):60118,x=n?Symbol.for("react.scope"):60119;function C(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case f:case u:case o:case i:case s:case m:return e;default:switch(e=e&&e.$$typeof){case c:case d:case y:case h:case l:return e;default:return t}}case a:return t}}}function E(e){return C(e)===u}t.AsyncMode=f,t.ConcurrentMode=u,t.ContextConsumer=c,t.ContextProvider=l,t.Element=r,t.ForwardRef=d,t.Fragment=o,t.Lazy=y,t.Memo=h,t.Portal=a,t.Profiler=i,t.StrictMode=s,t.Suspense=m,t.isAsyncMode=function(e){return E(e)||C(e)===f},t.isConcurrentMode=E,t.isContextConsumer=function(e){return C(e)===c},t.isContextProvider=function(e){return C(e)===l},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return C(e)===d},t.isFragment=function(e){return C(e)===o},t.isLazy=function(e){return C(e)===y},t.isMemo=function(e){return C(e)===h},t.isPortal=function(e){return C(e)===a},t.isProfiler=function(e){return C(e)===i},t.isStrictMode=function(e){return C(e)===s},t.isSuspense=function(e){return C(e)===m},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===u||e===i||e===s||e===m||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===h||e.$$typeof===l||e.$$typeof===c||e.$$typeof===d||e.$$typeof===v||e.$$typeof===b||e.$$typeof===x||e.$$typeof===g)},t.typeOf=C},9864:function(e,t,n){"use strict";e.exports=n(9921)},3791:function(e,t,n){var r=n(7294);function a(e){return r.createElement("svg",e,[r.createElement("path",{d:"M1 1L19 19",stroke:"#fff",strokeWidth:"2",strokeLinecap:"round",key:0}),r.createElement("path",{d:"M1 19L19 1",stroke:"#fff",strokeWidth:"2",strokeLinecap:"round",key:1})])}a.defaultProps={width:"20",height:"20",viewBox:"0 0 20 20",fill:"none"},e.exports=a,a.default=a},8518:function(e,t,n){var r=n(7294);function a(e){return r.createElement("svg",e,[r.createElement("circle",{cx:"21.5",cy:"21.5",r:"21.5",fill:"#333333",key:0}),r.createElement("path",{d:"M12.0909 10C10.9474 10 10 10.9474 10 12.0909V30.9091C10 32.0526 10.9474 33 12.0909 33H30.9091C32.0526 33 33 32.0526 33 30.9091V12.0909C33 10.9474 32.0526 10 30.9091 10H12.0909ZM12.0909 12.0909H30.9091V30.9091H25.4858V23.8523H28.1974L28.5895 20.7159H25.4858V18.6903C25.4858 17.7756 25.7104 17.1548 27.0213 17.1548H28.7202V14.3125C28.4302 14.2757 27.4256 14.2145 26.2699 14.2145C23.8604 14.2145 22.2187 15.6642 22.2187 18.3636V20.7159H19.4744V23.8523H22.2187V30.9091H12.0909V12.0909Z",fill:"white",key:1})])}a.defaultProps={width:"43",height:"43",viewBox:"0 0 43 43",fill:"none"},e.exports=a,a.default=a},7909:function(e,t,n){var r=n(7294);function a(e){return r.createElement("svg",e,[r.createElement("circle",{cx:"21.5",cy:"21.5",r:"21.5",fill:"#333333",key:0}),r.createElement("path",{d:"M17.4688 10C13.918 10 11 13.0465 11 16.7628V26.2372C11 29.9494 13.9141 33 17.4688 33H26.5312C30.082 33 33 29.9535 33 26.2372V16.7628C33 13.0506 30.0859 10 26.5312 10H17.4688ZM17.4688 12.0909H26.5312C29.0039 12.0909 31 14.1777 31 16.7628V26.2372C31 28.8223 29.0039 30.9091 26.5312 30.9091H17.4688C14.9961 30.9091 13 28.8223 13 26.2372V16.7628C13 14.1777 14.9961 12.0909 17.4688 12.0909ZM27.9062 14.3778C27.4023 14.3778 27 14.7985 27 15.3253C27 15.8521 27.4023 16.2727 27.9062 16.2727C28.4102 16.2727 28.8125 15.8521 28.8125 15.3253C28.8125 14.7985 28.4102 14.3778 27.9062 14.3778ZM22 15.2273C18.6992 15.2273 16 18.0492 16 21.5C16 24.9508 18.6992 27.7727 22 27.7727C25.3008 27.7727 28 24.9508 28 21.5C28 18.0492 25.3008 15.2273 22 15.2273ZM22 17.3182C24.2227 17.3182 26 19.1763 26 21.5C26 23.8237 24.2227 25.6818 22 25.6818C19.7773 25.6818 18 23.8237 18 21.5C18 19.1763 19.7773 17.3182 22 17.3182Z",fill:"white",key:1})])}a.defaultProps={width:"43",height:"43",viewBox:"0 0 43 43",fill:"none"},e.exports=a,a.default=a},166:function(e,t,n){var r=n(7294);function a(e){return r.createElement("svg",e,[r.createElement("circle",{cx:"21.5",cy:"21.5",r:"21.5",fill:"#333333",key:0}),r.createElement("path",{d:"M23.0723 20.711C23.2869 20.4615 23.459 20.206 23.6833 19.9907C24.0017 19.6671 24.3789 19.4129 24.7929 19.2429C25.2069 19.0729 25.6494 18.9906 26.0943 19.0009C26.6063 18.9917 27.117 19.056 27.6121 19.192C28.7451 19.532 29.4025 20.3448 29.7158 21.4956C29.9266 22.3577 30.021 23.2461 29.9961 24.1352C29.9961 26.0103 29.9961 27.8874 29.9961 29.7686C29.9961 29.9456 29.9497 29.9899 29.7834 29.9899C28.8541 29.9818 27.9247 29.9818 26.9953 29.9899C26.8329 29.9899 26.802 29.9376 26.802 29.7887C26.802 28.0021 26.802 26.2169 26.802 24.433C26.8135 23.9846 26.7634 23.5368 26.6531 23.1031C26.4308 22.2984 25.8797 21.896 25.0735 21.9382C23.9714 21.9986 23.3991 22.566 23.2579 23.7308C23.2254 24.0092 23.2092 24.2894 23.2096 24.5698C23.2096 26.3041 23.2096 28.0404 23.2096 29.7766C23.2096 29.9496 23.169 30.002 22.9988 29.9999C22.063 29.9919 21.1279 29.9919 20.1933 29.9999C20.0425 29.9999 20 29.9577 20 29.7988C20 26.3597 20 22.9227 20 19.4877C20 19.3167 20.0522 19.2765 20.2069 19.2866C21.0963 19.2866 21.9838 19.2866 22.8732 19.2866C23.0356 19.2866 23.0781 19.3389 23.0665 19.4998C23.0665 19.8901 23.0723 20.3005 23.0723 20.711Z",fill:"#FEFEFE",key:1}),r.createElement("path",{d:"M18 24.5196C18 26.2645 18 28.0075 18 29.7504C18 29.9443 17.9446 30.002 17.7086 29.9999C16.5527 29.9999 15.3968 29.9999 14.2408 29.9999C14.0554 29.9999 14 29.9608 14 29.7937C14 26.2639 14 22.7347 14 19.2063C14 19.0598 14.041 19 14.224 19C15.3968 19 16.5695 19 17.7423 19C17.9687 19 17.9976 19.0722 17.9976 19.2372C17.996 21.0014 17.9968 22.7622 18 24.5196Z",fill:"#FEFEFE",key:2}),r.createElement("path",{d:"M18 14.9959C18.0008 15.392 17.884 15.7795 17.6642 16.1092C17.4445 16.4389 17.1318 16.6959 16.7658 16.8476C16.3998 16.9993 15.997 17.0389 15.6085 16.9613C15.22 16.8838 14.8633 16.6926 14.5836 16.412C14.3039 16.1314 14.1138 15.7741 14.0375 15.3853C13.9611 14.9965 14.002 14.5939 14.1549 14.2284C14.3077 13.8629 14.5657 13.551 14.896 13.3323C15.2264 13.1136 15.6142 12.998 16.0104 13C16.5378 13.0044 17.0423 13.2163 17.4146 13.5898C17.787 13.9633 17.9973 14.4684 18 14.9959Z",fill:"#FEFEFE",key:3})])}a.defaultProps={width:"43",height:"43",viewBox:"0 0 43 43",fill:"none"},e.exports=a,a.default=a},3339:function(e,t,n){var r=n(7294);function a(e){return r.createElement("svg",e,[r.createElement("defs",{key:0},[r.createElement("g",{key:0}),r.createElement("clipPath",{id:"d70de7a587",key:1},r.createElement("path",{d:"M 1 0 L 105 0 L 105 140.832031 L 1 140.832031 Z M 1 0 ",clipRule:"nonzero"})),r.createElement("clipPath",{id:"d238c9ab11",key:2},r.createElement("path",{d:"M 77 43 L 105.421875 43 L 105.421875 78 L 77 78 Z M 77 43 ",clipRule:"nonzero"}))]),r.createElement("path",{fill:"#f8cf27",d:"M 99.554688 45.421875 L 99.554688 35.648438 C 99.554688 34.816406 98.878906 34.140625 98.046875 34.140625 L 84.960938 34.140625 C 84.785156 34.140625 84.613281 34.171875 84.453125 34.226562 C 84.378906 27.617188 81.070312 24.703125 76.050781 20.789062 C 70.671875 16.589844 45.558594 18.964844 34.546875 20.234375 C 23.53125 21.503906 21.382812 29.992188 20.554688 36.742188 C 19.730469 43.492188 44.773438 99.261719 48.140625 107.402344 C 51.507812 115.542969 53.3125 117.722656 58.984375 121.210938 C 67.996094 126.761719 77.402344 115.707031 79.808594 111.308594 C 82.214844 106.90625 84.589844 98.25 84.691406 93.792969 C 84.707031 93.132812 85.003906 92.570312 85.496094 92.101562 L 85.496094 104.578125 C 85.496094 105.492188 86.238281 106.234375 87.148438 106.234375 L 96.175781 106.234375 C 97.089844 106.234375 97.828125 105.492188 97.828125 104.578125 L 97.828125 91.792969 C 98.226562 92.09375 98.507812 92.441406 98.628906 92.832031 C 99.691406 96.207031 99.484375 107.035156 97.625 112.382812 C 95.765625 117.730469 85.007812 138.460938 63.472656 138.445312 C 41.933594 138.425781 35.550781 120.082031 31.324219 111.128906 C 27.097656 102.171875 9.339844 66.421875 4.675781 41.464844 C 0.0117188 16.511719 20.082031 8.828125 21.375 8.21875 C 25.851562 6.109375 41.902344 3.003906 49.527344 2.941406 C 57.152344 2.882812 69.789062 2.320312 81.082031 5.714844 C 92.375 9.109375 100.921875 27.417969 101.410156 29.789062 C 101.847656 31.921875 100.496094 41.992188 99.554688 45.421875 ",fillOpacity:"1",fillRule:"nonzero",key:1}),r.createElement("g",{clipPath:"url(#d70de7a587)",key:2},r.createElement("path",{fill:"#000000",d:"M 85.296875 36.625 Z M 96.203125 93.59375 C 96.203125 93.59375 96.203125 93.597656 96.207031 93.597656 C 96.203125 93.597656 96.203125 93.59375 96.203125 93.59375 Z M 56.675781 5.414062 C 54.988281 5.414062 53.40625 5.4375 51.96875 5.453125 C 51.117188 5.464844 50.304688 5.476562 49.546875 5.480469 C 41.972656 5.542969 26.472656 8.628906 22.457031 10.519531 C 22.394531 10.550781 22.292969 10.59375 22.160156 10.652344 C 16.417969 13.164062 3.464844 21.148438 7.175781 41 C 11.390625 63.5625 26.585938 95.324219 32.304688 107.28125 C 32.828125 108.371094 33.273438 109.296875 33.625 110.042969 C 33.976562 110.792969 34.34375 111.601562 34.730469 112.457031 C 38.957031 121.785156 45.339844 135.886719 63.472656 135.902344 C 63.480469 135.902344 63.492188 135.902344 63.496094 135.902344 C 82.484375 135.902344 93.027344 117.867188 95.222656 111.546875 C 95.5 110.75 95.738281 109.808594 95.933594 108.773438 L 87.148438 108.773438 C 86 108.773438 84.957031 108.308594 84.195312 107.554688 C 83.519531 109.445312 82.78125 111.171875 82.039062 112.527344 C 80.53125 115.28125 75 122.859375 67.597656 124.824219 C 64.074219 125.757812 60.726562 125.273438 57.652344 123.375 C 51.414062 119.539062 49.308594 116.875 45.792969 108.375 C 45.210938 106.964844 43.921875 104 42.289062 100.242188 C 38.257812 90.972656 32.167969 76.957031 27.035156 64.257812 C 18.644531 43.492188 17.777344 38.539062 18.035156 36.433594 C 18.445312 33.066406 19.222656 28.730469 21.59375 25.054688 C 24.320312 20.835938 28.578125 18.363281 34.253906 17.710938 C 40.257812 17.015625 49.136719 16.144531 57.339844 15.921875 C 71.71875 15.527344 75.796875 17.367188 77.613281 18.785156 C 81.667969 21.945312 85.839844 25.203125 86.796875 31.597656 L 98.046875 31.597656 C 98.355469 31.597656 98.65625 31.632812 98.945312 31.699219 C 98.96875 31.042969 98.964844 30.554688 98.917969 30.292969 C 98.417969 28.15625 90.335938 11.148438 80.351562 8.148438 C 72.457031 5.777344 63.664062 5.414062 56.675781 5.414062 Z M 63.496094 140.984375 C 63.488281 140.984375 63.480469 140.984375 63.46875 140.984375 C 54.15625 140.976562 46.355469 137.703125 40.285156 131.257812 C 35.238281 125.902344 32.269531 119.34375 30.097656 114.554688 C 29.722656 113.71875 29.363281 112.929688 29.023438 112.210938 C 28.675781 111.472656 28.238281 110.554688 27.71875 109.472656 C 21.921875 97.351562 6.515625 65.152344 2.179688 41.933594 C 1.078125 36.050781 1.203125 30.574219 2.542969 25.660156 C 3.652344 21.597656 5.597656 17.902344 8.316406 14.6875 C 10.476562 12.132812 14.277344 8.550781 20.121094 5.996094 C 20.195312 5.960938 20.253906 5.9375 20.292969 5.921875 C 25.304688 3.558594 41.6875 0.460938 49.507812 0.398438 C 50.257812 0.394531 51.058594 0.382812 51.902344 0.371094 C 59.613281 0.265625 71.265625 0.109375 81.8125 3.28125 C 88.503906 5.292969 93.984375 11.691406 97.398438 16.703125 C 101.011719 22.003906 103.535156 27.503906 103.898438 29.277344 C 104.46875 32.042969 102.941406 42.683594 102.007812 46.09375 C 101.667969 47.324219 100.476562 48.109375 99.214844 47.941406 C 97.953125 47.773438 97.011719 46.695312 97.011719 45.421875 L 97.011719 36.679688 L 85.113281 36.679688 C 84.390625 36.875 83.617188 36.742188 82.996094 36.308594 C 82.328125 35.835938 81.921875 35.074219 81.914062 34.253906 C 81.851562 28.792969 79.324219 26.566406 74.488281 22.792969 C 72.113281 20.941406 60.304688 19.820312 34.835938 22.761719 C 25.914062 23.789062 23.914062 30.238281 23.078125 37.050781 C 23.011719 37.789062 23.445312 41.820312 31.816406 62.515625 C 36.910156 75.117188 42.953125 89.015625 46.953125 98.214844 C 48.65625 102.144531 49.890625 104.980469 50.492188 106.429688 C 53.777344 114.378906 55.386719 116.015625 60.316406 119.046875 C 62.183594 120.199219 64.140625 120.480469 66.296875 119.910156 C 71.519531 118.523438 76.152344 112.691406 77.578125 110.085938 C 79.75 106.117188 82.054688 97.867188 82.148438 93.734375 C 82.179688 92.417969 82.734375 91.214844 83.753906 90.253906 C 84.492188 89.558594 85.574219 89.367188 86.503906 89.769531 C 87.4375 90.171875 88.039062 91.089844 88.039062 92.101562 L 88.039062 103.691406 L 95.285156 103.691406 L 95.285156 91.792969 C 95.285156 90.828125 95.835938 89.945312 96.699219 89.515625 C 97.5625 89.085938 98.597656 89.183594 99.363281 89.765625 C 100.207031 90.40625 100.777344 91.183594 101.054688 92.074219 C 102.308594 96.066406 102.027344 107.46875 100.027344 113.21875 C 98.957031 116.289062 95.59375 123.109375 89.761719 129.1875 C 82.351562 136.90625 73.269531 140.984375 63.496094 140.984375 ",fillOpacity:"1",fillRule:"nonzero"})),r.createElement("path",{fill:"#f8cf27",d:"M 99.554688 35.648438 L 99.554688 45.421875 C 99.542969 45.460938 99.53125 45.503906 99.519531 45.539062 L 83.449219 45.539062 L 83.449219 35.648438 C 83.449219 34.992188 83.867188 34.433594 84.453125 34.226562 C 84.613281 34.171875 84.785156 34.140625 84.960938 34.140625 L 98.046875 34.140625 C 98.878906 34.140625 99.554688 34.816406 99.554688 35.648438 ",fillOpacity:"1",fillRule:"nonzero",key:3}),r.createElement("path",{fill:"#000000",d:"M 85.992188 43 L 97.011719 43 L 97.011719 36.679688 L 85.992188 36.679688 Z M 99.554688 45.421875 L 99.558594 45.421875 Z M 99.519531 48.082031 L 83.449219 48.082031 C 82.046875 48.082031 80.910156 46.945312 80.910156 45.539062 L 80.910156 35.648438 C 80.910156 33.9375 81.992188 32.402344 83.605469 31.832031 C 84.046875 31.675781 84.5 31.597656 84.960938 31.597656 L 98.046875 31.597656 C 100.277344 31.597656 102.097656 33.414062 102.097656 35.648438 L 102.097656 45.421875 C 102.097656 45.664062 102.0625 45.90625 101.992188 46.136719 C 101.976562 46.203125 101.957031 46.261719 101.941406 46.316406 C 101.605469 47.367188 100.625 48.082031 99.519531 48.082031 ",fillOpacity:"1",fillRule:"nonzero",key:4}),r.createElement("path",{fill:"#f8cf27",d:"M 99.554688 45.421875 L 99.554688 45.539062 L 99.519531 45.539062 C 99.53125 45.503906 99.542969 45.460938 99.554688 45.421875 ",fillOpacity:"1",fillRule:"nonzero",key:5}),r.createElement("path",{fill:"#000000",d:"M 99.554688 48.082031 L 99.519531 48.082031 C 98.710938 48.082031 97.945312 47.695312 97.46875 47.039062 C 96.996094 46.394531 96.855469 45.5625 97.089844 44.796875 L 97.113281 44.707031 C 97.472656 43.492188 98.664062 42.726562 99.914062 42.90625 C 101.167969 43.085938 102.097656 44.15625 102.097656 45.421875 L 102.097656 45.539062 C 102.097656 46.945312 100.957031 48.082031 99.554688 48.082031 ",fillOpacity:"1",fillRule:"nonzero",key:6}),r.createElement("path",{fill:"#f8cf27",d:"M 99.554688 75.425781 L 99.554688 87.707031 C 99.554688 87.945312 99.457031 88.160156 99.300781 88.316406 C 99.144531 88.472656 98.929688 88.570312 98.691406 88.570312 C 98.214844 88.570312 97.828125 88.957031 97.828125 89.433594 L 97.828125 104.578125 C 97.828125 105.492188 97.089844 106.234375 96.175781 106.234375 L 87.148438 106.234375 C 86.238281 106.234375 85.496094 105.492188 85.496094 104.578125 L 85.496094 89.433594 C 85.496094 89.191406 85.402344 88.976562 85.246094 88.820312 C 85.089844 88.667969 84.875 88.570312 84.632812 88.570312 C 84.15625 88.570312 83.773438 88.183594 83.773438 87.707031 L 83.773438 75.425781 L 99.554688 75.425781 ",fillOpacity:"1",fillRule:"nonzero",key:7}),r.createElement("path",{fill:"#000000",d:"M 88.039062 103.691406 L 95.285156 103.691406 L 95.285156 89.433594 C 95.285156 88.167969 95.984375 87.058594 97.011719 86.472656 L 97.011719 77.964844 L 86.3125 77.964844 L 86.3125 86.46875 C 86.578125 86.617188 86.820312 86.804688 87.042969 87.023438 C 87.683594 87.667969 88.039062 88.523438 88.039062 89.433594 Z M 96.175781 108.773438 L 87.148438 108.773438 C 84.835938 108.773438 82.957031 106.894531 82.957031 104.578125 L 82.957031 90.667969 C 81.925781 90.082031 81.230469 88.972656 81.230469 87.707031 L 81.230469 75.425781 C 81.230469 74.019531 82.367188 72.882812 83.773438 72.882812 L 99.554688 72.882812 C 100.957031 72.882812 102.097656 74.019531 102.097656 75.425781 L 102.097656 87.707031 C 102.097656 88.617188 101.742188 89.472656 101.097656 90.113281 C 100.878906 90.335938 100.636719 90.519531 100.371094 90.671875 L 100.371094 104.578125 C 100.371094 106.894531 98.488281 108.773438 96.175781 108.773438 ",fillOpacity:"1",fillRule:"nonzero",key:8}),r.createElement("path",{fill:"#000000",d:"M 94.207031 99.695312 C 94.207031 101.097656 93.066406 102.238281 91.664062 102.238281 C 90.257812 102.238281 89.121094 101.097656 89.121094 99.695312 C 89.121094 98.289062 90.257812 97.152344 91.664062 97.152344 C 93.066406 97.152344 94.207031 98.289062 94.207031 99.695312 ",fillOpacity:"1",fillRule:"nonzero",key:9}),r.createElement("path",{fill:"#000000",d:"M 102.917969 46.761719 L 102.917969 65.871094 C 102.917969 66.515625 102.417969 67.042969 101.777344 67.085938 L 101.222656 73.964844 C 101.152344 74.789062 100.464844 75.425781 99.636719 75.425781 L 83.367188 75.425781 C 82.539062 75.425781 81.851562 74.789062 81.785156 73.964844 L 81.226562 67.085938 C 80.585938 67.042969 80.085938 66.515625 80.085938 65.871094 L 80.085938 46.761719 C 80.085938 46.085938 80.628906 45.539062 81.304688 45.539062 L 101.699219 45.539062 C 102.375 45.539062 102.917969 46.085938 102.917969 46.761719 ",fillOpacity:"1",fillRule:"nonzero",key:10}),r.createElement("g",{clipPath:"url(#d238c9ab11)",key:11},r.createElement("path",{fill:"#000000",d:"M 84.246094 72.882812 L 98.757812 72.882812 L 99.246094 66.878906 C 99.3125 66.078125 99.746094 65.382812 100.378906 64.964844 L 100.378906 48.082031 L 82.625 48.082031 L 82.625 64.964844 C 83.257812 65.382812 83.695312 66.078125 83.757812 66.878906 Z M 99.636719 77.964844 L 83.367188 77.964844 C 81.230469 77.964844 79.421875 76.296875 79.25 74.167969 L 78.804688 68.675781 C 78.027344 67.984375 77.542969 66.980469 77.542969 65.871094 L 77.542969 46.761719 C 77.542969 44.6875 79.230469 43 81.304688 43 L 101.699219 43 C 103.773438 43 105.460938 44.6875 105.460938 46.761719 L 105.460938 65.871094 C 105.460938 66.980469 104.976562 67.984375 104.203125 68.675781 L 103.753906 74.167969 C 103.582031 76.300781 101.773438 77.964844 99.636719 77.964844 ",fillOpacity:"1",fillRule:"nonzero"})),r.createElement("g",{fill:"#ffffff",fillOpacity:"1",key:12},r.createElement("g",{transform:"translate(120.380637, 82.163886)"},r.createElement("g",null,r.createElement("path",{d:"M 25.15625 -38.65625 L 25.15625 -30.921875 L 11.625 -30.921875 L 11.625 -23.25 L 24.125 -23.25 L 24.125 -15.515625 L 11.625 -15.515625 L 11.625 0 L 2.8125 0 L 2.8125 -38.65625 Z M 25.15625 -38.65625 "})))),r.createElement("g",{fill:"#ffffff",fillOpacity:"1",key:13},r.createElement("g",{transform:"translate(146.945474, 82.163886)"},r.createElement("g",null,r.createElement("path",{d:"M 2.8125 0 L 2.8125 -40.296875 L 11.109375 -40.296875 L 11.109375 0 Z M 2.8125 0 "})))),r.createElement("g",{fill:"#ffffff",fillOpacity:"1",key:14},r.createElement("g",{transform:"translate(160.86039, 82.163886)"},r.createElement("g",null,r.createElement("path",{d:"M 5.078125 -2.859375 C 2.410156 -5.234375 1.078125 -8.28125 1.078125 -12 C 1.078125 -15.71875 2.46875 -18.769531 5.25 -21.15625 C 8.03125 -23.539062 11.46875 -24.734375 15.5625 -24.734375 C 19.59375 -24.734375 22.988281 -23.53125 25.75 -21.125 C 28.507812 -18.726562 29.890625 -15.6875 29.890625 -12 C 29.890625 -8.3125 28.539062 -5.269531 25.84375 -2.875 C 23.144531 -0.488281 19.71875 0.703125 15.5625 0.703125 C 11.25 0.703125 7.753906 -0.484375 5.078125 -2.859375 Z M 11.5 -16.078125 C 10.425781 -15.015625 9.890625 -13.65625 9.890625 -12 C 9.890625 -10.34375 10.40625 -8.988281 11.4375 -7.9375 C 12.46875 -6.894531 13.828125 -6.375 15.515625 -6.375 C 17.140625 -6.375 18.472656 -6.90625 19.515625 -7.96875 C 20.566406 -9.03125 21.09375 -10.375 21.09375 -12 C 21.09375 -13.65625 20.550781 -15.015625 19.46875 -16.078125 C 18.394531 -17.140625 17.078125 -17.671875 15.515625 -17.671875 C 13.921875 -17.671875 12.582031 -17.140625 11.5 -16.078125 Z M 11.5 -16.078125 "})))),r.createElement("g",{fill:"#ffffff",fillOpacity:"1",key:15},r.createElement("g",{transform:"translate(191.829279, 82.163886)"},r.createElement("g",null,r.createElement("path",{d:"M 17.578125 0 L 11.953125 0 L -0.9375 -24.03125 L 8.625 -24.03125 L 14.484375 -11.0625 L 20.25 -24.03125 L 25.953125 -24.03125 L 31.71875 -11.0625 L 37.578125 -24.03125 L 47.140625 -24.03125 L 34.25 0 L 28.625 0 L 23.109375 -12.421875 Z M 17.578125 0 "})))),r.createElement("g",{fill:"#ffffff",fillOpacity:"1",key:16},r.createElement("g",{transform:"translate(238.024932, 82.163886)"},r.createElement("g",null,r.createElement("path",{d:"M 22.453125 -38.65625 L 38.046875 0 L 28.578125 0 L 25.71875 -7.734375 L 11.015625 -7.734375 L 8.15625 0 L -1.3125 0 L 14.296875 -38.65625 Z M 22.734375 -15.46875 L 18.421875 -26.703125 L 18.328125 -26.703125 L 14.015625 -15.46875 Z M 22.734375 -15.46875 "})))),r.createElement("g",{fill:"#ffffff",fillOpacity:"1",key:17},r.createElement("g",{transform:"translate(274.756562, 82.163886)"},r.createElement("g",null,r.createElement("path",{d:"M 2.8125 0 L 2.8125 -40.296875 L 11.109375 -40.296875 L 11.109375 0 Z M 2.8125 0 "})))),r.createElement("g",{fill:"#ffffff",fillOpacity:"1",key:18},r.createElement("g",{transform:"translate(288.671479, 82.163886)"},r.createElement("g",null,r.createElement("path",{d:"M 27.546875 -21.0625 C 29.796875 -18.613281 30.921875 -15.609375 30.921875 -12.046875 C 30.921875 -8.484375 29.796875 -5.46875 27.546875 -3 C 25.296875 -0.53125 22.441406 0.703125 18.984375 0.703125 C 15.796875 0.703125 13.171875 -0.296875 11.109375 -2.296875 L 11.109375 12.1875 L 2.8125 12.1875 L 2.8125 -24.03125 L 11.015625 -24.03125 L 11.015625 -21.328125 L 11.109375 -21.328125 C 13.171875 -23.597656 15.796875 -24.734375 18.984375 -24.734375 C 22.441406 -24.734375 25.296875 -23.507812 27.546875 -21.0625 Z M 20.5 -7.96875 C 21.582031 -9.03125 22.125 -10.390625 22.125 -12.046875 C 22.125 -13.703125 21.609375 -15.050781 20.578125 -16.09375 C 19.546875 -17.144531 18.1875 -17.671875 16.5 -17.671875 C 14.875 -17.671875 13.535156 -17.140625 12.484375 -16.078125 C 11.441406 -15.015625 10.921875 -13.671875 10.921875 -12.046875 C 10.921875 -10.390625 11.457031 -9.03125 12.53125 -7.96875 C 13.613281 -6.90625 14.9375 -6.375 16.5 -6.375 C 18.09375 -6.375 19.425781 -6.90625 20.5 -7.96875 Z M 20.5 -7.96875 "})))),r.createElement("g",{fill:"#ffffff",fillOpacity:"1",key:19},r.createElement("g",{transform:"translate(320.671091, 82.163886)"},r.createElement("g",null,r.createElement("path",{d:"M 3.609375 -37.4375 C 4.578125 -38.40625 5.734375 -38.890625 7.078125 -38.890625 C 8.421875 -38.890625 9.578125 -38.40625 10.546875 -37.4375 C 11.515625 -36.46875 12 -35.3125 12 -33.96875 C 12 -32.625 11.515625 -31.46875 10.546875 -30.5 C 9.578125 -29.53125 8.421875 -29.046875 7.078125 -29.046875 C 5.734375 -29.046875 4.578125 -29.53125 3.609375 -30.5 C 2.640625 -31.46875 2.15625 -32.625 2.15625 -33.96875 C 2.15625 -35.3125 2.640625 -36.46875 3.609375 -37.4375 Z M 2.8125 -24.03125 L 2.8125 0 L 11.109375 0 L 11.109375 -24.03125 Z M 2.8125 -24.03125 "})))),r.createElement("g",{fill:"#ffffff",fillOpacity:"1",key:20},r.createElement("g",{transform:"translate(334.820268, 82.163886)"},r.createElement("g",null,r.createElement("path",{d:"M 2.8125 0 L 2.8125 -24.03125 L 11.109375 -24.03125 L 11.109375 -21.515625 L 11.203125 -21.515625 C 13.359375 -23.660156 15.65625 -24.734375 18.09375 -24.734375 C 19.28125 -24.734375 20.457031 -24.578125 21.625 -24.265625 C 22.789062 -23.953125 23.910156 -23.46875 24.984375 -22.8125 C 26.066406 -22.164062 26.941406 -21.238281 27.609375 -20.03125 C 28.285156 -18.832031 28.625 -17.4375 28.625 -15.84375 L 28.625 0 L 20.34375 0 L 20.34375 -13.59375 C 20.34375 -14.84375 19.941406 -15.9375 19.140625 -16.875 C 18.347656 -17.8125 17.3125 -18.28125 16.03125 -18.28125 C 14.78125 -18.28125 13.644531 -17.796875 12.625 -16.828125 C 11.613281 -15.859375 11.109375 -14.78125 11.109375 -13.59375 L 11.109375 0 Z M 2.8125 0 "}))))])}a.defaultProps={width:"150",zoomAndPan:"magnify",viewBox:"0 0 375 150",height:"150",preserveAspectRatio:"xMidYMid meet",version:"1.0"},e.exports=a,a.default=a},6049:function(e,t,n){var r=n(7294);function a(e){return r.createElement("svg",e,[r.createElement("path",{d:"M8.04105 2.31079L14.73 8.99979L8.04105 15.6888",stroke:"black",strokeWidth:"2",strokeLinecap:"square",key:0}),r.createElement("path",{d:"M13.6739 9L1.00002 9",stroke:"black",strokeWidth:"2",strokeLinecap:"square",key:1})])}a.defaultProps={width:"17",height:"18",viewBox:"0 0 17 18",fill:"none"},e.exports=a,a.default=a},434:function(e){function t(){return e.exports=t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(this,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},6239:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAIAAABM9SnKAAAACXBIWXMAAAsTAAALEwEAmpwYAAABeUlEQVR42gFuAZH+ALyVVcKeYr1/IcSRQsasfL6eZLmZY7aYYq2PXaWKWcGvg72ogMOwjKCPcnBoWGtnXF5dVpKOh6qnorSuqQDBnF+/ml3Lq3LLq2y+mlzCpGzGqnjCpXHGrHzLtorMupWwm3jTw6OtnYFsXkpWUERDRT+amZWvq6WzrqkApH1FpH5FrotSsZFarotSsJFer5FfrpFexLGIuKeEkX5fhXRWq5x/2Mu0f3NfUEg7UU1EmpiSs7CqubSvAI9qOpRxQIhlMmhFF3dZL5h9UZB3R5+JYbOhgZeHb2laQHdpUJCDa8e7p83AsWlhVG1pXJ+bkLCuqbixpwB3XTiGbkmZgVt+Z0N/ZUKOd1ScimWjkXGnmYCEd19lWkR/d2OgmYann47Zzb+5saNwbF+LhHSwrqi2sasAdGJGfmhKoItnmodkhnRYkoRpyb+ltKWIkYRpiHxif3Vii4RzqKGOnpiHvLWnz8a6paOckIh2o52TtLGtSR/Bjz7ZyXEAAAAASUVORK5CYII="},"images":{"fallback":{"src":"/Gatsby-Contentful-project/static/80b731604e5a52c37228b735f0d8725b/072fb/header8.png","srcSet":"/Gatsby-Contentful-project/static/80b731604e5a52c37228b735f0d8725b/3ec7c/header8.png 150w,\\n/Gatsby-Contentful-project/static/80b731604e5a52c37228b735f0d8725b/e6c28/header8.png 300w,\\n/Gatsby-Contentful-project/static/80b731604e5a52c37228b735f0d8725b/072fb/header8.png 600w","sizes":"(min-width: 600px) 600px, 100vw"},"sources":[{"srcSet":"/Gatsby-Contentful-project/static/80b731604e5a52c37228b735f0d8725b/846c8/header8.webp 150w,\\n/Gatsby-Contentful-project/static/80b731604e5a52c37228b735f0d8725b/baa5a/header8.webp 300w,\\n/Gatsby-Contentful-project/static/80b731604e5a52c37228b735f0d8725b/fdc97/header8.webp 600w","type":"image/webp","sizes":"(min-width: 600px) 600px, 100vw"}]},"width":1300,"height":400.8333333333333}')}}]);
//# sourceMappingURL=7fafe070bbac85fe815d12481324739e7e39d437-b570af7cd59412c3f1c3.js.map