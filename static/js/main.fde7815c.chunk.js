(this["webpackJsonptypescript-kinopoisk-explorer"]=this["webpackJsonptypescript-kinopoisk-explorer"]||[]).push([[0],[,,,,,function(e,t,s){e.exports={section:"styles_section__2YXE6",title:"styles_title__1h5RX",text:"styles_text__1TSHF",taskListItem:"styles_taskListItem__GKLkf",subTitle:"styles_subTitle__3_s-5",toolsList:"styles_toolsList__3VBLY",toolsListItem:"styles_toolsListItem__3sVDE",logoImg:"styles_logoImg__2QsCb"}},,,,,,,function(e,t,s){e.exports={section:"styles_section__I5HRu",backgroundImage:"styles_backgroundImage__9YDYu",poster:"styles_poster__2AKHN",content:"styles_content__aRYQu",title:"styles_title__3KIDY",subtitle:"styles_subtitle__3ttpr",genresList:"styles_genresList__3qXt1",genresListItem:"styles_genresListItem__1PJ5I",heading:"styles_heading__wCRsf",text:"styles_text__2r4bn",message:"styles_message__1un53"}},function(e,t,s){e.exports={pagination:"styles_pagination__2CxhI",list:"styles_list__39e39",listItem:"styles_listItem__3RWZq",link:"styles_link__2Vezt",activeLink:"styles_activeLink__3mSUx"}},function(e,t,s){e.exports={header:"styles_header__1jSbD",logo:"styles_logo__1GCOD",list:"styles_list__3mr8O",listItem:"styles_listItem__2CJsJ",link:"styles_link__1HY-i"}},function(e,t,s){e.exports={card:"styles_card__3MgUV",image:"styles_image__v67F9",content:"styles_content__23Uz9",title:"styles_title__2XCi6",rating:"styles_rating___kXbW",genre:"styles_genre__8qOhb",desctiption:"styles_desctiption__3jHNj"}},,function(e,t,s){e.exports={container:"styles_container__35Tjr",list:"styles_list__xmeDr",link:"styles_link__20-a4"}},,,,function(e,t,s){e.exports={formContainer:"styles_formContainer__2VWLy",form:"styles_form__2aHf2",input:"styles_input__R0aKi",submitButton:"styles_submitButton__1eobm"}},,,,function(e,t,s){e.exports={section:"styles_section__3M7kR",container:"styles_container__1Ecab",text:"styles_text__3s8H5"}},,,function(e,t,s){e.exports={footer:"styles_footer__3IJvn",text:"styles_text__n-Z27"}},,,function(e,t,s){e.exports={preloader:"styles_preloader__V1zZv",text:"styles_text__1pyb9"}},function(e,t,s){e.exports={main:"styles_main__jZ9tO",title:"styles_title__QQaes",message:"styles_message__2KA1a"}},,function(e,t,s){e.exports={message:"styles_message__3crrA"}},function(e,t,s){e.exports={genresListItem:"styles_genresListItem__1p_OW"}},function(e,t,s){e.exports={link:"styles_link__2ZXqw"}},function(e,t,s){e.exports={page:"styles_page__2Aw4X"}},,,,,,,,,function(e,t,s){},,,,,function(e,t,s){"use strict";s.r(t);var n,a=s(1),c=s.n(a),r=s(22),i=s.n(r),o=s(6),l=s(10),_=s(4),j=s(20),u=s(33),O=s(2);!function(e){e.FETCH_MOVIE="FETCH_MOVIE",e.FETCH_MOVIE_SUCCESS="FETCH_MOVIE_SUCCESS",e.FETCH_MOVIE_ERROR="FETCH_MOVIE_ERROR"}(n||(n={}));var b,m={movie:{filmId:0,nameRu:"",nameEn:"",webUrl:"",posterUrl:"",year:0,filmLength:"",slogan:"",description:"",type:"",countries:[],genres:[],rating:{rating:0,ratingVoteCount:0,ratingImdb:0,ratingImdbVoteCount:0},images:{posters:[]}},isLoading:!1,movieError:null};!function(e){e.SEARCH_MOVIE="SEARCH_MOVIE",e.SEARCH_MOVIE_SUCCESS="SEARCH_MOVIE_SUCCESS",e.SEARCH_MOVIE_ERROR="SEARCH_MOVIE_ERROR",e.SET_SEARCH_MOVIE_PAGE="SET_SEARCH_MOVIE_PAGE",e.SET_SEARCH_KEYWORD="SET_SEARCH_KEYWORD",e.SET_SEARCH_PAGES_COUNT="SET_SEARCH_PAGES_COUNT"}(b||(b={}));var d,p={keyword:"",searchResults:[],isSearchResultsLoading:!1,searchResultsCurrentPage:1,searchResultsPagesCount:0,searchMovieError:null};!function(e){e.FETCH_TOP_MOVIES="FETCH_TOP_MOVIES",e.FETCH_TOP_MOVIES_SUCCESS="FETCH_TOP_MOVIES_SUCCESS",e.FETCH_TOP_MOVIES_ERROR="FETCH_TOP_MOVIES_ERROR",e.SET_TOP_MOVIE_PAGE="SET_TOP_MOVIE_PAGE"}(d||(d={}));var h={topMovies:[],isTopMoviesLoading:!1,currentPage:1,pagesCount:5,fetchTopMoviesError:null},x=Object(j.b)({topMovies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d.FETCH_TOP_MOVIES:return Object(O.a)(Object(O.a)({},e),{},{isTopMoviesLoading:!0});case d.FETCH_TOP_MOVIES_SUCCESS:return Object(O.a)(Object(O.a)({},e),{},{topMovies:t.payload,isTopMoviesLoading:!1});case d.SET_TOP_MOVIE_PAGE:return Object(O.a)(Object(O.a)({},e),{},{currentPage:t.payload});case d.FETCH_TOP_MOVIES_ERROR:return Object(O.a)(Object(O.a)({},e),{},{isTopMoviesLoading:!1,fetchTopMoviesError:t.payload});default:return e}},singleMovie:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.FETCH_MOVIE:return Object(O.a)(Object(O.a)({},e),{},{isLoading:!0});case n.FETCH_MOVIE_SUCCESS:return Object(O.a)(Object(O.a)({},e),{},{movie:t.payload,isLoading:!1});case n.FETCH_MOVIE_ERROR:return Object(O.a)(Object(O.a)({},e),{},{movieError:t.payload,isLoading:!1});default:return e}},searchResults:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b.SEARCH_MOVIE:return Object(O.a)(Object(O.a)({},e),{},{isSearchResultsLoading:!0});case b.SEARCH_MOVIE_SUCCESS:return Object(O.a)(Object(O.a)({},e),{},{isSearchResultsLoading:!1,searchResults:t.payload});case b.SET_SEARCH_MOVIE_PAGE:return Object(O.a)(Object(O.a)({},e),{},{searchResultsCurrentPage:t.payload});case b.SET_SEARCH_KEYWORD:return Object(O.a)(Object(O.a)({},e),{},{keyword:t.payload});case b.SET_SEARCH_PAGES_COUNT:return Object(O.a)(Object(O.a)({},e),{},{searchResultsPagesCount:t.payload});case b.SEARCH_MOVIE_ERROR:return Object(O.a)(Object(O.a)({},e),{},{isSearchResultsLoading:!1,searchMovieError:t.payload});default:return e}}}),E=Object(j.c)(x,Object(j.a)(u.a)),g="https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=",f="https://kinopoiskapiunofficial.tech/api",y="about-page",v="/",S="movie",C="search",R="\u041d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435 \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430",I=(s(46),s(28)),T=s.n(I),N=s(0),M=function(){return Object(N.jsx)("footer",{className:T.a.footer,children:Object(N.jsx)("span",{className:T.a.text,children:(new Date).getFullYear()})})},k=s(38),H=function(){return{type:b.SEARCH_MOVIE}},V=function(e){return{type:b.SEARCH_MOVIE_SUCCESS,payload:e}},L=function(e){return{type:b.SET_SEARCH_PAGES_COUNT,payload:e}},P=function(e){return{type:b.SET_SEARCH_MOVIE_PAGE,payload:e}},A=function(e){return{type:b.SET_SEARCH_KEYWORD,payload:e}},F=function(e){return{type:b.SEARCH_MOVIE_ERROR,payload:e}},U=s(16),w=s.n(U),G=s(24),Y=function(e){return{type:n.FETCH_MOVIE_SUCCESS,payload:e}},D=function(){return{type:d.FETCH_TOP_MOVIES}},K=function(e){return{type:d.FETCH_TOP_MOVIES_SUCCESS,payload:e}},B=function(e){return{type:d.FETCH_TOP_MOVIES_ERROR,payload:e}},W={headers:{"X-API-KEY":"6f236faa-05c4-47ab-90cb-cb534e2732e8"}},X=function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 \u0441 \u0444\u0440\u043e\u043d\u0442\u0430")},J=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return function(){var s=Object(G.a)(w.a.mark((function s(n){var a,c;return w.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,n(H()),s.next=4,fetch("".concat(f,"/v2.1/films/search-by-keyword?keyword=").concat(e,"&page=").concat(t),W);case 4:return a=s.sent,s.next=7,X(a);case 7:c=s.sent,setTimeout((function(){n(L(c.pagesCount)),n(V(c.films)),n(A(c.keyword))}),400),s.next=15;break;case 11:s.prev=11,s.t0=s.catch(0),setTimeout((function(){return n(F(R))}),400),console.log(s.t0);case 15:case"end":return s.stop()}}),s,null,[[0,11]])})));return function(e){return s.apply(this,arguments)}}()},Z=s(21),q=s.n(Z),z=function(){var e=Object(a.useState)(""),t=Object(k.a)(e,2),s=t[0],n=t[1],c=Object(l.b)(),r=Object(_.g)();return Object(N.jsx)("div",{className:q.a.formContainer,children:Object(N.jsxs)("form",{className:q.a.form,onSubmit:function(e){e.preventDefault(),c(J(s)),r.push("/".concat(C)),n(""),c(P(1))},children:[Object(N.jsx)("input",{className:q.a.input,onChange:function(e){n(e.target.value)},value:s,placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0444\u0438\u043b\u044c\u043c\u0430",autoComplete:"off"}),Object(N.jsx)("button",{className:q.a.submitButton,type:"submit"})]})})},Q=s(14),$=s.n(Q),ee=s.p+"static/media/logo.84c1e32f.svg",te=function(){return Object(N.jsxs)("header",{className:$.a.header,children:[Object(N.jsx)(o.b,{to:v,children:Object(N.jsx)("img",{src:ee,alt:"\u041b\u043e\u0433\u043e",className:$.a.logo})}),Object(N.jsx)(z,{}),Object(N.jsxs)("ul",{className:$.a.list,children:[Object(N.jsx)("li",{className:$.a.listItem,children:Object(N.jsx)(o.b,{to:"/".concat(y),className:$.a.link,children:"\u041e \u043f\u0440\u043e\u0435\u043a\u0442\u0435"})}),Object(N.jsx)("li",{className:$.a.listItem,children:Object(N.jsx)("a",{href:"https://github.com/rizametovd/typescript-kinopoisk-explorer",className:$.a.link,target:"_blank",rel:"noreferrer",children:"\u0420\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0439 \u043f\u0440\u043e\u0435\u043a\u0442\u0430"})})]})]})},se=l.c,ne=s(5),ae=s.n(ne),ce=s.p+"static/media/react-logo.e68b35f4.svg",re=s.p+"static/media/ts-logo.e0cf5672.svg",ie=s.p+"static/media/redux-logo.0e4fb1c8.svg",oe=function(){return Object(N.jsxs)("section",{className:ae.a.section,children:[Object(N.jsx)("h1",{className:ae.a.title,children:"\u041e \u043f\u0440\u043e\u0435\u043a\u0442\u0435"}),Object(N.jsx)("p",{className:ae.a.text,children:"\u041f\u044d\u0442 \u043f\u0440\u043e\u0435\u043a\u0442. \u041f\u043e\u0438\u0441\u043a \u0444\u0438\u043b\u044c\u043c\u043e\u0432 \u043f\u043e \u0431\u0430\u0437\u0435 \u041a\u0438\u043d\u043e\u043f\u043e\u0438\u0441\u043a\u0430."}),Object(N.jsx)("h2",{className:ae.a.subTitle,children:"\u0417\u0430\u0434\u0430\u0447\u0430"}),Object(N.jsxs)("ul",{className:ae.a.taskList,children:[Object(N.jsx)("li",{className:ae.a.taskListItem,children:"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e \u0441\u0432\u0435\u0440\u0441\u0442\u0430\u0442\u044c"}),Object(N.jsx)("li",{className:ae.a.taskListItem,children:"\u0422\u0438\u043f\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b"}),Object(N.jsx)("li",{className:ae.a.taskListItem,children:"\u0414\u043b\u044f \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c Redux"})]}),Object(N.jsx)("h2",{className:ae.a.subTitle,children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u044b"}),Object(N.jsxs)("ul",{className:ae.a.toolsList,children:[Object(N.jsxs)("li",{className:ae.a.toolsListItem,children:[Object(N.jsx)("img",{src:ce,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u0420\u0435\u0430\u043a\u0442\u0430",className:ae.a.logoImg}),Object(N.jsx)("span",{children:"React"})]}),Object(N.jsxs)("li",{className:ae.a.toolsListItem,children:[Object(N.jsx)("img",{src:re,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f TypeScript",className:ae.a.logoImg}),Object(N.jsx)("span",{children:"TypeScript"})]}),Object(N.jsxs)("li",{className:ae.a.toolsListItem,children:[Object(N.jsx)("img",{src:ie,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f Redux",className:ae.a.logoImg}),Object(N.jsx)("span",{children:"Redux"})]})]})]})},le=s(34),_e=s.n(le),je=function(e){var t=e.message;return Object(N.jsx)("h2",{className:_e.a.message,children:t})},ue=s(12),Oe=s.n(ue),be=s(31),me=s.n(be),de=function(){return Object(N.jsx)("div",{className:me.a.preloader,children:Object(N.jsx)("p",{className:me.a.text,children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."})})},pe=s(35),he=s.n(pe),xe=function(e){var t=e.genre;return Object(N.jsx)("li",{className:he.a.genresListItem,children:t.charAt(0).toUpperCase()+t.slice(1)})},Ee=s(36),ge=s.n(Ee),fe=function(e){var t=e.text,s=Object(_.g)();return Object(N.jsx)(o.b,{className:ge.a.link,to:"/",onClick:function(){return s.goBack()},children:t})},ye=function(){var e=Object(_.i)().filmId,t=Object(l.b)(),s=se((function(e){return e.singleMovie})),c=s.isLoading,r=s.movie,i=s.movieError,o=r.nameRu,j=r.nameEn,u=r.description,O=r.posterUrl,b=r.year,m=r.genres,d=r.filmLength;return Object(a.useEffect)((function(){t(function(e){return function(){var t=Object(G.a)(w.a.mark((function t(s){var a,c;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,s({type:n.FETCH_MOVIE}),t.next=4,fetch("".concat(f,"/v2.1/films/").concat(e),W);case 4:return a=t.sent,t.next=7,X(a);case 7:c=t.sent,setTimeout((function(){return s(Y(c.data))}),400),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0),setTimeout((function(){return s((e=R,{type:n.FETCH_MOVIE_ERROR,payload:e}));var e}),400);case 15:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}(e))}),[e]),Object(N.jsxs)("section",{className:Oe.a.section,children:[Object(N.jsx)("div",{className:Oe.a.backgroundImage,style:{backgroundImage:"url(".concat(O,")")}}),c&&Object(N.jsx)(de,{}),!c&&!!i&&Object(N.jsx)(je,{message:i}),!c&&!i&&Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(fe,{text:"\u041d\u0430\u0437\u0430\u0434"}),Object(N.jsxs)("div",{className:Oe.a.content,children:[Object(N.jsx)("img",{src:O,alt:"\u041f\u043e\u0441\u0442\u0435\u0440",className:Oe.a.poster}),Object(N.jsxs)("div",{children:[Object(N.jsx)("h1",{className:Oe.a.title,children:o}),Object(N.jsxs)("h2",{className:Oe.a.subtitle,children:[j&&"".concat(j,", "),Object(N.jsx)("span",{children:b})]}),d&&Object(N.jsxs)("p",{className:Oe.a.subtitle,children:["\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c: ",d," \u0447"]}),Object(N.jsx)("ul",{className:Oe.a.genresList,children:m.map((function(e,t){var s=e.genre;return Object(N.jsx)(xe,{genre:s},t)}))}),u&&Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("h3",{className:Oe.a.heading,children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),Object(N.jsx)("p",{className:Oe.a.text,children:u})]})]})]})]})]})},ve=s(15),Se=s.n(ve),Ce=function(e){var t=e.nameRu,s=e.rating,n=e.genres,a=e.posterUrl;return Object(N.jsxs)("div",{className:Se.a.card,children:[Object(N.jsx)("img",{src:a,alt:"\u041e\u0431\u043b\u043e\u0436\u043a\u0430",className:Se.a.image}),Object(N.jsxs)("div",{className:Se.a.content,children:[Object(N.jsx)("h2",{className:Se.a.title,children:t}),Object(N.jsxs)("p",{className:Se.a.rating,children:["\u0420\u0435\u0439\u0442\u0438\u043d\u0433: ",s,"/10"]}),n.map((function(e,t){var s=e.genre;return n.length===t+1?Object(N.jsx)("span",{className:Se.a.genre,children:s},t):Object(N.jsxs)("span",{className:Se.a.genre,children:[s,","," "]},t)}))]})]})},Re=s(17),Ie=s.n(Re),Te=function(){var e=Object(_.h)(),t=se((function(e){return e.topMovies.topMovies})),s=se((function(e){return e.searchResults.searchResults}));return Object(N.jsx)("div",{className:Ie.a.container,children:Object(N.jsx)("ul",{className:Ie.a.list,children:e.pathname==="/".concat(C)?Object(N.jsx)(N.Fragment,{children:s.map((function(e){return Object(N.jsx)("li",{className:Ie.a.listItem,children:Object(N.jsx)(o.b,{to:"/".concat(S,"/").concat(e.filmId),className:Ie.a.link,children:Object(N.jsx)(Ce,Object(O.a)({},e))})},e.filmId)}))}):Object(N.jsx)(N.Fragment,{children:t.map((function(e){return Object(N.jsx)("li",{className:Ie.a.listItem,children:Object(N.jsx)(o.b,{to:"/".concat(S,"/").concat(e.filmId),className:Ie.a.link,children:Object(N.jsx)(Ce,Object(O.a)({},e))})},e.filmId)}))})})})},Ne=s(25),Me=s.n(Ne),ke=function(){return Object(N.jsxs)("section",{className:Me.a.section,children:[Object(N.jsx)(fe,{text:"\u041d\u0430\u0437\u0430\u0434"}),Object(N.jsxs)("div",{className:Me.a.container,children:[Object(N.jsx)("h1",{className:Me.a.text,children:"404"}),Object(N.jsx)(je,{message:"\u0422\u0430\u043a\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u043d\u0435\u0442"})]})]})},He=function(e,t,s){if(t>5)if(s>=3)for(var n=s-2;n<=s+2&&(e.push(n),20!==n);n++);else for(var a=1;a<=5&&(e.push(a),20!==a);a++);else for(var c=1;c<=t;c++)e.push(c)},Ve=s(13),Le=s.n(Ve),Pe=function(){var e=Object(_.h)(),t=Object(l.b)(),s=se((function(e){return e.topMovies})),n=s.pagesCount,a=s.currentPage,c=se((function(e){return e.searchResults})),r=c.searchResultsPagesCount,i=c.searchResultsCurrentPage,j=c.keyword,u=[],O=[];He(O,n,a),He(u,r,i);var b=function(e){var s;t((s=e,{type:d.SET_TOP_MOVIE_PAGE,payload:s}))};return Object(N.jsx)("div",{className:Le.a.pagination,children:Object(N.jsx)("ul",{className:Le.a.list,children:e.pathname===v?Object(N.jsx)(N.Fragment,{children:O.map((function(e){return Object(N.jsx)("li",{className:Le.a.listItem,children:Object(N.jsx)(o.b,{to:"#",className:"".concat(Le.a.link," ").concat(a===e?Le.a.activeLink:""),onClick:function(){return b(e)},children:e})},e)}))}):Object(N.jsx)(N.Fragment,{children:u.map((function(e){return Object(N.jsx)("li",{className:Le.a.listItem,children:Object(N.jsx)(o.b,{to:"#",className:"".concat(Le.a.link," ").concat(i===e?Le.a.activeLink:""),onClick:function(){return t(P(s=e)),void t(J(j,s));var s},children:e})},e)}))})})})},Ae=s(32),Fe=s.n(Ae),Ue=function(){var e=Object(l.b)(),t=se((function(e){return e.topMovies})),s=t.isTopMoviesLoading,n=t.currentPage,c=t.fetchTopMoviesError,r=se((function(e){return e.searchResults})),i=r.isSearchResultsLoading,o=r.searchResults,j=r.searchMovieError,u=r.keyword;return Object(a.useEffect)((function(){e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return function(){var t=Object(G.a)(w.a.mark((function t(s){var n,a;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,s(D()),t.next=4,fetch("".concat(g).concat(e),W);case 4:return n=t.sent,t.next=7,X(n);case 7:a=t.sent,setTimeout((function(){s(K(a.films))}),400),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0),setTimeout((function(){return s(B(R))}),400);case 15:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}(n))}),[n]),Object(N.jsx)("main",{className:Fe.a.main,children:Object(N.jsxs)(_.d,{children:[Object(N.jsxs)(_.b,{exact:!0,path:v,children:[s&&Object(N.jsx)(de,{}),!s&&c&&Object(N.jsx)(je,{message:c}),!s&&!c&&Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("h1",{className:Fe.a.title,children:"\u0422\u043e\u043f \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0445 \u0444\u0438\u043b\u044c\u043c\u043e\u0432"}),Object(N.jsx)(Te,{}),Object(N.jsx)(Pe,{})]})]}),Object(N.jsx)(_.b,{exact:!0,path:"/".concat(S,"/:filmId"),children:Object(N.jsx)(ye,{})}),Object(N.jsxs)(_.b,{exact:!0,path:"/".concat(C),children:[i&&Object(N.jsx)(de,{}),!i&&j&&Object(N.jsx)(je,{message:j}),!i&&!j&&""===u&&Object(N.jsx)(je,{message:"\u0412\u044b \u0435\u0449\u0435 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u0438\u0441\u043a\u0430\u043b\u0438"}),!i&&!!u&&Boolean(!o.length)&&Object(N.jsx)(je,{message:"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"}),!i&&!!u&&Boolean(o.length)&&Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(Te,{}),Object(N.jsx)(Pe,{})]})]}),Object(N.jsx)(_.b,{exact:!0,path:"/".concat(y),children:Object(N.jsx)(oe,{})}),Object(N.jsx)(_.b,{path:"*",component:ke})]})})},we=s(37),Ge=s.n(we),Ye=function(){var e=Object(_.h)();return Object(N.jsxs)("div",{className:Ge.a.page,children:[Object(N.jsxs)(l.a,{store:E,children:[Object(N.jsx)(te,{}),Object(N.jsx)(Ue,{}),Object(N.jsx)(M,{})]}),Object(N.jsx)(_.b,{children:"/typescript-kinopoisk-explorer"===e.pathname&&Object(N.jsx)(_.a,{to:v})})]})};i.a.render(Object(N.jsx)(c.a.StrictMode,{children:Object(N.jsx)(o.a,{children:Object(N.jsx)(Ye,{})})}),document.getElementById("root"))}],[[51,1,2]]]);
//# sourceMappingURL=main.fde7815c.chunk.js.map