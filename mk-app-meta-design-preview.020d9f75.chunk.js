webpackJsonp([35],{1803:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o,u,i=n(2),r=a(i),s=n(55),f=a(s),c=n(5),d=a(c),l=n(10),p=a(l),m=n(8),v=a(m),h=n(9),_=a(h),M=n(0),g=(a(M),n(253)),w=n(651),A=a(w),J=(o=(0,g.wrapper)(A.default))(u=function(t){function e(){return(0,d.default)(this,e),(0,v.default)(this,(e.__proto__||(0,f.default)(e)).apply(this,arguments))}return(0,_.default)(e,t),(0,p.default)(e,[{key:"render",value:function(){return this.props.monkeyKing((0,r.default)({},this.props,{path:"root"}))}}]),e}(M.Component))||u;e.default=J,t.exports=e.default},1804:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}function o(t){var e=new c.action(t),n=new h((0,i.default)({},t,{metaAction:e})),a=(0,i.default)({},e,n);return e.config({metaHandlers:a}),a}Object.defineProperty(e,"__esModule",{value:!0});var u=n(2),i=a(u),r=n(5),s=a(r);e.default=o;var f=n(0),c=(a(f),n(253)),d=n(588),l=a(d),p=n(72),m=n(11),v=a(m),h=function t(e){var n=this;(0,s.default)(this,t),this.onInit=function(t){var e=t.component,a=t.injections;n.component=e,n.injections=a,a.reduce("init"),n.metaAction.setMetaForce("mk-app-meta-design-preview",v.default.string.toJson(n.component.props.uiMeta)),n.metaAction.sf("data",(0,p.fromJS)(v.default.string.toJson(n.component.props.uiData)))},this.componentWillReceiveProps=function(t){n.component.props.uiMeta==t.uiMeta&&n.component.props.uiData==t.uiData||(n.metaAction.setMetaForce("mk-app-meta-design-preview",v.default.string.toJson(t.uiMeta)),n.metaAction.sf("data",(0,p.fromJS)(v.default.string.toJson(t.uiData))))},this.metaAction=e.metaAction,this.config=l.default.current};t.exports=e.default},1805:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}function o(t){var e=new f.reducer(t),n=new p((0,i.default)({},t,{metaReducer:e}));return(0,i.default)({},e,n)}Object.defineProperty(e,"__esModule",{value:!0});var u=n(2),i=a(u),r=n(5),s=a(r);e.default=o;var f=(n(72),n(253)),c=n(588),d=a(c),l=n(652),p=function t(e){var n=this;(0,s.default)(this,t),this.init=function(t,e){var a=(0,l.getInitState)();return n.metaReducer.init(t,a)},this.metaReducer=e.metaReducer,this.config=d.default.current};t.exports=e.default}});