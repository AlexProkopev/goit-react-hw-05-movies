"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[568,135],{568:function(e,t,r){r.r(t),r.d(t,{default:function(){return _}});var s=r(861),a=r(439),n=r(757),i=r.n(n),c=r(340),l=r(135),o=r(791),u=r(689),d=r(87),h="PopularyMoviesList_linkPopulary__RF+YM",v=r(184),p=function(e){var t=e.data,r=(0,u.TH)();return(0,v.jsxs)(v.Fragment,{children:[t.map((function(e){return(0,v.jsx)("li",{children:(0,v.jsx)(d.rU,{to:"/movies/".concat(e.id),state:{from:r},className:h,children:e.original_title})},e.id)})),(0,v.jsx)(u.Z5,{children:(0,v.jsx)(u.AW,{path:"movieDetails",element:(0,v.jsx)(l.default,{})})})]})},f="Home_listPopulary__KT86R",m="Home_title__L087v",x=r(913),_=function(){var e=(0,o.useState)(!1),t=(0,a.Z)(e,2),r=t[0],n=t[1],l=(0,o.useState)(!1),u=(0,a.Z)(l,2),d=u[0],h=u[1],_=(0,o.useState)([]),j=(0,a.Z)(_,2),b=j[0],k=j[1],w=function(){var e=(0,s.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n(!0),e.next=4,c.Z.get("https://api.themoviedb.org/3/movie/popular?api_key=e9b50bda4ce56f3b360f447ed6508c77");case 4:t=e.sent,k(t.data.results),h(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),h(!0);case 12:return e.prev=12,n(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();return(0,o.useEffect)((function(){w()}),[]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("h1",{className:m,children:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0435 \u043d\u0430 \u0441\u0435\u0433\u043e\u0434\u043d\u044f"}),r&&(0,v.jsx)(x.default,{}),d&&(0,v.jsx)("h4",{children:"Errore"}),(0,v.jsx)("ul",{className:f,children:(0,v.jsx)(p,{data:b})})]})}},135:function(e,t,r){r.r(t),r.d(t,{default:function(){return k}});var s=r(861),a=r(439),n=r(757),i=r.n(n),c=r(340),l=r(791),o=r(689),u=r(87),d="MovieDetails_wrapperMovie__Nj4ri",h="MovieDetails_imgPoster__U5M2k",v="MovieDetails_title__cUGs9",p="MovieDetails_description__33mrB",f="MovieDetails_linkCastRewievs__ACbxb",m="MovieDetails_wrapperLink__RqOdW",x=r(184),_=(0,l.lazy)((function(){return r.e(76).then(r.bind(r,76))})),j=(0,l.lazy)((function(){return Promise.all([r.e(686),r.e(168)]).then(r.bind(r,168))})),b=(0,l.lazy)((function(){return Promise.resolve().then(r.bind(r,913))})),k=function(){var e,t,r=(0,o.UO)().movieId,n=(0,l.useState)([]),k=(0,a.Z)(n,2),w=k[0],g=k[1],N=(0,l.useState)(!1),Z=(0,a.Z)(N,2),y=Z[0],M=Z[1],D=(0,l.useState)(!1),S=(0,a.Z)(D,2),P=S[0],R=S[1],C=(0,o.TH)(),L=(0,l.useRef)(null!==(e=null===(t=C.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/"),U="https://api.themoviedb.org/3/movie/".concat(r,"?api_key=e9b50bda4ce56f3b360f447ed6508c77");return(0,l.useEffect)((function(){var e=function(){var e=(0,s.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,M(!0),e.next=4,c.Z.get(U);case 4:t=e.sent,g(t.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),R(e.t0.mesage);case 11:return e.prev=11,M(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[U]),(0,x.jsxs)("div",{children:[(0,x.jsx)(u.rU,{to:L.current,className:f,children:"Go back"}),y&&(0,x.jsx)(b,{}),P&&(0,x.jsx)("h4",{children:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430"}),(0,x.jsxs)("div",{className:d,children:[(0,x.jsx)("img",{className:h,src:"https://image.tmdb.org/t/p/w500"+w.poster_path,alt:""}),(0,x.jsx)("h2",{className:v,children:w.original_title}),(0,x.jsx)("p",{className:p,children:w.overview})]}),(0,x.jsxs)("div",{className:m,children:[(0,x.jsx)(u.OL,{to:"cast",className:f,children:"Cast"}),(0,x.jsx)(u.OL,{to:"rewievs",className:f,children:"Rewievs"})]}),(0,x.jsx)("div",{children:(0,x.jsx)(l.Suspense,{fallback:(0,x.jsx)(b,{}),children:(0,x.jsxs)(o.Z5,{children:[(0,x.jsx)(o.AW,{path:"cast",element:(0,x.jsx)(_,{})}),(0,x.jsx)(o.AW,{path:"rewievs",element:(0,x.jsx)(j,{})})]})})})]})}}}]);
//# sourceMappingURL=568.d0382003.chunk.js.map