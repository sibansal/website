(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/dp.321ed619.jpg"},function(e){e.exports={skills:[{icon:"fab fa-java",sq:"70",skill:"Java"},{icon:"fab fa-python",sq:"70",skill:"Python"},{icon:"fab fa-js",sq:"65",skill:"Javascript"},{icon:"fab fa-react",sq:"20",skill:"React JS"},{icon:"fab fa-php",sq:"70",skill:"PHP"},{icon:"fas fa-database",sq:"65",skill:"RDBMS"},{icon:"fab fa-html5",sq:"70",skill:"Html"},{icon:"fab fa-css3",sq:"60",skill:"CSS"}]}},function(e,t,a){e.exports=a(37)},,,,,,,,,function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(16),i=a.n(c),r=a(4),s=a(5),o=a(7),m=a(6),p=a(8),u=(a(28),a(11)),d=a(14),h=a(9),b=a(17),f=a.n(b);u.b.add(d.a);var E=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"hero wrapper"},l.a.createElement("img",{alt:"dp",src:f.a,className:"dp"}),l.a.createElement("h1",{className:"title"},"I'm Simran Bansal"),l.a.createElement("h2",{className:"description"},"A Software Engineer"),l.a.createElement("div",null,l.a.createElement("div",{className:"social"},l.a.createElement("span",{title:"Github"},l.a.createElement("a",{href:"https://www.github.com/sibansal",className:"social-link"},l.a.createElement(h.a,{icon:"fab fa-github"}))),l.a.createElement("span",{title:"Linkedin"},l.a.createElement("a",{href:"https://www.linkedin.com/in/sibansal/",className:"social-link"},l.a.createElement(h.a,{icon:"fab fa-linkedin"}))),l.a.createElement("span",{title:"Telegram"},l.a.createElement("a",{href:"https://t.me/sibansal",className:"social-link"},l.a.createElement(h.a,{icon:"fab fa-telegram"}))),l.a.createElement("span",{title:"Twitter"},l.a.createElement("a",{href:"https://www.twitter.com/sibansal",className:"social-link"},l.a.createElement(h.a,{icon:"fab fa-twitter"}))))))}}]),t}(n.Component),j=a(13),v=(a(31),a(10)),k=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("nav",{className:"navbar navbar-main"},l.a.createElement("ul",{className:"nav"},l.a.createElement("li",{title:"Home"},l.a.createElement(j.b,{to:"/",className:"link"},l.a.createElement(h.a,{icon:v.e}))),l.a.createElement("li",{title:"Projects"},l.a.createElement(j.b,{to:"/projects",className:"link"},l.a.createElement(h.a,{icon:v.a}))),l.a.createElement("li",{title:"Skills"},l.a.createElement(j.b,{to:"/skills",className:"link"},l.a.createElement(h.a,{icon:v.c}))),l.a.createElement("li",{title:"Contact"},l.a.createElement("a",{href:"mailto:queries@sibansal.dev",className:"link"},l.a.createElement(h.a,{icon:v.b})))))}}]),t}(n.Component);a(32);u.b.add(d.a),u.b.add(v.g);var y=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"placeholder",style:{display:"inline-block",color:this.props.color,"font-size":"3em",padding:"1em","background-color":this.props.bgcolor,"min-width":"3em",width:"3em",margin:"1vh"}},l.a.createElement("i",{className:this.props.icon}),l.a.createElement(h.a,{icon:this.props.icon}),l.a.createElement("div",{style:{width:"100%",border:"1px solid "+this.props.color,height:"1vh","font-size":".5em"}},l.a.createElement("div",{style:{width:this.props.sq+"%","background-color":this.props.color,height:"100%","font-size":".5em"}})),l.a.createElement("div",{style:{"font-size":"0.5em"}},this.props.sq,"%"),l.a.createElement("div",{style:{"font-size":"0.4em","margin-top":"1em"}},l.a.createElement("strong",null,this.props.skill)))}}]),t}(n.Component);y.defaultProps={icon:"python",sq:"10",color:"#e8e8e8",bgcolor:"#1d1d1d",skill:"python"};var O=y,g=a(18),w=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"wrapper skills"},l.a.createElement("div",{className:"content"},l.a.createElement("h2",null,"Skills"),g.skills.map(function(e){return l.a.createElement(O,{icon:e.icon,sq:e.sq,skill:e.skill})})))}}]),t}(n.Component),N=(a(33),function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"projectPlaceHolder",style:{color:this.props.color}},l.a.createElement("div",{className:"frontIcon"},l.a.createElement(h.a,{icon:this.props.icon})),l.a.createElement("div",null,this.props.title),l.a.createElement("div",null,this.props.projects.length),l.a.createElement("div",{className:"projects"},l.a.createElement("ul",null,this.props.projects.map(function(e){return l.a.createElement("li",null,e)}))))}}]),t}(n.Component));N.defaultProps={color:"!inherit",icon:v.f,title:"Academic",projects:["Project 1","Project 2","Project 3","Project 4"]};var q=N,C=(a(34),function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"wrapper projects"},l.a.createElement("div",{className:"content"},l.a.createElement("h2",null,"Projects"),l.a.createElement("div",{className:"container"},l.a.createElement(q,{color:"#116611",quanitity:"4",projects:["AI based temperature prediction simulation deployed on Linode.","Cloud based image hosting service deployed on Digital Ocean Droplet.","AES based image encrytion service deployed using jsp servlet on tomcat server.","Card matching memory game developed in java using swing components."]}),l.a.createElement(q,{color:"#111166",title:"Commercial",icon:v.a,quanitity:"3",projects:["Mock UP Generator for book store.","Components based cost calculation system for game store.","Payment gateway enhancement for a leading NGO."]}),l.a.createElement(q,{color:"#661111",title:"Volunteered",icon:v.d,quanitity:"4",projects:["CAPTCHA based validation mechanism development for Indian Academic Origins App.","Data annotation for redical posts analysis research.","Website developement for an educational institution."]}))))}}]),t}(n.Component)),P=(a(35),a(1)),S=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"header"},l.a.createElement(j.a,null,l.a.createElement(k,null),l.a.createElement(P.c,null,l.a.createElement(P.a,{index:!0,path:"/",element:l.a.createElement(E,null)}),l.a.createElement(P.a,{path:"/skills",element:l.a.createElement(w,null)}),l.a.createElement(P.a,{path:"/projects",element:l.a.createElement(C,null)}),l.a.createElement(P.a,{path:"*",element:l.a.createElement(E,null)}))))}}]),t}(n.Component);a(36);i.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(S,null)))}],[[19,1,2]]]);
//# sourceMappingURL=main.6d6e72f8.chunk.js.map