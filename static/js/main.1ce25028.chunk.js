(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(4),s=n.n(a),c=n(5),r=n(6),i=n(8),l=n(7),u=n(1),o=n.n(u),m=(n(13),n(2)),b=(n(14),n(0)),j=function(e){var t=e.source,n=Object(u.useState)(0),a=Object(m.a)(n,2),s=a[0],c=a[1],r=Object(u.useState)(3),i=Object(m.a)(r,2),l=i[0],o=i[1],j=Object(u.useState)(3),p=Object(m.a)(j,2),h=p[0],g=p[1],O=Object(u.useState)(130),d=Object(m.a)(O,2),_=d[0],x=d[1],v=Object(u.useState)(1e3),C=Object(m.a)(v,2),f=C[0],N=C[1],y=t.length*_,S=_*h-y,w={transform:"translateX(".concat(s,"px)"),transition:"transform ".concat(f,"ms")},F={width:"".concat(_*h,"px")},k={width:"".concat(_,"px")};return Object(b.jsxs)("div",{className:"Carousel",children:[Object(b.jsx)("ul",{className:"Carousel__list",style:F,children:Object(b.jsx)("div",{className:"Carousel__visible-list",style:w,children:t.map((function(e,t){return Object(b.jsx)("li",{children:Object(b.jsx)("img",{src:e,alt:"".concat(t+1),style:k})},e)}))})}),Object(b.jsxs)("div",{className:"Carousel__buttons",children:[Object(b.jsx)("button",{className:"Carousel__buttons--button",type:"button",onClick:function(){return function(){var e=s+_*l;c(e<=0?e:0)}()},children:"Prev"}),Object(b.jsx)("button",{className:"Carousel__buttons--button",type:"button","data-cy":"next",onClick:function(){return function(){var e=s-_*l;c(e>S?e:0)}()},children:"Next"})]}),Object(b.jsxs)("div",{className:"Carousel__inputs",children:[Object(b.jsx)("label",{htmlFor:"itemWidth",className:"Carousel__inputs--label",children:"Item width(px):"}),Object(b.jsx)("input",{className:"Carousel__inputs--input",id:"itemWidth",type:"number",value:_,onChange:function(e){return x(+e.currentTarget.value)},step:10}),Object(b.jsx)("label",{htmlFor:"itemFrame",className:"Carousel__inputs--label",children:"Frame size:"}),Object(b.jsx)("input",{className:"Carousel__inputs--input",id:"itemFrame",type:"number",value:h,onChange:function(e){return g(+e.currentTarget.value)},min:1,max:t.length}),Object(b.jsx)("label",{htmlFor:"stepScroll",className:"Carousel__inputs--label",children:"Scroll step:"}),Object(b.jsx)("input",{className:"Carousel__inputs--input",id:"stepScroll",type:"number",value:l,onChange:function(e){return o(+e.currentTarget.value)},min:1,max:t.length}),Object(b.jsx)("label",{htmlFor:"animationDuration",className:"Carousel__inputs--label",children:"Duration(ms):"}),Object(b.jsx)("input",{className:"Carousel__inputs--input",id:"animationDuration",type:"number",value:f,onChange:function(e){return N(+e.currentTarget.value)},step:500})]})]})},p=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"]},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this.state.images;return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{"data-cy":"title",className:"App__title",children:" Carousel with\n          ".concat(e.length,"\n          images")}),Object(b.jsx)(j,{source:e})]})}}]),n}(o.a.Component),h=p;s.a.render(Object(b.jsx)(h,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.1ce25028.chunk.js.map