(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["backKnowledge"],{"1dde":function(t,e,n){var a=n("d039"),i=n("b622"),o=n("2d00"),r=i("species");t.exports=function(t){return o>=51||!a((function(){var e=[],n=e.constructor={};return n[r]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"65f0":function(t,e,n){var a=n("861d"),i=n("e8b5"),o=n("b622"),r=o("species");t.exports=function(t,e){var n;return i(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)?a(n)&&(n=n[r],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},8418:function(t,e,n){"use strict";var a=n("c04e"),i=n("9bf2"),o=n("5c6c");t.exports=function(t,e,n){var r=a(e);r in t?i.f(t,r,o(0,n)):t[r]=n}},"8c21":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"back_content"},[n("div",{staticClass:"p-5",attrs:{id:"backKnowledge"}},[t._m(0),n("b-table",{attrs:{data:t.knowledges,paginated:t.isPaginated,"per-page":t.perPage,"current-page":t.currentPage,"pagination-simple":t.isPaginationSimple,"pagination-position":t.paginationPosition,"pagination-rounded":t.isPaginationRounded,striped:"",hoverable:"","mobile-cards":t.hasMobileCards},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e}}},[n("b-table-column",{attrs:{field:"number",label:"No.",centered:"",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("h1",[t._v(t._s(e.row.number))])]}}])}),n("b-table-column",{attrs:{field:"title",label:"標題",width:"300"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.edit?n("b-input",{model:{value:e.row.model01,callback:function(n){t.$set(e.row,"model01",n)},expression:"props.row.model01"}}):n("h1",[t._v(t._s(e.row.title))])]}}])}),n("b-table-column",{attrs:{field:"content",label:"內容",width:"800"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.edit?n("b-input",{attrs:{type:"textarea"},model:{value:e.row.model02,callback:function(n){t.$set(e.row,"model02",n)},expression:"props.row.model02"}}):n("div",[t._v(t._s(e.row.content))])]}}])}),n("b-table-column",{attrs:{field:"edit",label:"編輯",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",[n("b-tooltip",{attrs:{label:"編輯標題 / 內容",type:"is-dark"}},[e.row.edit?t._e():n("button",{staticClass:"btn_cancel btn_back_size mr-2",on:{click:function(n){return t.edit(e)}}},[n("b-icon",{attrs:{icon:"pencil-outline"}})],1)]),n("b-tooltip",{attrs:{label:"刪除小知識",type:"is-dark"}},[e.row.edit?t._e():n("button",{staticClass:"btn_trash btn_back_size",on:{click:function(n){return t.confirmCustomDelete(e,e.index)}}},[n("b-icon",{attrs:{icon:"trash-can-outline"}})],1)])],1),n("div",[n("b-tooltip",{attrs:{label:"保存",type:"is-dark"}},[e.row.edit?n("button",{staticClass:"btn_cancel btn_back_size mr-2",on:{click:function(n){return t.save(e)}}},[n("b-icon",{attrs:{icon:"content-save"}})],1):t._e()]),n("b-tooltip",{attrs:{label:"取消",type:"is-dark"}},[e.row.edit?n("button",{staticClass:"btn_trash btn_back_size",on:{click:function(n){return t.cancel(e)}}},[n("b-icon",{attrs:{icon:"close-outline"}})],1):t._e()])],1)]}}])})],1),n("b-button",{attrs:{type:"btn_Knowledge_add is-flex is-justify-content-center is-align-items-center"},on:{click:function(e){t.addModalActive=!0}}},[n("b-icon",{staticClass:"animate__animated animate__pulse animate__infinite animate__slow",attrs:{icon:"comment-plus"}})],1),n("b-modal",{attrs:{active:t.addModalActive},on:{"update:active":function(e){t.addModalActive=e}}},[n("form",{staticClass:"is-flex is-justify-content-center is-align-items-center",on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)},reset:t.onReset}},[n("div",{staticClass:"modal-card add_modal_size"},[n("header",{staticClass:"modal-card-head"},[n("p",{staticClass:"modal-card-title"},[t._v("新增")]),n("button",{staticClass:"delete",attrs:{type:"button"},on:{click:function(e){t.addModalActive=!1}}})]),n("section",{staticClass:"modal-card-body px-6 py-5"},[n("b-field",{attrs:{label:"標題："}},[n("b-input",{attrs:{type:"text",placeholder:"Please enter title . . .",required:"","validation-message":"請輸入標題。"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),n("b-field",{staticClass:"mb-0",attrs:{label:"內容："}},[n("b-input",{attrs:{type:"textarea",placeholder:"Please enter content . . .",required:"",minlength:"1",maxlength:"200","validation-message":"請輸入內容。"},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1)],1),n("footer",{staticClass:"modal-card-foot is-justify-content-center is-align-items-center"},[n("button",{staticClass:"button btn_enter",attrs:{type:"submit"}},[t._v("新增")]),n("button",{staticClass:"button btn_cancel",attrs:{type:"reset"}},[t._v("重置")])])])])]),n("b-button",{attrs:{type:"btn_Knowledge_pre is-flex is-justify-content-center is-align-items-center"},on:{click:function(e){t.preModalActive=!0}}},[n("b-icon",{staticClass:"animate__animated animate__pulse animate__infinite animate__slow",attrs:{icon:"comment-eye-outline"}})],1),n("b-modal",{attrs:{active:t.preModalActive},on:{"update:active":function(e){t.preModalActive=e}}},[n("div",{staticClass:"is-flex is-justify-content-center is-align-items-center"},[n("div",{staticClass:"modal-card pre_modal_size "},[n("header",{staticClass:"modal-card-head"},[n("p",{staticClass:"modal-card-title"},[t._v("預覽")]),n("button",{staticClass:"delete",attrs:{type:"button"},on:{click:function(e){t.preModalActive=!1}}})]),n("section",{staticClass:"modal-card-body px-6 py-5"},t._l(t.knowledges,(function(e,a){return n("b-collapse",{key:a,staticClass:"card",attrs:{animation:"slide",open:t.isOpen==a},on:{open:function(e){t.isOpen=a}},scopedSlots:t._u([{key:"trigger",fn:function(a){return n("div",{staticClass:"card-header",attrs:{role:"button"}},[n("p",{staticClass:"card-header-title"},[t._v(" "+t._s(e.title)+" ")]),n("a",{staticClass:"card-header-icon"},[n("b-icon",{attrs:{icon:a.open?"menu-down":"menu-up"}})],1)])}}],null,!0)},[n("div",{staticClass:"card-content"},[n("div",{staticClass:"content"},[t._v(" "+t._s(e.content)+" ")])])])})),1)])])])],1)])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"breadcrumb has-bullet-separator"},[n("ul",[n("li",[n("a",{attrs:{href:"#/"}},[t._v("首頁")])]),n("li",[n("a",{attrs:{href:"#/backStage/home"}},[t._v("後台管理")])]),n("li",[t._v("前台內容管理")]),n("li",{staticClass:"is-active"},[n("a",{attrs:{href:"#"}},[t._v("小知識")])])])])}],o=(n("c740"),n("d81d"),n("a434"),{data:function(){return{hasMobileCards:!0,title:"",content:"",knowledges:[],isOpen:-1,addModalActive:!1,preModalActive:!1,isPaginated:!0,isPaginationSimple:!1,isPaginationRounded:!1,paginationPosition:"bottom",currentPage:1,perPage:10}},methods:{onSubmit:function(){var t=this;this.axios.post("https://vue-readyourmind.herokuapp.com/knowledges/",this.$data).then((function(e){e.data.success?(t.$buefy.dialog.alert({title:"Success!",message:"新增成功！",type:"is-danger",hasIcon:!0,icon:"heart-circle"}),t.knowledges.push({_id:e.data.result._id,title:t.title,content:t.content,model01:t.title,model02:t.content,edit:!1,number:t.knowledges.length+1}),t.title="",t.content="",t.addModalActive=!1):t.$buefy.dialog.alert({title:"Error!",message:"發生錯誤！",type:"is-danger",hasIcon:!0,icon:"heart-broken"})})).catch((function(e){console.log(e),t.$buefy.dialog.alert({title:"Error!",message:e.response.data.message,type:"is-danger",hasIcon:!0,icon:"heart-circle"})}))},onReset:function(){this.title="",this.content=""},cancel:function(t){t.row.edit=!1,t.row.model01=t.row.title,t.row.model02=t.row.content},save:function(t){var e=this;this.axios.patch("https://vue-readyourmind.herokuapp.com/knowledges/"+t.row._id,{title:t.row.model01,content:t.row.model02}).then((function(n){n.data.success?(t.row.edit=!1,t.row.title=t.row.model01,t.row.content=t.row.model02,e.$buefy.dialog.alert({title:"Success!",message:"保存成功！",type:"is-danger",hasIcon:!0,icon:"heart-circle"}),e.abouts[t.index].title=t.row.model01,e.abouts[t.index].content=t.row.model02):e.$buefy.dialog.alert({title:"Error!",message:"發生錯誤！",type:"is-danger",hasIcon:!0,icon:"heart-broken"})})).catch((function(t){e.$buefy.dialog.alert({title:"Error!",message:t.response.data.message,type:"is-danger",hasIcon:!0,icon:"heart-broken"})}))},edit:function(t){t.row.edit=!0,t.row.title=t.row.model01,t.row.content=t.row.model02},del:function(t){var e=this;this.axios.delete("https://vue-readyourmind.herokuapp.com/knowledges/"+t.row._id).then((function(n){n.data.success?(e.$buefy.dialog.alert({title:"Success!",message:"刪除成功！",type:"is-danger",hasIcon:!0,icon:"heart-circle"}),e.knowledges.splice(t.index,1)):e.$buefy.dialog.alert({title:"Error!",message:"發生錯誤！",type:"is-danger",hasIcon:!0,icon:"heart-broken"})})).catch((function(t){console.log(t),e.$buefy.dialog.alert({title:"Error!",message:t.response.data.message,type:"is-danger",hasIcon:!0,icon:"heart-circle"})}))},confirmCustomDelete:function(t){var e=this;this.$buefy.dialog.confirm({title:"Deleting knowledge",message:"你確定要刪除這筆小知識嗎？",confirmText:"Yes",type:"is-danger",hasIcon:!0,onConfirm:function(){return e.axios.delete("https://vue-readyourmind.herokuapp.com/knowledges/"+t.row._id).then((function(n){if(n.data.success){e.$buefy.dialog.alert({title:"Success!",message:"刪除成功！",type:"is-danger",hasIcon:!0,icon:"heart-circle"});var a=e.knowledges.findIndex((function(e){return e._id===t.row._id}));e.knowledges.splice(a,1)}else e.$buefy.dialog.alert({title:"Error!",message:"發生錯誤！",type:"is-danger",hasIcon:!0,icon:"heart-broken"})})).catch((function(t){console.log(t),e.$buefy.dialog.alert({title:"Error!",message:t.response.data.message,type:"is-danger",hasIcon:!0,icon:"heart-circle"})}))}})}},mounted:function(){var t=this;this.axios.get("https://vue-readyourmind.herokuapp.com/knowledges/").then((function(e){if(e.data.success){var n=1;t.knowledges=e.data.result.map((function(t){return t.edit=!1,t.model01=t.title,t.model02=t.content,t.number=n++,t}))}else t.$swal({icon:"error",title:"發生錯誤",text:e.data.message})})).catch((function(e){t.$buefy.dialog.alert({title:"Error!",message:e.response.data.message,type:"is-danger",hasIcon:!0,icon:"heart-broken"})}))}}),r=o,s=n("2877"),c=Object(s["a"])(r,a,i,!1,null,null,null);e["default"]=c.exports},a434:function(t,e,n){"use strict";var a=n("23e7"),i=n("23cb"),o=n("a691"),r=n("50c4"),s=n("7b0b"),c=n("65f0"),l=n("8418"),d=n("1dde"),u=n("ae40"),f=d("splice"),p=u("splice",{ACCESSORS:!0,0:0,1:2}),b=Math.max,m=Math.min,g=9007199254740991,h="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!f||!p},{splice:function(t,e){var n,a,d,u,f,p,v=s(this),_=r(v.length),w=i(t,_),y=arguments.length;if(0===y?n=a=0:1===y?(n=0,a=_-w):(n=y-2,a=m(b(o(e),0),_-w)),_+n-a>g)throw TypeError(h);for(d=c(v,a),u=0;u<a;u++)f=w+u,f in v&&l(d,u,v[f]);if(d.length=a,n<a){for(u=w;u<_-a;u++)f=u+a,p=u+n,f in v?v[p]=v[f]:delete v[p];for(u=_;u>_-a+n;u--)delete v[u-1]}else if(n>a)for(u=_-a;u>w;u--)f=u+a-1,p=u+n-1,f in v?v[p]=v[f]:delete v[p];for(u=0;u<n;u++)v[u+w]=arguments[u+2];return v.length=_-a+n,d}})},ae40:function(t,e,n){var a=n("83ab"),i=n("d039"),o=n("5135"),r=Object.defineProperty,s={},c=function(t){throw t};t.exports=function(t,e){if(o(s,t))return s[t];e||(e={});var n=[][t],l=!!o(e,"ACCESSORS")&&e.ACCESSORS,d=o(e,0)?e[0]:c,u=o(e,1)?e[1]:void 0;return s[t]=!!n&&!i((function(){if(l&&!a)return!0;var t={length:-1};l?r(t,1,{enumerable:!0,get:c}):t[1]=1,n.call(t,d,u)}))}},b727:function(t,e,n){var a=n("0366"),i=n("44ad"),o=n("7b0b"),r=n("50c4"),s=n("65f0"),c=[].push,l=function(t){var e=1==t,n=2==t,l=3==t,d=4==t,u=6==t,f=7==t,p=5==t||u;return function(b,m,g,h){for(var v,_,w=o(b),y=i(w),k=a(m,g,3),C=r(y.length),x=0,A=h||s,S=e?A(b,C):n||f?A(b,0):void 0;C>x;x++)if((p||x in y)&&(v=y[x],_=k(v,x,w),t))if(e)S[x]=_;else if(_)switch(t){case 3:return!0;case 5:return v;case 6:return x;case 2:c.call(S,v)}else switch(t){case 4:return!1;case 7:c.call(S,v)}return u?-1:l||d?d:S}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterOut:l(7)}},c740:function(t,e,n){"use strict";var a=n("23e7"),i=n("b727").findIndex,o=n("44d2"),r=n("ae40"),s="findIndex",c=!0,l=r(s);s in[]&&Array(1)[s]((function(){c=!1})),a({target:"Array",proto:!0,forced:c||!l},{findIndex:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),o(s)},d81d:function(t,e,n){"use strict";var a=n("23e7"),i=n("b727").map,o=n("1dde"),r=n("ae40"),s=o("map"),c=r("map");a({target:"Array",proto:!0,forced:!s||!c},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},e8b5:function(t,e,n){var a=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==a(t)}}}]);
//# sourceMappingURL=backKnowledge.68d86831.js.map