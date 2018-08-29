webpackJsonp([0xc1a22a9df6e1],{423:function(n,s){n.exports={data:{postBySlug:{html:'<p><a href="https://opensource.org/licenses/Apache-2.0"><img src="https://img.shields.io/badge/License-Apache%202.0-blue.svg" alt="License"></a> <a href="https://www.webcomponents.org/element/PolymerElements/paper-progress"><img src="https://img.shields.io/badge/webcomponents.org-published-blue.svg" alt="Published on webcomponents.org"></a></p>\n<p>List view container component</p>\n<p><code class="language-text">morph-list-view</code> is the containing parent element for other list view components like <code class="language-text">morph-list-view-item</code>, <code class="language-text">morph-list-view-title</code>, <code class="language-text">morph-list-view-divider</code>. These list item components changes its appearance based on the whether the platform or device is IOS or Android.</p>\n<h2 id="getting-started"><a href="#getting-started" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Getting Started</h2>\n<p>For the information about how to clone the desired repository, running the local server and testing, please refer to Polymorph elements getting started docs at the end of this repository.</p>\n<h2 id="demo"><a href="#demo" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Demo</h2>\n<!---\n\n```\n<custom-element-demo>\n  <template>\n    <script src="../webcomponentsjs/webcomponents-lite.js"></script>\n    <link rel="import" href="../morph-list-view-item/morph-list-view-item.html">\n    <link rel="import" href="../morph-list-view-title/morph-list-view-title.html">\n    <link rel="import" href="../morph-list-view-divider/morph-list-view-divider.html">\n    <link rel="import" href="../iron-icons/maps-icons.html">\n    <link rel="import" href="morph-list-view.html">\n    <style>\n      html {\n        background-color: #eff0f4;\n      }\n    </style>\n    <next-code-block></next-code-block>\n  </template>\n</custom-element-demo>\n\n```\n\n-->\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>morph-list-view</span> <span class="token attr-name">platform</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>android<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>morph-list-view-title</span> <span class="token attr-name">platform</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>android<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Android List Components<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>morph-list-view-title</span><span class="token punctuation">></span></span>\n\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>morph-list-view-item</span> <span class="token attr-name">platform</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>android<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    Android List Item\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>secondary-content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Android Version<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>morph-list-view-item</span><span class="token punctuation">></span></span>\n\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>morph-list-view-divider</span> <span class="token attr-name">platform</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>android<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Android Divider Element<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>morph-list-view-divider</span><span class="token punctuation">></span></span>\n\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>morph-list-view-item</span> <span class="token attr-name">platform</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>android<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#moduware<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>header<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Header<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n    Android list item with href comes with ripple effect by default\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>footer<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Footer<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>morph-list-view-item</span><span class="token punctuation">></span></span>\n\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>morph-list-view-item</span> <span class="token attr-name">platform</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>android<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#moduware<span class="token punctuation">"</span></span> <span class="token attr-name">expandable</span><span class="token punctuation">></span></span>\n    Expandable List Item with Link - Click to close or expand\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>secondary-content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Android Version<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>expandable-content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum id neque nec commodo. Sed vel justo at turpis laoreet pellentesque quis sed lorem. Integer semper arcu nibh, non mollis arcu tempor vel. Sed pharetra tortor vitae est rhoncus, vel congue dui sollicitudin. Donec eu arcu dignissim felis viverra blandit suscipit eget ipsum.\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>morph-list-view-item</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>morph-list-view</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>morph-list-view</span> <span class="token attr-name">platform</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ios<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>morph-list-view-title</span> <span class="token attr-name">platform</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ios<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>IOS List Components<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>morph-list-view-title</span><span class="token punctuation">></span></span>\n\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>morph-list-view-item</span> <span class="token attr-name">platform</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ios<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    List Item with secondary-content slot\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>secondary-content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>IOS Version<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>morph-list-view-item</span><span class="token punctuation">></span></span>\n\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>morph-list-view-item</span> <span class="token attr-name">platform</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ios<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#moduware<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>header<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Header<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n    List Item with both header and footer slot\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>footer<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Footer<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>morph-list-view-item</span><span class="token punctuation">></span></span>\n\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>morph-list-view-divider</span> <span class="token attr-name">platform</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ios<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>IOS Divider Element<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>morph-list-view-divider</span><span class="token punctuation">></span></span>\n\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>morph-list-view-item</span> <span class="token attr-name">platform</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ios<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#moduware<span class="token punctuation">"</span></span> <span class="token attr-name">expandable</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>icon<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>iron-icon</span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>maps:directions-bus<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>iron-icon</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n    Expandable List Item - Click to close or expand\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>secondary-content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>IOS Version<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>expandable-content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum id neque nec commodo. Sed vel justo at turpis laoreet pellentesque quis sed lorem. Integer semper arcu nibh, non mollis arcu tempor vel. Sed pharetra tortor vitae est rhoncus, vel congue dui sollicitudin. Donec eu arcu dignissim felis viverra blandit suscipit eget ipsum.\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>morph-list-view-item</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>morph-list-view</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<ul>\n<li>\n<p>Here is a quick demo of the morph-list-view element for IOS.</p>\n<p align="center">\n<img src="/images/list-view-ios-demo.png" alt="IOS morph-list-view demo"/>\n</p>\n</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>morph-list-view</span> <span class="token attr-name">platform</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ios<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>morph-list-view-title</span><span class="token punctuation">></span></span>First list<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>morph-list-view-title</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>morph-list-view-item</span><span class="token punctuation">></span></span>Item 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>morph-list-view-item</span><span class="token punctuation">></span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>morph-list-view-divider</span><span class="token punctuation">></span></span>Divider<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>morph-list-view-divider</span><span class="token punctuation">></span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>morph-list-view-item</span><span class="token punctuation">></span></span>\n      Item 2\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>secondary-content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Version<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span> \n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>morph-list-view-item</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>morph-list-view-item</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#moduware<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>header<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Header<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n      Item 3\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>footer<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Footer<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>morph-list-view-item</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>morph-list-view</span><span class="token punctuation">></span></span>\n\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>morph-list-view</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>morph-list-view-title</span><span class="token punctuation">></span></span>Second list<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>morph-list-view-title</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>morph-list-view-item</span><span class="token punctuation">></span></span>Item 4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>morph-list-view-item</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>morph-list-view</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<ul>\n<li>\n<p>Here is a quick demo of the morph-list-view element for Android.</p>\n<p align="center">\n<img src="/images/list-view-android-demo.png" alt="Android morph-list-view demo"/>\n</p>\n</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>morph-list-view</span> <span class="token attr-name">platform</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>android<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>morph-list-view-title</span><span class="token punctuation">></span></span>First list<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>morph-list-view-title</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>morph-list-view-item</span><span class="token punctuation">></span></span>Item 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>morph-list-view-item</span><span class="token punctuation">></span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>morph-list-view-divider</span><span class="token punctuation">></span></span>Divider<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>morph-list-view-divider</span><span class="token punctuation">></span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>morph-list-view-item</span><span class="token punctuation">></span></span>\n      Item 2\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>secondary-content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Version<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span> \n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>morph-list-view-item</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>morph-list-view-item</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#moduware<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>header<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Header<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n      Item 3\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>footer<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Footer<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>morph-list-view-item</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>morph-list-view</span><span class="token punctuation">></span></span>\n\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>morph-list-view</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>morph-list-view-title</span><span class="token punctuation">></span></span>Second list<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>morph-list-view-title</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>morph-list-view-item</span><span class="token punctuation">></span></span>Item 4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>morph-list-view-item</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>morph-list-view</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<table>\n<thead>\n<tr>\n<th align="center">Custom Attribute</th>\n<th align="center">Type</th>\n<th>Description</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align="center"><strong><code class="language-text">accordion</code></strong></td>\n<td align="center">Boolean</td>\n<td>This is an option for items to expand one at a time on the same list view</td>\n<td><strong><code class="language-text">false</code></strong></td>\n</tr>\n</tbody>\n</table>\n<ul>\n<li>\n<p>Here is a quick demo of the morph-list-view element with accordion option</p>\n<p align="center">\n<img src="/images/list-view-accordion.gif" alt="Android morph-list-view accordion option demo">\n</p>\n</li>\n<li>\n<p>Sample HTML markup for accordion list</p>\n</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>morph-list-view</span> <span class="token attr-name">accordion</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>morph-list-view-title</span><span class="token punctuation">></span></span>Accordion list<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>morph-list-view-title</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>morph-list-view-item</span> <span class="token attr-name">expandable</span> <span class="token attr-name">expanded</span><span class="token punctuation">></span></span>Item 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>morph-list-view-item</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>morph-list-view-item</span> <span class="token attr-name">expandable</span><span class="token punctuation">></span></span>Item 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>morph-list-view-item</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>morph-list-view-item</span> <span class="token attr-name">expandable</span><span class="token punctuation">></span></span>Item 3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>morph-list-view-item</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>morph-list-view</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<h2 id="further-help"><a href="#further-help" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Further help</h2>\n<p>For more information on how to install and run test please go here - <a href="https://github.com/moduware/polymorph-components/blob/master/INFO.md">Polymorph elements getting started</a></p>',
timeToRead:5,excerpt:"  List view container component  is the containing parent element for other list view components like  ,  ,  . These list item components…",frontmatter:{title:"morph-list-view",cover:null,date:null,category:null,tags:null}},tableOfContents:{chapters:[{title:"Polymorph Components",entries:[{entry:{id:"/Users/Clint/Projects/moduware/polymorph-components/content/lessons/morph_button.md absPath of file",childMarkdownRemark:{fields:{slug:"/morph-button"},frontmatter:{title:"morph-button"}}}},{entry:{id:"/Users/Clint/Projects/moduware/polymorph-components/content/lessons/morph_pages.md absPath of file",childMarkdownRemark:{fields:{slug:"/morph-pages"},frontmatter:{title:"morph-pages"}}}},{entry:{id:"/Users/Clint/Projects/moduware/polymorph-components/content/lessons/morph_overlay.md absPath of file",childMarkdownRemark:{fields:{slug:"/morph-overlay"},frontmatter:{title:"morph-overlay"}}}},{entry:{id:"/Users/Clint/Projects/moduware/polymorph-components/content/lessons/morph_view.md absPath of file",childMarkdownRemark:{fields:{slug:"/morph-view"},frontmatter:{title:"morph-view"}}}},{entry:{id:"/Users/Clint/Projects/moduware/polymorph-components/content/lessons/morph_swipeout.md absPath of file",childMarkdownRemark:{fields:{slug:"/morph-swipeout"},frontmatter:{title:"morph-swipeout"}}}},{entry:{id:"/Users/Clint/Projects/moduware/polymorph-components/content/lessons/morph_ripple.md absPath of file",childMarkdownRemark:{fields:{slug:"/morph-ripple"},frontmatter:{title:"morph-ripple"}}}},{entry:{id:"/Users/Clint/Projects/moduware/polymorph-components/content/lessons/morph_tabbar.md absPath of file",childMarkdownRemark:{fields:{slug:"/morph-tabbar"},frontmatter:{title:"morph-tabbar"}}}},{entry:{id:"/Users/Clint/Projects/moduware/polymorph-components/content/lessons/morph_tabbar_item.md absPath of file",childMarkdownRemark:{fields:{slug:"/morph-tabbar-item"},frontmatter:{title:"morph-tabbar-item"}}}},{entry:{id:"/Users/Clint/Projects/moduware/polymorph-components/content/lessons/morph_list_view.md absPath of file",childMarkdownRemark:{fields:{slug:"/morph-list-view"},frontmatter:{title:"morph-list-view"}}}},{entry:{id:"/Users/Clint/Projects/moduware/polymorph-components/content/lessons/morph_list_view_item.md absPath of file",childMarkdownRemark:{fields:{slug:"/morph-list-view-item"},frontmatter:{title:"morph-list-view-item"}}}},{entry:{id:"/Users/Clint/Projects/moduware/polymorph-components/content/lessons/morph_list_view_title.md absPath of file",childMarkdownRemark:{fields:{slug:"/morph-list-view-title"},frontmatter:{title:"morph-list-view-title"}}}},{entry:{id:"/Users/Clint/Projects/moduware/polymorph-components/content/lessons/morph_list_view_divider.md absPath of file",childMarkdownRemark:{fields:{slug:"/morph-list-view-divider"},frontmatter:{title:"morph-list-view-divider"}}}},{entry:{id:"/Users/Clint/Projects/moduware/polymorph-components/content/lessons/morph_sidebar.md absPath of file",childMarkdownRemark:{fields:{slug:"/morph-sidebar"},frontmatter:{title:"morph-sidebar"}}}}]}]}},pathContext:{slug:"/morph-list-view"}}}});
//# sourceMappingURL=path---morph-list-view-43a87183ec1e9ce52d84.js.map