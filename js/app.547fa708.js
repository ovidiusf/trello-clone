(function(e){function t(t){for(var r,s,u=t[0],i=t[1],c=t[2],f=0,d=[];f<u.length;f++)s=u[f],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&d.push(o[s][0]),o[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(t);while(d.length)d.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var i=n[u];0!==o[i]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},a=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/trello-clone/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var l=i;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),o=n.n(r);o.a},"0927":function(e,t,n){},"158c":function(e,t,n){"use strict";var r=n("5410"),o=n.n(r);o.a},"17ad":function(e,t,n){},5410:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=n("ecee"),a=n("c074"),s=n("ad3d");o["c"].add(a["a"]),r["a"].component("AppIcon",s["a"]);var u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],c=(n("034f"),n("2877")),l={},f=Object(c["a"])(l,u,i,!1,null,null,null),d=f.exports,p=n("8c4f"),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"board"},[n("div",{staticClass:"flex flex-row items-start"},[e._l(e.board.columns,(function(t,r){return n("BoardColumn",{key:r,attrs:{board:e.board,column:t,columnIndex:r}})})),n("div",{staticClass:"column flex"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.newColumnName,expression:"newColumnName"}],staticClass:"p-2 mr-2 flex-grow",attrs:{type:"text",placeholder:"New Column Name"},domProps:{value:e.newColumnName},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.createColumn(t)},input:function(t){t.target.composing||(e.newColumnName=t.target.value)}}})])],2),e.isTaskOpen?n("div",{staticClass:"task-bg",on:{click:function(t){return t.target!==t.currentTarget?null:e.close(t)}}},[n("router-view")],1):e._e()])},b=[],v=(n("8e6e"),n("ac6a"),n("456d"),n("7f7f"),n("bd86")),y=n("2f62"),k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("AppDrop",{on:{drop:e.moveTaskOrColumn}},[n("AppDrag",{staticClass:"column",attrs:{"transfer-data":{type:"column",fromColumnIndex:e.columnIndex}}},[n("div",{staticClass:"flex items-center mb-2 font-bold"},[e._v("\n      "+e._s(e.column.name)+"\n    ")]),n("div",{staticClass:"list-reset"},[e._l(e.column.tasks,(function(t,r){return n("ColumnTask",{key:r,attrs:{board:e.board,column:e.column,columnIndex:e.columnIndex,task:t,taskIndex:r}})})),n("input",{staticClass:"block p-2 w-full bg-transparent",attrs:{placeholder:"+ Enter new task",type:"text"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.createTask(t,e.column.tasks)}}})],2)])],1)},g=[],h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("AppDrop",{on:{drop:e.moveTaskOrColumn}},[n("AppDrag",{staticClass:"task",attrs:{"transfer-data":{type:"task",fromColumnIndex:e.columnIndex,fromTaskIndex:e.taskIndex}},nativeOn:{click:function(t){return e.goToTask(e.task)}}},[n("span",{staticClass:"w-full flex-no-shrink font-bold"},[e._v(e._s(e.task.name))]),e.task.description?n("p",{staticClass:"w-full flex-no-shrink mt-1 text-sm"},[e._v("\n        "+e._s(e.task.description)+"\n      ")]):e._e()])],1)],1)},O=[],x=(n("c5f6"),{props:{board:{type:Object,required:!0},column:{type:Object,required:!0},columnIndex:{type:Number,required:!0}},methods:{moveTask:function(e){var t=e.fromColumnIndex,n=e.fromTaskIndex,r=this.board.columns[t].tasks;this.$store.commit("MOVE_TASK",{fromTasks:r,fromTaskIndex:n,toTasks:this.column.tasks,toTaskIndex:this.taskIndex})},moveColumn:function(e){var t=e.fromColumnIndex;this.$store.commit("MOVE_COLUMN",{fromColumnIndex:t,toColumnIndex:this.columnIndex})},moveTaskOrColumn:function(e){"task"===e.type?this.moveTask(e):this.moveColumn(e)}}}),T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{draggable:""},on:{dragenter:function(e){e.preventDefault()},dragover:function(e){e.preventDefault()},dragstart:function(t){return t.target!==t.currentTarget?null:e.onDrag(t)}}},[e._t("default")],2)},C=[],w={props:{transferData:{type:Object,required:!0}},methods:{onDrag:function(e){e.dataTransfer.effectAllowed="move",e.dataTransfer.dropEffect="move",e.dataTransfer.setData("payload",JSON.stringify(this.transferData))}}},j=w,_=Object(c["a"])(j,T,C,!1,null,null,null),D=_.exports,P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{on:{dragenter:function(e){e.preventDefault()},dragover:function(e){e.preventDefault()},drop:function(t){return t.stopPropagation(),e.onDrop(t)}}},[e._t("default")],2)},A=[],E={methods:{onDrop:function(e){var t=JSON.parse(e.dataTransfer.getData("payload"));this.$emit("drop",t)}}},I=E,S=Object(c["a"])(I,P,A,!1,null,null,null),$=S.exports,N={components:{AppDrag:D,AppDrop:$},mixins:[x],props:{task:{type:Object,required:!0},taskIndex:{type:Number,required:!0}},methods:{goToTask:function(e){this.$router.push({name:"task",params:{id:e.id}})}}},M=N,q=(n("5804"),Object(c["a"])(M,h,O,!1,null,null,null)),U=q.exports,K={components:{AppDrag:D,AppDrop:$,ColumnTask:U},mixins:[x],methods:{createTask:function(e,t){this.$store.commit("CREATE_TASK",{tasks:t,name:e.target.value}),e.target.value=""}}},J=K,V=(n("f9e1"),Object(c["a"])(J,k,g,!1,null,null,null)),B=V.exports;function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(Object(n),!0).forEach((function(t){Object(v["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var F={components:{BoardColumn:B},data:function(){return{newColumnName:""}},computed:R(R({},Object(y["c"])(["board"])),{},{isTaskOpen:function(){return"task"===this.$route.name}}),methods:{close:function(){this.$router.push({name:"board"})},createColumn:function(){this.$store.commit("CREATE_COLUMN",{name:this.newColumnName}),this.newColumnName=""},moveTask:function(e,t,n){var r=e.dataTransfer.getData("from-column-index"),o=this.board.columns[r].tasks,a=e.dataTransfer.getData("from-task-index");this.$store.commit("MOVE_TASK",{fromTasks:o,toTasks:t,fromTaskIndex:a,toTaskIndex:n})},moveColumn:function(e,t){var n=e.dataTransfer.getData("from-column-index");this.$store.commit("MOVE_COLUMN",{fromColumnIndex:n,toColumnIndex:t})}}},W=F,z=(n("158c"),Object(c["a"])(W,m,b,!1,null,null,null)),G=z.exports,H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"task-view"},[n("div",{staticClass:"flex flex-col flex-grow items-start justify-between px-4"},[n("input",{staticClass:"p-2 w-full mr-2 flex-grow text-xl font-bold",attrs:{type:"text"},domProps:{value:e.task.name},on:{change:function(t){return e.updateTaskProperty(t,"name")},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.updateTaskProperty(t,"name")}}}),n("textarea",{staticClass:"relative w-full bg-transparent px-2 border mt-2 h-64 border-none leading-normal",domProps:{value:e.task.description},on:{change:function(t){return e.updateTaskProperty(t,"description")},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.updateTaskProperty(t,"description")}}})])])},Q=[];function X(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?X(Object(n),!0).forEach((function(t){Object(v["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):X(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Z={computed:Y(Y({},Object(y["b"])(["getTask"])),{},{task:function(){return this.getTask(this.$route.params.id)}}),methods:{updateTaskProperty:function(e,t){this.$store.commit("UPDATE_TASK",{task:this.task,key:t,value:e.target.value})}}},ee=Z,te=(n("b39f"),Object(c["a"])(ee,H,Q,!1,null,null,null)),ne=te.exports;r["a"].use(p["a"]);var re=new p["a"]({mode:"history",base:"/trello-clone/",routes:[{path:"/",name:"board",component:G,children:[{path:"task/:id",name:"task",component:ne}]}]});n("ac4d"),n("8a81"),n("5df3"),n("1c4c"),n("6b54");function oe(){return Math.random().toString(16).slice(2)}function ae(e){e.subscribe((function(e,t){return localStorage.setItem("board",JSON.stringify(t.board))}))}var se={name:"workshop",columns:[{name:"todo",tasks:[{description:"The new website requires deploying. Pick a suitable building tool. ",name:"Deploy new website",id:oe(),userAssigned:null},{description:"Find a good technology for the frontend",name:"Frontend Stack",id:oe(),userAssigned:null},{description:"What database should be used?",name:"Backend - DB",id:oe(),userAssigned:null}]},{name:"in-progress",tasks:[{description:"Prototype a nice design for the website.",name:"Developing figma design",id:oe(),userAssigned:null}]},{name:"done",tasks:[{description:"First meeting with the client for requirements.",name:"Requirements",id:oe(),userAssigned:null}]}]};function ue(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=ie(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,u=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return s=e.done,e},e:function(e){u=!0,a=e},f:function(){try{s||null==n.return||n.return()}finally{if(u)throw a}}}}function ie(e,t){if(e){if("string"===typeof e)return ce(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ce(e,t):void 0}}function ce(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}r["a"].use(y["a"]);var le=JSON.parse(localStorage.getItem("board"))||se,fe=new y["a"].Store({plugins:[ae],state:{board:le},getters:{getTask:function(e){return function(t){var n,r=ue(e.board.columns);try{for(r.s();!(n=r.n()).done;){var o,a=n.value,s=ue(a.tasks);try{for(s.s();!(o=s.n()).done;){var u=o.value;if(u.id===t)return u}}catch(i){s.e(i)}finally{s.f()}}}catch(i){r.e(i)}finally{r.f()}}}},mutations:{CREATE_TASK:function(e,t){var n=t.tasks,r=t.name;n.push({name:r,id:oe(),description:""})},CREATE_COLUMN:function(e,t){var n=t.name;e.board.columns.push({name:n,tasks:[]})},UPDATE_TASK:function(e,t){var n=t.task,r=t.key,o=t.value;n[r]=o},MOVE_TASK:function(e,t){var n=t.fromTasks,r=t.toTasks,o=t.fromTaskIndex,a=t.toTaskIndex,s=n.splice(o,1)[0];r.splice(a,0,s)},MOVE_COLUMN:function(e,t){var n=t.fromColumnIndex,r=t.toColumnIndex,o=e.board.columns,a=o.splice(n,1)[0];o.splice(r,0,a)}}}),de=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"button",class:e.typeClasses,attrs:{type:"button"}},[e._t("default")],2)},pe=[],me={props:{type:{type:String,default:""}},computed:{typeClasses:function(){switch(this.type){case"danger":return"bg-red";default:return"bg-teal"}}}},be=me,ve=(n("e43c"),Object(c["a"])(be,de,pe,!1,null,"77159d1d",null)),ye=ve.exports;r["a"].component("AppButton",ye),r["a"].config.productionTip=!1,new r["a"]({router:re,store:fe,render:function(e){return e(d)}}).$mount("#app")},5804:function(e,t,n){"use strict";var r=n("bc54"),o=n.n(r);o.a},"64a9":function(e,t,n){},aedd:function(e,t,n){},b39f:function(e,t,n){"use strict";var r=n("aedd"),o=n.n(r);o.a},bc54:function(e,t,n){},e43c:function(e,t,n){"use strict";var r=n("0927"),o=n.n(r);o.a},f9e1:function(e,t,n){"use strict";var r=n("17ad"),o=n.n(r);o.a}});
//# sourceMappingURL=app.547fa708.js.map