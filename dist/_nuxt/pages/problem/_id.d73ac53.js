(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{220:function(e,t,r){"use strict";r.r(t);r(67),r(10),r(109);var n={props:["target","statement"],data:function(){return{regex:""}},computed:{regexState:function(){try{return this.target==this.statement.match(this.regex)}catch(e){SyntaxError}},coloredStatement:function(){try{return this.statement.replace(new RegExp("([sS]*)(".concat(this.regex,")([sS]*)")),"<font color='red'>$2</font>")}catch(e){SyntaxError}}}},c=r(34),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("p",[e._v(e._s(e.target)+"にマッチさせてください")]),e._v(" "),r("b-form-input",{attrs:{state:e.regexState,placeholder:"正規表現"},model:{value:e.regex,callback:function(t){e.regex=t},expression:"regex"}}),e._v(" "),r("p",{domProps:{innerHTML:e._s(e.coloredStatement)}}),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.regexState,expression:"regexState"}]},[r("p",[e._v("正解!")]),e._v(" "),r("nuxt-link",{attrs:{to:"/regex"}},[e._v("一覧へ戻る")])],1)],1)}),[],!1,null,null,null);t.default=component.exports},221:function(e,t,r){"use strict";r.r(t);r(67),r(10);var n={props:["statement","afterReplaceAnswer"],data:function(){return{regex:"",replacement:""}},computed:{afterReplace:function(){try{return this.statement.replace(new RegExp(this.regex),this.replacement)}catch(e){SyntaxError}},replacementState:function(){try{return this.afterReplaceAnswer==this.afterReplace}catch(e){SyntaxError}}}},c=r(34),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("p",[e._v(e._s(e.statement))]),e._v(" "),r("b-form-input",{attrs:{placeholder:"正規表現"},model:{value:e.regex,callback:function(t){e.regex=t},expression:"regex"}}),e._v(" "),r("b-form-input",{attrs:{state:e.replacementState,placeholder:"置換後文字列"},model:{value:e.replacement,callback:function(t){e.replacement=t},expression:"replacement"}}),e._v(" "),r("p",[e._v("置換後文字列： "+e._s(e.afterReplace))]),e._v(" "),r("p",[e._v("答え： "+e._s(e.afterReplaceAnswer))]),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.replacementState,expression:"replacementState"}]},[r("p",[e._v("正解!")]),e._v(" "),r("nuxt-link",{attrs:{to:"/regex"}},[e._v("一覧へ戻る")])],1)],1)}),[],!1,null,null,null);t.default=component.exports},225:function(e,t,r){"use strict";r.r(t);r(52);var n=r(17),c={data:function(){return{type:"",replacement:"",title:"",target:"",statement:"",senario:"",afterReplaceAnswer:""}},computed:{isFindProblem:function(){return"FindProblem"==this.type},isReplaceProblem:function(){return"ReplaceProblem"==this.type}},fetch:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.$get("/problems/".concat(e.$route.params.id));case 2:r=t.sent,e.type=r.type,e.title=r.title,e.target=r.target,e.statement=r.statement,e.senario=r.senario,e.afterReplaceAnswer=r.after_replace_answer;case 9:case"end":return t.stop()}}),t)})))()}},l=r(34),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("p",[e._v("問題: "+e._s(e.title))]),e._v(" "),r("p",[e._v(e._s(e.senario))]),e._v(" "),e.isFindProblem?r("FindProblem",{attrs:{target:e.target,statement:e.statement}}):e._e(),e._v(" "),e.isReplaceProblem?r("ReplaceProblem",{attrs:{statement:e.statement,"after-replace-answer":e.afterReplaceAnswer}}):e._e()],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{FindProblem:r(220).default,ReplaceProblem:r(221).default})}}]);