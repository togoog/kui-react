/*! react-kui v1.0.8 by chuchur (c) 2018 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{319:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=i(l(2)),n=i(l(3)),a=i(l(4)),s=i(l(5)),r=i(l(6)),f=i(l(0)),d=i(l(326));function i(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(e){(0,n.default)(this,t);var l=(0,s.default)(this,(t.__proto__||(0,u.default)(t)).call(this,e));return l.state={a:"//引入 styles\n@import '~kui-vue/src/styles/index.less';\n\n// 主色覆盖为 ff0055\n@main :#ff0055;\n\n// 组件的圆角覆盖为5px\n@radius:~'5px';",b:"import Vue from 'vue';\nimport kui from 'kui-vue';\nimport 'assets/styles/custom.less';\n\nVue.use(kui);"},l}return(0,r.default)(t,e),(0,a.default)(t,[{key:"render",value:function(){var e=this.state,t=e.a,u=e.b;return f.default.createElement("div",{className:"theme"},f.default.createElement("h2",null,"定制主题"),f.default.createElement("p",null,"主题可以根据自己的喜好，和项目定制的风格来开发，可以定制颜色和圆角风格。"),f.default.createElement("img",{src:l(376)}),f.default.createElement("br",null),f.default.createElement("h3",null,"覆盖定制"),f.default.createElement("p",null,"如果项目使用webpack构建，可以通过覆盖less变量来定制主题"),f.default.createElement("p",null,"新建一个less 文件 如：'assets/styles/custom.less',写下如下内容："),f.default.createElement(d.default,null,t),f.default.createElement("p",null,"然后在入口文件 main.js 内导入这个 less 文件即可："),f.default.createElement(d.default,null,u))}}]),t}(f.default.Component);t.default=c},376:function(e,t,l){e.exports=l.p+"img/theme.jpg?77e3bb3"}}]);