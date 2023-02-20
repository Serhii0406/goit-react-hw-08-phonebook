"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[491],{2144:function(e,a,r){r.d(a,{Z:function(){return E}});var s=r(1413),i=r(5987),t=r(1694),o=r.n(t),l=r(2791),n=r(162),c=r(6543),d=r(7472),f=r(3329),v=["bsPrefix","className","variant","as"],m=l.forwardRef((function(e,a){var r=e.bsPrefix,t=e.className,l=e.variant,c=e.as,d=void 0===c?"img":c,m=(0,i.Z)(e,v),u=(0,n.vE)(r,"card-img");return(0,f.jsx)(d,(0,s.Z)({ref:a,className:o()(l?"".concat(u,"-").concat(l):u,t)},m))}));m.displayName="CardImg";var u=m,p=l.createContext(null);p.displayName="CardHeaderContext";var b=p,x=["bsPrefix","className","as"],Z=l.forwardRef((function(e,a){var r=e.bsPrefix,t=e.className,c=e.as,d=void 0===c?"div":c,v=(0,i.Z)(e,x),m=(0,n.vE)(r,"card-header"),u=(0,l.useMemo)((function(){return{cardHeaderBsPrefix:m}}),[m]);return(0,f.jsx)(b.Provider,{value:u,children:(0,f.jsx)(d,(0,s.Z)((0,s.Z)({ref:a},v),{},{className:o()(t,m)}))})}));Z.displayName="CardHeader";var N=Z,h=["bsPrefix","className","bg","text","border","body","children","as"],y=(0,d.Z)("h5"),P=(0,d.Z)("h6"),j=(0,c.Z)("card-body"),w=(0,c.Z)("card-title",{Component:y}),I=(0,c.Z)("card-subtitle",{Component:P}),C=(0,c.Z)("card-link",{Component:"a"}),g=(0,c.Z)("card-text",{Component:"p"}),k=(0,c.Z)("card-footer"),F=(0,c.Z)("card-img-overlay"),R=l.forwardRef((function(e,a){var r=e.bsPrefix,t=e.className,l=e.bg,c=e.text,d=e.border,v=e.body,m=e.children,u=e.as,p=void 0===u?"div":u,b=(0,i.Z)(e,h),x=(0,n.vE)(r,"card");return(0,f.jsx)(p,(0,s.Z)((0,s.Z)({ref:a},b),{},{className:o()(t,x,l&&"bg-".concat(l),c&&"text-".concat(c),d&&"border-".concat(d)),children:v?(0,f.jsx)(j,{children:m}):m}))}));R.displayName="Card",R.defaultProps={body:!1};var E=Object.assign(R,{Img:u,Title:w,Subtitle:I,Body:j,Link:C,Text:g,Header:N,Footer:k,ImgOverlay:F})},3027:function(e,a,r){r.d(a,{Z:function(){return te}});var s=r(1413),i=r(5987),t=r(1694),o=r.n(t),l=r(2007),n=r.n(l),c=r(2791),d=r(3329),f=["as","className","type","tooltip"],v={type:n().string,tooltip:n().bool,as:n().elementType},m=c.forwardRef((function(e,a){var r=e.as,t=void 0===r?"div":r,l=e.className,n=e.type,c=void 0===n?"valid":n,v=e.tooltip,m=void 0!==v&&v,u=(0,i.Z)(e,f);return(0,d.jsx)(t,(0,s.Z)((0,s.Z)({},u),{},{ref:a,className:o()(l,"".concat(c,"-").concat(m?"tooltip":"feedback"))}))}));m.displayName="Feedback",m.propTypes=v;var u=m,p=c.createContext({}),b=r(162),x=["id","bsPrefix","className","type","isValid","isInvalid","as"],Z=c.forwardRef((function(e,a){var r=e.id,t=e.bsPrefix,l=e.className,n=e.type,f=void 0===n?"checkbox":n,v=e.isValid,m=void 0!==v&&v,u=e.isInvalid,Z=void 0!==u&&u,N=e.as,h=void 0===N?"input":N,y=(0,i.Z)(e,x),P=(0,c.useContext)(p).controlId;return t=(0,b.vE)(t,"form-check-input"),(0,d.jsx)(h,(0,s.Z)((0,s.Z)({},y),{},{ref:a,type:f,id:r||P,className:o()(l,t,m&&"is-valid",Z&&"is-invalid")}))}));Z.displayName="FormCheckInput";var N=Z,h=["bsPrefix","className","htmlFor"],y=c.forwardRef((function(e,a){var r=e.bsPrefix,t=e.className,l=e.htmlFor,n=(0,i.Z)(e,h),f=(0,c.useContext)(p).controlId;return r=(0,b.vE)(r,"form-check-label"),(0,d.jsx)("label",(0,s.Z)((0,s.Z)({},n),{},{ref:a,htmlFor:l||f,className:o()(t,r)}))}));y.displayName="FormCheckLabel";var P=y;var j=["id","bsPrefix","bsSwitchPrefix","inline","reverse","disabled","isValid","isInvalid","feedbackTooltip","feedback","feedbackType","className","style","title","type","label","children","as"],w=c.forwardRef((function(e,a){var r=e.id,t=e.bsPrefix,l=e.bsSwitchPrefix,n=e.inline,f=void 0!==n&&n,v=e.reverse,m=void 0!==v&&v,x=e.disabled,Z=void 0!==x&&x,h=e.isValid,y=void 0!==h&&h,w=e.isInvalid,I=void 0!==w&&w,C=e.feedbackTooltip,g=void 0!==C&&C,k=e.feedback,F=e.feedbackType,R=e.className,E=e.style,T=e.title,z=void 0===T?"":T,S=e.type,V=void 0===S?"checkbox":S,L=e.label,O=e.children,H=e.as,_=void 0===H?"input":H,G=(0,i.Z)(e,j);t=(0,b.vE)(t,"form-check"),l=(0,b.vE)(l,"form-switch");var M=(0,c.useContext)(p).controlId,B=(0,c.useMemo)((function(){return{controlId:r||M}}),[M,r]),A=!O&&null!=L&&!1!==L||function(e,a){return c.Children.toArray(e).some((function(e){return c.isValidElement(e)&&e.type===a}))}(O,P),q=(0,d.jsx)(N,(0,s.Z)((0,s.Z)({},G),{},{type:"switch"===V?"checkbox":V,ref:a,isValid:y,isInvalid:I,disabled:Z,as:_}));return(0,d.jsx)(p.Provider,{value:B,children:(0,d.jsx)("div",{style:E,className:o()(R,A&&t,f&&"".concat(t,"-inline"),m&&"".concat(t,"-reverse"),"switch"===V&&l),children:O||(0,d.jsxs)(d.Fragment,{children:[q,A&&(0,d.jsx)(P,{title:z,children:L}),k&&(0,d.jsx)(u,{type:F,tooltip:g,children:k})]})})})}));w.displayName="FormCheck";var I=Object.assign(w,{Input:N,Label:P}),C=r(4942),g=(r(2391),["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"]),k=c.forwardRef((function(e,a){var r,t,l=e.bsPrefix,n=e.type,f=e.size,v=e.htmlSize,m=e.id,u=e.className,x=e.isValid,Z=void 0!==x&&x,N=e.isInvalid,h=void 0!==N&&N,y=e.plaintext,P=e.readOnly,j=e.as,w=void 0===j?"input":j,I=(0,i.Z)(e,g),k=(0,c.useContext)(p).controlId;(l=(0,b.vE)(l,"form-control"),y)?r=(0,C.Z)({},"".concat(l,"-plaintext"),!0):(t={},(0,C.Z)(t,l,!0),(0,C.Z)(t,"".concat(l,"-").concat(f),f),r=t);return(0,d.jsx)(w,(0,s.Z)((0,s.Z)({},I),{},{type:n,size:v,ref:a,readOnly:P,id:m||k,className:o()(u,r,Z&&"is-valid",h&&"is-invalid","color"===n&&"".concat(l,"-color"))}))}));k.displayName="FormControl";var F=Object.assign(k,{Feedback:u}),R=(0,r(6543).Z)("form-floating"),E=["controlId","as"],T=c.forwardRef((function(e,a){var r=e.controlId,t=e.as,o=void 0===t?"div":t,l=(0,i.Z)(e,E),n=(0,c.useMemo)((function(){return{controlId:r}}),[r]);return(0,d.jsx)(p.Provider,{value:n,children:(0,d.jsx)(o,(0,s.Z)((0,s.Z)({},l),{},{ref:a}))})}));T.displayName="FormGroup";var z=T,S=r(9439),V=["as","bsPrefix","className"],L=["className"];var O=c.forwardRef((function(e,a){var r=function(e){var a=e.as,r=e.bsPrefix,t=e.className,l=(0,i.Z)(e,V);r=(0,b.vE)(r,"col");var n=(0,b.pi)(),c=(0,b.zG)(),d=[],f=[];return n.forEach((function(e){var a,s,i,t=l[e];delete l[e],"object"===typeof t&&null!=t?(a=t.span,s=t.offset,i=t.order):a=t;var o=e!==c?"-".concat(e):"";a&&d.push(!0===a?"".concat(r).concat(o):"".concat(r).concat(o,"-").concat(a)),null!=i&&f.push("order".concat(o,"-").concat(i)),null!=s&&f.push("offset".concat(o,"-").concat(s))})),[(0,s.Z)((0,s.Z)({},l),{},{className:o().apply(void 0,[t].concat(d,f))}),{as:a,bsPrefix:r,spans:d}]}(e),t=(0,S.Z)(r,2),l=t[0],n=l.className,c=(0,i.Z)(l,L),f=t[1],v=f.as,m=void 0===v?"div":v,u=f.bsPrefix,p=f.spans;return(0,d.jsx)(m,(0,s.Z)((0,s.Z)({},c),{},{ref:a,className:o()(n,!p.length&&u)}))}));O.displayName="Col";var H=O,_=["as","bsPrefix","column","visuallyHidden","className","htmlFor"],G=c.forwardRef((function(e,a){var r=e.as,t=void 0===r?"label":r,l=e.bsPrefix,n=e.column,f=e.visuallyHidden,v=e.className,m=e.htmlFor,u=(0,i.Z)(e,_),x=(0,c.useContext)(p).controlId;l=(0,b.vE)(l,"form-label");var Z="col-form-label";"string"===typeof n&&(Z="".concat(Z," ").concat(Z,"-").concat(n));var N=o()(v,l,f&&"visually-hidden",n&&Z);return m=m||x,n?(0,d.jsx)(H,(0,s.Z)({ref:a,as:"label",className:N,htmlFor:m},u)):(0,d.jsx)(t,(0,s.Z)({ref:a,className:N,htmlFor:m},u))}));G.displayName="FormLabel",G.defaultProps={column:!1,visuallyHidden:!1};var M=G,B=["bsPrefix","className","id"],A=c.forwardRef((function(e,a){var r=e.bsPrefix,t=e.className,l=e.id,n=(0,i.Z)(e,B),f=(0,c.useContext)(p).controlId;return r=(0,b.vE)(r,"form-range"),(0,d.jsx)("input",(0,s.Z)((0,s.Z)({},n),{},{type:"range",ref:a,className:o()(t,r),id:l||f}))}));A.displayName="FormRange";var q=A,D=["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"],J=c.forwardRef((function(e,a){var r=e.bsPrefix,t=e.size,l=e.htmlSize,n=e.className,f=e.isValid,v=void 0!==f&&f,m=e.isInvalid,u=void 0!==m&&m,x=e.id,Z=(0,i.Z)(e,D),N=(0,c.useContext)(p).controlId;return r=(0,b.vE)(r,"form-select"),(0,d.jsx)("select",(0,s.Z)((0,s.Z)({},Z),{},{size:l,ref:a,className:o()(n,r,t&&"".concat(r,"-").concat(t),v&&"is-valid",u&&"is-invalid"),id:x||N}))}));J.displayName="FormSelect";var K=J,Q=["bsPrefix","className","as","muted"],U=c.forwardRef((function(e,a){var r=e.bsPrefix,t=e.className,l=e.as,n=void 0===l?"small":l,c=e.muted,f=(0,i.Z)(e,Q);return r=(0,b.vE)(r,"form-text"),(0,d.jsx)(n,(0,s.Z)((0,s.Z)({},f),{},{ref:a,className:o()(t,r,c&&"text-muted")}))}));U.displayName="FormText";var W=U,X=c.forwardRef((function(e,a){return(0,d.jsx)(I,(0,s.Z)((0,s.Z)({},e),{},{ref:a,type:"switch"}))}));X.displayName="Switch";var Y=Object.assign(X,{Input:I.Input,Label:I.Label}),$=["bsPrefix","className","children","controlId","label"],ee=c.forwardRef((function(e,a){var r=e.bsPrefix,t=e.className,l=e.children,n=e.controlId,c=e.label,f=(0,i.Z)(e,$);return r=(0,b.vE)(r,"form-floating"),(0,d.jsxs)(z,(0,s.Z)((0,s.Z)({ref:a,className:o()(t,r),controlId:n},f),{},{children:[l,(0,d.jsx)("label",{htmlFor:n,children:c})]}))}));ee.displayName="FloatingLabel";var ae=ee,re=["className","validated","as"],se={_ref:n().any,validated:n().bool,as:n().elementType},ie=c.forwardRef((function(e,a){var r=e.className,t=e.validated,l=e.as,n=void 0===l?"form":l,c=(0,i.Z)(e,re);return(0,d.jsx)(n,(0,s.Z)((0,s.Z)({},c),{},{ref:a,className:o()(r,t&&"was-validated")}))}));ie.displayName="Form",ie.propTypes=se;var te=Object.assign(ie,{Group:z,Control:F,Floating:R,Check:I,Switch:Y,Label:M,Text:W,Range:q,Select:K,FloatingLabel:ae})},2391:function(e){var a=function(){};e.exports=a}}]);
//# sourceMappingURL=491.3279bee0.chunk.js.map