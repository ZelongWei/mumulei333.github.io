(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{656:function(t,e,r){"use strict";r.r(e);var v=r(4),s=Object(v.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("p",[t._v("转载自"),r("a",{attrs:{href:"http://qiubaiying.vip/2017/02/16/Git-%E4%BB%A3%E7%A0%81%E5%9B%9E%E6%BB%9A/",target:"_blank",rel:"noopener noreferrer"}},[t._v("By"),r("OutboundLink")],1)]),t._v(" "),r("blockquote",[r("p",[t._v("并不适合阅读的个人文档。")])]),t._v(" "),r("h1",{attrs:{id:"git-revert-和-git-reset-的区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#git-revert-和-git-reset-的区别"}},[t._v("#")]),t._v(" "),r("strong",[t._v("git revert")]),t._v(" 和 "),r("strong",[t._v("git reset")]),t._v(" 的区别")]),t._v(" "),r("p",[t._v("先看图：")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://ww3.sinaimg.cn/large/006tNbRwgy1fcr9tu6vdjj30t30ez0y8.jpg",alt:""}})]),t._v(" "),r("p",[r("strong",[t._v("sourceTree")]),t._v(" 中 "),r("strong",[t._v("revert")]),t._v(" 译为**"),r("code",[t._v("提交回滚")]),t._v("**，作用为忽略你指定的版本，然后提交一个新的版本。新的版本中已近删除了你所指定的版本。")]),t._v(" "),r("p",[r("strong",[t._v("reset")]),t._v(" 为 "),r("strong",[t._v("重置到这次提交")]),t._v("，将内容重置到指定的版本。"),r("code",[t._v("git reset")]),t._v(" 命令后面是需要加2种参数的："),r("code",[t._v("–-hard")]),t._v(" 和 "),r("code",[t._v("–-soft")]),t._v("。这条命令默认情况下是 "),r("code",[t._v("-–soft")]),t._v("。")]),t._v(" "),r("p",[t._v("执行上述命令时，这该条commit号之 后（时间作为参考点）的所有commit的修改都会退回到git缓冲区中。使用"),r("code",[t._v("git status")]),t._v(" 命令可以在缓冲区中看到这些修改。而如果加上"),r("code",[t._v("-–hard")]),t._v("参数，则缓冲区中不会存储这些修改，git会直接丢弃这部分内容。可以使用 "),r("code",[t._v("git push origin HEAD --force")]),t._v(" 强制将分区内容推送到远程服务器。")]),t._v(" "),r("h4",{attrs:{id:"代码回退"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#代码回退"}},[t._v("#")]),t._v(" 代码回退")]),t._v(" "),r("p",[t._v("默认参数 "),r("code",[t._v("-soft")]),t._v(",所有commit的修改都会退回到git缓冲区\n参数"),r("code",[t._v("--hard")]),t._v("，所有commit的修改直接丢弃")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[t._v("$ git reset --hard HEAD^ \t\t回退到上个版本\n$ git reset --hard commit_id\t退到/进到 指定commit_id\n")])])]),r("p",[t._v("推送到远程")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[t._v("$ git push origin HEAD --force\n")])])]),r("h4",{attrs:{id:"可以吃的后悔药-版本穿梭"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#可以吃的后悔药-版本穿梭"}},[t._v("#")]),t._v(" 可以吃的后悔药->版本穿梭")]),t._v(" "),r("p",[t._v("当你回滚之后，又后悔了，想恢复到新的版本怎么办？")]),t._v(" "),r("p",[t._v("用"),r("code",[t._v("git reflog")]),t._v("打印你记录你的每一次操作记录")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[t._v('$ git reflog\n\n输出：\nc7edbfe HEAD@{0}: reset: moving to c7edbfefab1bdbef6cb60d2a7bb97aa80f022687\n470e9c2 HEAD@{1}: reset: moving to 470e9c2\nb45959e HEAD@{2}: revert: Revert "add img"\n470e9c2 HEAD@{3}: reset: moving to 470e9c2\n2c26183 HEAD@{4}: reset: moving to 2c26183\n0f67bb7 HEAD@{5}: revert: Revert "add img"\n')])])]),r("p",[t._v("找到你操作的id如："),r("code",[t._v("b45959e")]),t._v("，就可以回退到这个版本")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[t._v("$ git reset --hard b45959e\n")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);