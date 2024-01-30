"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[354],{7354:function(e,i,t){t.r(i),t.d(i,{default:function(){return y}});var s=t(9439),r=t(2791),a=t(7689),n=t(1087),o="MovieDetails_wrapperMovie__Nj4ri",l="MovieDetails_goBackBtn__WL+X0",c="MovieDetails_linkCastRewievs__ACbxb",d="MovieDetails_wrapperLink__RqOdW",p=t(1725),m={wrapperMovie:"MovieDetailsComponent_wrapperMovie__Ncsy9",imgPoster:"MovieDetailsComponent_imgPoster__oWRz8",title:"MovieDetailsComponent_title__BdDBo",descripTitle:"MovieDetailsComponent_descripTitle__F6gGs",description:"MovieDetailsComponent_description__3KLDi",linkCastRewievs:"MovieDetailsComponent_linkCastRewievs__qzKa1",wrapperLink:"MovieDetailsComponent_wrapperLink__sVGc-",titleVideo:"MovieDetailsComponent_titleVideo__Rd94U"},h=t(4870),u=t(6891),v=t(7335),_="VideoPlayer_wrapperVideoPlayer__a6UlG",x="VideoPlayer_videoPlayer__a0tsp",f="VideoPlayer_textNotTrailer__uxmTb",j=t(184),w=function(e){var i=e.movieId,t=(0,r.useState)([]),a=(0,s.Z)(t,2),n=a[0],o=a[1],l=(0,r.useState)(!1),c=(0,s.Z)(l,2),d=c[0],p=c[1],m=(0,r.useState)(!1),h=(0,s.Z)(m,2),w=h[0],g=h[1],k="https://api.themoviedb.org/3/movie/".concat(i,"/videos?api_key=e9b50bda4ce56f3b360f447ed6508c77");(0,r.useEffect)((function(){(0,v.v)(p,o,g,k)}),[k]);var b=n.find((function(e){return"Official Trailer"===e.name})),N=void 0!==b;return(0,j.jsxs)(j.Fragment,{children:[d&&(0,j.jsx)(u.default,{}),w&&(0,j.jsx)("h4",{children:"Server Error"}),N&&(0,j.jsx)("div",{className:_,children:(0,j.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/".concat(b.key),title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,className:x})}),!N&&(0,j.jsx)("p",{className:f,children:"No official trailer available."})]})},g=function(e){var i=e.movie;return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("img",{className:m.imgPoster,src:i.poster_path?"https://image.tmdb.org/t/p/w500"+i.poster_path:h.k,alt:"Poster for Movie"}),(0,j.jsx)("h2",{className:m.title,children:i.original_title}),(0,j.jsx)("h2",{className:m.descripTitle,children:"Description:"}),(0,j.jsx)("p",{className:m.description,children:i.overview}),(0,j.jsx)("h2",{className:m.descripTitle,children:"Rating:"}),(0,j.jsx)("p",{className:m.description,children:i.vote_average}),(0,j.jsx)("h2",{className:m.descripTitle,children:"Date: "}),(0,j.jsx)("p",{className:m.description,children:i.release_date}),void 0!==i.genres&&i.genres.length>0&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("h2",{className:m.descripTitle,children:"Genre:"}),(0,j.jsx)("p",{className:m.description,children:0!==i.length&&i.genres.map((function(e,i){return(0,j.jsxs)("span",{className:m.spanMap,children:[" ",e.name,"."]},i)}))}),(0,j.jsx)("h2",{className:m.titleVideo,children:"Trailer"}),(0,j.jsx)(w,{movieId:i.id})]})]})},k=t(1413);var b=function(e){return(0,j.jsx)("svg",(0,k.Z)((0,k.Z)({viewBox:"0 0 512 512",fill:"currentColor",height:"1em",width:"1em"},e),{},{children:(0,j.jsx)("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:48,d:"M244 400L100 256l144-144M120 256h292"})}))},N=(0,r.lazy)((function(){return t.e(76).then(t.bind(t,8076))})),C=(0,r.lazy)((function(){return Promise.all([t.e(686),t.e(168)]).then(t.bind(t,2168))})),M=(0,r.lazy)((function(){return Promise.resolve().then(t.bind(t,6891))})),y=function(){var e,i,t=(0,a.UO)().movieId,m=(0,r.useState)([]),h=(0,s.Z)(m,2),u=h[0],v=h[1],_=(0,r.useState)(!1),x=(0,s.Z)(_,2),f=x[0],w=x[1],k=(0,r.useState)(!1),y=(0,s.Z)(k,2),D=y[0],S=y[1],T=(0,r.useState)(!1),P=(0,s.Z)(T,2),Z=P[0],L=P[1],R=(0,r.useState)(!1),V=(0,s.Z)(R,2),B=V[0],F=V[1],W=(0,a.TH)(),z=(0,r.useRef)(null!==(e=null===(i=W.state)||void 0===i?void 0:i.from)&&void 0!==e?e:"/"),G="https://api.themoviedb.org/3/movie/".concat(t,"?api_key=e9b50bda4ce56f3b360f447ed6508c77");(0,r.useEffect)((function(){return(0,p.D)(w,v,S,G),function(){F(!1),L(!1)}}),[v,G]);return(0,j.jsxs)("section",{children:[(0,j.jsxs)(n.rU,{to:z.current,className:l,children:[(0,j.jsx)(b,{})," Go back"]}),f&&(0,j.jsx)(M,{}),D&&(0,j.jsx)("h4",{children:"Server Error"}),(0,j.jsx)("div",{className:o,children:(0,j.jsx)(g,{movie:u})}),(0,j.jsxs)("div",{className:d,children:[(0,j.jsx)(n.OL,{to:"cast",className:c,state:{from:W},onClick:function(){F(!1),L(!Z)},children:"Cast"}),(0,j.jsx)(n.OL,{to:"rewievs",className:c,state:{from:W},onClick:function(){F(!B),L(!1)},children:"Rewievs"})]}),(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(r.Suspense,{fallback:(0,j.jsx)(M,{}),children:(0,j.jsxs)(a.Z5,{children:[Z&&(0,j.jsx)(a.AW,{path:"cast/*",element:(0,j.jsx)(N,{})}),B&&(0,j.jsx)(a.AW,{path:"rewievs",element:(0,j.jsx)(C,{})})]})})})]})}}}]);
//# sourceMappingURL=354.6f89d61d.chunk.js.map