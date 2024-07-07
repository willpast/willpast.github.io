(window.webpackJsonp=window.webpackJsonp||[]).push([[374],{707:function(a,t,v){"use strict";v.r(t);var _=v(4),s=Object(_.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"分布式理论-cap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分布式理论-cap"}},[a._v("#")]),a._v(" 分布式理论 - CAP")]),a._v(" "),t("blockquote",[t("p",[a._v("CAP理论是分布式系统、特别是分布式存储领域中被讨论的最多的理论。其中C代表一致性 (Consistency)，A代表可用性\n(Availability)，P代表分区容错性 (Partition\ntolerance)。CAP理论告诉我们C、A、P三者不能同时满足，最多只能满足其中两个。")])]),a._v(" "),t("h2",{attrs:{id:"cap-理论简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cap-理论简介"}},[a._v("#")]),a._v(" CAP 理论简介")]),a._v(" "),t("p",[a._v("CAP理论是分布式系统、特别是分布式存储领域中被讨论的最多的理论。其中C代表一致性 (Consistency)，A代表可用性\n(Availability)，P代表分区容错性 (Partition\ntolerance)。CAP理论告诉我们C、A、P三者不能同时满足，最多只能满足其中两个。")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/willpast/image/blog/ka_java/arch-cap-1.png",alt:"img"}})]),a._v(" "),t("h3",{attrs:{id:"cap-三选二"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cap-三选二"}},[a._v("#")]),a._v(" CAP 三选二")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("一致性 (Consistency)")]),a._v(": 一个写操作返回成功，那么之后的读请求都必须读到这个新数据；如果返回失败，那么所有读操作都不能读到这个数据。所有节点访问同一份最新的数据。")]),a._v(" "),t("li",[t("code",[a._v("可用性 (Availability)")]),a._v(": 对数据更新具备高可用性，请求能够及时处理，不会一直等待，即使出现节点失效。")]),a._v(" "),t("li",[t("code",[a._v("分区容错性 (Partition tolerance)")]),a._v(": 能容忍网络分区，在网络断开的情况下，被分隔的节点仍能正常对外提供服务。")])]),a._v(" "),t("h3",{attrs:{id:"对cap理论的理解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#对cap理论的理解"}},[a._v("#")]),a._v(" 对CAP理论的理解")]),a._v(" "),t("p",[a._v("理解CAP理论最简单的方式是想象两个副本处于分区两侧，即两个副本之间的网络断开，不能通信。")]),a._v(" "),t("ul",[t("li",[a._v("如果允许其中一个副本更新，则会导致数据不一致，即丧失了C性质。")]),a._v(" "),t("li",[a._v("如果为了保证一致性，将分区某一侧的副本设置为不可用，那么又丧失了A性质。")]),a._v(" "),t("li",[a._v("除非两个副本可以互相通信，才能既保证C又保证A，这又会导致丧失P性质。")])]),a._v(" "),t("p",[a._v("一般来说使用网络通信的分布式系统，无法舍弃P性质，那么就只能在一致性和可用性上做一个艰难的选择。")]),a._v(" "),t("blockquote",[t("p",[a._v("CAP理论的表述很好地服务了它的目的，开阔了分布式系统设计者的思路，在多样化的取舍方案下设计出多样化的系统。在过去的十几年里确实涌现了不计其数的新系统，也随之在一致性和可用性的相对关系上产生了相当多的争论。")])]),a._v(" "),t("h3",{attrs:{id:"cap理论深入理解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cap理论深入理解"}},[a._v("#")]),a._v(" CAP理论深入理解")]),a._v(" "),t("p",[a._v("在CAP理论提出十二年之后，其作者又出来辟谣。“三选二”的公式一直存在着误导性，它会过分简单化各性质之间的相互关系:")]),a._v(" "),t("ul",[t("li",[a._v("首先，由于分区很少发生，那么在系统不存在分区的情况下没什么理由牺牲C或A。")]),a._v(" "),t("li",[a._v("其次，C与A之间的取舍可以在同一系统内以非常细小的粒度反复发生，而每一次的决策可能因为具体的操作，乃至因为牵涉到特定的数据或用户而有所不同。")]),a._v(" "),t("li",[a._v("最后，这三种性质都可以在程度上衡量，并不是非黑即白的有或无。可用性显然是在0%到100%之间连续变化的，一致性分很多级别，连分区也可以细分为不同含义，如系统内的不同部分对于是否存在分区可以有不一样的认知。")])]),a._v(" "),t("p",[a._v("所以一致性和可用性并不是水火不容，非此即彼的。Paxos、Raft等分布式一致性算法就是在一致性和可用性之间做到了很好的平衡的见证。")]),a._v(" "),t("h2",{attrs:{id:"参考文章"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[a._v("#")]),a._v(" 参考文章")]),a._v(" "),t("ul",[t("li",[a._v("https://zhuanlan.zhihu.com/p/31727291")])])])}),[],!1,null,null,null);t.default=s.exports}}]);