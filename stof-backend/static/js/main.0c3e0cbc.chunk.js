(this["webpackJsonpstof-frontend"]=this["webpackJsonpstof-frontend"]||[]).push([[0],{53:function(e,t,n){},54:function(e,t,n){},81:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(16),s=n.n(r),o=(n(53),n.p,n(54),n(90)),l=n(92),i=n(20),j=n(6),d=(n(85),n(86)),b=n(3);var u=n(43),h=n(32),m=n.n(h),O=n(44),x=n(15),p=n(18),f=n.n(p),v=n(87),g=n(91),y=n(88),C=n(46),w=n(45),E={local:"http://localhost:8000"},k=function(e,t){console.log("Uploading blob: ".concat(e.blob));var n=new FormData;n.append("audio",e.blob,"audio.mp3"),f.a.post("".concat(E.local,"/html/audio"),n).then((function(e){console.log(e),e.data.transcript&&t(e.data.transcript)}))};var B=function(){var e=c.a.useState(null),t=Object(x.a)(e,2),n=t[0],a=t[1],r=c.a.useState(!1),s=Object(x.a)(r,2),o=s[0],l=s[1],i=c.a.useState(null),j=Object(x.a)(i,2),h=j[0],p=j[1],f=c.a.useState(""),E=Object(x.a)(f,2),B=E[0],L=E[1],S=function(){var e=Object(O.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:k(h,L);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=["email","password","address","phone"];return c.a.useEffect((function(){if(B.startsWith("select")){var e=B.split("select")[1].trim().toLowerCase();if(a(e),document.getElementById(e)){document.getElementById(e).style.backgroundColor="#DAF7A6";var t,c=Object(u.a)(I);try{for(c.s();!(t=c.n()).done;){var r=t.value;r!==e&&(document.getElementById(r).style.backgroundColor="transparent")}}catch(l){c.e(l)}finally{c.f()}}}else if(B.startsWith("insert")){var s=B.split("insert")[1].trim().toLowerCase();document.getElementById(n)&&(document.getElementById(n).value=s)}else if(B.startsWith("clear")){var o=B.split("clear")[1].trim().toLowerCase();document.getElementById(o)&&(document.getElementById(o).value="")}}),[B]),Object(b.jsxs)(v.a,{className:"mt-5",children:[Object(b.jsx)("div",{children:"Welcome to forms"}),Object(b.jsx)(v.a,{className:"my-4",children:Object(b.jsxs)(g.a,{children:[Object(b.jsxs)(y.a,{children:[Object(b.jsx)(C.a,{children:Object(b.jsxs)(g.a.Group,{children:[Object(b.jsx)(g.a.Label,{children:"Email"}),Object(b.jsx)(g.a.Control,{id:I[0],type:"email",placeholder:"Enter email"})]})}),Object(b.jsx)(C.a,{children:Object(b.jsxs)(g.a.Group,{children:[Object(b.jsx)(g.a.Label,{children:"Password"}),Object(b.jsx)(g.a.Control,{id:I[1],type:"password",placeholder:"Enter password"})]})})]}),Object(b.jsxs)(y.a,{children:[Object(b.jsx)(C.a,{children:Object(b.jsxs)(g.a.Group,{children:[Object(b.jsx)(g.a.Label,{children:"Address"}),Object(b.jsx)(g.a.Control,{id:I[2],as:"textarea",rows:3})]})}),Object(b.jsx)(C.a,{children:Object(b.jsxs)(g.a.Group,{children:[Object(b.jsx)(g.a.Label,{children:"Phone"}),Object(b.jsx)(g.a.Control,{type:"number",id:I[3]})]})})]}),Object(b.jsx)(d.a,{variant:"primary",type:"button",onClick:S,children:"Submit"})]})}),Object(b.jsx)(v.a,{className:"my-4",children:Object(b.jsxs)("div",{children:[Object(b.jsx)(w.ReactMic,{record:o,className:"sound-wave",onStop:function(e){console.log("recordedBlob is: ",e),p(e)},onData:function(e){},strokeColor:"transparent",backgroundColor:"transparent",channelCount:1,mimeType:"audio/wav"}),Object(b.jsx)(d.a,{onClick:function(){l(!0)},type:"button",children:"Start"}),Object(b.jsx)(d.a,{onClick:function(){l(!1)},type:"button",children:"Stop"})]})})]})};n(81);n(89);var L=function(){return Object(b.jsx)(c.a.Fragment,{children:Object(b.jsxs)(i.a,{children:[Object(b.jsxs)(o.a,{bg:"light",children:[Object(b.jsx)(o.a.Brand,{href:"#home",className:"mx-4",children:"STOF"}),Object(b.jsx)(o.a.Toggle,{"aria-controls":"custom-navbar-nav"}),Object(b.jsx)(o.a.Collapse,{children:Object(b.jsx)(l.a,{className:"d-flex justify-content-center",children:Object(b.jsx)(l.a.Item,{className:"mx-4",children:Object(b.jsx)(l.a.Link,{href:"/",children:"HTML Form"})})})})]}),Object(b.jsx)(j.c,{children:Object(b.jsx)(j.a,{exact:!0,path:"/",children:Object(b.jsx)(B,{})})})]})})};n(82);var S=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(L,{})})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,93)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(S,{})}),document.getElementById("root")),I()}},[[83,1,2]]]);
//# sourceMappingURL=main.0c3e0cbc.chunk.js.map