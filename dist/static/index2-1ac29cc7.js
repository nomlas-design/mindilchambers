import{p as b,al as f,j as a,Y as P,aq as g,x as B,ar as L,r as m,U as w,as as k,$ as T,at as _,e as A,an as C,Z as S,ao as W,W as D,B as H,ap as E}from"./sanity-4ddd5314.js";const G=b.hr`
  background-color: var(--card-border-color);
  height: 1px;
  margin: 0;
  border: none;
`;function $(l){const{childItemId:n,items:t,isActive:o,layout:d,showIcons:i,title:r}=l,{collapsed:c}=B(),u=L(t==null?void 0:t.filter(e=>e.type!=="divider")),x=m.useCallback(e=>{var s;return((s=t==null?void 0:t.find((p,v)=>v===e))==null?void 0:s.type)==="divider"},[t]),h=m.useCallback(e=>{var s;const p=(s=e.displayOptions)==null?void 0:s.showIcon;return typeof p<"u"?p!==!1:i!==!1},[i]),I=m.useCallback((e,s)=>{const{virtualIndex:p}=s;if(e.type==="divider")return a.jsx(w,{marginBottom:1,children:a.jsx(G,{})},`divider-${p}`);const v=!o&&n===e.id,y=o&&n===e.id,j=e._id&&e.schemaType?{_id:e._id,_type:e.schemaType.name,title:e.title}:void 0;return a.jsx(k,{icon:h(e)?e.icon:!1,id:e.id,layout:d,marginBottom:1,pressed:v,schemaType:e.schemaType,selected:y,title:u(e).title,value:j},e.id)},[n,u,o,d,h]);return a.jsx(T,{overflow:c?"hidden":"auto",children:t&&t.length>0&&a.jsx(_,{activeItemDataAttr:"data-hovered",ariaLabel:r,canReceiveFocus:!0,getItemDisabled:x,itemHeight:51,items:t,onlyShowSelectionWhenActive:!0,paddingBottom:1,paddingX:3,renderItem:I,wrapAround:!1})})}const F=({index:l,menuItems:n,menuItemGroups:t,title:o})=>{const{features:d}=A(),{collapsed:i,isLast:r}=C(),c=r&&!i?-1:0;return a.jsx(S,{actions:a.jsx(W,{menuItems:n,menuItemGroups:t}),backButton:d.backButton&&l>0&&a.jsx(D,{as:H,"data-as":"a",icon:E,mode:"bleed",tooltipProps:{content:"Back"}}),tabIndex:c,title:o})};function R(l){const{childItemId:n,index:t,isActive:o,isSelected:d,pane:i,paneKey:r}=l,{defaultLayout:c,displayOptions:u,items:x,menuItems:h,menuItemGroups:I}=i,e=(u==null?void 0:u.showIcons)!==!1,{title:s}=f(i);return a.jsxs(P,{currentMaxWidth:350,"data-testid":"structure-tool-list-pane","data-ui":"ListPane",id:r,maxWidth:640,minWidth:320,selected:d,children:[g,a.jsx(F,{index:t,menuItems:h,menuItemGroups:I,title:s}),a.jsx($,{childItemId:n,isActive:o,items:x,layout:c,showIcons:e,title:s},r)]})}export{R as default};
