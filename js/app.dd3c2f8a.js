(function(t){function n(n){for(var a,i,s=n[0],c=n[1],u=n[2],f=0,p=[];f<s.length;f++)i=s[f],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(n);while(p.length)p.shift()();return o.push.apply(o,u||[]),e()}function e(){for(var t,n=0;n<o.length;n++){for(var e=o[n],a=!0,s=1;s<e.length;s++){var c=e[s];0!==r[c]&&(a=!1)}a&&(o.splice(n--,1),t=i(i.s=e[0]))}return t}var a={},r={app:0},o=[];function i(n){if(a[n])return a[n].exports;var e=a[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=a,i.d=function(t,n,e){i.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,n){if(1&n&&(t=i(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var a in t)i.d(e,a,function(n){return t[n]}.bind(null,a));return e},i.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(n,"a",n),n},i.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=n,s=s.slice();for(var u=0;u<s.length;u++)n(s[u]);var l=c;o.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"034f":function(t,n,e){"use strict";var a=e("8a23"),r=e.n(a);r.a},"46db":function(t,n,e){t.exports=e.p+"img/wave.bcff685a.svg"},"4f86":function(t,n,e){},"56d7":function(t,n,e){"use strict";e.r(n);e("e260"),e("e6cf"),e("cca6"),e("a79d");var a=e("2b0e"),r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-app",[e("v-content",{staticClass:"base-container"},[e("Home")],1)],1)},o=[],i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-container",{staticClass:"pa-0",attrs:{fluid:"","fill-height":""}},[e("div",{staticClass:"background-image"}),e("v-row",{staticClass:"z-1"},[e("v-col",{staticClass:"text-center"},[e("LinkCard")],1)],1)],1)},s=[],c=e("46db"),u=e.n(c),l=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"bubble d-flex"},[e("v-container",{staticClass:"justify-center",attrs:{fluid:""}},[e("v-row",{staticClass:"mt-5",attrs:{dense:""}},[e("v-col",[e("h1",{staticClass:"brand-title"},[t._v("Supa Squidds")])])],1),e("v-row",{attrs:{dense:""}},t._l(t.links,(function(n){return e("v-col",{key:n.link},[e("v-btn",{attrs:{text:"",icon:""}},[e("a",{attrs:{href:n.link}},[e("v-icon",{attrs:{color:"white",large:""}},[t._v(t._s(n.icon))])],1)])],1)})),1)],1)],1)},f=[],p={data:function(){return{links:[{icon:"mdi-spotify",link:"https://open.spotify.com/artist/226oZaBWbPTWNFWW3SdOwB?si=eaHQE0fAS-umwIbF9TzdZw"},{icon:"mdi-apple",link:"https://music.apple.com/us/artist/supa-squidds/1344140343"},{icon:"mdi-soundcloud",link:"https://soundcloud.com/supasquidds"},{icon:"mdi-instagram",link:"https://www.instagram.com/supa_squidds/"},{icon:"mdi-youtube",link:"https://www.youtube.com/channel/UCR9w3xFUSjoym2O0Qnqwiyg"}]}}},d=p,v=(e("d52f"),e("2877")),b=e("6544"),m=e.n(b),h=e("8336"),w=e("62ad"),y=e("a523"),g=e("132d"),k=e("0fd9"),C=Object(v["a"])(d,l,f,!1,null,"b1213da6",null),_=C.exports;m()(C,{VBtn:h["a"],VCol:w["a"],VContainer:y["a"],VIcon:g["a"],VRow:k["a"]});var O={components:{LinkCard:_},data:function(){return{wave:u.a}}},j=O,x=(e("ba0c"),Object(v["a"])(j,i,s,!1,null,"fcd68cc4",null)),S=x.exports;m()(x,{VCol:w["a"],VContainer:y["a"],VRow:k["a"]});var V={name:"App",components:{Home:S},data:function(){return{}}},P=V,F=(e("034f"),e("7496")),q=e("a75b"),T=Object(v["a"])(P,r,o,!1,null,null,null),E=T.exports;m()(T,{VApp:F["a"],VContent:q["a"]});var M=e("f309");a["a"].use(M["a"]);var W=new M["a"]({theme:{themes:{dark:{primary:"#FFF"}}}});a["a"].config.productionTip=!1,new a["a"]({vuetify:W,render:function(t){return t(E)}}).$mount("#app")},"8a23":function(t,n,e){},ba0c:function(t,n,e){"use strict";var a=e("d326"),r=e.n(a);r.a},d326:function(t,n,e){},d52f:function(t,n,e){"use strict";var a=e("4f86"),r=e.n(a);r.a}});
//# sourceMappingURL=app.dd3c2f8a.js.map