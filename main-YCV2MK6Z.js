import{$ as k,$a as Ce,$b as Is,A as Gi,Aa as Ko,Ab as de,Ac as Ke,B as Gt,Ba as qi,Bb as en,Bc as Le,C as sr,Ca as Qi,Cb as fs,D as za,Da as io,Db as hs,E as ja,Ea as Q,Eb as gs,F as Ua,Fa as Ki,Fb as J,G as bt,Ga as Yi,Gb as Qe,H as Wa,Ha as Yo,Hb as U,I as je,Ia as Zi,Ib as Rt,J as Te,Ja as Pt,Jb as vt,K as Xe,Ka as as,Kb as bs,L as A,La as pr,Lb as vs,M as K,Ma as I,Mb as br,N as Ga,Na as Y,Nb as vr,O as Re,Oa as $e,Ob as he,P as lr,Pa as O,Pb as tn,Q as pe,Qa as ss,Qb as ys,R as y,Ra as b,Rb as Dt,S as oo,Sa as mr,Sb as _s,T as qa,Ta as ls,Tb as xs,U as Go,Ua as fr,Ub as $,V as Et,Va as cs,Vb as me,W as De,Wa as hr,Wb as Cs,X as C,Xa as gr,Xb as se,Y as w,Ya as _,Yb as $t,Z as ne,Za as c,Zb as ws,_ as go,_a as Xi,_b as yr,a as T,aa as Qa,ab as Ji,ac as Ss,b as Ae,ba as Lt,bb as P,bc as ve,ca as Ka,cb as et,cc as ks,d as La,da as Ya,db as ds,dc as Xo,e as Pa,ea as Za,eb as us,ec as Ts,f as ir,fa as q,fb as ps,fc as Es,g as nr,ga as Me,gb as d,gc as Jo,h as Tt,ha as cr,hb as u,hc as Rs,i as dt,ia as Ee,ib as h,ic as ge,j as Ft,ja as Je,jb as te,jc as pt,k as Ze,ka as Se,kb as oe,kc as Oe,l as z,la as Xa,lb as ae,lc as Ve,m as Uo,ma as dr,mb as L,mc as we,n as Na,na as Ja,nb as M,nc as Ds,o as Va,oa as qe,ob as m,oc as F,p as ue,pa as es,pb as ie,pc as $s,q as Wi,qa as ur,qb as Z,qc as re,r as ot,ra as ts,rb as ms,rc as ei,s as Wo,sa as os,sb as B,sc as _r,t as Ha,ta as is,tb as be,tc as As,u as rr,ua as qo,ub as E,v as to,va as Qo,vb as R,w as mo,wa as ut,wb as qt,wc as yt,x as fo,xa as ns,xb as Zo,xc as Be,y as ar,ya as rs,yb as it,z as ho,za as p,zb as v,zc as Fe}from"./chunk-3UNFVL3X.js";var Cr=class extends Ss{supportsDOMEvents=!0},wr=class e extends Cr{static makeCurrent(){Is(new e)}onAndCancel(n,t,o,i){return n.addEventListener(t,o,i),()=>{n.removeEventListener(t,o,i)}}dispatchEvent(n,t){n.dispatchEvent(t)}remove(n){n.remove()}createElement(n,t){return t=t||this.getDefaultDocument(),t.createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,t){return t==="window"?window:t==="document"?n:t==="body"?n.body:null}getBaseHref(n){let t=gp();return t==null?null:bp(t)}resetBaseElement(){ti=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return Rs(document.cookie,n)}},ti=null;function gp(){return ti=ti||document.querySelector("base"),ti?ti.getAttribute("href"):null}function bp(e){return new URL(e,document.baseURI).pathname}var vp=(()=>{class e{build(){return new XMLHttpRequest}static \u0275fac=function(o){return new(o||e)};static \u0275prov=A({token:e,factory:e.\u0275fac})}return e})(),Ir=new Re(""),Ls=(()=>{class e{_zone;_plugins;_eventNameToPlugin=new Map;constructor(t,o){this._zone=o,t.forEach(i=>{i.manager=this}),this._plugins=t.slice().reverse()}addEventListener(t,o,i,r){return this._findPluginFor(o).addEventListener(t,o,i,r)}getZone(){return this._zone}_findPluginFor(t){let o=this._eventNameToPlugin.get(t);if(o)return o;if(o=this._plugins.find(r=>r.supports(t)),!o)throw new Te(5101,!1);return this._eventNameToPlugin.set(t,o),o}static \u0275fac=function(o){return new(o||e)(pe(Ir),pe(Me))};static \u0275prov=A({token:e,factory:e.\u0275fac})}return e})(),nn=class{_doc;constructor(n){this._doc=n}manager},on="ng-app-id";function Os(e){for(let n of e)n.remove()}function Ms(e,n){let t=n.createElement("style");return t.textContent=e,t}function yp(e,n,t,o){let i=e.head?.querySelectorAll(`style[${on}="${n}"],link[${on}="${n}"]`);if(i)for(let r of i)r.removeAttribute(on),r instanceof HTMLLinkElement?o.set(r.href.slice(r.href.lastIndexOf("/")+1),{usage:0,elements:[r]}):r.textContent&&t.set(r.textContent,{usage:0,elements:[r]})}function Sr(e,n){let t=n.createElement("link");return t.setAttribute("rel","stylesheet"),t.setAttribute("href",e),t}var Ps=(()=>{class e{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;isServer;constructor(t,o,i,r={}){this.doc=t,this.appId=o,this.nonce=i,this.isServer=ei(r),yp(t,o,this.inline,this.external),this.hosts.add(t.head)}addStyles(t,o){for(let i of t)this.addUsage(i,this.inline,Ms);o?.forEach(i=>this.addUsage(i,this.external,Sr))}removeStyles(t,o){for(let i of t)this.removeUsage(i,this.inline);o?.forEach(i=>this.removeUsage(i,this.external))}addUsage(t,o,i){let r=o.get(t);r?r.usage++:o.set(t,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,i(t,this.doc)))})}removeUsage(t,o){let i=o.get(t);i&&(i.usage--,i.usage<=0&&(Os(i.elements),o.delete(t)))}ngOnDestroy(){for(let[,{elements:t}]of[...this.inline,...this.external])Os(t);this.hosts.clear()}addHost(t){this.hosts.add(t);for(let[o,{elements:i}]of this.inline)i.push(this.addElement(t,Ms(o,this.doc)));for(let[o,{elements:i}]of this.external)i.push(this.addElement(t,Sr(o,this.doc)))}removeHost(t){this.hosts.delete(t)}addElement(t,o){return this.nonce&&o.setAttribute("nonce",this.nonce),this.isServer&&o.setAttribute(on,this.appId),t.appendChild(o)}static \u0275fac=function(o){return new(o||e)(pe(ve),pe(dr),pe(ur,8),pe(qe))};static \u0275prov=A({token:e,factory:e.\u0275fac})}return e})(),xr={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Tr=/%COMP%/g;var Ns="%COMP%",_p=`_nghost-${Ns}`,xp=`_ngcontent-${Ns}`,Cp=!0,wp=new Re("",{providedIn:"root",factory:()=>Cp});function Ip(e){return xp.replace(Tr,e)}function Sp(e){return _p.replace(Tr,e)}function Vs(e,n){return n.map(t=>t.replace(Tr,e))}var rn=(()=>{class e{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;platformId;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(t,o,i,r,a,s,l,f=null,g=null){this.eventManager=t,this.sharedStylesHost=o,this.appId=i,this.removeStylesOnCompDestroy=r,this.doc=a,this.platformId=s,this.ngZone=l,this.nonce=f,this.tracingService=g,this.platformIsServer=ei(s),this.defaultRenderer=new oi(t,a,l,this.platformIsServer,this.tracingService)}createRenderer(t,o){if(!t||!o)return this.defaultRenderer;this.platformIsServer&&o.encapsulation===qo.ShadowDom&&(o=Ae(T({},o),{encapsulation:qo.Emulated}));let i=this.getOrCreateRenderer(t,o);return i instanceof an?i.applyToHost(t):i instanceof ii&&i.applyStyles(),i}getOrCreateRenderer(t,o){let i=this.rendererByCompId,r=i.get(o.id);if(!r){let a=this.doc,s=this.ngZone,l=this.eventManager,f=this.sharedStylesHost,g=this.removeStylesOnCompDestroy,x=this.platformIsServer,S=this.tracingService;switch(o.encapsulation){case qo.Emulated:r=new an(l,f,o,this.appId,g,a,s,x,S);break;case qo.ShadowDom:return new kr(l,f,t,o,a,s,this.nonce,x,S);default:r=new ii(l,f,o,g,a,s,x,S);break}i.set(o.id,r)}return r}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(t){this.rendererByCompId.delete(t)}static \u0275fac=function(o){return new(o||e)(pe(Ls),pe(Ps),pe(dr),pe(wp),pe(ve),pe(qe),pe(Me),pe(ur),pe(ts,8))};static \u0275prov=A({token:e,factory:e.\u0275fac})}return e})(),oi=class{eventManager;doc;ngZone;platformIsServer;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(n,t,o,i,r){this.eventManager=n,this.doc=t,this.ngZone=o,this.platformIsServer=i,this.tracingService=r}destroy(){}destroyNode=null;createElement(n,t){return t?this.doc.createElementNS(xr[t]||t,n):this.doc.createElement(n)}createComment(n){return this.doc.createComment(n)}createText(n){return this.doc.createTextNode(n)}appendChild(n,t){(Bs(n)?n.content:n).appendChild(t)}insertBefore(n,t,o){n&&(Bs(n)?n.content:n).insertBefore(t,o)}removeChild(n,t){t.remove()}selectRootElement(n,t){let o=typeof n=="string"?this.doc.querySelector(n):n;if(!o)throw new Te(-5104,!1);return t||(o.textContent=""),o}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,t,o,i){if(i){t=i+":"+t;let r=xr[i];r?n.setAttributeNS(r,t,o):n.setAttribute(t,o)}else n.setAttribute(t,o)}removeAttribute(n,t,o){if(o){let i=xr[o];i?n.removeAttributeNS(i,t):n.removeAttribute(`${o}:${t}`)}else n.removeAttribute(t)}addClass(n,t){n.classList.add(t)}removeClass(n,t){n.classList.remove(t)}setStyle(n,t,o,i){i&(Ko.DashCase|Ko.Important)?n.style.setProperty(t,o,i&Ko.Important?"important":""):n.style[t]=o}removeStyle(n,t,o){o&Ko.DashCase?n.style.removeProperty(t):n.style[t]=""}setProperty(n,t,o){n!=null&&(n[t]=o)}setValue(n,t){n.nodeValue=t}listen(n,t,o,i){if(typeof n=="string"&&(n=yr().getGlobalEventTarget(this.doc,n),!n))throw new Te(5102,!1);let r=this.decoratePreventDefault(o);return this.tracingService?.wrapEventListener&&(r=this.tracingService.wrapEventListener(n,t,r)),this.eventManager.addEventListener(n,t,r,i)}decoratePreventDefault(n){return t=>{if(t==="__ngUnwrap__")return n;(this.platformIsServer?this.ngZone.runGuarded(()=>n(t)):n(t))===!1&&t.preventDefault()}}};function Bs(e){return e.tagName==="TEMPLATE"&&e.content!==void 0}var kr=class extends oi{sharedStylesHost;hostEl;shadowRoot;constructor(n,t,o,i,r,a,s,l,f){super(n,r,a,l,f),this.sharedStylesHost=t,this.hostEl=o,this.shadowRoot=o.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let g=i.styles;g=Vs(i.id,g);for(let S of g){let D=document.createElement("style");s&&D.setAttribute("nonce",s),D.textContent=S,this.shadowRoot.appendChild(D)}let x=i.getExternalStyles?.();if(x)for(let S of x){let D=Sr(S,r);s&&D.setAttribute("nonce",s),this.shadowRoot.appendChild(D)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}appendChild(n,t){return super.appendChild(this.nodeOrShadowRoot(n),t)}insertBefore(n,t,o){return super.insertBefore(this.nodeOrShadowRoot(n),t,o)}removeChild(n,t){return super.removeChild(null,t)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},ii=class extends oi{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(n,t,o,i,r,a,s,l,f){super(n,r,a,s,l),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=i;let g=o.styles;this.styles=f?Vs(f,g):g,this.styleUrls=o.getExternalStyles?.(f)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},an=class extends ii{contentAttr;hostAttr;constructor(n,t,o,i,r,a,s,l,f){let g=i+"-"+o.id;super(n,t,o,r,a,s,l,f,g),this.contentAttr=Ip(g),this.hostAttr=Sp(g)}applyToHost(n){this.applyStyles(),this.setAttribute(n,this.hostAttr,"")}createElement(n,t){let o=super.createElement(n,t);return super.setAttribute(o,this.contentAttr,""),o}},kp=(()=>{class e extends nn{constructor(t){super(t)}supports(t){return!0}addEventListener(t,o,i,r){return t.addEventListener(o,i,r),()=>this.removeEventListener(t,o,i,r)}removeEventListener(t,o,i,r){return t.removeEventListener(o,i,r)}static \u0275fac=function(o){return new(o||e)(pe(ve))};static \u0275prov=A({token:e,factory:e.\u0275fac})}return e})(),Fs=["alt","control","meta","shift"],Tp={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Ep={alt:e=>e.altKey,control:e=>e.ctrlKey,meta:e=>e.metaKey,shift:e=>e.shiftKey},Rp=(()=>{class e extends nn{constructor(t){super(t)}supports(t){return e.parseEventName(t)!=null}addEventListener(t,o,i,r){let a=e.parseEventName(o),s=e.eventCallback(a.fullKey,i,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>yr().onAndCancel(t,a.domEventName,s,r))}static parseEventName(t){let o=t.toLowerCase().split("."),i=o.shift();if(o.length===0||!(i==="keydown"||i==="keyup"))return null;let r=e._normalizeKey(o.pop()),a="",s=o.indexOf("code");if(s>-1&&(o.splice(s,1),a="code."),Fs.forEach(f=>{let g=o.indexOf(f);g>-1&&(o.splice(g,1),a+=f+".")}),a+=r,o.length!=0||r.length===0)return null;let l={};return l.domEventName=i,l.fullKey=a,l}static matchEventFullKeyCode(t,o){let i=Tp[t.key]||t.key,r="";return o.indexOf("code.")>-1&&(i=t.code,r="code."),i==null||!i?!1:(i=i.toLowerCase(),i===" "?i="space":i==="."&&(i="dot"),Fs.forEach(a=>{if(a!==i){let s=Ep[a];s(t)&&(r+=a+".")}}),r+=i,r===o)}static eventCallback(t,o,i){return r=>{e.matchEventFullKeyCode(r,t)&&i.runGuarded(()=>o(r))}}static _normalizeKey(t){return t==="esc"?"escape":t}static \u0275fac=function(o){return new(o||e)(pe(ve))};static \u0275prov=A({token:e,factory:e.\u0275fac})}return e})();function Hs(e,n){return xs(T({rootComponent:e},Dp(n)))}function Dp(e){return{appProviders:[...Bp,...e?.providers??[]],platformProviders:Mp}}function $p(){wr.makeCurrent()}function Ap(){return new cr}function Op(){return Xa(document),document}var Mp=[{provide:qe,useValue:$s},{provide:Ja,useValue:$p,multi:!0},{provide:ve,useFactory:Op,deps:[]}];var Bp=[{provide:qa,useValue:"root"},{provide:cr,useFactory:Ap,deps:[]},{provide:Ir,useClass:kp,multi:!0,deps:[ve]},{provide:Ir,useClass:Rp,multi:!0,deps:[ve]},rn,Ps,Ls,{provide:Qi,useExisting:rn},{provide:As,useClass:vp,deps:[]},[]];var zs=(()=>{class e{_doc;constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||""}static \u0275fac=function(o){return new(o||e)(pe(ve))};static \u0275prov=A({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var Lp="@",Pp=(()=>{class e{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=y(Lt);loadingSchedulerFn=y(Np,{optional:!0});_engine;constructor(t,o,i,r,a){this.doc=t,this.delegate=o,this.zone=i,this.animationType=r,this.moduleImpl=a}ngOnDestroy(){this._engine?.flush()}loadImpl(){let t=()=>this.moduleImpl??import("./chunk-EZFVDBPY.js").then(i=>i),o;return this.loadingSchedulerFn?o=this.loadingSchedulerFn(t):o=t(),o.catch(i=>{throw new Te(5300,!1)}).then(({\u0275createEngine:i,\u0275AnimationRendererFactory:r})=>{this._engine=i(this.animationType,this.doc);let a=new r(this.delegate,this._engine,this.zone);return this.delegate=a,a})}createRenderer(t,o){let i=this.delegate.createRenderer(t,o);if(i.\u0275type===0)return i;typeof i.throwOnSyntheticProps=="boolean"&&(i.throwOnSyntheticProps=!1);let r=new Er(i);return o?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(a=>{let s=a.createRenderer(t,o);r.use(s),this.scheduler??=this.injector.get(Ya,null,{optional:!0}),this.scheduler?.notify(10)}).catch(a=>{r.use(i)}),r}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(t){this._engine?.flush(),this.delegate.componentReplaced?.(t)}static \u0275fac=function(o){Ki()};static \u0275prov=A({token:e,factory:e.\u0275fac})}return e})(),Er=class{delegate;replay=[];\u0275type=1;constructor(n){this.delegate=n}use(n){if(this.delegate=n,this.replay!==null){for(let t of this.replay)t(n);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(n,t){return this.delegate.createElement(n,t)}createComment(n){return this.delegate.createComment(n)}createText(n){return this.delegate.createText(n)}get destroyNode(){return this.delegate.destroyNode}appendChild(n,t){this.delegate.appendChild(n,t)}insertBefore(n,t,o,i){this.delegate.insertBefore(n,t,o,i)}removeChild(n,t,o){this.delegate.removeChild(n,t,o)}selectRootElement(n,t){return this.delegate.selectRootElement(n,t)}parentNode(n){return this.delegate.parentNode(n)}nextSibling(n){return this.delegate.nextSibling(n)}setAttribute(n,t,o,i){this.delegate.setAttribute(n,t,o,i)}removeAttribute(n,t,o){this.delegate.removeAttribute(n,t,o)}addClass(n,t){this.delegate.addClass(n,t)}removeClass(n,t){this.delegate.removeClass(n,t)}setStyle(n,t,o,i){this.delegate.setStyle(n,t,o,i)}removeStyle(n,t,o){this.delegate.removeStyle(n,t,o)}setProperty(n,t,o){this.shouldReplay(t)&&this.replay.push(i=>i.setProperty(n,t,o)),this.delegate.setProperty(n,t,o)}setValue(n,t){this.delegate.setValue(n,t)}listen(n,t,o,i){return this.shouldReplay(t)&&this.replay.push(r=>r.listen(n,t,o,i)),this.delegate.listen(n,t,o,i)}shouldReplay(n){return this.replay!==null&&n.startsWith(Lp)}},Np=new Re("");function js(e="animations"){return os("NgAsyncAnimations"),oo([{provide:Qi,useFactory:(n,t,o)=>new Pp(n,t,o,e),deps:[ve,rn,Me]},{provide:es,useValue:e==="noop"?"NoopAnimations":"BrowserAnimations"}])}function no(e,n){return e?e.classList?e.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(e.className):!1}function Pe(e,n){if(e&&n){let t=o=>{no(e,o)||(e.classList?e.classList.add(o):e.className+=" "+o)};[n].flat().filter(Boolean).forEach(o=>o.split(" ").forEach(t))}}function Vp(){return window.innerWidth-document.documentElement.offsetWidth}function Us(e){for(let n of document?.styleSheets)try{for(let t of n?.cssRules)for(let o of t?.style)if(e.test(o))return{name:o,value:t.style.getPropertyValue(o).trim()}}catch{}return null}function Ws(e="p-overflow-hidden"){let n=Us(/-scrollbar-width$/);n?.name&&document.body.style.setProperty(n.name,Vp()+"px"),Pe(document.body,e)}function ke(e,n){if(e&&n){let t=o=>{e.classList?e.classList.remove(o):e.className=e.className.replace(new RegExp("(^|\\b)"+o.split(" ").join("|")+"(\\b|$)","gi")," ")};[n].flat().filter(Boolean).forEach(o=>o.split(" ").forEach(t))}}function Gs(e="p-overflow-hidden"){let n=Us(/-scrollbar-width$/);n?.name&&document.body.style.removeProperty(n.name),ke(document.body,e)}function qs(){let e=window,n=document,t=n.documentElement,o=n.getElementsByTagName("body")[0],i=e.innerWidth||t.clientWidth||o.clientWidth,r=e.innerHeight||t.clientHeight||o.clientHeight;return{width:i,height:r}}function Qs(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}function Ks(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}function mt(e,n){if(e instanceof HTMLElement){let t=e.offsetWidth;if(n){let o=getComputedStyle(e);t+=parseFloat(o.marginLeft)+parseFloat(o.marginRight)}return t}return 0}function bo(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}function Ys(e){let n=e;return e&&typeof e=="object"&&(e.hasOwnProperty("current")?n=e.current:e.hasOwnProperty("el")&&(e.el.hasOwnProperty("nativeElement")?n=e.el.nativeElement:n=e.el)),bo(n)?n:void 0}function Rr(e,n){let t=Ys(e);if(t)t.appendChild(n);else throw new Error("Cannot append "+n+" to "+e)}function sn(e,n={}){if(bo(e)){let t=(o,i)=>{var r,a;let s=(r=e?.$attrs)!=null&&r[o]?[(a=e?.$attrs)==null?void 0:a[o]]:[];return[i].flat().reduce((l,f)=>{if(f!=null){let g=typeof f;if(g==="string"||g==="number")l.push(f);else if(g==="object"){let x=Array.isArray(f)?t(o,f):Object.entries(f).map(([S,D])=>o==="style"&&(D||D===0)?`${S.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${D}`:D?S:void 0);l=x.length?l.concat(x.filter(S=>!!S)):l}}return l},s)};Object.entries(n).forEach(([o,i])=>{if(i!=null){let r=o.match(/^on(.+)/);r?e.addEventListener(r[1].toLowerCase(),i):o==="p-bind"||o==="pBind"?sn(e,i):(i=o==="class"?[...new Set(t("class",i))].join(" ").trim():o==="style"?t("style",i).join(";").trim():i,(e.$attrs=e.$attrs||{})&&(e.$attrs[o]=i),e.setAttribute(o,i))}})}}function Zs(e,n={},...t){if(e){let o=document.createElement(e);return sn(o,n),o.append(...t),o}}function Xs(e,n){if(e){e.style.opacity="0";let t=+new Date,o="0",i=function(){o=`${+e.style.opacity+(new Date().getTime()-t)/n}`,e.style.opacity=o,t=+new Date,+o<1&&(window.requestAnimationFrame&&requestAnimationFrame(i)||setTimeout(i,16))};i()}}function Ye(e,n){return bo(e)?Array.from(e.querySelectorAll(n)):[]}function ye(e,n){return bo(e)?e.matches(n)?e:e.querySelector(n):null}function ft(e,n){e&&document.activeElement!==e&&e.focus(n)}function tt(e,n){if(bo(e)){let t=e.getAttribute(n);return isNaN(t)?t==="true"||t==="false"?t==="true":t:+t}}function Js(e,n=""){let t=Ye(e,`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
            [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
            input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
            select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
            textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
            [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
            [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n}`),o=[];for(let i of t)getComputedStyle(i).display!="none"&&getComputedStyle(i).visibility!="hidden"&&o.push(i);return o}function el(e,n){let t=Js(e,n);return t.length>0?t[0]:null}function ni(e){if(e){let n=e.offsetHeight,t=getComputedStyle(e);return n-=parseFloat(t.paddingTop)+parseFloat(t.paddingBottom)+parseFloat(t.borderTopWidth)+parseFloat(t.borderBottomWidth),n}return 0}function tl(e,n){let t=Js(e,n);return t.length>0?t[t.length-1]:null}function ri(e){if(e){let n=e.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}return{top:"auto",left:"auto"}}function At(e,n){if(e){let t=e.offsetHeight;if(n){let o=getComputedStyle(e);t+=parseFloat(o.marginTop)+parseFloat(o.marginBottom)}return t}return 0}function Qt(e){if(e){let n=e.offsetWidth,t=getComputedStyle(e);return n-=parseFloat(t.paddingLeft)+parseFloat(t.paddingRight)+parseFloat(t.borderLeftWidth)+parseFloat(t.borderRightWidth),n}return 0}function Dr(e){return e?getComputedStyle(e).direction==="rtl":!1}function ol(e){var n;e&&("remove"in Element.prototype?e.remove():(n=e.parentNode)==null||n.removeChild(e))}function il(e,n){let t=Ys(e);if(t)t.removeChild(n);else throw new Error("Cannot remove "+n+" from "+e)}function vo(e,n="",t){bo(e)&&t!==null&&t!==void 0&&e.setAttribute(n,t)}function nl(){let e=new Map;return{on(n,t){let o=e.get(n);return o?o.push(t):o=[t],e.set(n,o),this},off(n,t){let o=e.get(n);return o&&o.splice(o.indexOf(t)>>>0,1),this},emit(n,t){let o=e.get(n);o&&o.slice().map(i=>{i(t)})},clear(){e.clear()}}}var Hp=Object.defineProperty,rl=Object.getOwnPropertySymbols,zp=Object.prototype.hasOwnProperty,jp=Object.prototype.propertyIsEnumerable,al=(e,n,t)=>n in e?Hp(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,Up=(e,n)=>{for(var t in n||(n={}))zp.call(n,t)&&al(e,t,n[t]);if(rl)for(var t of rl(n))jp.call(n,t)&&al(e,t,n[t]);return e};function We(e){return e==null||e===""||Array.isArray(e)&&e.length===0||!(e instanceof Date)&&typeof e=="object"&&Object.keys(e).length===0}function $r(e,n,t=new WeakSet){if(e===n)return!0;if(!e||!n||typeof e!="object"||typeof n!="object"||t.has(e)||t.has(n))return!1;t.add(e).add(n);let o=Array.isArray(e),i=Array.isArray(n),r,a,s;if(o&&i){if(a=e.length,a!=n.length)return!1;for(r=a;r--!==0;)if(!$r(e[r],n[r],t))return!1;return!0}if(o!=i)return!1;let l=e instanceof Date,f=n instanceof Date;if(l!=f)return!1;if(l&&f)return e.getTime()==n.getTime();let g=e instanceof RegExp,x=n instanceof RegExp;if(g!=x)return!1;if(g&&x)return e.toString()==n.toString();let S=Object.keys(e);if(a=S.length,a!==Object.keys(n).length)return!1;for(r=a;r--!==0;)if(!Object.prototype.hasOwnProperty.call(n,S[r]))return!1;for(r=a;r--!==0;)if(s=S[r],!$r(e[s],n[s],t))return!1;return!0}function Wp(e,n){return $r(e,n)}function ll(e){return!!(e&&e.constructor&&e.call&&e.apply)}function W(e){return!We(e)}function Ar(e,n){if(!e||!n)return null;try{let t=e[n];if(W(t))return t}catch{}if(Object.keys(e).length){if(ll(n))return n(e);if(n.indexOf(".")===-1)return e[n];{let t=n.split("."),o=e;for(let i=0,r=t.length;i<r;++i){if(o==null)return null;o=o[t[i]]}return o}}return null}function yo(e,n,t){return t?Ar(e,t)===Ar(n,t):Wp(e,n)}function cl(e,n){let t=-1;if(n){for(let o=0;o<n.length;o++)if(n[o]===e){t=o;break}}return t}function Or(e,n){let t;if(W(e))try{t=e.findLast(n)}catch{t=[...e].reverse().find(n)}return t}function _t(e,n=!0){return e instanceof Object&&e.constructor===Object&&(n||Object.keys(e).length!==0)}function Ue(e,...n){return ll(e)?e(...n):e}function Kt(e,n=!0){return typeof e=="string"&&(n||e!=="")}function sl(e){return Kt(e)?e.replace(/(-|_)/g,"").toLowerCase():e}function ln(e,n="",t={}){let o=sl(n).split("."),i=o.shift();return i?_t(e)?ln(Ue(e[Object.keys(e).find(r=>sl(r)===i)||""],t),o.join("."),t):void 0:Ue(e,t)}function cn(e,n=!0){return Array.isArray(e)&&(n||e.length!==0)}function dl(e){return W(e)&&!isNaN(e)}function ul(e=""){return W(e)&&e.length===1&&!!e.match(/\S| /)}function nt(e,n){if(n){let t=n.test(e);return n.lastIndex=0,t}return!1}function ai(...e){let n=(t={},o={})=>{let i=Up({},t);return Object.keys(o).forEach(r=>{_t(o[r])&&r in t&&_t(t[r])?i[r]=n(t[r],o[r]):i[r]=o[r]}),i};return e.reduce((t,o,i)=>i===0?o:n(t,o),{})}function ro(e){return e&&e.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}function dn(e){return Kt(e)?e.replace(/(_)/g,"-").replace(/[A-Z]/g,(n,t)=>t===0?n:"-"+n.toLowerCase()).toLowerCase():e}function Mr(e){return Kt(e)?e.replace(/[A-Z]/g,(n,t)=>t===0?n:"."+n.toLowerCase()).toLowerCase():e}var un={};function ce(e="pui_id_"){return un.hasOwnProperty(e)||(un[e]=0),un[e]++,`${e}${un[e]}`}function Gp(){let e=[],n=(a,s,l=999)=>{let f=i(a,s,l),g=f.value+(f.key===a?0:l)+1;return e.push({key:a,value:g}),g},t=a=>{e=e.filter(s=>s.value!==a)},o=(a,s)=>i(a,s).value,i=(a,s,l=0)=>[...e].reverse().find(f=>s?!0:f.key===a)||{key:a,value:l},r=a=>a&&parseInt(a.style.zIndex,10)||0;return{get:r,set:(a,s,l)=>{s&&(s.style.zIndex=String(n(a,!0,l)))},clear:a=>{a&&(t(r(a)),a.style.zIndex="")},getCurrent:a=>o(a,!0)}}var A_=Gp();var pl=["*"];var He=(()=>{class e{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static IN="in";static LESS_THAN="lt";static LESS_THAN_OR_EQUAL_TO="lte";static GREATER_THAN="gt";static GREATER_THAN_OR_EQUAL_TO="gte";static BETWEEN="between";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static DATE_IS="dateIs";static DATE_IS_NOT="dateIsNot";static DATE_BEFORE="dateBefore";static DATE_AFTER="dateAfter"}return e})();var ml=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275cmp=I({type:e,selectors:[["p-header"]],standalone:!1,ngContentSelectors:pl,decls:1,vars:0,template:function(o,i){o&1&&(ie(),Z(0))},encapsulation:2})}return e})(),pn=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275cmp=I({type:e,selectors:[["p-footer"]],standalone:!1,ngContentSelectors:pl,decls:1,vars:0,template:function(o,i){o&1&&(ie(),Z(0))},encapsulation:2})}return e})(),Ie=(()=>{class e{template;type;name;constructor(t){this.template=t}getType(){return this.name}static \u0275fac=function(o){return new(o||e)(Q(qi))};static \u0275dir=$e({type:e,selectors:[["","pTemplate",""]],inputs:{type:"type",name:[0,"pTemplate","name"]}})}return e})(),V=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=Y({type:e});static \u0275inj=K({imports:[F]})}return e})();var qp=Object.defineProperty,Qp=Object.defineProperties,Kp=Object.getOwnPropertyDescriptors,mn=Object.getOwnPropertySymbols,bl=Object.prototype.hasOwnProperty,vl=Object.prototype.propertyIsEnumerable,hl=(e,n,t)=>n in e?qp(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,Ct=(e,n)=>{for(var t in n||(n={}))bl.call(n,t)&&hl(e,t,n[t]);if(mn)for(var t of mn(n))vl.call(n,t)&&hl(e,t,n[t]);return e},Br=(e,n)=>Qp(e,Kp(n)),Nt=(e,n)=>{var t={};for(var o in e)bl.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&mn)for(var o of mn(e))n.indexOf(o)<0&&vl.call(e,o)&&(t[o]=e[o]);return t};function yl(...e){return ai(...e)}var Yp=nl(),rt=Yp;function gl(e,n){cn(e)?e.push(...n||[]):_t(e)&&Object.assign(e,n)}function Zp(e){return _t(e)&&e.hasOwnProperty("value")&&e.hasOwnProperty("type")?e.value:e}function Xp(e){return e.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function Fr(e="",n=""){return Xp(`${Kt(e,!1)&&Kt(n,!1)?`${e}-`:e}${n}`)}function _l(e="",n=""){return`--${Fr(e,n)}`}function Jp(e=""){let n=(e.match(/{/g)||[]).length,t=(e.match(/}/g)||[]).length;return(n+t)%2!==0}function xl(e,n="",t="",o=[],i){if(Kt(e)){let r=/{([^}]*)}/g,a=e.trim();if(Jp(a))return;if(nt(a,r)){let s=a.replaceAll(r,g=>{let S=g.replace(/{|}/g,"").split(".").filter(D=>!o.some(j=>nt(D,j)));return`var(${_l(t,dn(S.join("-")))}${W(i)?`, ${i}`:""})`}),l=/(\d+\s+[\+\-\*\/]\s+\d+)/g,f=/var\([^)]+\)/g;return nt(s.replace(f,"0"),l)?`calc(${s})`:s}return a}else if(dl(e))return e}function em(e,n,t){Kt(n,!1)&&e.push(`${n}:${t};`)}function _o(e,n){return e?`${e}{${n}}`:""}var xo=(...e)=>tm(fe.getTheme(),...e),tm=(e={},n,t,o)=>{if(n){let{variable:i,options:r}=fe.defaults||{},{prefix:a,transform:s}=e?.options||r||{},f=nt(n,/{([^}]*)}/g)?n:`{${n}}`;return o==="value"||We(o)&&s==="strict"?fe.getTokenValue(n):xl(f,void 0,a,[i.excludedKeyRegex],t)}return""};function om(e,n={}){let t=fe.defaults.variable,{prefix:o=t.prefix,selector:i=t.selector,excludedKeyRegex:r=t.excludedKeyRegex}=n,a=(f,g="")=>Object.entries(f).reduce((x,[S,D])=>{let j=nt(S,r)?Fr(g):Fr(g,dn(S)),ee=Zp(D);if(_t(ee)){let{variables:xe,tokens:ze}=a(ee,j);gl(x.tokens,ze),gl(x.variables,xe)}else x.tokens.push((o?j.replace(`${o}-`,""):j).replaceAll("-",".")),em(x.variables,_l(j),xl(ee,j,o,[r]));return x},{variables:[],tokens:[]}),{variables:s,tokens:l}=a(e,o);return{value:s,tokens:l,declarations:s.join(""),css:_o(i,s.join(""))}}var xt={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(e){return{type:"class",selector:e,matched:this.pattern.test(e.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(e){return{type:"attr",selector:`:root${e}`,matched:this.pattern.test(e.trim())}}},media:{pattern:/^@media (.*)$/,resolve(e){return{type:"media",selector:`${e}{:root{[CSS]}}`,matched:this.pattern.test(e.trim())}}},system:{pattern:/^system$/,resolve(e){return{type:"system",selector:"@media (prefers-color-scheme: dark){:root{[CSS]}}",matched:this.pattern.test(e.trim())}}},custom:{resolve(e){return{type:"custom",selector:e,matched:!0}}}},resolve(e){let n=Object.keys(this.rules).filter(t=>t!=="custom").map(t=>this.rules[t]);return[e].flat().map(t=>{var o;return(o=n.map(i=>i.resolve(t)).find(i=>i.matched))!=null?o:this.rules.custom.resolve(t)})}},_toVariables(e,n){return om(e,{prefix:n?.prefix})},getCommon({name:e="",theme:n={},params:t,set:o,defaults:i}){var r,a,s,l,f,g,x;let{preset:S,options:D}=n,j,ee,xe,ze,Ge,ct,gt;if(W(S)&&D.transform!=="strict"){let{primitive:Di,semantic:$i,extend:Ai}=S,Ho=$i||{},{colorScheme:Oi}=Ho,Mi=Nt(Ho,["colorScheme"]),Bi=Ai||{},{colorScheme:Fi}=Bi,zo=Nt(Bi,["colorScheme"]),jo=Oi||{},{dark:Li}=jo,Pi=Nt(jo,["dark"]),Ni=Fi||{},{dark:Vi}=Ni,Hi=Nt(Ni,["dark"]),zi=W(Di)?this._toVariables({primitive:Di},D):{},ji=W(Mi)?this._toVariables({semantic:Mi},D):{},Ui=W(Pi)?this._toVariables({light:Pi},D):{},Oa=W(Li)?this._toVariables({dark:Li},D):{},Ma=W(zo)?this._toVariables({semantic:zo},D):{},Ba=W(Hi)?this._toVariables({light:Hi},D):{},Fa=W(Vi)?this._toVariables({dark:Vi},D):{},[Yu,Zu]=[(r=zi.declarations)!=null?r:"",zi.tokens],[Xu,Ju]=[(a=ji.declarations)!=null?a:"",ji.tokens||[]],[ep,tp]=[(s=Ui.declarations)!=null?s:"",Ui.tokens||[]],[op,ip]=[(l=Oa.declarations)!=null?l:"",Oa.tokens||[]],[np,rp]=[(f=Ma.declarations)!=null?f:"",Ma.tokens||[]],[ap,sp]=[(g=Ba.declarations)!=null?g:"",Ba.tokens||[]],[lp,cp]=[(x=Fa.declarations)!=null?x:"",Fa.tokens||[]];j=this.transformCSS(e,Yu,"light","variable",D,o,i),ee=Zu;let dp=this.transformCSS(e,`${Xu}${ep}`,"light","variable",D,o,i),up=this.transformCSS(e,`${op}`,"dark","variable",D,o,i);xe=`${dp}${up}`,ze=[...new Set([...Ju,...tp,...ip])];let pp=this.transformCSS(e,`${np}${ap}color-scheme:light`,"light","variable",D,o,i),mp=this.transformCSS(e,`${lp}color-scheme:dark`,"dark","variable",D,o,i);Ge=`${pp}${mp}`,ct=[...new Set([...rp,...sp,...cp])],gt=Ue(S.css,{dt:xo})}return{primitive:{css:j,tokens:ee},semantic:{css:xe,tokens:ze},global:{css:Ge,tokens:ct},style:gt}},getPreset({name:e="",preset:n={},options:t,params:o,set:i,defaults:r,selector:a}){var s,l,f;let g,x,S;if(W(n)&&t.transform!=="strict"){let D=e.replace("-directive",""),j=n,{colorScheme:ee,extend:xe,css:ze}=j,Ge=Nt(j,["colorScheme","extend","css"]),ct=xe||{},{colorScheme:gt}=ct,Di=Nt(ct,["colorScheme"]),$i=ee||{},{dark:Ai}=$i,Ho=Nt($i,["dark"]),Oi=gt||{},{dark:Mi}=Oi,Bi=Nt(Oi,["dark"]),Fi=W(Ge)?this._toVariables({[D]:Ct(Ct({},Ge),Di)},t):{},zo=W(Ho)?this._toVariables({[D]:Ct(Ct({},Ho),Bi)},t):{},jo=W(Ai)?this._toVariables({[D]:Ct(Ct({},Ai),Mi)},t):{},[Li,Pi]=[(s=Fi.declarations)!=null?s:"",Fi.tokens||[]],[Ni,Vi]=[(l=zo.declarations)!=null?l:"",zo.tokens||[]],[Hi,zi]=[(f=jo.declarations)!=null?f:"",jo.tokens||[]],ji=this.transformCSS(D,`${Li}${Ni}`,"light","variable",t,i,r,a),Ui=this.transformCSS(D,Hi,"dark","variable",t,i,r,a);g=`${ji}${Ui}`,x=[...new Set([...Pi,...Vi,...zi])],S=Ue(ze,{dt:xo})}return{css:g,tokens:x,style:S}},getPresetC({name:e="",theme:n={},params:t,set:o,defaults:i}){var r;let{preset:a,options:s}=n,l=(r=a?.components)==null?void 0:r[e];return this.getPreset({name:e,preset:l,options:s,params:t,set:o,defaults:i})},getPresetD({name:e="",theme:n={},params:t,set:o,defaults:i}){var r;let a=e.replace("-directive",""),{preset:s,options:l}=n,f=(r=s?.directives)==null?void 0:r[a];return this.getPreset({name:a,preset:f,options:l,params:t,set:o,defaults:i})},applyDarkColorScheme(e){return!(e.darkModeSelector==="none"||e.darkModeSelector===!1)},getColorSchemeOption(e,n){var t;return this.applyDarkColorScheme(e)?this.regex.resolve(e.darkModeSelector===!0?n.options.darkModeSelector:(t=e.darkModeSelector)!=null?t:n.options.darkModeSelector):[]},getLayerOrder(e,n={},t,o){let{cssLayer:i}=n;return i?`@layer ${Ue(i.order||"primeui",t)}`:""},getCommonStyleSheet({name:e="",theme:n={},params:t,props:o={},set:i,defaults:r}){let a=this.getCommon({name:e,theme:n,params:t,set:i,defaults:r}),s=Object.entries(o).reduce((l,[f,g])=>l.push(`${f}="${g}"`)&&l,[]).join(" ");return Object.entries(a||{}).reduce((l,[f,g])=>{if(g?.css){let x=ro(g?.css),S=`${f}-variables`;l.push(`<style type="text/css" data-primevue-style-id="${S}" ${s}>${x}</style>`)}return l},[]).join("")},getStyleSheet({name:e="",theme:n={},params:t,props:o={},set:i,defaults:r}){var a;let s={name:e,theme:n,params:t,set:i,defaults:r},l=(a=e.includes("-directive")?this.getPresetD(s):this.getPresetC(s))==null?void 0:a.css,f=Object.entries(o).reduce((g,[x,S])=>g.push(`${x}="${S}"`)&&g,[]).join(" ");return l?`<style type="text/css" data-primevue-style-id="${e}-variables" ${f}>${ro(l)}</style>`:""},createTokens(e={},n,t="",o="",i={}){return Object.entries(e).forEach(([r,a])=>{let s=nt(r,n.variable.excludedKeyRegex)?t:t?`${t}.${Mr(r)}`:Mr(r),l=o?`${o}.${r}`:r;_t(a)?this.createTokens(a,n,s,l,i):(i[s]||(i[s]={paths:[],computed(f,g={}){var x,S;return this.paths.length===1?(x=this.paths[0])==null?void 0:x.computed(this.paths[0].scheme,g.binding):f&&f!=="none"?(S=this.paths.find(D=>D.scheme===f))==null?void 0:S.computed(f,g.binding):this.paths.map(D=>D.computed(D.scheme,g[D.scheme]))}}),i[s].paths.push({path:l,value:a,scheme:l.includes("colorScheme.light")?"light":l.includes("colorScheme.dark")?"dark":"none",computed(f,g={}){let x=/{([^}]*)}/g,S=a;if(g.name=this.path,g.binding||(g.binding={}),nt(a,x)){let j=a.trim().replaceAll(x,ze=>{var Ge;let ct=ze.replace(/{|}/g,""),gt=(Ge=i[ct])==null?void 0:Ge.computed(f,g);return cn(gt)&&gt.length===2?`light-dark(${gt[0].value},${gt[1].value})`:gt?.value}),ee=/(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g,xe=/var\([^)]+\)/g;S=nt(j.replace(xe,"0"),ee)?`calc(${j})`:j}return We(g.binding)&&delete g.binding,{colorScheme:f,path:this.path,paths:g,value:S.includes("undefined")?void 0:S}}}))}),i},getTokenValue(e,n,t){var o;let r=(l=>l.split(".").filter(g=>!nt(g.toLowerCase(),t.variable.excludedKeyRegex)).join("."))(n),a=n.includes("colorScheme.light")?"light":n.includes("colorScheme.dark")?"dark":void 0,s=[(o=e[r])==null?void 0:o.computed(a)].flat().filter(l=>l);return s.length===1?s[0].value:s.reduce((l={},f)=>{let g=f,{colorScheme:x}=g,S=Nt(g,["colorScheme"]);return l[x]=S,l},void 0)},getSelectorRule(e,n,t,o){return t==="class"||t==="attr"?_o(W(n)?`${e}${n},${e} ${n}`:e,o):_o(e,W(n)?_o(n,o):o)},transformCSS(e,n,t,o,i={},r,a,s){if(W(n)){let{cssLayer:l}=i;if(o!=="style"){let f=this.getColorSchemeOption(i,a);n=t==="dark"?f.reduce((g,{type:x,selector:S})=>(W(S)&&(g+=S.includes("[CSS]")?S.replace("[CSS]",n):this.getSelectorRule(S,s,x,n)),g),""):_o(s??":root",n)}if(l){let f={name:"primeui",order:"primeui"};_t(l)&&(f.name=Ue(l.name,{name:e,type:o})),W(f.name)&&(n=_o(`@layer ${f.name}`,n),r?.layerNames(f.name))}return n}return""}},fe={defaults:{variable:{prefix:"p",selector:":root",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(e={}){let{theme:n}=e;n&&(this._theme=Br(Ct({},n),{options:Ct(Ct({},this.defaults.options),n.options)}),this._tokens=xt.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var e;return((e=this.theme)==null?void 0:e.preset)||{}},get options(){var e;return((e=this.theme)==null?void 0:e.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(e){this.update({theme:e}),rt.emit("theme:change",e)},getPreset(){return this.preset},setPreset(e){this._theme=Br(Ct({},this.theme),{preset:e}),this._tokens=xt.createTokens(e,this.defaults),this.clearLoadedStyleNames(),rt.emit("preset:change",e),rt.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(e){this._theme=Br(Ct({},this.theme),{options:e}),this.clearLoadedStyleNames(),rt.emit("options:change",e),rt.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(e){this._layerNames.add(e)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(e){return this._loadedStyleNames.has(e)},setLoadedStyleName(e){this._loadedStyleNames.add(e)},deleteLoadedStyleName(e){this._loadedStyleNames.delete(e)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(e){return xt.getTokenValue(this.tokens,e,this.defaults)},getCommon(e="",n){return xt.getCommon({name:e,theme:this.theme,params:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(e="",n){let t={name:e,theme:this.theme,params:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return xt.getPresetC(t)},getDirective(e="",n){let t={name:e,theme:this.theme,params:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return xt.getPresetD(t)},getCustomPreset(e="",n,t,o){let i={name:e,preset:n,options:this.options,selector:t,params:o,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return xt.getPreset(i)},getLayerOrderCSS(e=""){return xt.getLayerOrder(e,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(e="",n,t="style",o){return xt.transformCSS(e,n,o,t,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(e="",n,t={}){return xt.getCommonStyleSheet({name:e,theme:this.theme,params:n,props:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(e,n,t={}){return xt.getStyleSheet({name:e,theme:this.theme,params:n,props:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(e){this._loadingStyles.add(e)},onStyleUpdated(e){this._loadingStyles.add(e)},onStyleLoaded(e,{name:n}){this._loadingStyles.size&&(this._loadingStyles.delete(n),rt.emit(`theme:${n}:load`,e),!this._loadingStyles.size&&rt.emit("theme:load"))}};var im=0,Cl=(()=>{class e{document=y(ve);use(t,o={}){let i=!1,r=t,a=null,{immediate:s=!0,manual:l=!1,name:f=`style_${++im}`,id:g=void 0,media:x=void 0,nonce:S=void 0,first:D=!1,props:j={}}=o;if(this.document){if(a=this.document.querySelector(`style[data-primeng-style-id="${f}"]`)||g&&this.document.getElementById(g)||this.document.createElement("style"),!a.isConnected){r=t,sn(a,{type:"text/css",media:x,nonce:S});let ee=this.document.head;D&&ee.firstChild?ee.insertBefore(a,ee.firstChild):ee.appendChild(a),vo(a,"data-primeng-style-id",f)}return a.textContent!==r&&(a.textContent=r),{id:g,name:f,el:a,css:r}}}static \u0275fac=function(o){return new(o||e)};static \u0275prov=A({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var Co={_loadedStyleNames:new Set,getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(e){return this._loadedStyleNames.has(e)},setLoadedStyleName(e){this._loadedStyleNames.add(e)},deleteLoadedStyleName(e){this._loadedStyleNames.delete(e)},clearLoadedStyleNames(){this._loadedStyleNames.clear()}},nm=({dt:e})=>`
*,
::before,
::after {
    box-sizing: border-box;
}

/* Non ng overlay animations */
.p-connected-overlay {
    opacity: 0;
    transform: scaleY(0.8);
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-visible {
    opacity: 1;
    transform: scaleY(1);
}

.p-connected-overlay-hidden {
    opacity: 0;
    transform: scaleY(1);
    transition: opacity 0.1s linear;
}

/* NG based overlay animations */
.p-connected-overlay-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-connected-overlay-leave-to {
    opacity: 0;
}

.p-connected-overlay-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-leave-active {
    transition: opacity 0.1s linear;
}

/* Toggleable Content */
.p-toggleable-content-enter-from,
.p-toggleable-content-leave-to {
    max-height: 0;
}

.p-toggleable-content-enter-to,
.p-toggleable-content-leave-from {
    max-height: 1000px;
}

.p-toggleable-content-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
}

.p-toggleable-content-enter-active {
    overflow: hidden;
    transition: max-height 1s ease-in-out;
}

.p-disabled,
.p-disabled * {
    cursor: default;
    pointer-events: none;
    user-select: none;
}

.p-disabled,
.p-component:disabled {
    opacity: ${e("disabled.opacity")};
}

.pi {
    font-size: ${e("icon.size")};
}

.p-icon {
    width: ${e("icon.size")};
    height: ${e("icon.size")};
}

.p-overlay-mask {
    background: ${e("mask.background")};
    color: ${e("mask.color")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-mask-enter {
    animation: p-overlay-mask-enter-animation ${e("mask.transition.duration")} forwards;
}

.p-overlay-mask-leave {
    animation: p-overlay-mask-leave-animation ${e("mask.transition.duration")} forwards;
}
/* Temporarily disabled, distrupts PrimeNG overlay animations */
/* @keyframes p-overlay-mask-enter-animation {
    from {
        background: transparent;
    }
    to {
        background: ${e("mask.background")};
    }
}
@keyframes p-overlay-mask-leave-animation {
    from {
        background: ${e("mask.background")};
    }
    to {
        background: transparent;
    }
}*/

.p-iconwrapper {
    display: inline-flex;
    justify-content: center;
    align-items: center;
}
`,rm=({dt:e})=>`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: ${e("scrollbar.width")};
}

/* @todo move to baseiconstyle.ts */

.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,X=(()=>{class e{name="base";useStyle=y(Cl);theme=void 0;css=void 0;classes={};inlineStyles={};load=(t,o={},i=r=>r)=>{let r=i(Ue(t,{dt:xo}));return r?this.useStyle.use(ro(r),T({name:this.name},o)):{}};loadCSS=(t={})=>this.load(this.css,t);loadTheme=(t={},o="")=>this.load(this.theme,t,(i="")=>fe.transformCSS(t.name||this.name,`${i}${o}`));loadGlobalCSS=(t={})=>this.load(rm,t);loadGlobalTheme=(t={},o="")=>this.load(nm,t,(i="")=>fe.transformCSS(t.name||this.name,`${i}${o}`));getCommonTheme=t=>fe.getCommon(this.name,t);getComponentTheme=t=>fe.getComponent(this.name,t);getDirectiveTheme=t=>fe.getDirective(this.name,t);getPresetTheme=(t,o,i)=>fe.getCustomPreset(this.name,t,o,i);getLayerOrderThemeCSS=()=>fe.getLayerOrderCSS(this.name);getStyleSheet=(t="",o={})=>{if(this.css){let i=Ue(this.css,{dt:xo}),r=ro(`${i}${t}`),a=Object.entries(o).reduce((s,[l,f])=>s.push(`${l}="${f}"`)&&s,[]).join(" ");return`<style type="text/css" data-primeng-style-id="${this.name}" ${a}>${r}</style>`}return""};getCommonThemeStyleSheet=(t,o={})=>fe.getCommonStyleSheet(this.name,t,o);getThemeStyleSheet=(t,o={})=>{let i=[fe.getStyleSheet(this.name,t,o)];if(this.theme){let r=this.name==="base"?"global-style":`${this.name}-style`,a=Ue(this.theme,{dt:xo}),s=ro(fe.transformCSS(r,a)),l=Object.entries(o).reduce((f,[g,x])=>f.push(`${g}="${x}"`)&&f,[]).join(" ");i.push(`<style type="text/css" data-primeng-style-id="${r}" ${l}>${s}</style>`)}return i.join("")};static \u0275fac=function(o){return new(o||e)};static \u0275prov=A({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var am=(()=>{class e{theme=Se(void 0);csp=Se({nonce:void 0});isThemeChanged=!1;document=y(ve);baseStyle=y(X);constructor(){$t(()=>{rt.on("theme:change",t=>{Cs(()=>{this.isThemeChanged=!0,this.theme.set(t)})})}),$t(()=>{let t=this.theme();this.document&&t&&(this.isThemeChanged||this.onThemeChange(t),this.isThemeChanged=!1)})}ngOnDestroy(){fe.clearLoadedStyleNames(),rt.clear()}onThemeChange(t){fe.setTheme(t),this.document&&this.loadCommonTheme()}loadCommonTheme(){if(this.theme()!=="none"&&!fe.isStyleNameLoaded("common")){let{primitive:t,semantic:o,global:i,style:r}=this.baseStyle.getCommonTheme?.()||{},a={nonce:this.csp?.()?.nonce};this.baseStyle.load(t?.css,T({name:"primitive-variables"},a)),this.baseStyle.load(o?.css,T({name:"semantic-variables"},a)),this.baseStyle.load(i?.css,T({name:"global-variables"},a)),this.baseStyle.loadGlobalTheme(T({name:"global-style"},a),r),fe.setLoadedStyleName("common")}}setThemeConfig(t){let{theme:o,csp:i}=t||{};o&&this.theme.set(o),i&&this.csp.set(i)}static \u0275fac=function(o){return new(o||e)};static \u0275prov=A({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Lr=(()=>{class e extends am{ripple=Se(!1);platformId=y(qe);inputStyle=Se(null);inputVariant=Se(null);overlayOptions={};csp=Se({nonce:void 0});filterMatchModeOptions={text:[He.STARTS_WITH,He.CONTAINS,He.NOT_CONTAINS,He.ENDS_WITH,He.EQUALS,He.NOT_EQUALS],numeric:[He.EQUALS,He.NOT_EQUALS,He.LESS_THAN,He.LESS_THAN_OR_EQUAL_TO,He.GREATER_THAN,He.GREATER_THAN_OR_EQUAL_TO],date:[He.DATE_IS,He.DATE_IS_NOT,He.DATE_BEFORE,He.DATE_AFTER]};translation={startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",is:"Is",isNot:"Is not",before:"Before",after:"After",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",dateFormat:"mm/dd/yy",firstDayOfWeek:0,today:"Today",weekHeader:"Wk",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyMessage:"No results found",searchMessage:"Search results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyFilterMessage:"No results found",fileChosenMessage:"Files",noFileChosenMessage:"No file chosen",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"{page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",previousPageLabel:"Previous Page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List",selectColor:"Select a color",removeLabel:"Remove",browseFiles:"Browse Files",maximizeLabel:"Maximize"}};zIndex={modal:1100,overlay:1e3,menu:1e3,tooltip:1100};translationSource=new Tt;translationObserver=this.translationSource.asObservable();getTranslation(t){return this.translation[t]}setTranslation(t){this.translation=T(T({},this.translation),t),this.translationSource.next(this.translation)}setConfig(t){let{csp:o,ripple:i,inputStyle:r,inputVariant:a,theme:s,overlayOptions:l,translation:f}=t||{};o&&this.csp.set(o),i&&this.ripple.set(i),r&&this.inputStyle.set(r),a&&this.inputVariant.set(a),l&&(this.overlayOptions=l),f&&this.setTranslation(f),s&&this.setThemeConfig({theme:s,csp:o})}static \u0275fac=(()=>{let t;return function(i){return(t||(t=k(e)))(i||e)}})();static \u0275prov=A({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),sm=new Re("PRIME_NG_CONFIG");function wl(...e){let n=e?.map(o=>({provide:sm,useValue:o,multi:!1})),t=cs(()=>{let o=y(Lr);e?.forEach(i=>o.setConfig(i))});return oo([...n,t])}var G="primary",_i=Symbol("RouteTitle"),zr=class{params;constructor(n){this.params=n||{}}has(n){return Object.prototype.hasOwnProperty.call(this.params,n)}get(n){if(this.has(n)){let t=this.params[n];return Array.isArray(t)?t[0]:t}return null}getAll(n){if(this.has(n)){let t=this.params[n];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}};function Eo(e){return new zr(e)}function lm(e,n,t){let o=t.path.split("/");if(o.length>e.length||t.pathMatch==="full"&&(n.hasChildren()||o.length<e.length))return null;let i={};for(let r=0;r<o.length;r++){let a=o[r],s=e[r];if(a[0]===":")i[a.substring(1)]=s;else if(a!==s.path)return null}return{consumed:e.slice(0,o.length),posParams:i}}function cm(e,n){if(e.length!==n.length)return!1;for(let t=0;t<e.length;++t)if(!Ot(e[t],n[t]))return!1;return!0}function Ot(e,n){let t=e?jr(e):void 0,o=n?jr(n):void 0;if(!t||!o||t.length!=o.length)return!1;let i;for(let r=0;r<t.length;r++)if(i=t[r],!Ol(e[i],n[i]))return!1;return!0}function jr(e){return[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Ol(e,n){if(Array.isArray(e)&&Array.isArray(n)){if(e.length!==n.length)return!1;let t=[...e].sort(),o=[...n].sort();return t.every((i,r)=>o[r]===i)}else return e===n}function Ml(e){return e.length>0?e[e.length-1]:null}function Xt(e){return Na(e)?e:ls(e)?Ze(Promise.resolve(e)):z(e)}var dm={exact:Fl,subset:Ll},Bl={exact:um,subset:pm,ignored:()=>!0};function Il(e,n,t){return dm[t.paths](e.root,n.root,t.matrixParams)&&Bl[t.queryParams](e.queryParams,n.queryParams)&&!(t.fragment==="exact"&&e.fragment!==n.fragment)}function um(e,n){return Ot(e,n)}function Fl(e,n,t){if(!so(e.segments,n.segments)||!gn(e.segments,n.segments,t)||e.numberOfChildren!==n.numberOfChildren)return!1;for(let o in n.children)if(!e.children[o]||!Fl(e.children[o],n.children[o],t))return!1;return!0}function pm(e,n){return Object.keys(n).length<=Object.keys(e).length&&Object.keys(n).every(t=>Ol(e[t],n[t]))}function Ll(e,n,t){return Pl(e,n,n.segments,t)}function Pl(e,n,t,o){if(e.segments.length>t.length){let i=e.segments.slice(0,t.length);return!(!so(i,t)||n.hasChildren()||!gn(i,t,o))}else if(e.segments.length===t.length){if(!so(e.segments,t)||!gn(e.segments,t,o))return!1;for(let i in n.children)if(!e.children[i]||!Ll(e.children[i],n.children[i],o))return!1;return!0}else{let i=t.slice(0,e.segments.length),r=t.slice(e.segments.length);return!so(e.segments,i)||!gn(e.segments,i,o)||!e.children[G]?!1:Pl(e.children[G],n,r,o)}}function gn(e,n,t){return n.every((o,i)=>Bl[t](e[i].parameters,o.parameters))}var Ht=class{root;queryParams;fragment;_queryParamMap;constructor(n=new le([],{}),t={},o=null){this.root=n,this.queryParams=t,this.fragment=o}get queryParamMap(){return this._queryParamMap??=Eo(this.queryParams),this._queryParamMap}toString(){return hm.serialize(this)}},le=class{segments;children;parent=null;constructor(n,t){this.segments=n,this.children=t,Object.values(t).forEach(o=>o.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return bn(this)}},ao=class{path;parameters;_parameterMap;constructor(n,t){this.path=n,this.parameters=t}get parameterMap(){return this._parameterMap??=Eo(this.parameters),this._parameterMap}toString(){return Vl(this)}};function mm(e,n){return so(e,n)&&e.every((t,o)=>Ot(t.parameters,n[o].parameters))}function so(e,n){return e.length!==n.length?!1:e.every((t,o)=>t.path===n[o].path)}function fm(e,n){let t=[];return Object.entries(e.children).forEach(([o,i])=>{o===G&&(t=t.concat(n(i,o)))}),Object.entries(e.children).forEach(([o,i])=>{o!==G&&(t=t.concat(n(i,o)))}),t}var Oo=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275prov=A({token:e,factory:()=>new Ro,providedIn:"root"})}return e})(),Ro=class{parse(n){let t=new Wr(n);return new Ht(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(n){let t=`/${si(n.root,!0)}`,o=vm(n.queryParams),i=typeof n.fragment=="string"?`#${gm(n.fragment)}`:"";return`${t}${o}${i}`}},hm=new Ro;function bn(e){return e.segments.map(n=>Vl(n)).join("/")}function si(e,n){if(!e.hasChildren())return bn(e);if(n){let t=e.children[G]?si(e.children[G],!1):"",o=[];return Object.entries(e.children).forEach(([i,r])=>{i!==G&&o.push(`${i}:${si(r,!1)}`)}),o.length>0?`${t}(${o.join("//")})`:t}else{let t=fm(e,(o,i)=>i===G?[si(e.children[G],!1)]:[`${i}:${si(o,!1)}`]);return Object.keys(e.children).length===1&&e.children[G]!=null?`${bn(e)}/${t[0]}`:`${bn(e)}/(${t.join("//")})`}}function Nl(e){return encodeURIComponent(e).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function fn(e){return Nl(e).replace(/%3B/gi,";")}function gm(e){return encodeURI(e)}function Ur(e){return Nl(e).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function vn(e){return decodeURIComponent(e)}function Sl(e){return vn(e.replace(/\+/g,"%20"))}function Vl(e){return`${Ur(e.path)}${bm(e.parameters)}`}function bm(e){return Object.entries(e).map(([n,t])=>`;${Ur(n)}=${Ur(t)}`).join("")}function vm(e){let n=Object.entries(e).map(([t,o])=>Array.isArray(o)?o.map(i=>`${fn(t)}=${fn(i)}`).join("&"):`${fn(t)}=${fn(o)}`).filter(t=>t);return n.length?`?${n.join("&")}`:""}var ym=/^[^\/()?;#]+/;function Pr(e){let n=e.match(ym);return n?n[0]:""}var _m=/^[^\/()?;=#]+/;function xm(e){let n=e.match(_m);return n?n[0]:""}var Cm=/^[^=?&#]+/;function wm(e){let n=e.match(Cm);return n?n[0]:""}var Im=/^[^&#]+/;function Sm(e){let n=e.match(Im);return n?n[0]:""}var Wr=class{url;remaining;constructor(n){this.url=n,this.remaining=n}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new le([],{}):new le([],this.parseChildren())}parseQueryParams(){let n={};if(this.consumeOptional("?"))do this.parseQueryParam(n);while(this.consumeOptional("&"));return n}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let n=[];for(this.peekStartsWith("(")||n.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),n.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0));let o={};return this.peekStartsWith("(")&&(o=this.parseParens(!1)),(n.length>0||Object.keys(t).length>0)&&(o[G]=new le(n,t)),o}parseSegment(){let n=Pr(this.remaining);if(n===""&&this.peekStartsWith(";"))throw new Te(4009,!1);return this.capture(n),new ao(vn(n),this.parseMatrixParams())}parseMatrixParams(){let n={};for(;this.consumeOptional(";");)this.parseParam(n);return n}parseParam(n){let t=xm(this.remaining);if(!t)return;this.capture(t);let o="";if(this.consumeOptional("=")){let i=Pr(this.remaining);i&&(o=i,this.capture(o))}n[vn(t)]=vn(o)}parseQueryParam(n){let t=wm(this.remaining);if(!t)return;this.capture(t);let o="";if(this.consumeOptional("=")){let a=Sm(this.remaining);a&&(o=a,this.capture(o))}let i=Sl(t),r=Sl(o);if(n.hasOwnProperty(i)){let a=n[i];Array.isArray(a)||(a=[a],n[i]=a),a.push(r)}else n[i]=r}parseParens(n){let t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let o=Pr(this.remaining),i=this.remaining[o.length];if(i!=="/"&&i!==")"&&i!==";")throw new Te(4010,!1);let r;o.indexOf(":")>-1?(r=o.slice(0,o.indexOf(":")),this.capture(r),this.capture(":")):n&&(r=G);let a=this.parseChildren();t[r]=Object.keys(a).length===1?a[G]:new le([],a),this.consumeOptional("//")}return t}peekStartsWith(n){return this.remaining.startsWith(n)}consumeOptional(n){return this.peekStartsWith(n)?(this.remaining=this.remaining.substring(n.length),!0):!1}capture(n){if(!this.consumeOptional(n))throw new Te(4011,!1)}};function Hl(e){return e.segments.length>0?new le([],{[G]:e}):e}function zl(e){let n={};for(let[o,i]of Object.entries(e.children)){let r=zl(i);if(o===G&&r.segments.length===0&&r.hasChildren())for(let[a,s]of Object.entries(r.children))n[a]=s;else(r.segments.length>0||r.hasChildren())&&(n[o]=r)}let t=new le(e.segments,n);return km(t)}function km(e){if(e.numberOfChildren===1&&e.children[G]){let n=e.children[G];return new le(e.segments.concat(n.segments),n.children)}return e}function lo(e){return e instanceof Ht}function Tm(e,n,t=null,o=null){let i=jl(e);return Ul(i,n,t,o)}function jl(e){let n;function t(r){let a={};for(let l of r.children){let f=t(l);a[l.outlet]=f}let s=new le(r.url,a);return r===e&&(n=s),s}let o=t(e.root),i=Hl(o);return n??i}function Ul(e,n,t,o){let i=e;for(;i.parent;)i=i.parent;if(n.length===0)return Nr(i,i,i,t,o);let r=Em(n);if(r.toRoot())return Nr(i,i,new le([],{}),t,o);let a=Rm(r,i,e),s=a.processChildren?ci(a.segmentGroup,a.index,r.commands):Gl(a.segmentGroup,a.index,r.commands);return Nr(i,a.segmentGroup,s,t,o)}function yn(e){return typeof e=="object"&&e!=null&&!e.outlets&&!e.segmentPath}function pi(e){return typeof e=="object"&&e!=null&&e.outlets}function Nr(e,n,t,o,i){let r={};o&&Object.entries(o).forEach(([l,f])=>{r[l]=Array.isArray(f)?f.map(g=>`${g}`):`${f}`});let a;e===n?a=t:a=Wl(e,n,t);let s=Hl(zl(a));return new Ht(s,r,i)}function Wl(e,n,t){let o={};return Object.entries(e.children).forEach(([i,r])=>{r===n?o[i]=t:o[i]=Wl(r,n,t)}),new le(e.segments,o)}var _n=class{isAbsolute;numberOfDoubleDots;commands;constructor(n,t,o){if(this.isAbsolute=n,this.numberOfDoubleDots=t,this.commands=o,n&&o.length>0&&yn(o[0]))throw new Te(4003,!1);let i=o.find(pi);if(i&&i!==Ml(o))throw new Te(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function Em(e){if(typeof e[0]=="string"&&e.length===1&&e[0]==="/")return new _n(!0,0,e);let n=0,t=!1,o=e.reduce((i,r,a)=>{if(typeof r=="object"&&r!=null){if(r.outlets){let s={};return Object.entries(r.outlets).forEach(([l,f])=>{s[l]=typeof f=="string"?f.split("/"):f}),[...i,{outlets:s}]}if(r.segmentPath)return[...i,r.segmentPath]}return typeof r!="string"?[...i,r]:a===0?(r.split("/").forEach((s,l)=>{l==0&&s==="."||(l==0&&s===""?t=!0:s===".."?n++:s!=""&&i.push(s))}),i):[...i,r]},[]);return new _n(t,n,o)}var So=class{segmentGroup;processChildren;index;constructor(n,t,o){this.segmentGroup=n,this.processChildren=t,this.index=o}};function Rm(e,n,t){if(e.isAbsolute)return new So(n,!0,0);if(!t)return new So(n,!1,NaN);if(t.parent===null)return new So(t,!0,0);let o=yn(e.commands[0])?0:1,i=t.segments.length-1+o;return Dm(t,i,e.numberOfDoubleDots)}function Dm(e,n,t){let o=e,i=n,r=t;for(;r>i;){if(r-=i,o=o.parent,!o)throw new Te(4005,!1);i=o.segments.length}return new So(o,!1,i-r)}function $m(e){return pi(e[0])?e[0].outlets:{[G]:e}}function Gl(e,n,t){if(e??=new le([],{}),e.segments.length===0&&e.hasChildren())return ci(e,n,t);let o=Am(e,n,t),i=t.slice(o.commandIndex);if(o.match&&o.pathIndex<e.segments.length){let r=new le(e.segments.slice(0,o.pathIndex),{});return r.children[G]=new le(e.segments.slice(o.pathIndex),e.children),ci(r,0,i)}else return o.match&&i.length===0?new le(e.segments,{}):o.match&&!e.hasChildren()?Gr(e,n,t):o.match?ci(e,0,i):Gr(e,n,t)}function ci(e,n,t){if(t.length===0)return new le(e.segments,{});{let o=$m(t),i={};if(Object.keys(o).some(r=>r!==G)&&e.children[G]&&e.numberOfChildren===1&&e.children[G].segments.length===0){let r=ci(e.children[G],n,t);return new le(e.segments,r.children)}return Object.entries(o).forEach(([r,a])=>{typeof a=="string"&&(a=[a]),a!==null&&(i[r]=Gl(e.children[r],n,a))}),Object.entries(e.children).forEach(([r,a])=>{o[r]===void 0&&(i[r]=a)}),new le(e.segments,i)}}function Am(e,n,t){let o=0,i=n,r={match:!1,pathIndex:0,commandIndex:0};for(;i<e.segments.length;){if(o>=t.length)return r;let a=e.segments[i],s=t[o];if(pi(s))break;let l=`${s}`,f=o<t.length-1?t[o+1]:null;if(i>0&&l===void 0)break;if(l&&f&&typeof f=="object"&&f.outlets===void 0){if(!Tl(l,f,a))return r;o+=2}else{if(!Tl(l,{},a))return r;o++}i++}return{match:!0,pathIndex:i,commandIndex:o}}function Gr(e,n,t){let o=e.segments.slice(0,n),i=0;for(;i<t.length;){let r=t[i];if(pi(r)){let l=Om(r.outlets);return new le(o,l)}if(i===0&&yn(t[0])){let l=e.segments[n];o.push(new ao(l.path,kl(t[0]))),i++;continue}let a=pi(r)?r.outlets[G]:`${r}`,s=i<t.length-1?t[i+1]:null;a&&s&&yn(s)?(o.push(new ao(a,kl(s))),i+=2):(o.push(new ao(a,{})),i++)}return new le(o,{})}function Om(e){let n={};return Object.entries(e).forEach(([t,o])=>{typeof o=="string"&&(o=[o]),o!==null&&(n[t]=Gr(new le([],{}),0,o))}),n}function kl(e){let n={};return Object.entries(e).forEach(([t,o])=>n[t]=`${o}`),n}function Tl(e,n,t){return e==t.path&&Ot(n,t.parameters)}var di="imperative",Ne=function(e){return e[e.NavigationStart=0]="NavigationStart",e[e.NavigationEnd=1]="NavigationEnd",e[e.NavigationCancel=2]="NavigationCancel",e[e.NavigationError=3]="NavigationError",e[e.RoutesRecognized=4]="RoutesRecognized",e[e.ResolveStart=5]="ResolveStart",e[e.ResolveEnd=6]="ResolveEnd",e[e.GuardsCheckStart=7]="GuardsCheckStart",e[e.GuardsCheckEnd=8]="GuardsCheckEnd",e[e.RouteConfigLoadStart=9]="RouteConfigLoadStart",e[e.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",e[e.ChildActivationStart=11]="ChildActivationStart",e[e.ChildActivationEnd=12]="ChildActivationEnd",e[e.ActivationStart=13]="ActivationStart",e[e.ActivationEnd=14]="ActivationEnd",e[e.Scroll=15]="Scroll",e[e.NavigationSkipped=16]="NavigationSkipped",e}(Ne||{}),ht=class{id;url;constructor(n,t){this.id=n,this.url=t}},Do=class extends ht{type=Ne.NavigationStart;navigationTrigger;restoredState;constructor(n,t,o="imperative",i=null){super(n,t),this.navigationTrigger=o,this.restoredState=i}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},It=class extends ht{urlAfterRedirects;type=Ne.NavigationEnd;constructor(n,t,o){super(n,t),this.urlAfterRedirects=o}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},st=function(e){return e[e.Redirect=0]="Redirect",e[e.SupersededByNewNavigation=1]="SupersededByNewNavigation",e[e.NoDataFromResolver=2]="NoDataFromResolver",e[e.GuardRejected=3]="GuardRejected",e}(st||{}),xn=function(e){return e[e.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",e[e.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",e}(xn||{}),Vt=class extends ht{reason;code;type=Ne.NavigationCancel;constructor(n,t,o,i){super(n,t),this.reason=o,this.code=i}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},Yt=class extends ht{reason;code;type=Ne.NavigationSkipped;constructor(n,t,o,i){super(n,t),this.reason=o,this.code=i}},mi=class extends ht{error;target;type=Ne.NavigationError;constructor(n,t,o,i){super(n,t),this.error=o,this.target=i}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Cn=class extends ht{urlAfterRedirects;state;type=Ne.RoutesRecognized;constructor(n,t,o,i){super(n,t),this.urlAfterRedirects=o,this.state=i}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},qr=class extends ht{urlAfterRedirects;state;type=Ne.GuardsCheckStart;constructor(n,t,o,i){super(n,t),this.urlAfterRedirects=o,this.state=i}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Qr=class extends ht{urlAfterRedirects;state;shouldActivate;type=Ne.GuardsCheckEnd;constructor(n,t,o,i,r){super(n,t),this.urlAfterRedirects=o,this.state=i,this.shouldActivate=r}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Kr=class extends ht{urlAfterRedirects;state;type=Ne.ResolveStart;constructor(n,t,o,i){super(n,t),this.urlAfterRedirects=o,this.state=i}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Yr=class extends ht{urlAfterRedirects;state;type=Ne.ResolveEnd;constructor(n,t,o,i){super(n,t),this.urlAfterRedirects=o,this.state=i}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Zr=class{route;type=Ne.RouteConfigLoadStart;constructor(n){this.route=n}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Xr=class{route;type=Ne.RouteConfigLoadEnd;constructor(n){this.route=n}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Jr=class{snapshot;type=Ne.ChildActivationStart;constructor(n){this.snapshot=n}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},ea=class{snapshot;type=Ne.ChildActivationEnd;constructor(n){this.snapshot=n}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},ta=class{snapshot;type=Ne.ActivationStart;constructor(n){this.snapshot=n}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},oa=class{snapshot;type=Ne.ActivationEnd;constructor(n){this.snapshot=n}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},wn=class{routerEvent;position;anchor;type=Ne.Scroll;constructor(n,t,o){this.routerEvent=n,this.position=t,this.anchor=o}toString(){let n=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${n}')`}},fi=class{},$o=class{url;navigationBehaviorOptions;constructor(n,t){this.url=n,this.navigationBehaviorOptions=t}};function Mm(e,n){return e.providers&&!e._injector&&(e._injector=pr(e.providers,n,`Route: ${e.path}`)),e._injector??n}function wt(e){return e.outlet||G}function Bm(e,n){let t=e.filter(o=>wt(o)===n);return t.push(...e.filter(o=>wt(o)!==n)),t}function xi(e){if(!e)return null;if(e.routeConfig?._injector)return e.routeConfig._injector;for(let n=e.parent;n;n=n.parent){let t=n.routeConfig;if(t?._loadedInjector)return t._loadedInjector;if(t?._injector)return t._injector}return null}var ia=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return xi(this.route?.snapshot)??this.rootInjector}constructor(n){this.rootInjector=n,this.children=new Ci(this.rootInjector)}},Ci=(()=>{class e{rootInjector;contexts=new Map;constructor(t){this.rootInjector=t}onChildOutletCreated(t,o){let i=this.getOrCreateContext(t);i.outlet=o,this.contexts.set(t,i)}onChildOutletDestroyed(t){let o=this.getContext(t);o&&(o.outlet=null,o.attachRef=null)}onOutletDeactivated(){let t=this.contexts;return this.contexts=new Map,t}onOutletReAttached(t){this.contexts=t}getOrCreateContext(t){let o=this.getContext(t);return o||(o=new ia(this.rootInjector),this.contexts.set(t,o)),o}getContext(t){return this.contexts.get(t)||null}static \u0275fac=function(o){return new(o||e)(pe(Go))};static \u0275prov=A({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),In=class{_root;constructor(n){this._root=n}get root(){return this._root.value}parent(n){let t=this.pathFromRoot(n);return t.length>1?t[t.length-2]:null}children(n){let t=na(n,this._root);return t?t.children.map(o=>o.value):[]}firstChild(n){let t=na(n,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(n){let t=ra(n,this._root);return t.length<2?[]:t[t.length-2].children.map(i=>i.value).filter(i=>i!==n)}pathFromRoot(n){return ra(n,this._root).map(t=>t.value)}};function na(e,n){if(e===n.value)return n;for(let t of n.children){let o=na(e,t);if(o)return o}return null}function ra(e,n){if(e===n.value)return[n];for(let t of n.children){let o=ra(e,t);if(o.length)return o.unshift(n),o}return[]}var at=class{value;children;constructor(n,t){this.value=n,this.children=t}toString(){return`TreeNode(${this.value})`}};function Io(e){let n={};return e&&e.children.forEach(t=>n[t.value.outlet]=t),n}var Sn=class extends In{snapshot;constructor(n,t){super(n),this.snapshot=t,fa(this,n)}toString(){return this.snapshot.toString()}};function ql(e){let n=Fm(e),t=new dt([new ao("",{})]),o=new dt({}),i=new dt({}),r=new dt({}),a=new dt(""),s=new Zt(t,o,r,a,i,G,e,n.root);return s.snapshot=n.root,new Sn(new at(s,[]),n)}function Fm(e){let n={},t={},o={},i="",r=new ko([],n,o,i,t,G,e,null,{});return new Tn("",new at(r,[]))}var Zt=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(n,t,o,i,r,a,s,l){this.urlSubject=n,this.paramsSubject=t,this.queryParamsSubject=o,this.fragmentSubject=i,this.dataSubject=r,this.outlet=a,this.component=s,this._futureSnapshot=l,this.title=this.dataSubject?.pipe(ue(f=>f[_i]))??z(void 0),this.url=n,this.params=t,this.queryParams=o,this.fragment=i,this.data=r}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(ue(n=>Eo(n))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(ue(n=>Eo(n))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function kn(e,n,t="emptyOnly"){let o,{routeConfig:i}=e;return n!==null&&(t==="always"||i?.path===""||!n.component&&!n.routeConfig?.loadComponent)?o={params:T(T({},n.params),e.params),data:T(T({},n.data),e.data),resolve:T(T(T(T({},e.data),n.data),i?.data),e._resolvedData)}:o={params:T({},e.params),data:T({},e.data),resolve:T(T({},e.data),e._resolvedData??{})},i&&Kl(i)&&(o.resolve[_i]=i.title),o}var ko=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;get title(){return this.data?.[_i]}constructor(n,t,o,i,r,a,s,l,f){this.url=n,this.params=t,this.queryParams=o,this.fragment=i,this.data=r,this.outlet=a,this.component=s,this.routeConfig=l,this._resolve=f}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Eo(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Eo(this.queryParams),this._queryParamMap}toString(){let n=this.url.map(o=>o.toString()).join("/"),t=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${n}', path:'${t}')`}},Tn=class extends In{url;constructor(n,t){super(t),this.url=n,fa(this,t)}toString(){return Ql(this._root)}};function fa(e,n){n.value._routerState=e,n.children.forEach(t=>fa(e,t))}function Ql(e){let n=e.children.length>0?` { ${e.children.map(Ql).join(", ")} } `:"";return`${e.value}${n}`}function Vr(e){if(e.snapshot){let n=e.snapshot,t=e._futureSnapshot;e.snapshot=t,Ot(n.queryParams,t.queryParams)||e.queryParamsSubject.next(t.queryParams),n.fragment!==t.fragment&&e.fragmentSubject.next(t.fragment),Ot(n.params,t.params)||e.paramsSubject.next(t.params),cm(n.url,t.url)||e.urlSubject.next(t.url),Ot(n.data,t.data)||e.dataSubject.next(t.data)}else e.snapshot=e._futureSnapshot,e.dataSubject.next(e._futureSnapshot.data)}function aa(e,n){let t=Ot(e.params,n.params)&&mm(e.url,n.url),o=!e.parent!=!n.parent;return t&&!o&&(!e.parent||aa(e.parent,n.parent))}function Kl(e){return typeof e.title=="string"||e.title===null}var Lm=new Re(""),ha=(()=>{class e{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=G;activateEvents=new q;deactivateEvents=new q;attachEvents=new q;detachEvents=new q;routerOutletData=Ee(void 0);parentContexts=y(Ci);location=y(Yi);changeDetector=y(Dt);inputBinder=y($n,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(t){if(t.name){let{firstChange:o,previousValue:i}=t.name;if(o)return;this.isTrackedInParentContexts(i)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(i)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(t){return this.parentContexts.getContext(t)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let t=this.parentContexts.getContext(this.name);t?.route&&(t.attachRef?this.attach(t.attachRef,t.route):this.activateWith(t.route,t.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new Te(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new Te(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new Te(4012,!1);this.location.detach();let t=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(t.instance),t}attach(t,o){this.activated=t,this._activatedRoute=o,this.location.insert(t.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(t.instance)}deactivate(){if(this.activated){let t=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(t)}}activateWith(t,o){if(this.isActivated)throw new Te(4013,!1);this._activatedRoute=t;let i=this.location,a=t.snapshot.component,s=this.parentContexts.getOrCreateContext(this.name).children,l=new sa(t,s,i.injector,this.routerOutletData);this.activated=i.createComponent(a,{index:i.length,injector:l,environmentInjector:o}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(o){return new(o||e)};static \u0275dir=$e({type:e,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[De]})}return e})(),sa=class e{route;childContexts;parent;outletData;__ngOutletInjector(n){return new e(this.route,this.childContexts,n,this.outletData)}constructor(n,t,o,i){this.route=n,this.childContexts=t,this.parent=o,this.outletData=i}get(n,t){return n===Zt?this.route:n===Ci?this.childContexts:n===Lm?this.outletData:this.parent.get(n,t)}},$n=new Re(""),El=(()=>{class e{outletDataSubscriptions=new Map;bindActivatedRouteToOutletComponent(t){this.unsubscribeFromRouteData(t),this.subscribeToRouteData(t)}unsubscribeFromRouteData(t){this.outletDataSubscriptions.get(t)?.unsubscribe(),this.outletDataSubscriptions.delete(t)}subscribeToRouteData(t){let{activatedRoute:o}=t,i=Wi([o.queryParams,o.params,o.data]).pipe(bt(([r,a,s],l)=>(s=T(T(T({},r),a),s),l===0?z(s):Promise.resolve(s)))).subscribe(r=>{if(!t.isActivated||!t.activatedComponentRef||t.activatedRoute!==o||o.component===null){this.unsubscribeFromRouteData(t);return}let a=ws(o.component);if(!a){this.unsubscribeFromRouteData(t);return}for(let{templateName:s}of a.inputs)t.activatedComponentRef.setInput(s,r[s])});this.outletDataSubscriptions.set(t,i)}static \u0275fac=function(o){return new(o||e)};static \u0275prov=A({token:e,factory:e.\u0275fac})}return e})();function Pm(e,n,t){let o=hi(e,n._root,t?t._root:void 0);return new Sn(o,n)}function hi(e,n,t){if(t&&e.shouldReuseRoute(n.value,t.value.snapshot)){let o=t.value;o._futureSnapshot=n.value;let i=Nm(e,n,t);return new at(o,i)}else{if(e.shouldAttach(n.value)){let r=e.retrieve(n.value);if(r!==null){let a=r.route;return a.value._futureSnapshot=n.value,a.children=n.children.map(s=>hi(e,s)),a}}let o=Vm(n.value),i=n.children.map(r=>hi(e,r));return new at(o,i)}}function Nm(e,n,t){return n.children.map(o=>{for(let i of t.children)if(e.shouldReuseRoute(o.value,i.value.snapshot))return hi(e,o,i);return hi(e,o)})}function Vm(e){return new Zt(new dt(e.url),new dt(e.params),new dt(e.queryParams),new dt(e.fragment),new dt(e.data),e.outlet,e.component,e)}var gi=class{redirectTo;navigationBehaviorOptions;constructor(n,t){this.redirectTo=n,this.navigationBehaviorOptions=t}},Yl="ngNavigationCancelingError";function En(e,n){let{redirectTo:t,navigationBehaviorOptions:o}=lo(n)?{redirectTo:n,navigationBehaviorOptions:void 0}:n,i=Zl(!1,st.Redirect);return i.url=t,i.navigationBehaviorOptions=o,i}function Zl(e,n){let t=new Error(`NavigationCancelingError: ${e||""}`);return t[Yl]=!0,t.cancellationCode=n,t}function Hm(e){return Xl(e)&&lo(e.url)}function Xl(e){return!!e&&e[Yl]}var zm=(e,n,t,o)=>ue(i=>(new la(n,i.targetRouterState,i.currentRouterState,t,o).activate(e),i)),la=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(n,t,o,i,r){this.routeReuseStrategy=n,this.futureState=t,this.currState=o,this.forwardEvent=i,this.inputBindingEnabled=r}activate(n){let t=this.futureState._root,o=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,o,n),Vr(this.futureState.root),this.activateChildRoutes(t,o,n)}deactivateChildRoutes(n,t,o){let i=Io(t);n.children.forEach(r=>{let a=r.value.outlet;this.deactivateRoutes(r,i[a],o),delete i[a]}),Object.values(i).forEach(r=>{this.deactivateRouteAndItsChildren(r,o)})}deactivateRoutes(n,t,o){let i=n.value,r=t?t.value:null;if(i===r)if(i.component){let a=o.getContext(i.outlet);a&&this.deactivateChildRoutes(n,t,a.children)}else this.deactivateChildRoutes(n,t,o);else r&&this.deactivateRouteAndItsChildren(t,o)}deactivateRouteAndItsChildren(n,t){n.value.component&&this.routeReuseStrategy.shouldDetach(n.value.snapshot)?this.detachAndStoreRouteSubtree(n,t):this.deactivateRouteAndOutlet(n,t)}detachAndStoreRouteSubtree(n,t){let o=t.getContext(n.value.outlet),i=o&&n.value.component?o.children:t,r=Io(n);for(let a of Object.values(r))this.deactivateRouteAndItsChildren(a,i);if(o&&o.outlet){let a=o.outlet.detach(),s=o.children.onOutletDeactivated();this.routeReuseStrategy.store(n.value.snapshot,{componentRef:a,route:n,contexts:s})}}deactivateRouteAndOutlet(n,t){let o=t.getContext(n.value.outlet),i=o&&n.value.component?o.children:t,r=Io(n);for(let a of Object.values(r))this.deactivateRouteAndItsChildren(a,i);o&&(o.outlet&&(o.outlet.deactivate(),o.children.onOutletDeactivated()),o.attachRef=null,o.route=null)}activateChildRoutes(n,t,o){let i=Io(t);n.children.forEach(r=>{this.activateRoutes(r,i[r.value.outlet],o),this.forwardEvent(new oa(r.value.snapshot))}),n.children.length&&this.forwardEvent(new ea(n.value.snapshot))}activateRoutes(n,t,o){let i=n.value,r=t?t.value:null;if(Vr(i),i===r)if(i.component){let a=o.getOrCreateContext(i.outlet);this.activateChildRoutes(n,t,a.children)}else this.activateChildRoutes(n,t,o);else if(i.component){let a=o.getOrCreateContext(i.outlet);if(this.routeReuseStrategy.shouldAttach(i.snapshot)){let s=this.routeReuseStrategy.retrieve(i.snapshot);this.routeReuseStrategy.store(i.snapshot,null),a.children.onOutletReAttached(s.contexts),a.attachRef=s.componentRef,a.route=s.route.value,a.outlet&&a.outlet.attach(s.componentRef,s.route.value),Vr(s.route.value),this.activateChildRoutes(n,null,a.children)}else a.attachRef=null,a.route=i,a.outlet&&a.outlet.activateWith(i,a.injector),this.activateChildRoutes(n,null,a.children)}else this.activateChildRoutes(n,null,o)}},Rn=class{path;route;constructor(n){this.path=n,this.route=this.path[this.path.length-1]}},To=class{component;route;constructor(n,t){this.component=n,this.route=t}};function jm(e,n,t){let o=e._root,i=n?n._root:null;return li(o,i,t,[o.value])}function Um(e){let n=e.routeConfig?e.routeConfig.canActivateChild:null;return!n||n.length===0?null:{node:e,guards:n}}function Mo(e,n){let t=Symbol(),o=n.get(e,t);return o===t?typeof e=="function"&&!Ga(e)?e:n.get(e):o}function li(e,n,t,o,i={canDeactivateChecks:[],canActivateChecks:[]}){let r=Io(n);return e.children.forEach(a=>{Wm(a,r[a.value.outlet],t,o.concat([a.value]),i),delete r[a.value.outlet]}),Object.entries(r).forEach(([a,s])=>ui(s,t.getContext(a),i)),i}function Wm(e,n,t,o,i={canDeactivateChecks:[],canActivateChecks:[]}){let r=e.value,a=n?n.value:null,s=t?t.getContext(e.value.outlet):null;if(a&&r.routeConfig===a.routeConfig){let l=Gm(a,r,r.routeConfig.runGuardsAndResolvers);l?i.canActivateChecks.push(new Rn(o)):(r.data=a.data,r._resolvedData=a._resolvedData),r.component?li(e,n,s?s.children:null,o,i):li(e,n,t,o,i),l&&s&&s.outlet&&s.outlet.isActivated&&i.canDeactivateChecks.push(new To(s.outlet.component,a))}else a&&ui(n,s,i),i.canActivateChecks.push(new Rn(o)),r.component?li(e,null,s?s.children:null,o,i):li(e,null,t,o,i);return i}function Gm(e,n,t){if(typeof t=="function")return t(e,n);switch(t){case"pathParamsChange":return!so(e.url,n.url);case"pathParamsOrQueryParamsChange":return!so(e.url,n.url)||!Ot(e.queryParams,n.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!aa(e,n)||!Ot(e.queryParams,n.queryParams);case"paramsChange":default:return!aa(e,n)}}function ui(e,n,t){let o=Io(e),i=e.value;Object.entries(o).forEach(([r,a])=>{i.component?n?ui(a,n.children.getContext(r),t):ui(a,null,t):ui(a,n,t)}),i.component?n&&n.outlet&&n.outlet.isActivated?t.canDeactivateChecks.push(new To(n.outlet.component,i)):t.canDeactivateChecks.push(new To(null,i)):t.canDeactivateChecks.push(new To(null,i))}function wi(e){return typeof e=="function"}function qm(e){return typeof e=="boolean"}function Qm(e){return e&&wi(e.canLoad)}function Km(e){return e&&wi(e.canActivate)}function Ym(e){return e&&wi(e.canActivateChild)}function Zm(e){return e&&wi(e.canDeactivate)}function Xm(e){return e&&wi(e.canMatch)}function Jl(e){return e instanceof Va||e?.name==="EmptyError"}var hn=Symbol("INITIAL_VALUE");function Ao(){return bt(e=>Wi(e.map(n=>n.pipe(ho(1),Ua(hn)))).pipe(ue(n=>{for(let t of n)if(t!==!0){if(t===hn)return hn;if(t===!1||Jm(t))return t}return!0}),to(n=>n!==hn),ho(1)))}function Jm(e){return lo(e)||e instanceof gi}function ef(e,n){return ot(t=>{let{targetSnapshot:o,currentSnapshot:i,guards:{canActivateChecks:r,canDeactivateChecks:a}}=t;return a.length===0&&r.length===0?z(Ae(T({},t),{guardsResult:!0})):tf(a,o,i,e).pipe(ot(s=>s&&qm(s)?of(o,r,e,n):z(s)),ue(s=>Ae(T({},t),{guardsResult:s})))})}function tf(e,n,t,o){return Ze(e).pipe(ot(i=>lf(i.component,i.route,t,n,o)),Gt(i=>i!==!0,!0))}function of(e,n,t,o){return Ze(n).pipe(fo(i=>Ha(rf(i.route.parent,o),nf(i.route,o),sf(e,i.path,t),af(e,i.route,t))),Gt(i=>i!==!0,!0))}function nf(e,n){return e!==null&&n&&n(new ta(e)),z(!0)}function rf(e,n){return e!==null&&n&&n(new Jr(e)),z(!0)}function af(e,n,t){let o=n.routeConfig?n.routeConfig.canActivate:null;if(!o||o.length===0)return z(!0);let i=o.map(r=>rr(()=>{let a=xi(n)??t,s=Mo(r,a),l=Km(s)?s.canActivate(n,e):Et(a,()=>s(n,e));return Xt(l).pipe(Gt())}));return z(i).pipe(Ao())}function sf(e,n,t){let o=n[n.length-1],r=n.slice(0,n.length-1).reverse().map(a=>Um(a)).filter(a=>a!==null).map(a=>rr(()=>{let s=a.guards.map(l=>{let f=xi(a.node)??t,g=Mo(l,f),x=Ym(g)?g.canActivateChild(o,e):Et(f,()=>g(o,e));return Xt(x).pipe(Gt())});return z(s).pipe(Ao())}));return z(r).pipe(Ao())}function lf(e,n,t,o,i){let r=n&&n.routeConfig?n.routeConfig.canDeactivate:null;if(!r||r.length===0)return z(!0);let a=r.map(s=>{let l=xi(n)??i,f=Mo(s,l),g=Zm(f)?f.canDeactivate(e,n,t,o):Et(l,()=>f(e,n,t,o));return Xt(g).pipe(Gt())});return z(a).pipe(Ao())}function cf(e,n,t,o){let i=n.canLoad;if(i===void 0||i.length===0)return z(!0);let r=i.map(a=>{let s=Mo(a,e),l=Qm(s)?s.canLoad(n,t):Et(e,()=>s(n,t));return Xt(l)});return z(r).pipe(Ao(),ec(o))}function ec(e){return Pa(je(n=>{if(typeof n!="boolean")throw En(e,n)}),ue(n=>n===!0))}function df(e,n,t,o){let i=n.canMatch;if(!i||i.length===0)return z(!0);let r=i.map(a=>{let s=Mo(a,e),l=Xm(s)?s.canMatch(n,t):Et(e,()=>s(n,t));return Xt(l)});return z(r).pipe(Ao(),ec(o))}var bi=class{segmentGroup;constructor(n){this.segmentGroup=n||null}},vi=class extends Error{urlTree;constructor(n){super(),this.urlTree=n}};function wo(e){return Uo(new bi(e))}function uf(e){return Uo(new Te(4e3,!1))}function pf(e){return Uo(Zl(!1,st.GuardRejected))}var ca=class{urlSerializer;urlTree;constructor(n,t){this.urlSerializer=n,this.urlTree=t}lineralizeSegments(n,t){let o=[],i=t.root;for(;;){if(o=o.concat(i.segments),i.numberOfChildren===0)return z(o);if(i.numberOfChildren>1||!i.children[G])return uf(`${n.redirectTo}`);i=i.children[G]}}applyRedirectCommands(n,t,o,i,r){if(typeof t!="string"){let s=t,{queryParams:l,fragment:f,routeConfig:g,url:x,outlet:S,params:D,data:j,title:ee}=i,xe=Et(r,()=>s({params:D,data:j,queryParams:l,fragment:f,routeConfig:g,url:x,outlet:S,title:ee}));if(xe instanceof Ht)throw new vi(xe);t=xe}let a=this.applyRedirectCreateUrlTree(t,this.urlSerializer.parse(t),n,o);if(t[0]==="/")throw new vi(a);return a}applyRedirectCreateUrlTree(n,t,o,i){let r=this.createSegmentGroup(n,t.root,o,i);return new Ht(r,this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(n,t){let o={};return Object.entries(n).forEach(([i,r])=>{if(typeof r=="string"&&r[0]===":"){let s=r.substring(1);o[i]=t[s]}else o[i]=r}),o}createSegmentGroup(n,t,o,i){let r=this.createSegments(n,t.segments,o,i),a={};return Object.entries(t.children).forEach(([s,l])=>{a[s]=this.createSegmentGroup(n,l,o,i)}),new le(r,a)}createSegments(n,t,o,i){return t.map(r=>r.path[0]===":"?this.findPosParam(n,r,i):this.findOrReturn(r,o))}findPosParam(n,t,o){let i=o[t.path.substring(1)];if(!i)throw new Te(4001,!1);return i}findOrReturn(n,t){let o=0;for(let i of t){if(i.path===n.path)return t.splice(o),i;o++}return n}},da={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function mf(e,n,t,o,i){let r=tc(e,n,t);return r.matched?(o=Mm(n,o),df(o,n,t,i).pipe(ue(a=>a===!0?r:T({},da)))):z(r)}function tc(e,n,t){if(n.path==="**")return ff(t);if(n.path==="")return n.pathMatch==="full"&&(e.hasChildren()||t.length>0)?T({},da):{matched:!0,consumedSegments:[],remainingSegments:t,parameters:{},positionalParamSegments:{}};let i=(n.matcher||lm)(t,e,n);if(!i)return T({},da);let r={};Object.entries(i.posParams??{}).forEach(([s,l])=>{r[s]=l.path});let a=i.consumed.length>0?T(T({},r),i.consumed[i.consumed.length-1].parameters):r;return{matched:!0,consumedSegments:i.consumed,remainingSegments:t.slice(i.consumed.length),parameters:a,positionalParamSegments:i.posParams??{}}}function ff(e){return{matched:!0,parameters:e.length>0?Ml(e).parameters:{},consumedSegments:e,remainingSegments:[],positionalParamSegments:{}}}function Rl(e,n,t,o){return t.length>0&&bf(e,t,o)?{segmentGroup:new le(n,gf(o,new le(t,e.children))),slicedSegments:[]}:t.length===0&&vf(e,t,o)?{segmentGroup:new le(e.segments,hf(e,t,o,e.children)),slicedSegments:t}:{segmentGroup:new le(e.segments,e.children),slicedSegments:t}}function hf(e,n,t,o){let i={};for(let r of t)if(An(e,n,r)&&!o[wt(r)]){let a=new le([],{});i[wt(r)]=a}return T(T({},o),i)}function gf(e,n){let t={};t[G]=n;for(let o of e)if(o.path===""&&wt(o)!==G){let i=new le([],{});t[wt(o)]=i}return t}function bf(e,n,t){return t.some(o=>An(e,n,o)&&wt(o)!==G)}function vf(e,n,t){return t.some(o=>An(e,n,o))}function An(e,n,t){return(e.hasChildren()||n.length>0)&&t.pathMatch==="full"?!1:t.path===""}function yf(e,n,t){return n.length===0&&!e.children[t]}var ua=class{};function _f(e,n,t,o,i,r,a="emptyOnly"){return new pa(e,n,t,o,i,a,r).recognize()}var xf=31,pa=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(n,t,o,i,r,a,s){this.injector=n,this.configLoader=t,this.rootComponentType=o,this.config=i,this.urlTree=r,this.paramsInheritanceStrategy=a,this.urlSerializer=s,this.applyRedirects=new ca(this.urlSerializer,this.urlTree)}noMatchError(n){return new Te(4002,`'${n.segmentGroup}'`)}recognize(){let n=Rl(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(n).pipe(ue(({children:t,rootSnapshot:o})=>{let i=new at(o,t),r=new Tn("",i),a=Tm(o,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,r.url=this.urlSerializer.serialize(a),{state:r,tree:a}}))}match(n){let t=new ko([],Object.freeze({}),Object.freeze(T({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),G,this.rootComponentType,null,{});return this.processSegmentGroup(this.injector,this.config,n,G,t).pipe(ue(o=>({children:o,rootSnapshot:t})),mo(o=>{if(o instanceof vi)return this.urlTree=o.urlTree,this.match(o.urlTree.root);throw o instanceof bi?this.noMatchError(o):o}))}processSegmentGroup(n,t,o,i,r){return o.segments.length===0&&o.hasChildren()?this.processChildren(n,t,o,r):this.processSegment(n,t,o,o.segments,i,!0,r).pipe(ue(a=>a instanceof at?[a]:[]))}processChildren(n,t,o,i){let r=[];for(let a of Object.keys(o.children))a==="primary"?r.unshift(a):r.push(a);return Ze(r).pipe(fo(a=>{let s=o.children[a],l=Bm(t,a);return this.processSegmentGroup(n,l,s,a,i)}),ja((a,s)=>(a.push(...s),a)),ar(null),za(),ot(a=>{if(a===null)return wo(o);let s=oc(a);return Cf(s),z(s)}))}processSegment(n,t,o,i,r,a,s){return Ze(t).pipe(fo(l=>this.processSegmentAgainstRoute(l._injector??n,t,l,o,i,r,a,s).pipe(mo(f=>{if(f instanceof bi)return z(null);throw f}))),Gt(l=>!!l),mo(l=>{if(Jl(l))return yf(o,i,r)?z(new ua):wo(o);throw l}))}processSegmentAgainstRoute(n,t,o,i,r,a,s,l){return wt(o)!==a&&(a===G||!An(i,r,o))?wo(i):o.redirectTo===void 0?this.matchSegmentAgainstRoute(n,i,o,r,a,l):this.allowRedirects&&s?this.expandSegmentAgainstRouteUsingRedirect(n,i,t,o,r,a,l):wo(i)}expandSegmentAgainstRouteUsingRedirect(n,t,o,i,r,a,s){let{matched:l,parameters:f,consumedSegments:g,positionalParamSegments:x,remainingSegments:S}=tc(t,i,r);if(!l)return wo(t);typeof i.redirectTo=="string"&&i.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>xf&&(this.allowRedirects=!1));let D=new ko(r,f,Object.freeze(T({},this.urlTree.queryParams)),this.urlTree.fragment,Dl(i),wt(i),i.component??i._loadedComponent??null,i,$l(i)),j=kn(D,s,this.paramsInheritanceStrategy);D.params=Object.freeze(j.params),D.data=Object.freeze(j.data);let ee=this.applyRedirects.applyRedirectCommands(g,i.redirectTo,x,D,n);return this.applyRedirects.lineralizeSegments(i,ee).pipe(ot(xe=>this.processSegment(n,o,t,xe.concat(S),a,!1,s)))}matchSegmentAgainstRoute(n,t,o,i,r,a){let s=mf(t,o,i,n,this.urlSerializer);return o.path==="**"&&(t.children={}),s.pipe(bt(l=>l.matched?(n=o._injector??n,this.getChildConfig(n,o,i).pipe(bt(({routes:f})=>{let g=o._loadedInjector??n,{parameters:x,consumedSegments:S,remainingSegments:D}=l,j=new ko(S,x,Object.freeze(T({},this.urlTree.queryParams)),this.urlTree.fragment,Dl(o),wt(o),o.component??o._loadedComponent??null,o,$l(o)),ee=kn(j,a,this.paramsInheritanceStrategy);j.params=Object.freeze(ee.params),j.data=Object.freeze(ee.data);let{segmentGroup:xe,slicedSegments:ze}=Rl(t,S,D,f);if(ze.length===0&&xe.hasChildren())return this.processChildren(g,f,xe,j).pipe(ue(ct=>new at(j,ct)));if(f.length===0&&ze.length===0)return z(new at(j,[]));let Ge=wt(o)===r;return this.processSegment(g,f,xe,ze,Ge?G:r,!0,j).pipe(ue(ct=>new at(j,ct instanceof at?[ct]:[])))}))):wo(t)))}getChildConfig(n,t,o){return t.children?z({routes:t.children,injector:n}):t.loadChildren?t._loadedRoutes!==void 0?z({routes:t._loadedRoutes,injector:t._loadedInjector}):cf(n,t,o,this.urlSerializer).pipe(ot(i=>i?this.configLoader.loadChildren(n,t).pipe(je(r=>{t._loadedRoutes=r.routes,t._loadedInjector=r.injector})):pf(t))):z({routes:[],injector:n})}};function Cf(e){e.sort((n,t)=>n.value.outlet===G?-1:t.value.outlet===G?1:n.value.outlet.localeCompare(t.value.outlet))}function wf(e){let n=e.value.routeConfig;return n&&n.path===""}function oc(e){let n=[],t=new Set;for(let o of e){if(!wf(o)){n.push(o);continue}let i=n.find(r=>o.value.routeConfig===r.value.routeConfig);i!==void 0?(i.children.push(...o.children),t.add(i)):n.push(o)}for(let o of t){let i=oc(o.children);n.push(new at(o.value,i))}return n.filter(o=>!t.has(o))}function Dl(e){return e.data||{}}function $l(e){return e.resolve||{}}function If(e,n,t,o,i,r){return ot(a=>_f(e,n,t,o,a.extractedUrl,i,r).pipe(ue(({state:s,tree:l})=>Ae(T({},a),{targetSnapshot:s,urlAfterRedirects:l}))))}function Sf(e,n){return ot(t=>{let{targetSnapshot:o,guards:{canActivateChecks:i}}=t;if(!i.length)return z(t);let r=new Set(i.map(l=>l.route)),a=new Set;for(let l of r)if(!a.has(l))for(let f of ic(l))a.add(f);let s=0;return Ze(a).pipe(fo(l=>r.has(l)?kf(l,o,e,n):(l.data=kn(l,l.parent,e).resolve,z(void 0))),je(()=>s++),sr(1),ot(l=>s===a.size?z(t):Ft))})}function ic(e){let n=e.children.map(t=>ic(t)).flat();return[e,...n]}function kf(e,n,t,o){let i=e.routeConfig,r=e._resolve;return i?.title!==void 0&&!Kl(i)&&(r[_i]=i.title),Tf(r,e,n,o).pipe(ue(a=>(e._resolvedData=a,e.data=kn(e,e.parent,t).resolve,null)))}function Tf(e,n,t,o){let i=jr(e);if(i.length===0)return z({});let r={};return Ze(i).pipe(ot(a=>Ef(e[a],n,t,o).pipe(Gt(),je(s=>{if(s instanceof gi)throw En(new Ro,s);r[a]=s}))),sr(1),ue(()=>r),mo(a=>Jl(a)?Ft:Uo(a)))}function Ef(e,n,t,o){let i=xi(n)??o,r=Mo(e,i),a=r.resolve?r.resolve(n,t):Et(i,()=>r(n,t));return Xt(a)}function Hr(e){return bt(n=>{let t=e(n);return t?Ze(t).pipe(ue(()=>n)):z(n)})}var nc=(()=>{class e{buildTitle(t){let o,i=t.root;for(;i!==void 0;)o=this.getResolvedTitleForRoute(i)??o,i=i.children.find(r=>r.outlet===G);return o}getResolvedTitleForRoute(t){return t.data[_i]}static \u0275fac=function(o){return new(o||e)};static \u0275prov=A({token:e,factory:()=>y(Rf),providedIn:"root"})}return e})(),Rf=(()=>{class e extends nc{title;constructor(t){super(),this.title=t}updateTitle(t){let o=this.buildTitle(t);o!==void 0&&this.title.setTitle(o)}static \u0275fac=function(o){return new(o||e)(pe(zs))};static \u0275prov=A({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Ii=new Re("",{providedIn:"root",factory:()=>({})}),Df=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275cmp=I({type:e,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(o,i){o&1&&h(0,"router-outlet")},dependencies:[ha],encapsulation:2})}return e})();function ga(e){let n=e.children&&e.children.map(ga),t=n?Ae(T({},e),{children:n}):T({},e);return!t.component&&!t.loadComponent&&(n||t.loadChildren)&&t.outlet&&t.outlet!==G&&(t.component=Df),t}var yi=new Re(""),ba=(()=>{class e{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=y(tn);loadComponent(t){if(this.componentLoaders.get(t))return this.componentLoaders.get(t);if(t._loadedComponent)return z(t._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(t);let o=Xt(t.loadComponent()).pipe(ue(rc),je(r=>{this.onLoadEndListener&&this.onLoadEndListener(t),t._loadedComponent=r}),Gi(()=>{this.componentLoaders.delete(t)})),i=new nr(o,()=>new Tt).pipe(ir());return this.componentLoaders.set(t,i),i}loadChildren(t,o){if(this.childrenLoaders.get(o))return this.childrenLoaders.get(o);if(o._loadedRoutes)return z({routes:o._loadedRoutes,injector:o._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(o);let r=$f(o,this.compiler,t,this.onLoadEndListener).pipe(Gi(()=>{this.childrenLoaders.delete(o)})),a=new nr(r,()=>new Tt).pipe(ir());return this.childrenLoaders.set(o,a),a}static \u0275fac=function(o){return new(o||e)};static \u0275prov=A({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function $f(e,n,t,o){return Xt(e.loadChildren()).pipe(ue(rc),ot(i=>i instanceof as||Array.isArray(i)?z(i):Ze(n.compileModuleAsync(i))),ue(i=>{o&&o(e);let r,a,s=!1;return Array.isArray(i)?(a=i,s=!0):(r=i.create(t).injector,a=r.get(yi,[],{optional:!0,self:!0}).flat()),{routes:a.map(ga),injector:r}}))}function Af(e){return e&&typeof e=="object"&&"default"in e}function rc(e){return Af(e)?e.default:e}var va=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275prov=A({token:e,factory:()=>y(Of),providedIn:"root"})}return e})(),Of=(()=>{class e{shouldProcessUrl(t){return!0}extract(t){return t}merge(t,o){return t}static \u0275fac=function(o){return new(o||e)};static \u0275prov=A({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),ac=new Re(""),sc=new Re("");function Mf(e,n,t){let o=e.get(sc),i=e.get(ve);return e.get(Me).runOutsideAngular(()=>{if(!i.startViewTransition||o.skipNextTransition)return o.skipNextTransition=!1,new Promise(f=>setTimeout(f));let r,a=new Promise(f=>{r=f}),s=i.startViewTransition(()=>(r(),Bf(e))),{onViewTransitionCreated:l}=o;return l&&Et(e,()=>l({transition:s,from:n,to:t})),a})}function Bf(e){return new Promise(n=>{is({read:()=>setTimeout(n)},{injector:e})})}var lc=new Re(""),On=(()=>{class e{currentNavigation=null;currentTransition=null;lastSuccessfulNavigation=null;events=new Tt;transitionAbortSubject=new Tt;configLoader=y(ba);environmentInjector=y(Go);destroyRef=y(Ka);urlSerializer=y(Oo);rootContexts=y(Ci);location=y(Jo);inputBindingEnabled=y($n,{optional:!0})!==null;titleStrategy=y(nc);options=y(Ii,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=y(va);createViewTransition=y(ac,{optional:!0});navigationErrorHandler=y(lc,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>z(void 0);rootComponentType=null;destroyed=!1;constructor(){let t=i=>this.events.next(new Zr(i)),o=i=>this.events.next(new Xr(i));this.configLoader.onLoadEndListener=o,this.configLoader.onLoadStartListener=t,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(t){let o=++this.navigationId;this.transitions?.next(Ae(T(T({},this.transitions.value),t),{id:o}))}setupNavigations(t,o,i){return this.transitions=new dt({id:0,currentUrlTree:o,currentRawUrl:o,extractedUrl:this.urlHandlingStrategy.extract(o),urlAfterRedirects:this.urlHandlingStrategy.extract(o),rawUrl:o,extras:{},resolve:()=>{},reject:()=>{},promise:Promise.resolve(!0),source:di,restoredState:null,currentSnapshot:i.snapshot,targetSnapshot:null,currentRouterState:i,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.transitions.pipe(to(r=>r.id!==0),ue(r=>Ae(T({},r),{extractedUrl:this.urlHandlingStrategy.extract(r.rawUrl)})),bt(r=>{let a=!1,s=!1;return z(r).pipe(bt(l=>{if(this.navigationId>r.id)return this.cancelNavigationTransition(r,"",st.SupersededByNewNavigation),Ft;this.currentTransition=r,this.currentNavigation={id:l.id,initialUrl:l.rawUrl,extractedUrl:l.extractedUrl,targetBrowserUrl:typeof l.extras.browserUrl=="string"?this.urlSerializer.parse(l.extras.browserUrl):l.extras.browserUrl,trigger:l.source,extras:l.extras,previousNavigation:this.lastSuccessfulNavigation?Ae(T({},this.lastSuccessfulNavigation),{previousNavigation:null}):null};let f=!t.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),g=l.extras.onSameUrlNavigation??t.onSameUrlNavigation;if(!f&&g!=="reload"){let x="";return this.events.next(new Yt(l.id,this.urlSerializer.serialize(l.rawUrl),x,xn.IgnoredSameUrlNavigation)),l.resolve(!1),Ft}if(this.urlHandlingStrategy.shouldProcessUrl(l.rawUrl))return z(l).pipe(bt(x=>{let S=this.transitions?.getValue();return this.events.next(new Do(x.id,this.urlSerializer.serialize(x.extractedUrl),x.source,x.restoredState)),S!==this.transitions?.getValue()?Ft:Promise.resolve(x)}),If(this.environmentInjector,this.configLoader,this.rootComponentType,t.config,this.urlSerializer,this.paramsInheritanceStrategy),je(x=>{r.targetSnapshot=x.targetSnapshot,r.urlAfterRedirects=x.urlAfterRedirects,this.currentNavigation=Ae(T({},this.currentNavigation),{finalUrl:x.urlAfterRedirects});let S=new Cn(x.id,this.urlSerializer.serialize(x.extractedUrl),this.urlSerializer.serialize(x.urlAfterRedirects),x.targetSnapshot);this.events.next(S)}));if(f&&this.urlHandlingStrategy.shouldProcessUrl(l.currentRawUrl)){let{id:x,extractedUrl:S,source:D,restoredState:j,extras:ee}=l,xe=new Do(x,this.urlSerializer.serialize(S),D,j);this.events.next(xe);let ze=ql(this.rootComponentType).snapshot;return this.currentTransition=r=Ae(T({},l),{targetSnapshot:ze,urlAfterRedirects:S,extras:Ae(T({},ee),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.finalUrl=S,z(r)}else{let x="";return this.events.next(new Yt(l.id,this.urlSerializer.serialize(l.extractedUrl),x,xn.IgnoredByUrlHandlingStrategy)),l.resolve(!1),Ft}}),je(l=>{let f=new qr(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(f)}),ue(l=>(this.currentTransition=r=Ae(T({},l),{guards:jm(l.targetSnapshot,l.currentSnapshot,this.rootContexts)}),r)),ef(this.environmentInjector,l=>this.events.next(l)),je(l=>{if(r.guardsResult=l.guardsResult,l.guardsResult&&typeof l.guardsResult!="boolean")throw En(this.urlSerializer,l.guardsResult);let f=new Qr(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot,!!l.guardsResult);this.events.next(f)}),to(l=>l.guardsResult?!0:(this.cancelNavigationTransition(l,"",st.GuardRejected),!1)),Hr(l=>{if(l.guards.canActivateChecks.length)return z(l).pipe(je(f=>{let g=new Kr(f.id,this.urlSerializer.serialize(f.extractedUrl),this.urlSerializer.serialize(f.urlAfterRedirects),f.targetSnapshot);this.events.next(g)}),bt(f=>{let g=!1;return z(f).pipe(Sf(this.paramsInheritanceStrategy,this.environmentInjector),je({next:()=>g=!0,complete:()=>{g||this.cancelNavigationTransition(f,"",st.NoDataFromResolver)}}))}),je(f=>{let g=new Yr(f.id,this.urlSerializer.serialize(f.extractedUrl),this.urlSerializer.serialize(f.urlAfterRedirects),f.targetSnapshot);this.events.next(g)}))}),Hr(l=>{let f=g=>{let x=[];g.routeConfig?.loadComponent&&!g.routeConfig._loadedComponent&&x.push(this.configLoader.loadComponent(g.routeConfig).pipe(je(S=>{g.component=S}),ue(()=>{})));for(let S of g.children)x.push(...f(S));return x};return Wi(f(l.targetSnapshot.root)).pipe(ar(null),ho(1))}),Hr(()=>this.afterPreactivation()),bt(()=>{let{currentSnapshot:l,targetSnapshot:f}=r,g=this.createViewTransition?.(this.environmentInjector,l.root,f.root);return g?Ze(g).pipe(ue(()=>r)):z(r)}),ue(l=>{let f=Pm(t.routeReuseStrategy,l.targetSnapshot,l.currentRouterState);return this.currentTransition=r=Ae(T({},l),{targetRouterState:f}),this.currentNavigation.targetRouterState=f,r}),je(()=>{this.events.next(new fi)}),zm(this.rootContexts,t.routeReuseStrategy,l=>this.events.next(l),this.inputBindingEnabled),ho(1),je({next:l=>{a=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new It(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects))),this.titleStrategy?.updateTitle(l.targetRouterState.snapshot),l.resolve(!0)},complete:()=>{a=!0}}),Wa(this.transitionAbortSubject.pipe(je(l=>{throw l}))),Gi(()=>{!a&&!s&&this.cancelNavigationTransition(r,"",st.SupersededByNewNavigation),this.currentTransition?.id===r.id&&(this.currentNavigation=null,this.currentTransition=null)}),mo(l=>{if(this.destroyed)return r.resolve(!1),Ft;if(s=!0,Xl(l))this.events.next(new Vt(r.id,this.urlSerializer.serialize(r.extractedUrl),l.message,l.cancellationCode)),Hm(l)?this.events.next(new $o(l.url,l.navigationBehaviorOptions)):r.resolve(!1);else{let f=new mi(r.id,this.urlSerializer.serialize(r.extractedUrl),l,r.targetSnapshot??void 0);try{let g=Et(this.environmentInjector,()=>this.navigationErrorHandler?.(f));if(g instanceof gi){let{message:x,cancellationCode:S}=En(this.urlSerializer,g);this.events.next(new Vt(r.id,this.urlSerializer.serialize(r.extractedUrl),x,S)),this.events.next(new $o(g.redirectTo,g.navigationBehaviorOptions))}else throw this.events.next(f),l}catch(g){this.options.resolveNavigationPromiseOnError?r.resolve(!1):r.reject(g)}}return Ft}))}))}cancelNavigationTransition(t,o,i){let r=new Vt(t.id,this.urlSerializer.serialize(t.extractedUrl),o,i);this.events.next(r),t.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let t=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),o=this.currentNavigation?.targetBrowserUrl??this.currentNavigation?.extractedUrl;return t.toString()!==o?.toString()&&!this.currentNavigation?.extras.skipLocationChange}static \u0275fac=function(o){return new(o||e)};static \u0275prov=A({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function Ff(e){return e!==di}var Lf=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275prov=A({token:e,factory:()=>y(Pf),providedIn:"root"})}return e})(),ma=class{shouldDetach(n){return!1}store(n,t){}shouldAttach(n){return!1}retrieve(n){return null}shouldReuseRoute(n,t){return n.routeConfig===t.routeConfig}},Pf=(()=>{class e extends ma{static \u0275fac=(()=>{let t;return function(i){return(t||(t=k(e)))(i||e)}})();static \u0275prov=A({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),cc=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275prov=A({token:e,factory:()=>y(Nf),providedIn:"root"})}return e})(),Nf=(()=>{class e extends cc{location=y(Jo);urlSerializer=y(Oo);options=y(Ii,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";urlHandlingStrategy=y(va);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new Ht;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}currentPageId=0;lastSuccessfulId=-1;restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}routerState=ql(null);getRouterState(){return this.routerState}stateMemento=this.createStateMemento();createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}registerNonRouterCurrentEntryChangeListener(t){return this.location.subscribe(o=>{o.type==="popstate"&&t(o.url,o.state)})}handleRouterEvent(t,o){if(t instanceof Do)this.stateMemento=this.createStateMemento();else if(t instanceof Yt)this.rawUrlTree=o.initialUrl;else if(t instanceof Cn){if(this.urlUpdateStrategy==="eager"&&!o.extras.skipLocationChange){let i=this.urlHandlingStrategy.merge(o.finalUrl,o.initialUrl);this.setBrowserUrl(o.targetBrowserUrl??i,o)}}else t instanceof fi?(this.currentUrlTree=o.finalUrl,this.rawUrlTree=this.urlHandlingStrategy.merge(o.finalUrl,o.initialUrl),this.routerState=o.targetRouterState,this.urlUpdateStrategy==="deferred"&&!o.extras.skipLocationChange&&this.setBrowserUrl(o.targetBrowserUrl??this.rawUrlTree,o)):t instanceof Vt&&(t.code===st.GuardRejected||t.code===st.NoDataFromResolver)?this.restoreHistory(o):t instanceof mi?this.restoreHistory(o,!0):t instanceof It&&(this.lastSuccessfulId=t.id,this.currentPageId=this.browserPageId)}setBrowserUrl(t,o){let i=t instanceof Ht?this.urlSerializer.serialize(t):t;if(this.location.isCurrentPathEqualTo(i)||o.extras.replaceUrl){let r=this.browserPageId,a=T(T({},o.extras.state),this.generateNgRouterState(o.id,r));this.location.replaceState(i,"",a)}else{let r=T(T({},o.extras.state),this.generateNgRouterState(o.id,this.browserPageId+1));this.location.go(i,"",r)}}restoreHistory(t,o=!1){if(this.canceledNavigationResolution==="computed"){let i=this.browserPageId,r=this.currentPageId-i;r!==0?this.location.historyGo(r):this.currentUrlTree===t.finalUrl&&r===0&&(this.resetState(t),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(o&&this.resetState(t),this.resetUrlToCurrentUrlTree())}resetState(t){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,t.finalUrl??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(t,o){return this.canceledNavigationResolution==="computed"?{navigationId:t,\u0275routerPageId:o}:{navigationId:t}}static \u0275fac=(()=>{let t;return function(i){return(t||(t=k(e)))(i||e)}})();static \u0275prov=A({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function dc(e,n){e.events.pipe(to(t=>t instanceof It||t instanceof Vt||t instanceof mi||t instanceof Yt),ue(t=>t instanceof It||t instanceof Yt?0:(t instanceof Vt?t.code===st.Redirect||t.code===st.SupersededByNewNavigation:!1)?2:1),to(t=>t!==2),ho(1)).subscribe(()=>{n()})}var Vf={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},Hf={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},zt=(()=>{class e{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=y(mr);stateManager=y(cc);options=y(Ii,{optional:!0})||{};pendingTasks=y(Za);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=y(On);urlSerializer=y(Oo);location=y(Jo);urlHandlingStrategy=y(va);_events=new Tt;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=y(Lf);onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=y(yi,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!y($n,{optional:!0});constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this,this.currentUrlTree,this.routerState).subscribe({error:t=>{this.console.warn(t)}}),this.subscribeToNavigationEvents()}eventsSubscription=new La;subscribeToNavigationEvents(){let t=this.navigationTransitions.events.subscribe(o=>{try{let i=this.navigationTransitions.currentTransition,r=this.navigationTransitions.currentNavigation;if(i!==null&&r!==null){if(this.stateManager.handleRouterEvent(o,r),o instanceof Vt&&o.code!==st.Redirect&&o.code!==st.SupersededByNewNavigation)this.navigated=!0;else if(o instanceof It)this.navigated=!0;else if(o instanceof $o){let a=o.navigationBehaviorOptions,s=this.urlHandlingStrategy.merge(o.url,i.currentRawUrl),l=T({browserUrl:i.extras.browserUrl,info:i.extras.info,skipLocationChange:i.extras.skipLocationChange,replaceUrl:i.extras.replaceUrl||this.urlUpdateStrategy==="eager"||Ff(i.source)},a);this.scheduleNavigation(s,di,null,l,{resolve:i.resolve,reject:i.reject,promise:i.promise})}}jf(o)&&this._events.next(o)}catch(i){this.navigationTransitions.transitionAbortSubject.next(i)}});this.eventsSubscription.add(t)}resetRootComponentType(t){this.routerState.root.component=t,this.navigationTransitions.rootComponentType=t}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),di,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((t,o)=>{setTimeout(()=>{this.navigateToSyncWithBrowser(t,"popstate",o)},0)})}navigateToSyncWithBrowser(t,o,i){let r={replaceUrl:!0},a=i?.navigationId?i:null;if(i){let l=T({},i);delete l.navigationId,delete l.\u0275routerPageId,Object.keys(l).length!==0&&(r.state=l)}let s=this.parseUrl(t);this.scheduleNavigation(s,o,a,r)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(t){this.config=t.map(ga),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(t,o={}){let{relativeTo:i,queryParams:r,fragment:a,queryParamsHandling:s,preserveFragment:l}=o,f=l?this.currentUrlTree.fragment:a,g=null;switch(s??this.options.defaultQueryParamsHandling){case"merge":g=T(T({},this.currentUrlTree.queryParams),r);break;case"preserve":g=this.currentUrlTree.queryParams;break;default:g=r||null}g!==null&&(g=this.removeEmptyProps(g));let x;try{let S=i?i.snapshot:this.routerState.snapshot.root;x=jl(S)}catch{(typeof t[0]!="string"||t[0][0]!=="/")&&(t=[]),x=this.currentUrlTree.root}return Ul(x,t,g,f??null)}navigateByUrl(t,o={skipLocationChange:!1}){let i=lo(t)?t:this.parseUrl(t),r=this.urlHandlingStrategy.merge(i,this.rawUrlTree);return this.scheduleNavigation(r,di,null,o)}navigate(t,o={skipLocationChange:!1}){return zf(t),this.navigateByUrl(this.createUrlTree(t,o),o)}serializeUrl(t){return this.urlSerializer.serialize(t)}parseUrl(t){try{return this.urlSerializer.parse(t)}catch{return this.urlSerializer.parse("/")}}isActive(t,o){let i;if(o===!0?i=T({},Vf):o===!1?i=T({},Hf):i=o,lo(t))return Il(this.currentUrlTree,t,i);let r=this.parseUrl(t);return Il(this.currentUrlTree,r,i)}removeEmptyProps(t){return Object.entries(t).reduce((o,[i,r])=>(r!=null&&(o[i]=r),o),{})}scheduleNavigation(t,o,i,r,a){if(this.disposed)return Promise.resolve(!1);let s,l,f;a?(s=a.resolve,l=a.reject,f=a.promise):f=new Promise((x,S)=>{s=x,l=S});let g=this.pendingTasks.add();return dc(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(g))}),this.navigationTransitions.handleNavigationRequest({source:o,restoredState:i,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:t,extras:r,resolve:s,reject:l,promise:f,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),f.catch(x=>Promise.reject(x))}static \u0275fac=function(o){return new(o||e)};static \u0275prov=A({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function zf(e){for(let n=0;n<e.length;n++)if(e[n]==null)throw new Te(4008,!1)}function jf(e){return!(e instanceof fi)&&!(e instanceof $o)}var St=(()=>{class e{router;route;tabIndexAttribute;renderer;el;locationStrategy;href=null;target;queryParams;fragment;queryParamsHandling;state;info;relativeTo;isAnchorElement;subscription;onChanges=new Tt;constructor(t,o,i,r,a,s){this.router=t,this.route=o,this.tabIndexAttribute=i,this.renderer=r,this.el=a,this.locationStrategy=s;let l=a.nativeElement.tagName?.toLowerCase();this.isAnchorElement=l==="a"||l==="area",this.isAnchorElement?this.subscription=t.events.subscribe(f=>{f instanceof It&&this.updateHref()}):this.setTabIndexIfNotOnNativeEl("0")}preserveFragment=!1;skipLocationChange=!1;replaceUrl=!1;setTabIndexIfNotOnNativeEl(t){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",t)}ngOnChanges(t){this.isAnchorElement&&this.updateHref(),this.onChanges.next(this)}routerLinkInput=null;set routerLink(t){t==null?(this.routerLinkInput=null,this.setTabIndexIfNotOnNativeEl(null)):(lo(t)?this.routerLinkInput=t:this.routerLinkInput=Array.isArray(t)?t:[t],this.setTabIndexIfNotOnNativeEl("0"))}onClick(t,o,i,r,a){let s=this.urlTree;if(s===null||this.isAnchorElement&&(t!==0||o||i||r||a||typeof this.target=="string"&&this.target!="_self"))return!0;let l={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(s,l),!this.isAnchorElement}ngOnDestroy(){this.subscription?.unsubscribe()}updateHref(){let t=this.urlTree;this.href=t!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(t)):null;let o=this.href===null?null:ns(this.href,this.el.nativeElement.tagName.toLowerCase(),"href");this.applyAttributeValue("href",o)}applyAttributeValue(t,o){let i=this.renderer,r=this.el.nativeElement;o!==null?i.setAttribute(r,t,o):i.removeAttribute(r,t)}get urlTree(){return this.routerLinkInput===null?null:lo(this.routerLinkInput)?this.routerLinkInput:this.router.createUrlTree(this.routerLinkInput,{relativeTo:this.relativeTo!==void 0?this.relativeTo:this.route,queryParams:this.queryParams,fragment:this.fragment,queryParamsHandling:this.queryParamsHandling,preserveFragment:this.preserveFragment})}static \u0275fac=function(o){return new(o||e)(Q(zt),Q(Zt),Qa("tabindex"),Q(io),Q(Je),Q(Xo))};static \u0275dir=$e({type:e,selectors:[["","routerLink",""]],hostVars:1,hostBindings:function(o,i){o&1&&M("click",function(a){return i.onClick(a.button,a.ctrlKey,a.shiftKey,a.altKey,a.metaKey)}),o&2&&_("target",i.target)},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",$],skipLocationChange:[2,"skipLocationChange","skipLocationChange",$],replaceUrl:[2,"replaceUrl","replaceUrl",$],routerLink:"routerLink"},features:[De]})}return e})(),jt=(()=>{class e{router;element;renderer;cdr;link;links;classes=[];routerEventsSubscription;linkInputChangesSubscription;_isActive=!1;get isActive(){return this._isActive}routerLinkActiveOptions={exact:!1};ariaCurrentWhenActive;isActiveChange=new q;constructor(t,o,i,r,a){this.router=t,this.element=o,this.renderer=i,this.cdr=r,this.link=a,this.routerEventsSubscription=t.events.subscribe(s=>{s instanceof It&&this.update()})}ngAfterContentInit(){z(this.links.changes,z(null)).pipe(Wo()).subscribe(t=>{this.update(),this.subscribeToEachLinkOnChanges()})}subscribeToEachLinkOnChanges(){this.linkInputChangesSubscription?.unsubscribe();let t=[...this.links.toArray(),this.link].filter(o=>!!o).map(o=>o.onChanges);this.linkInputChangesSubscription=Ze(t).pipe(Wo()).subscribe(o=>{this._isActive!==this.isLinkActive(this.router)(o)&&this.update()})}set routerLinkActive(t){let o=Array.isArray(t)?t:t.split(" ");this.classes=o.filter(i=>!!i)}ngOnChanges(t){this.update()}ngOnDestroy(){this.routerEventsSubscription.unsubscribe(),this.linkInputChangesSubscription?.unsubscribe()}update(){!this.links||!this.router.navigated||queueMicrotask(()=>{let t=this.hasActiveLinks();this.classes.forEach(o=>{t?this.renderer.addClass(this.element.nativeElement,o):this.renderer.removeClass(this.element.nativeElement,o)}),t&&this.ariaCurrentWhenActive!==void 0?this.renderer.setAttribute(this.element.nativeElement,"aria-current",this.ariaCurrentWhenActive.toString()):this.renderer.removeAttribute(this.element.nativeElement,"aria-current"),this._isActive!==t&&(this._isActive=t,this.cdr.markForCheck(),this.isActiveChange.emit(t))})}isLinkActive(t){let o=Uf(this.routerLinkActiveOptions)?this.routerLinkActiveOptions:this.routerLinkActiveOptions.exact||!1;return i=>{let r=i.urlTree;return r?t.isActive(r,o):!1}}hasActiveLinks(){let t=this.isLinkActive(this.router);return this.link&&t(this.link)||this.links.some(t)}static \u0275fac=function(o){return new(o||e)(Q(zt),Q(Je),Q(io),Q(Dt),Q(St,8))};static \u0275dir=$e({type:e,selectors:[["","routerLinkActive",""]],contentQueries:function(o,i,r){if(o&1&&B(r,St,5),o&2){let a;E(a=R())&&(i.links=a)}},inputs:{routerLinkActiveOptions:"routerLinkActiveOptions",ariaCurrentWhenActive:"ariaCurrentWhenActive",routerLinkActive:"routerLinkActive"},outputs:{isActiveChange:"isActiveChange"},exportAs:["routerLinkActive"],features:[De]})}return e})();function Uf(e){return!!e.paths}var Dn=class{};var Wf=(()=>{class e{router;injector;preloadingStrategy;loader;subscription;constructor(t,o,i,r,a){this.router=t,this.injector=i,this.preloadingStrategy=r,this.loader=a}setUpPreloading(){this.subscription=this.router.events.pipe(to(t=>t instanceof It),fo(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}processRoutes(t,o){let i=[];for(let r of o){r.providers&&!r._injector&&(r._injector=pr(r.providers,t,`Route: ${r.path}`));let a=r._injector??t,s=r._loadedInjector??a;(r.loadChildren&&!r._loadedRoutes&&r.canLoad===void 0||r.loadComponent&&!r._loadedComponent)&&i.push(this.preloadConfig(a,r)),(r.children||r._loadedRoutes)&&i.push(this.processRoutes(s,r.children??r._loadedRoutes))}return Ze(i).pipe(Wo())}preloadConfig(t,o){return this.preloadingStrategy.preload(o,()=>{let i;o.loadChildren&&o.canLoad===void 0?i=this.loader.loadChildren(t,o):i=z(null);let r=i.pipe(ot(a=>a===null?z(void 0):(o._loadedRoutes=a.routes,o._loadedInjector=a.injector,this.processRoutes(a.injector??t,a.routes))));if(o.loadComponent&&!o._loadedComponent){let a=this.loader.loadComponent(o);return Ze([r,a]).pipe(Wo())}else return r})}static \u0275fac=function(o){return new(o||e)(pe(zt),pe(tn),pe(Go),pe(Dn),pe(ba))};static \u0275prov=A({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),ya=new Re(""),uc=(()=>{class e{urlSerializer;transitions;viewportScroller;zone;options;routerEventsSubscription;scrollEventsSubscription;lastId=0;lastSource="imperative";restoredId=0;store={};constructor(t,o,i,r,a={}){this.urlSerializer=t,this.transitions=o,this.viewportScroller=i,this.zone=r,this.options=a,a.scrollPositionRestoration||="disabled",a.anchorScrolling||="disabled"}init(){this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(t=>{t instanceof Do?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=t.navigationTrigger,this.restoredId=t.restoredState?t.restoredState.navigationId:0):t instanceof It?(this.lastId=t.id,this.scheduleScrollEvent(t,this.urlSerializer.parse(t.urlAfterRedirects).fragment)):t instanceof Yt&&t.code===xn.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(t,this.urlSerializer.parse(t.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(t=>{t instanceof wn&&(t.position?this.options.scrollPositionRestoration==="top"?this.viewportScroller.scrollToPosition([0,0]):this.options.scrollPositionRestoration==="enabled"&&this.viewportScroller.scrollToPosition(t.position):t.anchor&&this.options.anchorScrolling==="enabled"?this.viewportScroller.scrollToAnchor(t.anchor):this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.scrollToPosition([0,0]))})}scheduleScrollEvent(t,o){this.zone.runOutsideAngular(()=>{setTimeout(()=>{this.zone.run(()=>{this.transitions.events.next(new wn(t,this.lastSource==="popstate"?this.store[this.restoredId]:null,o))})},0)})}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}static \u0275fac=function(o){Ki()};static \u0275prov=A({token:e,factory:e.\u0275fac})}return e})();function pc(e,...n){return oo([{provide:yi,multi:!0,useValue:e},[],{provide:Zt,useFactory:mc,deps:[zt]},{provide:hr,multi:!0,useFactory:hc},n.map(t=>t.\u0275providers)])}function mc(e){return e.routerState.root}function Bo(e,n){return{\u0275kind:e,\u0275providers:n}}function fc(e={}){return Bo(4,[{provide:ya,useFactory:()=>{let t=y(_r),o=y(Me),i=y(On),r=y(Oo);return new uc(r,i,t,o,e)}}])}function hc(){let e=y(Lt);return n=>{let t=e.get(gr);if(n!==t.components[0])return;let o=e.get(zt),i=e.get(gc);e.get(_a)===1&&o.initialNavigation(),e.get(bc,null,lr.Optional)?.setUpPreloading(),e.get(ya,null,lr.Optional)?.init(),o.resetRootComponentType(t.componentTypes[0]),i.closed||(i.next(),i.complete(),i.unsubscribe())}}var gc=new Re("",{factory:()=>new Tt}),_a=new Re("",{providedIn:"root",factory:()=>1});function Gf(){return Bo(2,[{provide:_a,useValue:0},{provide:fr,multi:!0,deps:[Lt],useFactory:n=>{let t=n.get(ks,Promise.resolve());return()=>t.then(()=>new Promise(o=>{let i=n.get(zt),r=n.get(gc);dc(i,()=>{o(!0)}),n.get(On).afterPreactivation=()=>(o(!0),r.closed?z(void 0):r),i.initialNavigation()}))}}])}function qf(){return Bo(3,[{provide:fr,multi:!0,useFactory:()=>{let n=y(zt);return()=>{n.setUpLocationChangeListener()}}},{provide:_a,useValue:2}])}var bc=new Re("");function Qf(e){return Bo(0,[{provide:bc,useExisting:Wf},{provide:Dn,useExisting:e}])}function Kf(){return Bo(8,[El,{provide:$n,useExisting:El}])}function Yf(e){let n=[{provide:ac,useValue:Mf},{provide:sc,useValue:T({skipNextTransition:!!e?.skipInitialTransition},e)}];return Bo(9,n)}var Zf=[Jo,{provide:Oo,useClass:Ro},zt,Ci,{provide:Zt,useFactory:mc,deps:[zt]},ba,[]],Mn=(()=>{class e{constructor(){}static forRoot(t,o){return{ngModule:e,providers:[Zf,[],{provide:yi,multi:!0,useValue:t},[],o?.errorHandler?{provide:lc,useValue:o.errorHandler}:[],{provide:Ii,useValue:o||{}},o?.useHash?Jf():eh(),Xf(),o?.preloadingStrategy?Qf(o.preloadingStrategy).\u0275providers:[],o?.initialNavigation?th(o):[],o?.bindToComponentInputs?Kf().\u0275providers:[],o?.enableViewTransitions?Yf().\u0275providers:[],oh()]}}static forChild(t){return{ngModule:e,providers:[{provide:yi,multi:!0,useValue:t}]}}static \u0275fac=function(o){return new(o||e)};static \u0275mod=Y({type:e});static \u0275inj=K({})}return e})();function Xf(){return{provide:ya,useFactory:()=>{let e=y(_r),n=y(Me),t=y(Ii),o=y(On),i=y(Oo);return t.scrollOffset&&e.setOffset(t.scrollOffset),new uc(i,o,e,n,t)}}}function Jf(){return{provide:Xo,useClass:Es}}function eh(){return{provide:Xo,useClass:Ts}}function th(e){return[e.initialNavigation==="disabled"?qf().\u0275providers:[],e.initialNavigation==="enabledBlocking"?Gf().\u0275providers:[]]}var Al=new Re("");function oh(){return[{provide:Al,useFactory:hc},{provide:hr,multi:!0,useExisting:Al}]}var vc=(()=>{class e extends X{name="common";static \u0275fac=(()=>{let t;return function(i){return(t||(t=k(e)))(i||e)}})();static \u0275prov=A({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),H=(()=>{class e{document=y(ve);platformId=y(qe);el=y(Je);injector=y(Lt);cd=y(Dt);renderer=y(io);config=y(Lr);baseComponentStyle=y(vc);baseStyle=y(X);scopedStyleEl;rootEl;dt;get styleOptions(){return{nonce:this.config?.csp().nonce}}get _name(){return this.constructor.name.replace(/^_/,"").toLowerCase()}get componentStyle(){return this._componentStyle}attrSelector=ce("pc");themeChangeListeners=[];_getHostInstance(t){if(t)return t?this.hostName?t.name===this.hostName?t:this._getHostInstance(t.parentInstance):t.parentInstance:void 0}_getOptionValue(t,o="",i={}){return ln(t,o,i)}ngOnInit(){this.document&&this._loadStyles()}ngAfterViewInit(){this.rootEl=this.el?.nativeElement,this.rootEl&&this.rootEl?.setAttribute(this.attrSelector,"")}ngOnChanges(t){if(this.document&&!ei(this.platformId)){let{dt:o}=t;o&&o.currentValue&&(this._loadScopedThemeStyles(o.currentValue),this._themeChangeListener(()=>this._loadScopedThemeStyles(o.currentValue)))}}ngOnDestroy(){this._unloadScopedThemeStyles(),this.themeChangeListeners.forEach(t=>rt.off("theme:change",t))}_loadStyles(){let t=()=>{Co.isStyleNameLoaded("base")||(this.baseStyle.loadGlobalCSS(this.styleOptions),Co.setLoadedStyleName("base")),this._loadThemeStyles()};t(),this._themeChangeListener(()=>t())}_loadCoreStyles(){!Co.isStyleNameLoaded("base")&&this._name&&(this.baseComponentStyle.loadCSS(this.styleOptions),this.componentStyle&&this.componentStyle?.loadCSS(this.styleOptions),Co.setLoadedStyleName(this.componentStyle?.name))}_loadThemeStyles(){if(!fe.isStyleNameLoaded("common")){let{primitive:t,semantic:o,global:i,style:r}=this.componentStyle?.getCommonTheme?.()||{};this.baseStyle.load(t?.css,T({name:"primitive-variables"},this.styleOptions)),this.baseStyle.load(o?.css,T({name:"semantic-variables"},this.styleOptions)),this.baseStyle.load(i?.css,T({name:"global-variables"},this.styleOptions)),this.baseStyle.loadGlobalTheme(T({name:"global-style"},this.styleOptions),r),fe.setLoadedStyleName("common")}if(!fe.isStyleNameLoaded(this.componentStyle?.name)&&this.componentStyle?.name){let{css:t,style:o}=this.componentStyle?.getComponentTheme?.()||{};this.componentStyle?.load(t,T({name:`${this.componentStyle?.name}-variables`},this.styleOptions)),this.componentStyle?.loadTheme(T({name:`${this.componentStyle?.name}-style`},this.styleOptions),o),fe.setLoadedStyleName(this.componentStyle?.name)}if(!fe.isStyleNameLoaded("layer-order")){let t=this.componentStyle?.getLayerOrderThemeCSS?.();this.baseStyle.load(t,T({name:"layer-order",first:!0},this.styleOptions)),fe.setLoadedStyleName("layer-order")}this.dt&&(this._loadScopedThemeStyles(this.dt),this._themeChangeListener(()=>this._loadScopedThemeStyles(this.dt)))}_loadScopedThemeStyles(t){let{css:o}=this.componentStyle?.getPresetTheme?.(t,`[${this.attrSelector}]`)||{},i=this.componentStyle?.load(o,T({name:`${this.attrSelector}-${this.componentStyle?.name}`},this.styleOptions));this.scopedStyleEl=i?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(t=()=>{}){Co.clearLoadedStyleNames(),rt.on("theme:change",t),this.themeChangeListeners.push(t)}cx(t,o){let i=this.parent?this.parent.componentStyle?.classes?.[t]:this.componentStyle?.classes?.[t];return typeof i=="function"?i({instance:this}):typeof i=="string"?i:t}sx(t){let o=this.componentStyle?.inlineStyles?.[t];return typeof o=="function"?o({instance:this}):typeof o=="string"?o:T({},o)}get parent(){return this.parentInstance}static \u0275fac=function(o){return new(o||e)};static \u0275dir=$e({type:e,inputs:{dt:"dt"},features:[J([vc,X]),De]})}return e})();var xa=(()=>{class e{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(t,o){t&&o&&(t.classList?t.classList.add(o):t.className+=" "+o)}static addMultipleClasses(t,o){if(t&&o)if(t.classList){let i=o.trim().split(" ");for(let r=0;r<i.length;r++)t.classList.add(i[r])}else{let i=o.split(" ");for(let r=0;r<i.length;r++)t.className+=" "+i[r]}}static removeClass(t,o){t&&o&&(t.classList?t.classList.remove(o):t.className=t.className.replace(new RegExp("(^|\\b)"+o.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(t,o){t&&o&&[o].flat().filter(Boolean).forEach(i=>i.split(" ").forEach(r=>this.removeClass(t,r)))}static hasClass(t,o){return t&&o?t.classList?t.classList.contains(o):new RegExp("(^| )"+o+"( |$)","gi").test(t.className):!1}static siblings(t){return Array.prototype.filter.call(t.parentNode.children,function(o){return o!==t})}static find(t,o){return Array.from(t.querySelectorAll(o))}static findSingle(t,o){return this.isElement(t)?t.querySelector(o):null}static index(t){let o=t.parentNode.childNodes,i=0;for(var r=0;r<o.length;r++){if(o[r]==t)return i;o[r].nodeType==1&&i++}return-1}static indexWithinGroup(t,o){let i=t.parentNode?t.parentNode.childNodes:[],r=0;for(var a=0;a<i.length;a++){if(i[a]==t)return r;i[a].attributes&&i[a].attributes[o]&&i[a].nodeType==1&&r++}return-1}static appendOverlay(t,o,i="self"){i!=="self"&&t&&o&&this.appendChild(t,o)}static alignOverlay(t,o,i="self",r=!0){t&&o&&(r&&(t.style.minWidth=`${e.getOuterWidth(o)}px`),i==="self"?this.relativePosition(t,o):this.absolutePosition(t,o))}static relativePosition(t,o,i=!0){let r=Ge=>{if(Ge)return getComputedStyle(Ge).getPropertyValue("position")==="relative"?Ge:r(Ge.parentElement)},a=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),s=o.offsetHeight,l=o.getBoundingClientRect(),f=this.getWindowScrollTop(),g=this.getWindowScrollLeft(),x=this.getViewport(),D=r(t)?.getBoundingClientRect()||{top:-1*f,left:-1*g},j,ee;l.top+s+a.height>x.height?(j=l.top-D.top-a.height,t.style.transformOrigin="bottom",l.top+j<0&&(j=-1*l.top)):(j=s+l.top-D.top,t.style.transformOrigin="top");let xe=l.left+a.width-x.width,ze=l.left-D.left;a.width>x.width?ee=(l.left-D.left)*-1:xe>0?ee=ze-xe:ee=l.left-D.left,t.style.top=j+"px",t.style.left=ee+"px",i&&(t.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static absolutePosition(t,o,i=!0){let r=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),a=r.height,s=r.width,l=o.offsetHeight,f=o.offsetWidth,g=o.getBoundingClientRect(),x=this.getWindowScrollTop(),S=this.getWindowScrollLeft(),D=this.getViewport(),j,ee;g.top+l+a>D.height?(j=g.top+x-a,t.style.transformOrigin="bottom",j<0&&(j=x)):(j=l+g.top+x,t.style.transformOrigin="top"),g.left+s>D.width?ee=Math.max(0,g.left+S+f-s):ee=g.left+S,t.style.top=j+"px",t.style.left=ee+"px",i&&(t.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(t,o=[]){return t.parentNode===null?o:this.getParents(t.parentNode,o.concat([t.parentNode]))}static getScrollableParents(t){let o=[];if(t){let i=this.getParents(t),r=/(auto|scroll)/,a=s=>{let l=window.getComputedStyle(s,null);return r.test(l.getPropertyValue("overflow"))||r.test(l.getPropertyValue("overflowX"))||r.test(l.getPropertyValue("overflowY"))};for(let s of i){let l=s.nodeType===1&&s.dataset.scrollselectors;if(l){let f=l.split(",");for(let g of f){let x=this.findSingle(s,g);x&&a(x)&&o.push(x)}}s.nodeType!==9&&a(s)&&o.push(s)}}return o}static getHiddenElementOuterHeight(t){t.style.visibility="hidden",t.style.display="block";let o=t.offsetHeight;return t.style.display="none",t.style.visibility="visible",o}static getHiddenElementOuterWidth(t){t.style.visibility="hidden",t.style.display="block";let o=t.offsetWidth;return t.style.display="none",t.style.visibility="visible",o}static getHiddenElementDimensions(t){let o={};return t.style.visibility="hidden",t.style.display="block",o.width=t.offsetWidth,o.height=t.offsetHeight,t.style.display="none",t.style.visibility="visible",o}static scrollInView(t,o){let i=getComputedStyle(t).getPropertyValue("borderTopWidth"),r=i?parseFloat(i):0,a=getComputedStyle(t).getPropertyValue("paddingTop"),s=a?parseFloat(a):0,l=t.getBoundingClientRect(),g=o.getBoundingClientRect().top+document.body.scrollTop-(l.top+document.body.scrollTop)-r-s,x=t.scrollTop,S=t.clientHeight,D=this.getOuterHeight(o);g<0?t.scrollTop=x+g:g+D>S&&(t.scrollTop=x+g-S+D)}static fadeIn(t,o){t.style.opacity=0;let i=+new Date,r=0,a=function(){r=+t.style.opacity.replace(",",".")+(new Date().getTime()-i)/o,t.style.opacity=r,i=+new Date,+r<1&&(window.requestAnimationFrame&&requestAnimationFrame(a)||setTimeout(a,16))};a()}static fadeOut(t,o){var i=1,r=50,a=o,s=r/a;let l=setInterval(()=>{i=i-s,i<=0&&(i=0,clearInterval(l)),t.style.opacity=i},r)}static getWindowScrollTop(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}static getWindowScrollLeft(){let t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}static matches(t,o){var i=Element.prototype,r=i.matches||i.webkitMatchesSelector||i.mozMatchesSelector||i.msMatchesSelector||function(a){return[].indexOf.call(document.querySelectorAll(a),this)!==-1};return r.call(t,o)}static getOuterWidth(t,o){let i=t.offsetWidth;if(o){let r=getComputedStyle(t);i+=parseFloat(r.marginLeft)+parseFloat(r.marginRight)}return i}static getHorizontalPadding(t){let o=getComputedStyle(t);return parseFloat(o.paddingLeft)+parseFloat(o.paddingRight)}static getHorizontalMargin(t){let o=getComputedStyle(t);return parseFloat(o.marginLeft)+parseFloat(o.marginRight)}static innerWidth(t){let o=t.offsetWidth,i=getComputedStyle(t);return o+=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),o}static width(t){let o=t.offsetWidth,i=getComputedStyle(t);return o-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),o}static getInnerHeight(t){let o=t.offsetHeight,i=getComputedStyle(t);return o+=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom),o}static getOuterHeight(t,o){let i=t.offsetHeight;if(o){let r=getComputedStyle(t);i+=parseFloat(r.marginTop)+parseFloat(r.marginBottom)}return i}static getHeight(t){let o=t.offsetHeight,i=getComputedStyle(t);return o-=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom)+parseFloat(i.borderTopWidth)+parseFloat(i.borderBottomWidth),o}static getWidth(t){let o=t.offsetWidth,i=getComputedStyle(t);return o-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight)+parseFloat(i.borderLeftWidth)+parseFloat(i.borderRightWidth),o}static getViewport(){let t=window,o=document,i=o.documentElement,r=o.getElementsByTagName("body")[0],a=t.innerWidth||i.clientWidth||r.clientWidth,s=t.innerHeight||i.clientHeight||r.clientHeight;return{width:a,height:s}}static getOffset(t){var o=t.getBoundingClientRect();return{top:o.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:o.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(t,o){let i=t.parentNode;if(!i)throw"Can't replace element";return i.replaceChild(o,t)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var t=window.navigator.userAgent,o=t.indexOf("MSIE ");if(o>0)return!0;var i=t.indexOf("Trident/");if(i>0){var r=t.indexOf("rv:");return!0}var a=t.indexOf("Edge/");return a>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(t,o){if(this.isElement(o))o.appendChild(t);else if(o&&o.el&&o.el.nativeElement)o.el.nativeElement.appendChild(t);else throw"Cannot append "+o+" to "+t}static removeChild(t,o){if(this.isElement(o))o.removeChild(t);else if(o.el&&o.el.nativeElement)o.el.nativeElement.removeChild(t);else throw"Cannot remove "+t+" from "+o}static removeElement(t){"remove"in Element.prototype?t.remove():t.parentNode.removeChild(t)}static isElement(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}static calculateScrollbarWidth(t){if(t){let o=getComputedStyle(t);return t.offsetWidth-t.clientWidth-parseFloat(o.borderLeftWidth)-parseFloat(o.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let o=document.createElement("div");o.className="p-scrollbar-measure",document.body.appendChild(o);let i=o.offsetWidth-o.clientWidth;return document.body.removeChild(o),this.calculatedScrollbarWidth=i,i}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let t=document.createElement("div");t.className="p-scrollbar-measure",document.body.appendChild(t);let o=t.offsetHeight-t.clientHeight;return document.body.removeChild(t),this.calculatedScrollbarWidth=o,o}static invokeElementMethod(t,o,i){t[o].apply(t,i)}static clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let t=this.resolveUserAgent();this.browser={},t.browser&&(this.browser[t.browser]=!0,this.browser.version=t.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let t=navigator.userAgent.toLowerCase(),o=/(chrome)[ \/]([\w.]+)/.exec(t)||/(webkit)[ \/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t)||/(msie) ([\w.]+)/.exec(t)||t.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)||[];return{browser:o[1]||"",version:o[2]||"0"}}static isInteger(t){return Number.isInteger?Number.isInteger(t):typeof t=="number"&&isFinite(t)&&Math.floor(t)===t}static isHidden(t){return!t||t.offsetParent===null}static isVisible(t){return t&&t.offsetParent!=null}static isExist(t){return t!==null&&typeof t<"u"&&t.nodeName&&t.parentNode}static focus(t,o){t&&document.activeElement!==t&&t.focus(o)}static getFocusableSelectorString(t=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t}`}static getFocusableElements(t,o=""){let i=this.find(t,this.getFocusableSelectorString(o)),r=[];for(let a of i){let s=getComputedStyle(a);this.isVisible(a)&&s.display!="none"&&s.visibility!="hidden"&&r.push(a)}return r}static getFocusableElement(t,o=""){let i=this.findSingle(t,this.getFocusableSelectorString(o));if(i){let r=getComputedStyle(i);if(this.isVisible(i)&&r.display!="none"&&r.visibility!="hidden")return i}return null}static getFirstFocusableElement(t,o=""){let i=this.getFocusableElements(t,o);return i.length>0?i[0]:null}static getLastFocusableElement(t,o){let i=this.getFocusableElements(t,o);return i.length>0?i[i.length-1]:null}static getNextFocusableElement(t,o=!1){let i=e.getFocusableElements(t),r=0;if(i&&i.length>0){let a=i.indexOf(i[0].ownerDocument.activeElement);o?a==-1||a===0?r=i.length-1:r=a-1:a!=-1&&a!==i.length-1&&(r=a+1)}return i[r]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null}static getTargetElement(t,o){if(!t)return null;switch(t){case"document":return document;case"window":return window;case"@next":return o?.nextElementSibling;case"@prev":return o?.previousElementSibling;case"@parent":return o?.parentElement;case"@grandparent":return o?.parentElement.parentElement;default:let i=typeof t;if(i==="string")return document.querySelector(t);if(i==="object"&&t.hasOwnProperty("nativeElement"))return this.isExist(t.nativeElement)?t.nativeElement:void 0;let a=(s=>!!(s&&s.constructor&&s.call&&s.apply))(t)?t():t;return a&&a.nodeType===9||this.isExist(a)?a:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(t,o){if(t){let i=t.getAttribute(o);return isNaN(i)?i==="true"||i==="false"?i==="true":i:+i}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(t="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,t)}static unblockBodyScroll(t="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,t)}static createElement(t,o={},...i){if(t){let r=document.createElement(t);return this.setAttributes(r,o),r.append(...i),r}}static setAttribute(t,o="",i){this.isElement(t)&&i!==null&&i!==void 0&&t.setAttribute(o,i)}static setAttributes(t,o={}){if(this.isElement(t)){let i=(r,a)=>{let s=t?.$attrs?.[r]?[t?.$attrs?.[r]]:[];return[a].flat().reduce((l,f)=>{if(f!=null){let g=typeof f;if(g==="string"||g==="number")l.push(f);else if(g==="object"){let x=Array.isArray(f)?i(r,f):Object.entries(f).map(([S,D])=>r==="style"&&(D||D===0)?`${S.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${D}`:D?S:void 0);l=x.length?l.concat(x.filter(S=>!!S)):l}}return l},s)};Object.entries(o).forEach(([r,a])=>{if(a!=null){let s=r.match(/^on(.+)/);s?t.addEventListener(s[1].toLowerCase(),a):r==="pBind"?this.setAttributes(t,a):(a=r==="class"?[...new Set(i("class",a))].join(" ").trim():r==="style"?i("style",a).join(";").trim():a,(t.$attrs=t.$attrs||{})&&(t.$attrs[r]=a),t.setAttribute(r,a))}})}}static isFocusableElement(t,o=""){return this.isElement(t)?t.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o}`):!1}}return e})(),Bn=class{element;listener;scrollableParents;constructor(n,t=()=>{}){this.element=n,this.listener=t}bindScrollListener(){this.scrollableParents=xa.getScrollableParents(this.element);for(let n=0;n<this.scrollableParents.length;n++)this.scrollableParents[n].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let n=0;n<this.scrollableParents.length;n++)this.scrollableParents[n].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var yc=(()=>{class e extends H{autofocus=!1;_autofocus=!1;focused=!1;platformId=y(qe);document=y(ve);host=y(Je);ngAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}ngAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){re(this.platformId)&&this._autofocus&&setTimeout(()=>{let t=xa.getFocusableElements(this.host?.nativeElement);t.length===0&&this.host.nativeElement.focus(),t.length>0&&t[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let t;return function(i){return(t||(t=k(e)))(i||e)}})();static \u0275dir=$e({type:e,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[2,"autofocus","autofocus",$],_autofocus:[0,"pAutoFocus","_autofocus"]},features:[O]})}return e})();var nh=({dt:e})=>`
.p-badge {
    display: inline-flex;
    border-radius: ${e("badge.border.radius")};
    justify-content: center;
    padding: ${e("badge.padding")};
    background: ${e("badge.primary.background")};
    color: ${e("badge.primary.color")};
    font-size: ${e("badge.font.size")};
    font-weight: ${e("badge.font.weight")};
    min-width: ${e("badge.min.width")};
    height: ${e("badge.height")};
    line-height: ${e("badge.height")};
}

.p-badge-dot {
    width: ${e("badge.dot.size")};
    min-width: ${e("badge.dot.size")};
    height: ${e("badge.dot.size")};
    border-radius: 50%;
    padding: 0;
}

.p-badge-circle {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background: ${e("badge.secondary.background")};
    color: ${e("badge.secondary.color")};
}

.p-badge-success {
    background: ${e("badge.success.background")};
    color: ${e("badge.success.color")};
}

.p-badge-info {
    background: ${e("badge.info.background")};
    color: ${e("badge.info.color")};
}

.p-badge-warn {
    background: ${e("badge.warn.background")};
    color: ${e("badge.warn.color")};
}

.p-badge-danger {
    background: ${e("badge.danger.background")};
    color: ${e("badge.danger.color")};
}

.p-badge-contrast {
    background: ${e("badge.contrast.background")};
    color: ${e("badge.contrast.color")};
}

.p-badge-sm {
    font-size: ${e("badge.sm.font.size")};
    min-width: ${e("badge.sm.min.width")};
    height: ${e("badge.sm.height")};
    line-height: ${e("badge.sm.height")};
}

.p-badge-lg {
    font-size: ${e("badge.lg.font.size")};
    min-width: ${e("badge.lg.min.width")};
    height: ${e("badge.lg.height")};
    line-height: ${e("badge.lg.height")};
}

.p-badge-xl {
    font-size: ${e("badge.xl.font.size")};
    min-width: ${e("badge.xl.min.width")};
    height: ${e("badge.xl.height")};
    line-height: ${e("badge.xl.height")};
}

/* For PrimeNG (directive)*/

.p-overlay-badge {
    position: relative;
}

.p-overlay-badge > .p-badge {
    position: absolute;
    top: 0;
    inset-inline-end: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    margin: 0;
}
`,rh={root:({props:e,instance:n})=>["p-badge p-component",{"p-badge-circle":W(e.value)&&String(e.value).length===1,"p-badge-dot":We(e.value)&&!n.$slots.default,"p-badge-sm":e.size==="small","p-badge-lg":e.size==="large","p-badge-xl":e.size==="xlarge","p-badge-info":e.severity==="info","p-badge-success":e.severity==="success","p-badge-warn":e.severity==="warn","p-badge-danger":e.severity==="danger","p-badge-secondary":e.severity==="secondary","p-badge-contrast":e.severity==="contrast"}]},_c=(()=>{class e extends X{name="badge";theme=nh;classes=rh;static \u0275fac=(()=>{let t;return function(i){return(t||(t=k(e)))(i||e)}})();static \u0275prov=A({token:e,factory:e.\u0275fac})}return e})();var Ca=(()=>{class e extends H{styleClass=Ee();style=Ee();badgeSize=Ee();size=Ee();severity=Ee();value=Ee();badgeDisabled=Ee(!1,{transform:$});_componentStyle=y(_c);containerClass=se(()=>{let t="p-badge p-component";return W(this.value())&&String(this.value()).length===1&&(t+=" p-badge-circle"),this.badgeSize()==="large"?t+=" p-badge-lg":this.badgeSize()==="xlarge"?t+=" p-badge-xl":this.badgeSize()==="small"&&(t+=" p-badge-sm"),We(this.value())&&(t+=" p-badge-dot"),this.styleClass()&&(t+=` ${this.styleClass()}`),this.severity()&&(t+=` p-badge-${this.severity()}`),t});static \u0275fac=(()=>{let t;return function(i){return(t||(t=k(e)))(i||e)}})();static \u0275cmp=I({type:e,selectors:[["p-badge"]],hostVars:6,hostBindings:function(o,i){o&2&&(Ji(i.style()),P(i.containerClass()),Xi("display",i.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],style:[1,"style"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[J([_c]),O],decls:1,vars:1,template:function(o,i){o&1&&v(0),o&2&&de(i.value())},dependencies:[F,V],encapsulation:2,changeDetection:0})}return e})(),xc=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=Y({type:e});static \u0275inj=K({imports:[Ca,V,V]})}return e})();var sh=["*"],lh=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,ch=(()=>{class e extends X{name="baseicon";inlineStyles=lh;static \u0275fac=(()=>{let t;return function(i){return(t||(t=k(e)))(i||e)}})();static \u0275prov=A({token:e,factory:e.\u0275fac})}return e})();var _e=(()=>{class e extends H{label;spin=!1;styleClass;role;ariaLabel;ariaHidden;ngOnInit(){super.ngOnInit(),this.getAttributes()}getAttributes(){let t=We(this.label);this.role=t?void 0:"img",this.ariaLabel=t?void 0:this.label,this.ariaHidden=t}getClassNames(){return`p-icon ${this.styleClass?this.styleClass+" ":""}${this.spin?"p-icon-spin":""}`}static \u0275fac=(()=>{let t;return function(i){return(t||(t=k(e)))(i||e)}})();static \u0275cmp=I({type:e,selectors:[["ng-component"]],hostAttrs:[1,"p-component","p-iconwrapper"],inputs:{label:"label",spin:[2,"spin","spin",$],styleClass:"styleClass"},features:[J([ch]),O],ngContentSelectors:sh,decls:1,vars:0,template:function(o,i){o&1&&(ie(),Z(0))},encapsulation:2,changeDetection:0})}return e})();var Cc=(()=>{class e extends _e{static \u0275fac=(()=>{let t;return function(i){return(t||(t=k(e)))(i||e)}})();static \u0275cmp=I({type:e,selectors:[["AngleDownIcon"]],features:[O],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M3.58659 4.5007C3.68513 4.50023 3.78277 4.51945 3.87379 4.55723C3.9648 4.59501 4.04735 4.65058 4.11659 4.7207L7.11659 7.7207L10.1166 4.7207C10.2619 4.65055 10.4259 4.62911 10.5843 4.65956C10.7427 4.69002 10.8871 4.77074 10.996 4.88976C11.1049 5.00877 11.1726 5.15973 11.1889 5.32022C11.2052 5.48072 11.1693 5.6422 11.0866 5.7807L7.58659 9.2807C7.44597 9.42115 7.25534 9.50004 7.05659 9.50004C6.85784 9.50004 6.66722 9.42115 6.52659 9.2807L3.02659 5.7807C2.88614 5.64007 2.80725 5.44945 2.80725 5.2507C2.80725 5.05195 2.88614 4.86132 3.02659 4.7207C3.09932 4.64685 3.18675 4.58911 3.28322 4.55121C3.37969 4.51331 3.48305 4.4961 3.58659 4.5007Z","fill","currentColor"]],template:function(o,i){o&1&&(ne(),d(0,"svg",0),h(1,"path",1),u()),o&2&&(P(i.getClassNames()),_("aria-label",i.ariaLabel)("aria-hidden",i.ariaHidden)("role",i.role))},encapsulation:2})}return e})();var wc=(()=>{class e extends _e{static \u0275fac=(()=>{let t;return function(i){return(t||(t=k(e)))(i||e)}})();static \u0275cmp=I({type:e,selectors:[["AngleRightIcon"]],features:[O],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M5.25 11.1728C5.14929 11.1694 5.05033 11.1455 4.9592 11.1025C4.86806 11.0595 4.78666 10.9984 4.72 10.9228C4.57955 10.7822 4.50066 10.5916 4.50066 10.3928C4.50066 10.1941 4.57955 10.0035 4.72 9.86283L7.72 6.86283L4.72 3.86283C4.66067 3.71882 4.64765 3.55991 4.68275 3.40816C4.71785 3.25642 4.79932 3.11936 4.91585 3.01602C5.03238 2.91268 5.17819 2.84819 5.33305 2.83149C5.4879 2.81479 5.64411 2.84671 5.78 2.92283L9.28 6.42283C9.42045 6.56346 9.49934 6.75408 9.49934 6.95283C9.49934 7.15158 9.42045 7.34221 9.28 7.48283L5.78 10.9228C5.71333 10.9984 5.63193 11.0595 5.5408 11.1025C5.44966 11.1455 5.35071 11.1694 5.25 11.1728Z","fill","currentColor"]],template:function(o,i){o&1&&(ne(),d(0,"svg",0),h(1,"path",1),u()),o&2&&(P(i.getClassNames()),_("aria-label",i.ariaLabel)("aria-hidden",i.ariaHidden)("role",i.role))},encapsulation:2})}return e})();var co=(()=>{class e extends _e{static \u0275fac=(()=>{let t;return function(i){return(t||(t=k(e)))(i||e)}})();static \u0275cmp=I({type:e,selectors:[["ChevronDownIcon"]],features:[O],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z","fill","currentColor"]],template:function(o,i){o&1&&(ne(),d(0,"svg",0),h(1,"path",1),u()),o&2&&(P(i.getClassNames()),_("aria-label",i.ariaLabel)("aria-hidden",i.ariaHidden)("role",i.role))},encapsulation:2})}return e})();var Jt=(()=>{class e extends _e{static \u0275fac=(()=>{let t;return function(i){return(t||(t=k(e)))(i||e)}})();static \u0275cmp=I({type:e,selectors:[["ChevronLeftIcon"]],features:[O],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z","fill","currentColor"]],template:function(o,i){o&1&&(ne(),d(0,"svg",0),h(1,"path",1),u()),o&2&&(P(i.getClassNames()),_("aria-label",i.ariaLabel)("aria-hidden",i.ariaHidden)("role",i.role))},encapsulation:2})}return e})();var Mt=(()=>{class e extends _e{static \u0275fac=(()=>{let t;return function(i){return(t||(t=k(e)))(i||e)}})();static \u0275cmp=I({type:e,selectors:[["ChevronRightIcon"]],features:[O],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z","fill","currentColor"]],template:function(o,i){o&1&&(ne(),d(0,"svg",0),h(1,"path",1),u()),o&2&&(P(i.getClassNames()),_("aria-label",i.ariaLabel)("aria-hidden",i.ariaHidden)("role",i.role))},encapsulation:2})}return e})();var Si=(()=>{class e extends _e{static \u0275fac=(()=>{let t;return function(i){return(t||(t=k(e)))(i||e)}})();static \u0275cmp=I({type:e,selectors:[["ChevronUpIcon"]],features:[O],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M12.2097 10.4113C12.1057 10.4118 12.0027 10.3915 11.9067 10.3516C11.8107 10.3118 11.7237 10.2532 11.6506 10.1792L6.93602 5.46461L2.22139 10.1476C2.07272 10.244 1.89599 10.2877 1.71953 10.2717C1.54307 10.2556 1.3771 10.1808 1.24822 10.0593C1.11933 9.93766 1.035 9.77633 1.00874 9.6011C0.982477 9.42587 1.0158 9.2469 1.10338 9.09287L6.37701 3.81923C6.52533 3.6711 6.72639 3.58789 6.93602 3.58789C7.14565 3.58789 7.3467 3.6711 7.49502 3.81923L12.7687 9.09287C12.9168 9.24119 13 9.44225 13 9.65187C13 9.8615 12.9168 10.0626 12.7687 10.2109C12.616 10.3487 12.4151 10.4207 12.2097 10.4113Z","fill","currentColor"]],template:function(o,i){o&1&&(ne(),d(0,"svg",0),h(1,"path",1),u()),o&2&&(P(i.getClassNames()),_("aria-label",i.ariaLabel)("aria-hidden",i.ariaHidden)("role",i.role))},encapsulation:2})}return e})();var Fn=(()=>{class e extends _e{static \u0275fac=(()=>{let t;return function(i){return(t||(t=k(e)))(i||e)}})();static \u0275cmp=I({type:e,selectors:[["MinusIcon"]],features:[O],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z","fill","currentColor"]],template:function(o,i){o&1&&(ne(),d(0,"svg",0),h(1,"path",1),u()),o&2&&(P(i.getClassNames()),_("aria-label",i.ariaLabel)("aria-hidden",i.ariaHidden)("role",i.role))},encapsulation:2})}return e})();var Ln=(()=>{class e extends _e{pathId;ngOnInit(){this.pathId="url(#"+ce()+")"}static \u0275fac=(()=>{let t;return function(i){return(t||(t=k(e)))(i||e)}})();static \u0275cmp=I({type:e,selectors:[["PlusIcon"]],features:[O],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M7.67742 6.32258V0.677419C7.67742 0.497757 7.60605 0.325452 7.47901 0.198411C7.35197 0.0713707 7.17966 0 7 0C6.82034 0 6.64803 0.0713707 6.52099 0.198411C6.39395 0.325452 6.32258 0.497757 6.32258 0.677419V6.32258H0.677419C0.497757 6.32258 0.325452 6.39395 0.198411 6.52099C0.0713707 6.64803 0 6.82034 0 7C0 7.17966 0.0713707 7.35197 0.198411 7.47901C0.325452 7.60605 0.497757 7.67742 0.677419 7.67742H6.32258V13.3226C6.32492 13.5015 6.39704 13.6725 6.52358 13.799C6.65012 13.9255 6.82106 13.9977 7 14C7.17966 14 7.35197 13.9286 7.47901 13.8016C7.60605 13.6745 7.67742 13.5022 7.67742 13.3226V7.67742H13.3226C13.5022 7.67742 13.6745 7.60605 13.8016 7.47901C13.9286 7.35197 14 7.17966 14 7C13.9977 6.82106 13.9255 6.65012 13.799 6.52358C13.6725 6.39704 13.5015 6.32492 13.3226 6.32258H7.67742Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(o,i){o&1&&(ne(),d(0,"svg",0)(1,"g"),h(2,"path",1),u(),d(3,"defs")(4,"clipPath",2),h(5,"rect",3),u()()()),o&2&&(P(i.getClassNames()),_("aria-label",i.ariaLabel)("aria-hidden",i.ariaHidden)("role",i.role),p(),_("clip-path",i.pathId),p(3),c("id",i.pathId))},encapsulation:2})}return e})();var Ic=(()=>{class e extends _e{pathId;ngOnInit(){this.pathId="url(#"+ce()+")"}static \u0275fac=(()=>{let t;return function(i){return(t||(t=k(e)))(i||e)}})();static \u0275cmp=I({type:e,selectors:[["SpinnerIcon"]],features:[O],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(o,i){o&1&&(ne(),d(0,"svg",0)(1,"g"),h(2,"path",1),u(),d(3,"defs")(4,"clipPath",2),h(5,"rect",3),u()()()),o&2&&(P(i.getClassNames()),_("aria-label",i.ariaLabel)("aria-hidden",i.ariaHidden)("role",i.role),p(),_("clip-path",i.pathId),p(3),c("id",i.pathId))},encapsulation:2})}return e})();var wa=(()=>{class e extends _e{static \u0275fac=(()=>{let t;return function(i){return(t||(t=k(e)))(i||e)}})();static \u0275cmp=I({type:e,selectors:[["TimesIcon"]],features:[O],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z","fill","currentColor"]],template:function(o,i){o&1&&(ne(),d(0,"svg",0),h(1,"path",1),u()),o&2&&(P(i.getClassNames()),_("aria-label",i.ariaLabel)("aria-hidden",i.ariaHidden)("role",i.role))},encapsulation:2})}return e})();var Sc=(()=>{class e extends _e{pathId;ngOnInit(){this.pathId="url(#"+ce()+")"}static \u0275fac=(()=>{let t;return function(i){return(t||(t=k(e)))(i||e)}})();static \u0275cmp=I({type:e,selectors:[["WindowMaximizeIcon"]],features:[O],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14ZM9.77805 7.42192C9.89013 7.534 10.0415 7.59788 10.2 7.59995C10.3585 7.59788 10.5099 7.534 10.622 7.42192C10.7341 7.30985 10.798 7.15844 10.8 6.99995V3.94242C10.8066 3.90505 10.8096 3.86689 10.8089 3.82843C10.8079 3.77159 10.7988 3.7157 10.7824 3.6623C10.756 3.55552 10.701 3.45698 10.622 3.37798C10.5099 3.2659 10.3585 3.20202 10.2 3.19995H7.00002C6.84089 3.19995 6.68828 3.26317 6.57576 3.37569C6.46324 3.48821 6.40002 3.64082 6.40002 3.79995C6.40002 3.95908 6.46324 4.11169 6.57576 4.22422C6.68828 4.33674 6.84089 4.39995 7.00002 4.39995H8.80006L6.19997 7.00005C6.10158 7.11005 6.04718 7.25246 6.04718 7.40005C6.04718 7.54763 6.10158 7.69004 6.19997 7.80005C6.30202 7.91645 6.44561 7.98824 6.59997 8.00005C6.75432 7.98824 6.89791 7.91645 6.99997 7.80005L9.60002 5.26841V6.99995C9.6021 7.15844 9.66598 7.30985 9.77805 7.42192ZM1.4 14H3.8C4.17066 13.9979 4.52553 13.8498 4.78763 13.5877C5.04973 13.3256 5.1979 12.9707 5.2 12.6V10.2C5.1979 9.82939 5.04973 9.47452 4.78763 9.21242C4.52553 8.95032 4.17066 8.80215 3.8 8.80005H1.4C1.02934 8.80215 0.674468 8.95032 0.412371 9.21242C0.150274 9.47452 0.00210008 9.82939 0 10.2V12.6C0.00210008 12.9707 0.150274 13.3256 0.412371 13.5877C0.674468 13.8498 1.02934 13.9979 1.4 14ZM1.25858 10.0586C1.29609 10.0211 1.34696 10 1.4 10H3.8C3.85304 10 3.90391 10.0211 3.94142 10.0586C3.97893 10.0961 4 10.147 4 10.2V12.6C4 12.6531 3.97893 12.704 3.94142 12.7415C3.90391 12.779 3.85304 12.8 3.8 12.8H1.4C1.34696 12.8 1.29609 12.779 1.25858 12.7415C1.22107 12.704 1.2 12.6531 1.2 12.6V10.2C1.2 10.147 1.22107 10.0961 1.25858 10.0586Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(o,i){o&1&&(ne(),d(0,"svg",0)(1,"g"),h(2,"path",1),u(),d(3,"defs")(4,"clipPath",2),h(5,"rect",3),u()()()),o&2&&(P(i.getClassNames()),_("aria-label",i.ariaLabel)("aria-hidden",i.ariaHidden)("role",i.role),p(),_("clip-path",i.pathId),p(3),c("id",i.pathId))},encapsulation:2})}return e})();var kc=(()=>{class e extends _e{pathId;ngOnInit(){this.pathId="url(#"+ce()+")"}static \u0275fac=(()=>{let t;return function(i){return(t||(t=k(e)))(i||e)}})();static \u0275cmp=I({type:e,selectors:[["WindowMinimizeIcon"]],features:[O],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0ZM6.368 7.952C6.44137 7.98326 6.52025 7.99958 6.6 8H9.8C9.95913 8 10.1117 7.93678 10.2243 7.82426C10.3368 7.71174 10.4 7.55913 10.4 7.4C10.4 7.24087 10.3368 7.08826 10.2243 6.97574C10.1117 6.86321 9.95913 6.8 9.8 6.8H8.048L10.624 4.224C10.73 4.11026 10.7877 3.95982 10.7849 3.80438C10.7822 3.64894 10.7192 3.50063 10.6093 3.3907C10.4994 3.28077 10.3511 3.2178 10.1956 3.21506C10.0402 3.21232 9.88974 3.27002 9.776 3.376L7.2 5.952V4.2C7.2 4.04087 7.13679 3.88826 7.02426 3.77574C6.91174 3.66321 6.75913 3.6 6.6 3.6C6.44087 3.6 6.28826 3.66321 6.17574 3.77574C6.06321 3.88826 6 4.04087 6 4.2V7.4C6.00042 7.47975 6.01674 7.55862 6.048 7.632C6.07656 7.70442 6.11971 7.7702 6.17475 7.82524C6.2298 7.88029 6.29558 7.92344 6.368 7.952ZM1.4 8.80005H3.8C4.17066 8.80215 4.52553 8.95032 4.78763 9.21242C5.04973 9.47452 5.1979 9.82939 5.2 10.2V12.6C5.1979 12.9707 5.04973 13.3256 4.78763 13.5877C4.52553 13.8498 4.17066 13.9979 3.8 14H1.4C1.02934 13.9979 0.674468 13.8498 0.412371 13.5877C0.150274 13.3256 0.00210008 12.9707 0 12.6V10.2C0.00210008 9.82939 0.150274 9.47452 0.412371 9.21242C0.674468 8.95032 1.02934 8.80215 1.4 8.80005ZM3.94142 12.7415C3.97893 12.704 4 12.6531 4 12.6V10.2C4 10.147 3.97893 10.0961 3.94142 10.0586C3.90391 10.0211 3.85304 10 3.8 10H1.4C1.34696 10 1.29609 10.0211 1.25858 10.0586C1.22107 10.0961 1.2 10.147 1.2 10.2V12.6C1.2 12.6531 1.22107 12.704 1.25858 12.7415C1.29609 12.779 1.34696 12.8 1.4 12.8H3.8C3.85304 12.8 3.90391 12.779 3.94142 12.7415Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(o,i){o&1&&(ne(),d(0,"svg",0)(1,"g"),h(2,"path",1),u(),d(3,"defs")(4,"clipPath",2),h(5,"rect",3),u()()()),o&2&&(P(i.getClassNames()),_("aria-label",i.ariaLabel)("aria-hidden",i.ariaHidden)("role",i.role),p(),_("clip-path",i.pathId),p(3),c("id",i.pathId))},encapsulation:2})}return e})();var dh=({dt:e})=>`
/* For PrimeNG */
.p-ripple {
    overflow: hidden;
    position: relative;
}

.p-ink {
    display: block;
    position: absolute;
    background: ${e("ripple.background")};
    border-radius: 100%;
    transform: scale(0);
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

.p-ripple-disabled .p-ink {
    display: none !important;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`,uh={root:"p-ink"},Tc=(()=>{class e extends X{name="ripple";theme=dh;classes=uh;static \u0275fac=(()=>{let t;return function(i){return(t||(t=k(e)))(i||e)}})();static \u0275prov=A({token:e,factory:e.\u0275fac})}return e})();var uo=(()=>{class e extends H{zone=y(Me);_componentStyle=y(Tc);animationListener;mouseDownListener;timeout;constructor(){super(),$t(()=>{re(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(t){let o=this.getInk();if(!o||this.document.defaultView?.getComputedStyle(o,null).display==="none")return;if(ke(o,"p-ink-active"),!ni(o)&&!Qt(o)){let s=Math.max(mt(this.el.nativeElement),At(this.el.nativeElement));o.style.height=s+"px",o.style.width=s+"px"}let i=ri(this.el.nativeElement),r=t.pageX-i.left+this.document.body.scrollTop-Qt(o)/2,a=t.pageY-i.top+this.document.body.scrollLeft-ni(o)/2;this.renderer.setStyle(o,"top",a+"px"),this.renderer.setStyle(o,"left",r+"px"),Pe(o,"p-ink-active"),this.timeout=setTimeout(()=>{let s=this.getInk();s&&ke(s,"p-ink-active")},401)}getInk(){let t=this.el.nativeElement.children;for(let o=0;o<t.length;o++)if(typeof t[o].className=="string"&&t[o].className.indexOf("p-ink")!==-1)return t[o];return null}resetInk(){let t=this.getInk();t&&ke(t,"p-ink-active")}onAnimationEnd(t){this.timeout&&clearTimeout(this.timeout),ke(t.currentTarget,"p-ink-active")}create(){let t=this.renderer.createElement("span");this.renderer.addClass(t,"p-ink"),this.renderer.appendChild(this.el.nativeElement,t),this.renderer.setAttribute(t,"aria-hidden","true"),this.renderer.setAttribute(t,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(t,"animationend",this.onAnimationEnd.bind(this)))}remove(){let t=this.getInk();t&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,ol(t))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(o){return new(o||e)};static \u0275dir=$e({type:e,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[J([Tc]),O]})}return e})(),Ec=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=Y({type:e});static \u0275inj=K({})}return e})();var mh=["content"],fh=["loading"],hh=["icon"],gh=["*"],Dc=e=>({class:e});function bh(e,n){e&1&&ae(0)}function vh(e,n){if(e&1&&h(0,"span",8),e&2){let t=m(3);c("ngClass",t.iconClass()),_("aria-hidden",!0)("data-pc-section","loadingicon")}}function yh(e,n){if(e&1&&h(0,"SpinnerIcon",9),e&2){let t=m(3);c("styleClass",t.spinnerIconClass())("spin",!0),_("aria-hidden",!0)("data-pc-section","loadingicon")}}function _h(e,n){if(e&1&&(te(0),b(1,vh,1,3,"span",6)(2,yh,1,4,"SpinnerIcon",7),oe()),e&2){let t=m(2);p(),c("ngIf",t.loadingIcon),p(),c("ngIf",!t.loadingIcon)}}function xh(e,n){}function Ch(e,n){if(e&1&&b(0,xh,0,0,"ng-template",10),e&2){let t=m(2);c("ngIf",t.loadingIconTemplate||t._loadingIconTemplate)}}function wh(e,n){if(e&1&&(te(0),b(1,_h,3,2,"ng-container",2)(2,Ch,1,1,null,5),oe()),e&2){let t=m();p(),c("ngIf",!t.loadingIconTemplate&&!t._loadingIconTemplate),p(),c("ngTemplateOutlet",t.loadingIconTemplate||t._loadingIconTemplate)("ngTemplateOutletContext",U(3,Dc,t.iconClass()))}}function Ih(e,n){if(e&1&&h(0,"span",8),e&2){let t=m(2);P(t.icon),c("ngClass",t.iconClass()),_("data-pc-section","icon")}}function Sh(e,n){}function kh(e,n){if(e&1&&b(0,Sh,0,0,"ng-template",10),e&2){let t=m(2);c("ngIf",!t.icon&&(t.iconTemplate||t._iconTemplate))}}function Th(e,n){if(e&1&&(te(0),b(1,Ih,1,4,"span",11)(2,kh,1,1,null,5),oe()),e&2){let t=m();p(),c("ngIf",t.icon&&!t.iconTemplate&&!t._iconTemplate),p(),c("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)("ngTemplateOutletContext",U(3,Dc,t.iconClass()))}}function Eh(e,n){if(e&1&&(d(0,"span",12),v(1),u()),e&2){let t=m();_("aria-hidden",t.icon&&!t.label)("data-pc-section","label"),p(),de(t.label)}}function Rh(e,n){if(e&1&&h(0,"p-badge",13),e&2){let t=m();c("value",t.badge)("severity",t.badgeSeverity)}}var Dh=({dt:e})=>`
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: ${e("button.primary.color")};
    background: ${e("button.primary.background")};
    border: 1px solid ${e("button.primary.border.color")};
    padding-block: ${e("button.padding.y")};
    padding-inline: ${e("button.padding.x")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${e("button.transition.duration")}, color ${e("button.transition.duration")}, border-color ${e("button.transition.duration")},
            outline-color ${e("button.transition.duration")}, box-shadow ${e("button.transition.duration")};
    border-radius: ${e("button.border.radius")};
    outline-color: transparent;
    gap: ${e("button.gap")};
}

.p-button-icon,
.p-button-icon:before,
.p-button-icon:after {
    line-height: inherit;
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-right {
    order: 1;
}

.p-button-icon-right:dir(rtl) {
    order: -1;
}

.p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
    order: 1;
}

.p-button-icon-bottom {
    order: 2;
}

.p-button-icon-only {
    width: ${e("button.icon.only.width")};
    padding-inline-start: 0;
    padding-inline-end: 0;
    gap: 0;
}

.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: ${e("button.icon.only.width")};
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
}

.p-button-sm {
    font-size: ${e("button.sm.font.size")};
    padding-block: ${e("button.sm.padding.y")};
    padding-inline: ${e("button.sm.padding.x")};
}

.p-button-sm .p-button-icon {
    font-size: ${e("button.sm.font.size")};
}

.p-button-lg {
    font-size: ${e("button.lg.font.size")};
    padding-block: ${e("button.lg.padding.y")};
    padding-inline: ${e("button.lg.padding.x")};
}

.p-button-lg .p-button-icon {
    font-size: ${e("button.lg.font.size")};
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-label {
    font-weight: ${e("button.label.font.weight")};
}

.p-button-fluid {
    width: 100%;
}

.p-button-fluid.p-button-icon-only {
    width: ${e("button.icon.only.width")};
}

.p-button:not(:disabled):hover {
    background: ${e("button.primary.hover.background")};
    border: 1px solid ${e("button.primary.hover.border.color")};
    color: ${e("button.primary.hover.color")};
}

.p-button:not(:disabled):active {
    background: ${e("button.primary.active.background")};
    border: 1px solid ${e("button.primary.active.border.color")};
    color: ${e("button.primary.active.color")};
}

.p-button:focus-visible {
    box-shadow: ${e("button.primary.focus.ring.shadow")};
    outline: ${e("button.focus.ring.width")} ${e("button.focus.ring.style")} ${e("button.primary.focus.ring.color")};
    outline-offset: ${e("button.focus.ring.offset")};
}

.p-button .p-badge {
    min-width: ${e("button.badge.size")};
    height: ${e("button.badge.size")};
    line-height: ${e("button.badge.size")};
}

.p-button-raised {
    box-shadow: ${e("button.raised.shadow")};
}

.p-button-rounded {
    border-radius: ${e("button.rounded.border.radius")};
}

.p-button-secondary {
    background: ${e("button.secondary.background")};
    border: 1px solid ${e("button.secondary.border.color")};
    color: ${e("button.secondary.color")};
}

.p-button-secondary:not(:disabled):hover {
    background: ${e("button.secondary.hover.background")};
    border: 1px solid ${e("button.secondary.hover.border.color")};
    color: ${e("button.secondary.hover.color")};
}

.p-button-secondary:not(:disabled):active {
    background: ${e("button.secondary.active.background")};
    border: 1px solid ${e("button.secondary.active.border.color")};
    color: ${e("button.secondary.active.color")};
}

.p-button-secondary:focus-visible {
    outline-color: ${e("button.secondary.focus.ring.color")};
    box-shadow: ${e("button.secondary.focus.ring.shadow")};
}

.p-button-success {
    background: ${e("button.success.background")};
    border: 1px solid ${e("button.success.border.color")};
    color: ${e("button.success.color")};
}

.p-button-success:not(:disabled):hover {
    background: ${e("button.success.hover.background")};
    border: 1px solid ${e("button.success.hover.border.color")};
    color: ${e("button.success.hover.color")};
}

.p-button-success:not(:disabled):active {
    background: ${e("button.success.active.background")};
    border: 1px solid ${e("button.success.active.border.color")};
    color: ${e("button.success.active.color")};
}

.p-button-success:focus-visible {
    outline-color: ${e("button.success.focus.ring.color")};
    box-shadow: ${e("button.success.focus.ring.shadow")};
}

.p-button-info {
    background: ${e("button.info.background")};
    border: 1px solid ${e("button.info.border.color")};
    color: ${e("button.info.color")};
}

.p-button-info:not(:disabled):hover {
    background: ${e("button.info.hover.background")};
    border: 1px solid ${e("button.info.hover.border.color")};
    color: ${e("button.info.hover.color")};
}

.p-button-info:not(:disabled):active {
    background: ${e("button.info.active.background")};
    border: 1px solid ${e("button.info.active.border.color")};
    color: ${e("button.info.active.color")};
}

.p-button-info:focus-visible {
    outline-color: ${e("button.info.focus.ring.color")};
    box-shadow: ${e("button.info.focus.ring.shadow")};
}

.p-button-warn {
    background: ${e("button.warn.background")};
    border: 1px solid ${e("button.warn.border.color")};
    color: ${e("button.warn.color")};
}

.p-button-warn:not(:disabled):hover {
    background: ${e("button.warn.hover.background")};
    border: 1px solid ${e("button.warn.hover.border.color")};
    color: ${e("button.warn.hover.color")};
}

.p-button-warn:not(:disabled):active {
    background: ${e("button.warn.active.background")};
    border: 1px solid ${e("button.warn.active.border.color")};
    color: ${e("button.warn.active.color")};
}

.p-button-warn:focus-visible {
    outline-color: ${e("button.warn.focus.ring.color")};
    box-shadow: ${e("button.warn.focus.ring.shadow")};
}

.p-button-help {
    background: ${e("button.help.background")};
    border: 1px solid ${e("button.help.border.color")};
    color: ${e("button.help.color")};
}

.p-button-help:not(:disabled):hover {
    background: ${e("button.help.hover.background")};
    border: 1px solid ${e("button.help.hover.border.color")};
    color: ${e("button.help.hover.color")};
}

.p-button-help:not(:disabled):active {
    background: ${e("button.help.active.background")};
    border: 1px solid ${e("button.help.active.border.color")};
    color: ${e("button.help.active.color")};
}

.p-button-help:focus-visible {
    outline-color: ${e("button.help.focus.ring.color")};
    box-shadow: ${e("button.help.focus.ring.shadow")};
}

.p-button-danger {
    background: ${e("button.danger.background")};
    border: 1px solid ${e("button.danger.border.color")};
    color: ${e("button.danger.color")};
}

.p-button-danger:not(:disabled):hover {
    background: ${e("button.danger.hover.background")};
    border: 1px solid ${e("button.danger.hover.border.color")};
    color: ${e("button.danger.hover.color")};
}

.p-button-danger:not(:disabled):active {
    background: ${e("button.danger.active.background")};
    border: 1px solid ${e("button.danger.active.border.color")};
    color: ${e("button.danger.active.color")};
}

.p-button-danger:focus-visible {
    outline-color: ${e("button.danger.focus.ring.color")};
    box-shadow: ${e("button.danger.focus.ring.shadow")};
}

.p-button-contrast {
    background: ${e("button.contrast.background")};
    border: 1px solid ${e("button.contrast.border.color")};
    color: ${e("button.contrast.color")};
}

.p-button-contrast:not(:disabled):hover {
    background: ${e("button.contrast.hover.background")};
    border: 1px solid ${e("button.contrast.hover.border.color")};
    color: ${e("button.contrast.hover.color")};
}

.p-button-contrast:not(:disabled):active {
    background: ${e("button.contrast.active.background")};
    border: 1px solid ${e("button.contrast.active.border.color")};
    color: ${e("button.contrast.active.color")};
}

.p-button-contrast:focus-visible {
    outline-color: ${e("button.contrast.focus.ring.color")};
    box-shadow: ${e("button.contrast.focus.ring.shadow")};
}

.p-button-outlined {
    background: transparent;
    border-color: ${e("button.outlined.primary.border.color")};
    color: ${e("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):hover {
    background: ${e("button.outlined.primary.hover.background")};
    border-color: ${e("button.outlined.primary.border.color")};
    color: ${e("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):active {
    background: ${e("button.outlined.primary.active.background")};
    border-color: ${e("button.outlined.primary.border.color")};
    color: ${e("button.outlined.primary.color")};
}

.p-button-outlined.p-button-secondary {
    border-color: ${e("button.outlined.secondary.border.color")};
    color: ${e("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):hover {
    background: ${e("button.outlined.secondary.hover.background")};
    border-color: ${e("button.outlined.secondary.border.color")};
    color: ${e("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):active {
    background: ${e("button.outlined.secondary.active.background")};
    border-color: ${e("button.outlined.secondary.border.color")};
    color: ${e("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-success {
    border-color: ${e("button.outlined.success.border.color")};
    color: ${e("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):hover {
    background: ${e("button.outlined.success.hover.background")};
    border-color: ${e("button.outlined.success.border.color")};
    color: ${e("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):active {
    background: ${e("button.outlined.success.active.background")};
    border-color: ${e("button.outlined.success.border.color")};
    color: ${e("button.outlined.success.color")};
}

.p-button-outlined.p-button-info {
    border-color: ${e("button.outlined.info.border.color")};
    color: ${e("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):hover {
    background: ${e("button.outlined.info.hover.background")};
    border-color: ${e("button.outlined.info.border.color")};
    color: ${e("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):active {
    background: ${e("button.outlined.info.active.background")};
    border-color: ${e("button.outlined.info.border.color")};
    color: ${e("button.outlined.info.color")};
}

.p-button-outlined.p-button-warn {
    border-color: ${e("button.outlined.warn.border.color")};
    color: ${e("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):hover {
    background: ${e("button.outlined.warn.hover.background")};
    border-color: ${e("button.outlined.warn.border.color")};
    color: ${e("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):active {
    background: ${e("button.outlined.warn.active.background")};
    border-color: ${e("button.outlined.warn.border.color")};
    color: ${e("button.outlined.warn.color")};
}

.p-button-outlined.p-button-help {
    border-color: ${e("button.outlined.help.border.color")};
    color: ${e("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):hover {
    background: ${e("button.outlined.help.hover.background")};
    border-color: ${e("button.outlined.help.border.color")};
    color: ${e("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):active {
    background: ${e("button.outlined.help.active.background")};
    border-color: ${e("button.outlined.help.border.color")};
    color: ${e("button.outlined.help.color")};
}

.p-button-outlined.p-button-danger {
    border-color: ${e("button.outlined.danger.border.color")};
    color: ${e("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):hover {
    background: ${e("button.outlined.danger.hover.background")};
    border-color: ${e("button.outlined.danger.border.color")};
    color: ${e("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):active {
    background: ${e("button.outlined.danger.active.background")};
    border-color: ${e("button.outlined.danger.border.color")};
    color: ${e("button.outlined.danger.color")};
}

.p-button-outlined.p-button-contrast {
    border-color: ${e("button.outlined.contrast.border.color")};
    color: ${e("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):hover {
    background: ${e("button.outlined.contrast.hover.background")};
    border-color: ${e("button.outlined.contrast.border.color")};
    color: ${e("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):active {
    background: ${e("button.outlined.contrast.active.background")};
    border-color: ${e("button.outlined.contrast.border.color")};
    color: ${e("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-plain {
    border-color: ${e("button.outlined.plain.border.color")};
    color: ${e("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: ${e("button.outlined.plain.hover.background")};
    border-color: ${e("button.outlined.plain.border.color")};
    color: ${e("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):active {
    background: ${e("button.outlined.plain.active.background")};
    border-color: ${e("button.outlined.plain.border.color")};
    color: ${e("button.outlined.plain.color")};
}

.p-button-text {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.primary.color")};
}

.p-button-text:not(:disabled):hover {
    background: ${e("button.text.primary.hover.background")};
    border-color: transparent;
    color: ${e("button.text.primary.color")};
}

.p-button-text:not(:disabled):active {
    background: ${e("button.text.primary.active.background")};
    border-color: transparent;
    color: ${e("button.text.primary.color")};
}

.p-button-text.p-button-secondary {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):hover {
    background: ${e("button.text.secondary.hover.background")};
    border-color: transparent;
    color: ${e("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):active {
    background: ${e("button.text.secondary.active.background")};
    border-color: transparent;
    color: ${e("button.text.secondary.color")};
}

.p-button-text.p-button-success {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):hover {
    background: ${e("button.text.success.hover.background")};
    border-color: transparent;
    color: ${e("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):active {
    background: ${e("button.text.success.active.background")};
    border-color: transparent;
    color: ${e("button.text.success.color")};
}

.p-button-text.p-button-info {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):hover {
    background: ${e("button.text.info.hover.background")};
    border-color: transparent;
    color: ${e("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):active {
    background: ${e("button.text.info.active.background")};
    border-color: transparent;
    color: ${e("button.text.info.color")};
}

.p-button-text.p-button-warn {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):hover {
    background: ${e("button.text.warn.hover.background")};
    border-color: transparent;
    color: ${e("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):active {
    background: ${e("button.text.warn.active.background")};
    border-color: transparent;
    color: ${e("button.text.warn.color")};
}

.p-button-text.p-button-help {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):hover {
    background: ${e("button.text.help.hover.background")};
    border-color: transparent;
    color: ${e("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):active {
    background: ${e("button.text.help.active.background")};
    border-color: transparent;
    color: ${e("button.text.help.color")};
}

.p-button-text.p-button-danger {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):hover {
    background: ${e("button.text.danger.hover.background")};
    border-color: transparent;
    color: ${e("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):active {
    background: ${e("button.text.danger.active.background")};
    border-color: transparent;
    color: ${e("button.text.danger.color")};
}

.p-button-text.p-button-plain {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):hover {
    background: ${e("button.text.plain.hover.background")};
    border-color: transparent;
    color: ${e("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):active {
    background: ${e("button.text.plain.active.background")};
    border-color: transparent;
    color: ${e("button.text.plain.color")};
}

.p-button-text.p-button-contrast {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):hover {
    background: ${e("button.text.contrast.hover.background")};
    border-color: transparent;
    color: ${e("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):active {
    background: ${e("button.text.contrast.active.background")};
    border-color: transparent;
    color: ${e("button.text.contrast.color")};
}

.p-button-link {
    background: transparent;
    border-color: transparent;
    color: ${e("button.link.color")};
}

.p-button-link:not(:disabled):hover {
    background: transparent;
    border-color: transparent;
    color: ${e("button.link.hover.color")};
}

.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
}

.p-button-link:not(:disabled):active {
    background: transparent;
    border-color: transparent;
    color: ${e("button.link.active.color")};
}

/* For PrimeNG */
.p-button-icon-right {
    order: 1;
}

p-button[iconpos='right'] spinnericon {
    order: 1;
}
`,$h={root:({instance:e,props:n})=>["p-button p-component",{"p-button-icon-only":e.hasIcon&&!n.label&&!n.badge,"p-button-vertical":(n.iconPos==="top"||n.iconPos==="bottom")&&n.label,"p-button-loading":n.loading,"p-button-link":n.link,[`p-button-${n.severity}`]:n.severity,"p-button-raised":n.raised,"p-button-rounded":n.rounded,"p-button-text":n.text,"p-button-outlined":n.outlined,"p-button-sm":n.size==="small","p-button-lg":n.size==="large","p-button-plain":n.plain,"p-button-fluid":n.fluid}],loadingIcon:"p-button-loading-icon",icon:({props:e})=>["p-button-icon",{[`p-button-icon-${e.iconPos}`]:e.label}],label:"p-button-label"},Rc=(()=>{class e extends X{name="button";theme=Dh;classes=$h;static \u0275fac=(()=>{let t;return function(i){return(t||(t=k(e)))(i||e)}})();static \u0275prov=A({token:e,factory:e.\u0275fac})}return e})();var ki=(()=>{class e extends H{type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;fluid;onClick=new q;onFocus=new q;onBlur=new q;contentTemplate;loadingIconTemplate;iconTemplate;_buttonProps;get buttonProps(){return this._buttonProps}set buttonProps(t){this._buttonProps=t,t&&typeof t=="object"&&Object.entries(t).forEach(([o,i])=>this[`_${o}`]!==i&&(this[`_${o}`]=i))}get hasFluid(){let o=this.el.nativeElement.closest("p-fluid");return We(this.fluid)?!!o:this.fluid}_componentStyle=y(Rc);templates;_contentTemplate;_iconTemplate;_loadingIconTemplate;ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break;case"icon":this._iconTemplate=t.template;break;case"loadingicon":this._loadingIconTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}ngOnChanges(t){super.ngOnChanges(t);let{buttonProps:o}=t;if(o){let i=o.currentValue;for(let r in i)this[r]=i[r]}}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,t])=>!!t).reduce((t,[o])=>t+` ${o}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}get buttonClass(){return{"p-button p-component":!0,"p-button-icon-only":(this.icon||this.iconTemplate||this._iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate)&&!this.label,"p-button-vertical":(this.iconPos==="top"||this.iconPos==="bottom")&&this.label,"p-button-loading":this.loading,"p-button-loading-label-only":this.loading&&!this.icon&&this.label&&!this.loadingIcon&&this.iconPos==="left","p-button-link":this.link,[`p-button-${this.severity}`]:this.severity,"p-button-raised":this.raised,"p-button-rounded":this.rounded,"p-button-text":this.text||this.variant=="text","p-button-outlined":this.outlined||this.variant=="outlined","p-button-sm":this.size==="small","p-button-lg":this.size==="large","p-button-plain":this.plain,"p-button-fluid":this.hasFluid,[`${this.styleClass}`]:this.styleClass}}static \u0275fac=(()=>{let t;return function(i){return(t||(t=k(e)))(i||e)}})();static \u0275cmp=I({type:e,selectors:[["p-button"]],contentQueries:function(o,i,r){if(o&1&&(B(r,mh,5),B(r,fh,5),B(r,hh,5),B(r,Ie,4)),o&2){let a;E(a=R())&&(i.contentTemplate=a.first),E(a=R())&&(i.loadingIconTemplate=a.first),E(a=R())&&(i.iconTemplate=a.first),E(a=R())&&(i.templates=a)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",$],loading:[2,"loading","loading",$],loadingIcon:"loadingIcon",raised:[2,"raised","raised",$],rounded:[2,"rounded","rounded",$],text:[2,"text","text",$],plain:[2,"plain","plain",$],severity:"severity",outlined:[2,"outlined","outlined",$],link:[2,"link","link",$],tabindex:[2,"tabindex","tabindex",me],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",$],fluid:[2,"fluid","fluid",$],buttonProps:"buttonProps"},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[J([Rc]),O,De],ngContentSelectors:gh,decls:7,vars:14,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","ngClass","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],["class","p-button-label",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass",4,"ngIf"],[3,"styleClass","spin",4,"ngIf"],[3,"ngClass"],[3,"styleClass","spin"],[3,"ngIf"],[3,"class","ngClass",4,"ngIf"],[1,"p-button-label"],[3,"value","severity"]],template:function(o,i){o&1&&(ie(),d(0,"button",0),M("click",function(a){return i.onClick.emit(a)})("focus",function(a){return i.onFocus.emit(a)})("blur",function(a){return i.onBlur.emit(a)}),Z(1),b(2,bh,1,0,"ng-container",1)(3,wh,3,5,"ng-container",2)(4,Th,3,5,"ng-container",2)(5,Eh,2,3,"span",3)(6,Rh,1,2,"p-badge",4),u()),o&2&&(c("ngStyle",i.style)("disabled",i.disabled||i.loading)("ngClass",i.buttonClass)("pAutoFocus",i.autofocus),_("type",i.type)("aria-label",i.ariaLabel)("data-pc-name","button")("data-pc-section","root")("tabindex",i.tabindex),p(2),c("ngTemplateOutlet",i.contentTemplate||i._contentTemplate),p(),c("ngIf",i.loading),p(),c("ngIf",!i.loading),p(),c("ngIf",!i.contentTemplate&&!i._contentTemplate&&i.label),p(),c("ngIf",!i.contentTemplate&&!i._contentTemplate&&i.badge))},dependencies:[F,ge,Oe,we,Ve,uo,yc,Ic,xc,Ca,V],encapsulation:2,changeDetection:0})}return e})(),Bt=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=Y({type:e});static \u0275inj=K({imports:[F,ki,V,V]})}return e})();var Ah=["item"],Oh=["header"],Mh=["footer"],Bh=["previousicon"],Fh=["nexticon"],Lh=["itemsContainer"],Ph=["indicatorContent"],Nh=[[["p-header"]],[["p-footer"]]],Vh=["p-header","p-footer"],Hh=(e,n)=>({"p-carousel p-component":!0,"p-carousel-vertical":e,"p-carousel-horizontal":n}),zh=e=>({height:e}),jh=e=>({"p-carousel-prev-button":!0,"p-disabled":e}),Oc=(e,n,t)=>({"p-carousel-item p-carousel-item-clone":!0,"p-carousel-item-active":e,"p-carousel-item-start":n,"p-carousel-item-end":t}),Ia=e=>({$implicit:e}),Uh=(e,n,t)=>({"p-carousel-item":!0,"p-carousel-item-active":e,"p-carousel-item-start":n,"p-carousel-item-end":t}),Wh=e=>({"p-carousel-next-button":!0,"p-disabled":e}),Gh=e=>({"p-carousel-indicator":!0,"p-carousel-indicator-active":e});function qh(e,n){e&1&&ae(0)}function Qh(e,n){if(e&1&&(d(0,"div",14),Z(1),b(2,qh,1,0,"ng-container",15),u()),e&2){let t=m();p(2),c("ngTemplateOutlet",t.headerTemplate)}}function Kh(e,n){e&1&&h(0,"ChevronLeftIcon",20),e&2&&c("styleClass","carousel-prev-icon")}function Yh(e,n){e&1&&h(0,"ChevronUpIcon",20),e&2&&c("styleClass","carousel-prev-icon")}function Zh(e,n){if(e&1&&(te(0),b(1,Kh,1,1,"ChevronLeftIcon",19)(2,Yh,1,1,"ChevronUpIcon",19),oe()),e&2){let t=m(3);p(),c("ngIf",!t.isVertical()),p(),c("ngIf",t.isVertical())}}function Xh(e,n){}function Jh(e,n){e&1&&b(0,Xh,0,0,"ng-template")}function eg(e,n){if(e&1&&(d(0,"span",21),b(1,Jh,1,0,null,15),u()),e&2){let t=m(3);p(),c("ngTemplateOutlet",t.previousIconTemplate||t._previousIconTemplate)}}function tg(e,n){if(e&1&&b(0,Zh,3,2,"ng-container",17)(1,eg,2,1,"span",18),e&2){let t=m(2);c("ngIf",!t.previousIconTemplate&&!t._previousIconTemplate&&!(t.prevButtonProps!=null&&t.prevButtonProps.icon)),p(),c("ngIf",(t.previousIconTemplate||t._previousIconTemplate)&&!(t.prevButtonProps!=null&&t.prevButtonProps.icon))}}function og(e,n){if(e&1){let t=L();d(0,"p-button",16),M("click",function(i){C(t);let r=m();return w(r.navBackward(i))}),b(1,tg,2,2,"ng-template",null,1,he),u()}if(e&2){let t=m();c("ngClass",U(5,jh,t.isBackwardNavDisabled()))("disabled",t.isBackwardNavDisabled())("text",!0)("buttonProps",t.prevButtonProps),_("aria-label",t.ariaPrevButtonLabel())}}function ig(e,n){e&1&&ae(0)}function ng(e,n){if(e&1&&(d(0,"div",5),b(1,ig,1,0,"ng-container",22),u()),e&2){let t=n.$implicit,o=n.index,i=m();c("ngClass",vt(6,Oc,i.totalShiftedItems*-1===i.value.length,o===0,i.clonedItemsForStarting.length-1===o)),_("aria-hidden",i.totalShiftedItems*-1!==i.value.length)("aria-label",i.ariaSlideNumber(o))("aria-roledescription",i.ariaSlideLabel()),p(),c("ngTemplateOutlet",i.itemTemplate||i._itemTemplate)("ngTemplateOutletContext",U(10,Ia,t))}}function rg(e,n){e&1&&ae(0)}function ag(e,n){if(e&1&&(d(0,"div",5),b(1,rg,1,0,"ng-container",22),u()),e&2){let t=n.$implicit,o=n.index,i=m();c("ngClass",vt(6,Uh,i.firstIndex()<=o&&i.lastIndex()>=o,i.firstIndex()===o,i.lastIndex()===o)),_("aria-hidden",i.totalShiftedItems*-1!==i.value.length)("aria-label",i.ariaSlideNumber(o))("aria-roledescription",i.ariaSlideLabel()),p(),c("ngTemplateOutlet",i.itemTemplate||i._itemTemplate)("ngTemplateOutletContext",U(10,Ia,t))}}function sg(e,n){e&1&&ae(0)}function lg(e,n){if(e&1&&(d(0,"div",5),b(1,sg,1,0,"ng-container",22),u()),e&2){let t=n.$implicit,o=n.index,i=m();c("ngClass",vt(3,Oc,i.totalShiftedItems*-1===i.numVisible,o===0,i.clonedItemsForFinishing.length-1===o)),p(),c("ngTemplateOutlet",i.itemTemplate||i._itemTemplate)("ngTemplateOutletContext",U(7,Ia,t))}}function cg(e,n){e&1&&h(0,"ChevronRightIcon",20),e&2&&c("styleClass","carousel-next-icon")}function dg(e,n){e&1&&h(0,"ChevronDownIcon",20),e&2&&c("styleClass","carousel-next-icon")}function ug(e,n){if(e&1&&(te(0),b(1,cg,1,1,"ChevronRightIcon",19)(2,dg,1,1,"ChevronDownIcon",19),oe()),e&2){let t=m(3);p(),c("ngIf",!t.isVertical()),p(),c("ngIf",t.isVertical())}}function pg(e,n){}function mg(e,n){e&1&&b(0,pg,0,0,"ng-template")}function fg(e,n){if(e&1&&(d(0,"span",25),b(1,mg,1,0,null,15),u()),e&2){let t=m(3);p(),c("ngTemplateOutlet",t.nextIconTemplate||t._nextIconTemplate)}}function hg(e,n){if(e&1&&b(0,ug,3,2,"ng-container",17)(1,fg,2,1,"span",24),e&2){let t=m(2);c("ngIf",!t.nextIconTemplate&&!t._nextIconTemplate&&!(t.nextButtonProps!=null&&t.nextButtonProps.icon)),p(),c("ngIf",t.nextIconTemplate||t._nextIconTemplate&&!(t.nextButtonProps!=null&&t.nextButtonProps.icon))}}function gg(e,n){if(e&1){let t=L();d(0,"p-button",23),M("click",function(i){C(t);let r=m();return w(r.navForward(i))}),b(1,hg,2,2,"ng-template",null,1,he),u()}if(e&2){let t=m();c("ngClass",U(5,Wh,t.isForwardNavDisabled()))("disabled",t.isForwardNavDisabled())("buttonProps",t.nextButtonProps)("text",!0),_("aria-label",t.ariaNextButtonLabel())}}function bg(e,n){if(e&1){let t=L();d(0,"li",5)(1,"button",27),M("click",function(i){let r=C(t).index,a=m(2);return w(a.onDotClick(i,r))}),u()()}if(e&2){let t=n.index,o=m(2);c("ngClass",U(9,Gh,o._page===t)),_("data-pc-section","indicator"),p(),P(o.indicatorStyleClass),c("ngClass","p-carousel-indicator-button")("ngStyle",o.indicatorStyle)("tabindex",o._page===t?0:-1),_("aria-label",o.ariaPageLabel(t+1))("aria-current",o._page===t?"page":void 0)}}function vg(e,n){if(e&1){let t=L();d(0,"ul",26,2),M("keydown",function(i){C(t);let r=m();return w(r.onIndicatorKeydown(i))}),b(2,bg,2,11,"li",10),u()}if(e&2){let t=m();P(t.indicatorsContentClass),c("ngClass","p-carousel-indicator-list")("ngStyle",t.indicatorsContentStyle),p(2),c("ngForOf",t.totalDotsArray())}}function yg(e,n){e&1&&ae(0)}function _g(e,n){if(e&1&&(d(0,"div",28),Z(1,1),b(2,yg,1,0,"ng-container",15),u()),e&2){let t=m();p(2),c("ngTemplateOutlet",t.footerTemplate||t._footerTemplate)}}var xg=({dt:e})=>`
.p-carousel {
    display: flex;
    flex-direction: column;
}

.p-carousel-content-container {
    display: flex;
    flex-direction: column;
    overflow: auto;
}

.p-carousel-content {
    display: flex;
    flex-direction: row;
    gap: ${e("carousel.content.gap")};
}

.p-carousel-content:dir(rtl) {
    flex-direction: row-reverse;
}

.p-carousel-viewport {
    overflow: hidden;
    width: 100%;
}

.p-carousel-item-list {
    display: flex;
    flex-direction: row;
}

.p-carousel-item-list:dir(rtl) {
    flex-direction: row-reverse;
}

.p-carousel-prev-button,
.p-carousel-next-button {
    align-self: center;
    flex-shrink: 0;
}

.p-carousel-indicator-list {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    padding: ${e("carousel.indicator.list.padding")};
    gap: ${e("carousel.indicator.list.gap")};
    margin: 0;
    list-style: none;
}

.p-carousel-indicator-button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${e("carousel.indicator.background")};
    width: ${e("carousel.indicator.width")};
    height: ${e("carousel.indicator.height")};
    border: 0 none;
    transition: background ${e("carousel.transition.duration")}, color ${e("carousel.transition.duration")}, outline-color ${e("carousel.transition.duration")}, box-shadow ${e("carousel.transition.duration")};
    outline-color: transparent;
    border-radius: ${e("carousel.indicator.border.radius")};
    padding: 0;
    margin: 0;
    user-select: none;
    cursor: pointer;
}

.p-carousel-indicator-button:focus-visible {
    box-shadow: ${e("carousel.indicator.focus.ring.shadow")};
    outline: ${e("carousel.indicator.focus.ring.width")} ${e("carousel.indicator.focus.ring.style")} ${e("carousel.indicator.focus.ring.color")};
    outline-offset: ${e("carousel.indicator.focus.ring.offset")};
}

.p-carousel-indicator-button:hover {
    background: ${e("carousel.indicator.hover.background")};
}

.p-carousel-indicator-active .p-carousel-indicator-button {
    background: ${e("carousel.indicator.active.background")};
}

.p-carousel-vertical .p-carousel-content {
    flex-direction: column;
}

.p-carousel-vertical .p-carousel-item-list {
    flex-direction: column;
    height: 100%;
}

.p-items-hidden .p-carousel-item {
    visibility: hidden;
}

.p-items-hidden .p-carousel-item.p-carousel-item-active {
    visibility: visible;
}
`,Cg={root:({instance:e})=>["p-carousel p-component",{"p-carousel-vertical":e.isVertical(),"p-carousel-horizontal":!e.isVertical()}],header:"p-carousel-header",contentContainer:"p-carousel-content-container",content:"p-carousel-content",pcPrevButton:({instance:e})=>["p-carousel-prev-button",{"p-disabled":e.backwardIsDisabled}],viewport:"p-carousel-viewport",itemList:"p-carousel-item-list",itemClone:({index:e,value:n,totalShiftedItems:t,d_numVisible:o})=>["p-carousel-item p-carousel-item-clone",{"p-carousel-item-active":t*-1===n.length+o,"p-carousel-item-start":e===0,"p-carousel-item-end":n.slice(-1*o).length-1===e}],item:({instance:e,index:n})=>["p-carousel-item",{"p-carousel-item-active":e.firstIndex()<=n&&e.lastIndex()>=n,"p-carousel-item-start":e.firstIndex()===n,"p-carousel-item-end":e.lastIndex()===n}],pcNextButton:({instance:e})=>["p-carousel-next-button",{"p-disabled":e.forwardIsDisabled}],indicatorList:"p-carousel-indicator-list",indicator:({instance:e,index:n})=>["p-carousel-indicator",{"p-carousel-indicator-active":e.d_page===n}],indicatorButton:"p-carousel-indicator-button",footer:"p-carousel-footer"},Ac=(()=>{class e extends X{name="carousel";theme=xg;classes=Cg;static \u0275fac=(()=>{let t;return function(i){return(t||(t=k(e)))(i||e)}})();static \u0275prov=A({token:e,factory:e.\u0275fac})}return e})();var Sa=(()=>{class e extends H{el;zone;get page(){return this._page}set page(t){this.isCreated&&t!==this._page&&(this.autoplayInterval&&this.stopAutoplay(),t>this._page&&t<=this.totalDots()-1?this.step(-1,t):t<this._page&&this.step(1,t)),this._page=t}get numVisible(){return this._numVisible}set numVisible(t){this._numVisible=t}get numScroll(){return this._numVisible}set numScroll(t){this._numScroll=t}responsiveOptions;orientation="horizontal";verticalViewPortHeight="300px";contentClass="";indicatorsContentClass="";indicatorsContentStyle;indicatorStyleClass="";indicatorStyle;get value(){return this._value}set value(t){this._value=t}circular=!1;showIndicators=!0;showNavigators=!0;autoplayInterval=0;style;styleClass;prevButtonProps={severity:"secondary",text:!0,rounded:!0};nextButtonProps={severity:"secondary",text:!0,rounded:!0};onPage=new q;itemsContainer;indicatorContent;headerFacet;footerFacet;_numVisible=1;_numScroll=1;_oldNumScroll=0;prevState={numScroll:0,numVisible:0,value:[]};defaultNumScroll=1;defaultNumVisible=1;_page=0;_value;carouselStyle;id;totalShiftedItems;isRemainingItemsAdded=!1;animationTimeout;translateTimeout;remainingItems=0;_items;startPos;documentResizeListener;clonedItemsForStarting;clonedItemsForFinishing;allowAutoplay;interval;isCreated;swipeThreshold=20;itemTemplate;headerTemplate;footerTemplate;previousIconTemplate;nextIconTemplate;_itemTemplate;_headerTemplate;_footerTemplate;_previousIconTemplate;_nextIconTemplate;window;_componentStyle=y(Ac);constructor(t,o){super(),this.el=t,this.zone=o,this.totalShiftedItems=this.page*this.numScroll*-1,this.window=this.document.defaultView}ngOnChanges(t){re(this.platformId)&&(t.value&&this.circular&&this._value&&this.setCloneItems(),this.isCreated&&(t.numVisible&&(this.responsiveOptions&&(this.defaultNumVisible=this.numVisible),this.isCircular()&&this.setCloneItems(),this.createStyle(),this.calculatePosition()),t.numScroll&&this.responsiveOptions&&(this.defaultNumScroll=this.numScroll))),this.cd.markForCheck()}templates;ngAfterContentInit(){this.id=ce("pn_id_"),re(this.platformId)&&(this.allowAutoplay=!!this.autoplayInterval,this.circular&&this.setCloneItems(),this.responsiveOptions&&(this.defaultNumScroll=this._numScroll,this.defaultNumVisible=this._numVisible),this.createStyle(),this.calculatePosition(),this.responsiveOptions&&this.bindDocumentListeners()),this.templates?.forEach(t=>{switch(t.getType()){case"item":this._itemTemplate=t.template;break;case"header":this._headerTemplate=t.template;break;case"footer":this._footerTemplate=t.template;break;case"previousicon":this._previousIconTemplate=t.template;break;case"nexticon":this._nextIconTemplate=t.template;break;default:this._itemTemplate=t.template;break}}),this.cd.detectChanges()}ngAfterContentChecked(){if(re(this.platformId)){let t=this.isCircular(),o=this.totalShiftedItems;if(this.value&&this.itemsContainer&&(this.prevState.numScroll!==this._numScroll||this.prevState.numVisible!==this._numVisible||this.prevState.value.length!==this.value.length)){this.autoplayInterval&&this.stopAutoplay(!1),this.remainingItems=(this.value.length-this._numVisible)%this._numScroll;let i=this._page;this.totalDots()!==0&&i>=this.totalDots()&&(i=this.totalDots()-1,this._page=i,this.onPage.emit({page:this.page})),o=i*this._numScroll*-1,t&&(o-=this._numVisible),i===this.totalDots()-1&&this.remainingItems>0?(o+=-1*this.remainingItems+this._numScroll,this.isRemainingItemsAdded=!0):this.isRemainingItemsAdded=!1,o!==this.totalShiftedItems&&(this.totalShiftedItems=o),this._oldNumScroll=this._numScroll,this.prevState.numScroll=this._numScroll,this.prevState.numVisible=this._numVisible,this.prevState.value=[...this._value],this.totalDots()>0&&this.itemsContainer.nativeElement&&(this.itemsContainer.nativeElement.style.transform=this.isVertical()?`translate3d(0, ${o*(100/this._numVisible)}%, 0)`:`translate3d(${o*(100/this._numVisible)}%, 0, 0)`),this.isCreated=!0,this.autoplayInterval&&this.isAutoplay()&&this.startAutoplay()}t&&(this.page===0?o=-1*this._numVisible:o===0&&(o=-1*this.value.length,this.remainingItems>0&&(this.isRemainingItemsAdded=!0)),o!==this.totalShiftedItems&&(this.totalShiftedItems=o))}}createStyle(){this.carouselStyle||(this.carouselStyle=this.renderer.createElement("style"),this.carouselStyle.type="text/css",vo(this.carouselStyle,"nonce",this.config?.csp()?.nonce),this.renderer.appendChild(this.document.head,this.carouselStyle));let t=`
            #${this.id} .p-carousel-item {
				flex: 1 0 ${100/this.numVisible}%
			}
        `;if(this.responsiveOptions){this.responsiveOptions.sort((o,i)=>{let r=o.breakpoint,a=i.breakpoint,s=null;return r==null&&a!=null?s=-1:r!=null&&a==null?s=1:r==null&&a==null?s=0:typeof r=="string"&&typeof a=="string"?s=r.localeCompare(a,void 0,{numeric:!0}):s=r<a?-1:r>a?1:0,-1*s});for(let o=0;o<this.responsiveOptions.length;o++){let i=this.responsiveOptions[o];t+=`
                    @media screen and (max-width: ${i.breakpoint}) {
                        #${this.id} .p-carousel-item {
                            flex: 1 0 ${100/i.numVisible}%
                        }
                    }
                `}}this.carouselStyle.innerHTML=t}calculatePosition(){if(this.responsiveOptions){let t={numVisible:this.defaultNumVisible,numScroll:this.defaultNumScroll};if(typeof window<"u"){let o=window.innerWidth;for(let i=0;i<this.responsiveOptions.length;i++){let r=this.responsiveOptions[i];parseInt(r.breakpoint,10)>=o&&(t=r)}}if(this._numScroll!==t.numScroll){let o=this._page;o=Math.floor(o*this._numScroll/t.numScroll);let i=t.numScroll*this.page*-1;this.isCircular()&&(i-=t.numVisible),this.totalShiftedItems=i,this._numScroll=t.numScroll,this._page=o,this.onPage.emit({page:this.page})}this._numVisible!==t.numVisible&&(this._numVisible=t.numVisible,this.setCloneItems()),this.cd.markForCheck()}}setCloneItems(){this.clonedItemsForStarting=[],this.clonedItemsForFinishing=[],this.isCircular()&&(this.clonedItemsForStarting.push(...this.value.slice(-1*this._numVisible)),this.clonedItemsForFinishing.push(...this.value.slice(0,this._numVisible)))}firstIndex(){return this.isCircular()?-1*(this.totalShiftedItems+this.numVisible):this.totalShiftedItems*-1}lastIndex(){return this.firstIndex()+this.numVisible-1}totalDots(){return this.value?.length?Math.ceil((this.value.length-this._numVisible)/this._numScroll)+1:0}totalDotsArray(){let t=this.totalDots();return t<=0?[]:Array(t).fill(0)}isVertical(){return this.orientation==="vertical"}isCircular(){return this.circular&&this.value&&this.value.length>=this.numVisible}isAutoplay(){return this.autoplayInterval&&this.allowAutoplay}isForwardNavDisabled(){return this.isEmpty()||this._page>=this.totalDots()-1&&!this.isCircular()}isBackwardNavDisabled(){return this.isEmpty()||this._page<=0&&!this.isCircular()}isEmpty(){return!this.value||this.value.length===0}navForward(t,o){(this.isCircular()||this._page<this.totalDots()-1)&&this.step(-1,o),this.autoplayInterval&&this.stopAutoplay(),t&&t.cancelable&&t.preventDefault()}navBackward(t,o){(this.isCircular()||this._page!==0)&&this.step(1,o),this.autoplayInterval&&this.stopAutoplay(),t&&t.cancelable&&t.preventDefault()}onDotClick(t,o){let i=this._page;this.autoplayInterval&&this.stopAutoplay(),o>i?this.navForward(t,o):o<i&&this.navBackward(t,o)}onIndicatorKeydown(t){switch(t.code){case"ArrowRight":this.onRightKey();break;case"ArrowLeft":this.onLeftKey();break}}onRightKey(){let t=[...Ye(this.indicatorContent.nativeElement,'[data-pc-section="indicator"]')],o=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(o,o+1===t.length?t.length-1:o+1)}onLeftKey(){let t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,t-1<=0?0:t-1)}onHomeKey(){let t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,0)}onEndKey(){let t=[...Ye(this.indicatorContent.nativeElement,'[data-pc-section="indicator"]r')],o=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(o,t.length-1)}onTabKey(){let t=[...Ye(this.indicatorContent.nativeElement,'[data-pc-section="indicator"]')],o=t.findIndex(a=>tt(a,"data-p-highlight")===!0),i=ye(this.indicatorContent.nativeElement,'[data-pc-section="indicator"] > button[tabindex="0"]'),r=t.findIndex(a=>a===i.parentElement);t[r].children[0].tabIndex="-1",t[o].children[0].tabIndex="0"}findFocusedIndicatorIndex(){let t=[...Ye(this.indicatorContent.nativeElement,'[data-pc-section="indicator"]')],o=ye(this.indicatorContent.nativeElement,'[data-pc-section="indicator"] > button[tabindex="0"]');return t.findIndex(i=>i===o.parentElement)}changedFocusedIndicator(t,o){let i=[...Ye(this.indicatorContent.nativeElement,'[data-pc-section="indicator"]')];i[t].children[0].tabIndex="-1",i[o].children[0].tabIndex="0",i[o].children[0].focus()}step(t,o){let i=this.totalShiftedItems,r=this.isCircular();if(o!=null)i=this._numScroll*o*-1,r&&(i-=this._numVisible),this.isRemainingItemsAdded=!1;else{i+=this._numScroll*t,this.isRemainingItemsAdded&&(i+=this.remainingItems-this._numScroll*t,this.isRemainingItemsAdded=!1);let a=r?i+this._numVisible:i;o=Math.abs(Math.floor(a/this._numScroll))}r&&this.page===this.totalDots()-1&&t===-1?(i=-1*(this.value.length+this._numVisible),o=0):r&&this.page===0&&t===1?(i=0,o=this.totalDots()-1):o===this.totalDots()-1&&this.remainingItems>0&&(i+=this.remainingItems*-1-this._numScroll*t,this.isRemainingItemsAdded=!0),this.itemsContainer&&(this.itemsContainer.nativeElement.style.transform=this.isVertical()?`translate3d(0, ${i*(100/this._numVisible)}%, 0)`:`translate3d(${i*(100/this._numVisible)}%, 0, 0)`,this.itemsContainer.nativeElement.style.transition="transform 500ms ease 0s"),this.totalShiftedItems=i,this._page=o,this.onPage.emit({page:this.page}),this.cd.markForCheck()}startAutoplay(){this.interval=setInterval(()=>{this.totalDots()>0&&(this.page===this.totalDots()-1?this.step(-1,0):this.step(-1,this.page+1))},this.autoplayInterval),this.allowAutoplay=!0,this.cd.markForCheck()}stopAutoplay(t=!0){this.interval&&(clearInterval(this.interval),this.interval=void 0,t&&(this.allowAutoplay=!1)),this.cd.markForCheck()}isPlaying(){return!!this.interval}onTransitionEnd(){this.itemsContainer&&(this.itemsContainer.nativeElement.style.transition="",(this.page===0||this.page===this.totalDots()-1)&&this.isCircular()&&(this.itemsContainer.nativeElement.style.transform=this.isVertical()?`translate3d(0, ${this.totalShiftedItems*(100/this._numVisible)}%, 0)`:`translate3d(${this.totalShiftedItems*(100/this._numVisible)}%, 0, 0)`))}onTouchStart(t){let o=t.changedTouches[0];this.startPos={x:o.pageX,y:o.pageY}}onTouchMove(t){t.cancelable&&t.preventDefault()}onTouchEnd(t){let o=t.changedTouches[0];this.isVertical()?this.changePageOnTouch(t,o.pageY-this.startPos.y):this.changePageOnTouch(t,o.pageX-this.startPos.x)}changePageOnTouch(t,o){Math.abs(o)>this.swipeThreshold&&(o<0?this.navForward(t):this.navBackward(t))}ariaPrevButtonLabel(){return this.config.translation.aria?this.config.translation.aria.prevPageLabel:void 0}ariaSlideLabel(){return this.config.translation.aria?this.config.translation.aria.slide:void 0}ariaNextButtonLabel(){return this.config.translation.aria?this.config.translation.aria.nextPageLabel:void 0}ariaSlideNumber(t){return this.config.translation.aria?this.config.translation.aria.slideNumber.replace(/{slideNumber}/g,t):void 0}ariaPageLabel(t){return this.config.translation.aria?this.config.translation.aria.pageLabel.replace(/{page}/g,t):void 0}bindDocumentListeners(){re(this.platformId)&&(this.documentResizeListener||(this.documentResizeListener=this.renderer.listen(this.window,"resize",t=>{this.calculatePosition()})))}unbindDocumentListeners(){re(this.platformId)&&this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}ngOnDestroy(){this.responsiveOptions&&this.unbindDocumentListeners(),this.autoplayInterval&&this.stopAutoplay()}static \u0275fac=function(o){return new(o||e)(Q(Je),Q(Me))};static \u0275cmp=I({type:e,selectors:[["p-carousel"]],contentQueries:function(o,i,r){if(o&1&&(B(r,ml,5),B(r,pn,5),B(r,Ah,4),B(r,Oh,4),B(r,Mh,4),B(r,Bh,4),B(r,Fh,4),B(r,Ie,4)),o&2){let a;E(a=R())&&(i.headerFacet=a.first),E(a=R())&&(i.footerFacet=a.first),E(a=R())&&(i.itemTemplate=a.first),E(a=R())&&(i.headerTemplate=a.first),E(a=R())&&(i.footerTemplate=a.first),E(a=R())&&(i.previousIconTemplate=a.first),E(a=R())&&(i.nextIconTemplate=a.first),E(a=R())&&(i.templates=a)}},viewQuery:function(o,i){if(o&1&&(be(Lh,5),be(Ph,5)),o&2){let r;E(r=R())&&(i.itemsContainer=r.first),E(r=R())&&(i.indicatorContent=r.first)}},inputs:{page:"page",numVisible:"numVisible",numScroll:"numScroll",responsiveOptions:"responsiveOptions",orientation:"orientation",verticalViewPortHeight:"verticalViewPortHeight",contentClass:"contentClass",indicatorsContentClass:"indicatorsContentClass",indicatorsContentStyle:"indicatorsContentStyle",indicatorStyleClass:"indicatorStyleClass",indicatorStyle:"indicatorStyle",value:"value",circular:[2,"circular","circular",$],showIndicators:[2,"showIndicators","showIndicators",$],showNavigators:[2,"showNavigators","showNavigators",$],autoplayInterval:[2,"autoplayInterval","autoplayInterval",me],style:"style",styleClass:"styleClass",prevButtonProps:"prevButtonProps",nextButtonProps:"nextButtonProps"},outputs:{onPage:"onPage"},features:[J([Ac]),O,De],ngContentSelectors:Vh,decls:14,vars:23,consts:[["itemsContainer",""],["icon",""],["indicatorContent",""],["role","region",3,"ngClass","ngStyle"],["class","p-carousel-header",4,"ngIf"],[3,"ngClass"],[1,"p-carousel-content"],[3,"ngClass","disabled","text","buttonProps","click",4,"ngIf"],[1,"p-carousel-viewport",3,"touchend","touchstart","touchmove","ngStyle"],[1,"p-carousel-item-list",3,"transitionend"],[3,"ngClass",4,"ngFor","ngForOf"],["type","button",3,"ngClass","disabled","buttonProps","text","click",4,"ngIf"],[3,"ngClass","class","ngStyle","keydown",4,"ngIf"],["class","p-carousel-footer",4,"ngIf"],[1,"p-carousel-header"],[4,"ngTemplateOutlet"],[3,"click","ngClass","disabled","text","buttonProps"],[4,"ngIf"],["class","p-carousel-prev-icon",4,"ngIf"],[3,"styleClass",4,"ngIf"],[3,"styleClass"],[1,"p-carousel-prev-icon"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["type","button",3,"click","ngClass","disabled","buttonProps","text"],["class","next",4,"ngIf"],[1,"next"],[3,"keydown","ngClass","ngStyle"],["type","button",3,"click","ngClass","ngStyle","tabindex"],[1,"p-carousel-footer"]],template:function(o,i){if(o&1){let r=L();ie(Nh),d(0,"div",3),b(1,Qh,3,1,"div",4),d(2,"div",5)(3,"div",6),b(4,og,3,7,"p-button",7),d(5,"div",8),M("touchend",function(s){return C(r),w(i.onTouchEnd(s))})("touchstart",function(s){return C(r),w(i.onTouchStart(s))})("touchmove",function(s){return C(r),w(i.onTouchMove(s))}),d(6,"div",9,0),M("transitionend",function(){return C(r),w(i.onTransitionEnd())}),b(8,ng,2,12,"div",10)(9,ag,2,12,"div",10)(10,lg,2,9,"div",10),u()(),b(11,gg,3,7,"p-button",11),u(),b(12,vg,3,5,"ul",12),u(),b(13,_g,3,1,"div",13),u()}o&2&&(P(i.styleClass),c("ngClass",Rt(18,Hh,i.isVertical(),!i.isVertical()))("ngStyle",i.style),_("id",i.id),p(),c("ngIf",i.headerFacet||i.headerTemplate),p(),P(i.contentClass),c("ngClass","p-carousel-content-container"),p(),_("aria-live",i.allowAutoplay?"polite":"off"),p(),c("ngIf",i.showNavigators),p(),c("ngStyle",U(21,zh,i.isVertical()?i.verticalViewPortHeight:"auto")),p(3),c("ngForOf",i.clonedItemsForStarting),p(),c("ngForOf",i.value),p(),c("ngForOf",i.clonedItemsForFinishing),p(),c("ngIf",i.showNavigators),p(),c("ngIf",i.showIndicators),p(),c("ngIf",i.footerFacet||i.footerTemplate||i._footerTemplate))},dependencies:[F,ge,pt,Oe,we,Ve,Mt,Bt,ki,Jt,co,Si,V],encapsulation:2,changeDetection:0})}return e})(),Pn=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=Y({type:e});static \u0275inj=K({imports:[Sa,V,V]})}return e})();var Fo=class e{ResponsiveOptions=[{breakpoint:"1536px",numVisible:3,numScroll:1},{breakpoint:"1280px",numVisible:3,numScroll:1},{breakpoint:"1024px",numVisible:3,numScroll:1},{breakpoint:"768px",numVisible:2,numScroll:1},{breakpoint:"640px",numVisible:1,numScroll:1}];static \u0275fac=function(t){return new(t||e)};static \u0275prov=A({token:e,factory:e.\u0275fac,providedIn:"root"})};function Sg(e,n){if(e&1&&(d(0,"div",2),h(1,"img",3),u()),e&2){let t=n.$implicit;p(),c("src",t.image,ut)}}var Nn=class e{breakPoints=y(Fo);responsibleBreakpoints=this.breakPoints.ResponsiveOptions;products=[{name:"Image 1",image:"assets/images/image1.png"},{name:"Image 3",image:"assets/images/image3.png"},{name:"Image 2",image:"assets/images/image2.png"}];static \u0275fac=function(t){return new(t||e)};static \u0275cmp=I({type:e,selectors:[["app-reviews"]],decls:2,vars:5,consts:[[3,"circular","value","numVisible","numScroll","responsiveOptions"],["pTemplate","item"],[1,"shadow-lg","rounded-2xl","m-3","min-h-[45vh]","overflow-hidden","border-8","border-stone-400"],[1,"w-full","hover:scale-110","duration-300","object-cover",3,"src"]],template:function(t,o){t&1&&(d(0,"p-carousel",0),b(1,Sg,2,1,"ng-template",1),u()),t&2&&c("circular",!0)("value",o.products)("numVisible",3)("numScroll",1)("responsiveOptions",o.responsibleBreakpoints)},dependencies:[F,Pn,Sa,Ie],encapsulation:2})};var Mc=(()=>{class e extends H{enterClass;leaveClass;root;rootMargin;threshold;once=!0;observer;resetObserver;isObserverActive=!1;animationState;animationEndListener;ngOnInit(){super.ngOnInit(),re(this.platformId)&&this.renderer.setStyle(this.el.nativeElement,"opacity",this.enterClass?"0":"")}ngAfterViewInit(){super.ngAfterViewInit(),re(this.platformId)&&this.bindIntersectionObserver()}get options(){return{root:this.root,rootMargin:this.rootMargin,threshold:this.threshold}}bindIntersectionObserver(){this.observer=new IntersectionObserver(([t])=>{this.isObserverActive?t.boundingClientRect.top>0&&(t.isIntersecting?this.enter():this.leave()):t.isIntersecting&&this.enter(),this.isObserverActive=!0},this.options),setTimeout(()=>this.observer.observe(this.el.nativeElement),0),this.resetObserver=new IntersectionObserver(([t])=>{t.boundingClientRect.top>0&&!t.isIntersecting&&(this.el.nativeElement.style.opacity=this.enterClass?"0":"",ke(this.el.nativeElement,[this.enterClass,this.leaveClass]),this.resetObserver.unobserve(this.el.nativeElement)),this.animationState=void 0},Ae(T({},this.options),{threshold:0}))}enter(){this.animationState!=="enter"&&this.enterClass&&(this.el.nativeElement.style.opacity="",ke(this.el.nativeElement,this.leaveClass),Pe(this.el.nativeElement,this.enterClass),this.once&&this.unbindIntersectionObserver(),this.bindAnimationEvents(),this.animationState="enter")}leave(){this.animationState!=="leave"&&this.leaveClass&&(this.el.nativeElement.style.opacity=this.enterClass?"0":"",ke(this.el.nativeElement,this.enterClass),Pe(this.el.nativeElement,this.leaveClass),this.bindAnimationEvents(),this.animationState="leave")}bindAnimationEvents(){this.animationEndListener||(this.animationEndListener=this.renderer.listen(this.el.nativeElement,"animationend",()=>{ke(this.el.nativeElement,[this.enterClass,this.leaveClass]),!this.once&&this.resetObserver.observe(this.el.nativeElement),this.unbindAnimationEvents()}))}unbindAnimationEvents(){this.animationEndListener&&(this.animationEndListener(),this.animationEndListener=null)}unbindIntersectionObserver(){this.observer?.unobserve(this.el.nativeElement),this.resetObserver?.unobserve(this.el.nativeElement),this.isObserverActive=!1}ngOnDestroy(){this.unbindAnimationEvents(),this.unbindIntersectionObserver(),super.ngOnDestroy()}static \u0275fac=(()=>{let t;return function(i){return(t||(t=k(e)))(i||e)}})();static \u0275dir=$e({type:e,selectors:[["","pAnimateOnScroll",""]],hostVars:2,hostBindings:function(o,i){o&2&&Ce("p-animateonscroll",!0)},inputs:{enterClass:"enterClass",leaveClass:"leaveClass",root:"root",rootMargin:"rootMargin",threshold:[2,"threshold","threshold",me],once:[2,"once","once",$]},features:[O]})}return e})(),Bc=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=Y({type:e});static \u0275inj=K({})}return e})();var Vn=class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=I({type:e,selectors:[["app-medicals"]],decls:22,vars:0,consts:[[1,"flex","flex-wrap","justify-center","gap-8"],["pAnimateOnScroll","","enterClass","animate-enter fade-in-10 slide-in-from-l-8 animate-duration-1000","leaveClass","animate-leave fade-out-0",1,"flex","flex-col","border","border-surface","shadow-lg","bg-gradient-to-r","from-slate-50","to-slate-200","justify-center","items-center","max-w-80","rounded-2xl","p-8","gap-4"],[1,"rounded-full","bg-primary","w-12","h-12","flex","items-center","justify-center","bg-gradient-to-r","textSand"],[1,"pi","pi-user","!text-2xl"],[1,"text-xl","font-black","bg-gradient-to-r","textSand"],[1,"text-sm","text-muted-color","text-center","font-extralight"],["pAnimateOnScroll","","enterClass","animate-enter fade-in-10 animate-duration-1000","leaveClass","animate-leave fade-out-0",1,"flex","flex-col","border","border-surface","shadow-lg","bg-gradient-to-r","from-slate-50","to-slate-200","justify-center","items-center","max-w-80","rounded-2xl","p-8","gap-4"],[1,"pi","pi-users","!text-2xl"],["pAnimateOnScroll","","enterClass","animate-enter fade-in-10 slide-in-from-r-8 animate-duration-1000","leaveClass","animate-leave fade-out-0",1,"flex","flex-col","border","border-surface","shadow-lg","bg-gradient-to-r","from-slate-50","to-slate-200","justify-center","items-center","max-w-80","rounded-2xl","p-8","gap-4"],[1,"rounded-full","bg-primary","w-12","h-12","flex","bg-gradient-to-r","textSand","items-center","justify-center"],[1,"pi","pi-building","!text-2xl"]],template:function(t,o){t&1&&(d(0,"div",0)(1,"div",1)(2,"div",2),h(3,"i",3),u(),d(4,"span",4),v(5,"Individual"),u(),d(6,"span",5),v(7,"Book and manage your medical appointments easily."),u()(),d(8,"div",6)(9,"div",2),h(10,"i",7),u(),d(11,"span",4),v(12,"Team"),u(),d(13,"span",5),v(14,"Coordinate schedules and patient bookings seamlessly."),u()(),d(15,"div",8)(16,"div",9),h(17,"span",10),u(),d(18,"span",4),v(19,"Enterprise"),u(),d(20,"span",5),v(21,"Scalable solutions for clinics and hospitals."),u()()())},dependencies:[F,Bc,Mc],encapsulation:2})};function Tg(){let e=[],n=(r,a)=>{let s=e.length>0?e[e.length-1]:{key:r,value:a},l=s.value+(s.key===r?0:a)+2;return e.push({key:r,value:l}),l},t=r=>{e=e.filter(a=>a.value!==r)},o=()=>e.length>0?e[e.length-1].value:0,i=r=>r&&parseInt(r.style.zIndex,10)||0;return{get:i,set:(r,a,s)=>{a&&(a.style.zIndex=String(n(r,s)))},clear:r=>{r&&(t(i(r)),r.style.zIndex="")},getCurrent:()=>o(),generateZIndex:n,revertZIndex:t}}var po=Tg(),ka=e=>!!e;var Lo=["*"],Pc=["content"],Nc=(e,n,t)=>({activateCallback:e,value:n,active:t});function Eg(e,n){e&1&&h(0,"p-stepper-separator")}function Rg(e,n){if(e&1){let t=L();d(0,"button",0),M("click",function(){C(t);let i=m();return w(i.onStepClick())}),d(1,"span",1),v(2),u(),d(3,"span",2),Z(4),u()(),b(5,Eg,1,0,"p-stepper-separator")}if(e&2){let t=m();c("tabindex",t.isStepDisabled()?-1:void 0)("disabled",t.isStepDisabled()),_("id",t.id())("role","tab")("aria-controls",t.ariaControls()),p(2),de(t.value()),p(3),et(t.isSeparatorVisible()?5:-1)}}function Dg(e,n){e&1&&ae(0)}function $g(e,n){e&1&&h(0,"p-stepper-separator")}function Ag(e,n){if(e&1&&b(0,Dg,1,0,"ng-container",3)(1,$g,1,0,"p-stepper-separator"),e&2){let t=m();c("ngTemplateOutlet",t.content||t._contentTemplate)("ngTemplateOutletContext",vt(3,Nc,t.onStepClick.bind(t),t.value(),t.active())),p(),et(t.isSeparatorVisible()?1:-1)}}var Fc=e=>({transitionParams:e}),Og=e=>({value:"visible",params:e}),Mg=e=>({value:"hidden",params:e});function Bg(e,n){e&1&&h(0,"p-stepper-separator")}function Fg(e,n){e&1&&ae(0)}function Lg(e,n){if(e&1&&b(0,Fg,1,0,"ng-container",1),e&2){let t=m();c("ngTemplateOutlet",t.contentTemplate||t._contentTemplate)("ngTemplateOutletContext",vt(2,Nc,t.updateValue.bind(t),t.value(),t.active()))}}var Pg=({dt:e})=>`
.p-steplist {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style-type: none;
    overflow-x: auto;
}

.p-step {
    position: relative;
    display: flex;
    flex: 1 1 auto;
    align-items: center;
    gap: ${e("stepper.step.gap")};
    padding: ${e("stepper.step.padding")};
}

.p-step:last-of-type {
    flex: initial;
}

.p-step-header {
    border: 0 none;
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    transition: background ${e("stepper.transition.duration")}, color ${e("stepper.transition.duration")}, border-color ${e("stepper.transition.duration")}, outline-color ${e("stepper.transition.duration")}, box-shadow ${e("stepper.transition.duration")};
    border-radius: ${e("stepper.step.header.border.radius")};
    outline-color: transparent;
    background: transparent;
    padding: ${e("stepper.step.header.padding")};
    gap: ${e("stepper.step.header.gap")};
}

.p-step-header:focus-visible {
    box-shadow: ${e("stepper.step.header.focus.ring.shadow")};
    outline: ${e("stepper.step.header.focus.ring.width")} ${e("stepper.step.header.focus.ring.style")} ${e("stepper.step.header.focus.ring.color")};
    outline-offset: ${e("stepper.step.header.focus.ring.offset")};
}

.p-stepper.p-stepper-readonly .p-step {
    cursor: auto;
}

.p-step-title {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    color: ${e("stepper.step.title.color")};
    font-weight: ${e("stepper.step.title.font.weight")};
    transition: background ${e("stepper.transition.duration")}, color ${e("stepper.transition.duration")}, border-color ${e("stepper.transition.duration")}, box-shadow ${e("stepper.transition.duration")}, outline-color ${e("stepper.transition.duration")};
}

.p-step-number {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${e("stepper.step.number.color")};
    border: 2px solid ${e("stepper.step.number.border.color")};
    background: ${e("stepper.step.number.background")};
    min-width: ${e("stepper.step.number.size")};
    height: ${e("stepper.step.number.size")};
    line-height: ${e("stepper.step.number.size")};
    font-size: ${e("stepper.step.number.font.size")};
    z-index: 1;
    border-radius: ${e("stepper.step.number.border.radius")};
    position: relative;
    font-weight: ${e("stepper.step.number.font.weight")};
}

.p-step-number::after {
    content: " ";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: ${e("stepper.step.number.border.radius")};
    box-shadow: ${e("stepper.step.number.shadow")};
}

.p-step-active .p-step-header {
    cursor: default;
}

.p-step-active .p-step-number {
    background: ${e("stepper.step.number.active.background")};
    border-color: ${e("stepper.step.number.active.border.color")};
    color: ${e("stepper.step.number.active.color")};
}

.p-step-active .p-step-title {
    color: ${e("stepper.step.title.active.color")};
}

.p-step:not(.p-disabled):focus-visible {
    outline: ${e("focus.ring.width")} ${e("focus.ring.style")} ${e("focus.ring.color")};
    outline-offset: ${e("focus.ring.offset")};
}

.p-step:has(~ .p-step-active) .p-stepper-separator {
    background: ${e("stepper.separator.active.background")};
}

.p-stepper-separator {
    flex: 1 1 0;
    background: ${e("stepper.separator.background")};
    width: 100%;
    height: ${e("stepper.separator.size")};
    transition: background ${e("stepper.transition.duration")}, color ${e("stepper.transition.duration")}, border-color ${e("stepper.transition.duration")}, box-shadow ${e("stepper.transition.duration")}, outline-color ${e("stepper.transition.duration")};
}

.p-steppanels {
    padding: ${e("stepper.steppanels.padding")};
}

.p-steppanel {
    background: ${e("stepper.steppanel.background")};
    color: ${e("stepper.steppanel.color")};
}

.p-stepper:has(.p-stepitem) {
    display: flex;
    flex-direction: column;
}

.p-stepitem {
    display: flex;
    flex-direction: column;
    flex: initial;
}

.p-stepitem.p-stepitem-active {
    flex: 1 1 auto;
}

.p-stepitem .p-step {
    flex: initial;
}

.p-stepitem .p-steppanel-content {
    width: 100%;
    padding: ${e("stepper.steppanel.padding")};
    margin-inline-start: 1rem;
}

.p-stepitem .p-steppanel {
    display: flex;
    flex: 1 1 auto;
}

.p-stepitem .p-stepper-separator {
    flex: 0 0 auto;
    width: ${e("stepper.separator.size")};
    height: auto;
    margin: ${e("stepper.separator.margin")};
    position: relative;
    left: calc(-1 * ${e("stepper.separator.size")});
}

.p-stepitem .p-stepper-separator:dir(rtl) {
    left: calc(-9 * ${e("stepper.separator.size")});
}

.p-stepitem:has(~ .p-stepitem-active) .p-stepper-separator {
    background: ${e("stepper.separator.active.background")};
}

.p-stepitem:last-of-type .p-steppanel {
    padding-inline-start: ${e("stepper.step.number.size")};
}
/* For PrimeNG */
.p-steppanel {
    overflow: hidden;
}

.p-stepppanel:not(.ng-animating) {
    overflow: inherit;
}
`,Ng={root:({props:e})=>["p-stepper p-component",{"p-readonly":e.linear}],separator:"p-stepper-separator"},Lc=(()=>{class e extends X{name="stepper";theme=Pg;classes=Ng;static \u0275fac=(()=>{let t;return function(i){return(t||(t=k(e)))(i||e)}})();static \u0275prov=A({token:e,factory:e.\u0275fac})}return e})();var Ta=(()=>{class e extends H{steps=Zi(Xe(()=>Ut));static \u0275fac=(()=>{let t;return function(i){return(t||(t=k(e)))(i||e)}})();static \u0275cmp=I({type:e,selectors:[["p-step-list"]],contentQueries:function(o,i,r){o&1&&qt(r,i.steps,Ut,4),o&2&&Zo()},hostVars:4,hostBindings:function(o,i){o&2&&Ce("p-steplist",!0)("p-component",!0)},features:[O],ngContentSelectors:Lo,decls:1,vars:0,template:function(o,i){o&1&&(ie(),Z(0))},dependencies:[F],encapsulation:2,changeDetection:0})}return e})(),Ea=(()=>{class e extends H{static \u0275fac=(()=>{let t;return function(i){return(t||(t=k(e)))(i||e)}})();static \u0275cmp=I({type:e,selectors:[["p-stepper-separator"]],hostVars:4,hostBindings:function(o,i){o&2&&Ce("p-stepper-separator",!0)("p-component",!0)},features:[O],ngContentSelectors:Lo,decls:1,vars:0,template:function(o,i){o&1&&(ie(),Z(0))},dependencies:[F],encapsulation:2,changeDetection:0})}return e})(),Ti=(()=>{class e extends H{pcStepper=y(Xe(()=>Po));value=Pt();isActive=se(()=>this.pcStepper.value()===this.value());step=Yo(Xe(()=>Ut));stepPanel=Yo(Xe(()=>Ei));constructor(){super(),$t(()=>{this.step().value.set(this.value())}),$t(()=>{this.stepPanel().value.set(this.value())})}static \u0275fac=function(o){return new(o||e)};static \u0275cmp=I({type:e,selectors:[["p-step-item"]],contentQueries:function(o,i,r){o&1&&(qt(r,i.step,Ut,5),qt(r,i.stepPanel,Ei,5)),o&2&&Zo(2)},hostVars:5,hostBindings:function(o,i){o&2&&(_("data-p-active",i.isActive()),Ce("p-stepitem",!0)("p-component",!0))},inputs:{value:[1,"value"]},outputs:{value:"valueChange"},features:[O],ngContentSelectors:Lo,decls:1,vars:0,template:function(o,i){o&1&&(ie(),Z(0))},dependencies:[F],encapsulation:2,changeDetection:0})}return e})(),Ut=(()=>{class e extends H{pcStepper=y(Xe(()=>Po));value=Pt();disabled=Ee(!1,{transform:t=>ka(t)});active=se(()=>this.pcStepper.isStepActive(this.value()));isStepDisabled=se(()=>!this.active()&&(this.pcStepper.linear()||this.disabled()));id=se(()=>`${this.pcStepper.id()}_step_${this.value()}`);ariaControls=se(()=>`${this.pcStepper.id()}_steppanel_${this.value()}`);isSeparatorVisible=se(()=>{if(this.pcStepper.stepList()){let t=this.pcStepper.stepList().steps(),o=t.indexOf(this),i=t.length;return o!==i-1}else return!1});content;templates;_contentTemplate;ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break}})}onStepClick(){this.pcStepper.updateValue(this.value())}static \u0275fac=(()=>{let t;return function(i){return(t||(t=k(e)))(i||e)}})();static \u0275cmp=I({type:e,selectors:[["p-step"]],contentQueries:function(o,i,r){if(o&1&&(B(r,Pc,4),B(r,Ie,4)),o&2){let a;E(a=R())&&(i.content=a.first),E(a=R())&&(i.templates=a)}},hostVars:13,hostBindings:function(o,i){o&2&&(_("aria-current",i.active()?"step":void 0)("role","presentation")("data-p-active",i.active())("data-p-disabled",i.isStepDisabled())("data-pc-name","step"),Ce("p-step",!0)("p-step-active",i.active())("p-disabled",i.isStepDisabled())("p-component",!0))},inputs:{value:[1,"value"],disabled:[1,"disabled"]},outputs:{value:"valueChange"},features:[O],ngContentSelectors:Lo,decls:2,vars:1,consts:[[1,"p-step-header",3,"click","tabindex","disabled"],[1,"p-step-number"],[1,"p-step-title"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(o,i){o&1&&(ie(),b(0,Rg,6,7)(1,Ag,2,7)),o&2&&et(!i.content&&!i._contentTemplate?0:1)},dependencies:[F,we,Ea,V],encapsulation:2,changeDetection:0})}return e})(),Ei=(()=>{class e extends H{pcStepper=y(Xe(()=>Po));transitionOptions=se(()=>this.pcStepper.transitionOptions());value=Pt(void 0);active=se(()=>this.pcStepper.value()===this.value());ariaControls=se(()=>`${this.pcStepper.id()}_step_${this.value()}`);id=se(()=>`${this.pcStepper.id()}_steppanel_${this.value()}`);isVertical=se(()=>this.pcStepper.stepItems().length>0);isSeparatorVisible=se(()=>{if(this.pcStepper.stepItems()){let t=this.pcStepper.stepItems().length,o=Ye(this.pcStepper.el.nativeElement,'[data-pc-name="steppanel"]');return cl(this.el.nativeElement,o)!==t-1}});contentTemplate;templates;_contentTemplate;ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break}})}updateValue(t){this.pcStepper.updateValue(t)}static \u0275fac=(()=>{let t;return function(i){return(t||(t=k(e)))(i||e)}})();static \u0275cmp=I({type:e,selectors:[["p-step-panel"]],contentQueries:function(o,i,r){if(o&1&&(B(r,Pc,5),B(r,Ie,4)),o&2){let a;E(a=R())&&(i.contentTemplate=a.first),E(a=R())&&(i.templates=a)}},hostVars:11,hostBindings:function(o,i){o&2&&(_("role","tabpanel")("aria-controls",i.ariaControls())("id",i.id())("data-p-active",i.active())("data-pc-name","steppanel"),Ce("p-steppanel",!0)("p-component",!0)("p-steppanel-active",i.active()))},inputs:{value:[1,"value"]},outputs:{value:"valueChange"},features:[O],decls:3,vars:11,consts:[[1,"p-steppanel-content"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(o,i){o&1&&(b(0,Bg,1,0,"p-stepper-separator"),d(1,"div",0),b(2,Lg,1,6,"ng-container"),u()),o&2&&(et(i.isSeparatorVisible()?0:-1),p(),c("@content",i.isVertical()?i.active()?U(5,Og,U(3,Fc,i.transitionOptions())):U(9,Mg,U(7,Fc,i.transitionOptions())):void 0),p(),et(i.active()?2:-1))},dependencies:[F,we,Ea,V],encapsulation:2,data:{animation:[yt("content",[Ke("hidden",Fe({height:"0",visibility:"hidden"})),Ke("visible",Fe({height:"*",visibility:"visible"})),Le("visible <=> hidden",[Be("250ms cubic-bezier(0.86, 0, 0.07, 1)")]),Le("void => *",Be(0))])]},changeDetection:0})}return e})(),Vg=(()=>{class e extends H{static \u0275fac=(()=>{let t;return function(i){return(t||(t=k(e)))(i||e)}})();static \u0275cmp=I({type:e,selectors:[["p-step-panels"]],hostVars:4,hostBindings:function(o,i){o&2&&Ce("p-steppanels",!0)("p-component",!0)},features:[O],ngContentSelectors:Lo,decls:1,vars:0,template:function(o,i){o&1&&(ie(),Z(0))},dependencies:[F,V],encapsulation:2,changeDetection:0})}return e})(),Po=(()=>{class e extends H{value=Pt(void 0);linear=Ee(!1,{transform:t=>ka(t)});transitionOptions=Ee("400ms cubic-bezier(0.86, 0, 0.07, 1)");_componentStyle=y(Lc);id=Se(ce("pn_id_"));stepItems=Zi(Ti);steps=Zi(Ut);stepList=Yo(Ta);updateValue(t){this.value.set(t)}isStepActive(t){return this.value()===t}static \u0275fac=(()=>{let t;return function(i){return(t||(t=k(e)))(i||e)}})();static \u0275cmp=I({type:e,selectors:[["p-stepper"]],contentQueries:function(o,i,r){o&1&&(qt(r,i.stepItems,Ti,4),qt(r,i.steps,Ut,4),qt(r,i.stepList,Ta,5)),o&2&&Zo(3)},hostVars:6,hostBindings:function(o,i){o&2&&(_("role","tablist")("id",i.id()),Ce("p-stepper",!0)("p-component",!0))},inputs:{value:[1,"value"],linear:[1,"linear"],transitionOptions:[1,"transitionOptions"]},outputs:{value:"valueChange"},features:[J([Lc]),O],ngContentSelectors:Lo,decls:1,vars:0,template:function(o,i){o&1&&(ie(),Z(0))},dependencies:[F,V],encapsulation:2,changeDetection:0})}return e})(),Vc=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=Y({type:e});static \u0275inj=K({imports:[Po,Ta,Vg,Ei,Ti,Ut,Ea,V,V]})}return e})();var No=class e{isActive=Se(!1);getData(){return[{itemImageSrc:"assets/images/carousel_1.jpg",thumbnailImageSrc:"assets/images/carousel_1.jpg",alt:"Description for Image 1",title:"Title 1"},{itemImageSrc:"assets/images/carousel_2.jpg",thumbnailImageSrc:"assets/images/carousel_2.jpg",alt:"Description for Image 2",title:"Title 2"},{itemImageSrc:"assets/images/carousel_3.jpg",thumbnailImageSrc:"assets/images/carousel_3.jpg",alt:"Description for Image 3",title:"Title 3"},{itemImageSrc:"assets/images/carousel_4.jpg",thumbnailImageSrc:"assets/images/carousel_4.jpg",alt:"Description for Image 4",title:"Title 4"},{itemImageSrc:"assets/images/carousel_5.jpg",thumbnailImageSrc:"assets/images/carousel_5.jpg",alt:"Description for Image 5",title:"Title 5"},{itemImageSrc:"assets/images/carousel_6.jpg",thumbnailImageSrc:"assets/images/carousel_6.jpg",alt:"Description for Image 6",title:"Title 6"}]}getImages(){return Promise.resolve(this.getData())}toggleState(){this.isActive.update(n=>!n)}static \u0275fac=function(t){return new(t||e)};static \u0275prov=A({token:e,factory:e.\u0275fac,providedIn:"root"})};function zg(e,n){if(e&1){let t=L();d(0,"div",7)(1,"div",8),v(2," Sign up through the Arucare app. Add your basic info. "),u()(),d(3,"div",9)(4,"button",10),M("click",function(){let i=C(t).activateCallback;return w(i(2))}),d(5,"span"),v(6,"Next"),u(),h(7,"span",11),u()()}}function jg(e,n){if(e&1){let t=L();d(0,"div",7)(1,"div",8),v(2," request a virtual appointment directly in the panel "),u()(),d(3,"div",12)(4,"button",10),M("click",function(){let i=C(t).activateCallback;return w(i(1))}),h(5,"span",13),d(6,"span"),v(7,"Back"),u()(),d(8,"button",10),M("click",function(){let i=C(t).activateCallback;return w(i(3))}),d(9,"span"),v(10,"Next"),u(),h(11,"span",11),u()()}}function Ug(e,n){if(e&1){let t=L();d(0,"div",7)(1,"div",8),v(2," join a secure video call with your provider \u2014 no traffic, no waiting rooms. Ask questions, get diagnosed, and receive your treatment plan in real time. "),u()(),d(3,"div",12)(4,"button",10),M("click",function(){let i=C(t).activateCallback;return w(i(2))}),h(5,"span",13),d(6,"span"),v(7,"Back"),u()(),d(8,"button",10),M("click",function(){let i=C(t).activateCallback;return w(i(4))}),d(9,"span"),v(10,"Next"),u(),h(11,"span",11),u()()}}function Wg(e,n){if(e&1){let t=L();d(0,"div",7)(1,"div",8),v(2," If your provider prescribes medication, you can have it delivered directly to your hotel,airbnb or home \u2014 fast, safe, and hassle-free "),u()(),d(3,"div",12)(4,"button",10),M("click",function(){let i=C(t).activateCallback;return w(i(3))}),h(5,"span",13),d(6,"span"),v(7,"Back"),u()(),d(8,"button",10),M("click",function(){let i=C(t).activateCallback;return w(i(5))}),d(9,"span"),v(10,"Next"),u(),h(11,"span",11),u()()}}function Gg(e,n){if(e&1){let t=L();d(0,"div",7)(1,"div",8),v(2," Use the app to manage follow-ups, view prescriptions, chat with your provider, and keep your health on track. "),u()(),d(3,"div",9)(4,"button",10),M("click",function(){let i=C(t).activateCallback;return w(i(4))}),h(5,"span",13),d(6,"span"),v(7,"Back"),u()()()}}var Hn=class e{constructor(n){this.photoService=n}toggle(){this.photoService.toggleState()}static \u0275fac=function(t){return new(t||e)(Q(No))};static \u0275cmp=I({type:e,selectors:[["app-reserve"]],decls:36,vars:6,consts:[["content",""],[1,"flex","flex-col","max-w-6xl","mx-auto","justify-center","text-sm","pl-3","pr-3"],[1,"card","p-5"],[3,"value"],[1,"bg-transparent"],["type","button",1,"w-fit","ml-auto","mr-5","cursor-pointer","font-semibold","flex","gap-3","items-center","bg-gradient-to-r","from-slate-50","to-stone-300","p-3","rounded-xl","shadow-sm","hover:bg-clip-text","duration-300","hover:text-transparent",3,"click"],[1,"pi","pi-images"],[1,"flex","flex-col","h-fit"],[1,"flex-auto","flex","justify-start","text-slate-50","text-xl","items-center","font-extralight"],[1,"py-6"],[1,"buttonEasy",3,"click"],[1,"pi","pi-arrow-right"],[1,"flex","py-6","gap-2"],[1,"pi","pi-arrow-left"]],template:function(t,o){if(t&1){let i=L();d(0,"div",1)(1,"div",2)(2,"p-stepper",3)(3,"p-step-item",3)(4,"p-step"),v(5,"Create your profile"),u(),d(6,"p-step-panel",4),b(7,zg,8,0,"ng-template",null,0,he),u()(),d(9,"p-step-item",3)(10,"p-step"),v(11,"Virtual Appointment"),u(),d(12,"p-step-panel",4),b(13,jg,12,0,"ng-template",null,0,he),u()(),d(15,"p-step-item",3)(16,"p-step"),v(17,"Have Your Consultation"),u(),d(18,"p-step-panel",4),b(19,Ug,12,0,"ng-template",null,0,he),u()(),d(21,"p-step-item",3)(22,"p-step"),v(23,"Medical Delivered"),u(),d(24,"p-step-panel",4),b(25,Wg,12,0,"ng-template",null,0,he),u()(),d(27,"p-step-item",3)(28,"p-step"),v(29,"Follow Up & Stay Connected"),u(),d(30,"p-step-panel",4),b(31,Gg,8,0,"ng-template",null,0,he),u()()()(),d(33,"button",5),M("click",function(){return C(i),w(o.toggle())}),h(34,"span",6),v(35," Tap to view "),u()()}t&2&&(p(2),c("value",1),p(),c("value",1),p(6),c("value",2),p(6),c("value",3),p(6),c("value",4),p(6),c("value",5))},dependencies:[Vc,Po,Ei,Ti,Ut,Bt],encapsulation:2})};var qg=["*"],Qg=({dt:e})=>`
.p-divider-horizontal {
    display: flex;
    width: 100%;
    position: relative;
    align-items: center;
    margin: ${e("divider.horizontal.margin")};
    padding: ${e("divider.horizontal.padding")};
}

.p-divider-horizontal:before {
    position: absolute;
    display: block;
    inset-block-start: 50%;
    inset-inline-start: 0;
    width: 100%;
    content: "";
    border-block-start: 1px solid ${e("divider.border.color")};
}

.p-divider-horizontal .p-divider-content {
    padding: ${e("divider.horizontal.content.padding")};
}

.p-divider-vertical {
    min-height: 100%;
    display: flex;
    position: relative;
    justify-content: center;
    margin: ${e("divider.vertical.margin")};
    padding: ${e("divider.vertical.padding")};
}

.p-divider-vertical:before {
    position: absolute;
    display: block;
    inset-block-start: 0;
    inset-inline-start: 50%;
    height: 100%;
    content: "";
    border-inline-start: 1px solid ${e("divider.border.color")};
}

.p-divider.p-divider-vertical .p-divider-content {
    padding: ${e("divider.vertical.content.padding")};
}

.p-divider-content {
    z-index: 1;
    background: ${e("divider.content.background")};
    color: ${e("divider.content.color")};
}

.p-divider-solid.p-divider-horizontal:before {
    border-block-start-style: solid;
}

.p-divider-solid.p-divider-vertical:before {
    border-inline-start-style: solid;
}

.p-divider-dashed.p-divider-horizontal:before {
    border-block-start-style: dashed;
}

.p-divider-dashed.p-divider-vertical:before {
    border-inline-start-style: dashed;
}

.p-divider-dotted.p-divider-horizontal:before {
    border-block-start-style: dotted;
}

.p-divider-dotted.p-divider-vertical:before {
    border-inline-start-style: dotted;
}

.p-divider-left:dir(rtl),
.p-divider-right:dir(rtl) {
    flex-direction: row-reverse;
}
`,Kg={root:({props:e})=>({justifyContent:e.layout==="horizontal"?e.align==="center"||e.align===null?"center":e.align==="left"?"flex-start":e.align==="right"?"flex-end":null:null,alignItems:e.layout==="vertical"?e.align==="center"||e.align===null?"center":e.align==="top"?"flex-start":e.align==="bottom"?"flex-end":null:null})},Yg={root:({props:e})=>["p-divider p-component","p-divider-"+e.layout,"p-divider-"+e.type,{"p-divider-left":e.layout==="horizontal"&&(!e.align||e.align==="left")},{"p-divider-center":e.layout==="horizontal"&&e.align==="center"},{"p-divider-right":e.layout==="horizontal"&&e.align==="right"},{"p-divider-top":e.layout==="vertical"&&e.align==="top"},{"p-divider-center":e.layout==="vertical"&&(!e.align||e.align==="center")},{"p-divider-bottom":e.layout==="vertical"&&e.align==="bottom"}],content:"p-divider-content"},zc=(()=>{class e extends X{name="divider";theme=Qg;classes=Yg;inlineStyles=Kg;static \u0275fac=(()=>{let t;return function(i){return(t||(t=k(e)))(i||e)}})();static \u0275prov=A({token:e,factory:e.\u0275fac})}return e})();var Wt=(()=>{class e extends H{style;styleClass;layout="horizontal";type="solid";align;_componentStyle=y(zc);get hostClass(){return this.styleClass}static \u0275fac=(()=>{let t;return function(i){return(t||(t=k(e)))(i||e)}})();static \u0275cmp=I({type:e,selectors:[["p-divider"]],hostVars:33,hostBindings:function(o,i){o&2&&(_("aria-orientation",i.layout)("data-pc-name","divider")("role","separator"),P(i.hostClass),Xi("justify-content",i.layout==="horizontal"?i.align==="center"||i.align===void 0?"center":i.align==="left"?"flex-start":i.align==="right"?"flex-end":null:null)("align-items",i.layout==="vertical"?i.align==="center"||i.align===void 0?"center":i.align==="top"?"flex-start":i.align==="bottom"?"flex-end":null:null),Ce("p-divider",!0)("p-component",!0)("p-divider-horizontal",i.layout==="horizontal")("p-divider-vertical",i.layout==="vertical")("p-divider-solid",i.type==="solid")("p-divider-dashed",i.type==="dashed")("p-divider-dotted",i.type==="dotted")("p-divider-left",i.layout==="horizontal"&&(!i.align||i.align==="left"))("p-divider-center",i.layout==="horizontal"&&i.align==="center"||i.layout==="vertical"&&(!i.align||i.align==="center"))("p-divider-right",i.layout==="horizontal"&&i.align==="right")("p-divider-top",i.layout==="vertical"&&i.align==="top")("p-divider-bottom",i.layout==="vertical"&&i.align==="bottom"))},inputs:{style:"style",styleClass:"styleClass",layout:"layout",type:"type",align:"align"},features:[J([zc]),O],ngContentSelectors:qg,decls:2,vars:0,consts:[[1,"p-divider-content"]],template:function(o,i){o&1&&(ie(),d(0,"div",0),Z(1),u())},dependencies:[F,V],encapsulation:2,changeDetection:0})}return e})(),eo=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=Y({type:e});static \u0275inj=K({imports:[Wt]})}return e})();var Zg=["header"],Xg=["expandicon"],Jg=["collapseicon"],e0=["content"],t0=["*",[["p-header"]]],o0=["*","p-header"],i0=(e,n)=>({"p-fieldset p-component":!0,"p-fieldset-toggleable":e,"p-fieldset-expanded":n}),n0=e=>({transitionParams:e,height:"0"}),r0=e=>({value:"hidden",params:e}),a0=e=>({transitionParams:e,height:"*"}),s0=e=>({value:"visible",params:e});function l0(e,n){e&1&&h(0,"PlusIcon",11),e&2&&(c("styleClass","p-fieldset-toggler"),_("data-pc-section","togglericon"))}function c0(e,n){e&1&&ae(0)}function d0(e,n){if(e&1&&(d(0,"span",12),b(1,c0,1,0,"ng-container",6),u()),e&2){let t=m(3);_("data-pc-section","togglericon"),p(),c("ngTemplateOutlet",t.expandIconTemplate||t._expandIconTemplate)}}function u0(e,n){if(e&1&&(te(0),b(1,l0,1,2,"PlusIcon",9)(2,d0,2,2,"span",10),oe()),e&2){let t=m(2);p(),c("ngIf",!t.expandIconTemplate&&!t._expandIconTemplate),p(),c("ngIf",t.expandIconTemplate||t._expandIconTemplate)}}function p0(e,n){e&1&&h(0,"MinusIcon",11),e&2&&(c("styleClass","p-fieldset-toggler"),_("aria-hidden",!0)("data-pc-section","togglericon"))}function m0(e,n){e&1&&ae(0)}function f0(e,n){if(e&1&&(d(0,"span",12),b(1,m0,1,0,"ng-container",6),u()),e&2){let t=m(3);_("data-pc-section","togglericon"),p(),c("ngTemplateOutlet",t.collapseIconTemplate||t._collapseIconTemplate)}}function h0(e,n){if(e&1&&(te(0),b(1,p0,1,3,"MinusIcon",9)(2,f0,2,2,"span",10),oe()),e&2){let t=m(2);p(),c("ngIf",!t.collapseIconTemplate&&!t._collapseIconTemplate),p(),c("ngIf",t.collapseIconTemplate||t._collapseIconTemplate)}}function g0(e,n){e&1&&ae(0)}function b0(e,n){if(e&1){let t=L();te(0),d(1,"button",7),M("click",function(i){C(t);let r=m();return w(r.toggle(i))})("keydown",function(i){C(t);let r=m();return w(r.onKeyDown(i))}),b(2,u0,3,2,"ng-container",8)(3,h0,3,2,"ng-container",8)(4,g0,1,0,"ng-container",6),u(),oe()}if(e&2){let t=m(),o=it(4);p(),_("id",t.id+"_header")("aria-controls",t.id+"_content")("aria-expanded",!t.collapsed)("aria-label",t.buttonAriaLabel),p(),c("ngIf",t.collapsed),p(),c("ngIf",!t.collapsed),p(),c("ngTemplateOutlet",o)}}function v0(e,n){e&1&&ae(0)}function y0(e,n){if(e&1&&(d(0,"span",13),v(1),u(),Z(2,1),b(3,v0,1,0,"ng-container",6)),e&2){let t=m();_("data-pc-section","legendtitle"),p(),de(t.legend),p(2),c("ngTemplateOutlet",t.headerTemplate||t._headerTemplate)}}function _0(e,n){e&1&&ae(0)}var x0=({dt:e})=>`
.p-fieldset {
    background: ${e("fieldset.background")};
    border: 1px solid ${e("fieldset.border.color")};
    border-radius: ${e("fieldset.border.radius")};
    color: ${e("fieldset.color")};
    padding:  ${e("fieldset.padding")};
    margin: 0;
}

.p-fieldset-legend {
    background: ${e("fieldset.legend.background")};
    border-radius: ${e("fieldset.legend.border.radius")};
    border-width: ${e("fieldset.legend.border.width")};
    border-style: solid;
    border-color: ${e("fieldset.legend.border.color")};
    color: ${e("fieldset.legend.color")};
    padding: ${e("fieldset.legend.padding")};
    transition: background ${e("fieldset.transition.duration")}, color ${e("fieldset.transition.duration")}, outline-color ${e("fieldset.transition.duration")}, box-shadow ${e("fieldset.transition.duration")};
}

.p-fieldset-toggleable > .p-fieldset-legend {
    padding: 0;
}

.p-fieldset-toggle-button {
    cursor: pointer;
    user-select: none;
    overflow: hidden;
    position: relative;
    text-decoration: none;
    display: flex;
    gap: ${e("fieldset.legend.gap")};
    align-items: center;
    justify-content: center;
    padding: ${e("fieldset.legend.padding")};
    background: transparent;
    border: 0 none;
    border-radius: ${e("fieldset.legend.border.radius")};
    transition: background ${e("fieldset.transition.duration")}, color ${e("fieldset.transition.duration")}, outline-color ${e("fieldset.transition.duration")}, box-shadow ${e("fieldset.transition.duration")};
    outline-color: transparent;
}

.p-fieldset-legend-label {
    font-weight: ${e("fieldset.legend.font.weight")};
}

.p-fieldset-toggle-button:focus-visible {
    box-shadow: ${e("fieldset.legend.focus.ring.shadow")};
    outline: ${e("fieldset.legend.focus.ring.width")} ${e("fieldset.legend.focus.ring.style")} ${e("fieldset.legend.focus.ring.color")};
    outline-offset: ${e("fieldset.legend.focus.ring.offset")};
}

.p-fieldset-toggleable > .p-fieldset-legend:hover {
    color: ${e("fieldset.legend.hover.color")};
    background: ${e("fieldset.legend.hover.background")};
}

.p-fieldset-toggle-icon {
    color: ${e("fieldset.toggle.icon.color")};
    transition: color ${e("fieldset.transition.duration")};
}

.p-fieldset-toggleable > .p-fieldset-legend:hover .p-fieldset-toggle-icon {
    color: ${e("fieldset.toggle.icon.hover.color")};
}

.p-fieldset .p-fieldset-content {
    padding: ${e("fieldset.content.padding")};
}

/* For PrimeNG */
.p-fieldset-toggleable.p-fieldset-expanded > .p-fieldset-content-container:not(.ng-animating) {
    overflow: visible
}

.p-fieldset-toggleable .p-fieldset-content-container {
    overflow: hidden;
}
`,C0={root:({props:e})=>["p-fieldset p-component",{"p-fieldset-toggleable":e.toggleable}],legend:"p-fieldset-legend",legendLabel:"p-fieldset-legend-label",toggleButton:"p-fieldset-toggle-button",toggleIcon:"p-fieldset-toggle-icon",contentContainer:"p-fieldset-content-container",content:"p-fieldset-content"},jc=(()=>{class e extends X{name="fieldset";theme=x0;classes=C0;static \u0275fac=(()=>{let t;return function(i){return(t||(t=k(e)))(i||e)}})();static \u0275prov=A({token:e,factory:e.\u0275fac})}return e})();var Ra=(()=>{class e extends H{legend;toggleable;collapsed=!1;style;styleClass;transitionOptions="400ms cubic-bezier(0.86, 0, 0.07, 1)";collapsedChange=new q;onBeforeToggle=new q;onAfterToggle=new q;get id(){return ce("pn_id_")}get buttonAriaLabel(){return this.legend}animating;_componentStyle=y(jc);headerTemplate;expandIconTemplate;collapseIconTemplate;contentTemplate;toggle(t){if(this.animating)return!1;this.animating=!0,this.onBeforeToggle.emit({originalEvent:t,collapsed:this.collapsed}),this.collapsed?this.expand():this.collapse(),this.onAfterToggle.emit({originalEvent:t,collapsed:this.collapsed}),t.preventDefault()}onKeyDown(t){(t.code==="Enter"||t.code==="Space")&&(this.toggle(t),t.preventDefault())}expand(){this.collapsed=!1,this.collapsedChange.emit(this.collapsed)}collapse(){this.collapsed=!0,this.collapsedChange.emit(this.collapsed)}getBlockableElement(){return this.el.nativeElement.children[0]}onToggleDone(){this.animating=!1}_headerTemplate;_expandIconTemplate;_collapseIconTemplate;_contentTemplate;templates;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"header":this._headerTemplate=t.template;break;case"expandicon":this._expandIconTemplate=t.template;break;case"collapseicon":this._collapseIconTemplate=t.template;break;case"content":this._contentTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(i){return(t||(t=k(e)))(i||e)}})();static \u0275cmp=I({type:e,selectors:[["p-fieldset"]],contentQueries:function(o,i,r){if(o&1&&(B(r,Zg,4),B(r,Xg,4),B(r,Jg,4),B(r,e0,4),B(r,Ie,4)),o&2){let a;E(a=R())&&(i.headerTemplate=a.first),E(a=R())&&(i.expandIconTemplate=a.first),E(a=R())&&(i.collapseIconTemplate=a.first),E(a=R())&&(i.contentTemplate=a.first),E(a=R())&&(i.templates=a)}},inputs:{legend:"legend",toggleable:[2,"toggleable","toggleable",$],collapsed:[2,"collapsed","collapsed",$],style:"style",styleClass:"styleClass",transitionOptions:"transitionOptions"},outputs:{collapsedChange:"collapsedChange",onBeforeToggle:"onBeforeToggle",onAfterToggle:"onAfterToggle"},features:[J([jc]),O],ngContentSelectors:o0,decls:9,vars:28,consts:[["legendContent",""],[3,"ngClass","ngStyle"],[1,"p-fieldset-legend"],[4,"ngIf","ngIfElse"],["role","region",1,"p-fieldset-content-container"],[1,"p-fieldset-content"],[4,"ngTemplateOutlet"],["tabindex","0","role","button",1,"p-fieldset-toggle-button",3,"click","keydown"],[4,"ngIf"],[3,"styleClass",4,"ngIf"],["class","p-fieldset-toggler",4,"ngIf"],[3,"styleClass"],[1,"p-fieldset-toggler"],[1,"p-fieldset-legend-label"]],template:function(o,i){if(o&1){let r=L();ie(t0),d(0,"fieldset",1)(1,"legend",2),b(2,b0,5,7,"ng-container",3)(3,y0,4,3,"ng-template",null,0,he),u(),d(5,"div",4),M("@fieldsetContent.done",function(){return C(r),w(i.onToggleDone())}),d(6,"div",5),Z(7),b(8,_0,1,0,"ng-container",6),u()()()}if(o&2){let r=it(4);P(i.styleClass),c("ngClass",Rt(17,i0,i.toggleable,!i.collapsed&&i.toggleable))("ngStyle",i.style),_("id",i.id)("data-pc-name","fieldset")("data-pc-section","root"),p(),_("data-pc-section","legend"),p(),c("ngIf",i.toggleable)("ngIfElse",r),p(3),c("@fieldsetContent",i.collapsed?U(22,r0,U(20,n0,i.transitionOptions)):U(26,s0,U(24,a0,i.animating?i.transitionOptions:"0ms"))),_("id",i.id+"_content")("aria-labelledby",i.id+"_header")("aria-hidden",i.collapsed)("data-pc-section","toggleablecontent"),p(),_("data-pc-section","content"),p(2),c("ngTemplateOutlet",i.contentTemplate||i._contentTemplate)}},dependencies:[F,ge,Oe,we,Ve,Bt,Fn,Ln,V],encapsulation:2,data:{animation:[yt("fieldsetContent",[Ke("hidden",Fe({height:"0"})),Ke("visible",Fe({height:"*"})),Le("visible <=> hidden",[Be("{{transitionParams}}")]),Le("void => *",Be(0))])]},changeDetection:0})}return e})(),jn=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=Y({type:e});static \u0275inj=K({imports:[Ra,V,V]})}return e})();var I0=["*"];function S0(e,n){if(e&1&&(d(0,"span",3),v(1),u()),e&2){let t=m();p(),de(t.label)}}function k0(e,n){if(e&1&&h(0,"span",5),e&2){let t=m(2);P(t.icon),c("ngClass","p-avatar-icon")}}function T0(e,n){if(e&1&&b(0,k0,1,3,"span",4),e&2){let t=m(),o=it(5);c("ngIf",t.icon)("ngIfElse",o)}}function E0(e,n){if(e&1){let t=L();d(0,"img",7),M("error",function(i){C(t);let r=m(2);return w(r.imageError(i))}),u()}if(e&2){let t=m(2);c("src",t.image,ut),_("aria-label",t.ariaLabel)}}function R0(e,n){if(e&1&&b(0,E0,1,2,"img",6),e&2){let t=m();c("ngIf",t.image)}}var D0=({dt:e})=>`
.p-avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: ${e("avatar.width")};
    height: ${e("avatar.height")};
    font-size: ${e("avatar.font.size")};
    color: ${e("avatar.color")};
    background: ${e("avatar.background")};
    border-radius: ${e("avatar.border.radius")};
}

.p-avatar-image {
    background: transparent;
}

.p-avatar-circle {
    border-radius: 50%;
}

.p-avatar-circle img {
    border-radius: 50%;
}

.p-avatar-icon {
    font-size: ${e("avatar.icon.size")};
    width: ${e("avatar.icon.size")};
    height: ${e("avatar.icon.size")};
}

.p-avatar img {
    width: 100%;
    height: 100%;
}

.p-avatar-lg {
    width: ${e("avatar.lg.width")};
    height: ${e("avatar.lg.width")};
    font-size: ${e("avatar.lg.font.size")};
}

.p-avatar-lg .p-avatar-icon {
    font-size: ${e("avatar.lg.icon.size")};
    width: ${e("avatar.lg.icon.size")};
    height: ${e("avatar.lg.icon.size")};
}

.p-avatar-xl {
    width: ${e("avatar.xl.width")};
    height: ${e("avatar.xl.width")};
    font-size: ${e("avatar.xl.font.size")};
}

.p-avatar-xl .p-avatar-icon {
    font-size: ${e("avatar.xl.font.size")};
    width: ${e("avatar.xl.icon.size")};
    height: ${e("avatar.xl.icon.size")};
}

.p-avatar-group {
    display: flex;
    align-items: center;
}

.p-avatar-group .p-avatar + .p-avatar {
    margin-inline-start: ${e("avatar.group.offset")};
}

.p-avatar-group .p-avatar {
    border: 2px solid ${e("avatar.group.border.color")};
}

.p-avatar-group .p-avatar-lg + .p-avatar-lg {
    margin-inline-start: ${e("avatar.lg.group.offset")};
}

.p-avatar-group .p-avatar-xl + .p-avatar-xl {
    margin-inline-start: ${e("avatar.xl.group.offset")};
}
`,$0={root:({props:e})=>["p-avatar p-component",{"p-avatar-image":e.image!=null,"p-avatar-circle":e.shape==="circle","p-avatar-lg":e.size==="large","p-avatar-xl":e.size==="xlarge"}],label:"p-avatar-label",icon:"p-avatar-icon"},Uc=(()=>{class e extends X{name="avatar";theme=D0;classes=$0;static \u0275fac=(()=>{let t;return function(i){return(t||(t=k(e)))(i||e)}})();static \u0275prov=A({token:e,factory:e.\u0275fac})}return e})();var A0=(()=>{class e extends H{label;icon;image;size="normal";shape="square";style;styleClass;ariaLabel;ariaLabelledBy;onImageError=new q;_componentStyle=y(Uc);imageError(t){this.onImageError.emit(t)}get hostClass(){return this.styleClass}static \u0275fac=(()=>{let t;return function(i){return(t||(t=k(e)))(i||e)}})();static \u0275cmp=I({type:e,selectors:[["p-avatar"]],hostVars:19,hostBindings:function(o,i){o&2&&(_("data-pc-name","avatar")("aria-label",i.ariaLabel)("aria-labelledby",i.ariaLabelledBy),Ji(i.style),P(i.hostClass),Ce("p-avatar",!0)("p-component",!0)("p-avatar-circle",i.shape==="circle")("p-avatar-lg",i.size==="large")("p-avatar-xl",i.size==="xlarge")("p-avatar-image",i.image!=null))},inputs:{label:"label",icon:"icon",image:"image",size:"size",shape:"shape",style:"style",styleClass:"styleClass",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy"},outputs:{onImageError:"onImageError"},features:[J([Uc]),O],ngContentSelectors:I0,decls:6,vars:2,consts:[["iconTemplate",""],["imageTemplate",""],["class","p-avatar-text",4,"ngIf","ngIfElse"],[1,"p-avatar-text"],[3,"class","ngClass",4,"ngIf","ngIfElse"],[3,"ngClass"],[3,"src","error",4,"ngIf"],[3,"error","src"]],template:function(o,i){if(o&1&&(ie(),Z(0),b(1,S0,2,1,"span",2)(2,T0,1,2,"ng-template",null,0,he)(4,R0,1,1,"ng-template",null,1,he)),o&2){let r=it(3);p(),c("ngIf",i.label)("ngIfElse",r)}},dependencies:[F,ge,Oe,V],encapsulation:2,changeDetection:0})}return e})(),Wc=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=Y({type:e});static \u0275inj=K({imports:[A0,V,V]})}return e})();var O0=e=>({"line-clamp-2":e});function M0(e,n){if(e&1){let t=L();d(0,"div")(1,"div",2),h(2,"img",3),d(3,"div",4)(4,"p",5),v(5),br(6,"titlecase"),u(),h(7,"p-divider"),d(8,"p",6)(9,"span",7),v(10,"Nationality: "),u(),v(11),br(12,"titlecase"),u(),d(13,"p",6)(14,"span",7),v(15,"Education: "),u(),v(16),u(),d(17,"p",8),v(18),u(),d(19,"button",9),M("click",function(){let i=C(t).index,r=m();return w(r.toggleShowMore(i))}),v(20),h(21,"span",10),u()()()()}if(e&2){let t=n.$implicit,o=n.index,i=m();p(2),c("src",t.image,ut),p(3),de(vr(6,8,t.name)),p(6),de(vr(12,10,t.nationality)),p(5),de(t.education),p(),c("ngClass",U(12,O0,!i.showMore[o])),p(),de(t.description),p(2),en(" ",i.showMore[o]?"Show less":"Show more"," "),p(),c("ngClass",i.showMore[o]?"pi-minus":"pi-plus")}}var Un=class e{showMore={};doctors=[{image:"assets/images/doctor1.png",name:"Juaquin van Trigt, MD",nationality:"Aruban",education:"University of Maastricht, The Netherlands: MD 2004/Residency in Family Medicine 2012",description:"I am a local Family Physician and have been working in our local practice since 2013. I take pride in giving the best medical care with personal detail to each patient. Understanding that being away from home in a different country can give us a feeling of insecurity when it comes to feeling ill/unwell having a doctor who U can feel comfortable around makes a big difference."},{image:"assets/images/doctor2.png",name:"Joke Hertogen, MD",nationality:"Belgian",education:"Free University of Brussels, Belgium: MD 2006/Residency in Family Medecine 2008/Residency in Youth Health Care 2016",description:" I am a Family Physician, originally from Belgium, living and working on the Island for now over 6 years. As a person who loves to travel and as a mother of 3, I do understand very well the need of a safe place and practice when it comes to healthcare abroad. Therefore I always try to make patients as comfortable as possible and I try to think and look together what can be done to get you, your family member or your child healthy again in a way that feels safe and professional and that you can still enjoy as much as possible of your holiday. I am experienced in different fields, with special affection for children and women health care."},{image:"assets/images/doctor3.png",name:"Nick Duindam, MD",nationality:"Dutch",education:"Vrije Universiteit Amsterdam (Free University of Amsterdam) The Netherlands: MD 2013/Residency in Family Medicine 2022",description:"I am a Dutch Medical Doctor who has decided to move to Aruba in 2020. After having worked as a doctor at various locations for more than 10 years, mainly focusing on medical emergencies, I decided to broaden my knowledge and took up the family physician residency here on Aruba (finishing 01/2025). I focus on giving patient-centered care and will make you feel comfortable and in good hands, understanding that any medical event during your holiday can make you feel uncertain or anxious, especially being in a foreign country."}];toggleShowMore(n){this.showMore[n]=!this.showMore[n]}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=I({type:e,selectors:[["app-team"]],decls:3,vars:1,consts:[[1,"text-center","sm:text-left","mx-auto","max-w-6xl","pb-10","text-6xl","font-bold","text-stone"],[4,"ngFor","ngForOf"],[1,"card","mb-5","max-w-5xl","mx-auto","flex","flex-col","md:flex-row","items-center","justify-center","gap-5","shadow-lg","rounded-2xl","p-5","sm:p-10","backdrop-blur-sm","bg-gradient-to-r","from-gray-100/50","to-blue-100/50"],[1,"max-w-60","mx-auto","md:w-1/2","rounded-full","md:rounded-4xl","object-cover",3,"src"],[1,"md:w-1/2","mx-auto"],[1,"text-2xl","font-bold","pt-5","text-stone"],[1,"text-sm/5"],[1,"font-black","text-slate-500"],[1,"md:line-clamp-none","mt-5","text-sm/5","duration-300",3,"ngClass"],[1,"md:hidden","mr-0","ml-auto","text-sm","flex","items-center","gap-2","pt-3",3,"click"],[1,"pi",3,"ngClass"]],template:function(t,o){t&1&&(d(0,"h1",0),v(1,"Our Team"),u(),b(2,M0,22,14,"div",1)),t&2&&(p(2),c("ngForOf",o.doctors))},dependencies:[F,ge,pt,Ds,jn,Wc,eo,Wt],encapsulation:2})};var Gc=(()=>{class e extends H{pFocusTrapDisabled=!1;platformId=y(qe);document=y(ve);firstHiddenFocusableElement;lastHiddenFocusableElement;ngOnInit(){super.ngOnInit(),re(this.platformId)&&!this.pFocusTrapDisabled&&!this.firstHiddenFocusableElement&&!this.lastHiddenFocusableElement&&this.createHiddenFocusableElements()}ngOnChanges(t){super.ngOnChanges(t),t.pFocusTrapDisabled&&re(this.platformId)&&(t.pFocusTrapDisabled.currentValue?this.removeHiddenFocusableElements():this.createHiddenFocusableElements())}removeHiddenFocusableElements(){this.firstHiddenFocusableElement&&this.firstHiddenFocusableElement.parentNode&&this.firstHiddenFocusableElement.parentNode.removeChild(this.firstHiddenFocusableElement),this.lastHiddenFocusableElement&&this.lastHiddenFocusableElement.parentNode&&this.lastHiddenFocusableElement.parentNode.removeChild(this.lastHiddenFocusableElement)}getComputedSelector(t){return`:not(.p-hidden-focusable):not([data-p-hidden-focusable="true"])${t??""}`}createHiddenFocusableElements(){let t="0",o=i=>Zs("span",{class:"p-hidden-accessible p-hidden-focusable",tabindex:t,role:"presentation","aria-hidden":!0,"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0,onFocus:i?.bind(this)});this.firstHiddenFocusableElement=o(this.onFirstHiddenElementFocus),this.lastHiddenFocusableElement=o(this.onLastHiddenElementFocus),this.firstHiddenFocusableElement.setAttribute("data-pc-section","firstfocusableelement"),this.lastHiddenFocusableElement.setAttribute("data-pc-section","lastfocusableelement"),this.el.nativeElement.prepend(this.firstHiddenFocusableElement),this.el.nativeElement.append(this.lastHiddenFocusableElement)}onFirstHiddenElementFocus(t){let{currentTarget:o,relatedTarget:i}=t,r=i===this.lastHiddenFocusableElement||!this.el.nativeElement?.contains(i)?el(o.parentElement,":not(.p-hidden-focusable)"):this.lastHiddenFocusableElement;ft(r)}onLastHiddenElementFocus(t){let{currentTarget:o,relatedTarget:i}=t,r=i===this.firstHiddenFocusableElement||!this.el.nativeElement?.contains(i)?tl(o.parentElement,":not(.p-hidden-focusable)"):this.firstHiddenFocusableElement;ft(r)}static \u0275fac=(()=>{let t;return function(i){return(t||(t=k(e)))(i||e)}})();static \u0275dir=$e({type:e,selectors:[["","pFocusTrap",""]],inputs:{pFocusTrapDisabled:[2,"pFocusTrapDisabled","pFocusTrapDisabled",$]},features:[O,De]})}return e})();var B0=["header"],F0=["footer"],L0=["indicator"],P0=["caption"],N0=["closeicon"],V0=["previousthumbnailicon"],H0=["nextthumbnailicon"],z0=["itempreviousicon"],j0=["itemnexticon"],U0=["item"],W0=["thumbnail"],G0=["mask"],q0=["container"],Q0=()=>({"p-galleria-mask p-overlay-mask p-overlay-mask-enter":!0}),K0=(e,n)=>({showTransitionParams:e,hideTransitionParams:n}),Y0=e=>({value:"visible",params:e});function Z0(e,n){if(e&1){let t=L();d(0,"p-galleriaContent",7),M("@animation.start",function(i){C(t);let r=m(3);return w(r.onAnimationStart(i))})("@animation.done",function(i){C(t);let r=m(3);return w(r.onAnimationEnd(i))})("maskHide",function(){C(t);let i=m(3);return w(i.onMaskHide())})("activeItemChange",function(i){C(t);let r=m(3);return w(r.onActiveItemChange(i))}),u()}if(e&2){let t=m(3);c("@animation",U(9,Y0,Rt(6,K0,t.showTransitionOptions,t.hideTransitionOptions)))("value",t.value)("activeIndex",t.activeIndex)("numVisible",t.numVisibleLimit||t.numVisible)("ngStyle",t.containerStyle)("fullScreen",t.fullScreen)}}function X0(e,n){if(e&1&&(d(0,"div",5,2),b(2,Z0,1,11,"p-galleriaContent",6),u()),e&2){let t=m(2);P(t.maskClass),c("ngClass",Qe(6,Q0)),_("role",t.fullScreen?"dialog":"region")("aria-modal",t.fullScreen?"true":void 0),p(2),c("ngIf",t.visible)}}function J0(e,n){if(e&1&&(d(0,"div",null,1),b(2,X0,3,7,"div",4),u()),e&2){let t=m();p(2),c("ngIf",t.maskVisible)}}function eb(e,n){if(e&1){let t=L();d(0,"p-galleriaContent",8),M("activeItemChange",function(i){C(t);let r=m();return w(r.onActiveItemChange(i))}),u()}if(e&2){let t=m();c("value",t.value)("activeIndex",t.activeIndex)("numVisible",t.numVisibleLimit||t.numVisible)}}var tb=["closeButton"],ob=(e,n,t)=>({"p-galleria p-component":!0,"p-galleria-fullscreen":e,"p-galleria-inset-indicators":n,"p-galleria-hover-navigators":t}),ib=()=>({});function nb(e,n){e&1&&h(0,"TimesIcon",11),e&2&&c("styleClass","p-galleria-close-icon")}function rb(e,n){}function ab(e,n){e&1&&b(0,rb,0,0,"ng-template")}function sb(e,n){if(e&1){let t=L();d(0,"button",8),M("click",function(){C(t);let i=m(2);return w(i.maskHide.emit())}),b(1,nb,1,1,"TimesIcon",9)(2,ab,1,0,null,10),u()}if(e&2){let t=m(2);_("aria-label",t.closeAriaLabel())("data-pc-section","closebutton"),p(),c("ngIf",!t.galleria.closeIconTemplate&&!t.galleria._closeIconTemplate),p(),c("ngTemplateOutlet",t.galleria.closeIconTemplate||t.galleria._closeIconTemplate)}}function lb(e,n){if(e&1&&(d(0,"div",12),h(1,"p-galleriaItemSlot",13),u()),e&2){let t=m(2);p(),c("templates",t.galleria.templates)}}function cb(e,n){if(e&1){let t=L();d(0,"p-galleriaThumbnails",14),M("onActiveIndexChange",function(i){C(t);let r=m(2);return w(r.onActiveIndexChange(i))})("stopSlideShow",function(){C(t);let i=m(2);return w(i.stopSlideShow())}),u()}if(e&2){let t=m(2);c("containerId",t.id)("value",t.value)("activeIndex",t.activeIndex)("templates",t.galleria.templates)("numVisible",t.numVisible)("responsiveOptions",t.galleria.responsiveOptions)("circular",t.galleria.circular)("isVertical",t.isVertical())("contentHeight",t.galleria.verticalThumbnailViewPortHeight)("showThumbnailNavigators",t.galleria.showThumbnailNavigators)("slideShowActive",t.slideShowActive)}}function db(e,n){if(e&1&&(d(0,"div",15),h(1,"p-galleriaItemSlot",16),u()),e&2){let t=m(2);p(),c("templates",t.galleria.templates)}}function ub(e,n){if(e&1){let t=L();d(0,"div",1),b(1,sb,3,4,"button",2)(2,lb,2,1,"div",3),d(3,"div",4)(4,"p-galleriaItem",5),M("onActiveIndexChange",function(i){C(t);let r=m();return w(r.onActiveIndexChange(i))})("startSlideShow",function(){C(t);let i=m();return w(i.startSlideShow())})("stopSlideShow",function(){C(t);let i=m();return w(i.stopSlideShow())}),u(),b(5,cb,1,11,"p-galleriaThumbnails",6),u(),b(6,db,2,1,"div",7),u()}if(e&2){let t=m();P(t.galleriaClass()),c("ngClass",vt(24,ob,t.galleria.fullScreen,t.galleria.showIndicatorsOnItem,t.galleria.showItemNavigatorsOnHover&&!t.galleria.fullScreen))("ngStyle",t.galleria.fullScreen?Qe(28,ib):t.galleria.containerStyle)("pFocusTrapDisabled",!t.fullScreen),_("id",t.id)("role","region"),p(),c("ngIf",t.galleria.fullScreen),p(),c("ngIf",t.galleria.templates&&(t.galleria.headerFacet||t.galleria.headerTemplate)),p(),_("aria-live",t.galleria.autoPlay?"polite":"off"),p(),c("id",t.id)("value",t.value)("activeIndex",t.activeIndex)("circular",t.galleria.circular)("templates",t.galleria.templates)("showIndicators",t.galleria.showIndicators)("changeItemOnIndicatorHover",t.galleria.changeItemOnIndicatorHover)("indicatorFacet",t.galleria.indicatorFacet)("captionFacet",t.galleria.captionFacet)("showItemNavigators",t.galleria.showItemNavigators)("autoPlay",t.galleria.autoPlay)("slideShowActive",t.slideShowActive),p(),c("ngIf",t.galleria.showThumbnails),p(),c("ngIf",t.shouldRenderFooter())}}function pb(e,n){e&1&&ae(0)}function mb(e,n){if(e&1&&(te(0),b(1,pb,1,0,"ng-container",1),oe()),e&2){let t=m();p(),c("ngTemplateOutlet",t.contentTemplate)("ngTemplateOutletContext",t.context)}}var fb=e=>({"p-galleria-prev-button p-galleria-nav-button":!0,"p-disabled":e}),hb=e=>({"p-galleria-next-button p-galleria-nav-button":!0,"p-disabled":e}),gb=e=>({"p-galleria-indicator":!0,"p-galleria-indicator-active":e});function bb(e,n){e&1&&h(0,"ChevronLeftIcon",9),e&2&&c("styleClass","p-galleria-prev-icon")}function vb(e,n){}function yb(e,n){e&1&&b(0,vb,0,0,"ng-template")}function _b(e,n){if(e&1){let t=L();d(0,"button",6),M("click",function(i){C(t);let r=m();return w(r.navBackward(i))})("focus",function(){C(t);let i=m();return w(i.onButtonFocus("left"))})("blur",function(){C(t);let i=m();return w(i.onButtonBlur("left"))}),b(1,bb,1,1,"ChevronLeftIcon",7)(2,yb,1,0,null,8),u()}if(e&2){let t=m();c("ngClass",U(4,fb,t.isNavBackwardDisabled()))("disabled",t.isNavBackwardDisabled()),p(),c("ngIf",!t.galleria.itemPreviousIconTemplate&&!t.galleria._itemPreviousIconTemplate),p(),c("ngTemplateOutlet",t.galleria.itemPreviousIconTemplate||t.galleria._itemPreviousIconTemplate)}}function xb(e,n){e&1&&h(0,"ChevronRightIcon",9),e&2&&c("styleClass","p-galleria-next-icon")}function Cb(e,n){}function wb(e,n){e&1&&b(0,Cb,0,0,"ng-template")}function Ib(e,n){if(e&1){let t=L();d(0,"button",6),M("click",function(i){C(t);let r=m();return w(r.navForward(i))})("focus",function(){C(t);let i=m();return w(i.onButtonFocus("right"))})("blur",function(){C(t);let i=m();return w(i.onButtonBlur("right"))}),b(1,xb,1,1,"ChevronRightIcon",7)(2,wb,1,0,null,8),u()}if(e&2){let t=m();c("ngClass",U(4,hb,t.isNavForwardDisabled()))("disabled",t.isNavForwardDisabled()),p(),c("ngIf",!t.galleria.itemNextIconTemplate&&!t.galleria._itemNextIconTemplate),p(),c("ngTemplateOutlet",t.galleria.itemNextIconTemplate||t.galleria._itemNextIconTemplate)}}function Sb(e,n){if(e&1&&(d(0,"div",10),h(1,"p-galleriaItemSlot",11),u()),e&2){let t=m();p(),c("item",t.activeItem)("templates",t.templates)}}function kb(e,n){e&1&&h(0,"button",17)}function Tb(e,n){if(e&1){let t=L();d(0,"li",14),M("click",function(){let i=C(t).index,r=m(2);return w(r.onIndicatorClick(i))})("mouseenter",function(){let i=C(t).index,r=m(2);return w(r.onIndicatorMouseEnter(i))})("keydown",function(i){let r=C(t).index,a=m(2);return w(a.onIndicatorKeyDown(i,r))}),b(1,kb,1,0,"button",15),h(2,"p-galleriaItemSlot",16),u()}if(e&2){let t=n.index,o=m(2);c("ngClass",U(7,gb,o.isIndicatorItemActive(t))),_("aria-label",o.ariaPageLabel(t+1))("aria-selected",o.activeIndex===t)("aria-controls",o.id+"_item_"+t),p(),c("ngIf",!o.indicatorFacet&&!o.galleria.indicatorTemplate),p(),c("index",t)("templates",o.templates)}}function Eb(e,n){if(e&1&&(d(0,"ul",12),b(1,Tb,3,9,"li",13),u()),e&2){let t=m();p(),c("ngForOf",t.value)}}var Rb=["itemsContainer"],Db=e=>({height:e}),$b=e=>({"p-galleria-thumbnail-prev-button p-galleria-thumbnail-nav-button":!0,"p-disabled":e}),Ab=(e,n,t,o)=>({"p-galleria-thumbnail-item":!0,"p-galleria-thumbnail-item-current":e,"p-galleria-thumbnail-item-active":n,"p-galleria-thumbnail-item-start":t,"p-galleria-thumbnail-item-end":o}),Ob=e=>({"p-galleria-thumbnail-next-button p-galleria-thumbnail-nav-button":!0,"p-disabled":e});function Mb(e,n){e&1&&h(0,"ChevronLeftIcon",11),e&2&&c("styleClass","p-galleria-thumbnail-prev-icon")}function Bb(e,n){e&1&&h(0,"ChevronUpIcon",11),e&2&&c("styleClass","p-galleria-thumbnail-prev-icon")}function Fb(e,n){if(e&1&&(te(0),b(1,Mb,1,1,"ChevronLeftIcon",10)(2,Bb,1,1,"ChevronUpIcon",10),oe()),e&2){let t=m(2);p(),c("ngIf",!t.isVertical),p(),c("ngIf",t.isVertical)}}function Lb(e,n){}function Pb(e,n){e&1&&b(0,Lb,0,0,"ng-template")}function Nb(e,n){if(e&1){let t=L();d(0,"button",7),M("click",function(i){C(t);let r=m();return w(r.navBackward(i))}),b(1,Fb,3,2,"ng-container",8)(2,Pb,1,0,null,9),u()}if(e&2){let t=m();c("ngClass",U(5,$b,t.isNavBackwardDisabled()))("disabled",t.isNavBackwardDisabled()),_("aria-label",t.ariaPrevButtonLabel()),p(),c("ngIf",!t.galleria.previousThumbnailIconTemplate&&!t.galleria._previousThumbnailIconTemplate),p(),c("ngTemplateOutlet",t.galleria.previousThumbnailIconTemplate||t.galleria._previousThumbnailIconTemplate)}}function Vb(e,n){if(e&1){let t=L();d(0,"div",12),M("keydown",function(i){let r=C(t).index,a=m();return w(a.onThumbnailKeydown(i,r))}),d(1,"div",13),M("click",function(){let i=C(t).index,r=m();return w(r.onItemClick(i))})("touchend",function(){let i=C(t).index,r=m();return w(r.onItemClick(i))})("keydown.enter",function(){let i=C(t).index,r=m();return w(r.onItemClick(i))}),h(2,"p-galleriaItemSlot",14),u()()}if(e&2){let t=n.$implicit,o=n.index,i=m();c("ngClass",bs(10,Ab,i.activeIndex===o,i.isItemActive(o),i.firstItemAciveIndex()===o,i.lastItemActiveIndex()===o)),_("aria-selected",i.activeIndex===o)("aria-controls",i.containerId+"_item_"+o)("data-pc-section","thumbnailitem")("data-p-active",i.activeIndex===o),p(),_("tabindex",i.activeIndex===o?0:-1)("aria-current",i.activeIndex===o?"page":void 0)("aria-label",i.ariaPageLabel(o+1)),p(),c("item",t)("templates",i.templates)}}function Hb(e,n){e&1&&h(0,"ChevronRightIcon",16),e&2&&c("ngClass","p-galleria-thumbnail-next-icon")}function zb(e,n){e&1&&h(0,"ChevronDownIcon",16),e&2&&c("ngClass","p-galleria-thumbnail-next-icon")}function jb(e,n){if(e&1&&(te(0),b(1,Hb,1,1,"ChevronRightIcon",15)(2,zb,1,1,"ChevronDownIcon",15),oe()),e&2){let t=m(2);p(),c("ngIf",!t.isVertical),p(),c("ngIf",t.isVertical)}}function Ub(e,n){}function Wb(e,n){e&1&&b(0,Ub,0,0,"ng-template")}function Gb(e,n){if(e&1){let t=L();d(0,"button",7),M("click",function(i){C(t);let r=m();return w(r.navForward(i))}),b(1,jb,3,2,"ng-container",8)(2,Wb,1,0,null,9),u()}if(e&2){let t=m();c("ngClass",U(5,Ob,t.isNavForwardDisabled()))("disabled",t.isNavForwardDisabled()),_("aria-label",t.ariaNextButtonLabel()),p(),c("ngIf",!t.galleria.nextThumbnailIconTemplate&&!t.galleria._nextThumbnailIconTemplate),p(),c("ngTemplateOutlet",t.galleria.nextThumbnailIconTemplate||t.galleria._nextThumbnailIconTemplate)}}var qb=({dt:e})=>`
.p-galleria {
    overflow: hidden;
    border-style: solid;
    border-width: ${e("galleria.border.width")};
    border-color: ${e("galleria.border.color")};
    border-radius: ${e("galleria.border.radius")};
}

.p-galleria-content {
    display: flex;
    flex-direction: column;
}

.p-galleria-items-container {
    display: flex;
    flex-direction: column;
    position: relative;
}

.p-galleria-items {
    position: relative;
    display: flex;
    height: 100%;
}

.p-galleria-nav-button {
    position: absolute;
    top: 50%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background: ${e("galleria.nav.button.background")};
    color: ${e("galleria.nav.button.color")};
    width: ${e("galleria.nav.button.size")};
    height: ${e("galleria.nav.button.size")};
    transition: background ${e("galleria.transition.duration")}, color ${e("galleria.transition.duration")}, outline-color ${e("galleria.transition.duration")}, box-shadow ${e("galleria.transition.duration")};
    margin: calc(-1 * calc(${e("galleria.nav.button.size")}) / 2) ${e("galleria.nav.button.gutter")} 0 ${e("galleria.nav.button.gutter")};
    padding: 0;
    user-select: none;
    border: 0 none;
    cursor: pointer;
    outline-color: transparent;
}

.p-galleria-nav-button:not(.p-disabled):hover {
    background: ${e("galleria.nav.button.hover.background")};
    color: ${e("galleria.nav.button.hover.color")};
}

.p-galleria-nav-button:not(.p-disabled):focus-visible {
    box-shadow: ${e("galleria.nav.button.focus.ring.shadow")};
    outline: ${e("galleria.nav.button.focus.ring.width")} ${e("galleria.nav.button.focus.ring.style")} ${e("galleria.nav.button.focus.ring.color")};
    outline-offset: ${e("galleria.nav.button.focus.ring.offset")};
}

.p-galleria-next-icon,
.p-galleria-prev-icon {
    font-size: ${e("galleria.nav.icon.size")};
    width: ${e("galleria.nav.icon.size")};
    height: ${e("galleria.nav.icon.size")};
}

.p-galleria-prev-button {
    border-radius: ${e("galleria.nav.button.prev.border.radius")};
    left: 0;
}

.p-galleria-next-button {
    border-radius: ${e("galleria.nav.button.next.border.radius")};
    right: 0;
}

.p-galleria-prev-button:dir(rtl) {
    left: auto;
    right: 0;
    transform: rotate(180deg);
}

.p-galleria-next-button:dir(rtl) {
    right: auto;
    left: 0;
    transform: rotate(180deg);
}

.p-galleria-item {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
}

.p-galleria-hover-navigators .p-galleria-nav-button {
    pointer-events: none;
    opacity: 0;
    transition: opacity ${e("galleria.transition.duration")} ease-in-out;
}

.p-galleria-hover-navigators .p-galleria-items-container:hover .p-galleria-nav-button {
    pointer-events: all;
    opacity: 1;
}

.p-galleria-hover-navigators .p-galleria-items-container:hover .p-galleria-nav-button.p-disabled {
    pointer-events: none;
}

.p-galleria-caption {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: ${e("galleria.caption.background")};
    color: ${e("galleria.caption.color")};
    padding: ${e("galleria.caption.padding")};
}

.p-galleria-thumbnails {
    display: flex;
    flex-direction: column;
    overflow: auto;
    flex-shrink: 0;
}

.p-galleria-thumbnail-nav-button {
    align-self: center;
    flex: 0 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    margin: 0 ${e("galleria.thumbnail.nav.button.gutter")};
    padding: 0;
    border: none;
    user-select: none;
    cursor: pointer;
    background: transparent;
    color: ${e("galleria.thumbnail.nav.button.color")};
    width: ${e("galleria.thumbnail.nav.button.size")};
    height: ${e("galleria.thumbnail.nav.button.size")};
    transition: background ${e("galleria.transition.duration")}, color ${e("galleria.transition.duration")}, outline-color ${e("galleria.transition.duration")};
    outline-color: transparent;
    border-radius: ${e("galleria.thumbnail.nav.button.border.radius")};
}

.p-galleria-thumbnail-nav-button:hover {
    background: ${e("galleria.thumbnail.nav.button.hover.background")};
    color: ${e("galleria.thumbnail.nav.button.hover.color")};
}

.p-galleria-thumbnail-nav-button:focus-visible {
    box-shadow: ${e("galleria.thumbnail.nav.button.focus.ring.shadow")};
    outline: ${e("galleria.thumbnail.nav.button.focus.ring.width")} ${e("galleria.thumbnail.nav.button.focus.ring.style")} ${e("galleria.thumbnail.nav.button.focus.ring.color")};
    outline-offset: ${e("galleria.thumbnail.nav.button.focus.ring.offset")};
}

.p-galleria-thumbnail-nav-button .p-galleria-thumbnail-next-icon,
.p-galleria-thumbnail-nav-button .p-galleria-thumbnail-prev-icon {
    font-size: ${e("galleria.thumbnail.nav.button.icon.size")};
    width: ${e("galleria.thumbnail.nav.button.icon.size")};
    height: ${e("galleria.thumbnail.nav.button.icon.size")};
}

.p-galleria-thumbnails-content {
    display: flex;
    flex-direction: row;
    background: ${e("galleria.thumbnails.content.background")};
    padding: ${e("galleria.thumbnails.content.padding")};
}

.p-galleria-thumbnails-viewport {
    overflow: hidden;
    width: 100%;
}

.p-galleria:not(.p-galleria-thumbnails-right):not(.p-galleria-thumbnails-left) .p-galleria-thumbnail-prev-button:dir(rtl),
.p-galleria:not(.p-galleria-thumbnails-right):not(.p-galleria-thumbnails-left) .p-galleria-thumbnail-next-button:dir(rtl) {
    transform: rotate(180deg);
}

.p-galleria-thumbnail-items {
    display: flex;
}

.p-galleria-thumbnail-item {
    overflow: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 0.5;
}

.p-galleria-thumbnail {
    outline-color: transparent;
}

.p-galleria-thumbnail-item:hover {
    opacity: 1;
    transition: opacity 0.3s;
}

.p-galleria-thumbnail-item-current {
    opacity: 1;
}

.p-galleria-thumbnails-left .p-galleria-content,
.p-galleria-thumbnails-right .p-galleria-content {
    flex-direction: row;
}

.p-galleria-thumbnails-left .p-galleria-items-container,
.p-galleria-thumbnails-right .p-galleria-items-container {
    flex-direction: row;
}

.p-galleria-thumbnails-left .p-galleria-items-container,
.p-galleria-thumbnails-top .p-galleria-items-container {
    order: 2;
}

.p-galleria-thumbnails-left .p-galleria-thumbnails,
.p-galleria-thumbnails-top .p-galleria-thumbnails {
    order: 1;
}

.p-galleria-thumbnails-left .p-galleria-thumbnails-content,
.p-galleria-thumbnails-right .p-galleria-thumbnails-content {
    flex-direction: column;
    flex-grow: 1;
}

.p-galleria-thumbnails-left .p-galleria-thumbnail-items,
.p-galleria-thumbnails-right .p-galleria-thumbnail-items {
    flex-direction: column;
    height: 100%;
}

.p-galleria-indicator-list {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${e("galleria.indicator.list.padding")};
    gap: ${e("galleria.indicator.list.gap")};
    margin: 0;
    list-style: none;
}

.p-galleria-indicator-button {
    display: inline-flex;
    align-items: center;
    background: ${e("galleria.indicator.button.background")};
    width: ${e("galleria.indicator.button.width")};
    height: ${e("galleria.indicator.button.height")};
    transition: background ${e("galleria.transition.duration")}, color ${e("galleria.transition.duration")}, outline-color ${e("galleria.transition.duration")}, box-shadow ${e("galleria.transition.duration")};
    outline-color: transparent;
    border-radius: ${e("galleria.indicator.button.border.radius")};
    margin: 0;
    padding: 0;
    border: none;
    user-select: none;
    cursor: pointer;
}

.p-galleria-indicator-button:hover {
    background: ${e("galleria.indicator.button.hover.background")};
}

.p-galleria-indicator-button:focus-visible {
    box-shadow: ${e("galleria.indicator.button.focus.ring.shadow")};
    outline: ${e("galleria.indicator.button.focus.ring.width")} ${e("galleria.indicator.button.focus.ring.style")} ${e("galleria.indicator.button.focus.ring.color")};
    outline-offset: ${e("galleria.indicator.button.focus.ring.offset")};
}

.p-galleria-indicator-active .p-galleria-indicator-button {
    background: ${e("galleria.indicator.button.active.background")};
}

.p-galleria-indicators-left .p-galleria-items-container,
.p-galleria-indicators-right .p-galleria-items-container {
    flex-direction: row;
    align-items: center;
}

.p-galleria-indicators-left .p-galleria-items,
.p-galleria-indicators-top .p-galleria-items {
    order: 2;
}

.p-galleria-indicators-left .p-galleria-indicator-list,
.p-galleria-indicators-top .p-galleria-indicator-list {
    order: 1;
}

.p-galleria-indicators-left .p-galleria-indicator-list,
.p-galleria-indicators-right .p-galleria-indicator-list {
    flex-direction: column;
}

.p-galleria-inset-indicators .p-galleria-indicator-list {
    position: absolute;
    display: flex;
    z-index: 1;
    background: ${e("galleria.inset.indicator.list.background")};
}

.p-galleria-inset-indicators .p-galleria-indicator-button {
    background: ${e("galleria.inset.indicator.button.background")};
}

.p-galleria-inset-indicators .p-galleria-indicator-button:hover {
    background: ${e("galleria.inset.indicator.button.hover.background")};
}

.p-galleria-inset-indicators .p-galleria-indicator-active .p-galleria-indicator-button {
    background: ${e("galleria.inset.indicator.button.active.background")};
}

.p-galleria-inset-indicators.p-galleria-indicators-top .p-galleria-indicator-list {
    top: 0;
    left: 0;
    width: 100%;
    align-items: flex-start;
}

.p-galleria-inset-indicators.p-galleria-indicators-right .p-galleria-indicator-list {
    right: 0;
    top: 0;
    height: 100%;
    align-items: flex-end;
}

.p-galleria-inset-indicators.p-galleria-indicators-bottom .p-galleria-indicator-list {
    bottom: 0;
    left: 0;
    width: 100%;
    align-items: flex-end;
}

.p-galleria-inset-indicators.p-galleria-indicators-left .p-galleria-indicator-list {
    left: 0;
    top: 0;
    height: 100%;
    align-items: flex-start;
}

.p-galleria-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-galleria-close-button {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin: ${e("galleria.close.button.gutter")};
    background: ${e("galleria.close.button.background")};
    color: ${e("galleria.close.button.color")};
    width: ${e("galleria.close.button.size")};
    height: ${e("galleria.close.button.size")};
    padding: 0;
    border: none;
    user-select: none;
    cursor: pointer;
    border-radius: ${e("galleria.close.button.border.radius")};
    outline-color: transparent;
    transition: background ${e("galleria.transition.duration")}, color ${e("galleria.transition.duration")}, outline-color ${e("galleria.transition.duration")};
}

.p-galleria-close-icon {
    font-size: ${e("galleria.close.button.icon.size")};
    width: ${e("galleria.close.button.icon.size")};
    height: ${e("galleria.close.button.icon.size")};
}

.p-galleria-close-button:hover {
    background: ${e("galleria.close.button.hover.background")};
    color: ${e("galleria.close.button.hover.color")};
}

.p-galleria-close-button:focus-visible {
    box-shadow: ${e("galleria.close.button.focus.ring.shadow")};
    outline: ${e("galleria.close.button.focus.ring.width")} ${e("galleria.close.button.focus.ring.style")} ${e("galleria.close.button.focus.ring.color")};
    outline-offset: ${e("galleria.close.button.focus.ring.offset")};
}

.p-galleria-mask .p-galleria-nav-button {
    position: fixed;
    top: 50%;
}

.p-galleria-enter-active {
    transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
}

.p-galleria-leave-active {
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.p-galleria-enter-from,
.p-galleria-leave-to {
    opacity: 0;
    transform: scale(0.7);
}

.p-galleria-enter-active .p-galleria-nav-button {
    opacity: 0;
}

.p-items-hidden .p-galleria-thumbnail-item {
    visibility: hidden;
}

.p-items-hidden .p-galleria-thumbnail-item.p-galleria-thumbnail-item-active {
    visibility: visible;
}
`,Qb={mask:"p-galleria-mask p-overlay-mask p-overlay-mask-enter",root:({instance:e})=>{let n=e.$attrs.showThumbnails&&e.getPositionClass("p-galleria-thumbnails",e.$attrs.thumbnailsPosition),t=e.$attrs.showIndicators&&e.getPositionClass("p-galleria-indicators",e.$attrs.indicatorsPosition);return["p-galleria p-component",{"p-galleria-fullscreen":e.$attrs.fullScreen,"p-galleria-inset-indicators":e.$attrs.showIndicatorsOnItem,"p-galleria-hover-navigators":e.$attrs.showItemNavigatorsOnHover&&!e.$attrs.fullScreen},n,t]},closeButton:"p-galleria-close-button",closeIcon:"p-galleria-close-icon",header:"p-galleria-header",content:"p-galleria-content",footer:"p-galleria-footer",itemsContainer:"p-galleria-items-container",items:"p-galleria-items",prevButton:({instance:e})=>["p-galleria-prev-button p-galleria-nav-button",{"p-disabled":e.isNavBackwardDisabled()}],prevIcon:"p-galleria-prev-icon",item:"p-galleria-item",nextButton:({instance:e})=>["p-galleria-next-button p-galleria-nav-button",{"p-disabled":e.isNavForwardDisabled()}],nextIcon:"p-galleria-next-icon",caption:"p-galleria-caption",indicatorList:"p-galleria-indicator-list",indicator:({instance:e,index:n})=>["p-galleria-indicator",{"p-galleria-indicator-active":e.isIndicatorItemActive(n)}],indicatorButton:"p-galleria-indicator-button",thumbnails:"p-galleria-thumbnails",thumbnailContent:"p-galleria-thumbnails-content",thumbnailPrevButton:({instance:e})=>["p-galleria-thumbnail-prev-button p-galleria-thumbnail-nav-button",{"p-disabled":e.isNavBackwardDisabled()}],thumbnailPrevIcon:"p-galleria-thumbnail-prev-icon",thumbnailsViewport:"p-galleria-thumbnails-viewport",thumbnailItems:"p-galleria-thumbnail-items",thumbnailItem:({instance:e,index:n,activeIndex:t})=>["p-galleria-thumbnail-item",{"p-galleria-thumbnail-item-current":t===n,"p-galleria-thumbnail-item-active":e.isItemActive(n),"p-galleria-thumbnail-item-start":e.firstItemAciveIndex()===n,"p-galleria-thumbnail-item-end":e.lastItemActiveIndex()===n}],thumbnail:"p-galleria-thumbnail",thumbnailNextButton:({instance:e})=>["p-galleria-thumbnail-next-button  p-galleria-thumbnail-nav-button",{"p-disabled":e.isNavForwardDisabled()}],thumbnailNextIcon:"p-galleria-thumbnail-next-icon"},qc=(()=>{class e extends X{name="galleria";theme=qb;classes=Qb;static \u0275fac=(()=>{let t;return function(i){return(t||(t=k(e)))(i||e)}})();static \u0275prov=A({token:e,factory:e.\u0275fac})}return e})();var Vo=(()=>{class e extends H{platformId;element;cd;get activeIndex(){return this._activeIndex}set activeIndex(t){this._activeIndex=t}fullScreen=!1;id;value;numVisible=3;responsiveOptions;showItemNavigators=!1;showThumbnailNavigators=!0;showItemNavigatorsOnHover=!1;changeItemOnIndicatorHover=!1;circular=!1;autoPlay=!1;shouldStopAutoplayByClick=!0;transitionInterval=4e3;showThumbnails=!0;thumbnailsPosition="bottom";verticalThumbnailViewPortHeight="300px";showIndicators=!1;showIndicatorsOnItem=!1;indicatorsPosition="bottom";baseZIndex=0;maskClass;containerClass;containerStyle;showTransitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)";get visible(){return this._visible}set visible(t){this._visible=t,this._visible&&!this.maskVisible&&(this.maskVisible=!0)}activeIndexChange=new q;visibleChange=new q;mask;container;_visible=!1;_activeIndex=0;headerTemplate;headerFacet;footerTemplate;footerFacet;indicatorTemplate;indicatorFacet;captionTemplate;captionFacet;_closeIconTemplate;closeIconTemplate;_previousThumbnailIconTemplate;previousThumbnailIconTemplate;_nextThumbnailIconTemplate;nextThumbnailIconTemplate;_itemPreviousIconTemplate;itemPreviousIconTemplate;_itemNextIconTemplate;itemNextIconTemplate;_itemTemplate;itemTemplate;_thumbnailTemplate;thumbnailTemplate;maskVisible=!1;numVisibleLimit=0;_componentStyle=y(qc);constructor(t,o,i){super(),this.platformId=t,this.element=o,this.cd=i}templates;ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"header":this.headerFacet=t.template;break;case"footer":this.footerFacet=t.template;break;case"indicator":this.indicatorFacet=t.template;break;case"closeicon":this.closeIconTemplate=t.template;break;case"itemnexticon":this.itemNextIconTemplate=t.template;break;case"itempreviousicon":this.itemPreviousIconTemplate=t.template;break;case"previousthumbnailicon":this.previousThumbnailIconTemplate=t.template;break;case"nextthumbnailicon":this.nextThumbnailIconTemplate=t.template;break;case"caption":this.captionFacet=t.template;break;case"item":this.itemTemplate=t.template;break;case"thumbnail":this.thumbnailTemplate=t.template;break}})}ngOnChanges(t){super.ngOnChanges(t),t.value&&t.value.currentValue?.length<this.numVisible?this.numVisibleLimit=t.value.currentValue.length:this.numVisibleLimit=0}onMaskHide(){this.visible=!1,this.visibleChange.emit(!1)}onActiveItemChange(t){this.activeIndex!==t&&(this.activeIndex=t,this.activeIndexChange.emit(t))}onAnimationStart(t){switch(t.toState){case"visible":this.enableModality(),setTimeout(()=>{ft(ye(this.container.nativeElement,'[data-pc-section="closebutton"]'))},25);break;case"void":Pe(this.mask?.nativeElement,"p-overlay-mask-leave");break}}onAnimationEnd(t){switch(t.toState){case"void":this.disableModality();break}}enableModality(){Ws(),this.cd.markForCheck(),this.mask&&po.set("modal",this.mask.nativeElement,this.baseZIndex||this.config.zIndex.modal)}disableModality(){Gs(),this.maskVisible=!1,this.cd.markForCheck(),this.mask&&po.clear(this.mask.nativeElement)}ngOnDestroy(){this.fullScreen&&ke(this.document.body,"p-overflow-hidden"),this.mask&&this.disableModality()}static \u0275fac=function(o){return new(o||e)(Q(qe),Q(Je),Q(Dt))};static \u0275cmp=I({type:e,selectors:[["p-galleria"]],contentQueries:function(o,i,r){if(o&1&&(B(r,B0,4),B(r,F0,4),B(r,L0,4),B(r,P0,4),B(r,N0,4),B(r,V0,4),B(r,H0,4),B(r,z0,4),B(r,j0,4),B(r,U0,4),B(r,W0,4),B(r,Ie,4)),o&2){let a;E(a=R())&&(i.headerTemplate=a.first),E(a=R())&&(i.footerTemplate=a.first),E(a=R())&&(i.indicatorTemplate=a.first),E(a=R())&&(i.captionTemplate=a.first),E(a=R())&&(i._closeIconTemplate=a.first),E(a=R())&&(i._previousThumbnailIconTemplate=a.first),E(a=R())&&(i._nextThumbnailIconTemplate=a.first),E(a=R())&&(i._itemPreviousIconTemplate=a.first),E(a=R())&&(i._itemNextIconTemplate=a.first),E(a=R())&&(i._itemTemplate=a.first),E(a=R())&&(i._thumbnailTemplate=a.first),E(a=R())&&(i.templates=a)}},viewQuery:function(o,i){if(o&1&&(be(G0,5),be(q0,5)),o&2){let r;E(r=R())&&(i.mask=r.first),E(r=R())&&(i.container=r.first)}},inputs:{activeIndex:"activeIndex",fullScreen:[2,"fullScreen","fullScreen",$],id:"id",value:"value",numVisible:[2,"numVisible","numVisible",me],responsiveOptions:"responsiveOptions",showItemNavigators:[2,"showItemNavigators","showItemNavigators",$],showThumbnailNavigators:[2,"showThumbnailNavigators","showThumbnailNavigators",$],showItemNavigatorsOnHover:[2,"showItemNavigatorsOnHover","showItemNavigatorsOnHover",$],changeItemOnIndicatorHover:[2,"changeItemOnIndicatorHover","changeItemOnIndicatorHover",$],circular:[2,"circular","circular",$],autoPlay:[2,"autoPlay","autoPlay",$],shouldStopAutoplayByClick:[2,"shouldStopAutoplayByClick","shouldStopAutoplayByClick",$],transitionInterval:[2,"transitionInterval","transitionInterval",me],showThumbnails:[2,"showThumbnails","showThumbnails",$],thumbnailsPosition:"thumbnailsPosition",verticalThumbnailViewPortHeight:"verticalThumbnailViewPortHeight",showIndicators:[2,"showIndicators","showIndicators",$],showIndicatorsOnItem:[2,"showIndicatorsOnItem","showIndicatorsOnItem",$],indicatorsPosition:"indicatorsPosition",baseZIndex:[2,"baseZIndex","baseZIndex",me],maskClass:"maskClass",containerClass:"containerClass",containerStyle:"containerStyle",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",visible:"visible"},outputs:{activeIndexChange:"activeIndexChange",visibleChange:"visibleChange"},standalone:!1,features:[J([qc]),O,De],decls:3,vars:2,consts:[["windowed",""],["container",""],["mask",""],[4,"ngIf","ngIfElse"],[3,"ngClass","class",4,"ngIf"],[3,"ngClass"],[3,"value","activeIndex","numVisible","ngStyle","fullScreen","maskHide","activeItemChange",4,"ngIf"],[3,"maskHide","activeItemChange","value","activeIndex","numVisible","ngStyle","fullScreen"],[3,"activeItemChange","value","activeIndex","numVisible"]],template:function(o,i){if(o&1&&b(0,J0,3,1,"div",3)(1,eb,1,3,"ng-template",null,0,he),o&2){let r=it(2);c("ngIf",i.fullScreen)("ngIfElse",r)}},dependencies:()=>[ge,Oe,Ve,Kb],encapsulation:2,data:{animation:[yt("animation",[Le("void => visible",[Fe({transform:"scale(0.7)",opacity:0}),Be("{{showTransitionParams}}")]),Le("visible => void",[Be("{{hideTransitionParams}}",Fe({transform:"scale(0.7)",opacity:0}))])])]},changeDetection:0})}return e})(),Kb=(()=>{class e extends H{galleria;cd;differs;elementRef;get activeIndex(){return this._activeIndex}set activeIndex(t){this._activeIndex=t}value=[];numVisible;fullScreen;maskHide=new q;activeItemChange=new q;closeButton;id;_activeIndex=0;slideShowActive=!0;interval;styleClass;differ;constructor(t,o,i,r){super(),this.galleria=t,this.cd=o,this.differs=i,this.elementRef=r,this.id=this.galleria.id||ce("pn_id_"),this.differ=this.differs.find(this.galleria).create()}handleFullscreenChange(t){document?.fullscreenElement===this.elementRef.nativeElement?.children[0]?this.fullScreen=!0:this.fullScreen=!1}ngDoCheck(){if(re(this.galleria.platformId)){let t=this.differ.diff(this.galleria);t&&t.forEachItem.length>0&&this.cd.markForCheck()}}shouldRenderFooter(){return this.galleria.footerFacet&&this.galleria.templates.toArray().length>0||this.galleria.footerTemplate}galleriaClass(){let t=this.galleria.showThumbnails&&this.getPositionClass("p-galleria-thumbnails",this.galleria.thumbnailsPosition),o=this.galleria.showIndicators&&this.getPositionClass("p-galleria-indicators",this.galleria.indicatorsPosition);return(this.galleria.containerClass?this.galleria.containerClass+" ":"")+(t?t+" ":"")+(o?o+" ":"")}startSlideShow(){re(this.galleria.platformId)&&(this.interval=setInterval(()=>{let t=this.galleria.circular&&this.value.length-1===this.activeIndex?0:this.activeIndex+1;this.onActiveIndexChange(t),this.activeIndex=t},this.galleria.transitionInterval),this.slideShowActive=!0)}stopSlideShow(){this.galleria.autoPlay&&!this.galleria.shouldStopAutoplayByClick||(this.interval&&clearInterval(this.interval),this.slideShowActive=!1)}getPositionClass(t,o){let r=["top","left","bottom","right"].find(a=>a===o);return r?`${t}-${r}`:""}isVertical(){return this.galleria.thumbnailsPosition==="left"||this.galleria.thumbnailsPosition==="right"}onActiveIndexChange(t){this.activeIndex!==t&&(this.activeIndex=t,this.activeItemChange.emit(this.activeIndex))}closeAriaLabel(){return this.config.translation.aria?this.config.translation.aria.close:void 0}static \u0275fac=function(o){return new(o||e)(Q(Vo),Q(Dt),Q(_s),Q(Je))};static \u0275cmp=I({type:e,selectors:[["p-galleriaContent"]],viewQuery:function(o,i){if(o&1&&be(tb,5),o&2){let r;E(r=R())&&(i.closeButton=r.first)}},hostBindings:function(o,i){o&1&&M("fullscreenchange",function(a){return i.handleFullscreenChange(a)},!1,rs)},inputs:{activeIndex:"activeIndex",value:"value",numVisible:[2,"numVisible","numVisible",me],fullScreen:[2,"fullScreen","fullScreen",$]},outputs:{maskHide:"maskHide",activeItemChange:"activeItemChange"},standalone:!1,features:[O],decls:1,vars:1,consts:[["pFocusTrap","",3,"ngClass","ngStyle","class","pFocusTrapDisabled",4,"ngIf"],["pFocusTrap","",3,"ngClass","ngStyle","pFocusTrapDisabled"],["type","button","class","p-galleria-close-button",3,"click",4,"ngIf"],["class","p-galleria-header",4,"ngIf"],[1,"p-galleria-content"],[3,"onActiveIndexChange","startSlideShow","stopSlideShow","id","value","activeIndex","circular","templates","showIndicators","changeItemOnIndicatorHover","indicatorFacet","captionFacet","showItemNavigators","autoPlay","slideShowActive"],[3,"containerId","value","activeIndex","templates","numVisible","responsiveOptions","circular","isVertical","contentHeight","showThumbnailNavigators","slideShowActive","onActiveIndexChange","stopSlideShow",4,"ngIf"],["class","p-galleria-footer",4,"ngIf"],["type","button",1,"p-galleria-close-button",3,"click"],[3,"styleClass",4,"ngIf"],[4,"ngTemplateOutlet"],[3,"styleClass"],[1,"p-galleria-header"],["type","header",3,"templates"],[3,"onActiveIndexChange","stopSlideShow","containerId","value","activeIndex","templates","numVisible","responsiveOptions","circular","isVertical","contentHeight","showThumbnailNavigators","slideShowActive"],[1,"p-galleria-footer"],["type","footer",3,"templates"]],template:function(o,i){o&1&&b(0,ub,7,29,"div",0),o&2&&c("ngIf",i.value&&i.value.length>0)},dependencies:()=>[ge,Oe,we,Ve,wa,Gc,Da,Yb,Zb],encapsulation:2,changeDetection:0})}return e})(),Da=(()=>{class e{templates;index;get item(){return this._item}shouldRender(){return this.contentTemplate||this.galleria._itemTemplate||this.galleria.itemTemplate||this.galleria.captionTemplate||this.galleria.captionTemplate||this.galleria.captionFacet||this.galleria.thumbnailTemplate||this.galleria._thumbnailTemplate||this.galleria.footerTemplate}galleria=y(Vo);set item(t){this._item=t,this.templates&&this.templates?.toArray().length>0?this.templates.forEach(o=>{if(o.getType()===this.type)switch(this.type){case"item":case"caption":case"thumbnail":this.context={$implicit:this.item},this.contentTemplate=o.template;break;case"footer":this.context={$implicit:this.item},this.contentTemplate=o.template;break}}):this.getContentTemplate()}getContentTemplate(){switch(this.type){case"item":this.context={$implicit:this.item},this.contentTemplate=this.galleria._itemTemplate||this.galleria.itemTemplate;break;case"caption":this.context={$implicit:this.item},this.contentTemplate=this.galleria.captionTemplate||this.galleria.captionFacet;break;case"thumbnail":this.context={$implicit:this.item},this.contentTemplate=this.galleria.thumbnailTemplate||this.galleria._thumbnailTemplate;break;case"indicator":this.context={$implicit:this.index},this.contentTemplate=this.galleria.indicatorTemplate||this.galleria.indicatorFacet;break;case"footer":this.context={$implicit:this.item},this.contentTemplate=this.galleria.footerTemplate||this.galleria.footerFacet;break;default:this.context={$implicit:this.item},this.contentTemplate=this.galleria._itemTemplate||this.galleria.itemTemplate}}type;contentTemplate;context;_item;ngAfterContentInit(){this.templates&&this.templates.toArray().length>0?this.templates?.forEach(t=>{if(t.getType()===this.type)switch(this.type){case"item":case"caption":case"thumbnail":this.context={$implicit:this.item},this.contentTemplate=t.template;break;case"indicator":this.context={$implicit:this.index},this.contentTemplate=t.template;break;case"footer":this.context={$implicit:this.item},this.contentTemplate=t.template;break;default:this.context={$implicit:this.item},this.contentTemplate=t.template;break}}):this.getContentTemplate()}static \u0275fac=function(o){return new(o||e)};static \u0275cmp=I({type:e,selectors:[["p-galleriaItemSlot"]],inputs:{templates:"templates",index:[2,"index","index",me],item:"item",type:"type"},standalone:!1,decls:1,vars:1,consts:[[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(o,i){o&1&&b(0,mb,2,2,"ng-container",0),o&2&&c("ngIf",i.shouldRender())},dependencies:[Oe,we],encapsulation:2,changeDetection:0})}return e})(),Yb=(()=>{class e{galleria;id;circular=!1;value;showItemNavigators=!1;showIndicators=!0;slideShowActive=!0;changeItemOnIndicatorHover=!0;autoPlay=!1;templates;indicatorFacet;captionFacet;startSlideShow=new q;stopSlideShow=new q;onActiveIndexChange=new q;get activeIndex(){return this._activeIndex}set activeIndex(t){this._activeIndex=t}get activeItem(){return this.value&&this.value[this._activeIndex]}_activeIndex=0;leftButtonFocused=!1;rightButtonFocused=!1;constructor(t){this.galleria=t}ngOnChanges({autoPlay:t}){t?.currentValue&&this.startSlideShow.emit(),t&&t.currentValue===!1&&this.stopTheSlideShow()}next(){let t=this.activeIndex+1,o=this.circular&&this.value.length-1===this.activeIndex?0:t;this.onActiveIndexChange.emit(o)}prev(){let t=this.activeIndex!==0?this.activeIndex-1:0,o=this.circular&&this.activeIndex===0?this.value.length-1:t;this.onActiveIndexChange.emit(o)}onButtonFocus(t){t==="left"?this.leftButtonFocused=!0:this.rightButtonFocused=!0}onButtonBlur(t){t==="left"?this.leftButtonFocused=!1:this.rightButtonFocused=!1}stopTheSlideShow(){this.slideShowActive&&this.stopSlideShow&&this.stopSlideShow.emit()}navForward(t){this.stopTheSlideShow(),this.next(),t&&t.cancelable&&t.preventDefault()}navBackward(t){this.stopTheSlideShow(),this.prev(),t&&t.cancelable&&t.preventDefault()}onIndicatorClick(t){this.stopTheSlideShow(),this.onActiveIndexChange.emit(t)}onIndicatorMouseEnter(t){this.changeItemOnIndicatorHover&&(this.stopTheSlideShow(),this.onActiveIndexChange.emit(t))}onIndicatorKeyDown(t,o){switch(t.code){case"Enter":case"Space":this.stopTheSlideShow(),this.onActiveIndexChange.emit(o),t.preventDefault();break;case"ArrowDown":case"ArrowUp":t.preventDefault();break;default:break}}isNavForwardDisabled(){return!this.circular&&this.activeIndex===this.value.length-1}isNavBackwardDisabled(){return!this.circular&&this.activeIndex===0}isIndicatorItemActive(t){return this.activeIndex===t}ariaSlideLabel(){return this.galleria.config.translation.aria?this.galleria.config.translation.aria.slide:void 0}ariaSlideNumber(t){return this.galleria.config.translation.aria?this.galleria.config.translation.aria.slideNumber.replace(/{slideNumber}/g,t):void 0}ariaPageLabel(t){return this.galleria.config.translation.aria?this.galleria.config.translation.aria.pageLabel.replace(/{page}/g,t):void 0}static \u0275fac=function(o){return new(o||e)(Q(Vo))};static \u0275cmp=I({type:e,selectors:[["p-galleriaItem"]],hostAttrs:[1,"p-galleria-items-container"],inputs:{id:"id",circular:[2,"circular","circular",$],value:"value",showItemNavigators:[2,"showItemNavigators","showItemNavigators",$],showIndicators:[2,"showIndicators","showIndicators",$],slideShowActive:[2,"slideShowActive","slideShowActive",$],changeItemOnIndicatorHover:[2,"changeItemOnIndicatorHover","changeItemOnIndicatorHover",$],autoPlay:[2,"autoPlay","autoPlay",$],templates:"templates",indicatorFacet:"indicatorFacet",captionFacet:"captionFacet",activeIndex:"activeIndex"},outputs:{startSlideShow:"startSlideShow",stopSlideShow:"stopSlideShow",onActiveIndexChange:"onActiveIndexChange"},standalone:!1,features:[De],decls:7,vars:9,consts:[[1,"p-galleria-items"],["type","button","role","navigation",3,"ngClass","disabled","click","focus","blur",4,"ngIf"],["role","group",1,"p-galleria-item",3,"id"],["type","item",1,"p-galleria-item",3,"item","templates"],["class","p-galleria-caption",4,"ngIf"],["class","p-galleria-indicator-list",4,"ngIf"],["type","button","role","navigation",3,"click","focus","blur","ngClass","disabled"],[3,"styleClass",4,"ngIf"],[4,"ngTemplateOutlet"],[3,"styleClass"],[1,"p-galleria-caption"],["type","caption",3,"item","templates"],[1,"p-galleria-indicator-list"],["tabindex","0",3,"ngClass","click","mouseenter","keydown",4,"ngFor","ngForOf"],["tabindex","0",3,"click","mouseenter","keydown","ngClass"],["type","button","tabIndex","-1","class","p-galleria-indicator-button",4,"ngIf"],["type","indicator",3,"index","templates"],["type","button","tabIndex","-1",1,"p-galleria-indicator-button"]],template:function(o,i){o&1&&(d(0,"div",0),b(1,_b,3,6,"button",1),d(2,"div",2),h(3,"p-galleriaItemSlot",3),u(),b(4,Ib,3,6,"button",1)(5,Sb,2,2,"div",4),u(),b(6,Eb,2,1,"ul",5)),o&2&&(p(),c("ngIf",i.showItemNavigators),p(),c("id",i.id+"_item_"+i.activeIndex),_("aria-label",i.ariaSlideNumber(i.activeIndex+1))("aria-roledescription",i.ariaSlideLabel()),p(),c("item",i.activeItem)("templates",i.templates),p(),c("ngIf",i.showItemNavigators),p(),c("ngIf",i.captionFacet||i.galleria.captionTemplate),p(),c("ngIf",i.showIndicators))},dependencies:()=>[ge,pt,Oe,we,Mt,Jt,Da],encapsulation:2,changeDetection:0})}return e})(),Zb=(()=>{class e{galleria;document;platformId;renderer;cd;containerId;value;isVertical=!1;slideShowActive=!1;circular=!1;responsiveOptions;contentHeight="300px";showThumbnailNavigators=!0;templates;onActiveIndexChange=new q;stopSlideShow=new q;itemsContainer;get numVisible(){return this._numVisible}set numVisible(t){this._numVisible=t,this._oldNumVisible=this.d_numVisible,this.d_numVisible=t}get activeIndex(){return this._activeIndex}set activeIndex(t){this._oldactiveIndex=this._activeIndex,this._activeIndex=t}index;startPos=null;thumbnailsStyle=null;sortedResponsiveOptions=null;totalShiftedItems=0;page=0;documentResizeListener;_numVisible=0;d_numVisible=0;_oldNumVisible=0;_activeIndex=0;_oldactiveIndex=0;constructor(t,o,i,r,a){this.galleria=t,this.document=o,this.platformId=i,this.renderer=r,this.cd=a}ngOnInit(){re(this.platformId)&&(this.createStyle(),this.responsiveOptions&&this.bindDocumentListeners())}ngAfterContentChecked(){let t=this.totalShiftedItems;(this._oldNumVisible!==this.d_numVisible||this._oldactiveIndex!==this._activeIndex)&&this.itemsContainer&&(this._activeIndex<=this.getMedianItemIndex()?t=0:this.value.length-this.d_numVisible+this.getMedianItemIndex()<this._activeIndex?t=this.d_numVisible-this.value.length:this.value.length-this.d_numVisible<this._activeIndex&&this.d_numVisible%2===0?t=this._activeIndex*-1+this.getMedianItemIndex()+1:t=this._activeIndex*-1+this.getMedianItemIndex(),t!==this.totalShiftedItems&&(this.totalShiftedItems=t),this.itemsContainer&&this.itemsContainer.nativeElement&&(this.itemsContainer.nativeElement.style.transform=this.isVertical?`translate3d(0, ${t*(100/this.d_numVisible)}%, 0)`:`translate3d(${t*(100/this.d_numVisible)}%, 0, 0)`),this._oldactiveIndex!==this._activeIndex&&(ke(this.itemsContainer.nativeElement,"p-items-hidden"),this.itemsContainer.nativeElement.style.transition="transform 500ms ease 0s"),this._oldactiveIndex=this._activeIndex,this._oldNumVisible=this.d_numVisible)}ngAfterViewInit(){re(this.platformId)&&this.calculatePosition()}createStyle(){this.thumbnailsStyle||(this.thumbnailsStyle=this.document.createElement("style"),this.document.body.appendChild(this.thumbnailsStyle));let t=`
            #${this.containerId} .p-galleria-thumbnail-item {
                flex: 1 0 ${100/this.d_numVisible}%
            }
        `;if(this.responsiveOptions){this.sortedResponsiveOptions=[...this.responsiveOptions],this.sortedResponsiveOptions.sort((o,i)=>{let r=o.breakpoint,a=i.breakpoint,s=null;return r==null&&a!=null?s=-1:r!=null&&a==null?s=1:r==null&&a==null?s=0:typeof r=="string"&&typeof a=="string"?s=r.localeCompare(a,void 0,{numeric:!0}):s=r<a?-1:r>a?1:0,-1*s});for(let o=0;o<this.sortedResponsiveOptions.length;o++){let i=this.sortedResponsiveOptions[o];t+=`
                    @media screen and (max-width: ${i.breakpoint}) {
                        #${this.containerId} .p-galleria-thumbnail-item {
                            flex: 1 0 ${100/i.numVisible}%
                        }
                    }
                `}}this.thumbnailsStyle.innerHTML=t,vo(this.thumbnailsStyle,"nonce",this.galleria.config?.csp()?.nonce)}calculatePosition(){if(re(this.platformId)&&this.itemsContainer&&this.sortedResponsiveOptions){let t=window.innerWidth,o={numVisible:this._numVisible};for(let i=0;i<this.sortedResponsiveOptions.length;i++){let r=this.sortedResponsiveOptions[i];parseInt(r.breakpoint,10)>=t&&(o=r)}this.d_numVisible!==o.numVisible&&(this.d_numVisible=o.numVisible,this.cd.markForCheck())}}getTabIndex(t){return this.isItemActive(t)?0:null}navForward(t){this.stopTheSlideShow();let o=this._activeIndex+1;o+this.totalShiftedItems>this.getMedianItemIndex()&&(-1*this.totalShiftedItems<this.getTotalPageNumber()-1||this.circular)&&this.step(-1);let i=this.circular&&this.value.length-1===this._activeIndex?0:o;this.onActiveIndexChange.emit(i),t.cancelable&&t.preventDefault()}navBackward(t){this.stopTheSlideShow();let o=this._activeIndex!==0?this._activeIndex-1:0,i=o+this.totalShiftedItems;this.d_numVisible-i-1>this.getMedianItemIndex()&&(-1*this.totalShiftedItems!==0||this.circular)&&this.step(1);let r=this.circular&&this._activeIndex===0?this.value.length-1:o;this.onActiveIndexChange.emit(r),t.cancelable&&t.preventDefault()}onItemClick(t){this.stopTheSlideShow();let o=t;if(o!==this._activeIndex){let i=o+this.totalShiftedItems,r=0;o<this._activeIndex?(r=this.d_numVisible-i-1-this.getMedianItemIndex(),r>0&&-1*this.totalShiftedItems!==0&&this.step(r)):(r=this.getMedianItemIndex()-i,r<0&&-1*this.totalShiftedItems<this.getTotalPageNumber()-1&&this.step(r)),this.activeIndex=o,this.onActiveIndexChange.emit(this.activeIndex)}}onThumbnailKeydown(t,o){switch((t.code==="Enter"||t.code==="Space")&&(this.onItemClick(o),t.preventDefault()),t.code){case"ArrowRight":this.onRightKey();break;case"ArrowLeft":this.onLeftKey();break;case"Home":this.onHomeKey(),t.preventDefault();break;case"End":this.onEndKey(),t.preventDefault();break;case"ArrowUp":case"ArrowDown":t.preventDefault();break;case"Tab":this.onTabKey();break;default:break}}onRightKey(){let t=Ye(this.itemsContainer.nativeElement,'[data-pc-section="thumbnailitem"]'),o=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(o,o+1===t.length?t.length-1:o+1)}onLeftKey(){let t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,t-1<=0?0:t-1)}onHomeKey(){let t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,0)}onEndKey(){let t=Ye(this.itemsContainer.nativeElement,'[data-pc-section="thumbnailitem"]'),o=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(o,t.length-1)}onTabKey(){let t=[...Ye(this.itemsContainer.nativeElement,'[data-pc-section="thumbnailitem"]')],o=t.findIndex(a=>tt(a,"data-p-active")===!0),i=ye(this.itemsContainer.nativeElement,'[tabindex="0"]'),r=t.findIndex(a=>a===i.parentElement);t[r].children[0].tabIndex="-1",t[o].children[0].tabIndex="0"}findFocusedIndicatorIndex(){let t=[...Ye(this.itemsContainer.nativeElement,'[data-pc-section="thumbnailitem"]')],o=ye(this.itemsContainer.nativeElement,'[data-pc-section="thumbnailitem"] > [tabindex="0"]');return t.findIndex(i=>i===o.parentElement)}changedFocusedIndicator(t,o){let i=Ye(this.itemsContainer.nativeElement,'[data-pc-section="thumbnailitem"]');i[t].children[0].tabIndex="-1",i[o].children[0].tabIndex="0",i[o].children[0].focus()}step(t){let o=this.totalShiftedItems+t;t<0&&-1*o+this.d_numVisible>this.value.length-1?o=this.d_numVisible-this.value.length:t>0&&o>0&&(o=0),this.circular&&(t<0&&this.value.length-1===this._activeIndex?o=0:t>0&&this._activeIndex===0&&(o=this.d_numVisible-this.value.length)),this.itemsContainer&&(ke(this.itemsContainer.nativeElement,"p-items-hidden"),this.itemsContainer.nativeElement.style.transform=this.isVertical?`translate3d(0, ${o*(100/this.d_numVisible)}%, 0)`:`translate3d(${o*(100/this.d_numVisible)}%, 0, 0)`,this.itemsContainer.nativeElement.style.transition="transform 500ms ease 0s"),this.totalShiftedItems=o}stopTheSlideShow(){this.slideShowActive&&this.stopSlideShow&&this.stopSlideShow.emit()}changePageOnTouch(t,o){o<0?this.navForward(t):this.navBackward(t)}getTotalPageNumber(){return this.value.length>this.d_numVisible?this.value.length-this.d_numVisible+1:0}getMedianItemIndex(){let t=Math.floor(this.d_numVisible/2);return this.d_numVisible%2?t:t-1}onTransitionEnd(){this.itemsContainer&&this.itemsContainer.nativeElement&&(Pe(this.itemsContainer.nativeElement,"p-items-hidden"),this.itemsContainer.nativeElement.style.transition="")}onTouchEnd(t){let o=t.changedTouches[0];this.isVertical?this.changePageOnTouch(t,o.pageY-this.startPos.y):this.changePageOnTouch(t,o.pageX-this.startPos.x)}onTouchMove(t){t.cancelable&&t.preventDefault()}onTouchStart(t){let o=t.changedTouches[0];this.startPos={x:o.pageX,y:o.pageY}}isNavBackwardDisabled(){return!this.circular&&this._activeIndex===0||this.value.length<=this.d_numVisible}isNavForwardDisabled(){return!this.circular&&this._activeIndex===this.value.length-1||this.value.length<=this.d_numVisible}firstItemAciveIndex(){return this.totalShiftedItems*-1}lastItemActiveIndex(){return this.firstItemAciveIndex()+this.d_numVisible-1}isItemActive(t){return this.firstItemAciveIndex()<=t&&this.lastItemActiveIndex()>=t}bindDocumentListeners(){if(re(this.platformId)){let t=this.document.defaultView||"window";this.documentResizeListener=this.renderer.listen(t,"resize",()=>{this.calculatePosition()})}}unbindDocumentListeners(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}ngOnDestroy(){this.responsiveOptions&&this.unbindDocumentListeners(),this.thumbnailsStyle&&this.thumbnailsStyle.parentNode?.removeChild(this.thumbnailsStyle)}ariaPrevButtonLabel(){return this.galleria.config.translation.aria?this.galleria.config.translation.aria.prevPageLabel:void 0}ariaNextButtonLabel(){return this.galleria.config.translation.aria?this.galleria.config.translation.aria.nextPageLabel:void 0}ariaPageLabel(t){return this.galleria.config.translation.aria?this.galleria.config.translation.aria.pageLabel.replace(/{page}/g,t):void 0}static \u0275fac=function(o){return new(o||e)(Q(Vo),Q(ve),Q(qe),Q(io),Q(Dt))};static \u0275cmp=I({type:e,selectors:[["p-galleriaThumbnails"]],viewQuery:function(o,i){if(o&1&&be(Rb,5),o&2){let r;E(r=R())&&(i.itemsContainer=r.first)}},inputs:{containerId:"containerId",value:"value",isVertical:[2,"isVertical","isVertical",$],slideShowActive:[2,"slideShowActive","slideShowActive",$],circular:[2,"circular","circular",$],responsiveOptions:"responsiveOptions",contentHeight:"contentHeight",showThumbnailNavigators:"showThumbnailNavigators",templates:"templates",numVisible:"numVisible",activeIndex:"activeIndex"},outputs:{onActiveIndexChange:"onActiveIndexChange",stopSlideShow:"stopSlideShow"},standalone:!1,decls:8,vars:6,consts:[["itemsContainer",""],[1,"p-galleria-thumbnails"],[1,"p-galleria-thumbnails-content"],["type","button","pRipple","",3,"ngClass","disabled","click",4,"ngIf"],[1,"p-galleria-thumbnails-viewport",3,"ngStyle"],["role","tablist",1,"p-galleria-thumbnail-items",3,"transitionend","touchstart","touchmove"],[3,"ngClass","keydown",4,"ngFor","ngForOf"],["type","button","pRipple","",3,"click","ngClass","disabled"],[4,"ngIf"],[4,"ngTemplateOutlet"],[3,"styleClass",4,"ngIf"],[3,"styleClass"],[3,"keydown","ngClass"],[1,"p-galleria-thumbnail",3,"click","touchend","keydown.enter"],["type","thumbnail",3,"item","templates"],[3,"ngClass",4,"ngIf"],[3,"ngClass"]],template:function(o,i){if(o&1){let r=L();d(0,"div",1)(1,"div",2),b(2,Nb,3,7,"button",3),d(3,"div",4)(4,"div",5,0),M("transitionend",function(){return C(r),w(i.onTransitionEnd())})("touchstart",function(s){return C(r),w(i.onTouchStart(s))})("touchmove",function(s){return C(r),w(i.onTouchMove(s))}),b(6,Vb,3,15,"div",6),u()(),b(7,Gb,3,7,"button",3),u()()}o&2&&(p(2),c("ngIf",i.showThumbnailNavigators),p(),c("ngStyle",U(4,Db,i.isVertical?i.contentHeight:"")),p(3),c("ngForOf",i.value),p(),c("ngIf",i.showThumbnailNavigators))},dependencies:()=>[ge,pt,Oe,we,Ve,uo,Mt,Si,co,Jt,Da],encapsulation:2,changeDetection:0})}return e})(),Qc=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=Y({type:e});static \u0275inj=K({imports:[F,V,wa,Mt,Si,co,Jt,Sc,kc,F,V]})}return e})();var Jb=()=>({exact:!0});function ev(e,n){if(e&1&&h(0,"img",17),e&2){let t=n.$implicit;c("src",t.itemImageSrc,ut)}}function tv(e,n){if(e&1&&h(0,"img",18),e&2){let t=n.$implicit;c("src",t.thumbnailImageSrc,ut)}}var Wn=class e{constructor(n,t){this.photoService=n;this.responsiveService=t}responsiveOptions=[];images=[];isActive;get isActiveValue(){return this.isActive()}set isActiveValue(n){this.photoService.isActive.set(n)}ngOnInit(){this.photoService.getImages().then(n=>this.images=n),this.responsiveService.ResponsiveOptions.forEach(n=>this.responsiveOptions.push(n)),this.isActive=this.photoService.isActive}static \u0275fac=function(t){return new(t||e)(Q(No),Q(Fo))};static \u0275cmp=I({type:e,selectors:[["app-home"]],features:[J([])],decls:29,vars:10,consts:[["item",""],["thumbnail",""],[1,"text-lg","pt-10","sm:animate-fade-in"],[1,"flex","gap-5","flex-col","sm:flex-row","items-center","mx-auto","max-w-7xl","p-10","pt-5","pb-15","sm:pt-10"],[1,"text-4xl","sm:text-6xl","font-bold","w-full","sm:w-1/2","textSand"],[1,"w-full","sm:w-1/2","text-slate-700"],[1,"font-semibold","text-2xl","sm:text-3xl","text-stone"],[1,"textSand","text-2xl","sm:text-3xl","pi","pi-thumbs-up-fill"],[1,"font-extralight","text-sm","sm:text-lg","text-stone","mb-2"],["routerLink","/about","routerLinkActive","active text-slate-200",1,"ml-auto","mr-0","hipervincle",3,"routerLinkActiveOptions"],[1,"text-sm","pi","pi-plus"],[1,"mx-auto","max-w-7xl","pb-10"],[1,"mx-auto","pb-20","bgSand"],[1,"text-center","pt-20","pb-10","font-semibold","textStone","text-4xl","sm:text-6xl"],[1,"mx-auto","max-w-6xl","pt-20","pb-20"],[1,"mx-auto","pt-20","pb-20","p-10","bgSand","relative"],[3,"visibleChange","value","visible","responsiveOptions","numVisible","circular","fullScreen","showItemNavigators","showThumbnails"],[1,"h-[calc(77vh)]","object-cover",3,"src"],[1,"h-20","object-cover",3,"src"]],template:function(t,o){if(t&1){let i=L();d(0,"div",2)(1,"section",3)(2,"h1",4),v(3,"Looking for a healthcare expert in Aruba?"),u(),d(4,"div",5)(5,"h2",6),v(6,"Arucare is here to help "),h(7,"span",7),u(),h(8,"p-divider"),d(9,"p",8),v(10,"Instant medical care at your doorstep in minutes. In a few simple steps you can have a Board Certified doctor at your disposal to assist you."),u(),d(11,"a",9),v(12,"About us "),h(13,"span",10),u()()(),d(14,"section",11),h(15,"app-reviews"),u(),d(16,"section",12)(17,"h2",13),v(18,"Designed to be simple and easy to use"),u(),h(19,"app-reserve"),u(),d(20,"section",14),h(21,"app-medicals"),u(),d(22,"section",15),h(23,"app-team"),u(),d(24,"p-galleria",16),gs("visibleChange",function(a){return C(i),hs(o.isActiveValue,a)||(o.isActiveValue=a),w(a)}),b(25,ev,1,1,"ng-template",null,0,he)(27,tv,1,1,"ng-template",null,1,he),u()()}t&2&&(p(11),c("routerLinkActiveOptions",Qe(9,Jb)),p(13),c("value",o.images),fs("visible",o.isActiveValue),c("responsiveOptions",o.responsiveOptions)("numVisible",7)("circular",!0)("fullScreen",!0)("showItemNavigators",!0)("showThumbnails",!0))},dependencies:[F,Pn,Nn,Vn,Hn,eo,Wt,Un,Bt,Qc,Vo,St,jt],encapsulation:2})};var ov=["previcon"],iv=["nexticon"],nv=["content"],rv=["prevButton"],av=["nextButton"],sv=["inkbar"],lv=["tabs"],Ri=["*"],cv=e=>({"p-tablist-viewport":e});function dv(e,n){e&1&&ae(0)}function uv(e,n){if(e&1&&b(0,dv,1,0,"ng-container",11),e&2){let t=m(2);c("ngTemplateOutlet",t.prevIconTemplate||t._prevIconTemplate)}}function pv(e,n){e&1&&h(0,"ChevronLeftIcon")}function mv(e,n){if(e&1){let t=L();d(0,"button",10,3),M("click",function(){C(t);let i=m();return w(i.onPrevButtonClick())}),b(2,uv,1,1,"ng-container")(3,pv,1,0,"ChevronLeftIcon"),u()}if(e&2){let t=m();_("aria-label",t.prevButtonAriaLabel)("tabindex",t.tabindex())("data-pc-group-section","navigator"),p(2),et(t.prevIconTemplate||t._prevIconTemplate?2:3)}}function fv(e,n){e&1&&ae(0)}function hv(e,n){if(e&1&&b(0,fv,1,0,"ng-container",11),e&2){let t=m(2);c("ngTemplateOutlet",t.nextIconTemplate||t._nextIconTemplate)}}function gv(e,n){e&1&&h(0,"ChevronRightIcon")}function bv(e,n){if(e&1){let t=L();d(0,"button",12,4),M("click",function(){C(t);let i=m();return w(i.onNextButtonClick())}),b(2,hv,1,1,"ng-container")(3,gv,1,0,"ChevronRightIcon"),u()}if(e&2){let t=m();_("aria-label",t.nextButtonAriaLabel)("tabindex",t.tabindex())("data-pc-group-section","navigator"),p(2),et(t.nextIconTemplate||t._nextIconTemplate?2:3)}}function vv(e,n){e&1&&Z(0)}var yv=({dt:e})=>`
.p-tabs {
    display: flex;
    flex-direction: column;
}

.p-tablist {
    display: flex;
    position: relative;
}

.p-tabs-scrollable > .p-tablist {
    overflow: hidden;
}

.p-tablist-viewport {
    overflow-x: auto;
    overflow-y: hidden;
    scroll-behavior: smooth;
    scrollbar-width: none;
    overscroll-behavior: contain auto;
}

.p-tablist-viewport::-webkit-scrollbar {
    display: none;
}

.p-tablist-tab-list {
    position: relative;
    display: flex;
    background: ${e("tabs.tablist.background")};
    border-style: solid;
    border-color: ${e("tabs.tablist.border.color")};
    border-width: ${e("tabs.tablist.border.width")};
}

.p-tablist-content {
    flex-grow: 1;
}

.p-tablist-nav-button {
    all: unset;
    position: absolute !important;
    flex-shrink: 0;
    top: 0;
    z-index: 2;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${e("tabs.nav.button.background")};
    color: ${e("tabs.nav.button.color")};
    width: ${e("tabs.nav.button.width")};
    transition: color ${e("tabs.transition.duration")}, outline-color ${e("tabs.transition.duration")}, box-shadow ${e("tabs.transition.duration")};
    box-shadow: ${e("tabs.nav.button.shadow")};
    outline-color: transparent;
    cursor: pointer;
}

.p-tablist-nav-button:focus-visible {
    z-index: 1;
    box-shadow: ${e("tabs.nav.button.focus.ring.shadow")};
    outline: ${e("tabs.nav.button.focus.ring.width")} ${e("tabs.nav.button.focus.ring.style")} ${e("tabs.nav.button.focus.ring.color")};
    outline-offset: ${e("tabs.nav.button.focus.ring.offset")};
}

.p-tablist-nav-button:hover {
    color: ${e("tabs.nav.button.hover.color")};
}

.p-tablist-prev-button {
    left: 0;
}

.p-tablist-next-button {
    right: 0;
}

.p-tab {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    cursor: pointer;
    user-select: none;
    position: relative;
    border-style: solid;
    white-space: nowrap;
    gap: ${e("tabs.tab.gap")};
    background: ${e("tabs.tab.background")};
    border-width: ${e("tabs.tab.border.width")};
    border-color: ${e("tabs.tab.border.color")};
    color: ${e("tabs.tab.color")};
    padding: ${e("tabs.tab.padding")};
    font-weight: ${e("tabs.tab.font.weight")};
    transition: background ${e("tabs.transition.duration")}, border-color ${e("tabs.transition.duration")}, color ${e("tabs.transition.duration")}, outline-color ${e("tabs.transition.duration")}, box-shadow ${e("tabs.transition.duration")};
    margin: ${e("tabs.tab.margin")};
    outline-color: transparent;
}

.p-tab:not(.p-disabled):focus-visible {
    z-index: 1;
    box-shadow: ${e("tabs.tab.focus.ring.shadow")};
    outline: ${e("tabs.tab.focus.ring.width")} ${e("tabs.tab.focus.ring.style")} ${e("tabs.tab.focus.ring.color")};
    outline-offset: ${e("tabs.tab.focus.ring.offset")};
}

.p-tab:not(.p-tab-active):not(.p-disabled):hover {
    background: ${e("tabs.tab.hover.background")};
    border-color: ${e("tabs.tab.hover.border.color")};
    color: ${e("tabs.tab.hover.color")};
}

.p-tab-active {
    background: ${e("tabs.tab.active.background")};
    border-color: ${e("tabs.tab.active.border.color")};
    color: ${e("tabs.tab.active.color")};
}

.p-tabpanels {
    background: ${e("tabs.tabpanel.background")};
    color: ${e("tabs.tabpanel.color")};
    padding: ${e("tabs.tabpanel.padding")};
    outline: 0 none;
}

.p-tabpanel:focus-visible {
    box-shadow: ${e("tabs.tabpanel.focus.ring.shadow")};
    outline: ${e("tabs.tabpanel.focus.ring.width")} ${e("tabs.tabpanel.focus.ring.style")} ${e("tabs.tabpanel.focus.ring.color")};
    outline-offset: ${e("tabs.tabpanel.focus.ring.offset")};
}

.p-tablist-active-bar {
    z-index: 1;
    display: block;
    position: absolute;
    bottom: ${e("tabs.active.bar.bottom")};
    height: ${e("tabs.active.bar.height")};
    background: ${e("tabs.active.bar.background")};
    transition: 250ms cubic-bezier(0.35, 0, 0.25, 1);
}
`,_v={root:({props:e})=>["p-tabs p-component",{"p-tabs-scrollable":e.scrollable}]},Kc=(()=>{class e extends X{name="tabs";theme=yv;classes=_v;static \u0275fac=(()=>{let t;return function(i){return(t||(t=k(e)))(i||e)}})();static \u0275prov=A({token:e,factory:e.\u0275fac})}return e})();var Yc=(()=>{class e extends H{prevIconTemplate;nextIconTemplate;templates;content;prevButton;nextButton;inkbar;tabs;pcTabs=y(Xe(()=>Gn));isPrevButtonEnabled=Se(!1);isNextButtonEnabled=Se(!1);resizeObserver;showNavigators=se(()=>this.pcTabs.showNavigators());tabindex=se(()=>this.pcTabs.tabindex());scrollable=se(()=>this.pcTabs.scrollable());constructor(){super(),$t(()=>{this.pcTabs.value(),re(this.platformId)&&setTimeout(()=>{this.updateInkBar()})})}get prevButtonAriaLabel(){return this.config.translation.aria.previous}get nextButtonAriaLabel(){return this.config.translation.aria.next}ngAfterViewInit(){super.ngAfterViewInit(),this.showNavigators()&&re(this.platformId)&&(this.updateButtonState(),this.bindResizeObserver())}_prevIconTemplate;_nextIconTemplate;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"previcon":this._prevIconTemplate=t.template;break;case"nexticon":this._nextIconTemplate=t.template;break}})}ngOnDestroy(){this.unbindResizeObserver(),super.ngOnDestroy()}onScroll(t){this.showNavigators()&&this.updateButtonState(),t.preventDefault()}onPrevButtonClick(){let t=this.content.nativeElement,o=Qt(t),i=Math.abs(t.scrollLeft)-o,r=i<=0?0:i;t.scrollLeft=Dr(t)?-1*r:r}onNextButtonClick(){let t=this.content.nativeElement,o=Qt(t)-this.getVisibleButtonWidths(),i=t.scrollLeft+o,r=t.scrollWidth-o,a=i>=r?r:i;t.scrollLeft=Dr(t)?-1*a:a}updateButtonState(){let t=this.content?.nativeElement,o=this.el?.nativeElement,{scrollWidth:i,offsetWidth:r}=t,a=Math.abs(t.scrollLeft),s=Qt(t);this.isPrevButtonEnabled.set(a!==0),this.isNextButtonEnabled.set(o.offsetWidth>=r&&a!==i-s)}updateInkBar(){let t=this.content.nativeElement,o=this.inkbar.nativeElement,i=this.tabs.nativeElement,r=ye(t,'[data-pc-name="tab"][data-p-active="true"]');o.style.width=mt(r)+"px",o.style.left=ri(r).left-ri(i).left+"px"}getVisibleButtonWidths(){let t=this.prevButton?.nativeElement,o=this.nextButton?.nativeElement;return[t,o].reduce((i,r)=>r?i+Qt(r):i,0)}bindResizeObserver(){this.resizeObserver=new ResizeObserver(()=>this.updateButtonState()),this.resizeObserver.observe(this.el.nativeElement)}unbindResizeObserver(){this.resizeObserver&&(this.resizeObserver.unobserve(this.el.nativeElement),this.resizeObserver=null)}static \u0275fac=function(o){return new(o||e)};static \u0275cmp=I({type:e,selectors:[["p-tablist"]],contentQueries:function(o,i,r){if(o&1&&(B(r,ov,4),B(r,iv,4),B(r,Ie,4)),o&2){let a;E(a=R())&&(i.prevIconTemplate=a.first),E(a=R())&&(i.nextIconTemplate=a.first),E(a=R())&&(i.templates=a)}},viewQuery:function(o,i){if(o&1&&(be(nv,5),be(rv,5),be(av,5),be(sv,5),be(lv,5)),o&2){let r;E(r=R())&&(i.content=r.first),E(r=R())&&(i.prevButton=r.first),E(r=R())&&(i.nextButton=r.first),E(r=R())&&(i.inkbar=r.first),E(r=R())&&(i.tabs=r.first)}},hostVars:5,hostBindings:function(o,i){o&2&&(_("data-pc-name","tablist"),Ce("p-tablist",!0)("p-component",!0))},features:[O],ngContentSelectors:Ri,decls:9,vars:6,consts:[["content",""],["tabs",""],["inkbar",""],["prevButton",""],["nextButton",""],["type","button","pRipple","",1,"p-tablist-nav-button","p-tablist-prev-button"],[1,"p-tablist-content",3,"scroll","ngClass"],["role","tablist",1,"p-tablist-tab-list"],["role","presentation",1,"p-tablist-active-bar"],["type","button","pRipple","",1,"p-tablist-nav-button","p-tablist-next-button"],["type","button","pRipple","",1,"p-tablist-nav-button","p-tablist-prev-button",3,"click"],[4,"ngTemplateOutlet"],["type","button","pRipple","",1,"p-tablist-nav-button","p-tablist-next-button",3,"click"]],template:function(o,i){if(o&1){let r=L();ie(),b(0,mv,4,4,"button",5),d(1,"div",6,0),M("scroll",function(s){return C(r),w(i.onScroll(s))}),d(3,"div",7,1),Z(5),h(6,"span",8,2),u()(),b(8,bv,4,4,"button",9)}o&2&&(et(i.showNavigators()&&i.isPrevButtonEnabled()?0:-1),p(),c("ngClass",U(4,cv,i.scrollable())),p(5),_("data-pc-section","inkbar"),p(2),et(i.showNavigators()&&i.isNextButtonEnabled()?8:-1))},dependencies:[F,ge,we,Jt,Mt,Ec,uo,V],encapsulation:2,changeDetection:0})}return e})(),xv=(()=>{class e extends H{value=Pt();disabled=Ee(!1,{transform:$});pcTabs=y(Xe(()=>Gn));pcTabList=y(Xe(()=>Yc));el=y(Je);ripple=se(()=>this.config.ripple());id=se(()=>`${this.pcTabs.id()}_tab_${this.value()}`);ariaControls=se(()=>`${this.pcTabs.id()}_tabpanel_${this.value()}`);active=se(()=>yo(this.pcTabs.value(),this.value()));tabindex=se(()=>this.active()?this.pcTabs.tabindex():-1);mutationObserver;onFocus(t){this.pcTabs.selectOnFocus()&&this.changeActiveValue()}onClick(t){this.changeActiveValue()}onKeyDown(t){switch(t.code){case"ArrowRight":this.onArrowRightKey(t);break;case"ArrowLeft":this.onArrowLeftKey(t);break;case"Home":this.onHomeKey(t);break;case"End":this.onEndKey(t);break;case"PageDown":this.onPageDownKey(t);break;case"PageUp":this.onPageUpKey(t);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(t);break;default:break}t.stopPropagation()}ngAfterViewInit(){super.ngAfterViewInit(),this.bindMutationObserver()}onArrowRightKey(t){let o=this.findNextTab(t.currentTarget);o?this.changeFocusedTab(t,o):this.onHomeKey(t),t.preventDefault()}onArrowLeftKey(t){let o=this.findPrevTab(t.currentTarget);o?this.changeFocusedTab(t,o):this.onEndKey(t),t.preventDefault()}onHomeKey(t){let o=this.findFirstTab();this.changeFocusedTab(t,o),t.preventDefault()}onEndKey(t){let o=this.findLastTab();this.changeFocusedTab(t,o),t.preventDefault()}onPageDownKey(t){this.scrollInView(this.findLastTab()),t.preventDefault()}onPageUpKey(t){this.scrollInView(this.findFirstTab()),t.preventDefault()}onEnterKey(t){this.changeActiveValue(),t.preventDefault()}findNextTab(t,o=!1){let i=o?t:t.nextElementSibling;return i?tt(i,"data-p-disabled")||tt(i,"data-pc-section")==="inkbar"?this.findNextTab(i):i:null}findPrevTab(t,o=!1){let i=o?t:t.previousElementSibling;return i?tt(i,"data-p-disabled")||tt(i,"data-pc-section")==="inkbar"?this.findPrevTab(i):i:null}findFirstTab(){return this.findNextTab(this.pcTabList?.tabs?.nativeElement?.firstElementChild,!0)}findLastTab(){return this.findPrevTab(this.pcTabList?.tabs?.nativeElement?.lastElementChild,!0)}changeActiveValue(){this.pcTabs.updateValue(this.value())}changeFocusedTab(t,o){ft(o),this.scrollInView(o)}scrollInView(t){t?.scrollIntoView?.({block:"nearest"})}bindMutationObserver(){re(this.platformId)&&(this.mutationObserver=new MutationObserver(t=>{t.forEach(()=>{this.active()&&this.pcTabList?.updateInkBar()})}),this.mutationObserver.observe(this.el.nativeElement,{childList:!0,characterData:!0,subtree:!0}))}unbindMutationObserver(){this.mutationObserver.disconnect()}ngOnDestroy(){this.mutationObserver&&this.unbindMutationObserver(),super.ngOnDestroy()}static \u0275fac=(()=>{let t;return function(i){return(t||(t=k(e)))(i||e)}})();static \u0275cmp=I({type:e,selectors:[["p-tab"]],hostVars:16,hostBindings:function(o,i){o&1&&M("focus",function(a){return i.onFocus(a)})("click",function(a){return i.onClick(a)})("keydown",function(a){return i.onKeyDown(a)}),o&2&&(_("data-pc-name","tab")("id",i.id())("aria-controls",i.ariaControls())("role","tab")("aria-selected",i.active())("data-p-disabled",i.disabled())("data-p-active",i.active())("tabindex",i.tabindex()),Ce("p-tab",!0)("p-tab-active",i.active())("p-disabled",i.disabled())("p-component",!0))},inputs:{value:[1,"value"],disabled:[1,"disabled"]},outputs:{value:"valueChange"},features:[ss([uo]),O],ngContentSelectors:Ri,decls:1,vars:0,template:function(o,i){o&1&&(ie(),Z(0))},dependencies:[F,V],encapsulation:2,changeDetection:0})}return e})(),Cv=(()=>{class e extends H{pcTabs=y(Xe(()=>Gn));value=Pt(void 0);id=se(()=>`${this.pcTabs.id()}_tabpanel_${this.value()}`);ariaLabelledby=se(()=>`${this.pcTabs.id()}_tab_${this.value()}`);active=se(()=>yo(this.pcTabs.value(),this.value()));static \u0275fac=(()=>{let t;return function(i){return(t||(t=k(e)))(i||e)}})();static \u0275cmp=I({type:e,selectors:[["p-tabpanel"]],hostVars:9,hostBindings:function(o,i){o&2&&(_("data-pc-name","tabpanel")("id",i.id())("role","tabpanel")("aria-labelledby",i.ariaLabelledby())("data-p-active",i.active()),Ce("p-tabpanel",!0)("p-component",!0))},inputs:{value:[1,"value"]},outputs:{value:"valueChange"},features:[O],ngContentSelectors:Ri,decls:1,vars:1,template:function(o,i){o&1&&(ie(),b(0,vv,1,0)),o&2&&et(i.active()?0:-1)},dependencies:[F],encapsulation:2,changeDetection:0})}return e})(),wv=(()=>{class e extends H{static \u0275fac=(()=>{let t;return function(i){return(t||(t=k(e)))(i||e)}})();static \u0275cmp=I({type:e,selectors:[["p-tabpanels"]],hostVars:6,hostBindings:function(o,i){o&2&&(_("data-pc-name","tabpanels")("role","presentation"),Ce("p-tabpanels",!0)("p-component",!0))},features:[O],ngContentSelectors:Ri,decls:1,vars:0,template:function(o,i){o&1&&(ie(),Z(0))},dependencies:[F],encapsulation:2,changeDetection:0})}return e})(),Gn=(()=>{class e extends H{value=Pt(void 0);scrollable=Ee(!1,{transform:$});lazy=Ee(!1,{transform:$});selectOnFocus=Ee(!1,{transform:$});showNavigators=Ee(!0,{transform:$});tabindex=Ee(0,{transform:me});id=Se(ce("pn_id_"));_componentStyle=y(Kc);updateValue(t){this.value.update(()=>t)}static \u0275fac=(()=>{let t;return function(i){return(t||(t=k(e)))(i||e)}})();static \u0275cmp=I({type:e,selectors:[["p-tabs"]],hostVars:8,hostBindings:function(o,i){o&2&&(_("data-pc-name","tabs")("id",i.id),Ce("p-tabs",!0)("p-tabs-scrollable",i.scrollable())("p-component",!0))},inputs:{value:[1,"value"],scrollable:[1,"scrollable"],lazy:[1,"lazy"],selectOnFocus:[1,"selectOnFocus"],showNavigators:[1,"showNavigators"],tabindex:[1,"tabindex"]},outputs:{value:"valueChange"},features:[J([Kc]),O],ngContentSelectors:Ri,decls:1,vars:0,template:function(o,i){o&1&&(ie(),Z(0))},dependencies:[F],encapsulation:2,changeDetection:0})}return e})(),Zc=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=Y({type:e});static \u0275inj=K({imports:[Gn,wv,Cv,Yc,xv]})}return e})();var qn=class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=I({type:e,selectors:[["app-about"]],decls:81,vars:0,consts:[[1,"pb-10","w-full","pt-10","text-xl","sm:animate-fade-in","min-h-[calc(100vh-15rem)]","sm:animation-fade-in"],["id","aboutus",1,"max-w-6xl","mx-auto","p-5","text-sm"],[1,"text-4xl","font-semibold","text-stone","flex","items-center","gap-3"],[1,"pi","pi-question","text-4xl"],[1,"max-w-7xl"],[1,"grid","sm:grid","sm:grid-cols-2","items-center","gap-10","sm:gap-10"],[1,"text-stone","font-extralight","text-lg"],[1,"underline"],[1,"mt-2"],["src","assets/images/aboutus.jpg","alt","about us"],[1,"bg-white","textSand","p-6","rounded-2xl","shadow-sm","max-w-4xl","mx-auto","text-center","border","sm:col-span-2","border-gray-200","items-center"],[1,"text-xl","font-semibold","leading-relaxed"],[1,"text-lg","text-stone"],[1,"font-bold","text-blue-500","underline"],["id","mision",1,"max-w-6xl","mx-auto","p-5","text-sm"],["src","assets/images/mision.png","alt","about us",1,"w-3/4","mx-auto"],[1,"text-2xl","font-semibold"],[1,"text-lg"],[1,"text-blue-100","bg-stone-500","font-semibold"],[1,"text-3xl"],[1,"text-xl","font-semibold"],[1,"mt-3","text-base","list-inside","list-disc"],[1,"mt-3"],["id","goals",1,"max-w-6xl","mx-auto","p-5","text-sm"],[1,"sm:col-span-2","p-6","rounded-lg","shadow-md"],[1,"text-3xl","font-bold","text-stone","flex","items-center","gap-2"],[1,"mt-4","space-y-3","text-stone","text-lg"],[1,"font-semibold","text-blue-500","underline"]],template:function(t,o){t&1&&(d(0,"div",0)(1,"section",1)(2,"h1",2),h(3,"span",3),v(4,"About Us"),u(),h(5,"p-divider",4),d(6,"div",5)(7,"div",6)(8,"p")(9,"span",7),v(10,"Arucare is a telemedicine platform built specifically for Aruba"),u(),v(11," keeping or visitors and locals healthy. We believe that healthcare should be simple, fast, and accessible no matter where you are on the island. "),u(),d(12,"p",8),v(13," Born from the need to modernize and simplify the healthcare experience, Arucare connects patients with doctors, physiotherapists , and healthcare providers through secure virtual/personal consultations. No long waits, no unnecessary travel, no complicated systems. "),u()(),d(14,"div"),h(15,"img",9),u(),d(16,"div",10)(17,"p",11),v(18," Whether you're in Noord, San Nicolas, or anywhere in between, quality care is now just a tap away. "),u(),h(19,"p-divider"),d(20,"p",12),v(21," We're proud to bring innovative, island-friendly solutions to everyday healthcare and yes, "),h(22,"br"),d(23,"span",13),v(24,"we'll even deliver your medication right to your door."),u()()()()(),d(25,"section",14)(26,"div",5)(27,"div"),h(28,"img",15),u(),d(29,"div",6)(30,"p")(31,"span",16),v(32,"\u{1F31F} Vision"),u(),h(33,"br"),d(34,"span",17),v(35,"To create a healthier Aruba by making modern, accessible, and efficient healthcare available to everyone, everywhere on the island "),d(36,"span",18),v(37,"\u2014 no matter the time or place."),u()()(),h(38,"p-divider"),d(39,"p")(40,"span",19),v(41,"\u{1F3AF}"),u(),d(42,"span",20),v(43,"Our mission is to transform the way healthcare works in Aruba by:"),u()(),d(44,"ul",21)(45,"li"),v(46,"Giving patients instant, secure access to medical care when they need it most."),u(),d(47,"li"),v(48,"Offering seamless prescription services, including on-demand medicine delivery."),u(),d(49,"li"),v(50,"Creating a smooth connection between patients and healthcare professionals through smart, island-ready technology."),u()(),d(51,"p",22)(52,"span",18),v(53,"Born from the need to modernize and simplify the healthcare experience"),u(),v(54,", Arucare connects patients with doctors, physiotherapists , and healthcare providers through secure virtual/personal consultations. No long waits, no unnecessary travel, no complicated systems. "),u()()()(),d(55,"section",23)(56,"div",24)(57,"h2",25),v(58," \u{1F680} Goals "),u(),h(59,"p-divider"),d(60,"ul",26)(61,"li")(62,"span",27),v(63,"Modernize"),u(),v(64," Aruba\u2019s healthcare system through innovative telemedicine."),u(),d(65,"li")(66,"span",27),v(67,"Support Providers"),u(),v(68," by offering a platform to manage appointments, patient records, and virtual/personal visits."),u(),d(69,"li")(70,"span",27),v(71,"Empower Patients"),u(),v(72," with fast, easy access to trusted medical professionals."),u(),d(73,"li")(74,"span",27),v(75,"Deliver Medication"),u(),v(76," quickly and safely \u2014 right to patients\u2019 hotels/Airbnbs/homes after a consult."),u(),d(77,"li")(78,"span",27),v(79,"Enhance Efficiency"),u(),v(80," in healthcare delivery across the island."),u()()()()())},dependencies:[eo,Wt,Zc],encapsulation:2})};var Qn=class e{sendMessage(){console.log("Sending message...")}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=I({type:e,selectors:[["app-contact"]],decls:21,vars:0,consts:[[1,"text-lg","mx-auto","bgSand","sm:animate-fade-in","p-10","sm:p-0","flex","h-fit","sm:h-[calc(100vh-10rem)]","flex-col","sm:flex-row","items-center"],[1,"w-full","h-fit","mx-auto","max-w-6xl","flex","bg-sky-100","rounded-2xl","shadow-2xl"],[1,"w-full"],[1,"max-w-md","px-8","py-6"],[1,"text-2xl","font-semibold","text-slate-600","mb-4"],[1,"mb-4"],["for","name",1,"block","text-slate-600","mb-1"],["placeholder","Enter your name","type","text",1,"w-full","px-3","py-2","bg-slate-300","rounded-sm","focus:outline-none","focus:ring-2","focus:ring-blue-500","transition","duration-300"],["for","email",1,"block","text-slate-600","mb-1"],["placeholder","Enter your email","name","email","id","email","type","email",1,"w-full","px-4","py-2","bg-slate-300","rounded-sm","focus:outline-none","focus:ring-2","focus:ring-blue-500","transition","duration-300"],["for","message",1,"block","text-slate-600","mb-1"],["rows","4","placeholder","Enter your message","name","message","id","message",1,"w-full","px-4","py-2","bg-slate-300","rounded-sm","focus:outline-none","focus:ring-2","focus:ring-blue-500","transition","duration-300"],["type","submit",1,"w-full","bg-blue-500","text-slate-200","py-2","px-4","rounded-sm","hover:bg-blue-300","cursor-pointer","hover:text-slate-600","transition","duration-300",3,"click"]],template:function(t,o){t&1&&(d(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h2",4),v(5,"Contact Us"),u(),d(6,"form")(7,"div",5)(8,"label",6),v(9,"Your Name"),u(),h(10,"input",7),u(),d(11,"div",5)(12,"label",8),v(13,"Your Email"),u(),h(14,"input",9),u(),d(15,"div",5)(16,"label",10),v(17,"Your Message"),u(),h(18,"textarea",11),u(),d(19,"button",12),M("click",function(){return o.sendMessage()}),v(20," Send Message "),u()()()()()())},dependencies:[F],encapsulation:2})};var Iv=["header"],Sv=["icons"],kv=["content"],Tv=["footer"],Ev=["headericons"],Rv=["contentWrapper"],Dv=["*",[["p-header"]],[["p-footer"]]],$v=["*","p-header","p-footer"],Av=(e,n)=>({"p-panel p-component":!0,"p-panel-toggleable":e,"p-panel-expanded":n}),Ov=e=>({transitionParams:e,height:"0",opacity:"0"}),Mv=e=>({value:"hidden",params:e}),Bv=e=>({transitionParams:e,height:"*",opacity:"1"}),Fv=e=>({value:"visible",params:e}),Lv=(e,n,t)=>({"p-panel-icons-start":e,"p-panel-icons-end":n,"p-panel-icons-center":t}),Pv=e=>({$implicit:e});function Nv(e,n){if(e&1&&(d(0,"span",12),v(1),u()),e&2){let t=m(2);_("id",t.id+"_header"),p(),de(t._header)}}function Vv(e,n){e&1&&ae(0)}function Hv(e,n){}function zv(e,n){e&1&&b(0,Hv,0,0,"ng-template")}function jv(e,n){if(e&1&&h(0,"span"),e&2){let t=m(6);P(t.expandIcon)}}function Uv(e,n){e&1&&h(0,"MinusIcon")}function Wv(e,n){if(e&1&&(te(0),b(1,jv,1,2,"span",16)(2,Uv,1,0,"MinusIcon",14),oe()),e&2){let t=m(5);p(),c("ngIf",t.expandIcon),p(),c("ngIf",!t.expandIcon)}}function Gv(e,n){if(e&1&&h(0,"span"),e&2){let t=m(6);P(t.collapseIcon)}}function qv(e,n){e&1&&h(0,"PlusIcon")}function Qv(e,n){if(e&1&&(te(0),b(1,Gv,1,2,"span",16)(2,qv,1,0,"PlusIcon",14),oe()),e&2){let t=m(5);p(),c("ngIf",t.collapseIcon),p(),c("ngIf",!t.collapseIcon)}}function Kv(e,n){if(e&1&&(te(0),b(1,Wv,3,2,"ng-container",14)(2,Qv,3,2,"ng-container",14),oe()),e&2){let t=m(4);p(),c("ngIf",!t.collapsed),p(),c("ngIf",t.collapsed)}}function Yv(e,n){}function Zv(e,n){e&1&&b(0,Yv,0,0,"ng-template")}function Xv(e,n){if(e&1&&b(0,Kv,3,2,"ng-container",14)(1,Zv,1,0,null,15),e&2){let t=m(3);c("ngIf",!t.headerIconsTemplate&&!t._headerIconsTemplate&&!(t.toggleButtonProps!=null&&t.toggleButtonProps.icon)),p(),c("ngTemplateOutlet",t.headerIconsTemplate||t._headerIconsTemplate)("ngTemplateOutletContext",U(3,Pv,t.collapsed))}}function Jv(e,n){if(e&1){let t=L();d(0,"p-button",13),M("click",function(i){C(t);let r=m(2);return w(r.onIconClick(i))})("keydown",function(i){C(t);let r=m(2);return w(r.onKeyDown(i))}),b(1,Xv,2,5,"ng-template",null,1,he),u()}if(e&2){let t=m(2);c("text",!0)("rounded",!0)("buttonProps",t.toggleButtonProps),_("id",t.id+"_header")("aria-label",t.buttonAriaLabel)("aria-controls",t.id+"_content")("aria-expanded",!t.collapsed)}}function e1(e,n){if(e&1){let t=L();d(0,"div",8),M("click",function(i){C(t);let r=m();return w(r.onHeaderClick(i))}),b(1,Nv,2,2,"span",9),Z(2,1),b(3,Vv,1,0,"ng-container",6),d(4,"div",10),b(5,zv,1,0,null,6)(6,Jv,3,7,"p-button",11),u()()}if(e&2){let t=m();_("id",t.id+"-titlebar"),p(),c("ngIf",t._header),p(2),c("ngTemplateOutlet",t.headerTemplate||t._headerTemplate),p(),c("ngClass",vt(6,Lv,t.iconPos==="start",t.iconPos==="end",t.iconPos==="center")),p(),c("ngTemplateOutlet",t.iconTemplate||t._iconTemplate),p(),c("ngIf",t.toggleable)}}function t1(e,n){e&1&&ae(0)}function o1(e,n){e&1&&ae(0)}function i1(e,n){if(e&1&&(d(0,"div",17),Z(1,2),b(2,o1,1,0,"ng-container",6),u()),e&2){let t=m();p(2),c("ngTemplateOutlet",t.footerTemplate||t._footerTemplate)}}var n1=({dt:e})=>`
.p-panel {
    border: 1px solid ${e("panel.border.color")};
    border-radius: ${e("panel.border.radius")};
    background: ${e("panel.background")};
    color: ${e("panel.color")};
}

.p-panel-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${e("panel.header.padding")};
    background: ${e("panel.header.background")};
    color: ${e("panel.header.color")};
    border-style: solid;
    border-width: ${e("panel.header.border.width")};
    border-color: ${e("panel.header.border.color")};
    border-radius: ${e("panel.header.border.radius")};
}

.p-panel-toggleable .p-panel-header {
    padding: ${e("panel.toggleable.header.padding")};
}

.p-panel-title {
    line-height: 1;
    font-weight: ${e("panel.title.font.weight")};
}

.p-panel-content {
    padding: ${e("panel.content.padding")};
}

.p-panel-footer {
    padding: ${e("panel.footer.padding")};
}

/* For PrimeNG */
.p-panel-toggleable.p-panel-expanded > .p-panel-content-container:not(.ng-animating) {
    overflow: visible
}

.p-panel-toggleable .p-panel-content-container {
    overflow: hidden;
}
`,r1={root:({props:e})=>["p-panel p-component",{"p-panel-toggleable":e.toggleable}],header:"p-panel-header",title:"p-panel-title",headerActions:"p-panel-header-actions",pcToggleButton:"p-panel-toggle-button",contentContainer:"p-panel-content-container",content:"p-panel-content",footer:"p-panel-footer"},Xc=(()=>{class e extends X{name="panel";theme=n1;classes=r1;static \u0275fac=(()=>{let t;return function(i){return(t||(t=k(e)))(i||e)}})();static \u0275prov=A({token:e,factory:e.\u0275fac})}return e})();var a1=(()=>{class e extends H{toggleable;_header;collapsed;style;styleClass;iconPos="end";expandIcon;collapseIcon;showHeader=!0;toggler="icon";transitionOptions="400ms cubic-bezier(0.86, 0, 0.07, 1)";toggleButtonProps;collapsedChange=new q;onBeforeToggle=new q;onAfterToggle=new q;footerFacet;animating;headerTemplate;iconTemplate;contentTemplate;footerTemplate;headerIconsTemplate;_headerTemplate;_iconTemplate;_contentTemplate;_footerTemplate;_headerIconsTemplate;contentWrapperViewChild;id=ce("pn_id_");get buttonAriaLabel(){return this._header}_componentStyle=y(Xc);onHeaderClick(t){this.toggler==="header"&&this.toggle(t)}onIconClick(t){this.toggler==="icon"&&this.toggle(t)}toggle(t){if(this.animating)return!1;this.animating=!0,this.onBeforeToggle.emit({originalEvent:t,collapsed:this.collapsed}),this.toggleable&&(this.collapsed?this.expand():this.collapse()),this.cd.markForCheck(),t.preventDefault()}expand(){this.collapsed=!1,this.collapsedChange.emit(this.collapsed),this.updateTabIndex()}collapse(){this.collapsed=!0,this.collapsedChange.emit(this.collapsed),this.updateTabIndex()}getBlockableElement(){return this.el.nativeElement.children[0]}updateTabIndex(){this.contentWrapperViewChild&&this.contentWrapperViewChild.nativeElement.querySelectorAll('input, button, select, a, textarea, [tabindex]:not([tabindex="-1"])').forEach(o=>{this.collapsed?o.setAttribute("tabindex","-1"):o.removeAttribute("tabindex")})}onKeyDown(t){(t.code==="Enter"||t.code==="Space")&&(this.toggle(t),t.preventDefault())}onToggleDone(t){this.animating=!1,this.onAfterToggle.emit({originalEvent:t,collapsed:this.collapsed})}templates;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"header":this._headerTemplate=t.template;break;case"content":this._contentTemplate=t.template;break;case"footer":this._footerTemplate=t.template;break;case"icons":this._iconTemplate=t.template;break;case"headericons":this._headerIconsTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(i){return(t||(t=k(e)))(i||e)}})();static \u0275cmp=I({type:e,selectors:[["p-panel"]],contentQueries:function(o,i,r){if(o&1&&(B(r,pn,5),B(r,Iv,4),B(r,Sv,4),B(r,kv,4),B(r,Tv,4),B(r,Ev,4),B(r,Ie,4)),o&2){let a;E(a=R())&&(i.footerFacet=a.first),E(a=R())&&(i.headerTemplate=a.first),E(a=R())&&(i.iconTemplate=a.first),E(a=R())&&(i.contentTemplate=a.first),E(a=R())&&(i.footerTemplate=a.first),E(a=R())&&(i.headerIconsTemplate=a.first),E(a=R())&&(i.templates=a)}},viewQuery:function(o,i){if(o&1&&be(Rv,5),o&2){let r;E(r=R())&&(i.contentWrapperViewChild=r.first)}},inputs:{toggleable:[2,"toggleable","toggleable",$],_header:[0,"header","_header"],collapsed:[2,"collapsed","collapsed",$],style:"style",styleClass:"styleClass",iconPos:"iconPos",expandIcon:"expandIcon",collapseIcon:"collapseIcon",showHeader:[2,"showHeader","showHeader",$],toggler:"toggler",transitionOptions:"transitionOptions",toggleButtonProps:"toggleButtonProps"},outputs:{collapsedChange:"collapsedChange",onBeforeToggle:"onBeforeToggle",onAfterToggle:"onAfterToggle"},features:[J([Xc]),O],ngContentSelectors:$v,decls:8,vars:25,consts:[["contentWrapper",""],["icon",""],[3,"ngClass","ngStyle"],["class","p-panel-header",3,"click",4,"ngIf"],["role","region",1,"p-panel-content-container",3,"id"],[1,"p-panel-content"],[4,"ngTemplateOutlet"],["class","p-panel-footer",4,"ngIf"],[1,"p-panel-header",3,"click"],["class","p-panel-title",4,"ngIf"],[1,"p-panel-icons",3,"ngClass"],["severity","secondary","type","button","role","button","styleClass","p-panel-header-icon p-panel-toggler p-link",3,"text","rounded","buttonProps","click","keydown",4,"ngIf"],[1,"p-panel-title"],["severity","secondary","type","button","role","button","styleClass","p-panel-header-icon p-panel-toggler p-link",3,"click","keydown","text","rounded","buttonProps"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"class",4,"ngIf"],[1,"p-panel-footer"]],template:function(o,i){if(o&1){let r=L();ie(Dv),d(0,"div",2),b(1,e1,7,10,"div",3),d(2,"div",4),M("@panelContent.done",function(s){return C(r),w(i.onToggleDone(s))}),d(3,"div",5,0),Z(5),b(6,t1,1,0,"ng-container",6),u(),b(7,i1,3,1,"div",7),u()()}o&2&&(P(i.styleClass),c("ngClass",Rt(14,Av,i.toggleable,!i.collapsed&&i.toggleable))("ngStyle",i.style),_("id",i.id)("data-pc-name","panel"),p(),c("ngIf",i.showHeader),p(),c("id",i.id+"_content")("@panelContent",i.collapsed?U(19,Mv,U(17,Ov,i.animating?i.transitionOptions:"0ms")):U(23,Fv,U(21,Bv,i.animating?i.transitionOptions:"0ms"))),_("aria-labelledby",i.id+"_header")("aria-hidden",i.collapsed)("tabindex",i.collapsed?"-1":void 0),p(4),c("ngTemplateOutlet",i.contentTemplate||i._contentTemplate),p(),c("ngIf",i.footerFacet||i.footerTemplate||i._footerTemplate))},dependencies:[F,ge,Oe,we,Ve,Ln,Fn,Bt,ki,V],encapsulation:2,data:{animation:[yt("panelContent",[Ke("hidden",Fe({height:"0"})),Ke("void",Fe({height:"{{height}}"}),{params:{height:"0"}}),Ke("visible",Fe({height:"*"})),Le("visible <=> hidden",[Be("{{transitionParams}}")]),Le("void => hidden",Be("{{transitionParams}}")),Le("void => visible",Be("{{transitionParams}}"))])]},changeDetection:0})}return e})(),Jc=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=Y({type:e});static \u0275inj=K({imports:[a1,V,V]})}return e})();function s1(e,n){e&1&&(d(0,"span",7),v(1,"Privacy Policy"),u())}function l1(e,n){e&1&&(d(0,"span",7),h(1,"i",8),v(2," Log Data"),u())}function c1(e,n){e&1&&(d(0,"span",7),h(1,"i",9),v(2," Cookies"),u())}function d1(e,n){e&1&&(d(0,"span",7),h(1,"i",9),v(2," Do Not Track"),u())}var Kn=class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=I({type:e,selectors:[["app-privacy-policy"]],decls:37,vars:0,consts:[[1,"bgSand","w-full","sm:animate-fade-in","pt-10"],[1,"container","mx-auto","p-5","text-sm"],[1,"mb-5"],["pTemplate","header",1,"border-4"],[1,"p-5","list-disc"],[1,"container","mx-auto","p-5","mt-2","text-sm"],[1,"container","mx-auto","p-5","mt-2","text-sm","pb-20"],[1,"text-lg","font-bold","text-stone"],[1,"pi","pi-database"],[1,"pi","pi-user"]],template:function(t,o){t&1&&(d(0,"div",0)(1,"div",1)(2,"p-fieldset",2),b(3,s1,2,0,"ng-template",3),d(4,"ul",4)(5,"li"),v(6," arucare built the arucare app as a Free app. This SERVICE is provided by arucare at no cost and is intended for use as is. "),u(),h(7,"p-divider"),d(8,"li"),v(9," This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service. "),u(),h(10,"p-divider"),d(11,"li"),v(12," If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy. "),u(),h(13,"p-divider"),d(14,"li"),v(15," The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at arucare unless otherwise defined in this Privacy Policy "),u()()()(),d(16,"div",5)(17,"p-fieldset",2),b(18,l1,3,0,"ng-template",3),d(19,"ul",4)(20,"li"),v(21," We want to inform you that whenever you use our Service, in a case of an error in the app we collect data and information (through third party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (\u201CIP\u201D) address, device name, operating system version, the configuration of the app when utilizing our Service, the time and date of your use of the Service, and other statistics. "),u()()()(),d(22,"div",5)(23,"p-fieldset",2),b(24,c1,3,0,"ng-template",3),d(25,"ul",4)(26,"li"),v(27," Cookies are files with small amount of data that is commonly used an anonymous unique identifier. These are sent to your browser from the website that you visit and are stored on your device's internal memory. "),h(28,"br")(29,"br"),v(30," This Service does not use these \u201Ccookies\u201D explicitly. However, the app may use third party code and libraries that use \u201Ccookies\u201D to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service. "),u()()()(),d(31,"div",6)(32,"p-fieldset",2),b(33,d1,3,0,"ng-template",3),d(34,"ul",4)(35,"li"),v(36," We do not use any tracking technologies or cookies that follow your online activity on other websites. You can turn off your browser's Do Not Track setting at any time. "),u()()()()())},dependencies:[Jc,Ie,F,eo,Wt,jn,Ra],encapsulation:2})};var ed=["content"],u1=["container"],p1=["xBar"],m1=["yBar"],f1=["*"];function h1(e,n){e&1&&Z(0)}function g1(e,n){e&1&&ae(0)}var b1=({dt:e})=>`
.p-scrollpanel-content-container {
    overflow: hidden;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
    float: left;
}

.p-scrollpanel-content {
    height: calc(100% + calc(2 * ${e("scrollpanel.bar.size")}));
    width: calc(100% + calc(2 * ${e("scrollpanel.bar.size")}));
    padding-inline: 0 calc(2 * ${e("scrollpanel.bar.size")});
    padding-block: 0 calc(2 * ${e("scrollpanel.bar.size")});
    position: relative;
    overflow: auto;
    box-sizing: border-box;
    scrollbar-width: none;
}

.p-scrollpanel-content::-webkit-scrollbar {
    display: none;
}

.p-scrollpanel-bar {
    position: relative;
    border-radius: ${e("scrollpanel.bar.border.radius")};
    z-index: 2;
    cursor: pointer;
    opacity: 0;
    outline-color: transparent;
    transition: outline-color ${e("scrollpanel.transition.duration")};
    background: ${e("scrollpanel.bar.background")};
    border: 0 none;
    transition: outline-color ${e("scrollpanel.transition.duration")}, opacity ${e("scrollpanel.transition.duration")};
}

.p-scrollpanel-bar:focus-visible {
    box-shadow: ${e("scrollpanel.bar.focus.ring.shadow")};
    outline: ${e("scrollpanel.barfocus.ring.width")} ${e("scrollpanel.bar.focus.ring.style")} ${e("scrollpanel.bar.focus.ring.color")};
    outline-offset: ${e("scrollpanel.barfocus.ring.offset")};
}

.p-scrollpanel-bar-y {
    width: ${e("scrollpanel.bar.size")};
    top: 0;
}

.p-scrollpanel-bar-x {
    height: ${e("scrollpanel.bar.size")};
    bottom: 0;
}

.p-scrollpanel-hidden {
    visibility: hidden;
}

.p-scrollpanel:hover .p-scrollpanel-bar,
.p-scrollpanel:active .p-scrollpanel-bar {
    opacity: 1;
}

.p-scrollpanel-grabbed {
    user-select: none;
}
`,v1={root:"p-scrollpanel p-component",contentContainer:"p-scrollpanel-content-container",content:"p-scrollpanel-content",barX:"p-scrollpanel-bar p-scrollpanel-bar-x",barY:"p-scrollpanel-bar p-scrollpanel-bar-y"},td=(()=>{class e extends X{name="scrollpanel";theme=b1;classes=v1;static \u0275fac=(()=>{let t;return function(i){return(t||(t=k(e)))(i||e)}})();static \u0275prov=A({token:e,factory:e.\u0275fac})}return e})();var $a=(()=>{class e extends H{style;styleClass;step=5;containerViewChild;contentViewChild;xBarViewChild;yBarViewChild;contentTemplate;templates;_contentTemplate;scrollYRatio;scrollXRatio;timeoutFrame=t=>setTimeout(t,0);initialized=!1;lastPageY;lastPageX;isXBarClicked=!1;isYBarClicked=!1;lastScrollLeft=0;lastScrollTop=0;orientation="vertical";timer;contentId;windowResizeListener;contentScrollListener;mouseEnterListener;xBarMouseDownListener;yBarMouseDownListener;documentMouseMoveListener;documentMouseUpListener;_componentStyle=y(td);zone=y(Me);ngOnInit(){super.ngOnInit(),this.contentId=ce("pn_id_")+"_content"}ngAfterViewInit(){super.ngAfterViewInit(),re(this.platformId)&&this.zone.runOutsideAngular(()=>{this.moveBar(),this.moveBar=this.moveBar.bind(this),this.onXBarMouseDown=this.onXBarMouseDown.bind(this),this.onYBarMouseDown=this.onYBarMouseDown.bind(this),this.onDocumentMouseMove=this.onDocumentMouseMove.bind(this),this.onDocumentMouseUp=this.onDocumentMouseUp.bind(this),this.windowResizeListener=this.renderer.listen(window,"resize",this.moveBar),this.contentScrollListener=this.renderer.listen(this.contentViewChild.nativeElement,"scroll",this.moveBar),this.mouseEnterListener=this.renderer.listen(this.contentViewChild.nativeElement,"mouseenter",this.moveBar),this.xBarMouseDownListener=this.renderer.listen(this.xBarViewChild.nativeElement,"mousedown",this.onXBarMouseDown),this.yBarMouseDownListener=this.renderer.listen(this.yBarViewChild.nativeElement,"mousedown",this.onYBarMouseDown),this.calculateContainerHeight(),this.initialized=!0})}ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}calculateContainerHeight(){let t=this.containerViewChild.nativeElement,o=this.contentViewChild.nativeElement,i=this.xBarViewChild.nativeElement,r=this.document.defaultView,a=r.getComputedStyle(t),s=r.getComputedStyle(i),l=ni(t)-parseInt(s.height,10);a["max-height"]!="none"&&l==0&&(o.offsetHeight+parseInt(s.height,10)>parseInt(a["max-height"],10)?t.style.height=a["max-height"]:t.style.height=o.offsetHeight+parseFloat(a.paddingTop)+parseFloat(a.paddingBottom)+parseFloat(a.borderTopWidth)+parseFloat(a.borderBottomWidth)+"px")}moveBar(){let t=this.containerViewChild.nativeElement,o=this.contentViewChild.nativeElement,i=this.xBarViewChild.nativeElement,r=o.scrollWidth,a=o.clientWidth,s=(t.clientHeight-i.clientHeight)*-1;this.scrollXRatio=a/r;let l=this.yBarViewChild.nativeElement,f=o.scrollHeight,g=o.clientHeight,x=(t.clientWidth-l.clientWidth)*-1;this.scrollYRatio=g/f,this.requestAnimationFrame(()=>{if(this.scrollXRatio>=1)i.setAttribute("data-p-scrollpanel-hidden","true"),Pe(i,"p-scrollpanel-hidden");else{i.setAttribute("data-p-scrollpanel-hidden","false"),ke(i,"p-scrollpanel-hidden");let S=Math.max(this.scrollXRatio*100,10),D=Math.abs(o.scrollLeft*(100-S)/(r-a));i.style.cssText="width:"+S+"%; inset-inline-start:"+D+"%;bottom:"+s+"px;"}if(this.scrollYRatio>=1)l.setAttribute("data-p-scrollpanel-hidden","true"),Pe(l,"p-scrollpanel-hidden");else{l.setAttribute("data-p-scrollpanel-hidden","false"),ke(l,"p-scrollpanel-hidden");let S=Math.max(this.scrollYRatio*100,10),D=o.scrollTop*(100-S)/(f-g);l.style.cssText="height:"+S+"%; top: calc("+D+"% - "+i.clientHeight+"px); inset-inline-end:"+x+"px;"}}),this.cd.markForCheck()}onScroll(t){this.lastScrollLeft!==t.target.scrollLeft?(this.lastScrollLeft=t.target.scrollLeft,this.orientation="horizontal"):this.lastScrollTop!==t.target.scrollTop&&(this.lastScrollTop=t.target.scrollTop,this.orientation="vertical"),this.moveBar()}onKeyDown(t){if(this.orientation==="vertical")switch(t.code){case"ArrowDown":{this.setTimer("scrollTop",this.step),t.preventDefault();break}case"ArrowUp":{this.setTimer("scrollTop",this.step*-1),t.preventDefault();break}case"ArrowLeft":case"ArrowRight":{t.preventDefault();break}default:break}else if(this.orientation==="horizontal")switch(t.code){case"ArrowRight":{this.setTimer("scrollLeft",this.step),t.preventDefault();break}case"ArrowLeft":{this.setTimer("scrollLeft",this.step*-1),t.preventDefault();break}case"ArrowDown":case"ArrowUp":{t.preventDefault();break}default:break}}onKeyUp(){this.clearTimer()}repeat(t,o){this.contentViewChild.nativeElement[t]+=o,this.moveBar()}setTimer(t,o){this.clearTimer(),this.timer=setTimeout(()=>{this.repeat(t,o)},40)}clearTimer(){this.timer&&clearTimeout(this.timer)}bindDocumentMouseListeners(){this.documentMouseMoveListener||(this.documentMouseMoveListener=t=>{this.onDocumentMouseMove(t)},this.document.addEventListener("mousemove",this.documentMouseMoveListener)),this.documentMouseUpListener||(this.documentMouseUpListener=t=>{this.onDocumentMouseUp(t)},this.document.addEventListener("mouseup",this.documentMouseUpListener))}unbindDocumentMouseListeners(){this.documentMouseMoveListener&&(this.document.removeEventListener("mousemove",this.documentMouseMoveListener),this.documentMouseMoveListener=null),this.documentMouseUpListener&&(document.removeEventListener("mouseup",this.documentMouseUpListener),this.documentMouseUpListener=null)}onYBarMouseDown(t){this.isYBarClicked=!0,this.yBarViewChild.nativeElement.focus(),this.lastPageY=t.pageY,this.yBarViewChild.nativeElement.setAttribute("data-p-scrollpanel-grabbed","true"),Pe(this.yBarViewChild.nativeElement,"p-scrollpanel-grabbed"),this.document.body.setAttribute("data-p-scrollpanel-grabbed","true"),Pe(this.document.body,"p-scrollpanel-grabbed"),this.bindDocumentMouseListeners(),t.preventDefault()}onXBarMouseDown(t){this.isXBarClicked=!0,this.xBarViewChild.nativeElement.focus(),this.lastPageX=t.pageX,this.xBarViewChild.nativeElement.setAttribute("data-p-scrollpanel-grabbed","false"),Pe(this.xBarViewChild.nativeElement,"p-scrollpanel-grabbed"),this.document.body.setAttribute("data-p-scrollpanel-grabbed","false"),Pe(this.document.body,"p-scrollpanel-grabbed"),this.bindDocumentMouseListeners(),t.preventDefault()}onDocumentMouseMove(t){this.isXBarClicked?this.onMouseMoveForXBar(t):this.isYBarClicked?this.onMouseMoveForYBar(t):(this.onMouseMoveForXBar(t),this.onMouseMoveForYBar(t))}onMouseMoveForXBar(t){let o=t.pageX-this.lastPageX;this.lastPageX=t.pageX,this.requestAnimationFrame(()=>{this.contentViewChild.nativeElement.scrollLeft+=o/this.scrollXRatio})}onMouseMoveForYBar(t){let o=t.pageY-this.lastPageY;this.lastPageY=t.pageY,this.requestAnimationFrame(()=>{this.contentViewChild.nativeElement.scrollTop+=o/this.scrollYRatio})}scrollTop(t){let o=this.contentViewChild.nativeElement.scrollHeight-this.contentViewChild.nativeElement.clientHeight;t=t>o?o:t>0?t:0,this.contentViewChild.nativeElement.scrollTop=t}onFocus(t){this.xBarViewChild.nativeElement.isSameNode(t.target)?this.orientation="horizontal":this.yBarViewChild.nativeElement.isSameNode(t.target)&&(this.orientation="vertical")}onBlur(){this.orientation==="horizontal"&&(this.orientation="vertical")}onDocumentMouseUp(t){this.yBarViewChild.nativeElement.setAttribute("data-p-scrollpanel-grabbed","false"),ke(this.yBarViewChild.nativeElement,"p-scrollpanel-grabbed"),this.xBarViewChild.nativeElement.setAttribute("data-p-scrollpanel-grabbed","false"),ke(this.xBarViewChild.nativeElement,"p-scrollpanel-grabbed"),this.document.body.setAttribute("data-p-scrollpanel-grabbed","false"),ke(this.document.body,"p-scrollpanel-grabbed"),this.unbindDocumentMouseListeners(),this.isXBarClicked=!1,this.isYBarClicked=!1}requestAnimationFrame(t){(window.requestAnimationFrame||this.timeoutFrame)(t)}unbindListeners(){this.windowResizeListener&&(this.windowResizeListener(),this.windowResizeListener=null),this.contentScrollListener&&(this.contentScrollListener(),this.contentScrollListener=null),this.mouseEnterListener&&(this.mouseEnterListener(),this.mouseEnterListener=null),this.xBarMouseDownListener&&(this.xBarMouseDownListener(),this.xBarMouseDownListener=null),this.yBarMouseDownListener&&(this.yBarMouseDownListener(),this.yBarMouseDownListener=null)}ngOnDestroy(){this.initialized&&this.unbindListeners()}refresh(){this.moveBar()}static \u0275fac=(()=>{let t;return function(i){return(t||(t=k(e)))(i||e)}})();static \u0275cmp=I({type:e,selectors:[["p-scroll-panel"],["p-scrollPanel"],["p-scrollpanel"]],contentQueries:function(o,i,r){if(o&1&&(B(r,ed,4),B(r,Ie,4)),o&2){let a;E(a=R())&&(i.contentTemplate=a.first),E(a=R())&&(i.templates=a)}},viewQuery:function(o,i){if(o&1&&(be(u1,5),be(ed,5),be(p1,5),be(m1,5)),o&2){let r;E(r=R())&&(i.containerViewChild=r.first),E(r=R())&&(i.contentViewChild=r.first),E(r=R())&&(i.xBarViewChild=r.first),E(r=R())&&(i.yBarViewChild=r.first)}},inputs:{style:"style",styleClass:"styleClass",step:[2,"step","step",me]},features:[J([td]),O],ngContentSelectors:f1,decls:11,vars:17,consts:[["container",""],["content",""],["xBar",""],["yBar",""],[3,"ngClass","ngStyle"],[1,"p-scrollpanel-content-container"],[1,"p-scrollpanel-content",3,"mouseenter","scroll"],[4,"ngTemplateOutlet"],["tabindex","0","role","scrollbar",1,"p-scrollpanel-bar","p-scrollpanel-bar-x",3,"mousedown","keydown","keyup","focus","blur"],["tabindex","0","role","scrollbar",1,"p-scrollpanel-bar","p-scrollpanel-bar-y",3,"mousedown","keydown","keyup","focus"]],template:function(o,i){if(o&1){let r=L();ie(),d(0,"div",4,0)(2,"div",5)(3,"div",6,1),M("mouseenter",function(){return C(r),w(i.moveBar())})("scroll",function(s){return C(r),w(i.onScroll(s))}),b(5,h1,1,0)(6,g1,1,0,"ng-container",7),u()(),d(7,"div",8,2),M("mousedown",function(s){return C(r),w(i.onXBarMouseDown(s))})("keydown",function(s){return C(r),w(i.onKeyDown(s))})("keyup",function(){return C(r),w(i.onKeyUp())})("focus",function(s){return C(r),w(i.onFocus(s))})("blur",function(){return C(r),w(i.onBlur())}),u(),d(9,"div",9,3),M("mousedown",function(s){return C(r),w(i.onYBarMouseDown(s))})("keydown",function(s){return C(r),w(i.onKeyDown(s))})("keyup",function(){return C(r),w(i.onKeyUp())})("focus",function(s){return C(r),w(i.onFocus(s))}),u()()}o&2&&(P(i.styleClass),c("ngClass","p-scrollpanel p-component")("ngStyle",i.style),_("data-pc-name","scrollpanel"),p(2),_("data-pc-section","wrapper"),p(),_("data-pc-section","content"),p(2),et(!i.contentTemplate&&!i._contentTemplate?5:-1),p(),c("ngTemplateOutlet",i.contentTemplate||i._contentTemplate),p(),_("aria-orientation","horizontal")("aria-valuenow",i.lastScrollLeft)("data-pc-section","barx")("aria-controls",i.contentId),p(2),_("aria-orientation","vertical")("aria-valuenow",i.lastScrollTop)("data-pc-section","bary")("aria-controls",i.contentId))},dependencies:[F,ge,we,Ve,V],encapsulation:2,changeDetection:0})}return e})(),od=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=Y({type:e});static \u0275inj=K({imports:[$a,V,V]})}return e})();var _1=({dt:e})=>`
.p-tooltip {
    position: absolute;
    display: none;
    max-width: ${e("tooltip.max.width")};
}

.p-tooltip-right,
.p-tooltip-left {
    padding: 0 ${e("tooltip.gutter")};
}

.p-tooltip-top,
.p-tooltip-bottom {
    padding: ${e("tooltip.gutter")} 0;
}

.p-tooltip-text {
    white-space: pre-line;
    word-break: break-word;
    background: ${e("tooltip.background")};
    color: ${e("tooltip.color")};
    padding: ${e("tooltip.padding")};
    box-shadow: ${e("tooltip.shadow")};
    border-radius: ${e("tooltip.border.radius")};
}

.p-tooltip-arrow {
    position: absolute;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
    scale: 2;
}

.p-tooltip-right .p-tooltip-arrow {
    top: 50%;
    left: 0;
    margin-top: calc(-1 * ${e("tooltip.gutter")});
    border-width: ${e("tooltip.gutter")} ${e("tooltip.gutter")} ${e("tooltip.gutter")} 0;
    border-right-color: ${e("tooltip.background")};
}

.p-tooltip-left .p-tooltip-arrow {
    top: 50%;
    right: 0;
    margin-top: calc(-1 * ${e("tooltip.gutter")});
    border-width: ${e("tooltip.gutter")} 0 ${e("tooltip.gutter")} ${e("tooltip.gutter")};
    border-left-color: ${e("tooltip.background")};
}

.p-tooltip-top .p-tooltip-arrow {
    bottom: 0;
    left: 50%;
    margin-left: calc(-1 * ${e("tooltip.gutter")});
    border-width: ${e("tooltip.gutter")} ${e("tooltip.gutter")} 0 ${e("tooltip.gutter")};
    border-top-color: ${e("tooltip.background")};
    border-bottom-color: ${e("tooltip.background")};
}

.p-tooltip-bottom .p-tooltip-arrow {
    top: 0;
    left: 50%;
    margin-left: calc(-1 * ${e("tooltip.gutter")});
    border-width: 0 ${e("tooltip.gutter")} ${e("tooltip.gutter")} ${e("tooltip.gutter")};
    border-top-color: ${e("tooltip.background")};
    border-bottom-color: ${e("tooltip.background")};
}
`,x1={root:"p-tooltip p-component",arrow:"p-tooltip-arrow",text:"p-tooltip-text"},id=(()=>{class e extends X{name="tooltip";theme=_1;classes=x1;static \u0275fac=(()=>{let t;return function(i){return(t||(t=k(e)))(i||e)}})();static \u0275prov=A({token:e,factory:e.\u0275fac})}return e})();var Aa=(()=>{class e extends H{zone;viewContainer;tooltipPosition;tooltipEvent="hover";appendTo;positionStyle;tooltipStyleClass;tooltipZIndex;escape=!0;showDelay;hideDelay;life;positionTop;positionLeft;autoHide=!0;fitContent=!0;hideOnEscape=!0;content;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this.deactivate()}tooltipOptions;_tooltipOptions={tooltipLabel:null,tooltipPosition:"right",tooltipEvent:"hover",appendTo:"body",positionStyle:null,tooltipStyleClass:null,tooltipZIndex:"auto",escape:!0,disabled:null,showDelay:null,hideDelay:null,positionTop:null,positionLeft:null,life:null,autoHide:!0,hideOnEscape:!0,id:ce("pn_id_")+"_tooltip"};_disabled;container;styleClass;tooltipText;showTimeout;hideTimeout;active;mouseEnterListener;mouseLeaveListener;containerMouseleaveListener;clickListener;focusListener;blurListener;documentEscapeListener;scrollHandler;resizeListener;_componentStyle=y(id);interactionInProgress=!1;constructor(t,o){super(),this.zone=t,this.viewContainer=o}ngAfterViewInit(){super.ngAfterViewInit(),re(this.platformId)&&this.zone.runOutsideAngular(()=>{let t=this.getOption("tooltipEvent");if((t==="hover"||t==="both")&&(this.mouseEnterListener=this.onMouseEnter.bind(this),this.mouseLeaveListener=this.onMouseLeave.bind(this),this.clickListener=this.onInputClick.bind(this),this.el.nativeElement.addEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.addEventListener("click",this.clickListener),this.el.nativeElement.addEventListener("mouseleave",this.mouseLeaveListener)),t==="focus"||t==="both"){this.focusListener=this.onFocus.bind(this),this.blurListener=this.onBlur.bind(this);let o=this.el.nativeElement.querySelector(".p-component");o||(o=this.getTarget(this.el.nativeElement)),o.addEventListener("focus",this.focusListener),o.addEventListener("blur",this.blurListener)}})}ngOnChanges(t){super.ngOnChanges(t),t.tooltipPosition&&this.setOption({tooltipPosition:t.tooltipPosition.currentValue}),t.tooltipEvent&&this.setOption({tooltipEvent:t.tooltipEvent.currentValue}),t.appendTo&&this.setOption({appendTo:t.appendTo.currentValue}),t.positionStyle&&this.setOption({positionStyle:t.positionStyle.currentValue}),t.tooltipStyleClass&&this.setOption({tooltipStyleClass:t.tooltipStyleClass.currentValue}),t.tooltipZIndex&&this.setOption({tooltipZIndex:t.tooltipZIndex.currentValue}),t.escape&&this.setOption({escape:t.escape.currentValue}),t.showDelay&&this.setOption({showDelay:t.showDelay.currentValue}),t.hideDelay&&this.setOption({hideDelay:t.hideDelay.currentValue}),t.life&&this.setOption({life:t.life.currentValue}),t.positionTop&&this.setOption({positionTop:t.positionTop.currentValue}),t.positionLeft&&this.setOption({positionLeft:t.positionLeft.currentValue}),t.disabled&&this.setOption({disabled:t.disabled.currentValue}),t.content&&(this.setOption({tooltipLabel:t.content.currentValue}),this.active&&(t.content.currentValue?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide())),t.autoHide&&this.setOption({autoHide:t.autoHide.currentValue}),t.id&&this.setOption({id:t.id.currentValue}),t.tooltipOptions&&(this._tooltipOptions=T(T({},this._tooltipOptions),t.tooltipOptions.currentValue),this.deactivate(),this.active&&(this.getOption("tooltipLabel")?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide()))}isAutoHide(){return this.getOption("autoHide")}onMouseEnter(t){!this.container&&!this.showTimeout&&this.activate()}onMouseLeave(t){this.isAutoHide()?this.deactivate():!(no(t.relatedTarget,"p-tooltip")||no(t.relatedTarget,"p-tooltip-text")||no(t.relatedTarget,"p-tooltip-arrow"))&&this.deactivate()}onFocus(t){this.activate()}onBlur(t){this.deactivate()}onInputClick(t){this.deactivate()}activate(){if(!this.interactionInProgress){if(this.active=!0,this.clearHideTimeout(),this.getOption("showDelay")?this.showTimeout=setTimeout(()=>{this.show()},this.getOption("showDelay")):this.show(),this.getOption("life")){let t=this.getOption("showDelay")?this.getOption("life")+this.getOption("showDelay"):this.getOption("life");this.hideTimeout=setTimeout(()=>{this.hide()},t)}this.getOption("hideOnEscape")&&(this.documentEscapeListener=this.renderer.listen("document","keydown.escape",()=>{this.deactivate(),this.documentEscapeListener()})),this.interactionInProgress=!0}}deactivate(){this.interactionInProgress=!1,this.active=!1,this.clearShowTimeout(),this.getOption("hideDelay")?(this.clearHideTimeout(),this.hideTimeout=setTimeout(()=>{this.hide()},this.getOption("hideDelay"))):this.hide(),this.documentEscapeListener&&this.documentEscapeListener()}create(){this.container&&(this.clearHideTimeout(),this.remove()),this.container=document.createElement("div"),this.container.setAttribute("id",this.getOption("id")),this.container.setAttribute("role","tooltip");let t=document.createElement("div");t.className="p-tooltip-arrow",this.container.appendChild(t),this.tooltipText=document.createElement("div"),this.tooltipText.className="p-tooltip-text",this.updateText(),this.getOption("positionStyle")&&(this.container.style.position=this.getOption("positionStyle")),this.container.appendChild(this.tooltipText),this.getOption("appendTo")==="body"?document.body.appendChild(this.container):this.getOption("appendTo")==="target"?Rr(this.container,this.el.nativeElement):Rr(this.getOption("appendTo"),this.container),this.container.style.display="none",this.fitContent&&(this.container.style.width="fit-content"),this.isAutoHide()?this.container.style.pointerEvents="none":(this.container.style.pointerEvents="unset",this.bindContainerMouseleaveListener())}bindContainerMouseleaveListener(){if(!this.containerMouseleaveListener){let t=this.container??this.container.nativeElement;this.containerMouseleaveListener=this.renderer.listen(t,"mouseleave",o=>{this.deactivate()})}}unbindContainerMouseleaveListener(){this.containerMouseleaveListener&&(this.bindContainerMouseleaveListener(),this.containerMouseleaveListener=null)}show(){if(!this.getOption("tooltipLabel")||this.getOption("disabled"))return;this.create(),this.el.nativeElement.closest("p-dialog")?setTimeout(()=>{this.container&&(this.container.style.display="inline-block"),this.container&&this.align()},100):(this.container.style.display="inline-block",this.align()),Xs(this.container,250),this.getOption("tooltipZIndex")==="auto"?po.set("tooltip",this.container,this.config.zIndex.tooltip):this.container.style.zIndex=this.getOption("tooltipZIndex"),this.bindDocumentResizeListener(),this.bindScrollListener()}hide(){this.getOption("tooltipZIndex")==="auto"&&po.clear(this.container),this.remove()}updateText(){let t=this.getOption("tooltipLabel");if(t instanceof qi){let o=this.viewContainer.createEmbeddedView(t);o.detectChanges(),o.rootNodes.forEach(i=>this.tooltipText.appendChild(i))}else this.getOption("escape")?(this.tooltipText.innerHTML="",this.tooltipText.appendChild(document.createTextNode(t))):this.tooltipText.innerHTML=t}align(){let t=this.getOption("tooltipPosition"),o={top:[this.alignTop,this.alignBottom,this.alignRight,this.alignLeft],bottom:[this.alignBottom,this.alignTop,this.alignRight,this.alignLeft],left:[this.alignLeft,this.alignRight,this.alignTop,this.alignBottom],right:[this.alignRight,this.alignLeft,this.alignTop,this.alignBottom]};for(let[i,r]of o[t].entries())if(i===0)r.call(this);else if(this.isOutOfBounds())r.call(this);else break}getHostOffset(){if(this.getOption("appendTo")==="body"||this.getOption("appendTo")==="target"){let t=this.el.nativeElement.getBoundingClientRect(),o=t.left+Qs(),i=t.top+Ks();return{left:o,top:i}}else return{left:0,top:0}}get activeElement(){return this.el.nativeElement.nodeName.includes("P-")?ye(this.el.nativeElement,".p-component"):this.el.nativeElement}alignRight(){this.preAlign("right");let t=this.activeElement,o=mt(t),i=(At(t)-At(this.container))/2;this.alignTooltip(o,i)}alignLeft(){this.preAlign("left");let t=mt(this.container),o=(At(this.el.nativeElement)-At(this.container))/2;this.alignTooltip(-t,o)}alignTop(){this.preAlign("top");let t=(mt(this.el.nativeElement)-mt(this.container))/2,o=At(this.container);this.alignTooltip(t,-o)}alignBottom(){this.preAlign("bottom");let t=(mt(this.el.nativeElement)-mt(this.container))/2,o=At(this.el.nativeElement);this.alignTooltip(t,o)}alignTooltip(t,o){let i=this.getHostOffset(),r=i.left+t,a=i.top+o;this.container.style.left=r+this.getOption("positionLeft")+"px",this.container.style.top=a+this.getOption("positionTop")+"px"}setOption(t){this._tooltipOptions=T(T({},this._tooltipOptions),t)}getOption(t){return this._tooltipOptions[t]}getTarget(t){return no(t,"p-inputwrapper")?ye(t,"input"):t}preAlign(t){this.container.style.left="-999px",this.container.style.top="-999px";let o="p-tooltip p-component p-tooltip-"+t;this.container.className=this.getOption("tooltipStyleClass")?o+" "+this.getOption("tooltipStyleClass"):o}isOutOfBounds(){let t=this.container.getBoundingClientRect(),o=t.top,i=t.left,r=mt(this.container),a=At(this.container),s=qs();return i+r>s.width||i<0||o<0||o+a>s.height}onWindowResize(t){this.hide()}bindDocumentResizeListener(){this.zone.runOutsideAngular(()=>{this.resizeListener=this.onWindowResize.bind(this),window.addEventListener("resize",this.resizeListener)})}unbindDocumentResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new Bn(this.el.nativeElement,()=>{this.container&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unbindEvents(){let t=this.getOption("tooltipEvent");if((t==="hover"||t==="both")&&(this.el.nativeElement.removeEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.removeEventListener("mouseleave",this.mouseLeaveListener),this.el.nativeElement.removeEventListener("click",this.clickListener)),t==="focus"||t==="both"){let o=this.el.nativeElement.querySelector(".p-component");o||(o=this.getTarget(this.el.nativeElement)),o.removeEventListener("focus",this.focusListener),o.removeEventListener("blur",this.blurListener)}this.unbindDocumentResizeListener()}remove(){this.container&&this.container.parentElement&&(this.getOption("appendTo")==="body"?document.body.removeChild(this.container):this.getOption("appendTo")==="target"?this.el.nativeElement.removeChild(this.container):il(this.getOption("appendTo"),this.container)),this.unbindDocumentResizeListener(),this.unbindScrollListener(),this.unbindContainerMouseleaveListener(),this.clearTimeouts(),this.container=null,this.scrollHandler=null}clearShowTimeout(){this.showTimeout&&(clearTimeout(this.showTimeout),this.showTimeout=null)}clearHideTimeout(){this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=null)}clearTimeouts(){this.clearShowTimeout(),this.clearHideTimeout()}ngOnDestroy(){this.unbindEvents(),super.ngOnDestroy(),this.container&&po.clear(this.container),this.remove(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.documentEscapeListener&&this.documentEscapeListener()}static \u0275fac=function(o){return new(o||e)(Q(Me),Q(Yi))};static \u0275dir=$e({type:e,selectors:[["","pTooltip",""]],inputs:{tooltipPosition:"tooltipPosition",tooltipEvent:"tooltipEvent",appendTo:"appendTo",positionStyle:"positionStyle",tooltipStyleClass:"tooltipStyleClass",tooltipZIndex:"tooltipZIndex",escape:[2,"escape","escape",$],showDelay:[2,"showDelay","showDelay",me],hideDelay:[2,"hideDelay","hideDelay",me],life:[2,"life","life",me],positionTop:[2,"positionTop","positionTop",me],positionLeft:[2,"positionLeft","positionLeft",me],autoHide:[2,"autoHide","autoHide",$],fitContent:[2,"fitContent","fitContent",$],hideOnEscape:[2,"hideOnEscape","hideOnEscape",$],content:[0,"pTooltip","content"],disabled:[0,"tooltipDisabled","disabled"],tooltipOptions:"tooltipOptions"},features:[J([id]),O,De]})}return e})(),Yn=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=Y({type:e});static \u0275inj=K({})}return e})();var w1=["list"],I1=()=>({"p-panelmenu-submenu":!0}),rd=e=>({"p-disabled":e}),ad=()=>({exact:!1}),sd=e=>({$implicit:e});function S1(e,n){e&1&&h(0,"li",7)}function k1(e,n){if(e&1&&h(0,"AngleDownIcon",21),e&2){let t=m(6).$implicit,o=m();c("styleClass","p-panelmenu-submenu-icon")("ngStyle",o.getItemProp(t,"iconStyle"))}}function T1(e,n){if(e&1&&h(0,"AngleRightIcon",21),e&2){let t=m(6).$implicit,o=m();c("styleClass","p-panelmenu-submenu-icon")("ngStyle",o.getItemProp(t,"iconStyle"))}}function E1(e,n){if(e&1&&(te(0),b(1,k1,1,2,"AngleDownIcon",20)(2,T1,1,2,"AngleRightIcon",20),oe()),e&2){let t=m(5).$implicit,o=m();p(),c("ngIf",o.isItemActive(t)),p(),c("ngIf",!o.isItemActive(t))}}function R1(e,n){}function D1(e,n){e&1&&b(0,R1,0,0,"ng-template")}function $1(e,n){if(e&1&&(te(0),b(1,E1,3,2,"ng-container",10)(2,D1,1,0,null,19),oe()),e&2){let t=m(5);p(),c("ngIf",!t.panelMenu.submenuIconTemplate&&!t.panelMenu._submenuIconTemplate),p(),c("ngTemplateOutlet",t.panelMenu.submenuIconTemplate||t.panelMenu._submenuIconTemplate)}}function A1(e,n){if(e&1&&h(0,"span",22),e&2){let t=m(4).$implicit,o=m();c("ngClass",t.icon)("ngStyle",o.getItemProp(t,"iconStyle"))}}function O1(e,n){if(e&1&&(d(0,"span",23),v(1),u()),e&2){let t=m(4).$implicit,o=m();p(),de(o.getItemProp(t,"label"))}}function M1(e,n){if(e&1&&h(0,"span",24),e&2){let t=m(4).$implicit,o=m();c("innerHTML",o.getItemProp(t,"label"),Qo)}}function B1(e,n){if(e&1&&(d(0,"span",25),v(1),u()),e&2){let t=m(4).$implicit;c("ngClass",t.badgeStyleClass),p(),de(t.badge)}}function F1(e,n){if(e&1&&(d(0,"a",15),b(1,$1,3,2,"ng-container",10)(2,A1,1,2,"span",16)(3,O1,2,1,"span",17)(4,M1,1,1,"ng-template",null,1,he)(6,B1,2,2,"span",18),u()),e&2){let t=it(5),o=m(3).$implicit,i=m();c("ngClass",U(10,rd,i.getItemProp(o,"disabled")))("target",i.getItemProp(o,"target")),_("href",i.getItemProp(o,"url"),ut)("data-pc-section","action")("tabindex",i.parentExpanded?"0":"-1"),p(),c("ngIf",i.isItemGroup(o)),p(),c("ngIf",o.icon),p(),c("ngIf",(o.item==null?null:o.item.escape)!==!1)("ngIfElse",t),p(3),c("ngIf",o.badge)}}function L1(e,n){if(e&1&&h(0,"AngleDownIcon",21),e&2){let t=m(6).$implicit,o=m();c("styleClass","p-panelmenu-submenu-icon")("ngStyle",o.getItemProp(t,"iconStyle"))}}function P1(e,n){if(e&1&&h(0,"AngleRightIcon",21),e&2){let t=m(6).$implicit,o=m();c("styleClass","p-panelmenu-submenu-icon")("ngStyle",o.getItemProp(t,"iconStyle"))}}function N1(e,n){if(e&1&&(te(0),b(1,L1,1,2,"AngleDownIcon",20)(2,P1,1,2,"AngleRightIcon",20),oe()),e&2){let t=m(5).$implicit,o=m();p(),c("ngIf",o.isItemActive(t)),p(),c("ngIf",!o.isItemActive(t))}}function V1(e,n){}function H1(e,n){e&1&&b(0,V1,0,0,"ng-template")}function z1(e,n){if(e&1&&(te(0),b(1,N1,3,2,"ng-container",10)(2,H1,1,0,null,19),oe()),e&2){let t=m(5);p(),c("ngIf",!t.panelMenu.submenuIconTemplate&&!t.panelMenu._submenuIconTemplate),p(),c("ngTemplateOutlet",t.panelMenu.submenuIconTemplate&&t.panelMenu._submenuIconTemplate)}}function j1(e,n){if(e&1&&h(0,"span",22),e&2){let t=m(4).$implicit,o=m();c("ngClass",t.icon)("ngStyle",o.getItemProp(t,"iconStyle"))}}function U1(e,n){if(e&1&&(d(0,"span",23),v(1),u()),e&2){let t=m(4).$implicit,o=m();p(),de(o.getItemProp(t,"label"))}}function W1(e,n){if(e&1&&h(0,"span",24),e&2){let t=m(4).$implicit,o=m();c("innerHTML",o.getItemProp(t,"label"),Qo)}}function G1(e,n){if(e&1&&(d(0,"span",25),v(1),u()),e&2){let t=m(4).$implicit,o=m();c("ngClass",o.getItemProp(t,"badgeStyleClass")),p(),de(o.getItemProp(t,"badge"))}}function q1(e,n){if(e&1&&(d(0,"a",26),b(1,z1,3,2,"ng-container",10)(2,j1,1,2,"span",16)(3,U1,2,1,"span",17)(4,W1,1,1,"ng-template",null,2,he)(6,G1,2,2,"span",18),u()),e&2){let t=it(5),o=m(3).$implicit,i=m();c("routerLink",i.getItemProp(o,"routerLink"))("queryParams",i.getItemProp(o,"queryParams"))("routerLinkActive","p-panelmenu-item-link-active")("routerLinkActiveOptions",i.getItemProp(o,"routerLinkActiveOptions")||Qe(20,ad))("ngClass",U(21,rd,i.getItemProp(o,"disabled")))("target",i.getItemProp(o,"target"))("fragment",i.getItemProp(o,"fragment"))("queryParamsHandling",i.getItemProp(o,"queryParamsHandling"))("preserveFragment",i.getItemProp(o,"preserveFragment"))("skipLocationChange",i.getItemProp(o,"skipLocationChange"))("replaceUrl",i.getItemProp(o,"replaceUrl"))("state",i.getItemProp(o,"state")),_("title",i.getItemProp(o,"title"))("data-pc-section","action")("tabindex",i.parentExpanded?"0":"-1"),p(),c("ngIf",i.isItemGroup(o)),p(),c("ngIf",o.icon),p(),c("ngIf",i.getItemProp(o,"escape")!==!1)("ngIfElse",t),p(3),c("ngIf",o.badge)}}function Q1(e,n){if(e&1&&(te(0),b(1,F1,7,12,"a",13)(2,q1,7,23,"a",14),oe()),e&2){let t=m(2).$implicit,o=m();p(),c("ngIf",!o.getItemProp(t,"routerLink")),p(),c("ngIf",o.getItemProp(t,"routerLink"))}}function K1(e,n){}function Y1(e,n){e&1&&b(0,K1,0,0,"ng-template")}function Z1(e,n){if(e&1&&(te(0),b(1,Y1,1,0,null,27),oe()),e&2){let t=m(2).$implicit,o=m();p(),c("ngTemplateOutlet",o.itemTemplate)("ngTemplateOutletContext",U(2,sd,t.item))}}function X1(e,n){if(e&1){let t=L();d(0,"p-panelmenu-sub",28),M("itemToggle",function(i){C(t);let r=m(3);return w(r.onItemToggle(i))}),u()}if(e&2){let t=m(2).$implicit,o=m();c("id",o.getItemId(t)+"_list")("panelId",o.panelId)("items",t==null?null:t.items)("itemTemplate",o.itemTemplate)("transitionOptions",o.transitionOptions)("focusedItemId",o.focusedItemId)("activeItemPath",o.activeItemPath)("level",o.level+1)("parentExpanded",!!o.parentExpanded&&o.isItemExpanded(t))}}function J1(e,n){if(e&1){let t=L();d(0,"li",8)(1,"div",9),M("click",function(i){C(t);let r=m().$implicit,a=m();return w(a.onItemClick(i,r))}),b(2,Q1,3,2,"ng-container",10)(3,Z1,2,4,"ng-container",10),u(),d(4,"div",11),b(5,X1,1,9,"p-panelmenu-sub",12),u()()}if(e&2){let t=m(),o=t.$implicit,i=t.index,r=m();P(r.getItemProp(o,"styleClass")),Ce("p-hidden",o.visible===!1)("p-focus",r.isItemFocused(o)&&!r.isItemDisabled(o)),c("ngClass",r.getItemClass(o))("ngStyle",r.getItemProp(o,"style"))("pTooltip",r.getItemProp(o,"tooltip"))("tooltipOptions",r.getItemProp(o,"tooltipOptions")),_("id",r.getItemId(o))("aria-label",r.getItemProp(o,"label"))("aria-expanded",r.isItemGroup(o)?r.isItemActive(o):void 0)("aria-level",r.level+1)("aria-setsize",r.getAriaSetSize())("aria-posinset",r.getAriaPosInset(i))("data-p-disabled",r.isItemDisabled(o)),p(2),c("ngIf",!r.itemTemplate),p(),c("ngIf",r.itemTemplate),p(),c("@submenu",r.getAnimation(o)),p(),c("ngIf",r.isItemVisible(o)&&r.isItemGroup(o)&&r.isItemExpanded(o))}}function ey(e,n){if(e&1&&b(0,S1,1,0,"li",5)(1,J1,6,21,"li",6),e&2){let t=n.$implicit,o=m();c("ngIf",t.separator),p(),c("ngIf",!t.separator&&o.isItemVisible(t))}}var ty=["submenu"],oy=["submenuicon"],iy=["item"],ny=["container"],ry=(e,n)=>({"p-component p-panelmenu-header":!0,"p-panelmenu-header-active":e,"p-disabled":n}),ay=e=>({"p-panelmenu-expanded":e});function sy(e,n){e&1&&h(0,"ChevronDownIcon",20),e&2&&c("styleClass","p-panelmenu-submenu-icon")}function ly(e,n){e&1&&h(0,"ChevronRightIcon",20),e&2&&c("styleClass","p-panelmenu-submenu-icon")}function cy(e,n){if(e&1&&(te(0),b(1,sy,1,1,"ChevronDownIcon",19)(2,ly,1,1,"ChevronRightIcon",19),oe()),e&2){let t=m(5).$implicit,o=m();p(),c("ngIf",o.isItemActive(t)),p(),c("ngIf",!o.isItemActive(t))}}function dy(e,n){}function uy(e,n){e&1&&b(0,dy,0,0,"ng-template")}function py(e,n){if(e&1&&(te(0),b(1,cy,3,2,"ng-container",9)(2,uy,1,0,null,18),oe()),e&2){let t=m(5);p(),c("ngIf",!t.submenuIconTemplate&&!t._submenuIconTemplate),p(),c("ngTemplateOutlet",t.submenuIconTemplate||t._submenuIconTemplate)}}function my(e,n){if(e&1&&h(0,"span",21),e&2){let t=m(4).$implicit,o=m();c("ngClass",t.icon)("ngStyle",o.getItemProp(t,"iconStyle"))}}function fy(e,n){if(e&1&&(d(0,"span",22),v(1),u()),e&2){let t=m(4).$implicit,o=m();p(),de(o.getItemProp(t,"label"))}}function hy(e,n){if(e&1&&h(0,"span",23),e&2){let t=m(4).$implicit,o=m();c("innerHTML",o.getItemProp(t,"label"),Qo)}}function gy(e,n){if(e&1&&(d(0,"span",24),v(1),u()),e&2){let t=m(4).$implicit,o=m();c("ngClass",o.getItemProp(t,"badgeStyleClass")),p(),de(o.getItemProp(t,"badge"))}}function by(e,n){if(e&1&&(d(0,"a",14),b(1,py,3,2,"ng-container",9)(2,my,1,2,"span",15)(3,fy,2,1,"span",16)(4,hy,1,1,"ng-template",null,1,he)(6,gy,2,2,"span",17),u()),e&2){let t=it(5),o=m(3).$implicit,i=m();c("target",i.getItemProp(o,"target")),_("href",i.getItemProp(o,"url"),ut)("tabindex",-1)("title",i.getItemProp(o,"title"))("data-pc-section","headeraction"),p(),c("ngIf",i.isItemGroup(o)),p(),c("ngIf",o.icon),p(),c("ngIf",i.getItemProp(o,"escape")!==!1)("ngIfElse",t),p(3),c("ngIf",i.getItemProp(o,"badge"))}}function vy(e,n){if(e&1&&(te(0),b(1,by,7,10,"a",13),oe()),e&2){let t=m(2).$implicit,o=m();p(),c("ngIf",!o.getItemProp(t,"routerLink"))}}function yy(e,n){e&1&&ae(0)}function _y(e,n){e&1&&h(0,"ChevronDownIcon",20),e&2&&c("styleClass","p-panelmenu-submenu-icon")}function xy(e,n){e&1&&h(0,"ChevronRightIcon",20),e&2&&c("styleClass","p-panelmenu-submenu-icon")}function Cy(e,n){if(e&1&&(te(0),b(1,_y,1,1,"ChevronDownIcon",19)(2,xy,1,1,"ChevronRightIcon",19),oe()),e&2){let t=m(4).$implicit,o=m();p(),c("ngIf",o.isItemActive(t)),p(),c("ngIf",!o.isItemActive(t))}}function wy(e,n){}function Iy(e,n){e&1&&b(0,wy,0,0,"ng-template")}function Sy(e,n){if(e&1&&(te(0),b(1,Cy,3,2,"ng-container",9)(2,Iy,1,0,null,18),oe()),e&2){let t=m(4);p(),c("ngIf",!t.submenuIconTemplate&&!t._submenuIconTemplate),p(),c("ngTemplateOutlet",t.submenuIconTemplate||t._submenuIconTemplate)}}function ky(e,n){if(e&1&&h(0,"span",21),e&2){let t=m(3).$implicit,o=m();c("ngClass",t.icon)("ngStyle",o.getItemProp(t,"iconStyle"))}}function Ty(e,n){if(e&1&&(d(0,"span",22),v(1),u()),e&2){let t=m(3).$implicit,o=m();p(),de(o.getItemProp(t,"label"))}}function Ey(e,n){if(e&1&&h(0,"span",23),e&2){let t=m(3).$implicit,o=m();c("innerHTML",o.getItemProp(t,"label"),Qo)}}function Ry(e,n){if(e&1&&(d(0,"span",24),v(1),u()),e&2){let t=m(3).$implicit,o=m();c("ngClass",o.getItemProp(t,"badgeStyleClass")),p(),de(o.getItemProp(t,"badge"))}}function Dy(e,n){if(e&1&&(d(0,"a",25),b(1,Sy,3,2,"ng-container",9)(2,ky,1,2,"span",15)(3,Ty,2,1,"span",16)(4,Ey,1,1,"ng-template",null,2,he)(6,Ry,2,2,"span",17),u()),e&2){let t=it(5),o=m(2).$implicit,i=m();c("routerLink",i.getItemProp(o,"routerLink"))("queryParams",i.getItemProp(o,"queryParams"))("routerLinkActive","p-panelmenu-item-link-active")("routerLinkActiveOptions",i.getItemProp(o,"routerLinkActiveOptions")||Qe(18,ad))("target",i.getItemProp(o,"target"))("fragment",i.getItemProp(o,"fragment"))("queryParamsHandling",i.getItemProp(o,"queryParamsHandling"))("preserveFragment",i.getItemProp(o,"preserveFragment"))("skipLocationChange",i.getItemProp(o,"skipLocationChange"))("replaceUrl",i.getItemProp(o,"replaceUrl"))("state",i.getItemProp(o,"state")),_("tabindex",-1)("data-pc-section","headeraction"),p(),c("ngIf",i.isItemGroup(o)),p(),c("ngIf",o.icon),p(),c("ngIf",i.getItemProp(o,"escape")!==!1)("ngIfElse",t),p(3),c("ngIf",i.getItemProp(o,"badge"))}}function $y(e,n){if(e&1){let t=L();d(0,"div",26),M("@rootItem.done",function(){C(t);let i=m(3);return w(i.onToggleDone())}),d(1,"div",27)(2,"p-panelMenuList",28),M("headerFocus",function(i){C(t);let r=m(3);return w(r.updateFocusedHeader(i))}),u()()()}if(e&2){let t=m(2),o=t.$implicit,i=t.index,r=m();c("@rootItem",r.getAnimation(o))("ngClass",U(14,ay,r.isItemActive(o))),_("id",r.getContentId(o,i))("aria-labelledby",r.getHeaderId(o,i))("data-pc-section","toggleablecontent"),p(),_("data-pc-section","menucontent"),p(),c("panelId",r.getPanelId(i,o))("items",r.getItemProp(o,"items"))("itemTemplate",r.itemTemplate||r._itemTemplate)("transitionOptions",r.transitionOptions)("root",!0)("activeItem",r.activeItem())("tabindex",r.tabindex)("parentExpanded",r.isItemActive(o))}}function Ay(e,n){if(e&1){let t=L();d(0,"div",6)(1,"div",7),M("click",function(i){C(t);let r=m(),a=r.$implicit,s=r.index,l=m();return w(l.onHeaderClick(i,a,s))})("keydown",function(i){C(t);let r=m(),a=r.$implicit,s=r.index,l=m();return w(l.onHeaderKeyDown(i,a,s))}),d(2,"div",8),b(3,vy,2,1,"ng-container",9)(4,yy,1,0,"ng-container",10)(5,Dy,7,19,"a",11),u()(),b(6,$y,3,16,"div",12),u()}if(e&2){let t=m(),o=t.$implicit,i=t.index,r=m();c("ngClass",r.getItemProp(o,"headerClass"))("ngStyle",r.getItemProp(o,"style")),_("data-pc-section","panel"),p(),P(r.getItemProp(o,"styleClass")),c("ngClass",Rt(23,ry,r.isItemActive(o)&&!!o.items,r.isItemDisabled(o)))("ngStyle",r.getItemProp(o,"style"))("pTooltip",r.getItemProp(o,"tooltip"))("tabindex",0)("tooltipOptions",r.getItemProp(o,"tooltipOptions")),_("id",r.getHeaderId(o,i))("aria-expanded",r.isItemActive(o))("aria-label",r.getItemProp(o,"label"))("aria-controls",r.getContentId(o,i))("aria-disabled",r.isItemDisabled(o))("data-p-highlight",r.isItemActive(o))("data-p-disabled",r.isItemDisabled(o))("data-pc-section","header"),p(2),c("ngIf",!r.itemTemplate&&!r._itemTemplate),p(),c("ngTemplateOutlet",r.itemTemplate)("ngTemplateOutletContext",U(26,sd,o)),p(),c("ngIf",r.getItemProp(o,"routerLink")),p(),c("ngIf",r.isItemGroup(o))}}function Oy(e,n){if(e&1&&(te(0),b(1,Ay,7,28,"div",5),oe()),e&2){let t=n.$implicit,o=m();p(),c("ngIf",o.isItemVisible(t))}}var My=({dt:e})=>`
.p-panelmenu {
    display: flex;
    flex-direction: column;
    gap: ${e("panelmenu.gap")};
}

.p-panelmenu-panel {
    background: ${e("panelmenu.panel.background")};
    border-width: ${e("panelmenu.panel.border.width")};
    border-style: solid;
    border-color: ${e("panelmenu.panel.border.color")};
    color: ${e("panelmenu.panel.color")};
    border-radius: ${e("panelmenu.panel.border.radius")};
    padding: ${e("panelmenu.panel.padding")};
}

.p-panelmenu-panel:first-child {
    border-width: ${e("panelmenu.panel.first.border.width")};
    border-start-start-radius: ${e("panelmenu.panel.first.top.border.radius")};
    border-start-end-radius: ${e("panelmenu.panel.first.top.border.radius")};
}

.p-panelmenu-panel:last-child {
    border-width: ${e("panelmenu.panel.last.border.width")};
    border-end-start-radius: ${e("panelmenu.panel.last.bottom.border.radius")};
    border-end-end-radius: ${e("panelmenu.panel.last.bottom.border.radius")};
}

.p-panelmenu-header {
    outline: 0 none;
}

.p-panelmenu-header-content {
    border-radius: ${e("panelmenu.item.border.radius")};
    transition: background ${e("panelmenu.transition.duration")}, color ${e("panelmenu.transition.duration")}, outline-color ${e("panelmenu.transition.duration")}, box-shadow ${e("panelmenu.transition.duration")};
    outline-color: transparent;
    color: ${e("panelmenu.item.color")};
}

.p-panelmenu-header-link {
    display: flex;
    gap: ${e("panelmenu.item.gap")};
    padding: ${e("panelmenu.item.padding")};
    align-items: center;
    user-select: none;
    cursor: pointer;
    position: relative;
    text-decoration: none;
    color: inherit;
}

.p-panelmenu-header-icon,
.p-panelmenu-item-icon {
    color: ${e("panelmenu.item.icon.color")};
}

.p-panelmenu-submenu-icon {
    color: ${e("panelmenu.submenu.icon.color")};
}

.p-panelmenu-header:not(.p-panelmenu-header-active)  .p-panelmenu-header-content .p-panelmenu-submenu-icon:dir(rtl) {
    transform: rotate(180deg);
}

.p-panelmenu-header:not(.p-disabled):focus-visible .p-panelmenu-header-content {
    background: ${e("panelmenu.item.focus.background")};
    color: ${e("panelmenu.item.focus.color")};
}

.p-panelmenu-header:not(.p-disabled):focus-visible .p-panelmenu-header-content .p-panelmenu-header-icon {
    color: ${e("panelmenu.item.icon.focus.color")};
}

.p-panelmenu-header:not(.p-disabled):focus-visible .p-panelmenu-header-content .p-panelmenu-submenu-icon {
    color: ${e("panelmenu.submenu.icon.focus.color")};
}

.p-panelmenu-header:not(.p-disabled) .p-panelmenu-header-content:hover {
    background: ${e("panelmenu.item.focus.background")};
    color: ${e("panelmenu.item.focus.color")};
}

.p-panelmenu-header:not(.p-disabled) .p-panelmenu-header-content:hover .p-panelmenu-header-icon {
    color: ${e("panelmenu.item.icon.focus.color")};
}

.p-panelmenu-header:not(.p-disabled) .p-panelmenu-header-content:hover .p-panelmenu-submenu-icon {
    color: ${e("panelmenu.submenu.icon.focus.color")};
}

.p-panelmenu-submenu {
    margin: 0;
    padding: 0 0 0 ${e("panelmenu.submenu.indent")};
    outline: 0;
    list-style: none;
}

.p-panelmenu-submenu:dir(rtl) {
    padding: 0 ${e("panelmenu.submenu.indent")} 0 0;
}

.p-panelmenu-item-link {
    display: flex;
    gap: ${e("panelmenu.item.gap")};
    padding: ${e("panelmenu.item.padding")};
    align-items: center;
    user-select: none;
    cursor: pointer;
    text-decoration: none;
    color: inherit;
    position: relative;
    overflow: hidden;
}

.p-panelmenu-item-label {
    line-height: 1;
}

.p-panelmenu-item-content {
    border-radius: ${e("panelmenu.item.border.radius")};
    transition: background ${e("panelmenu.transition.duration")}, color ${e("panelmenu.transition.duration")}, outline-color ${e("panelmenu.transition.duration")}, box-shadow ${e("panelmenu.transition.duration")};
    color: ${e("panelmenu.item.color")};
    outline-color: transparent;
}

.p-panelmenu-item.p-focus > .p-panelmenu-item-content {
    background: ${e("panelmenu.item.focus.background")};
    color: ${e("panelmenu.item.focus.color")};
}

.p-panelmenu-item.p-focus > .p-panelmenu-item-content .p-panelmenu-item-icon {
    color: ${e("panelmenu.item.focus.color")};
}

.p-panelmenu-item.p-focus > .p-panelmenu-item-content .p-panelmenu-submenu-icon {
    color: ${e("panelmenu.submenu.icon.focus.color")};
}

.p-panelmenu-item:not(.p-disabled) > .p-panelmenu-item-content:hover {
    background: ${e("panelmenu.item.focus.background")};
    color: ${e("panelmenu.item.focus.color")};
}

.p-panelmenu-item:not(.p-disabled) > .p-panelmenu-item-content:hover .p-panelmenu-item-icon {
    color: ${e("panelmenu.item.icon.focus.color")};
}

.p-panelmenu-item:not(.p-disabled) > .p-panelmenu-item-content:hover .p-panelmenu-submenu-icon {
    color: ${e("panelmenu.submenu.icon.focus.color")};
}


/*For PrimeNG*/

.p-panelmenu-item:not(.ng-animating) {
    overflow: hidden;
}

.p-panelmenu-panel {
    overflow: hidden;
}

`,By={root:"p-panelmenu p-component",panel:"p-panelmenu-panel",header:({instance:e,item:n})=>["p-panelmenu-header",{"p-panelmenu-header-active":e.isItemActive(n)&&!!n.items,"p-disabled":e.isItemDisabled(n)}],headerContent:"p-panelmenu-header-content",headerLink:"p-panelmenu-header-link",headerIcon:"p-panelmenu-header-icon",headerLabel:"p-panelmenu-header-label",contentContainer:"p-panelmenu-content-container",content:"p-panelmenu-content",rootList:"p-panelmenu-root-list",item:({instance:e,processedItem:n})=>["p-panelmenu-item",{"p-focus":e.isItemFocused(n),"p-disabled":e.isItemDisabled(n)}],itemContent:"p-panelmenu-item-content",itemLink:"p-panelmenu-item-link",itemIcon:"p-panelmenu-item-icon",itemLabel:"p-panelmenu-item-label",submenuIcon:"p-panelmenu-submenu-icon",submenu:"p-panelmenu-submenu",separator:"p-menuitem-separator"},nd=(()=>{class e extends X{name="panelmenu";theme=My;classes=By;static \u0275fac=(()=>{let t;return function(i){return(t||(t=k(e)))(i||e)}})();static \u0275prov=A({token:e,factory:e.\u0275fac})}return e})();var Fy=(()=>{class e extends H{panelId;focusedItemId;items;itemTemplate;level=0;activeItemPath;root;tabindex;transitionOptions;parentExpanded;itemToggle=new q;menuFocus=new q;menuBlur=new q;menuKeyDown=new q;listViewChild;panelMenu=y(Xe(()=>Zn));getItemId(t){return t.item?.id??`${this.panelId}_${t.key}`}getItemKey(t){return this.getItemId(t)}getItemClass(t){return{"p-panelmenu-item":!0,"p-disabled":this.isItemDisabled(t),"p-focus":this.isItemFocused(t)}}getItemProp(t,o,i){return t&&t.item?Ue(t.item[o],i):void 0}getItemLabel(t){return this.getItemProp(t,"label")}isItemExpanded(t){return t.expanded}isItemActive(t){return this.isItemExpanded(t)||this.activeItemPath.some(o=>o&&o.key===t.key)}isItemVisible(t){return this.getItemProp(t,"visible")!==!1}isItemDisabled(t){return this.getItemProp(t,"disabled")}isItemFocused(t){return this.focusedItemId===this.getItemId(t)}isItemGroup(t){return W(t.items)}getAnimation(t){return this.isItemActive(t)?{value:"visible",params:{transitionParams:this.transitionOptions,height:"*"}}:{value:"hidden",params:{transitionParams:this.transitionOptions,height:"0"}}}getAriaSetSize(){return this.items.filter(t=>this.isItemVisible(t)&&!this.getItemProp(t,"separator")).length}getAriaPosInset(t){return t-this.items.slice(0,t).filter(o=>this.isItemVisible(o)&&this.getItemProp(o,"separator")).length+1}onItemClick(t,o){this.isItemDisabled(o)||(this.getItemProp(o,"command",{originalEvent:t,item:o.item}),this.itemToggle.emit({processedItem:o,expanded:!this.isItemActive(o)}))}onItemToggle(t){this.itemToggle.emit(t)}static \u0275fac=(()=>{let t;return function(i){return(t||(t=k(e)))(i||e)}})();static \u0275cmp=I({type:e,selectors:[["p-panelMenuSub"],["p-panelmenu-sub"]],viewQuery:function(o,i){if(o&1&&be(w1,5),o&2){let r;E(r=R())&&(i.listViewChild=r.first)}},inputs:{panelId:"panelId",focusedItemId:"focusedItemId",items:"items",itemTemplate:"itemTemplate",level:[2,"level","level",me],activeItemPath:"activeItemPath",root:[2,"root","root",$],tabindex:[2,"tabindex","tabindex",me],transitionOptions:"transitionOptions",parentExpanded:[2,"parentExpanded","parentExpanded",$]},outputs:{itemToggle:"itemToggle",menuFocus:"menuFocus",menuBlur:"menuBlur",menuKeyDown:"menuKeyDown"},features:[O],decls:3,vars:7,consts:[["list",""],["htmlLabel",""],["htmlRouteLabel",""],["role","tree",3,"focusin","focusout","keydown","ngClass","tabindex"],["ngFor","",3,"ngForOf"],["class","p-menuitem-separator","role","separator",4,"ngIf"],["role","treeitem",3,"ngClass","class","p-hidden","p-focus","ngStyle","pTooltip","tooltipOptions",4,"ngIf"],["role","separator",1,"p-menuitem-separator"],["role","treeitem",3,"ngClass","ngStyle","pTooltip","tooltipOptions"],[1,"p-panelmenu-item-content",3,"click"],[4,"ngIf"],[1,"p-toggleable-content"],[3,"id","panelId","items","itemTemplate","transitionOptions","focusedItemId","activeItemPath","level","parentExpanded","itemToggle",4,"ngIf"],["class","p-panelmenu-item-link",3,"ngClass","target",4,"ngIf"],["class","p-panelmenu-item-link",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","ngClass","target","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state",4,"ngIf"],[1,"p-panelmenu-item-link",3,"ngClass","target"],["class","p-panelmenu-submenu-icon",3,"ngClass","ngStyle",4,"ngIf"],["class","p-panelmenu-item-label",4,"ngIf","ngIfElse"],["class","p-menuitem-badge",3,"ngClass",4,"ngIf"],[4,"ngTemplateOutlet"],[3,"styleClass","ngStyle",4,"ngIf"],[3,"styleClass","ngStyle"],[1,"p-panelmenu-submenu-icon",3,"ngClass","ngStyle"],[1,"p-panelmenu-item-label"],[1,"p-panelmenu-item-label",3,"innerHTML"],[1,"p-menuitem-badge",3,"ngClass"],[1,"p-panelmenu-item-link",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","ngClass","target","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"itemToggle","id","panelId","items","itemTemplate","transitionOptions","focusedItemId","activeItemPath","level","parentExpanded"]],template:function(o,i){if(o&1){let r=L();d(0,"ul",3,0),M("focusin",function(s){return C(r),w(i.menuFocus.emit(s))})("focusout",function(s){return C(r),w(i.menuBlur.emit(s))})("keydown",function(s){return C(r),w(i.menuKeyDown.emit(s))}),b(2,ey,2,2,"ng-template",4),u()}o&2&&(c("ngClass",Qe(6,I1))("tabindex",-1),_("aria-activedescendant",i.focusedItemId)("data-pc-section","menu")("aria-hidden",!i.parentExpanded),p(2),c("ngForOf",i.items))},dependencies:[e,F,ge,pt,Oe,we,Ve,Mn,St,jt,Yn,Aa,Cc,wc,V],encapsulation:2,data:{animation:[yt("submenu",[Ke("hidden",Fe({height:"0"})),Ke("visible",Fe({height:"*"})),Le("visible <=> hidden",[Be("{{transitionParams}}")]),Le("void => *",Be(0))])]}})}return e})(),Ly=(()=>{class e extends H{panelId;id;items;itemTemplate;parentExpanded;expanded;transitionOptions;root;tabindex;activeItem;itemToggle=new q;headerFocus=new q;subMenuViewChild;searchTimeout;searchValue;focused;focusedItem=Se(null);activeItemPath=Se([]);processedItems=Se([]);visibleItems=se(()=>{let t=this.processedItems();return this.flatItems(t)});get focusedItemId(){let t=this.focusedItem();return t&&t.item?.id?t.item.id:W(this.focusedItem())?`${this.panelId}_${this.focusedItem().key}`:void 0}ngOnChanges(t){this.processedItems.set(this.createProcessedItems(t?.items?.currentValue||this.items||[]))}getItemProp(t,o){return t&&t.item?Ue(t.item[o]):void 0}getItemLabel(t){return this.getItemProp(t,"label")}isItemVisible(t){return this.getItemProp(t,"visible")!==!1}isItemDisabled(t){return this.getItemProp(t,"disabled")}isItemActive(t){return this.activeItemPath().some(o=>o.key===t.parentKey)}isItemGroup(t){return W(t.items)}isElementInPanel(t,o){let i=t.currentTarget.closest('[data-pc-section="panel"]');return i&&i.contains(o)}isItemMatched(t){return this.isValidItem(t)&&this.getItemLabel(t).toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase())}isVisibleItem(t){return!!t&&(t.level===0||this.isItemActive(t))&&this.isItemVisible(t)}isValidItem(t){return!!t&&!this.isItemDisabled(t)&&!t.separator}findFirstItem(){return this.visibleItems().find(t=>this.isValidItem(t))}findLastItem(){return Or(this.visibleItems(),t=>this.isValidItem(t))}findItemByEventTarget(t){let o=t;for(;o&&o.tagName?.toLowerCase()!=="li";)o=o?.parentNode;return o?.id&&this.visibleItems().find(i=>this.isValidItem(i)&&`${this.panelId}_${i.key}`===o.id)}createProcessedItems(t,o=0,i={},r=""){let a=[];return t&&t.forEach((s,l)=>{let f=(r!==""?r+"_":"")+l,g={icon:s.icon,expanded:s.expanded,separator:s.separator,item:s,index:l,level:o,key:f,parent:i,parentKey:r};g.items=this.createProcessedItems(s.items,o+1,g,f),a.push(g)}),a}findProcessedItemByItemKey(t,o,i=0){if(o=o||this.processedItems(),o&&o.length)for(let r=0;r<o.length;r++){let a=o[r];if(this.getItemProp(a,"key")===t)return a;let s=this.findProcessedItemByItemKey(t,a.items,i+1);if(s)return s}}flatItems(t,o=[]){return t&&t.forEach(i=>{this.isVisibleItem(i)&&(o.push(i),this.flatItems(i.items,o))}),o}changeFocusedItem(t){let{originalEvent:o,processedItem:i,focusOnNext:r,selfCheck:a,allowHeaderFocus:s=!0}=t;W(this.focusedItem())&&this.focusedItem().key!==i.key?(this.focusedItem.set(i),this.scrollInView()):s&&this.headerFocus.emit({originalEvent:o,focusOnNext:r,selfCheck:a})}scrollInView(){let t=ye(this.subMenuViewChild.listViewChild.nativeElement,`li[id="${`${this.focusedItemId}`}"]`);t&&t.scrollIntoView&&t.scrollIntoView({block:"nearest",inline:"nearest"})}onFocus(t){if(!this.focused){this.focused=!0;let o=this.focusedItem()||(this.isElementInPanel(t,t.relatedTarget)?this.findItemByEventTarget(t.target)||this.findFirstItem():this.findLastItem());t.relatedTarget!==null&&this.focusedItem.set(o)}}onBlur(t){let o=t.relatedTarget;this.focused&&!this.el.nativeElement.contains(o)&&(this.focused=!1,this.focusedItem.set(null),this.searchValue="")}onItemToggle(t){let{processedItem:o,expanded:i}=t;o.item&&(o.item.expanded=!o.item.expanded),this.processedItems.set(this.createProcessedItems(this.items||[],0,{},""));let r=this.activeItemPath().filter(a=>a.parentKey!==o.parentKey);i&&r.push(o),this.activeItemPath.set(r),this.focusedItem.set(o)}onKeyDown(t){let o=t.metaKey||t.ctrlKey;switch(t.code){case"ArrowDown":this.onArrowDownKey(t);break;case"ArrowUp":this.onArrowUpKey(t);break;case"ArrowLeft":this.onArrowLeftKey(t);break;case"ArrowRight":this.onArrowRightKey(t);break;case"Home":this.onHomeKey(t);break;case"End":this.onEndKey(t);break;case"Space":this.onSpaceKey(t);break;case"Enter":this.onEnterKey(t);break;case"Escape":case"Tab":case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!o&&ul(t.key)&&this.searchItems(t,t.key);break}}onArrowDownKey(t){let o=W(this.focusedItem())?this.findNextItem(this.focusedItem()):this.findFirstItem();this.changeFocusedItem({originalEvent:t,processedItem:o,focusOnNext:!0}),t.preventDefault()}onArrowUpKey(t){let o=W(this.focusedItem())?this.findPrevItem(this.focusedItem()):this.findLastItem();this.changeFocusedItem({originalEvent:t,processedItem:o,selfCheck:!0}),t.preventDefault()}onArrowLeftKey(t){if(W(this.focusedItem())){if(this.activeItemPath().some(i=>i.key===this.focusedItem().key)){let i=this.activeItemPath().filter(r=>r.key!==this.focusedItem().key);this.activeItemPath.set(i)}else{let i=W(this.focusedItem().parent)?this.focusedItem().parent:this.focusedItem();this.focusedItem.set(i)}t.preventDefault()}}onArrowRightKey(t){if(W(this.focusedItem())){if(this.isItemGroup(this.focusedItem()))if(this.activeItemPath().some(r=>r.key===this.focusedItem().key))this.onArrowDownKey(t);else{let r=this.activeItemPath().filter(a=>a.parentKey!==this.focusedItem().parentKey);r.push(this.focusedItem()),this.activeItemPath.set(r)}t.preventDefault()}}onHomeKey(t){this.changeFocusedItem({originalEvent:t,processedItem:this.findFirstItem(),allowHeaderFocus:!1}),t.preventDefault()}onEndKey(t){this.changeFocusedItem({originalEvent:t,processedItem:this.findLastItem(),focusOnNext:!0,allowHeaderFocus:!1}),t.preventDefault()}onEnterKey(t){if(W(this.focusedItem())){let o=ye(this.subMenuViewChild.listViewChild.nativeElement,`li[id="${`${this.focusedItemId}`}"]`),i=o&&(ye(o,'[data-pc-section="action"]')||ye(o,"a,button"));i?i.click():o&&o.click()}t.preventDefault()}onSpaceKey(t){this.onEnterKey(t)}findNextItem(t){let o=this.visibleItems().findIndex(r=>r.key===t.key);return(o<this.visibleItems().length-1?this.visibleItems().slice(o+1).find(r=>this.isValidItem(r)):void 0)||t}findPrevItem(t){let o=this.visibleItems().findIndex(r=>r.key===t.key);return(o>0?Or(this.visibleItems().slice(0,o),r=>this.isValidItem(r)):void 0)||t}searchItems(t,o){this.searchValue=(this.searchValue||"")+o;let i=null,r=!1;if(W(this.focusedItem())){let a=this.visibleItems().findIndex(s=>s.key===this.focusedItem().key);i=this.visibleItems().slice(a).find(s=>this.isItemMatched(s)),i=We(i)?this.visibleItems().slice(0,a).find(s=>this.isItemMatched(s)):i}else i=this.visibleItems().find(a=>this.isItemMatched(a));return W(i)&&(r=!0),We(i)&&We(this.focusedItem())&&(i=this.findFirstItem()),W(i)&&this.changeFocusedItem({originalEvent:t,processedItem:i,allowHeaderFocus:!1}),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchValue="",this.searchTimeout=null},500),r}static \u0275fac=(()=>{let t;return function(i){return(t||(t=k(e)))(i||e)}})();static \u0275cmp=I({type:e,selectors:[["p-panelMenuList"],["p-panel-menu-list"]],viewQuery:function(o,i){if(o&1&&be(ty,5),o&2){let r;E(r=R())&&(i.subMenuViewChild=r.first)}},inputs:{panelId:"panelId",id:"id",items:"items",itemTemplate:"itemTemplate",parentExpanded:[2,"parentExpanded","parentExpanded",$],expanded:[2,"expanded","expanded",$],transitionOptions:"transitionOptions",root:[2,"root","root",$],tabindex:[2,"tabindex","tabindex",me],activeItem:"activeItem"},outputs:{itemToggle:"itemToggle",headerFocus:"headerFocus"},features:[O,De],decls:2,vars:10,consts:[["submenu",""],[3,"itemToggle","keydown","menuFocus","menuBlur","root","id","panelId","tabindex","itemTemplate","focusedItemId","activeItemPath","transitionOptions","items","parentExpanded"]],template:function(o,i){if(o&1){let r=L();d(0,"p-panelmenu-sub",1,0),M("itemToggle",function(s){return C(r),w(i.onItemToggle(s))})("keydown",function(s){return C(r),w(i.onKeyDown(s))})("menuFocus",function(s){return C(r),w(i.onFocus(s))})("menuBlur",function(s){return C(r),w(i.onBlur(s))}),u()}o&2&&c("root",!0)("id",i.panelId+"_list")("panelId",i.panelId)("tabindex",i.tabindex)("itemTemplate",i.itemTemplate)("focusedItemId",i.focused?i.focusedItemId:void 0)("activeItemPath",i.activeItemPath())("transitionOptions",i.transitionOptions)("items",i.processedItems())("parentExpanded",i.parentExpanded)},dependencies:[F,Fy,Mn,Yn,V],encapsulation:2,changeDetection:0})}return e})(),Zn=(()=>{class e extends H{model;style;styleClass;multiple=!1;transitionOptions="400ms cubic-bezier(0.86, 0, 0.07, 1)";id;tabindex=0;containerViewChild;submenuIconTemplate;itemTemplate;templates;_submenuIconTemplate;_itemTemplate;animating;activeItem=Se(null);_componentStyle=y(nd);ngOnInit(){super.ngOnInit(),this.id=this.id||ce("pn_id_")}ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"submenuicon":this._submenuIconTemplate=t.template;break;case"item":this._itemTemplate=t.template;break;default:this._itemTemplate=t.template;break}})}collapseAll(){for(let t of this.model)t.expanded&&(t.expanded=!1);this.cd.detectChanges()}onToggleDone(){this.animating=!1,this.cd.markForCheck()}changeActiveItem(t,o,i,r=!1){if(!this.isItemDisabled(o)){let a=r?o:this.activeItem&&yo(o,this.activeItem)?null:o;this.activeItem.set(a)}}getAnimation(t){return t.expanded?{value:"visible",params:{transitionParams:this.animating?this.transitionOptions:"0ms",height:"*"}}:{value:"hidden",params:{transitionParams:this.transitionOptions,height:"0"}}}getItemProp(t,o){return t?Ue(t[o]):void 0}getItemLabel(t){return this.getItemProp(t,"label")}isItemActive(t){return t.expanded}isItemVisible(t){return this.getItemProp(t,"visible")!==!1}isItemDisabled(t){return this.getItemProp(t,"disabled")}isItemGroup(t){return W(t.items)}getPanelId(t,o){return o&&o.id?o.id:`${this.id}_${t}`}getHeaderId(t,o){return t.id?t.id+"_header":`${this.getPanelId(o)}_header`}getContentId(t,o){return t.id?t.id+"_content":`${this.getPanelId(o)}_content`}updateFocusedHeader(t){let{originalEvent:o,focusOnNext:i,selfCheck:r}=t,a=o.currentTarget.closest('[data-pc-section="panel"]'),s=r?ye(a,'[data-pc-section="header"]'):i?this.findNextHeader(a):this.findPrevHeader(a);s?this.changeFocusedHeader(o,s):i?this.onHeaderHomeKey(o):this.onHeaderEndKey(o)}changeFocusedHeader(t,o){o&&ft(o)}findNextHeader(t,o=!1){let i=o?t:t.nextElementSibling,r=ye(i,'[data-pc-section="header"]');return r?tt(r,"data-p-disabled")?this.findNextHeader(r.parentElement):r:null}findPrevHeader(t,o=!1){let i=o?t:t.previousElementSibling,r=ye(i,'[data-pc-section="header"]');return r?tt(r,"data-p-disabled")?this.findPrevHeader(r.parentElement):r:null}findFirstHeader(){return this.findNextHeader(this.containerViewChild.nativeElement.firstElementChild,!0)}findLastHeader(){return this.findPrevHeader(this.containerViewChild.nativeElement.lastElementChild,!0)}onHeaderClick(t,o,i){if(this.isItemDisabled(o)){t.preventDefault();return}if(o.command&&o.command({originalEvent:t,item:o}),!this.multiple)for(let r of this.model)o!==r&&r.expanded&&(r.expanded=!1);o.expanded=!o.expanded,this.changeActiveItem(t,o,i),this.animating=!0,ft(t.currentTarget)}onHeaderKeyDown(t,o,i){switch(t.code){case"ArrowDown":this.onHeaderArrowDownKey(t);break;case"ArrowUp":this.onHeaderArrowUpKey(t);break;case"Home":this.onHeaderHomeKey(t);break;case"End":this.onHeaderEndKey(t);break;case"Enter":case"Space":this.onHeaderEnterKey(t,o,i);break;default:break}}onHeaderArrowDownKey(t){let o=tt(t.currentTarget,"data-p-highlight")===!0?ye(t.currentTarget.nextElementSibling,'[data-pc-section="menu"]'):null;o?ft(o):this.updateFocusedHeader({originalEvent:t,focusOnNext:!0}),t.preventDefault()}onHeaderArrowUpKey(t){let o=this.findPrevHeader(t.currentTarget.parentElement)||this.findLastHeader(),i=tt(o,"data-p-highlight")===!0?ye(o.nextElementSibling,'[data-pc-section="menu"]'):null;i?ft(i):this.updateFocusedHeader({originalEvent:t,focusOnNext:!1}),t.preventDefault()}onHeaderHomeKey(t){this.changeFocusedHeader(t,this.findFirstHeader()),t.preventDefault()}onHeaderEndKey(t){this.changeFocusedHeader(t,this.findLastHeader()),t.preventDefault()}onHeaderEnterKey(t,o,i){let r=ye(t.currentTarget,'[data-pc-section="headeraction"]');r?r.click():this.onHeaderClick(t,o,i),t.preventDefault()}static \u0275fac=(()=>{let t;return function(i){return(t||(t=k(e)))(i||e)}})();static \u0275cmp=I({type:e,selectors:[["p-panelMenu"],["p-panelmenu"],["p-panel-menu"]],contentQueries:function(o,i,r){if(o&1&&(B(r,oy,4),B(r,iy,4),B(r,Ie,4)),o&2){let a;E(a=R())&&(i.submenuIconTemplate=a.first),E(a=R())&&(i.itemTemplate=a.first),E(a=R())&&(i.templates=a)}},viewQuery:function(o,i){if(o&1&&be(ny,5),o&2){let r;E(r=R())&&(i.containerViewChild=r.first)}},inputs:{model:"model",style:"style",styleClass:"styleClass",multiple:[2,"multiple","multiple",$],transitionOptions:"transitionOptions",id:"id",tabindex:[2,"tabindex","tabindex",me]},features:[J([nd]),O],decls:3,vars:5,consts:[["container",""],["htmlLabel",""],["htmlRouteLabel",""],[3,"ngStyle","ngClass"],[4,"ngFor","ngForOf"],["class","p-panelmenu-panel",3,"ngClass","ngStyle",4,"ngIf"],[1,"p-panelmenu-panel",3,"ngClass","ngStyle"],["role","button",3,"click","keydown","ngClass","ngStyle","pTooltip","tabindex","tooltipOptions"],[1,"p-panelmenu-header-content"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["class","p-panelmenu-header-link",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","target","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state",4,"ngIf"],["class","p-panelmenu-content-container","role","region",3,"ngClass",4,"ngIf"],["class","p-panelmenu-header-link",3,"target",4,"ngIf"],[1,"p-panelmenu-header-link",3,"target"],["class","p-panelmenu-submenu-icon",3,"ngClass","ngStyle",4,"ngIf"],["class","p-panelmenu-header-label",4,"ngIf","ngIfElse"],["class","p-menuitem-badge",3,"ngClass",4,"ngIf"],[4,"ngTemplateOutlet"],[3,"styleClass",4,"ngIf"],[3,"styleClass"],[1,"p-panelmenu-submenu-icon",3,"ngClass","ngStyle"],[1,"p-panelmenu-header-label"],[1,"p-panelmenu-header-label",3,"innerHTML"],[1,"p-menuitem-badge",3,"ngClass"],[1,"p-panelmenu-header-link",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","target","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state"],["role","region",1,"p-panelmenu-content-container",3,"ngClass"],[1,"p-panelmenu-content"],[3,"headerFocus","panelId","items","itemTemplate","transitionOptions","root","activeItem","tabindex","parentExpanded"]],template:function(o,i){o&1&&(d(0,"div",3,0),b(2,Oy,2,1,"ng-container",4),u()),o&2&&(P(i.styleClass),c("ngStyle",i.style)("ngClass","p-panelmenu p-component"),p(2),c("ngForOf",i.model))},dependencies:[F,ge,pt,Oe,we,Ve,Ly,Mn,St,jt,Yn,Aa,co,Mt,V],encapsulation:2,data:{animation:[yt("rootItem",[Ke("hidden",Fe({height:"0",visibility:"hidden"})),Ke("visible",Fe({height:"*",visibility:"*"})),Le("visible <=> hidden",[Be("{{transitionParams}}")]),Le("void => *",Be(0))])]},changeDetection:0})}return e})(),ld=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=Y({type:e});static \u0275inj=K({imports:[Zn,V,V]})}return e})();var Xn=class e{items;ngOnInit(){this.items=[{label:"Introduction",icon:"pi pi-info-circle",command:()=>this.scrollToSection("introduction")},{label:"App Usage & Modifications",icon:"pi pi-cog",command:()=>this.scrollToSection("usage")},{label:"Security & Data Protection",icon:"pi pi-lock",command:()=>this.scrollToSection("security")},{label:"Third-Party Services",icon:"pi pi-external-link",command:()=>this.scrollToSection("third-party")},{label:"Connectivity Responsibility",icon:"pi pi-wifi",command:()=>this.scrollToSection("connectivity")},{label:"User Responsibility",icon:"pi pi-user",command:()=>this.scrollToSection("user-responsibility")},{label:"Updates & Discontinuation",icon:"pi pi-refresh",command:()=>this.scrollToSection("updates")},{label:"Changes to Terms & Conditions",icon:"pi pi-file",command:()=>this.scrollToSection("changes")},{label:"Contact Us",icon:"pi pi-envelope",command:()=>this.scrollToSection("contact")}]}scrollToSection(n){let t=document.getElementById(n);t&&t.scrollIntoView({behavior:"smooth",block:"start"})}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=I({type:e,selectors:[["app-terms-services"]],decls:56,vars:1,consts:[[1,"bgSand","w-full","min-h-[70vh]","sm:animate-fade-in","sm:pt-22","sm:pb-22"],[1,"max-w-6xl","overflow-hidden","mx-auto","sm:animate-fade-in","p-5","text-sm","grid","grid-cols-1","sm:grid-cols-3","gap-6"],[1,"hidden","sm:block","sticky"],[1,"custom-panelmenu",3,"model"],[1,"p-5","sm:max-h-100","col-span-2","overflow-auto"],["id","introduction"],[1,"text-xl","font-bold","mb-3"],["id","usage"],["id","security"],["id","third-party"],[1,"list-disc","pl-5"],["id","connectivity"],["id","user-responsibility"],["id","updates"],["id","changes"],["id","contact"],["href","mailto:info@qwihi.com",1,"text-blue-600","underline"]],template:function(t,o){t&1&&(d(0,"div",0)(1,"div",1)(2,"div",2),h(3,"p-panelMenu",3),u(),d(4,"p-scrollPanel",4)(5,"section",5)(6,"h2",6),v(7,"Introduction"),u(),d(8,"p"),v(9," By downloading or using the app, these terms will automatically apply to you \u2013 you should make sure therefore that you read them carefully before using the app. You\u2019re not allowed to copy, or modify the app, any part of the app, or our trademarks in any way. You\u2019re not allowed to attempt to extract the source code of the app, and you also shouldn\u2019t try to translate the app into other languages, or make derivative versions. The app itself, and all the trademarks, copyright, database rights, and other intellectual property rights related to it, still belong to arucare. "),u()(),d(10,"section",7)(11,"h2",6),v(12,"App Usage & Modifications"),u(),d(13,"p"),v(14," arucare is committed to ensuring that the app is as useful and efficient as possible. For that reason, we reserve the right to make changes to the app or to charge for its services, at any time and for any reason. We will never charge you for the app or its services without making it very clear to you exactly what you\u2019re paying for. "),u()(),d(15,"section",8)(16,"h2",6),v(17,"Security & Data Protection"),u(),d(18,"p"),v(19," The arucare app stores and processes personal data that you have provided to us, in order to provide our Service. It\u2019s your responsibility to keep your phone and access to the app secure. We therefore recommend that you do not jailbreak or root your phone, as it could make your phone vulnerable to malware and affect the app's functionality. "),u()(),d(20,"section",9)(21,"h2",6),v(22,"Third-Party Services"),u(),d(23,"p"),v(24," The app does use third-party services that declare their own Terms and Conditions. "),u(),d(25,"ul",10)(26,"li"),v(27,"Google Play Services"),u()()(),d(28,"section",11)(29,"h2",6),v(30,"Connectivity Responsibility"),u(),d(31,"p"),v(32," Certain functions of the app require an active internet connection. The connection can be Wi-Fi or provided by your mobile network provider, but arucare cannot take responsibility for the app not working if you don\u2019t have access to the internet. "),u()(),d(33,"section",12)(34,"h2",6),v(35,"User Responsibility"),u(),d(36,"p"),v(37," If you\u2019re using the app outside of a Wi-Fi area, your mobile network provider's charges may apply. You accept responsibility for any such charges, including roaming fees. "),u()(),d(38,"section",13)(39,"h2",6),v(40,"Updates & Discontinuation"),u(),d(41,"p"),v(42," At some point, we may wish to update the app. You\u2019ll need to download updates if you want to keep using the app. We may also wish to stop providing the app at any time without notice. "),u()(),d(43,"section",14)(44,"h2",6),v(45,"Changes to Terms & Conditions"),u(),d(46,"p"),v(47," We may update our Terms and Conditions from time to time. Thus, you are advised to review this page periodically for any changes. "),u()(),d(48,"section",15)(49,"h2",6),v(50,"Contact Us"),u(),d(51,"p"),v(52," If you have any questions or suggestions about our Terms and Conditions, do not hesitate to contact us at "),d(53,"a",16),v(54,"infoqwihi.com"),u(),v(55,". "),u()()()()()),t&2&&(p(3),c("model",o.items))},dependencies:[ld,Zn,F,od,$a],encapsulation:2})};var cd=[{path:"",component:Wn},{path:"about",component:qn},{path:"contact",component:Qn},{path:"privacy&policy",component:Kn},{path:"termsAndConditions",component:Xn},{path:"**",redirectTo:""}];var dd={root:{transitionDuration:"{transition.duration}"},panel:{borderWidth:"0",borderColor:"{content.border.color}"},header:{color:"{text.color}",hoverColor:"{text.color}",activeColor:"{text.color}",padding:"1.25rem",fontWeight:"600",borderRadius:"0",borderWidth:"0",borderColor:"{content.border.color}",background:"{content.background}",hoverBackground:"{content.hover.background}",activeBackground:"{content.background}",activeHoverBackground:"{content.background}",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"},toggleIcon:{color:"{text.muted.color}",hoverColor:"{text.muted.color}",activeColor:"{text.muted.color}",activeHoverColor:"{text.muted.color}"},first:{topBorderRadius:"{content.border.radius}",borderWidth:"0"},last:{bottomBorderRadius:"{content.border.radius}",activeBottomBorderRadius:"0"}},content:{borderWidth:"0",borderColor:"{content.border.color}",background:"{content.background}",color:"{text.color}",padding:"0 1.25rem 1.25rem 1.25rem"},css:({dt:e})=>`
.p-accordionpanel {
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
    transition: margin ${e("accordion.transition.duration")};
}

.p-accordionpanel-active {
    margin: 1rem 0;
}

.p-accordionpanel:first-child {
    border-start-start-radius: ${e("content.border.radius")};
    border-start-end-radius: ${e("content.border.radius")};
    margin-top: 0;
}

.p-accordionpanel:last-child {
    border-end-start-radius: ${e("content.border.radius")};
    border-end-end-radius: ${e("content.border.radius")};
    margin-bottom: 0;
}

.p-accordionpanel:not(.p-disabled) .p-accordionheader:focus-visible {
    background: ${e("navigation.item.active.background")};
}
`};var ud={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},list:{padding:"{list.padding}",gap:"{list.gap}"},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},optionGroup:{background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},dropdown:{width:"3rem",sm:{width:"2.5rem"},lg:{width:"3.5rem"},borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",borderRadius:"{form.field.border.radius}",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"}},chip:{borderRadius:"{border.radius.sm}"},emptyMessage:{padding:"{list.option.padding}"},colorScheme:{light:{chip:{focusBackground:"{surface.300}",focusColor:"{surface.950}"},dropdown:{background:"{surface.100}",hoverBackground:"{surface.200}",activeBackground:"{surface.300}",color:"{surface.600}",hoverColor:"{surface.700}",activeColor:"{surface.800}"}},dark:{chip:{focusBackground:"{surface.600}",focusColor:"{surface.0}"},dropdown:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.600}",color:"{surface.300}",hoverColor:"{surface.200}",activeColor:"{surface.100}"}}},css:({dt:e})=>`
.p-autocomplete-dropdown:focus-visible {
    background: ${e("autocomplete.dropdown.hover.background")}
    border-color: ${e("autocomplete.dropdown.hover.border.color")};
    color: ${e("autocomplete.dropdown.hover.color")};
}

.p-variant-filled.p-autocomplete-input-multiple {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border: 1px solid transparent;
    background: ${e("autocomplete.filled.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("autocomplete.focus.border.color")}, ${e("autocomplete.focus.border.color")}), linear-gradient(to bottom, ${e("autocomplete.border.color")}, ${e("autocomplete.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
}

.p-autocomplete:not(.p-disabled):hover .p-variant-filled.p-autocomplete-input-multiple {
    background: ${e("autocomplete.filled.hover.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("autocomplete.focus.border.color")}, ${e("autocomplete.focus.border.color")}), linear-gradient(to bottom, ${e("autocomplete.hover.border.color")}, ${e("autocomplete.hover.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-autocomplete:not(.p-disabled).p-focus .p-variant-filled.p-autocomplete-input-multiple {
    outline: 0 none;
    background: ${e("autocomplete.filled.focus.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("autocomplete.focus.border.color")}, ${e("autocomplete.focus.border.color")}), linear-gradient(to bottom, ${e("autocomplete.border.color")}, ${e("autocomplete.border.color")});
    background-size: 100% 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-autocomplete:not(.p-disabled).p-focus:hover .p-variant-filled.p-autocomplete-input-multiple {
    background-image: linear-gradient(to bottom, ${e("autocomplete.focus.border.color")}, ${e("autocomplete.focus.border.color")}), linear-gradient(to bottom, ${e("autocomplete.hover.border.color")}, ${e("autocomplete.hover.border.color")});
}

.p-autocomplete.p-invalid .p-autocomplete-input-multiple {
    background-image: linear-gradient(to bottom, ${e("autocomplete.invalid.border.color")}, ${e("autocomplete.invalid.border.color")}), linear-gradient(to bottom, ${e("autocomplete.invalid.border.color")}, ${e("autocomplete.invalid.border.color")});
}

.p-autocomplete.p-invalid.p-focus .p-autocomplete-input-multiple  {
    background-image: linear-gradient(to bottom, ${e("autocomplete.invalid.border.color")}, ${e("autocomplete.invalid.border.color")}), linear-gradient(to bottom, ${e("autocomplete.invalid.border.color")}, ${e("autocomplete.invalid.border.color")});
}

.p-autocomplete-option {
    transition: none;
}

.p-autocomplete:has(.p-variant-filled) .p-autocomplete-dropdown {
    border-top-color: transparent;
    border-right-color: transparent;
}
`};var pd={root:{width:"2rem",height:"2rem",fontSize:"1rem",background:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}"},icon:{size:"1rem"},group:{borderColor:"{content.background}",offset:"-0.75rem"},lg:{width:"3rem",height:"3rem",fontSize:"1.5rem",icon:{size:"1.5rem"},group:{offset:"-1rem"}},xl:{width:"4rem",height:"4rem",fontSize:"2rem",icon:{size:"2rem"},group:{offset:"-1.5rem"}}};var md={root:{borderRadius:"{border.radius.md}",padding:"0 0.5rem",fontSize:"0.75rem",fontWeight:"700",minWidth:"1.5rem",height:"1.5rem"},dot:{size:"0.5rem"},sm:{fontSize:"0.625rem",minWidth:"1.25rem",height:"1.25rem"},lg:{fontSize:"0.875rem",minWidth:"1.75rem",height:"1.75rem"},xl:{fontSize:"1rem",minWidth:"2rem",height:"2rem"},colorScheme:{light:{primary:{background:"{primary.color}",color:"{primary.contrast.color}"},secondary:{background:"{surface.100}",color:"{surface.600}"},success:{background:"{green.500}",color:"{surface.0}"},info:{background:"{sky.500}",color:"{surface.0}"},warn:{background:"{orange.500}",color:"{surface.0}"},danger:{background:"{red.500}",color:"{surface.0}"},contrast:{background:"{surface.950}",color:"{surface.0}"}},dark:{primary:{background:"{primary.color}",color:"{primary.contrast.color}"},secondary:{background:"{surface.800}",color:"{surface.300}"},success:{background:"{green.400}",color:"{green.950}"},info:{background:"{sky.400}",color:"{sky.950}"},warn:{background:"{orange.400}",color:"{orange.950}"},danger:{background:"{red.400}",color:"{red.950}"},contrast:{background:"{surface.0}",color:"{surface.950}"}}}};var fd={primitive:{borderRadius:{none:"0",xs:"2px",sm:"4px",md:"6px",lg:"8px",xl:"12px"},emerald:{50:"#E8F6F1",100:"#C5EBE1",200:"#9EDFCF",300:"#76D3BD",400:"#58C9AF",500:"#3BBFA1",600:"#35AF94",700:"#2D9B83",800:"#268873",900:"#1A6657",950:"#0d3329"},green:{50:"#E8F5E9",100:"#C8E6C9",200:"#A5D6A7",300:"#81C784",400:"#66BB6A",500:"#4CAF50",600:"#43A047",700:"#388E3C",800:"#2E7D32",900:"#1B5E20",950:"#0e2f10"},lime:{50:"#F9FBE7",100:"#F0F4C3",200:"#E6EE9C",300:"#DCE775",400:"#D4E157",500:"#CDDC39",600:"#C0CA33",700:"#AFB42B",800:"#9E9D24",900:"#827717",950:"#413c0c"},red:{50:"#FFEBEE",100:"#FFCDD2",200:"#EF9A9A",300:"#E57373",400:"#EF5350",500:"#F44336",600:"#E53935",700:"#D32F2F",800:"#C62828",900:"#B71C1C",950:"#5c0e0e"},orange:{50:"#FFF3E0",100:"#FFE0B2",200:"#FFCC80",300:"#FFB74D",400:"#FFA726",500:"#FF9800",600:"#FB8C00",700:"#F57C00",800:"#EF6C00",900:"#E65100",950:"#732900"},amber:{50:"#FFF8E1",100:"#FFECB3",200:"#FFE082",300:"#FFD54F",400:"#FFCA28",500:"#FFC107",600:"#FFB300",700:"#FFA000",800:"#FF8F00",900:"#FF6F00",950:"#803800"},yellow:{50:"#FFFDE7",100:"#FFF9C4",200:"#FFF59D",300:"#FFF176",400:"#FFEE58",500:"#FFEB3B",600:"#FDD835",700:"#FBC02D",800:"#F9A825",900:"#F57F17",950:"#7b400c"},teal:{50:"#E0F2F1",100:"#B2DFDB",200:"#80CBC4",300:"#4DB6AC",400:"#26A69A",500:"#009688",600:"#00897B",700:"#00796B",800:"#00695C",900:"#004D40",950:"#002720"},cyan:{50:"#E0F7FA",100:"#B2EBF2",200:"#80DEEA",300:"#4DD0E1",400:"#26C6DA",500:"#00BCD4",600:"#00ACC1",700:"#0097A7",800:"#00838F",900:"#006064",950:"#003032"},sky:{50:"#E1F5FE",100:"#B3E5FC",200:"#81D4FA",300:"#4FC3F7",400:"#29B6F6",500:"#03A9F4",600:"#039BE5",700:"#0288D1",800:"#0277BD",900:"#01579B",950:"#012c4e"},blue:{50:"#E3F2FD",100:"#BBDEFB",200:"#90CAF9",300:"#64B5F6",400:"#42A5F5",500:"#2196F3",600:"#1E88E5",700:"#1976D2",800:"#1565C0",900:"#0D47A1",950:"#072451"},indigo:{50:"#E8EAF6",100:"#C5CAE9",200:"#9FA8DA",300:"#7986CB",400:"#5C6BC0",500:"#3F51B5",600:"#3949AB",700:"#303F9F",800:"#283593",900:"#1A237E",950:"#0d123f"},violet:{50:"#EDE7F6",100:"#D1C4E9",200:"#B39DDB",300:"#9575CD",400:"#7E57C2",500:"#673AB7",600:"#5E35B1",700:"#512DA8",800:"#4527A0",900:"#311B92",950:"#190e49"},purple:{50:"#F3E5F5",100:"#E1BEE7",200:"#CE93D8",300:"#BA68C8",400:"#AB47BC",500:"#9C27B0",600:"#8E24AA",700:"#7B1FA2",800:"#6A1B9A",900:"#4A148C",950:"#250a46"},fuchsia:{50:"#FDE6F3",100:"#FBC1E3",200:"#F897D1",300:"#F56DBF",400:"#F34DB2",500:"#F12DA5",600:"#E0289D",700:"#CC2392",800:"#B81E88",900:"#951777",950:"#4b0c3c"},pink:{50:"#FCE4EC",100:"#F8BBD0",200:"#F48FB1",300:"#F06292",400:"#EC407A",500:"#E91E63",600:"#D81B60",700:"#C2185B",800:"#AD1457",900:"#880E4F",950:"#440728"},rose:{50:"#FFF0F0",100:"#FFD9D9",200:"#FFC0C0",300:"#FFA7A7",400:"#FF8E8E",500:"#FF7575",600:"#FF5252",700:"#FF3838",800:"#F71C1C",900:"#D50000",950:"#3E0000"},slate:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a",950:"#020617"},gray:{50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827",950:"#030712"},zinc:{50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b",950:"#09090b"},neutral:{50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717",950:"#0a0a0a"},stone:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917",950:"#0c0a09"}},semantic:{transitionDuration:"0.2s",focusRing:{width:"0",style:"none",color:"unset",offset:"0"},disabledOpacity:"0.38",iconSize:"1rem",anchorGutter:"0",primary:{50:"{emerald.50}",100:"{emerald.100}",200:"{emerald.200}",300:"{emerald.300}",400:"{emerald.400}",500:"{emerald.500}",600:"{emerald.600}",700:"{emerald.700}",800:"{emerald.800}",900:"{emerald.900}",950:"{emerald.950}"},formField:{paddingX:"0.75rem",paddingY:"0.75rem",sm:{fontSize:"0.875rem",paddingX:"0.625rem",paddingY:"0.625rem"},lg:{fontSize:"1.125rem",paddingX:"0.825rem",paddingY:"0.825rem"},borderRadius:"{border.radius.sm}",focusRing:{width:"2px",style:"solid",color:"{primary.color}",offset:"-2px",shadow:"none"},transitionDuration:"{transition.duration}"},list:{padding:"0.5rem 0",gap:"0",header:{padding:"0.75rem 1rem"},option:{padding:"0.75rem 1rem",borderRadius:"{border.radius.none}"},optionGroup:{padding:"0.75rem 1rem",fontWeight:"700"}},content:{borderRadius:"{border.radius.sm}"},mask:{transitionDuration:"0.15s"},navigation:{list:{padding:"0.5rem 0",gap:"0"},item:{padding:"0.75rem 1rem",borderRadius:"{border.radius.none}",gap:"0.5rem"},submenuLabel:{padding:"0.75rem 1rem",fontWeight:"700"},submenuIcon:{size:"0.875rem"}},overlay:{select:{borderRadius:"{border.radius.sm}",shadow:"0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12)"},popover:{borderRadius:"{border.radius.sm}",padding:"1rem",shadow:"0 11px 15px -7px rgba(0,0,0,.2), 0 24px 38px 3px rgba(0,0,0,.14), 0 9px 46px 8px rgba(0,0,0,.12)"},modal:{borderRadius:"{border.radius.sm}",padding:"1.5rem",shadow:"0 11px 15px -7px rgba(0,0,0,.2), 0 24px 38px 3px rgba(0,0,0,.14), 0 9px 46px 8px rgba(0,0,0,.12)"},navigation:{shadow:"0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12)"}},colorScheme:{light:{focusRing:{shadow:"0 0 1px 4px {surface.200}"},surface:{0:"#ffffff",50:"{slate.50}",100:"{slate.100}",200:"{slate.200}",300:"{slate.300}",400:"{slate.400}",500:"{slate.500}",600:"{slate.600}",700:"{slate.700}",800:"{slate.800}",900:"{slate.900}",950:"{slate.950}"},primary:{color:"{primary.500}",contrastColor:"#ffffff",hoverColor:"{primary.400}",activeColor:"{primary.300}"},highlight:{background:"color-mix(in srgb, {primary.color}, transparent 88%)",focusBackground:"color-mix(in srgb, {primary.color}, transparent 76%)",color:"{primary.700}",focusColor:"{primary.800}"},mask:{background:"rgba(0,0,0,0.32)",color:"{surface.200}"},formField:{background:"{surface.0}",disabledBackground:"{surface.300}",filledBackground:"{surface.100}",filledHoverBackground:"{surface.200}",filledFocusBackground:"{surface.100}",borderColor:"{surface.400}",hoverBorderColor:"{surface.900}",focusBorderColor:"{primary.color}",invalidBorderColor:"{red.800}",color:"{surface.900}",disabledColor:"{surface.600}",placeholderColor:"{surface.600}",invalidPlaceholderColor:"{red.800}",floatLabelColor:"{surface.600}",floatLabelFocusColor:"{primary.600}",floatLabelActiveColor:"{surface.600}",floatLabelInvalidColor:"{form.field.invalid.placeholder.color}",iconColor:"{surface.600}",shadow:"none"},text:{color:"{surface.900}",hoverColor:"{surface.900}",mutedColor:"{surface.600}",hoverMutedColor:"{surface.600}"},content:{background:"{surface.0}",hoverBackground:"{surface.100}",borderColor:"{surface.300}",color:"{text.color}",hoverColor:"{text.hover.color}"},overlay:{select:{background:"{surface.0}",borderColor:"{surface.0}",color:"{text.color}"},popover:{background:"{surface.0}",borderColor:"{surface.0}",color:"{text.color}"},modal:{background:"{surface.0}",borderColor:"{surface.0}",color:"{text.color}"}},list:{option:{focusBackground:"{surface.100}",selectedBackground:"{highlight.background}",selectedFocusBackground:"{highlight.focus.background}",color:"{text.color}",focusColor:"{text.hover.color}",selectedColor:"{highlight.color}",selectedFocusColor:"{highlight.focus.color}",icon:{color:"{surface.600}",focusColor:"{surface.600}"}},optionGroup:{background:"transparent",color:"{text.color}"}},navigation:{item:{focusBackground:"{surface.100}",activeBackground:"{surface.200}",color:"{text.color}",focusColor:"{text.hover.color}",activeColor:"{text.hover.color}",icon:{color:"{surface.600}",focusColor:"{surface.600}",activeColor:"{surface.600}"}},submenuLabel:{background:"transparent",color:"{text.color}"},submenuIcon:{color:"{surface.600}",focusColor:"{surface.600}",activeColor:"{surface.600}"}}},dark:{focusRing:{shadow:"0 0 1px 4px {surface.700}"},surface:{0:"#ffffff",50:"{zinc.50}",100:"{zinc.100}",200:"{zinc.200}",300:"{zinc.300}",400:"{zinc.400}",500:"{zinc.500}",600:"{zinc.600}",700:"{zinc.700}",800:"{zinc.800}",900:"{zinc.900}",950:"{zinc.950}"},primary:{color:"{primary.400}",contrastColor:"{surface.900}",hoverColor:"{primary.300}",activeColor:"{primary.200}"},highlight:{background:"color-mix(in srgb, {primary.400}, transparent 84%)",focusBackground:"color-mix(in srgb, {primary.400}, transparent 76%)",color:"rgba(255,255,255,.87)",focusColor:"rgba(255,255,255,.87)"},mask:{background:"rgba(0,0,0,0.6)",color:"{surface.200}"},formField:{background:"{surface.950}",disabledBackground:"{surface.700}",filledBackground:"{surface.800}",filledHoverBackground:"{surface.700}",filledFocusBackground:"{surface.800}",borderColor:"{surface.600}",hoverBorderColor:"{surface.400}",focusBorderColor:"{primary.color}",invalidBorderColor:"{red.300}",color:"{surface.0}",disabledColor:"{surface.400}",placeholderColor:"{surface.400}",invalidPlaceholderColor:"{red.300}",floatLabelColor:"{surface.400}",floatLabelFocusColor:"{primary.color}",floatLabelActiveColor:"{surface.400}",floatLabelInvalidColor:"{form.field.invalid.placeholder.color}",iconColor:"{surface.400}",shadow:"none"},text:{color:"{surface.0}",hoverColor:"{surface.0}",mutedColor:"{surface.400}",hoverMutedColor:"{surface.400}"},content:{background:"{surface.900}",hoverBackground:"{surface.800}",borderColor:"{surface.700}",color:"{text.color}",hoverColor:"{text.hover.color}"},overlay:{select:{background:"{surface.900}",borderColor:"{surface.900}",color:"{text.color}"},popover:{background:"{surface.900}",borderColor:"{surface.900}",color:"{text.color}"},modal:{background:"{surface.900}",borderColor:"{surface.900}",color:"{text.color}"}},list:{option:{focusBackground:"{surface.800}",selectedBackground:"{highlight.background}",selectedFocusBackground:"{highlight.focus.background}",color:"{text.color}",focusColor:"{text.hover.color}",selectedColor:"{highlight.color}",selectedFocusColor:"{highlight.focus.color}",icon:{color:"{surface.400}",focusColor:"{surface.400}"}},optionGroup:{background:"transparent",color:"{text.muted.color}"}},navigation:{item:{focusBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{text.color}",focusColor:"{text.hover.color}",activeColor:"{text.hover.color}",icon:{color:"{surface.400}",focusColor:"{surface.400}",activeColor:"{surface.400}"}},submenuLabel:{background:"transparent",color:"{text.muted.color}"},submenuIcon:{color:"{surface.400}",focusColor:"{surface.400}",activeColor:"{surface.400}"}}}}}};var hd={root:{borderRadius:"{content.border.radius}"}};var gd={root:{padding:"1rem",background:"{content.background}",gap:"0.5rem",transitionDuration:"{transition.duration}"},item:{color:"{text.muted.color}",hoverColor:"{text.color}",borderRadius:"{content.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",hoverColor:"{navigation.item.icon.focus.color}"},focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},separator:{color:"{navigation.item.icon.color}"}};var bd={root:{borderRadius:"{form.field.border.radius}",roundedBorderRadius:"2rem",gap:"0.5rem",paddingX:"1rem",paddingY:"0.625rem",iconOnlyWidth:"3rem",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"},label:{fontWeight:"500"},raisedShadow:"0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",offset:"{focus.ring.offset}"},badgeSize:"1rem",transitionDuration:"{form.field.transition.duration}"},colorScheme:{light:{root:{primary:{background:"{primary.color}",hoverBackground:"{primary.hover.color}",activeBackground:"{primary.active.color}",borderColor:"{primary.color}",hoverBorderColor:"{primary.hover.color}",activeBorderColor:"{primary.active.color}",color:"{primary.contrast.color}",hoverColor:"{primary.contrast.color}",activeColor:"{primary.contrast.color}",focusRing:{color:"{primary.color}",shadow:"none"}},secondary:{background:"{surface.100}",hoverBackground:"{surface.200}",activeBackground:"{surface.300}",borderColor:"{surface.100}",hoverBorderColor:"{surface.200}",activeBorderColor:"{surface.300}",color:"{surface.600}",hoverColor:"{surface.700}",activeColor:"{surface.800}",focusRing:{color:"{surface.600}",shadow:"none"}},info:{background:"{sky.500}",hoverBackground:"{sky.400}",activeBackground:"{sky.300}",borderColor:"{sky.500}",hoverBorderColor:"{sky.400}",activeBorderColor:"{sky.300}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{sky.500}",shadow:"none"}},success:{background:"{green.500}",hoverBackground:"{green.400}",activeBackground:"{green.300}",borderColor:"{green.500}",hoverBorderColor:"{green.400}",activeBorderColor:"{green.300}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{green.500}",shadow:"none"}},warn:{background:"{orange.500}",hoverBackground:"{orange.400}",activeBackground:"{orange.300}",borderColor:"{orange.500}",hoverBorderColor:"{orange.400}",activeBorderColor:"{orange.300}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{orange.500}",shadow:"none"}},help:{background:"{purple.500}",hoverBackground:"{purple.400}",activeBackground:"{purple.300}",borderColor:"{purple.500}",hoverBorderColor:"{purple.400}",activeBorderColor:"{purple.300}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{purple.500}",shadow:"none"}},danger:{background:"{red.500}",hoverBackground:"{red.400}",activeBackground:"{red.300}",borderColor:"{red.500}",hoverBorderColor:"{red.400}",activeBorderColor:"{red.300}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{red.500}",shadow:"none"}},contrast:{background:"{surface.950}",hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{surface.950}",hoverBorderColor:"{surface.800}",activeBorderColor:"{surface.700}",color:"{surface.0}",hoverColor:"{surface.0}",activeColor:"{surface.0}",focusRing:{color:"{surface.950}",shadow:"none"}}},outlined:{primary:{hoverBackground:"{primary.50}",activeBackground:"{primary.100}",borderColor:"{primary.color}",color:"{primary.color}"},secondary:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.600}",color:"{surface.600}"},success:{hoverBackground:"{green.50}",activeBackground:"{green.100}",borderColor:"{green.500}",color:"{green.500}"},info:{hoverBackground:"{sky.50}",activeBackground:"{sky.100}",borderColor:"{sky.500}",color:"{sky.500}"},warn:{hoverBackground:"{orange.50}",activeBackground:"{orange.100}",borderColor:"{orange.500}",color:"{orange.500}"},help:{hoverBackground:"{purple.50}",activeBackground:"{purple.100}",borderColor:"{purple.500}",color:"{purple.500}"},danger:{hoverBackground:"{red.50}",activeBackground:"{red.100}",borderColor:"{red.500}",color:"{red.500}"},contrast:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.950}",color:"{surface.950}"},plain:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.900}",color:"{surface.900}"}},text:{primary:{hoverBackground:"{primary.50}",activeBackground:"{primary.100}",color:"{primary.color}"},secondary:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",color:"{surface.600}"},success:{hoverBackground:"{green.50}",activeBackground:"{green.100}",color:"{green.500}"},info:{hoverBackground:"{sky.50}",activeBackground:"{sky.100}",color:"{sky.500}"},warn:{hoverBackground:"{orange.50}",activeBackground:"{orange.100}",color:"{orange.500}"},help:{hoverBackground:"{purple.50}",activeBackground:"{purple.100}",color:"{purple.500}"},danger:{hoverBackground:"{red.50}",activeBackground:"{red.100}",color:"{red.500}"},contrast:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",color:"{surface.950}"},plain:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",color:"{surface.900}"}},link:{color:"{primary.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"}},dark:{root:{primary:{background:"{primary.color}",hoverBackground:"{primary.hover.color}",activeBackground:"{primary.active.color}",borderColor:"{primary.color}",hoverBorderColor:"{primary.hover.color}",activeBorderColor:"{primary.active.color}",color:"{primary.contrast.color}",hoverColor:"{primary.contrast.color}",activeColor:"{primary.contrast.color}",focusRing:{color:"{primary.color}",shadow:"none"}},secondary:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.600}",borderColor:"{surface.800}",hoverBorderColor:"{surface.700}",activeBorderColor:"{surface.600}",color:"{surface.300}",hoverColor:"{surface.200}",activeColor:"{surface.100}",focusRing:{color:"{surface.300}",shadow:"none"}},info:{background:"{sky.400}",hoverBackground:"{sky.300}",activeBackground:"{sky.200}",borderColor:"{sky.400}",hoverBorderColor:"{sky.300}",activeBorderColor:"{sky.200}",color:"{sky.950}",hoverColor:"{sky.950}",activeColor:"{sky.950}",focusRing:{color:"{sky.400}",shadow:"none"}},success:{background:"{green.400}",hoverBackground:"{green.300}",activeBackground:"{green.200}",borderColor:"{green.400}",hoverBorderColor:"{green.300}",activeBorderColor:"{green.200}",color:"{green.950}",hoverColor:"{green.950}",activeColor:"{green.950}",focusRing:{color:"{green.400}",shadow:"none"}},warn:{background:"{orange.400}",hoverBackground:"{orange.300}",activeBackground:"{orange.200}",borderColor:"{orange.400}",hoverBorderColor:"{orange.300}",activeBorderColor:"{orange.200}",color:"{orange.950}",hoverColor:"{orange.950}",activeColor:"{orange.950}",focusRing:{color:"{orange.400}",shadow:"none"}},help:{background:"{purple.400}",hoverBackground:"{purple.300}",activeBackground:"{purple.200}",borderColor:"{purple.400}",hoverBorderColor:"{purple.300}",activeBorderColor:"{purple.200}",color:"{purple.950}",hoverColor:"{purple.950}",activeColor:"{purple.950}",focusRing:{color:"{purple.400}",shadow:"none"}},danger:{background:"{red.400}",hoverBackground:"{red.300}",activeBackground:"{red.200}",borderColor:"{red.400}",hoverBorderColor:"{red.300}",activeBorderColor:"{red.200}",color:"{red.950}",hoverColor:"{red.950}",activeColor:"{red.950}",focusRing:{color:"{red.400}",shadow:"none"}},contrast:{background:"{surface.0}",hoverBackground:"{surface.100}",activeBackground:"{surface.200}",borderColor:"{surface.0}",hoverBorderColor:"{surface.100}",activeBorderColor:"{surface.200}",color:"{surface.950}",hoverColor:"{surface.950}",activeColor:"{surface.950}",focusRing:{color:"{surface.0}",shadow:"none"}}},outlined:{primary:{hoverBackground:"color-mix(in srgb, {primary.color}, transparent 96%)",activeBackground:"color-mix(in srgb, {primary.color}, transparent 84%)",borderColor:"{primary.700}",color:"{primary.color}"},secondary:{hoverBackground:"rgba(255,255,255,0.04)",activeBackground:"rgba(255,255,255,0.16)",borderColor:"{surface.700}",color:"{surface.400}"},success:{hoverBackground:"color-mix(in srgb, {green.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {green.400}, transparent 84%)",borderColor:"{green.700}",color:"{green.400}"},info:{hoverBackground:"color-mix(in srgb, {sky.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {sky.400}, transparent 84%)",borderColor:"{sky.700}",color:"{sky.400}"},warn:{hoverBackground:"color-mix(in srgb, {orange.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {orange.400}, transparent 84%)",borderColor:"{orange.700}",color:"{orange.400}"},help:{hoverBackground:"color-mix(in srgb, {purple.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {purple.400}, transparent 84%)",borderColor:"{purple.700}",color:"{purple.400}"},danger:{hoverBackground:"color-mix(in srgb, {red.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {red.400}, transparent 84%)",borderColor:"{red.700}",color:"{red.400}"},contrast:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{surface.500}",color:"{surface.0}"},plain:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{surface.600}",color:"{surface.0}"}},text:{primary:{hoverBackground:"color-mix(in srgb, {primary.color}, transparent 96%)",activeBackground:"color-mix(in srgb, {primary.color}, transparent 84%)",color:"{primary.color}"},secondary:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{surface.400}"},success:{hoverBackground:"color-mix(in srgb, {green.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {green.400}, transparent 84%)",color:"{green.400}"},info:{hoverBackground:"color-mix(in srgb, {sky.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {sky.400}, transparent 84%)",color:"{sky.400}"},warn:{hoverBackground:"color-mix(in srgb, {orange.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {orange.400}, transparent 84%)",color:"{orange.400}"},help:{hoverBackground:"color-mix(in srgb, {purple.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {purple.400}, transparent 84%)",color:"{purple.400}"},danger:{hoverBackground:"color-mix(in srgb, {red.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {red.400}, transparent 84%)",color:"{red.400}"},contrast:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{surface.0}"},plain:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{surface.0}"}},link:{color:"{primary.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"}}},css:({dt:e})=>`
.p-button:focus-visible {
    background: ${e("button.primary.active.background")};
    border-color: ${e("button.primary.active.background")};
}

.p-button-secondary:focus-visible {
    background: ${e("button.secondary.active.background")};
    border-color: ${e("button.secondary.active.background")};
}

.p-button-success:focus-visible {
    background: ${e("button.success.active.background")};
    border-color: ${e("button.success.active.background")};
}

.p-button-info:focus-visible {
    background: ${e("button.info.active.background")};
    border-color: ${e("button.info.active.background")};
}

.p-button-warn:focus-visible {
    background: ${e("button.warn.active.background")};
    border-color: ${e("button.warn.active.background")};
}

.p-button-help:focus-visible {
    background: ${e("button.help.active.background")};
    border-color: ${e("button.help.active.background")};
}

.p-button-danger:focus-visible {
    background: ${e("button.danger.active.background")};
    border-color: ${e("button.danger.active.background")};
}

.p-button-contrast:focus-visible {
    background: ${e("button.contrast.active.background")};
    border-color: ${e("button.contrast.active.background")};
}

.p-button-link:focus-visible {
    background: color-mix(in srgb, ${e("primary.color")}, transparent 84%);
    border-color: transparent;
}

.p-button-text:focus-visible {
    background: ${e("button.text.primary.active.background")};
    border-color: transparent;
}

.p-button-secondary.p-button-text:focus-visible {
    background: ${e("button.text.secondary.active.background")};
    border-color: transparent;
}

.p-button-success.p-button-text:focus-visible {
    background: ${e("button.text.success.active.background")};
    border-color: transparent;
}

.p-button-info.p-button-text:focus-visible {
    background: ${e("button.text.info.active.background")};
    border-color: transparent;
}

.p-button-warn.p-button-text:focus-visible {
    background: ${e("button.text.warn.active.background")};
    border-color: transparent;
}

.p-button-help.p-button-text:focus-visible {
    background: ${e("button.text.help.active.background")};
    border-color: transparent;
}

.p-button-danger.p-button-text:focus-visible {
    background: ${e("button.text.danger.active.background")};
    border-color: transparent;
}

.p-button-contrast.p-button-text:focus-visible {
    background: ${e("button.text.contrast.active.background")};
    border-color: transparent;
}

.p-button-plain.p-button-text:focus-visible {
    background: ${e("button.text.plain.active.background")};
    border-color: transparent;
}

.p-button-outlined:focus-visible {
    background: ${e("button.outlined.primary.active.background")};
}

.p-button-secondary.p-button-outlined:focus-visible {
    background: ${e("button.outlined.secondary.active.background")};
    border-color: ${e("button.outlined.secondary.border.color")};
}

.p-button-success.p-button-outlined:focus-visible {
    background: ${e("button.outlined.success.active.background")};
}

.p-button-info.p-button-outlined:focus-visible {
    background: ${e("button.outlined.info.active.background")};
}

.p-button-warn.p-button-outlined:focus-visible {
    background: ${e("button.outlined.warn.active.background")};
}

.p-button-help.p-button-outlined:focus-visible {
    background: ${e("button.outlined.help.active.background")};
}

.p-button-danger.p-button-outlined:focus-visible {
    background: ${e("button.outlined.danger.active.background")};
}

.p-button-contrast.p-button-outlined:focus-visible {
    background: ${e("button.outlined.contrast.active.background")};
}

.p-button-plain.p-button-outlined:focus-visible {
    background: ${e("button.outlined.plain.active.background")};
}
`};var vd={root:{background:"{content.background}",borderRadius:"{content.border.radius}",color:"{content.color}",shadow:"0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12)"},body:{padding:"1.5rem",gap:"0.75rem"},caption:{gap:"0.5rem"},title:{fontSize:"1.25rem",fontWeight:"500"},subtitle:{color:"{text.muted.color}"}};var yd={root:{transitionDuration:"{transition.duration}"},content:{gap:"0.25rem"},indicatorList:{padding:"1rem",gap:"1rem"},indicator:{width:"1.25rem",height:"1.25rem",borderRadius:"50%",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"}},colorScheme:{light:{indicator:{background:"{surface.200}",hoverBackground:"{surface.300}",activeBackground:"{primary.color}"}},dark:{indicator:{background:"{surface.700}",hoverBackground:"{surface.600}",activeBackground:"{primary.color}"}}},css:({dt:e})=>`
.p-carousel-indicator-button:hover {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("text.color")}, transparent 96%)
}

.p-carousel-indicator-button:focus-visible {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("text.color")}, transparent 96%);
}

.p-carousel-indicator-active .p-carousel-indicator-button:hover {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("carousel.indicator.active.background")}, transparent 92%);
}

.p-carousel-indicator-active .p-carousel-indicator-button:focus-visible {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("carousel.indicator.active.background")}, transparent 84%);
}
`};var _d={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},dropdown:{width:"2.5rem",color:"{form.field.icon.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},list:{padding:"{list.padding}",gap:"{list.gap}",mobileIndent:"1rem"},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}",icon:{color:"{list.option.icon.color}",focusColor:"{list.option.icon.focus.color}",size:"0.875rem"}},clearIcon:{color:"{form.field.icon.color}"},css:({dt:e})=>`
.p-cascadeselect.p-variant-filled {
    border-end-start-radius: 0
    border-end-end-radius: 0;
    border: 1px solid transparent;
    background: ${e("cascadeselect.filled.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("cascadeselect.focus.border.color")}, ${e("cascadeselect.focus.border.color")}), linear-gradient(to bottom, ${e("cascadeselect.border.color")}, ${e("cascadeselect.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
}

.p-cascadeselect.p-variant-filled:not(.p-disabled):hover {
    background: ${e("cascadeselect.filled.hover.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("cascadeselect.focus.border.color")}, ${e("cascadeselect.focus.border.color")}), linear-gradient(to bottom, ${e("cascadeselect.hover.border.color")}, ${e("cascadeselect.hover.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-cascadeselect.p-variant-filled:not(.p-disabled).p-focus {
    outline: 0 none;
    background: ${e("cascadeselect.filled.focus.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("cascadeselect.focus.border.color")}, ${e("cascadeselect.focus.border.color")}), linear-gradient(to bottom, ${e("cascadeselect.border.color")}, ${e("cascadeselect.border.color")});
    background-size: 100% 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-cascadeselect.p-variant-filled:not(.p-disabled).p-focus:hover {
    background-image: linear-gradient(to bottom, ${e("cascadeselect.focus.border.color")}, ${e("cascadeselect.focus.border.color")}), linear-gradient(to bottom, ${e("cascadeselect.hover.border.color")}, ${e("cascadeselect.hover.border.color")});
}

.p-cascadeselect.p-variant-filled.p-invalid {
    background-image: linear-gradient(to bottom, ${e("cascadeselect.invalid.border.color")}, ${e("cascadeselect.invalid.border.color")}), linear-gradient(to bottom, ${e("cascadeselect.invalid.border.color")}, ${e("cascadeselect.invalid.border.color")});
}

.p-cascadeselect.p-variant-filled.p-invalid:not(.p-disabled).p-focus  {
    background-image: linear-gradient(to bottom, ${e("cascadeselect.invalid.border.color")}, ${e("cascadeselect.invalid.border.color")}), linear-gradient(to bottom, ${e("cascadeselect.invalid.border.color")}, ${e("cascadeselect.invalid.border.color")});
}

.p-cascadeselect-option {
    transition: none;
}
`};var xd={root:{borderRadius:"{border.radius.xs}",width:"18px",height:"18px",background:"{form.field.background}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.color}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",checkedBorderColor:"{primary.color}",checkedHoverBorderColor:"{primary.color}",checkedFocusBorderColor:"{primary.color}",checkedDisabledBorderColor:"{form.field.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",shadow:"{form.field.shadow}",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"},transitionDuration:"{form.field.transition.duration}",sm:{width:"14px",height:"14px"},lg:{width:"22px",height:"22px"}},icon:{size:"0.875rem",color:"{form.field.color}",checkedColor:"{primary.contrast.color}",checkedHoverColor:"{primary.contrast.color}",disabledColor:"{form.field.disabled.color}",sm:{size:"0.75rem"},lg:{size:"1rem"}},css:({dt:e})=>`
.p-checkbox {
    border-radius: 50%;
    transition: box-shadow ${e("checkbox.transition.duration")};
}

.p-checkbox-box {
    border-width: 2px;
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("text.color")}, transparent 96%);
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("text.color")}, transparent 88%);
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("checkbox.checked.background")}, transparent 92%);
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("checkbox.checked.background")}, transparent 84%);
}

.p-checkbox-checked .p-checkbox-box:before  {
    content: "";
    position: absolute;
    top: var(--p-md-check-icon-t);
    left: 2px;
    border-right: 2px solid transparent;
    border-bottom: 2px solid transparent;
    transform: rotate(45deg);
    transform-origin: 0% 100%;
    animation: p-md-check 125ms 50ms linear forwards;
}

.p-checkbox-checked .p-checkbox-icon {
    display: none;
}

.p-checkbox {
    --p-md-check-icon-t: 10px;
    --p-md-check-icon-w: 6px;
    --p-md-check-icon-h: 12px;
}

.p-checkbox-sm {
    --p-md-check-icon-t: 8px;
    --p-md-check-icon-w: 4px;
    --p-md-check-icon-h: 10px;
}

.p-checkbox-lg {
    --p-md-check-icon-t: 12px;
    --p-md-check-icon-w: 8px;
    --p-md-check-icon-h: 16px;
}

@keyframes p-md-check {
    0%{
      width: 0;
      height: 0;
      border-color: ${e("checkbox.icon.checked.color")};
      transform: translate3d(0,0,0) rotate(45deg);
    }
    33%{
      width: var(--p-md-check-icon-w);
      height: 0;
      transform: translate3d(0,0,0) rotate(45deg);
    }
    100%{
      width: var(--p-md-check-icon-w);
      height: var(--p-md-check-icon-h);
      border-color: ${e("checkbox.icon.checked.color")};
      transform: translate3d(0,calc(-1 * var(--p-md-check-icon-h)),0) rotate(45deg);
    }
}
`};var Cd={root:{borderRadius:"2rem",paddingX:"0.75rem",paddingY:"0.75rem",gap:"0.5rem",transitionDuration:"{transition.duration}"},image:{width:"2.25rem",height:"2.25rem"},icon:{size:"1rem"},removeIcon:{size:"1rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}"}},colorScheme:{light:{root:{background:"{surface.200}",color:"{surface.900}"},icon:{color:"{surface.600}"},removeIcon:{color:"{surface.600}",focusRing:{shadow:"0 0 1px 4px {surface.300}"}}},dark:{root:{background:"{surface.700}",color:"{surface.0}"},icon:{color:"{surface.0}"},removeIcon:{color:"{surface.0}",focusRing:{shadow:"0 0 1px 4px {surface.600}"}}}}};var wd={root:{transitionDuration:"{transition.duration}"},preview:{width:"2rem",height:"2rem",borderRadius:"{form.field.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},panel:{shadow:"{overlay.popover.shadow}",borderRadius:"{overlay.popover.borderRadius}"},colorScheme:{light:{panel:{background:"{surface.800}",borderColor:"{surface.900}"},handle:{color:"{surface.0}"}},dark:{panel:{background:"{surface.900}",borderColor:"{surface.700}"},handle:{color:"{surface.0}"}}}};var Id={icon:{size:"2rem",color:"{overlay.modal.color}"},content:{gap:"1rem"}};var Sd={root:{background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",color:"{overlay.popover.color}",borderRadius:"{overlay.popover.border.radius}",shadow:"{overlay.popover.shadow}",gutter:"10px",arrowOffset:"1.25rem"},content:{padding:"{overlay.popover.padding}",gap:"1rem"},icon:{size:"1.5rem",color:"{overlay.popover.color}"},footer:{gap:"0.5rem",padding:"0 {overlay.popover.padding} {overlay.popover.padding} {overlay.popover.padding}"}};var kd={root:{background:"{content.background}",borderColor:"transparent",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",transitionDuration:"{transition.duration}"},list:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},item:{focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},submenu:{mobileIndent:"1rem"},submenuIcon:{size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},separator:{borderColor:"{content.border.color}"}};var Td={root:{transitionDuration:"{transition.duration}"},header:{background:"{content.background}",borderColor:"{datatable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem"},headerCell:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",borderColor:"{datatable.border.color}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",gap:"0.5rem",padding:"0.75rem 1rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},columnTitle:{fontWeight:"600"},row:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},bodyCell:{borderColor:"{datatable.border.color}",padding:"0.75rem 1rem"},footerCell:{background:"{content.background}",borderColor:"{datatable.border.color}",color:"{content.color}",padding:"0.75rem 1rem"},columnFooter:{fontWeight:"600"},footer:{background:"{content.background}",borderColor:"{datatable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem"},dropPoint:{color:"{primary.color}"},columnResizerWidth:"0.5rem",resizeIndicator:{width:"1px",color:"{primary.color}"},sortIcon:{color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",size:"0.875rem"},loadingIcon:{size:"2rem"},rowToggleButton:{hoverBackground:"{content.hover.background}",selectedHoverBackground:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}",selectedHoverColor:"{primary.color}",size:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},filter:{inlineGap:"0.5rem",overlaySelect:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},overlayPopover:{background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",borderRadius:"{overlay.popover.border.radius}",color:"{overlay.popover.color}",shadow:"{overlay.popover.shadow}",padding:"{overlay.popover.padding}",gap:"0.5rem"},rule:{borderColor:"{content.border.color}"},constraintList:{padding:"{list.padding}",gap:"{list.gap}"},constraint:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",separator:{borderColor:"{content.border.color}"},padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"}},paginatorTop:{borderColor:"{datatable.border.color}",borderWidth:"0 0 1px 0"},paginatorBottom:{borderColor:"{datatable.border.color}",borderWidth:"0 0 1px 0"},colorScheme:{light:{root:{borderColor:"{content.border.color}"},row:{stripedBackground:"{surface.50}"},bodyCell:{selectedBorderColor:"{primary.100}"}},dark:{root:{borderColor:"{surface.800}"},row:{stripedBackground:"{surface.950}"},bodyCell:{selectedBorderColor:"{primary.900}"}}},css:({dt:e})=>`
.p-datatable-header-cell,
.p-datatable-tbody > tr {
    transition: none
}
`};var Ed={root:{borderColor:"transparent",borderWidth:"0",borderRadius:"0",padding:"0"},header:{background:"{content.background}",color:"{content.color}",borderColor:"{content.border.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem",borderRadius:"0"},content:{background:"{content.background}",color:"{content.color}",borderColor:"transparent",borderWidth:"0",padding:"0",borderRadius:"0"},footer:{background:"{content.background}",color:"{content.color}",borderColor:"{content.border.color}",borderWidth:"1px 0 0 0",padding:"0.75rem 1rem",borderRadius:"0"},paginatorTop:{borderColor:"{content.border.color}",borderWidth:"0 0 1px 0"},paginatorBottom:{borderColor:"{content.border.color}",borderWidth:"1px 0 0 0"}};var Rd={root:{transitionDuration:"{transition.duration}"},panel:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.popover.shadow}",padding:"0.5rem"},header:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",padding:"0 0 0.5rem 0"},title:{gap:"0.5rem",fontWeight:"700"},dropdown:{width:"3rem",sm:{width:"2.5rem"},lg:{width:"3.5rem"},borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",borderRadius:"{form.field.border.radius}",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"n\u0131ne"}},inputIcon:{color:"{form.field.icon.color}"},selectMonth:{hoverBackground:"{content.hover.background}",color:"{content.color}",hoverColor:"{content.hover.color}",padding:"0.5rem 0.75rem",borderRadius:"{content.border.radius}"},selectYear:{hoverBackground:"{content.hover.background}",color:"{content.color}",hoverColor:"{content.hover.color}",padding:"0.5rem 0.75rem",borderRadius:"{content.border.radius}"},group:{borderColor:"{content.border.color}",gap:"{overlay.popover.padding}"},dayView:{margin:"0.5rem 0 0 0"},weekDay:{padding:"0.5rem",fontWeight:"700",color:"{content.color}"},date:{hoverBackground:"{content.hover.background}",selectedBackground:"{primary.color}",rangeSelectedBackground:"{highlight.background}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{primary.contrast.color}",rangeSelectedColor:"{highlight.color}",width:"2.5rem",height:"2.5rem",borderRadius:"50%",padding:"0.125rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},monthView:{margin:"0.5rem 0 0 0"},month:{padding:"0.625rem",borderRadius:"{content.border.radius}"},yearView:{margin:"0.5rem 0 0 0"},year:{padding:"0.625rem",borderRadius:"{content.border.radius}"},buttonbar:{padding:"0.5rem 0 0 0",borderColor:"{content.border.color}"},timePicker:{padding:"0.5rem 0 0 0",borderColor:"{content.border.color}",gap:"0.5rem",buttonGap:"0.25rem"},colorScheme:{light:{dropdown:{background:"{surface.100}",hoverBackground:"{surface.200}",activeBackground:"{surface.300}",color:"{surface.600}",hoverColor:"{surface.700}",activeColor:"{surface.800}"},today:{background:"{surface.200}",color:"{surface.900}"}},dark:{dropdown:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.600}",color:"{surface.300}",hoverColor:"{surface.200}",activeColor:"{surface.100}"},today:{background:"{surface.700}",color:"{surface.0}"}}},css:({dt:e})=>`
.p-datepicker-header {
    justify-content: start
}

.p-datepicker-title {
    order: 1;
}

.p-datepicker-prev-button {
    order: 2;
    margin-inline-start: auto;
}

.p-datepicker-next-button {
    order: 2;
    margin-inline-start: 0.5rem;
}

.p-datepicker-select-month:focus-visible {
    background: ${e("datepicker.select.month.hover.background")};
    color: ${e("datepicker.select.month.hover.color")};
    outline: 0 none;
}

.p-datepicker-select-year:focus-visible {
    background: ${e("datepicker.select.year.hover.background")};
    color: ${e("datepicker.select.year.hover.color")};
    outline: 0 none;
}

.p-datepicker-dropdown:focus-visible {
    outline: 0 none;
    background: ${e("datepicker.dropdown.hover.background")};
    border-color: ${e("datepicker.dropdown.hover.border.color")};
    color: ${e("datepicker.dropdown.hover.color")};
}

.p-datepicker:has(.p-variant-filled) .p-datepicker-dropdown {
    border-top-color: transparent;
    border-right-color: transparent;
}
`};var Dd={root:{background:"{overlay.modal.background}",borderColor:"{overlay.modal.border.color}",color:"{overlay.modal.color}",borderRadius:"{overlay.modal.border.radius}",shadow:"{overlay.modal.shadow}"},header:{padding:"{overlay.modal.padding}",gap:"0.5rem"},title:{fontSize:"1.25rem",fontWeight:"600"},content:{padding:"0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}"},footer:{padding:"0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}",gap:"0.5rem"}};var $d={root:{borderColor:"{content.border.color}"},content:{background:"{content.background}",color:"{text.color}"},horizontal:{margin:"1rem 0",padding:"0 1rem",content:{padding:"0 0.5rem"}},vertical:{margin:"0 1rem",padding:"0.5rem 0",content:{padding:"0.5rem 0"}}};var Ad={root:{background:"rgba(255, 255, 255, 0.1)",borderColor:"rgba(255, 255, 255, 0.2)",padding:"0.5rem",borderRadius:"{border.radius.xl}"},item:{borderRadius:"{content.border.radius}",padding:"0.5rem",size:"3rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}};var Od={root:{background:"{overlay.modal.background}",borderColor:"{overlay.modal.border.color}",color:"{overlay.modal.color}",shadow:"{overlay.modal.shadow}"},header:{padding:"{overlay.modal.padding}"},title:{fontSize:"1.5rem",fontWeight:"600"},content:{padding:"0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}"},footer:{padding:"{overlay.modal.padding}"}};var Md={toolbar:{background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}"},toolbarItem:{color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}",padding:"{list.padding}"},overlayOption:{focusBackground:"{list.option.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},content:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}"},css:({dt:e})=>`
.p-editor .p-editor-toolbar {
    padding: 0.75rem
}
`};var Bd={root:{background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",padding:"0 1.25rem 1.25rem 1.25rem",transitionDuration:"{transition.duration}"},legend:{background:"{content.background}",hoverBackground:"{content.hover.background}",color:"{content.color}",hoverColor:"{content.hover.color}",borderRadius:"{content.border.radius}",borderWidth:"1px",borderColor:"transparent",padding:"0.75rem 1rem",gap:"0.5rem",fontWeight:"600",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"}},toggleIcon:{color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}"},content:{padding:"0"},css:({dt:e})=>`
.p-fieldset-toggle-button:focus-visible {
    background: ${e("navigation.item.active.background")}

}
`};var Fd={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",transitionDuration:"{transition.duration}"},header:{background:"transparent",color:"{text.color}",padding:"1.25rem",borderColor:"unset",borderWidth:"0",borderRadius:"0",gap:"0.5rem"},content:{highlightBorderColor:"{primary.color}",padding:"0 1.25rem 1.25rem 1.25rem",gap:"1rem"},file:{padding:"1rem",gap:"1rem",borderColor:"{content.border.color}",info:{gap:"0.5rem"}},fileList:{gap:"0.5rem"},progressbar:{height:"0.25rem"},basic:{gap:"0.5rem"}};var Ld={root:{color:"{form.field.float.label.color}",focusColor:"{form.field.float.label.focus.color}",activeColor:"{form.field.float.label.active.color}",invalidColor:"{form.field.float.label.invalid.color}",transitionDuration:"0.2s",positionX:"{form.field.padding.x}",positionY:"{form.field.padding.y}",fontWeight:"500",active:{fontSize:"0.75rem",fontWeight:"400"}},over:{active:{top:"-1.25rem"}},in:{input:{paddingTop:"1.5rem",paddingBottom:"0.5rem"},active:{top:"0.5rem"}},on:{borderRadius:"{border.radius.xs}",active:{background:"{form.field.background}",padding:"0 0.125rem"}}};var Pd={root:{borderWidth:"1px",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",transitionDuration:"{transition.duration}"},navButton:{background:"rgba(255, 255, 255, 0.1)",hoverBackground:"rgba(255, 255, 255, 0.2)",color:"{surface.100}",hoverColor:"{surface.0}",size:"3rem",gutter:"0.5rem",prev:{borderRadius:"50%"},next:{borderRadius:"50%"},focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},navIcon:{size:"1.5rem"},thumbnailsContent:{background:"{content.background}",padding:"1rem 0.25rem"},thumbnailNavButton:{size:"2rem",borderRadius:"50%",gutter:"0.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},thumbnailNavButtonIcon:{size:"1rem"},caption:{background:"rgba(0, 0, 0, 0.5)",color:"{surface.100}",padding:"1rem"},indicatorList:{gap:"0.5rem",padding:"1rem"},indicatorButton:{width:"1rem",height:"1rem",activeBackground:"{primary.color}",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},insetIndicatorList:{background:"rgba(0, 0, 0, 0.5)"},insetIndicatorButton:{background:"rgba(255, 255, 255, 0.4)",hoverBackground:"rgba(255, 255, 255, 0.6)",activeBackground:"rgba(255, 255, 255, 0.9)"},closeButton:{size:"3rem",gutter:"0.5rem",background:"rgba(255, 255, 255, 0.1)",hoverBackground:"rgba(255, 255, 255, 0.2)",color:"{surface.50}",hoverColor:"{surface.0}",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},closeButtonIcon:{size:"1.5rem"},colorScheme:{light:{thumbnailNavButton:{hoverBackground:"{surface.100}",color:"{surface.600}",hoverColor:"{surface.700}"},indicatorButton:{background:"{surface.200}",hoverBackground:"{surface.300}"}},dark:{thumbnailNavButton:{hoverBackground:"{surface.700}",color:"{surface.400}",hoverColor:"{surface.0}"},indicatorButton:{background:"{surface.700}",hoverBackground:"{surface.600}"}}}};var Nd={icon:{color:"{form.field.icon.color}"}};var Vd={root:{color:"{form.field.float.label.color}",focusColor:"{form.field.float.label.focus.color}",invalidColor:"{form.field.float.label.invalid.color}",transitionDuration:"0.2s",positionX:"{form.field.padding.x}",top:"0.5rem",fontSize:"0.75rem",fontWeight:"400"},input:{paddingTop:"1.5rem",paddingBottom:"0.5rem"}};var Hd={root:{transitionDuration:"{transition.duration}"},preview:{icon:{size:"1.5rem"},mask:{background:"{mask.background}",color:"{mask.color}"}},toolbar:{position:{left:"auto",right:"1rem",top:"1rem",bottom:"auto"},blur:"8px",background:"rgba(255,255,255,0.1)",borderColor:"rgba(255,255,255,0.2)",borderWidth:"1px",borderRadius:"30px",padding:".5rem",gap:"0.5rem"},action:{hoverBackground:"rgba(255,255,255,0.1)",color:"{surface.50}",hoverColor:"{surface.0}",size:"3rem",iconSize:"1.5rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}};var zd={handle:{size:"20px",hoverSize:"40px",background:"rgba(255,255,255,0.4)",hoverBackground:"rgba(255,255,255,0.6)",borderColor:"unset",hoverBorderColor:"unset",borderWidth:"0",borderRadius:"50%",transitionDuration:"{transition.duration}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"rgba(255,255,255,0.3)",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}};var jd={root:{padding:"{form.field.padding.y} {form.field.padding.x}",borderRadius:"{content.border.radius}",gap:"0.5rem"},text:{fontWeight:"500"},icon:{size:"1rem"},colorScheme:{light:{info:{background:"color-mix(in srgb, {blue.50}, transparent 5%)",borderColor:"{blue.200}",color:"{blue.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"},success:{background:"color-mix(in srgb, {green.50}, transparent 5%)",borderColor:"{green.200}",color:"{green.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)"},warn:{background:"color-mix(in srgb,{yellow.50}, transparent 5%)",borderColor:"{yellow.200}",color:"{yellow.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)"},error:{background:"color-mix(in srgb, {red.50}, transparent 5%)",borderColor:"{red.200}",color:"{red.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"},secondary:{background:"{surface.100}",borderColor:"{surface.200}",color:"{surface.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"},contrast:{background:"{surface.900}",borderColor:"{surface.950}",color:"{surface.50}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"}},dark:{info:{background:"color-mix(in srgb, {blue.500}, transparent 84%)",borderColor:"color-mix(in srgb, {blue.700}, transparent 64%)",color:"{blue.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",borderColor:"color-mix(in srgb, {green.700}, transparent 64%)",color:"{green.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)"},warn:{background:"color-mix(in srgb, {yellow.500}, transparent 84%)",borderColor:"color-mix(in srgb, {yellow.700}, transparent 64%)",color:"{yellow.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)"},error:{background:"color-mix(in srgb, {red.500}, transparent 84%)",borderColor:"color-mix(in srgb, {red.700}, transparent 64%)",color:"{red.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"},secondary:{background:"{surface.800}",borderColor:"{surface.700}",color:"{surface.300}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"},contrast:{background:"{surface.0}",borderColor:"{surface.100}",color:"{surface.950}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"}}}};var Ud={root:{padding:"{form.field.padding.y} {form.field.padding.x}",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{transition.duration}"},display:{hoverBackground:"{content.hover.background}",hoverColor:"{content.hover.color}"}};var Wd={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}"},chip:{borderRadius:"{border.radius.sm}"},colorScheme:{light:{chip:{focusBackground:"{surface.200}",color:"{surface.800}"}},dark:{chip:{focusBackground:"{surface.700}",color:"{surface.0}"}}}};var Gd={addon:{background:"{form.field.background}",borderColor:"{form.field.border.color}",color:"{form.field.icon.color}",borderRadius:"{form.field.border.radius}",padding:"0.75rem",minWidth:"3rem"},css:({dt:e})=>`
.p-inputgroup:has(.p-variant-filled) .p-inputgroupaddon {
    border-block-start-color: ${e("inputtext.filled.background")};
    border-inline-color: ${e("inputtext.filled.background")};
    background: ${e("inputtext.filled.background")} no-repeat;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
}
    `};var qd={root:{transitionDuration:"{transition.duration}"},button:{width:"3rem",borderRadius:"{form.field.border.radius}",verticalPadding:"{form.field.padding.y}"},colorScheme:{light:{button:{background:"transparent",hoverBackground:"{surface.100}",activeBackground:"{surface.200}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",color:"{surface.400}",hoverColor:"{surface.500}",activeColor:"{surface.600}"}},dark:{button:{background:"transparent",hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",color:"{surface.400}",hoverColor:"{surface.300}",activeColor:"{surface.200}"}}},css:({dt:e})=>`
.p-inputnumber-stacked .p-inputnumber-button-group {
    top: 2px;
    right: 2px;
    height: calc(100% - 4px);
}

.p-inputnumber-horizontal:has(.p-variant-filled) .p-inputnumber-button {
    border-block-start-color: ${e("inputtext.filled.background")};
    border-inline-color: ${e("inputtext.filled.background")};
    background: ${e("inputtext.filled.background")} no-repeat;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
} 
    
.p-inputnumber-vertical:has(.p-variant-filled) .p-inputnumber-button {
    border-block-color: ${e("inputtext.filled.background")};
    border-inline-color: ${e("inputtext.filled.background")};
    background: ${e("inputtext.filled.background")} no-repeat;
} 

.p-inputnumber-vertical:has(.p-variant-filled) .p-inputnumber-increment-button {
    border-block-end: 1px solid ${e("inputtext.border.color")}
}
`};var Qd={root:{gap:"0.5rem"},input:{width:"3rem",sm:{width:"2.5rem"},lg:{width:"3.5rem"}}};var Kd={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},css:({dt:e})=>`
.p-inputtext.p-variant-filled {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border: 1px solid transparent;
    background: ${e("inputtext.filled.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("inputtext.focus.border.color")}, ${e("inputtext.focus.border.color")}), linear-gradient(to bottom, ${e("inputtext.border.color")}, ${e("inputtext.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
}

.p-inputtext.p-variant-filled:enabled:hover {
    background: ${e("inputtext.filled.hover.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("inputtext.focus.border.color")}, ${e("inputtext.focus.border.color")}), linear-gradient(to bottom, ${e("inputtext.hover.border.color")}, ${e("inputtext.hover.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-inputtext.p-variant-filled:enabled:focus {
    outline: 0 none;
    background: ${e("inputtext.filled.focus.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("inputtext.focus.border.color")}, ${e("inputtext.focus.border.color")}), linear-gradient(to bottom, ${e("inputtext.border.color")}, ${e("inputtext.border.color")});
    background-size: 100% 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-inputtext.p-variant-filled:enabled:hover:focus {
    background-image: linear-gradient(to bottom, ${e("inputtext.focus.border.color")}, ${e("inputtext.focus.border.color")}), linear-gradient(to bottom, ${e("inputtext.hover.border.color")}, ${e("inputtext.hover.border.color")});
}

.p-inputtext.p-variant-filled.p-invalid {
    background-image: linear-gradient(to bottom, ${e("inputtext.invalid.border.color")}, ${e("inputtext.invalid.border.color")}), linear-gradient(to bottom, ${e("inputtext.invalid.border.color")}, ${e("inputtext.invalid.border.color")});
}

.p-inputtext.p-variant-filled.p-invalid:enabled:focus {
    background-image: linear-gradient(to bottom, ${e("inputtext.invalid.border.color")}, ${e("inputtext.invalid.border.color")}), linear-gradient(to bottom, ${e("inputtext.invalid.border.color")}, ${e("inputtext.invalid.border.color")});
}
`};var Yd={root:{transitionDuration:"{transition.duration}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},value:{background:"{primary.color}"},range:{background:"{content.border.color}"},text:{color:"{text.muted.color}"}};var Zd={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",borderColor:"{form.field.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",shadow:"{form.field.shadow}",borderRadius:"{form.field.border.radius}",transitionDuration:"{form.field.transition.duration}"},list:{padding:"{list.padding}",gap:"{list.gap}",header:{padding:"{list.header.padding}"}},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},optionGroup:{background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},checkmark:{color:"{list.option.color}",gutterStart:"-0.375rem",gutterEnd:"0.375rem"},emptyMessage:{padding:"{list.option.padding}"},colorScheme:{light:{option:{stripedBackground:"{surface.50}"}},dark:{option:{stripedBackground:"{surface.900}"}}},css:({dt:e})=>`
.p-listbox-option {
    transition: none
}
`};var Xd={root:{background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",gap:"0.5rem",verticalOrientation:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},horizontalOrientation:{padding:"0.5rem 0.75rem",gap:"0.5rem"},transitionDuration:"{transition.duration}"},baseItem:{borderRadius:"{content.border.radius}",padding:"{navigation.item.padding}"},item:{focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},overlay:{padding:"0",background:"{content.background}",borderColor:"transparent",borderRadius:"{content.border.radius}",color:"{content.color}",shadow:"{overlay.navigation.shadow}",gap:"0.5rem"},submenu:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},submenuLabel:{padding:"{navigation.submenu.label.padding}",fontWeight:"{navigation.submenu.label.font.weight}",background:"{navigation.submenu.label.background.}",color:"{navigation.submenu.label.color}"},submenuIcon:{size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},separator:{borderColor:"{content.border.color}"},mobileButton:{borderRadius:"50%",size:"2.5rem",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",hoverBackground:"{content.hover.background}",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"}},css:({dt:e})=>`
.p-megamenu-button:focus-visible {
    background: ${e("navigation.item.active.background")}
}
`};var Jd={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",transitionDuration:"{transition.duration}"},list:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},item:{focusBackground:"{navigation.item.focus.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}"}},submenuLabel:{padding:"{navigation.submenu.label.padding}",fontWeight:"{navigation.submenu.label.font.weight}",background:"{navigation.submenu.label.background}",color:"{navigation.submenu.label.color}"},separator:{borderColor:"{content.border.color}"},css:({dt:e})=>`
.p-menu-overlay {
    border-color: transparent
}
`};var eu={root:{background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",gap:"0.5rem",padding:"0.5rem 0.75rem",transitionDuration:"{transition.duration}"},baseItem:{borderRadius:"{content.border.radius}",padding:"{navigation.item.padding}"},item:{focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},submenu:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}",background:"{content.background}",borderColor:"transparent",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",mobileIndent:"1rem",icon:{size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"}},separator:{borderColor:"{content.border.color}"},mobileButton:{borderRadius:"50%",size:"2.5rem",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",hoverBackground:"{content.hover.background}",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"}},css:({dt:e})=>`
.p-menubar-button:focus-visible {
    background: ${e("navigation.item.active.background")}
}
`};var tu={root:{borderRadius:"{content.border.radius}",borderWidth:"0",transitionDuration:"{transition.duration}"},content:{padding:"1rem 1.25rem",gap:"0.5rem",sm:{padding:"0.625rem 0.625rem"},lg:{padding:"0.825rem 0.825rem"}},text:{fontSize:"1rem",fontWeight:"500",sm:{fontSize:"0.875rem"},lg:{fontSize:"1.125rem"}},icon:{size:"1.25rem",sm:{size:"1rem"},lg:{size:"1.5rem"}},closeButton:{width:"2rem",height:"2rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",offset:"{focus.ring.offset}"}},closeIcon:{size:"1rem",sm:{fontSize:"0.875rem"},lg:{fontSize:"1.125rem"}},outlined:{root:{borderWidth:"1px"}},simple:{content:{padding:"0"}},colorScheme:{light:{info:{background:"color-mix(in srgb, {blue.50}, transparent 5%)",borderColor:"{blue.200}",color:"{blue.600}",shadow:"none",closeButton:{hoverBackground:"{blue.100}",focusRing:{color:"{blue.600}",shadow:"none"}},outlined:{color:"{blue.600}",borderColor:"{blue.600}"},simple:{color:"{blue.600}"}},success:{background:"color-mix(in srgb, {green.50}, transparent 5%)",borderColor:"{green.200}",color:"{green.600}",shadow:"none",closeButton:{hoverBackground:"{green.100}",focusRing:{color:"{green.600}",shadow:"none"}},outlined:{color:"{green.600}",borderColor:"{green.600}"},simple:{color:"{green.600}"}},warn:{background:"color-mix(in srgb,{yellow.50}, transparent 5%)",borderColor:"{yellow.200}",color:"{yellow.900}",shadow:"none",closeButton:{hoverBackground:"{yellow.100}",focusRing:{color:"{yellow.600}",shadow:"none"}},outlined:{color:"{yellow.900}",borderColor:"{yellow.900}"},simple:{color:"{yellow.900}"}},error:{background:"color-mix(in srgb, {red.50}, transparent 5%)",borderColor:"{red.200}",color:"{red.600}",shadow:"none",closeButton:{hoverBackground:"{red.100}",focusRing:{color:"{red.600}",shadow:"none"}},outlined:{color:"{red.600}",borderColor:"{red.600}"},simple:{color:"{red.600}"}},secondary:{background:"{surface.100}",borderColor:"{surface.200}",color:"{surface.600}",shadow:"none",closeButton:{hoverBackground:"{surface.200}",focusRing:{color:"{surface.600}",shadow:"none"}},outlined:{color:"{surface.600}",borderColor:"{surface.600}"},simple:{color:"{surface.600}"}},contrast:{background:"{surface.900}",borderColor:"{surface.950}",color:"{surface.50}",shadow:"none",closeButton:{hoverBackground:"{surface.800}",focusRing:{color:"{surface.50}",shadow:"none"}},outlined:{color:"{surface.950}",borderColor:"{surface.950}"},simple:{color:"{surface.950}"}}},dark:{info:{background:"color-mix(in srgb, {blue.500}, transparent 84%)",borderColor:"color-mix(in srgb, {blue.700}, transparent 64%)",color:"{blue.500}",shadow:"none",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{blue.500}",shadow:"none"}},outlined:{color:"{blue.500}",borderColor:"{blue.500}"},simple:{color:"{blue.500}"}},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",borderColor:"color-mix(in srgb, {green.700}, transparent 64%)",color:"{green.500}",shadow:"none",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{green.500}",shadow:"none"}},outlined:{color:"{green.500}",borderColor:"{green.500}"},simple:{color:"{green.500}"}},warn:{background:"color-mix(in srgb, {yellow.500}, transparent 84%)",borderColor:"color-mix(in srgb, {yellow.700}, transparent 64%)",color:"{yellow.500}",shadow:"none",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{yellow.500}",shadow:"none"}},outlined:{color:"{yellow.500}",borderColor:"{yellow.500}"},simple:{color:"{yellow.500}"}},error:{background:"color-mix(in srgb, {red.500}, transparent 84%)",borderColor:"color-mix(in srgb, {red.700}, transparent 64%)",color:"{red.500}",shadow:"none",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{red.500}",shadow:"none"}},outlined:{color:"{red.500}",borderColor:"{red.500}"},simple:{color:"{red.500}"}},secondary:{background:"{surface.800}",borderColor:"{surface.700}",color:"{surface.300}",shadow:"none",closeButton:{hoverBackground:"{surface.700}",focusRing:{color:"{surface.300}",shadow:"none"}},outlined:{color:"{surface.400}",borderColor:"{surface.400}"},simple:{color:"{surface.400}"}},contrast:{background:"{surface.0}",borderColor:"{surface.100}",color:"{surface.950}",shadow:"none",closeButton:{hoverBackground:"{surface.100}",focusRing:{color:"{surface.950}",shadow:"none"}},outlined:{color:"{surface.0}",borderColor:"{surface.0}"},simple:{color:"{surface.0}"}}}}};var ou={root:{borderRadius:"{content.border.radius}",gap:"1rem"},meters:{background:"{content.border.color}",size:"0.5rem"},label:{gap:"0.5rem"},labelMarker:{size:"0.5rem"},labelIcon:{size:"1rem"},labelList:{verticalGap:"0.5rem",horizontalGap:"1rem"}};var iu={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},dropdown:{width:"2.5rem",color:"{form.field.icon.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},list:{padding:"{list.padding}",gap:"{list.gap}",header:{padding:"{list.header.padding}"}},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}",gap:"0.75rem"},optionGroup:{background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},chip:{borderRadius:"{border.radius.sm}"},clearIcon:{color:"{form.field.icon.color}"},emptyMessage:{padding:"{list.option.padding}"},css:({dt:e})=>`
.p-multiselect.p-variant-filled {
    border-end-start-radius: 0
    border-end-end-radius: 0;
    border: 1px solid transparent;
    background: ${e("multiselect.filled.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("multiselect.focus.border.color")}, ${e("multiselect.focus.border.color")}), linear-gradient(to bottom, ${e("multiselect.border.color")}, ${e("multiselect.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
}

.p-multiselect.p-variant-filled:not(.p-disabled):hover {
    background: ${e("multiselect.filled.hover.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("multiselect.focus.border.color")}, ${e("multiselect.focus.border.color")}), linear-gradient(to bottom, ${e("multiselect.hover.border.color")}, ${e("multiselect.hover.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-multiselect.p-variant-filled:not(.p-disabled).p-focus {
    outline: 0 none;
    background: ${e("multiselect.filled.focus.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("multiselect.focus.border.color")}, ${e("multiselect.focus.border.color")}), linear-gradient(to bottom, ${e("multiselect.border.color")}, ${e("multiselect.border.color")});
    background-size: 100% 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-multiselect.p-variant-filled:not(.p-disabled).p-focus:hover {
    background-image: linear-gradient(to bottom, ${e("multiselect.focus.border.color")}, ${e("multiselect.focus.border.color")}), linear-gradient(to bottom, ${e("multiselect.hover.border.color")}, ${e("multiselect.hover.border.color")});
}

.p-multiselect.p-variant-filled.p-invalid {
    background-image: linear-gradient(to bottom, ${e("multiselect.invalid.border.color")}, ${e("multiselect.invalid.border.color")}), linear-gradient(to bottom, ${e("multiselect.invalid.border.color")}, ${e("multiselect.invalid.border.color")});
}

.p-multiselect.p-variant-filled.p-invalid:not(.p-disabled).p-focus  {
    background-image: linear-gradient(to bottom, ${e("multiselect.invalid.border.color")}, ${e("multiselect.invalid.border.color")}), linear-gradient(to bottom, ${e("multiselect.invalid.border.color")}, ${e("multiselect.invalid.border.color")});
}

.p-multiselect-option {
    transition: none;
}
`};var nu={root:{gap:"1.125rem"},controls:{gap:"0.5rem"}};var ru={root:{gutter:"0.75rem",transitionDuration:"{transition.duration}"},node:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",borderColor:"{content.border.color}",color:"{content.color}",selectedColor:"{highlight.color}",hoverColor:"{content.hover.color}",padding:"1rem 1.25rem",toggleablePadding:"1rem 1.25rem 1.5rem 1.25rem",borderRadius:"{content.border.radius}"},nodeToggleButton:{background:"{content.background}",hoverBackground:"{content.hover.background}",borderColor:"{content.border.color}",color:"{text.muted.color}",hoverColor:"{text.color}",size:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},connector:{color:"{content.border.color}",borderRadius:"{content.border.radius}",height:"24px"}};var au={root:{outline:{width:"2px",color:"{content.background}"}}};var su={root:{padding:"0.5rem 1rem",gap:"0.25rem",borderRadius:"{content.border.radius}",background:"{content.background}",color:"{content.color}",transitionDuration:"{transition.duration}"},navButton:{background:"transparent",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",selectedColor:"{highlight.color}",width:"2.5rem",height:"2.5rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},currentPageReport:{color:"{text.muted.color}"},jumpToPageInput:{maxWidth:"2.5rem"}};var lu={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}"},header:{background:"transparent",color:"{text.color}",padding:"1.25rem",borderColor:"{content.border.color}",borderWidth:"0",borderRadius:"0"},toggleableHeader:{padding:"0.5rem 1.25rem"},title:{fontWeight:"600"},content:{padding:"0 1.25rem 1.25rem 1.25rem"},footer:{padding:"0 1.25rem 1.25rem 1.25rem"}};var cu={root:{gap:"0",transitionDuration:"{transition.duration}"},panel:{background:"{content.background}",borderColor:"{content.border.color}",borderWidth:"0",color:"{content.color}",padding:"0",borderRadius:"0",first:{borderWidth:"0",topBorderRadius:"{content.border.radius}"},last:{borderWidth:"0",bottomBorderRadius:"{content.border.radius}"}},item:{focusBackground:"{navigation.item.focus.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",gap:"0.5rem",padding:"{navigation.item.padding}",borderRadius:"{content.border.radius}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}"}},submenu:{indent:"1rem"},submenuIcon:{color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}"},css:({dt:e})=>`
.p-panelmenu-panel {
    box-shadow: 0 0 0 1px ${e("panelmenu.panel.border.color")}
    transition: margin ${e("panelmenu.transition.duration")};
}

.p-panelmenu-panel:has(.p-panelmenu-header-active) {
    margin: 1rem 0;
}

.p-panelmenu-panel:first-child {
    border-start-start-radius: ${e("content.border.radius")};
    border-start-end-radius: ${e("content.border.radius")};
    margin-top: 0;
}

.p-panelmenu-panel:last-child {
    border-end-start-radius: ${e("content.border.radius")};
    border-end-end-radius: ${e("content.border.radius")};
    margin-bottom: 0;
}

.p-accordionpanel:not(.p-disabled) .p-accordionheader:focus-visible {
    background: ${e("navigation.item.active.background")};
}
`};var du={meter:{background:"{content.border.color}",borderRadius:"{content.border.radius}",height:".75rem"},icon:{color:"{form.field.icon.color}"},overlay:{background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",borderRadius:"{overlay.popover.border.radius}",color:"{overlay.popover.color}",padding:"{overlay.popover.padding}",shadow:"{overlay.popover.shadow}"},content:{gap:"0.5rem"},colorScheme:{light:{strength:{weakBackground:"{red.500}",mediumBackground:"{amber.500}",strongBackground:"{green.500}"}},dark:{strength:{weakBackground:"{red.400}",mediumBackground:"{amber.400}",strongBackground:"{green.400}"}}}};var uu={root:{gap:"1.125rem"},controls:{gap:"0.5rem"}};var pu={root:{background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",color:"{overlay.popover.color}",borderRadius:"{overlay.popover.border.radius}",shadow:"{overlay.popover.shadow}",gutter:"10px",arrowOffset:"1.25rem"},content:{padding:"{overlay.popover.padding}"}};var mu={root:{background:"{content.border.color}",borderRadius:"{content.border.radius}",height:"1rem"},value:{background:"{primary.color}"},label:{color:"{primary.contrast.color}",fontSize:"0.75rem",fontWeight:"600"}};var fu={colorScheme:{light:{root:{"color.1":"{red.500}","color.2":"{blue.500}","color.3":"{green.500}","color.4":"{yellow.500}"}},dark:{root:{"color.1":"{red.400}","color.2":"{blue.400}","color.3":"{green.400}","color.4":"{yellow.400}"}}}};var hu={root:{width:"20px",height:"20px",background:"{form.field.background}",checkedBackground:"{primary.contrast.color}",checkedHoverBackground:"{primary.contrast.color}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",checkedBorderColor:"{primary.color}",checkedHoverBorderColor:"{primary.color}",checkedFocusBorderColor:"{primary.color}",checkedDisabledBorderColor:"{form.field.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",shadow:"{form.field.shadow}",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"},transitionDuration:"{form.field.transition.duration}",sm:{width:"16px",height:"16px"},lg:{width:"24px",height:"24px"}},icon:{size:"10px",checkedColor:"{primary.color}",checkedHoverColor:"{primary.color}",disabledColor:"{form.field.disabled.color}",sm:{size:"8px"},lg:{size:"12px"}},css:({dt:e})=>`
.p-radiobutton {
    border-radius: 50%;
    transition: box-shadow ${e("radiobutton.transition.duration")};
}

.p-radiobutton-box {
    border-width: 2px;
}

.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover) {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("text.color")}, transparent 96%);
}

.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:focus-visible) {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("text.color")}, transparent 88%);
}

.p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:hover) {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("radiobutton.checked.border.color")}, transparent 92%);
}

.p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:focus-visible) {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("radiobutton.checked.border.color")}, transparent 84%);
}
`};var gu={root:{gap:"0.5rem",transitionDuration:"{transition.duration}",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"}},icon:{size:"1.125rem",color:"{text.muted.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"},css:({dt:e})=>`
.p-rating:not(.p-disabled):not(.p-readonly) .p-rating-option:hover {
    background: color-mix(in srgb, ${e("rating.icon.color")}, transparent 96%)
    box-shadow: 0 0 1px 8px color-mix(in srgb, ${e("rating.icon.color")}, transparent 96%);
}

.p-rating:not(.p-disabled):not(.p-readonly) .p-rating-option-active:hover {
    background: color-mix(in srgb, ${e("rating.icon.active.color")}, transparent 92%);
    box-shadow: 0 0 1px 8px color-mix(in srgb, ${e("rating.icon.active.color")}, transparent 92%);
}

.p-rating-option.p-focus-visible {
    background: color-mix(in srgb, ${e("rating.icon.active.color")}, transparent 84%);
    box-shadow: 0 0 1px 8px color-mix(in srgb, ${e("rating.icon.active.color")}, transparent 84%);
}
`};var bu={colorScheme:{light:{root:{background:"rgba(0,0,0,0.1)"}},dark:{root:{background:"rgba(255,255,255,0.3)"}}}};var vu={root:{transitionDuration:"{transition.duration}"},bar:{size:"9px",borderRadius:"{border.radius.sm}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},colorScheme:{light:{bar:{background:"{surface.200}"}},dark:{bar:{background:"{surface.700}"}}}};var yu={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},dropdown:{width:"2.5rem",color:"{form.field.icon.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},list:{padding:"{list.padding}",gap:"{list.gap}",header:{padding:"{list.header.padding}"}},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},optionGroup:{background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},clearIcon:{color:"{form.field.icon.color}"},checkmark:{color:"{list.option.color}",gutterStart:"-0.375rem",gutterEnd:"0.375rem"},emptyMessage:{padding:"{list.option.padding}"},css:({dt:e})=>`
.p-select.p-variant-filled {
    border-end-start-radius: 0
    border-end-end-radius: 0;
    border: 1px solid transparent;
    background: ${e("select.filled.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("select.focus.border.color")}, ${e("select.focus.border.color")}), linear-gradient(to bottom, ${e("select.border.color")}, ${e("select.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
}

.p-select.p-variant-filled:not(.p-disabled):hover {
    background: ${e("select.filled.hover.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("select.focus.border.color")}, ${e("select.focus.border.color")}), linear-gradient(to bottom, ${e("select.hover.border.color")}, ${e("select.hover.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-select.p-variant-filled:not(.p-disabled).p-focus {
    outline: 0 none;
    background: ${e("select.filled.focus.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("select.focus.border.color")}, ${e("select.focus.border.color")}), linear-gradient(to bottom, ${e("select.border.color")}, ${e("select.border.color")});
    background-size: 100% 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-select.p-variant-filled:not(.p-disabled).p-focus:hover {
    background-image: linear-gradient(to bottom, ${e("select.focus.border.color")}, ${e("select.focus.border.color")}), linear-gradient(to bottom, ${e("select.hover.border.color")}, ${e("select.hover.border.color")});
}

.p-select.p-variant-filled.p-invalid {
    background-image: linear-gradient(to bottom, ${e("select.invalid.border.color")}, ${e("select.invalid.border.color")}), linear-gradient(to bottom, ${e("select.invalid.border.color")}, ${e("select.invalid.border.color")});
}

.p-select.p-variant-filled.p-invalid:not(.p-disabled).p-focus  {
    background-image: linear-gradient(to bottom, ${e("select.invalid.border.color")}, ${e("select.invalid.border.color")}), linear-gradient(to bottom, ${e("select.invalid.border.color")}, ${e("select.invalid.border.color")});
}

.p-select-option {
    transition: none;
}
`};var _u={root:{borderRadius:"{form.field.border.radius}"},colorScheme:{light:{root:{invalidBorderColor:"{form.field.invalid.border.color}"}},dark:{root:{invalidBorderColor:"{form.field.invalid.border.color}"}}}};var xu={root:{borderRadius:"{content.border.radius}"},colorScheme:{light:{root:{background:"{surface.200}",animationBackground:"rgba(255,255,255,0.4)"}},dark:{root:{background:"rgba(255, 255, 255, 0.06)",animationBackground:"rgba(255, 255, 255, 0.04)"}}}};var Cu={root:{transitionDuration:"{transition.duration}"},track:{background:"{content.border.color}",borderRadius:"{border.radius.xs}",size:"2px"},range:{background:"{primary.color}"},handle:{width:"18px",height:"18px",borderRadius:"50%",background:"{primary.color}",hoverBackground:"{primary.color}",content:{borderRadius:"50%",contentBackground:"{primary.color}",hoverBackground:"{primary.color}",width:"18px",height:"18px",shadow:"0px 2px 1px -1px rgba(0, 0, 0, .2), 0px 1px 1px 0px rgba(0, 0, 0, .14), 0px 1px 3px 0px rgba(0, 0, 0, .12)"},focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"}},css:({dt:e})=>`
.p-slider-handle {
    transition: box-shadow ${e("slider.transition.duration")}
}

.p-slider:not(.p-disabled) .p-slider-handle:hover {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("slider.handle.background")}, transparent 92%);
}

.p-slider-handle:focus-visible,
.p-slider:not(.p-disabled) .p-slider-handle:focus:hover {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("slider.handle.background")}, transparent 84%);
}
`};var wu={root:{gap:"0.5rem",transitionDuration:"{transition.duration}"}};var Iu={root:{borderRadius:"{form.field.border.radius}",roundedBorderRadius:"2rem",raisedShadow:"0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)"}};var Su={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",transitionDuration:"{transition.duration}"},gutter:{background:"{content.border.color}"},handle:{size:"24px",background:"transparent",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}};var ku={root:{transitionDuration:"{transition.duration}"},separator:{background:"{content.border.color}",activeBackground:"{primary.color}",margin:"0 0 0 1.625rem",size:"2px"},step:{padding:"0.5rem",gap:"1rem"},stepHeader:{padding:"0.75rem 1rem",borderRadius:"{content.border.radius}",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"},gap:"0.5rem"},stepTitle:{color:"{text.muted.color}",activeColor:"{text.color}",fontWeight:"500"},stepNumber:{activeBackground:"{primary.color}",activeBorderColor:"{primary.color}",activeColor:"{primary.contrast.color}",size:"2rem",fontSize:"1.143rem",fontWeight:"500",borderRadius:"50%",shadow:"none"},steppanels:{padding:"0.875rem 0.5rem 1.125rem 0.5rem"},steppanel:{background:"{content.background}",color:"{content.color}",padding:"0",indent:"1rem"},colorScheme:{light:{stepNumber:{background:"{surface.400}",borderColor:"{surface.400}",color:"{surface.0}"}},dark:{stepNumber:{background:"{surface.200}",borderColor:"{surface.200}",color:"{surface.900}"}}},css:({dt:e})=>`
.p-step-header:focus-visible {
    background: ${e("navigation.item.active.background")}
}
`};var Tu={root:{transitionDuration:"{transition.duration}"},separator:{background:"{content.border.color}"},itemLink:{borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},gap:"0.5rem"},itemLabel:{color:"{text.muted.color}",activeColor:"{primary.color}",fontWeight:"500"},itemNumber:{background:"{content.background}",activeBackground:"{content.background}",borderColor:"{content.border.color}",activeBorderColor:"{content.border.color}",color:"{text.muted.color}",activeColor:"{primary.color}",size:"2rem",fontSize:"1.143rem",fontWeight:"500",borderRadius:"50%",shadow:"0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"}};var Eu={root:{transitionDuration:"{transition.duration}"},tablist:{borderWidth:"0 0 1px 0",background:"{content.background}",borderColor:"{content.border.color}"},item:{background:"transparent",hoverBackground:"transparent",activeBackground:"transparent",borderWidth:"0 0 1px 0",borderColor:"{content.border.color}",hoverBorderColor:"{content.border.color}",activeBorderColor:"{primary.color}",color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}",padding:"1rem 1.125rem",fontWeight:"600",margin:"0 0 -1px 0",gap:"0.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},itemIcon:{color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}"},activeBar:{height:"1px",bottom:"-1px",background:"{primary.color}"}};var Ru={root:{transitionDuration:"{transition.duration}"},tablist:{borderWidth:"0 0 1px 0",background:"{content.background}",borderColor:"{content.border.color}"},tab:{background:"transparent",hoverBackground:"{content.hover.background}",activeBackground:"transparent",borderWidth:"0 0 1px 0",borderColor:"{content.border.color}",hoverBorderColor:"{content.border.color}",activeBorderColor:"{primary.color}",color:"{text.color}",hoverColor:"{text.color}",activeColor:"{primary.color}",padding:"1rem 1.25rem",fontWeight:"600",margin:"0 0 -1px 0",gap:"0.5rem",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"}},tabpanel:{background:"{content.background}",color:"{content.color}",padding:"1.25rem 1.25rem 1.25rem 1.25rem",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"}},navButton:{background:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}",width:"3rem",shadow:"none",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"}},activeBar:{height:"2px",bottom:"-1px",background:"{primary.color}"},css:({dt:e})=>`


.p-tabs-scrollable .p-tab {
    flex-grow: 0
}

.p-tab-active {
    --p-ripple-background: color-mix(in srgb, ${e("primary.color")}, transparent 90%)
}

.p-tab:not(.p-disabled):focus-visible {
    background: ${e("navigation.item.active.background")};
}

.p-tablist-nav-button:focus-visible {
    background: ${e("navigation.item.active.background")};
}
`};var Du={root:{transitionDuration:"{transition.duration}"},tabList:{background:"{content.background}",borderColor:"{content.border.color}"},tab:{borderColor:"{content.border.color}",activeBorderColor:"{primary.color}",color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}"},tabPanel:{background:"{content.background}",color:"{content.color}"},navButton:{background:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}"},colorScheme:{light:{navButton:{shadow:"0px 0px 10px 50px rgba(255, 255, 255, 0.6)"}},dark:{navButton:{shadow:"0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)"}}}};var $u={root:{fontSize:"0.875rem",fontWeight:"700",padding:"0.25rem 0.5rem",gap:"0.25rem",borderRadius:"{content.border.radius}",roundedBorderRadius:"{border.radius.xl}"},icon:{size:"0.75rem"},colorScheme:{light:{primary:{background:"{primary.color}",color:"{primary.contrast.color}"},secondary:{background:"{surface.100}",color:"{surface.600}"},success:{background:"{green.500}",color:"{surface.0}"},info:{background:"{sky.500}",color:"{surface.0}"},warn:{background:"{orange.500}",color:"{surface.0}"},danger:{background:"{red.500}",color:"{surface.0}"},contrast:{background:"{surface.950}",color:"{surface.0}"}},dark:{primary:{background:"{primary.color}",color:"{primary.contrast.color}"},secondary:{background:"{surface.800}",color:"{surface.300}"},success:{background:"{green.400}",color:"{green.950}"},info:{background:"{sky.400}",color:"{sky.950}"},warn:{background:"{orange.400}",color:"{orange.950}"},danger:{background:"{red.400}",color:"{red.950}"},contrast:{background:"{surface.0}",color:"{surface.950}"}}}};var Au={root:{background:"{form.field.background}",borderColor:"{form.field.border.color}",color:"{form.field.color}",height:"18rem",padding:"{form.field.padding.y} {form.field.padding.x}",borderRadius:"{form.field.border.radius}"},prompt:{gap:"0.25rem"},commandResponse:{margin:"2px 0"}};var Ou={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},css:({dt:e})=>`
.p-textarea.p-variant-filled {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border: 1px solid transparent;
    background: ${e("textarea.filled.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("textarea.focus.border.color")}, ${e("textarea.focus.border.color")}), linear-gradient(to bottom, ${e("textarea.border.color")}, ${e("textarea.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
}

.p-textarea.p-variant-filled:enabled:hover {
    background: ${e("textarea.filled.hover.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("textarea.focus.border.color")}, ${e("textarea.focus.border.color")}), linear-gradient(to bottom, ${e("textarea.hover.border.color")}, ${e("textarea.hover.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-textarea.p-variant-filled:enabled:focus {
    outline: 0 none;
    background: ${e("textarea.filled.focus.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("textarea.focus.border.color")}, ${e("textarea.focus.border.color")}), linear-gradient(to bottom, ${e("textarea.border.color")}, ${e("textarea.border.color")});
    background-size: 100% 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-textarea.p-variant-filled:enabled:hover:focus {
    background-image: linear-gradient(to bottom, ${e("textarea.focus.border.color")}, ${e("textarea.focus.border.color")}), linear-gradient(to bottom, ${e("textarea.hover.border.color")}, ${e("textarea.hover.border.color")});
}

.p-textarea.p-variant-filled.p-invalid {
    background-image: linear-gradient(to bottom, ${e("textarea.invalid.border.color")}, ${e("textarea.invalid.border.color")}), linear-gradient(to bottom, ${e("textarea.invalid.border.color")}, ${e("textarea.invalid.border.color")});
}

.p-textarea.p-variant-filled.p-invalid:enabled:focus {
    background-image: linear-gradient(to bottom, ${e("textarea.invalid.border.color")}, ${e("textarea.invalid.border.color")}), linear-gradient(to bottom, ${e("textarea.invalid.border.color")}, ${e("textarea.invalid.border.color")});
}
`};var Mu={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",transitionDuration:"{transition.duration}"},list:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},item:{focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},submenu:{mobileIndent:"1rem"},submenuIcon:{size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},separator:{borderColor:"{content.border.color}"},css:({dt:e})=>`
.p-tieredmenu-overlay {
    border-color: transparent
}
`};var Bu={event:{minHeight:"5rem"},horizontal:{eventContent:{padding:"1rem 0"}},vertical:{eventContent:{padding:"0 1rem"}},eventMarker:{size:"1.5rem",borderRadius:"50%",borderWidth:"2px",background:"{primary.color}",content:{borderRadius:"50%",size:"0",background:"{primary.color}",insetShadow:"none"}},eventConnector:{color:"{content.border.color}",size:"2px"},colorScheme:{light:{eventMarker:{borderColor:"{surface.0}"}},dark:{eventMarker:{borderColor:"{surface.900}"}}}};var Fu={root:{width:"25rem",borderRadius:"{content.border.radius}",borderWidth:"0",transitionDuration:"{transition.duration}"},icon:{size:"1.25rem"},content:{padding:"{overlay.popover.padding}",gap:"0.5rem"},text:{gap:"0.5rem"},summary:{fontWeight:"500",fontSize:"1rem"},detail:{fontWeight:"500",fontSize:"0.875rem"},closeButton:{width:"2rem",height:"2rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",offset:"{focus.ring.offset}"}},closeIcon:{size:"1rem"},colorScheme:{light:{blur:"0",info:{background:"{blue.50}",borderColor:"{blue.200}",color:"{blue.600}",detailColor:"{surface.700}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"{blue.100}",focusRing:{color:"{blue.600}",shadow:"none"}}},success:{background:"{green.50}",borderColor:"{green.200}",color:"{green.600}",detailColor:"{surface.700}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"{green.100}",focusRing:{color:"{green.600}",shadow:"none"}}},warn:{background:"{yellow.50}",borderColor:"{yellow.200}",color:"{yellow.900}",detailColor:"{surface.700}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"{yellow.100}",focusRing:{color:"{yellow.600}",shadow:"none"}}},error:{background:"{red.50}",borderColor:"{red.200}",color:"{red.600}",detailColor:"{surface.700}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"{red.100}",focusRing:{color:"{red.600}",shadow:"none"}}},secondary:{background:"{surface.100}",borderColor:"{surface.200}",color:"{surface.600}",detailColor:"{surface.700}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"{surface.200}",focusRing:{color:"{surface.600}",shadow:"none"}}},contrast:{background:"{surface.900}",borderColor:"{surface.950}",color:"{surface.50}",detailColor:"{surface.0}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"{surface.800}",focusRing:{color:"{surface.50}",shadow:"none"}}}},dark:{blur:"10px",info:{background:"color-mix(in srgb, {blue.500}, transparent 36%)",borderColor:"color-mix(in srgb, {blue.700}, transparent 64%)",color:"{surface.0}",detailColor:"{blue.100}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{blue.500}",shadow:"none"}}},success:{background:"color-mix(in srgb, {green.500}, transparent 36%)",borderColor:"color-mix(in srgb, {green.700}, transparent 64%)",color:"{surface.0}",detailColor:"{green.100}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{green.500}",shadow:"none"}}},warn:{background:"color-mix(in srgb, {yellow.500}, transparent 36%)",borderColor:"color-mix(in srgb, {yellow.700}, transparent 64%)",color:"{surface.0}",detailColor:"{yellow.50}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{yellow.500}",shadow:"none"}}},error:{background:"color-mix(in srgb, {red.500}, transparent 36%)",borderColor:"color-mix(in srgb, {red.700}, transparent 64%)",color:"{surface.0}",detailColor:"{red.100}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{red.500}",shadow:"none"}}},secondary:{background:"{surface.800}",borderColor:"{surface.700}",color:"{surface.300}",detailColor:"{surface.0}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"{surface.700}",focusRing:{color:"{surface.300}",shadow:"none"}}},contrast:{background:"{surface.0}",borderColor:"{surface.100}",color:"{surface.950}",detailColor:"{surface.950}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"{surface.100}",focusRing:{color:"{surface.950}",shadow:"none"}}}}}};var Lu={root:{padding:"0.75rem 1rem",borderRadius:"{form.field.border.radius}",gap:"0.5rem",fontWeight:"500",background:"{form.field.background}",borderColor:"{form.field.border.color}",color:"{form.field.color}",hoverColor:"{form.field.color}",checkedColor:"{form.field.color}",checkedBorderColor:"{form.field.border.color}",disabledBackground:"{form.field.disabled.background}",disabledBorderColor:"{form.field.disabled.background}",disabledColor:"{form.field.disabled.color}",invalidBorderColor:"{form.field.invalid.border.color}",focusRing:{width:"0",style:"none",offset:"0",color:"unset",shadow:"none"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",padding:"0.625rem 0.75rem"},lg:{fontSize:"{form.field.lg.font.size}",padding:"0.875rem 1.25rem"}},icon:{color:"{text.muted.color}",hoverColor:"{text.muted.color}",checkedColor:"{text.muted.color}",disabledColor:"{form.field.disabled.color}"},content:{left:"0.25rem",top:"0.25rem",checkedBackground:"transparent",checkedShadow:"none"},colorScheme:{light:{root:{hoverBackground:"{surface.100}",checkedBackground:"{surface.200}"}},dark:{root:{hoverBackground:"{surface.800}",checkedBackground:"{surface.700}"}}},css:({dt:e})=>`
.p-togglebutton:focus-visible {
    background: ${e("togglebutton.hover.background")}
}
`};var Pu={root:{width:"2.75rem",height:"1rem",borderRadius:"30px",gap:"0px",shadow:"none",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"},borderWidth:"1px",borderColor:"transparent",hoverBorderColor:"transparent",checkedBorderColor:"transparent",checkedHoverBorderColor:"transparent",invalidBorderColor:"{form.field.invalid.border.color}",transitionDuration:"{form.field.transition.duration}",slideDuration:"0.2s"},handle:{borderRadius:"50%",size:"1.5rem"},colorScheme:{light:{root:{background:"{surface.300}",disabledBackground:"{surface.400}",hoverBackground:"{surface.300}",checkedBackground:"{primary.200}",checkedHoverBackground:"{primary.200}"},handle:{background:"{surface.0}",disabledBackground:"{surface.200}",hoverBackground:"{surface.0}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.color}",color:"{text.muted.color}",hoverColor:"{text.color}",checkedColor:"{primary.contrast.color}",checkedHoverColor:"{primary.contrast.color}"}},dark:{root:{background:"{surface.700}",disabledBackground:"{surface.600}",hoverBackground:"{surface.700}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.color}"},handle:{background:"{surface.400}",disabledBackground:"{surface.500}",hoverBackground:"{surface.300}",checkedBackground:"{primary.200}",checkedHoverBackground:"{primary.200}",color:"{surface.800}",hoverColor:"{surface.900}",checkedColor:"{primary.contrast.color}",checkedHoverColor:"{primary.contrast.color}"}}},css:({dt:e})=>`
.p-toggleswitch-handle {
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-handle {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("text.color")}, transparent 96%), 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible) .p-toggleswitch-handle {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("text.color")}, transparent 88%), 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-handle {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("toggleswitch.handle.checked.background")}, transparent 92%), 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible).p-toggleswitch-checked .p-toggleswitch-handle {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("toggleswitch.handle.checked.background")}, transparent 84%), 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
`};var Nu={root:{color:"{content.color}",borderRadius:"{content.border.radius}",gap:"0.5rem",padding:"1rem"},colorScheme:{light:{root:{background:"{surface.100}",borderColor:"{surface.100}"}},dark:{root:{root:{background:"{surface.800}",borderColor:"{surface.800}"}}}}};var Vu={root:{background:"{surface.600}",color:"{surface.0}",maxWidth:"12.5rem",gutter:"0.25rem",shadow:"{overlay.popover.shadow}",padding:"0.5rem 0.75rem",borderRadius:"{overlay.popover.border.radius}"}};var Hu={root:{background:"{content.background}",color:"{content.color}",padding:"1rem",gap:"2px",indent:"2rem",transitionDuration:"{transition.duration}"},node:{padding:"0.5rem 0.75rem",borderRadius:"{border.radius.xs}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{text.color}",hoverColor:"{text.hover.color}",selectedColor:"{highlight.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"},gap:"0.5rem"},nodeIcon:{color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",selectedColor:"{highlight.color}"},nodeToggleButton:{borderRadius:"50%",size:"2rem",hoverBackground:"{content.hover.background}",selectedHoverBackground:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",selectedHoverColor:"{primary.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},loadingIcon:{size:"2rem"},filter:{margin:"0 0 0.75rem 0"},css:({dt:e})=>`
.p-tree-node-content {
    transition: none
}
`};var zu={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},dropdown:{width:"2.5rem",color:"{form.field.icon.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},tree:{padding:"{list.padding}"},emptyMessage:{padding:"{list.option.padding}"},chip:{borderRadius:"{border.radius.sm}"},clearIcon:{color:"{form.field.icon.color}"},css:({dt:e})=>`
.p-treeselect.p-variant-filled {
    border-end-start-radius: 0
    border-end-end-radius: 0;
    border: 1px solid transparent;
    background: ${e("treeselect.filled.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("treeselect.focus.border.color")}, ${e("treeselect.focus.border.color")}), linear-gradient(to bottom, ${e("treeselect.border.color")}, ${e("treeselect.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
}

.p-treeselect.p-variant-filled:not(.p-disabled):hover {
    background: ${e("treeselect.filled.hover.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("treeselect.focus.border.color")}, ${e("treeselect.focus.border.color")}), linear-gradient(to bottom, ${e("treeselect.hover.border.color")}, ${e("treeselect.hover.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-treeselect.p-variant-filled:not(.p-disabled).p-focus {
    outline: 0 none;
    background: ${e("treeselect.filled.focus.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("treeselect.focus.border.color")}, ${e("treeselect.focus.border.color")}), linear-gradient(to bottom, ${e("treeselect.border.color")}, ${e("treeselect.border.color")});
    background-size: 100% 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-treeselect.p-variant-filled:not(.p-disabled).p-focus:hover {
    background-image: linear-gradient(to bottom, ${e("treeselect.focus.border.color")}, ${e("treeselect.focus.border.color")}), linear-gradient(to bottom, ${e("treeselect.hover.border.color")}, ${e("treeselect.hover.border.color")});
}

.p-treeselect.p-variant-filled.p-invalid {
    background-image: linear-gradient(to bottom, ${e("treeselect.invalid.border.color")}, ${e("treeselect.invalid.border.color")}), linear-gradient(to bottom, ${e("treeselect.invalid.border.color")}, ${e("treeselect.invalid.border.color")});
}

.p-treeselect.p-variant-filled.p-invalid:not(.p-disabled).p-focus  {
    background-image: linear-gradient(to bottom, ${e("treeselect.invalid.border.color")}, ${e("treeselect.invalid.border.color")}), linear-gradient(to bottom, ${e("treeselect.invalid.border.color")}, ${e("treeselect.invalid.border.color")});
}
`};var ju={root:{transitionDuration:"{transition.duration}"},header:{background:"{content.background}",borderColor:"{treetable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem"},headerCell:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",borderColor:"{treetable.border.color}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",gap:"0.5rem",padding:"0.75rem 1rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},columnTitle:{fontWeight:"600"},row:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},bodyCell:{borderColor:"{treetable.border.color}",padding:"0.75rem 1rem",gap:"0.5rem"},footerCell:{background:"{content.background}",borderColor:"{treetable.border.color}",color:"{content.color}",padding:"0.75rem 1rem"},columnFooter:{fontWeight:"600"},footer:{background:"{content.background}",borderColor:"{treetable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem"},columnResizerWidth:"0.5rem",resizeIndicator:{width:"1px",color:"{primary.color}"},sortIcon:{color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",size:"0.875rem"},loadingIcon:{size:"2rem"},nodeToggleButton:{hoverBackground:"{content.hover.background}",selectedHoverBackground:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}",selectedHoverColor:"{primary.color}",size:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},paginatorTop:{borderColor:"{content.border.color}",borderWidth:"0 0 1px 0"},paginatorBottom:{borderColor:"{content.border.color}",borderWidth:"0 0 1px 0"},colorScheme:{light:{root:{borderColor:"{content.border.color}"},bodyCell:{selectedBorderColor:"{primary.100}"}},dark:{root:{borderColor:"{surface.800}"},bodyCell:{selectedBorderColor:"{primary.900}"}}},css:({dt:e})=>`
.p-treetable-header-cell,
.p-treetable-tbody > tr {
    transition: none
}
`};var Uu={loader:{mask:{background:"{content.background}",color:"{text.muted.color}"},icon:{size:"2rem"}}};var Wu=Ae(T({},fd),{components:{accordion:dd,autocomplete:ud,avatar:pd,badge:md,blockui:hd,breadcrumb:gd,button:bd,datepicker:Rd,card:vd,carousel:yd,cascadeselect:_d,checkbox:xd,chip:Cd,colorpicker:wd,confirmdialog:Id,confirmpopup:Sd,contextmenu:kd,dataview:Ed,datatable:Td,dialog:Dd,divider:$d,dock:Ad,drawer:Od,editor:Md,fieldset:Bd,fileupload:Fd,iftalabel:Vd,floatlabel:Ld,galleria:Pd,iconfield:Nd,image:Hd,imagecompare:zd,inlinemessage:jd,inplace:Ud,inputchips:Wd,inputgroup:Gd,inputnumber:qd,inputotp:Qd,inputtext:Kd,knob:Yd,listbox:Zd,megamenu:Xd,menu:Jd,menubar:eu,message:tu,metergroup:ou,multiselect:iu,orderlist:nu,organizationchart:ru,overlaybadge:au,popover:pu,paginator:su,password:du,panel:lu,panelmenu:cu,picklist:uu,progressbar:mu,progressspinner:fu,radiobutton:hu,rating:gu,scrollpanel:vu,select:yu,selectbutton:_u,skeleton:xu,slider:Cu,speeddial:wu,splitter:Su,splitbutton:Iu,stepper:ku,steps:Tu,tabmenu:Eu,tabs:Ru,tabview:Du,textarea:Ou,tieredmenu:Mu,tag:$u,terminal:Au,timeline:Bu,togglebutton:Lu,toggleswitch:Pu,tree:Hu,treeselect:zu,treetable:ju,toast:Fu,toolbar:Nu,virtualscroller:Uu,tooltip:Vu,ripple:bu},css:({dt:e})=>`

    `});var Gu=yl(Wu,{semantic:{primary:{50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1"},colorScheme:{light:{surface:{0:"#ffffff",50:"{slate.50}",100:"{slate.100}",200:"{slate.200}",300:"{slate.300}",400:"{slate.400}",500:"{slate.500}",600:"{slate.600}",700:"{slate.700}",800:"{slate.800}",900:"{slate.900}",950:"{slate.950}"}}}}});var qu={providers:[ys({eventCoalescing:!0}),pc(cd,fc({scrollPositionRestoration:"enabled"})),js(),wl({theme:{preset:Gu,options:{cssLayer:{name:"primeng",order:"base, theme, primeng, components, utilities"},darkModeSelector:"none"}}})]};var Jn=class e{screenSize=Se({width:window.innerWidth,height:window.innerHeight});constructor(){window.addEventListener("resize",()=>{this.screenSize.set({width:window.innerWidth,height:window.innerHeight})})}static \u0275fac=function(t){return new(t||e)};static \u0275prov=A({token:e,factory:e.\u0275fac,providedIn:"root"})};var Qu=()=>({exact:!0}),Ny=(e,n,t,o,i)=>({flex:e,"animate-slide-in":n,"animate-slide-out":t,hidden:o,"bg-gradient-to-b":i});function Vy(e,n){if(e&1){let t=L();d(0,"li",18),M("click",function(){C(t);let i=m();return w(i.toggleMenu())}),d(1,"a",19),v(2),u()()}if(e&2){let t=n.$implicit;p(),ms("routerLink",t.url),c("routerLinkActiveOptions",Qe(3,Qu)),p(),de(t.name)}}var er=class e{menuOpen=!1;isClosing=!1;resizeObserver=y(Jn);screenSize=this.resizeObserver.screenSize;links=[{name:"Home",url:"/"},{name:"About us",url:"/about"},{name:"Contact",url:"/contact"},{name:"Privacy Policy",url:"/privacy&policy"},{name:"Terms of Service",url:"/termsAndConditions"}];toggleMenu(){this.menuOpen?(this.isClosing=!0,setTimeout(()=>{this.menuOpen=!1,this.isClosing=!1},500)):this.menuOpen=!0}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=I({type:e,selectors:[["app-navbar"]],decls:22,vars:9,consts:[[1,"sticky","shadow-lg","backdrop-blur-md","bg-gradient-to-b","from-orange-200/70","to-blue-100/70","top-0","h-16","flex","items-center","text-sm","z-50"],[1,"w-dvw","mx-auto","flex","justify-between","items-center","md:px-24"],[1,"logo"],["routerLink","/","routerLinkActive","active",3,"routerLinkActiveOptions"],["src","assets/images/arucare-logo.png","alt","Arucare Logo",1,"w-18","object-cover","cursor-pointer"],[1,"absolute","top-0","h-dvh","w-full","from-stone-300","to-sky-400","flex-col","justify-around","text-center","text-2xl","font-light","duration-500","md:static","md:flex","md:h-auto","md:w-3/4","md:flex-row","md:justify-end","md:gap-10","md:bg-transparent","md:text-left","md:text-sm",3,"ngClass"],[1,"cursor-pointer","text-stone"],[1,"md:hidden","text-stone"],[1,"cursor-pointer",3,"click"],["width","50","height","50","viewBox","0 0 24 24","fill","none","xmlns","http://www.w3.org/2000/svg"],["id","SVGRepo_bgCarrier","stroke-width","0"],["id","SVGRepo_tracerCarrier","stroke-linecap","round","stroke-linejoin","round"],["id","SVGRepo_iconCarrier"],["id","Menu / Close_LG"],["id","Vector","d","M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],["id","menu-button",1,"absolute","right-2","cursor-pointer","md:hidden","text-stone",3,"click"],["width","40px","height","40px","viewBox","0 0 24 24","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M4 6H20M4 12H20M4 18H20","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],[1,"cursor-pointer","text-stone",3,"click"],["routerLinkActive","active",3,"routerLink","routerLinkActiveOptions"]],template:function(t,o){t&1&&(d(0,"header",0)(1,"nav",1)(2,"div",2)(3,"a",3),h(4,"img",4),u()(),d(5,"ul",5),us(6,Vy,3,4,"li",6,ds),d(8,"li",7)(9,"button",8),M("click",function(){return o.toggleMenu()}),ne(),d(10,"svg",9),h(11,"g",10)(12,"g",11),d(13,"g",12)(14,"g",13),h(15,"path",14),u()()()()()(),go(),d(16,"button",15),M("click",function(){return o.toggleMenu()}),ne(),d(17,"svg",16),h(18,"g",10)(19,"g",11),d(20,"g",12),h(21,"path",17),u()()()()()),t&2&&(p(3),c("routerLinkActiveOptions",Qe(2,Qu)),p(2),c("ngClass",vs(3,Ny,o.menuOpen||o.isClosing||o.screenSize().width>=768,o.menuOpen&&!o.isClosing&&o.screenSize().width<768,o.isClosing&&o.screenSize().width<768,!o.menuOpen&&!o.isClosing,o.screenSize().width<=768)),p(),ps(o.links))},dependencies:[F,ge,St,jt],encapsulation:2})};var Ku=()=>({exact:!0});function Hy(e,n){if(e&1&&(d(0,"li")(1,"a",23),v(2),u()()),e&2){let t=n.$implicit;p(),c("routerLink",t.url)("routerLinkActiveOptions",Qe(3,Ku)),p(),en(" ",t.name," ")}}var tr=class e{footerLinks=[{name:"Privacy Policy",url:"/privacy&policy"},{name:"Terms of Service",url:"/termsAndConditions"}];static \u0275fac=function(t){return new(t||e)};static \u0275cmp=I({type:e,selectors:[["app-footer"]],decls:35,vars:3,consts:[[1,"h-fit","text-xl","z-50","bgSand","sm:pt-5"],[1,"mx-auto","max-w-7xl","grid","grid-cols-1","sm:grid-cols-4"],[1,"logo","flex","items-center","justify-center"],["routerLink","/","routerLinkActive","active text-slate-200",3,"routerLinkActiveOptions"],["src","assets/images/arucare-logo-transparent.png","alt","Arucare Logo",1,"w-50","object-cover","cursor-pointer"],[1,"text-center","sm:text-left"],[1,"flex","mb-15","flex-col","gap-7","h-full","justify-start","p-4","text-sm","text-gray-500","sm:border-l-4","sm:border-sky-200"],[4,"ngFor","ngForOf"],[1,"social","flex","sm:flex-col","gap-4","justify-center","sm:justify-between","sm:pl-4","sm:border-l-4","sm:border-blue-200"],["href","#","target","_blank",1,"w-fit"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","width","24","height","24","fill","none","viewBox","0 0 24 24",1,"w-10","h-10","text-gray-500"],["fill","currentColor","fill-rule","evenodd","d","M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z","clip-rule","evenodd"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","width","24","height","24","fill","currentColor","viewBox","0 0 24 24",1,"w-10","h-10","text-gray-500"],["fill-rule","evenodd","d","M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z","clip-rule","evenodd"],["d","M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z"],[1,"mt-10","sm:mt-0","max-sm:bgSand","p-5","sm:p-0","items-center","justify-center","flex","flex-col"],["target","_blank","href","https://apps.apple.com/co/app/arucare-aruba/id1641800355?l=en-GB",1,"mx-auto","w-fit","cursor-pointer","m-1","hover:bg-slate-200","duration-500","p-3","bg-slate-100","rounded-xl","flex","justify-between","gap-2","items-center"],[1,"pi","pi-apple","text-3xl","text-stone"],[1,"font-extralight","text-sm","block","m-0","text-stone"],[1,"text-xl","font-bold","text-stone"],["target","_blank","href","https://play.google.com/store/apps/details?id=com.arucarearuba.app&pcampaignid=web_share",1,"mx-auto","w-fit","cursor-pointer","m-1","hover:bg-slate-200","duration-500","p-3","bg-slate-100","rounded-xl","flex","justify-between","gap-2","items-center"],[1,"pi","pi-google","text-3xl","text-stone"],[1,"text-center","text-gray-400","text-sm","p-4","bgSand"],["routerLinkActive","active text-slate-200",1,"rounded-lg","w-fit","hover:bg-blue-200","p-3","hover:text-white","transition","duration-300","text-center",3,"routerLink","routerLinkActiveOptions"]],template:function(t,o){t&1&&(d(0,"div",0)(1,"div",1)(2,"div",2)(3,"a",3),h(4,"img",4),u()(),d(5,"div",5)(6,"ul",6),b(7,Hy,3,4,"li",7),u()(),d(8,"div",8)(9,"a",9),ne(),d(10,"svg",10),h(11,"path",11),u()(),go(),d(12,"a",9),ne(),d(13,"svg",12),h(14,"path",13),u()(),go(),d(15,"a",9),ne(),d(16,"svg",12),h(17,"path",14),u()()(),go(),d(18,"div",15)(19,"a",16),h(20,"span",17),d(21,"div")(22,"span",18),v(23,"Download on the"),u(),d(24,"span",19),v(25,"App Store"),u()()(),d(26,"a",20),h(27,"span",21),d(28,"div")(29,"span",18),v(30,"Download on the"),u(),d(31,"span",19),v(32,"Play Store"),u()()()()(),d(33,"p",22),v(34," \xA9 2025 Arucare. All rights reserved. "),u()()),t&2&&(p(3),c("routerLinkActiveOptions",Qe(2,Ku)),p(4),c("ngForOf",o.footerLinks))},dependencies:[St,jt,F,pt],encapsulation:2})};var or=class e{title="arucareLanding";static \u0275fac=function(t){return new(t||e)};static \u0275cmp=I({type:e,selectors:[["app-root"]],decls:3,vars:0,template:function(t,o){t&1&&h(0,"app-navbar")(1,"router-outlet")(2,"app-footer")},dependencies:[ha,er,tr],encapsulation:2})};Hs(or,qu).catch(e=>console.error(e));
