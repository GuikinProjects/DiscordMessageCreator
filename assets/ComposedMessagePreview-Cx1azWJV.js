import{n as e}from"./rolldown-runtime-Bh1tDfsg.js";import{a as t,c as n,i as r,n as i,o as a,r as o,s,t as c}from"./discord-C3h3QKeV.js";import{n as l}from"./notifications-C9sKh5ri.js";var u=e(n(),1);function d(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#039;`)}function f(e,t=0){if(t>10)return[{type:`text`,content:e}];let n=[],r=0;for(;r<e.length;){if(e.substr(r,3)===`***`||e.substr(r,3)===`___`){let i=e.substr(r,3),a=e.indexOf(i,r+3);if(a!==-1&&a>r+3){let i=e.substring(r+3,a);n.push({type:`bold`,content:[{type:`italic`,content:f(i,t+1)}]}),r=a+3;continue}}if(e.substr(r,2)===`**`){let i=e.indexOf(`**`,r+2);if(i!==-1&&i>r+2){let a=e.substring(r+2,i);n.push({type:`bold`,content:f(a,t+1)}),r=i+2;continue}}if(e.substr(r,2)===`__`){let i=e.indexOf(`__`,r+2);if(i!==-1&&i>r+2){let a=e.substring(r+2,i);n.push({type:`underline`,content:f(a,t+1)}),r=i+2;continue}}if(e[r]===`*`&&e[r-1]!==`*`&&e[r+1]!==`*`){let i=e.indexOf(`*`,r+1);if(i!==-1&&i>r+1&&e[i+1]!==`*`){let a=e.substring(r+1,i);n.push({type:`italic`,content:f(a,t+1)}),r=i+1;continue}}if(e[r]===`_`&&e[r-1]!==`_`&&e[r+1]!==`_`){let i=e.indexOf(`_`,r+1);if(i!==-1&&i>r+1&&e[i+1]!==`_`){let a=e.substring(r+1,i);n.push({type:`italic`,content:f(a,t+1)}),r=i+1;continue}}if(e.substr(r,2)===`~~`){let i=e.indexOf(`~~`,r+2);if(i!==-1&&i>r+2){let a=e.substring(r+2,i);n.push({type:`strikethrough`,content:f(a,t+1)}),r=i+2;continue}}if(e.substr(r,2)===`||`){let i=e.indexOf(`||`,r+2);if(i!==-1&&i>r+2){let a=e.substring(r+2,i);n.push({type:`spoiler`,content:f(a,t+1)}),r=i+2;continue}}if(e[r]==="`"){let t=e.indexOf("`",r+1);if(t!==-1&&t>r+1){let i=e.substring(r+1,t);n.push({type:`code`,content:i}),r=t+1;continue}}let i=e.substr(r).match(/^\[([^\]]+)\]\(([^)]+)\)/);if(i){let e=i[1],t=i[2];n.push({type:`maskedLink`,content:e,url:t}),r+=i[0].length;continue}let a=e.substr(r).match(/^<t:(-?\d+)(?::([tTdDfFR]))?>/);if(a){let e=a[1],t=a[2]||`f`;n.push({type:`timestamp`,content:``,timestamp:e,timestampStyle:t}),r+=a[0].length;continue}let o=e.substr(r).match(/^<(a)?:([^:]+):(\d+)>/);if(o){let e=!!o[1],t=o[2],i=o[3];n.push({type:`emoji`,content:t,emojiName:t,emojiId:i,emojiAnimated:e}),r+=o[0].length;continue}let s=e.substr(r).match(/^<(@&?|#)([^>]+)>/);if(s){let e=s[1],t=s[2],i=`user`;e===`@&`?i=`role`:e===`#`?i=`channel`:e===`@`&&(i=`user`),n.push({type:`mention`,content:t,mentionType:i}),r+=s[0].length;continue}let c=e.substr(r).match(/^https?:\/\/[^\s<]+[^<.,:;"')\]\s]/);if(c){let e=c[0];n.push({type:`url`,content:e,url:e}),r+=e.length;continue}let l=``;for(;r<e.length&&e[r]!==`*`&&e[r]!==`_`&&e[r]!==`~`&&e[r]!==`|`&&e[r]!=="`"&&e[r]!==`[`&&e[r]!==`<`&&!e.substr(r).match(/^https?:\/\//);)l+=e[r],r++;l?n.push({type:`text`,content:l}):r<e.length&&(n.push({type:`text`,content:e[r]}),r++)}return n}function p(e){let t=e.split(`
`),n=[],r=0;for(;r<t.length;){let e=t[r],i=e.match(/^```(\w*)/);if(i){let e=i[1]||``,a=``;for(r++;r<t.length&&!t[r].match(/^```$/);)a+=(a?`
`:``)+t[r],r++;n.push({type:`codeblock`,content:a,language:e}),r++;continue}if(e.match(/^>>> /)){let i=e.substring(4);for(r++;r<t.length;)i+=`
`+t[r],r++;n.push({type:`blockquote`,content:f(i)});continue}if(e.match(/^> /)){let e=[];for(;r<t.length&&t[r].match(/^> /);)e.push(t[r].substring(2)),r++;n.push({type:`blockquote`,content:f(e.join(`
`))});continue}let a=e.match(/^# (.+)$/);if(a){n.push({type:`text`,content:`<h1 style="font-size: 1.5em; font-weight: 700; margin: 8px 0 4px 0; color: #ffffff;">${d(a[1])}</h1>`}),r++;continue}let o=e.match(/^## (.+)$/);if(o){n.push({type:`text`,content:`<h2 style="font-size: 1.25em; font-weight: 600; margin: 6px 0 4px 0; color: #ffffff;">${d(o[1])}</h2>`}),r++;continue}let s=e.match(/^### (.+)$/);if(s){n.push({type:`text`,content:`<h3 style="font-size: 1.1em; font-weight: 600; margin: 4px 0 4px 0; color: #ffffff;">${d(s[1])}</h3>`}),r++;continue}let c=e.match(/^-# (.+)$/);if(c){n.push({type:`subtext`,content:f(c[1])}),r++;continue}if(e.match(/^[\*\-] (.+)$/)){let e=[];for(;r<t.length&&t[r].match(/^[\*\-] (.+)$/);){let n=t[r].match(/^[\*\-] (.+)$/);n&&e.push(n[1]),r++}n.push({type:`text`,content:`<ul style="margin: 4px 0; padding-left: 20px;">${e.map(e=>`<li>${h(f(e))}</li>`).join(``)}</ul>`});continue}if(e.match(/^\d+\. (.+)$/)){let e=[];for(;r<t.length&&t[r].match(/^\d+\. (.+)$/);){let n=t[r].match(/^\d+\. (.+)$/);n&&e.push(n[1]),r++}n.push({type:`text`,content:`<ol style="margin: 4px 0; padding-left: 20px;">${e.map(e=>`<li>${h(f(e))}</li>`).join(``)}</ol>`});continue}let l=f(e);n.push(...l),r<t.length-1&&n.push({type:`text`,content:`
`}),r++}return n}function m(e,t){let n=new Date(parseInt(e)*1e3);if(isNaN(n.getTime()))return`<t:${e}:${t}>`;switch(t){case`t`:return n.toLocaleTimeString(`en-US`,{hour:`numeric`,minute:`2-digit`});case`T`:return n.toLocaleTimeString(`en-US`,{hour:`numeric`,minute:`2-digit`,second:`2-digit`});case`d`:return n.toLocaleDateString(`en-US`,{month:`2-digit`,day:`2-digit`,year:`numeric`});case`D`:return n.toLocaleDateString(`en-US`,{month:`long`,day:`numeric`,year:`numeric`});case`f`:return n.toLocaleString(`en-US`,{month:`long`,day:`numeric`,year:`numeric`,hour:`numeric`,minute:`2-digit`});case`F`:return n.toLocaleString(`en-US`,{weekday:`long`,month:`long`,day:`numeric`,year:`numeric`,hour:`numeric`,minute:`2-digit`});case`R`:let e=Date.now()-n.getTime(),t=Math.floor(Math.abs(e)/1e3),r=Math.floor(t/60),i=Math.floor(r/60),a=Math.floor(i/24),o=Math.floor(a/30),s=Math.floor(a/365);return s>0?`${s} year${s===1?``:`s`} ago`:o>0?`${o} month${o===1?``:`s`} ago`:a>0?`${a} day${a===1?``:`s`} ago`:i>0?`${i} hour${i===1?``:`s`} ago`:r>0?`${r} minute${r===1?``:`s`} ago`:`${t} second${t===1?``:`s`} ago`;default:return n.toLocaleString(`en-US`,{month:`long`,day:`numeric`,year:`numeric`,hour:`numeric`,minute:`2-digit`})}}function h(e,t=!1){let n=e.every(e=>e.type===`emoji`||e.type===`text`&&e.content.trim()===``),r=e.some(e=>e.type===`emoji`),i=n&&r;return e.map(e=>{switch(e.type){case`text`:let t=e.content;return t.startsWith(`<h1`)||t.startsWith(`<h2`)||t.startsWith(`<h3`)||t.startsWith(`<ul`)||t.startsWith(`<ol`)?t:t===`
`?`<br>`:d(t);case`bold`:return`<strong>${h(e.content)}</strong>`;case`italic`:return`<em>${h(e.content)}</em>`;case`underline`:return`<u>${h(e.content)}</u>`;case`strikethrough`:return`<s>${h(e.content)}</s>`;case`code`:return`<code>${d(e.content)}</code>`;case`codeblock`:return`<pre><code class="language-${d(e.language||``)}">${d(e.content)}</code></pre>`;case`spoiler`:return`<span class="spoiler">${h(e.content)}</span>`;case`blockquote`:return`<blockquote>${h(e.content)}</blockquote>`;case`url`:return`<a href="${d(e.url)}" target="_blank" rel="noopener noreferrer">${d(e.content)}</a>`;case`maskedLink`:return`<a href="${d(e.url)}" target="_blank" rel="noopener noreferrer">${d(e.content)}</a>`;case`subtext`:return`<span style="font-size: 0.75em; color: #b9bbbe;">${h(e.content)}</span>`;case`timestamp`:return`<span style="background-color: rgba(88, 101, 242, 0.3); padding: 0 2px; border-radius: 3px;">${d(m(e.timestamp,e.timestampStyle))}</span>`;case`mention`:{let t=e.mentionType||`user`;return`<span style="background-color: rgba(88, 101, 242, 0.3); color: ${e.mentionColor||`#5865f2`}; padding: 0 2px; border-radius: 3px; font-weight: 500;">${t===`user`||t===`role`?`@`:`#`}${d(e.content)}</span>`}case`emoji`:{let t=e.emojiAnimated?`gif`:`png`,n=`https://cdn.discordapp.com/emojis/${e.emojiId}.${t}`,r=i?`46px`:`24px`;return`<img src="${n}" alt=":${d(e.emojiName)}:" title=":${d(e.emojiName)}:" style="width: ${r}; height: ${r}; vertical-align: bottom; display: inline-block;" class="discord-custom-emoji" />`}default:return d(e.content)}}).join(``)}function g(e){return e?h(p(e)):``}var _=l(),v=(e,t,n,r)=>{if(!e&&!t)return``;let i=new Date,a=i;if(n?.trim()){let e=n.trim();a=new Date(e),Number.isNaN(a.getTime())&&(a=i)}if(r?.trim()){let[e,t]=r.trim().split(`:`);e&&t&&a.setHours(parseInt(e,10),parseInt(t,10))}let o=[];if(e){let e=String(a.getDate()).padStart(2,`0`),t=String(a.getMonth()+1).padStart(2,`0`),n=a.getFullYear();o.push(`${e}/${t}/${n}`)}if(t){let e=String(a.getHours()).padStart(2,`0`),t=String(a.getMinutes()).padStart(2,`0`);o.push(`${e}:${t}`)}return o.join(` `)};function y({blocks:e,authors:n}){(0,u.useEffect)(()=>{let e=document.createElement(`style`);e.textContent=`
      discord-messages {
        background-color: transparent;
        border-radius: 0;
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
    `,document.head.appendChild(e);let t=e=>{let t=e.target;t.classList.contains(`spoiler`)&&(t.style.backgroundColor=`rgba(32, 34, 37, 0.6)`,t.style.color=`#dcddde`)};return document.addEventListener(`click`,t),()=>{document.head.removeChild(e),document.removeEventListener(`click`,t)}},[]);let l=e=>e?n.find(t=>t.id===e):null,d=[],f=null,p=null,m=[];for(let t of e)if(t.type===`author`){f&&p&&m.length>0&&(d.push({author:f,authorBlock:p,blocks:m}),m=[]);let e=l(t.data.authorId);f=e||null,p=e?t:null}else f&&m.push(t);return f&&p&&m.length>0&&d.push({author:f,authorBlock:p,blocks:m}),d.length===0?(0,_.jsxs)(`div`,{className:`overflow-hidden rounded-[28px] border border-white/8 bg-[#36393f] shadow-[0_24px_70px_rgba(0,0,0,0.28)]`,children:[(0,_.jsx)(`div`,{className:`border-b border-white/8 px-5 py-4`,children:(0,_.jsxs)(`div`,{className:`flex items-center justify-between gap-4`,children:[(0,_.jsx)(`h2`,{className:`text-base font-semibold uppercase tracking-[0.18em] text-slate-300`,children:`Preview`}),(0,_.jsx)(`span`,{className:`rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200`,children:`Empty state`})]})}),(0,_.jsx)(`div`,{className:`bg-[#36393f] p-5`,children:(0,_.jsx)(a,{children:(0,_.jsxs)(`div`,{className:`flex h-72 flex-col items-center justify-center rounded-[22px] border border-dashed border-white/10 bg-[#36393f] px-6 text-center text-gray-400`,children:[(0,_.jsx)(`div`,{className:`mb-4 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.22em] text-cyan-300/80`,children:`Waiting for content`}),(0,_.jsx)(`p`,{className:`text-lg font-medium text-white`,children:`Add an author to start building your message`})]})})})]}):(0,_.jsxs)(`div`,{className:`overflow-hidden rounded-[28px] border border-white/8 bg-[#36393f] shadow-[0_24px_70px_rgba(0,0,0,0.28)]`,children:[(0,_.jsx)(`div`,{className:`border-b border-white/8 px-5 py-4`,children:(0,_.jsxs)(`div`,{className:`flex items-center justify-between gap-4`,children:[(0,_.jsx)(`h2`,{className:`text-base font-semibold uppercase tracking-[0.18em] text-slate-300`,children:`Preview`}),(0,_.jsxs)(`span`,{className:`rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200`,children:[d.length,` message group`,d.length===1?``:`s`]})]})}),(0,_.jsx)(`div`,{className:`bg-[#36393f] p-5`,children:(0,_.jsx)(a,{children:d.map((e,a)=>{let l=e.blocks.filter(e=>e.type===`message`),u=l.filter(e=>e.data.content).map(e=>e.data.content).join(`
`),d=l.find(e=>e.data.reply)?.data.reply,f=d?n.find(e=>e.id===d.authorId):null,p=l.some(e=>e.data.edited),m=e.blocks.filter(e=>e.type===`embed`&&e.data.embed),h=e.blocks.filter(e=>e.type===`image`&&e.data.imageUrl),y=v(!!(e.authorBlock.data.showDate??e.author.showDate),!!(e.authorBlock.data.showTime??e.author.showTime),e.authorBlock.data.customDate??e.author.customDate,e.authorBlock.data.customTime??e.author.customTime);return(0,_.jsxs)(t,{author:e.author.username,avatar:e.author.avatar,roleColor:e.author.roleColor,bot:e.author.isBot,verified:e.author.verified,roleIcon:e.author.badgeUrl,edited:p,timestamp:y,children:[d&&f&&(0,_.jsx)(s,{slot:`reply`,author:f.username,avatar:f.avatar,roleColor:f.roleColor,bot:f.isBot,edited:d.edited,attachment:d.attachment,style:{marginLeft:`55px`},children:d.content}),u&&(0,_.jsx)(`span`,{dangerouslySetInnerHTML:{__html:g(u)}}),m.map(e=>{let t=e.data.embed;return t?(0,_.jsxs)(i,{slot:`embeds`,color:t.color,embedTitle:t.title,url:t.url,thumbnail:t.thumbnail,image:t.image,authorName:t.authorName,authorImage:t.authorIcon,authorUrl:t.authorUrl,children:[t.description&&(0,_.jsx)(`div`,{slot:`description`,dangerouslySetInnerHTML:{__html:g(t.description)}}),t.fields&&t.fields.length>0&&(0,_.jsx)(r,{slot:`fields`,children:t.fields.map((e,t)=>(0,_.jsx)(o,{fieldTitle:e.name,inline:e.inline,children:(0,_.jsx)(`span`,{dangerouslySetInnerHTML:{__html:g(e.value)}})},t))}),t.footerText&&(0,_.jsx)(`div`,{slot:`footer`,children:t.footerText})]},e.id):null}),h.length>0&&(0,_.jsx)(c,{slot:`attachments`,children:h.map(e=>(0,_.jsx)(`img`,{src:e.data.imageUrl,alt:`Attachment`,className:`max-w-full rounded`},e.id))})]},a)})})})]})}export{y as ComposedMessagePreview};