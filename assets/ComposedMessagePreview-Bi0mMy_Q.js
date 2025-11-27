import{j as f}from"./index-C3FC22de.js";import{a as L,D as S,c as N,d as U,e as B,f as E,h as q,i as z}from"./discord-Cc8p1SSc.js";import"./notifications-BzFLm1GU.js";function g(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function $(e,i=0){if(i>10)return[{type:"text",content:e}];const r=[];let t=0;for(;t<e.length;){if(e.substr(t,3)==="***"||e.substr(t,3)==="___"){const n=e.substr(t,3),c=e.indexOf(n,t+3);if(c!==-1&&c>t+3){const m=e.substring(t+3,c);r.push({type:"bold",content:[{type:"italic",content:$(m,i+1)}]}),t=c+3;continue}}if(e.substr(t,2)==="**"){const n=e.indexOf("**",t+2);if(n!==-1&&n>t+2){const c=e.substring(t+2,n);r.push({type:"bold",content:$(c,i+1)}),t=n+2;continue}}if(e.substr(t,2)==="__"){const n=e.indexOf("__",t+2);if(n!==-1&&n>t+2){const c=e.substring(t+2,n);r.push({type:"underline",content:$(c,i+1)}),t=n+2;continue}}if(e[t]==="*"&&e[t-1]!=="*"&&e[t+1]!=="*"){const n=e.indexOf("*",t+1);if(n!==-1&&n>t+1&&e[n+1]!=="*"){const c=e.substring(t+1,n);r.push({type:"italic",content:$(c,i+1)}),t=n+1;continue}}if(e[t]==="_"&&e[t-1]!=="_"&&e[t+1]!=="_"){const n=e.indexOf("_",t+1);if(n!==-1&&n>t+1&&e[n+1]!=="_"){const c=e.substring(t+1,n);r.push({type:"italic",content:$(c,i+1)}),t=n+1;continue}}if(e.substr(t,2)==="~~"){const n=e.indexOf("~~",t+2);if(n!==-1&&n>t+2){const c=e.substring(t+2,n);r.push({type:"strikethrough",content:$(c,i+1)}),t=n+2;continue}}if(e.substr(t,2)==="||"){const n=e.indexOf("||",t+2);if(n!==-1&&n>t+2){const c=e.substring(t+2,n);r.push({type:"spoiler",content:$(c,i+1)}),t=n+2;continue}}if(e[t]==="`"){const n=e.indexOf("`",t+1);if(n!==-1&&n>t+1){const c=e.substring(t+1,n);r.push({type:"code",content:c}),t=n+1;continue}}const d=e.substr(t).match(/^\[([^\]]+)\]\(([^)]+)\)/);if(d){const n=d[1],c=d[2];r.push({type:"maskedLink",content:n,url:c}),t+=d[0].length;continue}const o=e.substr(t).match(/^<t:(-?\d+)(?::([tTdDfFR]))?>/);if(o){const n=o[1],c=o[2]||"f";r.push({type:"timestamp",content:"",timestamp:n,timestampStyle:c}),t+=o[0].length;continue}const l=e.substr(t).match(/^<(a)?:([^:]+):(\d+)>/);if(l){const n=!!l[1],c=l[2],m=l[3];r.push({type:"emoji",content:c,emojiName:c,emojiId:m,emojiAnimated:n}),t+=l[0].length;continue}const s=e.substr(t).match(/^<(@&?|#)([^>]+)>/);if(s){const n=s[1],c=s[2];let m="user";n==="@&"?m="role":n==="#"?m="channel":n==="@"&&(m="user"),r.push({type:"mention",content:c,mentionType:m}),t+=s[0].length;continue}const a=e.substr(t).match(/^https?:\/\/[^\s<]+[^<.,:;"')\]\s]/);if(a){const n=a[0];r.push({type:"url",content:n,url:n}),t+=n.length;continue}let h="";for(;t<e.length&&e[t]!=="*"&&e[t]!=="_"&&e[t]!=="~"&&e[t]!=="|"&&e[t]!=="`"&&e[t]!=="["&&e[t]!=="<"&&!e.substr(t).match(/^https?:\/\//);)h+=e[t],t++;h?r.push({type:"text",content:h}):t<e.length&&(r.push({type:"text",content:e[t]}),t++)}return r}function A(e){const i=e.split(`
`),r=[];let t=0;for(;t<i.length;){const d=i[t],o=d.match(/^```(\w*)/);if(o){const b=o[1]||"";let y="";for(t++;t<i.length&&!i[t].match(/^```$/);)y+=(y?`
`:"")+i[t],t++;r.push({type:"codeblock",content:y,language:b}),t++;continue}if(d.match(/^>>> /)){let b=d.substring(4);for(t++;t<i.length;)b+=`
`+i[t],t++;r.push({type:"blockquote",content:$(b)});continue}if(d.match(/^> /)){const b=[];for(;t<i.length&&i[t].match(/^> /);)b.push(i[t].substring(2)),t++;r.push({type:"blockquote",content:$(b.join(`
`))});continue}const l=d.match(/^# (.+)$/);if(l){r.push({type:"text",content:`<h1 style="font-size: 1.5em; font-weight: 700; margin: 8px 0 4px 0; color: #ffffff;">${g(l[1])}</h1>`}),t++;continue}const s=d.match(/^## (.+)$/);if(s){r.push({type:"text",content:`<h2 style="font-size: 1.25em; font-weight: 600; margin: 6px 0 4px 0; color: #ffffff;">${g(s[1])}</h2>`}),t++;continue}const a=d.match(/^### (.+)$/);if(a){r.push({type:"text",content:`<h3 style="font-size: 1.1em; font-weight: 600; margin: 4px 0 4px 0; color: #ffffff;">${g(a[1])}</h3>`}),t++;continue}const h=d.match(/^-# (.+)$/);if(h){r.push({type:"subtext",content:$(h[1])}),t++;continue}if(d.match(/^[\*\-] (.+)$/)){const b=[];for(;t<i.length&&i[t].match(/^[\*\-] (.+)$/);){const y=i[t].match(/^[\*\-] (.+)$/);y&&b.push(y[1]),t++}r.push({type:"text",content:`<ul style="margin: 4px 0; padding-left: 20px;">${b.map(y=>`<li>${k($(y))}</li>`).join("")}</ul>`});continue}if(d.match(/^\d+\. (.+)$/)){const b=[];for(;t<i.length&&i[t].match(/^\d+\. (.+)$/);){const y=i[t].match(/^\d+\. (.+)$/);y&&b.push(y[1]),t++}r.push({type:"text",content:`<ol style="margin: 4px 0; padding-left: 20px;">${b.map(y=>`<li>${k($(y))}</li>`).join("")}</ol>`});continue}const m=$(d);r.push(...m),t<i.length-1&&r.push({type:"text",content:`
`}),t++}return r}function O(e,i){const r=new Date(parseInt(e)*1e3);if(isNaN(r.getTime()))return`<t:${e}:${i}>`;switch(i){case"t":return r.toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"});case"T":return r.toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit",second:"2-digit"});case"d":return r.toLocaleDateString("en-US",{month:"2-digit",day:"2-digit",year:"numeric"});case"D":return r.toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"});case"f":return r.toLocaleString("en-US",{month:"long",day:"numeric",year:"numeric",hour:"numeric",minute:"2-digit"});case"F":return r.toLocaleString("en-US",{weekday:"long",month:"long",day:"numeric",year:"numeric",hour:"numeric",minute:"2-digit"});case"R":const d=Date.now()-r.getTime(),o=Math.floor(Math.abs(d)/1e3),l=Math.floor(o/60),s=Math.floor(l/60),a=Math.floor(s/24),h=Math.floor(a/30),n=Math.floor(a/365);return n>0?`${n} year${n!==1?"s":""} ago`:h>0?`${h} month${h!==1?"s":""} ago`:a>0?`${a} day${a!==1?"s":""} ago`:s>0?`${s} hour${s!==1?"s":""} ago`:l>0?`${l} minute${l!==1?"s":""} ago`:`${o} second${o!==1?"s":""} ago`;default:return r.toLocaleString("en-US",{month:"long",day:"numeric",year:"numeric",hour:"numeric",minute:"2-digit"})}}function k(e,i=!1){const r=e.every(o=>o.type==="emoji"||o.type==="text"&&o.content.trim()===""),t=e.some(o=>o.type==="emoji"),d=r&&t;return e.map(o=>{switch(o.type){case"text":const l=o.content;return l.startsWith("<h1")||l.startsWith("<h2")||l.startsWith("<h3")||l.startsWith("<ul")||l.startsWith("<ol")?l:l===`
`?"<br>":g(l);case"bold":return`<strong>${k(o.content)}</strong>`;case"italic":return`<em>${k(o.content)}</em>`;case"underline":return`<u>${k(o.content)}</u>`;case"strikethrough":return`<s>${k(o.content)}</s>`;case"code":return`<code>${g(o.content)}</code>`;case"codeblock":const s=o.language||"";return`<pre><code class="language-${g(s)}">${g(o.content)}</code></pre>`;case"spoiler":return`<span class="spoiler">${k(o.content)}</span>`;case"blockquote":return`<blockquote>${k(o.content)}</blockquote>`;case"url":return`<a href="${g(o.url)}" target="_blank" rel="noopener noreferrer">${g(o.content)}</a>`;case"maskedLink":return`<a href="${g(o.url)}" target="_blank" rel="noopener noreferrer">${g(o.content)}</a>`;case"subtext":return`<span style="font-size: 0.75em; color: #b9bbbe;">${k(o.content)}</span>`;case"timestamp":return`<span style="background-color: rgba(88, 101, 242, 0.3); padding: 0 2px; border-radius: 3px;">${g(O(o.timestamp,o.timestampStyle))}</span>`;case"mention":{const a=o.mentionType||"user";return`<span style="background-color: rgba(88, 101, 242, 0.3); color: ${o.mentionColor||"#5865f2"}; padding: 0 2px; border-radius: 3px; font-weight: 500;">${a==="user"||a==="role"?"@":"#"}${g(o.content)}</span>`}case"emoji":{const a=o.emojiAnimated?"gif":"png",h=`https://cdn.discordapp.com/emojis/${o.emojiId}.${a}`,n=d?"46px":"24px";return`<img src="${h}" alt=":${g(o.emojiName)}:" title=":${g(o.emojiName)}:" style="width: ${n}; height: ${n}; vertical-align: bottom; display: inline-block;" class="discord-custom-emoji" />`}default:return g(o.content)}}).join("")}function j(e){if(!e)return"";const i=A(e);return k(i)}const H=(e,i,r,t)=>{if(!e&&!i)return"";const d=new Date;let o=d;if(r!=null&&r.trim()){const s=r.trim();o=new Date(s),Number.isNaN(o.getTime())&&(o=d)}if(t!=null&&t.trim()){const[s,a]=t.trim().split(":");s&&a&&o.setHours(parseInt(s,10),parseInt(a,10))}const l=[];if(e){const s=String(o.getDate()).padStart(2,"0"),a=String(o.getMonth()+1).padStart(2,"0"),h=o.getFullYear();l.push(`${s}/${a}/${h}`)}if(i){const s=String(o.getHours()).padStart(2,"0"),a=String(o.getMinutes()).padStart(2,"0");l.push(`${s}:${a}`)}return l.join(" ")};function P({blocks:e,authors:i}){L.useEffect(()=>{const s=document.createElement("style");s.textContent=`
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
    `,document.head.appendChild(s);const a=h=>{const n=h.target;n.classList.contains("spoiler")&&(n.style.backgroundColor="rgba(32, 34, 37, 0.6)",n.style.color="#dcddde")};return document.addEventListener("click",a),()=>{document.head.removeChild(s),document.removeEventListener("click",a)}},[]);const r=s=>s?i.find(a=>a.id===s):null,t=[];let d=null,o=null,l=[];for(const s of e)if(s.type==="author"){d&&o&&l.length>0&&(t.push({author:d,authorBlock:o,blocks:l}),l=[]);const a=r(s.data.authorId);d=a||null,o=a?s:null}else d&&l.push(s);return d&&o&&l.length>0&&t.push({author:d,authorBlock:o,blocks:l}),t.length===0?f.jsx("div",{className:"bg-[#36393f] rounded-lg overflow-hidden p-4",children:f.jsx(S,{children:f.jsx("div",{className:"flex items-center justify-center h-64 text-gray-400",children:"Add an author to start building your message"})})}):f.jsx("div",{className:"bg-[#36393f] rounded-lg overflow-hidden p-4",children:f.jsx(S,{children:t.map((s,a)=>{var M;const h=s.blocks.filter(u=>u.type==="message"),n=h.filter(u=>u.data.content).map(u=>u.data.content).join(`
`),c=(M=h.find(u=>u.data.reply))==null?void 0:M.data.reply,m=c?i.find(u=>u.id===c.authorId):null,b=h.some(u=>u.data.edited),y=s.blocks.filter(u=>u.type==="embed"&&u.data.embed),w=s.blocks.filter(u=>u.type==="image"&&u.data.imageUrl),v=!!(s.authorBlock.data.showDate??s.author.showDate),I=!!(s.authorBlock.data.showTime??s.author.showTime),T=s.authorBlock.data.customDate??s.author.customDate,C=s.authorBlock.data.customTime??s.author.customTime,_=H(v,I,T,C);return f.jsxs(N,{author:s.author.username,avatar:s.author.avatar,roleColor:s.author.roleColor,bot:s.author.isBot,verified:s.author.verified,roleIcon:s.author.badgeUrl,edited:b,timestamp:_,children:[c&&m&&f.jsx(U,{slot:"reply",author:m.username,avatar:m.avatar,roleColor:m.roleColor,bot:m.isBot,edited:c.edited,attachment:c.attachment,style:{marginLeft:"55px"},children:c.content}),n&&f.jsx("span",{dangerouslySetInnerHTML:{__html:j(n)}}),y.map(u=>{const p=u.data.embed;return p?f.jsxs(B,{slot:"embeds",color:p.color,embedTitle:p.title,url:p.url,thumbnail:p.thumbnail,image:p.image,authorName:p.authorName,authorImage:p.authorIcon,authorUrl:p.authorUrl,children:[p.description&&f.jsx("div",{slot:"description",dangerouslySetInnerHTML:{__html:j(p.description)}}),p.fields&&p.fields.length>0&&f.jsx(E,{slot:"fields",children:p.fields.map((x,D)=>f.jsx(q,{fieldTitle:x.name,inline:x.inline,children:f.jsx("span",{dangerouslySetInnerHTML:{__html:j(x.value)}})},D))}),p.footerText&&f.jsx("div",{slot:"footer",children:p.footerText})]},u.id):null}),w.length>0&&f.jsx(z,{slot:"attachments",children:w.map(u=>f.jsx("img",{src:u.data.imageUrl,alt:"Attachment",className:"max-w-full rounded"},u.id))})]},a)})})})}export{P as ComposedMessagePreview};
