(this["webpackJsonpreact--phonebook-deployed"]=this["webpackJsonpreact--phonebook-deployed"]||[]).push([[0],{11:function(t,e,n){t.exports={container:"App_container__2MId-"}},17:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(10),s=n.n(r),o=(n(17),n(3)),i=n(9),l=n(4),u=n(5),d=n(7),b=n(6),m=n(2),j=n.n(m),h=n(0),p=function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.inputHandler=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(o.a)({},a,c))},t.submitHandler=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number;t.props.addContactHandler(a,c),e.currentTarget.reset()},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("form",{onSubmit:this.submitHandler,children:[Object(h.jsxs)("label",{className:j.a.label,children:[Object(h.jsx)("span",{className:j.a.name,children:"Name"}),Object(h.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",onChange:this.inputHandler,required:!0})]}),Object(h.jsxs)("label",{className:j.a.label,children:[Object(h.jsx)("span",{className:j.a.name,children:"Number"}),Object(h.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",onChange:this.inputHandler,required:!0})]}),Object(h.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(a.Component),O=n(12),f=n(11),v=n.n(f);function x(t){var e=t.onChange;return Object(h.jsxs)("label",{children:["Find contacts by name",Object(h.jsx)("input",{type:"text",name:"filter",onChange:e})]})}function C(t){var e=t.name,n=t.number,a=t.id,c=t.remove;return Object(h.jsxs)("li",{className:"item",children:[e,": ",n,Object(h.jsx)("button",{className:"rmv-btn",type:"button",onClick:c,id:a,children:"remove"})]})}function y(t){var e=t.contacts,n=t.inputHandler,a=t.remove;return Object(h.jsxs)("div",{children:[Object(h.jsx)(x,{onChange:n}),Object(h.jsx)("ul",{children:e.map((function(t){var e=t.id,n=t.name,c=t.number;return Object(h.jsx)(C,{name:n,number:c,id:e,remove:a},e)}))})]})}var g=function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.removeContact=function(e){var n=t.state.contacts,a=n.find((function(t){return t.id===e.target.id}));n.splice(n.indexOf(a),1),t.setState({contacts:Object(i.a)(n)})},t.addContact=function(e,n){if(t.state.contacts.some((function(t){return t.name===e})))return alert("".concat(e," is already in contacts"));t.setState((function(t){return{contacts:[].concat(Object(i.a)(t.contacts),[{name:e,number:n,id:Object(O.a)()}])}}))},t.inputHandler=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(o.a)({},a,c))},t.filterVisibleContacts=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)}))},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("contacts"));this.setState({contacts:t})}},{key:"componentDidUpdate",value:function(t,e){e.contacts!==this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.filterVisibleContacts().reverse();return Object(h.jsxs)("div",{className:v.a.container,children:[Object(h.jsx)("h2",{children:"Phonebook"}),Object(h.jsx)("h1",{children:"TRYING TO DEPLOY"}),Object(h.jsx)(p,{addContactHandler:this.addContact}),Object(h.jsx)("h2",{children:"Contacts"}),Object(h.jsx)(y,{contacts:t,inputHandler:this.inputHandler,remove:this.removeContact})]})}}]),n}(a.Component),N=g;s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(N,{})}),document.getElementById("root"))},2:function(t,e,n){t.exports={label:"ContactForm_label__3RoV0",name:"ContactForm_name__29t6f"}}},[[19,1,2]]]);
//# sourceMappingURL=main.a242a1a0.chunk.js.map