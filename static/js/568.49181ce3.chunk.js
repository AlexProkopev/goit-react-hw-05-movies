"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[568,354],{9568:function(e,i,t){t.r(i),t.d(i,{default:function(){return f}});var s=t(9439),r=t(7354),a=t(2791),n=t(7689),o=t(1087),l="PopularyMoviesList_linkContainer__V308P",c="PopularyMoviesList_imgPoster__yFAkU",d="PopularyMoviesList_linkPopulary__RF+YM",p="PopularyMoviesList_originalName__Cxg3P",m=t(4870),u=t(184),h=function(e){var i=e.data,t=(0,n.TH)();return(0,u.jsxs)(u.Fragment,{children:[null!==i&&i.map((function(e){var i=e.id,s=e.original_title,r=e.poster_path;return(0,u.jsx)("li",{className:l,children:(0,u.jsxs)(o.rU,{to:"/movies/".concat(i),state:{from:t},className:d,children:[(0,u.jsx)("img",{className:c,src:r?"https://image.tmdb.org/t/p/w500"+r:m.k,alt:"Img Poster for Movie"}),(0,u.jsx)("span",{className:p,children:s})]})},i)})),(0,u.jsx)(n.Z5,{children:(0,u.jsx)(n.AW,{path:"movieDetails",element:(0,u.jsx)(r.default,{})})})]})},_={listPopulary:"Home_listPopulary__KT86R",title:"Home_title__L087v"},v=t(1913),x=t(7335),f=function(){var e=(0,a.useState)(!1),i=(0,s.Z)(e,2),t=i[0],r=i[1],n=(0,a.useState)(!1),o=(0,s.Z)(n,2),l=o[0],c=o[1],d=(0,a.useState)(null),p=(0,s.Z)(d,2),m=p[0],f=p[1];return(0,a.useEffect)((function(){(0,x.v)(r,f,c,"https://api.themoviedb.org/3/movie/popular?api_key=e9b50bda4ce56f3b360f447ed6508c77")}),[]),(0,u.jsx)("section",{children:(0,u.jsxs)("div",{className:_.container,children:[(0,u.jsx)("h1",{className:_.title,children:"Popular today"}),t&&(0,u.jsx)(v.default,{}),l&&(0,u.jsx)("h4",{children:"Errore"}),(0,u.jsx)("ul",{className:_.listPopulary,children:(0,u.jsx)(h,{data:m})})]})})}},7354:function(e,i,t){t.r(i),t.d(i,{default:function(){return P}});var s=t(9439),r=t(2791),a=t(7689),n=t(1087),o="MovieDetails_wrapperMovie__Nj4ri",l="MovieDetails_goBackBtn__WL+X0",c="MovieDetails_linkCastRewievs__ACbxb",d="MovieDetails_wrapperLink__RqOdW",p=t(1725),m={wrapperMovie:"MovieDetailsComponent_wrapperMovie__Ncsy9",imgPoster:"MovieDetailsComponent_imgPoster__oWRz8",title:"MovieDetailsComponent_title__BdDBo",descripTitle:"MovieDetailsComponent_descripTitle__F6gGs",description:"MovieDetailsComponent_description__3KLDi",linkCastRewievs:"MovieDetailsComponent_linkCastRewievs__qzKa1",wrapperLink:"MovieDetailsComponent_wrapperLink__sVGc-",titleVideo:"MovieDetailsComponent_titleVideo__Rd94U"},u=t(4870),h=t(1913),_=t(7335),v="VideoPlayer_wrapperVideoPlayer__a6UlG",x="VideoPlayer_videoPlayer__a0tsp",f="VideoPlayer_textNotTrailer__uxmTb",j=t(184),g=function(e){var i=e.movieId,t=(0,r.useState)([]),a=(0,s.Z)(t,2),n=a[0],o=a[1],l=(0,r.useState)(!1),c=(0,s.Z)(l,2),d=c[0],p=c[1],m=(0,r.useState)(!1),u=(0,s.Z)(m,2),g=u[0],N=u[1],k="https://api.themoviedb.org/3/movie/".concat(i,"/videos?api_key=e9b50bda4ce56f3b360f447ed6508c77");(0,r.useEffect)((function(){(0,_.v)(p,o,N,k)}),[k]);var b=n.find((function(e){return"Official Trailer"===e.name})),w=void 0!==b;return(0,j.jsxs)(j.Fragment,{children:[d&&(0,j.jsx)(h.default,{}),g&&(0,j.jsx)("h4",{children:"Server Error"}),w&&(0,j.jsx)("div",{className:v,children:(0,j.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/".concat(b.key),title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,className:x})}),!w&&(0,j.jsx)("p",{className:f,children:"No official trailer available."})]})},N=function(e){var i=e.movie;return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("img",{className:m.imgPoster,src:i.poster_path?"https://image.tmdb.org/t/p/w500"+i.poster_path:u.k,alt:"Poster for Movie"}),(0,j.jsx)("h2",{className:m.title,children:i.original_title}),(0,j.jsx)("h2",{className:m.descripTitle,children:"Description:"}),(0,j.jsx)("p",{className:m.description,children:i.overview}),(0,j.jsx)("h2",{className:m.descripTitle,children:"Rating:"}),(0,j.jsx)("p",{className:m.description,children:i.vote_average}),(0,j.jsx)("h2",{className:m.descripTitle,children:"Date: "}),(0,j.jsx)("p",{className:m.description,children:i.release_date}),void 0!==i.genres&&i.genres.length>0&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("h2",{className:m.descripTitle,children:"Genre:"}),(0,j.jsx)("p",{className:m.description,children:0!==i.length&&i.genres.map((function(e,i){return(0,j.jsxs)("span",{className:m.spanMap,children:[" ",e.name,"."]},i)}))}),(0,j.jsx)("h2",{className:m.titleVideo,children:"Trailer"}),(0,j.jsx)(g,{movieId:i.id})]})]})},k=t(8683);var b=function(e){return(0,j.jsx)("svg",(0,k.Z)((0,k.Z)({viewBox:"0 0 512 512",fill:"currentColor",height:"1em",width:"1em"},e),{},{children:(0,j.jsx)("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:48,d:"M244 400L100 256l144-144M120 256h292"})}))},w=(0,r.lazy)((function(){return t.e(742).then(t.bind(t,5742))})),y=(0,r.lazy)((function(){return Promise.all([t.e(686),t.e(168)]).then(t.bind(t,2168))})),M=(0,r.lazy)((function(){return Promise.resolve().then(t.bind(t,1913))})),P=function(){var e,i,t=(0,a.UO)().movieId,m=(0,r.useState)([]),u=(0,s.Z)(m,2),h=u[0],_=u[1],v=(0,r.useState)(!1),x=(0,s.Z)(v,2),f=x[0],g=x[1],k=(0,r.useState)(!1),P=(0,s.Z)(k,2),C=P[0],D=P[1],L=(0,r.useState)(!1),S=(0,s.Z)(L,2),Z=S[0],T=S[1],R=(0,r.useState)(!1),F=(0,s.Z)(R,2),V=F[0],W=F[1],B=(0,a.TH)(),E=(0,r.useRef)(null!==(e=null===(i=B.state)||void 0===i?void 0:i.from)&&void 0!==e?e:"/"),U="https://api.themoviedb.org/3/movie/".concat(t,"?api_key=e9b50bda4ce56f3b360f447ed6508c77");(0,r.useEffect)((function(){return(0,p.D)(g,_,D,U),function(){W(!1),T(!1)}}),[_,U]);return(0,j.jsxs)("section",{children:[(0,j.jsxs)(n.rU,{to:E.current,className:l,children:[(0,j.jsx)(b,{})," Go back"]}),f&&(0,j.jsx)(M,{}),C&&(0,j.jsx)("h4",{children:"Server Error"}),(0,j.jsx)("div",{className:o,children:(0,j.jsx)(N,{movie:h})}),(0,j.jsxs)("div",{className:d,children:[(0,j.jsx)(n.OL,{to:"cast",className:c,state:{from:B},onClick:function(){W(!1),T(!Z)},children:"Cast"}),(0,j.jsx)(n.OL,{to:"rewievs",className:c,state:{from:B},onClick:function(){W(!V),T(!1)},children:"Rewievs"})]}),(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(r.Suspense,{fallback:(0,j.jsx)(M,{}),children:(0,j.jsxs)(a.Z5,{children:[Z&&(0,j.jsx)(a.AW,{path:"cast/*",element:(0,j.jsx)(w,{})}),V&&(0,j.jsx)(a.AW,{path:"rewievs",element:(0,j.jsx)(y,{})})]})})})]})}}}]);
//# sourceMappingURL=568.49181ce3.chunk.js.map