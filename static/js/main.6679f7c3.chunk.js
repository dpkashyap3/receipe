(this.webpackJsonpfoodfood=this.webpackJsonpfoodfood||[]).push([[0],{28:function(e,t,a){},29:function(e,t,a){e.exports=a.p+"static/media/logo.966ff648.png"},34:function(e,t,a){e.exports=a(72)},39:function(e,t,a){},62:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(13),c=a.n(r),o=(a(39),a(29)),i=a.n(o),s=a(6);var m=function(){return n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},n.a.createElement("div",{className:"container"},n.a.createElement("span",{className:"navbar-brand ml-5",href:"#"},n.a.createElement("img",{style:{borderRadius:"50%"},src:i.a,width:"30",height:"30",className:"d-inline-block align-top",alt:""}),n.a.createElement("span",{className:"ml-2"},"Health & Food")),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},n.a.createElement("ul",{className:"navbar-nav align-center ml-auto"},n.a.createElement(s.b,{to:"/",className:"nav-item nav-link mr-3"},"Home"),n.a.createElement(s.b,{className:"nav-item nav-link mr-3",to:"/About"},"About Us"),n.a.createElement(s.b,{className:"nav-item nav-link mr-3",to:"/Contact"},"Contact Us")))))},u=a(10),E=a(32),d=a.n(E);a(62);var N=function(e){var t=e.receipe;return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},t.map((function(e,t){return n.a.createElement("div",{key:t,className:"col col-lg-4 col-md-4 col-sm-12 col-xs-12 "},n.a.createElement("div",{className:"card mb-5 grid"},n.a.createElement("div",{className:"card-body cardbody"},n.a.createElement("img",{className:"img-fluid",src:e.recipe.image,height:"100%",width:"100%",alt:e.recipe.label}),n.a.createElement("h4",{className:"card-title"},e.recipe.label.toUpperCase()),n.a.createElement(s.b,{to:{pathname:"/details",info:{data:e.recipe}}},n.a.createElement("button",{className:"btn btn-lg btn-warning"},"Show Information")))))}))))};var b=function(){var e=Object(l.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(l.useState)(""),o=Object(u.a)(c,2),i=o[0],s=o[1],m=Object(l.useState)("indian"),E=Object(u.a)(m,2),b=E[0],p=E[1];return Object(l.useEffect)((function(){d.a.get("https://api.edamam.com/search?q=".concat(b,"&app_id=").concat("0c00bfcb","&app_key=").concat("c6815bb882443e29124c912b038a1e52")).then((function(e){r(e.data.hits)})).catch((function(e){console.log(e)}))}),[b]),n.a.createElement("div",null,n.a.createElement("div",{className:"container"},n.a.createElement("h1",{className:"display-2 text-white "},"The Top Food Receipes"),n.a.createElement("hr",null),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col col-lg-4 col-md-6 col-sm-12"},n.a.createElement("input",{className:"form-control form-control-lg",type:"text",onChange:function(e){e.preventDefault(),s(e.target.value)},placeholder:"Search By Ingredient"})),n.a.createElement("div",{className:"col col-lg-4 col-md-6 col-sm-12"},n.a.createElement("button",{className:"btn btn-lg btn-warning",onClick:function(e){e.preventDefault(),p(i)}},"Go....")))),n.a.createElement(N,{receipe:a}))},p=a(33),h=a.n(p);a(28);var v=function(e){var t=e.data,a=e.setismodal,l=e.ismodal;return n.a.createElement("div",null,n.a.createElement(h.a,{isOpen:l,ariaHideApp:!1,className:"Modal",overlayClassName:"Overlay"},n.a.createElement("button",{onClick:function(){return a(!1)},className:"bg-transparent display-4 noborder text-dark mr-auto"},"X"),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col"},n.a.createElement("span",{className:"display-4"},t.label),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("h2",null,"Calories:",Math.ceil(t.calories)," kcal"),n.a.createElement("div",null,n.a.createElement("table",{class:"table table-striped"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",{scope:"col"},"Calories:",Math.ceil(t.calories),"kcal")),n.a.createElement("tr",null,n.a.createElement("th",{scope:"col"},"Weight:",Math.ceil(t.totalWeight),"gr"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("th",{scope:"row"},t.totalNutrients.FAT.label),n.a.createElement("td",null,t.totalNutrients.FAT.quantity,t.totalNutrients.FAT.unit),n.a.createElement("td",null,t.totalNutrients.FASAT.label,"  ",t.totalNutrients.FASAT.quantity,t.totalNutrients.FASAT.unit," "),n.a.createElement("td",null,t.totalNutrients.FAMS.label,"  ",t.totalNutrients.FAMS.quantity,t.totalNutrients.FAMS.unit," "),n.a.createElement("td",null,t.totalNutrients.FAPU.label,"  ",t.totalNutrients.FAPU.quantity,t.totalNutrients.FAPU.unit," "),n.a.createElement("td",null,t.totalNutrients.FATRN.label,"  ",t.totalNutrients.FATRN.quantity,t.totalNutrients.FATRN.unit," ")),n.a.createElement("tr",null,n.a.createElement("th",{scope:"row"},t.totalNutrients.CHOCDF.label),n.a.createElement("td",null,t.totalNutrients.CHOCDF.quantity,t.totalNutrients.CHOCDF.unit),n.a.createElement("td",null,t.totalNutrients.SUGAR.label,"  ",t.totalNutrients.SUGAR.quantity,t.totalNutrients.SUGAR.unit," ")),n.a.createElement("tr",null,n.a.createElement("th",{scope:"row"},t.totalNutrients.PROCNT.label),n.a.createElement("td",null,t.totalNutrients.PROCNT.quantity,t.totalNutrients.PROCNT.unit)),n.a.createElement("tr",null,n.a.createElement("th",{scope:"row"},t.totalNutrients.CHOLE.label),n.a.createElement("td",null,t.totalNutrients.CHOLE.quantity,t.totalNutrients.CHOLE.unit)),n.a.createElement("tr",null,n.a.createElement("th",{scope:"row"},t.totalNutrients.NA.label),n.a.createElement("td",null,t.totalNutrients.NA.quantity,t.totalNutrients.NA.unit)),n.a.createElement("tr",null,n.a.createElement("th",{scope:"row"},t.totalNutrients.CA.label),n.a.createElement("td",null,t.totalNutrients.CA.quantity,t.totalNutrients.CA.unit)),n.a.createElement("tr",null,n.a.createElement("th",{scope:"row"},t.totalNutrients.MG.label),n.a.createElement("td",null,t.totalNutrients.MG.quantity,t.totalNutrients.MG.unit)),n.a.createElement("tr",null,n.a.createElement("th",{scope:"row"},t.totalNutrients.K.label),n.a.createElement("td",null,t.totalNutrients.K.quantity,t.totalNutrients.K.unit)),n.a.createElement("tr",null,n.a.createElement("th",{scope:"row"},t.totalNutrients.FE.label),n.a.createElement("td",null,t.totalNutrients.FE.quantity,t.totalNutrients.FE.unit)),n.a.createElement("tr",null,n.a.createElement("th",{scope:"row"},t.totalNutrients.ZN.label),n.a.createElement("td",null,t.totalNutrients.ZN.quantity,t.totalNutrients.ZN.unit)),n.a.createElement("tr",null,n.a.createElement("th",{scope:"row"},t.totalNutrients.P.label),n.a.createElement("td",null,t.totalNutrients.P.quantity,t.totalNutrients.P.unit)),n.a.createElement("tr",null,n.a.createElement("th",{scope:"row"},t.totalNutrients.VITA_RAE.label),n.a.createElement("td",null,t.totalNutrients.VITA_RAE.quantity,t.totalNutrients.VITA_RAE.unit)),n.a.createElement("tr",null,n.a.createElement("th",{scope:"row"},t.totalNutrients.THIA.label),n.a.createElement("td",null,t.totalNutrients.THIA.quantity,t.totalNutrients.THIA.unit))))))))))};var g=function(e){var t=Object(l.useState)(!1),a=Object(u.a)(t,2),r=a[0],c=a[1],o=Object(l.useState)(),i=Object(u.a)(o,2);return i[0],i[1],n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"card cardContainer text-center mt-5"},n.a.createElement("div",{className:"card-header"},n.a.createElement("h1",{className:"display-2"},e.location.info.data.label.toUpperCase()),n.a.createElement("img",{className:"cardImage",src:e.location.info.data.image,alt:e.location.info.data.label.toUpperCase()})),n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title display-4"},"....Ingredients...."),n.a.createElement("hr",null),n.a.createElement("p",{className:"card-text"},n.a.createElement("table",{className:"table table-striped table-dark"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",{scope:"col"},"Weight"),n.a.createElement("th",{scope:"col"},"Description"))),e.location.info.data.ingredients.map((function(e,t){return n.a.createElement("tbody",{key:t},n.a.createElement("tr",null,n.a.createElement("td",null,e.weight),n.a.createElement("td",null,e.text)))})))),n.a.createElement("a",{href:e.location.info.data.url,class:"btn btn-primary btn-lg mt-5 mr-5"},"Go To Original"),n.a.createElement("button",{onClick:function(){return c(!0)},className:"btn btn-primary btn-lg mt-5"},"View Calories Breakdown"),n.a.createElement(v,{data:e.location.info.data,ismodal:r,setismodal:c}))))};var f=function(){return n.a.createElement("div",{className:"container"},n.a.createElement("h1",{className:"display-1 m-5 pb-5"},"Deepak Kashyap"),n.a.createElement("h3",{className:"display-3 m-5"},"Freelance Web Developer"),n.a.createElement("h5",{className:"display-5 m-5 pl-5"},"ReactJs And ASP.Net Developer"))},y=a(7);var A=function(){return n.a.createElement(s.a,null,n.a.createElement(m,null),n.a.createElement(y.c,null,n.a.createElement(y.a,{path:"/",exact:!0,component:b}),n.a.createElement(y.a,{path:"/about/",component:f}),n.a.createElement(y.a,{path:"/details/",component:g})))};a(71);c.a.render(n.a.createElement(A,null),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.6679f7c3.chunk.js.map