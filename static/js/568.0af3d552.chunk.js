"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[568,135],{568:function(e,t,s){s.r(t),s.d(t,{default:function(){return _}});var r=s(861),a=s(439),i=s(757),n=s.n(i),c=s(340),l=s(135),o=s(791),u=s(689),p=s(87),d="PopularyMoviesList_linkPopulary__RF+YM",v=s(184),h=function(e){var t=e.data,s=(0,u.TH)();return(0,v.jsxs)(v.Fragment,{children:[t.map((function(e){return(0,v.jsx)("li",{children:(0,v.jsx)(p.rU,{to:"/movies/".concat(e.id),state:{from:s},className:d,children:e.original_title})},e.id)})),(0,v.jsx)(u.Z5,{children:(0,v.jsx)(u.AW,{path:"movieDetails",element:(0,v.jsx)(l.default,{})})})]})},f="Home_listPopulary__KT86R",m="Home_title__L087v",x=s(913),_=function(){var e=(0,o.useState)(!1),t=(0,a.Z)(e,2),s=t[0],i=t[1],l=(0,o.useState)(!1),u=(0,a.Z)(l,2),p=u[0],d=u[1],_=(0,o.useState)([]),j=(0,a.Z)(_,2),k=j[0],w=j[1],b=function(){var e=(0,r.Z)(n().mark((function e(){var t;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i(!0),e.next=4,c.Z.get("https://api.themoviedb.org/3/movie/popular?api_key=e9b50bda4ce56f3b360f447ed6508c77");case 4:t=e.sent,w(t.data.results),d(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),d(!0);case 12:return e.prev=12,i(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();return(0,o.useEffect)((function(){b()}),[]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("h1",{className:m,children:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0435 \u043d\u0430 \u0441\u0435\u0433\u043e\u0434\u043d\u044f"}),s&&(0,v.jsx)(x.default,{}),p&&(0,v.jsx)("h4",{children:"Errore"}),(0,v.jsx)("ul",{className:f,children:(0,v.jsx)(h,{data:k})})]})}},135:function(e,t,s){s.r(t),s.d(t,{default:function(){return m}});var r=s(861),a=s(439),i=s(757),n=s.n(i),c=s(340),l=s(791),o=s(689),u=s(87),p={wrapperMovie:"MovieDetails_wrapperMovie__Nj4ri",imgPoster:"MovieDetails_imgPoster__U5M2k",title:"MovieDetails_title__cUGs9",description:"MovieDetails_description__33mrB",linkCastRewievs:"MovieDetails_linkCastRewievs__ACbxb",wrapperLink:"MovieDetails_wrapperLink__RqOdW"},d=s(184),v=(0,l.lazy)((function(){return s.e(76).then(s.bind(s,76))})),h=(0,l.lazy)((function(){return Promise.all([s.e(686),s.e(168)]).then(s.bind(s,168))})),f=(0,l.lazy)((function(){return Promise.resolve().then(s.bind(s,913))})),m=function(){var e,t,s=(0,o.UO)().movieId,i=(0,l.useState)([]),m=(0,a.Z)(i,2),x=m[0],_=m[1],j=(0,l.useState)(!1),k=(0,a.Z)(j,2),w=k[0],b=k[1],g=(0,l.useState)(!1),M=(0,a.Z)(g,2),N=M[0],Z=M[1],R=(0,o.TH)(),y=(0,l.useRef)(null!==(e=null===(t=R.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/"),C="https://api.themoviedb.org/3/movie/".concat(s,"?api_key=e9b50bda4ce56f3b360f447ed6508c77");(0,l.useEffect)((function(){var e=function(){var e=(0,r.Z)(n().mark((function e(){var t;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,b(!0),e.next=4,c.Z.get(C);case 4:t=e.sent,_(t.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),Z(e.t0.mesage);case 11:return e.prev=11,b(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[C]);return(0,d.jsxs)("div",{children:[(0,d.jsx)(u.rU,{to:y.current,className:p.linkCastRewievs,children:"Go back"}),w&&(0,d.jsx)(f,{}),N&&(0,d.jsx)("h4",{children:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430"}),(0,d.jsxs)("div",{className:p.wrapperMovie,children:[(0,d.jsx)("img",{className:p.imgRewievs,src:x.poster_path?"https://image.tmdb.org/t/p/w500"+x.poster_path:"https://rgo.ru/upload/content_block/images/9ca8302358b777e143cd6e314058266b/7065323d0aa2e3fa6e8764c4f57f1655.jpg?itok=sawvdjq3",alt:""}),(0,d.jsx)("h2",{className:p.title,children:x.original_title}),(0,d.jsx)("p",{className:p.description,children:x.overview})]}),(0,d.jsxs)("div",{className:p.wrapperLink,children:[(0,d.jsx)(u.OL,{to:"cast",className:p.linkCastRewievs,children:"Cast"}),(0,d.jsx)(u.OL,{to:"rewievs",className:p.linkCastRewievs,children:"Rewievs"})]}),(0,d.jsx)("div",{children:(0,d.jsx)(l.Suspense,{fallback:(0,d.jsx)(f,{}),children:(0,d.jsxs)(o.Z5,{children:[(0,d.jsx)(o.AW,{path:"cast",element:(0,d.jsx)(v,{})}),(0,d.jsx)(o.AW,{path:"rewievs",element:(0,d.jsx)(h,{})})]})})})]})}}}]);
//# sourceMappingURL=568.0af3d552.chunk.js.map