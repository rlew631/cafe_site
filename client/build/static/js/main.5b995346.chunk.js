(this.webpackJsonppressta=this.webpackJsonppressta||[]).push([[0],{100:function(e,t,a){"use strict";(function(e){var s=a(9),n=a(84),c=a(17),i=a(0),r=a(104),l=a.n(r),o=a(103),d=a.n(o),j=a(101),h=a.n(j),m=a(108),u=a(110),b=a(109),p=a(85),x=(a(78),a(155)),g=a(56),O=a(156),f=a(111),v=a(152),y=a(151),S=a(1);function N(e,t,a){if(e)return e.map((function(e){if(e.quantity>0)return Object(S.jsxs)(m.a,{className:"sidebar-item",children:[Object(S.jsx)(u.a,{children:Object(S.jsx)(p.a,{gutterBottom:!0,variant:"h5",component:"div",children:e.name})}),Object(S.jsx)(b.a,{component:"img",height:"100",image:e.image}),Object(S.jsxs)("div",{className:"sidebar-item-text",children:["$",e.price.toFixed(2),Object(S.jsxs)(x.a,{children:[Object(S.jsxs)(g.a,{onClick:function(){e.quantity=Math.max(e.quantity-1,0),a(Math.max(t-1,0))},children:[" ",Object(S.jsx)(h.a,{fontSize:"small"})]}),Object(S.jsx)(g.a,{children:e.quantity}),Object(S.jsxs)(g.a,{onClick:function(){e.quantity++,a(t+1)},children:[" ",Object(S.jsx)(d.a,{fontSize:"small"})]})]}),"$",(e.price*e.quantity).toFixed(2)]})]})}))}function C(e){if(e)for(var t=0,a=0;a<e.length;a++){t+=e[a].quantity*e[a].price}return t}function w(e){if(e)for(var t=0,a=0;a<e.length;a++)t+=e[a].quantity;return t}t.a=function(){var t=Object(i.useState)(0),a=Object(c.a)(t,2),r=a[0],o=a[1],d=Object(i.useState)({right:!1}),j=Object(c.a)(d,2),h=j[0],m=j[1],u=function(e,t){return function(a){("keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&m(Object(n.a)(Object(n.a)({},h),{},Object(s.a)({},e,t)))}};return Object(S.jsxs)("div",{className:"cart",children:[Object(S.jsx)(g.a,{onClick:u("right",!0),children:Object(S.jsxs)(v.a,{color:"secondary",badgeContent:w(e.itemData),children:[Object(S.jsx)(l.a,{})," "]})}),Object(S.jsx)(y.a,{anchor:"right",open:h.right,onClose:u("right",!1),children:Object(S.jsxs)(O.a,{sx:250,role:"presentation",onKeyDown:u("right",!1),className:"sidebar",children:[Object(S.jsx)("h3",{className:"cart-title",children:"Your Cart"}),Object(S.jsx)(f.a,{className:"sidebar-divider"}),N(e.itemData,r,o),Object(S.jsx)(f.a,{className:"sidebar-divider"}),Object(S.jsxs)("div",{className:"sidebar-pricing",children:[Object(S.jsx)("div",{children:"Subtotal: "}),Object(S.jsxs)("div",{children:["$",C(e.itemData)]})]}),Object(S.jsxs)("div",{className:"sidebar-pricing",children:[Object(S.jsx)("div",{children:"Tax(7.5%): "}),Object(S.jsxs)("div",{children:["$",(.075*C(e.itemData)).toFixed(2)]})]}),Object(S.jsxs)("div",{className:"sidebar-pricing",children:[Object(S.jsx)("b",{children:"Total: "}),Object(S.jsxs)("b",{children:["$",(1.075*C(e.itemData)).toFixed(2)]})]})]})})]})}}).call(this,a(75))},125:function(e,t,a){},128:function(e,t,a){},143:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),c=a(33),i=a.n(c),r=(a(125),a(126),a(39)),l=a.n(r),o=a(53),d=a(37),j=a(38),h=a(46),m=a(45),u=a(62),b=a(18),p=(a(128),a(17)),x=a.p+"static/media/logo.1e32682f.svg",g=a(172),O=a(173),f=a(174),v=a(175),y=a(191),S=a(176),N=a(1),C=[{href:"/",text:"Home"},{href:"/order",text:"Order"},{href:"/manufacturing",text:"Manufacturing"},{href:"/contact",text:"Contact"}];var w=function(){var e=Object(s.useState)(!1),t=Object(p.a)(e,2),a=t[0],n=t[1];return Object(N.jsx)("div",{className:"headerStrip",children:Object(N.jsxs)(O.a,{color:"light",light:!0,expand:"md",className:"col-lg-10 offset-lg-1 col-md-10 offset-md-1 header",children:[Object(N.jsx)(f.a,{href:"/",className:"logo",children:Object(N.jsx)("img",{src:x,alt:"logo",height:"35"})}),Object(N.jsx)(v.a,{onClick:function(){n(!a)},className:"toggle"}),Object(N.jsx)(y.a,{isOpen:a,navbar:!0,className:"navBar",children:Object(N.jsx)(S.a,{navbar:!0,children:C.map((function(e){var t=e.href,a=e.text;return Object(N.jsx)(g.a,{children:Object(N.jsx)(u.b,{to:t,className:"headerLinks",children:a})})}))})})]})})},k=a(144),A=a(145),P=a(146),M=a.p+"static/media/book_coffee.79a5b774.jpg",D=a.p+"static/media/latte_art.f9f293c3.jpg",B=a.p+"static/media/neon_coffee.5ccaab42.jpg",E=a.p+"static/media/pastries.366518b4.jpg";var T=function(){return Object(N.jsx)(k.a,{className:"main",children:Object(N.jsxs)(A.a,{lg:{size:10,offset:1},className:"statements",children:[Object(N.jsxs)(P.a,{children:[Object(N.jsxs)(A.a,{lg:"5",className:"textAlign",children:[Object(N.jsx)("h2",{children:"What We Do"}),Object(N.jsx)("p",{className:"statement",children:"We make coffee and food for the SOUUULLLLL"})]}),Object(N.jsx)(A.a,{lg:"7",children:Object(N.jsx)("p",{children:Object(N.jsx)("img",{src:M,alt:"book and coffee on a table",className:"pictures"})})})]}),Object(N.jsxs)(P.a,{className:"flex-row-reverse",children:[Object(N.jsxs)(A.a,{lg:"5",className:"textAlign",children:[Object(N.jsx)("h2",{children:"About The Team"}),Object(N.jsx)("p",{className:"statement",children:"Blah blah lorem ipsum up in dis spot"})]}),Object(N.jsx)(A.a,{lg:"7",children:Object(N.jsx)("p",{children:Object(N.jsx)("img",{src:D,alt:"latte art",className:"pictures"})})})]}),Object(N.jsxs)(P.a,{children:[Object(N.jsxs)(A.a,{lg:"5",className:"textAlign",children:[Object(N.jsx)("h2",{children:"Why Use Pressta"}),Object(N.jsx)("p",{className:"statement",children:"Blah blah lorem ipsum up in dis spot"})]}),Object(N.jsx)(A.a,{lg:"7",children:Object(N.jsx)("p",{children:Object(N.jsx)("img",{src:B,alt:"neon sign of a coffee cup",className:"pictures"})})})]}),Object(N.jsxs)(P.a,{className:"flex-row-reverse",children:[Object(N.jsxs)(A.a,{lg:"5",className:"textAlign",children:[Object(N.jsx)("h2",{children:"Industries Served"}),Object(N.jsx)("p",{className:"statement",children:"Blah blah lorem ipsum up in dis spot"})]}),Object(N.jsx)(A.a,{lg:"7",children:Object(N.jsx)("p",{children:Object(N.jsx)("img",{src:E,alt:"display case full of pastries",className:"pictures"})})})]})]})})},F=a(78),W=a(100),I=a(183),R=a(184),q=a(185),H=a(186),L=a(187),z=a(36),U=a.p+"static/media/Haas.4c76aec8.png",G=a.p+"static/media/Stratysis.52ab690f.png",_=a.p+"static/media/Trotec.cbf70bca.png",V=a.p+"static/media/Miller.fbede181.png";var Y=function(){return Object(N.jsx)("nav",{className:"main",children:Object(N.jsx)(k.a,{children:Object(N.jsx)(P.a,{children:Object(N.jsxs)(A.a,{lg:{size:10,offset:1},className:"colSpace",children:[Object(N.jsx)("p",{className:"statement",children:z.Manufacturing.Statement}),Object(N.jsx)("h1",{children:"Services"}),Object(N.jsxs)(P.a,{justify:"stretch",children:[" ",Object(N.jsx)(A.a,{lg:"3",md:"6",className:"colSpace",children:Object(N.jsxs)(I.a,{children:[Object(N.jsx)(R.a,{top:!0,width:"100%",src:U,alt:"Haas VF2SSYT CNC Machine"}),Object(N.jsxs)(q.a,{children:[Object(N.jsx)(H.a,{tag:"h3",children:"Machining"}),Object(N.jsx)(L.a,{children:z.Manufacturing.Services.Machining.Statement})]})]})}),Object(N.jsx)(A.a,{lg:"3",md:"6",className:"colSpace",children:Object(N.jsxs)(I.a,{children:[Object(N.jsx)(R.a,{top:!0,width:"100%",src:G,alt:"Stratysis SLA 3D Printer"}),Object(N.jsxs)(q.a,{children:[Object(N.jsx)(H.a,{tag:"h3",children:"3D Printing"}),Object(N.jsx)(L.a,{children:z.Manufacturing.Services.Printing.Statement})]})]})}),Object(N.jsx)(A.a,{lg:"3",md:"6",className:"colSpace",children:Object(N.jsxs)(I.a,{children:[Object(N.jsx)(R.a,{top:!0,width:"100%",src:_,alt:"Trotec laser cutter"}),Object(N.jsxs)(q.a,{children:[Object(N.jsx)(H.a,{tag:"h3",children:"Laser Cutting"}),Object(N.jsx)(L.a,{children:z.Manufacturing.Services.LaserCutting.Statement})]})]})}),Object(N.jsx)(A.a,{lg:"3",md:"6",className:"colSpace",children:Object(N.jsxs)(I.a,{children:[Object(N.jsx)(R.a,{top:!0,width:"100%",src:V,alt:"miller MIG/TIG welder"}),Object(N.jsxs)(q.a,{children:[Object(N.jsx)(H.a,{tag:"h3",children:"Welding"}),Object(N.jsx)(L.a,{children:z.Manufacturing.Services.Welding.Statement})]})]})})]})]})})})})},$=a(60),K=a(188),J=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var s;return Object(d.a)(this,a),(s=t.call(this,e)).submitForm=s.submitForm.bind(Object($.a)(s)),s.state={status:""},s}return Object(j.a)(a,[{key:"render",value:function(){var e=this.state.status;return Object(N.jsxs)("section",{className:"paralax-mf footer-paralax bg-image sect-mt4 route",children:[Object(N.jsx)("h2",{children:"Send A Message"}),Object(N.jsx)("div",{children:Object(N.jsx)("form",{action:"https://formspree.io/f/xvodwvwz",method:"POST",className:"contactForm",onSubmit:this.submitForm,children:Object(N.jsxs)(P.a,{children:[Object(N.jsx)("div",{className:"col-md-12 mb-3",children:Object(N.jsxs)("div",{className:"form-group",children:[Object(N.jsx)("input",{type:"text",name:"name",className:"form-control",id:"name",placeholder:"Your Name","data-rule":"minlen:4","data-msg":"Please enter at least 4 chars"}),Object(N.jsx)("div",{className:"validation"})]})}),Object(N.jsx)("div",{className:"col-md-12 mb-3",children:Object(N.jsxs)("div",{className:"form-group",children:[Object(N.jsx)("input",{type:"email",className:"form-control",name:"_replyto",id:"email",placeholder:"Your Email","data-rule":"email","data-msg":"Please enter a valid email"}),Object(N.jsx)("div",{className:"validation"})]})}),Object(N.jsx)("div",{className:"col-md-12 mb-3",children:Object(N.jsxs)("div",{className:"form-group",children:[Object(N.jsx)("input",{type:"text",className:"form-control",name:"_subject",id:"subject",placeholder:"Subject","data-rule":"minlen:4","data-msg":"Please enter at least 8 chars"}),Object(N.jsx)("div",{className:"validation"})]})}),Object(N.jsx)("div",{className:"col-md-12 mb-3",children:Object(N.jsxs)("div",{className:"form-group",children:[Object(N.jsx)("textarea",{className:"form-control",name:"message",rows:"5","data-rule":"required","data-msg":"Please write something for us",placeholder:"Message"}),Object(N.jsx)("div",{className:"validation"})]})}),Object(N.jsxs)(A.a,{md:"12",children:["SUCCESS"===e?Object(N.jsx)(K.a,{type:"submit",className:"button button-a button-big button-rouded",children:"Your message has been sent!"}):Object(N.jsx)(K.a,{type:"submitted",className:"button button-a button-big button-rouded",children:"Send Message"}),"ERROR"===e&&Object(N.jsx)(K.a,{type:"failed",className:"button button-a button-big button-rouded",children:"There was an error, please contact us at Shop@getpressta.com"})]})]})})})]})}},{key:"submitForm",value:function(e){var t=this;e.preventDefault();var a=e.target,s=new FormData(a),n=new XMLHttpRequest;n.open(a.method,a.action),n.setRequestHeader("Accept","application/json"),n.onreadystatechange=function(){n.readyState===XMLHttpRequest.DONE&&(200===n.status?(a.reset(),t.setState({status:"SUCCESS"})):t.setState({status:"ERROR"}))},n.send(s)}}]),a}(s.Component);var X=function(){return Object(N.jsx)(k.a,{className:"main",children:Object(N.jsxs)(P.a,{children:[Object(N.jsxs)(A.a,{lg:{size:4,offset:1},md:"7",className:"info",children:[Object(N.jsx)("h2",{children:"Contact Us"}),Object(N.jsxs)(P.a,{className:"info",children:[Object(N.jsx)(A.a,{className:"colKey",children:"Email: "}),Object(N.jsx)(A.a,{className:"colValue",children:z.Contact.Email})]}),Object(N.jsxs)(P.a,{className:"info",children:[Object(N.jsx)(A.a,{className:"colKey",children:"Phone: "}),Object(N.jsx)(A.a,{className:"colValue",children:z.Contact.Phone})]}),Object(N.jsxs)(P.a,{className:"info",children:[Object(N.jsx)(A.a,{className:"colKey",children:"Address: "}),Object(N.jsxs)(A.a,{className:"colValue",children:["73 Converse St.",Object(N.jsx)("br",{}),"San Francisco,",Object(N.jsx)("br",{}),"CA 94103"]})]})]}),Object(N.jsx)(A.a,{lg:"6",md:"5",children:Object(N.jsx)(J,{})})]})})},Q=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(d.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={data:null},e.callBackendAPI=Object(o.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/express_backend");case 2:return t=e.sent,e.next=5,t.json();case 5:if(a=e.sent,200===t.status){e.next=8;break}throw Error(a.message);case 8:return e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)}))),e}return Object(j.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.callBackendAPI().then((function(t){return e.setState({data:t})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(N.jsx)("div",{className:"App",children:Object(N.jsxs)(u.a,{children:[Object(N.jsx)(w,{}),Object(N.jsxs)(b.c,{children:[Object(N.jsx)(b.a,{path:"/",exact:!0,component:T}),Object(N.jsx)(b.a,{path:"/order",children:Object(N.jsxs)("div",{className:"main",children:[Object(N.jsx)(W.a,{}),Object(N.jsx)(F.a,{})]})}),Object(N.jsx)(b.a,{path:"/manufacturing",component:Y}),Object(N.jsx)(b.a,{path:"/contact",component:X})]})]})})}}]),a}(s.Component);i.a.render(Object(N.jsx)(n.a.StrictMode,{children:Object(N.jsx)(Q,{})}),document.getElementById("root"))},36:function(e){e.exports=JSON.parse('{"Home":{"WhatWeDoStatement":"Located strategically in the Bay Area Pressta is a premiere engineering, design and precision manufacturing facility specializing in R&D, prototyping and assembly. No matter what part of the product design cycle Pressta can help bring your ideas to life!","AboutUsStatement":"Pressta currently consists of five full time employees with a diverse set of skills ranging from graphic design to welding. Being small allows us to give our clients our full attention and keep them in the loop as their project comes together.","WhyUsePresstaStatement":"We can help with any stage of your product design process from inspiration to ideation to implementation. We all know that finding new vendors isn\'t easy. Whether you\'re looking to just test the waters or commit long-term our team will stand by our work and do whatever it takes to ensure your project is a success.","IndustriesStatement":"Pressta has worked with companies in the Aerospace, Automotive, Energy and Research sectors.","ClassificationsCertifications":"Pressta is ITAR registered, a small business and has begun the process of becoming ISO-9001 / AS9100D certified.  ","BottomCards":{"AdvancedMachinery":"We use modern high speed machining strategies to turn jobs around quicker than the competition.","OnTimeEverytime":"Pressta MFG\u2019s combined 21 years of experience in metalworking and fabrication helps keep projects on track and allows us to foresee potential issues before they come up.","SkilledExperts":"Our comprehensive background allows us to offer more services in-house saving you time and increasing your bottom line by preventing delays and expensive reworks.","FulfillingYourNeeds":"Our engineering expertise allows us to turn your idea into a finished product and reproduce / repair pieces which are no longer in production."}},"Design":{"Statement":"We can help bring your idea to life with our expert design team. They can help any stage of the process from turning your concept into a reality or applying that final polish. We specialize in design for manufacturability / servicability and top of the line analysis. Our holistic design approach gets you a more refined final product with fewer revisions and reworks.","Services":{"Mechanical":["CAD (Computer Aided Design)","FEA (Finite Element Analysis)","CFD (Computational Fluid Dynamics)","FMEA (Failure Mode and Effect Analysis)","Design for Manufacturability","Design for Asembly","Design for Servicability"],"Electrical":["Firmware Programming","PCB Design","Design for PCB Assembly","Product Development","Circuit Design"],"Design":["Mockups","Renderings","Weighted Models"]}},"Manufacturing":{"Statement":"We specialize in CNC machined parts, gaskets and welded assemblies. We are able to manufacture most metal and plastic parts with our in-house machine shop and finishing capabilities.","Services":{"Machining":{"Statement":"We can produce turned and milled parts using our in-house engine lathe and 4-axis CNC Mill","Materials":{"Steel":["Mild (A36)","Cold Rolled (1018)","4140","4340","Tool Steel","300 Series Stainless","400 Series Stainless"],"Aluminum":["300 Series Casting Alloys","2000 Series Alloys","5000 Series Alloys","6000 Series Alloys","7000 Series Alloys","1100 \u201cPure\u201d Aluminum","MIC6 Tooling Plate","Other Aluminum Tooling Plate"],"BrassBronze":["220 Bronze Sheet","385 Architectural Brass","510","544 High Strength","642 High Strength","655 Weldable","841 Graphite Impregnated","863 High Strength","900 Series Bronze"],"Plastic":["ABS","Acetal (Delrin)","PEI (Ultem)","PEEK","HDPE","Fiber Reinforced Plastics"]},"Finishes":{"Anodized":["Type I, Class 1, Clear","Type I, Class 2, Color","Type II, Class 1, Clear","Type II, Class 2, Black","Type II, Class 2, Colored","Hard Clear","Hard Black","Hard Colors","Chromic","Tataric","PTFE on Hard","Colored Titanium"],"Other":["Alodine / Alocrom","Irradiate","Pickling","Electropolishing","Vapor Polishing","Mirror Polishing","Powder Coating","Bead Blast","Chromate Conversion Coating","Electroless Nickel Plating","Nickel Plated","Passivation","Cerakoting","Vibratory Polishing","Painting"]}},"Printing":{"Statement":"We have both SLA and FDM 3D printers to prototype plastic components.","Materials":["Resin","ABS","PLA","Nylon","PETG","Carbon Fiber Reinforced","PVA"]},"LaserCutting":{"Statement":"We frequently use laser cutting to produce gaskets and stencils / graphics.","Materials":["Most plastics","Wood","Metal","Glass"]},"Welding":{"Statement":"We use TIG and MIG welding to join complex assemblies and perform repairs to existing components","Materials":["Steel","Aluminum","Brass","Titanium"]}}},"Contact":{"Email":"Shop@GetPressta.com","Phone":"(415) 349-5350"}}')},78:function(e,t,a){"use strict";(function(e){var s=a(39),n=a.n(s),c=a(53),i=a(37),r=a(38),l=a(46),o=a(45),d=a(0),j=a(145),h=a(144),m=a(146),u=a(153),b=a(154),p=a(56),x=a(108),g=a(110),O=a(109),f=a(85),v=a(1);function y(e){if(e)return e.map((function(e){return Object(v.jsx)(j.a,{lg:"3",md:"6",className:"cardCol",children:Object(v.jsxs)(x.a,{sx:{maxWidth:345},className:"card",children:[Object(v.jsxs)(u.a,{children:[Object(v.jsx)(O.a,{component:"img",height:"140",image:e.image}),Object(v.jsxs)(g.a,{children:[Object(v.jsx)(f.a,{gutterBottom:!0,variant:"h5",component:"div",children:e.name}),Object(v.jsx)(f.a,{variant:"body2",color:"text.secondary",children:e.description})]})]}),Object(v.jsxs)(b.a,{children:[Object(v.jsxs)("div",{className:"price",children:[Object(v.jsx)("b",{children:"Price:"})," $",e.price.toFixed(2)]}),Object(v.jsx)(p.a,{size:"small",color:"primary",onClick:function(){return e.quantity++},children:"Add to cart"})]})]})})}))}e.itemData=null;var S=function(t){Object(l.a)(s,t);var a=Object(o.a)(s);function s(){var t;Object(i.a)(this,s);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return(t=a.call.apply(a,[this].concat(l))).state={data:null},t.callBackendAPI=Object(c.a)(n.a.mark((function e(){var t,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/express_backend_catalog_items");case 2:return t=e.sent,e.next=5,t.json();case 5:if(a=e.sent,200===t.status){e.next=8;break}throw Error(a.message);case 8:return console.log(a),e.abrupt("return",a);case 10:case"end":return e.stop()}}),e)}))),t.componentDidMount=Object(c.a)(n.a.mark((function a(){return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:t.callBackendAPI().then((function(a){t.setState({data:a}),e.itemData=a})).catch((function(e){return console.log(e)}));case 1:case"end":return a.stop()}}),a)}))),t}return Object(r.a)(s,[{key:"render",value:function(){return Object(v.jsx)(h.a,{children:Object(v.jsx)(m.a,{children:y(this.state.data)})})}}]),s}(d.Component);t.a=S}).call(this,a(75))}},[[143,1,2]]]);
//# sourceMappingURL=main.5b995346.chunk.js.map