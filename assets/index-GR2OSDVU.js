(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function Vc(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const Be={},Hs=[],Xt=()=>{},xm=()=>!1,ea=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Dc=t=>t.startsWith("onUpdate:"),ut=Object.assign,Nc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Lm=Object.prototype.hasOwnProperty,ke=(t,e)=>Lm.call(t,e),le=Array.isArray,qs=t=>Ei(t)==="[object Map]",ta=t=>Ei(t)==="[object Set]",kh=t=>Ei(t)==="[object Date]",_e=t=>typeof t=="function",et=t=>typeof t=="string",Yn=t=>typeof t=="symbol",Le=t=>t!==null&&typeof t=="object",$f=t=>(Le(t)||_e(t))&&_e(t.then)&&_e(t.catch),Hf=Object.prototype.toString,Ei=t=>Hf.call(t),Um=t=>Ei(t).slice(8,-1),qf=t=>Ei(t)==="[object Object]",Oc=t=>et(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ho=Vc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),na=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Fm=/-(\w)/g,rn=na(t=>t.replace(Fm,(e,n)=>n?n.toUpperCase():"")),Bm=/\B([A-Z])/g,dr=na(t=>t.replace(Bm,"-$1").toLowerCase()),sa=na(t=>t.charAt(0).toUpperCase()+t.slice(1)),Tl=na(t=>t?`on${sa(t)}`:""),Es=(t,e)=>!Object.is(t,e),fo=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ko=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},ql=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Vh;const Wl=()=>Vh||(Vh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ra(t){if(le(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=et(s)?qm(s):ra(s);if(r)for(const i in r)e[i]=r[i]}return e}else if(et(t)||Le(t))return t}const jm=/;(?![^(]*\))/g,$m=/:([^]+)/,Hm=/\/\*[^]*?\*\//g;function qm(t){const e={};return t.replace(Hm,"").split(jm).forEach(n=>{if(n){const s=n.split($m);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function on(t){let e="";if(et(t))e=t;else if(le(t))for(let n=0;n<t.length;n++){const s=on(t[n]);s&&(e+=s+" ")}else if(Le(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Wm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",zm=Vc(Wm);function Wf(t){return!!t||t===""}function Km(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=ia(t[s],e[s]);return n}function ia(t,e){if(t===e)return!0;let n=kh(t),s=kh(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Yn(t),s=Yn(e),n||s)return t===e;if(n=le(t),s=le(e),n||s)return n&&s?Km(t,e):!1;if(n=Le(t),s=Le(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const a in t){const l=t.hasOwnProperty(a),c=e.hasOwnProperty(a);if(l&&!c||!l&&c||!ia(t[a],e[a]))return!1}}return String(t)===String(e)}function zf(t,e){return t.findIndex(n=>ia(n,e))}const me=t=>et(t)?t:t==null?"":le(t)||Le(t)&&(t.toString===Hf||!_e(t.toString))?JSON.stringify(t,Kf,2):String(t),Kf=(t,e)=>e&&e.__v_isRef?Kf(t,e.value):qs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r],i)=>(n[Al(s,i)+" =>"]=r,n),{})}:ta(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Al(n))}:Yn(e)?Al(e):Le(e)&&!le(e)&&!qf(e)?String(e):e,Al=(t,e="")=>{var n;return Yn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};let $t;class Gm{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=$t,!e&&$t&&(this.index=($t.scopes||($t.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=$t;try{return $t=this,e()}finally{$t=n}}}on(){$t=this}off(){$t=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Qm(t,e=$t){e&&e.active&&e.effects.push(t)}function Zm(){return $t}const Mc=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Gf=t=>(t.w&Jn)>0,Qf=t=>(t.n&Jn)>0,Ym=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Jn},Jm=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];Gf(r)&&!Qf(r)?r.delete(t):e[n++]=r,r.w&=~Jn,r.n&=~Jn}e.length=n}},zl=new WeakMap;let Br=0,Jn=1;const Kl=30;let Ht;const _s=Symbol(""),Gl=Symbol("");class xc{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Qm(this,s)}run(){if(!this.active)return this.fn();let e=Ht,n=$n;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ht,Ht=this,$n=!0,Jn=1<<++Br,Br<=Kl?Ym(this):Dh(this),this.fn()}finally{Br<=Kl&&Jm(this),Jn=1<<--Br,Ht=this.parent,$n=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ht===this?this.deferStop=!0:this.active&&(Dh(this),this.onStop&&this.onStop(),this.active=!1)}}function Dh(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let $n=!0;const Zf=[];function fr(){Zf.push($n),$n=!1}function pr(){const t=Zf.pop();$n=t===void 0?!0:t}function St(t,e,n){if($n&&Ht){let s=zl.get(t);s||zl.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=Mc()),Yf(r)}}function Yf(t,e){let n=!1;Br<=Kl?Qf(t)||(t.n|=Jn,n=!Gf(t)):n=!t.has(Ht),n&&(t.add(Ht),Ht.deps.push(t))}function vn(t,e,n,s,r,i){const a=zl.get(t);if(!a)return;let l=[];if(e==="clear")l=[...a.values()];else if(n==="length"&&le(t)){const c=Number(s);a.forEach((h,f)=>{(f==="length"||!Yn(f)&&f>=c)&&l.push(h)})}else switch(n!==void 0&&l.push(a.get(n)),e){case"add":le(t)?Oc(n)&&l.push(a.get("length")):(l.push(a.get(_s)),qs(t)&&l.push(a.get(Gl)));break;case"delete":le(t)||(l.push(a.get(_s)),qs(t)&&l.push(a.get(Gl)));break;case"set":qs(t)&&l.push(a.get(_s));break}if(l.length===1)l[0]&&Ql(l[0]);else{const c=[];for(const h of l)h&&c.push(...h);Ql(Mc(c))}}function Ql(t,e){const n=le(t)?t:[...t];for(const s of n)s.computed&&Nh(s);for(const s of n)s.computed||Nh(s)}function Nh(t,e){(t!==Ht||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Xm=Vc("__proto__,__v_isRef,__isVue"),Jf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Yn)),Oh=e_();function e_(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=Ne(this);for(let i=0,a=this.length;i<a;i++)St(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(Ne)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){fr();const s=Ne(this)[e].apply(this,n);return pr(),s}}),t}function t_(t){const e=Ne(this);return St(e,"has",t),e.hasOwnProperty(t)}class Xf{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,s){const r=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?p_:sp:i?np:tp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const a=le(e);if(!r){if(a&&ke(Oh,n))return Reflect.get(Oh,n,s);if(n==="hasOwnProperty")return t_}const l=Reflect.get(e,n,s);return(Yn(n)?Jf.has(n):Xm(n))||(r||St(e,"get",n),i)?l:Et(l)?a&&Oc(n)?l:l.value:Le(l)?r?ip(l):wi(l):l}}class ep extends Xf{constructor(e=!1){super(!1,e)}set(e,n,s,r){let i=e[n];if(Js(i)&&Et(i)&&!Et(s))return!1;if(!this._shallow&&(!Vo(s)&&!Js(s)&&(i=Ne(i),s=Ne(s)),!le(e)&&Et(i)&&!Et(s)))return i.value=s,!0;const a=le(e)&&Oc(n)?Number(n)<e.length:ke(e,n),l=Reflect.set(e,n,s,r);return e===Ne(r)&&(a?Es(s,i)&&vn(e,"set",n,s):vn(e,"add",n,s)),l}deleteProperty(e,n){const s=ke(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&s&&vn(e,"delete",n,void 0),r}has(e,n){const s=Reflect.has(e,n);return(!Yn(n)||!Jf.has(n))&&St(e,"has",n),s}ownKeys(e){return St(e,"iterate",le(e)?"length":_s),Reflect.ownKeys(e)}}class n_ extends Xf{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const s_=new ep,r_=new n_,i_=new ep(!0),Lc=t=>t,oa=t=>Reflect.getPrototypeOf(t);function eo(t,e,n=!1,s=!1){t=t.__v_raw;const r=Ne(t),i=Ne(e);n||(Es(e,i)&&St(r,"get",e),St(r,"get",i));const{has:a}=oa(r),l=s?Lc:n?Bc:si;if(a.call(r,e))return l(t.get(e));if(a.call(r,i))return l(t.get(i));t!==r&&t.get(e)}function to(t,e=!1){const n=this.__v_raw,s=Ne(n),r=Ne(t);return e||(Es(t,r)&&St(s,"has",t),St(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function no(t,e=!1){return t=t.__v_raw,!e&&St(Ne(t),"iterate",_s),Reflect.get(t,"size",t)}function Mh(t){t=Ne(t);const e=Ne(this);return oa(e).has.call(e,t)||(e.add(t),vn(e,"add",t,t)),this}function xh(t,e){e=Ne(e);const n=Ne(this),{has:s,get:r}=oa(n);let i=s.call(n,t);i||(t=Ne(t),i=s.call(n,t));const a=r.call(n,t);return n.set(t,e),i?Es(e,a)&&vn(n,"set",t,e):vn(n,"add",t,e),this}function Lh(t){const e=Ne(this),{has:n,get:s}=oa(e);let r=n.call(e,t);r||(t=Ne(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&vn(e,"delete",t,void 0),i}function Uh(){const t=Ne(this),e=t.size!==0,n=t.clear();return e&&vn(t,"clear",void 0,void 0),n}function so(t,e){return function(s,r){const i=this,a=i.__v_raw,l=Ne(a),c=e?Lc:t?Bc:si;return!t&&St(l,"iterate",_s),a.forEach((h,f)=>s.call(r,c(h),c(f),i))}}function ro(t,e,n){return function(...s){const r=this.__v_raw,i=Ne(r),a=qs(i),l=t==="entries"||t===Symbol.iterator&&a,c=t==="keys"&&a,h=r[t](...s),f=n?Lc:e?Bc:si;return!e&&St(i,"iterate",c?Gl:_s),{next(){const{value:g,done:p}=h.next();return p?{value:g,done:p}:{value:l?[f(g[0]),f(g[1])]:f(g),done:p}},[Symbol.iterator](){return this}}}}function Dn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function o_(){const t={get(i){return eo(this,i)},get size(){return no(this)},has:to,add:Mh,set:xh,delete:Lh,clear:Uh,forEach:so(!1,!1)},e={get(i){return eo(this,i,!1,!0)},get size(){return no(this)},has:to,add:Mh,set:xh,delete:Lh,clear:Uh,forEach:so(!1,!0)},n={get(i){return eo(this,i,!0)},get size(){return no(this,!0)},has(i){return to.call(this,i,!0)},add:Dn("add"),set:Dn("set"),delete:Dn("delete"),clear:Dn("clear"),forEach:so(!0,!1)},s={get(i){return eo(this,i,!0,!0)},get size(){return no(this,!0)},has(i){return to.call(this,i,!0)},add:Dn("add"),set:Dn("set"),delete:Dn("delete"),clear:Dn("clear"),forEach:so(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=ro(i,!1,!1),n[i]=ro(i,!0,!1),e[i]=ro(i,!1,!0),s[i]=ro(i,!0,!0)}),[t,n,e,s]}const[a_,l_,c_,u_]=o_();function Uc(t,e){const n=e?t?u_:c_:t?l_:a_;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(ke(n,r)&&r in s?n:s,r,i)}const h_={get:Uc(!1,!1)},d_={get:Uc(!1,!0)},f_={get:Uc(!0,!1)},tp=new WeakMap,np=new WeakMap,sp=new WeakMap,p_=new WeakMap;function g_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function m_(t){return t.__v_skip||!Object.isExtensible(t)?0:g_(Um(t))}function wi(t){return Js(t)?t:Fc(t,!1,s_,h_,tp)}function rp(t){return Fc(t,!1,i_,d_,np)}function ip(t){return Fc(t,!0,r_,f_,sp)}function Fc(t,e,n,s,r){if(!Le(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const a=m_(t);if(a===0)return t;const l=new Proxy(t,a===2?s:n);return r.set(t,l),l}function Ws(t){return Js(t)?Ws(t.__v_raw):!!(t&&t.__v_isReactive)}function Js(t){return!!(t&&t.__v_isReadonly)}function Vo(t){return!!(t&&t.__v_isShallow)}function op(t){return Ws(t)||Js(t)}function Ne(t){const e=t&&t.__v_raw;return e?Ne(e):t}function ap(t){return ko(t,"__v_skip",!0),t}const si=t=>Le(t)?wi(t):t,Bc=t=>Le(t)?ip(t):t;function lp(t){$n&&Ht&&(t=Ne(t),Yf(t.dep||(t.dep=Mc())))}function cp(t,e){t=Ne(t);const n=t.dep;n&&Ql(n)}function Et(t){return!!(t&&t.__v_isRef===!0)}function mt(t){return up(t,!1)}function __(t){return up(t,!0)}function up(t,e){return Et(t)?t:new y_(t,e)}class y_{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Ne(e),this._value=n?e:si(e)}get value(){return lp(this),this._value}set value(e){const n=this.__v_isShallow||Vo(e)||Js(e);e=n?e:Ne(e),Es(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:si(e),cp(this))}}function Ye(t){return Et(t)?t.value:t}const v_={get:(t,e,n)=>Ye(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Et(r)&&!Et(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function hp(t){return Ws(t)?t:new Proxy(t,v_)}class E_{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new xc(e,()=>{this._dirty||(this._dirty=!0,cp(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=Ne(this);return lp(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function w_(t,e,n=!1){let s,r;const i=_e(t);return i?(s=t,r=Xt):(s=t.get,r=t.set),new E_(s,r,i||!r,n)}function Hn(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){aa(i,e,n)}return r}function zt(t,e,n,s){if(_e(t)){const i=Hn(t,e,n,s);return i&&$f(i)&&i.catch(a=>{aa(a,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(zt(t[i],e,n,s));return r}function aa(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const a=e.proxy,l=n;for(;i;){const h=i.ec;if(h){for(let f=0;f<h.length;f++)if(h[f](t,a,l)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Hn(c,null,10,[t,a,l]);return}}I_(t,n,r,s)}function I_(t,e,n,s=!0){console.error(t)}let ri=!1,Zl=!1;const vt=[];let Jt=0;const zs=[];let fn=null,hs=0;const dp=Promise.resolve();let jc=null;function fp(t){const e=jc||dp;return t?e.then(this?t.bind(this):t):e}function T_(t){let e=Jt+1,n=vt.length;for(;e<n;){const s=e+n>>>1,r=vt[s],i=ii(r);i<t||i===t&&r.pre?e=s+1:n=s}return e}function $c(t){(!vt.length||!vt.includes(t,ri&&t.allowRecurse?Jt+1:Jt))&&(t.id==null?vt.push(t):vt.splice(T_(t.id),0,t),pp())}function pp(){!ri&&!Zl&&(Zl=!0,jc=dp.then(mp))}function A_(t){const e=vt.indexOf(t);e>Jt&&vt.splice(e,1)}function b_(t){le(t)?zs.push(...t):(!fn||!fn.includes(t,t.allowRecurse?hs+1:hs))&&zs.push(t),pp()}function Fh(t,e,n=ri?Jt+1:0){for(;n<vt.length;n++){const s=vt[n];if(s&&s.pre){if(t&&s.id!==t.uid)continue;vt.splice(n,1),n--,s()}}}function gp(t){if(zs.length){const e=[...new Set(zs)];if(zs.length=0,fn){fn.push(...e);return}for(fn=e,fn.sort((n,s)=>ii(n)-ii(s)),hs=0;hs<fn.length;hs++)fn[hs]();fn=null,hs=0}}const ii=t=>t.id==null?1/0:t.id,C_=(t,e)=>{const n=ii(t)-ii(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function mp(t){Zl=!1,ri=!0,vt.sort(C_);try{for(Jt=0;Jt<vt.length;Jt++){const e=vt[Jt];e&&e.active!==!1&&Hn(e,null,14)}}finally{Jt=0,vt.length=0,gp(),ri=!1,jc=null,(vt.length||zs.length)&&mp()}}function R_(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Be;let r=n;const i=e.startsWith("update:"),a=i&&e.slice(7);if(a&&a in s){const f=`${a==="modelValue"?"model":a}Modifiers`,{number:g,trim:p}=s[f]||Be;p&&(r=n.map(C=>et(C)?C.trim():C)),g&&(r=n.map(ql))}let l,c=s[l=Tl(e)]||s[l=Tl(rn(e))];!c&&i&&(c=s[l=Tl(dr(e))]),c&&zt(c,t,6,r);const h=s[l+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,zt(h,t,6,r)}}function _p(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let a={},l=!1;if(!_e(t)){const c=h=>{const f=_p(h,e,!0);f&&(l=!0,ut(a,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(Le(t)&&s.set(t,null),null):(le(i)?i.forEach(c=>a[c]=null):ut(a,i),Le(t)&&s.set(t,a),a)}function la(t,e){return!t||!ea(e)?!1:(e=e.slice(2).replace(/Once$/,""),ke(t,e[0].toLowerCase()+e.slice(1))||ke(t,dr(e))||ke(t,e))}let Lt=null,ca=null;function Do(t){const e=Lt;return Lt=t,ca=t&&t.type.__scopeId||null,e}function Ii(t){ca=t}function Ti(){ca=null}function At(t,e=Lt,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Zh(-1);const i=Do(e);let a;try{a=t(...r)}finally{Do(i),s._d&&Zh(1)}return a};return s._n=!0,s._c=!0,s._d=!0,s}function bl(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[a],slots:l,attrs:c,emit:h,render:f,renderCache:g,data:p,setupState:C,ctx:V,inheritAttrs:M}=t;let N,j;const H=Do(t);try{if(n.shapeFlag&4){const Q=r||s,Pe=Q;N=Yt(f.call(Pe,Q,g,i,C,p,V)),j=c}else{const Q=e;N=Yt(Q.length>1?Q(i,{attrs:c,slots:l,emit:h}):Q(i,null)),j=e.props?c:P_(c)}}catch(Q){Qr.length=0,aa(Q,t,1),N=Ie(ws)}let X=N;if(j&&M!==!1){const Q=Object.keys(j),{shapeFlag:Pe}=X;Q.length&&Pe&7&&(a&&Q.some(Dc)&&(j=S_(j,a)),X=Xs(X,j))}return n.dirs&&(X=Xs(X),X.dirs=X.dirs?X.dirs.concat(n.dirs):n.dirs),n.transition&&(X.transition=n.transition),N=X,Do(H),N}const P_=t=>{let e;for(const n in t)(n==="class"||n==="style"||ea(n))&&((e||(e={}))[n]=t[n]);return e},S_=(t,e)=>{const n={};for(const s in t)(!Dc(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function k_(t,e,n){const{props:s,children:r,component:i}=t,{props:a,children:l,patchFlag:c}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Bh(s,a,h):!!a;if(c&8){const f=e.dynamicProps;for(let g=0;g<f.length;g++){const p=f[g];if(a[p]!==s[p]&&!la(h,p))return!0}}}else return(r||l)&&(!l||!l.$stable)?!0:s===a?!1:s?a?Bh(s,a,h):!0:!!a;return!1}function Bh(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!la(n,i))return!0}return!1}function V_({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const yp="components";function ua(t,e){return N_(yp,t,!0,e)||t}const D_=Symbol.for("v-ndc");function N_(t,e,n=!0,s=!1){const r=Lt||at;if(r){const i=r.type;if(t===yp){const l=b2(i,!1);if(l&&(l===e||l===rn(e)||l===sa(rn(e))))return i}const a=jh(r[t]||i[t],e)||jh(r.appContext[t],e);return!a&&s?i:a}}function jh(t,e){return t&&(t[e]||t[rn(e)]||t[sa(rn(e))])}const O_=t=>t.__isSuspense;function M_(t,e){e&&e.pendingBranch?le(t)?e.effects.push(...t):e.effects.push(t):b_(t)}const io={};function po(t,e,n){return vp(t,e,n)}function vp(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:a}=Be){var l;const c=Zm()===((l=at)==null?void 0:l.scope)?at:null;let h,f=!1,g=!1;if(Et(t)?(h=()=>t.value,f=Vo(t)):Ws(t)?(h=()=>t,s=!0):le(t)?(g=!0,f=t.some(Q=>Ws(Q)||Vo(Q)),h=()=>t.map(Q=>{if(Et(Q))return Q.value;if(Ws(Q))return ps(Q);if(_e(Q))return Hn(Q,c,2)})):_e(t)?e?h=()=>Hn(t,c,2):h=()=>{if(!(c&&c.isUnmounted))return p&&p(),zt(t,c,3,[C])}:h=Xt,e&&s){const Q=h;h=()=>ps(Q())}let p,C=Q=>{p=H.onStop=()=>{Hn(Q,c,4),p=H.onStop=void 0}},V;if(ai)if(C=Xt,e?n&&zt(e,c,3,[h(),g?[]:void 0,C]):h(),r==="sync"){const Q=P2();V=Q.__watcherHandles||(Q.__watcherHandles=[])}else return Xt;let M=g?new Array(t.length).fill(io):io;const N=()=>{if(H.active)if(e){const Q=H.run();(s||f||(g?Q.some((Pe,ve)=>Es(Pe,M[ve])):Es(Q,M)))&&(p&&p(),zt(e,c,3,[Q,M===io?void 0:g&&M[0]===io?[]:M,C]),M=Q)}else H.run()};N.allowRecurse=!!e;let j;r==="sync"?j=N:r==="post"?j=()=>Pt(N,c&&c.suspense):(N.pre=!0,c&&(N.id=c.uid),j=()=>$c(N));const H=new xc(h,j);e?n?N():M=H.run():r==="post"?Pt(H.run.bind(H),c&&c.suspense):H.run();const X=()=>{H.stop(),c&&c.scope&&Nc(c.scope.effects,H)};return V&&V.push(X),X}function x_(t,e,n){const s=this.proxy,r=et(t)?t.includes(".")?Ep(s,t):()=>s[t]:t.bind(s,s);let i;_e(e)?i=e:(i=e.handler,n=e);const a=at;er(this);const l=vp(r,i.bind(s),n);return a?er(a):ys(),l}function Ep(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function ps(t,e){if(!Le(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Et(t))ps(t.value,e);else if(le(t))for(let n=0;n<t.length;n++)ps(t[n],e);else if(ta(t)||qs(t))t.forEach(n=>{ps(n,e)});else if(qf(t))for(const n in t)ps(t[n],e);return t}function oe(t,e){const n=Lt;if(n===null)return t;const s=ga(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[a,l,c,h=Be]=e[i];a&&(_e(a)&&(a={mounted:a,updated:a}),a.deep&&ps(l),r.push({dir:a,instance:s,value:l,oldValue:void 0,arg:c,modifiers:h}))}return t}function ls(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let a=0;a<r.length;a++){const l=r[a];i&&(l.oldValue=i[a].value);let c=l.dir[s];c&&(fr(),zt(c,n,8,[t.el,l,t,e]),pr())}}/*! #__NO_SIDE_EFFECTS__ */function wp(t,e){return _e(t)?ut({name:t.name},e,{setup:t}):t}const go=t=>!!t.type.__asyncLoader,Ip=t=>t.type.__isKeepAlive;function L_(t,e){Tp(t,"a",e)}function U_(t,e){Tp(t,"da",e)}function Tp(t,e,n=at){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(ha(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Ip(r.parent.vnode)&&F_(s,e,n,r),r=r.parent}}function F_(t,e,n,s){const r=ha(e,t,s,!0);da(()=>{Nc(s[e],r)},n)}function ha(t,e,n=at,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...a)=>{if(n.isUnmounted)return;fr(),er(n);const l=zt(e,n,t,a);return ys(),pr(),l});return s?r.unshift(i):r.push(i),i}}const Cn=t=>(e,n=at)=>(!ai||t==="sp")&&ha(t,(...s)=>e(...s),n),B_=Cn("bm"),Hc=Cn("m"),j_=Cn("bu"),$_=Cn("u"),H_=Cn("bum"),da=Cn("um"),q_=Cn("sp"),W_=Cn("rtg"),z_=Cn("rtc");function K_(t,e=at){ha("ec",t,e)}function Ze(t,e,n,s){let r;const i=n&&n[s];if(le(t)||et(t)){r=new Array(t.length);for(let a=0,l=t.length;a<l;a++)r[a]=e(t[a],a,void 0,i&&i[a])}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,i&&i[a])}else if(Le(t))if(t[Symbol.iterator])r=Array.from(t,(a,l)=>e(a,l,void 0,i&&i[l]));else{const a=Object.keys(t);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const h=a[l];r[l]=e(t[h],h,l,i&&i[l])}}else r=[];return n&&(n[s]=r),r}const Yl=t=>t?Op(t)?ga(t)||t.proxy:Yl(t.parent):null,Gr=ut(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Yl(t.parent),$root:t=>Yl(t.root),$emit:t=>t.emit,$options:t=>qc(t),$forceUpdate:t=>t.f||(t.f=()=>$c(t.update)),$nextTick:t=>t.n||(t.n=fp.bind(t.proxy)),$watch:t=>x_.bind(t)}),Cl=(t,e)=>t!==Be&&!t.__isScriptSetup&&ke(t,e),G_={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:a,type:l,appContext:c}=t;let h;if(e[0]!=="$"){const C=a[e];if(C!==void 0)switch(C){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(Cl(s,e))return a[e]=1,s[e];if(r!==Be&&ke(r,e))return a[e]=2,r[e];if((h=t.propsOptions[0])&&ke(h,e))return a[e]=3,i[e];if(n!==Be&&ke(n,e))return a[e]=4,n[e];Jl&&(a[e]=0)}}const f=Gr[e];let g,p;if(f)return e==="$attrs"&&St(t,"get",e),f(t);if((g=l.__cssModules)&&(g=g[e]))return g;if(n!==Be&&ke(n,e))return a[e]=4,n[e];if(p=c.config.globalProperties,ke(p,e))return p[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return Cl(r,e)?(r[e]=n,!0):s!==Be&&ke(s,e)?(s[e]=n,!0):ke(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},a){let l;return!!n[a]||t!==Be&&ke(t,a)||Cl(e,a)||(l=i[0])&&ke(l,a)||ke(s,a)||ke(Gr,a)||ke(r.config.globalProperties,a)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ke(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function $h(t){return le(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Jl=!0;function Q_(t){const e=qc(t),n=t.proxy,s=t.ctx;Jl=!1,e.beforeCreate&&Hh(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:a,watch:l,provide:c,inject:h,created:f,beforeMount:g,mounted:p,beforeUpdate:C,updated:V,activated:M,deactivated:N,beforeDestroy:j,beforeUnmount:H,destroyed:X,unmounted:Q,render:Pe,renderTracked:ve,renderTriggered:R,errorCaptured:I,serverPrefetch:w,expose:E,inheritAttrs:_,components:b,directives:y,filters:rt}=e;if(h&&Z_(h,s,null),a)for(const Se in a){const Te=a[Se];_e(Te)&&(s[Se]=Te.bind(n))}if(r){const Se=r.call(n,n);Le(Se)&&(t.data=wi(Se))}if(Jl=!0,i)for(const Se in i){const Te=i[Se],Vt=_e(Te)?Te.bind(n,n):_e(Te.get)?Te.get.bind(n,n):Xt,Ut=!_e(Te)&&_e(Te.set)?Te.set.bind(n):Xt,Mt=st({get:Vt,set:Ut});Object.defineProperty(s,Se,{enumerable:!0,configurable:!0,get:()=>Mt.value,set:je=>Mt.value=je})}if(l)for(const Se in l)Ap(l[Se],s,n,Se);if(c){const Se=_e(c)?c.call(n):c;Reflect.ownKeys(Se).forEach(Te=>{mo(Te,Se[Te])})}f&&Hh(f,t,"c");function Ge(Se,Te){le(Te)?Te.forEach(Vt=>Se(Vt.bind(n))):Te&&Se(Te.bind(n))}if(Ge(B_,g),Ge(Hc,p),Ge(j_,C),Ge($_,V),Ge(L_,M),Ge(U_,N),Ge(K_,I),Ge(z_,ve),Ge(W_,R),Ge(H_,H),Ge(da,Q),Ge(q_,w),le(E))if(E.length){const Se=t.exposed||(t.exposed={});E.forEach(Te=>{Object.defineProperty(Se,Te,{get:()=>n[Te],set:Vt=>n[Te]=Vt})})}else t.exposed||(t.exposed={});Pe&&t.render===Xt&&(t.render=Pe),_!=null&&(t.inheritAttrs=_),b&&(t.components=b),y&&(t.directives=y)}function Z_(t,e,n=Xt){le(t)&&(t=Xl(t));for(const s in t){const r=t[s];let i;Le(r)?"default"in r?i=En(r.from||s,r.default,!0):i=En(r.from||s):i=En(r),Et(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[s]=i}}function Hh(t,e,n){zt(le(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ap(t,e,n,s){const r=s.includes(".")?Ep(n,s):()=>n[s];if(et(t)){const i=e[t];_e(i)&&po(r,i)}else if(_e(t))po(r,t.bind(n));else if(Le(t))if(le(t))t.forEach(i=>Ap(i,e,n,s));else{const i=_e(t.handler)?t.handler.bind(n):e[t.handler];_e(i)&&po(r,i,t)}}function qc(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:a}}=t.appContext,l=i.get(e);let c;return l?c=l:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(h=>No(c,h,a,!0)),No(c,e,a)),Le(e)&&i.set(e,c),c}function No(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&No(t,i,n,!0),r&&r.forEach(a=>No(t,a,n,!0));for(const a in e)if(!(s&&a==="expose")){const l=Y_[a]||n&&n[a];t[a]=l?l(t[a],e[a]):e[a]}return t}const Y_={data:qh,props:Wh,emits:Wh,methods:jr,computed:jr,beforeCreate:Tt,created:Tt,beforeMount:Tt,mounted:Tt,beforeUpdate:Tt,updated:Tt,beforeDestroy:Tt,beforeUnmount:Tt,destroyed:Tt,unmounted:Tt,activated:Tt,deactivated:Tt,errorCaptured:Tt,serverPrefetch:Tt,components:jr,directives:jr,watch:X_,provide:qh,inject:J_};function qh(t,e){return e?t?function(){return ut(_e(t)?t.call(this,this):t,_e(e)?e.call(this,this):e)}:e:t}function J_(t,e){return jr(Xl(t),Xl(e))}function Xl(t){if(le(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Tt(t,e){return t?[...new Set([].concat(t,e))]:e}function jr(t,e){return t?ut(Object.create(null),t,e):e}function Wh(t,e){return t?le(t)&&le(e)?[...new Set([...t,...e])]:ut(Object.create(null),$h(t),$h(e??{})):e}function X_(t,e){if(!t)return e;if(!e)return t;const n=ut(Object.create(null),t);for(const s in e)n[s]=Tt(t[s],e[s]);return n}function bp(){return{app:null,config:{isNativeTag:xm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let e2=0;function t2(t,e){return function(s,r=null){_e(s)||(s=ut({},s)),r!=null&&!Le(r)&&(r=null);const i=bp(),a=new WeakSet;let l=!1;const c=i.app={_uid:e2++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:S2,get config(){return i.config},set config(h){},use(h,...f){return a.has(h)||(h&&_e(h.install)?(a.add(h),h.install(c,...f)):_e(h)&&(a.add(h),h(c,...f))),c},mixin(h){return i.mixins.includes(h)||i.mixins.push(h),c},component(h,f){return f?(i.components[h]=f,c):i.components[h]},directive(h,f){return f?(i.directives[h]=f,c):i.directives[h]},mount(h,f,g){if(!l){const p=Ie(s,r);return p.appContext=i,f&&e?e(p,h):t(p,h,g),l=!0,c._container=h,h.__vue_app__=c,ga(p.component)||p.component.proxy}},unmount(){l&&(t(null,c._container),delete c._container.__vue_app__)},provide(h,f){return i.provides[h]=f,c},runWithContext(h){Oo=c;try{return h()}finally{Oo=null}}};return c}}let Oo=null;function mo(t,e){if(at){let n=at.provides;const s=at.parent&&at.parent.provides;s===n&&(n=at.provides=Object.create(s)),n[t]=e}}function En(t,e,n=!1){const s=at||Lt;if(s||Oo){const r=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:Oo._context.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&_e(e)?e.call(s&&s.proxy):e}}function n2(t,e,n,s=!1){const r={},i={};ko(i,pa,1),t.propsDefaults=Object.create(null),Cp(t,e,r,i);for(const a in t.propsOptions[0])a in r||(r[a]=void 0);n?t.props=s?r:rp(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function s2(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:a}}=t,l=Ne(r),[c]=t.propsOptions;let h=!1;if((s||a>0)&&!(a&16)){if(a&8){const f=t.vnode.dynamicProps;for(let g=0;g<f.length;g++){let p=f[g];if(la(t.emitsOptions,p))continue;const C=e[p];if(c)if(ke(i,p))C!==i[p]&&(i[p]=C,h=!0);else{const V=rn(p);r[V]=ec(c,l,V,C,t,!1)}else C!==i[p]&&(i[p]=C,h=!0)}}}else{Cp(t,e,r,i)&&(h=!0);let f;for(const g in l)(!e||!ke(e,g)&&((f=dr(g))===g||!ke(e,f)))&&(c?n&&(n[g]!==void 0||n[f]!==void 0)&&(r[g]=ec(c,l,g,void 0,t,!0)):delete r[g]);if(i!==l)for(const g in i)(!e||!ke(e,g))&&(delete i[g],h=!0)}h&&vn(t,"set","$attrs")}function Cp(t,e,n,s){const[r,i]=t.propsOptions;let a=!1,l;if(e)for(let c in e){if(ho(c))continue;const h=e[c];let f;r&&ke(r,f=rn(c))?!i||!i.includes(f)?n[f]=h:(l||(l={}))[f]=h:la(t.emitsOptions,c)||(!(c in s)||h!==s[c])&&(s[c]=h,a=!0)}if(i){const c=Ne(n),h=l||Be;for(let f=0;f<i.length;f++){const g=i[f];n[g]=ec(r,c,g,h[g],t,!ke(h,g))}}return a}function ec(t,e,n,s,r,i){const a=t[n];if(a!=null){const l=ke(a,"default");if(l&&s===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&_e(c)){const{propsDefaults:h}=r;n in h?s=h[n]:(er(r),s=h[n]=c.call(null,e),ys())}else s=c}a[0]&&(i&&!l?s=!1:a[1]&&(s===""||s===dr(n))&&(s=!0))}return s}function Rp(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,a={},l=[];let c=!1;if(!_e(t)){const f=g=>{c=!0;const[p,C]=Rp(g,e,!0);ut(a,p),C&&l.push(...C)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return Le(t)&&s.set(t,Hs),Hs;if(le(i))for(let f=0;f<i.length;f++){const g=rn(i[f]);zh(g)&&(a[g]=Be)}else if(i)for(const f in i){const g=rn(f);if(zh(g)){const p=i[f],C=a[g]=le(p)||_e(p)?{type:p}:ut({},p);if(C){const V=Qh(Boolean,C.type),M=Qh(String,C.type);C[0]=V>-1,C[1]=M<0||V<M,(V>-1||ke(C,"default"))&&l.push(g)}}}const h=[a,l];return Le(t)&&s.set(t,h),h}function zh(t){return t[0]!=="$"}function Kh(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Gh(t,e){return Kh(t)===Kh(e)}function Qh(t,e){return le(e)?e.findIndex(n=>Gh(n,t)):_e(e)&&Gh(e,t)?0:-1}const Pp=t=>t[0]==="_"||t==="$stable",Wc=t=>le(t)?t.map(Yt):[Yt(t)],r2=(t,e,n)=>{if(e._n)return e;const s=At((...r)=>Wc(e(...r)),n);return s._c=!1,s},Sp=(t,e,n)=>{const s=t._ctx;for(const r in t){if(Pp(r))continue;const i=t[r];if(_e(i))e[r]=r2(r,i,s);else if(i!=null){const a=Wc(i);e[r]=()=>a}}},kp=(t,e)=>{const n=Wc(e);t.slots.default=()=>n},i2=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Ne(e),ko(e,"_",n)):Sp(e,t.slots={})}else t.slots={},e&&kp(t,e);ko(t.slots,pa,1)},o2=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,a=Be;if(s.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:(ut(r,e),!n&&l===1&&delete r._):(i=!e.$stable,Sp(e,r)),a=e}else e&&(kp(t,e),a={default:1});if(i)for(const l in r)!Pp(l)&&a[l]==null&&delete r[l]};function tc(t,e,n,s,r=!1){if(le(t)){t.forEach((p,C)=>tc(p,e&&(le(e)?e[C]:e),n,s,r));return}if(go(s)&&!r)return;const i=s.shapeFlag&4?ga(s.component)||s.component.proxy:s.el,a=r?null:i,{i:l,r:c}=t,h=e&&e.r,f=l.refs===Be?l.refs={}:l.refs,g=l.setupState;if(h!=null&&h!==c&&(et(h)?(f[h]=null,ke(g,h)&&(g[h]=null)):Et(h)&&(h.value=null)),_e(c))Hn(c,l,12,[a,f]);else{const p=et(c),C=Et(c);if(p||C){const V=()=>{if(t.f){const M=p?ke(g,c)?g[c]:f[c]:c.value;r?le(M)&&Nc(M,i):le(M)?M.includes(i)||M.push(i):p?(f[c]=[i],ke(g,c)&&(g[c]=f[c])):(c.value=[i],t.k&&(f[t.k]=c.value))}else p?(f[c]=a,ke(g,c)&&(g[c]=a)):C&&(c.value=a,t.k&&(f[t.k]=a))};a?(V.id=-1,Pt(V,n)):V()}}}const Pt=M_;function a2(t){return l2(t)}function l2(t,e){const n=Wl();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:a,createText:l,createComment:c,setText:h,setElementText:f,parentNode:g,nextSibling:p,setScopeId:C=Xt,insertStaticContent:V}=t,M=(T,A,S,D=null,x=null,L=null,Z=!1,$=null,W=!!A.dynamicChildren)=>{if(T===A)return;T&&!xr(T,A)&&(D=O(T),je(T,x,L,!0),T=null),A.patchFlag===-2&&(W=!1,A.dynamicChildren=null);const{type:F,ref:re,shapeFlag:ee}=A;switch(F){case fa:N(T,A,S,D);break;case ws:j(T,A,S,D);break;case _o:T==null&&H(A,S,D,Z);break;case ye:b(T,A,S,D,x,L,Z,$,W);break;default:ee&1?Pe(T,A,S,D,x,L,Z,$,W):ee&6?y(T,A,S,D,x,L,Z,$,W):(ee&64||ee&128)&&F.process(T,A,S,D,x,L,Z,$,W,z)}re!=null&&x&&tc(re,T&&T.ref,L,A||T,!A)},N=(T,A,S,D)=>{if(T==null)s(A.el=l(A.children),S,D);else{const x=A.el=T.el;A.children!==T.children&&h(x,A.children)}},j=(T,A,S,D)=>{T==null?s(A.el=c(A.children||""),S,D):A.el=T.el},H=(T,A,S,D)=>{[T.el,T.anchor]=V(T.children,A,S,D,T.el,T.anchor)},X=({el:T,anchor:A},S,D)=>{let x;for(;T&&T!==A;)x=p(T),s(T,S,D),T=x;s(A,S,D)},Q=({el:T,anchor:A})=>{let S;for(;T&&T!==A;)S=p(T),r(T),T=S;r(A)},Pe=(T,A,S,D,x,L,Z,$,W)=>{Z=Z||A.type==="svg",T==null?ve(A,S,D,x,L,Z,$,W):w(T,A,x,L,Z,$,W)},ve=(T,A,S,D,x,L,Z,$)=>{let W,F;const{type:re,props:ee,shapeFlag:se,transition:ue,dirs:Ee}=T;if(W=T.el=a(T.type,L,ee&&ee.is,ee),se&8?f(W,T.children):se&16&&I(T.children,W,null,D,x,L&&re!=="foreignObject",Z,$),Ee&&ls(T,null,D,"created"),R(W,T,T.scopeId,Z,D),ee){for(const de in ee)de!=="value"&&!ho(de)&&i(W,de,null,ee[de],L,T.children,D,x,tt);"value"in ee&&i(W,"value",null,ee.value),(F=ee.onVnodeBeforeMount)&&Zt(F,D,T)}Ee&&ls(T,null,D,"beforeMount");const ge=c2(x,ue);ge&&ue.beforeEnter(W),s(W,A,S),((F=ee&&ee.onVnodeMounted)||ge||Ee)&&Pt(()=>{F&&Zt(F,D,T),ge&&ue.enter(W),Ee&&ls(T,null,D,"mounted")},x)},R=(T,A,S,D,x)=>{if(S&&C(T,S),D)for(let L=0;L<D.length;L++)C(T,D[L]);if(x){let L=x.subTree;if(A===L){const Z=x.vnode;R(T,Z,Z.scopeId,Z.slotScopeIds,x.parent)}}},I=(T,A,S,D,x,L,Z,$,W=0)=>{for(let F=W;F<T.length;F++){const re=T[F]=$?Mn(T[F]):Yt(T[F]);M(null,re,A,S,D,x,L,Z,$)}},w=(T,A,S,D,x,L,Z)=>{const $=A.el=T.el;let{patchFlag:W,dynamicChildren:F,dirs:re}=A;W|=T.patchFlag&16;const ee=T.props||Be,se=A.props||Be;let ue;S&&cs(S,!1),(ue=se.onVnodeBeforeUpdate)&&Zt(ue,S,A,T),re&&ls(A,T,S,"beforeUpdate"),S&&cs(S,!0);const Ee=x&&A.type!=="foreignObject";if(F?E(T.dynamicChildren,F,$,S,D,Ee,L):Z||Te(T,A,$,null,S,D,Ee,L,!1),W>0){if(W&16)_($,A,ee,se,S,D,x);else if(W&2&&ee.class!==se.class&&i($,"class",null,se.class,x),W&4&&i($,"style",ee.style,se.style,x),W&8){const ge=A.dynamicProps;for(let de=0;de<ge.length;de++){const Ue=ge[de],Ct=ee[Ue],cn=se[Ue];(cn!==Ct||Ue==="value")&&i($,Ue,Ct,cn,x,T.children,S,D,tt)}}W&1&&T.children!==A.children&&f($,A.children)}else!Z&&F==null&&_($,A,ee,se,S,D,x);((ue=se.onVnodeUpdated)||re)&&Pt(()=>{ue&&Zt(ue,S,A,T),re&&ls(A,T,S,"updated")},D)},E=(T,A,S,D,x,L,Z)=>{for(let $=0;$<A.length;$++){const W=T[$],F=A[$],re=W.el&&(W.type===ye||!xr(W,F)||W.shapeFlag&70)?g(W.el):S;M(W,F,re,null,D,x,L,Z,!0)}},_=(T,A,S,D,x,L,Z)=>{if(S!==D){if(S!==Be)for(const $ in S)!ho($)&&!($ in D)&&i(T,$,S[$],null,Z,A.children,x,L,tt);for(const $ in D){if(ho($))continue;const W=D[$],F=S[$];W!==F&&$!=="value"&&i(T,$,F,W,Z,A.children,x,L,tt)}"value"in D&&i(T,"value",S.value,D.value)}},b=(T,A,S,D,x,L,Z,$,W)=>{const F=A.el=T?T.el:l(""),re=A.anchor=T?T.anchor:l("");let{patchFlag:ee,dynamicChildren:se,slotScopeIds:ue}=A;ue&&($=$?$.concat(ue):ue),T==null?(s(F,S,D),s(re,S,D),I(A.children,S,re,x,L,Z,$,W)):ee>0&&ee&64&&se&&T.dynamicChildren?(E(T.dynamicChildren,se,S,x,L,Z,$),(A.key!=null||x&&A===x.subTree)&&Vp(T,A,!0)):Te(T,A,S,re,x,L,Z,$,W)},y=(T,A,S,D,x,L,Z,$,W)=>{A.slotScopeIds=$,T==null?A.shapeFlag&512?x.ctx.activate(A,S,D,Z,W):rt(A,S,D,x,L,Z,W):Ot(T,A,W)},rt=(T,A,S,D,x,L,Z)=>{const $=T.component=E2(T,D,x);if(Ip(T)&&($.ctx.renderer=z),w2($),$.asyncDep){if(x&&x.registerDep($,Ge),!T.el){const W=$.subTree=Ie(ws);j(null,W,A,S)}return}Ge($,T,A,S,x,L,Z)},Ot=(T,A,S)=>{const D=A.component=T.component;if(k_(T,A,S))if(D.asyncDep&&!D.asyncResolved){Se(D,A,S);return}else D.next=A,A_(D.update),D.update();else A.el=T.el,D.vnode=A},Ge=(T,A,S,D,x,L,Z)=>{const $=()=>{if(T.isMounted){let{next:re,bu:ee,u:se,parent:ue,vnode:Ee}=T,ge=re,de;cs(T,!1),re?(re.el=Ee.el,Se(T,re,Z)):re=Ee,ee&&fo(ee),(de=re.props&&re.props.onVnodeBeforeUpdate)&&Zt(de,ue,re,Ee),cs(T,!0);const Ue=bl(T),Ct=T.subTree;T.subTree=Ue,M(Ct,Ue,g(Ct.el),O(Ct),T,x,L),re.el=Ue.el,ge===null&&V_(T,Ue.el),se&&Pt(se,x),(de=re.props&&re.props.onVnodeUpdated)&&Pt(()=>Zt(de,ue,re,Ee),x)}else{let re;const{el:ee,props:se}=A,{bm:ue,m:Ee,parent:ge}=T,de=go(A);if(cs(T,!1),ue&&fo(ue),!de&&(re=se&&se.onVnodeBeforeMount)&&Zt(re,ge,A),cs(T,!0),ee&&be){const Ue=()=>{T.subTree=bl(T),be(ee,T.subTree,T,x,null)};de?A.type.__asyncLoader().then(()=>!T.isUnmounted&&Ue()):Ue()}else{const Ue=T.subTree=bl(T);M(null,Ue,S,D,T,x,L),A.el=Ue.el}if(Ee&&Pt(Ee,x),!de&&(re=se&&se.onVnodeMounted)){const Ue=A;Pt(()=>Zt(re,ge,Ue),x)}(A.shapeFlag&256||ge&&go(ge.vnode)&&ge.vnode.shapeFlag&256)&&T.a&&Pt(T.a,x),T.isMounted=!0,A=S=D=null}},W=T.effect=new xc($,()=>$c(F),T.scope),F=T.update=()=>W.run();F.id=T.uid,cs(T,!0),F()},Se=(T,A,S)=>{A.component=T;const D=T.vnode.props;T.vnode=A,T.next=null,s2(T,A.props,D,S),o2(T,A.children,S),fr(),Fh(T),pr()},Te=(T,A,S,D,x,L,Z,$,W=!1)=>{const F=T&&T.children,re=T?T.shapeFlag:0,ee=A.children,{patchFlag:se,shapeFlag:ue}=A;if(se>0){if(se&128){Ut(F,ee,S,D,x,L,Z,$,W);return}else if(se&256){Vt(F,ee,S,D,x,L,Z,$,W);return}}ue&8?(re&16&&tt(F,x,L),ee!==F&&f(S,ee)):re&16?ue&16?Ut(F,ee,S,D,x,L,Z,$,W):tt(F,x,L,!0):(re&8&&f(S,""),ue&16&&I(ee,S,D,x,L,Z,$,W))},Vt=(T,A,S,D,x,L,Z,$,W)=>{T=T||Hs,A=A||Hs;const F=T.length,re=A.length,ee=Math.min(F,re);let se;for(se=0;se<ee;se++){const ue=A[se]=W?Mn(A[se]):Yt(A[se]);M(T[se],ue,S,null,x,L,Z,$,W)}F>re?tt(T,x,L,!0,!1,ee):I(A,S,D,x,L,Z,$,W,ee)},Ut=(T,A,S,D,x,L,Z,$,W)=>{let F=0;const re=A.length;let ee=T.length-1,se=re-1;for(;F<=ee&&F<=se;){const ue=T[F],Ee=A[F]=W?Mn(A[F]):Yt(A[F]);if(xr(ue,Ee))M(ue,Ee,S,null,x,L,Z,$,W);else break;F++}for(;F<=ee&&F<=se;){const ue=T[ee],Ee=A[se]=W?Mn(A[se]):Yt(A[se]);if(xr(ue,Ee))M(ue,Ee,S,null,x,L,Z,$,W);else break;ee--,se--}if(F>ee){if(F<=se){const ue=se+1,Ee=ue<re?A[ue].el:D;for(;F<=se;)M(null,A[F]=W?Mn(A[F]):Yt(A[F]),S,Ee,x,L,Z,$,W),F++}}else if(F>se)for(;F<=ee;)je(T[F],x,L,!0),F++;else{const ue=F,Ee=F,ge=new Map;for(F=Ee;F<=se;F++){const dt=A[F]=W?Mn(A[F]):Yt(A[F]);dt.key!=null&&ge.set(dt.key,F)}let de,Ue=0;const Ct=se-Ee+1;let cn=!1,Li=0;const Ft=new Array(Ct);for(F=0;F<Ct;F++)Ft[F]=0;for(F=ue;F<=ee;F++){const dt=T[F];if(Ue>=Ct){je(dt,x,L,!0);continue}let Rt;if(dt.key!=null)Rt=ge.get(dt.key);else for(de=Ee;de<=se;de++)if(Ft[de-Ee]===0&&xr(dt,A[de])){Rt=de;break}Rt===void 0?je(dt,x,L,!0):(Ft[Rt-Ee]=F+1,Rt>=Li?Li=Rt:cn=!0,M(dt,A[Rt],S,null,x,L,Z,$,W),Ue++)}const Tr=cn?u2(Ft):Hs;for(de=Tr.length-1,F=Ct-1;F>=0;F--){const dt=Ee+F,Rt=A[dt],Ui=dt+1<re?A[dt+1].el:D;Ft[F]===0?M(null,Rt,S,Ui,x,L,Z,$,W):cn&&(de<0||F!==Tr[de]?Mt(Rt,S,Ui,2):de--)}}},Mt=(T,A,S,D,x=null)=>{const{el:L,type:Z,transition:$,children:W,shapeFlag:F}=T;if(F&6){Mt(T.component.subTree,A,S,D);return}if(F&128){T.suspense.move(A,S,D);return}if(F&64){Z.move(T,A,S,z);return}if(Z===ye){s(L,A,S);for(let ee=0;ee<W.length;ee++)Mt(W[ee],A,S,D);s(T.anchor,A,S);return}if(Z===_o){X(T,A,S);return}if(D!==2&&F&1&&$)if(D===0)$.beforeEnter(L),s(L,A,S),Pt(()=>$.enter(L),x);else{const{leave:ee,delayLeave:se,afterLeave:ue}=$,Ee=()=>s(L,A,S),ge=()=>{ee(L,()=>{Ee(),ue&&ue()})};se?se(L,Ee,ge):ge()}else s(L,A,S)},je=(T,A,S,D=!1,x=!1)=>{const{type:L,props:Z,ref:$,children:W,dynamicChildren:F,shapeFlag:re,patchFlag:ee,dirs:se}=T;if($!=null&&tc($,null,S,T,!0),re&256){A.ctx.deactivate(T);return}const ue=re&1&&se,Ee=!go(T);let ge;if(Ee&&(ge=Z&&Z.onVnodeBeforeUnmount)&&Zt(ge,A,T),re&6)Qt(T.component,S,D);else{if(re&128){T.suspense.unmount(S,D);return}ue&&ls(T,null,A,"beforeUnmount"),re&64?T.type.remove(T,A,S,x,z,D):F&&(L!==ye||ee>0&&ee&64)?tt(F,A,S,!1,!0):(L===ye&&ee&384||!x&&re&16)&&tt(W,A,S),D&&$e(T)}(Ee&&(ge=Z&&Z.onVnodeUnmounted)||ue)&&Pt(()=>{ge&&Zt(ge,A,T),ue&&ls(T,null,A,"unmounted")},S)},$e=T=>{const{type:A,el:S,anchor:D,transition:x}=T;if(A===ye){Pn(S,D);return}if(A===_o){Q(T);return}const L=()=>{r(S),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(T.shapeFlag&1&&x&&!x.persisted){const{leave:Z,delayLeave:$}=x,W=()=>Z(S,L);$?$(T.el,L,W):W()}else L()},Pn=(T,A)=>{let S;for(;T!==A;)S=p(T),r(T),T=S;r(A)},Qt=(T,A,S)=>{const{bum:D,scope:x,update:L,subTree:Z,um:$}=T;D&&fo(D),x.stop(),L&&(L.active=!1,je(Z,T,A,S)),$&&Pt($,A),Pt(()=>{T.isUnmounted=!0},A),A&&A.pendingBranch&&!A.isUnmounted&&T.asyncDep&&!T.asyncResolved&&T.suspenseId===A.pendingId&&(A.deps--,A.deps===0&&A.resolve())},tt=(T,A,S,D=!1,x=!1,L=0)=>{for(let Z=L;Z<T.length;Z++)je(T[Z],A,S,D,x)},O=T=>T.shapeFlag&6?O(T.component.subTree):T.shapeFlag&128?T.suspense.next():p(T.anchor||T.el),J=(T,A,S)=>{T==null?A._vnode&&je(A._vnode,null,null,!0):M(A._vnode||null,T,A,null,null,null,S),Fh(),gp(),A._vnode=T},z={p:M,um:je,m:Mt,r:$e,mt:rt,mc:I,pc:Te,pbc:E,n:O,o:t};let ne,be;return e&&([ne,be]=e(z)),{render:J,hydrate:ne,createApp:t2(J,ne)}}function cs({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function c2(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Vp(t,e,n=!1){const s=t.children,r=e.children;if(le(s)&&le(r))for(let i=0;i<s.length;i++){const a=s[i];let l=r[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=r[i]=Mn(r[i]),l.el=a.el),n||Vp(a,l)),l.type===fa&&(l.el=a.el)}}function u2(t){const e=t.slice(),n=[0];let s,r,i,a,l;const c=t.length;for(s=0;s<c;s++){const h=t[s];if(h!==0){if(r=n[n.length-1],t[r]<h){e[s]=r,n.push(s);continue}for(i=0,a=n.length-1;i<a;)l=i+a>>1,t[n[l]]<h?i=l+1:a=l;h<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=e[a];return n}const h2=t=>t.__isTeleport,ye=Symbol.for("v-fgt"),fa=Symbol.for("v-txt"),ws=Symbol.for("v-cmt"),_o=Symbol.for("v-stc"),Qr=[];let qt=null;function K(t=!1){Qr.push(qt=t?null:[])}function d2(){Qr.pop(),qt=Qr[Qr.length-1]||null}let oi=1;function Zh(t){oi+=t}function Dp(t){return t.dynamicChildren=oi>0?qt||Hs:null,d2(),oi>0&&qt&&qt.push(t),t}function G(t,e,n,s,r,i){return Dp(v(t,e,n,s,r,i,!0))}function f2(t,e,n,s,r){return Dp(Ie(t,e,n,s,r,!0))}function nc(t){return t?t.__v_isVNode===!0:!1}function xr(t,e){return t.type===e.type&&t.key===e.key}const pa="__vInternal",Np=({key:t})=>t??null,yo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?et(t)||Et(t)||_e(t)?{i:Lt,r:t,k:e,f:!!n}:t:null);function v(t,e=null,n=null,s=0,r=null,i=t===ye?0:1,a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Np(e),ref:e&&yo(e),scopeId:ca,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Lt};return l?(zc(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=et(n)?8:16),oi>0&&!a&&qt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&qt.push(c),c}const Ie=p2;function p2(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===D_)&&(t=ws),nc(t)){const l=Xs(t,e,!0);return n&&zc(l,n),oi>0&&!i&&qt&&(l.shapeFlag&6?qt[qt.indexOf(t)]=l:qt.push(l)),l.patchFlag|=-2,l}if(C2(t)&&(t=t.__vccOpts),e){e=g2(e);let{class:l,style:c}=e;l&&!et(l)&&(e.class=on(l)),Le(c)&&(op(c)&&!le(c)&&(c=ut({},c)),e.style=ra(c))}const a=et(t)?1:O_(t)?128:h2(t)?64:Le(t)?4:_e(t)?2:0;return v(t,e,n,s,r,a,i,!0)}function g2(t){return t?op(t)||pa in t?ut({},t):t:null}function Xs(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:a}=t,l=e?_2(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&Np(l),ref:e&&e.ref?n&&r?le(r)?r.concat(yo(e)):[r,yo(e)]:yo(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ye?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Xs(t.ssContent),ssFallback:t.ssFallback&&Xs(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Y(t=" ",e=0){return Ie(fa,null,t,e)}function m2(t,e){const n=Ie(_o,null,t);return n.staticCount=e,n}function bt(t="",e=!1){return e?(K(),f2(ws,null,t)):Ie(ws,null,t)}function Yt(t){return t==null||typeof t=="boolean"?Ie(ws):le(t)?Ie(ye,null,t.slice()):typeof t=="object"?Mn(t):Ie(fa,null,String(t))}function Mn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Xs(t)}function zc(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(le(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),zc(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(pa in e)?e._ctx=Lt:r===3&&Lt&&(Lt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else _e(e)?(e={default:e,_ctx:Lt},n=32):(e=String(e),s&64?(n=16,e=[Y(e)]):n=8);t.children=e,t.shapeFlag|=n}function _2(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=on([e.class,s.class]));else if(r==="style")e.style=ra([e.style,s.style]);else if(ea(r)){const i=e[r],a=s[r];a&&i!==a&&!(le(i)&&i.includes(a))&&(e[r]=i?[].concat(i,a):a)}else r!==""&&(e[r]=s[r])}return e}function Zt(t,e,n,s=null){zt(t,e,7,[n,s])}const y2=bp();let v2=0;function E2(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||y2,i={uid:v2++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Gm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Rp(s,r),emitsOptions:_p(s,r),emit:null,emitted:null,propsDefaults:Be,inheritAttrs:s.inheritAttrs,ctx:Be,data:Be,props:Be,attrs:Be,slots:Be,refs:Be,setupState:Be,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=R_.bind(null,i),t.ce&&t.ce(i),i}let at=null,Kc,xs,Yh="__VUE_INSTANCE_SETTERS__";(xs=Wl()[Yh])||(xs=Wl()[Yh]=[]),xs.push(t=>at=t),Kc=t=>{xs.length>1?xs.forEach(e=>e(t)):xs[0](t)};const er=t=>{Kc(t),t.scope.on()},ys=()=>{at&&at.scope.off(),Kc(null)};function Op(t){return t.vnode.shapeFlag&4}let ai=!1;function w2(t,e=!1){ai=e;const{props:n,children:s}=t.vnode,r=Op(t);n2(t,n,r,e),i2(t,s);const i=r?I2(t,e):void 0;return ai=!1,i}function I2(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=ap(new Proxy(t.ctx,G_));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?A2(t):null;er(t),fr();const i=Hn(s,t,0,[t.props,r]);if(pr(),ys(),$f(i)){if(i.then(ys,ys),e)return i.then(a=>{Jh(t,a,e)}).catch(a=>{aa(a,t,0)});t.asyncDep=i}else Jh(t,i,e)}else Mp(t,e)}function Jh(t,e,n){_e(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Le(e)&&(t.setupState=hp(e)),Mp(t,n)}let Xh;function Mp(t,e,n){const s=t.type;if(!t.render){if(!e&&Xh&&!s.render){const r=s.template||qc(t).template;if(r){const{isCustomElement:i,compilerOptions:a}=t.appContext.config,{delimiters:l,compilerOptions:c}=s,h=ut(ut({isCustomElement:i,delimiters:l},a),c);s.render=Xh(r,h)}}t.render=s.render||Xt}{er(t),fr();try{Q_(t)}finally{pr(),ys()}}}function T2(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return St(t,"get","$attrs"),e[n]}}))}function A2(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return T2(t)},slots:t.slots,emit:t.emit,expose:e}}function ga(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(hp(ap(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Gr)return Gr[n](t)},has(e,n){return n in e||n in Gr}}))}function b2(t,e=!0){return _e(t)?t.displayName||t.name:t.name||e&&t.__name}function C2(t){return _e(t)&&"__vccOpts"in t}const st=(t,e)=>w_(t,e,ai);function xp(t,e,n){const s=arguments.length;return s===2?Le(e)&&!le(e)?nc(e)?Ie(t,null,[e]):Ie(t,e):Ie(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&nc(n)&&(n=[n]),Ie(t,e,n))}const R2=Symbol.for("v-scx"),P2=()=>En(R2),S2="3.3.11",k2="http://www.w3.org/2000/svg",ds=typeof document<"u"?document:null,ed=ds&&ds.createElement("template"),V2={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?ds.createElementNS(k2,t):ds.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>ds.createTextNode(t),createComment:t=>ds.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ds.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const a=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{ed.innerHTML=s?`<svg>${t}</svg>`:t;const l=ed.content;if(s){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},D2=Symbol("_vtc");function N2(t,e,n){const s=t[D2];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Gc=Symbol("_vod"),jt={beforeMount(t,{value:e},{transition:n}){t[Gc]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Lr(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),Lr(t,!0),s.enter(t)):s.leave(t,()=>{Lr(t,!1)}):Lr(t,e))},beforeUnmount(t,{value:e}){Lr(t,e)}};function Lr(t,e){t.style.display=e?t[Gc]:"none"}function O2(t,e,n){const s=t.style,r=et(n);if(n&&!r){if(e&&!et(e))for(const i in e)n[i]==null&&sc(s,i,"");for(const i in n)sc(s,i,n[i])}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),Gc in t&&(s.display=i)}}const td=/\s*!important$/;function sc(t,e,n){if(le(n))n.forEach(s=>sc(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=M2(t,e);td.test(n)?t.setProperty(dr(s),n.replace(td,""),"important"):t[s]=n}}const nd=["Webkit","Moz","ms"],Rl={};function M2(t,e){const n=Rl[e];if(n)return n;let s=rn(e);if(s!=="filter"&&s in t)return Rl[e]=s;s=sa(s);for(let r=0;r<nd.length;r++){const i=nd[r]+s;if(i in t)return Rl[e]=i}return e}const sd="http://www.w3.org/1999/xlink";function x2(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(sd,e.slice(6,e.length)):t.setAttributeNS(sd,e,n);else{const i=zm(e);n==null||i&&!Wf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function L2(t,e,n,s,r,i,a){if(e==="innerHTML"||e==="textContent"){s&&a(s,r,i),t[e]=n??"";return}const l=t.tagName;if(e==="value"&&l!=="PROGRESS"&&!l.includes("-")){t._value=n;const h=l==="OPTION"?t.getAttribute("value"):t.value,f=n??"";h!==f&&(t.value=f),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const h=typeof t[e];h==="boolean"?n=Wf(n):n==null&&h==="string"?(n="",c=!0):h==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function fs(t,e,n,s){t.addEventListener(e,n,s)}function U2(t,e,n,s){t.removeEventListener(e,n,s)}const rd=Symbol("_vei");function F2(t,e,n,s,r=null){const i=t[rd]||(t[rd]={}),a=i[e];if(s&&a)a.value=s;else{const[l,c]=B2(e);if(s){const h=i[e]=H2(s,r);fs(t,l,h,c)}else a&&(U2(t,l,a,c),i[e]=void 0)}}const id=/(?:Once|Passive|Capture)$/;function B2(t){let e;if(id.test(t)){e={};let s;for(;s=t.match(id);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):dr(t.slice(2)),e]}let Pl=0;const j2=Promise.resolve(),$2=()=>Pl||(j2.then(()=>Pl=0),Pl=Date.now());function H2(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;zt(q2(s,n.value),e,5,[s])};return n.value=t,n.attached=$2(),n}function q2(t,e){if(le(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const od=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,W2=(t,e,n,s,r=!1,i,a,l,c)=>{e==="class"?N2(t,s,r):e==="style"?O2(t,n,s):ea(e)?Dc(e)||F2(t,e,n,s,a):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):z2(t,e,s,r))?L2(t,e,s,i,a,l,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),x2(t,e,s,r))};function z2(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&od(e)&&_e(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return od(e)&&et(n)?!1:e in t}const Mo=t=>{const e=t.props["onUpdate:modelValue"]||!1;return le(e)?n=>fo(e,n):e};function K2(t){t.target.composing=!0}function ad(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ks=Symbol("_assign"),we={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t[Ks]=Mo(r);const i=s||r.props&&r.props.type==="number";fs(t,e?"change":"input",a=>{if(a.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=ql(l)),t[Ks](l)}),n&&fs(t,"change",()=>{t.value=t.value.trim()}),e||(fs(t,"compositionstart",K2),fs(t,"compositionend",ad),fs(t,"change",ad))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t[Ks]=Mo(i),t.composing)return;const a=r||t.type==="number"?ql(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===l)||(t.value=l))}},G2={deep:!0,created(t,e,n){t[Ks]=Mo(n),fs(t,"change",()=>{const s=t._modelValue,r=Q2(t),i=t.checked,a=t[Ks];if(le(s)){const l=zf(s,r),c=l!==-1;if(i&&!c)a(s.concat(r));else if(!i&&c){const h=[...s];h.splice(l,1),a(h)}}else if(ta(s)){const l=new Set(s);i?l.add(r):l.delete(r),a(l)}else a(Lp(t,i))})},mounted:ld,beforeUpdate(t,e,n){t[Ks]=Mo(n),ld(t,e,n)}};function ld(t,{value:e,oldValue:n},s){t._modelValue=e,le(e)?t.checked=zf(e,s.props.value)>-1:ta(e)?t.checked=e.has(s.props.value):e!==n&&(t.checked=ia(e,Lp(t,!0)))}function Q2(t){return"_value"in t?t._value:t.value}function Lp(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Z2=["ctrl","shift","alt","meta"],Y2={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Z2.some(n=>t[`${n}Key`]&&!e.includes(n))},J2=(t,e)=>t._withMods||(t._withMods=(n,...s)=>{for(let r=0;r<e.length;r++){const i=Y2[e[r]];if(i&&i(n,e))return}return t(n,...s)}),X2=ut({patchProp:W2},V2);let cd;function e1(){return cd||(cd=a2(X2))}const t1=(...t)=>{const e=e1().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=n1(s);if(!r)return;const i=e._component;!_e(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const a=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e};function n1(t){return et(t)?document.querySelector(t):t}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Ls=typeof window<"u";function s1(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Oe=Object.assign;function Sl(t,e){const n={};for(const s in e){const r=e[s];n[s]=Kt(r)?r.map(t):t(r)}return n}const Zr=()=>{},Kt=Array.isArray,r1=/\/$/,i1=t=>t.replace(r1,"");function kl(t,e,n="/"){let s,r={},i="",a="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),r=t(i)),l>-1&&(s=s||e.slice(0,l),a=e.slice(l,e.length)),s=c1(s??e,n),{fullPath:s+(i&&"?")+i+a,path:s,query:r,hash:a}}function o1(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function ud(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function a1(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&tr(e.matched[s],n.matched[r])&&Up(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function tr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Up(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!l1(t[n],e[n]))return!1;return!0}function l1(t,e){return Kt(t)?hd(t,e):Kt(e)?hd(e,t):t===e}function hd(t,e){return Kt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function c1(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let i=n.length-1,a,l;for(a=0;a<s.length;a++)if(l=s[a],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(a-(a===s.length?1:0)).join("/")}var li;(function(t){t.pop="pop",t.push="push"})(li||(li={}));var Yr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Yr||(Yr={}));function u1(t){if(!t)if(Ls){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),i1(t)}const h1=/^[^#]+#/;function d1(t,e){return t.replace(h1,"#")+e}function f1(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const ma=()=>({left:window.pageXOffset,top:window.pageYOffset});function p1(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=f1(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function dd(t,e){return(history.state?history.state.position-e:-1)+t}const rc=new Map;function g1(t,e){rc.set(t,e)}function m1(t){const e=rc.get(t);return rc.delete(t),e}let _1=()=>location.protocol+"//"+location.host;function Fp(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let l=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(l);return c[0]!=="/"&&(c="/"+c),ud(c,"")}return ud(n,t)+s+r}function y1(t,e,n,s){let r=[],i=[],a=null;const l=({state:p})=>{const C=Fp(t,location),V=n.value,M=e.value;let N=0;if(p){if(n.value=C,e.value=p,a&&a===V){a=null;return}N=M?p.position-M.position:0}else s(C);r.forEach(j=>{j(n.value,V,{delta:N,type:li.pop,direction:N?N>0?Yr.forward:Yr.back:Yr.unknown})})};function c(){a=n.value}function h(p){r.push(p);const C=()=>{const V=r.indexOf(p);V>-1&&r.splice(V,1)};return i.push(C),C}function f(){const{history:p}=window;p.state&&p.replaceState(Oe({},p.state,{scroll:ma()}),"")}function g(){for(const p of i)p();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:c,listen:h,destroy:g}}function fd(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?ma():null}}function v1(t){const{history:e,location:n}=window,s={value:Fp(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,h,f){const g=t.indexOf("#"),p=g>-1?(n.host&&document.querySelector("base")?t:t.slice(g))+c:_1()+t+c;try{e[f?"replaceState":"pushState"](h,"",p),r.value=h}catch(C){console.error(C),n[f?"replace":"assign"](p)}}function a(c,h){const f=Oe({},e.state,fd(r.value.back,c,r.value.forward,!0),h,{position:r.value.position});i(c,f,!0),s.value=c}function l(c,h){const f=Oe({},r.value,e.state,{forward:c,scroll:ma()});i(f.current,f,!0);const g=Oe({},fd(s.value,c,null),{position:f.position+1},h);i(c,g,!1),s.value=c}return{location:s,state:r,push:l,replace:a}}function E1(t){t=u1(t);const e=v1(t),n=y1(t,e.state,e.location,e.replace);function s(i,a=!0){a||n.pauseListeners(),history.go(i)}const r=Oe({location:"",base:t,go:s,createHref:d1.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function w1(t){return typeof t=="string"||t&&typeof t=="object"}function Bp(t){return typeof t=="string"||typeof t=="symbol"}const Nn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},jp=Symbol("");var pd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(pd||(pd={}));function nr(t,e){return Oe(new Error,{type:t,[jp]:!0},e)}function dn(t,e){return t instanceof Error&&jp in t&&(e==null||!!(t.type&e))}const gd="[^/]+?",I1={sensitive:!1,strict:!1,start:!0,end:!0},T1=/[.+*?^${}()[\]/\\]/g;function A1(t,e){const n=Oe({},I1,e),s=[];let r=n.start?"^":"";const i=[];for(const h of t){const f=h.length?[]:[90];n.strict&&!h.length&&(r+="/");for(let g=0;g<h.length;g++){const p=h[g];let C=40+(n.sensitive?.25:0);if(p.type===0)g||(r+="/"),r+=p.value.replace(T1,"\\$&"),C+=40;else if(p.type===1){const{value:V,repeatable:M,optional:N,regexp:j}=p;i.push({name:V,repeatable:M,optional:N});const H=j||gd;if(H!==gd){C+=10;try{new RegExp(`(${H})`)}catch(Q){throw new Error(`Invalid custom RegExp for param "${V}" (${H}): `+Q.message)}}let X=M?`((?:${H})(?:/(?:${H}))*)`:`(${H})`;g||(X=N&&h.length<2?`(?:/${X})`:"/"+X),N&&(X+="?"),r+=X,C+=20,N&&(C+=-8),M&&(C+=-20),H===".*"&&(C+=-50)}f.push(C)}s.push(f)}if(n.strict&&n.end){const h=s.length-1;s[h][s[h].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const a=new RegExp(r,n.sensitive?"":"i");function l(h){const f=h.match(a),g={};if(!f)return null;for(let p=1;p<f.length;p++){const C=f[p]||"",V=i[p-1];g[V.name]=C&&V.repeatable?C.split("/"):C}return g}function c(h){let f="",g=!1;for(const p of t){(!g||!f.endsWith("/"))&&(f+="/"),g=!1;for(const C of p)if(C.type===0)f+=C.value;else if(C.type===1){const{value:V,repeatable:M,optional:N}=C,j=V in h?h[V]:"";if(Kt(j)&&!M)throw new Error(`Provided param "${V}" is an array but it is not repeatable (* or + modifiers)`);const H=Kt(j)?j.join("/"):j;if(!H)if(N)p.length<2&&(f.endsWith("/")?f=f.slice(0,-1):g=!0);else throw new Error(`Missing required param "${V}"`);f+=H}}return f||"/"}return{re:a,score:s,keys:i,parse:l,stringify:c}}function b1(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function C1(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=b1(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(md(s))return 1;if(md(r))return-1}return r.length-s.length}function md(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const R1={type:0,value:""},P1=/[a-zA-Z0-9_]/;function S1(t){if(!t)return[[]];if(t==="/")return[[R1]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(C){throw new Error(`ERR (${n})/"${h}": ${C}`)}let n=0,s=n;const r=[];let i;function a(){i&&r.push(i),i=[]}let l=0,c,h="",f="";function g(){h&&(n===0?i.push({type:0,value:h}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:h,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),h="")}function p(){h+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(h&&g(),a()):c===":"?(g(),n=1):p();break;case 4:p(),n=s;break;case 1:c==="("?n=2:P1.test(c)?p():(g(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=3:f+=c;break;case 3:g(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${h}"`),g(),a(),r}function k1(t,e,n){const s=A1(S1(t.path),n),r=Oe(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function V1(t,e){const n=[],s=new Map;e=vd({strict:!1,end:!0,sensitive:!1},e);function r(f){return s.get(f)}function i(f,g,p){const C=!p,V=D1(f);V.aliasOf=p&&p.record;const M=vd(e,f),N=[V];if("alias"in f){const X=typeof f.alias=="string"?[f.alias]:f.alias;for(const Q of X)N.push(Oe({},V,{components:p?p.record.components:V.components,path:Q,aliasOf:p?p.record:V}))}let j,H;for(const X of N){const{path:Q}=X;if(g&&Q[0]!=="/"){const Pe=g.record.path,ve=Pe[Pe.length-1]==="/"?"":"/";X.path=g.record.path+(Q&&ve+Q)}if(j=k1(X,g,M),p?p.alias.push(j):(H=H||j,H!==j&&H.alias.push(j),C&&f.name&&!yd(j)&&a(f.name)),V.children){const Pe=V.children;for(let ve=0;ve<Pe.length;ve++)i(Pe[ve],j,p&&p.children[ve])}p=p||j,(j.record.components&&Object.keys(j.record.components).length||j.record.name||j.record.redirect)&&c(j)}return H?()=>{a(H)}:Zr}function a(f){if(Bp(f)){const g=s.get(f);g&&(s.delete(f),n.splice(n.indexOf(g),1),g.children.forEach(a),g.alias.forEach(a))}else{const g=n.indexOf(f);g>-1&&(n.splice(g,1),f.record.name&&s.delete(f.record.name),f.children.forEach(a),f.alias.forEach(a))}}function l(){return n}function c(f){let g=0;for(;g<n.length&&C1(f,n[g])>=0&&(f.record.path!==n[g].record.path||!$p(f,n[g]));)g++;n.splice(g,0,f),f.record.name&&!yd(f)&&s.set(f.record.name,f)}function h(f,g){let p,C={},V,M;if("name"in f&&f.name){if(p=s.get(f.name),!p)throw nr(1,{location:f});M=p.record.name,C=Oe(_d(g.params,p.keys.filter(H=>!H.optional).map(H=>H.name)),f.params&&_d(f.params,p.keys.map(H=>H.name))),V=p.stringify(C)}else if("path"in f)V=f.path,p=n.find(H=>H.re.test(V)),p&&(C=p.parse(V),M=p.record.name);else{if(p=g.name?s.get(g.name):n.find(H=>H.re.test(g.path)),!p)throw nr(1,{location:f,currentLocation:g});M=p.record.name,C=Oe({},g.params,f.params),V=p.stringify(C)}const N=[];let j=p;for(;j;)N.unshift(j.record),j=j.parent;return{name:M,path:V,params:C,matched:N,meta:O1(N)}}return t.forEach(f=>i(f)),{addRoute:i,resolve:h,removeRoute:a,getRoutes:l,getRecordMatcher:r}}function _d(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function D1(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:N1(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function N1(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function yd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function O1(t){return t.reduce((e,n)=>Oe(e,n.meta),{})}function vd(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function $p(t,e){return e.children.some(n=>n===t||$p(t,n))}const Hp=/#/g,M1=/&/g,x1=/\//g,L1=/=/g,U1=/\?/g,qp=/\+/g,F1=/%5B/g,B1=/%5D/g,Wp=/%5E/g,j1=/%60/g,zp=/%7B/g,$1=/%7C/g,Kp=/%7D/g,H1=/%20/g;function Qc(t){return encodeURI(""+t).replace($1,"|").replace(F1,"[").replace(B1,"]")}function q1(t){return Qc(t).replace(zp,"{").replace(Kp,"}").replace(Wp,"^")}function ic(t){return Qc(t).replace(qp,"%2B").replace(H1,"+").replace(Hp,"%23").replace(M1,"%26").replace(j1,"`").replace(zp,"{").replace(Kp,"}").replace(Wp,"^")}function W1(t){return ic(t).replace(L1,"%3D")}function z1(t){return Qc(t).replace(Hp,"%23").replace(U1,"%3F")}function K1(t){return t==null?"":z1(t).replace(x1,"%2F")}function xo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function G1(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(qp," "),a=i.indexOf("="),l=xo(a<0?i:i.slice(0,a)),c=a<0?null:xo(i.slice(a+1));if(l in e){let h=e[l];Kt(h)||(h=e[l]=[h]),h.push(c)}else e[l]=c}return e}function Ed(t){let e="";for(let n in t){const s=t[n];if(n=W1(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Kt(s)?s.map(i=>i&&ic(i)):[s&&ic(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Q1(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Kt(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const Z1=Symbol(""),wd=Symbol(""),Zc=Symbol(""),Gp=Symbol(""),oc=Symbol("");function Ur(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function xn(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const c=g=>{g===!1?l(nr(4,{from:n,to:e})):g instanceof Error?l(g):w1(g)?l(nr(2,{from:e,to:g})):(i&&s.enterCallbacks[r]===i&&typeof g=="function"&&i.push(g),a())},h=t.call(s&&s.instances[r],e,n,c);let f=Promise.resolve(h);t.length<3&&(f=f.then(c)),f.catch(g=>l(g))})}function Vl(t,e,n,s){const r=[];for(const i of t)for(const a in i.components){let l=i.components[a];if(!(e!=="beforeRouteEnter"&&!i.instances[a]))if(Y1(l)){const h=(l.__vccOpts||l)[e];h&&r.push(xn(h,n,s,i,a))}else{let c=l();r.push(()=>c.then(h=>{if(!h)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${i.path}"`));const f=s1(h)?h.default:h;i.components[a]=f;const p=(f.__vccOpts||f)[e];return p&&xn(p,n,s,i,a)()}))}}return r}function Y1(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Id(t){const e=En(Zc),n=En(Gp),s=st(()=>e.resolve(Ye(t.to))),r=st(()=>{const{matched:c}=s.value,{length:h}=c,f=c[h-1],g=n.matched;if(!f||!g.length)return-1;const p=g.findIndex(tr.bind(null,f));if(p>-1)return p;const C=Td(c[h-2]);return h>1&&Td(f)===C&&g[g.length-1].path!==C?g.findIndex(tr.bind(null,c[h-2])):p}),i=st(()=>r.value>-1&&ty(n.params,s.value.params)),a=st(()=>r.value>-1&&r.value===n.matched.length-1&&Up(n.params,s.value.params));function l(c={}){return ey(c)?e[Ye(t.replace)?"replace":"push"](Ye(t.to)).catch(Zr):Promise.resolve()}return{route:s,href:st(()=>s.value.href),isActive:i,isExactActive:a,navigate:l}}const J1=wp({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Id,setup(t,{slots:e}){const n=wi(Id(t)),{options:s}=En(Zc),r=st(()=>({[Ad(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Ad(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:xp("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),X1=J1;function ey(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function ty(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Kt(r)||r.length!==s.length||s.some((i,a)=>i!==r[a]))return!1}return!0}function Td(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ad=(t,e,n)=>t??e??n,ny=wp({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=En(oc),r=st(()=>t.route||s.value),i=En(wd,0),a=st(()=>{let h=Ye(i);const{matched:f}=r.value;let g;for(;(g=f[h])&&!g.components;)h++;return h}),l=st(()=>r.value.matched[a.value]);mo(wd,st(()=>a.value+1)),mo(Z1,l),mo(oc,r);const c=mt();return po(()=>[c.value,l.value,t.name],([h,f,g],[p,C,V])=>{f&&(f.instances[g]=h,C&&C!==f&&h&&h===p&&(f.leaveGuards.size||(f.leaveGuards=C.leaveGuards),f.updateGuards.size||(f.updateGuards=C.updateGuards))),h&&f&&(!C||!tr(f,C)||!p)&&(f.enterCallbacks[g]||[]).forEach(M=>M(h))},{flush:"post"}),()=>{const h=r.value,f=t.name,g=l.value,p=g&&g.components[f];if(!p)return bd(n.default,{Component:p,route:h});const C=g.props[f],V=C?C===!0?h.params:typeof C=="function"?C(h):C:null,N=xp(p,Oe({},V,e,{onVnodeUnmounted:j=>{j.component.isUnmounted&&(g.instances[f]=null)},ref:c}));return bd(n.default,{Component:N,route:h})||N}}});function bd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const sy=ny;function ry(t){const e=V1(t.routes,t),n=t.parseQuery||G1,s=t.stringifyQuery||Ed,r=t.history,i=Ur(),a=Ur(),l=Ur(),c=__(Nn);let h=Nn;Ls&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Sl.bind(null,O=>""+O),g=Sl.bind(null,K1),p=Sl.bind(null,xo);function C(O,J){let z,ne;return Bp(O)?(z=e.getRecordMatcher(O),ne=J):ne=O,e.addRoute(ne,z)}function V(O){const J=e.getRecordMatcher(O);J&&e.removeRoute(J)}function M(){return e.getRoutes().map(O=>O.record)}function N(O){return!!e.getRecordMatcher(O)}function j(O,J){if(J=Oe({},J||c.value),typeof O=="string"){const S=kl(n,O,J.path),D=e.resolve({path:S.path},J),x=r.createHref(S.fullPath);return Oe(S,D,{params:p(D.params),hash:xo(S.hash),redirectedFrom:void 0,href:x})}let z;if("path"in O)z=Oe({},O,{path:kl(n,O.path,J.path).path});else{const S=Oe({},O.params);for(const D in S)S[D]==null&&delete S[D];z=Oe({},O,{params:g(S)}),J.params=g(J.params)}const ne=e.resolve(z,J),be=O.hash||"";ne.params=f(p(ne.params));const T=o1(s,Oe({},O,{hash:q1(be),path:ne.path})),A=r.createHref(T);return Oe({fullPath:T,hash:be,query:s===Ed?Q1(O.query):O.query||{}},ne,{redirectedFrom:void 0,href:A})}function H(O){return typeof O=="string"?kl(n,O,c.value.path):Oe({},O)}function X(O,J){if(h!==O)return nr(8,{from:J,to:O})}function Q(O){return R(O)}function Pe(O){return Q(Oe(H(O),{replace:!0}))}function ve(O){const J=O.matched[O.matched.length-1];if(J&&J.redirect){const{redirect:z}=J;let ne=typeof z=="function"?z(O):z;return typeof ne=="string"&&(ne=ne.includes("?")||ne.includes("#")?ne=H(ne):{path:ne},ne.params={}),Oe({query:O.query,hash:O.hash,params:"path"in ne?{}:O.params},ne)}}function R(O,J){const z=h=j(O),ne=c.value,be=O.state,T=O.force,A=O.replace===!0,S=ve(z);if(S)return R(Oe(H(S),{state:typeof S=="object"?Oe({},be,S.state):be,force:T,replace:A}),J||z);const D=z;D.redirectedFrom=J;let x;return!T&&a1(s,ne,z)&&(x=nr(16,{to:D,from:ne}),Mt(ne,ne,!0,!1)),(x?Promise.resolve(x):E(D,ne)).catch(L=>dn(L)?dn(L,2)?L:Ut(L):Te(L,D,ne)).then(L=>{if(L){if(dn(L,2))return R(Oe({replace:A},H(L.to),{state:typeof L.to=="object"?Oe({},be,L.to.state):be,force:T}),J||D)}else L=b(D,ne,!0,A,be);return _(D,ne,L),L})}function I(O,J){const z=X(O,J);return z?Promise.reject(z):Promise.resolve()}function w(O){const J=Pn.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(O):O()}function E(O,J){let z;const[ne,be,T]=iy(O,J);z=Vl(ne.reverse(),"beforeRouteLeave",O,J);for(const S of ne)S.leaveGuards.forEach(D=>{z.push(xn(D,O,J))});const A=I.bind(null,O,J);return z.push(A),tt(z).then(()=>{z=[];for(const S of i.list())z.push(xn(S,O,J));return z.push(A),tt(z)}).then(()=>{z=Vl(be,"beforeRouteUpdate",O,J);for(const S of be)S.updateGuards.forEach(D=>{z.push(xn(D,O,J))});return z.push(A),tt(z)}).then(()=>{z=[];for(const S of T)if(S.beforeEnter)if(Kt(S.beforeEnter))for(const D of S.beforeEnter)z.push(xn(D,O,J));else z.push(xn(S.beforeEnter,O,J));return z.push(A),tt(z)}).then(()=>(O.matched.forEach(S=>S.enterCallbacks={}),z=Vl(T,"beforeRouteEnter",O,J),z.push(A),tt(z))).then(()=>{z=[];for(const S of a.list())z.push(xn(S,O,J));return z.push(A),tt(z)}).catch(S=>dn(S,8)?S:Promise.reject(S))}function _(O,J,z){l.list().forEach(ne=>w(()=>ne(O,J,z)))}function b(O,J,z,ne,be){const T=X(O,J);if(T)return T;const A=J===Nn,S=Ls?history.state:{};z&&(ne||A?r.replace(O.fullPath,Oe({scroll:A&&S&&S.scroll},be)):r.push(O.fullPath,be)),c.value=O,Mt(O,J,z,A),Ut()}let y;function rt(){y||(y=r.listen((O,J,z)=>{if(!Qt.listening)return;const ne=j(O),be=ve(ne);if(be){R(Oe(be,{replace:!0}),ne).catch(Zr);return}h=ne;const T=c.value;Ls&&g1(dd(T.fullPath,z.delta),ma()),E(ne,T).catch(A=>dn(A,12)?A:dn(A,2)?(R(A.to,ne).then(S=>{dn(S,20)&&!z.delta&&z.type===li.pop&&r.go(-1,!1)}).catch(Zr),Promise.reject()):(z.delta&&r.go(-z.delta,!1),Te(A,ne,T))).then(A=>{A=A||b(ne,T,!1),A&&(z.delta&&!dn(A,8)?r.go(-z.delta,!1):z.type===li.pop&&dn(A,20)&&r.go(-1,!1)),_(ne,T,A)}).catch(Zr)}))}let Ot=Ur(),Ge=Ur(),Se;function Te(O,J,z){Ut(O);const ne=Ge.list();return ne.length?ne.forEach(be=>be(O,J,z)):console.error(O),Promise.reject(O)}function Vt(){return Se&&c.value!==Nn?Promise.resolve():new Promise((O,J)=>{Ot.add([O,J])})}function Ut(O){return Se||(Se=!O,rt(),Ot.list().forEach(([J,z])=>O?z(O):J()),Ot.reset()),O}function Mt(O,J,z,ne){const{scrollBehavior:be}=t;if(!Ls||!be)return Promise.resolve();const T=!z&&m1(dd(O.fullPath,0))||(ne||!z)&&history.state&&history.state.scroll||null;return fp().then(()=>be(O,J,T)).then(A=>A&&p1(A)).catch(A=>Te(A,O,J))}const je=O=>r.go(O);let $e;const Pn=new Set,Qt={currentRoute:c,listening:!0,addRoute:C,removeRoute:V,hasRoute:N,getRoutes:M,resolve:j,options:t,push:Q,replace:Pe,go:je,back:()=>je(-1),forward:()=>je(1),beforeEach:i.add,beforeResolve:a.add,afterEach:l.add,onError:Ge.add,isReady:Vt,install(O){const J=this;O.component("RouterLink",X1),O.component("RouterView",sy),O.config.globalProperties.$router=J,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>Ye(c)}),Ls&&!$e&&c.value===Nn&&($e=!0,Q(r.location).catch(be=>{}));const z={};for(const be in Nn)Object.defineProperty(z,be,{get:()=>c.value[be],enumerable:!0});O.provide(Zc,J),O.provide(Gp,rp(z)),O.provide(oc,c);const ne=O.unmount;Pn.add(O),O.unmount=function(){Pn.delete(O),Pn.size<1&&(h=Nn,y&&y(),y=null,c.value=Nn,$e=!1,Se=!1),ne()}}};function tt(O){return O.reduce((J,z)=>J.then(()=>w(z)),Promise.resolve())}return Qt}function iy(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let a=0;a<i;a++){const l=e.matched[a];l&&(t.matched.find(h=>tr(h,l))?s.push(l):n.push(l));const c=t.matched[a];c&&(e.matched.find(h=>tr(h,c))||r.push(c))}return[n,s,r]}const oy="/Portfolio/assets/me-portrait-mDlZHhdr.jpg",ay="data:image/svg+xml,%3csvg%20width='16'%20height='12'%20viewBox='0%200%2016%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M3.33331%201.5V10.5H7.33331V8.75H8.66665V10.5H12.6666V1.5H3.33331ZM4.66665%202.5H5.99998V3.5H4.66665V2.5ZM7.33331%202.5H8.66665V3.5H7.33331V2.5ZM9.99998%202.5H11.3333V3.5H9.99998V2.5ZM4.66665%204.5H5.99998V5.5H4.66665V4.5ZM7.33331%204.5H8.66665V5.5H7.33331V4.5ZM9.99998%204.5H11.3333V5.5H9.99998V4.5ZM4.66665%206.5H5.99998V7.5H4.66665V6.5ZM7.33331%206.5H8.66665V7.5H7.33331V6.5ZM9.99998%206.5H11.3333V7.5H9.99998V6.5ZM4.66665%208.5H5.99998V9.5H4.66665V8.5ZM9.99998%208.5H11.3333V9.5H9.99998V8.5Z'%20fill='%23A7A7A7'/%3e%3c/svg%3e",ly="data:image/svg+xml,%3csvg%20width='16'%20height='12'%20viewBox='0%200%2016%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%206.75C7.50555%206.75%207.0222%206.64003%206.61108%206.43401C6.19995%206.22798%205.87952%205.93514%205.6903%205.59253C5.50108%205.24992%205.45157%204.87292%205.54804%204.50921C5.6445%204.14549%205.8826%203.8114%206.23223%203.54918C6.58187%203.28695%207.02732%203.10838%207.51228%203.03603C7.99723%202.96368%208.4999%203.00081%208.95671%203.14273C9.41353%203.28464%209.80397%203.52496%2010.0787%203.83331C10.3534%204.14165%2010.5%204.50416%2010.5%204.875C10.4992%205.3721%2010.2356%205.84867%209.76689%206.20017C9.29822%206.55167%208.6628%206.74941%208%206.75ZM8%203.75C7.70333%203.75%207.41332%203.81598%207.16665%203.9396C6.91997%204.06321%206.72771%204.23892%206.61418%204.44448C6.50065%204.65005%206.47095%204.87625%206.52882%205.09448C6.5867%205.31271%206.72956%205.51316%206.93934%205.6705C7.14912%205.82783%207.41639%205.93498%207.70737%205.97838C7.99834%206.02179%208.29994%205.99951%208.57403%205.91437C8.84812%205.82922%209.08238%205.68502%209.24721%205.50002C9.41203%205.31501%209.5%205.09751%209.5%204.875C9.4996%204.57672%209.34144%204.29075%209.06022%204.07983C8.779%203.86892%208.3977%203.7503%208%203.75Z'%20fill='%23A7A7A7'/%3e%3cpath%20d='M8.00001%2011.25L3.78201%207.51912C3.7234%207.4631%203.66539%207.40673%203.60801%207.35C2.8875%206.63817%202.49826%205.76871%202.50001%204.875C2.50001%203.78098%203.07947%202.73177%204.11092%201.95818C5.14237%201.1846%206.54132%200.75%208.00001%200.75C9.4587%200.75%2010.8576%201.1846%2011.8891%201.95818C12.9205%202.73177%2013.5%203.78098%2013.5%204.875C13.5018%205.7683%2013.1127%206.63737%2012.3925%207.34888L12.392%207.35C12.392%207.35%2012.242%207.49775%2012.2195%207.51763L8.00001%2011.25ZM4.40601%206.89813C4.40701%206.89813%204.52301%207.01362%204.54951%207.03837L8.00001%2010.0905L11.455%207.03425C11.477%207.01362%2011.594%206.89738%2011.5945%206.897C12.1831%206.31542%2012.5012%205.60514%2012.5%204.875C12.5%203.97989%2012.0259%203.12145%2011.182%202.48851C10.3381%201.85558%209.19348%201.5%208.00001%201.5C6.80653%201.5%205.66194%201.85558%204.81803%202.48851C3.97411%203.12145%203.50001%203.97989%203.50001%204.875C3.49896%205.60559%203.81739%206.31628%204.40651%206.89813H4.40601Z'%20fill='%23A7A7A7'/%3e%3c/svg%3e",cy="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAMCAYAAABr5z2BAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADCSURBVHgBtVK7DcIwELWdJqkIG4QRmADYgDZKwSpsEqjckgnIBoQJwgaYzo1t3kk2QigkEZ/X3Dvdu3d30jH2JXggZVmmSZJsjDHTvoYoiq7OuSrP8wvlIhTiOD6hsGYDgGaJcAy5eKpl1tq9EGL3rplq0FSk7TL4CJ0GnPO2KIotJtbgDXG6fbQBGlOKuDeFgfL8NtoAdyq/iSITzyd/2eDxB1LKFqHB9DPrAcwXCBn+YPa6wQrTajYAaA5a6zn7Fe6FoUl+LoPqfgAAAABJRU5ErkJggg==",_a="data:image/svg+xml,%3csvg%20width='30'%20height='30'%20viewBox='0%200%2030%2030'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M15%200C6.7125%200%200%206.7125%200%2015C0%2021.6375%204.29375%2027.2437%2010.2563%2029.2313C11.0063%2029.3625%2011.2875%2028.9125%2011.2875%2028.5188C11.2875%2028.1625%2011.2688%2026.9813%2011.2688%2025.725C7.5%2026.4188%206.525%2024.8062%206.225%2023.9625C6.05625%2023.5312%205.325%2022.2%204.6875%2021.8438C4.1625%2021.5625%203.4125%2020.8687%204.66875%2020.85C5.85%2020.8313%206.69375%2021.9375%206.975%2022.3875C8.325%2024.6562%2010.4812%2024.0187%2011.3438%2023.625C11.475%2022.65%2011.8688%2021.9937%2012.3%2021.6187C8.9625%2021.2437%205.475%2019.95%205.475%2014.2125C5.475%2012.5813%206.05625%2011.2313%207.0125%2010.1813C6.8625%209.80625%206.3375%208.26875%207.1625%206.20625C7.1625%206.20625%208.41875%205.8125%2011.2875%207.74375C12.4875%207.40625%2013.7625%207.2375%2015.0375%207.2375C16.3125%207.2375%2017.5875%207.40625%2018.7875%207.74375C21.6562%205.79375%2022.9125%206.20625%2022.9125%206.20625C23.7375%208.26875%2023.2125%209.80625%2023.0625%2010.1813C24.0188%2011.2313%2024.6%2012.5625%2024.6%2014.2125C24.6%2019.9688%2021.0938%2021.2437%2017.7563%2021.6187C18.3%2022.0875%2018.7688%2022.9875%2018.7688%2024.3937C18.7688%2026.4%2018.75%2028.0125%2018.75%2028.5188C18.75%2028.9125%2019.0312%2029.3813%2019.7812%2029.2313C22.759%2028.2259%2025.3465%2026.3121%2027.1796%2023.7592C29.0127%2021.2063%2029.9991%2018.1429%2030%2015C30%206.7125%2023.2875%200%2015%200Z'%20fill='%23A7A7A7'/%3e%3c/svg%3e",Qp="data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16.875%201.875C8.59152%201.875%201.875%208.59152%201.875%2016.875C1.875%2025.1585%208.59152%2031.875%2016.875%2031.875C25.1585%2031.875%2031.875%2025.1585%2031.875%2016.875C31.875%208.59152%2025.1585%201.875%2016.875%201.875ZM24.0837%2013.1819C24.0937%2013.3393%2024.0937%2013.5033%2024.0937%2013.6641C24.0937%2018.5792%2020.3504%2024.2411%2013.51%2024.2411C11.4007%2024.2411%209.44531%2023.6283%207.79799%2022.5737C8.09933%2022.6071%208.38728%2022.6205%208.69531%2022.6205C10.4364%2022.6205%2012.0368%2022.0312%2013.3125%2021.0335C11.6786%2021%2010.3058%2019.9286%209.83705%2018.4554C10.4096%2018.5391%2010.9252%2018.5391%2011.5145%2018.3884C10.6732%2018.2175%209.91699%2017.7605%209.37438%2017.0953C8.83178%2016.43%208.53623%2015.5973%208.53795%2014.7388V14.692C9.03013%2014.9699%209.60938%2015.1406%2010.2154%2015.1641C9.70595%2014.8245%209.28814%2014.3645%208.99903%2013.8249C8.70993%2013.2852%208.55845%2012.6825%208.55804%2012.0703C8.55804%2011.3772%208.73884%2010.7444%209.06362%2010.1953C9.99744%2011.3449%2011.1627%2012.2851%2012.4837%2012.9548C13.8047%2013.6245%2015.2518%2014.0088%2016.731%2014.0826C16.2054%2011.5547%2018.0938%209.50893%2020.3638%209.50893C21.4353%209.50893%2022.3996%209.95759%2023.0792%2010.6808C23.9196%2010.5234%2024.7232%2010.2087%2025.4397%209.78683C25.1618%2010.6473%2024.5792%2011.3739%2023.8058%2011.8326C24.5558%2011.7522%2025.279%2011.5446%2025.9487%2011.2533C25.4431%2011.9967%2024.8103%2012.6562%2024.0837%2013.1819Z'%20fill='%23A7A7A7'/%3e%3c/svg%3e",Zp="data:image/svg+xml,%3csvg%20width='30'%20height='30'%20viewBox='0%200%2030%2030'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_14_33)'%3e%3cpath%20d='M15.0001%200.599976C7.0471%200.599976%200.600098%207.04698%200.600098%2015C0.600098%2022.953%207.0471%2029.4%2015.0001%2029.4C22.9531%2029.4%2029.4001%2022.953%2029.4001%2015C29.4001%207.04698%2022.9531%200.599976%2015.0001%200.599976ZM11.4751%2020.9685H8.5591V11.5845H11.4751V20.9685ZM9.9991%2010.4325C9.0781%2010.4325%208.4826%209.77997%208.4826%208.97297C8.4826%208.14948%209.0961%207.51648%2010.0366%207.51648C10.9771%207.51648%2011.5531%208.14948%2011.5711%208.97297C11.5711%209.77997%2010.9771%2010.4325%209.9991%2010.4325ZM22.1251%2020.9685H19.2091V15.768C19.2091%2014.5575%2018.7861%2013.7355%2017.7316%2013.7355C16.9261%2013.7355%2016.4476%2014.292%2016.2361%2014.8275C16.1581%2015.018%2016.1386%2015.288%2016.1386%2015.5565V20.967H13.2211V14.577C13.2211%2013.4055%2013.1836%2012.426%2013.1446%2011.583H15.6781L15.8116%2012.8865H15.8701C16.2541%2012.2745%2017.1946%2011.3715%2018.7681%2011.3715C20.6866%2011.3715%2022.1251%2012.657%2022.1251%2015.42V20.9685Z'%20fill='%23A7A7A7'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_14_33'%3e%3crect%20width='30'%20height='30'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";var Cd={};/**
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
 */const Yp=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},uy=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],a=t[n++],l=t[n++],c=((r&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],a=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Jp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],a=r+1<t.length,l=a?t[r+1]:0,c=r+2<t.length,h=c?t[r+2]:0,f=i>>2,g=(i&3)<<4|l>>4;let p=(l&15)<<2|h>>6,C=h&63;c||(C=64,a||(p=64)),s.push(n[f],n[g],n[p],n[C])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Yp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):uy(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],l=r<t.length?n[t.charAt(r)]:0;++r;const h=r<t.length?n[t.charAt(r)]:64;++r;const g=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||l==null||h==null||g==null)throw new hy;const p=i<<2|l>>4;if(s.push(p),h!==64){const C=l<<4&240|h>>2;if(s.push(C),g!==64){const V=h<<6&192|g;s.push(V)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class hy extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const dy=function(t){const e=Yp(t);return Jp.encodeByteArray(e,!0)},Lo=function(t){return dy(t).replace(/\./g,"")},Xp=function(t){try{return Jp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function fy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const py=()=>fy().__FIREBASE_DEFAULTS__,gy=()=>{if(typeof process>"u"||typeof Cd>"u")return;const t=Cd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},my=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Xp(t[1]);return e&&JSON.parse(e)},ya=()=>{try{return py()||gy()||my()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},eg=t=>{var e,n;return(n=(e=ya())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},_y=t=>{const e=eg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},tg=()=>{var t;return(t=ya())===null||t===void 0?void 0:t.config},ng=t=>{var e;return(e=ya())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class yy{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function vy(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[Lo(JSON.stringify(n)),Lo(JSON.stringify(a)),l].join(".")}/**
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
 */function wt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ey(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(wt())}function wy(){var t;const e=(t=ya())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Iy(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ty(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ay(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function by(){const t=wt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Cy(){return!wy()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ry(){try{return typeof indexedDB=="object"}catch{return!1}}function Py(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const Sy="FirebaseError";class Rn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Sy,Object.setPrototypeOf(this,Rn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ai.prototype.create)}}class Ai{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],a=i?ky(i,s):"Error",l=`${this.serviceName}: ${a} (${r}).`;return new Rn(r,l,s)}}function ky(t,e){return t.replace(Vy,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Vy=/\{\$([^}]+)}/g;function Dy(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Uo(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],a=e[r];if(Rd(i)&&Rd(a)){if(!Uo(i,a))return!1}else if(i!==a)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Rd(t){return t!==null&&typeof t=="object"}/**
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
 */function bi(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function $r(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Hr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Ny(t,e){const n=new Oy(t,e);return n.subscribe.bind(n)}class Oy{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");My(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Dl),r.error===void 0&&(r.error=Dl),r.complete===void 0&&(r.complete=Dl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function My(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Dl(){}/**
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
 */function kt(t){return t&&t._delegate?t._delegate:t}class Is{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const us="[DEFAULT]";/**
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
 */class xy{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new yy;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Uy(e))try{this.getOrInitializeService({instanceIdentifier:us})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=us){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=us){return this.instances.has(e)}getOptions(e=us){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);s===l&&a.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const a=this.instances.get(r);return a&&e(a,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Ly(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=us){return this.component?this.component.multipleInstances?e:us:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ly(t){return t===us?void 0:t}function Uy(t){return t.instantiationMode==="EAGER"}/**
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
 */class Fy{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new xy(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ce||(Ce={}));const By={debug:Ce.DEBUG,verbose:Ce.VERBOSE,info:Ce.INFO,warn:Ce.WARN,error:Ce.ERROR,silent:Ce.SILENT},jy=Ce.INFO,$y={[Ce.DEBUG]:"log",[Ce.VERBOSE]:"log",[Ce.INFO]:"info",[Ce.WARN]:"warn",[Ce.ERROR]:"error"},Hy=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=$y[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Yc{constructor(e){this.name=e,this._logLevel=jy,this._logHandler=Hy,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?By[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ce.DEBUG,...e),this._logHandler(this,Ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ce.VERBOSE,...e),this._logHandler(this,Ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ce.INFO,...e),this._logHandler(this,Ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ce.WARN,...e),this._logHandler(this,Ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ce.ERROR,...e),this._logHandler(this,Ce.ERROR,...e)}}const qy=(t,e)=>e.some(n=>t instanceof n);let Pd,Sd;function Wy(){return Pd||(Pd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zy(){return Sd||(Sd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const sg=new WeakMap,ac=new WeakMap,rg=new WeakMap,Nl=new WeakMap,Jc=new WeakMap;function Ky(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",a)},i=()=>{n(qn(t.result)),r()},a=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&sg.set(n,t)}).catch(()=>{}),Jc.set(e,t),e}function Gy(t){if(ac.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",a),t.removeEventListener("abort",a)},i=()=>{n(),r()},a=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",a),t.addEventListener("abort",a)});ac.set(t,e)}let lc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ac.get(t);if(e==="objectStoreNames")return t.objectStoreNames||rg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return qn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Qy(t){lc=t(lc)}function Zy(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Ol(this),e,...n);return rg.set(s,e.sort?e.sort():[e]),qn(s)}:zy().includes(t)?function(...e){return t.apply(Ol(this),e),qn(sg.get(this))}:function(...e){return qn(t.apply(Ol(this),e))}}function Yy(t){return typeof t=="function"?Zy(t):(t instanceof IDBTransaction&&Gy(t),qy(t,Wy())?new Proxy(t,lc):t)}function qn(t){if(t instanceof IDBRequest)return Ky(t);if(Nl.has(t))return Nl.get(t);const e=Yy(t);return e!==t&&(Nl.set(t,e),Jc.set(e,t)),e}const Ol=t=>Jc.get(t);function Jy(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const a=indexedDB.open(t,e),l=qn(a);return s&&a.addEventListener("upgradeneeded",c=>{s(qn(a.result),c.oldVersion,c.newVersion,qn(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",h=>r(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const Xy=["get","getKey","getAll","getAllKeys","count"],ev=["put","add","delete","clear"],Ml=new Map;function kd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ml.get(e))return Ml.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=ev.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Xy.includes(n)))return;const i=async function(a,...l){const c=this.transaction(a,r?"readwrite":"readonly");let h=c.store;return s&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),r&&c.done]))[0]};return Ml.set(e,i),i}Qy(t=>({...t,get:(e,n,s)=>kd(e,n)||t.get(e,n,s),has:(e,n)=>!!kd(e,n)||t.has(e,n)}));/**
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
 */class tv{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(nv(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function nv(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const cc="@firebase/app",Vd="0.10.13";/**
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
 */const In=new Yc("@firebase/app"),sv="@firebase/app-compat",rv="@firebase/analytics-compat",iv="@firebase/analytics",ov="@firebase/app-check-compat",av="@firebase/app-check",lv="@firebase/auth",cv="@firebase/auth-compat",uv="@firebase/database",hv="@firebase/data-connect",dv="@firebase/database-compat",fv="@firebase/functions",pv="@firebase/functions-compat",gv="@firebase/installations",mv="@firebase/installations-compat",_v="@firebase/messaging",yv="@firebase/messaging-compat",vv="@firebase/performance",Ev="@firebase/performance-compat",wv="@firebase/remote-config",Iv="@firebase/remote-config-compat",Tv="@firebase/storage",Av="@firebase/storage-compat",bv="@firebase/firestore",Cv="@firebase/vertexai-preview",Rv="@firebase/firestore-compat",Pv="firebase",Sv="10.14.1";/**
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
 */const uc="[DEFAULT]",kv={[cc]:"fire-core",[sv]:"fire-core-compat",[iv]:"fire-analytics",[rv]:"fire-analytics-compat",[av]:"fire-app-check",[ov]:"fire-app-check-compat",[lv]:"fire-auth",[cv]:"fire-auth-compat",[uv]:"fire-rtdb",[hv]:"fire-data-connect",[dv]:"fire-rtdb-compat",[fv]:"fire-fn",[pv]:"fire-fn-compat",[gv]:"fire-iid",[mv]:"fire-iid-compat",[_v]:"fire-fcm",[yv]:"fire-fcm-compat",[vv]:"fire-perf",[Ev]:"fire-perf-compat",[wv]:"fire-rc",[Iv]:"fire-rc-compat",[Tv]:"fire-gcs",[Av]:"fire-gcs-compat",[bv]:"fire-fst",[Rv]:"fire-fst-compat",[Cv]:"fire-vertex","fire-js":"fire-js",[Pv]:"fire-js-all"};/**
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
 */const Fo=new Map,Vv=new Map,hc=new Map;function Dd(t,e){try{t.container.addComponent(e)}catch(n){In.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function sr(t){const e=t.name;if(hc.has(e))return In.debug(`There were multiple attempts to register component ${e}.`),!1;hc.set(e,t);for(const n of Fo.values())Dd(n,t);for(const n of Vv.values())Dd(n,t);return!0}function Xc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function gn(t){return t.settings!==void 0}/**
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
 */const Dv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Wn=new Ai("app","Firebase",Dv);/**
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
 */class Nv{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Is("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Wn.create("app-deleted",{appName:this._name})}}/**
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
 */const gr=Sv;function ig(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:uc,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Wn.create("bad-app-name",{appName:String(r)});if(n||(n=tg()),!n)throw Wn.create("no-options");const i=Fo.get(r);if(i){if(Uo(n,i.options)&&Uo(s,i.config))return i;throw Wn.create("duplicate-app",{appName:r})}const a=new Fy(r);for(const c of hc.values())a.addComponent(c);const l=new Nv(n,s,a);return Fo.set(r,l),l}function og(t=uc){const e=Fo.get(t);if(!e&&t===uc&&tg())return ig();if(!e)throw Wn.create("no-app",{appName:t});return e}function zn(t,e,n){var s;let r=(s=kv[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const l=[`Unable to register library "${r}" with version "${e}":`];i&&l.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),In.warn(l.join(" "));return}sr(new Is(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Ov="firebase-heartbeat-database",Mv=1,ci="firebase-heartbeat-store";let xl=null;function ag(){return xl||(xl=Jy(Ov,Mv,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ci)}catch(n){console.warn(n)}}}}).catch(t=>{throw Wn.create("idb-open",{originalErrorMessage:t.message})})),xl}async function xv(t){try{const n=(await ag()).transaction(ci),s=await n.objectStore(ci).get(lg(t));return await n.done,s}catch(e){if(e instanceof Rn)In.warn(e.message);else{const n=Wn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});In.warn(n.message)}}}async function Nd(t,e){try{const s=(await ag()).transaction(ci,"readwrite");await s.objectStore(ci).put(e,lg(t)),await s.done}catch(n){if(n instanceof Rn)In.warn(n.message);else{const s=Wn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});In.warn(s.message)}}}function lg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Lv=1024,Uv=30*24*60*60*1e3;class Fv{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new jv(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Od();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=Uv}),this._storage.overwrite(this._heartbeatsCache))}catch(s){In.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Od(),{heartbeatsToSend:s,unsentEntries:r}=Bv(this._heartbeatsCache.heartbeats),i=Lo(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return In.warn(n),""}}}function Od(){return new Date().toISOString().substring(0,10)}function Bv(t,e=Lv){const n=[];let s=t.slice();for(const r of t){const i=n.find(a=>a.agent===r.agent);if(i){if(i.dates.push(r.date),Md(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Md(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class jv{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ry()?Py().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await xv(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Nd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Nd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Md(t){return Lo(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function $v(t){sr(new Is("platform-logger",e=>new tv(e),"PRIVATE")),sr(new Is("heartbeat",e=>new Fv(e),"PRIVATE")),zn(cc,Vd,t),zn(cc,Vd,"esm2017"),zn("fire-js","")}$v("");var xd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var vs,cg;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(R,I){function w(){}w.prototype=I.prototype,R.D=I.prototype,R.prototype=new w,R.prototype.constructor=R,R.C=function(E,_,b){for(var y=Array(arguments.length-2),rt=2;rt<arguments.length;rt++)y[rt-2]=arguments[rt];return I.prototype[_].apply(E,y)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(R,I,w){w||(w=0);var E=Array(16);if(typeof I=="string")for(var _=0;16>_;++_)E[_]=I.charCodeAt(w++)|I.charCodeAt(w++)<<8|I.charCodeAt(w++)<<16|I.charCodeAt(w++)<<24;else for(_=0;16>_;++_)E[_]=I[w++]|I[w++]<<8|I[w++]<<16|I[w++]<<24;I=R.g[0],w=R.g[1],_=R.g[2];var b=R.g[3],y=I+(b^w&(_^b))+E[0]+3614090360&4294967295;I=w+(y<<7&4294967295|y>>>25),y=b+(_^I&(w^_))+E[1]+3905402710&4294967295,b=I+(y<<12&4294967295|y>>>20),y=_+(w^b&(I^w))+E[2]+606105819&4294967295,_=b+(y<<17&4294967295|y>>>15),y=w+(I^_&(b^I))+E[3]+3250441966&4294967295,w=_+(y<<22&4294967295|y>>>10),y=I+(b^w&(_^b))+E[4]+4118548399&4294967295,I=w+(y<<7&4294967295|y>>>25),y=b+(_^I&(w^_))+E[5]+1200080426&4294967295,b=I+(y<<12&4294967295|y>>>20),y=_+(w^b&(I^w))+E[6]+2821735955&4294967295,_=b+(y<<17&4294967295|y>>>15),y=w+(I^_&(b^I))+E[7]+4249261313&4294967295,w=_+(y<<22&4294967295|y>>>10),y=I+(b^w&(_^b))+E[8]+1770035416&4294967295,I=w+(y<<7&4294967295|y>>>25),y=b+(_^I&(w^_))+E[9]+2336552879&4294967295,b=I+(y<<12&4294967295|y>>>20),y=_+(w^b&(I^w))+E[10]+4294925233&4294967295,_=b+(y<<17&4294967295|y>>>15),y=w+(I^_&(b^I))+E[11]+2304563134&4294967295,w=_+(y<<22&4294967295|y>>>10),y=I+(b^w&(_^b))+E[12]+1804603682&4294967295,I=w+(y<<7&4294967295|y>>>25),y=b+(_^I&(w^_))+E[13]+4254626195&4294967295,b=I+(y<<12&4294967295|y>>>20),y=_+(w^b&(I^w))+E[14]+2792965006&4294967295,_=b+(y<<17&4294967295|y>>>15),y=w+(I^_&(b^I))+E[15]+1236535329&4294967295,w=_+(y<<22&4294967295|y>>>10),y=I+(_^b&(w^_))+E[1]+4129170786&4294967295,I=w+(y<<5&4294967295|y>>>27),y=b+(w^_&(I^w))+E[6]+3225465664&4294967295,b=I+(y<<9&4294967295|y>>>23),y=_+(I^w&(b^I))+E[11]+643717713&4294967295,_=b+(y<<14&4294967295|y>>>18),y=w+(b^I&(_^b))+E[0]+3921069994&4294967295,w=_+(y<<20&4294967295|y>>>12),y=I+(_^b&(w^_))+E[5]+3593408605&4294967295,I=w+(y<<5&4294967295|y>>>27),y=b+(w^_&(I^w))+E[10]+38016083&4294967295,b=I+(y<<9&4294967295|y>>>23),y=_+(I^w&(b^I))+E[15]+3634488961&4294967295,_=b+(y<<14&4294967295|y>>>18),y=w+(b^I&(_^b))+E[4]+3889429448&4294967295,w=_+(y<<20&4294967295|y>>>12),y=I+(_^b&(w^_))+E[9]+568446438&4294967295,I=w+(y<<5&4294967295|y>>>27),y=b+(w^_&(I^w))+E[14]+3275163606&4294967295,b=I+(y<<9&4294967295|y>>>23),y=_+(I^w&(b^I))+E[3]+4107603335&4294967295,_=b+(y<<14&4294967295|y>>>18),y=w+(b^I&(_^b))+E[8]+1163531501&4294967295,w=_+(y<<20&4294967295|y>>>12),y=I+(_^b&(w^_))+E[13]+2850285829&4294967295,I=w+(y<<5&4294967295|y>>>27),y=b+(w^_&(I^w))+E[2]+4243563512&4294967295,b=I+(y<<9&4294967295|y>>>23),y=_+(I^w&(b^I))+E[7]+1735328473&4294967295,_=b+(y<<14&4294967295|y>>>18),y=w+(b^I&(_^b))+E[12]+2368359562&4294967295,w=_+(y<<20&4294967295|y>>>12),y=I+(w^_^b)+E[5]+4294588738&4294967295,I=w+(y<<4&4294967295|y>>>28),y=b+(I^w^_)+E[8]+2272392833&4294967295,b=I+(y<<11&4294967295|y>>>21),y=_+(b^I^w)+E[11]+1839030562&4294967295,_=b+(y<<16&4294967295|y>>>16),y=w+(_^b^I)+E[14]+4259657740&4294967295,w=_+(y<<23&4294967295|y>>>9),y=I+(w^_^b)+E[1]+2763975236&4294967295,I=w+(y<<4&4294967295|y>>>28),y=b+(I^w^_)+E[4]+1272893353&4294967295,b=I+(y<<11&4294967295|y>>>21),y=_+(b^I^w)+E[7]+4139469664&4294967295,_=b+(y<<16&4294967295|y>>>16),y=w+(_^b^I)+E[10]+3200236656&4294967295,w=_+(y<<23&4294967295|y>>>9),y=I+(w^_^b)+E[13]+681279174&4294967295,I=w+(y<<4&4294967295|y>>>28),y=b+(I^w^_)+E[0]+3936430074&4294967295,b=I+(y<<11&4294967295|y>>>21),y=_+(b^I^w)+E[3]+3572445317&4294967295,_=b+(y<<16&4294967295|y>>>16),y=w+(_^b^I)+E[6]+76029189&4294967295,w=_+(y<<23&4294967295|y>>>9),y=I+(w^_^b)+E[9]+3654602809&4294967295,I=w+(y<<4&4294967295|y>>>28),y=b+(I^w^_)+E[12]+3873151461&4294967295,b=I+(y<<11&4294967295|y>>>21),y=_+(b^I^w)+E[15]+530742520&4294967295,_=b+(y<<16&4294967295|y>>>16),y=w+(_^b^I)+E[2]+3299628645&4294967295,w=_+(y<<23&4294967295|y>>>9),y=I+(_^(w|~b))+E[0]+4096336452&4294967295,I=w+(y<<6&4294967295|y>>>26),y=b+(w^(I|~_))+E[7]+1126891415&4294967295,b=I+(y<<10&4294967295|y>>>22),y=_+(I^(b|~w))+E[14]+2878612391&4294967295,_=b+(y<<15&4294967295|y>>>17),y=w+(b^(_|~I))+E[5]+4237533241&4294967295,w=_+(y<<21&4294967295|y>>>11),y=I+(_^(w|~b))+E[12]+1700485571&4294967295,I=w+(y<<6&4294967295|y>>>26),y=b+(w^(I|~_))+E[3]+2399980690&4294967295,b=I+(y<<10&4294967295|y>>>22),y=_+(I^(b|~w))+E[10]+4293915773&4294967295,_=b+(y<<15&4294967295|y>>>17),y=w+(b^(_|~I))+E[1]+2240044497&4294967295,w=_+(y<<21&4294967295|y>>>11),y=I+(_^(w|~b))+E[8]+1873313359&4294967295,I=w+(y<<6&4294967295|y>>>26),y=b+(w^(I|~_))+E[15]+4264355552&4294967295,b=I+(y<<10&4294967295|y>>>22),y=_+(I^(b|~w))+E[6]+2734768916&4294967295,_=b+(y<<15&4294967295|y>>>17),y=w+(b^(_|~I))+E[13]+1309151649&4294967295,w=_+(y<<21&4294967295|y>>>11),y=I+(_^(w|~b))+E[4]+4149444226&4294967295,I=w+(y<<6&4294967295|y>>>26),y=b+(w^(I|~_))+E[11]+3174756917&4294967295,b=I+(y<<10&4294967295|y>>>22),y=_+(I^(b|~w))+E[2]+718787259&4294967295,_=b+(y<<15&4294967295|y>>>17),y=w+(b^(_|~I))+E[9]+3951481745&4294967295,R.g[0]=R.g[0]+I&4294967295,R.g[1]=R.g[1]+(_+(y<<21&4294967295|y>>>11))&4294967295,R.g[2]=R.g[2]+_&4294967295,R.g[3]=R.g[3]+b&4294967295}s.prototype.u=function(R,I){I===void 0&&(I=R.length);for(var w=I-this.blockSize,E=this.B,_=this.h,b=0;b<I;){if(_==0)for(;b<=w;)r(this,R,b),b+=this.blockSize;if(typeof R=="string"){for(;b<I;)if(E[_++]=R.charCodeAt(b++),_==this.blockSize){r(this,E),_=0;break}}else for(;b<I;)if(E[_++]=R[b++],_==this.blockSize){r(this,E),_=0;break}}this.h=_,this.o+=I},s.prototype.v=function(){var R=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);R[0]=128;for(var I=1;I<R.length-8;++I)R[I]=0;var w=8*this.o;for(I=R.length-8;I<R.length;++I)R[I]=w&255,w/=256;for(this.u(R),R=Array(16),I=w=0;4>I;++I)for(var E=0;32>E;E+=8)R[w++]=this.g[I]>>>E&255;return R};function i(R,I){var w=l;return Object.prototype.hasOwnProperty.call(w,R)?w[R]:w[R]=I(R)}function a(R,I){this.h=I;for(var w=[],E=!0,_=R.length-1;0<=_;_--){var b=R[_]|0;E&&b==I||(w[_]=b,E=!1)}this.g=w}var l={};function c(R){return-128<=R&&128>R?i(R,function(I){return new a([I|0],0>I?-1:0)}):new a([R|0],0>R?-1:0)}function h(R){if(isNaN(R)||!isFinite(R))return g;if(0>R)return N(h(-R));for(var I=[],w=1,E=0;R>=w;E++)I[E]=R/w|0,w*=4294967296;return new a(I,0)}function f(R,I){if(R.length==0)throw Error("number format error: empty string");if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(R.charAt(0)=="-")return N(f(R.substring(1),I));if(0<=R.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=h(Math.pow(I,8)),E=g,_=0;_<R.length;_+=8){var b=Math.min(8,R.length-_),y=parseInt(R.substring(_,_+b),I);8>b?(b=h(Math.pow(I,b)),E=E.j(b).add(h(y))):(E=E.j(w),E=E.add(h(y)))}return E}var g=c(0),p=c(1),C=c(16777216);t=a.prototype,t.m=function(){if(M(this))return-N(this).m();for(var R=0,I=1,w=0;w<this.g.length;w++){var E=this.i(w);R+=(0<=E?E:4294967296+E)*I,I*=4294967296}return R},t.toString=function(R){if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(V(this))return"0";if(M(this))return"-"+N(this).toString(R);for(var I=h(Math.pow(R,6)),w=this,E="";;){var _=Q(w,I).g;w=j(w,_.j(I));var b=((0<w.g.length?w.g[0]:w.h)>>>0).toString(R);if(w=_,V(w))return b+E;for(;6>b.length;)b="0"+b;E=b+E}},t.i=function(R){return 0>R?0:R<this.g.length?this.g[R]:this.h};function V(R){if(R.h!=0)return!1;for(var I=0;I<R.g.length;I++)if(R.g[I]!=0)return!1;return!0}function M(R){return R.h==-1}t.l=function(R){return R=j(this,R),M(R)?-1:V(R)?0:1};function N(R){for(var I=R.g.length,w=[],E=0;E<I;E++)w[E]=~R.g[E];return new a(w,~R.h).add(p)}t.abs=function(){return M(this)?N(this):this},t.add=function(R){for(var I=Math.max(this.g.length,R.g.length),w=[],E=0,_=0;_<=I;_++){var b=E+(this.i(_)&65535)+(R.i(_)&65535),y=(b>>>16)+(this.i(_)>>>16)+(R.i(_)>>>16);E=y>>>16,b&=65535,y&=65535,w[_]=y<<16|b}return new a(w,w[w.length-1]&-2147483648?-1:0)};function j(R,I){return R.add(N(I))}t.j=function(R){if(V(this)||V(R))return g;if(M(this))return M(R)?N(this).j(N(R)):N(N(this).j(R));if(M(R))return N(this.j(N(R)));if(0>this.l(C)&&0>R.l(C))return h(this.m()*R.m());for(var I=this.g.length+R.g.length,w=[],E=0;E<2*I;E++)w[E]=0;for(E=0;E<this.g.length;E++)for(var _=0;_<R.g.length;_++){var b=this.i(E)>>>16,y=this.i(E)&65535,rt=R.i(_)>>>16,Ot=R.i(_)&65535;w[2*E+2*_]+=y*Ot,H(w,2*E+2*_),w[2*E+2*_+1]+=b*Ot,H(w,2*E+2*_+1),w[2*E+2*_+1]+=y*rt,H(w,2*E+2*_+1),w[2*E+2*_+2]+=b*rt,H(w,2*E+2*_+2)}for(E=0;E<I;E++)w[E]=w[2*E+1]<<16|w[2*E];for(E=I;E<2*I;E++)w[E]=0;return new a(w,0)};function H(R,I){for(;(R[I]&65535)!=R[I];)R[I+1]+=R[I]>>>16,R[I]&=65535,I++}function X(R,I){this.g=R,this.h=I}function Q(R,I){if(V(I))throw Error("division by zero");if(V(R))return new X(g,g);if(M(R))return I=Q(N(R),I),new X(N(I.g),N(I.h));if(M(I))return I=Q(R,N(I)),new X(N(I.g),I.h);if(30<R.g.length){if(M(R)||M(I))throw Error("slowDivide_ only works with positive integers.");for(var w=p,E=I;0>=E.l(R);)w=Pe(w),E=Pe(E);var _=ve(w,1),b=ve(E,1);for(E=ve(E,2),w=ve(w,2);!V(E);){var y=b.add(E);0>=y.l(R)&&(_=_.add(w),b=y),E=ve(E,1),w=ve(w,1)}return I=j(R,_.j(I)),new X(_,I)}for(_=g;0<=R.l(I);){for(w=Math.max(1,Math.floor(R.m()/I.m())),E=Math.ceil(Math.log(w)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),b=h(w),y=b.j(I);M(y)||0<y.l(R);)w-=E,b=h(w),y=b.j(I);V(b)&&(b=p),_=_.add(b),R=j(R,y)}return new X(_,R)}t.A=function(R){return Q(this,R).h},t.and=function(R){for(var I=Math.max(this.g.length,R.g.length),w=[],E=0;E<I;E++)w[E]=this.i(E)&R.i(E);return new a(w,this.h&R.h)},t.or=function(R){for(var I=Math.max(this.g.length,R.g.length),w=[],E=0;E<I;E++)w[E]=this.i(E)|R.i(E);return new a(w,this.h|R.h)},t.xor=function(R){for(var I=Math.max(this.g.length,R.g.length),w=[],E=0;E<I;E++)w[E]=this.i(E)^R.i(E);return new a(w,this.h^R.h)};function Pe(R){for(var I=R.g.length+1,w=[],E=0;E<I;E++)w[E]=R.i(E)<<1|R.i(E-1)>>>31;return new a(w,R.h)}function ve(R,I){var w=I>>5;I%=32;for(var E=R.g.length-w,_=[],b=0;b<E;b++)_[b]=0<I?R.i(b+w)>>>I|R.i(b+w+1)<<32-I:R.i(b+w);return new a(_,R.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,cg=s,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,vs=a}).apply(typeof xd<"u"?xd:typeof self<"u"?self:typeof window<"u"?window:{});var oo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ug,qr,hg,vo,dc,dg,fg,pg;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,d){return o==Array.prototype||o==Object.prototype||(o[u]=d.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof oo=="object"&&oo];for(var u=0;u<o.length;++u){var d=o[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var s=n(this);function r(o,u){if(u)e:{var d=s;o=o.split(".");for(var m=0;m<o.length-1;m++){var P=o[m];if(!(P in d))break e;d=d[P]}o=o[o.length-1],m=d[o],u=u(m),u!=m&&u!=null&&e(d,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var d=0,m=!1,P={next:function(){if(!m&&d<o.length){var k=d++;return{value:u(k,o[k]),done:!1}}return m=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}r("Array.prototype.values",function(o){return o||function(){return i(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function f(o,u,d){return o.call.apply(o.bind,arguments)}function g(o,u,d){if(!o)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,m),o.apply(u,P)}}return function(){return o.apply(u,arguments)}}function p(o,u,d){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:g,p.apply(null,arguments)}function C(o,u){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),o.apply(this,m)}}function V(o,u){function d(){}d.prototype=u.prototype,o.aa=u.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(m,P,k){for(var q=Array(arguments.length-2),xe=2;xe<arguments.length;xe++)q[xe-2]=arguments[xe];return u.prototype[P].apply(m,q)}}function M(o){const u=o.length;if(0<u){const d=Array(u);for(let m=0;m<u;m++)d[m]=o[m];return d}return[]}function N(o,u){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(c(m)){const P=o.length||0,k=m.length||0;o.length=P+k;for(let q=0;q<k;q++)o[P+q]=m[q]}else o.push(m)}}class j{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function H(o){return/^[\s\xa0]*$/.test(o)}function X(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function Q(o){return Q[" "](o),o}Q[" "]=function(){};var Pe=X().indexOf("Gecko")!=-1&&!(X().toLowerCase().indexOf("webkit")!=-1&&X().indexOf("Edge")==-1)&&!(X().indexOf("Trident")!=-1||X().indexOf("MSIE")!=-1)&&X().indexOf("Edge")==-1;function ve(o,u,d){for(const m in o)u.call(d,o[m],m,o)}function R(o,u){for(const d in o)u.call(void 0,o[d],d,o)}function I(o){const u={};for(const d in o)u[d]=o[d];return u}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(o,u){let d,m;for(let P=1;P<arguments.length;P++){m=arguments[P];for(d in m)o[d]=m[d];for(let k=0;k<w.length;k++)d=w[k],Object.prototype.hasOwnProperty.call(m,d)&&(o[d]=m[d])}}function _(o){var u=1;o=o.split(":");const d=[];for(;0<u&&o.length;)d.push(o.shift()),u--;return o.length&&d.push(o.join(":")),d}function b(o){l.setTimeout(()=>{throw o},0)}function y(){var o=Vt;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class rt{constructor(){this.h=this.g=null}add(u,d){const m=Ot.get();m.set(u,d),this.h?this.h.next=m:this.g=m,this.h=m}}var Ot=new j(()=>new Ge,o=>o.reset());class Ge{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Se,Te=!1,Vt=new rt,Ut=()=>{const o=l.Promise.resolve(void 0);Se=()=>{o.then(Mt)}};var Mt=()=>{for(var o;o=y();){try{o.h.call(o.g)}catch(d){b(d)}var u=Ot;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}Te=!1};function je(){this.s=this.s,this.C=this.C}je.prototype.s=!1,je.prototype.ma=function(){this.s||(this.s=!0,this.N())},je.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function $e(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}$e.prototype.h=function(){this.defaultPrevented=!0};var Pn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};l.addEventListener("test",d,u),l.removeEventListener("test",d,u)}catch{}return o}();function Qt(o,u){if($e.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,m=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(Pe){e:{try{Q(u.nodeName);var P=!0;break e}catch{}P=!1}P||(u=null)}}else d=="mouseover"?u=o.fromElement:d=="mouseout"&&(u=o.toElement);this.relatedTarget=u,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:tt[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Qt.aa.h.call(this)}}V(Qt,$e);var tt={2:"touch",3:"pen",4:"mouse"};Qt.prototype.h=function(){Qt.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var O="closure_listenable_"+(1e6*Math.random()|0),J=0;function z(o,u,d,m,P){this.listener=o,this.proxy=null,this.src=u,this.type=d,this.capture=!!m,this.ha=P,this.key=++J,this.da=this.fa=!1}function ne(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function be(o){this.src=o,this.g={},this.h=0}be.prototype.add=function(o,u,d,m,P){var k=o.toString();o=this.g[k],o||(o=this.g[k]=[],this.h++);var q=A(o,u,m,P);return-1<q?(u=o[q],d||(u.fa=!1)):(u=new z(u,this.src,k,!!m,P),u.fa=d,o.push(u)),u};function T(o,u){var d=u.type;if(d in o.g){var m=o.g[d],P=Array.prototype.indexOf.call(m,u,void 0),k;(k=0<=P)&&Array.prototype.splice.call(m,P,1),k&&(ne(u),o.g[d].length==0&&(delete o.g[d],o.h--))}}function A(o,u,d,m){for(var P=0;P<o.length;++P){var k=o[P];if(!k.da&&k.listener==u&&k.capture==!!d&&k.ha==m)return P}return-1}var S="closure_lm_"+(1e6*Math.random()|0),D={};function x(o,u,d,m,P){if(m&&m.once)return $(o,u,d,m,P);if(Array.isArray(u)){for(var k=0;k<u.length;k++)x(o,u[k],d,m,P);return null}return d=Ee(d),o&&o[O]?o.K(u,d,h(m)?!!m.capture:!!m,P):L(o,u,d,!1,m,P)}function L(o,u,d,m,P,k){if(!u)throw Error("Invalid event type");var q=h(P)?!!P.capture:!!P,xe=se(o);if(xe||(o[S]=xe=new be(o)),d=xe.add(u,d,m,q,k),d.proxy)return d;if(m=Z(),d.proxy=m,m.src=o,m.listener=d,o.addEventListener)Pn||(P=q),P===void 0&&(P=!1),o.addEventListener(u.toString(),m,P);else if(o.attachEvent)o.attachEvent(re(u.toString()),m);else if(o.addListener&&o.removeListener)o.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Z(){function o(d){return u.call(o.src,o.listener,d)}const u=ee;return o}function $(o,u,d,m,P){if(Array.isArray(u)){for(var k=0;k<u.length;k++)$(o,u[k],d,m,P);return null}return d=Ee(d),o&&o[O]?o.L(u,d,h(m)?!!m.capture:!!m,P):L(o,u,d,!0,m,P)}function W(o,u,d,m,P){if(Array.isArray(u))for(var k=0;k<u.length;k++)W(o,u[k],d,m,P);else m=h(m)?!!m.capture:!!m,d=Ee(d),o&&o[O]?(o=o.i,u=String(u).toString(),u in o.g&&(k=o.g[u],d=A(k,d,m,P),-1<d&&(ne(k[d]),Array.prototype.splice.call(k,d,1),k.length==0&&(delete o.g[u],o.h--)))):o&&(o=se(o))&&(u=o.g[u.toString()],o=-1,u&&(o=A(u,d,m,P)),(d=-1<o?u[o]:null)&&F(d))}function F(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[O])T(u.i,o);else{var d=o.type,m=o.proxy;u.removeEventListener?u.removeEventListener(d,m,o.capture):u.detachEvent?u.detachEvent(re(d),m):u.addListener&&u.removeListener&&u.removeListener(m),(d=se(u))?(T(d,o),d.h==0&&(d.src=null,u[S]=null)):ne(o)}}}function re(o){return o in D?D[o]:D[o]="on"+o}function ee(o,u){if(o.da)o=!0;else{u=new Qt(u,this);var d=o.listener,m=o.ha||o.src;o.fa&&F(o),o=d.call(m,u)}return o}function se(o){return o=o[S],o instanceof be?o:null}var ue="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ee(o){return typeof o=="function"?o:(o[ue]||(o[ue]=function(u){return o.handleEvent(u)}),o[ue])}function ge(){je.call(this),this.i=new be(this),this.M=this,this.F=null}V(ge,je),ge.prototype[O]=!0,ge.prototype.removeEventListener=function(o,u,d,m){W(this,o,u,d,m)};function de(o,u){var d,m=o.F;if(m)for(d=[];m;m=m.F)d.push(m);if(o=o.M,m=u.type||u,typeof u=="string")u=new $e(u,o);else if(u instanceof $e)u.target=u.target||o;else{var P=u;u=new $e(m,o),E(u,P)}if(P=!0,d)for(var k=d.length-1;0<=k;k--){var q=u.g=d[k];P=Ue(q,m,!0,u)&&P}if(q=u.g=o,P=Ue(q,m,!0,u)&&P,P=Ue(q,m,!1,u)&&P,d)for(k=0;k<d.length;k++)q=u.g=d[k],P=Ue(q,m,!1,u)&&P}ge.prototype.N=function(){if(ge.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var d=o.g[u],m=0;m<d.length;m++)ne(d[m]);delete o.g[u],o.h--}}this.F=null},ge.prototype.K=function(o,u,d,m){return this.i.add(String(o),u,!1,d,m)},ge.prototype.L=function(o,u,d,m){return this.i.add(String(o),u,!0,d,m)};function Ue(o,u,d,m){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var P=!0,k=0;k<u.length;++k){var q=u[k];if(q&&!q.da&&q.capture==d){var xe=q.listener,it=q.ha||q.src;q.fa&&T(o.i,q),P=xe.call(it,m)!==!1&&P}}return P&&!m.defaultPrevented}function Ct(o,u,d){if(typeof o=="function")d&&(o=p(o,d));else if(o&&typeof o.handleEvent=="function")o=p(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(o,u||0)}function cn(o){o.g=Ct(()=>{o.g=null,o.i&&(o.i=!1,cn(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class Li extends je{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:cn(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ft(o){je.call(this),this.h=o,this.g={}}V(Ft,je);var Tr=[];function dt(o){ve(o.g,function(u,d){this.g.hasOwnProperty(d)&&F(u)},o),o.g={}}Ft.prototype.N=function(){Ft.aa.N.call(this),dt(this)},Ft.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Rt=l.JSON.stringify,Ui=l.JSON.parse,dm=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function ll(){}ll.prototype.h=null;function Fu(o){return o.h||(o.h=o.i())}function Bu(){}var Ar={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function cl(){$e.call(this,"d")}V(cl,$e);function ul(){$e.call(this,"c")}V(ul,$e);var rs={},ju=null;function Fi(){return ju=ju||new ge}rs.La="serverreachability";function $u(o){$e.call(this,rs.La,o)}V($u,$e);function br(o){const u=Fi();de(u,new $u(u))}rs.STAT_EVENT="statevent";function Hu(o,u){$e.call(this,rs.STAT_EVENT,o),this.stat=u}V(Hu,$e);function It(o){const u=Fi();de(u,new Hu(u,o))}rs.Ma="timingevent";function qu(o,u){$e.call(this,rs.Ma,o),this.size=u}V(qu,$e);function Cr(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},u)}function Rr(){this.g=!0}Rr.prototype.xa=function(){this.g=!1};function fm(o,u,d,m,P,k){o.info(function(){if(o.g)if(k)for(var q="",xe=k.split("&"),it=0;it<xe.length;it++){var Ve=xe[it].split("=");if(1<Ve.length){var ft=Ve[0];Ve=Ve[1];var pt=ft.split("_");q=2<=pt.length&&pt[1]=="type"?q+(ft+"="+Ve+"&"):q+(ft+"=redacted&")}}else q=null;else q=k;return"XMLHTTP REQ ("+m+") [attempt "+P+"]: "+u+`
`+d+`
`+q})}function pm(o,u,d,m,P,k,q){o.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+P+"]: "+u+`
`+d+`
`+k+" "+q})}function Ds(o,u,d,m){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+mm(o,d)+(m?" "+m:"")})}function gm(o,u){o.info(function(){return"TIMEOUT: "+u})}Rr.prototype.info=function(){};function mm(o,u){if(!o.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var m=d[o];if(!(2>m.length)){var P=m[1];if(Array.isArray(P)&&!(1>P.length)){var k=P[0];if(k!="noop"&&k!="stop"&&k!="close")for(var q=1;q<P.length;q++)P[q]=""}}}}return Rt(d)}catch{return u}}var Bi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Wu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},hl;function ji(){}V(ji,ll),ji.prototype.g=function(){return new XMLHttpRequest},ji.prototype.i=function(){return{}},hl=new ji;function Sn(o,u,d,m){this.j=o,this.i=u,this.l=d,this.R=m||1,this.U=new Ft(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new zu}function zu(){this.i=null,this.g="",this.h=!1}var Ku={},dl={};function fl(o,u,d){o.L=1,o.v=Wi(un(u)),o.m=d,o.P=!0,Gu(o,null)}function Gu(o,u){o.F=Date.now(),$i(o),o.A=un(o.v);var d=o.A,m=o.R;Array.isArray(m)||(m=[String(m)]),lh(d.i,"t",m),o.C=0,d=o.j.J,o.h=new zu,o.g=Ch(o.j,d?u:null,!o.m),0<o.O&&(o.M=new Li(p(o.Y,o,o.g),o.O)),u=o.U,d=o.g,m=o.ca;var P="readystatechange";Array.isArray(P)||(P&&(Tr[0]=P.toString()),P=Tr);for(var k=0;k<P.length;k++){var q=x(d,P[k],m||u.handleEvent,!1,u.h||u);if(!q)break;u.g[q.key]=q}u=o.H?I(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),br(),fm(o.i,o.u,o.A,o.l,o.R,o.m)}Sn.prototype.ca=function(o){o=o.target;const u=this.M;u&&hn(o)==3?u.j():this.Y(o)},Sn.prototype.Y=function(o){try{if(o==this.g)e:{const pt=hn(this.g);var u=this.g.Ba();const Ms=this.g.Z();if(!(3>pt)&&(pt!=3||this.g&&(this.h.h||this.g.oa()||gh(this.g)))){this.J||pt!=4||u==7||(u==8||0>=Ms?br(3):br(2)),pl(this);var d=this.g.Z();this.X=d;t:if(Qu(this)){var m=gh(this.g);o="";var P=m.length,k=hn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){is(this),Pr(this);var q="";break t}this.h.i=new l.TextDecoder}for(u=0;u<P;u++)this.h.h=!0,o+=this.h.i.decode(m[u],{stream:!(k&&u==P-1)});m.length=0,this.h.g+=o,this.C=0,q=this.h.g}else q=this.g.oa();if(this.o=d==200,pm(this.i,this.u,this.A,this.l,this.R,pt,d),this.o){if(this.T&&!this.K){t:{if(this.g){var xe,it=this.g;if((xe=it.g?it.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!H(xe)){var Ve=xe;break t}}Ve=null}if(d=Ve)Ds(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,gl(this,d);else{this.o=!1,this.s=3,It(12),is(this),Pr(this);break e}}if(this.P){d=!0;let Bt;for(;!this.J&&this.C<q.length;)if(Bt=_m(this,q),Bt==dl){pt==4&&(this.s=4,It(14),d=!1),Ds(this.i,this.l,null,"[Incomplete Response]");break}else if(Bt==Ku){this.s=4,It(15),Ds(this.i,this.l,q,"[Invalid Chunk]"),d=!1;break}else Ds(this.i,this.l,Bt,null),gl(this,Bt);if(Qu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),pt!=4||q.length!=0||this.h.h||(this.s=1,It(16),d=!1),this.o=this.o&&d,!d)Ds(this.i,this.l,q,"[Invalid Chunked Response]"),is(this),Pr(this);else if(0<q.length&&!this.W){this.W=!0;var ft=this.j;ft.g==this&&ft.ba&&!ft.M&&(ft.j.info("Great, no buffering proxy detected. Bytes received: "+q.length),wl(ft),ft.M=!0,It(11))}}else Ds(this.i,this.l,q,null),gl(this,q);pt==4&&is(this),this.o&&!this.J&&(pt==4?Ih(this.j,this):(this.o=!1,$i(this)))}else Om(this.g),d==400&&0<q.indexOf("Unknown SID")?(this.s=3,It(12)):(this.s=0,It(13)),is(this),Pr(this)}}}catch{}finally{}};function Qu(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function _m(o,u){var d=o.C,m=u.indexOf(`
`,d);return m==-1?dl:(d=Number(u.substring(d,m)),isNaN(d)?Ku:(m+=1,m+d>u.length?dl:(u=u.slice(m,m+d),o.C=m+d,u)))}Sn.prototype.cancel=function(){this.J=!0,is(this)};function $i(o){o.S=Date.now()+o.I,Zu(o,o.I)}function Zu(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Cr(p(o.ba,o),u)}function pl(o){o.B&&(l.clearTimeout(o.B),o.B=null)}Sn.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(gm(this.i,this.A),this.L!=2&&(br(),It(17)),is(this),this.s=2,Pr(this)):Zu(this,this.S-o)};function Pr(o){o.j.G==0||o.J||Ih(o.j,o)}function is(o){pl(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,dt(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function gl(o,u){try{var d=o.j;if(d.G!=0&&(d.g==o||ml(d.h,o))){if(!o.K&&ml(d.h,o)&&d.G==3){try{var m=d.Da.g.parse(u)}catch{m=null}if(Array.isArray(m)&&m.length==3){var P=m;if(P[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)Yi(d),Qi(d);else break e;El(d),It(18)}}else d.za=P[1],0<d.za-d.T&&37500>P[2]&&d.F&&d.v==0&&!d.C&&(d.C=Cr(p(d.Za,d),6e3));if(1>=Xu(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else as(d,11)}else if((o.K||d.g==o)&&Yi(d),!H(u))for(P=d.Da.g.parse(u),u=0;u<P.length;u++){let Ve=P[u];if(d.T=Ve[0],Ve=Ve[1],d.G==2)if(Ve[0]=="c"){d.K=Ve[1],d.ia=Ve[2];const ft=Ve[3];ft!=null&&(d.la=ft,d.j.info("VER="+d.la));const pt=Ve[4];pt!=null&&(d.Aa=pt,d.j.info("SVER="+d.Aa));const Ms=Ve[5];Ms!=null&&typeof Ms=="number"&&0<Ms&&(m=1.5*Ms,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const Bt=o.g;if(Bt){const Xi=Bt.g?Bt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Xi){var k=m.h;k.g||Xi.indexOf("spdy")==-1&&Xi.indexOf("quic")==-1&&Xi.indexOf("h2")==-1||(k.j=k.l,k.g=new Set,k.h&&(_l(k,k.h),k.h=null))}if(m.D){const Il=Bt.g?Bt.g.getResponseHeader("X-HTTP-Session-Id"):null;Il&&(m.ya=Il,Fe(m.I,m.D,Il))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var q=o;if(m.qa=bh(m,m.J?m.ia:null,m.W),q.K){eh(m.h,q);var xe=q,it=m.L;it&&(xe.I=it),xe.B&&(pl(xe),$i(xe)),m.g=q}else Eh(m);0<d.i.length&&Zi(d)}else Ve[0]!="stop"&&Ve[0]!="close"||as(d,7);else d.G==3&&(Ve[0]=="stop"||Ve[0]=="close"?Ve[0]=="stop"?as(d,7):vl(d):Ve[0]!="noop"&&d.l&&d.l.ta(Ve),d.v=0)}}br(4)}catch{}}var ym=class{constructor(o,u){this.g=o,this.map=u}};function Yu(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ju(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Xu(o){return o.h?1:o.g?o.g.size:0}function ml(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function _l(o,u){o.g?o.g.add(u):o.h=u}function eh(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}Yu.prototype.cancel=function(){if(this.i=th(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function th(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const d of o.g.values())u=u.concat(d.D);return u}return M(o.i)}function vm(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var u=[],d=o.length,m=0;m<d;m++)u.push(o[m]);return u}u=[],d=0;for(m in o)u[d++]=o[m];return u}function Em(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var u=[];o=o.length;for(var d=0;d<o;d++)u.push(d);return u}u=[],d=0;for(const m in o)u[d++]=m;return u}}}function nh(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var d=Em(o),m=vm(o),P=m.length,k=0;k<P;k++)u.call(void 0,m[k],d&&d[k],o)}var sh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function wm(o,u){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var m=o[d].indexOf("="),P=null;if(0<=m){var k=o[d].substring(0,m);P=o[d].substring(m+1)}else k=o[d];u(k,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function os(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof os){this.h=o.h,Hi(this,o.j),this.o=o.o,this.g=o.g,qi(this,o.s),this.l=o.l;var u=o.i,d=new Vr;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),rh(this,d),this.m=o.m}else o&&(u=String(o).match(sh))?(this.h=!1,Hi(this,u[1]||"",!0),this.o=Sr(u[2]||""),this.g=Sr(u[3]||"",!0),qi(this,u[4]),this.l=Sr(u[5]||"",!0),rh(this,u[6]||"",!0),this.m=Sr(u[7]||"")):(this.h=!1,this.i=new Vr(null,this.h))}os.prototype.toString=function(){var o=[],u=this.j;u&&o.push(kr(u,ih,!0),":");var d=this.g;return(d||u=="file")&&(o.push("//"),(u=this.o)&&o.push(kr(u,ih,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(kr(d,d.charAt(0)=="/"?Am:Tm,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",kr(d,Cm)),o.join("")};function un(o){return new os(o)}function Hi(o,u,d){o.j=d?Sr(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function qi(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function rh(o,u,d){u instanceof Vr?(o.i=u,Rm(o.i,o.h)):(d||(u=kr(u,bm)),o.i=new Vr(u,o.h))}function Fe(o,u,d){o.i.set(u,d)}function Wi(o){return Fe(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Sr(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function kr(o,u,d){return typeof o=="string"?(o=encodeURI(o).replace(u,Im),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Im(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var ih=/[#\/\?@]/g,Tm=/[#\?:]/g,Am=/[#\?]/g,bm=/[#\?@]/g,Cm=/#/g;function Vr(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function kn(o){o.g||(o.g=new Map,o.h=0,o.i&&wm(o.i,function(u,d){o.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}t=Vr.prototype,t.add=function(o,u){kn(this),this.i=null,o=Ns(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(u),this.h+=1,this};function oh(o,u){kn(o),u=Ns(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function ah(o,u){return kn(o),u=Ns(o,u),o.g.has(u)}t.forEach=function(o,u){kn(this),this.g.forEach(function(d,m){d.forEach(function(P){o.call(u,P,m,this)},this)},this)},t.na=function(){kn(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let m=0;m<u.length;m++){const P=o[m];for(let k=0;k<P.length;k++)d.push(u[m])}return d},t.V=function(o){kn(this);let u=[];if(typeof o=="string")ah(this,o)&&(u=u.concat(this.g.get(Ns(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)u=u.concat(o[d])}return u},t.set=function(o,u){return kn(this),this.i=null,o=Ns(this,o),ah(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},t.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function lh(o,u,d){oh(o,u),0<d.length&&(o.i=null,o.g.set(Ns(o,u),M(d)),o.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var m=u[d];const k=encodeURIComponent(String(m)),q=this.V(m);for(m=0;m<q.length;m++){var P=k;q[m]!==""&&(P+="="+encodeURIComponent(String(q[m]))),o.push(P)}}return this.i=o.join("&")};function Ns(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function Rm(o,u){u&&!o.j&&(kn(o),o.i=null,o.g.forEach(function(d,m){var P=m.toLowerCase();m!=P&&(oh(this,m),lh(this,P,d))},o)),o.j=u}function Pm(o,u){const d=new Rr;if(l.Image){const m=new Image;m.onload=C(Vn,d,"TestLoadImage: loaded",!0,u,m),m.onerror=C(Vn,d,"TestLoadImage: error",!1,u,m),m.onabort=C(Vn,d,"TestLoadImage: abort",!1,u,m),m.ontimeout=C(Vn,d,"TestLoadImage: timeout",!1,u,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=o}else u(!1)}function Sm(o,u){const d=new Rr,m=new AbortController,P=setTimeout(()=>{m.abort(),Vn(d,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:m.signal}).then(k=>{clearTimeout(P),k.ok?Vn(d,"TestPingServer: ok",!0,u):Vn(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(P),Vn(d,"TestPingServer: error",!1,u)})}function Vn(o,u,d,m,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),m(d)}catch{}}function km(){this.g=new dm}function Vm(o,u,d){const m=d||"";try{nh(o,function(P,k){let q=P;h(P)&&(q=Rt(P)),u.push(m+k+"="+encodeURIComponent(q))})}catch(P){throw u.push(m+"type="+encodeURIComponent("_badmap")),P}}function zi(o){this.l=o.Ub||null,this.j=o.eb||!1}V(zi,ll),zi.prototype.g=function(){return new Ki(this.l,this.j)},zi.prototype.i=function(o){return function(){return o}}({});function Ki(o,u){ge.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(Ki,ge),t=Ki.prototype,t.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,Nr(this)},t.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Dr(this)),this.readyState=0},t.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Nr(this)),this.g&&(this.readyState=3,Nr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ch(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function ch(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}t.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Dr(this):Nr(this),this.readyState==3&&ch(this)}},t.Ra=function(o){this.g&&(this.response=this.responseText=o,Dr(this))},t.Qa=function(o){this.g&&(this.response=o,Dr(this))},t.ga=function(){this.g&&Dr(this)};function Dr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Nr(o)}t.setRequestHeader=function(o,u){this.u.append(o,u)},t.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=u.next();return o.join(`\r
`)};function Nr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Ki.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function uh(o){let u="";return ve(o,function(d,m){u+=m,u+=":",u+=d,u+=`\r
`}),u}function yl(o,u,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=uh(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):Fe(o,u,d))}function qe(o){ge.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(qe,ge);var Dm=/^https?$/i,Nm=["POST","PUT"];t=qe.prototype,t.Ha=function(o){this.J=o},t.ea=function(o,u,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():hl.g(),this.v=this.o?Fu(this.o):Fu(hl),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(k){hh(this,k);return}if(o=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var P in m)d.set(P,m[P]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const k of m.keys())d.set(k,m.get(k));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(k=>k.toLowerCase()=="content-type"),P=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Nm,u,void 0))||m||P||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[k,q]of d)this.g.setRequestHeader(k,q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ph(this),this.u=!0,this.g.send(o),this.u=!1}catch(k){hh(this,k)}};function hh(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,dh(o),Gi(o)}function dh(o){o.A||(o.A=!0,de(o,"complete"),de(o,"error"))}t.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,de(this,"complete"),de(this,"abort"),Gi(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Gi(this,!0)),qe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?fh(this):this.bb())},t.bb=function(){fh(this)};function fh(o){if(o.h&&typeof a<"u"&&(!o.v[1]||hn(o)!=4||o.Z()!=2)){if(o.u&&hn(o)==4)Ct(o.Ea,0,o);else if(de(o,"readystatechange"),hn(o)==4){o.h=!1;try{const q=o.Z();e:switch(q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var m;if(m=q===0){var P=String(o.D).match(sh)[1]||null;!P&&l.self&&l.self.location&&(P=l.self.location.protocol.slice(0,-1)),m=!Dm.test(P?P.toLowerCase():"")}d=m}if(d)de(o,"complete"),de(o,"success");else{o.m=6;try{var k=2<hn(o)?o.g.statusText:""}catch{k=""}o.l=k+" ["+o.Z()+"]",dh(o)}}finally{Gi(o)}}}}function Gi(o,u){if(o.g){ph(o);const d=o.g,m=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||de(o,"ready");try{d.onreadystatechange=m}catch{}}}function ph(o){o.I&&(l.clearTimeout(o.I),o.I=null)}t.isActive=function(){return!!this.g};function hn(o){return o.g?o.g.readyState:0}t.Z=function(){try{return 2<hn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),Ui(u)}};function gh(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Om(o){const u={};o=(o.g&&2<=hn(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<o.length;m++){if(H(o[m]))continue;var d=_(o[m]);const P=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const k=u[P]||[];u[P]=k,k.push(d)}R(u,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Or(o,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||u}function mh(o){this.Aa=0,this.i=[],this.j=new Rr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Or("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Or("baseRetryDelayMs",5e3,o),this.cb=Or("retryDelaySeedMs",1e4,o),this.Wa=Or("forwardChannelMaxRetries",2,o),this.wa=Or("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Yu(o&&o.concurrentRequestLimit),this.Da=new km,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=mh.prototype,t.la=8,t.G=1,t.connect=function(o,u,d,m){It(0),this.W=o,this.H=u||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=bh(this,null,this.W),Zi(this)};function vl(o){if(_h(o),o.G==3){var u=o.U++,d=un(o.I);if(Fe(d,"SID",o.K),Fe(d,"RID",u),Fe(d,"TYPE","terminate"),Mr(o,d),u=new Sn(o,o.j,u),u.L=2,u.v=Wi(un(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=u.v,d=!0),d||(u.g=Ch(u.j,null),u.g.ea(u.v)),u.F=Date.now(),$i(u)}Ah(o)}function Qi(o){o.g&&(wl(o),o.g.cancel(),o.g=null)}function _h(o){Qi(o),o.u&&(l.clearTimeout(o.u),o.u=null),Yi(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function Zi(o){if(!Ju(o.h)&&!o.s){o.s=!0;var u=o.Ga;Se||Ut(),Te||(Se(),Te=!0),Vt.add(u,o),o.B=0}}function Mm(o,u){return Xu(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Cr(p(o.Ga,o,u),Th(o,o.B)),o.B++,!0)}t.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const P=new Sn(this,this.j,o);let k=this.o;if(this.S&&(k?(k=I(k),E(k,this.S)):k=this.S),this.m!==null||this.O||(P.H=k,k=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(u+=m,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=vh(this,P,u),d=un(this.I),Fe(d,"RID",o),Fe(d,"CVER",22),this.D&&Fe(d,"X-HTTP-Session-Id",this.D),Mr(this,d),k&&(this.O?u="headers="+encodeURIComponent(String(uh(k)))+"&"+u:this.m&&yl(d,this.m,k)),_l(this.h,P),this.Ua&&Fe(d,"TYPE","init"),this.P?(Fe(d,"$req",u),Fe(d,"SID","null"),P.T=!0,fl(P,d,null)):fl(P,d,u),this.G=2}}else this.G==3&&(o?yh(this,o):this.i.length==0||Ju(this.h)||yh(this))};function yh(o,u){var d;u?d=u.l:d=o.U++;const m=un(o.I);Fe(m,"SID",o.K),Fe(m,"RID",d),Fe(m,"AID",o.T),Mr(o,m),o.m&&o.o&&yl(m,o.m,o.o),d=new Sn(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),u&&(o.i=u.D.concat(o.i)),u=vh(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),_l(o.h,d),fl(d,m,u)}function Mr(o,u){o.H&&ve(o.H,function(d,m){Fe(u,m,d)}),o.l&&nh({},function(d,m){Fe(u,m,d)})}function vh(o,u,d){d=Math.min(o.i.length,d);var m=o.l?p(o.l.Na,o.l,o):null;e:{var P=o.i;let k=-1;for(;;){const q=["count="+d];k==-1?0<d?(k=P[0].g,q.push("ofs="+k)):k=0:q.push("ofs="+k);let xe=!0;for(let it=0;it<d;it++){let Ve=P[it].g;const ft=P[it].map;if(Ve-=k,0>Ve)k=Math.max(0,P[it].g-100),xe=!1;else try{Vm(ft,q,"req"+Ve+"_")}catch{m&&m(ft)}}if(xe){m=q.join("&");break e}}}return o=o.i.splice(0,d),u.D=o,m}function Eh(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;Se||Ut(),Te||(Se(),Te=!0),Vt.add(u,o),o.v=0}}function El(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Cr(p(o.Fa,o),Th(o,o.v)),o.v++,!0)}t.Fa=function(){if(this.u=null,wh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Cr(p(this.ab,this),o)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,It(10),Qi(this),wh(this))};function wl(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function wh(o){o.g=new Sn(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=un(o.qa);Fe(u,"RID","rpc"),Fe(u,"SID",o.K),Fe(u,"AID",o.T),Fe(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&Fe(u,"TO",o.ja),Fe(u,"TYPE","xmlhttp"),Mr(o,u),o.m&&o.o&&yl(u,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=Wi(un(u)),d.m=null,d.P=!0,Gu(d,o)}t.Za=function(){this.C!=null&&(this.C=null,Qi(this),El(this),It(19))};function Yi(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function Ih(o,u){var d=null;if(o.g==u){Yi(o),wl(o),o.g=null;var m=2}else if(ml(o.h,u))d=u.D,eh(o.h,u),m=1;else return;if(o.G!=0){if(u.o)if(m==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var P=o.B;m=Fi(),de(m,new qu(m,d)),Zi(o)}else Eh(o);else if(P=u.s,P==3||P==0&&0<u.X||!(m==1&&Mm(o,u)||m==2&&El(o)))switch(d&&0<d.length&&(u=o.h,u.i=u.i.concat(d)),P){case 1:as(o,5);break;case 4:as(o,10);break;case 3:as(o,6);break;default:as(o,2)}}}function Th(o,u){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*u}function as(o,u){if(o.j.info("Error code "+u),u==2){var d=p(o.fb,o),m=o.Xa;const P=!m;m=new os(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Hi(m,"https"),Wi(m),P?Pm(m.toString(),d):Sm(m.toString(),d)}else It(2);o.G=0,o.l&&o.l.sa(u),Ah(o),_h(o)}t.fb=function(o){o?(this.j.info("Successfully pinged google.com"),It(2)):(this.j.info("Failed to ping google.com"),It(1))};function Ah(o){if(o.G=0,o.ka=[],o.l){const u=th(o.h);(u.length!=0||o.i.length!=0)&&(N(o.ka,u),N(o.ka,o.i),o.h.i.length=0,M(o.i),o.i.length=0),o.l.ra()}}function bh(o,u,d){var m=d instanceof os?un(d):new os(d);if(m.g!="")u&&(m.g=u+"."+m.g),qi(m,m.s);else{var P=l.location;m=P.protocol,u=u?u+"."+P.hostname:P.hostname,P=+P.port;var k=new os(null);m&&Hi(k,m),u&&(k.g=u),P&&qi(k,P),d&&(k.l=d),m=k}return d=o.D,u=o.ya,d&&u&&Fe(m,d,u),Fe(m,"VER",o.la),Mr(o,m),m}function Ch(o,u,d){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new qe(new zi({eb:d})):new qe(o.pa),u.Ha(o.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Rh(){}t=Rh.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ji(){}Ji.prototype.g=function(o,u){return new Dt(o,u)};function Dt(o,u){ge.call(this),this.g=new mh(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!H(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!H(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Os(this)}V(Dt,ge),Dt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Dt.prototype.close=function(){vl(this.g)},Dt.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=Rt(o),o=d);u.i.push(new ym(u.Ya++,o)),u.G==3&&Zi(u)},Dt.prototype.N=function(){this.g.l=null,delete this.j,vl(this.g),delete this.g,Dt.aa.N.call(this)};function Ph(o){cl.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const d in u){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}V(Ph,cl);function Sh(){ul.call(this),this.status=1}V(Sh,ul);function Os(o){this.g=o}V(Os,Rh),Os.prototype.ua=function(){de(this.g,"a")},Os.prototype.ta=function(o){de(this.g,new Ph(o))},Os.prototype.sa=function(o){de(this.g,new Sh)},Os.prototype.ra=function(){de(this.g,"b")},Ji.prototype.createWebChannel=Ji.prototype.g,Dt.prototype.send=Dt.prototype.o,Dt.prototype.open=Dt.prototype.m,Dt.prototype.close=Dt.prototype.close,pg=function(){return new Ji},fg=function(){return Fi()},dg=rs,dc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Bi.NO_ERROR=0,Bi.TIMEOUT=8,Bi.HTTP_ERROR=6,vo=Bi,Wu.COMPLETE="complete",hg=Wu,Bu.EventType=Ar,Ar.OPEN="a",Ar.CLOSE="b",Ar.ERROR="c",Ar.MESSAGE="d",ge.prototype.listen=ge.prototype.K,qr=Bu,qe.prototype.listenOnce=qe.prototype.L,qe.prototype.getLastError=qe.prototype.Ka,qe.prototype.getLastErrorCode=qe.prototype.Ba,qe.prototype.getStatus=qe.prototype.Z,qe.prototype.getResponseJson=qe.prototype.Oa,qe.prototype.getResponseText=qe.prototype.oa,qe.prototype.send=qe.prototype.ea,qe.prototype.setWithCredentials=qe.prototype.Ha,ug=qe}).apply(typeof oo<"u"?oo:typeof self<"u"?self:typeof window<"u"?window:{});const Ld="@firebase/firestore";/**
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
 */class _t{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}_t.UNAUTHENTICATED=new _t(null),_t.GOOGLE_CREDENTIALS=new _t("google-credentials-uid"),_t.FIRST_PARTY=new _t("first-party-uid"),_t.MOCK_USER=new _t("mock-user");/**
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
 */let mr="10.14.0";/**
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
 */const Ts=new Yc("@firebase/firestore");function Fr(){return Ts.logLevel}function te(t,...e){if(Ts.logLevel<=Ce.DEBUG){const n=e.map(eu);Ts.debug(`Firestore (${mr}): ${t}`,...n)}}function Tn(t,...e){if(Ts.logLevel<=Ce.ERROR){const n=e.map(eu);Ts.error(`Firestore (${mr}): ${t}`,...n)}}function rr(t,...e){if(Ts.logLevel<=Ce.WARN){const n=e.map(eu);Ts.warn(`Firestore (${mr}): ${t}`,...n)}}function eu(t){if(typeof t=="string")return t;try{/**
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
 */function he(t="Unexpected state"){const e=`FIRESTORE (${mr}) INTERNAL ASSERTION FAILED: `+t;throw Tn(e),new Error(e)}function Me(t,e){t||he()}function pe(t,e){return t}/**
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
 */const B={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ie extends Rn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Kn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class gg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Hv{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(_t.UNAUTHENTICATED))}shutdown(){}}class qv{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Wv{constructor(e){this.t=e,this.currentUser=_t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Me(this.o===void 0);let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new Kn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Kn,e.enqueueRetryable(()=>r(this.currentUser))};const a=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},l=c=>{te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(te("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Kn)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Me(typeof s.accessToken=="string"),new gg(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Me(e===null||typeof e=="string"),new _t(e)}}class zv{constructor(e,n,s){this.l=e,this.h=n,this.P=s,this.type="FirstParty",this.user=_t.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Kv{constructor(e,n,s){this.l=e,this.h=n,this.P=s}getToken(){return Promise.resolve(new zv(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(_t.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Gv{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Qv{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Me(this.o===void 0);const s=i=>{i.error!=null&&te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,te("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?r(i):te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Me(typeof n.token=="string"),this.R=n.token,new Gv(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Zv(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class mg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=Zv(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function De(t,e){return t<e?-1:t>e?1:0}function ir(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
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
 */class Xe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ie(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ie(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ie(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ie(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Xe.fromMillis(Date.now())}static fromDate(e){return Xe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Xe(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?De(this.nanoseconds,e.nanoseconds):De(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class fe{constructor(e){this.timestamp=e}static fromTimestamp(e){return new fe(e)}static min(){return new fe(new Xe(0,0))}static max(){return new fe(new Xe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class ui{constructor(e,n,s){n===void 0?n=0:n>e.length&&he(),s===void 0?s=e.length-n:s>e.length-n&&he(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return ui.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ui?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),a=n.get(r);if(i<a)return-1;if(i>a)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class We extends ui{construct(e,n,s){return new We(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new ie(B.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new We(n)}static emptyPath(){return new We([])}}const Yv=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class lt extends ui{construct(e,n,s){return new lt(e,n,s)}static isValidIdentifier(e){return Yv.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),lt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new lt(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new ie(B.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let a=!1;for(;r<e.length;){const l=e[r];if(l==="\\"){if(r+1===e.length)throw new ie(B.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new ie(B.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else l==="`"?(a=!a,r++):l!=="."||a?(s+=l,r++):(i(),r++)}if(i(),a)throw new ie(B.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new lt(n)}static emptyPath(){return new lt([])}}/**
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
 */class ae{constructor(e){this.path=e}static fromPath(e){return new ae(We.fromString(e))}static fromName(e){return new ae(We.fromString(e).popFirst(5))}static empty(){return new ae(We.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&We.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return We.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ae(new We(e.slice()))}}function Jv(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=fe.fromTimestamp(s===1e9?new Xe(n+1,0):new Xe(n,s));return new Xn(r,ae.empty(),e)}function Xv(t){return new Xn(t.readTime,t.key,-1)}class Xn{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Xn(fe.min(),ae.empty(),-1)}static max(){return new Xn(fe.max(),ae.empty(),-1)}}function eE(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ae.comparator(t.documentKey,e.documentKey),n!==0?n:De(t.largestBatchId,e.largestBatchId))}/**
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
 */const tE="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class nE{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ci(t){if(t.code!==B.FAILED_PRECONDITION||t.message!==tE)throw t;te("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&he(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new U((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof U?n:U.resolve(n)}catch(n){return U.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):U.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):U.reject(n)}static resolve(e){return new U((n,s)=>{n(e)})}static reject(e){return new U((n,s)=>{s(e)})}static waitFor(e){return new U((n,s)=>{let r=0,i=0,a=!1;e.forEach(l=>{++r,l.next(()=>{++i,a&&i===r&&n()},c=>s(c))}),a=!0,i===r&&n()})}static or(e){let n=U.resolve(!1);for(const s of e)n=n.next(r=>r?U.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new U((s,r)=>{const i=e.length,a=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;n(e[h]).next(f=>{a[h]=f,++l,l===i&&s(a)},f=>r(f))}})}static doWhile(e,n){return new U((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function sE(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ri(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class tu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ie(s),this.se=s=>n.writeSequenceNumber(s))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}tu.oe=-1;function va(t){return t==null}function Bo(t){return t===0&&1/t==-1/0}function rE(t){return typeof t=="number"&&Number.isInteger(t)&&!Bo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Ud(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function _r(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function _g(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class He{constructor(e,n){this.comparator=e,this.root=n||ot.EMPTY}insert(e,n){return new He(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ot.BLACK,null,null))}remove(e){return new He(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ot.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ao(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ao(this.root,e,this.comparator,!1)}getReverseIterator(){return new ao(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ao(this.root,e,this.comparator,!0)}}class ao{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ot{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??ot.RED,this.left=r??ot.EMPTY,this.right=i??ot.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new ot(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return ot.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return ot.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ot.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ot.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw he();const e=this.left.check();if(e!==this.right.check())throw he();return e+(this.isRed()?0:1)}}ot.EMPTY=null,ot.RED=!0,ot.BLACK=!1;ot.EMPTY=new class{constructor(){this.size=0}get key(){throw he()}get value(){throw he()}get color(){throw he()}get left(){throw he()}get right(){throw he()}copy(e,n,s,r,i){return this}insert(e,n,s){return new ot(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ct{constructor(e){this.comparator=e,this.data=new He(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Fd(this.data.getIterator())}getIteratorFrom(e){return new Fd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof ct)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ct(this.comparator);return n.data=e,n}}class Fd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Wt{constructor(e){this.fields=e,e.sort(lt.comparator)}static empty(){return new Wt([])}unionWith(e){let n=new ct(lt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Wt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ir(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class yg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ht{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new yg("Invalid base64 string: "+i):i}}(e);return new ht(n)}static fromUint8Array(e){const n=function(r){let i="";for(let a=0;a<r.length;++a)i+=String.fromCharCode(r[a]);return i}(e);return new ht(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return De(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ht.EMPTY_BYTE_STRING=new ht("");const iE=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function es(t){if(Me(!!t),typeof t=="string"){let e=0;const n=iE.exec(t);if(Me(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ze(t.seconds),nanos:ze(t.nanos)}}function ze(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function As(t){return typeof t=="string"?ht.fromBase64String(t):ht.fromUint8Array(t)}/**
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
 */function nu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function su(t){const e=t.mapValue.fields.__previous_value__;return nu(e)?su(e):e}function hi(t){const e=es(t.mapValue.fields.__local_write_time__.timestampValue);return new Xe(e.seconds,e.nanos)}/**
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
 */class oE{constructor(e,n,s,r,i,a,l,c,h){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h}}class di{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new di("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof di&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const lo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function bs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?nu(t)?4:lE(t)?9007199254740991:aE(t)?10:11:he()}function an(t,e){if(t===e)return!0;const n=bs(t);if(n!==bs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return hi(t).isEqual(hi(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const a=es(r.timestampValue),l=es(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return As(r.bytesValue).isEqual(As(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return ze(r.geoPointValue.latitude)===ze(i.geoPointValue.latitude)&&ze(r.geoPointValue.longitude)===ze(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return ze(r.integerValue)===ze(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const a=ze(r.doubleValue),l=ze(i.doubleValue);return a===l?Bo(a)===Bo(l):isNaN(a)&&isNaN(l)}return!1}(t,e);case 9:return ir(t.arrayValue.values||[],e.arrayValue.values||[],an);case 10:case 11:return function(r,i){const a=r.mapValue.fields||{},l=i.mapValue.fields||{};if(Ud(a)!==Ud(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!an(a[c],l[c])))return!1;return!0}(t,e);default:return he()}}function fi(t,e){return(t.values||[]).find(n=>an(n,e))!==void 0}function or(t,e){if(t===e)return 0;const n=bs(t),s=bs(e);if(n!==s)return De(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return De(t.booleanValue,e.booleanValue);case 2:return function(i,a){const l=ze(i.integerValue||i.doubleValue),c=ze(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return Bd(t.timestampValue,e.timestampValue);case 4:return Bd(hi(t),hi(e));case 5:return De(t.stringValue,e.stringValue);case 6:return function(i,a){const l=As(i),c=As(a);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,a){const l=i.split("/"),c=a.split("/");for(let h=0;h<l.length&&h<c.length;h++){const f=De(l[h],c[h]);if(f!==0)return f}return De(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,a){const l=De(ze(i.latitude),ze(a.latitude));return l!==0?l:De(ze(i.longitude),ze(a.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return jd(t.arrayValue,e.arrayValue);case 10:return function(i,a){var l,c,h,f;const g=i.fields||{},p=a.fields||{},C=(l=g.value)===null||l===void 0?void 0:l.arrayValue,V=(c=p.value)===null||c===void 0?void 0:c.arrayValue,M=De(((h=C==null?void 0:C.values)===null||h===void 0?void 0:h.length)||0,((f=V==null?void 0:V.values)===null||f===void 0?void 0:f.length)||0);return M!==0?M:jd(C,V)}(t.mapValue,e.mapValue);case 11:return function(i,a){if(i===lo.mapValue&&a===lo.mapValue)return 0;if(i===lo.mapValue)return 1;if(a===lo.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=a.fields||{},f=Object.keys(h);c.sort(),f.sort();for(let g=0;g<c.length&&g<f.length;++g){const p=De(c[g],f[g]);if(p!==0)return p;const C=or(l[c[g]],h[f[g]]);if(C!==0)return C}return De(c.length,f.length)}(t.mapValue,e.mapValue);default:throw he()}}function Bd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return De(t,e);const n=es(t),s=es(e),r=De(n.seconds,s.seconds);return r!==0?r:De(n.nanos,s.nanos)}function jd(t,e){const n=t.values||[],s=e.values||[];for(let r=0;r<n.length&&r<s.length;++r){const i=or(n[r],s[r]);if(i)return i}return De(n.length,s.length)}function ar(t){return fc(t)}function fc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const s=es(n);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return As(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ae.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let s="[",r=!0;for(const i of n.values||[])r?r=!1:s+=",",s+=fc(i);return s+"]"}(t.arrayValue):"mapValue"in t?function(n){const s=Object.keys(n.fields||{}).sort();let r="{",i=!0;for(const a of s)i?i=!1:r+=",",r+=`${a}:${fc(n.fields[a])}`;return r+"}"}(t.mapValue):he()}function pc(t){return!!t&&"integerValue"in t}function ru(t){return!!t&&"arrayValue"in t}function $d(t){return!!t&&"nullValue"in t}function Hd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Eo(t){return!!t&&"mapValue"in t}function aE(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Jr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return _r(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Jr(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Jr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function lE(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class xt{constructor(e){this.value=e}static empty(){return new xt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Eo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Jr(n)}setAll(e){let n=lt.emptyPath(),s={},r=[];e.forEach((a,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=l.popLast()}a?s[l.lastSegment()]=Jr(a):r.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());Eo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return an(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];Eo(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){_r(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new xt(Jr(this.value))}}function vg(t){const e=[];return _r(t.fields,(n,s)=>{const r=new lt([n]);if(Eo(s)){const i=vg(s.mapValue).fields;if(i.length===0)e.push(r);else for(const a of i)e.push(r.child(a))}else e.push(r)}),new Wt(e)}/**
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
 */class yt{constructor(e,n,s,r,i,a,l){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new yt(e,0,fe.min(),fe.min(),fe.min(),xt.empty(),0)}static newFoundDocument(e,n,s,r){return new yt(e,1,n,fe.min(),s,r,0)}static newNoDocument(e,n){return new yt(e,2,n,fe.min(),fe.min(),xt.empty(),0)}static newUnknownDocument(e,n){return new yt(e,3,n,fe.min(),fe.min(),xt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(fe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=xt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=xt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=fe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof yt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new yt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class jo{constructor(e,n){this.position=e,this.inclusive=n}}function qd(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],a=t.position[r];if(i.field.isKeyField()?s=ae.comparator(ae.fromName(a.referenceValue),n.key):s=or(a,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Wd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!an(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class $o{constructor(e,n="asc"){this.field=e,this.dir=n}}function cE(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Eg{}class Je extends Eg{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new hE(e,n,s):n==="array-contains"?new pE(e,s):n==="in"?new gE(e,s):n==="not-in"?new mE(e,s):n==="array-contains-any"?new _E(e,s):new Je(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new dE(e,s):new fE(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(or(n,this.value)):n!==null&&bs(this.value)===bs(n)&&this.matchesComparison(or(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return he()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ln extends Eg{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new ln(e,n)}matches(e){return wg(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function wg(t){return t.op==="and"}function Ig(t){return uE(t)&&wg(t)}function uE(t){for(const e of t.filters)if(e instanceof ln)return!1;return!0}function gc(t){if(t instanceof Je)return t.field.canonicalString()+t.op.toString()+ar(t.value);if(Ig(t))return t.filters.map(e=>gc(e)).join(",");{const e=t.filters.map(n=>gc(n)).join(",");return`${t.op}(${e})`}}function Tg(t,e){return t instanceof Je?function(s,r){return r instanceof Je&&s.op===r.op&&s.field.isEqual(r.field)&&an(s.value,r.value)}(t,e):t instanceof ln?function(s,r){return r instanceof ln&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce((i,a,l)=>i&&Tg(a,r.filters[l]),!0):!1}(t,e):void he()}function Ag(t){return t instanceof Je?function(n){return`${n.field.canonicalString()} ${n.op} ${ar(n.value)}`}(t):t instanceof ln?function(n){return n.op.toString()+" {"+n.getFilters().map(Ag).join(" ,")+"}"}(t):"Filter"}class hE extends Je{constructor(e,n,s){super(e,n,s),this.key=ae.fromName(s.referenceValue)}matches(e){const n=ae.comparator(e.key,this.key);return this.matchesComparison(n)}}class dE extends Je{constructor(e,n){super(e,"in",n),this.keys=bg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class fE extends Je{constructor(e,n){super(e,"not-in",n),this.keys=bg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function bg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>ae.fromName(s.referenceValue))}class pE extends Je{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ru(n)&&fi(n.arrayValue,this.value)}}class gE extends Je{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&fi(this.value.arrayValue,n)}}class mE extends Je{constructor(e,n){super(e,"not-in",n)}matches(e){if(fi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!fi(this.value.arrayValue,n)}}class _E extends Je{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ru(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>fi(this.value.arrayValue,s))}}/**
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
 */class yE{constructor(e,n=null,s=[],r=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=a,this.endAt=l,this.ue=null}}function zd(t,e=null,n=[],s=[],r=null,i=null,a=null){return new yE(t,e,n,s,r,i,a)}function iu(t){const e=pe(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>gc(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),va(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>ar(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>ar(s)).join(",")),e.ue=n}return e.ue}function ou(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!cE(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Tg(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Wd(t.startAt,e.startAt)&&Wd(t.endAt,e.endAt)}function mc(t){return ae.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Ea{constructor(e,n=null,s=[],r=[],i=null,a="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function vE(t,e,n,s,r,i,a,l){return new Ea(t,e,n,s,r,i,a,l)}function wa(t){return new Ea(t)}function Kd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function EE(t){return t.collectionGroup!==null}function Xr(t){const e=pe(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new ct(lt.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new $o(i,s))}),n.has(lt.keyField().canonicalString())||e.ce.push(new $o(lt.keyField(),s))}return e.ce}function en(t){const e=pe(t);return e.le||(e.le=wE(e,Xr(t))),e.le}function wE(t,e){if(t.limitType==="F")return zd(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(r=>{const i=r.dir==="desc"?"asc":"desc";return new $o(r.field,i)});const n=t.endAt?new jo(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new jo(t.startAt.position,t.startAt.inclusive):null;return zd(t.path,t.collectionGroup,e,t.filters,t.limit,n,s)}}function _c(t,e,n){return new Ea(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ia(t,e){return ou(en(t),en(e))&&t.limitType===e.limitType}function Cg(t){return`${iu(en(t))}|lt:${t.limitType}`}function Us(t){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(r=>Ag(r)).join(", ")}]`),va(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(r=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(r)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(r=>ar(r)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(r=>ar(r)).join(",")),`Target(${s})`}(en(t))}; limitType=${t.limitType})`}function Ta(t,e){return e.isFoundDocument()&&function(s,r){const i=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(i):ae.isDocumentKey(s.path)?s.path.isEqual(i):s.path.isImmediateParentOf(i)}(t,e)&&function(s,r){for(const i of Xr(s))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(s,r){for(const i of s.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(s,r){return!(s.startAt&&!function(a,l,c){const h=qd(a,l,c);return a.inclusive?h<=0:h<0}(s.startAt,Xr(s),r)||s.endAt&&!function(a,l,c){const h=qd(a,l,c);return a.inclusive?h>=0:h>0}(s.endAt,Xr(s),r))}(t,e)}function IE(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Rg(t){return(e,n)=>{let s=!1;for(const r of Xr(t)){const i=TE(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function TE(t,e,n){const s=t.field.isKeyField()?ae.comparator(e.key,n.key):function(i,a,l){const c=a.data.field(i),h=l.data.field(i);return c!==null&&h!==null?or(c,h):he()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return he()}}/**
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
 */class yr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){_r(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return _g(this.inner)}size(){return this.innerSize}}/**
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
 */const AE=new He(ae.comparator);function An(){return AE}const Pg=new He(ae.comparator);function Wr(...t){let e=Pg;for(const n of t)e=e.insert(n.key,n);return e}function Sg(t){let e=Pg;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function gs(){return ei()}function kg(){return ei()}function ei(){return new yr(t=>t.toString(),(t,e)=>t.isEqual(e))}const bE=new He(ae.comparator),CE=new ct(ae.comparator);function Ae(...t){let e=CE;for(const n of t)e=e.add(n);return e}const RE=new ct(De);function PE(){return RE}/**
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
 */function au(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Bo(e)?"-0":e}}function Vg(t){return{integerValue:""+t}}function SE(t,e){return rE(e)?Vg(e):au(t,e)}/**
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
 */class Aa{constructor(){this._=void 0}}function kE(t,e,n){return t instanceof Ho?function(r,i){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&nu(i)&&(i=su(i)),i&&(a.fields.__previous_value__=i),{mapValue:a}}(n,e):t instanceof pi?Ng(t,e):t instanceof gi?Og(t,e):function(r,i){const a=Dg(r,i),l=Gd(a)+Gd(r.Pe);return pc(a)&&pc(r.Pe)?Vg(l):au(r.serializer,l)}(t,e)}function VE(t,e,n){return t instanceof pi?Ng(t,e):t instanceof gi?Og(t,e):n}function Dg(t,e){return t instanceof qo?function(s){return pc(s)||function(i){return!!i&&"doubleValue"in i}(s)}(e)?e:{integerValue:0}:null}class Ho extends Aa{}class pi extends Aa{constructor(e){super(),this.elements=e}}function Ng(t,e){const n=Mg(e);for(const s of t.elements)n.some(r=>an(r,s))||n.push(s);return{arrayValue:{values:n}}}class gi extends Aa{constructor(e){super(),this.elements=e}}function Og(t,e){let n=Mg(e);for(const s of t.elements)n=n.filter(r=>!an(r,s));return{arrayValue:{values:n}}}class qo extends Aa{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Gd(t){return ze(t.integerValue||t.doubleValue)}function Mg(t){return ru(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function DE(t,e){return t.field.isEqual(e.field)&&function(s,r){return s instanceof pi&&r instanceof pi||s instanceof gi&&r instanceof gi?ir(s.elements,r.elements,an):s instanceof qo&&r instanceof qo?an(s.Pe,r.Pe):s instanceof Ho&&r instanceof Ho}(t.transform,e.transform)}class NE{constructor(e,n){this.version=e,this.transformResults=n}}class wn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new wn}static exists(e){return new wn(void 0,e)}static updateTime(e){return new wn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function wo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ba{}function xg(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Ug(t.key,wn.none()):new Pi(t.key,t.data,wn.none());{const n=t.data,s=xt.empty();let r=new ct(lt.comparator);for(let i of e.fields)if(!r.has(i)){let a=n.field(i);a===null&&i.length>1&&(i=i.popLast(),a=n.field(i)),a===null?s.delete(i):s.set(i,a),r=r.add(i)}return new Rs(t.key,s,new Wt(r.toArray()),wn.none())}}function OE(t,e,n){t instanceof Pi?function(r,i,a){const l=r.value.clone(),c=Zd(r.fieldTransforms,i,a.transformResults);l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Rs?function(r,i,a){if(!wo(r.precondition,i))return void i.convertToUnknownDocument(a.version);const l=Zd(r.fieldTransforms,i,a.transformResults),c=i.data;c.setAll(Lg(r)),c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(t,e,n):function(r,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,n)}function ti(t,e,n,s){return t instanceof Pi?function(i,a,l,c){if(!wo(i.precondition,a))return l;const h=i.value.clone(),f=Yd(i.fieldTransforms,c,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(t,e,n,s):t instanceof Rs?function(i,a,l,c){if(!wo(i.precondition,a))return l;const h=Yd(i.fieldTransforms,c,a),f=a.data;return f.setAll(Lg(i)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(g=>g.field))}(t,e,n,s):function(i,a,l){return wo(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(t,e,n)}function ME(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=Dg(s.transform,r||null);i!=null&&(n===null&&(n=xt.empty()),n.set(s.field,i))}return n||null}function Qd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&ir(s,r,(i,a)=>DE(i,a))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Pi extends ba{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Rs extends ba{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Lg(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Zd(t,e,n){const s=new Map;Me(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],a=i.transform,l=e.data.field(i.field);s.set(i.field,VE(a,l,n[r]))}return s}function Yd(t,e,n){const s=new Map;for(const r of t){const i=r.transform,a=n.data.field(r.field);s.set(r.field,kE(i,a,e))}return s}class Ug extends ba{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class xE extends ba{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class LE{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&OE(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=ti(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=ti(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=kg();return this.mutations.forEach(r=>{const i=e.get(r.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=n.has(r.key)?null:l;const c=xg(a,l);c!==null&&s.set(r.key,c),a.isValidDocument()||a.convertToNoDocument(fe.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ae())}isEqual(e){return this.batchId===e.batchId&&ir(this.mutations,e.mutations,(n,s)=>Qd(n,s))&&ir(this.baseMutations,e.baseMutations,(n,s)=>Qd(n,s))}}class lu{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){Me(e.mutations.length===s.length);let r=function(){return bE}();const i=e.mutations;for(let a=0;a<i.length;a++)r=r.insert(i[a].key,s[a].version);return new lu(e,n,s,r)}}/**
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
 */class UE{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class FE{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Qe,Re;function BE(t){switch(t){default:return he();case B.CANCELLED:case B.UNKNOWN:case B.DEADLINE_EXCEEDED:case B.RESOURCE_EXHAUSTED:case B.INTERNAL:case B.UNAVAILABLE:case B.UNAUTHENTICATED:return!1;case B.INVALID_ARGUMENT:case B.NOT_FOUND:case B.ALREADY_EXISTS:case B.PERMISSION_DENIED:case B.FAILED_PRECONDITION:case B.ABORTED:case B.OUT_OF_RANGE:case B.UNIMPLEMENTED:case B.DATA_LOSS:return!0}}function Fg(t){if(t===void 0)return Tn("GRPC error has no .code"),B.UNKNOWN;switch(t){case Qe.OK:return B.OK;case Qe.CANCELLED:return B.CANCELLED;case Qe.UNKNOWN:return B.UNKNOWN;case Qe.DEADLINE_EXCEEDED:return B.DEADLINE_EXCEEDED;case Qe.RESOURCE_EXHAUSTED:return B.RESOURCE_EXHAUSTED;case Qe.INTERNAL:return B.INTERNAL;case Qe.UNAVAILABLE:return B.UNAVAILABLE;case Qe.UNAUTHENTICATED:return B.UNAUTHENTICATED;case Qe.INVALID_ARGUMENT:return B.INVALID_ARGUMENT;case Qe.NOT_FOUND:return B.NOT_FOUND;case Qe.ALREADY_EXISTS:return B.ALREADY_EXISTS;case Qe.PERMISSION_DENIED:return B.PERMISSION_DENIED;case Qe.FAILED_PRECONDITION:return B.FAILED_PRECONDITION;case Qe.ABORTED:return B.ABORTED;case Qe.OUT_OF_RANGE:return B.OUT_OF_RANGE;case Qe.UNIMPLEMENTED:return B.UNIMPLEMENTED;case Qe.DATA_LOSS:return B.DATA_LOSS;default:return he()}}(Re=Qe||(Qe={}))[Re.OK=0]="OK",Re[Re.CANCELLED=1]="CANCELLED",Re[Re.UNKNOWN=2]="UNKNOWN",Re[Re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Re[Re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Re[Re.NOT_FOUND=5]="NOT_FOUND",Re[Re.ALREADY_EXISTS=6]="ALREADY_EXISTS",Re[Re.PERMISSION_DENIED=7]="PERMISSION_DENIED",Re[Re.UNAUTHENTICATED=16]="UNAUTHENTICATED",Re[Re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Re[Re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Re[Re.ABORTED=10]="ABORTED",Re[Re.OUT_OF_RANGE=11]="OUT_OF_RANGE",Re[Re.UNIMPLEMENTED=12]="UNIMPLEMENTED",Re[Re.INTERNAL=13]="INTERNAL",Re[Re.UNAVAILABLE=14]="UNAVAILABLE",Re[Re.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function jE(){return new TextEncoder}/**
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
 */const $E=new vs([4294967295,4294967295],0);function Jd(t){const e=jE().encode(t),n=new cg;return n.update(e),new Uint8Array(n.digest())}function Xd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new vs([n,s],0),new vs([r,i],0)]}class cu{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new zr(`Invalid padding: ${n}`);if(s<0)throw new zr(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new zr(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new zr(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=vs.fromNumber(this.Ie)}Ee(e,n,s){let r=e.add(n.multiply(vs.fromNumber(s)));return r.compare($E)===1&&(r=new vs([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Jd(e),[s,r]=Xd(n);for(let i=0;i<this.hashCount;i++){const a=this.Ee(s,r,i);if(!this.de(a))return!1}return!0}static create(e,n,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new cu(i,r,n);return s.forEach(l=>a.insert(l)),a}insert(e){if(this.Ie===0)return;const n=Jd(e),[s,r]=Xd(n);for(let i=0;i<this.hashCount;i++){const a=this.Ee(s,r,i);this.Ae(a)}}Ae(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class zr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ca{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,Si.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Ca(fe.min(),r,new He(De),An(),Ae())}}class Si{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Si(s,n,Ae(),Ae(),Ae())}}/**
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
 */class Io{constructor(e,n,s,r){this.Re=e,this.removedTargetIds=n,this.key=s,this.Ve=r}}class Bg{constructor(e,n){this.targetId=e,this.me=n}}class jg{constructor(e,n,s=ht.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class ef{constructor(){this.fe=0,this.ge=nf(),this.pe=ht.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Ae(),n=Ae(),s=Ae();return this.ge.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:he()}}),new Si(this.pe,this.ye,e,n,s)}Ce(){this.we=!1,this.ge=nf()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Me(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class HE{constructor(e){this.Le=e,this.Be=new Map,this.ke=An(),this.qe=tf(),this.Qe=new He(De)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const s=this.Ge(n);switch(e.state){case 0:this.ze(n)&&s.De(e.resumeToken);break;case 1:s.Oe(),s.Se||s.Ce(),s.De(e.resumeToken);break;case 2:s.Oe(),s.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(s.Ne(),s.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),s.De(e.resumeToken));break;default:he()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((s,r)=>{this.ze(r)&&n(r)})}He(e){const n=e.targetId,s=e.me.count,r=this.Je(n);if(r){const i=r.target;if(mc(i))if(s===0){const a=new ae(i.path);this.Ue(n,a,yt.newNoDocument(a,fe.min()))}else Me(s===1);else{const a=this.Ye(n);if(a!==s){const l=this.Ze(e),c=l?this.Xe(l,e,a):1;if(c!==0){this.je(n);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:i=0}=n;let a,l;try{a=As(s).toUint8Array()}catch(c){if(c instanceof yg)return rr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new cu(a,r,i)}catch(c){return rr(c instanceof zr?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ie===0?null:l}Xe(e,n,s){return n.me.count===s-this.nt(e,n.targetId)?0:2}nt(e,n){const s=this.Le.getRemoteKeysForTarget(n);let r=0;return s.forEach(i=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,i,null),r++)}),r}rt(e){const n=new Map;this.Be.forEach((i,a)=>{const l=this.Je(a);if(l){if(i.current&&mc(l.target)){const c=new ae(l.target.path);this.ke.get(c)!==null||this.it(a,c)||this.Ue(a,c,yt.newNoDocument(c,e))}i.be&&(n.set(a,i.ve()),i.Ce())}});let s=Ae();this.qe.forEach((i,a)=>{let l=!0;a.forEachWhile(c=>{const h=this.Je(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(s=s.add(i))}),this.ke.forEach((i,a)=>a.setReadTime(e));const r=new Ca(e,n,this.Qe,this.ke,s);return this.ke=An(),this.qe=tf(),this.Qe=new He(De),r}$e(e,n){if(!this.ze(e))return;const s=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,s),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,s){if(!this.ze(e))return;const r=this.Ge(e);this.it(e,n)?r.Fe(n,1):r.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),s&&(this.ke=this.ke.insert(n,s))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new ef,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new ct(De),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||te("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new ef),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function tf(){return new He(ae.comparator)}function nf(){return new He(ae.comparator)}const qE={asc:"ASCENDING",desc:"DESCENDING"},WE={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},zE={and:"AND",or:"OR"};class KE{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function yc(t,e){return t.useProto3Json||va(e)?e:{value:e}}function Wo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function $g(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function GE(t,e){return Wo(t,e.toTimestamp())}function tn(t){return Me(!!t),fe.fromTimestamp(function(n){const s=es(n);return new Xe(s.seconds,s.nanos)}(t))}function uu(t,e){return vc(t,e).canonicalString()}function vc(t,e){const n=function(r){return new We(["projects",r.projectId,"databases",r.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Hg(t){const e=We.fromString(t);return Me(Gg(e)),e}function Ec(t,e){return uu(t.databaseId,e.path)}function Ll(t,e){const n=Hg(e);if(n.get(1)!==t.databaseId.projectId)throw new ie(B.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ie(B.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ae(Wg(n))}function qg(t,e){return uu(t.databaseId,e)}function QE(t){const e=Hg(t);return e.length===4?We.emptyPath():Wg(e)}function wc(t){return new We(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Wg(t){return Me(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function sf(t,e,n){return{name:Ec(t,e),fields:n.value.mapValue.fields}}function ZE(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:he()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(Me(f===void 0||typeof f=="string"),ht.fromBase64String(f||"")):(Me(f===void 0||f instanceof Buffer||f instanceof Uint8Array),ht.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(h){const f=h.code===void 0?B.UNKNOWN:Fg(h.code);return new ie(f,h.message||"")}(a);n=new jg(s,r,i,l||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Ll(t,s.document.name),i=tn(s.document.updateTime),a=s.document.createTime?tn(s.document.createTime):fe.min(),l=new xt({mapValue:{fields:s.document.fields}}),c=yt.newFoundDocument(r,i,a,l),h=s.targetIds||[],f=s.removedTargetIds||[];n=new Io(h,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Ll(t,s.document),i=s.readTime?tn(s.readTime):fe.min(),a=yt.newNoDocument(r,i),l=s.removedTargetIds||[];n=new Io([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Ll(t,s.document),i=s.removedTargetIds||[];n=new Io([],i,r,null)}else{if(!("filter"in e))return he();{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,a=new FE(r,i),l=s.targetId;n=new Bg(l,a)}}return n}function YE(t,e){let n;if(e instanceof Pi)n={update:sf(t,e.key,e.value)};else if(e instanceof Ug)n={delete:Ec(t,e.key)};else if(e instanceof Rs)n={update:sf(t,e.key,e.data),updateMask:ow(e.fieldMask)};else{if(!(e instanceof xE))return he();n={verify:Ec(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,a){const l=a.transform;if(l instanceof Ho)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof pi)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof gi)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof qo)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw he()}(0,s))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:GE(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:he()}(t,e.precondition)),n}function JE(t,e){return t&&t.length>0?(Me(e!==void 0),t.map(n=>function(r,i){let a=r.updateTime?tn(r.updateTime):tn(i);return a.isEqual(fe.min())&&(a=tn(i)),new NE(a,r.transformResults||[])}(n,e))):[]}function XE(t,e){return{documents:[qg(t,e.path)]}}function ew(t,e){const n={structuredQuery:{}},s=e.path;let r;e.collectionGroup!==null?(r=s,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=qg(t,r);const i=function(h){if(h.length!==0)return Kg(ln.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(f=>function(p){return{field:Fs(p.field),direction:sw(p.dir)}}(f))}(e.orderBy);a&&(n.structuredQuery.orderBy=a);const l=yc(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:r}}function tw(t){let e=QE(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){Me(s===1);const f=n.from[0];f.allDescendants?r=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(g){const p=zg(g);return p instanceof ln&&Ig(p)?p.getFilters():[p]}(n.where));let a=[];n.orderBy&&(a=function(g){return g.map(p=>function(V){return new $o(Bs(V.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(V.direction))}(p))}(n.orderBy));let l=null;n.limit&&(l=function(g){let p;return p=typeof g=="object"?g.value:g,va(p)?null:p}(n.limit));let c=null;n.startAt&&(c=function(g){const p=!!g.before,C=g.values||[];return new jo(C,p)}(n.startAt));let h=null;return n.endAt&&(h=function(g){const p=!g.before,C=g.values||[];return new jo(C,p)}(n.endAt)),vE(e,r,a,i,l,"F",c,h)}function nw(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return he()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function zg(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=Bs(n.unaryFilter.field);return Je.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=Bs(n.unaryFilter.field);return Je.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Bs(n.unaryFilter.field);return Je.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Bs(n.unaryFilter.field);return Je.create(a,"!=",{nullValue:"NULL_VALUE"});default:return he()}}(t):t.fieldFilter!==void 0?function(n){return Je.create(Bs(n.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return he()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return ln.create(n.compositeFilter.filters.map(s=>zg(s)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return he()}}(n.compositeFilter.op))}(t):he()}function sw(t){return qE[t]}function rw(t){return WE[t]}function iw(t){return zE[t]}function Fs(t){return{fieldPath:t.canonicalString()}}function Bs(t){return lt.fromServerFormat(t.fieldPath)}function Kg(t){return t instanceof Je?function(n){if(n.op==="=="){if(Hd(n.value))return{unaryFilter:{field:Fs(n.field),op:"IS_NAN"}};if($d(n.value))return{unaryFilter:{field:Fs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Hd(n.value))return{unaryFilter:{field:Fs(n.field),op:"IS_NOT_NAN"}};if($d(n.value))return{unaryFilter:{field:Fs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Fs(n.field),op:rw(n.op),value:n.value}}}(t):t instanceof ln?function(n){const s=n.getFilters().map(r=>Kg(r));return s.length===1?s[0]:{compositeFilter:{op:iw(n.op),filters:s}}}(t):he()}function ow(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Gg(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class jn{constructor(e,n,s,r,i=fe.min(),a=fe.min(),l=ht.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new jn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new jn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new jn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new jn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class aw{constructor(e){this.ct=e}}function lw(t){const e=tw({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?_c(e,e.limit,"L"):e}/**
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
 */class cw{constructor(){this.un=new uw}addToCollectionParentIndex(e,n){return this.un.add(n),U.resolve()}getCollectionParents(e,n){return U.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return U.resolve()}deleteFieldIndex(e,n){return U.resolve()}deleteAllFieldIndexes(e){return U.resolve()}createTargetIndexes(e,n){return U.resolve()}getDocumentsMatchingTarget(e,n){return U.resolve(null)}getIndexType(e,n){return U.resolve(0)}getFieldIndexes(e,n){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,n){return U.resolve(Xn.min())}getMinOffsetFromCollectionGroup(e,n){return U.resolve(Xn.min())}updateCollectionGroup(e,n,s){return U.resolve()}updateIndexEntries(e,n){return U.resolve()}}class uw{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new ct(We.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new ct(We.comparator)).toArray()}}/**
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
 */class lr{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new lr(0)}static kn(){return new lr(-1)}}/**
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
 */class hw{constructor(){this.changes=new yr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,yt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?U.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class dw{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class fw{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&ti(s.mutation,r,Wt.empty(),Xe.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,Ae()).next(()=>s))}getLocalViewOfDocuments(e,n,s=Ae()){const r=gs();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let a=Wr();return i.forEach((l,c)=>{a=a.insert(l,c.overlayedDocument)}),a}))}getOverlayedDocuments(e,n){const s=gs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,Ae()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((a,l)=>{n.set(a,l)})})}computeViews(e,n,s,r){let i=An();const a=ei(),l=function(){return ei()}();return n.forEach((c,h)=>{const f=s.get(h.key);r.has(h.key)&&(f===void 0||f.mutation instanceof Rs)?i=i.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),ti(f.mutation,h,f.mutation.getFieldMask(),Xe.now())):a.set(h.key,Wt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((h,f)=>a.set(h,f)),n.forEach((h,f)=>{var g;return l.set(h,new dw(f,(g=a.get(h))!==null&&g!==void 0?g:null))}),l))}recalculateAndSaveOverlays(e,n){const s=ei();let r=new He((a,l)=>a-l),i=Ae();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(a=>{for(const l of a)l.keys().forEach(c=>{const h=n.get(c);if(h===null)return;let f=s.get(c)||Wt.empty();f=l.applyToLocalView(h,f),s.set(c,f);const g=(r.get(l.batchId)||Ae()).add(c);r=r.insert(l.batchId,g)})}).next(()=>{const a=[],l=r.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,f=c.value,g=kg();f.forEach(p=>{if(!i.has(p)){const C=xg(n.get(p),s.get(p));C!==null&&g.set(p,C),i=i.add(p)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,g))}return U.waitFor(a)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s,r){return function(a){return ae.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):EE(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,r):this.getDocumentsMatchingCollectionQuery(e,n,s,r)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const a=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):U.resolve(gs());let l=-1,c=i;return a.next(h=>U.forEach(h,(f,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),i.get(f)?U.resolve():this.remoteDocumentCache.getEntry(e,f).next(p=>{c=c.insert(f,p)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,c,h,Ae())).next(f=>({batchId:l,changes:Sg(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ae(n)).next(s=>{let r=Wr();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s,r){const i=n.collectionGroup;let a=Wr();return this.indexManager.getCollectionParents(e,i).next(l=>U.forEach(l,c=>{const h=function(g,p){return new Ea(p,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,s,r).next(f=>{f.forEach((g,p)=>{a=a.insert(g,p)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,n,s,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i,r))).next(a=>{i.forEach((c,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,yt.newInvalidDocument(f)))});let l=Wr();return a.forEach((c,h)=>{const f=i.get(c);f!==void 0&&ti(f.mutation,h,Wt.empty(),Xe.now()),Ta(n,h)&&(l=l.insert(c,h))}),l})}}/**
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
 */class pw{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return U.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(r){return{id:r.id,version:r.version,createTime:tn(r.createTime)}}(n)),U.resolve()}getNamedQuery(e,n){return U.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(r){return{name:r.name,query:lw(r.bundledQuery),readTime:tn(r.readTime)}}(n)),U.resolve()}}/**
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
 */class gw{constructor(){this.overlays=new He(ae.comparator),this.Ir=new Map}getOverlay(e,n){return U.resolve(this.overlays.get(n))}getOverlays(e,n){const s=gs();return U.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.ht(e,n,i)}),U.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.Ir.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(s)),U.resolve()}getOverlaysForCollection(e,n,s){const r=gs(),i=n.length+1,a=new ae(n.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return U.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new He((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>s){let f=i.get(h.largestBatchId);f===null&&(f=gs(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=gs(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=r)););return U.resolve(l)}ht(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const a=this.Ir.get(r.largestBatchId).delete(s.key);this.Ir.set(r.largestBatchId,a)}this.overlays=this.overlays.insert(s.key,new UE(n,s));let i=this.Ir.get(n);i===void 0&&(i=Ae(),this.Ir.set(n,i)),this.Ir.set(n,i.add(s.key))}}/**
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
 */class mw{constructor(){this.sessionToken=ht.EMPTY_BYTE_STRING}getSessionToken(e){return U.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,U.resolve()}}/**
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
 */class hu{constructor(){this.Tr=new ct(nt.Er),this.dr=new ct(nt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const s=new nt(e,n);this.Tr=this.Tr.add(s),this.dr=this.dr.add(s)}Rr(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.Vr(new nt(e,n))}mr(e,n){e.forEach(s=>this.removeReference(s,n))}gr(e){const n=new ae(new We([])),s=new nt(n,e),r=new nt(n,e+1),i=[];return this.dr.forEachInRange([s,r],a=>{this.Vr(a),i.push(a.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new ae(new We([])),s=new nt(n,e),r=new nt(n,e+1);let i=Ae();return this.dr.forEachInRange([s,r],a=>{i=i.add(a.key)}),i}containsKey(e){const n=new nt(e,0),s=this.Tr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class nt{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return ae.comparator(e.key,n.key)||De(e.wr,n.wr)}static Ar(e,n){return De(e.wr,n.wr)||ae.comparator(e.key,n.key)}}/**
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
 */class _w{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new ct(nt.Er)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new LE(i,n,s,r);this.mutationQueue.push(a);for(const l of r)this.br=this.br.add(new nt(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return U.resolve(a)}lookupMutationBatch(e,n){return U.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.vr(s),i=r<0?0:r;return U.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new nt(n,0),r=new nt(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([s,r],a=>{const l=this.Dr(a.wr);i.push(l)}),U.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new ct(De);return n.forEach(r=>{const i=new nt(r,0),a=new nt(r,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,a],l=>{s=s.add(l.wr)})}),U.resolve(this.Cr(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;ae.isDocumentKey(i)||(i=i.child(""));const a=new nt(new ae(i),0);let l=new ct(De);return this.br.forEachWhile(c=>{const h=c.key.path;return!!s.isPrefixOf(h)&&(h.length===r&&(l=l.add(c.wr)),!0)},a),U.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(s=>{const r=this.Dr(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){Me(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.br;return U.forEach(n.mutations,r=>{const i=new nt(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.br=s})}On(e){}containsKey(e,n){const s=new nt(n,0),r=this.br.firstAfterOrEqual(s);return U.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class yw{constructor(e){this.Mr=e,this.docs=function(){return new He(ae.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,a=this.Mr(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return U.resolve(s?s.document.mutableCopy():yt.newInvalidDocument(n))}getEntries(e,n){let s=An();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():yt.newInvalidDocument(r))}),U.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=An();const a=n.path,l=new ae(a.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:f}}=c.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||eE(Xv(f),s)<=0||(r.has(f.key)||Ta(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return U.resolve(i)}getAllFromCollectionGroup(e,n,s,r){he()}Or(e,n){return U.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new vw(this)}getSize(e){return U.resolve(this.size)}}class vw extends hw{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.cr.addEntry(e,r)):this.cr.removeEntry(s)}),U.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class Ew{constructor(e){this.persistence=e,this.Nr=new yr(n=>iu(n),ou),this.lastRemoteSnapshotVersion=fe.min(),this.highestTargetId=0,this.Lr=0,this.Br=new hu,this.targetCount=0,this.kr=lr.Bn()}forEachTarget(e,n){return this.Nr.forEach((s,r)=>n(r)),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Lr&&(this.Lr=n),U.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new lr(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,U.resolve()}updateTargetData(e,n){return this.Kn(n),U.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Nr.forEach((a,l)=>{l.sequenceNumber<=n&&s.get(l.targetId)===null&&(this.Nr.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),r++)}),U.waitFor(i).next(()=>r)}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,n){const s=this.Nr.get(n)||null;return U.resolve(s)}addMatchingKeys(e,n,s){return this.Br.Rr(n,s),U.resolve()}removeMatchingKeys(e,n,s){this.Br.mr(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(a=>{i.push(r.markPotentiallyOrphaned(e,a))}),U.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),U.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Br.yr(n);return U.resolve(s)}containsKey(e,n){return U.resolve(this.Br.containsKey(n))}}/**
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
 */class ww{constructor(e,n){this.qr={},this.overlays={},this.Qr=new tu(0),this.Kr=!1,this.Kr=!0,this.$r=new mw,this.referenceDelegate=e(this),this.Ur=new Ew(this),this.indexManager=new cw,this.remoteDocumentCache=function(r){return new yw(r)}(s=>this.referenceDelegate.Wr(s)),this.serializer=new aw(n),this.Gr=new pw(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new gw,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.qr[e.toKey()];return s||(s=new _w(n,this.referenceDelegate),this.qr[e.toKey()]=s),s}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,s){te("MemoryPersistence","Starting transaction:",e);const r=new Iw(this.Qr.next());return this.referenceDelegate.zr(),s(r).next(i=>this.referenceDelegate.jr(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Hr(e,n){return U.or(Object.values(this.qr).map(s=>()=>s.containsKey(e,n)))}}class Iw extends nE{constructor(e){super(),this.currentSequenceNumber=e}}class du{constructor(e){this.persistence=e,this.Jr=new hu,this.Yr=null}static Zr(e){return new du(e)}get Xr(){if(this.Yr)return this.Yr;throw he()}addReference(e,n,s){return this.Jr.addReference(s,n),this.Xr.delete(s.toString()),U.resolve()}removeReference(e,n,s){return this.Jr.removeReference(s,n),this.Xr.add(s.toString()),U.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),U.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(r=>this.Xr.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Xr.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.Xr,s=>{const r=ae.fromPath(s);return this.ei(e,r).next(i=>{i||n.removeEntry(r,fe.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(s=>{s?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return U.or([()=>U.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class fu{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.$i=s,this.Ui=r}static Wi(e,n){let s=Ae(),r=Ae();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new fu(e,n.fromCache,s,r)}}/**
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
 */class Tw{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Aw{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Cy()?8:sE(wt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,s,r){const i={result:null};return this.Yi(e,n).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.Zi(e,n,r,s).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new Tw;return this.Xi(e,n,a).next(l=>{if(i.result=l,this.zi)return this.es(e,n,a,l.size)})}).next(()=>i.result)}es(e,n,s,r){return s.documentReadCount<this.ji?(Fr()<=Ce.DEBUG&&te("QueryEngine","SDK will not create cache indexes for query:",Us(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),U.resolve()):(Fr()<=Ce.DEBUG&&te("QueryEngine","Query:",Us(n),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.Hi*r?(Fr()<=Ce.DEBUG&&te("QueryEngine","The SDK decides to create cache indexes for query:",Us(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,en(n))):U.resolve())}Yi(e,n){if(Kd(n))return U.resolve(null);let s=en(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=_c(n,null,"F"),s=en(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const a=Ae(...i);return this.Ji.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,s).next(c=>{const h=this.ts(n,l);return this.ns(n,h,a,c.readTime)?this.Yi(e,_c(n,null,"F")):this.rs(e,h,n,c)}))})))}Zi(e,n,s,r){return Kd(n)||r.isEqual(fe.min())?U.resolve(null):this.Ji.getDocuments(e,s).next(i=>{const a=this.ts(n,i);return this.ns(n,a,s,r)?U.resolve(null):(Fr()<=Ce.DEBUG&&te("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Us(n)),this.rs(e,a,n,Jv(r,-1)).next(l=>l))})}ts(e,n){let s=new ct(Rg(e));return n.forEach((r,i)=>{Ta(e,i)&&(s=s.add(i))}),s}ns(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Xi(e,n,s){return Fr()<=Ce.DEBUG&&te("QueryEngine","Using full collection scan to execute query:",Us(n)),this.Ji.getDocumentsMatchingQuery(e,n,Xn.min(),s)}rs(e,n,s,r){return this.Ji.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */class bw{constructor(e,n,s,r){this.persistence=e,this.ss=n,this.serializer=r,this.os=new He(De),this._s=new yr(i=>iu(i),ou),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(s)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new fw(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function Cw(t,e,n,s){return new bw(t,e,n,s)}async function Qg(t,e){const n=pe(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.ls(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const a=[],l=[];let c=Ae();for(const h of r){a.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}for(const h of i){l.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}return n.localDocuments.getDocuments(s,c).next(h=>({hs:h,removedBatchIds:a,addedBatchIds:l}))})})}function Rw(t,e){const n=pe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,c,h,f){const g=h.batch,p=g.keys();let C=U.resolve();return p.forEach(V=>{C=C.next(()=>f.getEntry(c,V)).next(M=>{const N=h.docVersions.get(V);Me(N!==null),M.version.compareTo(N)<0&&(g.applyToRemoteDocument(M,h),M.isValidDocument()&&(M.setReadTime(h.commitVersion),f.addEntry(M)))})}),C.next(()=>l.mutationQueue.removeMutationBatch(c,g))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(l){let c=Ae();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function Zg(t){const e=pe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function Pw(t,e){const n=pe(t),s=e.snapshotVersion;let r=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=n.cs.newChangeBuffer({trackRemovals:!0});r=n.os;const l=[];e.targetChanges.forEach((f,g)=>{const p=r.get(g);if(!p)return;l.push(n.Ur.removeMatchingKeys(i,f.removedDocuments,g).next(()=>n.Ur.addMatchingKeys(i,f.addedDocuments,g)));let C=p.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(g)!==null?C=C.withResumeToken(ht.EMPTY_BYTE_STRING,fe.min()).withLastLimboFreeSnapshotVersion(fe.min()):f.resumeToken.approximateByteSize()>0&&(C=C.withResumeToken(f.resumeToken,s)),r=r.insert(g,C),function(M,N,j){return M.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-M.snapshotVersion.toMicroseconds()>=3e8?!0:j.addedDocuments.size+j.modifiedDocuments.size+j.removedDocuments.size>0}(p,C,f)&&l.push(n.Ur.updateTargetData(i,C))});let c=An(),h=Ae();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(Sw(i,a,e.documentUpdates).next(f=>{c=f.Ps,h=f.Is})),!s.isEqual(fe.min())){const f=n.Ur.getLastRemoteSnapshotVersion(i).next(g=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,s));l.push(f)}return U.waitFor(l).next(()=>a.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,h)).next(()=>c)}).then(i=>(n.os=r,i))}function Sw(t,e,n){let s=Ae(),r=Ae();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let a=An();return n.forEach((l,c)=>{const h=i.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(r=r.add(l)),c.isNoDocument()&&c.version.isEqual(fe.min())?(e.removeEntry(l,c.readTime),a=a.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),a=a.insert(l,c)):te("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{Ps:a,Is:r}})}function kw(t,e){const n=pe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function Vw(t,e){const n=pe(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Ur.getTargetData(s,e).next(i=>i?(r=i,U.resolve(r)):n.Ur.allocateTargetId(s).next(a=>(r=new jn(e,a,"TargetPurposeListen",s.currentSequenceNumber),n.Ur.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.os.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.os=n.os.insert(s.targetId,s),n._s.set(e,s.targetId)),s})}async function Ic(t,e,n){const s=pe(t),r=s.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,a=>s.persistence.referenceDelegate.removeTarget(a,r))}catch(a){if(!Ri(a))throw a;te("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}s.os=s.os.remove(e),s._s.delete(r.target)}function rf(t,e,n){const s=pe(t);let r=fe.min(),i=Ae();return s.persistence.runTransaction("Execute query","readwrite",a=>function(c,h,f){const g=pe(c),p=g._s.get(f);return p!==void 0?U.resolve(g.os.get(p)):g.Ur.getTargetData(h,f)}(s,a,en(e)).next(l=>{if(l)return r=l.lastLimboFreeSnapshotVersion,s.Ur.getMatchingKeysForTargetId(a,l.targetId).next(c=>{i=c})}).next(()=>s.ss.getDocumentsMatchingQuery(a,e,n?r:fe.min(),n?i:Ae())).next(l=>(Dw(s,IE(e),l),{documents:l,Ts:i})))}function Dw(t,e,n){let s=t.us.get(e)||fe.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.us.set(e,s)}class of{constructor(){this.activeTargetIds=PE()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Nw{constructor(){this.so=new of,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,s){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new of,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Ow{_o(e){}shutdown(){}}/**
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
 */class af{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){te("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){te("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let co=null;function Ul(){return co===null?co=function(){return 268435456+Math.round(2147483648*Math.random())}():co++,"0x"+co.toString(16)}/**
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
 */const Mw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class xw{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const gt="WebChannelConnection";class Lw extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const s=n.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=s+"://"+n.host,this.vo=`projects/${r}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${r}`:`project_id=${r}&database_id=${i}`}get Fo(){return!1}Mo(n,s,r,i,a){const l=Ul(),c=this.xo(n,s.toUriEncodedString());te("RestConnection",`Sending RPC '${n}' ${l}:`,c,r);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,i,a),this.No(n,c,h,r).then(f=>(te("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw rr("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",c,"request:",r),f})}Lo(n,s,r,i,a,l){return this.Mo(n,s,r,i,a)}Oo(n,s,r){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+mr}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((i,a)=>n[a]=i),r&&r.headers.forEach((i,a)=>n[a]=i)}xo(n,s){const r=Mw[n];return`${this.Do}/v1/${s}:${r}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,s,r){const i=Ul();return new Promise((a,l)=>{const c=new ug;c.setWithCredentials(!0),c.listenOnce(hg.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case vo.NO_ERROR:const f=c.getResponseJson();te(gt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),a(f);break;case vo.TIMEOUT:te(gt,`RPC '${e}' ${i} timed out`),l(new ie(B.DEADLINE_EXCEEDED,"Request time out"));break;case vo.HTTP_ERROR:const g=c.getStatus();if(te(gt,`RPC '${e}' ${i} failed with status:`,g,"response text:",c.getResponseText()),g>0){let p=c.getResponseJson();Array.isArray(p)&&(p=p[0]);const C=p==null?void 0:p.error;if(C&&C.status&&C.message){const V=function(N){const j=N.toLowerCase().replace(/_/g,"-");return Object.values(B).indexOf(j)>=0?j:B.UNKNOWN}(C.status);l(new ie(V,C.message))}else l(new ie(B.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new ie(B.UNAVAILABLE,"Connection failed."));break;default:he()}}finally{te(gt,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(r);te(gt,`RPC '${e}' ${i} sending request:`,r),c.send(n,"POST",h,s,15)})}Bo(e,n,s){const r=Ul(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=pg(),l=fg(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const f=i.join("");te(gt,`Creating RPC '${e}' stream ${r}: ${f}`,c);const g=a.createWebChannel(f,c);let p=!1,C=!1;const V=new xw({Io:N=>{C?te(gt,`Not sending because RPC '${e}' stream ${r} is closed:`,N):(p||(te(gt,`Opening RPC '${e}' stream ${r} transport.`),g.open(),p=!0),te(gt,`RPC '${e}' stream ${r} sending:`,N),g.send(N))},To:()=>g.close()}),M=(N,j,H)=>{N.listen(j,X=>{try{H(X)}catch(Q){setTimeout(()=>{throw Q},0)}})};return M(g,qr.EventType.OPEN,()=>{C||(te(gt,`RPC '${e}' stream ${r} transport opened.`),V.yo())}),M(g,qr.EventType.CLOSE,()=>{C||(C=!0,te(gt,`RPC '${e}' stream ${r} transport closed`),V.So())}),M(g,qr.EventType.ERROR,N=>{C||(C=!0,rr(gt,`RPC '${e}' stream ${r} transport errored:`,N),V.So(new ie(B.UNAVAILABLE,"The operation could not be completed")))}),M(g,qr.EventType.MESSAGE,N=>{var j;if(!C){const H=N.data[0];Me(!!H);const X=H,Q=X.error||((j=X[0])===null||j===void 0?void 0:j.error);if(Q){te(gt,`RPC '${e}' stream ${r} received error:`,Q);const Pe=Q.status;let ve=function(w){const E=Qe[w];if(E!==void 0)return Fg(E)}(Pe),R=Q.message;ve===void 0&&(ve=B.INTERNAL,R="Unknown error status: "+Pe+" with message "+Q.message),C=!0,V.So(new ie(ve,R)),g.close()}else te(gt,`RPC '${e}' stream ${r} received:`,H),V.bo(H)}}),M(l,dg.STAT_EVENT,N=>{N.stat===dc.PROXY?te(gt,`RPC '${e}' stream ${r} detected buffering proxy`):N.stat===dc.NOPROXY&&te(gt,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{V.wo()},0),V}}function Fl(){return typeof document<"u"?document:null}/**
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
 */function Ra(t){return new KE(t,!0)}/**
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
 */class Yg{constructor(e,n,s=1e3,r=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=s,this.qo=r,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),s=Math.max(0,Date.now()-this.Uo),r=Math.max(0,n-s);r>0&&te("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,r,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class Jg{constructor(e,n,s,r,i,a,l,c){this.ui=e,this.Ho=s,this.Jo=r,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Yg(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===B.RESOURCE_EXHAUSTED?(Tn(n.toString()),Tn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===B.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Yo===n&&this.P_(s,r)},s=>{e(()=>{const r=new ie(B.UNKNOWN,"Fetching auth token failed: "+s.message);return this.I_(r)})})}P_(e,n){const s=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{s(()=>this.listener.Eo())}),this.stream.Ro(()=>{s(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(r=>{s(()=>this.I_(r))}),this.stream.onMessage(r=>{s(()=>++this.e_==1?this.E_(r):this.onNext(r))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return te("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(te("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Uw extends Jg{constructor(e,n,s,r,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,a),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=ZE(this.serializer,e),s=function(i){if(!("targetChange"in i))return fe.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?fe.min():a.readTime?tn(a.readTime):fe.min()}(e);return this.listener.d_(n,s)}A_(e){const n={};n.database=wc(this.serializer),n.addTarget=function(i,a){let l;const c=a.target;if(l=mc(c)?{documents:XE(i,c)}:{query:ew(i,c)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=$g(i,a.resumeToken);const h=yc(i,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(fe.min())>0){l.readTime=Wo(i,a.snapshotVersion.toTimestamp());const h=yc(i,a.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const s=nw(this.serializer,e);s&&(n.labels=s),this.a_(n)}R_(e){const n={};n.database=wc(this.serializer),n.removeTarget=e,this.a_(n)}}class Fw extends Jg{constructor(e,n,s,r,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,a),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Me(!!e.streamToken),this.lastStreamToken=e.streamToken,Me(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Me(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=JE(e.writeResults,e.commitTime),s=tn(e.commitTime);return this.listener.g_(s,n)}p_(){const e={};e.database=wc(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>YE(this.serializer,s))};this.a_(n)}}/**
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
 */class Bw extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.y_=!1}w_(){if(this.y_)throw new ie(B.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,s,r){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Mo(e,vc(n,s),r,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ie(B.UNKNOWN,i.toString())})}Lo(e,n,s,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Lo(e,vc(n,s),r,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new ie(B.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class jw{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Tn(n),this.D_=!1):te("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class $w{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(a=>{s.enqueueAndForget(async()=>{Ps(this)&&(te("RemoteStore","Restarting streams for network reachability change."),await async function(c){const h=pe(c);h.L_.add(4),await ki(h),h.q_.set("Unknown"),h.L_.delete(4),await Pa(h)}(this))})}),this.q_=new jw(s,r)}}async function Pa(t){if(Ps(t))for(const e of t.B_)await e(!0)}async function ki(t){for(const e of t.B_)await e(!1)}function Xg(t,e){const n=pe(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),_u(n)?mu(n):vr(n).r_()&&gu(n,e))}function pu(t,e){const n=pe(t),s=vr(n);n.N_.delete(e),s.r_()&&e0(n,e),n.N_.size===0&&(s.r_()?s.o_():Ps(n)&&n.q_.set("Unknown"))}function gu(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(fe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}vr(t).A_(e)}function e0(t,e){t.Q_.xe(e),vr(t).R_(e)}function mu(t){t.Q_=new HE({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),vr(t).start(),t.q_.v_()}function _u(t){return Ps(t)&&!vr(t).n_()&&t.N_.size>0}function Ps(t){return pe(t).L_.size===0}function t0(t){t.Q_=void 0}async function Hw(t){t.q_.set("Online")}async function qw(t){t.N_.forEach((e,n)=>{gu(t,e)})}async function Ww(t,e){t0(t),_u(t)?(t.q_.M_(e),mu(t)):t.q_.set("Unknown")}async function zw(t,e,n){if(t.q_.set("Online"),e instanceof jg&&e.state===2&&e.cause)try{await async function(r,i){const a=i.cause;for(const l of i.targetIds)r.N_.has(l)&&(await r.remoteSyncer.rejectListen(l,a),r.N_.delete(l),r.Q_.removeTarget(l))}(t,e)}catch(s){te("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await zo(t,s)}else if(e instanceof Io?t.Q_.Ke(e):e instanceof Bg?t.Q_.He(e):t.Q_.We(e),!n.isEqual(fe.min()))try{const s=await Zg(t.localStore);n.compareTo(s)>=0&&await function(i,a){const l=i.Q_.rt(a);return l.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.N_.get(h);f&&i.N_.set(h,f.withResumeToken(c.resumeToken,a))}}),l.targetMismatches.forEach((c,h)=>{const f=i.N_.get(c);if(!f)return;i.N_.set(c,f.withResumeToken(ht.EMPTY_BYTE_STRING,f.snapshotVersion)),e0(i,c);const g=new jn(f.target,c,h,f.sequenceNumber);gu(i,g)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(s){te("RemoteStore","Failed to raise snapshot:",s),await zo(t,s)}}async function zo(t,e,n){if(!Ri(e))throw e;t.L_.add(1),await ki(t),t.q_.set("Offline"),n||(n=()=>Zg(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{te("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Pa(t)})}function n0(t,e){return e().catch(n=>zo(t,n,e))}async function Sa(t){const e=pe(t),n=ts(e);let s=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;Kw(e);)try{const r=await kw(e.localStore,s);if(r===null){e.O_.length===0&&n.o_();break}s=r.batchId,Gw(e,r)}catch(r){await zo(e,r)}s0(e)&&r0(e)}function Kw(t){return Ps(t)&&t.O_.length<10}function Gw(t,e){t.O_.push(e);const n=ts(t);n.r_()&&n.V_&&n.m_(e.mutations)}function s0(t){return Ps(t)&&!ts(t).n_()&&t.O_.length>0}function r0(t){ts(t).start()}async function Qw(t){ts(t).p_()}async function Zw(t){const e=ts(t);for(const n of t.O_)e.m_(n.mutations)}async function Yw(t,e,n){const s=t.O_.shift(),r=lu.from(s,e,n);await n0(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Sa(t)}async function Jw(t,e){e&&ts(t).V_&&await async function(s,r){if(function(a){return BE(a)&&a!==B.ABORTED}(r.code)){const i=s.O_.shift();ts(s).s_(),await n0(s,()=>s.remoteSyncer.rejectFailedWrite(i.batchId,r)),await Sa(s)}}(t,e),s0(t)&&r0(t)}async function lf(t,e){const n=pe(t);n.asyncQueue.verifyOperationInProgress(),te("RemoteStore","RemoteStore received new credentials");const s=Ps(n);n.L_.add(3),await ki(n),s&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Pa(n)}async function Xw(t,e){const n=pe(t);e?(n.L_.delete(2),await Pa(n)):e||(n.L_.add(2),await ki(n),n.q_.set("Unknown"))}function vr(t){return t.K_||(t.K_=function(n,s,r){const i=pe(n);return i.w_(),new Uw(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{Eo:Hw.bind(null,t),Ro:qw.bind(null,t),mo:Ww.bind(null,t),d_:zw.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),_u(t)?mu(t):t.q_.set("Unknown")):(await t.K_.stop(),t0(t))})),t.K_}function ts(t){return t.U_||(t.U_=function(n,s,r){const i=pe(n);return i.w_(),new Fw(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Qw.bind(null,t),mo:Jw.bind(null,t),f_:Zw.bind(null,t),g_:Yw.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Sa(t)):(await t.U_.stop(),t.O_.length>0&&(te("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class yu{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Kn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,r,i){const a=Date.now()+s,l=new yu(e,n,a,r,i);return l.start(s),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ie(B.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function vu(t,e){if(Tn("AsyncQueue",`${e}: ${t}`),Ri(t))return new ie(B.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Gs{constructor(e){this.comparator=e?(n,s)=>e(n,s)||ae.comparator(n.key,s.key):(n,s)=>ae.comparator(n.key,s.key),this.keyedMap=Wr(),this.sortedSet=new He(this.comparator)}static emptySet(e){return new Gs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Gs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Gs;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class cf{constructor(){this.W_=new He(ae.comparator)}track(e){const n=e.doc.key,s=this.W_.get(n);s?e.type!==0&&s.type===3?this.W_=this.W_.insert(n,e):e.type===3&&s.type!==1?this.W_=this.W_.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.W_=this.W_.remove(n):e.type===1&&s.type===2?this.W_=this.W_.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):he():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,s)=>{e.push(s)}),e}}class cr{constructor(e,n,s,r,i,a,l,c,h){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,n,s,r,i){const a=[];return n.forEach(l=>{a.push({type:0,doc:l})}),new cr(e,n,Gs.emptySet(n),a,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ia(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class eI{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class tI{constructor(){this.queries=uf(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,s){const r=pe(n),i=r.queries;r.queries=uf(),i.forEach((a,l)=>{for(const c of l.j_)c.onError(s)})})(this,new ie(B.ABORTED,"Firestore shutting down"))}}function uf(){return new yr(t=>Cg(t),Ia)}async function i0(t,e){const n=pe(t);let s=3;const r=e.query;let i=n.queries.get(r);i?!i.H_()&&e.J_()&&(s=2):(i=new eI,s=e.J_()?0:1);try{switch(s){case 0:i.z_=await n.onListen(r,!0);break;case 1:i.z_=await n.onListen(r,!1);break;case 2:await n.onFirstRemoteStoreListen(r)}}catch(a){const l=vu(a,`Initialization of query '${Us(e.query)}' failed`);return void e.onError(l)}n.queries.set(r,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&Eu(n)}async function o0(t,e){const n=pe(t),s=e.query;let r=3;const i=n.queries.get(s);if(i){const a=i.j_.indexOf(e);a>=0&&(i.j_.splice(a,1),i.j_.length===0?r=e.J_()?0:1:!i.H_()&&e.J_()&&(r=2))}switch(r){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function nI(t,e){const n=pe(t);let s=!1;for(const r of e){const i=r.query,a=n.queries.get(i);if(a){for(const l of a.j_)l.X_(r)&&(s=!0);a.z_=r}}s&&Eu(n)}function sI(t,e,n){const s=pe(t),r=s.queries.get(e);if(r)for(const i of r.j_)i.onError(n);s.queries.delete(e)}function Eu(t){t.Y_.forEach(e=>{e.next()})}var Tc,hf;(hf=Tc||(Tc={})).ea="default",hf.Cache="cache";class a0{constructor(e,n,s){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=s||{}}X_(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new cr(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const s=n!=="Offline";return(!this.options._a||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=cr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Tc.Cache}}/**
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
 */class l0{constructor(e){this.key=e}}class c0{constructor(e){this.key=e}}class rI{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Ae(),this.mutatedKeys=Ae(),this.Aa=Rg(e),this.Ra=new Gs(this.Aa)}get Va(){return this.Ta}ma(e,n){const s=n?n.fa:new cf,r=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,a=r,l=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,h=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((f,g)=>{const p=r.get(f),C=Ta(this.query,g)?g:null,V=!!p&&this.mutatedKeys.has(p.key),M=!!C&&(C.hasLocalMutations||this.mutatedKeys.has(C.key)&&C.hasCommittedMutations);let N=!1;p&&C?p.data.isEqual(C.data)?V!==M&&(s.track({type:3,doc:C}),N=!0):this.ga(p,C)||(s.track({type:2,doc:C}),N=!0,(c&&this.Aa(C,c)>0||h&&this.Aa(C,h)<0)&&(l=!0)):!p&&C?(s.track({type:0,doc:C}),N=!0):p&&!C&&(s.track({type:1,doc:p}),N=!0,(c||h)&&(l=!0)),N&&(C?(a=a.add(C),i=M?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),s.track({type:1,doc:f})}return{Ra:a,fa:s,ns:l,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s,r){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const a=e.fa.G_();a.sort((f,g)=>function(C,V){const M=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return he()}};return M(C)-M(V)}(f.type,g.type)||this.Aa(f.doc,g.doc)),this.pa(s),r=r!=null&&r;const l=n&&!r?this.ya():[],c=this.da.size===0&&this.current&&!r?1:0,h=c!==this.Ea;return this.Ea=c,a.length!==0||h?{snapshot:new cr(this.query,e.Ra,i,a,e.mutatedKeys,c===0,h,!1,!!s&&s.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new cf,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=Ae(),this.Ra.forEach(s=>{this.Sa(s.key)&&(this.da=this.da.add(s.key))});const n=[];return e.forEach(s=>{this.da.has(s)||n.push(new c0(s))}),this.da.forEach(s=>{e.has(s)||n.push(new l0(s))}),n}ba(e){this.Ta=e.Ts,this.da=Ae();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return cr.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class iI{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class oI{constructor(e){this.key=e,this.va=!1}}class aI{constructor(e,n,s,r,i,a){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new yr(l=>Cg(l),Ia),this.Ma=new Map,this.xa=new Set,this.Oa=new He(ae.comparator),this.Na=new Map,this.La=new hu,this.Ba={},this.ka=new Map,this.qa=lr.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function lI(t,e,n=!0){const s=g0(t);let r;const i=s.Fa.get(e);return i?(s.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.Da()):r=await u0(s,e,n,!0),r}async function cI(t,e){const n=g0(t);await u0(n,e,!0,!1)}async function u0(t,e,n,s){const r=await Vw(t.localStore,en(e)),i=r.targetId,a=t.sharedClientState.addLocalQueryTarget(i,n);let l;return s&&(l=await uI(t,e,i,a==="current",r.resumeToken)),t.isPrimaryClient&&n&&Xg(t.remoteStore,r),l}async function uI(t,e,n,s,r){t.Ka=(g,p,C)=>async function(M,N,j,H){let X=N.view.ma(j);X.ns&&(X=await rf(M.localStore,N.query,!1).then(({documents:R})=>N.view.ma(R,X)));const Q=H&&H.targetChanges.get(N.targetId),Pe=H&&H.targetMismatches.get(N.targetId)!=null,ve=N.view.applyChanges(X,M.isPrimaryClient,Q,Pe);return ff(M,N.targetId,ve.wa),ve.snapshot}(t,g,p,C);const i=await rf(t.localStore,e,!0),a=new rI(e,i.Ts),l=a.ma(i.documents),c=Si.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),h=a.applyChanges(l,t.isPrimaryClient,c);ff(t,n,h.wa);const f=new iI(e,n,a);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function hI(t,e,n){const s=pe(t),r=s.Fa.get(e),i=s.Ma.get(r.targetId);if(i.length>1)return s.Ma.set(r.targetId,i.filter(a=>!Ia(a,e))),void s.Fa.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await Ic(s.localStore,r.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(r.targetId),n&&pu(s.remoteStore,r.targetId),Ac(s,r.targetId)}).catch(Ci)):(Ac(s,r.targetId),await Ic(s.localStore,r.targetId,!0))}async function dI(t,e){const n=pe(t),s=n.Fa.get(e),r=n.Ma.get(s.targetId);n.isPrimaryClient&&r.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),pu(n.remoteStore,s.targetId))}async function fI(t,e,n){const s=EI(t);try{const r=await function(a,l){const c=pe(a),h=Xe.now(),f=l.reduce((C,V)=>C.add(V.key),Ae());let g,p;return c.persistence.runTransaction("Locally write mutations","readwrite",C=>{let V=An(),M=Ae();return c.cs.getEntries(C,f).next(N=>{V=N,V.forEach((j,H)=>{H.isValidDocument()||(M=M.add(j))})}).next(()=>c.localDocuments.getOverlayedDocuments(C,V)).next(N=>{g=N;const j=[];for(const H of l){const X=ME(H,g.get(H.key).overlayedDocument);X!=null&&j.push(new Rs(H.key,X,vg(X.value.mapValue),wn.exists(!0)))}return c.mutationQueue.addMutationBatch(C,h,j,l)}).next(N=>{p=N;const j=N.applyToLocalDocumentSet(g,M);return c.documentOverlayCache.saveOverlays(C,N.batchId,j)})}).then(()=>({batchId:p.batchId,changes:Sg(g)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(a,l,c){let h=a.Ba[a.currentUser.toKey()];h||(h=new He(De)),h=h.insert(l,c),a.Ba[a.currentUser.toKey()]=h}(s,r.batchId,n),await Vi(s,r.changes),await Sa(s.remoteStore)}catch(r){const i=vu(r,"Failed to persist write");n.reject(i)}}async function h0(t,e){const n=pe(t);try{const s=await Pw(n.localStore,e);e.targetChanges.forEach((r,i)=>{const a=n.Na.get(i);a&&(Me(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?a.va=!0:r.modifiedDocuments.size>0?Me(a.va):r.removedDocuments.size>0&&(Me(a.va),a.va=!1))}),await Vi(n,s,e)}catch(s){await Ci(s)}}function df(t,e,n){const s=pe(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.Fa.forEach((i,a)=>{const l=a.view.Z_(e);l.snapshot&&r.push(l.snapshot)}),function(a,l){const c=pe(a);c.onlineState=l;let h=!1;c.queries.forEach((f,g)=>{for(const p of g.j_)p.Z_(l)&&(h=!0)}),h&&Eu(c)}(s.eventManager,e),r.length&&s.Ca.d_(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function pI(t,e,n){const s=pe(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.Na.get(e),i=r&&r.key;if(i){let a=new He(ae.comparator);a=a.insert(i,yt.newNoDocument(i,fe.min()));const l=Ae().add(i),c=new Ca(fe.min(),new Map,new He(De),a,l);await h0(s,c),s.Oa=s.Oa.remove(i),s.Na.delete(e),wu(s)}else await Ic(s.localStore,e,!1).then(()=>Ac(s,e,n)).catch(Ci)}async function gI(t,e){const n=pe(t),s=e.batch.batchId;try{const r=await Rw(n.localStore,e);f0(n,s,null),d0(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Vi(n,r)}catch(r){await Ci(r)}}async function mI(t,e,n){const s=pe(t);try{const r=await function(a,l){const c=pe(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return c.mutationQueue.lookupMutationBatch(h,l).next(g=>(Me(g!==null),f=g.keys(),c.mutationQueue.removeMutationBatch(h,g))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>c.localDocuments.getDocuments(h,f))})}(s.localStore,e);f0(s,e,n),d0(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Vi(s,r)}catch(r){await Ci(r)}}function d0(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function f0(t,e,n){const s=pe(t);let r=s.Ba[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.Ba[s.currentUser.toKey()]=r}}function Ac(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.Ma.get(e))t.Fa.delete(s),n&&t.Ca.$a(s,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(s=>{t.La.containsKey(s)||p0(t,s)})}function p0(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(pu(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),wu(t))}function ff(t,e,n){for(const s of n)s instanceof l0?(t.La.addReference(s.key,e),_I(t,s)):s instanceof c0?(te("SyncEngine","Document no longer in limbo: "+s.key),t.La.removeReference(s.key,e),t.La.containsKey(s.key)||p0(t,s.key)):he()}function _I(t,e){const n=e.key,s=n.path.canonicalString();t.Oa.get(n)||t.xa.has(s)||(te("SyncEngine","New document in limbo: "+n),t.xa.add(s),wu(t))}function wu(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new ae(We.fromString(e)),s=t.qa.next();t.Na.set(s,new oI(n)),t.Oa=t.Oa.insert(n,s),Xg(t.remoteStore,new jn(en(wa(n.path)),s,"TargetPurposeLimboResolution",tu.oe))}}async function Vi(t,e,n){const s=pe(t),r=[],i=[],a=[];s.Fa.isEmpty()||(s.Fa.forEach((l,c)=>{a.push(s.Ka(c,e,n).then(h=>{var f;if((h||n)&&s.isPrimaryClient){const g=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;s.sharedClientState.updateQueryState(c.targetId,g?"current":"not-current")}if(h){r.push(h);const g=fu.Wi(c.targetId,h);i.push(g)}}))}),await Promise.all(a),s.Ca.d_(r),await async function(c,h){const f=pe(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>U.forEach(h,p=>U.forEach(p.$i,C=>f.persistence.referenceDelegate.addReference(g,p.targetId,C)).next(()=>U.forEach(p.Ui,C=>f.persistence.referenceDelegate.removeReference(g,p.targetId,C)))))}catch(g){if(!Ri(g))throw g;te("LocalStore","Failed to update sequence numbers: "+g)}for(const g of h){const p=g.targetId;if(!g.fromCache){const C=f.os.get(p),V=C.snapshotVersion,M=C.withLastLimboFreeSnapshotVersion(V);f.os=f.os.insert(p,M)}}}(s.localStore,i))}async function yI(t,e){const n=pe(t);if(!n.currentUser.isEqual(e)){te("SyncEngine","User change. New user:",e.toKey());const s=await Qg(n.localStore,e);n.currentUser=e,function(i,a){i.ka.forEach(l=>{l.forEach(c=>{c.reject(new ie(B.CANCELLED,a))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Vi(n,s.hs)}}function vI(t,e){const n=pe(t),s=n.Na.get(e);if(s&&s.va)return Ae().add(s.key);{let r=Ae();const i=n.Ma.get(e);if(!i)return r;for(const a of i){const l=n.Fa.get(a);r=r.unionWith(l.view.Va)}return r}}function g0(t){const e=pe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=h0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=vI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=pI.bind(null,e),e.Ca.d_=nI.bind(null,e.eventManager),e.Ca.$a=sI.bind(null,e.eventManager),e}function EI(t){const e=pe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=gI.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=mI.bind(null,e),e}class Ko{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ra(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return Cw(this.persistence,new Aw,e.initialUser,this.serializer)}Ga(e){return new ww(du.Zr,this.serializer)}Wa(e){return new Nw}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ko.provider={build:()=>new Ko};class bc{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>df(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=yI.bind(null,this.syncEngine),await Xw(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new tI}()}createDatastore(e){const n=Ra(e.databaseInfo.databaseId),s=function(i){return new Lw(i)}(e.databaseInfo);return function(i,a,l,c){return new Bw(i,a,l,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return function(s,r,i,a,l){return new $w(s,r,i,a,l)}(this.localStore,this.datastore,e.asyncQueue,n=>df(this.syncEngine,n,0),function(){return af.D()?new af:new Ow}())}createSyncEngine(e,n){return function(r,i,a,l,c,h,f){const g=new aI(r,i,a,l,c,h);return f&&(g.Qa=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(r){const i=pe(r);te("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await ki(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}bc.provider={build:()=>new bc};/**
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
 */class m0{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Tn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class wI{constructor(e,n,s,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=_t.UNAUTHENTICATED,this.clientId=mg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(s,async a=>{te("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(s,a=>(te("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Kn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=vu(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Bl(t,e){t.asyncQueue.verifyOperationInProgress(),te("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Qg(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function pf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await II(t);te("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(s=>lf(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,r)=>lf(e.remoteStore,r)),t._onlineComponents=e}async function II(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){te("FirestoreClient","Using user provided OfflineComponentProvider");try{await Bl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(r){return r.name==="FirebaseError"?r.code===B.FAILED_PRECONDITION||r.code===B.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}(n))throw n;rr("Error using user provided cache. Falling back to memory cache: "+n),await Bl(t,new Ko)}}else te("FirestoreClient","Using default OfflineComponentProvider"),await Bl(t,new Ko);return t._offlineComponents}async function _0(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(te("FirestoreClient","Using user provided OnlineComponentProvider"),await pf(t,t._uninitializedComponentsProvider._online)):(te("FirestoreClient","Using default OnlineComponentProvider"),await pf(t,new bc))),t._onlineComponents}function TI(t){return _0(t).then(e=>e.syncEngine)}async function Cc(t){const e=await _0(t),n=e.eventManager;return n.onListen=lI.bind(null,e.syncEngine),n.onUnlisten=hI.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=cI.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=dI.bind(null,e.syncEngine),n}function AI(t,e,n={}){const s=new Kn;return t.asyncQueue.enqueueAndForget(async()=>function(i,a,l,c,h){const f=new m0({next:p=>{f.Za(),a.enqueueAndForget(()=>o0(i,g));const C=p.docs.has(l);!C&&p.fromCache?h.reject(new ie(B.UNAVAILABLE,"Failed to get document because the client is offline.")):C&&p.fromCache&&c&&c.source==="server"?h.reject(new ie(B.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(p)},error:p=>h.reject(p)}),g=new a0(wa(l.path),f,{includeMetadataChanges:!0,_a:!0});return i0(i,g)}(await Cc(t),t.asyncQueue,e,n,s)),s.promise}/**
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
 */function y0(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const gf=new Map;/**
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
 */function bI(t,e,n){if(!n)throw new ie(B.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function CI(t,e,n,s){if(e===!0&&s===!0)throw new ie(B.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function mf(t){if(!ae.isDocumentKey(t))throw new ie(B.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Iu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":he()}function Gn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ie(B.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Iu(t);throw new ie(B.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class _f{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new ie(B.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ie(B.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}CI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=y0((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ie(B.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ie(B.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ie(B.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,r){return s.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Tu{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new _f({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ie(B.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ie(B.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new _f(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new Hv;switch(s.type){case"firstParty":return new Kv(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ie(B.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=gf.get(n);s&&(te("ComponentProvider","Removing Datastore"),gf.delete(n),s.terminate())}(this),Promise.resolve()}}function RI(t,e,n,s={}){var r;const i=(t=Gn(t,Tu))._getSettings(),a=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==a&&rr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:a,ssl:!1})),s.mockUserToken){let l,c;if(typeof s.mockUserToken=="string")l=s.mockUserToken,c=_t.MOCK_USER;else{l=vy(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const h=s.mockUserToken.sub||s.mockUserToken.user_id;if(!h)throw new ie(B.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new _t(h)}t._authCredentials=new qv(new gg(l,c))}}/**
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
 */class ka{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new ka(this.firestore,e,this._query)}}class Nt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new mi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Nt(this.firestore,e,this._key)}}class mi extends ka{constructor(e,n,s){super(e,n,wa(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Nt(this.firestore,null,new ae(e))}withConverter(e){return new mi(this.firestore,e,this._path)}}function js(t,e,...n){if(t=kt(t),arguments.length===1&&(e=mg.newId()),bI("doc","path",e),t instanceof Tu){const s=We.fromString(e,...n);return mf(s),new Nt(t,null,new ae(s))}{if(!(t instanceof Nt||t instanceof mi))throw new ie(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(We.fromString(e,...n));return mf(s),new Nt(t.firestore,t instanceof mi?t.converter:null,new ae(s))}}/**
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
 */class yf{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Yg(this,"async_queue_retry"),this.Vu=()=>{const s=Fl();s&&te("AsyncQueue","Visibility state changed to "+s.visibilityState),this.t_.jo()},this.mu=e;const n=Fl();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Fl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Kn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Ri(e))throw e;te("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(s=>{this.Eu=s,this.du=!1;const r=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(s);throw Tn("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.du=!1,s))));return this.mu=n,n}enqueueAfterDelay(e,n,s){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const r=yu.createAndSchedule(this,e,n,s,i=>this.yu(i));return this.Tu.push(r),r}fu(){this.Eu&&he()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function vf(t){return function(n,s){if(typeof n!="object"||n===null)return!1;const r=n;for(const i of s)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class _i extends Tu{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new yf,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new yf(e),this._firestoreClient=void 0,await e}}}function PI(t,e){const n=typeof t=="object"?t:og(),s=typeof t=="string"?t:e||"(default)",r=Xc(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=_y("firestore");i&&RI(r,...i)}return r}function Au(t){if(t._terminated)throw new ie(B.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||SI(t),t._firestoreClient}function SI(t){var e,n,s;const r=t._freezeSettings(),i=function(l,c,h,f){return new oE(l,c,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,y0(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._componentsProvider||!((n=r.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=r.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._componentsProvider={_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider}),t._firestoreClient=new wI(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
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
 */class ur{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ur(ht.fromBase64String(e))}catch(n){throw new ie(B.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ur(ht.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class bu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ie(B.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new lt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class v0{constructor(e){this._methodName=e}}/**
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
 */class Cu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ie(B.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ie(B.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return De(this._lat,e._lat)||De(this._long,e._long)}}/**
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
 */class Ru{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,r){if(s.length!==r.length)return!1;for(let i=0;i<s.length;++i)if(s[i]!==r[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const kI=/^__.*__$/;class VI{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Rs(e,this.data,this.fieldMask,n,this.fieldTransforms):new Pi(e,this.data,n,this.fieldTransforms)}}function E0(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw he()}}class Pu{constructor(e,n,s,r,i,a){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Pu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Fu({path:s,xu:!1});return r.Ou(e),r}Nu(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Fu({path:s,xu:!1});return r.vu(),r}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Go(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(E0(this.Cu)&&kI.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class DI{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||Ra(e)}Qu(e,n,s,r=!1){return new Pu({Cu:e,methodName:n,qu:s,path:lt.emptyPath(),xu:!1,ku:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function NI(t){const e=t._freezeSettings(),n=Ra(t._databaseId);return new DI(t._databaseId,!!e.ignoreUndefinedProperties,n)}function OI(t,e,n,s,r,i={}){const a=t.Qu(i.merge||i.mergeFields?2:0,e,n,r);A0("Data must be an object, but it was:",a,s);const l=I0(s,a);let c,h;if(i.merge)c=new Wt(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const g of i.mergeFields){const p=MI(e,g,n);if(!a.contains(p))throw new ie(B.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);LI(f,p)||f.push(p)}c=new Wt(f),h=a.fieldTransforms.filter(g=>c.covers(g.field))}else c=null,h=a.fieldTransforms;return new VI(new xt(l),c,h)}function w0(t,e){if(T0(t=kt(t)))return A0("Unsupported field value:",e,t),I0(t,e);if(t instanceof v0)return function(s,r){if(!E0(r.Cu))throw r.Bu(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Bu(`${s._methodName}() is not currently supported inside arrays`);const i=s._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(s,r){const i=[];let a=0;for(const l of s){let c=w0(l,r.Lu(a));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),a++}return{arrayValue:{values:i}}}(t,e)}return function(s,r){if((s=kt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return SE(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const i=Xe.fromDate(s);return{timestampValue:Wo(r.serializer,i)}}if(s instanceof Xe){const i=new Xe(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Wo(r.serializer,i)}}if(s instanceof Cu)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof ur)return{bytesValue:$g(r.serializer,s._byteString)};if(s instanceof Nt){const i=r.databaseId,a=s.firestore._databaseId;if(!a.isEqual(i))throw r.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:uu(s.firestore._databaseId||r.databaseId,s._key.path)}}if(s instanceof Ru)return function(a,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(c=>{if(typeof c!="number")throw l.Bu("VectorValues must only contain numeric values.");return au(l.serializer,c)})}}}}}}(s,r);throw r.Bu(`Unsupported field value: ${Iu(s)}`)}(t,e)}function I0(t,e){const n={};return _g(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):_r(t,(s,r)=>{const i=w0(r,e.Mu(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function T0(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Xe||t instanceof Cu||t instanceof ur||t instanceof Nt||t instanceof v0||t instanceof Ru)}function A0(t,e,n){if(!T0(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const s=Iu(n);throw s==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+s)}}function MI(t,e,n){if((e=kt(e))instanceof bu)return e._internalPath;if(typeof e=="string")return b0(t,e);throw Go("Field path arguments must be of type string or ",t,!1,void 0,n)}const xI=new RegExp("[~\\*/\\[\\]]");function b0(t,e,n){if(e.search(xI)>=0)throw Go(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new bu(...e.split("."))._internalPath}catch{throw Go(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Go(t,e,n,s,r){const i=s&&!s.isEmpty(),a=r!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||a)&&(c+=" (found",i&&(c+=` in field ${s}`),a&&(c+=` in document ${r}`),c+=")"),new ie(B.INVALID_ARGUMENT,l+t+c)}function LI(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class C0{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Nt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new UI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(R0("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class UI extends C0{data(){return super.data()}}function R0(t,e){return typeof e=="string"?b0(t,e):e instanceof bu?e._internalPath:e._delegate._internalPath}/**
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
 */function FI(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ie(B.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class BI{convertValue(e,n="none"){switch(bs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(As(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw he()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return _r(e,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertVectorValue(e){var n,s,r;const i=(r=(s=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||s===void 0?void 0:s.values)===null||r===void 0?void 0:r.map(a=>ze(a.doubleValue));return new Ru(i)}convertGeoPoint(e){return new Cu(ze(e.latitude),ze(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=su(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(hi(e));default:return null}}convertTimestamp(e){const n=es(e);return new Xe(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=We.fromString(e);Me(Gg(s));const r=new di(s.get(1),s.get(3)),i=new ae(s.popFirst(5));return r.isEqual(n)||Tn(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function jI(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
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
 */class Kr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class P0 extends C0{constructor(e,n,s,r,i,a){super(e,n,s,r,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new To(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(R0("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class To extends P0{data(e={}){return super.data(e)}}class $I{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new Kr(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new To(this._firestore,this._userDataWriter,s.key,s,new Kr(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ie(B.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let a=0;return r._snapshot.docChanges.map(l=>{const c=new To(r._firestore,r._userDataWriter,l.doc.key,l.doc,new Kr(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new To(r._firestore,r._userDataWriter,l.doc.key,l.doc,new Kr(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);let h=-1,f=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),f=a.indexOf(l.doc.key)),{type:HI(l.type),doc:c,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function HI(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return he()}}/**
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
 */function Ef(t){t=Gn(t,Nt);const e=Gn(t.firestore,_i);return AI(Au(e),t._key).then(n=>V0(e,t,n))}class S0 extends BI{constructor(e){super(),this.firestore=e}convertBytes(e){return new ur(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Nt(this.firestore,null,n)}}function wf(t,e,n){t=Gn(t,Nt);const s=Gn(t.firestore,_i),r=jI(t.converter,e,n);return qI(s,[OI(NI(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,wn.none())])}function k0(t,...e){var n,s,r;t=kt(t);let i={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||vf(e[a])||(i=e[a],a++);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(vf(e[a])){const g=e[a];e[a]=(n=g.next)===null||n===void 0?void 0:n.bind(g),e[a+1]=(s=g.error)===null||s===void 0?void 0:s.bind(g),e[a+2]=(r=g.complete)===null||r===void 0?void 0:r.bind(g)}let c,h,f;if(t instanceof Nt)h=Gn(t.firestore,_i),f=wa(t._key.path),c={next:g=>{e[a]&&e[a](V0(h,t,g))},error:e[a+1],complete:e[a+2]};else{const g=Gn(t,ka);h=Gn(g.firestore,_i),f=g._query;const p=new S0(h);c={next:C=>{e[a]&&e[a](new $I(h,p,g,C))},error:e[a+1],complete:e[a+2]},FI(t._query)}return function(p,C,V,M){const N=new m0(M),j=new a0(C,N,V);return p.asyncQueue.enqueueAndForget(async()=>i0(await Cc(p),j)),()=>{N.Za(),p.asyncQueue.enqueueAndForget(async()=>o0(await Cc(p),j))}}(Au(h),f,l,c)}function qI(t,e){return function(s,r){const i=new Kn;return s.asyncQueue.enqueueAndForget(async()=>fI(await TI(s),r,i)),i.promise}(Au(t),e)}function V0(t,e,n){const s=n.docs.get(e._key),r=new S0(t);return new P0(t,r,e._key,s,new Kr(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(r){mr=r})(gr),sr(new Is("firestore",(s,{instanceIdentifier:r,options:i})=>{const a=s.getProvider("app").getImmediate(),l=new _i(new Wv(s.getProvider("auth-internal")),new Qv(s.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new ie(B.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new di(h.options.projectId,f)}(a,r),a);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),zn(Ld,"4.7.3",e),zn(Ld,"4.7.3","esm2017")})();var WI="firebase",zI="10.14.1";/**
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
 */zn(WI,zI,"app");function Su(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function D0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const KI=D0,N0=new Ai("auth","Firebase",D0());/**
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
 */const Qo=new Yc("@firebase/auth");function GI(t,...e){Qo.logLevel<=Ce.WARN&&Qo.warn(`Auth (${gr}): ${t}`,...e)}function Ao(t,...e){Qo.logLevel<=Ce.ERROR&&Qo.error(`Auth (${gr}): ${t}`,...e)}/**
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
 */function Gt(t,...e){throw ku(t,...e)}function nn(t,...e){return ku(t,...e)}function O0(t,e,n){const s=Object.assign(Object.assign({},KI()),{[e]:n});return new Ai("auth","Firebase",s).create(e,{appName:t.name})}function Qn(t){return O0(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ku(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return N0.create(t,...e)}function ce(t,e,...n){if(!t)throw ku(e,...n)}function mn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ao(e),new Error(e)}function bn(t,e){t||mn(e)}/**
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
 */function Rc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function QI(){return If()==="http:"||If()==="https:"}function If(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function ZI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(QI()||Ty()||"connection"in navigator)?navigator.onLine:!0}function YI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Di{constructor(e,n){this.shortDelay=e,this.longDelay=n,bn(n>e,"Short delay should be less than long delay!"),this.isMobile=Ey()||Ay()}get(){return ZI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Vu(t,e){bn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class M0{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;mn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;mn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;mn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const JI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const XI=new Di(3e4,6e4);function Ss(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ns(t,e,n,s,r={}){return x0(t,r,async()=>{let i={},a={};s&&(e==="GET"?a=s:i={body:JSON.stringify(s)});const l=bi(Object.assign({key:t.config.apiKey},a)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:c},i);return Iy()||(h.referrerPolicy="no-referrer"),M0.fetch()(L0(t,t.config.apiHost,n,l),h)})}async function x0(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},JI),e);try{const r=new tT(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw uo(t,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw uo(t,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw uo(t,"email-already-in-use",a);if(c==="USER_DISABLED")throw uo(t,"user-disabled",a);const f=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw O0(t,f,h);Gt(t,f)}}catch(r){if(r instanceof Rn)throw r;Gt(t,"network-request-failed",{message:String(r)})}}async function Va(t,e,n,s,r={}){const i=await ns(t,e,n,s,r);return"mfaPendingCredential"in i&&Gt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function L0(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?Vu(t.config,r):`${t.config.apiScheme}://${r}`}function eT(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class tT{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(nn(this.auth,"network-request-failed")),XI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function uo(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=nn(t,e,s);return r.customData._tokenResponse=n,r}function Tf(t){return t!==void 0&&t.enterprise!==void 0}class nT{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return eT(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function sT(t,e){return ns(t,"GET","/v2/recaptchaConfig",Ss(t,e))}/**
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
 */async function rT(t,e){return ns(t,"POST","/v1/accounts:delete",e)}async function U0(t,e){return ns(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ni(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function iT(t,e=!1){const n=kt(t),s=await n.getIdToken(e),r=Du(s);ce(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:ni(jl(r.auth_time)),issuedAtTime:ni(jl(r.iat)),expirationTime:ni(jl(r.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function jl(t){return Number(t)*1e3}function Du(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Ao("JWT malformed, contained fewer than 3 sections"),null;try{const r=Xp(n);return r?JSON.parse(r):(Ao("Failed to decode base64 JWT payload"),null)}catch(r){return Ao("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Af(t){const e=Du(t);return ce(e,"internal-error"),ce(typeof e.exp<"u","internal-error"),ce(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function yi(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Rn&&oT(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function oT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class aT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Pc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ni(this.lastLoginAt),this.creationTime=ni(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Zo(t){var e;const n=t.auth,s=await t.getIdToken(),r=await yi(t,U0(n,{idToken:s}));ce(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?F0(i.providerUserInfo):[],l=cT(t.providerData,a),c=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),f=c?h:!1,g={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Pc(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,g)}async function lT(t){const e=kt(t);await Zo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function cT(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function F0(t){return t.map(e=>{var{providerId:n}=e,s=Su(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function uT(t,e){const n=await x0(t,{},async()=>{const s=bi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,a=L0(t,r,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",M0.fetch()(a,{method:"POST",headers:l,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function hT(t,e){return ns(t,"POST","/v2/accounts:revokeToken",Ss(t,e))}/**
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
 */class Qs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ce(e.idToken,"internal-error"),ce(typeof e.idToken<"u","internal-error"),ce(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Af(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ce(e.length!==0,"internal-error");const n=Af(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ce(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await uT(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,a=new Qs;return s&&(ce(typeof s=="string","internal-error",{appName:e}),a.refreshToken=s),r&&(ce(typeof r=="string","internal-error",{appName:e}),a.accessToken=r),i&&(ce(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Qs,this.toJSON())}_performRefresh(){return mn("not implemented")}}/**
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
 */function On(t,e){ce(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class _n{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Su(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new aT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Pc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await yi(this,this.stsTokenManager.getToken(this.auth,e));return ce(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return iT(this,e)}reload(){return lT(this)}_assign(e){this!==e&&(ce(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new _n(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ce(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Zo(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(gn(this.auth.app))return Promise.reject(Qn(this.auth));const e=await this.getIdToken();return await yi(this,rT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,a,l,c,h,f;const g=(s=n.displayName)!==null&&s!==void 0?s:void 0,p=(r=n.email)!==null&&r!==void 0?r:void 0,C=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,V=(a=n.photoURL)!==null&&a!==void 0?a:void 0,M=(l=n.tenantId)!==null&&l!==void 0?l:void 0,N=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,j=(h=n.createdAt)!==null&&h!==void 0?h:void 0,H=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:X,emailVerified:Q,isAnonymous:Pe,providerData:ve,stsTokenManager:R}=n;ce(X&&R,e,"internal-error");const I=Qs.fromJSON(this.name,R);ce(typeof X=="string",e,"internal-error"),On(g,e.name),On(p,e.name),ce(typeof Q=="boolean",e,"internal-error"),ce(typeof Pe=="boolean",e,"internal-error"),On(C,e.name),On(V,e.name),On(M,e.name),On(N,e.name),On(j,e.name),On(H,e.name);const w=new _n({uid:X,auth:e,email:p,emailVerified:Q,displayName:g,isAnonymous:Pe,photoURL:V,phoneNumber:C,tenantId:M,stsTokenManager:I,createdAt:j,lastLoginAt:H});return ve&&Array.isArray(ve)&&(w.providerData=ve.map(E=>Object.assign({},E))),N&&(w._redirectEventId=N),w}static async _fromIdTokenResponse(e,n,s=!1){const r=new Qs;r.updateFromServerResponse(n);const i=new _n({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Zo(i),i}static async _fromGetAccountInfoResponse(e,n,s){const r=n.users[0];ce(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?F0(r.providerUserInfo):[],a=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),l=new Qs;l.updateFromIdToken(s);const c=new _n({uid:r.localId,auth:e,stsTokenManager:l,isAnonymous:a}),h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new Pc(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,h),c}}/**
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
 */const bf=new Map;function yn(t){bn(t instanceof Function,"Expected a class definition");let e=bf.get(t);return e?(bn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,bf.set(t,e),e)}/**
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
 */class B0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}B0.type="NONE";const Cf=B0;/**
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
 */function bo(t,e,n){return`firebase:${t}:${e}:${n}`}class Zs{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=bo(this.userKey,r.apiKey,i),this.fullPersistenceKey=bo("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?_n._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Zs(yn(Cf),e,s);const r=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=r[0]||yn(Cf);const a=bo(s,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(a);if(f){const g=_n._fromJSON(e,f);h!==i&&(l=g),i=h;break}}catch{}const c=r.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Zs(i,e,s):(i=c[0],l&&await i._set(a,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new Zs(i,e,s))}}/**
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
 */function Rf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(q0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(j0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(z0(e))return"Blackberry";if(K0(e))return"Webos";if($0(e))return"Safari";if((e.includes("chrome/")||H0(e))&&!e.includes("edge/"))return"Chrome";if(W0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function j0(t=wt()){return/firefox\//i.test(t)}function $0(t=wt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function H0(t=wt()){return/crios\//i.test(t)}function q0(t=wt()){return/iemobile/i.test(t)}function W0(t=wt()){return/android/i.test(t)}function z0(t=wt()){return/blackberry/i.test(t)}function K0(t=wt()){return/webos/i.test(t)}function Nu(t=wt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function dT(t=wt()){var e;return Nu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function fT(){return by()&&document.documentMode===10}function G0(t=wt()){return Nu(t)||W0(t)||K0(t)||z0(t)||/windows phone/i.test(t)||q0(t)}/**
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
 */function Q0(t,e=[]){let n;switch(t){case"Browser":n=Rf(wt());break;case"Worker":n=`${Rf(wt())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${gr}/${s}`}/**
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
 */class pT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((a,l)=>{try{const c=e(i);a(c)}catch(c){l(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function gT(t,e={}){return ns(t,"GET","/v2/passwordPolicy",Ss(t,e))}/**
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
 */const mT=6;class _T{constructor(e){var n,s,r,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:mT,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,r,i,a,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(s=c.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(r=c.containsLowercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class yT{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Pf(this),this.idTokenSubscription=new Pf(this),this.beforeStateQueue=new pT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=N0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=yn(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await Zs.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await U0(this,{idToken:e}),s=await _n._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(gn(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===l)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ce(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Zo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=YI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(gn(this.app))return Promise.reject(Qn(this));const n=e?kt(e):null;return n&&ce(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ce(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return gn(this.app)?Promise.reject(Qn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return gn(this.app)?Promise.reject(Qn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(yn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await gT(this),n=new _T(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ai("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await hT(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&yn(e)||this._popupRedirectResolver;ce(n,this,"argument-error"),this.redirectPersistenceManager=await Zs.create(this,[yn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ce(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,s,r);return()=>{a=!0,c()}}else{const c=e.addObserver(n);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ce(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Q0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&GI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Er(t){return kt(t)}class Pf{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ny(n=>this.observer=n)}get next(){return ce(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Da={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function vT(t){Da=t}function Z0(t){return Da.loadJS(t)}function ET(){return Da.recaptchaEnterpriseScript}function wT(){return Da.gapiScript}function IT(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const TT="recaptcha-enterprise",AT="NO_RECAPTCHA";class bT{constructor(e){this.type=TT,this.auth=Er(e)}async verify(e="verify",n=!1){async function s(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,l)=>{sT(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new nT(c);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,a(h.siteKey)}}).catch(c=>{l(c)})})}function r(i,a,l){const c=window.grecaptcha;Tf(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(h=>{a(h)}).catch(()=>{a(AT)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,a)=>{s(this.auth).then(l=>{if(!n&&Tf(window.grecaptcha))r(l,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let c=ET();c.length!==0&&(c+=l),Z0(c).then(()=>{r(l,i,a)}).catch(h=>{a(h)})}}).catch(l=>{a(l)})})}}async function Sf(t,e,n,s=!1){const r=new bT(t);let i;try{i=await r.verify(n)}catch{i=await r.verify(n,!0)}const a=Object.assign({},e);return s?Object.assign(a,{captchaResp:i}):Object.assign(a,{captchaResponse:i}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function kf(t,e,n,s){var r;if(!((r=t._getRecaptchaConfig())===null||r===void 0)&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Sf(t,e,n,n==="getOobCode");return s(t,i)}else return s(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Sf(t,e,n,n==="getOobCode");return s(t,a)}else return Promise.reject(i)})}/**
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
 */function CT(t,e){const n=Xc(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Uo(i,e??{}))return r;Gt(r,"already-initialized")}return n.initialize({options:e})}function RT(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(yn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function PT(t,e,n){const s=Er(t);ce(s._canInitEmulator,s,"emulator-config-failed"),ce(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=Y0(e),{host:a,port:l}=ST(e),c=l===null?"":`:${l}`;s.config.emulator={url:`${i}//${a}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||kT()}function Y0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ST(t){const e=Y0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Vf(s.substr(i.length+1))}}else{const[i,a]=s.split(":");return{host:i,port:Vf(a)}}}function Vf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function kT(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Ou{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return mn("not implemented")}_getIdTokenResponse(e){return mn("not implemented")}_linkToIdToken(e,n){return mn("not implemented")}_getReauthenticationResolver(e){return mn("not implemented")}}async function VT(t,e){return ns(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function DT(t,e){return Va(t,"POST","/v1/accounts:signInWithPassword",Ss(t,e))}/**
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
 */async function NT(t,e){return Va(t,"POST","/v1/accounts:signInWithEmailLink",Ss(t,e))}async function OT(t,e){return Va(t,"POST","/v1/accounts:signInWithEmailLink",Ss(t,e))}/**
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
 */class vi extends Ou{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new vi(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new vi(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return kf(e,n,"signInWithPassword",DT);case"emailLink":return NT(e,{email:this._email,oobCode:this._password});default:Gt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return kf(e,s,"signUpPassword",VT);case"emailLink":return OT(e,{idToken:n,email:this._email,oobCode:this._password});default:Gt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ys(t,e){return Va(t,"POST","/v1/accounts:signInWithIdp",Ss(t,e))}/**
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
 */const MT="http://localhost";class Cs extends Ou{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Cs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Gt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=Su(n,["providerId","signInMethod"]);if(!s||!r)return null;const a=new Cs(s,r);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return Ys(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Ys(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ys(e,n)}buildRequest(){const e={requestUri:MT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=bi(n)}return e}}/**
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
 */function xT(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function LT(t){const e=$r(Hr(t)).link,n=e?$r(Hr(e)).deep_link_id:null,s=$r(Hr(t)).deep_link_id;return(s?$r(Hr(s)).link:null)||s||n||e||t}class Mu{constructor(e){var n,s,r,i,a,l;const c=$r(Hr(e)),h=(n=c.apiKey)!==null&&n!==void 0?n:null,f=(s=c.oobCode)!==null&&s!==void 0?s:null,g=xT((r=c.mode)!==null&&r!==void 0?r:null);ce(h&&f&&g,"argument-error"),this.apiKey=h,this.operation=g,this.code=f,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(a=c.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=LT(e);try{return new Mu(n)}catch{return null}}}/**
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
 */class wr{constructor(){this.providerId=wr.PROVIDER_ID}static credential(e,n){return vi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Mu.parseLink(n);return ce(s,"argument-error"),vi._fromEmailAndCode(e,s.code,s.tenantId)}}wr.PROVIDER_ID="password";wr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";wr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class J0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ni extends J0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ln extends Ni{constructor(){super("facebook.com")}static credential(e){return Cs._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ln.credential(e.oauthAccessToken)}catch{return null}}}Ln.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ln.PROVIDER_ID="facebook.com";/**
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
 */class Un extends Ni{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Cs._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Un.credential(n,s)}catch{return null}}}Un.GOOGLE_SIGN_IN_METHOD="google.com";Un.PROVIDER_ID="google.com";/**
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
 */class Fn extends Ni{constructor(){super("github.com")}static credential(e){return Cs._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fn.credential(e.oauthAccessToken)}catch{return null}}}Fn.GITHUB_SIGN_IN_METHOD="github.com";Fn.PROVIDER_ID="github.com";/**
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
 */class Bn extends Ni{constructor(){super("twitter.com")}static credential(e,n){return Cs._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Bn.credential(n,s)}catch{return null}}}Bn.TWITTER_SIGN_IN_METHOD="twitter.com";Bn.PROVIDER_ID="twitter.com";/**
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
 */class hr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await _n._fromIdTokenResponse(e,s,r),a=Df(s);return new hr({user:i,providerId:a,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Df(s);return new hr({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Df(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Yo extends Rn{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Yo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Yo(e,n,s,r)}}function X0(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Yo._fromErrorAndOperation(t,i,e,s):i})}async function UT(t,e,n=!1){const s=await yi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return hr._forOperation(t,"link",s)}/**
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
 */async function FT(t,e,n=!1){const{auth:s}=t;if(gn(s.app))return Promise.reject(Qn(s));const r="reauthenticate";try{const i=await yi(t,X0(s,r,e,t),n);ce(i.idToken,s,"internal-error");const a=Du(i.idToken);ce(a,s,"internal-error");const{sub:l}=a;return ce(t.uid===l,s,"user-mismatch"),hr._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Gt(s,"user-mismatch"),i}}/**
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
 */async function em(t,e,n=!1){if(gn(t.app))return Promise.reject(Qn(t));const s="signIn",r=await X0(t,s,e),i=await hr._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function BT(t,e){return em(Er(t),e)}/**
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
 */async function jT(t){const e=Er(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function $T(t,e,n){return gn(t.app)?Promise.reject(Qn(t)):BT(kt(t),wr.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&jT(t),s})}function HT(t,e,n,s){return kt(t).onIdTokenChanged(e,n,s)}function qT(t,e,n){return kt(t).beforeAuthStateChanged(e,n)}function WT(t,e,n,s){return kt(t).onAuthStateChanged(e,n,s)}function zT(t){return kt(t).signOut()}const Jo="__sak";/**
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
 */class tm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Jo,"1"),this.storage.removeItem(Jo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const KT=1e3,GT=10;class nm extends tm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=G0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,l,c)=>{this.notifyListeners(a,c)});return}const s=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const a=this.storage.getItem(s);!n&&this.localCache[s]===a||this.notifyListeners(s,a)},i=this.storage.getItem(s);fT()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,GT):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},KT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}nm.type="LOCAL";const QT=nm;/**
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
 */class sm extends tm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}sm.type="SESSION";const rm=sm;/**
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
 */function ZT(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Na{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Na(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,a=this.handlersMap[r];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const l=Array.from(a).map(async h=>h(n.origin,i)),c=await ZT(l);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Na.receivers=[];/**
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
 */function xu(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class YT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,a;return new Promise((l,c)=>{const h=xu("",20);r.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},s);a={messageChannel:r,onMessage(g){const p=g;if(p.data.eventId===h)switch(p.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(p.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(a),r.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[r.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function sn(){return window}function JT(t){sn().location.href=t}/**
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
 */function im(){return typeof sn().WorkerGlobalScope<"u"&&typeof sn().importScripts=="function"}async function XT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function eA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function tA(){return im()?self:null}/**
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
 */const om="firebaseLocalStorageDb",nA=1,Xo="firebaseLocalStorage",am="fbase_key";class Oi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Oa(t,e){return t.transaction([Xo],e?"readwrite":"readonly").objectStore(Xo)}function sA(){const t=indexedDB.deleteDatabase(om);return new Oi(t).toPromise()}function Sc(){const t=indexedDB.open(om,nA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Xo,{keyPath:am})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Xo)?e(s):(s.close(),await sA(),e(await Sc()))})})}async function Nf(t,e,n){const s=Oa(t,!0).put({[am]:e,value:n});return new Oi(s).toPromise()}async function rA(t,e){const n=Oa(t,!1).get(e),s=await new Oi(n).toPromise();return s===void 0?null:s.value}function Of(t,e){const n=Oa(t,!0).delete(e);return new Oi(n).toPromise()}const iA=800,oA=3;class lm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Sc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>oA)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return im()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Na._getInstance(tA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await XT(),!this.activeServiceWorker)return;this.sender=new YT(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||eA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Sc();return await Nf(e,Jo,"1"),await Of(e,Jo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Nf(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>rA(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Of(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Oa(r,!1).getAll();return new Oi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),iA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}lm.type="LOCAL";const aA=lm;new Di(3e4,6e4);/**
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
 */function lA(t,e){return e?yn(e):(ce(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Lu extends Ou{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ys(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ys(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ys(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function cA(t){return em(t.auth,new Lu(t),t.bypassAuthState)}function uA(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),FT(n,new Lu(t),t.bypassAuthState)}async function hA(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),UT(n,new Lu(t),t.bypassAuthState)}/**
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
 */class cm{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:a,type:l}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return cA;case"linkViaPopup":case"linkViaRedirect":return hA;case"reauthViaPopup":case"reauthViaRedirect":return uA;default:Gt(this.auth,"internal-error")}}resolve(e){bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const dA=new Di(2e3,1e4);class $s extends cm{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,$s.currentPopupAction&&$s.currentPopupAction.cancel(),$s.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ce(e,this.auth,"internal-error"),e}async onExecution(){bn(this.filter.length===1,"Popup operations only handle one event");const e=xu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(nn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(nn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,$s.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,dA.get())};e()}}$s.currentPopupAction=null;/**
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
 */const fA="pendingRedirect",Co=new Map;class pA extends cm{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Co.get(this.auth._key());if(!e){try{const s=await gA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Co.set(this.auth._key(),e)}return this.bypassAuthState||Co.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function gA(t,e){const n=yA(e),s=_A(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function mA(t,e){Co.set(t._key(),e)}function _A(t){return yn(t._redirectPersistence)}function yA(t){return bo(fA,t.config.apiKey,t.name)}async function vA(t,e,n=!1){if(gn(t.app))return Promise.reject(Qn(t));const s=Er(t),r=lA(s,e),a=await new pA(s,r,n).execute();return a&&!n&&(delete a.user._redirectEventId,await s._persistUserIfCurrent(a.user),await s._setRedirectUser(null,e)),a}/**
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
 */const EA=10*60*1e3;class wA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!IA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!um(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(nn(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=EA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Mf(e))}saveEventToCache(e){this.cachedEventUids.add(Mf(e)),this.lastProcessedEventTime=Date.now()}}function Mf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function um({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function IA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return um(t);default:return!1}}/**
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
 */async function TA(t,e={}){return ns(t,"GET","/v1/projects",e)}/**
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
 */const AA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,bA=/^https?/;async function CA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await TA(t);for(const n of e)try{if(RA(n))return}catch{}Gt(t,"unauthorized-domain")}function RA(t){const e=Rc(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===s}if(!bA.test(n))return!1;if(AA.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const PA=new Di(3e4,6e4);function xf(){const t=sn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function SA(t){return new Promise((e,n)=>{var s,r,i;function a(){xf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{xf(),n(nn(t,"network-request-failed"))},timeout:PA.get()})}if(!((r=(s=sn().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=sn().gapi)===null||i===void 0)&&i.load)a();else{const l=IT("iframefcb");return sn()[l]=()=>{gapi.load?a():n(nn(t,"network-request-failed"))},Z0(`${wT()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw Ro=null,e})}let Ro=null;function kA(t){return Ro=Ro||SA(t),Ro}/**
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
 */const VA=new Di(5e3,15e3),DA="__/auth/iframe",NA="emulator/auth/iframe",OA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},MA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function xA(t){const e=t.config;ce(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Vu(e,NA):`https://${t.config.authDomain}/${DA}`,s={apiKey:e.apiKey,appName:t.name,v:gr},r=MA.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${bi(s).slice(1)}`}async function LA(t){const e=await kA(t),n=sn().gapi;return ce(n,t,"internal-error"),e.open({where:document.body,url:xA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:OA,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const a=nn(t,"network-request-failed"),l=sn().setTimeout(()=>{i(a)},VA.get());function c(){sn().clearTimeout(l),r(s)}s.ping(c).then(c,()=>{i(a)})}))}/**
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
 */const UA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},FA=500,BA=600,jA="_blank",$A="http://localhost";class Lf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function HA(t,e,n,s=FA,r=BA){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),a=Math.max((window.screen.availWidth-s)/2,0).toString();let l="";const c=Object.assign(Object.assign({},UA),{width:s.toString(),height:r.toString(),top:i,left:a}),h=wt().toLowerCase();n&&(l=H0(h)?jA:n),j0(h)&&(e=e||$A,c.scrollbars="yes");const f=Object.entries(c).reduce((p,[C,V])=>`${p}${C}=${V},`,"");if(dT(h)&&l!=="_self")return qA(e||"",l),new Lf(null);const g=window.open(e||"",l,f);ce(g,t,"popup-blocked");try{g.focus()}catch{}return new Lf(g)}function qA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const WA="__/auth/handler",zA="emulator/auth/handler",KA=encodeURIComponent("fac");async function Uf(t,e,n,s,r,i){ce(t.config.authDomain,t,"auth-domain-config-required"),ce(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:gr,eventId:r};if(e instanceof J0){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",Dy(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,g]of Object.entries(i||{}))a[f]=g}if(e instanceof Ni){const f=e.getScopes().filter(g=>g!=="");f.length>0&&(a.scopes=f.join(","))}t.tenantId&&(a.tid=t.tenantId);const l=a;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await t._getAppCheckToken(),h=c?`#${KA}=${encodeURIComponent(c)}`:"";return`${GA(t)}?${bi(l).slice(1)}${h}`}function GA({config:t}){return t.emulator?Vu(t,zA):`https://${t.authDomain}/${WA}`}/**
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
 */const $l="webStorageSupport";class QA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=rm,this._completeRedirectFn=vA,this._overrideRedirectResult=mA}async _openPopup(e,n,s,r){var i;bn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await Uf(e,n,s,Rc(),r);return HA(e,a,xu())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await Uf(e,n,s,Rc(),r);return JT(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(bn(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await LA(e),s=new wA(e);return n.register("authEvent",r=>(ce(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send($l,{type:$l},r=>{var i;const a=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[$l];a!==void 0&&n(!!a),Gt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=CA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return G0()||$0()||Nu()}}const ZA=QA;var Ff="@firebase/auth",Bf="1.7.9";/**
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
 */class YA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ce(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function JA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function XA(t){sr(new Is("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=s.options;ce(a&&!a.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:a,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Q0(t)},h=new yT(s,r,i,c);return RT(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),sr(new Is("auth-internal",e=>{const n=Er(e.getProvider("auth").getImmediate());return(s=>new YA(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),zn(Ff,Bf,JA(t)),zn(Ff,Bf,"esm2017")}/**
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
 */const e5=5*60,t5=ng("authIdTokenMaxAge")||e5;let jf=null;const n5=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>t5)return;const r=n==null?void 0:n.token;jf!==r&&(jf=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function s5(t=og()){const e=Xc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=CT(t,{popupRedirectResolver:ZA,persistence:[aA,QT,rm]}),s=ng("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const a=n5(i.toString());qT(n,a,()=>a(n.currentUser)),HT(n,l=>a(l))}}const r=eg("auth");return r&&PT(n,`http://${r}`),n}function r5(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}vT({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=nn("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",r5().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});XA("Browser");const kc={apiKey:"AIzaSyA49LUCKKtwvmhc2eUcSVpuut_zR59N-lI",authDomain:"rustam-portfolio.firebaseapp.com",projectId:"rustam-portfolio",storageBucket:"rustam-portfolio.firebasestorage.app",messagingSenderId:"67919110221",appId:"1:67919110221:web:8b6b190d6b0a5d0014bc04"},Zn=!!(kc.apiKey&&kc.projectId);let Hl=null,ms=null,Po=null;Zn&&(Hl=ig(kc),ms=PI(Hl),Po=s5(Hl));const So={ielts:{overall:7.5,sections:[{label:"Listening",score:8},{label:"Reading",score:8.5},{label:"Writing",score:6.5},{label:"Speaking",score:6.5}]},gpa:{value:"5.0",scale:"5.0",note:"School cumulative GPA"},sat:{status:"In progress",note:"Currently preparing — score coming soon"},milestones:[{title:"Public School #178",org:"Tashkent, Uzbekistan",when:"September 2016 – May 2019",desc:"Primary and lower-secondary education."},{title:"Wisdom Private School",org:"Tashkent, Uzbekistan",when:"September 2019 – March 2020",desc:"Continued secondary education."},{title:"Iste'dodli Kelajak Yoshlari — Private School",org:"Tashkent, Uzbekistan",when:"March 2020 – May 2026",desc:"Full secondary education through graduation.",badges:["🏆 Best Student of the Year 2023–2024","🏆 Best Student of the Year 2024–2025","🏆 Best Student of the Year 2025–2026"]},{title:"Proweb Learning Center — Web Development",org:"Tashkent, Uzbekistan",when:"16.03.2023 – 16.01.2024",desc:"Modern Web Professions course: HTML, CSS, JavaScript, SCSS, Vue, Git."},{title:"Self-study with Claude AI",org:"Remote, ongoing",when:"2025 – present",desc:"Vibe-coding full projects end-to-end with Claude as a coding partner."}]},pn={profile:{name:"Rustam Isroilov",email:"isroilovr10@gmail.com",phone:"+998 93 845 55 65",github:"https://github.com/RustamIsroilov",twitter:"https://twitter.com/RustambekI39739",instagram:"https://www.instagram.com/rustambek7875/"},home:{title:"Hi 👋, My name is {Rustam Isroilov} I build things for the web — and I use {Claude AI} to vibe-code full projects, end to end."},about:{title:"I am a {Junior} web developer studying in the {Vue} ecosystem and shipping projects with {Claude AI}.",bio:["I'm Rustam Isroilov — born on **17 April 2010 in Samarkand**, the firstborn of a bankers' family. My mother taught art at a school and my father worked in banking. When I was one year old, my parents moved with me to **Tashkent**, where I've lived ever since.","From **age 6 to about 10–11, I was a chess player**. I trained seriously, climbed the rankings and earned the *1st sports category* title. My proudest result was finishing **17th at the Sochi International Tournament 2019**, out of thousands of participants. Then COVID-19 hit and everything stopped — no classes, no tournaments. After a long break my sharpness was gone, and I decided to close that chapter rather than chase a faded peak.","In **7th grade I discovered programming** and enrolled at the Proweb Front-End course. Something clicked: building things became the way I think — projects turned into my *kind of art*.",`In **9th grade I decided I want to study abroad** and use what I learn to build a life that helps real people. My goal isn't just "ship code" — it's to make tools and sites that *quietly make millions of small daily things easier*.`,'Most recently I started **using Claude AI as a coding partner** — "vibe-coding" full projects end-to-end, from the first idea to a deployed product.'],education:[{title:"Public School #178",org:"Tashkent, Uzbekistan",when:"September 2016 – May 2019",badge:"Completed"},{title:"Wisdom Private School",org:"Tashkent, Uzbekistan",when:"September 2019 – March 2020",badge:"Completed"},{title:"Iste'dodli Kelajak Yoshlari — Private School",org:"Tashkent, Uzbekistan",when:"March 2020 – May 2026",badge:"Best Student ×3",gold:!0},{title:"Proweb Learning Center — Web Development",org:"Tashkent, Uzbekistan",when:"16.03.2023 – 16.01.2024",badge:"Graduated"},{title:"Self-study with Claude AI",org:"Remote",when:"2025 – present",badge:"Ongoing"}]},stack:{title:"I have studied the languages listed below at {Proweb} Learning Center, and I level them up daily by vibe-coding with {Claude AI}.",items:[{name:"HTML",icon:"html.svg",percent:90},{name:"CSS",icon:"css.svg",percent:90},{name:"JS",icon:"js.svg",percent:70},{name:"Vue",icon:"vue.png",percent:75},{name:"SCSS",icon:"scss.svg",percent:85},{name:"Vite",icon:"vite.svg",percent:70},{name:"GitHub",icon:"github.svg",percent:70},{name:"Git",icon:"git.svg",percent:90},{name:"Claude AI",icon:"claude.svg",percent:95}]},homeTech:[{name:"HTML",icon:"html.svg"},{name:"CSS",icon:"css.svg"},{name:"JavaScript",icon:"js.svg"},{name:"SCSS",icon:"scss.svg"},{name:"Vue",icon:"vue.png"},{name:"Vite",icon:"vite.svg"},{name:"Git",icon:"git.svg"},{name:"GitHub",icon:"github.svg"},{name:"VS Code",icon:"vs.svg"},{name:"Claude AI",icon:"claude.svg"}],projects:[{title:"ScamGuard Bot",desc:"Telegram bot that flags suspicious accounts: estimates account age, scans every URL/file with VirusTotal, cross-checks against the CAS anti-spam list, and builds a shared scammer database. Vibe-coded end-to-end with Claude AI, deployed 24/7 on Railway.",tech:"Python, python-telegram-bot, SQLite, VirusTotal, Railway",image:"scamguard.svg",telegram:"https://t.me/safityprovider_bot",codeUrl:"https://github.com/RustamIsroilov/safitybot",featured:!0},{title:"Notes",desc:"Streamline your thoughts with our intuitive notes site. Effortlessly capture ideas, stay organized, and boost productivity.",tech:"HTML, JavaScript, SCSS, Vue",image:"card_1.png",liveUrl:"https://smirfayoz.github.io/todo-list/",codeUrl:"https://github.com/RustamIsroilov/Notes"},{title:"dBurger",desc:"Savor the extraordinary at our burger haven. Indulge in mouthwatering creations crafted with the finest ingredients.",tech:"HTML, JavaScript, CSS",image:"card_2.png",liveUrl:"https://rustamisroilov.github.io/dBurger/",codeUrl:"https://github.com/RustamIsroilov/dBurger"},{title:"Vue Cinema",desc:"Dive into a cinematic universe where every frame tells a story. Latest releases, exclusive content, and a seamless booking experience.",tech:"HTML, CSS",image:"card_3.png",liveUrl:"https://rustamisroilov.github.io/VueCinema/",codeUrl:"https://github.com/RustamIsroilov/VueCinema"},{title:"Apreture",desc:"Explore a world of visual mastery. Unleash creativity with precision and clarity — where photography meets artistry.",tech:"HTML, SCSS",image:"card_4.png",liveUrl:"https://rustamisroilov.github.io/document/",codeUrl:"https://github.com/RustamIsroilov/document"},{title:"Totembo",desc:"A collection of stylish watches with online ordering, an intuitive interface and impeccable service.",tech:"HTML, CSS",image:"card_7.jpg",liveUrl:"https://rustamisroilov.github.io/Totembo/",codeUrl:"https://github.com/RustamIsroilov/Totembo"},{title:"CinePhile",desc:"A cinematic journey. Explore a variety of movies, book tickets online, and enjoy a modern, user-centred design.",tech:"HTML, JavaScript, SASS, Vue",image:"card_6.png",liveUrl:"https://fakhad.github.io/movie-app"}]};function ss(){const t=mt(structuredClone(pn)),e=mt(Zn),n=mt(null);let s=null;return Hc(()=>{if(Zn)try{s=k0(js(ms,"content","site"),r=>{if(r.exists()){const i=r.data();t.value={...pn,...i,profile:{...pn.profile,...i.profile||{}},home:{...pn.home,...i.home||{}},about:{...pn.about,...i.about||{}},stack:{...pn.stack,...i.stack||{}}}}e.value=!1},r=>{n.value=r,e.value=!1,console.warn("[useSiteContent] Firestore error, using defaults:",r.message)})}catch(r){n.value=r,e.value=!1}}),da(()=>{s&&s()}),{data:t,loading:e,error:n}}const i5={class:"footer"},o5={class:"footer__items"},a5={class:"footer__items_left"},l5=v("span",{class:"nav__brand_first"},"Rustam",-1),c5=v("span",{class:"nav__brand_last"},"Isroilov",-1),u5={class:"footer__items_midle"},h5={key:0},d5={key:1},f5={class:"footer__items_right"},p5=["href"],g5=v("img",{src:_a,alt:"GitHub"},null,-1),m5=[g5],_5=["href"],y5=v("img",{src:Qp,alt:"Twitter"},null,-1),v5=[y5],E5=["href"],w5=v("img",{src:Zp,alt:"Instagram"},null,-1),I5=[w5],T5=v("div",{class:"footer__line"},null,-1),A5={class:"footer__nav"},b5={class:"footer__nav_right"},C5={class:"footer__nav_left"},R5={class:"footer__nav_left-item"},P5=v("span",null,"Vue",-1),S5=v("span",null,"Claude AI",-1),Ir={__name:"Footer",setup(t){const{data:e}=ss(),n=st(()=>e.value.profile);return(s,r)=>{const i=ua("router-link");return K(),G("div",i5,[v("div",o5,[v("div",a5,[Ie(i,{to:"/",class:"nav__brand"},{default:At(()=>[l5,c5]),_:1})]),v("div",u5,[n.value.phone?(K(),G("p",h5,me(n.value.phone),1)):bt("",!0),n.value.email?(K(),G("p",d5,me(n.value.email),1)):bt("",!0)]),v("div",f5,[n.value.github?(K(),G("a",{key:0,href:n.value.github,target:"_blank",rel:"noopener"},m5,8,p5)):bt("",!0),n.value.twitter?(K(),G("a",{key:1,href:n.value.twitter,target:"_blank",rel:"noopener"},v5,8,_5)):bt("",!0),n.value.instagram?(K(),G("a",{key:2,href:n.value.instagram,target:"_blank",rel:"noopener"},I5,8,E5)):bt("",!0)])]),T5,v("div",A5,[v("div",b5,[Ie(i,{to:"/about",class:"footer__nav_right-item"},{default:At(()=>[Y("About")]),_:1}),Ie(i,{to:"/stack",class:"footer__nav_right-item"},{default:At(()=>[Y("Technologies")]),_:1}),Ie(i,{to:"/project",class:"footer__nav_right-item"},{default:At(()=>[Y("Projects")]),_:1}),Ie(i,{to:"/achievements",class:"footer__nav_right-item"},{default:At(()=>[Y("Achievements")]),_:1}),Ie(i,{to:"/contact",class:"footer__nav_right-item"},{default:At(()=>[Y("Contact")]),_:1})]),v("div",C5,[v("p",R5,[Y(" Built by "),v("span",null,me(n.value.name),1),Y(" with "),P5,Y(" & "),S5])])])])}}};function Uu(t){if(!t)return[];const e=[],n=/\{([^}]+)\}/g;let s=0,r;for(;(r=n.exec(t))!==null;)r.index>s&&e.push({text:t.slice(s,r.index),brand:!1}),e.push({text:r[1],brand:!0}),s=n.lastIndex;return s<t.length&&e.push({text:t.slice(s),brand:!1}),e}const Mi=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},ks=t=>(Ii("data-v-5b27ae0f"),t=t(),Ti(),t),k5={class:"about"},V5={class:"about__title"},D5={key:0},N5=ks(()=>v("img",{src:oy,alt:"Rustam Isroilov",class:"about__img"},null,-1)),O5={class:"aboutp"},M5=ks(()=>v("h2",{class:"aboutp__title"},"About Me",-1)),x5={class:"aboutp__bio"},L5=["innerHTML"],U5=ks(()=>v("h2",{class:"aboutp__title"},"Education",-1)),F5={class:"aboutp__info"},B5={class:"aboutp__info_top"},j5={class:"info__top_title"},$5={class:"aboutp__info_down"},H5={class:"info__down_item"},q5=ks(()=>v("img",{src:ay,alt:""},null,-1)),W5={class:"info__down_item"},z5=ks(()=>v("img",{src:ly,alt:""},null,-1)),K5={class:"info__down_item"},G5=ks(()=>v("img",{src:cy,alt:""},null,-1)),Q5=ks(()=>v("div",{class:"line"},null,-1)),Z5={class:"aboutp__cta"},Y5={__name:"About",setup(t){const{data:e}=ss(),n=st(()=>Uu(e.value.about.title));function s(i){return(l=>l.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"))(i).replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>").replace(/\*([^*]+)\*/g,"<em>$1</em>")}function r(i){return(i||"").split(",")[0].trim()}return(i,a)=>{const l=ua("router-link");return K(),G(ye,null,[v("div",k5,[v("h1",V5,[(K(!0),G(ye,null,Ze(n.value,(c,h)=>(K(),G(ye,{key:h},[c.brand?(K(),G("span",D5,me(c.text),1)):(K(),G(ye,{key:1},[Y(me(c.text),1)],64))],64))),128))]),N5]),v("div",O5,[M5,v("div",x5,[(K(!0),G(ye,null,Ze(Ye(e).about.bio,(c,h)=>(K(),G("p",{key:h,innerHTML:s(c)},null,8,L5))),128))]),U5,v("div",F5,[(K(!0),G(ye,null,Ze(Ye(e).about.education,(c,h)=>(K(),G(ye,{key:h},[v("div",B5,[v("h3",j5,me(c.title),1),v("button",{class:on(["info__top_btn",{"info__top_btn--gold":c.gold}])},me(c.badge||"—"),3)]),v("div",$5,[v("div",H5,[q5,v("p",null,me(c.org),1)]),v("div",W5,[z5,v("p",null,me(r(c.org)),1)]),v("div",K5,[G5,v("p",null,me(c.when),1)])]),Q5],64))),128))]),v("p",Z5,[Y(" See my exam scores and the full list of milestones on the "),Ie(l,{to:"/achievements"},{default:At(()=>[Y("Achievements page →")]),_:1})])]),Ie(Ir)],64)}}},J5=Mi(Y5,[["__scopeId","data-v-5b27ae0f"]]),X5="/Portfolio/assets/me-viewpoint-NIcbNdVZ.jpg",eb={class:"about"},tb={class:"about__title"},nb={key:0},sb=v("img",{src:X5,alt:"Rustam Isroilov",class:"about__img about__img--landscape"},null,-1),rb={__name:"Header",setup(t){const{data:e}=ss(),n=st(()=>Uu(e.value.home.title));return(s,r)=>(K(),G("div",eb,[v("h1",tb,[(K(!0),G(ye,null,Ze(n.value,(i,a)=>(K(),G(ye,{key:a},[i.brand?(K(),G("span",nb,me(i.text),1)):(K(),G(ye,{key:1},[Y(me(i.text),1)],64))],64))),128))]),sb]))}},Ma="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAMCAYAAABr5z2BAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADCSURBVHgBtVK7DcIwELWdJqkIG4QRmADYgDZKwSpsEqjckgnIBoQJwgaYzo1t3kk2QigkEZ/X3Dvdu3d30jH2JXggZVmmSZJsjDHTvoYoiq7OuSrP8wvlIhTiOD6hsGYDgGaJcAy5eKpl1tq9EGL3rplq0FSk7TL4CJ0GnPO2KIotJtbgDXG6fbQBGlOKuDeFgfL8NtoAdyq/iSITzyd/2eDxB1LKFqHB9DPrAcwXCBn+YPa6wQrTajYAaA5a6zn7Fe6FoUl+LoPqfgAAAABJRU5ErkJggg==",xa="/Portfolio/assets/card_1-ybWZ0cmI.png",La="/Portfolio/assets/card_2-qXvPlFdH.png",Ua="/Portfolio/assets/card_3-ojxDyRz-.png",Fa="/Portfolio/assets/card_4-7rrdZ2f_.png",Ba="/Portfolio/assets/card_6-CsMu4DwY.png",ja="/Portfolio/assets/card_7-rrrmea1L.jpg",$a="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgMjU2IiB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiI+DQogIDxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiByeD0iNDgiIGZpbGw9IiNjYzc4NWMiLz4NCiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTI4LDE0MCkiIGZpbGw9IiNmZmYiPg0KICAgIDx0ZXh0IHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJHZW9yZ2lhLCBzZXJpZiIgZm9udC1zaXplPSIxNzAiIGZvbnQtd2VpZ2h0PSI3MDAiIHk9IjAiPkM8L3RleHQ+DQogIDwvZz4NCiAgPHRleHQgeD0iMTI4IiB5PSIyMjAiIHRleHQtYW5jaG9yPSJtaWRkbGUiDQogICAgICAgIGZvbnQtZmFtaWx5PSJTZWdvZSBVSSwgQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjAiIGZvbnQtd2VpZ2h0PSI2MDAiIGZpbGw9IiNmZmYiPg0KICAgIENsYXVkZQ0KICA8L3RleHQ+DQo8L3N2Zz4NCg==",Ha="data:image/svg+xml,%3csvg%20width='120'%20height='119'%20viewBox='0%200%20120%20119'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M22.1325%20101.154L13.71%207.4375H106.29L97.8562%20101.139L59.9437%20111.562L22.1325%20101.154Z'%20fill='%231572B6'/%3e%3cpath%20d='M60%20103.597L90.6375%2095.174L97.845%2015.1018H60V103.597Z'%20fill='%2333A9DC'/%3e%3cpath%20d='M60%2049.054H75.3375L76.395%2037.2842H60V25.7895H89.0625L88.785%2028.8724L85.9387%2060.5487H60V49.054Z'%20fill='white'/%3e%3cpath%20d='M60.0713%2078.9044L60.0188%2078.9193L47.1113%2075.4609L46.2863%2066.2942H34.65L36.2738%2084.3413L60.015%2090.8788L60.0713%2090.8639V78.9044Z'%20fill='%23EBEBEB'/%3e%3cpath%20d='M74.3513%2060.0615L72.9563%2075.4534L60.03%2078.9119V90.8714L83.79%2084.3412L83.9663%2082.4001L85.98%2060.0615H74.3513Z'%20fill='white'/%3e%3cpath%20d='M60.0413%2025.7895V37.2842H32.0438L31.8113%2034.6996L31.2825%2028.8724L31.005%2025.7895H60.0413ZM60%2049.054V60.5487H47.2538L47.0213%2057.9641L46.4963%2052.1369L46.2188%2049.054H60Z'%20fill='%23EBEBEB'/%3e%3c/svg%3e",qa="data:image/svg+xml,%3csvg%20width='105'%20height='105'%20viewBox='0%200%20105%20105'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_14_41)'%3e%3cpath%20d='M103.02%2047.8219L57.1758%201.98038C54.5372%20-0.6598%2050.2552%20-0.6598%2047.6134%201.98038L38.0937%2011.5001L50.1699%2023.5763C52.9762%2022.6281%2056.1943%2023.2642%2058.4313%2025.5012C60.6789%2027.7525%2061.3106%2030.9981%2060.3393%2033.8134L71.9775%2045.452C74.7932%2044.482%2078.0421%2045.1095%2080.291%2047.3621C83.434%2050.5039%2083.434%2055.596%2080.291%2058.7399C77.1471%2061.8841%2072.055%2061.8841%2068.9095%2058.7399C66.5454%2056.3733%2065.9613%2052.9013%2067.1582%2049.9888L56.3046%2039.1352L56.3034%2067.6973C57.0902%2068.0863%2057.8088%2068.6002%2058.4313%2069.2189C61.5743%2072.3607%2061.5743%2077.4532%2058.4313%2080.5995C55.2874%2083.7422%2050.1929%2083.7422%2047.0535%2080.5995C43.9105%2077.4532%2043.9105%2072.3611%2047.0535%2069.2193C47.8067%2068.4658%2048.7019%2067.869%2049.6871%2067.4635V38.6352C48.7004%2038.2324%2047.8048%2037.6353%2047.0535%2036.8793C44.6722%2034.5013%2044.0996%2031.0071%2045.3198%2028.0831L33.4154%2016.1775L1.98105%2047.6099C-0.660352%2050.2525%20-0.660352%2054.5349%201.98105%2057.1755L47.8259%20103.018C50.4652%20105.658%2054.7464%20105.658%2057.3891%20103.018L103.019%2057.3884C105.66%2054.747%20105.66%2050.4621%20103.019%2047.8219'%20fill='%23DE4C36'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_14_41'%3e%3crect%20width='105'%20height='105'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",Wa="data:image/svg+xml,%3csvg%20width='30'%20height='30'%20viewBox='0%200%2030%2030'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M15%200C6.7125%200%200%206.7125%200%2015C0%2021.6375%204.29375%2027.2437%2010.2563%2029.2313C11.0063%2029.3625%2011.2875%2028.9125%2011.2875%2028.5188C11.2875%2028.1625%2011.2688%2026.9813%2011.2688%2025.725C7.5%2026.4188%206.525%2024.8062%206.225%2023.9625C6.05625%2023.5312%205.325%2022.2%204.6875%2021.8438C4.1625%2021.5625%203.4125%2020.8687%204.66875%2020.85C5.85%2020.8313%206.69375%2021.9375%206.975%2022.3875C8.325%2024.6562%2010.4812%2024.0187%2011.3438%2023.625C11.475%2022.65%2011.8688%2021.9937%2012.3%2021.6187C8.9625%2021.2437%205.475%2019.95%205.475%2014.2125C5.475%2012.5813%206.05625%2011.2313%207.0125%2010.1813C6.8625%209.80625%206.3375%208.26875%207.1625%206.20625C7.1625%206.20625%208.41875%205.8125%2011.2875%207.74375C12.4875%207.40625%2013.7625%207.2375%2015.0375%207.2375C16.3125%207.2375%2017.5875%207.40625%2018.7875%207.74375C21.6562%205.79375%2022.9125%206.20625%2022.9125%206.20625C23.7375%208.26875%2023.2125%209.80625%2023.0625%2010.1813C24.0188%2011.2313%2024.6%2012.5625%2024.6%2014.2125C24.6%2019.9688%2021.0938%2021.2437%2017.7563%2021.6187C18.3%2022.0875%2018.7688%2022.9875%2018.7688%2024.3937C18.7688%2026.4%2018.75%2028.0125%2018.75%2028.5188C18.75%2028.9125%2019.0312%2029.3813%2019.7812%2029.2313C22.759%2028.2259%2025.3465%2026.3121%2027.1796%2023.7592C29.0127%2021.2063%2029.9991%2018.1429%2030%2015C30%206.7125%2023.2875%200%2015%200Z'%20fill='%23A7A7A7'/%3e%3c/svg%3e",za="data:image/svg+xml,%3csvg%20width='120'%20height='120'%20viewBox='0%200%20120%20120'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M22.1325%20102.004L13.7063%207.5H106.294L97.8563%20101.989L59.9438%20112.5L22.1325%20102.004Z'%20fill='%23E44F26'/%3e%3cpath%20d='M60%20104.467L90.6375%2095.9737L97.845%2015.2287H60V104.467Z'%20fill='%23F1662A'/%3e%3cpath%20d='M60%2050.2763H44.6625L43.605%2038.4075H60V26.8163H30.9375L31.215%2029.9288L34.0613%2061.8675H60V50.2763ZM60%2080.3775L59.9475%2080.3925L47.04%2076.9088L46.215%2067.665H34.5787L36.2025%2085.86L59.9475%2092.4525L60%2092.4375V80.3775Z'%20fill='%23EBEBEB'/%3e%3cpath%20d='M59.9587%2050.2763V61.8675H74.2312L72.8887%2076.9013L59.9587%2080.3888V92.4488L83.7225%2085.86L83.895%2083.9025L86.6175%2053.3888L86.9025%2050.2763H59.9587ZM59.9587%2026.8163V38.4075H87.9562L88.1887%2035.805L88.7175%2029.9288L88.995%2026.8163H59.9587Z'%20fill='white'/%3e%3c/svg%3e",Ka="data:image/svg+xml,%3csvg%20width='30'%20height='30'%20viewBox='0%200%2030%2030'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_14_33)'%3e%3cpath%20d='M15.0001%200.599976C7.0471%200.599976%200.600098%207.04698%200.600098%2015C0.600098%2022.953%207.0471%2029.4%2015.0001%2029.4C22.9531%2029.4%2029.4001%2022.953%2029.4001%2015C29.4001%207.04698%2022.9531%200.599976%2015.0001%200.599976ZM11.4751%2020.9685H8.5591V11.5845H11.4751V20.9685ZM9.9991%2010.4325C9.0781%2010.4325%208.4826%209.77997%208.4826%208.97297C8.4826%208.14948%209.0961%207.51648%2010.0366%207.51648C10.9771%207.51648%2011.5531%208.14948%2011.5711%208.97297C11.5711%209.77997%2010.9771%2010.4325%209.9991%2010.4325ZM22.1251%2020.9685H19.2091V15.768C19.2091%2014.5575%2018.7861%2013.7355%2017.7316%2013.7355C16.9261%2013.7355%2016.4476%2014.292%2016.2361%2014.8275C16.1581%2015.018%2016.1386%2015.288%2016.1386%2015.5565V20.967H13.2211V14.577C13.2211%2013.4055%2013.1836%2012.426%2013.1446%2011.583H15.6781L15.8116%2012.8865H15.8701C16.2541%2012.2745%2017.1946%2011.3715%2018.7681%2011.3715C20.6866%2011.3715%2022.1251%2012.657%2022.1251%2015.42V20.9685Z'%20fill='%23A7A7A7'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_14_33'%3e%3crect%20width='30'%20height='30'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",Ga="data:image/svg+xml,%3csvg%20width='120'%20height='120'%20viewBox='0%200%20120%20120'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7.5%207.5H112.5V112.5H7.5V7.5Z'%20fill='%23F5DE19'/%3e%3cpath%20d='M78.0338%2089.5312C78.9284%2091.3485%2080.3183%2092.8759%2082.0434%2093.9375C83.7684%2094.9991%2085.7584%2095.5515%2087.7838%2095.5313C91.8713%2095.5313%2094.485%2093.4875%2094.485%2090.6562C94.485%2087.2812%2091.8%2086.0738%2087.3%2084.105L84.8325%2083.0475C77.7075%2080.0138%2072.9825%2076.215%2072.9825%2068.1825C72.9825%2060.7838%2078.6075%2055.1475%2087.4313%2055.1475C90.2877%2054.9412%2093.1416%2055.5805%2095.637%2056.9856C98.1324%2058.3907%20100.159%2060.4994%20101.464%2063.0488L93.75%2067.98C93.2476%2066.716%2092.3728%2065.6345%2091.2416%2064.879C90.1105%2064.1236%2088.7764%2063.7298%2087.4163%2063.75C86.8229%2063.6906%2086.2236%2063.7555%2085.6567%2063.9404C85.0897%2064.1254%2084.5675%2064.4265%2084.1234%2064.8244C83.6792%2065.2224%2083.3228%2065.7085%2083.0769%2066.2518C82.831%2066.7951%2082.7009%2067.3837%2082.695%2067.98C82.695%2070.9388%2084.5288%2072.1388%2088.7625%2073.98L91.23%2075.0375C99.615%2078.6338%20104.355%2082.2975%20104.355%2090.5363C104.355%2099.42%2097.3763%20104.287%2088.005%20104.287C84.3537%20104.52%2080.713%20103.691%2077.5223%20101.901C74.3317%20100.11%2071.7274%2097.4342%2070.0238%2094.1963L78.0338%2089.5312ZM43.1775%2090.3863C44.7263%2093.135%2046.1363%2095.46%2049.5263%2095.46C52.7663%2095.46%2054.8138%2094.1925%2054.8138%2089.2612V55.71H64.68V89.3925C64.68%2099.6075%2058.68%20104.257%2049.9463%20104.257C46.8591%20104.426%2043.7931%20103.657%2041.1513%20102.051C38.5096%20100.444%2036.4157%2098.0761%2035.145%2095.2575L43.1775%2090.3863Z'%20fill='black'/%3e%3c/svg%3e",Qa="data:image/svg+xml,%3csvg%20width='16'%20height='12'%20viewBox='0%200%2016%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M3.33331%201.5V10.5H7.33331V8.75H8.66665V10.5H12.6666V1.5H3.33331ZM4.66665%202.5H5.99998V3.5H4.66665V2.5ZM7.33331%202.5H8.66665V3.5H7.33331V2.5ZM9.99998%202.5H11.3333V3.5H9.99998V2.5ZM4.66665%204.5H5.99998V5.5H4.66665V4.5ZM7.33331%204.5H8.66665V5.5H7.33331V4.5ZM9.99998%204.5H11.3333V5.5H9.99998V4.5ZM4.66665%206.5H5.99998V7.5H4.66665V6.5ZM7.33331%206.5H8.66665V7.5H7.33331V6.5ZM9.99998%206.5H11.3333V7.5H9.99998V6.5ZM4.66665%208.5H5.99998V9.5H4.66665V8.5ZM9.99998%208.5H11.3333V9.5H9.99998V8.5Z'%20fill='%23A7A7A7'/%3e%3c/svg%3e",Za="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEnSURBVHgBrZTvDYIwEMVLAt8dwRHcREdwA91AN9AN1AlkA0fADXAD+EbCv3rPXE2tpaWESy5SLL/evddWiJkjEoEhpVw0TbOJougVx/GTfksxJQBq2/ZOKfXsuu4gQgMw+jBjyKOu6y2Nd/Sc4x2N90FAVRm1erRUDWiB59FAVDRUBd5jMYo1xrELxKsiU4f4flNYsxNa0cTPqJqVpcIrV7h0wb4GQDf1kakVHObFLl6YaUBVVUs4a4FlVkOGYICY7XhhuhY6jLdFodrCf5DBC0M7Q1rACE3Tj44EPjv3HU3a8OTt0BwA0LpvA//sw77vrZOhI2VJl8FNjAlNq9ysQBmA4ydCQh0hQFERjtsoA1zBLkoj7yGwvwuW21/BgCRJ0skX6FzxBixX1Dd9LydPAAAAAElFTkSuQmCC",Ya="data:image/svg+xml,%3csvg%20width='16'%20height='12'%20viewBox='0%200%2016%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%206.75C7.50555%206.75%207.0222%206.64003%206.61108%206.43401C6.19995%206.22798%205.87952%205.93514%205.6903%205.59253C5.50108%205.24992%205.45157%204.87292%205.54804%204.50921C5.6445%204.14549%205.8826%203.8114%206.23223%203.54918C6.58187%203.28695%207.02732%203.10838%207.51228%203.03603C7.99723%202.96368%208.4999%203.00081%208.95671%203.14273C9.41353%203.28464%209.80397%203.52496%2010.0787%203.83331C10.3534%204.14165%2010.5%204.50416%2010.5%204.875C10.4992%205.3721%2010.2356%205.84867%209.76689%206.20017C9.29822%206.55167%208.6628%206.74941%208%206.75ZM8%203.75C7.70333%203.75%207.41332%203.81598%207.16665%203.9396C6.91997%204.06321%206.72771%204.23892%206.61418%204.44448C6.50065%204.65005%206.47095%204.87625%206.52882%205.09448C6.5867%205.31271%206.72956%205.51316%206.93934%205.6705C7.14912%205.82783%207.41639%205.93498%207.70737%205.97838C7.99834%206.02179%208.29994%205.99951%208.57403%205.91437C8.84812%205.82922%209.08238%205.68502%209.24721%205.50002C9.41203%205.31501%209.5%205.09751%209.5%204.875C9.4996%204.57672%209.34144%204.29075%209.06022%204.07983C8.779%203.86892%208.3977%203.7503%208%203.75Z'%20fill='%23A7A7A7'/%3e%3cpath%20d='M8.00001%2011.25L3.78201%207.51912C3.7234%207.4631%203.66539%207.40673%203.60801%207.35C2.8875%206.63817%202.49826%205.76871%202.50001%204.875C2.50001%203.78098%203.07947%202.73177%204.11092%201.95818C5.14237%201.1846%206.54132%200.75%208.00001%200.75C9.4587%200.75%2010.8576%201.1846%2011.8891%201.95818C12.9205%202.73177%2013.5%203.78098%2013.5%204.875C13.5018%205.7683%2013.1127%206.63737%2012.3925%207.34888L12.392%207.35C12.392%207.35%2012.242%207.49775%2012.2195%207.51763L8.00001%2011.25ZM4.40601%206.89813C4.40701%206.89813%204.52301%207.01362%204.54951%207.03837L8.00001%2010.0905L11.455%207.03425C11.477%207.01362%2011.594%206.89738%2011.5945%206.897C12.1831%206.31542%2012.5012%205.60514%2012.5%204.875C12.5%203.97989%2012.0259%203.12145%2011.182%202.48851C10.3381%201.85558%209.19348%201.5%208.00001%201.5C6.80653%201.5%205.66194%201.85558%204.81803%202.48851C3.97411%203.12145%203.50001%203.97989%203.50001%204.875C3.49896%205.60559%203.81739%206.31628%204.40651%206.89813H4.40601Z'%20fill='%23A7A7A7'/%3e%3c/svg%3e",Ja="/Portfolio/assets/me-portrait-mDlZHhdr.jpg",Xa="/Portfolio/assets/me-stack-Ae85n7c9.jpg",el="/Portfolio/assets/me-viewpoint-NIcbNdVZ.jpg",tl="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgMjYwIiB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI2MCI+DQogIDxkZWZzPg0KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4NCiAgICAgIDxzdG9wIG9mZnNldD0iMCUiICAgc3RvcC1jb2xvcj0iIzBkMjU0MCIvPg0KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDA4OGNjIi8+DQogICAgPC9saW5lYXJHcmFkaWVudD4NCiAgICA8bGluZWFyR3JhZGllbnQgaWQ9InNoaWVsZCIgeDE9IjAiIHkxPSIwIiB4Mj0iMCIgeTI9IjEiPg0KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgICBzdG9wLWNvbG9yPSIjZmZmZmZmIi8+DQogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNjY2U4ZjYiLz4NCiAgICA8L2xpbmVhckdyYWRpZW50Pg0KICA8L2RlZnM+DQogIDxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjYwIiBmaWxsPSJ1cmwoI2JnKSIvPg0KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMDAsMTE4KSI+DQogICAgPHBhdGggZD0iTTAsLTcyIEw2MiwtNTAgTDYyLDggQzYyLDQyIDM1LDY2IDAsNzYgQy0zNSw2NiAtNjIsNDIgLTYyLDggTC02MiwtNTAgWiINCiAgICAgICAgICBmaWxsPSJ1cmwoI3NoaWVsZCkiIHN0cm9rZT0iIzAwNTU4MCIgc3Ryb2tlLXdpZHRoPSIzIi8+DQogICAgPHBhdGggZD0iTS0yMiw0IEwtNiwyMiBMMjYsLTE4IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDU1ODAiIHN0cm9rZS13aWR0aD0iOCINCiAgICAgICAgICBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4NCiAgPC9nPg0KICA8dGV4dCB4PSIyMDAiIHk9IjIzMCIgdGV4dC1hbmNob3I9Im1pZGRsZSINCiAgICAgICAgZm9udC1mYW1pbHk9IlNlZ29lIFVJLCBBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyOCIgZm9udC13ZWlnaHQ9IjcwMCIgZmlsbD0iI2ZmZmZmZiI+DQogICAgU2NhbUd1YXJkIEJvdA0KICA8L3RleHQ+DQo8L3N2Zz4NCg==",nl="/Portfolio/assets/scss-RZ817m-M.svg",sl="data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16.875%201.875C8.59152%201.875%201.875%208.59152%201.875%2016.875C1.875%2025.1585%208.59152%2031.875%2016.875%2031.875C25.1585%2031.875%2031.875%2025.1585%2031.875%2016.875C31.875%208.59152%2025.1585%201.875%2016.875%201.875ZM24.0837%2013.1819C24.0937%2013.3393%2024.0937%2013.5033%2024.0937%2013.6641C24.0937%2018.5792%2020.3504%2024.2411%2013.51%2024.2411C11.4007%2024.2411%209.44531%2023.6283%207.79799%2022.5737C8.09933%2022.6071%208.38728%2022.6205%208.69531%2022.6205C10.4364%2022.6205%2012.0368%2022.0312%2013.3125%2021.0335C11.6786%2021%2010.3058%2019.9286%209.83705%2018.4554C10.4096%2018.5391%2010.9252%2018.5391%2011.5145%2018.3884C10.6732%2018.2175%209.91699%2017.7605%209.37438%2017.0953C8.83178%2016.43%208.53623%2015.5973%208.53795%2014.7388V14.692C9.03013%2014.9699%209.60938%2015.1406%2010.2154%2015.1641C9.70595%2014.8245%209.28814%2014.3645%208.99903%2013.8249C8.70993%2013.2852%208.55845%2012.6825%208.55804%2012.0703C8.55804%2011.3772%208.73884%2010.7444%209.06362%2010.1953C9.99744%2011.3449%2011.1627%2012.2851%2012.4837%2012.9548C13.8047%2013.6245%2015.2518%2014.0088%2016.731%2014.0826C16.2054%2011.5547%2018.0938%209.50893%2020.3638%209.50893C21.4353%209.50893%2022.3996%209.95759%2023.0792%2010.6808C23.9196%2010.5234%2024.7232%2010.2087%2025.4397%209.78683C25.1618%2010.6473%2024.5792%2011.3739%2023.8058%2011.8326C24.5558%2011.7522%2025.279%2011.5446%2025.9487%2011.2533C25.4431%2011.9967%2024.8103%2012.6562%2024.0837%2013.1819Z'%20fill='%23A7A7A7'/%3e%3c/svg%3e",rl="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2032%2032'%20xmlns='http://www.w3.org/2000/svg'%20fill='none'%3e%3ctitle%3efile_type_vite%3c/title%3e%3cpath%20d='M29.8836%206.146L16.7418%2029.6457c-.2714.4851-.9684.488-1.2439.0052L2.0956%206.1482c-.3-.5262.1498-1.1635.746-1.057l13.156%202.3516a.7144.7144%200%2000.2537-.0004l12.8808-2.3478c.5942-.1083%201.0463.5241.7515%201.0513z'%20fill='url(%23paint0_linear)'/%3e%3cpath%20d='M22.2644%202.0069l-9.7253%201.9056a.3571.3571%200%2000-.2879.3294l-.5982%2010.1038c-.014.238.2045.4227.4367.3691l2.7077-.6248c.2534-.0585.4823.1647.4302.4194l-.8044%203.9393c-.0542.265.1947.4918.4536.4132l1.6724-.5082c.2593-.0787.5084.1487.4536.414l-1.2784%206.1877c-.08.387.4348.598.6495.2662L16.5173%2025%2024.442%209.1848c.1327-.2648-.096-.5667-.387-.5106l-2.787.5379c-.262.0505-.4848-.1934-.4109-.4497l1.8191-6.306c.074-.2568-.1496-.5009-.4118-.4495z'%20fill='url(%23paint1_linear)'/%3e%3cdefs%20id='defs50'%3e%3clinearGradient%20id='paint0_linear'%20x1='6.0002'%20y1='32.9999'%20x2='235'%20y2='344'%20gradientUnits='userSpaceOnUse'%20gradientTransform='matrix(.07142%200%200%20.07142%201.3398%201.8944)'%3e%3cstop%20stop-color='%2341D1FF'%20id='stop38'/%3e%3cstop%20offset='1'%20stop-color='%23BD34FE'%20id='stop40'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear'%20x1='194.651'%20y1='8.8182'%20x2='236.076'%20y2='292.989'%20gradientUnits='userSpaceOnUse'%20gradientTransform='matrix(.07142%200%200%20.07142%201.3398%201.8944)'%3e%3cstop%20stop-color='%23FFEA83'%20id='stop43'/%3e%3cstop%20offset='.0833'%20stop-color='%23FFDD35'%20id='stop45'/%3e%3cstop%20offset='1'%20stop-color='%23FFA800'%20id='stop47'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",il="data:image/svg+xml,%3csvg%20width='112'%20height='112'%20viewBox='0%200%20112%20112'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M101.535%2017.605L81.3541%207.88899C80.2144%207.33948%2078.932%207.15814%2077.6847%207.37011C76.4373%207.58208%2075.2868%208.17686%2074.3926%209.07199L8.3301%2069.3C7.52857%2070.0273%207.04878%2071.0432%206.99627%2072.1243C6.94376%2073.2053%207.32283%2074.2629%208.0501%2075.0645C8.1376%2075.159%208.2251%2075.25%208.3196%2075.334L13.7131%2080.234C14.4179%2080.8754%2015.325%2081.2497%2016.2771%2081.2919C17.2291%2081.3341%2018.1658%2081.0416%2018.9246%2080.465L98.4971%2020.125C99.0981%2019.6689%2099.8145%2019.3897%20100.566%2019.3186C101.317%2019.2476%20102.073%2019.3877%20102.749%2019.7231C103.425%2020.0585%20103.993%2020.5758%20104.391%2021.217C104.789%2021.8581%20105%2022.5975%20105%2023.352V23.1175C105%2021.9656%20104.675%2020.8372%20104.062%2019.862C103.449%2018.8868%20102.573%2018.1045%20101.535%2017.605Z'%20fill='%230065A9'/%3e%3cpath%20d='M101.535%2094.395L81.3541%20104.115C80.2141%20104.662%2078.9321%20104.843%2077.6851%20104.631C76.4381%20104.419%2075.2876%20103.825%2074.3926%20102.932L8.3301%2042.7C7.52857%2041.9727%207.04878%2040.9568%206.99627%2039.8758C6.94376%2038.7947%207.32283%2037.7371%208.0501%2036.9355C8.1376%2036.841%208.2251%2036.75%208.3196%2036.666L13.7131%2031.766C14.4186%2031.1219%2015.3278%2030.7459%2016.2822%2030.7037C17.2366%2030.6615%2018.1755%2030.9557%2018.9351%2031.535L98.4971%2091.875C99.0981%2092.3311%2099.8145%2092.6104%20100.566%2092.6814C101.317%2092.7524%20102.073%2092.6123%20102.749%2092.2769C103.425%2091.9415%20103.993%2091.4242%20104.391%2090.783C104.789%2090.1419%20105%2089.4025%20105%2088.648V88.9C104.996%2090.0488%20104.669%2091.1733%20104.057%2092.1451C103.444%2093.1168%20102.57%2093.8965%20101.535%2094.395Z'%20fill='%23007ACC'/%3e%3cpath%20d='M81.3539%20104.115C80.2139%20104.662%2078.9319%20104.843%2077.6849%20104.631C76.4379%20104.419%2075.2874%20103.825%2074.3924%20102.932C74.895%20103.428%2075.5329%20103.764%2076.226%20103.899C76.9192%20104.034%2077.6368%20103.962%2078.2889%20103.691C78.941%20103.42%2079.4987%20102.963%2079.892%20102.376C80.2853%20101.79%2080.4968%20101.1%2080.4999%20100.394V11.606C80.5005%2010.8965%2080.2905%2010.2028%2079.8965%209.61277C79.5025%209.02274%2078.9423%208.56291%2078.2867%208.29155C77.6312%208.02019%2076.9098%207.9495%2076.2141%208.08843C75.5183%208.22737%2074.8795%208.56968%2074.3784%209.072C75.2728%208.1772%2076.423%207.58239%2077.6702%207.36983C78.9173%207.15727%2080.1997%207.33747%2081.3399%207.8855L101.517%2017.5875C102.559%2018.0845%20103.438%2018.8658%20104.054%2019.8412C104.67%2020.8165%20104.998%2021.9463%20105%2023.1V88.9C105%2090.0528%20104.675%2091.1823%20104.061%2092.1582C103.447%2093.1341%20102.571%2093.9168%20101.531%2094.416L81.3539%20104.115Z'%20fill='%231F9CF0'/%3e%3c/svg%3e",ol="/Portfolio/assets/vue-Mzr_xbml.png",hm=t=>(Ii("data-v-fc038f2c"),t=t(),Ti(),t),ib={class:"langs"},ob=hm(()=>v("h2",{class:"langs__title"},"My Tech Stack",-1)),ab=hm(()=>v("p",{class:"langs__desc"},"Technologies I've been working with recently",-1)),lb={class:"langs__grid"},cb=["src","alt"],ub={class:"techtile__name"},hb={__name:"Main",setup(t){const{data:e}=ss(),n=st(()=>e.value.homeTech||[]),s=Object.assign({"/src/assets/img/calendar.png":Ma,"/src/assets/img/card_1.png":xa,"/src/assets/img/card_2.png":La,"/src/assets/img/card_3.png":Ua,"/src/assets/img/card_4.png":Fa,"/src/assets/img/card_6.png":Ba,"/src/assets/img/card_7.jpg":ja,"/src/assets/img/claude.svg":$a,"/src/assets/img/css.svg":Ha,"/src/assets/img/git.svg":qa,"/src/assets/img/github.svg":Wa,"/src/assets/img/html.svg":za,"/src/assets/img/insta.svg":Ka,"/src/assets/img/js.svg":Ga,"/src/assets/img/lern.svg":Qa,"/src/assets/img/link.png":Za,"/src/assets/img/location.svg":Ya,"/src/assets/img/me-portrait.jpg":Ja,"/src/assets/img/me-stack.jpg":Xa,"/src/assets/img/me-viewpoint.jpg":el,"/src/assets/img/scamguard.svg":tl,"/src/assets/img/scss.svg":nl,"/src/assets/img/twitter.svg":sl,"/src/assets/img/vite.svg":rl,"/src/assets/img/vs.svg":il,"/src/assets/img/vue.png":ol});function r(i){if(!i)return"";if(i.startsWith("http"))return i;const a=Object.keys(s).find(l=>l.endsWith("/"+i));return a?s[a]:""}return(i,a)=>(K(),G("section",ib,[ob,ab,v("div",lb,[(K(!0),G(ye,null,Ze(n.value,l=>(K(),G("div",{class:"techtile",key:l.name},[v("img",{src:r(l.icon),alt:l.name,class:"techtile__icon"},null,8,cb),v("span",ub,me(l.name),1)]))),128))])]))}},db=Mi(hb,[["__scopeId","data-v-fc038f2c"]]),al="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEnSURBVHgBrZTvDYIwEMVLAt8dwRHcREdwA91AN9AN1AlkA0fADXAD+EbCv3rPXE2tpaWESy5SLL/evddWiJkjEoEhpVw0TbOJougVx/GTfksxJQBq2/ZOKfXsuu4gQgMw+jBjyKOu6y2Nd/Sc4x2N90FAVRm1erRUDWiB59FAVDRUBd5jMYo1xrELxKsiU4f4flNYsxNa0cTPqJqVpcIrV7h0wb4GQDf1kakVHObFLl6YaUBVVUs4a4FlVkOGYICY7XhhuhY6jLdFodrCf5DBC0M7Q1rACE3Tj44EPjv3HU3a8OTt0BwA0LpvA//sw77vrZOhI2VJl8FNjAlNq9ysQBmA4ydCQh0hQFERjtsoA1zBLkoj7yGwvwuW21/BgCRJ0skX6FzxBixX1Dd9LydPAAAAAElFTkSuQmCC",fb={class:"works"},pb=v("h2",{class:"works__title"},"Projects",-1),gb=v("p",{class:"works__desc"},"Things I've built so far",-1),mb={class:"works__cards"},_b=["src","alt"],yb={class:"card__desc"},vb={class:"card__desc_title"},Eb={class:"card__desc_text"},wb={key:0,class:"card__desc_info"},Ib={class:"card__desc_links"},Tb={key:0,class:"card__desc_link"},Ab=v("img",{src:al,alt:""},null,-1),bb=["href"],Cb={key:1,class:"card__desc_link"},Rb=v("img",{src:al,alt:""},null,-1),Pb=["href"],Sb={key:2,class:"card__desc_git"},kb=v("img",{src:_a,alt:""},null,-1),Vb=["href"],Db={__name:"MyWorks",setup(t){const{data:e}=ss(),n=st(()=>e.value.projects||[]),s=Object.assign({"/src/assets/img/calendar.png":Ma,"/src/assets/img/card_1.png":xa,"/src/assets/img/card_2.png":La,"/src/assets/img/card_3.png":Ua,"/src/assets/img/card_4.png":Fa,"/src/assets/img/card_6.png":Ba,"/src/assets/img/card_7.jpg":ja,"/src/assets/img/claude.svg":$a,"/src/assets/img/css.svg":Ha,"/src/assets/img/git.svg":qa,"/src/assets/img/github.svg":Wa,"/src/assets/img/html.svg":za,"/src/assets/img/insta.svg":Ka,"/src/assets/img/js.svg":Ga,"/src/assets/img/lern.svg":Qa,"/src/assets/img/link.png":Za,"/src/assets/img/location.svg":Ya,"/src/assets/img/me-portrait.jpg":Ja,"/src/assets/img/me-stack.jpg":Xa,"/src/assets/img/me-viewpoint.jpg":el,"/src/assets/img/scamguard.svg":tl,"/src/assets/img/scss.svg":nl,"/src/assets/img/twitter.svg":sl,"/src/assets/img/vite.svg":rl,"/src/assets/img/vs.svg":il,"/src/assets/img/vue.png":ol});function r(i){if(!i)return"";if(i.startsWith("http"))return i;const a=Object.keys(s).find(l=>l.endsWith("/"+i));return a?s[a]:""}return(i,a)=>(K(),G("div",fb,[pb,gb,v("div",mb,[(K(!0),G(ye,null,Ze(n.value,l=>(K(),G("div",{class:"works__cards_card",key:l.title},[v("img",{src:r(l.image),alt:l.title,class:"card__img"},null,8,_b),v("div",yb,[v("h3",vb,me(l.title),1),v("p",Eb,me(l.desc),1),l.tech?(K(),G("p",wb,"Tech stack : "+me(l.tech),1)):bt("",!0),v("div",Ib,[l.telegram?(K(),G("div",Tb,[Ab,v("a",{href:l.telegram,target:"_blank",rel:"noopener"},"Open in Telegram",8,bb)])):bt("",!0),l.liveUrl?(K(),G("div",Cb,[Rb,v("a",{href:l.liveUrl,target:"_blank",rel:"noopener"},"Live Preview",8,Pb)])):bt("",!0),l.codeUrl?(K(),G("div",Sb,[kb,v("a",{href:l.codeUrl,target:"_blank",rel:"noopener"},"View Code",8,Vb)])):bt("",!0)])])]))),128))])]))}},Nb={__name:"Home",setup(t){return(e,n)=>(K(),G("div",null,[Ie(rb),Ie(db),Ie(Db),Ie(Ir)]))}},Ob="/Portfolio/assets/me-stack-Ae85n7c9.jpg",Mb={class:"about"},xb={class:"about__title"},Lb={key:0},Ub=v("img",{src:Ob,alt:"Rustam Isroilov",class:"about__img about__img--landscape"},null,-1),Fb={class:"stack"},Bb=v("h2",{class:"stack__title"},"My Tech Stack",-1),jb=v("p",{class:"stack__desc"},"Technologies I've been working with recently",-1),$b={class:"stack__items"},Hb={class:"item__title"},qb=["src","alt"],Wb={class:"item__procent"},zb={__name:"Stack",setup(t){const{data:e}=ss(),n=st(()=>Uu(e.value.stack.title)),s=Object.assign({"/src/assets/img/calendar.png":Ma,"/src/assets/img/card_1.png":xa,"/src/assets/img/card_2.png":La,"/src/assets/img/card_3.png":Ua,"/src/assets/img/card_4.png":Fa,"/src/assets/img/card_6.png":Ba,"/src/assets/img/card_7.jpg":ja,"/src/assets/img/claude.svg":$a,"/src/assets/img/css.svg":Ha,"/src/assets/img/git.svg":qa,"/src/assets/img/github.svg":Wa,"/src/assets/img/html.svg":za,"/src/assets/img/insta.svg":Ka,"/src/assets/img/js.svg":Ga,"/src/assets/img/lern.svg":Qa,"/src/assets/img/link.png":Za,"/src/assets/img/location.svg":Ya,"/src/assets/img/me-portrait.jpg":Ja,"/src/assets/img/me-stack.jpg":Xa,"/src/assets/img/me-viewpoint.jpg":el,"/src/assets/img/scamguard.svg":tl,"/src/assets/img/scss.svg":nl,"/src/assets/img/twitter.svg":sl,"/src/assets/img/vite.svg":rl,"/src/assets/img/vs.svg":il,"/src/assets/img/vue.png":ol});function r(i){if(!i)return"";if(i.startsWith("http"))return i;const a=Object.keys(s).find(l=>l.endsWith("/"+i));return a?s[a]:""}return(i,a)=>(K(),G(ye,null,[v("div",Mb,[v("h1",xb,[(K(!0),G(ye,null,Ze(n.value,(l,c)=>(K(),G(ye,{key:c},[l.brand?(K(),G("span",Lb,me(l.text),1)):(K(),G(ye,{key:1},[Y(me(l.text),1)],64))],64))),128))]),Ub]),v("div",Fb,[Bb,jb,v("div",$b,[(K(!0),G(ye,null,Ze(Ye(e).stack.items,l=>(K(),G("div",{class:"stack__items_item",key:l.name},[v("h3",Hb,me(l.name),1),v("img",{src:r(l.icon),alt:l.name,class:"stack__items_img"},null,8,qb),v("div",{class:"stack__line",style:ra({background:`linear-gradient(90deg, var(--brand-from) ${l.percent}%, transparent ${l.percent+5}%)`})},null,4),v("h3",Wb,me(l.percent)+"%",1)]))),128))])]),Ie(Ir)],64))}},xi=t=>(Ii("data-v-fbf1e6ec"),t=t(),Ti(),t),Kb={class:"works"},Gb=xi(()=>v("h2",{class:"card__title"},"Projects",-1)),Qb=xi(()=>v("p",{class:"works__desc"},"Things I've built so far",-1)),Zb={class:"works__cards"},Yb=["src","alt"],Jb={class:"card__desc"},Xb={class:"card__title"},e3={class:"card__text"},t3={class:"card__btns"},n3={key:0,class:"card__btns_btn"},s3=xi(()=>v("img",{src:al,alt:""},null,-1)),r3=["href"],i3={key:1,class:"card__btns_btn"},o3=xi(()=>v("img",{src:al,alt:""},null,-1)),a3=["href"],l3={key:2,class:"card__btns_btn"},c3=xi(()=>v("img",{src:_a,alt:""},null,-1)),u3=["href"],h3={__name:"Project",setup(t){const{data:e}=ss(),n=st(()=>e.value.projects||[]),s=Object.assign({"/src/assets/img/calendar.png":Ma,"/src/assets/img/card_1.png":xa,"/src/assets/img/card_2.png":La,"/src/assets/img/card_3.png":Ua,"/src/assets/img/card_4.png":Fa,"/src/assets/img/card_6.png":Ba,"/src/assets/img/card_7.jpg":ja,"/src/assets/img/claude.svg":$a,"/src/assets/img/css.svg":Ha,"/src/assets/img/git.svg":qa,"/src/assets/img/github.svg":Wa,"/src/assets/img/html.svg":za,"/src/assets/img/insta.svg":Ka,"/src/assets/img/js.svg":Ga,"/src/assets/img/lern.svg":Qa,"/src/assets/img/link.png":Za,"/src/assets/img/location.svg":Ya,"/src/assets/img/me-portrait.jpg":Ja,"/src/assets/img/me-stack.jpg":Xa,"/src/assets/img/me-viewpoint.jpg":el,"/src/assets/img/scamguard.svg":tl,"/src/assets/img/scss.svg":nl,"/src/assets/img/twitter.svg":sl,"/src/assets/img/vite.svg":rl,"/src/assets/img/vs.svg":il,"/src/assets/img/vue.png":ol});function r(i){if(!i)return"";if(i.startsWith("http"))return i;const a=Object.keys(s).find(l=>l.endsWith("/"+i));return a?s[a]:""}return(i,a)=>(K(),G(ye,null,[v("div",Kb,[Gb,Qb,v("div",Zb,[(K(!0),G(ye,null,Ze(n.value,(l,c)=>(K(),G("div",{class:on(["project__card",{"project__card--reverse":c%2===1}]),key:l.title},[v("img",{src:r(l.image),alt:l.title,class:"card__img"},null,8,Yb),v("div",Jb,[v("div",Xb,me(l.title),1),v("div",e3,me(l.desc),1),v("div",t3,[l.telegram?(K(),G("div",n3,[s3,v("a",{href:l.telegram,target:"_blank",rel:"noopener"},"Open in Telegram",8,r3)])):bt("",!0),l.liveUrl?(K(),G("div",i3,[o3,v("a",{href:l.liveUrl,target:"_blank",rel:"noopener"},"View Site",8,a3)])):bt("",!0),l.codeUrl?(K(),G("div",l3,[c3,v("a",{href:l.codeUrl,target:"_blank",rel:"noopener"},"View Code",8,u3)])):bt("",!0)])])],2))),128))])]),Ie(Ir)],64))}},d3=Mi(h3,[["__scopeId","data-v-fbf1e6ec"]]),f3={class:"contact__title"},p3={__name:"Contact",setup(t){const{data:e}=ss();return(n,s)=>(K(),G(ye,null,[v("div",null,[v("h1",f3,[Y("For any questions please mail me: "),v("span",null,me(Ye(e).profile.email),1)])]),Ie(Ir)],64))}};function g3(){const t=mt(structuredClone(So)),e=mt(Zn),n=mt(null);let s=null;return Hc(()=>{if(Zn)try{s=k0(js(ms,"content","achievements"),r=>{r.exists()&&(t.value=r.data()),e.value=!1},r=>{n.value=r,e.value=!1,console.warn("[useAchievements] Firestore error, using defaults:",r.message)})}catch(r){n.value=r,e.value=!1}}),da(()=>{s&&s()}),{data:t,loading:e,error:n}}const Vs=t=>(Ii("data-v-cfe45b83"),t=t(),Ti(),t),m3={class:"ach"},_3=Vs(()=>v("header",{class:"ach__head"},[v("h1",{class:"ach__title"},"Achievements"),v("p",{class:"ach__sub"},"Exam scores, milestones & study highlights")],-1)),y3={class:"ach__card ach__ielts"},v3={class:"ach__card_head"},E3=Vs(()=>v("span",{class:"ach__badge ach__badge--gold"},"IELTS",-1)),w3={class:"ach__big"},I3=Vs(()=>v("small",null," / 9.0",-1)),T3=Vs(()=>v("p",{class:"ach__card_desc"},"Overall band — Academic",-1)),A3={class:"ielts__grid"},b3={class:"ielts__label"},C3={class:"ielts__score"},R3={class:"ach__row"},P3={class:"ach__card"},S3=Vs(()=>v("span",{class:"ach__badge ach__badge--blue"},"GPA",-1)),k3={class:"ach__big"},V3={class:"ach__card_desc"},D3={class:"ach__card"},N3=Vs(()=>v("span",{class:"ach__badge ach__badge--pink"},"SAT",-1)),O3={class:"ach__big ach__big--soft"},M3={class:"ach__card_desc"},x3=Vs(()=>v("h2",{class:"ach__section"},"Study & Milestones",-1)),L3={class:"ach__timeline"},U3={class:"tl__title"},F3={class:"tl__org"},B3={class:"tl__when"},j3={class:"tl__desc"},$3={key:0,class:"tl__badges"},H3={__name:"Achievements",setup(t){const{data:e}=g3();return(n,s)=>(K(),G(ye,null,[v("div",m3,[_3,v("section",y3,[v("div",v3,[E3,v("h2",w3,[Y(me(Ye(e).ielts.overall),1),I3])]),T3,v("div",A3,[(K(!0),G(ye,null,Ze(Ye(e).ielts.sections,r=>(K(),G("div",{class:"ielts__item",key:r.label},[v("span",b3,me(r.label),1),v("span",C3,me(r.score),1)]))),128))])]),v("div",R3,[v("section",P3,[S3,v("h2",k3,[Y(me(Ye(e).gpa.value),1),v("small",null," / "+me(Ye(e).gpa.scale),1)]),v("p",V3,me(Ye(e).gpa.note),1)]),v("section",D3,[N3,v("h2",O3,me(Ye(e).sat.status),1),v("p",M3,me(Ye(e).sat.note),1)])]),x3,v("div",L3,[(K(!0),G(ye,null,Ze(Ye(e).milestones,r=>(K(),G("article",{class:"tl__item",key:r.title},[v("div",{class:on(["tl__dot",{"tl__dot--star":r.badges&&r.badges.length}])},null,2),v("div",{class:on(["tl__body",{"tl__body--highlight":r.badges&&r.badges.length}])},[v("h3",U3,me(r.title),1),v("p",F3,me(r.org),1),v("p",B3,me(r.when),1),v("p",j3,me(r.desc),1),r.badges&&r.badges.length?(K(),G("ul",$3,[(K(!0),G(ye,null,Ze(r.badges,i=>(K(),G("li",{key:i},me(i),1))),128))])):bt("",!0)],2)]))),128))])]),Ie(Ir)],64))}},q3=Mi(H3,[["__scopeId","data-v-cfe45b83"]]),Ke=t=>(Ii("data-v-5d19fcc3"),t=t(),Ti(),t),W3={class:"admin"},z3={key:0,class:"admin__notice"},K3=Ke(()=>v("h1",null,"⚠️ Admin not set up yet",-1)),G3=Ke(()=>v("p",null,[Y(" The admin panel needs Firebase to be configured. Open the "),v("code",null,"README.md"),Y(" file and follow the "),v("strong",null,'"Set up the admin panel"'),Y(" section (5–10 minutes, free Google account). ")],-1)),Q3=[K3,G3],Z3=Ke(()=>v("h1",null,"Admin sign-in",-1)),Y3=Ke(()=>v("p",{class:"admin__hint"}," Use the email & password you set up in Firebase Console (Authentication → Users). ",-1)),J3=["disabled"],X3={key:0,class:"admin__error"},eC={key:2,class:"admin__panel"},tC={class:"admin__top"},nC=Ke(()=>v("h1",null,"Edit your site",-1)),sC={class:"admin__hint"},rC={class:"admin__tabs"},iC=["onClick"],oC={class:"admin__card"},aC=Ke(()=>v("h2",null,"Profile & Contact",-1)),lC={class:"admin__card"},cC=Ke(()=>v("h2",null,"Home page",-1)),uC=Ke(()=>v("p",{class:"admin__hint"},[Y(" Wrap words in "),v("code",null,"{curly braces}"),Y(" to apply the brand gradient (sky→indigo) — e.g. "),v("code",null,`"Hi I'm {Rustam}"`),Y(". ")],-1)),hC={class:"admin__card"},dC=Ke(()=>v("h2",null,"About page",-1)),fC=Ke(()=>v("p",{class:"admin__hint"},[Y(" Same "),v("code",null,"{brand}"),Y(" wrapping for the tagline. Bio paragraphs support "),v("code",null,"**bold**"),Y(" and "),v("code",null,"*italic*"),Y(". ")],-1)),pC={class:"admin__cardhead"},gC=Ke(()=>v("h3",{style:{"margin-top":"8px"}},"Bio paragraphs",-1)),mC=["onUpdate:modelValue"],_C=["onClick"],yC={class:"admin__card"},vC=Ke(()=>v("h2",null,"Education",-1)),EC=["onUpdate:modelValue"],wC=["onUpdate:modelValue"],IC=["onUpdate:modelValue"],TC=["onUpdate:modelValue"],AC={class:"admin__checkbox"},bC=["onUpdate:modelValue"],CC=["onClick"],RC={class:"admin__card"},PC=Ke(()=>v("h2",null,"Tech Stack page",-1)),SC=Ke(()=>v("p",{class:"admin__hint"},[Y("Use "),v("code",null,"{brand}"),Y(" in the tagline. Icons reference files in "),v("code",null,"src/assets/img/"),Y(" (or external https:// URLs).")],-1)),kC=Ke(()=>v("h3",{style:{"margin-top":"8px"}},"Skills list",-1)),VC=["onUpdate:modelValue"],DC=["onUpdate:modelValue"],NC=["onUpdate:modelValue"],OC=["onClick"],MC={class:"admin__card"},xC={class:"admin__cardhead"},LC=Ke(()=>v("h2",null,"Home page tech grid",-1)),UC=["onUpdate:modelValue"],FC=["onUpdate:modelValue"],BC=["onClick"],jC={class:"admin__card"},$C=Ke(()=>v("h2",null,"Projects",-1)),HC=["onUpdate:modelValue"],qC=["onUpdate:modelValue"],WC=["onUpdate:modelValue"],zC=["onUpdate:modelValue"],KC=["onUpdate:modelValue"],GC=["onUpdate:modelValue"],QC=["onUpdate:modelValue"],ZC={class:"admin__rowbtns"},YC=["onClick","disabled"],JC=["onClick","disabled"],XC=["onClick"],e9={class:"admin__card"},t9=Ke(()=>v("h2",null,"IELTS",-1)),n9={class:"admin__grid"},s9=["onUpdate:modelValue"],r9={class:"admin__card"},i9=Ke(()=>v("h2",null,"GPA",-1)),o9={class:"admin__card"},a9=Ke(()=>v("h2",null,"SAT",-1)),l9={class:"admin__card"},c9=Ke(()=>v("h2",null,"Achievements milestones",-1)),u9=["onUpdate:modelValue"],h9=["onUpdate:modelValue"],d9=["onUpdate:modelValue"],f9=["onUpdate:modelValue"],p9=["value","onInput"],g9=["onClick"],m9={class:"admin__save"},_9=["disabled"],y9={__name:"Admin",setup(t){const e=[{id:"profile",label:"Profile"},{id:"home",label:"Home"},{id:"about",label:"About"},{id:"education",label:"Education"},{id:"stack",label:"Tech Stack"},{id:"projects",label:"Projects"},{id:"achievements",label:"Achievements"}],n=mt("profile"),s=mt(null),r=mt(""),i=mt(""),a=mt(""),l=mt(!1),c=mt(""),h=mt("ok"),f=()=>({site:structuredClone(pn),ach:structuredClone(So)});let g=JSON.stringify(f());const p=wi(f());function C(w,E="ok"){c.value=w,h.value=E,setTimeout(()=>c.value="",3500)}Zn&&WT(Po,w=>{s.value=w,w&&V()});async function V(){try{const[w,E]=await Promise.all([Ef(js(ms,"content","site")),Ef(js(ms,"content","achievements"))]),_=w.exists()?w.data():pn,b=E.exists()?E.data():So;p.site=M(structuredClone(pn),_),p.ach=M(structuredClone(So),b),g=JSON.stringify({site:p.site,ach:p.ach})}catch(w){C("Could not load: "+w.message,"err")}}function M(w,E){if(Array.isArray(E)||typeof E!="object"||E===null)return E;const _={...w};for(const b of Object.keys(E))_[b]=M(w==null?void 0:w[b],E[b]);return _}async function N(){if(Zn){l.value=!0,a.value="";try{await $T(Po,r.value,i.value)}catch(w){a.value=w.code==="auth/invalid-credential"?"Wrong email or password.":w.message}finally{l.value=!1}}}async function j(){await zT(Po)}async function H(){l.value=!0;try{await Promise.all([wf(js(ms,"content","site"),JSON.parse(JSON.stringify(p.site))),wf(js(ms,"content","achievements"),JSON.parse(JSON.stringify(p.ach)))]),g=JSON.stringify({site:p.site,ach:p.ach}),C("Saved! Your portfolio will update within a few seconds.")}catch(w){C("Save failed: "+w.message,"err")}finally{l.value=!1}}function X(){const w=JSON.parse(g);Object.assign(p,w),C("Discarded unsaved changes.")}function Q(){p.ach.milestones.push({title:"New milestone",org:"",when:"",desc:"",badges:[]})}function Pe(){p.site.about.education.push({title:"New school",org:"Tashkent, Uzbekistan",when:"",badge:"Completed",gold:!1})}function ve(){p.site.stack.items.push({name:"New skill",icon:"",percent:50})}function R(){p.site.projects.push({title:"New project",desc:"",tech:"",image:"",liveUrl:"",codeUrl:"",telegram:""})}function I(w,E){const _=w+E;if(_<0||_>=p.site.projects.length)return;const b=p.site.projects;[b[w],b[_]]=[b[_],b[w]]}return(w,E)=>(K(),G("div",W3,[Ye(Zn)?s.value?(K(),G("div",eC,[v("header",tC,[v("div",null,[nC,v("p",sC,[Y("Signed in as "),v("strong",null,me(s.value.email),1)])]),v("button",{class:"ghost",onClick:j},"Sign out")]),c.value?(K(),G("p",{key:0,class:on(["admin__status",h.value])},me(c.value),3)):bt("",!0),v("nav",rC,[(K(),G(ye,null,Ze(e,_=>v("button",{key:_.id,type:"button",class:on({active:n.value===_.id}),onClick:b=>n.value=_.id},me(_.label),11,iC)),64))]),oe(v("section",oC,[aC,v("label",null,[Y("Full name "),oe(v("input",{"onUpdate:modelValue":E[2]||(E[2]=_=>p.site.profile.name=_)},null,512),[[we,p.site.profile.name]])]),v("label",null,[Y("Email "),oe(v("input",{"onUpdate:modelValue":E[3]||(E[3]=_=>p.site.profile.email=_),type:"email"},null,512),[[we,p.site.profile.email]])]),v("label",null,[Y("Phone "),oe(v("input",{"onUpdate:modelValue":E[4]||(E[4]=_=>p.site.profile.phone=_)},null,512),[[we,p.site.profile.phone]])]),v("label",null,[Y("GitHub URL "),oe(v("input",{"onUpdate:modelValue":E[5]||(E[5]=_=>p.site.profile.github=_)},null,512),[[we,p.site.profile.github]])]),v("label",null,[Y("Twitter URL "),oe(v("input",{"onUpdate:modelValue":E[6]||(E[6]=_=>p.site.profile.twitter=_)},null,512),[[we,p.site.profile.twitter]])]),v("label",null,[Y("Instagram URL"),oe(v("input",{"onUpdate:modelValue":E[7]||(E[7]=_=>p.site.profile.instagram=_)},null,512),[[we,p.site.profile.instagram]])])],512),[[jt,n.value==="profile"]]),oe(v("section",lC,[cC,uC,v("label",null,[Y("Hero tagline "),oe(v("textarea",{"onUpdate:modelValue":E[8]||(E[8]=_=>p.site.home.title=_),rows:"4"},null,512),[[we,p.site.home.title]])])],512),[[jt,n.value==="home"]]),oe(v("section",hC,[dC,fC,v("label",null,[Y("Hero tagline "),oe(v("textarea",{"onUpdate:modelValue":E[9]||(E[9]=_=>p.site.about.title=_),rows:"3"},null,512),[[we,p.site.about.title]])]),v("header",pC,[gC,v("button",{class:"ghost",type:"button",onClick:E[10]||(E[10]=_=>p.site.about.bio.push(""))},"+ Add paragraph")]),(K(!0),G(ye,null,Ze(p.site.about.bio,(_,b)=>(K(),G("div",{key:b,class:"admin__row"},[oe(v("textarea",{"onUpdate:modelValue":y=>p.site.about.bio[b]=y,rows:"3",placeholder:"Paragraph text…"},null,8,mC),[[we,p.site.about.bio[b]]]),v("button",{class:"danger",type:"button",onClick:y=>p.site.about.bio.splice(b,1)},"✕",8,_C)]))),128))],512),[[jt,n.value==="about"]]),oe(v("section",yC,[v("header",{class:"admin__cardhead"},[vC,v("button",{class:"ghost",type:"button",onClick:Pe},"+ Add school")]),(K(!0),G(ye,null,Ze(p.site.about.education,(_,b)=>(K(),G("div",{key:b,class:"admin__milestone"},[v("label",null,[Y("Title (school)"),oe(v("input",{"onUpdate:modelValue":y=>_.title=y},null,8,EC),[[we,_.title]])]),v("label",null,[Y("Where (location)"),oe(v("input",{"onUpdate:modelValue":y=>_.org=y},null,8,wC),[[we,_.org]])]),v("label",null,[Y("Dates "),oe(v("input",{"onUpdate:modelValue":y=>_.when=y},null,8,IC),[[we,_.when]])]),v("label",null,[Y("Badge text "),oe(v("input",{"onUpdate:modelValue":y=>_.badge=y,placeholder:"e.g. Completed / Graduated / Best Student"},null,8,TC),[[we,_.badge]])]),v("label",AC,[oe(v("input",{type:"checkbox","onUpdate:modelValue":y=>_.gold=y},null,8,bC),[[G2,_.gold]]),Y(" Highlight with gold badge style ")]),v("button",{class:"danger",type:"button",onClick:y=>p.site.about.education.splice(b,1)},"Remove",8,CC)]))),128))],512),[[jt,n.value==="education"]]),oe(v("section",RC,[PC,SC,v("label",null,[Y("Tagline "),oe(v("textarea",{"onUpdate:modelValue":E[11]||(E[11]=_=>p.site.stack.title=_),rows:"3"},null,512),[[we,p.site.stack.title]])]),v("header",{class:"admin__cardhead"},[kC,v("button",{class:"ghost",type:"button",onClick:ve},"+ Add skill")]),(K(!0),G(ye,null,Ze(p.site.stack.items,(_,b)=>(K(),G("div",{key:b,class:"admin__row admin__row--3"},[oe(v("input",{"onUpdate:modelValue":y=>_.name=y,placeholder:"Name (e.g. Vue)"},null,8,VC),[[we,_.name]]),oe(v("input",{"onUpdate:modelValue":y=>_.icon=y,placeholder:"Icon filename (e.g. vue.png)"},null,8,DC),[[we,_.icon]]),oe(v("input",{"onUpdate:modelValue":y=>_.percent=y,type:"number",min:"0",max:"100",placeholder:"%"},null,8,NC),[[we,_.percent,void 0,{number:!0}]]),v("button",{class:"danger",type:"button",onClick:y=>p.site.stack.items.splice(b,1)},"✕",8,OC)]))),128))],512),[[jt,n.value==="stack"]]),oe(v("section",MC,[v("header",xC,[LC,v("button",{class:"ghost",type:"button",onClick:E[12]||(E[12]=_=>p.site.homeTech.push({name:"",icon:""}))},"+ Add tile")]),(K(!0),G(ye,null,Ze(p.site.homeTech,(_,b)=>(K(),G("div",{key:b,class:"admin__row"},[oe(v("input",{"onUpdate:modelValue":y=>_.name=y,placeholder:"Name (e.g. Vue)"},null,8,UC),[[we,_.name]]),oe(v("input",{"onUpdate:modelValue":y=>_.icon=y,placeholder:"Icon filename (e.g. vue.png)"},null,8,FC),[[we,_.icon]]),v("button",{class:"danger",type:"button",onClick:y=>p.site.homeTech.splice(b,1)},"✕",8,BC)]))),128))],512),[[jt,n.value==="stack"]]),oe(v("section",jC,[v("header",{class:"admin__cardhead"},[$C,v("button",{class:"ghost",type:"button",onClick:R},"+ Add project")]),(K(!0),G(ye,null,Ze(p.site.projects,(_,b)=>(K(),G("div",{key:b,class:"admin__milestone"},[v("label",null,[Y("Title "),oe(v("input",{"onUpdate:modelValue":y=>_.title=y},null,8,HC),[[we,_.title]])]),v("label",null,[Y("Description"),oe(v("textarea",{"onUpdate:modelValue":y=>_.desc=y,rows:"3"},null,8,qC),[[we,_.desc]])]),v("label",null,[Y("Tech stack "),oe(v("input",{"onUpdate:modelValue":y=>_.tech=y,placeholder:"HTML, CSS, Vue, …"},null,8,WC),[[we,_.tech]])]),v("label",null,[Y("Image "),oe(v("input",{"onUpdate:modelValue":y=>_.image=y,placeholder:"filename in src/assets/img/ OR https://…"},null,8,zC),[[we,_.image]])]),v("label",null,[Y("Live URL "),oe(v("input",{"onUpdate:modelValue":y=>_.liveUrl=y,placeholder:"https://…"},null,8,KC),[[we,_.liveUrl]])]),v("label",null,[Y("Code URL "),oe(v("input",{"onUpdate:modelValue":y=>_.codeUrl=y,placeholder:"https://github.com/…"},null,8,GC),[[we,_.codeUrl]])]),v("label",null,[Y("Telegram "),oe(v("input",{"onUpdate:modelValue":y=>_.telegram=y,placeholder:"https://t.me/…"},null,8,QC),[[we,_.telegram]])]),v("div",ZC,[v("button",{class:"ghost",type:"button",onClick:y=>I(b,-1),disabled:b===0},"↑",8,YC),v("button",{class:"ghost",type:"button",onClick:y=>I(b,1),disabled:b===p.site.projects.length-1},"↓",8,JC),v("button",{class:"danger",type:"button",onClick:y=>p.site.projects.splice(b,1)},"Remove",8,XC)])]))),128))],512),[[jt,n.value==="projects"]]),oe(v("section",e9,[t9,v("label",null,[Y("Overall band "),oe(v("input",{type:"number",step:"0.5",min:"0",max:"9","onUpdate:modelValue":E[13]||(E[13]=_=>p.ach.ielts.overall=_)},null,512),[[we,p.ach.ielts.overall,void 0,{number:!0}]])]),v("div",n9,[(K(!0),G(ye,null,Ze(p.ach.ielts.sections,(_,b)=>(K(),G("label",{key:b},[Y(me(_.label)+" ",1),oe(v("input",{type:"number",step:"0.5",min:"0",max:"9","onUpdate:modelValue":y=>_.score=y},null,8,s9),[[we,_.score,void 0,{number:!0}]])]))),128))])],512),[[jt,n.value==="achievements"]]),oe(v("section",r9,[i9,v("label",null,[Y("Value "),oe(v("input",{"onUpdate:modelValue":E[14]||(E[14]=_=>p.ach.gpa.value=_)},null,512),[[we,p.ach.gpa.value]])]),v("label",null,[Y("Out of "),oe(v("input",{"onUpdate:modelValue":E[15]||(E[15]=_=>p.ach.gpa.scale=_)},null,512),[[we,p.ach.gpa.scale]])]),v("label",null,[Y("Caption "),oe(v("input",{"onUpdate:modelValue":E[16]||(E[16]=_=>p.ach.gpa.note=_)},null,512),[[we,p.ach.gpa.note]])])],512),[[jt,n.value==="achievements"]]),oe(v("section",o9,[a9,v("label",null,[Y("Status "),oe(v("input",{"onUpdate:modelValue":E[17]||(E[17]=_=>p.ach.sat.status=_)},null,512),[[we,p.ach.sat.status]])]),v("label",null,[Y("Caption "),oe(v("input",{"onUpdate:modelValue":E[18]||(E[18]=_=>p.ach.sat.note=_)},null,512),[[we,p.ach.sat.note]])])],512),[[jt,n.value==="achievements"]]),oe(v("section",l9,[v("header",{class:"admin__cardhead"},[c9,v("button",{class:"ghost",type:"button",onClick:Q},"+ Add")]),(K(!0),G(ye,null,Ze(p.ach.milestones,(_,b)=>(K(),G("div",{key:b,class:"admin__milestone"},[v("label",null,[Y("Title "),oe(v("input",{"onUpdate:modelValue":y=>_.title=y},null,8,u9),[[we,_.title]])]),v("label",null,[Y("Where "),oe(v("input",{"onUpdate:modelValue":y=>_.org=y},null,8,h9),[[we,_.org]])]),v("label",null,[Y("When "),oe(v("input",{"onUpdate:modelValue":y=>_.when=y},null,8,d9),[[we,_.when]])]),v("label",null,[Y("Description "),oe(v("textarea",{"onUpdate:modelValue":y=>_.desc=y,rows:"2"},null,8,f9),[[we,_.desc]])]),v("label",null,[Y("Badges (one per line) "),v("textarea",{value:(_.badges||[]).join(`
`),onInput:y=>_.badges=y.target.value.split(`
`).map(rt=>rt.trim()).filter(Boolean),rows:"3",placeholder:"🏆 Best Student 2024–2025"},null,40,p9)]),v("button",{class:"danger",type:"button",onClick:y=>p.ach.milestones.splice(b,1)},"Remove",8,g9)]))),128))],512),[[jt,n.value==="achievements"]]),v("div",m9,[v("button",{type:"button",onClick:H,disabled:l.value},me(l.value?"Saving…":"Save all changes"),9,_9),v("button",{type:"button",class:"ghost",onClick:X},"Discard")])])):(K(),G("form",{key:1,class:"admin__login",onSubmit:J2(N,["prevent"])},[Z3,Y3,oe(v("input",{"onUpdate:modelValue":E[0]||(E[0]=_=>r.value=_),type:"email",placeholder:"Email",autocomplete:"email",required:""},null,512),[[we,r.value]]),oe(v("input",{"onUpdate:modelValue":E[1]||(E[1]=_=>i.value=_),type:"password",placeholder:"Password",autocomplete:"current-password",required:""},null,512),[[we,i.value]]),v("button",{type:"submit",disabled:l.value},me(l.value?"Signing in…":"Sign in"),9,J3),a.value?(K(),G("p",X3,me(a.value),1)):bt("",!0)],32)):(K(),G("div",z3,Q3))]))}},v9=Mi(y9,[["__scopeId","data-v-5d19fcc3"]]),E9=ry({history:E1("/Portfolio/"),routes:[{path:"/",name:"HomePage",component:Nb},{path:"/about",name:"AboutPage",component:J5},{path:"/stack",name:"StackPage",component:zb},{path:"/project",name:"ProjectPage",component:d3},{path:"/achievements",name:"AchievementsPage",component:q3},{path:"/contact",name:"ContactPage",component:p3},{path:"/admin",name:"AdminPage",component:v9}]}),w9={class:"nav"},I9={class:"nav__logo"},T9=v("span",{class:"nav__brand_first"},"Rustam",-1),A9=v("span",{class:"nav__brand_last"},"Isroilov",-1),b9=["aria-expanded"],C9=v("span",null,null,-1),R9=v("span",null,null,-1),P9=v("span",null,null,-1),S9=[C9,R9,P9],k9=m2('<div class="nav__contacts"><a href="https://github.com/RustamIsroilov" target="_blank" rel="noopener"><img src="'+_a+'" alt="GitHub" class="nav__contacts_img"></a><a href="https://twitter.com/RustambekI39739" target="_blank" rel="noopener"><img src="'+Qp+'" alt="Twitter" class="nav__contacts_img"></a><a href="https://www.instagram.com/rustambek7875/" target="_blank" rel="noopener"><img src="'+Zp+'" alt="Instagram" class="nav__contacts_img"></a></div>',1),V9={__name:"Navbar",setup(t){const e=mt(!1);return(n,s)=>{const r=ua("router-link");return K(),G("nav",w9,[v("div",I9,[Ie(r,{to:"/",class:"nav__brand",onClick:s[0]||(s[0]=i=>e.value=!1)},{default:At(()=>[T9,A9]),_:1})]),v("button",{class:"nav__burger","aria-expanded":e.value,"aria-label":"Toggle menu",onClick:s[1]||(s[1]=i=>e.value=!e.value)},S9,8,b9),v("div",{class:on(["nav__items",{"is-open":e.value}])},[Ie(r,{to:"/",class:"nav__items_desc",onClick:s[2]||(s[2]=i=>e.value=!1)},{default:At(()=>[Y("Home")]),_:1}),Ie(r,{to:"/about",class:"nav__items_desc",onClick:s[3]||(s[3]=i=>e.value=!1)},{default:At(()=>[Y("About")]),_:1}),Ie(r,{to:"/stack",class:"nav__items_desc",onClick:s[4]||(s[4]=i=>e.value=!1)},{default:At(()=>[Y("Tech Stack")]),_:1}),Ie(r,{to:"/project",class:"nav__items_desc",onClick:s[5]||(s[5]=i=>e.value=!1)},{default:At(()=>[Y("Projects")]),_:1}),Ie(r,{to:"/achievements",class:"nav__items_desc",onClick:s[6]||(s[6]=i=>e.value=!1)},{default:At(()=>[Y("Achievements")]),_:1}),Ie(r,{to:"/contact",class:"nav__items_desc",onClick:s[7]||(s[7]=i=>e.value=!1)},{default:At(()=>[Y("Contact")]),_:1})],2),k9])}}},D9={__name:"App",setup(t){return(e,n)=>{const s=ua("RouterView");return K(),G("div",null,[Ie(V9),Ie(s)])}}};t1(D9).use(E9).mount("#app");
