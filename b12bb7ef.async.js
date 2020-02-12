(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{1228:function(t,s,a){},1324:function(t,s,a){"use strict";var n=a(1228);a.n(n).a},1469:function(t,s,a){"use strict";a.r(s);var n=function(){var t=this,s=this,a=s.$createElement,n=s._self._c||a;return n("div",[[n("demo-box",{attrs:{jsfiddle:{html:'\n  <div>\n    <a-affix :offsetTop="this.top">\n      <a-button type="primary" @click="()=>{this.top += 10}">Affix top</a-button>\n    </a-affix>\n    <br/>\n    <a-affix :offsetBottom="this.bottom">\n      <a-button type="primary" @click="()=>{this.bottom += 10}">Affix bottom</a-button>\n    </a-affix>\n  </div>\n',script:"\n  export default {\n    data() {\n      return {\n        top: 10,\n        bottom: 10,\n      };\n    },\n  };\n",style:null,us:"\n#### basic\nThe simplest usage.\n",cn:"\n#### 基本\n最简单的用法。\n",sourceCode:'<template>\n  <div>\n    <a-affix :offsetTop="this.top">\n      <a-button type="primary" @click="()=>{this.top += 10}">Affix top</a-button>\n    </a-affix>\n    <br />\n    <a-affix :offsetBottom="this.bottom">\n      <a-button type="primary" @click="()=>{this.bottom += 10}">Affix bottom</a-button>\n    </a-affix>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        top: 10,\n        bottom: 10,\n      };\n    },\n  };\n<\/script>\n'}}},[n("template",{slot:"component"},[n("div",[n("a-affix",{attrs:{offsetTop:this.top}},[n("a-button",{attrs:{type:"primary"},on:{click:function(){t.top+=10}}},[s._v("Affix top")])],1),s._v(" "),n("br"),s._v(" "),n("a-affix",{attrs:{offsetBottom:this.bottom}},[n("a-button",{attrs:{type:"primary"},on:{click:function(){t.bottom+=10}}},[s._v("Affix bottom")])],1)],1)]),s._v(" "),n("template",{slot:"description"},[n("h4",{attrs:{id:"基本"}},[s._v("基本 "),n("a",{staticClass:"anchor",attrs:{href:"#基本"}},[s._v("#")])]),s._v(" "),n("p",[s._v("最简单的用法。")])]),s._v(" "),n("template",{slot:"us-description"},[n("h4",{attrs:{id:"basic"}},[s._v("basic "),n("a",{staticClass:"anchor",attrs:{href:"#basic"}},[s._v("#")])]),s._v(" "),n("p",[s._v("The simplest usage.")])]),s._v(" "),n("template",{slot:"code"},[n("pre",[n("code",{staticClass:"language-html"},[n("span",{staticClass:"hljs-tag"},[s._v("<"),n("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n  "),n("span",{staticClass:"hljs-tag"},[s._v("<"),n("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n    "),n("span",{staticClass:"hljs-tag"},[s._v("<"),n("span",{staticClass:"hljs-name"},[s._v("a-affix")]),s._v(" "),n("span",{staticClass:"hljs-attr"},[s._v(":offsetTop")]),s._v("="),n("span",{staticClass:"hljs-string"},[s._v('"this.top"')]),s._v(">")]),s._v("\n      "),n("span",{staticClass:"hljs-tag"},[s._v("<"),n("span",{staticClass:"hljs-name"},[s._v("a-button")]),s._v(" "),n("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),n("span",{staticClass:"hljs-string"},[s._v('"primary"')]),s._v(" "),n("span",{staticClass:"hljs-attr"},[s._v("@click")]),s._v("="),n("span",{staticClass:"hljs-string"},[s._v('"()=>{this.top += 10}"')]),s._v(">")]),s._v("Affix top"),n("span",{staticClass:"hljs-tag"},[s._v("</"),n("span",{staticClass:"hljs-name"},[s._v("a-button")]),s._v(">")]),s._v("\n    "),n("span",{staticClass:"hljs-tag"},[s._v("</"),n("span",{staticClass:"hljs-name"},[s._v("a-affix")]),s._v(">")]),s._v("\n    "),n("span",{staticClass:"hljs-tag"},[s._v("<"),n("span",{staticClass:"hljs-name"},[s._v("br")]),s._v(" />")]),s._v("\n    "),n("span",{staticClass:"hljs-tag"},[s._v("<"),n("span",{staticClass:"hljs-name"},[s._v("a-affix")]),s._v(" "),n("span",{staticClass:"hljs-attr"},[s._v(":offsetBottom")]),s._v("="),n("span",{staticClass:"hljs-string"},[s._v('"this.bottom"')]),s._v(">")]),s._v("\n      "),n("span",{staticClass:"hljs-tag"},[s._v("<"),n("span",{staticClass:"hljs-name"},[s._v("a-button")]),s._v(" "),n("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),n("span",{staticClass:"hljs-string"},[s._v('"primary"')]),s._v(" "),n("span",{staticClass:"hljs-attr"},[s._v("@click")]),s._v("="),n("span",{staticClass:"hljs-string"},[s._v('"()=>{this.bottom += 10}"')]),s._v(">")]),s._v("Affix bottom"),n("span",{staticClass:"hljs-tag"},[s._v("</"),n("span",{staticClass:"hljs-name"},[s._v("a-button")]),s._v(">")]),s._v("\n    "),n("span",{staticClass:"hljs-tag"},[s._v("</"),n("span",{staticClass:"hljs-name"},[s._v("a-affix")]),s._v(">")]),s._v("\n  "),n("span",{staticClass:"hljs-tag"},[s._v("</"),n("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n"),n("span",{staticClass:"hljs-tag"},[s._v("</"),n("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n\n"),n("span",{staticClass:"hljs-tag"},[s._v("<"),n("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),n("span",{staticClass:"javascript"},[s._v("\n  "),n("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),n("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n    data() {\n      "),n("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" {\n        "),n("span",{staticClass:"hljs-attr"},[s._v("top")]),s._v(": "),n("span",{staticClass:"hljs-number"},[s._v("10")]),s._v(",\n        "),n("span",{staticClass:"hljs-attr"},[s._v("bottom")]),s._v(": "),n("span",{staticClass:"hljs-number"},[s._v("10")]),s._v(",\n      };\n    },\n  };\n")]),n("span",{staticClass:"hljs-tag"},[s._v("</"),n("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n")])])])],2)]],2)};n._withStripped=!0;var e={data:function(){return{top:10,bottom:10}}},l=a(31),i=Object(l.a)(e,n,[],!1,null,null,null);i.options.__file="components/affix/demo/basic.md";var v=i.exports,o=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[[a("demo-box",{attrs:{jsfiddle:{html:'\n  <a-affix :offsetTop="120" @change="change">\n    <a-button>120px to affix top</a-button>\n  </a-affix>\n',script:"\n  export default {\n    methods: {\n      change(affixed) {\n        console.log(affixed);\n      },\n    },\n  };\n",style:null,us:"\n#### Callback\nCallback with affixed state.\n",cn:"\n#### 固定状态改变的回调\n可以获得是否固定的状态。\n",sourceCode:'<template>\n  <a-affix :offsetTop="120" @change="change">\n    <a-button>120px to affix top</a-button>\n  </a-affix>\n</template>\n<script>\n  export default {\n    methods: {\n      change(affixed) {\n        console.log(affixed);\n      },\n    },\n  };\n<\/script>\n'}}},[a("template",{slot:"component"},[a("a-affix",{attrs:{offsetTop:120},on:{change:t.change}},[a("a-button",[t._v("120px to affix top")])],1)],1),t._v(" "),a("template",{slot:"description"},[a("h4",{attrs:{id:"固定状态改变的回调"}},[t._v("固定状态改变的回调 "),a("a",{staticClass:"anchor",attrs:{href:"#固定状态改变的回调"}},[t._v("#")])]),t._v(" "),a("p",[t._v("可以获得是否固定的状态。")])]),t._v(" "),a("template",{slot:"us-description"},[a("h4",{attrs:{id:"Callback"}},[t._v("Callback "),a("a",{staticClass:"anchor",attrs:{href:"#Callback"}},[t._v("#")])]),t._v(" "),a("p",[t._v("Callback with affixed state.")])]),t._v(" "),a("template",{slot:"code"},[a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("a-affix")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":offsetTop")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"120"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("@change")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"change"')]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("a-button")]),t._v(">")]),t._v("120px to affix top"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("a-button")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("a-affix")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),a("span",{staticClass:"javascript"},[t._v("\n  "),a("span",{staticClass:"hljs-keyword"},[t._v("export")]),t._v(" "),a("span",{staticClass:"hljs-keyword"},[t._v("default")]),t._v(" {\n    "),a("span",{staticClass:"hljs-attr"},[t._v("methods")]),t._v(": {\n      change(affixed) {\n        "),a("span",{staticClass:"hljs-built_in"},[t._v("console")]),t._v(".log(affixed);\n      },\n    },\n  };\n")]),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),t._v("\n")])])])],2)]],2)};o._withStripped=!0;var _={methods:{change:function(t){console.log(t)}}},r=Object(l.a)(_,o,[],!1,null,null,null);r.options.__file="components/affix/demo/on-change.md";var c=r.exports,p=function(){var t=this,s=this,a=s.$createElement,n=s._self._c||a;return n("div",[[n("demo-box",{attrs:{jsfiddle:{html:'\n  <div id="components-affix-demo-target" class="scrollable-container" ref="container">\n    <div class="background">\n      <a-affix :target="() => this.$refs.container">\n        <a-button type="primary">\n          Fixed at the top of container\n        </a-button>\n      </a-affix>\n    </div>\n  </div>\n',script:null,style:"\n  #components-affix-demo-target.scrollable-container {\n    height: 100px;\n    overflow-y: scroll;\n  }\n  #components-affix-demo-target .background {\n    padding-top: 60px;\n    height: 300px;\n    background-image: url('https://zos.alipayobjects.com/rmsportal/RmjwQiJorKyobvI.jpg');\n  }\n",us:"\n#### Container to scroll.\nSet a `target` for 'Affix', which is listen to scroll event of target element (default is `window`).\n",cn:"\n#### 滚动容器\n用 `target` 设置 `Affix` 需要监听其滚动事件的元素，默认为 `window`。\n",sourceCode:'<template>\n  <div id="components-affix-demo-target" class="scrollable-container" ref="container">\n    <div class="background">\n      <a-affix :target="() => this.$refs.container">\n        <a-button type="primary">\n          Fixed at the top of container\n        </a-button>\n      </a-affix>\n    </div>\n  </div>\n</template>\n<style>\n  #components-affix-demo-target.scrollable-container {\n    height: 100px;\n    overflow-y: scroll;\n  }\n  #components-affix-demo-target .background {\n    padding-top: 60px;\n    height: 300px;\n    background-image: url(\'https://zos.alipayobjects.com/rmsportal/RmjwQiJorKyobvI.jpg\');\n  }\n</style>\n'}}},[n("template",{slot:"component"},[n("div",{ref:"container",staticClass:"scrollable-container",attrs:{id:"components-affix-demo-target"}},[n("div",{staticClass:"background"},[n("a-affix",{attrs:{target:function(){return t.$refs.container}}},[n("a-button",{attrs:{type:"primary"}},[s._v("\n          Fixed at the top of container\n        ")])],1)],1)])]),s._v(" "),n("template",{slot:"description"},[n("h4",{attrs:{id:"滚动容器"}},[s._v("滚动容器 "),n("a",{staticClass:"anchor",attrs:{href:"#滚动容器"}},[s._v("#")])]),s._v(" "),n("p",[s._v("用 "),n("code",[s._v("target")]),s._v(" 设置 "),n("code",[s._v("Affix")]),s._v(" 需要监听其滚动事件的元素，默认为 "),n("code",[s._v("window")]),s._v("。")])]),s._v(" "),n("template",{slot:"us-description"},[n("h4",{attrs:{id:"Container-to-scroll."}},[s._v("Container to scroll. "),n("a",{staticClass:"anchor",attrs:{href:"#Container-to-scroll."}},[s._v("#")])]),s._v(" "),n("p",[s._v("Set a "),n("code",[s._v("target")]),s._v(" for 'Affix', which is listen to scroll event of target element (default is "),n("code",[s._v("window")]),s._v(").")])]),s._v(" "),n("template",{slot:"code"},[n("pre",[n("code",{staticClass:"language-html"},[n("span",{staticClass:"hljs-tag"},[s._v("<"),n("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n  "),n("span",{staticClass:"hljs-tag"},[s._v("<"),n("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),n("span",{staticClass:"hljs-attr"},[s._v("id")]),s._v("="),n("span",{staticClass:"hljs-string"},[s._v('"components-affix-demo-target"')]),s._v(" "),n("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),n("span",{staticClass:"hljs-string"},[s._v('"scrollable-container"')]),s._v(" "),n("span",{staticClass:"hljs-attr"},[s._v("ref")]),s._v("="),n("span",{staticClass:"hljs-string"},[s._v('"container"')]),s._v(">")]),s._v("\n    "),n("span",{staticClass:"hljs-tag"},[s._v("<"),n("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),n("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),n("span",{staticClass:"hljs-string"},[s._v('"background"')]),s._v(">")]),s._v("\n      "),n("span",{staticClass:"hljs-tag"},[s._v("<"),n("span",{staticClass:"hljs-name"},[s._v("a-affix")]),s._v(" "),n("span",{staticClass:"hljs-attr"},[s._v(":target")]),s._v("="),n("span",{staticClass:"hljs-string"},[s._v('"() => this.$refs.container"')]),s._v(">")]),s._v("\n        "),n("span",{staticClass:"hljs-tag"},[s._v("<"),n("span",{staticClass:"hljs-name"},[s._v("a-button")]),s._v(" "),n("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),n("span",{staticClass:"hljs-string"},[s._v('"primary"')]),s._v(">")]),s._v("\n          Fixed at the top of container\n        "),n("span",{staticClass:"hljs-tag"},[s._v("</"),n("span",{staticClass:"hljs-name"},[s._v("a-button")]),s._v(">")]),s._v("\n      "),n("span",{staticClass:"hljs-tag"},[s._v("</"),n("span",{staticClass:"hljs-name"},[s._v("a-affix")]),s._v(">")]),s._v("\n    "),n("span",{staticClass:"hljs-tag"},[s._v("</"),n("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n  "),n("span",{staticClass:"hljs-tag"},[s._v("</"),n("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n"),n("span",{staticClass:"hljs-tag"},[s._v("</"),n("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n"),n("span",{staticClass:"hljs-tag"},[s._v("<"),n("span",{staticClass:"hljs-name"},[s._v("style")]),s._v(">")]),n("span",{staticClass:"css"},[s._v("\n  "),n("span",{staticClass:"hljs-selector-id"},[s._v("#components-affix-demo-target")]),n("span",{staticClass:"hljs-selector-class"},[s._v(".scrollable-container")]),s._v(" {\n    "),n("span",{staticClass:"hljs-attribute"},[s._v("height")]),s._v(": "),n("span",{staticClass:"hljs-number"},[s._v("100px")]),s._v(";\n    "),n("span",{staticClass:"hljs-attribute"},[s._v("overflow-y")]),s._v(": scroll;\n  }\n  "),n("span",{staticClass:"hljs-selector-id"},[s._v("#components-affix-demo-target")]),s._v(" "),n("span",{staticClass:"hljs-selector-class"},[s._v(".background")]),s._v(" {\n    "),n("span",{staticClass:"hljs-attribute"},[s._v("padding-top")]),s._v(": "),n("span",{staticClass:"hljs-number"},[s._v("60px")]),s._v(";\n    "),n("span",{staticClass:"hljs-attribute"},[s._v("height")]),s._v(": "),n("span",{staticClass:"hljs-number"},[s._v("300px")]),s._v(";\n    "),n("span",{staticClass:"hljs-attribute"},[s._v("background-image")]),s._v(": "),n("span",{staticClass:"hljs-built_in"},[s._v("url")]),s._v("("),n("span",{staticClass:"hljs-string"},[s._v("'https://zos.alipayobjects.com/rmsportal/RmjwQiJorKyobvI.jpg'")]),s._v(");\n  }\n")]),n("span",{staticClass:"hljs-tag"},[s._v("</"),n("span",{staticClass:"hljs-name"},[s._v("style")]),s._v(">")]),s._v("\n")])])])],2)]],2)};p._withStripped=!0;a(1324);var h=Object(l.a)({},p,[],!1,null,null,null);h.options.__file="components/affix/demo/target.md";var f=h.exports,d=function(){var t=this.$createElement;this._self._c;return this._m(0)};d._withStripped=!0;var m=Object(l.a)({},d,[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("h2",{attrs:{id:"API"}},[t._v("API "),a("a",{staticClass:"anchor",attrs:{href:"#API"}},[t._v("#")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("成员")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("offsetBottom")]),t._v(" "),a("td",[t._v("距离窗口底部达到指定偏移量后触发")]),t._v(" "),a("td",[t._v("number")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("offsetTop")]),t._v(" "),a("td",[t._v("距离窗口顶部达到指定偏移量后触发")]),t._v(" "),a("td",[t._v("number")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("target")]),t._v(" "),a("td",[t._v("设置 "),a("code",{pre:!0},[t._v("Affix")]),t._v(" 需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数")]),t._v(" "),a("td",[t._v("() => HTMLElement")]),t._v(" "),a("td",[t._v("() => window")])])])]),t._v(" "),a("h3",{attrs:{id:"事件"}},[t._v("事件 "),a("a",{staticClass:"anchor",attrs:{href:"#事件"}},[t._v("#")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("事件名称")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("回调参数")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("change")]),t._v(" "),a("td",[t._v("固定状态改变时触发的回调函数")]),t._v(" "),a("td",[t._v("Function(affixed)")])])])]),t._v(" "),a("p",[a("strong",[t._v("注意：")]),a("code",{pre:!0},[t._v("Affix")]),t._v(" 内的元素不要使用绝对定位，如需要绝对定位的效果，可以直接设置 "),a("code",{pre:!0},[t._v("Affix")]),t._v(" 为绝对定位：")]),t._v(" "),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("a-affix")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":style")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("\"{ position: 'absolute', top: y, left: x}\"")]),t._v(">")]),t._v("\n  ...\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("a-affix")]),t._v(">")]),t._v("\n")])])])}],!1,null,null,null);m.options.__file="components/affix/index.zh-CN.md";var C=m.exports,j=function(){var t=this.$createElement;this._self._c;return this._m(0)};j._withStripped=!0;var u=Object(l.a)({},j,[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("h2",{attrs:{id:"API"}},[t._v("API "),a("a",{staticClass:"anchor",attrs:{href:"#API"}},[t._v("#")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Property")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Default")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("offsetBottom")]),t._v(" "),a("td",[t._v("Pixels to offset from bottom when calculating position of scroll")]),t._v(" "),a("td",[t._v("number")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("offsetTop")]),t._v(" "),a("td",[t._v("Pixels to offset from top when calculating position of scroll")]),t._v(" "),a("td",[t._v("number")]),t._v(" "),a("td",[t._v("0")])]),t._v(" "),a("tr",[a("td",[t._v("target")]),t._v(" "),a("td",[t._v("specifies the scrollable area dom node")]),t._v(" "),a("td",[t._v("() => HTMLElement")]),t._v(" "),a("td",[t._v("() => window")])])])]),t._v(" "),a("h3",{attrs:{id:"events"}},[t._v("events "),a("a",{staticClass:"anchor",attrs:{href:"#events"}},[t._v("#")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Events Name")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Arguments")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("onChange")]),t._v(" "),a("td",[t._v("Callback for when affix state is changed")]),t._v(" "),a("td",[t._v("Function(affixed)")])])])]),t._v(" "),a("p",[a("strong",[t._v("Note:")]),t._v(" Children of "),a("code",{pre:!0},[t._v("Affix")]),t._v(" can not be "),a("code",{pre:!0},[t._v("position: absolute")]),t._v(", but you can set "),a("code",{pre:!0},[t._v("Affix")]),t._v(" as "),a("code",{pre:!0},[t._v("position: absolute")]),t._v(":")]),t._v(" "),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("a-affix")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":style")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("\"{ position: 'absolute', top: y, left: x}\"")]),t._v(">")]),t._v("\n  ...\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("a-affix")]),t._v(">")]),t._v("\n")])])])}],!1,null,null,null);u.options.__file="components/affix/index.en-US.md";var g=u.exports,b="# Affix 固钉\n          将页面元素钉在可视范围。\n## 何时使用\n当内容区域比较长，需要滚动页面时，这部分内容对应的操作或者导航需要在滚动范围内始终展现。常用于侧边菜单和按钮组合。\n页面可视范围过小时，慎用此功能以免遮挡页面内容。\n          ## 代码演示",x="# Affix\n          Make an element stick to viewport.\n## When To Use\nWhen user browses a long web page, some content need to stick to the viewport. This is common for menus and actions.\nPlease note that Affix should not cover other content on the page, especially when the size of the viewport is small.\n## Examples ",y={category:"Components",subtitle:"固钉",zhType:"导航",type:"Navigation",title:"Affix",render:function(){var t=arguments[0];return t("div",[t("md",{attrs:{cn:b,us:x}}),t(v),t(c),t(f),t("api",[t(C,{slot:"cn"}),t(g)])])}},w=Object(l.a)(y,void 0,void 0,!1,null,null,null);w.options.__file="components/affix/demo/index.vue";s.default=w.exports}}]);