(this.webpackJsonpminflix=this.webpackJsonpminflix||[]).push([[0],{68:function(e,t,s){},69:function(e,t,s){},70:function(e,t,s){},74:function(e,t,s){},75:function(e,t,s){},76:function(e,t,s){},78:function(e,t,s){"use strict";s.r(t);var c=s(1),n=s(0),i=s.n(n),a=s(37),r=s.n(a),j=s(24),l=s.n(j),o=s(38),b=s(17),d=s(18),u=s(20),O=s(19),m=s(39),x=s.n(m),h=s(2),v=s.n(h);s(68);function p(e){var t=e.title,s=e.year,n=e.summary,i=e.poster,a=e.genres;return Object(c.jsxs)("div",{className:"movie",children:[Object(c.jsx)("img",{src:i,alt:t,title:t}),Object(c.jsxs)("div",{className:"movie__data",children:[Object(c.jsx)("h3",{className:"movie__title",children:t}),Object(c.jsx)("h3",{className:"movie__year",children:s}),Object(c.jsx)("ul",{className:"movie__genres",children:a.map((function(e,t){return Object(c.jsx)("li",{className:"movie__genre",children:e},t)}))}),Object(c.jsxs)("p",{className:"movie__summary",children:[n.slice(0,180),"..."]})]})]})}p.prototype={year:v.a.number.isRequired,title:v.a.string.isRequired,summary:v.a.string.isRequired,poster:v.a.string.isRequired,genres:v.a.arrayOf(v.a.string).isRequired};var f=p,g=(s(69),s.p+"static/media/1.1412b1dd.png"),y=(s(70),s(11)),_=s(12),N=function(e){Object(u.a)(s,e);var t=Object(O.a)(s);function s(){return Object(b.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){return Object(c.jsxs)("div",{className:"header",children:[Object(c.jsxs)("ul",{className:"menu",ref:this.myRef,children:[Object(c.jsx)("img",{src:g,className:"title",alt:"netflix"}),Object(c.jsx)("li",{children:Object(c.jsx)("button",{children:"TV\ud504\ub85c\uadf8\ub7a8"})}),Object(c.jsx)("li",{children:Object(c.jsx)("button",{children:"\uc601\ud654"})}),Object(c.jsx)("li",{children:Object(c.jsx)("button",{children:"\ucd5c\uc2e0 \ucf58\ud150\uce20"})}),Object(c.jsx)("li",{children:Object(c.jsx)("button",{children:"\ub0b4\uac00 \ucc1c\ud55c \ucf58\ud150\uce20"})})]}),Object(c.jsxs)("ul",{className:"icons",children:[Object(c.jsx)("li",{children:Object(c.jsx)(y.a,{icon:_.d})}),Object(c.jsx)("li",{children:Object(c.jsx)("button",{children:"kids"})}),Object(c.jsx)("li",{children:Object(c.jsx)(y.a,{icon:_.c})}),Object(c.jsx)("li",{children:Object(c.jsx)(y.a,{icon:_.a})}),Object(c.jsx)("li",{children:Object(c.jsx)("span",{className:"square",children:Object(c.jsx)(y.a,{icon:_.e})})}),Object(c.jsx)("li",{children:Object(c.jsx)(y.a,{icon:_.b})})]})]})}}]),s}(i.a.Component),k=s(40),q=function(e){Object(u.a)(s,e);var t=Object(O.a)(s);function s(){var e;Object(b.a)(this,s);for(var c=arguments.length,n=new Array(c),i=0;i<c;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={isLoading:!0,movies:[]},e.getMovies=Object(o.a)(l.a.mark((function t(){var s,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:s=t.sent,c=s.data.data.movies,e.setState({movies:c,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(c.jsx)("section",{className:"container",children:t?Object(c.jsx)("div",{className:"loading",children:Object(c.jsx)(k.a,{})}):Object(c.jsxs)("div",{className:"movies",children:[Object(c.jsx)(N,{}),s.map((function(e){return Object(c.jsx)(f,{year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))]})})}}]),s}(i.a.Component),w=(s(74),s(15)),R=s(4);s(75);var A=function(){return Object(c.jsxs)("div",{className:"about__container",children:[Object(c.jsx)("h1",{children:"\ud504\ub85c\uc81d\ud2b8 \uc124\uba85"}),Object(c.jsxs)("div",{className:"about__content",children:["\uc774 \ud504\ub85c\uc81d\ud2b8\ub294 \uc601\ud654 \uc0ac\uc774\ud2b8\uc785\ub2c8\ub2e4. ",Object(c.jsx)("br",{}),"API\ub294 YTS\ub77c\ub294 \uc0ac\uc774\ud2b8\uc5d0\uc11c \uc694\uccad\ud588\uace0 ",Object(c.jsx)("br",{}),"\uba87 \uac1c\uc758 \uc601\ud654\uc5d0 \ub300\ud55c \uc815\ubcf4\ub97c \ud655\uc778\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4. ",Object(c.jsx)("br",{}),"\uc544\ub798\ub294 \uc800\uc758 \ube14\ub85c\uadf8\uc640 \uae43\ud5c8\ube0c \uc8fc\uc18c\uc785\ub2c8\ub2e4.",Object(c.jsxs)("div",{className:"add",children:[Object(c.jsx)("a",{href:"https://azurealstn.tistory.com",target:"blank",children:"\ube14\ub85c\uadf8"}),Object(c.jsx)("a",{href:"https://azurealstn.github.io/minflix",target:"blank",children:"\uae43\ud5c8\ube0c"})]})]})]})};s(76);var L=function(){return Object(c.jsxs)("div",{className:"nav",children:[Object(c.jsx)(w.b,{to:"/",children:"Home"}),Object(c.jsxs)(w.b,{to:"/about",children:["About",Object(c.jsx)("br",{}),"Project"]})]})};var M=function(){return Object(c.jsxs)(w.a,{children:[Object(c.jsx)(L,{}),Object(c.jsx)(R.a,{path:"/",exact:!0,component:q}),Object(c.jsx)(R.a,{path:"/about",component:A})]})};r.a.render(Object(c.jsx)(M,{}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.253c4f38.chunk.js.map