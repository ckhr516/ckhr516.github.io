(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{277:function(t,e){t.exports=function(t){return null==t}},293:function(t,e,i){},316:function(t,e,i){"use strict";i(293)},338:function(t,e,i){"use strict";i.r(e);var a=i(277),s=i.n(a),n=i(12),r={name:"PageEdit",computed:{tags(){return this.$frontmatter.tags},lastUpdated(){return this.$page.lastUpdated},lastUpdatedText(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},editLink(){const t=s()(this.$page.frontmatter.editLink)?this.$site.themeConfig.editLinks:this.$page.frontmatter.editLink,{repo:e,docsDir:i="",docsBranch:a="master",docsRepo:n=e}=this.$site.themeConfig;return t&&n&&this.$page.relativePath?this.createEditLink(e,n,i,a,this.$page.relativePath):null},editLinkText(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink(t,e,i,a,s){if(/bitbucket.org/.test(e)){return e.replace(n.b,"")+"/src"+`/${a}/`+(i?i.replace(n.b,"")+"/":"")+s+`?mode=edit&spa=0&at=${a}&fileviewer=file-view-default`}if(/gitlab.com/.test(e)){return e.replace(n.b,"")+"/-/edit"+`/${a}/`+(i?i.replace(n.b,"")+"/":"")+s}const r=/gitee.com/;if(r.test(e)){return e.replace(r,"gitee.com/-/ide/project")+"/edit"+`/${a}/-/`+(i?i.replace(n.b,"")+"/":"")+s}return(n.j.test(e)?e:"https://github.com/"+e).replace(n.b,"")+"/edit"+`/${a}/`+(i?i.replace(n.b,"")+"/":"")+s}}},d=(i(316),i(2)),o=Object(d.a)(r,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page-edit"},[t.editLink?i("div",{staticClass:"edit-link"},[i("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),i("OutboundLink")],1):t._e(),t._v(" "),!1!==t.$themeConfig.tag&&t.tags&&t.tags[0]?i("div",{staticClass:"tags"},t._l(t.tags,(function(e,a){return i("router-link",{key:a,attrs:{to:"/tags/?tag="+encodeURIComponent(e),title:"标签"}},[t._v("#"+t._s(e))])})),1):t._e(),t._v(" "),t.lastUpdated?i("div",{staticClass:"last-updated"},[i("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+":")]),t._v(" "),i("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()])}),[],!1,null,null,null);e.default=o.exports}}]);