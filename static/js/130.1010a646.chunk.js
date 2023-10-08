"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[130],{9130:function(n,e,r){r.r(e),r.d(e,{default:function(){return K}});var t,i,o,a,u,c,d,p=r(2791),s=r(9434),l=r(168),x=r(4112),f=x.Z.div(t||(t=(0,l.Z)(["\n  width: 450px;\n  display: flex;\n  justify-content: center;\n  border-radius: 6px;\n  gap: 10px;\n  flex-direction: column;\n  align-items: center;\n  margin: 0 auto;\n  margin-top: 30px;\n  margin-bottom: 30px;\n"]))),m=x.Z.input(i||(i=(0,l.Z)(["\npadding: 5px 0px 5px 10px ;\nmargin-left: 15px;\nborder-radius: 4px;\nwidth: 350px;\nborder: 1px solid rgb(96, 96, 96);\n  }\n"]))),g=r(4808),b=r(3329),h=function(){var n=(0,s.I0)(),e=(0,s.v9)((function(n){return n.filter}));return(0,b.jsxs)(f,{children:[(0,b.jsx)("p",{children:"Find contacts by name"}),(0,b.jsx)(m,{name:"search",type:"text",value:e,onChange:function(e){n((0,g.T)(e.currentTarget.value.toLowerCase()))}})]})},Z=r(9135),y=x.Z.ul(o||(o=(0,l.Z)(["\n  display: flex;\n  justify-content: center;\n  margine: 0, auto;\n  gap: 15px;\n"]))),j=x.Z.li(a||(a=(0,l.Z)(["\n  display: flex;\n  justify-content: space-between;\n  color: black;\n  font-weight: 600;\n"]))),v=x.Z.p(u||(u=(0,l.Z)(["\n  margin: 0px;\n"]))),w=x.Z.button(c||(c=(0,l.Z)(["\n  display: inline-block;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-left: 15px;\n  padding: 0;\n  background-color: transparent;\n  cursor: pointer;\n  border: none;\n  outline: none;\n"]))),k=(0,x.Z)(Z.Xm5)(d||(d=(0,l.Z)(["\n  width: 20px;\n  height: 20px;\n  &:hover,\n  &:focus {\n    color: rgb(181, 181, 127);\n  }\n"]))),C=r(3634),F=function(){var n=(0,s.v9)((function(n){return n.contacts.items})),e=(0,s.v9)((function(n){return n.filter})),r=(0,s.I0)(),t=n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}));return(0,b.jsx)(y,{children:t.map((function(n){var e=n.id,t=n.name,i=n.number;return(0,b.jsxs)(j,{children:[(0,b.jsxs)(v,{children:[t,": ",i]}),(0,b.jsx)(w,{type:"button",onClick:function(){return r((0,C.GK)(e))},children:(0,b.jsx)(k,{})})]},e)}))})},I=r(1413),L=r(887),N=r(1686),_=r.n(N),q=r(9133),G=function(n){return n.contacts.items};function T(){var n=(0,s.v9)(G),e=(0,s.I0)(),r=(0,L.cI)(),t=r.register,i=r.handleSubmit,o=r.reset;return(0,b.jsxs)(q.Gq,{onSubmit:i((function(r){var t=r.name,i=r.number;return t&&i?n.find((function(n){return n.name===t}))?_().Notify.failure("".concat(t," is already in contacts."),100):(e((0,C.uK)({name:t,number:i})),e((0,g.T)("")),void o()):_().Notify.failure("Name and number are required.",100)})),children:[(0,b.jsx)("label",{htmlFor:"name",children:"Name"}),(0,b.jsx)(q.Fy,(0,I.Z)((0,I.Z)({},t("name")),{},{type:"text",id:"name"})),(0,b.jsx)("label",{htmlFor:"number",children:"Number"}),(0,b.jsx)(q.Fy,(0,I.Z)((0,I.Z)({},t("number")),{},{type:"tel",id:"number"})),(0,b.jsx)(q.OL,{type:"submit",children:"Add contact"})]})}var K=function(){var n=(0,s.I0)();return(0,p.useEffect)((function(){n((0,C.yF)())}),[n]),(0,b.jsxs)("section",{children:[(0,b.jsx)(T,{}),(0,b.jsx)(h,{}),(0,b.jsx)(F,{})]})}},9133:function(n,e,r){r.d(e,{Bc:function(){return l},Fy:function(){return p},Gq:function(){return d},OL:function(){return s}});var t,i,o,a,u=r(168),c=r(4112),d=c.Z.form(t||(t=(0,u.Z)(["\n  width: 300px;\n  display: flex;\n  flex-direction: column;\n  border-radius: 6px;\n  padding: 16px 32px;\n  margin-left: auto;\n  margin-right: auto;\n  gap: 10px;\n"]))),p=c.Z.input(i||(i=(0,u.Z)(["\n  padding: 10px;\n  border-radius: 6px;\n  background-color: white;\n"]))),s=c.Z.button(o||(o=(0,u.Z)(["\n  margin-top: 10px;\n  padding: 10px;\n  border-radius: 6px;\n  background-color: beige;\n  font-weight: inherit;\n  letter-spacing: inherit;\n  padding: 8px;\n  &:focus,\n  &:hover {\n    background-color: rgb(232, 232, 185);\n  }\n"]))),l=c.Z.p(a||(a=(0,u.Z)(["\n  margin: 0px;\n  padding: 0px;\n"])))}}]);
//# sourceMappingURL=130.1010a646.chunk.js.map