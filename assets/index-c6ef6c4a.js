var Ae=Object.defineProperty;var Se=(t,e,n)=>e in t?Ae(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var le=(t,e,n)=>(Se(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();function R(){}function Pe(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function we(t){return t()}function me(){return Object.create(null)}function V(t){t.forEach(we)}function ke(t){return typeof t=="function"}function q(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Re(t){return Object.keys(t).length===0}function $(t,e){t.appendChild(e)}function p(t,e,n){t.insertBefore(e,n||null)}function h(t){t.parentNode&&t.parentNode.removeChild(t)}function b(t){return document.createElement(t)}function P(t){return document.createTextNode(t)}function S(){return P(" ")}function te(){return P("")}function ne(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function C(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Le(t){return Array.from(t.childNodes)}function re(t,e){e=""+e,t.data!==e&&(t.data=e)}let H;function U(t){H=t}function ve(){if(!H)throw new Error("Function called outside component initialization");return H}function $e(t){ve().$$.before_update.push(t)}const M=[],he=[];let j=[];const pe=[],Ue=Promise.resolve();let ce=!1;function Ie(){ce||(ce=!0,Ue.then(fe))}function ae(t){j.push(t)}const ie=new Set;let N=0;function fe(){if(N!==0)return;const t=H;do{try{for(;N<M.length;){const e=M[N];N++,U(e),Fe(e.$$)}}catch(e){throw M.length=0,N=0,e}for(U(null),M.length=0,N=0;he.length;)he.pop()();for(let e=0;e<j.length;e+=1){const n=j[e];ie.has(n)||(ie.add(n),n())}j.length=0}while(M.length);for(;pe.length;)pe.pop()();ce=!1,ie.clear(),U(t)}function Fe(t){if(t.fragment!==null){t.update(),V(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ae)}}function Be(t){const e=[],n=[];j.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),j=e}const Z=new Set;let B;function Te(){B={r:0,c:[],p:B}}function Ne(){B.r||V(B.c),B=B.p}function z(t,e){t&&t.i&&(Z.delete(t),t.i(e))}function G(t,e,n,r){if(t&&t.o){if(Z.has(t))return;Z.add(t),B.c.push(()=>{Z.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function F(t,e){const n=e.token={};function r(l,o,s,i){if(e.token!==n)return;e.resolved=i;let a=e.ctx;s!==void 0&&(a=a.slice(),a[s]=i);const u=l&&(e.current=l)(a);let m=!1;e.block&&(e.blocks?e.blocks.forEach((f,d)=>{d!==o&&f&&(Te(),G(f,1,1,()=>{e.blocks[d]===f&&(e.blocks[d]=null)}),Ne())}):e.block.d(1),u.c(),z(u,1),u.m(e.mount(),e.anchor),m=!0),e.block=u,e.blocks&&(e.blocks[o]=u),m&&fe()}if(Pe(t)){const l=ve();if(t.then(o=>{U(l),r(e.then,1,e.value,o),U(null)},o=>{if(U(l),r(e.catch,2,e.error,o),U(null),!e.hasCatch)throw o}),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,t),!0;e.resolved=t}}function de(t,e,n){const r=e.slice(),{resolved:l}=t;t.current===t.then&&(r[t.value]=l),t.current===t.catch&&(r[t.error]=l),t.block.p(r,n)}function Q(t){t&&t.c()}function O(t,e,n){const{fragment:r,after_update:l}=t.$$;r&&r.m(e,n),ae(()=>{const o=t.$$.on_mount.map(we).filter(ke);t.$$.on_destroy?t.$$.on_destroy.push(...o):V(o),t.$$.on_mount=[]}),l.forEach(ae)}function D(t,e){const n=t.$$;n.fragment!==null&&(Be(n.after_update),V(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function xe(t,e){t.$$.dirty[0]===-1&&(M.push(t),Ie(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function W(t,e,n,r,l,o,s,i=[-1]){const a=H;U(t);const u=t.$$={fragment:null,ctx:[],props:o,update:R,not_equal:l,bound:me(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:me(),dirty:i,skip_bound:!1,root:e.target||a.$$.root};s&&s(u.root);let m=!1;if(u.ctx=n?n(t,e.props||{},(f,d,..._)=>{const E=_.length?_[0]:d;return u.ctx&&l(u.ctx[f],u.ctx[f]=E)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](E),m&&xe(t,f)),d}):[],u.update(),m=!0,V(u.before_update),u.fragment=r?r(u.ctx):!1,e.target){if(e.hydrate){const f=Le(e.target);u.fragment&&u.fragment.l(f),f.forEach(h)}else u.fragment&&u.fragment.c();e.intro&&z(t.$$.fragment),O(t,e.target,e.anchor),fe()}U(a)}class J{constructor(){le(this,"$$");le(this,"$$set")}$destroy(){D(this,1),this.$destroy=R}$on(e,n){if(!ke(n))return R;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const l=r.indexOf(n);l!==-1&&r.splice(l,1)}}$set(e){this.$$set&&!Re(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Me="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Me);const Ke=/^\/([^/]+)\/([^/]+)\/pull\/(\d+)\/?$/,ze=/\npreferences:[^\n\S]*(#[^\n]*)?\n/,se=t=>t.ok?t.json():Promise.reject(new Error(`Fetch error: ${t.status} ${t.statusText}`,{cause:t})),Ce=new Map;async function je(t,e){var k;const n=new URL(t);if(n.origin!=="https://github.com")throw new Error("Only GitHub PR URLs are supported on the web UI. Use the CLI instead.");const r=Ke.exec(n.pathname);if(r==null)throw new Error("Only GitHub PR URLs are supported on the web UI. Use the CLI instead.");const[,l,o,s]=r;let i;if((k=e==null?void 0:e.headers)!=null&&k.Authorization){const c=await fetch("https://api.github.com/graphql",{...e,method:"POST",body:JSON.stringify({variables:{prid:Number(s),owner:l,repo:o},query:`query PR($prid: Int!, $owner: String!, $repo: String!) {
        repository(owner: $owner, name: $repo) {
          pullRequest(number: $prid) {
            commits(first: 1) {
              nodes {
                commit {
                  oid
                }
              }
            }
            headRef {
              name
              repository { url }
            }
            closed
            merged
          }
        }
      }
`})}).then(se);if(c.error)throw new Error("Unable to get required information for the vote PR",{cause:c.error});i=c.data.repository.pullRequest}else{const c=await Promise.all([fetch(`https://api.github.com/repos/${l}/${o}/pulls/${s}`,e).then(se),fetch(`https://api.github.com/repos/${l}/${o}/pulls/${s}/commits`,e).then(se)]);i={closed:c[0].state==="closed",merged:c[0].state==="merged",headRef:{name:c[0].head.ref,repository:{url:c[0].head.repo.html_url}},commits:{nodes:[{commit:{oid:c[1][0].sha}}]}}}const{closed:a,merged:u,commits:m,headRef:f}=i;if(a)throw new Error("The PR is marked as closed");if(u)throw new Error("The PR is marked as merged");const{oid:d}=m.nodes[0].commit,{name:_,repository:{url:E}}=f,{files:v}=await fetch(`https://api.github.com/repos/${l}/${o}/commits/${d}`,e).then(c=>c.ok?c.json():Promise.reject(new Error(`Fetch error: ${c.status} ${c.statusText}`,{cause:c})));if((v==null?void 0:v.length)!==3)throw new Error("That PR does not look like a vote PR");const A=v.find(c=>c.filename.endsWith("/vote.yml")),g=v.find(c=>c.filename.endsWith("/ballot.yml")),w=v.find(c=>c.filename.endsWith("/public.pem"));if(!A||!g||!w)throw new Error("That PR does not look like a vote PR");return Ce.set(t,`${E}/new/${_}/${A.filename.replace(/vote\.yml$/,"")}`),{voteFile:A,ballotFile:g,publicKeyFile:w}}function _e(t){return Ce.get(t)}function Ge(t){let e=t.length,n;for(;e!=0;)n=Math.floor(Math.random()*e),e--,[t[e],t[n]]=[t[n],t[e]];return t}async function Oe(t,e){const n={...e,headers:{...e==null?void 0:e.headers,Accept:"application/vnd.github.raw"}};try{const{voteFile:r,ballotFile:l,publicKeyFile:o}=await je(t,e),s=/^\+canShuffleCandidates:\s*true$/m.test(r.patch);return[fetch(l.contents_url,n).then(i=>i.ok?i.text():Promise.reject(new Error(`Fetch error: ${i.status} ${i.statusText}`))).then(s?i=>{const a=ze.exec(i);if(a==null)return console.warn("Cannot find the list of candidates to shuffle, ignoring..."),i;const u=a.index+a[0].length-1,m=[];let f,d,_=u;for(;;){if(d=_+1,_=i.indexOf(`
`,d),_===-1){d!==i.length&&(f+=i.slice(d-1));break}if(i[d]!==" "||i[d+1]!==" ")break;i[d+2]==="-"&&(f&&m.push(f),f=""),f+=i.slice(d-1,_)}return f&&m.push(f),i.slice(0,u)+Ge(m).join("")+`
`+i.slice(d)}:void 0),fetch(o.contents_url,n).then(i=>i.ok?i.arrayBuffer():Promise.reject(new Error(`Fetch error: ${i.status} ${i.statusText}`)))]}catch(r){const l=Promise.reject(r);return[l,l]}}let ue;function De({url:t,username:e,token:n},r){const l=e&&n?{headers:{Authorization:`Basic ${btoa(`${e}:${n}`)}`}}:void 0,o=t+(l==null?void 0:l.headers.Authorization);ue!==o&&(ue=o,Oe(t,l).then(r,s=>(ue=null,r(s))))}function He(t){var l;let e,n=(((l=t[6])==null?void 0:l.message)??t[6])+"",r;return{c(){e=P("An error occurred: "),r=P(n)},m(o,s){p(o,e,s),p(o,r,s)},p(o,s){var i;s&1&&n!==(n=(((i=o[6])==null?void 0:i.message)??o[6])+"")&&re(r,n)},d(o){o&&(h(e),h(r))}}}function Ve(t){let e,n,r,l,o,s,i,a,u,m,f,d,_,E,v,A,g={ctx:t,current:null,token:null,hasCatch:!0,pending:Je,then:We,catch:qe,error:6};return F(o=t[2],g),{c(){e=b("textarea"),r=S(),l=b("div"),g.block.c(),s=S(),i=b("button"),i.textContent="Copy to clipboard",a=S(),u=b("p"),m=P("Cast a vote by pasting this on a "),f=b("a"),d=P("new file on the vote branch"),E=P("."),e.readOnly=!0,e.value=n=t[5],C(i,"type","button"),C(f,"href",_=_e(t[1])),C(f,"target","_blank")},m(w,k){p(w,e,k),p(w,r,k),p(w,l,k),g.block.m(l,g.anchor=null),g.mount=()=>l,g.anchor=null,p(w,s,k),p(w,i,k),p(w,a,k),p(w,u,k),$(u,m),$(u,f),$(f,d),$(u,E),v||(A=ne(i,"click",t[4]),v=!0)},p(w,k){t=w,k&1&&n!==(n=t[5])&&(e.value=n),g.ctx=t,k&4&&o!==(o=t[2])&&F(o,g)||de(g,t,k),k&2&&_!==(_=_e(t[1]))&&C(f,"href",_)},d(w){w&&(h(e),h(r),h(l),h(s),h(i),h(a),h(u)),g.block.d(),g.token=null,g=null,v=!1,A()}}}function qe(t){let e,n=t[3]&&ye(t);return{c(){n&&n.c(),e=te()},m(r,l){n&&n.m(r,l),p(r,e,l)},p(r,l){r[3]?n?n.p(r,l):(n=ye(r),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(r){r&&h(e),n&&n.d(r)}}}function ye(t){var l;let e,n=(((l=t[6])==null?void 0:l.message)??t[6])+"",r;return{c(){e=P("An error occurred: "),r=P(n)},m(o,s){p(o,e,s),p(o,r,s)},p(o,s){var i;s&4&&n!==(n=(((i=o[6])==null?void 0:i.message)??o[6])+"")&&re(r,n)},d(o){o&&(h(e),h(r))}}}function We(t){let e;return{c(){e=P("Copied to the clipboard!")},m(n,r){p(n,e,r)},p:R,d(n){n&&h(e)}}}function Je(t){let e;return{c(){e=P("Copying to the Clipboard…")},m(n,r){p(n,e,r)},p:R,d(n){n&&h(e)}}}function Ye(t){let e;return{c(){e=b("textarea"),e.readOnly=!0,e.value="Encrypting data… "},m(n,r){p(n,e,r)},p:R,d(n){n&&h(e)}}}function Qe(t){let e,n,r,l,o={ctx:t,current:null,token:null,hasCatch:!0,pending:Ye,then:Ve,catch:He,value:5,error:6};return F(l=t[0],o),{c(){e=b("summary"),e.textContent="Get encrypted ballot",n=S(),r=te(),o.block.c()},m(s,i){p(s,e,i),p(s,n,i),p(s,r,i),o.block.m(s,o.anchor=i),o.mount=()=>r.parentNode,o.anchor=r},p(s,[i]){t=s,o.ctx=t,i&1&&l!==(l=t[0])&&F(l,o)||de(o,t,i)},i:R,o:R,d(s){s&&(h(e),h(n),h(r)),o.block.d(s),o.token=null,o=null}}}function Xe(t,e,n){let{encryptDataPromise:r}=e,{url:l}=e,o,s;function i(a){n(2,o=r.then(u=>navigator.clipboard.writeText(u))),n(3,s=a!=null)}return $e(i),t.$$set=a=>{"encryptDataPromise"in a&&n(0,r=a.encryptDataPromise),"url"in a&&n(1,l=a.url)},[r,l,o,s,i]}class Ze extends J{constructor(e){super(),W(this,e,Xe,Qe,q,{encryptDataPromise:0,url:1})}}const Ee={name:"RSA-OAEP",hash:"SHA-256"},K={name:"AES-CBC",length:256,saltSize:8},x={name:"PBKDF2",hash:"SHA-256",iterations:1e5,keySize:32,ivSize:16},et=crypto,{subtle:I}=crypto;async function tt(t,e,...n){const r=await I.importKey("raw",t,x.name,!1,["deriveBits"]),l=await I.deriveBits({...x,salt:e},r,8*(x.ivSize+x.keySize)),o=await I.importKey("raw",new Uint8Array(l,0,x.keySize),K,!1,n),s=new Uint8Array(l,x.keySize);return{key:o,iv:s}}const nt=new TextDecoder;function rt(t){const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0,l=t.length;r<l;r++)n[r]=t.charCodeAt(r);return e}const ee="-----BEGIN P";function ot(t){const e=ArrayBuffer.isView(t),n=new DataView(e?t.buffer:t,e?t.byteOffset:0,ee.length);for(let r=0;r<ee.length;r++)if(ee.charCodeAt(r)!==n.getUint8(r))return!1;return!0}function lt(t,e,n){let r;if(typeof e=="string"?e.startsWith(ee):ot(e)){typeof e!="string"&&(e=nt.decode(e));const l=e.split("-----",3)[2].replace(/\s+/g,""),o=atob(l);r=rt(o)}else r=e;return I.importKey(t,r,Ee,!0,n)}function it(t,e){return lt(e?"pkcs8":"spki",t,[e?"decrypt":"encrypt"])}const X=[83,97,108,116,101,100,95,95];async function st(t){const e=await I.exportKey("raw",await I.generateKey(K,!0,["encrypt"])),n=et.getRandomValues(new Uint8Array(K.saltSize)),{iv:r,key:l}=await tt(e,n,"encrypt"),o=await I.encrypt({...K,iv:r},l,t),s=new Uint8Array(X.length+K.saltSize+o.byteLength);return s.set(X),s.set(n,X.length),s.set(new Uint8Array(o),X.length+K.saltSize),{secret:e,saltedCiphertext:s}}async function ut(t,e){const n=await it(e),{saltedCiphertext:r,secret:l}=await st(t);return{encryptedSecret:await I.encrypt({name:Ee.name},n,l),saltedCiphertext:r}}function be(t){let e="";const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r=t.byteLength,l=r%3,o=r-l;let s,i,a,u,m;for(let f=0;f<o;f=f+3)m=t[f]<<16|t[f+1]<<8|t[f+2],s=(m&16515072)>>18,i=(m&258048)>>12,a=(m&4032)>>6,u=m&63,e+=n[s]+n[i]+n[a]+n[u];return l==1?(m=t[o],s=(m&252)>>2,i=(m&3)<<4,e+=n[s]+n[i]+"=="):l==2&&(m=t[o]<<8|t[o+1],s=(m&64512)>>10,i=(m&1008)>>4,a=(m&15)<<2,e+=n[s]+n[i]+n[a]+"="),e}function ct(t){var a;let e,n,r=(((a=t[10])==null?void 0:a.message)??t[10])+"",l,o,s,i=(!t[1]||!t[0])&&ge();return{c(){e=b("p"),n=P("An error occurred: "),l=P(r),o=S(),i&&i.c(),s=te()},m(u,m){p(u,e,m),$(e,n),$(e,l),p(u,o,m),i&&i.m(u,m),p(u,s,m)},p(u,m){var f;m&4&&r!==(r=(((f=u[10])==null?void 0:f.message)??u[10])+"")&&re(l,r),!u[1]||!u[0]?i||(i=ge(),i.c(),i.m(s.parentNode,s)):i&&(i.d(1),i=null)},d(u){u&&(h(e),h(o),h(s)),i&&i.d(u)}}}function ge(t){let e;return{c(){e=b("p"),e.textContent=`Maybe consider providing an access token, authenticated API calls are more
      likely to succeed.`},m(n,r){p(n,e,r)},d(n){n&&h(e)}}}function at(t){let e,n,r,l,o,s,i,a={ctx:t,current:null,token:null,hasCatch:!1,pending:mt,then:dt,catch:ft};return F(o=t[3],a),{c(){e=b("form"),n=b("textarea"),l=S(),a.block.c(),C(n,"name","ballot"),n.value=r=t[9]},m(u,m){p(u,e,m),$(e,n),$(e,l),a.block.m(e,a.anchor=null),a.mount=()=>e,a.anchor=null,s||(i=ne(e,"submit",t[4]),s=!0)},p(u,m){t=u,m&4&&r!==(r=t[9])&&(n.value=r),a.ctx=t,m&8&&o!==(o=t[3])&&F(o,a)},d(u){u&&h(e),a.block.d(),a.token=null,a=null,s=!1,i()}}}function ft(t){return{c:R,m:R,d:R}}function dt(t){let e;return{c(){e=b("button"),e.textContent="Encrypt ballot",C(e,"type","submit")},m(n,r){p(n,e,r)},d(n){n&&h(e)}}}function mt(t){let e;return{c(){e=b("button"),e.textContent="Loading public key…",C(e,"type","submit"),e.disabled=!0},m(n,r){p(n,e,r)},d(n){n&&h(e)}}}function ht(t){let e,n,r=(t[0]||"anonymous")+"",l;return{c(){e=b("p"),n=P("...loading as "),l=P(r)},m(o,s){p(o,e,s),$(e,n),$(e,l)},p(o,s){s&1&&r!==(r=(o[0]||"anonymous")+"")&&re(l,r)},d(o){o&&h(e)}}}function pt(t){let e,n,r,l,o={ctx:t,current:null,token:null,hasCatch:!0,pending:ht,then:at,catch:ct,value:9,error:10};return F(l=t[2],o),{c(){e=b("summary"),e.textContent="Fill in ballot",n=S(),r=te(),o.block.c()},m(s,i){p(s,e,i),p(s,n,i),p(s,r,i),o.block.m(s,o.anchor=i),o.mount=()=>r.parentNode,o.anchor=r},p(s,[i]){t=s,o.ctx=t,i&4&&l!==(l=t[2])&&F(l,o)||de(o,t,i)},i:R,o:R,d(s){s&&(h(e),h(n),h(r)),o.block.d(s),o.token=null,o=null}}}function _t(t,e,n){var r=this&&this.__awaiter||function(d,_,E,v){function A(g){return g instanceof E?g:new E(function(w){w(g)})}return new(E||(E=Promise))(function(g,w){function k(L){try{y(v.next(L))}catch(T){w(T)}}function c(L){try{y(v.throw(L))}catch(T){w(T)}}function y(L){L.done?g(L.value):A(L.value).then(k,c)}y((v=v.apply(d,_||[])).next())})};let{url:l,username:o,token:s,registerEncryptedBallot:i}=e,a,u;const m=typeof TextEncoder>"u"?{encode(){}}:new TextEncoder;function f(d){d.preventDefault();const _=this.elements.namedItem("ballot");i((()=>r(this,void 0,void 0,function*(){const{encryptedSecret:E,saltedCiphertext:v}=yield ut(m.encode(_.value),yield u);return JSON.stringify({encryptedSecret:be(new Uint8Array(E)),data:be(v)})}))())}return a=u=Promise.reject("no data"),$e(()=>{De({url:l,username:o,token:s},d=>{n(2,[a,u]=d,a,n(3,u))})}),t.$$set=d=>{"url"in d&&n(5,l=d.url),"username"in d&&n(0,o=d.username),"token"in d&&n(1,s=d.token),"registerEncryptedBallot"in d&&n(6,i=d.registerEncryptedBallot)},[o,s,a,u,f,l,i]}class yt extends J{constructor(e){super(),W(this,e,_t,pt,q,{url:5,username:0,token:1,registerEncryptedBallot:6})}}function bt(t){let e,n,r,l,o,s,i,a,u,m,f,d,_,E,v,A,g,w,k;return{c(){e=b("summary"),e.textContent="GitHub credentials",n=S(),r=b("p"),r.textContent=`If you are trying to vote on a private repository, or hitting GitHub API rate
  limits, you can supply a token for the API calls.`,l=S(),o=b("form"),s=b("div"),i=b("label"),a=P(`Username:
      `),u=b("input"),m=S(),f=b("label"),d=P(`Token:
      `),_=b("input"),E=S(),v=b("button"),v.textContent="Save",A=S(),g=b("p"),g.innerHTML="The token should have at least the <code>repo</code> permissions.",C(u,"name","username"),u.value=t[0],C(i,"class","svelte-ttd1cx"),C(_,"name","token"),_.value=t[1],C(_,"type","password"),C(_,"placeholder","gho_…"),C(f,"class","svelte-ttd1cx"),C(v,"type","submit"),C(s,"class","svelte-ttd1cx"),C(o,"class","svelte-ttd1cx")},m(c,y){p(c,e,y),p(c,n,y),p(c,r,y),p(c,l,y),p(c,o,y),$(o,s),$(s,i),$(i,a),$(i,u),$(s,m),$(s,f),$(f,d),$(f,_),$(s,E),$(s,v),p(c,A,y),p(c,g,y),w||(k=ne(o,"submit",t[2]),w=!0)},p(c,[y]){y&1&&u.value!==c[0]&&(u.value=c[0]),y&2&&_.value!==c[1]&&(_.value=c[1])},i:R,o:R,d(c){c&&(h(e),h(n),h(r),h(l),h(o),h(A),h(g)),w=!1,k()}}}function gt(t,e,n){let{updateAuth:r,username:l,token:o}=e;function s(i){i.preventDefault(),r(this.username.value,this.token.value)}return t.$$set=i=>{"updateAuth"in i&&n(3,r=i.updateAuth),"username"in i&&n(0,l=i.username),"token"in i&&n(1,o=i.token)},[l,o,s,r]}class wt extends J{constructor(e){super(),W(this,e,gt,bt,q,{updateAuth:3,username:0,token:1})}}function kt(t){let e,n,r,l,o,s,i,a,u,m,f;return{c(){e=b("summary"),e.textContent="Get URL to load the data",n=S(),r=b("form"),l=b("div"),o=b("label"),s=P(`URL:
      `),i=b("input"),a=S(),u=b("input"),C(i,"type","url"),i.value=t[0],C(i,"name","url"),C(i,"class","svelte-bptx4u"),C(o,"class","svelte-bptx4u"),C(u,"type","submit"),u.value="Load data",C(l,"class","svelte-bptx4u"),C(r,"class","svelte-bptx4u")},m(d,_){p(d,e,_),p(d,n,_),p(d,r,_),$(r,l),$(l,o),$(o,s),$(o,i),$(l,a),$(l,u),m||(f=ne(r,"submit",vt),m=!0)},p(d,[_]){_&1&&i.value!==d[0]&&(i.value=d[0])},i:R,o:R,d(d){d&&(h(e),h(n),h(r)),m=!1,f()}}}function vt(t){t.preventDefault(),globalThis.location.hash=this.elements.namedItem("url").value}function $t(t,e,n){let{url:r}=e;return t.$$set=l=>{"url"in l&&n(0,r=l.url)},[r]}class Ct extends J{constructor(e){super(),W(this,e,$t,kt,q,{url:0})}}function Et(t){let e,n,r,l,o,s,i,a,u,m,f,d,_,E,v,A,g,w,k;return l=new wt({props:{updateAuth:t[5],username:t[2],token:t[3]}}),u=new Ct({props:{url:t[1]}}),_=new yt({props:{url:t[1],username:t[2],token:t[3],registerEncryptedBallot:t[6]}}),g=new Ze({props:{encryptDataPromise:t[0],url:t[1]}}),{c(){e=b("h1"),e.textContent="Caritat",n=S(),r=b("details"),Q(l.$$.fragment),o=S(),s=b("hr"),i=S(),a=b("details"),Q(u.$$.fragment),f=S(),d=b("details"),Q(_.$$.fragment),v=S(),A=b("details"),Q(g.$$.fragment),a.open=m=t[4]===0,d.open=E=t[4]===1,A.open=w=t[4]===2},m(c,y){p(c,e,y),p(c,n,y),p(c,r,y),O(l,r,null),p(c,o,y),p(c,s,y),p(c,i,y),p(c,a,y),O(u,a,null),p(c,f,y),p(c,d,y),O(_,d,null),p(c,v,y),p(c,A,y),O(g,A,null),k=!0},p(c,[y]){const L={};y&4&&(L.username=c[2]),y&8&&(L.token=c[3]),l.$set(L);const T={};y&2&&(T.url=c[1]),u.$set(T),(!k||y&16&&m!==(m=c[4]===0))&&(a.open=m);const Y={};y&2&&(Y.url=c[1]),y&4&&(Y.username=c[2]),y&8&&(Y.token=c[3]),_.$set(Y),(!k||y&16&&E!==(E=c[4]===1))&&(d.open=E);const oe={};y&1&&(oe.encryptDataPromise=c[0]),y&2&&(oe.url=c[1]),g.$set(oe),(!k||y&16&&w!==(w=c[4]===2))&&(A.open=w)},i(c){k||(z(l.$$.fragment,c),z(u.$$.fragment,c),z(_.$$.fragment,c),z(g.$$.fragment,c),k=!0)},o(c){G(l.$$.fragment,c),G(u.$$.fragment,c),G(_.$$.fragment,c),G(g.$$.fragment,c),k=!1},d(c){c&&(h(e),h(n),h(r),h(o),h(s),h(i),h(a),h(f),h(d),h(v),h(A)),D(l),D(u),D(_),D(g)}}}function At(t,e,n){var r;let l=new Promise(()=>{}),o=(r=globalThis.location)===null||r===void 0?void 0:r.hash.slice(1),s="",i="";function a(f,d){n(2,s=f),n(3,i=d)}let u=o?1:0;addEventListener("hashchange",()=>{var f;n(1,o=(f=globalThis.location)===null||f===void 0?void 0:f.hash.slice(1)),n(4,u=o?Math.max(u,1):0)});function m(f){n(0,l=f),f.then(()=>{n(4,u=2)},()=>{n(4,u=Math.min(u,1))})}return[l,o,s,i,u,a,m]}class St extends J{constructor(e){super(),W(this,e,At,Et,q,{})}}new St({target:document.getElementById("app")});
