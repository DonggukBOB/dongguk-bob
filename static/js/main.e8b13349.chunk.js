(this["webpackJsonpdongguk-bob"]=this["webpackJsonpdongguk-bob"]||[]).push([[0],{32:function(n,e,t){},44:function(n,e,t){"use strict";t.r(e);var a,c,i,o,r,s,d=t(1),b=t(24),l=t.n(b),j=(t(32),t(2)),p=t(4),h=t.p+"static/media/imgMain.d6f8ee91.jpg",u=t(3),x=t(0),m=u.b.div(a||(a=Object(j.a)(["\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]))),f=u.b.div(c||(c=Object(j.a)(["\n  width: 100%;\n  text-align: center;\n"]))),O=u.b.button(i||(i=Object(j.a)(["\n  border-radius: 5px;\n  background-color: #f29300;\n  border: none;\n  font-size: 1.2em;\n  margin: 10px;\n  color: white;\n  white-space: nowrap;\n  padding: 5%;\n"]))),g=u.b.img(o||(o=Object(j.a)(["\n  width: 100%;\n"]))),v=u.b.h1(r||(r=Object(j.a)(["\n  letter-spacing: 10px;\n  font-size: 2.5em;\n"]))),w=u.b.h3(s||(s=Object(j.a)(["\n  font-size: 0.9em;\n"])));function k(){var n=Object(p.e)();return Object(x.jsxs)(m,{children:[Object(x.jsx)(w,{children:"\uc9c0\uce5c \ub2f9\uc2e0\uc758 \ud5c8\uae30\ub97c \ub2ec\ub798\uc904"}),Object(x.jsx)(w,{children:"\ub4e0-\ub4e0\ud55c"}),Object(x.jsx)(v,{children:"\ub3d9\uad6d\ubc25"}),Object(x.jsx)(g,{src:h}),Object(x.jsxs)(f,{children:[Object(x.jsx)(O,{onClick:function(){return n.push("/recommend")},children:"\uba54\ub274 \ucd94\ucc9c"}),Object(x.jsx)(O,{onClick:function(){return n.push("/list")},children:"\ub9db\uc9d1 \ubaa9\ub85d"})]})]})}var y,M,C,N,z=t(9),F=t(12),T=t(6),A=t.n(T),P=u.b.header(y||(y=Object(j.a)(["\n  display: flex;\n  padding: 10px 20px;\n  justify-content: space-between;\n  align-items: center;\n  background: #f29300;\n"])));function E(){var n=Object(p.e)();return Object(x.jsxs)(P,{className:"header",children:[Object(x.jsx)("i",{className:"fa fa-chevron-left fa-lg","aria-hidden":"true",onClick:function(){n.goBack()}}),Object(x.jsx)(F.b,{to:"/",children:Object(x.jsx)("h3",{children:"\ub3d9\uad6d\ubc25"})}),Object(x.jsx)("i",{className:"fa fa-bars fa-lg","aria-hidden":"true",onClick:function(){A()(".sliding-menu-container").show(),A()(".sliding-menu").animate({width:"toggle"})}})]})}var S=Object(u.a)(M||(M=Object(j.a)(["\n  border: #f29300;\n  background: #f29300;\n  color: #fff;\n"]))),D=Object(u.a)(C||(C=Object(j.a)(["\n  border: 1px solid #cbcbcb;\n  background-color: #fff;\n  color: #6a6a6a;\n"]))),L=u.b.button(N||(N=Object(j.a)(["\n  padding: 8px 10px;\n  width: 30%;\n  font-size: 0.875rem;\n  border-radius: 50px;\n  ","\n"])),(function(n){return n.isActive?S:D}));function _(n){var e=n.name,t=n.text,a=n.isActive,c=n.onClick;return Object(x.jsx)(L,{className:"filter",isActive:a,onClick:function(){c(a?null:e)},children:t})}var J,q,B,H,I,R=t(22),G=Object(u.a)(J||(J=Object(j.a)(["\n  background: #f29300;\n  color: #fff;\n"]))),Q=Object(u.a)(q||(q=Object(j.a)(["\n  background: transparent;\n  color: black;\n"]))),Z=u.b.div(B||(B=Object(j.a)(["\n  background: #f9f9f9;\n  border-bottom: 1px solid #dbdbdb;\n"]))),Y=u.b.button(H||(H=Object(j.a)(["\n  width: 50%;\n  padding: 15px;\n  border: none;\n  font-size: 0.875rem;\n  ","\n"])),(function(n){return n.isActive?G:Q}));function W(n){var e=n.items,t=n.multi,a=Object(d.useState)([]),c=Object(z.a)(a,2),i=c[0],o=c[1],r=function(n){var e=n.target.innerText;i.includes(e)?b(e):s(e)},s=function(n){o(t?[n].concat(Object(R.a)(i)):[n])},b=function(n){var e=i.indexOf(n);i.splice(e,1),o(Object(R.a)(i))};return Object(x.jsx)(Z,{children:e.map((function(n){return Object(x.jsx)(Y,{isActive:i.includes(n),onClick:r,children:n},n)}))})}var X=u.b.div(I||(I=Object(j.a)(["\n  padding: 10px 20px;\n  border-bottom: 1px solid #dbdbdb;\n  display: flex;\n  justify-content: space-between;\n"]))),V=[{name:"location",text:"\uc704\uce58",items:["\ub3d9\ub300\uc785\uad6c\uc5ed","\ucda9\ubb34\ub85c\uc5ed"],multi:!0},{name:"price",text:"\uac00\uaca9",items:["7,000\uc6d0 \uc774\ud558","8,000\uc6d0 \uc774\ud558","9,000\uc6d0 \uc774\ud558","9,000\uc6d0 \ucd08\uacfc"],multi:!1},{name:"category",text:"\uce74\ud14c\uace0\ub9ac",items:["\ud55c\uc2dd","\uc591\uc2dd","\uc77c\uc2dd","\uc911\uc2dd","\ubd84\uc2dd","\uae30\ud0c0"],multi:!0}];function K(){var n=Object(d.useState)(null),e=Object(z.a)(n,2),t=e[0],a=e[1],c=function(n){var e=V.find((function(e){return e.name===n}));a(e)};return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(X,{children:V.map((function(n){var e=n.name,a=n.text;return Object(x.jsx)(_,{name:e,text:a,isActive:e===(null===t||void 0===t?void 0:t.name),onClick:c},e)}))}),t&&Object(x.jsx)(W,{items:t.items,multi:t.multi})]})}var U,$,nn,en,tn,an,cn,on,rn,sn,dn,bn,ln,jn,pn,hn,un,xn=t.p+"static/media/map-naver.d621e831.png",mn=t.p+"static/media/map-kakao.d1d78d21.png",fn=u.b.div(U||(U=Object(j.a)(["\n  display: none;\n  z-index: 9999;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  max-width: 500px;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.25);\n"]))),On=u.b.div($||($=Object(j.a)(["\n  display: none;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 90%;\n  height: 80%;\n  transform: translate(-50%, -50%);\n  background: white;\n  border-radius: 20px;\n"]))),gn=u.b.article(nn||(nn=Object(j.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: 30px auto;\n  width: 85%;\n  height: 95%;\n  overflow-y: scroll;\n"]))),vn=u.b.i(en||(en=Object(j.a)(["\n  float: right;\n"]))),wn=u.b.h1(tn||(tn=Object(j.a)(["\n  display: inline;\n  margin-right: 10px;\n  white-space: nowrap;\n"]))),kn=u.b.span(an||(an=Object(j.a)(["\n  font-size: 1.25rem;\n  color: #ff792a;\n  white-space: nowrap;\n"]))),yn=u.b.img(cn||(cn=Object(j.a)(["\n  margin: 10px 0;\n  width: 100%;\n  height: 30vh;\n  object-fit: cover;\n"]))),Mn=u.b.div(on||(on=Object(j.a)(["\n  display: flex;\n  margin: 10px 0;\n  padding: 0 5px 20px;\n  justify-content: space-between;\n  text-align: center;\n  border-bottom: 1px solid #9b9b9b;\n"]))),Cn=u.b.a(rn||(rn=Object(j.a)(["\n  width: 74px;\n"]))),Nn=u.b.div(sn||(sn=Object(j.a)(["\n  margin: 10px auto;\n  width: 48px;\n  height: 48px;\n"]))),zn=u.b.img(dn||(dn=Object(j.a)(["\n  width: 100%;\n"]))),Fn=u.b.div(bn||(bn=Object(j.a)(["\n  font-size: 0.85rem;\n  white-space: nowrap;\n"]))),Tn=u.b.div(ln||(ln=Object(j.a)(["\n  margin: 10px 0;\n  padding: 0 15px 10px;\n  border-bottom: 1px solid #9b9b9b;\n"]))),An=u.b.div(jn||(jn=Object(j.a)(["\n  margin-bottom: 10px;\n  color: #9b9b9b;\n"]))),Pn=u.b.div(pn||(pn=Object(j.a)(["\n  min-height: 5%;\n"]))),En=u.b.button(hn||(hn=Object(j.a)(["\n  display: ",";\n  position: absolute;\n  bottom: 2.5%;\n  right: 5%;\n  width: 100px;\n  height: 100px;\n  font-size: 1.25rem;\n  font-weight: bold;\n  background-color: #fbc402;\n  border: none;\n  border-radius: 50px;\n  box-shadow: 5px 5px 5px 1px gray;\n\n  &:active {\n    transform: translateY(1px);\n    box-shadow: 4px 4px 4px 1px gray;\n  }\n"])),(function(n){return n.recommend?"block":"none"})),Sn=u.b.button(un||(un=Object(j.a)(["\n  display: ",";\n  position: absolute;\n  bottom: 5%;\n  right: calc(5% + 110px);\n  width: 50px;\n  height: 50px;\n  font-size: 1.025rem;\n  font-weight: bold;\n  background-color: #fbc402;\n  border: none;\n  border-radius: 50px;\n  box-shadow: 5px 5px 5px 1px gray;\n\n  &:active {\n    transform: translateY(1px);\n    box-shadow: 4px 4px 4px 1px gray;\n  }\n"])),(function(n){return n.recommend?"block":"none"})),Dn=function(){A()(".place-info-modal-container").show(),A()(".place-info-modal").animate({height:"show"},{duration:200})};function Ln(n){var e=n.place,t=n.recommend,a=n.onRetry,c=n.onBackPlace,i=function(n){n.stopPropagation(),A()(".place-info-modal").animate({height:"hide"},{duration:200}),setTimeout((function(){return A()(".place-info-modal-container").hide()}),210)};return Object(x.jsxs)(fn,{className:"place-info-modal-container",onClick:i,children:[Object(x.jsx)(On,{className:"place-info-modal",onClick:function(n){n.stopPropagation()},children:Object(x.jsxs)(gn,{className:"place-info-container",children:[Object(x.jsxs)("div",{children:[Object(x.jsx)(vn,{className:"fa fa-times fa-2x","aria-hidden":"true",onClick:i}),Object(x.jsx)(wn,{children:e.name}),Object(x.jsxs)(kn,{children:["\u2605 ",e.score,"/5"]}),Object(x.jsx)("div",{className:"gray",children:e.address})]}),Object(x.jsx)(yn,{src:e.photo}),Object(x.jsxs)(Mn,{children:[Object(x.jsxs)(Cn,{href:e.naver,target:"_blank",rel:"noreferrer",children:[Object(x.jsx)(Nn,{children:Object(x.jsx)(zn,{src:xn})}),Object(x.jsx)(Fn,{children:"\ub124\uc774\ubc84 \uc9c0\ub3c4"})]}),Object(x.jsxs)(Cn,{href:e.kakao,target:"_blank",rel:"noreferrer",children:[Object(x.jsx)(Nn,{children:Object(x.jsx)(zn,{src:mn})}),Object(x.jsx)(Fn,{children:"\uce74\uce74\uc624 \uc9c0\ub3c4"})]}),Object(x.jsxs)(Cn,{href:"tel:"+e.phone,target:"_blank",rel:"noreferrer",children:[Object(x.jsx)(Nn,{children:Object(x.jsx)("i",{className:"fa fa-phone fa-3x","aria-hidden":"true"})}),Object(x.jsx)(Fn,{children:"\uc804\ud654"})]})]}),Object(x.jsxs)(Tn,{children:[Object(x.jsx)(An,{children:"\uba54\ub274"}),Object(x.jsx)("span",{children:e.menu}),Object(x.jsxs)("span",{className:"float-right",children:["\u2219\u2219\u2219 ",e.price,"\uc6d0"]})]}),Object(x.jsxs)(Tn,{children:[Object(x.jsx)(An,{children:"\ud55c\uc904\ud3c9"}),Object(x.jsx)("span",{children:e.comment})]}),Object(x.jsx)(Pn,{})]})}),Object(x.jsx)(Sn,{recommend:t,onClick:function(n){n.stopPropagation(),A()(".place-info-container").scrollTop(0),c()},children:"\uc774\uc804"}),Object(x.jsx)(En,{recommend:t,onClick:function(n){n.stopPropagation(),A()(".place-info-container").scrollTop(0),a()},children:"\ub2e4\uc2dc \ucd94\ucc9c"})]})}var _n,Jn,qn,Bn,Hn,In,Rn,Gn,Qn,Zn=[{id:0,name:"\uc9c4\ub561\uc774 \uc21c\ub300\uad6d",category:"\ud55c\uc2dd",phone:"02-2263-8441",address:"\uc11c\uc6b8 \uc911\uad6c \ud544\ub3d9\ub85c 15-9",location:{latitude:37.56019,longitude:126.99655},comment:"\ud5c8\uae30\uc9c4 \ubc30\ub97c \uac00\ub4dd \ucc44\uc6cc\uc904 \ub4e0\ub4e0\ud55c \uad6d\ubc25, \ub3d9\uad6d\uc778\uc758 \ud574\uc7a5 no.1",menu:"\uc21c\ub300\uad6d",price:7e3,score:4.21,photo:"https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA0MDZfMTEw%2FMDAxNjE3Njg1NDMzMTMy.2rH8Y8I1rPJSH5OeDorZp_2wFrnXHlIWkxW2kwuwYegg.q1cEDFSctQ7JqOqkZjnrrSNI7mQuFCLHQ54zQ13MDjwg.JPEG.slangword%2F20210402%25A3%25DF114758.jpg",naver:"http://naver.me/Gw5QaB06",kakao:"https://place.map.kakao.com/14519636"},{id:1,name:"\ub3d9\ub300\ub2ed\ud55c\ub9c8\ub9ac",category:"\ud55c\uc2dd",phone:"02-2269-5596",address:"\uc11c\uc6b8 \uc911\uad6c \uc11c\uc560\ub85c 16-5",location:{latitude:37.56102,longitude:126.99737},comment:"\ub9c8\uc74c\uc758 \uace0\ud5a5 \ube68\uac04 \uac04\ud310\uc9d1",menu:"\ub2ed\ud55c\ub9c8\ub9ac(2 ~ 3\uc778)",price:22e3,score:4.46,photo:"https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20201231_300%2F16094242382180rEh3_JPEG%2Fupload_552356f4598ebf3d712478b9dc14df00.jpeg",naver:"http://naver.me/54VLHbnS",kakao:"https://place.map.kakao.com/25085251"},{id:2,name:"\uc0b0\ud0c0\ub3c8\ubd80\ub9ac",category:"\uc77c\uc2dd",phone:"0507-1348-8151",address:"\uc11c\uc6b8 \uc911\uad6c \uc11c\uc560\ub85c 19",location:{latitude:37.56072,longitude:126.99753},comment:"\uc810\uc2ec\uc2dc\uac04 \ud56b\ud50c\ub808\uc774\uc2a4, \uc0ac\ucf00\ub3d9\ub3c4 \uc77c\ud488\uc774\uc9c0\ub9cc \ubaa8\ub4e0 \uba54\ub274\uac00 \ud0c1\uc6d4",menu:"\uc0ac\ucf00\ub3d9",price:10500,score:4.36,photo:"https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA3MjRfMTA1%2FMDAxNTk1NTg0OTc3NDEx.MhMsQcWdCtPBR026z_zPqrLmbPX4x2m7qbal3XJ2BA0g.wsuL8VTvpa9wwCvN-iNhxgZ3-8esOT3Jhes_dawNsaIg.JPEG.wfejio1%2FIMG_4755.jpg",naver:"http://naver.me/xH2abpNz",kakao:""}],Yn=u.b.div(_n||(_n=Object(j.a)(["\n  display: flex;\n  height: 100%;\n  flex-direction: column;\n"]))),Wn=u.b.button(Jn||(Jn=Object(j.a)(["\n  margin: auto;\n  width: 2.5em;\n  height: 2.5em;\n  border: none;\n  border-radius: 50%;\n  background-color: #fbc402;\n  font-size: 6rem;\n  font-weight: bold;\n  box-shadow: 5px 5px 5px 5px gray;\n"])));function Xn(){var n=Object(d.useState)(null),e=Object(z.a)(n,2),t=e[0],a=e[1],c=Object(d.useState)([]),i=Object(z.a)(c,2),o=i[0],r=i[1],s=function(n){return n[Math.floor(Math.random()*n.length)]};return Object(x.jsxs)(Yn,{children:[Object(x.jsx)(E,{}),Object(x.jsx)(K,{}),Object(x.jsx)(Wn,{onClick:function(){r([]),a(s(Zn)),Dn()},children:"Go!"}),t&&Object(x.jsx)(Ln,{place:t,recommend:!0,onRetry:function(){o.push(t);var n=Zn.filter((function(n){return!o.includes(n)})),e=s(n);e?(r(o),a(e)):alert("\ub354 \uc774\uc0c1 \ucd94\ucc9c\ud560 \uac00\uac8c\uac00 \uc5c6\uc5b4\uc694! T.T")},onBackPlace:function(){var n=o.pop();n&&(r(o),a(n))}})]})}var Vn=u.b.li(qn||(qn=Object(j.a)(["\n  padding: 18px;\n  border-bottom: 1px solid #dbdbdb;\n"]))),Kn=u.b.img(Bn||(Bn=Object(j.a)(["\n  width: 100%;\n  height: 144px;\n  object-fit: cover;\n"]))),Un=u.b.div(Hn||(Hn=Object(j.a)(["\n  padding: 12px 7px 16px 0;\n"]))),$n=u.b.span(In||(In=Object(j.a)(["\n  font-size: 1.2em;\n  font-weight: bold;\n"]))),ne=u.b.span(Rn||(Rn=Object(j.a)(["\n  color: #ff792a;\n  margin-left: 8px;\n"]))),ee=u.b.p(Gn||(Gn=Object(j.a)(["\n  font-size: 0.75rem;\n  margin-top: 8px;\n  color: #9b9b9b;\n"]))),te=u.b.p(Qn||(Qn=Object(j.a)(["\n  margin-top: 10px;\n  font-size: 0.875rem;\n"])));function ae(n){var e=n.place,t=n.onOpenModal;return Object(x.jsxs)(Vn,{onClick:function(){t(e),Dn()},children:[Object(x.jsx)(Kn,{src:e.photo}),Object(x.jsxs)(Un,{children:[Object(x.jsx)($n,{children:e.name}),Object(x.jsxs)(ne,{children:["\u2605 ",e.score,"/5"]}),Object(x.jsx)(ee,{children:e.address}),Object(x.jsx)(te,{children:e.comment})]})]})}function ce(){var n=Object(d.useState)(Zn[0]),e=Object(z.a)(n,2),t=e[0],a=e[1],c=function(n){a(n)};return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(E,{}),Object(x.jsx)(K,{}),Object(x.jsx)("ul",{children:Zn.map((function(n){return Object(x.jsx)(ae,{place:n,onOpenModal:c},n.name)}))}),Object(x.jsx)(Ln,{place:t})]})}var ie,oe,re,se=window.kakao,de=function(){var n,e=[];return{initMap:function(e){var t=document.getElementById(e),a={center:new se.maps.LatLng(37.5581,126.9983),level:3};n=new se.maps.Map(t,a);var c=new se.maps.ZoomControl;n.addControl(c,se.maps.ControlPosition.RIGHT)},drawMarker:function(t){var a=new se.maps.LatLng(t.latitude,t.longitude),c=new se.maps.Marker({position:a});c.setMap(n),e.push(c)},addClickEventToMarker:function(n,t){se.maps.event.addListener(e[n.id],"click",(function(){t(n.id)}))}}}(),be=u.b.div(ie||(ie=Object(j.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n"]))),le=u.b.div(oe||(oe=Object(j.a)(["\n  width: 100%;\n  height: 100%;\n"])));function je(){var n=Object(d.useState)(null),e=Object(z.a)(n,2),t=e[0],a=e[1],c=Object(d.useState)(!1),i=Object(z.a)(c,2),o=i[0],r=i[1];Object(d.useEffect)((function(){de.initMap("kakao-map"),Zn.map((function(n){de.drawMarker(n.location),de.addClickEventToMarker(n,s)}))}),[]);var s=function(n){a(Zn[n]),r(!0),Dn()};return Object(x.jsxs)(be,{children:[Object(x.jsx)(E,{}),Object(x.jsx)(le,{id:"kakao-map"}),o&&Object(x.jsx)(Ln,{place:t,onClose:function(){r(!1)}})]})}var pe,he,ue,xe=u.b.div(re||(re=Object(j.a)(["\n  padding: 20px;\n  border-bottom: solid rgba(0, 0, 0, 0.25) 1px;\n  white-space: nowrap;\n  overflow: hidden;\n"])));function me(n){var e=n.contents,t=n.to,a=Object(p.e)();return Object(x.jsx)(xe,{onClick:function(){a.push(t),A()(".sliding-menu").animate({width:"toggle"}),setTimeout((function(){return A()(".sliding-menu-container").hide()}),400)},children:e})}var fe,Oe=u.b.div(pe||(pe=Object(j.a)(["\n  display: none;\n  z-index: 9999;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  max-width: 500px;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.25);\n"]))),ge=u.b.div(he||(he=Object(j.a)(["\n  float: right;\n  display: none;\n  flex-direction: column;\n  width: 55%;\n  height: 100%;\n  background: white;\n"]))),ve=u.b.i(ue||(ue=Object(j.a)(["\n  padding: 20px;\n  margin-right: auto;\n"])));function we(){var n=function(n){n.stopPropagation(),A()(".sliding-menu").animate({width:"toggle"}),setTimeout((function(){return A()(".sliding-menu-container").hide()}),400)};return Object(x.jsx)(Oe,{className:"sliding-menu-container",onClick:n,children:Object(x.jsxs)(ge,{className:"sliding-menu",onClick:function(n){n.stopPropagation()},children:[Object(x.jsx)(ve,{className:"fa fa-times","aria-hidden":"true",onClick:n}),Object(x.jsx)(me,{contents:"\ucd94\ucc9c\ubc1b\uae30",to:"/recommend"}),Object(x.jsx)(me,{contents:"\ubaa9\ub85d\ubcf4\uae30",to:"/list"}),Object(x.jsx)(me,{contents:"\uc9c0\ub3c4\ubcf4\uae30",to:"/map"})]})})}var ke=u.b.div(fe||(fe=Object(j.a)(["\n  max-width: 500px;\n  height: calc(var(--vh, 1vh) * 100);\n  margin: auto;\n  box-shadow: 0 0 10px 2px gray;\n  overflow-y: auto;\n  overflow-x: hidden;\n"])));var ye=function(){return Object(x.jsxs)(ke,{className:"App",children:[Object(x.jsx)(we,{}),Object(x.jsx)(p.a,{path:"/",exact:!0,component:k}),Object(x.jsx)(p.a,{path:"/recommend",component:Xn}),Object(x.jsx)(p.a,{path:"/list",component:ce}),Object(x.jsx)(p.a,{path:"/map",component:je})]})};!function(){var n=function(){var n=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(n,"px"))};n(),window.addEventListener("resize",n)}(),l.a.render(Object(x.jsx)(F.a,{basename:"/dongguk-bob",children:Object(x.jsx)(ye,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.e8b13349.chunk.js.map