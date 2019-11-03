(this["webpackJsonpdecoding.software"]=this["webpackJsonpdecoding.software"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(8),s=a.n(i),o=(a(14),a(1)),c=a(2),l=a(4),u=a(3),m=a(5),p=(a(6),function(){return Math.floor(50*Math.random()+15)}),d=[{id:1,title:"AWS Fargate",description:"AWS Fargate is a compute engine for Amazon ECS that allows you to run containers without having to manage servers or clusters.",url:"#",votes:p(),submitterAvatarUrl:"images/avatars/daniel.jpg",imageUrl:"images/products/fargate.png"},{id:2,title:"AWS Robomaker",description:"Robots are being used more widely in society for purposes that are increasing in sophistication such as complex assembly, environmental monitoring, search and rescue, cleaning, companionship, assisted surgery, picking and packing, and delivery.",url:"#",votes:p(),submitterAvatarUrl:"./images/avatars/kristy.png",imageUrl:"./images/products/robomaker.png"},{id:3,title:"Amazon EC2 High Memory Instances",description:"Today we are launching instances with 18 TiB and 24 TiB of memory.",url:"#",votes:p(),submitterAvatarUrl:"images/avatars/veronika.jpg",imageUrl:"images/products/ec2.png"},{id:4,title:"Amazon Sagemaker",description:"You can use Amazon SageMaker to easily train deep learning models on Amazon EC2 P3 instances, the fastest GPU instances in the cloud.",url:"#",votes:p(),submitterAvatarUrl:"images/avatars/molly.png",imageUrl:"images/products/sagemaker.jpeg"}],b=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("span",null,r.a.createElement("button",{className:"ui basic button icon"}," ",r.a.createElement("i",{className:"plus icon"})," "))}}]),t}(r.a.Component),h=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleUpVote=function(){a.props.onVote(a.props.post.id)},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.post,t=e.imageUrl,a=e.url,n=e.title,i=e.description,s=e.submitterAvatarUrl,o=e.votes,c=e.id;return r.a.createElement("div",{className:"item"},r.a.createElement("div",{className:"image"},r.a.createElement("img",{alt:"Main blog post",src:t})),r.a.createElement("div",{className:"middle aligned content"},r.a.createElement("div",{className:"header"},r.a.createElement("a",{href:a},n)),r.a.createElement("div",{className:"description"},r.a.createElement("p",null,i)),r.a.createElement("div",{className:"extra"},r.a.createElement("span",null,"Submitted by: "),r.a.createElement("img",{alt:"posters avatar",src:s,className:"ui avatar image"}),r.a.createElement("a",{onClick:this.handleUpVote},r.a.createElement("i",{className:"large caret up icon"})),o),r.a.createElement("div",null,r.a.createElement(b,{key:"editButton-$id",post:c})),r.a.createElement("hr",null),r.a.createElement("br",null)))}}]),t}(r.a.Component),v=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.post,t=e.title,a=e.description,n=this.props.title?"Update":"Create";return r.a.createElement("div",{className:"ui centered card"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"ui form"}," ",r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Title"),r.a.createElement("input",{type:"text",defaultValue:t})," "),r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Description"),r.a.createElement("input",{type:"text",defaultValue:a})),r.a.createElement("div",{className:"ui two bottom attached buttons"},r.a.createElement("button",{className:"ui basic blue button"}," ",n," "),r.a.createElement("button",{className:"ui basic red button"},"Cancel ")))))}}]),t}(r.a.Component),g=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(v,{key:"editPost-$this.props.id",post:this.props.post})}}]),t}(r.a.Component),E=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={isEditable:a.props.isEditable},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return this.state.isEditable?r.a.createElement(g,{key:this.props.post.id,post:this.props.post}):r.a.createElement(h,{key:this.props.post.id,post:this.props.post})}}]),t}(r.a.Component),f=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).handlePostUpVote=function(e){var t=null,n=a.state.blogPosts.map((function(a){return a.id===e?((t=Object.create(a)).votes+=1,t):a}));a.setState({blogPosts:n})},a.state={blogPosts:[]},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.setState({blogPosts:d})}},{key:"render",value:function(){var e=this,t=this.state.blogPosts.sort((function(e,t){return e.votes-t.votes})).map((function(t){return r.a.createElement(E,{key:t.id,post:t,onVote:e.handlePostUpVote,isEditable:!1})}));return r.a.createElement("div",null,t)}}]),t}(r.a.Component),j=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,this.props.isAdmin&&r.a.createElement(v,null),r.a.createElement(f,null))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},6:function(e,t,a){},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.64591884.chunk.js.map