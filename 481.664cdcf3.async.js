(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[481],{32857:function(e,t){"use strict";t.Z={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"}},48820:function(e,t){"use strict";t.Z={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}}]},name:"copy",theme:"outlined"}},27363:function(e,t){"use strict";t.Z={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"}},34952:function(e,t,n){"use strict";var o=n(15105),r=n(67294),i=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};const a={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},l=r.forwardRef(((e,t)=>{const{style:n,noStyle:l,disabled:c}=e,s=i(e,["style","noStyle","disabled"]);let d={};return l||(d=Object.assign({},a)),c&&(d.pointerEvents="none"),d=Object.assign(Object.assign({},d),n),r.createElement("div",Object.assign({role:"button",tabIndex:0,ref:t},s,{onKeyDown:e=>{const{keyCode:t}=e;t===o.Z.ENTER&&e.preventDefault()},onKeyUp:t=>{const{keyCode:n}=t,{onClick:r}=e;n===o.Z.ENTER&&r&&r()},style:d}))}));t.Z=l},38925:function(e,t,n){"use strict";n.d(t,{Z:function(){return Z}});var o=n(76278),r=n(17012),i=n(62208),a=n(26702),l=n(1558),c=n(94184),s=n.n(c),d=n(82225),p=n(64217),u=n(67294),g=n(96159),m=n(53124),f=n(14747),b=n(67968),y=n(45503);const v=(e,t,n,o,r)=>({backgroundColor:e,border:`${o.lineWidth}px ${o.lineType} ${t}`,[`${r}-icon`]:{color:n}}),h=e=>{const{componentCls:t,motionDurationSlow:n,marginXS:o,marginSM:r,fontSize:i,fontSizeLG:a,lineHeight:l,borderRadiusLG:c,motionEaseInOutCirc:s,alertIconSizeLG:d,colorText:p,paddingContentVerticalSM:u,alertPaddingHorizontal:g,paddingMD:m,paddingContentHorizontalLG:b,colorTextHeading:y}=e;return{[t]:Object.assign(Object.assign({},(0,f.Wf)(e)),{position:"relative",display:"flex",alignItems:"center",padding:`${u}px ${g}px`,wordWrap:"break-word",borderRadius:c,[`&${t}-rtl`]:{direction:"rtl"},[`${t}-content`]:{flex:1,minWidth:0},[`${t}-icon`]:{marginInlineEnd:o,lineHeight:0},"&-description":{display:"none",fontSize:i,lineHeight:l},"&-message":{color:p},[`&${t}-motion-leave`]:{overflow:"hidden",opacity:1,transition:`max-height ${n} ${s}, opacity ${n} ${s},\n        padding-top ${n} ${s}, padding-bottom ${n} ${s},\n        margin-bottom ${n} ${s}`},[`&${t}-motion-leave-active`]:{maxHeight:0,marginBottom:"0 !important",paddingTop:0,paddingBottom:0,opacity:0}}),[`${t}-with-description`]:{alignItems:"flex-start",paddingInline:b,paddingBlock:m,[`${t}-icon`]:{marginInlineEnd:r,fontSize:d,lineHeight:0},[`${t}-message`]:{display:"block",marginBottom:o,color:y,fontSize:a},[`${t}-description`]:{display:"block"}},[`${t}-banner`]:{marginBottom:0,border:"0 !important",borderRadius:0}}},x=e=>{const{componentCls:t,colorSuccess:n,colorSuccessBorder:o,colorSuccessBg:r,colorWarning:i,colorWarningBorder:a,colorWarningBg:l,colorError:c,colorErrorBorder:s,colorErrorBg:d,colorInfo:p,colorInfoBorder:u,colorInfoBg:g}=e;return{[t]:{"&-success":v(r,o,n,e,t),"&-info":v(g,u,p,e,t),"&-warning":v(l,a,i,e,t),"&-error":Object.assign(Object.assign({},v(d,s,c,e,t)),{[`${t}-description > pre`]:{margin:0,padding:0}})}}},$=e=>{const{componentCls:t,iconCls:n,motionDurationMid:o,marginXS:r,fontSizeIcon:i,colorIcon:a,colorIconHover:l}=e;return{[t]:{"&-action":{marginInlineStart:r},[`${t}-close-icon`]:{marginInlineStart:r,padding:0,overflow:"hidden",fontSize:i,lineHeight:`${i}px`,backgroundColor:"transparent",border:"none",outline:"none",cursor:"pointer",[`${n}-close`]:{color:a,transition:`color ${o}`,"&:hover":{color:l}}},"&-close-text":{color:a,transition:`color ${o}`,"&:hover":{color:l}}}}},S=e=>[h(e),x(e),$(e)];var O=(0,b.Z)("Alert",(e=>{const{fontSizeHeading3:t}=e,n=(0,y.TS)(e,{alertIconSizeLG:t,alertPaddingHorizontal:12});return[S(n)]})),E=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};const w={success:o.Z,info:l.Z,error:r.Z,warning:a.Z},C=e=>{const{icon:t,prefixCls:n,type:o}=e,r=w[o]||null;return t?(0,g.wm)(t,u.createElement("span",{className:`${n}-icon`},t),(()=>({className:s()(`${n}-icon`,{[t.props.className]:t.props.className})}))):u.createElement(r,{className:`${n}-icon`})},j=e=>{const{isClosable:t,prefixCls:n,closeIcon:o,handleClose:r}=e,a=!0===o||void 0===o?u.createElement(i.Z,null):o;return t?u.createElement("button",{type:"button",onClick:r,className:`${n}-close-icon`,tabIndex:0},a):null};var k=e=>{const{description:t,prefixCls:n,message:o,banner:r,className:i,rootClassName:a,style:l,onMouseEnter:c,onMouseLeave:g,onClick:f,afterClose:b,showIcon:y,closable:v,closeText:h,closeIcon:x,action:$}=e,S=E(e,["description","prefixCls","message","banner","className","rootClassName","style","onMouseEnter","onMouseLeave","onClick","afterClose","showIcon","closable","closeText","closeIcon","action"]),[w,k]=u.useState(!1);const z=u.useRef(null),{getPrefixCls:I,direction:N,alert:T}=u.useContext(m.E_),B=I("alert",n),[P,R]=O(B),Z=t=>{var n;k(!0),null===(n=e.onClose)||void 0===n||n.call(e,t)},H=u.useMemo((()=>void 0!==e.type?e.type:r?"warning":"info"),[e.type,r]),M=u.useMemo((()=>!!h||("boolean"==typeof v?v:!1!==x&&null!=x)),[h,x,v]),D=!(!r||void 0!==y)||y,L=s()(B,`${B}-${H}`,{[`${B}-with-description`]:!!t,[`${B}-no-icon`]:!D,[`${B}-banner`]:!!r,[`${B}-rtl`]:"rtl"===N},null==T?void 0:T.className,i,a,R),W=(0,p.Z)(S,{aria:!0,data:!0});return P(u.createElement(d.ZP,{visible:!w,motionName:`${B}-motion`,motionAppear:!1,motionEnter:!1,onLeaveStart:e=>({maxHeight:e.offsetHeight}),onLeaveEnd:b},(n=>{let{className:r,style:i}=n;return u.createElement("div",Object.assign({ref:z,"data-show":!w,className:s()(L,r),style:Object.assign(Object.assign(Object.assign({},null==T?void 0:T.style),l),i),onMouseEnter:c,onMouseLeave:g,onClick:f,role:"alert"},W),D?u.createElement(C,{description:t,icon:e.icon,prefixCls:B,type:H}):null,u.createElement("div",{className:`${B}-content`},o?u.createElement("div",{className:`${B}-message`},o):null,t?u.createElement("div",{className:`${B}-description`},t):null),$?u.createElement("div",{className:`${B}-action`},$):null,u.createElement(j,{isClosable:M,prefixCls:B,closeIcon:h||x,handleClose:Z}))})))},z=n(15671),I=n(43144),N=n(32531),T=n(73568);let B=function(e){(0,N.Z)(n,e);var t=(0,T.Z)(n);function n(){var e;return(0,z.Z)(this,n),(e=t.apply(this,arguments)).state={error:void 0,info:{componentStack:""}},e}return(0,I.Z)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({error:e,info:t})}},{key:"render",value:function(){const{message:e,description:t,children:n}=this.props,{error:o,info:r}=this.state,i=r&&r.componentStack?r.componentStack:null,a=void 0===e?(o||"").toString():e,l=void 0===t?i:t;return o?u.createElement(k,{type:"error",message:a,description:u.createElement("pre",{style:{fontSize:"0.9em",overflowX:"auto"}},l)}):n}}]),n}(u.Component);var P=B;const R=k;R.ErrorBoundary=P;var Z=R},4393:function(e,t,n){"use strict";n.d(t,{Z:function(){return I}});var o=n(94184),r=n.n(o),i=n(98423),a=n(67294),l=n(53124),c=n(98675),s=n(99559),d=n(56440),p=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};var u=e=>{var{prefixCls:t,className:n,hoverable:o=!0}=e,i=p(e,["prefixCls","className","hoverable"]);const{getPrefixCls:c}=a.useContext(l.E_),s=c("card",t),d=r()(`${s}-grid`,n,{[`${s}-grid-hoverable`]:o});return a.createElement("div",Object.assign({},i,{className:d}))},g=n(14747),m=n(67968),f=n(45503);const b=e=>{const{antCls:t,componentCls:n,headerHeight:o,cardPaddingBase:r,tabsMarginBottom:i}=e;return Object.assign(Object.assign({display:"flex",justifyContent:"center",flexDirection:"column",minHeight:o,marginBottom:-1,padding:`0 ${r}px`,color:e.colorTextHeading,fontWeight:e.fontWeightStrong,fontSize:e.headerFontSize,background:e.headerBg,borderBottom:`${e.lineWidth}px ${e.lineType} ${e.colorBorderSecondary}`,borderRadius:`${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`},(0,g.dF)()),{"&-wrapper":{width:"100%",display:"flex",alignItems:"center"},"&-title":Object.assign(Object.assign({display:"inline-block",flex:1},g.vS),{[`\n          > ${n}-typography,\n          > ${n}-typography-edit-content\n        `]:{insetInlineStart:0,marginTop:0,marginBottom:0}}),[`${t}-tabs-top`]:{clear:"both",marginBottom:i,color:e.colorText,fontWeight:"normal",fontSize:e.fontSize,"&-bar":{borderBottom:`${e.lineWidth}px ${e.lineType} ${e.colorBorderSecondary}`}}})},y=e=>{const{cardPaddingBase:t,colorBorderSecondary:n,cardShadow:o,lineWidth:r}=e;return{width:"33.33%",padding:t,border:0,borderRadius:0,boxShadow:`\n      ${r}px 0 0 0 ${n},\n      0 ${r}px 0 0 ${n},\n      ${r}px ${r}px 0 0 ${n},\n      ${r}px 0 0 0 ${n} inset,\n      0 ${r}px 0 0 ${n} inset;\n    `,transition:`all ${e.motionDurationMid}`,"&-hoverable:hover":{position:"relative",zIndex:1,boxShadow:o}}},v=e=>{const{componentCls:t,iconCls:n,actionsLiMargin:o,cardActionsIconSize:r,colorBorderSecondary:i,actionsBg:a}=e;return Object.assign(Object.assign({margin:0,padding:0,listStyle:"none",background:a,borderTop:`${e.lineWidth}px ${e.lineType} ${i}`,display:"flex",borderRadius:`0 0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px `},(0,g.dF)()),{"& > li":{margin:o,color:e.colorTextDescription,textAlign:"center","> span":{position:"relative",display:"block",minWidth:2*e.cardActionsIconSize,fontSize:e.fontSize,lineHeight:e.lineHeight,cursor:"pointer","&:hover":{color:e.colorPrimary,transition:`color ${e.motionDurationMid}`},[`a:not(${t}-btn), > ${n}`]:{display:"inline-block",width:"100%",color:e.colorTextDescription,lineHeight:e.fontSize*e.lineHeight+"px",transition:`color ${e.motionDurationMid}`,"&:hover":{color:e.colorPrimary}},[`> ${n}`]:{fontSize:r,lineHeight:r*e.lineHeight+"px"}},"&:not(:last-child)":{borderInlineEnd:`${e.lineWidth}px ${e.lineType} ${i}`}}})},h=e=>Object.assign(Object.assign({margin:`-${e.marginXXS}px 0`,display:"flex"},(0,g.dF)()),{"&-avatar":{paddingInlineEnd:e.padding},"&-detail":{overflow:"hidden",flex:1,"> div:not(:last-child)":{marginBottom:e.marginXS}},"&-title":Object.assign({color:e.colorTextHeading,fontWeight:e.fontWeightStrong,fontSize:e.fontSizeLG},g.vS),"&-description":{color:e.colorTextDescription}}),x=e=>{const{componentCls:t,cardPaddingBase:n,colorFillAlter:o}=e;return{[`${t}-head`]:{padding:`0 ${n}px`,background:o,"&-title":{fontSize:e.fontSize}},[`${t}-body`]:{padding:`${e.padding}px ${n}px`}}},$=e=>{const{componentCls:t}=e;return{overflow:"hidden",[`${t}-body`]:{userSelect:"none"}}},S=e=>{const{antCls:t,componentCls:n,cardShadow:o,cardHeadPadding:r,colorBorderSecondary:i,boxShadowTertiary:a,cardPaddingBase:l,extraColor:c}=e;return{[n]:Object.assign(Object.assign({},(0,g.Wf)(e)),{position:"relative",background:e.colorBgContainer,borderRadius:e.borderRadiusLG,[`&:not(${n}-bordered)`]:{boxShadow:a},[`${n}-head`]:b(e),[`${n}-extra`]:{marginInlineStart:"auto",color:c,fontWeight:"normal",fontSize:e.fontSize},[`${n}-body`]:Object.assign({padding:l,borderRadius:` 0 0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px`},(0,g.dF)()),[`${n}-grid`]:y(e),[`${n}-cover`]:{"> *":{display:"block",width:"100%"},[`img, img + ${t}-image-mask`]:{borderRadius:`${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`}},[`${n}-actions`]:v(e),[`${n}-meta`]:h(e)}),[`${n}-bordered`]:{border:`${e.lineWidth}px ${e.lineType} ${i}`,[`${n}-cover`]:{marginTop:-1,marginInlineStart:-1,marginInlineEnd:-1}},[`${n}-hoverable`]:{cursor:"pointer",transition:`box-shadow ${e.motionDurationMid}, border-color ${e.motionDurationMid}`,"&:hover":{borderColor:"transparent",boxShadow:o}},[`${n}-contain-grid`]:{[`${n}-body`]:{display:"flex",flexWrap:"wrap"},[`&:not(${n}-loading) ${n}-body`]:{marginBlockStart:-e.lineWidth,marginInlineStart:-e.lineWidth,padding:0}},[`${n}-contain-tabs`]:{[`> ${n}-head`]:{[`${n}-head-title, ${n}-extra`]:{paddingTop:r}}},[`${n}-type-inner`]:x(e),[`${n}-loading`]:$(e),[`${n}-rtl`]:{direction:"rtl"}}},O=e=>{const{componentCls:t,cardPaddingSM:n,headerHeightSM:o,headerFontSizeSM:r}=e;return{[`${t}-small`]:{[`> ${t}-head`]:{minHeight:o,padding:`0 ${n}px`,fontSize:r,[`> ${t}-head-wrapper`]:{[`> ${t}-extra`]:{fontSize:e.fontSize}}},[`> ${t}-body`]:{padding:n}},[`${t}-small${t}-contain-tabs`]:{[`> ${t}-head`]:{[`${t}-head-title, ${t}-extra`]:{minHeight:o,paddingTop:0,display:"flex",alignItems:"center"}}}}};var E=(0,m.Z)("Card",(e=>{const t=(0,f.TS)(e,{cardShadow:e.boxShadowCard,cardHeadPadding:e.padding,cardPaddingBase:e.paddingLG,cardActionsIconSize:e.fontSize,cardPaddingSM:12});return[S(t),O(t)]}),(e=>({headerBg:"transparent",headerFontSize:e.fontSizeLG,headerFontSizeSM:e.fontSize,headerHeight:e.fontSizeLG*e.lineHeightLG+2*e.padding,headerHeightSM:e.fontSize*e.lineHeight+2*e.paddingXS,actionsBg:e.colorBgContainer,actionsLiMargin:`${e.paddingSM}px 0`,tabsMarginBottom:-e.padding-e.lineWidth,extraColor:e.colorText}))),w=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};const C=a.forwardRef(((e,t)=>{const{prefixCls:n,className:o,rootClassName:p,style:g,extra:m,headStyle:f={},bodyStyle:b={},title:y,loading:v,bordered:h=!0,size:x,type:$,cover:S,actions:O,tabList:C,children:j,activeTabKey:k,defaultActiveTabKey:z,tabBarExtraContent:I,hoverable:N,tabProps:T={}}=e,B=w(e,["prefixCls","className","rootClassName","style","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),{getPrefixCls:P,direction:R,card:Z}=a.useContext(l.E_),H=a.useMemo((()=>{let e=!1;return a.Children.forEach(j,(t=>{t&&t.type&&t.type===u&&(e=!0)})),e}),[j]),M=P("card",n),[D,L]=E(M),W=a.createElement(s.Z,{loading:!0,active:!0,paragraph:{rows:4},title:!1},j),A=void 0!==k,G=Object.assign(Object.assign({},T),{[A?"activeKey":"defaultActiveKey"]:A?k:z,tabBarExtraContent:I});let F;const K=(0,c.Z)(x),X=K&&"default"!==K?K:"large",_=C?a.createElement(d.Z,Object.assign({size:X},G,{className:`${M}-head-tabs`,onChange:t=>{var n;null===(n=e.onTabChange)||void 0===n||n.call(e,t)},items:C.map((e=>{var{tab:t}=e,n=w(e,["tab"]);return Object.assign({label:t},n)}))})):null;(y||m||_)&&(F=a.createElement("div",{className:`${M}-head`,style:f},a.createElement("div",{className:`${M}-head-wrapper`},y&&a.createElement("div",{className:`${M}-head-title`},y),m&&a.createElement("div",{className:`${M}-extra`},m)),_));const V=S?a.createElement("div",{className:`${M}-cover`},S):null,U=a.createElement("div",{className:`${M}-body`,style:b},v?W:j),q=O&&O.length?a.createElement("ul",{className:`${M}-actions`},function(e){return e.map(((t,n)=>a.createElement("li",{style:{width:100/e.length+"%"},key:`action-${n}`},a.createElement("span",null,t))))}(O)):null,Q=(0,i.Z)(B,["onTabChange"]),J=r()(M,null==Z?void 0:Z.className,{[`${M}-loading`]:v,[`${M}-bordered`]:h,[`${M}-hoverable`]:N,[`${M}-contain-grid`]:H,[`${M}-contain-tabs`]:C&&C.length,[`${M}-${K}`]:K,[`${M}-type-${$}`]:!!$,[`${M}-rtl`]:"rtl"===R},o,p,L),Y=Object.assign(Object.assign({},null==Z?void 0:Z.style),g);return D(a.createElement("div",Object.assign({ref:t},Q,{className:J,style:Y}),F,V,U,q))}));var j=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};var k=e=>{const{prefixCls:t,className:n,avatar:o,title:i,description:c}=e,s=j(e,["prefixCls","className","avatar","title","description"]),{getPrefixCls:d}=a.useContext(l.E_),p=d("card",t),u=r()(`${p}-meta`,n),g=o?a.createElement("div",{className:`${p}-meta-avatar`},o):null,m=i?a.createElement("div",{className:`${p}-meta-title`},i):null,f=c?a.createElement("div",{className:`${p}-meta-description`},c):null,b=m||f?a.createElement("div",{className:`${p}-meta-detail`},m,f):null;return a.createElement("div",Object.assign({},s,{className:u}),g,b)};const z=C;z.Grid=u,z.Meta=k;var I=z},49867:function(e,t,n){"use strict";n.d(t,{N:function(){return o}});const o=e=>({color:e.colorLink,textDecoration:"none",outline:"none",cursor:"pointer",transition:`color ${e.motionDurationSlow}`,"&:focus, &:hover":{color:e.colorLinkHover},"&:active":{color:e.colorLinkActive}})},96021:function(e,t,n){"use strict";n.d(t,{Z:function(){return be}});var o=n(67294),r=n(64894),i=n(87462),a=n(48820),l=n(93771),c=function(e,t){return o.createElement(l.Z,(0,i.Z)({},e,{ref:t,icon:a.Z}))};var s=o.forwardRef(c),d=n(27363),p=function(e,t){return o.createElement(l.Z,(0,i.Z)({},e,{ref:t,icon:d.Z}))};var u=o.forwardRef(p),g=n(94184),m=n.n(g),f=n(20640),b=n.n(f),y=n(48555),v=n(50344),h=n(8410),x=n(21770),$=n(98423),S=n(42550),O=n(79370),E=n(34952),w=n(53124),C=n(10110),j=n(83062),k={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"},z=function(e,t){return o.createElement(l.Z,(0,i.Z)({},e,{ref:t,icon:k}))};var I=o.forwardRef(z),N=n(15105),T=n(96159),B=n(70006),P=n(49867),R=n(67968),Z=n(78589),H=n(47673);const M=e=>{const t={};return[1,2,3,4,5].forEach((n=>{t[`\n      h${n}&,\n      div&-h${n},\n      div&-h${n} > textarea,\n      h${n}\n    `]=((e,t,n,o)=>{const{titleMarginBottom:r,fontWeightStrong:i}=o;return{marginBottom:r,color:n,fontWeight:i,fontSize:e,lineHeight:t}})(e[`fontSizeHeading${n}`],e[`lineHeightHeading${n}`],e.colorTextHeading,e)})),t},D=e=>{const{componentCls:t}=e;return{"a&, a":Object.assign(Object.assign({},(0,P.N)(e)),{textDecoration:e.linkDecoration,"&:active, &:hover":{textDecoration:e.linkHoverDecoration},[`&[disabled], &${t}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed","&:active, &:hover":{color:e.colorTextDisabled},"&:active":{pointerEvents:"none"}}})}},L=e=>({code:{margin:"0 0.2em",paddingInline:"0.4em",paddingBlock:"0.2em 0.1em",fontSize:"85%",fontFamily:e.fontFamilyCode,background:"rgba(150, 150, 150, 0.1)",border:"1px solid rgba(100, 100, 100, 0.2)",borderRadius:3},kbd:{margin:"0 0.2em",paddingInline:"0.4em",paddingBlock:"0.15em 0.1em",fontSize:"90%",fontFamily:e.fontFamilyCode,background:"rgba(150, 150, 150, 0.06)",border:"1px solid rgba(100, 100, 100, 0.2)",borderBottomWidth:2,borderRadius:3},mark:{padding:0,backgroundColor:Z.EV[2]},"u, ins":{textDecoration:"underline",textDecorationSkipInk:"auto"},"s, del":{textDecoration:"line-through"},strong:{fontWeight:600},"ul, ol":{marginInline:0,marginBlock:"0 1em",padding:0,li:{marginInline:"20px 0",marginBlock:0,paddingInline:"4px 0",paddingBlock:0}},ul:{listStyleType:"circle",ul:{listStyleType:"disc"}},ol:{listStyleType:"decimal"},"pre, blockquote":{margin:"1em 0"},pre:{padding:"0.4em 0.6em",whiteSpace:"pre-wrap",wordWrap:"break-word",background:"rgba(150, 150, 150, 0.1)",border:"1px solid rgba(100, 100, 100, 0.2)",borderRadius:3,fontFamily:e.fontFamilyCode,code:{display:"inline",margin:0,padding:0,fontSize:"inherit",fontFamily:"inherit",background:"transparent",border:0}},blockquote:{paddingInline:"0.6em 0",paddingBlock:0,borderInlineStart:"4px solid rgba(100, 100, 100, 0.2)",opacity:.85}}),W=e=>{const{componentCls:t}=e,n=(0,H.e5)(e).inputPaddingVertical+1;return{"&-edit-content":{position:"relative","div&":{insetInlineStart:-e.paddingSM,marginTop:-n,marginBottom:`calc(1em - ${n}px)`},[`${t}-edit-content-confirm`]:{position:"absolute",insetInlineEnd:e.marginXS+2,insetBlockEnd:e.marginXS,color:e.colorTextDescription,fontWeight:"normal",fontSize:e.fontSize,fontStyle:"normal",pointerEvents:"none"},textarea:{margin:"0!important",MozTransition:"none",height:"1em"}}}},A=e=>({"&-copy-success":{"\n    &,\n    &:hover,\n    &:focus":{color:e.colorSuccess}}}),G=e=>{const{componentCls:t,titleMarginTop:n}=e;return{[t]:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({color:e.colorText,wordBreak:"break-word",lineHeight:e.lineHeight,[`&${t}-secondary`]:{color:e.colorTextDescription},[`&${t}-success`]:{color:e.colorSuccess},[`&${t}-warning`]:{color:e.colorWarning},[`&${t}-danger`]:{color:e.colorError,"a&:active, a&:focus":{color:e.colorErrorActive},"a&:hover":{color:e.colorErrorHover}},[`&${t}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed",userSelect:"none"},"\n        div&,\n        p\n      ":{marginBottom:"1em"}},M(e)),{[`\n      & + h1${t},\n      & + h2${t},\n      & + h3${t},\n      & + h4${t},\n      & + h5${t}\n      `]:{marginTop:n},"\n      div,\n      ul,\n      li,\n      p,\n      h1,\n      h2,\n      h3,\n      h4,\n      h5":{"\n        + h1,\n        + h2,\n        + h3,\n        + h4,\n        + h5\n        ":{marginTop:n}}}),L(e)),D(e)),{[`\n        ${t}-expand,\n        ${t}-edit,\n        ${t}-copy\n      `]:Object.assign(Object.assign({},(0,P.N)(e)),{marginInlineStart:e.marginXXS})}),W(e)),A(e)),{"\n  a&-ellipsis,\n  span&-ellipsis\n  ":{display:"inline-block",maxWidth:"100%"},"&-single-line":{whiteSpace:"nowrap"},"&-ellipsis-single-line":{overflow:"hidden",textOverflow:"ellipsis","a&, span&":{verticalAlign:"bottom"}},"&-ellipsis-multiple-line":{display:"-webkit-box",overflow:"hidden",WebkitLineClamp:3,WebkitBoxOrient:"vertical"}}),{"&-rtl":{direction:"rtl"}})}};var F=(0,R.Z)("Typography",(e=>[G(e)]),(()=>({titleMarginTop:"1.2em",titleMarginBottom:"0.5em"})));var K=e=>{const{prefixCls:t,"aria-label":n,className:r,style:i,direction:a,maxLength:l,autoSize:c=!0,value:s,onSave:d,onCancel:p,onEnd:u,component:g,enterIcon:f=o.createElement(I,null)}=e,b=o.useRef(null),y=o.useRef(!1),v=o.useRef(),[h,x]=o.useState(s);o.useEffect((()=>{x(s)}),[s]),o.useEffect((()=>{if(b.current&&b.current.resizableTextArea){const{textArea:e}=b.current.resizableTextArea;e.focus();const{length:t}=e.value;e.setSelectionRange(t,t)}}),[]);const $=()=>{d(h.trim())},S=g?`${t}-${g}`:"",[O,E]=F(t),w=m()(t,`${t}-edit-content`,{[`${t}-rtl`]:"rtl"===a},r,S,E);return O(o.createElement("div",{className:w,style:i},o.createElement(B.Z,{ref:b,maxLength:l,value:h,onChange:e=>{let{target:t}=e;x(t.value.replace(/[\n\r]/g,""))},onKeyDown:e=>{let{keyCode:t}=e;y.current||(v.current=t)},onKeyUp:e=>{let{keyCode:t,ctrlKey:n,altKey:o,metaKey:r,shiftKey:i}=e;v.current!==t||y.current||n||o||r||i||(t===N.Z.ENTER?($(),null==u||u()):t===N.Z.ESC&&p())},onCompositionStart:()=>{y.current=!0},onCompositionEnd:()=>{y.current=!1},onBlur:()=>{$()},"aria-label":n,rows:1,autoSize:c}),null!==f?(0,T.Tm)(f,{className:`${t}-edit-content-confirm`}):null))},X=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};const _=o.forwardRef(((e,t)=>{const{prefixCls:n,component:r="article",className:i,rootClassName:a,setContentRef:l,children:c,direction:s,style:d}=e,p=X(e,["prefixCls","component","className","rootClassName","setContentRef","children","direction","style"]),{getPrefixCls:u,direction:g,typography:f}=o.useContext(w.E_),b=null!=s?s:g;let y=t;l&&(y=(0,S.sQ)(t,l));const v=u("typography",n),[h,x]=F(v),$=m()(v,null==f?void 0:f.className,{[`${v}-rtl`]:"rtl"===b},i,a,x),O=Object.assign(Object.assign({},null==f?void 0:f.style),d);return h(o.createElement(r,Object.assign({className:$,style:O,ref:y},p),c))}));var V=_;function U(e,t){return o.useMemo((()=>{const n=!!e;return[n,Object.assign(Object.assign({},t),n&&"object"==typeof e?e:null)]}),[e])}var q=(e,t)=>{const n=o.useRef(!1);o.useEffect((()=>{n.current?e():n.current=!0}),t)};function Q(e){const t=typeof e;return"string"===t||"number"===t}function J(e,t){let n=0;const o=[];for(let r=0;r<e.length;r+=1){if(n===t)return o;const i=e[r],a=n+(Q(i)?String(i).length:1);if(a>t){const e=t-n;return o.push(String(i).slice(0,e)),o}o.push(i),n=a}return e}var Y=e=>{let{enabledMeasure:t,children:n,text:r,width:i,fontSize:a,rows:l,onEllipsis:c}=e;const[[s,d,p],u]=o.useState([0,0,0]),[g,m]=o.useState(0),[f,b]=o.useState(0),[y,x]=o.useState(0),$=o.useRef(null),S=o.useRef(null),O=o.useMemo((()=>(0,v.Z)(r)),[r]),E=o.useMemo((()=>function(e){let t=0;return e.forEach((e=>{Q(e)?t+=String(e).length:t+=1})),t}(O)),[O]),w=o.useMemo((()=>t&&3===f?n(J(O,d),d<E):g&&4!==f&&t?n(J(O,g),g<E):n(O,!1)),[t,f,n,O,d,E]);(0,h.Z)((()=>{t&&i&&a&&E&&(b(1),u([0,Math.ceil(E/2),E]))}),[t,i,a,r,E,l]),(0,h.Z)((()=>{var e;1===f&&x((null===(e=$.current)||void 0===e?void 0:e.offsetHeight)||0)}),[f]),(0,h.Z)((()=>{var e,t;if(y)if(1===f){((null===(e=S.current)||void 0===e?void 0:e.offsetHeight)||0)<=l*y?(b(4),c(!1)):b(2)}else if(2===f)if(s!==p){const e=(null===(t=S.current)||void 0===t?void 0:t.offsetHeight)||0;let n=s,o=p;s===p-1?o=s:e<=l*y?n=d:o=d;const r=Math.ceil((n+o)/2);u([n,r,o])}else b(3),m(d),c(!0)}),[f,s,p,l,y]);const C={width:i,whiteSpace:"normal",margin:0,padding:0},j=(e,t,n)=>o.createElement("span",{"aria-hidden":!0,ref:t,style:Object.assign({position:"fixed",display:"block",left:0,top:0,zIndex:-9999,visibility:"hidden",pointerEvents:"none",fontSize:2*Math.floor(a/2)},n)},e);return o.createElement(o.Fragment,null,w,t&&3!==f&&4!==f&&o.createElement(o.Fragment,null,j("lg",$,{wordBreak:"keep-all",whiteSpace:"nowrap"}),1===f?j(n(O,!1),S,C):((e,t)=>{const o=J(O,e);return j(n(o,!0),t,C)})(d,S)))};var ee=e=>{let{enabledEllipsis:t,isEllipsis:n,children:r,tooltipProps:i}=e;return(null==i?void 0:i.title)&&t?o.createElement(j.Z,Object.assign({open:!!n&&void 0},i),r):r},te=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};function ne(e,t,n){return!0===e||void 0===e?t:e||n&&t}function oe(e){return!1===e?[!1,!1]:Array.isArray(e)?e:[e]}const re=o.forwardRef(((e,t)=>{var n,i,a;const{prefixCls:l,className:c,style:d,type:p,disabled:g,children:f,ellipsis:k,editable:z,copyable:I,component:N,title:T}=e,B=te(e,["prefixCls","className","style","type","disabled","children","ellipsis","editable","copyable","component","title"]),{getPrefixCls:P,direction:R}=o.useContext(w.E_),[Z]=(0,C.Z)("Text"),H=o.useRef(null),M=o.useRef(null),D=P("typography",l),L=(0,$.Z)(B,["mark","code","delete","underline","strong","keyboard","italic"]),[W,A]=U(z),[G,F]=(0,x.Z)(!1,{value:A.editing}),{triggerType:X=["icon"]}=A,_=e=>{var t;e&&(null===(t=A.onStart)||void 0===t||t.call(A)),F(e)};q((()=>{var e;G||null===(e=M.current)||void 0===e||e.focus()}),[G]);const Q=e=>{null==e||e.preventDefault(),_(!0)},J=e=>{var t;null===(t=A.onChange)||void 0===t||t.call(A,e),_(!1)},re=()=>{var e;null===(e=A.onCancel)||void 0===e||e.call(A),_(!1)},[ie,ae]=U(I),[le,ce]=o.useState(!1),se=o.useRef(null),de={};ae.format&&(de.format=ae.format);const pe=()=>{se.current&&clearTimeout(se.current)},ue=e=>{var t;null==e||e.preventDefault(),null==e||e.stopPropagation(),b()(ae.text||String(f)||"",de),ce(!0),pe(),se.current=setTimeout((()=>{ce(!1)}),3e3),null===(t=ae.onCopy)||void 0===t||t.call(ae,e)};o.useEffect((()=>pe),[]);const[ge,me]=o.useState(!1),[fe,be]=o.useState(!1),[ye,ve]=o.useState(!1),[he,xe]=o.useState(!1),[$e,Se]=o.useState(!1),[Oe,Ee]=o.useState(!0),[we,Ce]=U(k,{expandable:!1}),je=we&&!ye,{rows:ke=1}=Ce,ze=o.useMemo((()=>!je||void 0!==Ce.suffix||Ce.onEllipsis||Ce.expandable||W||ie),[je,Ce,W,ie]);(0,h.Z)((()=>{we&&!ze&&(me((0,O.G)("webkitLineClamp")),be((0,O.G)("textOverflow")))}),[ze,we]);const Ie=o.useMemo((()=>!ze&&(1===ke?fe:ge)),[ze,fe,ge]),Ne=je&&(Ie?$e:he),Te=je&&1===ke&&Ie,Be=je&&ke>1&&Ie,Pe=e=>{var t;ve(!0),null===(t=Ce.onExpand)||void 0===t||t.call(Ce,e)},[Re,Ze]=o.useState(0),[He,Me]=o.useState(0),De=e=>{var t;xe(e),he!==e&&(null===(t=Ce.onEllipsis)||void 0===t||t.call(Ce,e))};o.useEffect((()=>{const e=H.current;if(we&&Ie&&e){const t=Be?e.offsetHeight<e.scrollHeight:e.offsetWidth<e.scrollWidth;$e!==t&&Se(t)}}),[we,Ie,f,Be,Oe]),o.useEffect((()=>{const e=H.current;if("undefined"==typeof IntersectionObserver||!e||!Ie||!je)return;const t=new IntersectionObserver((()=>{Ee(!!e.offsetParent)}));return t.observe(e),()=>{t.disconnect()}}),[Ie,je]);let Le={};Le=!0===Ce.tooltip?{title:null!==(n=A.text)&&void 0!==n?n:f}:o.isValidElement(Ce.tooltip)?{title:Ce.tooltip}:"object"==typeof Ce.tooltip?Object.assign({title:null!==(i=A.text)&&void 0!==i?i:f},Ce.tooltip):{title:Ce.tooltip};const We=o.useMemo((()=>{const e=e=>["string","number"].includes(typeof e);if(we&&!Ie)return e(A.text)?A.text:e(f)?f:e(T)?T:e(Le.title)?Le.title:void 0}),[we,Ie,T,Le.title,Ne]);if(G)return o.createElement(K,{value:null!==(a=A.text)&&void 0!==a?a:"string"==typeof f?f:"",onSave:J,onCancel:re,onEnd:A.onEnd,prefixCls:D,className:c,style:d,direction:R,component:N,maxLength:A.maxLength,autoSize:A.autoSize,enterIcon:A.enterIcon});const Ae=()=>{const{expandable:e,symbol:t}=Ce;if(!e)return null;let n;return n=t||(null==Z?void 0:Z.expand),o.createElement("a",{key:"expand",className:`${D}-expand`,onClick:Pe,"aria-label":null==Z?void 0:Z.expand},n)},Ge=()=>{if(!W)return;const{icon:e,tooltip:t}=A,n=(0,v.Z)(t)[0]||(null==Z?void 0:Z.edit),r="string"==typeof n?n:"";return X.includes("icon")?o.createElement(j.Z,{key:"edit",title:!1===t?"":n},o.createElement(E.Z,{ref:M,className:`${D}-edit`,onClick:Q,"aria-label":r},e||o.createElement(u,{role:"button"}))):null},Fe=()=>{if(!ie)return;const{tooltips:e,icon:t}=ae,n=oe(e),i=oe(t),a=le?ne(n[1],null==Z?void 0:Z.copied):ne(n[0],null==Z?void 0:Z.copy),l=le?null==Z?void 0:Z.copied:null==Z?void 0:Z.copy,c="string"==typeof a?a:l;return o.createElement(j.Z,{key:"copy",title:a},o.createElement(E.Z,{className:m()(`${D}-copy`,le&&`${D}-copy-success`),onClick:ue,"aria-label":c},le?ne(i[1],o.createElement(r.Z,null),!0):ne(i[0],o.createElement(s,null),!0)))};return o.createElement(y.Z,{onResize:(e,t)=>{let{offsetWidth:n}=e;var o;Ze(n),Me(parseInt(null===(o=window.getComputedStyle)||void 0===o?void 0:o.call(window,t).fontSize,10)||0)},disabled:!je||Ie},(n=>o.createElement(ee,{tooltipProps:Le,enabledEllipsis:je,isEllipsis:Ne},o.createElement(V,Object.assign({className:m()({[`${D}-${p}`]:p,[`${D}-disabled`]:g,[`${D}-ellipsis`]:we,[`${D}-single-line`]:je&&1===ke,[`${D}-ellipsis-single-line`]:Te,[`${D}-ellipsis-multiple-line`]:Be},c),prefixCls:l,style:Object.assign(Object.assign({},d),{WebkitLineClamp:Be?ke:void 0}),component:N,ref:(0,S.sQ)(n,H,t),direction:R,onClick:X.includes("text")?Q:void 0,"aria-label":null==We?void 0:We.toString(),title:T},L),o.createElement(Y,{enabledMeasure:je&&!Ie,text:f,rows:ke,width:Re,fontSize:He,onEllipsis:De},((t,n)=>{let r=t;t.length&&n&&We&&(r=o.createElement("span",{key:"show-content","aria-hidden":!0},r));const i=function(e,t){let{mark:n,code:r,underline:i,delete:a,strong:l,keyboard:c,italic:s}=e,d=t;function p(e,t){t&&(d=o.createElement(e,{},d))}return p("strong",l),p("u",i),p("del",a),p("code",r),p("mark",n),p("kbd",c),p("i",s),d}(e,o.createElement(o.Fragment,null,r,(e=>{return[e&&o.createElement("span",{"aria-hidden":!0,key:"ellipsis"},"..."),Ce.suffix,(t=e,[t&&Ae(),Ge(),Fe()])];var t})(n)));return i}))))))}));var ie=re,ae=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};var le=o.forwardRef(((e,t)=>{var{ellipsis:n,rel:r}=e,i=ae(e,["ellipsis","rel"]);const a=Object.assign(Object.assign({},i),{rel:void 0===r&&"_blank"===i.target?"noopener noreferrer":r});return delete a.navigate,o.createElement(ie,Object.assign({},a,{ref:t,ellipsis:!!n,component:"a"}))}));var ce=o.forwardRef(((e,t)=>o.createElement(ie,Object.assign({ref:t},e,{component:"div"})))),se=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};const de=(e,t)=>{var{ellipsis:n}=e,r=se(e,["ellipsis"]);const i=o.useMemo((()=>n&&"object"==typeof n?(0,$.Z)(n,["expandable","rows"]):n),[n]);return o.createElement(ie,Object.assign({ref:t},r,{ellipsis:i,component:"span"}))};var pe=o.forwardRef(de),ue=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};const ge=[1,2,3,4,5];var me=o.forwardRef(((e,t)=>{const{level:n=1}=e,r=ue(e,["level"]);let i;return i=ge.includes(n)?`h${n}`:"h1",o.createElement(ie,Object.assign({ref:t},r,{component:i}))}));const fe=V;fe.Text=pe,fe.Link=le,fe.Title=me,fe.Paragraph=ce;var be=fe},64894:function(e,t,n){"use strict";var o=n(87462),r=n(67294),i=n(32857),a=n(93771),l=function(e,t){return r.createElement(a.Z,(0,o.Z)({},e,{ref:t,icon:i.Z}))};t.Z=r.forwardRef(l)},20640:function(e,t,n){"use strict";var o=n(11742),r={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,i,a,l,c,s,d=!1;t||(t={}),n=t.debug||!1;try{if(a=o(),l=document.createRange(),c=document.getSelection(),(s=document.createElement("span")).textContent=e,s.ariaHidden="true",s.style.all="unset",s.style.position="fixed",s.style.top=0,s.style.clip="rect(0, 0, 0, 0)",s.style.whiteSpace="pre",s.style.webkitUserSelect="text",s.style.MozUserSelect="text",s.style.msUserSelect="text",s.style.userSelect="text",s.addEventListener("copy",(function(o){if(o.stopPropagation(),t.format)if(o.preventDefault(),void 0===o.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var i=r[t.format]||r.default;window.clipboardData.setData(i,e)}else o.clipboardData.clearData(),o.clipboardData.setData(t.format,e);t.onCopy&&(o.preventDefault(),t.onCopy(o.clipboardData))})),document.body.appendChild(s),l.selectNodeContents(s),c.addRange(l),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");d=!0}catch(o){n&&console.error("unable to copy using execCommand: ",o),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),d=!0}catch(o){n&&console.error("unable to copy using clipboardData: ",o),n&&console.error("falling back to prompt"),i=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(i,e)}}finally{c&&("function"==typeof c.removeRange?c.removeRange(l):c.removeAllRanges()),s&&document.body.removeChild(s),a()}return d}},79370:function(e,t,n){"use strict";n.d(t,{G:function(){return i}});var o=n(98924),r=function(e){if((0,o.Z)()&&window.document.documentElement){var t=Array.isArray(e)?e:[e],n=window.document.documentElement;return t.some((function(e){return e in n.style}))}return!1};function i(e,t){return Array.isArray(e)||void 0===t?r(e):function(e,t){if(!r(e))return!1;var n=document.createElement("div"),o=n.style[e];return n.style[e]=t,n.style[e]!==o}(e,t)}},11742:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],o=0;o<e.rangeCount;o++)n.push(e.getRangeAt(o));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}}}]);