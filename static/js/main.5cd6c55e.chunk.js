(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{40:function(e,t,n){"use strict";n.r(t);var s=n(2),c=n(13),r=n.n(c),a=n(3),i=n(15),l=n(0);var o=function(){return Object(l.jsx)("div",{className:"jumbotron jumbotron-fluid",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h1",{className:"display-4",children:"Employee Directory"}),Object(l.jsx)("p",{className:"lead",children:"Its a Jumbotron Yeah !"})]})})};var j=function(e){var t=e.handleInputChange;return Object(l.jsx)("div",{className:"form-group d-flex justify-content-center",children:Object(l.jsx)("input",{onChange:t,name:"Employee",list:"Employees",type:"text",placeholder:"Search"})})},d=n(14),b=n.n(d),u={search:function(){return b.a.get("https://randomuser.me/api/?results=20&inc=picture,name,phone,email,dob&nat=us")}};var h=function(){var e=Object(s.useState)({users:[],filteredUsers:[],search:""}),t=Object(i.a)(e,2),n=t[0],c=t[1];console.log(n.users);var r=function(e){e.preventDefault();var t=n.users.sort((function(e,t){return e.name.first<t.name.first?-1:e.name.first>t.name.first?1:0}));c(Object(a.a)(Object(a.a)({},n),{},{filteredUsers:t}))};Object(s.useEffect)((function(){u.search().then((function(e){c(Object(a.a)(Object(a.a)({},n),{},{users:e.data.results,filteredUsers:e.data.results}))}))}),[]);var d=0,b=n.filteredUsers.map((function(e){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:Object(l.jsx)("img",{src:e.picture.thumbnail,alt:e.name.first})}),Object(l.jsx)("td",{children:e.name.first+" "+e.name.last}),Object(l.jsx)("td",{children:e.email}),Object(l.jsx)("td",{children:e.phone}),Object(l.jsx)("td",{children:e.dob.date})]},d++)}));return Object(l.jsxs)("div",{children:[Object(l.jsx)(o,{}),Object(l.jsx)(j,{handleInputChange:function(e){var t=e.target.value,s=n.users.filter((function(e){return(e.name.first+" "+e.name.last).toLowerCase().includes(t.toLowerCase())}));c(Object(a.a)(Object(a.a)({},n),{},{filteredUsers:s}))}}),Object(l.jsx)("div",{className:"p-5",children:Object(l.jsxs)("table",{className:"table table-striped table-dark",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{scope:"col",children:"Image "}),Object(l.jsxs)("th",{scope:"col",children:["Name",Object(l.jsx)("button",{type:"button",className:"btn btn-link p-0 m-0",onClick:r,children:"\ud83e\uddf0"})]}),Object(l.jsxs)("th",{scope:"col",children:["Email",Object(l.jsx)("button",{type:"button",className:"btn btn-link p-0 m-0",onClick:r,children:"\ud83e\uddf0"})]}),Object(l.jsx)("th",{scope:"col",children:"Phone"}),Object(l.jsx)("th",{scope:"col",children:"DOB"})]})}),Object(l.jsx)("tbody",{children:b})]})})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),s(e),c(e),r(e),a(e)}))};n(39);r.a.render(Object(l.jsx)(h,{}),document.getElementById("root")),m()}},[[40,1,2]]]);
//# sourceMappingURL=main.5cd6c55e.chunk.js.map