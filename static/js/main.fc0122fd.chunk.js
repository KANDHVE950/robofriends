(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,a,n){},15:function(e,a,n){},16:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),i=n(2),o=n.n(i);n(13),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(14);var l=n(3),s=n(4),c=n(6),m=n(5),u=n(7),h=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],d=function(e){var a=e.id,n=e.name,t=e.username,i=e.email;return r.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-S"},r.a.createElement("img",{src:"https://robohash.org/".concat(a,"?100*100")}),r.a.createElement("div",null,r.a.createElement("p",null,n),r.a.createElement("p",null,t),r.a.createElement("p",null,i)))},b=function(e){var a=e.robots;return r.a.createElement("div",null," ",a.map((function(e,n){return r.a.createElement(d,{key:n,id:a[n].id,name:a[n].name,email:a[n].email,username:a[n].username})})))},f=function(e){var a=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa1 bg-lightest-blue",type:"search",placeholder:"search robots",onChange:a}))},p=(n(15),function(e){return r.a.createElement("div",{style:{overflow:"scroll",border:"5px solid black",height:"500px"}},e.children)}),g=function(e){function a(){var e;return Object(l.a)(this,a),(e=Object(c.a)(this,Object(m.a)(a).call(this))).onSearchChange=function(a){e.setState({searchfield:a.target.value})},e.state={robots:[],searchfield:""},e}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(a){e.setState({robots:h})}))}},{key:"render",value:function(){var e=this,a=this.state.robots.filter((function(a){return a.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return 0===this.state.robots.length?r.a.createElement("h1",{className:"tc"},"LOADING"):r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"RoboFriends"),r.a.createElement(f,{searchChange:this.onSearchChange}),r.a.createElement(p,null,r.a.createElement(b,{robots:a})))}}]),a}(t.Component);o.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,a,n){e.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.fc0122fd.chunk.js.map