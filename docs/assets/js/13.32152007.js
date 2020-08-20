(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{415:function(t,a,s){"use strict";s.r(a);var e=s(45),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("section",{attrs:{id:"features"}},[s("i-container",[s("i-row",[s("i-column",{attrs:{lg:"4"}},[s("feature",{attrs:{title:"Immutable",image:"/features/immutable2.svg"}},[s("p",[t._v("Any kind of key-value. Clients can choose how to structure data.")]),t._v(" "),s("p",[s("strong",[t._v("No data mutation APIs")]),t._v(" are provided.")]),t._v(" "),s("p",[t._v("Data is never overwritten, so multiple versions of the same key co-exist and are verifiable.")])])],1),t._v(" "),s("i-column",{attrs:{lg:"4"}},[s("feature",{attrs:{title:"Auditable",image:"/features/auditable3.svg"}},[s("p",[t._v("Tamper-evident history system.")]),t._v(" "),s("p",[t._v("Clients and auditors want "),s("strong",[t._v("cryptographic proof")]),t._v("  of data inclusion and historical consistency in real time.")]),t._v(" "),s("p",[t._v("If tampered, clients and auditors will notice that and take actions.")])])],1),t._v(" "),s("i-column",{attrs:{lg:"4"}},[s("feature",{attrs:{title:"Secure",image:"/features/secure2.svg"}},[s("p",[t._v("Data ownership is verifiable by clients and auditors.")]),t._v(" "),s("p",[t._v("Sign your data using "),s("strong",[t._v("Public-Key Cryptography")]),t._v(".")]),t._v(" "),s("p",[t._v("Keys additions and revocations is immutably stored into the database")])])],1)],1)],1)],1),t._v(" "),s("section",{staticClass:"section",attrs:{id:"easy-setup-section"}},[s("i-container",[s("i-row",[s("i-column",[s("h2",[t._v("Easy setup")]),t._v(" "),s("p",[t._v("\n    Build Docker images based on the Dockerfiles in the GitHub repository\n    for the most common architectures or use the prebuild ones on Dockerhub for Linux.\n")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("docker run -it -d -p "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3322")]),t._v(":3322 -p "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9497")]),t._v(":9497 --name immudb codenotary/immudb:latest\n")])])])])],1)],1)],1),t._v(" "),s("section",{staticClass:"section _background-gray-10",attrs:{id:"performance"}},[s("i-container",[s("i-row",[s("i-column",[s("div",{staticClass:"section-center _padding-bottom-4"},[s("h2",{attrs:{id:"unmatched-performance"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#unmatched-performance"}},[t._v("#")]),t._v(" Unmatched performance")]),t._v(" "),s("p",[t._v("immudb has been designed with read and write performance in mind while being tamper-proof. The benchmarks we've done show great results.")])])])],1),t._v(" "),s("i-row",[s("i-column",{attrs:{md:"6"}},[s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("sequential "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("write")]),t._v("\n---\nConcurrency: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("128")]),t._v("\nIterations: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000000")]),t._v("\nElapsed t.: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.06")]),t._v(" sec\nThroughput: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("326626")]),t._v(" tx/sec\n")])])])]),t._v(" "),s("i-column",{staticClass:"_margin-top-sm-1 _margin-top-xs-1",attrs:{md:"6"}},[s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("batch "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("write")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("async commit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n---\nConcurrency: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v("\nIterations: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000000")]),t._v("\nElapsed t.: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.36")]),t._v(" sec\nThroughput: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2772181")]),t._v(" tx/sec\n")])])])])],1),t._v(" "),s("i-row",[s("i-column",{staticClass:"_text-center _padding-top-1 _padding-bottom-6"},[s("ul",{staticClass:"list -inline _text-muted _font-size-sm"},[s("li",[t._v("4 cores")]),t._v(" "),s("li",[t._v("·")]),t._v(" "),s("li",[t._v("16GB memory")]),t._v(" "),s("li",[t._v("·")]),t._v(" "),s("li",[t._v("single SSD drive")])])])],1),t._v(" "),s("i-row",[s("i-column",[s("div",{staticClass:"section-center lead",attrs:{id:"qldb-comparison"}},[s("font-awesome-icon",{staticClass:"_text-primary",attrs:{icon:"bolt"}}),t._v(" "),s("p",[t._v("immudb is often compared to Amazon QLDB. We compared the performance using a simple demo application to write data (without using any unfair optimization).")])],1)])],1),t._v(" "),s("i-row",[s("i-column",{attrs:{md:"6"}},[s("img",{staticClass:"image -responsive",attrs:{src:t.$withBase("/benchmark/throughput_read.png"),alt:"Immudb - Throughput read"}})]),t._v(" "),s("i-column",{attrs:{md:"6"}},[s("img",{staticClass:"image -responsive",attrs:{src:t.$withBase("/benchmark/throughput_write.png"),alt:"Immudb - Throughput write"}})])],1),t._v(" "),s("i-row",[s("i-column",{attrs:{md:"6"}},[s("img",{staticClass:"image -responsive",attrs:{src:t.$withBase("/benchmark/exectime.png"),alt:"Immudb - Written records per ms"}})]),t._v(" "),s("i-column",{attrs:{md:"6"}},[s("img",{staticClass:"image -responsive",attrs:{src:t.$withBase("/benchmark/query_bm.png"),alt:"Immudb - Queried records per ms"}})])],1)],1)],1),t._v(" "),s("section",{staticClass:"section",attrs:{id:"video-section"}},[s("i-container",[s("i-row",[s("i-column",[s("div",{staticClass:"section-center"},[s("h2",{attrs:{id:"why-immudb"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#why-immudb"}},[t._v("#")]),t._v(" Why immudb?")]),t._v(" "),s("p",[t._v("immudb is a ledger database that has been developed with performance, scalability and versatility in mind. The user feedback has shown that they love the very high throughput and being able to store hashes as well as data. They see it as a great alternative to using a blockchain or ledger service.")])])])],1),t._v(" "),s("i-row",[s("i-column",[s("div",{staticClass:"video-features"},[s("div",{staticClass:"video"},[s("div",{staticClass:"_embed _embed-16by9"},[s("iframe",{attrs:{width:"560",height:"315",frameborder:"0",src:"https://www.youtube.com/embed/rQ4iZAM14m0?controls=0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])]),t._v(" "),s("ul",[s("li",[s("font-awesome-icon",{attrs:{icon:"check-circle"}}),t._v("\n                Easy setup\n            ")],1),t._v(" "),s("li",[s("font-awesome-icon",{attrs:{icon:"check-circle"}}),t._v("\n                Fast and reliable immutable database\n            ")],1),t._v(" "),s("li",[s("font-awesome-icon",{attrs:{icon:"check-circle"}}),t._v("\n                Secure REST API gateway\n            ")],1),t._v(" "),s("li",[s("font-awesome-icon",{attrs:{icon:"check-circle"}}),t._v("\n                Powerful, easy to use admin\n            ")],1),t._v(" "),s("li",[s("font-awesome-icon",{attrs:{icon:"check-circle"}}),t._v("\n                Open source\n            ")],1)])])])],1)],1)],1),t._v(" "),s("section",{staticClass:"section",attrs:{id:"code-examples"}},[s("i-container",[s("i-row",{staticClass:"section _padding-top-0"},[s("i-column",{attrs:{lg:"5"}},[s("img",{attrs:{src:t.$withBase("/features/real-world.svg"),alt:"Immudb - Made for the real world"}}),t._v(" "),s("h2",{attrs:{id:"very-high-throughput-immutable-database-with-cryptographic-verification"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#very-high-throughput-immutable-database-with-cryptographic-verification"}},[t._v("#")]),t._v(" Very high throughput, immutable database with cryptographic verification")]),t._v(" "),s("p",[t._v("immudb is an indispensable asset when it comes to tamper-proof data:")]),t._v(" "),s("ul",[s("li",[t._v("Store every update to sensitive database fields (credit card or bank account data) of an existing application database")]),t._v(" "),s("li",[t._v("Store CI/CD recipes to build and deployment pipelines")]),t._v(" "),s("li",[t._v("Store public certificates")]),t._v(" "),s("li",[t._v("Store tamper-proof log streams (i. e. audit logs)")])])]),t._v(" "),s("i-column",{attrs:{lg:"7"}},[s("terminal",{attrs:{title:"immudb"}},[s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Store any key, value auditproof and tamperproof")]),t._v("\nkey2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("byte")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myClient"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("byte")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Visa 6679499384784022 11/23"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nverifiedIndex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" client"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("SafeSet")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("exit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nfmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"   SafeSet - add and verify entry:"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("printItem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" verifiedIndex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])],1)],1),t._v(" "),s("i-row",{staticClass:"section inverse _padding-top-0"},[s("i-column",{attrs:{lg:"7"}},[s("terminal",{attrs:{title:"immudb"}},[s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# install immudb service")]),t._v("\n./immuadmin "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v(" immudb "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# check current immudb service status")]),t._v("\n./immuadmin "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v(" immudb status\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# install immugw service")]),t._v("\n./immuadmin "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v(" immugw "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# check immugw service")]),t._v("\n./immuadmin "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v(" immugw status\n")])])])])],1),t._v(" "),s("i-column",{attrs:{lg:"5"}},[s("img",{attrs:{src:t.$withBase("/features/intuitive-setup4.svg"),alt:"immudb - intuitive setup"}}),t._v(" "),s("h2",{attrs:{id:"intuitive-setup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#intuitive-setup"}},[t._v("#")]),t._v(" Intuitive setup")]),t._v(" "),s("p",[t._v("immudb is built with simplicity in mind:")]),t._v(" "),s("ul",[s("li",[t._v("Use the prebuilt binaries or Docker container images for a fast start")]),t._v(" "),s("li",[t._v("Install, manage and run immudb and immugw as services (use 'immuadmin service')")]),t._v(" "),s("li",[t._v("Simple make command integration if you want to build the applications yourself")]),t._v(" "),s("li",[t._v("RESTful interfaces and easy to use clients")]),t._v(" "),s("li",[t._v("Combine with any existing application")])])])],1),t._v(" "),s("i-row",[s("i-column",{attrs:{lg:"5"}},[s("img",{attrs:{src:t.$withBase("/features/consistency-check2.svg"),alt:"Immudb - Made for the real world"}}),t._v(" "),s("h2",{attrs:{id:"consistency-check-built-in"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#consistency-check-built-in"}},[t._v("#")]),t._v(" Consistency check built-in")]),t._v(" "),s("p",[t._v("immudb architecture has built-in verification and audit functionality:")]),t._v(" "),s("ul",[s("li",[t._v("immudb server is continuously checking disk/memory consistency")]),t._v(" "),s("li",[t._v("immugw is continuously checking the data consistency and integrity")]),t._v(" "),s("li",[t._v("immuclient has built-in data consistency and integrity checks")]),t._v(" "),s("li",[t._v("API's provide data ownership proof, verification and integrity functions")])])]),t._v(" "),s("i-column",{attrs:{lg:"7"}},[s("terminal",{attrs:{title:"immudb"}},[s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// built-in verification for every entry")]),t._v("\nverifiedItem"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" client"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("SafeGet")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("exit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nfmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"   SafeGet - fetch and verify entry:"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("printItem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" verifiedItem"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])],1)],1)],1)],1),t._v(" "),s("hr"),t._v(" "),s("section",{staticClass:"section",attrs:{id:"comingsoon"}},[s("i-container",[s("i-row",[s("i-column",[s("div",{staticClass:"section-center _padding-bottom-4"},[s("img",{staticClass:"image -responsive _margin-bottom-4",attrs:{width:"400",src:t.$withBase("/rocket.jpg"),alt:"Coming Soon"}}),t._v(" "),s("h2",{attrs:{id:"coming-soon"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#coming-soon"}},[t._v("#")]),t._v(" Coming soon")]),t._v(" "),s("p",[t._v("We're working hard every day to improve immudb and everything it has to offer. Here are some of the features we're planning to release:")])])])],1),t._v(" "),s("i-row",[s("i-column",{staticClass:"_text-center lead  _font-weight-semibold"},[s("ul",{staticClass:"list -inline"},[s("li",[t._v("rsyslog support")]),t._v(" "),s("li",{staticClass:"_text-muted"},[t._v("·")]),t._v(" "),s("li",[t._v("Log4j integration")]),t._v(" "),s("li",{staticClass:"_text-muted"},[t._v("·")]),t._v(" "),s("li",[t._v("PostgreSQL listener")]),t._v(" "),s("li",{staticClass:"_text-muted"},[t._v("·")]),t._v(" "),s("li",[t._v("Managed ledger DBMS")])])])],1)],1)],1),t._v(" "),s("hr",{staticClass:"_margin-0"}),t._v(" "),s("section",{staticClass:"section",attrs:{id:"usedby"}},[s("i-container",[s("i-row",[s("i-column",[s("a",{attrs:{href:"https://codenotary.io",target:"_blank"}},[s("img",{attrs:{src:t.$withBase("/logos/codenotary.png"),alt:"CodeNotary"}})]),t._v(" "),s("a",{attrs:{href:"https://opvizor.com",target:"_blank"}},[s("img",{attrs:{src:t.$withBase("/logos/opvizor.png"),alt:"Opvizor"}})]),t._v(" "),s("a",{attrs:{href:"https://www.ta.capital/",target:"_blank",rel:"nofollow"}},[s("img",{attrs:{src:t.$withBase("/logos/tacapital.png"),alt:"TA Captial"}})]),t._v(" "),s("a",{attrs:{href:"https://www.esoftthings.com/en/",target:"_blank",rel:"nofollow"}},[s("img",{attrs:{src:t.$withBase("/logos/esoftthings.png"),alt:"eSoftThings"}})]),t._v(" "),s("a",{attrs:{href:"https://www.greentube.com/",target:"_blank",rel:"nofollow"}},[s("img",{attrs:{src:t.$withBase("/logos/greentube.svg"),alt:"GreenTube"}})]),t._v(" "),s("a",{attrs:{href:"https://www.tinaba.bancaprofilo.it/",target:"_blank",rel:"nofollow"}},[s("img",{attrs:{src:t.$withBase("/logos/tinaba.png"),alt:"Tinaba"}})]),t._v(" "),s("a",{attrs:{rel:"nofollow"}},[s("img",{attrs:{src:t.$withBase("/logos/la-logo.png"),alt:"Lord Abbett"}})]),t._v(" "),s("a",{attrs:{href:"https://naveum.ch/",target:"_blank",rel:"nofollow"}},[s("img",{attrs:{src:t.$withBase("/logos/logo_naveum.svg"),alt:"Naveum"}})]),t._v(" "),s("a",{attrs:{href:"https://truecore.ch/",target:"_blank",rel:"nofollow"}},[s("img",{attrs:{src:t.$withBase("/logos/logo_truecore.svg"),alt:"TrueCore"}})]),t._v(" "),s("a",{attrs:{rel:"nofollow"}},[s("img",{attrs:{src:t.$withBase("/logos/rs-logo.svg"),alt:"TrueCore"}})])])],1)],1)],1),t._v(" "),s("hr",{staticClass:"_margin-bottom-0"}),t._v(" "),s("section",{staticClass:"section",attrs:{id:"code-tabs"}},[s("i-container",[s("i-row",[s("i-column",[s("div",{staticClass:"section-center"},[s("h2",{attrs:{id:"by-developers-for-developers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#by-developers-for-developers"}},[t._v("#")]),t._v(" By developers, for developers")]),t._v(" "),s("p",[t._v("We have carefully designed immudb to be the one-stop intuitive immutable database solution, simple to write and simple to use.")])])])],1),t._v(" "),s("i-row",{staticClass:"_margin-top-6"},[s("i-column",[s("i-tabs",{staticClass:"-code",attrs:{custom:""},scopedSlots:t._u([{key:"header",fn:function(a){var e=a.tabs,n=a.active,r=a.setActive;return[s("ul",{staticClass:"list -unstyled"},t._l(e,(function(a){return s("li",{key:a.id},[s("i-button",{attrs:{block:"",active:a.id===n},on:{click:function(t){return r(a)}}},[t._v("\n                        "+t._s(a.title)+"\n                    ")])],1)})),0)]}}])},[t._v(" "),s("i-tab",{attrs:{title:"Connect to immudb"}},[s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[t._v("client"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" immuclient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewImmuClient")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("immuclient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("DefaultOptions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("exit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nctx "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Background")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),s("i-tab",{attrs:{title:"Store verified items"}},[s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[t._v("key2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("byte")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"client:Mr. Archibald Beatty"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("byte")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Visa 6679499384784022 11/23"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nverifiedIndex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" client"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("SafeSet")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("exit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nfmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"   SafeSet - add and verify entry:"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("printItem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" verifiedIndex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),s("i-tab",{attrs:{title:"Get verified items"}},[s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[t._v("verifiedItem"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" client"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("SafeGet")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("exit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nfmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"   SafeGet - fetch and verify entry:"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("printItem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" verifiedItem"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])],1)],1)],1)],1)],1),t._v(" "),s("hr",{staticClass:"_margin-top-0"}),t._v(" "),s("section",{staticClass:"section",attrs:{id:"get-started-end"}},[s("i-container",[s("i-row",[s("i-column",[s("div",{staticClass:"section-center"},[s("h2",{attrs:{id:"the-open-source-immutable-database"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-open-source-immutable-database"}},[t._v("#")]),t._v(" The open-source immutable database")]),t._v(" "),s("p",[t._v("Run immudb easily on Linux, FreeBSD, Microsoft Windows, and macOS, along with other systems derived from them, such as Kubernetes and Docker.")])])])],1),t._v(" "),s("i-row",{staticClass:"_text-center"},[s("i-column",[s("i-button",{attrs:{variant:"primary",size:"lg",href:"docs/"}},[t._v("Get started today")])],1)],1)],1)],1)])}),[],!1,null,null,null);a.default=n.exports}}]);