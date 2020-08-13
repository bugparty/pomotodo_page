(this["webpackJsonptomato-clock"]=this["webpackJsonptomato-clock"]||[]).push([[0],{146:function(e,t,a){e.exports=a(273)},151:function(e,t,a){},152:function(e,t,a){},273:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(10),s=a.n(i),l=(a(151),a(23)),r=a(24),c=a(5),d=a(35),u=a(34),m=(a(152),a(3)),h=a.n(m);function p(e){var t=e%60;return b(Math.floor(e/60))+":"+b(t)}function b(e){return e>9?""+e:"0"+e}function g(e){return Math.floor(e/60)}var k=navigator.userAgent[1],f=(k.match(/safari/i)&&k.match(/chrome/i),a(277)),v=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={pomodoro:g(n.props.pomodoro_duration),short:g(n.props.short_break_duration),long:g(n.props.long_break_duration)},n.handleTickingSound=n.handleTickingSound.bind(Object(c.a)(n)),n.handleInputChange=n.handleInputChange.bind(Object(c.a)(n)),n.saveChanges=n.saveChanges.bind(Object(c.a)(n)),n.handleSaveChanges=n.handleSaveChanges.bind(Object(c.a)(n)),n.handleResetDefaults=n.handleResetDefaults.bind(Object(c.a)(n)),n}return Object(r.a)(a,[{key:"handleTickingSound",value:function(e){switch(e.target.name){case"sound":this.props.setTickingSound(e.target.checked);break;case"restSound":this.props.setRestTickingSound(e.target.checked)}}},{key:"handleInputChange",value:function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,n=t.name;if(!(a<1))switch(n){case"pomodoro":this.setState({pomodoro:a});break;case"short":this.setState({short:a});break;case"long":this.setState({long:a})}}},{key:"saveChanges",value:function(){var e={pomodoro_duration:60*this.state.pomodoro,short_break_duration:60*this.state.short,long_break_duration:60*this.state.long};this.props.saveOptions(e)}},{key:"handleSaveChanges",value:function(){this.saveChanges(),this.props.closeModal()}},{key:"handleResetDefaults",value:function(){this.props.saveOptions({pomodoro_duration:1500,short_break_duration:300,long_break_duration:900,enableTickingSound:!0}),this.props.closeModal()}},{key:"render",value:function(){var e=h()("modal",{"is-active":this.props.isOpenSettings});return o.a.createElement("div",null,o.a.createElement("div",{className:e},o.a.createElement("div",{className:"modal-background",onClick:this.props.closeModal}),o.a.createElement("div",{className:"modal-card"},o.a.createElement("header",{className:"modal-card-head"},o.a.createElement("p",{className:"modal-card-title"},o.a.createElement(f.a,{id:"settings.title",defaultMessage:"Settings"})),o.a.createElement("button",{className:"delete","aria-label":"close",onClick:this.props.closeModal})),o.a.createElement("section",{className:"modal-card-body"},o.a.createElement("section",null,o.a.createElement("div",{className:"columns"},o.a.createElement("div",{className:"column"},o.a.createElement("label",{className:"checkbox"},o.a.createElement("input",{name:"sound",type:"checkbox",onChange:this.handleTickingSound,defaultChecked:this.props.enableTickingSound}),o.a.createElement(f.a,{id:"settings.enableTickingSound",defaultMessage:"enable ticking sound"}))),o.a.createElement("div",{className:"column"},o.a.createElement("label",{className:"checkbox"},o.a.createElement("input",{name:"restSound",type:"checkbox",onChange:this.handleTickingSound,defaultChecked:this.props.enableRestTickingSound}),o.a.createElement(f.a,{id:"settings.enableRestTickingSound",defaultMessage:"enable ticking sound when resting"})))),o.a.createElement("div",{className:"field"},o.a.createElement("label",{className:"label"},o.a.createElement(f.a,{id:"settings.field.pomodoro_duration",defaultMessage:"Pomodoro duration"})),o.a.createElement("div",{className:"control"},o.a.createElement("input",{name:"pomodoro",type:"number",className:"input is-info",placeholder:"\u756a\u8304\u949f\u65f6\u957f",value:this.state.pomodoro,onChange:this.handleInputChange}))),o.a.createElement("div",{className:"field"},o.a.createElement("label",{className:"label"},o.a.createElement(f.a,{id:"settings.field.short_break_duration",defaultMessage:"short break duration"})),o.a.createElement("div",{className:"control"},o.a.createElement("input",{className:"input is-info",name:"short",type:"number",placeholder:"\u77ed\u4f11\u606f\u65f6\u957f",value:this.state.short,onChange:this.handleInputChange}))),o.a.createElement("div",{className:"field"},o.a.createElement("label",{className:"label"},o.a.createElement(f.a,{id:"settings.field.long_break_duration",defaultMessage:"long break duration"})),o.a.createElement("div",{className:"control"},o.a.createElement("input",{className:"input is-info",name:"long",type:"number",placeholder:"\u957f\u4f11\u606f\u65f6\u957f",value:this.state.long,onChange:this.handleInputChange}))))),o.a.createElement("footer",{className:"modal-card-foot"},o.a.createElement("button",{className:"button is-success",onClick:this.handleSaveChanges},o.a.createElement(f.a,{id:"settings.button.save",defaultMessage:"Save"})),o.a.createElement("button",{className:"button is-danger",onClick:this.handleResetDefaults},o.a.createElement(f.a,{id:"settings.button.reset",defaultMessage:"Reset"}))))))}}]),a}(o.a.Component),S=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={isOpenSettings:!1},n.openSettings=n.openSettings.bind(Object(c.a)(n)),n.closeSettingModal=n.closeSettingModal.bind(Object(c.a)(n)),n}return Object(r.a)(a,[{key:"openSettings",value:function(){this.setState({isOpenSettings:!0})}},{key:"closeSettingModal",value:function(){this.setState({isOpenSettings:!1})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("nav",{className:"navbar is-spaced has-shadow"},o.a.createElement("div",{className:"navbar-item"},o.a.createElement(f.a,{id:"navi.title",defaultMessage:"AA Pomodoro Clock"})),o.a.createElement("div",{className:" navbar-end"},o.a.createElement("div",{className:"navbar-item ",onClick:this.openSettings},o.a.createElement(f.a,{id:"navi.settings",defaultMessage:"Settings"})))),o.a.createElement(v,{saveOptions:this.props.saveOptions,isOpenSettings:this.state.isOpenSettings,closeModal:this.closeSettingModal,enableTickingSound:this.props.enableTickingSound,enableRestTickingSound:this.props.enableRestTickingSound,setTickingSound:this.props.setTickingSound,setRestTickingSound:this.props.setRestTickingSound,pomodoro_duration:this.props.pomodoro_duration,short_break_duration:this.props.short_break_duration,long_break_duration:this.props.long_break_duration,resetDefault:this.props.resetDefault}))}}]),a}(o.a.Component),E=function(e){return o.a.createElement("section",{className:"section center",id:"clockContainer"},o.a.createElement("div",{id:"clock"},e.time))},T=a(54),y=function(e){return o.a.createElement("section",{className:"section center"},o.a.createElement("div",{className:"main-controls"},o.a.createElement(T.a,{onClick:e.handleLong},o.a.createElement(f.a,{id:"clock.button.standard",defaultMessage:"Pomodoro"})),o.a.createElement(T.a,{onClick:e.handleShortReset},o.a.createElement(f.a,{id:"clock.button.short",defaultMessage:"Short Rst"})),o.a.createElement(T.a,{onClick:e.handleLongReset},o.a.createElement(f.a,{id:"clock.button.long",defaultMessage:"Long Rst"})),o.a.createElement(T.a,{danger:!0,onClick:e.timeReset},o.a.createElement(f.a,{id:"clock.button.reset",defaultMessage:"Reset"}))))},O=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={timeInterval:1500,timeLeft:1500,timer:null},n.timeBegin=n.timeBegin.bind(Object(c.a)(n)),n.timeReset=n.timeReset.bind(Object(c.a)(n)),n.setDuration=n.setDuration.bind(Object(c.a)(n)),n.handleLong=n.handleLong.bind(Object(c.a)(n)),n.handleLongReset=n.handleLongReset.bind(Object(c.a)(n)),n.handleShortReset=n.handleShortReset.bind(Object(c.a)(n)),n}return Object(r.a)(a,[{key:"timeBegin",value:function(){var e=this,t=setInterval((function(){e.state.timeLeft<=0?(clearInterval(e.state.timer),e.setState({timeLeft:0}),e.props.setEnd()):e.setState({timeLeft:e.state.timeLeft-1})}),1e3);this.setState({timer:t}),this.props.setBegin()}},{key:"setDuration",value:function(e){clearInterval(this.state.timer),this.setState({timeInterval:e,timeLeft:e})}},{key:"timeReset",value:function(){clearInterval(this.state.timer),this.setState({timeLeft:this.state.timeInterval}),this.props.setReset()}},{key:"handleLong",value:function(){this.props.setMode("pomodoro"),this.setDuration(this.props.pomodoro_duration),this.timeBegin()}},{key:"handleLongReset",value:function(){this.props.setMode("longRest"),this.setDuration(this.props.long_break_duration),this.timeBegin()}},{key:"handleShortReset",value:function(){this.props.setMode("shortRest"),this.setDuration(this.props.short_break_duration),this.timeBegin()}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(E,{time:p(this.state.timeLeft)}),o.a.createElement(y,{handleLong:this.handleLong,handleLongReset:this.handleLongReset,handleShortReset:this.handleShortReset,timeReset:this.timeReset}))}}]),a}(o.a.Component),C=!1,R=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).playAlarm=n.playAlarm.bind(Object(c.a)(n)),n.playTic=n.playTic.bind(Object(c.a)(n)),n.stopTic=n.stopTic.bind(Object(c.a)(n)),n.state={alarm:"/asserts/80sAlarm.mp3"},n}return Object(r.a)(a,[{key:"playAlarm",value:function(){document.getElementById("80alarm").play()}},{key:"playTic",value:function(){(this.props.enableTickingSound&&"pomodoro"===this.props.mode||this.props.enableRestTickingSound&&"pomodoro"!==this.props.mode)&&document.getElementById("tictac").play()}},{key:"stopTic",value:function(){document.getElementById("tictac").pause()}},{key:"componentDidMount",value:function(){C=!0}},{key:"render",value:function(){if(C)switch(this.props.enableTickingSound&&this.props.enableRestTickingSound||this.stopTic(),this.props.status){case"reset":this.stopTic();break;case"begin":this.playTic();break;case"end":this.stopTic(),this.playAlarm()}return o.a.createElement("div",null,o.a.createElement("audio",{id:"80alarm"},o.a.createElement("source",{src:"https://cdn.jsdelivr.net/gh/bugparty/pomotodo_page@gh-pages"+this.state.alarm,preload:"auto",type:"audio/mpeg"}),"Your browser does not support the audio element."),o.a.createElement("audio",{id:"tictac",loop:!0},o.a.createElement("source",{src:"https://cdn.jsdelivr.net/gh/bugparty/pomotodo_page@gh-pages/asserts/tictac.mp3",preload:"auto",type:"audio/mpeg"}),"Your browser does not support the audio element."))}}]),a}(o.a.Component),_=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return o.a.createElement("footer",{className:" footer bottom "},o.a.createElement("div",{className:"columns"},o.a.createElement("div",{className:"column"},o.a.createElement("span",{className:"footer-item"},"copyright 2019")),o.a.createElement("div",{className:"column"},o.a.createElement("a",{href:"https://www.douban.com/group/660950/",target:"_blank",rel:"noopener noreferrer"},"\u53cd\u9988&\u8ba8\u8bba"))))}}]),a}(o.a.Component),j=function(){return o.a.createElement("section",{className:"section introduce"},o.a.createElement("article",null,o.a.createElement("h2",{className:"h2"},o.a.createElement(f.a,{id:"introduction.title",defaultMessage:"Introduction of Pomodoro"})),o.a.createElement("br",null),o.a.createElement("p",null,o.a.createElement(f.a,{id:"introduction.p1",defaultMessage:"The Pomodoro Technique is a time management method that was founded in the 1980s by Francesco Cirillo."})),o.a.createElement("p",null,o.a.createElement(f.a,{id:"introduction.p2",defaultMessage:"The method uses a timer to segment a typical 25-minute working time and a short 5-minute break, while those periods are called pomodoros, with 4 pomodoros per break, for a long break of 15-30 minutes."}))))},N=a(52),I=a(59),D=a(284),M=Object(I.b)({name:"todos",initialState:[],reducers:{addTodo:{reducer(e,t){e.push({id:t.payload.id,text:t.payload.text,subItems:[],createdDate:t.createdDate,completed:!1})},prepare:e=>({payload:{id:Object(D.a)(),text:e,createdDate:(new Date).toJSON()}})},toggleTodo:function(e,t){var a=e.find((function(e){return e.id===t.payload}));a.completed=!a.completed},deleteTodo:function(e,t){var a=e.findIndex((function(e){return e.id===t.payload}));e.splice(a,1)},addSubTodo:{reducer(e,t){var a=e.find((function(e){return e.id===t.payload.id}));null!=a&&a.subItems.push({id:t.payload.subId,text:t.payload.subText,createdDate:t.payload.createdDate,completed:!1})},prepare:(e,t)=>({payload:{id:e,subId:Object(D.a)(),subText:t,createdDate:(new Date).toJSON()}})},toggleSubTodo:{reducer(e,t){var a=e.find((function(e){return e.id===t.payload.id}));if(null!=a){var n=a.subItems.find((function(e){return e.id===t.payload.subId}));null!=n&&(n.completed=!n.completed)}},prepare:(e,t)=>({payload:{id:e,subId:t}})},deleteSubTodo:{reducer(e,t){var a=e.find((function(e){return e.id===t.payload.id}));if(null!=a){var n=a.subItems.findIndex((function(e){return e.id===t.payload.subId}));-1!==n&&a.subItems.splice(n,1)}},prepare:(e,t)=>({payload:{id:e,subId:t}})}}}),w=M.actions,L=w.addTodo,x=w.toggleTodo,A=w.deleteTodo,P=w.addSubTodo,B=w.toggleSubTodo,q=w.deleteSubTodo,F=M.reducer,V=function(e){var t,a=e.dispatch;return o.a.createElement("div",null,o.a.createElement("form",{className:"field has-addons",onSubmit:function(e){e.preventDefault(),t.value.trim()&&(a(L(t.value)),t.value="")}},o.a.createElement("p",{className:"control"},o.a.createElement("input",{className:"input",ref:function(e){t=e}})),o.a.createElement("p",{className:"control"},o.a.createElement("button",{type:"submit",className:"button"},"Add Todo"))))},W=V=Object(N.b)()(V),J=a(30),H=a.n(J),z=a(286),Y=a(278),K=a(282),U=function(e){var t=e.onTodoClickSub,a=e.onTodoClickDeleteSub,n=e.completed,i=e.text;e.createdDate,e.id;return o.a.createElement("div",null,o.a.createElement(z.a,{onClick:t,checked:n},i),o.a.createElement(T.a,{onClick:a},"Delete"))},$=function(e){var t=e.onTodoClick,a=e.completed,n=e.text;return o.a.createElement("div",null,o.a.createElement(z.a,{onClick:t,checked:a},n))},G=function(e){var t,a=e.onTodoClickSub,n=e.onTodoClick,i=e.onTodoClickDeleteSub,s=e.onTodoClickAddSub,l=e.id,r=e.completed,c=(e.text,e.createdDate,e.subItems);return o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement(Y.a,{layout:"inline"},o.a.createElement(Y.a.Item,null,o.a.createElement(K.a,{onChange:function(e){return t=e.target.value},value:t})),o.a.createElement(Y.a.Item,null,o.a.createElement(T.a,{onClick:function(){null!=t&&s(l,t)}},"Add SubTask"))),c.length>0&&c.map((function(e,t){return o.a.createElement(U,Object.assign({key:e.id},e,{onTodoClickSub:function(){return a(l,e.id)},onTodoClickDeleteSub:function(){return i(l,e.id)}}))})),0===c.length&&o.a.createElement($,{text:"default subtask",completed:r,onTodoClick:function(){return n(l)}})))};G.protoTypes={onClickDelete:H.a.func.isRequired,onTodoClickSub:H.a.func.isRequired,onTodoClickDeleteSub:H.a.func.isRequired,onTodoClickAddSub:H.a.func.isRequired,completed:H.a.bool.isRequired,text:H.a.string.isRequired,createdDate:H.a.string.isRequired,subItems:H.a.arrayOf(H.a.shape({id:H.a.string.isRequired,completed:H.a.bool.isRequired,text:H.a.string.isRequired,createdDate:H.a.string.isRequired})).isRequired};var Q=G,X=a(280),Z=a(283),ee=a(279),te=X.a.Panel,ae=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleOk=function(e){console.log(e),n.props.onTodoClickDelete(n.state.deleteId),n.setState({deleteVisible:!1})},n.handleCancel=function(e){return function(e){console.log(e),n.setState({deleteVisible:!1})}},n.onPositionChange=function(e){n.setState({expandIconPosition:e})},n.callback=function(e){},n.expandIconPosition=function(e){},n.state={deleteVisible:!1},n.handleOk=n.handleOk.bind(Object(c.a)(n)),n.handleCancel=n.handleCancel.bind(Object(c.a)(n)),n}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(ee.a,{title:"Confirm Delete?",visible:this.state.deleteVisible,onOk:this.handleOk,onCancel:this.handleCancel}),o.a.createElement(X.a,{defaultActiveKey:["1"],onChange:this.callback,expandIconPosition:this.expandIconPosition},this.props.todos.length>0&&this.props.todos.map((function(t,a){return o.a.createElement(te,{header:t.text,key:t.id,extra:(n=e,i=t.id,o.a.createElement(Z.a,{onClick:function(e){n.setState({deleteId:i,deleteVisible:!0}),e.stopPropagation()}}))},o.a.createElement(Q,Object.assign({key:t.id},t,e.props,{onClick:function(){return e.props.onTodoClick(t.id)},createdDate:t.createdDate,onClickDelete:function(a){a.stopPropagation(),e.props.onTodoClickDelete(t.id)}})));var n,i})),0===this.props.todos.length&&o.a.createElement("p",null,"No todo item")))}}]),a}(o.a.Component),ne="SHOW_ALL",oe="SHOW_COMPLETED",ie="SHOW_ACTIVE",se=Object(I.b)({name:"todo_visbility",initialState:"SHOW_ALL",reducers:{setVisibilityFilter:(e,t)=>t.payload}}),le=se.actions.setVisibilityFilter,re=se.reducer,ce=function(e,t){switch(t){case ne:return e;case oe:return e.filter((function(e){return e.completed}));case ie:return e.filter((function(e){return!e.completed}));default:return e}},de=Object(N.b)((function(e){return{todos:ce(e.todos,e.visibilityFilter)}}),(function(e){return{onTodoClick:function(t){e(x(t))},onTodoClickDelete:function(t){e(A(t))},onTodoClickSub:function(t,a){e(B(t,a))},onTodoClickDeleteSub:function(t,a){e(q(t,a))},onTodoClickAddSub:function(t,a){e(P(t,a))}}}))(ae),ue=function(e){var t=e.active,a=e.children,n=e.onClick;return o.a.createElement(T.a,{onClick:n,disabled:t,style:{marginLeft:"4px"}},a)},me=Object(N.b)((function(e,t){return{active:t.filter===e.visiblityFilter}}),(function(e,t){return{onClick:function(){e(le(t.filter))}}}))(ue),he=function(){return o.a.createElement("p",null,"Show: ",o.a.createElement(me,{filter:ne},"All"),", ",o.a.createElement(me,{filter:ie},"Active"),", ",o.a.createElement(me,{filter:oe},"Completed"))},pe=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;Object(l.a)(this,a),n=t.call(this,e);var o=localStorage.getItem("enableTickingSound");null==o&&(o=!0);var i=localStorage.getItem("enableRestTickingSound");return null==i&&(i=!1),n.state={status:"reset",mode:"pomodoro",enableTickingSound:o,enableRestTickingSound:i,pomodoro_duration:1500,short_break_duration:300,long_break_duration:900},n.setBegin=n.setBegin.bind(Object(c.a)(n)),n.setEnd=n.setEnd.bind(Object(c.a)(n)),n.setReset=n.setReset.bind(Object(c.a)(n)),n.setTickingSound=n.setTickingSound.bind(Object(c.a)(n)),n.saveOptions=n.saveOptions.bind(Object(c.a)(n)),n.setRestTickingSound=n.setRestTickingSound.bind(Object(c.a)(n)),n.setMode=n.setMode.bind(Object(c.a)(n)),n}return Object(r.a)(a,[{key:"setBegin",value:function(){this.setState({status:"begin"})}},{key:"setEnd",value:function(){this.setState({status:"end"})}},{key:"setReset",value:function(){this.setState({status:"reset"})}},{key:"setMode",value:function(e){this.setState({mode:e})}},{key:"setTickingSound",value:function(e){localStorage.setItem("enableTickingSound",e),this.setState({enableTickingSound:e})}},{key:"setRestTickingSound",value:function(e){localStorage.setItem("enableRestTickingSound",e),this.setState({enableRestTickingSound:e})}},{key:"saveOptions",value:function(e){this.setState(e)}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"AppWrapper"},o.a.createElement(S,{enableTickingSound:this.state.enableTickingSound,enableRestTickingSound:this.state.enableRestTickingSound,setTickingSound:this.setTickingSound,setRestTickingSound:this.setRestTickingSound,pomodoro_duration:this.state.pomodoro_duration,short_break_duration:this.state.short_break_duration,long_break_duration:this.state.long_break_duration,saveOptions:this.saveOptions}),o.a.createElement("div",{className:"columns"},o.a.createElement("div",{className:"TodoContainer column is-one-quarter"},o.a.createElement("h2",{className:"h2"},"Todo list"),o.a.createElement(W,null),o.a.createElement(he,null),o.a.createElement(de,null)),o.a.createElement("div",{className:"ClockContainer column"},o.a.createElement(O,{setBegin:this.setBegin,setEnd:this.setEnd,setReset:this.setReset,pomodoro_duration:this.state.pomodoro_duration,short_break_duration:this.state.short_break_duration,long_break_duration:this.state.long_break_duration,setMode:this.setMode}),o.a.createElement(j,null))),o.a.createElement(R,{status:this.state.status,mode:this.state.mode,enableTickingSound:this.state.enableTickingSound,enableRestTickingSound:this.state.enableRestTickingSound})),o.a.createElement(_,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));Intl.PluralRules||(a(118),a(268)),Intl.RelativeTimeFormat||(a(119),a(270));var be={locale:"en-US",messages:{"clock.button.standard":"Pomodoro","clock.button.long":"Long Rst","clock.button.short":"Short Rst","clock.button.reset":"Reset","navi.title":"AA Tomato O'Clock"}};Intl.PluralRules||(a(118),a(271)),Intl.RelativeTimeFormat||(a(119),a(272));var ge={locale:"zh-CN",messages:{"clock.button.standard":"\u6807\u51c6\u756a\u8304\u949f","clock.button.long":"\u957f\u4f11\u606f","clock.button.short":"\u77ed\u4f11\u606f","clock.button.reset":"\u91cd\u7f6e","navi.title":"AA\u756a\u8304\u949f","navi.settings":"\u8bbe\u7f6e","settings.title":"\u8bbe\u7f6e","settings.enableTickingSound":"\u5f00\u542f\u65f6\u949f\u6ef4\u7b54\u58f0\u97f3","settings.enableRestTickingSound":"\u5f00\u542f\u4f11\u606f\u65f6\u949f\u6ef4\u7b54\u58f0\u97f3","settings.button.save":"\u4fdd\u5b58","settings.button.reset":"\u91cd\u7f6e","settings.field.pomodoro_duration":"\u756a\u8304\u949f\u65f6\u957f","settings.field.short_break_duration":"\u77ed\u4f11\u606f\u65f6\u957f","settings.field.long_break_duration":"\u957f\u4f11\u606f\u65f6\u957f","introduction.title":"\u756a\u8304\u5de5\u4f5c\u6cd5\u8bf4\u660e","introduction.p1":"\u756a\u8304\u5de5\u4f5c\u6cd5\uff08\u82f1\u8bed\uff1aPomodoro Technique\uff09\u662f\u4e00\u79cd\u65f6\u95f4\u7ba1\u7406\u6cd5\u65b9\u6cd5\uff0c\u57281980\u5e74\u4ee3\u7531Francesco Cirillo\u521b\u7acb\u3002","introduction.p2":"\u8be5\u65b9\u6cd5\u4f7f\u7528\u4e00\u4e2a\u5b9a\u65f6\u5668\u6765\u5206\u5272\u51fa\u4e00\u4e2a\u4e00\u822c\u4e3a25\u5206\u949f\u7684\u5de5\u4f5c\u65f6\u95f4\u548c5\u5206\u949f\u7684\u77ed\u4f11\u606f\u65f6\u95f4\uff0c\u800c\u90a3\u4e9b\u65f6\u95f4\u6bb5\u88ab\u79f0\u4e3apomodoros\uff0c\u6bcf\u4f11\u606f4\u4e2apomodoros,\u8fdb\u884c\u4e00\u4e2a15-30\u5206\u949f\u7684\u957f\u4f11\u606f"}},ke=a(281),fe=a(143),ve=function(){function e(){Object(l.a)(this,e)}return Object(r.a)(e,[{key:"loadState",value:function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return void console.log("error loading state from local storage",t)}}},{key:"saveState",value:function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(a){console.log("error saving state from local storage",a)}}}]),e}(),Se=a(39),Ee=new ve,Te=Ee.loadState();console.log("loaded state",Te);console.log(F);var ye=Object(I.a)({reducer:Object(Se.c)({todos:F,visibilityFilter:re}),middleware:[].concat(Object(fe.a)(Object(I.c)()),[function(e){return function(t){return function(a){console.group(a.type),console.info("dispatching",a);var n=t(a);return console.log("next state",e.getState()),console.groupEnd(),n}}}]),preloadedState:Te});ye.subscribe((function(){Ee.saveState(ye.getState())}));var Oe=ye;function Ce(){switch(navigator.language.split("-")[0]){case"en":return be.messages;case"zh":return ge.messages;default:return be.messages}}console.log(Oe);var Re=document.getElementById("root");Re.hasChildNodes()?s.a.hydrate(o.a.createElement(ke.a,{locale:navigator.language,defaultLocale:"en",messages:Ce()},o.a.createElement(pe,null)),Re):s.a.render(o.a.createElement(N.a,{store:Oe},o.a.createElement(ke.a,{locale:navigator.language,messages:Ce()},o.a.createElement(pe,null))),Re),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[146,1,2]]]);