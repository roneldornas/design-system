var _=Object.defineProperty;var a=(e,o)=>_(e,"name",{value:o,configurable:!0});import{r as s}from"./index.99ecfb67.js";import{a as b,j as f}from"./jsx-runtime.397c7cbc.js";var y=s.exports.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),O=a(function(o,n,t){var r=t.get(o);return r?r(n):(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),null)},"renderPathForWeight");function x(e,o){if(e==null)return{};var n={},t=Object.keys(e),r,i;for(i=0;i<t.length;i++)r=t[i],!(o.indexOf(r)>=0)&&(n[r]=e[r]);return n}a(x,"_objectWithoutPropertiesLoose");var m=s.exports.forwardRef(function(e,o){var n=e.alt,t=e.color,r=e.size,i=e.weight,w=e.mirrored,v=e.children,C=e.renderPath,z=x(e,["alt","color","size","weight","mirrored","children","renderPath"]),l=s.exports.useContext(y),c=l.color,h=c===void 0?"currentColor":c,d=l.size,u=l.weight,P=u===void 0?"regular":u,g=l.mirrored,j=g===void 0?!1:g,I=x(l,["color","size","weight","mirrored"]);return b("svg",{...Object.assign({ref:o,xmlns:"http://www.w3.org/2000/svg",width:r!=null?r:d,height:r!=null?r:d,fill:t!=null?t:h,viewBox:"0 0 256 256",transform:w||j?"scale(-1, 1)":void 0},I,z),children:[!!n&&f("title",{children:n}),v,f("rect",{width:"256",height:"256",fill:"none"}),C(i!=null?i:P,t!=null?t:h)]})});m.displayName="IconBase";const k=m;export{k as I,O as r};
//# sourceMappingURL=IconBase.esm.9d58cfe2.js.map
