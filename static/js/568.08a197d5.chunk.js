"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[568,354],{9568:function(e,i,t){t.r(i),t.d(i,{default:function(){return M}});var s=t(9439),r=t(7354),a=t(2791),n=t(7689),o=t(1087),l="PopularyMoviesList_linkContainer__V308P",c="PopularyMoviesList_imgPoster__yFAkU",d="PopularyMoviesList_linkPopulary__RF+YM",m="PopularyMoviesList_originalName__Cxg3P",p=t(4870),u=t(184),h=l,_=d,v=c,x=m,j=function(e){var i=e.data,t=(0,n.TH)();return(0,u.jsxs)(u.Fragment,{children:[null!==i&&i.results.map((function(e){var i=e.id,s=e.original_title,r=e.poster_path;return(0,u.jsx)("li",{className:h,children:(0,u.jsxs)(o.rU,{to:"/movies/".concat(i),state:{from:t},className:_,children:[(0,u.jsx)("img",{className:v,src:r?"https://image.tmdb.org/t/p/w500"+r:p.k,alt:"Img Poster for Movie"}),(0,u.jsx)("span",{className:x,children:s})]})},i)})),(0,u.jsx)(n.Z5,{children:(0,u.jsx)(n.AW,{path:"movieDetails",element:(0,u.jsx)(r.default,{})})})]})},f="Home_container__w+u63",g="Home_listPopulary__KT86R",N="Home_title__L087v",k=t(6891),w=t(6898),b=t(7393),y=t(1725),M=function(){var e=(0,a.useState)(!1),i=(0,s.Z)(e,2),t=i[0],r=i[1],n=(0,a.useState)(!1),o=(0,s.Z)(n,2),l=o[0],c=o[1],d=(0,a.useState)(null),m=(0,s.Z)(d,2),p=m[0],h=m[1];return(0,a.useEffect)((function(){(0,y.D)(r,h,c,"https://api.themoviedb.org/3/movie/popular?api_key=e9b50bda4ce56f3b360f447ed6508c77")}),[]),(0,u.jsx)("section",{children:(0,u.jsxs)("div",{className:f,children:[(0,u.jsx)("h1",{className:N,children:"Popular today"}),t&&(0,u.jsx)(k.default,{}),l&&(0,u.jsx)("h4",{children:"Errore"}),(0,u.jsx)(w.Z,{}),(0,u.jsx)("ul",{className:g,children:(0,u.jsx)(j,{data:p})}),(0,u.jsx)(b.Z,{})]})})}},7354:function(e,i,t){t.r(i),t.d(i,{default:function(){return M}});var s=t(9439),r=t(2791),a=t(7689),n=t(1087),o="MovieDetails_wrapperMovie__Nj4ri",l="MovieDetails_goBackBtn__WL+X0",c="MovieDetails_linkCastRewievs__ACbxb",d="MovieDetails_wrapperLink__RqOdW",m=t(1725),p={wrapperMovie:"MovieDetailsComponent_wrapperMovie__Ncsy9",imgPoster:"MovieDetailsComponent_imgPoster__oWRz8",title:"MovieDetailsComponent_title__BdDBo",descripTitle:"MovieDetailsComponent_descripTitle__F6gGs",description:"MovieDetailsComponent_description__3KLDi",linkCastRewievs:"MovieDetailsComponent_linkCastRewievs__qzKa1",wrapperLink:"MovieDetailsComponent_wrapperLink__sVGc-",titleVideo:"MovieDetailsComponent_titleVideo__Rd94U"},u=t(4870),h=t(6891),_="VideoPlayer_wrapperVideoPlayer__a6UlG",v="VideoPlayer_videoPlayer__a0tsp",x="VideoPlayer_textNotTrailer__uxmTb",j=t(184),f=function(e){var i=e.movieId,t=(0,r.useState)(null),a=(0,s.Z)(t,2),n=a[0],o=a[1],l=(0,r.useState)(!1),c=(0,s.Z)(l,2),d=c[0],p=c[1],u=(0,r.useState)(!1),f=(0,s.Z)(u,2),g=f[0],N=f[1],k="https://api.themoviedb.org/3/movie/".concat(i,"/videos?api_key=e9b50bda4ce56f3b360f447ed6508c77");(0,r.useEffect)((function(){(0,m.D)(p,o,N,k)}),[k]);var w=null!==n&&n.results.find((function(e){return"Official Trailer"===e.name})),b=void 0!==w;return(0,j.jsxs)(j.Fragment,{children:[d&&(0,j.jsx)(h.default,{}),g&&(0,j.jsx)("h4",{children:"Server Error"}),b&&(0,j.jsx)("div",{className:_,children:(0,j.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/".concat(w.key),title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,className:v})}),!b&&(0,j.jsx)("p",{className:x,children:"No official trailer available."})]})},g=function(e){var i=e.movie;return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("img",{className:p.imgPoster,src:i.poster_path?"https://image.tmdb.org/t/p/w500"+i.poster_path:u.k,alt:"Poster for Movie"}),(0,j.jsx)("h2",{className:p.title,children:i.original_title}),(0,j.jsx)("h2",{className:p.descripTitle,children:"Description:"}),(0,j.jsx)("p",{className:p.description,children:i.overview}),(0,j.jsx)("h2",{className:p.descripTitle,children:"Rating:"}),(0,j.jsx)("p",{className:p.description,children:i.vote_average}),(0,j.jsx)("h2",{className:p.descripTitle,children:"Date: "}),(0,j.jsx)("p",{className:p.description,children:i.release_date}),void 0!==i.genres&&i.genres.length>0&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("h2",{className:p.descripTitle,children:"Genre:"}),(0,j.jsx)("p",{className:p.description,children:0!==i.length&&i.genres.map((function(e,i){return(0,j.jsxs)("span",{className:p.spanMap,children:[" ",e.name,"."]},i)}))}),(0,j.jsx)("h2",{className:p.titleVideo,children:"Trailer"}),(0,j.jsx)(f,{movieId:i.id})]})]})},N=t(1413);var k=function(e){return(0,j.jsx)("svg",(0,N.Z)((0,N.Z)({viewBox:"0 0 512 512",fill:"currentColor",height:"1em",width:"1em"},e),{},{children:(0,j.jsx)("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:48,d:"M244 400L100 256l144-144M120 256h292"})}))},w=(0,r.lazy)((function(){return t.e(76).then(t.bind(t,8076))})),b=(0,r.lazy)((function(){return Promise.all([t.e(686),t.e(168)]).then(t.bind(t,2168))})),y=(0,r.lazy)((function(){return Promise.resolve().then(t.bind(t,6891))})),M=function(){var e,i,t=(0,a.UO)().movieId,p=(0,r.useState)([]),u=(0,s.Z)(p,2),h=u[0],_=u[1],v=(0,r.useState)(!1),x=(0,s.Z)(v,2),f=x[0],N=x[1],M=(0,r.useState)(!1),P=(0,s.Z)(M,2),C=P[0],D=P[1],Z=(0,r.useState)(!1),L=(0,s.Z)(Z,2),S=L[0],T=L[1],R=(0,r.useState)(!1),F=(0,s.Z)(R,2),V=F[0],W=F[1],B=(0,a.TH)(),E=(0,r.useRef)(null!==(e=null===(i=B.state)||void 0===i?void 0:i.from)&&void 0!==e?e:"/"),U="https://api.themoviedb.org/3/movie/".concat(t,"?api_key=e9b50bda4ce56f3b360f447ed6508c77");(0,r.useEffect)((function(){return(0,m.D)(N,_,D,U),function(){W(!1),T(!1)}}),[_,U]);return(0,j.jsxs)("section",{children:[(0,j.jsxs)(n.rU,{to:E.current,className:l,children:[(0,j.jsx)(k,{})," Go back"]}),f&&(0,j.jsx)(y,{}),C&&(0,j.jsx)("h4",{children:"Server Error"}),(0,j.jsx)("div",{className:o,children:(0,j.jsx)(g,{movie:h})}),(0,j.jsxs)("div",{className:d,children:[(0,j.jsx)(n.OL,{to:"cast",className:c,state:{from:B},onClick:function(){W(!1),T(!S)},children:"Cast"}),(0,j.jsx)(n.OL,{to:"rewievs",className:c,state:{from:B},onClick:function(){W(!V),T(!1)},children:"Rewievs"})]}),(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(r.Suspense,{fallback:(0,j.jsx)(y,{}),children:(0,j.jsxs)(a.Z5,{children:[S&&(0,j.jsx)(a.AW,{path:"cast/*",element:(0,j.jsx)(w,{})}),V&&(0,j.jsx)(a.AW,{path:"rewievs",element:(0,j.jsx)(b,{})})]})})})]})}}}]);
//# sourceMappingURL=568.08a197d5.chunk.js.map