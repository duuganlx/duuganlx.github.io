(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[481],{32857:function(re,E){"use strict";var a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"};E.Z=a},48820:function(re,E){"use strict";var a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}}]},name:"copy",theme:"outlined"};E.Z=a},27363:function(re,E){"use strict";var a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"};E.Z=a},34952:function(re,E,a){"use strict";var n=a(15105),C=a(67294),K=function(v,S){var $={};for(var w in v)Object.prototype.hasOwnProperty.call(v,w)&&S.indexOf(w)<0&&($[w]=v[w]);if(v!=null&&typeof Object.getOwnPropertySymbols=="function")for(var h=0,w=Object.getOwnPropertySymbols(v);h<w.length;h++)S.indexOf(w[h])<0&&Object.prototype.propertyIsEnumerable.call(v,w[h])&&($[w[h]]=v[w[h]]);return $};const b={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},M=C.forwardRef((v,S)=>{const $=fe=>{const{keyCode:P}=fe;P===n.Z.ENTER&&fe.preventDefault()},w=fe=>{const{keyCode:P}=fe,{onClick:q}=v;P===n.Z.ENTER&&q&&q()},{style:h,noStyle:ie,disabled:j}=v,I=K(v,["style","noStyle","disabled"]);let k={};return ie||(k=Object.assign({},b)),j&&(k.pointerEvents="none"),k=Object.assign(Object.assign({},k),h),C.createElement("div",Object.assign({role:"button",tabIndex:0,ref:S},I,{onKeyDown:$,onKeyUp:w,style:k}))});E.Z=M},38925:function(re,E,a){"use strict";a.d(E,{Z:function(){return d}});var n=a(76278),C=a(17012),K=a(62208),b=a(26702),M=a(1558),v=a(94184),S=a.n(v),$=a(82225),w=a(64217),h=a(67294),ie=a(96159),j=a(53124),I=a(14747),k=a(67968),fe=a(45503);const P=(o,l,g,f,y)=>({backgroundColor:o,border:`${f.lineWidth}px ${f.lineType} ${l}`,[`${y}-icon`]:{color:g}}),q=o=>{const{componentCls:l,motionDurationSlow:g,marginXS:f,marginSM:y,fontSize:O,fontSizeLG:A,lineHeight:W,borderRadiusLG:X,motionEaseInOutCirc:H,alertIconSizeLG:ae,colorText:pe,paddingContentVerticalSM:ge,alertPaddingHorizontal:le,paddingMD:se,paddingContentHorizontalLG:ne,colorTextHeading:De}=o;return{[l]:Object.assign(Object.assign({},(0,I.Wf)(o)),{position:"relative",display:"flex",alignItems:"center",padding:`${ge}px ${le}px`,wordWrap:"break-word",borderRadius:X,[`&${l}-rtl`]:{direction:"rtl"},[`${l}-content`]:{flex:1,minWidth:0},[`${l}-icon`]:{marginInlineEnd:f,lineHeight:0},["&-description"]:{display:"none",fontSize:O,lineHeight:W},"&-message":{color:pe},[`&${l}-motion-leave`]:{overflow:"hidden",opacity:1,transition:`max-height ${g} ${H}, opacity ${g} ${H},
        padding-top ${g} ${H}, padding-bottom ${g} ${H},
        margin-bottom ${g} ${H}`},[`&${l}-motion-leave-active`]:{maxHeight:0,marginBottom:"0 !important",paddingTop:0,paddingBottom:0,opacity:0}}),[`${l}-with-description`]:{alignItems:"flex-start",paddingInline:ne,paddingBlock:se,[`${l}-icon`]:{marginInlineEnd:y,fontSize:ae,lineHeight:0},[`${l}-message`]:{display:"block",marginBottom:f,color:De,fontSize:A},[`${l}-description`]:{display:"block"}},[`${l}-banner`]:{marginBottom:0,border:"0 !important",borderRadius:0}}},et=o=>{const{componentCls:l,colorSuccess:g,colorSuccessBorder:f,colorSuccessBg:y,colorWarning:O,colorWarningBorder:A,colorWarningBg:W,colorError:X,colorErrorBorder:H,colorErrorBg:ae,colorInfo:pe,colorInfoBorder:ge,colorInfoBg:le}=o;return{[l]:{"&-success":P(y,f,g,o,l),"&-info":P(le,ge,pe,o,l),"&-warning":P(W,A,O,o,l),"&-error":Object.assign(Object.assign({},P(ae,H,X,o,l)),{[`${l}-description > pre`]:{margin:0,padding:0}})}}},Ge=o=>{const{componentCls:l,iconCls:g,motionDurationMid:f,marginXS:y,fontSizeIcon:O,colorIcon:A,colorIconHover:W}=o;return{[l]:{["&-action"]:{marginInlineStart:y},[`${l}-close-icon`]:{marginInlineStart:y,padding:0,overflow:"hidden",fontSize:O,lineHeight:`${O}px`,backgroundColor:"transparent",border:"none",outline:"none",cursor:"pointer",[`${g}-close`]:{color:A,transition:`color ${f}`,"&:hover":{color:W}}},"&-close-text":{color:A,transition:`color ${f}`,"&:hover":{color:W}}}}},Fe=o=>[q(o),et(o),Ge(o)];var Ue=(0,k.Z)("Alert",o=>{const{fontSizeHeading3:l}=o,g=(0,fe.TS)(o,{alertIconSizeLG:l,alertPaddingHorizontal:12});return[Fe(g)]}),Ve=function(o,l){var g={};for(var f in o)Object.prototype.hasOwnProperty.call(o,f)&&l.indexOf(f)<0&&(g[f]=o[f]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var y=0,f=Object.getOwnPropertySymbols(o);y<f.length;y++)l.indexOf(f[y])<0&&Object.prototype.propertyIsEnumerable.call(o,f[y])&&(g[f[y]]=o[f[y]]);return g};const Xe={success:n.Z,info:M.Z,error:C.Z,warning:b.Z},Je=o=>{const{icon:l,prefixCls:g,type:f}=o,y=Xe[f]||null;return l?(0,ie.wm)(l,h.createElement("span",{className:`${g}-icon`},l),()=>({className:S()(`${g}-icon`,{[l.props.className]:l.props.className})})):h.createElement(y,{className:`${g}-icon`})},Ne=o=>{const{isClosable:l,prefixCls:g,closeIcon:f,handleClose:y}=o,O=f===!0||f===void 0?h.createElement(K.Z,null):f;return l?h.createElement("button",{type:"button",onClick:y,className:`${g}-close-icon`,tabIndex:0},O):null};var Qe=o=>{const{description:l,prefixCls:g,message:f,banner:y,className:O,rootClassName:A,style:W,onMouseEnter:X,onMouseLeave:H,onClick:ae,afterClose:pe,showIcon:ge,closable:le,closeText:se,closeIcon:ne,action:De}=o,nt=Ve(o,["description","prefixCls","message","banner","className","rootClassName","style","onMouseEnter","onMouseLeave","onClick","afterClose","showIcon","closable","closeText","closeIcon","action"]),[He,ot]=h.useState(!1),Ze=h.useRef(null),{getPrefixCls:rt,direction:Pe,alert:J}=h.useContext(j.E_),D=rt("alert",g),[Ae,R]=Ue(D),it=oe=>{var Te;ot(!0),(Te=o.onClose)===null||Te===void 0||Te.call(o,oe)},at=h.useMemo(()=>o.type!==void 0?o.type:y?"warning":"info",[o.type,y]),lt=h.useMemo(()=>se?!0:typeof le=="boolean"?le:ne!==!1&&ne!==null&&ne!==void 0,[se,ne,le]),We=y&&ge===void 0?!0:ge,st=S()(D,`${D}-${at}`,{[`${D}-with-description`]:!!l,[`${D}-no-icon`]:!We,[`${D}-banner`]:!!y,[`${D}-rtl`]:Pe==="rtl"},J==null?void 0:J.className,O,A,R),Oe=(0,w.Z)(nt,{aria:!0,data:!0});return Ae(h.createElement($.ZP,{visible:!He,motionName:`${D}-motion`,motionAppear:!1,motionEnter:!1,onLeaveStart:oe=>({maxHeight:oe.offsetHeight}),onLeaveEnd:pe},oe=>{let{className:Te,style:ct}=oe;return h.createElement("div",Object.assign({ref:Ze,"data-show":!He,className:S()(st,Te),style:Object.assign(Object.assign(Object.assign({},J==null?void 0:J.style),W),ct),onMouseEnter:X,onMouseLeave:H,onClick:ae,role:"alert"},Oe),We?h.createElement(Je,{description:l,icon:o.icon,prefixCls:D,type:at}):null,h.createElement("div",{className:`${D}-content`},f?h.createElement("div",{className:`${D}-message`},f):null,l?h.createElement("div",{className:`${D}-description`},l):null),De?h.createElement("div",{className:`${D}-action`},De):null,h.createElement(Ne,{isClosable:lt,prefixCls:D,closeIcon:se||ne,handleClose:it}))}))},tt=a(15671),pt=a(43144),Ye=a(32531),Be=a(73568),e=function(o){(0,Ye.Z)(g,o);var l=(0,Be.Z)(g);function g(){var f;return(0,tt.Z)(this,g),f=l.apply(this,arguments),f.state={error:void 0,info:{componentStack:""}},f}return(0,pt.Z)(g,[{key:"componentDidCatch",value:function(y,O){this.setState({error:y,info:O})}},{key:"render",value:function(){const{message:y,description:O,children:A}=this.props,{error:W,info:X}=this.state,H=X&&X.componentStack?X.componentStack:null,ae=typeof y=="undefined"?(W||"").toString():y,pe=typeof O=="undefined"?H:O;return W?h.createElement(Qe,{type:"error",message:ae,description:h.createElement("pre",{style:{fontSize:"0.9em",overflowX:"auto"}},pe)}):A}}]),g}(h.Component);const p=Qe;p.ErrorBoundary=e;var d=p},4393:function(re,E,a){"use strict";a.d(E,{Z:function(){return gt}});var n=a(94184),C=a.n(n),K=a(98423),b=a(67294),M=a(53124),v=a(98675),S=a(99559),$=a(56440),w=function(e,p){var d={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&p.indexOf(o)<0&&(d[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,o=Object.getOwnPropertySymbols(e);l<o.length;l++)p.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(e,o[l])&&(d[o[l]]=e[o[l]]);return d},ie=e=>{var{prefixCls:p,className:d,hoverable:o=!0}=e,l=w(e,["prefixCls","className","hoverable"]);const{getPrefixCls:g}=b.useContext(M.E_),f=g("card",p),y=C()(`${f}-grid`,d,{[`${f}-grid-hoverable`]:o});return b.createElement("div",Object.assign({},l,{className:y}))},j=a(14747),I=a(67968),k=a(45503);const fe=e=>{const{antCls:p,componentCls:d,headerHeight:o,cardPaddingBase:l,tabsMarginBottom:g}=e;return Object.assign(Object.assign({display:"flex",justifyContent:"center",flexDirection:"column",minHeight:o,marginBottom:-1,padding:`0 ${l}px`,color:e.colorTextHeading,fontWeight:e.fontWeightStrong,fontSize:e.headerFontSize,background:e.headerBg,borderBottom:`${e.lineWidth}px ${e.lineType} ${e.colorBorderSecondary}`,borderRadius:`${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`},(0,j.dF)()),{"&-wrapper":{width:"100%",display:"flex",alignItems:"center"},"&-title":Object.assign(Object.assign({display:"inline-block",flex:1},j.vS),{[`
          > ${d}-typography,
          > ${d}-typography-edit-content
        `]:{insetInlineStart:0,marginTop:0,marginBottom:0}}),[`${p}-tabs-top`]:{clear:"both",marginBottom:g,color:e.colorText,fontWeight:"normal",fontSize:e.fontSize,"&-bar":{borderBottom:`${e.lineWidth}px ${e.lineType} ${e.colorBorderSecondary}`}}})},P=e=>{const{cardPaddingBase:p,colorBorderSecondary:d,cardShadow:o,lineWidth:l}=e;return{width:"33.33%",padding:p,border:0,borderRadius:0,boxShadow:`
      ${l}px 0 0 0 ${d},
      0 ${l}px 0 0 ${d},
      ${l}px ${l}px 0 0 ${d},
      ${l}px 0 0 0 ${d} inset,
      0 ${l}px 0 0 ${d} inset;
    `,transition:`all ${e.motionDurationMid}`,"&-hoverable:hover":{position:"relative",zIndex:1,boxShadow:o}}},q=e=>{const{componentCls:p,iconCls:d,actionsLiMargin:o,cardActionsIconSize:l,colorBorderSecondary:g,actionsBg:f}=e;return Object.assign(Object.assign({margin:0,padding:0,listStyle:"none",background:f,borderTop:`${e.lineWidth}px ${e.lineType} ${g}`,display:"flex",borderRadius:`0 0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px `},(0,j.dF)()),{"& > li":{margin:o,color:e.colorTextDescription,textAlign:"center","> span":{position:"relative",display:"block",minWidth:e.cardActionsIconSize*2,fontSize:e.fontSize,lineHeight:e.lineHeight,cursor:"pointer","&:hover":{color:e.colorPrimary,transition:`color ${e.motionDurationMid}`},[`a:not(${p}-btn), > ${d}`]:{display:"inline-block",width:"100%",color:e.colorTextDescription,lineHeight:`${e.fontSize*e.lineHeight}px`,transition:`color ${e.motionDurationMid}`,"&:hover":{color:e.colorPrimary}},[`> ${d}`]:{fontSize:l,lineHeight:`${l*e.lineHeight}px`}},"&:not(:last-child)":{borderInlineEnd:`${e.lineWidth}px ${e.lineType} ${g}`}}})},et=e=>Object.assign(Object.assign({margin:`-${e.marginXXS}px 0`,display:"flex"},(0,j.dF)()),{"&-avatar":{paddingInlineEnd:e.padding},"&-detail":{overflow:"hidden",flex:1,"> div:not(:last-child)":{marginBottom:e.marginXS}},"&-title":Object.assign({color:e.colorTextHeading,fontWeight:e.fontWeightStrong,fontSize:e.fontSizeLG},j.vS),"&-description":{color:e.colorTextDescription}}),Ge=e=>{const{componentCls:p,cardPaddingBase:d,colorFillAlter:o}=e;return{[`${p}-head`]:{padding:`0 ${d}px`,background:o,"&-title":{fontSize:e.fontSize}},[`${p}-body`]:{padding:`${e.padding}px ${d}px`}}},Fe=e=>{const{componentCls:p}=e;return{overflow:"hidden",[`${p}-body`]:{userSelect:"none"}}},Ue=e=>{const{antCls:p,componentCls:d,cardShadow:o,cardHeadPadding:l,colorBorderSecondary:g,boxShadowTertiary:f,cardPaddingBase:y,extraColor:O}=e;return{[d]:Object.assign(Object.assign({},(0,j.Wf)(e)),{position:"relative",background:e.colorBgContainer,borderRadius:e.borderRadiusLG,[`&:not(${d}-bordered)`]:{boxShadow:f},[`${d}-head`]:fe(e),[`${d}-extra`]:{marginInlineStart:"auto",color:O,fontWeight:"normal",fontSize:e.fontSize},[`${d}-body`]:Object.assign({padding:y,borderRadius:` 0 0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px`},(0,j.dF)()),[`${d}-grid`]:P(e),[`${d}-cover`]:{"> *":{display:"block",width:"100%"},[`img, img + ${p}-image-mask`]:{borderRadius:`${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`}},[`${d}-actions`]:q(e),[`${d}-meta`]:et(e)}),[`${d}-bordered`]:{border:`${e.lineWidth}px ${e.lineType} ${g}`,[`${d}-cover`]:{marginTop:-1,marginInlineStart:-1,marginInlineEnd:-1}},[`${d}-hoverable`]:{cursor:"pointer",transition:`box-shadow ${e.motionDurationMid}, border-color ${e.motionDurationMid}`,"&:hover":{borderColor:"transparent",boxShadow:o}},[`${d}-contain-grid`]:{[`${d}-body`]:{display:"flex",flexWrap:"wrap"},[`&:not(${d}-loading) ${d}-body`]:{marginBlockStart:-e.lineWidth,marginInlineStart:-e.lineWidth,padding:0}},[`${d}-contain-tabs`]:{[`> ${d}-head`]:{[`${d}-head-title, ${d}-extra`]:{paddingTop:l}}},[`${d}-type-inner`]:Ge(e),[`${d}-loading`]:Fe(e),[`${d}-rtl`]:{direction:"rtl"}}},Ve=e=>{const{componentCls:p,cardPaddingSM:d,headerHeightSM:o,headerFontSizeSM:l}=e;return{[`${p}-small`]:{[`> ${p}-head`]:{minHeight:o,padding:`0 ${d}px`,fontSize:l,[`> ${p}-head-wrapper`]:{[`> ${p}-extra`]:{fontSize:e.fontSize}}},[`> ${p}-body`]:{padding:d}},[`${p}-small${p}-contain-tabs`]:{[`> ${p}-head`]:{[`${p}-head-title, ${p}-extra`]:{minHeight:o,paddingTop:0,display:"flex",alignItems:"center"}}}}};var Xe=(0,I.Z)("Card",e=>{const p=(0,k.TS)(e,{cardShadow:e.boxShadowCard,cardHeadPadding:e.padding,cardPaddingBase:e.paddingLG,cardActionsIconSize:e.fontSize,cardPaddingSM:12});return[Ue(p),Ve(p)]},e=>({headerBg:"transparent",headerFontSize:e.fontSizeLG,headerFontSizeSM:e.fontSize,headerHeight:e.fontSizeLG*e.lineHeightLG+e.padding*2,headerHeightSM:e.fontSize*e.lineHeight+e.paddingXS*2,actionsBg:e.colorBgContainer,actionsLiMargin:`${e.paddingSM}px 0`,tabsMarginBottom:-e.padding-e.lineWidth,extraColor:e.colorText})),Je=function(e,p){var d={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&p.indexOf(o)<0&&(d[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,o=Object.getOwnPropertySymbols(e);l<o.length;l++)p.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(e,o[l])&&(d[o[l]]=e[o[l]]);return d};function Ne(e){return e.map((p,d)=>b.createElement("li",{style:{width:`${100/e.length}%`},key:`action-${d}`},b.createElement("span",null,p)))}var Qe=b.forwardRef((e,p)=>{const{prefixCls:d,className:o,rootClassName:l,style:g,extra:f,headStyle:y={},bodyStyle:O={},title:A,loading:W,bordered:X=!0,size:H,type:ae,cover:pe,actions:ge,tabList:le,children:se,activeTabKey:ne,defaultActiveTabKey:De,tabBarExtraContent:nt,hoverable:He,tabProps:ot={}}=e,Ze=Je(e,["prefixCls","className","rootClassName","style","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),{getPrefixCls:rt,direction:Pe,card:J}=b.useContext(M.E_),D=we=>{var Se;(Se=e.onTabChange)===null||Se===void 0||Se.call(e,we)},Ae=b.useMemo(()=>{let we=!1;return b.Children.forEach(se,Se=>{Se&&Se.type&&Se.type===ie&&(we=!0)}),we},[se]),R=rt("card",d),[it,at]=Xe(R),lt=b.createElement(S.Z,{loading:!0,active:!0,paragraph:{rows:4},title:!1},se),We=ne!==void 0,st=Object.assign(Object.assign({},ot),{[We?"activeKey":"defaultActiveKey"]:We?ne:De,tabBarExtraContent:nt});let Oe;const oe=(0,v.Z)(H),Te=!oe||oe==="default"?"large":oe,ct=le?b.createElement($.Z,Object.assign({size:Te},st,{className:`${R}-head-tabs`,onChange:D,items:le.map(we=>{var{tab:Se}=we,Ct=Je(we,["tab"]);return Object.assign({label:Se},Ct)})})):null;(A||f||ct)&&(Oe=b.createElement("div",{className:`${R}-head`,style:y},b.createElement("div",{className:`${R}-head-wrapper`},A&&b.createElement("div",{className:`${R}-head-title`},A),f&&b.createElement("div",{className:`${R}-extra`},f)),ct));const ke=pe?b.createElement("div",{className:`${R}-cover`},pe):null,St=b.createElement("div",{className:`${R}-body`,style:O},W?lt:se),Ot=ge&&ge.length?b.createElement("ul",{className:`${R}-actions`},Ne(ge)):null,xt=(0,K.Z)(Ze,["onTabChange"]),Tt=C()(R,J==null?void 0:J.className,{[`${R}-loading`]:W,[`${R}-bordered`]:X,[`${R}-hoverable`]:He,[`${R}-contain-grid`]:Ae,[`${R}-contain-tabs`]:le&&le.length,[`${R}-${oe}`]:oe,[`${R}-type-${ae}`]:!!ae,[`${R}-rtl`]:Pe==="rtl"},o,l,at),Et=Object.assign(Object.assign({},J==null?void 0:J.style),g);return it(b.createElement("div",Object.assign({ref:p},xt,{className:Tt,style:Et}),Oe,ke,St,Ot))}),tt=function(e,p){var d={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&p.indexOf(o)<0&&(d[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,o=Object.getOwnPropertySymbols(e);l<o.length;l++)p.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(e,o[l])&&(d[o[l]]=e[o[l]]);return d},Ye=e=>{const{prefixCls:p,className:d,avatar:o,title:l,description:g}=e,f=tt(e,["prefixCls","className","avatar","title","description"]),{getPrefixCls:y}=b.useContext(M.E_),O=y("card",p),A=C()(`${O}-meta`,d),W=o?b.createElement("div",{className:`${O}-meta-avatar`},o):null,X=l?b.createElement("div",{className:`${O}-meta-title`},l):null,H=g?b.createElement("div",{className:`${O}-meta-description`},g):null,ae=X||H?b.createElement("div",{className:`${O}-meta-detail`},X,H):null;return b.createElement("div",Object.assign({},f,{className:A}),W,ae)};const Be=Qe;Be.Grid=ie,Be.Meta=Ye;var gt=Be},49867:function(re,E,a){"use strict";a.d(E,{N:function(){return n}});const n=C=>({color:C.colorLink,textDecoration:"none",outline:"none",cursor:"pointer",transition:`color ${C.motionDurationSlow}`,"&:focus, &:hover":{color:C.colorLinkHover},"&:active":{color:C.colorLinkActive}})},96021:function(re,E,a){"use strict";a.d(E,{Z:function(){return Ht}});var n=a(67294),C=a(64894),K=a(87462),b=a(48820),M=a(93771),v=function(i,s){return n.createElement(M.Z,(0,K.Z)({},i,{ref:s,icon:b.Z}))},S=n.forwardRef(v),$=a(27363),w=function(i,s){return n.createElement(M.Z,(0,K.Z)({},i,{ref:s,icon:$.Z}))},h=n.forwardRef(w),ie=a(94184),j=a.n(ie),I=a(20640),k=a.n(I),fe=a(48555),P=a(50344),q=a(8410),et=a(21770),Ge=a(98423),Fe=a(42550),Ue=a(79370),Ve=a(34952),Xe=a(53124),Je=a(10110),Ne=a(83062),ht={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"},Qe=ht,tt=function(i,s){return n.createElement(M.Z,(0,K.Z)({},i,{ref:s,icon:Qe}))},pt=n.forwardRef(tt),Ye=a(15105),Be=a(96159),gt=a(70006),e=a(49867),p=a(67968),d=a(78589),o=a(47673);const l=(t,i,s,r)=>{const{titleMarginBottom:c,fontWeightStrong:L}=r;return{marginBottom:c,color:s,fontWeight:L,fontSize:t,lineHeight:i}},g=t=>{const i=[1,2,3,4,5],s={};return i.forEach(r=>{s[`
      h${r}&,
      div&-h${r},
      div&-h${r} > textarea,
      h${r}
    `]=l(t[`fontSizeHeading${r}`],t[`lineHeightHeading${r}`],t.colorTextHeading,t)}),s},f=t=>{const{componentCls:i}=t;return{"a&, a":Object.assign(Object.assign({},(0,e.N)(t)),{textDecoration:t.linkDecoration,"&:active, &:hover":{textDecoration:t.linkHoverDecoration},[`&[disabled], &${i}-disabled`]:{color:t.colorTextDisabled,cursor:"not-allowed","&:active, &:hover":{color:t.colorTextDisabled},"&:active":{pointerEvents:"none"}}})}},y=t=>({code:{margin:"0 0.2em",paddingInline:"0.4em",paddingBlock:"0.2em 0.1em",fontSize:"85%",fontFamily:t.fontFamilyCode,background:"rgba(150, 150, 150, 0.1)",border:"1px solid rgba(100, 100, 100, 0.2)",borderRadius:3},kbd:{margin:"0 0.2em",paddingInline:"0.4em",paddingBlock:"0.15em 0.1em",fontSize:"90%",fontFamily:t.fontFamilyCode,background:"rgba(150, 150, 150, 0.06)",border:"1px solid rgba(100, 100, 100, 0.2)",borderBottomWidth:2,borderRadius:3},mark:{padding:0,backgroundColor:d.EV[2]},"u, ins":{textDecoration:"underline",textDecorationSkipInk:"auto"},"s, del":{textDecoration:"line-through"},strong:{fontWeight:600},"ul, ol":{marginInline:0,marginBlock:"0 1em",padding:0,li:{marginInline:"20px 0",marginBlock:0,paddingInline:"4px 0",paddingBlock:0}},ul:{listStyleType:"circle",ul:{listStyleType:"disc"}},ol:{listStyleType:"decimal"},"pre, blockquote":{margin:"1em 0"},pre:{padding:"0.4em 0.6em",whiteSpace:"pre-wrap",wordWrap:"break-word",background:"rgba(150, 150, 150, 0.1)",border:"1px solid rgba(100, 100, 100, 0.2)",borderRadius:3,fontFamily:t.fontFamilyCode,code:{display:"inline",margin:0,padding:0,fontSize:"inherit",fontFamily:"inherit",background:"transparent",border:0}},blockquote:{paddingInline:"0.6em 0",paddingBlock:0,borderInlineStart:"4px solid rgba(100, 100, 100, 0.2)",opacity:.85}}),O=t=>{const{componentCls:i}=t,r=(0,o.e5)(t).inputPaddingVertical+1;return{"&-edit-content":{position:"relative","div&":{insetInlineStart:-t.paddingSM,marginTop:-r,marginBottom:`calc(1em - ${r}px)`},[`${i}-edit-content-confirm`]:{position:"absolute",insetInlineEnd:t.marginXS+2,insetBlockEnd:t.marginXS,color:t.colorTextDescription,fontWeight:"normal",fontSize:t.fontSize,fontStyle:"normal",pointerEvents:"none"},textarea:{margin:"0!important",MozTransition:"none",height:"1em"}}}},A=t=>({"&-copy-success":{[`
    &,
    &:hover,
    &:focus`]:{color:t.colorSuccess}}}),W=()=>({[`
  a&-ellipsis,
  span&-ellipsis
  `]:{display:"inline-block",maxWidth:"100%"},"&-single-line":{whiteSpace:"nowrap"},"&-ellipsis-single-line":{overflow:"hidden",textOverflow:"ellipsis","a&, span&":{verticalAlign:"bottom"}},"&-ellipsis-multiple-line":{display:"-webkit-box",overflow:"hidden",WebkitLineClamp:3,WebkitBoxOrient:"vertical"}}),X=t=>{const{componentCls:i,titleMarginTop:s}=t;return{[i]:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({color:t.colorText,wordBreak:"break-word",lineHeight:t.lineHeight,[`&${i}-secondary`]:{color:t.colorTextDescription},[`&${i}-success`]:{color:t.colorSuccess},[`&${i}-warning`]:{color:t.colorWarning},[`&${i}-danger`]:{color:t.colorError,"a&:active, a&:focus":{color:t.colorErrorActive},"a&:hover":{color:t.colorErrorHover}},[`&${i}-disabled`]:{color:t.colorTextDisabled,cursor:"not-allowed",userSelect:"none"},[`
        div&,
        p
      `]:{marginBottom:"1em"}},g(t)),{[`
      & + h1${i},
      & + h2${i},
      & + h3${i},
      & + h4${i},
      & + h5${i}
      `]:{marginTop:s},[`
      div,
      ul,
      li,
      p,
      h1,
      h2,
      h3,
      h4,
      h5`]:{[`
        + h1,
        + h2,
        + h3,
        + h4,
        + h5
        `]:{marginTop:s}}}),y(t)),f(t)),{[`
        ${i}-expand,
        ${i}-edit,
        ${i}-copy
      `]:Object.assign(Object.assign({},(0,e.N)(t)),{marginInlineStart:t.marginXXS})}),O(t)),A(t)),W()),{"&-rtl":{direction:"rtl"}})}};var H=(0,p.Z)("Typography",t=>[X(t)],()=>({titleMarginTop:"1.2em",titleMarginBottom:"0.5em"})),pe=t=>{const{prefixCls:i,"aria-label":s,className:r,style:c,direction:L,maxLength:_,autoSize:ce=!0,value:N,onSave:Z,onCancel:T,onEnd:me,component:ye,enterIcon:de=n.createElement(pt,null)}=t,B=n.useRef(null),G=n.useRef(!1),ue=n.useRef(),[Le,$e]=n.useState(N);n.useEffect(()=>{$e(N)},[N]),n.useEffect(()=>{if(B.current&&B.current.resizableTextArea){const{textArea:Y}=B.current.resizableTextArea;Y.focus();const{length:U}=Y.value;Y.setSelectionRange(U,U)}},[]);const x=Y=>{let{target:U}=Y;$e(U.value.replace(/[\n\r]/g,""))},Q=()=>{G.current=!0},ve=()=>{G.current=!1},ee=Y=>{let{keyCode:U}=Y;G.current||(ue.current=U)},Ke=()=>{Z(Le.trim())},Ie=Y=>{let{keyCode:U,ctrlKey:ut,altKey:ft,metaKey:ze,shiftKey:qe}=Y;ue.current===U&&!G.current&&!ut&&!ft&&!ze&&!qe&&(U===Ye.Z.ENTER?(Ke(),me==null||me()):U===Ye.Z.ESC&&T())},z=()=>{Ke()},F=ye?`${i}-${ye}`:"",[xe,be]=H(i),je=j()(i,`${i}-edit-content`,{[`${i}-rtl`]:L==="rtl"},r,F,be);return xe(n.createElement("div",{className:je,style:c},n.createElement(gt.Z,{ref:B,maxLength:_,value:Le,onChange:x,onKeyDown:ee,onKeyUp:Ie,onCompositionStart:Q,onCompositionEnd:ve,onBlur:z,"aria-label":s,rows:1,autoSize:ce}),de!==null?(0,Be.Tm)(de,{className:`${i}-edit-content-confirm`}):null))},ge=function(t,i){var s={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&i.indexOf(r)<0&&(s[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,r=Object.getOwnPropertySymbols(t);c<r.length;c++)i.indexOf(r[c])<0&&Object.prototype.propertyIsEnumerable.call(t,r[c])&&(s[r[c]]=t[r[c]]);return s},se=n.forwardRef((t,i)=>{const{prefixCls:s,component:r="article",className:c,rootClassName:L,setContentRef:_,children:ce,direction:N,style:Z}=t,T=ge(t,["prefixCls","component","className","rootClassName","setContentRef","children","direction","style"]),{getPrefixCls:me,direction:ye,typography:de}=n.useContext(Xe.E_),B=N!=null?N:ye;let G=i;_&&(G=(0,Fe.sQ)(i,_));const ue=me("typography",s),[Le,$e]=H(ue),x=j()(ue,de==null?void 0:de.className,{[`${ue}-rtl`]:B==="rtl"},c,L,$e),Q=Object.assign(Object.assign({},de==null?void 0:de.style),Z);return Le(n.createElement(r,Object.assign({className:x,style:Q,ref:G},T),ce))});function ne(t,i){return n.useMemo(()=>{const s=!!t;return[s,Object.assign(Object.assign({},i),s&&typeof t=="object"?t:null)]},[t])}var nt=(t,i)=>{const s=n.useRef(!1);n.useEffect(()=>{s.current?t():s.current=!0},i)};function He(t){const i=typeof t;return i==="string"||i==="number"}function ot(t){let i=0;return t.forEach(s=>{He(s)?i+=String(s).length:i+=1}),i}function Ze(t,i){let s=0;const r=[];for(let c=0;c<t.length;c+=1){if(s===i)return r;const L=t[c],ce=He(L)?String(L).length:1,N=s+ce;if(N>i){const Z=i-s;return r.push(String(L).slice(0,Z)),r}r.push(L),s=N}return t}const rt=0,Pe=1,J=2,D=3,Ae=4;var it=t=>{let{enabledMeasure:i,children:s,text:r,width:c,fontSize:L,rows:_,onEllipsis:ce}=t;const[[N,Z,T],me]=n.useState([0,0,0]),[ye,de]=n.useState(0),[B,G]=n.useState(rt),[ue,Le]=n.useState(0),$e=n.useRef(null),x=n.useRef(null),Q=n.useMemo(()=>(0,P.Z)(r),[r]),ve=n.useMemo(()=>ot(Q),[Q]),ee=n.useMemo(()=>!i||B!==D?ye&&B!==Ae&&i?s(Ze(Q,ye),ye<ve):s(Q,!1):s(Ze(Q,Z),Z<ve),[i,B,s,Q,Z,ve]);(0,q.Z)(()=>{i&&c&&L&&ve&&(G(Pe),me([0,Math.ceil(ve/2),ve]))},[i,c,L,r,ve,_]),(0,q.Z)(()=>{var F;B===Pe&&Le(((F=$e.current)===null||F===void 0?void 0:F.offsetHeight)||0)},[B]),(0,q.Z)(()=>{var F,xe;if(ue){if(B===Pe){const be=((F=x.current)===null||F===void 0?void 0:F.offsetHeight)||0,je=_*ue;be<=je?(G(Ae),ce(!1)):G(J)}else if(B===J)if(N!==T){const be=((xe=x.current)===null||xe===void 0?void 0:xe.offsetHeight)||0,je=_*ue;let Y=N,U=T;N===T-1?U=N:be<=je?Y=Z:U=Z;const ut=Math.ceil((Y+U)/2);me([Y,ut,U])}else G(D),de(Z),ce(!0)}},[B,N,T,_,ue]);const Ke={width:c,whiteSpace:"normal",margin:0,padding:0},Ie=(F,xe,be)=>n.createElement("span",{"aria-hidden":!0,ref:xe,style:Object.assign({position:"fixed",display:"block",left:0,top:0,zIndex:-9999,visibility:"hidden",pointerEvents:"none",fontSize:Math.floor(L/2)*2},be)},F),z=(F,xe)=>{const be=Ze(Q,F);return Ie(s(be,!0),xe,Ke)};return n.createElement(n.Fragment,null,ee,i&&B!==D&&B!==Ae&&n.createElement(n.Fragment,null,Ie("lg",$e,{wordBreak:"keep-all",whiteSpace:"nowrap"}),B===Pe?Ie(s(Q,!1),x,Ke):z(Z,x)))},lt=t=>{let{enabledEllipsis:i,isEllipsis:s,children:r,tooltipProps:c}=t;return!(c!=null&&c.title)||!i?r:n.createElement(Ne.Z,Object.assign({open:s?void 0:!1},c),r)},We=function(t,i){var s={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&i.indexOf(r)<0&&(s[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,r=Object.getOwnPropertySymbols(t);c<r.length;c++)i.indexOf(r[c])<0&&Object.prototype.propertyIsEnumerable.call(t,r[c])&&(s[r[c]]=t[r[c]]);return s};function st(t,i){let{mark:s,code:r,underline:c,delete:L,strong:_,keyboard:ce,italic:N}=t,Z=i;function T(me,ye){ye&&(Z=n.createElement(me,{},Z))}return T("strong",_),T("u",c),T("del",L),T("code",r),T("mark",s),T("kbd",ce),T("i",N),Z}function Oe(t,i,s){return t===!0||t===void 0?i:t||s&&i}function oe(t){return t===!1?[!1,!1]:Array.isArray(t)?t:[t]}const Te="...";var ke=n.forwardRef((t,i)=>{var s,r,c;const{prefixCls:L,className:_,style:ce,type:N,disabled:Z,children:T,ellipsis:me,editable:ye,copyable:de,component:B,title:G}=t,ue=We(t,["prefixCls","className","style","type","disabled","children","ellipsis","editable","copyable","component","title"]),{getPrefixCls:Le,direction:$e}=n.useContext(Xe.E_),[x]=(0,Je.Z)("Text"),Q=n.useRef(null),ve=n.useRef(null),ee=Le("typography",L),Ke=(0,Ge.Z)(ue,["mark","code","delete","underline","strong","keyboard","italic"]),[Ie,z]=ne(ye),[F,xe]=(0,et.Z)(!1,{value:z.editing}),{triggerType:be=["icon"]}=z,je=u=>{var m;u&&((m=z.onStart)===null||m===void 0||m.call(z)),xe(u)};nt(()=>{var u;F||(u=ve.current)===null||u===void 0||u.focus()},[F]);const Y=u=>{u==null||u.preventDefault(),je(!0)},U=u=>{var m;(m=z.onChange)===null||m===void 0||m.call(z,u),je(!1)},ut=()=>{var u;(u=z.onCancel)===null||u===void 0||u.call(z),je(!1)},[ft,ze]=ne(de),[qe,wt]=n.useState(!1),$t=n.useRef(null),It={};ze.format&&(It.format=ze.format);const jt=()=>{$t.current&&clearTimeout($t.current)},Zt=u=>{var m;u==null||u.preventDefault(),u==null||u.stopPropagation(),k()(ze.text||String(T)||"",It),wt(!0),jt(),$t.current=setTimeout(()=>{wt(!1)},3e3),(m=ze.onCopy)===null||m===void 0||m.call(ze,u)};n.useEffect(()=>jt,[]);const[Pt,At]=n.useState(!1),[Lt,Wt]=n.useState(!1),[Kt,Gt]=n.useState(!1),[zt,Ft]=n.useState(!1),[Mt,Ut]=n.useState(!1),[Vt,Xt]=n.useState(!0),[Me,V]=ne(me,{expandable:!1}),Ee=Me&&!Kt,{rows:_e=1}=V,mt=n.useMemo(()=>!Ee||V.suffix!==void 0||V.onEllipsis||V.expandable||Ie||ft,[Ee,V,Ie,ft]);(0,q.Z)(()=>{Me&&!mt&&(At((0,Ue.G)("webkitLineClamp")),Wt((0,Ue.G)("textOverflow")))},[mt,Me]);const Ce=n.useMemo(()=>mt?!1:_e===1?Lt:Pt,[mt,Lt,Pt]),Rt=Ee&&(Ce?Mt:zt),Jt=Ee&&_e===1&&Ce,yt=Ee&&_e>1&&Ce,Qt=u=>{var m;Gt(!0),(m=V.onExpand)===null||m===void 0||m.call(V,u)},[Yt,kt]=n.useState(0),[qt,_t]=n.useState(0),en=(u,m)=>{let{offsetWidth:te}=u;var he;kt(te),_t(parseInt((he=window.getComputedStyle)===null||he===void 0?void 0:he.call(window,m).fontSize,10)||0)},tn=u=>{var m;Ft(u),zt!==u&&((m=V.onEllipsis)===null||m===void 0||m.call(V,u))};n.useEffect(()=>{const u=Q.current;if(Me&&Ce&&u){const m=yt?u.offsetHeight<u.scrollHeight:u.offsetWidth<u.scrollWidth;Mt!==m&&Ut(m)}},[Me,Ce,T,yt,Vt]),n.useEffect(()=>{const u=Q.current;if(typeof IntersectionObserver=="undefined"||!u||!Ce||!Ee)return;const m=new IntersectionObserver(()=>{Xt(!!u.offsetParent)});return m.observe(u),()=>{m.disconnect()}},[Ce,Ee]);let Re={};V.tooltip===!0?Re={title:(s=z.text)!==null&&s!==void 0?s:T}:n.isValidElement(V.tooltip)?Re={title:V.tooltip}:typeof V.tooltip=="object"?Re=Object.assign({title:(r=z.text)!==null&&r!==void 0?r:T},V.tooltip):Re={title:V.tooltip};const vt=n.useMemo(()=>{const u=m=>["string","number"].includes(typeof m);if(!(!Me||Ce)){if(u(z.text))return z.text;if(u(T))return T;if(u(G))return G;if(u(Re.title))return Re.title}},[Me,Ce,G,Re.title,Rt]);if(F)return n.createElement(pe,{value:(c=z.text)!==null&&c!==void 0?c:typeof T=="string"?T:"",onSave:U,onCancel:ut,onEnd:z.onEnd,prefixCls:ee,className:_,style:ce,direction:$e,component:B,maxLength:z.maxLength,autoSize:z.autoSize,enterIcon:z.enterIcon});const nn=()=>{const{expandable:u,symbol:m}=V;if(!u)return null;let te;return m?te=m:te=x==null?void 0:x.expand,n.createElement("a",{key:"expand",className:`${ee}-expand`,onClick:Qt,"aria-label":x==null?void 0:x.expand},te)},on=()=>{if(!Ie)return;const{icon:u,tooltip:m}=z,te=(0,P.Z)(m)[0]||(x==null?void 0:x.edit),he=typeof te=="string"?te:"";return be.includes("icon")?n.createElement(Ne.Z,{key:"edit",title:m===!1?"":te},n.createElement(Ve.Z,{ref:ve,className:`${ee}-edit`,onClick:Y,"aria-label":he},u||n.createElement(h,{role:"button"}))):null},rn=()=>{if(!ft)return;const{tooltips:u,icon:m}=ze,te=oe(u),he=oe(m),bt=qe?Oe(te[1],x==null?void 0:x.copied):Oe(te[0],x==null?void 0:x.copy),sn=qe?x==null?void 0:x.copied:x==null?void 0:x.copy,cn=typeof bt=="string"?bt:sn;return n.createElement(Ne.Z,{key:"copy",title:bt},n.createElement(Ve.Z,{className:j()(`${ee}-copy`,qe&&`${ee}-copy-success`),onClick:Zt,"aria-label":cn},qe?Oe(he[1],n.createElement(C.Z,null),!0):Oe(he[0],n.createElement(S,null),!0)))},an=u=>[u&&nn(),on(),rn()],ln=u=>[u&&n.createElement("span",{"aria-hidden":!0,key:"ellipsis"},Te),V.suffix,an(u)];return n.createElement(fe.Z,{onResize:en,disabled:!Ee||Ce},u=>n.createElement(lt,{tooltipProps:Re,enabledEllipsis:Ee,isEllipsis:Rt},n.createElement(se,Object.assign({className:j()({[`${ee}-${N}`]:N,[`${ee}-disabled`]:Z,[`${ee}-ellipsis`]:Me,[`${ee}-single-line`]:Ee&&_e===1,[`${ee}-ellipsis-single-line`]:Jt,[`${ee}-ellipsis-multiple-line`]:yt},_),prefixCls:L,style:Object.assign(Object.assign({},ce),{WebkitLineClamp:yt?_e:void 0}),component:B,ref:(0,Fe.sQ)(u,Q,i),direction:$e,onClick:be.includes("text")?Y:void 0,"aria-label":vt==null?void 0:vt.toString(),title:G},Ke),n.createElement(it,{enabledMeasure:Ee&&!Ce,text:T,rows:_e,width:Yt,fontSize:qt,onEllipsis:tn},(m,te)=>{let he=m;return m.length&&te&&vt&&(he=n.createElement("span",{key:"show-content","aria-hidden":!0},he)),st(t,n.createElement(n.Fragment,null,he,ln(te)))}))))}),St=function(t,i){var s={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&i.indexOf(r)<0&&(s[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,r=Object.getOwnPropertySymbols(t);c<r.length;c++)i.indexOf(r[c])<0&&Object.prototype.propertyIsEnumerable.call(t,r[c])&&(s[r[c]]=t[r[c]]);return s},xt=n.forwardRef((t,i)=>{var{ellipsis:s,rel:r}=t,c=St(t,["ellipsis","rel"]);const L=Object.assign(Object.assign({},c),{rel:r===void 0&&c.target==="_blank"?"noopener noreferrer":r});return delete L.navigate,n.createElement(ke,Object.assign({},L,{ref:i,ellipsis:!!s,component:"a"}))}),Et=n.forwardRef((t,i)=>n.createElement(ke,Object.assign({ref:i},t,{component:"div"}))),we=function(t,i){var s={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&i.indexOf(r)<0&&(s[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,r=Object.getOwnPropertySymbols(t);c<r.length;c++)i.indexOf(r[c])<0&&Object.prototype.propertyIsEnumerable.call(t,r[c])&&(s[r[c]]=t[r[c]]);return s};const Se=(t,i)=>{var{ellipsis:s}=t,r=we(t,["ellipsis"]);const c=n.useMemo(()=>s&&typeof s=="object"?(0,Ge.Z)(s,["expandable","rows"]):s,[s]);return n.createElement(ke,Object.assign({ref:i},r,{ellipsis:c,component:"span"}))};var Ct=n.forwardRef(Se),Nt=function(t,i){var s={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&i.indexOf(r)<0&&(s[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,r=Object.getOwnPropertySymbols(t);c<r.length;c++)i.indexOf(r[c])<0&&Object.prototype.propertyIsEnumerable.call(t,r[c])&&(s[r[c]]=t[r[c]]);return s};const Bt=[1,2,3,4,5];var Dt=n.forwardRef((t,i)=>{const{level:s=1}=t,r=Nt(t,["level"]);let c;return Bt.includes(s)?c=`h${s}`:c="h1",n.createElement(ke,Object.assign({ref:i},r,{component:c}))});const dt=se;dt.Text=Ct,dt.Link=xt,dt.Title=Dt,dt.Paragraph=Et;var Ht=dt},64894:function(re,E,a){"use strict";var n=a(87462),C=a(67294),K=a(32857),b=a(93771),M=function(S,$){return C.createElement(b.Z,(0,n.Z)({},S,{ref:$,icon:K.Z}))};E.Z=C.forwardRef(M)},20640:function(re,E,a){"use strict";var n=a(11742),C={"text/plain":"Text","text/html":"Url",default:"Text"},K="Copy to clipboard: #{key}, Enter";function b(v){var S=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return v.replace(/#{\s*key\s*}/g,S)}function M(v,S){var $,w,h,ie,j,I,k=!1;S||(S={}),$=S.debug||!1;try{h=n(),ie=document.createRange(),j=document.getSelection(),I=document.createElement("span"),I.textContent=v,I.ariaHidden="true",I.style.all="unset",I.style.position="fixed",I.style.top=0,I.style.clip="rect(0, 0, 0, 0)",I.style.whiteSpace="pre",I.style.webkitUserSelect="text",I.style.MozUserSelect="text",I.style.msUserSelect="text",I.style.userSelect="text",I.addEventListener("copy",function(P){if(P.stopPropagation(),S.format)if(P.preventDefault(),typeof P.clipboardData=="undefined"){$&&console.warn("unable to use e.clipboardData"),$&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var q=C[S.format]||C.default;window.clipboardData.setData(q,v)}else P.clipboardData.clearData(),P.clipboardData.setData(S.format,v);S.onCopy&&(P.preventDefault(),S.onCopy(P.clipboardData))}),document.body.appendChild(I),ie.selectNodeContents(I),j.addRange(ie);var fe=document.execCommand("copy");if(!fe)throw new Error("copy command was unsuccessful");k=!0}catch(P){$&&console.error("unable to copy using execCommand: ",P),$&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(S.format||"text",v),S.onCopy&&S.onCopy(window.clipboardData),k=!0}catch(q){$&&console.error("unable to copy using clipboardData: ",q),$&&console.error("falling back to prompt"),w=b("message"in S?S.message:K),window.prompt(w,v)}}finally{j&&(typeof j.removeRange=="function"?j.removeRange(ie):j.removeAllRanges()),I&&document.body.removeChild(I),h()}return k}re.exports=M},79370:function(re,E,a){"use strict";a.d(E,{G:function(){return b}});var n=a(98924),C=function(v){if((0,n.Z)()&&window.document.documentElement){var S=Array.isArray(v)?v:[v],$=window.document.documentElement;return S.some(function(w){return w in $.style})}return!1},K=function(v,S){if(!C(v))return!1;var $=document.createElement("div"),w=$.style[v];return $.style[v]=S,$.style[v]!==w};function b(M,v){return!Array.isArray(M)&&v!==void 0?K(M,v):C(M)}},11742:function(re){re.exports=function(){var E=document.getSelection();if(!E.rangeCount)return function(){};for(var a=document.activeElement,n=[],C=0;C<E.rangeCount;C++)n.push(E.getRangeAt(C));switch(a.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":a.blur();break;default:a=null;break}return E.removeAllRanges(),function(){E.type==="Caret"&&E.removeAllRanges(),E.rangeCount||n.forEach(function(K){E.addRange(K)}),a&&a.focus()}}}}]);
