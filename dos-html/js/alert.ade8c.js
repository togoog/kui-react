/*! kui-react v1.0.0 by chuchur (c) 2018 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{314:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=f(l(6)),a=f(l(5)),r=f(l(4)),u=f(l(3)),c=f(l(2)),s=f(l(1)),o=l(21),d=f(l(318)),i=(f(l(319)),f(l(355)));function f(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(){return(0,a.default)(this,t),(0,u.default)(this,(t.__proto__||(0,n.default)(t)).apply(this,arguments))}return(0,c.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){return s.default.createElement("div",null,s.default.createElement("h2",null,"Alert 警告提示"),s.default.createElement("h3",null,"代码示例"),s.default.createElement(d.default,{title:"基础"},s.default.createElement("div",null,s.default.createElement(o.Alert,{type:"success"},"Success Text"),s.default.createElement(o.Alert,{type:"info"},"Info Text"),s.default.createElement(o.Alert,{type:"warning"},"Warning Text"),s.default.createElement(o.Alert,{type:"error"},"Error Text")),s.default.createElement("div",null,"通过",s.default.createElement("code",null,"type"),"来控制展示类型"),s.default.createElement("div",null,i.default.base)),s.default.createElement(d.default,{title:"图标"},s.default.createElement("div",null,s.default.createElement(o.Alert,{type:"success",showIcon:!0},"Success Text"),s.default.createElement(o.Alert,{type:"info",showIcon:!0},"Info Text"),s.default.createElement(o.Alert,{type:"warning",showIcon:!0},"Warning Text"),s.default.createElement(o.Alert,{type:"error",showIcon:!0},"Error Text")),s.default.createElement("div",null,s.default.createElement("code",null,"showIcon"),"来设置是否显示图标"),s.default.createElement("div",null,i.default.icon)),s.default.createElement(d.default,{title:"可关闭"},s.default.createElement("div",null,s.default.createElement(o.Alert,{type:"success",showIcon:!0,closable:!0},"Success Text"),s.default.createElement(o.Alert,{type:"info",showIcon:!0,closable:!0},"Info Text"),s.default.createElement(o.Alert,{type:"warning",showIcon:!0,closable:!0},"Warning Text"),s.default.createElement(o.Alert,{type:"error",showIcon:!0,closable:!0},"Error Text")),s.default.createElement("div",null,s.default.createElement("code",null,"closable"),"来控制是否显示可关闭按钮"),s.default.createElement("div",null,i.default.close)),s.default.createElement("h3",null,"API"),s.default.createElement("div",{className:"table-border"},s.default.createElement("table",null,s.default.createElement("tbody",null,s.default.createElement("tr",null,s.default.createElement("th",null,"属性"),s.default.createElement("th",null,"说明"),s.default.createElement("th",null,"类型"),s.default.createElement("th",null,"默认值")),s.default.createElement("tr",null,s.default.createElement("td",null,"type"),s.default.createElement("td",null,"按钮类型，可选值为success、info、warning、error或者不设置"),s.default.createElement("td",null,"String"),s.default.createElement("td",null,"warning")),s.default.createElement("tr",null,s.default.createElement("td",null,"showIcon"),s.default.createElement("td",null,"是否显示图标"),s.default.createElement("td",null,"Boolean "),s.default.createElement("td",null,"false")),s.default.createElement("tr",null,s.default.createElement("td",null,"closable"),s.default.createElement("td",null,"是否显示关闭按钮"),s.default.createElement("td",null,"Boolean "),s.default.createElement("td",null,"false")),s.default.createElement("tr",null,s.default.createElement("td",null,"close"),s.default.createElement("td",null,"关闭时触发的回调函数 "),s.default.createElement("td",null,"Function "),s.default.createElement("td",null,"-"))))))}}]),t}(s.default.Component);t.default=m},317:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=h(l(12)),a=h(l(6)),r=h(l(5)),u=h(l(4)),c=h(l(3)),s=h(l(2)),o=h(l(1)),d=h(l(319)),i=l(21),f=l(7),m=h(l(53));function h(e){return e&&e.__esModule?e:{default:e}}var p=function(e){function t(e){(0,r.default)(this,t);var l=(0,c.default)(this,(t.__proto__||(0,a.default)(t)).call(this,e));return l.state={domHeight:0,demoHeight:0,codeHeight:0,expand:!1},l.toggle=l.toggle.bind(l),l}return(0,s.default)(t,e),(0,u.default)(t,[{key:"icons",value:function(){return this.state.expand?"code-working":"code"}},{key:"classes",value:function(){return this.className(["k-demo",(0,n.default)({},"k-demo-"+this.props.layout,this.props.layout)])}},{key:"demoStyles",value:function(){return"horizontal"==this.props.layout?{height:this.state.expand?this.state.domHeight+"px":this.state.demoHeight+"px"}:{}}},{key:"codeStyles",value:function(){return"horizontal"==this.props.layout?{}:{height:""+this.state.codeHeight}}},{key:"toggle",value:function(){this.state.expand;this.setState({expand:!this.state.expand}),"vertical"==this.props.layout&&this.setState({codeHeight:this.state.expand?"auto":0})}},{key:"setHeight",value:function(){"horizontal"==this.props.layout&&this.setState({domHeight:this.refs.dom.scrollHeight,demoHeight:this.refs.demo.scrollHeight})}},{key:"componentDidMount",value:function(){this.setHeight()}},{key:"render",value:function(){return o.default.createElement("div",{className:this.classes(),style:this.styles(this.demoStyles()),ref:"dom"},o.default.createElement("div",{className:"k-demo-main",ref:"demo"},o.default.createElement("div",{className:"k-content"},this.props.children[0]),o.default.createElement("div",{className:"k-desc"},o.default.createElement("a",{className:"k-desc-title"},this.props.title),o.default.createElement("div",{className:"k-desc-content"},this.props.children[1]),o.default.createElement("a",{className:"k-code-expan",onClick:this.toggle},o.default.createElement(i.Icon,{type:this.icons()})))),o.default.createElement("div",{className:"k-demo-line"}),o.default.createElement(m.default,{show:this.state.expand},o.default.createElement(d.default,{style:this.styles(this.codeStyles()),ref:"code",lang:this.props.lang},this.props.children[2])))}}]),t}(f.Kui);t.default=p,p.propTypes={layout:f.PropTypes.string,title:f.PropTypes.string,lang:f.PropTypes.string},p.defaultProps={layout:"vertical"}},318:function(e,t,l){"use strict";l.r(t);var n=l(317),a=l.n(n);t.default=a.a},355:function(e,t,l){"use strict";l.r(t);let n={base:'import { Alert } from \'kui-react\';\nReactDOM.render() {\n  return (\n    <div>\n      <Alert type="success">Success Text</Alert>\n      <Alert type="info">Info Text</Alert>\n      <Alert type="warning">Warning Text</Alert>\n      <Alert type="error">Error Text</Alert>       \n    </div>\n  )\n}',icon:'import { Alert } from \'kui-react\';\nReactDOM.render() {\n  return (\n    <div>\n      <Alert type="success" showIcon>Success Text</Alert>\n      <Alert type="info" showIcon>Info Text</Alert>\n      <Alert type="warning" showIcon>Warning Text</Alert>\n      <Alert type="error" showIcon>Error Text</Alert>  \n    </div>\n  )\n}',close:'import { Alert } from \'kui-react\';\nReactDOM.render() {\n  return (\n    <div>\n      <Alert type="success" showIcon closable>Success Text</Alert>\n      <Alert type="info" showIcon closable>Info Text</Alert>\n      <Alert type="warning" showIcon closable>Warning Text</Alert>\n      <Alert type="error" showIcon closable>Error Text</Alert>  \n    </div>\n  )\n}'};t.default=n}}]);