(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{195:function(e,n,t){"use strict";t.r(n);var r=t(2),a=t.n(r),o=t(0),c=t.n(o),i=t(81),l=t(18),u=t(296),s=(t(30),t(3)),m=t.n(s),p=function(e){function n(){return e.apply(this,arguments)||this}return a()(n,e),n.prototype.render=function(){var e=this.props,n=e.name,t=e.controls,r=e.sourceLink;return c.a.createElement("div",{className:"options-panel top-right",tabIndex:"0"},c.a.createElement("h3",null,n),c.a.createElement("div",{className:"control-panel",dangerouslySetInnerHTML:{__html:t}}),r&&c.a.createElement("div",{className:"source-link"},c.a.createElement("a",{href:r,target:"_new"},"View Code ↗")))},n}(o.PureComponent),f={example:m.a.object.isRequired,canvas:m.a.string},d=function(e){function n(){return e.apply(this,arguments)||this}a()(n,e);var t=n.prototype;return t.componentDidMount=function(){var e=this.props,n=e.onStart,t=e.example,r=e.canvas;n&&n({example:t,canvas:r}),t&&t.start&&t.start({example:t,canvas:r})},t.componentWillUnmount=function(){var e=this.props,n=e.onStop,t=e.example,r=e.canvas;n&&n({example:t,canvas:r}),t&&t.stop&&t.stop({example:t,canvas:r})},t.render=function(){var e=this.props,n=e.width,t=e.height,r=e.name,a=e.example,o=e.noPanel,i=e.sourceLink,l=a.getInfo&&a.getInfo();if(a.isSupported&&!a.isSupported()){var u=a.getAltText?a.getAltText():"THIS EXAMPLE IS NOT SUPPORTED";return c.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}},c.a.createElement("h2",null," ",u," "))}var s=a;return c.a.createElement("div",{className:"fg",style:{width:n,height:t,padding:0,border:0}},c.a.createElement(s,{style:{width:"100%",height:"100%",padding:0,border:0}}),o?null:c.a.createElement(p,{name:r,controls:l,sourceLink:i}))},n}(o.Component);d.propTypes=f,d.defaultProps={};var E=function(e){function n(){return e.apply(this,arguments)||this}a()(n,e);var t=n.prototype;return t.renderPage=function(e){var n=e.config,t=Object(u.getHeroExample)();return c.a.createElement("section",{className:"banner"},c.a.createElement("div",{className:"f hero"},t&&c.a.createElement(d,{example:t,sourceLink:t.path,noPanel:!0})),c.a.createElement("div",{className:"container"},c.a.createElement("h1",null,n.PROJECT_NAME),c.a.createElement("p",null,n.PROJECT_DESC),c.a.createElement(l.a,{to:"/docs/",className:"btn"},"GET STARTED")))},t.render=function(){var e=this;return c.a.createElement(i.b,null,function(n){var t=n.config;return e.renderPage({config:t})})},n}(o.Component),v=function(e){function n(){return e.apply(this,arguments)||this}a()(n,e);var t=n.prototype;return t.renderPage=function(e){var n=e.config,t=this.props.contributors,r=void 0===t?[]:t,a=n.HOME_HEADING,o=n.HOME_RIGHT,i=void 0===o?"...":o,l=n.HOME_BULLETS,u=void 0===l?[]:l,s=n.PROJECT_TYPE;return c.a.createElement("div",{className:"fg"},c.a.createElement(E,null),c.a.createElement("div",{className:"fg p4"},c.a.createElement("div",{className:"container f fw"},c.a.createElement("div",{className:"f1 p",style:{minWidth:"10rem"}},c.a.createElement("h2",null,a),c.a.createElement("hr",{className:"short"}),u.map(function(e,n){return c.a.createElement("div",{key:n},c.a.createElement("h3",{className:"fac"},c.a.createElement("img",{src:e.img,className:"m-right",alt:""}),e.text),e.desc&&c.a.createElement("p",null,e.desc))})),c.a.createElement("div",{className:"f1 p",style:{minWidth:"10rem"}},i)),"github"===s&&c.a.createElement("div",{className:"container"},c.a.createElement("hr",{className:"short"}),c.a.createElement("h3",null,"Contributors"),c.a.createElement("span",null,"Join us!"),c.a.createElement("div",{className:"Contributors m-top"},r.map(function(e){return e?c.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.html_url,className:"Contributor",key:e.id},c.a.createElement("img",{src:e.avatar_url,width:"100%",alt:""}),c.a.createElement("span",null,e.login)):c.a.createElement("div",{className:"Contributor",key:e.id})})))))},t.render=function(){var e=this;return c.a.createElement(i.b,null,function(n){var t=n.config;return e.renderPage({config:t})})},n}(o.Component);t.d(n,"default",function(){return g});var g=function(e){function n(){return e.apply(this,arguments)||this}return a()(n,e),n.prototype.render=function(){return c.a.createElement(i.b,null,function(e){var n=e.config;return c.a.createElement("main",null,c.a.createElement(v,{config:n}))})},n}(c.a.Component)},214:function(e,n,t){var r=t(46),a=t(39);t(241)("keys",function(){return function(e){return a(r(e))}})},228:function(e,n,t){"use strict";t.r(n);var r=t(242);t.d(n,"VERSION",function(){return r.a});var a=t(210);t.d(n,"self",function(){return a.e}),t.d(n,"window",function(){return a.f}),t.d(n,"global",function(){return a.c}),t.d(n,"document",function(){return a.b}),t.d(n,"process",function(){return a.d}),t.d(n,"console",function(){return a.a});var o=t(243);t.d(n,"isBrowser",function(){return o.a}),t.d(n,"isBrowserMainThread",function(){return o.b});var c=t(257);t.d(n,"getBrowser",function(){return c.a}),t.d(n,"isMobile",function(){return c.b});var i=t(247);t.d(n,"isElectron",function(){return i.a});var l=t(258);t.d(n,"assert",function(){return l.a});var u=t(289);t.d(n,"Stats",function(){return u.a});var s=t(259);t.d(n,"Log",function(){return s.a});var m=t(244);t.d(n,"COLOR",function(){return m.a}),t.d(n,"addColor",function(){return m.b});var p=t(249);t.d(n,"leftPad",function(){return p.c}),t.d(n,"rightPad",function(){return p.d});var f=t(261);t.d(n,"autobind",function(){return f.a});var d=t(260);t.d(n,"LocalStorage",function(){return d.a});var E=t(248);t.d(n,"getHiResTimestamp",function(){return E.a}),n.default=new s.a({id:"probe.gl"})},241:function(e,n,t){var r=t(20),a=t(34),o=t(26);e.exports=function(e,n){var t=(a.Object||{})[e]||Object[e],c={};c[e]=n(t),r(r.S+r.F*o(function(){t(1)}),"Object",c)}},267:function(e,n){},296:function(e,n,t){t(19),t(14),t(11),t(214),t(19),t(14),t(11),t(214);var r=t(297).log;function a(){return r.warn("getExamples() not implemented. Use ocular-config.js:EXAMPLES[].componentUrl"),[]}e.exports.getReactComponent=a,e.exports.getHeroExample=function(){var e=a(),n=Object.keys(e).length&&e[0];n&&"none"!==n.title||(n=null);var t=n;return t||console.warn("ocular: No hero example found",e),t},e.exports.registerReactComponent=function(){r.removed("registerReactComponent","Use ocular-config.js:EXAMPLES[].componentUrl")},e.exports.registerDefaultReactComponent=function(){r.removed("registerDefaultReactComponent","Use ocular-config.js:EXAMPLES[].componentUrl")},e.exports.getReactComponent=function(){r.removed("registerReactComponent","Use ocular-config.js:EXAMPLES[].componentUrl")}},297:function(e,n,t){var r=t(228),a=r.Log,o=r.COLOR,c=new a({id:"ocular"}).enable();c.log({color:o.CYAN},"Loading ocular website generator (gatsby version)")(),e.exports.log=c,e.exports.COLOR=o}}]);
//# sourceMappingURL=component---node-modules-ocular-gatsby-src-templates-index-jsx-8c1f6b201d6b5f382802.js.map