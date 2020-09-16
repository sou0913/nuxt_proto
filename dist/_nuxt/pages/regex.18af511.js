(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{227:function(t,e,n){"use strict";n.r(e);n(46);var r=n(14),o={data:function(){return{email:"",emailState:null,password:"",passwordState:null}},methods:{checkFormValidity:function(){var t=this.$refs.form.checkValidity();return this.emailState=t,t},resetModal:function(){this.email="",this.emailState=null},handleOk:function(t){t.preventDefault(),this.handleSubmit()},handleSubmit:function(){var t=this;this.checkFormValidity()&&(this.signIn(),this.$nextTick((function(){t.$bvModal.hide("modal-prevent-closing")})))},signIn:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$fireAuth.signInWithEmailAndPassword(t.email,t.password).catch((function(t){alert(t)}));case 1:case"end":return e.stop()}}),e)})))()}}},l=n(34),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-modal",{ref:"modal",attrs:{id:"modal-prevent-closing",title:"認証します"},on:{show:t.resetModal,hidden:t.resetModal,ok:t.handleOk}},[n("form",{ref:"form",on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.handleSubmit(e)}}},[n("b-form-group",{attrs:{state:t.emailState,label:"メールアドレス","label-for":"email-input","invalid-feedback":"メールアドレスを入力お願いします"}},[n("b-form-input",{attrs:{id:"email-input",state:t.emailState,required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),t._v(" "),n("b-form-group",{attrs:{state:t.passwordState,label:"パスワード","label-for":"password-input","invalid-feedback":"パスワードを入力お願いします"}},[n("b-form-input",{attrs:{id:"password-input",state:t.passwordState,required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1)])}),[],!1,null,null,null);e.default=component.exports},231:function(t,e,n){"use strict";n.r(e);n(46);var r=n(14),o={data:function(){return{currentPage:1,rows:0,problems:[],fields:["id","title",{key:"buttons",label:""}],admin:!1}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,e.next=3,n.$get("/problems?page=1");case 3:return r=e.sent,e.abrupt("return",{problems:r.problems,rows:r.total_rows});case 5:case"end":return e.stop()}}),e)})))()},created:function(){this.admin=this.checkAdmin()},computed:{loading:function(){return 0==this.problems.length}},methods:{fetchProblems:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.$axios.$get("/problems?page=".concat(t));case 2:r=n.sent,e.problems=r.problems,e.rows=r.total_rows;case 5:case"end":return n.stop()}}),n)})))()},destroyProblem:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e.$axios.$delete("/problems/".concat(t));case 3:alert("削除しました"),e.fetchProblems(e.currentPage),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),alert(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))()},checkAdmin:function(){this.$fireAuth.onAuthStateChanged((function(t){return!!t}))}}},l=n(34),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-pagination",{attrs:{"total-rows":t.rows},on:{input:t.fetchProblems},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}}),t._v(" "),n("b-button",{attrs:{variant:"success",to:"/problemForm/new"}},[t._v("新規追加")]),t._v(" "),n("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-prevent-closing",modifiers:{"modal-prevent-closing":!0}}],staticClass:"float-right",attrs:{variant:"primary"}},[t._v("管理モード")]),t._v(" "),t.loading?n("b-spinner",{attrs:{variant:"primary",label:"Spinning"}}):n("b-table",{attrs:{striped:"",hover:"",items:t.problems,fields:t.fields},scopedSlots:t._u([{key:"cell(title)",fn:function(data){return[n("b-link",{attrs:{to:"/problem/"+data.item.id}},[t._v(t._s(data.value))])]}},t.admin?{key:"cell(buttons)",fn:function(data){return[n("b-button",{attrs:{size:"sm",variant:"primary",to:"/problemForm/edit/"+data.item.id}},[t._v("\n        編集\n      ")]),t._v(" "),n("b-button",{attrs:{size:"sm"},on:{click:function(e){return t.destroyProblem(data.item.id)}}},[t._v("\n        削除\n      ")])]}}:null],null,!0)}),t._v(" "),n("SignInModal")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SignInModal:n(227).default})}}]);