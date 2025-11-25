var W5=Object.defineProperty;var Wg=a=>{throw TypeError(a)};var J5=(a,n,s)=>n in a?W5(a,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[n]=s;var Be=(a,n,s)=>J5(a,typeof n!="symbol"?n+"":n,s),Jg=(a,n,s)=>n.has(a)||Wg("Cannot "+s);var L=(a,n,s)=>(Jg(a,n,"read from private field"),s?s.call(a):n.get(a)),B=(a,n,s)=>n.has(a)?Wg("Cannot add the same private member more than once"):n instanceof WeakSet?n.add(a):n.set(a,s),U=(a,n,s,i)=>(Jg(a,n,"write to private field"),i?i.call(a,s):n.set(a,s),s);function e_(a,n){for(var s=0;s<n.length;s++){const i=n[s];if(typeof i!="string"&&!Array.isArray(i)){for(const l in i)if(l!=="default"&&!(l in a)){const c=Object.getOwnPropertyDescriptor(i,l);c&&Object.defineProperty(a,l,c.get?c:{enumerable:!0,get:()=>i[l]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))i(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function s(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(l){if(l.ep)return;l.ep=!0;const c=s(l);fetch(l.href,c)}})();function O3(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var hf={exports:{}},ho={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ev;function t_(){if(ev)return ho;ev=1;var a=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function s(i,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:a,type:i,key:d,ref:l!==void 0?l:null,props:c}}return ho.Fragment=n,ho.jsx=s,ho.jsxs=s,ho}var tv;function a_(){return tv||(tv=1,hf.exports=t_()),hf.exports}var M=a_(),ff={exports:{}},fo={},mf={exports:{}},pf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var av;function i_(){return av||(av=1,(function(a){function n(k,D){var P=k.length;k.push(D);e:for(;0<P;){var ge=P-1>>>1,re=k[ge];if(0<l(re,D))k[ge]=D,k[P]=re,P=ge;else break e}}function s(k){return k.length===0?null:k[0]}function i(k){if(k.length===0)return null;var D=k[0],P=k.pop();if(P!==D){k[0]=P;e:for(var ge=0,re=k.length,j=re>>>1;ge<j;){var G=2*(ge+1)-1,ee=k[G],ae=G+1,X=k[ae];if(0>l(ee,P))ae<re&&0>l(X,ee)?(k[ge]=X,k[ae]=P,ge=ae):(k[ge]=ee,k[G]=P,ge=G);else if(ae<re&&0>l(X,P))k[ge]=X,k[ae]=P,ge=ae;else break e}}return D}function l(k,D){var P=k.sortIndex-D.sortIndex;return P!==0?P:k.id-D.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;a.unstable_now=function(){return c.now()}}else{var d=Date,h=d.now();a.unstable_now=function(){return d.now()-h}}var g=[],p=[],m=1,u=null,S=3,w=!1,z=!1,_=!1,b=!1,x=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;function C(k){for(var D=s(p);D!==null;){if(D.callback===null)i(p);else if(D.startTime<=k)i(p),D.sortIndex=D.expirationTime,n(g,D);else break;D=s(p)}}function A(k){if(_=!1,C(k),!z)if(s(g)!==null)z=!0,I||(I=!0,V());else{var D=s(p);D!==null&&ze(A,D.startTime-k)}}var I=!1,H=-1,$=5,Z=-1;function he(){return b?!0:!(a.unstable_now()-Z<$)}function xe(){if(b=!1,I){var k=a.unstable_now();Z=k;var D=!0;try{e:{z=!1,_&&(_=!1,O(H),H=-1),w=!0;var P=S;try{t:{for(C(k),u=s(g);u!==null&&!(u.expirationTime>k&&he());){var ge=u.callback;if(typeof ge=="function"){u.callback=null,S=u.priorityLevel;var re=ge(u.expirationTime<=k);if(k=a.unstable_now(),typeof re=="function"){u.callback=re,C(k),D=!0;break t}u===s(g)&&i(g),C(k)}else i(g);u=s(g)}if(u!==null)D=!0;else{var j=s(p);j!==null&&ze(A,j.startTime-k),D=!1}}break e}finally{u=null,S=P,w=!1}D=void 0}}finally{D?V():I=!1}}}var V;if(typeof R=="function")V=function(){R(xe)};else if(typeof MessageChannel<"u"){var T=new MessageChannel,W=T.port2;T.port1.onmessage=xe,V=function(){W.postMessage(null)}}else V=function(){x(xe,0)};function ze(k,D){H=x(function(){k(a.unstable_now())},D)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(k){k.callback=null},a.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<k?Math.floor(1e3/k):5},a.unstable_getCurrentPriorityLevel=function(){return S},a.unstable_next=function(k){switch(S){case 1:case 2:case 3:var D=3;break;default:D=S}var P=S;S=D;try{return k()}finally{S=P}},a.unstable_requestPaint=function(){b=!0},a.unstable_runWithPriority=function(k,D){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var P=S;S=k;try{return D()}finally{S=P}},a.unstable_scheduleCallback=function(k,D,P){var ge=a.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?ge+P:ge):P=ge,k){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=P+re,k={id:m++,callback:D,priorityLevel:k,startTime:P,expirationTime:re,sortIndex:-1},P>ge?(k.sortIndex=P,n(p,k),s(g)===null&&k===s(p)&&(_?(O(H),H=-1):_=!0,ze(A,P-ge))):(k.sortIndex=re,n(g,k),z||w||(z=!0,I||(I=!0,V()))),k},a.unstable_shouldYield=he,a.unstable_wrapCallback=function(k){var D=S;return function(){var P=S;S=D;try{return k.apply(this,arguments)}finally{S=P}}}})(pf)),pf}var iv;function n_(){return iv||(iv=1,mf.exports=i_()),mf.exports}var gf={exports:{}},ct={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nv;function r_(){if(nv)return ct;nv=1;var a=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),u=Symbol.for("react.activity"),S=Symbol.iterator;function w(j){return j===null||typeof j!="object"?null:(j=S&&j[S]||j["@@iterator"],typeof j=="function"?j:null)}var z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,b={};function x(j,G,ee){this.props=j,this.context=G,this.refs=b,this.updater=ee||z}x.prototype.isReactComponent={},x.prototype.setState=function(j,G){if(typeof j!="object"&&typeof j!="function"&&j!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,j,G,"setState")},x.prototype.forceUpdate=function(j){this.updater.enqueueForceUpdate(this,j,"forceUpdate")};function O(){}O.prototype=x.prototype;function R(j,G,ee){this.props=j,this.context=G,this.refs=b,this.updater=ee||z}var C=R.prototype=new O;C.constructor=R,_(C,x.prototype),C.isPureReactComponent=!0;var A=Array.isArray;function I(){}var H={H:null,A:null,T:null,S:null},$=Object.prototype.hasOwnProperty;function Z(j,G,ee){var ae=ee.ref;return{$$typeof:a,type:j,key:G,ref:ae!==void 0?ae:null,props:ee}}function he(j,G){return Z(j.type,G,j.props)}function xe(j){return typeof j=="object"&&j!==null&&j.$$typeof===a}function V(j){var G={"=":"=0",":":"=2"};return"$"+j.replace(/[=:]/g,function(ee){return G[ee]})}var T=/\/+/g;function W(j,G){return typeof j=="object"&&j!==null&&j.key!=null?V(""+j.key):G.toString(36)}function ze(j){switch(j.status){case"fulfilled":return j.value;case"rejected":throw j.reason;default:switch(typeof j.status=="string"?j.then(I,I):(j.status="pending",j.then(function(G){j.status==="pending"&&(j.status="fulfilled",j.value=G)},function(G){j.status==="pending"&&(j.status="rejected",j.reason=G)})),j.status){case"fulfilled":return j.value;case"rejected":throw j.reason}}throw j}function k(j,G,ee,ae,X){var se=typeof j;(se==="undefined"||se==="boolean")&&(j=null);var K=!1;if(j===null)K=!0;else switch(se){case"bigint":case"string":case"number":K=!0;break;case"object":switch(j.$$typeof){case a:case n:K=!0;break;case m:return K=j._init,k(K(j._payload),G,ee,ae,X)}}if(K)return X=X(j),K=ae===""?"."+W(j,0):ae,A(X)?(ee="",K!=null&&(ee=K.replace(T,"$&/")+"/"),k(X,G,ee,"",function(Ee){return Ee})):X!=null&&(xe(X)&&(X=he(X,ee+(X.key==null||j&&j.key===X.key?"":(""+X.key).replace(T,"$&/")+"/")+K)),G.push(X)),1;K=0;var J=ae===""?".":ae+":";if(A(j))for(var le=0;le<j.length;le++)ae=j[le],se=J+W(ae,le),K+=k(ae,G,ee,se,X);else if(le=w(j),typeof le=="function")for(j=le.call(j),le=0;!(ae=j.next()).done;)ae=ae.value,se=J+W(ae,le++),K+=k(ae,G,ee,se,X);else if(se==="object"){if(typeof j.then=="function")return k(ze(j),G,ee,ae,X);throw G=String(j),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(j).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.")}return K}function D(j,G,ee){if(j==null)return j;var ae=[],X=0;return k(j,ae,"","",function(se){return G.call(ee,se,X++)}),ae}function P(j){if(j._status===-1){var G=j._result;G=G(),G.then(function(ee){(j._status===0||j._status===-1)&&(j._status=1,j._result=ee)},function(ee){(j._status===0||j._status===-1)&&(j._status=2,j._result=ee)}),j._status===-1&&(j._status=0,j._result=G)}if(j._status===1)return j._result.default;throw j._result}var ge=typeof reportError=="function"?reportError:function(j){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var G=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof j=="object"&&j!==null&&typeof j.message=="string"?String(j.message):String(j),error:j});if(!window.dispatchEvent(G))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",j);return}console.error(j)},re={map:D,forEach:function(j,G,ee){D(j,function(){G.apply(this,arguments)},ee)},count:function(j){var G=0;return D(j,function(){G++}),G},toArray:function(j){return D(j,function(G){return G})||[]},only:function(j){if(!xe(j))throw Error("React.Children.only expected to receive a single React element child.");return j}};return ct.Activity=u,ct.Children=re,ct.Component=x,ct.Fragment=s,ct.Profiler=l,ct.PureComponent=R,ct.StrictMode=i,ct.Suspense=g,ct.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=H,ct.__COMPILER_RUNTIME={__proto__:null,c:function(j){return H.H.useMemoCache(j)}},ct.cache=function(j){return function(){return j.apply(null,arguments)}},ct.cacheSignal=function(){return null},ct.cloneElement=function(j,G,ee){if(j==null)throw Error("The argument must be a React element, but you passed "+j+".");var ae=_({},j.props),X=j.key;if(G!=null)for(se in G.key!==void 0&&(X=""+G.key),G)!$.call(G,se)||se==="key"||se==="__self"||se==="__source"||se==="ref"&&G.ref===void 0||(ae[se]=G[se]);var se=arguments.length-2;if(se===1)ae.children=ee;else if(1<se){for(var K=Array(se),J=0;J<se;J++)K[J]=arguments[J+2];ae.children=K}return Z(j.type,X,ae)},ct.createContext=function(j){return j={$$typeof:d,_currentValue:j,_currentValue2:j,_threadCount:0,Provider:null,Consumer:null},j.Provider=j,j.Consumer={$$typeof:c,_context:j},j},ct.createElement=function(j,G,ee){var ae,X={},se=null;if(G!=null)for(ae in G.key!==void 0&&(se=""+G.key),G)$.call(G,ae)&&ae!=="key"&&ae!=="__self"&&ae!=="__source"&&(X[ae]=G[ae]);var K=arguments.length-2;if(K===1)X.children=ee;else if(1<K){for(var J=Array(K),le=0;le<K;le++)J[le]=arguments[le+2];X.children=J}if(j&&j.defaultProps)for(ae in K=j.defaultProps,K)X[ae]===void 0&&(X[ae]=K[ae]);return Z(j,se,X)},ct.createRef=function(){return{current:null}},ct.forwardRef=function(j){return{$$typeof:h,render:j}},ct.isValidElement=xe,ct.lazy=function(j){return{$$typeof:m,_payload:{_status:-1,_result:j},_init:P}},ct.memo=function(j,G){return{$$typeof:p,type:j,compare:G===void 0?null:G}},ct.startTransition=function(j){var G=H.T,ee={};H.T=ee;try{var ae=j(),X=H.S;X!==null&&X(ee,ae),typeof ae=="object"&&ae!==null&&typeof ae.then=="function"&&ae.then(I,ge)}catch(se){ge(se)}finally{G!==null&&ee.types!==null&&(G.types=ee.types),H.T=G}},ct.unstable_useCacheRefresh=function(){return H.H.useCacheRefresh()},ct.use=function(j){return H.H.use(j)},ct.useActionState=function(j,G,ee){return H.H.useActionState(j,G,ee)},ct.useCallback=function(j,G){return H.H.useCallback(j,G)},ct.useContext=function(j){return H.H.useContext(j)},ct.useDebugValue=function(){},ct.useDeferredValue=function(j,G){return H.H.useDeferredValue(j,G)},ct.useEffect=function(j,G){return H.H.useEffect(j,G)},ct.useEffectEvent=function(j){return H.H.useEffectEvent(j)},ct.useId=function(){return H.H.useId()},ct.useImperativeHandle=function(j,G,ee){return H.H.useImperativeHandle(j,G,ee)},ct.useInsertionEffect=function(j,G){return H.H.useInsertionEffect(j,G)},ct.useLayoutEffect=function(j,G){return H.H.useLayoutEffect(j,G)},ct.useMemo=function(j,G){return H.H.useMemo(j,G)},ct.useOptimistic=function(j,G){return H.H.useOptimistic(j,G)},ct.useReducer=function(j,G,ee){return H.H.useReducer(j,G,ee)},ct.useRef=function(j){return H.H.useRef(j)},ct.useState=function(j){return H.H.useState(j)},ct.useSyncExternalStore=function(j,G,ee){return H.H.useSyncExternalStore(j,G,ee)},ct.useTransition=function(){return H.H.useTransition()},ct.version="19.2.0",ct}var rv;function pm(){return rv||(rv=1,gf.exports=r_()),gf.exports}var vf={exports:{}},Ia={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sv;function s_(){if(sv)return Ia;sv=1;var a=pm();function n(g){var p="https://react.dev/errors/"+g;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var m=2;m<arguments.length;m++)p+="&args[]="+encodeURIComponent(arguments[m])}return"Minified React error #"+g+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var i={d:{f:s,r:function(){throw Error(n(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(g,p,m){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:u==null?null:""+u,children:g,containerInfo:p,implementation:m}}var d=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(g,p){if(g==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Ia.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,Ia.createPortal=function(g,p){var m=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(n(299));return c(g,p,null,m)},Ia.flushSync=function(g){var p=d.T,m=i.p;try{if(d.T=null,i.p=2,g)return g()}finally{d.T=p,i.p=m,i.d.f()}},Ia.preconnect=function(g,p){typeof g=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,i.d.C(g,p))},Ia.prefetchDNS=function(g){typeof g=="string"&&i.d.D(g)},Ia.preinit=function(g,p){if(typeof g=="string"&&p&&typeof p.as=="string"){var m=p.as,u=h(m,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,w=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;m==="style"?i.d.S(g,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:u,integrity:S,fetchPriority:w}):m==="script"&&i.d.X(g,{crossOrigin:u,integrity:S,fetchPriority:w,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Ia.preinitModule=function(g,p){if(typeof g=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var m=h(p.as,p.crossOrigin);i.d.M(g,{crossOrigin:m,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&i.d.M(g)},Ia.preload=function(g,p){if(typeof g=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var m=p.as,u=h(m,p.crossOrigin);i.d.L(g,m,{crossOrigin:u,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Ia.preloadModule=function(g,p){if(typeof g=="string")if(p){var m=h(p.as,p.crossOrigin);i.d.m(g,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:m,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else i.d.m(g)},Ia.requestFormReset=function(g){i.d.r(g)},Ia.unstable_batchedUpdates=function(g,p){return g(p)},Ia.useFormState=function(g,p,m){return d.H.useFormState(g,p,m)},Ia.useFormStatus=function(){return d.H.useHostTransitionStatus()},Ia.version="19.2.0",Ia}var lv;function H3(){if(lv)return vf.exports;lv=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(n){console.error(n)}}return a(),vf.exports=s_(),vf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ov;function l_(){if(ov)return fo;ov=1;var a=n_(),n=pm(),s=H3();function i(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function d(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function h(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(c(e)!==e)throw Error(i(188))}function p(e){var t=e.alternate;if(!t){if(t=c(e),t===null)throw Error(i(188));return t!==e?null:e}for(var r=e,o=t;;){var f=r.return;if(f===null)break;var v=f.alternate;if(v===null){if(o=f.return,o!==null){r=o;continue}break}if(f.child===v.child){for(v=f.child;v;){if(v===r)return g(f),e;if(v===o)return g(f),t;v=v.sibling}throw Error(i(188))}if(r.return!==o.return)r=f,o=v;else{for(var E=!1,N=f.child;N;){if(N===r){E=!0,r=f,o=v;break}if(N===o){E=!0,o=f,r=v;break}N=N.sibling}if(!E){for(N=v.child;N;){if(N===r){E=!0,r=v,o=f;break}if(N===o){E=!0,o=v,r=f;break}N=N.sibling}if(!E)throw Error(i(189))}}if(r.alternate!==o)throw Error(i(190))}if(r.tag!==3)throw Error(i(188));return r.stateNode.current===r?e:t}function m(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=m(e),t!==null)return t;e=e.sibling}return null}var u=Object.assign,S=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),z=Symbol.for("react.portal"),_=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),R=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),$=Symbol.for("react.lazy"),Z=Symbol.for("react.activity"),he=Symbol.for("react.memo_cache_sentinel"),xe=Symbol.iterator;function V(e){return e===null||typeof e!="object"?null:(e=xe&&e[xe]||e["@@iterator"],typeof e=="function"?e:null)}var T=Symbol.for("react.client.reference");function W(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===T?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case _:return"Fragment";case x:return"Profiler";case b:return"StrictMode";case A:return"Suspense";case I:return"SuspenseList";case Z:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case z:return"Portal";case R:return e.displayName||"Context";case O:return(e._context.displayName||"Context")+".Consumer";case C:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case H:return t=e.displayName||null,t!==null?t:W(e.type)||"Memo";case $:t=e._payload,e=e._init;try{return W(e(t))}catch{}}return null}var ze=Array.isArray,k=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P={pending:!1,data:null,method:null,action:null},ge=[],re=-1;function j(e){return{current:e}}function G(e){0>re||(e.current=ge[re],ge[re]=null,re--)}function ee(e,t){re++,ge[re]=e.current,e.current=t}var ae=j(null),X=j(null),se=j(null),K=j(null);function J(e,t){switch(ee(se,t),ee(X,e),ee(ae,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?xg(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=xg(t),e=wg(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}G(ae),ee(ae,e)}function le(){G(ae),G(X),G(se)}function Ee(e){e.memoizedState!==null&&ee(K,e);var t=ae.current,r=wg(t,e.type);t!==r&&(ee(X,e),ee(ae,r))}function $e(e){X.current===e&&(G(ae),G(X)),K.current===e&&(G(K),lo._currentValue=P)}var ue,ie;function Me(e){if(ue===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);ue=t&&t[1]||"",ie=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ue+e+ie}var Ke=!1;function Ge(e,t){if(!e||Ke)return"";Ke=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(t){var Se=function(){throw Error()};if(Object.defineProperty(Se.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Se,[])}catch(be){var fe=be}Reflect.construct(e,[],Se)}else{try{Se.call()}catch(be){fe=be}e.call(Se.prototype)}}else{try{throw Error()}catch(be){fe=be}(Se=e())&&typeof Se.catch=="function"&&Se.catch(function(){})}}catch(be){if(be&&fe&&typeof be.stack=="string")return[be.stack,fe.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var v=o.DetermineComponentFrameRoot(),E=v[0],N=v[1];if(E&&N){var Y=E.split(`
`),de=N.split(`
`);for(f=o=0;o<Y.length&&!Y[o].includes("DetermineComponentFrameRoot");)o++;for(;f<de.length&&!de[f].includes("DetermineComponentFrameRoot");)f++;if(o===Y.length||f===de.length)for(o=Y.length-1,f=de.length-1;1<=o&&0<=f&&Y[o]!==de[f];)f--;for(;1<=o&&0<=f;o--,f--)if(Y[o]!==de[f]){if(o!==1||f!==1)do if(o--,f--,0>f||Y[o]!==de[f]){var ye=`
`+Y[o].replace(" at new "," at ");return e.displayName&&ye.includes("<anonymous>")&&(ye=ye.replace("<anonymous>",e.displayName)),ye}while(1<=o&&0<=f);break}}}finally{Ke=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?Me(r):""}function Fe(e,t){switch(e.tag){case 26:case 27:case 5:return Me(e.type);case 16:return Me("Lazy");case 13:return e.child!==t&&t!==null?Me("Suspense Fallback"):Me("Suspense");case 19:return Me("SuspenseList");case 0:case 15:return Ge(e.type,!1);case 11:return Ge(e.type.render,!1);case 1:return Ge(e.type,!0);case 31:return Me("Activity");default:return""}}function ke(e){try{var t="",r=null;do t+=Fe(e,r),r=e,e=e.return;while(e);return t}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Ce=Object.prototype.hasOwnProperty,pe=a.unstable_scheduleCallback,te=a.unstable_cancelCallback,Oe=a.unstable_shouldYield,Qe=a.unstable_requestPaint,je=a.unstable_now,Te=a.unstable_getCurrentPriorityLevel,We=a.unstable_ImmediatePriority,sa=a.unstable_UserBlockingPriority,_a=a.unstable_NormalPriority,dt=a.unstable_LowPriority,Ft=a.unstable_IdlePriority,xa=a.log,Qt=a.unstable_setDisableYieldValue,ea=null,kt=null;function Bt(e){if(typeof xa=="function"&&Qt(e),kt&&typeof kt.setStrictMode=="function")try{kt.setStrictMode(ea,e)}catch{}}var Ct=Math.clz32?Math.clz32:Ut,Ca=Math.log,fa=Math.LN2;function Ut(e){return e>>>=0,e===0?32:31-(Ca(e)/fa|0)|0}var la=256,tt=262144,ma=4194304;function ta(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function _e(e,t,r){var o=e.pendingLanes;if(o===0)return 0;var f=0,v=e.suspendedLanes,E=e.pingedLanes;e=e.warmLanes;var N=o&134217727;return N!==0?(o=N&~v,o!==0?f=ta(o):(E&=N,E!==0?f=ta(E):r||(r=N&~e,r!==0&&(f=ta(r))))):(N=o&~v,N!==0?f=ta(N):E!==0?f=ta(E):r||(r=o&~e,r!==0&&(f=ta(r)))),f===0?0:t!==0&&t!==f&&(t&v)===0&&(v=f&-f,r=t&-t,v>=r||v===32&&(r&4194048)!==0)?t:f}function me(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Re(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Mt(){var e=ma;return ma<<=1,(ma&62914560)===0&&(ma=4194304),e}function Kt(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function gt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Gt(e,t,r,o,f,v){var E=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var N=e.entanglements,Y=e.expirationTimes,de=e.hiddenUpdates;for(r=E&~r;0<r;){var ye=31-Ct(r),Se=1<<ye;N[ye]=0,Y[ye]=-1;var fe=de[ye];if(fe!==null)for(de[ye]=null,ye=0;ye<fe.length;ye++){var be=fe[ye];be!==null&&(be.lane&=-536870913)}r&=~Se}o!==0&&Ba(e,o,0),v!==0&&f===0&&e.tag!==0&&(e.suspendedLanes|=v&~(E&~t))}function Ba(e,t,r){e.pendingLanes|=t,e.suspendedLanes&=~t;var o=31-Ct(t);e.entangledLanes|=t,e.entanglements[o]=e.entanglements[o]|1073741824|r&261930}function He(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var o=31-Ct(r),f=1<<o;f&t|e[o]&t&&(e[o]|=t),r&=~f}}function ve(e,t){var r=t&-t;return r=(r&42)!==0?1:Xe(r),(r&(e.suspendedLanes|t))!==0?0:r}function Xe(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function wa(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function wi(){var e=D.p;return e!==0?e:(e=window.event,e===void 0?32:qg(e.type))}function za(e,t){var r=D.p;try{return D.p=e,t()}finally{D.p=r}}var Ua=Math.random().toString(36).slice(2),Wt="__reactFiber$"+Ua,pa="__reactProps$"+Ua,zi="__reactContainer$"+Ua,yn="__reactEvents$"+Ua,Nr="__reactListeners$"+Ua,Dr="__reactHandles$"+Ua,Fn="__reactResources$"+Ua,ms="__reactMarker$"+Ua;function iu(e){delete e[Wt],delete e[pa],delete e[yn],delete e[Nr],delete e[Dr]}function Ne(e){var t=e[Wt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[zi]||r[Wt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Ag(e);e!==null;){if(r=e[Wt])return r;e=Ag(e)}return t}e=r,r=e.parentNode}return null}function ce(e){if(e=e[Wt]||e[zi]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ve(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Si(e){var t=e[Fn];return t||(t=e[Fn]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Aa(e){e[ms]=!0}var c0=new Set,d0={};function Or(e,t){ps(e,t),ps(e+"Capture",t)}function ps(e,t){for(d0[e]=t,e=0;e<t.length;e++)c0.add(t[e])}var P2=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),u0={},h0={};function Z2(e){return Ce.call(h0,e)?!0:Ce.call(u0,e)?!1:P2.test(e)?h0[e]=!0:(u0[e]=!0,!1)}function Bo(e,t,r){if(Z2(t))if(r===null)e.removeAttribute(t);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var o=t.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+r)}}function Uo(e,t,r){if(r===null)e.removeAttribute(t);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+r)}}function _n(e,t,r,o){if(o===null)e.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(t,r,""+o)}}function Mi(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function f0(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function q2(e,t,r){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,v=o.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return f.call(this)},set:function(E){r=""+E,v.call(this,E)}}),Object.defineProperty(e,t,{enumerable:o.enumerable}),{getValue:function(){return r},setValue:function(E){r=""+E},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function nu(e){if(!e._valueTracker){var t=f0(e)?"checked":"value";e._valueTracker=q2(e,t,""+e[t])}}function m0(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),o="";return e&&(o=f0(e)?e.checked?"true":"false":e.value),e=o,e!==r?(t.setValue(e),!0):!1}function Io(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Y2=/[\n"\\]/g;function Ei(e){return e.replace(Y2,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function ru(e,t,r,o,f,v,E,N){e.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.type=E:e.removeAttribute("type"),t!=null?E==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Mi(t)):e.value!==""+Mi(t)&&(e.value=""+Mi(t)):E!=="submit"&&E!=="reset"||e.removeAttribute("value"),t!=null?su(e,E,Mi(t)):r!=null?su(e,E,Mi(r)):o!=null&&e.removeAttribute("value"),f==null&&v!=null&&(e.defaultChecked=!!v),f!=null&&(e.checked=f&&typeof f!="function"&&typeof f!="symbol"),N!=null&&typeof N!="function"&&typeof N!="symbol"&&typeof N!="boolean"?e.name=""+Mi(N):e.removeAttribute("name")}function p0(e,t,r,o,f,v,E,N){if(v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.type=v),t!=null||r!=null){if(!(v!=="submit"&&v!=="reset"||t!=null)){nu(e);return}r=r!=null?""+Mi(r):"",t=t!=null?""+Mi(t):r,N||t===e.value||(e.value=t),e.defaultValue=t}o=o??f,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=N?e.checked:!!o,e.defaultChecked=!!o,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(e.name=E),nu(e)}function su(e,t,r){t==="number"&&Io(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function gs(e,t,r,o){if(e=e.options,t){t={};for(var f=0;f<r.length;f++)t["$"+r[f]]=!0;for(r=0;r<e.length;r++)f=t.hasOwnProperty("$"+e[r].value),e[r].selected!==f&&(e[r].selected=f),f&&o&&(e[r].defaultSelected=!0)}else{for(r=""+Mi(r),t=null,f=0;f<e.length;f++){if(e[f].value===r){e[f].selected=!0,o&&(e[f].defaultSelected=!0);return}t!==null||e[f].disabled||(t=e[f])}t!==null&&(t.selected=!0)}}function g0(e,t,r){if(t!=null&&(t=""+Mi(t),t!==e.value&&(e.value=t),r==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=r!=null?""+Mi(r):""}function v0(e,t,r,o){if(t==null){if(o!=null){if(r!=null)throw Error(i(92));if(ze(o)){if(1<o.length)throw Error(i(93));o=o[0]}r=o}r==null&&(r=""),t=r}r=Mi(t),e.defaultValue=r,o=e.textContent,o===r&&o!==""&&o!==null&&(e.value=o),nu(e)}function vs(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var F2=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function b0(e,t,r){var o=t.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?o?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":o?e.setProperty(t,r):typeof r!="number"||r===0||F2.has(t)?t==="float"?e.cssFloat=r:e[t]=(""+r).trim():e[t]=r+"px"}function y0(e,t,r){if(t!=null&&typeof t!="object")throw Error(i(62));if(e=e.style,r!=null){for(var o in r)!r.hasOwnProperty(o)||t!=null&&t.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var f in t)o=t[f],t.hasOwnProperty(f)&&r[f]!==o&&b0(e,f,o)}else for(var v in t)t.hasOwnProperty(v)&&b0(e,v,t[v])}function lu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var G2=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),X2=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Po(e){return X2.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function xn(){}var ou=null;function cu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var bs=null,ys=null;function _0(e){var t=ce(e);if(t&&(e=t.stateNode)){var r=e[pa]||null;e:switch(e=t.stateNode,t.type){case"input":if(ru(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+Ei(""+t)+'"][type="radio"]'),t=0;t<r.length;t++){var o=r[t];if(o!==e&&o.form===e.form){var f=o[pa]||null;if(!f)throw Error(i(90));ru(o,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(t=0;t<r.length;t++)o=r[t],o.form===e.form&&m0(o)}break e;case"textarea":g0(e,r.value,r.defaultValue);break e;case"select":t=r.value,t!=null&&gs(e,!!r.multiple,t,!1)}}}var du=!1;function x0(e,t,r){if(du)return e(t,r);du=!0;try{var o=e(t);return o}finally{if(du=!1,(bs!==null||ys!==null)&&(kc(),bs&&(t=bs,e=ys,ys=bs=null,_0(t),e)))for(t=0;t<e.length;t++)_0(e[t])}}function Sl(e,t){var r=e.stateNode;if(r===null)return null;var o=r[pa]||null;if(o===null)return null;r=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(i(231,t,typeof r));return r}var wn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),uu=!1;if(wn)try{var Ml={};Object.defineProperty(Ml,"passive",{get:function(){uu=!0}}),window.addEventListener("test",Ml,Ml),window.removeEventListener("test",Ml,Ml)}catch{uu=!1}var Gn=null,hu=null,Zo=null;function w0(){if(Zo)return Zo;var e,t=hu,r=t.length,o,f="value"in Gn?Gn.value:Gn.textContent,v=f.length;for(e=0;e<r&&t[e]===f[e];e++);var E=r-e;for(o=1;o<=E&&t[r-o]===f[v-o];o++);return Zo=f.slice(e,1<o?1-o:void 0)}function qo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Yo(){return!0}function z0(){return!1}function Ga(e){function t(r,o,f,v,E){this._reactName=r,this._targetInst=f,this.type=o,this.nativeEvent=v,this.target=E,this.currentTarget=null;for(var N in e)e.hasOwnProperty(N)&&(r=e[N],this[N]=r?r(v):v[N]);return this.isDefaultPrevented=(v.defaultPrevented!=null?v.defaultPrevented:v.returnValue===!1)?Yo:z0,this.isPropagationStopped=z0,this}return u(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Yo)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Yo)},persist:function(){},isPersistent:Yo}),t}var Hr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fo=Ga(Hr),El=u({},Hr,{view:0,detail:0}),Q2=Ga(El),fu,mu,Tl,Go=u({},El,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Tl&&(Tl&&e.type==="mousemove"?(fu=e.screenX-Tl.screenX,mu=e.screenY-Tl.screenY):mu=fu=0,Tl=e),fu)},movementY:function(e){return"movementY"in e?e.movementY:mu}}),S0=Ga(Go),K2=u({},Go,{dataTransfer:0}),W2=Ga(K2),J2=u({},El,{relatedTarget:0}),pu=Ga(J2),ey=u({},Hr,{animationName:0,elapsedTime:0,pseudoElement:0}),ty=Ga(ey),ay=u({},Hr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),iy=Ga(ay),ny=u({},Hr,{data:0}),M0=Ga(ny),ry={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ly={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function oy(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ly[e])?!!t[e]:!1}function gu(){return oy}var cy=u({},El,{key:function(e){if(e.key){var t=ry[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=qo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?sy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gu,charCode:function(e){return e.type==="keypress"?qo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?qo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),dy=Ga(cy),uy=u({},Go,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),E0=Ga(uy),hy=u({},El,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gu}),fy=Ga(hy),my=u({},Hr,{propertyName:0,elapsedTime:0,pseudoElement:0}),py=Ga(my),gy=u({},Go,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),vy=Ga(gy),by=u({},Hr,{newState:0,oldState:0}),yy=Ga(by),_y=[9,13,27,32],vu=wn&&"CompositionEvent"in window,Cl=null;wn&&"documentMode"in document&&(Cl=document.documentMode);var xy=wn&&"TextEvent"in window&&!Cl,T0=wn&&(!vu||Cl&&8<Cl&&11>=Cl),C0=" ",A0=!1;function k0(e,t){switch(e){case"keyup":return _y.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function j0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var _s=!1;function wy(e,t){switch(e){case"compositionend":return j0(t);case"keypress":return t.which!==32?null:(A0=!0,C0);case"textInput":return e=t.data,e===C0&&A0?null:e;default:return null}}function zy(e,t){if(_s)return e==="compositionend"||!vu&&k0(e,t)?(e=w0(),Zo=hu=Gn=null,_s=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return T0&&t.locale!=="ko"?null:t.data;default:return null}}var Sy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function N0(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Sy[e.type]:t==="textarea"}function D0(e,t,r,o){bs?ys?ys.push(o):ys=[o]:bs=o,t=$c(t,"onChange"),0<t.length&&(r=new Fo("onChange","change",null,r,o),e.push({event:r,listeners:t}))}var Al=null,kl=null;function My(e){pg(e,0)}function Xo(e){var t=Ve(e);if(m0(t))return e}function O0(e,t){if(e==="change")return t}var H0=!1;if(wn){var bu;if(wn){var yu="oninput"in document;if(!yu){var R0=document.createElement("div");R0.setAttribute("oninput","return;"),yu=typeof R0.oninput=="function"}bu=yu}else bu=!1;H0=bu&&(!document.documentMode||9<document.documentMode)}function $0(){Al&&(Al.detachEvent("onpropertychange",V0),kl=Al=null)}function V0(e){if(e.propertyName==="value"&&Xo(kl)){var t=[];D0(t,kl,e,cu(e)),x0(My,t)}}function Ey(e,t,r){e==="focusin"?($0(),Al=t,kl=r,Al.attachEvent("onpropertychange",V0)):e==="focusout"&&$0()}function Ty(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Xo(kl)}function Cy(e,t){if(e==="click")return Xo(t)}function Ay(e,t){if(e==="input"||e==="change")return Xo(t)}function ky(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ni=typeof Object.is=="function"?Object.is:ky;function jl(e,t){if(ni(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),o=Object.keys(t);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var f=r[o];if(!Ce.call(t,f)||!ni(e[f],t[f]))return!1}return!0}function L0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function B0(e,t){var r=L0(e);e=0;for(var o;r;){if(r.nodeType===3){if(o=e+r.textContent.length,e<=t&&o>=t)return{node:r,offset:t-e};e=o}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=L0(r)}}function U0(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?U0(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function I0(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Io(e.document);t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Io(e.document)}return t}function _u(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var jy=wn&&"documentMode"in document&&11>=document.documentMode,xs=null,xu=null,Nl=null,wu=!1;function P0(e,t,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;wu||xs==null||xs!==Io(o)||(o=xs,"selectionStart"in o&&_u(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Nl&&jl(Nl,o)||(Nl=o,o=$c(xu,"onSelect"),0<o.length&&(t=new Fo("onSelect","select",null,t,r),e.push({event:t,listeners:o}),t.target=xs)))}function Rr(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var ws={animationend:Rr("Animation","AnimationEnd"),animationiteration:Rr("Animation","AnimationIteration"),animationstart:Rr("Animation","AnimationStart"),transitionrun:Rr("Transition","TransitionRun"),transitionstart:Rr("Transition","TransitionStart"),transitioncancel:Rr("Transition","TransitionCancel"),transitionend:Rr("Transition","TransitionEnd")},zu={},Z0={};wn&&(Z0=document.createElement("div").style,"AnimationEvent"in window||(delete ws.animationend.animation,delete ws.animationiteration.animation,delete ws.animationstart.animation),"TransitionEvent"in window||delete ws.transitionend.transition);function $r(e){if(zu[e])return zu[e];if(!ws[e])return e;var t=ws[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Z0)return zu[e]=t[r];return e}var q0=$r("animationend"),Y0=$r("animationiteration"),F0=$r("animationstart"),Ny=$r("transitionrun"),Dy=$r("transitionstart"),Oy=$r("transitioncancel"),G0=$r("transitionend"),X0=new Map,Su="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Su.push("scrollEnd");function $i(e,t){X0.set(e,t),Or(t,[e])}var Qo=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ti=[],zs=0,Mu=0;function Ko(){for(var e=zs,t=Mu=zs=0;t<e;){var r=Ti[t];Ti[t++]=null;var o=Ti[t];Ti[t++]=null;var f=Ti[t];Ti[t++]=null;var v=Ti[t];if(Ti[t++]=null,o!==null&&f!==null){var E=o.pending;E===null?f.next=f:(f.next=E.next,E.next=f),o.pending=f}v!==0&&Q0(r,f,v)}}function Wo(e,t,r,o){Ti[zs++]=e,Ti[zs++]=t,Ti[zs++]=r,Ti[zs++]=o,Mu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Eu(e,t,r,o){return Wo(e,t,r,o),Jo(e)}function Vr(e,t){return Wo(e,null,null,t),Jo(e)}function Q0(e,t,r){e.lanes|=r;var o=e.alternate;o!==null&&(o.lanes|=r);for(var f=!1,v=e.return;v!==null;)v.childLanes|=r,o=v.alternate,o!==null&&(o.childLanes|=r),v.tag===22&&(e=v.stateNode,e===null||e._visibility&1||(f=!0)),e=v,v=v.return;return e.tag===3?(v=e.stateNode,f&&t!==null&&(f=31-Ct(r),e=v.hiddenUpdates,o=e[f],o===null?e[f]=[t]:o.push(t),t.lane=r|536870912),v):null}function Jo(e){if(50<eo)throw eo=0,Hh=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ss={};function Hy(e,t,r,o){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ri(e,t,r,o){return new Hy(e,t,r,o)}function Tu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function zn(e,t){var r=e.alternate;return r===null?(r=ri(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&65011712,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function K0(e,t){e.flags&=65011714;var r=e.alternate;return r===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,t=r.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ec(e,t,r,o,f,v){var E=0;if(o=e,typeof e=="function")Tu(e)&&(E=1);else if(typeof e=="string")E=B5(e,r,ae.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Z:return e=ri(31,r,t,f),e.elementType=Z,e.lanes=v,e;case _:return Lr(r.children,f,v,t);case b:E=8,f|=24;break;case x:return e=ri(12,r,t,f|2),e.elementType=x,e.lanes=v,e;case A:return e=ri(13,r,t,f),e.elementType=A,e.lanes=v,e;case I:return e=ri(19,r,t,f),e.elementType=I,e.lanes=v,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case R:E=10;break e;case O:E=9;break e;case C:E=11;break e;case H:E=14;break e;case $:E=16,o=null;break e}E=29,r=Error(i(130,e===null?"null":typeof e,"")),o=null}return t=ri(E,r,t,f),t.elementType=e,t.type=o,t.lanes=v,t}function Lr(e,t,r,o){return e=ri(7,e,o,t),e.lanes=r,e}function Cu(e,t,r){return e=ri(6,e,null,t),e.lanes=r,e}function W0(e){var t=ri(18,null,null,0);return t.stateNode=e,t}function Au(e,t,r){return t=ri(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var J0=new WeakMap;function Ci(e,t){if(typeof e=="object"&&e!==null){var r=J0.get(e);return r!==void 0?r:(t={value:e,source:t,stack:ke(t)},J0.set(e,t),t)}return{value:e,source:t,stack:ke(t)}}var Ms=[],Es=0,tc=null,Dl=0,Ai=[],ki=0,Xn=null,an=1,nn="";function Sn(e,t){Ms[Es++]=Dl,Ms[Es++]=tc,tc=e,Dl=t}function ep(e,t,r){Ai[ki++]=an,Ai[ki++]=nn,Ai[ki++]=Xn,Xn=e;var o=an;e=nn;var f=32-Ct(o)-1;o&=~(1<<f),r+=1;var v=32-Ct(t)+f;if(30<v){var E=f-f%5;v=(o&(1<<E)-1).toString(32),o>>=E,f-=E,an=1<<32-Ct(t)+f|r<<f|o,nn=v+e}else an=1<<v|r<<f|o,nn=e}function ku(e){e.return!==null&&(Sn(e,1),ep(e,1,0))}function ju(e){for(;e===tc;)tc=Ms[--Es],Ms[Es]=null,Dl=Ms[--Es],Ms[Es]=null;for(;e===Xn;)Xn=Ai[--ki],Ai[ki]=null,nn=Ai[--ki],Ai[ki]=null,an=Ai[--ki],Ai[ki]=null}function tp(e,t){Ai[ki++]=an,Ai[ki++]=nn,Ai[ki++]=Xn,an=t.id,nn=t.overflow,Xn=e}var Oa=null,It=null,wt=!1,Qn=null,ji=!1,Nu=Error(i(519));function Kn(e){var t=Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ol(Ci(t,e)),Nu}function ap(e){var t=e.stateNode,r=e.type,o=e.memoizedProps;switch(t[Wt]=e,t[pa]=o,r){case"dialog":bt("cancel",t),bt("close",t);break;case"iframe":case"object":case"embed":bt("load",t);break;case"video":case"audio":for(r=0;r<ao.length;r++)bt(ao[r],t);break;case"source":bt("error",t);break;case"img":case"image":case"link":bt("error",t),bt("load",t);break;case"details":bt("toggle",t);break;case"input":bt("invalid",t),p0(t,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":bt("invalid",t);break;case"textarea":bt("invalid",t),v0(t,o.value,o.defaultValue,o.children)}r=o.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||t.textContent===""+r||o.suppressHydrationWarning===!0||yg(t.textContent,r)?(o.popover!=null&&(bt("beforetoggle",t),bt("toggle",t)),o.onScroll!=null&&bt("scroll",t),o.onScrollEnd!=null&&bt("scrollend",t),o.onClick!=null&&(t.onclick=xn),t=!0):t=!1,t||Kn(e,!0)}function ip(e){for(Oa=e.return;Oa;)switch(Oa.tag){case 5:case 31:case 13:ji=!1;return;case 27:case 3:ji=!0;return;default:Oa=Oa.return}}function Ts(e){if(e!==Oa)return!1;if(!wt)return ip(e),wt=!0,!1;var t=e.tag,r;if((r=t!==3&&t!==27)&&((r=t===5)&&(r=e.type,r=!(r!=="form"&&r!=="button")||Qh(e.type,e.memoizedProps)),r=!r),r&&It&&Kn(e),ip(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(317));It=Cg(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(317));It=Cg(e)}else t===27?(t=It,ur(e.type)?(e=tf,tf=null,It=e):It=t):It=Oa?Di(e.stateNode.nextSibling):null;return!0}function Br(){It=Oa=null,wt=!1}function Du(){var e=Qn;return e!==null&&(Wa===null?Wa=e:Wa.push.apply(Wa,e),Qn=null),e}function Ol(e){Qn===null?Qn=[e]:Qn.push(e)}var Ou=j(null),Ur=null,Mn=null;function Wn(e,t,r){ee(Ou,t._currentValue),t._currentValue=r}function En(e){e._currentValue=Ou.current,G(Ou)}function Hu(e,t,r){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===r)break;e=e.return}}function Ru(e,t,r,o){var f=e.child;for(f!==null&&(f.return=e);f!==null;){var v=f.dependencies;if(v!==null){var E=f.child;v=v.firstContext;e:for(;v!==null;){var N=v;v=f;for(var Y=0;Y<t.length;Y++)if(N.context===t[Y]){v.lanes|=r,N=v.alternate,N!==null&&(N.lanes|=r),Hu(v.return,r,e),o||(E=null);break e}v=N.next}}else if(f.tag===18){if(E=f.return,E===null)throw Error(i(341));E.lanes|=r,v=E.alternate,v!==null&&(v.lanes|=r),Hu(E,r,e),E=null}else E=f.child;if(E!==null)E.return=f;else for(E=f;E!==null;){if(E===e){E=null;break}if(f=E.sibling,f!==null){f.return=E.return,E=f;break}E=E.return}f=E}}function Cs(e,t,r,o){e=null;for(var f=t,v=!1;f!==null;){if(!v){if((f.flags&524288)!==0)v=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var E=f.alternate;if(E===null)throw Error(i(387));if(E=E.memoizedProps,E!==null){var N=f.type;ni(f.pendingProps.value,E.value)||(e!==null?e.push(N):e=[N])}}else if(f===K.current){if(E=f.alternate,E===null)throw Error(i(387));E.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(e!==null?e.push(lo):e=[lo])}f=f.return}e!==null&&Ru(t,e,r,o),t.flags|=262144}function ac(e){for(e=e.firstContext;e!==null;){if(!ni(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ir(e){Ur=e,Mn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ha(e){return np(Ur,e)}function ic(e,t){return Ur===null&&Ir(e),np(e,t)}function np(e,t){var r=t._currentValue;if(t={context:t,memoizedValue:r,next:null},Mn===null){if(e===null)throw Error(i(308));Mn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Mn=Mn.next=t;return r}var Ry=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(r,o){e.push(o)}};this.abort=function(){t.aborted=!0,e.forEach(function(r){return r()})}},$y=a.unstable_scheduleCallback,Vy=a.unstable_NormalPriority,ga={$$typeof:R,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function $u(){return{controller:new Ry,data:new Map,refCount:0}}function Hl(e){e.refCount--,e.refCount===0&&$y(Vy,function(){e.controller.abort()})}var Rl=null,Vu=0,As=0,ks=null;function Ly(e,t){if(Rl===null){var r=Rl=[];Vu=0,As=Uh(),ks={status:"pending",value:void 0,then:function(o){r.push(o)}}}return Vu++,t.then(rp,rp),t}function rp(){if(--Vu===0&&Rl!==null){ks!==null&&(ks.status="fulfilled");var e=Rl;Rl=null,As=0,ks=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function By(e,t){var r=[],o={status:"pending",value:null,reason:null,then:function(f){r.push(f)}};return e.then(function(){o.status="fulfilled",o.value=t;for(var f=0;f<r.length;f++)(0,r[f])(t)},function(f){for(o.status="rejected",o.reason=f,f=0;f<r.length;f++)(0,r[f])(void 0)}),o}var sp=k.S;k.S=function(e,t){P1=je(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Ly(e,t),sp!==null&&sp(e,t)};var Pr=j(null);function Lu(){var e=Pr.current;return e!==null?e:$t.pooledCache}function nc(e,t){t===null?ee(Pr,Pr.current):ee(Pr,t.pool)}function lp(){var e=Lu();return e===null?null:{parent:ga._currentValue,pool:e}}var js=Error(i(460)),Bu=Error(i(474)),rc=Error(i(542)),sc={then:function(){}};function op(e){return e=e.status,e==="fulfilled"||e==="rejected"}function cp(e,t,r){switch(r=e[r],r===void 0?e.push(t):r!==t&&(t.then(xn,xn),t=r),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,up(e),e;default:if(typeof t.status=="string")t.then(xn,xn);else{if(e=$t,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status="pending",e.then(function(o){if(t.status==="pending"){var f=t;f.status="fulfilled",f.value=o}},function(o){if(t.status==="pending"){var f=t;f.status="rejected",f.reason=o}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,up(e),e}throw qr=t,js}}function Zr(e){try{var t=e._init;return t(e._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(qr=r,js):r}}var qr=null;function dp(){if(qr===null)throw Error(i(459));var e=qr;return qr=null,e}function up(e){if(e===js||e===rc)throw Error(i(483))}var Ns=null,$l=0;function lc(e){var t=$l;return $l+=1,Ns===null&&(Ns=[]),cp(Ns,e,t)}function Vl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function oc(e,t){throw t.$$typeof===S?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function hp(e){function t(ne,Q){if(e){var oe=ne.deletions;oe===null?(ne.deletions=[Q],ne.flags|=16):oe.push(Q)}}function r(ne,Q){if(!e)return null;for(;Q!==null;)t(ne,Q),Q=Q.sibling;return null}function o(ne){for(var Q=new Map;ne!==null;)ne.key!==null?Q.set(ne.key,ne):Q.set(ne.index,ne),ne=ne.sibling;return Q}function f(ne,Q){return ne=zn(ne,Q),ne.index=0,ne.sibling=null,ne}function v(ne,Q,oe){return ne.index=oe,e?(oe=ne.alternate,oe!==null?(oe=oe.index,oe<Q?(ne.flags|=67108866,Q):oe):(ne.flags|=67108866,Q)):(ne.flags|=1048576,Q)}function E(ne){return e&&ne.alternate===null&&(ne.flags|=67108866),ne}function N(ne,Q,oe,we){return Q===null||Q.tag!==6?(Q=Cu(oe,ne.mode,we),Q.return=ne,Q):(Q=f(Q,oe),Q.return=ne,Q)}function Y(ne,Q,oe,we){var Je=oe.type;return Je===_?ye(ne,Q,oe.props.children,we,oe.key):Q!==null&&(Q.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===$&&Zr(Je)===Q.type)?(Q=f(Q,oe.props),Vl(Q,oe),Q.return=ne,Q):(Q=ec(oe.type,oe.key,oe.props,null,ne.mode,we),Vl(Q,oe),Q.return=ne,Q)}function de(ne,Q,oe,we){return Q===null||Q.tag!==4||Q.stateNode.containerInfo!==oe.containerInfo||Q.stateNode.implementation!==oe.implementation?(Q=Au(oe,ne.mode,we),Q.return=ne,Q):(Q=f(Q,oe.children||[]),Q.return=ne,Q)}function ye(ne,Q,oe,we,Je){return Q===null||Q.tag!==7?(Q=Lr(oe,ne.mode,we,Je),Q.return=ne,Q):(Q=f(Q,oe),Q.return=ne,Q)}function Se(ne,Q,oe){if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Q=Cu(""+Q,ne.mode,oe),Q.return=ne,Q;if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case w:return oe=ec(Q.type,Q.key,Q.props,null,ne.mode,oe),Vl(oe,Q),oe.return=ne,oe;case z:return Q=Au(Q,ne.mode,oe),Q.return=ne,Q;case $:return Q=Zr(Q),Se(ne,Q,oe)}if(ze(Q)||V(Q))return Q=Lr(Q,ne.mode,oe,null),Q.return=ne,Q;if(typeof Q.then=="function")return Se(ne,lc(Q),oe);if(Q.$$typeof===R)return Se(ne,ic(ne,Q),oe);oc(ne,Q)}return null}function fe(ne,Q,oe,we){var Je=Q!==null?Q.key:null;if(typeof oe=="string"&&oe!==""||typeof oe=="number"||typeof oe=="bigint")return Je!==null?null:N(ne,Q,""+oe,we);if(typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case w:return oe.key===Je?Y(ne,Q,oe,we):null;case z:return oe.key===Je?de(ne,Q,oe,we):null;case $:return oe=Zr(oe),fe(ne,Q,oe,we)}if(ze(oe)||V(oe))return Je!==null?null:ye(ne,Q,oe,we,null);if(typeof oe.then=="function")return fe(ne,Q,lc(oe),we);if(oe.$$typeof===R)return fe(ne,Q,ic(ne,oe),we);oc(ne,oe)}return null}function be(ne,Q,oe,we,Je){if(typeof we=="string"&&we!==""||typeof we=="number"||typeof we=="bigint")return ne=ne.get(oe)||null,N(Q,ne,""+we,Je);if(typeof we=="object"&&we!==null){switch(we.$$typeof){case w:return ne=ne.get(we.key===null?oe:we.key)||null,Y(Q,ne,we,Je);case z:return ne=ne.get(we.key===null?oe:we.key)||null,de(Q,ne,we,Je);case $:return we=Zr(we),be(ne,Q,oe,we,Je)}if(ze(we)||V(we))return ne=ne.get(oe)||null,ye(Q,ne,we,Je,null);if(typeof we.then=="function")return be(ne,Q,oe,lc(we),Je);if(we.$$typeof===R)return be(ne,Q,oe,ic(Q,we),Je);oc(Q,we)}return null}function Ue(ne,Q,oe,we){for(var Je=null,Et=null,Ye=Q,ht=Q=0,xt=null;Ye!==null&&ht<oe.length;ht++){Ye.index>ht?(xt=Ye,Ye=null):xt=Ye.sibling;var Tt=fe(ne,Ye,oe[ht],we);if(Tt===null){Ye===null&&(Ye=xt);break}e&&Ye&&Tt.alternate===null&&t(ne,Ye),Q=v(Tt,Q,ht),Et===null?Je=Tt:Et.sibling=Tt,Et=Tt,Ye=xt}if(ht===oe.length)return r(ne,Ye),wt&&Sn(ne,ht),Je;if(Ye===null){for(;ht<oe.length;ht++)Ye=Se(ne,oe[ht],we),Ye!==null&&(Q=v(Ye,Q,ht),Et===null?Je=Ye:Et.sibling=Ye,Et=Ye);return wt&&Sn(ne,ht),Je}for(Ye=o(Ye);ht<oe.length;ht++)xt=be(Ye,ne,ht,oe[ht],we),xt!==null&&(e&&xt.alternate!==null&&Ye.delete(xt.key===null?ht:xt.key),Q=v(xt,Q,ht),Et===null?Je=xt:Et.sibling=xt,Et=xt);return e&&Ye.forEach(function(gr){return t(ne,gr)}),wt&&Sn(ne,ht),Je}function et(ne,Q,oe,we){if(oe==null)throw Error(i(151));for(var Je=null,Et=null,Ye=Q,ht=Q=0,xt=null,Tt=oe.next();Ye!==null&&!Tt.done;ht++,Tt=oe.next()){Ye.index>ht?(xt=Ye,Ye=null):xt=Ye.sibling;var gr=fe(ne,Ye,Tt.value,we);if(gr===null){Ye===null&&(Ye=xt);break}e&&Ye&&gr.alternate===null&&t(ne,Ye),Q=v(gr,Q,ht),Et===null?Je=gr:Et.sibling=gr,Et=gr,Ye=xt}if(Tt.done)return r(ne,Ye),wt&&Sn(ne,ht),Je;if(Ye===null){for(;!Tt.done;ht++,Tt=oe.next())Tt=Se(ne,Tt.value,we),Tt!==null&&(Q=v(Tt,Q,ht),Et===null?Je=Tt:Et.sibling=Tt,Et=Tt);return wt&&Sn(ne,ht),Je}for(Ye=o(Ye);!Tt.done;ht++,Tt=oe.next())Tt=be(Ye,ne,ht,Tt.value,we),Tt!==null&&(e&&Tt.alternate!==null&&Ye.delete(Tt.key===null?ht:Tt.key),Q=v(Tt,Q,ht),Et===null?Je=Tt:Et.sibling=Tt,Et=Tt);return e&&Ye.forEach(function(K5){return t(ne,K5)}),wt&&Sn(ne,ht),Je}function Ht(ne,Q,oe,we){if(typeof oe=="object"&&oe!==null&&oe.type===_&&oe.key===null&&(oe=oe.props.children),typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case w:e:{for(var Je=oe.key;Q!==null;){if(Q.key===Je){if(Je=oe.type,Je===_){if(Q.tag===7){r(ne,Q.sibling),we=f(Q,oe.props.children),we.return=ne,ne=we;break e}}else if(Q.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===$&&Zr(Je)===Q.type){r(ne,Q.sibling),we=f(Q,oe.props),Vl(we,oe),we.return=ne,ne=we;break e}r(ne,Q);break}else t(ne,Q);Q=Q.sibling}oe.type===_?(we=Lr(oe.props.children,ne.mode,we,oe.key),we.return=ne,ne=we):(we=ec(oe.type,oe.key,oe.props,null,ne.mode,we),Vl(we,oe),we.return=ne,ne=we)}return E(ne);case z:e:{for(Je=oe.key;Q!==null;){if(Q.key===Je)if(Q.tag===4&&Q.stateNode.containerInfo===oe.containerInfo&&Q.stateNode.implementation===oe.implementation){r(ne,Q.sibling),we=f(Q,oe.children||[]),we.return=ne,ne=we;break e}else{r(ne,Q);break}else t(ne,Q);Q=Q.sibling}we=Au(oe,ne.mode,we),we.return=ne,ne=we}return E(ne);case $:return oe=Zr(oe),Ht(ne,Q,oe,we)}if(ze(oe))return Ue(ne,Q,oe,we);if(V(oe)){if(Je=V(oe),typeof Je!="function")throw Error(i(150));return oe=Je.call(oe),et(ne,Q,oe,we)}if(typeof oe.then=="function")return Ht(ne,Q,lc(oe),we);if(oe.$$typeof===R)return Ht(ne,Q,ic(ne,oe),we);oc(ne,oe)}return typeof oe=="string"&&oe!==""||typeof oe=="number"||typeof oe=="bigint"?(oe=""+oe,Q!==null&&Q.tag===6?(r(ne,Q.sibling),we=f(Q,oe),we.return=ne,ne=we):(r(ne,Q),we=Cu(oe,ne.mode,we),we.return=ne,ne=we),E(ne)):r(ne,Q)}return function(ne,Q,oe,we){try{$l=0;var Je=Ht(ne,Q,oe,we);return Ns=null,Je}catch(Ye){if(Ye===js||Ye===rc)throw Ye;var Et=ri(29,Ye,null,ne.mode);return Et.lanes=we,Et.return=ne,Et}finally{}}}var Yr=hp(!0),fp=hp(!1),Jn=!1;function Uu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Iu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function er(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function tr(e,t,r){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(At&2)!==0){var f=o.pending;return f===null?t.next=t:(t.next=f.next,f.next=t),o.pending=t,t=Jo(e),Q0(e,null,r),t}return Wo(e,o,t,r),Jo(e)}function Ll(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194048)!==0)){var o=t.lanes;o&=e.pendingLanes,r|=o,t.lanes=r,He(e,r)}}function Pu(e,t){var r=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var f=null,v=null;if(r=r.firstBaseUpdate,r!==null){do{var E={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};v===null?f=v=E:v=v.next=E,r=r.next}while(r!==null);v===null?f=v=t:v=v.next=t}else f=v=t;r={baseState:o.baseState,firstBaseUpdate:f,lastBaseUpdate:v,shared:o.shared,callbacks:o.callbacks},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}var Zu=!1;function Bl(){if(Zu){var e=ks;if(e!==null)throw e}}function Ul(e,t,r,o){Zu=!1;var f=e.updateQueue;Jn=!1;var v=f.firstBaseUpdate,E=f.lastBaseUpdate,N=f.shared.pending;if(N!==null){f.shared.pending=null;var Y=N,de=Y.next;Y.next=null,E===null?v=de:E.next=de,E=Y;var ye=e.alternate;ye!==null&&(ye=ye.updateQueue,N=ye.lastBaseUpdate,N!==E&&(N===null?ye.firstBaseUpdate=de:N.next=de,ye.lastBaseUpdate=Y))}if(v!==null){var Se=f.baseState;E=0,ye=de=Y=null,N=v;do{var fe=N.lane&-536870913,be=fe!==N.lane;if(be?(_t&fe)===fe:(o&fe)===fe){fe!==0&&fe===As&&(Zu=!0),ye!==null&&(ye=ye.next={lane:0,tag:N.tag,payload:N.payload,callback:null,next:null});e:{var Ue=e,et=N;fe=t;var Ht=r;switch(et.tag){case 1:if(Ue=et.payload,typeof Ue=="function"){Se=Ue.call(Ht,Se,fe);break e}Se=Ue;break e;case 3:Ue.flags=Ue.flags&-65537|128;case 0:if(Ue=et.payload,fe=typeof Ue=="function"?Ue.call(Ht,Se,fe):Ue,fe==null)break e;Se=u({},Se,fe);break e;case 2:Jn=!0}}fe=N.callback,fe!==null&&(e.flags|=64,be&&(e.flags|=8192),be=f.callbacks,be===null?f.callbacks=[fe]:be.push(fe))}else be={lane:fe,tag:N.tag,payload:N.payload,callback:N.callback,next:null},ye===null?(de=ye=be,Y=Se):ye=ye.next=be,E|=fe;if(N=N.next,N===null){if(N=f.shared.pending,N===null)break;be=N,N=be.next,be.next=null,f.lastBaseUpdate=be,f.shared.pending=null}}while(!0);ye===null&&(Y=Se),f.baseState=Y,f.firstBaseUpdate=de,f.lastBaseUpdate=ye,v===null&&(f.shared.lanes=0),sr|=E,e.lanes=E,e.memoizedState=Se}}function mp(e,t){if(typeof e!="function")throw Error(i(191,e));e.call(t)}function pp(e,t){var r=e.callbacks;if(r!==null)for(e.callbacks=null,e=0;e<r.length;e++)mp(r[e],t)}var Ds=j(null),cc=j(0);function gp(e,t){e=Hn,ee(cc,e),ee(Ds,t),Hn=e|t.baseLanes}function qu(){ee(cc,Hn),ee(Ds,Ds.current)}function Yu(){Hn=cc.current,G(Ds),G(cc)}var si=j(null),Ni=null;function ar(e){var t=e.alternate;ee(oa,oa.current&1),ee(si,e),Ni===null&&(t===null||Ds.current!==null||t.memoizedState!==null)&&(Ni=e)}function Fu(e){ee(oa,oa.current),ee(si,e),Ni===null&&(Ni=e)}function vp(e){e.tag===22?(ee(oa,oa.current),ee(si,e),Ni===null&&(Ni=e)):ir()}function ir(){ee(oa,oa.current),ee(si,si.current)}function li(e){G(si),Ni===e&&(Ni=null),G(oa)}var oa=j(0);function dc(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||Jh(r)||ef(r)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Tn=0,ut=null,Dt=null,va=null,uc=!1,Os=!1,Fr=!1,hc=0,Il=0,Hs=null,Uy=0;function aa(){throw Error(i(321))}function Gu(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!ni(e[r],t[r]))return!1;return!0}function Xu(e,t,r,o,f,v){return Tn=v,ut=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,k.H=e===null||e.memoizedState===null?e1:dh,Fr=!1,v=r(o,f),Fr=!1,Os&&(v=yp(t,r,o,f)),bp(e),v}function bp(e){k.H=ql;var t=Dt!==null&&Dt.next!==null;if(Tn=0,va=Dt=ut=null,uc=!1,Il=0,Hs=null,t)throw Error(i(300));e===null||ba||(e=e.dependencies,e!==null&&ac(e)&&(ba=!0))}function yp(e,t,r,o){ut=e;var f=0;do{if(Os&&(Hs=null),Il=0,Os=!1,25<=f)throw Error(i(301));if(f+=1,va=Dt=null,e.updateQueue!=null){var v=e.updateQueue;v.lastEffect=null,v.events=null,v.stores=null,v.memoCache!=null&&(v.memoCache.index=0)}k.H=t1,v=t(r,o)}while(Os);return v}function Iy(){var e=k.H,t=e.useState()[0];return t=typeof t.then=="function"?Pl(t):t,e=e.useState()[0],(Dt!==null?Dt.memoizedState:null)!==e&&(ut.flags|=1024),t}function Qu(){var e=hc!==0;return hc=0,e}function Ku(e,t,r){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r}function Wu(e){if(uc){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}uc=!1}Tn=0,va=Dt=ut=null,Os=!1,Il=hc=0,Hs=null}function qa(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return va===null?ut.memoizedState=va=e:va=va.next=e,va}function ca(){if(Dt===null){var e=ut.alternate;e=e!==null?e.memoizedState:null}else e=Dt.next;var t=va===null?ut.memoizedState:va.next;if(t!==null)va=t,Dt=e;else{if(e===null)throw ut.alternate===null?Error(i(467)):Error(i(310));Dt=e,e={memoizedState:Dt.memoizedState,baseState:Dt.baseState,baseQueue:Dt.baseQueue,queue:Dt.queue,next:null},va===null?ut.memoizedState=va=e:va=va.next=e}return va}function fc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Pl(e){var t=Il;return Il+=1,Hs===null&&(Hs=[]),e=cp(Hs,e,t),t=ut,(va===null?t.memoizedState:va.next)===null&&(t=t.alternate,k.H=t===null||t.memoizedState===null?e1:dh),e}function mc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Pl(e);if(e.$$typeof===R)return Ha(e)}throw Error(i(438,String(e)))}function Ju(e){var t=null,r=ut.updateQueue;if(r!==null&&(t=r.memoCache),t==null){var o=ut.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(t={data:o.data.map(function(f){return f.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),r===null&&(r=fc(),ut.updateQueue=r),r.memoCache=t,r=t.data[t.index],r===void 0)for(r=t.data[t.index]=Array(e),o=0;o<e;o++)r[o]=he;return t.index++,r}function Cn(e,t){return typeof t=="function"?t(e):t}function pc(e){var t=ca();return eh(t,Dt,e)}function eh(e,t,r){var o=e.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=r;var f=e.baseQueue,v=o.pending;if(v!==null){if(f!==null){var E=f.next;f.next=v.next,v.next=E}t.baseQueue=f=v,o.pending=null}if(v=e.baseState,f===null)e.memoizedState=v;else{t=f.next;var N=E=null,Y=null,de=t,ye=!1;do{var Se=de.lane&-536870913;if(Se!==de.lane?(_t&Se)===Se:(Tn&Se)===Se){var fe=de.revertLane;if(fe===0)Y!==null&&(Y=Y.next={lane:0,revertLane:0,gesture:null,action:de.action,hasEagerState:de.hasEagerState,eagerState:de.eagerState,next:null}),Se===As&&(ye=!0);else if((Tn&fe)===fe){de=de.next,fe===As&&(ye=!0);continue}else Se={lane:0,revertLane:de.revertLane,gesture:null,action:de.action,hasEagerState:de.hasEagerState,eagerState:de.eagerState,next:null},Y===null?(N=Y=Se,E=v):Y=Y.next=Se,ut.lanes|=fe,sr|=fe;Se=de.action,Fr&&r(v,Se),v=de.hasEagerState?de.eagerState:r(v,Se)}else fe={lane:Se,revertLane:de.revertLane,gesture:de.gesture,action:de.action,hasEagerState:de.hasEagerState,eagerState:de.eagerState,next:null},Y===null?(N=Y=fe,E=v):Y=Y.next=fe,ut.lanes|=Se,sr|=Se;de=de.next}while(de!==null&&de!==t);if(Y===null?E=v:Y.next=N,!ni(v,e.memoizedState)&&(ba=!0,ye&&(r=ks,r!==null)))throw r;e.memoizedState=v,e.baseState=E,e.baseQueue=Y,o.lastRenderedState=v}return f===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function th(e){var t=ca(),r=t.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=e;var o=r.dispatch,f=r.pending,v=t.memoizedState;if(f!==null){r.pending=null;var E=f=f.next;do v=e(v,E.action),E=E.next;while(E!==f);ni(v,t.memoizedState)||(ba=!0),t.memoizedState=v,t.baseQueue===null&&(t.baseState=v),r.lastRenderedState=v}return[v,o]}function _p(e,t,r){var o=ut,f=ca(),v=wt;if(v){if(r===void 0)throw Error(i(407));r=r()}else r=t();var E=!ni((Dt||f).memoizedState,r);if(E&&(f.memoizedState=r,ba=!0),f=f.queue,nh(zp.bind(null,o,f,e),[e]),f.getSnapshot!==t||E||va!==null&&va.memoizedState.tag&1){if(o.flags|=2048,Rs(9,{destroy:void 0},wp.bind(null,o,f,r,t),null),$t===null)throw Error(i(349));v||(Tn&127)!==0||xp(o,t,r)}return r}function xp(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=ut.updateQueue,t===null?(t=fc(),ut.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function wp(e,t,r,o){t.value=r,t.getSnapshot=o,Sp(t)&&Mp(e)}function zp(e,t,r){return r(function(){Sp(t)&&Mp(e)})}function Sp(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!ni(e,r)}catch{return!0}}function Mp(e){var t=Vr(e,2);t!==null&&Ja(t,e,2)}function ah(e){var t=qa();if(typeof e=="function"){var r=e;if(e=r(),Fr){Bt(!0);try{r()}finally{Bt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Cn,lastRenderedState:e},t}function Ep(e,t,r,o){return e.baseState=r,eh(e,Dt,typeof o=="function"?o:Cn)}function Py(e,t,r,o,f){if(bc(e))throw Error(i(485));if(e=t.action,e!==null){var v={payload:f,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){v.listeners.push(E)}};k.T!==null?r(!0):v.isTransition=!1,o(v),r=t.pending,r===null?(v.next=t.pending=v,Tp(t,v)):(v.next=r.next,t.pending=r.next=v)}}function Tp(e,t){var r=t.action,o=t.payload,f=e.state;if(t.isTransition){var v=k.T,E={};k.T=E;try{var N=r(f,o),Y=k.S;Y!==null&&Y(E,N),Cp(e,t,N)}catch(de){ih(e,t,de)}finally{v!==null&&E.types!==null&&(v.types=E.types),k.T=v}}else try{v=r(f,o),Cp(e,t,v)}catch(de){ih(e,t,de)}}function Cp(e,t,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(o){Ap(e,t,o)},function(o){return ih(e,t,o)}):Ap(e,t,r)}function Ap(e,t,r){t.status="fulfilled",t.value=r,kp(t),e.state=r,t=e.pending,t!==null&&(r=t.next,r===t?e.pending=null:(r=r.next,t.next=r,Tp(e,r)))}function ih(e,t,r){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do t.status="rejected",t.reason=r,kp(t),t=t.next;while(t!==o)}e.action=null}function kp(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function jp(e,t){return t}function Np(e,t){if(wt){var r=$t.formState;if(r!==null){e:{var o=ut;if(wt){if(It){t:{for(var f=It,v=ji;f.nodeType!==8;){if(!v){f=null;break t}if(f=Di(f.nextSibling),f===null){f=null;break t}}v=f.data,f=v==="F!"||v==="F"?f:null}if(f){It=Di(f.nextSibling),o=f.data==="F!";break e}}Kn(o)}o=!1}o&&(t=r[0])}}return r=qa(),r.memoizedState=r.baseState=t,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:jp,lastRenderedState:t},r.queue=o,r=Kp.bind(null,ut,o),o.dispatch=r,o=ah(!1),v=ch.bind(null,ut,!1,o.queue),o=qa(),f={state:t,dispatch:null,action:e,pending:null},o.queue=f,r=Py.bind(null,ut,f,v,r),f.dispatch=r,o.memoizedState=e,[t,r,!1]}function Dp(e){var t=ca();return Op(t,Dt,e)}function Op(e,t,r){if(t=eh(e,t,jp)[0],e=pc(Cn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var o=Pl(t)}catch(E){throw E===js?rc:E}else o=t;t=ca();var f=t.queue,v=f.dispatch;return r!==t.memoizedState&&(ut.flags|=2048,Rs(9,{destroy:void 0},Zy.bind(null,f,r),null)),[o,v,e]}function Zy(e,t){e.action=t}function Hp(e){var t=ca(),r=Dt;if(r!==null)return Op(t,r,e);ca(),t=t.memoizedState,r=ca();var o=r.queue.dispatch;return r.memoizedState=e,[t,o,!1]}function Rs(e,t,r,o){return e={tag:e,create:r,deps:o,inst:t,next:null},t=ut.updateQueue,t===null&&(t=fc(),ut.updateQueue=t),r=t.lastEffect,r===null?t.lastEffect=e.next=e:(o=r.next,r.next=e,e.next=o,t.lastEffect=e),e}function Rp(){return ca().memoizedState}function gc(e,t,r,o){var f=qa();ut.flags|=e,f.memoizedState=Rs(1|t,{destroy:void 0},r,o===void 0?null:o)}function vc(e,t,r,o){var f=ca();o=o===void 0?null:o;var v=f.memoizedState.inst;Dt!==null&&o!==null&&Gu(o,Dt.memoizedState.deps)?f.memoizedState=Rs(t,v,r,o):(ut.flags|=e,f.memoizedState=Rs(1|t,v,r,o))}function $p(e,t){gc(8390656,8,e,t)}function nh(e,t){vc(2048,8,e,t)}function qy(e){ut.flags|=4;var t=ut.updateQueue;if(t===null)t=fc(),ut.updateQueue=t,t.events=[e];else{var r=t.events;r===null?t.events=[e]:r.push(e)}}function Vp(e){var t=ca().memoizedState;return qy({ref:t,nextImpl:e}),function(){if((At&2)!==0)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function Lp(e,t){return vc(4,2,e,t)}function Bp(e,t){return vc(4,4,e,t)}function Up(e,t){if(typeof t=="function"){e=e();var r=t(e);return function(){typeof r=="function"?r():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ip(e,t,r){r=r!=null?r.concat([e]):null,vc(4,4,Up.bind(null,t,e),r)}function rh(){}function Pp(e,t){var r=ca();t=t===void 0?null:t;var o=r.memoizedState;return t!==null&&Gu(t,o[1])?o[0]:(r.memoizedState=[e,t],e)}function Zp(e,t){var r=ca();t=t===void 0?null:t;var o=r.memoizedState;if(t!==null&&Gu(t,o[1]))return o[0];if(o=e(),Fr){Bt(!0);try{e()}finally{Bt(!1)}}return r.memoizedState=[o,t],o}function sh(e,t,r){return r===void 0||(Tn&1073741824)!==0&&(_t&261930)===0?e.memoizedState=t:(e.memoizedState=r,e=q1(),ut.lanes|=e,sr|=e,r)}function qp(e,t,r,o){return ni(r,t)?r:Ds.current!==null?(e=sh(e,r,o),ni(e,t)||(ba=!0),e):(Tn&42)===0||(Tn&1073741824)!==0&&(_t&261930)===0?(ba=!0,e.memoizedState=r):(e=q1(),ut.lanes|=e,sr|=e,t)}function Yp(e,t,r,o,f){var v=D.p;D.p=v!==0&&8>v?v:8;var E=k.T,N={};k.T=N,ch(e,!1,t,r);try{var Y=f(),de=k.S;if(de!==null&&de(N,Y),Y!==null&&typeof Y=="object"&&typeof Y.then=="function"){var ye=By(Y,o);Zl(e,t,ye,di(e))}else Zl(e,t,o,di(e))}catch(Se){Zl(e,t,{then:function(){},status:"rejected",reason:Se},di())}finally{D.p=v,E!==null&&N.types!==null&&(E.types=N.types),k.T=E}}function Yy(){}function lh(e,t,r,o){if(e.tag!==5)throw Error(i(476));var f=Fp(e).queue;Yp(e,f,t,P,r===null?Yy:function(){return Gp(e),r(o)})}function Fp(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:P,baseState:P,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Cn,lastRenderedState:P},next:null};var r={};return t.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Cn,lastRenderedState:r},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Gp(e){var t=Fp(e);t.next===null&&(t=e.alternate.memoizedState),Zl(e,t.next.queue,{},di())}function oh(){return Ha(lo)}function Xp(){return ca().memoizedState}function Qp(){return ca().memoizedState}function Fy(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var r=di();e=er(r);var o=tr(t,e,r);o!==null&&(Ja(o,t,r),Ll(o,t,r)),t={cache:$u()},e.payload=t;return}t=t.return}}function Gy(e,t,r){var o=di();r={lane:o,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},bc(e)?Wp(t,r):(r=Eu(e,t,r,o),r!==null&&(Ja(r,e,o),Jp(r,t,o)))}function Kp(e,t,r){var o=di();Zl(e,t,r,o)}function Zl(e,t,r,o){var f={lane:o,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(bc(e))Wp(t,f);else{var v=e.alternate;if(e.lanes===0&&(v===null||v.lanes===0)&&(v=t.lastRenderedReducer,v!==null))try{var E=t.lastRenderedState,N=v(E,r);if(f.hasEagerState=!0,f.eagerState=N,ni(N,E))return Wo(e,t,f,0),$t===null&&Ko(),!1}catch{}finally{}if(r=Eu(e,t,f,o),r!==null)return Ja(r,e,o),Jp(r,t,o),!0}return!1}function ch(e,t,r,o){if(o={lane:2,revertLane:Uh(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},bc(e)){if(t)throw Error(i(479))}else t=Eu(e,r,o,2),t!==null&&Ja(t,e,2)}function bc(e){var t=e.alternate;return e===ut||t!==null&&t===ut}function Wp(e,t){Os=uc=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Jp(e,t,r){if((r&4194048)!==0){var o=t.lanes;o&=e.pendingLanes,r|=o,t.lanes=r,He(e,r)}}var ql={readContext:Ha,use:mc,useCallback:aa,useContext:aa,useEffect:aa,useImperativeHandle:aa,useLayoutEffect:aa,useInsertionEffect:aa,useMemo:aa,useReducer:aa,useRef:aa,useState:aa,useDebugValue:aa,useDeferredValue:aa,useTransition:aa,useSyncExternalStore:aa,useId:aa,useHostTransitionStatus:aa,useFormState:aa,useActionState:aa,useOptimistic:aa,useMemoCache:aa,useCacheRefresh:aa};ql.useEffectEvent=aa;var e1={readContext:Ha,use:mc,useCallback:function(e,t){return qa().memoizedState=[e,t===void 0?null:t],e},useContext:Ha,useEffect:$p,useImperativeHandle:function(e,t,r){r=r!=null?r.concat([e]):null,gc(4194308,4,Up.bind(null,t,e),r)},useLayoutEffect:function(e,t){return gc(4194308,4,e,t)},useInsertionEffect:function(e,t){gc(4,2,e,t)},useMemo:function(e,t){var r=qa();t=t===void 0?null:t;var o=e();if(Fr){Bt(!0);try{e()}finally{Bt(!1)}}return r.memoizedState=[o,t],o},useReducer:function(e,t,r){var o=qa();if(r!==void 0){var f=r(t);if(Fr){Bt(!0);try{r(t)}finally{Bt(!1)}}}else f=t;return o.memoizedState=o.baseState=f,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:f},o.queue=e,e=e.dispatch=Gy.bind(null,ut,e),[o.memoizedState,e]},useRef:function(e){var t=qa();return e={current:e},t.memoizedState=e},useState:function(e){e=ah(e);var t=e.queue,r=Kp.bind(null,ut,t);return t.dispatch=r,[e.memoizedState,r]},useDebugValue:rh,useDeferredValue:function(e,t){var r=qa();return sh(r,e,t)},useTransition:function(){var e=ah(!1);return e=Yp.bind(null,ut,e.queue,!0,!1),qa().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,r){var o=ut,f=qa();if(wt){if(r===void 0)throw Error(i(407));r=r()}else{if(r=t(),$t===null)throw Error(i(349));(_t&127)!==0||xp(o,t,r)}f.memoizedState=r;var v={value:r,getSnapshot:t};return f.queue=v,$p(zp.bind(null,o,v,e),[e]),o.flags|=2048,Rs(9,{destroy:void 0},wp.bind(null,o,v,r,t),null),r},useId:function(){var e=qa(),t=$t.identifierPrefix;if(wt){var r=nn,o=an;r=(o&~(1<<32-Ct(o)-1)).toString(32)+r,t="_"+t+"R_"+r,r=hc++,0<r&&(t+="H"+r.toString(32)),t+="_"}else r=Uy++,t="_"+t+"r_"+r.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:oh,useFormState:Np,useActionState:Np,useOptimistic:function(e){var t=qa();t.memoizedState=t.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=r,t=ch.bind(null,ut,!0,r),r.dispatch=t,[e,t]},useMemoCache:Ju,useCacheRefresh:function(){return qa().memoizedState=Fy.bind(null,ut)},useEffectEvent:function(e){var t=qa(),r={impl:e};return t.memoizedState=r,function(){if((At&2)!==0)throw Error(i(440));return r.impl.apply(void 0,arguments)}}},dh={readContext:Ha,use:mc,useCallback:Pp,useContext:Ha,useEffect:nh,useImperativeHandle:Ip,useInsertionEffect:Lp,useLayoutEffect:Bp,useMemo:Zp,useReducer:pc,useRef:Rp,useState:function(){return pc(Cn)},useDebugValue:rh,useDeferredValue:function(e,t){var r=ca();return qp(r,Dt.memoizedState,e,t)},useTransition:function(){var e=pc(Cn)[0],t=ca().memoizedState;return[typeof e=="boolean"?e:Pl(e),t]},useSyncExternalStore:_p,useId:Xp,useHostTransitionStatus:oh,useFormState:Dp,useActionState:Dp,useOptimistic:function(e,t){var r=ca();return Ep(r,Dt,e,t)},useMemoCache:Ju,useCacheRefresh:Qp};dh.useEffectEvent=Vp;var t1={readContext:Ha,use:mc,useCallback:Pp,useContext:Ha,useEffect:nh,useImperativeHandle:Ip,useInsertionEffect:Lp,useLayoutEffect:Bp,useMemo:Zp,useReducer:th,useRef:Rp,useState:function(){return th(Cn)},useDebugValue:rh,useDeferredValue:function(e,t){var r=ca();return Dt===null?sh(r,e,t):qp(r,Dt.memoizedState,e,t)},useTransition:function(){var e=th(Cn)[0],t=ca().memoizedState;return[typeof e=="boolean"?e:Pl(e),t]},useSyncExternalStore:_p,useId:Xp,useHostTransitionStatus:oh,useFormState:Hp,useActionState:Hp,useOptimistic:function(e,t){var r=ca();return Dt!==null?Ep(r,Dt,e,t):(r.baseState=e,[e,r.queue.dispatch])},useMemoCache:Ju,useCacheRefresh:Qp};t1.useEffectEvent=Vp;function uh(e,t,r,o){t=e.memoizedState,r=r(o,t),r=r==null?t:u({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var hh={enqueueSetState:function(e,t,r){e=e._reactInternals;var o=di(),f=er(o);f.payload=t,r!=null&&(f.callback=r),t=tr(e,f,o),t!==null&&(Ja(t,e,o),Ll(t,e,o))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var o=di(),f=er(o);f.tag=1,f.payload=t,r!=null&&(f.callback=r),t=tr(e,f,o),t!==null&&(Ja(t,e,o),Ll(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=di(),o=er(r);o.tag=2,t!=null&&(o.callback=t),t=tr(e,o,r),t!==null&&(Ja(t,e,r),Ll(t,e,r))}};function a1(e,t,r,o,f,v,E){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,v,E):t.prototype&&t.prototype.isPureReactComponent?!jl(r,o)||!jl(f,v):!0}function i1(e,t,r,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,o),t.state!==e&&hh.enqueueReplaceState(t,t.state,null)}function Gr(e,t){var r=t;if("ref"in t){r={};for(var o in t)o!=="ref"&&(r[o]=t[o])}if(e=e.defaultProps){r===t&&(r=u({},r));for(var f in e)r[f]===void 0&&(r[f]=e[f])}return r}function n1(e){Qo(e)}function r1(e){console.error(e)}function s1(e){Qo(e)}function yc(e,t){try{var r=e.onUncaughtError;r(t.value,{componentStack:t.stack})}catch(o){setTimeout(function(){throw o})}}function l1(e,t,r){try{var o=e.onCaughtError;o(r.value,{componentStack:r.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function fh(e,t,r){return r=er(r),r.tag=3,r.payload={element:null},r.callback=function(){yc(e,t)},r}function o1(e){return e=er(e),e.tag=3,e}function c1(e,t,r,o){var f=r.type.getDerivedStateFromError;if(typeof f=="function"){var v=o.value;e.payload=function(){return f(v)},e.callback=function(){l1(t,r,o)}}var E=r.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(e.callback=function(){l1(t,r,o),typeof f!="function"&&(lr===null?lr=new Set([this]):lr.add(this));var N=o.stack;this.componentDidCatch(o.value,{componentStack:N!==null?N:""})})}function Xy(e,t,r,o,f){if(r.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(t=r.alternate,t!==null&&Cs(t,r,f,!0),r=si.current,r!==null){switch(r.tag){case 31:case 13:return Ni===null?jc():r.alternate===null&&ia===0&&(ia=3),r.flags&=-257,r.flags|=65536,r.lanes=f,o===sc?r.flags|=16384:(t=r.updateQueue,t===null?r.updateQueue=new Set([o]):t.add(o),Vh(e,o,f)),!1;case 22:return r.flags|=65536,o===sc?r.flags|=16384:(t=r.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([o])},r.updateQueue=t):(r=t.retryQueue,r===null?t.retryQueue=new Set([o]):r.add(o)),Vh(e,o,f)),!1}throw Error(i(435,r.tag))}return Vh(e,o,f),jc(),!1}if(wt)return t=si.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=f,o!==Nu&&(e=Error(i(422),{cause:o}),Ol(Ci(e,r)))):(o!==Nu&&(t=Error(i(423),{cause:o}),Ol(Ci(t,r))),e=e.current.alternate,e.flags|=65536,f&=-f,e.lanes|=f,o=Ci(o,r),f=fh(e.stateNode,o,f),Pu(e,f),ia!==4&&(ia=2)),!1;var v=Error(i(520),{cause:o});if(v=Ci(v,r),Jl===null?Jl=[v]:Jl.push(v),ia!==4&&(ia=2),t===null)return!0;o=Ci(o,r),r=t;do{switch(r.tag){case 3:return r.flags|=65536,e=f&-f,r.lanes|=e,e=fh(r.stateNode,o,e),Pu(r,e),!1;case 1:if(t=r.type,v=r.stateNode,(r.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(lr===null||!lr.has(v))))return r.flags|=65536,f&=-f,r.lanes|=f,f=o1(f),c1(f,e,r,o),Pu(r,f),!1}r=r.return}while(r!==null);return!1}var mh=Error(i(461)),ba=!1;function Ra(e,t,r,o){t.child=e===null?fp(t,null,r,o):Yr(t,e.child,r,o)}function d1(e,t,r,o,f){r=r.render;var v=t.ref;if("ref"in o){var E={};for(var N in o)N!=="ref"&&(E[N]=o[N])}else E=o;return Ir(t),o=Xu(e,t,r,E,v,f),N=Qu(),e!==null&&!ba?(Ku(e,t,f),An(e,t,f)):(wt&&N&&ku(t),t.flags|=1,Ra(e,t,o,f),t.child)}function u1(e,t,r,o,f){if(e===null){var v=r.type;return typeof v=="function"&&!Tu(v)&&v.defaultProps===void 0&&r.compare===null?(t.tag=15,t.type=v,h1(e,t,v,o,f)):(e=ec(r.type,null,o,t,t.mode,f),e.ref=t.ref,e.return=t,t.child=e)}if(v=e.child,!wh(e,f)){var E=v.memoizedProps;if(r=r.compare,r=r!==null?r:jl,r(E,o)&&e.ref===t.ref)return An(e,t,f)}return t.flags|=1,e=zn(v,o),e.ref=t.ref,e.return=t,t.child=e}function h1(e,t,r,o,f){if(e!==null){var v=e.memoizedProps;if(jl(v,o)&&e.ref===t.ref)if(ba=!1,t.pendingProps=o=v,wh(e,f))(e.flags&131072)!==0&&(ba=!0);else return t.lanes=e.lanes,An(e,t,f)}return ph(e,t,r,o,f)}function f1(e,t,r,o){var f=o.children,v=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((t.flags&128)!==0){if(v=v!==null?v.baseLanes|r:r,e!==null){for(o=t.child=e.child,f=0;o!==null;)f=f|o.lanes|o.childLanes,o=o.sibling;o=f&~v}else o=0,t.child=null;return m1(e,t,v,r,o)}if((r&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&nc(t,v!==null?v.cachePool:null),v!==null?gp(t,v):qu(),vp(t);else return o=t.lanes=536870912,m1(e,t,v!==null?v.baseLanes|r:r,r,o)}else v!==null?(nc(t,v.cachePool),gp(t,v),ir(),t.memoizedState=null):(e!==null&&nc(t,null),qu(),ir());return Ra(e,t,f,r),t.child}function Yl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function m1(e,t,r,o,f){var v=Lu();return v=v===null?null:{parent:ga._currentValue,pool:v},t.memoizedState={baseLanes:r,cachePool:v},e!==null&&nc(t,null),qu(),vp(t),e!==null&&Cs(e,t,o,!0),t.childLanes=f,null}function _c(e,t){return t=wc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function p1(e,t,r){return Yr(t,e.child,null,r),e=_c(t,t.pendingProps),e.flags|=2,li(t),t.memoizedState=null,e}function Qy(e,t,r){var o=t.pendingProps,f=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(wt){if(o.mode==="hidden")return e=_c(t,o),t.lanes=536870912,Yl(null,e);if(Fu(t),(e=It)?(e=Tg(e,ji),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Xn!==null?{id:an,overflow:nn}:null,retryLane:536870912,hydrationErrors:null},r=W0(e),r.return=t,t.child=r,Oa=t,It=null)):e=null,e===null)throw Kn(t);return t.lanes=536870912,null}return _c(t,o)}var v=e.memoizedState;if(v!==null){var E=v.dehydrated;if(Fu(t),f)if(t.flags&256)t.flags&=-257,t=p1(e,t,r);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(ba||Cs(e,t,r,!1),f=(r&e.childLanes)!==0,ba||f){if(o=$t,o!==null&&(E=ve(o,r),E!==0&&E!==v.retryLane))throw v.retryLane=E,Vr(e,E),Ja(o,e,E),mh;jc(),t=p1(e,t,r)}else e=v.treeContext,It=Di(E.nextSibling),Oa=t,wt=!0,Qn=null,ji=!1,e!==null&&tp(t,e),t=_c(t,o),t.flags|=4096;return t}return e=zn(e.child,{mode:o.mode,children:o.children}),e.ref=t.ref,t.child=e,e.return=t,e}function xc(e,t){var r=t.ref;if(r===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(i(284));(e===null||e.ref!==r)&&(t.flags|=4194816)}}function ph(e,t,r,o,f){return Ir(t),r=Xu(e,t,r,o,void 0,f),o=Qu(),e!==null&&!ba?(Ku(e,t,f),An(e,t,f)):(wt&&o&&ku(t),t.flags|=1,Ra(e,t,r,f),t.child)}function g1(e,t,r,o,f,v){return Ir(t),t.updateQueue=null,r=yp(t,o,r,f),bp(e),o=Qu(),e!==null&&!ba?(Ku(e,t,v),An(e,t,v)):(wt&&o&&ku(t),t.flags|=1,Ra(e,t,r,v),t.child)}function v1(e,t,r,o,f){if(Ir(t),t.stateNode===null){var v=Ss,E=r.contextType;typeof E=="object"&&E!==null&&(v=Ha(E)),v=new r(o,v),t.memoizedState=v.state!==null&&v.state!==void 0?v.state:null,v.updater=hh,t.stateNode=v,v._reactInternals=t,v=t.stateNode,v.props=o,v.state=t.memoizedState,v.refs={},Uu(t),E=r.contextType,v.context=typeof E=="object"&&E!==null?Ha(E):Ss,v.state=t.memoizedState,E=r.getDerivedStateFromProps,typeof E=="function"&&(uh(t,r,E,o),v.state=t.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof v.getSnapshotBeforeUpdate=="function"||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(E=v.state,typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount(),E!==v.state&&hh.enqueueReplaceState(v,v.state,null),Ul(t,o,v,f),Bl(),v.state=t.memoizedState),typeof v.componentDidMount=="function"&&(t.flags|=4194308),o=!0}else if(e===null){v=t.stateNode;var N=t.memoizedProps,Y=Gr(r,N);v.props=Y;var de=v.context,ye=r.contextType;E=Ss,typeof ye=="object"&&ye!==null&&(E=Ha(ye));var Se=r.getDerivedStateFromProps;ye=typeof Se=="function"||typeof v.getSnapshotBeforeUpdate=="function",N=t.pendingProps!==N,ye||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(N||de!==E)&&i1(t,v,o,E),Jn=!1;var fe=t.memoizedState;v.state=fe,Ul(t,o,v,f),Bl(),de=t.memoizedState,N||fe!==de||Jn?(typeof Se=="function"&&(uh(t,r,Se,o),de=t.memoizedState),(Y=Jn||a1(t,r,Y,o,fe,de,E))?(ye||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(t.flags|=4194308)):(typeof v.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=de),v.props=o,v.state=de,v.context=E,o=Y):(typeof v.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{v=t.stateNode,Iu(e,t),E=t.memoizedProps,ye=Gr(r,E),v.props=ye,Se=t.pendingProps,fe=v.context,de=r.contextType,Y=Ss,typeof de=="object"&&de!==null&&(Y=Ha(de)),N=r.getDerivedStateFromProps,(de=typeof N=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(E!==Se||fe!==Y)&&i1(t,v,o,Y),Jn=!1,fe=t.memoizedState,v.state=fe,Ul(t,o,v,f),Bl();var be=t.memoizedState;E!==Se||fe!==be||Jn||e!==null&&e.dependencies!==null&&ac(e.dependencies)?(typeof N=="function"&&(uh(t,r,N,o),be=t.memoizedState),(ye=Jn||a1(t,r,ye,o,fe,be,Y)||e!==null&&e.dependencies!==null&&ac(e.dependencies))?(de||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(o,be,Y),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(o,be,Y)),typeof v.componentDidUpdate=="function"&&(t.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof v.componentDidUpdate!="function"||E===e.memoizedProps&&fe===e.memoizedState||(t.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&fe===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=be),v.props=o,v.state=be,v.context=Y,o=ye):(typeof v.componentDidUpdate!="function"||E===e.memoizedProps&&fe===e.memoizedState||(t.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&fe===e.memoizedState||(t.flags|=1024),o=!1)}return v=o,xc(e,t),o=(t.flags&128)!==0,v||o?(v=t.stateNode,r=o&&typeof r.getDerivedStateFromError!="function"?null:v.render(),t.flags|=1,e!==null&&o?(t.child=Yr(t,e.child,null,f),t.child=Yr(t,null,r,f)):Ra(e,t,r,f),t.memoizedState=v.state,e=t.child):e=An(e,t,f),e}function b1(e,t,r,o){return Br(),t.flags|=256,Ra(e,t,r,o),t.child}var gh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function vh(e){return{baseLanes:e,cachePool:lp()}}function bh(e,t,r){return e=e!==null?e.childLanes&~r:0,t&&(e|=ci),e}function y1(e,t,r){var o=t.pendingProps,f=!1,v=(t.flags&128)!==0,E;if((E=v)||(E=e!==null&&e.memoizedState===null?!1:(oa.current&2)!==0),E&&(f=!0,t.flags&=-129),E=(t.flags&32)!==0,t.flags&=-33,e===null){if(wt){if(f?ar(t):ir(),(e=It)?(e=Tg(e,ji),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Xn!==null?{id:an,overflow:nn}:null,retryLane:536870912,hydrationErrors:null},r=W0(e),r.return=t,t.child=r,Oa=t,It=null)):e=null,e===null)throw Kn(t);return ef(e)?t.lanes=32:t.lanes=536870912,null}var N=o.children;return o=o.fallback,f?(ir(),f=t.mode,N=wc({mode:"hidden",children:N},f),o=Lr(o,f,r,null),N.return=t,o.return=t,N.sibling=o,t.child=N,o=t.child,o.memoizedState=vh(r),o.childLanes=bh(e,E,r),t.memoizedState=gh,Yl(null,o)):(ar(t),yh(t,N))}var Y=e.memoizedState;if(Y!==null&&(N=Y.dehydrated,N!==null)){if(v)t.flags&256?(ar(t),t.flags&=-257,t=_h(e,t,r)):t.memoizedState!==null?(ir(),t.child=e.child,t.flags|=128,t=null):(ir(),N=o.fallback,f=t.mode,o=wc({mode:"visible",children:o.children},f),N=Lr(N,f,r,null),N.flags|=2,o.return=t,N.return=t,o.sibling=N,t.child=o,Yr(t,e.child,null,r),o=t.child,o.memoizedState=vh(r),o.childLanes=bh(e,E,r),t.memoizedState=gh,t=Yl(null,o));else if(ar(t),ef(N)){if(E=N.nextSibling&&N.nextSibling.dataset,E)var de=E.dgst;E=de,o=Error(i(419)),o.stack="",o.digest=E,Ol({value:o,source:null,stack:null}),t=_h(e,t,r)}else if(ba||Cs(e,t,r,!1),E=(r&e.childLanes)!==0,ba||E){if(E=$t,E!==null&&(o=ve(E,r),o!==0&&o!==Y.retryLane))throw Y.retryLane=o,Vr(e,o),Ja(E,e,o),mh;Jh(N)||jc(),t=_h(e,t,r)}else Jh(N)?(t.flags|=192,t.child=e.child,t=null):(e=Y.treeContext,It=Di(N.nextSibling),Oa=t,wt=!0,Qn=null,ji=!1,e!==null&&tp(t,e),t=yh(t,o.children),t.flags|=4096);return t}return f?(ir(),N=o.fallback,f=t.mode,Y=e.child,de=Y.sibling,o=zn(Y,{mode:"hidden",children:o.children}),o.subtreeFlags=Y.subtreeFlags&65011712,de!==null?N=zn(de,N):(N=Lr(N,f,r,null),N.flags|=2),N.return=t,o.return=t,o.sibling=N,t.child=o,Yl(null,o),o=t.child,N=e.child.memoizedState,N===null?N=vh(r):(f=N.cachePool,f!==null?(Y=ga._currentValue,f=f.parent!==Y?{parent:Y,pool:Y}:f):f=lp(),N={baseLanes:N.baseLanes|r,cachePool:f}),o.memoizedState=N,o.childLanes=bh(e,E,r),t.memoizedState=gh,Yl(e.child,o)):(ar(t),r=e.child,e=r.sibling,r=zn(r,{mode:"visible",children:o.children}),r.return=t,r.sibling=null,e!==null&&(E=t.deletions,E===null?(t.deletions=[e],t.flags|=16):E.push(e)),t.child=r,t.memoizedState=null,r)}function yh(e,t){return t=wc({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function wc(e,t){return e=ri(22,e,null,t),e.lanes=0,e}function _h(e,t,r){return Yr(t,e.child,null,r),e=yh(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function _1(e,t,r){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),Hu(e.return,t,r)}function xh(e,t,r,o,f,v){var E=e.memoizedState;E===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:f,treeForkCount:v}:(E.isBackwards=t,E.rendering=null,E.renderingStartTime=0,E.last=o,E.tail=r,E.tailMode=f,E.treeForkCount=v)}function x1(e,t,r){var o=t.pendingProps,f=o.revealOrder,v=o.tail;o=o.children;var E=oa.current,N=(E&2)!==0;if(N?(E=E&1|2,t.flags|=128):E&=1,ee(oa,E),Ra(e,t,o,r),o=wt?Dl:0,!N&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&_1(e,r,t);else if(e.tag===19)_1(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(f){case"forwards":for(r=t.child,f=null;r!==null;)e=r.alternate,e!==null&&dc(e)===null&&(f=r),r=r.sibling;r=f,r===null?(f=t.child,t.child=null):(f=r.sibling,r.sibling=null),xh(t,!1,f,r,v,o);break;case"backwards":case"unstable_legacy-backwards":for(r=null,f=t.child,t.child=null;f!==null;){if(e=f.alternate,e!==null&&dc(e)===null){t.child=f;break}e=f.sibling,f.sibling=r,r=f,f=e}xh(t,!0,r,null,v,o);break;case"together":xh(t,!1,null,null,void 0,o);break;default:t.memoizedState=null}return t.child}function An(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),sr|=t.lanes,(r&t.childLanes)===0)if(e!==null){if(Cs(e,t,r,!1),(r&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,r=zn(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=zn(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function wh(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&ac(e)))}function Ky(e,t,r){switch(t.tag){case 3:J(t,t.stateNode.containerInfo),Wn(t,ga,e.memoizedState.cache),Br();break;case 27:case 5:Ee(t);break;case 4:J(t,t.stateNode.containerInfo);break;case 10:Wn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Fu(t),null;break;case 13:var o=t.memoizedState;if(o!==null)return o.dehydrated!==null?(ar(t),t.flags|=128,null):(r&t.child.childLanes)!==0?y1(e,t,r):(ar(t),e=An(e,t,r),e!==null?e.sibling:null);ar(t);break;case 19:var f=(e.flags&128)!==0;if(o=(r&t.childLanes)!==0,o||(Cs(e,t,r,!1),o=(r&t.childLanes)!==0),f){if(o)return x1(e,t,r);t.flags|=128}if(f=t.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),ee(oa,oa.current),o)break;return null;case 22:return t.lanes=0,f1(e,t,r,t.pendingProps);case 24:Wn(t,ga,e.memoizedState.cache)}return An(e,t,r)}function w1(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps)ba=!0;else{if(!wh(e,r)&&(t.flags&128)===0)return ba=!1,Ky(e,t,r);ba=(e.flags&131072)!==0}else ba=!1,wt&&(t.flags&1048576)!==0&&ep(t,Dl,t.index);switch(t.lanes=0,t.tag){case 16:e:{var o=t.pendingProps;if(e=Zr(t.elementType),t.type=e,typeof e=="function")Tu(e)?(o=Gr(e,o),t.tag=1,t=v1(null,t,e,o,r)):(t.tag=0,t=ph(null,t,e,o,r));else{if(e!=null){var f=e.$$typeof;if(f===C){t.tag=11,t=d1(null,t,e,o,r);break e}else if(f===H){t.tag=14,t=u1(null,t,e,o,r);break e}}throw t=W(e)||e,Error(i(306,t,""))}}return t;case 0:return ph(e,t,t.type,t.pendingProps,r);case 1:return o=t.type,f=Gr(o,t.pendingProps),v1(e,t,o,f,r);case 3:e:{if(J(t,t.stateNode.containerInfo),e===null)throw Error(i(387));o=t.pendingProps;var v=t.memoizedState;f=v.element,Iu(e,t),Ul(t,o,null,r);var E=t.memoizedState;if(o=E.cache,Wn(t,ga,o),o!==v.cache&&Ru(t,[ga],r,!0),Bl(),o=E.element,v.isDehydrated)if(v={element:o,isDehydrated:!1,cache:E.cache},t.updateQueue.baseState=v,t.memoizedState=v,t.flags&256){t=b1(e,t,o,r);break e}else if(o!==f){f=Ci(Error(i(424)),t),Ol(f),t=b1(e,t,o,r);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(It=Di(e.firstChild),Oa=t,wt=!0,Qn=null,ji=!0,r=fp(t,null,o,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(Br(),o===f){t=An(e,t,r);break e}Ra(e,t,o,r)}t=t.child}return t;case 26:return xc(e,t),e===null?(r=Dg(t.type,null,t.pendingProps,null))?t.memoizedState=r:wt||(r=t.type,e=t.pendingProps,o=Vc(se.current).createElement(r),o[Wt]=t,o[pa]=e,$a(o,r,e),Aa(o),t.stateNode=o):t.memoizedState=Dg(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ee(t),e===null&&wt&&(o=t.stateNode=kg(t.type,t.pendingProps,se.current),Oa=t,ji=!0,f=It,ur(t.type)?(tf=f,It=Di(o.firstChild)):It=f),Ra(e,t,t.pendingProps.children,r),xc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&wt&&((f=o=It)&&(o=T5(o,t.type,t.pendingProps,ji),o!==null?(t.stateNode=o,Oa=t,It=Di(o.firstChild),ji=!1,f=!0):f=!1),f||Kn(t)),Ee(t),f=t.type,v=t.pendingProps,E=e!==null?e.memoizedProps:null,o=v.children,Qh(f,v)?o=null:E!==null&&Qh(f,E)&&(t.flags|=32),t.memoizedState!==null&&(f=Xu(e,t,Iy,null,null,r),lo._currentValue=f),xc(e,t),Ra(e,t,o,r),t.child;case 6:return e===null&&wt&&((e=r=It)&&(r=C5(r,t.pendingProps,ji),r!==null?(t.stateNode=r,Oa=t,It=null,e=!0):e=!1),e||Kn(t)),null;case 13:return y1(e,t,r);case 4:return J(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=Yr(t,null,o,r):Ra(e,t,o,r),t.child;case 11:return d1(e,t,t.type,t.pendingProps,r);case 7:return Ra(e,t,t.pendingProps,r),t.child;case 8:return Ra(e,t,t.pendingProps.children,r),t.child;case 12:return Ra(e,t,t.pendingProps.children,r),t.child;case 10:return o=t.pendingProps,Wn(t,t.type,o.value),Ra(e,t,o.children,r),t.child;case 9:return f=t.type._context,o=t.pendingProps.children,Ir(t),f=Ha(f),o=o(f),t.flags|=1,Ra(e,t,o,r),t.child;case 14:return u1(e,t,t.type,t.pendingProps,r);case 15:return h1(e,t,t.type,t.pendingProps,r);case 19:return x1(e,t,r);case 31:return Qy(e,t,r);case 22:return f1(e,t,r,t.pendingProps);case 24:return Ir(t),o=Ha(ga),e===null?(f=Lu(),f===null&&(f=$t,v=$u(),f.pooledCache=v,v.refCount++,v!==null&&(f.pooledCacheLanes|=r),f=v),t.memoizedState={parent:o,cache:f},Uu(t),Wn(t,ga,f)):((e.lanes&r)!==0&&(Iu(e,t),Ul(t,null,null,r),Bl()),f=e.memoizedState,v=t.memoizedState,f.parent!==o?(f={parent:o,cache:o},t.memoizedState=f,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=f),Wn(t,ga,o)):(o=v.cache,Wn(t,ga,o),o!==f.cache&&Ru(t,[ga],r,!0))),Ra(e,t,t.pendingProps.children,r),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function kn(e){e.flags|=4}function zh(e,t,r,o,f){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(f&335544128)===f)if(e.stateNode.complete)e.flags|=8192;else if(X1())e.flags|=8192;else throw qr=sc,Bu}else e.flags&=-16777217}function z1(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Vg(t))if(X1())e.flags|=8192;else throw qr=sc,Bu}function zc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Mt():536870912,e.lanes|=t,Bs|=t)}function Fl(e,t){if(!wt)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Pt(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,o=0;if(t)for(var f=e.child;f!==null;)r|=f.lanes|f.childLanes,o|=f.subtreeFlags&65011712,o|=f.flags&65011712,f.return=e,f=f.sibling;else for(f=e.child;f!==null;)r|=f.lanes|f.childLanes,o|=f.subtreeFlags,o|=f.flags,f.return=e,f=f.sibling;return e.subtreeFlags|=o,e.childLanes=r,t}function Wy(e,t,r){var o=t.pendingProps;switch(ju(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pt(t),null;case 1:return Pt(t),null;case 3:return r=t.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),t.memoizedState.cache!==o&&(t.flags|=2048),En(ga),le(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ts(t)?kn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Du())),Pt(t),null;case 26:var f=t.type,v=t.memoizedState;return e===null?(kn(t),v!==null?(Pt(t),z1(t,v)):(Pt(t),zh(t,f,null,o,r))):v?v!==e.memoizedState?(kn(t),Pt(t),z1(t,v)):(Pt(t),t.flags&=-16777217):(e=e.memoizedProps,e!==o&&kn(t),Pt(t),zh(t,f,e,o,r)),null;case 27:if($e(t),r=se.current,f=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&kn(t);else{if(!o){if(t.stateNode===null)throw Error(i(166));return Pt(t),null}e=ae.current,Ts(t)?ap(t):(e=kg(f,o,r),t.stateNode=e,kn(t))}return Pt(t),null;case 5:if($e(t),f=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&kn(t);else{if(!o){if(t.stateNode===null)throw Error(i(166));return Pt(t),null}if(v=ae.current,Ts(t))ap(t);else{var E=Vc(se.current);switch(v){case 1:v=E.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:v=E.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":v=E.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":v=E.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":v=E.createElement("div"),v.innerHTML="<script><\/script>",v=v.removeChild(v.firstChild);break;case"select":v=typeof o.is=="string"?E.createElement("select",{is:o.is}):E.createElement("select"),o.multiple?v.multiple=!0:o.size&&(v.size=o.size);break;default:v=typeof o.is=="string"?E.createElement(f,{is:o.is}):E.createElement(f)}}v[Wt]=t,v[pa]=o;e:for(E=t.child;E!==null;){if(E.tag===5||E.tag===6)v.appendChild(E.stateNode);else if(E.tag!==4&&E.tag!==27&&E.child!==null){E.child.return=E,E=E.child;continue}if(E===t)break e;for(;E.sibling===null;){if(E.return===null||E.return===t)break e;E=E.return}E.sibling.return=E.return,E=E.sibling}t.stateNode=v;e:switch($a(v,f,o),f){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&kn(t)}}return Pt(t),zh(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,r),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==o&&kn(t);else{if(typeof o!="string"&&t.stateNode===null)throw Error(i(166));if(e=se.current,Ts(t)){if(e=t.stateNode,r=t.memoizedProps,o=null,f=Oa,f!==null)switch(f.tag){case 27:case 5:o=f.memoizedProps}e[Wt]=t,e=!!(e.nodeValue===r||o!==null&&o.suppressHydrationWarning===!0||yg(e.nodeValue,r)),e||Kn(t,!0)}else e=Vc(e).createTextNode(o),e[Wt]=t,t.stateNode=e}return Pt(t),null;case 31:if(r=t.memoizedState,e===null||e.memoizedState!==null){if(o=Ts(t),r!==null){if(e===null){if(!o)throw Error(i(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(557));e[Wt]=t}else Br(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Pt(t),e=!1}else r=Du(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),e=!0;if(!e)return t.flags&256?(li(t),t):(li(t),null);if((t.flags&128)!==0)throw Error(i(558))}return Pt(t),null;case 13:if(o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(f=Ts(t),o!==null&&o.dehydrated!==null){if(e===null){if(!f)throw Error(i(318));if(f=t.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(i(317));f[Wt]=t}else Br(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Pt(t),f=!1}else f=Du(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=f),f=!0;if(!f)return t.flags&256?(li(t),t):(li(t),null)}return li(t),(t.flags&128)!==0?(t.lanes=r,t):(r=o!==null,e=e!==null&&e.memoizedState!==null,r&&(o=t.child,f=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(f=o.alternate.memoizedState.cachePool.pool),v=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(v=o.memoizedState.cachePool.pool),v!==f&&(o.flags|=2048)),r!==e&&r&&(t.child.flags|=8192),zc(t,t.updateQueue),Pt(t),null);case 4:return le(),e===null&&qh(t.stateNode.containerInfo),Pt(t),null;case 10:return En(t.type),Pt(t),null;case 19:if(G(oa),o=t.memoizedState,o===null)return Pt(t),null;if(f=(t.flags&128)!==0,v=o.rendering,v===null)if(f)Fl(o,!1);else{if(ia!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(v=dc(e),v!==null){for(t.flags|=128,Fl(o,!1),e=v.updateQueue,t.updateQueue=e,zc(t,e),t.subtreeFlags=0,e=r,r=t.child;r!==null;)K0(r,e),r=r.sibling;return ee(oa,oa.current&1|2),wt&&Sn(t,o.treeForkCount),t.child}e=e.sibling}o.tail!==null&&je()>Cc&&(t.flags|=128,f=!0,Fl(o,!1),t.lanes=4194304)}else{if(!f)if(e=dc(v),e!==null){if(t.flags|=128,f=!0,e=e.updateQueue,t.updateQueue=e,zc(t,e),Fl(o,!0),o.tail===null&&o.tailMode==="hidden"&&!v.alternate&&!wt)return Pt(t),null}else 2*je()-o.renderingStartTime>Cc&&r!==536870912&&(t.flags|=128,f=!0,Fl(o,!1),t.lanes=4194304);o.isBackwards?(v.sibling=t.child,t.child=v):(e=o.last,e!==null?e.sibling=v:t.child=v,o.last=v)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=je(),e.sibling=null,r=oa.current,ee(oa,f?r&1|2:r&1),wt&&Sn(t,o.treeForkCount),e):(Pt(t),null);case 22:case 23:return li(t),Yu(),o=t.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(t.flags|=8192):o&&(t.flags|=8192),o?(r&536870912)!==0&&(t.flags&128)===0&&(Pt(t),t.subtreeFlags&6&&(t.flags|=8192)):Pt(t),r=t.updateQueue,r!==null&&zc(t,r.retryQueue),r=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),o=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(o=t.memoizedState.cachePool.pool),o!==r&&(t.flags|=2048),e!==null&&G(Pr),null;case 24:return r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),En(ga),Pt(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Jy(e,t){switch(ju(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return En(ga),le(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return $e(t),null;case 31:if(t.memoizedState!==null){if(li(t),t.alternate===null)throw Error(i(340));Br()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(li(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Br()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return G(oa),null;case 4:return le(),null;case 10:return En(t.type),null;case 22:case 23:return li(t),Yu(),e!==null&&G(Pr),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return En(ga),null;case 25:return null;default:return null}}function S1(e,t){switch(ju(t),t.tag){case 3:En(ga),le();break;case 26:case 27:case 5:$e(t);break;case 4:le();break;case 31:t.memoizedState!==null&&li(t);break;case 13:li(t);break;case 19:G(oa);break;case 10:En(t.type);break;case 22:case 23:li(t),Yu(),e!==null&&G(Pr);break;case 24:En(ga)}}function Gl(e,t){try{var r=t.updateQueue,o=r!==null?r.lastEffect:null;if(o!==null){var f=o.next;r=f;do{if((r.tag&e)===e){o=void 0;var v=r.create,E=r.inst;o=v(),E.destroy=o}r=r.next}while(r!==f)}}catch(N){Nt(t,t.return,N)}}function nr(e,t,r){try{var o=t.updateQueue,f=o!==null?o.lastEffect:null;if(f!==null){var v=f.next;o=v;do{if((o.tag&e)===e){var E=o.inst,N=E.destroy;if(N!==void 0){E.destroy=void 0,f=t;var Y=r,de=N;try{de()}catch(ye){Nt(f,Y,ye)}}}o=o.next}while(o!==v)}}catch(ye){Nt(t,t.return,ye)}}function M1(e){var t=e.updateQueue;if(t!==null){var r=e.stateNode;try{pp(t,r)}catch(o){Nt(e,e.return,o)}}}function E1(e,t,r){r.props=Gr(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(o){Nt(e,t,o)}}function Xl(e,t){try{var r=e.ref;if(r!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof r=="function"?e.refCleanup=r(o):r.current=o}}catch(f){Nt(e,t,f)}}function rn(e,t){var r=e.ref,o=e.refCleanup;if(r!==null)if(typeof o=="function")try{o()}catch(f){Nt(e,t,f)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(f){Nt(e,t,f)}else r.current=null}function T1(e){var t=e.type,r=e.memoizedProps,o=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":r.autoFocus&&o.focus();break e;case"img":r.src?o.src=r.src:r.srcSet&&(o.srcset=r.srcSet)}}catch(f){Nt(e,e.return,f)}}function Sh(e,t,r){try{var o=e.stateNode;x5(o,e.type,r,t),o[pa]=t}catch(f){Nt(e,e.return,f)}}function C1(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ur(e.type)||e.tag===4}function Mh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||C1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ur(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Eh(e,t,r){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(e,t):(t=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,t.appendChild(e),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=xn));else if(o!==4&&(o===27&&ur(e.type)&&(r=e.stateNode,t=null),e=e.child,e!==null))for(Eh(e,t,r),e=e.sibling;e!==null;)Eh(e,t,r),e=e.sibling}function Sc(e,t,r){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(o!==4&&(o===27&&ur(e.type)&&(r=e.stateNode),e=e.child,e!==null))for(Sc(e,t,r),e=e.sibling;e!==null;)Sc(e,t,r),e=e.sibling}function A1(e){var t=e.stateNode,r=e.memoizedProps;try{for(var o=e.type,f=t.attributes;f.length;)t.removeAttributeNode(f[0]);$a(t,o,r),t[Wt]=e,t[pa]=r}catch(v){Nt(e,e.return,v)}}var jn=!1,ya=!1,Th=!1,k1=typeof WeakSet=="function"?WeakSet:Set,ka=null;function e5(e,t){if(e=e.containerInfo,Gh=qc,e=I0(e),_u(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var f=o.anchorOffset,v=o.focusNode;o=o.focusOffset;try{r.nodeType,v.nodeType}catch{r=null;break e}var E=0,N=-1,Y=-1,de=0,ye=0,Se=e,fe=null;t:for(;;){for(var be;Se!==r||f!==0&&Se.nodeType!==3||(N=E+f),Se!==v||o!==0&&Se.nodeType!==3||(Y=E+o),Se.nodeType===3&&(E+=Se.nodeValue.length),(be=Se.firstChild)!==null;)fe=Se,Se=be;for(;;){if(Se===e)break t;if(fe===r&&++de===f&&(N=E),fe===v&&++ye===o&&(Y=E),(be=Se.nextSibling)!==null)break;Se=fe,fe=Se.parentNode}Se=be}r=N===-1||Y===-1?null:{start:N,end:Y}}else r=null}r=r||{start:0,end:0}}else r=null;for(Xh={focusedElem:e,selectionRange:r},qc=!1,ka=t;ka!==null;)if(t=ka,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ka=e;else for(;ka!==null;){switch(t=ka,v=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(r=0;r<e.length;r++)f=e[r],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&v!==null){e=void 0,r=t,f=v.memoizedProps,v=v.memoizedState,o=r.stateNode;try{var Ue=Gr(r.type,f);e=o.getSnapshotBeforeUpdate(Ue,v),o.__reactInternalSnapshotBeforeUpdate=e}catch(et){Nt(r,r.return,et)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,r=e.nodeType,r===9)Wh(e);else if(r===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Wh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,ka=e;break}ka=t.return}}function j1(e,t,r){var o=r.flags;switch(r.tag){case 0:case 11:case 15:Dn(e,r),o&4&&Gl(5,r);break;case 1:if(Dn(e,r),o&4)if(e=r.stateNode,t===null)try{e.componentDidMount()}catch(E){Nt(r,r.return,E)}else{var f=Gr(r.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(f,t,e.__reactInternalSnapshotBeforeUpdate)}catch(E){Nt(r,r.return,E)}}o&64&&M1(r),o&512&&Xl(r,r.return);break;case 3:if(Dn(e,r),o&64&&(e=r.updateQueue,e!==null)){if(t=null,r.child!==null)switch(r.child.tag){case 27:case 5:t=r.child.stateNode;break;case 1:t=r.child.stateNode}try{pp(e,t)}catch(E){Nt(r,r.return,E)}}break;case 27:t===null&&o&4&&A1(r);case 26:case 5:Dn(e,r),t===null&&o&4&&T1(r),o&512&&Xl(r,r.return);break;case 12:Dn(e,r);break;case 31:Dn(e,r),o&4&&O1(e,r);break;case 13:Dn(e,r),o&4&&H1(e,r),o&64&&(e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(r=c5.bind(null,r),A5(e,r))));break;case 22:if(o=r.memoizedState!==null||jn,!o){t=t!==null&&t.memoizedState!==null||ya,f=jn;var v=ya;jn=o,(ya=t)&&!v?On(e,r,(r.subtreeFlags&8772)!==0):Dn(e,r),jn=f,ya=v}break;case 30:break;default:Dn(e,r)}}function N1(e){var t=e.alternate;t!==null&&(e.alternate=null,N1(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&iu(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Xt=null,Xa=!1;function Nn(e,t,r){for(r=r.child;r!==null;)D1(e,t,r),r=r.sibling}function D1(e,t,r){if(kt&&typeof kt.onCommitFiberUnmount=="function")try{kt.onCommitFiberUnmount(ea,r)}catch{}switch(r.tag){case 26:ya||rn(r,t),Nn(e,t,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:ya||rn(r,t);var o=Xt,f=Xa;ur(r.type)&&(Xt=r.stateNode,Xa=!1),Nn(e,t,r),no(r.stateNode),Xt=o,Xa=f;break;case 5:ya||rn(r,t);case 6:if(o=Xt,f=Xa,Xt=null,Nn(e,t,r),Xt=o,Xa=f,Xt!==null)if(Xa)try{(Xt.nodeType===9?Xt.body:Xt.nodeName==="HTML"?Xt.ownerDocument.body:Xt).removeChild(r.stateNode)}catch(v){Nt(r,t,v)}else try{Xt.removeChild(r.stateNode)}catch(v){Nt(r,t,v)}break;case 18:Xt!==null&&(Xa?(e=Xt,Mg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,r.stateNode),Gs(e)):Mg(Xt,r.stateNode));break;case 4:o=Xt,f=Xa,Xt=r.stateNode.containerInfo,Xa=!0,Nn(e,t,r),Xt=o,Xa=f;break;case 0:case 11:case 14:case 15:nr(2,r,t),ya||nr(4,r,t),Nn(e,t,r);break;case 1:ya||(rn(r,t),o=r.stateNode,typeof o.componentWillUnmount=="function"&&E1(r,t,o)),Nn(e,t,r);break;case 21:Nn(e,t,r);break;case 22:ya=(o=ya)||r.memoizedState!==null,Nn(e,t,r),ya=o;break;default:Nn(e,t,r)}}function O1(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Gs(e)}catch(r){Nt(t,t.return,r)}}}function H1(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Gs(e)}catch(r){Nt(t,t.return,r)}}function t5(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new k1),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new k1),t;default:throw Error(i(435,e.tag))}}function Mc(e,t){var r=t5(e);t.forEach(function(o){if(!r.has(o)){r.add(o);var f=d5.bind(null,e,o);o.then(f,f)}})}function Qa(e,t){var r=t.deletions;if(r!==null)for(var o=0;o<r.length;o++){var f=r[o],v=e,E=t,N=E;e:for(;N!==null;){switch(N.tag){case 27:if(ur(N.type)){Xt=N.stateNode,Xa=!1;break e}break;case 5:Xt=N.stateNode,Xa=!1;break e;case 3:case 4:Xt=N.stateNode.containerInfo,Xa=!0;break e}N=N.return}if(Xt===null)throw Error(i(160));D1(v,E,f),Xt=null,Xa=!1,v=f.alternate,v!==null&&(v.return=null),f.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)R1(t,e),t=t.sibling}var Vi=null;function R1(e,t){var r=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Qa(t,e),Ka(e),o&4&&(nr(3,e,e.return),Gl(3,e),nr(5,e,e.return));break;case 1:Qa(t,e),Ka(e),o&512&&(ya||r===null||rn(r,r.return)),o&64&&jn&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=r===null?o:r.concat(o))));break;case 26:var f=Vi;if(Qa(t,e),Ka(e),o&512&&(ya||r===null||rn(r,r.return)),o&4){var v=r!==null?r.memoizedState:null;if(o=e.memoizedState,r===null)if(o===null)if(e.stateNode===null){e:{o=e.type,r=e.memoizedProps,f=f.ownerDocument||f;t:switch(o){case"title":v=f.getElementsByTagName("title")[0],(!v||v[ms]||v[Wt]||v.namespaceURI==="http://www.w3.org/2000/svg"||v.hasAttribute("itemprop"))&&(v=f.createElement(o),f.head.insertBefore(v,f.querySelector("head > title"))),$a(v,o,r),v[Wt]=e,Aa(v),o=v;break e;case"link":var E=Rg("link","href",f).get(o+(r.href||""));if(E){for(var N=0;N<E.length;N++)if(v=E[N],v.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&v.getAttribute("rel")===(r.rel==null?null:r.rel)&&v.getAttribute("title")===(r.title==null?null:r.title)&&v.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){E.splice(N,1);break t}}v=f.createElement(o),$a(v,o,r),f.head.appendChild(v);break;case"meta":if(E=Rg("meta","content",f).get(o+(r.content||""))){for(N=0;N<E.length;N++)if(v=E[N],v.getAttribute("content")===(r.content==null?null:""+r.content)&&v.getAttribute("name")===(r.name==null?null:r.name)&&v.getAttribute("property")===(r.property==null?null:r.property)&&v.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&v.getAttribute("charset")===(r.charSet==null?null:r.charSet)){E.splice(N,1);break t}}v=f.createElement(o),$a(v,o,r),f.head.appendChild(v);break;default:throw Error(i(468,o))}v[Wt]=e,Aa(v),o=v}e.stateNode=o}else $g(f,e.type,e.stateNode);else e.stateNode=Hg(f,o,e.memoizedProps);else v!==o?(v===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):v.count--,o===null?$g(f,e.type,e.stateNode):Hg(f,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Sh(e,e.memoizedProps,r.memoizedProps)}break;case 27:Qa(t,e),Ka(e),o&512&&(ya||r===null||rn(r,r.return)),r!==null&&o&4&&Sh(e,e.memoizedProps,r.memoizedProps);break;case 5:if(Qa(t,e),Ka(e),o&512&&(ya||r===null||rn(r,r.return)),e.flags&32){f=e.stateNode;try{vs(f,"")}catch(Ue){Nt(e,e.return,Ue)}}o&4&&e.stateNode!=null&&(f=e.memoizedProps,Sh(e,f,r!==null?r.memoizedProps:f)),o&1024&&(Th=!0);break;case 6:if(Qa(t,e),Ka(e),o&4){if(e.stateNode===null)throw Error(i(162));o=e.memoizedProps,r=e.stateNode;try{r.nodeValue=o}catch(Ue){Nt(e,e.return,Ue)}}break;case 3:if(Uc=null,f=Vi,Vi=Lc(t.containerInfo),Qa(t,e),Vi=f,Ka(e),o&4&&r!==null&&r.memoizedState.isDehydrated)try{Gs(t.containerInfo)}catch(Ue){Nt(e,e.return,Ue)}Th&&(Th=!1,$1(e));break;case 4:o=Vi,Vi=Lc(e.stateNode.containerInfo),Qa(t,e),Ka(e),Vi=o;break;case 12:Qa(t,e),Ka(e);break;case 31:Qa(t,e),Ka(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Mc(e,o)));break;case 13:Qa(t,e),Ka(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Tc=je()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Mc(e,o)));break;case 22:f=e.memoizedState!==null;var Y=r!==null&&r.memoizedState!==null,de=jn,ye=ya;if(jn=de||f,ya=ye||Y,Qa(t,e),ya=ye,jn=de,Ka(e),o&8192)e:for(t=e.stateNode,t._visibility=f?t._visibility&-2:t._visibility|1,f&&(r===null||Y||jn||ya||Xr(e)),r=null,t=e;;){if(t.tag===5||t.tag===26){if(r===null){Y=r=t;try{if(v=Y.stateNode,f)E=v.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{N=Y.stateNode;var Se=Y.memoizedProps.style,fe=Se!=null&&Se.hasOwnProperty("display")?Se.display:null;N.style.display=fe==null||typeof fe=="boolean"?"":(""+fe).trim()}}catch(Ue){Nt(Y,Y.return,Ue)}}}else if(t.tag===6){if(r===null){Y=t;try{Y.stateNode.nodeValue=f?"":Y.memoizedProps}catch(Ue){Nt(Y,Y.return,Ue)}}}else if(t.tag===18){if(r===null){Y=t;try{var be=Y.stateNode;f?Eg(be,!0):Eg(Y.stateNode,!1)}catch(Ue){Nt(Y,Y.return,Ue)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;r===t&&(r=null),t=t.return}r===t&&(r=null),t.sibling.return=t.return,t=t.sibling}o&4&&(o=e.updateQueue,o!==null&&(r=o.retryQueue,r!==null&&(o.retryQueue=null,Mc(e,r))));break;case 19:Qa(t,e),Ka(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Mc(e,o)));break;case 30:break;case 21:break;default:Qa(t,e),Ka(e)}}function Ka(e){var t=e.flags;if(t&2){try{for(var r,o=e.return;o!==null;){if(C1(o)){r=o;break}o=o.return}if(r==null)throw Error(i(160));switch(r.tag){case 27:var f=r.stateNode,v=Mh(e);Sc(e,v,f);break;case 5:var E=r.stateNode;r.flags&32&&(vs(E,""),r.flags&=-33);var N=Mh(e);Sc(e,N,E);break;case 3:case 4:var Y=r.stateNode.containerInfo,de=Mh(e);Eh(e,de,Y);break;default:throw Error(i(161))}}catch(ye){Nt(e,e.return,ye)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function $1(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;$1(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Dn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)j1(e,t.alternate,t),t=t.sibling}function Xr(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:nr(4,t,t.return),Xr(t);break;case 1:rn(t,t.return);var r=t.stateNode;typeof r.componentWillUnmount=="function"&&E1(t,t.return,r),Xr(t);break;case 27:no(t.stateNode);case 26:case 5:rn(t,t.return),Xr(t);break;case 22:t.memoizedState===null&&Xr(t);break;case 30:Xr(t);break;default:Xr(t)}e=e.sibling}}function On(e,t,r){for(r=r&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var o=t.alternate,f=e,v=t,E=v.flags;switch(v.tag){case 0:case 11:case 15:On(f,v,r),Gl(4,v);break;case 1:if(On(f,v,r),o=v,f=o.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(de){Nt(o,o.return,de)}if(o=v,f=o.updateQueue,f!==null){var N=o.stateNode;try{var Y=f.shared.hiddenCallbacks;if(Y!==null)for(f.shared.hiddenCallbacks=null,f=0;f<Y.length;f++)mp(Y[f],N)}catch(de){Nt(o,o.return,de)}}r&&E&64&&M1(v),Xl(v,v.return);break;case 27:A1(v);case 26:case 5:On(f,v,r),r&&o===null&&E&4&&T1(v),Xl(v,v.return);break;case 12:On(f,v,r);break;case 31:On(f,v,r),r&&E&4&&O1(f,v);break;case 13:On(f,v,r),r&&E&4&&H1(f,v);break;case 22:v.memoizedState===null&&On(f,v,r),Xl(v,v.return);break;case 30:break;default:On(f,v,r)}t=t.sibling}}function Ch(e,t){var r=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==r&&(e!=null&&e.refCount++,r!=null&&Hl(r))}function Ah(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Hl(e))}function Li(e,t,r,o){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)V1(e,t,r,o),t=t.sibling}function V1(e,t,r,o){var f=t.flags;switch(t.tag){case 0:case 11:case 15:Li(e,t,r,o),f&2048&&Gl(9,t);break;case 1:Li(e,t,r,o);break;case 3:Li(e,t,r,o),f&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Hl(e)));break;case 12:if(f&2048){Li(e,t,r,o),e=t.stateNode;try{var v=t.memoizedProps,E=v.id,N=v.onPostCommit;typeof N=="function"&&N(E,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(Y){Nt(t,t.return,Y)}}else Li(e,t,r,o);break;case 31:Li(e,t,r,o);break;case 13:Li(e,t,r,o);break;case 23:break;case 22:v=t.stateNode,E=t.alternate,t.memoizedState!==null?v._visibility&2?Li(e,t,r,o):Ql(e,t):v._visibility&2?Li(e,t,r,o):(v._visibility|=2,$s(e,t,r,o,(t.subtreeFlags&10256)!==0||!1)),f&2048&&Ch(E,t);break;case 24:Li(e,t,r,o),f&2048&&Ah(t.alternate,t);break;default:Li(e,t,r,o)}}function $s(e,t,r,o,f){for(f=f&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var v=e,E=t,N=r,Y=o,de=E.flags;switch(E.tag){case 0:case 11:case 15:$s(v,E,N,Y,f),Gl(8,E);break;case 23:break;case 22:var ye=E.stateNode;E.memoizedState!==null?ye._visibility&2?$s(v,E,N,Y,f):Ql(v,E):(ye._visibility|=2,$s(v,E,N,Y,f)),f&&de&2048&&Ch(E.alternate,E);break;case 24:$s(v,E,N,Y,f),f&&de&2048&&Ah(E.alternate,E);break;default:$s(v,E,N,Y,f)}t=t.sibling}}function Ql(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var r=e,o=t,f=o.flags;switch(o.tag){case 22:Ql(r,o),f&2048&&Ch(o.alternate,o);break;case 24:Ql(r,o),f&2048&&Ah(o.alternate,o);break;default:Ql(r,o)}t=t.sibling}}var Kl=8192;function Vs(e,t,r){if(e.subtreeFlags&Kl)for(e=e.child;e!==null;)L1(e,t,r),e=e.sibling}function L1(e,t,r){switch(e.tag){case 26:Vs(e,t,r),e.flags&Kl&&e.memoizedState!==null&&U5(r,Vi,e.memoizedState,e.memoizedProps);break;case 5:Vs(e,t,r);break;case 3:case 4:var o=Vi;Vi=Lc(e.stateNode.containerInfo),Vs(e,t,r),Vi=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Kl,Kl=16777216,Vs(e,t,r),Kl=o):Vs(e,t,r));break;default:Vs(e,t,r)}}function B1(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Wl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var r=0;r<t.length;r++){var o=t[r];ka=o,I1(o,e)}B1(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)U1(e),e=e.sibling}function U1(e){switch(e.tag){case 0:case 11:case 15:Wl(e),e.flags&2048&&nr(9,e,e.return);break;case 3:Wl(e);break;case 12:Wl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ec(e)):Wl(e);break;default:Wl(e)}}function Ec(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var r=0;r<t.length;r++){var o=t[r];ka=o,I1(o,e)}B1(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:nr(8,t,t.return),Ec(t);break;case 22:r=t.stateNode,r._visibility&2&&(r._visibility&=-3,Ec(t));break;default:Ec(t)}e=e.sibling}}function I1(e,t){for(;ka!==null;){var r=ka;switch(r.tag){case 0:case 11:case 15:nr(8,r,t);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var o=r.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Hl(r.memoizedState.cache)}if(o=r.child,o!==null)o.return=r,ka=o;else e:for(r=e;ka!==null;){o=ka;var f=o.sibling,v=o.return;if(N1(o),o===r){ka=null;break e}if(f!==null){f.return=v,ka=f;break e}ka=v}}}var a5={getCacheForType:function(e){var t=Ha(ga),r=t.data.get(e);return r===void 0&&(r=e(),t.data.set(e,r)),r},cacheSignal:function(){return Ha(ga).controller.signal}},i5=typeof WeakMap=="function"?WeakMap:Map,At=0,$t=null,vt=null,_t=0,jt=0,oi=null,rr=!1,Ls=!1,kh=!1,Hn=0,ia=0,sr=0,Qr=0,jh=0,ci=0,Bs=0,Jl=null,Wa=null,Nh=!1,Tc=0,P1=0,Cc=1/0,Ac=null,lr=null,Sa=0,or=null,Us=null,Rn=0,Dh=0,Oh=null,Z1=null,eo=0,Hh=null;function di(){return(At&2)!==0&&_t!==0?_t&-_t:k.T!==null?Uh():wi()}function q1(){if(ci===0)if((_t&536870912)===0||wt){var e=tt;tt<<=1,(tt&3932160)===0&&(tt=262144),ci=e}else ci=536870912;return e=si.current,e!==null&&(e.flags|=32),ci}function Ja(e,t,r){(e===$t&&(jt===2||jt===9)||e.cancelPendingCommit!==null)&&(Is(e,0),cr(e,_t,ci,!1)),gt(e,r),((At&2)===0||e!==$t)&&(e===$t&&((At&2)===0&&(Qr|=r),ia===4&&cr(e,_t,ci,!1)),sn(e))}function Y1(e,t,r){if((At&6)!==0)throw Error(i(327));var o=!r&&(t&127)===0&&(t&e.expiredLanes)===0||me(e,t),f=o?s5(e,t):$h(e,t,!0),v=o;do{if(f===0){Ls&&!o&&cr(e,t,0,!1);break}else{if(r=e.current.alternate,v&&!n5(r)){f=$h(e,t,!1),v=!1;continue}if(f===2){if(v=t,e.errorRecoveryDisabledLanes&v)var E=0;else E=e.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){t=E;e:{var N=e;f=Jl;var Y=N.current.memoizedState.isDehydrated;if(Y&&(Is(N,E).flags|=256),E=$h(N,E,!1),E!==2){if(kh&&!Y){N.errorRecoveryDisabledLanes|=v,Qr|=v,f=4;break e}v=Wa,Wa=f,v!==null&&(Wa===null?Wa=v:Wa.push.apply(Wa,v))}f=E}if(v=!1,f!==2)continue}}if(f===1){Is(e,0),cr(e,t,0,!0);break}e:{switch(o=e,v=f,v){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:cr(o,t,ci,!rr);break e;case 2:Wa=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(f=Tc+300-je(),10<f)){if(cr(o,t,ci,!rr),_e(o,0,!0)!==0)break e;Rn=t,o.timeoutHandle=zg(F1.bind(null,o,r,Wa,Ac,Nh,t,ci,Qr,Bs,rr,v,"Throttled",-0,0),f);break e}F1(o,r,Wa,Ac,Nh,t,ci,Qr,Bs,rr,v,null,-0,0)}}break}while(!0);sn(e)}function F1(e,t,r,o,f,v,E,N,Y,de,ye,Se,fe,be){if(e.timeoutHandle=-1,Se=t.subtreeFlags,Se&8192||(Se&16785408)===16785408){Se={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:xn},L1(t,v,Se);var Ue=(v&62914560)===v?Tc-je():(v&4194048)===v?P1-je():0;if(Ue=I5(Se,Ue),Ue!==null){Rn=v,e.cancelPendingCommit=Ue(tg.bind(null,e,t,v,r,o,f,E,N,Y,ye,Se,null,fe,be)),cr(e,v,E,!de);return}}tg(e,t,v,r,o,f,E,N,Y)}function n5(e){for(var t=e;;){var r=t.tag;if((r===0||r===11||r===15)&&t.flags&16384&&(r=t.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var o=0;o<r.length;o++){var f=r[o],v=f.getSnapshot;f=f.value;try{if(!ni(v(),f))return!1}catch{return!1}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function cr(e,t,r,o){t&=~jh,t&=~Qr,e.suspendedLanes|=t,e.pingedLanes&=~t,o&&(e.warmLanes|=t),o=e.expirationTimes;for(var f=t;0<f;){var v=31-Ct(f),E=1<<v;o[v]=-1,f&=~E}r!==0&&Ba(e,r,t)}function kc(){return(At&6)===0?(to(0),!1):!0}function Rh(){if(vt!==null){if(jt===0)var e=vt.return;else e=vt,Mn=Ur=null,Wu(e),Ns=null,$l=0,e=vt;for(;e!==null;)S1(e.alternate,e),e=e.return;vt=null}}function Is(e,t){var r=e.timeoutHandle;r!==-1&&(e.timeoutHandle=-1,S5(r)),r=e.cancelPendingCommit,r!==null&&(e.cancelPendingCommit=null,r()),Rn=0,Rh(),$t=e,vt=r=zn(e.current,null),_t=t,jt=0,oi=null,rr=!1,Ls=me(e,t),kh=!1,Bs=ci=jh=Qr=sr=ia=0,Wa=Jl=null,Nh=!1,(t&8)!==0&&(t|=t&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=t;0<o;){var f=31-Ct(o),v=1<<f;t|=e[f],o&=~v}return Hn=t,Ko(),r}function G1(e,t){ut=null,k.H=ql,t===js||t===rc?(t=dp(),jt=3):t===Bu?(t=dp(),jt=4):jt=t===mh?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,oi=t,vt===null&&(ia=1,yc(e,Ci(t,e.current)))}function X1(){var e=si.current;return e===null?!0:(_t&4194048)===_t?Ni===null:(_t&62914560)===_t||(_t&536870912)!==0?e===Ni:!1}function Q1(){var e=k.H;return k.H=ql,e===null?ql:e}function K1(){var e=k.A;return k.A=a5,e}function jc(){ia=4,rr||(_t&4194048)!==_t&&si.current!==null||(Ls=!0),(sr&134217727)===0&&(Qr&134217727)===0||$t===null||cr($t,_t,ci,!1)}function $h(e,t,r){var o=At;At|=2;var f=Q1(),v=K1();($t!==e||_t!==t)&&(Ac=null,Is(e,t)),t=!1;var E=ia;e:do try{if(jt!==0&&vt!==null){var N=vt,Y=oi;switch(jt){case 8:Rh(),E=6;break e;case 3:case 2:case 9:case 6:si.current===null&&(t=!0);var de=jt;if(jt=0,oi=null,Ps(e,N,Y,de),r&&Ls){E=0;break e}break;default:de=jt,jt=0,oi=null,Ps(e,N,Y,de)}}r5(),E=ia;break}catch(ye){G1(e,ye)}while(!0);return t&&e.shellSuspendCounter++,Mn=Ur=null,At=o,k.H=f,k.A=v,vt===null&&($t=null,_t=0,Ko()),E}function r5(){for(;vt!==null;)W1(vt)}function s5(e,t){var r=At;At|=2;var o=Q1(),f=K1();$t!==e||_t!==t?(Ac=null,Cc=je()+500,Is(e,t)):Ls=me(e,t);e:do try{if(jt!==0&&vt!==null){t=vt;var v=oi;t:switch(jt){case 1:jt=0,oi=null,Ps(e,t,v,1);break;case 2:case 9:if(op(v)){jt=0,oi=null,J1(t);break}t=function(){jt!==2&&jt!==9||$t!==e||(jt=7),sn(e)},v.then(t,t);break e;case 3:jt=7;break e;case 4:jt=5;break e;case 7:op(v)?(jt=0,oi=null,J1(t)):(jt=0,oi=null,Ps(e,t,v,7));break;case 5:var E=null;switch(vt.tag){case 26:E=vt.memoizedState;case 5:case 27:var N=vt;if(E?Vg(E):N.stateNode.complete){jt=0,oi=null;var Y=N.sibling;if(Y!==null)vt=Y;else{var de=N.return;de!==null?(vt=de,Nc(de)):vt=null}break t}}jt=0,oi=null,Ps(e,t,v,5);break;case 6:jt=0,oi=null,Ps(e,t,v,6);break;case 8:Rh(),ia=6;break e;default:throw Error(i(462))}}l5();break}catch(ye){G1(e,ye)}while(!0);return Mn=Ur=null,k.H=o,k.A=f,At=r,vt!==null?0:($t=null,_t=0,Ko(),ia)}function l5(){for(;vt!==null&&!Oe();)W1(vt)}function W1(e){var t=w1(e.alternate,e,Hn);e.memoizedProps=e.pendingProps,t===null?Nc(e):vt=t}function J1(e){var t=e,r=t.alternate;switch(t.tag){case 15:case 0:t=g1(r,t,t.pendingProps,t.type,void 0,_t);break;case 11:t=g1(r,t,t.pendingProps,t.type.render,t.ref,_t);break;case 5:Wu(t);default:S1(r,t),t=vt=K0(t,Hn),t=w1(r,t,Hn)}e.memoizedProps=e.pendingProps,t===null?Nc(e):vt=t}function Ps(e,t,r,o){Mn=Ur=null,Wu(t),Ns=null,$l=0;var f=t.return;try{if(Xy(e,f,t,r,_t)){ia=1,yc(e,Ci(r,e.current)),vt=null;return}}catch(v){if(f!==null)throw vt=f,v;ia=1,yc(e,Ci(r,e.current)),vt=null;return}t.flags&32768?(wt||o===1?e=!0:Ls||(_t&536870912)!==0?e=!1:(rr=e=!0,(o===2||o===9||o===3||o===6)&&(o=si.current,o!==null&&o.tag===13&&(o.flags|=16384))),eg(t,e)):Nc(t)}function Nc(e){var t=e;do{if((t.flags&32768)!==0){eg(t,rr);return}e=t.return;var r=Wy(t.alternate,t,Hn);if(r!==null){vt=r;return}if(t=t.sibling,t!==null){vt=t;return}vt=t=e}while(t!==null);ia===0&&(ia=5)}function eg(e,t){do{var r=Jy(e.alternate,e);if(r!==null){r.flags&=32767,vt=r;return}if(r=e.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!t&&(e=e.sibling,e!==null)){vt=e;return}vt=e=r}while(e!==null);ia=6,vt=null}function tg(e,t,r,o,f,v,E,N,Y){e.cancelPendingCommit=null;do Dc();while(Sa!==0);if((At&6)!==0)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(v=t.lanes|t.childLanes,v|=Mu,Gt(e,r,v,E,N,Y),e===$t&&(vt=$t=null,_t=0),Us=t,or=e,Rn=r,Dh=v,Oh=f,Z1=o,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,u5(_a,function(){return sg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||o){o=k.T,k.T=null,f=D.p,D.p=2,E=At,At|=4;try{e5(e,t,r)}finally{At=E,D.p=f,k.T=o}}Sa=1,ag(),ig(),ng()}}function ag(){if(Sa===1){Sa=0;var e=or,t=Us,r=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||r){r=k.T,k.T=null;var o=D.p;D.p=2;var f=At;At|=4;try{R1(t,e);var v=Xh,E=I0(e.containerInfo),N=v.focusedElem,Y=v.selectionRange;if(E!==N&&N&&N.ownerDocument&&U0(N.ownerDocument.documentElement,N)){if(Y!==null&&_u(N)){var de=Y.start,ye=Y.end;if(ye===void 0&&(ye=de),"selectionStart"in N)N.selectionStart=de,N.selectionEnd=Math.min(ye,N.value.length);else{var Se=N.ownerDocument||document,fe=Se&&Se.defaultView||window;if(fe.getSelection){var be=fe.getSelection(),Ue=N.textContent.length,et=Math.min(Y.start,Ue),Ht=Y.end===void 0?et:Math.min(Y.end,Ue);!be.extend&&et>Ht&&(E=Ht,Ht=et,et=E);var ne=B0(N,et),Q=B0(N,Ht);if(ne&&Q&&(be.rangeCount!==1||be.anchorNode!==ne.node||be.anchorOffset!==ne.offset||be.focusNode!==Q.node||be.focusOffset!==Q.offset)){var oe=Se.createRange();oe.setStart(ne.node,ne.offset),be.removeAllRanges(),et>Ht?(be.addRange(oe),be.extend(Q.node,Q.offset)):(oe.setEnd(Q.node,Q.offset),be.addRange(oe))}}}}for(Se=[],be=N;be=be.parentNode;)be.nodeType===1&&Se.push({element:be,left:be.scrollLeft,top:be.scrollTop});for(typeof N.focus=="function"&&N.focus(),N=0;N<Se.length;N++){var we=Se[N];we.element.scrollLeft=we.left,we.element.scrollTop=we.top}}qc=!!Gh,Xh=Gh=null}finally{At=f,D.p=o,k.T=r}}e.current=t,Sa=2}}function ig(){if(Sa===2){Sa=0;var e=or,t=Us,r=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||r){r=k.T,k.T=null;var o=D.p;D.p=2;var f=At;At|=4;try{j1(e,t.alternate,t)}finally{At=f,D.p=o,k.T=r}}Sa=3}}function ng(){if(Sa===4||Sa===3){Sa=0,Qe();var e=or,t=Us,r=Rn,o=Z1;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Sa=5:(Sa=0,Us=or=null,rg(e,e.pendingLanes));var f=e.pendingLanes;if(f===0&&(lr=null),wa(r),t=t.stateNode,kt&&typeof kt.onCommitFiberRoot=="function")try{kt.onCommitFiberRoot(ea,t,void 0,(t.current.flags&128)===128)}catch{}if(o!==null){t=k.T,f=D.p,D.p=2,k.T=null;try{for(var v=e.onRecoverableError,E=0;E<o.length;E++){var N=o[E];v(N.value,{componentStack:N.stack})}}finally{k.T=t,D.p=f}}(Rn&3)!==0&&Dc(),sn(e),f=e.pendingLanes,(r&261930)!==0&&(f&42)!==0?e===Hh?eo++:(eo=0,Hh=e):eo=0,to(0)}}function rg(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Hl(t)))}function Dc(){return ag(),ig(),ng(),sg()}function sg(){if(Sa!==5)return!1;var e=or,t=Dh;Dh=0;var r=wa(Rn),o=k.T,f=D.p;try{D.p=32>r?32:r,k.T=null,r=Oh,Oh=null;var v=or,E=Rn;if(Sa=0,Us=or=null,Rn=0,(At&6)!==0)throw Error(i(331));var N=At;if(At|=4,U1(v.current),V1(v,v.current,E,r),At=N,to(0,!1),kt&&typeof kt.onPostCommitFiberRoot=="function")try{kt.onPostCommitFiberRoot(ea,v)}catch{}return!0}finally{D.p=f,k.T=o,rg(e,t)}}function lg(e,t,r){t=Ci(r,t),t=fh(e.stateNode,t,2),e=tr(e,t,2),e!==null&&(gt(e,2),sn(e))}function Nt(e,t,r){if(e.tag===3)lg(e,e,r);else for(;t!==null;){if(t.tag===3){lg(t,e,r);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(lr===null||!lr.has(o))){e=Ci(r,e),r=o1(2),o=tr(t,r,2),o!==null&&(c1(r,o,t,e),gt(o,2),sn(o));break}}t=t.return}}function Vh(e,t,r){var o=e.pingCache;if(o===null){o=e.pingCache=new i5;var f=new Set;o.set(t,f)}else f=o.get(t),f===void 0&&(f=new Set,o.set(t,f));f.has(r)||(kh=!0,f.add(r),e=o5.bind(null,e,t,r),t.then(e,e))}function o5(e,t,r){var o=e.pingCache;o!==null&&o.delete(t),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,$t===e&&(_t&r)===r&&(ia===4||ia===3&&(_t&62914560)===_t&&300>je()-Tc?(At&2)===0&&Is(e,0):jh|=r,Bs===_t&&(Bs=0)),sn(e)}function og(e,t){t===0&&(t=Mt()),e=Vr(e,t),e!==null&&(gt(e,t),sn(e))}function c5(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),og(e,r)}function d5(e,t){var r=0;switch(e.tag){case 31:case 13:var o=e.stateNode,f=e.memoizedState;f!==null&&(r=f.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(i(314))}o!==null&&o.delete(t),og(e,r)}function u5(e,t){return pe(e,t)}var Oc=null,Zs=null,Lh=!1,Hc=!1,Bh=!1,dr=0;function sn(e){e!==Zs&&e.next===null&&(Zs===null?Oc=Zs=e:Zs=Zs.next=e),Hc=!0,Lh||(Lh=!0,f5())}function to(e,t){if(!Bh&&Hc){Bh=!0;do for(var r=!1,o=Oc;o!==null;){if(e!==0){var f=o.pendingLanes;if(f===0)var v=0;else{var E=o.suspendedLanes,N=o.pingedLanes;v=(1<<31-Ct(42|e)+1)-1,v&=f&~(E&~N),v=v&201326741?v&201326741|1:v?v|2:0}v!==0&&(r=!0,hg(o,v))}else v=_t,v=_e(o,o===$t?v:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(v&3)===0||me(o,v)||(r=!0,hg(o,v));o=o.next}while(r);Bh=!1}}function h5(){cg()}function cg(){Hc=Lh=!1;var e=0;dr!==0&&z5()&&(e=dr);for(var t=je(),r=null,o=Oc;o!==null;){var f=o.next,v=dg(o,t);v===0?(o.next=null,r===null?Oc=f:r.next=f,f===null&&(Zs=r)):(r=o,(e!==0||(v&3)!==0)&&(Hc=!0)),o=f}Sa!==0&&Sa!==5||to(e),dr!==0&&(dr=0)}function dg(e,t){for(var r=e.suspendedLanes,o=e.pingedLanes,f=e.expirationTimes,v=e.pendingLanes&-62914561;0<v;){var E=31-Ct(v),N=1<<E,Y=f[E];Y===-1?((N&r)===0||(N&o)!==0)&&(f[E]=Re(N,t)):Y<=t&&(e.expiredLanes|=N),v&=~N}if(t=$t,r=_t,r=_e(e,e===t?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,r===0||e===t&&(jt===2||jt===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&te(o),e.callbackNode=null,e.callbackPriority=0;if((r&3)===0||me(e,r)){if(t=r&-r,t===e.callbackPriority)return t;switch(o!==null&&te(o),wa(r)){case 2:case 8:r=sa;break;case 32:r=_a;break;case 268435456:r=Ft;break;default:r=_a}return o=ug.bind(null,e),r=pe(r,o),e.callbackPriority=t,e.callbackNode=r,t}return o!==null&&o!==null&&te(o),e.callbackPriority=2,e.callbackNode=null,2}function ug(e,t){if(Sa!==0&&Sa!==5)return e.callbackNode=null,e.callbackPriority=0,null;var r=e.callbackNode;if(Dc()&&e.callbackNode!==r)return null;var o=_t;return o=_e(e,e===$t?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Y1(e,o,t),dg(e,je()),e.callbackNode!=null&&e.callbackNode===r?ug.bind(null,e):null)}function hg(e,t){if(Dc())return null;Y1(e,t,!0)}function f5(){M5(function(){(At&6)!==0?pe(We,h5):cg()})}function Uh(){if(dr===0){var e=As;e===0&&(e=la,la<<=1,(la&261888)===0&&(la=256)),dr=e}return dr}function fg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Po(""+e)}function mg(e,t){var r=t.ownerDocument.createElement("input");return r.name=t.name,r.value=t.value,e.id&&r.setAttribute("form",e.id),t.parentNode.insertBefore(r,t),e=new FormData(e),r.parentNode.removeChild(r),e}function m5(e,t,r,o,f){if(t==="submit"&&r&&r.stateNode===f){var v=fg((f[pa]||null).action),E=o.submitter;E&&(t=(t=E[pa]||null)?fg(t.formAction):E.getAttribute("formAction"),t!==null&&(v=t,E=null));var N=new Fo("action","action",null,o,f);e.push({event:N,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(dr!==0){var Y=E?mg(f,E):new FormData(f);lh(r,{pending:!0,data:Y,method:f.method,action:v},null,Y)}}else typeof v=="function"&&(N.preventDefault(),Y=E?mg(f,E):new FormData(f),lh(r,{pending:!0,data:Y,method:f.method,action:v},v,Y))},currentTarget:f}]})}}for(var Ih=0;Ih<Su.length;Ih++){var Ph=Su[Ih],p5=Ph.toLowerCase(),g5=Ph[0].toUpperCase()+Ph.slice(1);$i(p5,"on"+g5)}$i(q0,"onAnimationEnd"),$i(Y0,"onAnimationIteration"),$i(F0,"onAnimationStart"),$i("dblclick","onDoubleClick"),$i("focusin","onFocus"),$i("focusout","onBlur"),$i(Ny,"onTransitionRun"),$i(Dy,"onTransitionStart"),$i(Oy,"onTransitionCancel"),$i(G0,"onTransitionEnd"),ps("onMouseEnter",["mouseout","mouseover"]),ps("onMouseLeave",["mouseout","mouseover"]),ps("onPointerEnter",["pointerout","pointerover"]),ps("onPointerLeave",["pointerout","pointerover"]),Or("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Or("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Or("onBeforeInput",["compositionend","keypress","textInput","paste"]),Or("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Or("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Or("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),v5=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ao));function pg(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var o=e[r],f=o.event;o=o.listeners;e:{var v=void 0;if(t)for(var E=o.length-1;0<=E;E--){var N=o[E],Y=N.instance,de=N.currentTarget;if(N=N.listener,Y!==v&&f.isPropagationStopped())break e;v=N,f.currentTarget=de;try{v(f)}catch(ye){Qo(ye)}f.currentTarget=null,v=Y}else for(E=0;E<o.length;E++){if(N=o[E],Y=N.instance,de=N.currentTarget,N=N.listener,Y!==v&&f.isPropagationStopped())break e;v=N,f.currentTarget=de;try{v(f)}catch(ye){Qo(ye)}f.currentTarget=null,v=Y}}}}function bt(e,t){var r=t[yn];r===void 0&&(r=t[yn]=new Set);var o=e+"__bubble";r.has(o)||(gg(t,e,2,!1),r.add(o))}function Zh(e,t,r){var o=0;t&&(o|=4),gg(r,e,o,t)}var Rc="_reactListening"+Math.random().toString(36).slice(2);function qh(e){if(!e[Rc]){e[Rc]=!0,c0.forEach(function(r){r!=="selectionchange"&&(v5.has(r)||Zh(r,!1,e),Zh(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Rc]||(t[Rc]=!0,Zh("selectionchange",!1,t))}}function gg(e,t,r,o){switch(qg(t)){case 2:var f=q5;break;case 8:f=Y5;break;default:f=lf}r=f.bind(null,t,r,e),f=void 0,!uu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(f=!0),o?f!==void 0?e.addEventListener(t,r,{capture:!0,passive:f}):e.addEventListener(t,r,!0):f!==void 0?e.addEventListener(t,r,{passive:f}):e.addEventListener(t,r,!1)}function Yh(e,t,r,o,f){var v=o;if((t&1)===0&&(t&2)===0&&o!==null)e:for(;;){if(o===null)return;var E=o.tag;if(E===3||E===4){var N=o.stateNode.containerInfo;if(N===f)break;if(E===4)for(E=o.return;E!==null;){var Y=E.tag;if((Y===3||Y===4)&&E.stateNode.containerInfo===f)return;E=E.return}for(;N!==null;){if(E=Ne(N),E===null)return;if(Y=E.tag,Y===5||Y===6||Y===26||Y===27){o=v=E;continue e}N=N.parentNode}}o=o.return}x0(function(){var de=v,ye=cu(r),Se=[];e:{var fe=X0.get(e);if(fe!==void 0){var be=Fo,Ue=e;switch(e){case"keypress":if(qo(r)===0)break e;case"keydown":case"keyup":be=dy;break;case"focusin":Ue="focus",be=pu;break;case"focusout":Ue="blur",be=pu;break;case"beforeblur":case"afterblur":be=pu;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":be=S0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":be=W2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":be=fy;break;case q0:case Y0:case F0:be=ty;break;case G0:be=py;break;case"scroll":case"scrollend":be=Q2;break;case"wheel":be=vy;break;case"copy":case"cut":case"paste":be=iy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":be=E0;break;case"toggle":case"beforetoggle":be=yy}var et=(t&4)!==0,Ht=!et&&(e==="scroll"||e==="scrollend"),ne=et?fe!==null?fe+"Capture":null:fe;et=[];for(var Q=de,oe;Q!==null;){var we=Q;if(oe=we.stateNode,we=we.tag,we!==5&&we!==26&&we!==27||oe===null||ne===null||(we=Sl(Q,ne),we!=null&&et.push(io(Q,we,oe))),Ht)break;Q=Q.return}0<et.length&&(fe=new be(fe,Ue,null,r,ye),Se.push({event:fe,listeners:et}))}}if((t&7)===0){e:{if(fe=e==="mouseover"||e==="pointerover",be=e==="mouseout"||e==="pointerout",fe&&r!==ou&&(Ue=r.relatedTarget||r.fromElement)&&(Ne(Ue)||Ue[zi]))break e;if((be||fe)&&(fe=ye.window===ye?ye:(fe=ye.ownerDocument)?fe.defaultView||fe.parentWindow:window,be?(Ue=r.relatedTarget||r.toElement,be=de,Ue=Ue?Ne(Ue):null,Ue!==null&&(Ht=c(Ue),et=Ue.tag,Ue!==Ht||et!==5&&et!==27&&et!==6)&&(Ue=null)):(be=null,Ue=de),be!==Ue)){if(et=S0,we="onMouseLeave",ne="onMouseEnter",Q="mouse",(e==="pointerout"||e==="pointerover")&&(et=E0,we="onPointerLeave",ne="onPointerEnter",Q="pointer"),Ht=be==null?fe:Ve(be),oe=Ue==null?fe:Ve(Ue),fe=new et(we,Q+"leave",be,r,ye),fe.target=Ht,fe.relatedTarget=oe,we=null,Ne(ye)===de&&(et=new et(ne,Q+"enter",Ue,r,ye),et.target=oe,et.relatedTarget=Ht,we=et),Ht=we,be&&Ue)t:{for(et=b5,ne=be,Q=Ue,oe=0,we=ne;we;we=et(we))oe++;we=0;for(var Je=Q;Je;Je=et(Je))we++;for(;0<oe-we;)ne=et(ne),oe--;for(;0<we-oe;)Q=et(Q),we--;for(;oe--;){if(ne===Q||Q!==null&&ne===Q.alternate){et=ne;break t}ne=et(ne),Q=et(Q)}et=null}else et=null;be!==null&&vg(Se,fe,be,et,!1),Ue!==null&&Ht!==null&&vg(Se,Ht,Ue,et,!0)}}e:{if(fe=de?Ve(de):window,be=fe.nodeName&&fe.nodeName.toLowerCase(),be==="select"||be==="input"&&fe.type==="file")var Et=O0;else if(N0(fe))if(H0)Et=Ay;else{Et=Ty;var Ye=Ey}else be=fe.nodeName,!be||be.toLowerCase()!=="input"||fe.type!=="checkbox"&&fe.type!=="radio"?de&&lu(de.elementType)&&(Et=O0):Et=Cy;if(Et&&(Et=Et(e,de))){D0(Se,Et,r,ye);break e}Ye&&Ye(e,fe,de),e==="focusout"&&de&&fe.type==="number"&&de.memoizedProps.value!=null&&su(fe,"number",fe.value)}switch(Ye=de?Ve(de):window,e){case"focusin":(N0(Ye)||Ye.contentEditable==="true")&&(xs=Ye,xu=de,Nl=null);break;case"focusout":Nl=xu=xs=null;break;case"mousedown":wu=!0;break;case"contextmenu":case"mouseup":case"dragend":wu=!1,P0(Se,r,ye);break;case"selectionchange":if(jy)break;case"keydown":case"keyup":P0(Se,r,ye)}var ht;if(vu)e:{switch(e){case"compositionstart":var xt="onCompositionStart";break e;case"compositionend":xt="onCompositionEnd";break e;case"compositionupdate":xt="onCompositionUpdate";break e}xt=void 0}else _s?k0(e,r)&&(xt="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(xt="onCompositionStart");xt&&(T0&&r.locale!=="ko"&&(_s||xt!=="onCompositionStart"?xt==="onCompositionEnd"&&_s&&(ht=w0()):(Gn=ye,hu="value"in Gn?Gn.value:Gn.textContent,_s=!0)),Ye=$c(de,xt),0<Ye.length&&(xt=new M0(xt,e,null,r,ye),Se.push({event:xt,listeners:Ye}),ht?xt.data=ht:(ht=j0(r),ht!==null&&(xt.data=ht)))),(ht=xy?wy(e,r):zy(e,r))&&(xt=$c(de,"onBeforeInput"),0<xt.length&&(Ye=new M0("onBeforeInput","beforeinput",null,r,ye),Se.push({event:Ye,listeners:xt}),Ye.data=ht)),m5(Se,e,de,r,ye)}pg(Se,t)})}function io(e,t,r){return{instance:e,listener:t,currentTarget:r}}function $c(e,t){for(var r=t+"Capture",o=[];e!==null;){var f=e,v=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||v===null||(f=Sl(e,r),f!=null&&o.unshift(io(e,f,v)),f=Sl(e,t),f!=null&&o.push(io(e,f,v))),e.tag===3)return o;e=e.return}return[]}function b5(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function vg(e,t,r,o,f){for(var v=t._reactName,E=[];r!==null&&r!==o;){var N=r,Y=N.alternate,de=N.stateNode;if(N=N.tag,Y!==null&&Y===o)break;N!==5&&N!==26&&N!==27||de===null||(Y=de,f?(de=Sl(r,v),de!=null&&E.unshift(io(r,de,Y))):f||(de=Sl(r,v),de!=null&&E.push(io(r,de,Y)))),r=r.return}E.length!==0&&e.push({event:t,listeners:E})}var y5=/\r\n?/g,_5=/\u0000|\uFFFD/g;function bg(e){return(typeof e=="string"?e:""+e).replace(y5,`
`).replace(_5,"")}function yg(e,t){return t=bg(t),bg(e)===t}function Ot(e,t,r,o,f,v){switch(r){case"children":typeof o=="string"?t==="body"||t==="textarea"&&o===""||vs(e,o):(typeof o=="number"||typeof o=="bigint")&&t!=="body"&&vs(e,""+o);break;case"className":Uo(e,"class",o);break;case"tabIndex":Uo(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Uo(e,r,o);break;case"style":y0(e,o,v);break;case"data":if(t!=="object"){Uo(e,"data",o);break}case"src":case"href":if(o===""&&(t!=="a"||r!=="href")){e.removeAttribute(r);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(r);break}o=Po(""+o),e.setAttribute(r,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof v=="function"&&(r==="formAction"?(t!=="input"&&Ot(e,t,"name",f.name,f,null),Ot(e,t,"formEncType",f.formEncType,f,null),Ot(e,t,"formMethod",f.formMethod,f,null),Ot(e,t,"formTarget",f.formTarget,f,null)):(Ot(e,t,"encType",f.encType,f,null),Ot(e,t,"method",f.method,f,null),Ot(e,t,"target",f.target,f,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(r);break}o=Po(""+o),e.setAttribute(r,o);break;case"onClick":o!=null&&(e.onclick=xn);break;case"onScroll":o!=null&&bt("scroll",e);break;case"onScrollEnd":o!=null&&bt("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(i(61));if(r=o.__html,r!=null){if(f.children!=null)throw Error(i(60));e.innerHTML=r}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}r=Po(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(r,""+o):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":o===!0?e.setAttribute(r,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(r,o):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(r,o):e.removeAttribute(r);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(r):e.setAttribute(r,o);break;case"popover":bt("beforetoggle",e),bt("toggle",e),Bo(e,"popover",o);break;case"xlinkActuate":_n(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":_n(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":_n(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":_n(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":_n(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":_n(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":_n(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":_n(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":_n(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Bo(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=G2.get(r)||r,Bo(e,r,o))}}function Fh(e,t,r,o,f,v){switch(r){case"style":y0(e,o,v);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(i(61));if(r=o.__html,r!=null){if(f.children!=null)throw Error(i(60));e.innerHTML=r}}break;case"children":typeof o=="string"?vs(e,o):(typeof o=="number"||typeof o=="bigint")&&vs(e,""+o);break;case"onScroll":o!=null&&bt("scroll",e);break;case"onScrollEnd":o!=null&&bt("scrollend",e);break;case"onClick":o!=null&&(e.onclick=xn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!d0.hasOwnProperty(r))e:{if(r[0]==="o"&&r[1]==="n"&&(f=r.endsWith("Capture"),t=r.slice(2,f?r.length-7:void 0),v=e[pa]||null,v=v!=null?v[r]:null,typeof v=="function"&&e.removeEventListener(t,v,f),typeof o=="function")){typeof v!="function"&&v!==null&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(t,o,f);break e}r in e?e[r]=o:o===!0?e.setAttribute(r,""):Bo(e,r,o)}}}function $a(e,t,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":bt("error",e),bt("load",e);var o=!1,f=!1,v;for(v in r)if(r.hasOwnProperty(v)){var E=r[v];if(E!=null)switch(v){case"src":o=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,t));default:Ot(e,t,v,E,r,null)}}f&&Ot(e,t,"srcSet",r.srcSet,r,null),o&&Ot(e,t,"src",r.src,r,null);return;case"input":bt("invalid",e);var N=v=E=f=null,Y=null,de=null;for(o in r)if(r.hasOwnProperty(o)){var ye=r[o];if(ye!=null)switch(o){case"name":f=ye;break;case"type":E=ye;break;case"checked":Y=ye;break;case"defaultChecked":de=ye;break;case"value":v=ye;break;case"defaultValue":N=ye;break;case"children":case"dangerouslySetInnerHTML":if(ye!=null)throw Error(i(137,t));break;default:Ot(e,t,o,ye,r,null)}}p0(e,v,N,Y,de,E,f,!1);return;case"select":bt("invalid",e),o=E=v=null;for(f in r)if(r.hasOwnProperty(f)&&(N=r[f],N!=null))switch(f){case"value":v=N;break;case"defaultValue":E=N;break;case"multiple":o=N;default:Ot(e,t,f,N,r,null)}t=v,r=E,e.multiple=!!o,t!=null?gs(e,!!o,t,!1):r!=null&&gs(e,!!o,r,!0);return;case"textarea":bt("invalid",e),v=f=o=null;for(E in r)if(r.hasOwnProperty(E)&&(N=r[E],N!=null))switch(E){case"value":o=N;break;case"defaultValue":f=N;break;case"children":v=N;break;case"dangerouslySetInnerHTML":if(N!=null)throw Error(i(91));break;default:Ot(e,t,E,N,r,null)}v0(e,o,f,v);return;case"option":for(Y in r)if(r.hasOwnProperty(Y)&&(o=r[Y],o!=null))switch(Y){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ot(e,t,Y,o,r,null)}return;case"dialog":bt("beforetoggle",e),bt("toggle",e),bt("cancel",e),bt("close",e);break;case"iframe":case"object":bt("load",e);break;case"video":case"audio":for(o=0;o<ao.length;o++)bt(ao[o],e);break;case"image":bt("error",e),bt("load",e);break;case"details":bt("toggle",e);break;case"embed":case"source":case"link":bt("error",e),bt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(de in r)if(r.hasOwnProperty(de)&&(o=r[de],o!=null))switch(de){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,t));default:Ot(e,t,de,o,r,null)}return;default:if(lu(t)){for(ye in r)r.hasOwnProperty(ye)&&(o=r[ye],o!==void 0&&Fh(e,t,ye,o,r,void 0));return}}for(N in r)r.hasOwnProperty(N)&&(o=r[N],o!=null&&Ot(e,t,N,o,r,null))}function x5(e,t,r,o){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,v=null,E=null,N=null,Y=null,de=null,ye=null;for(be in r){var Se=r[be];if(r.hasOwnProperty(be)&&Se!=null)switch(be){case"checked":break;case"value":break;case"defaultValue":Y=Se;default:o.hasOwnProperty(be)||Ot(e,t,be,null,o,Se)}}for(var fe in o){var be=o[fe];if(Se=r[fe],o.hasOwnProperty(fe)&&(be!=null||Se!=null))switch(fe){case"type":v=be;break;case"name":f=be;break;case"checked":de=be;break;case"defaultChecked":ye=be;break;case"value":E=be;break;case"defaultValue":N=be;break;case"children":case"dangerouslySetInnerHTML":if(be!=null)throw Error(i(137,t));break;default:be!==Se&&Ot(e,t,fe,be,o,Se)}}ru(e,E,N,Y,de,ye,v,f);return;case"select":be=E=N=fe=null;for(v in r)if(Y=r[v],r.hasOwnProperty(v)&&Y!=null)switch(v){case"value":break;case"multiple":be=Y;default:o.hasOwnProperty(v)||Ot(e,t,v,null,o,Y)}for(f in o)if(v=o[f],Y=r[f],o.hasOwnProperty(f)&&(v!=null||Y!=null))switch(f){case"value":fe=v;break;case"defaultValue":N=v;break;case"multiple":E=v;default:v!==Y&&Ot(e,t,f,v,o,Y)}t=N,r=E,o=be,fe!=null?gs(e,!!r,fe,!1):!!o!=!!r&&(t!=null?gs(e,!!r,t,!0):gs(e,!!r,r?[]:"",!1));return;case"textarea":be=fe=null;for(N in r)if(f=r[N],r.hasOwnProperty(N)&&f!=null&&!o.hasOwnProperty(N))switch(N){case"value":break;case"children":break;default:Ot(e,t,N,null,o,f)}for(E in o)if(f=o[E],v=r[E],o.hasOwnProperty(E)&&(f!=null||v!=null))switch(E){case"value":fe=f;break;case"defaultValue":be=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(i(91));break;default:f!==v&&Ot(e,t,E,f,o,v)}g0(e,fe,be);return;case"option":for(var Ue in r)if(fe=r[Ue],r.hasOwnProperty(Ue)&&fe!=null&&!o.hasOwnProperty(Ue))switch(Ue){case"selected":e.selected=!1;break;default:Ot(e,t,Ue,null,o,fe)}for(Y in o)if(fe=o[Y],be=r[Y],o.hasOwnProperty(Y)&&fe!==be&&(fe!=null||be!=null))switch(Y){case"selected":e.selected=fe&&typeof fe!="function"&&typeof fe!="symbol";break;default:Ot(e,t,Y,fe,o,be)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var et in r)fe=r[et],r.hasOwnProperty(et)&&fe!=null&&!o.hasOwnProperty(et)&&Ot(e,t,et,null,o,fe);for(de in o)if(fe=o[de],be=r[de],o.hasOwnProperty(de)&&fe!==be&&(fe!=null||be!=null))switch(de){case"children":case"dangerouslySetInnerHTML":if(fe!=null)throw Error(i(137,t));break;default:Ot(e,t,de,fe,o,be)}return;default:if(lu(t)){for(var Ht in r)fe=r[Ht],r.hasOwnProperty(Ht)&&fe!==void 0&&!o.hasOwnProperty(Ht)&&Fh(e,t,Ht,void 0,o,fe);for(ye in o)fe=o[ye],be=r[ye],!o.hasOwnProperty(ye)||fe===be||fe===void 0&&be===void 0||Fh(e,t,ye,fe,o,be);return}}for(var ne in r)fe=r[ne],r.hasOwnProperty(ne)&&fe!=null&&!o.hasOwnProperty(ne)&&Ot(e,t,ne,null,o,fe);for(Se in o)fe=o[Se],be=r[Se],!o.hasOwnProperty(Se)||fe===be||fe==null&&be==null||Ot(e,t,Se,fe,o,be)}function _g(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function w5(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,r=performance.getEntriesByType("resource"),o=0;o<r.length;o++){var f=r[o],v=f.transferSize,E=f.initiatorType,N=f.duration;if(v&&N&&_g(E)){for(E=0,N=f.responseEnd,o+=1;o<r.length;o++){var Y=r[o],de=Y.startTime;if(de>N)break;var ye=Y.transferSize,Se=Y.initiatorType;ye&&_g(Se)&&(Y=Y.responseEnd,E+=ye*(Y<N?1:(N-de)/(Y-de)))}if(--o,t+=8*(v+E)/(f.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Gh=null,Xh=null;function Vc(e){return e.nodeType===9?e:e.ownerDocument}function xg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function wg(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Qh(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Kh=null;function z5(){var e=window.event;return e&&e.type==="popstate"?e===Kh?!1:(Kh=e,!0):(Kh=null,!1)}var zg=typeof setTimeout=="function"?setTimeout:void 0,S5=typeof clearTimeout=="function"?clearTimeout:void 0,Sg=typeof Promise=="function"?Promise:void 0,M5=typeof queueMicrotask=="function"?queueMicrotask:typeof Sg<"u"?function(e){return Sg.resolve(null).then(e).catch(E5)}:zg;function E5(e){setTimeout(function(){throw e})}function ur(e){return e==="head"}function Mg(e,t){var r=t,o=0;do{var f=r.nextSibling;if(e.removeChild(r),f&&f.nodeType===8)if(r=f.data,r==="/$"||r==="/&"){if(o===0){e.removeChild(f),Gs(t);return}o--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")o++;else if(r==="html")no(e.ownerDocument.documentElement);else if(r==="head"){r=e.ownerDocument.head,no(r);for(var v=r.firstChild;v;){var E=v.nextSibling,N=v.nodeName;v[ms]||N==="SCRIPT"||N==="STYLE"||N==="LINK"&&v.rel.toLowerCase()==="stylesheet"||r.removeChild(v),v=E}}else r==="body"&&no(e.ownerDocument.body);r=f}while(r);Gs(t)}function Eg(e,t){var r=e;e=0;do{var o=r.nextSibling;if(r.nodeType===1?t?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(t?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),o&&o.nodeType===8)if(r=o.data,r==="/$"){if(e===0)break;e--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||e++;r=o}while(r)}function Wh(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var r=t;switch(t=t.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":Wh(r),iu(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}e.removeChild(r)}}function T5(e,t,r,o){for(;e.nodeType===1;){var f=r;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[ms])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(v=e.getAttribute("rel"),v==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(v!==f.rel||e.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||e.getAttribute("title")!==(f.title==null?null:f.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(v=e.getAttribute("src"),(v!==(f.src==null?null:f.src)||e.getAttribute("type")!==(f.type==null?null:f.type)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&v&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var v=f.name==null?null:""+f.name;if(f.type==="hidden"&&e.getAttribute("name")===v)return e}else return e;if(e=Di(e.nextSibling),e===null)break}return null}function C5(e,t,r){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!r||(e=Di(e.nextSibling),e===null))return null;return e}function Tg(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Di(e.nextSibling),e===null))return null;return e}function Jh(e){return e.data==="$?"||e.data==="$~"}function ef(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function A5(e,t){var r=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||r.readyState!=="loading")t();else{var o=function(){t(),r.removeEventListener("DOMContentLoaded",o)};r.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Di(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var tf=null;function Cg(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"||r==="/&"){if(t===0)return Di(e.nextSibling);t--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||t++}e=e.nextSibling}return null}function Ag(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(t===0)return e;t--}else r!=="/$"&&r!=="/&"||t++}e=e.previousSibling}return null}function kg(e,t,r){switch(t=Vc(r),e){case"html":if(e=t.documentElement,!e)throw Error(i(452));return e;case"head":if(e=t.head,!e)throw Error(i(453));return e;case"body":if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function no(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);iu(e)}var Oi=new Map,jg=new Set;function Lc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var $n=D.d;D.d={f:k5,r:j5,D:N5,C:D5,L:O5,m:H5,X:$5,S:R5,M:V5};function k5(){var e=$n.f(),t=kc();return e||t}function j5(e){var t=ce(e);t!==null&&t.tag===5&&t.type==="form"?Gp(t):$n.r(e)}var qs=typeof document>"u"?null:document;function Ng(e,t,r){var o=qs;if(o&&typeof t=="string"&&t){var f=Ei(t);f='link[rel="'+e+'"][href="'+f+'"]',typeof r=="string"&&(f+='[crossorigin="'+r+'"]'),jg.has(f)||(jg.add(f),e={rel:e,crossOrigin:r,href:t},o.querySelector(f)===null&&(t=o.createElement("link"),$a(t,"link",e),Aa(t),o.head.appendChild(t)))}}function N5(e){$n.D(e),Ng("dns-prefetch",e,null)}function D5(e,t){$n.C(e,t),Ng("preconnect",e,t)}function O5(e,t,r){$n.L(e,t,r);var o=qs;if(o&&e&&t){var f='link[rel="preload"][as="'+Ei(t)+'"]';t==="image"&&r&&r.imageSrcSet?(f+='[imagesrcset="'+Ei(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(f+='[imagesizes="'+Ei(r.imageSizes)+'"]')):f+='[href="'+Ei(e)+'"]';var v=f;switch(t){case"style":v=Ys(e);break;case"script":v=Fs(e)}Oi.has(v)||(e=u({rel:"preload",href:t==="image"&&r&&r.imageSrcSet?void 0:e,as:t},r),Oi.set(v,e),o.querySelector(f)!==null||t==="style"&&o.querySelector(ro(v))||t==="script"&&o.querySelector(so(v))||(t=o.createElement("link"),$a(t,"link",e),Aa(t),o.head.appendChild(t)))}}function H5(e,t){$n.m(e,t);var r=qs;if(r&&e){var o=t&&typeof t.as=="string"?t.as:"script",f='link[rel="modulepreload"][as="'+Ei(o)+'"][href="'+Ei(e)+'"]',v=f;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":v=Fs(e)}if(!Oi.has(v)&&(e=u({rel:"modulepreload",href:e},t),Oi.set(v,e),r.querySelector(f)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(so(v)))return}o=r.createElement("link"),$a(o,"link",e),Aa(o),r.head.appendChild(o)}}}function R5(e,t,r){$n.S(e,t,r);var o=qs;if(o&&e){var f=Si(o).hoistableStyles,v=Ys(e);t=t||"default";var E=f.get(v);if(!E){var N={loading:0,preload:null};if(E=o.querySelector(ro(v)))N.loading=5;else{e=u({rel:"stylesheet",href:e,"data-precedence":t},r),(r=Oi.get(v))&&af(e,r);var Y=E=o.createElement("link");Aa(Y),$a(Y,"link",e),Y._p=new Promise(function(de,ye){Y.onload=de,Y.onerror=ye}),Y.addEventListener("load",function(){N.loading|=1}),Y.addEventListener("error",function(){N.loading|=2}),N.loading|=4,Bc(E,t,o)}E={type:"stylesheet",instance:E,count:1,state:N},f.set(v,E)}}}function $5(e,t){$n.X(e,t);var r=qs;if(r&&e){var o=Si(r).hoistableScripts,f=Fs(e),v=o.get(f);v||(v=r.querySelector(so(f)),v||(e=u({src:e,async:!0},t),(t=Oi.get(f))&&nf(e,t),v=r.createElement("script"),Aa(v),$a(v,"link",e),r.head.appendChild(v)),v={type:"script",instance:v,count:1,state:null},o.set(f,v))}}function V5(e,t){$n.M(e,t);var r=qs;if(r&&e){var o=Si(r).hoistableScripts,f=Fs(e),v=o.get(f);v||(v=r.querySelector(so(f)),v||(e=u({src:e,async:!0,type:"module"},t),(t=Oi.get(f))&&nf(e,t),v=r.createElement("script"),Aa(v),$a(v,"link",e),r.head.appendChild(v)),v={type:"script",instance:v,count:1,state:null},o.set(f,v))}}function Dg(e,t,r,o){var f=(f=se.current)?Lc(f):null;if(!f)throw Error(i(446));switch(e){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(t=Ys(r.href),r=Si(f).hoistableStyles,o=r.get(t),o||(o={type:"style",instance:null,count:0,state:null},r.set(t,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){e=Ys(r.href);var v=Si(f).hoistableStyles,E=v.get(e);if(E||(f=f.ownerDocument||f,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},v.set(e,E),(v=f.querySelector(ro(e)))&&!v._p&&(E.instance=v,E.state.loading=5),Oi.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},Oi.set(e,r),v||L5(f,e,r,E.state))),t&&o===null)throw Error(i(528,""));return E}if(t&&o!==null)throw Error(i(529,""));return null;case"script":return t=r.async,r=r.src,typeof r=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Fs(r),r=Si(f).hoistableScripts,o=r.get(t),o||(o={type:"script",instance:null,count:0,state:null},r.set(t,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Ys(e){return'href="'+Ei(e)+'"'}function ro(e){return'link[rel="stylesheet"]['+e+"]"}function Og(e){return u({},e,{"data-precedence":e.precedence,precedence:null})}function L5(e,t,r,o){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?o.loading=1:(t=e.createElement("link"),o.preload=t,t.addEventListener("load",function(){return o.loading|=1}),t.addEventListener("error",function(){return o.loading|=2}),$a(t,"link",r),Aa(t),e.head.appendChild(t))}function Fs(e){return'[src="'+Ei(e)+'"]'}function so(e){return"script[async]"+e}function Hg(e,t,r){if(t.count++,t.instance===null)switch(t.type){case"style":var o=e.querySelector('style[data-href~="'+Ei(r.href)+'"]');if(o)return t.instance=o,Aa(o),o;var f=u({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),Aa(o),$a(o,"style",f),Bc(o,r.precedence,e),t.instance=o;case"stylesheet":f=Ys(r.href);var v=e.querySelector(ro(f));if(v)return t.state.loading|=4,t.instance=v,Aa(v),v;o=Og(r),(f=Oi.get(f))&&af(o,f),v=(e.ownerDocument||e).createElement("link"),Aa(v);var E=v;return E._p=new Promise(function(N,Y){E.onload=N,E.onerror=Y}),$a(v,"link",o),t.state.loading|=4,Bc(v,r.precedence,e),t.instance=v;case"script":return v=Fs(r.src),(f=e.querySelector(so(v)))?(t.instance=f,Aa(f),f):(o=r,(f=Oi.get(v))&&(o=u({},r),nf(o,f)),e=e.ownerDocument||e,f=e.createElement("script"),Aa(f),$a(f,"link",o),e.head.appendChild(f),t.instance=f);case"void":return null;default:throw Error(i(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(o=t.instance,t.state.loading|=4,Bc(o,r.precedence,e));return t.instance}function Bc(e,t,r){for(var o=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=o.length?o[o.length-1]:null,v=f,E=0;E<o.length;E++){var N=o[E];if(N.dataset.precedence===t)v=N;else if(v!==f)break}v?v.parentNode.insertBefore(e,v.nextSibling):(t=r.nodeType===9?r.head:r,t.insertBefore(e,t.firstChild))}function af(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function nf(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Uc=null;function Rg(e,t,r){if(Uc===null){var o=new Map,f=Uc=new Map;f.set(r,o)}else f=Uc,o=f.get(r),o||(o=new Map,f.set(r,o));if(o.has(e))return o;for(o.set(e,null),r=r.getElementsByTagName(e),f=0;f<r.length;f++){var v=r[f];if(!(v[ms]||v[Wt]||e==="link"&&v.getAttribute("rel")==="stylesheet")&&v.namespaceURI!=="http://www.w3.org/2000/svg"){var E=v.getAttribute(t)||"";E=e+E;var N=o.get(E);N?N.push(v):o.set(E,[v])}}return o}function $g(e,t,r){e=e.ownerDocument||e,e.head.insertBefore(r,t==="title"?e.querySelector("head > title"):null)}function B5(e,t,r){if(r===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Vg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function U5(e,t,r,o){if(r.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var f=Ys(o.href),v=t.querySelector(ro(f));if(v){t=v._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Ic.bind(e),t.then(e,e)),r.state.loading|=4,r.instance=v,Aa(v);return}v=t.ownerDocument||t,o=Og(o),(f=Oi.get(f))&&af(o,f),v=v.createElement("link"),Aa(v);var E=v;E._p=new Promise(function(N,Y){E.onload=N,E.onerror=Y}),$a(v,"link",o),r.instance=v}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(r,t),(t=r.state.preload)&&(r.state.loading&3)===0&&(e.count++,r=Ic.bind(e),t.addEventListener("load",r),t.addEventListener("error",r))}}var rf=0;function I5(e,t){return e.stylesheets&&e.count===0&&Zc(e,e.stylesheets),0<e.count||0<e.imgCount?function(r){var o=setTimeout(function(){if(e.stylesheets&&Zc(e,e.stylesheets),e.unsuspend){var v=e.unsuspend;e.unsuspend=null,v()}},6e4+t);0<e.imgBytes&&rf===0&&(rf=62500*w5());var f=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Zc(e,e.stylesheets),e.unsuspend)){var v=e.unsuspend;e.unsuspend=null,v()}},(e.imgBytes>rf?50:800)+t);return e.unsuspend=r,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(f)}}:null}function Ic(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Zc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Pc=null;function Zc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Pc=new Map,t.forEach(P5,e),Pc=null,Ic.call(e))}function P5(e,t){if(!(t.state.loading&4)){var r=Pc.get(e);if(r)var o=r.get(null);else{r=new Map,Pc.set(e,r);for(var f=e.querySelectorAll("link[data-precedence],style[data-precedence]"),v=0;v<f.length;v++){var E=f[v];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(r.set(E.dataset.precedence,E),o=E)}o&&r.set(null,o)}f=t.instance,E=f.getAttribute("data-precedence"),v=r.get(E)||o,v===o&&r.set(null,f),r.set(E,f),this.count++,o=Ic.bind(this),f.addEventListener("load",o),f.addEventListener("error",o),v?v.parentNode.insertBefore(f,v.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(f,e.firstChild)),t.state.loading|=4}}var lo={$$typeof:R,Provider:null,Consumer:null,_currentValue:P,_currentValue2:P,_threadCount:0};function Z5(e,t,r,o,f,v,E,N,Y){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Kt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Kt(0),this.hiddenUpdates=Kt(null),this.identifierPrefix=o,this.onUncaughtError=f,this.onCaughtError=v,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=Y,this.incompleteTransitions=new Map}function Lg(e,t,r,o,f,v,E,N,Y,de,ye,Se){return e=new Z5(e,t,r,E,Y,de,ye,Se,N),t=1,v===!0&&(t|=24),v=ri(3,null,null,t),e.current=v,v.stateNode=e,t=$u(),t.refCount++,e.pooledCache=t,t.refCount++,v.memoizedState={element:o,isDehydrated:r,cache:t},Uu(v),e}function Bg(e){return e?(e=Ss,e):Ss}function Ug(e,t,r,o,f,v){f=Bg(f),o.context===null?o.context=f:o.pendingContext=f,o=er(t),o.payload={element:r},v=v===void 0?null:v,v!==null&&(o.callback=v),r=tr(e,o,t),r!==null&&(Ja(r,e,t),Ll(r,e,t))}function Ig(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function sf(e,t){Ig(e,t),(e=e.alternate)&&Ig(e,t)}function Pg(e){if(e.tag===13||e.tag===31){var t=Vr(e,67108864);t!==null&&Ja(t,e,67108864),sf(e,67108864)}}function Zg(e){if(e.tag===13||e.tag===31){var t=di();t=Xe(t);var r=Vr(e,t);r!==null&&Ja(r,e,t),sf(e,t)}}var qc=!0;function q5(e,t,r,o){var f=k.T;k.T=null;var v=D.p;try{D.p=2,lf(e,t,r,o)}finally{D.p=v,k.T=f}}function Y5(e,t,r,o){var f=k.T;k.T=null;var v=D.p;try{D.p=8,lf(e,t,r,o)}finally{D.p=v,k.T=f}}function lf(e,t,r,o){if(qc){var f=of(o);if(f===null)Yh(e,t,o,Yc,r),Yg(e,o);else if(G5(f,e,t,r,o))o.stopPropagation();else if(Yg(e,o),t&4&&-1<F5.indexOf(e)){for(;f!==null;){var v=ce(f);if(v!==null)switch(v.tag){case 3:if(v=v.stateNode,v.current.memoizedState.isDehydrated){var E=ta(v.pendingLanes);if(E!==0){var N=v;for(N.pendingLanes|=2,N.entangledLanes|=2;E;){var Y=1<<31-Ct(E);N.entanglements[1]|=Y,E&=~Y}sn(v),(At&6)===0&&(Cc=je()+500,to(0))}}break;case 31:case 13:N=Vr(v,2),N!==null&&Ja(N,v,2),kc(),sf(v,2)}if(v=of(o),v===null&&Yh(e,t,o,Yc,r),v===f)break;f=v}f!==null&&o.stopPropagation()}else Yh(e,t,o,null,r)}}function of(e){return e=cu(e),cf(e)}var Yc=null;function cf(e){if(Yc=null,e=Ne(e),e!==null){var t=c(e);if(t===null)e=null;else{var r=t.tag;if(r===13){if(e=d(t),e!==null)return e;e=null}else if(r===31){if(e=h(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Yc=e,null}function qg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Te()){case We:return 2;case sa:return 8;case _a:case dt:return 32;case Ft:return 268435456;default:return 32}default:return 32}}var df=!1,hr=null,fr=null,mr=null,oo=new Map,co=new Map,pr=[],F5="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Yg(e,t){switch(e){case"focusin":case"focusout":hr=null;break;case"dragenter":case"dragleave":fr=null;break;case"mouseover":case"mouseout":mr=null;break;case"pointerover":case"pointerout":oo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":co.delete(t.pointerId)}}function uo(e,t,r,o,f,v){return e===null||e.nativeEvent!==v?(e={blockedOn:t,domEventName:r,eventSystemFlags:o,nativeEvent:v,targetContainers:[f]},t!==null&&(t=ce(t),t!==null&&Pg(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,f!==null&&t.indexOf(f)===-1&&t.push(f),e)}function G5(e,t,r,o,f){switch(t){case"focusin":return hr=uo(hr,e,t,r,o,f),!0;case"dragenter":return fr=uo(fr,e,t,r,o,f),!0;case"mouseover":return mr=uo(mr,e,t,r,o,f),!0;case"pointerover":var v=f.pointerId;return oo.set(v,uo(oo.get(v)||null,e,t,r,o,f)),!0;case"gotpointercapture":return v=f.pointerId,co.set(v,uo(co.get(v)||null,e,t,r,o,f)),!0}return!1}function Fg(e){var t=Ne(e.target);if(t!==null){var r=c(t);if(r!==null){if(t=r.tag,t===13){if(t=d(r),t!==null){e.blockedOn=t,za(e.priority,function(){Zg(r)});return}}else if(t===31){if(t=h(r),t!==null){e.blockedOn=t,za(e.priority,function(){Zg(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Fc(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=of(e.nativeEvent);if(r===null){r=e.nativeEvent;var o=new r.constructor(r.type,r);ou=o,r.target.dispatchEvent(o),ou=null}else return t=ce(r),t!==null&&Pg(t),e.blockedOn=r,!1;t.shift()}return!0}function Gg(e,t,r){Fc(e)&&r.delete(t)}function X5(){df=!1,hr!==null&&Fc(hr)&&(hr=null),fr!==null&&Fc(fr)&&(fr=null),mr!==null&&Fc(mr)&&(mr=null),oo.forEach(Gg),co.forEach(Gg)}function Gc(e,t){e.blockedOn===t&&(e.blockedOn=null,df||(df=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,X5)))}var Xc=null;function Xg(e){Xc!==e&&(Xc=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Xc===e&&(Xc=null);for(var t=0;t<e.length;t+=3){var r=e[t],o=e[t+1],f=e[t+2];if(typeof o!="function"){if(cf(o||r)===null)continue;break}var v=ce(r);v!==null&&(e.splice(t,3),t-=3,lh(v,{pending:!0,data:f,method:r.method,action:o},o,f))}}))}function Gs(e){function t(Y){return Gc(Y,e)}hr!==null&&Gc(hr,e),fr!==null&&Gc(fr,e),mr!==null&&Gc(mr,e),oo.forEach(t),co.forEach(t);for(var r=0;r<pr.length;r++){var o=pr[r];o.blockedOn===e&&(o.blockedOn=null)}for(;0<pr.length&&(r=pr[0],r.blockedOn===null);)Fg(r),r.blockedOn===null&&pr.shift();if(r=(e.ownerDocument||e).$$reactFormReplay,r!=null)for(o=0;o<r.length;o+=3){var f=r[o],v=r[o+1],E=f[pa]||null;if(typeof v=="function")E||Xg(r);else if(E){var N=null;if(v&&v.hasAttribute("formAction")){if(f=v,E=v[pa]||null)N=E.formAction;else if(cf(f)!==null)continue}else N=E.action;typeof N=="function"?r[o+1]=N:(r.splice(o,3),o-=3),Xg(r)}}}function Qg(){function e(v){v.canIntercept&&v.info==="react-transition"&&v.intercept({handler:function(){return new Promise(function(E){return f=E})},focusReset:"manual",scroll:"manual"})}function t(){f!==null&&(f(),f=null),o||setTimeout(r,20)}function r(){if(!o&&!navigation.transition){var v=navigation.currentEntry;v&&v.url!=null&&navigation.navigate(v.url,{state:v.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,f=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(r,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),f!==null&&(f(),f=null)}}}function uf(e){this._internalRoot=e}Qc.prototype.render=uf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var r=t.current,o=di();Ug(r,o,e,t,null,null)},Qc.prototype.unmount=uf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ug(e.current,2,null,e,null,null),kc(),t[zi]=null}};function Qc(e){this._internalRoot=e}Qc.prototype.unstable_scheduleHydration=function(e){if(e){var t=wi();e={blockedOn:null,target:e,priority:t};for(var r=0;r<pr.length&&t!==0&&t<pr[r].priority;r++);pr.splice(r,0,e),r===0&&Fg(e)}};var Kg=n.version;if(Kg!=="19.2.0")throw Error(i(527,Kg,"19.2.0"));D.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(i(188)):(e=Object.keys(e).join(","),Error(i(268,e)));return e=p(t),e=e!==null?m(e):null,e=e===null?null:e.stateNode,e};var Q5={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:k,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Kc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Kc.isDisabled&&Kc.supportsFiber)try{ea=Kc.inject(Q5),kt=Kc}catch{}}return fo.createRoot=function(e,t){if(!l(e))throw Error(i(299));var r=!1,o="",f=n1,v=r1,E=s1;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onUncaughtError!==void 0&&(f=t.onUncaughtError),t.onCaughtError!==void 0&&(v=t.onCaughtError),t.onRecoverableError!==void 0&&(E=t.onRecoverableError)),t=Lg(e,1,!1,null,null,r,o,null,f,v,E,Qg),e[zi]=t.current,qh(e),new uf(t)},fo.hydrateRoot=function(e,t,r){if(!l(e))throw Error(i(299));var o=!1,f="",v=n1,E=r1,N=s1,Y=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(f=r.identifierPrefix),r.onUncaughtError!==void 0&&(v=r.onUncaughtError),r.onCaughtError!==void 0&&(E=r.onCaughtError),r.onRecoverableError!==void 0&&(N=r.onRecoverableError),r.formState!==void 0&&(Y=r.formState)),t=Lg(e,1,!0,t,r??null,o,f,Y,v,E,N,Qg),t.context=Bg(null),r=t.current,o=di(),o=Xe(o),f=er(o),f.callback=null,tr(r,f,o),r=o,t.current.lanes=r,gt(t,r),sn(t),e[zi]=t.current,qh(e),new Qc(t)},fo.version="19.2.0",fo}var cv;function o_(){if(cv)return ff.exports;cv=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(n){console.error(n)}}return a(),ff.exports=l_(),ff.exports}var c_=o_(),y=pm();const Ae=O3(y),gm=e_({__proto__:null,default:Ae},[y]),d_=y.createContext(null),bf={didCatch:!1,error:null};class u_ extends y.Component{constructor(n){super(n),this.resetErrorBoundary=this.resetErrorBoundary.bind(this),this.state=bf}static getDerivedStateFromError(n){return{didCatch:!0,error:n}}resetErrorBoundary(){const{error:n}=this.state;if(n!==null){for(var s,i,l=arguments.length,c=new Array(l),d=0;d<l;d++)c[d]=arguments[d];(s=(i=this.props).onReset)===null||s===void 0||s.call(i,{args:c,reason:"imperative-api"}),this.setState(bf)}}componentDidCatch(n,s){var i,l;(i=(l=this.props).onError)===null||i===void 0||i.call(l,n,s)}componentDidUpdate(n,s){const{didCatch:i}=this.state,{resetKeys:l}=this.props;if(i&&s.error!==null&&h_(n.resetKeys,l)){var c,d;(c=(d=this.props).onReset)===null||c===void 0||c.call(d,{next:l,prev:n.resetKeys,reason:"keys"}),this.setState(bf)}}render(){const{children:n,fallbackRender:s,FallbackComponent:i,fallback:l}=this.props,{didCatch:c,error:d}=this.state;let h=n;if(c){const g={error:d,resetErrorBoundary:this.resetErrorBoundary};if(typeof s=="function")h=s(g);else if(i)h=y.createElement(i,g);else if(l!==void 0)h=l;else throw d}return y.createElement(d_.Provider,{value:{didCatch:c,error:d,resetErrorBoundary:this.resetErrorBoundary}},h)}}function h_(){let a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return a.length!==n.length||a.some((s,i)=>!Object.is(s,n[i]))}const f_={SPARK_RUNTIME_LOADED:"sparkRuntimeLoaded"},dv={SPARK_KV_UPDATED:"sparkKvUpdated",SPARK_KV_DELETED:"sparkKvDeleted"},m_=a=>{};class wo{async getKeys(){const n=await fetch("/_spark/kv",{method:"GET"});if(!n.ok){const i=`Failed to fetch KV keys: ${n.statusText}`;return Promise.reject(new Error(i))}let s;try{s=await n.json()}catch{const l="Failed to parse KV keys response";return Promise.reject(new Error(l))}if(!Array.isArray(s)){const i="KV keys response is not an array";return Promise.reject(new Error(i))}return s}async getAll(){const n=await this.getKeys(),s={},i=await Promise.all(n.map(l=>this.getKey(l)));return n.forEach((l,c)=>{const d=i[c];d!==void 0&&(s[l]=d)}),s}async getKey(n){const s=await fetch(`/_spark/kv/${encodeURIComponent(n)}`,{method:"GET",headers:{"Content-Type":"text/plain"}});if(!s.ok){const l=`Failed to fetch KV key: ${s.statusText}`;return s.status===404?void 0:Promise.reject(new Error(l))}const i=await s.text();try{return JSON.parse(i)}catch{const c="Failed to parse KV key response";return Promise.reject(new Error(c))}}async getOrSetKey(n,s){const i=await this.getKey(n);if(i!==void 0)return i;const l=await fetch(`/_spark/kv/${encodeURIComponent(n)}`,{method:"POST",headers:{"Content-Type":"text/plain","X-Spark-Initial":"true"},body:JSON.stringify(s)});if(!l.ok){const c=`Failed to set default value for key: ${l.statusText}`;return Promise.reject(new Error(c))}return s}async setKey(n,s){const i=await fetch(`/_spark/kv/${encodeURIComponent(n)}`,{method:"POST",headers:{"Content-Type":"text/plain","X-Spark-Initial":"false"},body:JSON.stringify(s)});if(!i.ok){const l=`Failed to set key: ${i.statusText}`;return Promise.reject(new Error(l))}m_({payload:{value:JSON.stringify(s)}})}async deleteKey(n){await fetch(`/_spark/kv/${encodeURIComponent(n)}`,{method:"DELETE"})}}const p_={"ai21-jamba-instruct":"ai21-labs/ai21-jamba-instruct","cohere-command-r-plus":"cohere/cohere-command-r-plus","cohere-command-r":"cohere/cohere-command-r","gpt-4o-mini":"openai/gpt-4o-mini","gpt-4o":"openai/gpt-4o","meta-llama-3.1-405b-instruct":"meta/meta-llama-3.1-405b-instruct","meta-llama-3.1-70b-instruct":"meta/meta-llama-3.1-70b-instruct","meta-llama-3.1-8b-instruct":"meta/meta-llama-3.1-8b-instruct","meta-llama-3-70b-instruct":"meta/meta-llama-3-70b-instruct","meta-llama-3-8b-instruct":"meta/meta-llama-3-8b-instruct","mistral-large-2407":"mistral-ai/mistral-large-2407","mistral-large":"mistral-ai/mistral-large","mistral-nemo":"mistral-ai/mistral-nemo","mistral-small":"mistral-ai/mistral-small","phi-3-medium-128K-instruct":"microsoft/phi-3-medium-128K-instruct","phi-3-medium-4K-instruct":"microsoft/phi-3-medium-4K-instruct","phi-3-mini-128K-instruct":"microsoft/phi-3-mini-128K-instruct","phi-3-mini-4K-instruct":"microsoft/phi-3-mini-4K-instruct","phi-3-small-128K-instruct":"microsoft/phi-3-small-128K-instruct","phi-3-small-8K-instruct":"microsoft/phi-3-small-8K-instruct"},g_=a=>a?p_[a]||a:"openai/gpt-4o";async function v_(a,n,s){const i=g_(n),d=await fetch("/_spark/llm",{method:"POST",body:JSON.stringify({messages:[{role:"system",content:"You are a helpful assistant."},{role:"user",content:a}],temperature:1,top_p:1,max_tokens:1e3,model:i,response_format:{type:s?"json_object":"text"}}),headers:{"Content-Type":"application/json"}});if(!d.ok){const p=await d.text();throw new Error(`LLM request failed: ${d.status} ${d.statusText} - ${p}`)}return(await d.json()).choices[0].message.content}function b_(a,...n){return a.reduce((s,i,l)=>s+i+(n[l]||""),"")}let Wc=null;async function y_(){try{return Wc||(Wc=await(await fetch("/_spark/user")).json(),Wc)}catch(a){return console.error("Failed to fetch user data:",a),null}}var j3,N3;const R3={url:(j3=window==null?void 0:window.location)==null?void 0:j3.href,load_ms:(N3=window==null?void 0:window.performance)==null?void 0:N3.now()};window.parent.postMessage({type:f_.SPARK_RUNTIME_LOADED,payload:R3},"*");fetch("/_spark/loaded",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(R3)});const __={keys:async()=>new wo().getKeys(),get:async a=>new wo().getKey(a),set:async(a,n)=>new wo().setKey(a,n),delete:async a=>new wo().deleteKey(a)};window.spark={llmPrompt:b_,llm:v_,user:y_,kv:__};function yf(a,n){const[s,i]=y.useState(n),l=y.useMemo(()=>new wo,[]),c=y.useCallback(async g=>{switch(g.data.type){case dv.SPARK_KV_DELETED:g.data.payload.key===a&&i(void 0);return;case dv.SPARK_KV_UPDATED:g.data.payload.key===a&&i(await l.getKey(a));return}},[a]);y.useEffect(()=>{},[a,c]),y.useEffect(()=>{async function g(){i(await l.getOrSetKey(a,n))}g()},[l]);const d=y.useCallback(()=>{l.deleteKey(a),i(void 0)},[a]),h=y.useCallback(g=>{i(p=>{const m=typeof g=="function"?g(p):g;return l.setKey(a,m),m})},[a,l]);return[s,h,d]}var x_=(a,n,s,i,l,c,d,h)=>{let g=document.documentElement,p=["light","dark"];function m(w){(Array.isArray(a)?a:[a]).forEach(z=>{let _=z==="class",b=_&&c?l.map(x=>c[x]||x):l;_?(g.classList.remove(...b),g.classList.add(c&&c[w]?c[w]:w)):g.setAttribute(z,w)}),u(w)}function u(w){h&&p.includes(w)&&(g.style.colorScheme=w)}function S(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}if(i)m(i);else try{let w=localStorage.getItem(n)||s,z=d&&w==="system"?S():w;m(z)}catch{}},w_=y.createContext(void 0),z_={setTheme:a=>{},themes:[]},S_=()=>{var a;return(a=y.useContext(w_))!=null?a:z_};y.memo(({forcedTheme:a,storageKey:n,attribute:s,enableSystem:i,enableColorScheme:l,defaultTheme:c,value:d,themes:h,nonce:g,scriptProps:p})=>{let m=JSON.stringify([s,n,c,a,h,d,i,l]).slice(1,-1);return y.createElement("script",{...p,suppressHydrationWarning:!0,nonce:typeof window>"u"?g:"",dangerouslySetInnerHTML:{__html:`(${x_.toString()})(${m})`}})});var Oo=H3();const $3=O3(Oo);function M_(a){if(typeof document>"u")return;let n=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",n.appendChild(s),s.styleSheet?s.styleSheet.cssText=a:s.appendChild(document.createTextNode(a))}const E_=a=>{switch(a){case"success":return A_;case"info":return j_;case"warning":return k_;case"error":return N_;default:return null}},T_=Array(12).fill(0),C_=({visible:a,className:n})=>Ae.createElement("div",{className:["sonner-loading-wrapper",n].filter(Boolean).join(" "),"data-visible":a},Ae.createElement("div",{className:"sonner-spinner"},T_.map((s,i)=>Ae.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${i}`})))),A_=Ae.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},Ae.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),k_=Ae.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},Ae.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),j_=Ae.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},Ae.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),N_=Ae.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},Ae.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),D_=Ae.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},Ae.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),Ae.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),O_=()=>{const[a,n]=Ae.useState(document.hidden);return Ae.useEffect(()=>{const s=()=>{n(document.hidden)};return document.addEventListener("visibilitychange",s),()=>window.removeEventListener("visibilitychange",s)},[]),a};let Qf=1;class H_{constructor(){this.subscribe=n=>(this.subscribers.push(n),()=>{const s=this.subscribers.indexOf(n);this.subscribers.splice(s,1)}),this.publish=n=>{this.subscribers.forEach(s=>s(n))},this.addToast=n=>{this.publish(n),this.toasts=[...this.toasts,n]},this.create=n=>{var s;const{message:i,...l}=n,c=typeof(n==null?void 0:n.id)=="number"||((s=n.id)==null?void 0:s.length)>0?n.id:Qf++,d=this.toasts.find(g=>g.id===c),h=n.dismissible===void 0?!0:n.dismissible;return this.dismissedToasts.has(c)&&this.dismissedToasts.delete(c),d?this.toasts=this.toasts.map(g=>g.id===c?(this.publish({...g,...n,id:c,title:i}),{...g,...n,id:c,dismissible:h,title:i}):g):this.addToast({title:i,...l,dismissible:h,id:c}),c},this.dismiss=n=>(n?(this.dismissedToasts.add(n),requestAnimationFrame(()=>this.subscribers.forEach(s=>s({id:n,dismiss:!0})))):this.toasts.forEach(s=>{this.subscribers.forEach(i=>i({id:s.id,dismiss:!0}))}),n),this.message=(n,s)=>this.create({...s,message:n}),this.error=(n,s)=>this.create({...s,message:n,type:"error"}),this.success=(n,s)=>this.create({...s,type:"success",message:n}),this.info=(n,s)=>this.create({...s,type:"info",message:n}),this.warning=(n,s)=>this.create({...s,type:"warning",message:n}),this.loading=(n,s)=>this.create({...s,type:"loading",message:n}),this.promise=(n,s)=>{if(!s)return;let i;s.loading!==void 0&&(i=this.create({...s,promise:n,type:"loading",message:s.loading,description:typeof s.description!="function"?s.description:void 0}));const l=Promise.resolve(n instanceof Function?n():n);let c=i!==void 0,d;const h=l.then(async p=>{if(d=["resolve",p],Ae.isValidElement(p))c=!1,this.create({id:i,type:"default",message:p});else if($_(p)&&!p.ok){c=!1;const u=typeof s.error=="function"?await s.error(`HTTP error! status: ${p.status}`):s.error,S=typeof s.description=="function"?await s.description(`HTTP error! status: ${p.status}`):s.description,z=typeof u=="object"&&!Ae.isValidElement(u)?u:{message:u};this.create({id:i,type:"error",description:S,...z})}else if(p instanceof Error){c=!1;const u=typeof s.error=="function"?await s.error(p):s.error,S=typeof s.description=="function"?await s.description(p):s.description,z=typeof u=="object"&&!Ae.isValidElement(u)?u:{message:u};this.create({id:i,type:"error",description:S,...z})}else if(s.success!==void 0){c=!1;const u=typeof s.success=="function"?await s.success(p):s.success,S=typeof s.description=="function"?await s.description(p):s.description,z=typeof u=="object"&&!Ae.isValidElement(u)?u:{message:u};this.create({id:i,type:"success",description:S,...z})}}).catch(async p=>{if(d=["reject",p],s.error!==void 0){c=!1;const m=typeof s.error=="function"?await s.error(p):s.error,u=typeof s.description=="function"?await s.description(p):s.description,w=typeof m=="object"&&!Ae.isValidElement(m)?m:{message:m};this.create({id:i,type:"error",description:u,...w})}}).finally(()=>{c&&(this.dismiss(i),i=void 0),s.finally==null||s.finally.call(s)}),g=()=>new Promise((p,m)=>h.then(()=>d[0]==="reject"?m(d[1]):p(d[1])).catch(m));return typeof i!="string"&&typeof i!="number"?{unwrap:g}:Object.assign(i,{unwrap:g})},this.custom=(n,s)=>{const i=(s==null?void 0:s.id)||Qf++;return this.create({jsx:n(i),id:i,...s}),i},this.getActiveToasts=()=>this.toasts.filter(n=>!this.dismissedToasts.has(n.id)),this.subscribers=[],this.toasts=[],this.dismissedToasts=new Set}}const ti=new H_,R_=(a,n)=>{const s=(n==null?void 0:n.id)||Qf++;return ti.addToast({title:a,...n,id:s}),s},$_=a=>a&&typeof a=="object"&&"ok"in a&&typeof a.ok=="boolean"&&"status"in a&&typeof a.status=="number",V_=R_,L_=()=>ti.toasts,B_=()=>ti.getActiveToasts(),vr=Object.assign(V_,{success:ti.success,info:ti.info,warning:ti.warning,error:ti.error,custom:ti.custom,message:ti.message,promise:ti.promise,dismiss:ti.dismiss,loading:ti.loading},{getHistory:L_,getToasts:B_});M_("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");function Jc(a){return a.label!==void 0}const U_=3,I_="24px",P_="16px",uv=4e3,Z_=356,q_=14,Y_=45,F_=200;function ln(...a){return a.filter(Boolean).join(" ")}function G_(a){const[n,s]=a.split("-"),i=[];return n&&i.push(n),s&&i.push(s),i}const X_=a=>{var n,s,i,l,c,d,h,g,p;const{invert:m,toast:u,unstyled:S,interacting:w,setHeights:z,visibleToasts:_,heights:b,index:x,toasts:O,expanded:R,removeToast:C,defaultRichColors:A,closeButton:I,style:H,cancelButtonStyle:$,actionButtonStyle:Z,className:he="",descriptionClassName:xe="",duration:V,position:T,gap:W,expandByDefault:ze,classNames:k,icons:D,closeButtonAriaLabel:P="Close toast"}=a,[ge,re]=Ae.useState(null),[j,G]=Ae.useState(null),[ee,ae]=Ae.useState(!1),[X,se]=Ae.useState(!1),[K,J]=Ae.useState(!1),[le,Ee]=Ae.useState(!1),[$e,ue]=Ae.useState(!1),[ie,Me]=Ae.useState(0),[Ke,Ge]=Ae.useState(0),Fe=Ae.useRef(u.duration||V||uv),ke=Ae.useRef(null),Ce=Ae.useRef(null),pe=x===0,te=x+1<=_,Oe=u.type,Qe=u.dismissible!==!1,je=u.className||"",Te=u.descriptionClassName||"",We=Ae.useMemo(()=>b.findIndex(_e=>_e.toastId===u.id)||0,[b,u.id]),sa=Ae.useMemo(()=>{var _e;return(_e=u.closeButton)!=null?_e:I},[u.closeButton,I]),_a=Ae.useMemo(()=>u.duration||V||uv,[u.duration,V]),dt=Ae.useRef(0),Ft=Ae.useRef(0),xa=Ae.useRef(0),Qt=Ae.useRef(null),[ea,kt]=T.split("-"),Bt=Ae.useMemo(()=>b.reduce((_e,me,Re)=>Re>=We?_e:_e+me.height,0),[b,We]),Ct=O_(),Ca=u.invert||m,fa=Oe==="loading";Ft.current=Ae.useMemo(()=>We*W+Bt,[We,Bt]),Ae.useEffect(()=>{Fe.current=_a},[_a]),Ae.useEffect(()=>{ae(!0)},[]),Ae.useEffect(()=>{const _e=Ce.current;if(_e){const me=_e.getBoundingClientRect().height;return Ge(me),z(Re=>[{toastId:u.id,height:me,position:u.position},...Re]),()=>z(Re=>Re.filter(Mt=>Mt.toastId!==u.id))}},[z,u.id]),Ae.useLayoutEffect(()=>{if(!ee)return;const _e=Ce.current,me=_e.style.height;_e.style.height="auto";const Re=_e.getBoundingClientRect().height;_e.style.height=me,Ge(Re),z(Mt=>Mt.find(gt=>gt.toastId===u.id)?Mt.map(gt=>gt.toastId===u.id?{...gt,height:Re}:gt):[{toastId:u.id,height:Re,position:u.position},...Mt])},[ee,u.title,u.description,z,u.id,u.jsx,u.action,u.cancel]);const Ut=Ae.useCallback(()=>{se(!0),Me(Ft.current),z(_e=>_e.filter(me=>me.toastId!==u.id)),setTimeout(()=>{C(u)},F_)},[u,C,z,Ft]);Ae.useEffect(()=>{if(u.promise&&Oe==="loading"||u.duration===1/0||u.type==="loading")return;let _e;return R||w||Ct?(()=>{if(xa.current<dt.current){const Mt=new Date().getTime()-dt.current;Fe.current=Fe.current-Mt}xa.current=new Date().getTime()})():(()=>{Fe.current!==1/0&&(dt.current=new Date().getTime(),_e=setTimeout(()=>{u.onAutoClose==null||u.onAutoClose.call(u,u),Ut()},Fe.current))})(),()=>clearTimeout(_e)},[R,w,u,Oe,Ct,Ut]),Ae.useEffect(()=>{u.delete&&(Ut(),u.onDismiss==null||u.onDismiss.call(u,u))},[Ut,u.delete]);function la(){var _e;if(D!=null&&D.loading){var me;return Ae.createElement("div",{className:ln(k==null?void 0:k.loader,u==null||(me=u.classNames)==null?void 0:me.loader,"sonner-loader"),"data-visible":Oe==="loading"},D.loading)}return Ae.createElement(C_,{className:ln(k==null?void 0:k.loader,u==null||(_e=u.classNames)==null?void 0:_e.loader),visible:Oe==="loading"})}const tt=u.icon||(D==null?void 0:D[Oe])||E_(Oe);var ma,ta;return Ae.createElement("li",{tabIndex:0,ref:Ce,className:ln(he,je,k==null?void 0:k.toast,u==null||(n=u.classNames)==null?void 0:n.toast,k==null?void 0:k.default,k==null?void 0:k[Oe],u==null||(s=u.classNames)==null?void 0:s[Oe]),"data-sonner-toast":"","data-rich-colors":(ma=u.richColors)!=null?ma:A,"data-styled":!(u.jsx||u.unstyled||S),"data-mounted":ee,"data-promise":!!u.promise,"data-swiped":$e,"data-removed":X,"data-visible":te,"data-y-position":ea,"data-x-position":kt,"data-index":x,"data-front":pe,"data-swiping":K,"data-dismissible":Qe,"data-type":Oe,"data-invert":Ca,"data-swipe-out":le,"data-swipe-direction":j,"data-expanded":!!(R||ze&&ee),"data-testid":u.testId,style:{"--index":x,"--toasts-before":x,"--z-index":O.length-x,"--offset":`${X?ie:Ft.current}px`,"--initial-height":ze?"auto":`${Ke}px`,...H,...u.style},onDragEnd:()=>{J(!1),re(null),Qt.current=null},onPointerDown:_e=>{_e.button!==2&&(fa||!Qe||(ke.current=new Date,Me(Ft.current),_e.target.setPointerCapture(_e.pointerId),_e.target.tagName!=="BUTTON"&&(J(!0),Qt.current={x:_e.clientX,y:_e.clientY})))},onPointerUp:()=>{var _e,me,Re;if(le||!Qe)return;Qt.current=null;const Mt=Number(((_e=Ce.current)==null?void 0:_e.style.getPropertyValue("--swipe-amount-x").replace("px",""))||0),Kt=Number(((me=Ce.current)==null?void 0:me.style.getPropertyValue("--swipe-amount-y").replace("px",""))||0),gt=new Date().getTime()-((Re=ke.current)==null?void 0:Re.getTime()),Gt=ge==="x"?Mt:Kt,Ba=Math.abs(Gt)/gt;if(Math.abs(Gt)>=Y_||Ba>.11){Me(Ft.current),u.onDismiss==null||u.onDismiss.call(u,u),G(ge==="x"?Mt>0?"right":"left":Kt>0?"down":"up"),Ut(),Ee(!0);return}else{var He,ve;(He=Ce.current)==null||He.style.setProperty("--swipe-amount-x","0px"),(ve=Ce.current)==null||ve.style.setProperty("--swipe-amount-y","0px")}ue(!1),J(!1),re(null)},onPointerMove:_e=>{var me,Re,Mt;if(!Qt.current||!Qe||((me=window.getSelection())==null?void 0:me.toString().length)>0)return;const gt=_e.clientY-Qt.current.y,Gt=_e.clientX-Qt.current.x;var Ba;const He=(Ba=a.swipeDirections)!=null?Ba:G_(T);!ge&&(Math.abs(Gt)>1||Math.abs(gt)>1)&&re(Math.abs(Gt)>Math.abs(gt)?"x":"y");let ve={x:0,y:0};const Xe=wa=>1/(1.5+Math.abs(wa)/20);if(ge==="y"){if(He.includes("top")||He.includes("bottom"))if(He.includes("top")&&gt<0||He.includes("bottom")&&gt>0)ve.y=gt;else{const wa=gt*Xe(gt);ve.y=Math.abs(wa)<Math.abs(gt)?wa:gt}}else if(ge==="x"&&(He.includes("left")||He.includes("right")))if(He.includes("left")&&Gt<0||He.includes("right")&&Gt>0)ve.x=Gt;else{const wa=Gt*Xe(Gt);ve.x=Math.abs(wa)<Math.abs(Gt)?wa:Gt}(Math.abs(ve.x)>0||Math.abs(ve.y)>0)&&ue(!0),(Re=Ce.current)==null||Re.style.setProperty("--swipe-amount-x",`${ve.x}px`),(Mt=Ce.current)==null||Mt.style.setProperty("--swipe-amount-y",`${ve.y}px`)}},sa&&!u.jsx&&Oe!=="loading"?Ae.createElement("button",{"aria-label":P,"data-disabled":fa,"data-close-button":!0,onClick:fa||!Qe?()=>{}:()=>{Ut(),u.onDismiss==null||u.onDismiss.call(u,u)},className:ln(k==null?void 0:k.closeButton,u==null||(i=u.classNames)==null?void 0:i.closeButton)},(ta=D==null?void 0:D.close)!=null?ta:D_):null,(Oe||u.icon||u.promise)&&u.icon!==null&&((D==null?void 0:D[Oe])!==null||u.icon)?Ae.createElement("div",{"data-icon":"",className:ln(k==null?void 0:k.icon,u==null||(l=u.classNames)==null?void 0:l.icon)},u.promise||u.type==="loading"&&!u.icon?u.icon||la():null,u.type!=="loading"?tt:null):null,Ae.createElement("div",{"data-content":"",className:ln(k==null?void 0:k.content,u==null||(c=u.classNames)==null?void 0:c.content)},Ae.createElement("div",{"data-title":"",className:ln(k==null?void 0:k.title,u==null||(d=u.classNames)==null?void 0:d.title)},u.jsx?u.jsx:typeof u.title=="function"?u.title():u.title),u.description?Ae.createElement("div",{"data-description":"",className:ln(xe,Te,k==null?void 0:k.description,u==null||(h=u.classNames)==null?void 0:h.description)},typeof u.description=="function"?u.description():u.description):null),Ae.isValidElement(u.cancel)?u.cancel:u.cancel&&Jc(u.cancel)?Ae.createElement("button",{"data-button":!0,"data-cancel":!0,style:u.cancelButtonStyle||$,onClick:_e=>{Jc(u.cancel)&&Qe&&(u.cancel.onClick==null||u.cancel.onClick.call(u.cancel,_e),Ut())},className:ln(k==null?void 0:k.cancelButton,u==null||(g=u.classNames)==null?void 0:g.cancelButton)},u.cancel.label):null,Ae.isValidElement(u.action)?u.action:u.action&&Jc(u.action)?Ae.createElement("button",{"data-button":!0,"data-action":!0,style:u.actionButtonStyle||Z,onClick:_e=>{Jc(u.action)&&(u.action.onClick==null||u.action.onClick.call(u.action,_e),!_e.defaultPrevented&&Ut())},className:ln(k==null?void 0:k.actionButton,u==null||(p=u.classNames)==null?void 0:p.actionButton)},u.action.label):null)};function hv(){if(typeof window>"u"||typeof document>"u")return"ltr";const a=document.documentElement.getAttribute("dir");return a==="auto"||!a?window.getComputedStyle(document.documentElement).direction:a}function Q_(a,n){const s={};return[a,n].forEach((i,l)=>{const c=l===1,d=c?"--mobile-offset":"--offset",h=c?P_:I_;function g(p){["top","right","bottom","left"].forEach(m=>{s[`${d}-${m}`]=typeof p=="number"?`${p}px`:p})}typeof i=="number"||typeof i=="string"?g(i):typeof i=="object"?["top","right","bottom","left"].forEach(p=>{i[p]===void 0?s[`${d}-${p}`]=h:s[`${d}-${p}`]=typeof i[p]=="number"?`${i[p]}px`:i[p]}):g(h)}),s}const K_=Ae.forwardRef(function(n,s){const{id:i,invert:l,position:c="bottom-right",hotkey:d=["altKey","KeyT"],expand:h,closeButton:g,className:p,offset:m,mobileOffset:u,theme:S="light",richColors:w,duration:z,style:_,visibleToasts:b=U_,toastOptions:x,dir:O=hv(),gap:R=q_,icons:C,containerAriaLabel:A="Notifications"}=n,[I,H]=Ae.useState([]),$=Ae.useMemo(()=>i?I.filter(ee=>ee.toasterId===i):I.filter(ee=>!ee.toasterId),[I,i]),Z=Ae.useMemo(()=>Array.from(new Set([c].concat($.filter(ee=>ee.position).map(ee=>ee.position)))),[$,c]),[he,xe]=Ae.useState([]),[V,T]=Ae.useState(!1),[W,ze]=Ae.useState(!1),[k,D]=Ae.useState(S!=="system"?S:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),P=Ae.useRef(null),ge=d.join("+").replace(/Key/g,"").replace(/Digit/g,""),re=Ae.useRef(null),j=Ae.useRef(!1),G=Ae.useCallback(ee=>{H(ae=>{var X;return(X=ae.find(se=>se.id===ee.id))!=null&&X.delete||ti.dismiss(ee.id),ae.filter(({id:se})=>se!==ee.id)})},[]);return Ae.useEffect(()=>ti.subscribe(ee=>{if(ee.dismiss){requestAnimationFrame(()=>{H(ae=>ae.map(X=>X.id===ee.id?{...X,delete:!0}:X))});return}setTimeout(()=>{$3.flushSync(()=>{H(ae=>{const X=ae.findIndex(se=>se.id===ee.id);return X!==-1?[...ae.slice(0,X),{...ae[X],...ee},...ae.slice(X+1)]:[ee,...ae]})})})}),[I]),Ae.useEffect(()=>{if(S!=="system"){D(S);return}if(S==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?D("dark"):D("light")),typeof window>"u")return;const ee=window.matchMedia("(prefers-color-scheme: dark)");try{ee.addEventListener("change",({matches:ae})=>{D(ae?"dark":"light")})}catch{ee.addListener(({matches:X})=>{try{D(X?"dark":"light")}catch(se){console.error(se)}})}},[S]),Ae.useEffect(()=>{I.length<=1&&T(!1)},[I]),Ae.useEffect(()=>{const ee=ae=>{var X;if(d.every(J=>ae[J]||ae.code===J)){var K;T(!0),(K=P.current)==null||K.focus()}ae.code==="Escape"&&(document.activeElement===P.current||(X=P.current)!=null&&X.contains(document.activeElement))&&T(!1)};return document.addEventListener("keydown",ee),()=>document.removeEventListener("keydown",ee)},[d]),Ae.useEffect(()=>{if(P.current)return()=>{re.current&&(re.current.focus({preventScroll:!0}),re.current=null,j.current=!1)}},[P.current]),Ae.createElement("section",{ref:s,"aria-label":`${A} ${ge}`,tabIndex:-1,"aria-live":"polite","aria-relevant":"additions text","aria-atomic":"false",suppressHydrationWarning:!0},Z.map((ee,ae)=>{var X;const[se,K]=ee.split("-");return $.length?Ae.createElement("ol",{key:ee,dir:O==="auto"?hv():O,tabIndex:-1,ref:P,className:p,"data-sonner-toaster":!0,"data-sonner-theme":k,"data-y-position":se,"data-x-position":K,style:{"--front-toast-height":`${((X=he[0])==null?void 0:X.height)||0}px`,"--width":`${Z_}px`,"--gap":`${R}px`,..._,...Q_(m,u)},onBlur:J=>{j.current&&!J.currentTarget.contains(J.relatedTarget)&&(j.current=!1,re.current&&(re.current.focus({preventScroll:!0}),re.current=null))},onFocus:J=>{J.target instanceof HTMLElement&&J.target.dataset.dismissible==="false"||j.current||(j.current=!0,re.current=J.relatedTarget)},onMouseEnter:()=>T(!0),onMouseMove:()=>T(!0),onMouseLeave:()=>{W||T(!1)},onDragEnd:()=>T(!1),onPointerDown:J=>{J.target instanceof HTMLElement&&J.target.dataset.dismissible==="false"||ze(!0)},onPointerUp:()=>ze(!1)},$.filter(J=>!J.position&&ae===0||J.position===ee).map((J,le)=>{var Ee,$e;return Ae.createElement(X_,{key:J.id,icons:C,index:le,toast:J,defaultRichColors:w,duration:(Ee=x==null?void 0:x.duration)!=null?Ee:z,className:x==null?void 0:x.className,descriptionClassName:x==null?void 0:x.descriptionClassName,invert:l,visibleToasts:b,closeButton:($e=x==null?void 0:x.closeButton)!=null?$e:g,interacting:W,position:ee,style:x==null?void 0:x.style,unstyled:x==null?void 0:x.unstyled,classNames:x==null?void 0:x.classNames,cancelButtonStyle:x==null?void 0:x.cancelButtonStyle,actionButtonStyle:x==null?void 0:x.actionButtonStyle,closeButtonAriaLabel:x==null?void 0:x.closeButtonAriaLabel,removeToast:G,toasts:$.filter(ue=>ue.position==J.position),heights:he.filter(ue=>ue.position==J.position),setHeights:xe,expandByDefault:h,gap:R,expanded:V,swipeDirections:n.swipeDirections})})):null}))}),W_=({...a})=>{const{theme:n="system"}=S_();return M.jsx(K_,{theme:n,className:"toaster group",style:{"--normal-bg":"var(--popover)","--normal-text":"var(--popover-foreground)","--normal-border":"var(--border)"},...a})};function fv(a,n){if(typeof a=="function")return a(n);a!=null&&(a.current=n)}function gl(...a){return n=>{let s=!1;const i=a.map(l=>{const c=fv(l,n);return!s&&typeof c=="function"&&(s=!0),c});if(s)return()=>{for(let l=0;l<i.length;l++){const c=i[l];typeof c=="function"?c():fv(a[l],null)}}}}function zt(...a){return y.useCallback(gl(...a),a)}var J_=Symbol.for("react.lazy"),yd=gm[" use ".trim().toString()];function ex(a){return typeof a=="object"&&a!==null&&"then"in a}function V3(a){return a!=null&&typeof a=="object"&&"$$typeof"in a&&a.$$typeof===J_&&"_payload"in a&&ex(a._payload)}function vm(a){const n=tx(a),s=y.forwardRef((i,l)=>{let{children:c,...d}=i;V3(c)&&typeof yd=="function"&&(c=yd(c._payload));const h=y.Children.toArray(c),g=h.find(ix);if(g){const p=g.props.children,m=h.map(u=>u===g?y.Children.count(p)>1?y.Children.only(null):y.isValidElement(p)?p.props.children:null:u);return M.jsx(n,{...d,ref:l,children:y.isValidElement(p)?y.cloneElement(p,void 0,m):null})}return M.jsx(n,{...d,ref:l,children:c})});return s.displayName=`${a}.Slot`,s}var L3=vm("Slot");function tx(a){const n=y.forwardRef((s,i)=>{let{children:l,...c}=s;if(V3(l)&&typeof yd=="function"&&(l=yd(l._payload)),y.isValidElement(l)){const d=rx(l),h=nx(c,l.props);return l.type!==y.Fragment&&(h.ref=i?gl(i,d):d),y.cloneElement(l,h)}return y.Children.count(l)>1?y.Children.only(null):null});return n.displayName=`${a}.SlotClone`,n}var ax=Symbol("radix.slottable");function ix(a){return y.isValidElement(a)&&typeof a.type=="function"&&"__radixId"in a.type&&a.type.__radixId===ax}function nx(a,n){const s={...n};for(const i in n){const l=a[i],c=n[i];/^on[A-Z]/.test(i)?l&&c?s[i]=(...h)=>{const g=c(...h);return l(...h),g}:l&&(s[i]=l):i==="style"?s[i]={...l,...c}:i==="className"&&(s[i]=[l,c].filter(Boolean).join(" "))}return{...a,...s}}function rx(a){var i,l;let n=(i=Object.getOwnPropertyDescriptor(a.props,"ref"))==null?void 0:i.get,s=n&&"isReactWarning"in n&&n.isReactWarning;return s?a.ref:(n=(l=Object.getOwnPropertyDescriptor(a,"ref"))==null?void 0:l.get,s=n&&"isReactWarning"in n&&n.isReactWarning,s?a.props.ref:a.props.ref||a.ref)}function B3(a){var n,s,i="";if(typeof a=="string"||typeof a=="number")i+=a;else if(typeof a=="object")if(Array.isArray(a)){var l=a.length;for(n=0;n<l;n++)a[n]&&(s=B3(a[n]))&&(i&&(i+=" "),i+=s)}else for(s in a)a[s]&&(i&&(i+=" "),i+=s);return i}function U3(){for(var a,n,s=0,i="",l=arguments.length;s<l;s++)(a=arguments[s])&&(n=B3(a))&&(i&&(i+=" "),i+=n);return i}const mv=a=>typeof a=="boolean"?`${a}`:a===0?"0":a,pv=U3,bm=(a,n)=>s=>{var i;if((n==null?void 0:n.variants)==null)return pv(a,s==null?void 0:s.class,s==null?void 0:s.className);const{variants:l,defaultVariants:c}=n,d=Object.keys(l).map(p=>{const m=s==null?void 0:s[p],u=c==null?void 0:c[p];if(m===null)return null;const S=mv(m)||mv(u);return l[p][S]}),h=s&&Object.entries(s).reduce((p,m)=>{let[u,S]=m;return S===void 0||(p[u]=S),p},{}),g=n==null||(i=n.compoundVariants)===null||i===void 0?void 0:i.reduce((p,m)=>{let{class:u,className:S,...w}=m;return Object.entries(w).every(z=>{let[_,b]=z;return Array.isArray(b)?b.includes({...c,...h}[_]):{...c,...h}[_]===b})?[...p,u,S]:p},[]);return pv(a,d,g,s==null?void 0:s.class,s==null?void 0:s.className)},sx=(a,n)=>{const s=new Array(a.length+n.length);for(let i=0;i<a.length;i++)s[i]=a[i];for(let i=0;i<n.length;i++)s[a.length+i]=n[i];return s},lx=(a,n)=>({classGroupId:a,validator:n}),I3=(a=new Map,n=null,s)=>({nextPart:a,validators:n,classGroupId:s}),_d="-",gv=[],ox="arbitrary..",cx=a=>{const n=ux(a),{conflictingClassGroups:s,conflictingClassGroupModifiers:i}=a;return{getClassGroupId:d=>{if(d.startsWith("[")&&d.endsWith("]"))return dx(d);const h=d.split(_d),g=h[0]===""&&h.length>1?1:0;return P3(h,g,n)},getConflictingClassGroupIds:(d,h)=>{if(h){const g=i[d],p=s[d];return g?p?sx(p,g):g:p||gv}return s[d]||gv}}},P3=(a,n,s)=>{if(a.length-n===0)return s.classGroupId;const l=a[n],c=s.nextPart.get(l);if(c){const p=P3(a,n+1,c);if(p)return p}const d=s.validators;if(d===null)return;const h=n===0?a.join(_d):a.slice(n).join(_d),g=d.length;for(let p=0;p<g;p++){const m=d[p];if(m.validator(h))return m.classGroupId}},dx=a=>a.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const n=a.slice(1,-1),s=n.indexOf(":"),i=n.slice(0,s);return i?ox+i:void 0})(),ux=a=>{const{theme:n,classGroups:s}=a;return hx(s,n)},hx=(a,n)=>{const s=I3();for(const i in a){const l=a[i];ym(l,s,i,n)}return s},ym=(a,n,s,i)=>{const l=a.length;for(let c=0;c<l;c++){const d=a[c];fx(d,n,s,i)}},fx=(a,n,s,i)=>{if(typeof a=="string"){mx(a,n,s);return}if(typeof a=="function"){px(a,n,s,i);return}gx(a,n,s,i)},mx=(a,n,s)=>{const i=a===""?n:Z3(n,a);i.classGroupId=s},px=(a,n,s,i)=>{if(vx(a)){ym(a(i),n,s,i);return}n.validators===null&&(n.validators=[]),n.validators.push(lx(s,a))},gx=(a,n,s,i)=>{const l=Object.entries(a),c=l.length;for(let d=0;d<c;d++){const[h,g]=l[d];ym(g,Z3(n,h),s,i)}},Z3=(a,n)=>{let s=a;const i=n.split(_d),l=i.length;for(let c=0;c<l;c++){const d=i[c];let h=s.nextPart.get(d);h||(h=I3(),s.nextPart.set(d,h)),s=h}return s},vx=a=>"isThemeGetter"in a&&a.isThemeGetter===!0,bx=a=>{if(a<1)return{get:()=>{},set:()=>{}};let n=0,s=Object.create(null),i=Object.create(null);const l=(c,d)=>{s[c]=d,n++,n>a&&(n=0,i=s,s=Object.create(null))};return{get(c){let d=s[c];if(d!==void 0)return d;if((d=i[c])!==void 0)return l(c,d),d},set(c,d){c in s?s[c]=d:l(c,d)}}},Kf="!",vv=":",yx=[],bv=(a,n,s,i,l)=>({modifiers:a,hasImportantModifier:n,baseClassName:s,maybePostfixModifierPosition:i,isExternal:l}),_x=a=>{const{prefix:n,experimentalParseClassName:s}=a;let i=l=>{const c=[];let d=0,h=0,g=0,p;const m=l.length;for(let _=0;_<m;_++){const b=l[_];if(d===0&&h===0){if(b===vv){c.push(l.slice(g,_)),g=_+1;continue}if(b==="/"){p=_;continue}}b==="["?d++:b==="]"?d--:b==="("?h++:b===")"&&h--}const u=c.length===0?l:l.slice(g);let S=u,w=!1;u.endsWith(Kf)?(S=u.slice(0,-1),w=!0):u.startsWith(Kf)&&(S=u.slice(1),w=!0);const z=p&&p>g?p-g:void 0;return bv(c,w,S,z)};if(n){const l=n+vv,c=i;i=d=>d.startsWith(l)?c(d.slice(l.length)):bv(yx,!1,d,void 0,!0)}if(s){const l=i;i=c=>s({className:c,parseClassName:l})}return i},xx=a=>{const n=new Map;return a.orderSensitiveModifiers.forEach((s,i)=>{n.set(s,1e6+i)}),s=>{const i=[];let l=[];for(let c=0;c<s.length;c++){const d=s[c],h=d[0]==="[",g=n.has(d);h||g?(l.length>0&&(l.sort(),i.push(...l),l=[]),i.push(d)):l.push(d)}return l.length>0&&(l.sort(),i.push(...l)),i}},wx=a=>({cache:bx(a.cacheSize),parseClassName:_x(a),sortModifiers:xx(a),...cx(a)}),zx=/\s+/,Sx=(a,n)=>{const{parseClassName:s,getClassGroupId:i,getConflictingClassGroupIds:l,sortModifiers:c}=n,d=[],h=a.trim().split(zx);let g="";for(let p=h.length-1;p>=0;p-=1){const m=h[p],{isExternal:u,modifiers:S,hasImportantModifier:w,baseClassName:z,maybePostfixModifierPosition:_}=s(m);if(u){g=m+(g.length>0?" "+g:g);continue}let b=!!_,x=i(b?z.substring(0,_):z);if(!x){if(!b){g=m+(g.length>0?" "+g:g);continue}if(x=i(z),!x){g=m+(g.length>0?" "+g:g);continue}b=!1}const O=S.length===0?"":S.length===1?S[0]:c(S).join(":"),R=w?O+Kf:O,C=R+x;if(d.indexOf(C)>-1)continue;d.push(C);const A=l(x,b);for(let I=0;I<A.length;++I){const H=A[I];d.push(R+H)}g=m+(g.length>0?" "+g:g)}return g},Mx=(...a)=>{let n=0,s,i,l="";for(;n<a.length;)(s=a[n++])&&(i=q3(s))&&(l&&(l+=" "),l+=i);return l},q3=a=>{if(typeof a=="string")return a;let n,s="";for(let i=0;i<a.length;i++)a[i]&&(n=q3(a[i]))&&(s&&(s+=" "),s+=n);return s},Ex=(a,...n)=>{let s,i,l,c;const d=g=>{const p=n.reduce((m,u)=>u(m),a());return s=wx(p),i=s.cache.get,l=s.cache.set,c=h,h(g)},h=g=>{const p=i(g);if(p)return p;const m=Sx(g,s);return l(g,m),m};return c=d,(...g)=>c(Mx(...g))},Tx=[],Ma=a=>{const n=s=>s[a]||Tx;return n.isThemeGetter=!0,n},Y3=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,F3=/^\((?:(\w[\w-]*):)?(.+)\)$/i,Cx=/^\d+\/\d+$/,Ax=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,kx=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,jx=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,Nx=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Dx=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Xs=a=>Cx.test(a),mt=a=>!!a&&!Number.isNaN(Number(a)),br=a=>!!a&&Number.isInteger(Number(a)),_f=a=>a.endsWith("%")&&mt(a.slice(0,-1)),Vn=a=>Ax.test(a),Ox=()=>!0,Hx=a=>kx.test(a)&&!jx.test(a),G3=()=>!1,Rx=a=>Nx.test(a),$x=a=>Dx.test(a),Vx=a=>!Ze(a)&&!qe(a),Lx=a=>vl(a,K3,G3),Ze=a=>Y3.test(a),Kr=a=>vl(a,W3,Hx),xf=a=>vl(a,Zx,mt),yv=a=>vl(a,X3,G3),Bx=a=>vl(a,Q3,$x),ed=a=>vl(a,J3,Rx),qe=a=>F3.test(a),mo=a=>bl(a,W3),Ux=a=>bl(a,qx),_v=a=>bl(a,X3),Ix=a=>bl(a,K3),Px=a=>bl(a,Q3),td=a=>bl(a,J3,!0),vl=(a,n,s)=>{const i=Y3.exec(a);return i?i[1]?n(i[1]):s(i[2]):!1},bl=(a,n,s=!1)=>{const i=F3.exec(a);return i?i[1]?n(i[1]):s:!1},X3=a=>a==="position"||a==="percentage",Q3=a=>a==="image"||a==="url",K3=a=>a==="length"||a==="size"||a==="bg-size",W3=a=>a==="length",Zx=a=>a==="number",qx=a=>a==="family-name",J3=a=>a==="shadow",Yx=()=>{const a=Ma("color"),n=Ma("font"),s=Ma("text"),i=Ma("font-weight"),l=Ma("tracking"),c=Ma("leading"),d=Ma("breakpoint"),h=Ma("container"),g=Ma("spacing"),p=Ma("radius"),m=Ma("shadow"),u=Ma("inset-shadow"),S=Ma("text-shadow"),w=Ma("drop-shadow"),z=Ma("blur"),_=Ma("perspective"),b=Ma("aspect"),x=Ma("ease"),O=Ma("animate"),R=()=>["auto","avoid","all","avoid-page","page","left","right","column"],C=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],A=()=>[...C(),qe,Ze],I=()=>["auto","hidden","clip","visible","scroll"],H=()=>["auto","contain","none"],$=()=>[qe,Ze,g],Z=()=>[Xs,"full","auto",...$()],he=()=>[br,"none","subgrid",qe,Ze],xe=()=>["auto",{span:["full",br,qe,Ze]},br,qe,Ze],V=()=>[br,"auto",qe,Ze],T=()=>["auto","min","max","fr",qe,Ze],W=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],ze=()=>["start","end","center","stretch","center-safe","end-safe"],k=()=>["auto",...$()],D=()=>[Xs,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...$()],P=()=>[a,qe,Ze],ge=()=>[...C(),_v,yv,{position:[qe,Ze]}],re=()=>["no-repeat",{repeat:["","x","y","space","round"]}],j=()=>["auto","cover","contain",Ix,Lx,{size:[qe,Ze]}],G=()=>[_f,mo,Kr],ee=()=>["","none","full",p,qe,Ze],ae=()=>["",mt,mo,Kr],X=()=>["solid","dashed","dotted","double"],se=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],K=()=>[mt,_f,_v,yv],J=()=>["","none",z,qe,Ze],le=()=>["none",mt,qe,Ze],Ee=()=>["none",mt,qe,Ze],$e=()=>[mt,qe,Ze],ue=()=>[Xs,"full",...$()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Vn],breakpoint:[Vn],color:[Ox],container:[Vn],"drop-shadow":[Vn],ease:["in","out","in-out"],font:[Vx],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Vn],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Vn],shadow:[Vn],spacing:["px",mt],text:[Vn],"text-shadow":[Vn],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Xs,Ze,qe,b]}],container:["container"],columns:[{columns:[mt,Ze,qe,h]}],"break-after":[{"break-after":R()}],"break-before":[{"break-before":R()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:A()}],overflow:[{overflow:I()}],"overflow-x":[{"overflow-x":I()}],"overflow-y":[{"overflow-y":I()}],overscroll:[{overscroll:H()}],"overscroll-x":[{"overscroll-x":H()}],"overscroll-y":[{"overscroll-y":H()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:Z()}],"inset-x":[{"inset-x":Z()}],"inset-y":[{"inset-y":Z()}],start:[{start:Z()}],end:[{end:Z()}],top:[{top:Z()}],right:[{right:Z()}],bottom:[{bottom:Z()}],left:[{left:Z()}],visibility:["visible","invisible","collapse"],z:[{z:[br,"auto",qe,Ze]}],basis:[{basis:[Xs,"full","auto",h,...$()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[mt,Xs,"auto","initial","none",Ze]}],grow:[{grow:["",mt,qe,Ze]}],shrink:[{shrink:["",mt,qe,Ze]}],order:[{order:[br,"first","last","none",qe,Ze]}],"grid-cols":[{"grid-cols":he()}],"col-start-end":[{col:xe()}],"col-start":[{"col-start":V()}],"col-end":[{"col-end":V()}],"grid-rows":[{"grid-rows":he()}],"row-start-end":[{row:xe()}],"row-start":[{"row-start":V()}],"row-end":[{"row-end":V()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":T()}],"auto-rows":[{"auto-rows":T()}],gap:[{gap:$()}],"gap-x":[{"gap-x":$()}],"gap-y":[{"gap-y":$()}],"justify-content":[{justify:[...W(),"normal"]}],"justify-items":[{"justify-items":[...ze(),"normal"]}],"justify-self":[{"justify-self":["auto",...ze()]}],"align-content":[{content:["normal",...W()]}],"align-items":[{items:[...ze(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...ze(),{baseline:["","last"]}]}],"place-content":[{"place-content":W()}],"place-items":[{"place-items":[...ze(),"baseline"]}],"place-self":[{"place-self":["auto",...ze()]}],p:[{p:$()}],px:[{px:$()}],py:[{py:$()}],ps:[{ps:$()}],pe:[{pe:$()}],pt:[{pt:$()}],pr:[{pr:$()}],pb:[{pb:$()}],pl:[{pl:$()}],m:[{m:k()}],mx:[{mx:k()}],my:[{my:k()}],ms:[{ms:k()}],me:[{me:k()}],mt:[{mt:k()}],mr:[{mr:k()}],mb:[{mb:k()}],ml:[{ml:k()}],"space-x":[{"space-x":$()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":$()}],"space-y-reverse":["space-y-reverse"],size:[{size:D()}],w:[{w:[h,"screen",...D()]}],"min-w":[{"min-w":[h,"screen","none",...D()]}],"max-w":[{"max-w":[h,"screen","none","prose",{screen:[d]},...D()]}],h:[{h:["screen","lh",...D()]}],"min-h":[{"min-h":["screen","lh","none",...D()]}],"max-h":[{"max-h":["screen","lh",...D()]}],"font-size":[{text:["base",s,mo,Kr]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[i,qe,xf]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",_f,Ze]}],"font-family":[{font:[Ux,Ze,n]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[l,qe,Ze]}],"line-clamp":[{"line-clamp":[mt,"none",qe,xf]}],leading:[{leading:[c,...$()]}],"list-image":[{"list-image":["none",qe,Ze]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",qe,Ze]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:P()}],"text-color":[{text:P()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...X(),"wavy"]}],"text-decoration-thickness":[{decoration:[mt,"from-font","auto",qe,Kr]}],"text-decoration-color":[{decoration:P()}],"underline-offset":[{"underline-offset":[mt,"auto",qe,Ze]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:$()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",qe,Ze]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",qe,Ze]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:ge()}],"bg-repeat":[{bg:re()}],"bg-size":[{bg:j()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},br,qe,Ze],radial:["",qe,Ze],conic:[br,qe,Ze]},Px,Bx]}],"bg-color":[{bg:P()}],"gradient-from-pos":[{from:G()}],"gradient-via-pos":[{via:G()}],"gradient-to-pos":[{to:G()}],"gradient-from":[{from:P()}],"gradient-via":[{via:P()}],"gradient-to":[{to:P()}],rounded:[{rounded:ee()}],"rounded-s":[{"rounded-s":ee()}],"rounded-e":[{"rounded-e":ee()}],"rounded-t":[{"rounded-t":ee()}],"rounded-r":[{"rounded-r":ee()}],"rounded-b":[{"rounded-b":ee()}],"rounded-l":[{"rounded-l":ee()}],"rounded-ss":[{"rounded-ss":ee()}],"rounded-se":[{"rounded-se":ee()}],"rounded-ee":[{"rounded-ee":ee()}],"rounded-es":[{"rounded-es":ee()}],"rounded-tl":[{"rounded-tl":ee()}],"rounded-tr":[{"rounded-tr":ee()}],"rounded-br":[{"rounded-br":ee()}],"rounded-bl":[{"rounded-bl":ee()}],"border-w":[{border:ae()}],"border-w-x":[{"border-x":ae()}],"border-w-y":[{"border-y":ae()}],"border-w-s":[{"border-s":ae()}],"border-w-e":[{"border-e":ae()}],"border-w-t":[{"border-t":ae()}],"border-w-r":[{"border-r":ae()}],"border-w-b":[{"border-b":ae()}],"border-w-l":[{"border-l":ae()}],"divide-x":[{"divide-x":ae()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":ae()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...X(),"hidden","none"]}],"divide-style":[{divide:[...X(),"hidden","none"]}],"border-color":[{border:P()}],"border-color-x":[{"border-x":P()}],"border-color-y":[{"border-y":P()}],"border-color-s":[{"border-s":P()}],"border-color-e":[{"border-e":P()}],"border-color-t":[{"border-t":P()}],"border-color-r":[{"border-r":P()}],"border-color-b":[{"border-b":P()}],"border-color-l":[{"border-l":P()}],"divide-color":[{divide:P()}],"outline-style":[{outline:[...X(),"none","hidden"]}],"outline-offset":[{"outline-offset":[mt,qe,Ze]}],"outline-w":[{outline:["",mt,mo,Kr]}],"outline-color":[{outline:P()}],shadow:[{shadow:["","none",m,td,ed]}],"shadow-color":[{shadow:P()}],"inset-shadow":[{"inset-shadow":["none",u,td,ed]}],"inset-shadow-color":[{"inset-shadow":P()}],"ring-w":[{ring:ae()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:P()}],"ring-offset-w":[{"ring-offset":[mt,Kr]}],"ring-offset-color":[{"ring-offset":P()}],"inset-ring-w":[{"inset-ring":ae()}],"inset-ring-color":[{"inset-ring":P()}],"text-shadow":[{"text-shadow":["none",S,td,ed]}],"text-shadow-color":[{"text-shadow":P()}],opacity:[{opacity:[mt,qe,Ze]}],"mix-blend":[{"mix-blend":[...se(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":se()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[mt]}],"mask-image-linear-from-pos":[{"mask-linear-from":K()}],"mask-image-linear-to-pos":[{"mask-linear-to":K()}],"mask-image-linear-from-color":[{"mask-linear-from":P()}],"mask-image-linear-to-color":[{"mask-linear-to":P()}],"mask-image-t-from-pos":[{"mask-t-from":K()}],"mask-image-t-to-pos":[{"mask-t-to":K()}],"mask-image-t-from-color":[{"mask-t-from":P()}],"mask-image-t-to-color":[{"mask-t-to":P()}],"mask-image-r-from-pos":[{"mask-r-from":K()}],"mask-image-r-to-pos":[{"mask-r-to":K()}],"mask-image-r-from-color":[{"mask-r-from":P()}],"mask-image-r-to-color":[{"mask-r-to":P()}],"mask-image-b-from-pos":[{"mask-b-from":K()}],"mask-image-b-to-pos":[{"mask-b-to":K()}],"mask-image-b-from-color":[{"mask-b-from":P()}],"mask-image-b-to-color":[{"mask-b-to":P()}],"mask-image-l-from-pos":[{"mask-l-from":K()}],"mask-image-l-to-pos":[{"mask-l-to":K()}],"mask-image-l-from-color":[{"mask-l-from":P()}],"mask-image-l-to-color":[{"mask-l-to":P()}],"mask-image-x-from-pos":[{"mask-x-from":K()}],"mask-image-x-to-pos":[{"mask-x-to":K()}],"mask-image-x-from-color":[{"mask-x-from":P()}],"mask-image-x-to-color":[{"mask-x-to":P()}],"mask-image-y-from-pos":[{"mask-y-from":K()}],"mask-image-y-to-pos":[{"mask-y-to":K()}],"mask-image-y-from-color":[{"mask-y-from":P()}],"mask-image-y-to-color":[{"mask-y-to":P()}],"mask-image-radial":[{"mask-radial":[qe,Ze]}],"mask-image-radial-from-pos":[{"mask-radial-from":K()}],"mask-image-radial-to-pos":[{"mask-radial-to":K()}],"mask-image-radial-from-color":[{"mask-radial-from":P()}],"mask-image-radial-to-color":[{"mask-radial-to":P()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":C()}],"mask-image-conic-pos":[{"mask-conic":[mt]}],"mask-image-conic-from-pos":[{"mask-conic-from":K()}],"mask-image-conic-to-pos":[{"mask-conic-to":K()}],"mask-image-conic-from-color":[{"mask-conic-from":P()}],"mask-image-conic-to-color":[{"mask-conic-to":P()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:ge()}],"mask-repeat":[{mask:re()}],"mask-size":[{mask:j()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",qe,Ze]}],filter:[{filter:["","none",qe,Ze]}],blur:[{blur:J()}],brightness:[{brightness:[mt,qe,Ze]}],contrast:[{contrast:[mt,qe,Ze]}],"drop-shadow":[{"drop-shadow":["","none",w,td,ed]}],"drop-shadow-color":[{"drop-shadow":P()}],grayscale:[{grayscale:["",mt,qe,Ze]}],"hue-rotate":[{"hue-rotate":[mt,qe,Ze]}],invert:[{invert:["",mt,qe,Ze]}],saturate:[{saturate:[mt,qe,Ze]}],sepia:[{sepia:["",mt,qe,Ze]}],"backdrop-filter":[{"backdrop-filter":["","none",qe,Ze]}],"backdrop-blur":[{"backdrop-blur":J()}],"backdrop-brightness":[{"backdrop-brightness":[mt,qe,Ze]}],"backdrop-contrast":[{"backdrop-contrast":[mt,qe,Ze]}],"backdrop-grayscale":[{"backdrop-grayscale":["",mt,qe,Ze]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[mt,qe,Ze]}],"backdrop-invert":[{"backdrop-invert":["",mt,qe,Ze]}],"backdrop-opacity":[{"backdrop-opacity":[mt,qe,Ze]}],"backdrop-saturate":[{"backdrop-saturate":[mt,qe,Ze]}],"backdrop-sepia":[{"backdrop-sepia":["",mt,qe,Ze]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":$()}],"border-spacing-x":[{"border-spacing-x":$()}],"border-spacing-y":[{"border-spacing-y":$()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",qe,Ze]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[mt,"initial",qe,Ze]}],ease:[{ease:["linear","initial",x,qe,Ze]}],delay:[{delay:[mt,qe,Ze]}],animate:[{animate:["none",O,qe,Ze]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[_,qe,Ze]}],"perspective-origin":[{"perspective-origin":A()}],rotate:[{rotate:le()}],"rotate-x":[{"rotate-x":le()}],"rotate-y":[{"rotate-y":le()}],"rotate-z":[{"rotate-z":le()}],scale:[{scale:Ee()}],"scale-x":[{"scale-x":Ee()}],"scale-y":[{"scale-y":Ee()}],"scale-z":[{"scale-z":Ee()}],"scale-3d":["scale-3d"],skew:[{skew:$e()}],"skew-x":[{"skew-x":$e()}],"skew-y":[{"skew-y":$e()}],transform:[{transform:[qe,Ze,"","none","gpu","cpu"]}],"transform-origin":[{origin:A()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:ue()}],"translate-x":[{"translate-x":ue()}],"translate-y":[{"translate-y":ue()}],"translate-z":[{"translate-z":ue()}],"translate-none":["translate-none"],accent:[{accent:P()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:P()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",qe,Ze]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":$()}],"scroll-mx":[{"scroll-mx":$()}],"scroll-my":[{"scroll-my":$()}],"scroll-ms":[{"scroll-ms":$()}],"scroll-me":[{"scroll-me":$()}],"scroll-mt":[{"scroll-mt":$()}],"scroll-mr":[{"scroll-mr":$()}],"scroll-mb":[{"scroll-mb":$()}],"scroll-ml":[{"scroll-ml":$()}],"scroll-p":[{"scroll-p":$()}],"scroll-px":[{"scroll-px":$()}],"scroll-py":[{"scroll-py":$()}],"scroll-ps":[{"scroll-ps":$()}],"scroll-pe":[{"scroll-pe":$()}],"scroll-pt":[{"scroll-pt":$()}],"scroll-pr":[{"scroll-pr":$()}],"scroll-pb":[{"scroll-pb":$()}],"scroll-pl":[{"scroll-pl":$()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",qe,Ze]}],fill:[{fill:["none",...P()]}],"stroke-w":[{stroke:[mt,mo,Kr,xf]}],stroke:[{stroke:["none",...P()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},Fx=Ex(Yx);function St(...a){return Fx(U3(a))}const Gx=bm("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",destructive:"bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9"}},defaultVariants:{variant:"default",size:"default"}});function Jt({className:a,variant:n,size:s,asChild:i=!1,...l}){const c=i?L3:"button";return M.jsx(c,{"data-slot":"button",className:St(Gx({variant:n,size:s,className:a})),...l})}var Xx=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],Qx=Xx.reduce((a,n)=>{const s=vm(`Primitive.${n}`),i=y.forwardRef((l,c)=>{const{asChild:d,...h}=l,g=d?s:n;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),M.jsx(g,{...h,ref:c})});return i.displayName=`Primitive.${n}`,{...a,[n]:i}},{}),Kx="Separator",xv="horizontal",Wx=["horizontal","vertical"],e8=y.forwardRef((a,n)=>{const{decorative:s,orientation:i=xv,...l}=a,c=Jx(i)?i:xv,h=s?{role:"none"}:{"aria-orientation":c==="vertical"?c:void 0,role:"separator"};return M.jsx(Qx.div,{"data-orientation":c,...h,...l,ref:n})});e8.displayName=Kx;function Jx(a){return Wx.includes(a)}var e6=e8;function zo({className:a,orientation:n="horizontal",decorative:s=!0,...i}){return M.jsx(e6,{"data-slot":"separator-root",decorative:s,orientation:n,className:St("bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",a),...i})}function ot(a,n,{checkForDefaultPrevented:s=!0}={}){return function(l){if(a==null||a(l),s===!1||!l.defaultPrevented)return n==null?void 0:n(l)}}function t6(a,n){const s=y.createContext(n),i=c=>{const{children:d,...h}=c,g=y.useMemo(()=>h,Object.values(h));return M.jsx(s.Provider,{value:g,children:d})};i.displayName=a+"Provider";function l(c){const d=y.useContext(s);if(d)return d;if(n!==void 0)return n;throw new Error(`\`${c}\` must be used within \`${a}\``)}return[i,l]}function Wi(a,n=[]){let s=[];function i(c,d){const h=y.createContext(d),g=s.length;s=[...s,d];const p=u=>{var x;const{scope:S,children:w,...z}=u,_=((x=S==null?void 0:S[a])==null?void 0:x[g])||h,b=y.useMemo(()=>z,Object.values(z));return M.jsx(_.Provider,{value:b,children:w})};p.displayName=c+"Provider";function m(u,S){var _;const w=((_=S==null?void 0:S[a])==null?void 0:_[g])||h,z=y.useContext(w);if(z)return z;if(d!==void 0)return d;throw new Error(`\`${u}\` must be used within \`${c}\``)}return[p,m]}const l=()=>{const c=s.map(d=>y.createContext(d));return function(h){const g=(h==null?void 0:h[a])||c;return y.useMemo(()=>({[`__scope${a}`]:{...h,[a]:g}}),[h,g])}};return l.scopeName=a,[i,a6(l,...n)]}function a6(...a){const n=a[0];if(a.length===1)return n;const s=()=>{const i=a.map(l=>({useScope:l(),scopeName:l.scopeName}));return function(c){const d=i.reduce((h,{useScope:g,scopeName:p})=>{const u=g(c)[`__scope${p}`];return{...h,...u}},{});return y.useMemo(()=>({[`__scope${n.scopeName}`]:d}),[d])}};return s.scopeName=n.scopeName,s}function wv(a){const n=i6(a),s=y.forwardRef((i,l)=>{const{children:c,...d}=i,h=y.Children.toArray(c),g=h.find(r6);if(g){const p=g.props.children,m=h.map(u=>u===g?y.Children.count(p)>1?y.Children.only(null):y.isValidElement(p)?p.props.children:null:u);return M.jsx(n,{...d,ref:l,children:y.isValidElement(p)?y.cloneElement(p,void 0,m):null})}return M.jsx(n,{...d,ref:l,children:c})});return s.displayName=`${a}.Slot`,s}function i6(a){const n=y.forwardRef((s,i)=>{const{children:l,...c}=s;if(y.isValidElement(l)){const d=l6(l),h=s6(c,l.props);return l.type!==y.Fragment&&(h.ref=i?gl(i,d):d),y.cloneElement(l,h)}return y.Children.count(l)>1?y.Children.only(null):null});return n.displayName=`${a}.SlotClone`,n}var n6=Symbol("radix.slottable");function r6(a){return y.isValidElement(a)&&typeof a.type=="function"&&"__radixId"in a.type&&a.type.__radixId===n6}function s6(a,n){const s={...n};for(const i in n){const l=a[i],c=n[i];/^on[A-Z]/.test(i)?l&&c?s[i]=(...h)=>{const g=c(...h);return l(...h),g}:l&&(s[i]=l):i==="style"?s[i]={...l,...c}:i==="className"&&(s[i]=[l,c].filter(Boolean).join(" "))}return{...a,...s}}function l6(a){var i,l;let n=(i=Object.getOwnPropertyDescriptor(a.props,"ref"))==null?void 0:i.get,s=n&&"isReactWarning"in n&&n.isReactWarning;return s?a.ref:(n=(l=Object.getOwnPropertyDescriptor(a,"ref"))==null?void 0:l.get,s=n&&"isReactWarning"in n&&n.isReactWarning,s?a.props.ref:a.props.ref||a.ref)}function _m(a){const n=a+"CollectionProvider",[s,i]=Wi(n),[l,c]=s(n,{collectionRef:{current:null},itemMap:new Map}),d=_=>{const{scope:b,children:x}=_,O=Ae.useRef(null),R=Ae.useRef(new Map).current;return M.jsx(l,{scope:b,itemMap:R,collectionRef:O,children:x})};d.displayName=n;const h=a+"CollectionSlot",g=wv(h),p=Ae.forwardRef((_,b)=>{const{scope:x,children:O}=_,R=c(h,x),C=zt(b,R.collectionRef);return M.jsx(g,{ref:C,children:O})});p.displayName=h;const m=a+"CollectionItemSlot",u="data-radix-collection-item",S=wv(m),w=Ae.forwardRef((_,b)=>{const{scope:x,children:O,...R}=_,C=Ae.useRef(null),A=zt(b,C),I=c(m,x);return Ae.useEffect(()=>(I.itemMap.set(C,{ref:C,...R}),()=>void I.itemMap.delete(C))),M.jsx(S,{[u]:"",ref:A,children:O})});w.displayName=m;function z(_){const b=c(a+"CollectionConsumer",_);return Ae.useCallback(()=>{const O=b.collectionRef.current;if(!O)return[];const R=Array.from(O.querySelectorAll(`[${u}]`));return Array.from(b.itemMap.values()).sort((I,H)=>R.indexOf(I.ref.current)-R.indexOf(H.ref.current))},[b.collectionRef,b.itemMap])}return[{Provider:d,Slot:p,ItemSlot:w},z,i]}var Da=globalThis!=null&&globalThis.document?y.useLayoutEffect:()=>{},o6=gm[" useId ".trim().toString()]||(()=>{}),c6=0;function fn(a){const[n,s]=y.useState(o6());return Da(()=>{s(i=>i??String(c6++))},[a]),a||(n?`radix-${n}`:"")}function d6(a){const n=u6(a),s=y.forwardRef((i,l)=>{const{children:c,...d}=i,h=y.Children.toArray(c),g=h.find(f6);if(g){const p=g.props.children,m=h.map(u=>u===g?y.Children.count(p)>1?y.Children.only(null):y.isValidElement(p)?p.props.children:null:u);return M.jsx(n,{...d,ref:l,children:y.isValidElement(p)?y.cloneElement(p,void 0,m):null})}return M.jsx(n,{...d,ref:l,children:c})});return s.displayName=`${a}.Slot`,s}function u6(a){const n=y.forwardRef((s,i)=>{const{children:l,...c}=s;if(y.isValidElement(l)){const d=p6(l),h=m6(c,l.props);return l.type!==y.Fragment&&(h.ref=i?gl(i,d):d),y.cloneElement(l,h)}return y.Children.count(l)>1?y.Children.only(null):null});return n.displayName=`${a}.SlotClone`,n}var h6=Symbol("radix.slottable");function f6(a){return y.isValidElement(a)&&typeof a.type=="function"&&"__radixId"in a.type&&a.type.__radixId===h6}function m6(a,n){const s={...n};for(const i in n){const l=a[i],c=n[i];/^on[A-Z]/.test(i)?l&&c?s[i]=(...h)=>{const g=c(...h);return l(...h),g}:l&&(s[i]=l):i==="style"?s[i]={...l,...c}:i==="className"&&(s[i]=[l,c].filter(Boolean).join(" "))}return{...a,...s}}function p6(a){var i,l;let n=(i=Object.getOwnPropertyDescriptor(a.props,"ref"))==null?void 0:i.get,s=n&&"isReactWarning"in n&&n.isReactWarning;return s?a.ref:(n=(l=Object.getOwnPropertyDescriptor(a,"ref"))==null?void 0:l.get,s=n&&"isReactWarning"in n&&n.isReactWarning,s?a.props.ref:a.props.ref||a.ref)}var g6=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],st=g6.reduce((a,n)=>{const s=d6(`Primitive.${n}`),i=y.forwardRef((l,c)=>{const{asChild:d,...h}=l,g=d?s:n;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),M.jsx(g,{...h,ref:c})});return i.displayName=`Primitive.${n}`,{...a,[n]:i}},{});function v6(a,n){a&&Oo.flushSync(()=>a.dispatchEvent(n))}function Ya(a){const n=y.useRef(a);return y.useEffect(()=>{n.current=a}),y.useMemo(()=>(...s)=>{var i;return(i=n.current)==null?void 0:i.call(n,...s)},[])}var b6=gm[" useInsertionEffect ".trim().toString()]||Da;function pn({prop:a,defaultProp:n,onChange:s=()=>{},caller:i}){const[l,c,d]=y6({defaultProp:n,onChange:s}),h=a!==void 0,g=h?a:l;{const m=y.useRef(a!==void 0);y.useEffect(()=>{const u=m.current;u!==h&&console.warn(`${i} is changing from ${u?"controlled":"uncontrolled"} to ${h?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),m.current=h},[h,i])}const p=y.useCallback(m=>{var u;if(h){const S=_6(m)?m(a):m;S!==a&&((u=d.current)==null||u.call(d,S))}else c(m)},[h,a,c,d]);return[g,p]}function y6({defaultProp:a,onChange:n}){const[s,i]=y.useState(a),l=y.useRef(s),c=y.useRef(n);return b6(()=>{c.current=n},[n]),y.useEffect(()=>{var d;l.current!==s&&((d=c.current)==null||d.call(c,s),l.current=s)},[s,l]),[s,i,c]}function _6(a){return typeof a=="function"}var x6=y.createContext(void 0);function Ho(a){const n=y.useContext(x6);return a||n||"ltr"}var wf="rovingFocusGroup.onEntryFocus",w6={bubbles:!1,cancelable:!0},Ro="RovingFocusGroup",[Wf,t8,z6]=_m(Ro),[S6,a8]=Wi(Ro,[z6]),[M6,E6]=S6(Ro),i8=y.forwardRef((a,n)=>M.jsx(Wf.Provider,{scope:a.__scopeRovingFocusGroup,children:M.jsx(Wf.Slot,{scope:a.__scopeRovingFocusGroup,children:M.jsx(T6,{...a,ref:n})})}));i8.displayName=Ro;var T6=y.forwardRef((a,n)=>{const{__scopeRovingFocusGroup:s,orientation:i,loop:l=!1,dir:c,currentTabStopId:d,defaultCurrentTabStopId:h,onCurrentTabStopIdChange:g,onEntryFocus:p,preventScrollOnEntryFocus:m=!1,...u}=a,S=y.useRef(null),w=zt(n,S),z=Ho(c),[_,b]=pn({prop:d,defaultProp:h??null,onChange:g,caller:Ro}),[x,O]=y.useState(!1),R=Ya(p),C=t8(s),A=y.useRef(!1),[I,H]=y.useState(0);return y.useEffect(()=>{const $=S.current;if($)return $.addEventListener(wf,R),()=>$.removeEventListener(wf,R)},[R]),M.jsx(M6,{scope:s,orientation:i,dir:z,loop:l,currentTabStopId:_,onItemFocus:y.useCallback($=>b($),[b]),onItemShiftTab:y.useCallback(()=>O(!0),[]),onFocusableItemAdd:y.useCallback(()=>H($=>$+1),[]),onFocusableItemRemove:y.useCallback(()=>H($=>$-1),[]),children:M.jsx(st.div,{tabIndex:x||I===0?-1:0,"data-orientation":i,...u,ref:w,style:{outline:"none",...a.style},onMouseDown:ot(a.onMouseDown,()=>{A.current=!0}),onFocus:ot(a.onFocus,$=>{const Z=!A.current;if($.target===$.currentTarget&&Z&&!x){const he=new CustomEvent(wf,w6);if($.currentTarget.dispatchEvent(he),!he.defaultPrevented){const xe=C().filter(k=>k.focusable),V=xe.find(k=>k.active),T=xe.find(k=>k.id===_),ze=[V,T,...xe].filter(Boolean).map(k=>k.ref.current);s8(ze,m)}}A.current=!1}),onBlur:ot(a.onBlur,()=>O(!1))})})}),n8="RovingFocusGroupItem",r8=y.forwardRef((a,n)=>{const{__scopeRovingFocusGroup:s,focusable:i=!0,active:l=!1,tabStopId:c,children:d,...h}=a,g=fn(),p=c||g,m=E6(n8,s),u=m.currentTabStopId===p,S=t8(s),{onFocusableItemAdd:w,onFocusableItemRemove:z,currentTabStopId:_}=m;return y.useEffect(()=>{if(i)return w(),()=>z()},[i,w,z]),M.jsx(Wf.ItemSlot,{scope:s,id:p,focusable:i,active:l,children:M.jsx(st.span,{tabIndex:u?0:-1,"data-orientation":m.orientation,...h,ref:n,onMouseDown:ot(a.onMouseDown,b=>{i?m.onItemFocus(p):b.preventDefault()}),onFocus:ot(a.onFocus,()=>m.onItemFocus(p)),onKeyDown:ot(a.onKeyDown,b=>{if(b.key==="Tab"&&b.shiftKey){m.onItemShiftTab();return}if(b.target!==b.currentTarget)return;const x=k6(b,m.orientation,m.dir);if(x!==void 0){if(b.metaKey||b.ctrlKey||b.altKey||b.shiftKey)return;b.preventDefault();let R=S().filter(C=>C.focusable).map(C=>C.ref.current);if(x==="last")R.reverse();else if(x==="prev"||x==="next"){x==="prev"&&R.reverse();const C=R.indexOf(b.currentTarget);R=m.loop?j6(R,C+1):R.slice(C+1)}setTimeout(()=>s8(R))}}),children:typeof d=="function"?d({isCurrentTabStop:u,hasTabStop:_!=null}):d})})});r8.displayName=n8;var C6={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function A6(a,n){return n!=="rtl"?a:a==="ArrowLeft"?"ArrowRight":a==="ArrowRight"?"ArrowLeft":a}function k6(a,n,s){const i=A6(a.key,s);if(!(n==="vertical"&&["ArrowLeft","ArrowRight"].includes(i))&&!(n==="horizontal"&&["ArrowUp","ArrowDown"].includes(i)))return C6[i]}function s8(a,n=!1){const s=document.activeElement;for(const i of a)if(i===s||(i.focus({preventScroll:n}),document.activeElement!==s))return}function j6(a,n){return a.map((s,i)=>a[(n+i)%a.length])}var N6=i8,D6=r8;function O6(a,n){return y.useReducer((s,i)=>n[s][i]??s,a)}var Ji=a=>{const{present:n,children:s}=a,i=H6(n),l=typeof s=="function"?s({present:i.isPresent}):y.Children.only(s),c=zt(i.ref,R6(l));return typeof s=="function"||i.isPresent?y.cloneElement(l,{ref:c}):null};Ji.displayName="Presence";function H6(a){const[n,s]=y.useState(),i=y.useRef(null),l=y.useRef(a),c=y.useRef("none"),d=a?"mounted":"unmounted",[h,g]=O6(d,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return y.useEffect(()=>{const p=ad(i.current);c.current=h==="mounted"?p:"none"},[h]),Da(()=>{const p=i.current,m=l.current;if(m!==a){const S=c.current,w=ad(p);a?g("MOUNT"):w==="none"||(p==null?void 0:p.display)==="none"?g("UNMOUNT"):g(m&&S!==w?"ANIMATION_OUT":"UNMOUNT"),l.current=a}},[a,g]),Da(()=>{if(n){let p;const m=n.ownerDocument.defaultView??window,u=w=>{const _=ad(i.current).includes(CSS.escape(w.animationName));if(w.target===n&&_&&(g("ANIMATION_END"),!l.current)){const b=n.style.animationFillMode;n.style.animationFillMode="forwards",p=m.setTimeout(()=>{n.style.animationFillMode==="forwards"&&(n.style.animationFillMode=b)})}},S=w=>{w.target===n&&(c.current=ad(i.current))};return n.addEventListener("animationstart",S),n.addEventListener("animationcancel",u),n.addEventListener("animationend",u),()=>{m.clearTimeout(p),n.removeEventListener("animationstart",S),n.removeEventListener("animationcancel",u),n.removeEventListener("animationend",u)}}else g("ANIMATION_END")},[n,g]),{isPresent:["mounted","unmountSuspended"].includes(h),ref:y.useCallback(p=>{i.current=p?getComputedStyle(p):null,s(p)},[])}}function ad(a){return(a==null?void 0:a.animationName)||"none"}function R6(a){var i,l;let n=(i=Object.getOwnPropertyDescriptor(a.props,"ref"))==null?void 0:i.get,s=n&&"isReactWarning"in n&&n.isReactWarning;return s?a.ref:(n=(l=Object.getOwnPropertyDescriptor(a,"ref"))==null?void 0:l.get,s=n&&"isReactWarning"in n&&n.isReactWarning,s?a.props.ref:a.props.ref||a.ref)}var Rd="Tabs",[$6]=Wi(Rd,[a8]),l8=a8(),[V6,xm]=$6(Rd),o8=y.forwardRef((a,n)=>{const{__scopeTabs:s,value:i,onValueChange:l,defaultValue:c,orientation:d="horizontal",dir:h,activationMode:g="automatic",...p}=a,m=Ho(h),[u,S]=pn({prop:i,onChange:l,defaultProp:c??"",caller:Rd});return M.jsx(V6,{scope:s,baseId:fn(),value:u,onValueChange:S,orientation:d,dir:m,activationMode:g,children:M.jsx(st.div,{dir:m,"data-orientation":d,...p,ref:n})})});o8.displayName=Rd;var c8="TabsList",d8=y.forwardRef((a,n)=>{const{__scopeTabs:s,loop:i=!0,...l}=a,c=xm(c8,s),d=l8(s);return M.jsx(N6,{asChild:!0,...d,orientation:c.orientation,dir:c.dir,loop:i,children:M.jsx(st.div,{role:"tablist","aria-orientation":c.orientation,...l,ref:n})})});d8.displayName=c8;var u8="TabsTrigger",h8=y.forwardRef((a,n)=>{const{__scopeTabs:s,value:i,disabled:l=!1,...c}=a,d=xm(u8,s),h=l8(s),g=p8(d.baseId,i),p=g8(d.baseId,i),m=i===d.value;return M.jsx(D6,{asChild:!0,...h,focusable:!l,active:m,children:M.jsx(st.button,{type:"button",role:"tab","aria-selected":m,"aria-controls":p,"data-state":m?"active":"inactive","data-disabled":l?"":void 0,disabled:l,id:g,...c,ref:n,onMouseDown:ot(a.onMouseDown,u=>{!l&&u.button===0&&u.ctrlKey===!1?d.onValueChange(i):u.preventDefault()}),onKeyDown:ot(a.onKeyDown,u=>{[" ","Enter"].includes(u.key)&&d.onValueChange(i)}),onFocus:ot(a.onFocus,()=>{const u=d.activationMode!=="manual";!m&&!l&&u&&d.onValueChange(i)})})})});h8.displayName=u8;var f8="TabsContent",m8=y.forwardRef((a,n)=>{const{__scopeTabs:s,value:i,forceMount:l,children:c,...d}=a,h=xm(f8,s),g=p8(h.baseId,i),p=g8(h.baseId,i),m=i===h.value,u=y.useRef(m);return y.useEffect(()=>{const S=requestAnimationFrame(()=>u.current=!1);return()=>cancelAnimationFrame(S)},[]),M.jsx(Ji,{present:l||m,children:({present:S})=>M.jsx(st.div,{"data-state":m?"active":"inactive","data-orientation":h.orientation,role:"tabpanel","aria-labelledby":g,hidden:!S,id:p,tabIndex:0,...d,ref:n,style:{...a.style,animationDuration:u.current?"0s":void 0},children:S&&c})})});m8.displayName=f8;function p8(a,n){return`${a}-trigger-${n}`}function g8(a,n){return`${a}-content-${n}`}var L6=o8,B6=d8,U6=h8,I6=m8;function P6({className:a,...n}){return M.jsx(L6,{"data-slot":"tabs",className:St("flex flex-col gap-2",a),...n})}function Z6({className:a,...n}){return M.jsx(B6,{"data-slot":"tabs-list",className:St("bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",a),...n})}function zv({className:a,...n}){return M.jsx(U6,{"data-slot":"tabs-trigger",className:St("data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",a),...n})}function Sv({className:a,...n}){return M.jsx(I6,{"data-slot":"tabs-content",className:St("flex-1 outline-none",a),...n})}function $o({className:a,...n}){return M.jsx("div",{"data-slot":"card",className:St("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",a),...n})}const q6=new Map([["bold",y.createElement(y.Fragment,null,y.createElement("path",{d:"M236,200a12,12,0,0,1-24,0,84.09,84.09,0,0,0-84-84H61l27.52,27.51a12,12,0,0,1-17,17l-48-48a12,12,0,0,1,0-17l48-48a12,12,0,0,1,17,17L61,92h67A108.12,108.12,0,0,1,236,200Z"}))],["duotone",y.createElement(y.Fragment,null,y.createElement("path",{d:"M80,56v96L32,104Z",opacity:"0.2"}),y.createElement("path",{d:"M128,96H88V56a8,8,0,0,0-13.66-5.66l-48,48a8,8,0,0,0,0,11.32l48,48A8,8,0,0,0,88,152V112h40a88.1,88.1,0,0,1,88,88,8,8,0,0,0,16,0A104.11,104.11,0,0,0,128,96ZM72,132.69,43.31,104,72,75.31Z"}))],["fill",y.createElement(y.Fragment,null,y.createElement("path",{d:"M232,200a8,8,0,0,1-16,0,88.1,88.1,0,0,0-88-88H88v40a8,8,0,0,1-13.66,5.66l-48-48a8,8,0,0,1,0-11.32l48-48A8,8,0,0,1,88,56V96h40A104.11,104.11,0,0,1,232,200Z"}))],["light",y.createElement(y.Fragment,null,y.createElement("path",{d:"M230,200a6,6,0,0,1-12,0,90.1,90.1,0,0,0-90-90H46.49l37.75,37.76a6,6,0,1,1-8.48,8.48l-48-48a6,6,0,0,1,0-8.48l48-48a6,6,0,0,1,8.48,8.48L46.49,98H128A102.12,102.12,0,0,1,230,200Z"}))],["regular",y.createElement(y.Fragment,null,y.createElement("path",{d:"M232,200a8,8,0,0,1-16,0,88.1,88.1,0,0,0-88-88H51.31l34.35,34.34a8,8,0,0,1-11.32,11.32l-48-48a8,8,0,0,1,0-11.32l48-48A8,8,0,0,1,85.66,61.66L51.31,96H128A104.11,104.11,0,0,1,232,200Z"}))],["thin",y.createElement(y.Fragment,null,y.createElement("path",{d:"M228,200a4,4,0,0,1-8,0,92.1,92.1,0,0,0-92-92H41.66l41.17,41.17a4,4,0,0,1-5.66,5.66l-48-48a4,4,0,0,1,0-5.66l48-48a4,4,0,0,1,5.66,5.66L41.66,100H128A100.11,100.11,0,0,1,228,200Z"}))]]),Y6=new Map([["bold",y.createElement(y.Fragment,null,y.createElement("path",{d:"M168.49,199.51a12,12,0,0,1-17,17l-80-80a12,12,0,0,1,0-17l80-80a12,12,0,0,1,17,17L97,128Z"}))],["duotone",y.createElement(y.Fragment,null,y.createElement("path",{d:"M160,48V208L80,128Z",opacity:"0.2"}),y.createElement("path",{d:"M163.06,40.61a8,8,0,0,0-8.72,1.73l-80,80a8,8,0,0,0,0,11.32l80,80A8,8,0,0,0,168,208V48A8,8,0,0,0,163.06,40.61ZM152,188.69,91.31,128,152,67.31Z"}))],["fill",y.createElement(y.Fragment,null,y.createElement("path",{d:"M168,48V208a8,8,0,0,1-13.66,5.66l-80-80a8,8,0,0,1,0-11.32l80-80A8,8,0,0,1,168,48Z"}))],["light",y.createElement(y.Fragment,null,y.createElement("path",{d:"M164.24,203.76a6,6,0,1,1-8.48,8.48l-80-80a6,6,0,0,1,0-8.48l80-80a6,6,0,0,1,8.48,8.48L88.49,128Z"}))],["regular",y.createElement(y.Fragment,null,y.createElement("path",{d:"M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"}))],["thin",y.createElement(y.Fragment,null,y.createElement("path",{d:"M162.83,205.17a4,4,0,0,1-5.66,5.66l-80-80a4,4,0,0,1,0-5.66l80-80a4,4,0,1,1,5.66,5.66L85.66,128Z"}))]]),F6=new Map([["bold",y.createElement(y.Fragment,null,y.createElement("path",{d:"M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z"}))],["duotone",y.createElement(y.Fragment,null,y.createElement("path",{d:"M176,128,96,208V48Z",opacity:"0.2"}),y.createElement("path",{d:"M181.66,122.34l-80-80A8,8,0,0,0,88,48V208a8,8,0,0,0,13.66,5.66l80-80A8,8,0,0,0,181.66,122.34ZM104,188.69V67.31L164.69,128Z"}))],["fill",y.createElement(y.Fragment,null,y.createElement("path",{d:"M181.66,133.66l-80,80A8,8,0,0,1,88,208V48a8,8,0,0,1,13.66-5.66l80,80A8,8,0,0,1,181.66,133.66Z"}))],["light",y.createElement(y.Fragment,null,y.createElement("path",{d:"M180.24,132.24l-80,80a6,6,0,0,1-8.48-8.48L167.51,128,91.76,52.24a6,6,0,0,1,8.48-8.48l80,80A6,6,0,0,1,180.24,132.24Z"}))],["regular",y.createElement(y.Fragment,null,y.createElement("path",{d:"M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"}))],["thin",y.createElement(y.Fragment,null,y.createElement("path",{d:"M178.83,130.83l-80,80a4,4,0,0,1-5.66-5.66L170.34,128,93.17,50.83a4,4,0,0,1,5.66-5.66l80,80A4,4,0,0,1,178.83,130.83Z"}))]]),G6=new Map([["bold",y.createElement(y.Fragment,null,y.createElement("path",{d:"M128,20A108,108,0,0,0,31.85,177.23L21,209.66A20,20,0,0,0,46.34,235l32.43-10.81A108,108,0,1,0,128,20Zm0,192a84,84,0,0,1-42.06-11.27,12,12,0,0,0-6-1.62,12.1,12.1,0,0,0-3.8.62l-29.79,9.93,9.93-29.79a12,12,0,0,0-1-9.81A84,84,0,1,1,128,212Z"}))],["duotone",y.createElement(y.Fragment,null,y.createElement("path",{d:"M224,128A96,96,0,0,1,79.93,211.11h0L42.54,223.58a8,8,0,0,1-10.12-10.12l12.47-37.39h0A96,96,0,1,1,224,128Z",opacity:"0.2"}),y.createElement("path",{d:"M128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z"}))],["fill",y.createElement(y.Fragment,null,y.createElement("path",{d:"M232,128A104,104,0,0,1,79.12,219.82L45.07,231.17a16,16,0,0,1-20.24-20.24l11.35-34.05A104,104,0,1,1,232,128Z"}))],["light",y.createElement(y.Fragment,null,y.createElement("path",{d:"M128,26A102,102,0,0,0,38.35,176.69L26.73,211.56a14,14,0,0,0,17.71,17.71l34.87-11.62A102,102,0,1,0,128,26Zm0,192a90,90,0,0,1-45.06-12.08,6.09,6.09,0,0,0-3-.81,6.2,6.2,0,0,0-1.9.31L40.65,217.88a2,2,0,0,1-2.53-2.53L50.58,178a6,6,0,0,0-.5-4.91A90,90,0,1,1,128,218Z"}))],["regular",y.createElement(y.Fragment,null,y.createElement("path",{d:"M128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z"}))],["thin",y.createElement(y.Fragment,null,y.createElement("path",{d:"M128,28A100,100,0,0,0,40.53,176.5l-11.9,35.69a12,12,0,0,0,15.18,15.18l35.69-11.9A100,100,0,1,0,128,28Zm0,192a92,92,0,0,1-46.07-12.35,4.05,4.05,0,0,0-2-.54,3.93,3.93,0,0,0-1.27.21L41.28,219.78a4,4,0,0,1-5.06-5.06l12.46-37.38a4,4,0,0,0-.33-3.27A92,92,0,1,1,128,220Z"}))]]),X6=new Map([["bold",y.createElement(y.Fragment,null,y.createElement("path",{d:"M108,60A16,16,0,1,1,92,44,16,16,0,0,1,108,60Zm56,16a16,16,0,1,0-16-16A16,16,0,0,0,164,76ZM92,112a16,16,0,1,0,16,16A16,16,0,0,0,92,112Zm72,0a16,16,0,1,0,16,16A16,16,0,0,0,164,112ZM92,180a16,16,0,1,0,16,16A16,16,0,0,0,92,180Zm72,0a16,16,0,1,0,16,16A16,16,0,0,0,164,180Z"}))],["duotone",y.createElement(y.Fragment,null,y.createElement("path",{d:"M208,32V224a16,16,0,0,1-16,16H64a16,16,0,0,1-16-16V32A16,16,0,0,1,64,16H192A16,16,0,0,1,208,32Z",opacity:"0.2"}),y.createElement("path",{d:"M104,60A12,12,0,1,1,92,48,12,12,0,0,1,104,60Zm60,12a12,12,0,1,0-12-12A12,12,0,0,0,164,72ZM92,116a12,12,0,1,0,12,12A12,12,0,0,0,92,116Zm72,0a12,12,0,1,0,12,12A12,12,0,0,0,164,116ZM92,184a12,12,0,1,0,12,12A12,12,0,0,0,92,184Zm72,0a12,12,0,1,0,12,12A12,12,0,0,0,164,184Z"}))],["fill",y.createElement(y.Fragment,null,y.createElement("path",{d:"M192,16H64A16,16,0,0,0,48,32V224a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V32A16,16,0,0,0,192,16ZM100,200a12,12,0,1,1,12-12A12,12,0,0,1,100,200Zm0-60a12,12,0,1,1,12-12A12,12,0,0,1,100,140Zm0-60a12,12,0,1,1,12-12A12,12,0,0,1,100,80Zm56,120a12,12,0,1,1,12-12A12,12,0,0,1,156,200Zm0-60a12,12,0,1,1,12-12A12,12,0,0,1,156,140Zm0-60a12,12,0,1,1,12-12A12,12,0,0,1,156,80Z"}))],["light",y.createElement(y.Fragment,null,y.createElement("path",{d:"M102,60A10,10,0,1,1,92,50,10,10,0,0,1,102,60Zm62,10a10,10,0,1,0-10-10A10,10,0,0,0,164,70ZM92,118a10,10,0,1,0,10,10A10,10,0,0,0,92,118Zm72,0a10,10,0,1,0,10,10A10,10,0,0,0,164,118ZM92,186a10,10,0,1,0,10,10A10,10,0,0,0,92,186Zm72,0a10,10,0,1,0,10,10A10,10,0,0,0,164,186Z"}))],["regular",y.createElement(y.Fragment,null,y.createElement("path",{d:"M104,60A12,12,0,1,1,92,48,12,12,0,0,1,104,60Zm60,12a12,12,0,1,0-12-12A12,12,0,0,0,164,72ZM92,116a12,12,0,1,0,12,12A12,12,0,0,0,92,116Zm72,0a12,12,0,1,0,12,12A12,12,0,0,0,164,116ZM92,184a12,12,0,1,0,12,12A12,12,0,0,0,92,184Zm72,0a12,12,0,1,0,12,12A12,12,0,0,0,164,184Z"}))],["thin",y.createElement(y.Fragment,null,y.createElement("path",{d:"M100,60a8,8,0,1,1-8-8A8,8,0,0,1,100,60Zm64,8a8,8,0,1,0-8-8A8,8,0,0,0,164,68ZM92,120a8,8,0,1,0,8,8A8,8,0,0,0,92,120Zm72,0a8,8,0,1,0,8,8A8,8,0,0,0,164,120ZM92,188a8,8,0,1,0,8,8A8,8,0,0,0,92,188Zm72,0a8,8,0,1,0,8,8A8,8,0,0,0,164,188Z"}))]]),Q6=new Map([["bold",y.createElement(y.Fragment,null,y.createElement("path",{d:"M220,112v96a20,20,0,0,1-20,20H56a20,20,0,0,1-20-20V112A20,20,0,0,1,56,92H76a12,12,0,0,1,0,24H60v88H196V116H180a12,12,0,0,1,0-24h20A20,20,0,0,1,220,112ZM96.49,72.49,116,53v83a12,12,0,0,0,24,0V53l19.51,19.52a12,12,0,1,0,17-17l-40-40a12,12,0,0,0-17,0l-40,40a12,12,0,1,0,17,17Z"}))],["duotone",y.createElement(y.Fragment,null,y.createElement("path",{d:"M208,104V216H48V104Z",opacity:"0.2"}),y.createElement("path",{d:"M216,112v96a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V112A16,16,0,0,1,56,96H80a8,8,0,0,1,0,16H56v96H200V112H176a8,8,0,0,1,0-16h24A16,16,0,0,1,216,112ZM93.66,69.66,120,43.31V136a8,8,0,0,0,16,0V43.31l26.34,26.35a8,8,0,0,0,11.32-11.32l-40-40a8,8,0,0,0-11.32,0l-40,40A8,8,0,0,0,93.66,69.66Z"}))],["fill",y.createElement(y.Fragment,null,y.createElement("path",{d:"M216,112v96a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V112A16,16,0,0,1,56,96h64v48a8,8,0,0,0,16,0V96h64A16,16,0,0,1,216,112ZM136,43.31l26.34,26.35a8,8,0,0,0,11.32-11.32l-40-40a8,8,0,0,0-11.32,0l-40,40A8,8,0,0,0,93.66,69.66L120,43.31V96h16Z"}))],["light",y.createElement(y.Fragment,null,y.createElement("path",{d:"M214,112v96a14,14,0,0,1-14,14H56a14,14,0,0,1-14-14V112A14,14,0,0,1,56,98H80a6,6,0,0,1,0,12H56a2,2,0,0,0-2,2v96a2,2,0,0,0,2,2H200a2,2,0,0,0,2-2V112a2,2,0,0,0-2-2H176a6,6,0,0,1,0-12h24A14,14,0,0,1,214,112ZM92.24,68.24,122,38.49V136a6,6,0,0,0,12,0V38.49l29.76,29.75a6,6,0,1,0,8.48-8.48l-40-40a6,6,0,0,0-8.48,0l-40,40a6,6,0,1,0,8.48,8.48Z"}))],["regular",y.createElement(y.Fragment,null,y.createElement("path",{d:"M216,112v96a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V112A16,16,0,0,1,56,96H80a8,8,0,0,1,0,16H56v96H200V112H176a8,8,0,0,1,0-16h24A16,16,0,0,1,216,112ZM93.66,69.66,120,43.31V136a8,8,0,0,0,16,0V43.31l26.34,26.35a8,8,0,0,0,11.32-11.32l-40-40a8,8,0,0,0-11.32,0l-40,40A8,8,0,0,0,93.66,69.66Z"}))],["thin",y.createElement(y.Fragment,null,y.createElement("path",{d:"M212,112v96a12,12,0,0,1-12,12H56a12,12,0,0,1-12-12V112a12,12,0,0,1,12-12H80a4,4,0,0,1,0,8H56a4,4,0,0,0-4,4v96a4,4,0,0,0,4,4H200a4,4,0,0,0,4-4V112a4,4,0,0,0-4-4H176a4,4,0,0,1,0-8h24A12,12,0,0,1,212,112ZM90.83,66.83,124,33.66V136a4,4,0,0,0,8,0V33.66l33.17,33.17a4,4,0,1,0,5.66-5.66l-40-40a4,4,0,0,0-5.66,0l-40,40a4,4,0,0,0,5.66,5.66Z"}))]]),K6=new Map([["bold",y.createElement(y.Fragment,null,y.createElement("path",{d:"M140,88a12,12,0,0,1,12-12h32a12,12,0,0,1,12,12v32a12,12,0,0,1-24,0V100H152A12,12,0,0,1,140,88ZM72,180h32a12,12,0,0,0,0-24H84V136a12,12,0,0,0-24,0v32A12,12,0,0,0,72,180ZM236,56V200a20,20,0,0,1-20,20H40a20,20,0,0,1-20-20V56A20,20,0,0,1,40,36H216A20,20,0,0,1,236,56Zm-24,4H44V196H212Z"}))],["duotone",y.createElement(y.Fragment,null,y.createElement("path",{d:"M224,56V200a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H216A8,8,0,0,1,224,56Z",opacity:"0.2"}),y.createElement("path",{d:"M200,80v32a8,8,0,0,1-16,0V88H160a8,8,0,0,1,0-16h32A8,8,0,0,1,200,80ZM96,168H72V144a8,8,0,0,0-16,0v32a8,8,0,0,0,8,8H96a8,8,0,0,0,0-16ZM232,56V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM216,200V56H40V200H216Z"}))],["fill",y.createElement(y.Fragment,null,y.createElement("path",{d:"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM88,192H56a8,8,0,0,1-8-8V152a8,8,0,0,1,16,0v24H88a8,8,0,0,1,0,16Zm120-88a8,8,0,0,1-16,0V80H168a8,8,0,0,1,0-16h32a8,8,0,0,1,8,8Z"}))],["light",y.createElement(y.Fragment,null,y.createElement("path",{d:"M198,80v32a6,6,0,0,1-12,0V86H160a6,6,0,0,1,0-12h32A6,6,0,0,1,198,80ZM96,170H70V144a6,6,0,0,0-12,0v32a6,6,0,0,0,6,6H96a6,6,0,0,0,0-12ZM230,56V200a14,14,0,0,1-14,14H40a14,14,0,0,1-14-14V56A14,14,0,0,1,40,42H216A14,14,0,0,1,230,56Zm-12,0a2,2,0,0,0-2-2H40a2,2,0,0,0-2,2V200a2,2,0,0,0,2,2H216a2,2,0,0,0,2-2Z"}))],["regular",y.createElement(y.Fragment,null,y.createElement("path",{d:"M200,80v32a8,8,0,0,1-16,0V88H160a8,8,0,0,1,0-16h32A8,8,0,0,1,200,80ZM96,168H72V144a8,8,0,0,0-16,0v32a8,8,0,0,0,8,8H96a8,8,0,0,0,0-16ZM232,56V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM216,200V56H40V200H216Z"}))],["thin",y.createElement(y.Fragment,null,y.createElement("path",{d:"M196,80v32a4,4,0,0,1-8,0V84H160a4,4,0,0,1,0-8h32A4,4,0,0,1,196,80ZM96,172H68V144a4,4,0,0,0-8,0v32a4,4,0,0,0,4,4H96a4,4,0,0,0,0-8ZM228,56V200a12,12,0,0,1-12,12H40a12,12,0,0,1-12-12V56A12,12,0,0,1,40,44H216A12,12,0,0,1,228,56Zm-8,0a4,4,0,0,0-4-4H40a4,4,0,0,0-4,4V200a4,4,0,0,0,4,4H216a4,4,0,0,0,4-4Z"}))]]),W6=new Map([["bold",y.createElement(y.Fragment,null,y.createElement("path",{d:"M144,96a16,16,0,1,1,16,16A16,16,0,0,1,144,96Zm92-40V200a20,20,0,0,1-20,20H40a20,20,0,0,1-20-20V56A20,20,0,0,1,40,36H216A20,20,0,0,1,236,56ZM44,60v79.72l33.86-33.86a20,20,0,0,1,28.28,0L147.31,147l17.18-17.17a20,20,0,0,1,28.28,0L212,149.09V60Zm0,136H162.34L92,125.66l-48,48Zm168,0V183l-33.37-33.37L164.28,164l32,32Z"}))],["duotone",y.createElement(y.Fragment,null,y.createElement("path",{d:"M224,56V178.06l-39.72-39.72a8,8,0,0,0-11.31,0L147.31,164,97.66,114.34a8,8,0,0,0-11.32,0L32,168.69V56a8,8,0,0,1,8-8H216A8,8,0,0,1,224,56Z",opacity:"0.2"}),y.createElement("path",{d:"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V158.75l-26.07-26.06a16,16,0,0,0-22.63,0l-20,20-44-44a16,16,0,0,0-22.62,0L40,149.37V56ZM40,172l52-52,80,80H40Zm176,28H194.63l-36-36,20-20L216,181.38V200ZM144,100a12,12,0,1,1,12,12A12,12,0,0,1,144,100Z"}))],["fill",y.createElement(y.Fragment,null,y.createElement("path",{d:"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM156,88a12,12,0,1,1-12,12A12,12,0,0,1,156,88Zm60,112H40V160.69l46.34-46.35a8,8,0,0,1,11.32,0h0L165,181.66a8,8,0,0,0,11.32-11.32l-17.66-17.65L173,138.34a8,8,0,0,1,11.31,0L216,170.07V200Z"}))],["light",y.createElement(y.Fragment,null,y.createElement("path",{d:"M216,42H40A14,14,0,0,0,26,56V200a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V56A14,14,0,0,0,216,42ZM40,54H216a2,2,0,0,1,2,2V163.57L188.53,134.1a14,14,0,0,0-19.8,0l-21.42,21.42L101.9,110.1a14,14,0,0,0-19.8,0L38,154.2V56A2,2,0,0,1,40,54ZM38,200V171.17l52.58-52.58a2,2,0,0,1,2.84,0L176.83,202H40A2,2,0,0,1,38,200Zm178,2H193.8l-38-38,21.41-21.42a2,2,0,0,1,2.83,0l38,38V200A2,2,0,0,1,216,202ZM146,100a10,10,0,1,1,10,10A10,10,0,0,1,146,100Z"}))],["regular",y.createElement(y.Fragment,null,y.createElement("path",{d:"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V158.75l-26.07-26.06a16,16,0,0,0-22.63,0l-20,20-44-44a16,16,0,0,0-22.62,0L40,149.37V56ZM40,172l52-52,80,80H40Zm176,28H194.63l-36-36,20-20L216,181.38V200ZM144,100a12,12,0,1,1,12,12A12,12,0,0,1,144,100Z"}))],["thin",y.createElement(y.Fragment,null,y.createElement("path",{d:"M216,44H40A12,12,0,0,0,28,56V200a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V56A12,12,0,0,0,216,44ZM40,52H216a4,4,0,0,1,4,4V168.4l-32.89-32.89a12,12,0,0,0-17,0l-22.83,22.83-46.82-46.83a12,12,0,0,0-17,0L36,159V56A4,4,0,0,1,40,52ZM36,200V170.34l53.17-53.17a4,4,0,0,1,5.66,0L181.66,204H40A4,4,0,0,1,36,200Zm180,4H193l-40-40,22.83-22.83a4,4,0,0,1,5.66,0L220,179.71V200A4,4,0,0,1,216,204ZM148,100a8,8,0,1,1,8,8A8,8,0,0,1,148,100Z"}))]]),J6=new Map([["bold",y.createElement(y.Fragment,null,y.createElement("path",{d:"M230.14,70.54,185.46,25.85a20,20,0,0,0-28.29,0L33.86,149.17A19.85,19.85,0,0,0,28,163.31V208a20,20,0,0,0,20,20H92.69a19.86,19.86,0,0,0,14.14-5.86L230.14,98.82a20,20,0,0,0,0-28.28ZM91,204H52V165l84-84,39,39ZM192,103,153,64l18.34-18.34,39,39Z"}))],["duotone",y.createElement(y.Fragment,null,y.createElement("path",{d:"M221.66,90.34,192,120,136,64l29.66-29.66a8,8,0,0,1,11.31,0L221.66,79A8,8,0,0,1,221.66,90.34Z",opacity:"0.2"}),y.createElement("path",{d:"M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM92.69,208H48V163.31l88-88L180.69,120ZM192,108.68,147.31,64l24-24L216,84.68Z"}))],["fill",y.createElement(y.Fragment,null,y.createElement("path",{d:"M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM192,108.68,147.31,64l24-24L216,84.68Z"}))],["light",y.createElement(y.Fragment,null,y.createElement("path",{d:"M225.9,74.78,181.21,30.09a14,14,0,0,0-19.8,0L38.1,153.41a13.94,13.94,0,0,0-4.1,9.9V208a14,14,0,0,0,14,14H92.69a13.94,13.94,0,0,0,9.9-4.1L225.9,94.58a14,14,0,0,0,0-19.8ZM94.1,209.41a2,2,0,0,1-1.41.59H48a2,2,0,0,1-2-2V163.31a2,2,0,0,1,.59-1.41L136,72.48,183.51,120ZM217.41,86.1,192,111.51,144.49,64,169.9,38.58a2,2,0,0,1,2.83,0l44.68,44.69a2,2,0,0,1,0,2.83Z"}))],["regular",y.createElement(y.Fragment,null,y.createElement("path",{d:"M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM92.69,208H48V163.31l88-88L180.69,120ZM192,108.68,147.31,64l24-24L216,84.68Z"}))],["thin",y.createElement(y.Fragment,null,y.createElement("path",{d:"M224.49,76.2,179.8,31.51a12,12,0,0,0-17,0L133.17,61.17h0L39.52,154.83A11.9,11.9,0,0,0,36,163.31V208a12,12,0,0,0,12,12H92.69a12,12,0,0,0,8.48-3.51L224.48,93.17a12,12,0,0,0,0-17Zm-129,134.63A4,4,0,0,1,92.69,212H48a4,4,0,0,1-4-4V163.31a4,4,0,0,1,1.17-2.83L136,69.65,186.34,120ZM218.83,87.51,192,114.34,141.66,64l26.82-26.83a4,4,0,0,1,5.66,0l44.69,44.68a4,4,0,0,1,0,5.66Z"}))]]),e7=new Map([["bold",y.createElement(y.Fragment,null,y.createElement("path",{d:"M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z"}))],["duotone",y.createElement(y.Fragment,null,y.createElement("path",{d:"M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",opacity:"0.2"}),y.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"}))],["fill",y.createElement(y.Fragment,null,y.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,136H136v48a8,8,0,0,1-16,0V136H72a8,8,0,0,1,0-16h48V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z"}))],["light",y.createElement(y.Fragment,null,y.createElement("path",{d:"M222,128a6,6,0,0,1-6,6H134v82a6,6,0,0,1-12,0V134H40a6,6,0,0,1,0-12h82V40a6,6,0,0,1,12,0v82h82A6,6,0,0,1,222,128Z"}))],["regular",y.createElement(y.Fragment,null,y.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"}))],["thin",y.createElement(y.Fragment,null,y.createElement("path",{d:"M220,128a4,4,0,0,1-4,4H132v84a4,4,0,0,1-8,0V132H40a4,4,0,0,1,0-8h84V40a4,4,0,0,1,8,0v84h84A4,4,0,0,1,220,128Z"}))]]),t7=new Map([["bold",y.createElement(y.Fragment,null,y.createElement("path",{d:"M216,48H180V36A28,28,0,0,0,152,8H104A28,28,0,0,0,76,36V48H40a12,12,0,0,0,0,24h4V208a20,20,0,0,0,20,20H192a20,20,0,0,0,20-20V72h4a12,12,0,0,0,0-24ZM100,36a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4V48H100Zm88,168H68V72H188ZM116,104v64a12,12,0,0,1-24,0V104a12,12,0,0,1,24,0Zm48,0v64a12,12,0,0,1-24,0V104a12,12,0,0,1,24,0Z"}))],["duotone",y.createElement(y.Fragment,null,y.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56Z",opacity:"0.2"}),y.createElement("path",{d:"M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"}))],["fill",y.createElement(y.Fragment,null,y.createElement("path",{d:"M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM112,168a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm0-120H96V40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8Z"}))],["light",y.createElement(y.Fragment,null,y.createElement("path",{d:"M216,50H174V40a22,22,0,0,0-22-22H104A22,22,0,0,0,82,40V50H40a6,6,0,0,0,0,12H50V208a14,14,0,0,0,14,14H192a14,14,0,0,0,14-14V62h10a6,6,0,0,0,0-12ZM94,40a10,10,0,0,1,10-10h48a10,10,0,0,1,10,10V50H94ZM194,208a2,2,0,0,1-2,2H64a2,2,0,0,1-2-2V62H194ZM110,104v64a6,6,0,0,1-12,0V104a6,6,0,0,1,12,0Zm48,0v64a6,6,0,0,1-12,0V104a6,6,0,0,1,12,0Z"}))],["regular",y.createElement(y.Fragment,null,y.createElement("path",{d:"M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"}))],["thin",y.createElement(y.Fragment,null,y.createElement("path",{d:"M216,52H172V40a20,20,0,0,0-20-20H104A20,20,0,0,0,84,40V52H40a4,4,0,0,0,0,8H52V208a12,12,0,0,0,12,12H192a12,12,0,0,0,12-12V60h12a4,4,0,0,0,0-8ZM92,40a12,12,0,0,1,12-12h48a12,12,0,0,1,12,12V52H92ZM196,208a4,4,0,0,1-4,4H64a4,4,0,0,1-4-4V60H196ZM108,104v64a4,4,0,0,1-8,0V104a4,4,0,0,1,8,0Zm48,0v64a4,4,0,0,1-8,0V104a4,4,0,0,1,8,0Z"}))]]),a7=new Map([["bold",y.createElement(y.Fragment,null,y.createElement("path",{d:"M188,184a16,16,0,1,1,16-16A16,16,0,0,1,188,184Zm36-68H180a12,12,0,0,0,0,24h40v56H36V140H76a12,12,0,0,0,0-24H32a20,20,0,0,0-20,20v64a20,20,0,0,0,20,20H224a20,20,0,0,0,20-20V136A20,20,0,0,0,224,116ZM88.49,80.49,116,53v75a12,12,0,0,0,24,0V53l27.51,27.52a12,12,0,1,0,17-17l-48-48a12,12,0,0,0-17,0l-48,48a12,12,0,1,0,17,17Z"}))],["duotone",y.createElement(y.Fragment,null,y.createElement("path",{d:"M232,136v64a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V136a8,8,0,0,1,8-8H224A8,8,0,0,1,232,136Z",opacity:"0.2"}),y.createElement("path",{d:"M240,136v64a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V136a16,16,0,0,1,16-16H80a8,8,0,0,1,0,16H32v64H224V136H176a8,8,0,0,1,0-16h48A16,16,0,0,1,240,136ZM85.66,77.66,120,43.31V128a8,8,0,0,0,16,0V43.31l34.34,34.35a8,8,0,0,0,11.32-11.32l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,85.66,77.66ZM200,168a12,12,0,1,0-12,12A12,12,0,0,0,200,168Z"}))],["fill",y.createElement(y.Fragment,null,y.createElement("path",{d:"M74.34,77.66a8,8,0,0,1,0-11.32l48-48a8,8,0,0,1,11.32,0l48,48a8,8,0,0,1-11.32,11.32L136,43.31V128a8,8,0,0,1-16,0V43.31L85.66,77.66A8,8,0,0,1,74.34,77.66ZM240,136v64a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V136a16,16,0,0,1,16-16h68a4,4,0,0,1,4,4v3.46c0,13.45,11,24.79,24.46,24.54A24,24,0,0,0,152,128v-4a4,4,0,0,1,4-4h68A16,16,0,0,1,240,136Zm-40,32a12,12,0,1,0-12,12A12,12,0,0,0,200,168Z"}))],["light",y.createElement(y.Fragment,null,y.createElement("path",{d:"M238,136v64a14,14,0,0,1-14,14H32a14,14,0,0,1-14-14V136a14,14,0,0,1,14-14H80a6,6,0,0,1,0,12H32a2,2,0,0,0-2,2v64a2,2,0,0,0,2,2H224a2,2,0,0,0,2-2V136a2,2,0,0,0-2-2H176a6,6,0,0,1,0-12h48A14,14,0,0,1,238,136ZM84.24,76.24,122,38.49V128a6,6,0,0,0,12,0V38.49l37.76,37.75a6,6,0,0,0,8.48-8.48l-48-48a6,6,0,0,0-8.48,0l-48,48a6,6,0,0,0,8.48,8.48ZM198,168a10,10,0,1,0-10,10A10,10,0,0,0,198,168Z"}))],["regular",y.createElement(y.Fragment,null,y.createElement("path",{d:"M240,136v64a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V136a16,16,0,0,1,16-16H80a8,8,0,0,1,0,16H32v64H224V136H176a8,8,0,0,1,0-16h48A16,16,0,0,1,240,136ZM85.66,77.66,120,43.31V128a8,8,0,0,0,16,0V43.31l34.34,34.35a8,8,0,0,0,11.32-11.32l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,85.66,77.66ZM200,168a12,12,0,1,0-12,12A12,12,0,0,0,200,168Z"}))],["thin",y.createElement(y.Fragment,null,y.createElement("path",{d:"M236,136v64a12,12,0,0,1-12,12H32a12,12,0,0,1-12-12V136a12,12,0,0,1,12-12H80a4,4,0,0,1,0,8H32a4,4,0,0,0-4,4v64a4,4,0,0,0,4,4H224a4,4,0,0,0,4-4V136a4,4,0,0,0-4-4H176a4,4,0,0,1,0-8h48A12,12,0,0,1,236,136ZM82.83,74.83,124,33.66V128a4,4,0,0,0,8,0V33.66l41.17,41.17a4,4,0,1,0,5.66-5.66l-48-48a4,4,0,0,0-5.66,0l-48,48a4,4,0,0,0,5.66,5.66ZM196,168a8,8,0,1,0-8,8A8,8,0,0,0,196,168Z"}))]]),i7=new Map([["bold",y.createElement(y.Fragment,null,y.createElement("path",{d:"M234.38,210a123.36,123.36,0,0,0-60.78-53.23,76,76,0,1,0-91.2,0A123.36,123.36,0,0,0,21.62,210a12,12,0,1,0,20.77,12c18.12-31.32,50.12-50,85.61-50s67.49,18.69,85.61,50a12,12,0,0,0,20.77-12ZM76,96a52,52,0,1,1,52,52A52.06,52.06,0,0,1,76,96Z"}))],["duotone",y.createElement(y.Fragment,null,y.createElement("path",{d:"M192,96a64,64,0,1,1-64-64A64,64,0,0,1,192,96Z",opacity:"0.2"}),y.createElement("path",{d:"M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"}))],["fill",y.createElement(y.Fragment,null,y.createElement("path",{d:"M230.93,220a8,8,0,0,1-6.93,4H32a8,8,0,0,1-6.92-12c15.23-26.33,38.7-45.21,66.09-54.16a72,72,0,1,1,73.66,0c27.39,8.95,50.86,27.83,66.09,54.16A8,8,0,0,1,230.93,220Z"}))],["light",y.createElement(y.Fragment,null,y.createElement("path",{d:"M229.19,213c-15.81-27.32-40.63-46.49-69.47-54.62a70,70,0,1,0-63.44,0C67.44,166.5,42.62,185.67,26.81,213a6,6,0,1,0,10.38,6C56.4,185.81,90.34,166,128,166s71.6,19.81,90.81,53a6,6,0,1,0,10.38-6ZM70,96a58,58,0,1,1,58,58A58.07,58.07,0,0,1,70,96Z"}))],["regular",y.createElement(y.Fragment,null,y.createElement("path",{d:"M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"}))],["thin",y.createElement(y.Fragment,null,y.createElement("path",{d:"M227.46,214c-16.52-28.56-43-48.06-73.68-55.09a68,68,0,1,0-51.56,0c-30.64,7-57.16,26.53-73.68,55.09a4,4,0,0,0,6.92,4C55,184.19,89.62,164,128,164s73,20.19,92.54,54a4,4,0,0,0,3.46,2,3.93,3.93,0,0,0,2-.54A4,4,0,0,0,227.46,214ZM68,96a60,60,0,1,1,60,60A60.07,60.07,0,0,1,68,96Z"}))]]),n7=new Map([["bold",y.createElement(y.Fragment,null,y.createElement("path",{d:"M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"}))],["duotone",y.createElement(y.Fragment,null,y.createElement("path",{d:"M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",opacity:"0.2"}),y.createElement("path",{d:"M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["fill",y.createElement(y.Fragment,null,y.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM181.66,170.34a8,8,0,0,1-11.32,11.32L128,139.31,85.66,181.66a8,8,0,0,1-11.32-11.32L116.69,128,74.34,85.66A8,8,0,0,1,85.66,74.34L128,116.69l42.34-42.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["light",y.createElement(y.Fragment,null,y.createElement("path",{d:"M204.24,195.76a6,6,0,1,1-8.48,8.48L128,136.49,60.24,204.24a6,6,0,0,1-8.48-8.48L119.51,128,51.76,60.24a6,6,0,0,1,8.48-8.48L128,119.51l67.76-67.75a6,6,0,0,1,8.48,8.48L136.49,128Z"}))],["regular",y.createElement(y.Fragment,null,y.createElement("path",{d:"M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["thin",y.createElement(y.Fragment,null,y.createElement("path",{d:"M202.83,197.17a4,4,0,0,1-5.66,5.66L128,133.66,58.83,202.83a4,4,0,0,1-5.66-5.66L122.34,128,53.17,58.83a4,4,0,0,1,5.66-5.66L128,122.34l69.17-69.17a4,4,0,1,1,5.66,5.66L133.66,128Z"}))]]),r7=y.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),Fa=y.forwardRef((a,n)=>{const{alt:s,color:i,size:l,weight:c,mirrored:d,children:h,weights:g,...p}=a,{color:m="currentColor",size:u,weight:S="regular",mirrored:w=!1,...z}=y.useContext(r7);return y.createElement("svg",{ref:n,xmlns:"http://www.w3.org/2000/svg",width:l??u,height:l??u,fill:i??m,viewBox:"0 0 256 256",transform:d||w?"scale(-1, 1)":void 0,...z,...p},!!s&&y.createElement("title",null,s),h,g.get(c??S))});Fa.displayName="IconBase";const v8=y.forwardRef((a,n)=>y.createElement(Fa,{ref:n,...a,weights:q6}));v8.displayName="ArrowBendUpLeftIcon";const s7=v8,b8=y.forwardRef((a,n)=>y.createElement(Fa,{ref:n,...a,weights:Y6}));b8.displayName="CaretLeftIcon";const l7=b8,y8=y.forwardRef((a,n)=>y.createElement(Fa,{ref:n,...a,weights:F6}));y8.displayName="CaretRightIcon";const o7=y8,_8=y.forwardRef((a,n)=>y.createElement(Fa,{ref:n,...a,weights:G6}));_8.displayName="ChatCircleIcon";const c7=_8,x8=y.forwardRef((a,n)=>y.createElement(Fa,{ref:n,...a,weights:X6}));x8.displayName="DotsSixVerticalIcon";const d7=x8,w8=y.forwardRef((a,n)=>y.createElement(Fa,{ref:n,...a,weights:Q6}));w8.displayName="ExportIcon";const Mv=w8,z8=y.forwardRef((a,n)=>y.createElement(Fa,{ref:n,...a,weights:K6}));z8.displayName="FrameCornersIcon";const u7=z8,S8=y.forwardRef((a,n)=>y.createElement(Fa,{ref:n,...a,weights:W6}));S8.displayName="ImageIcon";const M8=S8,E8=y.forwardRef((a,n)=>y.createElement(Fa,{ref:n,...a,weights:J6}));E8.displayName="PencilSimpleIcon";const h7=E8,T8=y.forwardRef((a,n)=>y.createElement(Fa,{ref:n,...a,weights:e7}));T8.displayName="PlusIcon";const wm=T8,C8=y.forwardRef((a,n)=>y.createElement(Fa,{ref:n,...a,weights:t7}));C8.displayName="TrashIcon";const $d=C8,A8=y.forwardRef((a,n)=>y.createElement(Fa,{ref:n,...a,weights:a7}));A8.displayName="UploadIcon";const f7=A8,k8=y.forwardRef((a,n)=>y.createElement(Fa,{ref:n,...a,weights:i7}));k8.displayName="UserIcon";const xd=k8,j8=y.forwardRef((a,n)=>y.createElement(Fa,{ref:n,...a,weights:n7}));j8.displayName="XIcon";const m7=j8,p7={author:xd,message:c7,embed:u7,image:M8},g7={author:"text-blue-400",message:"text-green-400",embed:"text-purple-400",image:"text-yellow-400"};function id({type:a,label:n}){const s=p7[a],i=l=>{l.dataTransfer.setData("blockType",a),l.dataTransfer.effectAllowed="copy"};return M.jsx($o,{draggable:!0,onDragStart:i,className:"p-4 cursor-grab active:cursor-grabbing hover:bg-[#404249] transition-colors border-2 border-dashed border-[#202225] bg-[#2f3136]",children:M.jsxs("div",{className:"flex items-center gap-3",children:[M.jsx(s,{className:g7[a],size:24,weight:"duotone"}),M.jsx("span",{className:"font-medium text-gray-200",children:n})]})})}const v7=bm("inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",secondary:"border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",destructive:"border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"}},defaultVariants:{variant:"default"}});function N8({className:a,variant:n,asChild:s=!1,...i}){const l=s?L3:"span";return M.jsx(l,{"data-slot":"badge",className:St(v7({variant:n}),a),...i})}function Jf(a,[n,s]){return Math.min(s,Math.max(n,a))}function b7(a,n){return y.useReducer((s,i)=>n[s][i]??s,a)}var zm="ScrollArea",[D8]=Wi(zm),[y7,Ri]=D8(zm),O8=y.forwardRef((a,n)=>{const{__scopeScrollArea:s,type:i="hover",dir:l,scrollHideDelay:c=600,...d}=a,[h,g]=y.useState(null),[p,m]=y.useState(null),[u,S]=y.useState(null),[w,z]=y.useState(null),[_,b]=y.useState(null),[x,O]=y.useState(0),[R,C]=y.useState(0),[A,I]=y.useState(!1),[H,$]=y.useState(!1),Z=zt(n,xe=>g(xe)),he=Ho(l);return M.jsx(y7,{scope:s,type:i,dir:he,scrollHideDelay:c,scrollArea:h,viewport:p,onViewportChange:m,content:u,onContentChange:S,scrollbarX:w,onScrollbarXChange:z,scrollbarXEnabled:A,onScrollbarXEnabledChange:I,scrollbarY:_,onScrollbarYChange:b,scrollbarYEnabled:H,onScrollbarYEnabledChange:$,onCornerWidthChange:O,onCornerHeightChange:C,children:M.jsx(st.div,{dir:he,...d,ref:Z,style:{position:"relative","--radix-scroll-area-corner-width":x+"px","--radix-scroll-area-corner-height":R+"px",...a.style}})})});O8.displayName=zm;var H8="ScrollAreaViewport",R8=y.forwardRef((a,n)=>{const{__scopeScrollArea:s,children:i,nonce:l,...c}=a,d=Ri(H8,s),h=y.useRef(null),g=zt(n,h,d.onViewportChange);return M.jsxs(M.Fragment,{children:[M.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"},nonce:l}),M.jsx(st.div,{"data-radix-scroll-area-viewport":"",...c,ref:g,style:{overflowX:d.scrollbarXEnabled?"scroll":"hidden",overflowY:d.scrollbarYEnabled?"scroll":"hidden",...a.style},children:M.jsx("div",{ref:d.onContentChange,style:{minWidth:"100%",display:"table"},children:i})})]})});R8.displayName=H8;var vn="ScrollAreaScrollbar",$8=y.forwardRef((a,n)=>{const{forceMount:s,...i}=a,l=Ri(vn,a.__scopeScrollArea),{onScrollbarXEnabledChange:c,onScrollbarYEnabledChange:d}=l,h=a.orientation==="horizontal";return y.useEffect(()=>(h?c(!0):d(!0),()=>{h?c(!1):d(!1)}),[h,c,d]),l.type==="hover"?M.jsx(_7,{...i,ref:n,forceMount:s}):l.type==="scroll"?M.jsx(x7,{...i,ref:n,forceMount:s}):l.type==="auto"?M.jsx(V8,{...i,ref:n,forceMount:s}):l.type==="always"?M.jsx(Sm,{...i,ref:n}):null});$8.displayName=vn;var _7=y.forwardRef((a,n)=>{const{forceMount:s,...i}=a,l=Ri(vn,a.__scopeScrollArea),[c,d]=y.useState(!1);return y.useEffect(()=>{const h=l.scrollArea;let g=0;if(h){const p=()=>{window.clearTimeout(g),d(!0)},m=()=>{g=window.setTimeout(()=>d(!1),l.scrollHideDelay)};return h.addEventListener("pointerenter",p),h.addEventListener("pointerleave",m),()=>{window.clearTimeout(g),h.removeEventListener("pointerenter",p),h.removeEventListener("pointerleave",m)}}},[l.scrollArea,l.scrollHideDelay]),M.jsx(Ji,{present:s||c,children:M.jsx(V8,{"data-state":c?"visible":"hidden",...i,ref:n})})}),x7=y.forwardRef((a,n)=>{const{forceMount:s,...i}=a,l=Ri(vn,a.__scopeScrollArea),c=a.orientation==="horizontal",d=Ld(()=>g("SCROLL_END"),100),[h,g]=b7("hidden",{hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}});return y.useEffect(()=>{if(h==="idle"){const p=window.setTimeout(()=>g("HIDE"),l.scrollHideDelay);return()=>window.clearTimeout(p)}},[h,l.scrollHideDelay,g]),y.useEffect(()=>{const p=l.viewport,m=c?"scrollLeft":"scrollTop";if(p){let u=p[m];const S=()=>{const w=p[m];u!==w&&(g("SCROLL"),d()),u=w};return p.addEventListener("scroll",S),()=>p.removeEventListener("scroll",S)}},[l.viewport,c,g,d]),M.jsx(Ji,{present:s||h!=="hidden",children:M.jsx(Sm,{"data-state":h==="hidden"?"hidden":"visible",...i,ref:n,onPointerEnter:ot(a.onPointerEnter,()=>g("POINTER_ENTER")),onPointerLeave:ot(a.onPointerLeave,()=>g("POINTER_LEAVE"))})})}),V8=y.forwardRef((a,n)=>{const s=Ri(vn,a.__scopeScrollArea),{forceMount:i,...l}=a,[c,d]=y.useState(!1),h=a.orientation==="horizontal",g=Ld(()=>{if(s.viewport){const p=s.viewport.offsetWidth<s.viewport.scrollWidth,m=s.viewport.offsetHeight<s.viewport.scrollHeight;d(h?p:m)}},10);return hl(s.viewport,g),hl(s.content,g),M.jsx(Ji,{present:i||c,children:M.jsx(Sm,{"data-state":c?"visible":"hidden",...l,ref:n})})}),Sm=y.forwardRef((a,n)=>{const{orientation:s="vertical",...i}=a,l=Ri(vn,a.__scopeScrollArea),c=y.useRef(null),d=y.useRef(0),[h,g]=y.useState({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),p=P8(h.viewport,h.content),m={...i,sizes:h,onSizesChange:g,hasThumb:p>0&&p<1,onThumbChange:S=>c.current=S,onThumbPointerUp:()=>d.current=0,onThumbPointerDown:S=>d.current=S};function u(S,w){return T7(S,d.current,h,w)}return s==="horizontal"?M.jsx(w7,{...m,ref:n,onThumbPositionChange:()=>{if(l.viewport&&c.current){const S=l.viewport.scrollLeft,w=Ev(S,h,l.dir);c.current.style.transform=`translate3d(${w}px, 0, 0)`}},onWheelScroll:S=>{l.viewport&&(l.viewport.scrollLeft=S)},onDragScroll:S=>{l.viewport&&(l.viewport.scrollLeft=u(S,l.dir))}}):s==="vertical"?M.jsx(z7,{...m,ref:n,onThumbPositionChange:()=>{if(l.viewport&&c.current){const S=l.viewport.scrollTop,w=Ev(S,h);c.current.style.transform=`translate3d(0, ${w}px, 0)`}},onWheelScroll:S=>{l.viewport&&(l.viewport.scrollTop=S)},onDragScroll:S=>{l.viewport&&(l.viewport.scrollTop=u(S))}}):null}),w7=y.forwardRef((a,n)=>{const{sizes:s,onSizesChange:i,...l}=a,c=Ri(vn,a.__scopeScrollArea),[d,h]=y.useState(),g=y.useRef(null),p=zt(n,g,c.onScrollbarXChange);return y.useEffect(()=>{g.current&&h(getComputedStyle(g.current))},[g]),M.jsx(B8,{"data-orientation":"horizontal",...l,ref:p,sizes:s,style:{bottom:0,left:c.dir==="rtl"?"var(--radix-scroll-area-corner-width)":0,right:c.dir==="ltr"?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":Vd(s)+"px",...a.style},onThumbPointerDown:m=>a.onThumbPointerDown(m.x),onDragScroll:m=>a.onDragScroll(m.x),onWheelScroll:(m,u)=>{if(c.viewport){const S=c.viewport.scrollLeft+m.deltaX;a.onWheelScroll(S),q8(S,u)&&m.preventDefault()}},onResize:()=>{g.current&&c.viewport&&d&&i({content:c.viewport.scrollWidth,viewport:c.viewport.offsetWidth,scrollbar:{size:g.current.clientWidth,paddingStart:zd(d.paddingLeft),paddingEnd:zd(d.paddingRight)}})}})}),z7=y.forwardRef((a,n)=>{const{sizes:s,onSizesChange:i,...l}=a,c=Ri(vn,a.__scopeScrollArea),[d,h]=y.useState(),g=y.useRef(null),p=zt(n,g,c.onScrollbarYChange);return y.useEffect(()=>{g.current&&h(getComputedStyle(g.current))},[g]),M.jsx(B8,{"data-orientation":"vertical",...l,ref:p,sizes:s,style:{top:0,right:c.dir==="ltr"?0:void 0,left:c.dir==="rtl"?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":Vd(s)+"px",...a.style},onThumbPointerDown:m=>a.onThumbPointerDown(m.y),onDragScroll:m=>a.onDragScroll(m.y),onWheelScroll:(m,u)=>{if(c.viewport){const S=c.viewport.scrollTop+m.deltaY;a.onWheelScroll(S),q8(S,u)&&m.preventDefault()}},onResize:()=>{g.current&&c.viewport&&d&&i({content:c.viewport.scrollHeight,viewport:c.viewport.offsetHeight,scrollbar:{size:g.current.clientHeight,paddingStart:zd(d.paddingTop),paddingEnd:zd(d.paddingBottom)}})}})}),[S7,L8]=D8(vn),B8=y.forwardRef((a,n)=>{const{__scopeScrollArea:s,sizes:i,hasThumb:l,onThumbChange:c,onThumbPointerUp:d,onThumbPointerDown:h,onThumbPositionChange:g,onDragScroll:p,onWheelScroll:m,onResize:u,...S}=a,w=Ri(vn,s),[z,_]=y.useState(null),b=zt(n,Z=>_(Z)),x=y.useRef(null),O=y.useRef(""),R=w.viewport,C=i.content-i.viewport,A=Ya(m),I=Ya(g),H=Ld(u,10);function $(Z){if(x.current){const he=Z.clientX-x.current.left,xe=Z.clientY-x.current.top;p({x:he,y:xe})}}return y.useEffect(()=>{const Z=he=>{const xe=he.target;(z==null?void 0:z.contains(xe))&&A(he,C)};return document.addEventListener("wheel",Z,{passive:!1}),()=>document.removeEventListener("wheel",Z,{passive:!1})},[R,z,C,A]),y.useEffect(I,[i,I]),hl(z,H),hl(w.content,H),M.jsx(S7,{scope:s,scrollbar:z,hasThumb:l,onThumbChange:Ya(c),onThumbPointerUp:Ya(d),onThumbPositionChange:I,onThumbPointerDown:Ya(h),children:M.jsx(st.div,{...S,ref:b,style:{position:"absolute",...S.style},onPointerDown:ot(a.onPointerDown,Z=>{Z.button===0&&(Z.target.setPointerCapture(Z.pointerId),x.current=z.getBoundingClientRect(),O.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",w.viewport&&(w.viewport.style.scrollBehavior="auto"),$(Z))}),onPointerMove:ot(a.onPointerMove,$),onPointerUp:ot(a.onPointerUp,Z=>{const he=Z.target;he.hasPointerCapture(Z.pointerId)&&he.releasePointerCapture(Z.pointerId),document.body.style.webkitUserSelect=O.current,w.viewport&&(w.viewport.style.scrollBehavior=""),x.current=null})})})}),wd="ScrollAreaThumb",U8=y.forwardRef((a,n)=>{const{forceMount:s,...i}=a,l=L8(wd,a.__scopeScrollArea);return M.jsx(Ji,{present:s||l.hasThumb,children:M.jsx(M7,{ref:n,...i})})}),M7=y.forwardRef((a,n)=>{const{__scopeScrollArea:s,style:i,...l}=a,c=Ri(wd,s),d=L8(wd,s),{onThumbPositionChange:h}=d,g=zt(n,u=>d.onThumbChange(u)),p=y.useRef(void 0),m=Ld(()=>{p.current&&(p.current(),p.current=void 0)},100);return y.useEffect(()=>{const u=c.viewport;if(u){const S=()=>{if(m(),!p.current){const w=C7(u,h);p.current=w,h()}};return h(),u.addEventListener("scroll",S),()=>u.removeEventListener("scroll",S)}},[c.viewport,m,h]),M.jsx(st.div,{"data-state":d.hasThumb?"visible":"hidden",...l,ref:g,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...i},onPointerDownCapture:ot(a.onPointerDownCapture,u=>{const w=u.target.getBoundingClientRect(),z=u.clientX-w.left,_=u.clientY-w.top;d.onThumbPointerDown({x:z,y:_})}),onPointerUp:ot(a.onPointerUp,d.onThumbPointerUp)})});U8.displayName=wd;var Mm="ScrollAreaCorner",I8=y.forwardRef((a,n)=>{const s=Ri(Mm,a.__scopeScrollArea),i=!!(s.scrollbarX&&s.scrollbarY);return s.type!=="scroll"&&i?M.jsx(E7,{...a,ref:n}):null});I8.displayName=Mm;var E7=y.forwardRef((a,n)=>{const{__scopeScrollArea:s,...i}=a,l=Ri(Mm,s),[c,d]=y.useState(0),[h,g]=y.useState(0),p=!!(c&&h);return hl(l.scrollbarX,()=>{var u;const m=((u=l.scrollbarX)==null?void 0:u.offsetHeight)||0;l.onCornerHeightChange(m),g(m)}),hl(l.scrollbarY,()=>{var u;const m=((u=l.scrollbarY)==null?void 0:u.offsetWidth)||0;l.onCornerWidthChange(m),d(m)}),p?M.jsx(st.div,{...i,ref:n,style:{width:c,height:h,position:"absolute",right:l.dir==="ltr"?0:void 0,left:l.dir==="rtl"?0:void 0,bottom:0,...a.style}}):null});function zd(a){return a?parseInt(a,10):0}function P8(a,n){const s=a/n;return isNaN(s)?0:s}function Vd(a){const n=P8(a.viewport,a.content),s=a.scrollbar.paddingStart+a.scrollbar.paddingEnd,i=(a.scrollbar.size-s)*n;return Math.max(i,18)}function T7(a,n,s,i="ltr"){const l=Vd(s),c=l/2,d=n||c,h=l-d,g=s.scrollbar.paddingStart+d,p=s.scrollbar.size-s.scrollbar.paddingEnd-h,m=s.content-s.viewport,u=i==="ltr"?[0,m]:[m*-1,0];return Z8([g,p],u)(a)}function Ev(a,n,s="ltr"){const i=Vd(n),l=n.scrollbar.paddingStart+n.scrollbar.paddingEnd,c=n.scrollbar.size-l,d=n.content-n.viewport,h=c-i,g=s==="ltr"?[0,d]:[d*-1,0],p=Jf(a,g);return Z8([0,d],[0,h])(p)}function Z8(a,n){return s=>{if(a[0]===a[1]||n[0]===n[1])return n[0];const i=(n[1]-n[0])/(a[1]-a[0]);return n[0]+i*(s-a[0])}}function q8(a,n){return a>0&&a<n}var C7=(a,n=()=>{})=>{let s={left:a.scrollLeft,top:a.scrollTop},i=0;return(function l(){const c={left:a.scrollLeft,top:a.scrollTop},d=s.left!==c.left,h=s.top!==c.top;(d||h)&&n(),s=c,i=window.requestAnimationFrame(l)})(),()=>window.cancelAnimationFrame(i)};function Ld(a,n){const s=Ya(a),i=y.useRef(0);return y.useEffect(()=>()=>window.clearTimeout(i.current),[]),y.useCallback(()=>{window.clearTimeout(i.current),i.current=window.setTimeout(s,n)},[s,n])}function hl(a,n){const s=Ya(n);Da(()=>{let i=0;if(a){const l=new ResizeObserver(()=>{cancelAnimationFrame(i),i=window.requestAnimationFrame(s)});return l.observe(a),()=>{window.cancelAnimationFrame(i),l.unobserve(a)}}},[a,s])}var A7=O8,k7=R8,j7=I8;function Y8({className:a,children:n,...s}){return M.jsxs(A7,{"data-slot":"scroll-area",className:St("relative",a),...s,children:[M.jsx(k7,{"data-slot":"scroll-area-viewport",className:"focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1",children:n}),M.jsx(N7,{}),M.jsx(j7,{})]})}function N7({className:a,orientation:n="vertical",...s}){return M.jsx($8,{"data-slot":"scroll-area-scrollbar",orientation:n,className:St("flex touch-none p-px transition-colors select-none",n==="vertical"&&"h-full w-2.5 border-l border-l-transparent",n==="horizontal"&&"h-2.5 flex-col border-t border-t-transparent",a),...s,children:M.jsx(U8,{"data-slot":"scroll-area-thumb",className:"bg-border relative flex-1 rounded-full"})})}function D7({authors:a,onAddAuthor:n,onEditAuthor:s,onDeleteAuthor:i}){return M.jsx($o,{className:"p-4 bg-[#2f3136] border-[#202225]",children:M.jsxs("div",{className:"space-y-4",children:[M.jsxs("div",{className:"flex items-center justify-between",children:[M.jsx("h3",{className:"text-sm font-semibold text-white",children:"Authors"}),M.jsxs(Jt,{onClick:n,size:"sm",className:"bg-blue-500 hover:bg-blue-600 text-white",children:[M.jsx(wm,{className:"mr-1",size:16}),"New"]})]}),M.jsx(Y8,{className:"h-[400px]",children:a.length===0?M.jsxs("div",{className:"flex flex-col items-center justify-center h-64 text-gray-400",children:[M.jsx(xd,{size:48,className:"mb-4 opacity-50"}),M.jsx("p",{className:"text-sm",children:"No authors yet"}),M.jsx("p",{className:"text-xs",children:"Create your first author"})]}):M.jsx("div",{className:"space-y-2",children:a.map(l=>M.jsxs("div",{className:"flex items-center gap-3 p-3 border border-[#202225] rounded-lg hover:bg-[#404249] transition-colors",children:[l.avatar?M.jsx("img",{src:l.avatar,alt:l.username,className:"w-10 h-10 rounded-full object-cover"}):M.jsx("div",{className:"w-10 h-10 rounded-full bg-[#202225] flex items-center justify-center",children:M.jsx(xd,{size:24,className:"text-gray-400"})}),M.jsxs("div",{className:"flex-1 min-w-0",children:[M.jsxs("div",{className:"flex items-center gap-2",children:[M.jsx("span",{className:"font-semibold truncate text-sm",style:{color:l.roleColor||"#ffffff"},children:l.username}),l.badgeUrl&&M.jsx("img",{src:l.badgeUrl,alt:"Role badge",className:"w-4 h-4 object-contain"}),l.isBot&&M.jsx(N8,{variant:"secondary",className:"text-xs bg-blue-500 text-white",children:"BOT"})]}),M.jsx("p",{className:"text-xs text-gray-400",children:l.roleColor||"No color"})]}),M.jsxs("div",{className:"flex gap-1",children:[M.jsx(Jt,{size:"sm",variant:"ghost",className:"h-8 w-8 p-0 text-gray-400 hover:text-white",onClick:()=>s(l),children:M.jsx(h7,{size:16})}),M.jsx(Jt,{size:"sm",variant:"ghost",className:"h-8 w-8 p-0 text-gray-400 hover:text-red-400",onClick:()=>i(l.id),children:M.jsx($d,{size:16})})]})]},l.id))})})]})})}function Na({className:a,type:n,...s}){return M.jsx("input",{type:n,"data-slot":"input",className:St("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm","focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]","aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",a),...s})}function O7(a,n){if(a.match(/^[a-z]+:\/\//i))return a;if(a.match(/^\/\//))return window.location.protocol+a;if(a.match(/^[a-z]+:/i))return a;const s=document.implementation.createHTMLDocument(),i=s.createElement("base"),l=s.createElement("a");return s.head.appendChild(i),s.body.appendChild(l),n&&(i.href=n),l.href=a,l.href}const H7=(()=>{let a=0;const n=()=>`0000${(Math.random()*36**4<<0).toString(36)}`.slice(-4);return()=>(a+=1,`u${n()}${a}`)})();function zr(a){const n=[];for(let s=0,i=a.length;s<i;s++)n.push(a[s]);return n}let Qs=null;function F8(a={}){return Qs||(a.includeStyleProperties?(Qs=a.includeStyleProperties,Qs):(Qs=zr(window.getComputedStyle(document.documentElement)),Qs))}function Sd(a,n){const i=(a.ownerDocument.defaultView||window).getComputedStyle(a).getPropertyValue(n);return i?parseFloat(i.replace("px","")):0}function R7(a){const n=Sd(a,"border-left-width"),s=Sd(a,"border-right-width");return a.clientWidth+n+s}function $7(a){const n=Sd(a,"border-top-width"),s=Sd(a,"border-bottom-width");return a.clientHeight+n+s}function G8(a,n={}){const s=n.width||R7(a),i=n.height||$7(a);return{width:s,height:i}}function V7(){let a,n;try{n=process}catch{}const s=n&&n.env?n.env.devicePixelRatio:null;return s&&(a=parseInt(s,10),Number.isNaN(a)&&(a=1)),a||window.devicePixelRatio||1}const ui=16384;function L7(a){(a.width>ui||a.height>ui)&&(a.width>ui&&a.height>ui?a.width>a.height?(a.height*=ui/a.width,a.width=ui):(a.width*=ui/a.height,a.height=ui):a.width>ui?(a.height*=ui/a.width,a.width=ui):(a.width*=ui/a.height,a.height=ui))}function Md(a){return new Promise((n,s)=>{const i=new Image;i.onload=()=>{i.decode().then(()=>{requestAnimationFrame(()=>n(i))})},i.onerror=s,i.crossOrigin="anonymous",i.decoding="async",i.src=a})}async function B7(a){return Promise.resolve().then(()=>new XMLSerializer().serializeToString(a)).then(encodeURIComponent).then(n=>`data:image/svg+xml;charset=utf-8,${n}`)}async function U7(a,n,s){const i="http://www.w3.org/2000/svg",l=document.createElementNS(i,"svg"),c=document.createElementNS(i,"foreignObject");return l.setAttribute("width",`${n}`),l.setAttribute("height",`${s}`),l.setAttribute("viewBox",`0 0 ${n} ${s}`),c.setAttribute("width","100%"),c.setAttribute("height","100%"),c.setAttribute("x","0"),c.setAttribute("y","0"),c.setAttribute("externalResourcesRequired","true"),l.appendChild(c),c.appendChild(a),B7(l)}const ii=(a,n)=>{if(a instanceof n)return!0;const s=Object.getPrototypeOf(a);return s===null?!1:s.constructor.name===n.name||ii(s,n)};function I7(a){const n=a.getPropertyValue("content");return`${a.cssText} content: '${n.replace(/'|"/g,"")}';`}function P7(a,n){return F8(n).map(s=>{const i=a.getPropertyValue(s),l=a.getPropertyPriority(s);return`${s}: ${i}${l?" !important":""};`}).join(" ")}function Z7(a,n,s,i){const l=`.${a}:${n}`,c=s.cssText?I7(s):P7(s,i);return document.createTextNode(`${l}{${c}}`)}function Tv(a,n,s,i){const l=window.getComputedStyle(a,s),c=l.getPropertyValue("content");if(c===""||c==="none")return;const d=H7();try{n.className=`${n.className} ${d}`}catch{return}const h=document.createElement("style");h.appendChild(Z7(d,s,l,i)),n.appendChild(h)}function q7(a,n,s){Tv(a,n,":before",s),Tv(a,n,":after",s)}const Cv="application/font-woff",Av="image/jpeg",Y7={woff:Cv,woff2:Cv,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:Av,jpeg:Av,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml",webp:"image/webp"};function F7(a){const n=/\.([^./]*?)$/g.exec(a);return n?n[1]:""}function Em(a){const n=F7(a).toLowerCase();return Y7[n]||""}function G7(a){return a.split(/,/)[1]}function em(a){return a.search(/^(data:)/)!==-1}function X7(a,n){return`data:${n};base64,${a}`}async function X8(a,n,s){const i=await fetch(a,n);if(i.status===404)throw new Error(`Resource "${i.url}" not found`);const l=await i.blob();return new Promise((c,d)=>{const h=new FileReader;h.onerror=d,h.onloadend=()=>{try{c(s({res:i,result:h.result}))}catch(g){d(g)}},h.readAsDataURL(l)})}const zf={};function Q7(a,n,s){let i=a.replace(/\?.*/,"");return s&&(i=a),/ttf|otf|eot|woff2?/i.test(i)&&(i=i.replace(/.*\//,"")),n?`[${n}]${i}`:i}async function Tm(a,n,s){const i=Q7(a,n,s.includeQueryParams);if(zf[i]!=null)return zf[i];s.cacheBust&&(a+=(/\?/.test(a)?"&":"?")+new Date().getTime());let l;try{const c=await X8(a,s.fetchRequestInit,({res:d,result:h})=>(n||(n=d.headers.get("Content-Type")||""),G7(h)));l=X7(c,n)}catch(c){l=s.imagePlaceholder||"";let d=`Failed to fetch resource: ${a}`;c&&(d=typeof c=="string"?c:c.message),d&&console.warn(d)}return zf[i]=l,l}async function K7(a){const n=a.toDataURL();return n==="data:,"?a.cloneNode(!1):Md(n)}async function W7(a,n){if(a.currentSrc){const c=document.createElement("canvas"),d=c.getContext("2d");c.width=a.clientWidth,c.height=a.clientHeight,d==null||d.drawImage(a,0,0,c.width,c.height);const h=c.toDataURL();return Md(h)}const s=a.poster,i=Em(s),l=await Tm(s,i,n);return Md(l)}async function J7(a,n){var s;try{if(!((s=a==null?void 0:a.contentDocument)===null||s===void 0)&&s.body)return await Bd(a.contentDocument.body,n,!0)}catch{}return a.cloneNode(!1)}async function ew(a,n){return ii(a,HTMLCanvasElement)?K7(a):ii(a,HTMLVideoElement)?W7(a,n):ii(a,HTMLIFrameElement)?J7(a,n):a.cloneNode(Q8(a))}const tw=a=>a.tagName!=null&&a.tagName.toUpperCase()==="SLOT",Q8=a=>a.tagName!=null&&a.tagName.toUpperCase()==="SVG";async function aw(a,n,s){var i,l;if(Q8(n))return n;let c=[];return tw(a)&&a.assignedNodes?c=zr(a.assignedNodes()):ii(a,HTMLIFrameElement)&&(!((i=a.contentDocument)===null||i===void 0)&&i.body)?c=zr(a.contentDocument.body.childNodes):c=zr(((l=a.shadowRoot)!==null&&l!==void 0?l:a).childNodes),c.length===0||ii(a,HTMLVideoElement)||await c.reduce((d,h)=>d.then(()=>Bd(h,s)).then(g=>{g&&n.appendChild(g)}),Promise.resolve()),n}function iw(a,n,s){const i=n.style;if(!i)return;const l=window.getComputedStyle(a);l.cssText?(i.cssText=l.cssText,i.transformOrigin=l.transformOrigin):F8(s).forEach(c=>{let d=l.getPropertyValue(c);c==="font-size"&&d.endsWith("px")&&(d=`${Math.floor(parseFloat(d.substring(0,d.length-2)))-.1}px`),ii(a,HTMLIFrameElement)&&c==="display"&&d==="inline"&&(d="block"),c==="d"&&n.getAttribute("d")&&(d=`path(${n.getAttribute("d")})`),i.setProperty(c,d,l.getPropertyPriority(c))})}function nw(a,n){ii(a,HTMLTextAreaElement)&&(n.innerHTML=a.value),ii(a,HTMLInputElement)&&n.setAttribute("value",a.value)}function rw(a,n){if(ii(a,HTMLSelectElement)){const i=Array.from(n.children).find(l=>a.value===l.getAttribute("value"));i&&i.setAttribute("selected","")}}function sw(a,n,s){return ii(n,Element)&&(iw(a,n,s),q7(a,n,s),nw(a,n),rw(a,n)),n}async function lw(a,n){const s=a.querySelectorAll?a.querySelectorAll("use"):[];if(s.length===0)return a;const i={};for(let c=0;c<s.length;c++){const h=s[c].getAttribute("xlink:href");if(h){const g=a.querySelector(h),p=document.querySelector(h);!g&&p&&!i[h]&&(i[h]=await Bd(p,n,!0))}}const l=Object.values(i);if(l.length){const c="http://www.w3.org/1999/xhtml",d=document.createElementNS(c,"svg");d.setAttribute("xmlns",c),d.style.position="absolute",d.style.width="0",d.style.height="0",d.style.overflow="hidden",d.style.display="none";const h=document.createElementNS(c,"defs");d.appendChild(h);for(let g=0;g<l.length;g++)h.appendChild(l[g]);a.appendChild(d)}return a}async function Bd(a,n,s){return!s&&n.filter&&!n.filter(a)?null:Promise.resolve(a).then(i=>ew(i,n)).then(i=>aw(a,i,n)).then(i=>sw(a,i,n)).then(i=>lw(i,n))}const K8=/url\((['"]?)([^'"]+?)\1\)/g,ow=/url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,cw=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;function dw(a){const n=a.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1");return new RegExp(`(url\\(['"]?)(${n})(['"]?\\))`,"g")}function uw(a){const n=[];return a.replace(K8,(s,i,l)=>(n.push(l),s)),n.filter(s=>!em(s))}async function hw(a,n,s,i,l){try{const c=s?O7(n,s):n,d=Em(n);let h;return l||(h=await Tm(c,d,i)),a.replace(dw(n),`$1${h}$3`)}catch{}return a}function fw(a,{preferredFontFormat:n}){return n?a.replace(cw,s=>{for(;;){const[i,,l]=ow.exec(s)||[];if(!l)return"";if(l===n)return`src: ${i};`}}):a}function W8(a){return a.search(K8)!==-1}async function J8(a,n,s){if(!W8(a))return a;const i=fw(a,s);return uw(i).reduce((c,d)=>c.then(h=>hw(h,d,n,s)),Promise.resolve(i))}async function Ks(a,n,s){var i;const l=(i=n.style)===null||i===void 0?void 0:i.getPropertyValue(a);if(l){const c=await J8(l,null,s);return n.style.setProperty(a,c,n.style.getPropertyPriority(a)),!0}return!1}async function mw(a,n){await Ks("background",a,n)||await Ks("background-image",a,n),await Ks("mask",a,n)||await Ks("-webkit-mask",a,n)||await Ks("mask-image",a,n)||await Ks("-webkit-mask-image",a,n)}async function pw(a,n){const s=ii(a,HTMLImageElement);if(!(s&&!em(a.src))&&!(ii(a,SVGImageElement)&&!em(a.href.baseVal)))return;const i=s?a.src:a.href.baseVal,l=await Tm(i,Em(i),n);await new Promise((c,d)=>{a.onload=c,a.onerror=n.onImageErrorHandler?(...g)=>{try{c(n.onImageErrorHandler(...g))}catch(p){d(p)}}:d;const h=a;h.decode&&(h.decode=c),h.loading==="lazy"&&(h.loading="eager"),s?(a.srcset="",a.src=l):a.href.baseVal=l})}async function gw(a,n){const i=zr(a.childNodes).map(l=>e4(l,n));await Promise.all(i).then(()=>a)}async function e4(a,n){ii(a,Element)&&(await mw(a,n),await pw(a,n),await gw(a,n))}function vw(a,n){const{style:s}=a;n.backgroundColor&&(s.backgroundColor=n.backgroundColor),n.width&&(s.width=`${n.width}px`),n.height&&(s.height=`${n.height}px`);const i=n.style;return i!=null&&Object.keys(i).forEach(l=>{s[l]=i[l]}),a}const kv={};async function jv(a){let n=kv[a];if(n!=null)return n;const i=await(await fetch(a)).text();return n={url:a,cssText:i},kv[a]=n,n}async function Nv(a,n){let s=a.cssText;const i=/url\(["']?([^"')]+)["']?\)/g,c=(s.match(/url\([^)]+\)/g)||[]).map(async d=>{let h=d.replace(i,"$1");return h.startsWith("https://")||(h=new URL(h,a.url).href),X8(h,n.fetchRequestInit,({result:g})=>(s=s.replace(d,`url(${g})`),[d,g]))});return Promise.all(c).then(()=>s)}function Dv(a){if(a==null)return[];const n=[],s=/(\/\*[\s\S]*?\*\/)/gi;let i=a.replace(s,"");const l=new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})","gi");for(;;){const g=l.exec(i);if(g===null)break;n.push(g[0])}i=i.replace(l,"");const c=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,d="((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})",h=new RegExp(d,"gi");for(;;){let g=c.exec(i);if(g===null){if(g=h.exec(i),g===null)break;c.lastIndex=h.lastIndex}else h.lastIndex=c.lastIndex;n.push(g[0])}return n}async function bw(a,n){const s=[],i=[];return a.forEach(l=>{if("cssRules"in l)try{zr(l.cssRules||[]).forEach((c,d)=>{if(c.type===CSSRule.IMPORT_RULE){let h=d+1;const g=c.href,p=jv(g).then(m=>Nv(m,n)).then(m=>Dv(m).forEach(u=>{try{l.insertRule(u,u.startsWith("@import")?h+=1:l.cssRules.length)}catch(S){console.error("Error inserting rule from remote css",{rule:u,error:S})}})).catch(m=>{console.error("Error loading remote css",m.toString())});i.push(p)}})}catch(c){const d=a.find(h=>h.href==null)||document.styleSheets[0];l.href!=null&&i.push(jv(l.href).then(h=>Nv(h,n)).then(h=>Dv(h).forEach(g=>{d.insertRule(g,d.cssRules.length)})).catch(h=>{console.error("Error loading remote stylesheet",h)})),console.error("Error inlining remote css file",c)}}),Promise.all(i).then(()=>(a.forEach(l=>{if("cssRules"in l)try{zr(l.cssRules||[]).forEach(c=>{s.push(c)})}catch(c){console.error(`Error while reading CSS rules from ${l.href}`,c)}}),s))}function yw(a){return a.filter(n=>n.type===CSSRule.FONT_FACE_RULE).filter(n=>W8(n.style.getPropertyValue("src")))}async function _w(a,n){if(a.ownerDocument==null)throw new Error("Provided element is not within a Document");const s=zr(a.ownerDocument.styleSheets),i=await bw(s,n);return yw(i)}function t4(a){return a.trim().replace(/["']/g,"")}function xw(a){const n=new Set;function s(i){(i.style.fontFamily||getComputedStyle(i).fontFamily).split(",").forEach(c=>{n.add(t4(c))}),Array.from(i.children).forEach(c=>{c instanceof HTMLElement&&s(c)})}return s(a),n}async function ww(a,n){const s=await _w(a,n),i=xw(a);return(await Promise.all(s.filter(c=>i.has(t4(c.style.fontFamily))).map(c=>{const d=c.parentStyleSheet?c.parentStyleSheet.href:null;return J8(c.cssText,d,n)}))).join(`
`)}async function zw(a,n){const s=n.fontEmbedCSS!=null?n.fontEmbedCSS:n.skipFonts?null:await ww(a,n);if(s){const i=document.createElement("style"),l=document.createTextNode(s);i.appendChild(l),a.firstChild?a.insertBefore(i,a.firstChild):a.appendChild(i)}}async function Sw(a,n={}){const{width:s,height:i}=G8(a,n),l=await Bd(a,n,!0);return await zw(l,n),await e4(l,n),vw(l,n),await U7(l,s,i)}async function Mw(a,n={}){const{width:s,height:i}=G8(a,n),l=await Sw(a,n),c=await Md(l),d=document.createElement("canvas"),h=d.getContext("2d"),g=n.pixelRatio||V7(),p=n.canvasWidth||s,m=n.canvasHeight||i;return d.width=p*g,d.height=m*g,n.skipAutoScale||L7(d),d.style.width=`${p}`,d.style.height=`${m}`,n.backgroundColor&&(h.fillStyle=n.backgroundColor,h.fillRect(0,0,d.width,d.height)),h.drawImage(c,0,0,d.width,d.height),d}async function Ew(a,n={}){return(await Mw(a,n)).toDataURL()}function Tw({messages:a,authors:n,onImport:s}){const i=y.useRef(null),l=n&&n.length>0,c=async()=>{const p=document.querySelectorAll("discord-messages");if(p.length===0){vr.error("No preview to export. Add an author and message to the composition area.");return}try{const u=p[p.length-1].parentElement,S=u.style.width,w=u.style.minWidth,z=u.style.maxWidth,_=u.style.height,b=u.style.minHeight,x=600;u.style.width=`${x}px`,u.style.minWidth=`${x}px`,u.style.maxWidth=`${x}px`,u.style.height="auto",u.style.minHeight="auto",await new Promise(A=>setTimeout(A,150));const O=u.scrollHeight,R=await Ew(u,{quality:1,pixelRatio:3,backgroundColor:"#36393f",width:x,height:O,style:{transform:"scale(1)",transformOrigin:"top left"}});u.style.width=S,u.style.minWidth=w,u.style.maxWidth=z,u.style.height=_,u.style.minHeight=b;const C=document.createElement("a");C.download=`discord-preview-${Date.now()}.png`,C.href=R,C.click(),vr.success("Preview saved as PNG!")}catch(m){console.error("Error saving PNG:",m),vr.error("Failed to save preview as PNG")}},d=()=>{const p={messages:a,authors:n,exportedAt:new Date().toISOString()},m=new Blob([JSON.stringify(p,null,2)],{type:"application/json"}),u=URL.createObjectURL(m),S=document.createElement("a");S.href=u,S.download=`discord-messages-${Date.now()}.json`,S.click(),URL.revokeObjectURL(u),vr.success("JSON file downloaded!")},h=()=>{var p;(p=i.current)==null||p.click()},g=p=>{var S;const m=(S=p.target.files)==null?void 0:S[0];if(!m)return;if(!m.name.endsWith(".json")){vr.error("Please select a valid JSON file");return}const u=new FileReader;u.onload=w=>{var z;try{const _=(z=w.target)==null?void 0:z.result,b=JSON.parse(_);if(!b.messages||!b.authors){vr.error("Invalid file format. Missing messages or authors data.");return}const x=b.messages.map(O=>({...O,timestamp:new Date(O.timestamp)}));s({messages:x,authors:b.authors}),vr.success(`Imported ${b.authors.length} authors and ${b.messages.length} messages!`)}catch(_){console.error("Import error:",_),vr.error("Failed to import file. Please check the file format.")}},u.readAsText(m),p.target.value=""};return M.jsx($o,{className:"p-6",children:M.jsxs("div",{className:"space-y-4",children:[M.jsxs("div",{className:"flex items-center gap-2",children:[M.jsx(Mv,{size:24,className:"text-primary"}),M.jsx("h3",{className:"text-lg font-semibold",children:"Export & Import"})]}),M.jsxs("div",{className:"space-y-4",children:[M.jsxs("div",{children:[M.jsx("p",{className:"text-sm text-muted-foreground mb-2",children:"Export your Discord messages in various formats for use in documentation, presentations, or development."}),M.jsxs("div",{className:"grid gap-2",children:[M.jsxs(Jt,{onClick:c,variant:"outline",className:"justify-start w-full",children:[M.jsx(M8,{className:"mr-2",size:16}),"Save Preview as PNG"]}),M.jsxs(Jt,{onClick:d,variant:"outline",className:"justify-start w-full",disabled:!l,children:[M.jsx(Mv,{className:"mr-2",size:16}),"Download JSON File"]}),!l&&M.jsx("p",{className:"text-xs text-muted-foreground pt-2",children:"Add some authors to enable JSON export"})]})]}),M.jsxs("div",{className:"border-t pt-4",children:[M.jsx("p",{className:"text-sm text-muted-foreground mb-2",children:"Import authors and messages from a previously exported JSON file."}),M.jsxs(Jt,{onClick:h,variant:"outline",className:"justify-start w-full",children:[M.jsx(f7,{className:"mr-2"}),"Import JSON File"]}),M.jsx(Na,{ref:i,type:"file",accept:".json",onChange:g,className:"hidden"})]})]})]})})}function Cw({authors:a,messages:n,collapsed:s,onCollapsedChange:i,onAddAuthor:l,onEditAuthor:c,onDeleteAuthor:d,onDeleteMessage:h,onClearAllMessages:g,onImportData:p}){return s?M.jsx("div",{className:"fixed left-0 top-0 h-full bg-[#2f3136] border-r border-[#202225] z-10",children:M.jsx(Jt,{variant:"ghost",size:"icon",onClick:()=>i(!1),className:"m-2 text-gray-400 hover:text-white",children:M.jsx(o7,{size:20})})}):M.jsxs("div",{className:"fixed left-0 top-0 h-full w-80 bg-[#2f3136] border-r border-[#202225] z-10 flex flex-col",children:[M.jsxs("div",{className:"p-4 flex items-center justify-between border-b border-[#202225]",children:[M.jsx("h2",{className:"text-lg font-semibold text-white",children:"Elements"}),M.jsx(Jt,{variant:"ghost",size:"icon",onClick:()=>i(!0),className:"text-gray-400 hover:text-white",children:M.jsx(l7,{size:20})})]}),M.jsxs("div",{className:"flex-1 overflow-y-auto p-4 space-y-4",children:[M.jsxs("div",{children:[M.jsx("h3",{className:"text-sm font-medium mb-3 text-gray-400",children:"DRAG TO ADD"}),M.jsxs("div",{className:"space-y-2",children:[M.jsx(id,{type:"author",label:"Author"}),M.jsx(id,{type:"message",label:"Message"}),M.jsx(id,{type:"embed",label:"Embed"}),M.jsx(id,{type:"image",label:"Image"})]})]}),M.jsx(zo,{className:"bg-[#202225]"}),M.jsx("div",{children:M.jsxs(P6,{defaultValue:"authors",className:"w-full",children:[M.jsxs(Z6,{className:"grid w-full grid-cols-2",children:[M.jsx(zv,{value:"authors",children:"Authors"}),M.jsx(zv,{value:"export",children:"Export"})]}),M.jsx(Sv,{value:"authors",children:M.jsx(D7,{authors:a,onAddAuthor:l,onEditAuthor:c,onDeleteAuthor:d})}),M.jsx(Sv,{value:"export",children:M.jsx(Tw,{messages:n,authors:a,onImport:p})})]})})]})]})}var Ud="Collapsible",[Aw,a4]=Wi(Ud),[kw,Cm]=Aw(Ud),i4=y.forwardRef((a,n)=>{const{__scopeCollapsible:s,open:i,defaultOpen:l,disabled:c,onOpenChange:d,...h}=a,[g,p]=pn({prop:i,defaultProp:l??!1,onChange:d,caller:Ud});return M.jsx(kw,{scope:s,disabled:c,contentId:fn(),open:g,onOpenToggle:y.useCallback(()=>p(m=>!m),[p]),children:M.jsx(st.div,{"data-state":km(g),"data-disabled":c?"":void 0,...h,ref:n})})});i4.displayName=Ud;var n4="CollapsibleTrigger",r4=y.forwardRef((a,n)=>{const{__scopeCollapsible:s,...i}=a,l=Cm(n4,s);return M.jsx(st.button,{type:"button","aria-controls":l.contentId,"aria-expanded":l.open||!1,"data-state":km(l.open),"data-disabled":l.disabled?"":void 0,disabled:l.disabled,...i,ref:n,onClick:ot(a.onClick,l.onOpenToggle)})});r4.displayName=n4;var Am="CollapsibleContent",s4=y.forwardRef((a,n)=>{const{forceMount:s,...i}=a,l=Cm(Am,a.__scopeCollapsible);return M.jsx(Ji,{present:s||l.open,children:({present:c})=>M.jsx(jw,{...i,ref:n,present:c})})});s4.displayName=Am;var jw=y.forwardRef((a,n)=>{const{__scopeCollapsible:s,present:i,children:l,...c}=a,d=Cm(Am,s),[h,g]=y.useState(i),p=y.useRef(null),m=zt(n,p),u=y.useRef(0),S=u.current,w=y.useRef(0),z=w.current,_=d.open||h,b=y.useRef(_),x=y.useRef(void 0);return y.useEffect(()=>{const O=requestAnimationFrame(()=>b.current=!1);return()=>cancelAnimationFrame(O)},[]),Da(()=>{const O=p.current;if(O){x.current=x.current||{transitionDuration:O.style.transitionDuration,animationName:O.style.animationName},O.style.transitionDuration="0s",O.style.animationName="none";const R=O.getBoundingClientRect();u.current=R.height,w.current=R.width,b.current||(O.style.transitionDuration=x.current.transitionDuration,O.style.animationName=x.current.animationName),g(i)}},[d.open,i]),M.jsx(st.div,{"data-state":km(d.open),"data-disabled":d.disabled?"":void 0,id:d.contentId,hidden:!_,...c,ref:m,style:{"--radix-collapsible-content-height":S?`${S}px`:void 0,"--radix-collapsible-content-width":z?`${z}px`:void 0,...a.style},children:_&&l})});function km(a){return a?"open":"closed"}var Nw=i4,Dw=r4,Ow=s4,en="Accordion",Hw=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[jm,Rw,$w]=_m(en),[Id]=Wi(en,[$w,a4]),Nm=a4(),l4=Ae.forwardRef((a,n)=>{const{type:s,...i}=a,l=i,c=i;return M.jsx(jm.Provider,{scope:a.__scopeAccordion,children:s==="multiple"?M.jsx(Uw,{...c,ref:n}):M.jsx(Bw,{...l,ref:n})})});l4.displayName=en;var[o4,Vw]=Id(en),[c4,Lw]=Id(en,{collapsible:!1}),Bw=Ae.forwardRef((a,n)=>{const{value:s,defaultValue:i,onValueChange:l=()=>{},collapsible:c=!1,...d}=a,[h,g]=pn({prop:s,defaultProp:i??"",onChange:l,caller:en});return M.jsx(o4,{scope:a.__scopeAccordion,value:Ae.useMemo(()=>h?[h]:[],[h]),onItemOpen:g,onItemClose:Ae.useCallback(()=>c&&g(""),[c,g]),children:M.jsx(c4,{scope:a.__scopeAccordion,collapsible:c,children:M.jsx(d4,{...d,ref:n})})})}),Uw=Ae.forwardRef((a,n)=>{const{value:s,defaultValue:i,onValueChange:l=()=>{},...c}=a,[d,h]=pn({prop:s,defaultProp:i??[],onChange:l,caller:en}),g=Ae.useCallback(m=>h((u=[])=>[...u,m]),[h]),p=Ae.useCallback(m=>h((u=[])=>u.filter(S=>S!==m)),[h]);return M.jsx(o4,{scope:a.__scopeAccordion,value:d,onItemOpen:g,onItemClose:p,children:M.jsx(c4,{scope:a.__scopeAccordion,collapsible:!0,children:M.jsx(d4,{...c,ref:n})})})}),[Iw,Pd]=Id(en),d4=Ae.forwardRef((a,n)=>{const{__scopeAccordion:s,disabled:i,dir:l,orientation:c="vertical",...d}=a,h=Ae.useRef(null),g=zt(h,n),p=Rw(s),u=Ho(l)==="ltr",S=ot(a.onKeyDown,w=>{var $;if(!Hw.includes(w.key))return;const z=w.target,_=p().filter(Z=>{var he;return!((he=Z.ref.current)!=null&&he.disabled)}),b=_.findIndex(Z=>Z.ref.current===z),x=_.length;if(b===-1)return;w.preventDefault();let O=b;const R=0,C=x-1,A=()=>{O=b+1,O>C&&(O=R)},I=()=>{O=b-1,O<R&&(O=C)};switch(w.key){case"Home":O=R;break;case"End":O=C;break;case"ArrowRight":c==="horizontal"&&(u?A():I());break;case"ArrowDown":c==="vertical"&&A();break;case"ArrowLeft":c==="horizontal"&&(u?I():A());break;case"ArrowUp":c==="vertical"&&I();break}const H=O%x;($=_[H].ref.current)==null||$.focus()});return M.jsx(Iw,{scope:s,disabled:i,direction:l,orientation:c,children:M.jsx(jm.Slot,{scope:s,children:M.jsx(st.div,{...d,"data-orientation":c,ref:g,onKeyDown:i?void 0:S})})})}),Ed="AccordionItem",[Pw,Dm]=Id(Ed),u4=Ae.forwardRef((a,n)=>{const{__scopeAccordion:s,value:i,...l}=a,c=Pd(Ed,s),d=Vw(Ed,s),h=Nm(s),g=fn(),p=i&&d.value.includes(i)||!1,m=c.disabled||a.disabled;return M.jsx(Pw,{scope:s,open:p,disabled:m,triggerId:g,children:M.jsx(Nw,{"data-orientation":c.orientation,"data-state":v4(p),...h,...l,ref:n,disabled:m,open:p,onOpenChange:u=>{u?d.onItemOpen(i):d.onItemClose(i)}})})});u4.displayName=Ed;var h4="AccordionHeader",f4=Ae.forwardRef((a,n)=>{const{__scopeAccordion:s,...i}=a,l=Pd(en,s),c=Dm(h4,s);return M.jsx(st.h3,{"data-orientation":l.orientation,"data-state":v4(c.open),"data-disabled":c.disabled?"":void 0,...i,ref:n})});f4.displayName=h4;var tm="AccordionTrigger",m4=Ae.forwardRef((a,n)=>{const{__scopeAccordion:s,...i}=a,l=Pd(en,s),c=Dm(tm,s),d=Lw(tm,s),h=Nm(s);return M.jsx(jm.ItemSlot,{scope:s,children:M.jsx(Dw,{"aria-disabled":c.open&&!d.collapsible||void 0,"data-orientation":l.orientation,id:c.triggerId,...h,...i,ref:n})})});m4.displayName=tm;var p4="AccordionContent",g4=Ae.forwardRef((a,n)=>{const{__scopeAccordion:s,...i}=a,l=Pd(en,s),c=Dm(p4,s),d=Nm(s);return M.jsx(Ow,{role:"region","aria-labelledby":c.triggerId,"data-orientation":l.orientation,...d,...i,ref:n,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...a.style}})});g4.displayName=p4;function v4(a){return a?"open":"closed"}var Zw=l4,qw=u4,Yw=f4,Fw=m4,Gw=g4;/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xw=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Qw=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(n,s,i)=>i?i.toUpperCase():s.toLowerCase()),Ov=a=>{const n=Qw(a);return n.charAt(0).toUpperCase()+n.slice(1)},b4=(...a)=>a.filter((n,s,i)=>!!n&&n.trim()!==""&&i.indexOf(n)===s).join(" ").trim();/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Kw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ww=y.forwardRef(({color:a="currentColor",size:n=24,strokeWidth:s=2,absoluteStrokeWidth:i,className:l="",children:c,iconNode:d,...h},g)=>y.createElement("svg",{ref:g,...Kw,width:n,height:n,stroke:a,strokeWidth:i?Number(s)*24/Number(n):s,className:b4("lucide",l),...h},[...d.map(([p,m])=>y.createElement(p,m)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yl=(a,n)=>{const s=y.forwardRef(({className:i,...l},c)=>y.createElement(Ww,{ref:c,iconNode:n,className:b4(`lucide-${Xw(Ov(a))}`,`lucide-${a}`,i),...l}));return s.displayName=Ov(a),s};/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jw=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Om=yl("chevron-down",Jw);function ez({...a}){return M.jsx(Zw,{"data-slot":"accordion",...a})}function tz({className:a,...n}){return M.jsx(qw,{"data-slot":"accordion-item",className:St("border-b last:border-b-0",a),...n})}function az({className:a,children:n,...s}){return M.jsx(Yw,{className:"flex",children:M.jsxs(Fw,{"data-slot":"accordion-trigger",className:St("focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",a),...s,children:[n,M.jsx(Om,{className:"text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200"})]})})}function iz({className:a,children:n,...s}){return M.jsx(Gw,{"data-slot":"accordion-content",className:"data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm",...s,children:M.jsx("div",{className:St("pt-0 pb-4",a),children:n})})}function am({className:a,...n}){return M.jsx("textarea",{"data-slot":"textarea",className:St("border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",a),...n})}var nz=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],rz=nz.reduce((a,n)=>{const s=vm(`Primitive.${n}`),i=y.forwardRef((l,c)=>{const{asChild:d,...h}=l,g=d?s:n;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),M.jsx(g,{...h,ref:c})});return i.displayName=`Primitive.${n}`,{...a,[n]:i}},{}),sz="Label",y4=y.forwardRef((a,n)=>M.jsx(rz.label,{...a,ref:n,onMouseDown:s=>{var l;s.target.closest("button, input, select, textarea")||((l=a.onMouseDown)==null||l.call(a,s),!s.defaultPrevented&&s.detail>1&&s.preventDefault())}}));y4.displayName=sz;var lz=y4;function ja({className:a,...n}){return M.jsx(lz,{"data-slot":"label",className:St("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",a),...n})}function oz(a,n=globalThis==null?void 0:globalThis.document){const s=Ya(a);y.useEffect(()=>{const i=l=>{l.key==="Escape"&&s(l)};return n.addEventListener("keydown",i,{capture:!0}),()=>n.removeEventListener("keydown",i,{capture:!0})},[s,n])}var cz="DismissableLayer",im="dismissableLayer.update",dz="dismissableLayer.pointerDownOutside",uz="dismissableLayer.focusOutside",Hv,_4=y.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Hm=y.forwardRef((a,n)=>{const{disableOutsidePointerEvents:s=!1,onEscapeKeyDown:i,onPointerDownOutside:l,onFocusOutside:c,onInteractOutside:d,onDismiss:h,...g}=a,p=y.useContext(_4),[m,u]=y.useState(null),S=(m==null?void 0:m.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,w]=y.useState({}),z=zt(n,H=>u(H)),_=Array.from(p.layers),[b]=[...p.layersWithOutsidePointerEventsDisabled].slice(-1),x=_.indexOf(b),O=m?_.indexOf(m):-1,R=p.layersWithOutsidePointerEventsDisabled.size>0,C=O>=x,A=mz(H=>{const $=H.target,Z=[...p.branches].some(he=>he.contains($));!C||Z||(l==null||l(H),d==null||d(H),H.defaultPrevented||h==null||h())},S),I=pz(H=>{const $=H.target;[...p.branches].some(he=>he.contains($))||(c==null||c(H),d==null||d(H),H.defaultPrevented||h==null||h())},S);return oz(H=>{O===p.layers.size-1&&(i==null||i(H),!H.defaultPrevented&&h&&(H.preventDefault(),h()))},S),y.useEffect(()=>{if(m)return s&&(p.layersWithOutsidePointerEventsDisabled.size===0&&(Hv=S.body.style.pointerEvents,S.body.style.pointerEvents="none"),p.layersWithOutsidePointerEventsDisabled.add(m)),p.layers.add(m),Rv(),()=>{s&&p.layersWithOutsidePointerEventsDisabled.size===1&&(S.body.style.pointerEvents=Hv)}},[m,S,s,p]),y.useEffect(()=>()=>{m&&(p.layers.delete(m),p.layersWithOutsidePointerEventsDisabled.delete(m),Rv())},[m,p]),y.useEffect(()=>{const H=()=>w({});return document.addEventListener(im,H),()=>document.removeEventListener(im,H)},[]),M.jsx(st.div,{...g,ref:z,style:{pointerEvents:R?C?"auto":"none":void 0,...a.style},onFocusCapture:ot(a.onFocusCapture,I.onFocusCapture),onBlurCapture:ot(a.onBlurCapture,I.onBlurCapture),onPointerDownCapture:ot(a.onPointerDownCapture,A.onPointerDownCapture)})});Hm.displayName=cz;var hz="DismissableLayerBranch",fz=y.forwardRef((a,n)=>{const s=y.useContext(_4),i=y.useRef(null),l=zt(n,i);return y.useEffect(()=>{const c=i.current;if(c)return s.branches.add(c),()=>{s.branches.delete(c)}},[s.branches]),M.jsx(st.div,{...a,ref:l})});fz.displayName=hz;function mz(a,n=globalThis==null?void 0:globalThis.document){const s=Ya(a),i=y.useRef(!1),l=y.useRef(()=>{});return y.useEffect(()=>{const c=h=>{if(h.target&&!i.current){let g=function(){x4(dz,s,p,{discrete:!0})};const p={originalEvent:h};h.pointerType==="touch"?(n.removeEventListener("click",l.current),l.current=g,n.addEventListener("click",l.current,{once:!0})):g()}else n.removeEventListener("click",l.current);i.current=!1},d=window.setTimeout(()=>{n.addEventListener("pointerdown",c)},0);return()=>{window.clearTimeout(d),n.removeEventListener("pointerdown",c),n.removeEventListener("click",l.current)}},[n,s]),{onPointerDownCapture:()=>i.current=!0}}function pz(a,n=globalThis==null?void 0:globalThis.document){const s=Ya(a),i=y.useRef(!1);return y.useEffect(()=>{const l=c=>{c.target&&!i.current&&x4(uz,s,{originalEvent:c},{discrete:!1})};return n.addEventListener("focusin",l),()=>n.removeEventListener("focusin",l)},[n,s]),{onFocusCapture:()=>i.current=!0,onBlurCapture:()=>i.current=!1}}function Rv(){const a=new CustomEvent(im);document.dispatchEvent(a)}function x4(a,n,s,{discrete:i}){const l=s.originalEvent.target,c=new CustomEvent(a,{bubbles:!1,cancelable:!0,detail:s});n&&l.addEventListener(a,n,{once:!0}),i?v6(l,c):l.dispatchEvent(c)}var Sf=0;function w4(){y.useEffect(()=>{const a=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",a[0]??$v()),document.body.insertAdjacentElement("beforeend",a[1]??$v()),Sf++,()=>{Sf===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(n=>n.remove()),Sf--}},[])}function $v(){const a=document.createElement("span");return a.setAttribute("data-radix-focus-guard",""),a.tabIndex=0,a.style.outline="none",a.style.opacity="0",a.style.position="fixed",a.style.pointerEvents="none",a}var Mf="focusScope.autoFocusOnMount",Ef="focusScope.autoFocusOnUnmount",Vv={bubbles:!1,cancelable:!0},gz="FocusScope",Rm=y.forwardRef((a,n)=>{const{loop:s=!1,trapped:i=!1,onMountAutoFocus:l,onUnmountAutoFocus:c,...d}=a,[h,g]=y.useState(null),p=Ya(l),m=Ya(c),u=y.useRef(null),S=zt(n,_=>g(_)),w=y.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;y.useEffect(()=>{if(i){let _=function(R){if(w.paused||!h)return;const C=R.target;h.contains(C)?u.current=C:xr(u.current,{select:!0})},b=function(R){if(w.paused||!h)return;const C=R.relatedTarget;C!==null&&(h.contains(C)||xr(u.current,{select:!0}))},x=function(R){if(document.activeElement===document.body)for(const A of R)A.removedNodes.length>0&&xr(h)};document.addEventListener("focusin",_),document.addEventListener("focusout",b);const O=new MutationObserver(x);return h&&O.observe(h,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",_),document.removeEventListener("focusout",b),O.disconnect()}}},[i,h,w.paused]),y.useEffect(()=>{if(h){Bv.add(w);const _=document.activeElement;if(!h.contains(_)){const x=new CustomEvent(Mf,Vv);h.addEventListener(Mf,p),h.dispatchEvent(x),x.defaultPrevented||(vz(wz(z4(h)),{select:!0}),document.activeElement===_&&xr(h))}return()=>{h.removeEventListener(Mf,p),setTimeout(()=>{const x=new CustomEvent(Ef,Vv);h.addEventListener(Ef,m),h.dispatchEvent(x),x.defaultPrevented||xr(_??document.body,{select:!0}),h.removeEventListener(Ef,m),Bv.remove(w)},0)}}},[h,p,m,w]);const z=y.useCallback(_=>{if(!s&&!i||w.paused)return;const b=_.key==="Tab"&&!_.altKey&&!_.ctrlKey&&!_.metaKey,x=document.activeElement;if(b&&x){const O=_.currentTarget,[R,C]=bz(O);R&&C?!_.shiftKey&&x===C?(_.preventDefault(),s&&xr(R,{select:!0})):_.shiftKey&&x===R&&(_.preventDefault(),s&&xr(C,{select:!0})):x===O&&_.preventDefault()}},[s,i,w.paused]);return M.jsx(st.div,{tabIndex:-1,...d,ref:S,onKeyDown:z})});Rm.displayName=gz;function vz(a,{select:n=!1}={}){const s=document.activeElement;for(const i of a)if(xr(i,{select:n}),document.activeElement!==s)return}function bz(a){const n=z4(a),s=Lv(n,a),i=Lv(n.reverse(),a);return[s,i]}function z4(a){const n=[],s=document.createTreeWalker(a,NodeFilter.SHOW_ELEMENT,{acceptNode:i=>{const l=i.tagName==="INPUT"&&i.type==="hidden";return i.disabled||i.hidden||l?NodeFilter.FILTER_SKIP:i.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;s.nextNode();)n.push(s.currentNode);return n}function Lv(a,n){for(const s of a)if(!yz(s,{upTo:n}))return s}function yz(a,{upTo:n}){if(getComputedStyle(a).visibility==="hidden")return!0;for(;a;){if(n!==void 0&&a===n)return!1;if(getComputedStyle(a).display==="none")return!0;a=a.parentElement}return!1}function _z(a){return a instanceof HTMLInputElement&&"select"in a}function xr(a,{select:n=!1}={}){if(a&&a.focus){const s=document.activeElement;a.focus({preventScroll:!0}),a!==s&&_z(a)&&n&&a.select()}}var Bv=xz();function xz(){let a=[];return{add(n){const s=a[0];n!==s&&(s==null||s.pause()),a=Uv(a,n),a.unshift(n)},remove(n){var s;a=Uv(a,n),(s=a[0])==null||s.resume()}}}function Uv(a,n){const s=[...a],i=s.indexOf(n);return i!==-1&&s.splice(i,1),s}function wz(a){return a.filter(n=>n.tagName!=="A")}const zz=["top","right","bottom","left"],Er=Math.min,bi=Math.max,Td=Math.round,nd=Math.floor,mn=a=>({x:a,y:a}),Sz={left:"right",right:"left",bottom:"top",top:"bottom"},Mz={start:"end",end:"start"};function nm(a,n,s){return bi(a,Er(n,s))}function Zn(a,n){return typeof a=="function"?a(n):a}function qn(a){return a.split("-")[0]}function _l(a){return a.split("-")[1]}function $m(a){return a==="x"?"y":"x"}function Vm(a){return a==="y"?"height":"width"}const Ez=new Set(["top","bottom"]);function hn(a){return Ez.has(qn(a))?"y":"x"}function Lm(a){return $m(hn(a))}function Tz(a,n,s){s===void 0&&(s=!1);const i=_l(a),l=Lm(a),c=Vm(l);let d=l==="x"?i===(s?"end":"start")?"right":"left":i==="start"?"bottom":"top";return n.reference[c]>n.floating[c]&&(d=Cd(d)),[d,Cd(d)]}function Cz(a){const n=Cd(a);return[rm(a),n,rm(n)]}function rm(a){return a.replace(/start|end/g,n=>Mz[n])}const Iv=["left","right"],Pv=["right","left"],Az=["top","bottom"],kz=["bottom","top"];function jz(a,n,s){switch(a){case"top":case"bottom":return s?n?Pv:Iv:n?Iv:Pv;case"left":case"right":return n?Az:kz;default:return[]}}function Nz(a,n,s,i){const l=_l(a);let c=jz(qn(a),s==="start",i);return l&&(c=c.map(d=>d+"-"+l),n&&(c=c.concat(c.map(rm)))),c}function Cd(a){return a.replace(/left|right|bottom|top/g,n=>Sz[n])}function Dz(a){return{top:0,right:0,bottom:0,left:0,...a}}function S4(a){return typeof a!="number"?Dz(a):{top:a,right:a,bottom:a,left:a}}function Ad(a){const{x:n,y:s,width:i,height:l}=a;return{width:i,height:l,top:s,left:n,right:n+i,bottom:s+l,x:n,y:s}}function Zv(a,n,s){let{reference:i,floating:l}=a;const c=hn(n),d=Lm(n),h=Vm(d),g=qn(n),p=c==="y",m=i.x+i.width/2-l.width/2,u=i.y+i.height/2-l.height/2,S=i[h]/2-l[h]/2;let w;switch(g){case"top":w={x:m,y:i.y-l.height};break;case"bottom":w={x:m,y:i.y+i.height};break;case"right":w={x:i.x+i.width,y:u};break;case"left":w={x:i.x-l.width,y:u};break;default:w={x:i.x,y:i.y}}switch(_l(n)){case"start":w[d]-=S*(s&&p?-1:1);break;case"end":w[d]+=S*(s&&p?-1:1);break}return w}const Oz=async(a,n,s)=>{const{placement:i="bottom",strategy:l="absolute",middleware:c=[],platform:d}=s,h=c.filter(Boolean),g=await(d.isRTL==null?void 0:d.isRTL(n));let p=await d.getElementRects({reference:a,floating:n,strategy:l}),{x:m,y:u}=Zv(p,i,g),S=i,w={},z=0;for(let _=0;_<h.length;_++){const{name:b,fn:x}=h[_],{x:O,y:R,data:C,reset:A}=await x({x:m,y:u,initialPlacement:i,placement:S,strategy:l,middlewareData:w,rects:p,platform:d,elements:{reference:a,floating:n}});m=O??m,u=R??u,w={...w,[b]:{...w[b],...C}},A&&z<=50&&(z++,typeof A=="object"&&(A.placement&&(S=A.placement),A.rects&&(p=A.rects===!0?await d.getElementRects({reference:a,floating:n,strategy:l}):A.rects),{x:m,y:u}=Zv(p,S,g)),_=-1)}return{x:m,y:u,placement:S,strategy:l,middlewareData:w}};async function Co(a,n){var s;n===void 0&&(n={});const{x:i,y:l,platform:c,rects:d,elements:h,strategy:g}=a,{boundary:p="clippingAncestors",rootBoundary:m="viewport",elementContext:u="floating",altBoundary:S=!1,padding:w=0}=Zn(n,a),z=S4(w),b=h[S?u==="floating"?"reference":"floating":u],x=Ad(await c.getClippingRect({element:(s=await(c.isElement==null?void 0:c.isElement(b)))==null||s?b:b.contextElement||await(c.getDocumentElement==null?void 0:c.getDocumentElement(h.floating)),boundary:p,rootBoundary:m,strategy:g})),O=u==="floating"?{x:i,y:l,width:d.floating.width,height:d.floating.height}:d.reference,R=await(c.getOffsetParent==null?void 0:c.getOffsetParent(h.floating)),C=await(c.isElement==null?void 0:c.isElement(R))?await(c.getScale==null?void 0:c.getScale(R))||{x:1,y:1}:{x:1,y:1},A=Ad(c.convertOffsetParentRelativeRectToViewportRelativeRect?await c.convertOffsetParentRelativeRectToViewportRelativeRect({elements:h,rect:O,offsetParent:R,strategy:g}):O);return{top:(x.top-A.top+z.top)/C.y,bottom:(A.bottom-x.bottom+z.bottom)/C.y,left:(x.left-A.left+z.left)/C.x,right:(A.right-x.right+z.right)/C.x}}const Hz=a=>({name:"arrow",options:a,async fn(n){const{x:s,y:i,placement:l,rects:c,platform:d,elements:h,middlewareData:g}=n,{element:p,padding:m=0}=Zn(a,n)||{};if(p==null)return{};const u=S4(m),S={x:s,y:i},w=Lm(l),z=Vm(w),_=await d.getDimensions(p),b=w==="y",x=b?"top":"left",O=b?"bottom":"right",R=b?"clientHeight":"clientWidth",C=c.reference[z]+c.reference[w]-S[w]-c.floating[z],A=S[w]-c.reference[w],I=await(d.getOffsetParent==null?void 0:d.getOffsetParent(p));let H=I?I[R]:0;(!H||!await(d.isElement==null?void 0:d.isElement(I)))&&(H=h.floating[R]||c.floating[z]);const $=C/2-A/2,Z=H/2-_[z]/2-1,he=Er(u[x],Z),xe=Er(u[O],Z),V=he,T=H-_[z]-xe,W=H/2-_[z]/2+$,ze=nm(V,W,T),k=!g.arrow&&_l(l)!=null&&W!==ze&&c.reference[z]/2-(W<V?he:xe)-_[z]/2<0,D=k?W<V?W-V:W-T:0;return{[w]:S[w]+D,data:{[w]:ze,centerOffset:W-ze-D,...k&&{alignmentOffset:D}},reset:k}}}),Rz=function(a){return a===void 0&&(a={}),{name:"flip",options:a,async fn(n){var s,i;const{placement:l,middlewareData:c,rects:d,initialPlacement:h,platform:g,elements:p}=n,{mainAxis:m=!0,crossAxis:u=!0,fallbackPlacements:S,fallbackStrategy:w="bestFit",fallbackAxisSideDirection:z="none",flipAlignment:_=!0,...b}=Zn(a,n);if((s=c.arrow)!=null&&s.alignmentOffset)return{};const x=qn(l),O=hn(h),R=qn(h)===h,C=await(g.isRTL==null?void 0:g.isRTL(p.floating)),A=S||(R||!_?[Cd(h)]:Cz(h)),I=z!=="none";!S&&I&&A.push(...Nz(h,_,z,C));const H=[h,...A],$=await Co(n,b),Z=[];let he=((i=c.flip)==null?void 0:i.overflows)||[];if(m&&Z.push($[x]),u){const W=Tz(l,d,C);Z.push($[W[0]],$[W[1]])}if(he=[...he,{placement:l,overflows:Z}],!Z.every(W=>W<=0)){var xe,V;const W=(((xe=c.flip)==null?void 0:xe.index)||0)+1,ze=H[W];if(ze&&(!(u==="alignment"?O!==hn(ze):!1)||he.every(P=>hn(P.placement)===O?P.overflows[0]>0:!0)))return{data:{index:W,overflows:he},reset:{placement:ze}};let k=(V=he.filter(D=>D.overflows[0]<=0).sort((D,P)=>D.overflows[1]-P.overflows[1])[0])==null?void 0:V.placement;if(!k)switch(w){case"bestFit":{var T;const D=(T=he.filter(P=>{if(I){const ge=hn(P.placement);return ge===O||ge==="y"}return!0}).map(P=>[P.placement,P.overflows.filter(ge=>ge>0).reduce((ge,re)=>ge+re,0)]).sort((P,ge)=>P[1]-ge[1])[0])==null?void 0:T[0];D&&(k=D);break}case"initialPlacement":k=h;break}if(l!==k)return{reset:{placement:k}}}return{}}}};function qv(a,n){return{top:a.top-n.height,right:a.right-n.width,bottom:a.bottom-n.height,left:a.left-n.width}}function Yv(a){return zz.some(n=>a[n]>=0)}const $z=function(a){return a===void 0&&(a={}),{name:"hide",options:a,async fn(n){const{rects:s}=n,{strategy:i="referenceHidden",...l}=Zn(a,n);switch(i){case"referenceHidden":{const c=await Co(n,{...l,elementContext:"reference"}),d=qv(c,s.reference);return{data:{referenceHiddenOffsets:d,referenceHidden:Yv(d)}}}case"escaped":{const c=await Co(n,{...l,altBoundary:!0}),d=qv(c,s.floating);return{data:{escapedOffsets:d,escaped:Yv(d)}}}default:return{}}}}},M4=new Set(["left","top"]);async function Vz(a,n){const{placement:s,platform:i,elements:l}=a,c=await(i.isRTL==null?void 0:i.isRTL(l.floating)),d=qn(s),h=_l(s),g=hn(s)==="y",p=M4.has(d)?-1:1,m=c&&g?-1:1,u=Zn(n,a);let{mainAxis:S,crossAxis:w,alignmentAxis:z}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:u.mainAxis||0,crossAxis:u.crossAxis||0,alignmentAxis:u.alignmentAxis};return h&&typeof z=="number"&&(w=h==="end"?z*-1:z),g?{x:w*m,y:S*p}:{x:S*p,y:w*m}}const Lz=function(a){return a===void 0&&(a=0),{name:"offset",options:a,async fn(n){var s,i;const{x:l,y:c,placement:d,middlewareData:h}=n,g=await Vz(n,a);return d===((s=h.offset)==null?void 0:s.placement)&&(i=h.arrow)!=null&&i.alignmentOffset?{}:{x:l+g.x,y:c+g.y,data:{...g,placement:d}}}}},Bz=function(a){return a===void 0&&(a={}),{name:"shift",options:a,async fn(n){const{x:s,y:i,placement:l}=n,{mainAxis:c=!0,crossAxis:d=!1,limiter:h={fn:b=>{let{x,y:O}=b;return{x,y:O}}},...g}=Zn(a,n),p={x:s,y:i},m=await Co(n,g),u=hn(qn(l)),S=$m(u);let w=p[S],z=p[u];if(c){const b=S==="y"?"top":"left",x=S==="y"?"bottom":"right",O=w+m[b],R=w-m[x];w=nm(O,w,R)}if(d){const b=u==="y"?"top":"left",x=u==="y"?"bottom":"right",O=z+m[b],R=z-m[x];z=nm(O,z,R)}const _=h.fn({...n,[S]:w,[u]:z});return{..._,data:{x:_.x-s,y:_.y-i,enabled:{[S]:c,[u]:d}}}}}},Uz=function(a){return a===void 0&&(a={}),{options:a,fn(n){const{x:s,y:i,placement:l,rects:c,middlewareData:d}=n,{offset:h=0,mainAxis:g=!0,crossAxis:p=!0}=Zn(a,n),m={x:s,y:i},u=hn(l),S=$m(u);let w=m[S],z=m[u];const _=Zn(h,n),b=typeof _=="number"?{mainAxis:_,crossAxis:0}:{mainAxis:0,crossAxis:0,..._};if(g){const R=S==="y"?"height":"width",C=c.reference[S]-c.floating[R]+b.mainAxis,A=c.reference[S]+c.reference[R]-b.mainAxis;w<C?w=C:w>A&&(w=A)}if(p){var x,O;const R=S==="y"?"width":"height",C=M4.has(qn(l)),A=c.reference[u]-c.floating[R]+(C&&((x=d.offset)==null?void 0:x[u])||0)+(C?0:b.crossAxis),I=c.reference[u]+c.reference[R]+(C?0:((O=d.offset)==null?void 0:O[u])||0)-(C?b.crossAxis:0);z<A?z=A:z>I&&(z=I)}return{[S]:w,[u]:z}}}},Iz=function(a){return a===void 0&&(a={}),{name:"size",options:a,async fn(n){var s,i;const{placement:l,rects:c,platform:d,elements:h}=n,{apply:g=()=>{},...p}=Zn(a,n),m=await Co(n,p),u=qn(l),S=_l(l),w=hn(l)==="y",{width:z,height:_}=c.floating;let b,x;u==="top"||u==="bottom"?(b=u,x=S===(await(d.isRTL==null?void 0:d.isRTL(h.floating))?"start":"end")?"left":"right"):(x=u,b=S==="end"?"top":"bottom");const O=_-m.top-m.bottom,R=z-m.left-m.right,C=Er(_-m[b],O),A=Er(z-m[x],R),I=!n.middlewareData.shift;let H=C,$=A;if((s=n.middlewareData.shift)!=null&&s.enabled.x&&($=R),(i=n.middlewareData.shift)!=null&&i.enabled.y&&(H=O),I&&!S){const he=bi(m.left,0),xe=bi(m.right,0),V=bi(m.top,0),T=bi(m.bottom,0);w?$=z-2*(he!==0||xe!==0?he+xe:bi(m.left,m.right)):H=_-2*(V!==0||T!==0?V+T:bi(m.top,m.bottom))}await g({...n,availableWidth:$,availableHeight:H});const Z=await d.getDimensions(h.floating);return z!==Z.width||_!==Z.height?{reset:{rects:!0}}:{}}}};function Zd(){return typeof window<"u"}function xl(a){return E4(a)?(a.nodeName||"").toLowerCase():"#document"}function _i(a){var n;return(a==null||(n=a.ownerDocument)==null?void 0:n.defaultView)||window}function bn(a){var n;return(n=(E4(a)?a.ownerDocument:a.document)||window.document)==null?void 0:n.documentElement}function E4(a){return Zd()?a instanceof Node||a instanceof _i(a).Node:!1}function Qi(a){return Zd()?a instanceof Element||a instanceof _i(a).Element:!1}function gn(a){return Zd()?a instanceof HTMLElement||a instanceof _i(a).HTMLElement:!1}function Fv(a){return!Zd()||typeof ShadowRoot>"u"?!1:a instanceof ShadowRoot||a instanceof _i(a).ShadowRoot}const Pz=new Set(["inline","contents"]);function Vo(a){const{overflow:n,overflowX:s,overflowY:i,display:l}=Ki(a);return/auto|scroll|overlay|hidden|clip/.test(n+i+s)&&!Pz.has(l)}const Zz=new Set(["table","td","th"]);function qz(a){return Zz.has(xl(a))}const Yz=[":popover-open",":modal"];function qd(a){return Yz.some(n=>{try{return a.matches(n)}catch{return!1}})}const Fz=["transform","translate","scale","rotate","perspective"],Gz=["transform","translate","scale","rotate","perspective","filter"],Xz=["paint","layout","strict","content"];function Bm(a){const n=Um(),s=Qi(a)?Ki(a):a;return Fz.some(i=>s[i]?s[i]!=="none":!1)||(s.containerType?s.containerType!=="normal":!1)||!n&&(s.backdropFilter?s.backdropFilter!=="none":!1)||!n&&(s.filter?s.filter!=="none":!1)||Gz.some(i=>(s.willChange||"").includes(i))||Xz.some(i=>(s.contain||"").includes(i))}function Qz(a){let n=Tr(a);for(;gn(n)&&!fl(n);){if(Bm(n))return n;if(qd(n))return null;n=Tr(n)}return null}function Um(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const Kz=new Set(["html","body","#document"]);function fl(a){return Kz.has(xl(a))}function Ki(a){return _i(a).getComputedStyle(a)}function Yd(a){return Qi(a)?{scrollLeft:a.scrollLeft,scrollTop:a.scrollTop}:{scrollLeft:a.scrollX,scrollTop:a.scrollY}}function Tr(a){if(xl(a)==="html")return a;const n=a.assignedSlot||a.parentNode||Fv(a)&&a.host||bn(a);return Fv(n)?n.host:n}function T4(a){const n=Tr(a);return fl(n)?a.ownerDocument?a.ownerDocument.body:a.body:gn(n)&&Vo(n)?n:T4(n)}function Ao(a,n,s){var i;n===void 0&&(n=[]),s===void 0&&(s=!0);const l=T4(a),c=l===((i=a.ownerDocument)==null?void 0:i.body),d=_i(l);if(c){const h=sm(d);return n.concat(d,d.visualViewport||[],Vo(l)?l:[],h&&s?Ao(h):[])}return n.concat(l,Ao(l,[],s))}function sm(a){return a.parent&&Object.getPrototypeOf(a.parent)?a.frameElement:null}function C4(a){const n=Ki(a);let s=parseFloat(n.width)||0,i=parseFloat(n.height)||0;const l=gn(a),c=l?a.offsetWidth:s,d=l?a.offsetHeight:i,h=Td(s)!==c||Td(i)!==d;return h&&(s=c,i=d),{width:s,height:i,$:h}}function Im(a){return Qi(a)?a:a.contextElement}function dl(a){const n=Im(a);if(!gn(n))return mn(1);const s=n.getBoundingClientRect(),{width:i,height:l,$:c}=C4(n);let d=(c?Td(s.width):s.width)/i,h=(c?Td(s.height):s.height)/l;return(!d||!Number.isFinite(d))&&(d=1),(!h||!Number.isFinite(h))&&(h=1),{x:d,y:h}}const Wz=mn(0);function A4(a){const n=_i(a);return!Um()||!n.visualViewport?Wz:{x:n.visualViewport.offsetLeft,y:n.visualViewport.offsetTop}}function Jz(a,n,s){return n===void 0&&(n=!1),!s||n&&s!==_i(a)?!1:n}function cs(a,n,s,i){n===void 0&&(n=!1),s===void 0&&(s=!1);const l=a.getBoundingClientRect(),c=Im(a);let d=mn(1);n&&(i?Qi(i)&&(d=dl(i)):d=dl(a));const h=Jz(c,s,i)?A4(c):mn(0);let g=(l.left+h.x)/d.x,p=(l.top+h.y)/d.y,m=l.width/d.x,u=l.height/d.y;if(c){const S=_i(c),w=i&&Qi(i)?_i(i):i;let z=S,_=sm(z);for(;_&&i&&w!==z;){const b=dl(_),x=_.getBoundingClientRect(),O=Ki(_),R=x.left+(_.clientLeft+parseFloat(O.paddingLeft))*b.x,C=x.top+(_.clientTop+parseFloat(O.paddingTop))*b.y;g*=b.x,p*=b.y,m*=b.x,u*=b.y,g+=R,p+=C,z=_i(_),_=sm(z)}}return Ad({width:m,height:u,x:g,y:p})}function Fd(a,n){const s=Yd(a).scrollLeft;return n?n.left+s:cs(bn(a)).left+s}function k4(a,n){const s=a.getBoundingClientRect(),i=s.left+n.scrollLeft-Fd(a,s),l=s.top+n.scrollTop;return{x:i,y:l}}function eS(a){let{elements:n,rect:s,offsetParent:i,strategy:l}=a;const c=l==="fixed",d=bn(i),h=n?qd(n.floating):!1;if(i===d||h&&c)return s;let g={scrollLeft:0,scrollTop:0},p=mn(1);const m=mn(0),u=gn(i);if((u||!u&&!c)&&((xl(i)!=="body"||Vo(d))&&(g=Yd(i)),gn(i))){const w=cs(i);p=dl(i),m.x=w.x+i.clientLeft,m.y=w.y+i.clientTop}const S=d&&!u&&!c?k4(d,g):mn(0);return{width:s.width*p.x,height:s.height*p.y,x:s.x*p.x-g.scrollLeft*p.x+m.x+S.x,y:s.y*p.y-g.scrollTop*p.y+m.y+S.y}}function tS(a){return Array.from(a.getClientRects())}function aS(a){const n=bn(a),s=Yd(a),i=a.ownerDocument.body,l=bi(n.scrollWidth,n.clientWidth,i.scrollWidth,i.clientWidth),c=bi(n.scrollHeight,n.clientHeight,i.scrollHeight,i.clientHeight);let d=-s.scrollLeft+Fd(a);const h=-s.scrollTop;return Ki(i).direction==="rtl"&&(d+=bi(n.clientWidth,i.clientWidth)-l),{width:l,height:c,x:d,y:h}}const Gv=25;function iS(a,n){const s=_i(a),i=bn(a),l=s.visualViewport;let c=i.clientWidth,d=i.clientHeight,h=0,g=0;if(l){c=l.width,d=l.height;const m=Um();(!m||m&&n==="fixed")&&(h=l.offsetLeft,g=l.offsetTop)}const p=Fd(i);if(p<=0){const m=i.ownerDocument,u=m.body,S=getComputedStyle(u),w=m.compatMode==="CSS1Compat"&&parseFloat(S.marginLeft)+parseFloat(S.marginRight)||0,z=Math.abs(i.clientWidth-u.clientWidth-w);z<=Gv&&(c-=z)}else p<=Gv&&(c+=p);return{width:c,height:d,x:h,y:g}}const nS=new Set(["absolute","fixed"]);function rS(a,n){const s=cs(a,!0,n==="fixed"),i=s.top+a.clientTop,l=s.left+a.clientLeft,c=gn(a)?dl(a):mn(1),d=a.clientWidth*c.x,h=a.clientHeight*c.y,g=l*c.x,p=i*c.y;return{width:d,height:h,x:g,y:p}}function Xv(a,n,s){let i;if(n==="viewport")i=iS(a,s);else if(n==="document")i=aS(bn(a));else if(Qi(n))i=rS(n,s);else{const l=A4(a);i={x:n.x-l.x,y:n.y-l.y,width:n.width,height:n.height}}return Ad(i)}function j4(a,n){const s=Tr(a);return s===n||!Qi(s)||fl(s)?!1:Ki(s).position==="fixed"||j4(s,n)}function sS(a,n){const s=n.get(a);if(s)return s;let i=Ao(a,[],!1).filter(h=>Qi(h)&&xl(h)!=="body"),l=null;const c=Ki(a).position==="fixed";let d=c?Tr(a):a;for(;Qi(d)&&!fl(d);){const h=Ki(d),g=Bm(d);!g&&h.position==="fixed"&&(l=null),(c?!g&&!l:!g&&h.position==="static"&&!!l&&nS.has(l.position)||Vo(d)&&!g&&j4(a,d))?i=i.filter(m=>m!==d):l=h,d=Tr(d)}return n.set(a,i),i}function lS(a){let{element:n,boundary:s,rootBoundary:i,strategy:l}=a;const d=[...s==="clippingAncestors"?qd(n)?[]:sS(n,this._c):[].concat(s),i],h=d[0],g=d.reduce((p,m)=>{const u=Xv(n,m,l);return p.top=bi(u.top,p.top),p.right=Er(u.right,p.right),p.bottom=Er(u.bottom,p.bottom),p.left=bi(u.left,p.left),p},Xv(n,h,l));return{width:g.right-g.left,height:g.bottom-g.top,x:g.left,y:g.top}}function oS(a){const{width:n,height:s}=C4(a);return{width:n,height:s}}function cS(a,n,s){const i=gn(n),l=bn(n),c=s==="fixed",d=cs(a,!0,c,n);let h={scrollLeft:0,scrollTop:0};const g=mn(0);function p(){g.x=Fd(l)}if(i||!i&&!c)if((xl(n)!=="body"||Vo(l))&&(h=Yd(n)),i){const w=cs(n,!0,c,n);g.x=w.x+n.clientLeft,g.y=w.y+n.clientTop}else l&&p();c&&!i&&l&&p();const m=l&&!i&&!c?k4(l,h):mn(0),u=d.left+h.scrollLeft-g.x-m.x,S=d.top+h.scrollTop-g.y-m.y;return{x:u,y:S,width:d.width,height:d.height}}function Tf(a){return Ki(a).position==="static"}function Qv(a,n){if(!gn(a)||Ki(a).position==="fixed")return null;if(n)return n(a);let s=a.offsetParent;return bn(a)===s&&(s=s.ownerDocument.body),s}function N4(a,n){const s=_i(a);if(qd(a))return s;if(!gn(a)){let l=Tr(a);for(;l&&!fl(l);){if(Qi(l)&&!Tf(l))return l;l=Tr(l)}return s}let i=Qv(a,n);for(;i&&qz(i)&&Tf(i);)i=Qv(i,n);return i&&fl(i)&&Tf(i)&&!Bm(i)?s:i||Qz(a)||s}const dS=async function(a){const n=this.getOffsetParent||N4,s=this.getDimensions,i=await s(a.floating);return{reference:cS(a.reference,await n(a.floating),a.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function uS(a){return Ki(a).direction==="rtl"}const hS={convertOffsetParentRelativeRectToViewportRelativeRect:eS,getDocumentElement:bn,getClippingRect:lS,getOffsetParent:N4,getElementRects:dS,getClientRects:tS,getDimensions:oS,getScale:dl,isElement:Qi,isRTL:uS};function D4(a,n){return a.x===n.x&&a.y===n.y&&a.width===n.width&&a.height===n.height}function fS(a,n){let s=null,i;const l=bn(a);function c(){var h;clearTimeout(i),(h=s)==null||h.disconnect(),s=null}function d(h,g){h===void 0&&(h=!1),g===void 0&&(g=1),c();const p=a.getBoundingClientRect(),{left:m,top:u,width:S,height:w}=p;if(h||n(),!S||!w)return;const z=nd(u),_=nd(l.clientWidth-(m+S)),b=nd(l.clientHeight-(u+w)),x=nd(m),R={rootMargin:-z+"px "+-_+"px "+-b+"px "+-x+"px",threshold:bi(0,Er(1,g))||1};let C=!0;function A(I){const H=I[0].intersectionRatio;if(H!==g){if(!C)return d();H?d(!1,H):i=setTimeout(()=>{d(!1,1e-7)},1e3)}H===1&&!D4(p,a.getBoundingClientRect())&&d(),C=!1}try{s=new IntersectionObserver(A,{...R,root:l.ownerDocument})}catch{s=new IntersectionObserver(A,R)}s.observe(a)}return d(!0),c}function mS(a,n,s,i){i===void 0&&(i={});const{ancestorScroll:l=!0,ancestorResize:c=!0,elementResize:d=typeof ResizeObserver=="function",layoutShift:h=typeof IntersectionObserver=="function",animationFrame:g=!1}=i,p=Im(a),m=l||c?[...p?Ao(p):[],...Ao(n)]:[];m.forEach(x=>{l&&x.addEventListener("scroll",s,{passive:!0}),c&&x.addEventListener("resize",s)});const u=p&&h?fS(p,s):null;let S=-1,w=null;d&&(w=new ResizeObserver(x=>{let[O]=x;O&&O.target===p&&w&&(w.unobserve(n),cancelAnimationFrame(S),S=requestAnimationFrame(()=>{var R;(R=w)==null||R.observe(n)})),s()}),p&&!g&&w.observe(p),w.observe(n));let z,_=g?cs(a):null;g&&b();function b(){const x=cs(a);_&&!D4(_,x)&&s(),_=x,z=requestAnimationFrame(b)}return s(),()=>{var x;m.forEach(O=>{l&&O.removeEventListener("scroll",s),c&&O.removeEventListener("resize",s)}),u==null||u(),(x=w)==null||x.disconnect(),w=null,g&&cancelAnimationFrame(z)}}const pS=Lz,gS=Bz,vS=Rz,bS=Iz,yS=$z,Kv=Hz,_S=Uz,xS=(a,n,s)=>{const i=new Map,l={platform:hS,...s},c={...l.platform,_c:i};return Oz(a,n,{...l,platform:c})};var wS=typeof document<"u",zS=function(){},md=wS?y.useLayoutEffect:zS;function kd(a,n){if(a===n)return!0;if(typeof a!=typeof n)return!1;if(typeof a=="function"&&a.toString()===n.toString())return!0;let s,i,l;if(a&&n&&typeof a=="object"){if(Array.isArray(a)){if(s=a.length,s!==n.length)return!1;for(i=s;i--!==0;)if(!kd(a[i],n[i]))return!1;return!0}if(l=Object.keys(a),s=l.length,s!==Object.keys(n).length)return!1;for(i=s;i--!==0;)if(!{}.hasOwnProperty.call(n,l[i]))return!1;for(i=s;i--!==0;){const c=l[i];if(!(c==="_owner"&&a.$$typeof)&&!kd(a[c],n[c]))return!1}return!0}return a!==a&&n!==n}function O4(a){return typeof window>"u"?1:(a.ownerDocument.defaultView||window).devicePixelRatio||1}function Wv(a,n){const s=O4(a);return Math.round(n*s)/s}function Cf(a){const n=y.useRef(a);return md(()=>{n.current=a}),n}function SS(a){a===void 0&&(a={});const{placement:n="bottom",strategy:s="absolute",middleware:i=[],platform:l,elements:{reference:c,floating:d}={},transform:h=!0,whileElementsMounted:g,open:p}=a,[m,u]=y.useState({x:0,y:0,strategy:s,placement:n,middlewareData:{},isPositioned:!1}),[S,w]=y.useState(i);kd(S,i)||w(i);const[z,_]=y.useState(null),[b,x]=y.useState(null),O=y.useCallback(P=>{P!==I.current&&(I.current=P,_(P))},[]),R=y.useCallback(P=>{P!==H.current&&(H.current=P,x(P))},[]),C=c||z,A=d||b,I=y.useRef(null),H=y.useRef(null),$=y.useRef(m),Z=g!=null,he=Cf(g),xe=Cf(l),V=Cf(p),T=y.useCallback(()=>{if(!I.current||!H.current)return;const P={placement:n,strategy:s,middleware:S};xe.current&&(P.platform=xe.current),xS(I.current,H.current,P).then(ge=>{const re={...ge,isPositioned:V.current!==!1};W.current&&!kd($.current,re)&&($.current=re,Oo.flushSync(()=>{u(re)}))})},[S,n,s,xe,V]);md(()=>{p===!1&&$.current.isPositioned&&($.current.isPositioned=!1,u(P=>({...P,isPositioned:!1})))},[p]);const W=y.useRef(!1);md(()=>(W.current=!0,()=>{W.current=!1}),[]),md(()=>{if(C&&(I.current=C),A&&(H.current=A),C&&A){if(he.current)return he.current(C,A,T);T()}},[C,A,T,he,Z]);const ze=y.useMemo(()=>({reference:I,floating:H,setReference:O,setFloating:R}),[O,R]),k=y.useMemo(()=>({reference:C,floating:A}),[C,A]),D=y.useMemo(()=>{const P={position:s,left:0,top:0};if(!k.floating)return P;const ge=Wv(k.floating,m.x),re=Wv(k.floating,m.y);return h?{...P,transform:"translate("+ge+"px, "+re+"px)",...O4(k.floating)>=1.5&&{willChange:"transform"}}:{position:s,left:ge,top:re}},[s,h,k.floating,m.x,m.y]);return y.useMemo(()=>({...m,update:T,refs:ze,elements:k,floatingStyles:D}),[m,T,ze,k,D])}const MS=a=>{function n(s){return{}.hasOwnProperty.call(s,"current")}return{name:"arrow",options:a,fn(s){const{element:i,padding:l}=typeof a=="function"?a(s):a;return i&&n(i)?i.current!=null?Kv({element:i.current,padding:l}).fn(s):{}:i?Kv({element:i,padding:l}).fn(s):{}}}},ES=(a,n)=>({...pS(a),options:[a,n]}),TS=(a,n)=>({...gS(a),options:[a,n]}),CS=(a,n)=>({..._S(a),options:[a,n]}),AS=(a,n)=>({...vS(a),options:[a,n]}),kS=(a,n)=>({...bS(a),options:[a,n]}),jS=(a,n)=>({...yS(a),options:[a,n]}),NS=(a,n)=>({...MS(a),options:[a,n]});var DS="Arrow",H4=y.forwardRef((a,n)=>{const{children:s,width:i=10,height:l=5,...c}=a;return M.jsx(st.svg,{...c,ref:n,width:i,height:l,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:a.asChild?s:M.jsx("polygon",{points:"0,0 30,0 15,10"})})});H4.displayName=DS;var OS=H4;function Pm(a){const[n,s]=y.useState(void 0);return Da(()=>{if(a){s({width:a.offsetWidth,height:a.offsetHeight});const i=new ResizeObserver(l=>{if(!Array.isArray(l)||!l.length)return;const c=l[0];let d,h;if("borderBoxSize"in c){const g=c.borderBoxSize,p=Array.isArray(g)?g[0]:g;d=p.inlineSize,h=p.blockSize}else d=a.offsetWidth,h=a.offsetHeight;s({width:d,height:h})});return i.observe(a,{box:"border-box"}),()=>i.unobserve(a)}else s(void 0)},[a]),n}var Zm="Popper",[R4,$4]=Wi(Zm),[HS,V4]=R4(Zm),L4=a=>{const{__scopePopper:n,children:s}=a,[i,l]=y.useState(null);return M.jsx(HS,{scope:n,anchor:i,onAnchorChange:l,children:s})};L4.displayName=Zm;var B4="PopperAnchor",U4=y.forwardRef((a,n)=>{const{__scopePopper:s,virtualRef:i,...l}=a,c=V4(B4,s),d=y.useRef(null),h=zt(n,d),g=y.useRef(null);return y.useEffect(()=>{const p=g.current;g.current=(i==null?void 0:i.current)||d.current,p!==g.current&&c.onAnchorChange(g.current)}),i?null:M.jsx(st.div,{...l,ref:h})});U4.displayName=B4;var qm="PopperContent",[RS,$S]=R4(qm),I4=y.forwardRef((a,n)=>{var K,J,le,Ee,$e,ue;const{__scopePopper:s,side:i="bottom",sideOffset:l=0,align:c="center",alignOffset:d=0,arrowPadding:h=0,avoidCollisions:g=!0,collisionBoundary:p=[],collisionPadding:m=0,sticky:u="partial",hideWhenDetached:S=!1,updatePositionStrategy:w="optimized",onPlaced:z,..._}=a,b=V4(qm,s),[x,O]=y.useState(null),R=zt(n,ie=>O(ie)),[C,A]=y.useState(null),I=Pm(C),H=(I==null?void 0:I.width)??0,$=(I==null?void 0:I.height)??0,Z=i+(c!=="center"?"-"+c:""),he=typeof m=="number"?m:{top:0,right:0,bottom:0,left:0,...m},xe=Array.isArray(p)?p:[p],V=xe.length>0,T={padding:he,boundary:xe.filter(LS),altBoundary:V},{refs:W,floatingStyles:ze,placement:k,isPositioned:D,middlewareData:P}=SS({strategy:"fixed",placement:Z,whileElementsMounted:(...ie)=>mS(...ie,{animationFrame:w==="always"}),elements:{reference:b.anchor},middleware:[ES({mainAxis:l+$,alignmentAxis:d}),g&&TS({mainAxis:!0,crossAxis:!1,limiter:u==="partial"?CS():void 0,...T}),g&&AS({...T}),kS({...T,apply:({elements:ie,rects:Me,availableWidth:Ke,availableHeight:Ge})=>{const{width:Fe,height:ke}=Me.reference,Ce=ie.floating.style;Ce.setProperty("--radix-popper-available-width",`${Ke}px`),Ce.setProperty("--radix-popper-available-height",`${Ge}px`),Ce.setProperty("--radix-popper-anchor-width",`${Fe}px`),Ce.setProperty("--radix-popper-anchor-height",`${ke}px`)}}),C&&NS({element:C,padding:h}),BS({arrowWidth:H,arrowHeight:$}),S&&jS({strategy:"referenceHidden",...T})]}),[ge,re]=q4(k),j=Ya(z);Da(()=>{D&&(j==null||j())},[D,j]);const G=(K=P.arrow)==null?void 0:K.x,ee=(J=P.arrow)==null?void 0:J.y,ae=((le=P.arrow)==null?void 0:le.centerOffset)!==0,[X,se]=y.useState();return Da(()=>{x&&se(window.getComputedStyle(x).zIndex)},[x]),M.jsx("div",{ref:W.setFloating,"data-radix-popper-content-wrapper":"",style:{...ze,transform:D?ze.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:X,"--radix-popper-transform-origin":[(Ee=P.transformOrigin)==null?void 0:Ee.x,($e=P.transformOrigin)==null?void 0:$e.y].join(" "),...((ue=P.hide)==null?void 0:ue.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:a.dir,children:M.jsx(RS,{scope:s,placedSide:ge,onArrowChange:A,arrowX:G,arrowY:ee,shouldHideArrow:ae,children:M.jsx(st.div,{"data-side":ge,"data-align":re,..._,ref:R,style:{..._.style,animation:D?void 0:"none"}})})})});I4.displayName=qm;var P4="PopperArrow",VS={top:"bottom",right:"left",bottom:"top",left:"right"},Z4=y.forwardRef(function(n,s){const{__scopePopper:i,...l}=n,c=$S(P4,i),d=VS[c.placedSide];return M.jsx("span",{ref:c.onArrowChange,style:{position:"absolute",left:c.arrowX,top:c.arrowY,[d]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[c.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[c.placedSide],visibility:c.shouldHideArrow?"hidden":void 0},children:M.jsx(OS,{...l,ref:s,style:{...l.style,display:"block"}})})});Z4.displayName=P4;function LS(a){return a!==null}var BS=a=>({name:"transformOrigin",options:a,fn(n){var b,x,O;const{placement:s,rects:i,middlewareData:l}=n,d=((b=l.arrow)==null?void 0:b.centerOffset)!==0,h=d?0:a.arrowWidth,g=d?0:a.arrowHeight,[p,m]=q4(s),u={start:"0%",center:"50%",end:"100%"}[m],S=(((x=l.arrow)==null?void 0:x.x)??0)+h/2,w=(((O=l.arrow)==null?void 0:O.y)??0)+g/2;let z="",_="";return p==="bottom"?(z=d?u:`${S}px`,_=`${-g}px`):p==="top"?(z=d?u:`${S}px`,_=`${i.floating.height+g}px`):p==="right"?(z=`${-g}px`,_=d?u:`${w}px`):p==="left"&&(z=`${i.floating.width+g}px`,_=d?u:`${w}px`),{data:{x:z,y:_}}}});function q4(a){const[n,s="center"]=a.split("-");return[n,s]}var US=L4,IS=U4,PS=I4,ZS=Z4,qS="Portal",Ym=y.forwardRef((a,n)=>{var h;const{container:s,...i}=a,[l,c]=y.useState(!1);Da(()=>c(!0),[]);const d=s||l&&((h=globalThis==null?void 0:globalThis.document)==null?void 0:h.body);return d?$3.createPortal(M.jsx(st.div,{...i,ref:n}),d):null});Ym.displayName=qS;function YS(a){const n=FS(a),s=y.forwardRef((i,l)=>{const{children:c,...d}=i,h=y.Children.toArray(c),g=h.find(XS);if(g){const p=g.props.children,m=h.map(u=>u===g?y.Children.count(p)>1?y.Children.only(null):y.isValidElement(p)?p.props.children:null:u);return M.jsx(n,{...d,ref:l,children:y.isValidElement(p)?y.cloneElement(p,void 0,m):null})}return M.jsx(n,{...d,ref:l,children:c})});return s.displayName=`${a}.Slot`,s}function FS(a){const n=y.forwardRef((s,i)=>{const{children:l,...c}=s;if(y.isValidElement(l)){const d=KS(l),h=QS(c,l.props);return l.type!==y.Fragment&&(h.ref=i?gl(i,d):d),y.cloneElement(l,h)}return y.Children.count(l)>1?y.Children.only(null):null});return n.displayName=`${a}.SlotClone`,n}var GS=Symbol("radix.slottable");function XS(a){return y.isValidElement(a)&&typeof a.type=="function"&&"__radixId"in a.type&&a.type.__radixId===GS}function QS(a,n){const s={...n};for(const i in n){const l=a[i],c=n[i];/^on[A-Z]/.test(i)?l&&c?s[i]=(...h)=>{const g=c(...h);return l(...h),g}:l&&(s[i]=l):i==="style"?s[i]={...l,...c}:i==="className"&&(s[i]=[l,c].filter(Boolean).join(" "))}return{...a,...s}}function KS(a){var i,l;let n=(i=Object.getOwnPropertyDescriptor(a.props,"ref"))==null?void 0:i.get,s=n&&"isReactWarning"in n&&n.isReactWarning;return s?a.ref:(n=(l=Object.getOwnPropertyDescriptor(a,"ref"))==null?void 0:l.get,s=n&&"isReactWarning"in n&&n.isReactWarning,s?a.props.ref:a.props.ref||a.ref)}function Fm(a){const n=y.useRef({value:a,previous:a});return y.useMemo(()=>(n.current.value!==a&&(n.current.previous=n.current.value,n.current.value=a),n.current.previous),[a])}var Y4=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),WS="VisuallyHidden",JS=y.forwardRef((a,n)=>M.jsx(st.span,{...a,ref:n,style:{...Y4,...a.style}}));JS.displayName=WS;var eM=function(a){if(typeof document>"u")return null;var n=Array.isArray(a)?a[0]:a;return n.ownerDocument.body},Ws=new WeakMap,rd=new WeakMap,sd={},Af=0,F4=function(a){return a&&(a.host||F4(a.parentNode))},tM=function(a,n){return n.map(function(s){if(a.contains(s))return s;var i=F4(s);return i&&a.contains(i)?i:(console.error("aria-hidden",s,"in not contained inside",a,". Doing nothing"),null)}).filter(function(s){return!!s})},aM=function(a,n,s,i){var l=tM(n,Array.isArray(a)?a:[a]);sd[s]||(sd[s]=new WeakMap);var c=sd[s],d=[],h=new Set,g=new Set(l),p=function(u){!u||h.has(u)||(h.add(u),p(u.parentNode))};l.forEach(p);var m=function(u){!u||g.has(u)||Array.prototype.forEach.call(u.children,function(S){if(h.has(S))m(S);else try{var w=S.getAttribute(i),z=w!==null&&w!=="false",_=(Ws.get(S)||0)+1,b=(c.get(S)||0)+1;Ws.set(S,_),c.set(S,b),d.push(S),_===1&&z&&rd.set(S,!0),b===1&&S.setAttribute(s,"true"),z||S.setAttribute(i,"true")}catch(x){console.error("aria-hidden: cannot operate on ",S,x)}})};return m(n),h.clear(),Af++,function(){d.forEach(function(u){var S=Ws.get(u)-1,w=c.get(u)-1;Ws.set(u,S),c.set(u,w),S||(rd.has(u)||u.removeAttribute(i),rd.delete(u)),w||u.removeAttribute(s)}),Af--,Af||(Ws=new WeakMap,Ws=new WeakMap,rd=new WeakMap,sd={})}},G4=function(a,n,s){s===void 0&&(s="data-aria-hidden");var i=Array.from(Array.isArray(a)?a:[a]),l=eM(a);return l?(i.push.apply(i,Array.from(l.querySelectorAll("[aria-live], script"))),aM(i,l,s,"aria-hidden")):function(){return null}},dn=function(){return dn=Object.assign||function(n){for(var s,i=1,l=arguments.length;i<l;i++){s=arguments[i];for(var c in s)Object.prototype.hasOwnProperty.call(s,c)&&(n[c]=s[c])}return n},dn.apply(this,arguments)};function X4(a,n){var s={};for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&n.indexOf(i)<0&&(s[i]=a[i]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,i=Object.getOwnPropertySymbols(a);l<i.length;l++)n.indexOf(i[l])<0&&Object.prototype.propertyIsEnumerable.call(a,i[l])&&(s[i[l]]=a[i[l]]);return s}function iM(a,n,s){if(s||arguments.length===2)for(var i=0,l=n.length,c;i<l;i++)(c||!(i in n))&&(c||(c=Array.prototype.slice.call(n,0,i)),c[i]=n[i]);return a.concat(c||Array.prototype.slice.call(n))}var pd="right-scroll-bar-position",gd="width-before-scroll-bar",nM="with-scroll-bars-hidden",rM="--removed-body-scroll-bar-size";function kf(a,n){return typeof a=="function"?a(n):a&&(a.current=n),a}function sM(a,n){var s=y.useState(function(){return{value:a,callback:n,facade:{get current(){return s.value},set current(i){var l=s.value;l!==i&&(s.value=i,s.callback(i,l))}}}})[0];return s.callback=n,s.facade}var lM=typeof window<"u"?y.useLayoutEffect:y.useEffect,Jv=new WeakMap;function oM(a,n){var s=sM(null,function(i){return a.forEach(function(l){return kf(l,i)})});return lM(function(){var i=Jv.get(s);if(i){var l=new Set(i),c=new Set(a),d=s.current;l.forEach(function(h){c.has(h)||kf(h,null)}),c.forEach(function(h){l.has(h)||kf(h,d)})}Jv.set(s,a)},[a]),s}function cM(a){return a}function dM(a,n){n===void 0&&(n=cM);var s=[],i=!1,l={read:function(){if(i)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return s.length?s[s.length-1]:a},useMedium:function(c){var d=n(c,i);return s.push(d),function(){s=s.filter(function(h){return h!==d})}},assignSyncMedium:function(c){for(i=!0;s.length;){var d=s;s=[],d.forEach(c)}s={push:function(h){return c(h)},filter:function(){return s}}},assignMedium:function(c){i=!0;var d=[];if(s.length){var h=s;s=[],h.forEach(c),d=s}var g=function(){var m=d;d=[],m.forEach(c)},p=function(){return Promise.resolve().then(g)};p(),s={push:function(m){d.push(m),p()},filter:function(m){return d=d.filter(m),s}}}};return l}function uM(a){a===void 0&&(a={});var n=dM(null);return n.options=dn({async:!0,ssr:!1},a),n}var Q4=function(a){var n=a.sideCar,s=X4(a,["sideCar"]);if(!n)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var i=n.read();if(!i)throw new Error("Sidecar medium not found");return y.createElement(i,dn({},s))};Q4.isSideCarExport=!0;function hM(a,n){return a.useMedium(n),Q4}var K4=uM(),jf=function(){},Gd=y.forwardRef(function(a,n){var s=y.useRef(null),i=y.useState({onScrollCapture:jf,onWheelCapture:jf,onTouchMoveCapture:jf}),l=i[0],c=i[1],d=a.forwardProps,h=a.children,g=a.className,p=a.removeScrollBar,m=a.enabled,u=a.shards,S=a.sideCar,w=a.noRelative,z=a.noIsolation,_=a.inert,b=a.allowPinchZoom,x=a.as,O=x===void 0?"div":x,R=a.gapMode,C=X4(a,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),A=S,I=oM([s,n]),H=dn(dn({},C),l);return y.createElement(y.Fragment,null,m&&y.createElement(A,{sideCar:K4,removeScrollBar:p,shards:u,noRelative:w,noIsolation:z,inert:_,setCallbacks:c,allowPinchZoom:!!b,lockRef:s,gapMode:R}),d?y.cloneElement(y.Children.only(h),dn(dn({},H),{ref:I})):y.createElement(O,dn({},H,{className:g,ref:I}),h))});Gd.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};Gd.classNames={fullWidth:gd,zeroRight:pd};var fM=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function mM(){if(!document)return null;var a=document.createElement("style");a.type="text/css";var n=fM();return n&&a.setAttribute("nonce",n),a}function pM(a,n){a.styleSheet?a.styleSheet.cssText=n:a.appendChild(document.createTextNode(n))}function gM(a){var n=document.head||document.getElementsByTagName("head")[0];n.appendChild(a)}var vM=function(){var a=0,n=null;return{add:function(s){a==0&&(n=mM())&&(pM(n,s),gM(n)),a++},remove:function(){a--,!a&&n&&(n.parentNode&&n.parentNode.removeChild(n),n=null)}}},bM=function(){var a=vM();return function(n,s){y.useEffect(function(){return a.add(n),function(){a.remove()}},[n&&s])}},W4=function(){var a=bM(),n=function(s){var i=s.styles,l=s.dynamic;return a(i,l),null};return n},yM={left:0,top:0,right:0,gap:0},Nf=function(a){return parseInt(a||"",10)||0},_M=function(a){var n=window.getComputedStyle(document.body),s=n[a==="padding"?"paddingLeft":"marginLeft"],i=n[a==="padding"?"paddingTop":"marginTop"],l=n[a==="padding"?"paddingRight":"marginRight"];return[Nf(s),Nf(i),Nf(l)]},xM=function(a){if(a===void 0&&(a="margin"),typeof window>"u")return yM;var n=_M(a),s=document.documentElement.clientWidth,i=window.innerWidth;return{left:n[0],top:n[1],right:n[2],gap:Math.max(0,i-s+n[2]-n[0])}},wM=W4(),ul="data-scroll-locked",zM=function(a,n,s,i){var l=a.left,c=a.top,d=a.right,h=a.gap;return s===void 0&&(s="margin"),`
  .`.concat(nM,` {
   overflow: hidden `).concat(i,`;
   padding-right: `).concat(h,"px ").concat(i,`;
  }
  body[`).concat(ul,`] {
    overflow: hidden `).concat(i,`;
    overscroll-behavior: contain;
    `).concat([n&&"position: relative ".concat(i,";"),s==="margin"&&`
    padding-left: `.concat(l,`px;
    padding-top: `).concat(c,`px;
    padding-right: `).concat(d,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(h,"px ").concat(i,`;
    `),s==="padding"&&"padding-right: ".concat(h,"px ").concat(i,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(pd,` {
    right: `).concat(h,"px ").concat(i,`;
  }
  
  .`).concat(gd,` {
    margin-right: `).concat(h,"px ").concat(i,`;
  }
  
  .`).concat(pd," .").concat(pd,` {
    right: 0 `).concat(i,`;
  }
  
  .`).concat(gd," .").concat(gd,` {
    margin-right: 0 `).concat(i,`;
  }
  
  body[`).concat(ul,`] {
    `).concat(rM,": ").concat(h,`px;
  }
`)},e3=function(){var a=parseInt(document.body.getAttribute(ul)||"0",10);return isFinite(a)?a:0},SM=function(){y.useEffect(function(){return document.body.setAttribute(ul,(e3()+1).toString()),function(){var a=e3()-1;a<=0?document.body.removeAttribute(ul):document.body.setAttribute(ul,a.toString())}},[])},MM=function(a){var n=a.noRelative,s=a.noImportant,i=a.gapMode,l=i===void 0?"margin":i;SM();var c=y.useMemo(function(){return xM(l)},[l]);return y.createElement(wM,{styles:zM(c,!n,l,s?"":"!important")})},lm=!1;if(typeof window<"u")try{var ld=Object.defineProperty({},"passive",{get:function(){return lm=!0,!0}});window.addEventListener("test",ld,ld),window.removeEventListener("test",ld,ld)}catch{lm=!1}var Js=lm?{passive:!1}:!1,EM=function(a){return a.tagName==="TEXTAREA"},J4=function(a,n){if(!(a instanceof Element))return!1;var s=window.getComputedStyle(a);return s[n]!=="hidden"&&!(s.overflowY===s.overflowX&&!EM(a)&&s[n]==="visible")},TM=function(a){return J4(a,"overflowY")},CM=function(a){return J4(a,"overflowX")},t3=function(a,n){var s=n.ownerDocument,i=n;do{typeof ShadowRoot<"u"&&i instanceof ShadowRoot&&(i=i.host);var l=eb(a,i);if(l){var c=tb(a,i),d=c[1],h=c[2];if(d>h)return!0}i=i.parentNode}while(i&&i!==s.body);return!1},AM=function(a){var n=a.scrollTop,s=a.scrollHeight,i=a.clientHeight;return[n,s,i]},kM=function(a){var n=a.scrollLeft,s=a.scrollWidth,i=a.clientWidth;return[n,s,i]},eb=function(a,n){return a==="v"?TM(n):CM(n)},tb=function(a,n){return a==="v"?AM(n):kM(n)},jM=function(a,n){return a==="h"&&n==="rtl"?-1:1},NM=function(a,n,s,i,l){var c=jM(a,window.getComputedStyle(n).direction),d=c*i,h=s.target,g=n.contains(h),p=!1,m=d>0,u=0,S=0;do{if(!h)break;var w=tb(a,h),z=w[0],_=w[1],b=w[2],x=_-b-c*z;(z||x)&&eb(a,h)&&(u+=x,S+=z);var O=h.parentNode;h=O&&O.nodeType===Node.DOCUMENT_FRAGMENT_NODE?O.host:O}while(!g&&h!==document.body||g&&(n.contains(h)||n===h));return(m&&Math.abs(u)<1||!m&&Math.abs(S)<1)&&(p=!0),p},od=function(a){return"changedTouches"in a?[a.changedTouches[0].clientX,a.changedTouches[0].clientY]:[0,0]},a3=function(a){return[a.deltaX,a.deltaY]},i3=function(a){return a&&"current"in a?a.current:a},DM=function(a,n){return a[0]===n[0]&&a[1]===n[1]},OM=function(a){return`
  .block-interactivity-`.concat(a,` {pointer-events: none;}
  .allow-interactivity-`).concat(a,` {pointer-events: all;}
`)},HM=0,el=[];function RM(a){var n=y.useRef([]),s=y.useRef([0,0]),i=y.useRef(),l=y.useState(HM++)[0],c=y.useState(W4)[0],d=y.useRef(a);y.useEffect(function(){d.current=a},[a]),y.useEffect(function(){if(a.inert){document.body.classList.add("block-interactivity-".concat(l));var _=iM([a.lockRef.current],(a.shards||[]).map(i3),!0).filter(Boolean);return _.forEach(function(b){return b.classList.add("allow-interactivity-".concat(l))}),function(){document.body.classList.remove("block-interactivity-".concat(l)),_.forEach(function(b){return b.classList.remove("allow-interactivity-".concat(l))})}}},[a.inert,a.lockRef.current,a.shards]);var h=y.useCallback(function(_,b){if("touches"in _&&_.touches.length===2||_.type==="wheel"&&_.ctrlKey)return!d.current.allowPinchZoom;var x=od(_),O=s.current,R="deltaX"in _?_.deltaX:O[0]-x[0],C="deltaY"in _?_.deltaY:O[1]-x[1],A,I=_.target,H=Math.abs(R)>Math.abs(C)?"h":"v";if("touches"in _&&H==="h"&&I.type==="range")return!1;var $=t3(H,I);if(!$)return!0;if($?A=H:(A=H==="v"?"h":"v",$=t3(H,I)),!$)return!1;if(!i.current&&"changedTouches"in _&&(R||C)&&(i.current=A),!A)return!0;var Z=i.current||A;return NM(Z,b,_,Z==="h"?R:C)},[]),g=y.useCallback(function(_){var b=_;if(!(!el.length||el[el.length-1]!==c)){var x="deltaY"in b?a3(b):od(b),O=n.current.filter(function(A){return A.name===b.type&&(A.target===b.target||b.target===A.shadowParent)&&DM(A.delta,x)})[0];if(O&&O.should){b.cancelable&&b.preventDefault();return}if(!O){var R=(d.current.shards||[]).map(i3).filter(Boolean).filter(function(A){return A.contains(b.target)}),C=R.length>0?h(b,R[0]):!d.current.noIsolation;C&&b.cancelable&&b.preventDefault()}}},[]),p=y.useCallback(function(_,b,x,O){var R={name:_,delta:b,target:x,should:O,shadowParent:$M(x)};n.current.push(R),setTimeout(function(){n.current=n.current.filter(function(C){return C!==R})},1)},[]),m=y.useCallback(function(_){s.current=od(_),i.current=void 0},[]),u=y.useCallback(function(_){p(_.type,a3(_),_.target,h(_,a.lockRef.current))},[]),S=y.useCallback(function(_){p(_.type,od(_),_.target,h(_,a.lockRef.current))},[]);y.useEffect(function(){return el.push(c),a.setCallbacks({onScrollCapture:u,onWheelCapture:u,onTouchMoveCapture:S}),document.addEventListener("wheel",g,Js),document.addEventListener("touchmove",g,Js),document.addEventListener("touchstart",m,Js),function(){el=el.filter(function(_){return _!==c}),document.removeEventListener("wheel",g,Js),document.removeEventListener("touchmove",g,Js),document.removeEventListener("touchstart",m,Js)}},[]);var w=a.removeScrollBar,z=a.inert;return y.createElement(y.Fragment,null,z?y.createElement(c,{styles:OM(l)}):null,w?y.createElement(MM,{noRelative:a.noRelative,gapMode:a.gapMode}):null)}function $M(a){for(var n=null;a!==null;)a instanceof ShadowRoot&&(n=a.host,a=a.host),a=a.parentNode;return n}const VM=hM(K4,RM);var Gm=y.forwardRef(function(a,n){return y.createElement(Gd,dn({},a,{ref:n,sideCar:VM}))});Gm.classNames=Gd.classNames;var LM=[" ","Enter","ArrowUp","ArrowDown"],BM=[" ","Enter"],ds="Select",[Xd,Qd,UM]=_m(ds),[wl]=Wi(ds,[UM,$4]),Kd=$4(),[IM,Ar]=wl(ds),[PM,ZM]=wl(ds),ab=a=>{const{__scopeSelect:n,children:s,open:i,defaultOpen:l,onOpenChange:c,value:d,defaultValue:h,onValueChange:g,dir:p,name:m,autoComplete:u,disabled:S,required:w,form:z}=a,_=Kd(n),[b,x]=y.useState(null),[O,R]=y.useState(null),[C,A]=y.useState(!1),I=Ho(p),[H,$]=pn({prop:i,defaultProp:l??!1,onChange:c,caller:ds}),[Z,he]=pn({prop:d,defaultProp:h,onChange:g,caller:ds}),xe=y.useRef(null),V=b?z||!!b.closest("form"):!0,[T,W]=y.useState(new Set),ze=Array.from(T).map(k=>k.props.value).join(";");return M.jsx(US,{..._,children:M.jsxs(IM,{required:w,scope:n,trigger:b,onTriggerChange:x,valueNode:O,onValueNodeChange:R,valueNodeHasChildren:C,onValueNodeHasChildrenChange:A,contentId:fn(),value:Z,onValueChange:he,open:H,onOpenChange:$,dir:I,triggerPointerDownPosRef:xe,disabled:S,children:[M.jsx(Xd.Provider,{scope:n,children:M.jsx(PM,{scope:a.__scopeSelect,onNativeOptionAdd:y.useCallback(k=>{W(D=>new Set(D).add(k))},[]),onNativeOptionRemove:y.useCallback(k=>{W(D=>{const P=new Set(D);return P.delete(k),P})},[]),children:s})}),V?M.jsxs(Sb,{"aria-hidden":!0,required:w,tabIndex:-1,name:m,autoComplete:u,value:Z,onChange:k=>he(k.target.value),disabled:S,form:z,children:[Z===void 0?M.jsx("option",{value:""}):null,Array.from(T)]},ze):null]})})};ab.displayName=ds;var ib="SelectTrigger",nb=y.forwardRef((a,n)=>{const{__scopeSelect:s,disabled:i=!1,...l}=a,c=Kd(s),d=Ar(ib,s),h=d.disabled||i,g=zt(n,d.onTriggerChange),p=Qd(s),m=y.useRef("touch"),[u,S,w]=Eb(_=>{const b=p().filter(R=>!R.disabled),x=b.find(R=>R.value===d.value),O=Tb(b,_,x);O!==void 0&&d.onValueChange(O.value)}),z=_=>{h||(d.onOpenChange(!0),w()),_&&(d.triggerPointerDownPosRef.current={x:Math.round(_.pageX),y:Math.round(_.pageY)})};return M.jsx(IS,{asChild:!0,...c,children:M.jsx(st.button,{type:"button",role:"combobox","aria-controls":d.contentId,"aria-expanded":d.open,"aria-required":d.required,"aria-autocomplete":"none",dir:d.dir,"data-state":d.open?"open":"closed",disabled:h,"data-disabled":h?"":void 0,"data-placeholder":Mb(d.value)?"":void 0,...l,ref:g,onClick:ot(l.onClick,_=>{_.currentTarget.focus(),m.current!=="mouse"&&z(_)}),onPointerDown:ot(l.onPointerDown,_=>{m.current=_.pointerType;const b=_.target;b.hasPointerCapture(_.pointerId)&&b.releasePointerCapture(_.pointerId),_.button===0&&_.ctrlKey===!1&&_.pointerType==="mouse"&&(z(_),_.preventDefault())}),onKeyDown:ot(l.onKeyDown,_=>{const b=u.current!=="";!(_.ctrlKey||_.altKey||_.metaKey)&&_.key.length===1&&S(_.key),!(b&&_.key===" ")&&LM.includes(_.key)&&(z(),_.preventDefault())})})})});nb.displayName=ib;var rb="SelectValue",sb=y.forwardRef((a,n)=>{const{__scopeSelect:s,className:i,style:l,children:c,placeholder:d="",...h}=a,g=Ar(rb,s),{onValueNodeHasChildrenChange:p}=g,m=c!==void 0,u=zt(n,g.onValueNodeChange);return Da(()=>{p(m)},[p,m]),M.jsx(st.span,{...h,ref:u,style:{pointerEvents:"none"},children:Mb(g.value)?M.jsx(M.Fragment,{children:d}):c})});sb.displayName=rb;var qM="SelectIcon",lb=y.forwardRef((a,n)=>{const{__scopeSelect:s,children:i,...l}=a;return M.jsx(st.span,{"aria-hidden":!0,...l,ref:n,children:i||"▼"})});lb.displayName=qM;var YM="SelectPortal",ob=a=>M.jsx(Ym,{asChild:!0,...a});ob.displayName=YM;var us="SelectContent",cb=y.forwardRef((a,n)=>{const s=Ar(us,a.__scopeSelect),[i,l]=y.useState();if(Da(()=>{l(new DocumentFragment)},[]),!s.open){const c=i;return c?Oo.createPortal(M.jsx(db,{scope:a.__scopeSelect,children:M.jsx(Xd.Slot,{scope:a.__scopeSelect,children:M.jsx("div",{children:a.children})})}),c):null}return M.jsx(ub,{...a,ref:n})});cb.displayName=us;var Xi=10,[db,kr]=wl(us),FM="SelectContentImpl",GM=YS("SelectContent.RemoveScroll"),ub=y.forwardRef((a,n)=>{const{__scopeSelect:s,position:i="item-aligned",onCloseAutoFocus:l,onEscapeKeyDown:c,onPointerDownOutside:d,side:h,sideOffset:g,align:p,alignOffset:m,arrowPadding:u,collisionBoundary:S,collisionPadding:w,sticky:z,hideWhenDetached:_,avoidCollisions:b,...x}=a,O=Ar(us,s),[R,C]=y.useState(null),[A,I]=y.useState(null),H=zt(n,K=>C(K)),[$,Z]=y.useState(null),[he,xe]=y.useState(null),V=Qd(s),[T,W]=y.useState(!1),ze=y.useRef(!1);y.useEffect(()=>{if(R)return G4(R)},[R]),w4();const k=y.useCallback(K=>{const[J,...le]=V().map(ue=>ue.ref.current),[Ee]=le.slice(-1),$e=document.activeElement;for(const ue of K)if(ue===$e||(ue==null||ue.scrollIntoView({block:"nearest"}),ue===J&&A&&(A.scrollTop=0),ue===Ee&&A&&(A.scrollTop=A.scrollHeight),ue==null||ue.focus(),document.activeElement!==$e))return},[V,A]),D=y.useCallback(()=>k([$,R]),[k,$,R]);y.useEffect(()=>{T&&D()},[T,D]);const{onOpenChange:P,triggerPointerDownPosRef:ge}=O;y.useEffect(()=>{if(R){let K={x:0,y:0};const J=Ee=>{var $e,ue;K={x:Math.abs(Math.round(Ee.pageX)-((($e=ge.current)==null?void 0:$e.x)??0)),y:Math.abs(Math.round(Ee.pageY)-(((ue=ge.current)==null?void 0:ue.y)??0))}},le=Ee=>{K.x<=10&&K.y<=10?Ee.preventDefault():R.contains(Ee.target)||P(!1),document.removeEventListener("pointermove",J),ge.current=null};return ge.current!==null&&(document.addEventListener("pointermove",J),document.addEventListener("pointerup",le,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",J),document.removeEventListener("pointerup",le,{capture:!0})}}},[R,P,ge]),y.useEffect(()=>{const K=()=>P(!1);return window.addEventListener("blur",K),window.addEventListener("resize",K),()=>{window.removeEventListener("blur",K),window.removeEventListener("resize",K)}},[P]);const[re,j]=Eb(K=>{const J=V().filter($e=>!$e.disabled),le=J.find($e=>$e.ref.current===document.activeElement),Ee=Tb(J,K,le);Ee&&setTimeout(()=>Ee.ref.current.focus())}),G=y.useCallback((K,J,le)=>{const Ee=!ze.current&&!le;(O.value!==void 0&&O.value===J||Ee)&&(Z(K),Ee&&(ze.current=!0))},[O.value]),ee=y.useCallback(()=>R==null?void 0:R.focus(),[R]),ae=y.useCallback((K,J,le)=>{const Ee=!ze.current&&!le;(O.value!==void 0&&O.value===J||Ee)&&xe(K)},[O.value]),X=i==="popper"?om:hb,se=X===om?{side:h,sideOffset:g,align:p,alignOffset:m,arrowPadding:u,collisionBoundary:S,collisionPadding:w,sticky:z,hideWhenDetached:_,avoidCollisions:b}:{};return M.jsx(db,{scope:s,content:R,viewport:A,onViewportChange:I,itemRefCallback:G,selectedItem:$,onItemLeave:ee,itemTextRefCallback:ae,focusSelectedItem:D,selectedItemText:he,position:i,isPositioned:T,searchRef:re,children:M.jsx(Gm,{as:GM,allowPinchZoom:!0,children:M.jsx(Rm,{asChild:!0,trapped:O.open,onMountAutoFocus:K=>{K.preventDefault()},onUnmountAutoFocus:ot(l,K=>{var J;(J=O.trigger)==null||J.focus({preventScroll:!0}),K.preventDefault()}),children:M.jsx(Hm,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:c,onPointerDownOutside:d,onFocusOutside:K=>K.preventDefault(),onDismiss:()=>O.onOpenChange(!1),children:M.jsx(X,{role:"listbox",id:O.contentId,"data-state":O.open?"open":"closed",dir:O.dir,onContextMenu:K=>K.preventDefault(),...x,...se,onPlaced:()=>W(!0),ref:H,style:{display:"flex",flexDirection:"column",outline:"none",...x.style},onKeyDown:ot(x.onKeyDown,K=>{const J=K.ctrlKey||K.altKey||K.metaKey;if(K.key==="Tab"&&K.preventDefault(),!J&&K.key.length===1&&j(K.key),["ArrowUp","ArrowDown","Home","End"].includes(K.key)){let Ee=V().filter($e=>!$e.disabled).map($e=>$e.ref.current);if(["ArrowUp","End"].includes(K.key)&&(Ee=Ee.slice().reverse()),["ArrowUp","ArrowDown"].includes(K.key)){const $e=K.target,ue=Ee.indexOf($e);Ee=Ee.slice(ue+1)}setTimeout(()=>k(Ee)),K.preventDefault()}})})})})})})});ub.displayName=FM;var XM="SelectItemAlignedPosition",hb=y.forwardRef((a,n)=>{const{__scopeSelect:s,onPlaced:i,...l}=a,c=Ar(us,s),d=kr(us,s),[h,g]=y.useState(null),[p,m]=y.useState(null),u=zt(n,H=>m(H)),S=Qd(s),w=y.useRef(!1),z=y.useRef(!0),{viewport:_,selectedItem:b,selectedItemText:x,focusSelectedItem:O}=d,R=y.useCallback(()=>{if(c.trigger&&c.valueNode&&h&&p&&_&&b&&x){const H=c.trigger.getBoundingClientRect(),$=p.getBoundingClientRect(),Z=c.valueNode.getBoundingClientRect(),he=x.getBoundingClientRect();if(c.dir!=="rtl"){const $e=he.left-$.left,ue=Z.left-$e,ie=H.left-ue,Me=H.width+ie,Ke=Math.max(Me,$.width),Ge=window.innerWidth-Xi,Fe=Jf(ue,[Xi,Math.max(Xi,Ge-Ke)]);h.style.minWidth=Me+"px",h.style.left=Fe+"px"}else{const $e=$.right-he.right,ue=window.innerWidth-Z.right-$e,ie=window.innerWidth-H.right-ue,Me=H.width+ie,Ke=Math.max(Me,$.width),Ge=window.innerWidth-Xi,Fe=Jf(ue,[Xi,Math.max(Xi,Ge-Ke)]);h.style.minWidth=Me+"px",h.style.right=Fe+"px"}const xe=S(),V=window.innerHeight-Xi*2,T=_.scrollHeight,W=window.getComputedStyle(p),ze=parseInt(W.borderTopWidth,10),k=parseInt(W.paddingTop,10),D=parseInt(W.borderBottomWidth,10),P=parseInt(W.paddingBottom,10),ge=ze+k+T+P+D,re=Math.min(b.offsetHeight*5,ge),j=window.getComputedStyle(_),G=parseInt(j.paddingTop,10),ee=parseInt(j.paddingBottom,10),ae=H.top+H.height/2-Xi,X=V-ae,se=b.offsetHeight/2,K=b.offsetTop+se,J=ze+k+K,le=ge-J;if(J<=ae){const $e=xe.length>0&&b===xe[xe.length-1].ref.current;h.style.bottom="0px";const ue=p.clientHeight-_.offsetTop-_.offsetHeight,ie=Math.max(X,se+($e?ee:0)+ue+D),Me=J+ie;h.style.height=Me+"px"}else{const $e=xe.length>0&&b===xe[0].ref.current;h.style.top="0px";const ie=Math.max(ae,ze+_.offsetTop+($e?G:0)+se)+le;h.style.height=ie+"px",_.scrollTop=J-ae+_.offsetTop}h.style.margin=`${Xi}px 0`,h.style.minHeight=re+"px",h.style.maxHeight=V+"px",i==null||i(),requestAnimationFrame(()=>w.current=!0)}},[S,c.trigger,c.valueNode,h,p,_,b,x,c.dir,i]);Da(()=>R(),[R]);const[C,A]=y.useState();Da(()=>{p&&A(window.getComputedStyle(p).zIndex)},[p]);const I=y.useCallback(H=>{H&&z.current===!0&&(R(),O==null||O(),z.current=!1)},[R,O]);return M.jsx(KM,{scope:s,contentWrapper:h,shouldExpandOnScrollRef:w,onScrollButtonChange:I,children:M.jsx("div",{ref:g,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:C},children:M.jsx(st.div,{...l,ref:u,style:{boxSizing:"border-box",maxHeight:"100%",...l.style}})})})});hb.displayName=XM;var QM="SelectPopperPosition",om=y.forwardRef((a,n)=>{const{__scopeSelect:s,align:i="start",collisionPadding:l=Xi,...c}=a,d=Kd(s);return M.jsx(PS,{...d,...c,ref:n,align:i,collisionPadding:l,style:{boxSizing:"border-box",...c.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})});om.displayName=QM;var[KM,Xm]=wl(us,{}),cm="SelectViewport",fb=y.forwardRef((a,n)=>{const{__scopeSelect:s,nonce:i,...l}=a,c=kr(cm,s),d=Xm(cm,s),h=zt(n,c.onViewportChange),g=y.useRef(0);return M.jsxs(M.Fragment,{children:[M.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"},nonce:i}),M.jsx(Xd.Slot,{scope:s,children:M.jsx(st.div,{"data-radix-select-viewport":"",role:"presentation",...l,ref:h,style:{position:"relative",flex:1,overflow:"hidden auto",...l.style},onScroll:ot(l.onScroll,p=>{const m=p.currentTarget,{contentWrapper:u,shouldExpandOnScrollRef:S}=d;if(S!=null&&S.current&&u){const w=Math.abs(g.current-m.scrollTop);if(w>0){const z=window.innerHeight-Xi*2,_=parseFloat(u.style.minHeight),b=parseFloat(u.style.height),x=Math.max(_,b);if(x<z){const O=x+w,R=Math.min(z,O),C=O-R;u.style.height=R+"px",u.style.bottom==="0px"&&(m.scrollTop=C>0?C:0,u.style.justifyContent="flex-end")}}}g.current=m.scrollTop})})})]})});fb.displayName=cm;var mb="SelectGroup",[WM,JM]=wl(mb),eE=y.forwardRef((a,n)=>{const{__scopeSelect:s,...i}=a,l=fn();return M.jsx(WM,{scope:s,id:l,children:M.jsx(st.div,{role:"group","aria-labelledby":l,...i,ref:n})})});eE.displayName=mb;var pb="SelectLabel",tE=y.forwardRef((a,n)=>{const{__scopeSelect:s,...i}=a,l=JM(pb,s);return M.jsx(st.div,{id:l.id,...i,ref:n})});tE.displayName=pb;var jd="SelectItem",[aE,gb]=wl(jd),vb=y.forwardRef((a,n)=>{const{__scopeSelect:s,value:i,disabled:l=!1,textValue:c,...d}=a,h=Ar(jd,s),g=kr(jd,s),p=h.value===i,[m,u]=y.useState(c??""),[S,w]=y.useState(!1),z=zt(n,O=>{var R;return(R=g.itemRefCallback)==null?void 0:R.call(g,O,i,l)}),_=fn(),b=y.useRef("touch"),x=()=>{l||(h.onValueChange(i),h.onOpenChange(!1))};if(i==="")throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");return M.jsx(aE,{scope:s,value:i,disabled:l,textId:_,isSelected:p,onItemTextChange:y.useCallback(O=>{u(R=>R||((O==null?void 0:O.textContent)??"").trim())},[]),children:M.jsx(Xd.ItemSlot,{scope:s,value:i,disabled:l,textValue:m,children:M.jsx(st.div,{role:"option","aria-labelledby":_,"data-highlighted":S?"":void 0,"aria-selected":p&&S,"data-state":p?"checked":"unchecked","aria-disabled":l||void 0,"data-disabled":l?"":void 0,tabIndex:l?void 0:-1,...d,ref:z,onFocus:ot(d.onFocus,()=>w(!0)),onBlur:ot(d.onBlur,()=>w(!1)),onClick:ot(d.onClick,()=>{b.current!=="mouse"&&x()}),onPointerUp:ot(d.onPointerUp,()=>{b.current==="mouse"&&x()}),onPointerDown:ot(d.onPointerDown,O=>{b.current=O.pointerType}),onPointerMove:ot(d.onPointerMove,O=>{var R;b.current=O.pointerType,l?(R=g.onItemLeave)==null||R.call(g):b.current==="mouse"&&O.currentTarget.focus({preventScroll:!0})}),onPointerLeave:ot(d.onPointerLeave,O=>{var R;O.currentTarget===document.activeElement&&((R=g.onItemLeave)==null||R.call(g))}),onKeyDown:ot(d.onKeyDown,O=>{var C;((C=g.searchRef)==null?void 0:C.current)!==""&&O.key===" "||(BM.includes(O.key)&&x(),O.key===" "&&O.preventDefault())})})})})});vb.displayName=jd;var So="SelectItemText",bb=y.forwardRef((a,n)=>{const{__scopeSelect:s,className:i,style:l,...c}=a,d=Ar(So,s),h=kr(So,s),g=gb(So,s),p=ZM(So,s),[m,u]=y.useState(null),S=zt(n,x=>u(x),g.onItemTextChange,x=>{var O;return(O=h.itemTextRefCallback)==null?void 0:O.call(h,x,g.value,g.disabled)}),w=m==null?void 0:m.textContent,z=y.useMemo(()=>M.jsx("option",{value:g.value,disabled:g.disabled,children:w},g.value),[g.disabled,g.value,w]),{onNativeOptionAdd:_,onNativeOptionRemove:b}=p;return Da(()=>(_(z),()=>b(z)),[_,b,z]),M.jsxs(M.Fragment,{children:[M.jsx(st.span,{id:g.textId,...c,ref:S}),g.isSelected&&d.valueNode&&!d.valueNodeHasChildren?Oo.createPortal(c.children,d.valueNode):null]})});bb.displayName=So;var yb="SelectItemIndicator",_b=y.forwardRef((a,n)=>{const{__scopeSelect:s,...i}=a;return gb(yb,s).isSelected?M.jsx(st.span,{"aria-hidden":!0,...i,ref:n}):null});_b.displayName=yb;var dm="SelectScrollUpButton",xb=y.forwardRef((a,n)=>{const s=kr(dm,a.__scopeSelect),i=Xm(dm,a.__scopeSelect),[l,c]=y.useState(!1),d=zt(n,i.onScrollButtonChange);return Da(()=>{if(s.viewport&&s.isPositioned){let h=function(){const p=g.scrollTop>0;c(p)};const g=s.viewport;return h(),g.addEventListener("scroll",h),()=>g.removeEventListener("scroll",h)}},[s.viewport,s.isPositioned]),l?M.jsx(zb,{...a,ref:d,onAutoScroll:()=>{const{viewport:h,selectedItem:g}=s;h&&g&&(h.scrollTop=h.scrollTop-g.offsetHeight)}}):null});xb.displayName=dm;var um="SelectScrollDownButton",wb=y.forwardRef((a,n)=>{const s=kr(um,a.__scopeSelect),i=Xm(um,a.__scopeSelect),[l,c]=y.useState(!1),d=zt(n,i.onScrollButtonChange);return Da(()=>{if(s.viewport&&s.isPositioned){let h=function(){const p=g.scrollHeight-g.clientHeight,m=Math.ceil(g.scrollTop)<p;c(m)};const g=s.viewport;return h(),g.addEventListener("scroll",h),()=>g.removeEventListener("scroll",h)}},[s.viewport,s.isPositioned]),l?M.jsx(zb,{...a,ref:d,onAutoScroll:()=>{const{viewport:h,selectedItem:g}=s;h&&g&&(h.scrollTop=h.scrollTop+g.offsetHeight)}}):null});wb.displayName=um;var zb=y.forwardRef((a,n)=>{const{__scopeSelect:s,onAutoScroll:i,...l}=a,c=kr("SelectScrollButton",s),d=y.useRef(null),h=Qd(s),g=y.useCallback(()=>{d.current!==null&&(window.clearInterval(d.current),d.current=null)},[]);return y.useEffect(()=>()=>g(),[g]),Da(()=>{var m;const p=h().find(u=>u.ref.current===document.activeElement);(m=p==null?void 0:p.ref.current)==null||m.scrollIntoView({block:"nearest"})},[h]),M.jsx(st.div,{"aria-hidden":!0,...l,ref:n,style:{flexShrink:0,...l.style},onPointerDown:ot(l.onPointerDown,()=>{d.current===null&&(d.current=window.setInterval(i,50))}),onPointerMove:ot(l.onPointerMove,()=>{var p;(p=c.onItemLeave)==null||p.call(c),d.current===null&&(d.current=window.setInterval(i,50))}),onPointerLeave:ot(l.onPointerLeave,()=>{g()})})}),iE="SelectSeparator",nE=y.forwardRef((a,n)=>{const{__scopeSelect:s,...i}=a;return M.jsx(st.div,{"aria-hidden":!0,...i,ref:n})});nE.displayName=iE;var hm="SelectArrow",rE=y.forwardRef((a,n)=>{const{__scopeSelect:s,...i}=a,l=Kd(s),c=Ar(hm,s),d=kr(hm,s);return c.open&&d.position==="popper"?M.jsx(ZS,{...l,...i,ref:n}):null});rE.displayName=hm;var sE="SelectBubbleInput",Sb=y.forwardRef(({__scopeSelect:a,value:n,...s},i)=>{const l=y.useRef(null),c=zt(i,l),d=Fm(n);return y.useEffect(()=>{const h=l.current;if(!h)return;const g=window.HTMLSelectElement.prototype,m=Object.getOwnPropertyDescriptor(g,"value").set;if(d!==n&&m){const u=new Event("change",{bubbles:!0});m.call(h,n),h.dispatchEvent(u)}},[d,n]),M.jsx(st.select,{...s,style:{...Y4,...s.style},ref:c,defaultValue:n})});Sb.displayName=sE;function Mb(a){return a===""||a===void 0}function Eb(a){const n=Ya(a),s=y.useRef(""),i=y.useRef(0),l=y.useCallback(d=>{const h=s.current+d;n(h),(function g(p){s.current=p,window.clearTimeout(i.current),p!==""&&(i.current=window.setTimeout(()=>g(""),1e3))})(h)},[n]),c=y.useCallback(()=>{s.current="",window.clearTimeout(i.current)},[]);return y.useEffect(()=>()=>window.clearTimeout(i.current),[]),[s,l,c]}function Tb(a,n,s){const l=n.length>1&&Array.from(n).every(p=>p===n[0])?n[0]:n,c=s?a.indexOf(s):-1;let d=lE(a,Math.max(c,0));l.length===1&&(d=d.filter(p=>p!==s));const g=d.find(p=>p.textValue.toLowerCase().startsWith(l.toLowerCase()));return g!==s?g:void 0}function lE(a,n){return a.map((s,i)=>a[(n+i)%a.length])}var oE=ab,cE=nb,dE=sb,uE=lb,hE=ob,fE=cb,mE=fb,pE=vb,gE=bb,vE=_b,bE=xb,yE=wb;/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _E=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Cb=yl("check",_E);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xE=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],wE=yl("chevron-up",xE);function n3({...a}){return M.jsx(oE,{"data-slot":"select",...a})}function r3({...a}){return M.jsx(dE,{"data-slot":"select-value",...a})}function s3({className:a,size:n="default",children:s,...i}){return M.jsxs(cE,{"data-slot":"select-trigger","data-size":n,className:St("border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",a),...i,children:[s,M.jsx(uE,{asChild:!0,children:M.jsx(Om,{className:"size-4 opacity-50"})})]})}function l3({className:a,children:n,position:s="popper",...i}){return M.jsx(hE,{children:M.jsxs(fE,{"data-slot":"select-content",className:St("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",s==="popper"&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",a),position:s,...i,children:[M.jsx(zE,{}),M.jsx(mE,{className:St("p-1",s==="popper"&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"),children:n}),M.jsx(SE,{})]})})}function o3({className:a,children:n,...s}){return M.jsxs(pE,{"data-slot":"select-item",className:St("focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",a),...s,children:[M.jsx("span",{className:"absolute right-2 flex size-3.5 items-center justify-center",children:M.jsx(vE,{children:M.jsx(Cb,{className:"size-4"})})}),M.jsx(gE,{children:n})]})}function zE({className:a,...n}){return M.jsx(bE,{"data-slot":"select-scroll-up-button",className:St("flex cursor-default items-center justify-center py-1",a),...n,children:M.jsx(wE,{className:"size-4"})})}function SE({className:a,...n}){return M.jsx(yE,{"data-slot":"select-scroll-down-button",className:St("flex cursor-default items-center justify-center py-1",a),...n,children:M.jsx(Om,{className:"size-4"})})}var Wd="Checkbox",[ME]=Wi(Wd),[EE,Qm]=ME(Wd);function TE(a){const{__scopeCheckbox:n,checked:s,children:i,defaultChecked:l,disabled:c,form:d,name:h,onCheckedChange:g,required:p,value:m="on",internal_do_not_use_render:u}=a,[S,w]=pn({prop:s,defaultProp:l??!1,onChange:g,caller:Wd}),[z,_]=y.useState(null),[b,x]=y.useState(null),O=y.useRef(!1),R=z?!!d||!!z.closest("form"):!0,C={checked:S,disabled:c,setChecked:w,control:z,setControl:_,name:h,form:d,value:m,hasConsumerStoppedPropagationRef:O,required:p,defaultChecked:Sr(l)?!1:l,isFormControl:R,bubbleInput:b,setBubbleInput:x};return M.jsx(EE,{scope:n,...C,children:CE(u)?u(C):i})}var Ab="CheckboxTrigger",kb=y.forwardRef(({__scopeCheckbox:a,onKeyDown:n,onClick:s,...i},l)=>{const{control:c,value:d,disabled:h,checked:g,required:p,setControl:m,setChecked:u,hasConsumerStoppedPropagationRef:S,isFormControl:w,bubbleInput:z}=Qm(Ab,a),_=zt(l,m),b=y.useRef(g);return y.useEffect(()=>{const x=c==null?void 0:c.form;if(x){const O=()=>u(b.current);return x.addEventListener("reset",O),()=>x.removeEventListener("reset",O)}},[c,u]),M.jsx(st.button,{type:"button",role:"checkbox","aria-checked":Sr(g)?"mixed":g,"aria-required":p,"data-state":Rb(g),"data-disabled":h?"":void 0,disabled:h,value:d,...i,ref:_,onKeyDown:ot(n,x=>{x.key==="Enter"&&x.preventDefault()}),onClick:ot(s,x=>{u(O=>Sr(O)?!0:!O),z&&w&&(S.current=x.isPropagationStopped(),S.current||x.stopPropagation())})})});kb.displayName=Ab;var jb=y.forwardRef((a,n)=>{const{__scopeCheckbox:s,name:i,checked:l,defaultChecked:c,required:d,disabled:h,value:g,onCheckedChange:p,form:m,...u}=a;return M.jsx(TE,{__scopeCheckbox:s,checked:l,defaultChecked:c,disabled:h,required:d,onCheckedChange:p,name:i,form:m,value:g,internal_do_not_use_render:({isFormControl:S})=>M.jsxs(M.Fragment,{children:[M.jsx(kb,{...u,ref:n,__scopeCheckbox:s}),S&&M.jsx(Hb,{__scopeCheckbox:s})]})})});jb.displayName=Wd;var Nb="CheckboxIndicator",Db=y.forwardRef((a,n)=>{const{__scopeCheckbox:s,forceMount:i,...l}=a,c=Qm(Nb,s);return M.jsx(Ji,{present:i||Sr(c.checked)||c.checked===!0,children:M.jsx(st.span,{"data-state":Rb(c.checked),"data-disabled":c.disabled?"":void 0,...l,ref:n,style:{pointerEvents:"none",...a.style}})})});Db.displayName=Nb;var Ob="CheckboxBubbleInput",Hb=y.forwardRef(({__scopeCheckbox:a,...n},s)=>{const{control:i,hasConsumerStoppedPropagationRef:l,checked:c,defaultChecked:d,required:h,disabled:g,name:p,value:m,form:u,bubbleInput:S,setBubbleInput:w}=Qm(Ob,a),z=zt(s,w),_=Fm(c),b=Pm(i);y.useEffect(()=>{const O=S;if(!O)return;const R=window.HTMLInputElement.prototype,A=Object.getOwnPropertyDescriptor(R,"checked").set,I=!l.current;if(_!==c&&A){const H=new Event("click",{bubbles:I});O.indeterminate=Sr(c),A.call(O,Sr(c)?!1:c),O.dispatchEvent(H)}},[S,_,c,l]);const x=y.useRef(Sr(c)?!1:c);return M.jsx(st.input,{type:"checkbox","aria-hidden":!0,defaultChecked:d??x.current,required:h,disabled:g,name:p,value:m,form:u,...n,tabIndex:-1,ref:z,style:{...n.style,...b,position:"absolute",pointerEvents:"none",opacity:0,margin:0,transform:"translateX(-100%)"}})});Hb.displayName=Ob;function CE(a){return typeof a=="function"}function Sr(a){return a==="indeterminate"}function Rb(a){return Sr(a)?"indeterminate":a?"checked":"unchecked"}function Df({className:a,...n}){return M.jsx(jb,{"data-slot":"checkbox",className:St("peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",a),...n,children:M.jsx(Db,{"data-slot":"checkbox-indicator",className:"flex items-center justify-center text-current transition-none",children:M.jsx(Cb,{className:"size-3.5"})})})}function AE(a){const n=kE(a),s=y.forwardRef((i,l)=>{const{children:c,...d}=i,h=y.Children.toArray(c),g=h.find(NE);if(g){const p=g.props.children,m=h.map(u=>u===g?y.Children.count(p)>1?y.Children.only(null):y.isValidElement(p)?p.props.children:null:u);return M.jsx(n,{...d,ref:l,children:y.isValidElement(p)?y.cloneElement(p,void 0,m):null})}return M.jsx(n,{...d,ref:l,children:c})});return s.displayName=`${a}.Slot`,s}function kE(a){const n=y.forwardRef((s,i)=>{const{children:l,...c}=s;if(y.isValidElement(l)){const d=OE(l),h=DE(c,l.props);return l.type!==y.Fragment&&(h.ref=i?gl(i,d):d),y.cloneElement(l,h)}return y.Children.count(l)>1?y.Children.only(null):null});return n.displayName=`${a}.SlotClone`,n}var jE=Symbol("radix.slottable");function NE(a){return y.isValidElement(a)&&typeof a.type=="function"&&"__radixId"in a.type&&a.type.__radixId===jE}function DE(a,n){const s={...n};for(const i in n){const l=a[i],c=n[i];/^on[A-Z]/.test(i)?l&&c?s[i]=(...h)=>{const g=c(...h);return l(...h),g}:l&&(s[i]=l):i==="style"?s[i]={...l,...c}:i==="className"&&(s[i]=[l,c].filter(Boolean).join(" "))}return{...a,...s}}function OE(a){var i,l;let n=(i=Object.getOwnPropertyDescriptor(a.props,"ref"))==null?void 0:i.get,s=n&&"isReactWarning"in n&&n.isReactWarning;return s?a.ref:(n=(l=Object.getOwnPropertyDescriptor(a,"ref"))==null?void 0:l.get,s=n&&"isReactWarning"in n&&n.isReactWarning,s?a.props.ref:a.props.ref||a.ref)}var Jd="Dialog",[$b]=Wi(Jd),[HE,tn]=$b(Jd),Vb=a=>{const{__scopeDialog:n,children:s,open:i,defaultOpen:l,onOpenChange:c,modal:d=!0}=a,h=y.useRef(null),g=y.useRef(null),[p,m]=pn({prop:i,defaultProp:l??!1,onChange:c,caller:Jd});return M.jsx(HE,{scope:n,triggerRef:h,contentRef:g,contentId:fn(),titleId:fn(),descriptionId:fn(),open:p,onOpenChange:m,onOpenToggle:y.useCallback(()=>m(u=>!u),[m]),modal:d,children:s})};Vb.displayName=Jd;var Lb="DialogTrigger",RE=y.forwardRef((a,n)=>{const{__scopeDialog:s,...i}=a,l=tn(Lb,s),c=zt(n,l.triggerRef);return M.jsx(st.button,{type:"button","aria-haspopup":"dialog","aria-expanded":l.open,"aria-controls":l.contentId,"data-state":Jm(l.open),...i,ref:c,onClick:ot(a.onClick,l.onOpenToggle)})});RE.displayName=Lb;var Km="DialogPortal",[$E,Bb]=$b(Km,{forceMount:void 0}),Ub=a=>{const{__scopeDialog:n,forceMount:s,children:i,container:l}=a,c=tn(Km,n);return M.jsx($E,{scope:n,forceMount:s,children:y.Children.map(i,d=>M.jsx(Ji,{present:s||c.open,children:M.jsx(Ym,{asChild:!0,container:l,children:d})}))})};Ub.displayName=Km;var Nd="DialogOverlay",Ib=y.forwardRef((a,n)=>{const s=Bb(Nd,a.__scopeDialog),{forceMount:i=s.forceMount,...l}=a,c=tn(Nd,a.__scopeDialog);return c.modal?M.jsx(Ji,{present:i||c.open,children:M.jsx(LE,{...l,ref:n})}):null});Ib.displayName=Nd;var VE=AE("DialogOverlay.RemoveScroll"),LE=y.forwardRef((a,n)=>{const{__scopeDialog:s,...i}=a,l=tn(Nd,s);return M.jsx(Gm,{as:VE,allowPinchZoom:!0,shards:[l.contentRef],children:M.jsx(st.div,{"data-state":Jm(l.open),...i,ref:n,style:{pointerEvents:"auto",...i.style}})})}),hs="DialogContent",Pb=y.forwardRef((a,n)=>{const s=Bb(hs,a.__scopeDialog),{forceMount:i=s.forceMount,...l}=a,c=tn(hs,a.__scopeDialog);return M.jsx(Ji,{present:i||c.open,children:c.modal?M.jsx(BE,{...l,ref:n}):M.jsx(UE,{...l,ref:n})})});Pb.displayName=hs;var BE=y.forwardRef((a,n)=>{const s=tn(hs,a.__scopeDialog),i=y.useRef(null),l=zt(n,s.contentRef,i);return y.useEffect(()=>{const c=i.current;if(c)return G4(c)},[]),M.jsx(Zb,{...a,ref:l,trapFocus:s.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:ot(a.onCloseAutoFocus,c=>{var d;c.preventDefault(),(d=s.triggerRef.current)==null||d.focus()}),onPointerDownOutside:ot(a.onPointerDownOutside,c=>{const d=c.detail.originalEvent,h=d.button===0&&d.ctrlKey===!0;(d.button===2||h)&&c.preventDefault()}),onFocusOutside:ot(a.onFocusOutside,c=>c.preventDefault())})}),UE=y.forwardRef((a,n)=>{const s=tn(hs,a.__scopeDialog),i=y.useRef(!1),l=y.useRef(!1);return M.jsx(Zb,{...a,ref:n,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:c=>{var d,h;(d=a.onCloseAutoFocus)==null||d.call(a,c),c.defaultPrevented||(i.current||(h=s.triggerRef.current)==null||h.focus(),c.preventDefault()),i.current=!1,l.current=!1},onInteractOutside:c=>{var g,p;(g=a.onInteractOutside)==null||g.call(a,c),c.defaultPrevented||(i.current=!0,c.detail.originalEvent.type==="pointerdown"&&(l.current=!0));const d=c.target;((p=s.triggerRef.current)==null?void 0:p.contains(d))&&c.preventDefault(),c.detail.originalEvent.type==="focusin"&&l.current&&c.preventDefault()}})}),Zb=y.forwardRef((a,n)=>{const{__scopeDialog:s,trapFocus:i,onOpenAutoFocus:l,onCloseAutoFocus:c,...d}=a,h=tn(hs,s),g=y.useRef(null),p=zt(n,g);return w4(),M.jsxs(M.Fragment,{children:[M.jsx(Rm,{asChild:!0,loop:!0,trapped:i,onMountAutoFocus:l,onUnmountAutoFocus:c,children:M.jsx(Hm,{role:"dialog",id:h.contentId,"aria-describedby":h.descriptionId,"aria-labelledby":h.titleId,"data-state":Jm(h.open),...d,ref:p,onDismiss:()=>h.onOpenChange(!1)})}),M.jsxs(M.Fragment,{children:[M.jsx(PE,{titleId:h.titleId}),M.jsx(qE,{contentRef:g,descriptionId:h.descriptionId})]})]})}),Wm="DialogTitle",qb=y.forwardRef((a,n)=>{const{__scopeDialog:s,...i}=a,l=tn(Wm,s);return M.jsx(st.h2,{id:l.titleId,...i,ref:n})});qb.displayName=Wm;var Yb="DialogDescription",IE=y.forwardRef((a,n)=>{const{__scopeDialog:s,...i}=a,l=tn(Yb,s);return M.jsx(st.p,{id:l.descriptionId,...i,ref:n})});IE.displayName=Yb;var Fb="DialogClose",Gb=y.forwardRef((a,n)=>{const{__scopeDialog:s,...i}=a,l=tn(Fb,s);return M.jsx(st.button,{type:"button",...i,ref:n,onClick:ot(a.onClick,()=>l.onOpenChange(!1))})});Gb.displayName=Fb;function Jm(a){return a?"open":"closed"}var Xb="DialogTitleWarning",[qk,Qb]=t6(Xb,{contentName:hs,titleName:Wm,docsSlug:"dialog"}),PE=({titleId:a})=>{const n=Qb(Xb),s=`\`${n.contentName}\` requires a \`${n.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${n.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${n.docsSlug}`;return y.useEffect(()=>{a&&(document.getElementById(a)||console.error(s))},[s,a]),null},ZE="DialogDescriptionWarning",qE=({contentRef:a,descriptionId:n})=>{const i=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Qb(ZE).contentName}}.`;return y.useEffect(()=>{var c;const l=(c=a.current)==null?void 0:c.getAttribute("aria-describedby");n&&l&&(document.getElementById(n)||console.warn(i))},[i,a,n]),null},YE=Vb,FE=Ub,GE=Ib,XE=Pb,QE=qb,KE=Gb;/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WE=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],JE=yl("x",WE);function Kb({...a}){return M.jsx(YE,{"data-slot":"dialog",...a})}function e9({...a}){return M.jsx(FE,{"data-slot":"dialog-portal",...a})}function t9({className:a,...n}){return M.jsx(GE,{"data-slot":"dialog-overlay",className:St("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",a),...n})}function Wb({className:a,children:n,...s}){return M.jsxs(e9,{"data-slot":"dialog-portal",children:[M.jsx(t9,{}),M.jsxs(XE,{"data-slot":"dialog-content",className:St("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",a),...s,children:[n,M.jsxs(KE,{className:"ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",children:[M.jsx(JE,{}),M.jsx("span",{className:"sr-only",children:"Close"})]})]})]})}function Jb({className:a,...n}){return M.jsx("div",{"data-slot":"dialog-header",className:St("flex flex-col gap-2 text-center sm:text-left",a),...n})}function e2({className:a,...n}){return M.jsx("div",{"data-slot":"dialog-footer",className:St("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",a),...n})}function t2({className:a,...n}){return M.jsx(QE,{"data-slot":"dialog-title",className:St("text-lg leading-none font-semibold",a),...n})}var eu="Switch",[a9]=Wi(eu),[i9,n9]=a9(eu),a2=y.forwardRef((a,n)=>{const{__scopeSwitch:s,name:i,checked:l,defaultChecked:c,required:d,disabled:h,value:g="on",onCheckedChange:p,form:m,...u}=a,[S,w]=y.useState(null),z=zt(n,R=>w(R)),_=y.useRef(!1),b=S?m||!!S.closest("form"):!0,[x,O]=pn({prop:l,defaultProp:c??!1,onChange:p,caller:eu});return M.jsxs(i9,{scope:s,checked:x,disabled:h,children:[M.jsx(st.button,{type:"button",role:"switch","aria-checked":x,"aria-required":d,"data-state":s2(x),"data-disabled":h?"":void 0,disabled:h,value:g,...u,ref:z,onClick:ot(a.onClick,R=>{O(C=>!C),b&&(_.current=R.isPropagationStopped(),_.current||R.stopPropagation())})}),b&&M.jsx(r2,{control:S,bubbles:!_.current,name:i,value:g,checked:x,required:d,disabled:h,form:m,style:{transform:"translateX(-100%)"}})]})});a2.displayName=eu;var i2="SwitchThumb",n2=y.forwardRef((a,n)=>{const{__scopeSwitch:s,...i}=a,l=n9(i2,s);return M.jsx(st.span,{"data-state":s2(l.checked),"data-disabled":l.disabled?"":void 0,...i,ref:n})});n2.displayName=i2;var r9="SwitchBubbleInput",r2=y.forwardRef(({__scopeSwitch:a,control:n,checked:s,bubbles:i=!0,...l},c)=>{const d=y.useRef(null),h=zt(d,c),g=Fm(s),p=Pm(n);return y.useEffect(()=>{const m=d.current;if(!m)return;const u=window.HTMLInputElement.prototype,w=Object.getOwnPropertyDescriptor(u,"checked").set;if(g!==s&&w){const z=new Event("click",{bubbles:i});w.call(m,s),m.dispatchEvent(z)}},[g,s,i]),M.jsx("input",{type:"checkbox","aria-hidden":!0,defaultChecked:s,...l,tabIndex:-1,ref:h,style:{...l.style,...p,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})});r2.displayName=r9;function s2(a){return a?"checked":"unchecked"}var s9=a2,l9=n2;function l2({className:a,...n}){return M.jsx(s9,{"data-slot":"switch",className:St("peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",a),...n,children:M.jsx(l9,{"data-slot":"switch-thumb",className:St("bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0")})})}function o9({open:a,onOpenChange:n,onSave:s,initialEmbed:i}){const[l,c]=y.useState(""),[d,h]=y.useState(""),[g,p]=y.useState("#5865F2"),[m,u]=y.useState(""),[S,w]=y.useState(""),[z,_]=y.useState(""),[b,x]=y.useState(""),[O,R]=y.useState(""),[C,A]=y.useState([]),[I,H]=y.useState("");y.useEffect(()=>{i?(c(i.title||""),h(i.description||""),p(i.color||"#5865F2"),u(i.url||""),w(i.thumbnail||""),_(i.image||""),x(i.authorName||""),R(i.authorIcon||""),A(i.fields||[]),H(i.footerText||"")):(c(""),h(""),p("#5865F2"),u(""),w(""),_(""),x(""),R(""),A([]),H(""))},[i,a]);const $=()=>{A([...C,{name:"",value:"",inline:!1}])},Z=T=>{A(C.filter((W,ze)=>ze!==T))},he=(T,W)=>{A(C.map((ze,k)=>k===T?{...ze,...W}:ze))},xe=()=>{const T={title:l.trim()||void 0,description:d.trim()||void 0,color:g,url:m.trim()||void 0,thumbnail:S.trim()||void 0,image:z.trim()||void 0,authorName:b.trim()||void 0,authorIcon:O.trim()||void 0,fields:C.filter(W=>W.name.trim()&&W.value.trim()),footerText:I.trim()||void 0};s(T),n(!1)},V=()=>{s(void 0),n(!1)};return M.jsx(Kb,{open:a,onOpenChange:n,children:M.jsxs(Wb,{className:"sm:max-w-2xl max-h-[90vh]",children:[M.jsx(Jb,{children:M.jsx(t2,{children:"Configure Embed"})}),M.jsx(Y8,{className:"max-h-[60vh] pr-4",children:M.jsxs("div",{className:"space-y-4 py-4",children:[M.jsxs("div",{className:"space-y-2",children:[M.jsx(ja,{htmlFor:"embedTitle",children:"Title"}),M.jsx(Na,{id:"embedTitle",value:l,onChange:T=>c(T.target.value),placeholder:"Embed title"})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsx(ja,{htmlFor:"description",children:"Description"}),M.jsx(am,{id:"description",value:d,onChange:T=>h(T.target.value),placeholder:"Embed description",rows:3})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsx(ja,{htmlFor:"embedColor",children:"Color"}),M.jsxs("div",{className:"flex gap-2",children:[M.jsx(Na,{id:"embedColor",type:"color",value:g,onChange:T=>p(T.target.value),className:"w-20 h-10"}),M.jsx(Na,{value:g,onChange:T=>p(T.target.value),placeholder:"#5865F2"})]})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsx(ja,{htmlFor:"url",children:"URL"}),M.jsx(Na,{id:"url",value:m,onChange:T=>u(T.target.value),placeholder:"https://example.com"})]}),M.jsx(zo,{}),M.jsxs("div",{className:"space-y-2",children:[M.jsx(ja,{htmlFor:"authorName",children:"Author Name"}),M.jsx(Na,{id:"authorName",value:b,onChange:T=>x(T.target.value),placeholder:"Author name"})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsx(ja,{htmlFor:"authorIcon",children:"Author Icon URL"}),M.jsx(Na,{id:"authorIcon",value:O,onChange:T=>R(T.target.value),placeholder:"https://example.com/icon.png"})]}),M.jsx(zo,{}),M.jsxs("div",{className:"space-y-2",children:[M.jsx(ja,{htmlFor:"thumbnail",children:"Thumbnail URL"}),M.jsx(Na,{id:"thumbnail",value:S,onChange:T=>w(T.target.value),placeholder:"https://example.com/thumbnail.png"})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsx(ja,{htmlFor:"image",children:"Image URL"}),M.jsx(Na,{id:"image",value:z,onChange:T=>_(T.target.value),placeholder:"https://example.com/image.png"})]}),M.jsx(zo,{}),M.jsxs("div",{className:"space-y-2",children:[M.jsxs("div",{className:"flex items-center justify-between",children:[M.jsx(ja,{children:"Fields"}),M.jsxs(Jt,{type:"button",size:"sm",variant:"outline",onClick:$,children:[M.jsx(wm,{className:"mr-2"}),"Add Field"]})]}),C.map((T,W)=>M.jsxs("div",{className:"space-y-2 p-4 border rounded-lg",children:[M.jsxs("div",{className:"flex justify-between items-center",children:[M.jsxs(ja,{children:["Field ",W+1]}),M.jsx(Jt,{type:"button",size:"sm",variant:"ghost",onClick:()=>Z(W),children:M.jsx($d,{})})]}),M.jsx(Na,{value:T.name,onChange:ze=>he(W,{name:ze.target.value}),placeholder:"Field name"}),M.jsx(am,{value:T.value,onChange:ze=>he(W,{value:ze.target.value}),placeholder:"Field value",rows:2}),M.jsxs("div",{className:"flex items-center gap-2",children:[M.jsx(l2,{checked:T.inline,onCheckedChange:ze=>he(W,{inline:ze})}),M.jsx(ja,{children:"Inline"})]})]},W))]}),M.jsx(zo,{}),M.jsxs("div",{className:"space-y-2",children:[M.jsx(ja,{htmlFor:"footerText",children:"Footer Text"}),M.jsx(Na,{id:"footerText",value:I,onChange:T=>H(T.target.value),placeholder:"Footer text"})]})]})}),M.jsxs(e2,{className:"gap-2",children:[i&&M.jsx(Jt,{variant:"destructive",onClick:V,children:"Remove Embed"}),M.jsx(Jt,{variant:"outline",onClick:()=>n(!1),children:"Cancel"}),M.jsx(Jt,{onClick:xe,children:"Save Embed"})]})]})})}function c3({block:a,authors:n,onUpdate:s,onDelete:i,onOpenAuthorDialog:l,onDragStart:c,onDragEnd:d}){const[h,g]=y.useState(!1),[p,m]=y.useState(a.data.content||""),[u,S]=y.useState(a.data.imageUrl||""),w=y.useRef(),z=y.useRef();y.useEffect(()=>{m(a.data.content||"")},[a.id]),y.useEffect(()=>{S(a.data.imageUrl||"")},[a.id]);const _=(A,I)=>{s({...a,data:{...a.data,[A]:I}})},b=A=>{m(A),w.current&&clearTimeout(w.current),w.current=setTimeout(()=>{_("content",A)},300)},x=A=>{S(A),z.current&&clearTimeout(z.current),z.current=setTimeout(()=>{_("imageUrl",A)},500)},O=A=>{_("embed",A)},R=()=>{switch(a.type){case"author":return M.jsxs("div",{className:"space-y-2",children:[M.jsxs(n3,{value:a.data.authorId||"",onValueChange:A=>_("authorId",A),children:[M.jsx(s3,{children:M.jsx(r3,{placeholder:"Select an author"})}),M.jsx(l3,{children:n.map(A=>M.jsx(o3,{value:A.id,children:M.jsxs("div",{className:"flex items-center gap-2",children:[A.avatar&&M.jsx("img",{src:A.avatar,alt:A.username,className:"w-5 h-5 rounded-full"}),M.jsx("span",{style:{color:A.roleColor},children:A.username}),A.isBot&&M.jsx(N8,{variant:"secondary",className:"text-xs",children:"BOT"})]})},A.id))})]}),n.length===0&&M.jsx(Jt,{variant:"outline",size:"sm",onClick:l,className:"w-full",children:"Create Author"})]});case"message":return M.jsxs("div",{className:"space-y-3",children:[a.data.reply?M.jsxs("div",{className:"border rounded-lg p-3 space-y-2 bg-muted/50",children:[M.jsxs("div",{className:"flex items-center justify-between mb-2",children:[M.jsx(ja,{className:"text-xs font-semibold",children:"Reply To"}),M.jsx(Jt,{variant:"ghost",size:"icon",className:"h-6 w-6",onClick:()=>_("reply",void 0),children:M.jsx(m7,{size:14})})]}),M.jsxs(n3,{value:a.data.reply.authorId||"",onValueChange:A=>_("reply",{...a.data.reply,authorId:A}),children:[M.jsx(s3,{className:"h-8",children:M.jsx(r3,{placeholder:"Select author"})}),M.jsx(l3,{children:n.map(A=>M.jsx(o3,{value:A.id,children:M.jsxs("div",{className:"flex items-center gap-2",children:[A.avatar&&M.jsx("img",{src:A.avatar,alt:A.username,className:"w-4 h-4 rounded-full"}),M.jsx("span",{style:{color:A.roleColor},children:A.username})]})},A.id))})]}),M.jsx(Na,{value:a.data.reply.content||"",onChange:A=>_("reply",{...a.data.reply,content:A.target.value}),placeholder:"Original message content...",className:"h-8 text-sm"}),M.jsxs("div",{className:"flex gap-4 text-xs",children:[M.jsxs("label",{className:"flex items-center gap-2 cursor-pointer",children:[M.jsx(Df,{checked:a.data.reply.edited||!1,onCheckedChange:A=>_("reply",{...a.data.reply,edited:A})}),M.jsx("span",{children:"Edited"})]}),M.jsxs("label",{className:"flex items-center gap-2 cursor-pointer",children:[M.jsx(Df,{checked:a.data.reply.attachment||!1,onCheckedChange:A=>_("reply",{...a.data.reply,attachment:A})}),M.jsx("span",{children:"Has Attachment"})]})]})]}):M.jsxs(Jt,{variant:"outline",size:"sm",onClick:()=>_("reply",{authorId:"",content:""}),className:"w-full",children:[M.jsx(s7,{className:"mr-2",size:16}),"Add Reply"]}),M.jsx(am,{value:p,onChange:A=>b(A.target.value),placeholder:"Type your message... Discord markdown supported!",rows:3}),M.jsx("div",{className:"flex items-center justify-between",children:M.jsxs("label",{className:"flex items-center gap-2 cursor-pointer",children:[M.jsx(Df,{checked:a.data.edited||!1,onCheckedChange:A=>_("edited",A)}),M.jsx("span",{className:"text-sm",children:"Edited"})]})})]});case"embed":return M.jsxs("div",{className:"space-y-2",children:[M.jsx(Jt,{variant:a.data.embed?"secondary":"outline",onClick:()=>g(!0),className:"w-full",children:a.data.embed?"Edit Embed":"Configure Embed"}),a.data.embed&&M.jsxs("div",{className:"text-xs text-muted-foreground",children:[a.data.embed.title&&M.jsxs("div",{children:["Title: ",a.data.embed.title]}),a.data.embed.description&&M.jsxs("div",{children:["Description: ",a.data.embed.description.substring(0,50),"..."]})]})]});case"image":return M.jsxs("div",{className:"space-y-2",children:[M.jsx(Na,{value:u,onChange:A=>x(A.target.value),placeholder:"https://example.com/image.png"}),a.data.imageUrl&&M.jsx("img",{src:a.data.imageUrl,alt:"Preview",className:"w-full rounded-md max-h-32 object-cover",onError:A=>{A.currentTarget.src="",A.currentTarget.alt="Invalid image URL"}})]})}},C={author:"Author",message:"Message",embed:"Embed",image:"Image"};return M.jsxs(M.Fragment,{children:[M.jsx($o,{className:"p-4 bg-card cursor-move hover:border-primary/50 transition-all",draggable:!0,onDragStart:c,onDragEnd:d,children:M.jsxs("div",{className:"space-y-3",children:[M.jsxs("div",{className:"flex items-center justify-between",children:[M.jsxs("div",{className:"flex items-center gap-2",children:[M.jsx("div",{className:"cursor-grab active:cursor-grabbing hover:text-primary transition-colors",children:M.jsx(d7,{className:"text-muted-foreground",size:20,weight:"bold"})}),M.jsx("span",{className:"font-medium text-sm",children:C[a.type]})]}),M.jsx(Jt,{variant:"ghost",size:"sm",onClick:i,children:M.jsx($d,{className:"text-destructive"})})]}),R()]})}),a.type==="embed"&&M.jsx(o9,{open:h,onOpenChange:g,onSave:O,initialEmbed:a.data.embed})]})}function c9({authorBlock:a,childBlocks:n,authors:s,onUpdateBlock:i,onDeleteBlock:l,onDeleteGroup:c,onOpenAuthorDialog:d,onDragStart:h,onDragEnd:g}){const p=s.find(u=>u.id===a.data.authorId),m=(p==null?void 0:p.username)||"Select an author";return M.jsx(ez,{type:"single",collapsible:!0,className:"w-full",children:M.jsxs(tz,{value:a.id,className:"border rounded-lg bg-[#2f3136] border-[#202225]",children:[M.jsxs("div",{className:"flex items-center gap-2 pr-3",children:[M.jsx(az,{className:"flex-1 px-4 py-3 hover:no-underline",children:M.jsxs("div",{className:"flex items-center gap-3",children:[p!=null&&p.avatar?M.jsx("img",{src:p.avatar,alt:m,className:"w-8 h-8 rounded-full object-cover"}):M.jsx("div",{className:"w-8 h-8 rounded-full bg-[#202225] flex items-center justify-center",children:M.jsx(xd,{size:20,className:"text-gray-400"})}),M.jsxs("div",{className:"flex items-center gap-2",children:[M.jsx("span",{className:"font-semibold text-sm",style:{color:(p==null?void 0:p.roleColor)||"#ffffff"},children:m}),(p==null?void 0:p.badgeUrl)&&M.jsx("img",{src:p.badgeUrl,alt:"Role badge",className:"w-4 h-4 object-contain"}),M.jsxs("span",{className:"text-xs text-gray-400",children:["(",n.length," block",n.length!==1?"s":"",")"]})]})]})}),M.jsx(Jt,{variant:"ghost",size:"icon",className:"h-8 w-8 text-gray-400 hover:text-red-400 flex-shrink-0",onClick:c,children:M.jsx($d,{size:16})})]}),M.jsxs(iz,{className:"px-4 pb-3 space-y-2",children:[M.jsx(c3,{block:a,authors:s,onUpdate:u=>i(a.id,u),onDelete:()=>{},onOpenAuthorDialog:d,onDragStart:h?u=>h(u,a.id):void 0,onDragEnd:g}),n.map(u=>M.jsx(c3,{block:u,authors:s,onUpdate:S=>i(u.id,S),onDelete:()=>l(u.id),onOpenAuthorDialog:d,onDragStart:h?S=>h(S,u.id):void 0,onDragEnd:g},u.id))]})]})})}function d9({blocks:a,authors:n,onBlocksChange:s,onOpenAuthorDialog:i}){const[l,c]=y.useState(!1),[d,h]=y.useState(null),[g,p]=y.useState(null),m=C=>{C.preventDefault(),C.dataTransfer.dropEffect="copy",c(!0)},u=()=>{c(!1)},S=C=>{C.preventDefault(),c(!1);const A=C.dataTransfer.getData("blockType");if(!A)return;const I={id:Date.now().toString(),type:A,data:{}};s([...a,I])},w=(C,A)=>{h(A),C.dataTransfer.effectAllowed="move",C.dataTransfer.setData("blockId",A)},z=()=>{h(null),p(null)},_=(C,A)=>{s(a.map(I=>I.id===C?A:I))},b=C=>{s(a.filter(A=>A.id!==C))},x=()=>{s([])},O=C=>{const A=a.findIndex($=>$.id===C);if(A===-1)return;let I=a.findIndex(($,Z)=>Z>A&&$.type==="author");I===-1&&(I=a.length);const H=[...a.slice(0,A),...a.slice(I)];s(H)},R=y.useMemo(()=>{const C=[];let A=null,I=[];for(const H of a)H.type==="author"?(A&&C.push({authorBlock:A,childBlocks:I}),A=H,I=[]):A&&I.push(H);return A&&C.push({authorBlock:A,childBlocks:I}),C},[a]);return M.jsx($o,{className:`p-6 min-h-[400px] transition-all ${l?"border-primary border-2 bg-primary/5":""}`,onDragOver:m,onDragLeave:u,onDrop:S,children:M.jsxs("div",{className:"space-y-4",children:[a.length>0&&M.jsx("div",{className:"flex items-center justify-end mb-2",children:M.jsx(Jt,{variant:"ghost",size:"sm",onClick:x,children:"Clear All"})}),a.length===0?M.jsxs("div",{className:"flex flex-col items-center justify-center h-64 text-center border-2 border-dashed rounded-lg",children:[M.jsx(wm,{className:"text-muted-foreground mb-2",size:48}),M.jsx("p",{className:"text-muted-foreground",children:"Drag and drop items from the panel"}),M.jsx("p",{className:"text-sm text-muted-foreground mt-1",children:"Start by adding an author, then message content"})]}):M.jsx("div",{className:"space-y-3",children:R.map(C=>M.jsx(c9,{authorBlock:C.authorBlock,childBlocks:C.childBlocks,authors:n,onUpdateBlock:_,onDeleteBlock:b,onDeleteGroup:()=>O(C.authorBlock.id),onOpenAuthorDialog:i,onDragStart:w,onDragEnd:z},C.authorBlock.id))})]})})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vd=globalThis,e0=vd.ShadowRoot&&(vd.ShadyCSS===void 0||vd.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,t0=Symbol(),d3=new WeakMap;let o2=class{constructor(n,s,i){if(this._$cssResult$=!0,i!==t0)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=n,this.t=s}get styleSheet(){let n=this.o;const s=this.t;if(e0&&n===void 0){const i=s!==void 0&&s.length===1;i&&(n=d3.get(s)),n===void 0&&((this.o=n=new CSSStyleSheet).replaceSync(this.cssText),i&&d3.set(s,n))}return n}toString(){return this.cssText}};const u9=a=>new o2(typeof a=="string"?a:a+"",void 0,t0),nt=(a,...n)=>{const s=a.length===1?a[0]:n.reduce(((i,l,c)=>i+(d=>{if(d._$cssResult$===!0)return d.cssText;if(typeof d=="number")return d;throw Error("Value passed to 'css' function must be a 'css' function result: "+d+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(l)+a[c+1]),a[0]);return new o2(s,a,t0)},h9=(a,n)=>{if(e0)a.adoptedStyleSheets=n.map((s=>s instanceof CSSStyleSheet?s:s.styleSheet));else for(const s of n){const i=document.createElement("style"),l=vd.litNonce;l!==void 0&&i.setAttribute("nonce",l),i.textContent=s.cssText,a.appendChild(i)}},u3=e0?a=>a:a=>a instanceof CSSStyleSheet?(n=>{let s="";for(const i of n.cssRules)s+=i.cssText;return u9(s)})(a):a;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:f9,defineProperty:m9,getOwnPropertyDescriptor:p9,getOwnPropertyNames:g9,getOwnPropertySymbols:v9,getPrototypeOf:b9}=Object,Mr=globalThis,h3=Mr.trustedTypes,y9=h3?h3.emptyScript:"",Of=Mr.reactiveElementPolyfillSupport,Mo=(a,n)=>a,Dd={toAttribute(a,n){switch(n){case Boolean:a=a?y9:null;break;case Object:case Array:a=a==null?a:JSON.stringify(a)}return a},fromAttribute(a,n){let s=a;switch(n){case Boolean:s=a!==null;break;case Number:s=a===null?null:Number(a);break;case Object:case Array:try{s=JSON.parse(a)}catch{s=null}}return s}},a0=(a,n)=>!f9(a,n),f3={attribute:!0,type:String,converter:Dd,reflect:!1,useDefault:!1,hasChanged:a0};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Mr.litPropertyMetadata??(Mr.litPropertyMetadata=new WeakMap);let ol=class extends HTMLElement{static addInitializer(n){this._$Ei(),(this.l??(this.l=[])).push(n)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(n,s=f3){if(s.state&&(s.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(n)&&((s=Object.create(s)).wrapped=!0),this.elementProperties.set(n,s),!s.noAccessor){const i=Symbol(),l=this.getPropertyDescriptor(n,i,s);l!==void 0&&m9(this.prototype,n,l)}}static getPropertyDescriptor(n,s,i){const{get:l,set:c}=p9(this.prototype,n)??{get(){return this[s]},set(d){this[s]=d}};return{get:l,set(d){const h=l==null?void 0:l.call(this);c==null||c.call(this,d),this.requestUpdate(n,h,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(n){return this.elementProperties.get(n)??f3}static _$Ei(){if(this.hasOwnProperty(Mo("elementProperties")))return;const n=b9(this);n.finalize(),n.l!==void 0&&(this.l=[...n.l]),this.elementProperties=new Map(n.elementProperties)}static finalize(){if(this.hasOwnProperty(Mo("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Mo("properties"))){const s=this.properties,i=[...g9(s),...v9(s)];for(const l of i)this.createProperty(l,s[l])}const n=this[Symbol.metadata];if(n!==null){const s=litPropertyMetadata.get(n);if(s!==void 0)for(const[i,l]of s)this.elementProperties.set(i,l)}this._$Eh=new Map;for(const[s,i]of this.elementProperties){const l=this._$Eu(s,i);l!==void 0&&this._$Eh.set(l,s)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(n){const s=[];if(Array.isArray(n)){const i=new Set(n.flat(1/0).reverse());for(const l of i)s.unshift(u3(l))}else n!==void 0&&s.push(u3(n));return s}static _$Eu(n,s){const i=s.attribute;return i===!1?void 0:typeof i=="string"?i:typeof n=="string"?n.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var n;this._$ES=new Promise((s=>this.enableUpdating=s)),this._$AL=new Map,this._$E_(),this.requestUpdate(),(n=this.constructor.l)==null||n.forEach((s=>s(this)))}addController(n){var s;(this._$EO??(this._$EO=new Set)).add(n),this.renderRoot!==void 0&&this.isConnected&&((s=n.hostConnected)==null||s.call(n))}removeController(n){var s;(s=this._$EO)==null||s.delete(n)}_$E_(){const n=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(n.set(i,this[i]),delete this[i]);n.size>0&&(this._$Ep=n)}createRenderRoot(){const n=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return h9(n,this.constructor.elementStyles),n}connectedCallback(){var n;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(n=this._$EO)==null||n.forEach((s=>{var i;return(i=s.hostConnected)==null?void 0:i.call(s)}))}enableUpdating(n){}disconnectedCallback(){var n;(n=this._$EO)==null||n.forEach((s=>{var i;return(i=s.hostDisconnected)==null?void 0:i.call(s)}))}attributeChangedCallback(n,s,i){this._$AK(n,i)}_$ET(n,s){var c;const i=this.constructor.elementProperties.get(n),l=this.constructor._$Eu(n,i);if(l!==void 0&&i.reflect===!0){const d=(((c=i.converter)==null?void 0:c.toAttribute)!==void 0?i.converter:Dd).toAttribute(s,i.type);this._$Em=n,d==null?this.removeAttribute(l):this.setAttribute(l,d),this._$Em=null}}_$AK(n,s){var c,d;const i=this.constructor,l=i._$Eh.get(n);if(l!==void 0&&this._$Em!==l){const h=i.getPropertyOptions(l),g=typeof h.converter=="function"?{fromAttribute:h.converter}:((c=h.converter)==null?void 0:c.fromAttribute)!==void 0?h.converter:Dd;this._$Em=l;const p=g.fromAttribute(s,h.type);this[l]=p??((d=this._$Ej)==null?void 0:d.get(l))??p,this._$Em=null}}requestUpdate(n,s,i){var l;if(n!==void 0){const c=this.constructor,d=this[n];if(i??(i=c.getPropertyOptions(n)),!((i.hasChanged??a0)(d,s)||i.useDefault&&i.reflect&&d===((l=this._$Ej)==null?void 0:l.get(n))&&!this.hasAttribute(c._$Eu(n,i))))return;this.C(n,s,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(n,s,{useDefault:i,reflect:l,wrapped:c},d){i&&!(this._$Ej??(this._$Ej=new Map)).has(n)&&(this._$Ej.set(n,d??s??this[n]),c!==!0||d!==void 0)||(this._$AL.has(n)||(this.hasUpdated||i||(s=void 0),this._$AL.set(n,s)),l===!0&&this._$Em!==n&&(this._$Eq??(this._$Eq=new Set)).add(n))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(s){Promise.reject(s)}const n=this.scheduleUpdate();return n!=null&&await n,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[c,d]of this._$Ep)this[c]=d;this._$Ep=void 0}const l=this.constructor.elementProperties;if(l.size>0)for(const[c,d]of l){const{wrapped:h}=d,g=this[c];h!==!0||this._$AL.has(c)||g===void 0||this.C(c,void 0,d,g)}}let n=!1;const s=this._$AL;try{n=this.shouldUpdate(s),n?(this.willUpdate(s),(i=this._$EO)==null||i.forEach((l=>{var c;return(c=l.hostUpdate)==null?void 0:c.call(l)})),this.update(s)):this._$EM()}catch(l){throw n=!1,this._$EM(),l}n&&this._$AE(s)}willUpdate(n){}_$AE(n){var s;(s=this._$EO)==null||s.forEach((i=>{var l;return(l=i.hostUpdated)==null?void 0:l.call(i)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(n)),this.updated(n)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(n){return!0}update(n){this._$Eq&&(this._$Eq=this._$Eq.forEach((s=>this._$ET(s,this[s])))),this._$EM()}updated(n){}firstUpdated(n){}};ol.elementStyles=[],ol.shadowRootOptions={mode:"open"},ol[Mo("elementProperties")]=new Map,ol[Mo("finalized")]=new Map,Of==null||Of({ReactiveElement:ol}),(Mr.reactiveElementVersions??(Mr.reactiveElementVersions=[])).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Eo=globalThis,Od=Eo.trustedTypes,m3=Od?Od.createPolicy("lit-html",{createHTML:a=>a}):void 0,c2="$lit$",wr=`lit$${Math.random().toFixed(9).slice(2)}$`,d2="?"+wr,_9=`<${d2}>`,fs=document,ko=()=>fs.createComment(""),jo=a=>a===null||typeof a!="object"&&typeof a!="function",i0=Array.isArray,x9=a=>i0(a)||typeof(a==null?void 0:a[Symbol.iterator])=="function",Hf=`[ 	
\f\r]`,po=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,p3=/-->/g,g3=/>/g,Wr=RegExp(`>|${Hf}(?:([^\\s"'>=/]+)(${Hf}*=${Hf}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),v3=/'/g,b3=/"/g,u2=/^(?:script|style|textarea|title)$/i,h2=a=>(n,...s)=>({_$litType$:a,strings:n,values:s}),F=h2(1),Ie=h2(2),Cr=Symbol.for("lit-noChange"),ra=Symbol.for("lit-nothing"),y3=new WeakMap,ss=fs.createTreeWalker(fs,129);function f2(a,n){if(!i0(a)||!a.hasOwnProperty("raw"))throw Error("invalid template strings array");return m3!==void 0?m3.createHTML(n):n}const w9=(a,n)=>{const s=a.length-1,i=[];let l,c=n===2?"<svg>":n===3?"<math>":"",d=po;for(let h=0;h<s;h++){const g=a[h];let p,m,u=-1,S=0;for(;S<g.length&&(d.lastIndex=S,m=d.exec(g),m!==null);)S=d.lastIndex,d===po?m[1]==="!--"?d=p3:m[1]!==void 0?d=g3:m[2]!==void 0?(u2.test(m[2])&&(l=RegExp("</"+m[2],"g")),d=Wr):m[3]!==void 0&&(d=Wr):d===Wr?m[0]===">"?(d=l??po,u=-1):m[1]===void 0?u=-2:(u=d.lastIndex-m[2].length,p=m[1],d=m[3]===void 0?Wr:m[3]==='"'?b3:v3):d===b3||d===v3?d=Wr:d===p3||d===g3?d=po:(d=Wr,l=void 0);const w=d===Wr&&a[h+1].startsWith("/>")?" ":"";c+=d===po?g+_9:u>=0?(i.push(p),g.slice(0,u)+c2+g.slice(u)+wr+w):g+wr+(u===-2?h:w)}return[f2(a,c+(a[s]||"<?>")+(n===2?"</svg>":n===3?"</math>":"")),i]};class No{constructor({strings:n,_$litType$:s},i){let l;this.parts=[];let c=0,d=0;const h=n.length-1,g=this.parts,[p,m]=w9(n,s);if(this.el=No.createElement(p,i),ss.currentNode=this.el.content,s===2||s===3){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(l=ss.nextNode())!==null&&g.length<h;){if(l.nodeType===1){if(l.hasAttributes())for(const u of l.getAttributeNames())if(u.endsWith(c2)){const S=m[d++],w=l.getAttribute(u).split(wr),z=/([.?@])?(.*)/.exec(S);g.push({type:1,index:c,name:z[2],strings:w,ctor:z[1]==="."?S9:z[1]==="?"?M9:z[1]==="@"?E9:tu}),l.removeAttribute(u)}else u.startsWith(wr)&&(g.push({type:6,index:c}),l.removeAttribute(u));if(u2.test(l.tagName)){const u=l.textContent.split(wr),S=u.length-1;if(S>0){l.textContent=Od?Od.emptyScript:"";for(let w=0;w<S;w++)l.append(u[w],ko()),ss.nextNode(),g.push({type:2,index:++c});l.append(u[S],ko())}}}else if(l.nodeType===8)if(l.data===d2)g.push({type:2,index:c});else{let u=-1;for(;(u=l.data.indexOf(wr,u+1))!==-1;)g.push({type:7,index:c}),u+=wr.length-1}c++}}static createElement(n,s){const i=fs.createElement("template");return i.innerHTML=n,i}}function ml(a,n,s=a,i){var d,h;if(n===Cr)return n;let l=i!==void 0?(d=s._$Co)==null?void 0:d[i]:s._$Cl;const c=jo(n)?void 0:n._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((h=l==null?void 0:l._$AO)==null||h.call(l,!1),c===void 0?l=void 0:(l=new c(a),l._$AT(a,s,i)),i!==void 0?(s._$Co??(s._$Co=[]))[i]=l:s._$Cl=l),l!==void 0&&(n=ml(a,l._$AS(a,n.values),l,i)),n}class z9{constructor(n,s){this._$AV=[],this._$AN=void 0,this._$AD=n,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(n){const{el:{content:s},parts:i}=this._$AD,l=((n==null?void 0:n.creationScope)??fs).importNode(s,!0);ss.currentNode=l;let c=ss.nextNode(),d=0,h=0,g=i[0];for(;g!==void 0;){if(d===g.index){let p;g.type===2?p=new Lo(c,c.nextSibling,this,n):g.type===1?p=new g.ctor(c,g.name,g.strings,this,n):g.type===6&&(p=new T9(c,this,n)),this._$AV.push(p),g=i[++h]}d!==(g==null?void 0:g.index)&&(c=ss.nextNode(),d++)}return ss.currentNode=fs,l}p(n){let s=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(n,i,s),s+=i.strings.length-2):i._$AI(n[s])),s++}}class Lo{get _$AU(){var n;return((n=this._$AM)==null?void 0:n._$AU)??this._$Cv}constructor(n,s,i,l){this.type=2,this._$AH=ra,this._$AN=void 0,this._$AA=n,this._$AB=s,this._$AM=i,this.options=l,this._$Cv=(l==null?void 0:l.isConnected)??!0}get parentNode(){let n=this._$AA.parentNode;const s=this._$AM;return s!==void 0&&(n==null?void 0:n.nodeType)===11&&(n=s.parentNode),n}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(n,s=this){n=ml(this,n,s),jo(n)?n===ra||n==null||n===""?(this._$AH!==ra&&this._$AR(),this._$AH=ra):n!==this._$AH&&n!==Cr&&this._(n):n._$litType$!==void 0?this.$(n):n.nodeType!==void 0?this.T(n):x9(n)?this.k(n):this._(n)}O(n){return this._$AA.parentNode.insertBefore(n,this._$AB)}T(n){this._$AH!==n&&(this._$AR(),this._$AH=this.O(n))}_(n){this._$AH!==ra&&jo(this._$AH)?this._$AA.nextSibling.data=n:this.T(fs.createTextNode(n)),this._$AH=n}$(n){var c;const{values:s,_$litType$:i}=n,l=typeof i=="number"?this._$AC(n):(i.el===void 0&&(i.el=No.createElement(f2(i.h,i.h[0]),this.options)),i);if(((c=this._$AH)==null?void 0:c._$AD)===l)this._$AH.p(s);else{const d=new z9(l,this),h=d.u(this.options);d.p(s),this.T(h),this._$AH=d}}_$AC(n){let s=y3.get(n.strings);return s===void 0&&y3.set(n.strings,s=new No(n)),s}k(n){i0(this._$AH)||(this._$AH=[],this._$AR());const s=this._$AH;let i,l=0;for(const c of n)l===s.length?s.push(i=new Lo(this.O(ko()),this.O(ko()),this,this.options)):i=s[l],i._$AI(c),l++;l<s.length&&(this._$AR(i&&i._$AB.nextSibling,l),s.length=l)}_$AR(n=this._$AA.nextSibling,s){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,s);n!==this._$AB;){const l=n.nextSibling;n.remove(),n=l}}setConnected(n){var s;this._$AM===void 0&&(this._$Cv=n,(s=this._$AP)==null||s.call(this,n))}}class tu{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(n,s,i,l,c){this.type=1,this._$AH=ra,this._$AN=void 0,this.element=n,this.name=s,this._$AM=l,this.options=c,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=ra}_$AI(n,s=this,i,l){const c=this.strings;let d=!1;if(c===void 0)n=ml(this,n,s,0),d=!jo(n)||n!==this._$AH&&n!==Cr,d&&(this._$AH=n);else{const h=n;let g,p;for(n=c[0],g=0;g<c.length-1;g++)p=ml(this,h[i+g],s,g),p===Cr&&(p=this._$AH[g]),d||(d=!jo(p)||p!==this._$AH[g]),p===ra?n=ra:n!==ra&&(n+=(p??"")+c[g+1]),this._$AH[g]=p}d&&!l&&this.j(n)}j(n){n===ra?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,n??"")}}class S9 extends tu{constructor(){super(...arguments),this.type=3}j(n){this.element[this.name]=n===ra?void 0:n}}class M9 extends tu{constructor(){super(...arguments),this.type=4}j(n){this.element.toggleAttribute(this.name,!!n&&n!==ra)}}class E9 extends tu{constructor(n,s,i,l,c){super(n,s,i,l,c),this.type=5}_$AI(n,s=this){if((n=ml(this,n,s,0)??ra)===Cr)return;const i=this._$AH,l=n===ra&&i!==ra||n.capture!==i.capture||n.once!==i.once||n.passive!==i.passive,c=n!==ra&&(i===ra||l);l&&this.element.removeEventListener(this.name,this,i),c&&this.element.addEventListener(this.name,this,n),this._$AH=n}handleEvent(n){var s;typeof this._$AH=="function"?this._$AH.call(((s=this.options)==null?void 0:s.host)??this.element,n):this._$AH.handleEvent(n)}}class T9{constructor(n,s,i){this.element=n,this.type=6,this._$AN=void 0,this._$AM=s,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(n){ml(this,n)}}const Rf=Eo.litHtmlPolyfillSupport;Rf==null||Rf(No,Lo),(Eo.litHtmlVersions??(Eo.litHtmlVersions=[])).push("3.3.1");const C9=(a,n,s)=>{const i=(s==null?void 0:s.renderBefore)??n;let l=i._$litPart$;if(l===void 0){const c=(s==null?void 0:s.renderBefore)??null;i._$litPart$=l=new Lo(n.insertBefore(ko(),c),c,void 0,s??{})}return l._$AI(a),l};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const os=globalThis;let at=class extends ol{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var s;const n=super.createRenderRoot();return(s=this.renderOptions).renderBefore??(s.renderBefore=n.firstChild),n}update(n){const s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(n),this._$Do=C9(s,this.renderRoot,this.renderOptions)}connectedCallback(){var n;super.connectedCallback(),(n=this._$Do)==null||n.setConnected(!0)}disconnectedCallback(){var n;super.disconnectedCallback(),(n=this._$Do)==null||n.setConnected(!1)}render(){return Cr}};var D3;at._$litElement$=!0,at.finalized=!0,(D3=os.litElementHydrateSupport)==null||D3.call(os,{LitElement:at});const $f=os.litElementPolyfillSupport;$f==null||$f({LitElement:at});(os.litElementVersions??(os.litElementVersions=[])).push("4.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const lt=a=>(n,s)=>{s!==void 0?s.addInitializer((()=>{customElements.define(a,n)})):customElements.define(a,n)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const A9={attribute:!0,type:String,converter:Dd,reflect:!1,hasChanged:a0},k9=(a=A9,n,s)=>{const{kind:i,metadata:l}=s;let c=globalThis.litPropertyMetadata.get(l);if(c===void 0&&globalThis.litPropertyMetadata.set(l,c=new Map),i==="setter"&&((a=Object.create(a)).wrapped=!0),c.set(s.name,a),i==="accessor"){const{name:d}=s;return{set(h){const g=n.get.call(this);n.set.call(this,h),this.requestUpdate(d,g,a)},init(h){return h!==void 0&&this.C(d,void 0,a,h),h}}}if(i==="setter"){const{name:d}=s;return function(h){const g=this[d];n.call(this,h),this.requestUpdate(d,g,a)}}throw Error("Unsupported decorator location: "+i)};function q(a){return(n,s)=>typeof s=="object"?k9(a,n,s):((i,l,c)=>{const d=l.hasOwnProperty(c);return l.constructor.createProperty(c,i),d?Object.getOwnPropertyDescriptor(l,c):void 0})(a,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ai(a){return q({...a,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function m2(a){return(n,s)=>{const i=typeof n=="function"?n:n[s];Object.assign(i,a)}}var j9=function(a,n,s,i,l,c){function d(x){if(x!==void 0&&typeof x!="function")throw new TypeError("Function expected");return x}for(var h=i.kind,g=h==="getter"?"get":h==="setter"?"set":"value",p=!n&&a?i.static?a:a.prototype:null,m=n||(p?Object.getOwnPropertyDescriptor(p,i.name):{}),u,S=!1,w=s.length-1;w>=0;w--){var z={};for(var _ in i)z[_]=_==="access"?{}:i[_];for(var _ in i.access)z.access[_]=i.access[_];z.addInitializer=function(x){if(S)throw new TypeError("Cannot add initializers after decoration has completed");c.push(d(x||null))};var b=(0,s[w])(h==="accessor"?{get:m.get,set:m.set}:m[g],z);if(h==="accessor"){if(b===void 0)continue;if(b===null||typeof b!="object")throw new TypeError("Object expected");(u=d(b.get))&&(m.get=u),(u=d(b.set))&&(m.set=u),(u=d(b.init))&&l.unshift(u)}else(u=d(b))&&(h==="field"?l.unshift(u):m[g]=u)}p&&Object.defineProperty(p,i.name,m),S=!0},N9=function(a,n,s){for(var i=arguments.length>2,l=0;l<n.length;l++)s=i?n[l].call(a,s):n[l].call(a);return i?s:void 0};let D9=(()=>{var c;let a=[lt("discord-action-row")],n,s=[],i,l=at;return c=class extends l{render(){return F`<slot></slot>`}},i=c,(()=>{const h=typeof Symbol=="function"&&Symbol.metadata?Object.create(l[Symbol.metadata]??null):void 0;j9(null,n={value:i},a,{kind:"class",name:i.name,metadata:h},null,s),i=n.value,h&&Object.defineProperty(i,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:h})})(),Be(c,"styles",nt`
		:host {
			display: flex;
			flex-wrap: wrap;
		}
	`),N9(i,s),i})();var O9=function(a,n,s,i,l,c){function d(x){if(x!==void 0&&typeof x!="function")throw new TypeError("Function expected");return x}for(var h=i.kind,g=h==="getter"?"get":h==="setter"?"set":"value",p=!n&&a?i.static?a:a.prototype:null,m=n||(p?Object.getOwnPropertyDescriptor(p,i.name):{}),u,S=!1,w=s.length-1;w>=0;w--){var z={};for(var _ in i)z[_]=_==="access"?{}:i[_];for(var _ in i.access)z.access[_]=i.access[_];z.addInitializer=function(x){if(S)throw new TypeError("Cannot add initializers after decoration has completed");c.push(d(x||null))};var b=(0,s[w])(h==="accessor"?{get:m.get,set:m.set}:m[g],z);if(h==="accessor"){if(b===void 0)continue;if(b===null||typeof b!="object")throw new TypeError("Object expected");(u=d(b.get))&&(m.get=u),(u=d(b.set))&&(m.set=u),(u=d(b.init))&&l.unshift(u)}else(u=d(b))&&(h==="field"?l.unshift(u):m[g]=u)}p&&Object.defineProperty(p,i.name,m),S=!0},H9=function(a,n,s){for(var i=arguments.length>2,l=0;l<n.length;l++)s=i?n[l].call(a,s):n[l].call(a);return i?s:void 0};let R9=(()=>{var c;let a=[lt("discord-attachments")],n,s=[],i,l=at;return c=class extends l{render(){return F`<slot></slot>`}},i=c,(()=>{const h=typeof Symbol=="function"&&Symbol.metadata?Object.create(l[Symbol.metadata]??null):void 0;O9(null,n={value:i},a,{kind:"class",name:i.name,metadata:h},null,s),i=n.value,h&&Object.defineProperty(i,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:h})})(),Be(c,"styles",nt`
		:host {
			display: grid;
			grid-auto-flow: row;
			grid-row-gap: 0.25rem;
			text-indent: 0;
			min-height: 0;
			min-width: 0;
			padding-top: 0.125rem;
			padding-bottom: 0.125rem;
			position: relative;
		}

		:host > * {
			justify-self: start;
			-ms-flex-item-align: start;
			align-self: start;
		}
	`),H9(i,s),i})();/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let p2=class extends Event{constructor(n,s,i,l){super("context-request",{bubbles:!0,composed:!0}),this.context=n,this.contextTarget=s,this.callback=i,this.subscribe=l??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let _3=class{constructor(n,s,i,l){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(c,d)=>{this.unsubscribe&&(this.unsubscribe!==d&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=c,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(c,d)),this.unsubscribe=d},this.host=n,s.context!==void 0){const c=s;this.context=c.context,this.callback=c.callback,this.subscribe=c.subscribe??!1}else this.context=s,this.callback=i,this.subscribe=l??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new p2(this.context,this.host,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let $9=class{get value(){return this.o}set value(n){this.setValue(n)}setValue(n,s=!1){const i=s||!Object.is(n,this.o);this.o=n,i&&this.updateObservers()}constructor(n){this.subscriptions=new Map,this.updateObservers=()=>{for(const[s,{disposer:i}]of this.subscriptions)s(this.o,i)},n!==void 0&&(this.value=n)}addCallback(n,s,i){if(!i)return void n(this.value);this.subscriptions.has(n)||this.subscriptions.set(n,{disposer:()=>{this.subscriptions.delete(n)},consumerHost:s});const{disposer:l}=this.subscriptions.get(n);n(this.value,l)}clearCallbacks(){this.subscriptions.clear()}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let V9=class extends Event{constructor(n,s){super("context-provider",{bubbles:!0,composed:!0}),this.context=n,this.contextTarget=s}},x3=class extends $9{constructor(n,s,i){var l,c;super(s.context!==void 0?s.initialValue:i),this.onContextRequest=d=>{if(d.context!==this.context)return;const h=d.contextTarget??d.composedPath()[0];h!==this.host&&(d.stopPropagation(),this.addCallback(d.callback,h,d.subscribe))},this.onProviderRequest=d=>{if(d.context!==this.context||(d.contextTarget??d.composedPath()[0])===this.host)return;const h=new Set;for(const[g,{consumerHost:p}]of this.subscriptions)h.has(g)||(h.add(g),p.dispatchEvent(new p2(this.context,p,g,!0)));d.stopPropagation()},this.host=n,s.context!==void 0?this.context=s.context:this.context=s,this.attachListeners(),(c=(l=this.host).addController)==null||c.call(l,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new V9(this.context,this.host))}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ls({context:a}){return(n,s)=>{const i=new WeakMap;if(typeof s=="object")return{get(){return n.get.call(this)},set(l){return i.get(this).setValue(l),n.set.call(this,l)},init(l){return i.set(this,new x3(this,{context:a,initialValue:l})),l}};{n.constructor.addInitializer((d=>{i.set(d,new x3(d,{context:a}))}));const l=Object.getOwnPropertyDescriptor(n,s);let c;if(l===void 0){const d=new WeakMap;c={get(){return d.get(this)},set(h){i.get(this).setValue(h),d.set(this,h)},configurable:!0,enumerable:!0}}else{const d=l.set;c={...l,set(h){i.get(this).setValue(h),d==null||d.call(this,h)}}}return void Object.defineProperty(n,s,c)}}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function pt({context:a,subscribe:n}){return(s,i)=>{typeof i=="object"?i.addInitializer((function(){new _3(this,{context:a,callback:l=>{s.set.call(this,l)},subscribe:n})})):s.constructor.addInitializer((l=>{new _3(l,{context:a,callback:c=>{l[i]=c},subscribe:n})}))}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const n0={ATTRIBUTE:1,CHILD:2},au=a=>(...n)=>({_$litDirective$:a,values:n});let r0=class{constructor(n){}get _$AU(){return this._$AM._$AU}_$AT(n,s,i){this._$Ct=n,this._$AM=s,this._$Ci=i}_$AS(n,s){return this.update(n,s)}update(n,s){return this.render(...s)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Lt=au(class extends r0{constructor(a){var n;if(super(a),a.type!==n0.ATTRIBUTE||a.name!=="class"||((n=a.strings)==null?void 0:n.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(a){return" "+Object.keys(a).filter((n=>a[n])).join(" ")+" "}update(a,[n]){var i,l;if(this.st===void 0){this.st=new Set,a.strings!==void 0&&(this.nt=new Set(a.strings.join(" ").split(/\s/).filter((c=>c!==""))));for(const c in n)n[c]&&!((i=this.nt)!=null&&i.has(c))&&this.st.add(c);return this.render(n)}const s=a.element.classList;for(const c of this.st)c in n||(s.remove(c),this.st.delete(c));for(const c in n){const d=!!n[c];d===this.st.has(c)||(l=this.nt)!=null&&l.has(c)||(d?(s.add(c),this.st.add(c)):(s.remove(c),this.st.delete(c)))}return Cr}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Le=a=>a??ra;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const L9=a=>a.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const To=(a,n)=>{var i;const s=a._$AN;if(s===void 0)return!1;for(const l of s)(i=l._$AO)==null||i.call(l,n,!1),To(l,n);return!0},Hd=a=>{let n,s;do{if((n=a._$AM)===void 0)break;s=n._$AN,s.delete(a),a=n}while((s==null?void 0:s.size)===0)},g2=a=>{for(let n;n=a._$AM;a=n){let s=n._$AN;if(s===void 0)n._$AN=s=new Set;else if(s.has(a))break;s.add(a),I9(n)}};function B9(a){this._$AN!==void 0?(Hd(this),this._$AM=a,g2(this)):this._$AM=a}function U9(a,n=!1,s=0){const i=this._$AH,l=this._$AN;if(l!==void 0&&l.size!==0)if(n)if(Array.isArray(i))for(let c=s;c<i.length;c++)To(i[c],!1),Hd(i[c]);else i!=null&&(To(i,!1),Hd(i));else To(this,a)}const I9=a=>{a.type==n0.CHILD&&(a._$AP??(a._$AP=U9),a._$AQ??(a._$AQ=B9))};class v2 extends r0{constructor(){super(...arguments),this._$AN=void 0}_$AT(n,s,i){super._$AT(n,s,i),g2(this),this.isConnected=n._$AU}_$AO(n,s=!0){var i,l;n!==this.isConnected&&(this.isConnected=n,n?(i=this.reconnected)==null||i.call(this):(l=this.disconnected)==null||l.call(this)),s&&(To(this,n),Hd(this))}setValue(n){if(L9(this._$Ct))this._$Ct._$AI(n,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=n,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const cl=()=>new P9;class P9{}const Vf=new WeakMap,un=au(class extends v2{render(a){return ra}update(a,[n]){var i;const s=n!==this.G;return s&&this.G!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.G=n,this.ht=(i=a.options)==null?void 0:i.host,this.rt(this.ct=a.element)),ra}rt(a){if(this.isConnected||(a=void 0),typeof this.G=="function"){const n=this.ht??globalThis;let s=Vf.get(n);s===void 0&&(s=new WeakMap,Vf.set(n,s)),s.get(this.G)!==void 0&&this.G.call(this.ht,void 0),s.set(this.G,a),a!==void 0&&this.G.call(this.ht,a)}else this.G.value=a}get lt(){var a,n;return typeof this.G=="function"?(a=Vf.get(this.ht??globalThis))==null?void 0:a.get(this.G):(n=this.G)==null?void 0:n.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function De(a,n,s){return a?n(a):s==null?void 0:s(a)}const b2=nt`
	.discord-media-attachment-non-visual-media-item-container {
		justify-self: start;
		align-self: start;
		margin-top: 8px;
		max-width: 100%;
		display: flex;
		flex-direction: column;
		position: relative;
	}

	.discord-media-attachment-mosaic-item-media {
		border-radius: 2px;
		display: flex;
		flex-flow: row nowrap;
		height: 100%;
		max-height: inherit;
		max-width: 100%;
		position: relative;
	}

	.discord-media-attachment-controls {
		width: 100%;
		display: flex;
		align-items: center;
		margin-top: 4px;
		background-color: hsl(0 calc(1 * 0%) 0% / 0.6);
		border-radius: 3px;
	}

	.discord-media-attachment-video-button {
		margin-right: 8px;
	}

	.discord-media-attachment-control-icon {
		display: block;
		width: 24px;
		height: 24px;
		padding: 4px;
		cursor: pointer;
		flex: 0 0 auto;
		opacity: 0.6;
	}

	.discord-media-attachment-duration-time-wrapper {
		flex: 0 0 auto;
		margin: 4px;
		height: 12px;
	}

	.discord-media-attachment-duration-time-display {
		font-weight: 500;
		display: inline-block;
		font-family:
			'gg mono', 'Source Code Pro', Consolas, 'Andale Mono WT', 'Andale Mono', 'Lucida Console', 'Lucida Sans Typewriter', 'DejaVu Sans Mono',
			'Bitstream Vera Sans Mono', 'Liberation Mono', 'Nimbus Mono L', Monaco, 'Courier New', Courier, monospace;
		font-size: 12px;
		line-height: 12px;
		vertical-align: text-top;
	}

	.discord-media-attachment-duration-time-separator {
		margin: 0 2px;
	}

	.discord-media-attachment-non-visual-media-item-container:hover .discord-button-download-attachment {
		display: block !important;
	}

	.discord-button-download-attachment {
		display: none;
		position: absolute;
		top: -8px;
		right: -8px;
		border-radius: 5px;
		outline: color-mix(in oklab, hsl(220 calc(1 * 6.5%) 18% / 1) 100%, black 0%);
		background-color: color-mix(in oklab, hsl(223 calc(1 * 6.7%) 20.6% / 1) 100%, black 0%);
	}

	.discord-link-download-attachment {
		color: color-mix(in oklab, hsl(215 calc(1 * 8.8%) 73.3% / 1) 100%, black 0%);
		display: flex;
	}

	.discord-icon-download {
		padding: 6px;
	}
`;var yr=function(a,n,s,i,l,c){function d(x){if(x!==void 0&&typeof x!="function")throw new TypeError("Function expected");return x}for(var h=i.kind,g=h==="getter"?"get":h==="setter"?"set":"value",p=!n&&a?i.static?a:a.prototype:null,m=n||(p?Object.getOwnPropertyDescriptor(p,i.name):{}),u,S=!1,w=s.length-1;w>=0;w--){var z={};for(var _ in i)z[_]=_==="access"?{}:i[_];for(var _ in i.access)z.access[_]=i.access[_];z.addInitializer=function(x){if(S)throw new TypeError("Cannot add initializers after decoration has completed");c.push(d(x||null))};var b=(0,s[w])(h==="accessor"?{get:m.get,set:m.set}:m[g],z);if(h==="accessor"){if(b===void 0)continue;if(b===null||typeof b!="object")throw new TypeError("Object expected");(u=d(b.get))&&(m.get=u),(u=d(b.set))&&(m.set=u),(u=d(b.init))&&l.unshift(u)}else(u=d(b))&&(h==="field"?l.unshift(u):m[g]=u)}p&&Object.defineProperty(p,i.name,m),S=!0},Pa=function(a,n,s){for(var i=arguments.length>2,l=0;l<n.length;l++)s=i?n[l].call(a,s):n[l].call(a);return i?s:void 0};let y2=(()=>{var Z,he,xe,V,T,W,ze,k,D;let a=at,n,s=[],i=[],l,c=[],d=[],h,g=[],p=[],m,u=[],S=[],w,z=[],_=[],b,x=[],O=[],R,C=[],A=[],I,H=[],$=[];return D=class extends a{constructor(){super(...arguments);Be(this,"mediaComponentRef",cl());Be(this,"seekSliderRef",cl());Be(this,"volumeControlRef",cl());Be(this,"volumeControlInputRef",cl());B(this,Z,Pa(this,s,"0:00"));B(this,he,(Pa(this,i),Pa(this,c,"")));B(this,xe,(Pa(this,d),Pa(this,g,!1)));B(this,V,(Pa(this,p),Pa(this,u,null)));B(this,T,(Pa(this,S),Pa(this,z,!1)));B(this,W,(Pa(this,_),Pa(this,x,1)));B(this,ze,(Pa(this,O),Pa(this,C,!1)));B(this,k,(Pa(this,A),Pa(this,H,!1)));Be(this,"whilePlaying",(Pa(this,$),()=>{if(this.mediaComponentRef.value&&this.seekSliderRef.value){this.seekSliderRef.value.value=Math.floor(this.mediaComponentRef.value.currentTime).toString();const re=Number(this.seekSliderRef.value.value);this.currentPlaybackPosition=this.calculateTime(re),this.style.setProperty("--seek-before-width",`${re/Number(this.seekSliderRef.value.max)*100}%`),this.raf=requestAnimationFrame(this.whilePlaying)}}));Be(this,"handleClickPlayPauseIcon",()=>{this.mediaComponentRef.value&&(this.hasEnded&&(this.hasEnded=!1),this.isPlaying?(this.mediaComponentRef.value.pause(),this.raf!==null&&cancelAnimationFrame(this.raf),this.isPlaying=!1):(this.mediaComponentRef.value.play(),requestAnimationFrame(this.whilePlaying),this.isPlaying=!0))});Be(this,"handleSpaceToPlayPause",re=>{re.code==="Space"&&(re.preventDefault(),re.stopPropagation(),this.handleClickPlayPauseIcon())});Be(this,"handleSeekSliderChange",()=>{this.mediaComponentRef.value&&this.seekSliderRef.value&&(this.mediaComponentRef.value.currentTime=Number(this.seekSliderRef.value.value),this.mediaComponentRef.value.paused||requestAnimationFrame(this.whilePlaying))});Be(this,"mediaMetadataLoaded",()=>{this.mediaComponentRef.value&&(this.displayMediaDuration(),this.setSliderMax(),this.displayBufferedAmount())})}get currentPlaybackPosition(){return L(this,Z)}set currentPlaybackPosition(re){U(this,Z,re)}get totalMediaDuration(){return L(this,he)}set totalMediaDuration(re){U(this,he,re)}get isPlaying(){return L(this,xe)}set isPlaying(re){U(this,xe,re)}get raf(){return L(this,V)}set raf(re){U(this,V,re)}get isMuted(){return L(this,T)}set isMuted(re){U(this,T,re)}get currentVolume(){return L(this,W)}set currentVolume(re){U(this,W,re)}get hasEnded(){return L(this,ze)}set hasEnded(re){U(this,ze,re)}get hasRunUpdate(){return L(this,k)}set hasRunUpdate(re){U(this,k,re)}calculateTime(re){const j=Math.floor(re/60),G=Math.floor(re%60),ee=G<10?`0${G}`:`${G}`;return`${j}:${ee}`}displayMediaDuration(){this.mediaComponentRef.value&&(this.totalMediaDuration=this.calculateTime(this.mediaComponentRef.value.duration))}setSliderMax(){this.mediaComponentRef.value&&this.seekSliderRef.value&&(this.seekSliderRef.value.max=Math.floor(this.mediaComponentRef.value.duration).toString())}displayBufferedAmount(){if(this.mediaComponentRef.value&&this.seekSliderRef.value){const re=this.mediaComponentRef.value.buffered.length-1;if(re>=0){const j=Math.floor(this.mediaComponentRef.value.buffered.end(re));this.style.setProperty("--buffered-width",`${j/Number(this.seekSliderRef.value.max)*100}%`)}}}handleEnded(){this.mediaComponentRef.value&&(this.mediaComponentRef.value.pause(),this.raf!==null&&cancelAnimationFrame(this.raf),this.isPlaying=!1,this.hasEnded=!0)}handleClickMuteIcon(){this.mediaComponentRef.value&&(this.isMuted?(this.mediaComponentRef.value.muted=!1,this.isMuted=!1):(this.mediaComponentRef.value.muted=!0,this.isMuted=!0))}handleSeekSliderInput(re){const j=re.target;this.style.setProperty("--seek-before-width",`${Number(j.value)/Number(j.max)*100}%`),this.seekSliderRef.value&&(this.currentPlaybackPosition=this.calculateTime(Number(this.seekSliderRef.value.value))),this.mediaComponentRef.value&&!this.mediaComponentRef.value.paused&&this.raf!==null&&cancelAnimationFrame(this.raf)}handleVolumeSliderInput(re){const j=re.target,{value:G}=j;if(this.mediaComponentRef.value){const ee=Number(G)/100;this.currentVolume=ee,this.mediaComponentRef.value.volume=ee}}handleVolumeVerticalEnter(){this.volumeControlRef.value&&this.style.setProperty("--volume-slider-opacity","1")}handleVolumeVerticalLeave(){this.volumeControlRef.value&&this.style.setProperty("--volume-slider-opacity","0")}handleVolumeVerticalFocus(){this.handleVolumeVerticalEnter(),this.addEventListener("keydown",this.handleVolumeControlKeyboard)}handleVolumeVerticalBlur(){this.handleVolumeVerticalLeave(),this.removeEventListener("keydown",this.handleVolumeControlKeyboard)}handleVolumeControlKeyboard(re){let j=0;re.code==="ArrowDown"?j=-.1:re.code==="ArrowUp"&&(j=.1),j!==0&&this.adjustVolume(j,re)}adjustVolume(re,j){j.preventDefault(),j.stopPropagation();let G=this.currentVolume+re;G<.1?G=0:G>1&&(G=1),this.mediaComponentRef.value&&this.volumeControlInputRef.value&&(this.currentVolume=G,this.mediaComponentRef.value.volume=G,this.volumeControlInputRef.value.value=(G*100).toString())}shouldUpdate(re){return re.has("hasRunUpdate")&&re.size===1?!1:super.shouldUpdate(re)}firstUpdated(re){this.hasRunUpdate||(this.mediaComponentRef.value&&(this.mediaComponentRef.value.readyState>0?(this.displayMediaDuration(),this.setSliderMax(),this.displayBufferedAmount()):this.mediaComponentRef.value.addEventListener("loadedmetadata",this.mediaMetadataLoaded)),this.hasRunUpdate=!0,super.firstUpdated(re))}disconnectedCallback(){var re;super.disconnectedCallback(),(re=this.mediaComponentRef.value)==null||re.removeEventListener("loadedmetadata",this.mediaMetadataLoaded)}},Z=new WeakMap,he=new WeakMap,xe=new WeakMap,V=new WeakMap,T=new WeakMap,W=new WeakMap,ze=new WeakMap,k=new WeakMap,(()=>{const re=typeof Symbol=="function"&&Symbol.metadata?Object.create(a[Symbol.metadata]??null):void 0;n=[ai()],l=[ai()],h=[ai()],m=[ai()],w=[ai()],b=[ai()],R=[ai()],I=[ai()],yr(D,null,n,{kind:"accessor",name:"currentPlaybackPosition",static:!1,private:!1,access:{has:j=>"currentPlaybackPosition"in j,get:j=>j.currentPlaybackPosition,set:(j,G)=>{j.currentPlaybackPosition=G}},metadata:re},s,i),yr(D,null,l,{kind:"accessor",name:"totalMediaDuration",static:!1,private:!1,access:{has:j=>"totalMediaDuration"in j,get:j=>j.totalMediaDuration,set:(j,G)=>{j.totalMediaDuration=G}},metadata:re},c,d),yr(D,null,h,{kind:"accessor",name:"isPlaying",static:!1,private:!1,access:{has:j=>"isPlaying"in j,get:j=>j.isPlaying,set:(j,G)=>{j.isPlaying=G}},metadata:re},g,p),yr(D,null,m,{kind:"accessor",name:"raf",static:!1,private:!1,access:{has:j=>"raf"in j,get:j=>j.raf,set:(j,G)=>{j.raf=G}},metadata:re},u,S),yr(D,null,w,{kind:"accessor",name:"isMuted",static:!1,private:!1,access:{has:j=>"isMuted"in j,get:j=>j.isMuted,set:(j,G)=>{j.isMuted=G}},metadata:re},z,_),yr(D,null,b,{kind:"accessor",name:"currentVolume",static:!1,private:!1,access:{has:j=>"currentVolume"in j,get:j=>j.currentVolume,set:(j,G)=>{j.currentVolume=G}},metadata:re},x,O),yr(D,null,R,{kind:"accessor",name:"hasEnded",static:!1,private:!1,access:{has:j=>"hasEnded"in j,get:j=>j.hasEnded,set:(j,G)=>{j.hasEnded=G}},metadata:re},C,A),yr(D,null,I,{kind:"accessor",name:"hasRunUpdate",static:!1,private:!1,access:{has:j=>"hasRunUpdate"in j,get:j=>j.hasRunUpdate,set:(j,G)=>{j.hasRunUpdate=G}},metadata:re},H,$),re&&Object.defineProperty(D,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:re})})(),D})();const _2=nt`
	.discord-media-attachment-horizontal {
		width: 100%;
		display: flex;
		align-self: stretch;
	}

	.discord-media-attachment-media-bar-interaction {
		position: relative;
		flex: 1 1 auto;
		align-self: stretch;
		display: flex;
		align-items: center;
		cursor: pointer;
		margin: 0 7px;
	}

	.discord-media-attachment-playback-control {
		position: relative;
		flex: 1 1 auto;
		height: 6px;
		background-color: hsl(210 calc(1 * 9.3%) 78.8% / 0.3);
	}

	.discord-media-attachment-playback-control:hover {
		box-shadow: 0 1px 1px hsl(0 calc(1 * 0%) 0% / 0.3);
	}

	.discord-media-attachment-playback-control::before {
		background-color: hsl(210 calc(1 * 9.3%) 78.8% / 0.3);
		left: -3px;
		border-radius: 3px 0 0 3px;
		content: '';
		position: absolute;
		top: 0;
		height: 100%;
		width: 3px;
		z-index: 1;
	}

	input[type='range'].discord-media-attachment-playback-control::-webkit-slider-runnable-track {
		width: 2.47264%;
		height: 100%;
		cursor: pointer;
		opacity: 1;
		background: linear-gradient(to right, hsl(199 100% calc(1 * 69%) / 1) var(--buffered-width));
	}

	input[type='range'].discord-media-attachment-playback-control::before {
		position: absolute;
		content: '';
		top: 0;
		width: var(--seek-before-width);
		height: 100%;
		z-index: 3;
		background-color: hsl(199 100% calc(1 * 69%) / 1);
		cursor: pointer;
	}

	input[type='range'].discord-media-attachment-playback-control::-webkit-slider-thumb {
		position: relative;
		cursor: pointer;
		border-radius: 3px;
		width: auto;
		height: 18px;
		line-height: 18px;
		text-align: center;
		font-weight: 600;
		font-size: 12px;
		color: hsl(0 calc(1 * 0%) 97.6% / 1);
		opacity: 1;
		transition: opacity.2s ease-out;
		pointer-events: none;
		-webkit-appearance: none;
		box-sizing: content-box;
		background-color: hsl(0 calc(1 * 0%) 0% / 1);
		margin: -5px 0 0 0;
		z-index: 4;
	}

	input[type='range'].discord-media-attachment-playback-control:active::-webkit-slider-thumb {
		transform: scale(1.2);
		filter: brightness(85%);
	}

	input[type='range'].discord-media-attachment-playback-control::-moz-range-track {
		width: 2.47264%;
		height: 100%;
		cursor: pointer;
		opacity: 1;
		background: linear-gradient(to right, hsl(199 100% calc(1 * 69%) / 1) var(--buffered-width));
	}

	input[type='range'].discord-media-attachment-playback-control::-moz-range-progress {
		background-color: hsl(199 100% calc(1 * 69%) / 1);
	}

	input[type='range'].discord-media-attachment-playback-control::-moz-focus-outer {
		border: 0;
	}

	input[type='range'].discord-media-attachment-playback-control::-moz-range-thumb {
		border-radius: 50%;
		position: relative;
		cursor: pointer;
		line-height: 18px;
		text-align: center;
		font-weight: 600;
		font-size: 12px;
		opacity: 1;
		transition: opacity.2s ease-out;
		pointer-events: none;
		-webkit-appearance: none;
		box-sizing: content-box;
		background: #007db5;
		margin: -5px 0 0 0;
	}

	input[type='range'].discord-media-attachment-playback-control:active::-moz-range-thumb {
		transform: scale(1.2);
		filter: brightness(85%);
	}
`,x2=nt`
	.discord-media-attachment-flex {
		display: flex;
	}

	.discord-media-attachment-flex-container {
		justify-content: flex-end;
		align-items: center;
		flex-direction: column;
		display: flex;
		position: relative;
	}

	.discord-media-attachment-button-slider {
		margin-bottom: 4px;
		margin-left: -4px;
		position: absolute;
		bottom: calc(100% + 16px);
		left: -78px;
		right: 0;
		height: 50px;
		opacity: var(--volume-slider-opacity);
		-webkit-app-region: no-drag;
	}

	.discord-media-attachment-volume-vertical {
		display: flex;
		align-items: center;
		transform-origin: top;
		transform: rotate(270deg);
		height: 54px;
		width: 140px;
	}

	.discord-media-attachment-button {
		cursor: pointer;
		line-height: 0;
		width: auto;
		background: transparent;
		color: currentColor;
		border: 0;
		padding: 0;
		margin: 0;
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		box-sizing: border-box;
		border-radius: 3px;
		font-size: 14px;
		font-weight: 500;
		-webkit-user-select: none;
		-moz-user-select: none;
		user-select: none;
	}

	.discord-media-attachment-button-content {
		--custom-button-link-underline-offset: 1px;
		--button--underline-color: transparent;
		--custom-button-link-underline-width: 1px;
		--custom-button-link-underline-stop: calc(var(--custom-button-link-underline-width) + var(--custom-button-link-underline-offset));

		background-image: linear-gradient(
			to top,
			transparent,
			transparent var(--custom-button-link-underline-offset),
			var(--button--underline-color) var(--custom-button-link-underline-offset),
			var(--button--underline-color) var(--custom-button-link-underline-stop),
			transparent var(--custom-button-link-underline-stop)
		);
	}

	.discord-media-attachment-button-control-icon {
		display: block;
		width: 24px;
		height: 24px;
		padding: 4px;
		cursor: pointer;
		flex: 0 0 auto;
		opacity: 0.6;
	}

	.discord-media-attachment-volume-slider {
		position: relative;
		height: 6px;
		background-color: hsl(210 calc(1 * 9.3%) 78.8% / 0.3);
		width: 88px;
	}

	.discord-media-attachment-volume-slider:hover {
		box-shadow: 0 1px 1px hsl(0 calc(1 * 0%) 0% / 0.3);
	}

	.discord-media-attachment-volume-slider::before {
		background-color: hsl(210 calc(1 * 9.3%) 78.8%/0.3);
		left: 0px;
		border-radius: 3px 0 0 3px;
		content: '';
		position: absolute;
		top: 0;
		height: 6px;
		width: 100%;
		z-index: 3;
	}

	input[type='range'].discord-media-attachment-volume-slider::-webkit-slider-runnable-track {
		background-color: hsl(210 calc(1 * 9.3%) 78.8%/0.3);
		height: 2.47264%;
		width: 100%;
		cursor: grab;
		border-radius: 8px;
	}

	input[type='range'].discord-media-attachment-volume-slider::-webkit-slider-thumb {
		position: relative;
		bottom: 8px;
		z-index: 4;
	}

	input[type='range'].discord-media-attachment-volume-slider:active::-webkit-slider-thumb {
		transform: scale(1.2);
		filter: brightness(85%);
	}
`;class Z9 extends v2{constructor(){super(...arguments);Be(this,"host");Be(this,"element");Be(this,"prevData",{});Be(this,"eventData",{})}render(s){return ra}update(s,[i]){var l;this.element!==s.element&&(this.element=s.element),this.host=((l=s.options)==null?void 0:l.host)??this.element,this.apply(i),this.groom(i),this.prevData={...i}}apply(s){if(!s)return;const{prevData:i,element:l}=this;for(const[c,d]of Object.entries(s)){if(d===i[c])continue;const h=c.slice(1);switch(c[0]){case"@":this.eventData[h]=d,this.applyEvent(h,d);break;case".":l[h]=d;break;case"?":d?l.setAttribute(h,""):l.removeAttribute(h);break;default:d===null?l.removeAttribute(c):l.setAttribute(c,String(d));break}}}groom(s){const{prevData:i,element:l}=this;if(i)for(const[c,d]of Object.entries(i)){const h=c.slice(1);if(!s||!(c in s)&&l[h]===d)switch(c[0]){case"@":this.groomEvent(h,d);break;case".":l[h]=void 0;break;case"?":l.removeAttribute(h);break;default:l.removeAttribute(c);break}}}applyEvent(s,i){const{prevData:l,element:c}=this;this.eventData[s]=i,l[s]&&c.removeEventListener(s,this,i),c.addEventListener(s,this,i)}groomEvent(s,i){const{element:l}=this;Reflect.deleteProperty(this.eventData,s),l.removeEventListener(s,this,i)}handleEvent(s){const i=this.eventData[s.type];typeof i=="function"?i.call(this.host,s):i.handleEvent(s)}disconnected(){const{eventData:s,element:i}=this;for(const[l,c]of Object.entries(s)){const d=l.slice(1);i.removeEventListener(d,this,c)}}reconnected(){const{eventData:s,element:i}=this;for(const[l,c]of Object.entries(s)){const d=l.slice(1);i.addEventListener(d,this,c)}}}const Pe=au(Z9),q9=Ie`
	<path d="M5.688 3.5v.438H5.25v.438h-.438V1.313h-.438V.875h-.436V.438H3.5v6.125h2.625v-.438H5.25v-.438h.438v-.438h.438v-.438h.438V3.5z" fill="#b79cf8"/>
	<path d="M3.063.438v.438h-.438v.438h-.437v3.5h-.875v-.438H.438v1.75h.438v.438h2.625V.438z" fill="#ff7fc0"/>
	<path d="M3.938 0h-.875v.438h.875zm-.875.438h-.438v.438h.438z" fill="#000"/>
	<path d="M3.938.438h-.875v.438h.875zm-.875.437h-.438v.438h.438zm0 1.75h-.438v.438h.438z" fill="#f0f0f0"/>
	<path d="M2.188 5.25H1.75v.438h.438z" fill="#ffa5d3"/>
	<path d="M2.625 5.25h-.437v.438h.438zm-1.75.438H.438v.438h.438zm2.625.438H.875v.438H3.5z" fill="#ff1c90"/>
	<path d="M1.75 5.688h-.437v.438h.438zm-.438-.438H.875v.438h.438zm1.313-.875V3.5h-.437v1.313h.438v1.313h.438v-1.75zm.438-3.5v1.313h-.438v.438h.438v1.313h.438V.875z" fill="#ffa5d3"/>
	<path d="M6.125 3.5h-.438v.438h.438zm-.438.438h-.438v.438h.438zm-3.5.875h-.874v.438h.875zm-.875-.438H.438v.438h.875z" fill="#f0f0f0"/>
	<path d="M.875 5.25v-.875H.438v.875z" fill="#f0f0f0"/>
	<path d="M4.813 1.313h-.438v.438h.438z" fill="#cdbafa"/>
	<path d="M2.625 1.313h-.437v1.313h.438z" fill="#f0f0f0"/>
	<path d="M4.375.438h-.437v.438h.438zm.438.438h-.438v.438h.438zM2.625 4.814h-.437v.438h.438zm3.938 0h-.438v.438h.438zm-.875.438v.438H5.25v.438h.875v-.875zm.438.875v.438H.875v.438h5.688v-.875zM.875 6.125H.438v.438h.438zM7 3.062H5.687V3.5H7zm-5.687.876H0v.438h1.313z" fill="#000"/>
	<path d="M.438 6.125V3.938H0v2.188zm6.563-1.313V3.5h-.438v1.313zM2.625.875h-.437v.438h.438zm-.875.438v3.063h-.437v.438h.875V1.313zm3.5 2.188V1.313h-.438v3.063h.438v-.438h.438V3.5z" fill="#000"/>
	<path d="M3.938.875H3.5v.875h.438zm.438 1.75V1.75h-.438V3.5h.438v.438h.438V2.625zm.875 1.75h-.438v.438h.438zm-1.313 0H3.5v1.313h.438zm.875 1.313h-.438v.438h.438zm0-.875h-.438v.438h.438zm.438.438h-.438v.438h.438z" fill="#cdbafa"/>
	<path d="M5.25 6.125v-.438h-.438v.438H3.5v.438h2.625v-.438zm.438-.875H5.25v.438h.438zm.438-.438h-.438v.438h.438z" fill="#816bee"/>
`;function Y9(a={}){return F`<svg
		${Pe(a)}
		aria-hidden="true"
		role="img"
		width="14"
		height="14"
		viewBox="0 0 7 7"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		${q9}
	</svg>`}const F9=Ie`
	<path d="M4.375 1.75v-.437h-.437V.438h-.875v.875h-.438v.438h-.437v.438h.438v.438h.438v.438h.875v-.44h.438v-.437h.438V1.75z" fill="#47baff"/>
	<path d="M4.375 5.25v.438h-.437v.875h-.875v-.875h-.438V5.25h-.437v-.438h.438v-.438h.438v-.436h.875v.438h.438v.438h.438v.438z" fill="#ff2c52"/>
	<path d="M3.063 0v.438h.875V0z" fill="#000"/>
	<path d="M3.063.438v.438h.875V.438z" fill="#f0f0f0"/>
	<path d="M3.063 2.625v.438h.875v-.438z" fill="#4282d8"/>
	<path d="M3.063.438h-.438v.875h.438zM.438 3.063H0v.875h.438zm.875 0v-.438H.438v.438zm1.313-1.75h-.438v.438h.438z" fill="#000"/>
	<path d="M2.625 1.75h-.437v.438h.438zm.438-.438h-.438v.438h.438zm0 2.625v.438h.875v-.437z" fill="#f0f0f0"/>
	<path d="M3.063 6.125v.438h.875v-.438zm0-.875h-.438v.438h.438zm-.438-.438h-.437v.438h.438z" fill="#be0351"/>
	<path d="M3.063 4.375h-.438v.438h.438z" fill="#f0f0f0"/>
	<path d="M3.938 5.688h.438V5.25h-.438zm.438-.438h.438v-.438h-.438zm-.438-.438h.438v-.438h-.438z" fill="#be0351"/>
	<path d="M3.5 1.75h-.437v.438h.438z" fill="#f0f0f0"/>
	<path d="M4.375 2.188h-.437v.438h.438zm.438-.438h-.438v.438h.438z" fill="#4282d8"/>
	<path d="M5.25 4.375h.438v-.437h.875v-.875h-.875v-.438H5.25v-.437h-.438v.438h-.438v.438h-.436v.875h.438v.438h.438v.438h.438z" fill="#C7C7C7"/>
	<path d="M6.563 3.063h-.438v.875h.438z" fill="#707070"/>
	<path d="M5.25 2.625v-.437h-.438v.438zm-.438.438v-.438h-.438v.438z" fill="#fff"/>
	<path d="M4.813 4.375v-.437h-.438v.438zm-.438-.438V3.5h-.437v.438zm1.313.438v-.437H5.25v.438zm-.438.438v-.438h-.438v.438z" fill="#707070"/>
	<path d="M1.75 4.375h-.437v-.437H.438v-.875h.875v-.438h.438v-.437h.438v.438h.438v.438h.438v.875h-.44v.438h-.437v.438H1.75z" fill="#C7C7C7"/>
	<path d="M.438 3.938h.438v-.875H.438z" fill="#fff"/>
	<path d="M2.625 3.938h.438v-.875h-.438z" fill="#707070"/>
	<path d="M2.188 2.625v-.437H1.75v.438zm-.438.438v-.438h-.437v.438zm.438.438v-.438H1.75v.438z" fill="#fff"/>
	<path d="M2.625 4.375v-.437h-.437v.438zm-.438.438v-.438H1.75v.438z" fill="#707070"/>
	<path d="M2.188 1.75H1.75v.438h.438zm.438.438h-.438v.438h.438zm.438.438h-.439v.438h.438zm.875.438h-.876v.875h.875zm.438.875h-.439v.438h.438zm.438.438h-.438v.438h.438zM1.75 2.188h-.437v.438h.438zm2.188 4.813v-.438h-.875v.438zm-.875-1.313h-.438v.875h.438zM.438 3.938v.438h.875v-.438zm2.188 1.313h-.438v.438h.438zm-.438-.438H1.75v.438h.438zm-.438-.438h-.437v.438h.438zm2.188-3.063h.438V.438h-.438zm2.625 2.625h.438v-.874h-.438zm0-.875v-.437h-.875v.438zM4.375 1.749h.438v-.436h-.438zm.438.438h.438V1.75h-.438zm-.438.438h.438v-.437h-.438zm-.437.438h.438v-.438h-.438zM2.625 4.376h.438v-.438h-.438zm-.438.438h.438v-.438h-.437z" fill="#000"/>
	<path d="M4.813 2.188h.438V1.75h-.438zm.438.438h.438v-.438h-.438zM3.938 6.564h.438v-.875h-.438zm1.75-2.625v.438h.875v-.439zm-1.313 1.75h.438v-.438h-.438zm.438-.438h.438v-.438h-.438zm.438-.438h.438v-.438h-.438z" fill="#000"/>
`;function G9(a={}){return F`<svg
		${Pe(a)}
		aria-hidden="true"
		role="img"
		width="14"
		height="14"
		viewBox="0 0 7 7"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		${F9}
	</svg>`}const X9=Ie`
	<path d="M6.125 3.063v-.438h-.438v.438H4.374v-.438h-.436V1.313h.438V.875H3.063v1.75h-.438v.438H.438v.875h.438v.438h.438v-.438h1.313v.438h.438v1.313h-.44v.438h.438v.438h.875v-.438h.438v-.438h-.438V4.376h.438v-.438h1.313v.438h.438v-.438h.438v-.875z" fill="#ffb84b"/>
	<path d="M3.938 0h-.875v.438h.875zM2.625.875H1.313v.438h1.313zm-1.312.438H.875v1.313h.438zm1.75 0h-.438v1.313h.438zm1.313 0h-.438v1.313h.438zm1.75 0h-.438v1.313h.438zM5.688.875H4.375v.438h1.313zm-3.063 1.75H1.313v.438h1.313zm3.063 0H4.375v.438h1.313zM3.063.438h-.438v.438h.438z" fill="#000"/>
	<path d="M2.625 1.313h-.437v.438h.438zm-.437.437H1.75v.438h.438zm3.5-.438H5.25v.438h.438zm-.438.438h-.438v.438h.438zm.438 2.625H5.25v.438h.438zm-.438.438h-.438v.438h.438zm-2.625-.438h-.437v.438h.438zm-.438.438H1.75v.438h.438z" fill="#57595f"/>
	<path d="M4.375.438h-.437v.438h.438zM.438 3.063H0v.875h.438z" fill="#000"/>
	<path d="M2.188 1.75v.438h-.875v.438h1.313V1.75zm3.063 0v.438h-.875v.438h1.313V1.75zM2.188 4.813v.438h-.875v.438h1.313v-.875zm3.063 0v.438h-.875v.438h1.313v-.875z" fill="#35363a"/>
	<path d="M.875 3.938H.438v.438h.438zm0-1.313H.438v.438h.438zM7 3.063h-.438v.875H7z" fill="#000"/>
	<path d="M6.563 3.063h-.438v.875h.438z" fill="#ba3500"/>
	<path d="M.875 3.063H.438v.875h.438z" fill="#f0f0f0"/>
	<path d="M6.563 2.625h-.438v.438h.438zm0 1.313h-.438v.438h.438z" fill="#000"/>
	<path d="M6.125 3.938h-.438v.438h.438zm-3.062 0h-.438v.438h.438zm-1.75 0H.875v.438h.438zm3.063 0h-.438v.438h.438z" fill="#ba3500"/>
	<path d="M3.938 6.563h-.875v.438h.875zm-1.313-.875H1.313v.438h1.313zM1.312 4.375H.875v1.313h.438zm1.75 0h-.437v1.313h.438zm1.313 0h-.437v1.313h.438zm1.75 0h-.438v1.313h.438zm-.438 1.313H4.374v.438h1.313zm-3.062-1.75H1.313v.438h1.313zm3.063 0H4.375v.438h1.313z" fill="#000"/>
	<path d="M2.625 3.5H1.313v.438h1.313zm3.063 0H4.375v.438h1.313z" fill="#ba3500"/>
	<path d="M3.063 6.125h-.438v.438h.438zm1.313 0h-.438v.438h.438z" fill="#000"/>
	<path d="M3.938 6.125h-.875v.438h.875z" fill="#ba3500"/>
	<path d="M3.938.438h-.875v.438h.875zm-.875.437h-.438v.438h.438V.438Z" fill="#f0f0f0"/>
	<path d="M4.375 5.688h-.437v.438h.438z" fill="#ba3500"/>
	<path d="M2.188 1.313h-.875v.875h.438V1.75h.438zm3.063 0h-.875v.875h.438V1.75h.438zM2.188 4.376h-.875v.875h.438v-.438h.438zm3.063 0h-.875v.875h.438v-.438h.438z" fill="#d8d8d8"/>
	<path d="M3.938 2.188V1.75H3.5V.875h-.437v1.313zm0 .438H3.5v.438h-.437v.438h-.438v.438h.438v.875h.438v1.313h.438v-1.75H3.5V3.5h.875v-.437h-.437zm2.188.438h-.438v.438h.438zm-3.063-.439h-.438v.438h.438zm-1.75.438H.875v.438h.438zm.875 0H1.75v.438h.438z" fill="#fd6214"/>
`;function Q9(a={}){return F`<svg
		${Pe(a)}
		aria-hidden="true"
		role="img"
		width="14"
		height="14"
		viewBox="0 0 7 7"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		${X9}
	</svg>`}const K9=Ie`
	<path d="M5.688 2.625V1.75H5.25V.438h-.438v.438h-.438v.438h-.436v.438H3.5v.438H1.313v.438H.875v.875H.438v1.75h.438v.438h.438v.438h.438v.438h3.5v-.438h.438v-.438h.438V2.625z" fill="#fd6214"/>
	<path d="M0 3.5v1.75h.438V3.5zm6.563.438v1.313h.438V3.938zm-.438-1.313v1.313h.438V2.625zm-.438-.875v.875h.438V1.75z" fill="#000"/>
	<path d="M6.125 3.938v1.313h.438V3.938zm-.438-1.313v1.313h.438V2.625zm-.438-.875v.875h.438V1.75z" fill="#ba3500"/>
	<path d="M.438 2.625V3.5h.438v-.875zm2.625-1.313h-.438v.438h.438zm.875 0H3.5v.438h.438zM3.5 1.75h-.437v.438h.438zm-2.625.438v.438h.438v-.438zM.437 5.251v.438h.438v-.438zm.438.438v.438h.438v-.438zm.438.438v.438h.438v-.438zm4.813-.875v.438h.438v-.438zm-.438.438v.438h.438V5.69zm-.438.438v.438h.438v-.438zm-3.5.438v.438h3.5v-.438zM1.313 1.75v.438h.438V1.75zm.438-.438v.438h.438v-.437zm.438-.438v.438h.438V.875zm1.75 0v.438h.438V.875zm.438-.438v.438h.438V.438zm.438-.438v.438h.438V0z" fill="#000"/>
	<path d="M4.813.438v.438h.438V.438zm-.438.438v.438h.438V.875zm-.437.437v.438h.438v-.438zM3.5 1.75v.438h.438V1.75zm-1.312-.437v.438h.438v-.438zm-.438.437v.438h.438V1.75zm.875 0v.438h.438V1.75z" fill="#f0f0f0"/>
	<path d="M2.188 1.75v.438h.438V1.75z" fill="#fd6214"/>
	<path opacity=".5" d="M4.813 1.75v.438h.438V1.75zm.438 2.188V3.5h-.438v-.875h-.438v.438h-.437v.438H2.625v-.438h-.437v.875h-.875v.875h.438v.875h.438v.438h2.625v-.438h.438v-.875h.438v-.875z" fill="#fff"/>
	<path d="M1.313 2.188v.438h.438v-.438zm-.438.437V3.5h.438v-.875zm.875.875v.438h.438V3.5z" fill="#f0f0f0"/>
	<path d="M.875 5.25v.438h.438V5.25zm.438.438v.438h.438v-.438zm3.938 0v.438h.438v-.438zm.438-.438v.438h.438V5.25zm-3.938.875v.438h3.5v-.438z" fill="#ba3500"/>
	<path d="M.438 3.5v.875h.438V3.5zm4.375.875h-.438v-.437h-1.75v.438h-.437v.875h.438v.438h1.75v-.438h.438z" fill="#f0f0f0"/>
	<path d="M5.25.438v1.313h.438V.438z" fill="#000"/>
`;function W9(a={}){return F`<svg
		${Pe(a)}
		aria-hidden="true"
		role="img"
		width="14"
		height="14"
		viewBox="0 0 7 7"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		${K9}
	</svg>`}const J9=Ie`
	<path d="M6.563.875h-.438V.438H4.812v1.313h-.438V.875h-.436V.438h-.875v.438h-.438v.875h-.437V.438H.875v.438H.438v1.75h.438v.438h.875v.438h.438v.875h.438v.438h.438v.438h.875v-.438h.438v-.438h.438V3.5h.438v-.437h.875v-.438h.438z" fill="#ff7fc0"/>
	<path d="M3.938 0h-.875v.438h.875zm-1.75 0H.875v.438h1.313zm3.938 0H4.813v.438h1.313zm.438.438h-.438v.438h.438zm.438.438h-.438v1.75h.438zM4.377.438h-.439v.438h.438v.875h.438V.438zm-2.189 0v1.313h.438V.875h.438V.438zm-1.313 0H.438v.438h.438zM.438.875H0v1.75h.438zm.438 1.75H.438v.438h.438zm.875.438H.875v.438h.875zm4.375 0h-.875v.438h.875zm.438-.438h-.438v.438h.438zM5.251 3.938V3.5h-.438v.875h1.75v-.437zM1.75 3.5v.438H.438v.438h1.75V3.5zm-1.313.875H0v1.75h.438zm.438 1.75H.438v.438h.438zm5.25.438H.875v.438h5.25zm.438-.438h-.438v.438h.438zm.438-1.75h-.438v1.75h.438zm-4.376 0h-.437v.438h.438zm.438.438h-.438v.438h.438zm1.313 0h-.438v.438h.438zm.438-.438h-.438v.438h.438zm-.875.875h-.876v.438h.875z" fill="#000"/>
	<path d="M4.813 4.375v.438h-.438v.438h-.437v.438h-.875v-.438h-.438v-.438h-.437v-.438H.438v1.75h.438v.438h5.25v-.438h.438v-1.75z" fill="#6be473"/>
	<path d="M1.75 5.25h-.437v.438h.438zm-.438-.438H.875v.438h.438zM5.25 6.125v-.438h-.438v.438h-.874v-.438h-.875v.438h-.875v-.438H1.75v.438H.875v.438h5.25v-.438zm.438-.875H5.25v.438h.438zm.438-.438h-.438v.438h.438zm.438.875h-.438v.438h.438z" fill="#008456"/>
	<path d="M2.625 3.938h-.437v.438h.438zm.438.438h-.438v.438h.438zm1.313 0h-.438v.438h.438zm.438-.438h-.438v.438h.438zm.438-.875h-.438v.438h.438zm.875-.438h-.438v.438h.438zm.438-.875h-.438v.875h.438zM3.94 4.813h-.877v.438h.875z" fill="#ff1c90"/>
	<path d="M4.375 5.25h-.437v.438h.438zm.438-.438h-.438v.438h.438zm.438-.438h-.438v.438h.438zm-4.813.001v.875h.438v-.438h1.313v-.438zm.438-3.5H.438v.875h.438zM2.189.437H.875v.438h1.313zm.875.438h-.439v.438h.438zm.875-.438h-.876v.438h.875zm1.313 0h-.438v.875h.438V.875h.875V.438z" fill="#f0f0f0"/>
`;function eT(a={}){return F`<svg
		${Pe(a)}
		aria-hidden="true"
		role="img"
		width="14"
		height="14"
		viewBox="0 0 7 7"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		${J9}
	</svg>`}const tT=Ie`
	<path d="M3.063.875v.438h.875V.875zm.875-.438v.438h1.75V.438zm1.75.438v.438h.438V.875zm.438.438v.438h.438v-.438zm.438.438v2.188h.438V1.75zm-.438 2.188v.875h.438v-.876zm-.438.875v.438h.438v-.438zm-.875.438v.438h.875v-.438zm-.875.438v.438h.875V5.69zm-.875.438v.438h.875v-.438z" fill="#000"/>
	<path d="M6.563 1.75h-.438v-.437h-.438V.875H3.938v.438h-.875V.875h-1.75v.438H.875v.438H.438v2.188h.438v.875h.438v.438h.875v.438h.875v.438h.875V5.69h.875v-.438h.875v-.438h.438v-.876h.438z" fill="#ff7fc0"/>
	<path d="M6.563 1.75h-.438v2.188h.438zm-.438 2.188h-.438v.875h.438zm-4.812 0H.875v.875h.438zm4.375.875h-.875v.438h.875zm-.875.438h-.875v.438h.875zm-.875.438h-.875v.438h.875zm-.875-.438h-.875v.438h.875zm-.875-.438h-.875v.438h.875z" fill="#ff1b90"/>
	<path d="M1.313.438v.438h1.75V.438zM.875.875v.438h.438V.875zm-.437.438v.438h.438v-.438zM0 1.75v2.188h.438V1.75zm.438 2.188v.875h.438v-.875zm.438.875v.438h.438v-.438zm.438.438v.438h.875v-.438zm.875.438v.438h.875v-.438z" fill="#000"/>
	<path d="M1.313.875v.438h1.75V.875zm2.625 0v.438h1.75V.875zm-.875.438v.438h.875v-.438z" fill="#f0f0f0"/>
	<path opacity=".6" d="M4.813 2.625v-.437h-.875v.438h-.875v-.438h-.875v.438H1.75v1.313h.438v.438h.879v.438h.875v-.438h.871v-.439h.438V2.625z" fill="#fff"/>
	<path d="M5.688 1.313v.438h.438v-.438zm-4.813 0v.438h.438v-.438zm.438.438v.438h.438V1.75zM.438 1.75v.875h.438V1.75z" fill="#f0f0f0"/>
`;function aT(a={}){return F`<svg
		${Pe(a)}
		aria-hidden="true"
		role="img"
		width="14"
		height="14"
		viewBox="0 0 7 7"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		${tT}
	</svg>`}const iT=Ie`
	<path d="M6.125 2.625v.438H4.812v-.438h-.438v-.437h-.436V.875h.438V.438H.438v.438h.875v.438h.438v.438h.875v.875h-.438v.438H1.75v.875h-.437v.875H.875v.875H.438v.875h1.313v-.438h.875v-.438h.438v-.438h.438v-.438h.875v-.438h.438v-.437h.438v.438h.438v.438h.438v.438h.438V2.625z" fill="#ffe361"/>
	<path d="M6.125 0H4.812v.438h1.313zM1.75 6.563H.438v.438h1.313zm.875-.438H1.75v.438h.875zM1.313.875H.438v.438h.875zm.438.875v.438h.438v.438h.438V1.75zm0 1.313h-.438v.875h.438zm-.438.875H.875v.875h.438zm-.438.875H.438v.875h.438zm-.438.875H0v.875h.438zm3.938-.875H3.5v.438h.875zm0-4.813H.438v.438h3.938z" fill="#000"/>
	<path d="M4.375.438H.438v.438h3.938z" fill="#f0f0f0"/>
	<path d="M6.125 2.625H4.812v.438h1.313zM4.812.437h-.438v.438h.438z" fill="#000"/>
	<path d="M4.813.875h-.438v.875h.438zM6.126.437H4.813v.438h1.313z" fill="#f0f0f0"/>
	<path d="M6.125 2.188H4.812v.438h1.313z" fill="#ba3500"/>
	<path d="M.438.438H0v.438h.438zm1.313.875h-.438v.438h.438zm.438 1.313H1.75v.438h.438zM6.564.438h-.438v.438h.438zm.438.438h-.438v1.313h.438z" fill="#000"/>
	<path d="M6.563.875h-.438v1.313h.438z" fill="#ba3500"/>
	<path d="M7 2.625h-.438V5.25H7z" fill="#000"/>
	<path d="M6.563 2.625h-.438V5.25h.438z" fill="#ffb84b"/>
	<path d="M6.563 2.188h-.438v.438h.438zM4.375.875h-.437v1.313h.438zm.438 1.313h-.438v.438h.438z" fill="#000"/>
	<path d="M4.813 1.75h-.438v.438h.438z" fill="#ba3500"/>
	<path d="M3.063 5.688h-.438v.438h.438z" fill="#000"/>
	<path d="M4.375 3.063v.438h-.437v.438H3.5v.438h-.437v.438h-.438v.438h-.437v.438H1.75v.438h.875v-.438h.438v-.438h.438v-.438h.875v-.438h.438V3.063zM1.75 6.126h-.437v.438h.438z" fill="#ffb84b"/>
	<path d="M3.5 5.25h-.437v.438h.438z" fill="#000"/>
	<path d="M2.188 3.063H1.75v.438h.438zm.438-.438h-.438v.438h.438z" fill="#f0f0f0"/>
	<path d="M3.063 2.188h-.438v.438h.438zm.438-.438h-.438v.438h.438z" fill="#ffb84b"/>
	<path d="M2.625 3.5h-.437v.438h.438zm-.875.438h-.437v.438h.438zm-.438.875H.875v.438h.438zm-.438.875H.438v.438h.438z" fill="#f0f0f0"/>
	<path d="M4.813 4.375h-.438v.438h.438zm.438-.438h-.438v.438h.438zm.438.438h-.438v.438h.438zm.438.438h-.438v.438h.438zm.438.438h-.438v.438h.438z" fill="#000"/>
	<path d="M6.125.875H4.812v1.313h1.313z" fill="#fd6214"/>
`;function nT(a={}){return F`<svg
		${Pe(a)}
		aria-hidden="true"
		role="img"
		width="14"
		height="14"
		viewBox="0 0 7 7"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		${iT}
	</svg>`}const rT=Ie`
	<path d="M6.563 0.876V0.437H3.937v0.437H1.313v2.187H0.437v2.187h5.25v-2.186h0.876z" fill="#bcef42"/>
	<path d="M4.813 5.687v-0.437H2.187v0.437z" fill="#7fb134"/>
	<path d="M6.563 0.876V0.437H3.937v0.437zm-2.626 0.437V0.876H2.187v0.437z" fill="#fff"/>
	<path d="M1.313 4.813v0.437h0.876v-0.437zm4.376 -0.437h-0.437v0.876h0.437zm0.876 -2.187h-0.437v0.876h0.437zm-0.437 0.876h-0.437v1.313h0.437z" fill="#7fb134"/>
	<path d="M7 0.437h-0.437v2.626H7z" fill="#000"/>
	<path d="M1.313 3.937H0.876v2.626h0.437z" fill="#4a8359"/>
	<path d="M6.563 0H3.937v0.437h2.626zM4.813 5.687H2.187v0.437h2.626zM3.937 0.437H2.187v0.437h1.75zM2.187 0.876h-0.874v0.437h0.876zm-0.874 0.437H0.876v0.876h0.437zM0.437 3.063H0v2.187h0.437v1.313h0.437V5.25H0.437zh0.437v-0.876H0.437zm5.25 2.187h-0.876v0.437h0.876zm0.437 -0.876h-0.437v0.876h0.437zh0.437V3.063h-0.437zM1.75 5.687h0.437v-0.437h-0.874v1.313h0.437zm-0.437 0.876H0.876V7h0.437z" fill="#000"/>
	<path d="M0.876 3.063h0.437v-0.876H0.876zm-0.438 0.874h0.437v-0.874H0.437zm1.75 -2.626h-0.874v0.876h0.437v-0.437h0.437z" fill="#fff"/>
	<path d="M1.75 3.5h0.876v-0.437h-0.876zm0.876 -0.437h0.876v-0.437h-0.876zm0.876 -0.437h0.876v-0.438H3.5zm0.876 -0.437h0.437v-0.438h-0.437zm0.437 -0.437h0.437v-0.438H4.814z" fill="#4a8359"/>
	<path d="M2.187 1.75v0.437h0.437v-0.437z" fill="#fff"/>
	<path d="M1.313 3.5v0.437h0.437V3.5z" fill="#4a8359"/>
`;function sT(a={}){return F`<svg
		${Pe(a)}
		aria-hidden="true"
		role="img"
		width="14"
		height="14"
		viewBox="0 0 7 7"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		${rT}
	</svg>`}const lT=Ie`
	<path d="M2.188 2.625H1.75v.438H.875v.875H3.5v.875h-.437v.438h-.438v.438h-.437v.438H1.75v.438h.875v-.438h.438v-.438h.438v-.438h.438v-.438h.875v-.438h.438v-.437h.875v-.875H3.063v-.438h.438v-.437h.438V1.75h.438v-.437H3.5v.438h-.437v.438h-.875z" fill="#ffe361"/>
	<path d="M.438 3.063H0v.875h.438z" fill="#000"/>
	<path d="M.875 3.063H.438v.875h.438z" fill="#f0f0f0"/>
	<path d="M7 3.063h-.438v.875H7zm-5.687-.438H.438v.438h.875zm1.313-.875H1.75v.438h.875zm-.876.438h-.437v.438h.438z" fill="#000"/>
	<path d="M1.75 2.625h-.437v.438h.438zm.438-.438H1.75v.438h.438zm.438.438h-.438v.438h.438zm.438-.875h-.439v.438h.438zm.438-.438h-.439v.438h.438zm0 3.063h-.439v.438h.438zm-.438.438h-.439v.438h.438zm-.438.438h-.438v.438h.438zm-.438.438H1.75v.438h.438zm-.438.438h-.437v.438h.438z" fill="#f0f0f0"/>
	<path d="M5.25.875h-.438v.438h.438zm.438 3.063H5.25v.438h.438zm-.438.438h-.438v.438h.438zm-.875.438h-.437v.438h.438zm-.438.438H3.5v.438h.438zm2.625-1.75h-.438v.438h.438z" fill="#ffb84b"/>
	<path d="M6.563 3.063h-.438v.438h.438z" fill="#f0f0f0"/>
	<path d="M4.813 1.313h-.438v.438h.438zm-.438.438h-.437v.438h.438zm-.437.437H3.5v.438h.438zm-.438.437h-.437v.438h.438z" fill="#ffb84b"/>
	<path d="M4.375.875h-.437v.438h.438z" fill="#f0f0f0"/>
	<path d="M3.938.875h-.875v.438h.875zm-.875.438h-.438v.438h.438zM5.688 0H4.375v.438h1.313z" fill="#000"/>
	<path d="M5.688.438H4.375v.438h1.313z" fill="#f0f0f0"/>
	<path d="M6.563 2.625H3.5v.438h3.063zM4.375.437h-.437v.438h.438zm1.75 0h-.438v.438h.438zm-.438.438h-.438v.438h.438zm-.438.438h-.438v.438h.438zm-.438.438h-.438v.438h.438zm-.438.438h-.435v.438h.438zm2.188 1.75h-.875v.438h.875zm-1.313.875h-.875v.438h.875zm.438-.438h-.438v.438h.438zm-1.75 1.313h-.873v.438h.875zm.438-.438h-.436v.438h.438zm-1.75 1.313H1.313v.438h1.313zm.875-2.625H.438v.438h3.063zm-.438 2.188h-.436v.438h.438zm-1.75 0H.875v.438h.438zm.438-.438h-.436v.438h.438zm.438-.438H1.75v.438h.438zm.438-.438h-.437v.438h.438zm.438-.438h-.438v.438h.438z" fill="#000"/>
	<path d="M4.813.875h-.438v.438h.438z" fill="#ffe361"/>
`;function oT(a={}){return F`<svg
		${Pe(a)}
		aria-hidden="true"
		role="img"
		width="14"
		height="14"
		viewBox="0 0 7 7"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		${lT}
	</svg>`}const cT=Ie`
	<path d="M6.125 1.75v-.437H5.25V.438H3.5v.438h-.437v.438h-.438V.875H1.313v.438H.875v1.75H.438v1.313h.438v-.438h.438V3.5h2.188v-.875h.438v-.437h2.188v.438h.438V1.75z" fill="#b79cf8"/>
	<path d="M3.938 2.625v.438H3.5v.875h.438v.875h.875v.438h1.313v-.438h.438V2.625z" fill="#9af4dc"/>
	<path d="M1.75 4.375v1.75h.438v.438h1.313v-.438h.438v-1.75z" fill="#9af4dc"/>
	<path d="M3.5 6.125H2.188v.438h1.313zm2.625-1.313H4.812v.438h1.313zm.438-.438h-.438v.438h.438zM3.938 5.687H3.5v.438h.438z" fill="#6c9ca6"/>
	<path d="M3.938 3.063H3.5v.438h.438zm.875.438h-.438v.438h.438zm1.313-.875H3.938v.438h2.188z" fill="#f0f0f0"/>
	<path d="M3.5.438h-.437v.438h.438zm3.063.875h-.438v.438h.438zm-.438 2.188h-.438v.875h.438zm-2.187-.876H3.5v.438h.438z" fill="#000"/>
	<path d="M3.938 2.188H3.5v.438h.438z" fill="#816bee"/>
	<path d="M1.313 3.938H.875v.438h.438zm1.75 1.75h-.438v.438h.438zm-.438-.438h-.437v.438h.438z" fill="#000"/>
	<path d="M2.625 5.25h-.437v.438h.438zm3.063-.875H5.25v.438h.438zm-.438-.438h-.438v.438h.438zM2.187 6.125H1.75v.438h.438zm1.75 0H3.5v.438h.438zM.874 4.375H.438v.438h.438zm.438 1.75H.875v.438h.438zm-.438.438H.438v.438h.438zM6.563 1.75v.875h-.438v.438h.438v1.75h.438V1.75zM5.688.875V.438H5.25v.875h.875V.875zM2.625.438H1.313v.438h1.313zm3.063 2.625H4.375v.438h1.313zM3.063 4.376H1.75v.438h1.313zm.438 2.188H2.188v.438h1.313zM3.063.875h-.438v.438h.438zm-1.75 0H.875v.438h.438z" fill="#000"/>
	<path d="M2.625.875H1.313v.438h1.313zm.438.438h-.438v.438h.438zm-1.313.875h-.437v.438h.438zm-.875.875H.438v.438h.438zm.438-1.75H.875v.438h.438z" fill="#f0f0f0"/>
	<path d="M6.125 5.25H4.812v.438h1.313zm-1.75-.438V3.5h-.437v.438H3.5v.438h.438v1.75h.438v-.875h.438v-.438zm2.188 0h-.438v.438h.438zM.875 1.313H.438v1.75h.438zm-.437 1.75H0v1.313h.438zm1.313 1.75h-.438v1.313h.438zm1.75 0h-.438v.875h.438zm-3.063 0H0v1.75h.438zM5.25 0H3.5v.438h1.75z" fill="#000"/>
	<path d="M3.5.875h-.437v.438h.438zM5.25.437H3.5v.438h1.75z" fill="#f0f0f0"/>
	<path d="M6.125 2.188H3.938v.438h2.188z" fill="#000"/>
	<path d="M6.125 1.75v-.437h-.438v.438H3.938v.438h2.188v.438h.438V1.75z" fill="#816bee"/>
	<path d="M2.188 4.813H1.75v.438h.438z" fill="#f0f0f0"/>
	<path d="M3.063 2.625v.438h-1.75v.438h2.188v-.876z" fill="#816bee"/>
	<path d="M3.063 3.063v.438h-1.75v.438h2.188v-.876z" fill="#000"/>
	<path d="M1.313 3.5H.875v.438h.438zm-.438.438H.438v.438h.438z" fill="#816bee"/>
	<path d="M1.313 3.938v.438H.875v.438H.438v1.75h.438v-.438h.438V4.813h.438v-.438h1.75v-.437z" fill="#9af4dc"/>
	<path d="M1.313 4.375H.875v.438h.438zm-.438.438H.438v.438h.438z" fill="#f0f0f0"/>
	<path d="M1.313 5.688H.875v.438h.438zm-.438.438H.438v.438h.438z" fill="#6c9ca6"/>
	<path d="M3.5 3.938H1.313v.438h2.188z" fill="#f0f0f0"/>
`;function dT(a={}){return F`<svg
		${Pe(a)}
		aria-hidden="true"
		role="img"
		width="14"
		height="14"
		viewBox="0 0 7 7"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		${cT}
	</svg>`}const uT=Ie`
	<path d="M6.125 2.188v-.875h-.438V.875h-.438V.438h-.875v.438h.438v.438h.438v1.75h-.438v.438h-.438v.438H2.625V3.5h-.437v-.437H1.75v-1.75h.438V.875h.438V.438H1.75v.438h-.437v.438H.875v.875H.438v2.625h.438v.875h.438v.438h.875v.438h2.625v-.438h.875v-.438h.438v-.875h.438V2.188z" fill="#b79cf8"/>
	<path d="M2.625 0H1.75v.438h.875zM.875 1.313H.438v.875h.438zm1.313 0H1.75v1.75h.438zm2.188 2.188H2.625v.438h1.75z" fill="#000"/>
	<path d="M4.375 3.938h-1.75v.438h1.75z" fill="#f0f0f0"/>
	<path d="M.438 2.188H0v2.625h.438zm4.375 4.375H2.188v.438h2.625z" fill="#000"/>
	<path d="M.875 4.375H.438v.438h.438zm4.813.875h-.875v.438H2.188V5.25h-.875v-.438H.875v.875h.438v.438h.875v.438h2.625v-.438h.875v-.438h.438v-.875h-.438zm.875-.875h-.438v.438h.438z" fill="#816bee"/>
	<path d="M1.75.438h-.437v.438h.438zm-.437.437H.875v.438h.438z" fill="#000"/>
	<path d="M2.625.438H1.75v.438h.875zM1.75.875h-.437v.438h.438zm-.437.438H.875v.438h.438zm-.438.875H.438v.438h.438zm.438.438H.875v.438h.438zm.875.438H1.75v.438h.438zm.438.438h-.438v.438h.438zm2.625-.438h-.438v.438h.438zM4.813.439h-.438v.438h.438zm0 3.063h-.438v.438h.438z" fill="#f0f0f0"/>
	<path d="M3.063.438h-.438v.438h.438zm-.438.437h-.437v.438h.438zm0 2.188h-.437v.438h.438zm-1.75 1.75H.438v.875h.438zm.438.875H.875v.438h.438zM5.251 0h-.875v.438h.875zm.438 6.125h-.875v.438h.875zm-3.5 0h-.876v.438h.875zm4.374-4.812h-.438v.875h.438zm-1.313 0h-.438v1.75h.438zM7 2.188h-.438v2.625H7zM5.687.438h-.438v.438h.438zm.438.438h-.438v.438h.438zM4.375.438h-.437v.438h.438zm.438.438h-.438v.438h.438zm0 2.188h-.438v.438h.438zm1.75 1.75h-.438v.875h.438zm-.438.875h-.438v.438h.438z" fill="#000"/>
	<path d="M2.188.875H1.75v.438h.438z" fill="#b79cf8"/>
`;function hT(a={}){return F`<svg
		${Pe(a)}
		aria-hidden="true"
		role="img"
		width="14"
		height="14"
		viewBox="0 0 7 7"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		${uT}
	</svg>`}const fT=Ie`
	<path d="M4.813 5.25v-.875h-.438v-.437h-1.75v.438h-.437v.875H1.75v1.313h3.5V5.251z" fill="#ffe361"/>
	<path d="M6.125 1.313V.875H5.25V.438h-3.5v.438H.875v.438H.438v2.625h.438v.438h.875v-.439h3.5v.438h.875v-.438h.438V1.313z" fill="#ff2c52"/>
	<path d="M5.25 0h-3.5v.438h3.5z" fill="#000"/>
	<path d="M5.25.438h-3.5v.438h3.5zm-3.5.437H.875v.438h.875zm4.375 0H5.25v.438h.875z" fill="#fff"/>
	<path d="M5.25 6.563h-3.5v.438h3.5zM.438 1.313H0v2.625h.438zM1.751.438H.875v.438h.875z" fill="#000"/>
	<path d="M.875 3.063v-1.75H.438v2.625h.875v-.875z" fill="#fff"/>
	<path d="M6.563 1.313h-.438v2.625h.438z" fill="#be0351"/>
	<path d="M6.563 2.625h-.875V3.5h.875zM5.25.875h-.875v.875h.875z" fill="#fff"/>
	<path opacity=".5" d="M6.563 2.625h-.438V3.5h.438z" fill="#be0351"/>
	<path d="M4.375 3.063h-1.75v.438h1.75zm.875.438h-.875v.438h.875zM2.625 3.5H1.75v.438h.875z" fill="#be0351"/>
	<path d="M2.625 4.375h-.437v.875h.438z" fill="#fff"/>
	<path d="M4.813 4.375h-.438v.875h.438zm0 .875v.875H1.75v.438h3.5V5.25z" fill="#ffb84b"/>
	<path d="M2.188 5.25H1.75v.875h.438z" fill="#fff"/>
	<path d="M1.75 3.938H.875v.438h.875zm4.375 0H5.25v.438h.875z" fill="#be0351"/>
	<path d="M3.5 2.625h-.875V3.5H3.5z" fill="#fff"/>
	<path opacity=".5" d="M3.5 3.063h-.875v.438H3.5z" fill="#be0351"/>
	<path d="M4.375 3.5h-1.75v.438h1.75z" fill="#000"/>
	<path d="M4.375 3.938h-1.75v.438h1.75z" fill="#fff"/>
	<path d="M.875.875H.438v.438h.438z" fill="#000"/>
	<path d="M2.188 1.313H1.75v.438h.438z" fill="#fff"/>
	<path d="M1.75 5.25h-.437v1.313h.438zm.438-.875h.438v-.437H1.75v.438H.875v.438h.875v.438h.438zM.875 3.938H.438v.438h.438zM7 1.313h-.438v2.625H7zM6.125.438H5.25v.438h.875zm.438.438h-.438v.438h.438zm-.438 3.5H5.25v-.438h-.875v.438h.438v.875h.438v1.313h.438V5.251h-.438v-.438h.875zh.438v-.438h-.438z" fill="#000"/>
`;function mT(a={}){return F`<svg
		${Pe(a)}
		aria-hidden="true"
		role="img"
		width="14"
		height="14"
		viewBox="0 0 7 7"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		${fT}
	</svg>`}const pT=Ie`
	<path d="M6.125 3.063v-.438H5.25v-.437h-.438V1.75h-.438V.875h-.436V.438h-.875v.438h-.438v.875h-.437v.438H1.75v.438H.875v.438H.438v.875h.438v.438h.875v.438h.438v.438h.438v.875h.438v.438h.875v-.438h.438v-.875h.438v-.438h.438v-.438h.875v-.44h.438v-.875z" fill="#47baff"/>
	<path d="M4.813 3.063h-.875v-.438h-.875v.438h-.875v.875h.875v.438h.875v-.438h.875z" fill="#b5e3ff"/>
	<path d="M1.313 0H.438v.438h.875zm.875.438h-.875v.438h.875zm-.438 1.75H.875v.438h.875zM.438.438H0v.875h.438z" fill="#000"/>
	<path d="M1.313.438H.438v.875h.438V.875h.438z" fill="#f0f0f0"/>
	<path d="M.438 3.063H0v.875h.438zM7.001.438h-.438v.875h.438zm-.438.875h-.438v.875h.438zm-5.688 0H.438v.875h.438zm1.75-.438h-.437v.875h.438zm2.188 0h-.438v.875h.438zM3.063.438h-.438v.438h.438z" fill="#000"/>
	<path d="M3.063.875h-.438v.438h.438zm.438.438h-.438v.438h.438zm-1.313.875H1.75v.438h.438zm-.875.437H.875v.438h.438zm-.438.438H.438v.438h.438z" fill="#f0f0f0"/>
	<path d="M1.313 6.563v-.438h.875V5.25H1.75v-.438H.875v.875H.438v.875z" fill="#b79cf8"/>
	<path d="M.875 5.688H.438v.438h.438z" fill="#f0f0f0"/>
	<path d="M2.188 1.75H1.75v.438h.438z" fill="#000"/>
	<path d="M2.188.875H.875v1.313h.875V1.75h.438zm3.938 1.313V.875H4.813v.875h.438v.438z" fill="#b79cf8"/>
	<path d="M2.188.875H1.75v.875h.438zm-.438.875h-.437v.438h.438zm4.375-.438h-.438v.875h.438zm.438-.438h-.438v.438h.438z" fill="#816bee"/>
	<path d="M5.688 6.563v-.438h-.875V5.25h.438v-.438h.875v.875h.438v.875z" fill="#b79cf8"/>
	<path d="M6.563 5.688h-.438v.438h.438zm-.438-.875h-.438v.438h.438z" fill="#816bee"/>
	<path d="M.875 2.625H.438v.438h.438zM7 3.063h-.438v.875H7zm-.438-.438h-.438v.438h.438zM4.374.437h-.436v.438h.438zm.875 1.313h-.438v.438h.438zM3.938 0h-.875v.438h.875z" fill="#000"/>
	<path d="M3.938.438h-.875v.438h.875zm0 2.625h-.875v.875h.875zM6.563.438h-.875v.438h.875zm-.875.438h-.875v.438h.875z" fill="#f0f0f0"/>
	<path d="M3.938 2.188h-.875v.438h.875zm0 2.188h-.875v.438h.875zM6.563.001h-.875v.438h.875zm-.875.438h-.875v.438h.875zm.438 1.75h-.875v.438h.875zM1.313 6.563H.438v.438h.875zm.875-.438h-.875v.438h.875zm-.438-1.75H.875v.438h.875zM.437 5.688H0v.875h.438zm6.563 0h-.438v.875H7zm-.438-.875h-.438v.875h.438zm-5.687 0H.438v.875h.438zm1.75.438h-.437v.875h.438zm2.188 0h-.438v.875h.438zm-1.75.875h-.438v.438h.438zm-.875-1.313H1.75v.438h.438z" fill="#000"/>
	<path d="M2.188 5.25H1.75v.875h.438zm-.438-.438h-.437v.438h.438z" fill="#816bee"/>
	<path d="M.875 3.938H.438v.438h.438zm1.313-.875H1.75v.875h.438zm.875-.438h-.875v.438h.875zm0 1.313h-.875v.438h.875zm2.188-.875h-.438v.875h.438zm-.438-.438h-.875v.438h.875zm0 1.313h-.875v.438h.875zm1.75 0h-.438v.438h.438z" fill="#000"/>
	<path d="M6.563 3.063h-.438v.875h.438zm-.438-.438h-.438v.438h.438zm0 1.313h-.438v.438h.438zm-.875 0h-.438v.438h.438zm-1.313.875h-.874v.438h.875zm.438-.438h-.437v.438h.438zm-1.313 0h-.437v.438h.438zm.875 1.75h-.874v.438h.875zm.438-.438h-.437v.438h.438zm-1.313 0h-.437v.438h.438zm-.874-1.749H1.75v.438h.438zM.875 3.5H.438v.438h.438zm.438.438H.875v.438h.438z" fill="#4282d8"/>
	<path d="M4.375 6.125h-.437v.438h.438zm.875-1.313h-.438v.438h.438zm-1.313 1.75h-.874V7h.875zm2.625 0h-.875V7h.875zm-.875-.438h-.875v.438h.875zm.438-1.75H5.25v.438h.875z" fill="#000"/>
`;function gT(a={}){return F`<svg
		${Pe(a)}
		aria-hidden="true"
		role="img"
		width="14"
		height="14"
		viewBox="0 0 7 7"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		${pT}
	</svg>`}const vT=Ie`
	<path d="M3.938.438h-.875v1.75h.875zm.875 2.625v-.438h-.438v-.437h-1.75v.438h-.437v.438H.438v.875h1.75v.438h.438v.438h.438v1.75h.875v-1.75h.438v-.438h.438v-.439h1.75v-.875z" fill="#bcef42"/>
	<path d="M1.75 0h-.437v.438h.438zm.875 2.188h-.437v.438h.438zm2.188 0h-.438v.438h.438zM5.688 0H5.25v.438h.438zm.438.438h-.438v.438h.438zm.438.438h-.438v.438h.438zm.438.438h-.438v.438h.438zM3.938 0h-.875v.438h.875z" fill="#000"/>
	<path d="M3.938.438h-.875v.438h.875z" fill="#f0f0f0"/>
	<path d="M3.938 1.313h-.875v.438h.875zm0 .438h-.875v.438h.875z" fill="#7fb134"/>
	<path d="M3.938 5.25h-.875v.438h.875z" fill="#f0f0f0"/>
	<path d="M3.938 6.125h-.875v.438h.875zm0-1.313h-.875v.438h.875z" fill="#7fb134"/>
	<path d="M3.938 2.625h-.875v.438h.875zm0 1.313h-.875v.438h.875zm.438-.875h-.438v.875h.438z" fill="#000"/>
	<path d="M5.25 3.063h-.438v.875h.438z" fill="#7fb134"/>
	<path d="M3.063 3.063h-.438v.875h.438z" fill="#000"/>
	<path d="M2.625 2.625h-.437V3.5h.438z" fill="#f0f0f0"/>
	<path d="M1.313.438H.875v.438h.438z" fill="#000"/>
	<path d="M1.313.438v.438H.875v.438H.438v.438h1.313V.438z" fill="#6be473"/>
	<path d="M1.75.438h-.437v.438h.438zm-.437.437H.875v.438h.438z" fill="#f0f0f0"/>
	<path d="M1.75 1.313H.438v.438h1.313z" fill="#008456"/>
	<path d="M5.25 5.25v1.313h.438v-.438h.438v-.438h.438v-.438zm-4.812 0v.438h.438v.438h.438v.438h.438V5.251z" fill="#6be473"/>
	<path d="M1.75 5.25H.438v.438h1.313z" fill="#f0f0f0"/>
	<path d="M1.313 5.688v.875h.438v-.875z" fill="#008456"/>
	<path d="M6.125 1.313V.875h-.438V.438h-.438v1.313h1.313v-.438z" fill="#6be473"/>
	<path d="M5.688.438H5.25v.438h.438zm0 2.625H5.25v.438h.438z" fill="#f0f0f0"/>
	<path d="M6.563 3.5H5.25v.438h1.313z" fill="#7fb134"/>
	<path d="M6.563 1.313H5.25v.438h1.313z" fill="#008456"/>
	<path d="M.875.875H.438v.438h.438zM3.063.437h-.438v1.75h.438zm1.313 0h-.438v1.75h.438zm2.625 2.625h-.438v.875h.438zm-.438-.438h-1.75v.438h1.75zm0 1.313h-1.75v.438h1.75zM.438 3.063H0v.875h.438zm1.75-.438H.438v.438h1.75z" fill="#000"/>
	<path d="M1.75 3.063H.438v.875h.438V3.5h.875z" fill="#f0f0f0"/>
	<path d="M2.188 3.938H.438v.438h1.75zM.438 1.313H0v.438h.438zm1.313 5.25h-.438v.438h.438zm.875-2.188h-.438v.438h.438z" fill="#000"/>
	<path d="M1.75 3.5h-.437v.438h.438zm.438-.438H1.75v.875h.438z" fill="#7fb134"/>
	<path d="M2.188 3.063H1.75v.875h.438z" fill="#3f581a"/>
	<path d="M4.375 4.375h-1.75v.438h1.75z" fill="#7fb134"/>
	<path d="M4.375 2.188h-1.75v.438h1.75z" fill="#f0f0f0"/>
	<path d="M4.813 4.375h-.438v.438h.438z" fill="#000"/>
	<path d="M4.813 3.938h-.438v.438h.438z" fill="#7fb134"/>
	<path d="M5.688 6.563H5.25v.438h.438zm.438-.438h-.438v.438h.438zm.438-.438h-.438v.438h.438zm.438-.438h-.438v.438h.438zM3.939 6.562h-.876V7h.875zm-2.625-.438H.875v.438h.438zm-.438-.438H.438v.438h.438zm2.188-.875h-.439v1.75h.438zm1.313 0h-.439v1.75h.438zM1.75 1.75H.438v.438h1.75V.438H1.75zm3.5 0V.438h-.438v1.75h1.75V1.75z" fill="#000"/>
	<path d="M.438 4.813v.438h1.313v1.313h.438v-1.75zm4.375 0v1.75h.438V5.25h1.313v-.438zM.438 5.25H0v.438h.438z" fill="#000"/>
	<path d="M5.688 6.125H5.25v.438h.438zm.438-.438h-.438v.438h.438zm.438-.438h-.438v.438h.438z" fill="#008456"/>
	<path d="M5.688 5.25H5.25v.438h.438z" fill="#f0f0f0"/>
	<path d="M3.938 3.063h-.875v.875h.875z" fill="#7fb134"/>
	<path d="M3.938 1.75h-.875v.438h.875zm0 3.063h-.875v.438h.875zm1.313-1.75h-.438v.875h.438z" fill="#3f581a"/>
`;function bT(a={}){return F`<svg
		${Pe(a)}
		aria-hidden="true"
		role="img"
		width="14"
		height="14"
		viewBox="0 0 7 7"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		${vT}
	</svg>`}const yT=Ie`
	<path d="M4.813 4.375h.438v-.437h1.313V3.5H5.251v-.437h-.438V1.75h.875v-.437H4.375v.438H3.063v-.438h-.438V.875H1.75v.438h-.437v.438H.875v.438H.438v2.625h.438v.438h.438v.438h.438v-.875h1.75v.438h-.439v.438h.438v.438h.875v-.438h1.313v-.438h-.875z" fill="#54cfff"/>
	<path d="M3.938 4.813H3.5v.438h.438zm1.75.438H5.25v.438h.438zm.875-1.75h-.438v.438h.438zM5.25 3.063h-.438v.438h.438zM1.312 4.376H.875v.438h.438zm.438.438h-.437v.875h.438zm2.625.875H3.063v.438h1.313zm0-1.313h-.437v.438h.438z" fill="#4282D8"/>
	<path d="M3.938 0H3.5v.438h.438zm.438.438h-.438v.438h.438zm-.876 0H1.75v.438H3.5zM1.75.875h-.437v.438h.438zm1.313 0h-.438v.438h.438zm.438.438h-.438v.438h.438zm.875 0h-.438v.438h.438zM5.689.875H4.376v.438h1.313zm.438.438h-.438v.438h.438zm-4.814 0H.875v.438h.438zm-.438.437H.438v.438h.438zm-.437.438H0v2.625h.438zm.875.438H.875v1.75h.438zm.438-.438h-.438v.438h.438zm2.188-.438H1.75v.438h2.188z" fill="#000"/>
	<path d="M3.938 1.75H3.5v.875h.438zm1.75 0h-.875v.438h.875z" fill="#000"/>
	<path d="M5.25 1.75h-.438v1.313h.438zm1.313 1.313H5.25v.438h1.313zm.438.438h-.438v.438h.438zm-2.625-.875h-.438v1.75h.438zm2.188 1.313H5.251v.438h1.313zm-1.313.438h-.438v.875h.438z" fill="#000"/>
	<path d="M5.688 4.813h-.875v.438h.875zm.438.438h-.438v.438h.438zm-.438.438H4.375v.438h1.313zm-1.313.438h-1.75v.438h1.75zM3.5 4.814H1.75v.438H3.5zm-.875 1.75h-.437v.438h.438zm-.438-.438H1.75v.438h.438zm-.438-.438h-.436v.438h.438zm.438-.438H1.75v.438h.438zm.875 0h-.437v.438h.438zm-1.75 0H.875v.438h.438zm-.438-.438H.438v.438h.438zm.875-.438h-.436v.438h.438zm2.188 0H3.5v.438h.438z" fill="#000"/>
	<path d="M3.938 2.625H3.5v-.437H1.75v.438h-.437v1.75h.438v.438h1.75v-.438h.438z" fill="#9af4dc"/>
	<path d="M3.5 4.375H1.75v.438H3.5zm-1.75-.437h-.437v.438h.438zm2.188 0H3.5v.438h.438z" fill="#6c9ca6"/>
	<path d="M1.75 2.625h-.437v.438h.438zm.875.438h-.437v.438h.438zm.875-.875H1.75v.438H3.5z" fill="#f0f0f0"/>
	<path d="M3.5 5.688h-.437v.438h.438z" fill="#000"/>
	<path d="M.875 2.188H.438v.875h.438zm.875-.875h-.437v.438h.438zm.875-.438H1.75v.438h.875zm3.063.438H4.375v.438h1.313zM3.938.438H3.5v.438h-.437v.438h.438v.438h.438v-.439h.438V.875h-.439zM2.625 5.25h-.437v.438H1.75v.438h.438v.438h.438v-.438h.438v-.438h-.439z" fill="#f0f0f0"/>
`;function _T(a={}){return F`<svg
		${Pe(a)}
		aria-hidden="true"
		role="img"
		width="14"
		height="14"
		viewBox="0 0 7 7"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		${yT}
	</svg>`}const xT=Ie`
	<path d="M5.688 1.313V.875h-.875v.438h-.438V.875h-.437V.438h-.875v.438h-.438v.438h-.437V.875h-.875v.438H.875v1.75h.875v.438h.438v-.438h2.625v.438h.438v-.438h.875v-1.75z" fill="#d1cdd5"/>
	<path d="M6.125 3.938V3.5h-1.75v-.437h-1.75v.438H.875v.438H.438v1.313h.438v.438h1.75v.438h.438v.438h.875v-.438h.438V5.69h1.75v-.438h.438V3.938z" fill="#57595f"/>
	<path d="M3.938 0h-.875v.438h.875zm-.875.438h-.438v.438h.438zm1.313 0h-.438v.438h.438zm1.313 0h-.875v.438h.875zm.438.438h-.438v.438h.438zm-1.313 0h-.438v.438h.438zM2.625.875h-.437v.438h.438zM2.188.438h-.875v.438h.875zm-1.313.875H.438v1.75h.438zm.438-.438H.875v.438h.438zM.875 3.5H.438v.438h.438zm-.437.438H0v1.313h.438zm.438 1.313H.438v.438h.438zm1.75.438H.875v.438h1.75zm.438.438h-.439v.438h.438zm.875.438h-.876v.438h.875zm.438-.438h-.439v.438h.438zm1.75-.438h-1.75v.438h1.75zm.438-.438h-.438v.438h.438zm.438-1.313h-.438v1.313h.438zM6.565 3.5h-.438v.438h.438zm0-2.188h-.438v1.75h.438zM2.188 3.5H1.75v.438h.438zm.438-.438h-.438V3.5h.438zm1.75-.438H2.625v.438h1.75zm.438.438h-.438V3.5h.438zm.438.438h-.438v.438h.438zm.438-.438h-.438V3.5h.875v-.437zm-4.377.001H.875v.438h.875v-.438z" fill="#000"/>
	<path d="M.875 4.813H.438v.438h.438zm.438.438H.875v.438h.438zm1.75.438h-.438v.438h.438zm1.313 0h-.438v.438h.438zm-.438.438h-.875v.438h.875zm2.188-.875h-.438v.438h.438zm.438-1.313h-.438v1.313h.438z" fill="#35363a"/>
	<path d="M1.313 2.625H.875v.438h.438zm.875.438H1.75v.438h.438zm3.063 0h-.438v.438h.438zm-2.626-.438h-.437v.438h.438zm2.188 0h-.438v.438h.438z" fill="#847d8b"/>
	<path d="M5.25 3.063h-.438v.438h.438zm-.875-.875h-1.75v.438h1.75zm1.75-.438h-.438v1.313h.438z" fill="#847d8b"/>
	<path d="M1.75 1.75h-.437v.438h.438zm-.437-.437H.875v.438h.438zm.875-.438h-.875v.438h.875zm.875 0h-.438v.438h.438zm.875-.438h-.875v.438h.875zm.438.438h-.438v.438h.438zm1.313 0h-.875v.438h.875zm.438.438h-.438v.438h.438z" fill="#f0f0f0"/>
	<path d="M.875 3.938H.438v.438h.438zm.438-.438H.875v.438h.438zm1.313 0h-.438v.438h.438zm1.75-.438H2.625V3.5h1.75zm.875.875h-.438v.438h.438zm.875-.438h-.875v.438h.875z" fill="#d8d8d8"/>
`;function wT(a={}){return F`<svg
		${Pe(a)}
		aria-hidden="true"
		role="img"
		width="14"
		height="14"
		viewBox="0 0 7 7"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		${xT}
	</svg>`}const zT=Ie`
	<path d="M6.125 1.75v-.437h-.438V.875h-.438V.438H2.625v.438H1.75v.438h-.437v.438H.875v.875H.438v2.188h.438v.438h.438v.438h.438v.438h.438v.438h2.188v-.438h.875v-.438h.438v-.438h.438v-.875h.438V1.75z" fill="#bcef42"/>
	<path d="M6.563.438h-.875v.438h.875z" fill="#f0f0f0"/>
	<path d="M1.313 5.688H.438v.438h.875z" fill="#bcef42"/>
	<path d="M1.75 6.125H.438v.438h1.313z" fill="#7fb134"/>
	<path d="M6.563 3.5h-.438v.875h.438z" fill="#816bee"/>
	<path d="M5.25.438H2.625v.438H5.25z" fill="#f0f0f0"/>
	<path d="M5.25.875H2.625v.438H5.25z" fill="#b79cf8"/>
	<path d="M4.375 6.125H2.188v.438h2.188z" fill="#816bee"/>
	<path d="M6.563.875h-.438v.438h.438z" fill="#bcef42"/>
	<path d="M2.625 2.188h-.437v.438h.438zM1.313 1.75H.875v.438h.438zm.438-.438h-.438v.438h.438z" fill="#f0f0f0"/>
	<path d="M2.625 1.313h-.437v.438h.438zm3.063 0H5.25v.438h.438z" fill="#b79cf8"/>
	<path d="M2.188.875H1.75v.438h.438zm.875 1.75h-.438v.438h.438zM.875 5.25H.438v.438h.438z" fill="#f0f0f0"/>
	<path d="M6.125 4.813h-.438v.438h.438zm-.438.438h-.438v.438h.438zm-.438.438h-.438v.438h.438z" fill="#816bee"/>
	<path d="M6.563.438v.875h-.438V.875h-.438v.438h.438v.438h.438v2.625h.438V.438zm-5.25.875H.875v.438h.438zm.438-.438h.875V.438H1.75zh-.438v.438h.438zm4.813 3.5h-.438v.875h.438zM.875 1.75H.438v.875h.438zM5.25 6.125h-.875v.438h.875zm.875-.875h-.438v.438h.438zm-4.812 0H.875v.438h.438zm.438.438h-.438v.438h.438zm-.875-.875H.438v.438h.438zm4.813.875h-.438v.438h.438zM.438 2.625H0v3.938h.438z" fill="#000"/>
	<path d="M5.25.875h.438V.438h.875V0H2.625v.438H5.25zM2.188 6.563v-.438H1.75v.438H.438v.438h3.938v-.438z" fill="#000"/>
	<path d="M.875 2.625H.438V3.5h.438z" fill="#f0f0f0"/>
	<path d="M4.375 2.625H3.5v.438h.875zm-.438 1.75h-.874v.438h.875zm.875-1.313h-.438v.875h.438zm-3.5 1.75h.875v-.438H1.75V2.188h-.437zm3.5-3.063H3.063v.438h1.75zm-.438 3.5H2.625v.438h1.75zm2.188-3.063h-.438v1.313h.438zM.875 3.5H.438v1.313h.438zm1.313-1.75H1.75v.438h.438zm1.313 1.313h-.438v.438h.438zm-.438.875h-.438v.438h.438zm-.438.875h-.437v.438h.438zm1.75-.875h-.437v.438h.438zm.438.875h-.438v.438h.438zm.438-.438h-.438v.438h.438zm-2.188-1.75v-.437h-.438v.438h-.437v1.313h.438V2.625zm3.063-.875h-.438v.438h.438zm-.875.438h-.438v.438h.438zm.438.438h-.438v1.75h.438zM1.313 4.813H.875v.438h.438zm.438.438h-.438v.438h.438zm.438.438H1.75v.438h.438z" fill="#b79cf8"/>
`;function ST(a={}){return F`<svg
		${Pe(a)}
		aria-hidden="true"
		role="img"
		width="14"
		height="14"
		viewBox="0 0 7 7"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		${zT}
	</svg>`}const MT=Ie`
	<path d="M6.125 1.75v-.437h-.438V.875h-.438V.438H1.75v.438h-.437v.438H.875v.438H.438v2.625h.438v.438h.438v.438h.438v.875h.438v.438h2.625v-.438h.438v-.875h.438v-.438h.438v-.438h.438V1.75z" fill="#d1cdd5"/>
	<path d="M1.75.438h-.437v.438h.438zm-.437.437H.875v.438h.438zm-.438.438H.438v.438h.438zm.875 3.938h-.437v.875h.438zm-.438-.438H.875v.438h.438zm.875 1.313H1.75v.438h.438zM.874 4.376H.438v.438h.438z" fill="#000"/>
	<path d="M1.75 4.813h-.437v.438h.438zm.438.875H1.75v.438h.438zm-.875-1.313H.875v.438h.438zm1.75-1.313H1.75v1.313h1.313z" fill="#847d8b"/>
	<path d="M3.063 3.5h-.875v.875h.875z" fill="#57595f"/>
	<path d="M5.25 3.063H3.938v1.313h1.313z" fill="#847d8b"/>
	<path d="M5.25 3.5h-.875v.875h.875z" fill="#57595f"/>
	<path d="M5.25 5.254h.438v-.438H5.25zm-.438.875h.438v-.438h-.438zm.875-1.313h.438v-.438h-.438z" fill="#847d8b"/>
	<path d="M.438 1.75H0v2.625h.438z" fill="#000"/>
	<path d="M.875 1.75H.438v2.625h.438z" fill="#fff"/>
	<path d="M5.25.879h.438V.441H5.25zm.438.438h.438V.879h-.438zm.438.438h.438v-.438h-.438zM5.251 6.13h.438v-.875h-.438zm.438-.875h.438v-.438h-.438zm-.875 1.313h.438V6.13h-.438zm1.313-1.75h.438V4.38h-.438zm.438-.438h.438V1.755h-.438z" fill="#000"/>
	<path d="M6.125 4.379h.438V1.754h-.438z" fill="#847d8b"/>
	<path d="M1.75 0v.438h3.5V0z" fill="#000"/>
	<path d="M1.75.875h-.437v.438h.438zm-.437.438H.875v.438h.438zm.438.438h-.438v.438h.438zm3.5-.433h.438V.88h-.438zm.438.438h.438v-.438h-.438zM1.75.438v.438h3.5V.438z" fill="#fff"/>
	<path d="M2.188 6.563v.438h2.625v-.438z" fill="#000"/>
	<path d="M2.188 6.125v.438h2.625v-.438z" fill="#847d8b"/>
	<path d="M3.063 5.688h-.438v.875h.438zm1.313 0h-.438v.875h.438z" fill="#57595f"/>
`;function ET(a={}){return F`<svg
		${Pe(a)}
		aria-hidden="true"
		role="img"
		width="14"
		height="14"
		viewBox="0 0 7 7"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		${MT}
	</svg>`}const TT=Ie`
	<path d="M3.063 0H1.75v.438h1.313zm1.75.438h-1.75v.438h1.75zm-.875 2.187H3.5v1.75h.438zm-3.5-.437H0v2.625h.438zM6.563.875h-1.75v.438h1.75z" fill="#000"/>
	<path d="M3.063.438H1.75v.438h1.313zm1.75.438h-1.75v.438h1.75zm1.75.438h-1.75v.438h1.75z" fill="#f0f0f0"/>
	<path d="M3.063 6.563H1.75v.438h1.313z" fill="#000"/>
	<path d="M2.625 6.125v-.438h-.437v-.875H1.75V2.188h.438v-.875h.438V.875H1.75v.438H.875v1.75H.438v1.75h.438v.875h.438v.438h.438v.438h1.313v-.438z" fill="#ffe361"/>
	<path d="M3.063 6.125H1.75v.438h1.313z" fill="#ffb84b"/>
	<path d="M4.813 6.125h-1.75v.438h1.75z" fill="#000"/>
	<path d="M4.375 5.688V5.25h-.437v-.875H3.5v-1.75h.438V1.75h.438v-.437H3.063v.438h-.438v1.313h-.437v1.75h.438v.875h.438v.438h1.75v-.438z" fill="#ffe361"/>
	<path d="M6.563 5.688h-1.75v.438h1.75zM1.75.438h-.437v.438h.438zm-.437.437H.875v.438h.438zm-.438.438H.438v.875h.438zm6.125 0h-.438v.438H7zm-.438.438h-.438v.438h.438zm-.438.438h-.438v.875h.438zm.875 3.063h-.438v.438h.438zm-.438-.438h-.438v.438h.438zm-.438-.875h-.438v.875h.438zm-.438-.875h-.438v.875h.438zM1.747 6.127h-.434v.438h.438zm-.438-.438H.875v.438h.438zm-.438-.875H.438v.875h.438zm1.313-2.625H1.75v2.625h.438zM3.059.876h-.434v.438h.438zm-.434.437h-.437v.875h.438z" fill="#000"/>
	<path d="M.875 2.188H.438v.875h.438zm1.75 0h-.437v.875h.438z" fill="#f0f0f0"/>
	<path d="M2.188 1.313H1.75v.875h.438z" fill="#ffb84b"/>
	<path d="M4.813 1.313h-.438v.438h.438z" fill="#000"/>
	<path d="M1.75.875h-.437v.438h.438z" fill="#f0f0f0"/>
	<path d="M2.625.875h-.437v.438h.438zm1.313.875H3.5v.875h.438zm.438-.438h-.438v.438h.438zm-2.188 3.5H1.75v.438h.438zm-.438.875h-.437v.438h.438zm-.438-.875H.875v.875h.438zm2.188.875v-.438h-.437v-.438h-.438v.875h.438v.438h1.75v-.438zm.438-1.313H3.5v.438h.438z" fill="#ffb84b"/>
	<path d="M4.375 5.688V5.25h-.437v-.875H3.5v-1.75h.438V1.75h.438v-.437H3.063v.438h-.438v1.313h-.437v1.75h.438v.875h.438v.438h1.75v-.438z" fill="url(#a)"/>
	<path d="M6.125 5.25v-.438h-.438v-.874h-.438v-.875h.438v-.875h.438V1.75H4.812v.438h-.438v.438h-.436v1.75h.438v.875h.438v.438h1.75v-.438z" fill="#ff2c52"/>
	<path d="M5.688 2.188H5.25v.875h.438zm.438-.438h-.438v.438h.438zm-.438 2.188H5.25v.438h.438zM5.25 5.251v-.438h-.875v.438h.438v.438h1.75v-.438z" fill="#be0351"/>
	<path d="M1.313 1.313H.875v.438h.438zm0 1.75H.875v.438h.438zm1.75-1.75h-.438v.438h.438zm1.75.438h-.438v.438h.438zm-.438.875h-.437v.438h.438z" fill="#f0f0f0"/>
	<path d="M4.375 1.75h-.437v.875h.438zM3.062 5.688h-.437v.438h.438zm-.438-.875h-.436v.875h.438zm2.188.438h-.438v.438h.438zm-.438-.875h-.436v.875h.438z" fill="#000"/>
	<defs>
		<radialGradient id="a" cx=".75" cy=".5" r="1" fx=".75" fy=".5">
		<stop stop-color="#ff2c52" offset="30%"/>
		<stop stop-color="#ffe361" offset="70%"/>
		</radialGradient>
	</defs>
`;function CT(a={}){return F`<svg
		${Pe(a)}
		aria-hidden="true"
		role="img"
		width="14"
		height="14"
		viewBox="0 0 7 7"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		${TT}
	</svg>`}const AT=Ie`
	<path d="M4.813.438v.438h-.438v.438h-.437v.438H3.5v.438h-.437v.875h-.438v.438H3.5v.875h.438v-.44h.875V3.5h.438v-.437h.438v-.438h.438v-.437h.438V.438z" fill="#d1cdd5"/>
	<path d="M1.313 3.938h.438v.438h.875v.875h.438v.438h.875v.438h.875v-.875h-.876v-.438H3.5v-.438h-.437v-.438h-.438V3.5h-.437v-.437H1.75v-.875H.875v.875h.438z" fill="#ffe361"/>
	<path d="M2.188 4.813h-.875v.875h.875zm-.875.875H.438v.875h.875z" fill="#ffe361"/>
	<path d="M4.813.438h-.438v.438h.438zm-.438.438h-.437v.438h.438zm-.437.437H3.5v.438h.438zM3.5 1.75h-.437v.438h.438zm-.437.438h-.438v.875h.438zm-.875 0H1.75v.875h.438zm-1.313 0H.438v.875h.438zm.438.875H.875v.875h.438zm3.5.875h-.875v.438h.875zm0 .875h-.875v.438h.875zm.438.438h-.438v.875h.438z" fill="#000"/>
	<path d="M6.563.438h-.438v1.75h.438z" fill="#847d8b"/>
	<path d="M.438 5.688H0v.875h.438zm4.375.438h-.875v.438h.875zm-.875-.438h-.875v.438h.875z" fill="#000"/>
	<path d="M2.188 5.25h-.875v.438h.875zm-.875.875H.438v.438h.875z" fill="#ffb84b"/>
	<path d="M1.313 6.125v.438h.438v-.438h.438v-.438h-.876zm1.313-.875v-.875H1.75v-.437h-.437v.875h.875v.875h.875V5.25zm-1.313 0v-.438H.875v.438H.438v.438h.875zm0 1.313H.438v.438h.875zM1.75 1.75H.875v.438h.875zm1.313 2.188v.438h.438V3.5h-.876v.438z" fill="#000"/>
	<path d="M5.688 1.313H5.25v.438h.438zm-.438.438h-.438v.438h.438zm-.438.438h-.438v.438h.438zm-.438.438h-.436v.438h.438zm-.436.436H3.5v.438h.438z" fill="#847d8b"/>
	<path d="M3.063 3.063h-.438v.438h.438z" fill="#f0f0f0"/>
	<path d="M1.75 3.5h-.437v.438h.438zm-.437-.875H.875v.438h.438zm.875 1.313H1.75v.438h.438zm.875.875h-.438v.438h.438zm.438.438h-.438v.438h.438zm.875.438h-.438v.438h.438z" fill="#ffb84b"/>
	<path d="M3.938 4.375H3.5v.438h.438zM2.625 3.063h-.437v.438h.438zm3.938-.875h-.438v.438h.438zm-.438.438h-.438v.438h.438zm-.438.438h-.438v.438h.438zm-.438.438h-.438v.438h.438zm-.438-3.5V.44h1.75v1.75h.438V0z" fill="#000"/>
	<path d="M4.813 5.25h-.438v.438h.438zm-.875-.438H3.5v.438h.438zM3.5 4.374h-.437v.438h.438zm-.437-.436h-.438v.438h.438zM2.625 3.5h-.437v.438h.438zm-.437-.437H1.75v.438h.438zM3.5 2.188h-.437v.438h1.313v-.438h-.438V1.75H3.5zM4.375.875v.438h-.437v.438h1.313v-.438h-.438V.875zm1.75-.438H4.812v.438h1.313z" fill="#f0f0f0"/>
	<path d="M6.125 2.188h-.438v.438h.438zm-.438.438h-.438v.438h.438zm-.438.438h-.438v.438h.438zm-.438.438h-.438v.438h.438zm-.873.436H3.5v.438h.438z" fill="#847d8b"/>
	<path d="M1.75 2.188h-.437v.438h.438zm0 2.625h-.437v.438h.438zm-.875.875H.438v.438h.438z" fill="#f0f0f0"/>
`;function kT(a={}){return F`<svg
		${Pe(a)}
		aria-hidden="true"
		role="img"
		width="14"
		height="14"
		viewBox="0 0 7 7"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		${AT}
	</svg>`}const jT=Ie`
	<path d="M5.688 2.625v-.437H5.25V1.75h-.438v-.437h-.438V.875h-.436V.438h-.875v.438h-.438v.438h-.437v.438H1.75v.438h-.437v.438H.875v.875H.438v2.188h.438v.438h.875v.438h3.5v-.438h.875v-.438h.438V3.5h-.438v-.875z" fill="#0abbff"/>
	<path d="M3.063 0v.438h.875V0zm-.438.438v.438h.438V.438zm1.313 0v.438h.438V.438zm.438.438v.438h.438V.875zm.438.438v.438h.438v-.439zm.438.438v.438h.438v-.44zm.438.438v.438h.438v-.44zm.438.438v.875h.438v-.878zm-5.69-.003V3.5h.438v-.875zM0 3.5v2.188h.438V3.5zm6.563 0v2.188h.438V3.5zM2.188.875v.438h.438V.875zm-.438.438v.438h.438v-.438zm-.437.437v.438h.438V1.75zm-.438.438v.438h.438v-.438zm-.438 3.5v.438h.438v-.438zm5.688 0v.438h.438v-.438zm-4.375.875v.438h3.5v-.438z" fill="#000"/>
	<path d="M1.75 6.125v.438h3.5v-.438z" fill="#4282d8"/>
	<path d="M.875 6.125v.438h.875v-.438zm5.25.438v-.438H5.25v.438z" fill="#000"/>
	<path d="M3.063.438v.438h.875V.438z" fill="#fff"/>
	<path opacity=".5" d="M4.813 3.5v-.437h-.438v-.438h-.437v-.437h-.875v.438h-.438v.438h-.437v.438H1.75v1.313h.438v.438h2.625v-.438h.438V3.5z" fill="#fff"/>
	<path d="M2.625.875v.438h.438V.875zm-.437.438v.438h.438v-.438zm.438.438v.438h.438V1.75zM1.75 1.75v.438h.438V1.75zm-.437.438v.438h.438v-.438zm-.438.437V3.5h.438v-.875zM.438 3.5v.875h.438V3.5z" fill="#fff"/>
	<path d="M5.25 2.188v.438h.438v-.438zm.438.438v.875h.438v-.876zm.438.875v1.75h-.438v.438H5.25v.438h.875v-.438h.438V3.5zM.875 6.125h.875v-.438H.875z" fill="#4282d8"/>
`;function NT(a={}){return F`<svg
		${Pe(a)}
		aria-hidden="true"
		role="img"
		width="14"
		height="14"
		viewBox="0 0 7 7"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		${jT}
	</svg>`}let DT=globalThis.$discordMessage??{};function zl(){return DT}const bd={blue:"https://cdn.discordapp.com/embed/avatars/0.png",gray:"https://cdn.discordapp.com/embed/avatars/1.png",green:"https://cdn.discordapp.com/embed/avatars/2.png",orange:"https://cdn.discordapp.com/embed/avatars/3.png",red:"https://cdn.discordapp.com/embed/avatars/4.png",pink:"https://cdn.discordapp.com/embed/avatars/5.png"},Lf=zl().avatars??{},xi=Object.assign(bd,Lf,{default:bd[Lf.default]??Lf.default??bd.blue}),pl=zl().profiles??{},OT=zl().defaultTheme==="light"?"light":"dark",HT=zl().defaultMode==="compact"?"compact":"cozy",RT=zl().defaultBackground==="none"?"none":"discord",$T=new Map([["heart",aT()],["crystal",Y9()],["diamond",G9()],["explosion",Q9()],["flame",W9()],["flower",eT()],["key",nT()],["leaf",sT()],["lightning",oT()],["magic",dT()],["moon",hT()],["mushroom",mT()],["mythical",gT()],["ornament",bT()],["plasma",_T()],["rock",wT()],["shell",ST()],["skull",ET()],["sun",CT()],["sword",kT()],["water",NT()]]),VT=Ie`
	<path
		fill="currentColor"
		d="M18.91 12.98a5.45 5.45 0 0 1 2.18 6.2c-.1.33-.09.68.1.96l.83 1.32a1 1 0 0 1-.84 1.54h-5.5A5.6 5.6 0 0 1 10 17.5a5.6 5.6 0 0 1 5.68-5.5c1.2 0 2.32.36 3.23.98Z"
	/>
	<path
		fill="currentColor"
		d="M19.24 10.86c.32.16.72-.02.74-.38L20 10c0-4.42-4.03-8-9-8s-9 3.58-9 8c0 1.5.47 2.91 1.28 4.11.14.21.12.49-.06.67l-1.51 1.51A1 1 0 0 0 2.4 18h5.1a.5.5 0 0 0 .49-.5c0-4.2 3.5-7.5 7.68-7.5 1.28 0 2.5.3 3.56.86Z"
	/>
`;function w2(a={}){return F`<svg
		${Pe(a)}
		class="discord-mention-icon"
		aria-hidden="false"
		width="24"
		height="24"
		viewBox="0 0 20 20"
		xmlns="http://www.w3.org/2000/svg"
	>
		${VT}
	</svg>`}const LT=Ie`
	<path
		fill="currentColor"
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M10.99 3.16A1 1 0 1 0 9 2.84L8.15 8H4a1 1 0 0 0 0 2h3.82l-.67 4H3a1 1 0 1 0 0 2h3.82l-.8 4.84a1 1 0 0 0 1.97.32L8.85 16h4.97l-.8 4.84a1 1 0 0 0 1.97.32l.86-5.16H20a1 1 0 1 0 0-2h-3.82l.67-4H21a1 1 0 1 0 0-2h-3.82l.8-4.84a1 1 0 1 0-1.97-.32L15.15 8h-4.97l.8-4.84ZM14.15 14l.67-4H9.85l-.67 4h4.97Z"
	/>
`;function z2(a={}){return F`<svg
		${Pe(a)}
		class="discord-mention-icon"
		aria-hidden="false"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
	>
		${LT}
	</svg>`}const BT=Ie`
	<path
		fill="currentColor"
		d="M12 2.81a1 1 0 0 1 0-1.41l.36-.36a1 1 0 0 1 1.41 0l9.2 9.2a1 1 0 0 1 0 1.4l-.7.7a1 1 0 0 1-1.3.13l-9.54-6.72a1 1 0 0 1-.08-1.58l1-1L12 2.8ZM12 21.2a1 1 0 0 1 0 1.41l-.35.35a1 1 0 0 1-1.41 0l-9.2-9.19a1 1 0 0 1 0-1.41l.7-.7a1 1 0 0 1 1.3-.12l9.54 6.72a1 1 0 0 1 .07 1.58l-1 1 .35.36ZM15.66 16.8a1 1 0 0 1-1.38.28l-8.49-5.66A1 1 0 1 1 6.9 9.76l8.49 5.65a1 1 0 0 1 .27 1.39ZM17.1 14.25a1 1 0 1 0 1.11-1.66L9.73 6.93a1 1 0 0 0-1.11 1.66l8.49 5.66Z"
	/>
`;function S2(a={}){return F`<svg
		${Pe(a)}
		class="discord-mention-icon"
		aria-hidden="false"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
	>
		${BT}
	</svg>`}const UT=Ie`
	<path
		fill="currentColor"
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M6 9h1V6a5 5 0 0 1 10 0v3h1a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3Zm9-3v3H9V6a3 3 0 1 1 6 0Zm-1 8a2 2 0 0 1-1 1.73V18a1 1 0 1 1-2 0v-2.27A2 2 0 1 1 14 14Z"
	/>
`;function M2(a={}){return F`<svg
		${Pe(a)}
		class="discord-mention-icon"
		aria-hidden="false"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
	>
		${UT}
	</svg>`}const IT=Ie`
	<path
		fill="currentColor"
		d="M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.74.32L5.92 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.92l4.28 4.68a1 1 0 0 0 .74.32H11a1 1 0 0 0 1-1V3ZM15.1 20.75c-.58.14-1.1-.33-1.1-.92v-.03c0-.5.37-.92.85-1.05a7 7 0 0 0 0-13.5A1.11 1.11 0 0 1 14 4.2v-.03c0-.6.52-1.06 1.1-.92a9 9 0 0 1 0 17.5Z"
	/>
	<path
		fill="currentColor"
		d="M15.16 16.51c-.57.28-1.16-.2-1.16-.83v-.14c0-.43.28-.8.63-1.02a3 3 0 0 0 0-5.04c-.35-.23-.63-.6-.63-1.02v-.14c0-.63.59-1.1 1.16-.83a5 5 0 0 1 0 9.02Z"
	/>
`;function E2(a={}){return F`<svg
		${Pe(a)}
		class="discord-mention-icon"
		aria-hidden="false"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
	>
		${IT}
	</svg>`}var tl=function(a,n,s,i,l,c){function d(x){if(x!==void 0&&typeof x!="function")throw new TypeError("Function expected");return x}for(var h=i.kind,g=h==="getter"?"get":h==="setter"?"set":"value",p=!n&&a?i.static?a:a.prototype:null,m=n||(p?Object.getOwnPropertyDescriptor(p,i.name):{}),u,S=!1,w=s.length-1;w>=0;w--){var z={};for(var _ in i)z[_]=_==="access"?{}:i[_];for(var _ in i.access)z.access[_]=i.access[_];z.addInitializer=function(x){if(S)throw new TypeError("Cannot add initializers after decoration has completed");c.push(d(x||null))};var b=(0,s[w])(h==="accessor"?{get:m.get,set:m.set}:m[g],z);if(h==="accessor"){if(b===void 0)continue;if(b===null||typeof b!="object")throw new TypeError("Object expected");(u=d(b.get))&&(m.get=u),(u=d(b.set))&&(m.set=u),(u=d(b.init))&&l.unshift(u)}else(u=d(b))&&(h==="field"?l.unshift(u):m[g]=u)}p&&Object.defineProperty(p,i.name,m),S=!0},Bi=function(a,n,s){for(var i=arguments.length>2,l=0;l<n.length;l++)s=i?n[l].call(a,s):n[l].call(a);return i?s:void 0};const Rt="light-theme",jr="compact-mode",T2="no-background";let PT=(()=>{var C,A,I,H,$,Z;let a=[lt("discord-messages")],n,s=[],i,l=at,c,d=[],h=[],g,p=[],m=[],u,S=[],w=[],z,_=[],b=[],x,O=[],R=[];return C=class extends l{constructor(){super(...arguments);B(this,A,Bi(this,d,!1));B(this,I,(Bi(this,h),Bi(this,p,!1)));B(this,H,(Bi(this,m),Bi(this,S,!1)));B(this,$,(Bi(this,w),Bi(this,_,void 0)));B(this,Z,(Bi(this,b),Bi(this,O,void 0)));Bi(this,R)}get lightTheme(){return L(this,A)}set lightTheme(V){U(this,A,V)}get noBackground(){return L(this,I)}set noBackground(V){U(this,I,V)}get compactMode(){return L(this,H)}set compactMode(V){U(this,H,V)}get channelType(){return L(this,$)}set channelType(V){U(this,$,V)}get channelName(){return L(this,Z)}set channelName(V){U(this,Z,V)}connectedCallback(){super.connectedCallback(),(this.lightTheme||OT==="light"&&this.lightTheme)&&(this.lightTheme=!0),(this.compactMode||HT==="compact"&&this.compactMode)&&(this.compactMode=!0),(this.noBackground||RT==="none"&&this.noBackground)&&(this.noBackground=!0)}render(){let V;switch(this.channelType){case"text":V=F`${z2()}`;break;case"voice":V=F`${E2()}`;break;case"locked":V=F`${M2()}`;break;case"thread":V=F`${S2()}`;break;case"forum":V=F`${w2()}`;break}return F`
			${De(this.channelType&&this.channelName,()=>F`<div class="discord-channel-header">
						<div class="discord-channel-icon">${V}</div>
						<div class="discord-channel-name">${this.channelName}</div>
					</div>`)}
			<slot></slot>
		`}},A=new WeakMap,I=new WeakMap,H=new WeakMap,$=new WeakMap,Z=new WeakMap,i=C,(()=>{const V=typeof Symbol=="function"&&Symbol.metadata?Object.create(l[Symbol.metadata]??null):void 0;c=[ls({context:Rt}),q({type:Boolean,reflect:!0,attribute:"light-theme"})],g=[ls({context:T2}),q({type:Boolean,reflect:!0,attribute:"no-background"})],u=[ls({context:jr}),q({type:Boolean,reflect:!0,attribute:"compact-mode"})],z=[q({reflect:!0,attribute:"channel-type"})],x=[q({reflect:!0,attribute:"channel-name"})],tl(C,null,c,{kind:"accessor",name:"lightTheme",static:!1,private:!1,access:{has:T=>"lightTheme"in T,get:T=>T.lightTheme,set:(T,W)=>{T.lightTheme=W}},metadata:V},d,h),tl(C,null,g,{kind:"accessor",name:"noBackground",static:!1,private:!1,access:{has:T=>"noBackground"in T,get:T=>T.noBackground,set:(T,W)=>{T.noBackground=W}},metadata:V},p,m),tl(C,null,u,{kind:"accessor",name:"compactMode",static:!1,private:!1,access:{has:T=>"compactMode"in T,get:T=>T.compactMode,set:(T,W)=>{T.compactMode=W}},metadata:V},S,w),tl(C,null,z,{kind:"accessor",name:"channelType",static:!1,private:!1,access:{has:T=>"channelType"in T,get:T=>T.channelType,set:(T,W)=>{T.channelType=W}},metadata:V},_,b),tl(C,null,x,{kind:"accessor",name:"channelName",static:!1,private:!1,access:{has:T=>"channelName"in T,get:T=>T.channelName,set:(T,W)=>{T.channelName=W}},metadata:V},O,R),tl(null,n={value:i},a,{kind:"class",name:i.name,metadata:V},null,s),i=n.value,V&&Object.defineProperty(i,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:V})})(),Be(C,"styles",nt`
		:host {
			color: #fff;
			background-color: #36393e;
			display: block;
			font-size: 16px;
			font-family: 'gg sans', 'Noto Sans', Whitney, 'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif;
			line-height: 170%;
			border: 1px solid rgba(255, 255, 255, 0.05);
		}

		:host([light-theme]) {
			color: #747f8d;
			background-color: #fff;
			border-color: #dedede;
		}

		:host([no-background]) {
			background-color: unset;
		}

		::slotted(*) {
			padding-top: 0.125rem;
			padding-bottom: 0.125rem;
		}

		::slotted(*:first-child) {
			margin-top: 0.5rem;
		}

		::slotted(*:not(:first-child)) {
			margin-top: 1.0625rem;
		}

		:host([compact-mode]) ::slotted(*:not(:first-child)) {
			margin-top: unset;
		}

		::slotted(*:last-child) {
			margin-bottom: 0.5rem;
			border-bottom-width: 0;
		}

		:host .discord-channel-header {
			display: flex;
			align-items: center;
			padding: 0.5rem 1rem;
			box-shadow:
				0 2px 0 0 rgba(0, 0, 0, 0.05),
				0 1.5px 0 0 rgba(0, 0, 0, 0.05),
				0 1px 0 0 rgba(0, 0, 0, 0.16);
		}

		:host .discord-channel-icon {
			height: 24px;
			width: auto;
			margin: 0 8px;
			position: relative;
			flex: 0 0 auto;
			color: #80848e;
		}

		:host([light-theme]) .discord-channel-icon {
			color: #6d6f78;
		}

		:host .discord-channel-name {
			margin: 0 8px 0 0;
			flex: 0 0 auto;
			min-width: auto;
		}
	`),Bi(i,s),i})();var al=function(a,n,s,i,l,c){function d(x){if(x!==void 0&&typeof x!="function")throw new TypeError("Function expected");return x}for(var h=i.kind,g=h==="getter"?"get":h==="setter"?"set":"value",p=!n&&a?i.static?a:a.prototype:null,m=n||(p?Object.getOwnPropertyDescriptor(p,i.name):{}),u,S=!1,w=s.length-1;w>=0;w--){var z={};for(var _ in i)z[_]=_==="access"?{}:i[_];for(var _ in i.access)z.access[_]=i.access[_];z.addInitializer=function(x){if(S)throw new TypeError("Cannot add initializers after decoration has completed");c.push(d(x||null))};var b=(0,s[w])(h==="accessor"?{get:m.get,set:m.set}:m[g],z);if(h==="accessor"){if(b===void 0)continue;if(b===null||typeof b!="object")throw new TypeError("Object expected");(u=d(b.get))&&(m.get=u),(u=d(b.set))&&(m.set=u),(u=d(b.init))&&l.unshift(u)}else(u=d(b))&&(h==="field"?l.unshift(u):m[g]=u)}p&&Object.defineProperty(p,i.name,m),S=!0},Ui=function(a,n,s){for(var i=arguments.length>2,l=0;l<n.length;l++)s=i?n[l].call(a,s):n[l].call(a);return i?s:void 0};let ZT=(()=>{var C,A,I,H,$,Z;let a=[lt("discord-link")],n,s=[],i,l=at,c,d=[],h=[],g,p=[],m=[],u,S=[],w=[],z,_=[],b=[],x,O=[],R=[];return C=class extends l{constructor(){super(...arguments);B(this,A,Ui(this,d,!1));B(this,I,(Ui(this,h),Ui(this,p,void 0)));B(this,H,(Ui(this,m),Ui(this,S,void 0)));B(this,$,(Ui(this,w),Ui(this,_,void 0)));B(this,Z,(Ui(this,b),Ui(this,O,void 0)));Ui(this,R)}get lightTheme(){return L(this,A)}set lightTheme(V){U(this,A,V)}get href(){return L(this,I)}set href(V){U(this,I,V)}get rel(){return L(this,H)}set rel(V){U(this,H,V)}get target(){return L(this,$)}set target(V){U(this,$,V)}get type(){return L(this,Z)}set type(V){U(this,Z,V)}render(){return F`<a
			href=${Le(this.href)}
			rel=${Le(this.rel)}
			target=${Le(this.target)}
			type=${Le(this.type)}
			class=${Lt({"discord-link-light-theme":this.lightTheme})}
			><slot></slot
		></a>`}},A=new WeakMap,I=new WeakMap,H=new WeakMap,$=new WeakMap,Z=new WeakMap,i=C,(()=>{const V=typeof Symbol=="function"&&Symbol.metadata?Object.create(l[Symbol.metadata]??null):void 0;c=[pt({context:Rt,subscribe:!0}),q({type:Boolean,reflect:!0,attribute:"light-theme"})],g=[q()],u=[q()],z=[q()],x=[q()],al(C,null,c,{kind:"accessor",name:"lightTheme",static:!1,private:!1,access:{has:T=>"lightTheme"in T,get:T=>T.lightTheme,set:(T,W)=>{T.lightTheme=W}},metadata:V},d,h),al(C,null,g,{kind:"accessor",name:"href",static:!1,private:!1,access:{has:T=>"href"in T,get:T=>T.href,set:(T,W)=>{T.href=W}},metadata:V},p,m),al(C,null,u,{kind:"accessor",name:"rel",static:!1,private:!1,access:{has:T=>"rel"in T,get:T=>T.rel,set:(T,W)=>{T.rel=W}},metadata:V},S,w),al(C,null,z,{kind:"accessor",name:"target",static:!1,private:!1,access:{has:T=>"target"in T,get:T=>T.target,set:(T,W)=>{T.target=W}},metadata:V},_,b),al(C,null,x,{kind:"accessor",name:"type",static:!1,private:!1,access:{has:T=>"type"in T,get:T=>T.type,set:(T,W)=>{T.type=W}},metadata:V},O,R),al(null,n={value:i},a,{kind:"class",name:i.name,metadata:V},null,s),i=n.value,V&&Object.defineProperty(i,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:V})})(),Be(C,"styles",nt`
		a {
			color: #00aff4;
			text-decoration: none;
		}

		a:hover {
			text-decoration: underline;
		}

		.discord-link-light-theme a {
			color: #00b0f4;
		}
	`),Ui(i,s),i})();const qT=Ie`
	<path
		fill="currentColor"
		d="M12 2a1 1 0 0 1 1 1v10.59l3.3-3.3a1 1 0 1 1 1.4 1.42l-5 5a1 1 0 0 1-1.4 0l-5-5a1 1 0 1 1 1.4-1.42l3.3 3.3V3a1 1 0 0 1 1-1ZM3 20a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2H3Z"
	/>
`;function s0(a={}){return F`<svg
		${Pe(a)}
		class="discord-icon-download"
		aria-hidden="true"
		role="img"
		xmlns="http://www.w3.org/2000/svg"
		width="20"
		height="20"
		fill="none"
		viewBox="0 0 24 24"
	>
		${qT}
	</svg>`}const YT=Ie`
	<path fill="currentColor" d="M6 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H6ZM15 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-3Z"></path>
`;function C2(a={}){return F`<svg ${Pe(a)} aria-hidden="true" role="img" width="16" height="16" fill="none" viewBox="0 0 24 24">${YT}</svg>`}const FT=Ie`
	<path fill="currentColor" d="M9.25 3.35C7.87 2.45 6 3.38 6 4.96v14.08c0 1.58 1.87 2.5 3.25 1.61l10.85-7.04a1.9 1.9 0 0 0 0-3.22L9.25 3.35Z"></path>
`;function A2(a={}){return F`<svg ${Pe(a)} aria-hidden="true" role="img" width="16" height="16" fill="none" viewBox="0 0 24 24">${FT}</svg>`}const GT=Ie`
	<path fill="currentColor" d="M12,5 L12,1 L7,6 L12,11 L12,7 C15.31,7 18,9.69 18,13 C18,16.31 15.31,19 12,19 C8.69,19 6,16.31 6,13 L4,13 C4,17.42 7.58,21 12,21 C16.42,21 20,17.42 20,13 C20,8.58 16.42,5 12,5 L12,5 Z"></path>
`;function k2(a={}){return F`<svg ${Pe(a)} aria-hidden="true" role="img" width="16" height="16" fill="none" viewBox="0 0 24 24">${GT}</svg>`}const XT=Ie`
	<path fill="currentColor" d="M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.74.32L5.92 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.92l4.28 4.68a1 1 0 0 0 .74.32H11a1 1 0 0 0 1-1V3ZM15.1 20.75c-.58.14-1.1-.33-1.1-.92v-.03c0-.5.37-.92.85-1.05a7 7 0 0 0 0-13.5A1.11 1.11 0 0 1 14 4.2v-.03c0-.6.52-1.06 1.1-.92a9 9 0 0 1 0 17.5Z"></path>
	<path fill="currentColor" d="M15.16 16.51c-.57.28-1.16-.2-1.16-.83v-.14c0-.43.28-.8.63-1.02a3 3 0 0 0 0-5.04c-.35-.23-.63-.6-.63-1.02v-.14c0-.63.59-1.1 1.16-.83a5 5 0 0 1 0 9.02Z"></path>
`;function j2(a={}){return F`<svg ${Pe(a)} aria-hidden="true" role="img" width="24" height="24" fill="none" viewBox="0 0 24 24">${XT}</svg>`}const QT=Ie`
	<path fill="currentColor" d="M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.74.32L5.92 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.92l4.28 4.68a1 1 0 0 0 .74.32H11a1 1 0 0 0 1-1V3ZM15.18 15.36c-.55.35-1.18-.12-1.18-.78v-.27c0-.36.2-.67.45-.93a2 2 0 0 0 0-2.76c-.24-.26-.45-.57-.45-.93v-.27c0-.66.63-1.13 1.18-.78a4 4 0 0 1 0 6.72Z"></path>
`;function N2(a={}){return F`<svg ${Pe(a)} aria-hidden="true" role="img" width="24" height="24" fill="none" viewBox="0 0 24 24">${QT}</svg>`}const KT=Ie`
	<path fill="currentColor" d="M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.74.32L5.92 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.92l4.28 4.68a1 1 0 0 0 .74.32H11a1 1 0 0 0 1-1V3ZM22.7 8.3a1 1 0 0 0-1.4 0L19 10.58l-2.3-2.3a1 1 0 1 0-1.4 1.42L17.58 12l-2.3 2.3a1 1 0 0 0 1.42 1.4L19 13.42l2.3 2.3a1 1 0 0 0 1.4-1.42L20.42 12l2.3-2.3a1 1 0 0 0 0-1.4Z"></path>
`;function D2(a={}){return F`<svg ${Pe(a)} aria-hidden="true" role="img" width="24" height="24" fill="none" viewBox="0 0 24 24">${KT}</svg>`}var il=function(a,n,s,i,l,c){function d(x){if(x!==void 0&&typeof x!="function")throw new TypeError("Function expected");return x}for(var h=i.kind,g=h==="getter"?"get":h==="setter"?"set":"value",p=!n&&a?i.static?a:a.prototype:null,m=n||(p?Object.getOwnPropertyDescriptor(p,i.name):{}),u,S=!1,w=s.length-1;w>=0;w--){var z={};for(var _ in i)z[_]=_==="access"?{}:i[_];for(var _ in i.access)z.access[_]=i.access[_];z.addInitializer=function(x){if(S)throw new TypeError("Cannot add initializers after decoration has completed");c.push(d(x||null))};var b=(0,s[w])(h==="accessor"?{get:m.get,set:m.set}:m[g],z);if(h==="accessor"){if(b===void 0)continue;if(b===null||typeof b!="object")throw new TypeError("Object expected");(u=d(b.get))&&(m.get=u),(u=d(b.set))&&(m.set=u),(u=d(b.init))&&l.unshift(u)}else(u=d(b))&&(h==="field"?l.unshift(u):m[g]=u)}p&&Object.defineProperty(p,i.name,m),S=!0},Ii=function(a,n,s){for(var i=arguments.length>2,l=0;l<n.length;l++)s=i?n[l].call(a,s):n[l].call(a);return i?s:void 0};let WT=(()=>{var C,A,I,H,$,Z;let a=[lt("discord-audio-attachment")],n,s=[],i,l=y2,c,d=[],h=[],g,p=[],m=[],u,S=[],w=[],z,_=[],b=[],x,O=[],R=[];return C=class extends l{constructor(){super(...arguments);B(this,A,Ii(this,d,void 0));B(this,I,(Ii(this,h),Ii(this,p,void 0)));B(this,H,(Ii(this,m),Ii(this,S,void 0)));B(this,$,(Ii(this,w),Ii(this,_,void 0)));B(this,Z,(Ii(this,b),Ii(this,O,!1)));Ii(this,R)}get href(){return L(this,A)}set href(V){U(this,A,V)}get name(){return L(this,I)}set name(V){U(this,I,V)}get bytes(){return L(this,H)}set bytes(V){U(this,H,V)}get bytesUnit(){return L(this,$)}set bytesUnit(V){U(this,$,V)}get lightTheme(){return L(this,Z)}set lightTheme(V){U(this,Z,V)}render(){var T,W;const V=(W=(T=this.name)==null?void 0:T.replaceAll(/\s/g,"_"))==null?void 0:W.replaceAll(/[^\w-]/g,"");return F`<div class="discord-media-attachment-non-visual-media-item-container">
			<div class="discord-audio-attachment-non-visual-media-item">
				<div class="discord-media-attachment-mosaic-item-media">
					<div
						class=${Lt({"discord-audio-attachment-wrapper-audio":!0,"discord-audio-attachment-light-theme":this.lightTheme})}
					>
						<div class="discord-audio-attachment-audio-metadata">
							<div class="discord-audio-attachment-audio-metadata-content">
								<discord-link
									href=${Le(this.href)}
									ref="noreferrer noopener"
									target="_blank"
									role="button"
									aria-label="Download"
								>
									${V}
								</discord-link>
								<div class="discord-audio-attachment-audio-metadata-size">
									${this.bytes}${De(this.bytesUnit,()=>F` ${this.bytesUnit}`,()=>null)}
								</div>
							</div>
						</div>
						<audio
							${un(this.mediaComponentRef)}
							class="discord-audio-attachment-audio-element"
							preload="metadata"
							@progress=${this.displayBufferedAmount}
							@ended=${this.handleEnded}
						>
							<source src=${Le(this.href)} />
						</audio>
						<div class="discord-media-attachment-controls" style="transform: translateY(0%)">
							<div
								class="discord-media-attachment-video-button"
								tabindex="0"
								aria-label="${this.isPlaying?"Pause":"Play"}"
								role="button"
								@click=${this.handleClickPlayPauseIcon}
								@keydown=${this.handleSpaceToPlayPause}
							>
								${De(this.hasEnded,()=>k2({class:"discord-media-attachment-control-icon"}),()=>De(this.isPlaying,()=>C2({class:"discord-media-attachment-control-icon"}),()=>A2({class:"discord-media-attachment-control-icon"})))}
							</div>
							<div class="discord-media-attachment-duration-time-wrapper">
								<span role="status" class="discord-media-attachment-duration-time-display">${this.currentPlaybackPosition}</span>
								<span
									role="separator"
									class="discord-media-attachment-duration-time-display discord-media-attachment-duration-time-separator"
									>/</span
								>
								<span class="discord-media-attachment-duration-time-display">${this.totalMediaDuration}</span>
							</div>
							<div class="discord-media-attachment-horizontal">
								<div class="discord-media-attachment-media-bar-interaction">
									<input
										type="range"
										${un(this.seekSliderRef)}
										class="discord-media-attachment-playback-control"
										@input=${this.handleSeekSliderInput}
										@change=${this.handleSeekSliderChange}
										max="100"
										value="0"
									/>
								</div>
							</div>
							<div class="discord-media-attachment-flex">
								<div class="discord-media-attachment-flex-container">
									<div ${un(this.volumeControlRef)} class="discord-media-attachment-button-slider">
										<div
											class="discord-media-attachment-volume-vertical"
											@mouseenter=${this.handleVolumeVerticalEnter}
											@mouseleave=${this.handleVolumeVerticalLeave}
										>
											<input
												${un(this.volumeControlInputRef)}
												type="range"
												class="discord-media-attachment-volume-slider"
												@input=${this.handleVolumeSliderInput}
												max="100"
												value="100"
											/>
										</div>
									</div>
									<button
										aria-label="Control volume"
										type="button"
										class="discord-media-attachment-button"
										@focus=${this.handleVolumeVerticalFocus}
										@blur=${this.handleVolumeVerticalBlur}
										@mouseover=${this.handleVolumeVerticalEnter}
										@mouseout=${this.handleVolumeVerticalLeave}
										@click=${this.handleClickMuteIcon}
									>
										<div class="discord-media-attachment-button-content">
											${De(this.currentVolume===0||this.isMuted,()=>D2({class:"discord-media-attachment-button-control-icon"}),()=>De(this.currentVolume<=.5,()=>N2({class:"discord-media-attachment-button-control-icon"}),()=>j2({class:"discord-media-attachment-button-control-icon"})))}
										</div>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="discord-button-download-attachment">
				<a
					class="discord-link-download-attachment"
					aria-label="Download"
					href="${Le(this.href)}"
					rel="noreferrer noopener"
					target="_blank"
					role="button"
					tabindex="0"
				>
					${s0()}
				</a>
			</div>
		</div>`}},A=new WeakMap,I=new WeakMap,H=new WeakMap,$=new WeakMap,Z=new WeakMap,i=C,(()=>{const V=typeof Symbol=="function"&&Symbol.metadata?Object.create(l[Symbol.metadata]??null):void 0;c=[q()],g=[q()],u=[q({type:Number})],z=[q({attribute:"bytes-unit"})],x=[pt({context:Rt,subscribe:!0}),q({type:Boolean,reflect:!0,attribute:"light-theme"})],il(C,null,c,{kind:"accessor",name:"href",static:!1,private:!1,access:{has:T=>"href"in T,get:T=>T.href,set:(T,W)=>{T.href=W}},metadata:V},d,h),il(C,null,g,{kind:"accessor",name:"name",static:!1,private:!1,access:{has:T=>"name"in T,get:T=>T.name,set:(T,W)=>{T.name=W}},metadata:V},p,m),il(C,null,u,{kind:"accessor",name:"bytes",static:!1,private:!1,access:{has:T=>"bytes"in T,get:T=>T.bytes,set:(T,W)=>{T.bytes=W}},metadata:V},S,w),il(C,null,z,{kind:"accessor",name:"bytesUnit",static:!1,private:!1,access:{has:T=>"bytesUnit"in T,get:T=>T.bytesUnit,set:(T,W)=>{T.bytesUnit=W}},metadata:V},_,b),il(C,null,x,{kind:"accessor",name:"lightTheme",static:!1,private:!1,access:{has:T=>"lightTheme"in T,get:T=>T.lightTheme,set:(T,W)=>{T.lightTheme=W}},metadata:V},O,R),il(null,n={value:i},a,{kind:"class",name:i.name,metadata:V},null,s),i=n.value,V&&Object.defineProperty(i,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:V})})(),Be(C,"styles",[x2,_2,b2,nt`
			:host {
				display: grid;
				height: -moz-fit-content;
				height: fit-content;
				grid-auto-flow: row;
				grid-row-gap: 0.25rem;
				grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
				text-indent: 0;
				min-height: 0;
				min-width: 0;
				padding-top: 0.125rem;
				padding-bottom: 0.125rem;
				position: relative;

				--seek-before-width: 0%;
				--buffered-width: 0%;
				--volume-slider-opacity: 0;
			}

			.discord-audio-attachment-non-visual-media-item {
				width: -moz-fit-content;
				width: fit-content;
				max-width: 100%;
			}

			.discord-media-attachment-mosaic-item-media {
				width: 100%;
			}

			.discord-audio-attachment-wrapper-audio {
				background-color: #282828;
				border-color: #202020;
				border-radius: 8px;
				border-style: solid;
				border-width: 1px;
				box-sizing: border-box;
				color: hsl(0 calc(1 * 0%) 100% / 1);
				display: flex;
				flex-direction: column;
				flex: auto;
				height: auto;
				justify-content: space-between;
				max-width: 100%;
				overflow: visible;
				padding: 16px;
				position: relative;
				user-select: none;
				width: 432px;
			}

			.discord-audio-attachment-light-theme.discord-audio-attachment-wrapper-audio {
				border-color: #f3f3f3;
				background-color: #f9f9f9;
			}

			.discord-audio-attachment-audio-metadata {
				display: flex;
			}

			.discord-audio-attachment-audio-metadata::before {
				width: 24px;
				height: 40px;
				content: '';
				background-image: url('data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9Ijk2IiB2aWV3Qm94PSIwIDAgNzIgOTYiIHdpZHRoPSI3MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtNzIgMjkuM3Y2MC4zYzAgMi4yNCAwIDMuMzYtLjQ0IDQuMjItLjM4Ljc0LTEgMS4zNi0xLjc0IDEuNzQtLjg2LjQ0LTEuOTguNDQtNC4yMi40NGgtNTkuMmMtMi4yNCAwLTMuMzYgMC00LjIyLS40NC0uNzQtLjM4LTEuMzYtMS0xLjc0LTEuNzQtLjQ0LS44Ni0uNDQtMS45OC0uNDQtNC4yMnYtODMuMmMwLTIuMjQgMC0zLjM2LjQ0LTQuMjIuMzgtLjc0IDEtMS4zNiAxLjc0LTEuNzQuODYtLjQ0IDEuOTgtLjQ0IDQuMjItLjQ0aDM2LjNjMS45NiAwIDIuOTQgMCAzLjg2LjIyLjUuMTIuOTguMjggMS40NC41djE2Ljg4YzAgMi4yNCAwIDMuMzYuNDQgNC4yMi4zOC43NCAxIDEuMzYgMS43NCAxLjc0Ljg2LjQ0IDEuOTguNDQgNC4yMi40NGgxNi44OGMuMjIuNDYuMzguOTQuNSAxLjQ0LjIyLjkyLjIyIDEuOS4yMiAzLjg2eiIgZmlsbD0iI2QzZDZmZCIvPjxwYXRoIGQ9Im02OC4yNiAyMC4yNmMxLjM4IDEuMzggMi4wNiAyLjA2IDIuNTYgMi44OC4xOC4yOC4zMi41Ni40Ni44NmgtMTYuODhjLTIuMjQgMC0zLjM2IDAtNC4yMi0uNDQtLjc0LS4zOC0xLjM2LTEtMS43NC0xLjc0LS40NC0uODYtLjQ0LTEuOTgtLjQ0LTQuMjJ2LTE2Ljg4MDAyOWMuMy4xNC41OC4yOC44Ni40NTk5OTkuODIuNSAxLjUgMS4xOCAyLjg4IDIuNTZ6IiBmaWxsPSIjOTM5YmY5Ii8+PHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJtMzQuNzYgNDIuMTZjLS43NC0uMy0xLjYtLjE0LTIuMTguNDRsLTguNTggOS40aC02Yy0xLjEgMC0yIC45LTIgMnYxMmMwIDEuMS45IDIgMiAyaDZsOC41OCA5LjQyYy41OC41OCAxLjQ0Ljc0IDIuMTguNDQuNzYtLjMyIDEuMjQtMS4wNiAxLjI0LTEuODZ2LTMyYzAtLjgtLjQ4LTEuNTQtMS4yNC0xLjg0em01LjI0IDMuODR2NGM1LjUyIDAgMTAgNC40OCAxMCAxMHMtNC40OCAxMC0xMCAxMHY0YzcuNzIgMCAxNC02LjI4IDE0LTE0cy02LjI4LTE0LTE0LTE0em0wIDhjMy4zIDAgNiAyLjcgNiA2cy0yLjcgNi02IDZ2LTRjMS4xIDAgMi0uOSAyLTJzLS45LTItMi0yeiIgZmlsbD0iIzU4NjVmMiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+');
				background-size: 100%auto;
				background-repeat: no-repeat;
			}

			.discord-audio-attachment-audio-metadata-content {
				padding: 0 8px;
				flex: 1 1 auto;
				white-space: nowrap;
				overflow: hidden;
			}

			.discord-audio-attachment-audio-metadata-size {
				color: color-mix(in oklab, hsl(214 calc(1 * 8.1%) 61.2% / 1) 100%, black 0%);
				font-size: 12px;
				line-height: 16px;
				font-weight: 500;
				opacity: 0.7;
				white-space: nowrap;
				text-overflow: ellipsis;
				overflow: hidden;
			}

			.discord-audio-attachment-audio-element {
				display: none !important;
				position: absolute;
				width: 0;
				height: 0;
			}
		`]),Ii(i,s),i})();const JT=Ie`
	<path d="M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z" fill="currentColor" />
`;function yi(a={}){return F`<svg
		${Pe(a)}
		class="discord-application-tag-verified"
		aria-label="Verified App"
		aria-hidden="false"
		width="16"
		height="16"
		viewBox="0 0 16 15.2"
		xmlns="http://www.w3.org/2000/svg"
	>
		${JT}
	</svg>`}var Bf=function(a,n,s,i,l,c){function d(x){if(x!==void 0&&typeof x!="function")throw new TypeError("Function expected");return x}for(var h=i.kind,g=h==="getter"?"get":h==="setter"?"set":"value",p=!n&&a?i.static?a:a.prototype:null,m=n||(p?Object.getOwnPropertyDescriptor(p,i.name):{}),u,S=!1,w=s.length-1;w>=0;w--){var z={};for(var _ in i)z[_]=_==="access"?{}:i[_];for(var _ in i.access)z.access[_]=i.access[_];z.addInitializer=function(x){if(S)throw new TypeError("Cannot add initializers after decoration has completed");c.push(d(x||null))};var b=(0,s[w])(h==="accessor"?{get:m.get,set:m.set}:m[g],z);if(h==="accessor"){if(b===void 0)continue;if(b===null||typeof b!="object")throw new TypeError("Object expected");(u=d(b.get))&&(m.get=u),(u=d(b.set))&&(m.set=u),(u=d(b.init))&&l.unshift(u)}else(u=d(b))&&(h==="field"?l.unshift(u):m[g]=u)}p&&Object.defineProperty(p,i.name,m),S=!0},go=function(a,n,s){for(var i=arguments.length>2,l=0;l<n.length;l++)s=i?n[l].call(a,s):n[l].call(a);return i?s:void 0};let eC=(()=>{var u,S,w;let a=[lt("discord-verified-author-tag")],n,s=[],i,l=at,c,d=[],h=[],g,p=[],m=[];return u=class extends l{constructor(){super(...arguments);B(this,S,go(this,d,!1));B(this,w,(go(this,h),go(this,p,!1)));go(this,m)}get verified(){return L(this,S)}set verified(b){U(this,S,b)}get compactMode(){return L(this,w)}set compactMode(b){U(this,w,b)}render(){return F`${De(this.verified,()=>yi())}App`}},S=new WeakMap,w=new WeakMap,i=u,(()=>{const b=typeof Symbol=="function"&&Symbol.metadata?Object.create(l[Symbol.metadata]??null):void 0;c=[q({type:Boolean})],g=[pt({context:jr}),q({type:Boolean,reflect:!0,attribute:"compact-mode"})],Bf(u,null,c,{kind:"accessor",name:"verified",static:!1,private:!1,access:{has:x=>"verified"in x,get:x=>x.verified,set:(x,O)=>{x.verified=O}},metadata:b},d,h),Bf(u,null,g,{kind:"accessor",name:"compactMode",static:!1,private:!1,access:{has:x=>"compactMode"in x,get:x=>x.compactMode,set:(x,O)=>{x.compactMode=O}},metadata:b},p,m),Bf(null,n={value:i},a,{kind:"class",name:i.name,metadata:b},null,s),i=n.value,b&&Object.defineProperty(i,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:b})})(),Be(u,"styles",nt`
		:host {
			background-color: #5865f2;
			color: #fff;
			font-size: 0.625em;
			margin-left: 4px;
			border-radius: 3px;
			line-height: 100%;
			text-transform: uppercase;
			display: inline-flex;
			align-items: center;
			height: 0.9375rem;
			padding: 0 0.275rem;
			margin-top: 0.075em;
			border-radius: 0.1875rem;
		}

		:host .discord-application-tag-verified {
			display: inline-block;
			width: 0.9375rem;
			height: 0.9375rem;
			margin-left: -0.25rem;
		}

		:host([compact-mode]) {
			padding-left: 10px;
			padding-right: 4px;
			margin-right: 0.25rem;
			margin-left: 0px !important;
			margin-top: 0px !important;
		}

		:host([compact-mode]) .discord-application-tag-verified {
			margin-right: 0.7em;
			margin-left: -0.7em;
		}
	`),go(i,s),i})();/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const O2="important",tC=" !"+O2,Pn=au(class extends r0{constructor(a){var n;if(super(a),a.type!==n0.ATTRIBUTE||a.name!=="style"||((n=a.strings)==null?void 0:n.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(a){return Object.keys(a).reduce(((n,s)=>{const i=a[s];return i==null?n:n+`${s=s.includes("-")?s:s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`}),"")}update(a,[n]){const{style:s}=a.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(n)),this.render(n);for(const i of this.ft)n[i]==null&&(this.ft.delete(i),i.includes("-")?s.removeProperty(i):s[i]=null);for(const i in n){const l=n[i];if(l!=null){this.ft.add(i);const c=typeof l=="string"&&l.endsWith(tC);i.includes("-")||c?s.setProperty(i,c?l.slice(0,-11):l,c?O2:""):s[i]=l}}return Cr}});class Yn extends Error{constructor(n){super(n),this.name="DiscordComponentsError"}}const aC=new Intl.DateTimeFormat("en-US",{day:"2-digit",month:"2-digit",year:"numeric"}),iC=new Intl.DateTimeFormat("en-US",{hour12:!0,hour:"2-digit",minute:"2-digit"}),nC=new Intl.DateTimeFormat("en-US",{hour12:!1,hour:"2-digit",minute:"2-digit"}),rC=a=>a instanceof Date?aC.format(a):a,sC=(a,n=!1)=>a instanceof Date?n?nC.format(a):iC.format(a):a;function Do(a,n=!1,s=!1){if(!(a instanceof Date)&&typeof a!="string")throw new TypeError("Timestamp prop must be a Date object or a string.");return n?sC(a,s):rC(a)}const w3=/\.(?<ext>bmp|jpe?g|png|gif|webp|tiff)$/i;function lC(a){if(!w3.test(a))throw new Yn(`The url of an image for discord-image-attachment should match the regex ${w3}`)}const oC=/(?:<(?<animated>a)?:(?<name>\w{2,32}):)?(?<id>\d{17,21})>?/;function l0(a){var i;const n=(i=zl().emojis)==null?void 0:i[a];if(n)return n;const s=oC.exec(a);if(s!=null&&s.groups){const{name:l,id:c,animated:d}=s.groups;return{name:l,url:`https://cdn.discordapp.com/emojis/${c}.${d?"gif":"png"}`}}}function H2(a){if(a)return $T.get(a)??a}var ei=function(a,n,s,i,l,c){function d(x){if(x!==void 0&&typeof x!="function")throw new TypeError("Function expected");return x}for(var h=i.kind,g=h==="getter"?"get":h==="setter"?"set":"value",p=!n&&a?i.static?a:a.prototype:null,m=n||(p?Object.getOwnPropertyDescriptor(p,i.name):{}),u,S=!1,w=s.length-1;w>=0;w--){var z={};for(var _ in i)z[_]=_==="access"?{}:i[_];for(var _ in i.access)z.access[_]=i.access[_];z.addInitializer=function(x){if(S)throw new TypeError("Cannot add initializers after decoration has completed");c.push(d(x||null))};var b=(0,s[w])(h==="accessor"?{get:m.get,set:m.set}:m[g],z);if(h==="accessor"){if(b===void 0)continue;if(b===null||typeof b!="object")throw new TypeError("Object expected");(u=d(b.get))&&(m.get=u),(u=d(b.set))&&(m.set=u),(u=d(b.init))&&l.unshift(u)}else(u=d(b))&&(h==="field"?l.unshift(u):m[g]=u)}p&&Object.defineProperty(p,i.name,m),S=!0},Vt=function(a,n,s){for(var i=arguments.length>2,l=0;l<n.length;l++)s=i?n[l].call(a,s):n[l].call(a);return i?s:void 0};let cC=(()=>{var J,le,Ee,$e,ue,ie,Me,Ke,Ge,Fe,ke,Ce,pe,te;let a=[lt("discord-author-info")],n,s=[],i,l=at,c,d=[],h=[],g,p=[],m=[],u,S=[],w=[],z,_=[],b=[],x,O=[],R=[],C,A=[],I=[],H,$=[],Z=[],he,xe=[],V=[],T,W=[],ze=[],k,D=[],P=[],ge,re=[],j=[],G,ee=[],ae=[],X,se=[],K=[];return J=class extends l{constructor(){super(...arguments);B(this,le,Vt(this,d,void 0));B(this,Ee,(Vt(this,h),Vt(this,p,!1)));B(this,$e,(Vt(this,m),Vt(this,S,!1)));B(this,ue,(Vt(this,w),Vt(this,_,!1)));B(this,ie,(Vt(this,b),Vt(this,O,!1)));B(this,Me,(Vt(this,R),Vt(this,A,void 0)));B(this,Ke,(Vt(this,I),Vt(this,$,void 0)));B(this,Ge,(Vt(this,Z),Vt(this,xe,void 0)));B(this,Fe,(Vt(this,V),Vt(this,W,void 0)));B(this,ke,(Vt(this,ze),Vt(this,D,void 0)));B(this,Ce,(Vt(this,P),Vt(this,re,!1)));B(this,pe,(Vt(this,j),Vt(this,ee,!1)));B(this,te,(Vt(this,ae),Vt(this,se,!1)));Vt(this,K)}get author(){return L(this,le)}set author(je){U(this,le,je)}get bot(){return L(this,Ee)}set bot(je){U(this,Ee,je)}get server(){return L(this,$e)}set server(je){U(this,$e,je)}get officialApp(){return L(this,ue)}set officialApp(je){U(this,ue,je)}get op(){return L(this,ie)}set op(je){U(this,ie,je)}get roleColor(){return L(this,Me)}set roleColor(je){U(this,Me,je)}get roleIcon(){return L(this,Ke)}set roleIcon(je){U(this,Ke,je)}get roleName(){return L(this,Ge)}set roleName(je){U(this,Ge,je)}get clanIcon(){return L(this,Fe)}set clanIcon(je){U(this,Fe,je)}get clanTag(){return L(this,ke)}set clanTag(je){U(this,ke,je)}get verified(){return L(this,Ce)}set verified(je){U(this,Ce,je)}get compactMode(){return L(this,pe)}set compactMode(je){U(this,pe,je)}get lightTheme(){return L(this,te)}set lightTheme(je){U(this,te,je)}render(){var We,sa;const je=H2(this.clanIcon),Te=(We=this.clanTag)==null?void 0:We.slice(0,4);return F`${De(this.compactMode,()=>null,()=>F`<span class="discord-author-username" style="${Pn({color:this.roleColor??void 0})}">${this.author}</span>`)}
		${De(this.roleIcon&&!this.compactMode,()=>F`<img
					class="discord-author-role-icon"
					src=${Le(this.roleIcon)}
					height="20"
					width="20"
					alt=${Le(this.roleName)}
					draggable="false"
				/>`)}
		${De(this.bot&&!this.server&&!this.officialApp,()=>F`<discord-verified-author-tag .verified=${this.verified}></discord-verified-author-tag>`)}
		${De(this.server&&!this.bot&&!this.officialApp,()=>F`<span class="discord-application-tag">Server</span>`)}
		${De(this.officialApp&&!this.server&&!this.bot,()=>F`<span class="discord-official-application">${yi()}OFFICIAL</span>`)}
		${De(this.op,()=>F`<span class="discord-application-tag discord-application-tag-op">OP</span>`)}
		${De(this.compactMode,()=>F`<span class="discord-author-username" style="${Pn({color:this.roleColor??void 0})}">${this.author}</span>`)}
		${De(this.clanIcon&&this.clanTag&&((sa=this.clanTag)==null?void 0:sa.length)>0,()=>F`
				<span class="discord-clan-tag">
					${je==="string"?F`<img srcset=${Le(je)} alt=${Le(Te)} width="12" height="12" draggable="false" />`:je}
					<span>${Te}</span>
				</span>
			`)} `}},le=new WeakMap,Ee=new WeakMap,$e=new WeakMap,ue=new WeakMap,ie=new WeakMap,Me=new WeakMap,Ke=new WeakMap,Ge=new WeakMap,Fe=new WeakMap,ke=new WeakMap,Ce=new WeakMap,pe=new WeakMap,te=new WeakMap,i=J,(()=>{const je=typeof Symbol=="function"&&Symbol.metadata?Object.create(l[Symbol.metadata]??null):void 0;c=[q()],g=[q({type:Boolean})],u=[q({type:Boolean})],z=[q({type:Boolean,attribute:"official-app"})],x=[q({type:Boolean})],C=[q({attribute:"role-color"})],H=[q({attribute:"role-icon"})],he=[q({attribute:"role-name"})],T=[q({attribute:"clan-icon"})],k=[q({attribute:"clan-tag"})],ge=[q({type:Boolean})],G=[pt({context:jr}),q({type:Boolean,reflect:!0,attribute:"compact-mode"})],X=[pt({context:Rt}),q({type:Boolean,reflect:!0,attribute:"light-theme"})],ei(J,null,c,{kind:"accessor",name:"author",static:!1,private:!1,access:{has:Te=>"author"in Te,get:Te=>Te.author,set:(Te,We)=>{Te.author=We}},metadata:je},d,h),ei(J,null,g,{kind:"accessor",name:"bot",static:!1,private:!1,access:{has:Te=>"bot"in Te,get:Te=>Te.bot,set:(Te,We)=>{Te.bot=We}},metadata:je},p,m),ei(J,null,u,{kind:"accessor",name:"server",static:!1,private:!1,access:{has:Te=>"server"in Te,get:Te=>Te.server,set:(Te,We)=>{Te.server=We}},metadata:je},S,w),ei(J,null,z,{kind:"accessor",name:"officialApp",static:!1,private:!1,access:{has:Te=>"officialApp"in Te,get:Te=>Te.officialApp,set:(Te,We)=>{Te.officialApp=We}},metadata:je},_,b),ei(J,null,x,{kind:"accessor",name:"op",static:!1,private:!1,access:{has:Te=>"op"in Te,get:Te=>Te.op,set:(Te,We)=>{Te.op=We}},metadata:je},O,R),ei(J,null,C,{kind:"accessor",name:"roleColor",static:!1,private:!1,access:{has:Te=>"roleColor"in Te,get:Te=>Te.roleColor,set:(Te,We)=>{Te.roleColor=We}},metadata:je},A,I),ei(J,null,H,{kind:"accessor",name:"roleIcon",static:!1,private:!1,access:{has:Te=>"roleIcon"in Te,get:Te=>Te.roleIcon,set:(Te,We)=>{Te.roleIcon=We}},metadata:je},$,Z),ei(J,null,he,{kind:"accessor",name:"roleName",static:!1,private:!1,access:{has:Te=>"roleName"in Te,get:Te=>Te.roleName,set:(Te,We)=>{Te.roleName=We}},metadata:je},xe,V),ei(J,null,T,{kind:"accessor",name:"clanIcon",static:!1,private:!1,access:{has:Te=>"clanIcon"in Te,get:Te=>Te.clanIcon,set:(Te,We)=>{Te.clanIcon=We}},metadata:je},W,ze),ei(J,null,k,{kind:"accessor",name:"clanTag",static:!1,private:!1,access:{has:Te=>"clanTag"in Te,get:Te=>Te.clanTag,set:(Te,We)=>{Te.clanTag=We}},metadata:je},D,P),ei(J,null,ge,{kind:"accessor",name:"verified",static:!1,private:!1,access:{has:Te=>"verified"in Te,get:Te=>Te.verified,set:(Te,We)=>{Te.verified=We}},metadata:je},re,j),ei(J,null,G,{kind:"accessor",name:"compactMode",static:!1,private:!1,access:{has:Te=>"compactMode"in Te,get:Te=>Te.compactMode,set:(Te,We)=>{Te.compactMode=We}},metadata:je},ee,ae),ei(J,null,X,{kind:"accessor",name:"lightTheme",static:!1,private:!1,access:{has:Te=>"lightTheme"in Te,get:Te=>Te.lightTheme,set:(Te,We)=>{Te.lightTheme=We}},metadata:je},se,K),ei(null,n={value:i},a,{kind:"class",name:i.name,metadata:je},null,s),i=n.value,je&&Object.defineProperty(i,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:je})})(),Be(J,"styles",nt`
		:host {
			display: inline-flex;
			align-items: center;
			font-size: 16px;
			text-underline-offset: 1px;
			margin-right: 0.25rem;
		}

		:host .discord-author-username {
			color: #fff;
			font-size: 1em;
			font-weight: 500;
		}

		:host .discord-author-username:hover {
			text-decoration: underline;
			cursor: pointer;
		}

		:host([light-theme]) .discord-author-username {
			color: #23262a;
		}

		:host .discord-clan-tag {
			background-color: oklab(0.431937 0.00109309 -0.0132537 / 0.54);
			color: #fff;
			font-size: 12px;
			font-weight: 500;
			margin-left: 0.25rem;
			border-radius: 4px;
			line-height: 100%;
			text-transform: uppercase;
			display: inline-flex;
			width: max-content;
			gap: 0.25rem;
			justify-content: space-between;
			align-items: center;
			padding: 0 0.275rem;
			margin-top: 0.075em;
			height: 1.2rem;
			min-width: 45px;
			line-height: 1rem !important;
			transition: background-color 100ms ease-in-out;
			cursor: pointer;
		}

		:host .discord-clan-tag:hover {
			background-color: oklab(0.431937 0.00109309 -0.0132537 / 0.34);
		}

		:host([light-theme]) .discord-clan-tag {
			background-color: hsl(0 calc(1 * 0%) 0.8%/0.09);
			color: #000;
		}

		:host([light-theme]) .discord-clan-tag:hover {
			background-color: hsl(0 calc(1 * 0%) 0.8%/0.03);
		}

		:host([compact-mode]) .discord-clan-tag {
			margin-left: 0rem;
		}

		:host .discord-clan-tag span,
		:host .discord-clan-tag svg,
		:host .discord-clan-tag img {
			user-select: none;
			-webkit-user-select: none;
		}

		:host .discord-application-tag {
			background-color: #5865f2;
			color: #fff;
			font-size: 0.625em;
			border-radius: 3px;
			line-height: 100%;
			text-transform: uppercase;

			/* Use flex layout to ensure both verified icon and "BOT" text are aligned to center */
			display: inline-flex;
			align-items: center;

			/* Styling taken through Inspect Element on Discord client for Windows */
			height: 0.9375rem;
			padding: 0 0.275rem;
			margin-top: 0.075em;
			border-radius: 0.1875rem;
		}

		:host .discord-official-application {
			background-color: #5865f2;
			color: #fff;
			font-size: 0.625em;
			margin-left: 4px;
			border-radius: 3px;
			line-height: 100%;
			text-transform: uppercase;

			/* Use flex layout to ensure both verified icon and "BOT" text are aligned to center */
			display: flex;
			align-items: center;

			/* Styling taken through Inspect Element on Discord client for Windows */
			height: 0.9375rem;
			padding: 0 0.275rem;
			margin-top: 0.075em;
			border-radius: 0.1875rem;
		}

		:host([compact-mode]) .discord-official-application {
			margin-right: 5px;
			margin-left: 0px !important;
		}

		:host .discord-application-tag.discord-application-tag-op {
			background-color: #c9cdfb;
			color: #4752c4;
			border-radius: 0.4rem;
		}

		:host .discord-author-role-icon {
			margin-left: 0.25rem;
			vertical-align: top;
			height: calc(1rem + 4px);
			width: calc(1rem + 4px);
		}

		:host([compact-mode]) .discord-author-username {
			margin-right: 0.25rem;
		}

		:host([compact-mode]) .discord-application-tag {
			padding-left: 10px;
			padding-right: 4px;
			margin-right: 0.25rem;
		}
	`),Vt(i,s),i})();var dC=function(a,n,s,i,l,c){function d(x){if(x!==void 0&&typeof x!="function")throw new TypeError("Function expected");return x}for(var h=i.kind,g=h==="getter"?"get":h==="setter"?"set":"value",p=!n&&a?i.static?a:a.prototype:null,m=n||(p?Object.getOwnPropertyDescriptor(p,i.name):{}),u,S=!1,w=s.length-1;w>=0;w--){var z={};for(var _ in i)z[_]=_==="access"?{}:i[_];for(var _ in i.access)z.access[_]=i.access[_];z.addInitializer=function(x){if(S)throw new TypeError("Cannot add initializers after decoration has completed");c.push(d(x||null))};var b=(0,s[w])(h==="accessor"?{get:m.get,set:m.set}:m[g],z);if(h==="accessor"){if(b===void 0)continue;if(b===null||typeof b!="object")throw new TypeError("Object expected");(u=d(b.get))&&(m.get=u),(u=d(b.set))&&(m.set=u),(u=d(b.init))&&l.unshift(u)}else(u=d(b))&&(h==="field"?l.unshift(u):m[g]=u)}p&&Object.defineProperty(p,i.name,m),S=!0},uC=function(a,n,s){for(var i=arguments.length>2,l=0;l<n.length;l++)s=i?n[l].call(a,s):n[l].call(a);return i?s:void 0};let hC=(()=>{var c;let a=[lt("discord-bold")],n,s=[],i,l=at;return c=class extends l{render(){return F`
			<strong>
				<slot></slot>
			</strong>
		`}},i=c,(()=>{const h=typeof Symbol=="function"&&Symbol.metadata?Object.create(l[Symbol.metadata]??null):void 0;dC(null,n={value:i},a,{kind:"class",name:i.name,metadata:h},null,s),i=n.value,h&&Object.defineProperty(i,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:h})})(),Be(c,"styles",nt`
		:host > strong {
			font-weight: 700;
		}
	`),uC(i,s),i})();const fC=Ie`
	<path
		fill="currentColor"
		d="M10 5V3H5.375C4.06519 3 3 4.06519 3 5.375V18.625C3 19.936 4.06519 21 5.375 21H18.625C19.936 21 21 19.936 21 18.625V14H19V19H5V5H10Z"
	/>
	<path fill="currentColor" d="M21 2.99902H14V4.99902H17.586L9.29297 13.292L10.707 14.706L19 6.41302V9.99902H21V2.99902Z"
	/>
`;function mC(a={}){return F`<svg ${Pe(a)} class="discord-button-launch" aria-hidden="false" width="16" height="16" viewBox="0 0 24 24">
		${fC}
	</svg>`}var Jr=function(a,n,s,i,l,c){function d(x){if(x!==void 0&&typeof x!="function")throw new TypeError("Function expected");return x}for(var h=i.kind,g=h==="getter"?"get":h==="setter"?"set":"value",p=!n&&a?i.static?a:a.prototype:null,m=n||(p?Object.getOwnPropertyDescriptor(p,i.name):{}),u,S=!1,w=s.length-1;w>=0;w--){var z={};for(var _ in i)z[_]=_==="access"?{}:i[_];for(var _ in i.access)z.access[_]=i.access[_];z.addInitializer=function(x){if(S)throw new TypeError("Cannot add initializers after decoration has completed");c.push(d(x||null))};var b=(0,s[w])(h==="accessor"?{get:m.get,set:m.set}:m[g],z);if(h==="accessor"){if(b===void 0)continue;if(b===null||typeof b!="object")throw new TypeError("Object expected");(u=d(b.get))&&(m.get=u),(u=d(b.set))&&(m.set=u),(u=d(b.init))&&l.unshift(u)}else(u=d(b))&&(h==="field"?l.unshift(u):m[g]=u)}p&&Object.defineProperty(p,i.name,m),S=!0},hi=function(a,n,s){for(var i=arguments.length>2,l=0;l<n.length;l++)s=i?n[l].call(a,s):n[l].call(a);return i?s:void 0};let pC=(()=>{var H,$,Z,he,xe,V,T;let a=[lt("discord-button")],n,s=[],i,l=at,c,d=[],h=[],g,p=[],m=[],u,S=[],w=[],z,_=[],b=[],x,O=[],R=[],C,A=[],I=[];return H=class extends l{constructor(){super(...arguments);B(this,$,hi(this,d,void 0));B(this,Z,(hi(this,h),hi(this,p,"emoji")));B(this,he,(hi(this,m),hi(this,S,void 0)));B(this,xe,(hi(this,w),hi(this,_,!1)));B(this,V,(hi(this,b),hi(this,O,"secondary")));B(this,T,(hi(this,R),hi(this,A,void 0)));Be(this,"validButtonTypes",(hi(this,I),new Set(["primary","secondary","success","destructive"])))}get emoji(){return L(this,$)}set emoji(k){U(this,$,k)}get emojiName(){return L(this,Z)}set emojiName(k){U(this,Z,k)}get url(){return L(this,he)}set url(k){U(this,he,k)}get disabled(){return L(this,xe)}set disabled(k){U(this,xe,k)}get type(){return L(this,V)}set type(k){U(this,V,k)}get modalId(){return L(this,T)}set modalId(k){U(this,T,k)}checkType(){if(this.type){if(typeof this.type!="string")throw new TypeError("DiscordButton `type` prop must be a string.");if(!this.validButtonTypes.has(this.type))throw new RangeError("DiscordButton `type` prop must be one of: 'primary', 'secondary', 'success', 'destructive'")}}checkParentElement(){var k;if(((k=this.parentElement)==null?void 0:k.tagName.toLowerCase())!=="discord-action-row")throw new Yn("All <discord-button> components must be direct children of <discord-action-row>.")}handleButtonClick(){var k,D,P,ge,re;if(this.modalId){const j=(P=(D=(k=this.parentElement)==null?void 0:k.parentElement)==null?void 0:D.parentElement)==null?void 0:P.parentElement;if(((ge=j==null?void 0:j.tagName)==null?void 0:ge.toLowerCase())==="discord-messages"){const G=j==null?void 0:j.querySelector("discord-modal"),ee=(re=G==null?void 0:G.shadowRoot)==null?void 0:re.querySelector(`dialog#${this.modalId}`),ae=ee==null?void 0:ee.querySelector("div.discord-modal-box");if(ee instanceof HTMLDialogElement&&ae instanceof HTMLDivElement&&(ee.showModal(),ae.style.display="flex",G)){const X=globalThis.getComputedStyle(globalThis.document.body).overflow;G.originalBodyOverflow=X,globalThis.document.body.style.overflow="hidden"}}}}render(){this.checkType(),this.checkParentElement();const k=this.url&&!this.disabled,D=F`
			${De(this.emoji,()=>F`<img src=${this.emoji} alt=${this.emojiName} draggable="true" class="emoji" />`)}
			<span>
				<slot></slot>
			</span>
			${De(this.url,()=>mC())}
		`;return k?F`<a class="secondary" href=${this.url} target="_blank" rel="noopener noreferrer">${D}</a>`:F`<button
			class=${Lt({[this.type]:!0,disabled:this.disabled,hoverable:!this.disabled})}
			@click=${this.handleButtonClick}
		>
			${D}
		</button>`}},$=new WeakMap,Z=new WeakMap,he=new WeakMap,xe=new WeakMap,V=new WeakMap,T=new WeakMap,i=H,(()=>{const k=typeof Symbol=="function"&&Symbol.metadata?Object.create(l[Symbol.metadata]??null):void 0;c=[q({reflect:!0,attribute:"emoji"})],g=[q({reflect:!0,attribute:"emoji-name"})],u=[q({reflect:!0,attribute:"url"})],z=[q({type:Boolean,reflect:!0,attribute:"disabled"})],x=[q({reflect:!0,attribute:"type"})],C=[q({reflect:!0,attribute:"modal-id"})],Jr(H,null,c,{kind:"accessor",name:"emoji",static:!1,private:!1,access:{has:D=>"emoji"in D,get:D=>D.emoji,set:(D,P)=>{D.emoji=P}},metadata:k},d,h),Jr(H,null,g,{kind:"accessor",name:"emojiName",static:!1,private:!1,access:{has:D=>"emojiName"in D,get:D=>D.emojiName,set:(D,P)=>{D.emojiName=P}},metadata:k},p,m),Jr(H,null,u,{kind:"accessor",name:"url",static:!1,private:!1,access:{has:D=>"url"in D,get:D=>D.url,set:(D,P)=>{D.url=P}},metadata:k},S,w),Jr(H,null,z,{kind:"accessor",name:"disabled",static:!1,private:!1,access:{has:D=>"disabled"in D,get:D=>D.disabled,set:(D,P)=>{D.disabled=P}},metadata:k},_,b),Jr(H,null,x,{kind:"accessor",name:"type",static:!1,private:!1,access:{has:D=>"type"in D,get:D=>D.type,set:(D,P)=>{D.type=P}},metadata:k},O,R),Jr(H,null,C,{kind:"accessor",name:"modalId",static:!1,private:!1,access:{has:D=>"modalId"in D,get:D=>D.modalId,set:(D,P)=>{D.modalId=P}},metadata:k},A,I),Jr(null,n={value:i},a,{kind:"class",name:i.name,metadata:k},null,s),i=n.value,k&&Object.defineProperty(i,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:k})})(),Be(H,"styles",nt`
		:host > *:first-child {
			display: flex;
			justify-content: center;
			align-items: center;
			cursor: pointer;
			margin: 4px 8px 4px 0;
			padding: 2px 16px;
			width: auto;
			height: 32px;
			min-width: 60px;
			min-height: 32px;
			-webkit-transition:
				background-color 0.17s ease,
				color 0.17s ease;
			transition:
				background-color 0.17s ease,
				color 0.17s ease;
			border-radius: 3px;
			font-size: 14px;
			font-weight: 500;
			line-height: 16px;
			text-decoration: none !important;
			/* CSS Reset to unset button styling */
			border-width: unset;
			border-style: unset;
			border-color: unset;
			border-image: unset;
			box-sizing: unset;
			font-family: 'gg sans', 'Noto Sans', Whitney, 'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif;
		}

		.success {
			color: #fff;
			background-color: #3ba55d;
		}

		.success.hoverable:hover {
			background-color: #2d7d46;
		}

		.destructive {
			color: #fff;
			background-color: #ed4245;
		}

		.destructive.hoverable:hover {
			background-color: #c03537;
		}

		.primary {
			color: #fff;
			background-color: #5865f2;
		}

		.primary.hoverable:hover {
			background-color: #4752c4;
		}

		.secondary {
			color: #fff;
			background-color: #4f545c;
		}

		.secondary.hoverable:hover {
			background-color: #5d6269;
		}

		.disabled {
			cursor: not-allowed !important;
			opacity: 0.5;
		}

		.launch {
			margin-left: 8px;
		}

		.emoji {
			margin-right: 4px;
			object-fit: contain;
			width: 1.375em;
			height: 1.375em;
			vertical-align: bottom;
		}
	`),hi(i,s),i})();var cd=function(a,n,s,i,l,c){function d(x){if(x!==void 0&&typeof x!="function")throw new TypeError("Function expected");return x}for(var h=i.kind,g=h==="getter"?"get":h==="setter"?"set":"value",p=!n&&a?i.static?a:a.prototype:null,m=n||(p?Object.getOwnPropertyDescriptor(p,i.name):{}),u,S=!1,w=s.length-1;w>=0;w--){var z={};for(var _ in i)z[_]=_==="access"?{}:i[_];for(var _ in i.access)z.access[_]=i.access[_];z.addInitializer=function(x){if(S)throw new TypeError("Cannot add initializers after decoration has completed");c.push(d(x||null))};var b=(0,s[w])(h==="accessor"?{get:m.get,set:m.set}:m[g],z);if(h==="accessor"){if(b===void 0)continue;if(b===null||typeof b!="object")throw new TypeError("Object expected");(u=d(b.get))&&(m.get=u),(u=d(b.set))&&(m.set=u),(u=d(b.init))&&l.unshift(u)}else(u=d(b))&&(h==="field"?l.unshift(u):m[g]=u)}p&&Object.defineProperty(p,i.name,m),S=!0},es=function(a,n,s){for(var i=arguments.length>2,l=0;l<n.length;l++)s=i?n[l].call(a,s):n[l].call(a);return i?s:void 0};let gC=(()=>{var z,_,b,x;let a=[lt("discord-code")],n,s=[],i,l=at,c,d=[],h=[],g,p=[],m=[],u,S=[],w=[];return z=class extends l{constructor(){super(...arguments);B(this,_,es(this,d,!1));B(this,b,(es(this,h),es(this,p,!1)));B(this,x,(es(this,m),es(this,S,!1)));es(this,w)}get multiline(){return L(this,_)}set multiline(C){U(this,_,C)}get lightTheme(){return L(this,b)}set lightTheme(C){U(this,b,C)}get embed(){return L(this,x)}set embed(C){U(this,x,C)}render(){return this.multiline?F`<discord-pre ?embed=${this.embed}
				><code><slot></slot></code
			></discord-pre>`:F`<code><slot></slot></code>`}},_=new WeakMap,b=new WeakMap,x=new WeakMap,i=z,(()=>{const C=typeof Symbol=="function"&&Symbol.metadata?Object.create(l[Symbol.metadata]??null):void 0;c=[q({type:Boolean,reflect:!0})],g=[pt({context:Rt,subscribe:!0}),q({type:Boolean,reflect:!0,attribute:"light-theme"})],u=[q({type:Boolean,reflect:!0})],cd(z,null,c,{kind:"accessor",name:"multiline",static:!1,private:!1,access:{has:A=>"multiline"in A,get:A=>A.multiline,set:(A,I)=>{A.multiline=I}},metadata:C},d,h),cd(z,null,g,{kind:"accessor",name:"lightTheme",static:!1,private:!1,access:{has:A=>"lightTheme"in A,get:A=>A.lightTheme,set:(A,I)=>{A.lightTheme=I}},metadata:C},p,m),cd(z,null,u,{kind:"accessor",name:"embed",static:!1,private:!1,access:{has:A=>"embed"in A,get:A=>A.embed,set:(A,I)=>{A.embed=I}},metadata:C},S,w),cd(null,n={value:i},a,{kind:"class",name:i.name,metadata:C},null,s),i=n.value,C&&Object.defineProperty(i,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:C})})(),Be(z,"styles",nt`
		:host {
			background-color: #2f3136;
			white-space: break-spaces;
			font-family:
				Consolas,
				Andale Mono WT,
				Andale Mono,
				Lucida Console,
				Lucida Sans Typewriter,
				DejaVu Sans Mono,
				Bitstream Vera Sans Mono,
				Liberation Mono,
				Nimbus Mono L,
				Monaco,
				Courier New,
				Courier,
				monospace;
			border-radius: 3px;
		}

		code {
			padding: 0.2em;
			margin: -0.2em;
			border-radius: 3px;
			border: none;
			font-size: 85%;
			text-indent: 0;
			white-space: pre-wrap;
		}

		:host([multiline]) code {
			display: block;
			width: 90%;
			font-size: 0.875rem;
			line-height: 1.125rem;
			padding: 0.5em;
			background: #2b2d31;
			border: 1px solid #1e1f22;
		}

		:host([embed]) code {
			background-color: #1e1f22;
		}

		:host([embed][multiline]) code {
			display: block;
			width: 100%;
			padding: 7px;
			border-radius: 4px;
			background: #1e1f22;
		}

		:host([light-theme]) code {
			border-color: #e3e5e8;
			background-color: #f2f3f5;
		}

		:host([light-theme][embed]) code {
			background-color: #e3e5e8;
		}
	`),es(i,s),i})();const vC=Ie`
	<path
		fill="currentColor"
		d="M56 50.6667V13.3333C56 10.4 53.6 8 50.6667 8H13.3333C10.4 8 8 10.4 8 13.3333V50.6667C8 53.6 10.4 56 13.3333 56H50.6667C53.6 56 56 53.6 56 50.6667ZM22.6667 36L29.3333 44.0267L38.6667 32L50.6667 48H13.3333L22.6667 36Z"
	/>
`;function R2(a={}){return F`<svg ${Pe(a)} aria-hidden="false" width="64" height="64" viewBox="0 0 64 64">${vC}</svg>`}const bC=Ie`
	<path
		fill="currentColor"
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM16.8995 8.41419L15.4853 6.99998L7 15.4853L8.41421 16.8995L16.8995 8.41419Z"
	/>
`;function $2(a){return F`<svg ${Pe(a||{})} class="discord-command-icon" aria-hidden="false" width="24" height="24" viewBox="0 0 24 24">
		${bC}
	</svg>`}const yC=Ie`
	<path
		d="M0.809739 3.59646L5.12565 0.468433C5.17446 0.431163 5.23323 0.408043 5.2951 0.401763C5.35698 0.395482 5.41943 0.406298 5.4752 0.432954C5.53096 0.45961 5.57776 0.50101 5.61013 0.552343C5.64251 0.603676 5.65914 0.662833 5.6581 0.722939V2.3707C10.3624 2.3707 11.2539 5.52482 11.3991 7.21174C11.4028 7.27916 11.3848 7.34603 11.3474 7.40312C11.3101 7.46021 11.2554 7.50471 11.1908 7.53049C11.1262 7.55626 11.0549 7.56204 10.9868 7.54703C10.9187 7.53201 10.857 7.49695 10.8104 7.44666C8.72224 5.08977 5.6581 5.63359 5.6581 5.63359V7.28135C5.65831 7.34051 5.64141 7.39856 5.60931 7.44894C5.5772 7.49932 5.53117 7.54004 5.4764 7.5665C5.42163 7.59296 5.3603 7.60411 5.29932 7.59869C5.23834 7.59328 5.18014 7.57151 5.13128 7.53585L0.809739 4.40892C0.744492 4.3616 0.691538 4.30026 0.655067 4.22975C0.618596 4.15925 0.599609 4.08151 0.599609 4.00269C0.599609 3.92386 0.618596 3.84612 0.655067 3.77562C0.691538 3.70511 0.744492 3.64377 0.809739 3.59646Z"
		fill="currentColor"
	/>
`;function _C(a={}){return F`<svg ${Pe(a)} class="discord-reply-icon" aria-hidden="false" width="12" height="8" viewBox="0 0 12 8">${yC}</svg>`}var Ea=function(a,n,s,i,l,c){function d(x){if(x!==void 0&&typeof x!="function")throw new TypeError("Function expected");return x}for(var h=i.kind,g=h==="getter"?"get":h==="setter"?"set":"value",p=!n&&a?i.static?a:a.prototype:null,m=n||(p?Object.getOwnPropertyDescriptor(p,i.name):{}),u,S=!1,w=s.length-1;w>=0;w--){var z={};for(var _ in i)z[_]=_==="access"?{}:i[_];for(var _ in i.access)z.access[_]=i.access[_];z.addInitializer=function(x){if(S)throw new TypeError("Cannot add initializers after decoration has completed");c.push(d(x||null))};var b=(0,s[w])(h==="accessor"?{get:m.get,set:m.set}:m[g],z);if(h==="accessor"){if(b===void 0)continue;if(b===null||typeof b!="object")throw new TypeError("Object expected");(u=d(b.get))&&(m.get=u),(u=d(b.set))&&(m.set=u),(u=d(b.init))&&l.unshift(u)}else(u=d(b))&&(h==="field"?l.unshift(u):m[g]=u)}p&&Object.defineProperty(p,i.name,m),S=!0},yt=function(a,n,s){for(var i=arguments.length>2,l=0;l<n.length;l++)s=i?n[l].call(a,s):n[l].call(a);return i?s:void 0};let V2=(()=>{var Qe,je,Te,We,sa,_a,dt,Ft,xa,Qt,ea,kt,Bt,Ct,Ca,fa,Ut,la,tt;let a=[lt("discord-reply")],n,s=[],i,l=at,c,d=[],h=[],g,p=[],m=[],u,S=[],w=[],z,_=[],b=[],x,O=[],R=[],C,A=[],I=[],H,$=[],Z=[],he,xe=[],V=[],T,W=[],ze=[],k,D=[],P=[],ge,re=[],j=[],G,ee=[],ae=[],X,se=[],K=[],J,le=[],Ee=[],$e,ue=[],ie=[],Me,Ke=[],Ge=[],Fe,ke=[],Ce=[],pe,te=[],Oe=[];return Qe=class extends l{constructor(){super(...arguments);B(this,je,yt(this,d,void 0));B(this,Te,(yt(this,h),yt(this,p,"User")));B(this,We,(yt(this,m),yt(this,S,void 0)));B(this,sa,(yt(this,w),yt(this,_,!1)));B(this,_a,(yt(this,b),yt(this,O,!1)));B(this,dt,(yt(this,R),yt(this,A,!1)));B(this,Ft,(yt(this,I),yt(this,$,!1)));B(this,xa,(yt(this,Z),yt(this,xe,!1)));B(this,Qt,(yt(this,V),yt(this,W,!1)));B(this,ea,(yt(this,ze),yt(this,D,void 0)));B(this,kt,(yt(this,P),yt(this,re,!1)));B(this,Bt,(yt(this,j),yt(this,ee,!1)));B(this,Ct,(yt(this,ae),yt(this,se,!1)));B(this,Ca,(yt(this,K),yt(this,le,void 0)));B(this,fa,(yt(this,Ee),yt(this,ue,void 0)));B(this,Ut,(yt(this,ie),yt(this,Ke,!1)));B(this,la,(yt(this,Ge),yt(this,ke,!1)));B(this,tt,(yt(this,Ce),yt(this,te,!1)));yt(this,Oe)}get profile(){return L(this,je)}set profile(_e){U(this,je,_e)}get author(){return L(this,Te)}set author(_e){U(this,Te,_e)}get avatar(){return L(this,We)}set avatar(_e){U(this,We,_e)}get bot(){return L(this,sa)}set bot(_e){U(this,sa,_e)}get server(){return L(this,_a)}set server(_e){U(this,_a,_e)}get officialApp(){return L(this,dt)}set officialApp(_e){U(this,dt,_e)}get op(){return L(this,Ft)}set op(_e){U(this,Ft,_e)}get verified(){return L(this,xa)}set verified(_e){U(this,xa,_e)}get edited(){return L(this,Qt)}set edited(_e){U(this,Qt,_e)}get roleColor(){return L(this,ea)}set roleColor(_e){U(this,ea,_e)}get command(){return L(this,kt)}set command(_e){U(this,kt,_e)}get attachment(){return L(this,Bt)}set attachment(_e){U(this,Bt,_e)}get mentions(){return L(this,Ct)}set mentions(_e){U(this,Ct,_e)}get clanIcon(){return L(this,Ca)}set clanIcon(_e){U(this,Ca,_e)}get clanTag(){return L(this,fa)}set clanTag(_e){U(this,fa,_e)}get deleted(){return L(this,Ut)}set deleted(_e){U(this,Ut,_e)}get lightTheme(){return L(this,la)}set lightTheme(_e){U(this,la,_e)}get compactMode(){return L(this,tt)}set compactMode(_e){U(this,tt,_e)}resolveAvatar(_e){return xi[_e]??_e??xi.default}render(){var Gt;const _e={author:this.author,bot:this.bot,verified:this.verified,officialApp:this.officialApp,op:this.op,server:this.server,roleColor:this.roleColor,clanIcon:this.clanIcon,clanTag:this.clanTag},me=Reflect.get(pl,this.profile)??{},Re={..._e,...me,avatar:this.resolveAvatar(me.avatar??this.avatar)},Mt=H2(Re.clanIcon),Kt=(Gt=Re.clanTag)==null?void 0:Gt.slice(0,4),gt=F`
			${De(Re.bot&&!Re.server&&!Re.officialApp,()=>F`<span class="discord-application-tag">${Re.verified?yi():""}App</span>`)}
			${De(Re.server&&!Re.bot&&!Re.officialApp,()=>F`<span class="discord-application-tag">Server</span>`)}
			${De(Re.officialApp&&!Re.server&&!Re.bot,()=>F`<span class="discord-application-tag">${yi()}OFFICIAL</span>`)}
		`;return F`${De(this.compactMode||this.deleted,()=>F`<div class="discord-reply-badge">${_C()}</div>`,()=>F`<img class="discord-replied-message-avatar" src="${Le(Re.avatar)}" alt="${Le(Re.author)}" />`)}
		${De(this.deleted,()=>F`<div class="discord-replied-deleted-message-content"><em>Original message was deleted</em></div>`,()=>{var Ba;return F`${gt}
					<span class="discord-replied-message-username" style=${Pn({color:Re.roleColor})}
						>${De(this.mentions,()=>"@")}${Re.author}</span
					>
					${De(Re.clanIcon&&Re.clanTag&&((Ba=Re.clanTag)==null?void 0:Ba.length)>0,()=>F`<span class="discord-clan-tag">
								${Mt==="string"?F`<img
											srcset=${Le(Mt)}
											alt=${Le(Kt)}
											width="12"
											height="12"
											draggable="false"
										/>`:Mt}
								<span>${Kt}</span>
							</span>`)}
					<!-- display: inline -->
					<div class="discord-replied-message-content"
						><slot></slot>${De(this.edited,()=>F`<span class="discord-message-edited">(edited)</span>`)}</div
					>
					${De(this.command,()=>$2({class:"discord-replied-message-content-icon"}),()=>De(this.attachment,()=>R2({class:"discord-replied-message-content-icon"})))}`})}`}},je=new WeakMap,Te=new WeakMap,We=new WeakMap,sa=new WeakMap,_a=new WeakMap,dt=new WeakMap,Ft=new WeakMap,xa=new WeakMap,Qt=new WeakMap,ea=new WeakMap,kt=new WeakMap,Bt=new WeakMap,Ct=new WeakMap,Ca=new WeakMap,fa=new WeakMap,Ut=new WeakMap,la=new WeakMap,tt=new WeakMap,i=Qe,(()=>{const _e=typeof Symbol=="function"&&Symbol.metadata?Object.create(l[Symbol.metadata]??null):void 0;c=[q()],g=[q()],u=[q()],z=[q({type:Boolean})],x=[q({type:Boolean})],C=[q({type:Boolean,attribute:"official-app"})],H=[q({type:Boolean})],he=[q({type:Boolean})],T=[q({type:Boolean})],k=[q({attribute:"role-color"})],ge=[q({type:Boolean})],G=[q({type:Boolean})],X=[q({type:Boolean})],J=[q({attribute:"clan-icon"})],$e=[q({attribute:"clan-tag"})],Me=[q({type:Boolean,reflect:!0})],Fe=[pt({context:Rt}),q({type:Boolean,reflect:!0,attribute:"light-theme"})],pe=[pt({context:jr}),q({type:Boolean,reflect:!0,attribute:"compact-mode"})],Ea(Qe,null,c,{kind:"accessor",name:"profile",static:!1,private:!1,access:{has:me=>"profile"in me,get:me=>me.profile,set:(me,Re)=>{me.profile=Re}},metadata:_e},d,h),Ea(Qe,null,g,{kind:"accessor",name:"author",static:!1,private:!1,access:{has:me=>"author"in me,get:me=>me.author,set:(me,Re)=>{me.author=Re}},metadata:_e},p,m),Ea(Qe,null,u,{kind:"accessor",name:"avatar",static:!1,private:!1,access:{has:me=>"avatar"in me,get:me=>me.avatar,set:(me,Re)=>{me.avatar=Re}},metadata:_e},S,w),Ea(Qe,null,z,{kind:"accessor",name:"bot",static:!1,private:!1,access:{has:me=>"bot"in me,get:me=>me.bot,set:(me,Re)=>{me.bot=Re}},metadata:_e},_,b),Ea(Qe,null,x,{kind:"accessor",name:"server",static:!1,private:!1,access:{has:me=>"server"in me,get:me=>me.server,set:(me,Re)=>{me.server=Re}},metadata:_e},O,R),Ea(Qe,null,C,{kind:"accessor",name:"officialApp",static:!1,private:!1,access:{has:me=>"officialApp"in me,get:me=>me.officialApp,set:(me,Re)=>{me.officialApp=Re}},metadata:_e},A,I),Ea(Qe,null,H,{kind:"accessor",name:"op",static:!1,private:!1,access:{has:me=>"op"in me,get:me=>me.op,set:(me,Re)=>{me.op=Re}},metadata:_e},$,Z),Ea(Qe,null,he,{kind:"accessor",name:"verified",static:!1,private:!1,access:{has:me=>"verified"in me,get:me=>me.verified,set:(me,Re)=>{me.verified=Re}},metadata:_e},xe,V),Ea(Qe,null,T,{kind:"accessor",name:"edited",static:!1,private:!1,access:{has:me=>"edited"in me,get:me=>me.edited,set:(me,Re)=>{me.edited=Re}},metadata:_e},W,ze),Ea(Qe,null,k,{kind:"accessor",name:"roleColor",static:!1,private:!1,access:{has:me=>"roleColor"in me,get:me=>me.roleColor,set:(me,Re)=>{me.roleColor=Re}},metadata:_e},D,P),Ea(Qe,null,ge,{kind:"accessor",name:"command",static:!1,private:!1,access:{has:me=>"command"in me,get:me=>me.command,set:(me,Re)=>{me.command=Re}},metadata:_e},re,j),Ea(Qe,null,G,{kind:"accessor",name:"attachment",static:!1,private:!1,access:{has:me=>"attachment"in me,get:me=>me.attachment,set:(me,Re)=>{me.attachment=Re}},metadata:_e},ee,ae),Ea(Qe,null,X,{kind:"accessor",name:"mentions",static:!1,private:!1,access:{has:me=>"mentions"in me,get:me=>me.mentions,set:(me,Re)=>{me.mentions=Re}},metadata:_e},se,K),Ea(Qe,null,J,{kind:"accessor",name:"clanIcon",static:!1,private:!1,access:{has:me=>"clanIcon"in me,get:me=>me.clanIcon,set:(me,Re)=>{me.clanIcon=Re}},metadata:_e},le,Ee),Ea(Qe,null,$e,{kind:"accessor",name:"clanTag",static:!1,private:!1,access:{has:me=>"clanTag"in me,get:me=>me.clanTag,set:(me,Re)=>{me.clanTag=Re}},metadata:_e},ue,ie),Ea(Qe,null,Me,{kind:"accessor",name:"deleted",static:!1,private:!1,access:{has:me=>"deleted"in me,get:me=>me.deleted,set:(me,Re)=>{me.deleted=Re}},metadata:_e},Ke,Ge),Ea(Qe,null,Fe,{kind:"accessor",name:"lightTheme",static:!1,private:!1,access:{has:me=>"lightTheme"in me,get:me=>me.lightTheme,set:(me,Re)=>{me.lightTheme=Re}},metadata:_e},ke,Ce),Ea(Qe,null,pe,{kind:"accessor",name:"compactMode",static:!1,private:!1,access:{has:me=>"compactMode"in me,get:me=>me.compactMode,set:(me,Re)=>{me.compactMode=Re}},metadata:_e},te,Oe),Ea(null,n={value:i},a,{kind:"class",name:i.name,metadata:_e},null,s),i=n.value,_e&&Object.defineProperty(i,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:_e})})(),Be(Qe,"styles",nt`
		:host {
			color: #b9bbbe;
			display: flex;
			font-size: 0.875rem;
			font-family: 'gg sans', 'Noto Sans', Whitney, 'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif;

			padding-top: 2px;
			margin-left: 56px;
			margin-bottom: 4px;
			align-items: center;
			line-height: 1.125rem;
			position: relative;
			white-space: pre;
			user-select: none;
		}

		:host([light-theme]) {
			color: #4f5660;
		}

		:host([compact-mode]),
		:host([deleted]) {
			margin-left: 62px;
			margin-bottom: 0;
		}

		:host:before {
			content: '';
			display: block;
			position: absolute;
			top: 50%;
			right: 100%;
			bottom: 0;
			left: -36px;
			margin-right: 4px;
			margin-top: -1px;
			margin-left: -1px;
			margin-bottom: -2px;
			border-left: 2px solid #4f545c !important;
			border-bottom: 0 solid #4f545c !important;
			border-right: 0 solid #4f545c !important;
			border-top: 2px solid #4f545c !important;
			border-top-left-radius: 6px;
		}

		:host([light-theme]):before {
			border-color: #747f8d !important;
		}

		.discord-replied-message-avatar,
		.discord-reply-badge {
			-webkit-box-flex: 0;
			-ms-flex: 0 0 auto;
			flex: 0 0 auto;
			width: 16px;
			height: 16px;
			border-radius: 50%;
			user-select: none;
			margin-right: 0.25rem;
		}

		.discord-reply-badge {
			display: flex;
			align-items: center;
			justify-content: center;
			color: #b9bbbe;
			background: #202225;
		}

		:host([light-theme]) .discord-reply-badge {
			color: #4f5660;
			background: #e3e5e8;
		}

		:host .discord-clan-tag {
			background-color: oklab(0.431937 0.00109309 -0.0132537 / 0.8);
			color: #fff;
			font-size: 12px;
			font-weight: 500;
			margin-right: 0.25rem;
			border-radius: 4px;
			line-height: 100%;
			text-transform: uppercase;
			justify-content: space-between;
			display: inline-flex;
			align-items: center;
			padding: 0 0.275rem;
			margin-top: 0.075em;
			height: 1.2rem;
			opacity: 0.55;
			transition: background-color 100ms ease-in-out;
			cursor: pointer;
		}

		:host .discord-clan-tag:hover {
			background-color: oklab(0.431937 0.00109309 -0.0132537 / 0.5);
		}

		:host([light-theme]) .discord-clan-tag {
			opacity: 0.65;
			background-color: hsl(0 calc(1 * 0%) 0.8%/0.09);
			color: #000;
		}

		:host([light-theme]) .discord-clan-tag:hover {
			background-color: hsl(0 calc(1 * 0%) 0.8%/0.03);
		}

		:host .discord-clan-tag svg,
		:host .discord-clan-tag img {
			display: inline-flex;
			align-items: center;
			margin-right: 0.25rem;
			right: 0.25rem;
		}

		:host .discord-clan-tag span {
			display: inline-flex;
			align-items: center;
			user-select: none;
			-webkit-user-select: none;
			line-height: 1rem !important;
		}

		.discord-application-tag {
			background-color: hsl(235, 85.6%, 64.7%);
			color: #fff;
			font-size: 0.625rem;
			margin-right: 0.25rem;
			line-height: 100%;
			text-transform: uppercase;

			/* Use flex layout to ensure both verified icon and "BOT" text are aligned to center */
			display: flex;
			align-items: center;

			/* Styling taken through Inspect Element on Discord client for Windows */
			height: 0.9375rem;
			padding: 0 0.275rem;
			margin-top: 0.075em;
			border-radius: 0.1875rem;
		}

		:host([compact-mode]) .discord-application-tag {
			margin-right: 0.25rem;
		}

		.discord-application-tag .discord-application-tag-verified {
			width: 0.9375rem;
			height: 0.9375rem;
			margin-left: -0.1rem;
		}

		.discord-application-tag.discord-application-tag-op {
			background-color: #c9cdfb;
			color: #4752c4;
			border-radius: 0.4rem;
		}

		.discord-replied-message-username {
			flex-shrink: 0;
			font-size: inherit;
			line-height: inherit;
			margin-right: 0.25rem;
			opacity: 0.64;
			font-weight: 500;
			color: #fff;
		}

		.discord-replied-message-username:hover {
			text-decoration: underline;
			cursor: pointer;
		}

		.discord-replied-message-content {
			color: inherit;
			font-size: inherit;
			line-height: inherit;
			white-space: pre;
			text-overflow: ellipsis;
			user-select: none;
			cursor: pointer;
		}

		.discord-replied-deleted-message-content {
			color: inherit;
			font-size: inherit;
			line-height: inherit;
			white-space: pre;
			text-overflow: ellipsis;
		}

		.discord-message-edited {
			color: #72767d;
			font-size: 10px;
		}

		:host([light-theme]) .discord-message-edited {
			color: #99aab5;
		}

		.discord-replied-message-content:hover {
			color: #fff;
		}

		:host([light-theme]) .discord-replied-message-content:hover {
			color: #000;
		}

		:host .discord-replied-message-content .discord-message-edited {
			margin-left: 0.25rem;
		}

		.discord-replied-message-content-icon {
			-webkit-box-flex: 0;
			-ms-flex: 0 0 auto;
			flex: 0 0 auto;
			width: 20px;
			height: 20px;
			margin-left: 4px;
		}
	`),yt(i,s),i})();const xC=Ie`
	<path d="M4.61241 0L6 0.845294L1.38759 10L0 9.15471L4.61241 0Z" fill="currentColor" />
`;function wC(a={}){return F`<svg ${Pe(a)} class="discord-command-icon" aria-hidden="false" width="6" height="10" viewBox="0 0 6 10" fill="none">
		${xC}
	</svg>`}const zC=Ie`
	<path fill="currentColor" d="M2.06 7.61c-.25.95.31 1.92 1.26 2.18l4.3 1.15c.94.25 1.91-.31 2.17-1.26l1.15-4.3c.25-.94-.31-1.91-1.26-2.17l-4.3-1.15c-.94-.25-1.91.31-2.17 1.26l-1.15 4.3ZM12.98 7.87a2 2 0 0 0 1.75 2.95H20a2 2 0 0 0 1.76-2.95l-2.63-4.83a2 2 0 0 0-3.51 0l-2.63 4.83ZM5.86 13.27a.89.89 0 0 1 1.28 0l.75.77a.9.9 0 0 0 .54.26l1.06.12c.5.06.85.52.8 1.02l-.13 1.08c-.02.2.03.42.14.6l.56.92c.27.43.14 1-.28 1.26l-.9.58a.92.92 0 0 0-.37.48l-.36 1.02a.9.9 0 0 1-1.15.57l-1-.36a.89.89 0 0 0-.6 0l-1 .36a.9.9 0 0 1-1.15-.57l-.36-1.02a.92.92 0 0 0-.37-.48l-.9-.58a.93.93 0 0 1-.28-1.26l.56-.93c.11-.17.16-.38.14-.59l-.12-1.08c-.06-.5.3-.96.8-1.02l1.05-.12a.9.9 0 0 0 .54-.26l.75-.77ZM18.52 13.71a1.1 1.1 0 0 0-2.04 0l-.46 1.24c-.19.5-.57.88-1.07 1.07l-1.24.46a1.1 1.1 0 0 0 0 2.04l1.24.46c.5.19.88.57 1.07 1.07l.46 1.24c.35.95 1.7.95 2.04 0l.46-1.24c.19-.5.57-.88 1.07-1.07l1.24-.46a1.1 1.1 0 0 0 0-2.04l-1.24-.46a1.8 1.8 0 0 1-1.07-1.07l-.46-1.24Z">
	</path>
`;function SC(a={}){return F`<svg ${Pe(a)} class="discord-command-icon-name" aria-hidden="false" width="10" height="10" viewBox="0 0 24 24" fill="none">
		${zC}
	</svg>`}const MC=Ie`
	<path fill="currentColor" d="M5.3 9.3a1 1 0 0 1 1.4 0l5.3 5.29 5.3-5.3a1 1 0 1 1 1.4 1.42l-6 6a1 1 0 0 1-1.4 0l-6-6a1 1 0 0 1 0-1.42Z"></path>
`;function fm(a={}){return F`<svg ${Pe(a)} aria-hidden="false" width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
		${MC}
	</svg>`}const EC=Ie`
	<path fill="color-mix( in oklab, hsl(215 calc(1 * 8.8%) 73.3% / 1) 100%, black 0%" d="M12 22a10 10 0 1 0-8.45-4.64c.13.19.11.44-.04.61l-2.06 2.37A1 1 0 0 0 2.2 22H12Z" class="">
    </path>
`;function TC(a={}){return F`<svg ${Pe(a)} aria-hidden="false" width="16" height="16" viewBox="0 0 24 24" fill="none">${EC}</svg>`}var da=function(a,n,s,i,l,c){function d(x){if(x!==void 0&&typeof x!="function")throw new TypeError("Function expected");return x}for(var h=i.kind,g=h==="getter"?"get":h==="setter"?"set":"value",p=!n&&a?i.static?a:a.prototype:null,m=n||(p?Object.getOwnPropertyDescriptor(p,i.name):{}),u,S=!1,w=s.length-1;w>=0;w--){var z={};for(var _ in i)z[_]=_==="access"?{}:i[_];for(var _ in i.access)z.access[_]=i.access[_];z.addInitializer=function(x){if(S)throw new TypeError("Cannot add initializers after decoration has completed");c.push(d(x||null))};var b=(0,s[w])(h==="accessor"?{get:m.get,set:m.set}:m[g],z);if(h==="accessor"){if(b===void 0)continue;if(b===null||typeof b!="object")throw new TypeError("Object expected");(u=d(b.get))&&(m.get=u),(u=d(b.set))&&(m.set=u),(u=d(b.init))&&l.unshift(u)}else(u=d(b))&&(h==="field"?l.unshift(u):m[g]=u)}p&&Object.defineProperty(p,i.name,m),S=!0},ft=function(a,n,s){for(var i=arguments.length>2,l=0;l<n.length;l++)s=i?n[l].call(a,s):n[l].call(a);return i?s:void 0};let CC=(()=>{var dt,Ft,xa,Qt,ea,kt,Bt,Ct,Ca,fa,Ut,la,tt,ma,ta,_e,me,Re,Mt,Kt,gt;let a=[lt("discord-command")],n,s=[],i,l=at,c,d=[],h=[],g,p=[],m=[],u,S=[],w=[],z,_=[],b=[],x,O=[],R=[],C,A=[],I=[],H,$=[],Z=[],he,xe=[],V=[],T,W=[],ze=[],k,D=[],P=[],ge,re=[],j=[],G,ee=[],ae=[],X,se=[],K=[],J,le=[],Ee=[],$e,ue=[],ie=[],Me,Ke=[],Ge=[],Fe,ke=[],Ce=[],pe,te=[],Oe=[],Qe,je=[],Te=[],We,sa=[],_a=[];return dt=class extends l{constructor(){super(...arguments);B(this,Ft,ft(this,d,void 0));B(this,xa,(ft(this,h),ft(this,p,"User")));B(this,Qt,(ft(this,m),ft(this,S,void 0)));B(this,ea,(ft(this,w),ft(this,_,void 0)));B(this,kt,(ft(this,b),ft(this,O,void 0)));B(this,Bt,(ft(this,R),ft(this,A,"slash_command")));B(this,Ct,(ft(this,I),ft(this,$,void 0)));B(this,Ca,(ft(this,Z),ft(this,xe,"User")));B(this,fa,(ft(this,V),ft(this,W,void 0)));B(this,Ut,(ft(this,ze),ft(this,D,void 0)));B(this,la,(ft(this,P),ft(this,re,!1)));B(this,tt,(ft(this,j),ft(this,ee,!1)));B(this,ma,(ft(this,ae),ft(this,se,!1)));B(this,ta,(ft(this,K),ft(this,le,!1)));B(this,_e,(ft(this,Ee),ft(this,ue,void 0)));B(this,me,(ft(this,ie),ft(this,Ke,!1)));B(this,Re,(ft(this,Ge),ft(this,ke,!1)));B(this,Mt,(ft(this,Ce),ft(this,te,!1)));B(this,Kt,(ft(this,Oe),ft(this,je,!1)));B(this,gt,(ft(this,Te),ft(this,sa,!1)));Be(this,"validCommandTypes",(ft(this,_a),new Set(["user_command","message_command","slash_command"])))}get profile(){return L(this,Ft)}set profile(He){U(this,Ft,He)}get author(){return L(this,xa)}set author(He){U(this,xa,He)}get avatar(){return L(this,Qt)}set avatar(He){U(this,Qt,He)}get roleColor(){return L(this,ea)}set roleColor(He){U(this,ea,He)}get command(){return L(this,kt)}set command(He){U(this,kt,He)}get type(){return L(this,Bt)}set type(He){U(this,Bt,He)}get contextUserProfile(){return L(this,Ct)}set contextUserProfile(He){U(this,Ct,He)}get contextUserName(){return L(this,Ca)}set contextUserName(He){U(this,Ca,He)}get contextUserAvatar(){return L(this,fa)}set contextUserAvatar(He){U(this,fa,He)}get contextUserRoleColor(){return L(this,Ut)}set contextUserRoleColor(He){U(this,Ut,He)}get contextUserBot(){return L(this,la)}set contextUserBot(He){U(this,la,He)}get contextUserBotVerified(){return L(this,tt)}set contextUserBotVerified(He){U(this,tt,He)}get contextCommandReply(){return L(this,ma)}set contextCommandReply(He){U(this,ma,He)}get contextAttachmentReply(){return L(this,ta)}set contextAttachmentReply(He){U(this,ta,He)}get contextMessageReply(){return L(this,_e)}set contextMessageReply(He){U(this,_e,He)}get contextMessageDeleted(){return L(this,me)}set contextMessageDeleted(He){U(this,me,He)}get contextUserOfficialApplication(){return L(this,Re)}set contextUserOfficialApplication(He){U(this,Re,He)}get contextUserServer(){return L(this,Mt)}set contextUserServer(He){U(this,Mt,He)}get compactMode(){return L(this,Kt)}set compactMode(He){U(this,Kt,He)}get lightTheme(){return L(this,gt)}set lightTheme(He){U(this,gt,He)}checkType(){if(this.type){if(typeof this.type!="string")throw new TypeError("DiscordCommand `type` prop must be a string.");if(!this.validCommandTypes.has(this.type))throw new RangeError("DiscordCommand `type` prop must be one of: 'uer_command', 'message_command' or 'slash_command'")}}resolveAvatar(He){return xi[He]??He??xi.default}render(){this.checkType();const He={author:this.author,bot:!1,verified:!1,server:!1,roleColor:this.roleColor},ve=Reflect.get(pl,this.profile)??{},Xe={...He,...ve,avatar:this.resolveAvatar(ve.avatar??this.avatar)},wa={author:this.contextUserName,bot:this.contextUserBot,verified:this.contextUserBotVerified,server:!1,roleColor:this.contextUserRoleColor},wi=Reflect.get(pl,this.contextUserProfile)??{},za={...wa,...wi,avatar:this.resolveAvatar(wi.avatar??this.contextUserAvatar)},Ua=this.contextMessageDeleted?F`<em class="discord-message-deleted">Original message was deleted</em>`:this.contextMessageReply;return F`
			${De(this.compactMode,()=>F`<div class="discord-reply-badge">${wC()}</div>`,()=>F`<img class="discord-replied-message-avatar" src="${Le(Xe.avatar)}" alt="${Le(Xe.author)}" />`)}
			<span class="discord-replied-message-username" style=${Pn({color:Xe.roleColor??""})}>${Xe.author}</span>
			<span> used </span>
			${De(this.type==="slash_command",()=>F`<div class="discord-replied-message-content discord-slash-command-name">
						${SC()}<span>${this.command}</span>
					</div>`)}
			${De(this.type==="user_command",()=>F`<div class="discord-replied-message-content discord-context-command-name"><span>${this.command}</span></div>
						${fm({class:"discord-arrow-right-icon"})}
						<div class="discord-context-user">
							${De(!this.compactMode,()=>F`<img
										class="discord-replied-message-avatar"
										src="${Le(za.avatar)}"
										alt="${Le(za.author)}"
									/>`)}
							<span class="discord-replied-message-username" style=${Pn({color:za.roleColor??""})}
								>${za.author}</span
							>
						</div>`)}
			${De(this.type==="message_command",()=>F`<div class="discord-replied-message-content discord-context-command-name"><span>${this.command}</span></div>
						${fm({class:"discord-arrow-right-icon"})}
						${De(!this.contextMessageDeleted,()=>F`<div class="discord-context-user">
									${De(!this.compactMode,()=>De(!this.contextUserOfficialApplication,()=>F`<img
													class="discord-replied-message-avatar"
													src="${Le(za.avatar)}"
													alt="${Le(za.author)}"
												/>`,()=>F`<img
													class="discord-replied-message-avatar"
													src="${Le(xi.blue)}"
													alt="OFFICIALAPPLICATION"
												/>`))}
									${De(za.bot,()=>F`<span class="discord-application-tag">${za.verified?yi():""}App</span>`,()=>De(this.contextUserServer,()=>F`<span class="discord-application-tag">SERVER</span>`,()=>De(this.contextUserOfficialApplication,()=>F`<span class="discord-application-tag">${yi()}OFFICIAL</span>`)))}
									<span class="discord-replied-message-username" style=${Pn({color:za.roleColor??""})}
										>${za.author}</span
									><span></span>
								</div>`,()=>De(this.contextMessageDeleted,()=>TC({class:"discord-message-margintop",style:"margin-right: 3px;"})))}
						<div class="discord-replied-message-content discord-message-margintop">${Ua}</div>
						${De(this.contextCommandReply&&!this.contextMessageDeleted,()=>$2({class:"discord-replied-message-content-icon discord-message-margintop"}),()=>De(this.contextAttachmentReply,()=>R2({class:"discord-replied-message-content-icon discord-message-margintop"})))} `)}
		`}},Ft=new WeakMap,xa=new WeakMap,Qt=new WeakMap,ea=new WeakMap,kt=new WeakMap,Bt=new WeakMap,Ct=new WeakMap,Ca=new WeakMap,fa=new WeakMap,Ut=new WeakMap,la=new WeakMap,tt=new WeakMap,ma=new WeakMap,ta=new WeakMap,_e=new WeakMap,me=new WeakMap,Re=new WeakMap,Mt=new WeakMap,Kt=new WeakMap,gt=new WeakMap,i=dt,(()=>{const He=typeof Symbol=="function"&&Symbol.metadata?Object.create(l[Symbol.metadata]??null):void 0;c=[q({attribute:"profile"})],g=[q({attribute:"author"})],u=[q({attribute:"avatar"})],z=[q({attribute:"role-color"})],x=[q({attribute:"command"})],C=[q({attribute:"type"})],H=[q({attribute:"context-user-profile"})],he=[q({attribute:"context-user-name"})],T=[q({attribute:"context-user-image"})],k=[q({attribute:"context-user-role-color"})],ge=[q({type:Boolean,attribute:"context-user-bot"})],G=[q({type:Boolean,attribute:"context-user-bot-verified"})],X=[q({type:Boolean,attribute:"context-command-reply"})],J=[q({type:Boolean,attribute:"context-attachment-reply"})],$e=[q({type:String,attribute:"context-message-reply"})],Me=[q({type:Boolean,attribute:"context-message-deleted"})],Fe=[q({type:Boolean,attribute:"context-user-application-official"})],pe=[q({type:Boolean,attribute:"context-user-server"})],Qe=[pt({context:jr}),q({type:Boolean,reflect:!0,attribute:"compact-mode"})],We=[pt({context:Rt}),q({type:Boolean,reflect:!0,attribute:"light-theme"})],da(dt,null,c,{kind:"accessor",name:"profile",static:!1,private:!1,access:{has:ve=>"profile"in ve,get:ve=>ve.profile,set:(ve,Xe)=>{ve.profile=Xe}},metadata:He},d,h),da(dt,null,g,{kind:"accessor",name:"author",static:!1,private:!1,access:{has:ve=>"author"in ve,get:ve=>ve.author,set:(ve,Xe)=>{ve.author=Xe}},metadata:He},p,m),da(dt,null,u,{kind:"accessor",name:"avatar",static:!1,private:!1,access:{has:ve=>"avatar"in ve,get:ve=>ve.avatar,set:(ve,Xe)=>{ve.avatar=Xe}},metadata:He},S,w),da(dt,null,z,{kind:"accessor",name:"roleColor",static:!1,private:!1,access:{has:ve=>"roleColor"in ve,get:ve=>ve.roleColor,set:(ve,Xe)=>{ve.roleColor=Xe}},metadata:He},_,b),da(dt,null,x,{kind:"accessor",name:"command",static:!1,private:!1,access:{has:ve=>"command"in ve,get:ve=>ve.command,set:(ve,Xe)=>{ve.command=Xe}},metadata:He},O,R),da(dt,null,C,{kind:"accessor",name:"type",static:!1,private:!1,access:{has:ve=>"type"in ve,get:ve=>ve.type,set:(ve,Xe)=>{ve.type=Xe}},metadata:He},A,I),da(dt,null,H,{kind:"accessor",name:"contextUserProfile",static:!1,private:!1,access:{has:ve=>"contextUserProfile"in ve,get:ve=>ve.contextUserProfile,set:(ve,Xe)=>{ve.contextUserProfile=Xe}},metadata:He},$,Z),da(dt,null,he,{kind:"accessor",name:"contextUserName",static:!1,private:!1,access:{has:ve=>"contextUserName"in ve,get:ve=>ve.contextUserName,set:(ve,Xe)=>{ve.contextUserName=Xe}},metadata:He},xe,V),da(dt,null,T,{kind:"accessor",name:"contextUserAvatar",static:!1,private:!1,access:{has:ve=>"contextUserAvatar"in ve,get:ve=>ve.contextUserAvatar,set:(ve,Xe)=>{ve.contextUserAvatar=Xe}},metadata:He},W,ze),da(dt,null,k,{kind:"accessor",name:"contextUserRoleColor",static:!1,private:!1,access:{has:ve=>"contextUserRoleColor"in ve,get:ve=>ve.contextUserRoleColor,set:(ve,Xe)=>{ve.contextUserRoleColor=Xe}},metadata:He},D,P),da(dt,null,ge,{kind:"accessor",name:"contextUserBot",static:!1,private:!1,access:{has:ve=>"contextUserBot"in ve,get:ve=>ve.contextUserBot,set:(ve,Xe)=>{ve.contextUserBot=Xe}},metadata:He},re,j),da(dt,null,G,{kind:"accessor",name:"contextUserBotVerified",static:!1,private:!1,access:{has:ve=>"contextUserBotVerified"in ve,get:ve=>ve.contextUserBotVerified,set:(ve,Xe)=>{ve.contextUserBotVerified=Xe}},metadata:He},ee,ae),da(dt,null,X,{kind:"accessor",name:"contextCommandReply",static:!1,private:!1,access:{has:ve=>"contextCommandReply"in ve,get:ve=>ve.contextCommandReply,set:(ve,Xe)=>{ve.contextCommandReply=Xe}},metadata:He},se,K),da(dt,null,J,{kind:"accessor",name:"contextAttachmentReply",static:!1,private:!1,access:{has:ve=>"contextAttachmentReply"in ve,get:ve=>ve.contextAttachmentReply,set:(ve,Xe)=>{ve.contextAttachmentReply=Xe}},metadata:He},le,Ee),da(dt,null,$e,{kind:"accessor",name:"contextMessageReply",static:!1,private:!1,access:{has:ve=>"contextMessageReply"in ve,get:ve=>ve.contextMessageReply,set:(ve,Xe)=>{ve.contextMessageReply=Xe}},metadata:He},ue,ie),da(dt,null,Me,{kind:"accessor",name:"contextMessageDeleted",static:!1,private:!1,access:{has:ve=>"contextMessageDeleted"in ve,get:ve=>ve.contextMessageDeleted,set:(ve,Xe)=>{ve.contextMessageDeleted=Xe}},metadata:He},Ke,Ge),da(dt,null,Fe,{kind:"accessor",name:"contextUserOfficialApplication",static:!1,private:!1,access:{has:ve=>"contextUserOfficialApplication"in ve,get:ve=>ve.contextUserOfficialApplication,set:(ve,Xe)=>{ve.contextUserOfficialApplication=Xe}},metadata:He},ke,Ce),da(dt,null,pe,{kind:"accessor",name:"contextUserServer",static:!1,private:!1,access:{has:ve=>"contextUserServer"in ve,get:ve=>ve.contextUserServer,set:(ve,Xe)=>{ve.contextUserServer=Xe}},metadata:He},te,Oe),da(dt,null,Qe,{kind:"accessor",name:"compactMode",static:!1,private:!1,access:{has:ve=>"compactMode"in ve,get:ve=>ve.compactMode,set:(ve,Xe)=>{ve.compactMode=Xe}},metadata:He},je,Te),da(dt,null,We,{kind:"accessor",name:"lightTheme",static:!1,private:!1,access:{has:ve=>"lightTheme"in ve,get:ve=>ve.lightTheme,set:(ve,Xe)=>{ve.lightTheme=Xe}},metadata:He},sa,_a),da(null,n={value:i},a,{kind:"class",name:i.name,metadata:He},null,s),i=n.value,He&&Object.defineProperty(i,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:He})})(),Be(dt,"styles",[V2.styles,nt`
			:host .discord-slash-command-name {
				color: color-mix(in oklab, hsl(200 calc(1 * 100%) 49.4% / 1) 100%, black 0%) !important;
				font-weight: 500;
				background-color: #3c4270;
				border-radius: 3px;
				display: flex;
				padding: 0 5px;
				align-items: center;
				gap: 2px;
				cursor: default;
			}

			:host .discord-slash-command-name:hover {
				color: #fffffd !important;
				background-color: #5865f2;
			}

			.discord-context-command-name {
				color: color-mix(in oklab, hsl(200 calc(1 * 100%) 49.4% / 1) 100%, black 0%) !important;
				opacity: 0.64;
				cursor: default;
				font-weight: 500;
			}

			.discord-arrow-right-icon {
				transform: rotate(267deg);
				width: 12px;
				height: 12px;
				fill: none;
				margin-right: 2px;
				margin-left: 2px;
				margin-top: 3px;
			}

			.discord-context-user {
				display: flex;
				align-items: center;
				margin-top: 3px;
			}

			.discord-message-margintop {
				margin-top: 3px;
			}

			:host .discord-message-deleted {
				color: rgb(185, 187, 190) !important;
				cursor: default;
			}

			:host .discord-replied-message-username {
				margin-right: 0;
			}

			:host([light-theme]) .discord-replied-message-username {
				color: rgb(46, 51, 56);
			}

			:host([compact-mode]) .discord-context-user {
				display: flex;
				align-items: center;
				margin: 0 !important;
			}

			:host([compact-mode]) .discord-message-margintop {
				margin-top: 0 !important;
			}
		`]),ft(i,s),i})();var nl=function(a,n,s,i,l,c){function d(x){if(x!==void 0&&typeof x!="function")throw new TypeError("Function expected");return x}for(var h=i.kind,g=h==="getter"?"get":h==="setter"?"set":"value",p=!n&&a?i.static?a:a.prototype:null,m=n||(p?Object.getOwnPropertyDescriptor(p,i.name):{}),u,S=!1,w=s.length-1;w>=0;w--){var z={};for(var _ in i)z[_]=_==="access"?{}:i[_];for(var _ in i.access)z.access[_]=i.access[_];z.addInitializer=function(x){if(S)throw new TypeError("Cannot add initializers after decoration has completed");c.push(d(x||null))};var b=(0,s[w])(h==="accessor"?{get:m.get,set:m.set}:m[g],z);if(h==="accessor"){if(b===void 0)continue;if(b===null||typeof b!="object")throw new TypeError("Object expected");(u=d(b.get))&&(m.get=u),(u=d(b.set))&&(m.set=u),(u=d(b.init))&&l.unshift(u)}else(u=d(b))&&(h==="field"?l.unshift(u):m[g]=u)}p&&Object.defineProperty(p,i.name,m),S=!0},Pi=function(a,n,s){for(var i=arguments.length>2,l=0;l<n.length;l++)s=i?n[l].call(a,s):n[l].call(a);return i?s:void 0};let AC=(()=>{var C,A,I,H,$,Z;let a=[lt("discord-custom-emoji")],n,s=[],i,l=at,c,d=[],h=[],g,p=[],m=[],u,S=[],w=[],z,_=[],b=[],x,O=[],R=[];return C=class extends l{constructor(){super(...arguments);B(this,A,Pi(this,d,void 0));B(this,I,(Pi(this,h),Pi(this,p,void 0)));B(this,H,(Pi(this,m),Pi(this,S,{})));B(this,$,(Pi(this,w),Pi(this,_,void 0)));B(this,Z,(Pi(this,b),Pi(this,O,void 0)));Pi(this,R)}get name(){return L(this,A)}set name(V){U(this,A,V)}get url(){return L(this,I)}set url(V){U(this,I,V)}get customEmojisMap(){return L(this,H)}set customEmojisMap(V){U(this,H,V)}get embedEmoji(){return L(this,$)}set embedEmoji(V){U(this,$,V)}get jumbo(){return L(this,Z)}set jumbo(V){U(this,Z,V)}willUpdate(){if(!this.url&&this.name){const V=l0(this.name)??this.customEmojisMap[this.name];V&&(this.url??(this.url=V.url??""),this.embedEmoji??(this.embedEmoji=V.embedEmoji??!1))}}render(){const V=`:${this.name}:`;return F`<span
			class=${Lt({"discord-embed-custom-emoji":this.embedEmoji,"discord-custom-emoji":!this.embedEmoji})}
			><img
				aria-label=${V}
				src=${Le(this.url)}
				alt=${V}
				draggable="false"
				class=${Lt({"discord-embed-custom-emoji-image":this.embedEmoji,"discord-custom-emoji-image":!this.embedEmoji,"discord-custom-jumbo-emoji-image":this.jumbo})}
		/></span> `}},A=new WeakMap,I=new WeakMap,H=new WeakMap,$=new WeakMap,Z=new WeakMap,i=C,(()=>{const V=typeof Symbol=="function"&&Symbol.metadata?Object.create(l[Symbol.metadata]??null):void 0;c=[q()],g=[q()],u=[q({attribute:!1})],z=[q({type:Boolean,attribute:"embed-emoji"})],x=[q({type:Boolean,attribute:"jumbo"})],nl(C,null,c,{kind:"accessor",name:"name",static:!1,private:!1,access:{has:T=>"name"in T,get:T=>T.name,set:(T,W)=>{T.name=W}},metadata:V},d,h),nl(C,null,g,{kind:"accessor",name:"url",static:!1,private:!1,access:{has:T=>"url"in T,get:T=>T.url,set:(T,W)=>{T.url=W}},metadata:V},p,m),nl(C,null,u,{kind:"accessor",name:"customEmojisMap",static:!1,private:!1,access:{has:T=>"customEmojisMap"in T,get:T=>T.customEmojisMap,set:(T,W)=>{T.customEmojisMap=W}},metadata:V},S,w),nl(C,null,z,{kind:"accessor",name:"embedEmoji",static:!1,private:!1,access:{has:T=>"embedEmoji"in T,get:T=>T.embedEmoji,set:(T,W)=>{T.embedEmoji=W}},metadata:V},_,b),nl(C,null,x,{kind:"accessor",name:"jumbo",static:!1,private:!1,access:{has:T=>"jumbo"in T,get:T=>T.jumbo,set:(T,W)=>{T.jumbo=W}},metadata:V},O,R),nl(null,n={value:i},a,{kind:"class",name:i.name,metadata:V},null,s),i=n.value,V&&Object.defineProperty(i,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:V})})(),Be(C,"styles",nt`
		.discord-custom-emoji {
			display: inline-block;
			cursor: pointer;
		}

		.discord-custom-emoji .discord-custom-emoji-image {
			object-fit: contain;
			width: 1.375rem;
			height: 1.375rem;
			vertical-align: bottom;
		}

		.discord-custom-emoji .discord-custom-jumbo-emoji-image {
			width: 3rem;
			height: 3rem;
			min-height: 3rem;
		}

		.discord-embed-custom-emoji {
			display: inline-block;
		}

		.discord-embed-custom-emoji .discord-embed-custom-emoji-image {
			width: 18px;
			height: 18px;
			vertical-align: bottom;
		}
	`),Pi(i,s),i})();var fi=function(a,n,s,i,l,c){function d(x){if(x!==void 0&&typeof x!="function")throw new TypeError("Function expected");return x}for(var h=i.kind,g=h==="getter"?"get":h==="setter"?"set":"value",p=!n&&a?i.static?a:a.prototype:null,m=n||(p?Object.getOwnPropertyDescriptor(p,i.name):{}),u,S=!1,w=s.length-1;w>=0;w--){var z={};for(var _ in i)z[_]=_==="access"?{}:i[_];for(var _ in i.access)z.access[_]=i.access[_];z.addInitializer=function(x){if(S)throw new TypeError("Cannot add initializers after decoration has completed");c.push(d(x||null))};var b=(0,s[w])(h==="accessor"?{get:m.get,set:m.set}:m[g],z);if(h==="accessor"){if(b===void 0)continue;if(b===null||typeof b!="object")throw new TypeError("Object expected");(u=d(b.get))&&(m.get=u),(u=d(b.set))&&(m.set=u),(u=d(b.init))&&l.unshift(u)}else(u=d(b))&&(h==="field"?l.unshift(u):m[g]=u)}p&&Object.defineProperty(p,i.name,m),S=!0},Zt=function(a,n,s){for(var i=arguments.length>2,l=0;l<n.length;l++)s=i?n[l].call(a,s):n[l].call(a);return i?s:void 0};let kC=(()=>{var X,se,K,J,le,Ee,$e,ue,ie,Me,Ke,Ge,Fe;let a=[lt("discord-embed")],n,s=[],i,l=at,c,d=[],h=[],g,p=[],m=[],u,S=[],w=[],z,_=[],b=[],x,O=[],R=[],C,A=[],I=[],H,$=[],Z=[],he,xe=[],V=[],T,W=[],ze=[],k,D=[],P=[],ge,re=[],j=[],G,ee=[],ae=[];return X=class extends l{constructor(){super(...arguments);B(this,se,Zt(this,d,void 0));B(this,K,(Zt(this,h),Zt(this,p,void 0)));B(this,J,(Zt(this,m),Zt(this,S,void 0)));B(this,le,(Zt(this,w),Zt(this,_,void 0)));B(this,Ee,(Zt(this,b),Zt(this,O,void 0)));B(this,$e,(Zt(this,R),Zt(this,A,{})));B(this,ue,(Zt(this,I),Zt(this,$,void 0)));B(this,ie,(Zt(this,Z),Zt(this,xe,void 0)));B(this,Me,(Zt(this,V),Zt(this,W,void 0)));B(this,Ke,(Zt(this,ze),Zt(this,D,void 0)));B(this,Ge,(Zt(this,P),Zt(this,re,void 0)));B(this,Fe,(Zt(this,j),Zt(this,ee,!1)));Zt(this,ae)}get color(){return L(this,se)}set color(pe){U(this,se,pe)}get authorName(){return L(this,K)}set authorName(pe){U(this,K,pe)}get authorImage(){return L(this,J)}set authorImage(pe){U(this,J,pe)}get authorUrl(){return L(this,le)}set authorUrl(pe){U(this,le,pe)}get embedTitle(){return L(this,Ee)}set embedTitle(pe){U(this,Ee,pe)}get embedEmojisMap(){return L(this,$e)}set embedEmojisMap(pe){U(this,$e,pe)}get url(){return L(this,ue)}set url(pe){U(this,ue,pe)}get thumbnail(){return L(this,ie)}set thumbnail(pe){U(this,ie,pe)}get image(){return L(this,Me)}set image(pe){U(this,Me,pe)}get video(){return L(this,Ke)}set video(pe){U(this,Ke,pe)}get provider(){return L(this,Ge)}set provider(pe){U(this,Ge,pe)}get lightTheme(){return L(this,Fe)}set lightTheme(pe){U(this,Fe,pe)}render(){const pe=this.parseTitle(this.authorName),te=this.parseTitle(this.embedTitle);return F`<div style=${Pn({"background-color":this.color})} class="discord-left-border"></div>
			<div class="discord-embed-root">
				<div class="discord-embed-wrapper">
					<div class="discord-embed-grid">
						${De(this.provider,()=>F`<div class="discord-embed-provider">${this.provider}</div>`)}
						${De(pe,()=>F`<div class="discord-embed-author">
									${De(this.authorImage,()=>F`<img src=${Le(this.authorImage)} alt="" class="discord-author-image" />`)}
									${De(this.authorUrl,()=>F`<a
												href=${Le(this.authorUrl)}
												target="_blank"
												rel="noopener noreferrer"
												class="discord-embed-author-block"
											>
												<span class="discord-embed-author-block">${pe}</span>
											</a>`,()=>F`<span class="discord-embed-author-block">${pe}</span>`)}
								</div>`)}
						${De(te,()=>F`<div class="discord-embed-title">
									${this.url?F`<a href="${this.url}" target="_blank" rel="noopener noreferrer"> ${te} </a>`:F`${te}`}
								</div>`)}
						<slot name="description"></slot>
						<slot name="fields"></slot>
						${De(this.image||this.video,()=>F`<div class=${Lt({"discord-embed-media":!0,"discord-embed-media-video":!!this.video})}>
									${this.renderMedia()}
								</div>`)}
						${De(this.thumbnail,()=>F`<img src=${Le(this.thumbnail)} alt="" class="discord-embed-thumbnail" />`)}
						<slot name="footer"></slot>
					</div>
				</div>
			</div>`}renderMedia(){return this.video?F`
				<video
					controls
					muted
					preload="none"
					poster=${Le(this.image)}
					src=${Le(this.video)}
					height="225"
					width="400"
					class="discord-embed-video"
				>
					<img src=${Le(this.image)} alt="Discord embed media" class="discord-embed-image" />
				</video>
			`:this.image?F`<img src=${Le(this.image)} alt="Discord embed media" class="discord-embed-image" />`:null}parseTitle(pe){if(!pe)return null;const te=[];let Oe="";for(const Qe of pe.split(`
`)){for(const je of Qe.split(" ")){const Te=l0(je)??this.embedEmojisMap[je]??{};Te.name?te.push(F`<discord-custom-emoji name=${Te.name} url=${Le(Te.url)} embed-emoji></discord-custom-emoji>`):Oe+=`${je} `,Oe===" "&&te.push(F`<br />`)}te.push(Oe),Oe=""}return te.map(Qe=>typeof Qe=="string"?F`<span>${Qe}</span>`:Qe)}},se=new WeakMap,K=new WeakMap,J=new WeakMap,le=new WeakMap,Ee=new WeakMap,$e=new WeakMap,ue=new WeakMap,ie=new WeakMap,Me=new WeakMap,Ke=new WeakMap,Ge=new WeakMap,Fe=new WeakMap,i=X,(()=>{const pe=typeof Symbol=="function"&&Symbol.metadata?Object.create(l[Symbol.metadata]??null):void 0;c=[q()],g=[q({attribute:"author-name"})],u=[q({attribute:"author-image"})],z=[q({attribute:"author-url"})],x=[q({attribute:"embed-title"})],C=[q({attribute:!1})],H=[q()],he=[q()],T=[q()],k=[q()],ge=[q()],G=[pt({context:Rt,subscribe:!0}),q({type:Boolean,reflect:!0,attribute:"light-theme"})],fi(X,null,c,{kind:"accessor",name:"color",static:!1,private:!1,access:{has:te=>"color"in te,get:te=>te.color,set:(te,Oe)=>{te.color=Oe}},metadata:pe},d,h),fi(X,null,g,{kind:"accessor",name:"authorName",static:!1,private:!1,access:{has:te=>"authorName"in te,get:te=>te.authorName,set:(te,Oe)=>{te.authorName=Oe}},metadata:pe},p,m),fi(X,null,u,{kind:"accessor",name:"authorImage",static:!1,private:!1,access:{has:te=>"authorImage"in te,get:te=>te.authorImage,set:(te,Oe)=>{te.authorImage=Oe}},metadata:pe},S,w),fi(X,null,z,{kind:"accessor",name:"authorUrl",static:!1,private:!1,access:{has:te=>"authorUrl"in te,get:te=>te.authorUrl,set:(te,Oe)=>{te.authorUrl=Oe}},metadata:pe},_,b),fi(X,null,x,{kind:"accessor",name:"embedTitle",static:!1,private:!1,access:{has:te=>"embedTitle"in te,get:te=>te.embedTitle,set:(te,Oe)=>{te.embedTitle=Oe}},metadata:pe},O,R),fi(X,null,C,{kind:"accessor",name:"embedEmojisMap",static:!1,private:!1,access:{has:te=>"embedEmojisMap"in te,get:te=>te.embedEmojisMap,set:(te,Oe)=>{te.embedEmojisMap=Oe}},metadata:pe},A,I),fi(X,null,H,{kind:"accessor",name:"url",static:!1,private:!1,access:{has:te=>"url"in te,get:te=>te.url,set:(te,Oe)=>{te.url=Oe}},metadata:pe},$,Z),fi(X,null,he,{kind:"accessor",name:"thumbnail",static:!1,private:!1,access:{has:te=>"thumbnail"in te,get:te=>te.thumbnail,set:(te,Oe)=>{te.thumbnail=Oe}},metadata:pe},xe,V),fi(X,null,T,{kind:"accessor",name:"image",static:!1,private:!1,access:{has:te=>"image"in te,get:te=>te.image,set:(te,Oe)=>{te.image=Oe}},metadata:pe},W,ze),fi(X,null,k,{kind:"accessor",name:"video",static:!1,private:!1,access:{has:te=>"video"in te,get:te=>te.video,set:(te,Oe)=>{te.video=Oe}},metadata:pe},D,P),fi(X,null,ge,{kind:"accessor",name:"provider",static:!1,private:!1,access:{has:te=>"provider"in te,get:te=>te.provider,set:(te,Oe)=>{te.provider=Oe}},metadata:pe},re,j),fi(X,null,G,{kind:"accessor",name:"lightTheme",static:!1,private:!1,access:{has:te=>"lightTheme"in te,get:te=>te.lightTheme,set:(te,Oe)=>{te.lightTheme=Oe}},metadata:pe},ee,ae),fi(null,n={value:i},a,{kind:"class",name:i.name,metadata:pe},null,s),i=n.value,pe&&Object.defineProperty(i,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:pe})})(),Be(X,"styles",nt`
		:host {
			color: #dcddde;
			display: flex;
			font-size: 13px;
			line-height: 150%;
			margin-bottom: 8px;
			margin-top: 8px;
		}

		:host([light-theme]) {
			color: #2e3338;
		}

		:host .discord-left-border {
			background-color: #202225;
			border-radius: 4px 0 0 4px;
			flex-shrink: 0;
			width: 4px;
		}

		:host([light-theme]) .discord-left-border {
			background-color: #e3e5e8;
		}

		:host .discord-embed-root {
			display: grid;
			grid-auto-flow: row;
			grid-row-gap: 0.25rem;
			min-height: 0;
			min-width: 0;
			text-indent: 0;
		}

		:host .discord-embed-wrapper {
			background-color: #2f3136;
			max-width: 520px;
			border: 1px solid rgba(46, 48, 54, 0.6);
			border-radius: 0 4px 4px 0;
			justify-self: start;
			align-self: start;
			display: grid;
			box-sizing: border-box;
		}

		:host([light-theme]) .discord-embed-wrapper {
			background-color: rgb(242, 243, 245);
			border-color: rgba(205, 205, 205, 0.3);
		}

		:host .discord-embed-wrapper .discord-embed-grid {
			display: inline-grid;
			grid-template-columns: auto -webkit-min-content;
			grid-template-columns: auto min-content;
			grid-template-columns: auto;
			grid-template-rows: auto;
			padding: 0.5rem 1rem 1rem 0.75rem;
		}

		:host .discord-embed-thumbnail {
			border-radius: 4px;
			flex-shrink: 0;
			grid-column: 2/2;
			grid-row: 1/8;
			justify-self: end;
			margin-left: 16px;
			margin-top: 8px;
			max-height: 80px;
			max-width: 80px;
			object-fit: contain;
			object-position: top center;
		}

		:host .discord-embed-author {
			-webkit-box-align: center;
			align-items: center;
			color: #fff;
			font-size: 14px;
			display: flex;
			font-weight: 600;
			grid-column: 1 / 1;
			margin-top: 8px;
			min-width: 0;
		}

		:host([light-theme]) .discord-embed-author {
			color: #060607;
		}

		:host .discord-embed-author a {
			color: #fff;
			font-weight: 600;
			text-decoration: none;
		}

		:host .discord-embed-author a:hover {
			text-decoration: underline;
		}

		:host([light-theme]) .discord-embed-author a {
			color: #060607;
		}

		:host .discord-embed-author .discord-author-image {
			border-radius: 50%;
			height: 24px;
			margin-right: 8px;
			width: 24px;
		}

		:host .discord-embed-author-block,
		:host .discord-embed-author-block > span {
			max-width: 95%;
		}

		:host .discord-embed-provider {
			font-size: 0.75rem;
			line-height: 1rem;
			font-weight: 400;
			grid-column: 1/1;
			margin-top: 8px;
			unicode-bidi: plaintext;
			text-align: left;
		}

		:host([light-theme]) .discord-embed-provider {
			color: #4f545c;
		}

		:host .discord-embed-title {
			-webkit-box-align: center;
			align-items: center;
			color: #fff;
			display: inline-block;
			font-size: 1rem;
			font-weight: 600;
			grid-column: 1 / 1;
			margin-top: 8px;
			min-width: 0;
		}

		:host([light-theme]) .discord-embed-title {
			color: #060607;
		}

		:host .discord-embed-title a {
			color: #00aff4;
			font-weight: 600;
			text-decoration: none;
		}

		:host .discord-embed-title a:hover {
			text-decoration: underline;
		}

		:host .discord-embed-image {
			border-radius: 4px;
			max-width: 300px;
			max-height: 300px;
		}

		:host .discord-embed-media {
			border-radius: 4px;
			contain: paint;
			display: block;
			grid-column: 1/1;
			margin-top: 16px;
		}

		:host .discord-embed-media.discord-embed-media-video {
			height: 225px;
		}

		:host .discord-embed.media .discord-embed-image {
			overflow: hidden;
			position: relative;
			user-select: text;
		}

		:host .discord-embed-media .discord-embed-video {
			-webkit-box-align: center;
			-webkit-box-pack: center;
			align-items: center;
			border-radius: 0;
			cursor: pointer;
			display: flex;
			height: 100%;
			justify-content: center;
			max-height: 100%;
			width: 100%;

			width: 400px;
			height: 225px;
			left: 0px;
			top: 0px;
		}

		.discord-embed-custom-emoji {
			display: inline-block;
		}

		.discord-embed-custom-emoji .discord-embed-custom-emoji-image {
			width: 18px;
			height: 18px;
			vertical-align: bottom;
		}

		slot[name='footer']::slotted(*) {
			grid-column: 1/3;
			grid-row: auto/auto;
		}
	`),Zt(i,s),i})();var jC=function(a,n,s,i,l,c){function d(x){if(x!==void 0&&typeof x!="function")throw new TypeError("Function expected");return x}for(var h=i.kind,g=h==="getter"?"get":h==="setter"?"set":"value",p=!n&&a?i.static?a:a.prototype:null,m=n||(p?Object.getOwnPropertyDescriptor(p,i.name):{}),u,S=!1,w=s.length-1;w>=0;w--){var z={};for(var _ in i)z[_]=_==="access"?{}:i[_];for(var _ in i.access)z.access[_]=i.access[_];z.addInitializer=function(x){if(S)throw new TypeError("Cannot add initializers after decoration has completed");c.push(d(x||null))};var b=(0,s[w])(h==="accessor"?{get:m.get,set:m.set}:m[g],z);if(h==="accessor"){if(b===void 0)continue;if(b===null||typeof b!="object")throw new TypeError("Object expected");(u=d(b.get))&&(m.get=u),(u=d(b.set))&&(m.set=u),(u=d(b.init))&&l.unshift(u)}else(u=d(b))&&(h==="field"?l.unshift(u):m[g]=u)}p&&Object.defineProperty(p,i.name,m),S=!0},NC=function(a,n,s){for(var i=arguments.length>2,l=0;l<n.length;l++)s=i?n[l].call(a,s):n[l].call(a);return i?s:void 0};let DC=(()=>{var c;let a=[lt("discord-embed-description")],n,s=[],i,l=at;return c=class extends l{render(){return F`<slot></slot>`}},i=c,(()=>{const h=typeof Symbol=="function"&&Symbol.metadata?Object.create(l[Symbol.metadata]??null):void 0;jC(null,n={value:i},a,{kind:"class",name:i.name,metadata:h},null,s),i=n.value,h&&Object.defineProperty(i,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:h})})(),Be(c,"styles",nt`
		:host {
			font-size: 0.875rem;
			font-weight: 400;
			grid-column: 1/1;
			line-height: 1.125rem;
			margin-top: 8px;
			min-width: 0;
		}
	`),NC(i,s),i})();var rl=function(a,n,s,i,l,c){function d(x){if(x!==void 0&&typeof x!="function")throw new TypeError("Function expected");return x}for(var h=i.kind,g=h==="getter"?"get":h==="setter"?"set":"value",p=!n&&a?i.static?a:a.prototype:null,m=n||(p?Object.getOwnPropertyDescriptor(p,i.name):{}),u,S=!1,w=s.length-1;w>=0;w--){var z={};for(var _ in i)z[_]=_==="access"?{}:i[_];for(var _ in i.access)z.access[_]=i.access[_];z.addInitializer=function(x){if(S)throw new TypeError("Cannot add initializers after decoration has completed");c.push(d(x||null))};var b=(0,s[w])(h==="accessor"?{get:m.get,set:m.set}:m[g],z);if(h==="accessor"){if(b===void 0)continue;if(b===null||typeof b!="object")throw new TypeError("Object expected");(u=d(b.get))&&(m.get=u),(u=d(b.set))&&(m.set=u),(u=d(b.init))&&l.unshift(u)}else(u=d(b))&&(h==="field"?l.unshift(u):m[g]=u)}p&&Object.defineProperty(p,i.name,m),S=!0},Zi=function(a,n,s){for(var i=arguments.length>2,l=0;l<n.length;l++)s=i?n[l].call(a,s):n[l].call(a);return i?s:void 0};let OC=(()=>{var C,A,I,H,$,Z;let a=[lt("discord-embed-field")],n,s=[],i,l=at,c,d=[],h=[],g,p=[],m=[],u,S=[],w=[],z,_=[],b=[],x,O=[],R=[];return C=class extends l{constructor(){super(...arguments);B(this,A,Zi(this,d,void 0));B(this,I,(Zi(this,h),Zi(this,p,{})));B(this,H,(Zi(this,m),Zi(this,S,!1)));B(this,$,(Zi(this,w),Zi(this,_,void 0)));B(this,Z,(Zi(this,b),Zi(this,O,!1)));Be(this,"validInlineIndices",(Zi(this,R),new Set([1,2,3])))}get fieldTitle(){return L(this,A)}set fieldTitle(V){U(this,A,V)}get embedFieldEmojisMap(){return L(this,I)}set embedFieldEmojisMap(V){U(this,I,V)}get inline(){return L(this,H)}set inline(V){U(this,H,V)}get inlineIndex(){return L(this,$)}set inlineIndex(V){U(this,$,V)}get lightTheme(){return L(this,Z)}set lightTheme(V){U(this,Z,V)}checkInlineIndex(){if(this.inlineIndex){const V=Number(this.inlineIndex);if(!Number.isNaN(V)&&!this.validInlineIndices.has(V))throw new RangeError("DiscordEmbedField `inlineIndex` prop must be one of: 1, 2, or 3")}}render(){this.checkInlineIndex();const V=this.parseTitle(this.fieldTitle),T=De(V,()=>F`<div class="discord-field-title">${[...V]}</div>`);return F`${T}<slot></slot>`}parseTitle(V){if(!V)return null;const T=[];let W="";for(const ze of V.split(`
`)){for(const k of ze.split(" ")){const D=l0(k)??this.embedFieldEmojisMap[k]??{};D.name?T.push(F`<discord-custom-emoji name=${D.name} url=${Le(D.url)} embed-emoji></discord-custom-emoji>`):W+=`${k} `,W===" "&&T.push(F`<br />`)}T.push(W),W=""}return T.map(ze=>typeof ze=="string"?F`<span>${ze}</span>`:ze)}},A=new WeakMap,I=new WeakMap,H=new WeakMap,$=new WeakMap,Z=new WeakMap,i=C,(()=>{const V=typeof Symbol=="function"&&Symbol.metadata?Object.create(l[Symbol.metadata]??null):void 0;c=[q({reflect:!0,attribute:"field-title"})],g=[q({attribute:!1})],u=[q({type:Boolean,reflect:!0,attribute:"inline"})],z=[q({type:Number,reflect:!0,attribute:"inline-index"})],x=[pt({context:Rt,subscribe:!0}),q({type:Boolean,reflect:!0,attribute:"light-theme"})],rl(C,null,c,{kind:"accessor",name:"fieldTitle",static:!1,private:!1,access:{has:T=>"fieldTitle"in T,get:T=>T.fieldTitle,set:(T,W)=>{T.fieldTitle=W}},metadata:V},d,h),rl(C,null,g,{kind:"accessor",name:"embedFieldEmojisMap",static:!1,private:!1,access:{has:T=>"embedFieldEmojisMap"in T,get:T=>T.embedFieldEmojisMap,set:(T,W)=>{T.embedFieldEmojisMap=W}},metadata:V},p,m),rl(C,null,u,{kind:"accessor",name:"inline",static:!1,private:!1,access:{has:T=>"inline"in T,get:T=>T.inline,set:(T,W)=>{T.inline=W}},metadata:V},S,w),rl(C,null,z,{kind:"accessor",name:"inlineIndex",static:!1,private:!1,access:{has:T=>"inlineIndex"in T,get:T=>T.inlineIndex,set:(T,W)=>{T.inlineIndex=W}},metadata:V},_,b),rl(C,null,x,{kind:"accessor",name:"lightTheme",static:!1,private:!1,access:{has:T=>"lightTheme"in T,get:T=>T.lightTheme,set:(T,W)=>{T.lightTheme=W}},metadata:V},O,R),rl(null,n={value:i},a,{kind:"class",name:i.name,metadata:V},null,s),i=n.value,V&&Object.defineProperty(i,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:V})})(),Be(C,"styles",nt`
		:host {
			font-size: 0.875rem;
			line-height: 1.125rem;
			min-width: 0;
			font-weight: 400;
			grid-column: 1/13;
			word-break: break-word;
		}

		:host .discord-field-title {
			color: #ffffff;
			font-weight: 600;
			font-size: 0.875rem;
			line-height: 1.125rem;
			min-width: 0;
			margin-bottom: 2px;
		}

		:host .discord-inline-field {
			flex-grow: 1;
			flex-basis: auto;
			min-width: 150px;
		}

		:host([light-theme]) .discord-field-title {
			color: #313338;
		}
	`),Zi(i,s),i})();var HC=function(a,n,s,i,l,c){function d(x){if(x!==void 0&&typeof x!="function")throw new TypeError("Function expected");return x}for(var h=i.kind,g=h==="getter"?"get":h==="setter"?"set":"value",p=!n&&a?i.static?a:a.prototype:null,m=n||(p?Object.getOwnPropertyDescriptor(p,i.name):{}),u,S=!1,w=s.length-1;w>=0;w--){var z={};for(var _ in i)z[_]=_==="access"?{}:i[_];for(var _ in i.access)z.access[_]=i.access[_];z.addInitializer=function(x){if(S)throw new TypeError("Cannot add initializers after decoration has completed");c.push(d(x||null))};var b=(0,s[w])(h==="accessor"?{get:m.get,set:m.set}:m[g],z);if(h==="accessor"){if(b===void 0)continue;if(b===null||typeof b!="object")throw new TypeError("Object expected");(u=d(b.get))&&(m.get=u),(u=d(b.set))&&(m.set=u),(u=d(b.init))&&l.unshift(u)}else(u=d(b))&&(h==="field"?l.unshift(u):m[g]=u)}p&&Object.defineProperty(p,i.name,m),S=!0},RC=function(a,n,s){for(var i=arguments.length>2,l=0;l<n.length;l++)s=i?n[l].call(a,s):n[l].call(a);return i?s:void 0};let $C=(()=>{var c;let a=[lt("discord-embed-fields")],n,s=[],i,l=at;return c=class extends l{render(){return F`<slot></slot>`}},i=c,(()=>{const h=typeof Symbol=="function"&&Symbol.metadata?Object.create(l[Symbol.metadata]??null):void 0;HC(null,n={value:i},a,{kind:"class",name:i.name,metadata:h},null,s),i=n.value,h&&Object.defineProperty(i,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:h})})(),Be(c,"styles",nt`
		:host {
			display: grid;
			grid-column: 1/1;
			margin-top: 8px;
			grid-gap: 8px;
		}

		::slotted([inline-index='1']) {
			grid-column: 1/5 !important;
		}

		::slotted([inline-index='2']) {
			grid-column: 5/9 !important;
		}

		::slotted([inline-index='3']) {
			grid-column: 9/13 !important;
		}
	`),RC(i,s),i})();var vo=function(a,n,s,i,l,c){function d(x){if(x!==void 0&&typeof x!="function")throw new TypeError("Function expected");return x}for(var h=i.kind,g=h==="getter"?"get":h==="setter"?"set":"value",p=!n&&a?i.static?a:a.prototype:null,m=n||(p?Object.getOwnPropertyDescriptor(p,i.name):{}),u,S=!1,w=s.length-1;w>=0;w--){var z={};for(var _ in i)z[_]=_==="access"?{}:i[_];for(var _ in i.access)z.access[_]=i.access[_];z.addInitializer=function(x){if(S)throw new TypeError("Cannot add initializers after decoration has completed");c.push(d(x||null))};var b=(0,s[w])(h==="accessor"?{get:m.get,set:m.set}:m[g],z);if(h==="accessor"){if(b===void 0)continue;if(b===null||typeof b!="object")throw new TypeError("Object expected");(u=d(b.get))&&(m.get=u),(u=d(b.set))&&(m.set=u),(u=d(b.init))&&l.unshift(u)}else(u=d(b))&&(h==="field"?l.unshift(u):m[g]=u)}p&&Object.defineProperty(p,i.name,m),S=!0},Ln=function(a,n,s){for(var i=arguments.length>2,l=0;l<n.length;l++)s=i?n[l].call(a,s):n[l].call(a);return i?s:void 0};let VC=(()=>{var x,O,R,C,A;let a=[lt("discord-embed-footer")],n,s=[],i,l=at,c,d=[],h=[],g,p=[],m=[],u,S=[],w=[],z,_=[],b=[];return x=class extends l{constructor(){super(...arguments);B(this,O,Ln(this,d,void 0));B(this,R,(Ln(this,h),Ln(this,p,void 0)));B(this,C,(Ln(this,m),Ln(this,S,void 0)));B(this,A,(Ln(this,w),Ln(this,_,!1)));Ln(this,b)}get footerImage(){return L(this,O)}set footerImage($){U(this,O,$)}get footerImageAlt(){return L(this,R)}set footerImageAlt($){U(this,R,$)}get timestamp(){return L(this,C)}set timestamp($){U(this,C,$)}get lightTheme(){return L(this,A)}set lightTheme($){U(this,A,$)}updateTimestamp($){$&&!Number.isNaN(new Date($).getTime())&&(this.timestamp=Do($))}render(){return this.updateTimestamp(this.timestamp),F`${De(this.footerImage,()=>F`<img src=${Le(this.footerImage)} alt=${Le(this.footerImageAlt)} class="discord-footer-image" />`)}
			<slot></slot>
			${De(this.timestamp,()=>F`<span class="discord-footer-separator">&bull;</span>`)}
			${De(this.timestamp,()=>` ${this.timestamp}`,()=>null)}`}},O=new WeakMap,R=new WeakMap,C=new WeakMap,A=new WeakMap,i=x,(()=>{const $=typeof Symbol=="function"&&Symbol.metadata?Object.create(l[Symbol.metadata]??null):void 0;c=[q({attribute:"footer-image"})],g=[q({attribute:"footer-image-alt"})],u=[q({type:String,reflect:!0,converter:Z=>Do(Z),attribute:!0})],z=[pt({context:Rt,subscribe:!0}),q({type:Boolean,reflect:!0,attribute:"light-theme"})],vo(x,null,c,{kind:"accessor",name:"footerImage",static:!1,private:!1,access:{has:Z=>"footerImage"in Z,get:Z=>Z.footerImage,set:(Z,he)=>{Z.footerImage=he}},metadata:$},d,h),vo(x,null,g,{kind:"accessor",name:"footerImageAlt",static:!1,private:!1,access:{has:Z=>"footerImageAlt"in Z,get:Z=>Z.footerImageAlt,set:(Z,he)=>{Z.footerImageAlt=he}},metadata:$},p,m),vo(x,null,u,{kind:"accessor",name:"timestamp",static:!1,private:!1,access:{has:Z=>"timestamp"in Z,get:Z=>Z.timestamp,set:(Z,he)=>{Z.timestamp=he}},metadata:$},S,w),vo(x,null,z,{kind:"accessor",name:"lightTheme",static:!1,private:!1,access:{has:Z=>"lightTheme"in Z,get:Z=>Z.lightTheme,set:(Z,he)=>{Z.lightTheme=he}},metadata:$},_,b),vo(null,n={value:i},a,{kind:"class",name:i.name,metadata:$},null,s),i=n.value,$&&Object.defineProperty(i,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:$})})(),Be(x,"styles",nt`
		:host {
			-webkit-box-align: center;
			align-items: center;
			display: flex;
			font-size: 12px;
			line-height: 16px;
			font-weight: 500;
			margin-top: 8px;
		}

		:host([light-theme]) {
			color: #747f8d;
		}

		:host .discord-footer-image {
			border-radius: 50%;
			flex-shrink: 0;
			height: 20px;
			margin-right: 8px;
			width: 20px;
		}

		:host .discord-footer-separator {
			color: #dcddde;
			font-weight: 500;
			display: inline-block;
			margin: 0 4px;
		}

		:host([light-theme]) .discord-footer-separator {
			color: #5c5e66;
		}
	`),Ln(i,s),i})();const LC=Ie`
	<path
	fill="#939bf9"
	d="m72 29.3v60.3c0 2.24 0 3.36-.44 4.22-.38.74-1 1.36-1.74 1.74-.86.44-1.98.44-4.22.44h-59.2c-2.24 0-3.36 0-4.22-.44-.74-.38-1.36-1-1.74-1.74-.44-.86-.44-1.98-.44-4.22v-83.2c0-2.24 0-3.36.44-4.22.38-.74 1-1.36 1.74-1.74.86-.44 1.98-.44 4.22-.44h36.3c1.96 0 2.94 0 3.86.22.5.12.98.28 1.44.5v16.88c0 2.24 0 3.36.44 4.22.38.74 1 1.36 1.74 1.74.86.44 1.98.44 4.22.44h16.88c.22.46.38.94.5 1.44.22.92.22 1.9.22 3.86z" fill="#d3d6fd"/><path d="m68.26 20.26c1.38 1.38 2.06 2.06 2.56 2.88.18.28.32.56.46.86h-16.88c-2.24 0-3.36 0-4.22-.44-.74-.38-1.36-1-1.74-1.74-.44-.86-.44-1.98-.44-4.22v-16.880029c.3.14.58.28.86.459999.82.5 1.5 1.18 2.88 2.56z" />
`;function BC(a={}){return F`<svg ${Pe(a)} aria-hidden="false" fill="none" width="72" height="96" viewBox="0 0 72 96">${LC}</svg>`}var Bn=function(a,n,s,i,l,c){function d(x){if(x!==void 0&&typeof x!="function")throw new TypeError("Function expected");return x}for(var h=i.kind,g=h==="getter"?"get":h==="setter"?"set":"value",p=!n&&a?i.static?a:a.prototype:null,m=n||(p?Object.getOwnPropertyDescriptor(p,i.name):{}),u,S=!1,w=s.length-1;w>=0;w--){var z={};for(var _ in i)z[_]=_==="access"?{}:i[_];for(var _ in i.access)z.access[_]=i.access[_];z.addInitializer=function(x){if(S)throw new TypeError("Cannot add initializers after decoration has completed");c.push(d(x||null))};var b=(0,s[w])(h==="accessor"?{get:m.get,set:m.set}:m[g],z);if(h==="accessor"){if(b===void 0)continue;if(b===null||typeof b!="object")throw new TypeError("Object expected");(u=d(b.get))&&(m.get=u),(u=d(b.set))&&(m.set=u),(u=d(b.init))&&l.unshift(u)}else(u=d(b))&&(h==="field"?l.unshift(u):m[g]=u)}p&&Object.defineProperty(p,i.name,m),S=!0},Va=function(a,n,s){for(var i=arguments.length>2,l=0;l<n.length;l++)s=i?n[l].call(a,s):n[l].call(a);return i?s:void 0};let UC=(()=>{var T,W,ze,k,D,P,ge,re,j;let a=[lt("discord-file-attachment")],n,s=[],i,l=at,c,d=[],h=[],g,p=[],m=[],u,S=[],w=[],z,_=[],b=[],x,O=[],R=[],C,A=[],I=[],H,$=[],Z=[],he,xe=[],V=[];return T=class extends l{constructor(){super(...arguments);B(this,W,Va(this,d,void 0));B(this,ze,(Va(this,h),Va(this,p,void 0)));B(this,k,(Va(this,m),Va(this,S,void 0)));B(this,D,(Va(this,w),Va(this,_,void 0)));B(this,P,(Va(this,b),Va(this,O,void 0)));B(this,ge,(Va(this,R),Va(this,A,void 0)));B(this,re,(Va(this,I),Va(this,$,void 0)));B(this,j,(Va(this,Z),Va(this,xe,!1)));Va(this,V)}get name(){return L(this,W)}set name(ae){U(this,W,ae)}get bytes(){return L(this,ze)}set bytes(ae){U(this,ze,ae)}get bytesUnit(){return L(this,k)}set bytesUnit(ae){U(this,k,ae)}get href(){return L(this,D)}set href(ae){U(this,D,ae)}get rel(){return L(this,P)}set rel(ae){U(this,P,ae)}get target(){return L(this,ge)}set target(ae){U(this,ge,ae)}get type(){return L(this,re)}set type(ae){U(this,re,ae)}get lightTheme(){return L(this,j)}set lightTheme(ae){U(this,j,ae)}render(){return F`<div class="discord-file-attachment-non-visual-media-item-container">
			<div class="discord-file-attachment-non-visual-media-item">
				<div class="discord-file-attachment-mosaic-item-media">
					<div class=${Lt({"discord-file-attachment-mosaic-style":!0,"discord-file-attachment-light-theme":this.lightTheme})}>
						${BC({class:"discord-file-attachment-icon",alt:"Attachment file type: unknown",title:"unknown"})}
						<div class="discord-file-attachment-inner">
							<div class="discord-file-attachment-filename-link-wrapper">
								<discord-link
									href=${Le(this.href)}
									rel=${Le(this.rel)}
									target=${Le(this.target)}
									type=${Le(this.type)}
								>
									${this.name}
								</discord-link>
							</div>
							<div class="discord-file-attachment-metadata">
								${this.bytes}${De(this.bytesUnit,()=>F` ${this.bytesUnit}`,()=>null)}
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="discord-button-download-attachment">
				<a
					class="discord-link-download-attachment"
					aria-label="Download"
					href="${Le(this.href)}"
					rel="noreferrer noopener"
					target="_blank"
					role="button"
					tabindex="0"
				>
					${s0()}
				</a>
			</div>
		</div>`}},W=new WeakMap,ze=new WeakMap,k=new WeakMap,D=new WeakMap,P=new WeakMap,ge=new WeakMap,re=new WeakMap,j=new WeakMap,i=T,(()=>{const ae=typeof Symbol=="function"&&Symbol.metadata?Object.create(l[Symbol.metadata]??null):void 0;c=[q()],g=[q({type:Number})],u=[q({attribute:"bytes-unit"})],z=[q()],x=[q()],C=[q()],H=[q()],he=[pt({context:Rt,subscribe:!0}),q({type:Boolean,reflect:!0,attribute:"light-theme"})],Bn(T,null,c,{kind:"accessor",name:"name",static:!1,private:!1,access:{has:X=>"name"in X,get:X=>X.name,set:(X,se)=>{X.name=se}},metadata:ae},d,h),Bn(T,null,g,{kind:"accessor",name:"bytes",static:!1,private:!1,access:{has:X=>"bytes"in X,get:X=>X.bytes,set:(X,se)=>{X.bytes=se}},metadata:ae},p,m),Bn(T,null,u,{kind:"accessor",name:"bytesUnit",static:!1,private:!1,access:{has:X=>"bytesUnit"in X,get:X=>X.bytesUnit,set:(X,se)=>{X.bytesUnit=se}},metadata:ae},S,w),Bn(T,null,z,{kind:"accessor",name:"href",static:!1,private:!1,access:{has:X=>"href"in X,get:X=>X.href,set:(X,se)=>{X.href=se}},metadata:ae},_,b),Bn(T,null,x,{kind:"accessor",name:"rel",static:!1,private:!1,access:{has:X=>"rel"in X,get:X=>X.rel,set:(X,se)=>{X.rel=se}},metadata:ae},O,R),Bn(T,null,C,{kind:"accessor",name:"target",static:!1,private:!1,access:{has:X=>"target"in X,get:X=>X.target,set:(X,se)=>{X.target=se}},metadata:ae},A,I),Bn(T,null,H,{kind:"accessor",name:"type",static:!1,private:!1,access:{has:X=>"type"in X,get:X=>X.type,set:(X,se)=>{X.type=se}},metadata:ae},$,Z),Bn(T,null,he,{kind:"accessor",name:"lightTheme",static:!1,private:!1,access:{has:X=>"lightTheme"in X,get:X=>X.lightTheme,set:(X,se)=>{X.lightTheme=se}},metadata:ae},xe,V),Bn(null,n={value:i},a,{kind:"class",name:i.name,metadata:ae},null,s),i=n.value,ae&&Object.defineProperty(i,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:ae})})(),Be(T,"styles",nt`
		:host {
			display: grid;
			height: -moz-fit-content;
			height: fit-content;
			grid-auto-flow: row;
			grid-row-gap: 0.25rem;
			grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
			text-indent: 0;
			min-height: 0;
			min-width: 0;
			padding-top: 0.125rem;
			padding-bottom: 0.125rem;
			position: relative;
		}

		:host > * {
			justify-self: start;
			align-self: start;
		}

		.discord-file-attachment-non-visual-media-item-container:hover .discord-button-download-attachment {
			display: block !important;
		}

		.discord-button-download-attachment {
			display: none;
			position: absolute;
			top: -8px;
			right: -8px;
			border-radius: 5px;
			outline: color-mix(in oklab, hsl(220 calc(1 * 6.5%) 18% / 1) 100%, black 0%);
			background-color: color-mix(in oklab, hsl(223 calc(1 * 6.7%) 20.6% / 1) 100%, black 0%);
		}

		.discord-link-download-attachment {
			color: color-mix(in oklab, hsl(215 calc(1 * 8.8%) 73.3% / 1) 100%, black 0%);
			display: flex;
		}

		.discord-icon-download {
			padding: 6px;
		}

		.discord-file-attachment-non-visual-media-item-container {
			margin-top: 8px;
			max-width: 100%;
			display: flex;
			flex-direction: column;
			position: relative;
		}

		.discord-file-attachment-non-visual-media-item {
			width: -moz-fit-content;
			width: fit-content;
			max-width: 100%;
		}

		.discord-file-attachment-mosaic-item-media {
			position: relative;
			max-height: inherit;
			border-radius: 2px;
			width: 100%;
			align-items: center;
			display: flex;
			flex-flow: row nowrap;
			max-width: 100%;
			height: 100%;
		}

		.discord-file-attachment-mosaic-style {
			padding: 16px;
			border-radius: 8px;
			width: 432px;
			max-width: 100%;
			flex: auto;
			border-color: #202020;
			background-color: #282828;

			align-items: center;
			flex-direction: row;
			display: flex;
			box-sizing: border-box;
			letter-spacing: 0;
			border: 1px solid transparent;
		}

		.discord-file-attachment-light-theme.discord-file-attachment-mosaic-style {
			border-color: #f3f3f3;
			background-color: #f9f9f9;
		}

		.discord-file-attachment-icon {
			width: 30px;
			height: 40px;
			margin-right: 8px;
			flex-shrink: 0;
		}

		.discord-file-attachment-inner {
			flex: 1;
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
		}

		.discord-file-attachment-filename-link-wrapper {
			color: #00aff4;
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
		}

		.discord-file-attachment-metadata {
			line-height: 16px;
			font-size: 12px;
			font-weight: 400;
			color: hsl(223 calc(1 * 5.8%) 52.9% / 1);
			margin-right: 8px;
		}
	`),Va(i,s),i})();/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o0=(a,n,s)=>{for(const i of n)if(i[0]===a)return(0,i[1])();return s==null?void 0:s()};var z3=function(a,n,s,i,l,c){function d(x){if(x!==void 0&&typeof x!="function")throw new TypeError("Function expected");return x}for(var h=i.kind,g=h==="getter"?"get":h==="setter"?"set":"value",p=!n&&a?i.static?a:a.prototype:null,m=n||(p?Object.getOwnPropertyDescriptor(p,i.name):{}),u,S=!1,w=s.length-1;w>=0;w--){var z={};for(var _ in i)z[_]=_==="access"?{}:i[_];for(var _ in i.access)z.access[_]=i.access[_];z.addInitializer=function(x){if(S)throw new TypeError("Cannot add initializers after decoration has completed");c.push(d(x||null))};var b=(0,s[w])(h==="accessor"?{get:m.get,set:m.set}:m[g],z);if(h==="accessor"){if(b===void 0)continue;if(b===null||typeof b!="object")throw new TypeError("Object expected");(u=d(b.get))&&(m.get=u),(u=d(b.set))&&(m.set=u),(u=d(b.init))&&l.unshift(u)}else(u=d(b))&&(h==="field"?l.unshift(u):m[g]=u)}p&&Object.defineProperty(p,i.name,m),S=!0},Uf=function(a,n,s){for(var i=arguments.length>2,l=0;l<n.length;l++)s=i?n[l].call(a,s):n[l].call(a);return i?s:void 0};let IC=(()=>{var g,p;let a=[lt("discord-header")],n,s=[],i,l=at,c,d=[],h=[];return g=class extends l{constructor(){super(...arguments);B(this,p,Uf(this,d,1));Uf(this,h)}get level(){return L(this,p)}set level(S){U(this,p,S)}ensureLevelIsNumber(){this.level&&!Number.isNaN(this.level)&&(this.level=Number(this.level))}checkLevel(){if(this.level<1||this.level>3)throw new RangeError("The level property must be a number between 1 and 3 (inclusive)")}render(){return this.ensureLevelIsNumber(),this.checkLevel(),o0(this.level,[[1,()=>F`<h1><slot></slot></h1>`],[2,()=>F`<h2><slot></slot></h2>`],[3,()=>F`<h3><slot></slot></h3>`]],()=>F`<slot></slot>`)}},p=new WeakMap,i=g,(()=>{const S=typeof Symbol=="function"&&Symbol.metadata?Object.create(l[Symbol.metadata]??null):void 0;c=[q({type:Number,reflect:!0})],z3(g,null,c,{kind:"accessor",name:"level",static:!1,private:!1,access:{has:w=>"level"in w,get:w=>w.level,set:(w,z)=>{w.level=z}},metadata:S},d,h),z3(null,n={value:i},a,{kind:"class",name:i.name,metadata:S},null,s),i=n.value,S&&Object.defineProperty(i,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:S})})(),Be(g,"styles",nt`
		:host > * {
			margin: 16px 0 8px;
			font-weight: 700;
			line-height: 1.375em;
		}

		:host([level='1']) > h1 {
			font-size: 1.5rem;
		}

		:host([level='2']) > h2 {
			font-size: 1.25rem;
		}

		:host([level='3']) > h3 {
			font-size: 1rem;
		}

		:host([level='1']):first-child() > h1,
		:host([level='2']):first-child() > h2 {
			margin-top: 8px;
		}

		:host([level='3']):first-child() > h3 {
			margin-top: 4px;
		}
	`),Uf(i,s),i})();var sl=function(a,n,s,i,l,c){function d(x){if(x!==void 0&&typeof x!="function")throw new TypeError("Function expected");return x}for(var h=i.kind,g=h==="getter"?"get":h==="setter"?"set":"value",p=!n&&a?i.static?a:a.prototype:null,m=n||(p?Object.getOwnPropertyDescriptor(p,i.name):{}),u,S=!1,w=s.length-1;w>=0;w--){var z={};for(var _ in i)z[_]=_==="access"?{}:i[_];for(var _ in i.access)z.access[_]=i.access[_];z.addInitializer=function(x){if(S)throw new TypeError("Cannot add initializers after decoration has completed");c.push(d(x||null))};var b=(0,s[w])(h==="accessor"?{get:m.get,set:m.set}:m[g],z);if(h==="accessor"){if(b===void 0)continue;if(b===null||typeof b!="object")throw new TypeError("Object expected");(u=d(b.get))&&(m.get=u),(u=d(b.set))&&(m.set=u),(u=d(b.init))&&l.unshift(u)}else(u=d(b))&&(h==="field"?l.unshift(u):m[g]=u)}p&&Object.defineProperty(p,i.name,m),S=!0},qi=function(a,n,s){for(var i=arguments.length>2,l=0;l<n.length;l++)s=i?n[l].call(a,s):n[l].call(a);return i?s:void 0};let PC=(()=>{var C,A,I,H,$,Z;let a=[lt("discord-image-attachment")],n,s=[],i,l=at,c,d=[],h=[],g,p=[],m=[],u,S=[],w=[],z,_=[],b=[],x,O=[],R=[];return C=class extends l{constructor(){super(...arguments);B(this,A,qi(this,d,void 0));B(this,I,(qi(this,h),qi(this,p,void 0)));B(this,H,(qi(this,m),qi(this,S,void 0)));B(this,$,(qi(this,w),qi(this,_,"discord image attachment")));B(this,Z,(qi(this,b),qi(this,O,!1)));qi(this,R)}get url(){return L(this,A)}set url(V){U(this,A,V)}get height(){return L(this,I)}set height(V){U(this,I,V)}get width(){return L(this,H)}set width(V){U(this,H,V)}get alt(){return L(this,$)}set alt(V){U(this,$,V)}get customImageElement(){return L(this,Z)}set customImageElement(V){U(this,Z,V)}componentWillRender(){this.customImageElement||lC(this.url)}render(){return F`
			<div class="discord-image-attachment">
				<div class="discord-image-wrapper" style="${Pn({height:`${this.height}px`,width:`${this.width}px`})}">
					${De(this.customImageElement,()=>F`<slot></slot>`,()=>F`<img
								alt=${Le(this.alt)}
								src=${Le(this.url)}
								height=${Le(this.height)}
								width=${Le(this.width)}
							/>`)}
				</div>
			</div>
		`}},A=new WeakMap,I=new WeakMap,H=new WeakMap,$=new WeakMap,Z=new WeakMap,i=C,(()=>{const V=typeof Symbol=="function"&&Symbol.metadata?Object.create(l[Symbol.metadata]??null):void 0;c=[q({reflect:!0,attribute:"url"})],g=[q({type:Number,reflect:!0,attribute:"height"})],u=[q({type:Number,reflect:!0,attribute:"width"})],z=[q({reflect:!0,attribute:"alt"})],x=[q({type:Boolean,attribute:"custom-image-element"})],sl(C,null,c,{kind:"accessor",name:"url",static:!1,private:!1,access:{has:T=>"url"in T,get:T=>T.url,set:(T,W)=>{T.url=W}},metadata:V},d,h),sl(C,null,g,{kind:"accessor",name:"height",static:!1,private:!1,access:{has:T=>"height"in T,get:T=>T.height,set:(T,W)=>{T.height=W}},metadata:V},p,m),sl(C,null,u,{kind:"accessor",name:"width",static:!1,private:!1,access:{has:T=>"width"in T,get:T=>T.width,set:(T,W)=>{T.width=W}},metadata:V},S,w),sl(C,null,z,{kind:"accessor",name:"alt",static:!1,private:!1,access:{has:T=>"alt"in T,get:T=>T.alt,set:(T,W)=>{T.alt=W}},metadata:V},_,b),sl(C,null,x,{kind:"accessor",name:"customImageElement",static:!1,private:!1,access:{has:T=>"customImageElement"in T,get:T=>T.customImageElement,set:(T,W)=>{T.customImageElement=W}},metadata:V},O,R),sl(null,n={value:i},a,{kind:"class",name:i.name,metadata:V},null,s),i=n.value,V&&Object.defineProperty(i,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:V})})(),Be(C,"styles",nt`
		:host {
			display: block;
			position: relative;
			-webkit-user-select: text;
			-moz-user-select: text;
			-ms-user-select: text;
			user-select: text;
			overflow: hidden;
			border-radius: 3px;
		}

		.discord-image-attachment {
			color: #dcddde;
			display: flex;
			font-size: 13px;
			line-height: 150%;
			margin-bottom: 8px;
			margin-top: 8px;
		}
	`),qi(i,s),i})();var mi=function(a,n,s,i,l,c){function d(x){if(x!==void 0&&typeof x!="function")throw new TypeError("Function expected");return x}for(var h=i.kind,g=h==="getter"?"get":h==="setter"?"set":"value",p=!n&&a?i.static?a:a.prototype:null,m=n||(p?Object.getOwnPropertyDescriptor(p,i.name):{}),u,S=!1,w=s.length-1;w>=0;w--){var z={};for(var _ in i)z[_]=_==="access"?{}:i[_];for(var _ in i.access)z.access[_]=i.access[_];z.addInitializer=function(x){if(S)throw new TypeError("Cannot add initializers after decoration has completed");c.push(d(x||null))};var b=(0,s[w])(h==="accessor"?{get:m.get,set:m.set}:m[g],z);if(h==="accessor"){if(b===void 0)continue;if(b===null||typeof b!="object")throw new TypeError("Object expected");(u=d(b.get))&&(m.get=u),(u=d(b.set))&&(m.set=u),(u=d(b.init))&&l.unshift(u)}else(u=d(b))&&(h==="field"?l.unshift(u):m[g]=u)}p&&Object.defineProperty(p,i.name,m),S=!0},qt=function(a,n,s){for(var i=arguments.length>2,l=0;l<n.length;l++)s=i?n[l].call(a,s):n[l].call(a);return i?s:void 0};let mm=(()=>{var X,se,K,J,le,Ee,$e,ue,ie,Me,Ke,Ge,Fe;let a=[lt("discord-input-text")],n,s=[],i,l=at,c,d=[],h=[],g,p=[],m=[],u,S=[],w=[],z,_=[],b=[],x,O=[],R=[],C,A=[],I=[],H,$=[],Z=[],he,xe=[],V=[],T,W=[],ze=[],k,D=[],P=[],ge,re=[],j=[],G,ee=[],ae=[];return X=class extends l{constructor(){super(...arguments);B(this,se,qt(this,d,"paragraph"));B(this,K,(qt(this,h),qt(this,p,!1)));B(this,J,(qt(this,m),qt(this,S,void 0)));B(this,le,(qt(this,w),qt(this,_,void 0)));B(this,Ee,(qt(this,b),qt(this,O,0)));B(this,$e,(qt(this,R),qt(this,A,4e3)));B(this,ue,(qt(this,I),qt(this,$,!1)));B(this,ie,(qt(this,Z),qt(this,xe,"")));B(this,Me,(qt(this,V),qt(this,W,"")));B(this,Ke,(qt(this,ze),qt(this,D,!1)));B(this,Ge,(qt(this,P),qt(this,re,null)));B(this,Fe,(qt(this,j),qt(this,ee,0)));Be(this,"validInputTextTypes",(qt(this,ae),new Set(["short","paragraph"])))}get type(){return L(this,se)}set type(pe){U(this,se,pe)}get required(){return L(this,K)}set required(pe){U(this,K,pe)}get label(){return L(this,J)}set label(pe){U(this,J,pe)}get placeholder(){return L(this,le)}set placeholder(pe){U(this,le,pe)}get minLength(){return L(this,Ee)}set minLength(pe){U(this,Ee,pe)}get maxLength(){return L(this,$e)}set maxLength(pe){U(this,$e,pe)}get lightTheme(){return L(this,ue)}set lightTheme(pe){U(this,ue,pe)}get defaultValue(){return L(this,ie)}set defaultValue(pe){U(this,ie,pe)}get value(){return L(this,Me)}set value(pe){U(this,Me,pe)}get hasWarning(){return L(this,Ke)}set hasWarning(pe){U(this,Ke,pe)}get calculatedMaxLength(){return L(this,Ge)}set calculatedMaxLength(pe){U(this,Ge,pe)}get calculatedCharactersCount(){return L(this,Fe)}set calculatedCharactersCount(pe){U(this,Fe,pe)}connectedCallback(){super.connectedCallback(),this.defaultValue&&(this.value=this.defaultValue,this.calculatedCharactersCount=this.value.length)}resetState(){this.hasWarning=!1,this.calculatedMaxLength=null,this.calculatedCharactersCount=0,this.defaultValue?this.value=this.defaultValue:this.value=""}render(){return this.checkNeededArgument(),this.checkType(),F`
			<div class="discord-input-text">
				<div class=${Lt({"discord-text-input-warning-length":this.hasWarning})}>
					<h2 class="discord-label-input-text">
						${this.label.slice(0,45)}${De(this.required&&!this.hasWarning,()=>F`<span class="discord-text-input-required">*</span>`)}
					</h2>
					${De(this.hasWarning,()=>F`<span class="discord-text-input-warning-length discord-text-input-warning-error-text">
								- Must be between ${this.minLength} and ${this.maxLength} in length.</span
							>`)}
				</div>
				<div class="discord-text-input-container">
					${De(this.type==="paragraph",()=>F`
							<div class="discord-text-input-container">
								<textarea
									@input=${pe=>this.handleInputChange(pe)}
									.required=${this.required}
									.value=${this.value}
									class="discord-text-input-paragraph"
									type="text"
									minlength="${this.minLength}"
									maxlength="${this.maxLength}"
									placeholder="${Le(this.placeholder)}"
									rows="3"
								></textarea>
								<div class="discord-text-input-textarea-max-length">
									<span
										>${De(this.valueIsNotNullOrUndefined(this.calculatedMaxLength),()=>this.calculatedMaxLength,()=>De(this.value,()=>this.maxLength-this.value.length,()=>this.maxLength))}</span
									>
								</div>
							</div>
						`)}
					${De(this.type==="short",()=>F`<input
								@input=${pe=>this.handleInputChange(pe)}
								.required=${this.required}
								.value=${this.value}
								class="discord-text-input-short"
								type="text"
								minlength="${this.minLength}"
								maxlength="${this.maxLength}"
								placeholder="${Le(this.placeholder)}"
								rows="3"
							/>`)}
				</div>
				${De(this.required,()=>F`
						<div class="discord-text-input-message-needed-input">
							<div class="icon">
								<div class="exclamation">!</div>
							</div>
							<span>Please fill out this field.</span>
						</div>
					`)}
				${De(this.valueIsNotNullOrUndefined(this.minLength),()=>F`
						<div class="discord-text-input-message-needed-min-length">
							<div class="icon">
								<div class="exclamation">!</div>
							</div>
							<span
								>Increase this text to ${this.minLength} characters or more. You are currently using ${this.calculatedCharactersCount}
								characters</span
							>
						</div>
					`)}
				<div class=${Lt({"discord-text-input-warning-length":this.hasWarning})}>
					<h2 class="discord-text-input-warning-length">
						${De(this.hasWarning&&this.valueIsNotNullOrUndefined(this.minLength),()=>F`<span class="discord-text-input-warning-bottom-error-text"
									>Must be ${this.minLength} characters or more in length.</span
								>`)}
					</h2>
				</div>
			</div>
		`}checkNeededArgument(){if(this.label){if(!this.type)throw new Yn("Type is required to input text")}else throw new Yn("Label is required to input text")}checkType(){if(typeof this.type!="string")throw new TypeError("DiscordInputText `type` prop must be a string.");if(!this.validInputTextTypes.has(this.type))throw new RangeError("DiscordInputText `type` prop must be one of: 'short', 'paragraph'")}valueIsNotNullOrUndefined(pe){return pe!=null}handleInputChange(pe){var je,Te;const te=pe==null?void 0:pe.target;if(this.value=te instanceof HTMLTextAreaElement||te instanceof HTMLInputElement?te.value:"",te instanceof HTMLTextAreaElement||te instanceof HTMLInputElement){const We=te.value.length;We===0&&this.minLength===0&&this.valueIsNotNullOrUndefined(this.maxLength)&&this.required?this.hasWarning=!0:this.hasWarning=We<this.minLength,this.calculatedMaxLength=this.maxLength-We,this.calculatedCharactersCount=We}const Oe=(je=this.shadowRoot)==null?void 0:je.querySelector("div.discord-text-input-message-needed-input"),Qe=(Te=this.shadowRoot)==null?void 0:Te.querySelector("div.discord-text-input-message-needed-min-length");te.value.length>=this.minLength&&Qe instanceof HTMLDivElement&&Qe.style.display&&(Qe.style.opacity="0",globalThis.setTimeout(()=>{Qe.style.display=""},1e3)),Oe instanceof HTMLDivElement&&Oe.style.display&&(Oe.style.opacity="0",globalThis.setTimeout(()=>{Oe.style.display=""},1e3))}},se=new WeakMap,K=new WeakMap,J=new WeakMap,le=new WeakMap,Ee=new WeakMap,$e=new WeakMap,ue=new WeakMap,ie=new WeakMap,Me=new WeakMap,Ke=new WeakMap,Ge=new WeakMap,Fe=new WeakMap,i=X,(()=>{const pe=typeof Symbol=="function"&&Symbol.metadata?Object.create(l[Symbol.metadata]??null):void 0;c=[q({reflect:!0,attribute:"type",type:String})],g=[q({reflect:!0,attribute:"required",type:Boolean})],u=[q({reflect:!0,attribute:"label",type:String})],z=[q({reflect:!0,attribute:"placeholder",type:String})],x=[q({reflect:!0,attribute:"min-length",type:Number})],C=[q({reflect:!0,attribute:"max-length",type:Number})],H=[pt({context:Rt,subscribe:!0}),q({type:Boolean,reflect:!0,attribute:"light-theme"})],he=[q({type:String,reflect:!0,attribute:"default-value"})],T=[ai()],k=[ai()],ge=[ai()],G=[ai()],mi(X,null,c,{kind:"accessor",name:"type",static:!1,private:!1,access:{has:te=>"type"in te,get:te=>te.type,set:(te,Oe)=>{te.type=Oe}},metadata:pe},d,h),mi(X,null,g,{kind:"accessor",name:"required",static:!1,private:!1,access:{has:te=>"required"in te,get:te=>te.required,set:(te,Oe)=>{te.required=Oe}},metadata:pe},p,m),mi(X,null,u,{kind:"accessor",name:"label",static:!1,private:!1,access:{has:te=>"label"in te,get:te=>te.label,set:(te,Oe)=>{te.label=Oe}},metadata:pe},S,w),mi(X,null,z,{kind:"accessor",name:"placeholder",static:!1,private:!1,access:{has:te=>"placeholder"in te,get:te=>te.placeholder,set:(te,Oe)=>{te.placeholder=Oe}},metadata:pe},_,b),mi(X,null,x,{kind:"accessor",name:"minLength",static:!1,private:!1,access:{has:te=>"minLength"in te,get:te=>te.minLength,set:(te,Oe)=>{te.minLength=Oe}},metadata:pe},O,R),mi(X,null,C,{kind:"accessor",name:"maxLength",static:!1,private:!1,access:{has:te=>"maxLength"in te,get:te=>te.maxLength,set:(te,Oe)=>{te.maxLength=Oe}},metadata:pe},A,I),mi(X,null,H,{kind:"accessor",name:"lightTheme",static:!1,private:!1,access:{has:te=>"lightTheme"in te,get:te=>te.lightTheme,set:(te,Oe)=>{te.lightTheme=Oe}},metadata:pe},$,Z),mi(X,null,he,{kind:"accessor",name:"defaultValue",static:!1,private:!1,access:{has:te=>"defaultValue"in te,get:te=>te.defaultValue,set:(te,Oe)=>{te.defaultValue=Oe}},metadata:pe},xe,V),mi(X,null,T,{kind:"accessor",name:"value",static:!1,private:!1,access:{has:te=>"value"in te,get:te=>te.value,set:(te,Oe)=>{te.value=Oe}},metadata:pe},W,ze),mi(X,null,k,{kind:"accessor",name:"hasWarning",static:!1,private:!1,access:{has:te=>"hasWarning"in te,get:te=>te.hasWarning,set:(te,Oe)=>{te.hasWarning=Oe}},metadata:pe},D,P),mi(X,null,ge,{kind:"accessor",name:"calculatedMaxLength",static:!1,private:!1,access:{has:te=>"calculatedMaxLength"in te,get:te=>te.calculatedMaxLength,set:(te,Oe)=>{te.calculatedMaxLength=Oe}},metadata:pe},re,j),mi(X,null,G,{kind:"accessor",name:"calculatedCharactersCount",static:!1,private:!1,access:{has:te=>"calculatedCharactersCount"in te,get:te=>te.calculatedCharactersCount,set:(te,Oe)=>{te.calculatedCharactersCount=Oe}},metadata:pe},ee,ae),mi(null,n={value:i},a,{kind:"class",name:i.name,metadata:pe},null,s),i=n.value,pe&&Object.defineProperty(i,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:pe})})(),Be(X,"styles",nt`
		.discord-input-text {
			width: 100%;
			margin-bottom: 1em;
		}

		.discord-label-input-text {
			margin-bottom: 8px;
			font-size: 12px;
			line-height: 1.3333333333333333;
			font-weight: 700;
			text-transform: uppercase;
			letter-spacing: 0.02em;
			color: color-mix(in oklab, hsl(215 calc(1 * 8.8%) 73.3% / 1) 100%, black 0%);
		}

		.discord-text-input-warning-length {
			display: flex;
			align-items: center;
			font-size: 12px;
			line-height: 1.3333333333333333;
			font-weight: 700;
			text-transform: normal !important;
			letter-spacing: 0.02em;
			color: #b0b5bc;
			gap: 3px;
		}

		.discord-text-input-warning-error-text {
			font-size: 12px;
			font-weight: 500;
			font-style: italic;
			text-transform: none;
		}

		.discord-text-input-warning-bottom-error-text {
			font-size: 12px;
			line-height: 1.3333333333333333;
			font-weight: 400;
		}

		.discord-text-input-required {
			padding-left: 4px;
			color: hsl(359 calc(1 * 87.3%) 59.8% / 1);
		}

		.discord-text-input-container {
			width: 100%;
			display: flex;
			flex-direction: column;
			position: relative;
		}

		.discord-text-input-paragraph {
			width: 100%;
			resize: none;
			box-sizing: border-box;
			height: 83px;
			padding: 8px 38.92px 8px 8px;
			border-radius: 3px;
			border: medium;
			background-color: #1e1f22;
			color: #b0b5bc;
			font-family: 'gg sans', 'Noto Sans', Whitney, 'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif;
		}

		.discord-text-input-short {
			width: 100%;
			resize: none;
			box-sizing: border-box;
			height: 40px;
			padding: 8px 38.92px 8px 8px;
			border-radius: 3px;
			border: medium;
			background-color: #1e1f22;
			color: #b0b5bc;
			font-family: 'gg sans', 'Noto Sans', Whitney, 'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif;
		}

		input,
		textarea,
		::placeholder {
			font-weight: 400;
			font-size: 16px;
			color: #b0b5bc;
			opacity: 0.8;
		}

		.discord-text-input-paragraph::-webkit-scrollbar {
			width: 8px;
			margin-right: 5px;
			background-color: transparent;
		}

		.discord-text-input-paragraph::-webkit-scrollbar-track {
			background-color: rgba(255, 255, 255, 0.2);
			margin-right: 1em auto;
			border-radius: 10px;
		}

		.discord-text-input-paragraph::-webkit-scrollbar-thumb {
			border-radius: 10px;
			background-color: rgba(0, 0, 0, 0.5);
			margin-right: 1em auto;
		}

		.discord-text-input-textarea-max-length {
			font-size: small;
			position: absolute;
			display: flex;
			color: #b0b5bc;
			right: 0;
			bottom: 0;
			padding-right: 16px;
		}

		:host .discord-text-input-warning-length * {
			color: color-mix(in oklab, hsl(358 calc(1 * 92.9%) 72.4% / 1) 100%, black 0%) !important;
		}

		:host([light-theme]) .discord-text-input-warning-length * {
			color: color-mix(in oklab, hsl(360 calc(1 * 60.2%) 39.4% / 1) 100%, black 0%) !important;
		}

		:host([light-theme]) .discord-text-input-short,
		:host([light-theme]) .discord-label-input-text {
			color: color-mix(in oklab, hsl(228 calc(1 * 6%) 32.5% / 1) 100%, black 0%);
		}

		:host([light-theme]) .discord-text-input-paragraph,
		:host([light-theme]) .discord-text-input-short {
			background-color: rgb(253, 253, 253);
			border: 1px solid #b0b5bc;
		}

		:host([light-theme]) input,
		:host([light-theme]) textarea,
		:host([light-theme]) ::placeholder {
			font-weight: 400;
			font-size: 16px;
			color: color-mix(in oklab, hsl(223 calc(1 * 6.7%) 20.6% / 1) 100%, black 0%);
			opacity: 0.8;
		}

		.discord-text-input-message-needed-input,
		.discord-text-input-message-needed-min-length {
			background-color: white;
			position: absolute;
			align-items: center;
			gap: 5px;
			left: 50%;
			transform: translateX(-50%);
			opacity: 0;
			display: none;
			transition: 0.5s;
			color: black;
			border-radius: 5px;
			text-align: center;
			font-family: system-ui;
			pointer-events: none;
			padding: 10px;
			min-width: 50%;
			border: black solid 1px;
			z-index: 25;
		}

		.discord-text-input-message-needed-input::after,
		.discord-text-input-message-needed-min-length::after {
			content: '';
			position: absolute;
			bottom: 100%; /* Positions the arrow above the div */
			left: 0;
			transform: translateX(50%);
			border-width: 10px !important; /* Arrow size */
			border-style: solid !important;
			border-color: transparent transparent white transparent !important; /* Arrow pointing up */
		}

		:host([light-theme]) .discord-text-input-message-needed-input::after,
		:host([light-theme]) .discord-text-input-message-needed-min-length::after {
			border-color: transparent transparent #bfbfbf transparent !important; /* Arrow pointing up */
		}

		.discord-text-input-message-needed-min-length::after {
			transform: translate(500%);
		}

		.discord-text-input-message-needed-min-length {
			left: 50% !important;
			width: max-content;
		}

		.icon {
			width: 25px;
			height: 25px;
			background-color: darkorange;
			border-radius: 5px;
			position: relative;
			display: flex;
			justify-content: center;
			align-items: center;
			color: white;
			font-weight: bold;
			font-size: 18px;
			line-height: 1;
			text-align: center;
		}

		.exclamation {
			display: flex;
			flex-direction: column;
			align-items: center;
			line-height: 1;
		}
	`),qt(i,s),i})();const ZC=Ie`
<path
	fill="currentColor"
	fill-rule="evenodd"
	d="m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z"
/>
`;function qC(a){return F`<svg ${Pe(a)} class="discord-guild-badge" aria-hidden="false" width="16" height="16" viewBox="0 0 16 15.2">
		${ZC}
	</svg>`}const YC=Ie`
	<path
		d="M10.5906 6.39993L9.19223 7.29993C8.99246 7.39993 8.89258 7.39993 8.69281 7.29993C8.59293 7.19993 8.39317 7.09993 8.29328 6.99993C7.89375 6.89993 7.5941 6.99993 7.29445 7.19993L6.79504 7.49993L4.29797 9.19993C3.69867 9.49993 2.99949 9.39993 2.69984 8.79993C2.30031 8.29993 2.50008 7.59993 2.99949 7.19993L5.99598 5.19993C6.79504 4.69993 7.79387 4.49993 8.69281 4.69993C9.49188 4.89993 10.0912 5.29993 10.5906 5.89993C10.7904 6.09993 10.6905 6.29993 10.5906 6.39993Z"
		fill="currentColor"
	/>
	<path
		d="M13.4871 7.79985C13.4871 8.19985 13.2874 8.59985 12.9877 8.79985L9.89135 10.7999C9.29206 11.1999 8.69276 11.3999 7.99358 11.3999C7.69393 11.3999 7.49417 11.3999 7.19452 11.2999C6.39545 11.0999 5.79616 10.6999 5.29674 10.0999C5.19686 9.89985 5.29674 9.69985 5.39663 9.59985L6.79499 8.69985C6.89487 8.59985 7.09463 8.59985 7.19452 8.69985C7.39428 8.79985 7.59405 8.89985 7.69393 8.99985C8.09346 8.99985 8.39311 8.99985 8.69276 8.79985L9.39194 8.39985L11.3896 6.99985L11.6892 6.79985C12.1887 6.49985 12.9877 6.59985 13.2874 7.09985C13.4871 7.39985 13.4871 7.59985 13.4871 7.79985Z"
		fill="currentColor"
	/>
`;function FC(a={}){return F`<svg ${Pe(a)} class="partner-badge-overlay" aria-hidden="false" width="16" height="16" viewBox="0 0 16 16">
		${YC}
	</svg>`}const GC=Ie`
	<path d="M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z" fill="currentColor" />
`;function XC(a={}){return F`<svg ${Pe(a)} class="verified-badge-overlay" aria-hidden="false" width="16" height="16" viewBox="0 0 16 15.2">
		${GC}
	</svg>`}var Yi=function(a,n,s,i,l,c){function d(x){if(x!==void 0&&typeof x!="function")throw new TypeError("Function expected");return x}for(var h=i.kind,g=h==="getter"?"get":h==="setter"?"set":"value",p=!n&&a?i.static?a:a.prototype:null,m=n||(p?Object.getOwnPropertyDescriptor(p,i.name):{}),u,S=!1,w=s.length-1;w>=0;w--){var z={};for(var _ in i)z[_]=_==="access"?{}:i[_];for(var _ in i.access)z.access[_]=i.access[_];z.addInitializer=function(x){if(S)throw new TypeError("Cannot add initializers after decoration has completed");c.push(d(x||null))};var b=(0,s[w])(h==="accessor"?{get:m.get,set:m.set}:m[g],z);if(h==="accessor"){if(b===void 0)continue;if(b===null||typeof b!="object")throw new TypeError("Object expected");(u=d(b.get))&&(m.get=u),(u=d(b.set))&&(m.set=u),(u=d(b.init))&&l.unshift(u)}else(u=d(b))&&(h==="field"?l.unshift(u):m[g]=u)}p&&Object.defineProperty(p,i.name,m),S=!0},ua=function(a,n,s){for(var i=arguments.length>2,l=0;l<n.length;l++)s=i?n[l].call(a,s):n[l].call(a);return i?s:void 0};let QC=(()=>{var ge,re,j,G,ee,ae,X,se,K,J,le;let a=[lt("discord-invite")],n,s=[],i,l=at,c,d=[],h=[],g,p=[],m=[],u,S=[],w=[],z,_=[],b=[],x,O=[],R=[],C,A=[],I=[],H,$=[],Z=[],he,xe=[],V=[],T,W=[],ze=[],k,D=[],P=[];return ge=class extends l{constructor(){super(...arguments);B(this,re,ua(this,d,bd.blue));B(this,j,(ua(this,h),ua(this,p,"Discord Server")));B(this,G,(ua(this,m),ua(this,S,void 0)));B(this,ee,(ua(this,w),ua(this,_,0)));B(this,ae,(ua(this,b),ua(this,O,0)));B(this,X,(ua(this,R),ua(this,A,!1)));B(this,se,(ua(this,I),ua(this,$,!1)));B(this,K,(ua(this,Z),ua(this,xe,"You've been invited to join a server")));B(this,J,(ua(this,V),ua(this,W,"Join")));B(this,le,(ua(this,ze),ua(this,D,!1)));ua(this,P)}get icon(){return L(this,re)}set icon(ue){U(this,re,ue)}get name(){return L(this,j)}set name(ue){U(this,j,ue)}get url(){return L(this,G)}set url(ue){U(this,G,ue)}get online(){return L(this,ee)}set online(ue){U(this,ee,ue)}get members(){return L(this,ae)}set members(ue){U(this,ae,ue)}get verified(){return L(this,X)}set verified(ue){U(this,X,ue)}get partnered(){return L(this,se)}set partnered(ue){U(this,se,ue)}get inviteTitle(){return L(this,K)}set inviteTitle(ue){U(this,K,ue)}get joinBtn(){return L(this,J)}set joinBtn(ue){U(this,J,ue)}get lightTheme(){return L(this,le)}set lightTheme(ue){U(this,le,ue)}render(){return F`<div class="discord-invite-header">${this.inviteTitle}</div>
			<div class="discord-invite-root">
				<div class="discord-invite-info">
					<img class="discord-invite-icon" src=${Le(this.icon)} alt=${Le(this.name)} />
					<div class="discord-invite-info-text-ellipsis">
						<div class="discord-invite-title">
							${De(this.verified&&!this.partnered||!this.verified&&this.partnered,()=>F`<div class="discord-invite-badge">
										${qC({"aria-label":this.partnered?"Discord Partner":"Verified",class:`discord-invite-badge-${this.partnered?"partnered":"verified"}`})}
										<div class="discord-invite-badge-container">
											${this.partnered?FC():XC()}
										</div>
									</div>`)}
							<span class="discord-invite-name">${this.name}</span>
						</div>
						<div class="discord-invite-counts">
							<div class="discord-invite-counts-info">
								<i class="discord-invite-status discord-invite-status-online"></i>
								<span class="discord-invite-count">${this.online.toLocaleString()} Online</span>
							</div>
							<div class="discord-invite-counts-info">
								<i class="discord-invite-status"></i>
								<span class="discord-invite-count">${this.members.toLocaleString()} Members</span>
							</div>
						</div>
					</div>
				</div>
				<a class="discord-invite-join" href=${Le(this.url)} target="_blank" rel="noopener noreferrer">${this.joinBtn}</a>
			</div>`}},re=new WeakMap,j=new WeakMap,G=new WeakMap,ee=new WeakMap,ae=new WeakMap,X=new WeakMap,se=new WeakMap,K=new WeakMap,J=new WeakMap,le=new WeakMap,i=ge,(()=>{const ue=typeof Symbol=="function"&&Symbol.metadata?Object.create(l[Symbol.metadata]??null):void 0;c=[q()],g=[q()],u=[q()],z=[q({type:Number})],x=[q({type:Number})],C=[q({type:Boolean})],H=[q({type:Boolean})],he=[q({attribute:"invite-title"})],T=[q({attribute:"join-btn"})],k=[pt({context:Rt}),q({type:Boolean,reflect:!0,attribute:"light-theme"})],Yi(ge,null,c,{kind:"accessor",name:"icon",static:!1,private:!1,access:{has:ie=>"icon"in ie,get:ie=>ie.icon,set:(ie,Me)=>{ie.icon=Me}},metadata:ue},d,h),Yi(ge,null,g,{kind:"accessor",name:"name",static:!1,private:!1,access:{has:ie=>"name"in ie,get:ie=>ie.name,set:(ie,Me)=>{ie.name=Me}},metadata:ue},p,m),Yi(ge,null,u,{kind:"accessor",name:"url",static:!1,private:!1,access:{has:ie=>"url"in ie,get:ie=>ie.url,set:(ie,Me)=>{ie.url=Me}},metadata:ue},S,w),Yi(ge,null,z,{kind:"accessor",name:"online",static:!1,private:!1,access:{has:ie=>"online"in ie,get:ie=>ie.online,set:(ie,Me)=>{ie.online=Me}},metadata:ue},_,b),Yi(ge,null,x,{kind:"accessor",name:"members",static:!1,private:!1,access:{has:ie=>"members"in ie,get:ie=>ie.members,set:(ie,Me)=>{ie.members=Me}},metadata:ue},O,R),Yi(ge,null,C,{kind:"accessor",name:"verified",static:!1,private:!1,access:{has:ie=>"verified"in ie,get:ie=>ie.verified,set:(ie,Me)=>{ie.verified=Me}},metadata:ue},A,I),Yi(ge,null,H,{kind:"accessor",name:"partnered",static:!1,private:!1,access:{has:ie=>"partnered"in ie,get:ie=>ie.partnered,set:(ie,Me)=>{ie.partnered=Me}},metadata:ue},$,Z),Yi(ge,null,he,{kind:"accessor",name:"inviteTitle",static:!1,private:!1,access:{has:ie=>"inviteTitle"in ie,get:ie=>ie.inviteTitle,set:(ie,Me)=>{ie.inviteTitle=Me}},metadata:ue},xe,V),Yi(ge,null,T,{kind:"accessor",name:"joinBtn",static:!1,private:!1,access:{has:ie=>"joinBtn"in ie,get:ie=>ie.joinBtn,set:(ie,Me)=>{ie.joinBtn=Me}},metadata:ue},W,ze),Yi(ge,null,k,{kind:"accessor",name:"lightTheme",static:!1,private:!1,access:{has:ie=>"lightTheme"in ie,get:ie=>ie.lightTheme,set:(ie,Me)=>{ie.lightTheme=Me}},metadata:ue},D,P),Yi(null,n={value:i},a,{kind:"class",name:i.name,metadata:ue},null,s),i=n.value,ue&&Object.defineProperty(i,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:ue})})(),Be(ge,"styles",nt`
		:host {
			background-color: #2f3136;
			border-radius: 4px;
			padding: 16px;
			max-width: 432px;
			min-width: 160px;
			width: 100%;
			box-sizing: border-box;
			display: flex;
			flex-direction: column;
		}

		:host([light-theme]) {
			background-color: #f2f3f5;
		}

		:host .discord-invite-header {
			font-weight: 700;
			font-size: 12px;
			line-height: 16px;
			margin-bottom: 12px;
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
			text-transform: uppercase;
			color: #b9bbbe;
		}

		:host([light-theme]) .discord-invite-header {
			color: #4f5660;
		}

		:host .discord-invite-root {
			display: flex;
			flex-flow: row wrap;
			gap: 16px;
		}

		:host .discord-invite-icon {
			background-color: #36393f;
			border-radius: 15px;
			margin-right: 16px;
			-webkit-box-flex: 0;
			-ms-flex: 0 0 auto;
			flex: 0 0 auto;
			width: 50px;
			height: 50px;
		}

		:host([light-theme]) .discord-invite-icon {
			background-color: #fff;
		}

		:host .discord-invite-info {
			font-family: 'gg sans', 'Noto Sans', WhitneyMedium, Whitney, 'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif;
			display: flex;
			flex: 1000 0 auto;
			align-items: center;
			max-width: 100%;
			display: flex;
		}

		.discord-invite-info-text-ellipsis {
			overflow: hidden;
			text-overflow: ellipsis;
		}

		:host .discord-invite-title {
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
			margin-bottom: 2px;
			color: white;
			font-size: 16px;
			line-height: 20px;
			font-weight: 700;
			display: flex;
			flex-direction: row;
		}

		:host([light-theme]) .discord-invite-title {
			color: #060607;
		}

		:host .discord-invite-name {
			flex: 1 1 auto;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}

		:host .discord-invite-counts {
			display: flex;
			align-items: center;
			flex-wrap: wrap;
			font-size: 14px;
			font-weight: 600;
			text-overflow: ellipsis;
			overflow: hidden;
			color: #b9bbbe;
			line-height: 16px;
		}

		:host .discord-invite-counts-info {
			text-overflow: ellipsis;
			overflow: hidden;
			display: flex;
			align-items: center;
		}

		:host .discord-invite-status {
			display: block;
			margin-right: 4px;
			width: 8px;
			height: 8px;
			border-radius: 50%;
			background-color: #747f8d;
		}

		:host .discord-invite-status-online {
			background-color: #3ba55d;
		}

		:host .discord-invite-count {
			-webkit-box-flex: 0;
			-ms-flex: 0 1 auto;
			flex: 0 1 auto;
			margin-right: 8px;
			color: #b9bbbe;
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
		}

		:host .discord-invite-join {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 40px;
			padding: 0 20px;
			align-self: center;
			-webkit-box-flex: 0;
			-ms-flex: 0 0 auto;
			flex: 0 0 auto;
			line-height: 20px;
			border-radius: 3px;
			font-size: 14px;
			font-weight: 600;
			color: white !important;
			background-color: #3ba55d;
			-webkit-transition: background-color 0.17s ease;
			transition: background-color 0.17s ease;
			text-decoration: none;
			box-sizing: border-box;
			flex: 1 0 auto;
		}

		:host .discord-invite-join:hover {
			background-color: #2d7d46;
		}

		:host .discord-invite-badge {
			-webkit-box-flex: 0;
			-ms-flex: 0 0 auto;
			flex: 0 0 auto;
			margin-right: 8px;
			width: 16px;
			height: 16px;
			align-self: center;
			position: relative;
		}

		:host .discord-invite-badge-verified {
			color: #3ba55d;
		}

		:host .discord-invite-badge-partnered {
			color: #5865f2;
		}

		:host .discord-invite-badge-container {
			position: absolute;
			top: -0.05px;
			left: 0.05px;
			right: 0;
			bottom: 0;
			display: flex;
			align-items: center;
			justify-content: center;
			pointer-events: none;
			color: white;
		}

		:host([light-theme]) .discord-invite-counts,
		:host([light-theme]) .discord-invite-count {
			color: #4f5660;
		}
	`),ua(i,s),i})();var KC=function(a,n,s,i,l,c){function d(x){if(x!==void 0&&typeof x!="function")throw new TypeError("Function expected");return x}for(var h=i.kind,g=h==="getter"?"get":h==="setter"?"set":"value",p=!n&&a?i.static?a:a.prototype:null,m=n||(p?Object.getOwnPropertyDescriptor(p,i.name):{}),u,S=!1,w=s.length-1;w>=0;w--){var z={};for(var _ in i)z[_]=_==="access"?{}:i[_];for(var _ in i.access)z.access[_]=i.access[_];z.addInitializer=function(x){if(S)throw new TypeError("Cannot add initializers after decoration has completed");c.push(d(x||null))};var b=(0,s[w])(h==="accessor"?{get:m.get,set:m.set}:m[g],z);if(h==="accessor"){if(b===void 0)continue;if(b===null||typeof b!="object")throw new TypeError("Object expected");(u=d(b.get))&&(m.get=u),(u=d(b.set))&&(m.set=u),(u=d(b.init))&&l.unshift(u)}else(u=d(b))&&(h==="field"?l.unshift(u):m[g]=u)}p&&Object.defineProperty(p,i.name,m),S=!0},WC=function(a,n,s){for(var i=arguments.length>2,l=0;l<n.length;l++)s=i?n[l].call(a,s):n[l].call(a);return i?s:void 0};let JC=(()=>{var c;let a=[lt("discord-italic")],n,s=[],i,l=at;return c=class extends l{render(){return F`
			<em>
				<slot></slot>
			</em>
		`}},i=c,(()=>{const h=typeof Symbol=="function"&&Symbol.metadata?Object.create(l[Symbol.metadata]??null):void 0;KC(null,n={value:i},a,{kind:"class",name:i.name,metadata:h},null,s),i=n.value,h&&Object.defineProperty(i,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:h})})(),Be(c,"styles",nt`
		:host > em {
			font-style: italic;
		}
	`),WC(i,s),i})();var eA=function(a,n,s,i,l,c){function d(x){if(x!==void 0&&typeof x!="function")throw new TypeError("Function expected");return x}for(var h=i.kind,g=h==="getter"?"get":h==="setter"?"set":"value",p=!n&&a?i.static?a:a.prototype:null,m=n||(p?Object.getOwnPropertyDescriptor(p,i.name):{}),u,S=!1,w=s.length-1;w>=0;w--){var z={};for(var _ in i)z[_]=_==="access"?{}:i[_];for(var _ in i.access)z.access[_]=i.access[_];z.addInitializer=function(x){if(S)throw new TypeError("Cannot add initializers after decoration has completed");c.push(d(x||null))};var b=(0,s[w])(h==="accessor"?{get:m.get,set:m.set}:m[g],z);if(h==="accessor"){if(b===void 0)continue;if(b===null||typeof b!="object")throw new TypeError("Object expected");(u=d(b.get))&&(m.get=u),(u=d(b.set))&&(m.set=u),(u=d(b.init))&&l.unshift(u)}else(u=d(b))&&(h==="field"?l.unshift(u):m[g]=u)}p&&Object.defineProperty(p,i.name,m),S=!0},tA=function(a,n,s){for(var i=arguments.length>2,l=0;l<n.length;l++)s=i?n[l].call(a,s):n[l].call(a);return i?s:void 0};let aA=(()=>{var c;let a=[lt("discord-list-item")],n,s=[],i,l=at;return c=class extends l{checkParentElement(){var h,g;if(((h=this.parentElement)==null?void 0:h.tagName.toLowerCase())!=="discord-unordered-list"&&((g=this.parentElement)==null?void 0:g.tagName.toLowerCase())!=="discord-ordered-list")throw new Yn("All <discord-list-item> components must be direct children of <discord-unordered-list> or <discord-ordered-list>.")}render(){return this.checkParentElement(),F`<li><slot></slot></li>`}},i=c,(()=>{const h=typeof Symbol=="function"&&Symbol.metadata?Object.create(l[Symbol.metadata]??null):void 0;eA(null,n={value:i},a,{kind:"class",name:i.name,metadata:h},null,s),i=n.value,h&&Object.defineProperty(i,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:h})})(),Be(c,"styles",nt`
		:host > li {
			margin-bottom: 4px;
		}
	`),tA(i,s),i})();function iA(a){return a.startsWith("#")?a.slice(1):a}function nA(a){const n=a.length===3||a.length===4,s=n?`${a.slice(0,1)}${a.slice(0,1)}`:a.slice(0,2),i=n?`${a.slice(1,2)}${a.slice(1,2)}`:a.slice(2,4),l=n?`${a.slice(2,3)}${a.slice(2,3)}`:a.slice(4,6),c=(n?`${a.slice(3,4)}${a.slice(3,4)}`:a.slice(6,8))||"ff";return{r:s,g:i,b:l,a:c}}function dd(a){return Number.parseInt(a,16)}function rA({r:a,g:n,b:s,a:i}){return{r:dd(a),g:dd(n),b:dd(s),a:Number((dd(i)/255).toFixed(2))}}function sA(a){return typeof a=="number"||typeof a=="string"&&Number.isFinite(Number(a))}function lA(a,n){const{r:s,g:i,b:l,a:c}=a,d=sA(n)?n:c;return`rgba(${s}, ${i}, ${l}, ${d})`}function If(a,n){const s=iA(a),i=nA(s),l=rA(i);return lA(l,n)}const oA=Ie`
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		fill="currentColor"
		d="M18.5 23c.88 0 1.7-.25 2.4-.69l1.4 1.4a1 1 0 0 0 1.4-1.42l-1.39-1.4A4.5 4.5 0 1 0 18.5 23Zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
	/>
	<path
		fill="currentColor"
		d="M3 3a1 1 0 0 0 0 2h18a1 1 0 1 0 0-2H3ZM2 8a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1ZM3 11a1 1 0 1 0 0 2h11a1 1 0 1 0 0-2H3ZM2 16a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1ZM3 19a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H3Z"
	/>
`;function cA(a={}){return F`<svg
		${Pe(a)}
		class="discord-mention-icon"
		aria-label="Browse Channels"
		aria-hidden="false"
		role="img"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
	>
		${oA}
	</svg>`}const dA=Ie`
	<path
		fill="currentColor"
		d="M21.487 5.126L12.487 0.126C12.184 -0.042 11.818 -0.042 11.515 0.126L2.51498 5.126C2.19798 5.302 2.00098 5.636 2.00098 5.999C2.00098 6.693 2.11498 22.999 12.001 22.999C21.887 22.999 22.001 6.693 22.001 5.999C22.001 5.636 21.804 5.302 21.487 5.126ZM12.001 5.999C13.382 5.999 14.501 7.118 14.501 8.499C14.501 9.88 13.382 10.999 12.001 10.999C10.62 10.999 9.50098 9.88 9.50098 8.499C9.50098 7.118 10.62 5.999 12.001 5.999ZM8.25098 16C8.25098 13.699 9.69998 12.25 12.001 12.25C14.302 12.25 15.751 13.699 15.751 16H8.25098Z"
	/>
`;function uA(a={}){return F`<svg
		${Pe(a)}
		class="discord-mention-icon"
		aria-label="Customise Community"
		aria-hidden="false"
		role="img"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
	>
		${dA}
	</svg>`}const hA=Ie`
	<path
		d="M11 3a1 1 0 1 1 2 0v2h5.75c.16 0 .3.07.4.2l2.63 3.5a.5.5 0 0 1 0 .6l-2.63 3.5a.5.5 0 0 1-.4.2H13v5h2a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-1c0-1.1.9-2 2-2h2v-5H2.8a.5.5 0 0 1-.44-.72L3.9 9.22a.5.5 0 0 0 0-.44L2.36 5.72A.5.5 0 0 1 2.81 5H11V3Z"
		fill="currentColor"
	/>
`;function fA(a={}){return F`<svg
		${Pe(a)}
		class="discord-mention-icon"
		aria-label="Server Guide"
		aria-hidden="false"
		role="img"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
	>
		${hA}
	</svg>`}var bo=function(a,n,s,i,l,c){function d(x){if(x!==void 0&&typeof x!="function")throw new TypeError("Function expected");return x}for(var h=i.kind,g=h==="getter"?"get":h==="setter"?"set":"value",p=!n&&a?i.static?a:a.prototype:null,m=n||(p?Object.getOwnPropertyDescriptor(p,i.name):{}),u,S=!1,w=s.length-1;w>=0;w--){var z={};for(var _ in i)z[_]=_==="access"?{}:i[_];for(var _ in i.access)z.access[_]=i.access[_];z.addInitializer=function(x){if(S)throw new TypeError("Cannot add initializers after decoration has completed");c.push(d(x||null))};var b=(0,s[w])(h==="accessor"?{get:m.get,set:m.set}:m[g],z);if(h==="accessor"){if(b===void 0)continue;if(b===null||typeof b!="object")throw new TypeError("Object expected");(u=d(b.get))&&(m.get=u),(u=d(b.set))&&(m.set=u),(u=d(b.init))&&l.unshift(u)}else(u=d(b))&&(h==="field"?l.unshift(u):m[g]=u)}p&&Object.defineProperty(p,i.name,m),S=!0},Un=function(a,n,s){for(var i=arguments.length>2,l=0;l<n.length;l++)s=i?n[l].call(a,s):n[l].call(a);return i?s:void 0};let mA=(()=>{var x,O,R,C,A;let a=[lt("discord-mention")],n,s=[],i,l=at,c,d=[],h=[],g,p=[],m=[],u,S=[],w=[],z,_=[],b=[];return x=class extends l{constructor(){super(...arguments);B(this,O,Un(this,d,!1));B(this,R,(Un(this,h),Un(this,p,"user")));B(this,C,(Un(this,m),Un(this,S,void 0)));Be(this,"setHoverColor",(Un(this,w),()=>{this.color&&(this.style.backgroundColor=If(this.color,.3))}));Be(this,"resetHoverColor",()=>{this.color&&(this.style.backgroundColor=If(this.color,.1))});B(this,A,Un(this,_,!1));Un(this,b)}get highlight(){return L(this,O)}set highlight($){U(this,O,$)}get type(){return L(this,R)}set type($){U(this,R,$)}get color(){return L(this,C)}set color($){U(this,C,$)}get lightTheme(){return L(this,A)}set lightTheme($){U(this,A,$)}connectedCallback(){super.connectedCallback(),this.color&&this.type==="role"&&(this.addEventListener("mouseover",this.setHoverColor),this.addEventListener("mouseout",this.resetHoverColor))}disconnectedCallback(){this.removeEventListener("mouseover",this.setHoverColor),this.removeEventListener("mouseout",this.resetHoverColor),super.disconnectedCallback()}willUpdate(){this.color&&(this.style.color=this.color,this.type==="role"&&(this.style.backgroundColor=If(this.color,.1)))}render(){return F`<span class="no-wrap"
				>${o0(this.type,[["channel",()=>z2()],["user",()=>F`@`],["role",()=>F`@`],["voice",()=>E2()],["locked",()=>M2()],["thread",()=>S2()],["forum",()=>w2()],["server-guide",()=>fA()],["channels-and-roles",()=>cA()],["customize-community",()=>uA()],["slash",()=>F`/`]])}</span
			><slot></slot>`}},O=new WeakMap,R=new WeakMap,C=new WeakMap,A=new WeakMap,i=x,(()=>{const $=typeof Symbol=="function"&&Symbol.metadata?Object.create(l[Symbol.metadata]??null):void 0;c=[q({type:Boolean,reflect:!0})],g=[q({reflect:!0})],u=[q({reflect:!0})],z=[pt({context:Rt,subscribe:!0}),q({type:Boolean,reflect:!0,attribute:"light-theme"})],bo(x,null,c,{kind:"accessor",name:"highlight",static:!1,private:!1,access:{has:Z=>"highlight"in Z,get:Z=>Z.highlight,set:(Z,he)=>{Z.highlight=he}},metadata:$},d,h),bo(x,null,g,{kind:"accessor",name:"type",static:!1,private:!1,access:{has:Z=>"type"in Z,get:Z=>Z.type,set:(Z,he)=>{Z.type=he}},metadata:$},p,m),bo(x,null,u,{kind:"accessor",name:"color",static:!1,private:!1,access:{has:Z=>"color"in Z,get:Z=>Z.color,set:(Z,he)=>{Z.color=he}},metadata:$},S,w),bo(x,null,z,{kind:"accessor",name:"lightTheme",static:!1,private:!1,access:{has:Z=>"lightTheme"in Z,get:Z=>Z.lightTheme,set:(Z,he)=>{Z.lightTheme=he}},metadata:$},_,b),bo(null,n={value:i},a,{kind:"class",name:i.name,metadata:$},null,s),i=n.value,$&&Object.defineProperty(i,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:$})})(),Be(x,"styles",nt`
		:host {
			color: #e3e7f8;
			background-color: hsla(235, 85.6%, 64.7%, 0.3);
			font-weight: 500;
			padding: 0 2px;
			border-radius: 3px;
			unicode-bidi: -moz-plaintext;
			unicode-bidi: plaintext;
			-webkit-transition:
				background-color 50ms ease-out,
				color 50ms ease-out;
			transition:
				background-color 50ms ease-out,
				color 50ms ease-out;
			cursor: pointer;
		}

		:host([type='role']) {
			background-color: rgba(#e3e7f8, 0.1);
		}

		:host([type='channel']) {
			position: relative;
		}

		:host([type='voice']),
		:host([type='locked']),
		:host([type='thread']),
		:host([type='forum']) {
			position: relative;
		}

		:host(:hover) {
			color: #fff;
			background-color: hsl(235, 85.6%, 64.7%);
		}

		:host([highlight][type='user']:hover) {
			text-decoration: underline;
			text-underline-offset: 1px;
		}

		:host([light-theme]) {
			color: #5865f2;
			background-color: hsla(235, 85.6%, 64.7%, 0.15);
		}

		:host([light-theme]:hover) {
			color: #ffffff;
			background-color: hsl(235, 85.6%, 64.7%);
		}

		.discord-mention-icon {
			width: 1rem;
			height: 1rem;
			margin-right: 4px;
			vertical-align: middle;
			margin-bottom: 0.2rem;
		}

		.no-wrap {
			white-space: nowrap;
		}
	`),Un(i,s),i})();const pA=Ie`
 	<path 
		fill="currentColor" 
 		d="M15.56 11.77c.2-.1.44.02.44.23a4 4 0 1 1-4-4c.21 0 .33.25.23.44a2.5 2.5 0 0 0 3.32 3.32Z"
 	/>
  	<path 
		fill="currentColor" 
  		fill-rule="evenodd" 
  		d="M22.89 11.7q.105.3 0 .6C22.27 13.9 19.1 21 12 21c-7.11 0-10.27-7.11-10.89-8.7a.83.83 0 0 1 0-.6C1.73 10.1 4.9 3 12 3c7.11 0 10.27 7.11 10.89 8.7m-4.5-3.62A15.1 15.1 0 0 1 20.85 12c-.38.88-1.18 2.47-2.46 3.92C16.87 17.62 14.8 19 12 19s-4.87-1.38-6.39-3.08A15.1 15.1 0 0 1 3.15 12c.38-.88 1.18-2.47 2.46-3.92C7.13 6.38 9.2 5 12 5s4.87 1.38 6.39 3.08" 
  		clip-rule="evenodd"
  	/>
`;function gA(a={}){return F`<svg
		${Pe(a)}
		class="discord-message-ephemeral-icon"
		aria-hidden="false"
		width="16"
		height="16"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
	>
		${pA}
	</svg>`}var Yt=function(a,n,s,i,l,c){function d(x){if(x!==void 0&&typeof x!="function")throw new TypeError("Function expected");return x}for(var h=i.kind,g=h==="getter"?"get":h==="setter"?"set":"value",p=!n&&a?i.static?a:a.prototype:null,m=n||(p?Object.getOwnPropertyDescriptor(p,i.name):{}),u,S=!1,w=s.length-1;w>=0;w--){var z={};for(var _ in i)z[_]=_==="access"?{}:i[_];for(var _ in i.access)z.access[_]=i.access[_];z.addInitializer=function(x){if(S)throw new TypeError("Cannot add initializers after decoration has completed");c.push(d(x||null))};var b=(0,s[w])(h==="accessor"?{get:m.get,set:m.set}:m[g],z);if(h==="accessor"){if(b===void 0)continue;if(b===null||typeof b!="object")throw new TypeError("Object expected");(u=d(b.get))&&(m.get=u),(u=d(b.set))&&(m.set=u),(u=d(b.init))&&l.unshift(u)}else(u=d(b))&&(h==="field"?l.unshift(u):m[g]=u)}p&&Object.defineProperty(p,i.name,m),S=!0},it=function(a,n,s){for(var i=arguments.length>2,l=0;l<n.length;l++)s=i?n[l].call(a,s):n[l].call(a);return i?s:void 0};let vA=(()=>{var tt,ma,ta,_e,me,Re,Mt,Kt,gt,Gt,Ba,He,ve,Xe,wa,wi,za,Ua,Wt,pa,zi,yn,Nr,Dr,Fn;let a=[lt("discord-message")],n,s=[],i,l=at,c,d=[],h=[],g,p=[],m=[],u,S=[],w=[],z,_=[],b=[],x,O=[],R=[],C,A=[],I=[],H,$=[],Z=[],he,xe=[],V=[],T,W=[],ze=[],k,D=[],P=[],ge,re=[],j=[],G,ee=[],ae=[],X,se=[],K=[],J,le=[],Ee=[],$e,ue=[],ie=[],Me,Ke=[],Ge=[],Fe,ke=[],Ce=[],pe,te=[],Oe=[],Qe,je=[],Te=[],We,sa=[],_a=[],dt,Ft=[],xa=[],Qt,ea=[],kt=[],Bt,Ct=[],Ca=[],fa,Ut=[],la=[];return tt=class extends l{constructor(){super(...arguments);B(this,ma,it(this,d,void 0));B(this,ta,(it(this,h),it(this,p,"User")));B(this,_e,(it(this,m),it(this,S,void 0)));B(this,me,(it(this,w),it(this,_,!1)));B(this,Re,(it(this,b),it(this,O,!1)));B(this,Mt,(it(this,R),it(this,A,!1)));B(this,Kt,(it(this,I),it(this,$,!1)));B(this,gt,(it(this,Z),it(this,xe,!1)));B(this,Gt,(it(this,V),it(this,W,!1)));B(this,Ba,(it(this,ze),it(this,D,void 0)));B(this,He,(it(this,P),it(this,re,void 0)));B(this,ve,(it(this,j),it(this,ee,void 0)));B(this,Xe,(it(this,ae),it(this,se,void 0)));B(this,wa,(it(this,K),it(this,le,void 0)));B(this,wi,(it(this,Ee),it(this,ue,!1)));B(this,za,(it(this,ie),it(this,Ke,!1)));B(this,Ua,(it(this,Ge),it(this,ke,new Date)));B(this,Wt,(it(this,Ce),it(this,te,!1)));B(this,pa,(it(this,Oe),it(this,je,!1)));B(this,zi,(it(this,Te),it(this,sa,!1)));B(this,yn,(it(this,_a),it(this,Ft,!1)));B(this,Nr,(it(this,xa),it(this,ea,!1)));B(this,Dr,(it(this,kt),it(this,Ct,!1)));B(this,Fn,(it(this,Ca),it(this,Ut,()=>{})));it(this,la)}get profile(){return L(this,ma)}set profile(Ne){U(this,ma,Ne)}get author(){return L(this,ta)}set author(Ne){U(this,ta,Ne)}get avatar(){return L(this,_e)}set avatar(Ne){U(this,_e,Ne)}get bot(){return L(this,me)}set bot(Ne){U(this,me,Ne)}get server(){return L(this,Re)}set server(Ne){U(this,Re,Ne)}get officialApp(){return L(this,Mt)}set officialApp(Ne){U(this,Mt,Ne)}get verified(){return L(this,Kt)}set verified(Ne){U(this,Kt,Ne)}get op(){return L(this,gt)}set op(Ne){U(this,gt,Ne)}get edited(){return L(this,Gt)}set edited(Ne){U(this,Gt,Ne)}get roleColor(){return L(this,Ba)}set roleColor(Ne){U(this,Ba,Ne)}get roleIcon(){return L(this,He)}set roleIcon(Ne){U(this,He,Ne)}get roleName(){return L(this,ve)}set roleName(Ne){U(this,ve,Ne)}get clanIcon(){return L(this,Xe)}set clanIcon(Ne){U(this,Xe,Ne)}get clanTag(){return L(this,wa)}set clanTag(Ne){U(this,wa,Ne)}get highlight(){return L(this,wi)}set highlight(Ne){U(this,wi,Ne)}get ephemeral(){return L(this,za)}set ephemeral(Ne){U(this,za,Ne)}get timestamp(){return L(this,Ua)}set timestamp(Ne){U(this,Ua,Ne)}get twentyFour(){return L(this,Wt)}set twentyFour(Ne){U(this,Wt,Ne)}get messageBodyOnly(){return L(this,pa)}set messageBodyOnly(Ne){U(this,pa,Ne)}get lightTheme(){return L(this,zi)}set lightTheme(Ne){U(this,zi,Ne)}get compactMode(){return L(this,yn)}set compactMode(Ne){U(this,yn,Ne)}get noBackground(){return L(this,Nr)}set noBackground(Ne){U(this,Nr,Ne)}get hasThread(){return L(this,Dr)}set hasThread(Ne){U(this,Dr,Ne)}get dismissMessageClicked(){return L(this,Fn)}set dismissMessageClicked(Ne){U(this,Fn,Ne)}willUpdate(){this.hasThread=Array.from(this.children).some(Ne=>Ne.tagName.toLowerCase()==="discord-thread"),this.highlight=this.highlight||Array.from(this.children).some(Ne=>Ne.tagName.toLowerCase()==="discord-mention"&&Ne.hasAttribute("highlight")&&(Ne.type==="user"||Ne.type==="role"))}handleSpaceToDismissMessage(Ne){var ce;Ne.code==="Space"&&(Ne.preventDefault(),Ne.stopPropagation(),(ce=this.dismissMessageClicked)==null||ce.call(this))}render(){const Ne={author:this.author,bot:this.bot,officialApp:this.officialApp,verified:this.verified,server:this.server,op:this.op,roleColor:this.roleColor,roleIcon:this.roleIcon,clanIcon:this.clanIcon,clanTag:this.clanTag,roleName:this.roleName},ce=this.profile!==void 0&&Reflect.get(pl,this.profile)||{},Ve={...Ne,...ce,avatar:this.resolveAvatar(ce.avatar??this.avatar)},Si=Do(this.timestamp,this.compactMode,this.twentyFour)??void 0;return F`
			<slot name="reply"></slot>
			<div
				class=${Lt({"discord-message-inner":!0,"discord-message-inner-center":this.messageBodyOnly})}
			>
				${De(this.compactMode&&!this.messageBodyOnly,()=>F`<time datetime="${Le(Si)}" class="discord-message-timestamp">${Si}</time>`,()=>null)}
				${De(this.messageBodyOnly,()=>F`<time
							datetime="${Le(Si)}"
							class=${Lt({"discord-message-timestamp":!0,"discord-message-timestamp-hover":!0,"discord-message-body-only-indent":!this.compactMode})}
						></time>`,()=>null)}
				${De(this.compactMode||this.messageBodyOnly,()=>null,()=>F`<div class="discord-author-avatar">
							<img src="${Le(Ve.avatar)}" alt="${Le(Ve.author)}" />
						</div>`)}

				<div class="discord-message-content">
					${De(this.compactMode||this.messageBodyOnly,()=>null,()=>F`
							<discord-author-info
								author=${Ve.author??""}
								?bot=${Ve.bot??!1}
								?server=${Ve.server??!1}
								?official-app=${Ve.officialApp??!1}
								?verified=${Ve.verified??!1}
								?op=${Ve.op??!1}
								role-color=${Ve.roleColor??""}
								role-icon=${Ve.roleIcon??""}
								role-name=${Ve.roleName??""}
								clan-icon=${Ve.clanIcon??""}
								clan-tag=${Ve.clanTag??""}
							></discord-author-info
							><time datetime="${Le(Si)}" class="discord-message-timestamp">${Si}</time>
						`)}
					<div class="discord-message-body">
						${De(this.compactMode,()=>F`<discord-author-info
									author=${Ve.author??""}
									?bot=${Ve.bot??!1}
									?server=${Ve.server??!1}
									?official-app=${Ve.officialApp??!1}
									?verified=${Ve.verified??!1}
									?op=${Ve.op??!1}
									role-color=${Ve.roleColor??""}
									role-icon=${Ve.roleIcon??""}
									role-name=${Ve.roleName??""}
									clan-icon=${Ve.clanIcon??""}
									clan-tag=${Ve.clanTag??""}
								></discord-author-info>`,()=>null)}<span class="discord-message-markup"><slot></slot></span>
						${De(this.edited,()=>F`<span class="discord-message-edited">(edited)</span>`,()=>null)}
					</div>
					<div class="discord-message-compact-indent">
						<slot name="attachments"></slot>
						<slot name="embeds"></slot>
						<slot name="components"></slot>
						<slot name="reactions"></slot>
						<slot name="thread"></slot>
						${De(this.ephemeral,()=>F`
								<div class="discord-message-ephemeral">
									${gA()} Only you can see this •
									<span
										role="button"
										class="discord-message-ephemeral-link"
										@click=${this.dismissMessageClicked}
										@keydown=${this.handleSpaceToDismissMessage}
										>Dismiss message</span
									>
								</div>
							`,()=>null)}
					</div>
				</div>
			</div>
		`}resolveAvatar(Ne){return Ne===void 0?xi.default:xi[Ne]??Ne??xi.default}},ma=new WeakMap,ta=new WeakMap,_e=new WeakMap,me=new WeakMap,Re=new WeakMap,Mt=new WeakMap,Kt=new WeakMap,gt=new WeakMap,Gt=new WeakMap,Ba=new WeakMap,He=new WeakMap,ve=new WeakMap,Xe=new WeakMap,wa=new WeakMap,wi=new WeakMap,za=new WeakMap,Ua=new WeakMap,Wt=new WeakMap,pa=new WeakMap,zi=new WeakMap,yn=new WeakMap,Nr=new WeakMap,Dr=new WeakMap,Fn=new WeakMap,i=tt,(()=>{const Ne=typeof Symbol=="function"&&Symbol.metadata?Object.create(l[Symbol.metadata]??null):void 0;c=[q()],g=[q()],u=[q()],z=[q({type:Boolean})],x=[q({type:Boolean})],C=[q({type:Boolean,attribute:"official-app"})],H=[q({type:Boolean})],he=[q({type:Boolean})],T=[q({type:Boolean})],k=[q({attribute:"role-color"})],ge=[q({attribute:"role-icon"})],G=[q({attribute:"role-name"})],X=[q({attribute:"clan-icon"})],J=[q({attribute:"clan-tag"})],$e=[q({type:Boolean,reflect:!0})],Me=[q({type:Boolean,reflect:!0})],Fe=[q({type:String,converter:ce=>Do(ce,!1,!1),attribute:!0})],pe=[q({type:Boolean,attribute:"twenty-four"})],Qe=[q({type:Boolean,attribute:"message-body-only"})],We=[pt({context:Rt}),q({type:Boolean,reflect:!0,attribute:"light-theme"})],dt=[pt({context:jr}),q({type:Boolean,reflect:!0,attribute:"compact-mode"})],Qt=[pt({context:T2}),q({type:Boolean,reflect:!0,attribute:"no-background"})],Bt=[q({type:Boolean,reflect:!0,attribute:"has-thread"})],fa=[q({reflect:!1,attribute:"dismiss-message-clicked"})],Yt(tt,null,c,{kind:"accessor",name:"profile",static:!1,private:!1,access:{has:ce=>"profile"in ce,get:ce=>ce.profile,set:(ce,Ve)=>{ce.profile=Ve}},metadata:Ne},d,h),Yt(tt,null,g,{kind:"accessor",name:"author",static:!1,private:!1,access:{has:ce=>"author"in ce,get:ce=>ce.author,set:(ce,Ve)=>{ce.author=Ve}},metadata:Ne},p,m),Yt(tt,null,u,{kind:"accessor",name:"avatar",static:!1,private:!1,access:{has:ce=>"avatar"in ce,get:ce=>ce.avatar,set:(ce,Ve)=>{ce.avatar=Ve}},metadata:Ne},S,w),Yt(tt,null,z,{kind:"accessor",name:"bot",static:!1,private:!1,access:{has:ce=>"bot"in ce,get:ce=>ce.bot,set:(ce,Ve)=>{ce.bot=Ve}},metadata:Ne},_,b),Yt(tt,null,x,{kind:"accessor",name:"server",static:!1,private:!1,access:{has:ce=>"server"in ce,get:ce=>ce.server,set:(ce,Ve)=>{ce.server=Ve}},metadata:Ne},O,R),Yt(tt,null,C,{kind:"accessor",name:"officialApp",static:!1,private:!1,access:{has:ce=>"officialApp"in ce,get:ce=>ce.officialApp,set:(ce,Ve)=>{ce.officialApp=Ve}},metadata:Ne},A,I),Yt(tt,null,H,{kind:"accessor",name:"verified",static:!1,private:!1,access:{has:ce=>"verified"in ce,get:ce=>ce.verified,set:(ce,Ve)=>{ce.verified=Ve}},metadata:Ne},$,Z),Yt(tt,null,he,{kind:"accessor",name:"op",static:!1,private:!1,access:{has:ce=>"op"in ce,get:ce=>ce.op,set:(ce,Ve)=>{ce.op=Ve}},metadata:Ne},xe,V),Yt(tt,null,T,{kind:"accessor",name:"edited",static:!1,private:!1,access:{has:ce=>"edited"in ce,get:ce=>ce.edited,set:(ce,Ve)=>{ce.edited=Ve}},metadata:Ne},W,ze),Yt(tt,null,k,{kind:"accessor",name:"roleColor",static:!1,private:!1,access:{has:ce=>"roleColor"in ce,get:ce=>ce.roleColor,set:(ce,Ve)=>{ce.roleColor=Ve}},metadata:Ne},D,P),Yt(tt,null,ge,{kind:"accessor",name:"roleIcon",static:!1,private:!1,access:{has:ce=>"roleIcon"in ce,get:ce=>ce.roleIcon,set:(ce,Ve)=>{ce.roleIcon=Ve}},metadata:Ne},re,j),Yt(tt,null,G,{kind:"accessor",name:"roleName",static:!1,private:!1,access:{has:ce=>"roleName"in ce,get:ce=>ce.roleName,set:(ce,Ve)=>{ce.roleName=Ve}},metadata:Ne},ee,ae),Yt(tt,null,X,{kind:"accessor",name:"clanIcon",static:!1,private:!1,access:{has:ce=>"clanIcon"in ce,get:ce=>ce.clanIcon,set:(ce,Ve)=>{ce.clanIcon=Ve}},metadata:Ne},se,K),Yt(tt,null,J,{kind:"accessor",name:"clanTag",static:!1,private:!1,access:{has:ce=>"clanTag"in ce,get:ce=>ce.clanTag,set:(ce,Ve)=>{ce.clanTag=Ve}},metadata:Ne},le,Ee),Yt(tt,null,$e,{kind:"accessor",name:"highlight",static:!1,private:!1,access:{has:ce=>"highlight"in ce,get:ce=>ce.highlight,set:(ce,Ve)=>{ce.highlight=Ve}},metadata:Ne},ue,ie),Yt(tt,null,Me,{kind:"accessor",name:"ephemeral",static:!1,private:!1,access:{has:ce=>"ephemeral"in ce,get:ce=>ce.ephemeral,set:(ce,Ve)=>{ce.ephemeral=Ve}},metadata:Ne},Ke,Ge),Yt(tt,null,Fe,{kind:"accessor",name:"timestamp",static:!1,private:!1,access:{has:ce=>"timestamp"in ce,get:ce=>ce.timestamp,set:(ce,Ve)=>{ce.timestamp=Ve}},metadata:Ne},ke,Ce),Yt(tt,null,pe,{kind:"accessor",name:"twentyFour",static:!1,private:!1,access:{has:ce=>"twentyFour"in ce,get:ce=>ce.twentyFour,set:(ce,Ve)=>{ce.twentyFour=Ve}},metadata:Ne},te,Oe),Yt(tt,null,Qe,{kind:"accessor",name:"messageBodyOnly",static:!1,private:!1,access:{has:ce=>"messageBodyOnly"in ce,get:ce=>ce.messageBodyOnly,set:(ce,Ve)=>{ce.messageBodyOnly=Ve}},metadata:Ne},je,Te),Yt(tt,null,We,{kind:"accessor",name:"lightTheme",static:!1,private:!1,access:{has:ce=>"lightTheme"in ce,get:ce=>ce.lightTheme,set:(ce,Ve)=>{ce.lightTheme=Ve}},metadata:Ne},sa,_a),Yt(tt,null,dt,{kind:"accessor",name:"compactMode",static:!1,private:!1,access:{has:ce=>"compactMode"in ce,get:ce=>ce.compactMode,set:(ce,Ve)=>{ce.compactMode=Ve}},metadata:Ne},Ft,xa),Yt(tt,null,Qt,{kind:"accessor",name:"noBackground",static:!1,private:!1,access:{has:ce=>"noBackground"in ce,get:ce=>ce.noBackground,set:(ce,Ve)=>{ce.noBackground=Ve}},metadata:Ne},ea,kt),Yt(tt,null,Bt,{kind:"accessor",name:"hasThread",static:!1,private:!1,access:{has:ce=>"hasThread"in ce,get:ce=>ce.hasThread,set:(ce,Ve)=>{ce.hasThread=Ve}},metadata:Ne},Ct,Ca),Yt(tt,null,fa,{kind:"accessor",name:"dismissMessageClicked",static:!1,private:!1,access:{has:ce=>"dismissMessageClicked"in ce,get:ce=>ce.dismissMessageClicked,set:(ce,Ve)=>{ce.dismissMessageClicked=Ve}},metadata:Ne},Ut,la),Yt(null,n={value:i},a,{kind:"class",name:i.name,metadata:Ne},null,s),i=n.value,Ne&&Object.defineProperty(i,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:Ne})})(),Be(tt,"styles",nt`
		:host {
			color: #dcddde;
			display: flex;
			flex-direction: column;
			font-size: 0.9em;
			font-family: 'gg sans', 'Noto Sans', Whitney, 'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif;

			position: relative;
			word-wrap: break-word;
			-webkit-user-select: text;
			-moz-user-select: text;
			-ms-user-select: text;
			user-select: text;
			-webkit-box-flex: 0;
			-ms-flex: 0 0 auto;
			flex: 0 0 auto;
			min-height: 1.375rem;
			padding-left: 1em;
			padding-right: 48px;
			margin-top: inherit;
			margin-bottom: inherit;
			line-height: 16px;
		}

		.discord-message-inner {
			display: flex;
			position: relative;
			-webkit-box-flex: 0;
			-ms-flex: 0 0 auto;
			flex: 0 0 auto;
		}

		.discord-message-inner-center {
			align-items: center;
		}

		:host([message-body-only]) {
			margin-top: 0px !important;
			padding-top: 0.125rem !important;
			padding-bottom: 0.0625rem !important;
		}

		:host([highlight]),
		:host([ephemeral]) {
			padding-right: 5px;
			position: relative;
		}

		:host([highlight])::before,
		:host([ephemeral])::before {
			content: '';
			position: absolute;
			display: block;
			top: 0;
			left: 0;
			bottom: 0;
			pointer-events: none;
			width: 2px;
		}

		:host([highlight]) {
			background-color: rgba(250, 166, 26, 0.1);
		}

		:host([highlight][light-theme]) {
			background-color: rgba(250, 166, 26, 0.1);
		}

		:host([highlight])::before {
			background-color: #faa61a;
		}

		:host([light-theme][highlight])::before {
			background-color: #af7615;
		}

		:host([ephemeral]) {
			background-color: rgba(88, 101, 242, 0.05);
		}

		:host([ephemeral]:hover) {
			background-color: rgba(88, 101, 242, 0.1);
		}

		:host([ephemeral])::before {
			background-color: #5865f2;
		}

		:host([light-theme]) {
			color: #2e3338;
			border-color: #eceeef;
		}

		.discord-author-avatar {
			margin-right: 16px;
			margin-top: 5px;
			min-width: 40px;
			z-index: 1;
			display: flex;
		}

		.discord-author-avatar img {
			width: 40px;
			height: 40px;
			border-radius: 50%;
			cursor: pointer;
		}

		.discord-message-timestamp {
			color: #72767d;
			font-size: 12px;
			margin-left: 3px;
		}

		.discord-message-body-only-indent {
			width: 56px;
		}

		:host(:hover) .discord-message-timestamp-hover::before {
			content: attr(datetime);
		}

		:host([light-theme]) .discord-message-timestamp {
			color: #747f8d;
		}

		.discord-message-edited {
			color: #72767d;
			font-size: 10px;
		}

		:host([light-theme]) .discord-message-edited {
			color: #99aab5;
		}

		.discord-message-content {
			width: 100%;
			line-height: 160%;
			font-weight: normal;
			padding-top: 2px;
		}

		.discord-message-body {
			font-size: 1rem;
			font-weight: 400;
			word-break: break-word;
			position: relative;
		}

		:host([light-theme]) .discord-message-timestamp,
		:host([compact-mode]) .discord-message:hover .discord-message-timestamp {
			color: #99aab5;
		}

		:host([light-theme][compact-mode]).discord-message-timestamp {
			color: #d1d9de;
		}

		:host([compact-mode]) .discord-message-timestamp {
			display: inline-block;
			width: 3.1rem;
			text-align: right;
			font-size: 0.6875rem;
			line-height: 1.375rem;
			margin-right: 0.375rem;
			margin-left: 0;
			text-indent: 0;
		}

		:host([compact-mode]) .discord-message-body {
			line-height: 1.375rem;
			padding-left: 10px;
			margin-left: -6px;
		}

		:host([compact-mode]) .discord-message-compact-indent {
			padding-left: 10px;
		}

		:host .discord-message-markup {
			font-size: 1rem;
			line-height: 1.375rem;
			word-wrap: break-word;
			user-select: text;
			font-weight: 400;
			display: inline;
		}

		:host(:hover) {
			background-color: hsl(0 calc(1 * 0%) 0.8%/0.03);
		}

		:host([highlight]:hover) {
			background-color: hsl(40 calc(1 * 86.4%) 56.9%/0.08);
		}

		:host([has-thread]):after {
			width: 2rem;
			left: 2.2rem;
			top: 4.8rem;
			border-left: 2px solid #4f545c !important;
			border-bottom: 2px solid #4f545c !important;
			border-bottom-left-radius: 8px !important;
			bottom: 29px;
			content: '';
			position: absolute;
		}

		:host([light-theme][has-Thread]):after {
			border-color: #747f8d !important;
		}

		.discord-message-ephemeral {
			margin-top: 4px;
			font-size: 12px;
			font-weight: 400;
			color: #72767d;
		}

		:host([light-theme]) .discord-message-ephemeral {
			color: #747f8d;
		}

		.discord-message-ephemeral .discord-message-ephemeral-link {
			color: #00aff4;
			font-weight: 500;
			cursor: pointer;
		}

		.discord-message-ephemeral .discord-message-ephemeral-link:hover {
			text-decoration: underline;
		}

		.discord-message-ephemeral .discord-message-ephemeral-icon {
			margin-right: 4px;
			vertical-align: text-bottom;
		}
	`),it(i,s),i})();const bA=Ie`
	<path fill="currentColor" d="M17.3 18.7a1 1 0 0 0 1.4-1.4L13.42 12l5.3-5.3a1 1 0 0 0-1.42-1.4L12 10.58l-5.3-5.3a1 1 0 0 0-1.4 1.42L10.58 12l-5.3 5.3a1 1 0 1 0 1.42 1.4L12 13.42l5.3 5.3Z"></path>
`;function yA(a={}){return F`<svg ${Pe(a)} aria-hidden="false" aria-label="Close" role="img" width="24" height="24" fill="none" viewBox="0 0 24 24">
		${bA}
	</svg>`}const _A=Ie`
	<circle cx="12" cy="12" r="10" fill="transparent"></circle>
	<path fill="color-mix(in oklab, hsl(215 calc(1 * 8.8%) 73.3% / 1) 100%, black 0%)" fill-rule="evenodd" d="M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm1.44-15.94L13.06 14a1.06 1.06 0 0 1-2.12 0l-.38-6.94a1 1 0 0 1 1-1.06h.88a1 1 0 0 1 1 1.06Zm-.19 10.69a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z" clip-rule="evenodd"></path>
`;function xA(a={}){return F`<svg ${Pe(a)} aria-hidden="false" aria-label="Warning" role="img" width="24" height="24" fill="none" viewBox="0 0 24 24">
		${_A}
	</svg>`}var on=function(a,n,s,i,l,c){function d(x){if(x!==void 0&&typeof x!="function")throw new TypeError("Function expected");return x}for(var h=i.kind,g=h==="getter"?"get":h==="setter"?"set":"value",p=!n&&a?i.static?a:a.prototype:null,m=n||(p?Object.getOwnPropertyDescriptor(p,i.name):{}),u,S=!1,w=s.length-1;w>=0;w--){var z={};for(var _ in i)z[_]=_==="access"?{}:i[_];for(var _ in i.access)z.access[_]=i.access[_];z.addInitializer=function(x){if(S)throw new TypeError("Cannot add initializers after decoration has completed");c.push(d(x||null))};var b=(0,s[w])(h==="accessor"?{get:m.get,set:m.set}:m[g],z);if(h==="accessor"){if(b===void 0)continue;if(b===null||typeof b!="object")throw new TypeError("Object expected");(u=d(b.get))&&(m.get=u),(u=d(b.set))&&(m.set=u),(u=d(b.init))&&l.unshift(u)}else(u=d(b))&&(h==="field"?l.unshift(u):m[g]=u)}p&&Object.defineProperty(p,i.name,m),S=!0},Ta=function(a,n,s){for(var i=arguments.length>2,l=0;l<n.length;l++)s=i?n[l].call(a,s):n[l].call(a);return i?s:void 0};let wA=(()=>{var k,D,P,ge,re,j,G,ee,ae,X;let a=[lt("discord-modal")],n,s=[],i,l=at,c,d=[],h=[],g,p=[],m=[],u,S=[],w=[],z,_=[],b=[],x,O=[],R=[],C,A=[],I=[],H,$=[],Z=[],he,xe=[],V=[],T,W=[],ze=[];return k=class extends l{constructor(){super(...arguments);B(this,D,Ta(this,d,void 0));B(this,P,(Ta(this,h),Ta(this,p,"User")));B(this,ge,(Ta(this,m),Ta(this,S,void 0)));B(this,re,(Ta(this,w),Ta(this,_,void 0)));B(this,j,(Ta(this,b),Ta(this,O,void 0)));B(this,G,(Ta(this,R),Ta(this,A,void 0)));B(this,ee,(Ta(this,I),Ta(this,$,void 0)));B(this,ae,(Ta(this,Z),Ta(this,xe,!1)));B(this,X,(Ta(this,V),Ta(this,W,void 0)));Be(this,"dialogRef",(Ta(this,ze),cl()))}get profile(){return L(this,D)}set profile(J){U(this,D,J)}get author(){return L(this,P)}set author(J){U(this,P,J)}get avatar(){return L(this,ge)}set avatar(J){U(this,ge,J)}get modalId(){return L(this,re)}set modalId(J){U(this,re,J)}get modalTitle(){return L(this,j)}set modalTitle(J){U(this,j,J)}get submitForm(){return L(this,G)}set submitForm(J){U(this,G,J)}get closeForm(){return L(this,ee)}set closeForm(J){U(this,ee,J)}get lightTheme(){return L(this,ae)}set lightTheme(J){U(this,ae,J)}get originalBodyOverflow(){return L(this,X)}set originalBodyOverflow(J){U(this,X,J)}handleClickCloseIcon(){this.dialogRef.value&&this.dialogRef.value.close()}handleFormSubmit(J){var Ee,$e,ue,ie,Me;J.preventDefault(),J.stopPropagation();const le=(($e=(Ee=this.shadowRoot)==null?void 0:Ee.querySelector("slot"))==null?void 0:$e.assignedElements())??[];for(const Ke of le)if(Ke instanceof mm){const Ge=Ke.shadowRoot,Fe=(Ge==null?void 0:Ge.querySelector("input"))??(Ge==null?void 0:Ge.querySelector("textarea"));if(Fe!=null&&Fe.attributes.getNamedItem("required")&&!Fe.value){const ke=Ge==null?void 0:Ge.querySelector("div.discord-text-input-message-needed-input");ke instanceof HTMLDivElement&&!ke.style.display&&(ke.style.display="flex",globalThis.setTimeout(()=>{ke.style.opacity="1"},1));return}if(Fe instanceof HTMLTextAreaElement&&Fe.value.length<Number((ue=Fe.attributes.getNamedItem("minlength"))==null?void 0:ue.value)&&Fe.value.length>0||Fe instanceof HTMLTextAreaElement&&Fe.value.length<Number((ie=Fe.attributes.getNamedItem("minlength"))==null?void 0:ie.value)&&(Fe!=null&&Fe.attributes.getNamedItem("required"))){const ke=Ge==null?void 0:Ge.querySelector("div.discord-text-input-message-needed-min-length");ke instanceof HTMLDivElement&&!ke.style.display&&(ke.style.display="flex",Ke.hasWarning=!0,globalThis.setTimeout(()=>{ke.style.opacity="1"},1));return}}(Me=this.submitForm)==null||Me.call(this),this.handleClickCloseIcon()}onCloseDialog(){var Ee,$e,ue,ie;globalThis.document.body.style.overflow=this.originalBodyOverflow??"scroll";const J=(Ee=this.shadowRoot)==null?void 0:Ee.querySelector("div.discord-modal-box");J instanceof HTMLDivElement&&(J.style.display="none");const le=((ue=($e=this.shadowRoot)==null?void 0:$e.querySelector("slot"))==null?void 0:ue.assignedElements())??[];for(const Me of le)if(Me instanceof mm){Me.resetState();const Ke=Me.shadowRoot,Ge=Ke==null?void 0:Ke.querySelector("div.discord-text-input-message-needed-input"),Fe=Ke==null?void 0:Ke.querySelector("div.discord-text-input-message-needed-min-length");Ge instanceof HTMLDivElement&&Ge.style.display&&(Ge.style.display="",Ge.style.opacity="0"),Fe instanceof HTMLDivElement&&Fe.style.display&&(Fe.style.display="",Fe.style.opacity="0")}(ie=this.closeForm)==null||ie.call(this)}render(){const J={author:this.author},le=this.profile!==void 0&&Reflect.get(pl,this.profile)||{},Ee={...J,...le,avatar:this.resolveAvatar(le.avatar??this.avatar)};return F`
			<dialog
				${un(this.dialogRef)}
				id="${Le(this.modalId)}"
				class=${Lt({"discord-modal":!0,"discord-modal-light-theme":this.lightTheme})}
				@close=${this.onCloseDialog}
			>
				<div class="discord-modal-box">
					<form @submit=${this.handleFormSubmit}>
						<div aria-labelledby="discord-modal-title" role="dialog" tabindex="-1" aria-modal="true">
							<div class=${Lt({"discord-modal-root":!0,"discord-modal-root-light-theme":this.lightTheme})}>
								<div class="discord-modal-header-container">
									<div class="discord-modal-avatar">
										<img src="${Le(Ee.avatar)}" alt="${Le(Ee.author)}" />
									</div>
									<div
										id="discord-modal-title"
										class=${Lt({"discord-modal-title":!0,"discord-modal-title-light-theme":this.lightTheme})}
									>
										${this.modalTitle}
									</div>
									<button
										aria-label="Close"
										@click=${this.handleClickCloseIcon}
										type="button"
										class=${Lt({"discord-modal-close-button":!0,"discord-modal-close-button-light-theme":this.lightTheme})}
									>
										<div class="discord-modal-close-button-content">${yA()}</div>
									</button>
								</div>
								<div
									class=${Lt({"discord-modal-content-container":!0,"discord-modal-content-container-light-theme":this.lightTheme})}
								>
									<div class="discord-modal-warning-container">
										<div class="discord-modal-warning-icon">
											${xA({class:"discord-modal-warning-icon-svg"+(this.lightTheme?" discord-modal-warning-icon-svg-light-theme":"")})}
										</div>
										<div
											class=${Lt({"discord-modal-warning":!0,"discord-modal-warning-light-theme":this.lightTheme})}
										>
											This form will be submitted to <strong class="discord-modal-warning-author">${Ee.author}</strong>. Do
											not share passwords or other sensitive information.
										</div>
									</div>
									<div
										aria-hidden="true"
										style="position: absolute; pointer-events: none; min-height: 0px; min-width: 1px; flex: 0 0 auto; height: 0px;"
									></div>
								</div>
								<div class="discord-modal-slot-input-text">
									<slot></slot>
								</div>
								<div
									class=${Lt({"discord-modal-actions-container":!0,"discord-modal-actions-container-light-theme":this.lightTheme})}
								>
									<button type="submit" class="discord-modal-button discord-modal-button-submit">
										<div class="discord-modal-button-content">Submit</div>
									</button>
									<button
										type="button"
										class=${Lt({"discord-modal-button":!0,"discord-modal-button-cancel":!0,"discord-modal-button-cancel-light-theme":this.lightTheme})}
										@click=${this.handleClickCloseIcon}
									>
										<div
											class=${Lt({"discord-modal-button-content":!0,"discord-modal-button-content-light-theme":this.lightTheme})}
										>
											Cancel
										</div>
									</button>
								</div>
							</div>
						</div>
					</form>
				</div>
			</dialog>
		`}resolveAvatar(J){return J===void 0?xi.default:xi[J]??J??xi.default}},D=new WeakMap,P=new WeakMap,ge=new WeakMap,re=new WeakMap,j=new WeakMap,G=new WeakMap,ee=new WeakMap,ae=new WeakMap,X=new WeakMap,i=k,(()=>{const J=typeof Symbol=="function"&&Symbol.metadata?Object.create(l[Symbol.metadata]??null):void 0;c=[q()],g=[q()],u=[q()],z=[q({reflect:!0,attribute:"modal-id"})],x=[q({reflect:!0,attribute:"modal-title"})],C=[q({reflect:!1,noAccessor:!0,attribute:!1})],H=[q({reflect:!1,noAccessor:!0,attribute:!1})],he=[pt({context:Rt,subscribe:!0}),q({type:Boolean,reflect:!0,attribute:"light-theme"})],T=[ai()],on(k,null,c,{kind:"accessor",name:"profile",static:!1,private:!1,access:{has:le=>"profile"in le,get:le=>le.profile,set:(le,Ee)=>{le.profile=Ee}},metadata:J},d,h),on(k,null,g,{kind:"accessor",name:"author",static:!1,private:!1,access:{has:le=>"author"in le,get:le=>le.author,set:(le,Ee)=>{le.author=Ee}},metadata:J},p,m),on(k,null,u,{kind:"accessor",name:"avatar",static:!1,private:!1,access:{has:le=>"avatar"in le,get:le=>le.avatar,set:(le,Ee)=>{le.avatar=Ee}},metadata:J},S,w),on(k,null,z,{kind:"accessor",name:"modalId",static:!1,private:!1,access:{has:le=>"modalId"in le,get:le=>le.modalId,set:(le,Ee)=>{le.modalId=Ee}},metadata:J},_,b),on(k,null,x,{kind:"accessor",name:"modalTitle",static:!1,private:!1,access:{has:le=>"modalTitle"in le,get:le=>le.modalTitle,set:(le,Ee)=>{le.modalTitle=Ee}},metadata:J},O,R),on(k,null,C,{kind:"accessor",name:"submitForm",static:!1,private:!1,access:{has:le=>"submitForm"in le,get:le=>le.submitForm,set:(le,Ee)=>{le.submitForm=Ee}},metadata:J},A,I),on(k,null,H,{kind:"accessor",name:"closeForm",static:!1,private:!1,access:{has:le=>"closeForm"in le,get:le=>le.closeForm,set:(le,Ee)=>{le.closeForm=Ee}},metadata:J},$,Z),on(k,null,he,{kind:"accessor",name:"lightTheme",static:!1,private:!1,access:{has:le=>"lightTheme"in le,get:le=>le.lightTheme,set:(le,Ee)=>{le.lightTheme=Ee}},metadata:J},xe,V),on(k,null,T,{kind:"accessor",name:"originalBodyOverflow",static:!1,private:!1,access:{has:le=>"originalBodyOverflow"in le,get:le=>le.originalBodyOverflow,set:(le,Ee)=>{le.originalBodyOverflow=Ee}},metadata:J},W,ze),on(null,n={value:i},a,{kind:"class",name:i.name,metadata:J},null,s),i=n.value,J&&Object.defineProperty(i,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:J})})(),Be(k,"styles",nt`
		@keyframes modal-pop {
			0% {
				opacity: 0;
			}
		}

		*,
		:before,
		:after {
			border-width: 0 !important;
		}

		/* This does positioning, sizing, and transition */
		.discord-modal {
			pointer-events: none;
			position: fixed;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			margin: 0;
			display: grid;
			height: 100%;
			width: 100%;
			max-height: none;
			max-width: none;
			justify-items: center;
			padding: 0;
			opacity: 0;
			overscroll-behavior: contain;
			z-index: 1002;
			background-color: transparent;
			color: inherit;
			transition-duration: 0.2s;
			transition-timing-function: ease;
			transition-property: all;
			overflow: hidden;
		}

		.discord-modal-open,
		.discord-modal:target,
		.discord-modal-toggle:checked + .discord-modal,
		.discord-modal[open] {
			pointer-events: auto;
			visibility: visible;
			opacity: 1;
		}

		:where(.discord-modal) {
			align-items: center;
		}

		.discord-modal-box {
			display: none;
			flex-direction: column;
			min-height: 0;
			max-width: 100%;
			background-color: oklab(0.321088 -0.000220731 -0.00934622);
			transform: translate(0, 0) rotate(0) skew(0) skewY(0) scaleX(0.9) scaleY(0.9);
			transition-property: all;
			transition-timing-function: ease;
			transition-duration: 0.2s;
			box-shadow: none;
			overflow-y: visible;
			border-radius: 4px;
		}

		.discord-modal-box:focus {
			outline: none;
			border: none;
		}

		.discord-modal-open .discord-modal-box,
		.discord-modal-toggle:checked + .discord-modal .discord-modal-box,
		.discord-modal:target .discord-modal-box,
		.discord-modal[open] .discord-modal-box {
			transform: translate(0, 0px) rotate(0) skew(0) skewY(0) scaleX(1) scaleY(1);
		}

		.discord-modal:not(dialog:not(.discord-modal-open)),
		.discord-modal::backdrop {
			background-color: rgba(0, 0, 0, 0.7);
			animation: modal-pop 0.2s ease-out;
		}

		.discord-modal-light-theme:not(dialog:not(.discord-modal-open)),
		.discord-modal-light-theme::backdrop {
			background-color: rgba(0, 0, 0, 0.54);
			backdrop-filter: blur(0px);
		}

		.discord-modal-root {
			background-color: oklab(0.321088 -0.000220731 -0.00934622);
			border-radius: 4px;
			display: flex;
			flex-direction: column;
			margin: 0 auto;
			pointer-events: all;
			position: relative;
			box-shadow:
				rgba(30, 31, 34, 0.6) 0px 0px 0px 1px,
				rgba(0, 0, 0, 0.2) 0px 2px 10px 0px;
			opacity: 1;
			transform: scale(1);
			width: 440px;
			max-height: 720px;
			min-height: 200px;
		}

		.discord-modal-content-container::-webkit-scrollbar {
			width: 5px;
			background-color: transparent;
		}

		.discord-modal-content-container::-webkit-scrollbar-track {
			background-color: transparent;
		}

		.discord-modal-content-container::-webkit-scrollbar-thumb {
			border-radius: 10px;
			background-color: rgba(0, 0, 0, 0.5);
		}

		.discord-modal-root-light-theme {
			box-shadow:
				0 0 0 1px hsl(210 calc(1 * 9.3%) 78.8% / 0.3),
				0 2px 10px 0 hsl(0 calc(1 * 0%) 0% / 0.1);
			background-color: color-mix(in oklab, hsl(0 calc(1 * 0%) 100% / 1) 100%, black 0%);
		}

		.discord-modal-header-container {
			flex: 0 0 auto;
			border-radius: 4px 4px 0 0;
			transition: box-shadow 0.1s ease-out;
			word-wrap: break-word;
			position: relative;
			padding: 16px;
			z-index: 1;
			overflow: hidden;
			flex-wrap: nowrap;
			justify-content: flex-start;
			align-items: center;
			flex-direction: row;
			display: flex;
		}

		.discord-modal-content-container {
			overflow: hidden auto;
			padding-right: 8px;
			position: relative;
			z-index: 0;
			border-radius: 5px 5px 0 0;
			padding-left: 16px;
			position: relative;
			z-index: 0;
			border-radius: 5px 5px 0 0;
			padding-left: 16px;
		}

		.discord-modal-actions-container {
			flex: 0 0 auto;
			box-shadow: inset 0 1px 0 hsl(220 calc(1 * 6.5%) 18% / 0.6);
			border-radius: 0 0 5px 5px;
			background-color: color-mix(in oklab, hsl(220 calc(1 * 6.5%) 18% / 1) 100%, black 0%);
			position: relative;
			padding: 16px;
			z-index: 1;
			overflow-x: hidden;
			flex-wrap: nowrap;
			justify-content: flex-start;
			align-items: center;
			flex-direction: row-reverse;
			display: flex;
		}

		.discord-modal-actions-container-light-theme {
			box-shadow: inset 0 1px 0 hsl(0 calc(1 * 0%) 97.6% / 0.6);
			background-color: color-mix(in oklab, hsl(220 calc(1 * 13%) 95.5% / 1) 100%, black 0%);
		}

		.discord-modal-avatar {
			margin-right: 0.5em;
			position: relative;
			min-width: 24px;
			width: 24px;
			height: 24px;
			border-radius: 50%;
		}

		.discord-modal-avatar img {
			width: 24px;
			height: 24px;
			border-radius: 50%;
		}

		.discord-modal-title {
			font-size: 24px;
			line-height: 30px;
			color: color-mix(in oklab, hsl(220 calc(1 * 13%) 95.5% / 1) 100%, black 0%);
		}

		.discord-modal-title-light-theme {
			color: color-mix(in oklab, hsl(240 calc(1 * 7.7%) 2.5% / 1) 100%, black 0%);
		}

		.discord-modal-close-button {
			position: absolute;
			top: 16px;
			right: 16px;
			height: 26px;
			padding: 4px;
			transition: opacity.2s ease-in-out;
			opacity: 0.5;
			cursor: pointer;
			border-radius: 3px;
			color: color-mix(in oklab, hsl(215 calc(1 * 8.8%) 73.3% / 1) 100%, black 0%);
			box-sizing: content-box;
			width: auto;
			background: transparent;
			border: 0;
			margin: 0;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 14px;
			font-weight: 500;
			line-height: 16px;
			-moz-user-select: none;
			user-select: none;
			outline: 0;
			font-family: 'gg sans', 'Noto Sans', Whitney, 'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif;
			text-rendering: optimizeLegibility;
		}

		.discord-modal-close-button-light-theme {
			color: color-mix(in oklab, hsl(228 calc(1 * 6%) 32.5% / 1) 100%, black 0%);
		}

		.discord-modal-close-button:hover {
			opacity: 1;
			color: oklab(0.899401 -0.00192499 -0.00481987);
		}

		.discord-modal-close-button-light-theme:hover {
			color: color-mix(in oklab, hsl(223 calc(1 * 6.7%) 20.6% / 1) 100%, black 0%);
		}

		.discord-modal-close-button-content {
			background-image: linear-gradient(
				to top,
				transparent,
				transparent 1px,
				transparent 1px,
				transparent calc(1px + 1px),
				transparent calc(1px + 1px)
			);
		}

		.discord-modal-warning-container {
			margin-bottom: 8px;
			background: color-mix(in oklab, hsl(40 calc(1 * 86.4%) 56.9% / 0.1) 100%, hsl(0 0% 0% / 0.1) 0%);
			border: 1px solid color-mix(in oklab, hsl(40 calc(1 * 86.4%) 56.9% / 1) 100%, black 0%);
			color: color-mix(in oklab, hsl(0 calc(1 * 0%) 100% / 1) 100%, black 0%);
			display: flex;
			border-radius: 4px;
			font-weight: 500;
			padding: 8px;
			width: 100%;
			box-sizing: border-box;
		}

		.discord-modal-warning-container-light-theme {
			background: color-mix(in oklab, hsl(38 calc(1 * 78.6%) 38.4% / 0.1) 100%, hsl(0 0% 0% / 0.1) 0%);
			border: color-mix(in oklab, hsl(38 calc(1 * 78.6%) 38.4% / 1) 100%, black 0%);
			color: color-mix(in oklab, hsl(0 calc(1 * 0%) 0% / 1) 100%, black 0%);
		}

		.discord-modal-warning-icon {
			display: flex;
		}

		.discord-modal-warning {
			color: color-mix(in oklab, hsl(210 calc(1 * 9.1%) 87.1% / 1) 100%, black 0%);
			margin-left: 10px;
			flex: 1;
			align-self: center;
			font-family: 'gg sans', 'Noto Sans', Whitney, 'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif;
			font-size: 14px;
			line-height: 1.2857142857142858;
			font-weight: 500;
		}

		.discord-modal-warning-light-theme {
			color: color-mix(in oklab, hsl(223 calc(1 * 6.7%) 20.6% / 1) 100%, black 0%);
		}

		.discord-modal-warning-icon-svg {
			fill: color-mix(in oklab, hsl(215 calc(1 * 8.8%) 73.3% / 1) 100%, black 0%);
			color: color-mix(in oklab, hsl(40 calc(1 * 86.4%) 56.9% / 1) 100%, black 0%);
			width: 24px;
			height: 24px;
			flex-shrink: 0;
		}

		.discord-modal-warning-icon-svg-light-theme {
			color: color-mix(in oklab, hsl(38 calc(1 * 78.6%) 38.4% / 1) 100%, black 0%);
			fill: none;
		}

		.discord-modal-warning-icon-svg-light-theme > path {
			fill: color-mix(in oklab, hsl(228 calc(1 * 6%) 32.5% / 1) 100%, black 0%);
		}

		.discord-modal-warning-author {
			font-weight: 600;
		}

		.discord-modal-button {
			align-items: center;
			background: none;
			border-radius: 3px;
			border: none;
			box-sizing: border-box;
			color: hsl(0 calc(1 * 0%) 100% / 1);
			display: flex;
			font-size: 14px;
			font-weight: 500;
			height: 38px;
			justify-content: center;
			line-height: 16px;
			min-height: 38px;
			min-width: 96px;
			padding: 2px 16px;
			position: relative;
			-moz-user-select: none;
			user-select: none;
			width: auto;
			cursor: pointer;
		}

		.discord-modal-button-submit {
			background-color: hsl(235 calc(1 * 85.6%) 64.7% / 1);
			transition:
				background-color 170ms ease,
				color 170ms ease;
		}

		.discord-modal-button-submit:hover {
			background-color: hsl(235 calc(1 * 51.4%) 52.4% / 1);
		}

		.discord-modal-button-submit:active {
			background-color: hsl(235 calc(1 * 46.7%) 44.1% / 1);
		}

		.discord-modal-button-cancel-light-theme {
			color: hsl(223 calc(1 * 5.8%) 52.9% / 1);
		}

		.discord-modal-button-cancel:hover > .discord-modal-button-content {
			--button--underline-color: hsl(0 calc(1 * 0%) 100% / 1);
		}

		.discord-modal-button-cancel-light-theme:hover > .discord-modal-button-content-light-theme {
			--button--underline-color: hsl(223 calc(1 * 5.8%) 52.9% / 1);
		}

		.discord-modal-button-content {
			--button--underline-color: transparent;
			margin: 0 auto;
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
			background-image: linear-gradient(
				to top,
				transparent,
				transparent 1px,
				var(--button--underline-color) 1px,
				var(--button--underline-color) calc(1px + 1px),
				transparent calc(1px + 1px)
			);
		}

		.discord-modal-slot-input-text {
			padding-right: 8px;
			padding-left: 20px;
			position: sticky;
			z-index: 3;
		}
	`),Ta(i,s),i})();var Pf=function(a,n,s,i,l,c){function d(x){if(x!==void 0&&typeof x!="function")throw new TypeError("Function expected");return x}for(var h=i.kind,g=h==="getter"?"get":h==="setter"?"set":"value",p=!n&&a?i.static?a:a.prototype:null,m=n||(p?Object.getOwnPropertyDescriptor(p,i.name):{}),u,S=!1,w=s.length-1;w>=0;w--){var z={};for(var _ in i)z[_]=_==="access"?{}:i[_];for(var _ in i.access)z.access[_]=i.access[_];z.addInitializer=function(x){if(S)throw new TypeError("Cannot add initializers after decoration has completed");c.push(d(x||null))};var b=(0,s[w])(h==="accessor"?{get:m.get,set:m.set}:m[g],z);if(h==="accessor"){if(b===void 0)continue;if(b===null||typeof b!="object")throw new TypeError("Object expected");(u=d(b.get))&&(m.get=u),(u=d(b.set))&&(m.set=u),(u=d(b.init))&&l.unshift(u)}else(u=d(b))&&(h==="field"?l.unshift(u):m[g]=u)}p&&Object.defineProperty(p,i.name,m),S=!0},yo=function(a,n,s){for(var i=arguments.length>2,l=0;l<n.length;l++)s=i?n[l].call(a,s):n[l].call(a);return i?s:void 0};let zA=(()=>{var u,S,w;let a=[lt("discord-ordered-list")],n,s=[],i,l=at,c,d=[],h=[],g,p=[],m=[];return u=class extends l{constructor(){super(...arguments);B(this,S,yo(this,d,1));B(this,w,(yo(this,h),yo(this,p,1)));yo(this,m)}get start(){return L(this,S)}set start(b){U(this,S,b)}get startLength(){return L(this,w)}set startLength(b){U(this,w,b)}checkChildren(){if(!Array.from(this.children).every(x=>{const O=x.tagName.toLowerCase();return O==="discord-list-item"||O==="discord-unordered-list"||O==="discord-ordered-list"}))throw new Yn("All direct children inside of a <discord-ordered-list> components must be one of <discord-unordered-list>, <discord-ordered-list>, or <discord-list-item>.")}willUpdate(){const b=Array.from(this.children).filter(O=>O.tagName.toLowerCase()==="discord-list-item").length,x=this.start+b;this.startLength=x.toString().length}render(){return this.checkChildren(),F`<ol start=${this.start} style="--totalCharacters:${this.startLength}">
			<slot></slot>
		</ol>`}},S=new WeakMap,w=new WeakMap,i=u,(()=>{const b=typeof Symbol=="function"&&Symbol.metadata?Object.create(l[Symbol.metadata]??null):void 0;c=[q({type:Number,reflect:!0})],g=[ai()],Pf(u,null,c,{kind:"accessor",name:"start",static:!1,private:!1,access:{has:x=>"start"in x,get:x=>x.start,set:(x,O)=>{x.start=O}},metadata:b},d,h),Pf(u,null,g,{kind:"accessor",name:"startLength",static:!1,private:!1,access:{has:x=>"startLength"in x,get:x=>x.startLength,set:(x,O)=>{x.startLength=O}},metadata:b},p,m),Pf(null,n={value:i},a,{kind:"class",name:i.name,metadata:b},null,s),i=n.value,b&&Object.defineProperty(i,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:b})})(),Be(u,"styles",nt`
		:host > ol {
			list-style-image: initial;
			list-style-type: decimal;
			list-style-position: outside;
			margin-bottom: 0px;
			margin-top: 4px;
			margin-right: 0px;
			margin-left: calc(0.4em + 0.6em * var(--totalCharacters));
			padding: 0px;
		}
	`),yo(i,s),i})();var In=function(a,n,s,i,l,c){function d(x){if(x!==void 0&&typeof x!="function")throw new TypeError("Function expected");return x}for(var h=i.kind,g=h==="getter"?"get":h==="setter"?"set":"value",p=!n&&a?i.static?a:a.prototype:null,m=n||(p?Object.getOwnPropertyDescriptor(p,i.name):{}),u,S=!1,w=s.length-1;w>=0;w--){var z={};for(var _ in i)z[_]=_==="access"?{}:i[_];for(var _ in i.access)z.access[_]=i.access[_];z.addInitializer=function(x){if(S)throw new TypeError("Cannot add initializers after decoration has completed");c.push(d(x||null))};var b=(0,s[w])(h==="accessor"?{get:m.get,set:m.set}:m[g],z);if(h==="accessor"){if(b===void 0)continue;if(b===null||typeof b!="object")throw new TypeError("Object expected");(u=d(b.get))&&(m.get=u),(u=d(b.set))&&(m.set=u),(u=d(b.init))&&l.unshift(u)}else(u=d(b))&&(h==="field"?l.unshift(u):m[g]=u)}p&&Object.defineProperty(p,i.name,m),S=!0},La=function(a,n,s){for(var i=arguments.length>2,l=0;l<n.length;l++)s=i?n[l].call(a,s):n[l].call(a);return i?s:void 0};const L2="multiple-answers",B2="ended",U2="voted",I2="show-votes";let SA=(()=>{var T,W,ze,k,D,P,ge,re,j,G,ee;let a=[lt("discord-poll")],n,s=[],i,l=at,c,d=[],h=[],g,p=[],m=[],u,S=[],w=[],z,_=[],b=[],x,O=[],R=[],C,A=[],I=[],H,$=[],Z=[],he,xe=[],V=[];return T=class extends l{constructor(){super(...arguments);B(this,W,La(this,d,void 0));B(this,ze,(La(this,h),La(this,p,"24h")));B(this,k,(La(this,m),La(this,S,!1)));B(this,D,(La(this,w),La(this,_,!1)));B(this,P,(La(this,b),La(this,O,!1)));B(this,ge,(La(this,R),La(this,A,!1)));B(this,re,(La(this,I),La(this,$,!1)));B(this,j,(La(this,Z),La(this,xe,!1)));B(this,G,(La(this,V),!1));B(this,ee,0)}get question(){return L(this,W)}set question(se){U(this,W,se)}get timeEnd(){return L(this,ze)}set timeEnd(se){U(this,ze,se)}get pollEnded(){return L(this,k)}set pollEnded(se){U(this,k,se)}get multipleAnswers(){return L(this,D)}set multipleAnswers(se){U(this,D,se)}get pollVoted(){return L(this,P)}set pollVoted(se){U(this,P,se)}get showResults(){return L(this,ge)}set showResults(se){U(this,ge,se)}get compactMode(){return L(this,re)}set compactMode(se){U(this,re,se)}get lightTheme(){return L(this,j)}set lightTheme(se){U(this,j,se)}get selected(){return L(this,G)}set selected(se){U(this,G,se)}get totVotes(){return L(this,ee)}set totVotes(se){U(this,ee,se)}connectedCallback(){var K,J,le;super.connectedCallback();const se=(K=this.parentElement)==null?void 0:K.querySelectorAll("discord-poll-answer");if(se)for(let Ee=0;Ee<(se==null?void 0:se.length);Ee++)se[Ee].attributes.getNamedItem("selected")&&(this.selected=!0),this.totVotes+=(J=se[Ee].attributes.getNamedItem("votes"))!=null&&J.nodeValue?Number((le=se[Ee].attributes.getNamedItem("votes"))==null?void 0:le.nodeValue):0}render(){const se=this.multipleAnswers?"Select one or more answers":"Select one answer";return F`<div>
			<h4 class="discord-poll-question">${this.question}</h4>
			<div class="discord-poll-select">${se}</div>
			<div class="discord-poll-answers">
				<slot></slot>
			</div>
			<div class="discord-poll-footer">
				<div class="discord-poll-footer-votes-time">
					<span class="discord-poll-footer-hover">${this.totVotes} votes</span>
					<div class="discord-poll-footer-time">${this.pollEnded?"Poll closed":`${this.timeEnd} left`}</div>
				</div>
				${De(!this.pollEnded&&!this.pollVoted&&!this.showResults,()=>F`<div class="discord-poll-result-vote">
							<div class="discord-poll-footer-hover discord-poll-color-show-results">Show results</div>
							<button
								type="button"
								class="${Lt({"discord-poll-button-vote":!0,"discord-poll-button-vote-disabled":!this.selected})}"
							>
								<div>Vote</div>
							</button>
						</div>`)}
				${De(!this.pollEnded&&this.pollVoted||this.showResults,()=>F`
						<button type="button" class="discord-poll-button-remove-vote">
							<div>${!this.pollEnded&&this.pollVoted?"Remove vote":"Go back to vote"}</div>
						</button>
					`)}
			</div>
		</div> `}},W=new WeakMap,ze=new WeakMap,k=new WeakMap,D=new WeakMap,P=new WeakMap,ge=new WeakMap,re=new WeakMap,j=new WeakMap,G=new WeakMap,ee=new WeakMap,i=T,(()=>{const se=typeof Symbol=="function"&&Symbol.metadata?Object.create(l[Symbol.metadata]??null):void 0;c=[q({type:String,attribute:"question",reflect:!0})],g=[q({type:String,attribute:"time-end",reflect:!0})],u=[ls({context:B2}),q({type:Boolean,attribute:"ended",reflect:!0})],z=[ls({context:L2}),q({type:Boolean,reflect:!0,attribute:"multiple-answers"})],x=[ls({context:U2}),q({type:Boolean,reflect:!0,attribute:"voted"})],C=[ls({context:I2}),q({type:Boolean,reflect:!0,attribute:"show-results"})],H=[pt({context:jr}),q({type:Boolean,reflect:!0,attribute:"compact-mode"})],he=[pt({context:Rt}),q({type:Boolean,reflect:!0,attribute:"light-theme"})],In(T,null,c,{kind:"accessor",name:"question",static:!1,private:!1,access:{has:K=>"question"in K,get:K=>K.question,set:(K,J)=>{K.question=J}},metadata:se},d,h),In(T,null,g,{kind:"accessor",name:"timeEnd",static:!1,private:!1,access:{has:K=>"timeEnd"in K,get:K=>K.timeEnd,set:(K,J)=>{K.timeEnd=J}},metadata:se},p,m),In(T,null,u,{kind:"accessor",name:"pollEnded",static:!1,private:!1,access:{has:K=>"pollEnded"in K,get:K=>K.pollEnded,set:(K,J)=>{K.pollEnded=J}},metadata:se},S,w),In(T,null,z,{kind:"accessor",name:"multipleAnswers",static:!1,private:!1,access:{has:K=>"multipleAnswers"in K,get:K=>K.multipleAnswers,set:(K,J)=>{K.multipleAnswers=J}},metadata:se},_,b),In(T,null,x,{kind:"accessor",name:"pollVoted",static:!1,private:!1,access:{has:K=>"pollVoted"in K,get:K=>K.pollVoted,set:(K,J)=>{K.pollVoted=J}},metadata:se},O,R),In(T,null,C,{kind:"accessor",name:"showResults",static:!1,private:!1,access:{has:K=>"showResults"in K,get:K=>K.showResults,set:(K,J)=>{K.showResults=J}},metadata:se},A,I),In(T,null,H,{kind:"accessor",name:"compactMode",static:!1,private:!1,access:{has:K=>"compactMode"in K,get:K=>K.compactMode,set:(K,J)=>{K.compactMode=J}},metadata:se},$,Z),In(T,null,he,{kind:"accessor",name:"lightTheme",static:!1,private:!1,access:{has:K=>"lightTheme"in K,get:K=>K.lightTheme,set:(K,J)=>{K.lightTheme=J}},metadata:se},xe,V),In(null,n={value:i},a,{kind:"class",name:i.name,metadata:se},null,s),i=n.value,se&&Object.defineProperty(i,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:se})})(),Be(T,"styles",nt`
		:host {
			display: flex;
			flex-direction: column;
			background-color: color-mix(in oklab, hsl(220 calc(1 * 6.5%) 18% / 1) 100%, black 0%);
			border-radius: 8px;
			padding: 16px;
			width: 100%;
			max-width: 472px;
			min-width: 302px;
			box-sizing: border-box;
			position: relative;
			overflow: hidden;
		}

		:host([light-theme]) {
			border: 1px solid color-mix(in oklab, hsl(0 calc(1 * 0%) 0% / 0.08) 100%, hsl(0 0% 0% / 0.08) 0%);
			background-color: color-mix(in oklab, hsl(0 calc(1 * 0%) 100% / 1) 100%, black 0%) !important;
		}

		:host([light-theme]) * {
			color: black;
		}

		.discord-poll-question {
			color: color-mix(in oklab, hsl(210 calc(1 * 9.1%) 87.1% / 1) 100%, black 0%);
			margin: 0;
			font-size: 1rem;
			word-break: break-word;
			line-height: 1.25;
			font-weight: 500;
		}

		.discord-poll-select {
			font-size: 0.875rem;
			grid-area: prompt;
			color: color-mix(in oklab, hsl(214 calc(1 * 8.1%) 61.2% / 1) 100%, black 0%) !important;
		}

		.discord-poll-answers {
			display: grid;
			grid-template-columns: 1fr;
			grid-auto-rows: 1fr;
			grid-gap: 8px;
			gap: 8px;
			margin: 8px 0 16px;
		}

		.discord-poll-footer {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		.discord-poll-footer-votes-time {
			display: flex;
			align-items: center;
			color: color-mix(in oklab, hsl(214 calc(1 * 8.1%) 61.2% / 1) 100%, black 0%);
			font-size: 0.875rem;
			line-height: 1.2857142857142858;
			font-weight: 400;
		}

		.discord-poll-footer-time::before {
			content: '∙';
			margin: 0px 0.5rem;
			font-weight: 800;
		}

		.discord-poll-footer-time {
			display: flex;
			align-items: center;
		}

		.discord-poll-footer-hover:hover {
			color: #fff;
			text-decoration: underline;
			cursor: pointer;
		}

		:host([light-theme]) .discord-poll-footer-hover:hover {
			color: black;
			text-decoration: underline;
			cursor: pointer;
		}

		:host([light-theme]) .discord-poll-color-show-results {
			color: black !important;
		}

		.discord-poll-color-show-results {
			color: #fff !important;
			font-size: 0.875rem;
			font-weight: 600;
		}

		.discord-poll-result-vote {
			display: flex;
			align-items: center;
			gap: 15px;
		}

		:host .discord-poll-button-vote {
			cursor: pointer;
			background-color: hsl(235 calc(1 * 85.6%) 64.7% / 1) !important;
			color: hsl(0 calc(1 * 0%) 100% / 1) !important;
			padding: 9px 16px;
			border: none;
			border-radius: 3px;
			font-weight: 600;
		}

		:host .discord-poll-button-remove-vote {
			cursor: pointer;
			background-color: color-mix(in oklab, hsl(228 calc(1 * 6.7%) 14.7% / 1) 100%, black 0%) !important;
			color: color-mix(in oklab, hsl(210 calc(1 * 9.1%) 87.1% / 1) 100%, black 0%) !important;
			padding: 9px 16px;
			border: none;
			border-radius: 3px;
			font-weight: 600;
		}

		:host([light-theme]) button * {
			color: white !important;
		}

		:host .discord-poll-button-vote-disabled {
			cursor: no-drop;
			opacity: 0.5;
		}
	`),La(i,s),i})();var na=function(a,n,s){for(var i=arguments.length>2,l=0;l<n.length;l++)s=i?n[l].call(a,s):n[l].call(a);return i?s:void 0},Hi=function(a,n,s,i,l,c){function d(x){if(x!==void 0&&typeof x!="function")throw new TypeError("Function expected");return x}for(var h=i.kind,g=h==="getter"?"get":h==="setter"?"set":"value",p=!n&&a?i.static?a:a.prototype:null,m=n||(p?Object.getOwnPropertyDescriptor(p,i.name):{}),u,S=!1,w=s.length-1;w>=0;w--){var z={};for(var _ in i)z[_]=_==="access"?{}:i[_];for(var _ in i.access)z.access[_]=i.access[_];z.addInitializer=function(x){if(S)throw new TypeError("Cannot add initializers after decoration has completed");c.push(d(x||null))};var b=(0,s[w])(h==="accessor"?{get:m.get,set:m.set}:m[g],z);if(h==="accessor"){if(b===void 0)continue;if(b===null||typeof b!="object")throw new TypeError("Object expected");(u=d(b.get))&&(m.get=u),(u=d(b.set))&&(m.set=u),(u=d(b.init))&&l.unshift(u)}else(u=d(b))&&(h==="field"?l.unshift(u):m[g]=u)}p&&Object.defineProperty(p,i.name,m),S=!0};let MA=(()=>{var j,G,ee,ae,X,se,K,J,le,Ee,$e,ue,ie,Me,Ke;let a=[lt("discord-poll-answer")],n,s=[],i,l=at,c=[],d,h=[],g=[],p,m=[],u=[],S,w=[],z=[],_,b=[],x=[],O,R=[],C=[],A,I=[],H=[],$,Z=[],he=[],xe,V=[],T=[],W,ze=[],k=[],D,P=[],ge=[],re;return j=class extends l{constructor(){super(...arguments);B(this,G,(na(this,c),na(this,h,void 0)));B(this,ee,(na(this,g),na(this,m,void 0)));B(this,ae,(na(this,u),na(this,w,0)));B(this,X,(na(this,z),na(this,b,!1)));B(this,se,(na(this,x),na(this,R,!1)));B(this,K,(na(this,C),na(this,I,!1)));B(this,J,(na(this,H),na(this,Z,!1)));B(this,le,(na(this,he),na(this,V,!1)));B(this,Ee,(na(this,T),na(this,ze,!1)));B(this,$e,(na(this,k),na(this,P,!1)));B(this,ue,(na(this,ge),0));B(this,ie);B(this,Me,[]);B(this,Ke,[])}get emoji(){return L(this,G)}set emoji(ke){U(this,G,ke)}get answer(){return L(this,ee)}set answer(ke){U(this,ee,ke)}get votes(){return L(this,ae)}set votes(ke){U(this,ae,ke)}get selected(){return L(this,X)}set selected(ke){U(this,X,ke)}get compactMode(){return L(this,se)}set compactMode(ke){U(this,se,ke)}get multipleAnswers(){return L(this,K)}set multipleAnswers(ke){U(this,K,ke)}get pollEnded(){return L(this,J)}set pollEnded(ke){U(this,J,ke)}get pollVoted(){return L(this,le)}set pollVoted(ke){U(this,le,ke)}get showResult(){return L(this,Ee)}set showResult(ke){U(this,Ee,ke)}get lightTheme(){return L(this,$e)}set lightTheme(ke){U(this,$e,ke)}get totalVotesPoll(){return L(this,ue)}set totalVotesPoll(ke){U(this,ue,ke)}get percentageVoted(){return L(this,ie)}set percentageVoted(ke){U(this,ie,ke)}get arrayAnswers(){return L(this,Me)}set arrayAnswers(ke){U(this,Me,ke)}get winners(){return L(this,Ke)}set winners(ke){U(this,Ke,ke)}connectedCallback(){var Ce,pe,te,Oe,Qe;super.connectedCallback();const ke=(Ce=this.parentElement)==null?void 0:Ce.getElementsByTagName("discord-poll-answer");if(ke)for(let je=0;je<(ke==null?void 0:ke.length);je++){const Te=ke[je].attributes.getNamedItem("votes")?Number((pe=ke[je].attributes.getNamedItem("votes"))==null?void 0:pe.nodeValue):0;this.arrayAnswers.push({answer:(te=ke[je].attributes.getNamedItem("answer"))==null?void 0:te.nodeValue,value:Te}),this.arrayAnswers=this.arrayAnswers.toSorted((We,sa)=>sa.value-We.value),this.totalVotesPoll+=Te}for(let je=0;je<((Oe=this.arrayAnswers)==null?void 0:Oe.length);je++)if(this.winners.includes(this.arrayAnswers[je].answer)||this.winners.push(this.arrayAnswers[je].answer),this.arrayAnswers[je+1])if(this.arrayAnswers[je].value===this.arrayAnswers[je+1].value)this.winners.includes(this.arrayAnswers[je+1].answer)||this.winners.push(this.arrayAnswers[je+1].answer);else break;if(((Qe=this.parentElement)==null?void 0:Qe.getAttribute("multiple-answers"))!==""){let je=0;if(ke)for(const Te of ke)Te.selected&&je++;if(je>1)throw new Yn("<discord-poll> single vote was selected more than 1 answer")}this.percentageVoted=this.votes/this.totalVotesPoll*100}render(){return this.percentageVoted=this.percentageVoted.toPrecision(3).split(".")[1]==="0"?Number(this.percentageVoted.toPrecision(3).split(".")[0]):Number(this.percentageVoted.toPrecision(3)),F`
			<label>
				<div class="${Lt({"discord-answer-container":!this.pollVoted&&!this.pollEnded&&!this.showResult})}">
					<div
						class="${Lt({"discord-answer":!0,"discord-answer-selected":this.selected&&!this.pollEnded&&!this.showResult,"discord-answer-selected-ended":this.pollEnded&&this.winners.includes(this.answer)})}"
					>
						<div
							class=${Lt({"discord-answer-backdround-color":!0,"discord-background-color-selected":!this.pollEnded&&this.selected&&this.pollVoted,"discord-background-color-winner":this.pollEnded&&this.winners.includes(this.answer),"discord-background-color-default":this.pollEnded&&!this.winners.includes(this.answer)||!this.pollEnded&&!this.selected&&this.pollVoted||this.showResult})}
							style="width:${this.percentageVoted}%;"
						></div>
						<div class="discord-answer-flex">
							${De(this.emoji,()=>F`<img class="discord-answer-emoji" src="${this.emoji}" alt="emoji" />`)}
							<div class="discord-awnswer-title">${this.answer}</div>
						</div>
						<div class="discord-answer-flex">
							${De(this.pollVoted||this.pollEnded||this.showResult,()=>F`<h5 class="discord-answer-no-margin discord-quantity-votes">
										${this.votes} ${this.votes>1||this.votes===0?"votes":"vote"}
									</h5>`)}
							${De(this.pollVoted||this.pollEnded||this.showResult,()=>F`<h4 class="discord-answer-no-margin discord-percentage-votes">${this.percentageVoted}%</h4>`)}
							${De(this.selected&&!this.showResult,()=>De(this.multipleAnswers,()=>De(this.pollEnded,()=>De(this.winners.includes(this.answer),()=>F`<div class="discord-checkbox-div-answer-selected-ended-winner">
																${yi({style:"width:24px;height:24px;"})}
															</div>`,()=>F`<div class="discord-checkbox-div-answer-selected-ended-no-winner">
																${yi({style:"width:24px;height:24px;"})}
															</div>`),()=>De(!this.pollVoted,()=>F`<div class="discord-checkbox-div-multiple-answer-selected">
																${yi({style:"width:24px;height:24px;"})}
															</div>`,()=>F`<div class="discord-checkbox-div-answer-selected-voted">
																${yi({style:"width:24px;height:24px;"})}
															</div>`)),()=>De(this.pollEnded,()=>F`<div class="discord-checkbox-div-answer-selected-ended-winner">
														${yi({style:"width:24px;height:24px;"})}
													</div>`,()=>De(!this.pollVoted,()=>F`
															<div class="discord-checkbox-div-answer">
																<div class="discord-checkbox-div-answer-selected"></div>
															</div>
														`,()=>F`<div class="discord-checkbox-div-answer-selected-voted">
																${yi({style:"width:24px;height:24px;"})}
															</div>`))),()=>De(!this.pollEnded&&!this.pollVoted&&!this.showResult,()=>F`<div
												class="${Lt({"discord-checkbox-div-multiple-answer":this.multipleAnswers,"discord-checkbox-div-answer":!this.multipleAnswers})}"
											></div>`))}
						</div>
					</div>
					<span class="discord-answer-hidden"><input type="checkbox" @click=${()=>this._onClick()} /></span>
				</div>
			</label>
		`}_onClick(){var te;if(this.pollEnded||this.pollVoted)return;const ke=this.parentElement,Ce=(te=ke==null?void 0:ke.shadowRoot)==null?void 0:te.querySelector("button.discord-poll-button-vote"),pe=ke==null?void 0:ke.getElementsByTagName("discord-poll-answer");if(this.selected){if(this.selected=!1,Ce){if((ke==null?void 0:ke.getAttribute("multiple-answers"))===""){let Oe=0;if(pe)for(const Qe of pe)Qe.selected&&Oe++;if(Oe>0){Ce.className="discord-poll-button-vote";return}}Ce.className="discord-poll-button-vote discord-poll-button-vote-disabled"}return}if((ke==null?void 0:ke.getAttribute("multiple-answers"))!==""&&pe)for(const Oe of pe)Oe.selected=!1;Ce&&(Ce.className="discord-poll-button-vote"),this.selected=!0}},G=new WeakMap,ee=new WeakMap,ae=new WeakMap,X=new WeakMap,se=new WeakMap,K=new WeakMap,J=new WeakMap,le=new WeakMap,Ee=new WeakMap,$e=new WeakMap,ue=new WeakMap,ie=new WeakMap,Me=new WeakMap,Ke=new WeakMap,i=j,(()=>{const ke=typeof Symbol=="function"&&Symbol.metadata?Object.create(l[Symbol.metadata]??null):void 0;d=[q({type:String,attribute:"emoji",reflect:!0})],p=[q({type:String,attribute:"answer",reflect:!0})],S=[q({type:Number,attribute:"votes",reflect:!0})],_=[q({type:Boolean,attribute:"selected",reflect:!0})],O=[pt({context:jr})],A=[pt({context:L2})],$=[pt({context:B2})],xe=[pt({context:U2})],W=[pt({context:I2})],D=[pt({context:Rt}),q({type:Boolean,reflect:!0,attribute:"light-theme"})],re=[m2({once:!1,capture:!0,passive:!0})],Hi(j,null,d,{kind:"accessor",name:"emoji",static:!1,private:!1,access:{has:Ce=>"emoji"in Ce,get:Ce=>Ce.emoji,set:(Ce,pe)=>{Ce.emoji=pe}},metadata:ke},h,g),Hi(j,null,p,{kind:"accessor",name:"answer",static:!1,private:!1,access:{has:Ce=>"answer"in Ce,get:Ce=>Ce.answer,set:(Ce,pe)=>{Ce.answer=pe}},metadata:ke},m,u),Hi(j,null,S,{kind:"accessor",name:"votes",static:!1,private:!1,access:{has:Ce=>"votes"in Ce,get:Ce=>Ce.votes,set:(Ce,pe)=>{Ce.votes=pe}},metadata:ke},w,z),Hi(j,null,_,{kind:"accessor",name:"selected",static:!1,private:!1,access:{has:Ce=>"selected"in Ce,get:Ce=>Ce.selected,set:(Ce,pe)=>{Ce.selected=pe}},metadata:ke},b,x),Hi(j,null,O,{kind:"accessor",name:"compactMode",static:!1,private:!1,access:{has:Ce=>"compactMode"in Ce,get:Ce=>Ce.compactMode,set:(Ce,pe)=>{Ce.compactMode=pe}},metadata:ke},R,C),Hi(j,null,A,{kind:"accessor",name:"multipleAnswers",static:!1,private:!1,access:{has:Ce=>"multipleAnswers"in Ce,get:Ce=>Ce.multipleAnswers,set:(Ce,pe)=>{Ce.multipleAnswers=pe}},metadata:ke},I,H),Hi(j,null,$,{kind:"accessor",name:"pollEnded",static:!1,private:!1,access:{has:Ce=>"pollEnded"in Ce,get:Ce=>Ce.pollEnded,set:(Ce,pe)=>{Ce.pollEnded=pe}},metadata:ke},Z,he),Hi(j,null,xe,{kind:"accessor",name:"pollVoted",static:!1,private:!1,access:{has:Ce=>"pollVoted"in Ce,get:Ce=>Ce.pollVoted,set:(Ce,pe)=>{Ce.pollVoted=pe}},metadata:ke},V,T),Hi(j,null,W,{kind:"accessor",name:"showResult",static:!1,private:!1,access:{has:Ce=>"showResult"in Ce,get:Ce=>Ce.showResult,set:(Ce,pe)=>{Ce.showResult=pe}},metadata:ke},ze,k),Hi(j,null,D,{kind:"accessor",name:"lightTheme",static:!1,private:!1,access:{has:Ce=>"lightTheme"in Ce,get:Ce=>Ce.lightTheme,set:(Ce,pe)=>{Ce.lightTheme=pe}},metadata:ke},P,ge),Hi(j,null,re,{kind:"method",name:"_onClick",static:!1,private:!1,access:{has:Ce=>"_onClick"in Ce,get:Ce=>Ce._onClick},metadata:ke},null,c),Hi(null,n={value:i},a,{kind:"class",name:i.name,metadata:ke},null,s),i=n.value,ke&&Object.defineProperty(i,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:ke})})(),Be(j,"styles",nt`
		.discord-answer-container {
			display: flex;
			cursor: pointer;
		}

		.discord-answer-emoji {
			width: 24px;
			height: 24px;
			margin-right: 2px;
			border-radius: 3px;
		}

		.discord-checkbox-div-multiple-answer {
			flex-shrink: 0;
			width: 20px;
			height: 20px;
			box-sizing: border-box;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 3px;
			background-color: transparent;
			border: 2px solid color-mix(in oklab, hsl(210 calc(1 * 9.1%) 87.1% / 1) 100%, black 0%);
		}

		.discord-checkbox-div-multiple-answer-selected {
			width: 20px;
			height: 20px;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 3px;
			background-color: hsl(235 calc(1 * 85.6%) 64.7% / 1);
		}

		.discord-checkbox-div-answer-selected-ended-winner {
			width: 24px;
			height: 24px;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 99px;
			background-color: seagreen;
		}

		.discord-checkbox-div-answer-selected-ended-no-winner {
			width: 24px;
			height: 24px;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 99px;
			background-color: white;
			color: black !important;
		}

		.discord-checkbox-div-answer-selected-voted {
			width: 24px;
			height: 24px;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 99px;
			background-color: hsl(235 calc(1 * 85.6%) 64.7% / 1);
		}

		.discord-checkbox-div-answer {
			flex-shrink: 0;
			width: 20px;
			height: 20px;
			box-sizing: border-box;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 99px;
			background-color: transparent;
			border: 2px solid color-mix(in oklab, hsl(210 calc(1 * 9.1%) 87.1% / 1) 100%, black 0%);
		}

		.discord-checkbox-div-answer-selected {
			margin: 2px;
			width: 10px;
			height: 10px;
			box-sizing: border-box;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 99px;
			border: 2px solid transparent;
			background-color: color-mix(in oklab, hsl(235 calc(1 * 86.1%) 77.5% / 1) 100%, black 0%);
		}

		.discord-answer-hidden {
			display: none;
		}

		.discord-answer-flex {
			display: flex;
			align-items: center;
			gap: 8px;
		}

		.discord-answer-selected {
			outline: 1px solid color-mix(in oklab, hsl(235 calc(1 * 86.1%) 77.5% / 1) 100%, black 0%) !important;
		}

		.discord-answer-selected-ended {
			outline: 1px solid hsl(145 calc(1 * 65%) 39.2% / 1) !important;
		}

		.discord-answer {
			position: relative;
			display: flex;
			align-items: center;
			justify-content: space-between;
			width: 100%;
			min-height: 50px;
			padding: 8px 16px;
			box-sizing: border-box;
			background-color: color-mix(in oklab, hsl(228 calc(1 * 6%) 32.5% / 0.3) 100%, hsl(0 0% 0% / 0.3) 0%);
			border-radius: 8px;
			color: color-mix(in oklab, hsl(210 calc(1 * 9.1%) 87.1% / 1) 100%, black 0%);
			word-break: break-word;
			overflow: hidden;
			outline: 1px solid transparent;
			z-index: 1;
			transition:
				background-color 170ms ease,
				outline-color 170ms ease;
		}

		:host([light-theme]) .discord-answer {
			background-color: color-mix(in oklab, hsl(223 calc(1 * 5.8%) 52.9% / 0.08) 100%, hsl(0 0% 0% / 0.08) 0%) !important;
		}

		:host([light-theme]) .discord-background-color-default {
			background-color: color-mix(in oklab, hsl(223 calc(1 * 5.8%) 52.9% / 0.2) 100%, hsl(0 0% 0% / 0.2) 0%) !important;
		}

		:host([light-theme]) .discord-awnswer-title,
		:host([light-theme]) .discord-quantity-votes,
		:host([light-theme]) .discord-percentage-votes {
			color: color-mix(in oklab, hsl(223 calc(1 * 6.7%) 20.6% / 1) 100%, black 0%) !important;
		}

		:host([light-theme]) .discord-checkbox-div-answer,
		:host([light-theme]) .discord-checkbox-div-multiple-answer {
			border-color: color-mix(in oklab, hsl(223 calc(1 * 6.7%) 20.6% / 1) 100%, black 0%) !important;
		}

		:host([light-theme]) .discord-checkbox-div-answer-selected-ended-no-winner {
			background-color: color-mix(in oklab, hsl(223 calc(1 * 6.7%) 20.6% / 1) 100%, black 0%);
			color: white !important;
		}

		.discord-answer-no-margin {
			margin: 0;
		}

		.discord-quantity-votes:hover {
			cursor: pointer;
			text-decoration: underline;
		}

		.discord-answer-backdround-color {
			content: '';
			position: absolute;
			height: 100%;
			left: 0;
			z-index: -1;
		}

		.discord-background-color-winner {
			background-color: color-mix(in oklab, hsl(145 calc(1 * 65%) 39.2% / 0.2) 100%, hsl(0 0% 0% / 0.2) 0%);
		}

		.discord-background-color-default {
			background-color: color-mix(in oklab, hsl(228 calc(1 * 6%) 32.5% / 0.48) 100%, hsl(0 0% 0% / 0.48) 0%);
		}

		.discord-background-color-selected {
			background-color: color-mix(in oklab, hsl(235 calc(1 * 85.6%) 64.7% / 0.2) 100%, hsl(0 0% 0% / 0.2) 0%);
		}
	`),na(i,s),i})();var S3=function(a,n,s,i,l,c){function d(x){if(x!==void 0&&typeof x!="function")throw new TypeError("Function expected");return x}for(var h=i.kind,g=h==="getter"?"get":h==="setter"?"set":"value",p=!n&&a?i.static?a:a.prototype:null,m=n||(p?Object.getOwnPropertyDescriptor(p,i.name):{}),u,S=!1,w=s.length-1;w>=0;w--){var z={};for(var _ in i)z[_]=_==="access"?{}:i[_];for(var _ in i.access)z.access[_]=i.access[_];z.addInitializer=function(x){if(S)throw new TypeError("Cannot add initializers after decoration has completed");c.push(d(x||null))};var b=(0,s[w])(h==="accessor"?{get:m.get,set:m.set}:m[g],z);if(h==="accessor"){if(b===void 0)continue;if(b===null||typeof b!="object")throw new TypeError("Object expected");(u=d(b.get))&&(m.get=u),(u=d(b.set))&&(m.set=u),(u=d(b.init))&&l.unshift(u)}else(u=d(b))&&(h==="field"?l.unshift(u):m[g]=u)}p&&Object.defineProperty(p,i.name,m),S=!0},Zf=function(a,n,s){for(var i=arguments.length>2,l=0;l<n.length;l++)s=i?n[l].call(a,s):n[l].call(a);return i?s:void 0};let EA=(()=>{var g,p;let a=[lt("discord-pre")],n,s=[],i,l=at,c,d=[],h=[];return g=class extends l{constructor(){super(...arguments);B(this,p,Zf(this,d,!1));Zf(this,h)}get embed(){return L(this,p)}set embed(S){U(this,p,S)}render(){return F`<pre><slot></slot
		></pre>`}},p=new WeakMap,i=g,(()=>{const S=typeof Symbol=="function"&&Symbol.metadata?Object.create(l[Symbol.metadata]??null):void 0;c=[q({type:Boolean,reflect:!0})],S3(g,null,c,{kind:"accessor",name:"embed",static:!1,private:!1,access:{has:w=>"embed"in w,get:w=>w.embed,set:(w,z)=>{w.embed=z}},metadata:S},d,h),S3(null,n={value:i},a,{kind:"class",name:i.name,metadata:S},null,s),i=n.value,S&&Object.defineProperty(i,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:S})})(),Be(g,"styles",nt`
		:host pre {
			border-radius: 4px;
			padding: 0;
			font-size: 0.75rem;
			line-height: 1rem;
			margin-top: 6px;
			white-space: pre-wrap;
			background-clip: border-box;
			width: 90%;
			border: none;
		}

		:host([embed]) pre {
			margin: 0;
			margin-top: 6px;
			width: 100%;
		}
	`),Zf(i,s),i})();var M3=function(a,n,s,i,l,c){function d(x){if(x!==void 0&&typeof x!="function")throw new TypeError("Function expected");return x}for(var h=i.kind,g=h==="getter"?"get":h==="setter"?"set":"value",p=!n&&a?i.static?a:a.prototype:null,m=n||(p?Object.getOwnPropertyDescriptor(p,i.name):{}),u,S=!1,w=s.length-1;w>=0;w--){var z={};for(var _ in i)z[_]=_==="access"?{}:i[_];for(var _ in i.access)z.access[_]=i.access[_];z.addInitializer=function(x){if(S)throw new TypeError("Cannot add initializers after decoration has completed");c.push(d(x||null))};var b=(0,s[w])(h==="accessor"?{get:m.get,set:m.set}:m[g],z);if(h==="accessor"){if(b===void 0)continue;if(b===null||typeof b!="object")throw new TypeError("Object expected");(u=d(b.get))&&(m.get=u),(u=d(b.set))&&(m.set=u),(u=d(b.init))&&l.unshift(u)}else(u=d(b))&&(h==="field"?l.unshift(u):m[g]=u)}p&&Object.defineProperty(p,i.name,m),S=!0},qf=function(a,n,s){for(var i=arguments.length>2,l=0;l<n.length;l++)s=i?n[l].call(a,s):n[l].call(a);return i?s:void 0};let TA=(()=>{var g,p;let a=[lt("discord-quote")],n,s=[],i,l=at,c,d=[],h=[];return g=class extends l{constructor(){super(...arguments);B(this,p,qf(this,d,!1));qf(this,h)}get lightTheme(){return L(this,p)}set lightTheme(S){U(this,p,S)}render(){return F`
			<div class="discord-quote-divider"></div>
			<!-- display: inline -->
			<blockquote><slot></slot></blockquote>
		`}},p=new WeakMap,i=g,(()=>{const S=typeof Symbol=="function"&&Symbol.metadata?Object.create(l[Symbol.metadata]??null):void 0;c=[pt({context:Rt,subscribe:!0}),q({type:Boolean,reflect:!0,attribute:"light-theme"})],M3(g,null,c,{kind:"accessor",name:"lightTheme",static:!1,private:!1,access:{has:w=>"lightTheme"in w,get:w=>w.lightTheme,set:(w,z)=>{w.lightTheme=z}},metadata:S},d,h),M3(null,n={value:i},a,{kind:"class",name:i.name,metadata:S},null,s),i=n.value,S&&Object.defineProperty(i,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:S})})(),Be(g,"styles",nt`
		:host {
			display: flex;
		}

		.discord-quote-divider {
			background-color: #4f545c;
			border-radius: 4px;
			font-size: 0.9em;
			font-style: normal;
			font-weight: 400;
			margin: 0;
			padding: 0;
			width: 4px;
		}

		:host([light-theme]) .discord-quote-divider {
			background-color: #c4c9ce;
		}

		blockquote {
			margin-block-end: unset;
			margin-block-start: unset;
			margin-inline-end: unset;
			margin-inline-start: unset;
			padding: 0 8px 0 12px;
		}
	`),qf(i,s),i})();var ts=function(a,n,s,i,l,c){function d(x){if(x!==void 0&&typeof x!="function")throw new TypeError("Function expected");return x}for(var h=i.kind,g=h==="getter"?"get":h==="setter"?"set":"value",p=!n&&a?i.static?a:a.prototype:null,m=n||(p?Object.getOwnPropertyDescriptor(p,i.name):{}),u,S=!1,w=s.length-1;w>=0;w--){var z={};for(var _ in i)z[_]=_==="access"?{}:i[_];for(var _ in i.access)z.access[_]=i.access[_];z.addInitializer=function(x){if(S)throw new TypeError("Cannot add initializers after decoration has completed");c.push(d(x||null))};var b=(0,s[w])(h==="accessor"?{get:m.get,set:m.set}:m[g],z);if(h==="accessor"){if(b===void 0)continue;if(b===null||typeof b!="object")throw new TypeError("Object expected");(u=d(b.get))&&(m.get=u),(u=d(b.set))&&(m.set=u),(u=d(b.init))&&l.unshift(u)}else(u=d(b))&&(h==="field"?l.unshift(u):m[g]=u)}p&&Object.defineProperty(p,i.name,m),S=!0},pi=function(a,n,s){for(var i=arguments.length>2,l=0;l<n.length;l++)s=i?n[l].call(a,s):n[l].call(a);return i?s:void 0};let CA=(()=>{var H,$,Z,he,xe,V,T;let a=[lt("discord-reaction")],n,s=[],i,l=at,c,d=[],h=[],g,p=[],m=[],u,S=[],w=[],z,_=[],b=[],x,O=[],R=[],C,A=[],I=[];return H=class extends l{constructor(){super(...arguments);B(this,$,pi(this,d,void 0));B(this,Z,(pi(this,h),pi(this,p,":emoji:")));B(this,he,(pi(this,m),pi(this,S,1)));B(this,xe,(pi(this,w),pi(this,_,!1)));B(this,V,(pi(this,b),pi(this,O,!1)));B(this,T,(pi(this,R),pi(this,A,!1)));Be(this,"handleReactionClick",(pi(this,I),k=>{this.interactive&&(k.shiftKey?this.count--:this.count++,this.count<=0&&(this.count=1))}))}get emoji(){return L(this,$)}set emoji(k){U(this,$,k)}get name(){return L(this,Z)}set name(k){U(this,Z,k)}get count(){return L(this,he)}set count(k){U(this,he,k)}get reacted(){return L(this,xe)}set reacted(k){U(this,xe,k)}get interactive(){return L(this,V)}set interactive(k){U(this,V,k)}get lightTheme(){return L(this,T)}set lightTheme(k){U(this,T,k)}render(){var k,D,P;return F`<div class="discord-reaction-inner" @click=${this.handleReactionClick} @keydown=${this.handleReactionClick}>
			${De(((k=this.emoji)==null?void 0:k.includes("http"))||((D=this.emoji)==null?void 0:D.startsWith("/"))||((P=this.emoji)==null?void 0:P.startsWith("./")),()=>F`<img src=${Le(this.emoji)} alt=${Le(this.name)} draggable="false" />`,()=>F`<span>${this.emoji}</span>`)}
			<span class="discord-reaction-count">${this.count}</span>
		</div>`}},$=new WeakMap,Z=new WeakMap,he=new WeakMap,xe=new WeakMap,V=new WeakMap,T=new WeakMap,i=H,(()=>{const k=typeof Symbol=="function"&&Symbol.metadata?Object.create(l[Symbol.metadata]??null):void 0;c=[q()],g=[q()],u=[q({type:Number})],z=[q({type:Boolean,reflect:!0})],x=[q({type:Boolean})],C=[pt({context:Rt}),q({type:Boolean,reflect:!0,attribute:"light-theme"})],ts(H,null,c,{kind:"accessor",name:"emoji",static:!1,private:!1,access:{has:D=>"emoji"in D,get:D=>D.emoji,set:(D,P)=>{D.emoji=P}},metadata:k},d,h),ts(H,null,g,{kind:"accessor",name:"name",static:!1,private:!1,access:{has:D=>"name"in D,get:D=>D.name,set:(D,P)=>{D.name=P}},metadata:k},p,m),ts(H,null,u,{kind:"accessor",name:"count",static:!1,private:!1,access:{has:D=>"count"in D,get:D=>D.count,set:(D,P)=>{D.count=P}},metadata:k},S,w),ts(H,null,z,{kind:"accessor",name:"reacted",static:!1,private:!1,access:{has:D=>"reacted"in D,get:D=>D.reacted,set:(D,P)=>{D.reacted=P}},metadata:k},_,b),ts(H,null,x,{kind:"accessor",name:"interactive",static:!1,private:!1,access:{has:D=>"interactive"in D,get:D=>D.interactive,set:(D,P)=>{D.interactive=P}},metadata:k},O,R),ts(H,null,C,{kind:"accessor",name:"lightTheme",static:!1,private:!1,access:{has:D=>"lightTheme"in D,get:D=>D.lightTheme,set:(D,P)=>{D.lightTheme=P}},metadata:k},A,I),ts(null,n={value:i},a,{kind:"class",name:i.name,metadata:k},null,s),i=n.value,k&&Object.defineProperty(i,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:k})})(),Be(H,"styles",nt`
		:host > *:first-child {
			border-radius: 0.5rem;
			cursor: pointer;
			flex-shrink: 0;
			margin-right: 0.25rem;
			margin-bottom: 0.25rem;
			user-select: none;
			transition: none 0.1s ease;
			transition-property: background-color, border-color;
			background-color: #2f3136;
			border: 1px solid transparent;
		}

		:host([light-theme]) > *:first-child {
			background-color: #f2f3f5;
		}

		:host > *:first-child:hover {
			background-color: #36393f;
			border-color: #fff2;
		}

		:host([light-theme]:not([reacted])) > *:first-child:hover {
			background-color: white;
			border-color: #0003;
		}

		:host([reacted]) > *:first-child {
			background-color: rgba(88, 101, 242, 0.15);
			border-color: #5865f2;
		}

		:host([light-theme][reacted]) > *:first-child {
			background-color: #e7e9fd;
		}

		:host .discord-reaction-inner {
			display: flex;
			align-items: center;
			padding: 0.125rem 0.375rem;
		}

		:host img {
			width: 1rem;
			height: 1rem;
			margin: 0.125rem 0;
			min-width: auto;
			min-height: auto;
			object-fit: contain;
			vertical-align: bottom;
		}

		:host .discord-reaction-count {
			font-size: 0.875rem;
			font-weight: 500;
			margin-left: 0.375rem;
			text-align: center;
			color: #b9bbbe;
		}

		:host([light-theme]) .discord-reaction-count {
			color: #4f5660;
		}

		:host([reacted]) .discord-reaction-count {
			color: #dee0fc;
		}

		:host([light-theme][reacted]) .discord-reaction-count {
			color: #5865f2;
		}
	`),pi(i,s),i})();var AA=function(a,n,s,i,l,c){function d(x){if(x!==void 0&&typeof x!="function")throw new TypeError("Function expected");return x}for(var h=i.kind,g=h==="getter"?"get":h==="setter"?"set":"value",p=!n&&a?i.static?a:a.prototype:null,m=n||(p?Object.getOwnPropertyDescriptor(p,i.name):{}),u,S=!1,w=s.length-1;w>=0;w--){var z={};for(var _ in i)z[_]=_==="access"?{}:i[_];for(var _ in i.access)z.access[_]=i.access[_];z.addInitializer=function(x){if(S)throw new TypeError("Cannot add initializers after decoration has completed");c.push(d(x||null))};var b=(0,s[w])(h==="accessor"?{get:m.get,set:m.set}:m[g],z);if(h==="accessor"){if(b===void 0)continue;if(b===null||typeof b!="object")throw new TypeError("Object expected");(u=d(b.get))&&(m.get=u),(u=d(b.set))&&(m.set=u),(u=d(b.init))&&l.unshift(u)}else(u=d(b))&&(h==="field"?l.unshift(u):m[g]=u)}p&&Object.defineProperty(p,i.name,m),S=!0},kA=function(a,n,s){for(var i=arguments.length>2,l=0;l<n.length;l++)s=i?n[l].call(a,s):n[l].call(a);return i?s:void 0};let jA=(()=>{var c;let a=[lt("discord-reactions")],n,s=[],i,l=at;return c=class extends l{render(){return F`<slot></slot>`}},i=c,(()=>{const h=typeof Symbol=="function"&&Symbol.metadata?Object.create(l[Symbol.metadata]??null):void 0;AA(null,n={value:i},a,{kind:"class",name:i.name,metadata:h},null,s),i=n.value,h&&Object.defineProperty(i,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:h})})(),Be(c,"styles",nt`
		:host {
			display: flex;
			-webkit-box-flex: 1;
			-ms-flex: 1 0 auto;
			flex: 1 0 auto;
			align-items: center;
			flex-wrap: wrap;
		}
	`),kA(i,s),i})();var Yf=function(a,n,s,i,l,c){function d(x){if(x!==void 0&&typeof x!="function")throw new TypeError("Function expected");return x}for(var h=i.kind,g=h==="getter"?"get":h==="setter"?"set":"value",p=!n&&a?i.static?a:a.prototype:null,m=n||(p?Object.getOwnPropertyDescriptor(p,i.name):{}),u,S=!1,w=s.length-1;w>=0;w--){var z={};for(var _ in i)z[_]=_==="access"?{}:i[_];for(var _ in i.access)z.access[_]=i.access[_];z.addInitializer=function(x){if(S)throw new TypeError("Cannot add initializers after decoration has completed");c.push(d(x||null))};var b=(0,s[w])(h==="accessor"?{get:m.get,set:m.set}:m[g],z);if(h==="accessor"){if(b===void 0)continue;if(b===null||typeof b!="object")throw new TypeError("Object expected");(u=d(b.get))&&(m.get=u),(u=d(b.set))&&(m.set=u),(u=d(b.init))&&l.unshift(u)}else(u=d(b))&&(h==="field"?l.unshift(u):m[g]=u)}p&&Object.defineProperty(p,i.name,m),S=!0},_o=function(a,n,s){for(var i=arguments.length>2,l=0;l<n.length;l++)s=i?n[l].call(a,s):n[l].call(a);return i?s:void 0};let NA=(()=>{var u,S,w;let a=[lt("discord-spoiler")],n,s=[],i,l=at,c,d=[],h=[],g,p=[],m=[];return u=class extends l{constructor(){super(...arguments);B(this,S,_o(this,d,!1));B(this,w,(_o(this,h),_o(this,p,!1)));_o(this,m)}get activated(){return L(this,S)}set activated(b){U(this,S,b)}get lightTheme(){return L(this,w)}set lightTheme(b){U(this,w,b)}render(){return F`<slot
			@click=${()=>{this.activated=!0}}
			@keydown=${()=>{this.activated=!0}}
		></slot>`}},S=new WeakMap,w=new WeakMap,i=u,(()=>{const b=typeof Symbol=="function"&&Symbol.metadata?Object.create(l[Symbol.metadata]??null):void 0;c=[q({type:Boolean,reflect:!0})],g=[pt({context:Rt}),q({type:Boolean,reflect:!0,attribute:"light-theme"})],Yf(u,null,c,{kind:"accessor",name:"activated",static:!1,private:!1,access:{has:x=>"activated"in x,get:x=>x.activated,set:(x,O)=>{x.activated=O}},metadata:b},d,h),Yf(u,null,g,{kind:"accessor",name:"lightTheme",static:!1,private:!1,access:{has:x=>"lightTheme"in x,get:x=>x.lightTheme,set:(x,O)=>{x.lightTheme=O}},metadata:b},p,m),Yf(null,n={value:i},a,{kind:"class",name:i.name,metadata:b},null,s),i=n.value,b&&Object.defineProperty(i,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:b})})(),Be(u,"styles",nt`
		:host {
			background-color: #202225;
			border-radius: 3px;
			color: transparent;
			cursor: pointer;
		}

		:host([light-theme]) {
			background-color: #c4c9ce;
		}

		:host(:hover) {
			background-color: rgba(32, 34, 37, 0.8);
		}

		:host([light-theme]:hover) {
			background-color: #cfd3d7;
		}

		:host([activated]) {
			color: inherit;
			background-color: hsla(0, 0%, 100%, 0.1);
		}

		:host([light-theme][activated]) {
			background-color: #e5e5e5;
		}
	`),_o(i,s),i})();var _r=function(a,n,s){for(var i=arguments.length>2,l=0;l<n.length;l++)s=i?n[l].call(a,s):n[l].call(a);return i?s:void 0},xo=function(a,n,s,i,l,c){function d(x){if(x!==void 0&&typeof x!="function")throw new TypeError("Function expected");return x}for(var h=i.kind,g=h==="getter"?"get":h==="setter"?"set":"value",p=!n&&a?i.static?a:a.prototype:null,m=n||(p?Object.getOwnPropertyDescriptor(p,i.name):{}),u,S=!1,w=s.length-1;w>=0;w--){var z={};for(var _ in i)z[_]=_==="access"?{}:i[_];for(var _ in i.access)z.access[_]=i.access[_];z.addInitializer=function(x){if(S)throw new TypeError("Cannot add initializers after decoration has completed");c.push(d(x||null))};var b=(0,s[w])(h==="accessor"?{get:m.get,set:m.set}:m[g],z);if(h==="accessor"){if(b===void 0)continue;if(b===null||typeof b!="object")throw new TypeError("Object expected");(u=d(b.get))&&(m.get=u),(u=d(b.set))&&(m.set=u),(u=d(b.init))&&l.unshift(u)}else(u=d(b))&&(h==="field"?l.unshift(u):m[g]=u)}p&&Object.defineProperty(p,i.name,m),S=!0};let DA=(()=>{var b,x,O,R;let a=[lt("discord-string-select-menu")],n,s=[],i,l=at,c=[],d,h=[],g=[],p,m=[],u=[],S,w=[],z=[],_;return b=class extends l{constructor(){super(...arguments);B(this,x,(_r(this,c),_r(this,h,void 0)));B(this,O,(_r(this,g),_r(this,m,"Make a selection")));B(this,R,(_r(this,u),_r(this,w,!1)));_r(this,z)}get disabled(){return L(this,x)}set disabled(I){U(this,x,I)}get placeholder(){return L(this,O)}set placeholder(I){U(this,O,I)}get lightTheme(){return L(this,R)}set lightTheme(I){U(this,R,I)}render(){return F`
			<label
				class="${Lt({"discord-string-select-menu-label":!0,"discord-string-select-menu":!0,"discord-string-select-menu-disabled":this.disabled})}"
			>
				<span>${this.placeholder}</span> ${fm({class:"discord-expand-more-icon"})}
				<span class="discord-string-select-menu-hidden"><input type="checkbox" @click=${this._onClick} /></span>
			</label>
			<div class="discord-string-select-menu-option-slot discord-string-select-menu-hidden"><slot></slot></div>
		`}_onClick(){var Z,he,xe;const I=(Z=this.shadowRoot)==null?void 0:Z.querySelectorAll("svg.discord-expand-more-icon").item(0),H=(he=this.shadowRoot)==null?void 0:he.querySelectorAll("div.discord-string-select-menu-option-slot").item(0),$=(xe=this.shadowRoot)==null?void 0:xe.querySelectorAll("label.discord-string-select-menu").item(0);$!=null&&$.className.includes("discord-string-select-menu-disabled")||(H!=null&&H.className.includes("discord-string-select-menu-hidden")?(H==null||H.setAttribute("class","discord-string-select-menu-option-slot"),I==null||I.setAttribute("class","discord-expand-more-icon discord-string-select-menu-rotated")):(H==null||H.setAttribute("class","discord-string-select-menu-option-slot discord-string-select-menu-hidden"),I==null||I.setAttribute("class","discord-expand-more-icon")))}},x=new WeakMap,O=new WeakMap,R=new WeakMap,i=b,(()=>{const I=typeof Symbol=="function"&&Symbol.metadata?Object.create(l[Symbol.metadata]??null):void 0;d=[q({type:Boolean,attribute:"disabled"})],p=[q({attribute:"placeholder"})],S=[pt({context:Rt}),q({type:Boolean,reflect:!0,attribute:"light-theme"})],_=[m2({once:!1,capture:!0,passive:!0})],xo(b,null,d,{kind:"accessor",name:"disabled",static:!1,private:!1,access:{has:H=>"disabled"in H,get:H=>H.disabled,set:(H,$)=>{H.disabled=$}},metadata:I},h,g),xo(b,null,p,{kind:"accessor",name:"placeholder",static:!1,private:!1,access:{has:H=>"placeholder"in H,get:H=>H.placeholder,set:(H,$)=>{H.placeholder=$}},metadata:I},m,u),xo(b,null,S,{kind:"accessor",name:"lightTheme",static:!1,private:!1,access:{has:H=>"lightTheme"in H,get:H=>H.lightTheme,set:(H,$)=>{H.lightTheme=$}},metadata:I},w,z),xo(b,null,_,{kind:"method",name:"_onClick",static:!1,private:!1,access:{has:H=>"_onClick"in H,get:H=>H._onClick},metadata:I},null,c),xo(null,n={value:i},a,{kind:"class",name:i.name,metadata:I},null,s),i=n.value,I&&Object.defineProperty(i,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:I})})(),Be(b,"styles",nt`
		.discord-string-select-menu {
			height: 36px;
			min-height: 36px;
			display: flex;
			align-items: center;
			justify-content: space-between;
			box-sizing: border-box;
			cursor: pointer;
			color: color-mix(in oklab, hsl(210 calc(1 * 9.1%) 87.1% / 1) 100%, black 0%);
			border: 1px solid;
			border-radius: 4px;
			background-color: color-mix(in oklab, hsl(225 calc(1 * 6.3%) 12.5% / 1) 100%, black 0%);
			border-color: color-mix(in oklab, hsl(225 calc(1 * 6.3%) 12.5% / 1) 100%, black 0%);
			padding: 8px !important;
			width: 90%;
			max-width: 400px;
			margin-right: 16px;
			transition: border 0.2s ease;
			font-weight: 500;
		}

		:host([light-theme]) .discord-string-select-menu {
			background-color: #ebebeb !important;
			border-color: #b5b5b5 !important;
			border: 1px solid;
			color: #2e3338;
		}

		:host([light-theme]) .discord-string-select-menu-option-slot {
			background-color: #ebebeb !important;
			border-color: #b5b5b5 !important;
			border: 1px solid;
			color: #2e3338;
		}

		.discord-string-select-menu-option-slot {
			overflow-y: auto;
			overflow-x: hidden;
			color: currentColor;
			border: none;
			border-top-left-radius: 0px;
			border-top-right-radius: 0px;
			border-color: color-mix(in oklab, hsl(225 calc(1 * 6.3%) 12.5% / 1) 100%, black 0%);
			background-color: color-mix(in oklab, hsl(220 calc(1 * 6.5%) 18% / 1) 100%, black 0%);
			cursor: pointer;
			box-sizing: border-box;
			border-radius: 4px;
			gap: 10px;
			display: block;
			max-height: 190px;
			position: absolute;
			width: 90%;
			max-width: 400px;
			z-index: 1002;
		}

		.discord-string-select-menu-option-slot::-webkit-scrollbar {
			width: 5px;
			background-color: transparent;
		}

		.discord-string-select-menu-option-slot::-webkit-scrollbar-track {
			background-color: transparent;
		}

		.discord-string-select-menu-option-slot::-webkit-scrollbar-thumb {
			border-radius: 10px;
			background-color: rgba(0, 0, 0, 0.3);
		}

		.discord-string-select-menu-label {
			width: 100%;
		}

		.discord-string-select-inside-menu {
			padding: 8px 8px 8px 12px;
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		.discord-string-select-menu-hidden {
			display: none;
		}

		.discord-string-select-menu-disabled {
			cursor: not-allowed !important;
			opacity: 0.5;
		}

		.discord-string-select-inside-menu:hover {
			border-color: black;
			cursor: pointer;
		}

		.discord-string-select-menu-rotated {
			transform: rotate(-180deg);
		}

		.discord-expand-more-icon {
			margin-left: auto;
		}
	`),_r(i,s),i})();var as=function(a,n,s,i,l,c){function d(x){if(x!==void 0&&typeof x!="function")throw new TypeError("Function expected");return x}for(var h=i.kind,g=h==="getter"?"get":h==="setter"?"set":"value",p=!n&&a?i.static?a:a.prototype:null,m=n||(p?Object.getOwnPropertyDescriptor(p,i.name):{}),u,S=!1,w=s.length-1;w>=0;w--){var z={};for(var _ in i)z[_]=_==="access"?{}:i[_];for(var _ in i.access)z.access[_]=i.access[_];z.addInitializer=function(x){if(S)throw new TypeError("Cannot add initializers after decoration has completed");c.push(d(x||null))};var b=(0,s[w])(h==="accessor"?{get:m.get,set:m.set}:m[g],z);if(h==="accessor"){if(b===void 0)continue;if(b===null||typeof b!="object")throw new TypeError("Object expected");(u=d(b.get))&&(m.get=u),(u=d(b.set))&&(m.set=u),(u=d(b.init))&&l.unshift(u)}else(u=d(b))&&(h==="field"?l.unshift(u):m[g]=u)}p&&Object.defineProperty(p,i.name,m),S=!0},gi=function(a,n,s){for(var i=arguments.length>2,l=0;l<n.length;l++)s=i?n[l].call(a,s):n[l].call(a);return i?s:void 0};let OA=(()=>{var H,$,Z,he,xe,V,T;let a=[lt("discord-string-select-menu-option")],n,s=[],i,l=at,c,d=[],h=[],g,p=[],m=[],u,S=[],w=[],z,_=[],b=[],x,O=[],R=[],C,A=[],I=[];return H=class extends l{constructor(){super(...arguments);B(this,$,gi(this,d,void 0));B(this,Z,(gi(this,h),gi(this,p,"emoji")));B(this,he,(gi(this,m),gi(this,S,void 0)));B(this,xe,(gi(this,w),gi(this,_,void 0)));B(this,V,(gi(this,b),gi(this,O,void 0)));B(this,T,(gi(this,R),gi(this,A,!1)));gi(this,I)}get emoji(){return L(this,$)}set emoji(k){U(this,$,k)}get emojiName(){return L(this,Z)}set emojiName(k){U(this,Z,k)}get label(){return L(this,he)}set label(k){U(this,he,k)}get description(){return L(this,xe)}set description(k){U(this,xe,k)}get selectOption(){return L(this,V)}set selectOption(k){U(this,V,k)}checkLabelIsProvided(){if(!this.label)throw new Yn("The label of option is required")}get lightTheme(){return L(this,T)}set lightTheme(k){U(this,T,k)}render(){return this.checkLabelIsProvided(),F`
			<label>
				${De(this.emoji,()=>{var k,D,P;return De(((k=this.emoji)==null?void 0:k.includes("http"))||((D=this.emoji)==null?void 0:D.startsWith("/"))||((P=this.emoji)==null?void 0:P.startsWith("./")),()=>F`<img
								src=${this.emoji}
								alt=${Le(this.emojiName)}
								draggable="true"
								class="discord-string-select-menu-option-emoji"
							/>`,()=>F`<span class="discord-string-select-menu-option-emoji">${this.emoji}</span>`)})}
				<div class="discord-string-select-menu-option-ellipsis-text">
					<div class="discord-string-select-menu-option-ellipsis-text">
						<strong>${this.label}</strong>
					</div>
					${De(this.description,()=>F`<span>${this.description}</span>`)}
				</div>
				<span class="discord-string-select-menu-option-hidden"><input type="checkbox" @click=${()=>{var k;return(k=this.selectOption)==null?void 0:k.call(this)}} /></span>
			</label>
		`}},$=new WeakMap,Z=new WeakMap,he=new WeakMap,xe=new WeakMap,V=new WeakMap,T=new WeakMap,i=H,(()=>{const k=typeof Symbol=="function"&&Symbol.metadata?Object.create(l[Symbol.metadata]??null):void 0;c=[q({reflect:!0,attribute:"emoji"})],g=[q({reflect:!0,attribute:"emoji-name"})],u=[q({attribute:"label"})],z=[q({attribute:"description"})],x=[q({reflect:!1,noAccessor:!0,attribute:!1})],C=[pt({context:Rt}),q({type:Boolean,reflect:!0,attribute:"light-theme"})],as(H,null,c,{kind:"accessor",name:"emoji",static:!1,private:!1,access:{has:D=>"emoji"in D,get:D=>D.emoji,set:(D,P)=>{D.emoji=P}},metadata:k},d,h),as(H,null,g,{kind:"accessor",name:"emojiName",static:!1,private:!1,access:{has:D=>"emojiName"in D,get:D=>D.emojiName,set:(D,P)=>{D.emojiName=P}},metadata:k},p,m),as(H,null,u,{kind:"accessor",name:"label",static:!1,private:!1,access:{has:D=>"label"in D,get:D=>D.label,set:(D,P)=>{D.label=P}},metadata:k},S,w),as(H,null,z,{kind:"accessor",name:"description",static:!1,private:!1,access:{has:D=>"description"in D,get:D=>D.description,set:(D,P)=>{D.description=P}},metadata:k},_,b),as(H,null,x,{kind:"accessor",name:"selectOption",static:!1,private:!1,access:{has:D=>"selectOption"in D,get:D=>D.selectOption,set:(D,P)=>{D.selectOption=P}},metadata:k},O,R),as(H,null,C,{kind:"accessor",name:"lightTheme",static:!1,private:!1,access:{has:D=>"lightTheme"in D,get:D=>D.lightTheme,set:(D,P)=>{D.lightTheme=P}},metadata:k},A,I),as(null,n={value:i},a,{kind:"class",name:i.name,metadata:k},null,s),i=n.value,k&&Object.defineProperty(i,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:k})})(),Be(H,"styles",nt`
		label {
			display: flex;
			align-items: center;
			max-width: 400px;
			padding: 8px 8px 8px 12px;
			gap: 10px;
			font-size: small;
			cursor: pointer;
		}

		label:hover {
			background-color: rgba(255, 255, 255, 0.1);
		}

		:host([light-theme]) {
			background-color: #f2f3f5 !important;
			border-color: #d9d9d9 !important;
			color: #2e3338;
		}

		:host([light-theme]) label:hover {
			background-color: rgba(204, 204, 204, 2) !important;
		}

		.discord-string-select-menu-option-emoji {
			margin-right: 4px;
			object-fit: contain;
			width: 1.375em;
			height: 1.375em;
			vertical-align: bottom;
		}

		.discord-string-select-menu-option-ellipsis-text {
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}

		.discord-string-select-menu-option-hidden {
			display: none;
		}
	`),gi(i,s),i})();var E3=function(a,n,s,i,l,c){function d(x){if(x!==void 0&&typeof x!="function")throw new TypeError("Function expected");return x}for(var h=i.kind,g=h==="getter"?"get":h==="setter"?"set":"value",p=!n&&a?i.static?a:a.prototype:null,m=n||(p?Object.getOwnPropertyDescriptor(p,i.name):{}),u,S=!1,w=s.length-1;w>=0;w--){var z={};for(var _ in i)z[_]=_==="access"?{}:i[_];for(var _ in i.access)z.access[_]=i.access[_];z.addInitializer=function(x){if(S)throw new TypeError("Cannot add initializers after decoration has completed");c.push(d(x||null))};var b=(0,s[w])(h==="accessor"?{get:m.get,set:m.set}:m[g],z);if(h==="accessor"){if(b===void 0)continue;if(b===null||typeof b!="object")throw new TypeError("Object expected");(u=d(b.get))&&(m.get=u),(u=d(b.set))&&(m.set=u),(u=d(b.init))&&l.unshift(u)}else(u=d(b))&&(h==="field"?l.unshift(u):m[g]=u)}p&&Object.defineProperty(p,i.name,m),S=!0},Ff=function(a,n,s){for(var i=arguments.length>2,l=0;l<n.length;l++)s=i?n[l].call(a,s):n[l].call(a);return i?s:void 0};let HA=(()=>{var g,p;let a=[lt("discord-subscript")],n,s=[],i,l=at,c,d=[],h=[];return g=class extends l{constructor(){super(...arguments);B(this,p,Ff(this,d,!1));Ff(this,h)}get lightTheme(){return L(this,p)}set lightTheme(S){U(this,p,S)}render(){return F`
			<small>
				<span>
					<slot></slot>
				</span>
			</small>
		`}},p=new WeakMap,i=g,(()=>{const S=typeof Symbol=="function"&&Symbol.metadata?Object.create(l[Symbol.metadata]??null):void 0;c=[pt({context:Rt}),q({type:Boolean,reflect:!0,attribute:"light-theme"})],E3(g,null,c,{kind:"accessor",name:"lightTheme",static:!1,private:!1,access:{has:w=>"lightTheme"in w,get:w=>w.lightTheme,set:(w,z)=>{w.lightTheme=z}},metadata:S},d,h),E3(null,n={value:i},a,{kind:"class",name:i.name,metadata:S},null,s),i=n.value,S&&Object.defineProperty(i,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:S})})(),Be(g,"styles",nt`
		small {
			display: block;
			color: color-mix(in oklab, hsl(214 calc(1 * 8.1%) 61.2% / 1) 100%, black 0%);
			font-size: 0.8125rem;
			line-height: 1.11719rem;
		}

		:host([light-theme]) > small {
			color: color-mix(in oklab, hsl(228 calc(1 * 5.2%) 38% / 1) 100%, black 0%);
		}
	`),Ff(i,s),i})();const RA=Ie`
	<path d="M4 0L0 4V8L4 12L8 8V4L4 0ZM7 7.59L4 10.59L1 7.59V4.41L4 1.41L7 4.41V7.59Z" fill="currentColor" />
	<path d="M2 4.83V7.17L4 9.17L6 7.17V4.83L4 2.83L2 4.83Z" fill="currentColor" />
`;function $A(a={}){return F`<svg ${Pe(a)} aria-hidden="false" width="24" height="24" viewBox="0 0 8 12">${RA}</svg>`}const VA=Ie`
	<path
		fill="#3ba55c"
		fill-rule="evenodd"
		d="M17.7163041 15.36645368c-.0190957.02699568-1.9039523 2.6680735-2.9957762 2.63320406-3.0676659-.09785935-6.6733809-3.07188394-9.15694343-5.548738C3.08002193 9.9740657.09772497 6.3791404 0 3.3061316v-.024746C0 2.2060575 2.61386252.3152347 2.64082114.2972376c.7110335-.4971705 1.4917101-.3149497 1.80959713.1372281.19320342.2744561 2.19712724 3.2811005 2.42290565 3.6489167.09884826.1608492.14714912.3554431.14714912.5702838 0 .2744561-.07975258.5770327-.23701117.8751101-.1527655.2902036-.65262318 1.1664385-.89862055 1.594995.2673396.3768148.94804468 1.26429792 2.351016 2.66357424 1.39173858 1.39027775 2.28923588 2.07641807 2.67002628 2.34187563.4302146-.2452108 1.3086162-.74238132 1.5972981-.89423205.5447887-.28682915 1.0907006-.31944893 1.4568885-.08661115.3459689.2182151 3.3383754 2.21027167 3.6225641 2.41611376.2695862.19234426.4144887.5399137.4144887.91672846 0 .2969525-.089862.61190215-.2808189.88523346"
	/>
`;function LA(a={}){return F`<svg ${Pe(a)} aria-hidden="false" width="18" height="18" viewBox="0 0 18 18">${VA}</svg>`}const BA=Ie`
	<g fill="none" fill-rule="evenodd">
		<path
			fill="#99AAB5"
			d="M0 14.25V18h3.75L14.81 6.94l-3.75-3.75L0 14.25zM17.71 4.04c.39-.39.39-1.02 0-1.41L15.37.29c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
		/>
		<path d="M0 0h18v18H0" />
	</g>
`;function UA(a={}){return F`<svg ${Pe(a)} aria-hidden="false" width="18" height="18" viewBox="0 0 18 18">${BA}</svg>`}const IA=Ie`
	<g fill="none" fill-rule="evenodd">
		<path d="M0 0h18v18H0z" />
		<path
			fill="#99AAB5"
			d="M3.2765961.00034226C6.344262.0982016 9.949977 3.0722262 12.43353953 5.54908026c2.48356254 2.47685405 5.4658595 6.07177934 5.56358447 9.14478814 0 1.1000741-2.61386252 2.9908969-2.64082114 3.008894-.7110335.4971705-1.4917101.3149497-1.80959713-.1372281-.19320342-.2744561-2.19712724-3.2811005-2.42290565-3.6489167-.09884826-.1608492-.14714912-.3554431-.14714912-.5702838 0-.2744561.07975258-.5770327.23701117-.8751101.1527655-.2902036.65262318-1.1664385.89862055-1.594995-.2673396-.3768148-.94804468-1.26429792-2.351016-2.66357424C8.3695281 6.8223767 7.4720308 6.1362364 7.0912404 5.87077883c-.4302146.2452108-1.3086162.74238132-1.5972981.89423205-.5447887.28682915-1.0907006.31944893-1.4568885.08661115C3.6910849 6.63340693.6986784 4.64135036.4144897 4.43550827.1449035 4.243164.000001 3.89559457.000001 3.5187798c0-.29695252.089862-.61190217.2808189-.88523348.0190957-.02699568 1.9039523-2.6680735 2.9957762-2.63320406z"
		/>
	</g>
`;function PA(a={}){return F`<svg ${Pe(a)} aria-hidden="false" width="18" height="18" viewBox="0 0 18 18">${IA}</svg>`}const ZA=Ie`
	<path
		d="m16.908 8.39684-8.29587-8.295827-1.18584 1.184157 1.18584 1.18584-4.14834 4.1475v.00167l-1.18583-1.18583-1.185 1.18583 3.55583 3.55502-4.740831 4.74 1.185001 1.185 4.74083-4.74 3.55581 3.555 1.185-1.185-1.185-1.185 4.1475-4.14836h.0009l1.185 1.185z"
		fill="#b9bbbe"
	/>
`;function qA(a={}){return F`<svg ${Pe(a)} aria-hidden="false" width="18" height="18" viewBox="0 0 18 18">${ZA}</svg>`}const YA=Ie`
	<path
		fill="#b9bbbe"
		fill-rule="evenodd"
		d="M1.575 9a2.25 2.25 0 0 0 0 3.18l.345.345c.128.128.323.15.488.075a2.25 2.25 0 0 1 3 3 .43.43 0 0 0 .06.48l.352.345a2.25 2.25 0 0 0 3.18 0l5.077-5.077a.75.75 0 0 1 1.02-1.02L16.425 9a2.25 2.25 0 0 0 0-3.18l-.345-.352a.42.42 0 0 0-.488-.06 2.25 2.25 0 0 1-3-3 .42.42 0 0 0-.068-.488l-.345-.345a2.25 2.25 0 0 0-3.18 0L7.671 2.903a.75.75 0 0 1-1.02 1.02zm7.508-4.725a.75.75 0 1 0-1.057 1.05l.517.525A.75.75 0 1 0 9.6 4.785l-.517-.525Zm2.063 2.063a.75.75 0 1 0-1.057 1.057l.517.525a.75.75 0 0 0 1.057-1.065l-.517-.525Zm2.063 2.063a.75.75 0 0 0-1.057 1.057l.517.525a.75.75 0 0 0 1.057-1.065l-.517-.525Z"
		clip-rule="evenodd"
	/>
`;function FA(a={}){return F`<svg ${Pe(a)} aria-hidden="false" width="18" height="18" viewBox="0 0 18 18">${YA}</svg>`}const GA=Ie`
	<path
		d="M10 0C4.486 0 0 4.486 0 10C0 15.515 4.486 20 10 20C15.514 20 20 15.515 20 10C20 4.486 15.514 0 10 0ZM9 4H11V11H9V4ZM10 15.25C9.31 15.25 8.75 14.691 8.75 14C8.75 13.31 9.31 12.75 10 12.75C10.69 12.75 11.25 13.31 11.25 14C11.25 14.691 10.69 15.25 10 15.25Z"
		fill-rule="evenodd"
		clip-rule="evenodd"
		fill="currentColor"
	/>
`;function XA(a={}){return F`<svg ${Pe(a)} aria-hidden="false" width="20" height="20" viewBox="0 0 20 20">${GA}</svg>`}const QA=Ie`
	<path
		xmlns="http://www.w3.org/2000/svg"
		d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"
		fill="#ed4245"
	/>
`;function KA(a={}){return F`<svg ${Pe(a)} aria-hidden="false" width="20" height="20" viewBox="0 0 20 20">${QA}</svg>`}const WA=Ie`
	<path
		fill="currentColor"
		d="M5.43309 21C5.35842 21 5.30189 20.9325 5.31494 20.859L5.99991 17H2.14274C2.06819 17 2.01168 16.9327 2.02453 16.8593L2.33253 15.0993C2.34258 15.0419 2.39244 15 2.45074 15H6.34991L7.40991 9H3.55274C3.47819 9 3.42168 8.93274 3.43453 8.85931L3.74253 7.09931C3.75258 7.04189 3.80244 7 3.86074 7H7.75991L8.45234 3.09903C8.46251 3.04174 8.51231 3 8.57049 3H10.3267C10.4014 3 10.4579 3.06746 10.4449 3.14097L9.75991 7H15.7599L16.4523 3.09903C16.4625 3.04174 16.5123 3 16.5705 3H18.3267C18.4014 3 18.4579 3.06746 18.4449 3.14097L17.7599 7H21.6171C21.6916 7 21.7481 7.06725 21.7353 7.14069L21.4273 8.90069C21.4172 8.95811 21.3674 9 21.3091 9H17.4099L17.0495 11.04H15.05L15.4104 9H9.41035L8.35035 15H10.5599V17H7.99991L7.30749 20.901C7.29732 20.9583 7.24752 21 7.18934 21H5.43309Z"
	/>
	<path
		fill="currentColor"
		d="M13.4399 12.96C12.9097 12.96 12.4799 13.3898 12.4799 13.92V20.2213C12.4799 20.7515 12.9097 21.1813 13.4399 21.1813H14.3999C14.5325 21.1813 14.6399 21.2887 14.6399 21.4213V23.4597C14.6399 23.6677 14.8865 23.7773 15.0408 23.6378L17.4858 21.4289C17.6622 21.2695 17.8916 21.1813 18.1294 21.1813H22.5599C23.0901 21.1813 23.5199 20.7515 23.5199 20.2213V13.92C23.5199 13.3898 23.0901 12.96 22.5599 12.96H13.4399Z"
	/>
`;function JA(a={}){return F`<svg ${Pe(a)} aria-hidden="false" width="24" height="24" viewBox="0 0 24 24">${WA}</svg>`}const ek=Ie`
	<g fill="none" fill-rule="evenodd">
		<path d="M18 0H0v18h18z" />
		<path fill="#3ba55c" d="M0 8h14.2l-3.6-3.6L12 3l6 6-6 6-1.4-1.4 3.6-3.6H0" />
	</g>
`;function tk(a={}){return F`<svg ${Pe(a)} aria-hidden="false" width="18" height="18" viewBox="0 0 18 18">${ek}</svg>`}const ak=Ie`
	<g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
		<path d="M18 0H0v18h18z" />
		<path fill="#ed4245" d="M3.8 8l3.6-3.6L6 3 0 9l6 6 1.4-1.4L3.8 10H18V8" />
	</g>
`;function ik(a={}){return F`<svg ${Pe(a)} aria-hidden="false" width="18" height="18" viewBox="0 0 18 18">${ak}</svg>`}var ll=function(a,n,s,i,l,c){function d(x){if(x!==void 0&&typeof x!="function")throw new TypeError("Function expected");return x}for(var h=i.kind,g=h==="getter"?"get":h==="setter"?"set":"value",p=!n&&a?i.static?a:a.prototype:null,m=n||(p?Object.getOwnPropertyDescriptor(p,i.name):{}),u,S=!1,w=s.length-1;w>=0;w--){var z={};for(var _ in i)z[_]=_==="access"?{}:i[_];for(var _ in i.access)z.access[_]=i.access[_];z.addInitializer=function(x){if(S)throw new TypeError("Cannot add initializers after decoration has completed");c.push(d(x||null))};var b=(0,s[w])(h==="accessor"?{get:m.get,set:m.set}:m[g],z);if(h==="accessor"){if(b===void 0)continue;if(b===null||typeof b!="object")throw new TypeError("Object expected");(u=d(b.get))&&(m.get=u),(u=d(b.set))&&(m.set=u),(u=d(b.init))&&l.unshift(u)}else(u=d(b))&&(h==="field"?l.unshift(u):m[g]=u)}p&&Object.defineProperty(p,i.name,m),S=!0},Fi=function(a,n,s){for(var i=arguments.length>2,l=0;l<n.length;l++)s=i?n[l].call(a,s):n[l].call(a);return i?s:void 0};let nk=(()=>{var C,A,I,H,$,Z;let a=[lt("discord-system-message")],n,s=[],i,l=at,c,d=[],h=[],g,p=[],m=[],u,S=[],w=[],z,_=[],b=[],x,O=[],R=[];return C=class extends l{constructor(){super(...arguments);B(this,A,Fi(this,d,new Date));B(this,I,(Fi(this,h),Fi(this,p,"join")));B(this,H,(Fi(this,m),Fi(this,S,!1)));B(this,$,(Fi(this,w),Fi(this,_,!1)));B(this,Z,(Fi(this,b),Fi(this,O,!1)));Fi(this,R)}get timestamp(){return L(this,A)}set timestamp(V){U(this,A,V)}get type(){return L(this,I)}set type(V){U(this,I,V)}get channelName(){return L(this,H)}set channelName(V){U(this,H,V)}get hasThread(){return L(this,$)}set hasThread(V){U(this,$,V)}get lightTheme(){return L(this,Z)}set lightTheme(V){U(this,Z,V)}checkType(){if(typeof this.type!="string")throw new TypeError("DiscordSystemMessage `type` prop must be a string.");if(!["join","leave","call","missed-call","boost","edit","thread","pin","alert","error","upgrade"].includes(this.type))throw new RangeError("DiscordSystemMessage `type` prop must be one of: 'join', 'leave', 'call', 'missed-call', 'boost', 'edit', 'thread', 'pin', 'alert', 'upgrade', 'error'")}willUpdate(){this.hasThread=Array.from(this.children).some(V=>V.tagName.toLowerCase()==="discord-thread")}render(){return this.timestamp=Do(this.timestamp),this.checkType(),F`<div class="discord-message-icon">
				${o0(this.type,[["join",()=>tk()],["leave",()=>ik()],["call",()=>LA()],["missed-call",()=>PA()],["edit",()=>UA()],["boost",()=>$A()],["thread",()=>JA()],["pin",()=>qA()],["alert",()=>XA()],["error",()=>KA()],["upgrade",()=>FA()]])}
			</div>
			<div class="discord-message-content">
				<span>
					<slot></slot>
					<span class="discord-message-timestamp">${this.timestamp}</span>
				</span>
				<slot name="reactions"></slot>
				<slot name="thread"></slot>
			</div>`}},A=new WeakMap,I=new WeakMap,H=new WeakMap,$=new WeakMap,Z=new WeakMap,i=C,(()=>{const V=typeof Symbol=="function"&&Symbol.metadata?Object.create(l[Symbol.metadata]??null):void 0;c=[q({type:String})],g=[q({reflect:!0,attribute:"type"})],u=[q({type:Boolean,reflect:!0,attribute:"channel-name"})],z=[q({type:Boolean,reflect:!0,attribute:"has-thread"})],x=[pt({context:Rt}),q({type:Boolean,reflect:!0,attribute:"light-theme"})],ll(C,null,c,{kind:"accessor",name:"timestamp",static:!1,private:!1,access:{has:T=>"timestamp"in T,get:T=>T.timestamp,set:(T,W)=>{T.timestamp=W}},metadata:V},d,h),ll(C,null,g,{kind:"accessor",name:"type",static:!1,private:!1,access:{has:T=>"type"in T,get:T=>T.type,set:(T,W)=>{T.type=W}},metadata:V},p,m),ll(C,null,u,{kind:"accessor",name:"channelName",static:!1,private:!1,access:{has:T=>"channelName"in T,get:T=>T.channelName,set:(T,W)=>{T.channelName=W}},metadata:V},S,w),ll(C,null,z,{kind:"accessor",name:"hasThread",static:!1,private:!1,access:{has:T=>"hasThread"in T,get:T=>T.hasThread,set:(T,W)=>{T.hasThread=W}},metadata:V},_,b),ll(C,null,x,{kind:"accessor",name:"lightTheme",static:!1,private:!1,access:{has:T=>"lightTheme"in T,get:T=>T.lightTheme,set:(T,W)=>{T.lightTheme=W}},metadata:V},O,R),ll(null,n={value:i},a,{kind:"class",name:i.name,metadata:V},null,s),i=n.value,V&&Object.defineProperty(i,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:V})})(),Be(C,"styles",nt`
		:host {
			color: #8e9297;
			display: flex;
			font-weight: 400;
			font-size: 1rem;
			font-family: 'gg sans', 'Noto Sans', Whitney, 'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif;
			padding: 0px 1em;

			position: relative;
			word-wrap: break-word;
			-webkit-user-select: text;
			-moz-user-select: text;
			-ms-user-select: text;
			user-select: text;
			-webkit-box-flex: 0;
			-ms-flex: 0 0 auto;
			flex: 0 0 auto;
			padding-right: 0;
			min-height: 1.375rem;
			padding-right: 48px !important;
			margin-top: 1.0625rem;
		}

		:host([light-theme]) {
			color: #2e3338;
			border-color: #eceeef;
		}

		:host([channel-name]) {
			color: #fff;
		}

		:host([light-theme][channel-name]) {
			color: #060607;
		}

		:host([type='boost']) svg {
			color: #ff73fa;
		}

		:host([type='alert']) svg {
			color: #faa81a;
		}

		:host([type='error']) svg {
			color: #faa81a;
		}

		:host .discord-message-icon {
			margin-right: 16px;
			margin-top: 5px;
			min-width: 40px;
			display: flex;
			align-items: flex-start;
			justify-content: center;
		}

		:host .discord-message-icon svg {
			width: 16px;
			height: 16px;
		}

		:host .discord-message-timestamp {
			color: #72767d;
			font-size: 12px;
			margin-left: 3px;
		}

		:host([light-theme]) .discord-message-timestamp {
			color: #747f8d;
		}

		:host .discord-message-content {
			width: 100%;
			line-height: 160%;
			font-weight: normal;
			padding-top: 2px;
			display: flex;
			flex-direction: column;
		}

		:host .discord-message-content ::slotted(i) {
			font-style: normal;
			cursor: pointer;
			color: white;
			font-weight: 500;
		}

		:host([light-theme]) .discord-message-content ::slotted(i) {
			color: #060607;
		}

		:host .discord-message-content ::slotted(i:hover) {
			text-decoration: underline;
		}

		:host(:hover) {
			background-color: rgba(4, 4, 5, 0.07);
		}

		:host([light-theme]:hover) {
			background-color: rgba(6, 6, 7, 0.02);
		}

		:host([has-thread]):after {
			width: 2rem;
			left: 2.2rem;
			top: 1.75rem;
			border-left: 2px solid #4f545c !important;
			border-bottom: 2px solid #4f545c !important;
			border-bottom-left-radius: 8px !important;
			bottom: 29px;
			content: '';
			position: absolute;
		}

		:host([light-theme][has-thread]):after {
			border-color: #747f8d !important;
		}
	`),Fi(i,s),i})();var ud=function(a,n,s,i,l,c){function d(x){if(x!==void 0&&typeof x!="function")throw new TypeError("Function expected");return x}for(var h=i.kind,g=h==="getter"?"get":h==="setter"?"set":"value",p=!n&&a?i.static?a:a.prototype:null,m=n||(p?Object.getOwnPropertyDescriptor(p,i.name):{}),u,S=!1,w=s.length-1;w>=0;w--){var z={};for(var _ in i)z[_]=_==="access"?{}:i[_];for(var _ in i.access)z.access[_]=i.access[_];z.addInitializer=function(x){if(S)throw new TypeError("Cannot add initializers after decoration has completed");c.push(d(x||null))};var b=(0,s[w])(h==="accessor"?{get:m.get,set:m.set}:m[g],z);if(h==="accessor"){if(b===void 0)continue;if(b===null||typeof b!="object")throw new TypeError("Object expected");(u=d(b.get))&&(m.get=u),(u=d(b.set))&&(m.set=u),(u=d(b.init))&&l.unshift(u)}else(u=d(b))&&(h==="field"?l.unshift(u):m[g]=u)}p&&Object.defineProperty(p,i.name,m),S=!0},is=function(a,n,s){for(var i=arguments.length>2,l=0;l<n.length;l++)s=i?n[l].call(a,s):n[l].call(a);return i?s:void 0};let rk=(()=>{var z,_,b,x;let a=[lt("discord-tenor-video")],n,s=[],i,l=at,c,d=[],h=[],g,p=[],m=[],u,S=[],w=[];return z=class extends l{constructor(){super(...arguments);B(this,_,is(this,d,void 0));B(this,b,(is(this,h),is(this,p,void 0)));B(this,x,(is(this,m),is(this,S,void 0)));is(this,w)}get url(){return L(this,_)}set url(C){U(this,_,C)}get height(){return L(this,b)}set height(C){U(this,b,C)}get width(){return L(this,x)}set width(C){U(this,x,C)}render(){return F`
			<div class="discord-tenor-video-wrapper" height=${Le(this.height)} width=${Le(this.width)}>
				<a target="_blank" class="discord-tenor-video-original-link" href=${Le(this.url)}> </a>
				<video
					autoplay
					muted
					loop
					preload="auto"
					src=${Le(this.url)}
					class="discord-tenor-video"
					height=${Le(this.height)}
					width=${Le(this.width)}
				></video>
				<div class="discord-tenor-video-image-accessory">
					<div class="discord-tenor-video-gif-tag"></div>
				</div>
			</div>
		`}},_=new WeakMap,b=new WeakMap,x=new WeakMap,i=z,(()=>{const C=typeof Symbol=="function"&&Symbol.metadata?Object.create(l[Symbol.metadata]??null):void 0;c=[q()],g=[q({type:Number})],u=[q({type:Number})],ud(z,null,c,{kind:"accessor",name:"url",static:!1,private:!1,access:{has:A=>"url"in A,get:A=>A.url,set:(A,I)=>{A.url=I}},metadata:C},d,h),ud(z,null,g,{kind:"accessor",name:"height",static:!1,private:!1,access:{has:A=>"height"in A,get:A=>A.height,set:(A,I)=>{A.height=I}},metadata:C},p,m),ud(z,null,u,{kind:"accessor",name:"width",static:!1,private:!1,access:{has:A=>"width"in A,get:A=>A.width,set:(A,I)=>{A.width=I}},metadata:C},S,w),ud(null,n={value:i},a,{kind:"class",name:i.name,metadata:C},null,s),i=n.value,C&&Object.defineProperty(i,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:C})})(),Be(z,"styles",nt`
		:host {
			color: #dcddde;
			display: flex;
			font-size: 13px;
			line-height: 150%;
			margin-bottom: 8px;
			margin-top: 8px;
		}

		.discord-tenor-video-wrapper {
			max-width: 169px;
			width: 100%;
			cursor: pointer;
			display: block;
			position: relative;
			-webkit-user-select: text;
			-moz-user-select: text;
			user-select: text;
			overflow: hidden;
			border-radius: 3px;
		}

		.discord-tenor-video {
			-webkit-box-align: center;
			-webkit-box-pack: center;
			align-items: center;
			border-radius: 0;
			cursor: pointer;
			display: flex;
			height: 100%;
			justify-content: center;
			max-height: 100%;
			width: 100%;
			left: 0px;
			top: 0px;
		}

		.discord-tenor-video-original-link {
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			z-index: 1;
		}

		.discord-tenor-video-image-accessory {
			position: absolute;
			top: 6px;
			left: 6px;
			z-index: 3;
		}

		.discord-tenor-video-gif-tag {
			background-image: url('data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjIyIiB2aWV3Qm94PSIwIDAgMjkgMjIiIHdpZHRoPSIyOSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGNsaXBQYXRoIGlkPSJhIj48cGF0aCBkPSJtMCAwaDI5djIyaC0yOXoiLz48L2NsaXBQYXRoPjxnIGNsaXAtcGF0aD0idXJsKCNhKSI+PHBhdGggZD0ibTI2IDBoLTIzYy0xLjY1Njg1IDAtMyAxLjM0MzE1LTMgM3YxNmMwIDEuNjU2OSAxLjM0MzE1IDMgMyAzaDIzYzEuNjU2OSAwIDMtMS4zNDMxIDMtM3YtMTZjMC0xLjY1Njg1LTEuMzQzMS0zLTMtM3oiIGZpbGw9IiMyMDIyMjUiIGZpbGwtb3BhY2l0eT0iLjgiLz48ZyBmaWxsPSIjZmZmIj48cGF0aCBkPSJtOC4wMTcyNSAxNi4yMDU0Yy0uODQxIDAtMS41ODUzNC0uMjE3NS0yLjIzMy0uNjUyNS0uNjQ3NjctLjQzNS0xLjE1MDM0LTEuMDQ0LTEuNTA4LTEuODI3LS4zNTc2Ny0uNzkyNi0uNTM2NS0xLjcwMTMtLjUzNjUtMi43MjYgMC0xLjAxNDk3LjE4ODUtMS45MTM5Ny41NjU1LTIuNjk2OTcuMzg2NjYtLjc4My45NDI1LTEuMzk2ODMgMS42Njc1LTEuODQxNS43MzQ2Ni0uNDQ0NjYgMS42MDk1LS42NjcgMi42MjQ1LS42NjcuODYwMzMgMCAxLjYyODg1LjE4MzY3IDIuMzA1NDUuNTUxLjY4NjQuMzY3MzQgMS4yMDM1Ljg4NDUgMS41NTE1IDEuNTUxNWwtMS42Mzg1IDEuMTc0NWMtLjQ5My0uOTA4NjYtMS4yMjc2Mi0xLjM2My0yLjIwMzk1LTEuMzYzLS44ODkzNCAwLTEuNTcwODQuMjktMi4wNDQ1Ljg3LS40NzM2Ny41NzAzNC0uNzEwNSAxLjM3NzUtLjcxMDUgMi40MjE0NyAwIDEuMDUzNy4yMzY4MyAxLjg2NTcuNzEwNSAyLjQzNi40NzM2Ni41NzA0IDEuMTU1MTYuODU1NSAyLjA0NDUuODU1NS4zOTYzMyAwIC43NTg4My0uMDcyNSAxLjA4NzUtLjIxNzUuMzM4MzUtLjE1NDYuNTk5MzUtLjM2MjUuNzgyOTUtLjYyMzV2LTEuMjQ3aC0yLjMwNTQ1di0xLjg4NWg0LjM2NDQ1djUuNjg0aC0xLjcxMWwtLjI3NTUtLjk1N2MtLjU3MDI5Ljc3MzQtMS40MTYxMiAxLjE2LTIuNTM3NDUgMS4xNnoiLz48cGF0aCBkPSJtMTYuNTQ0NCAxNi4wMDI0aC0yLjExN3YtMTAuMDA0OTdoMi4xMTd6Ii8+PHBhdGggZD0ibTIwLjY5MzMgMTYuMDAyNGgtMi4xMTd2LTEwLjAwNDk3aDYuNjg0NXYxLjkxNGgtNC41Njc1djIuMzc3OTdoMy43MTJ2MS45MTRoLTMuNzEyeiIvPjwvZz48L2c+PC9zdmc+');
			width: 29px;
			height: 22px;
		}
	`),is(i,s),i})();var hd=function(a,n,s,i,l,c){function d(x){if(x!==void 0&&typeof x!="function")throw new TypeError("Function expected");return x}for(var h=i.kind,g=h==="getter"?"get":h==="setter"?"set":"value",p=!n&&a?i.static?a:a.prototype:null,m=n||(p?Object.getOwnPropertyDescriptor(p,i.name):{}),u,S=!1,w=s.length-1;w>=0;w--){var z={};for(var _ in i)z[_]=_==="access"?{}:i[_];for(var _ in i.access)z.access[_]=i.access[_];z.addInitializer=function(x){if(S)throw new TypeError("Cannot add initializers after decoration has completed");c.push(d(x||null))};var b=(0,s[w])(h==="accessor"?{get:m.get,set:m.set}:m[g],z);if(h==="accessor"){if(b===void 0)continue;if(b===null||typeof b!="object")throw new TypeError("Object expected");(u=d(b.get))&&(m.get=u),(u=d(b.set))&&(m.set=u),(u=d(b.init))&&l.unshift(u)}else(u=d(b))&&(h==="field"?l.unshift(u):m[g]=u)}p&&Object.defineProperty(p,i.name,m),S=!0},ns=function(a,n,s){for(var i=arguments.length>2,l=0;l<n.length;l++)s=i?n[l].call(a,s):n[l].call(a);return i?s:void 0};let sk=(()=>{var z,_,b,x;let a=[lt("discord-thread")],n,s=[],i,l=at,c,d=[],h=[],g,p=[],m=[],u,S=[],w=[];return z=class extends l{constructor(){super(...arguments);B(this,_,ns(this,d,"Thread"));B(this,b,(ns(this,h),ns(this,p,"See Thread")));B(this,x,(ns(this,m),ns(this,S,!1)));ns(this,w)}get name(){return L(this,_)}set name(C){U(this,_,C)}get cta(){return L(this,b)}set cta(C){U(this,b,C)}get lightTheme(){return L(this,x)}set lightTheme(C){U(this,x,C)}render(){return F`
			<div class="discord-thread-top">
				<span class="discord-thread-name">${this.name}</span>
				<span class="discord-thread-cta" aria-hidden="true"> ${this.cta} › </span>
			</div>
			<span class="discord-thread-bottom">
				<slot></slot>
			</span>
		`}},_=new WeakMap,b=new WeakMap,x=new WeakMap,i=z,(()=>{const C=typeof Symbol=="function"&&Symbol.metadata?Object.create(l[Symbol.metadata]??null):void 0;c=[q()],g=[q()],u=[pt({context:Rt}),q({type:Boolean,reflect:!0,attribute:"light-theme"})],hd(z,null,c,{kind:"accessor",name:"name",static:!1,private:!1,access:{has:A=>"name"in A,get:A=>A.name,set:(A,I)=>{A.name=I}},metadata:C},d,h),hd(z,null,g,{kind:"accessor",name:"cta",static:!1,private:!1,access:{has:A=>"cta"in A,get:A=>A.cta,set:(A,I)=>{A.cta=I}},metadata:C},p,m),hd(z,null,u,{kind:"accessor",name:"lightTheme",static:!1,private:!1,access:{has:A=>"lightTheme"in A,get:A=>A.lightTheme,set:(A,I)=>{A.lightTheme=I}},metadata:C},S,w),hd(null,n={value:i},a,{kind:"class",name:i.name,metadata:C},null,s),i=n.value,C&&Object.defineProperty(i,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:C})})(),Be(z,"styles",nt`
		:host {
			background-color: #2f3136;
			border-radius: 4px;
			cursor: pointer;
			margin-top: 8px;
			max-width: 480px;
			min-width: 0;
			padding: 8px;
			display: inline-flex;
			width: fit-content;
			flex-direction: column;
		}

		:host([light-theme]) {
			background-color: #f2f3f5;
		}

		:host .discord-thread-top {
			display: flex;
		}

		:host .discord-thread-bottom {
			font-size: 0.875rem;
			line-height: 1.125rem;
			align-items: center;
			color: #b9bbbe;
			display: flex;
			margin-top: 2px;
			white-space: nowrap;
		}

		:host([light-theme]) .discord-thread-bottom {
			color: #4f5660;
		}

		:host .discord-thread-name {
			font-size: 0.875rem;
			font-weight: 600;
			line-height: 1.125rem;
			color: white;
			margin-right: 8px;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}

		:host([light-theme]) .discord-thread-name {
			color: #060607;
		}

		:host .discord-thread-cta {
			color: #00aff4;
			flex-shrink: 0;
			font-size: 0.875rem;
			font-weight: 600;
			line-height: 1.125rem;
		}

		:host .discord-thread-cta:hover {
			text-decoration: underline;
		}

		.discord-thread:hover .discord-thread-cta {
			text-decoration: underline;
		}
	`),ns(i,s),i})();var Gi=function(a,n,s,i,l,c){function d(x){if(x!==void 0&&typeof x!="function")throw new TypeError("Function expected");return x}for(var h=i.kind,g=h==="getter"?"get":h==="setter"?"set":"value",p=!n&&a?i.static?a:a.prototype:null,m=n||(p?Object.getOwnPropertyDescriptor(p,i.name):{}),u,S=!1,w=s.length-1;w>=0;w--){var z={};for(var _ in i)z[_]=_==="access"?{}:i[_];for(var _ in i.access)z.access[_]=i.access[_];z.addInitializer=function(x){if(S)throw new TypeError("Cannot add initializers after decoration has completed");c.push(d(x||null))};var b=(0,s[w])(h==="accessor"?{get:m.get,set:m.set}:m[g],z);if(h==="accessor"){if(b===void 0)continue;if(b===null||typeof b!="object")throw new TypeError("Object expected");(u=d(b.get))&&(m.get=u),(u=d(b.set))&&(m.set=u),(u=d(b.init))&&l.unshift(u)}else(u=d(b))&&(h==="field"?l.unshift(u):m[g]=u)}p&&Object.defineProperty(p,i.name,m),S=!0},ha=function(a,n,s){for(var i=arguments.length>2,l=0;l<n.length;l++)s=i?n[l].call(a,s):n[l].call(a);return i?s:void 0};let lk=(()=>{var ge,re,j,G,ee,ae,X,se,K,J,le;let a=[lt("discord-thread-message")],n,s=[],i,l=at,c,d=[],h=[],g,p=[],m=[],u,S=[],w=[],z,_=[],b=[],x,O=[],R=[],C,A=[],I=[],H,$=[],Z=[],he,xe=[],V=[],T,W=[],ze=[],k,D=[],P=[];return ge=class extends l{constructor(){super(...arguments);B(this,re,ha(this,d,void 0));B(this,j,(ha(this,h),ha(this,p,"User")));B(this,G,(ha(this,m),ha(this,S,void 0)));B(this,ee,(ha(this,w),ha(this,_,!1)));B(this,ae,(ha(this,b),ha(this,O,!1)));B(this,X,(ha(this,R),ha(this,A,!1)));B(this,se,(ha(this,I),ha(this,$,!1)));B(this,K,(ha(this,Z),ha(this,xe,void 0)));B(this,J,(ha(this,V),ha(this,W,"1m ago")));B(this,le,(ha(this,ze),ha(this,D,!1)));ha(this,P)}get profile(){return L(this,re)}set profile(ue){U(this,re,ue)}get author(){return L(this,j)}set author(ue){U(this,j,ue)}get avatar(){return L(this,G)}set avatar(ue){U(this,G,ue)}get bot(){return L(this,ee)}set bot(ue){U(this,ee,ue)}get server(){return L(this,ae)}set server(ue){U(this,ae,ue)}get verified(){return L(this,X)}set verified(ue){U(this,X,ue)}get edited(){return L(this,se)}set edited(ue){U(this,se,ue)}get roleColor(){return L(this,K)}set roleColor(ue){U(this,K,ue)}get relativeTimestamp(){return L(this,J)}set relativeTimestamp(ue){U(this,J,ue)}get lightTheme(){return L(this,le)}set lightTheme(ue){U(this,le,ue)}resolveAvatar(ue){return xi[ue]??ue??xi.default}render(){const ue={author:this.author,bot:this.bot,verified:this.verified,server:this.server,roleColor:this.roleColor},ie=Reflect.get(pl,this.profile)??{},Me={...ue,...ie,avatar:this.resolveAvatar(ie.avatar??this.avatar)};return F`<img src=${Le(Me.avatar)} class="discord-thread-message-avatar" alt=${Le(Me.author)} />
			${De(Me.bot&&!Me.server,()=>F`<span class="discord-application-tag"> ${Me.verified?yi():null} App </span>`)}
			${De(Me.server&&!Me.bot,()=>F`<span class="discord-application-tag">Server</span>`)}
			<span class="discord-thread-message-username" style=${Pn({color:Me.roleColor})}> ${Me.author} </span>
			<div class="discord-thread-message-content">
				<slot></slot>
				${De(this.edited,()=>F`<span class="discord-message-edited">(edited)</span>`)}
			</div>
			<span class="discord-thread-message-timestamp">${this.relativeTimestamp}</span>`}},re=new WeakMap,j=new WeakMap,G=new WeakMap,ee=new WeakMap,ae=new WeakMap,X=new WeakMap,se=new WeakMap,K=new WeakMap,J=new WeakMap,le=new WeakMap,i=ge,(()=>{const ue=typeof Symbol=="function"&&Symbol.metadata?Object.create(l[Symbol.metadata]??null):void 0;c=[q()],g=[q()],u=[q()],z=[q({type:Boolean})],x=[q({type:Boolean})],C=[q({type:Boolean})],H=[q({type:Boolean})],he=[q({attribute:"role-color"})],T=[q({attribute:"relative-timestamp"})],k=[pt({context:Rt}),q({type:Boolean,reflect:!0,attribute:"light-theme"})],Gi(ge,null,c,{kind:"accessor",name:"profile",static:!1,private:!1,access:{has:ie=>"profile"in ie,get:ie=>ie.profile,set:(ie,Me)=>{ie.profile=Me}},metadata:ue},d,h),Gi(ge,null,g,{kind:"accessor",name:"author",static:!1,private:!1,access:{has:ie=>"author"in ie,get:ie=>ie.author,set:(ie,Me)=>{ie.author=Me}},metadata:ue},p,m),Gi(ge,null,u,{kind:"accessor",name:"avatar",static:!1,private:!1,access:{has:ie=>"avatar"in ie,get:ie=>ie.avatar,set:(ie,Me)=>{ie.avatar=Me}},metadata:ue},S,w),Gi(ge,null,z,{kind:"accessor",name:"bot",static:!1,private:!1,access:{has:ie=>"bot"in ie,get:ie=>ie.bot,set:(ie,Me)=>{ie.bot=Me}},metadata:ue},_,b),Gi(ge,null,x,{kind:"accessor",name:"server",static:!1,private:!1,access:{has:ie=>"server"in ie,get:ie=>ie.server,set:(ie,Me)=>{ie.server=Me}},metadata:ue},O,R),Gi(ge,null,C,{kind:"accessor",name:"verified",static:!1,private:!1,access:{has:ie=>"verified"in ie,get:ie=>ie.verified,set:(ie,Me)=>{ie.verified=Me}},metadata:ue},A,I),Gi(ge,null,H,{kind:"accessor",name:"edited",static:!1,private:!1,access:{has:ie=>"edited"in ie,get:ie=>ie.edited,set:(ie,Me)=>{ie.edited=Me}},metadata:ue},$,Z),Gi(ge,null,he,{kind:"accessor",name:"roleColor",static:!1,private:!1,access:{has:ie=>"roleColor"in ie,get:ie=>ie.roleColor,set:(ie,Me)=>{ie.roleColor=Me}},metadata:ue},xe,V),Gi(ge,null,T,{kind:"accessor",name:"relativeTimestamp",static:!1,private:!1,access:{has:ie=>"relativeTimestamp"in ie,get:ie=>ie.relativeTimestamp,set:(ie,Me)=>{ie.relativeTimestamp=Me}},metadata:ue},W,ze),Gi(ge,null,k,{kind:"accessor",name:"lightTheme",static:!1,private:!1,access:{has:ie=>"lightTheme"in ie,get:ie=>ie.lightTheme,set:(ie,Me)=>{ie.lightTheme=Me}},metadata:ue},D,P),Gi(null,n={value:i},a,{kind:"class",name:i.name,metadata:ue},null,s),i=n.value,ue&&Object.defineProperty(i,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:ue})})(),Be(ge,"styles",nt`
		:host {
			height: 18px;
			min-width: 0;
			display: flex;
			align-items: center;
			font-size: 0.875rem;
			line-height: 1.125rem;
		}

		:host .discord-thread-message-avatar {
			margin-right: 8px;
			flex: 0 0 auto;
			width: 16px;
			height: 16px;
			border-radius: 50%;
			user-select: none;
		}

		:host .discord-thread-message-username {
			flex-shrink: 0;
			font-size: inherit;
			line-height: inherit;
			margin-right: 0.25rem;
			opacity: 0.64;
			color: white;
			display: inline;
			vertical-align: baseline;
			position: relative;
			overflow: hidden;
		}

		:host([light-theme]) .discord-thread-message-username {
			color: #060607;
		}

		:host .discord-application-tag {
			background-color: #5865f2;
			color: #fff;
			font-size: 0.65em;
			margin-right: 5px;
			border-radius: 3px;
			line-height: 100%;
			text-transform: uppercase;
			display: flex;
			align-items: center;
			height: 0.9375rem;
			padding: 0 0.275rem;
			margin-top: 0.075em;
			border-radius: 0.1875rem;
		}

		:host .discord-application-tag-verified {
			display: inline-block;
			width: 0.9375rem;
			height: 0.9375rem;
			margin-left: -0.25rem;
		}

		:host .discord-thread-message-content {
			display: flex;
			align-items: baseline;
		}

		:host .discord-message-edited {
			color: #72767d;
			font-size: 10px;
			margin-left: 5px;
		}

		:host .discord-thread-message-timestamp {
			color: #72767d;
			flex-shrink: 0;
			margin-left: 8px;
			font-size: 0.875rem;
			line-height: 1.125rem;
		}

		:host([light-theme]) .discord-thread-message-timestamp,
		:host([light-theme]) .discord-message-edited {
			color: #747f8d;
		}
	`),ha(i,s),i})();var ok=function(a,n,s,i,l,c){function d(x){if(x!==void 0&&typeof x!="function")throw new TypeError("Function expected");return x}for(var h=i.kind,g=h==="getter"?"get":h==="setter"?"set":"value",p=!n&&a?i.static?a:a.prototype:null,m=n||(p?Object.getOwnPropertyDescriptor(p,i.name):{}),u,S=!1,w=s.length-1;w>=0;w--){var z={};for(var _ in i)z[_]=_==="access"?{}:i[_];for(var _ in i.access)z.access[_]=i.access[_];z.addInitializer=function(x){if(S)throw new TypeError("Cannot add initializers after decoration has completed");c.push(d(x||null))};var b=(0,s[w])(h==="accessor"?{get:m.get,set:m.set}:m[g],z);if(h==="accessor"){if(b===void 0)continue;if(b===null||typeof b!="object")throw new TypeError("Object expected");(u=d(b.get))&&(m.get=u),(u=d(b.set))&&(m.set=u),(u=d(b.init))&&l.unshift(u)}else(u=d(b))&&(h==="field"?l.unshift(u):m[g]=u)}p&&Object.defineProperty(p,i.name,m),S=!0},ck=function(a,n,s){for(var i=arguments.length>2,l=0;l<n.length;l++)s=i?n[l].call(a,s):n[l].call(a);return i?s:void 0};let dk=(()=>{var c;let a=[lt("discord-time")],n,s=[],i,l=at;return c=class extends l{render(){return F`<slot></slot>`}},i=c,(()=>{const h=typeof Symbol=="function"&&Symbol.metadata?Object.create(l[Symbol.metadata]??null):void 0;ok(null,n={value:i},a,{kind:"class",name:i.name,metadata:h},null,s),i=n.value,h&&Object.defineProperty(i,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:h})})(),Be(c,"styles",nt`
		:host {
			white-space: nowrap;
			background-color: #ffffff0f;
			border-radius: 3px;
			padding: 0 2px;
		}
	`),ck(i,s),i})();var uk=function(a,n,s,i,l,c){function d(x){if(x!==void 0&&typeof x!="function")throw new TypeError("Function expected");return x}for(var h=i.kind,g=h==="getter"?"get":h==="setter"?"set":"value",p=!n&&a?i.static?a:a.prototype:null,m=n||(p?Object.getOwnPropertyDescriptor(p,i.name):{}),u,S=!1,w=s.length-1;w>=0;w--){var z={};for(var _ in i)z[_]=_==="access"?{}:i[_];for(var _ in i.access)z.access[_]=i.access[_];z.addInitializer=function(x){if(S)throw new TypeError("Cannot add initializers after decoration has completed");c.push(d(x||null))};var b=(0,s[w])(h==="accessor"?{get:m.get,set:m.set}:m[g],z);if(h==="accessor"){if(b===void 0)continue;if(b===null||typeof b!="object")throw new TypeError("Object expected");(u=d(b.get))&&(m.get=u),(u=d(b.set))&&(m.set=u),(u=d(b.init))&&l.unshift(u)}else(u=d(b))&&(h==="field"?l.unshift(u):m[g]=u)}p&&Object.defineProperty(p,i.name,m),S=!0},hk=function(a,n,s){for(var i=arguments.length>2,l=0;l<n.length;l++)s=i?n[l].call(a,s):n[l].call(a);return i?s:void 0};let fk=(()=>{var c;let a=[lt("discord-underlined")],n,s=[],i,l=at;return c=class extends l{render(){return F`
			<u>
				<slot></slot>
			</u>
		`}},i=c,(()=>{const h=typeof Symbol=="function"&&Symbol.metadata?Object.create(l[Symbol.metadata]??null):void 0;uk(null,n={value:i},a,{kind:"class",name:i.name,metadata:h},null,s),i=n.value,h&&Object.defineProperty(i,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:h}),hk(i,s)})(),i})();var T3=function(a,n,s,i,l,c){function d(x){if(x!==void 0&&typeof x!="function")throw new TypeError("Function expected");return x}for(var h=i.kind,g=h==="getter"?"get":h==="setter"?"set":"value",p=!n&&a?i.static?a:a.prototype:null,m=n||(p?Object.getOwnPropertyDescriptor(p,i.name):{}),u,S=!1,w=s.length-1;w>=0;w--){var z={};for(var _ in i)z[_]=_==="access"?{}:i[_];for(var _ in i.access)z.access[_]=i.access[_];z.addInitializer=function(x){if(S)throw new TypeError("Cannot add initializers after decoration has completed");c.push(d(x||null))};var b=(0,s[w])(h==="accessor"?{get:m.get,set:m.set}:m[g],z);if(h==="accessor"){if(b===void 0)continue;if(b===null||typeof b!="object")throw new TypeError("Object expected");(u=d(b.get))&&(m.get=u),(u=d(b.set))&&(m.set=u),(u=d(b.init))&&l.unshift(u)}else(u=d(b))&&(h==="field"?l.unshift(u):m[g]=u)}p&&Object.defineProperty(p,i.name,m),S=!0},Gf=function(a,n,s){for(var i=arguments.length>2,l=0;l<n.length;l++)s=i?n[l].call(a,s):n[l].call(a);return i?s:void 0};let mk=(()=>{var g,p;let a=[lt("discord-unordered-list")],n,s=[],i,l=at,c,d=[],h=[];return g=class extends l{constructor(){super(...arguments);B(this,p,Gf(this,d,!1));Gf(this,h)}get nested(){return L(this,p)}set nested(S){U(this,p,S)}checkChildren(){if(!Array.from(this.children).every(w=>{const z=w.tagName.toLowerCase();return z==="discord-list-item"||z==="discord-unordered-list"||z==="discord-ordered-list"}))throw new Yn("All direct children inside of a <discord-unordered-list> components must be one of <discord-unordered-list>, <discord-ordered-list>, or <discord-list-item>.")}willUpdate(){var S,w;(((S=this.parentElement)==null?void 0:S.tagName.toLowerCase())==="discord-unordered-list"||((w=this.parentElement)==null?void 0:w.tagName.toLowerCase())==="discord-ordered-list")&&(this.nested=!0)}render(){return this.checkChildren(),F`<ul>
			<slot></slot>
		</ul>`}},p=new WeakMap,i=g,(()=>{const S=typeof Symbol=="function"&&Symbol.metadata?Object.create(l[Symbol.metadata]??null):void 0;c=[q({type:Boolean,reflect:!0})],T3(g,null,c,{kind:"accessor",name:"nested",static:!1,private:!1,access:{has:w=>"nested"in w,get:w=>w.nested,set:(w,z)=>{w.nested=z}},metadata:S},d,h),T3(null,n={value:i},a,{kind:"class",name:i.name,metadata:S},null,s),i=n.value,S&&Object.defineProperty(i,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:S})})(),Be(g,"styles",nt`
		:host > ul {
			list-style-image: initial;
			list-style: disc;
			list-style-position: outside;
			margin: 4px 0 0 16px;
			padding: 0px;
		}

		:host([nested]) > ul {
			list-style: circle;
		}
	`),Gf(i,s),i})();const pk=Ie`
	<path fill="currentColor" d="M4 6c0-1.1.9-2 2-2h3a1 1 0 0 0 0-2H6a4 4 0 0 0-4 4v3a1 1 0 0 0 2 0V6ZM4 18c0 1.1.9 2 2 2h3a1 1 0 1 1 0 2H6a4 4 0 0 1-4-4v-3a1 1 0 1 1 2 0v3ZM18 4a2 2 0 0 1 2 2v3a1 1 0 1 0 2 0V6a4 4 0 0 0-4-4h-3a1 1 0 1 0 0 2h3ZM20 18a2 2 0 0 1-2 2h-3a1 1 0 1 0 0 2h3a4 4 0 0 0 4-4v-3a1 1 0 1 0-2 0v3Z"></path>
`;function gk(a={}){return F`<svg ${Pe(a)} aria-hidden="true" role="img" width="24" height="24" fill="none" viewBox="0 0 24 24">${pk}</svg>`}const vk=Ie`
	<path fill="currentColor" d="M6 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H6ZM15 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-3Z"></path>
`;function bk(a={}){return F`<svg ${Pe(a)} aria-hidden="true" role="img" width="16" height="16" fill="none" viewBox="0 0 24 24">${vk}</svg>`}var fd=function(a,n,s,i,l,c){function d(x){if(x!==void 0&&typeof x!="function")throw new TypeError("Function expected");return x}for(var h=i.kind,g=h==="getter"?"get":h==="setter"?"set":"value",p=!n&&a?i.static?a:a.prototype:null,m=n||(p?Object.getOwnPropertyDescriptor(p,i.name):{}),u,S=!1,w=s.length-1;w>=0;w--){var z={};for(var _ in i)z[_]=_==="access"?{}:i[_];for(var _ in i.access)z.access[_]=i.access[_];z.addInitializer=function(x){if(S)throw new TypeError("Cannot add initializers after decoration has completed");c.push(d(x||null))};var b=(0,s[w])(h==="accessor"?{get:m.get,set:m.set}:m[g],z);if(h==="accessor"){if(b===void 0)continue;if(b===null||typeof b!="object")throw new TypeError("Object expected");(u=d(b.get))&&(m.get=u),(u=d(b.set))&&(m.set=u),(u=d(b.init))&&l.unshift(u)}else(u=d(b))&&(h==="field"?l.unshift(u):m[g]=u)}p&&Object.defineProperty(p,i.name,m),S=!0},rs=function(a,n,s){for(var i=arguments.length>2,l=0;l<n.length;l++)s=i?n[l].call(a,s):n[l].call(a);return i?s:void 0};let yk=(()=>{var z,_,b,x;let a=[lt("discord-video-attachment")],n,s=[],i,l=y2,c,d=[],h=[],g,p=[],m=[],u,S=[],w=[];return z=class extends l{constructor(){super(...arguments);B(this,_,rs(this,d,void 0));B(this,b,(rs(this,h),rs(this,p,void 0)));B(this,x,(rs(this,m),rs(this,S,!1)));Be(this,"playPausePopAnimationContainerRef",(rs(this,w),cl()))}get href(){return L(this,_)}set href(C){U(this,_,C)}get poster(){return L(this,b)}set poster(C){U(this,b,C)}get lightTheme(){return L(this,x)}set lightTheme(C){U(this,x,C)}async handleFullScreenClicked(){this.mediaComponentRef.value&&await this.mediaComponentRef.value.requestFullscreen()}handleHasStartedPlayingOrHasPaused(){this.playPausePopAnimationContainerRef.value&&this.playPausePopAnimationContainerRef.value.classList.add("discord-video-attachment-overlay-content-hidden"),globalThis.setTimeout(()=>{this.playPausePopAnimationContainerRef.value&&this.playPausePopAnimationContainerRef.value.classList.remove("discord-video-attachment-overlay-content-hidden")},200)}render(){return F`<div class="discord-media-attachment-non-visual-media-item-container">
			<div class="discord-video-attachment-one-by-one-grid">
				<div class="discord-media-attachment-mosaic-item-media">
					<div class="discord-video-attachment-image-wrapper">
						<div class="discord-video-attachment-loading-overlay">
							<div
								class=${Lt({"discord-video-attachment-wrapper":!0,"discord-video-attachment-wrapper-light-theme":this.lightTheme})}
							>
								<video
									${un(this.mediaComponentRef)}
									class="discord-video-attachment-video-container"
									playsinline
									height="315"
									preload="metadata"
									width="550"
									role="button"
									poster=${Le(this.poster)}
									@play=${this.handleHasStartedPlayingOrHasPaused}
									@pause=${this.handleHasStartedPlayingOrHasPaused}
									@progress=${this.displayBufferedAmount}
									@click=${this.handleClickPlayPauseIcon}
									@ended=${this.handleEnded}
								>
									<source src=${Le(this.href)} />
								</video>
								<div class="discord-video-attachment-video-controls">
									<div class="discord-media-attachment-controls" style="transform: translateY(0%)">
										<div
											class="discord-media-attachment-video-button"
											tabindex="0"
											aria-label="${this.isPlaying?"Pause":"Play"}"
											role="button"
											@click=${this.handleClickPlayPauseIcon}
											@keydown=${this.handleSpaceToPlayPause}
										>
											${De(this.hasEnded,()=>k2({class:"discord-media-attachment-control-icon"}),()=>De(this.isPlaying,()=>C2({class:"discord-media-attachment-control-icon"}),()=>A2({class:"discord-media-attachment-control-icon"})))}
										</div>
										<div class="discord-media-attachment-duration-time-wrapper">
											<span role="status" class="discord-media-attachment-duration-time-display"
												>${this.currentPlaybackPosition}</span
											>
											<span
												role="separator"
												class="discord-media-attachment-duration-time-display discord-media-attachment-duration-time-separator"
												>/</span
											>
											<span class="discord-media-attachment-duration-time-display">${this.totalMediaDuration}</span>
										</div>
										<div class="discord-media-attachment-horizontal">
											<div class="discord-media-attachment-media-bar-interaction">
												<input
													type="range"
													${un(this.seekSliderRef)}
													class="discord-media-attachment-playback-control"
													@input=${this.handleSeekSliderInput}
													@change=${this.handleSeekSliderChange}
													max="100"
													value="0"
												/>
											</div>
										</div>
										<div class="discord-media-attachment-flex">
											<div class="discord-media-attachment-flex-container">
												<div ${un(this.volumeControlRef)} class="discord-media-attachment-button-slider">
													<div
														class="discord-media-attachment-volume-vertical"
														@mouseenter=${this.handleVolumeVerticalEnter}
														@mouseleave=${this.handleVolumeVerticalLeave}
													>
														<input
															${un(this.volumeControlInputRef)}
															type="range"
															class="discord-media-attachment-volume-slider"
															@input=${this.handleVolumeSliderInput}
															max="100"
															value="100"
														/>
													</div>
												</div>
												<button
													aria-label="Control volume"
													type="button"
													class="discord-media-attachment-button"
													@focus=${this.handleVolumeVerticalFocus}
													@blur=${this.handleVolumeVerticalBlur}
													@mouseover=${this.handleVolumeVerticalEnter}
													@mouseout=${this.handleVolumeVerticalLeave}
													@click=${this.handleClickMuteIcon}
												>
													<div class="discord-media-attachment-button-content">
														${De(this.currentVolume===0||this.isMuted,()=>D2({class:"discord-media-attachment-button-control-icon"}),()=>De(this.currentVolume<=.5,()=>N2({class:"discord-media-attachment-button-control-icon"}),()=>j2({class:"discord-media-attachment-button-control-icon"})))}
													</div>
												</button>
											</div>
										</div>
										<div>
											<button
												aria-label="Full screen"
												type="button"
												class="discord-media-attachment-button"
												@click=${this.handleFullScreenClicked}
											>
												<div class="discord-media-attachment-button-content">
													${gk({class:"discord-media-attachment-button-control-icon"})}
												</div>
											</button>
										</div>
									</div>
								</div>
								<div class="discord-video-attachment-play-pause-pop">
									${bk({class:"discord-video-attachment-play-pause-pop-icon"})}
								</div>
								<div ${un(this.playPausePopAnimationContainerRef)}></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="discord-button-download-attachment">
				<a
					class="discord-link-download-attachment"
					aria-label="Download"
					href="${Le(this.href)}"
					rel="noreferrer noopener"
					target="_blank"
					role="button"
					tabindex="0"
				>
					${s0()}
				</a>
			</div>
		</div>`}},_=new WeakMap,b=new WeakMap,x=new WeakMap,i=z,(()=>{const C=typeof Symbol=="function"&&Symbol.metadata?Object.create(l[Symbol.metadata]??null):void 0;c=[q()],g=[q()],u=[pt({context:Rt,subscribe:!0}),q({type:Boolean,reflect:!0,attribute:"light-theme"})],fd(z,null,c,{kind:"accessor",name:"href",static:!1,private:!1,access:{has:A=>"href"in A,get:A=>A.href,set:(A,I)=>{A.href=I}},metadata:C},d,h),fd(z,null,g,{kind:"accessor",name:"poster",static:!1,private:!1,access:{has:A=>"poster"in A,get:A=>A.poster,set:(A,I)=>{A.poster=I}},metadata:C},p,m),fd(z,null,u,{kind:"accessor",name:"lightTheme",static:!1,private:!1,access:{has:A=>"lightTheme"in A,get:A=>A.lightTheme,set:(A,I)=>{A.lightTheme=I}},metadata:C},S,w),fd(null,n={value:i},a,{kind:"class",name:i.name,metadata:C},null,s),i=n.value,C&&Object.defineProperty(i,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:C})})(),Be(z,"styles",[x2,_2,b2,nt`
			:host {
				display: grid;
				height: -moz-fit-content;
				height: fit-content;
				grid-auto-flow: row;
				grid-row-gap: 0.25rem;
				grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
				text-indent: 0;
				min-height: 0;
				min-width: 0;
				padding-top: 0.125rem;
				padding-bottom: 0.125rem;
				position: relative;

				--seek-before-width: 0%;
				--buffered-width: 0%;
				--volume-slider-opacity: 0;
			}

			:host .discord-button-download-attachment {
				top: 5px !important;
				right: 8px !important;
			}

			.discord-video-attachment-one-by-one-grid {
				max-width: 100%;
				border-radius: 8px;
				overflow: hidden;
				display: inline-block;
				width: -moz-fit-content;
				width: fit-content;
				max-height: 350px;
			}

			.discord-media-attachment-mosaic-item-media {
				overflow: hidden;
				align-items: start;
				justify-self: auto !important;
			}

			.discord-video-attachment-image-wrapper {
				display: block;
				max-height: inherit;
				margin: auto;
				width: 550px;
				height: 100%;
				flex: auto;
				position: relative;
				-webkit-user-select: text;
				-moz-user-select: text;
				user-select: text;
				overflow: hidden;
				border-radius: 3px;
			}

			.discord-video-attachment-loading-overlay {
				aspect-ratio: 1.74603 / 1;
				width: 100%;
				height: 100%;
			}

			.discord-video-attachment-wrapper {
				height: 100%;
				width: 100%;
				max-height: inherit;
				position: relative;
				overflow: hidden;
				border-radius: 3px;
				color: hsl(0 calc(1 * 0%) 100% / 1);
				-webkit-user-select: none;
				-moz-user-select: none;
				user-select: none;
				background-color: hsl(225 calc(1 * 6.3%) 12.5% / 1);
			}

			.discord-video-attachment-wrapper-light-theme.discord-video-attachment-wrapper {
				background-color: hsl(0 calc(1 * 0%) 97.6% / 1);
			}

			.discord-video-attachment-video-container {
				width: 100%;
				height: 100%;
				max-height: inherit;
				object-fit: cover;
				position: relative;
				display: block;
				-o-object-fit: cover;
				border-radius: 3px;
			}

			.discord-video-attachment-video-container::-webkit-media-controls-enclosure {
				display: none !important;
			}

			.discord-video-attachment-video-controls {
				position: absolute;
				left: 0;
				right: 0;
				bottom: -10px;
				padding-bottom: 10px;
				width: 100%;
				display: flex;
				align-items: center;
				background-color: hsl(0 calc(1 * 0%) 0% / 0.6);
				height: 32px;
			}

			.discord-video-attachment-video-button {
				margin-right: 8px;
			}

			.discord-video-attachment-control-icon {
				display: block;
				width: 24px;
				height: 24px;
				padding: 4px;
				cursor: pointer;
				flex: 0 0 auto;
				opacity: 0.6;
			}

			.discord-video-attachment-duration-time-wrapper {
				flex: 0 0 auto;
				margin: 4px;
				height: 12px;
			}

			.discord-video-attachment-duration-time-display {
				font-weight: 500;
				display: inline-block;
				font-family:
					'gg mono', 'Source Code Pro', Consolas, 'Andale Mono WT', 'Andale Mono', 'Lucida Console', 'Lucida Sans Typewriter',
					'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Liberation Mono', 'Nimbus Mono L', Monaco, 'Courier New', Courier, monospace;
				font-size: 12px;
				line-height: 12px;
				vertical-align: text-top;
			}

			.discord-video-attachment-duration-time-separator {
				margin: 0 2px;
			}

			.discord-video-attachment-full-screen-button {
				cursor: pointer;
				margin-right: 8px;
				width: auto;
				background: transparent;
				color: currentColor;
				border: 0;
				padding: 0;
				margin: 0;
				position: relative;
				display: flex;
				justify-content: center;
				align-items: center;
				box-sizing: border-box;
				border-radius: 3px;
				font-size: 14px;
				font-weight: 500;
				line-height: 16px;
				-webkit-user-select: none;
				-moz-user-select: none;
				user-select: none;
			}

			.discord-video-attachment-play-pause-pop {
				opacity: 0;
				transform: scale(2.5) translateZ(0px);
				position: absolute;
				top: 50%;
				left: 50%;
				margin-left: -23px;
				margin-top: -23px;
				padding: 12px;
				width: 24px;
				height: 24px;
				background-color: hsl(0 calc(1 * 0%) 0% / 0.6);
				color: hsl(0 calc(1 * 0%) 100% / 1);
				border-radius: 50%;
				pointer-events: none;
			}

			.discord-video-attachment-play-pause-pop-icon {
				width: 24px;
				height: 24px;
				display: block;
			}

			.discord-video-attachment-horizontal {
				width: 100%;
				display: flex;
				align-self: stretch;
			}

			.discord-video-attachment-media-bar-interaction {
				position: relative;
				flex: 1 1 auto;
				align-self: stretch;
				display: flex;
				align-items: center;
				cursor: pointer;
				margin: 0 7px;
			}

			@keyframes playPausePopIconKeyframes {
				0% {
					opacity: 0;
				}
				100% {
					opacity: 0;
				}
			}

			.discord-video-attachment-overlay-content-hidden {
				animation: playPausePopIconKeyframes 0.2s ease-in-out infinite;
			}
		`]),rs(i,s),i})();/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _k=new Set(["children","localName","ref","style","className"]),C3=new WeakMap,A3=(a,n,s,i,l)=>{const c=l==null?void 0:l[n];c===void 0?(a[n]=s,s==null&&n in HTMLElement.prototype&&a.removeAttribute(n)):s!==i&&((d,h,g)=>{let p=C3.get(d);p===void 0&&C3.set(d,p=new Map);let m=p.get(h);g!==void 0?m===void 0?(p.set(h,m={handleEvent:g}),d.addEventListener(h,m)):m.handleEvent=g:m!==void 0&&(p.delete(h),d.removeEventListener(h,m))})(a,c,s)},xk=({react:a,tagName:n,elementClass:s,events:i,displayName:l})=>{const c=new Set(Object.keys(i??{})),d=a.forwardRef(((h,g)=>{const p=a.useRef(new Map),m=a.useRef(null),u={},S={};for(const[w,z]of Object.entries(h))_k.has(w)?u[w==="className"?"class":w]=z:c.has(w)||w in s.prototype?S[w]=z:u[w]=z;return a.useLayoutEffect((()=>{if(m.current===null)return;const w=new Map;for(const z in S)A3(m.current,z,h[z],p.current.get(z),i),p.current.delete(z),w.set(z,h[z]);for(const[z,_]of p.current)A3(m.current,z,void 0,_,i);p.current=w})),a.useLayoutEffect((()=>{var w;(w=m.current)==null||w.removeAttribute("defer-hydration")}),[]),u.suppressHydrationWarning=!0,a.createElement(n,{...u,ref:a.useCallback((w=>{m.current=w,typeof g=="function"?g(w):g!==null&&(g.current=w)}),[g])})}));return d.displayName=l??s.name,d};var wk=Object.defineProperty,zk=(a,n)=>wk(a,"name",{value:n,configurable:!0});function rt(a,n){return xk({tagName:a,elementClass:n,react:Ae})}zk(rt,"createReactComponent");rt("discord-action-row",D9);var Sk=rt("discord-attachments",R9);rt("discord-audio-attachment",WT);rt("discord-author-info",cC);rt("discord-bold",hC);rt("discord-button",pC);rt("discord-code",gC);rt("discord-command",CC);rt("discord-custom-emoji",AC);var Mk=rt("discord-embed",kC);rt("discord-embed-description",DC);var Ek=rt("discord-embed-field",OC),Tk=rt("discord-embed-fields",$C);rt("discord-embed-footer",VC);rt("discord-file-attachment",UC);rt("discord-header",IC);rt("discord-image-attachment",PC);rt("discord-input-text",mm);rt("discord-invite",QC);rt("discord-italic",JC);rt("discord-link",ZT);rt("discord-list-item",aA);rt("discord-mention",mA);var Ck=rt("discord-message",vA),k3=rt("discord-messages",PT);rt("discord-modal",wA);rt("discord-ordered-list",zA);rt("discord-poll",SA);rt("discord-poll-answer",MA);rt("discord-pre",EA);rt("discord-quote",TA);rt("discord-reaction",CA);rt("discord-reactions",jA);var Ak=rt("discord-reply",V2);rt("discord-spoiler",NA);rt("discord-string-select-menu",DA);rt("discord-string-select-menu-option",OA);rt("discord-subscript",HA);rt("discord-system-message",nk);rt("discord-tenor-video",rk);rt("discord-thread",sk);rt("discord-thread-message",lk);rt("discord-time",dk);rt("discord-underlined",fk);rt("discord-unordered-list",mk);rt("discord-verified-author-tag",eC);rt("discord-video-attachment",yk);function Za(a){return a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function vi(a,n=0){if(n>10)return[{type:"text",content:a}];const s=[];let i=0;for(;i<a.length;){if(a.substr(i,3)==="***"||a.substr(i,3)==="___"){const m=a.substr(i,3),u=a.indexOf(m,i+3);if(u!==-1&&u>i+3){const S=a.substring(i+3,u);s.push({type:"bold",content:[{type:"italic",content:vi(S,n+1)}]}),i=u+3;continue}}if(a.substr(i,2)==="**"){const m=a.indexOf("**",i+2);if(m!==-1&&m>i+2){const u=a.substring(i+2,m);s.push({type:"bold",content:vi(u,n+1)}),i=m+2;continue}}if(a.substr(i,2)==="__"){const m=a.indexOf("__",i+2);if(m!==-1&&m>i+2){const u=a.substring(i+2,m);s.push({type:"underline",content:vi(u,n+1)}),i=m+2;continue}}if(a[i]==="*"&&a[i-1]!=="*"&&a[i+1]!=="*"){const m=a.indexOf("*",i+1);if(m!==-1&&m>i+1&&a[m+1]!=="*"){const u=a.substring(i+1,m);s.push({type:"italic",content:vi(u,n+1)}),i=m+1;continue}}if(a[i]==="_"&&a[i-1]!=="_"&&a[i+1]!=="_"){const m=a.indexOf("_",i+1);if(m!==-1&&m>i+1&&a[m+1]!=="_"){const u=a.substring(i+1,m);s.push({type:"italic",content:vi(u,n+1)}),i=m+1;continue}}if(a.substr(i,2)==="~~"){const m=a.indexOf("~~",i+2);if(m!==-1&&m>i+2){const u=a.substring(i+2,m);s.push({type:"strikethrough",content:vi(u,n+1)}),i=m+2;continue}}if(a.substr(i,2)==="||"){const m=a.indexOf("||",i+2);if(m!==-1&&m>i+2){const u=a.substring(i+2,m);s.push({type:"spoiler",content:vi(u,n+1)}),i=m+2;continue}}if(a[i]==="`"){const m=a.indexOf("`",i+1);if(m!==-1&&m>i+1){const u=a.substring(i+1,m);s.push({type:"code",content:u}),i=m+1;continue}}const l=a.substr(i).match(/^\[([^\]]+)\]\(([^)]+)\)/);if(l){const m=l[1],u=l[2];s.push({type:"maskedLink",content:m,url:u}),i+=l[0].length;continue}const c=a.substr(i).match(/^<t:(-?\d+)(?::([tTdDfFR]))?>/);if(c){const m=c[1],u=c[2]||"f";s.push({type:"timestamp",content:"",timestamp:m,timestampStyle:u}),i+=c[0].length;continue}const d=a.substr(i).match(/^<(a)?:([^:]+):(\d+)>/);if(d){const m=!!d[1],u=d[2],S=d[3];s.push({type:"emoji",content:u,emojiName:u,emojiId:S,emojiAnimated:m}),i+=d[0].length;continue}const h=a.substr(i).match(/^<(@&?|#)([^>]+)>/);if(h){const m=h[1],u=h[2];let S="user";m==="@&"?S="role":m==="#"?S="channel":m==="@"&&(S="user"),s.push({type:"mention",content:u,mentionType:S}),i+=h[0].length;continue}const g=a.substr(i).match(/^https?:\/\/[^\s<]+[^<.,:;"')\]\s]/);if(g){const m=g[0];s.push({type:"url",content:m,url:m}),i+=m.length;continue}let p="";for(;i<a.length&&a[i]!=="*"&&a[i]!=="_"&&a[i]!=="~"&&a[i]!=="|"&&a[i]!=="`"&&a[i]!=="["&&a[i]!=="<"&&!a.substr(i).match(/^https?:\/\//);)p+=a[i],i++;p?s.push({type:"text",content:p}):i<a.length&&(s.push({type:"text",content:a[i]}),i++)}return s}function kk(a){const n=a.split(`
`),s=[];let i=0;for(;i<n.length;){const l=n[i],c=l.match(/^```(\w*)/);if(c){const w=c[1]||"";let z="";for(i++;i<n.length&&!n[i].match(/^```$/);)z+=(z?`
`:"")+n[i],i++;s.push({type:"codeblock",content:z,language:w}),i++;continue}if(l.match(/^>>> /)){let w=l.substring(4);for(i++;i<n.length;)w+=`
`+n[i],i++;s.push({type:"blockquote",content:vi(w)});continue}if(l.match(/^> /)){const w=[];for(;i<n.length&&n[i].match(/^> /);)w.push(n[i].substring(2)),i++;s.push({type:"blockquote",content:vi(w.join(`
`))});continue}const d=l.match(/^# (.+)$/);if(d){s.push({type:"text",content:`<h1 style="font-size: 1.5em; font-weight: 700; margin: 8px 0 4px 0; color: #ffffff;">${Za(d[1])}</h1>`}),i++;continue}const h=l.match(/^## (.+)$/);if(h){s.push({type:"text",content:`<h2 style="font-size: 1.25em; font-weight: 600; margin: 6px 0 4px 0; color: #ffffff;">${Za(h[1])}</h2>`}),i++;continue}const g=l.match(/^### (.+)$/);if(g){s.push({type:"text",content:`<h3 style="font-size: 1.1em; font-weight: 600; margin: 4px 0 4px 0; color: #ffffff;">${Za(g[1])}</h3>`}),i++;continue}const p=l.match(/^-# (.+)$/);if(p){s.push({type:"subtext",content:vi(p[1])}),i++;continue}if(l.match(/^[\*\-] (.+)$/)){const w=[];for(;i<n.length&&n[i].match(/^[\*\-] (.+)$/);){const z=n[i].match(/^[\*\-] (.+)$/);z&&w.push(z[1]),i++}s.push({type:"text",content:`<ul style="margin: 4px 0; padding-left: 20px;">${w.map(z=>`<li>${cn(vi(z))}</li>`).join("")}</ul>`});continue}if(l.match(/^\d+\. (.+)$/)){const w=[];for(;i<n.length&&n[i].match(/^\d+\. (.+)$/);){const z=n[i].match(/^\d+\. (.+)$/);z&&w.push(z[1]),i++}s.push({type:"text",content:`<ol style="margin: 4px 0; padding-left: 20px;">${w.map(z=>`<li>${cn(vi(z))}</li>`).join("")}</ol>`});continue}const S=vi(l);s.push(...S),i<n.length-1&&s.push({type:"text",content:`
`}),i++}return s}function jk(a,n){const s=new Date(parseInt(a)*1e3);if(isNaN(s.getTime()))return`<t:${a}:${n}>`;switch(n){case"t":return s.toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"});case"T":return s.toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit",second:"2-digit"});case"d":return s.toLocaleDateString("en-US",{month:"2-digit",day:"2-digit",year:"numeric"});case"D":return s.toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"});case"f":return s.toLocaleString("en-US",{month:"long",day:"numeric",year:"numeric",hour:"numeric",minute:"2-digit"});case"F":return s.toLocaleString("en-US",{weekday:"long",month:"long",day:"numeric",year:"numeric",hour:"numeric",minute:"2-digit"});case"R":const l=Date.now()-s.getTime(),c=Math.floor(Math.abs(l)/1e3),d=Math.floor(c/60),h=Math.floor(d/60),g=Math.floor(h/24),p=Math.floor(g/30),m=Math.floor(g/365);return m>0?`${m} year${m!==1?"s":""} ago`:p>0?`${p} month${p!==1?"s":""} ago`:g>0?`${g} day${g!==1?"s":""} ago`:h>0?`${h} hour${h!==1?"s":""} ago`:d>0?`${d} minute${d!==1?"s":""} ago`:`${c} second${c!==1?"s":""} ago`;default:return s.toLocaleString("en-US",{month:"long",day:"numeric",year:"numeric",hour:"numeric",minute:"2-digit"})}}function cn(a,n=!1){const s=a.every(c=>c.type==="emoji"||c.type==="text"&&c.content.trim()===""),i=a.some(c=>c.type==="emoji"),l=s&&i;return a.map(c=>{switch(c.type){case"text":const d=c.content;return d.startsWith("<h1")||d.startsWith("<h2")||d.startsWith("<h3")||d.startsWith("<ul")||d.startsWith("<ol")?d:d===`
`?"<br>":Za(d);case"bold":return`<strong>${cn(c.content)}</strong>`;case"italic":return`<em>${cn(c.content)}</em>`;case"underline":return`<u>${cn(c.content)}</u>`;case"strikethrough":return`<s>${cn(c.content)}</s>`;case"code":return`<code>${Za(c.content)}</code>`;case"codeblock":const h=c.language||"";return`<pre><code class="language-${Za(h)}">${Za(c.content)}</code></pre>`;case"spoiler":return`<span class="spoiler">${cn(c.content)}</span>`;case"blockquote":return`<blockquote>${cn(c.content)}</blockquote>`;case"url":return`<a href="${Za(c.url)}" target="_blank" rel="noopener noreferrer">${Za(c.content)}</a>`;case"maskedLink":return`<a href="${Za(c.url)}" target="_blank" rel="noopener noreferrer">${Za(c.content)}</a>`;case"subtext":return`<span style="font-size: 0.75em; color: #b9bbbe;">${cn(c.content)}</span>`;case"timestamp":return`<span style="background-color: rgba(88, 101, 242, 0.3); padding: 0 2px; border-radius: 3px;">${Za(jk(c.timestamp,c.timestampStyle))}</span>`;case"mention":{const g=c.mentionType||"user";return`<span style="background-color: rgba(88, 101, 242, 0.3); color: ${c.mentionColor||"#5865f2"}; padding: 0 2px; border-radius: 3px; font-weight: 500;">${g==="user"||g==="role"?"@":"#"}${Za(c.content)}</span>`}case"emoji":{const g=c.emojiAnimated?"gif":"png",p=`https://cdn.discordapp.com/emojis/${c.emojiId}.${g}`,m=l?"46px":"24px";return`<img src="${p}" alt=":${Za(c.emojiName)}:" title=":${Za(c.emojiName)}:" style="width: ${m}; height: ${m}; vertical-align: bottom; display: inline-block;" class="discord-custom-emoji" />`}default:return Za(c.content)}}).join("")}function Xf(a){if(!a)return"";const n=kk(a);return cn(n)}function Nk({blocks:a,authors:n}){y.useEffect(()=>{const d=document.createElement("style");d.textContent=`
      discord-messages {
        background-color: #36393f;
        border-radius: 8px;
      }
      discord-message {
        margin-bottom: 16px;
      }
      discord-message:last-child {
        margin-bottom: 0;
      }
      discord-message code {
        background-color: #2f3136;
        padding: 2px 4px;
        border-radius: 3px;
        font-family: 'Consolas', 'Courier New', monospace;
        font-size: 0.875em;
        color: #dcddde;
      }
      discord-message pre {
        background-color: #2f3136;
        padding: 8px;
        border-radius: 4px;
        overflow-x: auto;
        margin: 4px 0;
        border: 1px solid #202225;
      }
      discord-message pre code {
        background-color: transparent;
        padding: 0;
        font-size: 0.875em;
      }
      discord-message blockquote {
        border-left: 4px solid #4f545c;
        padding-left: 12px;
        margin: 4px 0;
        color: #dcddde;
      }
      discord-message strong {
        font-weight: 700;
        color: #ffffff;
      }
      discord-message em {
        font-style: italic;
      }
      discord-message u {
        text-decoration: underline;
      }
      discord-message s {
        text-decoration: line-through;
      }
      discord-message .spoiler {
        background-color: #202225;
        color: transparent;
        border-radius: 3px;
        padding: 0 2px;
        cursor: pointer;
        transition: all 0.1s;
        user-select: none;
      }
      discord-message .spoiler:hover,
      discord-message .spoiler:active {
        background-color: rgba(32, 34, 37, 0.6);
        color: #dcddde;
      }
      discord-message a {
        color: #00aff4;
        text-decoration: none;
      }
      discord-message a:hover {
        text-decoration: underline;
      }
      discord-embed-description code {
        background-color: rgba(0, 0, 0, 0.1);
        padding: 2px 4px;
        border-radius: 3px;
        font-family: 'Consolas', 'Courier New', monospace;
        font-size: 0.875em;
      }
      discord-embed-fields code {
        background-color: rgba(0, 0, 0, 0.1);
        padding: 2px 4px;
        border-radius: 3px;
        font-family: 'Consolas', 'Courier New', monospace;
        font-size: 0.875em;
      }
      discord-message ul {
        list-style-type: disc;
        color: #dcddde;
      }
      discord-message ol {
        list-style-type: decimal;
        color: #dcddde;
      }
      discord-message li {
        color: #dcddde;
      }
    `,document.head.appendChild(d);const h=g=>{const p=g.target;p.classList.contains("spoiler")&&(p.style.backgroundColor="rgba(32, 34, 37, 0.6)",p.style.color="#dcddde")};return document.addEventListener("click",h),()=>{document.head.removeChild(d),document.removeEventListener("click",h)}},[]);const s=d=>d?n.find(h=>h.id===d):null,i=[];let l=null,c=[];for(const d of a)d.type==="author"?(l&&c.length>0&&(i.push({author:l,blocks:c}),c=[]),l=s(d.data.authorId)||null):l&&c.push(d);return l&&c.length>0&&i.push({author:l,blocks:c}),i.length===0?M.jsx("div",{className:"bg-[#36393f] rounded-lg overflow-hidden p-4",children:M.jsx(k3,{children:M.jsx("div",{className:"flex items-center justify-center h-64 text-gray-400",children:"Add an author to start building your message"})})}):M.jsx("div",{className:"bg-[#36393f] rounded-lg overflow-hidden p-4",children:M.jsx(k3,{children:i.map((d,h)=>{var _;const g=d.blocks.filter(b=>b.type==="message"),p=g.filter(b=>b.data.content).map(b=>b.data.content).join(`
`),m=(_=g.find(b=>b.data.reply))==null?void 0:_.data.reply,u=m?n.find(b=>b.id===m.authorId):null,S=g.some(b=>b.data.edited),w=d.blocks.filter(b=>b.type==="embed"&&b.data.embed),z=d.blocks.filter(b=>b.type==="image"&&b.data.imageUrl);return M.jsxs(Ck,{author:d.author.username,avatar:d.author.avatar,roleColor:d.author.roleColor,bot:d.author.isBot,verified:d.author.isBot?!0:void 0,roleIcon:d.author.badgeUrl,edited:S,children:[m&&u&&M.jsx(Ak,{slot:"reply",author:u.username,avatar:u.avatar,roleColor:u.roleColor,bot:u.isBot,edited:m.edited,attachment:m.attachment,style:{marginLeft:"55px"},children:m.content}),p&&M.jsx("span",{dangerouslySetInnerHTML:{__html:Xf(p)}}),w.map(b=>{const x=b.data.embed;return x?M.jsxs(Mk,{slot:"embeds",color:x.color,embedTitle:x.title,url:x.url,thumbnail:x.thumbnail,image:x.image,authorName:x.authorName,authorImage:x.authorIcon,authorUrl:x.authorUrl,children:[x.description&&M.jsx("div",{slot:"description",dangerouslySetInnerHTML:{__html:Xf(x.description)}}),x.fields&&x.fields.length>0&&M.jsx(Tk,{slot:"fields",children:x.fields.map((O,R)=>M.jsx(Ek,{fieldTitle:O.name,inline:O.inline,children:M.jsx("span",{dangerouslySetInnerHTML:{__html:Xf(O.value)}})},R))}),x.footerText&&M.jsx("div",{slot:"footer",children:x.footerText})]},b.id):null}),z.length>0&&M.jsx(Sk,{slot:"attachments",children:z.map(b=>M.jsx("img",{src:b.data.imageUrl,alt:"Attachment",className:"max-w-full rounded"},b.id))})]},h)})})})}function Dk({open:a,onOpenChange:n,onSave:s,editingAuthor:i}){const[l,c]=y.useState(""),[d,h]=y.useState(""),[g,p]=y.useState("#5865F2"),[m,u]=y.useState(!1),[S,w]=y.useState("");y.useEffect(()=>{i?(c(i.username),h(i.avatar||""),p(i.roleColor||"#5865F2"),u(i.isBot||!1),w(i.badgeUrl||"")):(c(""),h(""),p("#5865F2"),u(!1),w(""))},[i,a]);const z=()=>{if(!l.trim())return;const _={id:(i==null?void 0:i.id)||Date.now().toString(),username:l.trim(),avatar:d.trim()||void 0,roleColor:g,isBot:m,badgeUrl:S.trim()||void 0};s(_),n(!1)};return M.jsx(Kb,{open:a,onOpenChange:n,children:M.jsxs(Wb,{className:"sm:max-w-md max-h-[90vh] overflow-y-auto",children:[M.jsx(Jb,{children:M.jsx(t2,{children:i?"Edit Author":"Create New Author"})}),M.jsxs("div",{className:"space-y-4 py-4",children:[M.jsxs("div",{className:"space-y-2",children:[M.jsx(ja,{htmlFor:"username",children:"Username"}),M.jsx(Na,{id:"username",value:l,onChange:_=>c(_.target.value),placeholder:"Enter username"})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsx(ja,{htmlFor:"avatar",children:"Avatar URL"}),M.jsx(Na,{id:"avatar",value:d,onChange:_=>h(_.target.value),placeholder:"https://example.com/avatar.png"})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsx(ja,{htmlFor:"roleColor",children:"Role Color"}),M.jsxs("div",{className:"flex gap-2",children:[M.jsx(Na,{id:"roleColor",type:"color",value:g,onChange:_=>p(_.target.value),className:"w-20 h-10"}),M.jsx(Na,{value:g,onChange:_=>p(_.target.value),placeholder:"#5865F2"})]})]}),M.jsxs("div",{className:"flex items-center justify-between",children:[M.jsx(ja,{htmlFor:"isBot",children:"Bot Badge"}),M.jsx(l2,{id:"isBot",checked:m,onCheckedChange:u})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsx(ja,{htmlFor:"badgeUrl",children:"Profile Badge URL (optional)"}),M.jsx(Na,{id:"badgeUrl",value:S,onChange:_=>w(_.target.value),placeholder:"https://example.com/badge.png"}),M.jsx("p",{className:"text-xs text-muted-foreground",children:"Custom badge icon displayed next to username"})]})]}),M.jsxs(e2,{children:[M.jsx(Jt,{variant:"outline",onClick:()=>n(!1),children:"Cancel"}),M.jsx(Jt,{onClick:z,disabled:!l.trim(),children:"Save Author"})]})]})})}function Ok(){const[a,n]=yf("discord-messages",[]),[s,i]=yf("discord-authors",[]),[l,c]=yf("discord-current-blocks",[]),[d,h]=y.useState(!1),[g,p]=y.useState(void 0),[m,u]=y.useState(!1),S=R=>{n(C=>(C||[]).filter(A=>A.id!==R))},w=()=>{n([])},z=R=>{i(C=>{const A=C||[];return A.find(H=>H.id===R.id)?A.map(H=>H.id===R.id?R:H):[...A,R]}),p(void 0)},_=R=>{p(R),h(!0)},b=R=>{i(C=>(C||[]).filter(A=>A.id!==R)),n(C=>(C||[]).filter(A=>A.authorId!==R))},x=()=>{p(void 0),h(!0)},O=R=>{i(C=>{const A=C||[],I=R.authors.filter(H=>!A.some($=>$.id===H.id));return[...A,...I]}),n(C=>[...C||[],...R.messages])};return M.jsxs("div",{className:"min-h-screen bg-[#36393f] flex",children:[M.jsx(Cw,{authors:s||[],messages:a||[],collapsed:m,onCollapsedChange:u,onAddAuthor:x,onEditAuthor:_,onDeleteAuthor:b,onDeleteMessage:S,onClearAllMessages:w,onImportData:O}),M.jsx("div",{className:`flex-1 transition-all duration-300 ${m?"ml-14":"ml-80"}`,children:M.jsx("div",{className:"max-w-[1800px] mx-auto px-6 py-8",children:M.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-[1fr_600px] gap-8",children:[M.jsx("div",{children:M.jsx(d9,{blocks:l||[],authors:s||[],onBlocksChange:c,onOpenAuthorDialog:x})}),M.jsx("div",{children:M.jsx(Nk,{blocks:l||[],authors:s||[]})})]})})}),M.jsx(Dk,{open:d,onOpenChange:h,onSave:z,editingAuthor:g}),M.jsx(W_,{})]})}const Hk=bm("relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",{variants:{variant:{default:"bg-card text-card-foreground",destructive:"text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90"}},defaultVariants:{variant:"default"}});function Rk({className:a,variant:n,...s}){return M.jsx("div",{"data-slot":"alert",role:"alert",className:St(Hk({variant:n}),a),...s})}function $k({className:a,...n}){return M.jsx("div",{"data-slot":"alert-title",className:St("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight",a),...n})}function Vk({className:a,...n}){return M.jsx("div",{"data-slot":"alert-description",className:St("text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",a),...n})}/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lk=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],Bk=yl("refresh-cw",Lk);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uk=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Ik=yl("triangle-alert",Uk),Pk=({error:a,resetErrorBoundary:n})=>M.jsx("div",{className:"min-h-screen bg-background flex items-center justify-center p-4",children:M.jsxs("div",{className:"w-full max-w-md",children:[M.jsxs(Rk,{variant:"destructive",className:"mb-6",children:[M.jsx(Ik,{}),M.jsx($k,{children:"This spark has encountered a runtime error"}),M.jsx(Vk,{children:"Something unexpected happened while running the application. The error details are shown below. Contact the spark author and let them know about this issue."})]}),M.jsxs("div",{className:"bg-card border rounded-lg p-4 mb-6",children:[M.jsx("h3",{className:"font-semibold text-sm text-muted-foreground mb-2",children:"Error Details:"}),M.jsx("pre",{className:"text-xs text-destructive bg-muted/50 p-3 rounded border overflow-auto max-h-32",children:a.message})]}),M.jsxs(Jt,{onClick:n,className:"w-full",variant:"outline",children:[M.jsx(Bk,{}),"Try Again"]})]})});c_.createRoot(document.getElementById("root")).render(M.jsx(u_,{FallbackComponent:Pk,children:M.jsx(Ok,{})}));
