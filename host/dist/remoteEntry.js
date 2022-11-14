var host;(()=>{"use strict";var e,r,t,n,a={84:(e,r,t)=>{var n={"./App":()=>Promise.all([t.e(822),t.e(460)]).then((()=>()=>t(460)))},a=(e,r)=>(t.R=r,r=t.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),o=(e,r)=>{if(t.S){var n="default",a=t.S[n];if(a&&a!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[n]=e,t.I(n,r)}};t.d(r,{get:()=>a,init:()=>o})},632:(e,r,t)=>{var n=new Error;e.exports=new Promise(((e,r)=>{if("undefined"!=typeof team1)return e();t.l("http://localhost:3001/remoteEntry.js",(t=>{if("undefined"!=typeof team1)return e();var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;n.message="Loading script failed.\n("+a+": "+o+")",n.name="ScriptExternalLoadError",n.type=a,n.request=o,r(n)}),"team1")})).then((()=>team1))},936:(e,r,t)=>{var n=new Error;e.exports=new Promise(((e,r)=>{if("undefined"!=typeof team2)return e();t.l("http://localhost:3002/remoteEntry.js",(t=>{if("undefined"!=typeof team2)return e();var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;n.message="Loading script failed.\n("+a+": "+o+")",n.name="ScriptExternalLoadError",n.type=a,n.request=o,r(n)}),"team2")})).then((()=>team2))}},o={};function i(e){var r=o[e];if(void 0!==r)return r.exports;var t=o[e]={exports:{}};return a[e](t,t.exports,i),t.exports}i.m=a,i.c=o,i.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return i.d(r,{a:r}),r},i.d=(e,r)=>{for(var t in r)i.o(r,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((r,t)=>(i.f[t](e,r),r)),[])),i.u=e=>e+".js",i.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="team-1:",i.l=(t,n,a,o)=>{if(e[t])e[t].push(n);else{var s,u;if(void 0!==a)for(var l=document.getElementsByTagName("script"),f=0;f<l.length;f++){var d=l[f];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==r+a){s=d;break}}s||(u=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.setAttribute("data-webpack",r+a),s.src=t),e[t]=[n];var p=(r,n)=>{s.onerror=s.onload=null,clearTimeout(h);var a=e[t];if(delete e[t],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach((e=>e(n))),r)return r(n)},h=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),u&&document.head.appendChild(s)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t={460:[561,314,59]},n={59:["default","./Slider",936],314:["default","./Footer",632],561:["default","./Header",632]},i.f.remotes=(e,r)=>{i.o(t,e)&&t[e].forEach((e=>{var t=i.R;t||(t=[]);var a=n[e];if(!(t.indexOf(a)>=0)){if(t.push(a),a.p)return r.push(a.p);var o=r=>{r||(r=new Error("Container missing")),"string"==typeof r.message&&(r.message+='\nwhile loading "'+a[1]+'" from '+a[2]),i.m[e]=()=>{throw r},a.p=0},s=(e,t,n,i,s,u)=>{try{var l=e(t,n);if(!l||!l.then)return s(l,i,u);var f=l.then((e=>s(e,i)),o);if(!u)return f;r.push(a.p=f)}catch(e){o(e)}},u=(e,r,n)=>s(r.get,a[1],t,0,l,n),l=r=>{a.p=1,i.m[e]=e=>{e.exports=r()}};s(i,a[2],0,0,((e,r,t)=>e?s(i.I,a[0],0,e,u,t):o()),1)}}))},(()=>{i.S={};var e={},r={};i.I=(t,n)=>{n||(n=[]);var a=r[t];if(a||(a=r[t]={}),!(n.indexOf(a)>=0)){if(n.push(a),e[t])return e[t];i.o(i.S,t)||(i.S[t]={});var o=i.S[t],s="team-1",u=(e,r,t,n)=>{var a=o[e]=o[e]||{},i=a[r];(!i||!i.loaded&&(!n!=!i.eager?n:s>i.from))&&(a[r]={get:t,from:s,eager:!!n})},l=e=>{var r=e=>{return r="Initialization of sharing external failed: "+e,"undefined"!=typeof console&&console.warn&&console.warn(r);var r};try{var a=i(e);if(!a)return;var o=e=>e&&e.init&&e.init(i.S[t],n);if(a.then)return f.push(a.then(o,r));var s=o(a);if(s&&s.then)return f.push(s.catch(r))}catch(e){r(e)}},f=[];return"default"===t&&(u("react-dom","18.2.0",(()=>Promise.all([i.e(935),i.e(822)]).then((()=>()=>i(935))))),u("react","18.2.0",(()=>i.e(294).then((()=>()=>i(294))))),l(632),l(936)),f.length?e[t]=Promise.all(f).then((()=>e[t]=1)):e[t]=1}}})(),i.p="http://localhost:3000/",(()=>{var e=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},r=(t,n)=>{if(0 in t){n=e(n);var a=t[0],o=a<0;o&&(a=-a-1);for(var i=0,s=1,u=!0;;s++,i++){var l,f,d=s<t.length?(typeof t[s])[0]:"";if(i>=n.length||"o"==(f=(typeof(l=n[i]))[0]))return!u||("u"==d?s>a&&!o:""==d!=o);if("u"==f){if(!u||"u"!=d)return!1}else if(u)if(d==f)if(s<=a){if(l!=t[s])return!1}else{if(o?l>t[s]:l<t[s])return!1;l!=t[s]&&(u=!1)}else if("s"!=d&&"n"!=d){if(o||s<=a)return!1;u=!1,s--}else{if(s<=a||f<d!=o)return!1;u=!1}else"s"!=d&&"n"!=d&&(u=!1,s--)}}var p=[],h=p.pop.bind(p);for(i=1;i<t.length;i++){var c=t[i];p.push(1==c?h()|h():2==c?h()&h():c?r(c,n):!h())}return!!h()},t=(t,n,a)=>{var o=t[n];return(n=Object.keys(o).reduce(((t,n)=>!r(a,n)||t&&!((r,t)=>{r=e(r),t=e(t);for(var n=0;;){if(n>=r.length)return n<t.length&&"u"!=(typeof t[n])[0];var a=r[n],o=(typeof a)[0];if(n>=t.length)return"u"==o;var i=t[n],s=(typeof i)[0];if(o!=s)return"o"==o&&"n"==s||"s"==s||"u"==o;if("o"!=o&&"u"!=o&&a!=i)return a<i;n++}})(t,n)?t:n),0))&&o[n]},n=(e=>function(r,t,n,a){var o=i.I(r);return o&&o.then?o.then(e.bind(e,r,i.S[r],t,n,a)):e(r,i.S[r],t,n,a)})(((e,r,n,a,o)=>{var s=r&&i.o(r,n)&&t(r,n,a);return s?(e=>(e.loaded=1,e.get()))(s):o()})),a={},o={822:()=>n("default","react",[1,18,2,0],(()=>i.e(294).then((()=>()=>i(294)))))},s={822:[822]};i.f.consumes=(e,r)=>{i.o(s,e)&&s[e].forEach((e=>{if(i.o(a,e))return r.push(a[e]);var t=r=>{a[e]=0,i.m[e]=t=>{delete i.c[e],t.exports=r()}},n=r=>{delete a[e],i.m[e]=t=>{throw delete i.c[e],r}};try{var s=o[e]();s.then?r.push(a[e]=s.then(t).catch(n)):t(s)}catch(e){n(e)}}))}})(),(()=>{var e={403:0};i.f.j=(r,t)=>{var n=i.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(822!=r){var a=new Promise(((t,a)=>n=e[r]=[t,a]));t.push(n[2]=a);var o=i.p+i.u(r),s=new Error;i.l(o,(t=>{if(i.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;s.message="Loading chunk "+r+" failed.\n("+a+": "+o+")",s.name="ChunkLoadError",s.type=a,s.request=o,n[1](s)}}),"chunk-"+r,r)}else e[r]=0};var r=(r,t)=>{var n,a,[o,s,u]=t,l=0;if(o.some((r=>0!==e[r]))){for(n in s)i.o(s,n)&&(i.m[n]=s[n]);u&&u(i)}for(r&&r(t);l<o.length;l++)a=o[l],i.o(e,a)&&e[a]&&e[a][0](),e[a]=0},t=self.webpackChunkteam_1=self.webpackChunkteam_1||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var s=i(84);host=s})();