(this.webpackJsonpreact_homepage=this.webpackJsonpreact_homepage||[]).push([[0],{151:function(e,t,n){},157:function(e,t,n){},178:function(e,t,n){},526:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(0),r=n.n(c),s=n(28),i=n.n(s),o=(n(151),n(20)),l=n(21),u=n(23),j=n(22),d=n(26),h=n(9),b=n(25),m=n(535),p=n(538),x=n(534),O=n(29),f=Object(c.createContext)(),g=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).getCachedTheme=function(){var e=localStorage.getItem("theme"),t=!0;return null!==e&&(t="light"===e),t},a.cacheTheme=function(e){var t=e?"light":"dark";localStorage.setItem("theme",t)},a.toggleTheme=function(){var e=a.state.isLightTheme;a.setState({isLightTheme:!e})},a.setTheme=function(e){a.setState({isLightTheme:e}),a.cacheTheme(e)},a.state={isLightTheme:a.getCachedTheme(),light:{syntax:"#1a1a1a",ui:"none",bg:"rgb(240, 241, 255)"},dark:{syntax:"#ececec",ui:"none",bg:"rgb(63, 63, 63)"}},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.children;return Object(a.jsx)(f.Provider,{value:Object(O.a)(Object(O.a)({},this.state),{},{toggleTheme:this.toggleTheme,setTheme:this.setTheme,cacheTheme:this.cacheTheme,getCachedTheme:this.getCachedTheme}),children:e})}}]),n}(c.Component),v=(n(157),function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e,a){var c;Object(o.a)(this,n),(c=t.call(this,e,a)).toggleCheckboxChange=function(){var e=c.context.setTheme,t=c.state.isChecked;e(t),c.setState({isChecked:!t})};var r=c.context.getCachedTheme;return c.state={isChecked:!r()},c}return Object(l.a)(n,[{key:"render",value:function(){var e=this.context.isLightTheme,t={color:"#ececec80"},n={color:"rgb(245, 245, 245)"},c=e?t:n,r=e?n:t;return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"sliderholder",children:[Object(a.jsx)("p",{className:"themefont",style:r,children:"Light\xa0"}),Object(a.jsxs)("label",{className:"switch",children:[Object(a.jsx)("input",{type:"checkbox",checked:!e,onChange:this.toggleCheckboxChange}),Object(a.jsx)("span",{className:"slider round"})]}),Object(a.jsx)("p",{className:"themefont",style:c,children:"\xa0Dark\xa0\xa0\xa0"})]})})}}]),n}(c.Component));v.contextType=f;var w=v,y=n(7),k=n.n(y),C=n(10),S=n(71),T=n(16),A=n.n(T),N=function(e){var t="";return[].slice.call(new Uint8Array(e)).forEach((function(e){return t+=String.fromCharCode(e)})),window.btoa(t)},I="".concat("https://andrewohnslandhomepageapi.herokuapp.com","/api"),L=function(){var e=Object(C.a)(k.a.mark((function e(){var t,n,a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.get("".concat(I,"/image/all/details"));case 2:return t=e.sent,n=[{name:"Select image",value:"noId"}],a=t.data.map((function(e){var t=void 0!==e.category?" (".concat(e.category,")"):"";return{name:"".concat(e.name).concat(t),value:e._id}})),e.abrupt("return",[].concat(n,Object(S.a)(a)));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(C.a)(k.a.mark((function e(t){var n,a,c;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.get("".concat(I,"/image/").concat(t));case 2:return n=e.sent,a=n.data,e.next=6,a.map((function(e){return{width:e.width,height:e.height,src:"data:image/jpeg;base64,".concat(N(e.img.data.data)),title:e.name}}));case 6:return c=e.sent,e.abrupt("return",c);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(e){return A.a.post("".concat(I,"/image/add"),e,{withCredentials:!0,validateStatus:function(){return!0}})},W=function(e){return A.a.delete("".concat(I,"/image/delete/").concat(e),{withCredentials:!0,validateStatus:function(){return!0}})},D=function(e,t){return A.a.post("".concat(I,"/user/login"),{username:e,password:t},{withCredentials:!0,headers:{"Content-Type":"application/json"},validateStatus:function(){return!0}})},M=function(){var e=Object(C.a)(k.a.mark((function e(t,n){var a,c;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.get("".concat(I,"/").concat(t,"/").concat(n));case 2:return a=e.sent,c=a.data,e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),P=function(){var e=Object(C.a)(k.a.mark((function e(t){var n,a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.get("".concat(I,"/").concat(t));case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(C.a)(k.a.mark((function e(t){var n,a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.get("".concat(I,"/").concat(t,"/admin"),{withCredentials:!0,validateStatus:function(){return!0}});case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(e,t,n,a){return A.a.post("".concat(I,"/user/change"),{username:e,password:t,newPassword:n,repeatedPassword:a},{withCredentials:!0,headers:{"Content-Type":"application/json"},validateStatus:function(){return!0}})},B=Object(c.createContext)(),_=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).setIsAuth=function(e){a.setState({isAuth:e})},a.getAuthStatus=Object(C.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",A.a.get("".concat(I,"/user/auth"),{withCredentials:!0}).then((function(){return!0})).catch((function(){return!1})).then((function(e){a.setState({isAuth:e})})));case 1:case"end":return e.stop()}}),e)}))),a.state={isAuth:null},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.getAuthStatus()}},{key:"render",value:function(){var e=this.props.children;return Object(a.jsx)(B.Provider,{value:Object(O.a)(Object(O.a)({},this.state),{},{setIsAuth:this.setIsAuth,getAuthStatus:this.getAuthStatus}),children:e})}}]),n}(c.Component),H=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.context.isAuth;return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(m.a,{fixed:"top",collapseOnSelect:!0,expand:"lg",bg:"primary",variant:"dark",children:[Object(a.jsx)(m.a.Brand,{children:"Andre Wohnsland"}),Object(a.jsx)(m.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(a.jsxs)(m.a.Collapse,{id:"responsive-navbar-nav",children:[Object(a.jsxs)(p.a,{className:"mr-auto",children:[Object(a.jsx)(b.LinkContainer,{exact:!0,to:"/",children:Object(a.jsx)(p.a.Link,{children:"Home"})}),Object(a.jsx)(b.LinkContainer,{to:"/projects",children:Object(a.jsx)(p.a.Link,{children:"Projects"})}),Object(a.jsx)(b.LinkContainer,{to:"/blog",children:Object(a.jsx)(p.a.Link,{children:"Blog"})}),Object(a.jsxs)(x.a,{title:"Pictures",id:"collasible-nav-dropdown",children:[Object(a.jsx)(b.LinkContainer,{to:"/pictures/fotography",children:Object(a.jsx)(x.a.Item,{children:"Fotography"})}),Object(a.jsx)(b.LinkContainer,{to:"/pictures/woodwork",children:Object(a.jsx)(x.a.Item,{children:"Woodwork"})})]}),Object(a.jsx)(b.LinkContainer,{to:"/about",children:Object(a.jsx)(p.a.Link,{children:"About"})})]}),Object(a.jsx)(w,{}),Object(a.jsxs)(p.a,{children:[e&&Object(a.jsxs)(x.a,{title:"Admin",id:"collasible-nav-dropdown",children:[Object(a.jsx)(b.LinkContainer,{to:"/admin/projects",children:Object(a.jsx)(x.a.Item,{children:"Edit Projects"})}),Object(a.jsx)(b.LinkContainer,{to:"/admin/blog",children:Object(a.jsx)(x.a.Item,{children:"Edit Blog Article"})}),Object(a.jsx)(b.LinkContainer,{exact:!0,to:"/admin/image",children:Object(a.jsx)(x.a.Item,{children:"Add Images"})}),Object(a.jsx)(b.LinkContainer,{exact:!0,to:"/admin/image/delete",children:Object(a.jsx)(x.a.Item,{children:"Delete Images"})}),Object(a.jsx)(b.LinkContainer,{to:"/admin/changepassword",children:Object(a.jsx)(x.a.Item,{children:"Change Password"})})]}),Object(a.jsx)(p.a.Link,{href:"https://github.com/AndreWohnsland",children:"My Github"})]})]})]})})}}]),n}(c.Component);H.contextType=B;var U=Object(h.o)(H),z=function(){return Object(a.jsx)("div",{className:"footer",children:Object(a.jsxs)("footer",{children:[Object(a.jsxs)("div",{className:"left",children:["\xa9\xa0","".concat((new Date).getFullYear()," A. Wohnsland")]}),Object(a.jsxs)("div",{className:"right",children:["Made with React\xa0",Object(a.jsx)("span",{role:"img","aria-label":"heart",children:"\u2764\ufe0f"})]})]})})},J=n(46),K=function(e){var t=new Intl.DateTimeFormat("en-GB",{weekday:"short",year:"numeric",month:"short",day:"numeric",timeZone:"UTC"}),n=new Date(e);return t.format(n)},Y=function(e){var t=e.element,n=e.elementType,c=K(t.createdAt),r=K(t.updatedAt);return Object(a.jsx)(d.Link,{to:"/".concat(n,"/").concat(t._id),style:{textDecoration:"none"},children:Object(a.jsxs)("div",{className:"card-div",children:[Object(a.jsx)("h3",{className:"card-title",children:t.title}),Object(a.jsx)("span",{className:"card-info",children:c===r?"Created ".concat(K(t.createdAt)):"Updated ".concat(K(t.updatedAt))}),Object(a.jsx)("p",{className:"card-desc",children:t.description})]})})},q=function(e){var t=e.text;return Object(a.jsx)("div",{className:"main-header text-center",children:Object(a.jsx)("h2",{children:t})})},Q=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},Z=function(){return Object(a.jsx)("div",{className:"shimmer-wrapper",children:Object(a.jsx)("div",{className:"shimmer"})})};n(178);var V=function(e){var t=e.type,n="skeleton ".concat(t);return Object(a.jsx)("div",{className:n})},X=function(e){var t=e.theme||"dark";return Object(a.jsxs)("div",{className:"skeleton-wrapper ".concat(t),children:[Object(a.jsxs)("div",{className:"skeleton-article",children:[Object(a.jsx)(V,{type:"title"}),Object(a.jsx)(V,{type:"text"}),Object(a.jsx)(V,{type:"text"}),Object(a.jsx)(V,{type:"text"})]}),Object(a.jsx)(Z,{})]})},$={staleTime:6e4,cacheTime:36e5},ee=function(e){var t=e.elementType,n=e.header;Object(c.useEffect)((function(){document.title="".concat(Q(t)," | Andre Wohnsland")}),[t]);var r=Object(J.a)("".concat(t,"s"),(function(){return P(t)}),Object(O.a)({},$)),s=r.data,i=r.status;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(q,{text:n}),Object(a.jsxs)("div",{className:"main-text",children:["loading"===i&&[1,2,3,4,5].map((function(e){return Object(a.jsx)(X,{theme:"dark"},e)})),"error"===i&&Object(a.jsx)("p",{children:"Error fetching data!"}),"success"===i&&s.map((function(e){return Object(a.jsx)(Y,{element:e,elementType:t},e._id)}))]})]})},te=function(){return Object(c.useEffect)((function(){document.title="Home | Andre Wohnsland"}),[]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(q,{text:"Hi there!"}),Object(a.jsxs)("div",{className:"main-text-page",children:[Object(a.jsx)("p",{children:"Welcome to my little humble homepage. I am Andre, an IoT-Enthusiast, Engineer, Developer, and Explorer! I enjoy spending my free time learning new technologies and tinker around with soft- and hardware of all kinds. That's how this homepage was born. In the process of learning React, I created this page to practise the framework and give me the possibility to present some of my work, as well as create blog entries."}),Object(a.jsxs)("p",{children:["It's nothing big, but it gets better over time as I get better with React and other frameworks. Have a look around, get a glimpse what I do and maybe have a look in some of my projects",Object(a.jsx)("span",{role:"img","aria-label":"smile",children:"\ud83d\ude03"}),". If you want to dive deeper, you can also have a look into my Github!"]}),Object(a.jsx)("p",{children:"In the meantime explore the different section. You can find them in the header. There is a list of some of my projects (mostly programming topics) and a section for blog entries. Also, there are some pictures from my hobby fotography and my other passion, woodworking with resign. For now, that's all, maybe next time you can discover even more information!"})]})]})},ne=function(){return Object(c.useEffect)((function(){document.title="About | Andre Wohnsland"}),[]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(q,{text:"Made with React"}),Object(a.jsxs)("div",{className:"main-text-page",children:[Object(a.jsx)("p",{children:"This page was created while practising and improving my react knowledge. It is also used to present some of my other coding projects and give me the possibility to write blog entries. Here is a list of the mandatory tools and frameworks used in combination with this side."}),Object(a.jsx)("p",{className:"list-header",children:"For the Frontend:"}),Object(a.jsxs)("ul",{className:"list-elements",children:[Object(a.jsx)("li",{children:"React"}),Object(a.jsx)("li",{children:"React Router (Dom)"}),Object(a.jsx)("li",{children:"React (Router) Bootstrap"}),Object(a.jsx)("li",{children:"React Query"}),Object(a.jsx)("li",{children:"React Markdown"}),Object(a.jsx)("li",{children:"React Syntax Highlighter"}),Object(a.jsx)("li",{children:"Axios"})]}),Object(a.jsx)("p",{className:"list-header",children:"For the Backend:"}),Object(a.jsxs)("ul",{className:"list-elements",children:[Object(a.jsx)("li",{children:"Express"}),Object(a.jsx)("li",{children:"MongoDB / Mongoose"}),Object(a.jsx)("li",{children:"CORS"}),Object(a.jsx)("li",{children:"Jsonwebtoken"}),Object(a.jsx)("li",{children:"Cookie Parser"}),Object(a.jsx)("li",{children:"Bcrypt"})]})]})]})},ae=n(138),ce=n.n(ae),re=n(91),se=n(139),ie=n.n(se),oe=n(140),le=n.n(oe),ue=(n(285),n(537)),je=n(533),de=function(e){var t=e.language,n=e.value;return Object(a.jsx)(ue.a,{language:t,style:je.a,children:n})},he=function e(t,n){return"string"===typeof n?t+n:r.a.Children.toArray(n.props.children).reduce(e,t)},be=function(e){var t=e.children,n=e.level,a=r.a.Children.toArray(t).reduce(he,"").toLowerCase().replace(/\W/g,"-");return r.a.createElement("h".concat(n),{id:a,style:{textAlign:"left",padding:"15px 0px 2px 0px"}},t)},me=function(e){var t=e.maxWidth,n=e.sourcedata;return Object(a.jsx)(ce.a,{className:"blog-md",plugins:[ie.a,le.a],escapeHtml:!1,source:n,renderers:{code:de,heading:be,image:function(e){var n=e.alt,c=e.src,r=e.title;return Object(a.jsx)("img",{alt:n,src:c,title:r,style:{maxWidth:t,borderRadius:"10px",display:"block",marginLeft:"auto",marginRight:"auto"}})},inlineMath:function(e){var t=e.value;return Object(a.jsx)(re.a,{math:t})},math:function(e){var t=e.value;return Object(a.jsx)(re.a,{block:!0,math:t})}}})},pe=n(8),xe=function(e){var t=Object(c.useCallback)((function(){var t;return null===e||void 0===e||null===(t=e.current)||void 0===t?void 0:t.offsetWidth}),[e]),n=Object(c.useState)(void 0),a=Object(pe.a)(n,2),r=a[0],s=a[1];return Object(c.useEffect)((function(){var n=function(){s(t())};return e.current&&s(t()),window.addEventListener("resize",n),function(){window.removeEventListener("resize",n)}}),[e,t]),r&&r>25?r-50:r},Oe={staleTime:3e5,cacheTime:36e5,retry:1},fe=function(e){var t,n=e.match,r=e.elementType,s=n.params._id,i=Object(c.useRef)(null),o=xe(i);Object(c.useEffect)((function(){document.title="".concat(Q(r)," | Andre Wohnsland")}),[r]);var l,u,j=Object(J.a)("".concat(r,"?id=").concat(s),(function(){return M(r,s)}),Oe),d=j.data,h=j.status,b="here for more impressions";return(null===d||void 0===d||null===(t=d.link)||void 0===t?void 0:t.includes("github"))&&(b="at Github"),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(q,{text:(l=h,u=d,"loading"===l?"Loading ....":"error"===l?"Error getting data!":"success"===l?u.title:"")}),Object(a.jsxs)("div",{className:"main-text-page",ref:i,children:["error"===h&&"Probably not a valid id :( If you get here from blog or project try getting back and forth again.","success"===h&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("p",{className:"blog-date",children:function(e){return"Created: ".concat(K(e.createdAt)," | Latest update: ").concat(K(e.updatedAt))}(d)}),Object(a.jsx)("p",{className:"blog-description",children:d.description}),Object(a.jsx)("hr",{className:"blog-dividor"}),Object(a.jsx)(me,{sourcedata:d.text,maxWidth:o}),"project"===r&&Object(a.jsxs)("p",{children:["Interested? Look into the project ",Object(a.jsx)("a",{href:d.link,children:b})]})]})]})]})},ge=n(536),ve=n(137),we=function(){var e=Object(h.k)(),t=Object(c.useState)(""),n=Object(pe.a)(t,2),r=n[0],s=n[1],i=Object(c.useState)(""),o=Object(pe.a)(i,2),l=o[0],u=o[1],j=Object(c.useState)(!0),d=Object(pe.a)(j,2),b=d[0],m=d[1],p=Object(c.useContext)(B),x=p.setIsAuth,O=p.isAuth,f=Object(c.useState)(""),g=Object(pe.a)(f,2),v=g[0],w=g[1];function y(){return(y=Object(C.a)(k.a.mark((function t(n){return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.preventDefault(),D(r,l).then((function(t){if("OK"===t.statusText)return x(!0),void e.push("/admin/projects");m(!1),w(t.data.message)})).catch((function(e){m(!1),w(e.data)}));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(c.useEffect)((function(){document.title="Login | Andre Wohnsland"}),[]),!0===O&&e.push("/admin/projects"),Object(a.jsxs)("div",{children:[Object(a.jsx)(q,{text:"Welcome Boss"}),Object(a.jsx)("div",{className:"main-text user-input-container",children:Object(a.jsx)("div",{className:"Login user-form-container",children:Object(a.jsxs)("form",{onSubmit:function(e){return y.apply(this,arguments)},children:[Object(a.jsxs)(ge.a.Group,{controlId:"email",children:[Object(a.jsx)(ge.a.Label,{children:"Name"}),Object(a.jsx)(ge.a.Control,{autoFocus:!0,type:"text",value:r,onChange:function(e){return s(e.target.value)}})]}),Object(a.jsxs)(ge.a.Group,{controlId:"password",children:[Object(a.jsx)(ge.a.Label,{children:"Password"}),Object(a.jsx)(ge.a.Control,{value:l,onChange:function(e){return u(e.target.value)},type:"password"})]}),!b&&Object(a.jsx)("div",{className:"res-error",children:v}),Object(a.jsx)(ve.a,{block:!0,disabled:!(r.length>0&&l.length>0),type:"submit",children:"Login"})]})})})]})},ye=n(52),ke=function(e){var t=e.label,n=e.value,c=e.onChange,r=e.options;return Object(a.jsxs)(ge.a.Group,{controlId:t,children:[Object(a.jsx)(ge.a.Label,{children:t}),Object(a.jsx)(ge.a.Control,{as:"select",value:n,onChange:c,children:r.map((function(e){return Object(a.jsx)("option",{value:e.value,children:e.name},e.value)}))})]})},Ce=function(e){var t=e.label,n=e.name,c=e.value,r=e.onChange;return Object(a.jsxs)(ge.a.Group,{controlId:n,children:[Object(a.jsx)(ge.a.Label,{children:t}),Object(a.jsx)(ge.a.Control,{name:n,type:"text",value:c,onChange:r})]})},Se=function(e){var t=e.label,n=e.name,c=e.value,r=e.onChange;return Object(a.jsxs)(ge.a.Group,{controlId:n,children:[Object(a.jsx)(ge.a.Label,{children:t}),Object(a.jsx)(ge.a.Control,{name:n,as:"textarea",rows:"16",value:c,onChange:r})]})},Te=function(e){var t=e.res,n=e.name,c=e.handleShow,r=t.status>=400?"error-div":"success-div";return Object(a.jsxs)("div",{className:r,children:[Object(a.jsx)("button",{type:"button",className:"button-info",onClick:c,children:"x"}),Object(a.jsx)("h3",{children:"".concat(t.status,", ").concat(t.statusText,":")}),Object(a.jsx)("p",{children:'Data for "'.concat(n,'":')}),Object(a.jsx)("p",{children:t.data.message||t.data})]})},Ae=function(e){var t=e.label,n=e.name,c=e.value,r=e.onChange;return Object(a.jsx)(ge.a.Group,{controlId:n,children:Object(a.jsx)(ge.a.Check,{name:n,type:"checkbox",checked:c,onChange:r,label:t})})},Ne=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).validateSubmit=function(){var e=a.state,t=e.link,n=e.title,c=e.description,r=e.text,s=a.props.elementType;return n.length>0&&c.length>0&&r.length>0&&("project"!==s||t.length>0)},a.handleMessage=function(){a.setState((function(e){return{showMessage:!e.showMessage}}))},a.clearState=function(){a.setState({elementId:"",title:"",description:"",text:"",link:"",draft:!1})},a.loadElements=Object(C.a)(k.a.mark((function e(){var t,n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.elementType,e.next=3,R(t);case 3:n=e.sent,a.setState({elements:n});case 5:case"end":return e.stop()}}),e)}))),a.onSubmit=function(){var e=Object(C.a)(k.a.mark((function e(t){var n,c,r,s,i,o,l,u,j;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=null,c=a.state,r=c.elementId,s=c.title,i=c.description,o=c.text,l=c.link,u=c.draft,j={elementId:r,title:s,description:i,text:o,link:l,draft:u},e.next=6,a.selectApiOption(j);case 6:n=e.sent,a.setState({res:n,showMessage:!0,messageTitle:s}),"OK"===n.statusText&&(a.clearState(),a.loadElements());case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.selectApiOption=function(e){var t=a.state.elementId,n=a.props.elementType;return t?function(e,t,n){return A.a.post("".concat(I,"/").concat(t,"/update/").concat(n),e,{withCredentials:!0,validateStatus:function(){return!0}})}(e,n,t):function(e,t){return A.a.post("".concat(I,"/").concat(t,"/add"),e,{withCredentials:!0,validateStatus:function(){return!0}})}(e,n)},a.handleAnyChange=function(e){a.setState(Object(ye.a)({},e.target.name,e.target.value))},a.handleCheckboxChange=function(e){a.setState(Object(ye.a)({},e.target.name,e.target.checked))},a.selectElement=function(e){var t=a.state.elements,n=a.props.elementType,c=t.filter((function(t){return t._id===e.target.value}))[0];if(void 0===c)a.clearState();else{var r="project"===n?c.link:"";a.setState({elementId:e.target.value,title:c.title,description:c.description,text:c.text,link:r,draft:c.draft})}},a.capitalizeElement=function(){var e=a.props.elementType;return e.charAt(0).toUpperCase()+e.slice(1)},a.state={elements:null,elementId:"",title:"",description:"",text:"",link:"",draft:!1,showMessage:!1,res:null,messageTitle:""},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.loadElements(),document.title="Admin | Andre Wohnsland"}},{key:"render",value:function(){var e=this.context.isAuth,t=this.state,n=t.elements,c=t.showMessage,r=t.res,s=t.messageTitle,i=t.title,o=t.description,l=t.link,u=t.text,j=t.elementId,d=t.draft,h=this.props.elementType,b=this.capitalizeElement,m=this.handleMessage,p=this.selectElement,x=this.handleAnyChange,O=this.handleCheckboxChange,f=this.validateSubmit,g=this.onSubmit,v=[{name:"Add new ".concat(b()),value:""}];return n&&v.push.apply(v,Object(S.a)(n.map((function(e){return{name:e.title,value:e._id}})))),Object(a.jsxs)("div",{children:[Object(a.jsx)(q,{text:"Edit ".concat(b()," Entries")}),Object(a.jsx)("div",{className:"main-text",children:e?Object(a.jsxs)(a.Fragment,{children:[c&&Object(a.jsx)(Te,{res:r,name:s,handleShow:m}),Object(a.jsx)("div",{className:"user-form-container",children:Object(a.jsxs)("form",{onSubmit:g,children:[Object(a.jsx)(ke,{label:"Select your ".concat(h),value:j,onChange:p,options:v}),Object(a.jsx)(Ce,{label:"Title",name:"title",value:i,onChange:x}),Object(a.jsx)(Ce,{label:"Description",name:"description",value:o,onChange:x}),"project"===h&&Object(a.jsx)(Ce,{label:"Link",name:"link",value:l,onChange:x}),Object(a.jsx)(Ae,{label:"This is currently a draft (will not be shown public)",name:"draft",value:d,onChange:O}),Object(a.jsx)(Se,{label:"Text",name:"text",value:u,onChange:x}),Object(a.jsx)(ve.a,{type:"submit",disabled:!f(),children:""===j?"Create":"Change"})]})})]}):Object(a.jsx)("p",{children:"Not authentificated!"})})]})}}]),n}(c.Component);Ne.contextType=B;var Ie=Ne,Le=function(e){var t=e.isAuth,n=e.path,c=e.component;return Object(a.jsx)(a.Fragment,{children:null!==t&&Object(a.jsx)(a.Fragment,{children:t?Object(a.jsx)(h.d,{exact:!0,path:n,component:c}):Object(a.jsx)(h.c,{to:"/"})})})},Ee=function(){var e=Object(c.useState)(""),t=Object(pe.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(""),i=Object(pe.a)(s,2),o=i[0],l=i[1],u=Object(c.useState)(""),j=Object(pe.a)(u,2),d=j[0],h=j[1],b=Object(c.useState)(""),m=Object(pe.a)(b,2),p=m[0],x=m[1],O=Object(c.useState)(!1),f=Object(pe.a)(O,2),g=f[0],v=f[1],w=Object(c.useState)(""),y=Object(pe.a)(w,2),S=y[0],T=y[1];Object(c.useEffect)((function(){document.title="Admin | Andre Wohnsland"}),[]);var A=function(){var e=Object(C.a)(k.a.mark((function e(t){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),G(n,o,d,p).then((function(e){T(e),v(!0)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{children:[Object(a.jsx)(q,{text:"Make it safer"}),Object(a.jsxs)("div",{className:"main-text user-input-container",children:[g&&Object(a.jsx)(Te,{res:S,name:"User change",handleShow:function(){return v(!g)}}),Object(a.jsxs)("div",{className:"Login user-form-container",children:[Object(a.jsx)("p",{children:"Change your password"}),Object(a.jsxs)("form",{onSubmit:A,children:[Object(a.jsx)(ge.a.Group,{controlId:"name",children:Object(a.jsx)(ge.a.Control,{autoFocus:!0,type:"text",placeholder:"Name",value:n,onChange:function(e){return r(e.target.value)}})}),Object(a.jsx)(ge.a.Group,{controlId:"password",children:Object(a.jsx)(ge.a.Control,{value:o,placeholder:"Password",onChange:function(e){return l(e.target.value)},type:"password"})}),Object(a.jsx)(ge.a.Group,{controlId:"newPassword",children:Object(a.jsx)(ge.a.Control,{value:d,placeholder:"New Password",onChange:function(e){return h(e.target.value)},type:"password"})}),Object(a.jsx)(ge.a.Group,{controlId:"repeatedPassword",children:Object(a.jsx)(ge.a.Control,{value:p,placeholder:"Repeat New Password",onChange:function(e){return x(e.target.value)},type:"password"})}),Object(a.jsx)(ve.a,{block:!0,disabled:!(n.length>0&&o.length>0&&d.length>=8&&d===p),type:"submit",children:"Change Password"})]})]}),!(d.length>=8)&&Object(a.jsx)("p",{children:"The password needs to be at least 8 Characters. "}),!(d===p)&&Object(a.jsx)("p",{children:"Both, the new and repeated password needs to be identical. "})]})]})},Fe=function(){var e=Object(c.useState)(""),t=Object(pe.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(null),i=Object(pe.a)(s,2),o=i[0],l=i[1],u=Object(c.useState)("fotography"),j=Object(pe.a)(u,2),d=j[0],h=j[1],b=Object(c.useState)(!1),m=Object(pe.a)(b,2),p=m[0],x=m[1],O=Object(c.useState)(""),f=Object(pe.a)(O,2),g=f[0],v=f[1],w=Object(c.useState)(""),y=Object(pe.a)(w,2),S=y[0],T=y[1];Object(c.useEffect)((function(){document.title="Admin | Andre Wohnsland"}),[]);var A=function(){var e=Object(C.a)(k.a.mark((function e(t){var a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),(a=new FormData).append("file",o),a.append("name",n),a.append("category",d),F(a).then((function(e){v(e),x(!0),T(n),r(""),l(null)}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{children:[Object(a.jsx)(q,{text:"Add Image"}),Object(a.jsxs)("div",{className:"main-text",children:[p&&Object(a.jsx)(Te,{res:g,name:S,handleShow:function(){x(!p)}}),Object(a.jsx)("div",{className:"user-form-container",children:Object(a.jsxs)("form",{onSubmit:A,children:[Object(a.jsx)(Ce,{label:"Name",name:"name",value:n,onChange:function(e){return r(e.target.value)}}),Object(a.jsx)(ke,{label:"Select category",value:d,onChange:function(e){return h(e.target.value)},options:[{value:"fotography",name:"Fotography"},{value:"woodwork",name:"Woodwork"}]}),Object(a.jsx)(ge.a.Group,{children:Object(a.jsx)(ge.a.File,{name:"uploadImage",label:"Please select picture",required:!0,accept:"".concat("image/jpeg"),onChange:function(e){return l(e.target.files[0])}})}),Object(a.jsx)(ve.a,{type:"submit",disabled:!(n.length>0&&null!==o),children:"Upload"})]})})]})]})},We=function(){var e=Object(c.useState)(!1),t=Object(pe.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(""),i=Object(pe.a)(s,2),o=i[0],l=i[1],u=Object(c.useState)(""),j=Object(pe.a)(u,2),d=j[0],h=j[1],b=Object(c.useState)("noId"),m=Object(pe.a)(b,2),p=m[0],x=m[1],O=Object(c.useState)([]),f=Object(pe.a)(O,2),g=f[0],v=f[1],w=function(){var e=Object(C.a)(k.a.mark((function e(){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L();case 2:t=e.sent,v(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){w(),document.title="Admin | Andre Wohnsland"}),[]);var y=function(){var e=Object(C.a)(k.a.mark((function e(t){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),W(p).then((function(e){l(e),h("Image with id: ".concat(p)),r(!0),"OK"===e.statusText&&(x(""),w())}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{children:[Object(a.jsx)(q,{text:"Delete Image"}),Object(a.jsxs)("div",{className:"main-text",children:[n&&Object(a.jsx)(Te,{res:o,name:d,handleShow:function(){r(!n)}}),Object(a.jsx)("div",{className:"user-form-container",children:Object(a.jsxs)("form",{onSubmit:y,children:[Object(a.jsx)(ke,{label:"Select image to delete",value:p,onChange:function(e){return x(e.target.value)},options:g}),Object(a.jsx)(ve.a,{type:"submit",disabled:!("noId"!==p),children:"Delete"})]})})]})]})},De=n(144),Me=function(e){var t=e.theme||"dark";return Object(a.jsxs)("div",{className:"skeleton-wrapper ".concat(t),children:[Object(a.jsx)("div",{className:"skeleton-picture"}),Object(a.jsx)(Z,{})]})},Pe={staleTime:6e5,cacheTime:36e5},Re=function(e){var t=e.title,n=t.toLowerCase();Object(c.useEffect)((function(){document.title="".concat(t," | Andre Wohnsland")}),[t]);var r=Object(J.a)(n,(function(){return E(n)}),Object(O.a)({},Pe)),s=r.data,i=r.status;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(q,{text:t}),Object(a.jsxs)("div",{className:"main-text-picture",children:["loading"===i&&[1,2,3,4,5].map((function(e){return Object(a.jsx)(Me,{theme:"dark"},e)})),"error"===i&&Object(a.jsx)("p",{children:"Error fetching data!"}),"success"===i&&Object(a.jsx)(a.Fragment,{children:s.length>0?Object(a.jsx)(De.a,{photos:s.sort((function(){return Math.random()-.5})),direction:"column"}):Object(a.jsx)("p",{children:"Currently no Pictures here"})})]})]})},Ge=function(){var e=Object(c.useContext)(B).isAuth;return Object(a.jsxs)(h.g,{children:[Object(a.jsx)(h.d,{exact:!0,path:"/",component:te}),Object(a.jsx)(h.d,{path:"/about",component:ne}),Object(a.jsx)(h.d,{exact:!0,path:"/projects",component:function(){return Object(a.jsx)(ee,{elementType:"project",header:"My Projects"})}}),Object(a.jsx)(h.d,{exact:!0,path:"/project/:_id",component:function(e){var t=e.match;return Object(a.jsx)(fe,{match:t,elementType:"project"})}}),Object(a.jsx)(h.d,{exact:!0,path:"/blog",component:function(){return Object(a.jsx)(ee,{elementType:"blog",header:"It's Storytime"})}}),Object(a.jsx)(h.d,{exact:!0,path:"/blog/:_id",component:function(e){var t=e.match;return Object(a.jsx)(fe,{match:t,elementType:"blog"})}}),Object(a.jsx)(h.d,{exact:!0,path:"/pictures/fotography",component:function(){return Object(a.jsx)(Re,{title:"Fotography"})}}),Object(a.jsx)(h.d,{exact:!0,path:"/pictures/woodwork",component:function(){return Object(a.jsx)(Re,{title:"Woodwork"})}}),Object(a.jsx)(h.d,{path:"/admin/login",component:we}),Object(a.jsx)(Le,{path:"/admin/projects",isAuth:e,component:function(){return Object(a.jsx)(Ie,{elementType:"project"})}}),Object(a.jsx)(Le,{path:"/admin/blog",isAuth:e,component:function(){return Object(a.jsx)(Ie,{elementType:"blog"})}}),Object(a.jsx)(Le,{path:"/admin/image/delete",isAuth:e,component:We}),Object(a.jsx)(Le,{path:"/admin/image",isAuth:e,component:Fe}),Object(a.jsx)(Le,{path:"/admin/changepassword",isAuth:e,component:Ee}),Object(a.jsx)(h.c,{from:"*",to:"/"})]})},Be=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.context,t=e.isLightTheme,n=e.light,c=e.dark,r=t?n:c,s={backgroundColor:r.bg,color:r.syntax};return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(d.HashRouter,{children:Object(a.jsxs)("div",{className:"App",children:[Object(a.jsxs)("div",{className:"content-container",style:s,children:[Object(a.jsx)(U,{}),Object(a.jsx)("div",{className:"main",children:Object(a.jsx)(Ge,{})})]}),Object(a.jsx)(z,{})]})})})}}]),n}(c.Component);Be.contextType=f;var _e=Be;n(525);i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(g,{children:Object(a.jsx)(_,{children:Object(a.jsx)(_e,{})})})}),document.getElementById("root"))}},[[526,1,2]]]);
//# sourceMappingURL=main.d1c32bc5.chunk.js.map