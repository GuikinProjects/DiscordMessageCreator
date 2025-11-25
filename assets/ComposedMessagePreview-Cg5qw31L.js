import{j as f}from"./index-BLWfUET7.js";import{a as S,D as M,c as C,d as I,e as _,f as T,h as L,i as D}from"./discord-Cc8p1SSc.js";import"./notifications-BzFLm1GU.js";function g(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function y(n,i=0){if(i>10)return[{type:"text",content:n}];const s=[];let e=0;for(;e<n.length;){if(n.substr(e,3)==="***"||n.substr(e,3)==="___"){const t=n.substr(e,3),c=n.indexOf(t,e+3);if(c!==-1&&c>e+3){const $=n.substring(e+3,c);s.push({type:"bold",content:[{type:"italic",content:y($,i+1)}]}),e=c+3;continue}}if(n.substr(e,2)==="**"){const t=n.indexOf("**",e+2);if(t!==-1&&t>e+2){const c=n.substring(e+2,t);s.push({type:"bold",content:y(c,i+1)}),e=t+2;continue}}if(n.substr(e,2)==="__"){const t=n.indexOf("__",e+2);if(t!==-1&&t>e+2){const c=n.substring(e+2,t);s.push({type:"underline",content:y(c,i+1)}),e=t+2;continue}}if(n[e]==="*"&&n[e-1]!=="*"&&n[e+1]!=="*"){const t=n.indexOf("*",e+1);if(t!==-1&&t>e+1&&n[t+1]!=="*"){const c=n.substring(e+1,t);s.push({type:"italic",content:y(c,i+1)}),e=t+1;continue}}if(n[e]==="_"&&n[e-1]!=="_"&&n[e+1]!=="_"){const t=n.indexOf("_",e+1);if(t!==-1&&t>e+1&&n[t+1]!=="_"){const c=n.substring(e+1,t);s.push({type:"italic",content:y(c,i+1)}),e=t+1;continue}}if(n.substr(e,2)==="~~"){const t=n.indexOf("~~",e+2);if(t!==-1&&t>e+2){const c=n.substring(e+2,t);s.push({type:"strikethrough",content:y(c,i+1)}),e=t+2;continue}}if(n.substr(e,2)==="||"){const t=n.indexOf("||",e+2);if(t!==-1&&t>e+2){const c=n.substring(e+2,t);s.push({type:"spoiler",content:y(c,i+1)}),e=t+2;continue}}if(n[e]==="`"){const t=n.indexOf("`",e+1);if(t!==-1&&t>e+1){const c=n.substring(e+1,t);s.push({type:"code",content:c}),e=t+1;continue}}const a=n.substr(e).match(/^\[([^\]]+)\]\(([^)]+)\)/);if(a){const t=a[1],c=a[2];s.push({type:"maskedLink",content:t,url:c}),e+=a[0].length;continue}const o=n.substr(e).match(/^<t:(-?\d+)(?::([tTdDfFR]))?>/);if(o){const t=o[1],c=o[2]||"f";s.push({type:"timestamp",content:"",timestamp:t,timestampStyle:c}),e+=o[0].length;continue}const r=n.substr(e).match(/^<(a)?:([^:]+):(\d+)>/);if(r){const t=!!r[1],c=r[2],$=r[3];s.push({type:"emoji",content:c,emojiName:c,emojiId:$,emojiAnimated:t}),e+=r[0].length;continue}const u=n.substr(e).match(/^<(@&?|#)([^>]+)>/);if(u){const t=u[1],c=u[2];let $="user";t==="@&"?$="role":t==="#"?$="channel":t==="@"&&($="user"),s.push({type:"mention",content:c,mentionType:$}),e+=u[0].length;continue}const l=n.substr(e).match(/^https?:\/\/[^\s<]+[^<.,:;"')\]\s]/);if(l){const t=l[0];s.push({type:"url",content:t,url:t}),e+=t.length;continue}let m="";for(;e<n.length&&n[e]!=="*"&&n[e]!=="_"&&n[e]!=="~"&&n[e]!=="|"&&n[e]!=="`"&&n[e]!=="["&&n[e]!=="<"&&!n.substr(e).match(/^https?:\/\//);)m+=n[e],e++;m?s.push({type:"text",content:m}):e<n.length&&(s.push({type:"text",content:n[e]}),e++)}return s}function N(n){const i=n.split(`
`),s=[];let e=0;for(;e<i.length;){const a=i[e],o=a.match(/^```(\w*)/);if(o){const b=o[1]||"";let h="";for(e++;e<i.length&&!i[e].match(/^```$/);)h+=(h?`
`:"")+i[e],e++;s.push({type:"codeblock",content:h,language:b}),e++;continue}if(a.match(/^>>> /)){let b=a.substring(4);for(e++;e<i.length;)b+=`
`+i[e],e++;s.push({type:"blockquote",content:y(b)});continue}if(a.match(/^> /)){const b=[];for(;e<i.length&&i[e].match(/^> /);)b.push(i[e].substring(2)),e++;s.push({type:"blockquote",content:y(b.join(`
`))});continue}const r=a.match(/^# (.+)$/);if(r){s.push({type:"text",content:`<h1 style="font-size: 1.5em; font-weight: 700; margin: 8px 0 4px 0; color: #ffffff;">${g(r[1])}</h1>`}),e++;continue}const u=a.match(/^## (.+)$/);if(u){s.push({type:"text",content:`<h2 style="font-size: 1.25em; font-weight: 600; margin: 6px 0 4px 0; color: #ffffff;">${g(u[1])}</h2>`}),e++;continue}const l=a.match(/^### (.+)$/);if(l){s.push({type:"text",content:`<h3 style="font-size: 1.1em; font-weight: 600; margin: 4px 0 4px 0; color: #ffffff;">${g(l[1])}</h3>`}),e++;continue}const m=a.match(/^-# (.+)$/);if(m){s.push({type:"subtext",content:y(m[1])}),e++;continue}if(a.match(/^[\*\-] (.+)$/)){const b=[];for(;e<i.length&&i[e].match(/^[\*\-] (.+)$/);){const h=i[e].match(/^[\*\-] (.+)$/);h&&b.push(h[1]),e++}s.push({type:"text",content:`<ul style="margin: 4px 0; padding-left: 20px;">${b.map(h=>`<li>${x(y(h))}</li>`).join("")}</ul>`});continue}if(a.match(/^\d+\. (.+)$/)){const b=[];for(;e<i.length&&i[e].match(/^\d+\. (.+)$/);){const h=i[e].match(/^\d+\. (.+)$/);h&&b.push(h[1]),e++}s.push({type:"text",content:`<ol style="margin: 4px 0; padding-left: 20px;">${b.map(h=>`<li>${x(y(h))}</li>`).join("")}</ol>`});continue}const $=y(a);s.push(...$),e<i.length-1&&s.push({type:"text",content:`
`}),e++}return s}function U(n,i){const s=new Date(parseInt(n)*1e3);if(isNaN(s.getTime()))return`<t:${n}:${i}>`;switch(i){case"t":return s.toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"});case"T":return s.toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit",second:"2-digit"});case"d":return s.toLocaleDateString("en-US",{month:"2-digit",day:"2-digit",year:"numeric"});case"D":return s.toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"});case"f":return s.toLocaleString("en-US",{month:"long",day:"numeric",year:"numeric",hour:"numeric",minute:"2-digit"});case"F":return s.toLocaleString("en-US",{weekday:"long",month:"long",day:"numeric",year:"numeric",hour:"numeric",minute:"2-digit"});case"R":const a=Date.now()-s.getTime(),o=Math.floor(Math.abs(a)/1e3),r=Math.floor(o/60),u=Math.floor(r/60),l=Math.floor(u/24),m=Math.floor(l/30),t=Math.floor(l/365);return t>0?`${t} year${t!==1?"s":""} ago`:m>0?`${m} month${m!==1?"s":""} ago`:l>0?`${l} day${l!==1?"s":""} ago`:u>0?`${u} hour${u!==1?"s":""} ago`:r>0?`${r} minute${r!==1?"s":""} ago`:`${o} second${o!==1?"s":""} ago`;default:return s.toLocaleString("en-US",{month:"long",day:"numeric",year:"numeric",hour:"numeric",minute:"2-digit"})}}function x(n,i=!1){const s=n.every(o=>o.type==="emoji"||o.type==="text"&&o.content.trim()===""),e=n.some(o=>o.type==="emoji"),a=s&&e;return n.map(o=>{switch(o.type){case"text":const r=o.content;return r.startsWith("<h1")||r.startsWith("<h2")||r.startsWith("<h3")||r.startsWith("<ul")||r.startsWith("<ol")?r:r===`
`?"<br>":g(r);case"bold":return`<strong>${x(o.content)}</strong>`;case"italic":return`<em>${x(o.content)}</em>`;case"underline":return`<u>${x(o.content)}</u>`;case"strikethrough":return`<s>${x(o.content)}</s>`;case"code":return`<code>${g(o.content)}</code>`;case"codeblock":const u=o.language||"";return`<pre><code class="language-${g(u)}">${g(o.content)}</code></pre>`;case"spoiler":return`<span class="spoiler">${x(o.content)}</span>`;case"blockquote":return`<blockquote>${x(o.content)}</blockquote>`;case"url":return`<a href="${g(o.url)}" target="_blank" rel="noopener noreferrer">${g(o.content)}</a>`;case"maskedLink":return`<a href="${g(o.url)}" target="_blank" rel="noopener noreferrer">${g(o.content)}</a>`;case"subtext":return`<span style="font-size: 0.75em; color: #b9bbbe;">${x(o.content)}</span>`;case"timestamp":return`<span style="background-color: rgba(88, 101, 242, 0.3); padding: 0 2px; border-radius: 3px;">${g(U(o.timestamp,o.timestampStyle))}</span>`;case"mention":{const l=o.mentionType||"user";return`<span style="background-color: rgba(88, 101, 242, 0.3); color: ${o.mentionColor||"#5865f2"}; padding: 0 2px; border-radius: 3px; font-weight: 500;">${l==="user"||l==="role"?"@":"#"}${g(o.content)}</span>`}case"emoji":{const l=o.emojiAnimated?"gif":"png",m=`https://cdn.discordapp.com/emojis/${o.emojiId}.${l}`,t=a?"46px":"24px";return`<img src="${m}" alt=":${g(o.emojiName)}:" title=":${g(o.emojiName)}:" style="width: ${t}; height: ${t}; vertical-align: bottom; display: inline-block;" class="discord-custom-emoji" />`}default:return g(o.content)}}).join("")}function j(n){if(!n)return"";const i=N(n);return x(i)}function A({blocks:n,authors:i}){S.useEffect(()=>{const r=document.createElement("style");r.textContent=`
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
    `,document.head.appendChild(r);const u=l=>{const m=l.target;m.classList.contains("spoiler")&&(m.style.backgroundColor="rgba(32, 34, 37, 0.6)",m.style.color="#dcddde")};return document.addEventListener("click",u),()=>{document.head.removeChild(r),document.removeEventListener("click",u)}},[]);const s=r=>r?i.find(u=>u.id===r):null,e=[];let a=null,o=[];for(const r of n)r.type==="author"?(a&&o.length>0&&(e.push({author:a,blocks:o}),o=[]),a=s(r.data.authorId)||null):a&&o.push(r);return a&&o.length>0&&e.push({author:a,blocks:o}),e.length===0?f.jsx("div",{className:"bg-[#36393f] rounded-lg overflow-hidden p-4",children:f.jsx(M,{children:f.jsx("div",{className:"flex items-center justify-center h-64 text-gray-400",children:"Add an author to start building your message"})})}):f.jsx("div",{className:"bg-[#36393f] rounded-lg overflow-hidden p-4",children:f.jsx(M,{children:e.map((r,u)=>{var w;const l=r.blocks.filter(d=>d.type==="message"),m=l.filter(d=>d.data.content).map(d=>d.data.content).join(`
`),t=(w=l.find(d=>d.data.reply))==null?void 0:w.data.reply,c=t?i.find(d=>d.id===t.authorId):null,$=l.some(d=>d.data.edited),b=r.blocks.filter(d=>d.type==="embed"&&d.data.embed),h=r.blocks.filter(d=>d.type==="image"&&d.data.imageUrl);return f.jsxs(C,{author:r.author.username,avatar:r.author.avatar,roleColor:r.author.roleColor,bot:r.author.isBot,verified:r.author.isBot?!0:void 0,roleIcon:r.author.badgeUrl,edited:$,children:[t&&c&&f.jsx(I,{slot:"reply",author:c.username,avatar:c.avatar,roleColor:c.roleColor,bot:c.isBot,edited:t.edited,attachment:t.attachment,style:{marginLeft:"55px"},children:t.content}),m&&f.jsx("span",{dangerouslySetInnerHTML:{__html:j(m)}}),b.map(d=>{const p=d.data.embed;return p?f.jsxs(_,{slot:"embeds",color:p.color,embedTitle:p.title,url:p.url,thumbnail:p.thumbnail,image:p.image,authorName:p.authorName,authorImage:p.authorIcon,authorUrl:p.authorUrl,children:[p.description&&f.jsx("div",{slot:"description",dangerouslySetInnerHTML:{__html:j(p.description)}}),p.fields&&p.fields.length>0&&f.jsx(T,{slot:"fields",children:p.fields.map((k,v)=>f.jsx(L,{fieldTitle:k.name,inline:k.inline,children:f.jsx("span",{dangerouslySetInnerHTML:{__html:j(k.value)}})},v))}),p.footerText&&f.jsx("div",{slot:"footer",children:p.footerText})]},d.id):null}),h.length>0&&f.jsx(D,{slot:"attachments",children:h.map(d=>f.jsx("img",{src:d.data.imageUrl,alt:"Attachment",className:"max-w-full rounded"},d.id))})]},u)})})})}export{A as ComposedMessagePreview};
