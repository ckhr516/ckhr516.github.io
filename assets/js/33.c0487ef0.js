(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{263:function(t,a,e){},289:function(t,a,e){"use strict";e(263)},300:function(t,a,e){"use strict";e.r(a);e(14);var s={props:{tag:{type:String,default:""},tagsData:{type:Array,default:[]},length:{type:[String,Number],default:"all"}},data:()=>({tagBgColor:["#11a8cd","#F8B26A","#67CC86","#E15B64","#F47E60","#849B87"],tagStyleList:[]}),created(){for(let t=0,a=this.tags.length;t<a;t++)this.tagStyleList.push(this.getTagStyle())},computed:{tags(){return"all"===this.length?this.tagsData:this.tagsData.slice(0,this.length)}},methods:{getTagStyle(){const t=this.tagBgColor,a=t[Math.floor(Math.random()*t.length)];return`background: ${a};--randomColor:${a};`}}},l=(e(289),e(2)),n=Object(l.a)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"tags-wrapper card-box"},[e("router-link",{staticClass:"title iconfont icon-biaoqian1",attrs:{to:"/tags/",title:"全部标签"}},[t._v(t._s("all"===t.length?"全部标签":"热门标签"))]),t._v(" "),e("div",{staticClass:"tags"},[t._l(t.tags,(function(a,s){return[e("router-link",{key:s,class:{active:a.key===t.tag},style:t.tagStyleList[s],attrs:{to:"/tags/?tag="+encodeURIComponent(a.key)}},[t._v(t._s(a.key))]),t._v(" "),e("span",{key:s+t.tags.length})]})),t._v(" "),"all"!==t.length&&t.tagsData.length>t.length?e("router-link",{attrs:{to:"/tags/"}},[t._v("更多...")]):t._e()],2)],1)}),[],!1,null,null,null);a.default=n.exports}}]);