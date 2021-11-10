(this["webpackJsonpto-do"]=this["webpackJsonpto-do"]||[]).push([[0],[,,,,function(e,t,n){},,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(2),a=n.n(o),c=n(6),r=n.n(c),s=(n(16),n(4),n(9)),l=n(3);function i(){var e=function(e,t){var n=a.a.useState(!0),o=Object(l.a)(n,2),c=o[0],r=o[1],s=a.a.useState(!1),i=Object(l.a)(s,2),d=i[0],u=i[1],j=a.a.useState(!0),m=Object(l.a)(j,2),h=m[0],b=m[1],f=a.a.useState(t),O=Object(l.a)(f,2),p=O[0],x=O[1];return a.a.useEffect((function(){setTimeout((function(){try{var n,o=localStorage.getItem(e);o?n=JSON.parse(o):(localStorage.setItem(e,JSON.stringify(t)),n=t),x(n),b(!1),r(!0)}catch(d){u(d)}}),1500)}),[t,e,c]),{item:p,saveItem:function(t){try{var n=JSON.stringify(t);localStorage.setItem(e,n),x(t)}catch(d){u(d)}},loading:h,error:d,sincronizeItem:function(){b(!0),r(!1)}}}("TODOS_V1",[]),t=e.item,n=e.saveItem,o=e.sincronizeItem,c=e.loading,r=e.error,i=a.a.useState(""),d=Object(l.a)(i,2),u=d[0],j=d[1],m=a.a.useState(!1),h=Object(l.a)(m,2),b=h[0],f=h[1],O=t.filter((function(e){return!!e.completed})).length,p=t.length,x=[];x=!u.length>=1?t:t.filter((function(e){var t=e.text.toLowerCase(),n=u.toLowerCase();return t.includes(n)}));return{loading:c,error:r,totalTodos:p,completedTodos:O,searchValue:u,setSearchValue:j,searchedTodos:x,addTodo:function(e){if(!t.find((function(t){return t.text===e}))){var o=Object(s.a)(t);o.push({completed:!1,text:e}),n(o)}},completeTodo:function(e){var o=t.findIndex((function(t){return t.text===e})),a=Object(s.a)(t);a[o].completed=!t[o].completed,n(a)},deleteTodo:function(e){var o=t.findIndex((function(t){return t.text===e})),a=Object(s.a)(t);a.splice(o,1),n(a)},openModal:b,setOpenModal:f,sincronizeTodos:o}}var d=n(1);function u(){return Object(d.jsx)("p",{className:"alertMessage",children:"Hubo un error..."})}function j(){return Object(d.jsx)("p",{className:"alertMessage",children:"Crea tu primera tarea!"})}function m(e){var t=e.searchedText;return Object(d.jsxs)("p",{className:"alertMessage",children:["No se encontr\xf3: ",t]})}n(18);function h(e){var t=function(e){var t=a.a.useState(!1),n=Object(l.a)(t,2),o=n[0],c=n[1];return window.addEventListener("storage",(function(e){"TODOS_V1"===e.key&&c(!0)})),{show:o,toggleShow:function(){e(),c(!1)}}}(e.sincronize),n=t.show,o=t.toggleShow;return n?Object(d.jsx)("div",{className:"ChangeAlert",children:Object(d.jsxs)("div",{className:"ChangeAlertContainer",children:[Object(d.jsx)("p",{children:"Hubo cambios!"}),Object(d.jsx)("button",{className:"ChangeAlertButton",onClick:function(){return o(!1)},children:"Refrescar la aplicaci\xf3n"})]})}):null}function b(e){var t=e.children,n=e.loading;return Object(d.jsxs)("header",{className:"app-header",children:[Object(d.jsx)("h1",{className:"TodoTitle",children:"To-do App"}),a.a.Children.toArray(t).map((function(e){return a.a.cloneElement(e,{loading:n})}))]})}n(19);function f(e){var t=e.totalTodos,n=e.completedTodos,o=e.loading;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("h2",{className:"TodoCounter ".concat(o&&"TodoCounter__loading"),children:["Has hecho ",n," de ",t," tareas"]})})}n(20);function O(e){var t=e.searchValue,n=e.setSearchValue,o=e.loading;return Object(d.jsx)("input",{className:"TodoSearch",placeholder:"Buscar tarea",value:t,onChange:function(e){n(e.target.value)},disabled:o})}n(21);function p(e){return Object(d.jsxs)("section",{className:"sectionList",children:[e.error&&e.onError(),e.loading&&e.onLoading(),!e.loading&&!e.totalTodos&&e.onEmptyTodos(),!!e.totalTodos&&!e.searchedTodos.length&&e.onEmptySearchResults(),!e.loading&&!e.error&&e.searchedTodos.map(e.render),Object(d.jsx)("ul",{className:"TodoList"})]})}n(22);var x=n(11);function g(e){return Object(d.jsxs)("li",{className:"TodoItem",children:[Object(d.jsx)(x.a,{className:"TodoCheck ".concat(e.completed&&"IconCheck-active"),onClick:e.onComplete}),Object(d.jsx)("p",{className:"".concat(e.completed&&"TodoItem-completed"),children:e.text}),Object(d.jsx)(x.b,{className:"deleteTodo",onClick:e.onDelete})]})}n(23);function T(e){var t=e.addTodo,n=e.setOpenModal,o=a.a.useState(""),c=Object(l.a)(o,2),r=c[0],s=c[1],i=function(e){e.preventDefault(),r.length<=0||(t(r),n(!1))};return Object(d.jsxs)("form",{onSubmit:i,children:[Object(d.jsx)("label",{}),Object(d.jsx)("textarea",{value:r,onChange:function(e){s(e.target.value)},onKeyDown:function(e){13===e.keyCode?i(e):27===e.keyCode&&n(!1)},placeholder:"Ingresa la tarea..."}),Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{className:"buttonCancel",type:"button",onClick:function(){n(!1)},children:"Cancelar"}),Object(d.jsx)("button",{className:"buttonSubmit",type:"submit",children:"Aceptar"})]})]})}n(24);function v(e){var t=e.openModal,n=e.setOpenModal;return Object(d.jsx)("button",{className:"TodoButton ".concat(t&&"TodoButton__open"),onClick:function(){n(!t)},children:"+"})}n(25);function N(e){var t,n=e.children;return t=e.openModal?"modal open-modal":"modal",r.a.createPortal(Object(d.jsx)("div",{className:t,children:n}),document.getElementById("modal"))}n(26);function S(){return Object(d.jsx)("li",{className:"TodoItem-loading",children:Object(d.jsxs)("div",{className:"LoaderBalls",children:[Object(d.jsx)("span",{className:"LoaderBalls__item"}),Object(d.jsx)("span",{className:"LoaderBalls__item"}),Object(d.jsx)("span",{className:"LoaderBalls__item"})]})})}n(27);var C=n(8);function y(){return Object(d.jsxs)("div",{className:"Footer",children:[Object(d.jsxs)("a",{href:"https://platzi.com/p/matiaschiodo/",target:"__blank",children:[Object(d.jsx)(C.c,{className:"icon"}),"@matiaschiodo"]}),Object(d.jsxs)("a",{href:"https://www.linkedin.com/in/matias-chiodo-308056194/",target:"__blank",children:[Object(d.jsx)(C.b,{className:"icon"}),"@matiaschiodo"]}),Object(d.jsxs)("a",{href:"https://github.com/matiaschiodo",target:"__blank",children:[Object(d.jsx)(C.a,{className:"icon"}),"@matiaschiodo"]})]})}var _=function(){var e=i(),t=e.loading,n=e.error,o=e.totalTodos,a=e.completedTodos,c=e.searchValue,r=e.setSearchValue,s=e.searchedTodos,l=e.addTodo,x=e.completeTodo,C=e.deleteTodo,_=e.openModal,k=e.setOpenModal,I=e.sincronizeTodos;return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)(b,{loading:t,children:[Object(d.jsx)(f,{totalTodos:o,completedTodos:a}),Object(d.jsx)(O,{searchValue:c,setSearchValue:r})]}),Object(d.jsx)(p,{error:n,loading:t,searchedTodos:s,totalTodos:o,onError:function(){return Object(d.jsx)(u,{})},onLoading:function(){return new Array(4).fill().map((function(e,t){return Object(d.jsx)(S,{},t)}))},onEmptyTodos:function(){return Object(d.jsx)(j,{})},onEmptySearchResults:function(){return Object(d.jsx)(m,{searchedText:c})},render:function(e,t){return Object(d.jsx)(g,{text:e.text,completed:e.completed,onComplete:function(){return x(e.text)},onDelete:function(){return C(e.text)}},t)}}),_&&Object(d.jsx)(N,{children:Object(d.jsx)(T,{addTodo:l,setOpenModal:k})}),Object(d.jsx)(v,{setOpenModal:k,openModal:_}),Object(d.jsx)(h,{sincronize:I}),Object(d.jsx)(y,{})]})};r.a.render(Object(d.jsx)(_,{}),document.getElementById("root"))}],[[28,1,2]]]);
//# sourceMappingURL=main.c9e92432.chunk.js.map