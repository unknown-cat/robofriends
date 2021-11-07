(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(6),c=n.n(r),i=n(8),s=n(7),a=n(12),l=n(13),u=(n(23),n(2)),h=n(3),d=n(5),b=n(4),j="CHANGE_SEARCHFIELD",f="REQUEST_ROBOTS_PENDING",g="REQUEST_ROBOTS_SUCCESS",p="REQUEST_ROBOTS_FAILED",v=function(e){var t;e({type:f}),(t="https://jsonplaceholder.typicode.com/users",fetch(t).then((function(e){return e.json()}))).then((function(t){return e({type:g,payload:t})})).catch((function(t){return e({type:p,payload:t})}))},O=n(1),w=function(e){var t=e.name,n=e.email,o=e.id;return Object(O.jsxs)("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5",children:[Object(O.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(o,"?size=200x200"),width:"200",height:"200"}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{children:t}),Object(O.jsx)("p",{children:n})]})]})},m=function(e){var t=e.robots;return console.log("CardList"),Object(O.jsx)("div",{children:t.map((function(e,n){return Object(O.jsx)(w,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))})},y=function(e){e.searchfield;var t=e.searchChange;return console.log("SearchBox"),Object(O.jsx)("div",{className:"pa2",children:Object(O.jsx)("input",{"aria-label":"Search",className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})})},x=function(e){return console.log("Scroll"),Object(O.jsx)("div",{style:{overflow:"scroll",border:"5px solid black",height:"800px"},children:e.children})},k=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(e){var o;return Object(u.a)(this,n),(o=t.call(this,e)).state={hasError:!1},o}return Object(h.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return console.log("ErrorBoundary"),this.state.hasError?Object(O.jsx)("h1",{children:"Something went wrong."}):this.props.children}}]),n}(o.Component),C=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(e){var o;return Object(u.a)(this,n),(o=t.call(this,e)).state={count:1},o}return Object(h.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return this.state.count!==t.count}},{key:"render",value:function(){var e=this;return console.log("counter"),Object(O.jsxs)("button",{color:this.props.color,onClick:function(){return e.setState((function(e){return{count:e.count+1}}))},children:["Count: ",this.state.count]})}}]),n}(o.Component),S=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return!1}},{key:"render",value:function(){return console.log("header"),Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(O.jsx)(C,{})]})}}]),n}(o.Component),E=S,R=(n(25),function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).state={count:1},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.robots,n=e.searchField,o=e.onSearchChange,r=e.isPending,c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(O.jsxs)("div",{className:"tc",children:[Object(O.jsx)(E,{count:this.state.count}),Object(O.jsx)(y,{searchChange:o}),Object(O.jsx)(x,{children:r?Object(O.jsx)("h1",{children:"Loading"}):Object(O.jsx)(k,{children:Object(O.jsx)(m,{robots:c})})})]})}}]),n}(o.Component)),N=Object(s.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending}}),(function(e){return{onSearchChange:function(t){return e((n=t.target.value,{type:j,payload:n}));var n},onRequestRobots:function(){return v(e)}}}))(R),L=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function P(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var U={searchField:""},F={robots:[],isPending:!0},T=(n(26),Object(l.createLogger)()),W=Object(i.b)({requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case f:return Object.assign({},e,{isPending:!0});case g:return Object.assign({},e,{robots:t.payload,isPending:!1});case p:return Object.assign({},e,{error:t.payload});default:return e}},searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.type===j?Object.assign({},e,{searchField:t.payload}):e}}),B=Object(i.c)(W,Object(i.a)(a.a,T));c.a.render(Object(O.jsx)(s.a,{store:B,children:Object(O.jsx)(N,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robofriends",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/robofriends","/service-worker.js");L?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):P(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):P(t,e)}))}}()}},[[27,1,2]]]);
//# sourceMappingURL=main.720889b6.chunk.js.map