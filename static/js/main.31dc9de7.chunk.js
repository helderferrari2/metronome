(this.webpackJsonpmetronome=this.webpackJsonpmetronome||[]).push([[0],{11:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(1),a=c.n(s),i=c(5),o=c.n(i),r=c(2),j=(c(11),c.p+"static/media/high.ebce4639.wav"),l=c.p+"static/media/low.d966949b.wav",d=c(4),b=function(){var e=Object(s.useState)(100),t=Object(r.a)(e,2),c=t[0],a=t[1],i=Object(s.useState)(!1),o=Object(r.a)(i,2),b=o[0],m=o[1],h=Object(s.useState)(0),O=Object(r.a)(h,2),u=O[0],p=O[1],x={highNote:new Audio(j),lowNote:new Audio(l)},v=0;function N(){v%4===0?x.highNote.play():x.lowNote.play(),v+=1}function w(){clearInterval(u),p(0)}return Object(n.jsx)("div",{className:"wrapper",children:Object(n.jsxs)("div",{className:"metronome",children:[Object(n.jsxs)("div",{className:"metronome-display",children:[Object(n.jsx)("h1",{children:c}),Object(n.jsx)("h3",{children:"BPM"})]}),Object(n.jsxs)("div",{className:"metronome-slider",children:[Object(n.jsx)("span",{children:"-"}),Object(n.jsx)("input",{type:"range",className:"slider",min:40,max:200,value:c,onChange:function(e){b&&(m(!b),w()),a(e.target.value)}}),Object(n.jsx)("span",{children:"+"})]}),Object(n.jsx)("div",{className:"metronome-controls",onClick:function(){m(!b),b?w():(p(setInterval(N,60/c*1e3)),v=0)},children:b?Object(n.jsx)(d.b,{}):Object(n.jsx)(d.a,{})})]})})},m=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(b,{})})};o.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(m,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.31dc9de7.chunk.js.map