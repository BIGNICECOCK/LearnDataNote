import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as c,c as i,a as n,b as s,d as a,w as r,e as o,r as t}from"./app.5db3d6c6.js";const u={},d={href:"https://www.electronjs.org/",target:"_blank",rel:"noopener noreferrer"},m=o(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u90E8\u7F72 electron\uFF0Celectron-builder</span>
<span class="token function">npm</span> i <span class="token parameter variable">-d</span> electron@latest <span class="token comment">#\u66F4\u65B0\u6700\u65B0\u7248 Electron\uFF0C\u4E0D\u80FD\u5168\u5C40\u5B89\u88C5\uFF0C\u5426\u5219 electron-builder \u627E\u4E0D\u5230</span>
<span class="token function">yarn</span> <span class="token function">add</span> electron-builder <span class="token parameter variable">--dev</span> <span class="token comment">#\u90E8\u7F72 electron-builder</span>

set-ExecutionPolicy RemoteSigned <span class="token comment">#\u82E5 yarn \u547D\u4EE4\u62A5\u9519\uFF0C\u5219\u7BA1\u7406\u5458\u8FD0\u884C\u6B64\u547D\u4EE4</span>

<span class="token comment"># \u5168\u5C40\u5B89\u88C5\u65F6\uFF0C\u53BB\u9664^\uFF0C\u624B\u52A8\u6307\u5B9A package.json \u4E2D\u7684 electron \u7248\u672C\uFF0C\u7136\u540E\u8FD0\u884C\u4E0B\u65B9\u6253\u5305\u547D\u4EE4</span>
<span class="token comment"># \u5C06\u6253\u5305\u547D\u4EE4\u52A0\u5165 package.json\uFF0C\u76F4\u63A5\u4F7F\u7528\u6253\u5305\u547D\u4EE4</span>
<span class="token function">yarn</span> postinstall
<span class="token function">yarn</span> dist
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4F7F\u7528\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u95EE\u9898" aria-hidden="true">#</a> \u4F7F\u7528\u95EE\u9898</h2>`,2),k=n("li",null,"electron cdn \u9700\u8981\u8FDE\u63A5\u7F51\u7EDC\uFF0C\u5FC5\u987B\u7528\u672C\u5730\u73AF\u5883\u5B89\u88C5\u3002",-1),v=n("li",null,"Electron \u5B9A\u4F4D\u7684 location \u4E3A \u7A97\u53E3\u94FE\u63A5\uFF0C\u800C\u975E\u7F51\u9875\u94FE\u63A5\u3002",-1),b={href:"https://imf.ms/web/2022/07/05/my-first-web-hybird-project-experience/#%E8%B7%A8%E5%9F%9F-cors-%E9%85%8D%E7%BD%AE",target:"_blank",rel:"noopener noreferrer"},h=o(`<h3 id="nsis-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#nsis-\u914D\u7F6E" aria-hidden="true">#</a> nsis \u914D\u7F6E</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;nsis&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;oneClick&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// \u662F\u5426\u4E00\u952E\u5B89\u88C5</span>
  <span class="token property">&quot;allowElevation&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u5141\u8BB8\u8BF7\u6C42\u63D0\u5347\u3002\u5982\u679C\u4E3A false\uFF0C\u5219\u7528\u6237\u5FC5\u987B\u4F7F\u7528\u63D0\u5347\u7684\u6743\u9650\u91CD\u65B0\u542F\u52A8\u5B89\u88C5\u7A0B\u5E8F\u3002</span>
  <span class="token property">&quot;allowToChangeInstallationDirectory&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u5141\u8BB8\u4FEE\u6539\u5B89\u88C5\u76EE\u5F55</span>
  <span class="token property">&quot;installerIcon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./build/icons/aaa.ico&quot;</span><span class="token punctuation">,</span><span class="token comment">// \u5B89\u88C5\u56FE\u6807</span>
  <span class="token property">&quot;uninstallerIcon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./build/icons/bbb.ico&quot;</span><span class="token punctuation">,</span><span class="token comment">//\u5378\u8F7D\u56FE\u6807</span>
  <span class="token property">&quot;installerHeaderIcon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./build/icons/aaa.ico&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u5B89\u88C5\u65F6\u5934\u90E8\u56FE\u6807</span>
  <span class="token property">&quot;createDesktopShortcut&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u521B\u5EFA\u684C\u9762\u56FE\u6807</span>
  <span class="token property">&quot;createStartMenuShortcut&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">// \u521B\u5EFA\u5F00\u59CB\u83DC\u5355\u56FE\u6807</span>
  <span class="token property">&quot;shortcutName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxxx&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u56FE\u6807\u540D\u79F0</span>
  <span class="token property">&quot;include&quot;</span><span class="token operator">:</span> <span class="token string">&quot;build/script/installer.nsh&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u5305\u542B\u7684\u81EA\u5B9A\u4E49 nsis \u811A\u672C \u8FD9\u4E2A\u5BF9\u4E8E\u6784\u5EFA\u9700\u6C42\u4E25\u683C\u5F97\u5B89\u88C5\u8FC7\u7A0B\u76F8\u5F53\u6709\u7528\u3002</span>
  <span class="token property">&quot;script&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;build/script/installer.nsh&quot;</span> <span class="token comment">// NSIS \u811A\u672C\u7684\u8DEF\u5F84\uFF0C\u7528\u4E8E\u81EA\u5B9A\u4E49\u5B89\u88C5\u7A0B\u5E8F\u3002\u9ED8\u8BA4\u4E3A build / installer.nsi</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6253\u5305\u62A5\u9519" tabindex="-1"><a class="header-anchor" href="#\u6253\u5305\u62A5\u9519" aria-hidden="true">#</a> \u6253\u5305\u62A5\u9519</h3><p>\u6267\u884C\u6253\u5305\u547D\u4EE4\u540E\uFF0C\u63D0\u793A <code>cannot unpack electron zip file, will be re-downloaded</code>\u3002</p><p>\u624B\u52A8\u4E0B\u8F7D\u5BF9\u5E94\u7248\u672C electron\uFF0C\u7136\u540E\u5C06\u538B\u7F29\u5305\u653E\u7F6E\u4E8E <code>C:\\Users\\\u7528\u6237\u540D\\AppData\\Local\\electron\\Cache</code>\u3002</p><h3 id="\u8DE8\u7CFB\u7EDF\u6253\u5305" tabindex="-1"><a class="header-anchor" href="#\u8DE8\u7CFB\u7EDF\u6253\u5305" aria-hidden="true">#</a> \u8DE8\u7CFB\u7EDF\u6253\u5305</h3><p>electron \u4E0D\u5141\u8BB8\u8DE8\u7CFB\u7EDF\u6253\u5305\uFF0C\u6240\u4EE5 Mac \u6253\u5305\u9700\u8981\u5728 iOS \u73AF\u5883\uFF0CLinux \u6253\u5305\u9700\u5728 Linux \u73AF\u5883\u3002</p><p>Win11 \u53EF\u5141\u8BB8\u5185\u5EFA\u5B50\u7CFB\u7EDF\uFF0C\u7BA1\u7406\u5458\u8EAB\u4EFD\u8FD0\u884C Powershell\uFF0C\u8F93\u5165 bash \u5373\u53EF\u8FDB\u5165 Linux \u5B50\u7CFB\u7EDF\u3002\u4E5F\u53EF\u4EE5\u76F4\u63A5\u6253\u5F00\u5728 Microsoft store \u4E2D\u4E0B\u8F7D\u7684 Ubuntu \u8FDB\u5165\u5B50\u7CFB\u7EDF\uFF0C\u521D\u6B21\u8FDB\u5165 Linux \u5B50\u7CFB\u7EDF\u9700\u8981\u8BBE\u7F6E Linux \u7684\u7528\u6237\u540D\u53CA\u5BC6\u7801\u3002</p><p>\u66F4\u591A\u547D\u4EE4\u53C2\u8003\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u5B89\u6392\u88C5\u66F4\u65B0\u8F6F\u4EF6\u6E90\uFF0C\u5B89\u88C5 node \u548C npm \u73AF\u5883</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> update
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> nodejs
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token function">npm</span>

<span class="token function">sudo</span> <span class="token function">npm</span> <span class="token function">install</span> npm@latest <span class="token parameter variable">-g</span> <span class="token comment">#\u5347\u7EA7 npm</span>
<span class="token function">sudo</span> <span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> n <span class="token comment">#\u5B89\u88C5\u7528\u4E8E\u5B89\u88C5 nodejs \u7684\u6A21\u5757 n</span>
<span class="token function">sudo</span> n stable <span class="token comment">#\u901A\u8FC7 n \u6A21\u5757\u5B89\u88C5\u6307\u5B9A\u7684 nodejs</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10);function f(q,_){const e=t("ExternalLinkIcon"),l=t("RouterLink");return c(),i("div",null,[n("p",null,[n("a",d,[s("Electron"),a(e)]),s(" \u662F\u4F7F\u7528 JavaScript\uFF0CHTML \u548C CSS \u6784\u5EFA\u8DE8\u5E73\u53F0\u7684\u684C\u9762\u5E94\u7528\u7A0B\u5E8F\u6846\u67B6\u3002Electron \u517C\u5BB9 Mac\u3001Windows \u548C Linux\uFF0C\u53EF\u4EE5\u6784\u5EFA\u51FA\u4E09\u4E2A\u5E73\u53F0\u7684\u5E94\u7528\u7A0B\u5E8F\u3002")]),n("p",null,[s("\u6309 "),a(l,{to:"/deploy/VPS.html#%E7%8E%AF%E5%A2%83%E9%83%A8%E7%BD%B2"},{default:r(()=>[s("\u73AF\u5883\u90E8\u7F72\u6559\u7A0B")]),_:1}),s("\uFF0C\u90E8\u7F72 npm \u548C yarn\uFF0C\u7136\u540E\u90E8\u7F72 electron \u73AF\u5883\u3002")]),m,n("ul",null,[k,v,n("li",null,[n("a",b,[s("\u8DE8\u57DF CORS \u914D\u7F6E"),a(e)]),s("\uFF1A\u6709\u7684\u5E94\u7528\u9700\u8981\u8BBF\u95EE\u7684\u662F\u672C\u5730 Web Server\uFF0C\u4E0E\u670D\u52A1\u7AEF\u63A5\u53E3\u5728\u4E0D\u540C\u57DF")])]),h])}const y=p(u,[["render",f],["__file","Electron.html.vue"]]);export{y as default};
