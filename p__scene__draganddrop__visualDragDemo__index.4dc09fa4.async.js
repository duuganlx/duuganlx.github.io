"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[730],{97308:function(t,e,n){n.r(e),n.d(e,{default:function(){return _}});var i=n(5574),r=n.n(i),o=n(61504),s=n(71577),a=n(67294),l=n(19632),u=n.n(l),d=n(75661),c=n(80854),h=n(96486),p=n(85893),f=function(){return(0,p.jsxs)("svg",{width:"100%",height:"100%",xmlns:"http://www.w3.org/2000/svg",style:{position:"relative",top:0,left:0},children:[(0,p.jsxs)("defs",{children:[(0,p.jsx)("pattern",{id:"smallGrid",width:"7.236328125",height:"7.236328125",patternUnits:"userSpaceOnUse",children:(0,p.jsx)("path",{d:"M 7.236328125 0 L 0 0 0 7.236328125",fill:"none",stroke:"rgba(207, 207, 207, 0.3)",strokeWidth:"1"})}),(0,p.jsxs)("pattern",{id:"grid",width:"36.181640625",height:"36.181640625",patternUnits:"userSpaceOnUse",children:[(0,p.jsx)("rect",{width:"36.181640625",height:"36.181640625",fill:"url(#smallGrid)"}),(0,p.jsx)("path",{d:"M 36.181640625 0 L 0 0 0 36.181640625",fill:"none",stroke:"rgba(186, 186, 186, 0.5)",strokeWidth:"1"})]})]}),(0,p.jsx)("rect",{width:"100%",height:"100%",fill:"url(#grid)"})]})},x=n(97857),m=n.n(x),v=n(48689),g=n(51042),y=n(52745),w=n(24556),j=n(434),b=["lt","t","rt","r","rb","b","lb","l"];function C(t,e,n,i){switch(t){case"lt":return function(t,e){var n=t.width,i=t.height,r=t.top,o=void 0===r?0:r,s=t.left,a=void 0===s?0:s,l=Math.max(0,e.x),u=Math.max(0,e.y),d=a-l,c=o-u;t.width=n+d,t.height=i+c,t.top=u,t.left=l}(e,n);case"t":return function(t,e){var n=t.height,i=t.top,r=void 0===i?0:i,o=Math.max(0,e.y),s=r-o;t.height=n+s,t.top=o}(e,n);case"rt":return function(t,e,n){var i=t.height,r=t.top,o=t.left,s=void 0===o?0:o,a=Math.max(0,Math.min(n.width,e.x)),l=Math.max(0,e.y),u=a-s,d=r-l;t.width=u,t.height=i+d,t.top=l}(e,n,i);case"r":return function(t,e,n){var i=n.width;if(!(e.x>i)){var r=e.x-t.left;t.width=r}}(e,n,i);case"rb":return function(t,e,n){var i=t.top,r=t.left,o=Math.max(0,Math.min(n.width,e.x))-r,s=Math.max(0,Math.min(n.height,e.y))-i;t.width=o,t.height=s}(e,n,i);case"b":return function(t,e,n){var i=n.height;e.y>i||(t.height=e.y-t.top)}(e,n,i);case"lb":return function(t,e,n){var i=t.width,r=t.top,o=t.left,s=Math.max(0,e.x),a=o-s,l=Math.max(0,Math.min(n.height,e.y))-r;t.width=i+a,t.height=l,t.left=s}(e,n,i);case"l":return function(t,e){var n=t.width,i=t.left;if(!(e.x<0)){var r=i-e.x;t.width=n+r,t.left=e.x}}(e,n)}}var M=function(t){var e=t.children,n=t.element,i=t.editorClient,r=t.isEditState,o=n.style,a=(0,c.useModel)("scene.draganddrop.visualDragDemo.model",(function(t){return{curComponent:t.curComponent,realtimeList:t.realtimeList,canvasStyle:t.canvasStyle,setRealtimeList:t.upRealtimeList,updateCurComponent:t.updateCurComponent,setCurComponent:t.upCurComponent}})),l=a.curComponent,u=a.realtimeList,d=a.canvasStyle,h=a.setRealtimeList,f=a.updateCurComponent,x=a.setCurComponent,M=(0,w.l)((function(){return{position:"absolute",outline:"1px solid #d9d9d9",".shape-point":{position:"absolute",background:"#fff",border:"1px solid #59c7f9",width:"8px",height:"8px",borderRadius:"50%",zIndex:1},"&.active":{outline:"1px solid #70c0ff",userSelect:"none"},"&:hover":{cursor:"move"}}}));return(0,p.jsxs)("div",{className:"".concat(M," ").concat(r&&(null==l?void 0:l.id)===n.id?"active":""),style:o,onMouseDown:function(t){r&&function(t){t.stopPropagation(),x(n);var e=m()({},o),i=t.clientX,r=t.clientY,s=Number(e.top),a=Number(e.left),l=function(t){var o=t.clientX-i,l=t.clientY-r,u=d.height,c=d.width,h=o+a,p=l+s;e.left=Math.max(0,Math.min(h,c-e.width)),e.top=Math.max(0,Math.min(p,u-e.height)),f(n,e)};document.addEventListener("mousemove",l),document.addEventListener("mouseup",(function t(){document.removeEventListener("mousemove",l),document.removeEventListener("mouseup",t)}))}(t)},children:[r&&(null==l?void 0:l.id)===n.id?(0,p.jsxs)(p.Fragment,{children:[b.map((function(t){return(0,p.jsx)("div",{className:"shape-point",style:(e=t,s=o.width,a=o.height,l=s/2,u=a/2,c={lt:[0,0],rt:[s,0],lb:[0,a],rb:[s,a],t:[l,0],b:[l,a],l:[0,Math.floor(u)],r:[s,Math.floor(u)]}[e],{marginLeft:"-4px",marginTop:"-4px",left:"".concat(c[0],"px"),top:"".concat(c[1],"px"),cursor:{lt:"nw-resize",t:"n-resize",rt:"ne-resize",r:"e-resize",rb:"se-resize",b:"s-resize",lb:"sw-resize",l:"w-resize"}[e]}),onMouseDown:function(e){r&&function(t,e){e.stopPropagation(),e.preventDefault();var r=m()({},o),s=function(e){var o={x:e.clientX-Math.round(i.left),y:e.clientY-Math.round(i.top)};C(t,r,o,d),f(n,r)};document.addEventListener("mousemove",s),document.addEventListener("mouseup",(function t(){document.removeEventListener("mousemove",s),document.removeEventListener("mouseup",t)}))}(t,e)}},t);var e,s,a,l,u,c})),(0,p.jsx)("div",{style:{position:"absolute",bottom:"-35px",right:"10px"},children:(0,p.jsxs)(j.Z,{children:[(0,p.jsx)(s.ZP,{type:"primary",shape:"circle",icon:(0,p.jsx)(v.Z,{}),onClick:function(){var t=u.filter((function(t){return t.id!==(null==l?void 0:l.id)}));h(t)}}),(0,p.jsx)(s.ZP,{type:"primary",shape:"circle",icon:(0,p.jsx)(g.Z,{}),onClick:function(){f(n,m()(m()({},n.style),{},{width:n.style.width+10}))}}),(0,p.jsx)(s.ZP,{type:"primary",shape:"circle",icon:(0,p.jsx)(y.Z,{}),onClick:function(){f(n,m()(m()({},n.style),{},{width:n.style.width-10}))}})]})})]}):null,e]})},L=n(6154),S=n(84031),k=function(t){var e=t.style,n=t.xAxis,i=t.yAxis,o=t.series,s=(0,a.useState)(!1),l=r()(s,2),u=l[0],d=l[1],c={grid:{top:50,right:8,bottom:24,left:36},xAxis:n,yAxis:i,series:o};return(0,p.jsxs)("div",{onDoubleClick:function(){d(!0)},children:[(0,p.jsx)(S.Z,{option:c,style:{width:"".concat(e.width,"px"),height:"".concat(e.height,"px"),backgroundColor:"#fff"}}),(0,p.jsx)(L.Z,{open:u,onCancel:function(){return d(!1)},onOk:function(){return d(!1)},children:"修改图表配置...."})]})},D=n(14339).Z.TextArea,R=function(t){var e=t.style,n=(0,a.useRef)(null),i=(0,a.useState)("双击编辑文字"),o=r()(i,2),s=o[0],l=o[1],u=(0,a.useState)(!1),d=r()(u,2),c=d[0],h=d[1],f=(0,w.l)((function(){return{height:"24px",lineHeight:"24px",boxShadow:"0px 0px 6px 0px rgba(95, 109, 128, 0.16)",backgroundColor:"#fff",borderRadius:"3px",overflow:"hidden",padding:"5px 6px"}}));return(0,p.jsxs)("div",{className:f,style:e,onDoubleClick:function(){h(!0)},children:[(0,p.jsx)("div",{ref:n,dangerouslySetInnerHTML:{__html:s}}),(0,p.jsx)(L.Z,{open:c,onCancel:function(){return h(!1)},onOk:function(){return h(!1)},children:(0,p.jsx)(D,{rows:4,value:s,onChange:function(t){l(t.target.value)}})})]})},z=1,E=2,Z=[{type:z,label:"文本",style:{width:400,height:200,fontWeight:400,letterSpacing:0}},{type:E,label:"折线图",style:{width:600,height:300},xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},series:[{data:[820,932,901,934,1290,1330,1320],type:"line",smooth:!0}]}];function T(t){switch(t.type){case z:return(0,p.jsx)(R,m()({},t));case E:return(0,p.jsx)(k,m()({},t));default:return(0,p.jsx)(p.Fragment,{children:"未知组件..."})}}var A=function(){var t=(0,w.l)((function(){return{height:"100%",width:"100%",display:"flex",".list":{width:"80px",height:"40px",border:"1px solid #ddd",cursor:"grab",textAlign:"center",color:"#333",padding:"2px 5px",display:"flex",alignItems:"center",justifyContent:"center","&:hover":{cursor:"grabbing"}}}}));return(0,p.jsx)("div",{className:t,onDragStart:function(t){t.dataTransfer.setData("comType",t.target.dataset.type)},children:Z.map((function(t,e){return(0,p.jsx)("div",{className:"list",draggable:!0,"data-index":e,"data-type":t.type,children:(0,p.jsx)("span",{children:t.label})},e)}))})},P=function(){var t=(0,a.useRef)(null),e=(0,c.useModel)("scene.draganddrop.visualDragDemo.model",(function(t){return{realtimeList:t.realtimeList,setRealtimeList:t.upRealtimeList,setCurComponent:t.upCurComponent,setCanvasStyle:t.upCanvasStyle}})),n=e.realtimeList,i=e.setRealtimeList,r=e.setCurComponent,o=e.setCanvasStyle;return(0,a.useEffect)((function(){t.current&&o({height:t.current.clientHeight,width:t.current.clientWidth})}),[t]),window.addEventListener("resize",(function(){t.current&&o({height:t.current.clientHeight,width:t.current.clientWidth})})),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("div",{ref:t,style:{width:"95vw",height:"80vh",backgroundColor:"#fff"},onDragOver:function(t){t.preventDefault()},onDrop:function(e){var r;e.preventDefault(),e.stopPropagation();var o=+e.dataTransfer.getData("comType"),s=null===(r=t.current)||void 0===r?void 0:r.getBoundingClientRect();if(o&&s){var a=(0,h.cloneDeep)(Z.find((function(t){return t.type===o})));if(!a)return;a.id=(0,d.x)(),a.style.top=e.clientY-s.y,a.style.left=e.clientX-s.x,a.style.zIndex=n.length+1,i([].concat(u()(n),[a]))}},onMouseDown:function(t){t.stopPropagation(),r(null)},children:[(0,p.jsx)(f,{}),n.map((function(e){var n;return(0,p.jsx)(M,{element:e,editorClient:null===(n=t.current)||void 0===n?void 0:n.getBoundingClientRect(),isEditState:!0,children:T(e)},e.id)}))]}),(0,p.jsx)("div",{style:{position:"absolute",bottom:0,width:"100%"},children:(0,p.jsx)(A,{})})]})},N=function(t){console.log(t);var e=(0,c.useModel)("scene.draganddrop.visualDragDemo.model",(function(t){return{realtimeList:t.realtimeList}})).realtimeList,n=(0,a.useRef)(null);return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("div",{style:{width:"95vw",height:"80vh",backgroundColor:"#fff"},children:e.map((function(t){var e;return(0,p.jsx)(M,{element:t,editorClient:null===(e=n.current)||void 0===e?void 0:e.getBoundingClientRect(),isEditState:!1,children:T(t)},t.id)}))})})},_=function(){var t=(0,a.useState)(!1),e=r()(t,2),n=e[0],i=e[1];return(0,p.jsx)(o._z,{fixedHeader:!1,subTitle:(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(s.ZP,{type:"primary",size:"small",onClick:function(){i(!n)},children:n?"保存":"编辑"})}),children:n?(0,p.jsx)(P,{}):(0,p.jsx)(N,{})})}}}]);