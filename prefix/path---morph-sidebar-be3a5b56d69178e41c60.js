webpackJsonp([9131624949603],{427:function(n,a){n.exports={data:{postBySlug:{html:'<p><a href="https://opensource.org/licenses/Apache-2.0"><img src="https://img.shields.io/badge/License-Apache%202.0-blue.svg" alt="License"></a> <a href="https://www.webcomponents.org/element/PolymerElements/paper-progress"><img src="https://img.shields.io/badge/webcomponents.org-published-blue.svg" alt="Published on webcomponents.org"></a></p>\n<p>Sidebar that morphs for current mobile OS.</p>\n<p><code class="language-text">morph-sidebar</code> component changes its appearance based on the whether the platform or device is IOS or Android.</p>\n<h2 id="getting-started"><a href="#getting-started" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Getting Started</h2>\n<p>For the information about how to clone the desired repository, running the local server and testing, please refer to Polymorph elements getting started docs at the end of this repository.</p>\n<h2 id="demo"><a href="#demo" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Demo</h2>\n<ul>\n<li>\n<p>Here is a quick demo of <code class="language-text">&lt;morph-sidebar&gt;</code></p>\n<p>On IOS platform</p>\n<p align="center">\n<img src="/images/sidebar-demo-android.gif" alt="Morph Sidebar element">\n</p>\n<p>On Android platform</p>\n<p align="center">\n<img src="/images/sidebar-demo-ios.gif" alt="Morph Sidebar element">\n</p>\n</li>\n</ul>\n<h2 id="styling"><a href="#styling" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Styling</h2>\n<p>  -For Android platform;</p>\n<table>\n<thead>\n<tr>\n<th>Custom property</th>\n<th>Description</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code class="language-text">--app-drawer-width</code></td>\n<td>Width of the app drawer</td>\n<td>260px</td>\n</tr>\n<tr>\n<td><code class="language-text">--morph-sidebar-scrim-background-android</code></td>\n<td>Background color for scrim</td>\n<td>rgba(0, 0, 0, 0.2)</td>\n</tr>\n<tr>\n<td><code class="language-text">--app-drawer-scrim-background</code></td>\n<td>App-drawer scrim color</td>\n<td>var(--morph-sidebar-scrim-background-android)</td>\n</tr>\n</tbody>\n</table>\n<p>  -For IOS platform;</p>\n<table>\n<thead>\n<tr>\n<th>Custom property</th>\n<th>Description</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code class="language-text">--app-drawer-width</code></td>\n<td>Width of the app drawer</td>\n<td>260px</td>\n</tr>\n<tr>\n<td><code class="language-text">--morph-sidebar-scrim-background-ios</code></td>\n<td>Background color for scrim</td>\n<td>rgba(0, 0, 0, 0)</td>\n</tr>\n<tr>\n<td><code class="language-text">--app-drawer-scrim-background</code></td>\n<td>App-drawer scrim color</td>\n<td>var(--morph-sidebar-scrim-background-ios)</td>\n</tr>\n</tbody>\n</table>\n<h2 id="attributes"><a href="#attributes" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Attributes</h2>\n<table>\n<thead>\n<tr>\n<th align="center">Custom Attribute</th>\n<th align="center">Type</th>\n<th>Description</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align="center"><strong><code class="language-text">align</code></strong></td>\n<td align="center">String</td>\n<td>Assigns where to display side bar.\n<br>\n \n<code class="language-text">left</code>\n or \n<code class="language-text">right</code></td>\n<td><strong><code class="language-text">left</code></strong></td>\n</tr>\n<tr>\n<td align="center"><strong><code class="language-text">opened</code></strong></td>\n<td align="center">Boolean</td>\n<td>Indicates if the side bar is close or open</td>\n<td><strong><code class="language-text">false</code></strong></td>\n</tr>\n<tr>\n<td align="center"><strong><code class="language-text">transition-duration-ios</code></strong></td>\n<td align="center">String</td>\n<td>Transition of side bar opening in ios</td>\n<td><strong><code class="language-text">400</code></strong></td>\n</tr>\n<tr>\n<td align="center"><strong><code class="language-text">transition-duration-android</code></strong></td>\n<td align="center">String</td>\n<td>Transition of side bar opening in android</td>\n<td><strong><code class="language-text">300</code></strong></td>\n</tr>\n<tr>\n<td align="center"><strong><code class="language-text">transition-duration-web</code></strong></td>\n<td align="center">String</td>\n<td>Transition of side bar opening in web</td>\n<td><strong><code class="language-text">200</code></strong></td>\n</tr>\n</tbody>\n</table>\n<h2 id="how-to-use-our-code-classlanguage-textltmorph-sidebargtcode-component"><a href="#how-to-use-our-code-classlanguage-textltmorph-sidebargtcode-component" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How to use our <strong><code class="language-text">&lt;morph-sidebar&gt;</code></strong> component</h2>\n<ul>\n<li>\n<p>We can wrap the whole content with <a href="https://github.com/PolymerElements/app-layout/tree/master/app-drawer-layout"><strong>app-drawer-layout</strong></a> component to make it work with other <code class="language-text">&lt;app-layout&gt;</code> elements like <code class="language-text">&lt;app-header&gt;</code>. We can then use the <code class="language-text">drawer-toggle</code> attribute and place them on any children of the <code class="language-text">&lt;app-drawer-layout&gt;</code> and when click it toggles our sidebar open and close.</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>\n\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>app-drawer-layout</span> <span class="token attr-name">fullbleed</span> <span class="token attr-name">force-narrow</span><span class="token punctuation">></span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>morph-sidebar</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>drawer<span class="token punctuation">"</span></span> <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>left<span class="token punctuation">"</span></span> <span class="token attr-name">swipe-open</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Left morph-sidebar<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Simulated with cover animation and shadow for android. And no shadow if iOS.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>morph-sidebar</span><span class="token punctuation">></span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>app-header-layout</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>app-header</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>header<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>app-toolbar</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">main-tittle</span><span class="token punctuation">></span></span>morph-sidebar<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>app-toolbar</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>app-header</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>app-header-layout</span><span class="token punctuation">></span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span> <span class="token attr-name">drawer-toggle</span><span class="token punctuation">></span></span>Toggle Left Sidebar<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>app-drawer-layout</span><span class="token punctuation">></span></span>\n\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script language-javascript">\n\n    <span class="token function-variable function">toggleDrawer</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">var</span> drawer <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span>name <span class="token operator">+</span> <span class="token string">\'Sidebar\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      drawer<span class="token punctuation">.</span><span class="token function">toggle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n</li>\n<li>\n<p>We may use two (2) <code class="language-text">&lt;morph-sidebar&gt;</code> panels at the same time, one left and one right panel. <code class="language-text">align</code> defaults to <code class="language-text">left</code> when not specified.</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>\n\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>morph-sidebar</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>leftSidebar<span class="token punctuation">"</span></span> <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>left<span class="token punctuation">"</span></span> <span class="token attr-name">swipe-open</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Left morph-sidebar<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Simulated with cover animation and shadow for android. And no shadow if iOS.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>morph-sidebar</span><span class="token punctuation">></span></span>\n\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>morph-sidebar</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>rightSidebar<span class="token punctuation">"</span></span> <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>right<span class="token punctuation">"</span></span> <span class="token attr-name">swipe-open</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Right morph-sidebar<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Simulated with cover animation and shadow for android. And no shadow if iOS.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>morph-sidebar</span><span class="token punctuation">></span></span>\n\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span> <span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>toggleDrawer(<span class="token punctuation">\'</span>left<span class="token punctuation">\'</span>)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Toggle Left Sidebar<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span> <span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>toggleDrawer(<span class="token punctuation">\'</span>right<span class="token punctuation">\'</span>)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Toggle Right Sidebar<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script language-javascript">\n\n    <span class="token function-variable function">toggleDrawer</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">var</span> drawer <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span>name <span class="token operator">+</span> <span class="token string">\'Sidebar\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      drawer<span class="token punctuation">.</span><span class="token function">toggle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<ul>\n<li>We can also use two (2) <code class="language-text">&lt;morph-sidebar&gt;</code> panels with <code class="language-text">app-drawer-layout</code> by doing a nested <code class="language-text">app-drawer-layout</code> setup. We can use only the drawer-toggle attribute on the outer <code class="language-text">app-drawer-layout</code> children. We need to use other ways to open/close the inner <code class="language-text">&lt;morph-sidebar&gt;</code> (which is our right sidebar panel in this example), like using javascript for our example below.</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>app-drawer-layout</span> <span class="token attr-name">fullbleed</span> <span class="token attr-name">force-narrow</span><span class="token punctuation">></span></span>\n\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>morph-sidebar</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>drawer<span class="token punctuation">"</span></span> <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>left<span class="token punctuation">"</span></span> <span class="token attr-name">swipe-open</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Left morph-sidebar<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Simulated with cover animation and shadow for android. And no shadow if iOS.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>morph-sidebar</span><span class="token punctuation">></span></span>\n\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span> <span class="token attr-name">drawer-toggle</span><span class="token punctuation">></span></span>Toggle Left Sidebar<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>app-drawer-layout</span> <span class="token attr-name">force-narrow</span><span class="token punctuation">></span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>morph-sidebar</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>rightSidebar<span class="token punctuation">"</span></span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>drawer<span class="token punctuation">"</span></span> <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>right<span class="token punctuation">"</span></span> <span class="token attr-name">swipe-open</span> <span class="token attr-name">transition-duration-ios</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>500<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Right morph-sidebar<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Simulated with cover animation and shadow for android. And no shadow if iOS.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>This sidebar animation duration is change to 500<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>morph-sidebar</span><span class="token punctuation">></span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span> <span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>toggleDrawer(<span class="token punctuation">\'</span>right<span class="token punctuation">\'</span>)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Toggle Right Sidebar<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>app-drawer-layout</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>app-drawer-layout</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script language-javascript">\n\n  <span class="token function-variable function">toggleDrawer</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> drawer <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span>name <span class="token operator">+</span> <span class="token string">\'Sidebar\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    drawer<span class="token punctuation">.</span><span class="token function">toggle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p><strong>ToDo: Implement the reveal animation using this new <code class="language-text">morph-sidebar</code></strong></p>\n<ul>\n<li>\n<p><code class="language-text">&lt;morph-sidebar&gt;</code> has two animation when opening and closing. The default animation of the sidebar is <code class="language-text">cover</code>. It covers the morph-view element when it opens.</p>\n</li>\n<li>\n<p>The other animation is called <code class="language-text">reveal</code> where <a href="https://github.com/moduware/morph-view"><strong>morph-view</strong></a> moves out and reveals the <code class="language-text">&lt;morph-sidebar&gt;</code> under it. <code class="language-text">&lt;morph-view&gt;</code> moves out of the way to accommodate the width of our sidebar. To use <code class="language-text">reveal</code> we add reveal attribute to <code class="language-text">&lt;morph-view&gt;</code> component.</p>\n</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">closeRightSidebarWithReveal</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> view <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'mainView\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  view<span class="token punctuation">.</span><span class="token function">removeAttribute</span><span class="token punctuation">(</span><span class="token string">\'reveal\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\ndocument<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">\'DOMContentLoaded\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'sidebarRight\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">\'open-changed\'</span><span class="token punctuation">,</span> closeRightSidebarWithReveal<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n</li>\n</ul>\n<h2 id="further-help"><a href="#further-help" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Further help</h2>\n<p>For more information on how to install and run test please go here - <a href="https://github.com/moduware/polymorph-components/blob/master/INFO.md">Polymorph elements getting started</a></p>',
timeToRead:6,excerpt:"  Sidebar that morphs for current mobile OS.  component changes its appearance based on the whether the platform or device is IOS or Android…",frontmatter:{title:"morph-sidebar",cover:null,date:null,category:null,tags:null}},tableOfContents:{chapters:[{title:"Polymorph Components",entries:[{entry:{id:"/Users/Clint/Projects/moduware/polymorph-components/content/lessons/morph_button.md absPath of file",childMarkdownRemark:{fields:{slug:"/morph-button"},frontmatter:{title:"morph-button"}}}},{entry:{id:"/Users/Clint/Projects/moduware/polymorph-components/content/lessons/morph_pages.md absPath of file",childMarkdownRemark:{fields:{slug:"/morph-pages"},frontmatter:{title:"morph-pages"}}}},{entry:{id:"/Users/Clint/Projects/moduware/polymorph-components/content/lessons/morph_overlay.md absPath of file",childMarkdownRemark:{fields:{slug:"/morph-overlay"},frontmatter:{title:"morph-overlay"}}}},{entry:{id:"/Users/Clint/Projects/moduware/polymorph-components/content/lessons/morph_view.md absPath of file",childMarkdownRemark:{fields:{slug:"/morph-view"},frontmatter:{title:"morph-view"}}}},{entry:{id:"/Users/Clint/Projects/moduware/polymorph-components/content/lessons/morph_swipeout.md absPath of file",childMarkdownRemark:{fields:{slug:"/morph-swipeout"},frontmatter:{title:"morph-swipeout"}}}},{entry:{id:"/Users/Clint/Projects/moduware/polymorph-components/content/lessons/morph_ripple.md absPath of file",childMarkdownRemark:{fields:{slug:"/morph-ripple"},frontmatter:{title:"morph-ripple"}}}},{entry:{id:"/Users/Clint/Projects/moduware/polymorph-components/content/lessons/morph_tabbar.md absPath of file",childMarkdownRemark:{fields:{slug:"/morph-tabbar"},frontmatter:{title:"morph-tabbar"}}}},{entry:{id:"/Users/Clint/Projects/moduware/polymorph-components/content/lessons/morph_tabbar_item.md absPath of file",childMarkdownRemark:{fields:{slug:"/morph-tabbar-item"},frontmatter:{title:"morph-tabbar-item"}}}},{entry:{id:"/Users/Clint/Projects/moduware/polymorph-components/content/lessons/morph_list_view.md absPath of file",childMarkdownRemark:{fields:{slug:"/morph-list-view"},frontmatter:{title:"morph-list-view"}}}},{entry:{id:"/Users/Clint/Projects/moduware/polymorph-components/content/lessons/morph_list_view_item.md absPath of file",childMarkdownRemark:{fields:{slug:"/morph-list-view-item"},frontmatter:{title:"morph-list-view-item"}}}},{entry:{id:"/Users/Clint/Projects/moduware/polymorph-components/content/lessons/morph_list_view_title.md absPath of file",childMarkdownRemark:{fields:{slug:"/morph-list-view-title"},frontmatter:{title:"morph-list-view-title"}}}},{entry:{id:"/Users/Clint/Projects/moduware/polymorph-components/content/lessons/morph_list_view_divider.md absPath of file",childMarkdownRemark:{fields:{slug:"/morph-list-view-divider"},frontmatter:{title:"morph-list-view-divider"}}}},{entry:{id:"/Users/Clint/Projects/moduware/polymorph-components/content/lessons/morph_sidebar.md absPath of file",childMarkdownRemark:{fields:{slug:"/morph-sidebar"},frontmatter:{title:"morph-sidebar"}}}}]}]}},pathContext:{slug:"/morph-sidebar"}}}});
//# sourceMappingURL=path---morph-sidebar-be3a5b56d69178e41c60.js.map