(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{369:function(t,a,e){"use strict";e.r(a);e(68),e(46),e(67);var i=e(334),o=e(328),s={name:"BlogPostLayout",extends:i.default,components:{Footer:o.a},methods:{date:function(t){return new Date(t)},thumbnail:function(t){return t.replace(/^\/blog/,"/blog/thumbnail")}}},n=e(45),r=Object(n.a)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"theme-container",class:t.pageClasses,attrs:{id:"blog"},on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?e("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),e("div",{staticClass:"sidebar-mask",on:{click:function(a){return t.toggleSidebar(!1)}}}),t._v(" "),e("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("sidebar-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("sidebar-bottom")]},proxy:!0}],null,!0)}),t._v(" "),e("i-container",{attrs:{id:"blog-post"}},[e("i-row",[e("i-column",[e("h1",{staticClass:"blog-post-title"},[t._v("immudb")]),t._v(" "),e("p",{staticClass:"blog-post-excerpt"},[t._v(t._s(t.$description))])])],1)],1),t._v(" "),e("i-container",{staticClass:"_margin-top-4",attrs:{id:"blog-posts"}},[e("i-row",{attrs:{id:"default-layout"}},[t._l(t.$pagination.pages,(function(a){return[e("i-column",{attrs:{lg:"4",md:"6"}},[e("i-card",{staticClass:"blog-entry"},[e("router-link",{staticClass:"blog-entry-image",attrs:{slot:"image",to:a.path},slot:"image"},[e("img",{staticClass:"foreground image -fluid",attrs:{src:t.thumbnail(t.$withBase(a.frontmatter.image)),alt:a.frontmatter.title}}),t._v(" "),e("img",{staticClass:"background image -fluid",attrs:{src:t.thumbnail(t.$withBase("/blog/background.jpg")),alt:a.frontmatter.title}})]),t._v(" "),e("router-link",{staticClass:"blog-entry-title",attrs:{to:a.path}},[e("h2",[t._v(t._s(a.frontmatter.title))])]),t._v(" "),e("p",{staticClass:"blog-entry-meta"},[t._v(t._s(t._f("dateFormat")(t.date(a.frontmatter.date),"MMMM DD, YYYY")))]),t._v(" "),e("p",{staticClass:"blog-entry-description"},[t._v(t._s(a.frontmatter.excerpt))])],1)],1)]}))],2),t._v(" "),e("i-row",[e("i-column",{staticClass:"_text-center"},[t.$pagination.hasPrev||t.$pagination.hasNext?e("ul",{staticClass:"list -inline",attrs:{id:"pagination"}},[t.$pagination.hasPrev?e("li",[e("router-link",{attrs:{to:t.$pagination.prevLink}},[t._v("Prev")])],1):t._e(),t._v(" "),t.$pagination.hasNext?e("li",[e("router-link",{attrs:{to:t.$pagination.nextLink}},[t._v("Next")])],1):t._e()]):t._e()])],1)],1),t._v(" "),e("Footer")],1)}),[],!1,null,null,null);a.default=r.exports}}]);