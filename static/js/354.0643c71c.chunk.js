"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[354],{7354:function(e,i,t){t.r(i),t.d(i,{default:function(){return M}});var s=t(9439),r=t(2791),a=t(7689),n=t(1087),o="MovieDetails_wrapperMovie__Nj4ri",l="MovieDetails_goBackBtn__WL+X0",c="MovieDetails_linkCastRewievs__ACbxb",d="MovieDetails_wrapperLink__RqOdW",p=t(1725),m={wrapperMovie:"MovieDetailsComponent_wrapperMovie__Ncsy9",imgPoster:"MovieDetailsComponent_imgPoster__oWRz8",title:"MovieDetailsComponent_title__BdDBo",descripTitle:"MovieDetailsComponent_descripTitle__F6gGs",description:"MovieDetailsComponent_description__3KLDi",linkCastRewievs:"MovieDetailsComponent_linkCastRewievs__qzKa1",wrapperLink:"MovieDetailsComponent_wrapperLink__sVGc-",titleVideo:"MovieDetailsComponent_titleVideo__Rd94U"},h=t(4870),u=t(6891),v="VideoPlayer_wrapperVideoPlayer__a6UlG",_="VideoPlayer_videoPlayer__a0tsp",x="VideoPlayer_textNotTrailer__uxmTb",f=t(184),j=function(e){var i=e.movieId,t=(0,r.useState)(null),a=(0,s.Z)(t,2),n=a[0],o=a[1],l=(0,r.useState)(!1),c=(0,s.Z)(l,2),d=c[0],m=c[1],h=(0,r.useState)(!1),j=(0,s.Z)(h,2),w=j[0],g=j[1],k="https://api.themoviedb.org/3/movie/".concat(i,"/videos?api_key=e9b50bda4ce56f3b360f447ed6508c77");(0,r.useEffect)((function(){(0,p.D)(m,o,g,k)}),[k]);var b=null!==n&&n.results.find((function(e){return"Official Trailer"===e.name})),N=void 0!==b;return(0,f.jsxs)(f.Fragment,{children:[d&&(0,f.jsx)(u.default,{}),w&&(0,f.jsx)("h4",{children:"Server Error"}),N&&(0,f.jsx)("div",{className:v,children:(0,f.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/".concat(b.key),title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,className:_})}),!N&&(0,f.jsx)("p",{className:x,children:"No official trailer available."})]})},w=function(e){var i=e.movie;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("img",{className:m.imgPoster,src:i.poster_path?"https://image.tmdb.org/t/p/w500"+i.poster_path:h.k,alt:"Poster for Movie"}),(0,f.jsx)("h2",{className:m.title,children:i.original_title}),(0,f.jsx)("h2",{className:m.descripTitle,children:"Description:"}),(0,f.jsx)("p",{className:m.description,children:i.overview}),(0,f.jsx)("h2",{className:m.descripTitle,children:"Rating:"}),(0,f.jsx)("p",{className:m.description,children:i.vote_average}),(0,f.jsx)("h2",{className:m.descripTitle,children:"Date: "}),(0,f.jsx)("p",{className:m.description,children:i.release_date}),void 0!==i.genres&&i.genres.length>0&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("h2",{className:m.descripTitle,children:"Genre:"}),(0,f.jsx)("p",{className:m.description,children:0!==i.length&&i.genres.map((function(e,i){return(0,f.jsxs)("span",{className:m.spanMap,children:[" ",e.name,"."]},i)}))}),(0,f.jsx)("h2",{className:m.titleVideo,children:"Trailer"}),(0,f.jsx)(j,{movieId:i.id})]})]})},g=t(1413);var k=function(e){return(0,f.jsx)("svg",(0,g.Z)((0,g.Z)({viewBox:"0 0 512 512",fill:"currentColor",height:"1em",width:"1em"},e),{},{children:(0,f.jsx)("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:48,d:"M244 400L100 256l144-144M120 256h292"})}))},b=(0,r.lazy)((function(){return t.e(76).then(t.bind(t,8076))})),N=(0,r.lazy)((function(){return Promise.all([t.e(686),t.e(168)]).then(t.bind(t,2168))})),C=(0,r.lazy)((function(){return Promise.resolve().then(t.bind(t,6891))})),M=function(){var e,i,t=(0,a.UO)().movieId,m=(0,r.useState)([]),h=(0,s.Z)(m,2),u=h[0],v=h[1],_=(0,r.useState)(!1),x=(0,s.Z)(_,2),j=x[0],g=x[1],M=(0,r.useState)(!1),D=(0,s.Z)(M,2),y=D[0],S=D[1],T=(0,r.useState)(!1),P=(0,s.Z)(T,2),Z=P[0],L=P[1],R=(0,r.useState)(!1),V=(0,s.Z)(R,2),B=V[0],F=V[1],W=(0,a.TH)(),z=(0,r.useRef)(null!==(e=null===(i=W.state)||void 0===i?void 0:i.from)&&void 0!==e?e:"/"),G="https://api.themoviedb.org/3/movie/".concat(t,"?api_key=e9b50bda4ce56f3b360f447ed6508c77");(0,r.useEffect)((function(){return(0,p.D)(g,v,S,G),function(){F(!1),L(!1)}}),[v,G]);return(0,f.jsxs)("section",{children:[(0,f.jsxs)(n.rU,{to:z.current,className:l,children:[(0,f.jsx)(k,{})," Go back"]}),j&&(0,f.jsx)(C,{}),y&&(0,f.jsx)("h4",{children:"Server Error"}),(0,f.jsx)("div",{className:o,children:(0,f.jsx)(w,{movie:u})}),(0,f.jsxs)("div",{className:d,children:[(0,f.jsx)(n.OL,{to:"cast",className:c,state:{from:W},onClick:function(){F(!1),L(!Z)},children:"Cast"}),(0,f.jsx)(n.OL,{to:"rewievs",className:c,state:{from:W},onClick:function(){F(!B),L(!1)},children:"Rewievs"})]}),(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(r.Suspense,{fallback:(0,f.jsx)(C,{}),children:(0,f.jsxs)(a.Z5,{children:[Z&&(0,f.jsx)(a.AW,{path:"cast/*",element:(0,f.jsx)(b,{})}),B&&(0,f.jsx)(a.AW,{path:"rewievs",element:(0,f.jsx)(N,{})})]})})})]})}}}]);
//# sourceMappingURL=354.0643c71c.chunk.js.map