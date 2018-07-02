/*! kui-react v1.0.0 by chuchur (c) 2018 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{305:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=f(l(6)),u=f(l(5)),r=f(l(4)),s=f(l(3)),n=f(l(2)),o=l(1),d=f(o),m=f(l(318)),c=f(l(347)),i=l(21);function f(e){return e&&e.__esModule?e:{default:e}}var E=function(e){function t(){return(0,u.default)(this,t),(0,s.default)(this,(t.__proto__||(0,a.default)(t)).apply(this,arguments))}return(0,n.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){return d.default.createElement("div",null,d.default.createElement("h2",null,"Carousel 走马灯"),d.default.createElement("p",null,"就是传说中的大图轮播"),d.default.createElement("h3",null,"代码示例"),d.default.createElement(i.Row,{gutter:"8"},d.default.createElement(i.Col,{span:"12"},d.default.createElement(m.default,{layout:"vertical",title:"基本"},d.default.createElement("div",null,d.default.createElement(i.Carousel,null,d.default.createElement(i.Carousel.Item,{className:"k-carousel-demo"},"1"),d.default.createElement(i.Carousel.Item,{className:"k-carousel-demo"},"2"),d.default.createElement(i.Carousel.Item,{className:"k-carousel-demo"},"3"),d.default.createElement(i.Carousel.Item,{className:"k-carousel-demo"},"4"))),d.default.createElement("div",null,"最基本的用法。"),d.default.createElement("div",null,c.default.base)),d.default.createElement(m.default,{layout:"vertical",title:"垂直"},d.default.createElement("div",null,d.default.createElement(i.Carousel,{vertical:!0},d.default.createElement(i.Carousel.Item,{className:"k-carousel-demo"},"1"),d.default.createElement(i.Carousel.Item,{className:"k-carousel-demo"},"2"),d.default.createElement(i.Carousel.Item,{className:"k-carousel-demo"},"3"),d.default.createElement(i.Carousel.Item,{className:"k-carousel-demo"},"4"))),d.default.createElement("div",null,"垂直显示,此时不显示左右箭头"),d.default.createElement("div",null,c.default.vertical))),d.default.createElement(i.Col,{span:"12"},d.default.createElement(m.default,{layout:"vertical",title:"自动播放"},d.default.createElement("div",null,d.default.createElement(i.Carousel,{autoplay:!0},d.default.createElement(i.Carousel.Item,{className:"k-carousel-demo"},"1"),d.default.createElement(i.Carousel.Item,{className:"k-carousel-demo"},"2"),d.default.createElement(i.Carousel.Item,{className:"k-carousel-demo"},"3"),d.default.createElement(i.Carousel.Item,{className:"k-carousel-demo"},"4"))),d.default.createElement("div",null,"定时切换下一张。"),d.default.createElement("div",null,c.default.autoplay)),d.default.createElement(m.default,{layout:"vertical",title:"圆形指示器"},d.default.createElement("div",null,d.default.createElement(i.Carousel,{dotsType:"radius"},d.default.createElement(i.Carousel.Item,{className:"k-carousel-demo"},"1"),d.default.createElement(i.Carousel.Item,{className:"k-carousel-demo"},"2"),d.default.createElement(i.Carousel.Item,{className:"k-carousel-demo"},"3"),d.default.createElement(i.Carousel.Item,{className:"k-carousel-demo"},"4"))),d.default.createElement("div",null,"圆形指示器"),d.default.createElement("div",null,c.default.radius)))),d.default.createElement("h3",null,"API"),d.default.createElement("div",{className:"table-border"},d.default.createElement("table",null,d.default.createElement("tbody",null,d.default.createElement("tr",null,d.default.createElement("th",null,"属性"),d.default.createElement("th",null,"说明"),d.default.createElement("th",null,"类型"),d.default.createElement("th",null,"默认值")),d.default.createElement("tr",null,d.default.createElement("td",null,"value"),d.default.createElement("td",null,"幻灯片的索引，从 0 开始"),d.default.createElement("td",null,"String,Number"),d.default.createElement("td",null,"0")),d.default.createElement("tr",null,d.default.createElement("td",null,"loop"),d.default.createElement("td",null,"是否开启循环"),d.default.createElement("td",null,"Boolean"),d.default.createElement("td",null,"true")),d.default.createElement("tr",null,d.default.createElement("td",null,"autoplay"),d.default.createElement("td",null,"是否自动切换"),d.default.createElement("td",null,"Boolean"),d.default.createElement("td",null,"false")),d.default.createElement("tr",null,d.default.createElement("td",null,"speed"),d.default.createElement("td",null,"自动切换的时间间隔，单位为毫秒"),d.default.createElement("td",null,"Number"),d.default.createElement("td",null,"2000")),d.default.createElement("tr",null,d.default.createElement("td",null,"dots-type"),d.default.createElement("td",null,"指示器的类型，",d.default.createElement("code",null,"rect")," 为方块，",d.default.createElement("code",null,"radius"),"为圆点"),d.default.createElement("td",null,"Number"),d.default.createElement("td",null,"2000"))))))}}]),t}(o.Component);t.default=E},317:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=E(l(12)),u=E(l(6)),r=E(l(5)),s=E(l(4)),n=E(l(3)),o=E(l(2)),d=E(l(1)),m=E(l(319)),c=l(21),i=l(7),f=E(l(53));function E(e){return e&&e.__esModule?e:{default:e}}var p=function(e){function t(e){(0,r.default)(this,t);var l=(0,n.default)(this,(t.__proto__||(0,u.default)(t)).call(this,e));return l.state={domHeight:0,demoHeight:0,codeHeight:0,expand:!1},l.toggle=l.toggle.bind(l),l}return(0,o.default)(t,e),(0,s.default)(t,[{key:"icons",value:function(){return this.state.expand?"code-working":"code"}},{key:"classes",value:function(){return this.className(["k-demo",(0,a.default)({},"k-demo-"+this.props.layout,this.props.layout)])}},{key:"demoStyles",value:function(){return"horizontal"==this.props.layout?{height:this.state.expand?this.state.domHeight+"px":this.state.demoHeight+"px"}:{}}},{key:"codeStyles",value:function(){return"horizontal"==this.props.layout?{}:{height:""+this.state.codeHeight}}},{key:"toggle",value:function(){this.state.expand;this.setState({expand:!this.state.expand}),"vertical"==this.props.layout&&this.setState({codeHeight:this.state.expand?"auto":0})}},{key:"setHeight",value:function(){"horizontal"==this.props.layout&&this.setState({domHeight:this.refs.dom.scrollHeight,demoHeight:this.refs.demo.scrollHeight})}},{key:"componentDidMount",value:function(){this.setHeight()}},{key:"render",value:function(){return d.default.createElement("div",{className:this.classes(),style:this.styles(this.demoStyles()),ref:"dom"},d.default.createElement("div",{className:"k-demo-main",ref:"demo"},d.default.createElement("div",{className:"k-content"},this.props.children[0]),d.default.createElement("div",{className:"k-desc"},d.default.createElement("a",{className:"k-desc-title"},this.props.title),d.default.createElement("div",{className:"k-desc-content"},this.props.children[1]),d.default.createElement("a",{className:"k-code-expan",onClick:this.toggle},d.default.createElement(c.Icon,{type:this.icons()})))),d.default.createElement("div",{className:"k-demo-line"}),d.default.createElement(f.default,{show:this.state.expand},d.default.createElement(m.default,{style:this.styles(this.codeStyles()),ref:"code",lang:this.props.lang},this.props.children[2])))}}]),t}(i.Kui);t.default=p,p.propTypes={layout:i.PropTypes.string,title:i.PropTypes.string,lang:i.PropTypes.string},p.defaultProps={layout:"vertical"}},318:function(e,t,l){"use strict";l.r(t);var a=l(317),u=l.n(a);t.default=u.a},347:function(e,t,l){"use strict";l.r(t);let a={base:'import { Carousel } from \'kui-react\';\nReactDOM.render() {\n  return (\n    <Carousel>\n      <Carousel.Item className="k-carousel-demo">1</Carousel.Item>\n      <Carousel.Item className="k-carousel-demo">2</Carousel.Item>\n      <Carousel.Item className="k-carousel-demo">3</Carousel.Item>\n      <Carousel.Item className="k-carousel-demo">4</Carousel.Item>\n    </Carousel>\n  )\n}',vertical:'import { Carousel } from \'kui-react\';\nReactDOM.render() {\n  return (\n    <Carousel vertical>\n      <Carousel.Item className="k-carousel-demo">1</Carousel.Item>\n      <Carousel.Item className="k-carousel-demo">2</Carousel.Item>\n      <Carousel.Item className="k-carousel-demo">3</Carousel.Item>\n      <Carousel.Item className="k-carousel-demo">4</Carousel.Item>\n    </Carousel>\n  )\n}',autoplay:'import { Carousel } from \'kui-react\';\nReactDOM.render() {\n  return (\n    <Carousel autoplay>\n      <Carousel.Item className="k-carousel-demo">1</Carousel.Item>\n      <Carousel.Item className="k-carousel-demo">2</Carousel.Item>\n      <Carousel.Item className="k-carousel-demo">3</Carousel.Item>\n      <Carousel.Item className="k-carousel-demo">4</Carousel.Item>\n    </Carousel>\n  )\n}',radius:'import { Carousel } from \'kui-react\';\nReactDOM.render() {\n  return (\n    <Carousel dotsType="radius">\n      <Carousel.Item className="k-carousel-demo">1</Carousel.Item>\n      <Carousel.Item className="k-carousel-demo">2</Carousel.Item>\n      <Carousel.Item className="k-carousel-demo">3</Carousel.Item>\n      <Carousel.Item className="k-carousel-demo">4</Carousel.Item>\n    </Carousel>\n  )\n}'};t.default=a}}]);