(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{60:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},68:function(e,t,a){e.exports=a(84)},74:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),l=a.n(c),s=(a(73),a(74),a(20)),u=a(89),o=a(88),i=a(63),m=a(86),d=a(103),E=a(52),p=function(e){return r.a.createElement("div",{className:"".concat(e.active?"nav-active":"")},r.a.createElement(E.a,e,e.children))},f=a(93),h=a(54),g=a(94),y=a(67),S=a(95),b=a(96),U=a(97),v=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{variant:"dark",style:{backgroundColor:"var(--purple)"},className:"py-0"},r.a.createElement("div",{className:"d-flex justify-content-between w-100"},r.a.createElement(h.a,null,"User Directory"),r.a.createElement(g.a,{navbar:!0},r.a.createElement(p,null,r.a.createElement(y.a,null,"Tasks")),r.a.createElement(p,{active:!0},r.a.createElement(y.a,{active:!0},"Users")),r.a.createElement(p,null,r.a.createElement(y.a,null,"Activity")),r.a.createElement(p,null,r.a.createElement(y.a,null,"Members"))),r.a.createElement(g.a,{navbar:!0},r.a.createElement(E.a,null,r.a.createElement(y.a,null,r.a.createElement(S.a,null))),r.a.createElement(E.a,null,r.a.createElement(y.a,null,r.a.createElement(b.a,null))),r.a.createElement(E.a,null,r.a.createElement(y.a,null,r.a.createElement(U.a,null)))))))},O=a(98),j=a(99),x=a(100),w=a(46),C=function(e){return r.a.createElement("div",{className:"custom-dropdown-menu shadow-sm ".concat(e.show?"show":"")},e.children)},R=function(e){var t=e.name,a=e.email,c=e.contact,l=e.address,u=e._id,o=Object(n.useState)(!1),i=Object(s.a)(o,2),d=i[0],E=i[1];return r.a.createElement("tr",{className:"align-items-center"},r.a.createElement("td",{className:"pl-4"},r.a.createElement("img",{src:"https://picsum.photos/80/80?random=".concat(parseInt(e.index)%10+1),className:"user-avatar mr-2"}),t),r.a.createElement("td",null,a),r.a.createElement("td",null,c),r.a.createElement("td",null,l),r.a.createElement("td",null,r.a.createElement("div",{style:{position:"relative"}},r.a.createElement(m.a,{variant:"light",size:"sm",onClick:function(){E(!d)}},r.a.createElement(O.a,null)),r.a.createElement(C,{show:d},r.a.createElement(w.a,{as:"div",onClick:function(){e.edit(u)}},r.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},r.a.createElement(j.a,{className:"mr-2"})," Edit user details")),r.a.createElement(w.a,{as:"div",onClick:function(){e.deleteUser(u)}},r.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},r.a.createElement(x.a,{className:"mr-2 text-danger"})," Delete user"))))))},N=a(87),_=a(14),T=a.n(_),D=a(30),A=new Headers;A.append("Content-Type","application/json");var k="http://localhost:5000/api/",G={GetUser:function(){var e=Object(D.a)(T.a.mark((function e(t){var a;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(k+"users/".concat(t),{method:"GET",headers:A});case 2:return a=e.sent,e.next=5,a.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),GetAllUser:function(){var e=Object(D.a)(T.a.mark((function e(){var t;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(k+"users/",{method:"GET",headers:A});case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),AddUser:function(){var e=Object(D.a)(T.a.mark((function e(t){var a;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(k+"users",{method:"POST",headers:A,body:JSON.stringify(t)});case 2:return a=e.sent,e.next=5,a.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),UpdateUser:function(){var e=Object(D.a)(T.a.mark((function e(t,a){var n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(k+"users/".concat(t),{method:"PUT",headers:A,body:JSON.stringify(a)});case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),DeleteUser:function(){var e=Object(D.a)(T.a.mark((function e(t){var a;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(k+"users/".concat(t),{method:"DELETE",headers:A});case 2:return a=e.sent,e.next=5,a.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},L=function(e){e({type:"GET_ALL_USER"}),G.GetAllUser().then((function(t){e({type:"GET_ALL_USER_SUCCESS",payload:t.data})})).catch((function(t){console.log(t),e({type:"ERROR",payload:"Error Getting User Data"})}))},I=a(19),F=Object(I.b)((function(e){return{all:e.users.all,loading:e.users.loading}}),(function(e){return{getAllUser:function(){return L(e)},deleteUser:function(t){return function(e,t){t({type:"EDIT_USER"}),G.DeleteUser(e).then((function(e){t({type:"DELETE_USER_SUCCESS",payload:e.data}),t({type:"SUCCESS",payload:"User  deleted successfully"})})).catch((function(e){return t({type:"ERROR",payload:"Error deleting user"})}))}(t,e)}}}))((function(e){return r.a.useEffect((function(){e.all.length||e.getAllUser()}),[]),r.a.createElement(N.a,{hover:!0,className:"mb-0"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{className:"pl-4 text-muted"},"USER NAME"),r.a.createElement("th",{className:"text-muted"},"ADDRESS"),r.a.createElement("th",{className:"text-muted"},"CONTACT"),r.a.createElement("th",{className:"text-muted"},"EMAIL"),r.a.createElement("th",{className:"text-muted"}))),r.a.createElement("tbody",null,e.loading?r.a.createElement("tr",null,r.a.createElement("td",{colSpan:"5",className:"text-center"},"Please wait...")):e.all.length?e.all.map((function(t,a){return r.a.createElement(R,Object.assign({},t,{index:a,key:a,edit:e.onEdit,deleteUser:e.deleteUser}))})):r.a.createElement("tr",null,r.a.createElement("td",{colSpan:"5",className:"text-center"},"No user found"))))})),z=a(38),J=a(6),q=a(50),B=a(90),M=a(91),P=a(64),H=a(66),W=a(65),$=a(102),K=a(60),Q=a.n(K),V=a(101),X=a(27),Y={loading:!1,all:[],current:{}},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0,a=t.payload,n=t.type;switch(n){case"GET_USER":return Object(J.a)(Object(J.a)({},e),{},{loading:!0});case"GET_USER_SUCCESS":return Object(J.a)(Object(J.a)({},e),{},{loading:!1,current:a});case"GET_ALL_USER":return Object(J.a)(Object(J.a)({},e),{},{loading:!0});case"GET_ALL_USER_SUCCESS":return Object(J.a)(Object(J.a)({},e),{},{loading:!1,all:a});case"ADD_USER":return Object(J.a)(Object(J.a)({},e),{},{loading:!0});case"ADD_USER_SUCCESS":return Object(J.a)(Object(J.a)({},e),{},{loading:!1,current:null});case"EDIT_USER":return Object(J.a)(Object(J.a)({},e),{},{loading:!0});case"EDIT_USER_SUCCESS":return Object(J.a)(Object(J.a)({},e),{},{loading:!1,current:null});case"DELETE_USER":return Object(J.a)(Object(J.a)({},e),{},{loading:!0});case"DELETE_USER_SUCCESS":return Object(J.a)(Object(J.a)({},e),{},{loading:!1,current:null});case"RESET_CURRENT_USER":return Object(J.a)(Object(J.a)({},e),{},{current:null});default:return e}},ee={error:void 0,success:void 0},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0,a=t.payload,n=t.type;switch(n){case"ERROR":return Object(J.a)(Object(J.a)({},e),{},{success:void 0,error:a});case"SUCCESS":return Object(J.a)(Object(J.a)({},e),{},{error:void 0,success:a});case"RESET":return ee;default:return e}},ae=Object(X.b)({users:Z,status:te}),ne=Object(X.c)(ae),re=function(e){var t=e.edit;return r.a.createElement("div",{className:"w-100",style:{position:"relative",height:"fa-thermometer-30px"}},r.a.createElement("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"100%"},className:"text-center"},t?r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{variant:"outline-primary",size:"sm"},"Change"),r.a.createElement(V.a,{className:"text-danger"})):r.a.createElement(m.a,{variant:"outline-primary",size:"sm"},"Upload")),r.a.createElement("input",{type:"file",name:"profile",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",opacity:0,cursor:"pointer"}}))},ce=Object(I.b)((function(e){return{current:e.users.current,loading:e.users.loading,status:e.status}}),(function(e){return{getUser:function(t){!function(e,t){t({type:"GET_USER"}),G.GetUser(e).then((function(e){t({type:"GET_USER_SUCCESS",payload:e.data})})).catch((function(e){return t({type:"ERROR",payload:"Error Getting User Data"})}))}(t,e)},addNewUser:function(t){return function(e,t){t({type:"ADD_USER"}),G.AddUser(e).then((function(e){t({type:"ADD_USER_SUCCESS",payload:e.data}),t({type:"SUCCESS",payload:"User added successfully"})})).catch((function(e){return t({type:"ERROR",payload:"Error adding new User"})}))}(t,e)},getAllUser:function(){return L(e)},editUser:function(t,a){return function(e,t,a){a({type:"EDIT_USER"}),G.UpdateUser(e,t).then((function(e){a({type:"EDIT_USER_SUCCESS",payload:e.data}),a({type:"SUCCESS",payload:"User details updated successfully"})})).catch((function(e){return a({type:"ERROR",payload:"Error editing user"})}))}(t,a,e)}}}))((function(e){var t=e.show,a=e.onClose,c=e.edit,l=e.current,u=e.getUser,d=e.addNewUser,E=e.getAllUser,p=e.loading,f=e.status,h=e.editUser,g=Object(n.useState)({name:"",email:"",address:"",contact:"",id:""}),y=Object(s.a)(g,2),S=y[0],b=y[1];console.log(c),r.a.useEffect((function(){c?u(c):b({name:"",email:"",address:"",contact:"",id:""})}),[c]),r.a.useEffect((function(){l&&b(l)}),[l]);var U=function(){S.id;var e=Object(q.a)(S,["id"]);d(e)},v=function(){S.id;var e=Object(q.a)(S,["id"]);h(c,e)};r.a.useEffect((function(){f.success&&E()}),[f.success]);var O=function(e){var t=Object(J.a)(Object(J.a)({},S),{},Object(z.a)({},e.target.name,e.target.value));b(t)};return r.a.createElement(B.a,{show:t,onHide:a,size:"lg"},r.a.createElement(B.a.Body,{className:"bg-light px-5 py-4"},r.a.createElement(o.a,{className:"mt-3"},r.a.createElement(i.a,{md:6,className:"d-flex align-items-center"},r.a.createElement("h6",null," ","".concat(c?"Edit Details":"Add new User"))),r.a.createElement(i.a,{md:6,className:"text-right"},r.a.createElement($.a,{onClick:a}))),r.a.createElement(M.a,{action:"",method:"POST",onSubmit:function(e){e.preventDefault(),c?v():U()},className:"mt-3"},r.a.createElement(o.a,null,r.a.createElement(i.a,{md:4},r.a.createElement("img",{src:Q.a,className:"w-75 mx-auto d-block",alt:"Upload image"}),r.a.createElement(re,null)),r.a.createElement(i.a,{md:8},r.a.createElement(P.a,null,r.a.createElement(H.a,null,"User Name"),r.a.createElement(W.a,{value:S.name,type:"text",onChange:O,name:"name",placeholder:"John Doe",required:!0})),r.a.createElement(P.a,null,r.a.createElement(H.a,null,"Address"),r.a.createElement(W.a,{value:S.address,type:"text",onChange:O,name:"address",placeholder:"New Street, any City, Country",required:!0})))),r.a.createElement(o.a,null,r.a.createElement(i.a,{md:6},r.a.createElement(P.a,null,r.a.createElement(H.a,null,"Contact"),r.a.createElement(W.a,{value:S.contact,type:"text",onChange:O,name:"contact",maxLength:"10",placeholder:"9876543234",required:!0}))),r.a.createElement(i.a,{md:6},r.a.createElement(P.a,null,r.a.createElement(H.a,null,"Email"),r.a.createElement(W.a,{required:!0,value:S.email,type:"text",onChange:O,name:"email",placeholder:"john@example.com"})))),r.a.createElement(P.a,null,r.a.createElement(m.a,{disabled:p,className:"w-100",type:"submit",variant:"primary"},c?"Edit Details":"Add new User")))))})),le=function(e){console.log(ne.getState());var t=Object(n.useState)(!1),a=Object(s.a)(t,2),c=a[0],l=a[1],E=Object(n.useState)(null),p=Object(s.a)(E,2),f=p[0],h=p[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(ce,{edit:f,show:c,onClose:function(){l(!1),ne.dispatch({type:"RESET_CURRENT_USER"})}}),r.a.createElement(v,null),r.a.createElement(u.a,{fluid:!0},r.a.createElement(o.a,{className:"py-5 bg-white shadow-sm"},r.a.createElement(i.a,{className:"mx-auto d-flex justify-content-between align-item-center",md:9},r.a.createElement("h3",null,"User Directory"),r.a.createElement(m.a,{variant:"primary",onClick:function(){l(!0),h(null)}},r.a.createElement("div",{className:"d-flex align-items-center"},r.a.createElement(d.a,{className:"mr-2"})," Add new User")))),r.a.createElement(o.a,{className:"mt-4"},r.a.createElement(i.a,{md:9,sm:12,className:"mx-auto shadow-sm bg-white px-0"},r.a.createElement(F,{onEdit:function(e){h(e),l(!0)}})))))},se=a(92),ue=function(e){var t=Object(n.useState)(!0),a=Object(s.a)(t,2),c=a[0],l=a[1];return r.a.createElement(se.a,{style:{position:"absolute",right:"10px",top:"10px",zIndex:1110,minWidth:"200px"},delay:5e3,show:c,onClose:function(){ne.dispatch({type:"RESET"}),l(!1)}},r.a.createElement(se.a.Header,{className:"d-flex justify-content-between ".concat("success"===e.type?"text-success":"text-danger")},r.a.createElement("strong",null,e.title)),r.a.createElement(se.a.Body,{className:"".concat("success"===e.type?"text-success":"text-danger")},e.message))};var oe=Object(I.b)((function(e){return{success:e.status.success,error:e.status.error}}))((function(e){return r.a.createElement(r.a.Fragment,null,e.success?r.a.createElement(ue,{type:"success",title:"Success",message:e.success}):r.a.createElement(r.a.Fragment,null),e.error?r.a.createElement(ue,{type:"error",title:"Error Occured",message:e.error}):r.a.createElement(r.a.Fragment,null),r.a.createElement(le,null))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I.a,{store:ne},r.a.createElement(oe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[68,1,2]]]);
//# sourceMappingURL=main.a72efcd6.chunk.js.map