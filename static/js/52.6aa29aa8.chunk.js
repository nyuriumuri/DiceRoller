(this.webpackJsonpDiceRoller=this.webpackJsonpDiceRoller||[]).push([[52],{120:function(t,e,n){"use strict";n.r(e),n.d(e,"KEYBOARD_DID_CLOSE",(function(){return r})),n.d(e,"KEYBOARD_DID_OPEN",(function(){return i})),n.d(e,"copyVisualViewport",(function(){return v})),n.d(e,"keyboardDidClose",(function(){return g})),n.d(e,"keyboardDidOpen",(function(){return p})),n.d(e,"keyboardDidResize",(function(){return b})),n.d(e,"resetKeyboardAssist",(function(){return a})),n.d(e,"setKeyboardClose",(function(){return h})),n.d(e,"setKeyboardOpen",(function(){return f})),n.d(e,"startKeyboardAssist",(function(){return s})),n.d(e,"trackViewportChanges",(function(){return D}));var i="ionKeyboardDidShow",r="ionKeyboardDidHide",o={},u={},d=!1,a=function(){o={},u={},d=!1},s=function(t){c(t),t.visualViewport&&(u=v(t.visualViewport),t.visualViewport.onresize=function(){D(t),p()||b(t)?f(t):g(t)&&h(t)})},c=function(t){t.addEventListener("keyboardDidShow",(function(e){return f(t,e)})),t.addEventListener("keyboardDidHide",(function(){return h(t)}))},f=function(t,e){w(t,e),d=!0},h=function(t){l(t),d=!1},p=function(){var t=(o.height-u.height)*u.scale;return!d&&o.width===u.width&&t>150},b=function(t){return d&&!g(t)},g=function(t){return d&&u.height===t.innerHeight},w=function(t,e){var n=e?e.keyboardHeight:t.innerHeight-u.height,r=new CustomEvent(i,{detail:{keyboardHeight:n}});t.dispatchEvent(r)},l=function(t){var e=new CustomEvent(r);t.dispatchEvent(e)},D=function(t){o=Object.assign({},u),u=v(t.visualViewport)},v=function(t){return{width:Math.round(t.width),height:Math.round(t.height),offsetTop:t.offsetTop,offsetLeft:t.offsetLeft,pageTop:t.pageTop,pageLeft:t.pageLeft,scale:t.scale}}}}]);
//# sourceMappingURL=52.6aa29aa8.chunk.js.map