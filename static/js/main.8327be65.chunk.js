(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{28:function(e,t,a){},29:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(1),r=a.n(c),s=a(20),o=a.n(s),i=a(10),l=a.n(i),u=a(12),d=a(6),m=(a(28),a(13)),j=a(9),p=(a(29),function(e){if(-1===e.indexOf("-"))return e;var t=e.split("-");if(1===t[1].length){var a=t[1].split("")[0].toUpperCase();return"".concat(t[0],"-").concat(a)}return t.length>=2?t[0]:"mime"===t[1]||"rime"===t[1]?"Mr. ".concat(t[1].replace(/^\w/,(function(e){return e.toUpperCase()}))):"jr"===t[1]?"Mime Jr.":e}),b=function(e){var t=e.name,a=e.types,r=e.dexNumber,s=e.sprite,o=Object(c.useState)(""),i=Object(d.a)(o,2),l=i[0],u=i[1],b=p(t);return Object(c.useEffect)((function(){var e,t=[],n=Object(m.a)(a);try{for(n.s();!(e=n.n()).done;){var c=e.value;null!=c.type.name&&t.push(c.type.name)}}catch(r){n.e(r)}finally{n.f()}u(t.length>1?"linear-gradient(to right, var(--".concat(t[0],"1), var(--").concat(t[1],"1)"):"linear-gradient(var(--".concat(t[0],"1), var(--").concat(t[0],"1)"))}),[a]),Object(n.jsx)("div",{className:"pokemon",children:Object(n.jsx)(j.b,{to:"/pokemon/".concat(r),className:"pokemon__link",children:Object(n.jsxs)("div",{className:"pokemon__card pokemon--".concat(r),style:{backgroundImage:l},children:[Object(n.jsx)("img",{src:s,className:"pokemon__sprite",alt:t}),Object(n.jsxs)("div",{className:"pokemon__data",children:[Object(n.jsx)("div",{className:"pokemon__id",children:"".concat(r)}),Object(n.jsx)("hr",{className:"pokemon__hr"}),Object(n.jsx)("div",{className:"pokemon__name",children:b})]})]})})})},f=(a(35),function(e){return e.isLoading?Object(n.jsx)("div",{className:"loading",children:Object(n.jsx)("h2",{className:"loading__loadingText",children:"Loading..."})}):Object(n.jsx)(n.Fragment,{})}),h=(a(36),function(e){var t=e.searchOnChange;return Object(n.jsx)("input",{type:"text",name:"",placeholder:"Search...",id:"",onChange:function(e){return t(e.target.value)},className:"search-bar"})}),x=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),a=t[0],r=t[1],s=Object(c.useState)([]),o=Object(d.a)(s,2),i=o[0],m=o[1],j=Object(c.useState)(!1),p=Object(d.a)(j,2),x=p[0],O=p[1];Object(c.useEffect)((function(){var e=function(){var e=Object(u.a)(l.a.mark((function e(){var t,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),t=new Array(898).fill("").map((function(e,t){return"https://pokeapi.co/api/v2/pokemon/".concat(t+1)})),e.prev=2,e.next=5,Promise.all(t.map((function(e){return fetch(e)})));case 5:return a=e.sent,e.next=8,Promise.all(a.map((function(e){return e.json()})));case 8:n=e.sent,r((function(e){return e.concat(n)})),m((function(e){return e.concat(n)})),O(!1),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0),alert("There was an error with the database, please try again later.\n\t\t\t\t\t\nYou may search a specific pokemon by adding /pokemon/# where # is their dex number to the url\n\t\t\t\t\t\nYou may also search by using their name in place of the dex number");case 18:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(){return e.apply(this,arguments)}}();a.length<898&&e()}),[]);return 0===a.length?Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("h1",{className:"title",children:"Pokedex"}),Object(n.jsx)(f,{isLoading:x})]}):Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("h1",{className:"title",children:"Pokedex"}),Object(n.jsx)(h,{searchOnChange:function(e){console.log("hi"),r(a.filter((function(e){return null}))),r((function(e){return e.concat(i)}));var t=a.filter((function(t){return""===e||t.name.toLowerCase().includes(e.toLowerCase())||t.id.toString().includes(e)?t:null}));r(t)}}),Object(n.jsx)("div",{className:"pokedex",children:a.map((function(e){return Object(n.jsx)(b,{dexNumber:e.id,types:e.types,name:e.name,sprite:e.sprites.front_default},e.id)}))})]})},O=(a(37),a(38),function(e){var t=e.baseStats,a=e.types;return Object(n.jsxs)("div",{className:"stat-chart",children:[Object(n.jsx)("div",{className:"stat-chart__base-stat-name-container",children:t.map((function(e){return Object(n.jsxs)("div",{className:"stat-chart__base-stat-name",children:["".concat(e.baseStatName,": ")," \xa0"]},"".concat(e.baseStatName,"StatName"))}))}),Object(n.jsx)("div",{className:"stat-chart__base-stat-value-container",children:t.map((function(e){return Object(n.jsxs)("div",{className:"stat-chart__base-stat",children:[Object(n.jsx)("div",{className:"stat-chart__base-stat-value",children:e.value<100?Object(n.jsxs)("span",{children:["".concat(e.value)," \xa0"]}):Object(n.jsx)("span",{children:" ".concat(e.value)})}),Object(n.jsx)("div",{className:"stat-chart__base-stat-line",style:{width:"".concat(e.value<=125?100*e.value/125:100,"%"),backgroundColor:"var(--".concat(a[0],"4")}})]},"".concat(e.baseStatName,"StatValue"))}))}),Object(n.jsx)("div",{className:"stat-chart__base-stat-value-bar"})]})}),v=function(e){var t=e.pokemon,a=e.dexNumber,r=e.name,s=e.sprite,o=e.stats,i=Object(c.useState)(""),l=Object(d.a)(i,2),u=l[0],j=l[1],b=Object(c.useState)([]),f=Object(d.a)(b,2),h=f[0],x=f[1],v=Object(c.useState)([]),k=Object(d.a)(v,2),_=k[0],N=k[1];Object(c.useEffect)((function(){var e,a=Object(m.a)(t.types);try{var n=function(){var t=e.value;null!=t.type.name&&-1===h.indexOf(t.type.name)&&x((function(e){return e.concat(t.type.name)}))};for(a.s();!(e=a.n()).done;)n()}catch(c){a.e(c)}finally{a.f()}}),[]),Object(c.useEffect)((function(){for(var e=["HP","Attack","Defense","SpAtk","SpDef","Speed"],t=function(t){N((function(a){return a.concat({baseStatName:e[t],value:o[t].base_stat})}))},a=0;a<e.length;a++)t(a)}),[]),Object(c.useEffect)((function(){j(h.length>1?"linear-gradient(to right, var(--".concat(h[0],"1), var(--").concat(h[1],"1)"):"linear-gradient(var(--".concat(h[0],"1), var(--").concat(h[0],"1)"))}),[h]);var g=p(r);return Object(n.jsx)("div",{className:"pokemon-info-card",children:Object(n.jsxs)("div",{className:"pokemon-info-card__card",style:{backgroundImage:u},children:[Object(n.jsx)("div",{className:"pokemon-info-card__sprite-container",children:Object(n.jsx)("img",{src:s,className:"pokemon-info-card__sprite",alt:r})}),Object(n.jsxs)("div",{className:"pokemon-info-card__info",children:[Object(n.jsx)("div",{className:"pokemon-info-card__id",children:"".concat(a,": ").concat(g)}),Object(n.jsx)("div",{className:"pokemon-info-card__types",children:h.map((function(e){return Object(n.jsx)("div",{className:"pokemon-info-card__type-card",style:{backgroundImage:"linear-gradient(var(--".concat(e,"1), var(--").concat(e,"2))"),border:"2px solid var(--".concat(e,"3)")},children:e},e)}))}),Object(n.jsx)(O,{baseStats:_,types:h})]})]})})},k=(a(39),function(e){var t=e.match,a=Object(c.useState)(),r=Object(d.a)(a,2),s=r[0],o=r[1];return Object(c.useEffect)((function(){(function(){var e=Object(u.a)(l.a.mark((function e(){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t.params.dexNumber?"https://pokeapi.co/api/v2/pokemon/".concat(t.params.dexNumber):"https://pokeapi.co/api/v2/pokemon/".concat(t.params.name));case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,o(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t.params.dexNumber,t.params.name]),s?Object(n.jsxs)("div",{className:"pokemon-info",children:[Object(n.jsx)("div",{className:"pokemon-info__container",children:Object(n.jsx)(v,{dexNumber:s.id,pokemon:s,name:s.name,sprite:s.sprites.other["official-artwork"].front_default,stats:s.stats})}),Object(n.jsx)(j.b,{to:"/",className:"pokemon-info__go-home",children:"Go home"})]}):""}),_=(a(40),a(2)),N=function(){return Object(n.jsx)(j.a,{basename:"/Pokedex",children:Object(n.jsxs)(_.c,{children:[Object(n.jsx)(_.a,{path:"/",exact:!0,component:x}),Object(n.jsx)(_.a,{path:"/pokemon/:dexNumber",exact:!0,component:k}),Object(n.jsx)(_.a,{path:"/pokemon/:name",exact:!0,component:k}),Object(n.jsx)(_.a,{path:"/",render:function(){return Object(n.jsx)("div",{style:{color:"var(--nord6)"},children:"404 Page Not Found"})}})]})})};o.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(N,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.8327be65.chunk.js.map