(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,,,,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Calculator}));var _Users_alishahwee_Programming_freeCodeCamp_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),_Users_alishahwee_Programming_freeCodeCamp_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),_Users_alishahwee_Programming_freeCodeCamp_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),_Users_alishahwee_Programming_freeCodeCamp_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(5),_Users_alishahwee_Programming_freeCodeCamp_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),_Display_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(9),_Buttons_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(10),Calculator=function(_Component){Object(_Users_alishahwee_Programming_freeCodeCamp_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__.a)(Calculator,_Component);var _super=Object(_Users_alishahwee_Programming_freeCodeCamp_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__.a)(Calculator);function Calculator(e){var a;return Object(_Users_alishahwee_Programming_freeCodeCamp_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,Calculator),(a=_super.call(this,e)).state={formula:"",currentVal:"0",lastButtonPressed:void 0,clearLabel:"AC"},a.updateLastButtonPressed=a.updateLastButtonPressed.bind(Object(_Users_alishahwee_Programming_freeCodeCamp_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(a)),a.handleBackspace=a.handleBackspace.bind(Object(_Users_alishahwee_Programming_freeCodeCamp_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(a)),a.handleNumber=a.handleNumber.bind(Object(_Users_alishahwee_Programming_freeCodeCamp_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(a)),a.handleOperator=a.handleOperator.bind(Object(_Users_alishahwee_Programming_freeCodeCamp_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(a)),a.handleClear=a.handleClear.bind(Object(_Users_alishahwee_Programming_freeCodeCamp_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(a)),a.handleEvaluate=a.handleEvaluate.bind(Object(_Users_alishahwee_Programming_freeCodeCamp_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(a)),a.handleDecimal=a.handleDecimal.bind(Object(_Users_alishahwee_Programming_freeCodeCamp_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(a)),a.handleSignToggle=a.handleSignToggle.bind(Object(_Users_alishahwee_Programming_freeCodeCamp_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(a)),a.handlePercent=a.handlePercent.bind(Object(_Users_alishahwee_Programming_freeCodeCamp_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(a)),a.preciseInt=a.preciseInt.bind(Object(_Users_alishahwee_Programming_freeCodeCamp_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(a)),a}return Object(_Users_alishahwee_Programming_freeCodeCamp_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(Calculator,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleBackspace)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleBackspace)}},{key:"componentDidUpdate",value:function(){""===this.state.currentVal&&this.setState({currentVal:"0",clearLabel:"AC"}),"0"!==this.state.currentVal&&"CE"!==this.state.clearLabel&&this.setState({clearLabel:"CE"}),this.state.currentVal.length>10&&this.setState((function(e){return{currentVal:e.currentVal.slice(0,10)}}))}},{key:"updateLastButtonPressed",value:function(e){this.setState({lastButtonPressed:e})}},{key:"handleBackspace",value:function(e){"Backspace"===e.key&&"0"!==this.state.currentVal&&(this.setState((function(e){return{currentVal:e.currentVal.slice(0,-1)}})),this.updateLastButtonPressed(e.key))}},{key:"handleNumber",value:function(e){this.state.currentVal.length>10||("0"===this.state.currentVal||"="===this.state.lastButtonPressed||"Enter"===this.state.lastButtonPressed||/(\/|\+|-|\*)/.test(this.state.lastButtonPressed)?this.setState({currentVal:e}):this.setState((function(a){return{currentVal:a.currentVal+e}})))}},{key:"handleOperator",value:function(e){/(\/|\+|-|\*)/.test(this.state.lastButtonPressed)?this.setState((function(a){return{formula:a.formula.replace(/(\/|\+|-|\*)$/,e)}})):this.setState((function(a){return{formula:a.formula+a.currentVal+e}}))}},{key:"handleClear",value:function(){"CE"===this.state.clearLabel?this.setState({currentVal:"0",clearLabel:"AC"}):"0"===this.state.currentVal&&""!==this.state.formula&&"AC"===this.state.clearLabel&&this.setState({formula:""})}},{key:"handleEvaluate",value:function handleEvaluate(){this.setState((function(e){return{formula:e.formula+e.currentVal}})),this.setState((function(prevState){return{formula:"",currentVal:"".concat(eval(prevState.formula))}}))}},{key:"handleDecimal",value:function(){/(\/|\+|-|\*|=)/.test(this.state.lastButtonPressed)?this.setState({currentVal:"0."}):0===(this.state.currentVal.match(/\./g)||[]).length&&this.setState((function(e){return{currentVal:e.currentVal+"."}}))}},{key:"handleSignToggle",value:function(){/-/.test(this.state.currentVal)?this.setState((function(e){return{currentVal:e.currentVal.replace(/-/,"")}})):"0"!==this.state.currentVal&&this.setState((function(e){return{currentVal:"-"+e.currentVal}}))}},{key:"handlePercent",value:function(){var e=this;this.setState((function(a){return{currentVal:parseFloat((a.currentVal/100).toPrecision(e.preciseInt(a.currentVal))).toString()}}))}},{key:"preciseInt",value:function(e){return/\./.test(e)?e.length-1:e.length}},{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"Calculator"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Display_js__WEBPACK_IMPORTED_MODULE_6__.a,{formula:this.state.formula,currentVal:this.state.currentVal}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Buttons_js__WEBPACK_IMPORTED_MODULE_7__.a,{formula:this.state.formula,currentVal:this.state.currentVal,clearLabel:this.state.clearLabel,updateLastButtonPressed:this.updateLastButtonPressed,handleNumber:this.handleNumber,handleOperator:this.handleOperator,handleClear:this.handleClear,handleEvaluate:this.handleEvaluate,handleDecimal:this.handleDecimal,handleSignToggle:this.handleSignToggle,handlePercent:this.handlePercent}))}}]),Calculator}(react__WEBPACK_IMPORTED_MODULE_5__.Component)},function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var _=t(0),r=t.n(_);function l(e){return r.a.createElement("div",{className:"Display"},r.a.createElement("span",{className:"Formula"},e.formula),r.a.createElement("span",{className:"CurrentVal"},e.currentVal))}},function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var _=t(0),r=t.n(_),l=t(2),s=t(3),n=t(1),i=t(5),u=t(4),o=function(e){Object(i.a)(t,e);var a=Object(u.a)(t);function t(e){var _;return Object(l.a)(this,t),(_=a.call(this,e)).handleKey=_.handleKey.bind(Object(n.a)(_)),_.handleClick=_.handleClick.bind(Object(n.a)(_)),_}return Object(s.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKey)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKey)}},{key:"handleKey",value:function(e){this.props.keyValue.includes(e.key)&&(Number.isInteger(Number(e.key))&&this.props.handleNumber(e.key),"c"!==e.key&&"Escape"!==e.key||this.props.handleClear(),"."===e.key&&this.props.handleDecimal(),"\u2013"===e.key&&this.props.handleSignToggle(),"%"===e.key&&this.props.handlePercent(),["/","*","-","+"].includes(e.key)&&this.props.handleOperator(e.key),"="!==e.key&&"Enter"!==e.key||this.props.handleEvaluate(),this.props.updateLastButtonPressed(e.key))}},{key:"handleClick",value:function(){Number.isInteger(Number(this.props.keyValue))&&this.props.handleNumber(this.props.label),"clear"===this.props.id&&this.props.handleClear(),"decimal"===this.props.id&&this.props.handleDecimal(),"neg-toggle"===this.props.id&&this.props.handleSignToggle(),"percent"===this.props.id&&this.props.handlePercent(),["divide","multiply","subtract","add"].includes(this.props.id)&&this.props.handleOperator(this.props.keyValue),"equals"===this.props.id&&this.props.handleEvaluate(),this.props.updateLastButtonPressed(this.props.keyValue)}},{key:"render",value:function(){return r.a.createElement("div",{id:this.props.id,className:"Button",onClick:this.handleClick},r.a.createElement("span",null,this.props.label))}}]),t}(_.Component);function c(e){var a=[{id:"neg-toggle",label:"\xb1",key:"\u2013"},{id:"percent",label:"%",key:"%"},{id:"divide",label:"\xf7",key:"/"},{id:"seven",label:"7",key:"7"},{id:"eight",label:"8",key:"8"},{id:"nine",label:"9",key:"9"},{id:"multiply",label:"x",key:"*"},{id:"four",label:"4",key:"4"},{id:"five",label:"5",key:"5"},{id:"six",label:"6",key:"6"},{id:"subtract",label:"\u2013",key:"-"},{id:"one",label:"1",key:"1"},{id:"two",label:"2",key:"2"},{id:"three",label:"3",key:"3"},{id:"add",label:"+",key:"+"},{id:"zero",label:"0",key:"0"},{id:"decimal",label:".",key:"."},{id:"equals",label:"=",key:"="}].map((function(a){return r.a.createElement(o,{key:a.id,id:a.id,label:a.label,keyValue:a.key,updateLastButtonPressed:e.updateLastButtonPressed,handleNumber:e.handleNumber,handleOperator:e.handleOperator,handleEvaluate:e.handleEvaluate,handleDecimal:e.handleDecimal,handleSignToggle:e.handleSignToggle,handlePercent:e.handlePercent})}));return r.a.createElement("div",{className:"Buttons"},r.a.createElement(o,{key:"clear",id:"clear",label:e.clearLabel,keyValue:["c","Escape"],updateLastButtonPressed:e.updateLastButtonPressed,handleClear:e.handleClear}),a)}},function(e,a,t){e.exports=t(17)},,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var _=t(0),r=t.n(_),l=t(7),s=t.n(l),n=(t(16),t(8));function i(){return r.a.createElement("div",{className:"Footnote"},r.a.createElement("span",null,"made by"," ",r.a.createElement("a",{href:"https://github.com/alishahwee",target:"_blank",rel:"noopener noreferrer"},"alishahwee")))}function u(e){return r.a.createElement("div",{className:"App"},r.a.createElement(n.a,null),r.a.createElement(i,null))}s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u,null)),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.3cfd0fec.chunk.js.map