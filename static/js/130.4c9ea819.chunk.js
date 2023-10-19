"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[130],{9130:function(n,e,r){r.r(e),r.d(e,{default:function(){return K}});var t,o,a,i,c,d,s,u=r(2791),p=r(9434),x=r(168),f=r(4112),l=f.Z.div(t||(t=(0,x.Z)(["\n  width: 450px;\n  display: flex;\n  justify-content: center;\n  border-radius: 6px;\n  gap: 10px;\n  flex-direction: column;\n  align-items: center;\n  margin: 0 auto;\n  margin-top: 30px;\n  margin-bottom: 30px;\n"]))),m=f.Z.input(o||(o=(0,x.Z)(["\n  width: 250px;\n  border-radius: 6px;\n  outline: none;\n  border: 1px solid green;\n  padding: 5px;\n  background-color: #ffffff;\n  box-shadow: 1px 2px 6px 0px rgba(33, 83, 60, 0.5);\n  margin-bottom: 20px;\n\n  @media screen and (min-width: 768px) {\n    & {\n      width: 500px;\n    }\n  }\n\n  &:focus {\n    background-color: #fff;\n\n    color: green;\n    border-color: #00ff00;\n  }\n\n  font-size: 18px;\n"]))),b=r(4808),h=r(3329),g=function(){var n=(0,p.I0)(),e=(0,p.v9)((function(n){return n.filter}));return(0,h.jsxs)(l,{children:[(0,h.jsx)("p",{children:"Find contacts by name"}),(0,h.jsx)(m,{name:"search",type:"text",value:e,onChange:function(e){n((0,b.T)(e.currentTarget.value.toLowerCase()))}})]})},Z=r(9135),w=f.Z.ul(a||(a=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  gap: 15px;\n"]))),y=f.Z.li(i||(i=(0,x.Z)(["\n  justify-content: center;\n  align-items: center;\n  gap: 16px;\n  display: flex;\n  justify-content: space-between;\n  color: black;\n  font-weight: 600;\n"]))),j=f.Z.p(c||(c=(0,x.Z)(["\n  margin: 0px;\n  color: rgb(8, 38, 13);\n"]))),v=f.Z.button(d||(d=(0,x.Z)(["\n  padding: 6px;\n  width: 100px;\n  height: 100%;\n  flex-shrink: 0;\n  border-radius: 33.5px;\n  background: #3cb3ab;\n  border: none;\n  &:hover {\n    color: #fff;\n    background-color: #147a73;\n    box-shadow: 1px 2px 6px 0px rgba(33, 83, 60, 0.7);\n  }\n  box-shadow: 0 2px 4px rgba(33, 83, 60, 0.5);\n\n  @media screen and (max-width: 768px) {\n    font-size: 18px;\n    width: 50px;\n  }\n"]))),k=(0,f.Z)(Z.Xm5)(s||(s=(0,x.Z)(["\n  width: 20px;\n  height: 20px;\n  /* &:hover,\n  &:focus {\n    color: rgb(181, 181, 127);\n  } */\n"]))),C=r(3634),z=function(){var n=(0,p.v9)((function(n){return n.contacts.items})),e=(0,p.v9)((function(n){return n.filter})),r=(0,p.I0)(),t=n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}));return(0,h.jsx)(w,{children:t.map((function(n){var e=n.id,t=n.name,o=n.number;return(0,h.jsxs)(y,{children:[(0,h.jsxs)(j,{children:[t,": ",o]}),(0,h.jsx)(v,{type:"button",onClick:function(){return r((0,C.GK)(e))},children:(0,h.jsx)(k,{})})]},e)}))})},F=r(1413),q=r(887),A=r(4695),N=r(6727),_=r(1686),I=r.n(_),L=r(9133),G=function(n){return n.contacts.items},T=N.Ry().shape({name:N.Z_().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan").required("Name is required"),number:N.Z_().matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +").required("Number is required")}).required();function B(){var n=(0,p.v9)(G),e=(0,p.I0)(),r=(0,q.cI)({defaultValues:{name:"",number:""},resolver:(0,A.X)(T)}),t=r.register,o=r.handleSubmit,a=r.reset;return(0,h.jsxs)(L.Gq,{onSubmit:o((function(r){var t=r.name,o=r.number;if(n.find((function(n){return n.name===t})))return I().Notify.failure("".concat(t," is already in contacts."),100);e((0,C.uK)({name:t,number:o})),e((0,b.T)("")),a()})),children:[(0,h.jsx)("label",{htmlFor:"name",children:"Name"}),(0,h.jsx)(L.Fy,(0,F.Z)((0,F.Z)({},t("name")),{},{type:"text",id:"name",placeholder:"enter the contact name"})),(0,h.jsx)("label",{htmlFor:"number",children:"Number"}),(0,h.jsx)(L.Fy,(0,F.Z)((0,F.Z)({},t("number")),{},{type:"tel",id:"number",placeholder:"enter the contact number"})),(0,h.jsx)(L.OL,{type:"submit",children:"Add contact"})]})}var K=function(){var n=(0,p.I0)();return(0,u.useEffect)((function(){n((0,C.yF)())}),[n]),(0,h.jsxs)("section",{children:[(0,h.jsx)(B,{}),(0,h.jsx)(g,{}),(0,h.jsx)(z,{})]})}},9133:function(n,e,r){r.d(e,{Bc:function(){return x},Fy:function(){return u},Gq:function(){return s},OL:function(){return p}});var t,o,a,i,c=r(168),d=r(4112),s=d.Z.form(t||(t=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 15px;\n  padding: 10px;\n"]))),u=d.Z.input(o||(o=(0,c.Z)(["\n  width: 250px;\n  border-radius: 6px;\n  outline: none;\n  border: 1px solid green;\n  padding: 5px;\n  background-color: #ffffff;\n  box-shadow: 1px 2px 6px 0px rgba(33, 83, 60, 0.5);\n\n  @media screen and (max-width: 768px) {\n    width: 250px;\n  }\n\n  &:focus {\n    border-color: #00ff00;\n  }\n"]))),p=d.Z.button(a||(a=(0,c.Z)(["\n  margin-top: 40px;\n  padding: 6px;\n  width: 250px;\n  height: 100%;\n  flex-shrink: 0;\n  border-radius: 33.5px;\n  background: #3cb3ab;\n  border: none;\n  &:hover {\n    color: #fff;\n    background-color: #147a73;\n    box-shadow: 1px 2px 6px 0px rgba(33, 83, 60, 0.7);\n  }\n  box-shadow: 0 2px 4px rgba(33, 83, 60, 0.5);\n\n  @media screen and (max-width: 768px) {\n    font-size: 18px;\n  }\n"]))),x=d.Z.p(i||(i=(0,c.Z)(["\n  color: red;\n  font-size: 12px;\n  /* box-shadow: 0 0 10px #ff0000; */\n  border-radius: 25px;\n  padding: 2px 4px;\n  background-color: #fff;\n"])))}}]);
//# sourceMappingURL=130.4c9ea819.chunk.js.map