(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{38:function(e,t,s){"use strict";s.r(t);var c=s(2),a=s(12),n=s.n(a),r=s(14),i=s(0);var l=function(e){var t=e.firstName,s=e.lastName,c=e.email,a=e.state;return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{className:"first-name",children:t},"1"),Object(i.jsx)("td",{className:"last-name",children:s},"2"),Object(i.jsx)("td",{className:"email",children:c},"3"),Object(i.jsx)("td",{className:"state",children:a},"4")]})})},o=s(13),j=s.n(o);var m=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),s=t[0],a=t[1];return Object(c.useEffect)((function(){j.a.get("https://randomuser.me/api/?results=50&nat=us").then((function(e){a(e.data.results.map((function(e){return{firstName:e.name.first,lastName:e.name.last,email:e.email,state:e.location.state,id:e.login.uuid}})))}))}),[]),Object(i.jsxs)("div",{className:"container mt-4",children:[Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("div",{className:"col",children:Object(i.jsx)("h1",{children:"Employee Directory"})}),Object(i.jsx)("div",{className:"col-3",children:Object(i.jsx)("button",{type:"button",class:"btn btn-primary",onClick:function(e){return function(e){var t=s.map((function(e){return e})).sort((function(e,t){return e.lastName>=t.lastName?1:-1}));a(t)}()},children:"Sort by last name."})}),Object(i.jsx)("div",{className:"col-3",children:Object(i.jsx)("div",{class:"input-group mb-3",children:Object(i.jsx)("input",{type:"text",onChange:function(e){!function(e){var t=e.target.value.toLowerCase();a(s.filter((function(e){return e.state.toLowerCase().includes(t)})))}(e)},className:"form-control",placeholder:"Filter by state."})})})]}),Object(i.jsxs)("table",{className:"table",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{scope:"col",children:"First"}),Object(i.jsx)("th",{scope:"col",children:"Last"}),Object(i.jsx)("th",{scope:"col",children:"Email"}),Object(i.jsx)("th",{scope:"col",children:"State"})]})}),Object(i.jsx)("tbody",{children:s.map((function(e){return Object(i.jsx)(l,{firstName:e.firstName,lastName:e.lastName,email:e.email,state:e.state},e.id)}))})]})]})};n.a.render(Object(i.jsx)(m,{}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.a170a99b.chunk.js.map