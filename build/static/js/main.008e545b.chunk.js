(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{76:function(e,n,t){},77:function(e,n,t){},78:function(e,n,t){},79:function(e,n,t){},87:function(e,n,t){},88:function(e,n,t){},89:function(e,n,t){},90:function(e,n,t){},92:function(e,n,t){"use strict";t.r(n);var i=t(1),c=t.n(i),a=t(49),r=t.n(a),o=(t(76),t(63)),s=t(126),l=(t(77),t(127)),d=(t(78),t(9)),j=t(117),u=t(57),b=t.n(u),x=t(59),m=t.n(x),p=t(54),O=t.n(p),f=t(60),h=t.n(f),v=t(58),g=t.n(v),y=t(21),N=(t(79),t(2)),w=Object(j.a)({selectedNavigation:{"background-color":"red","border-radius":"20px",padding:"5px"},nonSelectedNavigation:{"border-radius":"20px",padding:"5px"}}),S=function(){var e=w(),n=Object(i.useState)("remix"),t=Object(d.a)(n,2),c=t[0],a=t[1],r=function(e){console.log("setting page to "+c),a(e)};return Object(N.jsxs)(l.a,{id:"navigation",children:[Object(N.jsx)(y.b,{to:"/",style:{textDecoration:"none",color:"black"},children:Object(N.jsx)(l.a,{onClick:function(){r("home")},id:"home-icon-container",children:Object(N.jsx)(O.a,{id:"home-icon",className:"home"===c?e.selectedNavigation:e.nonSelectedNavigation,fontSize:"medium"})})}),Object(N.jsx)(y.b,{to:"/library",style:{textDecoration:"none",color:"black"},children:Object(N.jsx)(l.a,{onClick:function(){r("library")},id:"library-icon-container",children:Object(N.jsx)(b.a,{id:"library-icon",className:"remix"===c?e.selectedNavigation:e.nonSelectedNavigation,fontSize:"medium"})})}),Object(N.jsx)(y.b,{to:"/add",style:{textDecoration:"none",color:"black"},children:Object(N.jsx)(l.a,{onClick:function(){r("add")},id:"add-icon-container",children:Object(N.jsx)(g.a,{id:"add-icon",className:"add"===c?e.selectedNavigation:e.nonSelectedNavigation,fontSize:"medium"})})}),Object(N.jsx)(y.b,{to:"/library",style:{textDecoration:"none",color:"black"},children:Object(N.jsx)(l.a,{onClick:function(){r("library")},id:"library-icon-container",children:Object(N.jsx)(m.a,{id:"library-icon",className:"library"===c?e.selectedNavigation:e.nonSelectedNavigation,fontSize:"medium"})})}),Object(N.jsx)(y.b,{to:"/profile",style:{textDecoration:"none",color:"black"},children:Object(N.jsx)(l.a,{onClick:function(){r("profile")},id:"profile-icon-container",children:Object(N.jsx)(h.a,{id:"profile-icon",className:"profile"===c?e.selectedNavigation:e.nonSelectedNavigation,fontSize:"medium"})})})]})},k=t(46),E=t(31),D=t.n(E),C=t(129),A=t(128),B=t(33),F=t(32),L=(t(87),t(88),t(61)),G=t.n(L),I=t(62),z=t.n(I),M=t.p+"static/media/test_drive.fd2c38cf.png",R=t.p+"static/media/vocals.8361b78e.wav",V=t.p+"static/media/bass.39173d87.wav",P=t.p+"static/media/other.da10bb59.wav",J=t.p+"static/media/drums.3a6fae4c.wav",T=function(){console.log("in stem remix");var e=Object(i.useState)(!1),n=Object(d.a)(e,2),t=n[0],c=n[1],a=function(){c((function(e){return!e}))},r=new AudioContext,o=new Audio(P),s=new Audio(R),j=new Audio(V),u=new Audio(J),b=new GainNode(r,{gain:.5}),x=document.getElementById("other-volume"),m=new GainNode(r,{gain:.5}),p=document.getElementById("vocal-volume"),O=new GainNode(r,{gain:.5}),f=document.getElementById("bass-volume"),h=new GainNode(r,{gain:.5}),v=document.getElementById("drums-volume");function g(){return(g=Object(k.a)(D.a.mark((function e(){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.createMediaElementSource(o).connect(b).connect(r.destination),r.createMediaElementSource(s).connect(m).connect(r.destination),r.createMediaElementSource(j).connect(O).connect(r.destination),r.createMediaElementSource(u).connect(h).connect(r.destination);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(){return(y=Object(k.a)(D.a.mark((function e(){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null===x||void 0===x||x.addEventListener("input",(function(e){var n=e.target;b.gain.value=parseFloat(n.value)})),null===p||void 0===p||p.addEventListener("input",(function(e){var n=e.target;m.gain.value=parseFloat(n.value)})),null===f||void 0===f||f.addEventListener("input",(function(e){var n=e.target;O.gain.value=parseFloat(n.value)})),null===v||void 0===v||v.addEventListener("input",(function(e){var n=e.target;h.gain.value=parseFloat(n.value)}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(i.useEffect)((function(){return console.log(t),t?s.play():s.pause(),t?j.play():j.pause(),t?u.play():u.pause(),t?o.play():o.pause(),s.addEventListener("ended",(function(){return c(!1)})),function(){s.removeEventListener("ended",(function(){return c(!1)}))}}),[t]),function(){y.apply(this,arguments)}(),function(){g.apply(this,arguments)}(),Object(N.jsxs)(l.a,{id:"remix-window",children:[Object(N.jsx)(C.a,{id:"stem-remix",children:"Remix"}),Object(N.jsxs)(l.a,{id:"remix-and-sliders",children:[Object(N.jsxs)(l.a,{id:"remix-playing",children:[Object(N.jsx)("img",{id:"remix-playing-cover",src:M,alt:"Cover art of current remix"}),Object(N.jsx)(l.a,{id:"remix-information",children:Object(N.jsxs)(l.a,{display:"flex",flexDirection:"column",children:[Object(N.jsxs)(l.a,{display:"flex",flexDirection:"row",children:[Object(N.jsxs)(l.a,{children:[Object(N.jsx)(C.a,{id:"remix-playing-title",children:"test drive"}),Object(N.jsx)(C.a,{id:"remix-playing-artist",children:"Ariana Grande"})]}),t?Object(N.jsx)(G.a,{onClick:function(){return a()},style:{padding:"0.2em",borderRadius:"20px",alignSelf:"center",color:"white",backgroundColor:"#1DB954"}}):Object(N.jsx)(z.a,{onClick:function(){return a()},style:{alignSelf:"center",padding:"0.2em",borderRadius:"20px",color:"white",backgroundColor:"#1DB954"}})]}),Object(N.jsx)(A.a,{id:"remix-playing-time","aria-label":"Play time",defaultValue:0,valueLabelDisplay:"auto",style:{color:"#1DB954"}})]})})]}),Object(N.jsxs)(l.a,{id:"sliders",children:[Object(N.jsxs)(l.a,{className:"slider",children:[Object(N.jsx)(l.a,{display:"flex",flexDirection:"column",p:2,children:Object(N.jsx)(B.a,{icon:F.c,className:"icon"})}),Object(N.jsx)("input",{type:"range",id:"vocal-volume",min:"0",max:"1",defaultValue:"0.5",step:"0.01"})]}),Object(N.jsxs)(l.a,{className:"slider",children:[Object(N.jsx)(l.a,{display:"flex",flexDirection:"column",p:2,children:Object(N.jsx)(B.a,{icon:F.a,className:"icon"})}),Object(N.jsx)("input",{type:"range",id:"drums-volume",min:"0",max:"1",defaultValue:"0.5",step:"0.01"})]}),Object(N.jsxs)(l.a,{className:"slider",children:[Object(N.jsx)(l.a,{display:"flex",flexDirection:"column",p:2,children:Object(N.jsx)(B.a,{icon:F.b,className:"icon"})}),Object(N.jsx)("input",{type:"range",id:"bass-volume",min:"0",max:"1",defaultValue:"0.5",step:"0.01"})]}),Object(N.jsxs)(l.a,{className:"slider",children:[Object(N.jsx)(l.a,{display:"flex",flexDirection:"column",p:2,children:Object(N.jsx)(B.a,{icon:F.d,className:"icon"})}),Object(N.jsx)("input",{type:"range",id:"other-volume",min:"0",max:"1",defaultValue:"0.5",step:"0.01"})]})]})]})]})},_=(t(89),t(90),function(e){return Object(N.jsxs)(l.a,{id:"remix-component",children:[Object(N.jsxs)(l.a,{id:"song-information",children:[Object(N.jsxs)(l.a,{id:"remix-number-cover",children:[Object(N.jsx)(C.a,{id:"number",children:e.number}),Object(N.jsx)("img",{id:"song-cover-art",src:e.cover,alt:"Covert art of track"})]}),Object(N.jsxs)(l.a,{id:"remix-title-artist",children:[Object(N.jsxs)(C.a,{id:"title",children:[e.title," "]}),Object(N.jsx)(C.a,{id:"artist",children:e.artist})]})]}),Object(N.jsxs)(l.a,{id:"dots",children:[Object(N.jsx)("span",{className:"dot"}),Object(N.jsx)("span",{className:"dot"}),Object(N.jsx)("span",{className:"dot"})]})]})}),q=function(){return Object(N.jsxs)(l.a,{id:"library-window",children:[Object(N.jsx)(C.a,{id:"remixes-navigation",children:" Remixes "}),Object(N.jsx)(C.a,{id:"remixes",children:"Remixes"}),Object(N.jsx)(l.a,{id:"remix-container",children:Object(N.jsx)(_,{number:1,cover:M,title:"test drive",artist:"Ariana Grande"})})]})},H=t(5),K=function(){return Object(N.jsxs)(l.a,{id:"window-container",children:[Object(N.jsxs)(l.a,{id:"window",children:[Object(N.jsx)(H.c,{children:Object(N.jsx)(H.a,{path:"/",element:Object(N.jsx)(T,{})})}),Object(N.jsx)(H.c,{children:Object(N.jsx)(H.a,{path:"/remix",element:Object(N.jsx)(T,{})})}),Object(N.jsx)(H.c,{children:Object(N.jsx)(H.a,{path:"/library",element:Object(N.jsx)(q,{})})})]}),Object(N.jsx)(l.a,{id:"playing-and-navigation-container",children:Object(N.jsx)(S,{})})]})},Q=Object(o.a)({typography:{fontFamily:["Arial"].join(",")}}),U=function(){return Object(i.useEffect)((function(){}),[]),Object(N.jsx)(s.a,{theme:Q,children:Object(N.jsx)("div",{className:"App",children:Object(N.jsx)(K,{})})})},W=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,132)).then((function(n){var t=n.getCLS,i=n.getFID,c=n.getFCP,a=n.getLCP,r=n.getTTFB;t(e),i(e),c(e),a(e),r(e)}))};r.a.render(Object(N.jsx)(c.a.StrictMode,{children:Object(N.jsx)(y.a,{children:Object(N.jsx)(U,{})})}),document.getElementById("root")),W()}},[[92,1,2]]]);
//# sourceMappingURL=main.008e545b.chunk.js.map