(window.webpackJsonp=window.webpackJsonp||[]).push([[214],{547:function(e,s,t){"use strict";t.r(s);var a=t(4),l=Object(a.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"♥mysql知识体系详解♥"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#♥mysql知识体系详解♥"}},[e._v("#")]),e._v(" ♥MySQL知识体系详解♥")]),e._v(" "),s("blockquote",[s("p",[e._v("本系列主要对MySQL知识体系梳理。")])]),e._v(" "),s("p",[e._v("提示")]),e._v(" "),s("p",[e._v("MySQL这个系列还没有完善的整理，后续有时间会重新梳理下。")]),e._v(" "),s("h2",{attrs:{id:"知识体系"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#知识体系"}},[e._v("#")]),e._v(" 知识体系")]),e._v(" "),s("p",[s("em",[e._v("相关文章")])]),e._v(" "),s("blockquote",[s("p",[s("strong",[e._v("C. 掌握MySQL数据库")]),e._v("\n：在理解了SQL语言后，开始进阶MySQL相关的知识点吧（在开始前，建议你完整看一本MySQl相关的书，作为你的知识体系基础）；这里不会讲如何安装MySQL或者如何使用，因为这是容易的，而是会关注一些有助于我们构建MySQL相关知识体系的知识点等。")])]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"/pages/db-mysql-theory"}},[e._v("MySQL - 数据类型")]),e._v(" "),s("ul",[s("li",[e._v("本文主要整理MySQL中数据字段类型。")])])]),e._v(" "),s("li",[s("a",{attrs:{href:"/pages/db-mysql-engine"}},[e._v("MySQL - 存储引擎")]),e._v(" "),s("ul",[s("li",[e._v("本文主要介绍MySQL中的存储引擎。")])])]),e._v(" "),s("li",[s("a",{attrs:{href:"/pages/db-mysql-b-tree"}},[e._v("MySQL - 索引(B+树)")])]),e._v(" "),s("li",[s("a",{attrs:{href:"/pages/db-mysql-performance"}},[e._v("MySQL - 性能优化")])]),e._v(" "),s("li",[s("a",{attrs:{href:"/pages/db-mysql-devide"}},[e._v("MySQL - 分表分库")])]),e._v(" "),s("li",[s("a",{attrs:{href:"/pages/db-mysql-slave"}},[e._v("MySQL - 主从复制与读写分离")])]),e._v(" "),s("li",[s("a",{attrs:{href:"/pages/db-mysql-execute"}},[e._v("MySQL - 一条 SQL 的执行过程详解")]),e._v(" "),s("ul",[s("li",[e._v("天天和数据库打交道，一天能写上几十条 SQL 语句，但你知道我们的系统是如何和数据库交互的吗？MySQL 如何帮我们存储数据、又是如何帮我们管理事务？....是不是感觉真的除了写几个 「select * from dual」外基本脑子一片空白？这篇文章就将带你走进 MySQL 的世界，让你彻底了解系统到底是如何和 MySQL 交互的，MySQL 在接受到我们发送的 SQL 语句时又分别做了哪些事情。")])])]),e._v(" "),s("li",[s("a",{attrs:{href:"/pages/db-mysql-sql-parser"}},[e._v("MySQL - MySQL中SQL是如何解析的")]),e._v(" "),s("ul",[s("li",[e._v("前文我们分享了一篇文章学习一条SQL是如何在数据库中执行的，其中有一个阶段是SQL的解析。这个阶段对于更全面的SQL优化功能；多维度的慢查询分析；辅助故障分析等都有很大帮助。本文主要介绍一篇美团技术团队关于SQL解析和应用的文章，希望能给一些启示。")])])]),e._v(" "),s("li",[s("a",{attrs:{href:"/pages/db-mysql-index-improve-mt"}},[e._v("实践 - 美团: MySQL索引原理及慢查询优化")]),e._v(" "),s("ul",[s("li",[e._v("目前常用的 SQL 优化方式包括但不限于：业务层优化、SQL逻辑优化、索引优化等。其中索引优化通常通过调整索引或新增索引从而达到 SQL 优化的目的，索引优化往往可以在短时间内产生非常巨大的效果。本文旨在以开发工程师的角度来解释数据库索引的原理和如何优化慢查询。")])])]),e._v(" "),s("li",[s("a",{attrs:{href:"/pages/db-mysql-sql-advisor-mt"}},[e._v("实践 - 美团: SQL优化工具SQLAdvisor开源")]),e._v(" "),s("ul",[s("li",[e._v("正如你在前文中看到的可以通过调整索引或新增索引的索引优化方式，从而达到 SQL 优化的目的。如果能够将索引优化转化成工具化、标准化的流程，减少人工介入的工作量，无疑会大大提高DBA的工作效率。本文主要介绍SQL优化的开源工具SQLAdvisor。")])])]),e._v(" "),s("li",[s("a",{attrs:{href:"/pages/db-mysql-sql-costmodel-mt"}},[e._v("实践 - 美团: 基于代价的慢查询优化建议")]),e._v(" "),s("ul",[s("li",[e._v("前文我们介绍了优化慢查询最直接有效的方法就是选用一个查询效率高的索引, 也介绍了索引优化工具SQLAdvisor。关于高效率的索引推荐，主要在日常工作中，基于经验规则的推荐随处可见，对于简单的SQL，如"),s("code",[e._v("select * from sync_test1 where name like 'Bobby%'")]),e._v("，直接添加索引IX(name) 就可以取得不错的效果；但对于稍微复杂点的SQL，如"),s("code",[e._v("select * from sync_test1 where name like 'Bobby%' and dt > '2021-07-06'")]),e._v("，到底选择IX(name)、IX(dt)、IX(dt,name) 还是IX(name,dt)，该方法也无法给出准确的回答。更别说像多表Join、子查询这样复杂的场景了。所以采用基于代价的推荐来解决该问题会更加普适，因为基于代价的方法使用了和数据库优化器相同的方式，去量化评估所有的可能性，选出的是执行SQL耗费代价最小的索引。")])])]),e._v(" "),s("li",[s("a",{attrs:{href:"/pages/db-mysql-xunjian-mt"}},[e._v("实践 - 美团: MySQL数据库巡检系统的设计与应用")]),e._v(" "),s("ul",[s("li",[e._v("巡检工作是保障系统平稳有效运行必不可少的一个环节，目的是能及时发现系统中存在的隐患。我们生活中也随处可见各种巡检，比如电力巡检、消防检查等，正是这些巡检工作，我们才能在稳定的环境下进行工作、生活。巡检对于数据库或者其他IT系统来说也同样至关重要，特别是在降低风险、提高服务稳定性方面起到了非常关键作用。本文介绍了美团MySQL数据库巡检系统的框架和巡检内容，希望能够帮助大家了解什么是数据库巡检，美团的巡检系统架构是如何设计的，以及巡检系统是如何保障MySQL服务稳定运行的。")])])])])])}),[],!1,null,null,null);s.default=l.exports}}]);