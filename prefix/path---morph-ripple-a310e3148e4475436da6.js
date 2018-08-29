webpackJsonp([9656307819207],{426:function(n,a){n.exports={data:{postBySlug:{html:'<p><a href="https://opensource.org/licenses/Apache-2.0"><img src="https://img.shields.io/badge/License-Apache%202.0-blue.svg" alt="License"></a> <a href="https://www.webcomponents.org/element/PolymerElements/paper-progress"><img src="https://img.shields.io/badge/webcomponents.org-published-blue.svg" alt="Published on webcomponents.org"></a></p>\n<p>General ripple animation element for Polymorph Components</p>\n<h2 id="getting-started"><a href="#getting-started" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Getting Started</h2>\n<p>For the information about how to clone the desired repository, running the local server and testing, please refer to Polymorph elements getting started docs at the end of this repository.</p>\n<h2 id="demo"><a href="#demo" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Demo</h2>\n<!---\n```\n<custom-element-demo>\n  <template>\n    <script src="../webcomponentsjs/webcomponents-lite.js"></script>\n    <link rel="import" href="../morph-shared-colors/morph-shared-colors.html">\n    <link rel="import" href="../morph-shared-styles/morph-shared-styles.html">\n    <link rel="import" href="../morph-button/morph-button.html">\n    <link rel="import" href="morph-ripple.html">\n    <style>\n      .ripple-wrapper {\n        position: relative;\n        width: 100%; \n        height: 100px;\n        border: 1px solid #ccc;\n        text-align: center;\n        vertical-align: middle;\n        line-height: 100px;\n      }\n\n      h3 {\n        margin: 0;\n      }\n    </style>\n    <next-code-block></next-code-block>\n  </template>\n</custom-element-demo>\n```\n-->\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ripple-wrapper<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>Click me!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>morph-ripple</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>morph-ripple</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>\n  You can click on the button below to see the ripple\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>morph-button</span> <span class="token attr-name">platform</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>android<span class="token punctuation">"</span></span> <span class="token attr-name">filled</span> <span class="token attr-name">big</span><span class="token punctuation">></span></span>android button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>morph-button</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<ul>\n<li>\n<p>Morph-ripple demo on other elements.</p>\n<p align="center">\n<img src="/images/ripple-tabbar-demo.gif" alt="morph ripple demo image">\n</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>Android morph-tabbar demo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>morph-tabbar</span> <span class="token attr-name">platform</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>android<span class="token punctuation">"</span></span> <span class="token attr-name">selected</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>play<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>morph-tabbar-item</span> <span class="token attr-name">platform</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>android<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>play<span class="token punctuation">"</span></span> <span class="token attr-name">not-selected-image</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>../img/play_android.svg<span class="token punctuation">"</span></span> <span class="token attr-name">selected-image</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>../img/play_android_selected.svg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>morph-tabbar-item</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>morph-tabbar-item</span> <span class="token attr-name">platform</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>android<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>favorite<span class="token punctuation">"</span></span> <span class="token attr-name">not-selected-image</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>../img/favorite_android.svg<span class="token punctuation">"</span></span> <span class="token attr-name">selected-image</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>../img/favorite_android_selected.svg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>morph-tabbar-item</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>morph-tabbar-item</span> <span class="token attr-name">platform</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>android<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>mic<span class="token punctuation">"</span></span> <span class="token attr-name">not-selected-image</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>../img/mic_android.svg<span class="token punctuation">"</span></span> <span class="token attr-name">selected-image</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>../img/mic_android_selected.svg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>morph-tabbar-item</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>morph-tabbar</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n</li>\n<li>\n<p>The code below shows how we use it inside the elements.</p>\n</li>\n</ul>\n<p align="center">\n    <img src="/images/ripple-button-demo.gif" alt="morph ripple demo image">\n  </p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href$</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>[[link]]<span class="token punctuation">"</span></span> <span class="token attr-name">target$</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>[[target]]<span class="token punctuation">"</span></span> <span class="token attr-name">rel$</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>[[relation]]<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>morph-ripple</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>morph-ripple</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<h2 id="styling"><a href="#styling" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Styling</h2>\n<table>\n<thead>\n<tr>\n<th>Custom property</th>\n<th>Description</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code class="language-text">--ripple-color</code></td>\n<td>Color of the ripple</td>\n<td>#2196f3</td>\n</tr>\n</tbody>\n</table>\n<h2 id="further-help"><a href="#further-help" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Further help</h2>\n<p>For more information on how to install and run test please go here - <a href="https://github.com/moduware/polymorph-components/blob/master/INFO.md">Polymorph elements getting started</a></p>',timeToRead:2,excerpt:"  General ripple animation element for Polymorph Components Getting Started For the information about how to clone the desired repository…",frontmatter:{title:"morph-ripple",cover:null,date:null,category:null,tags:null}},tableOfContents:{chapters:[{title:"Polymorph Components",entries:[{entry:{id:"/Users/Clint/Projects/moduware/polymorph-components/content/lessons/morph_button.md absPath of file",childMarkdownRemark:{fields:{slug:"/morph-button"},frontmatter:{title:"morph-button"}}}},{entry:{id:"/Users/Clint/Projects/moduware/polymorph-components/content/lessons/morph_pages.md absPath of file",childMarkdownRemark:{fields:{slug:"/morph-pages"},frontmatter:{title:"morph-pages"}}}},{entry:{id:"/Users/Clint/Projects/moduware/polymorph-components/content/lessons/morph_overlay.md absPath of file",childMarkdownRemark:{fields:{slug:"/morph-overlay"},frontmatter:{title:"morph-overlay"}}}},{entry:{id:"/Users/Clint/Projects/moduware/polymorph-components/content/lessons/morph_view.md absPath of file",childMarkdownRemark:{fields:{slug:"/morph-view"},frontmatter:{title:"morph-view"}}}},{entry:{id:"/Users/Clint/Projects/moduware/polymorph-components/content/lessons/morph_swipeout.md absPath of file",childMarkdownRemark:{fields:{slug:"/morph-swipeout"},frontmatter:{title:"morph-swipeout"}}}},{entry:{id:"/Users/Clint/Projects/moduware/polymorph-components/content/lessons/morph_ripple.md absPath of file",childMarkdownRemark:{fields:{slug:"/morph-ripple"},frontmatter:{title:"morph-ripple"}}}},{entry:{id:"/Users/Clint/Projects/moduware/polymorph-components/content/lessons/morph_tabbar.md absPath of file",childMarkdownRemark:{fields:{slug:"/morph-tabbar"},frontmatter:{title:"morph-tabbar"}}}},{entry:{id:"/Users/Clint/Projects/moduware/polymorph-components/content/lessons/morph_tabbar_item.md absPath of file",childMarkdownRemark:{fields:{slug:"/morph-tabbar-item"},frontmatter:{title:"morph-tabbar-item"}}}},{entry:{id:"/Users/Clint/Projects/moduware/polymorph-components/content/lessons/morph_list_view.md absPath of file",childMarkdownRemark:{fields:{slug:"/morph-list-view"},frontmatter:{title:"morph-list-view"}}}},{entry:{id:"/Users/Clint/Projects/moduware/polymorph-components/content/lessons/morph_list_view_item.md absPath of file",childMarkdownRemark:{fields:{slug:"/morph-list-view-item"},frontmatter:{title:"morph-list-view-item"}}}},{entry:{id:"/Users/Clint/Projects/moduware/polymorph-components/content/lessons/morph_list_view_title.md absPath of file",childMarkdownRemark:{fields:{slug:"/morph-list-view-title"},frontmatter:{title:"morph-list-view-title"}}}},{entry:{id:"/Users/Clint/Projects/moduware/polymorph-components/content/lessons/morph_list_view_divider.md absPath of file",childMarkdownRemark:{fields:{slug:"/morph-list-view-divider"},frontmatter:{title:"morph-list-view-divider"}}}},{entry:{id:"/Users/Clint/Projects/moduware/polymorph-components/content/lessons/morph_sidebar.md absPath of file",childMarkdownRemark:{fields:{slug:"/morph-sidebar"},frontmatter:{title:"morph-sidebar"}}}}]}]}},pathContext:{slug:"/morph-ripple"}}}});
//# sourceMappingURL=path---morph-ripple-a310e3148e4475436da6.js.map