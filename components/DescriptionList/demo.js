webpackJsonp([1],{1617:function(n,a,s){n.exports={basic:s(1651),vertical:s(1656)}},1643:function(n,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=e(s(1652)),p=e(s(1654));function e(n){return n&&n.__esModule?n:{default:n}}t.default.Description=p.default,a.default=t.default},1651:function(n,a,s){n.exports={content:{"zh-CN":[["p","\u6c34\u5e73\u5c55\u793a\u3002"]],"en-US":[["p","The most basic usage."]]},meta:{order:0,title:{"zh-CN":"\u6c34\u5e73\u578b","en-US":"Basic"},filename:"components/DescriptionList/demo/basic.md",id:"components-DescriptionList-demo-basic"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> DescriptionList <span class="token keyword">from</span> <span class="token string">\'mhc-antd-admin/DescriptionList\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> Description <span class="token punctuation">}</span> <span class="token operator">=</span> DescriptionList<span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DescriptionList</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span> <span class="token attr-name">layout</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>horizontal<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Description</span> <span class="token attr-name">term</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u54c1\u724c<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> \u5965\u8fea <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Description</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Description</span> <span class="token attr-name">term</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u8f66\u578b<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> \u56fd\u4ea7\u5965\u8fea\u5965\u8feaA3 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Description</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Description</span> <span class="token attr-name">term</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u8f66\u67b6\u53f7<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> VR8GDF7WAL7 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Description</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Description</span> <span class="token attr-name">term</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u5408\u540c\u4ef7<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> <span class="token number">10</span>\u4e07 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Description</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Description</span> <span class="token attr-name">term</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u751f\u4ea7\u65e5\u671f<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> <span class="token number">2018</span><span class="token operator">-</span><span class="token number">07</span><span class="token operator">-</span><span class="token number">12</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Description</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Description</span> <span class="token attr-name">term</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u516c\u91cc\u6570<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> <span class="token number">100</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Description</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>DescriptionList</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=s(0),a=(s(10),function(n){return n&&n.__esModule?n:{default:n}}(s(1643)));var t=a.default.Description;return n.createElement(a.default,{size:"large",layout:"horizontal"},n.createElement(t,{term:"\u54c1\u724c"}," \u5965\u8fea "),n.createElement(t,{term:"\u8f66\u578b"}," \u56fd\u4ea7\u5965\u8fea\u5965\u8feaA3 "),n.createElement(t,{term:"\u8f66\u67b6\u53f7"}," VR8GDF7WAL7 "),n.createElement(t,{term:"\u5408\u540c\u4ef7"}," 10\u4e07 "),n.createElement(t,{term:"\u751f\u4ea7\u65e5\u671f"}," 2018-07-12 "),n.createElement(t,{term:"\u516c\u91cc\u6570"}," 100 "))}}},1652:function(n,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=Object.assign||function(n){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(n[t]=s[t])}return n},p=c(s(0)),e=c(s(6)),o=s(34);function c(n){return n&&n.__esModule?n:{default:n}}s(1653);a.default=function(n){var a=n.className,s=n.col,c=void 0===s?3:s,l=n.layout,u=void 0===l?"vertical":l,i=n.gutter,r=void 0===i?32:i,k=n.children,m=(n.size,function(n,a){var s={};for(var t in n)a.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(n,t)&&(s[t]=n[t]);return s}(n,["className","col","layout","gutter","children","size"])),d=c>6?6:c,g=(0,e.default)("descriptionList",function(n,a,s){return a in n?Object.defineProperty(n,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[a]=s,n}({horizontal:"horizontal"===u,vertical:"horizontal"!==u},a,a));return p.default.createElement("div",t({className:g},m),p.default.createElement(o.Row,{gutter:r},p.default.Children.map(k,function(n){return n?p.default.cloneElement(n,{column:d}):n})))}},1653:function(n,a){},1654:function(n,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=Object.assign||function(n){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(n[t]=s[t])}return n},p=l(s(0)),e=l(s(5)),o=s(34),c=l(s(1655));function l(n){return n&&n.__esModule?n:{default:n}}var u=function(n){var a=n.term,s=n.column,e=(n.className,n.children),l=function(n,a){var s={};for(var t in n)a.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(n,t)&&(s[t]=n[t]);return s}(n,["term","column","className","children"]);return p.default.createElement(o.Col,t({className:"description"},c.default[s],l),a&&p.default.createElement("div",{className:"term"},a),null!==e&&void 0!==e&&p.default.createElement("div",{className:"detail"},e||"\u6682\u65e0"))};u.defaultProps={term:""},u.propTypes={term:e.default.node},a.default=u},1655:function(n,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={1:{xs:24},2:{xs:24,sm:12},3:{xs:24,sm:12,md:8},4:{xs:24,sm:12,md:6},6:{xs:24,sm:12,md:4}}},1656:function(n,a,s){n.exports={content:{"zh-CN":[["p","\u5782\u76f4\u5e03\u5c40\u3002"]],"en-US":[["p","Vertical layout."]]},meta:{order:1,title:{"zh-CN":"\u5782\u76f4\u578b","en-US":"Vertical"},filename:"components/DescriptionList/demo/vertical.md",id:"components-DescriptionList-demo-vertical"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> DescriptionList <span class="token keyword">from</span> <span class="token string">\'mhc-antd-admin/DescriptionList\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> Description <span class="token punctuation">}</span> <span class="token operator">=</span> DescriptionList<span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DescriptionList</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span> <span class="token attr-name">layout</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>vertical<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Description</span> <span class="token attr-name">term</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u54c1\u724c<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> \u5965\u8fea <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Description</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Description</span> <span class="token attr-name">term</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u8f66\u578b<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> \u56fd\u4ea7\u5965\u8fea\u5965\u8feaA3 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Description</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Description</span> <span class="token attr-name">term</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u8f66\u67b6\u53f7<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> VR8GDF7WAL7 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Description</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Description</span> <span class="token attr-name">term</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u5408\u540c\u4ef7<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> <span class="token number">10</span>\u4e07 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Description</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Description</span> <span class="token attr-name">term</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u751f\u4ea7\u65e5\u671f<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> <span class="token number">2018</span><span class="token operator">-</span><span class="token number">07</span><span class="token operator">-</span><span class="token number">12</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Description</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Description</span> <span class="token attr-name">term</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u516c\u91cc\u6570<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> <span class="token number">100</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Description</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>DescriptionList</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=s(0),a=(s(10),function(n){return n&&n.__esModule?n:{default:n}}(s(1643)));var t=a.default.Description;return n.createElement(a.default,{size:"large",layout:"vertical"},n.createElement(t,{term:"\u54c1\u724c"}," \u5965\u8fea "),n.createElement(t,{term:"\u8f66\u578b"}," \u56fd\u4ea7\u5965\u8fea\u5965\u8feaA3 "),n.createElement(t,{term:"\u8f66\u67b6\u53f7"}," VR8GDF7WAL7 "),n.createElement(t,{term:"\u5408\u540c\u4ef7"}," 10\u4e07 "),n.createElement(t,{term:"\u751f\u4ea7\u65e5\u671f"}," 2018-07-12 "),n.createElement(t,{term:"\u516c\u91cc\u6570"}," 100 "))}}}});