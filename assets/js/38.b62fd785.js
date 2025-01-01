(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{319:function(t,s,a){"use strict";a.r(s);var n=a(14),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[t._v("#")]),t._v(" 原理")]),t._v(" "),s("ul",[s("li",[t._v("纯web渲染(h5)")]),t._v(" "),s("li",[t._v("纯native渲染(react native、wexx)")]),t._v(" "),s("li",[t._v("小程序采用： "),s("strong",[t._v("hybrid混合式渲染")]),t._v("（即同一个页面即有 webview渲染, 也有native渲染）")])]),t._v(" "),s("p",[s("strong",[t._v("小程序的实际的页面组成")])]),t._v(" "),s("ul",[s("li",[t._v("80% 以上是webview， 会被渲染成html")]),t._v(" "),s("li",[t._v("剩下一小部分是原生组件")])]),t._v(" "),s("p",[s("strong",[t._v("现在页面栈最多10个")])]),t._v(" "),s("h2",{attrs:{id:"隐藏的调试方法和工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#隐藏的调试方法和工具"}},[t._v("#")]),t._v(" 隐藏的调试方法和工具")]),t._v(" "),s("p",[t._v("1、在开发者工具控制台中，")]),t._v(" "),s("blockquote",[s("ul",[s("li",[t._v("用 "),s("strong",[t._v("getCurrentPages")]),t._v("()： 可"),s("strong",[t._v("查看当前已打开的小程序页面信息")]),t._v("，Array类型，每个页面对应其中一项")]),t._v(" "),s("li",[t._v("用 "),s("code",[t._v("$gwx('./pages/index/index.wxml')({show:true})")]),t._v(" "),s("strong",[t._v("查看对应页面的虚拟dom渲染节点结构信息")])])])]),t._v(" "),s("p",[t._v("2、查看webview渲染的真实的html节点及结构需要打开专用控制台")]),t._v(" "),s("blockquote",[s("ol",[s("li",[t._v("通过左上角的微信开发者工具---调试---微信开发者工具")]),t._v(" "),s("li",[t._v("会打开一个微信开发者工具的全局html控制台， 里面包含开发者工具的各个部分结构：头部选项、模拟器、编辑器、控制台")]),t._v(" "),s("li",[t._v("在html控制台中，通过："),s("code",[t._v("document.getElementsByTagName('webview')")]),t._v(" :  "),s("strong",[t._v("获取当前存在的页面实例")]),t._v(", 得到一个数组， 其中前 N 个是当前已打开的小程序页面 （后面4个是开发者工具里的头部选项、模拟器、编辑器、控制台）")]),t._v(" "),s("li",[t._v("通过"),s("code",[t._v("document.getElementsByTagName('webview')[x:要查看的页面索引].showDevTools(true)")]),t._v(" ： 打开当前webview页面的独立的控制台")])])]),t._v(" "),s("h3",{attrs:{id:"常用api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用api"}},[t._v("#")]),t._v(" 常用api:")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("网络请求")]),t._v("：wx.request 用于发起HTTP/HTTPS请求，获取服务器端的数据；wx.uploadFile 和 wx.downloadFile 分别用于上传文件到服务器和从服务器下载文件。")]),t._v(" "),s("li",[s("strong",[t._v("页面跳转")]),t._v("：wx.navigateTo 用于跳转到应用内的某个页面而不关闭当前页面；wx.redirectTo 关闭当前页面，跳转到应用内的某个页面；wx.reLaunch 关闭所有页面，打开到应用内的某个页面；wx.navigateBack 返回上一页面或多级页面2。")]),t._v(" "),s("li",[s("strong",[t._v("数据缓存")]),t._v("：wx.setStorageSync 用于同步地将数据存储在本地缓存中指定的key下；wx.getStorageSync 用于同步地从本地缓存中获取指定key的数据；wx.clearStorageSync 清空本地缓存中的所有数据3。")]),t._v(" "),s("li",[s("strong",[t._v("用户交互")]),t._v("：wx.showToast 显示消息提示框；wx.showLoading 显示loading提示框；wx.hideToast 和 wx.hideLoading 分别用于隐藏消息提示框和loading提示框4。")]),t._v(" "),s("li",[s("strong",[t._v("设备信息")]),t._v("：wx.getSystemInfo 获取系统信息；wx.getNetworkType 获取网络类型5。")]),t._v(" "),s("li",[s("strong",[t._v("多媒体")]),t._v("：如wx.createSelectorQuery 创建一个选择器查询对象，用于获取页面元素信息；wx.getImageInfo 获取图片信息等6。")]),t._v(" "),s("li",[s("strong",[t._v("获取用户当前位置信息：")]),t._v(" wx.getLocation()")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("wx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getLocation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取用户位置")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("success")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 拿到信息")]),t._v("\n        wx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("openLocation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 打开地图展示当前用户地址")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("latitude")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("latitude"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("longitude")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("longitude\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        wx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("chooseLocation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 选择附近周边位置（带搜索、带列表） ")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("latitude")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("latitude"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("longitude")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("longitude\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// app.json中需先添加用户授权提醒")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"permission"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"scope.userLocation"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"desc"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"你的位置信息将用于小程序位置接口的效果展示"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 高速公路行驶持续后台定位")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[t._v("获取微信步数： wx.getWeRunData(), 过去31天每天微信步数的汇总数据(加密过，需解密)")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v(" wx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getWeRunData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("success")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("result")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("iv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 密钥")]),t._v("\n         console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("encryptedData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 被加密的数据")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"云开发"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#云开发"}},[t._v("#")]),t._v(" 云开发")]),t._v(" "),s("blockquote",[s("p",[t._v("Faas 函数即服务")])]),t._v(" "),s("p",[t._v("包括有云函数、数据库、云存储、云托管；")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// app.json文件中")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"miniprogramRoot"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"miniprogram/"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 小程序代码路径配置")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"cloudfunctionRoot"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cloudfunctions/"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 云开发服务路径")]),t._v("\n")])])]),s("h3",{attrs:{id:"特性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#特性"}},[t._v("#")]),t._v(" 特性")]),t._v(" "),s("ul",[s("li",[t._v("所有的微信的加密的数据，如果使用腾讯云开发或者使用微信小程序云开发服务，通通是"),s("strong",[t._v("免鉴权直接解密的")])])]),t._v(" "),s("h2",{attrs:{id:"生命周期函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生命周期函数"}},[t._v("#")]),t._v(" 生命周期函数")]),t._v(" "),s("h3",{attrs:{id:"_1、应用级生命周期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、应用级生命周期"}},[t._v("#")]),t._v(" 1、应用级生命周期")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("onLaunch：小程序初始化完成时触发，全局只触发一次。通常在这个函数里进行全局配置、初始化操作以及获取全局唯一数据等8。")])]),t._v(" "),s("li",[s("p",[t._v("onShow：小程序启动或从前台进入后台显示时触发。")])]),t._v(" "),s("li",[s("p",[t._v("onHide：小程序从前台进入后台时触发。")])]),t._v(" "),s("li",[s("p",[t._v("onError：当小程序发生脚本错误或API调用报错时触发。")])]),t._v(" "),s("li",[s("p",[t._v("onPageNotFound：当用户在小程序内打开一个不存在的页面时触发9。")])])]),t._v(" "),s("h3",{attrs:{id:"_2、页面级生命周期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、页面级生命周期"}},[t._v("#")]),t._v(" 2、页面级生命周期")]),t._v(" "),s("ul",[s("li",[t._v("onLoad：页面加载时触发，每个页面的初始加载完成时调用。可以接受参数，这些参数可以从其他页面跳转过来时传递。")]),t._v(" "),s("li",[t._v("onShow：页面显示/切入前台时触发。适用于每次页面展示时需要更新或重新加载数据的情况。")]),t._v(" "),s("li",[t._v("onReady：页面初次渲染完成后触发，表示当前页面已经准备妥当，可以和视图层进行交互。")]),t._v(" "),s("li",[t._v("onHide：页面从前台切换到后台时触发。在此函数中可以执行一些资源回收、状态保存等操作。")]),t._v(" "),s("li",[t._v("onUnload：页面卸载时触发，例如用户使用 wx.navigateTo 或 wx.redirectTo 去到新的页面时，旧页面就会被卸载，并执行此回调函数")]),t._v(" "),s("li",[t._v("onPullDownRefresh：用户下拉刷新时触发，在页面中实现下拉刷新功能时会用到，通常用于数据的重新加载。")]),t._v(" "),s("li",[t._v("onReachBottom：页面上拉触底事件的处理函数，常用于列表滚动到底部时自动加载更多数据。")]),t._v(" "),s("li",[t._v("onShareAppMessage：用户点击右上角菜单中的分享按钮时触发，可以自定义分享内容及行为10。")])]),t._v(" "),s("h3",{attrs:{id:"_3、组件级生命周期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、组件级生命周期"}},[t._v("#")]),t._v(" 3、组件级生命周期")]),t._v(" "),s("ul",[s("li",[t._v("created：组件实例刚刚被创建时触发。")]),t._v(" "),s("li",[t._v("attached：组件实例进入页面节点树时触发。")]),t._v(" "),s("li",[t._v("ready：组件布局完成后触发，表示组件已经准备好进行交互。")]),t._v(" "),s("li",[t._v("moved：组件实例所在的页面被移动到后台时触发。")]),t._v(" "),s("li",[t._v("detached：组件实例被移除页面节点树时触发11。")])]),t._v(" "),s("h2",{attrs:{id:"小程序与web的不同"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小程序与web的不同"}},[t._v("#")]),t._v(" 小程序与web的不同")]),t._v(" "),s("p",[t._v("1、"),s("strong",[t._v("小程序的逻辑层和渲染层是分开的")]),t._v("，"),s("strong",[t._v("分别运行在不同的线程中")])]),t._v(" "),s("ul",[s("li",[t._v("逻辑层运行在 "),s("strong",[t._v("JSCore")]),t._v(" 中")]),t._v(" "),s("li",[t._v("所以并"),s("strong",[t._v("没有一个完整浏览器对象")]),t._v("，因而"),s("strong",[t._v("缺少相关的DOM API和BOM API")])]),t._v(" "),s("li",[t._v("前端开发非常"),s("strong",[t._v("熟悉的一些库在小程序中是无法运行")]),t._v("的，如 jQuery、 Zepto 等")]),t._v(" "),s("li",[t._v("同时 JSCore 的环境同 NodeJS 环境也是不尽相同，所以"),s("strong",[t._v("一些 NPM 的包是无法运行在小程序中")]),t._v("的")])]),t._v(" "),s("blockquote",[s("ul",[s("li",[t._v("小程序很少用dom操作，后来才提供dom的操作方法， 以前没有， 不提倡用")])])]),t._v(" "),s("p",[t._v("2、面对的环境不同：")]),t._v(" "),s("blockquote",[s("p",[t._v("小程序： 开发过程中需要面对的是两大操作系统 iOS 和 Android 的微信客户端，以及用于辅助开发的小程序开发者工具，小程序中三大运行环境也是有所区别的")]),t._v(" "),s("p",[t._v("web网页: 开发者需要面对的环境是各式各样的浏览器，PC 端需要面对 IE、Chrome、QQ浏览器等，在移动端需要面对Safari、Chrome以及 iOS、Android 系统中的各式 WebView")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("运行环境")]),t._v(" "),s("th",[t._v("逻辑层")]),t._v(" "),s("th",[t._v("渲染层")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("iosJ")]),t._v(" "),s("td",[t._v("JavaScriptCore")]),t._v(" "),s("td",[t._v("WKWebView")])]),t._v(" "),s("tr",[s("td",[t._v("安卓")]),t._v(" "),s("td",[t._v("V8")]),t._v(" "),s("td",[t._v("chromium定制内核")])]),t._v(" "),s("tr",[s("td",[t._v("小程序开发工具")]),t._v(" "),s("td",[t._v("NWJS")]),t._v(" "),s("td",[t._v("Chrome WebView")])])])]),t._v(" "),s("p",[t._v("3、开发辅助工具：")]),t._v(" "),s("blockquote",[s("p",[t._v("web网页开发，只要使用到浏览器，并且搭配上一些辅助工具或者编辑器即可。小而程序的开发则有所不同")])]),t._v(" "),s("ul",[s("li",[t._v("需要经过申请小程序账号、")]),t._v(" "),s("li",[t._v("安装小程序开发者工具、")]),t._v(" "),s("li",[t._v("配置项目等等过程方可完成")])]),t._v(" "),s("h2",{attrs:{id:"渲染层与逻辑层-小程序的运行环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#渲染层与逻辑层-小程序的运行环境"}},[t._v("#")]),t._v(" 渲染层与逻辑层（小程序的运行环境）")]),t._v(" "),s("p",[t._v("小程序的渲染层和逻辑层分别"),s("strong",[t._v("由2个线程管理")]),t._v("：")]),t._v(" "),s("h4",{attrs:{id:"渲染层-运行wxml-模板和-wxss"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#渲染层-运行wxml-模板和-wxss"}},[t._v("#")]),t._v(" "),s("strong",[t._v("渲染层：")]),t._v(" 运行WXML 模板和 WXSS")]),t._v(" "),s("ol",[s("li",[t._v("界面使用了WebView 进行渲染；")]),t._v(" "),s("li",[t._v("存在多个WebView线程; (一个小程序"),s("strong",[t._v("存在多个界面")]),t._v("，所以"),s("strong",[t._v("渲染层存在多个WebView线程，")]),t._v(")")])]),t._v(" "),s("h4",{attrs:{id:"逻辑层-运行js-脚本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#逻辑层-运行js-脚本"}},[t._v("#")]),t._v(" "),s("strong",[t._v("逻辑层：")]),t._v("  运行JS 脚本")]),t._v(" "),s("ol",[s("li",[t._v("逻辑层采用 JsCore 线程运行JS脚本")]),t._v(" "),s("li",[t._v("发送网络请求也经由Native转发")])]),t._v(" "),s("h4",{attrs:{id:"注意-线程的通信会经由微信客户端-native-做中转"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注意-线程的通信会经由微信客户端-native-做中转"}},[t._v("#")]),t._v(" 注意： 线程的通信会经由微信客户端(Native)做中转")]),t._v(" "),s("ul",[s("li",[t._v("渲染层和逻辑层,这两个线程的通信会经"),s("strong",[t._v("由微信客户端")]),t._v("（下文中也会采用Native来代指微信客户端）"),s("strong",[t._v("做中转")]),t._v("，逻辑层发送网络请求也经由Native转发")])]),t._v(" "),s("p",[s("img",{attrs:{src:"/img/%E5%B0%8F%E7%A8%8B%E5%BA%8F/image-20241226224416090.png",alt:"image-20241226224416090"}})]),t._v(" "),s("p",[t._v("性能与体验")]),t._v(" "),s("h2",{attrs:{id:"分包-不能超过2m"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分包-不能超过2m"}},[t._v("#")]),t._v(" 分包 不能超过2M")]),t._v(" "),s("p",[t._v("小程序单个代码包的体积上限为 2M， 代码包大小直接影响了下载耗时，影响用户启动小程序时的体验。")]),t._v(" "),s("ul",[s("li",[t._v("一般按需加载，先加主包")]),t._v(" "),s("li",[t._v("可以提升小程序代码包总体积上限，承载更多的功能与服务。")]),t._v(" "),s("li",[t._v("降低代码包下载耗时")]),t._v(" "),s("li",[t._v("降低小程序代码注入耗时")]),t._v(" "),s("li",[t._v("降低页面渲染耗时：使用分包可以避免不必要的组件和页面初始化。")]),t._v(" "),s("li",[t._v("降低内存占用：分包能够实现页面、组件和逻辑较粗粒度的按需加载，从而降低内存的占用。")])]),t._v(" "),s("p",[t._v("1.1 "),s("strong",[s("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/subpackages/independent.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("独立分包"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("小程序中的某些场景（如广告页、活动页、支付页等），通常功能不是很复杂且相对独立，对启动性能有很高的要求。独立分包可以独立于主包和其他分包运行。从独立分包页面进入小程序时，不需要下载主包。建议开发者将部分对启动性能要求很高的页面放到特殊的独立分包中。")]),t._v(" "),s("p",[t._v("1.2 "),s("strong",[s("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/subpackages/preload.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("分包预下载"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("在使用「分包加载」后，虽然能够显著提升小程序的启动速度，但是当用户在使用小程序过程中跳转到分包内页面时，需要等待分包下载完成后才能进入页面，造成页面切换的延迟，影响小程序的使用体验。分包预下载便是为了解决首次进入分包页面时的延迟问题而设计的。")]),t._v(" "),s("p",[t._v("独立分包和分包预下载可以配合使用，获得更好的效果，详情请参考"),s("a",{attrs:{href:"https://developers.weixin.qq.com/community/develop/doc/000e44abb2c7e89c2287f84b956c09",target:"_blank",rel:"noopener noreferrer"}},[t._v("独立分包与分包预下载教程"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("1.3 "),s("strong",[s("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/subpackages/async.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("分包异步化"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("「分包异步化」将小程序的分包从页面粒度细化到组件甚至文件粒度。这使得本来只能放在主包内页面的部分插件、组件和代码逻辑可以剥离到分包中，并在运行时异步加载，从而进一步降低启动所需的包大小和代码量。")]),t._v(" "),s("h3",{attrs:{id:"如何分包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何分包"}},[t._v("#")]),t._v(" 如何分包")]),t._v(" "),s("p",[t._v("开发者通过在 app.json "),s("code",[t._v("subPackages")]),t._v(" 字段声明项目分包结构：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"pages"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pages/index"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pages/logs"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// subPackages 中，每个分包的配置有以下几项：")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"subPackages"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"root"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"packageA"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"pages"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pages/cat"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pages/dog"')]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"entry"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"index.js"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"root"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"packageB"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pack2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"pages"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pages/apple"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pages/banana"')]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("table",[s("thead",[s("tr",[s("th",[t._v("字段")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("root")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("分包根目录")])]),t._v(" "),s("tr",[s("td",[t._v("name")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("分包别名，"),s("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/subpackages/preload.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("分包预下载"),s("OutboundLink")],1),t._v("时可以使用")])]),t._v(" "),s("tr",[s("td",[t._v("pages")]),t._v(" "),s("td",[t._v("StringArray")]),t._v(" "),s("td",[t._v("分包页面路径，相对于分包根目录")])]),t._v(" "),s("tr",[s("td",[t._v("independent")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("分包是否是"),s("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/subpackages/independent.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("独立分包"),s("OutboundLink")],1)])]),t._v(" "),s("tr",[s("td",[t._v("entry")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("分包入口文件")])])])]),t._v(" "),s("h2",{attrs:{id:"打包时注意"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#打包时注意"}},[t._v("#")]),t._v(" 打包时注意")]),t._v(" "),s("ul",[s("li",[t._v("声明 "),s("code",[t._v("subPackages")]),t._v(" 后，将按 "),s("code",[t._v("subPackages")]),t._v(" 配置路径进行打包，"),s("code",[t._v("subPackages")]),t._v(" 配置"),s("strong",[t._v("路径外的目录将被打包到主包中")])]),t._v(" "),s("li",[t._v("主包也可以有自己的 pages，即最外层的 pages 字段。")]),t._v(" "),s("li",[s("code",[t._v("subPackages")]),t._v(" 的根目录不能是另外一个 "),s("code",[t._v("subPackages")]),t._v(" 内的子目录")]),t._v(" "),s("li",[s("strong",[s("code",[t._v("tabBar")]),t._v(" 页面必须在主包内")])])]),t._v(" "),s("h3",{attrs:{id:"发布上线"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#发布上线"}},[t._v("#")]),t._v(" 发布上线")]),t._v(" "),s("ol",[s("li",[t._v("上传代码\n"),s("ul",[s("li",[t._v("在"),s("strong",[t._v("微信开发者工具")]),t._v("的"),s("strong",[t._v("右上角上传")]),t._v("处上传全部代")]),t._v(" "),s("li",[t._v("如果小程序中涉及到一些"),s("strong",[t._v("request的请求接口")]),t._v("，记得把"),s("strong",[t._v("不校验合法域名")]),t._v("勾选上。")]),t._v(" "),s("li",[t._v("另外注意，小程序的接口"),s("strong",[t._v("不允许http，只支持https")]),t._v("。仅仅是https还不够，")]),t._v(" "),s("li",[s("strong",[t._v("正式版和体验版")]),t._v("上的接口功能实现还需要将接口地址添加到"),s("strong",[t._v("开发管理——开发设置——服务器域名——request合法域名")]),t._v("中去。否则，手机"),s("strong",[t._v("预览或者在体验版")]),t._v("小程序中"),s("strong",[t._v("可能无法实现接口")]),t._v("功能。")])])]),t._v(" "),s("li",[t._v("设为体验版本\n"),s("ul",[s("li",[t._v("登上自己的小程序，然后在"),s("strong",[t._v("版本管理")]),t._v("就能看到自己刚刚上传的版本")]),t._v(" "),s("li",[t._v("我们可以将上传的版本设置为"),s("strong",[t._v("体验版本")]),t._v("，这样更方便地"),s("strong",[t._v("测试我们的小程序的功能")]),t._v("(下次上传新的代码时会将新上传的设置为体验版本)。点击"),s("strong",[t._v("体验版")]),t._v("就能看到体验版的小程序的二维码了。")])])]),t._v(" "),s("li",[t._v("提交审核\n"),s("ul",[s("li",[t._v("一般如果你的小程序涉及"),s("strong",[t._v("音乐，视频或者金融")]),t._v("等，都是"),s("strong",[t._v("不允许")]),t._v("的。需要注册"),s("strong",[t._v("企业主体")])])])]),t._v(" "),s("li",[t._v("发布上线\n"),s("ul",[s("li",[t._v("如果"),s("strong",[t._v("通过了审核")]),t._v("，那么在"),s("strong",[t._v("右侧点击提交发布")])])])])]),t._v(" "),s("h2",{attrs:{id:"uniapp为何可编译多套代码-中间js层-抹平"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#uniapp为何可编译多套代码-中间js层-抹平"}},[t._v("#")]),t._v(" uniapp为何可编译多套代码， 中间js层  抹平")]),t._v(" "),s("p",[t._v("主要是因为它采用了编译器和运行时（runtime）相结合的方式来实现跨平台开发。这种设计使得开发者可以编写一套代码，并通过编译器将其转换为适用于不同平台的特定代码，同时利用各个平台上的运行时来执行这些代码。")]),t._v(" "),s("ol",[s("li",[t._v("以vue.js框架为基础的开发的，充分利用跨平台特性，实现代码共享；")]),t._v(" "),s("li",[t._v("编译器的转换，通过"),s("a",{attrs:{href:"https://so.csdn.net/so/search?q=UniApp&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"}},[t._v("UniApp"),s("OutboundLink")],1),t._v("的编译器将代码转换为不同平台的原生代码；")]),t._v(" "),s("li",[t._v("统一的内置的组件库和api进行了跨平台的封装，轻易适配不同平台的特性和功能。")])]),t._v(" "),s("h4",{attrs:{id:"uniapp的核心在于它的编译器和运行时机制。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#uniapp的核心在于它的编译器和运行时机制。"}},[t._v("#")]),t._v(" UniApp的核心在于它的编译器和运行时机制。")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("编译器负责将开发者编写的通用代码（通常是基于Vue.js语法的单文件组件）转换成适合目标平台的原生代码")]),t._v("。")]),t._v(" "),s("li",[t._v("例如，在小程序平台上，编译器会将.vue文件拆分生成wxml、wxss、js等代码；")]),t._v(" "),s("li",[t._v("而在Android和iOS平台上，则分别编译为Kotlin和Swift代码2。")]),t._v(" "),s("li",[t._v("每个平台都有其独特的API和组件库，因此编译器必须确保输出的代码能够正确调用这些资源")])])])}),[],!1,null,null,null);s.default=r.exports}}]);