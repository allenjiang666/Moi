import{t as m,v as b,x as B,J as V,K,L as M,y as C,a as Q,M as T,r as _,N as X,O as Z,P as ee,Q as te,E as ae,R as W,S as se,T as g,I as re,U as ne,i as q,V as I,W as oe,X as ie,q as le,Y as z,Z as $,$ as U,z as H,o as ce}from"./C4K6Zhh6.js";import ue from"./BasTVDf7.js";const Y=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function de(a,r){r?r={...Y,...r}:r=Y;const s=J(r);return s.dispatch(a),s.toString()}const he=Object.freeze(["prototype","__proto__","constructor"]);function J(a){let r="",s=new Map;const t=e=>{r+=e};return{toString(){return r},getContext(){return s},dispatch(e){return a.replacer&&(e=a.replacer(e)),this[e===null?"null":typeof e](e)},object(e){if(e&&typeof e.toJSON=="function")return this.object(e.toJSON());const n=Object.prototype.toString.call(e);let c="";const f=n.length;f<10?c="unknown:["+n+"]":c=n.slice(8,f-1),c=c.toLowerCase();let o=null;if((o=s.get(e))===void 0)s.set(e,s.size);else return this.dispatch("[CIRCULAR:"+o+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(e))return t("buffer:"),t(e.toString("utf8"));if(c!=="object"&&c!=="function"&&c!=="asyncfunction")this[c]?this[c](e):a.ignoreUnknown||this.unkown(e,c);else{let u=Object.keys(e);a.unorderedObjects&&(u=u.sort());let d=[];a.respectType!==!1&&!j(e)&&(d=he),a.excludeKeys&&(u=u.filter(i=>!a.excludeKeys(i)),d=d.filter(i=>!a.excludeKeys(i))),t("object:"+(u.length+d.length)+":");const l=i=>{this.dispatch(i),t(":"),a.excludeValues||this.dispatch(e[i]),t(",")};for(const i of u)l(i);for(const i of d)l(i)}},array(e,n){if(n=n===void 0?a.unorderedArrays!==!1:n,t("array:"+e.length+":"),!n||e.length<=1){for(const o of e)this.dispatch(o);return}const c=new Map,f=e.map(o=>{const u=J(a);u.dispatch(o);for(const[d,l]of u.getContext())c.set(d,l);return u.toString()});return s=c,f.sort(),this.array(f,!1)},date(e){return t("date:"+e.toJSON())},symbol(e){return t("symbol:"+e.toString())},unkown(e,n){if(t(n),!!e&&(t(":"),e&&typeof e.entries=="function"))return this.array(Array.from(e.entries()),!0)},error(e){return t("error:"+e.toString())},boolean(e){return t("bool:"+e)},string(e){t("string:"+e.length+":"),t(e)},function(e){t("fn:"),j(e)?this.dispatch("[native]"):this.dispatch(e.toString()),a.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(e.name)),a.respectFunctionProperties&&this.object(e)},number(e){return t("number:"+e)},xml(e){return t("xml:"+e.toString())},null(){return t("Null")},undefined(){return t("Undefined")},regexp(e){return t("regex:"+e.toString())},uint8array(e){return t("uint8array:"),this.dispatch(Array.prototype.slice.call(e))},uint8clampedarray(e){return t("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(e))},int8array(e){return t("int8array:"),this.dispatch(Array.prototype.slice.call(e))},uint16array(e){return t("uint16array:"),this.dispatch(Array.prototype.slice.call(e))},int16array(e){return t("int16array:"),this.dispatch(Array.prototype.slice.call(e))},uint32array(e){return t("uint32array:"),this.dispatch(Array.prototype.slice.call(e))},int32array(e){return t("int32array:"),this.dispatch(Array.prototype.slice.call(e))},float32array(e){return t("float32array:"),this.dispatch(Array.prototype.slice.call(e))},float64array(e){return t("float64array:"),this.dispatch(Array.prototype.slice.call(e))},arraybuffer(e){return t("arraybuffer:"),this.dispatch(new Uint8Array(e))},url(e){return t("url:"+e.toString())},map(e){t("map:");const n=[...e];return this.array(n,a.unorderedSets!==!1)},set(e){t("set:");const n=[...e];return this.array(n,a.unorderedSets!==!1)},file(e){return t("file:"),this.dispatch([e.name,e.size,e.type,e.lastModfied])},blob(){if(a.ignoreUnknown)return t("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return t("domwindow")},bigint(e){return t("bigint:"+e.toString())},process(){return t("process")},timer(){return t("timer")},pipe(){return t("pipe")},tcp(){return t("tcp")},udp(){return t("udp")},tty(){return t("tty")},statwatcher(){return t("statwatcher")},securecontext(){return t("securecontext")},connection(){return t("connection")},zlib(){return t("zlib")},context(){return t("context")},nodescript(){return t("nodescript")},httpparser(){return t("httpparser")},dataview(){return t("dataview")},signal(){return t("signal")},fsevent(){return t("fsevent")},tlswrap(){return t("tlswrap")}}}const G="[native code] }",fe=G.length;function j(a){return typeof a!="function"?!1:Function.prototype.toString.call(a).slice(-fe)===G}var pe=Object.defineProperty,ye=(a,r,s)=>r in a?pe(a,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[r]=s,O=(a,r,s)=>(ye(a,typeof r!="symbol"?r+"":r,s),s);class D{constructor(r,s){O(this,"words"),O(this,"sigBytes"),r=this.words=r||[],this.sigBytes=s===void 0?r.length*4:s}toString(r){return(r||ge).stringify(this)}concat(r){if(this.clamp(),this.sigBytes%4)for(let s=0;s<r.sigBytes;s++){const t=r.words[s>>>2]>>>24-s%4*8&255;this.words[this.sigBytes+s>>>2]|=t<<24-(this.sigBytes+s)%4*8}else for(let s=0;s<r.sigBytes;s+=4)this.words[this.sigBytes+s>>>2]=r.words[s>>>2];return this.sigBytes+=r.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new D([...this.words])}}const ge={stringify(a){const r=[];for(let s=0;s<a.sigBytes;s++){const t=a.words[s>>>2]>>>24-s%4*8&255;r.push((t>>>4).toString(16),(t&15).toString(16))}return r.join("")}},me={stringify(a){const r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",s=[];for(let t=0;t<a.sigBytes;t+=3){const e=a.words[t>>>2]>>>24-t%4*8&255,n=a.words[t+1>>>2]>>>24-(t+1)%4*8&255,c=a.words[t+2>>>2]>>>24-(t+2)%4*8&255,f=e<<16|n<<8|c;for(let o=0;o<4&&t*8+o*6<a.sigBytes*8;o++)s.push(r.charAt(f>>>6*(3-o)&63))}return s.join("")}},ke={parse(a){const r=a.length,s=[];for(let t=0;t<r;t++)s[t>>>2]|=(a.charCodeAt(t)&255)<<24-t%4*8;return new D(s,r)}},xe={parse(a){return ke.parse(unescape(encodeURIComponent(a)))}};class ve{constructor(){O(this,"_data",new D),O(this,"_nDataBytes",0),O(this,"_minBufferSize",0),O(this,"blockSize",512/32)}reset(){this._data=new D,this._nDataBytes=0}_append(r){typeof r=="string"&&(r=xe.parse(r)),this._data.concat(r),this._nDataBytes+=r.sigBytes}_doProcessBlock(r,s){}_process(r){let s,t=this._data.sigBytes/(this.blockSize*4);r?t=Math.ceil(t):t=Math.max((t|0)-this._minBufferSize,0);const e=t*this.blockSize,n=Math.min(e*4,this._data.sigBytes);if(e){for(let c=0;c<e;c+=this.blockSize)this._doProcessBlock(this._data.words,c);s=this._data.words.splice(0,e),this._data.sigBytes-=n}return new D(s,n)}}class we extends ve{update(r){return this._append(r),this._process(),this}finalize(r){r&&this._append(r)}}var be=Object.defineProperty,Be=(a,r,s)=>r in a?be(a,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[r]=s,_e=(a,r,s)=>(Be(a,r+"",s),s);const L=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],Ae=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],P=[];class De extends we{constructor(){super(...arguments),_e(this,"_hash",new D([...L]))}reset(){super.reset(),this._hash=new D([...L])}_doProcessBlock(r,s){const t=this._hash.words;let e=t[0],n=t[1],c=t[2],f=t[3],o=t[4],u=t[5],d=t[6],l=t[7];for(let i=0;i<64;i++){if(i<16)P[i]=r[s+i]|0;else{const h=P[i-15],S=(h<<25|h>>>7)^(h<<14|h>>>18)^h>>>3,w=P[i-2],N=(w<<15|w>>>17)^(w<<13|w>>>19)^w>>>10;P[i]=S+P[i-7]+N+P[i-16]}const v=o&u^~o&d,p=e&n^e&c^n&c,A=(e<<30|e>>>2)^(e<<19|e>>>13)^(e<<10|e>>>22),y=(o<<26|o>>>6)^(o<<21|o>>>11)^(o<<7|o>>>25),k=l+y+v+Ae[i]+P[i],x=A+p;l=d,d=u,u=o,o=f+k|0,f=c,c=n,n=e,e=k+x|0}t[0]=t[0]+e|0,t[1]=t[1]+n|0,t[2]=t[2]+c|0,t[3]=t[3]+f|0,t[4]=t[4]+o|0,t[5]=t[5]+u|0,t[6]=t[6]+d|0,t[7]=t[7]+l|0}finalize(r){super.finalize(r);const s=this._nDataBytes*8,t=this._data.sigBytes*8;return this._data.words[t>>>5]|=128<<24-t%32,this._data.words[(t+64>>>9<<4)+14]=Math.floor(s/4294967296),this._data.words[(t+64>>>9<<4)+15]=s,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function Se(a){return new De().finalize(a).toString(me)}function Pe(a,r={}){const s=typeof a=="string"?a:de(a,r);return Se(s).slice(0,10)}const Me=[{id:1,title:"Greetings",conversation:[{speaker:"A",text:"Hi! How are you?",translation:"嗨！你好吗？"},{speaker:"B",text:"I am good, thank you. How about you?",translation:"我很好，谢谢。你呢？"},{speaker:"A",text:"I am fine. Nice to see you!",translation:"我很好。很高兴见到你！"},{speaker:"B",text:"Nice to see you too!",translation:"我也很高兴见到你！"},{speaker:"A",text:"Are you having a good day?",translation:"你今天过得好吗？"},{speaker:"B",text:"Yes, it's been wonderful!",translation:"是的，很精彩！"}]},{id:2,title:"Introducing Yourself",conversation:[{speaker:"A",text:"What is your name?",translation:"你叫什么名字？"},{speaker:"B",text:"My name is Anna. What is your name?",translation:"我叫安娜。你叫什么名字？"},{speaker:"A",text:"I am John. Nice to meet you!",translation:"我是约翰。很高兴认识你！"},{speaker:"B",text:"Nice to meet you too!",translation:"我也很高兴认识你！"},{speaker:"A",text:"Where are you from, Anna?",translation:"安娜，你来自哪里？"},{speaker:"B",text:"I'm from Canada. How about you?",translation:"我来自加拿大。你呢？"}]},{id:3,title:"Talking About Family",conversation:[{speaker:"A",text:"Do you have a family?",translation:"你有家人吗？"},{speaker:"B",text:"Yes, I have a mother, father, and one sister.",translation:"是的，我有妈妈、爸爸和一个妹妹。"},{speaker:"A",text:"That is nice. I have two brothers.",translation:"那很好。我有两个兄弟。"},{speaker:"B",text:"Do you live with them?",translation:"你和他们住在一起吗？"},{speaker:"A",text:"Yes, we live in a big house.",translation:"是的，我们住在一个大房子里。"},{speaker:"B",text:"That sounds wonderful!",translation:"听起来很棒！"}]},{id:4,title:"Asking for Directions",conversation:[{speaker:"A",text:"Excuse me, where is the store?",translation:"对不起，请问商店在哪里？"},{speaker:"B",text:"It is over there, near the park.",translation:"就在那边，公园附近。"},{speaker:"A",text:"Thank you! Is it far?",translation:"谢谢！远吗？"},{speaker:"B",text:"No, it is not far. You can walk there.",translation:"不远，你可以走着去。"},{speaker:"A",text:"How long will it take?",translation:"需要多长时间？"},{speaker:"B",text:"About five minutes by walking.",translation:"走路大约五分钟。"}]},{id:5,title:"Ordering Food",conversation:[{speaker:"A",text:"What do you want to eat?",translation:"你想吃什么？"},{speaker:"B",text:"I want a sandwich and some water.",translation:"我想要一个三明治和一些水。"},{speaker:"A",text:"I will have the same. Do you like the food here?",translation:"我也要一样的。你喜欢这里的食物吗？"},{speaker:"B",text:"Yes, it is very good.",translation:"是的，很好吃。"},{speaker:"A",text:"Would you like anything else?",translation:"你还想要其他的吗？"},{speaker:"B",text:"No, thank you. This is enough.",translation:"不用了，谢谢。这些就够了。"}]},{id:6,title:"Talking About the Weather",conversation:[{speaker:"A",text:"How is the weather today?",translation:"今天天气怎么样？"},{speaker:"B",text:"It is sunny and warm.",translation:"天气晴朗温暖。"},{speaker:"A",text:"I like this weather. Do you?",translation:"我喜欢这样的天气。你呢？"},{speaker:"B",text:"Yes, I love it!",translation:"是的，我很喜欢！"},{speaker:"A",text:"Perfect day for a walk outside!",translation:"是个出去散步的好天气！"},{speaker:"B",text:"You're right! Let's go together.",translation:"你说得对！我们一起去吧。"}]},{id:7,title:"Making Plans",conversation:[{speaker:"A",text:"What do you want to do today?",translation:"今天你想做什么？"},{speaker:"B",text:"Let's go to the park.",translation:"我们去公园吧。"},{speaker:"A",text:"That sounds fun! Can we go now?",translation:"听起来很有趣！我们现在能去吗？"},{speaker:"B",text:"Yes, let's go!",translation:"好的，我们走吧！"},{speaker:"A",text:"Should we bring some snacks?",translation:"我们要带些零食吗？"},{speaker:"B",text:"Good idea! I'll pack some sandwiches.",translation:"好主意！我来准备些三明治。"}]},{id:8,title:"Shopping",conversation:[{speaker:"A",text:"How much is this shirt?",translation:"这件衬衫多少钱？"},{speaker:"B",text:"It is ten dollars.",translation:"十美元。"},{speaker:"A",text:"Do you have it in a smaller size?",translation:"你们有小一点的尺码吗？"},{speaker:"B",text:"Yes, here you go.",translation:"是的，给你。"},{speaker:"A",text:"Can I try it on?",translation:"我可以试穿吗？"},{speaker:"B",text:"Of course, the fitting room is over there.",translation:"当然可以，试衣间在那边。"}]},{id:9,title:"Talking About Hobbies",conversation:[{speaker:"A",text:"What do you like to do?",translation:"你喜欢做什么？"},{speaker:"B",text:"I like to read books and play games.",translation:"我喜欢读书和玩游戏。"},{speaker:"A",text:"That sounds fun. I like to watch movies.",translation:"听起来很有趣。我喜欢看电影。"},{speaker:"B",text:"We should watch a movie together!",translation:"我们应该一起看电影！"}]},{id:10,title:"Saying Goodbye",conversation:[{speaker:"A",text:"It was nice talking to you.",translation:"很高兴和你聊天。"},{speaker:"B",text:"Yes, it was nice talking to you too.",translation:"是的，我也很高兴和你聊天。"},{speaker:"A",text:"I hope we can meet again soon.",translation:"希望我们能很快再见。"},{speaker:"B",text:"Me too! Have a great day!",translation:"我也是！祝你有愉快的一天！"},{speaker:"A",text:"See you later!",translation:"再见！"},{speaker:"B",text:"See you!",translation:"再见！"}]},{id:11,title:"Asking for Help",conversation:[{speaker:"A",text:"Can you help me, please?",translation:"请问你能帮我吗？"},{speaker:"B",text:"Of course! What do you need?",translation:"当然可以！你需要什么帮助？"},{speaker:"A",text:"I need to find the bus stop.",translation:"我需要找到公交车站。"},{speaker:"B",text:"It is just around the corner.",translation:"就在拐角处。"},{speaker:"A",text:"Thank you so much for your help!",translation:"非常感谢你的帮助！"},{speaker:"B",text:"You're welcome! Have a good day!",translation:"不客气！祝你有愉快的一天！"}]},{id:12,title:"Talking About Work",conversation:[{speaker:"A",text:"Where do you work?",translation:"你在哪里工作？"},{speaker:"B",text:"I work at a school. What about you?",translation:"我在学校工作。你呢？"},{speaker:"A",text:"I work at a store. Do you like your job?",translation:"我在商店工作。你喜欢你的工作吗？"},{speaker:"B",text:"Yes, I love it!",translation:"是的，我很喜欢！"},{speaker:"A",text:"What do you teach at school?",translation:"你在学校教什么？"},{speaker:"B",text:"I teach English to young students.",translation:"我教小学生英语。"}]},{id:13,title:"Talking About Time",conversation:[{speaker:"A",text:"What time is it?",translation:"现在几点了？"},{speaker:"B",text:"It is three o'clock.",translation:"现在三点钟。"},{speaker:"A",text:"Oh no, I am late!",translation:"哦不，我迟到了！"},{speaker:"B",text:"Don't worry, you have time.",translation:"别担心，你还有时间。"},{speaker:"A",text:"Are you sure? My meeting is at 3:30.",translation:"你确定吗？我的会议是3:30。"},{speaker:"B",text:"Yes, you still have 30 minutes.",translation:"是的，你还有30分钟。"}]},{id:14,title:"Talking About Feelings",conversation:[{speaker:"A",text:"How do you feel today?",translation:"你今天感觉如何？"},{speaker:"B",text:"I feel happy. How about you?",translation:"我感觉很开心。你呢？"},{speaker:"A",text:"I feel tired, but I am okay.",translation:"我感觉有点累，但还好。"},{speaker:"B",text:"You should rest.",translation:"你应该休息一下。"},{speaker:"A",text:"Maybe you're right. I worked a lot today.",translation:"也许你说得对。我今天工作很多。"},{speaker:"B",text:"Take care of yourself!",translation:"照顾好自己！"}]},{id:15,title:"Talking About Food",conversation:[{speaker:"A",text:"Do you like pizza?",translation:"你喜欢披萨吗？"},{speaker:"B",text:"Yes, I love pizza! Do you?",translation:"是的，我很喜欢披萨！你呢？"},{speaker:"A",text:"Yes, it is my favorite food.",translation:"是的，这是我最喜欢的食物。"},{speaker:"B",text:"Let's eat some together!",translation:"我们一起吃吧！"},{speaker:"A",text:"Which pizza topping do you prefer?",translation:"你喜欢什么口味的披萨？"},{speaker:"B",text:"I love pepperoni and cheese!",translation:"我喜欢意大利香肠和奶酪！"}]}],Ie={dialogues:Me},Ce={class:"w-1/4 bg-white border-r border-gray-200 p-4 overflow-y-auto"},Te={class:"space-y-2"},Oe=["onClick"],ze={class:"text-sm font-medium"},Re={__name:"Sidebar",props:{dialogues:{type:Array,required:!0},selectedDialogueId:{type:Number,default:null}},emits:["select"],setup(a){return(r,s)=>(m(),b("div",Ce,[s[0]||(s[0]=B("h1",{class:"text-2xl font-bold text-primary mb-6"},"Moi",-1)),B("div",Te,[(m(!0),b(V,null,K(a.dialogues,t=>(m(),b("button",{key:t.id,onClick:e=>r.$emit("select",t),class:M(["w-full text-left p-3 rounded-lg transition-colors duration-200 ease-in-out",{"bg-primary/10 text-primary":a.selectedDialogueId===t.id,"hover:bg-gray-100":a.selectedDialogueId!==t.id}])},[B("h2",ze,C(t.title),1)],10,Oe))),128))])]))}},$e=a=>a==="defer"||a===!1;function He(...a){var A;const r=typeof a[a.length-1]=="string"?a.pop():void 0;typeof a[0]!="string"&&a.unshift(r);let[s,t,e={}]=a;if(typeof s!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof t!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const n=Q(),c=t,f=()=>T.value,o=()=>n.isHydrating?n.payload.data[s]:n.static.data[s];e.server=e.server??!0,e.default=e.default??f,e.getCachedData=e.getCachedData??o,e.lazy=e.lazy??!1,e.immediate=e.immediate??!0,e.deep=e.deep??T.deep,e.dedupe=e.dedupe??"cancel";const u=e.getCachedData(s,n),d=u!=null;if(!n._asyncData[s]||!e.immediate){(A=n.payload._errors)[s]??(A[s]=T.errorValue);const y=e.deep?_:X;n._asyncData[s]={data:y(d?u:e.default()),pending:_(!d),error:Z(n.payload._errors,s),status:_("idle"),_default:e.default}}const l={...n._asyncData[s]};delete l._default,l.refresh=l.execute=(y={})=>{if(n._asyncDataPromises[s]){if($e(y.dedupe??e.dedupe))return n._asyncDataPromises[s];n._asyncDataPromises[s].cancelled=!0}if(y._initial||n.isHydrating&&y._initial!==!1){const x=y._initial?u:e.getCachedData(s,n);if(x!=null)return Promise.resolve(x)}l.pending.value=!0,l.status.value="pending";const k=new Promise((x,h)=>{try{x(c(n))}catch(S){h(S)}}).then(async x=>{if(k.cancelled)return n._asyncDataPromises[s];let h=x;e.transform&&(h=await e.transform(x)),e.pick&&(h=Fe(h,e.pick)),n.payload.data[s]=h,l.data.value=h,l.error.value=T.errorValue,l.status.value="success"}).catch(x=>{if(k.cancelled)return n._asyncDataPromises[s];l.error.value=se(x),l.data.value=g(e.default()),l.status.value="error"}).finally(()=>{k.cancelled||(l.pending.value=!1,delete n._asyncDataPromises[s])});return n._asyncDataPromises[s]=k,n._asyncDataPromises[s]},l.clear=()=>Ne(n,s);const i=()=>l.refresh({_initial:!0}),v=e.server!==!1&&n.payload.serverRendered;{const y=re();if(y&&v&&e.immediate&&!y.sp&&(y.sp=[]),y&&!y._nuxtOnBeforeMountCbs){y._nuxtOnBeforeMountCbs=[];const h=y._nuxtOnBeforeMountCbs;ee(()=>{h.forEach(S=>{S()}),h.splice(0,h.length)}),te(()=>h.splice(0,h.length))}v&&n.isHydrating&&(l.error.value||u!=null)?(l.pending.value=!1,l.status.value=l.error.value?"error":"success"):y&&(n.payload.serverRendered&&n.isHydrating||e.lazy)&&e.immediate?y._nuxtOnBeforeMountCbs.push(i):e.immediate&&i();const k=ne();if(e.watch){const h=ae(e.watch,()=>l.refresh());k&&W(h)}const x=n.hook("app:data:refresh",async h=>{(!h||h.includes(s))&&await l.refresh()});k&&W(x)}const p=Promise.resolve(n._asyncDataPromises[s]).then(()=>l);return Object.assign(p,l),p}function Ne(a,r){r in a.payload.data&&(a.payload.data[r]=void 0),r in a.payload._errors&&(a.payload._errors[r]=T.errorValue),a._asyncData[r]&&(a._asyncData[r].data.value=void 0,a._asyncData[r].error.value=T.errorValue,a._asyncData[r].pending.value=!1,a._asyncData[r].status.value="idle"),r in a._asyncDataPromises&&(a._asyncDataPromises[r]&&(a._asyncDataPromises[r].cancelled=!0),a._asyncDataPromises[r]=void 0)}function Fe(a,r){const s={};for(const t of r)s[t]=a[t];return s}function Ee(a,r,s){const[t={},e]=typeof r=="string"?[{},r]:[r,s],n=q(()=>I(a)),c=t.key||Pe([e,typeof n.value=="string"?n.value:"",...We(t)]);if(!c||typeof c!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+c);const f=c===e?"$f"+c:c;if(!t.baseURL&&typeof n.value=="string"&&n.value[0]==="/"&&n.value[1]==="/")throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:o,lazy:u,default:d,transform:l,pick:i,watch:v,immediate:p,getCachedData:A,deep:y,dedupe:k,...x}=t,h=oe({...ie,...x,cache:typeof t.cache=="boolean"?void 0:t.cache}),S={server:o,lazy:u,default:d,transform:l,pick:i,immediate:p,getCachedData:A,deep:y,dedupe:k,watch:v===!1?[]:[h,n,...v||[]]};let w;return He(f,()=>{var E;(E=w==null?void 0:w.abort)==null||E.call(w,new DOMException("Request aborted as another request to the same endpoint was initiated.","AbortError")),w=typeof AbortController<"u"?new AbortController:{};const F=I(t.timeout);let R;return F&&(R=setTimeout(()=>w.abort(new DOMException("Request aborted due to timeout.","AbortError")),F),w.signal.onabort=()=>clearTimeout(R)),(t.$fetch||globalThis.$fetch)(n.value,{signal:w.signal,...h}).finally(()=>{clearTimeout(R)})},S)}function We(a){var s;const r=[((s=I(a.method))==null?void 0:s.toUpperCase())||"GET",I(a.baseURL)];for(const t of[a.params||a.query]){const e=I(t);if(!e)continue;const n={};for(const[c,f]of Object.entries(e))n[I(c)]=I(f);r.push(n)}return r}function Ue(){const a=_(!1),r=_(null),s=_([]),t=_(""),e=_(!1),n=async()=>{try{const o=await navigator.mediaDevices.getUserMedia({audio:!0});r.value=new MediaRecorder(o),s.value=[],a.value=!0,r.value.ondataavailable=u=>{s.value.push(u.data)},r.value.start()}catch(o){console.error("Error accessing microphone:",o)}},c=async()=>{if(r.value)return new Promise(o=>{r.value.onstop=async()=>{a.value=!1,await f(),o()},r.value.stop(),r.value.stream.getTracks().forEach(u=>u.stop())})},f=async()=>{var d,l,i,v;if(s.value.length===0)return;const o=new Blob(s.value,{type:"audio/webm"});new FormData().append("audio",o);try{e.value=!0;const p=le(),A=await new Promise(x=>{const h=new FileReader;h.onloadend=()=>x(h.result.split(",")[1]),h.readAsDataURL(o)}),y=await Ee("https://speech.googleapis.com/v1/speech:recognize",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({config:{encoding:"WEBM_OPUS",sampleRateHertz:48e3,languageCode:"en-US"},audio:{content:A}}),query:{key:p.public.googleCloudApiKey}},"$1lEASaDYD9");if(y.error.value)throw y.error.value;const k=y.data.value;if((v=(i=(l=(d=k==null?void 0:k.results)==null?void 0:d[0])==null?void 0:l.alternatives)==null?void 0:i[0])!=null&&v.transcript)t.value=k.results[0].alternatives[0].transcript;else throw new Error("No transcription results found")}catch(p){console.error("Error transcribing audio:",p),t.value=""}finally{e.value=!1}};return{isRecording:a,isTranscribing:e,transcribedText:t,startRecording:n,stopRecording:c}}const Ye={key:0,class:"text-gray-900"},je={key:1,class:"absolute left-0 right-0 -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white text-sm rounded px-2 py-1 text-center mx-4"},Le={key:2,class:"flex items-center space-x-3"},Ve={class:"flex-grow"},Ke={key:0,class:"text-sm text-gray-500"},qe={key:1,class:"text-sm text-gray-700 relative flex items-center gap-2"},Je={key:0,class:"flex-shrink-0"},Ge={class:"flex-grow"},Qe={key:2,class:"text-sm text-gray-400"},Xe={__name:"ChatMessage",props:{speaker:{type:String,required:!0},text:{type:String,required:!0},translation:{type:String,required:!0},isPracticeModeActive:{type:Boolean,default:!1}},emits:["speak"],setup(a,{emit:r}){const s=a,t=r,e=q(()=>{if(!f.value||!s.text)return!1;const l=i=>i.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\?]/g,"").trim();return l(f.value)===l(s.text)}),{isRecording:n,isTranscribing:c,transcribedText:f,startRecording:o,stopRecording:u}=Ue(),d=()=>{(!s.isPracticeModeActive||s.speaker==="A")&&t("speak",s.text,s.speaker)};return(l,i)=>{const v=ue;return m(),b("div",{class:M(["flex items-center",a.speaker==="A"?"justify-start":"justify-end"])},[B("div",{class:M(["flex items-center space-x-4 max-w-[80%]",a.speaker==="A"?"flex-row":"flex-row-reverse space-x-reverse"])},[B("div",{class:M(["flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-2xl",a.speaker==="A"?"bg-primary text-white":"bg-secondary text-white"])},C(a.speaker==="A"?"👩":"👨"),3),B("div",{class:M(["flex-grow p-3 rounded-lg cursor-pointer hover:bg-opacity-90 transition-colors group relative",{"bg-primary/5 shadow-sm":a.speaker==="A","bg-secondary/5 shadow-sm":a.speaker==="B"&&(!g(f)||!a.isPracticeModeActive),"bg-green-100 shadow-sm":a.speaker==="B"&&a.isPracticeModeActive&&g(f)&&e.value,"bg-red-100 shadow-sm":a.speaker==="B"&&a.isPracticeModeActive&&g(f)&&!e.value}]),onClick:d},[!a.isPracticeModeActive||a.speaker==="A"?(m(),b("p",Ye,C(a.text),1)):z("",!0),a.isPracticeModeActive?z("",!0):(m(),b("div",je,C(a.translation),1)),a.isPracticeModeActive&&a.speaker!=="A"?(m(),b("div",Le,[B("div",Ve,[g(c)?(m(),b("div",Ke,"Transcribing...")):g(f)?(m(),b("div",qe,[a.isPracticeModeActive?(m(),b("div",Je,[e.value?(m(),$(v,{key:0,name:"material-symbols:check-circle",class:"w-5 h-5 text-green-500"})):(m(),$(v,{key:1,name:"material-symbols:cancel",class:"w-5 h-5 text-red-500"}))])):z("",!0),B("div",Ge,C(g(f)),1)])):(m(),b("div",Qe,"Click and hold to record"))]),B("button",{onMousedown:i[0]||(i[0]=(...p)=>g(o)&&g(o)(...p)),onMouseup:i[1]||(i[1]=(...p)=>g(u)&&g(u)(...p)),onMouseleave:i[2]||(i[2]=(...p)=>g(u)&&g(u)(...p)),onTouchstart:i[3]||(i[3]=U((...p)=>g(o)&&g(o)(...p),["prevent"])),onTouchend:i[4]||(i[4]=U((...p)=>g(u)&&g(u)(...p),["prevent"])),class:M(["p-2 rounded-full hover:bg-blue-100 transition-colors flex-shrink-0",{"bg-red-100":g(n)}])},[H(v,{name:g(n)?"material-symbols:mic":"material-symbols:mic-outline",class:M(["w-6 h-6",{"text-red-500":g(n),"text-secondary":!g(n)}])},null,8,["name","class"])],34)])):z("",!0)],2)],2)],2)}}},Ze={class:"flex-1 p-8 overflow-y-auto relative"},et={key:0,class:"max-w-3xl mx-auto"},tt={class:"text-3xl font-bold text-gray-900 mb-8"},at={class:"space-y-6"},st={class:"fixed bottom-8 right-8"},rt={__name:"DialogueView",props:{dialogue:{type:Object,default:null},isPracticeModeActive:{type:Boolean,default:!1},currentMessageIndex:{type:Number,default:0}},emits:["speak","togglePractice"],setup(a){return(r,s)=>(m(),b("div",Ze,[a.dialogue?(m(),b("div",et,[B("h2",tt,C(a.dialogue.title),1),B("div",at,[(m(!0),b(V,null,K(a.dialogue.conversation,(t,e)=>(m(),$(Xe,{key:e,speaker:t.speaker,text:t.text,translation:t.translation,"is-practice-mode-active":a.isPracticeModeActive,onSpeak:n=>r.$emit("speak",t.text,t.speaker)},null,8,["speaker","text","translation","is-practice-mode-active","onSpeak"]))),128))]),B("div",st,[B("button",{onClick:s[0]||(s[0]=t=>r.$emit("togglePractice")),class:"px-4 py-2 bg-accent text-white rounded-lg hover:bg-opacity-90 transition-colors shadow-lg"},C(a.isPracticeModeActive?"Exit Practice":"Start Practice"),1)])])):z("",!0)]))}},nt={class:"min-h-screen bg-gray-100 flex"},ct={__name:"index",setup(a){const r=_([]),s=_(null),t=_(!1),e=_(0);ce(()=>{r.value=Ie.dialogues,r.value.length>0&&n(r.value[0])});const n=o=>{s.value=o,t.value=!1,e.value=0},c=()=>{t.value=!t.value,e.value=0},f=(o,u)=>{window.speechSynthesis.cancel();const d=new SpeechSynthesisUtterance(o);d.lang="en-US",d.rate=.9,d.pitch=u==="A"?1.2:.8;const l=window.speechSynthesis.getVoices(),i=l.find(p=>p.name.includes("Female")||p.name.includes("Samantha")),v=l.find(p=>p.name.includes("Male")||p.name.includes("Daniel"));d.voice=u==="A"?i||null:v||null,window.speechSynthesis.speak(d)};return(o,u)=>{var d;return m(),b("div",nt,[H(Re,{dialogues:r.value,"selected-dialogue-id":(d=s.value)==null?void 0:d.id,onSelect:n},null,8,["dialogues","selected-dialogue-id"]),H(rt,{dialogue:s.value,"is-practice-mode-active":t.value,"current-message-index":e.value,onSpeak:f,onTogglePractice:c},null,8,["dialogue","is-practice-mode-active","current-message-index"])])}}};export{ct as default};
