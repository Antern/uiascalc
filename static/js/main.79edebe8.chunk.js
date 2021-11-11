(this["webpackJsonpu-ias-calc"]=this["webpackJsonpu-ias-calc"]||[]).push([[0],{103:function(e,t,n){},114:function(e,t,n){"use strict";n.r(t);var a,i,c=n(0),l=n.n(c),r=n(32),s=n.n(r),j=(n(103),n(23)),o=(n(104),n(170)),u=n(41),d=n(4),b=n(21),O=n(13),h=n(154),v=n(164),x=n(163),f=n(156),p=n(159);!function(e){e.SMITE="SMITE",e.DRAGON_TALON="DRAGON_TALON",e.STRAFE="STRAFE",e.PALADIN_ZEAL="PALADIN_ZEAL"}(i||(i={}));var m=(a={},Object(d.a)(a,i.SMITE,"Paladin - Smite"),Object(d.a)(a,i.PALADIN_ZEAL,"Paladin - Zeal"),Object(d.a)(a,i.STRAFE,"Amazon - Strafe"),Object(d.a)(a,i.DRAGON_TALON,"Assassin - DTalon"),a),g=Object.entries(m).map((function(e){var t=Object(O.a)(e,2),n=t[0];return{label:t[1],value:n}}));function A(e,t,n,a){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:256,c=100,l=Math.floor(120*t/(120+t)),r=n+l-a,s=Math.floor(i*(c+r)/100);return Math.ceil(256*e/s)-1}function y(e,t,n,a){return A(e,t,n,a)+1}function I(e,t,n,a){switch(e){case i.SMITE:return[A(12,t,n,a)];case i.PALADIN_ZEAL:return function(e,t,n){return[y(7,e,t,n),A(15,e,t,n)]}(t,n,a);case i.DRAGON_TALON:return function(e,t,n){return[y(4,e,t,n),A(13,e,t,n)]}(t,n,a);case i.STRAFE:return function(e,t,n){return[A(7,e,t,n),y(3,e,t,n),A(11,e,t,n)]}(t,n,a)}}function S(e,t,n,a){var i;if(!([n,n,a].every((function(e){return"undefined"!==typeof e&&e.length>0&&!isNaN(parseInt(e))}))&&null!==e))return null;var c=null===(i=I(e,parseInt(t),parseInt(n),parseInt(a)))||void 0===i?void 0:i.join("/");return{label:m[e],value:c}}var T,k,w,N,E=n(5),C=n(160),L=Object(E.a)(C.a)({padding:"24px"}),M=u.a.div(T||(T=Object(j.a)(["\n  display: flex;\n  flex-direction: column;\n  row-gap: 12px;\n"]))),P=n(152),D=Object(E.a)(P.a)({minWidth:"195px"}),R=n(155),_=Object(E.a)(R.a)({}),F=Object(E.a)(_)({}),W=n(15),G=n(87),J=n.n(G),Z=n(2),z=l.a.createContext(null),B=function(e){var t,n=e.children,a=J()("input-data",{items:[]}),i=Object(O.a)(a,2),c=i[0],l=i[1],r={pushItem:function(e){l(Object(b.a)(Object(b.a)({},c),{},{items:[].concat(Object(W.a)((null===c||void 0===c?void 0:c.items)||[]),[e])}))},removeItem:function(e){var t,n=null!==(t=null===c||void 0===c?void 0:c.items)&&void 0!==t?t:[],a=JSON.stringify(e),i=n.findIndex((function(e){return JSON.stringify(e)===a}));if(!(i<0)){var r=[].concat(Object(W.a)(n.slice(0,i)),Object(W.a)(n.slice(i+1)));l(Object(b.a)(Object(b.a)({},c),{},{items:r}))}},items:null!==(t=null===c||void 0===c?void 0:c.items)&&void 0!==t?t:[]};return Object(Z.jsx)(z.Provider,{value:r,children:n})},H=function(e){return e.map((function(e){var t=Object.hasOwnProperty.call(e,"label")&&Object.hasOwnProperty.call(e,"value")?[e.label,e.value]:[e,e],n=Object(O.a)(t,2),a=n[0],i=n[1];return Object(Z.jsx)(h.a,{value:i,children:a},i)}))},U=H(["-60","-50","-40","-30","-20","-10","0","10","20","30"]),V=H(g),q=function(){var e,t,n=Object(c.useContext)(z),a=Object(c.useState)({gias:"",sias:"",wsm:"",attackType:i.SMITE}),l=Object(O.a)(a,2),r=l[0],s=l[1],j=function(e,t,n){if("undefined"===typeof n||(null===n||void 0===n?void 0:n.length)<1)s(Object(b.a)(Object(b.a)({},r),{},Object(d.a)({},e,"")));else switch(t){case"attackTypes":s(Object(b.a)(Object(b.a)({},r),{},Object(d.a)({},e,n)));break;case"integer":default:!function(){var t=parseInt(n),a=""+t;isNaN(t)&&(a=""),s(Object(b.a)(Object(b.a)({},r),{},Object(d.a)({},e,a)))}()}},o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"integer";return function(n){return j(e,t,n.target.value)}},u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"integer";return function(n){return j(e,t,n.target.value)}},h=Object(c.useMemo)((function(){return S(r.attackType,r.gias,r.sias,r.wsm)}),[r]);return Object(Z.jsxs)(Z.Fragment,{children:[Object(Z.jsx)(L,{elevation:12,children:Object(Z.jsx)(v.a,{component:"form",noValidate:!0,autoComplete:"off",children:Object(Z.jsxs)(M,{children:[Object(Z.jsxs)(x.a,{children:[Object(Z.jsx)(f.a,{id:"attack-type-label",children:"Attack Type"}),Object(Z.jsx)(D,{labelId:"attack-type-label",value:r.attackType,label:"Attack Type",onChange:u("attackType","attackTypes"),children:V})]}),Object(Z.jsxs)(x.a,{children:[Object(Z.jsx)(f.a,{id:"wsm-label",children:"Weapon Speed"}),Object(Z.jsx)(D,{labelId:"wsm-label",value:r.wsm,label:"Weapon Speed",onChange:u("wsm"),children:U})]}),Object(Z.jsx)(x.a,{children:Object(Z.jsx)(_,{label:"Items IAS",variant:"outlined",type:"number",onChange:o("gias"),value:r.gias})}),Object(Z.jsx)(x.a,{children:Object(Z.jsx)(_,{label:"Skills IAS",variant:"outlined",type:"number",onChange:o("sias"),value:r.sias})})]})})}),Object(Z.jsx)(L,{elevation:12,children:Object(Z.jsxs)(M,{children:[Object(Z.jsx)(F,{placeholder:"Please fill out the form",label:null!==(e=null===h||void 0===h?void 0:h.label)&&void 0!==e?e:"",value:null!==(t=null===h||void 0===h?void 0:h.value)&&void 0!==t?t:""}),Object(Z.jsx)(p.a,{disabled:!(null===h||void 0===h?void 0:h.value),onClick:function(){return null===n||void 0===n?void 0:n.pushItem(r)},children:"Store"})]})})]})},K=n(165),Q=n(166),X=n(167),Y=n(168),$=n(169),ee=n(171),te=n(88),ne=n.n(te),ae=Object(E.a)(L)({minHeight:"100%"}),ie=function(){var e=Object(c.useContext)(z),t=Object(c.useMemo)((function(){return null===e||e.items.length<1?[]:e.items.map((function(e){var t=S(e.attackType,e.gias,e.sias,e.wsm);if(null===t)return null;var n=t.value,a=t.label;return{key:JSON.stringify(e),label:a,value:n,item:e}})).filter((function(e){return null!==e}))}),[e]);return Object(Z.jsxs)(ae,{elevation:12,children:[Object(Z.jsxs)(K.a,{sx:{minWidth:500},"aria-label":"simple table",children:[Object(Z.jsx)(Q.a,{children:Object(Z.jsxs)(X.a,{children:[Object(Z.jsx)(Y.a,{children:"Attack"}),Object(Z.jsx)(Y.a,{align:"right",children:"GIAS"}),Object(Z.jsx)(Y.a,{align:"right",children:"SIAS"}),Object(Z.jsx)(Y.a,{align:"right",children:"WSM"}),Object(Z.jsx)(Y.a,{align:"right",children:"FPA"}),Object(Z.jsx)(Y.a,{children:"Ctrls"})]})}),Object(Z.jsx)($.a,{children:t.map((function(t){return Object(Z.jsxs)(X.a,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[Object(Z.jsx)(Y.a,{component:"th",scope:"row",children:t.label}),Object(Z.jsx)(Y.a,{align:"right",children:t.item.gias}),Object(Z.jsx)(Y.a,{align:"right",children:t.item.sias}),Object(Z.jsx)(Y.a,{align:"right",children:t.item.wsm}),Object(Z.jsx)(Y.a,{align:"right",children:Object(Z.jsx)(o.a,{variant:"body1",color:"primary",children:t.value})}),Object(Z.jsx)(Y.a,{children:Object(Z.jsx)(ee.a,{onClick:function(){return null===e||void 0===e?void 0:e.removeItem(t.item)},children:Object(Z.jsx)(ne.a,{})})})]},t.key)}))})]}),(null===t||void 0===t?void 0:t.length)<1&&Object(Z.jsx)("p",{children:Object(Z.jsx)(o.a,{variant:"body1",children:"No stored results"})})]})},ce=u.a.div(k||(k=Object(j.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 24px;\n  row-gap: 24px;\n"]))),le=u.a.div(w||(w=Object(j.a)(["\n  display: flex;\n  flex-direction: row;\n  column-gap: 24px;\n  justify-content: center;\n"]))),re=u.a.div(N||(N=Object(j.a)(["\n  display: flex;\n  flex-direction: column;\n  row-gap: 12px;\n  min-width: ",";\n"])),(function(e){var t;return null!==(t=null===e||void 0===e?void 0:e.minWidth)&&void 0!==t?t:"320px"}));var se=function(){return Object(Z.jsx)(B,{children:Object(Z.jsxs)(ce,{children:[Object(Z.jsx)(le,{children:Object(Z.jsx)(o.a,{variant:"h3",children:"Uncapped IAS Calculator"})}),Object(Z.jsxs)(le,{children:[Object(Z.jsx)(re,{children:Object(Z.jsx)(q,{})}),Object(Z.jsx)(re,{children:Object(Z.jsx)(ie,{})})]})]})})};s.a.render(Object(Z.jsx)(l.a.StrictMode,{children:Object(Z.jsx)(se,{})}),document.getElementById("root"))}},[[114,1,2]]]);
//# sourceMappingURL=main.79edebe8.chunk.js.map