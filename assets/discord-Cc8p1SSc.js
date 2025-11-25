var Fs=Object.defineProperty;var Va=i=>{throw TypeError(i)};var Zs=(i,t,a)=>t in i?Fs(i,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):i[t]=a;var pe=(i,t,a)=>Zs(i,typeof t!="symbol"?t+"":t,a),Ia=(i,t,a)=>t.has(i)||Va("Cannot "+a);var y=(i,t,a)=>(Ia(i,t,"read from private field"),a?a.call(i):t.get(i)),z=(i,t,a)=>t.has(i)?Va("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(i):t.set(i,a),w=(i,t,a,e)=>(Ia(i,t,"write to private field"),e?e.call(i,a):t.set(i,a),a);function qs(i,t){for(var a=0;a<t.length;a++){const e=t[a];if(typeof e!="string"&&!Array.isArray(e)){for(const s in e)if(s!=="default"&&!(s in i)){const m=Object.getOwnPropertyDescriptor(e,s);m&&Object.defineProperty(i,s,m.get?m:{enumerable:!0,get:()=>e[s]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}function Ys(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var ca={exports:{}},Ee={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var La;function Ws(){if(La)return Ee;La=1;var i=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),e=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),o=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),u=Symbol.for("react.memo"),n=Symbol.for("react.lazy"),r=Symbol.for("react.activity"),b=Symbol.iterator;function p(g){return g===null||typeof g!="object"?null:(g=b&&g[b]||g["@@iterator"],typeof g=="function"?g:null)}var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,l={};function d(g,E,K){this.props=g,this.context=E,this.refs=l,this.updater=K||f}d.prototype.isReactComponent={},d.prototype.setState=function(g,E){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,E,"setState")},d.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function Q(){}Q.prototype=d.prototype;function ae(g,E,K){this.props=g,this.context=E,this.refs=l,this.updater=K||f}var $=ae.prototype=new Q;$.constructor=ae,h($,d.prototype),$.isPureReactComponent=!0;var H=Array.isArray;function L(){}var j={H:null,A:null,T:null,S:null},I=Object.prototype.hasOwnProperty;function D(g,E,K){var Y=K.ref;return{$$typeof:i,type:g,key:E,ref:Y!==void 0?Y:null,props:K}}function re(g,E){return D(g.type,E,g.props)}function ge(g){return typeof g=="object"&&g!==null&&g.$$typeof===i}function M(g){var E={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(K){return E[K]})}var _=/\/+/g;function P(g,E){return typeof g=="object"&&g!==null&&g.key!=null?M(""+g.key):E.toString(36)}function ye(g){switch(g.status){case"fulfilled":return g.value;case"rejected":throw g.reason;default:switch(typeof g.status=="string"?g.then(L,L):(g.status="pending",g.then(function(E){g.status==="pending"&&(g.status="fulfilled",g.value=E)},function(E){g.status==="pending"&&(g.status="rejected",g.reason=E)})),g.status){case"fulfilled":return g.value;case"rejected":throw g.reason}}throw g}function O(g,E,K,Y,A){var R=typeof g;(R==="undefined"||R==="boolean")&&(g=null);var q=!1;if(g===null)q=!0;else switch(R){case"bigint":case"string":case"number":q=!0;break;case"object":switch(g.$$typeof){case i:case t:q=!0;break;case n:return q=g._init,O(q(g._payload),E,K,Y,A)}}if(q)return A=A(g),q=Y===""?"."+P(g,0):Y,H(A)?(K="",q!=null&&(K=q.replace(_,"$&/")+"/"),O(A,E,K,"",function(ue){return ue})):A!=null&&(ge(A)&&(A=re(A,K+(A.key==null||g&&g.key===A.key?"":(""+A.key).replace(_,"$&/")+"/")+q)),E.push(A)),1;q=0;var B=Y===""?".":Y+":";if(H(g))for(var F=0;F<g.length;F++)Y=g[F],R=B+P(Y,F),q+=O(Y,E,K,R,A);else if(F=p(g),typeof F=="function")for(g=F.call(g),F=0;!(Y=g.next()).done;)Y=Y.value,R=B+P(Y,F++),q+=O(Y,E,K,R,A);else if(R==="object"){if(typeof g.then=="function")return O(ye(g),E,K,Y,A);throw E=String(g),Error("Objects are not valid as a React child (found: "+(E==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":E)+"). If you meant to render a collection of children, use an array instead.")}return q}function T(g,E,K){if(g==null)return g;var Y=[],A=0;return O(g,Y,"","",function(R){return E.call(K,R,A++)}),Y}function ie(g){if(g._status===-1){var E=g._result;E=E(),E.then(function(K){(g._status===0||g._status===-1)&&(g._status=1,g._result=K)},function(K){(g._status===0||g._status===-1)&&(g._status=2,g._result=K)}),g._status===-1&&(g._status=0,g._result=E)}if(g._status===1)return g._result.default;throw g._result}var ne=typeof reportError=="function"?reportError:function(g){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var E=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof g=="object"&&g!==null&&typeof g.message=="string"?String(g.message):String(g),error:g});if(!window.dispatchEvent(E))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",g);return}console.error(g)},W={map:T,forEach:function(g,E,K){T(g,function(){E.apply(this,arguments)},K)},count:function(g){var E=0;return T(g,function(){E++}),E},toArray:function(g){return T(g,function(E){return E})||[]},only:function(g){if(!ge(g))throw Error("React.Children.only expected to receive a single React element child.");return g}};return Ee.Activity=r,Ee.Children=W,Ee.Component=d,Ee.Fragment=a,Ee.Profiler=s,Ee.PureComponent=ae,Ee.StrictMode=e,Ee.Suspense=v,Ee.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=j,Ee.__COMPILER_RUNTIME={__proto__:null,c:function(g){return j.H.useMemoCache(g)}},Ee.cache=function(g){return function(){return g.apply(null,arguments)}},Ee.cacheSignal=function(){return null},Ee.cloneElement=function(g,E,K){if(g==null)throw Error("The argument must be a React element, but you passed "+g+".");var Y=h({},g.props),A=g.key;if(E!=null)for(R in E.key!==void 0&&(A=""+E.key),E)!I.call(E,R)||R==="key"||R==="__self"||R==="__source"||R==="ref"&&E.ref===void 0||(Y[R]=E[R]);var R=arguments.length-2;if(R===1)Y.children=K;else if(1<R){for(var q=Array(R),B=0;B<R;B++)q[B]=arguments[B+2];Y.children=q}return D(g.type,A,Y)},Ee.createContext=function(g){return g={$$typeof:o,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null},g.Provider=g,g.Consumer={$$typeof:m,_context:g},g},Ee.createElement=function(g,E,K){var Y,A={},R=null;if(E!=null)for(Y in E.key!==void 0&&(R=""+E.key),E)I.call(E,Y)&&Y!=="key"&&Y!=="__self"&&Y!=="__source"&&(A[Y]=E[Y]);var q=arguments.length-2;if(q===1)A.children=K;else if(1<q){for(var B=Array(q),F=0;F<q;F++)B[F]=arguments[F+2];A.children=B}if(g&&g.defaultProps)for(Y in q=g.defaultProps,q)A[Y]===void 0&&(A[Y]=q[Y]);return D(g,R,A)},Ee.createRef=function(){return{current:null}},Ee.forwardRef=function(g){return{$$typeof:c,render:g}},Ee.isValidElement=ge,Ee.lazy=function(g){return{$$typeof:n,_payload:{_status:-1,_result:g},_init:ie}},Ee.memo=function(g,E){return{$$typeof:u,type:g,compare:E===void 0?null:E}},Ee.startTransition=function(g){var E=j.T,K={};j.T=K;try{var Y=g(),A=j.S;A!==null&&A(K,Y),typeof Y=="object"&&Y!==null&&typeof Y.then=="function"&&Y.then(L,ne)}catch(R){ne(R)}finally{E!==null&&K.types!==null&&(E.types=K.types),j.T=E}},Ee.unstable_useCacheRefresh=function(){return j.H.useCacheRefresh()},Ee.use=function(g){return j.H.use(g)},Ee.useActionState=function(g,E,K){return j.H.useActionState(g,E,K)},Ee.useCallback=function(g,E){return j.H.useCallback(g,E)},Ee.useContext=function(g){return j.H.useContext(g)},Ee.useDebugValue=function(){},Ee.useDeferredValue=function(g,E){return j.H.useDeferredValue(g,E)},Ee.useEffect=function(g,E){return j.H.useEffect(g,E)},Ee.useEffectEvent=function(g){return j.H.useEffectEvent(g)},Ee.useId=function(){return j.H.useId()},Ee.useImperativeHandle=function(g,E,K){return j.H.useImperativeHandle(g,E,K)},Ee.useInsertionEffect=function(g,E){return j.H.useInsertionEffect(g,E)},Ee.useLayoutEffect=function(g,E){return j.H.useLayoutEffect(g,E)},Ee.useMemo=function(g,E){return j.H.useMemo(g,E)},Ee.useOptimistic=function(g,E){return j.H.useOptimistic(g,E)},Ee.useReducer=function(g,E,K){return j.H.useReducer(g,E,K)},Ee.useRef=function(g){return j.H.useRef(g)},Ee.useState=function(g){return j.H.useState(g)},Ee.useSyncExternalStore=function(g,E,K){return j.H.useSyncExternalStore(g,E,K)},Ee.useTransition=function(){return j.H.useTransition()},Ee.version="19.2.0",Ee}var Na;function Qs(){return Na||(Na=1,ca.exports=Ws()),ca.exports}var ls=Qs();const ns=Ys(ls),uc=qs({__proto__:null,default:ns},[ls]);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ia=globalThis,Ta=ia.ShadowRoot&&(ia.ShadyCSS===void 0||ia.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ca=Symbol(),Pa=new WeakMap;let cs=class{constructor(t,a,e){if(this._$cssResult$=!0,e!==Ca)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=a}get styleSheet(){let t=this.o;const a=this.t;if(Ta&&t===void 0){const e=a!==void 0&&a.length===1;e&&(t=Pa.get(a)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&Pa.set(a,t))}return t}toString(){return this.cssText}};const Gs=i=>new cs(typeof i=="string"?i:i+"",void 0,Ca),ke=(i,...t)=>{const a=i.length===1?i[0]:t.reduce(((e,s,m)=>e+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+i[m+1]),i[0]);return new cs(a,i,Ca)},Js=(i,t)=>{if(Ta)i.adoptedStyleSheets=t.map((a=>a instanceof CSSStyleSheet?a:a.styleSheet));else for(const a of t){const e=document.createElement("style"),s=ia.litNonce;s!==void 0&&e.setAttribute("nonce",s),e.textContent=a.cssText,i.appendChild(e)}},Ba=Ta?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let a="";for(const e of t.cssRules)a+=e.cssText;return Gs(a)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ks,defineProperty:Xs,getOwnPropertyDescriptor:er,getOwnPropertyNames:tr,getOwnPropertySymbols:ir,getPrototypeOf:ar}=Object,Xt=globalThis,Ra=Xt.trustedTypes,sr=Ra?Ra.emptyScript:"",da=Xt.reactiveElementPolyfillSupport,Ui=(i,t)=>i,sa={toAttribute(i,t){switch(t){case Boolean:i=i?sr:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let a=i;switch(t){case Boolean:a=i!==null;break;case Number:a=i===null?null:Number(i);break;case Object:case Array:try{a=JSON.parse(i)}catch{a=null}}return a}},ja=(i,t)=>!Ks(i,t),Ua={attribute:!0,type:String,converter:sa,reflect:!1,useDefault:!1,hasChanged:ja};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Xt.litPropertyMetadata??(Xt.litPropertyMetadata=new WeakMap);let xi=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,a=Ua){if(a.state&&(a.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((a=Object.create(a)).wrapped=!0),this.elementProperties.set(t,a),!a.noAccessor){const e=Symbol(),s=this.getPropertyDescriptor(t,e,a);s!==void 0&&Xs(this.prototype,t,s)}}static getPropertyDescriptor(t,a,e){const{get:s,set:m}=er(this.prototype,t)??{get(){return this[a]},set(o){this[a]=o}};return{get:s,set(o){const c=s==null?void 0:s.call(this);m==null||m.call(this,o),this.requestUpdate(t,c,e)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Ua}static _$Ei(){if(this.hasOwnProperty(Ui("elementProperties")))return;const t=ar(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Ui("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ui("properties"))){const a=this.properties,e=[...tr(a),...ir(a)];for(const s of e)this.createProperty(s,a[s])}const t=this[Symbol.metadata];if(t!==null){const a=litPropertyMetadata.get(t);if(a!==void 0)for(const[e,s]of a)this.elementProperties.set(e,s)}this._$Eh=new Map;for(const[a,e]of this.elementProperties){const s=this._$Eu(a,e);s!==void 0&&this._$Eh.set(s,a)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const a=[];if(Array.isArray(t)){const e=new Set(t.flat(1/0).reverse());for(const s of e)a.unshift(Ba(s))}else t!==void 0&&a.push(Ba(t));return a}static _$Eu(t,a){const e=a.attribute;return e===!1?void 0:typeof e=="string"?e:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise((a=>this.enableUpdating=a)),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach((a=>a(this)))}addController(t){var a;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((a=t.hostConnected)==null||a.call(t))}removeController(t){var a;(a=this._$EO)==null||a.delete(t)}_$E_(){const t=new Map,a=this.constructor.elementProperties;for(const e of a.keys())this.hasOwnProperty(e)&&(t.set(e,this[e]),delete this[e]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Js(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach((a=>{var e;return(e=a.hostConnected)==null?void 0:e.call(a)}))}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach((a=>{var e;return(e=a.hostDisconnected)==null?void 0:e.call(a)}))}attributeChangedCallback(t,a,e){this._$AK(t,e)}_$ET(t,a){var m;const e=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,e);if(s!==void 0&&e.reflect===!0){const o=(((m=e.converter)==null?void 0:m.toAttribute)!==void 0?e.converter:sa).toAttribute(a,e.type);this._$Em=t,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,a){var m,o;const e=this.constructor,s=e._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const c=e.getPropertyOptions(s),v=typeof c.converter=="function"?{fromAttribute:c.converter}:((m=c.converter)==null?void 0:m.fromAttribute)!==void 0?c.converter:sa;this._$Em=s;const u=v.fromAttribute(a,c.type);this[s]=u??((o=this._$Ej)==null?void 0:o.get(s))??u,this._$Em=null}}requestUpdate(t,a,e){var s;if(t!==void 0){const m=this.constructor,o=this[t];if(e??(e=m.getPropertyOptions(t)),!((e.hasChanged??ja)(o,a)||e.useDefault&&e.reflect&&o===((s=this._$Ej)==null?void 0:s.get(t))&&!this.hasAttribute(m._$Eu(t,e))))return;this.C(t,a,e)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,a,{useDefault:e,reflect:s,wrapped:m},o){e&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,o??a??this[t]),m!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||e||(a=void 0),this._$AL.set(t,a)),s===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(a){Promise.reject(a)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[m,o]of this._$Ep)this[m]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[m,o]of s){const{wrapped:c}=o,v=this[m];c!==!0||this._$AL.has(m)||v===void 0||this.C(m,void 0,o,v)}}let t=!1;const a=this._$AL;try{t=this.shouldUpdate(a),t?(this.willUpdate(a),(e=this._$EO)==null||e.forEach((s=>{var m;return(m=s.hostUpdate)==null?void 0:m.call(s)})),this.update(a)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(a)}willUpdate(t){}_$AE(t){var a;(a=this._$EO)==null||a.forEach((e=>{var s;return(s=e.hostUpdated)==null?void 0:s.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach((a=>this._$ET(a,this[a])))),this._$EM()}updated(t){}firstUpdated(t){}};xi.elementStyles=[],xi.shadowRootOptions={mode:"open"},xi[Ui("elementProperties")]=new Map,xi[Ui("finalized")]=new Map,da==null||da({ReactiveElement:xi}),(Xt.reactiveElementVersions??(Xt.reactiveElementVersions=[])).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fi=globalThis,ra=Fi.trustedTypes,Fa=ra?ra.createPolicy("lit-html",{createHTML:i=>i}):void 0,ds="$lit$",Kt=`lit$${Math.random().toFixed(9).slice(2)}$`,hs="?"+Kt,rr=`<${hs}>`,pi=document,qi=()=>pi.createComment(""),Yi=i=>i===null||typeof i!="object"&&typeof i!="function",Ha=Array.isArray,or=i=>Ha(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",ha=`[ 	
\f\r]`,Vi=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Za=/-->/g,qa=/>/g,si=RegExp(`>|${ha}(?:([^\\s"'>=/]+)(${ha}*=${ha}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ya=/'/g,Wa=/"/g,ms=/^(?:script|style|textarea|title)$/i,us=i=>(t,...a)=>({_$litType$:i,strings:t,values:a}),k=us(1),_e=us(2),ei=Symbol.for("lit-noChange"),qe=Symbol.for("lit-nothing"),Qa=new WeakMap,mi=pi.createTreeWalker(pi,129);function fs(i,t){if(!Ha(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Fa!==void 0?Fa.createHTML(t):t}const lr=(i,t)=>{const a=i.length-1,e=[];let s,m=t===2?"<svg>":t===3?"<math>":"",o=Vi;for(let c=0;c<a;c++){const v=i[c];let u,n,r=-1,b=0;for(;b<v.length&&(o.lastIndex=b,n=o.exec(v),n!==null);)b=o.lastIndex,o===Vi?n[1]==="!--"?o=Za:n[1]!==void 0?o=qa:n[2]!==void 0?(ms.test(n[2])&&(s=RegExp("</"+n[2],"g")),o=si):n[3]!==void 0&&(o=si):o===si?n[0]===">"?(o=s??Vi,r=-1):n[1]===void 0?r=-2:(r=o.lastIndex-n[2].length,u=n[1],o=n[3]===void 0?si:n[3]==='"'?Wa:Ya):o===Wa||o===Ya?o=si:o===Za||o===qa?o=Vi:(o=si,s=void 0);const p=o===si&&i[c+1].startsWith("/>")?" ":"";m+=o===Vi?v+rr:r>=0?(e.push(u),v.slice(0,r)+ds+v.slice(r)+Kt+p):v+Kt+(r===-2?c:p)}return[fs(i,m+(i[a]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),e]};class Wi{constructor({strings:t,_$litType$:a},e){let s;this.parts=[];let m=0,o=0;const c=t.length-1,v=this.parts,[u,n]=lr(t,a);if(this.el=Wi.createElement(u,e),mi.currentNode=this.el.content,a===2||a===3){const r=this.el.content.firstChild;r.replaceWith(...r.childNodes)}for(;(s=mi.nextNode())!==null&&v.length<c;){if(s.nodeType===1){if(s.hasAttributes())for(const r of s.getAttributeNames())if(r.endsWith(ds)){const b=n[o++],p=s.getAttribute(r).split(Kt),f=/([.?@])?(.*)/.exec(b);v.push({type:1,index:m,name:f[2],strings:p,ctor:f[1]==="."?cr:f[1]==="?"?dr:f[1]==="@"?hr:la}),s.removeAttribute(r)}else r.startsWith(Kt)&&(v.push({type:6,index:m}),s.removeAttribute(r));if(ms.test(s.tagName)){const r=s.textContent.split(Kt),b=r.length-1;if(b>0){s.textContent=ra?ra.emptyScript:"";for(let p=0;p<b;p++)s.append(r[p],qi()),mi.nextNode(),v.push({type:2,index:++m});s.append(r[b],qi())}}}else if(s.nodeType===8)if(s.data===hs)v.push({type:2,index:m});else{let r=-1;for(;(r=s.data.indexOf(Kt,r+1))!==-1;)v.push({type:7,index:m}),r+=Kt.length-1}m++}}static createElement(t,a){const e=pi.createElement("template");return e.innerHTML=t,e}}function Mi(i,t,a=i,e){var o,c;if(t===ei)return t;let s=e!==void 0?(o=a._$Co)==null?void 0:o[e]:a._$Cl;const m=Yi(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==m&&((c=s==null?void 0:s._$AO)==null||c.call(s,!1),m===void 0?s=void 0:(s=new m(i),s._$AT(i,a,e)),e!==void 0?(a._$Co??(a._$Co=[]))[e]=s:a._$Cl=s),s!==void 0&&(t=Mi(i,s._$AS(i,t.values),s,e)),t}class nr{constructor(t,a){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=a}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:a},parts:e}=this._$AD,s=((t==null?void 0:t.creationScope)??pi).importNode(a,!0);mi.currentNode=s;let m=mi.nextNode(),o=0,c=0,v=e[0];for(;v!==void 0;){if(o===v.index){let u;v.type===2?u=new Gi(m,m.nextSibling,this,t):v.type===1?u=new v.ctor(m,v.name,v.strings,this,t):v.type===6&&(u=new mr(m,this,t)),this._$AV.push(u),v=e[++c]}o!==(v==null?void 0:v.index)&&(m=mi.nextNode(),o++)}return mi.currentNode=pi,s}p(t){let a=0;for(const e of this._$AV)e!==void 0&&(e.strings!==void 0?(e._$AI(t,e,a),a+=e.strings.length-2):e._$AI(t[a])),a++}}class Gi{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,a,e,s){this.type=2,this._$AH=qe,this._$AN=void 0,this._$AA=t,this._$AB=a,this._$AM=e,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const a=this._$AM;return a!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=a.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,a=this){t=Mi(this,t,a),Yi(t)?t===qe||t==null||t===""?(this._$AH!==qe&&this._$AR(),this._$AH=qe):t!==this._$AH&&t!==ei&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):or(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==qe&&Yi(this._$AH)?this._$AA.nextSibling.data=t:this.T(pi.createTextNode(t)),this._$AH=t}$(t){var m;const{values:a,_$litType$:e}=t,s=typeof e=="number"?this._$AC(t):(e.el===void 0&&(e.el=Wi.createElement(fs(e.h,e.h[0]),this.options)),e);if(((m=this._$AH)==null?void 0:m._$AD)===s)this._$AH.p(a);else{const o=new nr(s,this),c=o.u(this.options);o.p(a),this.T(c),this._$AH=o}}_$AC(t){let a=Qa.get(t.strings);return a===void 0&&Qa.set(t.strings,a=new Wi(t)),a}k(t){Ha(this._$AH)||(this._$AH=[],this._$AR());const a=this._$AH;let e,s=0;for(const m of t)s===a.length?a.push(e=new Gi(this.O(qi()),this.O(qi()),this,this.options)):e=a[s],e._$AI(m),s++;s<a.length&&(this._$AR(e&&e._$AB.nextSibling,s),a.length=s)}_$AR(t=this._$AA.nextSibling,a){var e;for((e=this._$AP)==null?void 0:e.call(this,!1,!0,a);t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var a;this._$AM===void 0&&(this._$Cv=t,(a=this._$AP)==null||a.call(this,t))}}class la{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,a,e,s,m){this.type=1,this._$AH=qe,this._$AN=void 0,this.element=t,this.name=a,this._$AM=s,this.options=m,e.length>2||e[0]!==""||e[1]!==""?(this._$AH=Array(e.length-1).fill(new String),this.strings=e):this._$AH=qe}_$AI(t,a=this,e,s){const m=this.strings;let o=!1;if(m===void 0)t=Mi(this,t,a,0),o=!Yi(t)||t!==this._$AH&&t!==ei,o&&(this._$AH=t);else{const c=t;let v,u;for(t=m[0],v=0;v<m.length-1;v++)u=Mi(this,c[e+v],a,v),u===ei&&(u=this._$AH[v]),o||(o=!Yi(u)||u!==this._$AH[v]),u===qe?t=qe:t!==qe&&(t+=(u??"")+m[v+1]),this._$AH[v]=u}o&&!s&&this.j(t)}j(t){t===qe?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class cr extends la{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===qe?void 0:t}}class dr extends la{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==qe)}}class hr extends la{constructor(t,a,e,s,m){super(t,a,e,s,m),this.type=5}_$AI(t,a=this){if((t=Mi(this,t,a,0)??qe)===ei)return;const e=this._$AH,s=t===qe&&e!==qe||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,m=t!==qe&&(e===qe||s);s&&this.element.removeEventListener(this.name,this,e),m&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var a;typeof this._$AH=="function"?this._$AH.call(((a=this.options)==null?void 0:a.host)??this.element,t):this._$AH.handleEvent(t)}}class mr{constructor(t,a,e){this.element=t,this.type=6,this._$AN=void 0,this._$AM=a,this.options=e}get _$AU(){return this._$AM._$AU}_$AI(t){Mi(this,t)}}const ma=Fi.litHtmlPolyfillSupport;ma==null||ma(Wi,Gi),(Fi.litHtmlVersions??(Fi.litHtmlVersions=[])).push("3.3.1");const ur=(i,t,a)=>{const e=(a==null?void 0:a.renderBefore)??t;let s=e._$litPart$;if(s===void 0){const m=(a==null?void 0:a.renderBefore)??null;e._$litPart$=s=new Gi(t.insertBefore(qi(),m),m,void 0,a??{})}return s._$AI(i),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fi=globalThis;let we=class extends xi{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var a;const t=super.createRenderRoot();return(a=this.renderOptions).renderBefore??(a.renderBefore=t.firstChild),t}update(t){const a=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ur(a,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return ei}};var os;we._$litElement$=!0,we.finalized=!0,(os=fi.litElementHydrateSupport)==null||os.call(fi,{LitElement:we});const ua=fi.litElementPolyfillSupport;ua==null||ua({LitElement:we});(fi.litElementVersions??(fi.litElementVersions=[])).push("4.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ce=i=>(t,a)=>{a!==void 0?a.addInitializer((()=>{customElements.define(i,t)})):customElements.define(i,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fr={attribute:!0,type:String,converter:sa,reflect:!1,hasChanged:ja},pr=(i=fr,t,a)=>{const{kind:e,metadata:s}=a;let m=globalThis.litPropertyMetadata.get(s);if(m===void 0&&globalThis.litPropertyMetadata.set(s,m=new Map),e==="setter"&&((i=Object.create(i)).wrapped=!0),m.set(a.name,i),e==="accessor"){const{name:o}=a;return{set(c){const v=t.get.call(this);t.set.call(this,c),this.requestUpdate(o,v,i)},init(c){return c!==void 0&&this.C(o,void 0,i,c),c}}}if(e==="setter"){const{name:o}=a;return function(c){const v=this[o];t.call(this,c),this.requestUpdate(o,v,i)}}throw Error("Unsupported decorator location: "+e)};function x(i){return(t,a)=>typeof a=="object"?pr(i,t,a):((e,s,m)=>{const o=s.hasOwnProperty(m);return s.constructor.createProperty(m,e),o?Object.getOwnPropertyDescriptor(s,m):void 0})(i,t,a)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function gt(i){return x({...i,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ps(i){return(t,a)=>{const e=typeof t=="function"?t:t[a];Object.assign(e,i)}}var vr=function(i,t,a,e,s,m){function o(d){if(d!==void 0&&typeof d!="function")throw new TypeError("Function expected");return d}for(var c=e.kind,v=c==="getter"?"get":c==="setter"?"set":"value",u=!t&&i?e.static?i:i.prototype:null,n=t||(u?Object.getOwnPropertyDescriptor(u,e.name):{}),r,b=!1,p=a.length-1;p>=0;p--){var f={};for(var h in e)f[h]=h==="access"?{}:e[h];for(var h in e.access)f.access[h]=e.access[h];f.addInitializer=function(d){if(b)throw new TypeError("Cannot add initializers after decoration has completed");m.push(o(d||null))};var l=(0,a[p])(c==="accessor"?{get:n.get,set:n.set}:n[v],f);if(c==="accessor"){if(l===void 0)continue;if(l===null||typeof l!="object")throw new TypeError("Object expected");(r=o(l.get))&&(n.get=r),(r=o(l.set))&&(n.set=r),(r=o(l.init))&&s.unshift(r)}else(r=o(l))&&(c==="field"?s.unshift(r):n[v]=r)}u&&Object.defineProperty(u,e.name,n),b=!0},gr=function(i,t,a){for(var e=arguments.length>2,s=0;s<t.length;s++)a=e?t[s].call(i,a):t[s].call(i);return e?a:void 0};let _r=(()=>{var m;let i=[Ce("discord-action-row")],t,a=[],e,s=we;return m=class extends s{render(){return k`<slot></slot>`}},e=m,(()=>{const c=typeof Symbol=="function"&&Symbol.metadata?Object.create(s[Symbol.metadata]??null):void 0;vr(null,t={value:e},i,{kind:"class",name:e.name,metadata:c},null,a),e=t.value,c&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:c})})(),pe(m,"styles",ke`
		:host {
			display: flex;
			flex-wrap: wrap;
		}
	`),gr(e,a),e})();var br=function(i,t,a,e,s,m){function o(d){if(d!==void 0&&typeof d!="function")throw new TypeError("Function expected");return d}for(var c=e.kind,v=c==="getter"?"get":c==="setter"?"set":"value",u=!t&&i?e.static?i:i.prototype:null,n=t||(u?Object.getOwnPropertyDescriptor(u,e.name):{}),r,b=!1,p=a.length-1;p>=0;p--){var f={};for(var h in e)f[h]=h==="access"?{}:e[h];for(var h in e.access)f.access[h]=e.access[h];f.addInitializer=function(d){if(b)throw new TypeError("Cannot add initializers after decoration has completed");m.push(o(d||null))};var l=(0,a[p])(c==="accessor"?{get:n.get,set:n.set}:n[v],f);if(c==="accessor"){if(l===void 0)continue;if(l===null||typeof l!="object")throw new TypeError("Object expected");(r=o(l.get))&&(n.get=r),(r=o(l.set))&&(n.set=r),(r=o(l.init))&&s.unshift(r)}else(r=o(l))&&(c==="field"?s.unshift(r):n[v]=r)}u&&Object.defineProperty(u,e.name,n),b=!0},yr=function(i,t,a){for(var e=arguments.length>2,s=0;s<t.length;s++)a=e?t[s].call(i,a):t[s].call(i);return e?a:void 0};let zr=(()=>{var m;let i=[Ce("discord-attachments")],t,a=[],e,s=we;return m=class extends s{render(){return k`<slot></slot>`}},e=m,(()=>{const c=typeof Symbol=="function"&&Symbol.metadata?Object.create(s[Symbol.metadata]??null):void 0;br(null,t={value:e},i,{kind:"class",name:e.name,metadata:c},null,a),e=t.value,c&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:c})})(),pe(m,"styles",ke`
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
	`),yr(e,a),e})();/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let vs=class extends Event{constructor(t,a,e,s){super("context-request",{bubbles:!0,composed:!0}),this.context=t,this.contextTarget=a,this.callback=e,this.subscribe=s??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ga=class{constructor(t,a,e,s){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(m,o)=>{this.unsubscribe&&(this.unsubscribe!==o&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=m,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(m,o)),this.unsubscribe=o},this.host=t,a.context!==void 0){const m=a;this.context=m.context,this.callback=m.callback,this.subscribe=m.subscribe??!1}else this.context=a,this.callback=e,this.subscribe=s??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new vs(this.context,this.host,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let wr=class{get value(){return this.o}set value(t){this.setValue(t)}setValue(t,a=!1){const e=a||!Object.is(t,this.o);this.o=t,e&&this.updateObservers()}constructor(t){this.subscriptions=new Map,this.updateObservers=()=>{for(const[a,{disposer:e}]of this.subscriptions)a(this.o,e)},t!==void 0&&(this.value=t)}addCallback(t,a,e){if(!e)return void t(this.value);this.subscriptions.has(t)||this.subscriptions.set(t,{disposer:()=>{this.subscriptions.delete(t)},consumerHost:a});const{disposer:s}=this.subscriptions.get(t);t(this.value,s)}clearCallbacks(){this.subscriptions.clear()}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let xr=class extends Event{constructor(t,a){super("context-provider",{bubbles:!0,composed:!0}),this.context=t,this.contextTarget=a}},Ja=class extends wr{constructor(t,a,e){var s,m;super(a.context!==void 0?a.initialValue:e),this.onContextRequest=o=>{if(o.context!==this.context)return;const c=o.contextTarget??o.composedPath()[0];c!==this.host&&(o.stopPropagation(),this.addCallback(o.callback,c,o.subscribe))},this.onProviderRequest=o=>{if(o.context!==this.context||(o.contextTarget??o.composedPath()[0])===this.host)return;const c=new Set;for(const[v,{consumerHost:u}]of this.subscriptions)c.has(v)||(c.add(v),u.dispatchEvent(new vs(this.context,u,v,!0)));o.stopPropagation()},this.host=t,a.context!==void 0?this.context=a.context:this.context=a,this.attachListeners(),(m=(s=this.host).addController)==null||m.call(s,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new xr(this.context,this.host))}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ui({context:i}){return(t,a)=>{const e=new WeakMap;if(typeof a=="object")return{get(){return t.get.call(this)},set(s){return e.get(this).setValue(s),t.set.call(this,s)},init(s){return e.set(this,new Ja(this,{context:i,initialValue:s})),s}};{t.constructor.addInitializer((o=>{e.set(o,new Ja(o,{context:i}))}));const s=Object.getOwnPropertyDescriptor(t,a);let m;if(s===void 0){const o=new WeakMap;m={get(){return o.get(this)},set(c){e.get(this).setValue(c),o.set(this,c)},configurable:!0,enumerable:!0}}else{const o=s.set;m={...s,set(c){e.get(this).setValue(c),o==null||o.call(this,c)}}}return void Object.defineProperty(t,a,m)}}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ae({context:i,subscribe:t}){return(a,e)=>{typeof e=="object"?e.addInitializer((function(){new Ga(this,{context:i,callback:s=>{a.set.call(this,s)},subscribe:t})})):a.constructor.addInitializer((s=>{new Ga(s,{context:i,callback:m=>{s[e]=m},subscribe:t})}))}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ea={ATTRIBUTE:1,CHILD:2},na=i=>(...t)=>({_$litDirective$:i,values:t});let Sa=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,a,e){this._$Ct=t,this._$AM=a,this._$Ci=e}_$AS(t,a){return this.update(t,a)}update(t,a){return this.render(...a)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Be=na(class extends Sa{constructor(i){var t;if(super(i),i.type!==Ea.ATTRIBUTE||i.name!=="class"||((t=i.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter((t=>i[t])).join(" ")+" "}update(i,[t]){var e,s;if(this.st===void 0){this.st=new Set,i.strings!==void 0&&(this.nt=new Set(i.strings.join(" ").split(/\s/).filter((m=>m!==""))));for(const m in t)t[m]&&!((e=this.nt)!=null&&e.has(m))&&this.st.add(m);return this.render(t)}const a=i.element.classList;for(const m of this.st)m in t||(a.remove(m),this.st.delete(m));for(const m in t){const o=!!t[m];o===this.st.has(m)||(s=this.nt)!=null&&s.has(m)||(o?(a.add(m),this.st.add(m)):(a.remove(m),this.st.delete(m)))}return ei}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fe=i=>i??qe;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const kr=i=>i.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zi=(i,t)=>{var e;const a=i._$AN;if(a===void 0)return!1;for(const s of a)(e=s._$AO)==null||e.call(s,t,!1),Zi(s,t);return!0},oa=i=>{let t,a;do{if((t=i._$AM)===void 0)break;a=t._$AN,a.delete(i),i=t}while((a==null?void 0:a.size)===0)},gs=i=>{for(let t;t=i._$AM;i=t){let a=t._$AN;if(a===void 0)t._$AN=a=new Set;else if(a.has(i))break;a.add(i),Tr(t)}};function Mr(i){this._$AN!==void 0?(oa(this),this._$AM=i,gs(this)):this._$AM=i}function $r(i,t=!1,a=0){const e=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(t)if(Array.isArray(e))for(let m=a;m<e.length;m++)Zi(e[m],!1),oa(e[m]);else e!=null&&(Zi(e,!1),oa(e));else Zi(this,i)}const Tr=i=>{i.type==Ea.CHILD&&(i._$AP??(i._$AP=$r),i._$AQ??(i._$AQ=Mr))};class _s extends Sa{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,a,e){super._$AT(t,a,e),gs(this),this.isConnected=t._$AU}_$AO(t,a=!0){var e,s;t!==this.isConnected&&(this.isConnected=t,t?(e=this.reconnected)==null||e.call(this):(s=this.disconnected)==null||s.call(this)),a&&(Zi(this,t),oa(this))}setValue(t){if(kr(this._$Ct))this._$Ct._$AI(t,this);else{const a=[...this._$Ct._$AH];a[this._$Ci]=t,this._$Ct._$AI(a,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ki=()=>new Cr;class Cr{}const fa=new WeakMap,Pt=na(class extends _s{render(i){return qe}update(i,[t]){var e;const a=t!==this.G;return a&&this.G!==void 0&&this.rt(void 0),(a||this.lt!==this.ct)&&(this.G=t,this.ht=(e=i.options)==null?void 0:e.host,this.rt(this.ct=i.element)),qe}rt(i){if(this.isConnected||(i=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let a=fa.get(t);a===void 0&&(a=new WeakMap,fa.set(t,a)),a.get(this.G)!==void 0&&this.G.call(this.ht,void 0),a.set(this.G,i),i!==void 0&&this.G.call(this.ht,i)}else this.G.value=i}get lt(){var i,t;return typeof this.G=="function"?(i=fa.get(this.ht??globalThis))==null?void 0:i.get(this.G):(t=this.G)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function X(i,t,a){return i?t(i):a==null?void 0:a(i)}const bs=ke`
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
`;var Gt=function(i,t,a,e,s,m){function o(d){if(d!==void 0&&typeof d!="function")throw new TypeError("Function expected");return d}for(var c=e.kind,v=c==="getter"?"get":c==="setter"?"set":"value",u=!t&&i?e.static?i:i.prototype:null,n=t||(u?Object.getOwnPropertyDescriptor(u,e.name):{}),r,b=!1,p=a.length-1;p>=0;p--){var f={};for(var h in e)f[h]=h==="access"?{}:e[h];for(var h in e.access)f.access[h]=e.access[h];f.addInitializer=function(d){if(b)throw new TypeError("Cannot add initializers after decoration has completed");m.push(o(d||null))};var l=(0,a[p])(c==="accessor"?{get:n.get,set:n.set}:n[v],f);if(c==="accessor"){if(l===void 0)continue;if(l===null||typeof l!="object")throw new TypeError("Object expected");(r=o(l.get))&&(n.get=r),(r=o(l.set))&&(n.set=r),(r=o(l.init))&&s.unshift(r)}else(r=o(l))&&(c==="field"?s.unshift(r):n[v]=r)}u&&Object.defineProperty(u,e.name,n),b=!0},it=function(i,t,a){for(var e=arguments.length>2,s=0;s<t.length;s++)a=e?t[s].call(i,a):t[s].call(i);return e?a:void 0};let ys=(()=>{var D,re,ge,M,_,P,ye,O,T;let i=we,t,a=[],e=[],s,m=[],o=[],c,v=[],u=[],n,r=[],b=[],p,f=[],h=[],l,d=[],Q=[],ae,$=[],H=[],L,j=[],I=[];return T=class extends i{constructor(){super(...arguments);pe(this,"mediaComponentRef",ki());pe(this,"seekSliderRef",ki());pe(this,"volumeControlRef",ki());pe(this,"volumeControlInputRef",ki());z(this,D,it(this,a,"0:00"));z(this,re,(it(this,e),it(this,m,"")));z(this,ge,(it(this,o),it(this,v,!1)));z(this,M,(it(this,u),it(this,r,null)));z(this,_,(it(this,b),it(this,f,!1)));z(this,P,(it(this,h),it(this,d,1)));z(this,ye,(it(this,Q),it(this,$,!1)));z(this,O,(it(this,H),it(this,j,!1)));pe(this,"whilePlaying",(it(this,I),()=>{if(this.mediaComponentRef.value&&this.seekSliderRef.value){this.seekSliderRef.value.value=Math.floor(this.mediaComponentRef.value.currentTime).toString();const W=Number(this.seekSliderRef.value.value);this.currentPlaybackPosition=this.calculateTime(W),this.style.setProperty("--seek-before-width",`${W/Number(this.seekSliderRef.value.max)*100}%`),this.raf=requestAnimationFrame(this.whilePlaying)}}));pe(this,"handleClickPlayPauseIcon",()=>{this.mediaComponentRef.value&&(this.hasEnded&&(this.hasEnded=!1),this.isPlaying?(this.mediaComponentRef.value.pause(),this.raf!==null&&cancelAnimationFrame(this.raf),this.isPlaying=!1):(this.mediaComponentRef.value.play(),requestAnimationFrame(this.whilePlaying),this.isPlaying=!0))});pe(this,"handleSpaceToPlayPause",W=>{W.code==="Space"&&(W.preventDefault(),W.stopPropagation(),this.handleClickPlayPauseIcon())});pe(this,"handleSeekSliderChange",()=>{this.mediaComponentRef.value&&this.seekSliderRef.value&&(this.mediaComponentRef.value.currentTime=Number(this.seekSliderRef.value.value),this.mediaComponentRef.value.paused||requestAnimationFrame(this.whilePlaying))});pe(this,"mediaMetadataLoaded",()=>{this.mediaComponentRef.value&&(this.displayMediaDuration(),this.setSliderMax(),this.displayBufferedAmount())})}get currentPlaybackPosition(){return y(this,D)}set currentPlaybackPosition(W){w(this,D,W)}get totalMediaDuration(){return y(this,re)}set totalMediaDuration(W){w(this,re,W)}get isPlaying(){return y(this,ge)}set isPlaying(W){w(this,ge,W)}get raf(){return y(this,M)}set raf(W){w(this,M,W)}get isMuted(){return y(this,_)}set isMuted(W){w(this,_,W)}get currentVolume(){return y(this,P)}set currentVolume(W){w(this,P,W)}get hasEnded(){return y(this,ye)}set hasEnded(W){w(this,ye,W)}get hasRunUpdate(){return y(this,O)}set hasRunUpdate(W){w(this,O,W)}calculateTime(W){const g=Math.floor(W/60),E=Math.floor(W%60),K=E<10?`0${E}`:`${E}`;return`${g}:${K}`}displayMediaDuration(){this.mediaComponentRef.value&&(this.totalMediaDuration=this.calculateTime(this.mediaComponentRef.value.duration))}setSliderMax(){this.mediaComponentRef.value&&this.seekSliderRef.value&&(this.seekSliderRef.value.max=Math.floor(this.mediaComponentRef.value.duration).toString())}displayBufferedAmount(){if(this.mediaComponentRef.value&&this.seekSliderRef.value){const W=this.mediaComponentRef.value.buffered.length-1;if(W>=0){const g=Math.floor(this.mediaComponentRef.value.buffered.end(W));this.style.setProperty("--buffered-width",`${g/Number(this.seekSliderRef.value.max)*100}%`)}}}handleEnded(){this.mediaComponentRef.value&&(this.mediaComponentRef.value.pause(),this.raf!==null&&cancelAnimationFrame(this.raf),this.isPlaying=!1,this.hasEnded=!0)}handleClickMuteIcon(){this.mediaComponentRef.value&&(this.isMuted?(this.mediaComponentRef.value.muted=!1,this.isMuted=!1):(this.mediaComponentRef.value.muted=!0,this.isMuted=!0))}handleSeekSliderInput(W){const g=W.target;this.style.setProperty("--seek-before-width",`${Number(g.value)/Number(g.max)*100}%`),this.seekSliderRef.value&&(this.currentPlaybackPosition=this.calculateTime(Number(this.seekSliderRef.value.value))),this.mediaComponentRef.value&&!this.mediaComponentRef.value.paused&&this.raf!==null&&cancelAnimationFrame(this.raf)}handleVolumeSliderInput(W){const g=W.target,{value:E}=g;if(this.mediaComponentRef.value){const K=Number(E)/100;this.currentVolume=K,this.mediaComponentRef.value.volume=K}}handleVolumeVerticalEnter(){this.volumeControlRef.value&&this.style.setProperty("--volume-slider-opacity","1")}handleVolumeVerticalLeave(){this.volumeControlRef.value&&this.style.setProperty("--volume-slider-opacity","0")}handleVolumeVerticalFocus(){this.handleVolumeVerticalEnter(),this.addEventListener("keydown",this.handleVolumeControlKeyboard)}handleVolumeVerticalBlur(){this.handleVolumeVerticalLeave(),this.removeEventListener("keydown",this.handleVolumeControlKeyboard)}handleVolumeControlKeyboard(W){let g=0;W.code==="ArrowDown"?g=-.1:W.code==="ArrowUp"&&(g=.1),g!==0&&this.adjustVolume(g,W)}adjustVolume(W,g){g.preventDefault(),g.stopPropagation();let E=this.currentVolume+W;E<.1?E=0:E>1&&(E=1),this.mediaComponentRef.value&&this.volumeControlInputRef.value&&(this.currentVolume=E,this.mediaComponentRef.value.volume=E,this.volumeControlInputRef.value.value=(E*100).toString())}shouldUpdate(W){return W.has("hasRunUpdate")&&W.size===1?!1:super.shouldUpdate(W)}firstUpdated(W){this.hasRunUpdate||(this.mediaComponentRef.value&&(this.mediaComponentRef.value.readyState>0?(this.displayMediaDuration(),this.setSliderMax(),this.displayBufferedAmount()):this.mediaComponentRef.value.addEventListener("loadedmetadata",this.mediaMetadataLoaded)),this.hasRunUpdate=!0,super.firstUpdated(W))}disconnectedCallback(){var W;super.disconnectedCallback(),(W=this.mediaComponentRef.value)==null||W.removeEventListener("loadedmetadata",this.mediaMetadataLoaded)}},D=new WeakMap,re=new WeakMap,ge=new WeakMap,M=new WeakMap,_=new WeakMap,P=new WeakMap,ye=new WeakMap,O=new WeakMap,(()=>{const W=typeof Symbol=="function"&&Symbol.metadata?Object.create(i[Symbol.metadata]??null):void 0;t=[gt()],s=[gt()],c=[gt()],n=[gt()],p=[gt()],l=[gt()],ae=[gt()],L=[gt()],Gt(T,null,t,{kind:"accessor",name:"currentPlaybackPosition",static:!1,private:!1,access:{has:g=>"currentPlaybackPosition"in g,get:g=>g.currentPlaybackPosition,set:(g,E)=>{g.currentPlaybackPosition=E}},metadata:W},a,e),Gt(T,null,s,{kind:"accessor",name:"totalMediaDuration",static:!1,private:!1,access:{has:g=>"totalMediaDuration"in g,get:g=>g.totalMediaDuration,set:(g,E)=>{g.totalMediaDuration=E}},metadata:W},m,o),Gt(T,null,c,{kind:"accessor",name:"isPlaying",static:!1,private:!1,access:{has:g=>"isPlaying"in g,get:g=>g.isPlaying,set:(g,E)=>{g.isPlaying=E}},metadata:W},v,u),Gt(T,null,n,{kind:"accessor",name:"raf",static:!1,private:!1,access:{has:g=>"raf"in g,get:g=>g.raf,set:(g,E)=>{g.raf=E}},metadata:W},r,b),Gt(T,null,p,{kind:"accessor",name:"isMuted",static:!1,private:!1,access:{has:g=>"isMuted"in g,get:g=>g.isMuted,set:(g,E)=>{g.isMuted=E}},metadata:W},f,h),Gt(T,null,l,{kind:"accessor",name:"currentVolume",static:!1,private:!1,access:{has:g=>"currentVolume"in g,get:g=>g.currentVolume,set:(g,E)=>{g.currentVolume=E}},metadata:W},d,Q),Gt(T,null,ae,{kind:"accessor",name:"hasEnded",static:!1,private:!1,access:{has:g=>"hasEnded"in g,get:g=>g.hasEnded,set:(g,E)=>{g.hasEnded=E}},metadata:W},$,H),Gt(T,null,L,{kind:"accessor",name:"hasRunUpdate",static:!1,private:!1,access:{has:g=>"hasRunUpdate"in g,get:g=>g.hasRunUpdate,set:(g,E)=>{g.hasRunUpdate=E}},metadata:W},j,I),W&&Object.defineProperty(T,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:W})})(),T})();const zs=ke`
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
`,ws=ke`
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
`;class jr extends _s{constructor(){super(...arguments);pe(this,"host");pe(this,"element");pe(this,"prevData",{});pe(this,"eventData",{})}render(a){return qe}update(a,[e]){var s;this.element!==a.element&&(this.element=a.element),this.host=((s=a.options)==null?void 0:s.host)??this.element,this.apply(e),this.groom(e),this.prevData={...e}}apply(a){if(!a)return;const{prevData:e,element:s}=this;for(const[m,o]of Object.entries(a)){if(o===e[m])continue;const c=m.slice(1);switch(m[0]){case"@":this.eventData[c]=o,this.applyEvent(c,o);break;case".":s[c]=o;break;case"?":o?s.setAttribute(c,""):s.removeAttribute(c);break;default:o===null?s.removeAttribute(m):s.setAttribute(m,String(o));break}}}groom(a){const{prevData:e,element:s}=this;if(e)for(const[m,o]of Object.entries(e)){const c=m.slice(1);if(!a||!(m in a)&&s[c]===o)switch(m[0]){case"@":this.groomEvent(c,o);break;case".":s[c]=void 0;break;case"?":s.removeAttribute(c);break;default:s.removeAttribute(m);break}}}applyEvent(a,e){const{prevData:s,element:m}=this;this.eventData[a]=e,s[a]&&m.removeEventListener(a,this,e),m.addEventListener(a,this,e)}groomEvent(a,e){const{element:s}=this;Reflect.deleteProperty(this.eventData,a),s.removeEventListener(a,this,e)}handleEvent(a){const e=this.eventData[a.type];typeof e=="function"?e.call(this.host,a):e.handleEvent(a)}disconnected(){const{eventData:a,element:e}=this;for(const[s,m]of Object.entries(a)){const o=s.slice(1);e.removeEventListener(o,this,m)}}reconnected(){const{eventData:a,element:e}=this;for(const[s,m]of Object.entries(a)){const o=s.slice(1);e.addEventListener(o,this,m)}}}const be=na(jr),Hr=_e`
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
`;function Er(i={}){return k`<svg
		${be(i)}
		aria-hidden="true"
		role="img"
		width="14"
		height="14"
		viewBox="0 0 7 7"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		${Hr}
	</svg>`}const Sr=_e`
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
`;function Dr(i={}){return k`<svg
		${be(i)}
		aria-hidden="true"
		role="img"
		width="14"
		height="14"
		viewBox="0 0 7 7"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		${Sr}
	</svg>`}const Or=_e`
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
`;function Ar(i={}){return k`<svg
		${be(i)}
		aria-hidden="true"
		role="img"
		width="14"
		height="14"
		viewBox="0 0 7 7"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		${Or}
	</svg>`}const Vr=_e`
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
`;function Ir(i={}){return k`<svg
		${be(i)}
		aria-hidden="true"
		role="img"
		width="14"
		height="14"
		viewBox="0 0 7 7"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		${Vr}
	</svg>`}const Lr=_e`
	<path d="M6.563.875h-.438V.438H4.812v1.313h-.438V.875h-.436V.438h-.875v.438h-.438v.875h-.437V.438H.875v.438H.438v1.75h.438v.438h.875v.438h.438v.875h.438v.438h.438v.438h.875v-.438h.438v-.438h.438V3.5h.438v-.437h.875v-.438h.438z" fill="#ff7fc0"/>
	<path d="M3.938 0h-.875v.438h.875zm-1.75 0H.875v.438h1.313zm3.938 0H4.813v.438h1.313zm.438.438h-.438v.438h.438zm.438.438h-.438v1.75h.438zM4.377.438h-.439v.438h.438v.875h.438V.438zm-2.189 0v1.313h.438V.875h.438V.438zm-1.313 0H.438v.438h.438zM.438.875H0v1.75h.438zm.438 1.75H.438v.438h.438zm.875.438H.875v.438h.875zm4.375 0h-.875v.438h.875zm.438-.438h-.438v.438h.438zM5.251 3.938V3.5h-.438v.875h1.75v-.437zM1.75 3.5v.438H.438v.438h1.75V3.5zm-1.313.875H0v1.75h.438zm.438 1.75H.438v.438h.438zm5.25.438H.875v.438h5.25zm.438-.438h-.438v.438h.438zm.438-1.75h-.438v1.75h.438zm-4.376 0h-.437v.438h.438zm.438.438h-.438v.438h.438zm1.313 0h-.438v.438h.438zm.438-.438h-.438v.438h.438zm-.875.875h-.876v.438h.875z" fill="#000"/>
	<path d="M4.813 4.375v.438h-.438v.438h-.437v.438h-.875v-.438h-.438v-.438h-.437v-.438H.438v1.75h.438v.438h5.25v-.438h.438v-1.75z" fill="#6be473"/>
	<path d="M1.75 5.25h-.437v.438h.438zm-.438-.438H.875v.438h.438zM5.25 6.125v-.438h-.438v.438h-.874v-.438h-.875v.438h-.875v-.438H1.75v.438H.875v.438h5.25v-.438zm.438-.875H5.25v.438h.438zm.438-.438h-.438v.438h.438zm.438.875h-.438v.438h.438z" fill="#008456"/>
	<path d="M2.625 3.938h-.437v.438h.438zm.438.438h-.438v.438h.438zm1.313 0h-.438v.438h.438zm.438-.438h-.438v.438h.438zm.438-.875h-.438v.438h.438zm.875-.438h-.438v.438h.438zm.438-.875h-.438v.875h.438zM3.94 4.813h-.877v.438h.875z" fill="#ff1c90"/>
	<path d="M4.375 5.25h-.437v.438h.438zm.438-.438h-.438v.438h.438zm.438-.438h-.438v.438h.438zm-4.813.001v.875h.438v-.438h1.313v-.438zm.438-3.5H.438v.875h.438zM2.189.437H.875v.438h1.313zm.875.438h-.439v.438h.438zm.875-.438h-.876v.438h.875zm1.313 0h-.438v.875h.438V.875h.875V.438z" fill="#f0f0f0"/>
`;function Nr(i={}){return k`<svg
		${be(i)}
		aria-hidden="true"
		role="img"
		width="14"
		height="14"
		viewBox="0 0 7 7"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		${Lr}
	</svg>`}const Pr=_e`
	<path d="M3.063.875v.438h.875V.875zm.875-.438v.438h1.75V.438zm1.75.438v.438h.438V.875zm.438.438v.438h.438v-.438zm.438.438v2.188h.438V1.75zm-.438 2.188v.875h.438v-.876zm-.438.875v.438h.438v-.438zm-.875.438v.438h.875v-.438zm-.875.438v.438h.875V5.69zm-.875.438v.438h.875v-.438z" fill="#000"/>
	<path d="M6.563 1.75h-.438v-.437h-.438V.875H3.938v.438h-.875V.875h-1.75v.438H.875v.438H.438v2.188h.438v.875h.438v.438h.875v.438h.875v.438h.875V5.69h.875v-.438h.875v-.438h.438v-.876h.438z" fill="#ff7fc0"/>
	<path d="M6.563 1.75h-.438v2.188h.438zm-.438 2.188h-.438v.875h.438zm-4.812 0H.875v.875h.438zm4.375.875h-.875v.438h.875zm-.875.438h-.875v.438h.875zm-.875.438h-.875v.438h.875zm-.875-.438h-.875v.438h.875zm-.875-.438h-.875v.438h.875z" fill="#ff1b90"/>
	<path d="M1.313.438v.438h1.75V.438zM.875.875v.438h.438V.875zm-.437.438v.438h.438v-.438zM0 1.75v2.188h.438V1.75zm.438 2.188v.875h.438v-.875zm.438.875v.438h.438v-.438zm.438.438v.438h.875v-.438zm.875.438v.438h.875v-.438z" fill="#000"/>
	<path d="M1.313.875v.438h1.75V.875zm2.625 0v.438h1.75V.875zm-.875.438v.438h.875v-.438z" fill="#f0f0f0"/>
	<path opacity=".6" d="M4.813 2.625v-.437h-.875v.438h-.875v-.438h-.875v.438H1.75v1.313h.438v.438h.879v.438h.875v-.438h.871v-.439h.438V2.625z" fill="#fff"/>
	<path d="M5.688 1.313v.438h.438v-.438zm-4.813 0v.438h.438v-.438zm.438.438v.438h.438V1.75zM.438 1.75v.875h.438V1.75z" fill="#f0f0f0"/>
`;function Br(i={}){return k`<svg
		${be(i)}
		aria-hidden="true"
		role="img"
		width="14"
		height="14"
		viewBox="0 0 7 7"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		${Pr}
	</svg>`}const Rr=_e`
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
`;function Ur(i={}){return k`<svg
		${be(i)}
		aria-hidden="true"
		role="img"
		width="14"
		height="14"
		viewBox="0 0 7 7"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		${Rr}
	</svg>`}const Fr=_e`
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
`;function Zr(i={}){return k`<svg
		${be(i)}
		aria-hidden="true"
		role="img"
		width="14"
		height="14"
		viewBox="0 0 7 7"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		${Fr}
	</svg>`}const qr=_e`
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
`;function Yr(i={}){return k`<svg
		${be(i)}
		aria-hidden="true"
		role="img"
		width="14"
		height="14"
		viewBox="0 0 7 7"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		${qr}
	</svg>`}const Wr=_e`
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
`;function Qr(i={}){return k`<svg
		${be(i)}
		aria-hidden="true"
		role="img"
		width="14"
		height="14"
		viewBox="0 0 7 7"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		${Wr}
	</svg>`}const Gr=_e`
	<path d="M6.125 2.188v-.875h-.438V.875h-.438V.438h-.875v.438h.438v.438h.438v1.75h-.438v.438h-.438v.438H2.625V3.5h-.437v-.437H1.75v-1.75h.438V.875h.438V.438H1.75v.438h-.437v.438H.875v.875H.438v2.625h.438v.875h.438v.438h.875v.438h2.625v-.438h.875v-.438h.438v-.875h.438V2.188z" fill="#b79cf8"/>
	<path d="M2.625 0H1.75v.438h.875zM.875 1.313H.438v.875h.438zm1.313 0H1.75v1.75h.438zm2.188 2.188H2.625v.438h1.75z" fill="#000"/>
	<path d="M4.375 3.938h-1.75v.438h1.75z" fill="#f0f0f0"/>
	<path d="M.438 2.188H0v2.625h.438zm4.375 4.375H2.188v.438h2.625z" fill="#000"/>
	<path d="M.875 4.375H.438v.438h.438zm4.813.875h-.875v.438H2.188V5.25h-.875v-.438H.875v.875h.438v.438h.875v.438h2.625v-.438h.875v-.438h.438v-.875h-.438zm.875-.875h-.438v.438h.438z" fill="#816bee"/>
	<path d="M1.75.438h-.437v.438h.438zm-.437.437H.875v.438h.438z" fill="#000"/>
	<path d="M2.625.438H1.75v.438h.875zM1.75.875h-.437v.438h.438zm-.437.438H.875v.438h.438zm-.438.875H.438v.438h.438zm.438.438H.875v.438h.438zm.875.438H1.75v.438h.438zm.438.438h-.438v.438h.438zm2.625-.438h-.438v.438h.438zM4.813.439h-.438v.438h.438zm0 3.063h-.438v.438h.438z" fill="#f0f0f0"/>
	<path d="M3.063.438h-.438v.438h.438zm-.438.437h-.437v.438h.438zm0 2.188h-.437v.438h.438zm-1.75 1.75H.438v.875h.438zm.438.875H.875v.438h.438zM5.251 0h-.875v.438h.875zm.438 6.125h-.875v.438h.875zm-3.5 0h-.876v.438h.875zm4.374-4.812h-.438v.875h.438zm-1.313 0h-.438v1.75h.438zM7 2.188h-.438v2.625H7zM5.687.438h-.438v.438h.438zm.438.438h-.438v.438h.438zM4.375.438h-.437v.438h.438zm.438.438h-.438v.438h.438zm0 2.188h-.438v.438h.438zm1.75 1.75h-.438v.875h.438zm-.438.875h-.438v.438h.438z" fill="#000"/>
	<path d="M2.188.875H1.75v.438h.438z" fill="#b79cf8"/>
`;function Jr(i={}){return k`<svg
		${be(i)}
		aria-hidden="true"
		role="img"
		width="14"
		height="14"
		viewBox="0 0 7 7"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		${Gr}
	</svg>`}const Kr=_e`
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
`;function Xr(i={}){return k`<svg
		${be(i)}
		aria-hidden="true"
		role="img"
		width="14"
		height="14"
		viewBox="0 0 7 7"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		${Kr}
	</svg>`}const eo=_e`
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
`;function to(i={}){return k`<svg
		${be(i)}
		aria-hidden="true"
		role="img"
		width="14"
		height="14"
		viewBox="0 0 7 7"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		${eo}
	</svg>`}const io=_e`
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
`;function ao(i={}){return k`<svg
		${be(i)}
		aria-hidden="true"
		role="img"
		width="14"
		height="14"
		viewBox="0 0 7 7"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		${io}
	</svg>`}const so=_e`
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
`;function ro(i={}){return k`<svg
		${be(i)}
		aria-hidden="true"
		role="img"
		width="14"
		height="14"
		viewBox="0 0 7 7"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		${so}
	</svg>`}const oo=_e`
	<path d="M5.688 1.313V.875h-.875v.438h-.438V.875h-.437V.438h-.875v.438h-.438v.438h-.437V.875h-.875v.438H.875v1.75h.875v.438h.438v-.438h2.625v.438h.438v-.438h.875v-1.75z" fill="#d1cdd5"/>
	<path d="M6.125 3.938V3.5h-1.75v-.437h-1.75v.438H.875v.438H.438v1.313h.438v.438h1.75v.438h.438v.438h.875v-.438h.438V5.69h1.75v-.438h.438V3.938z" fill="#57595f"/>
	<path d="M3.938 0h-.875v.438h.875zm-.875.438h-.438v.438h.438zm1.313 0h-.438v.438h.438zm1.313 0h-.875v.438h.875zm.438.438h-.438v.438h.438zm-1.313 0h-.438v.438h.438zM2.625.875h-.437v.438h.438zM2.188.438h-.875v.438h.875zm-1.313.875H.438v1.75h.438zm.438-.438H.875v.438h.438zM.875 3.5H.438v.438h.438zm-.437.438H0v1.313h.438zm.438 1.313H.438v.438h.438zm1.75.438H.875v.438h1.75zm.438.438h-.439v.438h.438zm.875.438h-.876v.438h.875zm.438-.438h-.439v.438h.438zm1.75-.438h-1.75v.438h1.75zm.438-.438h-.438v.438h.438zm.438-1.313h-.438v1.313h.438zM6.565 3.5h-.438v.438h.438zm0-2.188h-.438v1.75h.438zM2.188 3.5H1.75v.438h.438zm.438-.438h-.438V3.5h.438zm1.75-.438H2.625v.438h1.75zm.438.438h-.438V3.5h.438zm.438.438h-.438v.438h.438zm.438-.438h-.438V3.5h.875v-.437zm-4.377.001H.875v.438h.875v-.438z" fill="#000"/>
	<path d="M.875 4.813H.438v.438h.438zm.438.438H.875v.438h.438zm1.75.438h-.438v.438h.438zm1.313 0h-.438v.438h.438zm-.438.438h-.875v.438h.875zm2.188-.875h-.438v.438h.438zm.438-1.313h-.438v1.313h.438z" fill="#35363a"/>
	<path d="M1.313 2.625H.875v.438h.438zm.875.438H1.75v.438h.438zm3.063 0h-.438v.438h.438zm-2.626-.438h-.437v.438h.438zm2.188 0h-.438v.438h.438z" fill="#847d8b"/>
	<path d="M5.25 3.063h-.438v.438h.438zm-.875-.875h-1.75v.438h1.75zm1.75-.438h-.438v1.313h.438z" fill="#847d8b"/>
	<path d="M1.75 1.75h-.437v.438h.438zm-.437-.437H.875v.438h.438zm.875-.438h-.875v.438h.875zm.875 0h-.438v.438h.438zm.875-.438h-.875v.438h.875zm.438.438h-.438v.438h.438zm1.313 0h-.875v.438h.875zm.438.438h-.438v.438h.438z" fill="#f0f0f0"/>
	<path d="M.875 3.938H.438v.438h.438zm.438-.438H.875v.438h.438zm1.313 0h-.438v.438h.438zm1.75-.438H2.625V3.5h1.75zm.875.875h-.438v.438h.438zm.875-.438h-.875v.438h.875z" fill="#d8d8d8"/>
`;function lo(i={}){return k`<svg
		${be(i)}
		aria-hidden="true"
		role="img"
		width="14"
		height="14"
		viewBox="0 0 7 7"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		${oo}
	</svg>`}const no=_e`
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
`;function co(i={}){return k`<svg
		${be(i)}
		aria-hidden="true"
		role="img"
		width="14"
		height="14"
		viewBox="0 0 7 7"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		${no}
	</svg>`}const ho=_e`
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
`;function mo(i={}){return k`<svg
		${be(i)}
		aria-hidden="true"
		role="img"
		width="14"
		height="14"
		viewBox="0 0 7 7"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		${ho}
	</svg>`}const uo=_e`
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
`;function fo(i={}){return k`<svg
		${be(i)}
		aria-hidden="true"
		role="img"
		width="14"
		height="14"
		viewBox="0 0 7 7"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		${uo}
	</svg>`}const po=_e`
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
`;function vo(i={}){return k`<svg
		${be(i)}
		aria-hidden="true"
		role="img"
		width="14"
		height="14"
		viewBox="0 0 7 7"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		${po}
	</svg>`}const go=_e`
	<path d="M5.688 2.625v-.437H5.25V1.75h-.438v-.437h-.438V.875h-.436V.438h-.875v.438h-.438v.438h-.437v.438H1.75v.438h-.437v.438H.875v.875H.438v2.188h.438v.438h.875v.438h3.5v-.438h.875v-.438h.438V3.5h-.438v-.875z" fill="#0abbff"/>
	<path d="M3.063 0v.438h.875V0zm-.438.438v.438h.438V.438zm1.313 0v.438h.438V.438zm.438.438v.438h.438V.875zm.438.438v.438h.438v-.439zm.438.438v.438h.438v-.44zm.438.438v.438h.438v-.44zm.438.438v.875h.438v-.878zm-5.69-.003V3.5h.438v-.875zM0 3.5v2.188h.438V3.5zm6.563 0v2.188h.438V3.5zM2.188.875v.438h.438V.875zm-.438.438v.438h.438v-.438zm-.437.437v.438h.438V1.75zm-.438.438v.438h.438v-.438zm-.438 3.5v.438h.438v-.438zm5.688 0v.438h.438v-.438zm-4.375.875v.438h3.5v-.438z" fill="#000"/>
	<path d="M1.75 6.125v.438h3.5v-.438z" fill="#4282d8"/>
	<path d="M.875 6.125v.438h.875v-.438zm5.25.438v-.438H5.25v.438z" fill="#000"/>
	<path d="M3.063.438v.438h.875V.438z" fill="#fff"/>
	<path opacity=".5" d="M4.813 3.5v-.437h-.438v-.438h-.437v-.437h-.875v.438h-.438v.438h-.437v.438H1.75v1.313h.438v.438h2.625v-.438h.438V3.5z" fill="#fff"/>
	<path d="M2.625.875v.438h.438V.875zm-.437.438v.438h.438v-.438zm.438.438v.438h.438V1.75zM1.75 1.75v.438h.438V1.75zm-.437.438v.438h.438v-.438zm-.438.437V3.5h.438v-.875zM.438 3.5v.875h.438V3.5z" fill="#fff"/>
	<path d="M5.25 2.188v.438h.438v-.438zm.438.438v.875h.438v-.876zm.438.875v1.75h-.438v.438H5.25v.438h.875v-.438h.438V3.5zM.875 6.125h.875v-.438H.875z" fill="#4282d8"/>
`;function _o(i={}){return k`<svg
		${be(i)}
		aria-hidden="true"
		role="img"
		width="14"
		height="14"
		viewBox="0 0 7 7"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		${go}
	</svg>`}let bo=globalThis.$discordMessage??{};function Ti(){return bo}const aa={blue:"https://cdn.discordapp.com/embed/avatars/0.png",gray:"https://cdn.discordapp.com/embed/avatars/1.png",green:"https://cdn.discordapp.com/embed/avatars/2.png",orange:"https://cdn.discordapp.com/embed/avatars/3.png",red:"https://cdn.discordapp.com/embed/avatars/4.png",pink:"https://cdn.discordapp.com/embed/avatars/5.png"},pa=Ti().avatars??{},Mt=Object.assign(aa,pa,{default:aa[pa.default]??pa.default??aa.blue}),$i=Ti().profiles??{},yo=Ti().defaultTheme==="light"?"light":"dark",zo=Ti().defaultMode==="compact"?"compact":"cozy",wo=Ti().defaultBackground==="none"?"none":"discord",xo=new Map([["heart",Br()],["crystal",Er()],["diamond",Dr()],["explosion",Ar()],["flame",Ir()],["flower",Nr()],["key",Ur()],["leaf",Zr()],["lightning",Yr()],["magic",Qr()],["moon",Jr()],["mushroom",Xr()],["mythical",to()],["ornament",ao()],["plasma",ro()],["rock",lo()],["shell",co()],["skull",mo()],["sun",fo()],["sword",vo()],["water",_o()]]),ko=_e`
	<path
		fill="currentColor"
		d="M18.91 12.98a5.45 5.45 0 0 1 2.18 6.2c-.1.33-.09.68.1.96l.83 1.32a1 1 0 0 1-.84 1.54h-5.5A5.6 5.6 0 0 1 10 17.5a5.6 5.6 0 0 1 5.68-5.5c1.2 0 2.32.36 3.23.98Z"
	/>
	<path
		fill="currentColor"
		d="M19.24 10.86c.32.16.72-.02.74-.38L20 10c0-4.42-4.03-8-9-8s-9 3.58-9 8c0 1.5.47 2.91 1.28 4.11.14.21.12.49-.06.67l-1.51 1.51A1 1 0 0 0 2.4 18h5.1a.5.5 0 0 0 .49-.5c0-4.2 3.5-7.5 7.68-7.5 1.28 0 2.5.3 3.56.86Z"
	/>
`;function xs(i={}){return k`<svg
		${be(i)}
		class="discord-mention-icon"
		aria-hidden="false"
		width="24"
		height="24"
		viewBox="0 0 20 20"
		xmlns="http://www.w3.org/2000/svg"
	>
		${ko}
	</svg>`}const Mo=_e`
	<path
		fill="currentColor"
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M10.99 3.16A1 1 0 1 0 9 2.84L8.15 8H4a1 1 0 0 0 0 2h3.82l-.67 4H3a1 1 0 1 0 0 2h3.82l-.8 4.84a1 1 0 0 0 1.97.32L8.85 16h4.97l-.8 4.84a1 1 0 0 0 1.97.32l.86-5.16H20a1 1 0 1 0 0-2h-3.82l.67-4H21a1 1 0 1 0 0-2h-3.82l.8-4.84a1 1 0 1 0-1.97-.32L15.15 8h-4.97l.8-4.84ZM14.15 14l.67-4H9.85l-.67 4h4.97Z"
	/>
`;function ks(i={}){return k`<svg
		${be(i)}
		class="discord-mention-icon"
		aria-hidden="false"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
	>
		${Mo}
	</svg>`}const $o=_e`
	<path
		fill="currentColor"
		d="M12 2.81a1 1 0 0 1 0-1.41l.36-.36a1 1 0 0 1 1.41 0l9.2 9.2a1 1 0 0 1 0 1.4l-.7.7a1 1 0 0 1-1.3.13l-9.54-6.72a1 1 0 0 1-.08-1.58l1-1L12 2.8ZM12 21.2a1 1 0 0 1 0 1.41l-.35.35a1 1 0 0 1-1.41 0l-9.2-9.19a1 1 0 0 1 0-1.41l.7-.7a1 1 0 0 1 1.3-.12l9.54 6.72a1 1 0 0 1 .07 1.58l-1 1 .35.36ZM15.66 16.8a1 1 0 0 1-1.38.28l-8.49-5.66A1 1 0 1 1 6.9 9.76l8.49 5.65a1 1 0 0 1 .27 1.39ZM17.1 14.25a1 1 0 1 0 1.11-1.66L9.73 6.93a1 1 0 0 0-1.11 1.66l8.49 5.66Z"
	/>
`;function Ms(i={}){return k`<svg
		${be(i)}
		class="discord-mention-icon"
		aria-hidden="false"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
	>
		${$o}
	</svg>`}const To=_e`
	<path
		fill="currentColor"
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M6 9h1V6a5 5 0 0 1 10 0v3h1a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3Zm9-3v3H9V6a3 3 0 1 1 6 0Zm-1 8a2 2 0 0 1-1 1.73V18a1 1 0 1 1-2 0v-2.27A2 2 0 1 1 14 14Z"
	/>
`;function $s(i={}){return k`<svg
		${be(i)}
		class="discord-mention-icon"
		aria-hidden="false"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
	>
		${To}
	</svg>`}const Co=_e`
	<path
		fill="currentColor"
		d="M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.74.32L5.92 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.92l4.28 4.68a1 1 0 0 0 .74.32H11a1 1 0 0 0 1-1V3ZM15.1 20.75c-.58.14-1.1-.33-1.1-.92v-.03c0-.5.37-.92.85-1.05a7 7 0 0 0 0-13.5A1.11 1.11 0 0 1 14 4.2v-.03c0-.6.52-1.06 1.1-.92a9 9 0 0 1 0 17.5Z"
	/>
	<path
		fill="currentColor"
		d="M15.16 16.51c-.57.28-1.16-.2-1.16-.83v-.14c0-.43.28-.8.63-1.02a3 3 0 0 0 0-5.04c-.35-.23-.63-.6-.63-1.02v-.14c0-.63.59-1.1 1.16-.83a5 5 0 0 1 0 9.02Z"
	/>
`;function Ts(i={}){return k`<svg
		${be(i)}
		class="discord-mention-icon"
		aria-hidden="false"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
	>
		${Co}
	</svg>`}var vi=function(i,t,a,e,s,m){function o(d){if(d!==void 0&&typeof d!="function")throw new TypeError("Function expected");return d}for(var c=e.kind,v=c==="getter"?"get":c==="setter"?"set":"value",u=!t&&i?e.static?i:i.prototype:null,n=t||(u?Object.getOwnPropertyDescriptor(u,e.name):{}),r,b=!1,p=a.length-1;p>=0;p--){var f={};for(var h in e)f[h]=h==="access"?{}:e[h];for(var h in e.access)f.access[h]=e.access[h];f.addInitializer=function(d){if(b)throw new TypeError("Cannot add initializers after decoration has completed");m.push(o(d||null))};var l=(0,a[p])(c==="accessor"?{get:n.get,set:n.set}:n[v],f);if(c==="accessor"){if(l===void 0)continue;if(l===null||typeof l!="object")throw new TypeError("Object expected");(r=o(l.get))&&(n.get=r),(r=o(l.set))&&(n.set=r),(r=o(l.init))&&s.unshift(r)}else(r=o(l))&&(c==="field"?s.unshift(r):n[v]=r)}u&&Object.defineProperty(u,e.name,n),b=!0},Ht=function(i,t,a){for(var e=arguments.length>2,s=0;s<t.length;s++)a=e?t[s].call(i,a):t[s].call(i);return e?a:void 0};const Ne="light-theme",ti="compact-mode",Cs="no-background";let jo=(()=>{var $,H,L,j,I,D;let i=[Ce("discord-messages")],t,a=[],e,s=we,m,o=[],c=[],v,u=[],n=[],r,b=[],p=[],f,h=[],l=[],d,Q=[],ae=[];return $=class extends s{constructor(){super(...arguments);z(this,H,Ht(this,o,!1));z(this,L,(Ht(this,c),Ht(this,u,!1)));z(this,j,(Ht(this,n),Ht(this,b,!1)));z(this,I,(Ht(this,p),Ht(this,h,void 0)));z(this,D,(Ht(this,l),Ht(this,Q,void 0)));Ht(this,ae)}get lightTheme(){return y(this,H)}set lightTheme(M){w(this,H,M)}get noBackground(){return y(this,L)}set noBackground(M){w(this,L,M)}get compactMode(){return y(this,j)}set compactMode(M){w(this,j,M)}get channelType(){return y(this,I)}set channelType(M){w(this,I,M)}get channelName(){return y(this,D)}set channelName(M){w(this,D,M)}connectedCallback(){super.connectedCallback(),(this.lightTheme||yo==="light"&&this.lightTheme)&&(this.lightTheme=!0),(this.compactMode||zo==="compact"&&this.compactMode)&&(this.compactMode=!0),(this.noBackground||wo==="none"&&this.noBackground)&&(this.noBackground=!0)}render(){let M;switch(this.channelType){case"text":M=k`${ks()}`;break;case"voice":M=k`${Ts()}`;break;case"locked":M=k`${$s()}`;break;case"thread":M=k`${Ms()}`;break;case"forum":M=k`${xs()}`;break}return k`
			${X(this.channelType&&this.channelName,()=>k`<div class="discord-channel-header">
						<div class="discord-channel-icon">${M}</div>
						<div class="discord-channel-name">${this.channelName}</div>
					</div>`)}
			<slot></slot>
		`}},H=new WeakMap,L=new WeakMap,j=new WeakMap,I=new WeakMap,D=new WeakMap,e=$,(()=>{const M=typeof Symbol=="function"&&Symbol.metadata?Object.create(s[Symbol.metadata]??null):void 0;m=[ui({context:Ne}),x({type:Boolean,reflect:!0,attribute:"light-theme"})],v=[ui({context:Cs}),x({type:Boolean,reflect:!0,attribute:"no-background"})],r=[ui({context:ti}),x({type:Boolean,reflect:!0,attribute:"compact-mode"})],f=[x({reflect:!0,attribute:"channel-type"})],d=[x({reflect:!0,attribute:"channel-name"})],vi($,null,m,{kind:"accessor",name:"lightTheme",static:!1,private:!1,access:{has:_=>"lightTheme"in _,get:_=>_.lightTheme,set:(_,P)=>{_.lightTheme=P}},metadata:M},o,c),vi($,null,v,{kind:"accessor",name:"noBackground",static:!1,private:!1,access:{has:_=>"noBackground"in _,get:_=>_.noBackground,set:(_,P)=>{_.noBackground=P}},metadata:M},u,n),vi($,null,r,{kind:"accessor",name:"compactMode",static:!1,private:!1,access:{has:_=>"compactMode"in _,get:_=>_.compactMode,set:(_,P)=>{_.compactMode=P}},metadata:M},b,p),vi($,null,f,{kind:"accessor",name:"channelType",static:!1,private:!1,access:{has:_=>"channelType"in _,get:_=>_.channelType,set:(_,P)=>{_.channelType=P}},metadata:M},h,l),vi($,null,d,{kind:"accessor",name:"channelName",static:!1,private:!1,access:{has:_=>"channelName"in _,get:_=>_.channelName,set:(_,P)=>{_.channelName=P}},metadata:M},Q,ae),vi(null,t={value:e},i,{kind:"class",name:e.name,metadata:M},null,a),e=t.value,M&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:M})})(),pe($,"styles",ke`
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
	`),Ht(e,a),e})();var gi=function(i,t,a,e,s,m){function o(d){if(d!==void 0&&typeof d!="function")throw new TypeError("Function expected");return d}for(var c=e.kind,v=c==="getter"?"get":c==="setter"?"set":"value",u=!t&&i?e.static?i:i.prototype:null,n=t||(u?Object.getOwnPropertyDescriptor(u,e.name):{}),r,b=!1,p=a.length-1;p>=0;p--){var f={};for(var h in e)f[h]=h==="access"?{}:e[h];for(var h in e.access)f.access[h]=e.access[h];f.addInitializer=function(d){if(b)throw new TypeError("Cannot add initializers after decoration has completed");m.push(o(d||null))};var l=(0,a[p])(c==="accessor"?{get:n.get,set:n.set}:n[v],f);if(c==="accessor"){if(l===void 0)continue;if(l===null||typeof l!="object")throw new TypeError("Object expected");(r=o(l.get))&&(n.get=r),(r=o(l.set))&&(n.set=r),(r=o(l.init))&&s.unshift(r)}else(r=o(l))&&(c==="field"?s.unshift(r):n[v]=r)}u&&Object.defineProperty(u,e.name,n),b=!0},Et=function(i,t,a){for(var e=arguments.length>2,s=0;s<t.length;s++)a=e?t[s].call(i,a):t[s].call(i);return e?a:void 0};let Ho=(()=>{var $,H,L,j,I,D;let i=[Ce("discord-link")],t,a=[],e,s=we,m,o=[],c=[],v,u=[],n=[],r,b=[],p=[],f,h=[],l=[],d,Q=[],ae=[];return $=class extends s{constructor(){super(...arguments);z(this,H,Et(this,o,!1));z(this,L,(Et(this,c),Et(this,u,void 0)));z(this,j,(Et(this,n),Et(this,b,void 0)));z(this,I,(Et(this,p),Et(this,h,void 0)));z(this,D,(Et(this,l),Et(this,Q,void 0)));Et(this,ae)}get lightTheme(){return y(this,H)}set lightTheme(M){w(this,H,M)}get href(){return y(this,L)}set href(M){w(this,L,M)}get rel(){return y(this,j)}set rel(M){w(this,j,M)}get target(){return y(this,I)}set target(M){w(this,I,M)}get type(){return y(this,D)}set type(M){w(this,D,M)}render(){return k`<a
			href=${fe(this.href)}
			rel=${fe(this.rel)}
			target=${fe(this.target)}
			type=${fe(this.type)}
			class=${Be({"discord-link-light-theme":this.lightTheme})}
			><slot></slot
		></a>`}},H=new WeakMap,L=new WeakMap,j=new WeakMap,I=new WeakMap,D=new WeakMap,e=$,(()=>{const M=typeof Symbol=="function"&&Symbol.metadata?Object.create(s[Symbol.metadata]??null):void 0;m=[Ae({context:Ne,subscribe:!0}),x({type:Boolean,reflect:!0,attribute:"light-theme"})],v=[x()],r=[x()],f=[x()],d=[x()],gi($,null,m,{kind:"accessor",name:"lightTheme",static:!1,private:!1,access:{has:_=>"lightTheme"in _,get:_=>_.lightTheme,set:(_,P)=>{_.lightTheme=P}},metadata:M},o,c),gi($,null,v,{kind:"accessor",name:"href",static:!1,private:!1,access:{has:_=>"href"in _,get:_=>_.href,set:(_,P)=>{_.href=P}},metadata:M},u,n),gi($,null,r,{kind:"accessor",name:"rel",static:!1,private:!1,access:{has:_=>"rel"in _,get:_=>_.rel,set:(_,P)=>{_.rel=P}},metadata:M},b,p),gi($,null,f,{kind:"accessor",name:"target",static:!1,private:!1,access:{has:_=>"target"in _,get:_=>_.target,set:(_,P)=>{_.target=P}},metadata:M},h,l),gi($,null,d,{kind:"accessor",name:"type",static:!1,private:!1,access:{has:_=>"type"in _,get:_=>_.type,set:(_,P)=>{_.type=P}},metadata:M},Q,ae),gi(null,t={value:e},i,{kind:"class",name:e.name,metadata:M},null,a),e=t.value,M&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:M})})(),pe($,"styles",ke`
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
	`),Et(e,a),e})();const Eo=_e`
	<path
		fill="currentColor"
		d="M12 2a1 1 0 0 1 1 1v10.59l3.3-3.3a1 1 0 1 1 1.4 1.42l-5 5a1 1 0 0 1-1.4 0l-5-5a1 1 0 1 1 1.4-1.42l3.3 3.3V3a1 1 0 0 1 1-1ZM3 20a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2H3Z"
	/>
`;function Da(i={}){return k`<svg
		${be(i)}
		class="discord-icon-download"
		aria-hidden="true"
		role="img"
		xmlns="http://www.w3.org/2000/svg"
		width="20"
		height="20"
		fill="none"
		viewBox="0 0 24 24"
	>
		${Eo}
	</svg>`}const So=_e`
	<path fill="currentColor" d="M6 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H6ZM15 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-3Z"></path>
`;function js(i={}){return k`<svg ${be(i)} aria-hidden="true" role="img" width="16" height="16" fill="none" viewBox="0 0 24 24">${So}</svg>`}const Do=_e`
	<path fill="currentColor" d="M9.25 3.35C7.87 2.45 6 3.38 6 4.96v14.08c0 1.58 1.87 2.5 3.25 1.61l10.85-7.04a1.9 1.9 0 0 0 0-3.22L9.25 3.35Z"></path>
`;function Hs(i={}){return k`<svg ${be(i)} aria-hidden="true" role="img" width="16" height="16" fill="none" viewBox="0 0 24 24">${Do}</svg>`}const Oo=_e`
	<path fill="currentColor" d="M12,5 L12,1 L7,6 L12,11 L12,7 C15.31,7 18,9.69 18,13 C18,16.31 15.31,19 12,19 C8.69,19 6,16.31 6,13 L4,13 C4,17.42 7.58,21 12,21 C16.42,21 20,17.42 20,13 C20,8.58 16.42,5 12,5 L12,5 Z"></path>
`;function Es(i={}){return k`<svg ${be(i)} aria-hidden="true" role="img" width="16" height="16" fill="none" viewBox="0 0 24 24">${Oo}</svg>`}const Ao=_e`
	<path fill="currentColor" d="M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.74.32L5.92 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.92l4.28 4.68a1 1 0 0 0 .74.32H11a1 1 0 0 0 1-1V3ZM15.1 20.75c-.58.14-1.1-.33-1.1-.92v-.03c0-.5.37-.92.85-1.05a7 7 0 0 0 0-13.5A1.11 1.11 0 0 1 14 4.2v-.03c0-.6.52-1.06 1.1-.92a9 9 0 0 1 0 17.5Z"></path>
	<path fill="currentColor" d="M15.16 16.51c-.57.28-1.16-.2-1.16-.83v-.14c0-.43.28-.8.63-1.02a3 3 0 0 0 0-5.04c-.35-.23-.63-.6-.63-1.02v-.14c0-.63.59-1.1 1.16-.83a5 5 0 0 1 0 9.02Z"></path>
`;function Ss(i={}){return k`<svg ${be(i)} aria-hidden="true" role="img" width="24" height="24" fill="none" viewBox="0 0 24 24">${Ao}</svg>`}const Vo=_e`
	<path fill="currentColor" d="M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.74.32L5.92 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.92l4.28 4.68a1 1 0 0 0 .74.32H11a1 1 0 0 0 1-1V3ZM15.18 15.36c-.55.35-1.18-.12-1.18-.78v-.27c0-.36.2-.67.45-.93a2 2 0 0 0 0-2.76c-.24-.26-.45-.57-.45-.93v-.27c0-.66.63-1.13 1.18-.78a4 4 0 0 1 0 6.72Z"></path>
`;function Ds(i={}){return k`<svg ${be(i)} aria-hidden="true" role="img" width="24" height="24" fill="none" viewBox="0 0 24 24">${Vo}</svg>`}const Io=_e`
	<path fill="currentColor" d="M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.74.32L5.92 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.92l4.28 4.68a1 1 0 0 0 .74.32H11a1 1 0 0 0 1-1V3ZM22.7 8.3a1 1 0 0 0-1.4 0L19 10.58l-2.3-2.3a1 1 0 1 0-1.4 1.42L17.58 12l-2.3 2.3a1 1 0 0 0 1.42 1.4L19 13.42l2.3 2.3a1 1 0 0 0 1.4-1.42L20.42 12l2.3-2.3a1 1 0 0 0 0-1.4Z"></path>
`;function Os(i={}){return k`<svg ${be(i)} aria-hidden="true" role="img" width="24" height="24" fill="none" viewBox="0 0 24 24">${Io}</svg>`}var _i=function(i,t,a,e,s,m){function o(d){if(d!==void 0&&typeof d!="function")throw new TypeError("Function expected");return d}for(var c=e.kind,v=c==="getter"?"get":c==="setter"?"set":"value",u=!t&&i?e.static?i:i.prototype:null,n=t||(u?Object.getOwnPropertyDescriptor(u,e.name):{}),r,b=!1,p=a.length-1;p>=0;p--){var f={};for(var h in e)f[h]=h==="access"?{}:e[h];for(var h in e.access)f.access[h]=e.access[h];f.addInitializer=function(d){if(b)throw new TypeError("Cannot add initializers after decoration has completed");m.push(o(d||null))};var l=(0,a[p])(c==="accessor"?{get:n.get,set:n.set}:n[v],f);if(c==="accessor"){if(l===void 0)continue;if(l===null||typeof l!="object")throw new TypeError("Object expected");(r=o(l.get))&&(n.get=r),(r=o(l.set))&&(n.set=r),(r=o(l.init))&&s.unshift(r)}else(r=o(l))&&(c==="field"?s.unshift(r):n[v]=r)}u&&Object.defineProperty(u,e.name,n),b=!0},St=function(i,t,a){for(var e=arguments.length>2,s=0;s<t.length;s++)a=e?t[s].call(i,a):t[s].call(i);return e?a:void 0};let Lo=(()=>{var $,H,L,j,I,D;let i=[Ce("discord-audio-attachment")],t,a=[],e,s=ys,m,o=[],c=[],v,u=[],n=[],r,b=[],p=[],f,h=[],l=[],d,Q=[],ae=[];return $=class extends s{constructor(){super(...arguments);z(this,H,St(this,o,void 0));z(this,L,(St(this,c),St(this,u,void 0)));z(this,j,(St(this,n),St(this,b,void 0)));z(this,I,(St(this,p),St(this,h,void 0)));z(this,D,(St(this,l),St(this,Q,!1)));St(this,ae)}get href(){return y(this,H)}set href(M){w(this,H,M)}get name(){return y(this,L)}set name(M){w(this,L,M)}get bytes(){return y(this,j)}set bytes(M){w(this,j,M)}get bytesUnit(){return y(this,I)}set bytesUnit(M){w(this,I,M)}get lightTheme(){return y(this,D)}set lightTheme(M){w(this,D,M)}render(){var _,P;const M=(P=(_=this.name)==null?void 0:_.replaceAll(/\s/g,"_"))==null?void 0:P.replaceAll(/[^\w-]/g,"");return k`<div class="discord-media-attachment-non-visual-media-item-container">
			<div class="discord-audio-attachment-non-visual-media-item">
				<div class="discord-media-attachment-mosaic-item-media">
					<div
						class=${Be({"discord-audio-attachment-wrapper-audio":!0,"discord-audio-attachment-light-theme":this.lightTheme})}
					>
						<div class="discord-audio-attachment-audio-metadata">
							<div class="discord-audio-attachment-audio-metadata-content">
								<discord-link
									href=${fe(this.href)}
									ref="noreferrer noopener"
									target="_blank"
									role="button"
									aria-label="Download"
								>
									${M}
								</discord-link>
								<div class="discord-audio-attachment-audio-metadata-size">
									${this.bytes}${X(this.bytesUnit,()=>k` ${this.bytesUnit}`,()=>null)}
								</div>
							</div>
						</div>
						<audio
							${Pt(this.mediaComponentRef)}
							class="discord-audio-attachment-audio-element"
							preload="metadata"
							@progress=${this.displayBufferedAmount}
							@ended=${this.handleEnded}
						>
							<source src=${fe(this.href)} />
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
								${X(this.hasEnded,()=>Es({class:"discord-media-attachment-control-icon"}),()=>X(this.isPlaying,()=>js({class:"discord-media-attachment-control-icon"}),()=>Hs({class:"discord-media-attachment-control-icon"})))}
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
										${Pt(this.seekSliderRef)}
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
									<div ${Pt(this.volumeControlRef)} class="discord-media-attachment-button-slider">
										<div
											class="discord-media-attachment-volume-vertical"
											@mouseenter=${this.handleVolumeVerticalEnter}
											@mouseleave=${this.handleVolumeVerticalLeave}
										>
											<input
												${Pt(this.volumeControlInputRef)}
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
											${X(this.currentVolume===0||this.isMuted,()=>Os({class:"discord-media-attachment-button-control-icon"}),()=>X(this.currentVolume<=.5,()=>Ds({class:"discord-media-attachment-button-control-icon"}),()=>Ss({class:"discord-media-attachment-button-control-icon"})))}
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
					href="${fe(this.href)}"
					rel="noreferrer noopener"
					target="_blank"
					role="button"
					tabindex="0"
				>
					${Da()}
				</a>
			</div>
		</div>`}},H=new WeakMap,L=new WeakMap,j=new WeakMap,I=new WeakMap,D=new WeakMap,e=$,(()=>{const M=typeof Symbol=="function"&&Symbol.metadata?Object.create(s[Symbol.metadata]??null):void 0;m=[x()],v=[x()],r=[x({type:Number})],f=[x({attribute:"bytes-unit"})],d=[Ae({context:Ne,subscribe:!0}),x({type:Boolean,reflect:!0,attribute:"light-theme"})],_i($,null,m,{kind:"accessor",name:"href",static:!1,private:!1,access:{has:_=>"href"in _,get:_=>_.href,set:(_,P)=>{_.href=P}},metadata:M},o,c),_i($,null,v,{kind:"accessor",name:"name",static:!1,private:!1,access:{has:_=>"name"in _,get:_=>_.name,set:(_,P)=>{_.name=P}},metadata:M},u,n),_i($,null,r,{kind:"accessor",name:"bytes",static:!1,private:!1,access:{has:_=>"bytes"in _,get:_=>_.bytes,set:(_,P)=>{_.bytes=P}},metadata:M},b,p),_i($,null,f,{kind:"accessor",name:"bytesUnit",static:!1,private:!1,access:{has:_=>"bytesUnit"in _,get:_=>_.bytesUnit,set:(_,P)=>{_.bytesUnit=P}},metadata:M},h,l),_i($,null,d,{kind:"accessor",name:"lightTheme",static:!1,private:!1,access:{has:_=>"lightTheme"in _,get:_=>_.lightTheme,set:(_,P)=>{_.lightTheme=P}},metadata:M},Q,ae),_i(null,t={value:e},i,{kind:"class",name:e.name,metadata:M},null,a),e=t.value,M&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:M})})(),pe($,"styles",[ws,zs,bs,ke`
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
		`]),St(e,a),e})();const No=_e`
	<path d="M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z" fill="currentColor" />
`;function kt(i={}){return k`<svg
		${be(i)}
		class="discord-application-tag-verified"
		aria-label="Verified App"
		aria-hidden="false"
		width="16"
		height="16"
		viewBox="0 0 16 15.2"
		xmlns="http://www.w3.org/2000/svg"
	>
		${No}
	</svg>`}var va=function(i,t,a,e,s,m){function o(d){if(d!==void 0&&typeof d!="function")throw new TypeError("Function expected");return d}for(var c=e.kind,v=c==="getter"?"get":c==="setter"?"set":"value",u=!t&&i?e.static?i:i.prototype:null,n=t||(u?Object.getOwnPropertyDescriptor(u,e.name):{}),r,b=!1,p=a.length-1;p>=0;p--){var f={};for(var h in e)f[h]=h==="access"?{}:e[h];for(var h in e.access)f.access[h]=e.access[h];f.addInitializer=function(d){if(b)throw new TypeError("Cannot add initializers after decoration has completed");m.push(o(d||null))};var l=(0,a[p])(c==="accessor"?{get:n.get,set:n.set}:n[v],f);if(c==="accessor"){if(l===void 0)continue;if(l===null||typeof l!="object")throw new TypeError("Object expected");(r=o(l.get))&&(n.get=r),(r=o(l.set))&&(n.set=r),(r=o(l.init))&&s.unshift(r)}else(r=o(l))&&(c==="field"?s.unshift(r):n[v]=r)}u&&Object.defineProperty(u,e.name,n),b=!0},Ii=function(i,t,a){for(var e=arguments.length>2,s=0;s<t.length;s++)a=e?t[s].call(i,a):t[s].call(i);return e?a:void 0};let Po=(()=>{var r,b,p;let i=[Ce("discord-verified-author-tag")],t,a=[],e,s=we,m,o=[],c=[],v,u=[],n=[];return r=class extends s{constructor(){super(...arguments);z(this,b,Ii(this,o,!1));z(this,p,(Ii(this,c),Ii(this,u,!1)));Ii(this,n)}get verified(){return y(this,b)}set verified(l){w(this,b,l)}get compactMode(){return y(this,p)}set compactMode(l){w(this,p,l)}render(){return k`${X(this.verified,()=>kt())}App`}},b=new WeakMap,p=new WeakMap,e=r,(()=>{const l=typeof Symbol=="function"&&Symbol.metadata?Object.create(s[Symbol.metadata]??null):void 0;m=[x({type:Boolean})],v=[Ae({context:ti}),x({type:Boolean,reflect:!0,attribute:"compact-mode"})],va(r,null,m,{kind:"accessor",name:"verified",static:!1,private:!1,access:{has:d=>"verified"in d,get:d=>d.verified,set:(d,Q)=>{d.verified=Q}},metadata:l},o,c),va(r,null,v,{kind:"accessor",name:"compactMode",static:!1,private:!1,access:{has:d=>"compactMode"in d,get:d=>d.compactMode,set:(d,Q)=>{d.compactMode=Q}},metadata:l},u,n),va(null,t={value:e},i,{kind:"class",name:e.name,metadata:l},null,a),e=t.value,l&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:l})})(),pe(r,"styles",ke`
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
	`),Ii(e,a),e})();/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const As="important",Bo=" !"+As,qt=na(class extends Sa{constructor(i){var t;if(super(i),i.type!==Ea.ATTRIBUTE||i.name!=="style"||((t=i.strings)==null?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(i){return Object.keys(i).reduce(((t,a)=>{const e=i[a];return e==null?t:t+`${a=a.includes("-")?a:a.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${e};`}),"")}update(i,[t]){const{style:a}=i.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const e of this.ft)t[e]==null&&(this.ft.delete(e),e.includes("-")?a.removeProperty(e):a[e]=null);for(const e in t){const s=t[e];if(s!=null){this.ft.add(e);const m=typeof s=="string"&&s.endsWith(Bo);e.includes("-")||m?a.setProperty(e,m?s.slice(0,-11):s,m?As:""):a[e]=s}}return ei}});class Yt extends Error{constructor(t){super(t),this.name="DiscordComponentsError"}}const Ro=new Intl.DateTimeFormat("en-US",{day:"2-digit",month:"2-digit",year:"numeric"}),Uo=new Intl.DateTimeFormat("en-US",{hour12:!0,hour:"2-digit",minute:"2-digit"}),Fo=new Intl.DateTimeFormat("en-US",{hour12:!1,hour:"2-digit",minute:"2-digit"}),Zo=i=>i instanceof Date?Ro.format(i):i,qo=(i,t=!1)=>i instanceof Date?t?Fo.format(i):Uo.format(i):i;function Qi(i,t=!1,a=!1){if(!(i instanceof Date)&&typeof i!="string")throw new TypeError("Timestamp prop must be a Date object or a string.");return t?qo(i,a):Zo(i)}const Ka=/\.(?<ext>bmp|jpe?g|png|gif|webp|tiff)$/i;function Yo(i){if(!Ka.test(i))throw new Yt(`The url of an image for discord-image-attachment should match the regex ${Ka}`)}const Wo=/(?:<(?<animated>a)?:(?<name>\w{2,32}):)?(?<id>\d{17,21})>?/;function Oa(i){var e;const t=(e=Ti().emojis)==null?void 0:e[i];if(t)return t;const a=Wo.exec(i);if(a!=null&&a.groups){const{name:s,id:m,animated:o}=a.groups;return{name:s,url:`https://cdn.discordapp.com/emojis/${m}.${o?"gif":"png"}`}}}function Vs(i){if(i)return xo.get(i)??i}var vt=function(i,t,a,e,s,m){function o(d){if(d!==void 0&&typeof d!="function")throw new TypeError("Function expected");return d}for(var c=e.kind,v=c==="getter"?"get":c==="setter"?"set":"value",u=!t&&i?e.static?i:i.prototype:null,n=t||(u?Object.getOwnPropertyDescriptor(u,e.name):{}),r,b=!1,p=a.length-1;p>=0;p--){var f={};for(var h in e)f[h]=h==="access"?{}:e[h];for(var h in e.access)f.access[h]=e.access[h];f.addInitializer=function(d){if(b)throw new TypeError("Cannot add initializers after decoration has completed");m.push(o(d||null))};var l=(0,a[p])(c==="accessor"?{get:n.get,set:n.set}:n[v],f);if(c==="accessor"){if(l===void 0)continue;if(l===null||typeof l!="object")throw new TypeError("Object expected");(r=o(l.get))&&(n.get=r),(r=o(l.set))&&(n.set=r),(r=o(l.init))&&s.unshift(r)}else(r=o(l))&&(c==="field"?s.unshift(r):n[v]=r)}u&&Object.defineProperty(u,e.name,n),b=!0},Pe=function(i,t,a){for(var e=arguments.length>2,s=0;s<t.length;s++)a=e?t[s].call(i,a):t[s].call(i);return e?a:void 0};let Qo=(()=>{var B,F,ue,Ve,G,S,se,Se,He,je,ee,oe,N,C;let i=[Ce("discord-author-info")],t,a=[],e,s=we,m,o=[],c=[],v,u=[],n=[],r,b=[],p=[],f,h=[],l=[],d,Q=[],ae=[],$,H=[],L=[],j,I=[],D=[],re,ge=[],M=[],_,P=[],ye=[],O,T=[],ie=[],ne,W=[],g=[],E,K=[],Y=[],A,R=[],q=[];return B=class extends s{constructor(){super(...arguments);z(this,F,Pe(this,o,void 0));z(this,ue,(Pe(this,c),Pe(this,u,!1)));z(this,Ve,(Pe(this,n),Pe(this,b,!1)));z(this,G,(Pe(this,p),Pe(this,h,!1)));z(this,S,(Pe(this,l),Pe(this,Q,!1)));z(this,se,(Pe(this,ae),Pe(this,H,void 0)));z(this,Se,(Pe(this,L),Pe(this,I,void 0)));z(this,He,(Pe(this,D),Pe(this,ge,void 0)));z(this,je,(Pe(this,M),Pe(this,P,void 0)));z(this,ee,(Pe(this,ye),Pe(this,T,void 0)));z(this,oe,(Pe(this,ie),Pe(this,W,!1)));z(this,N,(Pe(this,g),Pe(this,K,!1)));z(this,C,(Pe(this,Y),Pe(this,R,!1)));Pe(this,q)}get author(){return y(this,F)}set author(le){w(this,F,le)}get bot(){return y(this,ue)}set bot(le){w(this,ue,le)}get server(){return y(this,Ve)}set server(le){w(this,Ve,le)}get officialApp(){return y(this,G)}set officialApp(le){w(this,G,le)}get op(){return y(this,S)}set op(le){w(this,S,le)}get roleColor(){return y(this,se)}set roleColor(le){w(this,se,le)}get roleIcon(){return y(this,Se)}set roleIcon(le){w(this,Se,le)}get roleName(){return y(this,He)}set roleName(le){w(this,He,le)}get clanIcon(){return y(this,je)}set clanIcon(le){w(this,je,le)}get clanTag(){return y(this,ee)}set clanTag(le){w(this,ee,le)}get verified(){return y(this,oe)}set verified(le){w(this,oe,le)}get compactMode(){return y(this,N)}set compactMode(le){w(this,N,le)}get lightTheme(){return y(this,C)}set lightTheme(le){w(this,C,le)}render(){var Te,et;const le=Vs(this.clanIcon),J=(Te=this.clanTag)==null?void 0:Te.slice(0,4);return k`${X(this.compactMode,()=>null,()=>k`<span class="discord-author-username" style="${qt({color:this.roleColor??void 0})}">${this.author}</span>`)}
		${X(this.roleIcon&&!this.compactMode,()=>k`<img
					class="discord-author-role-icon"
					src=${fe(this.roleIcon)}
					height="20"
					width="20"
					alt=${fe(this.roleName)}
					draggable="false"
				/>`)}
		${X(this.bot&&!this.server&&!this.officialApp,()=>k`<discord-verified-author-tag .verified=${this.verified}></discord-verified-author-tag>`)}
		${X(this.server&&!this.bot&&!this.officialApp,()=>k`<span class="discord-application-tag">Server</span>`)}
		${X(this.officialApp&&!this.server&&!this.bot,()=>k`<span class="discord-official-application">${kt()}OFFICIAL</span>`)}
		${X(this.op,()=>k`<span class="discord-application-tag discord-application-tag-op">OP</span>`)}
		${X(this.compactMode,()=>k`<span class="discord-author-username" style="${qt({color:this.roleColor??void 0})}">${this.author}</span>`)}
		${X(this.clanIcon&&this.clanTag&&((et=this.clanTag)==null?void 0:et.length)>0,()=>k`
				<span class="discord-clan-tag">
					${le==="string"?k`<img srcset=${fe(le)} alt=${fe(J)} width="12" height="12" draggable="false" />`:le}
					<span>${J}</span>
				</span>
			`)} `}},F=new WeakMap,ue=new WeakMap,Ve=new WeakMap,G=new WeakMap,S=new WeakMap,se=new WeakMap,Se=new WeakMap,He=new WeakMap,je=new WeakMap,ee=new WeakMap,oe=new WeakMap,N=new WeakMap,C=new WeakMap,e=B,(()=>{const le=typeof Symbol=="function"&&Symbol.metadata?Object.create(s[Symbol.metadata]??null):void 0;m=[x()],v=[x({type:Boolean})],r=[x({type:Boolean})],f=[x({type:Boolean,attribute:"official-app"})],d=[x({type:Boolean})],$=[x({attribute:"role-color"})],j=[x({attribute:"role-icon"})],re=[x({attribute:"role-name"})],_=[x({attribute:"clan-icon"})],O=[x({attribute:"clan-tag"})],ne=[x({type:Boolean})],E=[Ae({context:ti}),x({type:Boolean,reflect:!0,attribute:"compact-mode"})],A=[Ae({context:Ne}),x({type:Boolean,reflect:!0,attribute:"light-theme"})],vt(B,null,m,{kind:"accessor",name:"author",static:!1,private:!1,access:{has:J=>"author"in J,get:J=>J.author,set:(J,Te)=>{J.author=Te}},metadata:le},o,c),vt(B,null,v,{kind:"accessor",name:"bot",static:!1,private:!1,access:{has:J=>"bot"in J,get:J=>J.bot,set:(J,Te)=>{J.bot=Te}},metadata:le},u,n),vt(B,null,r,{kind:"accessor",name:"server",static:!1,private:!1,access:{has:J=>"server"in J,get:J=>J.server,set:(J,Te)=>{J.server=Te}},metadata:le},b,p),vt(B,null,f,{kind:"accessor",name:"officialApp",static:!1,private:!1,access:{has:J=>"officialApp"in J,get:J=>J.officialApp,set:(J,Te)=>{J.officialApp=Te}},metadata:le},h,l),vt(B,null,d,{kind:"accessor",name:"op",static:!1,private:!1,access:{has:J=>"op"in J,get:J=>J.op,set:(J,Te)=>{J.op=Te}},metadata:le},Q,ae),vt(B,null,$,{kind:"accessor",name:"roleColor",static:!1,private:!1,access:{has:J=>"roleColor"in J,get:J=>J.roleColor,set:(J,Te)=>{J.roleColor=Te}},metadata:le},H,L),vt(B,null,j,{kind:"accessor",name:"roleIcon",static:!1,private:!1,access:{has:J=>"roleIcon"in J,get:J=>J.roleIcon,set:(J,Te)=>{J.roleIcon=Te}},metadata:le},I,D),vt(B,null,re,{kind:"accessor",name:"roleName",static:!1,private:!1,access:{has:J=>"roleName"in J,get:J=>J.roleName,set:(J,Te)=>{J.roleName=Te}},metadata:le},ge,M),vt(B,null,_,{kind:"accessor",name:"clanIcon",static:!1,private:!1,access:{has:J=>"clanIcon"in J,get:J=>J.clanIcon,set:(J,Te)=>{J.clanIcon=Te}},metadata:le},P,ye),vt(B,null,O,{kind:"accessor",name:"clanTag",static:!1,private:!1,access:{has:J=>"clanTag"in J,get:J=>J.clanTag,set:(J,Te)=>{J.clanTag=Te}},metadata:le},T,ie),vt(B,null,ne,{kind:"accessor",name:"verified",static:!1,private:!1,access:{has:J=>"verified"in J,get:J=>J.verified,set:(J,Te)=>{J.verified=Te}},metadata:le},W,g),vt(B,null,E,{kind:"accessor",name:"compactMode",static:!1,private:!1,access:{has:J=>"compactMode"in J,get:J=>J.compactMode,set:(J,Te)=>{J.compactMode=Te}},metadata:le},K,Y),vt(B,null,A,{kind:"accessor",name:"lightTheme",static:!1,private:!1,access:{has:J=>"lightTheme"in J,get:J=>J.lightTheme,set:(J,Te)=>{J.lightTheme=Te}},metadata:le},R,q),vt(null,t={value:e},i,{kind:"class",name:e.name,metadata:le},null,a),e=t.value,le&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:le})})(),pe(B,"styles",ke`
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
	`),Pe(e,a),e})();var Go=function(i,t,a,e,s,m){function o(d){if(d!==void 0&&typeof d!="function")throw new TypeError("Function expected");return d}for(var c=e.kind,v=c==="getter"?"get":c==="setter"?"set":"value",u=!t&&i?e.static?i:i.prototype:null,n=t||(u?Object.getOwnPropertyDescriptor(u,e.name):{}),r,b=!1,p=a.length-1;p>=0;p--){var f={};for(var h in e)f[h]=h==="access"?{}:e[h];for(var h in e.access)f.access[h]=e.access[h];f.addInitializer=function(d){if(b)throw new TypeError("Cannot add initializers after decoration has completed");m.push(o(d||null))};var l=(0,a[p])(c==="accessor"?{get:n.get,set:n.set}:n[v],f);if(c==="accessor"){if(l===void 0)continue;if(l===null||typeof l!="object")throw new TypeError("Object expected");(r=o(l.get))&&(n.get=r),(r=o(l.set))&&(n.set=r),(r=o(l.init))&&s.unshift(r)}else(r=o(l))&&(c==="field"?s.unshift(r):n[v]=r)}u&&Object.defineProperty(u,e.name,n),b=!0},Jo=function(i,t,a){for(var e=arguments.length>2,s=0;s<t.length;s++)a=e?t[s].call(i,a):t[s].call(i);return e?a:void 0};let Ko=(()=>{var m;let i=[Ce("discord-bold")],t,a=[],e,s=we;return m=class extends s{render(){return k`
			<strong>
				<slot></slot>
			</strong>
		`}},e=m,(()=>{const c=typeof Symbol=="function"&&Symbol.metadata?Object.create(s[Symbol.metadata]??null):void 0;Go(null,t={value:e},i,{kind:"class",name:e.name,metadata:c},null,a),e=t.value,c&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:c})})(),pe(m,"styles",ke`
		:host > strong {
			font-weight: 700;
		}
	`),Jo(e,a),e})();const Xo=_e`
	<path
		fill="currentColor"
		d="M10 5V3H5.375C4.06519 3 3 4.06519 3 5.375V18.625C3 19.936 4.06519 21 5.375 21H18.625C19.936 21 21 19.936 21 18.625V14H19V19H5V5H10Z"
	/>
	<path fill="currentColor" d="M21 2.99902H14V4.99902H17.586L9.29297 13.292L10.707 14.706L19 6.41302V9.99902H21V2.99902Z"
	/>
`;function el(i={}){return k`<svg ${be(i)} class="discord-button-launch" aria-hidden="false" width="16" height="16" viewBox="0 0 24 24">
		${Xo}
	</svg>`}var ri=function(i,t,a,e,s,m){function o(d){if(d!==void 0&&typeof d!="function")throw new TypeError("Function expected");return d}for(var c=e.kind,v=c==="getter"?"get":c==="setter"?"set":"value",u=!t&&i?e.static?i:i.prototype:null,n=t||(u?Object.getOwnPropertyDescriptor(u,e.name):{}),r,b=!1,p=a.length-1;p>=0;p--){var f={};for(var h in e)f[h]=h==="access"?{}:e[h];for(var h in e.access)f.access[h]=e.access[h];f.addInitializer=function(d){if(b)throw new TypeError("Cannot add initializers after decoration has completed");m.push(o(d||null))};var l=(0,a[p])(c==="accessor"?{get:n.get,set:n.set}:n[v],f);if(c==="accessor"){if(l===void 0)continue;if(l===null||typeof l!="object")throw new TypeError("Object expected");(r=o(l.get))&&(n.get=r),(r=o(l.set))&&(n.set=r),(r=o(l.init))&&s.unshift(r)}else(r=o(l))&&(c==="field"?s.unshift(r):n[v]=r)}u&&Object.defineProperty(u,e.name,n),b=!0},bt=function(i,t,a){for(var e=arguments.length>2,s=0;s<t.length;s++)a=e?t[s].call(i,a):t[s].call(i);return e?a:void 0};let tl=(()=>{var j,I,D,re,ge,M,_;let i=[Ce("discord-button")],t,a=[],e,s=we,m,o=[],c=[],v,u=[],n=[],r,b=[],p=[],f,h=[],l=[],d,Q=[],ae=[],$,H=[],L=[];return j=class extends s{constructor(){super(...arguments);z(this,I,bt(this,o,void 0));z(this,D,(bt(this,c),bt(this,u,"emoji")));z(this,re,(bt(this,n),bt(this,b,void 0)));z(this,ge,(bt(this,p),bt(this,h,!1)));z(this,M,(bt(this,l),bt(this,Q,"secondary")));z(this,_,(bt(this,ae),bt(this,H,void 0)));pe(this,"validButtonTypes",(bt(this,L),new Set(["primary","secondary","success","destructive"])))}get emoji(){return y(this,I)}set emoji(O){w(this,I,O)}get emojiName(){return y(this,D)}set emojiName(O){w(this,D,O)}get url(){return y(this,re)}set url(O){w(this,re,O)}get disabled(){return y(this,ge)}set disabled(O){w(this,ge,O)}get type(){return y(this,M)}set type(O){w(this,M,O)}get modalId(){return y(this,_)}set modalId(O){w(this,_,O)}checkType(){if(this.type){if(typeof this.type!="string")throw new TypeError("DiscordButton `type` prop must be a string.");if(!this.validButtonTypes.has(this.type))throw new RangeError("DiscordButton `type` prop must be one of: 'primary', 'secondary', 'success', 'destructive'")}}checkParentElement(){var O;if(((O=this.parentElement)==null?void 0:O.tagName.toLowerCase())!=="discord-action-row")throw new Yt("All <discord-button> components must be direct children of <discord-action-row>.")}handleButtonClick(){var O,T,ie,ne,W;if(this.modalId){const g=(ie=(T=(O=this.parentElement)==null?void 0:O.parentElement)==null?void 0:T.parentElement)==null?void 0:ie.parentElement;if(((ne=g==null?void 0:g.tagName)==null?void 0:ne.toLowerCase())==="discord-messages"){const E=g==null?void 0:g.querySelector("discord-modal"),K=(W=E==null?void 0:E.shadowRoot)==null?void 0:W.querySelector(`dialog#${this.modalId}`),Y=K==null?void 0:K.querySelector("div.discord-modal-box");if(K instanceof HTMLDialogElement&&Y instanceof HTMLDivElement&&(K.showModal(),Y.style.display="flex",E)){const A=globalThis.getComputedStyle(globalThis.document.body).overflow;E.originalBodyOverflow=A,globalThis.document.body.style.overflow="hidden"}}}}render(){this.checkType(),this.checkParentElement();const O=this.url&&!this.disabled,T=k`
			${X(this.emoji,()=>k`<img src=${this.emoji} alt=${this.emojiName} draggable="true" class="emoji" />`)}
			<span>
				<slot></slot>
			</span>
			${X(this.url,()=>el())}
		`;return O?k`<a class="secondary" href=${this.url} target="_blank" rel="noopener noreferrer">${T}</a>`:k`<button
			class=${Be({[this.type]:!0,disabled:this.disabled,hoverable:!this.disabled})}
			@click=${this.handleButtonClick}
		>
			${T}
		</button>`}},I=new WeakMap,D=new WeakMap,re=new WeakMap,ge=new WeakMap,M=new WeakMap,_=new WeakMap,e=j,(()=>{const O=typeof Symbol=="function"&&Symbol.metadata?Object.create(s[Symbol.metadata]??null):void 0;m=[x({reflect:!0,attribute:"emoji"})],v=[x({reflect:!0,attribute:"emoji-name"})],r=[x({reflect:!0,attribute:"url"})],f=[x({type:Boolean,reflect:!0,attribute:"disabled"})],d=[x({reflect:!0,attribute:"type"})],$=[x({reflect:!0,attribute:"modal-id"})],ri(j,null,m,{kind:"accessor",name:"emoji",static:!1,private:!1,access:{has:T=>"emoji"in T,get:T=>T.emoji,set:(T,ie)=>{T.emoji=ie}},metadata:O},o,c),ri(j,null,v,{kind:"accessor",name:"emojiName",static:!1,private:!1,access:{has:T=>"emojiName"in T,get:T=>T.emojiName,set:(T,ie)=>{T.emojiName=ie}},metadata:O},u,n),ri(j,null,r,{kind:"accessor",name:"url",static:!1,private:!1,access:{has:T=>"url"in T,get:T=>T.url,set:(T,ie)=>{T.url=ie}},metadata:O},b,p),ri(j,null,f,{kind:"accessor",name:"disabled",static:!1,private:!1,access:{has:T=>"disabled"in T,get:T=>T.disabled,set:(T,ie)=>{T.disabled=ie}},metadata:O},h,l),ri(j,null,d,{kind:"accessor",name:"type",static:!1,private:!1,access:{has:T=>"type"in T,get:T=>T.type,set:(T,ie)=>{T.type=ie}},metadata:O},Q,ae),ri(j,null,$,{kind:"accessor",name:"modalId",static:!1,private:!1,access:{has:T=>"modalId"in T,get:T=>T.modalId,set:(T,ie)=>{T.modalId=ie}},metadata:O},H,L),ri(null,t={value:e},i,{kind:"class",name:e.name,metadata:O},null,a),e=t.value,O&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:O})})(),pe(j,"styles",ke`
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
	`),bt(e,a),e})();var Ji=function(i,t,a,e,s,m){function o(d){if(d!==void 0&&typeof d!="function")throw new TypeError("Function expected");return d}for(var c=e.kind,v=c==="getter"?"get":c==="setter"?"set":"value",u=!t&&i?e.static?i:i.prototype:null,n=t||(u?Object.getOwnPropertyDescriptor(u,e.name):{}),r,b=!1,p=a.length-1;p>=0;p--){var f={};for(var h in e)f[h]=h==="access"?{}:e[h];for(var h in e.access)f.access[h]=e.access[h];f.addInitializer=function(d){if(b)throw new TypeError("Cannot add initializers after decoration has completed");m.push(o(d||null))};var l=(0,a[p])(c==="accessor"?{get:n.get,set:n.set}:n[v],f);if(c==="accessor"){if(l===void 0)continue;if(l===null||typeof l!="object")throw new TypeError("Object expected");(r=o(l.get))&&(n.get=r),(r=o(l.set))&&(n.set=r),(r=o(l.init))&&s.unshift(r)}else(r=o(l))&&(c==="field"?s.unshift(r):n[v]=r)}u&&Object.defineProperty(u,e.name,n),b=!0},oi=function(i,t,a){for(var e=arguments.length>2,s=0;s<t.length;s++)a=e?t[s].call(i,a):t[s].call(i);return e?a:void 0};let il=(()=>{var f,h,l,d;let i=[Ce("discord-code")],t,a=[],e,s=we,m,o=[],c=[],v,u=[],n=[],r,b=[],p=[];return f=class extends s{constructor(){super(...arguments);z(this,h,oi(this,o,!1));z(this,l,(oi(this,c),oi(this,u,!1)));z(this,d,(oi(this,n),oi(this,b,!1)));oi(this,p)}get multiline(){return y(this,h)}set multiline($){w(this,h,$)}get lightTheme(){return y(this,l)}set lightTheme($){w(this,l,$)}get embed(){return y(this,d)}set embed($){w(this,d,$)}render(){return this.multiline?k`<discord-pre ?embed=${this.embed}
				><code><slot></slot></code
			></discord-pre>`:k`<code><slot></slot></code>`}},h=new WeakMap,l=new WeakMap,d=new WeakMap,e=f,(()=>{const $=typeof Symbol=="function"&&Symbol.metadata?Object.create(s[Symbol.metadata]??null):void 0;m=[x({type:Boolean,reflect:!0})],v=[Ae({context:Ne,subscribe:!0}),x({type:Boolean,reflect:!0,attribute:"light-theme"})],r=[x({type:Boolean,reflect:!0})],Ji(f,null,m,{kind:"accessor",name:"multiline",static:!1,private:!1,access:{has:H=>"multiline"in H,get:H=>H.multiline,set:(H,L)=>{H.multiline=L}},metadata:$},o,c),Ji(f,null,v,{kind:"accessor",name:"lightTheme",static:!1,private:!1,access:{has:H=>"lightTheme"in H,get:H=>H.lightTheme,set:(H,L)=>{H.lightTheme=L}},metadata:$},u,n),Ji(f,null,r,{kind:"accessor",name:"embed",static:!1,private:!1,access:{has:H=>"embed"in H,get:H=>H.embed,set:(H,L)=>{H.embed=L}},metadata:$},b,p),Ji(null,t={value:e},i,{kind:"class",name:e.name,metadata:$},null,a),e=t.value,$&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:$})})(),pe(f,"styles",ke`
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
	`),oi(e,a),e})();const al=_e`
	<path
		fill="currentColor"
		d="M56 50.6667V13.3333C56 10.4 53.6 8 50.6667 8H13.3333C10.4 8 8 10.4 8 13.3333V50.6667C8 53.6 10.4 56 13.3333 56H50.6667C53.6 56 56 53.6 56 50.6667ZM22.6667 36L29.3333 44.0267L38.6667 32L50.6667 48H13.3333L22.6667 36Z"
	/>
`;function Is(i={}){return k`<svg ${be(i)} aria-hidden="false" width="64" height="64" viewBox="0 0 64 64">${al}</svg>`}const sl=_e`
	<path
		fill="currentColor"
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM16.8995 8.41419L15.4853 6.99998L7 15.4853L8.41421 16.8995L16.8995 8.41419Z"
	/>
`;function Ls(i){return k`<svg ${be(i||{})} class="discord-command-icon" aria-hidden="false" width="24" height="24" viewBox="0 0 24 24">
		${sl}
	</svg>`}const rl=_e`
	<path
		d="M0.809739 3.59646L5.12565 0.468433C5.17446 0.431163 5.23323 0.408043 5.2951 0.401763C5.35698 0.395482 5.41943 0.406298 5.4752 0.432954C5.53096 0.45961 5.57776 0.50101 5.61013 0.552343C5.64251 0.603676 5.65914 0.662833 5.6581 0.722939V2.3707C10.3624 2.3707 11.2539 5.52482 11.3991 7.21174C11.4028 7.27916 11.3848 7.34603 11.3474 7.40312C11.3101 7.46021 11.2554 7.50471 11.1908 7.53049C11.1262 7.55626 11.0549 7.56204 10.9868 7.54703C10.9187 7.53201 10.857 7.49695 10.8104 7.44666C8.72224 5.08977 5.6581 5.63359 5.6581 5.63359V7.28135C5.65831 7.34051 5.64141 7.39856 5.60931 7.44894C5.5772 7.49932 5.53117 7.54004 5.4764 7.5665C5.42163 7.59296 5.3603 7.60411 5.29932 7.59869C5.23834 7.59328 5.18014 7.57151 5.13128 7.53585L0.809739 4.40892C0.744492 4.3616 0.691538 4.30026 0.655067 4.22975C0.618596 4.15925 0.599609 4.08151 0.599609 4.00269C0.599609 3.92386 0.618596 3.84612 0.655067 3.77562C0.691538 3.70511 0.744492 3.64377 0.809739 3.59646Z"
		fill="currentColor"
	/>
`;function ol(i={}){return k`<svg ${be(i)} class="discord-reply-icon" aria-hidden="false" width="12" height="8" viewBox="0 0 12 8">${rl}</svg>`}var Ge=function(i,t,a,e,s,m){function o(d){if(d!==void 0&&typeof d!="function")throw new TypeError("Function expected");return d}for(var c=e.kind,v=c==="getter"?"get":c==="setter"?"set":"value",u=!t&&i?e.static?i:i.prototype:null,n=t||(u?Object.getOwnPropertyDescriptor(u,e.name):{}),r,b=!1,p=a.length-1;p>=0;p--){var f={};for(var h in e)f[h]=h==="access"?{}:e[h];for(var h in e.access)f.access[h]=e.access[h];f.addInitializer=function(d){if(b)throw new TypeError("Cannot add initializers after decoration has completed");m.push(o(d||null))};var l=(0,a[p])(c==="accessor"?{get:n.get,set:n.set}:n[v],f);if(c==="accessor"){if(l===void 0)continue;if(l===null||typeof l!="object")throw new TypeError("Object expected");(r=o(l.get))&&(n.get=r),(r=o(l.set))&&(n.set=r),(r=o(l.init))&&s.unshift(r)}else(r=o(l))&&(c==="field"?s.unshift(r):n[v]=r)}u&&Object.defineProperty(u,e.name,n),b=!0},Ie=function(i,t,a){for(var e=arguments.length>2,s=0;s<t.length;s++)a=e?t[s].call(i,a):t[s].call(i);return e?a:void 0};let Ns=(()=>{var $e,le,J,Te,et,Ct,Le,st,rt,ot,lt,nt,ct,dt,ht,mt,ut,ft,De;let i=[Ce("discord-reply")],t,a=[],e,s=we,m,o=[],c=[],v,u=[],n=[],r,b=[],p=[],f,h=[],l=[],d,Q=[],ae=[],$,H=[],L=[],j,I=[],D=[],re,ge=[],M=[],_,P=[],ye=[],O,T=[],ie=[],ne,W=[],g=[],E,K=[],Y=[],A,R=[],q=[],B,F=[],ue=[],Ve,G=[],S=[],se,Se=[],He=[],je,ee=[],oe=[],N,C=[],ce=[];return $e=class extends s{constructor(){super(...arguments);z(this,le,Ie(this,o,void 0));z(this,J,(Ie(this,c),Ie(this,u,"User")));z(this,Te,(Ie(this,n),Ie(this,b,void 0)));z(this,et,(Ie(this,p),Ie(this,h,!1)));z(this,Ct,(Ie(this,l),Ie(this,Q,!1)));z(this,Le,(Ie(this,ae),Ie(this,H,!1)));z(this,st,(Ie(this,L),Ie(this,I,!1)));z(this,rt,(Ie(this,D),Ie(this,ge,!1)));z(this,ot,(Ie(this,M),Ie(this,P,!1)));z(this,lt,(Ie(this,ye),Ie(this,T,void 0)));z(this,nt,(Ie(this,ie),Ie(this,W,!1)));z(this,ct,(Ie(this,g),Ie(this,K,!1)));z(this,dt,(Ie(this,Y),Ie(this,R,!1)));z(this,ht,(Ie(this,q),Ie(this,F,void 0)));z(this,mt,(Ie(this,ue),Ie(this,G,void 0)));z(this,ut,(Ie(this,S),Ie(this,Se,!1)));z(this,ft,(Ie(this,He),Ie(this,ee,!1)));z(this,De,(Ie(this,oe),Ie(this,C,!1)));Ie(this,ce)}get profile(){return y(this,le)}set profile(de){w(this,le,de)}get author(){return y(this,J)}set author(de){w(this,J,de)}get avatar(){return y(this,Te)}set avatar(de){w(this,Te,de)}get bot(){return y(this,et)}set bot(de){w(this,et,de)}get server(){return y(this,Ct)}set server(de){w(this,Ct,de)}get officialApp(){return y(this,Le)}set officialApp(de){w(this,Le,de)}get op(){return y(this,st)}set op(de){w(this,st,de)}get verified(){return y(this,rt)}set verified(de){w(this,rt,de)}get edited(){return y(this,ot)}set edited(de){w(this,ot,de)}get roleColor(){return y(this,lt)}set roleColor(de){w(this,lt,de)}get command(){return y(this,nt)}set command(de){w(this,nt,de)}get attachment(){return y(this,ct)}set attachment(de){w(this,ct,de)}get mentions(){return y(this,dt)}set mentions(de){w(this,dt,de)}get clanIcon(){return y(this,ht)}set clanIcon(de){w(this,ht,de)}get clanTag(){return y(this,mt)}set clanTag(de){w(this,mt,de)}get deleted(){return y(this,ut)}set deleted(de){w(this,ut,de)}get lightTheme(){return y(this,ft)}set lightTheme(de){w(this,ft,de)}get compactMode(){return y(this,De)}set compactMode(de){w(this,De,de)}resolveAvatar(de){return Mt[de]??de??Mt.default}render(){var Bt;const de={author:this.author,bot:this.bot,verified:this.verified,officialApp:this.officialApp,op:this.op,server:this.server,roleColor:this.roleColor,clanIcon:this.clanIcon,clanTag:this.clanTag},Z=Reflect.get($i,this.profile)??{},ve={...de,...Z,avatar:this.resolveAvatar(Z.avatar??this.avatar)},at=Vs(ve.clanIcon),pt=(Bt=ve.clanTag)==null?void 0:Bt.slice(0,4),_t=k`
			${X(ve.bot&&!ve.server&&!ve.officialApp,()=>k`<span class="discord-application-tag">${ve.verified?kt():""}App</span>`)}
			${X(ve.server&&!ve.bot&&!ve.officialApp,()=>k`<span class="discord-application-tag">Server</span>`)}
			${X(ve.officialApp&&!ve.server&&!ve.bot,()=>k`<span class="discord-application-tag">${kt()}OFFICIAL</span>`)}
		`;return k`${X(this.compactMode||this.deleted,()=>k`<div class="discord-reply-badge">${ol()}</div>`,()=>k`<img class="discord-replied-message-avatar" src="${fe(ve.avatar)}" alt="${fe(ve.author)}" />`)}
		${X(this.deleted,()=>k`<div class="discord-replied-deleted-message-content"><em>Original message was deleted</em></div>`,()=>{var Wt;return k`${_t}
					<span class="discord-replied-message-username" style=${qt({color:ve.roleColor})}
						>${X(this.mentions,()=>"@")}${ve.author}</span
					>
					${X(ve.clanIcon&&ve.clanTag&&((Wt=ve.clanTag)==null?void 0:Wt.length)>0,()=>k`<span class="discord-clan-tag">
								${at==="string"?k`<img
											srcset=${fe(at)}
											alt=${fe(pt)}
											width="12"
											height="12"
											draggable="false"
										/>`:at}
								<span>${pt}</span>
							</span>`)}
					<!-- display: inline -->
					<div class="discord-replied-message-content"
						><slot></slot>${X(this.edited,()=>k`<span class="discord-message-edited">(edited)</span>`)}</div
					>
					${X(this.command,()=>Ls({class:"discord-replied-message-content-icon"}),()=>X(this.attachment,()=>Is({class:"discord-replied-message-content-icon"})))}`})}`}},le=new WeakMap,J=new WeakMap,Te=new WeakMap,et=new WeakMap,Ct=new WeakMap,Le=new WeakMap,st=new WeakMap,rt=new WeakMap,ot=new WeakMap,lt=new WeakMap,nt=new WeakMap,ct=new WeakMap,dt=new WeakMap,ht=new WeakMap,mt=new WeakMap,ut=new WeakMap,ft=new WeakMap,De=new WeakMap,e=$e,(()=>{const de=typeof Symbol=="function"&&Symbol.metadata?Object.create(s[Symbol.metadata]??null):void 0;m=[x()],v=[x()],r=[x()],f=[x({type:Boolean})],d=[x({type:Boolean})],$=[x({type:Boolean,attribute:"official-app"})],j=[x({type:Boolean})],re=[x({type:Boolean})],_=[x({type:Boolean})],O=[x({attribute:"role-color"})],ne=[x({type:Boolean})],E=[x({type:Boolean})],A=[x({type:Boolean})],B=[x({attribute:"clan-icon"})],Ve=[x({attribute:"clan-tag"})],se=[x({type:Boolean,reflect:!0})],je=[Ae({context:Ne}),x({type:Boolean,reflect:!0,attribute:"light-theme"})],N=[Ae({context:ti}),x({type:Boolean,reflect:!0,attribute:"compact-mode"})],Ge($e,null,m,{kind:"accessor",name:"profile",static:!1,private:!1,access:{has:Z=>"profile"in Z,get:Z=>Z.profile,set:(Z,ve)=>{Z.profile=ve}},metadata:de},o,c),Ge($e,null,v,{kind:"accessor",name:"author",static:!1,private:!1,access:{has:Z=>"author"in Z,get:Z=>Z.author,set:(Z,ve)=>{Z.author=ve}},metadata:de},u,n),Ge($e,null,r,{kind:"accessor",name:"avatar",static:!1,private:!1,access:{has:Z=>"avatar"in Z,get:Z=>Z.avatar,set:(Z,ve)=>{Z.avatar=ve}},metadata:de},b,p),Ge($e,null,f,{kind:"accessor",name:"bot",static:!1,private:!1,access:{has:Z=>"bot"in Z,get:Z=>Z.bot,set:(Z,ve)=>{Z.bot=ve}},metadata:de},h,l),Ge($e,null,d,{kind:"accessor",name:"server",static:!1,private:!1,access:{has:Z=>"server"in Z,get:Z=>Z.server,set:(Z,ve)=>{Z.server=ve}},metadata:de},Q,ae),Ge($e,null,$,{kind:"accessor",name:"officialApp",static:!1,private:!1,access:{has:Z=>"officialApp"in Z,get:Z=>Z.officialApp,set:(Z,ve)=>{Z.officialApp=ve}},metadata:de},H,L),Ge($e,null,j,{kind:"accessor",name:"op",static:!1,private:!1,access:{has:Z=>"op"in Z,get:Z=>Z.op,set:(Z,ve)=>{Z.op=ve}},metadata:de},I,D),Ge($e,null,re,{kind:"accessor",name:"verified",static:!1,private:!1,access:{has:Z=>"verified"in Z,get:Z=>Z.verified,set:(Z,ve)=>{Z.verified=ve}},metadata:de},ge,M),Ge($e,null,_,{kind:"accessor",name:"edited",static:!1,private:!1,access:{has:Z=>"edited"in Z,get:Z=>Z.edited,set:(Z,ve)=>{Z.edited=ve}},metadata:de},P,ye),Ge($e,null,O,{kind:"accessor",name:"roleColor",static:!1,private:!1,access:{has:Z=>"roleColor"in Z,get:Z=>Z.roleColor,set:(Z,ve)=>{Z.roleColor=ve}},metadata:de},T,ie),Ge($e,null,ne,{kind:"accessor",name:"command",static:!1,private:!1,access:{has:Z=>"command"in Z,get:Z=>Z.command,set:(Z,ve)=>{Z.command=ve}},metadata:de},W,g),Ge($e,null,E,{kind:"accessor",name:"attachment",static:!1,private:!1,access:{has:Z=>"attachment"in Z,get:Z=>Z.attachment,set:(Z,ve)=>{Z.attachment=ve}},metadata:de},K,Y),Ge($e,null,A,{kind:"accessor",name:"mentions",static:!1,private:!1,access:{has:Z=>"mentions"in Z,get:Z=>Z.mentions,set:(Z,ve)=>{Z.mentions=ve}},metadata:de},R,q),Ge($e,null,B,{kind:"accessor",name:"clanIcon",static:!1,private:!1,access:{has:Z=>"clanIcon"in Z,get:Z=>Z.clanIcon,set:(Z,ve)=>{Z.clanIcon=ve}},metadata:de},F,ue),Ge($e,null,Ve,{kind:"accessor",name:"clanTag",static:!1,private:!1,access:{has:Z=>"clanTag"in Z,get:Z=>Z.clanTag,set:(Z,ve)=>{Z.clanTag=ve}},metadata:de},G,S),Ge($e,null,se,{kind:"accessor",name:"deleted",static:!1,private:!1,access:{has:Z=>"deleted"in Z,get:Z=>Z.deleted,set:(Z,ve)=>{Z.deleted=ve}},metadata:de},Se,He),Ge($e,null,je,{kind:"accessor",name:"lightTheme",static:!1,private:!1,access:{has:Z=>"lightTheme"in Z,get:Z=>Z.lightTheme,set:(Z,ve)=>{Z.lightTheme=ve}},metadata:de},ee,oe),Ge($e,null,N,{kind:"accessor",name:"compactMode",static:!1,private:!1,access:{has:Z=>"compactMode"in Z,get:Z=>Z.compactMode,set:(Z,ve)=>{Z.compactMode=ve}},metadata:de},C,ce),Ge(null,t={value:e},i,{kind:"class",name:e.name,metadata:de},null,a),e=t.value,de&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:de})})(),pe($e,"styles",ke`
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
	`),Ie(e,a),e})();const ll=_e`
	<path d="M4.61241 0L6 0.845294L1.38759 10L0 9.15471L4.61241 0Z" fill="currentColor" />
`;function nl(i={}){return k`<svg ${be(i)} class="discord-command-icon" aria-hidden="false" width="6" height="10" viewBox="0 0 6 10" fill="none">
		${ll}
	</svg>`}const cl=_e`
	<path fill="currentColor" d="M2.06 7.61c-.25.95.31 1.92 1.26 2.18l4.3 1.15c.94.25 1.91-.31 2.17-1.26l1.15-4.3c.25-.94-.31-1.91-1.26-2.17l-4.3-1.15c-.94-.25-1.91.31-2.17 1.26l-1.15 4.3ZM12.98 7.87a2 2 0 0 0 1.75 2.95H20a2 2 0 0 0 1.76-2.95l-2.63-4.83a2 2 0 0 0-3.51 0l-2.63 4.83ZM5.86 13.27a.89.89 0 0 1 1.28 0l.75.77a.9.9 0 0 0 .54.26l1.06.12c.5.06.85.52.8 1.02l-.13 1.08c-.02.2.03.42.14.6l.56.92c.27.43.14 1-.28 1.26l-.9.58a.92.92 0 0 0-.37.48l-.36 1.02a.9.9 0 0 1-1.15.57l-1-.36a.89.89 0 0 0-.6 0l-1 .36a.9.9 0 0 1-1.15-.57l-.36-1.02a.92.92 0 0 0-.37-.48l-.9-.58a.93.93 0 0 1-.28-1.26l.56-.93c.11-.17.16-.38.14-.59l-.12-1.08c-.06-.5.3-.96.8-1.02l1.05-.12a.9.9 0 0 0 .54-.26l.75-.77ZM18.52 13.71a1.1 1.1 0 0 0-2.04 0l-.46 1.24c-.19.5-.57.88-1.07 1.07l-1.24.46a1.1 1.1 0 0 0 0 2.04l1.24.46c.5.19.88.57 1.07 1.07l.46 1.24c.35.95 1.7.95 2.04 0l.46-1.24c.19-.5.57-.88 1.07-1.07l1.24-.46a1.1 1.1 0 0 0 0-2.04l-1.24-.46a1.8 1.8 0 0 1-1.07-1.07l-.46-1.24Z">
	</path>
`;function dl(i={}){return k`<svg ${be(i)} class="discord-command-icon-name" aria-hidden="false" width="10" height="10" viewBox="0 0 24 24" fill="none">
		${cl}
	</svg>`}const hl=_e`
	<path fill="currentColor" d="M5.3 9.3a1 1 0 0 1 1.4 0l5.3 5.29 5.3-5.3a1 1 0 1 1 1.4 1.42l-6 6a1 1 0 0 1-1.4 0l-6-6a1 1 0 0 1 0-1.42Z"></path>
`;function Ma(i={}){return k`<svg ${be(i)} aria-hidden="false" width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
		${hl}
	</svg>`}const ml=_e`
	<path fill="color-mix( in oklab, hsl(215 calc(1 * 8.8%) 73.3% / 1) 100%, black 0%" d="M12 22a10 10 0 1 0-8.45-4.64c.13.19.11.44-.04.61l-2.06 2.37A1 1 0 0 0 2.2 22H12Z" class="">
    </path>
`;function ul(i={}){return k`<svg ${be(i)} aria-hidden="false" width="16" height="16" viewBox="0 0 24 24" fill="none">${ml}</svg>`}var Ye=function(i,t,a,e,s,m){function o(d){if(d!==void 0&&typeof d!="function")throw new TypeError("Function expected");return d}for(var c=e.kind,v=c==="getter"?"get":c==="setter"?"set":"value",u=!t&&i?e.static?i:i.prototype:null,n=t||(u?Object.getOwnPropertyDescriptor(u,e.name):{}),r,b=!1,p=a.length-1;p>=0;p--){var f={};for(var h in e)f[h]=h==="access"?{}:e[h];for(var h in e.access)f.access[h]=e.access[h];f.addInitializer=function(d){if(b)throw new TypeError("Cannot add initializers after decoration has completed");m.push(o(d||null))};var l=(0,a[p])(c==="accessor"?{get:n.get,set:n.set}:n[v],f);if(c==="accessor"){if(l===void 0)continue;if(l===null||typeof l!="object")throw new TypeError("Object expected");(r=o(l.get))&&(n.get=r),(r=o(l.set))&&(n.set=r),(r=o(l.init))&&s.unshift(r)}else(r=o(l))&&(c==="field"?s.unshift(r):n[v]=r)}u&&Object.defineProperty(u,e.name,n),b=!0},Oe=function(i,t,a){for(var e=arguments.length>2,s=0;s<t.length;s++)a=e?t[s].call(i,a):t[s].call(i);return e?a:void 0};let fl=(()=>{var Le,st,rt,ot,lt,nt,ct,dt,ht,mt,ut,ft,De,$t,jt,de,Z,ve,at,pt,_t;let i=[Ce("discord-command")],t,a=[],e,s=we,m,o=[],c=[],v,u=[],n=[],r,b=[],p=[],f,h=[],l=[],d,Q=[],ae=[],$,H=[],L=[],j,I=[],D=[],re,ge=[],M=[],_,P=[],ye=[],O,T=[],ie=[],ne,W=[],g=[],E,K=[],Y=[],A,R=[],q=[],B,F=[],ue=[],Ve,G=[],S=[],se,Se=[],He=[],je,ee=[],oe=[],N,C=[],ce=[],$e,le=[],J=[],Te,et=[],Ct=[];return Le=class extends s{constructor(){super(...arguments);z(this,st,Oe(this,o,void 0));z(this,rt,(Oe(this,c),Oe(this,u,"User")));z(this,ot,(Oe(this,n),Oe(this,b,void 0)));z(this,lt,(Oe(this,p),Oe(this,h,void 0)));z(this,nt,(Oe(this,l),Oe(this,Q,void 0)));z(this,ct,(Oe(this,ae),Oe(this,H,"slash_command")));z(this,dt,(Oe(this,L),Oe(this,I,void 0)));z(this,ht,(Oe(this,D),Oe(this,ge,"User")));z(this,mt,(Oe(this,M),Oe(this,P,void 0)));z(this,ut,(Oe(this,ye),Oe(this,T,void 0)));z(this,ft,(Oe(this,ie),Oe(this,W,!1)));z(this,De,(Oe(this,g),Oe(this,K,!1)));z(this,$t,(Oe(this,Y),Oe(this,R,!1)));z(this,jt,(Oe(this,q),Oe(this,F,!1)));z(this,de,(Oe(this,ue),Oe(this,G,void 0)));z(this,Z,(Oe(this,S),Oe(this,Se,!1)));z(this,ve,(Oe(this,He),Oe(this,ee,!1)));z(this,at,(Oe(this,oe),Oe(this,C,!1)));z(this,pt,(Oe(this,ce),Oe(this,le,!1)));z(this,_t,(Oe(this,J),Oe(this,et,!1)));pe(this,"validCommandTypes",(Oe(this,Ct),new Set(["user_command","message_command","slash_command"])))}get profile(){return y(this,st)}set profile(he){w(this,st,he)}get author(){return y(this,rt)}set author(he){w(this,rt,he)}get avatar(){return y(this,ot)}set avatar(he){w(this,ot,he)}get roleColor(){return y(this,lt)}set roleColor(he){w(this,lt,he)}get command(){return y(this,nt)}set command(he){w(this,nt,he)}get type(){return y(this,ct)}set type(he){w(this,ct,he)}get contextUserProfile(){return y(this,dt)}set contextUserProfile(he){w(this,dt,he)}get contextUserName(){return y(this,ht)}set contextUserName(he){w(this,ht,he)}get contextUserAvatar(){return y(this,mt)}set contextUserAvatar(he){w(this,mt,he)}get contextUserRoleColor(){return y(this,ut)}set contextUserRoleColor(he){w(this,ut,he)}get contextUserBot(){return y(this,ft)}set contextUserBot(he){w(this,ft,he)}get contextUserBotVerified(){return y(this,De)}set contextUserBotVerified(he){w(this,De,he)}get contextCommandReply(){return y(this,$t)}set contextCommandReply(he){w(this,$t,he)}get contextAttachmentReply(){return y(this,jt)}set contextAttachmentReply(he){w(this,jt,he)}get contextMessageReply(){return y(this,de)}set contextMessageReply(he){w(this,de,he)}get contextMessageDeleted(){return y(this,Z)}set contextMessageDeleted(he){w(this,Z,he)}get contextUserOfficialApplication(){return y(this,ve)}set contextUserOfficialApplication(he){w(this,ve,he)}get contextUserServer(){return y(this,at)}set contextUserServer(he){w(this,at,he)}get compactMode(){return y(this,pt)}set compactMode(he){w(this,pt,he)}get lightTheme(){return y(this,_t)}set lightTheme(he){w(this,_t,he)}checkType(){if(this.type){if(typeof this.type!="string")throw new TypeError("DiscordCommand `type` prop must be a string.");if(!this.validCommandTypes.has(this.type))throw new RangeError("DiscordCommand `type` prop must be one of: 'uer_command', 'message_command' or 'slash_command'")}}resolveAvatar(he){return Mt[he]??he??Mt.default}render(){this.checkType();const he={author:this.author,bot:!1,verified:!1,server:!1,roleColor:this.roleColor},U=Reflect.get($i,this.profile)??{},ze={...he,...U,avatar:this.resolveAvatar(U.avatar??this.avatar)},ii={author:this.contextUserName,bot:this.contextUserBot,verified:this.contextUserBotVerified,server:!1,roleColor:this.contextUserRoleColor},Qt=Reflect.get($i,this.contextUserProfile)??{},tt={...ii,...Qt,avatar:this.resolveAvatar(Qt.avatar??this.contextUserAvatar)},ai=this.contextMessageDeleted?k`<em class="discord-message-deleted">Original message was deleted</em>`:this.contextMessageReply;return k`
			${X(this.compactMode,()=>k`<div class="discord-reply-badge">${nl()}</div>`,()=>k`<img class="discord-replied-message-avatar" src="${fe(ze.avatar)}" alt="${fe(ze.author)}" />`)}
			<span class="discord-replied-message-username" style=${qt({color:ze.roleColor??""})}>${ze.author}</span>
			<span> used </span>
			${X(this.type==="slash_command",()=>k`<div class="discord-replied-message-content discord-slash-command-name">
						${dl()}<span>${this.command}</span>
					</div>`)}
			${X(this.type==="user_command",()=>k`<div class="discord-replied-message-content discord-context-command-name"><span>${this.command}</span></div>
						${Ma({class:"discord-arrow-right-icon"})}
						<div class="discord-context-user">
							${X(!this.compactMode,()=>k`<img
										class="discord-replied-message-avatar"
										src="${fe(tt.avatar)}"
										alt="${fe(tt.author)}"
									/>`)}
							<span class="discord-replied-message-username" style=${qt({color:tt.roleColor??""})}
								>${tt.author}</span
							>
						</div>`)}
			${X(this.type==="message_command",()=>k`<div class="discord-replied-message-content discord-context-command-name"><span>${this.command}</span></div>
						${Ma({class:"discord-arrow-right-icon"})}
						${X(!this.contextMessageDeleted,()=>k`<div class="discord-context-user">
									${X(!this.compactMode,()=>X(!this.contextUserOfficialApplication,()=>k`<img
													class="discord-replied-message-avatar"
													src="${fe(tt.avatar)}"
													alt="${fe(tt.author)}"
												/>`,()=>k`<img
													class="discord-replied-message-avatar"
													src="${fe(Mt.blue)}"
													alt="OFFICIALAPPLICATION"
												/>`))}
									${X(tt.bot,()=>k`<span class="discord-application-tag">${tt.verified?kt():""}App</span>`,()=>X(this.contextUserServer,()=>k`<span class="discord-application-tag">SERVER</span>`,()=>X(this.contextUserOfficialApplication,()=>k`<span class="discord-application-tag">${kt()}OFFICIAL</span>`)))}
									<span class="discord-replied-message-username" style=${qt({color:tt.roleColor??""})}
										>${tt.author}</span
									><span></span>
								</div>`,()=>X(this.contextMessageDeleted,()=>ul({class:"discord-message-margintop",style:"margin-right: 3px;"})))}
						<div class="discord-replied-message-content discord-message-margintop">${ai}</div>
						${X(this.contextCommandReply&&!this.contextMessageDeleted,()=>Ls({class:"discord-replied-message-content-icon discord-message-margintop"}),()=>X(this.contextAttachmentReply,()=>Is({class:"discord-replied-message-content-icon discord-message-margintop"})))} `)}
		`}},st=new WeakMap,rt=new WeakMap,ot=new WeakMap,lt=new WeakMap,nt=new WeakMap,ct=new WeakMap,dt=new WeakMap,ht=new WeakMap,mt=new WeakMap,ut=new WeakMap,ft=new WeakMap,De=new WeakMap,$t=new WeakMap,jt=new WeakMap,de=new WeakMap,Z=new WeakMap,ve=new WeakMap,at=new WeakMap,pt=new WeakMap,_t=new WeakMap,e=Le,(()=>{const he=typeof Symbol=="function"&&Symbol.metadata?Object.create(s[Symbol.metadata]??null):void 0;m=[x({attribute:"profile"})],v=[x({attribute:"author"})],r=[x({attribute:"avatar"})],f=[x({attribute:"role-color"})],d=[x({attribute:"command"})],$=[x({attribute:"type"})],j=[x({attribute:"context-user-profile"})],re=[x({attribute:"context-user-name"})],_=[x({attribute:"context-user-image"})],O=[x({attribute:"context-user-role-color"})],ne=[x({type:Boolean,attribute:"context-user-bot"})],E=[x({type:Boolean,attribute:"context-user-bot-verified"})],A=[x({type:Boolean,attribute:"context-command-reply"})],B=[x({type:Boolean,attribute:"context-attachment-reply"})],Ve=[x({type:String,attribute:"context-message-reply"})],se=[x({type:Boolean,attribute:"context-message-deleted"})],je=[x({type:Boolean,attribute:"context-user-application-official"})],N=[x({type:Boolean,attribute:"context-user-server"})],$e=[Ae({context:ti}),x({type:Boolean,reflect:!0,attribute:"compact-mode"})],Te=[Ae({context:Ne}),x({type:Boolean,reflect:!0,attribute:"light-theme"})],Ye(Le,null,m,{kind:"accessor",name:"profile",static:!1,private:!1,access:{has:U=>"profile"in U,get:U=>U.profile,set:(U,ze)=>{U.profile=ze}},metadata:he},o,c),Ye(Le,null,v,{kind:"accessor",name:"author",static:!1,private:!1,access:{has:U=>"author"in U,get:U=>U.author,set:(U,ze)=>{U.author=ze}},metadata:he},u,n),Ye(Le,null,r,{kind:"accessor",name:"avatar",static:!1,private:!1,access:{has:U=>"avatar"in U,get:U=>U.avatar,set:(U,ze)=>{U.avatar=ze}},metadata:he},b,p),Ye(Le,null,f,{kind:"accessor",name:"roleColor",static:!1,private:!1,access:{has:U=>"roleColor"in U,get:U=>U.roleColor,set:(U,ze)=>{U.roleColor=ze}},metadata:he},h,l),Ye(Le,null,d,{kind:"accessor",name:"command",static:!1,private:!1,access:{has:U=>"command"in U,get:U=>U.command,set:(U,ze)=>{U.command=ze}},metadata:he},Q,ae),Ye(Le,null,$,{kind:"accessor",name:"type",static:!1,private:!1,access:{has:U=>"type"in U,get:U=>U.type,set:(U,ze)=>{U.type=ze}},metadata:he},H,L),Ye(Le,null,j,{kind:"accessor",name:"contextUserProfile",static:!1,private:!1,access:{has:U=>"contextUserProfile"in U,get:U=>U.contextUserProfile,set:(U,ze)=>{U.contextUserProfile=ze}},metadata:he},I,D),Ye(Le,null,re,{kind:"accessor",name:"contextUserName",static:!1,private:!1,access:{has:U=>"contextUserName"in U,get:U=>U.contextUserName,set:(U,ze)=>{U.contextUserName=ze}},metadata:he},ge,M),Ye(Le,null,_,{kind:"accessor",name:"contextUserAvatar",static:!1,private:!1,access:{has:U=>"contextUserAvatar"in U,get:U=>U.contextUserAvatar,set:(U,ze)=>{U.contextUserAvatar=ze}},metadata:he},P,ye),Ye(Le,null,O,{kind:"accessor",name:"contextUserRoleColor",static:!1,private:!1,access:{has:U=>"contextUserRoleColor"in U,get:U=>U.contextUserRoleColor,set:(U,ze)=>{U.contextUserRoleColor=ze}},metadata:he},T,ie),Ye(Le,null,ne,{kind:"accessor",name:"contextUserBot",static:!1,private:!1,access:{has:U=>"contextUserBot"in U,get:U=>U.contextUserBot,set:(U,ze)=>{U.contextUserBot=ze}},metadata:he},W,g),Ye(Le,null,E,{kind:"accessor",name:"contextUserBotVerified",static:!1,private:!1,access:{has:U=>"contextUserBotVerified"in U,get:U=>U.contextUserBotVerified,set:(U,ze)=>{U.contextUserBotVerified=ze}},metadata:he},K,Y),Ye(Le,null,A,{kind:"accessor",name:"contextCommandReply",static:!1,private:!1,access:{has:U=>"contextCommandReply"in U,get:U=>U.contextCommandReply,set:(U,ze)=>{U.contextCommandReply=ze}},metadata:he},R,q),Ye(Le,null,B,{kind:"accessor",name:"contextAttachmentReply",static:!1,private:!1,access:{has:U=>"contextAttachmentReply"in U,get:U=>U.contextAttachmentReply,set:(U,ze)=>{U.contextAttachmentReply=ze}},metadata:he},F,ue),Ye(Le,null,Ve,{kind:"accessor",name:"contextMessageReply",static:!1,private:!1,access:{has:U=>"contextMessageReply"in U,get:U=>U.contextMessageReply,set:(U,ze)=>{U.contextMessageReply=ze}},metadata:he},G,S),Ye(Le,null,se,{kind:"accessor",name:"contextMessageDeleted",static:!1,private:!1,access:{has:U=>"contextMessageDeleted"in U,get:U=>U.contextMessageDeleted,set:(U,ze)=>{U.contextMessageDeleted=ze}},metadata:he},Se,He),Ye(Le,null,je,{kind:"accessor",name:"contextUserOfficialApplication",static:!1,private:!1,access:{has:U=>"contextUserOfficialApplication"in U,get:U=>U.contextUserOfficialApplication,set:(U,ze)=>{U.contextUserOfficialApplication=ze}},metadata:he},ee,oe),Ye(Le,null,N,{kind:"accessor",name:"contextUserServer",static:!1,private:!1,access:{has:U=>"contextUserServer"in U,get:U=>U.contextUserServer,set:(U,ze)=>{U.contextUserServer=ze}},metadata:he},C,ce),Ye(Le,null,$e,{kind:"accessor",name:"compactMode",static:!1,private:!1,access:{has:U=>"compactMode"in U,get:U=>U.compactMode,set:(U,ze)=>{U.compactMode=ze}},metadata:he},le,J),Ye(Le,null,Te,{kind:"accessor",name:"lightTheme",static:!1,private:!1,access:{has:U=>"lightTheme"in U,get:U=>U.lightTheme,set:(U,ze)=>{U.lightTheme=ze}},metadata:he},et,Ct),Ye(null,t={value:e},i,{kind:"class",name:e.name,metadata:he},null,a),e=t.value,he&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:he})})(),pe(Le,"styles",[Ns.styles,ke`
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
		`]),Oe(e,a),e})();var bi=function(i,t,a,e,s,m){function o(d){if(d!==void 0&&typeof d!="function")throw new TypeError("Function expected");return d}for(var c=e.kind,v=c==="getter"?"get":c==="setter"?"set":"value",u=!t&&i?e.static?i:i.prototype:null,n=t||(u?Object.getOwnPropertyDescriptor(u,e.name):{}),r,b=!1,p=a.length-1;p>=0;p--){var f={};for(var h in e)f[h]=h==="access"?{}:e[h];for(var h in e.access)f.access[h]=e.access[h];f.addInitializer=function(d){if(b)throw new TypeError("Cannot add initializers after decoration has completed");m.push(o(d||null))};var l=(0,a[p])(c==="accessor"?{get:n.get,set:n.set}:n[v],f);if(c==="accessor"){if(l===void 0)continue;if(l===null||typeof l!="object")throw new TypeError("Object expected");(r=o(l.get))&&(n.get=r),(r=o(l.set))&&(n.set=r),(r=o(l.init))&&s.unshift(r)}else(r=o(l))&&(c==="field"?s.unshift(r):n[v]=r)}u&&Object.defineProperty(u,e.name,n),b=!0},Dt=function(i,t,a){for(var e=arguments.length>2,s=0;s<t.length;s++)a=e?t[s].call(i,a):t[s].call(i);return e?a:void 0};let pl=(()=>{var $,H,L,j,I,D;let i=[Ce("discord-custom-emoji")],t,a=[],e,s=we,m,o=[],c=[],v,u=[],n=[],r,b=[],p=[],f,h=[],l=[],d,Q=[],ae=[];return $=class extends s{constructor(){super(...arguments);z(this,H,Dt(this,o,void 0));z(this,L,(Dt(this,c),Dt(this,u,void 0)));z(this,j,(Dt(this,n),Dt(this,b,{})));z(this,I,(Dt(this,p),Dt(this,h,void 0)));z(this,D,(Dt(this,l),Dt(this,Q,void 0)));Dt(this,ae)}get name(){return y(this,H)}set name(M){w(this,H,M)}get url(){return y(this,L)}set url(M){w(this,L,M)}get customEmojisMap(){return y(this,j)}set customEmojisMap(M){w(this,j,M)}get embedEmoji(){return y(this,I)}set embedEmoji(M){w(this,I,M)}get jumbo(){return y(this,D)}set jumbo(M){w(this,D,M)}willUpdate(){if(!this.url&&this.name){const M=Oa(this.name)??this.customEmojisMap[this.name];M&&(this.url??(this.url=M.url??""),this.embedEmoji??(this.embedEmoji=M.embedEmoji??!1))}}render(){const M=`:${this.name}:`;return k`<span
			class=${Be({"discord-embed-custom-emoji":this.embedEmoji,"discord-custom-emoji":!this.embedEmoji})}
			><img
				aria-label=${M}
				src=${fe(this.url)}
				alt=${M}
				draggable="false"
				class=${Be({"discord-embed-custom-emoji-image":this.embedEmoji,"discord-custom-emoji-image":!this.embedEmoji,"discord-custom-jumbo-emoji-image":this.jumbo})}
		/></span> `}},H=new WeakMap,L=new WeakMap,j=new WeakMap,I=new WeakMap,D=new WeakMap,e=$,(()=>{const M=typeof Symbol=="function"&&Symbol.metadata?Object.create(s[Symbol.metadata]??null):void 0;m=[x()],v=[x()],r=[x({attribute:!1})],f=[x({type:Boolean,attribute:"embed-emoji"})],d=[x({type:Boolean,attribute:"jumbo"})],bi($,null,m,{kind:"accessor",name:"name",static:!1,private:!1,access:{has:_=>"name"in _,get:_=>_.name,set:(_,P)=>{_.name=P}},metadata:M},o,c),bi($,null,v,{kind:"accessor",name:"url",static:!1,private:!1,access:{has:_=>"url"in _,get:_=>_.url,set:(_,P)=>{_.url=P}},metadata:M},u,n),bi($,null,r,{kind:"accessor",name:"customEmojisMap",static:!1,private:!1,access:{has:_=>"customEmojisMap"in _,get:_=>_.customEmojisMap,set:(_,P)=>{_.customEmojisMap=P}},metadata:M},b,p),bi($,null,f,{kind:"accessor",name:"embedEmoji",static:!1,private:!1,access:{has:_=>"embedEmoji"in _,get:_=>_.embedEmoji,set:(_,P)=>{_.embedEmoji=P}},metadata:M},h,l),bi($,null,d,{kind:"accessor",name:"jumbo",static:!1,private:!1,access:{has:_=>"jumbo"in _,get:_=>_.jumbo,set:(_,P)=>{_.jumbo=P}},metadata:M},Q,ae),bi(null,t={value:e},i,{kind:"class",name:e.name,metadata:M},null,a),e=t.value,M&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:M})})(),pe($,"styles",ke`
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
	`),Dt(e,a),e})();var yt=function(i,t,a,e,s,m){function o(d){if(d!==void 0&&typeof d!="function")throw new TypeError("Function expected");return d}for(var c=e.kind,v=c==="getter"?"get":c==="setter"?"set":"value",u=!t&&i?e.static?i:i.prototype:null,n=t||(u?Object.getOwnPropertyDescriptor(u,e.name):{}),r,b=!1,p=a.length-1;p>=0;p--){var f={};for(var h in e)f[h]=h==="access"?{}:e[h];for(var h in e.access)f.access[h]=e.access[h];f.addInitializer=function(d){if(b)throw new TypeError("Cannot add initializers after decoration has completed");m.push(o(d||null))};var l=(0,a[p])(c==="accessor"?{get:n.get,set:n.set}:n[v],f);if(c==="accessor"){if(l===void 0)continue;if(l===null||typeof l!="object")throw new TypeError("Object expected");(r=o(l.get))&&(n.get=r),(r=o(l.set))&&(n.set=r),(r=o(l.init))&&s.unshift(r)}else(r=o(l))&&(c==="field"?s.unshift(r):n[v]=r)}u&&Object.defineProperty(u,e.name,n),b=!0},Re=function(i,t,a){for(var e=arguments.length>2,s=0;s<t.length;s++)a=e?t[s].call(i,a):t[s].call(i);return e?a:void 0};let vl=(()=>{var A,R,q,B,F,ue,Ve,G,S,se,Se,He,je;let i=[Ce("discord-embed")],t,a=[],e,s=we,m,o=[],c=[],v,u=[],n=[],r,b=[],p=[],f,h=[],l=[],d,Q=[],ae=[],$,H=[],L=[],j,I=[],D=[],re,ge=[],M=[],_,P=[],ye=[],O,T=[],ie=[],ne,W=[],g=[],E,K=[],Y=[];return A=class extends s{constructor(){super(...arguments);z(this,R,Re(this,o,void 0));z(this,q,(Re(this,c),Re(this,u,void 0)));z(this,B,(Re(this,n),Re(this,b,void 0)));z(this,F,(Re(this,p),Re(this,h,void 0)));z(this,ue,(Re(this,l),Re(this,Q,void 0)));z(this,Ve,(Re(this,ae),Re(this,H,{})));z(this,G,(Re(this,L),Re(this,I,void 0)));z(this,S,(Re(this,D),Re(this,ge,void 0)));z(this,se,(Re(this,M),Re(this,P,void 0)));z(this,Se,(Re(this,ye),Re(this,T,void 0)));z(this,He,(Re(this,ie),Re(this,W,void 0)));z(this,je,(Re(this,g),Re(this,K,!1)));Re(this,Y)}get color(){return y(this,R)}set color(N){w(this,R,N)}get authorName(){return y(this,q)}set authorName(N){w(this,q,N)}get authorImage(){return y(this,B)}set authorImage(N){w(this,B,N)}get authorUrl(){return y(this,F)}set authorUrl(N){w(this,F,N)}get embedTitle(){return y(this,ue)}set embedTitle(N){w(this,ue,N)}get embedEmojisMap(){return y(this,Ve)}set embedEmojisMap(N){w(this,Ve,N)}get url(){return y(this,G)}set url(N){w(this,G,N)}get thumbnail(){return y(this,S)}set thumbnail(N){w(this,S,N)}get image(){return y(this,se)}set image(N){w(this,se,N)}get video(){return y(this,Se)}set video(N){w(this,Se,N)}get provider(){return y(this,He)}set provider(N){w(this,He,N)}get lightTheme(){return y(this,je)}set lightTheme(N){w(this,je,N)}render(){const N=this.parseTitle(this.authorName),C=this.parseTitle(this.embedTitle);return k`<div style=${qt({"background-color":this.color})} class="discord-left-border"></div>
			<div class="discord-embed-root">
				<div class="discord-embed-wrapper">
					<div class="discord-embed-grid">
						${X(this.provider,()=>k`<div class="discord-embed-provider">${this.provider}</div>`)}
						${X(N,()=>k`<div class="discord-embed-author">
									${X(this.authorImage,()=>k`<img src=${fe(this.authorImage)} alt="" class="discord-author-image" />`)}
									${X(this.authorUrl,()=>k`<a
												href=${fe(this.authorUrl)}
												target="_blank"
												rel="noopener noreferrer"
												class="discord-embed-author-block"
											>
												<span class="discord-embed-author-block">${N}</span>
											</a>`,()=>k`<span class="discord-embed-author-block">${N}</span>`)}
								</div>`)}
						${X(C,()=>k`<div class="discord-embed-title">
									${this.url?k`<a href="${this.url}" target="_blank" rel="noopener noreferrer"> ${C} </a>`:k`${C}`}
								</div>`)}
						<slot name="description"></slot>
						<slot name="fields"></slot>
						${X(this.image||this.video,()=>k`<div class=${Be({"discord-embed-media":!0,"discord-embed-media-video":!!this.video})}>
									${this.renderMedia()}
								</div>`)}
						${X(this.thumbnail,()=>k`<img src=${fe(this.thumbnail)} alt="" class="discord-embed-thumbnail" />`)}
						<slot name="footer"></slot>
					</div>
				</div>
			</div>`}renderMedia(){return this.video?k`
				<video
					controls
					muted
					preload="none"
					poster=${fe(this.image)}
					src=${fe(this.video)}
					height="225"
					width="400"
					class="discord-embed-video"
				>
					<img src=${fe(this.image)} alt="Discord embed media" class="discord-embed-image" />
				</video>
			`:this.image?k`<img src=${fe(this.image)} alt="Discord embed media" class="discord-embed-image" />`:null}parseTitle(N){if(!N)return null;const C=[];let ce="";for(const $e of N.split(`
`)){for(const le of $e.split(" ")){const J=Oa(le)??this.embedEmojisMap[le]??{};J.name?C.push(k`<discord-custom-emoji name=${J.name} url=${fe(J.url)} embed-emoji></discord-custom-emoji>`):ce+=`${le} `,ce===" "&&C.push(k`<br />`)}C.push(ce),ce=""}return C.map($e=>typeof $e=="string"?k`<span>${$e}</span>`:$e)}},R=new WeakMap,q=new WeakMap,B=new WeakMap,F=new WeakMap,ue=new WeakMap,Ve=new WeakMap,G=new WeakMap,S=new WeakMap,se=new WeakMap,Se=new WeakMap,He=new WeakMap,je=new WeakMap,e=A,(()=>{const N=typeof Symbol=="function"&&Symbol.metadata?Object.create(s[Symbol.metadata]??null):void 0;m=[x()],v=[x({attribute:"author-name"})],r=[x({attribute:"author-image"})],f=[x({attribute:"author-url"})],d=[x({attribute:"embed-title"})],$=[x({attribute:!1})],j=[x()],re=[x()],_=[x()],O=[x()],ne=[x()],E=[Ae({context:Ne,subscribe:!0}),x({type:Boolean,reflect:!0,attribute:"light-theme"})],yt(A,null,m,{kind:"accessor",name:"color",static:!1,private:!1,access:{has:C=>"color"in C,get:C=>C.color,set:(C,ce)=>{C.color=ce}},metadata:N},o,c),yt(A,null,v,{kind:"accessor",name:"authorName",static:!1,private:!1,access:{has:C=>"authorName"in C,get:C=>C.authorName,set:(C,ce)=>{C.authorName=ce}},metadata:N},u,n),yt(A,null,r,{kind:"accessor",name:"authorImage",static:!1,private:!1,access:{has:C=>"authorImage"in C,get:C=>C.authorImage,set:(C,ce)=>{C.authorImage=ce}},metadata:N},b,p),yt(A,null,f,{kind:"accessor",name:"authorUrl",static:!1,private:!1,access:{has:C=>"authorUrl"in C,get:C=>C.authorUrl,set:(C,ce)=>{C.authorUrl=ce}},metadata:N},h,l),yt(A,null,d,{kind:"accessor",name:"embedTitle",static:!1,private:!1,access:{has:C=>"embedTitle"in C,get:C=>C.embedTitle,set:(C,ce)=>{C.embedTitle=ce}},metadata:N},Q,ae),yt(A,null,$,{kind:"accessor",name:"embedEmojisMap",static:!1,private:!1,access:{has:C=>"embedEmojisMap"in C,get:C=>C.embedEmojisMap,set:(C,ce)=>{C.embedEmojisMap=ce}},metadata:N},H,L),yt(A,null,j,{kind:"accessor",name:"url",static:!1,private:!1,access:{has:C=>"url"in C,get:C=>C.url,set:(C,ce)=>{C.url=ce}},metadata:N},I,D),yt(A,null,re,{kind:"accessor",name:"thumbnail",static:!1,private:!1,access:{has:C=>"thumbnail"in C,get:C=>C.thumbnail,set:(C,ce)=>{C.thumbnail=ce}},metadata:N},ge,M),yt(A,null,_,{kind:"accessor",name:"image",static:!1,private:!1,access:{has:C=>"image"in C,get:C=>C.image,set:(C,ce)=>{C.image=ce}},metadata:N},P,ye),yt(A,null,O,{kind:"accessor",name:"video",static:!1,private:!1,access:{has:C=>"video"in C,get:C=>C.video,set:(C,ce)=>{C.video=ce}},metadata:N},T,ie),yt(A,null,ne,{kind:"accessor",name:"provider",static:!1,private:!1,access:{has:C=>"provider"in C,get:C=>C.provider,set:(C,ce)=>{C.provider=ce}},metadata:N},W,g),yt(A,null,E,{kind:"accessor",name:"lightTheme",static:!1,private:!1,access:{has:C=>"lightTheme"in C,get:C=>C.lightTheme,set:(C,ce)=>{C.lightTheme=ce}},metadata:N},K,Y),yt(null,t={value:e},i,{kind:"class",name:e.name,metadata:N},null,a),e=t.value,N&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:N})})(),pe(A,"styles",ke`
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
	`),Re(e,a),e})();var gl=function(i,t,a,e,s,m){function o(d){if(d!==void 0&&typeof d!="function")throw new TypeError("Function expected");return d}for(var c=e.kind,v=c==="getter"?"get":c==="setter"?"set":"value",u=!t&&i?e.static?i:i.prototype:null,n=t||(u?Object.getOwnPropertyDescriptor(u,e.name):{}),r,b=!1,p=a.length-1;p>=0;p--){var f={};for(var h in e)f[h]=h==="access"?{}:e[h];for(var h in e.access)f.access[h]=e.access[h];f.addInitializer=function(d){if(b)throw new TypeError("Cannot add initializers after decoration has completed");m.push(o(d||null))};var l=(0,a[p])(c==="accessor"?{get:n.get,set:n.set}:n[v],f);if(c==="accessor"){if(l===void 0)continue;if(l===null||typeof l!="object")throw new TypeError("Object expected");(r=o(l.get))&&(n.get=r),(r=o(l.set))&&(n.set=r),(r=o(l.init))&&s.unshift(r)}else(r=o(l))&&(c==="field"?s.unshift(r):n[v]=r)}u&&Object.defineProperty(u,e.name,n),b=!0},_l=function(i,t,a){for(var e=arguments.length>2,s=0;s<t.length;s++)a=e?t[s].call(i,a):t[s].call(i);return e?a:void 0};let bl=(()=>{var m;let i=[Ce("discord-embed-description")],t,a=[],e,s=we;return m=class extends s{render(){return k`<slot></slot>`}},e=m,(()=>{const c=typeof Symbol=="function"&&Symbol.metadata?Object.create(s[Symbol.metadata]??null):void 0;gl(null,t={value:e},i,{kind:"class",name:e.name,metadata:c},null,a),e=t.value,c&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:c})})(),pe(m,"styles",ke`
		:host {
			font-size: 0.875rem;
			font-weight: 400;
			grid-column: 1/1;
			line-height: 1.125rem;
			margin-top: 8px;
			min-width: 0;
		}
	`),_l(e,a),e})();var yi=function(i,t,a,e,s,m){function o(d){if(d!==void 0&&typeof d!="function")throw new TypeError("Function expected");return d}for(var c=e.kind,v=c==="getter"?"get":c==="setter"?"set":"value",u=!t&&i?e.static?i:i.prototype:null,n=t||(u?Object.getOwnPropertyDescriptor(u,e.name):{}),r,b=!1,p=a.length-1;p>=0;p--){var f={};for(var h in e)f[h]=h==="access"?{}:e[h];for(var h in e.access)f.access[h]=e.access[h];f.addInitializer=function(d){if(b)throw new TypeError("Cannot add initializers after decoration has completed");m.push(o(d||null))};var l=(0,a[p])(c==="accessor"?{get:n.get,set:n.set}:n[v],f);if(c==="accessor"){if(l===void 0)continue;if(l===null||typeof l!="object")throw new TypeError("Object expected");(r=o(l.get))&&(n.get=r),(r=o(l.set))&&(n.set=r),(r=o(l.init))&&s.unshift(r)}else(r=o(l))&&(c==="field"?s.unshift(r):n[v]=r)}u&&Object.defineProperty(u,e.name,n),b=!0},Ot=function(i,t,a){for(var e=arguments.length>2,s=0;s<t.length;s++)a=e?t[s].call(i,a):t[s].call(i);return e?a:void 0};let yl=(()=>{var $,H,L,j,I,D;let i=[Ce("discord-embed-field")],t,a=[],e,s=we,m,o=[],c=[],v,u=[],n=[],r,b=[],p=[],f,h=[],l=[],d,Q=[],ae=[];return $=class extends s{constructor(){super(...arguments);z(this,H,Ot(this,o,void 0));z(this,L,(Ot(this,c),Ot(this,u,{})));z(this,j,(Ot(this,n),Ot(this,b,!1)));z(this,I,(Ot(this,p),Ot(this,h,void 0)));z(this,D,(Ot(this,l),Ot(this,Q,!1)));pe(this,"validInlineIndices",(Ot(this,ae),new Set([1,2,3])))}get fieldTitle(){return y(this,H)}set fieldTitle(M){w(this,H,M)}get embedFieldEmojisMap(){return y(this,L)}set embedFieldEmojisMap(M){w(this,L,M)}get inline(){return y(this,j)}set inline(M){w(this,j,M)}get inlineIndex(){return y(this,I)}set inlineIndex(M){w(this,I,M)}get lightTheme(){return y(this,D)}set lightTheme(M){w(this,D,M)}checkInlineIndex(){if(this.inlineIndex){const M=Number(this.inlineIndex);if(!Number.isNaN(M)&&!this.validInlineIndices.has(M))throw new RangeError("DiscordEmbedField `inlineIndex` prop must be one of: 1, 2, or 3")}}render(){this.checkInlineIndex();const M=this.parseTitle(this.fieldTitle),_=X(M,()=>k`<div class="discord-field-title">${[...M]}</div>`);return k`${_}<slot></slot>`}parseTitle(M){if(!M)return null;const _=[];let P="";for(const ye of M.split(`
`)){for(const O of ye.split(" ")){const T=Oa(O)??this.embedFieldEmojisMap[O]??{};T.name?_.push(k`<discord-custom-emoji name=${T.name} url=${fe(T.url)} embed-emoji></discord-custom-emoji>`):P+=`${O} `,P===" "&&_.push(k`<br />`)}_.push(P),P=""}return _.map(ye=>typeof ye=="string"?k`<span>${ye}</span>`:ye)}},H=new WeakMap,L=new WeakMap,j=new WeakMap,I=new WeakMap,D=new WeakMap,e=$,(()=>{const M=typeof Symbol=="function"&&Symbol.metadata?Object.create(s[Symbol.metadata]??null):void 0;m=[x({reflect:!0,attribute:"field-title"})],v=[x({attribute:!1})],r=[x({type:Boolean,reflect:!0,attribute:"inline"})],f=[x({type:Number,reflect:!0,attribute:"inline-index"})],d=[Ae({context:Ne,subscribe:!0}),x({type:Boolean,reflect:!0,attribute:"light-theme"})],yi($,null,m,{kind:"accessor",name:"fieldTitle",static:!1,private:!1,access:{has:_=>"fieldTitle"in _,get:_=>_.fieldTitle,set:(_,P)=>{_.fieldTitle=P}},metadata:M},o,c),yi($,null,v,{kind:"accessor",name:"embedFieldEmojisMap",static:!1,private:!1,access:{has:_=>"embedFieldEmojisMap"in _,get:_=>_.embedFieldEmojisMap,set:(_,P)=>{_.embedFieldEmojisMap=P}},metadata:M},u,n),yi($,null,r,{kind:"accessor",name:"inline",static:!1,private:!1,access:{has:_=>"inline"in _,get:_=>_.inline,set:(_,P)=>{_.inline=P}},metadata:M},b,p),yi($,null,f,{kind:"accessor",name:"inlineIndex",static:!1,private:!1,access:{has:_=>"inlineIndex"in _,get:_=>_.inlineIndex,set:(_,P)=>{_.inlineIndex=P}},metadata:M},h,l),yi($,null,d,{kind:"accessor",name:"lightTheme",static:!1,private:!1,access:{has:_=>"lightTheme"in _,get:_=>_.lightTheme,set:(_,P)=>{_.lightTheme=P}},metadata:M},Q,ae),yi(null,t={value:e},i,{kind:"class",name:e.name,metadata:M},null,a),e=t.value,M&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:M})})(),pe($,"styles",ke`
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
	`),Ot(e,a),e})();var zl=function(i,t,a,e,s,m){function o(d){if(d!==void 0&&typeof d!="function")throw new TypeError("Function expected");return d}for(var c=e.kind,v=c==="getter"?"get":c==="setter"?"set":"value",u=!t&&i?e.static?i:i.prototype:null,n=t||(u?Object.getOwnPropertyDescriptor(u,e.name):{}),r,b=!1,p=a.length-1;p>=0;p--){var f={};for(var h in e)f[h]=h==="access"?{}:e[h];for(var h in e.access)f.access[h]=e.access[h];f.addInitializer=function(d){if(b)throw new TypeError("Cannot add initializers after decoration has completed");m.push(o(d||null))};var l=(0,a[p])(c==="accessor"?{get:n.get,set:n.set}:n[v],f);if(c==="accessor"){if(l===void 0)continue;if(l===null||typeof l!="object")throw new TypeError("Object expected");(r=o(l.get))&&(n.get=r),(r=o(l.set))&&(n.set=r),(r=o(l.init))&&s.unshift(r)}else(r=o(l))&&(c==="field"?s.unshift(r):n[v]=r)}u&&Object.defineProperty(u,e.name,n),b=!0},wl=function(i,t,a){for(var e=arguments.length>2,s=0;s<t.length;s++)a=e?t[s].call(i,a):t[s].call(i);return e?a:void 0};let xl=(()=>{var m;let i=[Ce("discord-embed-fields")],t,a=[],e,s=we;return m=class extends s{render(){return k`<slot></slot>`}},e=m,(()=>{const c=typeof Symbol=="function"&&Symbol.metadata?Object.create(s[Symbol.metadata]??null):void 0;zl(null,t={value:e},i,{kind:"class",name:e.name,metadata:c},null,a),e=t.value,c&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:c})})(),pe(m,"styles",ke`
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
	`),wl(e,a),e})();var Li=function(i,t,a,e,s,m){function o(d){if(d!==void 0&&typeof d!="function")throw new TypeError("Function expected");return d}for(var c=e.kind,v=c==="getter"?"get":c==="setter"?"set":"value",u=!t&&i?e.static?i:i.prototype:null,n=t||(u?Object.getOwnPropertyDescriptor(u,e.name):{}),r,b=!1,p=a.length-1;p>=0;p--){var f={};for(var h in e)f[h]=h==="access"?{}:e[h];for(var h in e.access)f.access[h]=e.access[h];f.addInitializer=function(d){if(b)throw new TypeError("Cannot add initializers after decoration has completed");m.push(o(d||null))};var l=(0,a[p])(c==="accessor"?{get:n.get,set:n.set}:n[v],f);if(c==="accessor"){if(l===void 0)continue;if(l===null||typeof l!="object")throw new TypeError("Object expected");(r=o(l.get))&&(n.get=r),(r=o(l.set))&&(n.set=r),(r=o(l.init))&&s.unshift(r)}else(r=o(l))&&(c==="field"?s.unshift(r):n[v]=r)}u&&Object.defineProperty(u,e.name,n),b=!0},Rt=function(i,t,a){for(var e=arguments.length>2,s=0;s<t.length;s++)a=e?t[s].call(i,a):t[s].call(i);return e?a:void 0};let kl=(()=>{var d,Q,ae,$,H;let i=[Ce("discord-embed-footer")],t,a=[],e,s=we,m,o=[],c=[],v,u=[],n=[],r,b=[],p=[],f,h=[],l=[];return d=class extends s{constructor(){super(...arguments);z(this,Q,Rt(this,o,void 0));z(this,ae,(Rt(this,c),Rt(this,u,void 0)));z(this,$,(Rt(this,n),Rt(this,b,void 0)));z(this,H,(Rt(this,p),Rt(this,h,!1)));Rt(this,l)}get footerImage(){return y(this,Q)}set footerImage(I){w(this,Q,I)}get footerImageAlt(){return y(this,ae)}set footerImageAlt(I){w(this,ae,I)}get timestamp(){return y(this,$)}set timestamp(I){w(this,$,I)}get lightTheme(){return y(this,H)}set lightTheme(I){w(this,H,I)}updateTimestamp(I){I&&!Number.isNaN(new Date(I).getTime())&&(this.timestamp=Qi(I))}render(){return this.updateTimestamp(this.timestamp),k`${X(this.footerImage,()=>k`<img src=${fe(this.footerImage)} alt=${fe(this.footerImageAlt)} class="discord-footer-image" />`)}
			<slot></slot>
			${X(this.timestamp,()=>k`<span class="discord-footer-separator">&bull;</span>`)}
			${X(this.timestamp,()=>` ${this.timestamp}`,()=>null)}`}},Q=new WeakMap,ae=new WeakMap,$=new WeakMap,H=new WeakMap,e=d,(()=>{const I=typeof Symbol=="function"&&Symbol.metadata?Object.create(s[Symbol.metadata]??null):void 0;m=[x({attribute:"footer-image"})],v=[x({attribute:"footer-image-alt"})],r=[x({type:String,reflect:!0,converter:D=>Qi(D),attribute:!0})],f=[Ae({context:Ne,subscribe:!0}),x({type:Boolean,reflect:!0,attribute:"light-theme"})],Li(d,null,m,{kind:"accessor",name:"footerImage",static:!1,private:!1,access:{has:D=>"footerImage"in D,get:D=>D.footerImage,set:(D,re)=>{D.footerImage=re}},metadata:I},o,c),Li(d,null,v,{kind:"accessor",name:"footerImageAlt",static:!1,private:!1,access:{has:D=>"footerImageAlt"in D,get:D=>D.footerImageAlt,set:(D,re)=>{D.footerImageAlt=re}},metadata:I},u,n),Li(d,null,r,{kind:"accessor",name:"timestamp",static:!1,private:!1,access:{has:D=>"timestamp"in D,get:D=>D.timestamp,set:(D,re)=>{D.timestamp=re}},metadata:I},b,p),Li(d,null,f,{kind:"accessor",name:"lightTheme",static:!1,private:!1,access:{has:D=>"lightTheme"in D,get:D=>D.lightTheme,set:(D,re)=>{D.lightTheme=re}},metadata:I},h,l),Li(null,t={value:e},i,{kind:"class",name:e.name,metadata:I},null,a),e=t.value,I&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:I})})(),pe(d,"styles",ke`
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
	`),Rt(e,a),e})();const Ml=_e`
	<path
	fill="#939bf9"
	d="m72 29.3v60.3c0 2.24 0 3.36-.44 4.22-.38.74-1 1.36-1.74 1.74-.86.44-1.98.44-4.22.44h-59.2c-2.24 0-3.36 0-4.22-.44-.74-.38-1.36-1-1.74-1.74-.44-.86-.44-1.98-.44-4.22v-83.2c0-2.24 0-3.36.44-4.22.38-.74 1-1.36 1.74-1.74.86-.44 1.98-.44 4.22-.44h36.3c1.96 0 2.94 0 3.86.22.5.12.98.28 1.44.5v16.88c0 2.24 0 3.36.44 4.22.38.74 1 1.36 1.74 1.74.86.44 1.98.44 4.22.44h16.88c.22.46.38.94.5 1.44.22.92.22 1.9.22 3.86z" fill="#d3d6fd"/><path d="m68.26 20.26c1.38 1.38 2.06 2.06 2.56 2.88.18.28.32.56.46.86h-16.88c-2.24 0-3.36 0-4.22-.44-.74-.38-1.36-1-1.74-1.74-.44-.86-.44-1.98-.44-4.22v-16.880029c.3.14.58.28.86.459999.82.5 1.5 1.18 2.88 2.56z" />
`;function $l(i={}){return k`<svg ${be(i)} aria-hidden="false" fill="none" width="72" height="96" viewBox="0 0 72 96">${Ml}</svg>`}var Ut=function(i,t,a,e,s,m){function o(d){if(d!==void 0&&typeof d!="function")throw new TypeError("Function expected");return d}for(var c=e.kind,v=c==="getter"?"get":c==="setter"?"set":"value",u=!t&&i?e.static?i:i.prototype:null,n=t||(u?Object.getOwnPropertyDescriptor(u,e.name):{}),r,b=!1,p=a.length-1;p>=0;p--){var f={};for(var h in e)f[h]=h==="access"?{}:e[h];for(var h in e.access)f.access[h]=e.access[h];f.addInitializer=function(d){if(b)throw new TypeError("Cannot add initializers after decoration has completed");m.push(o(d||null))};var l=(0,a[p])(c==="accessor"?{get:n.get,set:n.set}:n[v],f);if(c==="accessor"){if(l===void 0)continue;if(l===null||typeof l!="object")throw new TypeError("Object expected");(r=o(l.get))&&(n.get=r),(r=o(l.set))&&(n.set=r),(r=o(l.init))&&s.unshift(r)}else(r=o(l))&&(c==="field"?s.unshift(r):n[v]=r)}u&&Object.defineProperty(u,e.name,n),b=!0},Ke=function(i,t,a){for(var e=arguments.length>2,s=0;s<t.length;s++)a=e?t[s].call(i,a):t[s].call(i);return e?a:void 0};let Tl=(()=>{var _,P,ye,O,T,ie,ne,W,g;let i=[Ce("discord-file-attachment")],t,a=[],e,s=we,m,o=[],c=[],v,u=[],n=[],r,b=[],p=[],f,h=[],l=[],d,Q=[],ae=[],$,H=[],L=[],j,I=[],D=[],re,ge=[],M=[];return _=class extends s{constructor(){super(...arguments);z(this,P,Ke(this,o,void 0));z(this,ye,(Ke(this,c),Ke(this,u,void 0)));z(this,O,(Ke(this,n),Ke(this,b,void 0)));z(this,T,(Ke(this,p),Ke(this,h,void 0)));z(this,ie,(Ke(this,l),Ke(this,Q,void 0)));z(this,ne,(Ke(this,ae),Ke(this,H,void 0)));z(this,W,(Ke(this,L),Ke(this,I,void 0)));z(this,g,(Ke(this,D),Ke(this,ge,!1)));Ke(this,M)}get name(){return y(this,P)}set name(Y){w(this,P,Y)}get bytes(){return y(this,ye)}set bytes(Y){w(this,ye,Y)}get bytesUnit(){return y(this,O)}set bytesUnit(Y){w(this,O,Y)}get href(){return y(this,T)}set href(Y){w(this,T,Y)}get rel(){return y(this,ie)}set rel(Y){w(this,ie,Y)}get target(){return y(this,ne)}set target(Y){w(this,ne,Y)}get type(){return y(this,W)}set type(Y){w(this,W,Y)}get lightTheme(){return y(this,g)}set lightTheme(Y){w(this,g,Y)}render(){return k`<div class="discord-file-attachment-non-visual-media-item-container">
			<div class="discord-file-attachment-non-visual-media-item">
				<div class="discord-file-attachment-mosaic-item-media">
					<div class=${Be({"discord-file-attachment-mosaic-style":!0,"discord-file-attachment-light-theme":this.lightTheme})}>
						${$l({class:"discord-file-attachment-icon",alt:"Attachment file type: unknown",title:"unknown"})}
						<div class="discord-file-attachment-inner">
							<div class="discord-file-attachment-filename-link-wrapper">
								<discord-link
									href=${fe(this.href)}
									rel=${fe(this.rel)}
									target=${fe(this.target)}
									type=${fe(this.type)}
								>
									${this.name}
								</discord-link>
							</div>
							<div class="discord-file-attachment-metadata">
								${this.bytes}${X(this.bytesUnit,()=>k` ${this.bytesUnit}`,()=>null)}
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="discord-button-download-attachment">
				<a
					class="discord-link-download-attachment"
					aria-label="Download"
					href="${fe(this.href)}"
					rel="noreferrer noopener"
					target="_blank"
					role="button"
					tabindex="0"
				>
					${Da()}
				</a>
			</div>
		</div>`}},P=new WeakMap,ye=new WeakMap,O=new WeakMap,T=new WeakMap,ie=new WeakMap,ne=new WeakMap,W=new WeakMap,g=new WeakMap,e=_,(()=>{const Y=typeof Symbol=="function"&&Symbol.metadata?Object.create(s[Symbol.metadata]??null):void 0;m=[x()],v=[x({type:Number})],r=[x({attribute:"bytes-unit"})],f=[x()],d=[x()],$=[x()],j=[x()],re=[Ae({context:Ne,subscribe:!0}),x({type:Boolean,reflect:!0,attribute:"light-theme"})],Ut(_,null,m,{kind:"accessor",name:"name",static:!1,private:!1,access:{has:A=>"name"in A,get:A=>A.name,set:(A,R)=>{A.name=R}},metadata:Y},o,c),Ut(_,null,v,{kind:"accessor",name:"bytes",static:!1,private:!1,access:{has:A=>"bytes"in A,get:A=>A.bytes,set:(A,R)=>{A.bytes=R}},metadata:Y},u,n),Ut(_,null,r,{kind:"accessor",name:"bytesUnit",static:!1,private:!1,access:{has:A=>"bytesUnit"in A,get:A=>A.bytesUnit,set:(A,R)=>{A.bytesUnit=R}},metadata:Y},b,p),Ut(_,null,f,{kind:"accessor",name:"href",static:!1,private:!1,access:{has:A=>"href"in A,get:A=>A.href,set:(A,R)=>{A.href=R}},metadata:Y},h,l),Ut(_,null,d,{kind:"accessor",name:"rel",static:!1,private:!1,access:{has:A=>"rel"in A,get:A=>A.rel,set:(A,R)=>{A.rel=R}},metadata:Y},Q,ae),Ut(_,null,$,{kind:"accessor",name:"target",static:!1,private:!1,access:{has:A=>"target"in A,get:A=>A.target,set:(A,R)=>{A.target=R}},metadata:Y},H,L),Ut(_,null,j,{kind:"accessor",name:"type",static:!1,private:!1,access:{has:A=>"type"in A,get:A=>A.type,set:(A,R)=>{A.type=R}},metadata:Y},I,D),Ut(_,null,re,{kind:"accessor",name:"lightTheme",static:!1,private:!1,access:{has:A=>"lightTheme"in A,get:A=>A.lightTheme,set:(A,R)=>{A.lightTheme=R}},metadata:Y},ge,M),Ut(null,t={value:e},i,{kind:"class",name:e.name,metadata:Y},null,a),e=t.value,Y&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:Y})})(),pe(_,"styles",ke`
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
	`),Ke(e,a),e})();/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Aa=(i,t,a)=>{for(const e of t)if(e[0]===i)return(0,e[1])();return a==null?void 0:a()};var Xa=function(i,t,a,e,s,m){function o(d){if(d!==void 0&&typeof d!="function")throw new TypeError("Function expected");return d}for(var c=e.kind,v=c==="getter"?"get":c==="setter"?"set":"value",u=!t&&i?e.static?i:i.prototype:null,n=t||(u?Object.getOwnPropertyDescriptor(u,e.name):{}),r,b=!1,p=a.length-1;p>=0;p--){var f={};for(var h in e)f[h]=h==="access"?{}:e[h];for(var h in e.access)f.access[h]=e.access[h];f.addInitializer=function(d){if(b)throw new TypeError("Cannot add initializers after decoration has completed");m.push(o(d||null))};var l=(0,a[p])(c==="accessor"?{get:n.get,set:n.set}:n[v],f);if(c==="accessor"){if(l===void 0)continue;if(l===null||typeof l!="object")throw new TypeError("Object expected");(r=o(l.get))&&(n.get=r),(r=o(l.set))&&(n.set=r),(r=o(l.init))&&s.unshift(r)}else(r=o(l))&&(c==="field"?s.unshift(r):n[v]=r)}u&&Object.defineProperty(u,e.name,n),b=!0},ga=function(i,t,a){for(var e=arguments.length>2,s=0;s<t.length;s++)a=e?t[s].call(i,a):t[s].call(i);return e?a:void 0};let Cl=(()=>{var v,u;let i=[Ce("discord-header")],t,a=[],e,s=we,m,o=[],c=[];return v=class extends s{constructor(){super(...arguments);z(this,u,ga(this,o,1));ga(this,c)}get level(){return y(this,u)}set level(b){w(this,u,b)}ensureLevelIsNumber(){this.level&&!Number.isNaN(this.level)&&(this.level=Number(this.level))}checkLevel(){if(this.level<1||this.level>3)throw new RangeError("The level property must be a number between 1 and 3 (inclusive)")}render(){return this.ensureLevelIsNumber(),this.checkLevel(),Aa(this.level,[[1,()=>k`<h1><slot></slot></h1>`],[2,()=>k`<h2><slot></slot></h2>`],[3,()=>k`<h3><slot></slot></h3>`]],()=>k`<slot></slot>`)}},u=new WeakMap,e=v,(()=>{const b=typeof Symbol=="function"&&Symbol.metadata?Object.create(s[Symbol.metadata]??null):void 0;m=[x({type:Number,reflect:!0})],Xa(v,null,m,{kind:"accessor",name:"level",static:!1,private:!1,access:{has:p=>"level"in p,get:p=>p.level,set:(p,f)=>{p.level=f}},metadata:b},o,c),Xa(null,t={value:e},i,{kind:"class",name:e.name,metadata:b},null,a),e=t.value,b&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:b})})(),pe(v,"styles",ke`
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
	`),ga(e,a),e})();var zi=function(i,t,a,e,s,m){function o(d){if(d!==void 0&&typeof d!="function")throw new TypeError("Function expected");return d}for(var c=e.kind,v=c==="getter"?"get":c==="setter"?"set":"value",u=!t&&i?e.static?i:i.prototype:null,n=t||(u?Object.getOwnPropertyDescriptor(u,e.name):{}),r,b=!1,p=a.length-1;p>=0;p--){var f={};for(var h in e)f[h]=h==="access"?{}:e[h];for(var h in e.access)f.access[h]=e.access[h];f.addInitializer=function(d){if(b)throw new TypeError("Cannot add initializers after decoration has completed");m.push(o(d||null))};var l=(0,a[p])(c==="accessor"?{get:n.get,set:n.set}:n[v],f);if(c==="accessor"){if(l===void 0)continue;if(l===null||typeof l!="object")throw new TypeError("Object expected");(r=o(l.get))&&(n.get=r),(r=o(l.set))&&(n.set=r),(r=o(l.init))&&s.unshift(r)}else(r=o(l))&&(c==="field"?s.unshift(r):n[v]=r)}u&&Object.defineProperty(u,e.name,n),b=!0},At=function(i,t,a){for(var e=arguments.length>2,s=0;s<t.length;s++)a=e?t[s].call(i,a):t[s].call(i);return e?a:void 0};let jl=(()=>{var $,H,L,j,I,D;let i=[Ce("discord-image-attachment")],t,a=[],e,s=we,m,o=[],c=[],v,u=[],n=[],r,b=[],p=[],f,h=[],l=[],d,Q=[],ae=[];return $=class extends s{constructor(){super(...arguments);z(this,H,At(this,o,void 0));z(this,L,(At(this,c),At(this,u,void 0)));z(this,j,(At(this,n),At(this,b,void 0)));z(this,I,(At(this,p),At(this,h,"discord image attachment")));z(this,D,(At(this,l),At(this,Q,!1)));At(this,ae)}get url(){return y(this,H)}set url(M){w(this,H,M)}get height(){return y(this,L)}set height(M){w(this,L,M)}get width(){return y(this,j)}set width(M){w(this,j,M)}get alt(){return y(this,I)}set alt(M){w(this,I,M)}get customImageElement(){return y(this,D)}set customImageElement(M){w(this,D,M)}componentWillRender(){this.customImageElement||Yo(this.url)}render(){return k`
			<div class="discord-image-attachment">
				<div class="discord-image-wrapper" style="${qt({height:`${this.height}px`,width:`${this.width}px`})}">
					${X(this.customImageElement,()=>k`<slot></slot>`,()=>k`<img
								alt=${fe(this.alt)}
								src=${fe(this.url)}
								height=${fe(this.height)}
								width=${fe(this.width)}
							/>`)}
				</div>
			</div>
		`}},H=new WeakMap,L=new WeakMap,j=new WeakMap,I=new WeakMap,D=new WeakMap,e=$,(()=>{const M=typeof Symbol=="function"&&Symbol.metadata?Object.create(s[Symbol.metadata]??null):void 0;m=[x({reflect:!0,attribute:"url"})],v=[x({type:Number,reflect:!0,attribute:"height"})],r=[x({type:Number,reflect:!0,attribute:"width"})],f=[x({reflect:!0,attribute:"alt"})],d=[x({type:Boolean,attribute:"custom-image-element"})],zi($,null,m,{kind:"accessor",name:"url",static:!1,private:!1,access:{has:_=>"url"in _,get:_=>_.url,set:(_,P)=>{_.url=P}},metadata:M},o,c),zi($,null,v,{kind:"accessor",name:"height",static:!1,private:!1,access:{has:_=>"height"in _,get:_=>_.height,set:(_,P)=>{_.height=P}},metadata:M},u,n),zi($,null,r,{kind:"accessor",name:"width",static:!1,private:!1,access:{has:_=>"width"in _,get:_=>_.width,set:(_,P)=>{_.width=P}},metadata:M},b,p),zi($,null,f,{kind:"accessor",name:"alt",static:!1,private:!1,access:{has:_=>"alt"in _,get:_=>_.alt,set:(_,P)=>{_.alt=P}},metadata:M},h,l),zi($,null,d,{kind:"accessor",name:"customImageElement",static:!1,private:!1,access:{has:_=>"customImageElement"in _,get:_=>_.customImageElement,set:(_,P)=>{_.customImageElement=P}},metadata:M},Q,ae),zi(null,t={value:e},i,{kind:"class",name:e.name,metadata:M},null,a),e=t.value,M&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:M})})(),pe($,"styles",ke`
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
	`),At(e,a),e})();var zt=function(i,t,a,e,s,m){function o(d){if(d!==void 0&&typeof d!="function")throw new TypeError("Function expected");return d}for(var c=e.kind,v=c==="getter"?"get":c==="setter"?"set":"value",u=!t&&i?e.static?i:i.prototype:null,n=t||(u?Object.getOwnPropertyDescriptor(u,e.name):{}),r,b=!1,p=a.length-1;p>=0;p--){var f={};for(var h in e)f[h]=h==="access"?{}:e[h];for(var h in e.access)f.access[h]=e.access[h];f.addInitializer=function(d){if(b)throw new TypeError("Cannot add initializers after decoration has completed");m.push(o(d||null))};var l=(0,a[p])(c==="accessor"?{get:n.get,set:n.set}:n[v],f);if(c==="accessor"){if(l===void 0)continue;if(l===null||typeof l!="object")throw new TypeError("Object expected");(r=o(l.get))&&(n.get=r),(r=o(l.set))&&(n.set=r),(r=o(l.init))&&s.unshift(r)}else(r=o(l))&&(c==="field"?s.unshift(r):n[v]=r)}u&&Object.defineProperty(u,e.name,n),b=!0},Ue=function(i,t,a){for(var e=arguments.length>2,s=0;s<t.length;s++)a=e?t[s].call(i,a):t[s].call(i);return e?a:void 0};let $a=(()=>{var A,R,q,B,F,ue,Ve,G,S,se,Se,He,je;let i=[Ce("discord-input-text")],t,a=[],e,s=we,m,o=[],c=[],v,u=[],n=[],r,b=[],p=[],f,h=[],l=[],d,Q=[],ae=[],$,H=[],L=[],j,I=[],D=[],re,ge=[],M=[],_,P=[],ye=[],O,T=[],ie=[],ne,W=[],g=[],E,K=[],Y=[];return A=class extends s{constructor(){super(...arguments);z(this,R,Ue(this,o,"paragraph"));z(this,q,(Ue(this,c),Ue(this,u,!1)));z(this,B,(Ue(this,n),Ue(this,b,void 0)));z(this,F,(Ue(this,p),Ue(this,h,void 0)));z(this,ue,(Ue(this,l),Ue(this,Q,0)));z(this,Ve,(Ue(this,ae),Ue(this,H,4e3)));z(this,G,(Ue(this,L),Ue(this,I,!1)));z(this,S,(Ue(this,D),Ue(this,ge,"")));z(this,se,(Ue(this,M),Ue(this,P,"")));z(this,Se,(Ue(this,ye),Ue(this,T,!1)));z(this,He,(Ue(this,ie),Ue(this,W,null)));z(this,je,(Ue(this,g),Ue(this,K,0)));pe(this,"validInputTextTypes",(Ue(this,Y),new Set(["short","paragraph"])))}get type(){return y(this,R)}set type(N){w(this,R,N)}get required(){return y(this,q)}set required(N){w(this,q,N)}get label(){return y(this,B)}set label(N){w(this,B,N)}get placeholder(){return y(this,F)}set placeholder(N){w(this,F,N)}get minLength(){return y(this,ue)}set minLength(N){w(this,ue,N)}get maxLength(){return y(this,Ve)}set maxLength(N){w(this,Ve,N)}get lightTheme(){return y(this,G)}set lightTheme(N){w(this,G,N)}get defaultValue(){return y(this,S)}set defaultValue(N){w(this,S,N)}get value(){return y(this,se)}set value(N){w(this,se,N)}get hasWarning(){return y(this,Se)}set hasWarning(N){w(this,Se,N)}get calculatedMaxLength(){return y(this,He)}set calculatedMaxLength(N){w(this,He,N)}get calculatedCharactersCount(){return y(this,je)}set calculatedCharactersCount(N){w(this,je,N)}connectedCallback(){super.connectedCallback(),this.defaultValue&&(this.value=this.defaultValue,this.calculatedCharactersCount=this.value.length)}resetState(){this.hasWarning=!1,this.calculatedMaxLength=null,this.calculatedCharactersCount=0,this.defaultValue?this.value=this.defaultValue:this.value=""}render(){return this.checkNeededArgument(),this.checkType(),k`
			<div class="discord-input-text">
				<div class=${Be({"discord-text-input-warning-length":this.hasWarning})}>
					<h2 class="discord-label-input-text">
						${this.label.slice(0,45)}${X(this.required&&!this.hasWarning,()=>k`<span class="discord-text-input-required">*</span>`)}
					</h2>
					${X(this.hasWarning,()=>k`<span class="discord-text-input-warning-length discord-text-input-warning-error-text">
								- Must be between ${this.minLength} and ${this.maxLength} in length.</span
							>`)}
				</div>
				<div class="discord-text-input-container">
					${X(this.type==="paragraph",()=>k`
							<div class="discord-text-input-container">
								<textarea
									@input=${N=>this.handleInputChange(N)}
									.required=${this.required}
									.value=${this.value}
									class="discord-text-input-paragraph"
									type="text"
									minlength="${this.minLength}"
									maxlength="${this.maxLength}"
									placeholder="${fe(this.placeholder)}"
									rows="3"
								></textarea>
								<div class="discord-text-input-textarea-max-length">
									<span
										>${X(this.valueIsNotNullOrUndefined(this.calculatedMaxLength),()=>this.calculatedMaxLength,()=>X(this.value,()=>this.maxLength-this.value.length,()=>this.maxLength))}</span
									>
								</div>
							</div>
						`)}
					${X(this.type==="short",()=>k`<input
								@input=${N=>this.handleInputChange(N)}
								.required=${this.required}
								.value=${this.value}
								class="discord-text-input-short"
								type="text"
								minlength="${this.minLength}"
								maxlength="${this.maxLength}"
								placeholder="${fe(this.placeholder)}"
								rows="3"
							/>`)}
				</div>
				${X(this.required,()=>k`
						<div class="discord-text-input-message-needed-input">
							<div class="icon">
								<div class="exclamation">!</div>
							</div>
							<span>Please fill out this field.</span>
						</div>
					`)}
				${X(this.valueIsNotNullOrUndefined(this.minLength),()=>k`
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
				<div class=${Be({"discord-text-input-warning-length":this.hasWarning})}>
					<h2 class="discord-text-input-warning-length">
						${X(this.hasWarning&&this.valueIsNotNullOrUndefined(this.minLength),()=>k`<span class="discord-text-input-warning-bottom-error-text"
									>Must be ${this.minLength} characters or more in length.</span
								>`)}
					</h2>
				</div>
			</div>
		`}checkNeededArgument(){if(this.label){if(!this.type)throw new Yt("Type is required to input text")}else throw new Yt("Label is required to input text")}checkType(){if(typeof this.type!="string")throw new TypeError("DiscordInputText `type` prop must be a string.");if(!this.validInputTextTypes.has(this.type))throw new RangeError("DiscordInputText `type` prop must be one of: 'short', 'paragraph'")}valueIsNotNullOrUndefined(N){return N!=null}handleInputChange(N){var le,J;const C=N==null?void 0:N.target;if(this.value=C instanceof HTMLTextAreaElement||C instanceof HTMLInputElement?C.value:"",C instanceof HTMLTextAreaElement||C instanceof HTMLInputElement){const Te=C.value.length;Te===0&&this.minLength===0&&this.valueIsNotNullOrUndefined(this.maxLength)&&this.required?this.hasWarning=!0:this.hasWarning=Te<this.minLength,this.calculatedMaxLength=this.maxLength-Te,this.calculatedCharactersCount=Te}const ce=(le=this.shadowRoot)==null?void 0:le.querySelector("div.discord-text-input-message-needed-input"),$e=(J=this.shadowRoot)==null?void 0:J.querySelector("div.discord-text-input-message-needed-min-length");C.value.length>=this.minLength&&$e instanceof HTMLDivElement&&$e.style.display&&($e.style.opacity="0",globalThis.setTimeout(()=>{$e.style.display=""},1e3)),ce instanceof HTMLDivElement&&ce.style.display&&(ce.style.opacity="0",globalThis.setTimeout(()=>{ce.style.display=""},1e3))}},R=new WeakMap,q=new WeakMap,B=new WeakMap,F=new WeakMap,ue=new WeakMap,Ve=new WeakMap,G=new WeakMap,S=new WeakMap,se=new WeakMap,Se=new WeakMap,He=new WeakMap,je=new WeakMap,e=A,(()=>{const N=typeof Symbol=="function"&&Symbol.metadata?Object.create(s[Symbol.metadata]??null):void 0;m=[x({reflect:!0,attribute:"type",type:String})],v=[x({reflect:!0,attribute:"required",type:Boolean})],r=[x({reflect:!0,attribute:"label",type:String})],f=[x({reflect:!0,attribute:"placeholder",type:String})],d=[x({reflect:!0,attribute:"min-length",type:Number})],$=[x({reflect:!0,attribute:"max-length",type:Number})],j=[Ae({context:Ne,subscribe:!0}),x({type:Boolean,reflect:!0,attribute:"light-theme"})],re=[x({type:String,reflect:!0,attribute:"default-value"})],_=[gt()],O=[gt()],ne=[gt()],E=[gt()],zt(A,null,m,{kind:"accessor",name:"type",static:!1,private:!1,access:{has:C=>"type"in C,get:C=>C.type,set:(C,ce)=>{C.type=ce}},metadata:N},o,c),zt(A,null,v,{kind:"accessor",name:"required",static:!1,private:!1,access:{has:C=>"required"in C,get:C=>C.required,set:(C,ce)=>{C.required=ce}},metadata:N},u,n),zt(A,null,r,{kind:"accessor",name:"label",static:!1,private:!1,access:{has:C=>"label"in C,get:C=>C.label,set:(C,ce)=>{C.label=ce}},metadata:N},b,p),zt(A,null,f,{kind:"accessor",name:"placeholder",static:!1,private:!1,access:{has:C=>"placeholder"in C,get:C=>C.placeholder,set:(C,ce)=>{C.placeholder=ce}},metadata:N},h,l),zt(A,null,d,{kind:"accessor",name:"minLength",static:!1,private:!1,access:{has:C=>"minLength"in C,get:C=>C.minLength,set:(C,ce)=>{C.minLength=ce}},metadata:N},Q,ae),zt(A,null,$,{kind:"accessor",name:"maxLength",static:!1,private:!1,access:{has:C=>"maxLength"in C,get:C=>C.maxLength,set:(C,ce)=>{C.maxLength=ce}},metadata:N},H,L),zt(A,null,j,{kind:"accessor",name:"lightTheme",static:!1,private:!1,access:{has:C=>"lightTheme"in C,get:C=>C.lightTheme,set:(C,ce)=>{C.lightTheme=ce}},metadata:N},I,D),zt(A,null,re,{kind:"accessor",name:"defaultValue",static:!1,private:!1,access:{has:C=>"defaultValue"in C,get:C=>C.defaultValue,set:(C,ce)=>{C.defaultValue=ce}},metadata:N},ge,M),zt(A,null,_,{kind:"accessor",name:"value",static:!1,private:!1,access:{has:C=>"value"in C,get:C=>C.value,set:(C,ce)=>{C.value=ce}},metadata:N},P,ye),zt(A,null,O,{kind:"accessor",name:"hasWarning",static:!1,private:!1,access:{has:C=>"hasWarning"in C,get:C=>C.hasWarning,set:(C,ce)=>{C.hasWarning=ce}},metadata:N},T,ie),zt(A,null,ne,{kind:"accessor",name:"calculatedMaxLength",static:!1,private:!1,access:{has:C=>"calculatedMaxLength"in C,get:C=>C.calculatedMaxLength,set:(C,ce)=>{C.calculatedMaxLength=ce}},metadata:N},W,g),zt(A,null,E,{kind:"accessor",name:"calculatedCharactersCount",static:!1,private:!1,access:{has:C=>"calculatedCharactersCount"in C,get:C=>C.calculatedCharactersCount,set:(C,ce)=>{C.calculatedCharactersCount=ce}},metadata:N},K,Y),zt(null,t={value:e},i,{kind:"class",name:e.name,metadata:N},null,a),e=t.value,N&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:N})})(),pe(A,"styles",ke`
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
	`),Ue(e,a),e})();const Hl=_e`
<path
	fill="currentColor"
	fill-rule="evenodd"
	d="m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z"
/>
`;function El(i){return k`<svg ${be(i)} class="discord-guild-badge" aria-hidden="false" width="16" height="16" viewBox="0 0 16 15.2">
		${Hl}
	</svg>`}const Sl=_e`
	<path
		d="M10.5906 6.39993L9.19223 7.29993C8.99246 7.39993 8.89258 7.39993 8.69281 7.29993C8.59293 7.19993 8.39317 7.09993 8.29328 6.99993C7.89375 6.89993 7.5941 6.99993 7.29445 7.19993L6.79504 7.49993L4.29797 9.19993C3.69867 9.49993 2.99949 9.39993 2.69984 8.79993C2.30031 8.29993 2.50008 7.59993 2.99949 7.19993L5.99598 5.19993C6.79504 4.69993 7.79387 4.49993 8.69281 4.69993C9.49188 4.89993 10.0912 5.29993 10.5906 5.89993C10.7904 6.09993 10.6905 6.29993 10.5906 6.39993Z"
		fill="currentColor"
	/>
	<path
		d="M13.4871 7.79985C13.4871 8.19985 13.2874 8.59985 12.9877 8.79985L9.89135 10.7999C9.29206 11.1999 8.69276 11.3999 7.99358 11.3999C7.69393 11.3999 7.49417 11.3999 7.19452 11.2999C6.39545 11.0999 5.79616 10.6999 5.29674 10.0999C5.19686 9.89985 5.29674 9.69985 5.39663 9.59985L6.79499 8.69985C6.89487 8.59985 7.09463 8.59985 7.19452 8.69985C7.39428 8.79985 7.59405 8.89985 7.69393 8.99985C8.09346 8.99985 8.39311 8.99985 8.69276 8.79985L9.39194 8.39985L11.3896 6.99985L11.6892 6.79985C12.1887 6.49985 12.9877 6.59985 13.2874 7.09985C13.4871 7.39985 13.4871 7.59985 13.4871 7.79985Z"
		fill="currentColor"
	/>
`;function Dl(i={}){return k`<svg ${be(i)} class="partner-badge-overlay" aria-hidden="false" width="16" height="16" viewBox="0 0 16 16">
		${Sl}
	</svg>`}const Ol=_e`
	<path d="M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z" fill="currentColor" />
`;function Al(i={}){return k`<svg ${be(i)} class="verified-badge-overlay" aria-hidden="false" width="16" height="16" viewBox="0 0 16 15.2">
		${Ol}
	</svg>`}var Vt=function(i,t,a,e,s,m){function o(d){if(d!==void 0&&typeof d!="function")throw new TypeError("Function expected");return d}for(var c=e.kind,v=c==="getter"?"get":c==="setter"?"set":"value",u=!t&&i?e.static?i:i.prototype:null,n=t||(u?Object.getOwnPropertyDescriptor(u,e.name):{}),r,b=!1,p=a.length-1;p>=0;p--){var f={};for(var h in e)f[h]=h==="access"?{}:e[h];for(var h in e.access)f.access[h]=e.access[h];f.addInitializer=function(d){if(b)throw new TypeError("Cannot add initializers after decoration has completed");m.push(o(d||null))};var l=(0,a[p])(c==="accessor"?{get:n.get,set:n.set}:n[v],f);if(c==="accessor"){if(l===void 0)continue;if(l===null||typeof l!="object")throw new TypeError("Object expected");(r=o(l.get))&&(n.get=r),(r=o(l.set))&&(n.set=r),(r=o(l.init))&&s.unshift(r)}else(r=o(l))&&(c==="field"?s.unshift(r):n[v]=r)}u&&Object.defineProperty(u,e.name,n),b=!0},We=function(i,t,a){for(var e=arguments.length>2,s=0;s<t.length;s++)a=e?t[s].call(i,a):t[s].call(i);return e?a:void 0};let Vl=(()=>{var ne,W,g,E,K,Y,A,R,q,B,F;let i=[Ce("discord-invite")],t,a=[],e,s=we,m,o=[],c=[],v,u=[],n=[],r,b=[],p=[],f,h=[],l=[],d,Q=[],ae=[],$,H=[],L=[],j,I=[],D=[],re,ge=[],M=[],_,P=[],ye=[],O,T=[],ie=[];return ne=class extends s{constructor(){super(...arguments);z(this,W,We(this,o,aa.blue));z(this,g,(We(this,c),We(this,u,"Discord Server")));z(this,E,(We(this,n),We(this,b,void 0)));z(this,K,(We(this,p),We(this,h,0)));z(this,Y,(We(this,l),We(this,Q,0)));z(this,A,(We(this,ae),We(this,H,!1)));z(this,R,(We(this,L),We(this,I,!1)));z(this,q,(We(this,D),We(this,ge,"You've been invited to join a server")));z(this,B,(We(this,M),We(this,P,"Join")));z(this,F,(We(this,ye),We(this,T,!1)));We(this,ie)}get icon(){return y(this,W)}set icon(G){w(this,W,G)}get name(){return y(this,g)}set name(G){w(this,g,G)}get url(){return y(this,E)}set url(G){w(this,E,G)}get online(){return y(this,K)}set online(G){w(this,K,G)}get members(){return y(this,Y)}set members(G){w(this,Y,G)}get verified(){return y(this,A)}set verified(G){w(this,A,G)}get partnered(){return y(this,R)}set partnered(G){w(this,R,G)}get inviteTitle(){return y(this,q)}set inviteTitle(G){w(this,q,G)}get joinBtn(){return y(this,B)}set joinBtn(G){w(this,B,G)}get lightTheme(){return y(this,F)}set lightTheme(G){w(this,F,G)}render(){return k`<div class="discord-invite-header">${this.inviteTitle}</div>
			<div class="discord-invite-root">
				<div class="discord-invite-info">
					<img class="discord-invite-icon" src=${fe(this.icon)} alt=${fe(this.name)} />
					<div class="discord-invite-info-text-ellipsis">
						<div class="discord-invite-title">
							${X(this.verified&&!this.partnered||!this.verified&&this.partnered,()=>k`<div class="discord-invite-badge">
										${El({"aria-label":this.partnered?"Discord Partner":"Verified",class:`discord-invite-badge-${this.partnered?"partnered":"verified"}`})}
										<div class="discord-invite-badge-container">
											${this.partnered?Dl():Al()}
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
				<a class="discord-invite-join" href=${fe(this.url)} target="_blank" rel="noopener noreferrer">${this.joinBtn}</a>
			</div>`}},W=new WeakMap,g=new WeakMap,E=new WeakMap,K=new WeakMap,Y=new WeakMap,A=new WeakMap,R=new WeakMap,q=new WeakMap,B=new WeakMap,F=new WeakMap,e=ne,(()=>{const G=typeof Symbol=="function"&&Symbol.metadata?Object.create(s[Symbol.metadata]??null):void 0;m=[x()],v=[x()],r=[x()],f=[x({type:Number})],d=[x({type:Number})],$=[x({type:Boolean})],j=[x({type:Boolean})],re=[x({attribute:"invite-title"})],_=[x({attribute:"join-btn"})],O=[Ae({context:Ne}),x({type:Boolean,reflect:!0,attribute:"light-theme"})],Vt(ne,null,m,{kind:"accessor",name:"icon",static:!1,private:!1,access:{has:S=>"icon"in S,get:S=>S.icon,set:(S,se)=>{S.icon=se}},metadata:G},o,c),Vt(ne,null,v,{kind:"accessor",name:"name",static:!1,private:!1,access:{has:S=>"name"in S,get:S=>S.name,set:(S,se)=>{S.name=se}},metadata:G},u,n),Vt(ne,null,r,{kind:"accessor",name:"url",static:!1,private:!1,access:{has:S=>"url"in S,get:S=>S.url,set:(S,se)=>{S.url=se}},metadata:G},b,p),Vt(ne,null,f,{kind:"accessor",name:"online",static:!1,private:!1,access:{has:S=>"online"in S,get:S=>S.online,set:(S,se)=>{S.online=se}},metadata:G},h,l),Vt(ne,null,d,{kind:"accessor",name:"members",static:!1,private:!1,access:{has:S=>"members"in S,get:S=>S.members,set:(S,se)=>{S.members=se}},metadata:G},Q,ae),Vt(ne,null,$,{kind:"accessor",name:"verified",static:!1,private:!1,access:{has:S=>"verified"in S,get:S=>S.verified,set:(S,se)=>{S.verified=se}},metadata:G},H,L),Vt(ne,null,j,{kind:"accessor",name:"partnered",static:!1,private:!1,access:{has:S=>"partnered"in S,get:S=>S.partnered,set:(S,se)=>{S.partnered=se}},metadata:G},I,D),Vt(ne,null,re,{kind:"accessor",name:"inviteTitle",static:!1,private:!1,access:{has:S=>"inviteTitle"in S,get:S=>S.inviteTitle,set:(S,se)=>{S.inviteTitle=se}},metadata:G},ge,M),Vt(ne,null,_,{kind:"accessor",name:"joinBtn",static:!1,private:!1,access:{has:S=>"joinBtn"in S,get:S=>S.joinBtn,set:(S,se)=>{S.joinBtn=se}},metadata:G},P,ye),Vt(ne,null,O,{kind:"accessor",name:"lightTheme",static:!1,private:!1,access:{has:S=>"lightTheme"in S,get:S=>S.lightTheme,set:(S,se)=>{S.lightTheme=se}},metadata:G},T,ie),Vt(null,t={value:e},i,{kind:"class",name:e.name,metadata:G},null,a),e=t.value,G&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:G})})(),pe(ne,"styles",ke`
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
	`),We(e,a),e})();var Il=function(i,t,a,e,s,m){function o(d){if(d!==void 0&&typeof d!="function")throw new TypeError("Function expected");return d}for(var c=e.kind,v=c==="getter"?"get":c==="setter"?"set":"value",u=!t&&i?e.static?i:i.prototype:null,n=t||(u?Object.getOwnPropertyDescriptor(u,e.name):{}),r,b=!1,p=a.length-1;p>=0;p--){var f={};for(var h in e)f[h]=h==="access"?{}:e[h];for(var h in e.access)f.access[h]=e.access[h];f.addInitializer=function(d){if(b)throw new TypeError("Cannot add initializers after decoration has completed");m.push(o(d||null))};var l=(0,a[p])(c==="accessor"?{get:n.get,set:n.set}:n[v],f);if(c==="accessor"){if(l===void 0)continue;if(l===null||typeof l!="object")throw new TypeError("Object expected");(r=o(l.get))&&(n.get=r),(r=o(l.set))&&(n.set=r),(r=o(l.init))&&s.unshift(r)}else(r=o(l))&&(c==="field"?s.unshift(r):n[v]=r)}u&&Object.defineProperty(u,e.name,n),b=!0},Ll=function(i,t,a){for(var e=arguments.length>2,s=0;s<t.length;s++)a=e?t[s].call(i,a):t[s].call(i);return e?a:void 0};let Nl=(()=>{var m;let i=[Ce("discord-italic")],t,a=[],e,s=we;return m=class extends s{render(){return k`
			<em>
				<slot></slot>
			</em>
		`}},e=m,(()=>{const c=typeof Symbol=="function"&&Symbol.metadata?Object.create(s[Symbol.metadata]??null):void 0;Il(null,t={value:e},i,{kind:"class",name:e.name,metadata:c},null,a),e=t.value,c&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:c})})(),pe(m,"styles",ke`
		:host > em {
			font-style: italic;
		}
	`),Ll(e,a),e})();var Pl=function(i,t,a,e,s,m){function o(d){if(d!==void 0&&typeof d!="function")throw new TypeError("Function expected");return d}for(var c=e.kind,v=c==="getter"?"get":c==="setter"?"set":"value",u=!t&&i?e.static?i:i.prototype:null,n=t||(u?Object.getOwnPropertyDescriptor(u,e.name):{}),r,b=!1,p=a.length-1;p>=0;p--){var f={};for(var h in e)f[h]=h==="access"?{}:e[h];for(var h in e.access)f.access[h]=e.access[h];f.addInitializer=function(d){if(b)throw new TypeError("Cannot add initializers after decoration has completed");m.push(o(d||null))};var l=(0,a[p])(c==="accessor"?{get:n.get,set:n.set}:n[v],f);if(c==="accessor"){if(l===void 0)continue;if(l===null||typeof l!="object")throw new TypeError("Object expected");(r=o(l.get))&&(n.get=r),(r=o(l.set))&&(n.set=r),(r=o(l.init))&&s.unshift(r)}else(r=o(l))&&(c==="field"?s.unshift(r):n[v]=r)}u&&Object.defineProperty(u,e.name,n),b=!0},Bl=function(i,t,a){for(var e=arguments.length>2,s=0;s<t.length;s++)a=e?t[s].call(i,a):t[s].call(i);return e?a:void 0};let Rl=(()=>{var m;let i=[Ce("discord-list-item")],t,a=[],e,s=we;return m=class extends s{checkParentElement(){var c,v;if(((c=this.parentElement)==null?void 0:c.tagName.toLowerCase())!=="discord-unordered-list"&&((v=this.parentElement)==null?void 0:v.tagName.toLowerCase())!=="discord-ordered-list")throw new Yt("All <discord-list-item> components must be direct children of <discord-unordered-list> or <discord-ordered-list>.")}render(){return this.checkParentElement(),k`<li><slot></slot></li>`}},e=m,(()=>{const c=typeof Symbol=="function"&&Symbol.metadata?Object.create(s[Symbol.metadata]??null):void 0;Pl(null,t={value:e},i,{kind:"class",name:e.name,metadata:c},null,a),e=t.value,c&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:c})})(),pe(m,"styles",ke`
		:host > li {
			margin-bottom: 4px;
		}
	`),Bl(e,a),e})();function Ul(i){return i.startsWith("#")?i.slice(1):i}function Fl(i){const t=i.length===3||i.length===4,a=t?`${i.slice(0,1)}${i.slice(0,1)}`:i.slice(0,2),e=t?`${i.slice(1,2)}${i.slice(1,2)}`:i.slice(2,4),s=t?`${i.slice(2,3)}${i.slice(2,3)}`:i.slice(4,6),m=(t?`${i.slice(3,4)}${i.slice(3,4)}`:i.slice(6,8))||"ff";return{r:a,g:e,b:s,a:m}}function Ki(i){return Number.parseInt(i,16)}function Zl({r:i,g:t,b:a,a:e}){return{r:Ki(i),g:Ki(t),b:Ki(a),a:Number((Ki(e)/255).toFixed(2))}}function ql(i){return typeof i=="number"||typeof i=="string"&&Number.isFinite(Number(i))}function Yl(i,t){const{r:a,g:e,b:s,a:m}=i,o=ql(t)?t:m;return`rgba(${a}, ${e}, ${s}, ${o})`}function _a(i,t){const a=Ul(i),e=Fl(a),s=Zl(e);return Yl(s,t)}const Wl=_e`
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
`;function Ql(i={}){return k`<svg
		${be(i)}
		class="discord-mention-icon"
		aria-label="Browse Channels"
		aria-hidden="false"
		role="img"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
	>
		${Wl}
	</svg>`}const Gl=_e`
	<path
		fill="currentColor"
		d="M21.487 5.126L12.487 0.126C12.184 -0.042 11.818 -0.042 11.515 0.126L2.51498 5.126C2.19798 5.302 2.00098 5.636 2.00098 5.999C2.00098 6.693 2.11498 22.999 12.001 22.999C21.887 22.999 22.001 6.693 22.001 5.999C22.001 5.636 21.804 5.302 21.487 5.126ZM12.001 5.999C13.382 5.999 14.501 7.118 14.501 8.499C14.501 9.88 13.382 10.999 12.001 10.999C10.62 10.999 9.50098 9.88 9.50098 8.499C9.50098 7.118 10.62 5.999 12.001 5.999ZM8.25098 16C8.25098 13.699 9.69998 12.25 12.001 12.25C14.302 12.25 15.751 13.699 15.751 16H8.25098Z"
	/>
`;function Jl(i={}){return k`<svg
		${be(i)}
		class="discord-mention-icon"
		aria-label="Customise Community"
		aria-hidden="false"
		role="img"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
	>
		${Gl}
	</svg>`}const Kl=_e`
	<path
		d="M11 3a1 1 0 1 1 2 0v2h5.75c.16 0 .3.07.4.2l2.63 3.5a.5.5 0 0 1 0 .6l-2.63 3.5a.5.5 0 0 1-.4.2H13v5h2a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-1c0-1.1.9-2 2-2h2v-5H2.8a.5.5 0 0 1-.44-.72L3.9 9.22a.5.5 0 0 0 0-.44L2.36 5.72A.5.5 0 0 1 2.81 5H11V3Z"
		fill="currentColor"
	/>
`;function Xl(i={}){return k`<svg
		${be(i)}
		class="discord-mention-icon"
		aria-label="Server Guide"
		aria-hidden="false"
		role="img"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
	>
		${Kl}
	</svg>`}var Ni=function(i,t,a,e,s,m){function o(d){if(d!==void 0&&typeof d!="function")throw new TypeError("Function expected");return d}for(var c=e.kind,v=c==="getter"?"get":c==="setter"?"set":"value",u=!t&&i?e.static?i:i.prototype:null,n=t||(u?Object.getOwnPropertyDescriptor(u,e.name):{}),r,b=!1,p=a.length-1;p>=0;p--){var f={};for(var h in e)f[h]=h==="access"?{}:e[h];for(var h in e.access)f.access[h]=e.access[h];f.addInitializer=function(d){if(b)throw new TypeError("Cannot add initializers after decoration has completed");m.push(o(d||null))};var l=(0,a[p])(c==="accessor"?{get:n.get,set:n.set}:n[v],f);if(c==="accessor"){if(l===void 0)continue;if(l===null||typeof l!="object")throw new TypeError("Object expected");(r=o(l.get))&&(n.get=r),(r=o(l.set))&&(n.set=r),(r=o(l.init))&&s.unshift(r)}else(r=o(l))&&(c==="field"?s.unshift(r):n[v]=r)}u&&Object.defineProperty(u,e.name,n),b=!0},Ft=function(i,t,a){for(var e=arguments.length>2,s=0;s<t.length;s++)a=e?t[s].call(i,a):t[s].call(i);return e?a:void 0};let en=(()=>{var d,Q,ae,$,H;let i=[Ce("discord-mention")],t,a=[],e,s=we,m,o=[],c=[],v,u=[],n=[],r,b=[],p=[],f,h=[],l=[];return d=class extends s{constructor(){super(...arguments);z(this,Q,Ft(this,o,!1));z(this,ae,(Ft(this,c),Ft(this,u,"user")));z(this,$,(Ft(this,n),Ft(this,b,void 0)));pe(this,"setHoverColor",(Ft(this,p),()=>{this.color&&(this.style.backgroundColor=_a(this.color,.3))}));pe(this,"resetHoverColor",()=>{this.color&&(this.style.backgroundColor=_a(this.color,.1))});z(this,H,Ft(this,h,!1));Ft(this,l)}get highlight(){return y(this,Q)}set highlight(I){w(this,Q,I)}get type(){return y(this,ae)}set type(I){w(this,ae,I)}get color(){return y(this,$)}set color(I){w(this,$,I)}get lightTheme(){return y(this,H)}set lightTheme(I){w(this,H,I)}connectedCallback(){super.connectedCallback(),this.color&&this.type==="role"&&(this.addEventListener("mouseover",this.setHoverColor),this.addEventListener("mouseout",this.resetHoverColor))}disconnectedCallback(){this.removeEventListener("mouseover",this.setHoverColor),this.removeEventListener("mouseout",this.resetHoverColor),super.disconnectedCallback()}willUpdate(){this.color&&(this.style.color=this.color,this.type==="role"&&(this.style.backgroundColor=_a(this.color,.1)))}render(){return k`<span class="no-wrap"
				>${Aa(this.type,[["channel",()=>ks()],["user",()=>k`@`],["role",()=>k`@`],["voice",()=>Ts()],["locked",()=>$s()],["thread",()=>Ms()],["forum",()=>xs()],["server-guide",()=>Xl()],["channels-and-roles",()=>Ql()],["customize-community",()=>Jl()],["slash",()=>k`/`]])}</span
			><slot></slot>`}},Q=new WeakMap,ae=new WeakMap,$=new WeakMap,H=new WeakMap,e=d,(()=>{const I=typeof Symbol=="function"&&Symbol.metadata?Object.create(s[Symbol.metadata]??null):void 0;m=[x({type:Boolean,reflect:!0})],v=[x({reflect:!0})],r=[x({reflect:!0})],f=[Ae({context:Ne,subscribe:!0}),x({type:Boolean,reflect:!0,attribute:"light-theme"})],Ni(d,null,m,{kind:"accessor",name:"highlight",static:!1,private:!1,access:{has:D=>"highlight"in D,get:D=>D.highlight,set:(D,re)=>{D.highlight=re}},metadata:I},o,c),Ni(d,null,v,{kind:"accessor",name:"type",static:!1,private:!1,access:{has:D=>"type"in D,get:D=>D.type,set:(D,re)=>{D.type=re}},metadata:I},u,n),Ni(d,null,r,{kind:"accessor",name:"color",static:!1,private:!1,access:{has:D=>"color"in D,get:D=>D.color,set:(D,re)=>{D.color=re}},metadata:I},b,p),Ni(d,null,f,{kind:"accessor",name:"lightTheme",static:!1,private:!1,access:{has:D=>"lightTheme"in D,get:D=>D.lightTheme,set:(D,re)=>{D.lightTheme=re}},metadata:I},h,l),Ni(null,t={value:e},i,{kind:"class",name:e.name,metadata:I},null,a),e=t.value,I&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:I})})(),pe(d,"styles",ke`
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
	`),Ft(e,a),e})();const tn=_e`
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
`;function an(i={}){return k`<svg
		${be(i)}
		class="discord-message-ephemeral-icon"
		aria-hidden="false"
		width="16"
		height="16"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
	>
		${tn}
	</svg>`}var Fe=function(i,t,a,e,s,m){function o(d){if(d!==void 0&&typeof d!="function")throw new TypeError("Function expected");return d}for(var c=e.kind,v=c==="getter"?"get":c==="setter"?"set":"value",u=!t&&i?e.static?i:i.prototype:null,n=t||(u?Object.getOwnPropertyDescriptor(u,e.name):{}),r,b=!1,p=a.length-1;p>=0;p--){var f={};for(var h in e)f[h]=h==="access"?{}:e[h];for(var h in e.access)f.access[h]=e.access[h];f.addInitializer=function(d){if(b)throw new TypeError("Cannot add initializers after decoration has completed");m.push(o(d||null))};var l=(0,a[p])(c==="accessor"?{get:n.get,set:n.set}:n[v],f);if(c==="accessor"){if(l===void 0)continue;if(l===null||typeof l!="object")throw new TypeError("Object expected");(r=o(l.get))&&(n.get=r),(r=o(l.set))&&(n.set=r),(r=o(l.init))&&s.unshift(r)}else(r=o(l))&&(c==="field"?s.unshift(r):n[v]=r)}u&&Object.defineProperty(u,e.name,n),b=!0},xe=function(i,t,a){for(var e=arguments.length>2,s=0;s<t.length;s++)a=e?t[s].call(i,a):t[s].call(i);return e?a:void 0};let sn=(()=>{var De,$t,jt,de,Z,ve,at,pt,_t,Bt,Wt,he,U,ze,ii,Qt,tt,ai,Ci,ji,Hi,Ei,Si,Di,Oi;let i=[Ce("discord-message")],t,a=[],e,s=we,m,o=[],c=[],v,u=[],n=[],r,b=[],p=[],f,h=[],l=[],d,Q=[],ae=[],$,H=[],L=[],j,I=[],D=[],re,ge=[],M=[],_,P=[],ye=[],O,T=[],ie=[],ne,W=[],g=[],E,K=[],Y=[],A,R=[],q=[],B,F=[],ue=[],Ve,G=[],S=[],se,Se=[],He=[],je,ee=[],oe=[],N,C=[],ce=[],$e,le=[],J=[],Te,et=[],Ct=[],Le,st=[],rt=[],ot,lt=[],nt=[],ct,dt=[],ht=[],mt,ut=[],ft=[];return De=class extends s{constructor(){super(...arguments);z(this,$t,xe(this,o,void 0));z(this,jt,(xe(this,c),xe(this,u,"User")));z(this,de,(xe(this,n),xe(this,b,void 0)));z(this,Z,(xe(this,p),xe(this,h,!1)));z(this,ve,(xe(this,l),xe(this,Q,!1)));z(this,at,(xe(this,ae),xe(this,H,!1)));z(this,pt,(xe(this,L),xe(this,I,!1)));z(this,_t,(xe(this,D),xe(this,ge,!1)));z(this,Bt,(xe(this,M),xe(this,P,!1)));z(this,Wt,(xe(this,ye),xe(this,T,void 0)));z(this,he,(xe(this,ie),xe(this,W,void 0)));z(this,U,(xe(this,g),xe(this,K,void 0)));z(this,ze,(xe(this,Y),xe(this,R,void 0)));z(this,ii,(xe(this,q),xe(this,F,void 0)));z(this,Qt,(xe(this,ue),xe(this,G,!1)));z(this,tt,(xe(this,S),xe(this,Se,!1)));z(this,ai,(xe(this,He),xe(this,ee,new Date)));z(this,Ci,(xe(this,oe),xe(this,C,!1)));z(this,ji,(xe(this,ce),xe(this,le,!1)));z(this,Hi,(xe(this,J),xe(this,et,!1)));z(this,Ei,(xe(this,Ct),xe(this,st,!1)));z(this,Si,(xe(this,rt),xe(this,lt,!1)));z(this,Di,(xe(this,nt),xe(this,dt,!1)));z(this,Oi,(xe(this,ht),xe(this,ut,()=>{})));xe(this,ft)}get profile(){return y(this,$t)}set profile(te){w(this,$t,te)}get author(){return y(this,jt)}set author(te){w(this,jt,te)}get avatar(){return y(this,de)}set avatar(te){w(this,de,te)}get bot(){return y(this,Z)}set bot(te){w(this,Z,te)}get server(){return y(this,ve)}set server(te){w(this,ve,te)}get officialApp(){return y(this,at)}set officialApp(te){w(this,at,te)}get verified(){return y(this,pt)}set verified(te){w(this,pt,te)}get op(){return y(this,_t)}set op(te){w(this,_t,te)}get edited(){return y(this,Bt)}set edited(te){w(this,Bt,te)}get roleColor(){return y(this,Wt)}set roleColor(te){w(this,Wt,te)}get roleIcon(){return y(this,he)}set roleIcon(te){w(this,he,te)}get roleName(){return y(this,U)}set roleName(te){w(this,U,te)}get clanIcon(){return y(this,ze)}set clanIcon(te){w(this,ze,te)}get clanTag(){return y(this,ii)}set clanTag(te){w(this,ii,te)}get highlight(){return y(this,Qt)}set highlight(te){w(this,Qt,te)}get ephemeral(){return y(this,tt)}set ephemeral(te){w(this,tt,te)}get timestamp(){return y(this,ai)}set timestamp(te){w(this,ai,te)}get twentyFour(){return y(this,Ci)}set twentyFour(te){w(this,Ci,te)}get messageBodyOnly(){return y(this,ji)}set messageBodyOnly(te){w(this,ji,te)}get lightTheme(){return y(this,Hi)}set lightTheme(te){w(this,Hi,te)}get compactMode(){return y(this,Ei)}set compactMode(te){w(this,Ei,te)}get noBackground(){return y(this,Si)}set noBackground(te){w(this,Si,te)}get hasThread(){return y(this,Di)}set hasThread(te){w(this,Di,te)}get dismissMessageClicked(){return y(this,Oi)}set dismissMessageClicked(te){w(this,Oi,te)}willUpdate(){this.hasThread=Array.from(this.children).some(te=>te.tagName.toLowerCase()==="discord-thread"),this.highlight=this.highlight||Array.from(this.children).some(te=>te.tagName.toLowerCase()==="discord-mention"&&te.hasAttribute("highlight")&&(te.type==="user"||te.type==="role"))}handleSpaceToDismissMessage(te){var V;te.code==="Space"&&(te.preventDefault(),te.stopPropagation(),(V=this.dismissMessageClicked)==null||V.call(this))}render(){const te={author:this.author,bot:this.bot,officialApp:this.officialApp,verified:this.verified,server:this.server,op:this.op,roleColor:this.roleColor,roleIcon:this.roleIcon,clanIcon:this.clanIcon,clanTag:this.clanTag,roleName:this.roleName},V=this.profile!==void 0&&Reflect.get($i,this.profile)||{},me={...te,...V,avatar:this.resolveAvatar(V.avatar??this.avatar)},Ai=Qi(this.timestamp,this.compactMode,this.twentyFour)??void 0;return k`
			<slot name="reply"></slot>
			<div
				class=${Be({"discord-message-inner":!0,"discord-message-inner-center":this.messageBodyOnly})}
			>
				${X(this.compactMode&&!this.messageBodyOnly,()=>k`<time datetime="${fe(Ai)}" class="discord-message-timestamp">${Ai}</time>`,()=>null)}
				${X(this.messageBodyOnly,()=>k`<time
							datetime="${fe(Ai)}"
							class=${Be({"discord-message-timestamp":!0,"discord-message-timestamp-hover":!0,"discord-message-body-only-indent":!this.compactMode})}
						></time>`,()=>null)}
				${X(this.compactMode||this.messageBodyOnly,()=>null,()=>k`<div class="discord-author-avatar">
							<img src="${fe(me.avatar)}" alt="${fe(me.author)}" />
						</div>`)}

				<div class="discord-message-content">
					${X(this.compactMode||this.messageBodyOnly,()=>null,()=>k`
							<discord-author-info
								author=${me.author??""}
								?bot=${me.bot??!1}
								?server=${me.server??!1}
								?official-app=${me.officialApp??!1}
								?verified=${me.verified??!1}
								?op=${me.op??!1}
								role-color=${me.roleColor??""}
								role-icon=${me.roleIcon??""}
								role-name=${me.roleName??""}
								clan-icon=${me.clanIcon??""}
								clan-tag=${me.clanTag??""}
							></discord-author-info
							><time datetime="${fe(Ai)}" class="discord-message-timestamp">${Ai}</time>
						`)}
					<div class="discord-message-body">
						${X(this.compactMode,()=>k`<discord-author-info
									author=${me.author??""}
									?bot=${me.bot??!1}
									?server=${me.server??!1}
									?official-app=${me.officialApp??!1}
									?verified=${me.verified??!1}
									?op=${me.op??!1}
									role-color=${me.roleColor??""}
									role-icon=${me.roleIcon??""}
									role-name=${me.roleName??""}
									clan-icon=${me.clanIcon??""}
									clan-tag=${me.clanTag??""}
								></discord-author-info>`,()=>null)}<span class="discord-message-markup"><slot></slot></span>
						${X(this.edited,()=>k`<span class="discord-message-edited">(edited)</span>`,()=>null)}
					</div>
					<div class="discord-message-compact-indent">
						<slot name="attachments"></slot>
						<slot name="embeds"></slot>
						<slot name="components"></slot>
						<slot name="reactions"></slot>
						<slot name="thread"></slot>
						${X(this.ephemeral,()=>k`
								<div class="discord-message-ephemeral">
									${an()} Only you can see this •
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
		`}resolveAvatar(te){return te===void 0?Mt.default:Mt[te]??te??Mt.default}},$t=new WeakMap,jt=new WeakMap,de=new WeakMap,Z=new WeakMap,ve=new WeakMap,at=new WeakMap,pt=new WeakMap,_t=new WeakMap,Bt=new WeakMap,Wt=new WeakMap,he=new WeakMap,U=new WeakMap,ze=new WeakMap,ii=new WeakMap,Qt=new WeakMap,tt=new WeakMap,ai=new WeakMap,Ci=new WeakMap,ji=new WeakMap,Hi=new WeakMap,Ei=new WeakMap,Si=new WeakMap,Di=new WeakMap,Oi=new WeakMap,e=De,(()=>{const te=typeof Symbol=="function"&&Symbol.metadata?Object.create(s[Symbol.metadata]??null):void 0;m=[x()],v=[x()],r=[x()],f=[x({type:Boolean})],d=[x({type:Boolean})],$=[x({type:Boolean,attribute:"official-app"})],j=[x({type:Boolean})],re=[x({type:Boolean})],_=[x({type:Boolean})],O=[x({attribute:"role-color"})],ne=[x({attribute:"role-icon"})],E=[x({attribute:"role-name"})],A=[x({attribute:"clan-icon"})],B=[x({attribute:"clan-tag"})],Ve=[x({type:Boolean,reflect:!0})],se=[x({type:Boolean,reflect:!0})],je=[x({type:String,converter:V=>Qi(V,!1,!1),attribute:!0})],N=[x({type:Boolean,attribute:"twenty-four"})],$e=[x({type:Boolean,attribute:"message-body-only"})],Te=[Ae({context:Ne}),x({type:Boolean,reflect:!0,attribute:"light-theme"})],Le=[Ae({context:ti}),x({type:Boolean,reflect:!0,attribute:"compact-mode"})],ot=[Ae({context:Cs}),x({type:Boolean,reflect:!0,attribute:"no-background"})],ct=[x({type:Boolean,reflect:!0,attribute:"has-thread"})],mt=[x({reflect:!1,attribute:"dismiss-message-clicked"})],Fe(De,null,m,{kind:"accessor",name:"profile",static:!1,private:!1,access:{has:V=>"profile"in V,get:V=>V.profile,set:(V,me)=>{V.profile=me}},metadata:te},o,c),Fe(De,null,v,{kind:"accessor",name:"author",static:!1,private:!1,access:{has:V=>"author"in V,get:V=>V.author,set:(V,me)=>{V.author=me}},metadata:te},u,n),Fe(De,null,r,{kind:"accessor",name:"avatar",static:!1,private:!1,access:{has:V=>"avatar"in V,get:V=>V.avatar,set:(V,me)=>{V.avatar=me}},metadata:te},b,p),Fe(De,null,f,{kind:"accessor",name:"bot",static:!1,private:!1,access:{has:V=>"bot"in V,get:V=>V.bot,set:(V,me)=>{V.bot=me}},metadata:te},h,l),Fe(De,null,d,{kind:"accessor",name:"server",static:!1,private:!1,access:{has:V=>"server"in V,get:V=>V.server,set:(V,me)=>{V.server=me}},metadata:te},Q,ae),Fe(De,null,$,{kind:"accessor",name:"officialApp",static:!1,private:!1,access:{has:V=>"officialApp"in V,get:V=>V.officialApp,set:(V,me)=>{V.officialApp=me}},metadata:te},H,L),Fe(De,null,j,{kind:"accessor",name:"verified",static:!1,private:!1,access:{has:V=>"verified"in V,get:V=>V.verified,set:(V,me)=>{V.verified=me}},metadata:te},I,D),Fe(De,null,re,{kind:"accessor",name:"op",static:!1,private:!1,access:{has:V=>"op"in V,get:V=>V.op,set:(V,me)=>{V.op=me}},metadata:te},ge,M),Fe(De,null,_,{kind:"accessor",name:"edited",static:!1,private:!1,access:{has:V=>"edited"in V,get:V=>V.edited,set:(V,me)=>{V.edited=me}},metadata:te},P,ye),Fe(De,null,O,{kind:"accessor",name:"roleColor",static:!1,private:!1,access:{has:V=>"roleColor"in V,get:V=>V.roleColor,set:(V,me)=>{V.roleColor=me}},metadata:te},T,ie),Fe(De,null,ne,{kind:"accessor",name:"roleIcon",static:!1,private:!1,access:{has:V=>"roleIcon"in V,get:V=>V.roleIcon,set:(V,me)=>{V.roleIcon=me}},metadata:te},W,g),Fe(De,null,E,{kind:"accessor",name:"roleName",static:!1,private:!1,access:{has:V=>"roleName"in V,get:V=>V.roleName,set:(V,me)=>{V.roleName=me}},metadata:te},K,Y),Fe(De,null,A,{kind:"accessor",name:"clanIcon",static:!1,private:!1,access:{has:V=>"clanIcon"in V,get:V=>V.clanIcon,set:(V,me)=>{V.clanIcon=me}},metadata:te},R,q),Fe(De,null,B,{kind:"accessor",name:"clanTag",static:!1,private:!1,access:{has:V=>"clanTag"in V,get:V=>V.clanTag,set:(V,me)=>{V.clanTag=me}},metadata:te},F,ue),Fe(De,null,Ve,{kind:"accessor",name:"highlight",static:!1,private:!1,access:{has:V=>"highlight"in V,get:V=>V.highlight,set:(V,me)=>{V.highlight=me}},metadata:te},G,S),Fe(De,null,se,{kind:"accessor",name:"ephemeral",static:!1,private:!1,access:{has:V=>"ephemeral"in V,get:V=>V.ephemeral,set:(V,me)=>{V.ephemeral=me}},metadata:te},Se,He),Fe(De,null,je,{kind:"accessor",name:"timestamp",static:!1,private:!1,access:{has:V=>"timestamp"in V,get:V=>V.timestamp,set:(V,me)=>{V.timestamp=me}},metadata:te},ee,oe),Fe(De,null,N,{kind:"accessor",name:"twentyFour",static:!1,private:!1,access:{has:V=>"twentyFour"in V,get:V=>V.twentyFour,set:(V,me)=>{V.twentyFour=me}},metadata:te},C,ce),Fe(De,null,$e,{kind:"accessor",name:"messageBodyOnly",static:!1,private:!1,access:{has:V=>"messageBodyOnly"in V,get:V=>V.messageBodyOnly,set:(V,me)=>{V.messageBodyOnly=me}},metadata:te},le,J),Fe(De,null,Te,{kind:"accessor",name:"lightTheme",static:!1,private:!1,access:{has:V=>"lightTheme"in V,get:V=>V.lightTheme,set:(V,me)=>{V.lightTheme=me}},metadata:te},et,Ct),Fe(De,null,Le,{kind:"accessor",name:"compactMode",static:!1,private:!1,access:{has:V=>"compactMode"in V,get:V=>V.compactMode,set:(V,me)=>{V.compactMode=me}},metadata:te},st,rt),Fe(De,null,ot,{kind:"accessor",name:"noBackground",static:!1,private:!1,access:{has:V=>"noBackground"in V,get:V=>V.noBackground,set:(V,me)=>{V.noBackground=me}},metadata:te},lt,nt),Fe(De,null,ct,{kind:"accessor",name:"hasThread",static:!1,private:!1,access:{has:V=>"hasThread"in V,get:V=>V.hasThread,set:(V,me)=>{V.hasThread=me}},metadata:te},dt,ht),Fe(De,null,mt,{kind:"accessor",name:"dismissMessageClicked",static:!1,private:!1,access:{has:V=>"dismissMessageClicked"in V,get:V=>V.dismissMessageClicked,set:(V,me)=>{V.dismissMessageClicked=me}},metadata:te},ut,ft),Fe(null,t={value:e},i,{kind:"class",name:e.name,metadata:te},null,a),e=t.value,te&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:te})})(),pe(De,"styles",ke`
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
	`),xe(e,a),e})();const rn=_e`
	<path fill="currentColor" d="M17.3 18.7a1 1 0 0 0 1.4-1.4L13.42 12l5.3-5.3a1 1 0 0 0-1.42-1.4L12 10.58l-5.3-5.3a1 1 0 0 0-1.4 1.42L10.58 12l-5.3 5.3a1 1 0 1 0 1.42 1.4L12 13.42l5.3 5.3Z"></path>
`;function on(i={}){return k`<svg ${be(i)} aria-hidden="false" aria-label="Close" role="img" width="24" height="24" fill="none" viewBox="0 0 24 24">
		${rn}
	</svg>`}const ln=_e`
	<circle cx="12" cy="12" r="10" fill="transparent"></circle>
	<path fill="color-mix(in oklab, hsl(215 calc(1 * 8.8%) 73.3% / 1) 100%, black 0%)" fill-rule="evenodd" d="M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm1.44-15.94L13.06 14a1.06 1.06 0 0 1-2.12 0l-.38-6.94a1 1 0 0 1 1-1.06h.88a1 1 0 0 1 1 1.06Zm-.19 10.69a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z" clip-rule="evenodd"></path>
`;function nn(i={}){return k`<svg ${be(i)} aria-hidden="false" aria-label="Warning" role="img" width="24" height="24" fill="none" viewBox="0 0 24 24">
		${ln}
	</svg>`}var Nt=function(i,t,a,e,s,m){function o(d){if(d!==void 0&&typeof d!="function")throw new TypeError("Function expected");return d}for(var c=e.kind,v=c==="getter"?"get":c==="setter"?"set":"value",u=!t&&i?e.static?i:i.prototype:null,n=t||(u?Object.getOwnPropertyDescriptor(u,e.name):{}),r,b=!1,p=a.length-1;p>=0;p--){var f={};for(var h in e)f[h]=h==="access"?{}:e[h];for(var h in e.access)f.access[h]=e.access[h];f.addInitializer=function(d){if(b)throw new TypeError("Cannot add initializers after decoration has completed");m.push(o(d||null))};var l=(0,a[p])(c==="accessor"?{get:n.get,set:n.set}:n[v],f);if(c==="accessor"){if(l===void 0)continue;if(l===null||typeof l!="object")throw new TypeError("Object expected");(r=o(l.get))&&(n.get=r),(r=o(l.set))&&(n.set=r),(r=o(l.init))&&s.unshift(r)}else(r=o(l))&&(c==="field"?s.unshift(r):n[v]=r)}u&&Object.defineProperty(u,e.name,n),b=!0},Je=function(i,t,a){for(var e=arguments.length>2,s=0;s<t.length;s++)a=e?t[s].call(i,a):t[s].call(i);return e?a:void 0};let cn=(()=>{var O,T,ie,ne,W,g,E,K,Y,A;let i=[Ce("discord-modal")],t,a=[],e,s=we,m,o=[],c=[],v,u=[],n=[],r,b=[],p=[],f,h=[],l=[],d,Q=[],ae=[],$,H=[],L=[],j,I=[],D=[],re,ge=[],M=[],_,P=[],ye=[];return O=class extends s{constructor(){super(...arguments);z(this,T,Je(this,o,void 0));z(this,ie,(Je(this,c),Je(this,u,"User")));z(this,ne,(Je(this,n),Je(this,b,void 0)));z(this,W,(Je(this,p),Je(this,h,void 0)));z(this,g,(Je(this,l),Je(this,Q,void 0)));z(this,E,(Je(this,ae),Je(this,H,void 0)));z(this,K,(Je(this,L),Je(this,I,void 0)));z(this,Y,(Je(this,D),Je(this,ge,!1)));z(this,A,(Je(this,M),Je(this,P,void 0)));pe(this,"dialogRef",(Je(this,ye),ki()))}get profile(){return y(this,T)}set profile(B){w(this,T,B)}get author(){return y(this,ie)}set author(B){w(this,ie,B)}get avatar(){return y(this,ne)}set avatar(B){w(this,ne,B)}get modalId(){return y(this,W)}set modalId(B){w(this,W,B)}get modalTitle(){return y(this,g)}set modalTitle(B){w(this,g,B)}get submitForm(){return y(this,E)}set submitForm(B){w(this,E,B)}get closeForm(){return y(this,K)}set closeForm(B){w(this,K,B)}get lightTheme(){return y(this,Y)}set lightTheme(B){w(this,Y,B)}get originalBodyOverflow(){return y(this,A)}set originalBodyOverflow(B){w(this,A,B)}handleClickCloseIcon(){this.dialogRef.value&&this.dialogRef.value.close()}handleFormSubmit(B){var ue,Ve,G,S,se;B.preventDefault(),B.stopPropagation();const F=((Ve=(ue=this.shadowRoot)==null?void 0:ue.querySelector("slot"))==null?void 0:Ve.assignedElements())??[];for(const Se of F)if(Se instanceof $a){const He=Se.shadowRoot,je=(He==null?void 0:He.querySelector("input"))??(He==null?void 0:He.querySelector("textarea"));if(je!=null&&je.attributes.getNamedItem("required")&&!je.value){const ee=He==null?void 0:He.querySelector("div.discord-text-input-message-needed-input");ee instanceof HTMLDivElement&&!ee.style.display&&(ee.style.display="flex",globalThis.setTimeout(()=>{ee.style.opacity="1"},1));return}if(je instanceof HTMLTextAreaElement&&je.value.length<Number((G=je.attributes.getNamedItem("minlength"))==null?void 0:G.value)&&je.value.length>0||je instanceof HTMLTextAreaElement&&je.value.length<Number((S=je.attributes.getNamedItem("minlength"))==null?void 0:S.value)&&(je!=null&&je.attributes.getNamedItem("required"))){const ee=He==null?void 0:He.querySelector("div.discord-text-input-message-needed-min-length");ee instanceof HTMLDivElement&&!ee.style.display&&(ee.style.display="flex",Se.hasWarning=!0,globalThis.setTimeout(()=>{ee.style.opacity="1"},1));return}}(se=this.submitForm)==null||se.call(this),this.handleClickCloseIcon()}onCloseDialog(){var ue,Ve,G,S;globalThis.document.body.style.overflow=this.originalBodyOverflow??"scroll";const B=(ue=this.shadowRoot)==null?void 0:ue.querySelector("div.discord-modal-box");B instanceof HTMLDivElement&&(B.style.display="none");const F=((G=(Ve=this.shadowRoot)==null?void 0:Ve.querySelector("slot"))==null?void 0:G.assignedElements())??[];for(const se of F)if(se instanceof $a){se.resetState();const Se=se.shadowRoot,He=Se==null?void 0:Se.querySelector("div.discord-text-input-message-needed-input"),je=Se==null?void 0:Se.querySelector("div.discord-text-input-message-needed-min-length");He instanceof HTMLDivElement&&He.style.display&&(He.style.display="",He.style.opacity="0"),je instanceof HTMLDivElement&&je.style.display&&(je.style.display="",je.style.opacity="0")}(S=this.closeForm)==null||S.call(this)}render(){const B={author:this.author},F=this.profile!==void 0&&Reflect.get($i,this.profile)||{},ue={...B,...F,avatar:this.resolveAvatar(F.avatar??this.avatar)};return k`
			<dialog
				${Pt(this.dialogRef)}
				id="${fe(this.modalId)}"
				class=${Be({"discord-modal":!0,"discord-modal-light-theme":this.lightTheme})}
				@close=${this.onCloseDialog}
			>
				<div class="discord-modal-box">
					<form @submit=${this.handleFormSubmit}>
						<div aria-labelledby="discord-modal-title" role="dialog" tabindex="-1" aria-modal="true">
							<div class=${Be({"discord-modal-root":!0,"discord-modal-root-light-theme":this.lightTheme})}>
								<div class="discord-modal-header-container">
									<div class="discord-modal-avatar">
										<img src="${fe(ue.avatar)}" alt="${fe(ue.author)}" />
									</div>
									<div
										id="discord-modal-title"
										class=${Be({"discord-modal-title":!0,"discord-modal-title-light-theme":this.lightTheme})}
									>
										${this.modalTitle}
									</div>
									<button
										aria-label="Close"
										@click=${this.handleClickCloseIcon}
										type="button"
										class=${Be({"discord-modal-close-button":!0,"discord-modal-close-button-light-theme":this.lightTheme})}
									>
										<div class="discord-modal-close-button-content">${on()}</div>
									</button>
								</div>
								<div
									class=${Be({"discord-modal-content-container":!0,"discord-modal-content-container-light-theme":this.lightTheme})}
								>
									<div class="discord-modal-warning-container">
										<div class="discord-modal-warning-icon">
											${nn({class:"discord-modal-warning-icon-svg"+(this.lightTheme?" discord-modal-warning-icon-svg-light-theme":"")})}
										</div>
										<div
											class=${Be({"discord-modal-warning":!0,"discord-modal-warning-light-theme":this.lightTheme})}
										>
											This form will be submitted to <strong class="discord-modal-warning-author">${ue.author}</strong>. Do
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
									class=${Be({"discord-modal-actions-container":!0,"discord-modal-actions-container-light-theme":this.lightTheme})}
								>
									<button type="submit" class="discord-modal-button discord-modal-button-submit">
										<div class="discord-modal-button-content">Submit</div>
									</button>
									<button
										type="button"
										class=${Be({"discord-modal-button":!0,"discord-modal-button-cancel":!0,"discord-modal-button-cancel-light-theme":this.lightTheme})}
										@click=${this.handleClickCloseIcon}
									>
										<div
											class=${Be({"discord-modal-button-content":!0,"discord-modal-button-content-light-theme":this.lightTheme})}
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
		`}resolveAvatar(B){return B===void 0?Mt.default:Mt[B]??B??Mt.default}},T=new WeakMap,ie=new WeakMap,ne=new WeakMap,W=new WeakMap,g=new WeakMap,E=new WeakMap,K=new WeakMap,Y=new WeakMap,A=new WeakMap,e=O,(()=>{const B=typeof Symbol=="function"&&Symbol.metadata?Object.create(s[Symbol.metadata]??null):void 0;m=[x()],v=[x()],r=[x()],f=[x({reflect:!0,attribute:"modal-id"})],d=[x({reflect:!0,attribute:"modal-title"})],$=[x({reflect:!1,noAccessor:!0,attribute:!1})],j=[x({reflect:!1,noAccessor:!0,attribute:!1})],re=[Ae({context:Ne,subscribe:!0}),x({type:Boolean,reflect:!0,attribute:"light-theme"})],_=[gt()],Nt(O,null,m,{kind:"accessor",name:"profile",static:!1,private:!1,access:{has:F=>"profile"in F,get:F=>F.profile,set:(F,ue)=>{F.profile=ue}},metadata:B},o,c),Nt(O,null,v,{kind:"accessor",name:"author",static:!1,private:!1,access:{has:F=>"author"in F,get:F=>F.author,set:(F,ue)=>{F.author=ue}},metadata:B},u,n),Nt(O,null,r,{kind:"accessor",name:"avatar",static:!1,private:!1,access:{has:F=>"avatar"in F,get:F=>F.avatar,set:(F,ue)=>{F.avatar=ue}},metadata:B},b,p),Nt(O,null,f,{kind:"accessor",name:"modalId",static:!1,private:!1,access:{has:F=>"modalId"in F,get:F=>F.modalId,set:(F,ue)=>{F.modalId=ue}},metadata:B},h,l),Nt(O,null,d,{kind:"accessor",name:"modalTitle",static:!1,private:!1,access:{has:F=>"modalTitle"in F,get:F=>F.modalTitle,set:(F,ue)=>{F.modalTitle=ue}},metadata:B},Q,ae),Nt(O,null,$,{kind:"accessor",name:"submitForm",static:!1,private:!1,access:{has:F=>"submitForm"in F,get:F=>F.submitForm,set:(F,ue)=>{F.submitForm=ue}},metadata:B},H,L),Nt(O,null,j,{kind:"accessor",name:"closeForm",static:!1,private:!1,access:{has:F=>"closeForm"in F,get:F=>F.closeForm,set:(F,ue)=>{F.closeForm=ue}},metadata:B},I,D),Nt(O,null,re,{kind:"accessor",name:"lightTheme",static:!1,private:!1,access:{has:F=>"lightTheme"in F,get:F=>F.lightTheme,set:(F,ue)=>{F.lightTheme=ue}},metadata:B},ge,M),Nt(O,null,_,{kind:"accessor",name:"originalBodyOverflow",static:!1,private:!1,access:{has:F=>"originalBodyOverflow"in F,get:F=>F.originalBodyOverflow,set:(F,ue)=>{F.originalBodyOverflow=ue}},metadata:B},P,ye),Nt(null,t={value:e},i,{kind:"class",name:e.name,metadata:B},null,a),e=t.value,B&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:B})})(),pe(O,"styles",ke`
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
	`),Je(e,a),e})();var ba=function(i,t,a,e,s,m){function o(d){if(d!==void 0&&typeof d!="function")throw new TypeError("Function expected");return d}for(var c=e.kind,v=c==="getter"?"get":c==="setter"?"set":"value",u=!t&&i?e.static?i:i.prototype:null,n=t||(u?Object.getOwnPropertyDescriptor(u,e.name):{}),r,b=!1,p=a.length-1;p>=0;p--){var f={};for(var h in e)f[h]=h==="access"?{}:e[h];for(var h in e.access)f.access[h]=e.access[h];f.addInitializer=function(d){if(b)throw new TypeError("Cannot add initializers after decoration has completed");m.push(o(d||null))};var l=(0,a[p])(c==="accessor"?{get:n.get,set:n.set}:n[v],f);if(c==="accessor"){if(l===void 0)continue;if(l===null||typeof l!="object")throw new TypeError("Object expected");(r=o(l.get))&&(n.get=r),(r=o(l.set))&&(n.set=r),(r=o(l.init))&&s.unshift(r)}else(r=o(l))&&(c==="field"?s.unshift(r):n[v]=r)}u&&Object.defineProperty(u,e.name,n),b=!0},Pi=function(i,t,a){for(var e=arguments.length>2,s=0;s<t.length;s++)a=e?t[s].call(i,a):t[s].call(i);return e?a:void 0};let dn=(()=>{var r,b,p;let i=[Ce("discord-ordered-list")],t,a=[],e,s=we,m,o=[],c=[],v,u=[],n=[];return r=class extends s{constructor(){super(...arguments);z(this,b,Pi(this,o,1));z(this,p,(Pi(this,c),Pi(this,u,1)));Pi(this,n)}get start(){return y(this,b)}set start(l){w(this,b,l)}get startLength(){return y(this,p)}set startLength(l){w(this,p,l)}checkChildren(){if(!Array.from(this.children).every(d=>{const Q=d.tagName.toLowerCase();return Q==="discord-list-item"||Q==="discord-unordered-list"||Q==="discord-ordered-list"}))throw new Yt("All direct children inside of a <discord-ordered-list> components must be one of <discord-unordered-list>, <discord-ordered-list>, or <discord-list-item>.")}willUpdate(){const l=Array.from(this.children).filter(Q=>Q.tagName.toLowerCase()==="discord-list-item").length,d=this.start+l;this.startLength=d.toString().length}render(){return this.checkChildren(),k`<ol start=${this.start} style="--totalCharacters:${this.startLength}">
			<slot></slot>
		</ol>`}},b=new WeakMap,p=new WeakMap,e=r,(()=>{const l=typeof Symbol=="function"&&Symbol.metadata?Object.create(s[Symbol.metadata]??null):void 0;m=[x({type:Number,reflect:!0})],v=[gt()],ba(r,null,m,{kind:"accessor",name:"start",static:!1,private:!1,access:{has:d=>"start"in d,get:d=>d.start,set:(d,Q)=>{d.start=Q}},metadata:l},o,c),ba(r,null,v,{kind:"accessor",name:"startLength",static:!1,private:!1,access:{has:d=>"startLength"in d,get:d=>d.startLength,set:(d,Q)=>{d.startLength=Q}},metadata:l},u,n),ba(null,t={value:e},i,{kind:"class",name:e.name,metadata:l},null,a),e=t.value,l&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:l})})(),pe(r,"styles",ke`
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
	`),Pi(e,a),e})();var Zt=function(i,t,a,e,s,m){function o(d){if(d!==void 0&&typeof d!="function")throw new TypeError("Function expected");return d}for(var c=e.kind,v=c==="getter"?"get":c==="setter"?"set":"value",u=!t&&i?e.static?i:i.prototype:null,n=t||(u?Object.getOwnPropertyDescriptor(u,e.name):{}),r,b=!1,p=a.length-1;p>=0;p--){var f={};for(var h in e)f[h]=h==="access"?{}:e[h];for(var h in e.access)f.access[h]=e.access[h];f.addInitializer=function(d){if(b)throw new TypeError("Cannot add initializers after decoration has completed");m.push(o(d||null))};var l=(0,a[p])(c==="accessor"?{get:n.get,set:n.set}:n[v],f);if(c==="accessor"){if(l===void 0)continue;if(l===null||typeof l!="object")throw new TypeError("Object expected");(r=o(l.get))&&(n.get=r),(r=o(l.set))&&(n.set=r),(r=o(l.init))&&s.unshift(r)}else(r=o(l))&&(c==="field"?s.unshift(r):n[v]=r)}u&&Object.defineProperty(u,e.name,n),b=!0},Xe=function(i,t,a){for(var e=arguments.length>2,s=0;s<t.length;s++)a=e?t[s].call(i,a):t[s].call(i);return e?a:void 0};const Ps="multiple-answers",Bs="ended",Rs="voted",Us="show-votes";let hn=(()=>{var _,P,ye,O,T,ie,ne,W,g,E,K;let i=[Ce("discord-poll")],t,a=[],e,s=we,m,o=[],c=[],v,u=[],n=[],r,b=[],p=[],f,h=[],l=[],d,Q=[],ae=[],$,H=[],L=[],j,I=[],D=[],re,ge=[],M=[];return _=class extends s{constructor(){super(...arguments);z(this,P,Xe(this,o,void 0));z(this,ye,(Xe(this,c),Xe(this,u,"24h")));z(this,O,(Xe(this,n),Xe(this,b,!1)));z(this,T,(Xe(this,p),Xe(this,h,!1)));z(this,ie,(Xe(this,l),Xe(this,Q,!1)));z(this,ne,(Xe(this,ae),Xe(this,H,!1)));z(this,W,(Xe(this,L),Xe(this,I,!1)));z(this,g,(Xe(this,D),Xe(this,ge,!1)));z(this,E,(Xe(this,M),!1));z(this,K,0)}get question(){return y(this,P)}set question(R){w(this,P,R)}get timeEnd(){return y(this,ye)}set timeEnd(R){w(this,ye,R)}get pollEnded(){return y(this,O)}set pollEnded(R){w(this,O,R)}get multipleAnswers(){return y(this,T)}set multipleAnswers(R){w(this,T,R)}get pollVoted(){return y(this,ie)}set pollVoted(R){w(this,ie,R)}get showResults(){return y(this,ne)}set showResults(R){w(this,ne,R)}get compactMode(){return y(this,W)}set compactMode(R){w(this,W,R)}get lightTheme(){return y(this,g)}set lightTheme(R){w(this,g,R)}get selected(){return y(this,E)}set selected(R){w(this,E,R)}get totVotes(){return y(this,K)}set totVotes(R){w(this,K,R)}connectedCallback(){var q,B,F;super.connectedCallback();const R=(q=this.parentElement)==null?void 0:q.querySelectorAll("discord-poll-answer");if(R)for(let ue=0;ue<(R==null?void 0:R.length);ue++)R[ue].attributes.getNamedItem("selected")&&(this.selected=!0),this.totVotes+=(B=R[ue].attributes.getNamedItem("votes"))!=null&&B.nodeValue?Number((F=R[ue].attributes.getNamedItem("votes"))==null?void 0:F.nodeValue):0}render(){const R=this.multipleAnswers?"Select one or more answers":"Select one answer";return k`<div>
			<h4 class="discord-poll-question">${this.question}</h4>
			<div class="discord-poll-select">${R}</div>
			<div class="discord-poll-answers">
				<slot></slot>
			</div>
			<div class="discord-poll-footer">
				<div class="discord-poll-footer-votes-time">
					<span class="discord-poll-footer-hover">${this.totVotes} votes</span>
					<div class="discord-poll-footer-time">${this.pollEnded?"Poll closed":`${this.timeEnd} left`}</div>
				</div>
				${X(!this.pollEnded&&!this.pollVoted&&!this.showResults,()=>k`<div class="discord-poll-result-vote">
							<div class="discord-poll-footer-hover discord-poll-color-show-results">Show results</div>
							<button
								type="button"
								class="${Be({"discord-poll-button-vote":!0,"discord-poll-button-vote-disabled":!this.selected})}"
							>
								<div>Vote</div>
							</button>
						</div>`)}
				${X(!this.pollEnded&&this.pollVoted||this.showResults,()=>k`
						<button type="button" class="discord-poll-button-remove-vote">
							<div>${!this.pollEnded&&this.pollVoted?"Remove vote":"Go back to vote"}</div>
						</button>
					`)}
			</div>
		</div> `}},P=new WeakMap,ye=new WeakMap,O=new WeakMap,T=new WeakMap,ie=new WeakMap,ne=new WeakMap,W=new WeakMap,g=new WeakMap,E=new WeakMap,K=new WeakMap,e=_,(()=>{const R=typeof Symbol=="function"&&Symbol.metadata?Object.create(s[Symbol.metadata]??null):void 0;m=[x({type:String,attribute:"question",reflect:!0})],v=[x({type:String,attribute:"time-end",reflect:!0})],r=[ui({context:Bs}),x({type:Boolean,attribute:"ended",reflect:!0})],f=[ui({context:Ps}),x({type:Boolean,reflect:!0,attribute:"multiple-answers"})],d=[ui({context:Rs}),x({type:Boolean,reflect:!0,attribute:"voted"})],$=[ui({context:Us}),x({type:Boolean,reflect:!0,attribute:"show-results"})],j=[Ae({context:ti}),x({type:Boolean,reflect:!0,attribute:"compact-mode"})],re=[Ae({context:Ne}),x({type:Boolean,reflect:!0,attribute:"light-theme"})],Zt(_,null,m,{kind:"accessor",name:"question",static:!1,private:!1,access:{has:q=>"question"in q,get:q=>q.question,set:(q,B)=>{q.question=B}},metadata:R},o,c),Zt(_,null,v,{kind:"accessor",name:"timeEnd",static:!1,private:!1,access:{has:q=>"timeEnd"in q,get:q=>q.timeEnd,set:(q,B)=>{q.timeEnd=B}},metadata:R},u,n),Zt(_,null,r,{kind:"accessor",name:"pollEnded",static:!1,private:!1,access:{has:q=>"pollEnded"in q,get:q=>q.pollEnded,set:(q,B)=>{q.pollEnded=B}},metadata:R},b,p),Zt(_,null,f,{kind:"accessor",name:"multipleAnswers",static:!1,private:!1,access:{has:q=>"multipleAnswers"in q,get:q=>q.multipleAnswers,set:(q,B)=>{q.multipleAnswers=B}},metadata:R},h,l),Zt(_,null,d,{kind:"accessor",name:"pollVoted",static:!1,private:!1,access:{has:q=>"pollVoted"in q,get:q=>q.pollVoted,set:(q,B)=>{q.pollVoted=B}},metadata:R},Q,ae),Zt(_,null,$,{kind:"accessor",name:"showResults",static:!1,private:!1,access:{has:q=>"showResults"in q,get:q=>q.showResults,set:(q,B)=>{q.showResults=B}},metadata:R},H,L),Zt(_,null,j,{kind:"accessor",name:"compactMode",static:!1,private:!1,access:{has:q=>"compactMode"in q,get:q=>q.compactMode,set:(q,B)=>{q.compactMode=B}},metadata:R},I,D),Zt(_,null,re,{kind:"accessor",name:"lightTheme",static:!1,private:!1,access:{has:q=>"lightTheme"in q,get:q=>q.lightTheme,set:(q,B)=>{q.lightTheme=B}},metadata:R},ge,M),Zt(null,t={value:e},i,{kind:"class",name:e.name,metadata:R},null,a),e=t.value,R&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:R})})(),pe(_,"styles",ke`
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
	`),Xe(e,a),e})();var Ze=function(i,t,a){for(var e=arguments.length>2,s=0;s<t.length;s++)a=e?t[s].call(i,a):t[s].call(i);return e?a:void 0},Tt=function(i,t,a,e,s,m){function o(d){if(d!==void 0&&typeof d!="function")throw new TypeError("Function expected");return d}for(var c=e.kind,v=c==="getter"?"get":c==="setter"?"set":"value",u=!t&&i?e.static?i:i.prototype:null,n=t||(u?Object.getOwnPropertyDescriptor(u,e.name):{}),r,b=!1,p=a.length-1;p>=0;p--){var f={};for(var h in e)f[h]=h==="access"?{}:e[h];for(var h in e.access)f.access[h]=e.access[h];f.addInitializer=function(d){if(b)throw new TypeError("Cannot add initializers after decoration has completed");m.push(o(d||null))};var l=(0,a[p])(c==="accessor"?{get:n.get,set:n.set}:n[v],f);if(c==="accessor"){if(l===void 0)continue;if(l===null||typeof l!="object")throw new TypeError("Object expected");(r=o(l.get))&&(n.get=r),(r=o(l.set))&&(n.set=r),(r=o(l.init))&&s.unshift(r)}else(r=o(l))&&(c==="field"?s.unshift(r):n[v]=r)}u&&Object.defineProperty(u,e.name,n),b=!0};let mn=(()=>{var g,E,K,Y,A,R,q,B,F,ue,Ve,G,S,se,Se;let i=[Ce("discord-poll-answer")],t,a=[],e,s=we,m=[],o,c=[],v=[],u,n=[],r=[],b,p=[],f=[],h,l=[],d=[],Q,ae=[],$=[],H,L=[],j=[],I,D=[],re=[],ge,M=[],_=[],P,ye=[],O=[],T,ie=[],ne=[],W;return g=class extends s{constructor(){super(...arguments);z(this,E,(Ze(this,m),Ze(this,c,void 0)));z(this,K,(Ze(this,v),Ze(this,n,void 0)));z(this,Y,(Ze(this,r),Ze(this,p,0)));z(this,A,(Ze(this,f),Ze(this,l,!1)));z(this,R,(Ze(this,d),Ze(this,ae,!1)));z(this,q,(Ze(this,$),Ze(this,L,!1)));z(this,B,(Ze(this,j),Ze(this,D,!1)));z(this,F,(Ze(this,re),Ze(this,M,!1)));z(this,ue,(Ze(this,_),Ze(this,ye,!1)));z(this,Ve,(Ze(this,O),Ze(this,ie,!1)));z(this,G,(Ze(this,ne),0));z(this,S);z(this,se,[]);z(this,Se,[])}get emoji(){return y(this,E)}set emoji(ee){w(this,E,ee)}get answer(){return y(this,K)}set answer(ee){w(this,K,ee)}get votes(){return y(this,Y)}set votes(ee){w(this,Y,ee)}get selected(){return y(this,A)}set selected(ee){w(this,A,ee)}get compactMode(){return y(this,R)}set compactMode(ee){w(this,R,ee)}get multipleAnswers(){return y(this,q)}set multipleAnswers(ee){w(this,q,ee)}get pollEnded(){return y(this,B)}set pollEnded(ee){w(this,B,ee)}get pollVoted(){return y(this,F)}set pollVoted(ee){w(this,F,ee)}get showResult(){return y(this,ue)}set showResult(ee){w(this,ue,ee)}get lightTheme(){return y(this,Ve)}set lightTheme(ee){w(this,Ve,ee)}get totalVotesPoll(){return y(this,G)}set totalVotesPoll(ee){w(this,G,ee)}get percentageVoted(){return y(this,S)}set percentageVoted(ee){w(this,S,ee)}get arrayAnswers(){return y(this,se)}set arrayAnswers(ee){w(this,se,ee)}get winners(){return y(this,Se)}set winners(ee){w(this,Se,ee)}connectedCallback(){var oe,N,C,ce,$e;super.connectedCallback();const ee=(oe=this.parentElement)==null?void 0:oe.getElementsByTagName("discord-poll-answer");if(ee)for(let le=0;le<(ee==null?void 0:ee.length);le++){const J=ee[le].attributes.getNamedItem("votes")?Number((N=ee[le].attributes.getNamedItem("votes"))==null?void 0:N.nodeValue):0;this.arrayAnswers.push({answer:(C=ee[le].attributes.getNamedItem("answer"))==null?void 0:C.nodeValue,value:J}),this.arrayAnswers=this.arrayAnswers.toSorted((Te,et)=>et.value-Te.value),this.totalVotesPoll+=J}for(let le=0;le<((ce=this.arrayAnswers)==null?void 0:ce.length);le++)if(this.winners.includes(this.arrayAnswers[le].answer)||this.winners.push(this.arrayAnswers[le].answer),this.arrayAnswers[le+1])if(this.arrayAnswers[le].value===this.arrayAnswers[le+1].value)this.winners.includes(this.arrayAnswers[le+1].answer)||this.winners.push(this.arrayAnswers[le+1].answer);else break;if((($e=this.parentElement)==null?void 0:$e.getAttribute("multiple-answers"))!==""){let le=0;if(ee)for(const J of ee)J.selected&&le++;if(le>1)throw new Yt("<discord-poll> single vote was selected more than 1 answer")}this.percentageVoted=this.votes/this.totalVotesPoll*100}render(){return this.percentageVoted=this.percentageVoted.toPrecision(3).split(".")[1]==="0"?Number(this.percentageVoted.toPrecision(3).split(".")[0]):Number(this.percentageVoted.toPrecision(3)),k`
			<label>
				<div class="${Be({"discord-answer-container":!this.pollVoted&&!this.pollEnded&&!this.showResult})}">
					<div
						class="${Be({"discord-answer":!0,"discord-answer-selected":this.selected&&!this.pollEnded&&!this.showResult,"discord-answer-selected-ended":this.pollEnded&&this.winners.includes(this.answer)})}"
					>
						<div
							class=${Be({"discord-answer-backdround-color":!0,"discord-background-color-selected":!this.pollEnded&&this.selected&&this.pollVoted,"discord-background-color-winner":this.pollEnded&&this.winners.includes(this.answer),"discord-background-color-default":this.pollEnded&&!this.winners.includes(this.answer)||!this.pollEnded&&!this.selected&&this.pollVoted||this.showResult})}
							style="width:${this.percentageVoted}%;"
						></div>
						<div class="discord-answer-flex">
							${X(this.emoji,()=>k`<img class="discord-answer-emoji" src="${this.emoji}" alt="emoji" />`)}
							<div class="discord-awnswer-title">${this.answer}</div>
						</div>
						<div class="discord-answer-flex">
							${X(this.pollVoted||this.pollEnded||this.showResult,()=>k`<h5 class="discord-answer-no-margin discord-quantity-votes">
										${this.votes} ${this.votes>1||this.votes===0?"votes":"vote"}
									</h5>`)}
							${X(this.pollVoted||this.pollEnded||this.showResult,()=>k`<h4 class="discord-answer-no-margin discord-percentage-votes">${this.percentageVoted}%</h4>`)}
							${X(this.selected&&!this.showResult,()=>X(this.multipleAnswers,()=>X(this.pollEnded,()=>X(this.winners.includes(this.answer),()=>k`<div class="discord-checkbox-div-answer-selected-ended-winner">
																${kt({style:"width:24px;height:24px;"})}
															</div>`,()=>k`<div class="discord-checkbox-div-answer-selected-ended-no-winner">
																${kt({style:"width:24px;height:24px;"})}
															</div>`),()=>X(!this.pollVoted,()=>k`<div class="discord-checkbox-div-multiple-answer-selected">
																${kt({style:"width:24px;height:24px;"})}
															</div>`,()=>k`<div class="discord-checkbox-div-answer-selected-voted">
																${kt({style:"width:24px;height:24px;"})}
															</div>`)),()=>X(this.pollEnded,()=>k`<div class="discord-checkbox-div-answer-selected-ended-winner">
														${kt({style:"width:24px;height:24px;"})}
													</div>`,()=>X(!this.pollVoted,()=>k`
															<div class="discord-checkbox-div-answer">
																<div class="discord-checkbox-div-answer-selected"></div>
															</div>
														`,()=>k`<div class="discord-checkbox-div-answer-selected-voted">
																${kt({style:"width:24px;height:24px;"})}
															</div>`))),()=>X(!this.pollEnded&&!this.pollVoted&&!this.showResult,()=>k`<div
												class="${Be({"discord-checkbox-div-multiple-answer":this.multipleAnswers,"discord-checkbox-div-answer":!this.multipleAnswers})}"
											></div>`))}
						</div>
					</div>
					<span class="discord-answer-hidden"><input type="checkbox" @click=${()=>this._onClick()} /></span>
				</div>
			</label>
		`}_onClick(){var C;if(this.pollEnded||this.pollVoted)return;const ee=this.parentElement,oe=(C=ee==null?void 0:ee.shadowRoot)==null?void 0:C.querySelector("button.discord-poll-button-vote"),N=ee==null?void 0:ee.getElementsByTagName("discord-poll-answer");if(this.selected){if(this.selected=!1,oe){if((ee==null?void 0:ee.getAttribute("multiple-answers"))===""){let ce=0;if(N)for(const $e of N)$e.selected&&ce++;if(ce>0){oe.className="discord-poll-button-vote";return}}oe.className="discord-poll-button-vote discord-poll-button-vote-disabled"}return}if((ee==null?void 0:ee.getAttribute("multiple-answers"))!==""&&N)for(const ce of N)ce.selected=!1;oe&&(oe.className="discord-poll-button-vote"),this.selected=!0}},E=new WeakMap,K=new WeakMap,Y=new WeakMap,A=new WeakMap,R=new WeakMap,q=new WeakMap,B=new WeakMap,F=new WeakMap,ue=new WeakMap,Ve=new WeakMap,G=new WeakMap,S=new WeakMap,se=new WeakMap,Se=new WeakMap,e=g,(()=>{const ee=typeof Symbol=="function"&&Symbol.metadata?Object.create(s[Symbol.metadata]??null):void 0;o=[x({type:String,attribute:"emoji",reflect:!0})],u=[x({type:String,attribute:"answer",reflect:!0})],b=[x({type:Number,attribute:"votes",reflect:!0})],h=[x({type:Boolean,attribute:"selected",reflect:!0})],Q=[Ae({context:ti})],H=[Ae({context:Ps})],I=[Ae({context:Bs})],ge=[Ae({context:Rs})],P=[Ae({context:Us})],T=[Ae({context:Ne}),x({type:Boolean,reflect:!0,attribute:"light-theme"})],W=[ps({once:!1,capture:!0,passive:!0})],Tt(g,null,o,{kind:"accessor",name:"emoji",static:!1,private:!1,access:{has:oe=>"emoji"in oe,get:oe=>oe.emoji,set:(oe,N)=>{oe.emoji=N}},metadata:ee},c,v),Tt(g,null,u,{kind:"accessor",name:"answer",static:!1,private:!1,access:{has:oe=>"answer"in oe,get:oe=>oe.answer,set:(oe,N)=>{oe.answer=N}},metadata:ee},n,r),Tt(g,null,b,{kind:"accessor",name:"votes",static:!1,private:!1,access:{has:oe=>"votes"in oe,get:oe=>oe.votes,set:(oe,N)=>{oe.votes=N}},metadata:ee},p,f),Tt(g,null,h,{kind:"accessor",name:"selected",static:!1,private:!1,access:{has:oe=>"selected"in oe,get:oe=>oe.selected,set:(oe,N)=>{oe.selected=N}},metadata:ee},l,d),Tt(g,null,Q,{kind:"accessor",name:"compactMode",static:!1,private:!1,access:{has:oe=>"compactMode"in oe,get:oe=>oe.compactMode,set:(oe,N)=>{oe.compactMode=N}},metadata:ee},ae,$),Tt(g,null,H,{kind:"accessor",name:"multipleAnswers",static:!1,private:!1,access:{has:oe=>"multipleAnswers"in oe,get:oe=>oe.multipleAnswers,set:(oe,N)=>{oe.multipleAnswers=N}},metadata:ee},L,j),Tt(g,null,I,{kind:"accessor",name:"pollEnded",static:!1,private:!1,access:{has:oe=>"pollEnded"in oe,get:oe=>oe.pollEnded,set:(oe,N)=>{oe.pollEnded=N}},metadata:ee},D,re),Tt(g,null,ge,{kind:"accessor",name:"pollVoted",static:!1,private:!1,access:{has:oe=>"pollVoted"in oe,get:oe=>oe.pollVoted,set:(oe,N)=>{oe.pollVoted=N}},metadata:ee},M,_),Tt(g,null,P,{kind:"accessor",name:"showResult",static:!1,private:!1,access:{has:oe=>"showResult"in oe,get:oe=>oe.showResult,set:(oe,N)=>{oe.showResult=N}},metadata:ee},ye,O),Tt(g,null,T,{kind:"accessor",name:"lightTheme",static:!1,private:!1,access:{has:oe=>"lightTheme"in oe,get:oe=>oe.lightTheme,set:(oe,N)=>{oe.lightTheme=N}},metadata:ee},ie,ne),Tt(g,null,W,{kind:"method",name:"_onClick",static:!1,private:!1,access:{has:oe=>"_onClick"in oe,get:oe=>oe._onClick},metadata:ee},null,m),Tt(null,t={value:e},i,{kind:"class",name:e.name,metadata:ee},null,a),e=t.value,ee&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:ee})})(),pe(g,"styles",ke`
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
	`),Ze(e,a),e})();var es=function(i,t,a,e,s,m){function o(d){if(d!==void 0&&typeof d!="function")throw new TypeError("Function expected");return d}for(var c=e.kind,v=c==="getter"?"get":c==="setter"?"set":"value",u=!t&&i?e.static?i:i.prototype:null,n=t||(u?Object.getOwnPropertyDescriptor(u,e.name):{}),r,b=!1,p=a.length-1;p>=0;p--){var f={};for(var h in e)f[h]=h==="access"?{}:e[h];for(var h in e.access)f.access[h]=e.access[h];f.addInitializer=function(d){if(b)throw new TypeError("Cannot add initializers after decoration has completed");m.push(o(d||null))};var l=(0,a[p])(c==="accessor"?{get:n.get,set:n.set}:n[v],f);if(c==="accessor"){if(l===void 0)continue;if(l===null||typeof l!="object")throw new TypeError("Object expected");(r=o(l.get))&&(n.get=r),(r=o(l.set))&&(n.set=r),(r=o(l.init))&&s.unshift(r)}else(r=o(l))&&(c==="field"?s.unshift(r):n[v]=r)}u&&Object.defineProperty(u,e.name,n),b=!0},ya=function(i,t,a){for(var e=arguments.length>2,s=0;s<t.length;s++)a=e?t[s].call(i,a):t[s].call(i);return e?a:void 0};let un=(()=>{var v,u;let i=[Ce("discord-pre")],t,a=[],e,s=we,m,o=[],c=[];return v=class extends s{constructor(){super(...arguments);z(this,u,ya(this,o,!1));ya(this,c)}get embed(){return y(this,u)}set embed(b){w(this,u,b)}render(){return k`<pre><slot></slot
		></pre>`}},u=new WeakMap,e=v,(()=>{const b=typeof Symbol=="function"&&Symbol.metadata?Object.create(s[Symbol.metadata]??null):void 0;m=[x({type:Boolean,reflect:!0})],es(v,null,m,{kind:"accessor",name:"embed",static:!1,private:!1,access:{has:p=>"embed"in p,get:p=>p.embed,set:(p,f)=>{p.embed=f}},metadata:b},o,c),es(null,t={value:e},i,{kind:"class",name:e.name,metadata:b},null,a),e=t.value,b&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:b})})(),pe(v,"styles",ke`
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
	`),ya(e,a),e})();var ts=function(i,t,a,e,s,m){function o(d){if(d!==void 0&&typeof d!="function")throw new TypeError("Function expected");return d}for(var c=e.kind,v=c==="getter"?"get":c==="setter"?"set":"value",u=!t&&i?e.static?i:i.prototype:null,n=t||(u?Object.getOwnPropertyDescriptor(u,e.name):{}),r,b=!1,p=a.length-1;p>=0;p--){var f={};for(var h in e)f[h]=h==="access"?{}:e[h];for(var h in e.access)f.access[h]=e.access[h];f.addInitializer=function(d){if(b)throw new TypeError("Cannot add initializers after decoration has completed");m.push(o(d||null))};var l=(0,a[p])(c==="accessor"?{get:n.get,set:n.set}:n[v],f);if(c==="accessor"){if(l===void 0)continue;if(l===null||typeof l!="object")throw new TypeError("Object expected");(r=o(l.get))&&(n.get=r),(r=o(l.set))&&(n.set=r),(r=o(l.init))&&s.unshift(r)}else(r=o(l))&&(c==="field"?s.unshift(r):n[v]=r)}u&&Object.defineProperty(u,e.name,n),b=!0},za=function(i,t,a){for(var e=arguments.length>2,s=0;s<t.length;s++)a=e?t[s].call(i,a):t[s].call(i);return e?a:void 0};let fn=(()=>{var v,u;let i=[Ce("discord-quote")],t,a=[],e,s=we,m,o=[],c=[];return v=class extends s{constructor(){super(...arguments);z(this,u,za(this,o,!1));za(this,c)}get lightTheme(){return y(this,u)}set lightTheme(b){w(this,u,b)}render(){return k`
			<div class="discord-quote-divider"></div>
			<!-- display: inline -->
			<blockquote><slot></slot></blockquote>
		`}},u=new WeakMap,e=v,(()=>{const b=typeof Symbol=="function"&&Symbol.metadata?Object.create(s[Symbol.metadata]??null):void 0;m=[Ae({context:Ne,subscribe:!0}),x({type:Boolean,reflect:!0,attribute:"light-theme"})],ts(v,null,m,{kind:"accessor",name:"lightTheme",static:!1,private:!1,access:{has:p=>"lightTheme"in p,get:p=>p.lightTheme,set:(p,f)=>{p.lightTheme=f}},metadata:b},o,c),ts(null,t={value:e},i,{kind:"class",name:e.name,metadata:b},null,a),e=t.value,b&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:b})})(),pe(v,"styles",ke`
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
	`),za(e,a),e})();var li=function(i,t,a,e,s,m){function o(d){if(d!==void 0&&typeof d!="function")throw new TypeError("Function expected");return d}for(var c=e.kind,v=c==="getter"?"get":c==="setter"?"set":"value",u=!t&&i?e.static?i:i.prototype:null,n=t||(u?Object.getOwnPropertyDescriptor(u,e.name):{}),r,b=!1,p=a.length-1;p>=0;p--){var f={};for(var h in e)f[h]=h==="access"?{}:e[h];for(var h in e.access)f.access[h]=e.access[h];f.addInitializer=function(d){if(b)throw new TypeError("Cannot add initializers after decoration has completed");m.push(o(d||null))};var l=(0,a[p])(c==="accessor"?{get:n.get,set:n.set}:n[v],f);if(c==="accessor"){if(l===void 0)continue;if(l===null||typeof l!="object")throw new TypeError("Object expected");(r=o(l.get))&&(n.get=r),(r=o(l.set))&&(n.set=r),(r=o(l.init))&&s.unshift(r)}else(r=o(l))&&(c==="field"?s.unshift(r):n[v]=r)}u&&Object.defineProperty(u,e.name,n),b=!0},wt=function(i,t,a){for(var e=arguments.length>2,s=0;s<t.length;s++)a=e?t[s].call(i,a):t[s].call(i);return e?a:void 0};let pn=(()=>{var j,I,D,re,ge,M,_;let i=[Ce("discord-reaction")],t,a=[],e,s=we,m,o=[],c=[],v,u=[],n=[],r,b=[],p=[],f,h=[],l=[],d,Q=[],ae=[],$,H=[],L=[];return j=class extends s{constructor(){super(...arguments);z(this,I,wt(this,o,void 0));z(this,D,(wt(this,c),wt(this,u,":emoji:")));z(this,re,(wt(this,n),wt(this,b,1)));z(this,ge,(wt(this,p),wt(this,h,!1)));z(this,M,(wt(this,l),wt(this,Q,!1)));z(this,_,(wt(this,ae),wt(this,H,!1)));pe(this,"handleReactionClick",(wt(this,L),O=>{this.interactive&&(O.shiftKey?this.count--:this.count++,this.count<=0&&(this.count=1))}))}get emoji(){return y(this,I)}set emoji(O){w(this,I,O)}get name(){return y(this,D)}set name(O){w(this,D,O)}get count(){return y(this,re)}set count(O){w(this,re,O)}get reacted(){return y(this,ge)}set reacted(O){w(this,ge,O)}get interactive(){return y(this,M)}set interactive(O){w(this,M,O)}get lightTheme(){return y(this,_)}set lightTheme(O){w(this,_,O)}render(){var O,T,ie;return k`<div class="discord-reaction-inner" @click=${this.handleReactionClick} @keydown=${this.handleReactionClick}>
			${X(((O=this.emoji)==null?void 0:O.includes("http"))||((T=this.emoji)==null?void 0:T.startsWith("/"))||((ie=this.emoji)==null?void 0:ie.startsWith("./")),()=>k`<img src=${fe(this.emoji)} alt=${fe(this.name)} draggable="false" />`,()=>k`<span>${this.emoji}</span>`)}
			<span class="discord-reaction-count">${this.count}</span>
		</div>`}},I=new WeakMap,D=new WeakMap,re=new WeakMap,ge=new WeakMap,M=new WeakMap,_=new WeakMap,e=j,(()=>{const O=typeof Symbol=="function"&&Symbol.metadata?Object.create(s[Symbol.metadata]??null):void 0;m=[x()],v=[x()],r=[x({type:Number})],f=[x({type:Boolean,reflect:!0})],d=[x({type:Boolean})],$=[Ae({context:Ne}),x({type:Boolean,reflect:!0,attribute:"light-theme"})],li(j,null,m,{kind:"accessor",name:"emoji",static:!1,private:!1,access:{has:T=>"emoji"in T,get:T=>T.emoji,set:(T,ie)=>{T.emoji=ie}},metadata:O},o,c),li(j,null,v,{kind:"accessor",name:"name",static:!1,private:!1,access:{has:T=>"name"in T,get:T=>T.name,set:(T,ie)=>{T.name=ie}},metadata:O},u,n),li(j,null,r,{kind:"accessor",name:"count",static:!1,private:!1,access:{has:T=>"count"in T,get:T=>T.count,set:(T,ie)=>{T.count=ie}},metadata:O},b,p),li(j,null,f,{kind:"accessor",name:"reacted",static:!1,private:!1,access:{has:T=>"reacted"in T,get:T=>T.reacted,set:(T,ie)=>{T.reacted=ie}},metadata:O},h,l),li(j,null,d,{kind:"accessor",name:"interactive",static:!1,private:!1,access:{has:T=>"interactive"in T,get:T=>T.interactive,set:(T,ie)=>{T.interactive=ie}},metadata:O},Q,ae),li(j,null,$,{kind:"accessor",name:"lightTheme",static:!1,private:!1,access:{has:T=>"lightTheme"in T,get:T=>T.lightTheme,set:(T,ie)=>{T.lightTheme=ie}},metadata:O},H,L),li(null,t={value:e},i,{kind:"class",name:e.name,metadata:O},null,a),e=t.value,O&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:O})})(),pe(j,"styles",ke`
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
	`),wt(e,a),e})();var vn=function(i,t,a,e,s,m){function o(d){if(d!==void 0&&typeof d!="function")throw new TypeError("Function expected");return d}for(var c=e.kind,v=c==="getter"?"get":c==="setter"?"set":"value",u=!t&&i?e.static?i:i.prototype:null,n=t||(u?Object.getOwnPropertyDescriptor(u,e.name):{}),r,b=!1,p=a.length-1;p>=0;p--){var f={};for(var h in e)f[h]=h==="access"?{}:e[h];for(var h in e.access)f.access[h]=e.access[h];f.addInitializer=function(d){if(b)throw new TypeError("Cannot add initializers after decoration has completed");m.push(o(d||null))};var l=(0,a[p])(c==="accessor"?{get:n.get,set:n.set}:n[v],f);if(c==="accessor"){if(l===void 0)continue;if(l===null||typeof l!="object")throw new TypeError("Object expected");(r=o(l.get))&&(n.get=r),(r=o(l.set))&&(n.set=r),(r=o(l.init))&&s.unshift(r)}else(r=o(l))&&(c==="field"?s.unshift(r):n[v]=r)}u&&Object.defineProperty(u,e.name,n),b=!0},gn=function(i,t,a){for(var e=arguments.length>2,s=0;s<t.length;s++)a=e?t[s].call(i,a):t[s].call(i);return e?a:void 0};let _n=(()=>{var m;let i=[Ce("discord-reactions")],t,a=[],e,s=we;return m=class extends s{render(){return k`<slot></slot>`}},e=m,(()=>{const c=typeof Symbol=="function"&&Symbol.metadata?Object.create(s[Symbol.metadata]??null):void 0;vn(null,t={value:e},i,{kind:"class",name:e.name,metadata:c},null,a),e=t.value,c&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:c})})(),pe(m,"styles",ke`
		:host {
			display: flex;
			-webkit-box-flex: 1;
			-ms-flex: 1 0 auto;
			flex: 1 0 auto;
			align-items: center;
			flex-wrap: wrap;
		}
	`),gn(e,a),e})();var wa=function(i,t,a,e,s,m){function o(d){if(d!==void 0&&typeof d!="function")throw new TypeError("Function expected");return d}for(var c=e.kind,v=c==="getter"?"get":c==="setter"?"set":"value",u=!t&&i?e.static?i:i.prototype:null,n=t||(u?Object.getOwnPropertyDescriptor(u,e.name):{}),r,b=!1,p=a.length-1;p>=0;p--){var f={};for(var h in e)f[h]=h==="access"?{}:e[h];for(var h in e.access)f.access[h]=e.access[h];f.addInitializer=function(d){if(b)throw new TypeError("Cannot add initializers after decoration has completed");m.push(o(d||null))};var l=(0,a[p])(c==="accessor"?{get:n.get,set:n.set}:n[v],f);if(c==="accessor"){if(l===void 0)continue;if(l===null||typeof l!="object")throw new TypeError("Object expected");(r=o(l.get))&&(n.get=r),(r=o(l.set))&&(n.set=r),(r=o(l.init))&&s.unshift(r)}else(r=o(l))&&(c==="field"?s.unshift(r):n[v]=r)}u&&Object.defineProperty(u,e.name,n),b=!0},Bi=function(i,t,a){for(var e=arguments.length>2,s=0;s<t.length;s++)a=e?t[s].call(i,a):t[s].call(i);return e?a:void 0};let bn=(()=>{var r,b,p;let i=[Ce("discord-spoiler")],t,a=[],e,s=we,m,o=[],c=[],v,u=[],n=[];return r=class extends s{constructor(){super(...arguments);z(this,b,Bi(this,o,!1));z(this,p,(Bi(this,c),Bi(this,u,!1)));Bi(this,n)}get activated(){return y(this,b)}set activated(l){w(this,b,l)}get lightTheme(){return y(this,p)}set lightTheme(l){w(this,p,l)}render(){return k`<slot
			@click=${()=>{this.activated=!0}}
			@keydown=${()=>{this.activated=!0}}
		></slot>`}},b=new WeakMap,p=new WeakMap,e=r,(()=>{const l=typeof Symbol=="function"&&Symbol.metadata?Object.create(s[Symbol.metadata]??null):void 0;m=[x({type:Boolean,reflect:!0})],v=[Ae({context:Ne}),x({type:Boolean,reflect:!0,attribute:"light-theme"})],wa(r,null,m,{kind:"accessor",name:"activated",static:!1,private:!1,access:{has:d=>"activated"in d,get:d=>d.activated,set:(d,Q)=>{d.activated=Q}},metadata:l},o,c),wa(r,null,v,{kind:"accessor",name:"lightTheme",static:!1,private:!1,access:{has:d=>"lightTheme"in d,get:d=>d.lightTheme,set:(d,Q)=>{d.lightTheme=Q}},metadata:l},u,n),wa(null,t={value:e},i,{kind:"class",name:e.name,metadata:l},null,a),e=t.value,l&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:l})})(),pe(r,"styles",ke`
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
	`),Bi(e,a),e})();var Jt=function(i,t,a){for(var e=arguments.length>2,s=0;s<t.length;s++)a=e?t[s].call(i,a):t[s].call(i);return e?a:void 0},Ri=function(i,t,a,e,s,m){function o(d){if(d!==void 0&&typeof d!="function")throw new TypeError("Function expected");return d}for(var c=e.kind,v=c==="getter"?"get":c==="setter"?"set":"value",u=!t&&i?e.static?i:i.prototype:null,n=t||(u?Object.getOwnPropertyDescriptor(u,e.name):{}),r,b=!1,p=a.length-1;p>=0;p--){var f={};for(var h in e)f[h]=h==="access"?{}:e[h];for(var h in e.access)f.access[h]=e.access[h];f.addInitializer=function(d){if(b)throw new TypeError("Cannot add initializers after decoration has completed");m.push(o(d||null))};var l=(0,a[p])(c==="accessor"?{get:n.get,set:n.set}:n[v],f);if(c==="accessor"){if(l===void 0)continue;if(l===null||typeof l!="object")throw new TypeError("Object expected");(r=o(l.get))&&(n.get=r),(r=o(l.set))&&(n.set=r),(r=o(l.init))&&s.unshift(r)}else(r=o(l))&&(c==="field"?s.unshift(r):n[v]=r)}u&&Object.defineProperty(u,e.name,n),b=!0};let yn=(()=>{var l,d,Q,ae;let i=[Ce("discord-string-select-menu")],t,a=[],e,s=we,m=[],o,c=[],v=[],u,n=[],r=[],b,p=[],f=[],h;return l=class extends s{constructor(){super(...arguments);z(this,d,(Jt(this,m),Jt(this,c,void 0)));z(this,Q,(Jt(this,v),Jt(this,n,"Make a selection")));z(this,ae,(Jt(this,r),Jt(this,p,!1)));Jt(this,f)}get disabled(){return y(this,d)}set disabled(L){w(this,d,L)}get placeholder(){return y(this,Q)}set placeholder(L){w(this,Q,L)}get lightTheme(){return y(this,ae)}set lightTheme(L){w(this,ae,L)}render(){return k`
			<label
				class="${Be({"discord-string-select-menu-label":!0,"discord-string-select-menu":!0,"discord-string-select-menu-disabled":this.disabled})}"
			>
				<span>${this.placeholder}</span> ${Ma({class:"discord-expand-more-icon"})}
				<span class="discord-string-select-menu-hidden"><input type="checkbox" @click=${this._onClick} /></span>
			</label>
			<div class="discord-string-select-menu-option-slot discord-string-select-menu-hidden"><slot></slot></div>
		`}_onClick(){var D,re,ge;const L=(D=this.shadowRoot)==null?void 0:D.querySelectorAll("svg.discord-expand-more-icon").item(0),j=(re=this.shadowRoot)==null?void 0:re.querySelectorAll("div.discord-string-select-menu-option-slot").item(0),I=(ge=this.shadowRoot)==null?void 0:ge.querySelectorAll("label.discord-string-select-menu").item(0);I!=null&&I.className.includes("discord-string-select-menu-disabled")||(j!=null&&j.className.includes("discord-string-select-menu-hidden")?(j==null||j.setAttribute("class","discord-string-select-menu-option-slot"),L==null||L.setAttribute("class","discord-expand-more-icon discord-string-select-menu-rotated")):(j==null||j.setAttribute("class","discord-string-select-menu-option-slot discord-string-select-menu-hidden"),L==null||L.setAttribute("class","discord-expand-more-icon")))}},d=new WeakMap,Q=new WeakMap,ae=new WeakMap,e=l,(()=>{const L=typeof Symbol=="function"&&Symbol.metadata?Object.create(s[Symbol.metadata]??null):void 0;o=[x({type:Boolean,attribute:"disabled"})],u=[x({attribute:"placeholder"})],b=[Ae({context:Ne}),x({type:Boolean,reflect:!0,attribute:"light-theme"})],h=[ps({once:!1,capture:!0,passive:!0})],Ri(l,null,o,{kind:"accessor",name:"disabled",static:!1,private:!1,access:{has:j=>"disabled"in j,get:j=>j.disabled,set:(j,I)=>{j.disabled=I}},metadata:L},c,v),Ri(l,null,u,{kind:"accessor",name:"placeholder",static:!1,private:!1,access:{has:j=>"placeholder"in j,get:j=>j.placeholder,set:(j,I)=>{j.placeholder=I}},metadata:L},n,r),Ri(l,null,b,{kind:"accessor",name:"lightTheme",static:!1,private:!1,access:{has:j=>"lightTheme"in j,get:j=>j.lightTheme,set:(j,I)=>{j.lightTheme=I}},metadata:L},p,f),Ri(l,null,h,{kind:"method",name:"_onClick",static:!1,private:!1,access:{has:j=>"_onClick"in j,get:j=>j._onClick},metadata:L},null,m),Ri(null,t={value:e},i,{kind:"class",name:e.name,metadata:L},null,a),e=t.value,L&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:L})})(),pe(l,"styles",ke`
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
	`),Jt(e,a),e})();var ni=function(i,t,a,e,s,m){function o(d){if(d!==void 0&&typeof d!="function")throw new TypeError("Function expected");return d}for(var c=e.kind,v=c==="getter"?"get":c==="setter"?"set":"value",u=!t&&i?e.static?i:i.prototype:null,n=t||(u?Object.getOwnPropertyDescriptor(u,e.name):{}),r,b=!1,p=a.length-1;p>=0;p--){var f={};for(var h in e)f[h]=h==="access"?{}:e[h];for(var h in e.access)f.access[h]=e.access[h];f.addInitializer=function(d){if(b)throw new TypeError("Cannot add initializers after decoration has completed");m.push(o(d||null))};var l=(0,a[p])(c==="accessor"?{get:n.get,set:n.set}:n[v],f);if(c==="accessor"){if(l===void 0)continue;if(l===null||typeof l!="object")throw new TypeError("Object expected");(r=o(l.get))&&(n.get=r),(r=o(l.set))&&(n.set=r),(r=o(l.init))&&s.unshift(r)}else(r=o(l))&&(c==="field"?s.unshift(r):n[v]=r)}u&&Object.defineProperty(u,e.name,n),b=!0},xt=function(i,t,a){for(var e=arguments.length>2,s=0;s<t.length;s++)a=e?t[s].call(i,a):t[s].call(i);return e?a:void 0};let zn=(()=>{var j,I,D,re,ge,M,_;let i=[Ce("discord-string-select-menu-option")],t,a=[],e,s=we,m,o=[],c=[],v,u=[],n=[],r,b=[],p=[],f,h=[],l=[],d,Q=[],ae=[],$,H=[],L=[];return j=class extends s{constructor(){super(...arguments);z(this,I,xt(this,o,void 0));z(this,D,(xt(this,c),xt(this,u,"emoji")));z(this,re,(xt(this,n),xt(this,b,void 0)));z(this,ge,(xt(this,p),xt(this,h,void 0)));z(this,M,(xt(this,l),xt(this,Q,void 0)));z(this,_,(xt(this,ae),xt(this,H,!1)));xt(this,L)}get emoji(){return y(this,I)}set emoji(O){w(this,I,O)}get emojiName(){return y(this,D)}set emojiName(O){w(this,D,O)}get label(){return y(this,re)}set label(O){w(this,re,O)}get description(){return y(this,ge)}set description(O){w(this,ge,O)}get selectOption(){return y(this,M)}set selectOption(O){w(this,M,O)}checkLabelIsProvided(){if(!this.label)throw new Yt("The label of option is required")}get lightTheme(){return y(this,_)}set lightTheme(O){w(this,_,O)}render(){return this.checkLabelIsProvided(),k`
			<label>
				${X(this.emoji,()=>{var O,T,ie;return X(((O=this.emoji)==null?void 0:O.includes("http"))||((T=this.emoji)==null?void 0:T.startsWith("/"))||((ie=this.emoji)==null?void 0:ie.startsWith("./")),()=>k`<img
								src=${this.emoji}
								alt=${fe(this.emojiName)}
								draggable="true"
								class="discord-string-select-menu-option-emoji"
							/>`,()=>k`<span class="discord-string-select-menu-option-emoji">${this.emoji}</span>`)})}
				<div class="discord-string-select-menu-option-ellipsis-text">
					<div class="discord-string-select-menu-option-ellipsis-text">
						<strong>${this.label}</strong>
					</div>
					${X(this.description,()=>k`<span>${this.description}</span>`)}
				</div>
				<span class="discord-string-select-menu-option-hidden"><input type="checkbox" @click=${()=>{var O;return(O=this.selectOption)==null?void 0:O.call(this)}} /></span>
			</label>
		`}},I=new WeakMap,D=new WeakMap,re=new WeakMap,ge=new WeakMap,M=new WeakMap,_=new WeakMap,e=j,(()=>{const O=typeof Symbol=="function"&&Symbol.metadata?Object.create(s[Symbol.metadata]??null):void 0;m=[x({reflect:!0,attribute:"emoji"})],v=[x({reflect:!0,attribute:"emoji-name"})],r=[x({attribute:"label"})],f=[x({attribute:"description"})],d=[x({reflect:!1,noAccessor:!0,attribute:!1})],$=[Ae({context:Ne}),x({type:Boolean,reflect:!0,attribute:"light-theme"})],ni(j,null,m,{kind:"accessor",name:"emoji",static:!1,private:!1,access:{has:T=>"emoji"in T,get:T=>T.emoji,set:(T,ie)=>{T.emoji=ie}},metadata:O},o,c),ni(j,null,v,{kind:"accessor",name:"emojiName",static:!1,private:!1,access:{has:T=>"emojiName"in T,get:T=>T.emojiName,set:(T,ie)=>{T.emojiName=ie}},metadata:O},u,n),ni(j,null,r,{kind:"accessor",name:"label",static:!1,private:!1,access:{has:T=>"label"in T,get:T=>T.label,set:(T,ie)=>{T.label=ie}},metadata:O},b,p),ni(j,null,f,{kind:"accessor",name:"description",static:!1,private:!1,access:{has:T=>"description"in T,get:T=>T.description,set:(T,ie)=>{T.description=ie}},metadata:O},h,l),ni(j,null,d,{kind:"accessor",name:"selectOption",static:!1,private:!1,access:{has:T=>"selectOption"in T,get:T=>T.selectOption,set:(T,ie)=>{T.selectOption=ie}},metadata:O},Q,ae),ni(j,null,$,{kind:"accessor",name:"lightTheme",static:!1,private:!1,access:{has:T=>"lightTheme"in T,get:T=>T.lightTheme,set:(T,ie)=>{T.lightTheme=ie}},metadata:O},H,L),ni(null,t={value:e},i,{kind:"class",name:e.name,metadata:O},null,a),e=t.value,O&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:O})})(),pe(j,"styles",ke`
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
	`),xt(e,a),e})();var is=function(i,t,a,e,s,m){function o(d){if(d!==void 0&&typeof d!="function")throw new TypeError("Function expected");return d}for(var c=e.kind,v=c==="getter"?"get":c==="setter"?"set":"value",u=!t&&i?e.static?i:i.prototype:null,n=t||(u?Object.getOwnPropertyDescriptor(u,e.name):{}),r,b=!1,p=a.length-1;p>=0;p--){var f={};for(var h in e)f[h]=h==="access"?{}:e[h];for(var h in e.access)f.access[h]=e.access[h];f.addInitializer=function(d){if(b)throw new TypeError("Cannot add initializers after decoration has completed");m.push(o(d||null))};var l=(0,a[p])(c==="accessor"?{get:n.get,set:n.set}:n[v],f);if(c==="accessor"){if(l===void 0)continue;if(l===null||typeof l!="object")throw new TypeError("Object expected");(r=o(l.get))&&(n.get=r),(r=o(l.set))&&(n.set=r),(r=o(l.init))&&s.unshift(r)}else(r=o(l))&&(c==="field"?s.unshift(r):n[v]=r)}u&&Object.defineProperty(u,e.name,n),b=!0},xa=function(i,t,a){for(var e=arguments.length>2,s=0;s<t.length;s++)a=e?t[s].call(i,a):t[s].call(i);return e?a:void 0};let wn=(()=>{var v,u;let i=[Ce("discord-subscript")],t,a=[],e,s=we,m,o=[],c=[];return v=class extends s{constructor(){super(...arguments);z(this,u,xa(this,o,!1));xa(this,c)}get lightTheme(){return y(this,u)}set lightTheme(b){w(this,u,b)}render(){return k`
			<small>
				<span>
					<slot></slot>
				</span>
			</small>
		`}},u=new WeakMap,e=v,(()=>{const b=typeof Symbol=="function"&&Symbol.metadata?Object.create(s[Symbol.metadata]??null):void 0;m=[Ae({context:Ne}),x({type:Boolean,reflect:!0,attribute:"light-theme"})],is(v,null,m,{kind:"accessor",name:"lightTheme",static:!1,private:!1,access:{has:p=>"lightTheme"in p,get:p=>p.lightTheme,set:(p,f)=>{p.lightTheme=f}},metadata:b},o,c),is(null,t={value:e},i,{kind:"class",name:e.name,metadata:b},null,a),e=t.value,b&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:b})})(),pe(v,"styles",ke`
		small {
			display: block;
			color: color-mix(in oklab, hsl(214 calc(1 * 8.1%) 61.2% / 1) 100%, black 0%);
			font-size: 0.8125rem;
			line-height: 1.11719rem;
		}

		:host([light-theme]) > small {
			color: color-mix(in oklab, hsl(228 calc(1 * 5.2%) 38% / 1) 100%, black 0%);
		}
	`),xa(e,a),e})();const xn=_e`
	<path d="M4 0L0 4V8L4 12L8 8V4L4 0ZM7 7.59L4 10.59L1 7.59V4.41L4 1.41L7 4.41V7.59Z" fill="currentColor" />
	<path d="M2 4.83V7.17L4 9.17L6 7.17V4.83L4 2.83L2 4.83Z" fill="currentColor" />
`;function kn(i={}){return k`<svg ${be(i)} aria-hidden="false" width="24" height="24" viewBox="0 0 8 12">${xn}</svg>`}const Mn=_e`
	<path
		fill="#3ba55c"
		fill-rule="evenodd"
		d="M17.7163041 15.36645368c-.0190957.02699568-1.9039523 2.6680735-2.9957762 2.63320406-3.0676659-.09785935-6.6733809-3.07188394-9.15694343-5.548738C3.08002193 9.9740657.09772497 6.3791404 0 3.3061316v-.024746C0 2.2060575 2.61386252.3152347 2.64082114.2972376c.7110335-.4971705 1.4917101-.3149497 1.80959713.1372281.19320342.2744561 2.19712724 3.2811005 2.42290565 3.6489167.09884826.1608492.14714912.3554431.14714912.5702838 0 .2744561-.07975258.5770327-.23701117.8751101-.1527655.2902036-.65262318 1.1664385-.89862055 1.594995.2673396.3768148.94804468 1.26429792 2.351016 2.66357424 1.39173858 1.39027775 2.28923588 2.07641807 2.67002628 2.34187563.4302146-.2452108 1.3086162-.74238132 1.5972981-.89423205.5447887-.28682915 1.0907006-.31944893 1.4568885-.08661115.3459689.2182151 3.3383754 2.21027167 3.6225641 2.41611376.2695862.19234426.4144887.5399137.4144887.91672846 0 .2969525-.089862.61190215-.2808189.88523346"
	/>
`;function $n(i={}){return k`<svg ${be(i)} aria-hidden="false" width="18" height="18" viewBox="0 0 18 18">${Mn}</svg>`}const Tn=_e`
	<g fill="none" fill-rule="evenodd">
		<path
			fill="#99AAB5"
			d="M0 14.25V18h3.75L14.81 6.94l-3.75-3.75L0 14.25zM17.71 4.04c.39-.39.39-1.02 0-1.41L15.37.29c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
		/>
		<path d="M0 0h18v18H0" />
	</g>
`;function Cn(i={}){return k`<svg ${be(i)} aria-hidden="false" width="18" height="18" viewBox="0 0 18 18">${Tn}</svg>`}const jn=_e`
	<g fill="none" fill-rule="evenodd">
		<path d="M0 0h18v18H0z" />
		<path
			fill="#99AAB5"
			d="M3.2765961.00034226C6.344262.0982016 9.949977 3.0722262 12.43353953 5.54908026c2.48356254 2.47685405 5.4658595 6.07177934 5.56358447 9.14478814 0 1.1000741-2.61386252 2.9908969-2.64082114 3.008894-.7110335.4971705-1.4917101.3149497-1.80959713-.1372281-.19320342-.2744561-2.19712724-3.2811005-2.42290565-3.6489167-.09884826-.1608492-.14714912-.3554431-.14714912-.5702838 0-.2744561.07975258-.5770327.23701117-.8751101.1527655-.2902036.65262318-1.1664385.89862055-1.594995-.2673396-.3768148-.94804468-1.26429792-2.351016-2.66357424C8.3695281 6.8223767 7.4720308 6.1362364 7.0912404 5.87077883c-.4302146.2452108-1.3086162.74238132-1.5972981.89423205-.5447887.28682915-1.0907006.31944893-1.4568885.08661115C3.6910849 6.63340693.6986784 4.64135036.4144897 4.43550827.1449035 4.243164.000001 3.89559457.000001 3.5187798c0-.29695252.089862-.61190217.2808189-.88523348.0190957-.02699568 1.9039523-2.6680735 2.9957762-2.63320406z"
		/>
	</g>
`;function Hn(i={}){return k`<svg ${be(i)} aria-hidden="false" width="18" height="18" viewBox="0 0 18 18">${jn}</svg>`}const En=_e`
	<path
		d="m16.908 8.39684-8.29587-8.295827-1.18584 1.184157 1.18584 1.18584-4.14834 4.1475v.00167l-1.18583-1.18583-1.185 1.18583 3.55583 3.55502-4.740831 4.74 1.185001 1.185 4.74083-4.74 3.55581 3.555 1.185-1.185-1.185-1.185 4.1475-4.14836h.0009l1.185 1.185z"
		fill="#b9bbbe"
	/>
`;function Sn(i={}){return k`<svg ${be(i)} aria-hidden="false" width="18" height="18" viewBox="0 0 18 18">${En}</svg>`}const Dn=_e`
	<path
		fill="#b9bbbe"
		fill-rule="evenodd"
		d="M1.575 9a2.25 2.25 0 0 0 0 3.18l.345.345c.128.128.323.15.488.075a2.25 2.25 0 0 1 3 3 .43.43 0 0 0 .06.48l.352.345a2.25 2.25 0 0 0 3.18 0l5.077-5.077a.75.75 0 0 1 1.02-1.02L16.425 9a2.25 2.25 0 0 0 0-3.18l-.345-.352a.42.42 0 0 0-.488-.06 2.25 2.25 0 0 1-3-3 .42.42 0 0 0-.068-.488l-.345-.345a2.25 2.25 0 0 0-3.18 0L7.671 2.903a.75.75 0 0 1-1.02 1.02zm7.508-4.725a.75.75 0 1 0-1.057 1.05l.517.525A.75.75 0 1 0 9.6 4.785l-.517-.525Zm2.063 2.063a.75.75 0 1 0-1.057 1.057l.517.525a.75.75 0 0 0 1.057-1.065l-.517-.525Zm2.063 2.063a.75.75 0 0 0-1.057 1.057l.517.525a.75.75 0 0 0 1.057-1.065l-.517-.525Z"
		clip-rule="evenodd"
	/>
`;function On(i={}){return k`<svg ${be(i)} aria-hidden="false" width="18" height="18" viewBox="0 0 18 18">${Dn}</svg>`}const An=_e`
	<path
		d="M10 0C4.486 0 0 4.486 0 10C0 15.515 4.486 20 10 20C15.514 20 20 15.515 20 10C20 4.486 15.514 0 10 0ZM9 4H11V11H9V4ZM10 15.25C9.31 15.25 8.75 14.691 8.75 14C8.75 13.31 9.31 12.75 10 12.75C10.69 12.75 11.25 13.31 11.25 14C11.25 14.691 10.69 15.25 10 15.25Z"
		fill-rule="evenodd"
		clip-rule="evenodd"
		fill="currentColor"
	/>
`;function Vn(i={}){return k`<svg ${be(i)} aria-hidden="false" width="20" height="20" viewBox="0 0 20 20">${An}</svg>`}const In=_e`
	<path
		xmlns="http://www.w3.org/2000/svg"
		d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"
		fill="#ed4245"
	/>
`;function Ln(i={}){return k`<svg ${be(i)} aria-hidden="false" width="20" height="20" viewBox="0 0 20 20">${In}</svg>`}const Nn=_e`
	<path
		fill="currentColor"
		d="M5.43309 21C5.35842 21 5.30189 20.9325 5.31494 20.859L5.99991 17H2.14274C2.06819 17 2.01168 16.9327 2.02453 16.8593L2.33253 15.0993C2.34258 15.0419 2.39244 15 2.45074 15H6.34991L7.40991 9H3.55274C3.47819 9 3.42168 8.93274 3.43453 8.85931L3.74253 7.09931C3.75258 7.04189 3.80244 7 3.86074 7H7.75991L8.45234 3.09903C8.46251 3.04174 8.51231 3 8.57049 3H10.3267C10.4014 3 10.4579 3.06746 10.4449 3.14097L9.75991 7H15.7599L16.4523 3.09903C16.4625 3.04174 16.5123 3 16.5705 3H18.3267C18.4014 3 18.4579 3.06746 18.4449 3.14097L17.7599 7H21.6171C21.6916 7 21.7481 7.06725 21.7353 7.14069L21.4273 8.90069C21.4172 8.95811 21.3674 9 21.3091 9H17.4099L17.0495 11.04H15.05L15.4104 9H9.41035L8.35035 15H10.5599V17H7.99991L7.30749 20.901C7.29732 20.9583 7.24752 21 7.18934 21H5.43309Z"
	/>
	<path
		fill="currentColor"
		d="M13.4399 12.96C12.9097 12.96 12.4799 13.3898 12.4799 13.92V20.2213C12.4799 20.7515 12.9097 21.1813 13.4399 21.1813H14.3999C14.5325 21.1813 14.6399 21.2887 14.6399 21.4213V23.4597C14.6399 23.6677 14.8865 23.7773 15.0408 23.6378L17.4858 21.4289C17.6622 21.2695 17.8916 21.1813 18.1294 21.1813H22.5599C23.0901 21.1813 23.5199 20.7515 23.5199 20.2213V13.92C23.5199 13.3898 23.0901 12.96 22.5599 12.96H13.4399Z"
	/>
`;function Pn(i={}){return k`<svg ${be(i)} aria-hidden="false" width="24" height="24" viewBox="0 0 24 24">${Nn}</svg>`}const Bn=_e`
	<g fill="none" fill-rule="evenodd">
		<path d="M18 0H0v18h18z" />
		<path fill="#3ba55c" d="M0 8h14.2l-3.6-3.6L12 3l6 6-6 6-1.4-1.4 3.6-3.6H0" />
	</g>
`;function Rn(i={}){return k`<svg ${be(i)} aria-hidden="false" width="18" height="18" viewBox="0 0 18 18">${Bn}</svg>`}const Un=_e`
	<g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
		<path d="M18 0H0v18h18z" />
		<path fill="#ed4245" d="M3.8 8l3.6-3.6L6 3 0 9l6 6 1.4-1.4L3.8 10H18V8" />
	</g>
`;function Fn(i={}){return k`<svg ${be(i)} aria-hidden="false" width="18" height="18" viewBox="0 0 18 18">${Un}</svg>`}var wi=function(i,t,a,e,s,m){function o(d){if(d!==void 0&&typeof d!="function")throw new TypeError("Function expected");return d}for(var c=e.kind,v=c==="getter"?"get":c==="setter"?"set":"value",u=!t&&i?e.static?i:i.prototype:null,n=t||(u?Object.getOwnPropertyDescriptor(u,e.name):{}),r,b=!1,p=a.length-1;p>=0;p--){var f={};for(var h in e)f[h]=h==="access"?{}:e[h];for(var h in e.access)f.access[h]=e.access[h];f.addInitializer=function(d){if(b)throw new TypeError("Cannot add initializers after decoration has completed");m.push(o(d||null))};var l=(0,a[p])(c==="accessor"?{get:n.get,set:n.set}:n[v],f);if(c==="accessor"){if(l===void 0)continue;if(l===null||typeof l!="object")throw new TypeError("Object expected");(r=o(l.get))&&(n.get=r),(r=o(l.set))&&(n.set=r),(r=o(l.init))&&s.unshift(r)}else(r=o(l))&&(c==="field"?s.unshift(r):n[v]=r)}u&&Object.defineProperty(u,e.name,n),b=!0},It=function(i,t,a){for(var e=arguments.length>2,s=0;s<t.length;s++)a=e?t[s].call(i,a):t[s].call(i);return e?a:void 0};let Zn=(()=>{var $,H,L,j,I,D;let i=[Ce("discord-system-message")],t,a=[],e,s=we,m,o=[],c=[],v,u=[],n=[],r,b=[],p=[],f,h=[],l=[],d,Q=[],ae=[];return $=class extends s{constructor(){super(...arguments);z(this,H,It(this,o,new Date));z(this,L,(It(this,c),It(this,u,"join")));z(this,j,(It(this,n),It(this,b,!1)));z(this,I,(It(this,p),It(this,h,!1)));z(this,D,(It(this,l),It(this,Q,!1)));It(this,ae)}get timestamp(){return y(this,H)}set timestamp(M){w(this,H,M)}get type(){return y(this,L)}set type(M){w(this,L,M)}get channelName(){return y(this,j)}set channelName(M){w(this,j,M)}get hasThread(){return y(this,I)}set hasThread(M){w(this,I,M)}get lightTheme(){return y(this,D)}set lightTheme(M){w(this,D,M)}checkType(){if(typeof this.type!="string")throw new TypeError("DiscordSystemMessage `type` prop must be a string.");if(!["join","leave","call","missed-call","boost","edit","thread","pin","alert","error","upgrade"].includes(this.type))throw new RangeError("DiscordSystemMessage `type` prop must be one of: 'join', 'leave', 'call', 'missed-call', 'boost', 'edit', 'thread', 'pin', 'alert', 'upgrade', 'error'")}willUpdate(){this.hasThread=Array.from(this.children).some(M=>M.tagName.toLowerCase()==="discord-thread")}render(){return this.timestamp=Qi(this.timestamp),this.checkType(),k`<div class="discord-message-icon">
				${Aa(this.type,[["join",()=>Rn()],["leave",()=>Fn()],["call",()=>$n()],["missed-call",()=>Hn()],["edit",()=>Cn()],["boost",()=>kn()],["thread",()=>Pn()],["pin",()=>Sn()],["alert",()=>Vn()],["error",()=>Ln()],["upgrade",()=>On()]])}
			</div>
			<div class="discord-message-content">
				<span>
					<slot></slot>
					<span class="discord-message-timestamp">${this.timestamp}</span>
				</span>
				<slot name="reactions"></slot>
				<slot name="thread"></slot>
			</div>`}},H=new WeakMap,L=new WeakMap,j=new WeakMap,I=new WeakMap,D=new WeakMap,e=$,(()=>{const M=typeof Symbol=="function"&&Symbol.metadata?Object.create(s[Symbol.metadata]??null):void 0;m=[x({type:String})],v=[x({reflect:!0,attribute:"type"})],r=[x({type:Boolean,reflect:!0,attribute:"channel-name"})],f=[x({type:Boolean,reflect:!0,attribute:"has-thread"})],d=[Ae({context:Ne}),x({type:Boolean,reflect:!0,attribute:"light-theme"})],wi($,null,m,{kind:"accessor",name:"timestamp",static:!1,private:!1,access:{has:_=>"timestamp"in _,get:_=>_.timestamp,set:(_,P)=>{_.timestamp=P}},metadata:M},o,c),wi($,null,v,{kind:"accessor",name:"type",static:!1,private:!1,access:{has:_=>"type"in _,get:_=>_.type,set:(_,P)=>{_.type=P}},metadata:M},u,n),wi($,null,r,{kind:"accessor",name:"channelName",static:!1,private:!1,access:{has:_=>"channelName"in _,get:_=>_.channelName,set:(_,P)=>{_.channelName=P}},metadata:M},b,p),wi($,null,f,{kind:"accessor",name:"hasThread",static:!1,private:!1,access:{has:_=>"hasThread"in _,get:_=>_.hasThread,set:(_,P)=>{_.hasThread=P}},metadata:M},h,l),wi($,null,d,{kind:"accessor",name:"lightTheme",static:!1,private:!1,access:{has:_=>"lightTheme"in _,get:_=>_.lightTheme,set:(_,P)=>{_.lightTheme=P}},metadata:M},Q,ae),wi(null,t={value:e},i,{kind:"class",name:e.name,metadata:M},null,a),e=t.value,M&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:M})})(),pe($,"styles",ke`
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
	`),It(e,a),e})();var Xi=function(i,t,a,e,s,m){function o(d){if(d!==void 0&&typeof d!="function")throw new TypeError("Function expected");return d}for(var c=e.kind,v=c==="getter"?"get":c==="setter"?"set":"value",u=!t&&i?e.static?i:i.prototype:null,n=t||(u?Object.getOwnPropertyDescriptor(u,e.name):{}),r,b=!1,p=a.length-1;p>=0;p--){var f={};for(var h in e)f[h]=h==="access"?{}:e[h];for(var h in e.access)f.access[h]=e.access[h];f.addInitializer=function(d){if(b)throw new TypeError("Cannot add initializers after decoration has completed");m.push(o(d||null))};var l=(0,a[p])(c==="accessor"?{get:n.get,set:n.set}:n[v],f);if(c==="accessor"){if(l===void 0)continue;if(l===null||typeof l!="object")throw new TypeError("Object expected");(r=o(l.get))&&(n.get=r),(r=o(l.set))&&(n.set=r),(r=o(l.init))&&s.unshift(r)}else(r=o(l))&&(c==="field"?s.unshift(r):n[v]=r)}u&&Object.defineProperty(u,e.name,n),b=!0},ci=function(i,t,a){for(var e=arguments.length>2,s=0;s<t.length;s++)a=e?t[s].call(i,a):t[s].call(i);return e?a:void 0};let qn=(()=>{var f,h,l,d;let i=[Ce("discord-tenor-video")],t,a=[],e,s=we,m,o=[],c=[],v,u=[],n=[],r,b=[],p=[];return f=class extends s{constructor(){super(...arguments);z(this,h,ci(this,o,void 0));z(this,l,(ci(this,c),ci(this,u,void 0)));z(this,d,(ci(this,n),ci(this,b,void 0)));ci(this,p)}get url(){return y(this,h)}set url($){w(this,h,$)}get height(){return y(this,l)}set height($){w(this,l,$)}get width(){return y(this,d)}set width($){w(this,d,$)}render(){return k`
			<div class="discord-tenor-video-wrapper" height=${fe(this.height)} width=${fe(this.width)}>
				<a target="_blank" class="discord-tenor-video-original-link" href=${fe(this.url)}> </a>
				<video
					autoplay
					muted
					loop
					preload="auto"
					src=${fe(this.url)}
					class="discord-tenor-video"
					height=${fe(this.height)}
					width=${fe(this.width)}
				></video>
				<div class="discord-tenor-video-image-accessory">
					<div class="discord-tenor-video-gif-tag"></div>
				</div>
			</div>
		`}},h=new WeakMap,l=new WeakMap,d=new WeakMap,e=f,(()=>{const $=typeof Symbol=="function"&&Symbol.metadata?Object.create(s[Symbol.metadata]??null):void 0;m=[x()],v=[x({type:Number})],r=[x({type:Number})],Xi(f,null,m,{kind:"accessor",name:"url",static:!1,private:!1,access:{has:H=>"url"in H,get:H=>H.url,set:(H,L)=>{H.url=L}},metadata:$},o,c),Xi(f,null,v,{kind:"accessor",name:"height",static:!1,private:!1,access:{has:H=>"height"in H,get:H=>H.height,set:(H,L)=>{H.height=L}},metadata:$},u,n),Xi(f,null,r,{kind:"accessor",name:"width",static:!1,private:!1,access:{has:H=>"width"in H,get:H=>H.width,set:(H,L)=>{H.width=L}},metadata:$},b,p),Xi(null,t={value:e},i,{kind:"class",name:e.name,metadata:$},null,a),e=t.value,$&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:$})})(),pe(f,"styles",ke`
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
	`),ci(e,a),e})();var ea=function(i,t,a,e,s,m){function o(d){if(d!==void 0&&typeof d!="function")throw new TypeError("Function expected");return d}for(var c=e.kind,v=c==="getter"?"get":c==="setter"?"set":"value",u=!t&&i?e.static?i:i.prototype:null,n=t||(u?Object.getOwnPropertyDescriptor(u,e.name):{}),r,b=!1,p=a.length-1;p>=0;p--){var f={};for(var h in e)f[h]=h==="access"?{}:e[h];for(var h in e.access)f.access[h]=e.access[h];f.addInitializer=function(d){if(b)throw new TypeError("Cannot add initializers after decoration has completed");m.push(o(d||null))};var l=(0,a[p])(c==="accessor"?{get:n.get,set:n.set}:n[v],f);if(c==="accessor"){if(l===void 0)continue;if(l===null||typeof l!="object")throw new TypeError("Object expected");(r=o(l.get))&&(n.get=r),(r=o(l.set))&&(n.set=r),(r=o(l.init))&&s.unshift(r)}else(r=o(l))&&(c==="field"?s.unshift(r):n[v]=r)}u&&Object.defineProperty(u,e.name,n),b=!0},di=function(i,t,a){for(var e=arguments.length>2,s=0;s<t.length;s++)a=e?t[s].call(i,a):t[s].call(i);return e?a:void 0};let Yn=(()=>{var f,h,l,d;let i=[Ce("discord-thread")],t,a=[],e,s=we,m,o=[],c=[],v,u=[],n=[],r,b=[],p=[];return f=class extends s{constructor(){super(...arguments);z(this,h,di(this,o,"Thread"));z(this,l,(di(this,c),di(this,u,"See Thread")));z(this,d,(di(this,n),di(this,b,!1)));di(this,p)}get name(){return y(this,h)}set name($){w(this,h,$)}get cta(){return y(this,l)}set cta($){w(this,l,$)}get lightTheme(){return y(this,d)}set lightTheme($){w(this,d,$)}render(){return k`
			<div class="discord-thread-top">
				<span class="discord-thread-name">${this.name}</span>
				<span class="discord-thread-cta" aria-hidden="true"> ${this.cta} › </span>
			</div>
			<span class="discord-thread-bottom">
				<slot></slot>
			</span>
		`}},h=new WeakMap,l=new WeakMap,d=new WeakMap,e=f,(()=>{const $=typeof Symbol=="function"&&Symbol.metadata?Object.create(s[Symbol.metadata]??null):void 0;m=[x()],v=[x()],r=[Ae({context:Ne}),x({type:Boolean,reflect:!0,attribute:"light-theme"})],ea(f,null,m,{kind:"accessor",name:"name",static:!1,private:!1,access:{has:H=>"name"in H,get:H=>H.name,set:(H,L)=>{H.name=L}},metadata:$},o,c),ea(f,null,v,{kind:"accessor",name:"cta",static:!1,private:!1,access:{has:H=>"cta"in H,get:H=>H.cta,set:(H,L)=>{H.cta=L}},metadata:$},u,n),ea(f,null,r,{kind:"accessor",name:"lightTheme",static:!1,private:!1,access:{has:H=>"lightTheme"in H,get:H=>H.lightTheme,set:(H,L)=>{H.lightTheme=L}},metadata:$},b,p),ea(null,t={value:e},i,{kind:"class",name:e.name,metadata:$},null,a),e=t.value,$&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:$})})(),pe(f,"styles",ke`
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
	`),di(e,a),e})();var Lt=function(i,t,a,e,s,m){function o(d){if(d!==void 0&&typeof d!="function")throw new TypeError("Function expected");return d}for(var c=e.kind,v=c==="getter"?"get":c==="setter"?"set":"value",u=!t&&i?e.static?i:i.prototype:null,n=t||(u?Object.getOwnPropertyDescriptor(u,e.name):{}),r,b=!1,p=a.length-1;p>=0;p--){var f={};for(var h in e)f[h]=h==="access"?{}:e[h];for(var h in e.access)f.access[h]=e.access[h];f.addInitializer=function(d){if(b)throw new TypeError("Cannot add initializers after decoration has completed");m.push(o(d||null))};var l=(0,a[p])(c==="accessor"?{get:n.get,set:n.set}:n[v],f);if(c==="accessor"){if(l===void 0)continue;if(l===null||typeof l!="object")throw new TypeError("Object expected");(r=o(l.get))&&(n.get=r),(r=o(l.set))&&(n.set=r),(r=o(l.init))&&s.unshift(r)}else(r=o(l))&&(c==="field"?s.unshift(r):n[v]=r)}u&&Object.defineProperty(u,e.name,n),b=!0},Qe=function(i,t,a){for(var e=arguments.length>2,s=0;s<t.length;s++)a=e?t[s].call(i,a):t[s].call(i);return e?a:void 0};let Wn=(()=>{var ne,W,g,E,K,Y,A,R,q,B,F;let i=[Ce("discord-thread-message")],t,a=[],e,s=we,m,o=[],c=[],v,u=[],n=[],r,b=[],p=[],f,h=[],l=[],d,Q=[],ae=[],$,H=[],L=[],j,I=[],D=[],re,ge=[],M=[],_,P=[],ye=[],O,T=[],ie=[];return ne=class extends s{constructor(){super(...arguments);z(this,W,Qe(this,o,void 0));z(this,g,(Qe(this,c),Qe(this,u,"User")));z(this,E,(Qe(this,n),Qe(this,b,void 0)));z(this,K,(Qe(this,p),Qe(this,h,!1)));z(this,Y,(Qe(this,l),Qe(this,Q,!1)));z(this,A,(Qe(this,ae),Qe(this,H,!1)));z(this,R,(Qe(this,L),Qe(this,I,!1)));z(this,q,(Qe(this,D),Qe(this,ge,void 0)));z(this,B,(Qe(this,M),Qe(this,P,"1m ago")));z(this,F,(Qe(this,ye),Qe(this,T,!1)));Qe(this,ie)}get profile(){return y(this,W)}set profile(G){w(this,W,G)}get author(){return y(this,g)}set author(G){w(this,g,G)}get avatar(){return y(this,E)}set avatar(G){w(this,E,G)}get bot(){return y(this,K)}set bot(G){w(this,K,G)}get server(){return y(this,Y)}set server(G){w(this,Y,G)}get verified(){return y(this,A)}set verified(G){w(this,A,G)}get edited(){return y(this,R)}set edited(G){w(this,R,G)}get roleColor(){return y(this,q)}set roleColor(G){w(this,q,G)}get relativeTimestamp(){return y(this,B)}set relativeTimestamp(G){w(this,B,G)}get lightTheme(){return y(this,F)}set lightTheme(G){w(this,F,G)}resolveAvatar(G){return Mt[G]??G??Mt.default}render(){const G={author:this.author,bot:this.bot,verified:this.verified,server:this.server,roleColor:this.roleColor},S=Reflect.get($i,this.profile)??{},se={...G,...S,avatar:this.resolveAvatar(S.avatar??this.avatar)};return k`<img src=${fe(se.avatar)} class="discord-thread-message-avatar" alt=${fe(se.author)} />
			${X(se.bot&&!se.server,()=>k`<span class="discord-application-tag"> ${se.verified?kt():null} App </span>`)}
			${X(se.server&&!se.bot,()=>k`<span class="discord-application-tag">Server</span>`)}
			<span class="discord-thread-message-username" style=${qt({color:se.roleColor})}> ${se.author} </span>
			<div class="discord-thread-message-content">
				<slot></slot>
				${X(this.edited,()=>k`<span class="discord-message-edited">(edited)</span>`)}
			</div>
			<span class="discord-thread-message-timestamp">${this.relativeTimestamp}</span>`}},W=new WeakMap,g=new WeakMap,E=new WeakMap,K=new WeakMap,Y=new WeakMap,A=new WeakMap,R=new WeakMap,q=new WeakMap,B=new WeakMap,F=new WeakMap,e=ne,(()=>{const G=typeof Symbol=="function"&&Symbol.metadata?Object.create(s[Symbol.metadata]??null):void 0;m=[x()],v=[x()],r=[x()],f=[x({type:Boolean})],d=[x({type:Boolean})],$=[x({type:Boolean})],j=[x({type:Boolean})],re=[x({attribute:"role-color"})],_=[x({attribute:"relative-timestamp"})],O=[Ae({context:Ne}),x({type:Boolean,reflect:!0,attribute:"light-theme"})],Lt(ne,null,m,{kind:"accessor",name:"profile",static:!1,private:!1,access:{has:S=>"profile"in S,get:S=>S.profile,set:(S,se)=>{S.profile=se}},metadata:G},o,c),Lt(ne,null,v,{kind:"accessor",name:"author",static:!1,private:!1,access:{has:S=>"author"in S,get:S=>S.author,set:(S,se)=>{S.author=se}},metadata:G},u,n),Lt(ne,null,r,{kind:"accessor",name:"avatar",static:!1,private:!1,access:{has:S=>"avatar"in S,get:S=>S.avatar,set:(S,se)=>{S.avatar=se}},metadata:G},b,p),Lt(ne,null,f,{kind:"accessor",name:"bot",static:!1,private:!1,access:{has:S=>"bot"in S,get:S=>S.bot,set:(S,se)=>{S.bot=se}},metadata:G},h,l),Lt(ne,null,d,{kind:"accessor",name:"server",static:!1,private:!1,access:{has:S=>"server"in S,get:S=>S.server,set:(S,se)=>{S.server=se}},metadata:G},Q,ae),Lt(ne,null,$,{kind:"accessor",name:"verified",static:!1,private:!1,access:{has:S=>"verified"in S,get:S=>S.verified,set:(S,se)=>{S.verified=se}},metadata:G},H,L),Lt(ne,null,j,{kind:"accessor",name:"edited",static:!1,private:!1,access:{has:S=>"edited"in S,get:S=>S.edited,set:(S,se)=>{S.edited=se}},metadata:G},I,D),Lt(ne,null,re,{kind:"accessor",name:"roleColor",static:!1,private:!1,access:{has:S=>"roleColor"in S,get:S=>S.roleColor,set:(S,se)=>{S.roleColor=se}},metadata:G},ge,M),Lt(ne,null,_,{kind:"accessor",name:"relativeTimestamp",static:!1,private:!1,access:{has:S=>"relativeTimestamp"in S,get:S=>S.relativeTimestamp,set:(S,se)=>{S.relativeTimestamp=se}},metadata:G},P,ye),Lt(ne,null,O,{kind:"accessor",name:"lightTheme",static:!1,private:!1,access:{has:S=>"lightTheme"in S,get:S=>S.lightTheme,set:(S,se)=>{S.lightTheme=se}},metadata:G},T,ie),Lt(null,t={value:e},i,{kind:"class",name:e.name,metadata:G},null,a),e=t.value,G&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:G})})(),pe(ne,"styles",ke`
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
	`),Qe(e,a),e})();var Qn=function(i,t,a,e,s,m){function o(d){if(d!==void 0&&typeof d!="function")throw new TypeError("Function expected");return d}for(var c=e.kind,v=c==="getter"?"get":c==="setter"?"set":"value",u=!t&&i?e.static?i:i.prototype:null,n=t||(u?Object.getOwnPropertyDescriptor(u,e.name):{}),r,b=!1,p=a.length-1;p>=0;p--){var f={};for(var h in e)f[h]=h==="access"?{}:e[h];for(var h in e.access)f.access[h]=e.access[h];f.addInitializer=function(d){if(b)throw new TypeError("Cannot add initializers after decoration has completed");m.push(o(d||null))};var l=(0,a[p])(c==="accessor"?{get:n.get,set:n.set}:n[v],f);if(c==="accessor"){if(l===void 0)continue;if(l===null||typeof l!="object")throw new TypeError("Object expected");(r=o(l.get))&&(n.get=r),(r=o(l.set))&&(n.set=r),(r=o(l.init))&&s.unshift(r)}else(r=o(l))&&(c==="field"?s.unshift(r):n[v]=r)}u&&Object.defineProperty(u,e.name,n),b=!0},Gn=function(i,t,a){for(var e=arguments.length>2,s=0;s<t.length;s++)a=e?t[s].call(i,a):t[s].call(i);return e?a:void 0};let Jn=(()=>{var m;let i=[Ce("discord-time")],t,a=[],e,s=we;return m=class extends s{render(){return k`<slot></slot>`}},e=m,(()=>{const c=typeof Symbol=="function"&&Symbol.metadata?Object.create(s[Symbol.metadata]??null):void 0;Qn(null,t={value:e},i,{kind:"class",name:e.name,metadata:c},null,a),e=t.value,c&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:c})})(),pe(m,"styles",ke`
		:host {
			white-space: nowrap;
			background-color: #ffffff0f;
			border-radius: 3px;
			padding: 0 2px;
		}
	`),Gn(e,a),e})();var Kn=function(i,t,a,e,s,m){function o(d){if(d!==void 0&&typeof d!="function")throw new TypeError("Function expected");return d}for(var c=e.kind,v=c==="getter"?"get":c==="setter"?"set":"value",u=!t&&i?e.static?i:i.prototype:null,n=t||(u?Object.getOwnPropertyDescriptor(u,e.name):{}),r,b=!1,p=a.length-1;p>=0;p--){var f={};for(var h in e)f[h]=h==="access"?{}:e[h];for(var h in e.access)f.access[h]=e.access[h];f.addInitializer=function(d){if(b)throw new TypeError("Cannot add initializers after decoration has completed");m.push(o(d||null))};var l=(0,a[p])(c==="accessor"?{get:n.get,set:n.set}:n[v],f);if(c==="accessor"){if(l===void 0)continue;if(l===null||typeof l!="object")throw new TypeError("Object expected");(r=o(l.get))&&(n.get=r),(r=o(l.set))&&(n.set=r),(r=o(l.init))&&s.unshift(r)}else(r=o(l))&&(c==="field"?s.unshift(r):n[v]=r)}u&&Object.defineProperty(u,e.name,n),b=!0},Xn=function(i,t,a){for(var e=arguments.length>2,s=0;s<t.length;s++)a=e?t[s].call(i,a):t[s].call(i);return e?a:void 0};let ec=(()=>{var m;let i=[Ce("discord-underlined")],t,a=[],e,s=we;return m=class extends s{render(){return k`
			<u>
				<slot></slot>
			</u>
		`}},e=m,(()=>{const c=typeof Symbol=="function"&&Symbol.metadata?Object.create(s[Symbol.metadata]??null):void 0;Kn(null,t={value:e},i,{kind:"class",name:e.name,metadata:c},null,a),e=t.value,c&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:c}),Xn(e,a)})(),e})();var as=function(i,t,a,e,s,m){function o(d){if(d!==void 0&&typeof d!="function")throw new TypeError("Function expected");return d}for(var c=e.kind,v=c==="getter"?"get":c==="setter"?"set":"value",u=!t&&i?e.static?i:i.prototype:null,n=t||(u?Object.getOwnPropertyDescriptor(u,e.name):{}),r,b=!1,p=a.length-1;p>=0;p--){var f={};for(var h in e)f[h]=h==="access"?{}:e[h];for(var h in e.access)f.access[h]=e.access[h];f.addInitializer=function(d){if(b)throw new TypeError("Cannot add initializers after decoration has completed");m.push(o(d||null))};var l=(0,a[p])(c==="accessor"?{get:n.get,set:n.set}:n[v],f);if(c==="accessor"){if(l===void 0)continue;if(l===null||typeof l!="object")throw new TypeError("Object expected");(r=o(l.get))&&(n.get=r),(r=o(l.set))&&(n.set=r),(r=o(l.init))&&s.unshift(r)}else(r=o(l))&&(c==="field"?s.unshift(r):n[v]=r)}u&&Object.defineProperty(u,e.name,n),b=!0},ka=function(i,t,a){for(var e=arguments.length>2,s=0;s<t.length;s++)a=e?t[s].call(i,a):t[s].call(i);return e?a:void 0};let tc=(()=>{var v,u;let i=[Ce("discord-unordered-list")],t,a=[],e,s=we,m,o=[],c=[];return v=class extends s{constructor(){super(...arguments);z(this,u,ka(this,o,!1));ka(this,c)}get nested(){return y(this,u)}set nested(b){w(this,u,b)}checkChildren(){if(!Array.from(this.children).every(p=>{const f=p.tagName.toLowerCase();return f==="discord-list-item"||f==="discord-unordered-list"||f==="discord-ordered-list"}))throw new Yt("All direct children inside of a <discord-unordered-list> components must be one of <discord-unordered-list>, <discord-ordered-list>, or <discord-list-item>.")}willUpdate(){var b,p;(((b=this.parentElement)==null?void 0:b.tagName.toLowerCase())==="discord-unordered-list"||((p=this.parentElement)==null?void 0:p.tagName.toLowerCase())==="discord-ordered-list")&&(this.nested=!0)}render(){return this.checkChildren(),k`<ul>
			<slot></slot>
		</ul>`}},u=new WeakMap,e=v,(()=>{const b=typeof Symbol=="function"&&Symbol.metadata?Object.create(s[Symbol.metadata]??null):void 0;m=[x({type:Boolean,reflect:!0})],as(v,null,m,{kind:"accessor",name:"nested",static:!1,private:!1,access:{has:p=>"nested"in p,get:p=>p.nested,set:(p,f)=>{p.nested=f}},metadata:b},o,c),as(null,t={value:e},i,{kind:"class",name:e.name,metadata:b},null,a),e=t.value,b&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:b})})(),pe(v,"styles",ke`
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
	`),ka(e,a),e})();const ic=_e`
	<path fill="currentColor" d="M4 6c0-1.1.9-2 2-2h3a1 1 0 0 0 0-2H6a4 4 0 0 0-4 4v3a1 1 0 0 0 2 0V6ZM4 18c0 1.1.9 2 2 2h3a1 1 0 1 1 0 2H6a4 4 0 0 1-4-4v-3a1 1 0 1 1 2 0v3ZM18 4a2 2 0 0 1 2 2v3a1 1 0 1 0 2 0V6a4 4 0 0 0-4-4h-3a1 1 0 1 0 0 2h3ZM20 18a2 2 0 0 1-2 2h-3a1 1 0 1 0 0 2h3a4 4 0 0 0 4-4v-3a1 1 0 1 0-2 0v3Z"></path>
`;function ac(i={}){return k`<svg ${be(i)} aria-hidden="true" role="img" width="24" height="24" fill="none" viewBox="0 0 24 24">${ic}</svg>`}const sc=_e`
	<path fill="currentColor" d="M6 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H6ZM15 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-3Z"></path>
`;function rc(i={}){return k`<svg ${be(i)} aria-hidden="true" role="img" width="16" height="16" fill="none" viewBox="0 0 24 24">${sc}</svg>`}var ta=function(i,t,a,e,s,m){function o(d){if(d!==void 0&&typeof d!="function")throw new TypeError("Function expected");return d}for(var c=e.kind,v=c==="getter"?"get":c==="setter"?"set":"value",u=!t&&i?e.static?i:i.prototype:null,n=t||(u?Object.getOwnPropertyDescriptor(u,e.name):{}),r,b=!1,p=a.length-1;p>=0;p--){var f={};for(var h in e)f[h]=h==="access"?{}:e[h];for(var h in e.access)f.access[h]=e.access[h];f.addInitializer=function(d){if(b)throw new TypeError("Cannot add initializers after decoration has completed");m.push(o(d||null))};var l=(0,a[p])(c==="accessor"?{get:n.get,set:n.set}:n[v],f);if(c==="accessor"){if(l===void 0)continue;if(l===null||typeof l!="object")throw new TypeError("Object expected");(r=o(l.get))&&(n.get=r),(r=o(l.set))&&(n.set=r),(r=o(l.init))&&s.unshift(r)}else(r=o(l))&&(c==="field"?s.unshift(r):n[v]=r)}u&&Object.defineProperty(u,e.name,n),b=!0},hi=function(i,t,a){for(var e=arguments.length>2,s=0;s<t.length;s++)a=e?t[s].call(i,a):t[s].call(i);return e?a:void 0};let oc=(()=>{var f,h,l,d;let i=[Ce("discord-video-attachment")],t,a=[],e,s=ys,m,o=[],c=[],v,u=[],n=[],r,b=[],p=[];return f=class extends s{constructor(){super(...arguments);z(this,h,hi(this,o,void 0));z(this,l,(hi(this,c),hi(this,u,void 0)));z(this,d,(hi(this,n),hi(this,b,!1)));pe(this,"playPausePopAnimationContainerRef",(hi(this,p),ki()))}get href(){return y(this,h)}set href($){w(this,h,$)}get poster(){return y(this,l)}set poster($){w(this,l,$)}get lightTheme(){return y(this,d)}set lightTheme($){w(this,d,$)}async handleFullScreenClicked(){this.mediaComponentRef.value&&await this.mediaComponentRef.value.requestFullscreen()}handleHasStartedPlayingOrHasPaused(){this.playPausePopAnimationContainerRef.value&&this.playPausePopAnimationContainerRef.value.classList.add("discord-video-attachment-overlay-content-hidden"),globalThis.setTimeout(()=>{this.playPausePopAnimationContainerRef.value&&this.playPausePopAnimationContainerRef.value.classList.remove("discord-video-attachment-overlay-content-hidden")},200)}render(){return k`<div class="discord-media-attachment-non-visual-media-item-container">
			<div class="discord-video-attachment-one-by-one-grid">
				<div class="discord-media-attachment-mosaic-item-media">
					<div class="discord-video-attachment-image-wrapper">
						<div class="discord-video-attachment-loading-overlay">
							<div
								class=${Be({"discord-video-attachment-wrapper":!0,"discord-video-attachment-wrapper-light-theme":this.lightTheme})}
							>
								<video
									${Pt(this.mediaComponentRef)}
									class="discord-video-attachment-video-container"
									playsinline
									height="315"
									preload="metadata"
									width="550"
									role="button"
									poster=${fe(this.poster)}
									@play=${this.handleHasStartedPlayingOrHasPaused}
									@pause=${this.handleHasStartedPlayingOrHasPaused}
									@progress=${this.displayBufferedAmount}
									@click=${this.handleClickPlayPauseIcon}
									@ended=${this.handleEnded}
								>
									<source src=${fe(this.href)} />
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
											${X(this.hasEnded,()=>Es({class:"discord-media-attachment-control-icon"}),()=>X(this.isPlaying,()=>js({class:"discord-media-attachment-control-icon"}),()=>Hs({class:"discord-media-attachment-control-icon"})))}
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
													${Pt(this.seekSliderRef)}
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
												<div ${Pt(this.volumeControlRef)} class="discord-media-attachment-button-slider">
													<div
														class="discord-media-attachment-volume-vertical"
														@mouseenter=${this.handleVolumeVerticalEnter}
														@mouseleave=${this.handleVolumeVerticalLeave}
													>
														<input
															${Pt(this.volumeControlInputRef)}
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
														${X(this.currentVolume===0||this.isMuted,()=>Os({class:"discord-media-attachment-button-control-icon"}),()=>X(this.currentVolume<=.5,()=>Ds({class:"discord-media-attachment-button-control-icon"}),()=>Ss({class:"discord-media-attachment-button-control-icon"})))}
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
													${ac({class:"discord-media-attachment-button-control-icon"})}
												</div>
											</button>
										</div>
									</div>
								</div>
								<div class="discord-video-attachment-play-pause-pop">
									${rc({class:"discord-video-attachment-play-pause-pop-icon"})}
								</div>
								<div ${Pt(this.playPausePopAnimationContainerRef)}></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="discord-button-download-attachment">
				<a
					class="discord-link-download-attachment"
					aria-label="Download"
					href="${fe(this.href)}"
					rel="noreferrer noopener"
					target="_blank"
					role="button"
					tabindex="0"
				>
					${Da()}
				</a>
			</div>
		</div>`}},h=new WeakMap,l=new WeakMap,d=new WeakMap,e=f,(()=>{const $=typeof Symbol=="function"&&Symbol.metadata?Object.create(s[Symbol.metadata]??null):void 0;m=[x()],v=[x()],r=[Ae({context:Ne,subscribe:!0}),x({type:Boolean,reflect:!0,attribute:"light-theme"})],ta(f,null,m,{kind:"accessor",name:"href",static:!1,private:!1,access:{has:H=>"href"in H,get:H=>H.href,set:(H,L)=>{H.href=L}},metadata:$},o,c),ta(f,null,v,{kind:"accessor",name:"poster",static:!1,private:!1,access:{has:H=>"poster"in H,get:H=>H.poster,set:(H,L)=>{H.poster=L}},metadata:$},u,n),ta(f,null,r,{kind:"accessor",name:"lightTheme",static:!1,private:!1,access:{has:H=>"lightTheme"in H,get:H=>H.lightTheme,set:(H,L)=>{H.lightTheme=L}},metadata:$},b,p),ta(null,t={value:e},i,{kind:"class",name:e.name,metadata:$},null,a),e=t.value,$&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:$})})(),pe(f,"styles",[ws,zs,bs,ke`
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
		`]),hi(e,a),e})();/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const lc=new Set(["children","localName","ref","style","className"]),ss=new WeakMap,rs=(i,t,a,e,s)=>{const m=s==null?void 0:s[t];m===void 0?(i[t]=a,a==null&&t in HTMLElement.prototype&&i.removeAttribute(t)):a!==e&&((o,c,v)=>{let u=ss.get(o);u===void 0&&ss.set(o,u=new Map);let n=u.get(c);v!==void 0?n===void 0?(u.set(c,n={handleEvent:v}),o.addEventListener(c,n)):n.handleEvent=v:n!==void 0&&(u.delete(c),o.removeEventListener(c,n))})(i,m,a)},nc=({react:i,tagName:t,elementClass:a,events:e,displayName:s})=>{const m=new Set(Object.keys(e??{})),o=i.forwardRef(((c,v)=>{const u=i.useRef(new Map),n=i.useRef(null),r={},b={};for(const[p,f]of Object.entries(c))lc.has(p)?r[p==="className"?"class":p]=f:m.has(p)||p in a.prototype?b[p]=f:r[p]=f;return i.useLayoutEffect((()=>{if(n.current===null)return;const p=new Map;for(const f in b)rs(n.current,f,c[f],u.current.get(f),e),u.current.delete(f),p.set(f,c[f]);for(const[f,h]of u.current)rs(n.current,f,void 0,h,e);u.current=p})),i.useLayoutEffect((()=>{var p;(p=n.current)==null||p.removeAttribute("defer-hydration")}),[]),r.suppressHydrationWarning=!0,i.createElement(t,{...r,ref:i.useCallback((p=>{n.current=p,typeof v=="function"?v(p):v!==null&&(v.current=p)}),[v])})}));return o.displayName=s??a.name,o};var cc=Object.defineProperty,dc=(i,t)=>cc(i,"name",{value:t,configurable:!0});function Me(i,t){return nc({tagName:i,elementClass:t,react:ns})}dc(Me,"createReactComponent");Me("discord-action-row",_r);var xc=Me("discord-attachments",zr);Me("discord-audio-attachment",Lo);Me("discord-author-info",Qo);Me("discord-bold",Ko);Me("discord-button",tl);Me("discord-code",il);Me("discord-command",fl);Me("discord-custom-emoji",pl);var kc=Me("discord-embed",vl);Me("discord-embed-description",bl);var Mc=Me("discord-embed-field",yl),$c=Me("discord-embed-fields",xl);Me("discord-embed-footer",kl);Me("discord-file-attachment",Tl);Me("discord-header",Cl);Me("discord-image-attachment",jl);Me("discord-input-text",$a);Me("discord-invite",Vl);Me("discord-italic",Nl);Me("discord-link",Ho);Me("discord-list-item",Rl);Me("discord-mention",en);var Tc=Me("discord-message",sn),Cc=Me("discord-messages",jo);Me("discord-modal",cn);Me("discord-ordered-list",dn);Me("discord-poll",hn);Me("discord-poll-answer",mn);Me("discord-pre",un);Me("discord-quote",fn);Me("discord-reaction",pn);Me("discord-reactions",_n);var jc=Me("discord-reply",Ns);Me("discord-spoiler",bn);Me("discord-string-select-menu",yn);Me("discord-string-select-menu-option",zn);Me("discord-subscript",wn);Me("discord-system-message",Zn);Me("discord-tenor-video",qn);Me("discord-thread",Yn);Me("discord-thread-message",Wn);Me("discord-time",Jn);Me("discord-underlined",ec);Me("discord-unordered-list",tc);Me("discord-verified-author-tag",Po);Me("discord-video-attachment",oc);export{Cc as D,ns as R,ls as a,uc as b,Tc as c,jc as d,kc as e,$c as f,Ys as g,Mc as h,xc as i,Qs as r};
