(this["webpackJsonpu-ias-calc"]=this["webpackJsonpu-ias-calc"]||[]).push([[0],{89:function(e,a,t){},98:function(e,a,t){"use strict";t.r(a);var n,c=t(0),l=t.n(c),r=t(27),i=t.n(r),s=(t(89),t(4)),o=t(32),u=t(12),j=t(31),b=(t(90),t(138)),d=t(147),O=t(148),p=t(140),h=t(141),f=t(72),v=t(6),x=t(144),g=Object(v.a)(x.a)({padding:"24px"}),m=t(139),y=Object(v.a)(m.a)({}),T=Object(v.a)(y)({width:"390px"}),I=t(137),S=Object(v.a)(I.a)({minWidth:"195px"});function k(e,a,t,n){var c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:256,l=100,r=Math.floor(120*a/(120+a)),i=t+r-n,s=Math.floor(c*(l+i)/100);return Math.ceil(256*e/s)-1}function w(e,a,t,n){return k(e,a,t,n)+1}function A(e,a,t,c){if(!([t,t,c].every((function(e){return"undefined"!==typeof e&&e.length>0&&!isNaN(parseInt(e))}))&&null!==e))return null;var l=parseInt(a),r=parseInt(t),i=parseInt(c);switch(e){case n.SMITE:return"Smite frames: ".concat(k(12,l,r,i));case n.DRAGON_TALON:return"Dragon talon frames: ".concat(function(e,a,t){return[w(4,e,a,t),k(13,e,a,t)]}(l,r,i).join("/"))}}!function(e){e.SMITE="SMITE",e.DRAGON_TALON="DRAGON_TALON"}(n||(n={}));var N,M=t(2),C=f.a.div(N||(N=Object(j.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 24px;\n  row-gap: 12px;\n"]))),D=function(e){return e.map((function(e){var a=Object.hasOwnProperty.call(e,"label")&&Object.hasOwnProperty.call(e,"value")?[e.label,e.value]:[e,e],t=Object(u.a)(a,2),n=t[0],c=t[1];return Object(M.jsx)(b.a,{value:c,children:n},c)}))},E=D(["-60","-50","-40","-30","-20","-10","0","10","20","30"]),G=D([{value:n.SMITE,label:"Paladin - Smite"},{value:n.DRAGON_TALON,label:"Assassin - DTalon"}]);var L=function(){var e=Object(c.useState)({gias:"",sias:"",wsm:"",attackType:n.SMITE}),a=Object(u.a)(e,2),t=a[0],l=a[1],r=function(e,a,n){if("undefined"===typeof n||(null===n||void 0===n?void 0:n.length)<1)l(Object(o.a)(Object(o.a)({},t),{},Object(s.a)({},e,"")));else switch(a){case"attackTypes":l(Object(o.a)(Object(o.a)({},t),{},Object(s.a)({},e,n)));break;case"integer":default:!function(){var a=parseInt(n),c=""+a;isNaN(a)&&(c=""),l(Object(o.a)(Object(o.a)({},t),{},Object(s.a)({},e,c)))}()}},i=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"integer";return function(t){return r(e,a,t.target.value)}},j=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"integer";return function(t){return r(e,a,t.target.value)}},b=Object(c.useMemo)((function(){return A(t.attackType,t.gias,t.sias,t.wsm)}),[t]);return Object(M.jsxs)(C,{children:[Object(M.jsx)(d.a,{variant:"h3",children:"Uncapped IAS Calculator"}),Object(M.jsx)(g,{elevation:12,children:Object(M.jsxs)(O.a,{component:"form",noValidate:!0,autoComplete:"off",children:[Object(M.jsx)(p.a,{children:Object(M.jsx)(y,{label:"Items IAS",variant:"outlined",type:"number",onChange:i("gias"),value:t.gias})}),Object(M.jsx)(p.a,{children:Object(M.jsx)(y,{label:"Skills IAS",variant:"outlined",type:"number",onChange:i("sias"),value:t.sias})}),Object(M.jsxs)(p.a,{children:[Object(M.jsx)(h.a,{id:"wsm-label",children:"WSM"}),Object(M.jsx)(S,{labelId:"wsm-label",value:t.wsm,label:"Weapon Speed",onChange:j("wsm"),children:E})]}),Object(M.jsxs)(p.a,{children:[Object(M.jsx)(h.a,{id:"attack-type-label",children:"Attack Type"}),Object(M.jsx)(S,{labelId:"attack-type-label",value:t.attackType,label:"Attack Type",onChange:j("attackType","attackTypes"),children:G})]})]})}),Object(M.jsx)(g,{elevation:12,children:Object(M.jsx)(T,{placeholder:"Please fill out the form",value:null!==b&&void 0!==b?b:""})})]})};i.a.render(Object(M.jsx)(l.a.StrictMode,{children:Object(M.jsx)(L,{})}),document.getElementById("root"))}},[[98,1,2]]]);
//# sourceMappingURL=main.4384bb88.chunk.js.map