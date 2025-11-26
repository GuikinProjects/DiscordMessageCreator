import{j as f}from"./index-BaK8enXc.js";import{a as _,D as S,c as D,d as L,e as N,f as U,h as E,i as z}from"./discord-Cc8p1SSc.js";import"./notifications-BzFLm1GU.js";function g(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function $(t,i=0){if(i>10)return[{type:"text",content:t}];const s=[];let e=0;for(;e<t.length;){if(t.substr(e,3)==="***"||t.substr(e,3)==="___"){const n=t.substr(e,3),c=t.indexOf(n,e+3);if(c!==-1&&c>e+3){const h=t.substring(e+3,c);s.push({type:"bold",content:[{type:"italic",content:$(h,i+1)}]}),e=c+3;continue}}if(t.substr(e,2)==="**"){const n=t.indexOf("**",e+2);if(n!==-1&&n>e+2){const c=t.substring(e+2,n);s.push({type:"bold",content:$(c,i+1)}),e=n+2;continue}}if(t.substr(e,2)==="__"){const n=t.indexOf("__",e+2);if(n!==-1&&n>e+2){const c=t.substring(e+2,n);s.push({type:"underline",content:$(c,i+1)}),e=n+2;continue}}if(t[e]==="*"&&t[e-1]!=="*"&&t[e+1]!=="*"){const n=t.indexOf("*",e+1);if(n!==-1&&n>e+1&&t[n+1]!=="*"){const c=t.substring(e+1,n);s.push({type:"italic",content:$(c,i+1)}),e=n+1;continue}}if(t[e]==="_"&&t[e-1]!=="_"&&t[e+1]!=="_"){const n=t.indexOf("_",e+1);if(n!==-1&&n>e+1&&t[n+1]!=="_"){const c=t.substring(e+1,n);s.push({type:"italic",content:$(c,i+1)}),e=n+1;continue}}if(t.substr(e,2)==="~~"){const n=t.indexOf("~~",e+2);if(n!==-1&&n>e+2){const c=t.substring(e+2,n);s.push({type:"strikethrough",content:$(c,i+1)}),e=n+2;continue}}if(t.substr(e,2)==="||"){const n=t.indexOf("||",e+2);if(n!==-1&&n>e+2){const c=t.substring(e+2,n);s.push({type:"spoiler",content:$(c,i+1)}),e=n+2;continue}}if(t[e]==="`"){const n=t.indexOf("`",e+1);if(n!==-1&&n>e+1){const c=t.substring(e+1,n);s.push({type:"code",content:c}),e=n+1;continue}}const l=t.substr(e).match(/^\[([^\]]+)\]\(([^)]+)\)/);if(l){const n=l[1],c=l[2];s.push({type:"maskedLink",content:n,url:c}),e+=l[0].length;continue}const o=t.substr(e).match(/^<t:(-?\d+)(?::([tTdDfFR]))?>/);if(o){const n=o[1],c=o[2]||"f";s.push({type:"timestamp",content:"",timestamp:n,timestampStyle:c}),e+=o[0].length;continue}const a=t.substr(e).match(/^<(a)?:([^:]+):(\d+)>/);if(a){const n=!!a[1],c=a[2],h=a[3];s.push({type:"emoji",content:c,emojiName:c,emojiId:h,emojiAnimated:n}),e+=a[0].length;continue}const r=t.substr(e).match(/^<(@&?|#)([^>]+)>/);if(r){const n=r[1],c=r[2];let h="user";n==="@&"?h="role":n==="#"?h="channel":n==="@"&&(h="user"),s.push({type:"mention",content:c,mentionType:h}),e+=r[0].length;continue}const d=t.substr(e).match(/^https?:\/\/[^\s<]+[^<.,:;"')\]\s]/);if(d){const n=d[0];s.push({type:"url",content:n,url:n}),e+=n.length;continue}let m="";for(;e<t.length&&t[e]!=="*"&&t[e]!=="_"&&t[e]!=="~"&&t[e]!=="|"&&t[e]!=="`"&&t[e]!=="["&&t[e]!=="<"&&!t.substr(e).match(/^https?:\/\//);)m+=t[e],e++;m?s.push({type:"text",content:m}):e<t.length&&(s.push({type:"text",content:t[e]}),e++)}return s}function q(t){const i=t.split(`
`),s=[];let e=0;for(;e<i.length;){const l=i[e],o=l.match(/^```(\w*)/);if(o){const b=o[1]||"";let y="";for(e++;e<i.length&&!i[e].match(/^```$/);)y+=(y?`
`:"")+i[e],e++;s.push({type:"codeblock",content:y,language:b}),e++;continue}if(l.match(/^>>> /)){let b=l.substring(4);for(e++;e<i.length;)b+=`
`+i[e],e++;s.push({type:"blockquote",content:$(b)});continue}if(l.match(/^> /)){const b=[];for(;e<i.length&&i[e].match(/^> /);)b.push(i[e].substring(2)),e++;s.push({type:"blockquote",content:$(b.join(`
`))});continue}const a=l.match(/^# (.+)$/);if(a){s.push({type:"text",content:`<h1 style="font-size: 1.5em; font-weight: 700; margin: 8px 0 4px 0; color: #ffffff;">${g(a[1])}</h1>`}),e++;continue}const r=l.match(/^## (.+)$/);if(r){s.push({type:"text",content:`<h2 style="font-size: 1.25em; font-weight: 600; margin: 6px 0 4px 0; color: #ffffff;">${g(r[1])}</h2>`}),e++;continue}const d=l.match(/^### (.+)$/);if(d){s.push({type:"text",content:`<h3 style="font-size: 1.1em; font-weight: 600; margin: 4px 0 4px 0; color: #ffffff;">${g(d[1])}</h3>`}),e++;continue}const m=l.match(/^-# (.+)$/);if(m){s.push({type:"subtext",content:$(m[1])}),e++;continue}if(l.match(/^[\*\-] (.+)$/)){const b=[];for(;e<i.length&&i[e].match(/^[\*\-] (.+)$/);){const y=i[e].match(/^[\*\-] (.+)$/);y&&b.push(y[1]),e++}s.push({type:"text",content:`<ul style="margin: 4px 0; padding-left: 20px;">${b.map(y=>`<li>${x($(y))}</li>`).join("")}</ul>`});continue}if(l.match(/^\d+\. (.+)$/)){const b=[];for(;e<i.length&&i[e].match(/^\d+\. (.+)$/);){const y=i[e].match(/^\d+\. (.+)$/);y&&b.push(y[1]),e++}s.push({type:"text",content:`<ol style="margin: 4px 0; padding-left: 20px;">${b.map(y=>`<li>${x($(y))}</li>`).join("")}</ol>`});continue}const h=$(l);s.push(...h),e<i.length-1&&s.push({type:"text",content:`
`}),e++}return s}function A(t,i){const s=new Date(parseInt(t)*1e3);if(isNaN(s.getTime()))return`<t:${t}:${i}>`;switch(i){case"t":return s.toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"});case"T":return s.toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit",second:"2-digit"});case"d":return s.toLocaleDateString("en-US",{month:"2-digit",day:"2-digit",year:"numeric"});case"D":return s.toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"});case"f":return s.toLocaleString("en-US",{month:"long",day:"numeric",year:"numeric",hour:"numeric",minute:"2-digit"});case"F":return s.toLocaleString("en-US",{weekday:"long",month:"long",day:"numeric",year:"numeric",hour:"numeric",minute:"2-digit"});case"R":const l=Date.now()-s.getTime(),o=Math.floor(Math.abs(l)/1e3),a=Math.floor(o/60),r=Math.floor(a/60),d=Math.floor(r/24),m=Math.floor(d/30),n=Math.floor(d/365);return n>0?`${n} year${n!==1?"s":""} ago`:m>0?`${m} month${m!==1?"s":""} ago`:d>0?`${d} day${d!==1?"s":""} ago`:r>0?`${r} hour${r!==1?"s":""} ago`:a>0?`${a} minute${a!==1?"s":""} ago`:`${o} second${o!==1?"s":""} ago`;default:return s.toLocaleString("en-US",{month:"long",day:"numeric",year:"numeric",hour:"numeric",minute:"2-digit"})}}function x(t,i=!1){const s=t.every(o=>o.type==="emoji"||o.type==="text"&&o.content.trim()===""),e=t.some(o=>o.type==="emoji"),l=s&&e;return t.map(o=>{switch(o.type){case"text":const a=o.content;return a.startsWith("<h1")||a.startsWith("<h2")||a.startsWith("<h3")||a.startsWith("<ul")||a.startsWith("<ol")?a:a===`
`?"<br>":g(a);case"bold":return`<strong>${x(o.content)}</strong>`;case"italic":return`<em>${x(o.content)}</em>`;case"underline":return`<u>${x(o.content)}</u>`;case"strikethrough":return`<s>${x(o.content)}</s>`;case"code":return`<code>${g(o.content)}</code>`;case"codeblock":const r=o.language||"";return`<pre><code class="language-${g(r)}">${g(o.content)}</code></pre>`;case"spoiler":return`<span class="spoiler">${x(o.content)}</span>`;case"blockquote":return`<blockquote>${x(o.content)}</blockquote>`;case"url":return`<a href="${g(o.url)}" target="_blank" rel="noopener noreferrer">${g(o.content)}</a>`;case"maskedLink":return`<a href="${g(o.url)}" target="_blank" rel="noopener noreferrer">${g(o.content)}</a>`;case"subtext":return`<span style="font-size: 0.75em; color: #b9bbbe;">${x(o.content)}</span>`;case"timestamp":return`<span style="background-color: rgba(88, 101, 242, 0.3); padding: 0 2px; border-radius: 3px;">${g(A(o.timestamp,o.timestampStyle))}</span>`;case"mention":{const d=o.mentionType||"user";return`<span style="background-color: rgba(88, 101, 242, 0.3); color: ${o.mentionColor||"#5865f2"}; padding: 0 2px; border-radius: 3px; font-weight: 500;">${d==="user"||d==="role"?"@":"#"}${g(o.content)}</span>`}case"emoji":{const d=o.emojiAnimated?"gif":"png",m=`https://cdn.discordapp.com/emojis/${o.emojiId}.${d}`,n=l?"46px":"24px";return`<img src="${m}" alt=":${g(o.emojiName)}:" title=":${g(o.emojiName)}:" style="width: ${n}; height: ${n}; vertical-align: bottom; display: inline-block;" class="discord-custom-emoji" />`}default:return g(o.content)}}).join("")}function j(t){if(!t)return"";const i=q(t);return x(i)}const B=t=>{const i=t==null?void 0:t.trim(),s=i?new Date(i):new Date;if(Number.isNaN(s.getTime()))return i??"";const e=String(s.getDate()).padStart(2,"0"),l=String(s.getMonth()+1).padStart(2,"0"),o=s.getFullYear(),a=String(s.getHours()).padStart(2,"0"),r=String(s.getMinutes()).padStart(2,"0");return`${e}/${l}/${o} ${a}:${r}`};function W({blocks:t,authors:i}){_.useEffect(()=>{const r=document.createElement("style");r.textContent=`
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
    `,document.head.appendChild(r);const d=m=>{const n=m.target;n.classList.contains("spoiler")&&(n.style.backgroundColor="rgba(32, 34, 37, 0.6)",n.style.color="#dcddde")};return document.addEventListener("click",d),()=>{document.head.removeChild(r),document.removeEventListener("click",d)}},[]);const s=r=>r?i.find(d=>d.id===r):null,e=[];let l=null,o=null,a=[];for(const r of t)if(r.type==="author"){l&&o&&a.length>0&&(e.push({author:l,authorBlock:o,blocks:a}),a=[]);const d=s(r.data.authorId);l=d||null,o=d?r:null}else l&&a.push(r);return l&&o&&a.length>0&&e.push({author:l,authorBlock:o,blocks:a}),e.length===0?f.jsx("div",{className:"bg-[#36393f] rounded-lg overflow-hidden p-4",children:f.jsx(S,{children:f.jsx("div",{className:"flex items-center justify-center h-64 text-gray-400",children:"Add an author to start building your message"})})}):f.jsx("div",{className:"bg-[#36393f] rounded-lg overflow-hidden p-4",children:f.jsx(S,{children:e.map((r,d)=>{var M;const m=r.blocks.filter(u=>u.type==="message"),n=m.filter(u=>u.data.content).map(u=>u.data.content).join(`
`),c=(M=m.find(u=>u.data.reply))==null?void 0:M.data.reply,h=c?i.find(u=>u.id===c.authorId):null,b=m.some(u=>u.data.edited),y=r.blocks.filter(u=>u.type==="embed"&&u.data.embed),w=r.blocks.filter(u=>u.type==="image"&&u.data.imageUrl),T=!!(r.authorBlock.data.showTimestamp??r.author.showTimestamp),v=r.authorBlock.data.customTimestamp??r.author.customTimestamp,C=T?B(v):"";return f.jsxs(D,{author:r.author.username,avatar:r.author.avatar,roleColor:r.author.roleColor,bot:r.author.isBot,verified:r.author.verified,roleIcon:r.author.badgeUrl,edited:b,timestamp:C,children:[c&&h&&f.jsx(L,{slot:"reply",author:h.username,avatar:h.avatar,roleColor:h.roleColor,bot:h.isBot,edited:c.edited,attachment:c.attachment,style:{marginLeft:"55px"},children:c.content}),n&&f.jsx("span",{dangerouslySetInnerHTML:{__html:j(n)}}),y.map(u=>{const p=u.data.embed;return p?f.jsxs(N,{slot:"embeds",color:p.color,embedTitle:p.title,url:p.url,thumbnail:p.thumbnail,image:p.image,authorName:p.authorName,authorImage:p.authorIcon,authorUrl:p.authorUrl,children:[p.description&&f.jsx("div",{slot:"description",dangerouslySetInnerHTML:{__html:j(p.description)}}),p.fields&&p.fields.length>0&&f.jsx(U,{slot:"fields",children:p.fields.map((k,I)=>f.jsx(E,{fieldTitle:k.name,inline:k.inline,children:f.jsx("span",{dangerouslySetInnerHTML:{__html:j(k.value)}})},I))}),p.footerText&&f.jsx("div",{slot:"footer",children:p.footerText})]},u.id):null}),w.length>0&&f.jsx(z,{slot:"attachments",children:w.map(u=>f.jsx("img",{src:u.data.imageUrl,alt:"Attachment",className:"max-w-full rounded"},u.id))})]},d)})})})}export{W as ComposedMessagePreview};
