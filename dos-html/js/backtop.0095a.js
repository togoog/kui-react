/*! kui-react v1.0.0 by chuchur (c) 2018 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{311:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=f(l(6)),n=f(l(5)),u=f(l(4)),d=f(l(3)),r=f(l(2)),c=f(l(1)),i=f(l(318)),o=f(l(352)),s=l(21);function f(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(){return(0,n.default)(this,t),(0,d.default)(this,(t.__proto__||(0,a.default)(t)).apply(this,arguments))}return(0,r.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){return c.default.createElement("div",{className:"backtop"},c.default.createElement("h2",null,"BackTop"),c.default.createElement("p",null,"当页面内容冗长，需要快捷返回顶部时使用，一般放置在页面右下角位置。"),c.default.createElement("h3",null,"代码示例"),c.default.createElement(s.Row,{gutter:"8"},c.default.createElement(s.Col,{span:"12"},c.default.createElement(i.default,{title:"基础用法",layout:"vertical"},c.default.createElement("div",null,"向下滚动页面，灰色的按钮为默认效果。",c.default.createElement(s.BackTop,null)),c.default.createElement("div",null,"默认位置距离页面右部和底部 50px，滚动至距顶端 400px 时显示。"),c.default.createElement("div",null,o.default.base))),c.default.createElement(s.Col,{span:"12"},c.default.createElement(i.default,{title:"基础用法",layout:"vertical"},c.default.createElement("div",null,"自定义按钮为蓝色的按钮",c.default.createElement(s.BackTop,{bottom:"90",right:"100"},c.default.createElement("div",{style:{background:"#2d94ff",height:"40px",lineHeight:"40px",textAlign:"center",color:"#fff"}},"UP"))),c.default.createElement("div",null,"可以自定义回到顶部按钮的样式",c.default.createElement("code",null,"bottom"),"为90px，",c.default.createElement("code",null,"right"),"为100px"),c.default.createElement("div",null,o.default.custom)))),c.default.createElement("h3",null,"API"),c.default.createElement("div",{className:"table-border"},c.default.createElement("table",null,c.default.createElement("tbody",null,c.default.createElement("tr",null,c.default.createElement("th",null,"属性"),c.default.createElement("th",null,"说明"),c.default.createElement("th",null,"类型"),c.default.createElement("th",null,"默认值")),c.default.createElement("tr",null,c.default.createElement("td",null,"height"),c.default.createElement("td",null,"页面滚动高度达到该值时才显示",c.default.createElement("code",null,"BackTop"),"组件 "),c.default.createElement("td",null,"String,Number"),c.default.createElement("td",null,"400")),c.default.createElement("tr",null,c.default.createElement("td",null,"bottom"),c.default.createElement("td",null,"组件距离底部的距离 "),c.default.createElement("td",null,"String,Number "),c.default.createElement("td",null,"40")),c.default.createElement("tr",null,c.default.createElement("td",null,"right"),c.default.createElement("td",null,"组件距离右部的距离 "),c.default.createElement("td",null,"String,Number "),c.default.createElement("td",null,"40")),c.default.createElement("tr",null,c.default.createElement("td",null,"onClick"),c.default.createElement("td",null,"点击按钮时触发 "),c.default.createElement("td",null,"Function "),c.default.createElement("td",null,"-"))))))}}]),t}(c.default.Component);t.default=m},317:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=h(l(12)),n=h(l(6)),u=h(l(5)),d=h(l(4)),r=h(l(3)),c=h(l(2)),i=h(l(1)),o=h(l(319)),s=l(21),f=l(7),m=h(l(53));function h(e){return e&&e.__esModule?e:{default:e}}var p=function(e){function t(e){(0,u.default)(this,t);var l=(0,r.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e));return l.state={domHeight:0,demoHeight:0,codeHeight:0,expand:!1},l.toggle=l.toggle.bind(l),l}return(0,c.default)(t,e),(0,d.default)(t,[{key:"icons",value:function(){return this.state.expand?"code-working":"code"}},{key:"classes",value:function(){return this.className(["k-demo",(0,a.default)({},"k-demo-"+this.props.layout,this.props.layout)])}},{key:"demoStyles",value:function(){return"horizontal"==this.props.layout?{height:this.state.expand?this.state.domHeight+"px":this.state.demoHeight+"px"}:{}}},{key:"codeStyles",value:function(){return"horizontal"==this.props.layout?{}:{height:""+this.state.codeHeight}}},{key:"toggle",value:function(){this.state.expand;this.setState({expand:!this.state.expand}),"vertical"==this.props.layout&&this.setState({codeHeight:this.state.expand?"auto":0})}},{key:"setHeight",value:function(){"horizontal"==this.props.layout&&this.setState({domHeight:this.refs.dom.scrollHeight,demoHeight:this.refs.demo.scrollHeight})}},{key:"componentDidMount",value:function(){this.setHeight()}},{key:"render",value:function(){return i.default.createElement("div",{className:this.classes(),style:this.styles(this.demoStyles()),ref:"dom"},i.default.createElement("div",{className:"k-demo-main",ref:"demo"},i.default.createElement("div",{className:"k-content"},this.props.children[0]),i.default.createElement("div",{className:"k-desc"},i.default.createElement("a",{className:"k-desc-title"},this.props.title),i.default.createElement("div",{className:"k-desc-content"},this.props.children[1]),i.default.createElement("a",{className:"k-code-expan",onClick:this.toggle},i.default.createElement(s.Icon,{type:this.icons()})))),i.default.createElement("div",{className:"k-demo-line"}),i.default.createElement(m.default,{show:this.state.expand},i.default.createElement(o.default,{style:this.styles(this.codeStyles()),ref:"code",lang:this.props.lang},this.props.children[2])))}}]),t}(f.Kui);t.default=p,p.propTypes={layout:f.PropTypes.string,title:f.PropTypes.string,lang:f.PropTypes.string},p.defaultProps={layout:"vertical"}},318:function(e,t,l){"use strict";l.r(t);var a=l(317),n=l.n(a);t.default=n.a},352:function(e,t,l){"use strict";l.r(t);let a={base:"import { Input } from 'kui-react';\nReactDOM.render() {\n  return (<BackTop></BackTop>)\n}",custom:"import { Input } from 'kui-react';\nconst style = {\n  background: '#2d94ff',\n  height: '40px',\n  lineHeight: '40px',\n  textAlign: 'center',\n  color: '#fff'\n}\nReactDOM.render() {\n  return (\n    <div>\n      <BackTop bottom=\"90\" right=\"100\">\n        <div style={style}>UP</div>\n      </BackTop>\n    </div>\n  )\n}\n"};t.default=a}}]);