(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{152:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(13),s=a.n(r),i=(a(82),a(20)),o=a(6),l=(a(83),a(84),a(18)),u=a(19),d=a(26),j=a(25),h=a(2),b=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return Object(h.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(i.b,{className:"navbar-brand",to:"/",children:"Notes"}),Object(h.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(h.jsx)("span",{className:"navbar-toggler-icon"})}),Object(h.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(h.jsxs)("ul",{className:"navbar-nav",children:[Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(i.b,{className:"nav-link",to:"/",children:"Notes"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(i.b,{className:"nav-link",to:"/create",children:"Create Note"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(i.b,{className:"nav-link",to:"/user",children:"Create User"})})]})})]})})}}]),a}(n.Component),p=b,m=a(8),O=a.n(m),x=a(14),f=a(15),v=a.n(f),N=a(159),w=a(160),k=a(73),g=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={notes:[],showHide:!1,noteDelId:""},e.deleteNote=function(){var t=Object(x.a)(O.a.mark((function t(a){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.handleModalShowHide(),t.next=3,v.a.delete("https://practica4-7backend.herokuapp.com/api/notes/"+a);case 3:e.getNotes();case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(u.a)(a,[{key:"handleModalShowHide",value:function(e){this.setState({noteDelId:e}),this.setState({showHide:!this.state.showHide})}},{key:"componentDidMount",value:function(){var e=Object(x.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getNotes();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getNotes",value:function(){var e=Object(x.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("https://practica4-7backend.herokuapp.com/api/notes");case 2:t=e.sent,this.setState({notes:t.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{className:"row",children:[this.state.notes.map((function(t){return Object(h.jsx)("div",{className:"col-md-4 p-2",children:Object(h.jsxs)("div",{className:"card",children:[Object(h.jsxs)("div",{className:"card-header d-flex justify-content-between",children:[Object(h.jsx)("h5",{children:t.title}),Object(h.jsx)(i.b,{className:"btn btn-secondary",to:"/edit/"+t._id,children:"Edit"})]}),Object(h.jsxs)("div",{className:"card-body",children:[Object(h.jsx)("p",{children:t.content}),Object(h.jsx)("p",{children:t.author}),Object(h.jsx)("p",{children:Object(k.a)(t.date)})]}),Object(h.jsx)("div",{className:"card-footer",children:Object(h.jsx)("button",{className:"btn btn-danger",onClick:function(){return e.handleModalShowHide(t._id)},children:"Delete"})})]})},t._id)})),Object(h.jsxs)(N.a,{show:this.state.showHide,children:[Object(h.jsx)(N.a.Header,{closeButton:!0,onClick:function(){return e.handleModalShowHide()},children:Object(h.jsx)(N.a.Title,{children:"Delete note?"})}),Object(h.jsx)(N.a.Body,{children:"Are you sure you want to delete this note?"}),Object(h.jsxs)(N.a.Footer,{children:[Object(h.jsx)(w.a,{variant:"primary",onClick:function(){return e.deleteNote(e.state.noteDelId)},children:"Yes"}),Object(h.jsx)(w.a,{variant:"secondary",onClick:function(){return e.handleModalShowHide()},children:"No"})]})]})]})}}]),a}(n.Component),y=g,S=a(7),C=a(70),H=a.n(C);a(107);var D=function(e){var t=Object(o.g)().id,a=Object(n.useState)([]),c=Object(S.a)(a,2),r=c[0],s=c[1],i=Object(n.useState)(""),l=Object(S.a)(i,2),u=l[0],d=l[1],j=Object(n.useState)(""),b=Object(S.a)(j,2),p=b[0],m=b[1],f=Object(n.useState)(""),N=Object(S.a)(f,2),w=N[0],k=N[1],g=Object(n.useState)(new Date),y=Object(S.a)(g,2),C=y[0],D=y[1],M=Object(n.useState)(!1),U=Object(S.a)(M,2),I=U[0],B=U[1],_=Object(n.useState)(""),A=Object(S.a)(_,2),T=A[0],E=A[1];Object(n.useEffect)(Object(x.a)(O.a.mark((function e(){var a,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("https://practica4-7backend.herokuapp.com/api/users");case 2:if(a=e.sent,s(a.data.map((function(e){return e.username}))),d(a.data[0].username),!t){e.next=15;break}return e.next=8,v.a.get("https://practica4-7backend.herokuapp.com/api/notes/"+t);case 8:n=e.sent,m(n.data.title),k(n.data.content),D(new Date(n.data.date)),d(n.data.author),B(!0),E(t);case 15:case"end":return e.stop()}}),e)}))),[]);var q=function(){var e=Object(x.a)(O.a.mark((function e(t){var a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a={title:p,content:w,date:C,author:u},!I){e.next=7;break}return e.next=5,v.a.put("https://practica4-7backend.herokuapp.com/api/notes/"+T,a);case 5:e.next=9;break;case 7:return e.next=9,v.a.post("https://practica4-7backend.herokuapp.com/api/notes",a);case 9:window.location.href="/";case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsx)("div",{className:"col-md-6 offset-md-3",children:Object(h.jsxs)("div",{className:"card card-body",children:[Object(h.jsx)("h4",{children:"Create a Note"}),Object(h.jsx)("div",{className:"form-group",children:Object(h.jsx)("select",{className:"form-control",name:"userSelected",onChange:function(e){d(e)},value:u,children:r.map((function(e){return Object(h.jsx)("option",{value:e,children:e},e)}))})}),Object(h.jsx)("div",{className:"form-group",children:Object(h.jsx)("input",{type:"text",className:"form-control",placeholder:"Title",name:"title",onChange:function(e){m(e)},value:p,required:!0})}),Object(h.jsx)("div",{className:"form-group",children:Object(h.jsx)("textarea",{name:"content",className:"form-control",placeholder:"Content",onChange:function(e){k(e)},value:w,required:!0})}),Object(h.jsx)("div",{className:"form-group",children:Object(h.jsx)(H.a,{className:"form-control",selected:C,onChange:function(e){D(e)}})}),Object(h.jsx)("form",{onSubmit:q,children:Object(h.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Save Note"})})]})})},M=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={users:[],username:"",showHide:!1,userDelId:""},e.getUsers=Object(x.a)(O.a.mark((function t(){var a;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.get("https://practica4-7backend.herokuapp.com/api/users");case 2:a=t.sent,e.setState({users:a.data});case 4:case"end":return t.stop()}}),t)}))),e.onChangeUsername=function(t){e.setState({username:t.target.value})},e.onSubmit=function(){var t=Object(x.a)(O.a.mark((function t(a){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,v.a.post("https://practica4-7backend.herokuapp.com/api/users",{username:e.state.username});case 3:e.setState({username:""}),e.getUsers();case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.deleteUser=function(){var t=Object(x.a)(O.a.mark((function t(a){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.handleModalShowHide(),t.next=3,v.a.delete("https://practica4-7backend.herokuapp.com/api/users/"+a);case 3:e.getUsers();case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(u.a)(a,[{key:"handleModalShowHide",value:function(e){this.setState({userDelId:e}),this.setState({showHide:!this.state.showHide})}},{key:"componentDidMount",value:function(){var e=Object(x.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getUsers();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-md-4",children:Object(h.jsxs)("div",{className:"card card-body",children:[Object(h.jsx)("h3",{children:"Create New User"}),Object(h.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(h.jsx)("div",{className:"form-group",children:Object(h.jsx)("input",{type:"text",className:"form-control",value:this.state.username,onChange:this.onChangeUsername})}),Object(h.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Save"})]})]})}),Object(h.jsx)("div",{className:"col-md-8",children:Object(h.jsx)("ul",{className:"list-group",children:this.state.users.map((function(t){return Object(h.jsx)("li",{className:"list-group-item list-group-item-action",onDoubleClick:function(){return e.handleModalShowHide(t._id)},children:t.username},t._id)}))})}),Object(h.jsxs)(N.a,{show:this.state.showHide,children:[Object(h.jsx)(N.a.Header,{closeButton:!0,onClick:function(){return e.handleModalShowHide()},children:Object(h.jsx)(N.a.Title,{children:"Delete user?"})}),Object(h.jsx)(N.a.Body,{children:"Are you sure you want to delete this user?"}),Object(h.jsxs)(N.a.Footer,{children:[Object(h.jsx)(w.a,{variant:"primary",onClick:function(){return e.deleteUser(e.state.userDelId)},children:"Yes"}),Object(h.jsx)(w.a,{variant:"secondary",onClick:function(){return e.handleModalShowHide()},children:"No"})]})]})]})}}]),a}(n.Component),U=M;var I=function(){return Object(h.jsxs)(i.a,{children:[Object(h.jsx)(p,{}),Object(h.jsx)("div",{className:"container p-4",children:Object(h.jsxs)(o.c,{children:[Object(h.jsx)(o.a,{path:"/",exact:!0,element:Object(h.jsx)(y,{})}),Object(h.jsx)(o.a,{path:"/edit/:id",element:Object(h.jsx)(D,{})}),Object(h.jsx)(o.a,{path:"/create",exact:!0,element:Object(h.jsx)(D,{})}),Object(h.jsx)(o.a,{path:"/user",exact:!0,element:Object(h.jsx)(U,{})})]})})]})};s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(I,{})}),document.getElementById("root"))},82:function(e,t,a){},84:function(e,t,a){}},[[152,1,2]]]);
//# sourceMappingURL=main.1c69c076.chunk.js.map