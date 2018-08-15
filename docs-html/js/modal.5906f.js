/*! react-kui v1.0.8 by chuchur (c) 2018 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{304:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=m(l(2)),a=m(l(3)),o=m(l(4)),u=m(l(5)),d=m(l(6)),i=l(0),s=m(i),r=m(l(324)),c=l(21),f=m(l(360));function m(e){return e&&e.__esModule?e:{default:e}}var h=function(e){function t(e){(0,a.default)(this,t);var l=(0,u.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e));return l.state={color:"",icon:"success",d1:!1,d2:!1,d3:!1,d4:!1,d5:!1,d6:!1},l}return(0,d.default)(t,e),(0,o.default)(t,[{key:"onShow",value:function(e){this.setState({icon:e,d6:!0,color:"happy"==e?"orange":""})}},{key:"onOpen",value:function(e){var t={};t[e]=!0,this.setState(t)}},{key:"onClose",value:function(e){var t={};t[e]=!1,this.setState(t)}},{key:"render",value:function(){var e=this.state,t=e.d1,l=e.d2,n=e.d3,a=e.d4,o=e.d5,u=e.d6,d=e.icon,i=e.color;return s.default.createElement("div",null,s.default.createElement("h2",null,"Modal 对话框"),s.default.createElement("h3",null," "),s.default.createElement(r.default,{title:"基础"},s.default.createElement("div",null,s.default.createElement(c.Button,{onClick:this.onOpen.bind(this,"d1")},"普通对话框"),s.default.createElement(c.Modal,{visible:t,onClose:this.onClose.bind(this,"d1")})),s.default.createElement("div",null,"通过",s.default.createElement("code",null,"visible"),"控制",s.default.createElement("code",null,"Modal"),"是否展示"),s.default.createElement("div",null,f.default.base)),s.default.createElement(r.default,{title:"自定义"},s.default.createElement("div",null,s.default.createElement(c.Button,{onClick:this.onOpen.bind(this,"d2")},"自定义宽度"),s.default.createElement(c.Button,{onClick:this.onOpen.bind(this,"d3")},"内容和页脚"),s.default.createElement(c.Button,{onClick:this.onOpen.bind(this,"d4")},"按钮文字"),s.default.createElement(c.Modal,{visible:l,width:"300",onClose:this.onClose.bind(this,"d2")}),s.default.createElement(c.Modal,{visible:n,title:"我是自定义标题",footer:[s.default.createElement(c.Button,{type:"danger",key:"1"},"自定义1"),s.default.createElement(c.Button,{type:"success",key:"2"},"自定义2")],onClose:this.onClose.bind(this,"d3")},s.default.createElement("p",null,"我是自定义内容")),s.default.createElement(c.Modal,{visible:a,width:"300",cancelText:"不要取消",okText:"别点我",onClose:this.onClose.bind(this,"d4")})),s.default.createElement("div",null,"通过",s.default.createElement("code",null,"title"),"来设置标题，",s.default.createElement("code",null,"width"),"控制宽度， 还有",s.default.createElement("code",null,"footer"),"展示自定义按钮"),s.default.createElement("div",null,f.default.custom)),s.default.createElement(r.default,{title:"可拖动"},s.default.createElement("div",null,s.default.createElement(c.Button,{onClick:this.onOpen.bind(this,"d5")},"普通对话框"),s.default.createElement(c.Modal,{visible:o,isMove:!0,onClose:this.onClose.bind(this,"d5")},"我可以拖动的")),s.default.createElement("div",null,"有人想要拖动",s.default.createElement("code",null,"Modal"),"，真奇葩，",s.default.createElement("code",null,"isMove"),"就可以搞定的"),s.default.createElement("div",null,f.default.canMove)),s.default.createElement(r.default,{title:"Toast"},s.default.createElement("div",null,s.default.createElement(c.Button,{onClick:this.onShow.bind(this,"success")},"Success"),s.default.createElement(c.Button,{onClick:this.onShow.bind(this,"error")},"Error"),s.default.createElement(c.Button,{onClick:this.onShow.bind(this,"warning")},"Warning"),s.default.createElement(c.Button,{onClick:this.onShow.bind(this,"info")},"Info"),s.default.createElement(c.Button,{onClick:this.onShow.bind(this,"ios-happy")},"happy"),s.default.createElement(c.Modal,{visible:u,isMove:!0,type:"toast",icon:d,color:i,onClose:this.onClose.bind(this,"d6")},"恭喜你中了5000万...")),s.default.createElement("div",null,"这个模式只是用来展示最后的结果，",s.default.createElement("code",null,"type=toast"),"就可以了"),s.default.createElement("div",null,f.default.mode)),s.default.createElement("h3",null,"API"),s.default.createElement("div",{className:"table-border"},s.default.createElement("table",null,s.default.createElement("tbody",null,s.default.createElement("tr",null,s.default.createElement("th",null,"属性"),s.default.createElement("th",null,"说明"),s.default.createElement("th",null,"类型"),s.default.createElement("th",null,"默认值")),s.default.createElement("tr",null,s.default.createElement("td",null,"value"),s.default.createElement("td",null,"对话框是否显示"),s.default.createElement("td",null,"Boolean"),s.default.createElement("td",null,"false")),s.default.createElement("tr",null,s.default.createElement("td",null,"title"),s.default.createElement("td",null,"对话框标题"),s.default.createElement("td",null,"String"),s.default.createElement("td",null,"-")),s.default.createElement("tr",null,s.default.createElement("td",null,"width"),s.default.createElement("td",null,"对话框宽度"),s.default.createElement("td",null,"Number,String"),s.default.createElement("td",null,"520")),s.default.createElement("tr",null,s.default.createElement("td",null,"okText"),s.default.createElement("td",null,"确定按钮文字"),s.default.createElement("td",null,"String"),s.default.createElement("td",null,"确定")),s.default.createElement("tr",null,s.default.createElement("td",null,"cancelText"),s.default.createElement("td",null,"取消按钮文字"),s.default.createElement("td",null,"String"),s.default.createElement("td",null,"取消")),s.default.createElement("tr",null,s.default.createElement("td",null,"isMove"),s.default.createElement("td",null,"弹框是否可拖动，type 为modal可以用"),s.default.createElement("td",null,"Boolean"),s.default.createElement("td",null,"false")),s.default.createElement("tr",null,s.default.createElement("td",null,"type"),s.default.createElement("td",null,"弹框的模式，可选值为 modal，toast "),s.default.createElement("td",null,"String"),s.default.createElement("td",null,"modal")),s.default.createElement("tr",null,s.default.createElement("td",null,"icon"),s.default.createElement("td",null,"弹框的图标，type为toast可用 ，默认可选值为success，warning,error,info,也可以自定义，参照",s.default.createElement("a",{href:"#/icon"},"Icon"),"值 "),s.default.createElement("td",null,"String"),s.default.createElement("td",null,"success")),s.default.createElement("tr",null,s.default.createElement("td",null,"color"),s.default.createElement("td",null,"弹框的图标的颜色，type为toast可用 "),s.default.createElement("td",null,"String"),s.default.createElement("td",null,"-")),s.default.createElement("tr",null,s.default.createElement("td",null,"onOk"),s.default.createElement("td",null,"点击确定的回调"),s.default.createElement("td",null,"Function"),s.default.createElement("td",null,"-")),s.default.createElement("tr",null,s.default.createElement("td",null,"onCancel"),s.default.createElement("td",null,"点击取消的回调"),s.default.createElement("td",null,"Function"),s.default.createElement("td",null,"-")),s.default.createElement("tr",null,s.default.createElement("td",null,"onClose"),s.default.createElement("td",null,"窗口关闭的回调"),s.default.createElement("td",null,"Function"),s.default.createElement("td",null,"-"))))))}}]),t}(i.Component);t.default=h},324:function(e,t,l){"use strict";l.r(t);var n=l(325),a=l.n(n);t.default=a.a},325:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=h(l(9)),a=h(l(2)),o=h(l(3)),u=h(l(4)),d=h(l(5)),i=h(l(6)),s=h(l(0)),r=h(l(326)),c=l(21),f=l(7),m=h(l(48));function h(e){return e&&e.__esModule?e:{default:e}}var E=function(e){function t(e){(0,o.default)(this,t);var l=(0,d.default)(this,(t.__proto__||(0,a.default)(t)).call(this,e));return l.state={domHeight:0,demoHeight:0,codeHeight:0,expand:!1},l.toggle=l.toggle.bind(l),l}return(0,i.default)(t,e),(0,u.default)(t,[{key:"icons",value:function(){return this.state.expand?"ios-code-working":"ios-code"}},{key:"classes",value:function(){return this.className(["k-demo",(0,n.default)({},"k-demo-"+this.props.layout,this.props.layout)])}},{key:"demoStyles",value:function(){return"horizontal"==this.props.layout?{height:this.state.expand?this.state.domHeight+"px":this.state.demoHeight+"px"}:{}}},{key:"codeStyles",value:function(){return"horizontal"==this.props.layout?{}:{height:""+this.state.codeHeight}}},{key:"toggle",value:function(){this.state.expand;this.setState({expand:!this.state.expand}),"vertical"==this.props.layout&&this.setState({codeHeight:this.state.expand?"auto":0})}},{key:"setHeight",value:function(){"horizontal"==this.props.layout&&this.setState({domHeight:this.refs.dom.scrollHeight,demoHeight:this.refs.demo.scrollHeight})}},{key:"componentDidMount",value:function(){this.setHeight()}},{key:"render",value:function(){return s.default.createElement("div",{className:this.classes(),style:this.styles(this.demoStyles()),ref:"dom"},s.default.createElement("div",{className:"k-demo-main",ref:"demo"},s.default.createElement("div",{className:"k-content"},this.props.children[0]),s.default.createElement("div",{className:"k-desc"},s.default.createElement("a",{className:"k-desc-title"},this.props.title),s.default.createElement("div",{className:"k-desc-content"},this.props.children[1]),s.default.createElement("a",{className:"k-code-expan",onClick:this.toggle},s.default.createElement(c.Icon,{type:this.icons()})))),s.default.createElement("div",{className:"k-demo-line"}),s.default.createElement(m.default,{show:this.state.expand},s.default.createElement(r.default,{style:this.styles(this.codeStyles()),ref:"code",lang:this.props.lang},this.props.children[2])))}}]),t}(f.Kui);t.default=E,E.propTypes={layout:f.PropTypes.string,title:f.PropTypes.string,lang:f.PropTypes.string},E.defaultProps={layout:"vertical"}},360:function(e,t,l){"use strict";l.r(t);let n={base:"import { Modal } from 'react-kui';\nconstructor(props) {\n  super(props)\n  this.state = {\n    visible:false\n  }\n} \nReactDOM.render() {\n  return (\n    <div>\n      <Button onClick={()=>this.setState({visible:true})}>普通对话框</Button>\n      <Modal visible={visible} onClose={()=>this.setState({visible:false})}></Modal>\n    </div>\n  )\n}",custom:'import { Modal } from \'react-kui\';\nconstructor(props) {\n  super(props)\n  this.state = {\n    v2: false,\n    v3: false,\n    v4: false,\n  }\n}\nonOpen(key) {\n  let obj = {}\n  obj[key] = true\n  this.setState(obj)\n}\nonClose(key) {\n  let obj = {}\n  obj[key] = false\n  this.setState(obj)\n}\nReactDOM.render() {\n  return (\n    <div>\n      <Button onClick={this.onOpen.bind(this,\'v2\')}>自定义宽度</Button>\n      <Button onClick={this.onOpen.bind(this,\'v3\')}>内容和页脚</Button>\n      <Button onClick={this.onOpen.bind(this,\'v4\')}>按钮文字</Button>\n      <Modal visible={v2} width="300" onClose={this.onClose.bind(this,\'v2\')}></Modal>\n      <Modal visible={v3}\n        title="我是自定义标题"\n        footer={[<Button type="danger" key="1">自定义1</Button>, <Button type="success" key="2">自定义2</Button>]}\n        onClose={this.onClose.bind(this,\'v3\')}>\n        <p>我是自定义内容</p>\n      </Modal>\n      <Modal visible={v4} width="300" cancelText="不要取消" okText="别点我" onClose={this.onClose.bind(this,\'v4\')}></Modal> \n    </div>\n  )\n}',canMove:"import { Modal } from 'react-kui';\nconstructor(props) {\n  super(props)\n  this.state = {\n    visible:false\n  }\n} \nReactDOM.render() {\n  return (\n    <div>\n      <Button onClick={()=>this.setState({visible:true})}>普通对话框</Button>\n      <Modal visible={visible} isMove onClose={()=>this.setState({visible:false})}>我可以拖动的</Modal>\n    </div>\n  )\n}",mode:"import { Modal } from 'react-kui';\nconstructor(props) {\n  super(props)\n  this.state = {\n    color: \"\",\n    icon: \"success\",\n    visible:false\n  }\n}\nonShow(type) {\n  this.setState({\n    icon: type,\n    visible: true,\n    color: type == \"happy\" ? \"orange\" : \"\"\n  })\n}\nReactDOM.render() {\n  return (\n    <div>\n      <Button onClick={this.onShow.bind(this,'success')}>Success</Button>\n      <Button onClick={this.onShow.bind(this,'error')}>Error</Button>\n      <Button onClick={this.onShow.bind(this,'warning')}>Warning</Button>\n      <Button onClick={this.onShow.bind(this,'info')}>Info</Button>\n      <Button onClick={this.onShow.bind(this,'ios-happy')}>happy</Button>\n      <Modal visible={visible} isMove type=\"toast\" icon={icon} color={color} onClose={()=>this.setState({visible:false})}>恭喜你中了5000万...</Modal>  \n    </div>\n  )\n}"};t.default=n}}]);