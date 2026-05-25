(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function Xc(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const Me={},Ls=[],Jt=()=>{},p_=()=>!1,Ko=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),el=t=>t.startsWith("onUpdate:"),st=Object.assign,tl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},m_=Object.prototype.hasOwnProperty,Ae=(t,e)=>m_.call(t,e),ce=Array.isArray,Fs=t=>Go(t)==="[object Map]",of=t=>Go(t)==="[object Set]",fe=t=>typeof t=="function",Qe=t=>typeof t=="string",ar=t=>typeof t=="symbol",xe=t=>t!==null&&typeof t=="object",af=t=>(xe(t)||fe(t))&&fe(t.then)&&fe(t.catch),cf=Object.prototype.toString,Go=t=>cf.call(t),g_=t=>Go(t).slice(8,-1),lf=t=>Go(t)==="[object Object]",nl=t=>Qe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,io=Xc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Qo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},__=/-(\w)/g,nn=Qo(t=>t.replace(__,(e,n)=>n?n.toUpperCase():"")),v_=/\B([A-Z])/g,cr=Qo(t=>t.replace(v_,"-$1").toLowerCase()),Yo=Qo(t=>t.charAt(0).toUpperCase()+t.slice(1)),ja=Qo(t=>t?`on${Yo(t)}`:""),fs=(t,e)=>!Object.is(t,e),oo=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},To=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},lc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Ju;const uc=()=>Ju||(Ju=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function sl(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Qe(s)?w_(s):sl(s);if(r)for(const i in r)e[i]=r[i]}return e}else if(Qe(t)||xe(t))return t}const y_=/;(?![^(]*\))/g,E_=/:([^]+)/,I_=/\/\*[^]*?\*\//g;function w_(t){const e={};return t.replace(I_,"").split(y_).forEach(n=>{if(n){const s=n.split(E_);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function ps(t){let e="";if(Qe(t))e=t;else if(ce(t))for(let n=0;n<t.length;n++){const s=ps(t[n]);s&&(e+=s+" ")}else if(xe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const T_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",A_=Xc(T_);function uf(t){return!!t||t===""}const We=t=>Qe(t)?t:t==null?"":ce(t)||xe(t)&&(t.toString===cf||!fe(t.toString))?JSON.stringify(t,hf,2):String(t),hf=(t,e)=>e&&e.__v_isRef?hf(t,e.value):Fs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r],i)=>(n[$a(s,i)+" =>"]=r,n),{})}:of(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>$a(n))}:ar(e)?$a(e):xe(e)&&!ce(e)&&!lf(e)?String(e):e,$a=(t,e="")=>{var n;return ar(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};let Ut;class b_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ut,!e&&Ut&&(this.index=(Ut.scopes||(Ut.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Ut;try{return Ut=this,e()}finally{Ut=n}}}on(){Ut=this}off(){Ut=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function C_(t,e=Ut){e&&e.active&&e.effects.push(t)}function R_(){return Ut}const rl=t=>{const e=new Set(t);return e.w=0,e.n=0,e},df=t=>(t.w&Kn)>0,ff=t=>(t.n&Kn)>0,S_=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Kn},P_=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];df(r)&&!ff(r)?r.delete(t):e[n++]=r,r.w&=~Kn,r.n&=~Kn}e.length=n}},hc=new WeakMap;let Ur=0,Kn=1;const dc=30;let Bt;const us=Symbol(""),fc=Symbol("");class il{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,C_(this,s)}run(){if(!this.active)return this.fn();let e=Bt,n=Un;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Bt,Bt=this,Un=!0,Kn=1<<++Ur,Ur<=dc?S_(this):Zu(this),this.fn()}finally{Ur<=dc&&P_(this),Kn=1<<--Ur,Bt=this.parent,Un=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Bt===this?this.deferStop=!0:this.active&&(Zu(this),this.onStop&&this.onStop(),this.active=!1)}}function Zu(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Un=!0;const pf=[];function lr(){pf.push(Un),Un=!1}function ur(){const t=pf.pop();Un=t===void 0?!0:t}function At(t,e,n){if(Un&&Bt){let s=hc.get(t);s||hc.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=rl()),mf(r)}}function mf(t,e){let n=!1;Ur<=dc?ff(t)||(t.n|=Kn,n=!df(t)):n=!t.has(Bt),n&&(t.add(Bt),Bt.deps.push(t))}function mn(t,e,n,s,r,i){const a=hc.get(t);if(!a)return;let c=[];if(e==="clear")c=[...a.values()];else if(n==="length"&&ce(t)){const l=Number(s);a.forEach((h,f)=>{(f==="length"||!ar(f)&&f>=l)&&c.push(h)})}else switch(n!==void 0&&c.push(a.get(n)),e){case"add":ce(t)?nl(n)&&c.push(a.get("length")):(c.push(a.get(us)),Fs(t)&&c.push(a.get(fc)));break;case"delete":ce(t)||(c.push(a.get(us)),Fs(t)&&c.push(a.get(fc)));break;case"set":Fs(t)&&c.push(a.get(us));break}if(c.length===1)c[0]&&pc(c[0]);else{const l=[];for(const h of c)h&&l.push(...h);pc(rl(l))}}function pc(t,e){const n=ce(t)?t:[...t];for(const s of n)s.computed&&Xu(s);for(const s of n)s.computed||Xu(s)}function Xu(t,e){(t!==Bt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const k_=Xc("__proto__,__v_isRef,__isVue"),gf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ar)),eh=V_();function V_(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=Se(this);for(let i=0,a=this.length;i<a;i++)At(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(Se)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){lr();const s=Se(this)[e].apply(this,n);return ur(),s}}),t}function D_(t){const e=Se(this);return At(e,"has",t),e.hasOwnProperty(t)}class _f{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,s){const r=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?W_:If:i?Ef:yf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const a=ce(e);if(!r){if(a&&Ae(eh,n))return Reflect.get(eh,n,s);if(n==="hasOwnProperty")return D_}const c=Reflect.get(e,n,s);return(ar(n)?gf.has(n):k_(n))||(r||At(e,"get",n),i)?c:ft(c)?a&&nl(n)?c:c.value:xe(c)?r?Tf(c):yi(c):c}}class vf extends _f{constructor(e=!1){super(!1,e)}set(e,n,s,r){let i=e[n];if(Ks(i)&&ft(i)&&!ft(s))return!1;if(!this._shallow&&(!Ao(s)&&!Ks(s)&&(i=Se(i),s=Se(s)),!ce(e)&&ft(i)&&!ft(s)))return i.value=s,!0;const a=ce(e)&&nl(n)?Number(n)<e.length:Ae(e,n),c=Reflect.set(e,n,s,r);return e===Se(r)&&(a?fs(s,i)&&mn(e,"set",n,s):mn(e,"add",n,s)),c}deleteProperty(e,n){const s=Ae(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&s&&mn(e,"delete",n,void 0),r}has(e,n){const s=Reflect.has(e,n);return(!ar(n)||!gf.has(n))&&At(e,"has",n),s}ownKeys(e){return At(e,"iterate",ce(e)?"length":us),Reflect.ownKeys(e)}}class N_ extends _f{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const O_=new vf,M_=new N_,x_=new vf(!0),ol=t=>t,Jo=t=>Reflect.getPrototypeOf(t);function Gi(t,e,n=!1,s=!1){t=t.__v_raw;const r=Se(t),i=Se(e);n||(fs(e,i)&&At(r,"get",e),At(r,"get",i));const{has:a}=Jo(r),c=s?ol:n?ll:ni;if(a.call(r,e))return c(t.get(e));if(a.call(r,i))return c(t.get(i));t!==r&&t.get(e)}function Qi(t,e=!1){const n=this.__v_raw,s=Se(n),r=Se(t);return e||(fs(t,r)&&At(s,"has",t),At(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function Yi(t,e=!1){return t=t.__v_raw,!e&&At(Se(t),"iterate",us),Reflect.get(t,"size",t)}function th(t){t=Se(t);const e=Se(this);return Jo(e).has.call(e,t)||(e.add(t),mn(e,"add",t,t)),this}function nh(t,e){e=Se(e);const n=Se(this),{has:s,get:r}=Jo(n);let i=s.call(n,t);i||(t=Se(t),i=s.call(n,t));const a=r.call(n,t);return n.set(t,e),i?fs(e,a)&&mn(n,"set",t,e):mn(n,"add",t,e),this}function sh(t){const e=Se(this),{has:n,get:s}=Jo(e);let r=n.call(e,t);r||(t=Se(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&mn(e,"delete",t,void 0),i}function rh(){const t=Se(this),e=t.size!==0,n=t.clear();return e&&mn(t,"clear",void 0,void 0),n}function Ji(t,e){return function(s,r){const i=this,a=i.__v_raw,c=Se(a),l=e?ol:t?ll:ni;return!t&&At(c,"iterate",us),a.forEach((h,f)=>s.call(r,l(h),l(f),i))}}function Zi(t,e,n){return function(...s){const r=this.__v_raw,i=Se(r),a=Fs(i),c=t==="entries"||t===Symbol.iterator&&a,l=t==="keys"&&a,h=r[t](...s),f=n?ol:e?ll:ni;return!e&&At(i,"iterate",l?fc:us),{next(){const{value:m,done:g}=h.next();return g?{value:m,done:g}:{value:c?[f(m[0]),f(m[1])]:f(m),done:g}},[Symbol.iterator](){return this}}}}function Pn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function L_(){const t={get(i){return Gi(this,i)},get size(){return Yi(this)},has:Qi,add:th,set:nh,delete:sh,clear:rh,forEach:Ji(!1,!1)},e={get(i){return Gi(this,i,!1,!0)},get size(){return Yi(this)},has:Qi,add:th,set:nh,delete:sh,clear:rh,forEach:Ji(!1,!0)},n={get(i){return Gi(this,i,!0)},get size(){return Yi(this,!0)},has(i){return Qi.call(this,i,!0)},add:Pn("add"),set:Pn("set"),delete:Pn("delete"),clear:Pn("clear"),forEach:Ji(!0,!1)},s={get(i){return Gi(this,i,!0,!0)},get size(){return Yi(this,!0)},has(i){return Qi.call(this,i,!0)},add:Pn("add"),set:Pn("set"),delete:Pn("delete"),clear:Pn("clear"),forEach:Ji(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Zi(i,!1,!1),n[i]=Zi(i,!0,!1),e[i]=Zi(i,!1,!0),s[i]=Zi(i,!0,!0)}),[t,n,e,s]}const[F_,U_,B_,j_]=L_();function al(t,e){const n=e?t?j_:B_:t?U_:F_;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(Ae(n,r)&&r in s?n:s,r,i)}const $_={get:al(!1,!1)},H_={get:al(!1,!0)},q_={get:al(!0,!1)},yf=new WeakMap,Ef=new WeakMap,If=new WeakMap,W_=new WeakMap;function z_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function K_(t){return t.__v_skip||!Object.isExtensible(t)?0:z_(g_(t))}function yi(t){return Ks(t)?t:cl(t,!1,O_,$_,yf)}function wf(t){return cl(t,!1,x_,H_,Ef)}function Tf(t){return cl(t,!0,M_,q_,If)}function cl(t,e,n,s,r){if(!xe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const a=K_(t);if(a===0)return t;const c=new Proxy(t,a===2?s:n);return r.set(t,c),c}function Us(t){return Ks(t)?Us(t.__v_raw):!!(t&&t.__v_isReactive)}function Ks(t){return!!(t&&t.__v_isReadonly)}function Ao(t){return!!(t&&t.__v_isShallow)}function Af(t){return Us(t)||Ks(t)}function Se(t){const e=t&&t.__v_raw;return e?Se(e):t}function bf(t){return To(t,"__v_skip",!0),t}const ni=t=>xe(t)?yi(t):t,ll=t=>xe(t)?Tf(t):t;function Cf(t){Un&&Bt&&(t=Se(t),mf(t.dep||(t.dep=rl())))}function Rf(t,e){t=Se(t);const n=t.dep;n&&pc(n)}function ft(t){return!!(t&&t.__v_isRef===!0)}function Nt(t){return Sf(t,!1)}function G_(t){return Sf(t,!0)}function Sf(t,e){return ft(t)?t:new Q_(t,e)}class Q_{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Se(e),this._value=n?e:ni(e)}get value(){return Cf(this),this._value}set value(e){const n=this.__v_isShallow||Ao(e)||Ks(e);e=n?e:Se(e),fs(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:ni(e),Rf(this))}}function vt(t){return ft(t)?t.value:t}const Y_={get:(t,e,n)=>vt(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return ft(r)&&!ft(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Pf(t){return Us(t)?t:new Proxy(t,Y_)}class J_{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new il(e,()=>{this._dirty||(this._dirty=!0,Rf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=Se(this);return Cf(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Z_(t,e,n=!1){let s,r;const i=fe(t);return i?(s=t,r=Jt):(s=t.get,r=t.set),new J_(s,r,i||!r,n)}function Bn(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){Zo(i,e,n)}return r}function qt(t,e,n,s){if(fe(t)){const i=Bn(t,e,n,s);return i&&af(i)&&i.catch(a=>{Zo(a,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(qt(t[i],e,n,s));return r}function Zo(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const a=e.proxy,c=n;for(;i;){const h=i.ec;if(h){for(let f=0;f<h.length;f++)if(h[f](t,a,c)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){Bn(l,null,10,[t,a,c]);return}}X_(t,n,r,s)}function X_(t,e,n,s=!0){console.error(t)}let si=!1,mc=!1;const dt=[];let Yt=0;const Bs=[];let un=null,os=0;const kf=Promise.resolve();let ul=null;function Vf(t){const e=ul||kf;return t?e.then(this?t.bind(this):t):e}function e0(t){let e=Yt+1,n=dt.length;for(;e<n;){const s=e+n>>>1,r=dt[s],i=ri(r);i<t||i===t&&r.pre?e=s+1:n=s}return e}function hl(t){(!dt.length||!dt.includes(t,si&&t.allowRecurse?Yt+1:Yt))&&(t.id==null?dt.push(t):dt.splice(e0(t.id),0,t),Df())}function Df(){!si&&!mc&&(mc=!0,ul=kf.then(Of))}function t0(t){const e=dt.indexOf(t);e>Yt&&dt.splice(e,1)}function n0(t){ce(t)?Bs.push(...t):(!un||!un.includes(t,t.allowRecurse?os+1:os))&&Bs.push(t),Df()}function ih(t,e,n=si?Yt+1:0){for(;n<dt.length;n++){const s=dt[n];if(s&&s.pre){if(t&&s.id!==t.uid)continue;dt.splice(n,1),n--,s()}}}function Nf(t){if(Bs.length){const e=[...new Set(Bs)];if(Bs.length=0,un){un.push(...e);return}for(un=e,un.sort((n,s)=>ri(n)-ri(s)),os=0;os<un.length;os++)un[os]();un=null,os=0}}const ri=t=>t.id==null?1/0:t.id,s0=(t,e)=>{const n=ri(t)-ri(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Of(t){mc=!1,si=!0,dt.sort(s0);try{for(Yt=0;Yt<dt.length;Yt++){const e=dt[Yt];e&&e.active!==!1&&Bn(e,null,14)}}finally{Yt=0,dt.length=0,Nf(),si=!1,ul=null,(dt.length||Bs.length)&&Of()}}function r0(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Me;let r=n;const i=e.startsWith("update:"),a=i&&e.slice(7);if(a&&a in s){const f=`${a==="modelValue"?"model":a}Modifiers`,{number:m,trim:g}=s[f]||Me;g&&(r=n.map(w=>Qe(w)?w.trim():w)),m&&(r=n.map(lc))}let c,l=s[c=ja(e)]||s[c=ja(nn(e))];!l&&i&&(l=s[c=ja(cr(e))]),l&&qt(l,t,6,r);const h=s[c+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,qt(h,t,6,r)}}function Mf(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let a={},c=!1;if(!fe(t)){const l=h=>{const f=Mf(h,e,!0);f&&(c=!0,st(a,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(xe(t)&&s.set(t,null),null):(ce(i)?i.forEach(l=>a[l]=null):st(a,i),xe(t)&&s.set(t,a),a)}function Xo(t,e){return!t||!Ko(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ae(t,e[0].toLowerCase()+e.slice(1))||Ae(t,cr(e))||Ae(t,e))}let Mt=null,ea=null;function bo(t){const e=Mt;return Mt=t,ea=t&&t.type.__scopeId||null,e}function ta(t){ea=t}function na(){ea=null}function wt(t,e=Mt,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&gh(-1);const i=bo(e);let a;try{a=t(...r)}finally{bo(i),s._d&&gh(1)}return a};return s._n=!0,s._c=!0,s._d=!0,s}function Ha(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[a],slots:c,attrs:l,emit:h,render:f,renderCache:m,data:g,setupState:w,ctx:k,inheritAttrs:M}=t;let N,H;const L=bo(t);try{if(n.shapeFlag&4){const F=r||s,_e=F;N=Qt(f.call(_e,F,m,i,w,g,k)),H=l}else{const F=e;N=Qt(F.length>1?F(i,{attrs:l,slots:c,emit:h}):F(i,null)),H=e.props?l:i0(l)}}catch(F){Gr.length=0,Zo(F,t,1),N=ge(ms)}let W=N;if(H&&M!==!1){const F=Object.keys(H),{shapeFlag:_e}=W;F.length&&_e&7&&(a&&F.some(el)&&(H=o0(H,a)),W=Gs(W,H))}return n.dirs&&(W=Gs(W),W.dirs=W.dirs?W.dirs.concat(n.dirs):n.dirs),n.transition&&(W.transition=n.transition),N=W,bo(L),N}const i0=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ko(n))&&((e||(e={}))[n]=t[n]);return e},o0=(t,e)=>{const n={};for(const s in t)(!el(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function a0(t,e,n){const{props:s,children:r,component:i}=t,{props:a,children:c,patchFlag:l}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?oh(s,a,h):!!a;if(l&8){const f=e.dynamicProps;for(let m=0;m<f.length;m++){const g=f[m];if(a[g]!==s[g]&&!Xo(h,g))return!0}}}else return(r||c)&&(!c||!c.$stable)?!0:s===a?!1:s?a?oh(s,a,h):!0:!!a;return!1}function oh(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Xo(n,i))return!0}return!1}function c0({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const xf="components";function sa(t,e){return u0(xf,t,!0,e)||t}const l0=Symbol.for("v-ndc");function u0(t,e,n=!0,s=!1){const r=Mt||et;if(r){const i=r.type;if(t===xf){const c=tv(i,!1);if(c&&(c===e||c===nn(e)||c===Yo(nn(e))))return i}const a=ah(r[t]||i[t],e)||ah(r.appContext[t],e);return!a&&s?i:a}}function ah(t,e){return t&&(t[e]||t[nn(e)]||t[Yo(nn(e))])}const h0=t=>t.__isSuspense;function d0(t,e){e&&e.pendingBranch?ce(t)?e.effects.push(...t):e.effects.push(t):n0(t)}const Xi={};function ao(t,e,n){return Lf(t,e,n)}function Lf(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:a}=Me){var c;const l=R_()===((c=et)==null?void 0:c.scope)?et:null;let h,f=!1,m=!1;if(ft(t)?(h=()=>t.value,f=Ao(t)):Us(t)?(h=()=>t,s=!0):ce(t)?(m=!0,f=t.some(F=>Us(F)||Ao(F)),h=()=>t.map(F=>{if(ft(F))return F.value;if(Us(F))return cs(F);if(fe(F))return Bn(F,l,2)})):fe(t)?e?h=()=>Bn(t,l,2):h=()=>{if(!(l&&l.isUnmounted))return g&&g(),qt(t,l,3,[w])}:h=Jt,e&&s){const F=h;h=()=>cs(F())}let g,w=F=>{g=L.onStop=()=>{Bn(F,l,4),g=L.onStop=void 0}},k;if(oi)if(w=Jt,e?n&&qt(e,l,3,[h(),m?[]:void 0,w]):h(),r==="sync"){const F=rv();k=F.__watcherHandles||(F.__watcherHandles=[])}else return Jt;let M=m?new Array(t.length).fill(Xi):Xi;const N=()=>{if(L.active)if(e){const F=L.run();(s||f||(m?F.some((_e,re)=>fs(_e,M[re])):fs(F,M)))&&(g&&g(),qt(e,l,3,[F,M===Xi?void 0:m&&M[0]===Xi?[]:M,w]),M=F)}else L.run()};N.allowRecurse=!!e;let H;r==="sync"?H=N:r==="post"?H=()=>It(N,l&&l.suspense):(N.pre=!0,l&&(N.id=l.uid),H=()=>hl(N));const L=new il(h,H);e?n?N():M=L.run():r==="post"?It(L.run.bind(L),l&&l.suspense):L.run();const W=()=>{L.stop(),l&&l.scope&&tl(l.scope.effects,L)};return k&&k.push(W),W}function f0(t,e,n){const s=this.proxy,r=Qe(t)?t.includes(".")?Ff(s,t):()=>s[t]:t.bind(s,s);let i;fe(e)?i=e:(i=e.handler,n=e);const a=et;Qs(this);const c=Lf(r,i.bind(s),n);return a?Qs(a):hs(),c}function Ff(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function cs(t,e){if(!xe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),ft(t))cs(t.value,e);else if(ce(t))for(let n=0;n<t.length;n++)cs(t[n],e);else if(of(t)||Fs(t))t.forEach(n=>{cs(n,e)});else if(lf(t))for(const n in t)cs(t[n],e);return t}function St(t,e){const n=Mt;if(n===null)return t;const s=aa(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[a,c,l,h=Me]=e[i];a&&(fe(a)&&(a={mounted:a,updated:a}),a.deep&&cs(c),r.push({dir:a,instance:s,value:c,oldValue:void 0,arg:l,modifiers:h}))}return t}function ss(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let a=0;a<r.length;a++){const c=r[a];i&&(c.oldValue=i[a].value);let l=c.dir[s];l&&(lr(),qt(l,n,8,[t.el,c,t,e]),ur())}}/*! #__NO_SIDE_EFFECTS__ */function Uf(t,e){return fe(t)?st({name:t.name},e,{setup:t}):t}const co=t=>!!t.type.__asyncLoader,Bf=t=>t.type.__isKeepAlive;function p0(t,e){jf(t,"a",e)}function m0(t,e){jf(t,"da",e)}function jf(t,e,n=et){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(ra(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Bf(r.parent.vnode)&&g0(s,e,n,r),r=r.parent}}function g0(t,e,n,s){const r=ra(e,t,s,!0);dl(()=>{tl(s[e],r)},n)}function ra(t,e,n=et,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...a)=>{if(n.isUnmounted)return;lr(),Qs(n);const c=qt(e,n,t,a);return hs(),ur(),c});return s?r.unshift(i):r.push(i),i}}const wn=t=>(e,n=et)=>(!oi||t==="sp")&&ra(t,(...s)=>e(...s),n),_0=wn("bm"),$f=wn("m"),v0=wn("bu"),y0=wn("u"),E0=wn("bum"),dl=wn("um"),I0=wn("sp"),w0=wn("rtg"),T0=wn("rtc");function A0(t,e=et){ra("ec",t,e)}function js(t,e,n,s){let r;const i=n&&n[s];if(ce(t)||Qe(t)){r=new Array(t.length);for(let a=0,c=t.length;a<c;a++)r[a]=e(t[a],a,void 0,i&&i[a])}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,i&&i[a])}else if(xe(t))if(t[Symbol.iterator])r=Array.from(t,(a,c)=>e(a,c,void 0,i&&i[c]));else{const a=Object.keys(t);r=new Array(a.length);for(let c=0,l=a.length;c<l;c++){const h=a[c];r[c]=e(t[h],h,c,i&&i[c])}}else r=[];return n&&(n[s]=r),r}const gc=t=>t?Xf(t)?aa(t)||t.proxy:gc(t.parent):null,Kr=st(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>gc(t.parent),$root:t=>gc(t.root),$emit:t=>t.emit,$options:t=>fl(t),$forceUpdate:t=>t.f||(t.f=()=>hl(t.update)),$nextTick:t=>t.n||(t.n=Vf.bind(t.proxy)),$watch:t=>f0.bind(t)}),qa=(t,e)=>t!==Me&&!t.__isScriptSetup&&Ae(t,e),b0={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:a,type:c,appContext:l}=t;let h;if(e[0]!=="$"){const w=a[e];if(w!==void 0)switch(w){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(qa(s,e))return a[e]=1,s[e];if(r!==Me&&Ae(r,e))return a[e]=2,r[e];if((h=t.propsOptions[0])&&Ae(h,e))return a[e]=3,i[e];if(n!==Me&&Ae(n,e))return a[e]=4,n[e];_c&&(a[e]=0)}}const f=Kr[e];let m,g;if(f)return e==="$attrs"&&At(t,"get",e),f(t);if((m=c.__cssModules)&&(m=m[e]))return m;if(n!==Me&&Ae(n,e))return a[e]=4,n[e];if(g=l.config.globalProperties,Ae(g,e))return g[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return qa(r,e)?(r[e]=n,!0):s!==Me&&Ae(s,e)?(s[e]=n,!0):Ae(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},a){let c;return!!n[a]||t!==Me&&Ae(t,a)||qa(e,a)||(c=i[0])&&Ae(c,a)||Ae(s,a)||Ae(Kr,a)||Ae(r.config.globalProperties,a)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ae(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function ch(t){return ce(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let _c=!0;function C0(t){const e=fl(t),n=t.proxy,s=t.ctx;_c=!1,e.beforeCreate&&lh(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:a,watch:c,provide:l,inject:h,created:f,beforeMount:m,mounted:g,beforeUpdate:w,updated:k,activated:M,deactivated:N,beforeDestroy:H,beforeUnmount:L,destroyed:W,unmounted:F,render:_e,renderTracked:re,renderTriggered:A,errorCaptured:_,serverPrefetch:E,expose:T,inheritAttrs:b,components:S,directives:y,filters:mt}=e;if(h&&R0(h,s,null),a)for(const Te in a){const ve=a[Te];fe(ve)&&(s[Te]=ve.bind(n))}if(r){const Te=r.call(n,n);xe(Te)&&(t.data=yi(Te))}if(_c=!0,i)for(const Te in i){const ve=i[Te],Ct=fe(ve)?ve.bind(n,n):fe(ve.get)?ve.get.bind(n,n):Jt,xt=!fe(ve)&&fe(ve.set)?ve.set.bind(n):Jt,Dt=jt({get:Ct,set:xt});Object.defineProperty(s,Te,{enumerable:!0,configurable:!0,get:()=>Dt.value,set:Le=>Dt.value=Le})}if(c)for(const Te in c)Hf(c[Te],s,n,Te);if(l){const Te=fe(l)?l.call(n):l;Reflect.ownKeys(Te).forEach(ve=>{lo(ve,Te[ve])})}f&&lh(f,t,"c");function He(Te,ve){ce(ve)?ve.forEach(Ct=>Te(Ct.bind(n))):ve&&Te(ve.bind(n))}if(He(_0,m),He($f,g),He(v0,w),He(y0,k),He(p0,M),He(m0,N),He(A0,_),He(T0,re),He(w0,A),He(E0,L),He(dl,F),He(I0,E),ce(T))if(T.length){const Te=t.exposed||(t.exposed={});T.forEach(ve=>{Object.defineProperty(Te,ve,{get:()=>n[ve],set:Ct=>n[ve]=Ct})})}else t.exposed||(t.exposed={});_e&&t.render===Jt&&(t.render=_e),b!=null&&(t.inheritAttrs=b),S&&(t.components=S),y&&(t.directives=y)}function R0(t,e,n=Jt){ce(t)&&(t=vc(t));for(const s in t){const r=t[s];let i;xe(r)?"default"in r?i=gn(r.from||s,r.default,!0):i=gn(r.from||s):i=gn(r),ft(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[s]=i}}function lh(t,e,n){qt(ce(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Hf(t,e,n,s){const r=s.includes(".")?Ff(n,s):()=>n[s];if(Qe(t)){const i=e[t];fe(i)&&ao(r,i)}else if(fe(t))ao(r,t.bind(n));else if(xe(t))if(ce(t))t.forEach(i=>Hf(i,e,n,s));else{const i=fe(t.handler)?t.handler.bind(n):e[t.handler];fe(i)&&ao(r,i,t)}}function fl(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:a}}=t.appContext,c=i.get(e);let l;return c?l=c:!r.length&&!n&&!s?l=e:(l={},r.length&&r.forEach(h=>Co(l,h,a,!0)),Co(l,e,a)),xe(e)&&i.set(e,l),l}function Co(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Co(t,i,n,!0),r&&r.forEach(a=>Co(t,a,n,!0));for(const a in e)if(!(s&&a==="expose")){const c=S0[a]||n&&n[a];t[a]=c?c(t[a],e[a]):e[a]}return t}const S0={data:uh,props:hh,emits:hh,methods:Br,computed:Br,beforeCreate:_t,created:_t,beforeMount:_t,mounted:_t,beforeUpdate:_t,updated:_t,beforeDestroy:_t,beforeUnmount:_t,destroyed:_t,unmounted:_t,activated:_t,deactivated:_t,errorCaptured:_t,serverPrefetch:_t,components:Br,directives:Br,watch:k0,provide:uh,inject:P0};function uh(t,e){return e?t?function(){return st(fe(t)?t.call(this,this):t,fe(e)?e.call(this,this):e)}:e:t}function P0(t,e){return Br(vc(t),vc(e))}function vc(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function _t(t,e){return t?[...new Set([].concat(t,e))]:e}function Br(t,e){return t?st(Object.create(null),t,e):e}function hh(t,e){return t?ce(t)&&ce(e)?[...new Set([...t,...e])]:st(Object.create(null),ch(t),ch(e??{})):e}function k0(t,e){if(!t)return e;if(!e)return t;const n=st(Object.create(null),t);for(const s in e)n[s]=_t(t[s],e[s]);return n}function qf(){return{app:null,config:{isNativeTag:p_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let V0=0;function D0(t,e){return function(s,r=null){fe(s)||(s=st({},s)),r!=null&&!xe(r)&&(r=null);const i=qf(),a=new WeakSet;let c=!1;const l=i.app={_uid:V0++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:iv,get config(){return i.config},set config(h){},use(h,...f){return a.has(h)||(h&&fe(h.install)?(a.add(h),h.install(l,...f)):fe(h)&&(a.add(h),h(l,...f))),l},mixin(h){return i.mixins.includes(h)||i.mixins.push(h),l},component(h,f){return f?(i.components[h]=f,l):i.components[h]},directive(h,f){return f?(i.directives[h]=f,l):i.directives[h]},mount(h,f,m){if(!c){const g=ge(s,r);return g.appContext=i,f&&e?e(g,h):t(g,h,m),c=!0,l._container=h,h.__vue_app__=l,aa(g.component)||g.component.proxy}},unmount(){c&&(t(null,l._container),delete l._container.__vue_app__)},provide(h,f){return i.provides[h]=f,l},runWithContext(h){Ro=l;try{return h()}finally{Ro=null}}};return l}}let Ro=null;function lo(t,e){if(et){let n=et.provides;const s=et.parent&&et.parent.provides;s===n&&(n=et.provides=Object.create(s)),n[t]=e}}function gn(t,e,n=!1){const s=et||Mt;if(s||Ro){const r=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:Ro._context.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&fe(e)?e.call(s&&s.proxy):e}}function N0(t,e,n,s=!1){const r={},i={};To(i,oa,1),t.propsDefaults=Object.create(null),Wf(t,e,r,i);for(const a in t.propsOptions[0])a in r||(r[a]=void 0);n?t.props=s?r:wf(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function O0(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:a}}=t,c=Se(r),[l]=t.propsOptions;let h=!1;if((s||a>0)&&!(a&16)){if(a&8){const f=t.vnode.dynamicProps;for(let m=0;m<f.length;m++){let g=f[m];if(Xo(t.emitsOptions,g))continue;const w=e[g];if(l)if(Ae(i,g))w!==i[g]&&(i[g]=w,h=!0);else{const k=nn(g);r[k]=yc(l,c,k,w,t,!1)}else w!==i[g]&&(i[g]=w,h=!0)}}}else{Wf(t,e,r,i)&&(h=!0);let f;for(const m in c)(!e||!Ae(e,m)&&((f=cr(m))===m||!Ae(e,f)))&&(l?n&&(n[m]!==void 0||n[f]!==void 0)&&(r[m]=yc(l,c,m,void 0,t,!0)):delete r[m]);if(i!==c)for(const m in i)(!e||!Ae(e,m))&&(delete i[m],h=!0)}h&&mn(t,"set","$attrs")}function Wf(t,e,n,s){const[r,i]=t.propsOptions;let a=!1,c;if(e)for(let l in e){if(io(l))continue;const h=e[l];let f;r&&Ae(r,f=nn(l))?!i||!i.includes(f)?n[f]=h:(c||(c={}))[f]=h:Xo(t.emitsOptions,l)||(!(l in s)||h!==s[l])&&(s[l]=h,a=!0)}if(i){const l=Se(n),h=c||Me;for(let f=0;f<i.length;f++){const m=i[f];n[m]=yc(r,l,m,h[m],t,!Ae(h,m))}}return a}function yc(t,e,n,s,r,i){const a=t[n];if(a!=null){const c=Ae(a,"default");if(c&&s===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&fe(l)){const{propsDefaults:h}=r;n in h?s=h[n]:(Qs(r),s=h[n]=l.call(null,e),hs())}else s=l}a[0]&&(i&&!c?s=!1:a[1]&&(s===""||s===cr(n))&&(s=!0))}return s}function zf(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,a={},c=[];let l=!1;if(!fe(t)){const f=m=>{l=!0;const[g,w]=zf(m,e,!0);st(a,g),w&&c.push(...w)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!l)return xe(t)&&s.set(t,Ls),Ls;if(ce(i))for(let f=0;f<i.length;f++){const m=nn(i[f]);dh(m)&&(a[m]=Me)}else if(i)for(const f in i){const m=nn(f);if(dh(m)){const g=i[f],w=a[m]=ce(g)||fe(g)?{type:g}:st({},g);if(w){const k=mh(Boolean,w.type),M=mh(String,w.type);w[0]=k>-1,w[1]=M<0||k<M,(k>-1||Ae(w,"default"))&&c.push(m)}}}const h=[a,c];return xe(t)&&s.set(t,h),h}function dh(t){return t[0]!=="$"}function fh(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function ph(t,e){return fh(t)===fh(e)}function mh(t,e){return ce(e)?e.findIndex(n=>ph(n,t)):fe(e)&&ph(e,t)?0:-1}const Kf=t=>t[0]==="_"||t==="$stable",pl=t=>ce(t)?t.map(Qt):[Qt(t)],M0=(t,e,n)=>{if(e._n)return e;const s=wt((...r)=>pl(e(...r)),n);return s._c=!1,s},Gf=(t,e,n)=>{const s=t._ctx;for(const r in t){if(Kf(r))continue;const i=t[r];if(fe(i))e[r]=M0(r,i,s);else if(i!=null){const a=pl(i);e[r]=()=>a}}},Qf=(t,e)=>{const n=pl(e);t.slots.default=()=>n},x0=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Se(e),To(e,"_",n)):Gf(e,t.slots={})}else t.slots={},e&&Qf(t,e);To(t.slots,oa,1)},L0=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,a=Me;if(s.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:(st(r,e),!n&&c===1&&delete r._):(i=!e.$stable,Gf(e,r)),a=e}else e&&(Qf(t,e),a={default:1});if(i)for(const c in r)!Kf(c)&&a[c]==null&&delete r[c]};function Ec(t,e,n,s,r=!1){if(ce(t)){t.forEach((g,w)=>Ec(g,e&&(ce(e)?e[w]:e),n,s,r));return}if(co(s)&&!r)return;const i=s.shapeFlag&4?aa(s.component)||s.component.proxy:s.el,a=r?null:i,{i:c,r:l}=t,h=e&&e.r,f=c.refs===Me?c.refs={}:c.refs,m=c.setupState;if(h!=null&&h!==l&&(Qe(h)?(f[h]=null,Ae(m,h)&&(m[h]=null)):ft(h)&&(h.value=null)),fe(l))Bn(l,c,12,[a,f]);else{const g=Qe(l),w=ft(l);if(g||w){const k=()=>{if(t.f){const M=g?Ae(m,l)?m[l]:f[l]:l.value;r?ce(M)&&tl(M,i):ce(M)?M.includes(i)||M.push(i):g?(f[l]=[i],Ae(m,l)&&(m[l]=f[l])):(l.value=[i],t.k&&(f[t.k]=l.value))}else g?(f[l]=a,Ae(m,l)&&(m[l]=a)):w&&(l.value=a,t.k&&(f[t.k]=a))};a?(k.id=-1,It(k,n)):k()}}}const It=d0;function F0(t){return U0(t)}function U0(t,e){const n=uc();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:a,createText:c,createComment:l,setText:h,setElementText:f,parentNode:m,nextSibling:g,setScopeId:w=Jt,insertStaticContent:k}=t,M=(v,I,R,D=null,x=null,U=null,Q=!1,q=null,K=!!I.dynamicChildren)=>{if(v===I)return;v&&!Nr(v,I)&&(D=O(v),Le(v,x,U,!0),v=null),I.patchFlag===-2&&(K=!1,I.dynamicChildren=null);const{type:j,ref:te,shapeFlag:J}=I;switch(j){case ia:N(v,I,R,D);break;case ms:H(v,I,R,D);break;case uo:v==null&&L(I,R,D,Q);break;case ze:S(v,I,R,D,x,U,Q,q,K);break;default:J&1?_e(v,I,R,D,x,U,Q,q,K):J&6?y(v,I,R,D,x,U,Q,q,K):(J&64||J&128)&&j.process(v,I,R,D,x,U,Q,q,K,G)}te!=null&&x&&Ec(te,v&&v.ref,U,I||v,!I)},N=(v,I,R,D)=>{if(v==null)s(I.el=c(I.children),R,D);else{const x=I.el=v.el;I.children!==v.children&&h(x,I.children)}},H=(v,I,R,D)=>{v==null?s(I.el=l(I.children||""),R,D):I.el=v.el},L=(v,I,R,D)=>{[v.el,v.anchor]=k(v.children,I,R,D,v.el,v.anchor)},W=({el:v,anchor:I},R,D)=>{let x;for(;v&&v!==I;)x=g(v),s(v,R,D),v=x;s(I,R,D)},F=({el:v,anchor:I})=>{let R;for(;v&&v!==I;)R=g(v),r(v),v=R;r(I)},_e=(v,I,R,D,x,U,Q,q,K)=>{Q=Q||I.type==="svg",v==null?re(I,R,D,x,U,Q,q,K):E(v,I,x,U,Q,q,K)},re=(v,I,R,D,x,U,Q,q)=>{let K,j;const{type:te,props:J,shapeFlag:ee,transition:oe,dirs:me}=v;if(K=v.el=a(v.type,U,J&&J.is,J),ee&8?f(K,v.children):ee&16&&_(v.children,K,null,D,x,U&&te!=="foreignObject",Q,q),me&&ss(v,null,D,"created"),A(K,v,v.scopeId,Q,D),J){for(const le in J)le!=="value"&&!io(le)&&i(K,le,null,J[le],U,v.children,D,x,Ye);"value"in J&&i(K,"value",null,J.value),(j=J.onVnodeBeforeMount)&&Gt(j,D,v)}me&&ss(v,null,D,"beforeMount");const de=B0(x,oe);de&&oe.beforeEnter(K),s(K,I,R),((j=J&&J.onVnodeMounted)||de||me)&&It(()=>{j&&Gt(j,D,v),de&&oe.enter(K),me&&ss(v,null,D,"mounted")},x)},A=(v,I,R,D,x)=>{if(R&&w(v,R),D)for(let U=0;U<D.length;U++)w(v,D[U]);if(x){let U=x.subTree;if(I===U){const Q=x.vnode;A(v,Q,Q.scopeId,Q.slotScopeIds,x.parent)}}},_=(v,I,R,D,x,U,Q,q,K=0)=>{for(let j=K;j<v.length;j++){const te=v[j]=q?Dn(v[j]):Qt(v[j]);M(null,te,I,R,D,x,U,Q,q)}},E=(v,I,R,D,x,U,Q)=>{const q=I.el=v.el;let{patchFlag:K,dynamicChildren:j,dirs:te}=I;K|=v.patchFlag&16;const J=v.props||Me,ee=I.props||Me;let oe;R&&rs(R,!1),(oe=ee.onVnodeBeforeUpdate)&&Gt(oe,R,I,v),te&&ss(I,v,R,"beforeUpdate"),R&&rs(R,!0);const me=x&&I.type!=="foreignObject";if(j?T(v.dynamicChildren,j,q,R,D,me,U):Q||ve(v,I,q,null,R,D,me,U,!1),K>0){if(K&16)b(q,I,J,ee,R,D,x);else if(K&2&&J.class!==ee.class&&i(q,"class",null,ee.class,x),K&4&&i(q,"style",J.style,ee.style,x),K&8){const de=I.dynamicProps;for(let le=0;le<de.length;le++){const Ne=de[le],yt=J[Ne],on=ee[Ne];(on!==yt||Ne==="value")&&i(q,Ne,yt,on,x,v.children,R,D,Ye)}}K&1&&v.children!==I.children&&f(q,I.children)}else!Q&&j==null&&b(q,I,J,ee,R,D,x);((oe=ee.onVnodeUpdated)||te)&&It(()=>{oe&&Gt(oe,R,I,v),te&&ss(I,v,R,"updated")},D)},T=(v,I,R,D,x,U,Q)=>{for(let q=0;q<I.length;q++){const K=v[q],j=I[q],te=K.el&&(K.type===ze||!Nr(K,j)||K.shapeFlag&70)?m(K.el):R;M(K,j,te,null,D,x,U,Q,!0)}},b=(v,I,R,D,x,U,Q)=>{if(R!==D){if(R!==Me)for(const q in R)!io(q)&&!(q in D)&&i(v,q,R[q],null,Q,I.children,x,U,Ye);for(const q in D){if(io(q))continue;const K=D[q],j=R[q];K!==j&&q!=="value"&&i(v,q,j,K,Q,I.children,x,U,Ye)}"value"in D&&i(v,"value",R.value,D.value)}},S=(v,I,R,D,x,U,Q,q,K)=>{const j=I.el=v?v.el:c(""),te=I.anchor=v?v.anchor:c("");let{patchFlag:J,dynamicChildren:ee,slotScopeIds:oe}=I;oe&&(q=q?q.concat(oe):oe),v==null?(s(j,R,D),s(te,R,D),_(I.children,R,te,x,U,Q,q,K)):J>0&&J&64&&ee&&v.dynamicChildren?(T(v.dynamicChildren,ee,R,x,U,Q,q),(I.key!=null||x&&I===x.subTree)&&Yf(v,I,!0)):ve(v,I,R,te,x,U,Q,q,K)},y=(v,I,R,D,x,U,Q,q,K)=>{I.slotScopeIds=q,v==null?I.shapeFlag&512?x.ctx.activate(I,R,D,Q,K):mt(I,R,D,x,U,Q,K):Vt(v,I,K)},mt=(v,I,R,D,x,U,Q)=>{const q=v.component=Y0(v,D,x);if(Bf(v)&&(q.ctx.renderer=G),J0(q),q.asyncDep){if(x&&x.registerDep(q,He),!v.el){const K=q.subTree=ge(ms);H(null,K,I,R)}return}He(q,v,I,R,x,U,Q)},Vt=(v,I,R)=>{const D=I.component=v.component;if(a0(v,I,R))if(D.asyncDep&&!D.asyncResolved){Te(D,I,R);return}else D.next=I,t0(D.update),D.update();else I.el=v.el,D.vnode=I},He=(v,I,R,D,x,U,Q)=>{const q=()=>{if(v.isMounted){let{next:te,bu:J,u:ee,parent:oe,vnode:me}=v,de=te,le;rs(v,!1),te?(te.el=me.el,Te(v,te,Q)):te=me,J&&oo(J),(le=te.props&&te.props.onVnodeBeforeUpdate)&&Gt(le,oe,te,me),rs(v,!0);const Ne=Ha(v),yt=v.subTree;v.subTree=Ne,M(yt,Ne,m(yt.el),O(yt),v,x,U),te.el=Ne.el,de===null&&c0(v,Ne.el),ee&&It(ee,x),(le=te.props&&te.props.onVnodeUpdated)&&It(()=>Gt(le,oe,te,me),x)}else{let te;const{el:J,props:ee}=I,{bm:oe,m:me,parent:de}=v,le=co(I);if(rs(v,!1),oe&&oo(oe),!le&&(te=ee&&ee.onVnodeBeforeMount)&&Gt(te,de,I),rs(v,!0),J&&Ee){const Ne=()=>{v.subTree=Ha(v),Ee(J,v.subTree,v,x,null)};le?I.type.__asyncLoader().then(()=>!v.isUnmounted&&Ne()):Ne()}else{const Ne=v.subTree=Ha(v);M(null,Ne,R,D,v,x,U),I.el=Ne.el}if(me&&It(me,x),!le&&(te=ee&&ee.onVnodeMounted)){const Ne=I;It(()=>Gt(te,de,Ne),x)}(I.shapeFlag&256||de&&co(de.vnode)&&de.vnode.shapeFlag&256)&&v.a&&It(v.a,x),v.isMounted=!0,I=R=D=null}},K=v.effect=new il(q,()=>hl(j),v.scope),j=v.update=()=>K.run();j.id=v.uid,rs(v,!0),j()},Te=(v,I,R)=>{I.component=v;const D=v.vnode.props;v.vnode=I,v.next=null,O0(v,I.props,D,R),L0(v,I.children,R),lr(),ih(v),ur()},ve=(v,I,R,D,x,U,Q,q,K=!1)=>{const j=v&&v.children,te=v?v.shapeFlag:0,J=I.children,{patchFlag:ee,shapeFlag:oe}=I;if(ee>0){if(ee&128){xt(j,J,R,D,x,U,Q,q,K);return}else if(ee&256){Ct(j,J,R,D,x,U,Q,q,K);return}}oe&8?(te&16&&Ye(j,x,U),J!==j&&f(R,J)):te&16?oe&16?xt(j,J,R,D,x,U,Q,q,K):Ye(j,x,U,!0):(te&8&&f(R,""),oe&16&&_(J,R,D,x,U,Q,q,K))},Ct=(v,I,R,D,x,U,Q,q,K)=>{v=v||Ls,I=I||Ls;const j=v.length,te=I.length,J=Math.min(j,te);let ee;for(ee=0;ee<J;ee++){const oe=I[ee]=K?Dn(I[ee]):Qt(I[ee]);M(v[ee],oe,R,null,x,U,Q,q,K)}j>te?Ye(v,x,U,!0,!1,J):_(I,R,D,x,U,Q,q,K,J)},xt=(v,I,R,D,x,U,Q,q,K)=>{let j=0;const te=I.length;let J=v.length-1,ee=te-1;for(;j<=J&&j<=ee;){const oe=v[j],me=I[j]=K?Dn(I[j]):Qt(I[j]);if(Nr(oe,me))M(oe,me,R,null,x,U,Q,q,K);else break;j++}for(;j<=J&&j<=ee;){const oe=v[J],me=I[ee]=K?Dn(I[ee]):Qt(I[ee]);if(Nr(oe,me))M(oe,me,R,null,x,U,Q,q,K);else break;J--,ee--}if(j>J){if(j<=ee){const oe=ee+1,me=oe<te?I[oe].el:D;for(;j<=ee;)M(null,I[j]=K?Dn(I[j]):Qt(I[j]),R,me,x,U,Q,q,K),j++}}else if(j>ee)for(;j<=J;)Le(v[j],x,U,!0),j++;else{const oe=j,me=j,de=new Map;for(j=me;j<=ee;j++){const it=I[j]=K?Dn(I[j]):Qt(I[j]);it.key!=null&&de.set(it.key,j)}let le,Ne=0;const yt=ee-me+1;let on=!1,Vi=0;const Lt=new Array(yt);for(j=0;j<yt;j++)Lt[j]=0;for(j=oe;j<=J;j++){const it=v[j];if(Ne>=yt){Le(it,x,U,!0);continue}let Et;if(it.key!=null)Et=de.get(it.key);else for(le=me;le<=ee;le++)if(Lt[le-me]===0&&Nr(it,I[le])){Et=le;break}Et===void 0?Le(it,x,U,!0):(Lt[Et-me]=j+1,Et>=Vi?Vi=Et:on=!0,M(it,I[Et],R,null,x,U,Q,q,K),Ne++)}const Er=on?j0(Lt):Ls;for(le=Er.length-1,j=yt-1;j>=0;j--){const it=me+j,Et=I[it],Di=it+1<te?I[it+1].el:D;Lt[j]===0?M(null,Et,R,Di,x,U,Q,q,K):on&&(le<0||j!==Er[le]?Dt(Et,R,Di,2):le--)}}},Dt=(v,I,R,D,x=null)=>{const{el:U,type:Q,transition:q,children:K,shapeFlag:j}=v;if(j&6){Dt(v.component.subTree,I,R,D);return}if(j&128){v.suspense.move(I,R,D);return}if(j&64){Q.move(v,I,R,G);return}if(Q===ze){s(U,I,R);for(let J=0;J<K.length;J++)Dt(K[J],I,R,D);s(v.anchor,I,R);return}if(Q===uo){W(v,I,R);return}if(D!==2&&j&1&&q)if(D===0)q.beforeEnter(U),s(U,I,R),It(()=>q.enter(U),x);else{const{leave:J,delayLeave:ee,afterLeave:oe}=q,me=()=>s(U,I,R),de=()=>{J(U,()=>{me(),oe&&oe()})};ee?ee(U,me,de):de()}else s(U,I,R)},Le=(v,I,R,D=!1,x=!1)=>{const{type:U,props:Q,ref:q,children:K,dynamicChildren:j,shapeFlag:te,patchFlag:J,dirs:ee}=v;if(q!=null&&Ec(q,null,R,v,!0),te&256){I.ctx.deactivate(v);return}const oe=te&1&&ee,me=!co(v);let de;if(me&&(de=Q&&Q.onVnodeBeforeUnmount)&&Gt(de,I,v),te&6)Kt(v.component,R,D);else{if(te&128){v.suspense.unmount(R,D);return}oe&&ss(v,null,I,"beforeUnmount"),te&64?v.type.remove(v,I,R,x,G,D):j&&(U!==ze||J>0&&J&64)?Ye(j,I,R,!1,!0):(U===ze&&J&384||!x&&te&16)&&Ye(K,I,R),D&&Fe(v)}(me&&(de=Q&&Q.onVnodeUnmounted)||oe)&&It(()=>{de&&Gt(de,I,v),oe&&ss(v,null,I,"unmounted")},R)},Fe=v=>{const{type:I,el:R,anchor:D,transition:x}=v;if(I===ze){bn(R,D);return}if(I===uo){F(v);return}const U=()=>{r(R),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(v.shapeFlag&1&&x&&!x.persisted){const{leave:Q,delayLeave:q}=x,K=()=>Q(R,U);q?q(v.el,U,K):K()}else U()},bn=(v,I)=>{let R;for(;v!==I;)R=g(v),r(v),v=R;r(I)},Kt=(v,I,R)=>{const{bum:D,scope:x,update:U,subTree:Q,um:q}=v;D&&oo(D),x.stop(),U&&(U.active=!1,Le(Q,v,I,R)),q&&It(q,I),It(()=>{v.isUnmounted=!0},I),I&&I.pendingBranch&&!I.isUnmounted&&v.asyncDep&&!v.asyncResolved&&v.suspenseId===I.pendingId&&(I.deps--,I.deps===0&&I.resolve())},Ye=(v,I,R,D=!1,x=!1,U=0)=>{for(let Q=U;Q<v.length;Q++)Le(v[Q],I,R,D,x)},O=v=>v.shapeFlag&6?O(v.component.subTree):v.shapeFlag&128?v.suspense.next():g(v.anchor||v.el),Y=(v,I,R)=>{v==null?I._vnode&&Le(I._vnode,null,null,!0):M(I._vnode||null,v,I,null,null,null,R),ih(),Nf(),I._vnode=v},G={p:M,um:Le,m:Dt,r:Fe,mt,mc:_,pc:ve,pbc:T,n:O,o:t};let X,Ee;return e&&([X,Ee]=e(G)),{render:Y,hydrate:X,createApp:D0(Y,X)}}function rs({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function B0(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Yf(t,e,n=!1){const s=t.children,r=e.children;if(ce(s)&&ce(r))for(let i=0;i<s.length;i++){const a=s[i];let c=r[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=r[i]=Dn(r[i]),c.el=a.el),n||Yf(a,c)),c.type===ia&&(c.el=a.el)}}function j0(t){const e=t.slice(),n=[0];let s,r,i,a,c;const l=t.length;for(s=0;s<l;s++){const h=t[s];if(h!==0){if(r=n[n.length-1],t[r]<h){e[s]=r,n.push(s);continue}for(i=0,a=n.length-1;i<a;)c=i+a>>1,t[n[c]]<h?i=c+1:a=c;h<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=e[a];return n}const $0=t=>t.__isTeleport,ze=Symbol.for("v-fgt"),ia=Symbol.for("v-txt"),ms=Symbol.for("v-cmt"),uo=Symbol.for("v-stc"),Gr=[];let $t=null;function Re(t=!1){Gr.push($t=t?null:[])}function H0(){Gr.pop(),$t=Gr[Gr.length-1]||null}let ii=1;function gh(t){ii+=t}function Jf(t){return t.dynamicChildren=ii>0?$t||Ls:null,H0(),ii>0&&$t&&$t.push(t),t}function Pe(t,e,n,s,r,i){return Jf(V(t,e,n,s,r,i,!0))}function q0(t,e,n,s,r){return Jf(ge(t,e,n,s,r,!0))}function Ic(t){return t?t.__v_isVNode===!0:!1}function Nr(t,e){return t.type===e.type&&t.key===e.key}const oa="__vInternal",Zf=({key:t})=>t??null,ho=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Qe(t)||ft(t)||fe(t)?{i:Mt,r:t,k:e,f:!!n}:t:null);function V(t,e=null,n=null,s=0,r=null,i=t===ze?0:1,a=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Zf(e),ref:e&&ho(e),scopeId:ea,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Mt};return c?(ml(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Qe(n)?8:16),ii>0&&!a&&$t&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&$t.push(l),l}const ge=W0;function W0(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===l0)&&(t=ms),Ic(t)){const c=Gs(t,e,!0);return n&&ml(c,n),ii>0&&!i&&$t&&(c.shapeFlag&6?$t[$t.indexOf(t)]=c:$t.push(c)),c.patchFlag|=-2,c}if(nv(t)&&(t=t.__vccOpts),e){e=z0(e);let{class:c,style:l}=e;c&&!Qe(c)&&(e.class=ps(c)),xe(l)&&(Af(l)&&!ce(l)&&(l=st({},l)),e.style=sl(l))}const a=Qe(t)?1:h0(t)?128:$0(t)?64:xe(t)?4:fe(t)?2:0;return V(t,e,n,s,r,a,i,!0)}function z0(t){return t?Af(t)||oa in t?st({},t):t:null}function Gs(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:a}=t,c=e?K0(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Zf(c),ref:e&&e.ref?n&&r?ce(r)?r.concat(ho(e)):[r,ho(e)]:ho(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ze?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Gs(t.ssContent),ssFallback:t.ssFallback&&Gs(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function pe(t=" ",e=0){return ge(ia,null,t,e)}function hr(t,e){const n=ge(uo,null,t);return n.staticCount=e,n}function wc(t="",e=!1){return e?(Re(),q0(ms,null,t)):ge(ms,null,t)}function Qt(t){return t==null||typeof t=="boolean"?ge(ms):ce(t)?ge(ze,null,t.slice()):typeof t=="object"?Dn(t):ge(ia,null,String(t))}function Dn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Gs(t)}function ml(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(ce(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),ml(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(oa in e)?e._ctx=Mt:r===3&&Mt&&(Mt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else fe(e)?(e={default:e,_ctx:Mt},n=32):(e=String(e),s&64?(n=16,e=[pe(e)]):n=8);t.children=e,t.shapeFlag|=n}function K0(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=ps([e.class,s.class]));else if(r==="style")e.style=sl([e.style,s.style]);else if(Ko(r)){const i=e[r],a=s[r];a&&i!==a&&!(ce(i)&&i.includes(a))&&(e[r]=i?[].concat(i,a):a)}else r!==""&&(e[r]=s[r])}return e}function Gt(t,e,n,s=null){qt(t,e,7,[n,s])}const G0=qf();let Q0=0;function Y0(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||G0,i={uid:Q0++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new b_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:zf(s,r),emitsOptions:Mf(s,r),emit:null,emitted:null,propsDefaults:Me,inheritAttrs:s.inheritAttrs,ctx:Me,data:Me,props:Me,attrs:Me,slots:Me,refs:Me,setupState:Me,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=r0.bind(null,i),t.ce&&t.ce(i),i}let et=null,gl,Ps,_h="__VUE_INSTANCE_SETTERS__";(Ps=uc()[_h])||(Ps=uc()[_h]=[]),Ps.push(t=>et=t),gl=t=>{Ps.length>1?Ps.forEach(e=>e(t)):Ps[0](t)};const Qs=t=>{gl(t),t.scope.on()},hs=()=>{et&&et.scope.off(),gl(null)};function Xf(t){return t.vnode.shapeFlag&4}let oi=!1;function J0(t,e=!1){oi=e;const{props:n,children:s}=t.vnode,r=Xf(t);N0(t,n,r,e),x0(t,s);const i=r?Z0(t,e):void 0;return oi=!1,i}function Z0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=bf(new Proxy(t.ctx,b0));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?ev(t):null;Qs(t),lr();const i=Bn(s,t,0,[t.props,r]);if(ur(),hs(),af(i)){if(i.then(hs,hs),e)return i.then(a=>{vh(t,a,e)}).catch(a=>{Zo(a,t,0)});t.asyncDep=i}else vh(t,i,e)}else ep(t,e)}function vh(t,e,n){fe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:xe(e)&&(t.setupState=Pf(e)),ep(t,n)}let yh;function ep(t,e,n){const s=t.type;if(!t.render){if(!e&&yh&&!s.render){const r=s.template||fl(t).template;if(r){const{isCustomElement:i,compilerOptions:a}=t.appContext.config,{delimiters:c,compilerOptions:l}=s,h=st(st({isCustomElement:i,delimiters:c},a),l);s.render=yh(r,h)}}t.render=s.render||Jt}{Qs(t),lr();try{C0(t)}finally{ur(),hs()}}}function X0(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return At(t,"get","$attrs"),e[n]}}))}function ev(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return X0(t)},slots:t.slots,emit:t.emit,expose:e}}function aa(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Pf(bf(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Kr)return Kr[n](t)},has(e,n){return n in e||n in Kr}}))}function tv(t,e=!0){return fe(t)?t.displayName||t.name:t.name||e&&t.__name}function nv(t){return fe(t)&&"__vccOpts"in t}const jt=(t,e)=>Z_(t,e,oi);function tp(t,e,n){const s=arguments.length;return s===2?xe(e)&&!ce(e)?Ic(e)?ge(t,null,[e]):ge(t,e):ge(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Ic(n)&&(n=[n]),ge(t,e,n))}const sv=Symbol.for("v-scx"),rv=()=>gn(sv),iv="3.3.11",ov="http://www.w3.org/2000/svg",as=typeof document<"u"?document:null,Eh=as&&as.createElement("template"),av={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?as.createElementNS(ov,t):as.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>as.createTextNode(t),createComment:t=>as.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>as.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const a=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Eh.innerHTML=s?`<svg>${t}</svg>`:t;const c=Eh.content;if(s){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},cv=Symbol("_vtc");function lv(t,e,n){const s=t[cv];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const uv=Symbol("_vod");function hv(t,e,n){const s=t.style,r=Qe(n);if(n&&!r){if(e&&!Qe(e))for(const i in e)n[i]==null&&Tc(s,i,"");for(const i in n)Tc(s,i,n[i])}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),uv in t&&(s.display=i)}}const Ih=/\s*!important$/;function Tc(t,e,n){if(ce(n))n.forEach(s=>Tc(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=dv(t,e);Ih.test(n)?t.setProperty(cr(s),n.replace(Ih,""),"important"):t[s]=n}}const wh=["Webkit","Moz","ms"],Wa={};function dv(t,e){const n=Wa[e];if(n)return n;let s=nn(e);if(s!=="filter"&&s in t)return Wa[e]=s;s=Yo(s);for(let r=0;r<wh.length;r++){const i=wh[r]+s;if(i in t)return Wa[e]=i}return e}const Th="http://www.w3.org/1999/xlink";function fv(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Th,e.slice(6,e.length)):t.setAttributeNS(Th,e,n);else{const i=A_(e);n==null||i&&!uf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function pv(t,e,n,s,r,i,a){if(e==="innerHTML"||e==="textContent"){s&&a(s,r,i),t[e]=n??"";return}const c=t.tagName;if(e==="value"&&c!=="PROGRESS"&&!c.includes("-")){t._value=n;const h=c==="OPTION"?t.getAttribute("value"):t.value,f=n??"";h!==f&&(t.value=f),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const h=typeof t[e];h==="boolean"?n=uf(n):n==null&&h==="string"?(n="",l=!0):h==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function Vs(t,e,n,s){t.addEventListener(e,n,s)}function mv(t,e,n,s){t.removeEventListener(e,n,s)}const Ah=Symbol("_vei");function gv(t,e,n,s,r=null){const i=t[Ah]||(t[Ah]={}),a=i[e];if(s&&a)a.value=s;else{const[c,l]=_v(e);if(s){const h=i[e]=Ev(s,r);Vs(t,c,h,l)}else a&&(mv(t,c,a,l),i[e]=void 0)}}const bh=/(?:Once|Passive|Capture)$/;function _v(t){let e;if(bh.test(t)){e={};let s;for(;s=t.match(bh);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):cr(t.slice(2)),e]}let za=0;const vv=Promise.resolve(),yv=()=>za||(vv.then(()=>za=0),za=Date.now());function Ev(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;qt(Iv(s,n.value),e,5,[s])};return n.value=t,n.attached=yv(),n}function Iv(t,e){if(ce(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Ch=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,wv=(t,e,n,s,r=!1,i,a,c,l)=>{e==="class"?lv(t,s,r):e==="style"?hv(t,n,s):Ko(e)?el(e)||gv(t,e,n,s,a):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Tv(t,e,s,r))?pv(t,e,s,i,a,c,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),fv(t,e,s,r))};function Tv(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Ch(e)&&fe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Ch(e)&&Qe(n)?!1:e in t}const Rh=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ce(e)?n=>oo(e,n):e};function Av(t){t.target.composing=!0}function Sh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ka=Symbol("_assign"),Pt={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t[Ka]=Rh(r);const i=s||r.props&&r.props.type==="number";Vs(t,e?"change":"input",a=>{if(a.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=lc(c)),t[Ka](c)}),n&&Vs(t,"change",()=>{t.value=t.value.trim()}),e||(Vs(t,"compositionstart",Av),Vs(t,"compositionend",Sh),Vs(t,"change",Sh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t[Ka]=Rh(i),t.composing)return;const a=r||t.type==="number"?lc(t.value):t.value,c=e??"";a!==c&&(document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===c)||(t.value=c))}},bv=["ctrl","shift","alt","meta"],Cv={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>bv.some(n=>t[`${n}Key`]&&!e.includes(n))},Rv=(t,e)=>t._withMods||(t._withMods=(n,...s)=>{for(let r=0;r<e.length;r++){const i=Cv[e[r]];if(i&&i(n,e))return}return t(n,...s)}),Sv=st({patchProp:wv},av);let Ph;function Pv(){return Ph||(Ph=F0(Sv))}const kv=(...t)=>{const e=Pv().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Vv(s);if(!r)return;const i=e._component;!fe(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const a=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e};function Vv(t){return Qe(t)?document.querySelector(t):t}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Ds=typeof window<"u";function Dv(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ke=Object.assign;function Ga(t,e){const n={};for(const s in e){const r=e[s];n[s]=Wt(r)?r.map(t):t(r)}return n}const Qr=()=>{},Wt=Array.isArray,Nv=/\/$/,Ov=t=>t.replace(Nv,"");function Qa(t,e,n="/"){let s,r={},i="",a="";const c=e.indexOf("#");let l=e.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(s=e.slice(0,l),i=e.slice(l+1,c>-1?c:e.length),r=t(i)),c>-1&&(s=s||e.slice(0,c),a=e.slice(c,e.length)),s=Fv(s??e,n),{fullPath:s+(i&&"?")+i+a,path:s,query:r,hash:a}}function Mv(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function kh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function xv(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Ys(e.matched[s],n.matched[r])&&np(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ys(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function np(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Lv(t[n],e[n]))return!1;return!0}function Lv(t,e){return Wt(t)?Vh(t,e):Wt(e)?Vh(e,t):t===e}function Vh(t,e){return Wt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function Fv(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let i=n.length-1,a,c;for(a=0;a<s.length;a++)if(c=s[a],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(a-(a===s.length?1:0)).join("/")}var ai;(function(t){t.pop="pop",t.push="push"})(ai||(ai={}));var Yr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Yr||(Yr={}));function Uv(t){if(!t)if(Ds){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Ov(t)}const Bv=/^[^#]+#/;function jv(t,e){return t.replace(Bv,"#")+e}function $v(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const ca=()=>({left:window.pageXOffset,top:window.pageYOffset});function Hv(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=$v(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Dh(t,e){return(history.state?history.state.position-e:-1)+t}const Ac=new Map;function qv(t,e){Ac.set(t,e)}function Wv(t){const e=Ac.get(t);return Ac.delete(t),e}let zv=()=>location.protocol+"//"+location.host;function sp(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let c=r.includes(t.slice(i))?t.slice(i).length:1,l=r.slice(c);return l[0]!=="/"&&(l="/"+l),kh(l,"")}return kh(n,t)+s+r}function Kv(t,e,n,s){let r=[],i=[],a=null;const c=({state:g})=>{const w=sp(t,location),k=n.value,M=e.value;let N=0;if(g){if(n.value=w,e.value=g,a&&a===k){a=null;return}N=M?g.position-M.position:0}else s(w);r.forEach(H=>{H(n.value,k,{delta:N,type:ai.pop,direction:N?N>0?Yr.forward:Yr.back:Yr.unknown})})};function l(){a=n.value}function h(g){r.push(g);const w=()=>{const k=r.indexOf(g);k>-1&&r.splice(k,1)};return i.push(w),w}function f(){const{history:g}=window;g.state&&g.replaceState(ke({},g.state,{scroll:ca()}),"")}function m(){for(const g of i)g();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:l,listen:h,destroy:m}}function Nh(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?ca():null}}function Gv(t){const{history:e,location:n}=window,s={value:sp(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,h,f){const m=t.indexOf("#"),g=m>-1?(n.host&&document.querySelector("base")?t:t.slice(m))+l:zv()+t+l;try{e[f?"replaceState":"pushState"](h,"",g),r.value=h}catch(w){console.error(w),n[f?"replace":"assign"](g)}}function a(l,h){const f=ke({},e.state,Nh(r.value.back,l,r.value.forward,!0),h,{position:r.value.position});i(l,f,!0),s.value=l}function c(l,h){const f=ke({},r.value,e.state,{forward:l,scroll:ca()});i(f.current,f,!0);const m=ke({},Nh(s.value,l,null),{position:f.position+1},h);i(l,m,!1),s.value=l}return{location:s,state:r,push:c,replace:a}}function Qv(t){t=Uv(t);const e=Gv(t),n=Kv(t,e.state,e.location,e.replace);function s(i,a=!0){a||n.pauseListeners(),history.go(i)}const r=ke({location:"",base:t,go:s,createHref:jv.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function Yv(t){return typeof t=="string"||t&&typeof t=="object"}function rp(t){return typeof t=="string"||typeof t=="symbol"}const kn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},ip=Symbol("");var Oh;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Oh||(Oh={}));function Js(t,e){return ke(new Error,{type:t,[ip]:!0},e)}function ln(t,e){return t instanceof Error&&ip in t&&(e==null||!!(t.type&e))}const Mh="[^/]+?",Jv={sensitive:!1,strict:!1,start:!0,end:!0},Zv=/[.+*?^${}()[\]/\\]/g;function Xv(t,e){const n=ke({},Jv,e),s=[];let r=n.start?"^":"";const i=[];for(const h of t){const f=h.length?[]:[90];n.strict&&!h.length&&(r+="/");for(let m=0;m<h.length;m++){const g=h[m];let w=40+(n.sensitive?.25:0);if(g.type===0)m||(r+="/"),r+=g.value.replace(Zv,"\\$&"),w+=40;else if(g.type===1){const{value:k,repeatable:M,optional:N,regexp:H}=g;i.push({name:k,repeatable:M,optional:N});const L=H||Mh;if(L!==Mh){w+=10;try{new RegExp(`(${L})`)}catch(F){throw new Error(`Invalid custom RegExp for param "${k}" (${L}): `+F.message)}}let W=M?`((?:${L})(?:/(?:${L}))*)`:`(${L})`;m||(W=N&&h.length<2?`(?:/${W})`:"/"+W),N&&(W+="?"),r+=W,w+=20,N&&(w+=-8),M&&(w+=-20),L===".*"&&(w+=-50)}f.push(w)}s.push(f)}if(n.strict&&n.end){const h=s.length-1;s[h][s[h].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const a=new RegExp(r,n.sensitive?"":"i");function c(h){const f=h.match(a),m={};if(!f)return null;for(let g=1;g<f.length;g++){const w=f[g]||"",k=i[g-1];m[k.name]=w&&k.repeatable?w.split("/"):w}return m}function l(h){let f="",m=!1;for(const g of t){(!m||!f.endsWith("/"))&&(f+="/"),m=!1;for(const w of g)if(w.type===0)f+=w.value;else if(w.type===1){const{value:k,repeatable:M,optional:N}=w,H=k in h?h[k]:"";if(Wt(H)&&!M)throw new Error(`Provided param "${k}" is an array but it is not repeatable (* or + modifiers)`);const L=Wt(H)?H.join("/"):H;if(!L)if(N)g.length<2&&(f.endsWith("/")?f=f.slice(0,-1):m=!0);else throw new Error(`Missing required param "${k}"`);f+=L}}return f||"/"}return{re:a,score:s,keys:i,parse:c,stringify:l}}function e2(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function t2(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=e2(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(xh(s))return 1;if(xh(r))return-1}return r.length-s.length}function xh(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const n2={type:0,value:""},s2=/[a-zA-Z0-9_]/;function r2(t){if(!t)return[[]];if(t==="/")return[[n2]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(w){throw new Error(`ERR (${n})/"${h}": ${w}`)}let n=0,s=n;const r=[];let i;function a(){i&&r.push(i),i=[]}let c=0,l,h="",f="";function m(){h&&(n===0?i.push({type:0,value:h}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:h,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),h="")}function g(){h+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(h&&m(),a()):l===":"?(m(),n=1):g();break;case 4:g(),n=s;break;case 1:l==="("?n=2:s2.test(l)?g():(m(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=3:f+=l;break;case 3:m(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${h}"`),m(),a(),r}function i2(t,e,n){const s=Xv(r2(t.path),n),r=ke(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function o2(t,e){const n=[],s=new Map;e=Uh({strict:!1,end:!0,sensitive:!1},e);function r(f){return s.get(f)}function i(f,m,g){const w=!g,k=a2(f);k.aliasOf=g&&g.record;const M=Uh(e,f),N=[k];if("alias"in f){const W=typeof f.alias=="string"?[f.alias]:f.alias;for(const F of W)N.push(ke({},k,{components:g?g.record.components:k.components,path:F,aliasOf:g?g.record:k}))}let H,L;for(const W of N){const{path:F}=W;if(m&&F[0]!=="/"){const _e=m.record.path,re=_e[_e.length-1]==="/"?"":"/";W.path=m.record.path+(F&&re+F)}if(H=i2(W,m,M),g?g.alias.push(H):(L=L||H,L!==H&&L.alias.push(H),w&&f.name&&!Fh(H)&&a(f.name)),k.children){const _e=k.children;for(let re=0;re<_e.length;re++)i(_e[re],H,g&&g.children[re])}g=g||H,(H.record.components&&Object.keys(H.record.components).length||H.record.name||H.record.redirect)&&l(H)}return L?()=>{a(L)}:Qr}function a(f){if(rp(f)){const m=s.get(f);m&&(s.delete(f),n.splice(n.indexOf(m),1),m.children.forEach(a),m.alias.forEach(a))}else{const m=n.indexOf(f);m>-1&&(n.splice(m,1),f.record.name&&s.delete(f.record.name),f.children.forEach(a),f.alias.forEach(a))}}function c(){return n}function l(f){let m=0;for(;m<n.length&&t2(f,n[m])>=0&&(f.record.path!==n[m].record.path||!op(f,n[m]));)m++;n.splice(m,0,f),f.record.name&&!Fh(f)&&s.set(f.record.name,f)}function h(f,m){let g,w={},k,M;if("name"in f&&f.name){if(g=s.get(f.name),!g)throw Js(1,{location:f});M=g.record.name,w=ke(Lh(m.params,g.keys.filter(L=>!L.optional).map(L=>L.name)),f.params&&Lh(f.params,g.keys.map(L=>L.name))),k=g.stringify(w)}else if("path"in f)k=f.path,g=n.find(L=>L.re.test(k)),g&&(w=g.parse(k),M=g.record.name);else{if(g=m.name?s.get(m.name):n.find(L=>L.re.test(m.path)),!g)throw Js(1,{location:f,currentLocation:m});M=g.record.name,w=ke({},m.params,f.params),k=g.stringify(w)}const N=[];let H=g;for(;H;)N.unshift(H.record),H=H.parent;return{name:M,path:k,params:w,matched:N,meta:l2(N)}}return t.forEach(f=>i(f)),{addRoute:i,resolve:h,removeRoute:a,getRoutes:c,getRecordMatcher:r}}function Lh(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function a2(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:c2(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function c2(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function Fh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function l2(t){return t.reduce((e,n)=>ke(e,n.meta),{})}function Uh(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function op(t,e){return e.children.some(n=>n===t||op(t,n))}const ap=/#/g,u2=/&/g,h2=/\//g,d2=/=/g,f2=/\?/g,cp=/\+/g,p2=/%5B/g,m2=/%5D/g,lp=/%5E/g,g2=/%60/g,up=/%7B/g,_2=/%7C/g,hp=/%7D/g,v2=/%20/g;function _l(t){return encodeURI(""+t).replace(_2,"|").replace(p2,"[").replace(m2,"]")}function y2(t){return _l(t).replace(up,"{").replace(hp,"}").replace(lp,"^")}function bc(t){return _l(t).replace(cp,"%2B").replace(v2,"+").replace(ap,"%23").replace(u2,"%26").replace(g2,"`").replace(up,"{").replace(hp,"}").replace(lp,"^")}function E2(t){return bc(t).replace(d2,"%3D")}function I2(t){return _l(t).replace(ap,"%23").replace(f2,"%3F")}function w2(t){return t==null?"":I2(t).replace(h2,"%2F")}function So(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function T2(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(cp," "),a=i.indexOf("="),c=So(a<0?i:i.slice(0,a)),l=a<0?null:So(i.slice(a+1));if(c in e){let h=e[c];Wt(h)||(h=e[c]=[h]),h.push(l)}else e[c]=l}return e}function Bh(t){let e="";for(let n in t){const s=t[n];if(n=E2(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Wt(s)?s.map(i=>i&&bc(i)):[s&&bc(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function A2(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Wt(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const b2=Symbol(""),jh=Symbol(""),vl=Symbol(""),dp=Symbol(""),Cc=Symbol("");function Or(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Nn(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((a,c)=>{const l=m=>{m===!1?c(Js(4,{from:n,to:e})):m instanceof Error?c(m):Yv(m)?c(Js(2,{from:e,to:m})):(i&&s.enterCallbacks[r]===i&&typeof m=="function"&&i.push(m),a())},h=t.call(s&&s.instances[r],e,n,l);let f=Promise.resolve(h);t.length<3&&(f=f.then(l)),f.catch(m=>c(m))})}function Ya(t,e,n,s){const r=[];for(const i of t)for(const a in i.components){let c=i.components[a];if(!(e!=="beforeRouteEnter"&&!i.instances[a]))if(C2(c)){const h=(c.__vccOpts||c)[e];h&&r.push(Nn(h,n,s,i,a))}else{let l=c();r.push(()=>l.then(h=>{if(!h)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${i.path}"`));const f=Dv(h)?h.default:h;i.components[a]=f;const g=(f.__vccOpts||f)[e];return g&&Nn(g,n,s,i,a)()}))}}return r}function C2(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function $h(t){const e=gn(vl),n=gn(dp),s=jt(()=>e.resolve(vt(t.to))),r=jt(()=>{const{matched:l}=s.value,{length:h}=l,f=l[h-1],m=n.matched;if(!f||!m.length)return-1;const g=m.findIndex(Ys.bind(null,f));if(g>-1)return g;const w=Hh(l[h-2]);return h>1&&Hh(f)===w&&m[m.length-1].path!==w?m.findIndex(Ys.bind(null,l[h-2])):g}),i=jt(()=>r.value>-1&&k2(n.params,s.value.params)),a=jt(()=>r.value>-1&&r.value===n.matched.length-1&&np(n.params,s.value.params));function c(l={}){return P2(l)?e[vt(t.replace)?"replace":"push"](vt(t.to)).catch(Qr):Promise.resolve()}return{route:s,href:jt(()=>s.value.href),isActive:i,isExactActive:a,navigate:c}}const R2=Uf({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:$h,setup(t,{slots:e}){const n=yi($h(t)),{options:s}=gn(vl),r=jt(()=>({[qh(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[qh(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:tp("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),S2=R2;function P2(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function k2(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Wt(r)||r.length!==s.length||s.some((i,a)=>i!==r[a]))return!1}return!0}function Hh(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const qh=(t,e,n)=>t??e??n,V2=Uf({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=gn(Cc),r=jt(()=>t.route||s.value),i=gn(jh,0),a=jt(()=>{let h=vt(i);const{matched:f}=r.value;let m;for(;(m=f[h])&&!m.components;)h++;return h}),c=jt(()=>r.value.matched[a.value]);lo(jh,jt(()=>a.value+1)),lo(b2,c),lo(Cc,r);const l=Nt();return ao(()=>[l.value,c.value,t.name],([h,f,m],[g,w,k])=>{f&&(f.instances[m]=h,w&&w!==f&&h&&h===g&&(f.leaveGuards.size||(f.leaveGuards=w.leaveGuards),f.updateGuards.size||(f.updateGuards=w.updateGuards))),h&&f&&(!w||!Ys(f,w)||!g)&&(f.enterCallbacks[m]||[]).forEach(M=>M(h))},{flush:"post"}),()=>{const h=r.value,f=t.name,m=c.value,g=m&&m.components[f];if(!g)return Wh(n.default,{Component:g,route:h});const w=m.props[f],k=w?w===!0?h.params:typeof w=="function"?w(h):w:null,N=tp(g,ke({},k,e,{onVnodeUnmounted:H=>{H.component.isUnmounted&&(m.instances[f]=null)},ref:l}));return Wh(n.default,{Component:N,route:h})||N}}});function Wh(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const D2=V2;function N2(t){const e=o2(t.routes,t),n=t.parseQuery||T2,s=t.stringifyQuery||Bh,r=t.history,i=Or(),a=Or(),c=Or(),l=G_(kn);let h=kn;Ds&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Ga.bind(null,O=>""+O),m=Ga.bind(null,w2),g=Ga.bind(null,So);function w(O,Y){let G,X;return rp(O)?(G=e.getRecordMatcher(O),X=Y):X=O,e.addRoute(X,G)}function k(O){const Y=e.getRecordMatcher(O);Y&&e.removeRoute(Y)}function M(){return e.getRoutes().map(O=>O.record)}function N(O){return!!e.getRecordMatcher(O)}function H(O,Y){if(Y=ke({},Y||l.value),typeof O=="string"){const R=Qa(n,O,Y.path),D=e.resolve({path:R.path},Y),x=r.createHref(R.fullPath);return ke(R,D,{params:g(D.params),hash:So(R.hash),redirectedFrom:void 0,href:x})}let G;if("path"in O)G=ke({},O,{path:Qa(n,O.path,Y.path).path});else{const R=ke({},O.params);for(const D in R)R[D]==null&&delete R[D];G=ke({},O,{params:m(R)}),Y.params=m(Y.params)}const X=e.resolve(G,Y),Ee=O.hash||"";X.params=f(g(X.params));const v=Mv(s,ke({},O,{hash:y2(Ee),path:X.path})),I=r.createHref(v);return ke({fullPath:v,hash:Ee,query:s===Bh?A2(O.query):O.query||{}},X,{redirectedFrom:void 0,href:I})}function L(O){return typeof O=="string"?Qa(n,O,l.value.path):ke({},O)}function W(O,Y){if(h!==O)return Js(8,{from:Y,to:O})}function F(O){return A(O)}function _e(O){return F(ke(L(O),{replace:!0}))}function re(O){const Y=O.matched[O.matched.length-1];if(Y&&Y.redirect){const{redirect:G}=Y;let X=typeof G=="function"?G(O):G;return typeof X=="string"&&(X=X.includes("?")||X.includes("#")?X=L(X):{path:X},X.params={}),ke({query:O.query,hash:O.hash,params:"path"in X?{}:O.params},X)}}function A(O,Y){const G=h=H(O),X=l.value,Ee=O.state,v=O.force,I=O.replace===!0,R=re(G);if(R)return A(ke(L(R),{state:typeof R=="object"?ke({},Ee,R.state):Ee,force:v,replace:I}),Y||G);const D=G;D.redirectedFrom=Y;let x;return!v&&xv(s,X,G)&&(x=Js(16,{to:D,from:X}),Dt(X,X,!0,!1)),(x?Promise.resolve(x):T(D,X)).catch(U=>ln(U)?ln(U,2)?U:xt(U):ve(U,D,X)).then(U=>{if(U){if(ln(U,2))return A(ke({replace:I},L(U.to),{state:typeof U.to=="object"?ke({},Ee,U.to.state):Ee,force:v}),Y||D)}else U=S(D,X,!0,I,Ee);return b(D,X,U),U})}function _(O,Y){const G=W(O,Y);return G?Promise.reject(G):Promise.resolve()}function E(O){const Y=bn.values().next().value;return Y&&typeof Y.runWithContext=="function"?Y.runWithContext(O):O()}function T(O,Y){let G;const[X,Ee,v]=O2(O,Y);G=Ya(X.reverse(),"beforeRouteLeave",O,Y);for(const R of X)R.leaveGuards.forEach(D=>{G.push(Nn(D,O,Y))});const I=_.bind(null,O,Y);return G.push(I),Ye(G).then(()=>{G=[];for(const R of i.list())G.push(Nn(R,O,Y));return G.push(I),Ye(G)}).then(()=>{G=Ya(Ee,"beforeRouteUpdate",O,Y);for(const R of Ee)R.updateGuards.forEach(D=>{G.push(Nn(D,O,Y))});return G.push(I),Ye(G)}).then(()=>{G=[];for(const R of v)if(R.beforeEnter)if(Wt(R.beforeEnter))for(const D of R.beforeEnter)G.push(Nn(D,O,Y));else G.push(Nn(R.beforeEnter,O,Y));return G.push(I),Ye(G)}).then(()=>(O.matched.forEach(R=>R.enterCallbacks={}),G=Ya(v,"beforeRouteEnter",O,Y),G.push(I),Ye(G))).then(()=>{G=[];for(const R of a.list())G.push(Nn(R,O,Y));return G.push(I),Ye(G)}).catch(R=>ln(R,8)?R:Promise.reject(R))}function b(O,Y,G){c.list().forEach(X=>E(()=>X(O,Y,G)))}function S(O,Y,G,X,Ee){const v=W(O,Y);if(v)return v;const I=Y===kn,R=Ds?history.state:{};G&&(X||I?r.replace(O.fullPath,ke({scroll:I&&R&&R.scroll},Ee)):r.push(O.fullPath,Ee)),l.value=O,Dt(O,Y,G,I),xt()}let y;function mt(){y||(y=r.listen((O,Y,G)=>{if(!Kt.listening)return;const X=H(O),Ee=re(X);if(Ee){A(ke(Ee,{replace:!0}),X).catch(Qr);return}h=X;const v=l.value;Ds&&qv(Dh(v.fullPath,G.delta),ca()),T(X,v).catch(I=>ln(I,12)?I:ln(I,2)?(A(I.to,X).then(R=>{ln(R,20)&&!G.delta&&G.type===ai.pop&&r.go(-1,!1)}).catch(Qr),Promise.reject()):(G.delta&&r.go(-G.delta,!1),ve(I,X,v))).then(I=>{I=I||S(X,v,!1),I&&(G.delta&&!ln(I,8)?r.go(-G.delta,!1):G.type===ai.pop&&ln(I,20)&&r.go(-1,!1)),b(X,v,I)}).catch(Qr)}))}let Vt=Or(),He=Or(),Te;function ve(O,Y,G){xt(O);const X=He.list();return X.length?X.forEach(Ee=>Ee(O,Y,G)):console.error(O),Promise.reject(O)}function Ct(){return Te&&l.value!==kn?Promise.resolve():new Promise((O,Y)=>{Vt.add([O,Y])})}function xt(O){return Te||(Te=!O,mt(),Vt.list().forEach(([Y,G])=>O?G(O):Y()),Vt.reset()),O}function Dt(O,Y,G,X){const{scrollBehavior:Ee}=t;if(!Ds||!Ee)return Promise.resolve();const v=!G&&Wv(Dh(O.fullPath,0))||(X||!G)&&history.state&&history.state.scroll||null;return Vf().then(()=>Ee(O,Y,v)).then(I=>I&&Hv(I)).catch(I=>ve(I,O,Y))}const Le=O=>r.go(O);let Fe;const bn=new Set,Kt={currentRoute:l,listening:!0,addRoute:w,removeRoute:k,hasRoute:N,getRoutes:M,resolve:H,options:t,push:F,replace:_e,go:Le,back:()=>Le(-1),forward:()=>Le(1),beforeEach:i.add,beforeResolve:a.add,afterEach:c.add,onError:He.add,isReady:Ct,install(O){const Y=this;O.component("RouterLink",S2),O.component("RouterView",D2),O.config.globalProperties.$router=Y,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>vt(l)}),Ds&&!Fe&&l.value===kn&&(Fe=!0,F(r.location).catch(Ee=>{}));const G={};for(const Ee in kn)Object.defineProperty(G,Ee,{get:()=>l.value[Ee],enumerable:!0});O.provide(vl,Y),O.provide(dp,wf(G)),O.provide(Cc,l);const X=O.unmount;bn.add(O),O.unmount=function(){bn.delete(O),bn.size<1&&(h=kn,y&&y(),y=null,l.value=kn,Fe=!1,Te=!1),X()}}};function Ye(O){return O.reduce((Y,G)=>Y.then(()=>E(G)),Promise.resolve())}return Kt}function O2(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let a=0;a<i;a++){const c=e.matched[a];c&&(t.matched.find(h=>Ys(h,c))?s.push(c):n.push(c));const l=t.matched[a];l&&(e.matched.find(h=>Ys(h,l))||r.push(l))}return[n,s,r]}const M2="/Portfolio/assets/me-portrait-mDlZHhdr.jpg",Mr="data:image/svg+xml,%3csvg%20width='16'%20height='12'%20viewBox='0%200%2016%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M3.33331%201.5V10.5H7.33331V8.75H8.66665V10.5H12.6666V1.5H3.33331ZM4.66665%202.5H5.99998V3.5H4.66665V2.5ZM7.33331%202.5H8.66665V3.5H7.33331V2.5ZM9.99998%202.5H11.3333V3.5H9.99998V2.5ZM4.66665%204.5H5.99998V5.5H4.66665V4.5ZM7.33331%204.5H8.66665V5.5H7.33331V4.5ZM9.99998%204.5H11.3333V5.5H9.99998V4.5ZM4.66665%206.5H5.99998V7.5H4.66665V6.5ZM7.33331%206.5H8.66665V7.5H7.33331V6.5ZM9.99998%206.5H11.3333V7.5H9.99998V6.5ZM4.66665%208.5H5.99998V9.5H4.66665V8.5ZM9.99998%208.5H11.3333V9.5H9.99998V8.5Z'%20fill='%23A7A7A7'/%3e%3c/svg%3e",xr="data:image/svg+xml,%3csvg%20width='16'%20height='12'%20viewBox='0%200%2016%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%206.75C7.50555%206.75%207.0222%206.64003%206.61108%206.43401C6.19995%206.22798%205.87952%205.93514%205.6903%205.59253C5.50108%205.24992%205.45157%204.87292%205.54804%204.50921C5.6445%204.14549%205.8826%203.8114%206.23223%203.54918C6.58187%203.28695%207.02732%203.10838%207.51228%203.03603C7.99723%202.96368%208.4999%203.00081%208.95671%203.14273C9.41353%203.28464%209.80397%203.52496%2010.0787%203.83331C10.3534%204.14165%2010.5%204.50416%2010.5%204.875C10.4992%205.3721%2010.2356%205.84867%209.76689%206.20017C9.29822%206.55167%208.6628%206.74941%208%206.75ZM8%203.75C7.70333%203.75%207.41332%203.81598%207.16665%203.9396C6.91997%204.06321%206.72771%204.23892%206.61418%204.44448C6.50065%204.65005%206.47095%204.87625%206.52882%205.09448C6.5867%205.31271%206.72956%205.51316%206.93934%205.6705C7.14912%205.82783%207.41639%205.93498%207.70737%205.97838C7.99834%206.02179%208.29994%205.99951%208.57403%205.91437C8.84812%205.82922%209.08238%205.68502%209.24721%205.50002C9.41203%205.31501%209.5%205.09751%209.5%204.875C9.4996%204.57672%209.34144%204.29075%209.06022%204.07983C8.779%203.86892%208.3977%203.7503%208%203.75Z'%20fill='%23A7A7A7'/%3e%3cpath%20d='M8.00001%2011.25L3.78201%207.51912C3.7234%207.4631%203.66539%207.40673%203.60801%207.35C2.8875%206.63817%202.49826%205.76871%202.50001%204.875C2.50001%203.78098%203.07947%202.73177%204.11092%201.95818C5.14237%201.1846%206.54132%200.75%208.00001%200.75C9.4587%200.75%2010.8576%201.1846%2011.8891%201.95818C12.9205%202.73177%2013.5%203.78098%2013.5%204.875C13.5018%205.7683%2013.1127%206.63737%2012.3925%207.34888L12.392%207.35C12.392%207.35%2012.242%207.49775%2012.2195%207.51763L8.00001%2011.25ZM4.40601%206.89813C4.40701%206.89813%204.52301%207.01362%204.54951%207.03837L8.00001%2010.0905L11.455%207.03425C11.477%207.01362%2011.594%206.89738%2011.5945%206.897C12.1831%206.31542%2012.5012%205.60514%2012.5%204.875C12.5%203.97989%2012.0259%203.12145%2011.182%202.48851C10.3381%201.85558%209.19348%201.5%208.00001%201.5C6.80653%201.5%205.66194%201.85558%204.81803%202.48851C3.97411%203.12145%203.50001%203.97989%203.50001%204.875C3.49896%205.60559%203.81739%206.31628%204.40651%206.89813H4.40601Z'%20fill='%23A7A7A7'/%3e%3c/svg%3e",Lr="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAMCAYAAABr5z2BAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADCSURBVHgBtVK7DcIwELWdJqkIG4QRmADYgDZKwSpsEqjckgnIBoQJwgaYzo1t3kk2QigkEZ/X3Dvdu3d30jH2JXggZVmmSZJsjDHTvoYoiq7OuSrP8wvlIhTiOD6hsGYDgGaJcAy5eKpl1tq9EGL3rplq0FSk7TL4CJ0GnPO2KIotJtbgDXG6fbQBGlOKuDeFgfL8NtoAdyq/iSITzyd/2eDxB1LKFqHB9DPrAcwXCBn+YPa6wQrTajYAaA5a6zn7Fe6FoUl+LoPqfgAAAABJRU5ErkJggg==",ut="data:image/svg+xml,%3csvg%20width='30'%20height='30'%20viewBox='0%200%2030%2030'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M15%200C6.7125%200%200%206.7125%200%2015C0%2021.6375%204.29375%2027.2437%2010.2563%2029.2313C11.0063%2029.3625%2011.2875%2028.9125%2011.2875%2028.5188C11.2875%2028.1625%2011.2688%2026.9813%2011.2688%2025.725C7.5%2026.4188%206.525%2024.8062%206.225%2023.9625C6.05625%2023.5312%205.325%2022.2%204.6875%2021.8438C4.1625%2021.5625%203.4125%2020.8687%204.66875%2020.85C5.85%2020.8313%206.69375%2021.9375%206.975%2022.3875C8.325%2024.6562%2010.4812%2024.0187%2011.3438%2023.625C11.475%2022.65%2011.8688%2021.9937%2012.3%2021.6187C8.9625%2021.2437%205.475%2019.95%205.475%2014.2125C5.475%2012.5813%206.05625%2011.2313%207.0125%2010.1813C6.8625%209.80625%206.3375%208.26875%207.1625%206.20625C7.1625%206.20625%208.41875%205.8125%2011.2875%207.74375C12.4875%207.40625%2013.7625%207.2375%2015.0375%207.2375C16.3125%207.2375%2017.5875%207.40625%2018.7875%207.74375C21.6562%205.79375%2022.9125%206.20625%2022.9125%206.20625C23.7375%208.26875%2023.2125%209.80625%2023.0625%2010.1813C24.0188%2011.2313%2024.6%2012.5625%2024.6%2014.2125C24.6%2019.9688%2021.0938%2021.2437%2017.7563%2021.6187C18.3%2022.0875%2018.7688%2022.9875%2018.7688%2024.3937C18.7688%2026.4%2018.75%2028.0125%2018.75%2028.5188C18.75%2028.9125%2019.0312%2029.3813%2019.7812%2029.2313C22.759%2028.2259%2025.3465%2026.3121%2027.1796%2023.7592C29.0127%2021.2063%2029.9991%2018.1429%2030%2015C30%206.7125%2023.2875%200%2015%200Z'%20fill='%23A7A7A7'/%3e%3c/svg%3e",fp="data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16.875%201.875C8.59152%201.875%201.875%208.59152%201.875%2016.875C1.875%2025.1585%208.59152%2031.875%2016.875%2031.875C25.1585%2031.875%2031.875%2025.1585%2031.875%2016.875C31.875%208.59152%2025.1585%201.875%2016.875%201.875ZM24.0837%2013.1819C24.0937%2013.3393%2024.0937%2013.5033%2024.0937%2013.6641C24.0937%2018.5792%2020.3504%2024.2411%2013.51%2024.2411C11.4007%2024.2411%209.44531%2023.6283%207.79799%2022.5737C8.09933%2022.6071%208.38728%2022.6205%208.69531%2022.6205C10.4364%2022.6205%2012.0368%2022.0312%2013.3125%2021.0335C11.6786%2021%2010.3058%2019.9286%209.83705%2018.4554C10.4096%2018.5391%2010.9252%2018.5391%2011.5145%2018.3884C10.6732%2018.2175%209.91699%2017.7605%209.37438%2017.0953C8.83178%2016.43%208.53623%2015.5973%208.53795%2014.7388V14.692C9.03013%2014.9699%209.60938%2015.1406%2010.2154%2015.1641C9.70595%2014.8245%209.28814%2014.3645%208.99903%2013.8249C8.70993%2013.2852%208.55845%2012.6825%208.55804%2012.0703C8.55804%2011.3772%208.73884%2010.7444%209.06362%2010.1953C9.99744%2011.3449%2011.1627%2012.2851%2012.4837%2012.9548C13.8047%2013.6245%2015.2518%2014.0088%2016.731%2014.0826C16.2054%2011.5547%2018.0938%209.50893%2020.3638%209.50893C21.4353%209.50893%2022.3996%209.95759%2023.0792%2010.6808C23.9196%2010.5234%2024.7232%2010.2087%2025.4397%209.78683C25.1618%2010.6473%2024.5792%2011.3739%2023.8058%2011.8326C24.5558%2011.7522%2025.279%2011.5446%2025.9487%2011.2533C25.4431%2011.9967%2024.8103%2012.6562%2024.0837%2013.1819Z'%20fill='%23A7A7A7'/%3e%3c/svg%3e",pp="data:image/svg+xml,%3csvg%20width='30'%20height='30'%20viewBox='0%200%2030%2030'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_14_33)'%3e%3cpath%20d='M15.0001%200.599976C7.0471%200.599976%200.600098%207.04698%200.600098%2015C0.600098%2022.953%207.0471%2029.4%2015.0001%2029.4C22.9531%2029.4%2029.4001%2022.953%2029.4001%2015C29.4001%207.04698%2022.9531%200.599976%2015.0001%200.599976ZM11.4751%2020.9685H8.5591V11.5845H11.4751V20.9685ZM9.9991%2010.4325C9.0781%2010.4325%208.4826%209.77997%208.4826%208.97297C8.4826%208.14948%209.0961%207.51648%2010.0366%207.51648C10.9771%207.51648%2011.5531%208.14948%2011.5711%208.97297C11.5711%209.77997%2010.9771%2010.4325%209.9991%2010.4325ZM22.1251%2020.9685H19.2091V15.768C19.2091%2014.5575%2018.7861%2013.7355%2017.7316%2013.7355C16.9261%2013.7355%2016.4476%2014.292%2016.2361%2014.8275C16.1581%2015.018%2016.1386%2015.288%2016.1386%2015.5565V20.967H13.2211V14.577C13.2211%2013.4055%2013.1836%2012.426%2013.1446%2011.583H15.6781L15.8116%2012.8865H15.8701C16.2541%2012.2745%2017.1946%2011.3715%2018.7681%2011.3715C20.6866%2011.3715%2022.1251%2012.657%2022.1251%2015.42V20.9685Z'%20fill='%23A7A7A7'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_14_33'%3e%3crect%20width='30'%20height='30'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",Jn=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},x2={},L2={class:"footer"},F2={class:"footer__items"},U2={class:"footer__items_left"},B2=V("span",{class:"nav__brand_first"},"Rustam",-1),j2=V("span",{class:"nav__brand_last"},"Isroilov",-1),$2=hr('<div class="footer__items_midle"><p>+998 93 845 55 65</p><p>isroilovr10@gmail.com</p></div><div class="footer__items_right"><a href="https://github.com/RustamIsroilov" target="_blank" rel="noopener"><img src="'+ut+'" alt="GitHub"></a><a href="https://twitter.com/RustambekI39739" target="_blank" rel="noopener"><img src="'+fp+'" alt="Twitter"></a><a href="https://www.instagram.com/rustambek7875/" target="_blank" rel="noopener"><img src="'+pp+'" alt="Instagram"></a></div>',2),H2=V("div",{class:"footer__line"},null,-1),q2={class:"footer__nav"},W2={class:"footer__nav_right"},z2=V("div",{class:"footer__nav_left"},[V("p",{class:"footer__nav_left-item"},[pe(" Built by "),V("span",null,"Rustam Isroilov"),pe(" with "),V("span",null,"Vue"),pe(" & "),V("span",null,"Claude AI")])],-1);function K2(t,e){const n=sa("router-link");return Re(),Pe("div",L2,[V("div",F2,[V("div",U2,[ge(n,{to:"/",class:"nav__brand"},{default:wt(()=>[B2,j2]),_:1})]),$2]),H2,V("div",q2,[V("div",W2,[ge(n,{to:"/about",class:"footer__nav_right-item"},{default:wt(()=>[pe("About")]),_:1}),ge(n,{to:"/stack",class:"footer__nav_right-item"},{default:wt(()=>[pe("Technologies")]),_:1}),ge(n,{to:"/project",class:"footer__nav_right-item"},{default:wt(()=>[pe("Projects")]),_:1}),ge(n,{to:"/contact",class:"footer__nav_right-item"},{default:wt(()=>[pe("Contact")]),_:1})]),z2])])}const dr=Jn(x2,[["render",K2]]),G2=t=>(ta("data-v-65d11dc5"),t=t(),na(),t),Q2=G2(()=>V("div",{class:"about"},[V("h1",{class:"about__title"},[pe("I am a "),V("span",null,"Junior "),pe(" web developer studying in the "),V("span",null,"Vue"),pe(" ecosystem and shipping projects with "),V("span",null,"Claude AI"),pe(".")]),V("img",{src:M2,alt:"Rustam Isroilov",class:"about__img"})],-1)),Y2={class:"aboutp"},J2=hr('<h2 class="aboutp__title" data-v-65d11dc5>About Me</h2><div class="aboutp__bio" data-v-65d11dc5><p data-v-65d11dc5> I&#39;m Rustam Isroilov — born on <strong data-v-65d11dc5>17 April 2010 in Samarkand</strong>, the firstborn of a bankers&#39; family. My mother taught art at a school and my father worked in banking. When I was one year old, my parents moved with me to <strong data-v-65d11dc5>Tashkent</strong>, where I&#39;ve lived ever since. I don&#39;t remember Samarkand at all — Tashkent is the only home I know. </p><p data-v-65d11dc5> From <strong data-v-65d11dc5>age 6 to about 10–11, I was a chess player</strong>. I trained seriously, climbed the rankings and earned the <em data-v-65d11dc5>1st sports category</em> title. My proudest result was finishing <strong data-v-65d11dc5>17th at the Sochi International Tournament 2019</strong>, out of thousands of participants. Then COVID-19 hit and everything stopped — no classes, no tournaments. After a long break my sharpness was gone, and I decided to close that chapter rather than chase a faded peak. </p><p data-v-65d11dc5> In <strong data-v-65d11dc5>7th grade I discovered programming</strong> and enrolled at the Proweb Front-End course. Something clicked: building things became the way I think — projects turned into my <em data-v-65d11dc5>kind of art</em>. Every new idea felt like a small canvas: pick the layout, choose the palette, ship the result. </p><p data-v-65d11dc5> In <strong data-v-65d11dc5>9th grade I decided I want to study abroad</strong> and use what I learn to build a life that helps real people. My goal isn&#39;t just &quot;ship code&quot; — it&#39;s to make tools and sites that <em data-v-65d11dc5>quietly make millions of small daily things easier</em>. ScamGuard Bot, the Telegram safety bot listed in my Projects page, is a first step toward that. </p><p data-v-65d11dc5> Most recently I started <strong data-v-65d11dc5>using Claude AI as a coding partner</strong> — &quot;vibe-coding&quot; full projects end-to-end, from the first idea to a deployed product. Claude doesn&#39;t write my apps for me; it helps me move from concept to working software at the speed I always wished I could. </p></div><h2 class="aboutp__title" data-v-65d11dc5>Education</h2><div class="aboutp__info" data-v-65d11dc5><div class="aboutp__info_top" data-v-65d11dc5><h3 class="info__top_title" data-v-65d11dc5>Public School #178</h3><button class="info__top_btn" data-v-65d11dc5>Completed</button></div><div class="aboutp__info_down" data-v-65d11dc5><div class="info__down_item" data-v-65d11dc5><img src="'+Mr+'" alt="" data-v-65d11dc5><p data-v-65d11dc5>Tashkent, Uzbekistan</p></div><div class="info__down_item" data-v-65d11dc5><img src="'+xr+'" alt="" data-v-65d11dc5><p data-v-65d11dc5>Tashkent</p></div><div class="info__down_item" data-v-65d11dc5><img src="'+Lr+'" alt="" data-v-65d11dc5><p data-v-65d11dc5>September 2016 – May 2019</p></div></div><div class="line" data-v-65d11dc5></div><div class="aboutp__info_top" data-v-65d11dc5><h3 class="info__top_title" data-v-65d11dc5>Wisdom Private School</h3><button class="info__top_btn" data-v-65d11dc5>Completed</button></div><div class="aboutp__info_down" data-v-65d11dc5><div class="info__down_item" data-v-65d11dc5><img src="'+Mr+'" alt="" data-v-65d11dc5><p data-v-65d11dc5>Tashkent, Uzbekistan</p></div><div class="info__down_item" data-v-65d11dc5><img src="'+xr+'" alt="" data-v-65d11dc5><p data-v-65d11dc5>Tashkent</p></div><div class="info__down_item" data-v-65d11dc5><img src="'+Lr+'" alt="" data-v-65d11dc5><p data-v-65d11dc5>September 2019 – March 2020</p></div></div><div class="line" data-v-65d11dc5></div><div class="aboutp__info_top" data-v-65d11dc5><h3 class="info__top_title" data-v-65d11dc5>Iste&#39;dodli Kelajak Yoshlari — Private School</h3><button class="info__top_btn info__top_btn--gold" data-v-65d11dc5>Best Student ×3</button></div><div class="aboutp__info_down" data-v-65d11dc5><div class="info__down_item" data-v-65d11dc5><img src="'+Mr+'" alt="" data-v-65d11dc5><p data-v-65d11dc5>Tashkent, Uzbekistan</p></div><div class="info__down_item" data-v-65d11dc5><img src="'+xr+'" alt="" data-v-65d11dc5><p data-v-65d11dc5>Tashkent</p></div><div class="info__down_item" data-v-65d11dc5><img src="'+Lr+'" alt="" data-v-65d11dc5><p data-v-65d11dc5>March 2020 – May 2026</p></div></div><div class="line" data-v-65d11dc5></div><div class="aboutp__info_top" data-v-65d11dc5><h3 class="info__top_title" data-v-65d11dc5>Proweb Learning Center — Web Development</h3><button class="info__top_btn" data-v-65d11dc5>Graduated</button></div><div class="aboutp__info_down" data-v-65d11dc5><div class="info__down_item" data-v-65d11dc5><img src="'+Mr+'" alt="" data-v-65d11dc5><p data-v-65d11dc5>Proweb Learning Center</p></div><div class="info__down_item" data-v-65d11dc5><img src="'+xr+'" alt="" data-v-65d11dc5><p data-v-65d11dc5>Tashkent</p></div><div class="info__down_item" data-v-65d11dc5><img src="'+Lr+'" alt="" data-v-65d11dc5><p data-v-65d11dc5>16.03.2023 – 16.01.2024</p></div></div><div class="line" data-v-65d11dc5></div><div class="aboutp__info_top" data-v-65d11dc5><h3 class="info__top_title" data-v-65d11dc5>Self-study with Claude AI</h3><button class="info__top_btn" data-v-65d11dc5>Ongoing</button></div><div class="aboutp__info_down" data-v-65d11dc5><div class="info__down_item" data-v-65d11dc5><img src="'+Mr+'" alt="" data-v-65d11dc5><p data-v-65d11dc5>Vibe-coding full projects end-to-end</p></div><div class="info__down_item" data-v-65d11dc5><img src="'+xr+'" alt="" data-v-65d11dc5><p data-v-65d11dc5>Remote</p></div><div class="info__down_item" data-v-65d11dc5><img src="'+Lr+'" alt="" data-v-65d11dc5><p data-v-65d11dc5>2025 – present</p></div></div><div class="line" data-v-65d11dc5></div></div>',4),Z2={class:"aboutp__cta"},X2={__name:"About",setup(t){return(e,n)=>{const s=sa("router-link");return Re(),Pe(ze,null,[Q2,V("div",Y2,[J2,V("p",Z2,[pe(" See my exam scores and the full list of milestones on the "),ge(s,{to:"/achievements"},{default:wt(()=>[pe("Achievements page →")]),_:1})])]),ge(dr)],64)}}},ey=Jn(X2,[["__scopeId","data-v-65d11dc5"]]),ty="/Portfolio/assets/me-viewpoint-NIcbNdVZ.jpg",ny={},sy={class:"about"},ry=V("h1",{class:"about__title"},[pe("Hi 👋, My name is "),V("span",null,"Rustam Isroilov"),pe(" I build things for the web — and I use "),V("span",null,"Claude AI"),pe(" to vibe-code full projects, end to end.")],-1),iy=V("img",{src:ty,alt:"Rustam Isroilov",class:"about__img about__img--landscape"},null,-1),oy=[ry,iy];function ay(t,e){return Re(),Pe("div",sy,oy)}const cy=Jn(ny,[["render",ay]]),mp="data:image/svg+xml,%3csvg%20width='120'%20height='120'%20viewBox='0%200%20120%20120'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M22.1325%20102.004L13.7063%207.5H106.294L97.8563%20101.989L59.9438%20112.5L22.1325%20102.004Z'%20fill='%23E44F26'/%3e%3cpath%20d='M60%20104.467L90.6375%2095.9737L97.845%2015.2287H60V104.467Z'%20fill='%23F1662A'/%3e%3cpath%20d='M60%2050.2763H44.6625L43.605%2038.4075H60V26.8163H30.9375L31.215%2029.9288L34.0613%2061.8675H60V50.2763ZM60%2080.3775L59.9475%2080.3925L47.04%2076.9088L46.215%2067.665H34.5787L36.2025%2085.86L59.9475%2092.4525L60%2092.4375V80.3775Z'%20fill='%23EBEBEB'/%3e%3cpath%20d='M59.9587%2050.2763V61.8675H74.2312L72.8887%2076.9013L59.9587%2080.3888V92.4488L83.7225%2085.86L83.895%2083.9025L86.6175%2053.3888L86.9025%2050.2763H59.9587ZM59.9587%2026.8163V38.4075H87.9562L88.1887%2035.805L88.7175%2029.9288L88.995%2026.8163H59.9587Z'%20fill='white'/%3e%3c/svg%3e",gp="data:image/svg+xml,%3csvg%20width='120'%20height='119'%20viewBox='0%200%20120%20119'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M22.1325%20101.154L13.71%207.4375H106.29L97.8562%20101.139L59.9437%20111.562L22.1325%20101.154Z'%20fill='%231572B6'/%3e%3cpath%20d='M60%20103.597L90.6375%2095.174L97.845%2015.1018H60V103.597Z'%20fill='%2333A9DC'/%3e%3cpath%20d='M60%2049.054H75.3375L76.395%2037.2842H60V25.7895H89.0625L88.785%2028.8724L85.9387%2060.5487H60V49.054Z'%20fill='white'/%3e%3cpath%20d='M60.0713%2078.9044L60.0188%2078.9193L47.1113%2075.4609L46.2863%2066.2942H34.65L36.2738%2084.3413L60.015%2090.8788L60.0713%2090.8639V78.9044Z'%20fill='%23EBEBEB'/%3e%3cpath%20d='M74.3513%2060.0615L72.9563%2075.4534L60.03%2078.9119V90.8714L83.79%2084.3412L83.9663%2082.4001L85.98%2060.0615H74.3513Z'%20fill='white'/%3e%3cpath%20d='M60.0413%2025.7895V37.2842H32.0438L31.8113%2034.6996L31.2825%2028.8724L31.005%2025.7895H60.0413ZM60%2049.054V60.5487H47.2538L47.0213%2057.9641L46.4963%2052.1369L46.2188%2049.054H60Z'%20fill='%23EBEBEB'/%3e%3c/svg%3e",_p="data:image/svg+xml,%3csvg%20width='120'%20height='120'%20viewBox='0%200%20120%20120'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7.5%207.5H112.5V112.5H7.5V7.5Z'%20fill='%23F5DE19'/%3e%3cpath%20d='M78.0338%2089.5312C78.9284%2091.3485%2080.3183%2092.8759%2082.0434%2093.9375C83.7684%2094.9991%2085.7584%2095.5515%2087.7838%2095.5313C91.8713%2095.5313%2094.485%2093.4875%2094.485%2090.6562C94.485%2087.2812%2091.8%2086.0738%2087.3%2084.105L84.8325%2083.0475C77.7075%2080.0138%2072.9825%2076.215%2072.9825%2068.1825C72.9825%2060.7838%2078.6075%2055.1475%2087.4313%2055.1475C90.2877%2054.9412%2093.1416%2055.5805%2095.637%2056.9856C98.1324%2058.3907%20100.159%2060.4994%20101.464%2063.0488L93.75%2067.98C93.2476%2066.716%2092.3728%2065.6345%2091.2416%2064.879C90.1105%2064.1236%2088.7764%2063.7298%2087.4163%2063.75C86.8229%2063.6906%2086.2236%2063.7555%2085.6567%2063.9404C85.0897%2064.1254%2084.5675%2064.4265%2084.1234%2064.8244C83.6792%2065.2224%2083.3228%2065.7085%2083.0769%2066.2518C82.831%2066.7951%2082.7009%2067.3837%2082.695%2067.98C82.695%2070.9388%2084.5288%2072.1388%2088.7625%2073.98L91.23%2075.0375C99.615%2078.6338%20104.355%2082.2975%20104.355%2090.5363C104.355%2099.42%2097.3763%20104.287%2088.005%20104.287C84.3537%20104.52%2080.713%20103.691%2077.5223%20101.901C74.3317%20100.11%2071.7274%2097.4342%2070.0238%2094.1963L78.0338%2089.5312ZM43.1775%2090.3863C44.7263%2093.135%2046.1363%2095.46%2049.5263%2095.46C52.7663%2095.46%2054.8138%2094.1925%2054.8138%2089.2612V55.71H64.68V89.3925C64.68%2099.6075%2058.68%20104.257%2049.9463%20104.257C46.8591%20104.426%2043.7931%20103.657%2041.1513%20102.051C38.5096%20100.444%2036.4157%2098.0761%2035.145%2095.2575L43.1775%2090.3863Z'%20fill='black'/%3e%3c/svg%3e",vp="/Portfolio/assets/scss-RZ817m-M.svg",yp="/Portfolio/assets/vue-Mzr_xbml.png",Ep="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2032%2032'%20xmlns='http://www.w3.org/2000/svg'%20fill='none'%3e%3ctitle%3efile_type_vite%3c/title%3e%3cpath%20d='M29.8836%206.146L16.7418%2029.6457c-.2714.4851-.9684.488-1.2439.0052L2.0956%206.1482c-.3-.5262.1498-1.1635.746-1.057l13.156%202.3516a.7144.7144%200%2000.2537-.0004l12.8808-2.3478c.5942-.1083%201.0463.5241.7515%201.0513z'%20fill='url(%23paint0_linear)'/%3e%3cpath%20d='M22.2644%202.0069l-9.7253%201.9056a.3571.3571%200%2000-.2879.3294l-.5982%2010.1038c-.014.238.2045.4227.4367.3691l2.7077-.6248c.2534-.0585.4823.1647.4302.4194l-.8044%203.9393c-.0542.265.1947.4918.4536.4132l1.6724-.5082c.2593-.0787.5084.1487.4536.414l-1.2784%206.1877c-.08.387.4348.598.6495.2662L16.5173%2025%2024.442%209.1848c.1327-.2648-.096-.5667-.387-.5106l-2.787.5379c-.262.0505-.4848-.1934-.4109-.4497l1.8191-6.306c.074-.2568-.1496-.5009-.4118-.4495z'%20fill='url(%23paint1_linear)'/%3e%3cdefs%20id='defs50'%3e%3clinearGradient%20id='paint0_linear'%20x1='6.0002'%20y1='32.9999'%20x2='235'%20y2='344'%20gradientUnits='userSpaceOnUse'%20gradientTransform='matrix(.07142%200%200%20.07142%201.3398%201.8944)'%3e%3cstop%20stop-color='%2341D1FF'%20id='stop38'/%3e%3cstop%20offset='1'%20stop-color='%23BD34FE'%20id='stop40'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear'%20x1='194.651'%20y1='8.8182'%20x2='236.076'%20y2='292.989'%20gradientUnits='userSpaceOnUse'%20gradientTransform='matrix(.07142%200%200%20.07142%201.3398%201.8944)'%3e%3cstop%20stop-color='%23FFEA83'%20id='stop43'/%3e%3cstop%20offset='.0833'%20stop-color='%23FFDD35'%20id='stop45'/%3e%3cstop%20offset='1'%20stop-color='%23FFA800'%20id='stop47'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",Ip="data:image/svg+xml,%3csvg%20width='105'%20height='105'%20viewBox='0%200%20105%20105'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_14_41)'%3e%3cpath%20d='M103.02%2047.8219L57.1758%201.98038C54.5372%20-0.6598%2050.2552%20-0.6598%2047.6134%201.98038L38.0937%2011.5001L50.1699%2023.5763C52.9762%2022.6281%2056.1943%2023.2642%2058.4313%2025.5012C60.6789%2027.7525%2061.3106%2030.9981%2060.3393%2033.8134L71.9775%2045.452C74.7932%2044.482%2078.0421%2045.1095%2080.291%2047.3621C83.434%2050.5039%2083.434%2055.596%2080.291%2058.7399C77.1471%2061.8841%2072.055%2061.8841%2068.9095%2058.7399C66.5454%2056.3733%2065.9613%2052.9013%2067.1582%2049.9888L56.3046%2039.1352L56.3034%2067.6973C57.0902%2068.0863%2057.8088%2068.6002%2058.4313%2069.2189C61.5743%2072.3607%2061.5743%2077.4532%2058.4313%2080.5995C55.2874%2083.7422%2050.1929%2083.7422%2047.0535%2080.5995C43.9105%2077.4532%2043.9105%2072.3611%2047.0535%2069.2193C47.8067%2068.4658%2048.7019%2067.869%2049.6871%2067.4635V38.6352C48.7004%2038.2324%2047.8048%2037.6353%2047.0535%2036.8793C44.6722%2034.5013%2044.0996%2031.0071%2045.3198%2028.0831L33.4154%2016.1775L1.98105%2047.6099C-0.660352%2050.2525%20-0.660352%2054.5349%201.98105%2057.1755L47.8259%20103.018C50.4652%20105.658%2054.7464%20105.658%2057.3891%20103.018L103.019%2057.3884C105.66%2054.747%20105.66%2050.4621%20103.019%2047.8219'%20fill='%23DE4C36'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_14_41'%3e%3crect%20width='105'%20height='105'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",ly="data:image/svg+xml,%3csvg%20width='112'%20height='112'%20viewBox='0%200%20112%20112'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M101.535%2017.605L81.3541%207.88899C80.2144%207.33948%2078.932%207.15814%2077.6847%207.37011C76.4373%207.58208%2075.2868%208.17686%2074.3926%209.07199L8.3301%2069.3C7.52857%2070.0273%207.04878%2071.0432%206.99627%2072.1243C6.94376%2073.2053%207.32283%2074.2629%208.0501%2075.0645C8.1376%2075.159%208.2251%2075.25%208.3196%2075.334L13.7131%2080.234C14.4179%2080.8754%2015.325%2081.2497%2016.2771%2081.2919C17.2291%2081.3341%2018.1658%2081.0416%2018.9246%2080.465L98.4971%2020.125C99.0981%2019.6689%2099.8145%2019.3897%20100.566%2019.3186C101.317%2019.2476%20102.073%2019.3877%20102.749%2019.7231C103.425%2020.0585%20103.993%2020.5758%20104.391%2021.217C104.789%2021.8581%20105%2022.5975%20105%2023.352V23.1175C105%2021.9656%20104.675%2020.8372%20104.062%2019.862C103.449%2018.8868%20102.573%2018.1045%20101.535%2017.605Z'%20fill='%230065A9'/%3e%3cpath%20d='M101.535%2094.395L81.3541%20104.115C80.2141%20104.662%2078.9321%20104.843%2077.6851%20104.631C76.4381%20104.419%2075.2876%20103.825%2074.3926%20102.932L8.3301%2042.7C7.52857%2041.9727%207.04878%2040.9568%206.99627%2039.8758C6.94376%2038.7947%207.32283%2037.7371%208.0501%2036.9355C8.1376%2036.841%208.2251%2036.75%208.3196%2036.666L13.7131%2031.766C14.4186%2031.1219%2015.3278%2030.7459%2016.2822%2030.7037C17.2366%2030.6615%2018.1755%2030.9557%2018.9351%2031.535L98.4971%2091.875C99.0981%2092.3311%2099.8145%2092.6104%20100.566%2092.6814C101.317%2092.7524%20102.073%2092.6123%20102.749%2092.2769C103.425%2091.9415%20103.993%2091.4242%20104.391%2090.783C104.789%2090.1419%20105%2089.4025%20105%2088.648V88.9C104.996%2090.0488%20104.669%2091.1733%20104.057%2092.1451C103.444%2093.1168%20102.57%2093.8965%20101.535%2094.395Z'%20fill='%23007ACC'/%3e%3cpath%20d='M81.3539%20104.115C80.2139%20104.662%2078.9319%20104.843%2077.6849%20104.631C76.4379%20104.419%2075.2874%20103.825%2074.3924%20102.932C74.895%20103.428%2075.5329%20103.764%2076.226%20103.899C76.9192%20104.034%2077.6368%20103.962%2078.2889%20103.691C78.941%20103.42%2079.4987%20102.963%2079.892%20102.376C80.2853%20101.79%2080.4968%20101.1%2080.4999%20100.394V11.606C80.5005%2010.8965%2080.2905%2010.2028%2079.8965%209.61277C79.5025%209.02274%2078.9423%208.56291%2078.2867%208.29155C77.6312%208.02019%2076.9098%207.9495%2076.2141%208.08843C75.5183%208.22737%2074.8795%208.56968%2074.3784%209.072C75.2728%208.1772%2076.423%207.58239%2077.6702%207.36983C78.9173%207.15727%2080.1997%207.33747%2081.3399%207.8855L101.517%2017.5875C102.559%2018.0845%20103.438%2018.8658%20104.054%2019.8412C104.67%2020.8165%20104.998%2021.9463%20105%2023.1V88.9C105%2090.0528%20104.675%2091.1823%20104.061%2092.1582C103.447%2093.1341%20102.571%2093.9168%20101.531%2094.416L81.3539%20104.115Z'%20fill='%231F9CF0'/%3e%3c/svg%3e",wp="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgMjU2IiB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiI+DQogIDxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiByeD0iNDgiIGZpbGw9IiNjYzc4NWMiLz4NCiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTI4LDE0MCkiIGZpbGw9IiNmZmYiPg0KICAgIDx0ZXh0IHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJHZW9yZ2lhLCBzZXJpZiIgZm9udC1zaXplPSIxNzAiIGZvbnQtd2VpZ2h0PSI3MDAiIHk9IjAiPkM8L3RleHQ+DQogIDwvZz4NCiAgPHRleHQgeD0iMTI4IiB5PSIyMjAiIHRleHQtYW5jaG9yPSJtaWRkbGUiDQogICAgICAgIGZvbnQtZmFtaWx5PSJTZWdvZSBVSSwgQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjAiIGZvbnQtd2VpZ2h0PSI2MDAiIGZpbGw9IiNmZmYiPg0KICAgIENsYXVkZQ0KICA8L3RleHQ+DQo8L3N2Zz4NCg==",Tp=t=>(ta("data-v-82dc4971"),t=t(),na(),t),uy={class:"langs"},hy=Tp(()=>V("h2",{class:"langs__title"},"My Tech Stack",-1)),dy=Tp(()=>V("p",{class:"langs__desc"},"Technologies I've been working with recently",-1)),fy={class:"langs__grid"},py=["src","alt"],my={class:"techtile__name"},gy={__name:"Main",setup(t){const e=[{name:"HTML",src:mp},{name:"CSS",src:gp},{name:"JavaScript",src:_p},{name:"SCSS",src:vp},{name:"Vue",src:yp},{name:"Vite",src:Ep},{name:"Git",src:Ip},{name:"GitHub",src:ut},{name:"VS Code",src:ly},{name:"Claude AI",src:wp}];return(n,s)=>(Re(),Pe("section",uy,[hy,dy,V("div",fy,[(Re(),Pe(ze,null,js(e,r=>V("div",{class:"techtile",key:r.name},[V("img",{src:r.src,alt:r.name,class:"techtile__icon"},null,8,py),V("span",my,We(r.name),1)])),64))])]))}},_y=Jn(gy,[["__scopeId","data-v-82dc4971"]]),Ap="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgMjYwIiB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI2MCI+DQogIDxkZWZzPg0KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4NCiAgICAgIDxzdG9wIG9mZnNldD0iMCUiICAgc3RvcC1jb2xvcj0iIzBkMjU0MCIvPg0KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDA4OGNjIi8+DQogICAgPC9saW5lYXJHcmFkaWVudD4NCiAgICA8bGluZWFyR3JhZGllbnQgaWQ9InNoaWVsZCIgeDE9IjAiIHkxPSIwIiB4Mj0iMCIgeTI9IjEiPg0KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgICBzdG9wLWNvbG9yPSIjZmZmZmZmIi8+DQogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNjY2U4ZjYiLz4NCiAgICA8L2xpbmVhckdyYWRpZW50Pg0KICA8L2RlZnM+DQogIDxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjYwIiBmaWxsPSJ1cmwoI2JnKSIvPg0KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMDAsMTE4KSI+DQogICAgPHBhdGggZD0iTTAsLTcyIEw2MiwtNTAgTDYyLDggQzYyLDQyIDM1LDY2IDAsNzYgQy0zNSw2NiAtNjIsNDIgLTYyLDggTC02MiwtNTAgWiINCiAgICAgICAgICBmaWxsPSJ1cmwoI3NoaWVsZCkiIHN0cm9rZT0iIzAwNTU4MCIgc3Ryb2tlLXdpZHRoPSIzIi8+DQogICAgPHBhdGggZD0iTS0yMiw0IEwtNiwyMiBMMjYsLTE4IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDU1ODAiIHN0cm9rZS13aWR0aD0iOCINCiAgICAgICAgICBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4NCiAgPC9nPg0KICA8dGV4dCB4PSIyMDAiIHk9IjIzMCIgdGV4dC1hbmNob3I9Im1pZGRsZSINCiAgICAgICAgZm9udC1mYW1pbHk9IlNlZ29lIFVJLCBBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyOCIgZm9udC13ZWlnaHQ9IjcwMCIgZmlsbD0iI2ZmZmZmZiI+DQogICAgU2NhbUd1YXJkIEJvdA0KICA8L3RleHQ+DQo8L3N2Zz4NCg==",Tt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEnSURBVHgBrZTvDYIwEMVLAt8dwRHcREdwA91AN9AN1AlkA0fADXAD+EbCv3rPXE2tpaWESy5SLL/evddWiJkjEoEhpVw0TbOJougVx/GTfksxJQBq2/ZOKfXsuu4gQgMw+jBjyKOu6y2Nd/Sc4x2N90FAVRm1erRUDWiB59FAVDRUBd5jMYo1xrELxKsiU4f4flNYsxNa0cTPqJqVpcIrV7h0wb4GQDf1kakVHObFLl6YaUBVVUs4a4FlVkOGYICY7XhhuhY6jLdFodrCf5DBC0M7Q1rACE3Tj44EPjv3HU3a8OTt0BwA0LpvA//sw77vrZOhI2VJl8FNjAlNq9ysQBmA4ydCQh0hQFERjtsoA1zBLkoj7yGwvwuW21/BgCRJ0skX6FzxBixX1Dd9LydPAAAAAElFTkSuQmCC",bp="/Portfolio/assets/card_1-ybWZ0cmI.png",Cp="/Portfolio/assets/card_2-qXvPlFdH.png",Rp="/Portfolio/assets/card_3-ojxDyRz-.png",Sp="/Portfolio/assets/card_4-7rrdZ2f_.png",Pp="/Portfolio/assets/card_7-rrrmea1L.jpg",kp="/Portfolio/assets/card_6-CsMu4DwY.png",vy={},yy={class:"works"},Ey=hr('<h2 class="works__title">Projects</h2><p class="works__desc">Things I&#39;ve built so far</p><div class="works__cards"><div class="works__cards_card"><img src="'+Ap+'" alt="ScamGuard Bot" class="card__img"><div class="card__desc"><h3 class="card__desc_title">ScamGuard Bot</h3><p class="card__desc_text"> Telegram bot that flags suspicious accounts: estimates account age, scans every URL/file with VirusTotal, cross-checks against the CAS anti-spam list, and builds a shared scammer database. Vibe-coded end-to-end with Claude AI, deployed 24/7 on Railway. </p><p class="card__desc_info">Tech stack : Python, python-telegram-bot, SQLite, VirusTotal API, Railway</p><div class="card__desc_links"><div class="card__desc_link"><img src="'+Tt+'" alt=""><a href="https://t.me/safityprovider_bot" target="_blank" rel="noopener">Open in Telegram</a></div><div class="card__desc_git"><img src="'+ut+'" alt=""><a href="https://github.com/RustamIsroilov/safitybot" target="_blank" rel="noopener">View Code</a></div></div></div></div><div class="works__cards_card"><img src="'+bp+'" alt="" class="card__img"><div class="card__desc"><h3 class="card__desc_title">Notes</h3><p class="card__desc_text"> Streamline your thoughts with our intuitive notes site. Effortlessly capture ideas, stay organized, and boost productivity. Your digital notepad for a smarter you. </p><p class="card__desc_info">Tech stack : HTML, JavaScript, SCSS, Vue</p><div class="card__desc_links"><div class="card__desc_link"><img src="'+Tt+'" alt=""><a href="https://smirfayoz.github.io/todo-list/" target="_blank" rel="noopener">Live Preview</a></div><div class="card__desc_git"><img src="'+ut+'" alt=""><a href="https://github.com/RustamIsroilov/Notes" target="_blank" rel="noopener">View Code</a></div></div></div></div><div class="works__cards_card"><img src="'+Cp+'" alt="" class="card__img"><div class="card__desc"><h3 class="card__desc_title">dBurger</h3><p class="card__desc_text"> Savor the extraordinary at our burger haven. Indulge in mouthwatering creations crafted with the finest ingredients. Elevate your burger experience with flavors that redefine culinary delight. </p><p class="card__desc_info">Tech stack : HTML, JavaScript, CSS</p><div class="card__desc_links"><div class="card__desc_link"><img src="'+Tt+'" alt=""><a href="https://rustamisroilov.github.io/dBurger/" target="_blank" rel="noopener">Live Preview</a></div><div class="card__desc_git"><img src="'+ut+'" alt=""><a href="https://github.com/RustamIsroilov/dBurger" target="_blank" rel="noopener">View Code</a></div></div></div></div><div class="works__cards_card"><img src="'+Rp+'" alt="" class="card__img"><div class="card__desc"><h3 class="card__desc_title">Vue Cinema</h3><p class="card__desc_text"> Dive into a cinematic universe where every frame tells a story. Latest releases, exclusive content, and a seamless booking experience — movie nights, elevated. </p><p class="card__desc_info">Tech stack : HTML, CSS</p><div class="card__desc_links"><div class="card__desc_link"><img src="'+Tt+'" alt=""><a href="https://rustamisroilov.github.io/VueCinema/" target="_blank" rel="noopener">Live Preview</a></div><div class="card__desc_git"><img src="'+ut+'" alt=""><a href="https://github.com/RustamIsroilov/VueCinema" target="_blank" rel="noopener">View Code</a></div></div></div></div><div class="works__cards_card"><img src="'+Sp+'" alt="" class="card__img"><div class="card__desc"><h3 class="card__desc_title">Apreture</h3><p class="card__desc_text"> Explore a world of visual mastery. Unleash creativity with precision and clarity — where photography meets artistry and your vision finds its perfect frame. </p><p class="card__desc_info">Tech stack : HTML, SCSS</p><div class="card__desc_links"><div class="card__desc_link"><img src="'+Tt+'" alt=""><a href="https://rustamisroilov.github.io/document/" target="_blank" rel="noopener">Live Preview</a></div><div class="card__desc_git"><img src="'+ut+'" alt=""><a href="https://github.com/RustamIsroilov/document" target="_blank" rel="noopener">View Code</a></div></div></div></div><div class="works__cards_card"><img src="'+Pp+'" alt="" class="card__img"><div class="card__desc"><h3 class="card__desc_title">Totembo</h3><p class="card__desc_text"> Totembo is my favorite HTML and CSS project — a collection of stylish watches with online ordering, an intuitive interface and impeccable service. </p><p class="card__desc_info">Tech stack : HTML, CSS</p><div class="card__desc_links"><div class="card__desc_link"><img src="'+Tt+'" alt=""><a href="https://rustamisroilov.github.io/Totembo/" target="_blank" rel="noopener">Live Preview</a></div><div class="card__desc_git"><img src="'+ut+'" alt=""><a href="https://github.com/RustamIsroilov/Totembo" target="_blank" rel="noopener">View Code</a></div></div></div></div><div class="works__cards_card"><img src="'+kp+'" alt="" class="card__img"><div class="card__desc"><h3 class="card__desc_title">CinePhile</h3><p class="card__desc_text"> Welcome to a cinematic journey. Explore a variety of movies, book tickets online, and enjoy a modern, user-centred design. </p><p class="card__desc_info">Tech stack : HTML, JavaScript, SASS, Vue</p><div class="card__desc_links"><div class="card__desc_link"><img src="'+Tt+'" alt=""><a href="https://fakhad.github.io/movie-app" target="_blank" rel="noopener">Live Preview</a></div></div></div></div></div>',3),Iy=[Ey];function wy(t,e){return Re(),Pe("div",yy,Iy)}const Ty=Jn(vy,[["render",wy]]),Ay={__name:"Home",setup(t){return(e,n)=>(Re(),Pe("div",null,[ge(cy),ge(_y),ge(Ty),ge(dr)]))}},by="/Portfolio/assets/me-stack-Ae85n7c9.jpg",Cy=hr('<div class="about"><h1 class="about__title">I have studied the languages listed below at <span>Proweb</span> Learning Center, and I level them up daily by vibe-coding with <span>Claude AI</span>. </h1><img src="'+by+'" alt="Rustam Isroilov" class="about__img about__img--landscape"></div><div class="stack"><h2 class="stack__title">My Tech Stack</h2><p class="stack__desc">Technologies I&#39;ve been working with recently</p><div class="stack__items"><div class="stack__items_item"><h3 class="item__title">HTML</h3><img src="'+mp+'" alt="" class="stack__items_img"><div class="stack__line"></div><h3 class="item__procent">90%</h3></div><div class="stack__items_item"><h3 class="item__title">CSS</h3><img src="'+gp+'" alt="" class="stack__items_img"><div class="stack__line"></div><h3 class="item__procent">90%</h3></div><div class="stack__items_item"><h3 class="item__title">JS</h3><img src="'+_p+'" alt="" class="stack__items_img"><div class="stack__line"></div><h3 class="item__procent">70%</h3></div><div class="stack__items_item"><h3 class="item__title">Vue</h3><img src="'+yp+'" alt="" class="stack__items_img1"><div class="stack__line1"></div><h3 class="item__procent">75%</h3></div><div class="stack__items_item"><h3 class="item__title">SCSS</h3><img src="'+vp+'" alt="" class="stack__items_img"><div class="stack__line"></div><h3 class="item__procent">85%</h3></div><div class="stack__items_item"><h3 class="item__title">Vite</h3><img src="'+Ep+'" alt="" class="stack__items_img"><div class="stack__line"></div><h3 class="item__procent">70%</h3></div><div class="stack__items_item"><h3 class="item__title">GitHub</h3><img src="'+ut+'" alt="" class="stack__items_img"><div class="stack__line"></div><h3 class="item__procent">70%</h3></div><div class="stack__items_item"><h3 class="item__title">Git</h3><img src="'+Ip+'" alt="" class="stack__items_img"><div class="stack__line"></div><h3 class="item__procent">90%</h3></div><div class="stack__items_item"><h3 class="item__title">Claude AI</h3><img src="'+wp+'" alt="" class="stack__items_img"><div class="stack__line"></div><h3 class="item__procent">95%</h3></div></div></div>',2),Ry={__name:"Stack",setup(t){return(e,n)=>(Re(),Pe(ze,null,[Cy,ge(dr)],64))}},Sy=hr('<div class="works" data-v-56adae16><h2 class="card__title" data-v-56adae16>Projects</h2><p class="works__desc" data-v-56adae16>Things I&#39;ve built so far</p><div class="works__cards" data-v-56adae16><div class="project__card" data-v-56adae16><img src="'+Ap+'" alt="ScamGuard" class="card__img" data-v-56adae16><div class="card__desc" data-v-56adae16><div class="card__title" data-v-56adae16>ScamGuard Bot</div><div class="card__text" data-v-56adae16> Telegram bot that flags suspicious accounts. It estimates each sender&#39;s account age, looks them up in a shared scammer database, cross-checks them against the CAS anti-spam list, and scans every URL and file in their messages with VirusTotal. Vibe-coded end-to-end with Claude AI, hosted 24/7 on Railway. </div><div class="card__btns" data-v-56adae16><div class="card__btns_btn" data-v-56adae16><img src="'+Tt+'" alt="" data-v-56adae16><a href="https://t.me/safityprovider_bot" target="_blank" rel="noopener" data-v-56adae16>Open in Telegram</a></div><div class="card__btns_btn" data-v-56adae16><img src="'+ut+'" alt="" data-v-56adae16><a href="https://github.com/RustamIsroilov/safitybot" target="_blank" rel="noopener" data-v-56adae16>View Code</a></div></div></div></div><div class="project__card" data-v-56adae16><img src="'+bp+'" alt="" class="card__img" data-v-56adae16><div class="card__desc" data-v-56adae16><div class="card__title" data-v-56adae16>Notes</div><div class="card__text" data-v-56adae16>Notes is my debut project in Vue.js. An intuitive note-taking experience — create, edit and organize notes with ease, sync across devices and manage them with multi-functional shortcuts. </div><div class="card__btns" data-v-56adae16><div class="card__btns_btn" data-v-56adae16><img src="'+Tt+'" alt="" data-v-56adae16><a href="https://smirfayoz.github.io/todo-list/" target="_blank" rel="noopener" data-v-56adae16>View Site</a></div><div class="card__btns_btn" data-v-56adae16><img src="'+ut+'" alt="" data-v-56adae16><a href="https://github.com/RustamIsroilov/Notes" target="_blank" rel="noopener" data-v-56adae16>View Code</a></div></div></div></div><div class="project__card" data-v-56adae16><div class="card__desc" data-v-56adae16><div class="card__title" data-v-56adae16>dBurger</div><div class="card__text" data-v-56adae16>Welcome to the world of taste with dBurger — my first JS project. Discover mouth-watering burgers, order online, and enjoy a unique design and user-friendly interface. </div><div class="card__btns" data-v-56adae16><div class="card__btns_btn" data-v-56adae16><img src="'+Tt+'" alt="" data-v-56adae16><a href="https://rustamisroilov.github.io/dBurger/" target="_blank" rel="noopener" data-v-56adae16>View Site</a></div><div class="card__btns_btn" data-v-56adae16><img src="'+ut+'" alt="" data-v-56adae16><a href="https://github.com/RustamIsroilov/dBurger" target="_blank" rel="noopener" data-v-56adae16>View Code</a></div></div></div><img src="'+Cp+'" alt="" class="card__img" data-v-56adae16></div><div class="project__card" data-v-56adae16><img src="'+kp+'" alt="" class="card__img" data-v-56adae16><div class="card__desc" data-v-56adae16><div class="card__title" data-v-56adae16>CinePhile</div><div class="card__text" data-v-56adae16>A cinematic journey, my top Vue.js project. Explore a variety of movies, conveniently book tickets online, and enjoy a modern design and unique user experience. </div><div class="card__btns" data-v-56adae16><div class="card__btns_btn" data-v-56adae16><img src="'+Tt+'" alt="" data-v-56adae16><a href="https://fakhad.github.io/movie-app" target="_blank" rel="noopener" data-v-56adae16>View Site</a></div></div></div></div><div class="project__card" data-v-56adae16><div class="card__desc" data-v-56adae16><div class="card__title" data-v-56adae16>Totembo</div><div class="card__text" data-v-56adae16>My favorite HTML and CSS project — a collection of stylish watches. Conveniently choose and order online with an intuitive interface and impeccable service. </div><div class="card__btns" data-v-56adae16><div class="card__btns_btn" data-v-56adae16><img src="'+Tt+'" alt="" data-v-56adae16><a href="https://rustamisroilov.github.io/Totembo/" target="_blank" rel="noopener" data-v-56adae16>View Site</a></div><div class="card__btns_btn" data-v-56adae16><img src="'+ut+'" alt="" data-v-56adae16><a href="https://github.com/RustamIsroilov/Totembo" target="_blank" rel="noopener" data-v-56adae16>View Code</a></div></div></div><img src="'+Pp+'" alt="" class="card__img" data-v-56adae16></div><div class="project__card" data-v-56adae16><img src="'+Sp+'" alt="" class="card__img" data-v-56adae16><div class="card__desc" data-v-56adae16><div class="card__title" data-v-56adae16>Apreture</div><div class="card__text" data-v-56adae16>My best website written in HTML and CSS — your virtual studio assistant. Order unique photographs created by professionals through an intuitive interface and enjoy a personalized approach to each photo. </div><div class="card__btns" data-v-56adae16><div class="card__btns_btn" data-v-56adae16><img src="'+Tt+'" alt="" data-v-56adae16><a href="https://rustamisroilov.github.io/document/" target="_blank" rel="noopener" data-v-56adae16>View Site</a></div><div class="card__btns_btn" data-v-56adae16><img src="'+ut+'" alt="" data-v-56adae16><a href="https://github.com/RustamIsroilov/document" target="_blank" rel="noopener" data-v-56adae16>View Code</a></div></div></div></div><div class="project__card" data-v-56adae16><div class="card__desc" data-v-56adae16><div class="card__title" data-v-56adae16>Vue Cinema</div><div class="card__text" data-v-56adae16> My most significant project in HTML and CSS. Find information about films, schedules and purchase tickets online. Thank you for choosing our virtual cinema! </div><div class="card__btns" data-v-56adae16><div class="card__btns_btn" data-v-56adae16><img src="'+Tt+'" alt="" data-v-56adae16><a href="https://rustamisroilov.github.io/VueCinema/" target="_blank" rel="noopener" data-v-56adae16>View Site</a></div><div class="card__btns_btn" data-v-56adae16><img src="'+ut+'" alt="" data-v-56adae16><a href="https://github.com/RustamIsroilov/VueCinema" target="_blank" rel="noopener" data-v-56adae16>View Code</a></div></div></div><img src="'+Rp+'" alt="" class="card__img" data-v-56adae16></div></div></div>',1),Py={__name:"Project",setup(t){return(e,n)=>(Re(),Pe(ze,null,[Sy,ge(dr)],64))}},ky=Jn(Py,[["__scopeId","data-v-56adae16"]]),Vy=V("div",null,[V("h1",{class:"contact__title"},[pe("For any questions please mail me: "),V("span",null,"isroilovr10@gmail.com")])],-1),Dy={__name:"Contact",setup(t){return(e,n)=>(Re(),Pe(ze,null,[Vy,ge(dr)],64))}};var zh={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vp=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Ny=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],a=t[n++],c=t[n++],l=((r&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],a=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Dp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],a=r+1<t.length,c=a?t[r+1]:0,l=r+2<t.length,h=l?t[r+2]:0,f=i>>2,m=(i&3)<<4|c>>4;let g=(c&15)<<2|h>>6,w=h&63;l||(w=64,a||(g=64)),s.push(n[f],n[m],n[g],n[w])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Vp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ny(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],c=r<t.length?n[t.charAt(r)]:0;++r;const h=r<t.length?n[t.charAt(r)]:64;++r;const m=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||c==null||h==null||m==null)throw new Oy;const g=i<<2|c>>4;if(s.push(g),h!==64){const w=c<<4&240|h>>2;if(s.push(w),m!==64){const k=h<<6&192|m;s.push(k)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Oy extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const My=function(t){const e=Vp(t);return Dp.encodeByteArray(e,!0)},Po=function(t){return My(t).replace(/\./g,"")},Np=function(t){try{return Dp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ly=()=>xy().__FIREBASE_DEFAULTS__,Fy=()=>{if(typeof process>"u"||typeof zh>"u")return;const t=zh.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Uy=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Np(t[1]);return e&&JSON.parse(e)},la=()=>{try{return Ly()||Fy()||Uy()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Op=t=>{var e,n;return(n=(e=la())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},By=t=>{const e=Op(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Mp=()=>{var t;return(t=la())===null||t===void 0?void 0:t.config},xp=t=>{var e;return(e=la())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $y(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),c="";return[Po(JSON.stringify(n)),Po(JSON.stringify(a)),c].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Hy(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pt())}function qy(){var t;const e=(t=la())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Wy(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function zy(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ky(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Gy(){const t=pt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Qy(){return!qy()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Yy(){try{return typeof indexedDB=="object"}catch{return!1}}function Jy(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zy="FirebaseError";class Tn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Zy,Object.setPrototypeOf(this,Tn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ei.prototype.create)}}class Ei{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],a=i?Xy(i,s):"Error",c=`${this.serviceName}: ${a} (${r}).`;return new Tn(r,c,s)}}function Xy(t,e){return t.replace(e1,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const e1=/\{\$([^}]+)}/g;function t1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ko(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],a=e[r];if(Kh(i)&&Kh(a)){if(!ko(i,a))return!1}else if(i!==a)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Kh(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ii(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function jr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function $r(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function n1(t,e){const n=new s1(t,e);return n.subscribe.bind(n)}class s1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");r1(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Ja),r.error===void 0&&(r.error=Ja),r.complete===void 0&&(r.complete=Ja);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function r1(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ja(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(t){return t&&t._delegate?t._delegate:t}class gs{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const is="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new jy;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(a1(e))try{this.getOrInitializeService({instanceIdentifier:is})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=is){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=is){return this.instances.has(e)}getOptions(e=is){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);s===c&&a.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const a=this.instances.get(r);return a&&e(a,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:o1(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=is){return this.component?this.component.multipleInstances?e:is:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function o1(t){return t===is?void 0:t}function a1(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new i1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ie||(Ie={}));const l1={debug:Ie.DEBUG,verbose:Ie.VERBOSE,info:Ie.INFO,warn:Ie.WARN,error:Ie.ERROR,silent:Ie.SILENT},u1=Ie.INFO,h1={[Ie.DEBUG]:"log",[Ie.VERBOSE]:"log",[Ie.INFO]:"info",[Ie.WARN]:"warn",[Ie.ERROR]:"error"},d1=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=h1[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class yl{constructor(e){this.name=e,this._logLevel=u1,this._logHandler=d1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?l1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ie.DEBUG,...e),this._logHandler(this,Ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ie.VERBOSE,...e),this._logHandler(this,Ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ie.INFO,...e),this._logHandler(this,Ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ie.WARN,...e),this._logHandler(this,Ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ie.ERROR,...e),this._logHandler(this,Ie.ERROR,...e)}}const f1=(t,e)=>e.some(n=>t instanceof n);let Gh,Qh;function p1(){return Gh||(Gh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function m1(){return Qh||(Qh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Lp=new WeakMap,Rc=new WeakMap,Fp=new WeakMap,Za=new WeakMap,El=new WeakMap;function g1(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",a)},i=()=>{n(jn(t.result)),r()},a=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&Lp.set(n,t)}).catch(()=>{}),El.set(e,t),e}function _1(t){if(Rc.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",a),t.removeEventListener("abort",a)},i=()=>{n(),r()},a=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",a),t.addEventListener("abort",a)});Rc.set(t,e)}let Sc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Rc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Fp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return jn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function v1(t){Sc=t(Sc)}function y1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Xa(this),e,...n);return Fp.set(s,e.sort?e.sort():[e]),jn(s)}:m1().includes(t)?function(...e){return t.apply(Xa(this),e),jn(Lp.get(this))}:function(...e){return jn(t.apply(Xa(this),e))}}function E1(t){return typeof t=="function"?y1(t):(t instanceof IDBTransaction&&_1(t),f1(t,p1())?new Proxy(t,Sc):t)}function jn(t){if(t instanceof IDBRequest)return g1(t);if(Za.has(t))return Za.get(t);const e=E1(t);return e!==t&&(Za.set(t,e),El.set(e,t)),e}const Xa=t=>El.get(t);function I1(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const a=indexedDB.open(t,e),c=jn(a);return s&&a.addEventListener("upgradeneeded",l=>{s(jn(a.result),l.oldVersion,l.newVersion,jn(a.transaction),l)}),n&&a.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),r&&l.addEventListener("versionchange",h=>r(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const w1=["get","getKey","getAll","getAllKeys","count"],T1=["put","add","delete","clear"],ec=new Map;function Yh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ec.get(e))return ec.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=T1.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||w1.includes(n)))return;const i=async function(a,...c){const l=this.transaction(a,r?"readwrite":"readonly");let h=l.store;return s&&(h=h.index(c.shift())),(await Promise.all([h[n](...c),r&&l.done]))[0]};return ec.set(e,i),i}v1(t=>({...t,get:(e,n,s)=>Yh(e,n)||t.get(e,n,s),has:(e,n)=>!!Yh(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(b1(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function b1(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Pc="@firebase/app",Jh="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn=new yl("@firebase/app"),C1="@firebase/app-compat",R1="@firebase/analytics-compat",S1="@firebase/analytics",P1="@firebase/app-check-compat",k1="@firebase/app-check",V1="@firebase/auth",D1="@firebase/auth-compat",N1="@firebase/database",O1="@firebase/data-connect",M1="@firebase/database-compat",x1="@firebase/functions",L1="@firebase/functions-compat",F1="@firebase/installations",U1="@firebase/installations-compat",B1="@firebase/messaging",j1="@firebase/messaging-compat",$1="@firebase/performance",H1="@firebase/performance-compat",q1="@firebase/remote-config",W1="@firebase/remote-config-compat",z1="@firebase/storage",K1="@firebase/storage-compat",G1="@firebase/firestore",Q1="@firebase/vertexai-preview",Y1="@firebase/firestore-compat",J1="firebase",Z1="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kc="[DEFAULT]",X1={[Pc]:"fire-core",[C1]:"fire-core-compat",[S1]:"fire-analytics",[R1]:"fire-analytics-compat",[k1]:"fire-app-check",[P1]:"fire-app-check-compat",[V1]:"fire-auth",[D1]:"fire-auth-compat",[N1]:"fire-rtdb",[O1]:"fire-data-connect",[M1]:"fire-rtdb-compat",[x1]:"fire-fn",[L1]:"fire-fn-compat",[F1]:"fire-iid",[U1]:"fire-iid-compat",[B1]:"fire-fcm",[j1]:"fire-fcm-compat",[$1]:"fire-perf",[H1]:"fire-perf-compat",[q1]:"fire-rc",[W1]:"fire-rc-compat",[z1]:"fire-gcs",[K1]:"fire-gcs-compat",[G1]:"fire-fst",[Y1]:"fire-fst-compat",[Q1]:"fire-vertex","fire-js":"fire-js",[J1]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vo=new Map,eE=new Map,Vc=new Map;function Zh(t,e){try{t.container.addComponent(e)}catch(n){vn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Zs(t){const e=t.name;if(Vc.has(e))return vn.debug(`There were multiple attempts to register component ${e}.`),!1;Vc.set(e,t);for(const n of Vo.values())Zh(n,t);for(const n of eE.values())Zh(n,t);return!0}function Il(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function hn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},$n=new Ei("app","Firebase",tE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new gs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw $n.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr=Z1;function Up(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:kc,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw $n.create("bad-app-name",{appName:String(r)});if(n||(n=Mp()),!n)throw $n.create("no-options");const i=Vo.get(r);if(i){if(ko(n,i.options)&&ko(s,i.config))return i;throw $n.create("duplicate-app",{appName:r})}const a=new c1(r);for(const l of Vc.values())a.addComponent(l);const c=new nE(n,s,a);return Vo.set(r,c),c}function Bp(t=kc){const e=Vo.get(t);if(!e&&t===kc&&Mp())return Up();if(!e)throw $n.create("no-app",{appName:t});return e}function Hn(t,e,n){var s;let r=(s=X1[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const c=[`Unable to register library "${r}" with version "${e}":`];i&&c.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),vn.warn(c.join(" "));return}Zs(new gs(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sE="firebase-heartbeat-database",rE=1,ci="firebase-heartbeat-store";let tc=null;function jp(){return tc||(tc=I1(sE,rE,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ci)}catch(n){console.warn(n)}}}}).catch(t=>{throw $n.create("idb-open",{originalErrorMessage:t.message})})),tc}async function iE(t){try{const n=(await jp()).transaction(ci),s=await n.objectStore(ci).get($p(t));return await n.done,s}catch(e){if(e instanceof Tn)vn.warn(e.message);else{const n=$n.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});vn.warn(n.message)}}}async function Xh(t,e){try{const s=(await jp()).transaction(ci,"readwrite");await s.objectStore(ci).put(e,$p(t)),await s.done}catch(n){if(n instanceof Tn)vn.warn(n.message);else{const s=$n.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});vn.warn(s.message)}}}function $p(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oE=1024,aE=30*24*60*60*1e3;class cE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new uE(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ed();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const c=new Date(a.date).valueOf();return Date.now()-c<=aE}),this._storage.overwrite(this._heartbeatsCache))}catch(s){vn.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ed(),{heartbeatsToSend:s,unsentEntries:r}=lE(this._heartbeatsCache.heartbeats),i=Po(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return vn.warn(n),""}}}function ed(){return new Date().toISOString().substring(0,10)}function lE(t,e=oE){const n=[];let s=t.slice();for(const r of t){const i=n.find(a=>a.agent===r.agent);if(i){if(i.dates.push(r.date),td(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),td(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class uE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Yy()?Jy().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await iE(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Xh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Xh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function td(t){return Po(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hE(t){Zs(new gs("platform-logger",e=>new A1(e),"PRIVATE")),Zs(new gs("heartbeat",e=>new cE(e),"PRIVATE")),Hn(Pc,Jh,t),Hn(Pc,Jh,"esm2017"),Hn("fire-js","")}hE("");var nd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ds,Hp;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,_){function E(){}E.prototype=_.prototype,A.D=_.prototype,A.prototype=new E,A.prototype.constructor=A,A.C=function(T,b,S){for(var y=Array(arguments.length-2),mt=2;mt<arguments.length;mt++)y[mt-2]=arguments[mt];return _.prototype[b].apply(T,y)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(A,_,E){E||(E=0);var T=Array(16);if(typeof _=="string")for(var b=0;16>b;++b)T[b]=_.charCodeAt(E++)|_.charCodeAt(E++)<<8|_.charCodeAt(E++)<<16|_.charCodeAt(E++)<<24;else for(b=0;16>b;++b)T[b]=_[E++]|_[E++]<<8|_[E++]<<16|_[E++]<<24;_=A.g[0],E=A.g[1],b=A.g[2];var S=A.g[3],y=_+(S^E&(b^S))+T[0]+3614090360&4294967295;_=E+(y<<7&4294967295|y>>>25),y=S+(b^_&(E^b))+T[1]+3905402710&4294967295,S=_+(y<<12&4294967295|y>>>20),y=b+(E^S&(_^E))+T[2]+606105819&4294967295,b=S+(y<<17&4294967295|y>>>15),y=E+(_^b&(S^_))+T[3]+3250441966&4294967295,E=b+(y<<22&4294967295|y>>>10),y=_+(S^E&(b^S))+T[4]+4118548399&4294967295,_=E+(y<<7&4294967295|y>>>25),y=S+(b^_&(E^b))+T[5]+1200080426&4294967295,S=_+(y<<12&4294967295|y>>>20),y=b+(E^S&(_^E))+T[6]+2821735955&4294967295,b=S+(y<<17&4294967295|y>>>15),y=E+(_^b&(S^_))+T[7]+4249261313&4294967295,E=b+(y<<22&4294967295|y>>>10),y=_+(S^E&(b^S))+T[8]+1770035416&4294967295,_=E+(y<<7&4294967295|y>>>25),y=S+(b^_&(E^b))+T[9]+2336552879&4294967295,S=_+(y<<12&4294967295|y>>>20),y=b+(E^S&(_^E))+T[10]+4294925233&4294967295,b=S+(y<<17&4294967295|y>>>15),y=E+(_^b&(S^_))+T[11]+2304563134&4294967295,E=b+(y<<22&4294967295|y>>>10),y=_+(S^E&(b^S))+T[12]+1804603682&4294967295,_=E+(y<<7&4294967295|y>>>25),y=S+(b^_&(E^b))+T[13]+4254626195&4294967295,S=_+(y<<12&4294967295|y>>>20),y=b+(E^S&(_^E))+T[14]+2792965006&4294967295,b=S+(y<<17&4294967295|y>>>15),y=E+(_^b&(S^_))+T[15]+1236535329&4294967295,E=b+(y<<22&4294967295|y>>>10),y=_+(b^S&(E^b))+T[1]+4129170786&4294967295,_=E+(y<<5&4294967295|y>>>27),y=S+(E^b&(_^E))+T[6]+3225465664&4294967295,S=_+(y<<9&4294967295|y>>>23),y=b+(_^E&(S^_))+T[11]+643717713&4294967295,b=S+(y<<14&4294967295|y>>>18),y=E+(S^_&(b^S))+T[0]+3921069994&4294967295,E=b+(y<<20&4294967295|y>>>12),y=_+(b^S&(E^b))+T[5]+3593408605&4294967295,_=E+(y<<5&4294967295|y>>>27),y=S+(E^b&(_^E))+T[10]+38016083&4294967295,S=_+(y<<9&4294967295|y>>>23),y=b+(_^E&(S^_))+T[15]+3634488961&4294967295,b=S+(y<<14&4294967295|y>>>18),y=E+(S^_&(b^S))+T[4]+3889429448&4294967295,E=b+(y<<20&4294967295|y>>>12),y=_+(b^S&(E^b))+T[9]+568446438&4294967295,_=E+(y<<5&4294967295|y>>>27),y=S+(E^b&(_^E))+T[14]+3275163606&4294967295,S=_+(y<<9&4294967295|y>>>23),y=b+(_^E&(S^_))+T[3]+4107603335&4294967295,b=S+(y<<14&4294967295|y>>>18),y=E+(S^_&(b^S))+T[8]+1163531501&4294967295,E=b+(y<<20&4294967295|y>>>12),y=_+(b^S&(E^b))+T[13]+2850285829&4294967295,_=E+(y<<5&4294967295|y>>>27),y=S+(E^b&(_^E))+T[2]+4243563512&4294967295,S=_+(y<<9&4294967295|y>>>23),y=b+(_^E&(S^_))+T[7]+1735328473&4294967295,b=S+(y<<14&4294967295|y>>>18),y=E+(S^_&(b^S))+T[12]+2368359562&4294967295,E=b+(y<<20&4294967295|y>>>12),y=_+(E^b^S)+T[5]+4294588738&4294967295,_=E+(y<<4&4294967295|y>>>28),y=S+(_^E^b)+T[8]+2272392833&4294967295,S=_+(y<<11&4294967295|y>>>21),y=b+(S^_^E)+T[11]+1839030562&4294967295,b=S+(y<<16&4294967295|y>>>16),y=E+(b^S^_)+T[14]+4259657740&4294967295,E=b+(y<<23&4294967295|y>>>9),y=_+(E^b^S)+T[1]+2763975236&4294967295,_=E+(y<<4&4294967295|y>>>28),y=S+(_^E^b)+T[4]+1272893353&4294967295,S=_+(y<<11&4294967295|y>>>21),y=b+(S^_^E)+T[7]+4139469664&4294967295,b=S+(y<<16&4294967295|y>>>16),y=E+(b^S^_)+T[10]+3200236656&4294967295,E=b+(y<<23&4294967295|y>>>9),y=_+(E^b^S)+T[13]+681279174&4294967295,_=E+(y<<4&4294967295|y>>>28),y=S+(_^E^b)+T[0]+3936430074&4294967295,S=_+(y<<11&4294967295|y>>>21),y=b+(S^_^E)+T[3]+3572445317&4294967295,b=S+(y<<16&4294967295|y>>>16),y=E+(b^S^_)+T[6]+76029189&4294967295,E=b+(y<<23&4294967295|y>>>9),y=_+(E^b^S)+T[9]+3654602809&4294967295,_=E+(y<<4&4294967295|y>>>28),y=S+(_^E^b)+T[12]+3873151461&4294967295,S=_+(y<<11&4294967295|y>>>21),y=b+(S^_^E)+T[15]+530742520&4294967295,b=S+(y<<16&4294967295|y>>>16),y=E+(b^S^_)+T[2]+3299628645&4294967295,E=b+(y<<23&4294967295|y>>>9),y=_+(b^(E|~S))+T[0]+4096336452&4294967295,_=E+(y<<6&4294967295|y>>>26),y=S+(E^(_|~b))+T[7]+1126891415&4294967295,S=_+(y<<10&4294967295|y>>>22),y=b+(_^(S|~E))+T[14]+2878612391&4294967295,b=S+(y<<15&4294967295|y>>>17),y=E+(S^(b|~_))+T[5]+4237533241&4294967295,E=b+(y<<21&4294967295|y>>>11),y=_+(b^(E|~S))+T[12]+1700485571&4294967295,_=E+(y<<6&4294967295|y>>>26),y=S+(E^(_|~b))+T[3]+2399980690&4294967295,S=_+(y<<10&4294967295|y>>>22),y=b+(_^(S|~E))+T[10]+4293915773&4294967295,b=S+(y<<15&4294967295|y>>>17),y=E+(S^(b|~_))+T[1]+2240044497&4294967295,E=b+(y<<21&4294967295|y>>>11),y=_+(b^(E|~S))+T[8]+1873313359&4294967295,_=E+(y<<6&4294967295|y>>>26),y=S+(E^(_|~b))+T[15]+4264355552&4294967295,S=_+(y<<10&4294967295|y>>>22),y=b+(_^(S|~E))+T[6]+2734768916&4294967295,b=S+(y<<15&4294967295|y>>>17),y=E+(S^(b|~_))+T[13]+1309151649&4294967295,E=b+(y<<21&4294967295|y>>>11),y=_+(b^(E|~S))+T[4]+4149444226&4294967295,_=E+(y<<6&4294967295|y>>>26),y=S+(E^(_|~b))+T[11]+3174756917&4294967295,S=_+(y<<10&4294967295|y>>>22),y=b+(_^(S|~E))+T[2]+718787259&4294967295,b=S+(y<<15&4294967295|y>>>17),y=E+(S^(b|~_))+T[9]+3951481745&4294967295,A.g[0]=A.g[0]+_&4294967295,A.g[1]=A.g[1]+(b+(y<<21&4294967295|y>>>11))&4294967295,A.g[2]=A.g[2]+b&4294967295,A.g[3]=A.g[3]+S&4294967295}s.prototype.u=function(A,_){_===void 0&&(_=A.length);for(var E=_-this.blockSize,T=this.B,b=this.h,S=0;S<_;){if(b==0)for(;S<=E;)r(this,A,S),S+=this.blockSize;if(typeof A=="string"){for(;S<_;)if(T[b++]=A.charCodeAt(S++),b==this.blockSize){r(this,T),b=0;break}}else for(;S<_;)if(T[b++]=A[S++],b==this.blockSize){r(this,T),b=0;break}}this.h=b,this.o+=_},s.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var _=1;_<A.length-8;++_)A[_]=0;var E=8*this.o;for(_=A.length-8;_<A.length;++_)A[_]=E&255,E/=256;for(this.u(A),A=Array(16),_=E=0;4>_;++_)for(var T=0;32>T;T+=8)A[E++]=this.g[_]>>>T&255;return A};function i(A,_){var E=c;return Object.prototype.hasOwnProperty.call(E,A)?E[A]:E[A]=_(A)}function a(A,_){this.h=_;for(var E=[],T=!0,b=A.length-1;0<=b;b--){var S=A[b]|0;T&&S==_||(E[b]=S,T=!1)}this.g=E}var c={};function l(A){return-128<=A&&128>A?i(A,function(_){return new a([_|0],0>_?-1:0)}):new a([A|0],0>A?-1:0)}function h(A){if(isNaN(A)||!isFinite(A))return m;if(0>A)return N(h(-A));for(var _=[],E=1,T=0;A>=E;T++)_[T]=A/E|0,E*=4294967296;return new a(_,0)}function f(A,_){if(A.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(A.charAt(0)=="-")return N(f(A.substring(1),_));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=h(Math.pow(_,8)),T=m,b=0;b<A.length;b+=8){var S=Math.min(8,A.length-b),y=parseInt(A.substring(b,b+S),_);8>S?(S=h(Math.pow(_,S)),T=T.j(S).add(h(y))):(T=T.j(E),T=T.add(h(y)))}return T}var m=l(0),g=l(1),w=l(16777216);t=a.prototype,t.m=function(){if(M(this))return-N(this).m();for(var A=0,_=1,E=0;E<this.g.length;E++){var T=this.i(E);A+=(0<=T?T:4294967296+T)*_,_*=4294967296}return A},t.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(k(this))return"0";if(M(this))return"-"+N(this).toString(A);for(var _=h(Math.pow(A,6)),E=this,T="";;){var b=F(E,_).g;E=H(E,b.j(_));var S=((0<E.g.length?E.g[0]:E.h)>>>0).toString(A);if(E=b,k(E))return S+T;for(;6>S.length;)S="0"+S;T=S+T}},t.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function k(A){if(A.h!=0)return!1;for(var _=0;_<A.g.length;_++)if(A.g[_]!=0)return!1;return!0}function M(A){return A.h==-1}t.l=function(A){return A=H(this,A),M(A)?-1:k(A)?0:1};function N(A){for(var _=A.g.length,E=[],T=0;T<_;T++)E[T]=~A.g[T];return new a(E,~A.h).add(g)}t.abs=function(){return M(this)?N(this):this},t.add=function(A){for(var _=Math.max(this.g.length,A.g.length),E=[],T=0,b=0;b<=_;b++){var S=T+(this.i(b)&65535)+(A.i(b)&65535),y=(S>>>16)+(this.i(b)>>>16)+(A.i(b)>>>16);T=y>>>16,S&=65535,y&=65535,E[b]=y<<16|S}return new a(E,E[E.length-1]&-2147483648?-1:0)};function H(A,_){return A.add(N(_))}t.j=function(A){if(k(this)||k(A))return m;if(M(this))return M(A)?N(this).j(N(A)):N(N(this).j(A));if(M(A))return N(this.j(N(A)));if(0>this.l(w)&&0>A.l(w))return h(this.m()*A.m());for(var _=this.g.length+A.g.length,E=[],T=0;T<2*_;T++)E[T]=0;for(T=0;T<this.g.length;T++)for(var b=0;b<A.g.length;b++){var S=this.i(T)>>>16,y=this.i(T)&65535,mt=A.i(b)>>>16,Vt=A.i(b)&65535;E[2*T+2*b]+=y*Vt,L(E,2*T+2*b),E[2*T+2*b+1]+=S*Vt,L(E,2*T+2*b+1),E[2*T+2*b+1]+=y*mt,L(E,2*T+2*b+1),E[2*T+2*b+2]+=S*mt,L(E,2*T+2*b+2)}for(T=0;T<_;T++)E[T]=E[2*T+1]<<16|E[2*T];for(T=_;T<2*_;T++)E[T]=0;return new a(E,0)};function L(A,_){for(;(A[_]&65535)!=A[_];)A[_+1]+=A[_]>>>16,A[_]&=65535,_++}function W(A,_){this.g=A,this.h=_}function F(A,_){if(k(_))throw Error("division by zero");if(k(A))return new W(m,m);if(M(A))return _=F(N(A),_),new W(N(_.g),N(_.h));if(M(_))return _=F(A,N(_)),new W(N(_.g),_.h);if(30<A.g.length){if(M(A)||M(_))throw Error("slowDivide_ only works with positive integers.");for(var E=g,T=_;0>=T.l(A);)E=_e(E),T=_e(T);var b=re(E,1),S=re(T,1);for(T=re(T,2),E=re(E,2);!k(T);){var y=S.add(T);0>=y.l(A)&&(b=b.add(E),S=y),T=re(T,1),E=re(E,1)}return _=H(A,b.j(_)),new W(b,_)}for(b=m;0<=A.l(_);){for(E=Math.max(1,Math.floor(A.m()/_.m())),T=Math.ceil(Math.log(E)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),S=h(E),y=S.j(_);M(y)||0<y.l(A);)E-=T,S=h(E),y=S.j(_);k(S)&&(S=g),b=b.add(S),A=H(A,y)}return new W(b,A)}t.A=function(A){return F(this,A).h},t.and=function(A){for(var _=Math.max(this.g.length,A.g.length),E=[],T=0;T<_;T++)E[T]=this.i(T)&A.i(T);return new a(E,this.h&A.h)},t.or=function(A){for(var _=Math.max(this.g.length,A.g.length),E=[],T=0;T<_;T++)E[T]=this.i(T)|A.i(T);return new a(E,this.h|A.h)},t.xor=function(A){for(var _=Math.max(this.g.length,A.g.length),E=[],T=0;T<_;T++)E[T]=this.i(T)^A.i(T);return new a(E,this.h^A.h)};function _e(A){for(var _=A.g.length+1,E=[],T=0;T<_;T++)E[T]=A.i(T)<<1|A.i(T-1)>>>31;return new a(E,A.h)}function re(A,_){var E=_>>5;_%=32;for(var T=A.g.length-E,b=[],S=0;S<T;S++)b[S]=0<_?A.i(S+E)>>>_|A.i(S+E+1)<<32-_:A.i(S+E);return new a(b,A.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,Hp=s,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,ds=a}).apply(typeof nd<"u"?nd:typeof self<"u"?self:typeof window<"u"?window:{});var eo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var qp,Hr,Wp,fo,Dc,zp,Kp,Gp;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,d){return o==Array.prototype||o==Object.prototype||(o[u]=d.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof eo=="object"&&eo];for(var u=0;u<o.length;++u){var d=o[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var s=n(this);function r(o,u){if(u)e:{var d=s;o=o.split(".");for(var p=0;p<o.length-1;p++){var C=o[p];if(!(C in d))break e;d=d[C]}o=o[o.length-1],p=d[o],u=u(p),u!=p&&u!=null&&e(d,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var d=0,p=!1,C={next:function(){if(!p&&d<o.length){var P=d++;return{value:u(P,o[P]),done:!1}}return p=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}r("Array.prototype.values",function(o){return o||function(){return i(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function l(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function f(o,u,d){return o.call.apply(o.bind,arguments)}function m(o,u,d){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,p),o.apply(u,C)}}return function(){return o.apply(u,arguments)}}function g(o,u,d){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,g.apply(null,arguments)}function w(o,u){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function k(o,u){function d(){}d.prototype=u.prototype,o.aa=u.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(p,C,P){for(var z=Array(arguments.length-2),De=2;De<arguments.length;De++)z[De-2]=arguments[De];return u.prototype[C].apply(p,z)}}function M(o){const u=o.length;if(0<u){const d=Array(u);for(let p=0;p<u;p++)d[p]=o[p];return d}return[]}function N(o,u){for(let d=1;d<arguments.length;d++){const p=arguments[d];if(l(p)){const C=o.length||0,P=p.length||0;o.length=C+P;for(let z=0;z<P;z++)o[C+z]=p[z]}else o.push(p)}}class H{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function L(o){return/^[\s\xa0]*$/.test(o)}function W(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function F(o){return F[" "](o),o}F[" "]=function(){};var _e=W().indexOf("Gecko")!=-1&&!(W().toLowerCase().indexOf("webkit")!=-1&&W().indexOf("Edge")==-1)&&!(W().indexOf("Trident")!=-1||W().indexOf("MSIE")!=-1)&&W().indexOf("Edge")==-1;function re(o,u,d){for(const p in o)u.call(d,o[p],p,o)}function A(o,u){for(const d in o)u.call(void 0,o[d],d,o)}function _(o){const u={};for(const d in o)u[d]=o[d];return u}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(o,u){let d,p;for(let C=1;C<arguments.length;C++){p=arguments[C];for(d in p)o[d]=p[d];for(let P=0;P<E.length;P++)d=E[P],Object.prototype.hasOwnProperty.call(p,d)&&(o[d]=p[d])}}function b(o){var u=1;o=o.split(":");const d=[];for(;0<u&&o.length;)d.push(o.shift()),u--;return o.length&&d.push(o.join(":")),d}function S(o){c.setTimeout(()=>{throw o},0)}function y(){var o=Ct;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class mt{constructor(){this.h=this.g=null}add(u,d){const p=Vt.get();p.set(u,d),this.h?this.h.next=p:this.g=p,this.h=p}}var Vt=new H(()=>new He,o=>o.reset());class He{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Te,ve=!1,Ct=new mt,xt=()=>{const o=c.Promise.resolve(void 0);Te=()=>{o.then(Dt)}};var Dt=()=>{for(var o;o=y();){try{o.h.call(o.g)}catch(d){S(d)}var u=Vt;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}ve=!1};function Le(){this.s=this.s,this.C=this.C}Le.prototype.s=!1,Le.prototype.ma=function(){this.s||(this.s=!0,this.N())},Le.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Fe(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}Fe.prototype.h=function(){this.defaultPrevented=!0};var bn=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};c.addEventListener("test",d,u),c.removeEventListener("test",d,u)}catch{}return o}();function Kt(o,u){if(Fe.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(_e){e:{try{F(u.nodeName);var C=!0;break e}catch{}C=!1}C||(u=null)}}else d=="mouseover"?u=o.fromElement:d=="mouseout"&&(u=o.toElement);this.relatedTarget=u,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Ye[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Kt.aa.h.call(this)}}k(Kt,Fe);var Ye={2:"touch",3:"pen",4:"mouse"};Kt.prototype.h=function(){Kt.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var O="closure_listenable_"+(1e6*Math.random()|0),Y=0;function G(o,u,d,p,C){this.listener=o,this.proxy=null,this.src=u,this.type=d,this.capture=!!p,this.ha=C,this.key=++Y,this.da=this.fa=!1}function X(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Ee(o){this.src=o,this.g={},this.h=0}Ee.prototype.add=function(o,u,d,p,C){var P=o.toString();o=this.g[P],o||(o=this.g[P]=[],this.h++);var z=I(o,u,p,C);return-1<z?(u=o[z],d||(u.fa=!1)):(u=new G(u,this.src,P,!!p,C),u.fa=d,o.push(u)),u};function v(o,u){var d=u.type;if(d in o.g){var p=o.g[d],C=Array.prototype.indexOf.call(p,u,void 0),P;(P=0<=C)&&Array.prototype.splice.call(p,C,1),P&&(X(u),o.g[d].length==0&&(delete o.g[d],o.h--))}}function I(o,u,d,p){for(var C=0;C<o.length;++C){var P=o[C];if(!P.da&&P.listener==u&&P.capture==!!d&&P.ha==p)return C}return-1}var R="closure_lm_"+(1e6*Math.random()|0),D={};function x(o,u,d,p,C){if(p&&p.once)return q(o,u,d,p,C);if(Array.isArray(u)){for(var P=0;P<u.length;P++)x(o,u[P],d,p,C);return null}return d=me(d),o&&o[O]?o.K(u,d,h(p)?!!p.capture:!!p,C):U(o,u,d,!1,p,C)}function U(o,u,d,p,C,P){if(!u)throw Error("Invalid event type");var z=h(C)?!!C.capture:!!C,De=ee(o);if(De||(o[R]=De=new Ee(o)),d=De.add(u,d,p,z,P),d.proxy)return d;if(p=Q(),d.proxy=p,p.src=o,p.listener=d,o.addEventListener)bn||(C=z),C===void 0&&(C=!1),o.addEventListener(u.toString(),p,C);else if(o.attachEvent)o.attachEvent(te(u.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Q(){function o(d){return u.call(o.src,o.listener,d)}const u=J;return o}function q(o,u,d,p,C){if(Array.isArray(u)){for(var P=0;P<u.length;P++)q(o,u[P],d,p,C);return null}return d=me(d),o&&o[O]?o.L(u,d,h(p)?!!p.capture:!!p,C):U(o,u,d,!0,p,C)}function K(o,u,d,p,C){if(Array.isArray(u))for(var P=0;P<u.length;P++)K(o,u[P],d,p,C);else p=h(p)?!!p.capture:!!p,d=me(d),o&&o[O]?(o=o.i,u=String(u).toString(),u in o.g&&(P=o.g[u],d=I(P,d,p,C),-1<d&&(X(P[d]),Array.prototype.splice.call(P,d,1),P.length==0&&(delete o.g[u],o.h--)))):o&&(o=ee(o))&&(u=o.g[u.toString()],o=-1,u&&(o=I(u,d,p,C)),(d=-1<o?u[o]:null)&&j(d))}function j(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[O])v(u.i,o);else{var d=o.type,p=o.proxy;u.removeEventListener?u.removeEventListener(d,p,o.capture):u.detachEvent?u.detachEvent(te(d),p):u.addListener&&u.removeListener&&u.removeListener(p),(d=ee(u))?(v(d,o),d.h==0&&(d.src=null,u[R]=null)):X(o)}}}function te(o){return o in D?D[o]:D[o]="on"+o}function J(o,u){if(o.da)o=!0;else{u=new Kt(u,this);var d=o.listener,p=o.ha||o.src;o.fa&&j(o),o=d.call(p,u)}return o}function ee(o){return o=o[R],o instanceof Ee?o:null}var oe="__closure_events_fn_"+(1e9*Math.random()>>>0);function me(o){return typeof o=="function"?o:(o[oe]||(o[oe]=function(u){return o.handleEvent(u)}),o[oe])}function de(){Le.call(this),this.i=new Ee(this),this.M=this,this.F=null}k(de,Le),de.prototype[O]=!0,de.prototype.removeEventListener=function(o,u,d,p){K(this,o,u,d,p)};function le(o,u){var d,p=o.F;if(p)for(d=[];p;p=p.F)d.push(p);if(o=o.M,p=u.type||u,typeof u=="string")u=new Fe(u,o);else if(u instanceof Fe)u.target=u.target||o;else{var C=u;u=new Fe(p,o),T(u,C)}if(C=!0,d)for(var P=d.length-1;0<=P;P--){var z=u.g=d[P];C=Ne(z,p,!0,u)&&C}if(z=u.g=o,C=Ne(z,p,!0,u)&&C,C=Ne(z,p,!1,u)&&C,d)for(P=0;P<d.length;P++)z=u.g=d[P],C=Ne(z,p,!1,u)&&C}de.prototype.N=function(){if(de.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var d=o.g[u],p=0;p<d.length;p++)X(d[p]);delete o.g[u],o.h--}}this.F=null},de.prototype.K=function(o,u,d,p){return this.i.add(String(o),u,!1,d,p)},de.prototype.L=function(o,u,d,p){return this.i.add(String(o),u,!0,d,p)};function Ne(o,u,d,p){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var C=!0,P=0;P<u.length;++P){var z=u[P];if(z&&!z.da&&z.capture==d){var De=z.listener,Ze=z.ha||z.src;z.fa&&v(o.i,z),C=De.call(Ze,p)!==!1&&C}}return C&&!p.defaultPrevented}function yt(o,u,d){if(typeof o=="function")d&&(o=g(o,d));else if(o&&typeof o.handleEvent=="function")o=g(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(o,u||0)}function on(o){o.g=yt(()=>{o.g=null,o.i&&(o.i=!1,on(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class Vi extends Le{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:on(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Lt(o){Le.call(this),this.h=o,this.g={}}k(Lt,Le);var Er=[];function it(o){re(o.g,function(u,d){this.g.hasOwnProperty(d)&&j(u)},o),o.g={}}Lt.prototype.N=function(){Lt.aa.N.call(this),it(this)},Lt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Et=c.JSON.stringify,Di=c.JSON.parse,qg=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function Ca(){}Ca.prototype.h=null;function ou(o){return o.h||(o.h=o.i())}function au(){}var Ir={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ra(){Fe.call(this,"d")}k(Ra,Fe);function Sa(){Fe.call(this,"c")}k(Sa,Fe);var Xn={},cu=null;function Ni(){return cu=cu||new de}Xn.La="serverreachability";function lu(o){Fe.call(this,Xn.La,o)}k(lu,Fe);function wr(o){const u=Ni();le(u,new lu(u))}Xn.STAT_EVENT="statevent";function uu(o,u){Fe.call(this,Xn.STAT_EVENT,o),this.stat=u}k(uu,Fe);function gt(o){const u=Ni();le(u,new uu(u,o))}Xn.Ma="timingevent";function hu(o,u){Fe.call(this,Xn.Ma,o),this.size=u}k(hu,Fe);function Tr(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},u)}function Ar(){this.g=!0}Ar.prototype.xa=function(){this.g=!1};function Wg(o,u,d,p,C,P){o.info(function(){if(o.g)if(P)for(var z="",De=P.split("&"),Ze=0;Ze<De.length;Ze++){var be=De[Ze].split("=");if(1<be.length){var ot=be[0];be=be[1];var at=ot.split("_");z=2<=at.length&&at[1]=="type"?z+(ot+"="+be+"&"):z+(ot+"=redacted&")}}else z=null;else z=P;return"XMLHTTP REQ ("+p+") [attempt "+C+"]: "+u+`
`+d+`
`+z})}function zg(o,u,d,p,C,P,z){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+C+"]: "+u+`
`+d+`
`+P+" "+z})}function bs(o,u,d,p){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+Gg(o,d)+(p?" "+p:"")})}function Kg(o,u){o.info(function(){return"TIMEOUT: "+u})}Ar.prototype.info=function(){};function Gg(o,u){if(!o.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var p=d[o];if(!(2>p.length)){var C=p[1];if(Array.isArray(C)&&!(1>C.length)){var P=C[0];if(P!="noop"&&P!="stop"&&P!="close")for(var z=1;z<C.length;z++)C[z]=""}}}}return Et(d)}catch{return u}}var Oi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},du={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Pa;function Mi(){}k(Mi,Ca),Mi.prototype.g=function(){return new XMLHttpRequest},Mi.prototype.i=function(){return{}},Pa=new Mi;function Cn(o,u,d,p){this.j=o,this.i=u,this.l=d,this.R=p||1,this.U=new Lt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new fu}function fu(){this.i=null,this.g="",this.h=!1}var pu={},ka={};function Va(o,u,d){o.L=1,o.v=Ui(an(u)),o.m=d,o.P=!0,mu(o,null)}function mu(o,u){o.F=Date.now(),xi(o),o.A=an(o.v);var d=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),Pu(d.i,"t",p),o.C=0,d=o.j.J,o.h=new fu,o.g=Ku(o.j,d?u:null,!o.m),0<o.O&&(o.M=new Vi(g(o.Y,o,o.g),o.O)),u=o.U,d=o.g,p=o.ca;var C="readystatechange";Array.isArray(C)||(C&&(Er[0]=C.toString()),C=Er);for(var P=0;P<C.length;P++){var z=x(d,C[P],p||u.handleEvent,!1,u.h||u);if(!z)break;u.g[z.key]=z}u=o.H?_(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),wr(),Wg(o.i,o.u,o.A,o.l,o.R,o.m)}Cn.prototype.ca=function(o){o=o.target;const u=this.M;u&&cn(o)==3?u.j():this.Y(o)},Cn.prototype.Y=function(o){try{if(o==this.g)e:{const at=cn(this.g);var u=this.g.Ba();const Ss=this.g.Z();if(!(3>at)&&(at!=3||this.g&&(this.h.h||this.g.oa()||xu(this.g)))){this.J||at!=4||u==7||(u==8||0>=Ss?wr(3):wr(2)),Da(this);var d=this.g.Z();this.X=d;t:if(gu(this)){var p=xu(this.g);o="";var C=p.length,P=cn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){es(this),br(this);var z="";break t}this.h.i=new c.TextDecoder}for(u=0;u<C;u++)this.h.h=!0,o+=this.h.i.decode(p[u],{stream:!(P&&u==C-1)});p.length=0,this.h.g+=o,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=d==200,zg(this.i,this.u,this.A,this.l,this.R,at,d),this.o){if(this.T&&!this.K){t:{if(this.g){var De,Ze=this.g;if((De=Ze.g?Ze.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!L(De)){var be=De;break t}}be=null}if(d=be)bs(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Na(this,d);else{this.o=!1,this.s=3,gt(12),es(this),br(this);break e}}if(this.P){d=!0;let Ft;for(;!this.J&&this.C<z.length;)if(Ft=Qg(this,z),Ft==ka){at==4&&(this.s=4,gt(14),d=!1),bs(this.i,this.l,null,"[Incomplete Response]");break}else if(Ft==pu){this.s=4,gt(15),bs(this.i,this.l,z,"[Invalid Chunk]"),d=!1;break}else bs(this.i,this.l,Ft,null),Na(this,Ft);if(gu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),at!=4||z.length!=0||this.h.h||(this.s=1,gt(16),d=!1),this.o=this.o&&d,!d)bs(this.i,this.l,z,"[Invalid Chunked Response]"),es(this),br(this);else if(0<z.length&&!this.W){this.W=!0;var ot=this.j;ot.g==this&&ot.ba&&!ot.M&&(ot.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),Ua(ot),ot.M=!0,gt(11))}}else bs(this.i,this.l,z,null),Na(this,z);at==4&&es(this),this.o&&!this.J&&(at==4?Hu(this.j,this):(this.o=!1,xi(this)))}else d_(this.g),d==400&&0<z.indexOf("Unknown SID")?(this.s=3,gt(12)):(this.s=0,gt(13)),es(this),br(this)}}}catch{}finally{}};function gu(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Qg(o,u){var d=o.C,p=u.indexOf(`
`,d);return p==-1?ka:(d=Number(u.substring(d,p)),isNaN(d)?pu:(p+=1,p+d>u.length?ka:(u=u.slice(p,p+d),o.C=p+d,u)))}Cn.prototype.cancel=function(){this.J=!0,es(this)};function xi(o){o.S=Date.now()+o.I,_u(o,o.I)}function _u(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Tr(g(o.ba,o),u)}function Da(o){o.B&&(c.clearTimeout(o.B),o.B=null)}Cn.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Kg(this.i,this.A),this.L!=2&&(wr(),gt(17)),es(this),this.s=2,br(this)):_u(this,this.S-o)};function br(o){o.j.G==0||o.J||Hu(o.j,o)}function es(o){Da(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,it(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function Na(o,u){try{var d=o.j;if(d.G!=0&&(d.g==o||Oa(d.h,o))){if(!o.K&&Oa(d.h,o)&&d.G==3){try{var p=d.Da.g.parse(u)}catch{p=null}if(Array.isArray(p)&&p.length==3){var C=p;if(C[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)Wi(d),Hi(d);else break e;Fa(d),gt(18)}}else d.za=C[1],0<d.za-d.T&&37500>C[2]&&d.F&&d.v==0&&!d.C&&(d.C=Tr(g(d.Za,d),6e3));if(1>=Eu(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else ns(d,11)}else if((o.K||d.g==o)&&Wi(d),!L(u))for(C=d.Da.g.parse(u),u=0;u<C.length;u++){let be=C[u];if(d.T=be[0],be=be[1],d.G==2)if(be[0]=="c"){d.K=be[1],d.ia=be[2];const ot=be[3];ot!=null&&(d.la=ot,d.j.info("VER="+d.la));const at=be[4];at!=null&&(d.Aa=at,d.j.info("SVER="+d.Aa));const Ss=be[5];Ss!=null&&typeof Ss=="number"&&0<Ss&&(p=1.5*Ss,d.L=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const Ft=o.g;if(Ft){const Ki=Ft.g?Ft.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ki){var P=p.h;P.g||Ki.indexOf("spdy")==-1&&Ki.indexOf("quic")==-1&&Ki.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(Ma(P,P.h),P.h=null))}if(p.D){const Ba=Ft.g?Ft.g.getResponseHeader("X-HTTP-Session-Id"):null;Ba&&(p.ya=Ba,Oe(p.I,p.D,Ba))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),p=d;var z=o;if(p.qa=zu(p,p.J?p.ia:null,p.W),z.K){Iu(p.h,z);var De=z,Ze=p.L;Ze&&(De.I=Ze),De.B&&(Da(De),xi(De)),p.g=z}else ju(p);0<d.i.length&&qi(d)}else be[0]!="stop"&&be[0]!="close"||ns(d,7);else d.G==3&&(be[0]=="stop"||be[0]=="close"?be[0]=="stop"?ns(d,7):La(d):be[0]!="noop"&&d.l&&d.l.ta(be),d.v=0)}}wr(4)}catch{}}var Yg=class{constructor(o,u){this.g=o,this.map=u}};function vu(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function yu(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Eu(o){return o.h?1:o.g?o.g.size:0}function Oa(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function Ma(o,u){o.g?o.g.add(u):o.h=u}function Iu(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}vu.prototype.cancel=function(){if(this.i=wu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function wu(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const d of o.g.values())u=u.concat(d.D);return u}return M(o.i)}function Jg(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(l(o)){for(var u=[],d=o.length,p=0;p<d;p++)u.push(o[p]);return u}u=[],d=0;for(p in o)u[d++]=o[p];return u}function Zg(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(l(o)||typeof o=="string"){var u=[];o=o.length;for(var d=0;d<o;d++)u.push(d);return u}u=[],d=0;for(const p in o)u[d++]=p;return u}}}function Tu(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(l(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var d=Zg(o),p=Jg(o),C=p.length,P=0;P<C;P++)u.call(void 0,p[P],d&&d[P],o)}var Au=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Xg(o,u){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var p=o[d].indexOf("="),C=null;if(0<=p){var P=o[d].substring(0,p);C=o[d].substring(p+1)}else P=o[d];u(P,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function ts(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof ts){this.h=o.h,Li(this,o.j),this.o=o.o,this.g=o.g,Fi(this,o.s),this.l=o.l;var u=o.i,d=new Sr;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),bu(this,d),this.m=o.m}else o&&(u=String(o).match(Au))?(this.h=!1,Li(this,u[1]||"",!0),this.o=Cr(u[2]||""),this.g=Cr(u[3]||"",!0),Fi(this,u[4]),this.l=Cr(u[5]||"",!0),bu(this,u[6]||"",!0),this.m=Cr(u[7]||"")):(this.h=!1,this.i=new Sr(null,this.h))}ts.prototype.toString=function(){var o=[],u=this.j;u&&o.push(Rr(u,Cu,!0),":");var d=this.g;return(d||u=="file")&&(o.push("//"),(u=this.o)&&o.push(Rr(u,Cu,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(Rr(d,d.charAt(0)=="/"?n_:t_,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",Rr(d,r_)),o.join("")};function an(o){return new ts(o)}function Li(o,u,d){o.j=d?Cr(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Fi(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function bu(o,u,d){u instanceof Sr?(o.i=u,i_(o.i,o.h)):(d||(u=Rr(u,s_)),o.i=new Sr(u,o.h))}function Oe(o,u,d){o.i.set(u,d)}function Ui(o){return Oe(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Cr(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Rr(o,u,d){return typeof o=="string"?(o=encodeURI(o).replace(u,e_),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function e_(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Cu=/[#\/\?@]/g,t_=/[#\?:]/g,n_=/[#\?]/g,s_=/[#\?@]/g,r_=/#/g;function Sr(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function Rn(o){o.g||(o.g=new Map,o.h=0,o.i&&Xg(o.i,function(u,d){o.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}t=Sr.prototype,t.add=function(o,u){Rn(this),this.i=null,o=Cs(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(u),this.h+=1,this};function Ru(o,u){Rn(o),u=Cs(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function Su(o,u){return Rn(o),u=Cs(o,u),o.g.has(u)}t.forEach=function(o,u){Rn(this),this.g.forEach(function(d,p){d.forEach(function(C){o.call(u,C,p,this)},this)},this)},t.na=function(){Rn(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let p=0;p<u.length;p++){const C=o[p];for(let P=0;P<C.length;P++)d.push(u[p])}return d},t.V=function(o){Rn(this);let u=[];if(typeof o=="string")Su(this,o)&&(u=u.concat(this.g.get(Cs(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)u=u.concat(o[d])}return u},t.set=function(o,u){return Rn(this),this.i=null,o=Cs(this,o),Su(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},t.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function Pu(o,u,d){Ru(o,u),0<d.length&&(o.i=null,o.g.set(Cs(o,u),M(d)),o.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var p=u[d];const P=encodeURIComponent(String(p)),z=this.V(p);for(p=0;p<z.length;p++){var C=P;z[p]!==""&&(C+="="+encodeURIComponent(String(z[p]))),o.push(C)}}return this.i=o.join("&")};function Cs(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function i_(o,u){u&&!o.j&&(Rn(o),o.i=null,o.g.forEach(function(d,p){var C=p.toLowerCase();p!=C&&(Ru(this,p),Pu(this,C,d))},o)),o.j=u}function o_(o,u){const d=new Ar;if(c.Image){const p=new Image;p.onload=w(Sn,d,"TestLoadImage: loaded",!0,u,p),p.onerror=w(Sn,d,"TestLoadImage: error",!1,u,p),p.onabort=w(Sn,d,"TestLoadImage: abort",!1,u,p),p.ontimeout=w(Sn,d,"TestLoadImage: timeout",!1,u,p),c.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else u(!1)}function a_(o,u){const d=new Ar,p=new AbortController,C=setTimeout(()=>{p.abort(),Sn(d,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:p.signal}).then(P=>{clearTimeout(C),P.ok?Sn(d,"TestPingServer: ok",!0,u):Sn(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(C),Sn(d,"TestPingServer: error",!1,u)})}function Sn(o,u,d,p,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),p(d)}catch{}}function c_(){this.g=new qg}function l_(o,u,d){const p=d||"";try{Tu(o,function(C,P){let z=C;h(C)&&(z=Et(C)),u.push(p+P+"="+encodeURIComponent(z))})}catch(C){throw u.push(p+"type="+encodeURIComponent("_badmap")),C}}function Bi(o){this.l=o.Ub||null,this.j=o.eb||!1}k(Bi,Ca),Bi.prototype.g=function(){return new ji(this.l,this.j)},Bi.prototype.i=function(o){return function(){return o}}({});function ji(o,u){de.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(ji,de),t=ji.prototype,t.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,kr(this)},t.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Pr(this)),this.readyState=0},t.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,kr(this)),this.g&&(this.readyState=3,kr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ku(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function ku(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}t.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Pr(this):kr(this),this.readyState==3&&ku(this)}},t.Ra=function(o){this.g&&(this.response=this.responseText=o,Pr(this))},t.Qa=function(o){this.g&&(this.response=o,Pr(this))},t.ga=function(){this.g&&Pr(this)};function Pr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,kr(o)}t.setRequestHeader=function(o,u){this.u.append(o,u)},t.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=u.next();return o.join(`\r
`)};function kr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(ji.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Vu(o){let u="";return re(o,function(d,p){u+=p,u+=":",u+=d,u+=`\r
`}),u}function xa(o,u,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=Vu(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):Oe(o,u,d))}function Be(o){de.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(Be,de);var u_=/^https?$/i,h_=["POST","PUT"];t=Be.prototype,t.Ha=function(o){this.J=o},t.ea=function(o,u,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Pa.g(),this.v=this.o?ou(this.o):ou(Pa),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(P){Du(this,P);return}if(o=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var C in p)d.set(C,p[C]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const P of p.keys())d.set(P,p.get(P));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(P=>P.toLowerCase()=="content-type"),C=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(h_,u,void 0))||p||C||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,z]of d)this.g.setRequestHeader(P,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Mu(this),this.u=!0,this.g.send(o),this.u=!1}catch(P){Du(this,P)}};function Du(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,Nu(o),$i(o)}function Nu(o){o.A||(o.A=!0,le(o,"complete"),le(o,"error"))}t.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,le(this,"complete"),le(this,"abort"),$i(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),$i(this,!0)),Be.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Ou(this):this.bb())},t.bb=function(){Ou(this)};function Ou(o){if(o.h&&typeof a<"u"&&(!o.v[1]||cn(o)!=4||o.Z()!=2)){if(o.u&&cn(o)==4)yt(o.Ea,0,o);else if(le(o,"readystatechange"),cn(o)==4){o.h=!1;try{const z=o.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var p;if(p=z===0){var C=String(o.D).match(Au)[1]||null;!C&&c.self&&c.self.location&&(C=c.self.location.protocol.slice(0,-1)),p=!u_.test(C?C.toLowerCase():"")}d=p}if(d)le(o,"complete"),le(o,"success");else{o.m=6;try{var P=2<cn(o)?o.g.statusText:""}catch{P=""}o.l=P+" ["+o.Z()+"]",Nu(o)}}finally{$i(o)}}}}function $i(o,u){if(o.g){Mu(o);const d=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||le(o,"ready");try{d.onreadystatechange=p}catch{}}}function Mu(o){o.I&&(c.clearTimeout(o.I),o.I=null)}t.isActive=function(){return!!this.g};function cn(o){return o.g?o.g.readyState:0}t.Z=function(){try{return 2<cn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),Di(u)}};function xu(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function d_(o){const u={};o=(o.g&&2<=cn(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(L(o[p]))continue;var d=b(o[p]);const C=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const P=u[C]||[];u[C]=P,P.push(d)}A(u,function(p){return p.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Vr(o,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||u}function Lu(o){this.Aa=0,this.i=[],this.j=new Ar,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Vr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Vr("baseRetryDelayMs",5e3,o),this.cb=Vr("retryDelaySeedMs",1e4,o),this.Wa=Vr("forwardChannelMaxRetries",2,o),this.wa=Vr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new vu(o&&o.concurrentRequestLimit),this.Da=new c_,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Lu.prototype,t.la=8,t.G=1,t.connect=function(o,u,d,p){gt(0),this.W=o,this.H=u||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.I=zu(this,null,this.W),qi(this)};function La(o){if(Fu(o),o.G==3){var u=o.U++,d=an(o.I);if(Oe(d,"SID",o.K),Oe(d,"RID",u),Oe(d,"TYPE","terminate"),Dr(o,d),u=new Cn(o,o.j,u),u.L=2,u.v=Ui(an(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=u.v,d=!0),d||(u.g=Ku(u.j,null),u.g.ea(u.v)),u.F=Date.now(),xi(u)}Wu(o)}function Hi(o){o.g&&(Ua(o),o.g.cancel(),o.g=null)}function Fu(o){Hi(o),o.u&&(c.clearTimeout(o.u),o.u=null),Wi(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function qi(o){if(!yu(o.h)&&!o.s){o.s=!0;var u=o.Ga;Te||xt(),ve||(Te(),ve=!0),Ct.add(u,o),o.B=0}}function f_(o,u){return Eu(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Tr(g(o.Ga,o,u),qu(o,o.B)),o.B++,!0)}t.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const C=new Cn(this,this.j,o);let P=this.o;if(this.S&&(P?(P=_(P),T(P,this.S)):P=this.S),this.m!==null||this.O||(C.H=P,P=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(u+=p,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=Bu(this,C,u),d=an(this.I),Oe(d,"RID",o),Oe(d,"CVER",22),this.D&&Oe(d,"X-HTTP-Session-Id",this.D),Dr(this,d),P&&(this.O?u="headers="+encodeURIComponent(String(Vu(P)))+"&"+u:this.m&&xa(d,this.m,P)),Ma(this.h,C),this.Ua&&Oe(d,"TYPE","init"),this.P?(Oe(d,"$req",u),Oe(d,"SID","null"),C.T=!0,Va(C,d,null)):Va(C,d,u),this.G=2}}else this.G==3&&(o?Uu(this,o):this.i.length==0||yu(this.h)||Uu(this))};function Uu(o,u){var d;u?d=u.l:d=o.U++;const p=an(o.I);Oe(p,"SID",o.K),Oe(p,"RID",d),Oe(p,"AID",o.T),Dr(o,p),o.m&&o.o&&xa(p,o.m,o.o),d=new Cn(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),u&&(o.i=u.D.concat(o.i)),u=Bu(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Ma(o.h,d),Va(d,p,u)}function Dr(o,u){o.H&&re(o.H,function(d,p){Oe(u,p,d)}),o.l&&Tu({},function(d,p){Oe(u,p,d)})}function Bu(o,u,d){d=Math.min(o.i.length,d);var p=o.l?g(o.l.Na,o.l,o):null;e:{var C=o.i;let P=-1;for(;;){const z=["count="+d];P==-1?0<d?(P=C[0].g,z.push("ofs="+P)):P=0:z.push("ofs="+P);let De=!0;for(let Ze=0;Ze<d;Ze++){let be=C[Ze].g;const ot=C[Ze].map;if(be-=P,0>be)P=Math.max(0,C[Ze].g-100),De=!1;else try{l_(ot,z,"req"+be+"_")}catch{p&&p(ot)}}if(De){p=z.join("&");break e}}}return o=o.i.splice(0,d),u.D=o,p}function ju(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;Te||xt(),ve||(Te(),ve=!0),Ct.add(u,o),o.v=0}}function Fa(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Tr(g(o.Fa,o),qu(o,o.v)),o.v++,!0)}t.Fa=function(){if(this.u=null,$u(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Tr(g(this.ab,this),o)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,gt(10),Hi(this),$u(this))};function Ua(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function $u(o){o.g=new Cn(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=an(o.qa);Oe(u,"RID","rpc"),Oe(u,"SID",o.K),Oe(u,"AID",o.T),Oe(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&Oe(u,"TO",o.ja),Oe(u,"TYPE","xmlhttp"),Dr(o,u),o.m&&o.o&&xa(u,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=Ui(an(u)),d.m=null,d.P=!0,mu(d,o)}t.Za=function(){this.C!=null&&(this.C=null,Hi(this),Fa(this),gt(19))};function Wi(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function Hu(o,u){var d=null;if(o.g==u){Wi(o),Ua(o),o.g=null;var p=2}else if(Oa(o.h,u))d=u.D,Iu(o.h,u),p=1;else return;if(o.G!=0){if(u.o)if(p==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var C=o.B;p=Ni(),le(p,new hu(p,d)),qi(o)}else ju(o);else if(C=u.s,C==3||C==0&&0<u.X||!(p==1&&f_(o,u)||p==2&&Fa(o)))switch(d&&0<d.length&&(u=o.h,u.i=u.i.concat(d)),C){case 1:ns(o,5);break;case 4:ns(o,10);break;case 3:ns(o,6);break;default:ns(o,2)}}}function qu(o,u){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*u}function ns(o,u){if(o.j.info("Error code "+u),u==2){var d=g(o.fb,o),p=o.Xa;const C=!p;p=new ts(p||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Li(p,"https"),Ui(p),C?o_(p.toString(),d):a_(p.toString(),d)}else gt(2);o.G=0,o.l&&o.l.sa(u),Wu(o),Fu(o)}t.fb=function(o){o?(this.j.info("Successfully pinged google.com"),gt(2)):(this.j.info("Failed to ping google.com"),gt(1))};function Wu(o){if(o.G=0,o.ka=[],o.l){const u=wu(o.h);(u.length!=0||o.i.length!=0)&&(N(o.ka,u),N(o.ka,o.i),o.h.i.length=0,M(o.i),o.i.length=0),o.l.ra()}}function zu(o,u,d){var p=d instanceof ts?an(d):new ts(d);if(p.g!="")u&&(p.g=u+"."+p.g),Fi(p,p.s);else{var C=c.location;p=C.protocol,u=u?u+"."+C.hostname:C.hostname,C=+C.port;var P=new ts(null);p&&Li(P,p),u&&(P.g=u),C&&Fi(P,C),d&&(P.l=d),p=P}return d=o.D,u=o.ya,d&&u&&Oe(p,d,u),Oe(p,"VER",o.la),Dr(o,p),p}function Ku(o,u,d){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new Be(new Bi({eb:d})):new Be(o.pa),u.Ha(o.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Gu(){}t=Gu.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function zi(){}zi.prototype.g=function(o,u){return new Rt(o,u)};function Rt(o,u){de.call(this),this.g=new Lu(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!L(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!L(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Rs(this)}k(Rt,de),Rt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Rt.prototype.close=function(){La(this.g)},Rt.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=Et(o),o=d);u.i.push(new Yg(u.Ya++,o)),u.G==3&&qi(u)},Rt.prototype.N=function(){this.g.l=null,delete this.j,La(this.g),delete this.g,Rt.aa.N.call(this)};function Qu(o){Ra.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const d in u){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}k(Qu,Ra);function Yu(){Sa.call(this),this.status=1}k(Yu,Sa);function Rs(o){this.g=o}k(Rs,Gu),Rs.prototype.ua=function(){le(this.g,"a")},Rs.prototype.ta=function(o){le(this.g,new Qu(o))},Rs.prototype.sa=function(o){le(this.g,new Yu)},Rs.prototype.ra=function(){le(this.g,"b")},zi.prototype.createWebChannel=zi.prototype.g,Rt.prototype.send=Rt.prototype.o,Rt.prototype.open=Rt.prototype.m,Rt.prototype.close=Rt.prototype.close,Gp=function(){return new zi},Kp=function(){return Ni()},zp=Xn,Dc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Oi.NO_ERROR=0,Oi.TIMEOUT=8,Oi.HTTP_ERROR=6,fo=Oi,du.COMPLETE="complete",Wp=du,au.EventType=Ir,Ir.OPEN="a",Ir.CLOSE="b",Ir.ERROR="c",Ir.MESSAGE="d",de.prototype.listen=de.prototype.K,Hr=au,Be.prototype.listenOnce=Be.prototype.L,Be.prototype.getLastError=Be.prototype.Ka,Be.prototype.getLastErrorCode=Be.prototype.Ba,Be.prototype.getStatus=Be.prototype.Z,Be.prototype.getResponseJson=Be.prototype.Oa,Be.prototype.getResponseText=Be.prototype.oa,Be.prototype.send=Be.prototype.ea,Be.prototype.setWithCredentials=Be.prototype.Ha,qp=Be}).apply(typeof eo<"u"?eo:typeof self<"u"?self:typeof window<"u"?window:{});const sd="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}lt.UNAUTHENTICATED=new lt(null),lt.GOOGLE_CREDENTIALS=new lt("google-credentials-uid"),lt.FIRST_PARTY=new lt("first-party-uid"),lt.MOCK_USER=new lt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pr="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _s=new yl("@firebase/firestore");function Fr(){return _s.logLevel}function Z(t,...e){if(_s.logLevel<=Ie.DEBUG){const n=e.map(wl);_s.debug(`Firestore (${pr}): ${t}`,...n)}}function yn(t,...e){if(_s.logLevel<=Ie.ERROR){const n=e.map(wl);_s.error(`Firestore (${pr}): ${t}`,...n)}}function Xs(t,...e){if(_s.logLevel<=Ie.WARN){const n=e.map(wl);_s.warn(`Firestore (${pr}): ${t}`,...n)}}function wl(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(t="Unexpected state"){const e=`FIRESTORE (${pr}) INTERNAL ASSERTION FAILED: `+t;throw yn(e),new Error(e)}function Ve(t,e){t||ae()}function he(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ne extends Tn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class dE{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(lt.UNAUTHENTICATED))}shutdown(){}}class fE{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class pE{constructor(e){this.t=e,this.currentUser=lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ve(this.o===void 0);let s=this.i;const r=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let i=new qn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new qn,e.enqueueRetryable(()=>r(this.currentUser))};const a=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await r(this.currentUser)})},c=l=>{Z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(Z("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new qn)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(Z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ve(typeof s.accessToken=="string"),new Qp(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ve(e===null||typeof e=="string"),new lt(e)}}class mE{constructor(e,n,s){this.l=e,this.h=n,this.P=s,this.type="FirstParty",this.user=lt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class gE{constructor(e,n,s){this.l=e,this.h=n,this.P=s}getToken(){return Promise.resolve(new mE(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(lt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class _E{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class vE{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Ve(this.o===void 0);const s=i=>{i.error!=null&&Z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,Z("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{Z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?r(i):Z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ve(typeof n.token=="string"),this.R=n.token,new _E(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yE(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yp{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=yE(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function Ce(t,e){return t<e?-1:t>e?1:0}function er(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ne($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ne($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ne($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ne($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ge.fromMillis(Date.now())}static fromDate(e){return Ge.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Ge(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ce(this.nanoseconds,e.nanoseconds):Ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ue(e)}static min(){return new ue(new Ge(0,0))}static max(){return new ue(new Ge(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e,n,s){n===void 0?n=0:n>e.length&&ae(),s===void 0?s=e.length-n:s>e.length-n&&ae(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return li.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof li?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),a=n.get(r);if(i<a)return-1;if(i>a)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class je extends li{construct(e,n,s){return new je(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new ne($.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new je(n)}static emptyPath(){return new je([])}}const EE=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class tt extends li{construct(e,n,s){return new tt(e,n,s)}static isValidIdentifier(e){return EE.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),tt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new tt(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new ne($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let a=!1;for(;r<e.length;){const c=e[r];if(c==="\\"){if(r+1===e.length)throw new ne($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[r+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new ne($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,r+=2}else c==="`"?(a=!a,r++):c!=="."||a?(s+=c,r++):(i(),r++)}if(i(),a)throw new ne($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new tt(n)}static emptyPath(){return new tt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e){this.path=e}static fromPath(e){return new se(je.fromString(e))}static fromName(e){return new se(je.fromString(e).popFirst(5))}static empty(){return new se(je.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&je.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return je.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new se(new je(e.slice()))}}function IE(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=ue.fromTimestamp(s===1e9?new Ge(n+1,0):new Ge(n,s));return new Gn(r,se.empty(),e)}function wE(t){return new Gn(t.readTime,t.key,-1)}class Gn{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Gn(ue.min(),se.empty(),-1)}static max(){return new Gn(ue.max(),se.empty(),-1)}}function TE(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=se.comparator(t.documentKey,e.documentKey),n!==0?n:Ce(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AE="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class bE{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wi(t){if(t.code!==$.FAILED_PRECONDITION||t.message!==AE)throw t;Z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ae(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new B((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof B?n:B.resolve(n)}catch(n){return B.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):B.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):B.reject(n)}static resolve(e){return new B((n,s)=>{n(e)})}static reject(e){return new B((n,s)=>{s(e)})}static waitFor(e){return new B((n,s)=>{let r=0,i=0,a=!1;e.forEach(c=>{++r,c.next(()=>{++i,a&&i===r&&n()},l=>s(l))}),a=!0,i===r&&n()})}static or(e){let n=B.resolve(!1);for(const s of e)n=n.next(r=>r?B.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new B((s,r)=>{const i=e.length,a=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;n(e[h]).next(f=>{a[h]=f,++c,c===i&&s(a)},f=>r(f))}})}static doWhile(e,n){return new B((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function CE(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ti(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ie(s),this.se=s=>n.writeSequenceNumber(s))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Tl.oe=-1;function ua(t){return t==null}function Do(t){return t===0&&1/t==-1/0}function RE(t){return typeof t=="number"&&Number.isInteger(t)&&!Do(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function mr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Jp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e,n){this.comparator=e,this.root=n||Xe.EMPTY}insert(e,n){return new Ue(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Xe.BLACK,null,null))}remove(e){return new Ue(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Xe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new to(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new to(this.root,e,this.comparator,!1)}getReverseIterator(){return new to(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new to(this.root,e,this.comparator,!0)}}class to{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Xe{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??Xe.RED,this.left=r??Xe.EMPTY,this.right=i??Xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Xe(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Xe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Xe.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ae();const e=this.left.check();if(e!==this.right.check())throw ae();return e+(this.isRed()?0:1)}}Xe.EMPTY=null,Xe.RED=!0,Xe.BLACK=!1;Xe.EMPTY=new class{constructor(){this.size=0}get key(){throw ae()}get value(){throw ae()}get color(){throw ae()}get left(){throw ae()}get right(){throw ae()}copy(e,n,s,r,i){return this}insert(e,n,s){return new Xe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.comparator=e,this.data=new Ue(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new id(this.data.getIterator())}getIteratorFrom(e){return new id(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof nt)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new nt(this.comparator);return n.data=e,n}}class id{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this.fields=e,e.sort(tt.comparator)}static empty(){return new Ht([])}unionWith(e){let n=new nt(tt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Ht(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return er(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Zp("Invalid base64 string: "+i):i}}(e);return new rt(n)}static fromUint8Array(e){const n=function(r){let i="";for(let a=0;a<r.length;++a)i+=String.fromCharCode(r[a]);return i}(e);return new rt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}rt.EMPTY_BYTE_STRING=new rt("");const SE=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Qn(t){if(Ve(!!t),typeof t=="string"){let e=0;const n=SE.exec(t);if(Ve(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:$e(t.seconds),nanos:$e(t.nanos)}}function $e(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function vs(t){return typeof t=="string"?rt.fromBase64String(t):rt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Al(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function bl(t){const e=t.mapValue.fields.__previous_value__;return Al(e)?bl(e):e}function ui(t){const e=Qn(t.mapValue.fields.__local_write_time__.timestampValue);return new Ge(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{constructor(e,n,s,r,i,a,c,l,h){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h}}class hi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new hi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof hi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const no={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ys(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Al(t)?4:VE(t)?9007199254740991:kE(t)?10:11:ae()}function sn(t,e){if(t===e)return!0;const n=ys(t);if(n!==ys(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ui(t).isEqual(ui(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const a=Qn(r.timestampValue),c=Qn(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return vs(r.bytesValue).isEqual(vs(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return $e(r.geoPointValue.latitude)===$e(i.geoPointValue.latitude)&&$e(r.geoPointValue.longitude)===$e(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return $e(r.integerValue)===$e(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const a=$e(r.doubleValue),c=$e(i.doubleValue);return a===c?Do(a)===Do(c):isNaN(a)&&isNaN(c)}return!1}(t,e);case 9:return er(t.arrayValue.values||[],e.arrayValue.values||[],sn);case 10:case 11:return function(r,i){const a=r.mapValue.fields||{},c=i.mapValue.fields||{};if(rd(a)!==rd(c))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(c[l]===void 0||!sn(a[l],c[l])))return!1;return!0}(t,e);default:return ae()}}function di(t,e){return(t.values||[]).find(n=>sn(n,e))!==void 0}function tr(t,e){if(t===e)return 0;const n=ys(t),s=ys(e);if(n!==s)return Ce(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ce(t.booleanValue,e.booleanValue);case 2:return function(i,a){const c=$e(i.integerValue||i.doubleValue),l=$e(a.integerValue||a.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return od(t.timestampValue,e.timestampValue);case 4:return od(ui(t),ui(e));case 5:return Ce(t.stringValue,e.stringValue);case 6:return function(i,a){const c=vs(i),l=vs(a);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,a){const c=i.split("/"),l=a.split("/");for(let h=0;h<c.length&&h<l.length;h++){const f=Ce(c[h],l[h]);if(f!==0)return f}return Ce(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,a){const c=Ce($e(i.latitude),$e(a.latitude));return c!==0?c:Ce($e(i.longitude),$e(a.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return ad(t.arrayValue,e.arrayValue);case 10:return function(i,a){var c,l,h,f;const m=i.fields||{},g=a.fields||{},w=(c=m.value)===null||c===void 0?void 0:c.arrayValue,k=(l=g.value)===null||l===void 0?void 0:l.arrayValue,M=Ce(((h=w==null?void 0:w.values)===null||h===void 0?void 0:h.length)||0,((f=k==null?void 0:k.values)===null||f===void 0?void 0:f.length)||0);return M!==0?M:ad(w,k)}(t.mapValue,e.mapValue);case 11:return function(i,a){if(i===no.mapValue&&a===no.mapValue)return 0;if(i===no.mapValue)return 1;if(a===no.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=a.fields||{},f=Object.keys(h);l.sort(),f.sort();for(let m=0;m<l.length&&m<f.length;++m){const g=Ce(l[m],f[m]);if(g!==0)return g;const w=tr(c[l[m]],h[f[m]]);if(w!==0)return w}return Ce(l.length,f.length)}(t.mapValue,e.mapValue);default:throw ae()}}function od(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ce(t,e);const n=Qn(t),s=Qn(e),r=Ce(n.seconds,s.seconds);return r!==0?r:Ce(n.nanos,s.nanos)}function ad(t,e){const n=t.values||[],s=e.values||[];for(let r=0;r<n.length&&r<s.length;++r){const i=tr(n[r],s[r]);if(i)return i}return Ce(n.length,s.length)}function nr(t){return Nc(t)}function Nc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const s=Qn(n);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return vs(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return se.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let s="[",r=!0;for(const i of n.values||[])r?r=!1:s+=",",s+=Nc(i);return s+"]"}(t.arrayValue):"mapValue"in t?function(n){const s=Object.keys(n.fields||{}).sort();let r="{",i=!0;for(const a of s)i?i=!1:r+=",",r+=`${a}:${Nc(n.fields[a])}`;return r+"}"}(t.mapValue):ae()}function Oc(t){return!!t&&"integerValue"in t}function Cl(t){return!!t&&"arrayValue"in t}function cd(t){return!!t&&"nullValue"in t}function ld(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function po(t){return!!t&&"mapValue"in t}function kE(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Jr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return mr(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Jr(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Jr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function VE(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.value=e}static empty(){return new Ot({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!po(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Jr(n)}setAll(e){let n=tt.emptyPath(),s={},r=[];e.forEach((a,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,s,r),s={},r=[],n=c.popLast()}a?s[c.lastSegment()]=Jr(a):r.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());po(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return sn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];po(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){mr(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new Ot(Jr(this.value))}}function Xp(t){const e=[];return mr(t.fields,(n,s)=>{const r=new tt([n]);if(po(s)){const i=Xp(s.mapValue).fields;if(i.length===0)e.push(r);else for(const a of i)e.push(r.child(a))}else e.push(r)}),new Ht(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e,n,s,r,i,a,c){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new ht(e,0,ue.min(),ue.min(),ue.min(),Ot.empty(),0)}static newFoundDocument(e,n,s,r){return new ht(e,1,n,ue.min(),s,r,0)}static newNoDocument(e,n){return new ht(e,2,n,ue.min(),ue.min(),Ot.empty(),0)}static newUnknownDocument(e,n){return new ht(e,3,n,ue.min(),ue.min(),Ot.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ue.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ot.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ot.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ue.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ht&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ht(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e,n){this.position=e,this.inclusive=n}}function ud(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],a=t.position[r];if(i.field.isKeyField()?s=se.comparator(se.fromName(a.referenceValue),n.key):s=tr(a,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function hd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!sn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e,n="asc"){this.field=e,this.dir=n}}function DE(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{}class Ke extends em{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new OE(e,n,s):n==="array-contains"?new LE(e,s):n==="in"?new FE(e,s):n==="not-in"?new UE(e,s):n==="array-contains-any"?new BE(e,s):new Ke(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new ME(e,s):new xE(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(tr(n,this.value)):n!==null&&ys(this.value)===ys(n)&&this.matchesComparison(tr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ae()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class rn extends em{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new rn(e,n)}matches(e){return tm(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function tm(t){return t.op==="and"}function nm(t){return NE(t)&&tm(t)}function NE(t){for(const e of t.filters)if(e instanceof rn)return!1;return!0}function Mc(t){if(t instanceof Ke)return t.field.canonicalString()+t.op.toString()+nr(t.value);if(nm(t))return t.filters.map(e=>Mc(e)).join(",");{const e=t.filters.map(n=>Mc(n)).join(",");return`${t.op}(${e})`}}function sm(t,e){return t instanceof Ke?function(s,r){return r instanceof Ke&&s.op===r.op&&s.field.isEqual(r.field)&&sn(s.value,r.value)}(t,e):t instanceof rn?function(s,r){return r instanceof rn&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce((i,a,c)=>i&&sm(a,r.filters[c]),!0):!1}(t,e):void ae()}function rm(t){return t instanceof Ke?function(n){return`${n.field.canonicalString()} ${n.op} ${nr(n.value)}`}(t):t instanceof rn?function(n){return n.op.toString()+" {"+n.getFilters().map(rm).join(" ,")+"}"}(t):"Filter"}class OE extends Ke{constructor(e,n,s){super(e,n,s),this.key=se.fromName(s.referenceValue)}matches(e){const n=se.comparator(e.key,this.key);return this.matchesComparison(n)}}class ME extends Ke{constructor(e,n){super(e,"in",n),this.keys=im("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class xE extends Ke{constructor(e,n){super(e,"not-in",n),this.keys=im("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function im(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>se.fromName(s.referenceValue))}class LE extends Ke{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Cl(n)&&di(n.arrayValue,this.value)}}class FE extends Ke{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&di(this.value.arrayValue,n)}}class UE extends Ke{constructor(e,n){super(e,"not-in",n)}matches(e){if(di(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!di(this.value.arrayValue,n)}}class BE extends Ke{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Cl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>di(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jE{constructor(e,n=null,s=[],r=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=a,this.endAt=c,this.ue=null}}function dd(t,e=null,n=[],s=[],r=null,i=null,a=null){return new jE(t,e,n,s,r,i,a)}function Rl(t){const e=he(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Mc(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),ua(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>nr(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>nr(s)).join(",")),e.ue=n}return e.ue}function Sl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!DE(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!sm(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!hd(t.startAt,e.startAt)&&hd(t.endAt,e.endAt)}function xc(t){return se.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(e,n=null,s=[],r=[],i=null,a="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function $E(t,e,n,s,r,i,a,c){return new ha(t,e,n,s,r,i,a,c)}function da(t){return new ha(t)}function fd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function HE(t){return t.collectionGroup!==null}function Zr(t){const e=he(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new nt(tt.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Oo(i,s))}),n.has(tt.keyField().canonicalString())||e.ce.push(new Oo(tt.keyField(),s))}return e.ce}function Zt(t){const e=he(t);return e.le||(e.le=qE(e,Zr(t))),e.le}function qE(t,e){if(t.limitType==="F")return dd(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(r=>{const i=r.dir==="desc"?"asc":"desc";return new Oo(r.field,i)});const n=t.endAt?new No(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new No(t.startAt.position,t.startAt.inclusive):null;return dd(t.path,t.collectionGroup,e,t.filters,t.limit,n,s)}}function Lc(t,e,n){return new ha(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function fa(t,e){return Sl(Zt(t),Zt(e))&&t.limitType===e.limitType}function om(t){return`${Rl(Zt(t))}|lt:${t.limitType}`}function Ns(t){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(r=>rm(r)).join(", ")}]`),ua(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(r=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(r)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(r=>nr(r)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(r=>nr(r)).join(",")),`Target(${s})`}(Zt(t))}; limitType=${t.limitType})`}function pa(t,e){return e.isFoundDocument()&&function(s,r){const i=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(i):se.isDocumentKey(s.path)?s.path.isEqual(i):s.path.isImmediateParentOf(i)}(t,e)&&function(s,r){for(const i of Zr(s))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(s,r){for(const i of s.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(s,r){return!(s.startAt&&!function(a,c,l){const h=ud(a,c,l);return a.inclusive?h<=0:h<0}(s.startAt,Zr(s),r)||s.endAt&&!function(a,c,l){const h=ud(a,c,l);return a.inclusive?h>=0:h>0}(s.endAt,Zr(s),r))}(t,e)}function WE(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function am(t){return(e,n)=>{let s=!1;for(const r of Zr(t)){const i=zE(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function zE(t,e,n){const s=t.field.isKeyField()?se.comparator(e.key,n.key):function(i,a,c){const l=a.data.field(i),h=c.data.field(i);return l!==null&&h!==null?tr(l,h):ae()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return ae()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){mr(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return Jp(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KE=new Ue(se.comparator);function En(){return KE}const cm=new Ue(se.comparator);function qr(...t){let e=cm;for(const n of t)e=e.insert(n.key,n);return e}function lm(t){let e=cm;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function ls(){return Xr()}function um(){return Xr()}function Xr(){return new gr(t=>t.toString(),(t,e)=>t.isEqual(e))}const GE=new Ue(se.comparator),QE=new nt(se.comparator);function ye(...t){let e=QE;for(const n of t)e=e.add(n);return e}const YE=new nt(Ce);function JE(){return YE}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pl(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Do(e)?"-0":e}}function hm(t){return{integerValue:""+t}}function ZE(t,e){return RE(e)?hm(e):Pl(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(){this._=void 0}}function XE(t,e,n){return t instanceof Mo?function(r,i){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&Al(i)&&(i=bl(i)),i&&(a.fields.__previous_value__=i),{mapValue:a}}(n,e):t instanceof fi?fm(t,e):t instanceof pi?pm(t,e):function(r,i){const a=dm(r,i),c=pd(a)+pd(r.Pe);return Oc(a)&&Oc(r.Pe)?hm(c):Pl(r.serializer,c)}(t,e)}function eI(t,e,n){return t instanceof fi?fm(t,e):t instanceof pi?pm(t,e):n}function dm(t,e){return t instanceof xo?function(s){return Oc(s)||function(i){return!!i&&"doubleValue"in i}(s)}(e)?e:{integerValue:0}:null}class Mo extends ma{}class fi extends ma{constructor(e){super(),this.elements=e}}function fm(t,e){const n=mm(e);for(const s of t.elements)n.some(r=>sn(r,s))||n.push(s);return{arrayValue:{values:n}}}class pi extends ma{constructor(e){super(),this.elements=e}}function pm(t,e){let n=mm(e);for(const s of t.elements)n=n.filter(r=>!sn(r,s));return{arrayValue:{values:n}}}class xo extends ma{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function pd(t){return $e(t.integerValue||t.doubleValue)}function mm(t){return Cl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function tI(t,e){return t.field.isEqual(e.field)&&function(s,r){return s instanceof fi&&r instanceof fi||s instanceof pi&&r instanceof pi?er(s.elements,r.elements,sn):s instanceof xo&&r instanceof xo?sn(s.Pe,r.Pe):s instanceof Mo&&r instanceof Mo}(t.transform,e.transform)}class nI{constructor(e,n){this.version=e,this.transformResults=n}}class _n{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new _n}static exists(e){return new _n(void 0,e)}static updateTime(e){return new _n(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function mo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ga{}function gm(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new vm(t.key,_n.none()):new Ai(t.key,t.data,_n.none());{const n=t.data,s=Ot.empty();let r=new nt(tt.comparator);for(let i of e.fields)if(!r.has(i)){let a=n.field(i);a===null&&i.length>1&&(i=i.popLast(),a=n.field(i)),a===null?s.delete(i):s.set(i,a),r=r.add(i)}return new Is(t.key,s,new Ht(r.toArray()),_n.none())}}function sI(t,e,n){t instanceof Ai?function(r,i,a){const c=r.value.clone(),l=gd(r.fieldTransforms,i,a.transformResults);c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(t,e,n):t instanceof Is?function(r,i,a){if(!mo(r.precondition,i))return void i.convertToUnknownDocument(a.version);const c=gd(r.fieldTransforms,i,a.transformResults),l=i.data;l.setAll(_m(r)),l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(t,e,n):function(r,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,n)}function ei(t,e,n,s){return t instanceof Ai?function(i,a,c,l){if(!mo(i.precondition,a))return c;const h=i.value.clone(),f=_d(i.fieldTransforms,l,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(t,e,n,s):t instanceof Is?function(i,a,c,l){if(!mo(i.precondition,a))return c;const h=_d(i.fieldTransforms,l,a),f=a.data;return f.setAll(_m(i)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(t,e,n,s):function(i,a,c){return mo(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(t,e,n)}function rI(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=dm(s.transform,r||null);i!=null&&(n===null&&(n=Ot.empty()),n.set(s.field,i))}return n||null}function md(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&er(s,r,(i,a)=>tI(i,a))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ai extends ga{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Is extends ga{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function _m(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function gd(t,e,n){const s=new Map;Ve(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],a=i.transform,c=e.data.field(i.field);s.set(i.field,eI(a,c,n[r]))}return s}function _d(t,e,n){const s=new Map;for(const r of t){const i=r.transform,a=n.data.field(r.field);s.set(r.field,XE(i,a,e))}return s}class vm extends ga{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class iI extends ga{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oI{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&sI(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=ei(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=ei(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=um();return this.mutations.forEach(r=>{const i=e.get(r.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=n.has(r.key)?null:c;const l=gm(a,c);l!==null&&s.set(r.key,l),a.isValidDocument()||a.convertToNoDocument(ue.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ye())}isEqual(e){return this.batchId===e.batchId&&er(this.mutations,e.mutations,(n,s)=>md(n,s))&&er(this.baseMutations,e.baseMutations,(n,s)=>md(n,s))}}class kl{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){Ve(e.mutations.length===s.length);let r=function(){return GE}();const i=e.mutations;for(let a=0;a<i.length;a++)r=r.insert(i[a].key,s[a].version);return new kl(e,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cI{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qe,we;function lI(t){switch(t){default:return ae();case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0}}function ym(t){if(t===void 0)return yn("GRPC error has no .code"),$.UNKNOWN;switch(t){case qe.OK:return $.OK;case qe.CANCELLED:return $.CANCELLED;case qe.UNKNOWN:return $.UNKNOWN;case qe.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case qe.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case qe.INTERNAL:return $.INTERNAL;case qe.UNAVAILABLE:return $.UNAVAILABLE;case qe.UNAUTHENTICATED:return $.UNAUTHENTICATED;case qe.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case qe.NOT_FOUND:return $.NOT_FOUND;case qe.ALREADY_EXISTS:return $.ALREADY_EXISTS;case qe.PERMISSION_DENIED:return $.PERMISSION_DENIED;case qe.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case qe.ABORTED:return $.ABORTED;case qe.OUT_OF_RANGE:return $.OUT_OF_RANGE;case qe.UNIMPLEMENTED:return $.UNIMPLEMENTED;case qe.DATA_LOSS:return $.DATA_LOSS;default:return ae()}}(we=qe||(qe={}))[we.OK=0]="OK",we[we.CANCELLED=1]="CANCELLED",we[we.UNKNOWN=2]="UNKNOWN",we[we.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",we[we.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",we[we.NOT_FOUND=5]="NOT_FOUND",we[we.ALREADY_EXISTS=6]="ALREADY_EXISTS",we[we.PERMISSION_DENIED=7]="PERMISSION_DENIED",we[we.UNAUTHENTICATED=16]="UNAUTHENTICATED",we[we.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",we[we.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",we[we.ABORTED=10]="ABORTED",we[we.OUT_OF_RANGE=11]="OUT_OF_RANGE",we[we.UNIMPLEMENTED=12]="UNIMPLEMENTED",we[we.INTERNAL=13]="INTERNAL",we[we.UNAVAILABLE=14]="UNAVAILABLE",we[we.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uI(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hI=new ds([4294967295,4294967295],0);function vd(t){const e=uI().encode(t),n=new Hp;return n.update(e),new Uint8Array(n.digest())}function yd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new ds([n,s],0),new ds([r,i],0)]}class Vl{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new Wr(`Invalid padding: ${n}`);if(s<0)throw new Wr(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Wr(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new Wr(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=ds.fromNumber(this.Ie)}Ee(e,n,s){let r=e.add(n.multiply(ds.fromNumber(s)));return r.compare(hI)===1&&(r=new ds([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=vd(e),[s,r]=yd(n);for(let i=0;i<this.hashCount;i++){const a=this.Ee(s,r,i);if(!this.de(a))return!1}return!0}static create(e,n,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Vl(i,r,n);return s.forEach(c=>a.insert(c)),a}insert(e){if(this.Ie===0)return;const n=vd(e),[s,r]=yd(n);for(let i=0;i<this.hashCount;i++){const a=this.Ee(s,r,i);this.Ae(a)}}Ae(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class Wr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,bi.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new _a(ue.min(),r,new Ue(Ce),En(),ye())}}class bi{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new bi(s,n,ye(),ye(),ye())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e,n,s,r){this.Re=e,this.removedTargetIds=n,this.key=s,this.Ve=r}}class Em{constructor(e,n){this.targetId=e,this.me=n}}class Im{constructor(e,n,s=rt.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Ed{constructor(){this.fe=0,this.ge=wd(),this.pe=rt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ye(),n=ye(),s=ye();return this.ge.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:ae()}}),new bi(this.pe,this.ye,e,n,s)}Ce(){this.we=!1,this.ge=wd()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ve(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class dI{constructor(e){this.Le=e,this.Be=new Map,this.ke=En(),this.qe=Id(),this.Qe=new Ue(Ce)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const s=this.Ge(n);switch(e.state){case 0:this.ze(n)&&s.De(e.resumeToken);break;case 1:s.Oe(),s.Se||s.Ce(),s.De(e.resumeToken);break;case 2:s.Oe(),s.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(s.Ne(),s.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),s.De(e.resumeToken));break;default:ae()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((s,r)=>{this.ze(r)&&n(r)})}He(e){const n=e.targetId,s=e.me.count,r=this.Je(n);if(r){const i=r.target;if(xc(i))if(s===0){const a=new se(i.path);this.Ue(n,a,ht.newNoDocument(a,ue.min()))}else Ve(s===1);else{const a=this.Ye(n);if(a!==s){const c=this.Ze(e),l=c?this.Xe(c,e,a):1;if(l!==0){this.je(n);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:i=0}=n;let a,c;try{a=vs(s).toUint8Array()}catch(l){if(l instanceof Zp)return Xs("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Vl(a,r,i)}catch(l){return Xs(l instanceof Wr?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ie===0?null:c}Xe(e,n,s){return n.me.count===s-this.nt(e,n.targetId)?0:2}nt(e,n){const s=this.Le.getRemoteKeysForTarget(n);let r=0;return s.forEach(i=>{const a=this.Le.tt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Ue(n,i,null),r++)}),r}rt(e){const n=new Map;this.Be.forEach((i,a)=>{const c=this.Je(a);if(c){if(i.current&&xc(c.target)){const l=new se(c.target.path);this.ke.get(l)!==null||this.it(a,l)||this.Ue(a,l,ht.newNoDocument(l,e))}i.be&&(n.set(a,i.ve()),i.Ce())}});let s=ye();this.qe.forEach((i,a)=>{let c=!0;a.forEachWhile(l=>{const h=this.Je(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(s=s.add(i))}),this.ke.forEach((i,a)=>a.setReadTime(e));const r=new _a(e,n,this.Qe,this.ke,s);return this.ke=En(),this.qe=Id(),this.Qe=new Ue(Ce),r}$e(e,n){if(!this.ze(e))return;const s=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,s),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,s){if(!this.ze(e))return;const r=this.Ge(e);this.it(e,n)?r.Fe(n,1):r.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),s&&(this.ke=this.ke.insert(n,s))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Ed,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new nt(Ce),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||Z("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Ed),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Id(){return new Ue(se.comparator)}function wd(){return new Ue(se.comparator)}const fI={asc:"ASCENDING",desc:"DESCENDING"},pI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},mI={and:"AND",or:"OR"};class gI{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Fc(t,e){return t.useProto3Json||ua(e)?e:{value:e}}function Lo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function wm(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function _I(t,e){return Lo(t,e.toTimestamp())}function Xt(t){return Ve(!!t),ue.fromTimestamp(function(n){const s=Qn(n);return new Ge(s.seconds,s.nanos)}(t))}function Dl(t,e){return Uc(t,e).canonicalString()}function Uc(t,e){const n=function(r){return new je(["projects",r.projectId,"databases",r.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Tm(t){const e=je.fromString(t);return Ve(Sm(e)),e}function Bc(t,e){return Dl(t.databaseId,e.path)}function nc(t,e){const n=Tm(e);if(n.get(1)!==t.databaseId.projectId)throw new ne($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ne($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new se(bm(n))}function Am(t,e){return Dl(t.databaseId,e)}function vI(t){const e=Tm(t);return e.length===4?je.emptyPath():bm(e)}function jc(t){return new je(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function bm(t){return Ve(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Td(t,e,n){return{name:Bc(t,e),fields:n.value.mapValue.fields}}function yI(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ae()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(Ve(f===void 0||typeof f=="string"),rt.fromBase64String(f||"")):(Ve(f===void 0||f instanceof Buffer||f instanceof Uint8Array),rt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(h){const f=h.code===void 0?$.UNKNOWN:ym(h.code);return new ne(f,h.message||"")}(a);n=new Im(s,r,i,c||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=nc(t,s.document.name),i=Xt(s.document.updateTime),a=s.document.createTime?Xt(s.document.createTime):ue.min(),c=new Ot({mapValue:{fields:s.document.fields}}),l=ht.newFoundDocument(r,i,a,c),h=s.targetIds||[],f=s.removedTargetIds||[];n=new go(h,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=nc(t,s.document),i=s.readTime?Xt(s.readTime):ue.min(),a=ht.newNoDocument(r,i),c=s.removedTargetIds||[];n=new go([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=nc(t,s.document),i=s.removedTargetIds||[];n=new go([],i,r,null)}else{if(!("filter"in e))return ae();{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,a=new cI(r,i),c=s.targetId;n=new Em(c,a)}}return n}function EI(t,e){let n;if(e instanceof Ai)n={update:Td(t,e.key,e.value)};else if(e instanceof vm)n={delete:Bc(t,e.key)};else if(e instanceof Is)n={update:Td(t,e.key,e.data),updateMask:PI(e.fieldMask)};else{if(!(e instanceof iI))return ae();n={verify:Bc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,a){const c=a.transform;if(c instanceof Mo)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof fi)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof pi)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof xo)return{fieldPath:a.field.canonicalString(),increment:c.Pe};throw ae()}(0,s))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:_I(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ae()}(t,e.precondition)),n}function II(t,e){return t&&t.length>0?(Ve(e!==void 0),t.map(n=>function(r,i){let a=r.updateTime?Xt(r.updateTime):Xt(i);return a.isEqual(ue.min())&&(a=Xt(i)),new nI(a,r.transformResults||[])}(n,e))):[]}function wI(t,e){return{documents:[Am(t,e.path)]}}function TI(t,e){const n={structuredQuery:{}},s=e.path;let r;e.collectionGroup!==null?(r=s,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=Am(t,r);const i=function(h){if(h.length!==0)return Rm(rn.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(f=>function(g){return{field:Os(g.field),direction:CI(g.dir)}}(f))}(e.orderBy);a&&(n.structuredQuery.orderBy=a);const c=Fc(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:r}}function AI(t){let e=vI(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){Ve(s===1);const f=n.from[0];f.allDescendants?r=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(m){const g=Cm(m);return g instanceof rn&&nm(g)?g.getFilters():[g]}(n.where));let a=[];n.orderBy&&(a=function(m){return m.map(g=>function(k){return new Oo(Ms(k.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(g))}(n.orderBy));let c=null;n.limit&&(c=function(m){let g;return g=typeof m=="object"?m.value:m,ua(g)?null:g}(n.limit));let l=null;n.startAt&&(l=function(m){const g=!!m.before,w=m.values||[];return new No(w,g)}(n.startAt));let h=null;return n.endAt&&(h=function(m){const g=!m.before,w=m.values||[];return new No(w,g)}(n.endAt)),$E(e,r,a,i,c,"F",l,h)}function bI(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ae()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Cm(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=Ms(n.unaryFilter.field);return Ke.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=Ms(n.unaryFilter.field);return Ke.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ms(n.unaryFilter.field);return Ke.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Ms(n.unaryFilter.field);return Ke.create(a,"!=",{nullValue:"NULL_VALUE"});default:return ae()}}(t):t.fieldFilter!==void 0?function(n){return Ke.create(Ms(n.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ae()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return rn.create(n.compositeFilter.filters.map(s=>Cm(s)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return ae()}}(n.compositeFilter.op))}(t):ae()}function CI(t){return fI[t]}function RI(t){return pI[t]}function SI(t){return mI[t]}function Os(t){return{fieldPath:t.canonicalString()}}function Ms(t){return tt.fromServerFormat(t.fieldPath)}function Rm(t){return t instanceof Ke?function(n){if(n.op==="=="){if(ld(n.value))return{unaryFilter:{field:Os(n.field),op:"IS_NAN"}};if(cd(n.value))return{unaryFilter:{field:Os(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(ld(n.value))return{unaryFilter:{field:Os(n.field),op:"IS_NOT_NAN"}};if(cd(n.value))return{unaryFilter:{field:Os(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Os(n.field),op:RI(n.op),value:n.value}}}(t):t instanceof rn?function(n){const s=n.getFilters().map(r=>Rm(r));return s.length===1?s[0]:{compositeFilter:{op:SI(n.op),filters:s}}}(t):ae()}function PI(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Sm(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e,n,s,r,i=ue.min(),a=ue.min(),c=rt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new Fn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Fn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Fn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Fn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kI{constructor(e){this.ct=e}}function VI(t){const e=AI({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Lc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{constructor(){this.un=new NI}addToCollectionParentIndex(e,n){return this.un.add(n),B.resolve()}getCollectionParents(e,n){return B.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return B.resolve()}deleteFieldIndex(e,n){return B.resolve()}deleteAllFieldIndexes(e){return B.resolve()}createTargetIndexes(e,n){return B.resolve()}getDocumentsMatchingTarget(e,n){return B.resolve(null)}getIndexType(e,n){return B.resolve(0)}getFieldIndexes(e,n){return B.resolve([])}getNextCollectionGroupToUpdate(e){return B.resolve(null)}getMinOffset(e,n){return B.resolve(Gn.min())}getMinOffsetFromCollectionGroup(e,n){return B.resolve(Gn.min())}updateCollectionGroup(e,n,s){return B.resolve()}updateIndexEntries(e,n){return B.resolve()}}class NI{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new nt(je.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new nt(je.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new sr(0)}static kn(){return new sr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OI{constructor(){this.changes=new gr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ht.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?B.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MI{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&ei(s.mutation,r,Ht.empty(),Ge.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,ye()).next(()=>s))}getLocalViewOfDocuments(e,n,s=ye()){const r=ls();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let a=qr();return i.forEach((c,l)=>{a=a.insert(c,l.overlayedDocument)}),a}))}getOverlayedDocuments(e,n){const s=ls();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,ye()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((a,c)=>{n.set(a,c)})})}computeViews(e,n,s,r){let i=En();const a=Xr(),c=function(){return Xr()}();return n.forEach((l,h)=>{const f=s.get(h.key);r.has(h.key)&&(f===void 0||f.mutation instanceof Is)?i=i.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),ei(f.mutation,h,f.mutation.getFieldMask(),Ge.now())):a.set(h.key,Ht.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((h,f)=>a.set(h,f)),n.forEach((h,f)=>{var m;return c.set(h,new MI(f,(m=a.get(h))!==null&&m!==void 0?m:null))}),c))}recalculateAndSaveOverlays(e,n){const s=Xr();let r=new Ue((a,c)=>a-c),i=ye();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(a=>{for(const c of a)c.keys().forEach(l=>{const h=n.get(l);if(h===null)return;let f=s.get(l)||Ht.empty();f=c.applyToLocalView(h,f),s.set(l,f);const m=(r.get(c.batchId)||ye()).add(l);r=r.insert(c.batchId,m)})}).next(()=>{const a=[],c=r.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,f=l.value,m=um();f.forEach(g=>{if(!i.has(g)){const w=gm(n.get(g),s.get(g));w!==null&&m.set(g,w),i=i.add(g)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,m))}return B.waitFor(a)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s,r){return function(a){return se.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):HE(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,r):this.getDocumentsMatchingCollectionQuery(e,n,s,r)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const a=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):B.resolve(ls());let c=-1,l=i;return a.next(h=>B.forEach(h,(f,m)=>(c<m.largestBatchId&&(c=m.largestBatchId),i.get(f)?B.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{l=l.insert(f,g)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,l,h,ye())).next(f=>({batchId:c,changes:lm(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new se(n)).next(s=>{let r=qr();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s,r){const i=n.collectionGroup;let a=qr();return this.indexManager.getCollectionParents(e,i).next(c=>B.forEach(c,l=>{const h=function(m,g){return new ha(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,s,r).next(f=>{f.forEach((m,g)=>{a=a.insert(m,g)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,n,s,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i,r))).next(a=>{i.forEach((l,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,ht.newInvalidDocument(f)))});let c=qr();return a.forEach((l,h)=>{const f=i.get(l);f!==void 0&&ei(f.mutation,h,Ht.empty(),Ge.now()),pa(n,h)&&(c=c.insert(l,h))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return B.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(r){return{id:r.id,version:r.version,createTime:Xt(r.createTime)}}(n)),B.resolve()}getNamedQuery(e,n){return B.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(r){return{name:r.name,query:VI(r.bundledQuery),readTime:Xt(r.readTime)}}(n)),B.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI{constructor(){this.overlays=new Ue(se.comparator),this.Ir=new Map}getOverlay(e,n){return B.resolve(this.overlays.get(n))}getOverlays(e,n){const s=ls();return B.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.ht(e,n,i)}),B.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.Ir.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(s)),B.resolve()}getOverlaysForCollection(e,n,s){const r=ls(),i=n.length+1,a=new se(n.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>s&&r.set(l.getKey(),l)}return B.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new Ue((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>s){let f=i.get(h.largestBatchId);f===null&&(f=ls(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=ls(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,f)=>c.set(h,f)),!(c.size()>=r)););return B.resolve(c)}ht(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const a=this.Ir.get(r.largestBatchId).delete(s.key);this.Ir.set(r.largestBatchId,a)}this.overlays=this.overlays.insert(s.key,new aI(n,s));let i=this.Ir.get(n);i===void 0&&(i=ye(),this.Ir.set(n,i)),this.Ir.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UI{constructor(){this.sessionToken=rt.EMPTY_BYTE_STRING}getSessionToken(e){return B.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,B.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(){this.Tr=new nt(Je.Er),this.dr=new nt(Je.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const s=new Je(e,n);this.Tr=this.Tr.add(s),this.dr=this.dr.add(s)}Rr(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.Vr(new Je(e,n))}mr(e,n){e.forEach(s=>this.removeReference(s,n))}gr(e){const n=new se(new je([])),s=new Je(n,e),r=new Je(n,e+1),i=[];return this.dr.forEachInRange([s,r],a=>{this.Vr(a),i.push(a.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new se(new je([])),s=new Je(n,e),r=new Je(n,e+1);let i=ye();return this.dr.forEachInRange([s,r],a=>{i=i.add(a.key)}),i}containsKey(e){const n=new Je(e,0),s=this.Tr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Je{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return se.comparator(e.key,n.key)||Ce(e.wr,n.wr)}static Ar(e,n){return Ce(e.wr,n.wr)||se.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new nt(Je.Er)}checkEmpty(e){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new oI(i,n,s,r);this.mutationQueue.push(a);for(const c of r)this.br=this.br.add(new Je(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return B.resolve(a)}lookupMutationBatch(e,n){return B.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.vr(s),i=r<0?0:r;return B.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Je(n,0),r=new Je(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([s,r],a=>{const c=this.Dr(a.wr);i.push(c)}),B.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new nt(Ce);return n.forEach(r=>{const i=new Je(r,0),a=new Je(r,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,a],c=>{s=s.add(c.wr)})}),B.resolve(this.Cr(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;se.isDocumentKey(i)||(i=i.child(""));const a=new Je(new se(i),0);let c=new nt(Ce);return this.br.forEachWhile(l=>{const h=l.key.path;return!!s.isPrefixOf(h)&&(h.length===r&&(c=c.add(l.wr)),!0)},a),B.resolve(this.Cr(c))}Cr(e){const n=[];return e.forEach(s=>{const r=this.Dr(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){Ve(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.br;return B.forEach(n.mutations,r=>{const i=new Je(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.br=s})}On(e){}containsKey(e,n){const s=new Je(n,0),r=this.br.firstAfterOrEqual(s);return B.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,B.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jI{constructor(e){this.Mr=e,this.docs=function(){return new Ue(se.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,a=this.Mr(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return B.resolve(s?s.document.mutableCopy():ht.newInvalidDocument(n))}getEntries(e,n){let s=En();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():ht.newInvalidDocument(r))}),B.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=En();const a=n.path,c=new se(a.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:f}}=l.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||TE(wE(f),s)<=0||(r.has(f.key)||pa(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return B.resolve(i)}getAllFromCollectionGroup(e,n,s,r){ae()}Or(e,n){return B.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new $I(this)}getSize(e){return B.resolve(this.size)}}class $I extends OI{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.cr.addEntry(e,r)):this.cr.removeEntry(s)}),B.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HI{constructor(e){this.persistence=e,this.Nr=new gr(n=>Rl(n),Sl),this.lastRemoteSnapshotVersion=ue.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Nl,this.targetCount=0,this.kr=sr.Bn()}forEachTarget(e,n){return this.Nr.forEach((s,r)=>n(r)),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Lr&&(this.Lr=n),B.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new sr(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,B.resolve()}updateTargetData(e,n){return this.Kn(n),B.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Nr.forEach((a,c)=>{c.sequenceNumber<=n&&s.get(c.targetId)===null&&(this.Nr.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),r++)}),B.waitFor(i).next(()=>r)}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,n){const s=this.Nr.get(n)||null;return B.resolve(s)}addMatchingKeys(e,n,s){return this.Br.Rr(n,s),B.resolve()}removeMatchingKeys(e,n,s){this.Br.mr(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(a=>{i.push(r.markPotentiallyOrphaned(e,a))}),B.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),B.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Br.yr(n);return B.resolve(s)}containsKey(e,n){return B.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qI{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Tl(0),this.Kr=!1,this.Kr=!0,this.$r=new UI,this.referenceDelegate=e(this),this.Ur=new HI(this),this.indexManager=new DI,this.remoteDocumentCache=function(r){return new jI(r)}(s=>this.referenceDelegate.Wr(s)),this.serializer=new kI(n),this.Gr=new LI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new FI,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.qr[e.toKey()];return s||(s=new BI(n,this.referenceDelegate),this.qr[e.toKey()]=s),s}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,s){Z("MemoryPersistence","Starting transaction:",e);const r=new WI(this.Qr.next());return this.referenceDelegate.zr(),s(r).next(i=>this.referenceDelegate.jr(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Hr(e,n){return B.or(Object.values(this.qr).map(s=>()=>s.containsKey(e,n)))}}class WI extends bE{constructor(e){super(),this.currentSequenceNumber=e}}class Ol{constructor(e){this.persistence=e,this.Jr=new Nl,this.Yr=null}static Zr(e){return new Ol(e)}get Xr(){if(this.Yr)return this.Yr;throw ae()}addReference(e,n,s){return this.Jr.addReference(s,n),this.Xr.delete(s.toString()),B.resolve()}removeReference(e,n,s){return this.Jr.removeReference(s,n),this.Xr.add(s.toString()),B.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),B.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(r=>this.Xr.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Xr.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.Xr,s=>{const r=se.fromPath(s);return this.ei(e,r).next(i=>{i||n.removeEntry(r,ue.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(s=>{s?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return B.or([()=>B.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.$i=s,this.Ui=r}static Wi(e,n){let s=ye(),r=ye();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Ml(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Qy()?8:CE(pt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,s,r){const i={result:null};return this.Yi(e,n).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.Zi(e,n,r,s).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new zI;return this.Xi(e,n,a).next(c=>{if(i.result=c,this.zi)return this.es(e,n,a,c.size)})}).next(()=>i.result)}es(e,n,s,r){return s.documentReadCount<this.ji?(Fr()<=Ie.DEBUG&&Z("QueryEngine","SDK will not create cache indexes for query:",Ns(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),B.resolve()):(Fr()<=Ie.DEBUG&&Z("QueryEngine","Query:",Ns(n),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.Hi*r?(Fr()<=Ie.DEBUG&&Z("QueryEngine","The SDK decides to create cache indexes for query:",Ns(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Zt(n))):B.resolve())}Yi(e,n){if(fd(n))return B.resolve(null);let s=Zt(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Lc(n,null,"F"),s=Zt(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const a=ye(...i);return this.Ji.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,s).next(l=>{const h=this.ts(n,c);return this.ns(n,h,a,l.readTime)?this.Yi(e,Lc(n,null,"F")):this.rs(e,h,n,l)}))})))}Zi(e,n,s,r){return fd(n)||r.isEqual(ue.min())?B.resolve(null):this.Ji.getDocuments(e,s).next(i=>{const a=this.ts(n,i);return this.ns(n,a,s,r)?B.resolve(null):(Fr()<=Ie.DEBUG&&Z("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Ns(n)),this.rs(e,a,n,IE(r,-1)).next(c=>c))})}ts(e,n){let s=new nt(am(e));return n.forEach((r,i)=>{pa(e,i)&&(s=s.add(i))}),s}ns(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Xi(e,n,s){return Fr()<=Ie.DEBUG&&Z("QueryEngine","Using full collection scan to execute query:",Ns(n)),this.Ji.getDocumentsMatchingQuery(e,n,Gn.min(),s)}rs(e,n,s,r){return this.Ji.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GI{constructor(e,n,s,r){this.persistence=e,this.ss=n,this.serializer=r,this.os=new Ue(Ce),this._s=new gr(i=>Rl(i),Sl),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(s)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new xI(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function QI(t,e,n,s){return new GI(t,e,n,s)}async function Pm(t,e){const n=he(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.ls(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const a=[],c=[];let l=ye();for(const h of r){a.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}for(const h of i){c.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(s,l).next(h=>({hs:h,removedBatchIds:a,addedBatchIds:c}))})})}function YI(t,e){const n=he(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(c,l,h,f){const m=h.batch,g=m.keys();let w=B.resolve();return g.forEach(k=>{w=w.next(()=>f.getEntry(l,k)).next(M=>{const N=h.docVersions.get(k);Ve(N!==null),M.version.compareTo(N)<0&&(m.applyToRemoteDocument(M,h),M.isValidDocument()&&(M.setReadTime(h.commitVersion),f.addEntry(M)))})}),w.next(()=>c.mutationQueue.removeMutationBatch(l,m))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(c){let l=ye();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function km(t){const e=he(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function JI(t,e){const n=he(t),s=e.snapshotVersion;let r=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=n.cs.newChangeBuffer({trackRemovals:!0});r=n.os;const c=[];e.targetChanges.forEach((f,m)=>{const g=r.get(m);if(!g)return;c.push(n.Ur.removeMatchingKeys(i,f.removedDocuments,m).next(()=>n.Ur.addMatchingKeys(i,f.addedDocuments,m)));let w=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?w=w.withResumeToken(rt.EMPTY_BYTE_STRING,ue.min()).withLastLimboFreeSnapshotVersion(ue.min()):f.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(f.resumeToken,s)),r=r.insert(m,w),function(M,N,H){return M.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-M.snapshotVersion.toMicroseconds()>=3e8?!0:H.addedDocuments.size+H.modifiedDocuments.size+H.removedDocuments.size>0}(g,w,f)&&c.push(n.Ur.updateTargetData(i,w))});let l=En(),h=ye();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(ZI(i,a,e.documentUpdates).next(f=>{l=f.Ps,h=f.Is})),!s.isEqual(ue.min())){const f=n.Ur.getLastRemoteSnapshotVersion(i).next(m=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,s));c.push(f)}return B.waitFor(c).next(()=>a.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,h)).next(()=>l)}).then(i=>(n.os=r,i))}function ZI(t,e,n){let s=ye(),r=ye();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let a=En();return n.forEach((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(r=r.add(c)),l.isNoDocument()&&l.version.isEqual(ue.min())?(e.removeEntry(c,l.readTime),a=a.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),a=a.insert(c,l)):Z("LocalStore","Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)}),{Ps:a,Is:r}})}function XI(t,e){const n=he(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function ew(t,e){const n=he(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Ur.getTargetData(s,e).next(i=>i?(r=i,B.resolve(r)):n.Ur.allocateTargetId(s).next(a=>(r=new Fn(e,a,"TargetPurposeListen",s.currentSequenceNumber),n.Ur.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.os.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.os=n.os.insert(s.targetId,s),n._s.set(e,s.targetId)),s})}async function $c(t,e,n){const s=he(t),r=s.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,a=>s.persistence.referenceDelegate.removeTarget(a,r))}catch(a){if(!Ti(a))throw a;Z("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}s.os=s.os.remove(e),s._s.delete(r.target)}function Ad(t,e,n){const s=he(t);let r=ue.min(),i=ye();return s.persistence.runTransaction("Execute query","readwrite",a=>function(l,h,f){const m=he(l),g=m._s.get(f);return g!==void 0?B.resolve(m.os.get(g)):m.Ur.getTargetData(h,f)}(s,a,Zt(e)).next(c=>{if(c)return r=c.lastLimboFreeSnapshotVersion,s.Ur.getMatchingKeysForTargetId(a,c.targetId).next(l=>{i=l})}).next(()=>s.ss.getDocumentsMatchingQuery(a,e,n?r:ue.min(),n?i:ye())).next(c=>(tw(s,WE(e),c),{documents:c,Ts:i})))}function tw(t,e,n){let s=t.us.get(e)||ue.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.us.set(e,s)}class bd{constructor(){this.activeTargetIds=JE()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class nw{constructor(){this.so=new bd,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,s){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new bd,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){Z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){Z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let so=null;function sc(){return so===null?so=function(){return 268435456+Math.round(2147483648*Math.random())}():so++,"0x"+so.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iw{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ct="WebChannelConnection";class ow extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const s=n.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=s+"://"+n.host,this.vo=`projects/${r}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${r}`:`project_id=${r}&database_id=${i}`}get Fo(){return!1}Mo(n,s,r,i,a){const c=sc(),l=this.xo(n,s.toUriEncodedString());Z("RestConnection",`Sending RPC '${n}' ${c}:`,l,r);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,i,a),this.No(n,l,h,r).then(f=>(Z("RestConnection",`Received RPC '${n}' ${c}: `,f),f),f=>{throw Xs("RestConnection",`RPC '${n}' ${c} failed with error: `,f,"url: ",l,"request:",r),f})}Lo(n,s,r,i,a,c){return this.Mo(n,s,r,i,a)}Oo(n,s,r){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+pr}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((i,a)=>n[a]=i),r&&r.headers.forEach((i,a)=>n[a]=i)}xo(n,s){const r=rw[n];return`${this.Do}/v1/${s}:${r}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,s,r){const i=sc();return new Promise((a,c)=>{const l=new qp;l.setWithCredentials(!0),l.listenOnce(Wp.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case fo.NO_ERROR:const f=l.getResponseJson();Z(ct,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),a(f);break;case fo.TIMEOUT:Z(ct,`RPC '${e}' ${i} timed out`),c(new ne($.DEADLINE_EXCEEDED,"Request time out"));break;case fo.HTTP_ERROR:const m=l.getStatus();if(Z(ct,`RPC '${e}' ${i} failed with status:`,m,"response text:",l.getResponseText()),m>0){let g=l.getResponseJson();Array.isArray(g)&&(g=g[0]);const w=g==null?void 0:g.error;if(w&&w.status&&w.message){const k=function(N){const H=N.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(H)>=0?H:$.UNKNOWN}(w.status);c(new ne(k,w.message))}else c(new ne($.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new ne($.UNAVAILABLE,"Connection failed."));break;default:ae()}}finally{Z(ct,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(r);Z(ct,`RPC '${e}' ${i} sending request:`,r),l.send(n,"POST",h,s,15)})}Bo(e,n,s){const r=sc(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Gp(),c=Kp(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,n,s),l.encodeInitMessageHeaders=!0;const f=i.join("");Z(ct,`Creating RPC '${e}' stream ${r}: ${f}`,l);const m=a.createWebChannel(f,l);let g=!1,w=!1;const k=new iw({Io:N=>{w?Z(ct,`Not sending because RPC '${e}' stream ${r} is closed:`,N):(g||(Z(ct,`Opening RPC '${e}' stream ${r} transport.`),m.open(),g=!0),Z(ct,`RPC '${e}' stream ${r} sending:`,N),m.send(N))},To:()=>m.close()}),M=(N,H,L)=>{N.listen(H,W=>{try{L(W)}catch(F){setTimeout(()=>{throw F},0)}})};return M(m,Hr.EventType.OPEN,()=>{w||(Z(ct,`RPC '${e}' stream ${r} transport opened.`),k.yo())}),M(m,Hr.EventType.CLOSE,()=>{w||(w=!0,Z(ct,`RPC '${e}' stream ${r} transport closed`),k.So())}),M(m,Hr.EventType.ERROR,N=>{w||(w=!0,Xs(ct,`RPC '${e}' stream ${r} transport errored:`,N),k.So(new ne($.UNAVAILABLE,"The operation could not be completed")))}),M(m,Hr.EventType.MESSAGE,N=>{var H;if(!w){const L=N.data[0];Ve(!!L);const W=L,F=W.error||((H=W[0])===null||H===void 0?void 0:H.error);if(F){Z(ct,`RPC '${e}' stream ${r} received error:`,F);const _e=F.status;let re=function(E){const T=qe[E];if(T!==void 0)return ym(T)}(_e),A=F.message;re===void 0&&(re=$.INTERNAL,A="Unknown error status: "+_e+" with message "+F.message),w=!0,k.So(new ne(re,A)),m.close()}else Z(ct,`RPC '${e}' stream ${r} received:`,L),k.bo(L)}}),M(c,zp.STAT_EVENT,N=>{N.stat===Dc.PROXY?Z(ct,`RPC '${e}' stream ${r} detected buffering proxy`):N.stat===Dc.NOPROXY&&Z(ct,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{k.wo()},0),k}}function rc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function va(t){return new gI(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(e,n,s=1e3,r=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=s,this.qo=r,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),s=Math.max(0,Date.now()-this.Uo),r=Math.max(0,n-s);r>0&&Z("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,r,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(e,n,s,r,i,a,c,l){this.ui=e,this.Ho=s,this.Jo=r,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Vm(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===$.RESOURCE_EXHAUSTED?(yn(n.toString()),yn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Yo===n&&this.P_(s,r)},s=>{e(()=>{const r=new ne($.UNKNOWN,"Fetching auth token failed: "+s.message);return this.I_(r)})})}P_(e,n){const s=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{s(()=>this.listener.Eo())}),this.stream.Ro(()=>{s(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(r=>{s(()=>this.I_(r))}),this.stream.onMessage(r=>{s(()=>++this.e_==1?this.E_(r):this.onNext(r))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return Z("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(Z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class aw extends Dm{constructor(e,n,s,r,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,a),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=yI(this.serializer,e),s=function(i){if(!("targetChange"in i))return ue.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?ue.min():a.readTime?Xt(a.readTime):ue.min()}(e);return this.listener.d_(n,s)}A_(e){const n={};n.database=jc(this.serializer),n.addTarget=function(i,a){let c;const l=a.target;if(c=xc(l)?{documents:wI(i,l)}:{query:TI(i,l)._t},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=wm(i,a.resumeToken);const h=Fc(i,a.expectedCount);h!==null&&(c.expectedCount=h)}else if(a.snapshotVersion.compareTo(ue.min())>0){c.readTime=Lo(i,a.snapshotVersion.toTimestamp());const h=Fc(i,a.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const s=bI(this.serializer,e);s&&(n.labels=s),this.a_(n)}R_(e){const n={};n.database=jc(this.serializer),n.removeTarget=e,this.a_(n)}}class cw extends Dm{constructor(e,n,s,r,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,a),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Ve(!!e.streamToken),this.lastStreamToken=e.streamToken,Ve(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Ve(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=II(e.writeResults,e.commitTime),s=Xt(e.commitTime);return this.listener.g_(s,n)}p_(){const e={};e.database=jc(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>EI(this.serializer,s))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.y_=!1}w_(){if(this.y_)throw new ne($.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,s,r){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Mo(e,Uc(n,s),r,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ne($.UNKNOWN,i.toString())})}Lo(e,n,s,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Lo(e,Uc(n,s),r,a,c,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new ne($.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class uw{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(yn(n),this.D_=!1):Z("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(a=>{s.enqueueAndForget(async()=>{ws(this)&&(Z("RemoteStore","Restarting streams for network reachability change."),await async function(l){const h=he(l);h.L_.add(4),await Ci(h),h.q_.set("Unknown"),h.L_.delete(4),await ya(h)}(this))})}),this.q_=new uw(s,r)}}async function ya(t){if(ws(t))for(const e of t.B_)await e(!0)}async function Ci(t){for(const e of t.B_)await e(!1)}function Nm(t,e){const n=he(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Ul(n)?Fl(n):_r(n).r_()&&Ll(n,e))}function xl(t,e){const n=he(t),s=_r(n);n.N_.delete(e),s.r_()&&Om(n,e),n.N_.size===0&&(s.r_()?s.o_():ws(n)&&n.q_.set("Unknown"))}function Ll(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ue.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}_r(t).A_(e)}function Om(t,e){t.Q_.xe(e),_r(t).R_(e)}function Fl(t){t.Q_=new dI({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),_r(t).start(),t.q_.v_()}function Ul(t){return ws(t)&&!_r(t).n_()&&t.N_.size>0}function ws(t){return he(t).L_.size===0}function Mm(t){t.Q_=void 0}async function dw(t){t.q_.set("Online")}async function fw(t){t.N_.forEach((e,n)=>{Ll(t,e)})}async function pw(t,e){Mm(t),Ul(t)?(t.q_.M_(e),Fl(t)):t.q_.set("Unknown")}async function mw(t,e,n){if(t.q_.set("Online"),e instanceof Im&&e.state===2&&e.cause)try{await async function(r,i){const a=i.cause;for(const c of i.targetIds)r.N_.has(c)&&(await r.remoteSyncer.rejectListen(c,a),r.N_.delete(c),r.Q_.removeTarget(c))}(t,e)}catch(s){Z("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Fo(t,s)}else if(e instanceof go?t.Q_.Ke(e):e instanceof Em?t.Q_.He(e):t.Q_.We(e),!n.isEqual(ue.min()))try{const s=await km(t.localStore);n.compareTo(s)>=0&&await function(i,a){const c=i.Q_.rt(a);return c.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.N_.get(h);f&&i.N_.set(h,f.withResumeToken(l.resumeToken,a))}}),c.targetMismatches.forEach((l,h)=>{const f=i.N_.get(l);if(!f)return;i.N_.set(l,f.withResumeToken(rt.EMPTY_BYTE_STRING,f.snapshotVersion)),Om(i,l);const m=new Fn(f.target,l,h,f.sequenceNumber);Ll(i,m)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(s){Z("RemoteStore","Failed to raise snapshot:",s),await Fo(t,s)}}async function Fo(t,e,n){if(!Ti(e))throw e;t.L_.add(1),await Ci(t),t.q_.set("Offline"),n||(n=()=>km(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Z("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await ya(t)})}function xm(t,e){return e().catch(n=>Fo(t,n,e))}async function Ea(t){const e=he(t),n=Yn(e);let s=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;gw(e);)try{const r=await XI(e.localStore,s);if(r===null){e.O_.length===0&&n.o_();break}s=r.batchId,_w(e,r)}catch(r){await Fo(e,r)}Lm(e)&&Fm(e)}function gw(t){return ws(t)&&t.O_.length<10}function _w(t,e){t.O_.push(e);const n=Yn(t);n.r_()&&n.V_&&n.m_(e.mutations)}function Lm(t){return ws(t)&&!Yn(t).n_()&&t.O_.length>0}function Fm(t){Yn(t).start()}async function vw(t){Yn(t).p_()}async function yw(t){const e=Yn(t);for(const n of t.O_)e.m_(n.mutations)}async function Ew(t,e,n){const s=t.O_.shift(),r=kl.from(s,e,n);await xm(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Ea(t)}async function Iw(t,e){e&&Yn(t).V_&&await async function(s,r){if(function(a){return lI(a)&&a!==$.ABORTED}(r.code)){const i=s.O_.shift();Yn(s).s_(),await xm(s,()=>s.remoteSyncer.rejectFailedWrite(i.batchId,r)),await Ea(s)}}(t,e),Lm(t)&&Fm(t)}async function Rd(t,e){const n=he(t);n.asyncQueue.verifyOperationInProgress(),Z("RemoteStore","RemoteStore received new credentials");const s=ws(n);n.L_.add(3),await Ci(n),s&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await ya(n)}async function ww(t,e){const n=he(t);e?(n.L_.delete(2),await ya(n)):e||(n.L_.add(2),await Ci(n),n.q_.set("Unknown"))}function _r(t){return t.K_||(t.K_=function(n,s,r){const i=he(n);return i.w_(),new aw(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{Eo:dw.bind(null,t),Ro:fw.bind(null,t),mo:pw.bind(null,t),d_:mw.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Ul(t)?Fl(t):t.q_.set("Unknown")):(await t.K_.stop(),Mm(t))})),t.K_}function Yn(t){return t.U_||(t.U_=function(n,s,r){const i=he(n);return i.w_(),new cw(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:vw.bind(null,t),mo:Iw.bind(null,t),f_:yw.bind(null,t),g_:Ew.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Ea(t)):(await t.U_.stop(),t.O_.length>0&&(Z("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new qn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,r,i){const a=Date.now()+s,c=new Bl(e,n,a,r,i);return c.start(s),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ne($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function jl(t,e){if(yn("AsyncQueue",`${e}: ${t}`),Ti(t))return new ne($.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e){this.comparator=e?(n,s)=>e(n,s)||se.comparator(n.key,s.key):(n,s)=>se.comparator(n.key,s.key),this.keyedMap=qr(),this.sortedSet=new Ue(this.comparator)}static emptySet(e){return new $s(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof $s)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new $s;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(){this.W_=new Ue(se.comparator)}track(e){const n=e.doc.key,s=this.W_.get(n);s?e.type!==0&&s.type===3?this.W_=this.W_.insert(n,e):e.type===3&&s.type!==1?this.W_=this.W_.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.W_=this.W_.remove(n):e.type===1&&s.type===2?this.W_=this.W_.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):ae():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,s)=>{e.push(s)}),e}}class rr{constructor(e,n,s,r,i,a,c,l,h){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,n,s,r,i){const a=[];return n.forEach(c=>{a.push({type:0,doc:c})}),new rr(e,n,$s.emptySet(n),a,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&fa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tw{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class Aw{constructor(){this.queries=Pd(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,s){const r=he(n),i=r.queries;r.queries=Pd(),i.forEach((a,c)=>{for(const l of c.j_)l.onError(s)})})(this,new ne($.ABORTED,"Firestore shutting down"))}}function Pd(){return new gr(t=>om(t),fa)}async function Um(t,e){const n=he(t);let s=3;const r=e.query;let i=n.queries.get(r);i?!i.H_()&&e.J_()&&(s=2):(i=new Tw,s=e.J_()?0:1);try{switch(s){case 0:i.z_=await n.onListen(r,!0);break;case 1:i.z_=await n.onListen(r,!1);break;case 2:await n.onFirstRemoteStoreListen(r)}}catch(a){const c=jl(a,`Initialization of query '${Ns(e.query)}' failed`);return void e.onError(c)}n.queries.set(r,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&$l(n)}async function Bm(t,e){const n=he(t),s=e.query;let r=3;const i=n.queries.get(s);if(i){const a=i.j_.indexOf(e);a>=0&&(i.j_.splice(a,1),i.j_.length===0?r=e.J_()?0:1:!i.H_()&&e.J_()&&(r=2))}switch(r){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function bw(t,e){const n=he(t);let s=!1;for(const r of e){const i=r.query,a=n.queries.get(i);if(a){for(const c of a.j_)c.X_(r)&&(s=!0);a.z_=r}}s&&$l(n)}function Cw(t,e,n){const s=he(t),r=s.queries.get(e);if(r)for(const i of r.j_)i.onError(n);s.queries.delete(e)}function $l(t){t.Y_.forEach(e=>{e.next()})}var Hc,kd;(kd=Hc||(Hc={})).ea="default",kd.Cache="cache";class jm{constructor(e,n,s){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=s||{}}X_(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new rr(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const s=n!=="Offline";return(!this.options._a||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=rr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Hc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(e){this.key=e}}class Hm{constructor(e){this.key=e}}class Rw{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ye(),this.mutatedKeys=ye(),this.Aa=am(e),this.Ra=new $s(this.Aa)}get Va(){return this.Ta}ma(e,n){const s=n?n.fa:new Sd,r=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,a=r,c=!1;const l=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,h=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((f,m)=>{const g=r.get(f),w=pa(this.query,m)?m:null,k=!!g&&this.mutatedKeys.has(g.key),M=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let N=!1;g&&w?g.data.isEqual(w.data)?k!==M&&(s.track({type:3,doc:w}),N=!0):this.ga(g,w)||(s.track({type:2,doc:w}),N=!0,(l&&this.Aa(w,l)>0||h&&this.Aa(w,h)<0)&&(c=!0)):!g&&w?(s.track({type:0,doc:w}),N=!0):g&&!w&&(s.track({type:1,doc:g}),N=!0,(l||h)&&(c=!0)),N&&(w?(a=a.add(w),i=M?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),s.track({type:1,doc:f})}return{Ra:a,fa:s,ns:c,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s,r){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const a=e.fa.G_();a.sort((f,m)=>function(w,k){const M=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ae()}};return M(w)-M(k)}(f.type,m.type)||this.Aa(f.doc,m.doc)),this.pa(s),r=r!=null&&r;const c=n&&!r?this.ya():[],l=this.da.size===0&&this.current&&!r?1:0,h=l!==this.Ea;return this.Ea=l,a.length!==0||h?{snapshot:new rr(this.query,e.Ra,i,a,e.mutatedKeys,l===0,h,!1,!!s&&s.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Sd,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ye(),this.Ra.forEach(s=>{this.Sa(s.key)&&(this.da=this.da.add(s.key))});const n=[];return e.forEach(s=>{this.da.has(s)||n.push(new Hm(s))}),this.da.forEach(s=>{e.has(s)||n.push(new $m(s))}),n}ba(e){this.Ta=e.Ts,this.da=ye();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return rr.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Sw{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class Pw{constructor(e){this.key=e,this.va=!1}}class kw{constructor(e,n,s,r,i,a){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new gr(c=>om(c),fa),this.Ma=new Map,this.xa=new Set,this.Oa=new Ue(se.comparator),this.Na=new Map,this.La=new Nl,this.Ba={},this.ka=new Map,this.qa=sr.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Vw(t,e,n=!0){const s=Qm(t);let r;const i=s.Fa.get(e);return i?(s.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.Da()):r=await qm(s,e,n,!0),r}async function Dw(t,e){const n=Qm(t);await qm(n,e,!0,!1)}async function qm(t,e,n,s){const r=await ew(t.localStore,Zt(e)),i=r.targetId,a=t.sharedClientState.addLocalQueryTarget(i,n);let c;return s&&(c=await Nw(t,e,i,a==="current",r.resumeToken)),t.isPrimaryClient&&n&&Nm(t.remoteStore,r),c}async function Nw(t,e,n,s,r){t.Ka=(m,g,w)=>async function(M,N,H,L){let W=N.view.ma(H);W.ns&&(W=await Ad(M.localStore,N.query,!1).then(({documents:A})=>N.view.ma(A,W)));const F=L&&L.targetChanges.get(N.targetId),_e=L&&L.targetMismatches.get(N.targetId)!=null,re=N.view.applyChanges(W,M.isPrimaryClient,F,_e);return Dd(M,N.targetId,re.wa),re.snapshot}(t,m,g,w);const i=await Ad(t.localStore,e,!0),a=new Rw(e,i.Ts),c=a.ma(i.documents),l=bi.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),h=a.applyChanges(c,t.isPrimaryClient,l);Dd(t,n,h.wa);const f=new Sw(e,n,a);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function Ow(t,e,n){const s=he(t),r=s.Fa.get(e),i=s.Ma.get(r.targetId);if(i.length>1)return s.Ma.set(r.targetId,i.filter(a=>!fa(a,e))),void s.Fa.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await $c(s.localStore,r.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(r.targetId),n&&xl(s.remoteStore,r.targetId),qc(s,r.targetId)}).catch(wi)):(qc(s,r.targetId),await $c(s.localStore,r.targetId,!0))}async function Mw(t,e){const n=he(t),s=n.Fa.get(e),r=n.Ma.get(s.targetId);n.isPrimaryClient&&r.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),xl(n.remoteStore,s.targetId))}async function xw(t,e,n){const s=Hw(t);try{const r=await function(a,c){const l=he(a),h=Ge.now(),f=c.reduce((w,k)=>w.add(k.key),ye());let m,g;return l.persistence.runTransaction("Locally write mutations","readwrite",w=>{let k=En(),M=ye();return l.cs.getEntries(w,f).next(N=>{k=N,k.forEach((H,L)=>{L.isValidDocument()||(M=M.add(H))})}).next(()=>l.localDocuments.getOverlayedDocuments(w,k)).next(N=>{m=N;const H=[];for(const L of c){const W=rI(L,m.get(L.key).overlayedDocument);W!=null&&H.push(new Is(L.key,W,Xp(W.value.mapValue),_n.exists(!0)))}return l.mutationQueue.addMutationBatch(w,h,H,c)}).next(N=>{g=N;const H=N.applyToLocalDocumentSet(m,M);return l.documentOverlayCache.saveOverlays(w,N.batchId,H)})}).then(()=>({batchId:g.batchId,changes:lm(m)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(a,c,l){let h=a.Ba[a.currentUser.toKey()];h||(h=new Ue(Ce)),h=h.insert(c,l),a.Ba[a.currentUser.toKey()]=h}(s,r.batchId,n),await Ri(s,r.changes),await Ea(s.remoteStore)}catch(r){const i=jl(r,"Failed to persist write");n.reject(i)}}async function Wm(t,e){const n=he(t);try{const s=await JI(n.localStore,e);e.targetChanges.forEach((r,i)=>{const a=n.Na.get(i);a&&(Ve(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?a.va=!0:r.modifiedDocuments.size>0?Ve(a.va):r.removedDocuments.size>0&&(Ve(a.va),a.va=!1))}),await Ri(n,s,e)}catch(s){await wi(s)}}function Vd(t,e,n){const s=he(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.Fa.forEach((i,a)=>{const c=a.view.Z_(e);c.snapshot&&r.push(c.snapshot)}),function(a,c){const l=he(a);l.onlineState=c;let h=!1;l.queries.forEach((f,m)=>{for(const g of m.j_)g.Z_(c)&&(h=!0)}),h&&$l(l)}(s.eventManager,e),r.length&&s.Ca.d_(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Lw(t,e,n){const s=he(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.Na.get(e),i=r&&r.key;if(i){let a=new Ue(se.comparator);a=a.insert(i,ht.newNoDocument(i,ue.min()));const c=ye().add(i),l=new _a(ue.min(),new Map,new Ue(Ce),a,c);await Wm(s,l),s.Oa=s.Oa.remove(i),s.Na.delete(e),Hl(s)}else await $c(s.localStore,e,!1).then(()=>qc(s,e,n)).catch(wi)}async function Fw(t,e){const n=he(t),s=e.batch.batchId;try{const r=await YI(n.localStore,e);Km(n,s,null),zm(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Ri(n,r)}catch(r){await wi(r)}}async function Uw(t,e,n){const s=he(t);try{const r=await function(a,c){const l=he(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return l.mutationQueue.lookupMutationBatch(h,c).next(m=>(Ve(m!==null),f=m.keys(),l.mutationQueue.removeMutationBatch(h,m))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,f,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>l.localDocuments.getDocuments(h,f))})}(s.localStore,e);Km(s,e,n),zm(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Ri(s,r)}catch(r){await wi(r)}}function zm(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function Km(t,e,n){const s=he(t);let r=s.Ba[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.Ba[s.currentUser.toKey()]=r}}function qc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.Ma.get(e))t.Fa.delete(s),n&&t.Ca.$a(s,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(s=>{t.La.containsKey(s)||Gm(t,s)})}function Gm(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(xl(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Hl(t))}function Dd(t,e,n){for(const s of n)s instanceof $m?(t.La.addReference(s.key,e),Bw(t,s)):s instanceof Hm?(Z("SyncEngine","Document no longer in limbo: "+s.key),t.La.removeReference(s.key,e),t.La.containsKey(s.key)||Gm(t,s.key)):ae()}function Bw(t,e){const n=e.key,s=n.path.canonicalString();t.Oa.get(n)||t.xa.has(s)||(Z("SyncEngine","New document in limbo: "+n),t.xa.add(s),Hl(t))}function Hl(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new se(je.fromString(e)),s=t.qa.next();t.Na.set(s,new Pw(n)),t.Oa=t.Oa.insert(n,s),Nm(t.remoteStore,new Fn(Zt(da(n.path)),s,"TargetPurposeLimboResolution",Tl.oe))}}async function Ri(t,e,n){const s=he(t),r=[],i=[],a=[];s.Fa.isEmpty()||(s.Fa.forEach((c,l)=>{a.push(s.Ka(l,e,n).then(h=>{var f;if((h||n)&&s.isPrimaryClient){const m=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(l.targetId))===null||f===void 0?void 0:f.current;s.sharedClientState.updateQueryState(l.targetId,m?"current":"not-current")}if(h){r.push(h);const m=Ml.Wi(l.targetId,h);i.push(m)}}))}),await Promise.all(a),s.Ca.d_(r),await async function(l,h){const f=he(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>B.forEach(h,g=>B.forEach(g.$i,w=>f.persistence.referenceDelegate.addReference(m,g.targetId,w)).next(()=>B.forEach(g.Ui,w=>f.persistence.referenceDelegate.removeReference(m,g.targetId,w)))))}catch(m){if(!Ti(m))throw m;Z("LocalStore","Failed to update sequence numbers: "+m)}for(const m of h){const g=m.targetId;if(!m.fromCache){const w=f.os.get(g),k=w.snapshotVersion,M=w.withLastLimboFreeSnapshotVersion(k);f.os=f.os.insert(g,M)}}}(s.localStore,i))}async function jw(t,e){const n=he(t);if(!n.currentUser.isEqual(e)){Z("SyncEngine","User change. New user:",e.toKey());const s=await Pm(n.localStore,e);n.currentUser=e,function(i,a){i.ka.forEach(c=>{c.forEach(l=>{l.reject(new ne($.CANCELLED,a))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Ri(n,s.hs)}}function $w(t,e){const n=he(t),s=n.Na.get(e);if(s&&s.va)return ye().add(s.key);{let r=ye();const i=n.Ma.get(e);if(!i)return r;for(const a of i){const c=n.Fa.get(a);r=r.unionWith(c.view.Va)}return r}}function Qm(t){const e=he(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Wm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=$w.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Lw.bind(null,e),e.Ca.d_=bw.bind(null,e.eventManager),e.Ca.$a=Cw.bind(null,e.eventManager),e}function Hw(t){const e=he(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Fw.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Uw.bind(null,e),e}class Uo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=va(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return QI(this.persistence,new KI,e.initialUser,this.serializer)}Ga(e){return new qI(Ol.Zr,this.serializer)}Wa(e){return new nw}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Uo.provider={build:()=>new Uo};class Wc{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Vd(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=jw.bind(null,this.syncEngine),await ww(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Aw}()}createDatastore(e){const n=va(e.databaseInfo.databaseId),s=function(i){return new ow(i)}(e.databaseInfo);return function(i,a,c,l){return new lw(i,a,c,l)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return function(s,r,i,a,c){return new hw(s,r,i,a,c)}(this.localStore,this.datastore,e.asyncQueue,n=>Vd(this.syncEngine,n,0),function(){return Cd.D()?new Cd:new sw}())}createSyncEngine(e,n){return function(r,i,a,c,l,h,f){const m=new kw(r,i,a,c,l,h);return f&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(r){const i=he(r);Z("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await Ci(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Wc.provider={build:()=>new Wc};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):yn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{constructor(e,n,s,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=lt.UNAUTHENTICATED,this.clientId=Yp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(s,async a=>{Z("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(s,a=>(Z("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new qn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=jl(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function ic(t,e){t.asyncQueue.verifyOperationInProgress(),Z("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Pm(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Nd(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Ww(t);Z("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(s=>Rd(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,r)=>Rd(e.remoteStore,r)),t._onlineComponents=e}async function Ww(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Z("FirestoreClient","Using user provided OfflineComponentProvider");try{await ic(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(r){return r.name==="FirebaseError"?r.code===$.FAILED_PRECONDITION||r.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}(n))throw n;Xs("Error using user provided cache. Falling back to memory cache: "+n),await ic(t,new Uo)}}else Z("FirestoreClient","Using default OfflineComponentProvider"),await ic(t,new Uo);return t._offlineComponents}async function Jm(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Z("FirestoreClient","Using user provided OnlineComponentProvider"),await Nd(t,t._uninitializedComponentsProvider._online)):(Z("FirestoreClient","Using default OnlineComponentProvider"),await Nd(t,new Wc))),t._onlineComponents}function zw(t){return Jm(t).then(e=>e.syncEngine)}async function zc(t){const e=await Jm(t),n=e.eventManager;return n.onListen=Vw.bind(null,e.syncEngine),n.onUnlisten=Ow.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Dw.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Mw.bind(null,e.syncEngine),n}function Kw(t,e,n={}){const s=new qn;return t.asyncQueue.enqueueAndForget(async()=>function(i,a,c,l,h){const f=new Ym({next:g=>{f.Za(),a.enqueueAndForget(()=>Bm(i,m));const w=g.docs.has(c);!w&&g.fromCache?h.reject(new ne($.UNAVAILABLE,"Failed to get document because the client is offline.")):w&&g.fromCache&&l&&l.source==="server"?h.reject(new ne($.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(g)},error:g=>h.reject(g)}),m=new jm(da(c.path),f,{includeMetadataChanges:!0,_a:!0});return Um(i,m)}(await zc(t),t.asyncQueue,e,n,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zm(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Od=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gw(t,e,n){if(!n)throw new ne($.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Qw(t,e,n,s){if(e===!0&&s===!0)throw new ne($.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Md(t){if(!se.isDocumentKey(t))throw new ne($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ql(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ae()}function Wn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ne($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ql(t);throw new ne($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new ne($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ne($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Qw("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Zm((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ne($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ne($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ne($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,r){return s.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Wl{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new xd({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ne($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ne($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new xd(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new dE;switch(s.type){case"firstParty":return new gE(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ne($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=Od.get(n);s&&(Z("ComponentProvider","Removing Datastore"),Od.delete(n),s.terminate())}(this),Promise.resolve()}}function Yw(t,e,n,s={}){var r;const i=(t=Wn(t,Wl))._getSettings(),a=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==a&&Xs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:a,ssl:!1})),s.mockUserToken){let c,l;if(typeof s.mockUserToken=="string")c=s.mockUserToken,l=lt.MOCK_USER;else{c=$y(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const h=s.mockUserToken.sub||s.mockUserToken.user_id;if(!h)throw new ne($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new lt(h)}t._authCredentials=new fE(new Qp(c,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Ia(this.firestore,e,this._query)}}class kt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new mi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new kt(this.firestore,e,this._key)}}class mi extends Ia{constructor(e,n,s){super(e,n,da(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new kt(this.firestore,null,new se(e))}withConverter(e){return new mi(this.firestore,e,this._path)}}function Kc(t,e,...n){if(t=bt(t),arguments.length===1&&(e=Yp.newId()),Gw("doc","path",e),t instanceof Wl){const s=je.fromString(e,...n);return Md(s),new kt(t,null,new se(s))}{if(!(t instanceof kt||t instanceof mi))throw new ne($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(je.fromString(e,...n));return Md(s),new kt(t.firestore,t instanceof mi?t.converter:null,new se(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Vm(this,"async_queue_retry"),this.Vu=()=>{const s=rc();s&&Z("AsyncQueue","Visibility state changed to "+s.visibilityState),this.t_.jo()},this.mu=e;const n=rc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=rc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new qn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Ti(e))throw e;Z("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(s=>{this.Eu=s,this.du=!1;const r=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(s);throw yn("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.du=!1,s))));return this.mu=n,n}enqueueAfterDelay(e,n,s){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const r=Bl.createAndSchedule(this,e,n,s,i=>this.yu(i));return this.Tu.push(r),r}fu(){this.Eu&&ae()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function Fd(t){return function(n,s){if(typeof n!="object"||n===null)return!1;const r=n;for(const i of s)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class gi extends Wl{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new Ld,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Ld(e),this._firestoreClient=void 0,await e}}}function Jw(t,e){const n=typeof t=="object"?t:Bp(),s=typeof t=="string"?t:e||"(default)",r=Il(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=By("firestore");i&&Yw(r,...i)}return r}function zl(t){if(t._terminated)throw new ne($.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||Zw(t),t._firestoreClient}function Zw(t){var e,n,s;const r=t._freezeSettings(),i=function(c,l,h,f){return new PE(c,l,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Zm(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._componentsProvider||!((n=r.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=r.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._componentsProvider={_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider}),t._firestoreClient=new qw(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ir(rt.fromBase64String(e))}catch(n){throw new ne($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ir(rt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ne($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new tt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ne($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ne($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ce(this._lat,e._lat)||Ce(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,r){if(s.length!==r.length)return!1;for(let i=0;i<s.length;++i)if(s[i]!==r[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xw=/^__.*__$/;class eT{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Is(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ai(e,this.data,n,this.fieldTransforms)}}function eg(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ae()}}class Yl{constructor(e,n,s,r,i,a){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Yl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Fu({path:s,xu:!1});return r.Ou(e),r}Nu(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Fu({path:s,xu:!1});return r.vu(),r}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Bo(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(eg(this.Cu)&&Xw.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class tT{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||va(e)}Qu(e,n,s,r=!1){return new Yl({Cu:e,methodName:n,qu:s,path:tt.emptyPath(),xu:!1,ku:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function nT(t){const e=t._freezeSettings(),n=va(t._databaseId);return new tT(t._databaseId,!!e.ignoreUndefinedProperties,n)}function sT(t,e,n,s,r,i={}){const a=t.Qu(i.merge||i.mergeFields?2:0,e,n,r);rg("Data must be an object, but it was:",a,s);const c=ng(s,a);let l,h;if(i.merge)l=new Ht(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const m of i.mergeFields){const g=rT(e,m,n);if(!a.contains(g))throw new ne($.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);oT(f,g)||f.push(g)}l=new Ht(f),h=a.fieldTransforms.filter(m=>l.covers(m.field))}else l=null,h=a.fieldTransforms;return new eT(new Ot(c),l,h)}function tg(t,e){if(sg(t=bt(t)))return rg("Unsupported field value:",e,t),ng(t,e);if(t instanceof Xm)return function(s,r){if(!eg(r.Cu))throw r.Bu(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Bu(`${s._methodName}() is not currently supported inside arrays`);const i=s._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(s,r){const i=[];let a=0;for(const c of s){let l=tg(c,r.Lu(a));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),a++}return{arrayValue:{values:i}}}(t,e)}return function(s,r){if((s=bt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return ZE(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const i=Ge.fromDate(s);return{timestampValue:Lo(r.serializer,i)}}if(s instanceof Ge){const i=new Ge(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Lo(r.serializer,i)}}if(s instanceof Gl)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof ir)return{bytesValue:wm(r.serializer,s._byteString)};if(s instanceof kt){const i=r.databaseId,a=s.firestore._databaseId;if(!a.isEqual(i))throw r.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Dl(s.firestore._databaseId||r.databaseId,s._key.path)}}if(s instanceof Ql)return function(a,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(l=>{if(typeof l!="number")throw c.Bu("VectorValues must only contain numeric values.");return Pl(c.serializer,l)})}}}}}}(s,r);throw r.Bu(`Unsupported field value: ${ql(s)}`)}(t,e)}function ng(t,e){const n={};return Jp(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):mr(t,(s,r)=>{const i=tg(r,e.Mu(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function sg(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ge||t instanceof Gl||t instanceof ir||t instanceof kt||t instanceof Xm||t instanceof Ql)}function rg(t,e,n){if(!sg(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const s=ql(n);throw s==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+s)}}function rT(t,e,n){if((e=bt(e))instanceof Kl)return e._internalPath;if(typeof e=="string")return ig(t,e);throw Bo("Field path arguments must be of type string or ",t,!1,void 0,n)}const iT=new RegExp("[~\\*/\\[\\]]");function ig(t,e,n){if(e.search(iT)>=0)throw Bo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Kl(...e.split("."))._internalPath}catch{throw Bo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Bo(t,e,n,s,r){const i=s&&!s.isEmpty(),a=r!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${s}`),a&&(l+=` in document ${r}`),l+=")"),new ne($.INVALID_ARGUMENT,c+t+l)}function oT(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new kt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new aT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ag("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class aT extends og{data(){return super.data()}}function ag(t,e){return typeof e=="string"?ig(t,e):e instanceof Kl?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cT(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ne($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class lT{convertValue(e,n="none"){switch(ys(e)){case 0:return null;case 1:return e.booleanValue;case 2:return $e(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(vs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ae()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return mr(e,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertVectorValue(e){var n,s,r;const i=(r=(s=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||s===void 0?void 0:s.values)===null||r===void 0?void 0:r.map(a=>$e(a.doubleValue));return new Ql(i)}convertGeoPoint(e){return new Gl($e(e.latitude),$e(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=bl(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(ui(e));default:return null}}convertTimestamp(e){const n=Qn(e);return new Ge(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=je.fromString(e);Ve(Sm(s));const r=new hi(s.get(1),s.get(3)),i=new se(s.popFirst(5));return r.isEqual(n)||yn(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uT(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class cg extends og{constructor(e,n,s,r,i,a){super(e,n,s,r,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new _o(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(ag("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class _o extends cg{data(e={}){return super.data(e)}}class hT{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new zr(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new _o(this._firestore,this._userDataWriter,s.key,s,new zr(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ne($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let a=0;return r._snapshot.docChanges.map(c=>{const l=new _o(r._firestore,r._userDataWriter,c.doc.key,c.doc,new zr(r._snapshot.mutatedKeys.has(c.doc.key),r._snapshot.fromCache),r.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}})}{let a=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new _o(r._firestore,r._userDataWriter,c.doc.key,c.doc,new zr(r._snapshot.mutatedKeys.has(c.doc.key),r._snapshot.fromCache),r.query.converter);let h=-1,f=-1;return c.type!==0&&(h=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),f=a.indexOf(c.doc.key)),{type:dT(c.type),doc:l,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function dT(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ae()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fT(t){t=Wn(t,kt);const e=Wn(t.firestore,gi);return Kw(zl(e),t._key).then(n=>ug(e,t,n))}class lg extends lT{constructor(e){super(),this.firestore=e}convertBytes(e){return new ir(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new kt(this.firestore,null,n)}}function pT(t,e,n){t=Wn(t,kt);const s=Wn(t.firestore,gi),r=uT(t.converter,e,n);return gT(s,[sT(nT(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,_n.none())])}function mT(t,...e){var n,s,r;t=bt(t);let i={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||Fd(e[a])||(i=e[a],a++);const c={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Fd(e[a])){const m=e[a];e[a]=(n=m.next)===null||n===void 0?void 0:n.bind(m),e[a+1]=(s=m.error)===null||s===void 0?void 0:s.bind(m),e[a+2]=(r=m.complete)===null||r===void 0?void 0:r.bind(m)}let l,h,f;if(t instanceof kt)h=Wn(t.firestore,gi),f=da(t._key.path),l={next:m=>{e[a]&&e[a](ug(h,t,m))},error:e[a+1],complete:e[a+2]};else{const m=Wn(t,Ia);h=Wn(m.firestore,gi),f=m._query;const g=new lg(h);l={next:w=>{e[a]&&e[a](new hT(h,g,m,w))},error:e[a+1],complete:e[a+2]},cT(t._query)}return function(g,w,k,M){const N=new Ym(M),H=new jm(w,N,k);return g.asyncQueue.enqueueAndForget(async()=>Um(await zc(g),H)),()=>{N.Za(),g.asyncQueue.enqueueAndForget(async()=>Bm(await zc(g),H))}}(zl(h),f,c,l)}function gT(t,e){return function(s,r){const i=new qn;return s.asyncQueue.enqueueAndForget(async()=>xw(await zw(s),r,i)),i.promise}(zl(t),e)}function ug(t,e,n){const s=n.docs.get(e._key),r=new lg(t);return new cg(t,r,e._key,s,new zr(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(r){pr=r})(fr),Zs(new gs("firestore",(s,{instanceIdentifier:r,options:i})=>{const a=s.getProvider("app").getImmediate(),c=new gi(new pE(s.getProvider("auth-internal")),new vE(s.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new ne($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new hi(h.options.projectId,f)}(a,r),a);return i=Object.assign({useFetchStreams:n},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),Hn(sd,"4.7.3",e),Hn(sd,"4.7.3","esm2017")})();var _T="firebase",vT="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Hn(_T,vT,"app");function Jl(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function hg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const yT=hg,dg=new Ei("auth","Firebase",hg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jo=new yl("@firebase/auth");function ET(t,...e){jo.logLevel<=Ie.WARN&&jo.warn(`Auth (${fr}): ${t}`,...e)}function vo(t,...e){jo.logLevel<=Ie.ERROR&&jo.error(`Auth (${fr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(t,...e){throw Zl(t,...e)}function en(t,...e){return Zl(t,...e)}function fg(t,e,n){const s=Object.assign(Object.assign({},yT()),{[e]:n});return new Ei("auth","Firebase",s).create(e,{appName:t.name})}function zn(t){return fg(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Zl(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return dg.create(t,...e)}function ie(t,e,...n){if(!t)throw Zl(e,...n)}function dn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw vo(e),new Error(e)}function In(t,e){t||dn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function IT(){return Ud()==="http:"||Ud()==="https:"}function Ud(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(IT()||zy()||"connection"in navigator)?navigator.onLine:!0}function TT(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e,n){this.shortDelay=e,this.longDelay=n,In(n>e,"Short delay should be less than long delay!"),this.isMobile=Hy()||Ky()}get(){return wT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xl(t,e){In(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;dn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;dn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;dn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bT=new Si(3e4,6e4);function Ts(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Zn(t,e,n,s,r={}){return mg(t,r,async()=>{let i={},a={};s&&(e==="GET"?a=s:i={body:JSON.stringify(s)});const c=Ii(Object.assign({key:t.config.apiKey},a)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:l},i);return Wy()||(h.referrerPolicy="no-referrer"),pg.fetch()(gg(t,t.config.apiHost,n,c),h)})}async function mg(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},AT),e);try{const r=new RT(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw ro(t,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ro(t,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw ro(t,"email-already-in-use",a);if(l==="USER_DISABLED")throw ro(t,"user-disabled",a);const f=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw fg(t,f,h);zt(t,f)}}catch(r){if(r instanceof Tn)throw r;zt(t,"network-request-failed",{message:String(r)})}}async function wa(t,e,n,s,r={}){const i=await Zn(t,e,n,s,r);return"mfaPendingCredential"in i&&zt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function gg(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?Xl(t.config,r):`${t.config.apiScheme}://${r}`}function CT(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class RT{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(en(this.auth,"network-request-failed")),bT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ro(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=en(t,e,s);return r.customData._tokenResponse=n,r}function Bd(t){return t!==void 0&&t.enterprise!==void 0}class ST{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return CT(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function PT(t,e){return Zn(t,"GET","/v2/recaptchaConfig",Ts(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kT(t,e){return Zn(t,"POST","/v1/accounts:delete",e)}async function _g(t,e){return Zn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function VT(t,e=!1){const n=bt(t),s=await n.getIdToken(e),r=eu(s);ie(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:ti(oc(r.auth_time)),issuedAtTime:ti(oc(r.iat)),expirationTime:ti(oc(r.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function oc(t){return Number(t)*1e3}function eu(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return vo("JWT malformed, contained fewer than 3 sections"),null;try{const r=Np(n);return r?JSON.parse(r):(vo("Failed to decode base64 JWT payload"),null)}catch(r){return vo("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function jd(t){const e=eu(t);return ie(e,"internal-error"),ie(typeof e.exp<"u","internal-error"),ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _i(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Tn&&DT(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function DT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ti(this.lastLoginAt),this.creationTime=ti(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $o(t){var e;const n=t.auth,s=await t.getIdToken(),r=await _i(t,_g(n,{idToken:s}));ie(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?vg(i.providerUserInfo):[],c=MT(t.providerData,a),l=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),f=l?h:!1,m={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Qc(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,m)}async function OT(t){const e=bt(t);await $o(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function MT(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function vg(t){return t.map(e=>{var{providerId:n}=e,s=Jl(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xT(t,e){const n=await mg(t,{},async()=>{const s=Ii({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,a=gg(t,r,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",pg.fetch()(a,{method:"POST",headers:c,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function LT(t,e){return Zn(t,"POST","/v2/accounts:revokeToken",Ts(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ie(e.idToken,"internal-error"),ie(typeof e.idToken<"u","internal-error"),ie(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):jd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ie(e.length!==0,"internal-error");const n=jd(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ie(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await xT(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,a=new Hs;return s&&(ie(typeof s=="string","internal-error",{appName:e}),a.refreshToken=s),r&&(ie(typeof r=="string","internal-error",{appName:e}),a.accessToken=r),i&&(ie(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Hs,this.toJSON())}_performRefresh(){return dn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(t,e){ie(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class fn{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Jl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new NT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Qc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await _i(this,this.stsTokenManager.getToken(this.auth,e));return ie(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return VT(this,e)}reload(){return OT(this)}_assign(e){this!==e&&(ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new fn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await $o(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(hn(this.auth.app))return Promise.reject(zn(this.auth));const e=await this.getIdToken();return await _i(this,kT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,a,c,l,h,f;const m=(s=n.displayName)!==null&&s!==void 0?s:void 0,g=(r=n.email)!==null&&r!==void 0?r:void 0,w=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,k=(a=n.photoURL)!==null&&a!==void 0?a:void 0,M=(c=n.tenantId)!==null&&c!==void 0?c:void 0,N=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,H=(h=n.createdAt)!==null&&h!==void 0?h:void 0,L=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:W,emailVerified:F,isAnonymous:_e,providerData:re,stsTokenManager:A}=n;ie(W&&A,e,"internal-error");const _=Hs.fromJSON(this.name,A);ie(typeof W=="string",e,"internal-error"),Vn(m,e.name),Vn(g,e.name),ie(typeof F=="boolean",e,"internal-error"),ie(typeof _e=="boolean",e,"internal-error"),Vn(w,e.name),Vn(k,e.name),Vn(M,e.name),Vn(N,e.name),Vn(H,e.name),Vn(L,e.name);const E=new fn({uid:W,auth:e,email:g,emailVerified:F,displayName:m,isAnonymous:_e,photoURL:k,phoneNumber:w,tenantId:M,stsTokenManager:_,createdAt:H,lastLoginAt:L});return re&&Array.isArray(re)&&(E.providerData=re.map(T=>Object.assign({},T))),N&&(E._redirectEventId=N),E}static async _fromIdTokenResponse(e,n,s=!1){const r=new Hs;r.updateFromServerResponse(n);const i=new fn({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await $o(i),i}static async _fromGetAccountInfoResponse(e,n,s){const r=n.users[0];ie(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?vg(r.providerUserInfo):[],a=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),c=new Hs;c.updateFromIdToken(s);const l=new fn({uid:r.localId,auth:e,stsTokenManager:c,isAnonymous:a}),h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new Qc(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $d=new Map;function pn(t){In(t instanceof Function,"Expected a class definition");let e=$d.get(t);return e?(In(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,$d.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}yg.type="NONE";const Hd=yg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yo(t,e,n){return`firebase:${t}:${e}:${n}`}class qs{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=yo(this.userKey,r.apiKey,i),this.fullPersistenceKey=yo("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?fn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new qs(pn(Hd),e,s);const r=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=r[0]||pn(Hd);const a=yo(s,e.config.apiKey,e.name);let c=null;for(const h of n)try{const f=await h._get(a);if(f){const m=fn._fromJSON(e,f);h!==i&&(c=m),i=h;break}}catch{}const l=r.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new qs(i,e,s):(i=l[0],c&&await i._set(a,c.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new qs(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Tg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Eg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(bg(e))return"Blackberry";if(Cg(e))return"Webos";if(Ig(e))return"Safari";if((e.includes("chrome/")||wg(e))&&!e.includes("edge/"))return"Chrome";if(Ag(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Eg(t=pt()){return/firefox\//i.test(t)}function Ig(t=pt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function wg(t=pt()){return/crios\//i.test(t)}function Tg(t=pt()){return/iemobile/i.test(t)}function Ag(t=pt()){return/android/i.test(t)}function bg(t=pt()){return/blackberry/i.test(t)}function Cg(t=pt()){return/webos/i.test(t)}function tu(t=pt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function FT(t=pt()){var e;return tu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function UT(){return Gy()&&document.documentMode===10}function Rg(t=pt()){return tu(t)||Ag(t)||Cg(t)||bg(t)||/windows phone/i.test(t)||Tg(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sg(t,e=[]){let n;switch(t){case"Browser":n=qd(pt());break;case"Worker":n=`${qd(pt())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${fr}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((a,c)=>{try{const l=e(i);a(l)}catch(l){c(l)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jT(t,e={}){return Zn(t,"GET","/v2/passwordPolicy",Ts(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $T=6;class HT{constructor(e){var n,s,r,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:$T,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,r,i,a,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(s=l.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(r=l.containsLowercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(a=l.containsNumericCharacter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qT{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Wd(this),this.idTokenSubscription=new Wd(this),this.beforeStateQueue=new BT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=dg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=pn(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await qs.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await _g(this,{idToken:e}),s=await fn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(hn(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===c)&&(l!=null&&l.user)&&(r=l.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await $o(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=TT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(hn(this.app))return Promise.reject(zn(this));const n=e?bt(e):null;return n&&ie(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return hn(this.app)?Promise.reject(zn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return hn(this.app)?Promise.reject(zn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(pn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await jT(this),n=new HT(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ei("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await LT(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&pn(e)||this._popupRedirectResolver;ie(n,this,"argument-error"),this.redirectPersistenceManager=await qs.create(this,[pn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ie(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,s,r);return()=>{a=!0,l()}}else{const l=e.addObserver(n);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Sg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&ET(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function vr(t){return bt(t)}class Wd{constructor(e){this.auth=e,this.observer=null,this.addObserver=n1(n=>this.observer=n)}get next(){return ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ta={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function WT(t){Ta=t}function Pg(t){return Ta.loadJS(t)}function zT(){return Ta.recaptchaEnterpriseScript}function KT(){return Ta.gapiScript}function GT(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const QT="recaptcha-enterprise",YT="NO_RECAPTCHA";class JT{constructor(e){this.type=QT,this.auth=vr(e)}async verify(e="verify",n=!1){async function s(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,c)=>{PT(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new ST(l);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,a(h.siteKey)}}).catch(l=>{c(l)})})}function r(i,a,c){const l=window.grecaptcha;Bd(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(h=>{a(h)}).catch(()=>{a(YT)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,a)=>{s(this.auth).then(c=>{if(!n&&Bd(window.grecaptcha))r(c,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let l=zT();l.length!==0&&(l+=c),Pg(l).then(()=>{r(c,i,a)}).catch(h=>{a(h)})}}).catch(c=>{a(c)})})}}async function zd(t,e,n,s=!1){const r=new JT(t);let i;try{i=await r.verify(n)}catch{i=await r.verify(n,!0)}const a=Object.assign({},e);return s?Object.assign(a,{captchaResp:i}):Object.assign(a,{captchaResponse:i}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Kd(t,e,n,s){var r;if(!((r=t._getRecaptchaConfig())===null||r===void 0)&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await zd(t,e,n,n==="getOobCode");return s(t,i)}else return s(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await zd(t,e,n,n==="getOobCode");return s(t,a)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZT(t,e){const n=Il(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(ko(i,e??{}))return r;zt(r,"already-initialized")}return n.initialize({options:e})}function XT(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(pn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function eA(t,e,n){const s=vr(t);ie(s._canInitEmulator,s,"emulator-config-failed"),ie(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=kg(e),{host:a,port:c}=tA(e),l=c===null?"":`:${c}`;s.config.emulator={url:`${i}//${a}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||nA()}function kg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function tA(t){const e=kg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Gd(s.substr(i.length+1))}}else{const[i,a]=s.split(":");return{host:i,port:Gd(a)}}}function Gd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function nA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return dn("not implemented")}_getIdTokenResponse(e){return dn("not implemented")}_linkToIdToken(e,n){return dn("not implemented")}_getReauthenticationResolver(e){return dn("not implemented")}}async function sA(t,e){return Zn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rA(t,e){return wa(t,"POST","/v1/accounts:signInWithPassword",Ts(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iA(t,e){return wa(t,"POST","/v1/accounts:signInWithEmailLink",Ts(t,e))}async function oA(t,e){return wa(t,"POST","/v1/accounts:signInWithEmailLink",Ts(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi extends nu{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new vi(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new vi(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Kd(e,n,"signInWithPassword",rA);case"emailLink":return iA(e,{email:this._email,oobCode:this._password});default:zt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Kd(e,s,"signUpPassword",sA);case"emailLink":return oA(e,{idToken:n,email:this._email,oobCode:this._password});default:zt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ws(t,e){return wa(t,"POST","/v1/accounts:signInWithIdp",Ts(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aA="http://localhost";class Es extends nu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Es(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):zt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=Jl(n,["providerId","signInMethod"]);if(!s||!r)return null;const a=new Es(s,r);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return Ws(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Ws(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ws(e,n)}buildRequest(){const e={requestUri:aA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ii(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cA(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function lA(t){const e=jr($r(t)).link,n=e?jr($r(e)).deep_link_id:null,s=jr($r(t)).deep_link_id;return(s?jr($r(s)).link:null)||s||n||e||t}class su{constructor(e){var n,s,r,i,a,c;const l=jr($r(e)),h=(n=l.apiKey)!==null&&n!==void 0?n:null,f=(s=l.oobCode)!==null&&s!==void 0?s:null,m=cA((r=l.mode)!==null&&r!==void 0?r:null);ie(h&&f&&m,"argument-error"),this.apiKey=h,this.operation=m,this.code=f,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(a=l.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=lA(e);try{return new su(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(){this.providerId=yr.PROVIDER_ID}static credential(e,n){return vi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=su.parseLink(n);return ie(s,"argument-error"),vi._fromEmailAndCode(e,s.code,s.tenantId)}}yr.PROVIDER_ID="password";yr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";yr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi extends Vg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends Pi{constructor(){super("facebook.com")}static credential(e){return Es._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return On.credential(e.oauthAccessToken)}catch{return null}}}On.FACEBOOK_SIGN_IN_METHOD="facebook.com";On.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn extends Pi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Es._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Mn.credential(n,s)}catch{return null}}}Mn.GOOGLE_SIGN_IN_METHOD="google.com";Mn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn extends Pi{constructor(){super("github.com")}static credential(e){return Es._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xn.credential(e.oauthAccessToken)}catch{return null}}}xn.GITHUB_SIGN_IN_METHOD="github.com";xn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln extends Pi{constructor(){super("twitter.com")}static credential(e,n){return Es._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Ln.credential(n,s)}catch{return null}}}Ln.TWITTER_SIGN_IN_METHOD="twitter.com";Ln.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await fn._fromIdTokenResponse(e,s,r),a=Qd(s);return new or({user:i,providerId:a,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Qd(s);return new or({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Qd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho extends Tn{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Ho.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Ho(e,n,s,r)}}function Dg(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ho._fromErrorAndOperation(t,i,e,s):i})}async function uA(t,e,n=!1){const s=await _i(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return or._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hA(t,e,n=!1){const{auth:s}=t;if(hn(s.app))return Promise.reject(zn(s));const r="reauthenticate";try{const i=await _i(t,Dg(s,r,e,t),n);ie(i.idToken,s,"internal-error");const a=eu(i.idToken);ie(a,s,"internal-error");const{sub:c}=a;return ie(t.uid===c,s,"user-mismatch"),or._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&zt(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ng(t,e,n=!1){if(hn(t.app))return Promise.reject(zn(t));const s="signIn",r=await Dg(t,s,e),i=await or._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function dA(t,e){return Ng(vr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fA(t){const e=vr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function pA(t,e,n){return hn(t.app)?Promise.reject(zn(t)):dA(bt(t),yr.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&fA(t),s})}function mA(t,e,n,s){return bt(t).onIdTokenChanged(e,n,s)}function gA(t,e,n){return bt(t).beforeAuthStateChanged(e,n)}function _A(t,e,n,s){return bt(t).onAuthStateChanged(e,n,s)}function vA(t){return bt(t).signOut()}const qo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(qo,"1"),this.storage.removeItem(qo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yA=1e3,EA=10;class Mg extends Og{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Rg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,c,l)=>{this.notifyListeners(a,l)});return}const s=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const a=this.storage.getItem(s);!n&&this.localCache[s]===a||this.notifyListeners(s,a)},i=this.storage.getItem(s);UT()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,EA):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},yA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Mg.type="LOCAL";const IA=Mg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg extends Og{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}xg.type="SESSION";const Lg=xg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Aa(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,a=this.handlersMap[r];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const c=Array.from(a).map(async h=>h(n.origin,i)),l=await wA(c);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Aa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ru(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,a;return new Promise((c,l)=>{const h=ru("",20);r.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},s);a={messageChannel:r,onMessage(m){const g=m;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(a),r.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[r.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(){return window}function AA(t){tn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fg(){return typeof tn().WorkerGlobalScope<"u"&&typeof tn().importScripts=="function"}async function bA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function CA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function RA(){return Fg()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ug="firebaseLocalStorageDb",SA=1,Wo="firebaseLocalStorage",Bg="fbase_key";class ki{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ba(t,e){return t.transaction([Wo],e?"readwrite":"readonly").objectStore(Wo)}function PA(){const t=indexedDB.deleteDatabase(Ug);return new ki(t).toPromise()}function Yc(){const t=indexedDB.open(Ug,SA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Wo,{keyPath:Bg})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Wo)?e(s):(s.close(),await PA(),e(await Yc()))})})}async function Yd(t,e,n){const s=ba(t,!0).put({[Bg]:e,value:n});return new ki(s).toPromise()}async function kA(t,e){const n=ba(t,!1).get(e),s=await new ki(n).toPromise();return s===void 0?null:s.value}function Jd(t,e){const n=ba(t,!0).delete(e);return new ki(n).toPromise()}const VA=800,DA=3;class jg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Yc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>DA)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Fg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Aa._getInstance(RA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await bA(),!this.activeServiceWorker)return;this.sender=new TA(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||CA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Yc();return await Yd(e,qo,"1"),await Jd(e,qo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Yd(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>kA(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Jd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=ba(r,!1).getAll();return new ki(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),VA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}jg.type="LOCAL";const NA=jg;new Si(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OA(t,e){return e?pn(e):(ie(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu extends nu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ws(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ws(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ws(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function MA(t){return Ng(t.auth,new iu(t),t.bypassAuthState)}function xA(t){const{auth:e,user:n}=t;return ie(n,e,"internal-error"),hA(n,new iu(t),t.bypassAuthState)}async function LA(t){const{auth:e,user:n}=t;return ie(n,e,"internal-error"),uA(n,new iu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return MA;case"linkViaPopup":case"linkViaRedirect":return LA;case"reauthViaPopup":case"reauthViaRedirect":return xA;default:zt(this.auth,"internal-error")}}resolve(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FA=new Si(2e3,1e4);class xs extends $g{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,xs.currentPopupAction&&xs.currentPopupAction.cancel(),xs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ie(e,this.auth,"internal-error"),e}async onExecution(){In(this.filter.length===1,"Popup operations only handle one event");const e=ru();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(en(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(en(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,xs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(en(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,FA.get())};e()}}xs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UA="pendingRedirect",Eo=new Map;class BA extends $g{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Eo.get(this.auth._key());if(!e){try{const s=await jA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Eo.set(this.auth._key(),e)}return this.bypassAuthState||Eo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function jA(t,e){const n=qA(e),s=HA(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function $A(t,e){Eo.set(t._key(),e)}function HA(t){return pn(t._redirectPersistence)}function qA(t){return yo(UA,t.config.apiKey,t.name)}async function WA(t,e,n=!1){if(hn(t.app))return Promise.reject(zn(t));const s=vr(t),r=OA(s,e),a=await new BA(s,r,n).execute();return a&&!n&&(delete a.user._redirectEventId,await s._persistUserIfCurrent(a.user),await s._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zA=10*60*1e3;class KA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!GA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Hg(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(en(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=zA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Zd(e))}saveEventToCache(e){this.cachedEventUids.add(Zd(e)),this.lastProcessedEventTime=Date.now()}}function Zd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Hg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function GA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Hg(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QA(t,e={}){return Zn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,JA=/^https?/;async function ZA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await QA(t);for(const n of e)try{if(XA(n))return}catch{}zt(t,"unauthorized-domain")}function XA(t){const e=Gc(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===s}if(!JA.test(n))return!1;if(YA.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eb=new Si(3e4,6e4);function Xd(){const t=tn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function tb(t){return new Promise((e,n)=>{var s,r,i;function a(){Xd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Xd(),n(en(t,"network-request-failed"))},timeout:eb.get()})}if(!((r=(s=tn().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=tn().gapi)===null||i===void 0)&&i.load)a();else{const c=GT("iframefcb");return tn()[c]=()=>{gapi.load?a():n(en(t,"network-request-failed"))},Pg(`${KT()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw Io=null,e})}let Io=null;function nb(t){return Io=Io||tb(t),Io}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sb=new Si(5e3,15e3),rb="__/auth/iframe",ib="emulator/auth/iframe",ob={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ab=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function cb(t){const e=t.config;ie(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Xl(e,ib):`https://${t.config.authDomain}/${rb}`,s={apiKey:e.apiKey,appName:t.name,v:fr},r=ab.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${Ii(s).slice(1)}`}async function lb(t){const e=await nb(t),n=tn().gapi;return ie(n,t,"internal-error"),e.open({where:document.body,url:cb(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ob,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const a=en(t,"network-request-failed"),c=tn().setTimeout(()=>{i(a)},sb.get());function l(){tn().clearTimeout(c),r(s)}s.ping(l).then(l,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ub={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},hb=500,db=600,fb="_blank",pb="http://localhost";class ef{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function mb(t,e,n,s=hb,r=db){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),a=Math.max((window.screen.availWidth-s)/2,0).toString();let c="";const l=Object.assign(Object.assign({},ub),{width:s.toString(),height:r.toString(),top:i,left:a}),h=pt().toLowerCase();n&&(c=wg(h)?fb:n),Eg(h)&&(e=e||pb,l.scrollbars="yes");const f=Object.entries(l).reduce((g,[w,k])=>`${g}${w}=${k},`,"");if(FT(h)&&c!=="_self")return gb(e||"",c),new ef(null);const m=window.open(e||"",c,f);ie(m,t,"popup-blocked");try{m.focus()}catch{}return new ef(m)}function gb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _b="__/auth/handler",vb="emulator/auth/handler",yb=encodeURIComponent("fac");async function tf(t,e,n,s,r,i){ie(t.config.authDomain,t,"auth-domain-config-required"),ie(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:fr,eventId:r};if(e instanceof Vg){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",t1(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries(i||{}))a[f]=m}if(e instanceof Pi){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(a.scopes=f.join(","))}t.tenantId&&(a.tid=t.tenantId);const c=a;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await t._getAppCheckToken(),h=l?`#${yb}=${encodeURIComponent(l)}`:"";return`${Eb(t)}?${Ii(c).slice(1)}${h}`}function Eb({config:t}){return t.emulator?Xl(t,vb):`https://${t.authDomain}/${_b}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ac="webStorageSupport";class Ib{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Lg,this._completeRedirectFn=WA,this._overrideRedirectResult=$A}async _openPopup(e,n,s,r){var i;In((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await tf(e,n,s,Gc(),r);return mb(e,a,ru())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await tf(e,n,s,Gc(),r);return AA(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(In(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await lb(e),s=new KA(e);return n.register("authEvent",r=>(ie(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ac,{type:ac},r=>{var i;const a=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[ac];a!==void 0&&n(!!a),zt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ZA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Rg()||Ig()||tu()}}const wb=Ib;var nf="@firebase/auth",sf="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ab(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function bb(t){Zs(new gs("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=s.options;ie(a&&!a.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:a,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Sg(t)},h=new qT(s,r,i,l);return XT(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Zs(new gs("auth-internal",e=>{const n=vr(e.getProvider("auth").getImmediate());return(s=>new Tb(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Hn(nf,sf,Ab(t)),Hn(nf,sf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cb=5*60,Rb=xp("authIdTokenMaxAge")||Cb;let rf=null;const Sb=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>Rb)return;const r=n==null?void 0:n.token;rf!==r&&(rf=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Pb(t=Bp()){const e=Il(t,"auth");if(e.isInitialized())return e.getImmediate();const n=ZT(t,{popupRedirectResolver:wb,persistence:[NA,IA,Lg]}),s=xp("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const a=Sb(i.toString());gA(n,a,()=>a(n.currentUser)),mA(n,c=>a(c))}}const r=Op("auth");return r&&eA(n,`http://${r}`),n}function kb(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}WT({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=en("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",kb().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});bb("Browser");var ks={BASE_URL:"/Portfolio/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const Jc={apiKey:ks.VITE_FIREBASE_API_KEY,authDomain:ks.VITE_FIREBASE_AUTH_DOMAIN,projectId:ks.VITE_FIREBASE_PROJECT_ID,storageBucket:ks.VITE_FIREBASE_STORAGE_BUCKET,messagingSenderId:ks.VITE_FIREBASE_MESSAGING_SENDER_ID,appId:ks.VITE_FIREBASE_APP_ID},zs=!!(Jc.apiKey&&Jc.projectId);let cc=null,zo=null,wo=null;zs&&(cc=Up(Jc),zo=Jw(cc),wo=Pb(cc));const Zc={ielts:{overall:7.5,sections:[{label:"Listening",score:8},{label:"Reading",score:8.5},{label:"Writing",score:6.5},{label:"Speaking",score:6.5}]},gpa:{value:"5.0",scale:"5.0",note:"School cumulative GPA"},sat:{status:"In progress",note:"Currently preparing — score coming soon"},milestones:[{title:"Public School #178",org:"Tashkent, Uzbekistan",when:"September 2016 – May 2019",desc:"Primary and lower-secondary education."},{title:"Wisdom Private School",org:"Tashkent, Uzbekistan",when:"September 2019 – March 2020",desc:"Continued secondary education."},{title:"Iste'dodli Kelajak Yoshlari — Private School",org:"Tashkent, Uzbekistan",when:"March 2020 – May 2026",desc:"Full secondary education through graduation.",badges:["🏆 Best Student of the Year 2023–2024","🏆 Best Student of the Year 2024–2025","🏆 Best Student of the Year 2025–2026"]},{title:"Proweb Learning Center — Web Development",org:"Tashkent, Uzbekistan",when:"16.03.2023 – 16.01.2024",desc:"Modern Web Professions course: HTML, CSS, JavaScript, SCSS, Vue, Git."},{title:"Self-study with Claude AI",org:"Remote, ongoing",when:"2025 – present",desc:"Vibe-coding full projects end-to-end with Claude as a coding partner."}]};function Vb(){const t=Nt(structuredClone(Zc)),e=Nt(zs),n=Nt(null);let s=null;return $f(()=>{if(zs)try{s=mT(Kc(zo,"content","achievements"),r=>{r.exists()&&(t.value=r.data()),e.value=!1},r=>{n.value=r,e.value=!1,console.warn("[useAchievements] Firestore error, using defaults:",r.message)})}catch(r){n.value=r,e.value=!1}}),dl(()=>{s&&s()}),{data:t,loading:e,error:n}}const As=t=>(ta("data-v-cfe45b83"),t=t(),na(),t),Db={class:"ach"},Nb=As(()=>V("header",{class:"ach__head"},[V("h1",{class:"ach__title"},"Achievements"),V("p",{class:"ach__sub"},"Exam scores, milestones & study highlights")],-1)),Ob={class:"ach__card ach__ielts"},Mb={class:"ach__card_head"},xb=As(()=>V("span",{class:"ach__badge ach__badge--gold"},"IELTS",-1)),Lb={class:"ach__big"},Fb=As(()=>V("small",null," / 9.0",-1)),Ub=As(()=>V("p",{class:"ach__card_desc"},"Overall band — Academic",-1)),Bb={class:"ielts__grid"},jb={class:"ielts__label"},$b={class:"ielts__score"},Hb={class:"ach__row"},qb={class:"ach__card"},Wb=As(()=>V("span",{class:"ach__badge ach__badge--blue"},"GPA",-1)),zb={class:"ach__big"},Kb={class:"ach__card_desc"},Gb={class:"ach__card"},Qb=As(()=>V("span",{class:"ach__badge ach__badge--pink"},"SAT",-1)),Yb={class:"ach__big ach__big--soft"},Jb={class:"ach__card_desc"},Zb=As(()=>V("h2",{class:"ach__section"},"Study & Milestones",-1)),Xb={class:"ach__timeline"},eC={class:"tl__title"},tC={class:"tl__org"},nC={class:"tl__when"},sC={class:"tl__desc"},rC={key:0,class:"tl__badges"},iC={__name:"Achievements",setup(t){const{data:e}=Vb();return(n,s)=>(Re(),Pe(ze,null,[V("div",Db,[Nb,V("section",Ob,[V("div",Mb,[xb,V("h2",Lb,[pe(We(vt(e).ielts.overall),1),Fb])]),Ub,V("div",Bb,[(Re(!0),Pe(ze,null,js(vt(e).ielts.sections,r=>(Re(),Pe("div",{class:"ielts__item",key:r.label},[V("span",jb,We(r.label),1),V("span",$b,We(r.score),1)]))),128))])]),V("div",Hb,[V("section",qb,[Wb,V("h2",zb,[pe(We(vt(e).gpa.value),1),V("small",null," / "+We(vt(e).gpa.scale),1)]),V("p",Kb,We(vt(e).gpa.note),1)]),V("section",Gb,[Qb,V("h2",Yb,We(vt(e).sat.status),1),V("p",Jb,We(vt(e).sat.note),1)])]),Zb,V("div",Xb,[(Re(!0),Pe(ze,null,js(vt(e).milestones,r=>(Re(),Pe("article",{class:"tl__item",key:r.title},[V("div",{class:ps(["tl__dot",{"tl__dot--star":r.badges&&r.badges.length}])},null,2),V("div",{class:ps(["tl__body",{"tl__body--highlight":r.badges&&r.badges.length}])},[V("h3",eC,We(r.title),1),V("p",tC,We(r.org),1),V("p",nC,We(r.when),1),V("p",sC,We(r.desc),1),r.badges&&r.badges.length?(Re(),Pe("ul",rC,[(Re(!0),Pe(ze,null,js(r.badges,i=>(Re(),Pe("li",{key:i},We(i),1))),128))])):wc("",!0)],2)]))),128))])]),ge(dr)],64))}},oC=Jn(iC,[["__scopeId","data-v-cfe45b83"]]),An=t=>(ta("data-v-f012a3f0"),t=t(),na(),t),aC={class:"admin"},cC={key:0,class:"admin__notice"},lC=An(()=>V("h1",null,"⚠️ Admin not set up yet",-1)),uC=An(()=>V("p",null,[pe(" The admin panel needs Firebase to be configured. Open the "),V("code",null,"README.md"),pe(" file and follow the "),V("strong",null,'"Set up the admin panel"'),pe(" section (5–10 minutes, free Google account). ")],-1)),hC=[lC,uC],dC=An(()=>V("h1",null,"Admin sign-in",-1)),fC=An(()=>V("p",{class:"admin__hint"}," Use the email & password you set up in your Firebase project (Authentication → Users). ",-1)),pC=["disabled"],mC={key:0,class:"admin__error"},gC={key:2,class:"admin__panel"},_C={class:"admin__top"},vC=An(()=>V("h1",null,"Edit Achievements",-1)),yC={class:"admin__hint"},EC={class:"admin__card"},IC=An(()=>V("h2",null,"IELTS",-1)),wC={class:"admin__grid"},TC=["onUpdate:modelValue"],AC={class:"admin__card"},bC=An(()=>V("h2",null,"GPA",-1)),CC={class:"admin__card"},RC=An(()=>V("h2",null,"SAT",-1)),SC={class:"admin__card"},PC=An(()=>V("h2",null,"Study & Milestones",-1)),kC=["onUpdate:modelValue"],VC=["onUpdate:modelValue"],DC=["onUpdate:modelValue"],NC=["onUpdate:modelValue"],OC=["onClick"],MC={class:"admin__save"},xC=["disabled"],LC={__name:"Admin",setup(t){const e=Nt(null),n=Nt(""),s=Nt(""),r=Nt(""),i=Nt(!1),a=Nt(""),c=Nt("ok");let l=JSON.stringify(Zc);const h=yi(JSON.parse(l));function f(L,W="ok"){a.value=L,c.value=W,setTimeout(()=>a.value="",3500)}zs&&_A(wo,L=>{e.value=L,L&&m()});async function m(){try{const L=await fT(Kc(zo,"content","achievements")),W=L.exists()?L.data():Zc;Object.assign(h,JSON.parse(JSON.stringify(W))),l=JSON.stringify(h)}catch(L){f("Could not load: "+L.message,"err")}}async function g(){if(zs){i.value=!0,r.value="";try{await pA(wo,n.value,s.value)}catch(L){r.value=L.code==="auth/invalid-credential"?"Wrong email or password.":L.message}finally{i.value=!1}}}async function w(){await vA(wo)}async function k(){i.value=!0;try{await pT(Kc(zo,"content","achievements"),JSON.parse(JSON.stringify(h))),l=JSON.stringify(h),f("Saved! Your portfolio will update within a few seconds.")}catch(L){f("Save failed: "+L.message,"err")}finally{i.value=!1}}function M(){Object.assign(h,JSON.parse(l)),f("Discarded unsaved changes.")}function N(){h.milestones.push({title:"New milestone",org:"",when:"",desc:""})}function H(L){h.milestones.splice(L,1)}return(L,W)=>(Re(),Pe("div",aC,[vt(zs)?e.value?(Re(),Pe("div",gC,[V("header",_C,[V("div",null,[vC,V("p",yC,[pe("Signed in as "),V("strong",null,We(e.value.email),1)])]),V("button",{class:"ghost",onClick:w},"Sign out")]),a.value?(Re(),Pe("p",{key:0,class:ps(["admin__status",c.value])},We(a.value),3)):wc("",!0),V("section",EC,[IC,V("label",null,[pe("Overall band "),St(V("input",{type:"number",step:"0.5",min:"0",max:"9","onUpdate:modelValue":W[2]||(W[2]=F=>h.ielts.overall=F)},null,512),[[Pt,h.ielts.overall,void 0,{number:!0}]])]),V("div",wC,[(Re(!0),Pe(ze,null,js(h.ielts.sections,(F,_e)=>(Re(),Pe("label",{key:_e},[pe(We(F.label)+" ",1),St(V("input",{type:"number",step:"0.5",min:"0",max:"9","onUpdate:modelValue":re=>F.score=re},null,8,TC),[[Pt,F.score,void 0,{number:!0}]])]))),128))])]),V("section",AC,[bC,V("label",null,[pe("Value "),St(V("input",{type:"text","onUpdate:modelValue":W[3]||(W[3]=F=>h.gpa.value=F)},null,512),[[Pt,h.gpa.value]])]),V("label",null,[pe("Out of "),St(V("input",{type:"text","onUpdate:modelValue":W[4]||(W[4]=F=>h.gpa.scale=F)},null,512),[[Pt,h.gpa.scale]])]),V("label",null,[pe("Caption "),St(V("input",{type:"text","onUpdate:modelValue":W[5]||(W[5]=F=>h.gpa.note=F)},null,512),[[Pt,h.gpa.note]])])]),V("section",CC,[RC,V("label",null,[pe("Status "),St(V("input",{type:"text","onUpdate:modelValue":W[6]||(W[6]=F=>h.sat.status=F)},null,512),[[Pt,h.sat.status]])]),V("label",null,[pe("Caption "),St(V("input",{type:"text","onUpdate:modelValue":W[7]||(W[7]=F=>h.sat.note=F)},null,512),[[Pt,h.sat.note]])])]),V("section",SC,[V("header",{class:"admin__cardhead"},[PC,V("button",{class:"ghost",type:"button",onClick:N},"+ Add")]),(Re(!0),Pe(ze,null,js(h.milestones,(F,_e)=>(Re(),Pe("div",{key:_e,class:"admin__milestone"},[V("label",null,[pe("Title "),St(V("input",{type:"text","onUpdate:modelValue":re=>F.title=re},null,8,kC),[[Pt,F.title]])]),V("label",null,[pe("Where "),St(V("input",{type:"text","onUpdate:modelValue":re=>F.org=re},null,8,VC),[[Pt,F.org]])]),V("label",null,[pe("When "),St(V("input",{type:"text","onUpdate:modelValue":re=>F.when=re},null,8,DC),[[Pt,F.when]])]),V("label",null,[pe("Description"),St(V("textarea",{"onUpdate:modelValue":re=>F.desc=re,rows:"2"},null,8,NC),[[Pt,F.desc]])]),V("button",{class:"danger",type:"button",onClick:re=>H(_e)},"Remove",8,OC)]))),128))]),V("div",MC,[V("button",{type:"button",onClick:k,disabled:i.value},We(i.value?"Saving…":"Save all changes"),9,xC),V("button",{type:"button",class:"ghost",onClick:M},"Discard")])])):(Re(),Pe("form",{key:1,class:"admin__login",onSubmit:Rv(g,["prevent"])},[dC,fC,St(V("input",{"onUpdate:modelValue":W[0]||(W[0]=F=>n.value=F),type:"email",placeholder:"Email",autocomplete:"email",required:""},null,512),[[Pt,n.value]]),St(V("input",{"onUpdate:modelValue":W[1]||(W[1]=F=>s.value=F),type:"password",placeholder:"Password",autocomplete:"current-password",required:""},null,512),[[Pt,s.value]]),V("button",{type:"submit",disabled:i.value},We(i.value?"Signing in…":"Sign in"),9,pC),r.value?(Re(),Pe("p",mC,We(r.value),1)):wc("",!0)],32)):(Re(),Pe("div",cC,hC))]))}},FC=Jn(LC,[["__scopeId","data-v-f012a3f0"]]),UC=N2({history:Qv("/Portfolio/"),routes:[{path:"/",name:"HomePage",component:Ay},{path:"/about",name:"AboutPage",component:ey},{path:"/stack",name:"StackPage",component:Ry},{path:"/project",name:"ProjectPage",component:ky},{path:"/achievements",name:"AchievementsPage",component:oC},{path:"/contact",name:"ContactPage",component:Dy},{path:"/admin",name:"AdminPage",component:FC}]}),BC={class:"nav"},jC={class:"nav__logo"},$C=V("span",{class:"nav__brand_first"},"Rustam",-1),HC=V("span",{class:"nav__brand_last"},"Isroilov",-1),qC=["aria-expanded"],WC=V("span",null,null,-1),zC=V("span",null,null,-1),KC=V("span",null,null,-1),GC=[WC,zC,KC],QC=hr('<div class="nav__contacts"><a href="https://github.com/RustamIsroilov" target="_blank" rel="noopener"><img src="'+ut+'" alt="GitHub" class="nav__contacts_img"></a><a href="https://twitter.com/RustambekI39739" target="_blank" rel="noopener"><img src="'+fp+'" alt="Twitter" class="nav__contacts_img"></a><a href="https://www.instagram.com/rustambek7875/" target="_blank" rel="noopener"><img src="'+pp+'" alt="Instagram" class="nav__contacts_img"></a></div>',1),YC={__name:"Navbar",setup(t){const e=Nt(!1);return(n,s)=>{const r=sa("router-link");return Re(),Pe("nav",BC,[V("div",jC,[ge(r,{to:"/",class:"nav__brand",onClick:s[0]||(s[0]=i=>e.value=!1)},{default:wt(()=>[$C,HC]),_:1})]),V("button",{class:"nav__burger","aria-expanded":e.value,"aria-label":"Toggle menu",onClick:s[1]||(s[1]=i=>e.value=!e.value)},GC,8,qC),V("div",{class:ps(["nav__items",{"is-open":e.value}])},[ge(r,{to:"/",class:"nav__items_desc",onClick:s[2]||(s[2]=i=>e.value=!1)},{default:wt(()=>[pe("Home")]),_:1}),ge(r,{to:"/about",class:"nav__items_desc",onClick:s[3]||(s[3]=i=>e.value=!1)},{default:wt(()=>[pe("About")]),_:1}),ge(r,{to:"/stack",class:"nav__items_desc",onClick:s[4]||(s[4]=i=>e.value=!1)},{default:wt(()=>[pe("Tech Stack")]),_:1}),ge(r,{to:"/project",class:"nav__items_desc",onClick:s[5]||(s[5]=i=>e.value=!1)},{default:wt(()=>[pe("Projects")]),_:1}),ge(r,{to:"/achievements",class:"nav__items_desc",onClick:s[6]||(s[6]=i=>e.value=!1)},{default:wt(()=>[pe("Achievements")]),_:1}),ge(r,{to:"/contact",class:"nav__items_desc",onClick:s[7]||(s[7]=i=>e.value=!1)},{default:wt(()=>[pe("Contact")]),_:1})],2),QC])}}},JC={__name:"App",setup(t){return(e,n)=>{const s=sa("RouterView");return Re(),Pe("div",null,[ge(YC),ge(s)])}}};kv(JC).use(UC).mount("#app");
