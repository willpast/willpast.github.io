(window.webpackJsonp=window.webpackJsonp||[]).push([[271],{599:function(t,e,s){"use strict";s.r(e);var a=s(4),n=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"mongodb-替换方案之postgresql"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mongodb-替换方案之postgresql"}},[t._v("#")]),t._v(" MongoDB 替换方案之PostgreSQL")]),t._v(" "),e("blockquote",[e("p",[t._v("MongoDB 宣布其开源许可证从 GNU AGPLv3 切换到 Server Side Public License (SSPL), SSPL\n明确要求托管 MongoDB\n实例的云计算公司要么获取商业许可证要么向社区开源其服务代码。导致了一些商业公司为了规避风险，弃用MongoDB转而投入其它NoSQL方案。本文主要调研PostgreSQL替换MongoDB方案。")])]),t._v(" "),e("h2",{attrs:{id:"关于mongodb-v3版本证书"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关于mongodb-v3版本证书"}},[t._v("#")]),t._v(" 关于MongoDB V3版本证书")]),t._v(" "),e("blockquote",[e("p",[t._v("MongoDB 宣布其开源许可证从 GNU AGPLv3 切换到 Server Side Public License\n(SSPL)。新许可证将适用于新版本的 MongoDB Community Server 以及打过补丁的旧版本。AGPLv3 和 SSPL\n在自由使用、自由修改和重新分发代码上没有区别。")])]),t._v(" "),e("p",[t._v("最大的区别是 MongoDB 希望从软件即服务上获取收入，"),e("strong",[t._v("SSPL 明确要求托管 MongoDB\n实例的云计算公司要么获取商业许可证要么向社区开源其服务代码")]),t._v(" 。")]),t._v(" "),e("p",[t._v("相比之下 AGPLv3 只声明需要将修改的代码回馈社区，但没有涉及到任何软件即服务。")]),t._v(" "),e("h2",{attrs:{id:"postgresql与mongodb对比"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#postgresql与mongodb对比"}},[t._v("#")]),t._v(" PostgreSQL与MongoDB对比")]),t._v(" "),e("blockquote",[e("p",[t._v("因为目标是替换MongoDB，所以直接对比PostgreSQL和MongoDB")])]),t._v(" "),e("h3",{attrs:{id:"支持的数据类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#支持的数据类型"}},[t._v("#")]),t._v(" 支持的数据类型")]),t._v(" "),e("blockquote",[e("p",[t._v("PG支持的数据类型叫JSON，从PostgreSQL 9.2版本支持JSON，并且从PostgreSQL\n9.2版本开始，JSON已经成为内置数据类型，不仅仅是一个扩展了。"),e("strong",[t._v("PG从9.4开始，又推出了新的JSONB的数据类型")]),t._v(" 。")])]),t._v(" "),e("h4",{attrs:{id:"postgresql-json-jsonb"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#postgresql-json-jsonb"}},[t._v("#")]),t._v(" PostgreSQL - JSON & JSONB")]),t._v(" "),e("blockquote",[e("p",[t._v("先介绍下JSON，在2012年V9.2版本中支持， 请直接看下面的例子")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Document Database – JSON")])])]),t._v(" "),e("p",[t._v("Document database capabilities in Postgres advanced significantly, when\nsupport for the JSON data type was introduced "),e("strong",[t._v("in 2012 as part of Postgres\n9.2")]),t._v(". JSON (JavaScript Object Notation) is one of the most popular data-\ninterchange formats on the web.")]),t._v(" "),e("p",[t._v("Postgres offers robust support for JSON. Postgres has a JSON data type, which\nvalidates and stores JSON data and provides functions for extracting elements\nfrom JSON values. And, it offers the ability to easily encode query result\nsets using JSON. This last piece of functionality is particularly important,\nas it means that applications that prefer to work natively with JSON can\neasily obtain their data from Postgres in JSON.")]),t._v(" "),e("p",[t._v("Below are some examples of using JSON data in Postgres:")]),t._v(" "),e("p",[e("img",{attrs:{src:"/images/db/db-postgre-5.png",alt:""}})]),t._v(" "),e("p",[e("img",{attrs:{src:"/images/db/db-postgre-6.png",alt:""}})]),t._v(" "),e("p",[e("img",{attrs:{src:"/images/db/db-postgre-7.png",alt:""}})]),t._v(" "),e("p",[t._v("In addition to "),e("strong",[t._v("the native JSON data type, Postgres v9.3, released in 2013,\nadded a JSON parser and a variety of JSON functions")]),t._v(". This means web\napplication developers don't need translation layers in the code between the\ndatabase and the web framework that uses JSON. JSON-formatted data can be sent\ndirectly to the database where Postgres will not only store the data, but\nproperly validate it as well. With JSON functions, Postgres can read\nrelational data from a table and return it to the application as valid JSON\nformatted strings. And, the relational data can be returned as JSON for either\na single value or an entire record.")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("JSONB – Binary JSON")])])]),t._v(" "),e("p",[e("strong",[t._v("Postgres 9.4 introduces JSONB, a second JSON type with a binary storage\nformat")]),t._v(". There are some significant differences between JSONB in Postgres and\nBSON, which is used by one of the largest document-only database providers.\nJSONB uses an internal storage format that is not exposed to clients; JSONB\nvalues are sent and received using the JSON text representation. "),e("strong",[t._v("BSON stands\nfor Binary JSON, but in fact not all JSON values can be represented using\nBSON. For example, BSON cannot represent an integer or floating-point number\nwith more than 64 bits of precision, whereas JSONB can represent arbitrary\nJSON values")]),t._v(". Users of BSON-based solutions should be aware of this\nlimitation to avoid data loss.")]),t._v(" "),e("blockquote",[e("p",[t._v("jsonb 的出现带来了更多的函数, 更多的索引创建方式, 更多的操作符和更高的性能")])]),t._v(" "),e("p",[t._v("关于PG的JSON和JSONB的具体介绍和测试，参考Francs的blog：")]),t._v(" "),e("ul",[e("li",[t._v("http://francs3.blog.163.com/blog/static/40576727201452293027868/")]),t._v(" "),e("li",[t._v("http://francs3.blog.163.com/blog/static/40576727201442264738357/")]),t._v(" "),e("li",[t._v("http://francs3.blog.163.com/blog/static/40576727201341613630793/")])]),t._v(" "),e("h4",{attrs:{id:"mongodb-bson"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mongodb-bson"}},[t._v("#")]),t._v(" MongoDB - BSON")]),t._v(" "),e("blockquote",[e("p",[t._v("其实BSON就是JSON的一个扩展，BSON是一种类json的一种二进制形式的存储格式，简称Binary\nJSON，它和JSON一样，支持内嵌的文档对象和数组对象，但是BSON有JSON没有的一些数据类型，如Date和BinData类型。")])]),t._v(" "),e("p",[e("strong",[t._v("二者的区别参考")]),t._v(" ：")]),t._v(" "),e("p",[t._v("http://www.tuicool.com/articles/iUNbyi")]),t._v(" "),e("p",[t._v("BSON是由10gen开发的一个数据格式，目前主要用于MongoDB中，是MongoDB的数据存储格式。BSON基于JSON格式，选择JSON进行改造的原因主要是JSON的通用性及JSON的schemaless的特性。")]),t._v(" "),e("p",[e("strong",[t._v("BSON主要会实现以下三点目标")]),t._v(" ：")]),t._v(" "),e("ul",[e("li",[t._v("更快的遍历速度")])]),t._v(" "),e("p",[t._v("对JSON格式来说，太大的JSON结构会导致数据遍历非常慢。在JSON中，要跳过一个文档进行数据读取，需要对此文档进行扫描才行，需要进行麻烦的数据结构匹配，比如括号的匹配，而BSON对JSON的一大改进就是，它会将JSON的每一个元素的长度存在元素的头部，这样你只需要读取到元素长度就能直接seek到指定的点上进行读取了。")]),t._v(" "),e("ul",[e("li",[t._v("操作更简易")])]),t._v(" "),e("p",[t._v("对JSON来说，数据存储是无类型的，比如你要修改基本一个值，从9到10，由于从一个字符变成了两个，所以可能其后面的所有内容都需要往后移一位才可以。而使用BSON，你可以指定这个列为数字列，那么无论数字从9长到10还是100，我们都只是在存储数字的那一位上进行修改，不会导致数据总长变大。当然，在MongoDB中，如果数字从整形增大到长整型，还是会导致数据总长变大的。")]),t._v(" "),e("ul",[e("li",[t._v("增加了额外的数据类型")])]),t._v(" "),e("p",[t._v("JSON是一个很方便的数据交换格式，但是其类型比较有限。BSON在其基础上增加了“byte\narray”数据类型。这使得二进制的存储不再需要先base64转换后再存成JSON。大大减少了计算开销和数据大小。")]),t._v(" "),e("p",[t._v("当然，在有的时候，BSON相对JSON来说也并没有空间上的优势，比如对{“field”:7}，在JSON的存储上7只使用了一个字节，而如果用BSON，那就是至少4个字节（32位）")]),t._v(" "),e("h3",{attrs:{id:"性能对比"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#性能对比"}},[t._v("#")]),t._v(" 性能对比")]),t._v(" "),e("blockquote",[e("p",[t._v("PostgreSQL在NoSQL方面的表现确实抢眼。PostgreSQL不仅是SQL+NoSQL+ACID的完美组合，性能还比MongoDB技高一筹（分布式集群上MongoDB更有优势）")])]),t._v(" "),e("p",[t._v("进行了一下Mongodb亿级数据量的性能测试，分别测试如下几个项目： （所有插入都是单线程进行，所有读取都是多线程进行）")]),t._v(" "),e("p",[t._v("1） 普通插入性能 （插入的数据每条大约在1KB左右）")]),t._v(" "),e("p",[t._v("2） 批量插入性能 （使用的是官方C#客户端的InsertBatch），这个测的是批量插入性能能有多少提高")]),t._v(" "),e("p",[t._v("3） 安全插入功能 （确保插入成功，使用的是SafeMode.True开关），这个测的是安全插入性能会差多少")]),t._v(" "),e("p",[t._v("4） 查询一个索引后的数字列，返回10条记录（也就是10KB）的性能，这个测的是索引查询的性能")]),t._v(" "),e("p",[t._v("5） 查询两个索引后的数字列，返回10条记录（每条记录只返回20字节左右的2个小字段）的性能，这个测的是返回小数据量以及多一个查询条件对性能的影响")]),t._v(" "),e("p",[t._v("6）\n查询一个索引后的数字列，按照另一个索引的日期字段排序（索引建立的时候是倒序，排序也是倒序），并且Skip100条记录后返回10条记录的性能，这个测的是Skip和Order对性能的影响")]),t._v(" "),e("p",[t._v("7） 查询100条记录（也就是100KB）的性能（没有排序，没有条件），这个测的是大数据量的查询结果对性能的影响")]),t._v(" "),e("p",[t._v("8） 统计随着测试的进行，总磁盘占用，索引磁盘占用以及数据磁盘占用的数量")]),t._v(" "),e("p",[t._v("并且每一种测试都使用单进程的Mongodb和同一台服务器开三个Mongodb进程作为Sharding（每一个进程大概只能用7GB左右的内存）两种方案")]),t._v(" "),e("p",[t._v("其实对于Sharding，虽然是一台机器放3个进程，但是在查询的时候每一个并行进程查询部分数据，再有运行于另外一个机器的mongos来汇总数据，理论上来说在某些情况下性能会有点提高")]),t._v(" "),e("p",[t._v("基于以上的种种假设，猜测某些情况性能会下降，某些情况性能会提高，那么来看一下最后的测试结果怎么样？")]),t._v(" "),e("p",[t._v("备注：测试的存储服务器是 E5620 @ 2.40GHz，24GB内存，CentOs操作系统，打压机器是E5504 @\n2.0GHz，4GB内存，Windows Server 2003操作系统，两者千兆网卡直连。")]),t._v(" "),e("p",[e("img",{attrs:{src:"/images/db/db-postgre-11.jpg",alt:""}})]),t._v(" "),e("ul",[e("li",[t._v("数据加载")])]),t._v(" "),e("p",[t._v("从服务端资源消耗的角度看，是MongoDB的性能是PostgreSQL的2倍。但是如果数据加载不能很好的并发展开，让mongoimport成为了瓶颈，那应该算打平。\n另外，EnterpriseDB的数据加载的测试结果和我的结果差异比较大，可能是因为EnterpriseDB的测试中，数据量超过了系统内存量，IO对测试结果的影响开始显现。")]),t._v(" "),e("ul",[e("li",[t._v("数据插入")])]),t._v(" "),e("p",[t._v("从服务端资源消耗的角度看，两者其实相差不大。EnterpriseDB的测试结果被mongo客户端的性能瓶颈绑架了。")]),t._v(" "),e("ul",[e("li",[t._v("数据查询")])]),t._v(" "),e("p",[t._v("对无匹配数据(或少量匹配数据)的索引查询，PostgreSQL的性能是MongoDB的4倍(这一点也有点令人不解，同样是走索引的单点查询，为什么差距就这么大呢？)。\n虽然EnterpriseDB的测试结果也表明PostgreSQL的性能是MongoDB 4倍左右，但EnterpriseDB的测试方法是有问题的。")]),t._v(" "),e("ul",[e("li",[t._v("数据大小 MongoDB的数据大小大约是PostgreSQL的3倍，这和EnterpriseDB的测试结果是一致的。")])]),t._v(" "),e("p",[t._v("这里推荐看两篇文章：")]),t._v(" "),e("ul",[e("li",[t._v("https://www.cnblogs.com/lovecindywang/archive/2011/03/02/1969324.html")]),t._v(" "),e("li",[t._v("http://blog.chinaunix.net/uid-20726500-id-4960138.html")])]),t._v(" "),e("h2",{attrs:{id:"postgresql搭建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#postgresql搭建"}},[t._v("#")]),t._v(" PostgreSQL搭建")]),t._v(" "),e("h3",{attrs:{id:"服务端-下载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#服务端-下载"}},[t._v("#")]),t._v(" 服务端 - 下载")]),t._v(" "),e("blockquote",[e("p",[t._v("下载最新的12.0版本")])]),t._v(" "),e("p",[t._v("URL： https://www.postgresql.org/download/linux/redhat/")]),t._v(" "),e("p",[e("img",{attrs:{src:"/images/db/db-postgre-1.png",alt:""}})]),t._v(" "),e("p",[t._v("安装的步骤很简单，当然如果你遇到问题，可以看这两篇文章")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.cnblogs.com/Yatces/p/11082061.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Centos7安装postgresql9.4在新窗口打开"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.jianshu.com/p/b4a759c2208f",target:"_blank",rel:"noopener noreferrer"}},[t._v("centos7 安装postgresql11在新窗口打开"),e("OutboundLink")],1)])]),t._v(" "),e("h3",{attrs:{id:"客户端-pgadmin4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#客户端-pgadmin4"}},[t._v("#")]),t._v(" 客户端 - pgAdmin4")]),t._v(" "),e("blockquote",[e("p",[t._v("pgAdmin 4是一款为PostgreSQL设计的可靠和全面的数据库设计和管理软件，")]),t._v(" "),e("ul",[e("li",[t._v("它允许您连接到特定的数据库，创建表和运行各种从简单到复杂的SQL语句。")]),t._v(" "),e("li",[t._v("它支持的操作系统包括Linux，Windows，Mac OS X。")])])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("最新版本")])])]),t._v(" "),e("p",[t._v("最新的版本是v4.18，官方网站是 "),e("a",{attrs:{href:"https://www.pgadmin.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.pgadmin.org/"),e("OutboundLink")],1),e("a",{attrs:{href:"https://www.pgadmin.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("在新窗口打开"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("img",{attrs:{src:"/images/db/db-postgre-4.png",alt:""}})]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("安装和使用")])])]),t._v(" "),e("p",[t._v("这里使用的pgAdmin 4是安装PostgreSQL数据库时自带的，在安装包解压后的目录可以看到客户端工具pgAdmin 4。")]),t._v(" "),e("p",[e("img",{attrs:{src:"/images/db/db-postgre-3.jpg",alt:""}})]),t._v(" "),e("p",[t._v("连接之后是这样的")]),t._v(" "),e("p",[e("img",{attrs:{src:"/images/db/db-postgre-2.jpg",alt:""}})]),t._v(" "),e("p",[t._v("PgAdmin4的使用，推荐看这篇文章："),e("a",{attrs:{href:"https://www.jianshu.com/p/e7fe45a10cee",target:"_blank",rel:"noopener noreferrer"}},[t._v("PostgresSQL客户端pgAdmin4使用在新窗口打开"),e("OutboundLink")],1)]),t._v(" "),e("ul",[e("li",[e("p",[e("strong",[t._v("Pgadmin 与 PGAdmin4的关系")])]),t._v(" "),e("ul",[e("li",[e("p",[t._v("这里文字摘自官网")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("pgAdmin")]),t._v(" is a free software project released under the PostgreSQL/Artistic licence. The software is available in source and binary format from the PostgreSQL mirror network. Because compiling from source requires technical knowledge, we recommend installing binary packages whenever possible.")])])])])]),t._v(" "),e("p",[t._v("The pages in this section give additional details about each binary package\navailable as well as more direct download links. In addition, you can download\nsource tarballs and pgAgent for your servers to enable additional\nfunctionality.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("* **pgAdmin 4** pgAdmin 4 is a complete rewrite of pgAdmin, built using Python and Javascript/jQuery. A desktop runtime written in C++ with Qt allows it to run standalone for individual users, or the web application code may be deployed directly on a webserver for use by one or more users through their web browser. The software has the look and feel of a desktop application whatever the runtime environment is, and vastly improves on pgAdmin III with updated user interface elements, multi-user/web deployment options, dashboards and a more modern design.\n")])])]),e("h2",{attrs:{id:"postgresql-开发使用的例子"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#postgresql-开发使用的例子"}},[t._v("#")]),t._v(" PostgreSQL 开发使用的例子")]),t._v(" "),e("blockquote",[e("p",[t._v("主要技术栈：")]),t._v(" "),e("ul",[e("li",[t._v("JDK 8")]),t._v(" "),e("li",[t._v("Spring Boot")]),t._v(" "),e("li",[t._v("Spring JPA")]),t._v(" "),e("li",[t._v("PostgreSQL")])])]),t._v(" "),e("h3",{attrs:{id:"纯sql例子"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#纯sql例子"}},[t._v("#")]),t._v(" 纯SQL例子")]),t._v(" "),e("blockquote",[e("p",[t._v("可以看这个例子，https://github.com/callicoder/spring-boot-postgresql-jpa-hibernate-\nrest-api-demo")])]),t._v(" "),e("p",[t._v("这个例子中，基本和MySQL使用一致")]),t._v(" "),e("p",[t._v("基础的使用，可以看这个菜鸟教程：https://www.runoob.com/postgresql/postgresql-select-\ndatabase.html")]),t._v(" "),e("h3",{attrs:{id:"包含nosql-jsonb-例子"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#包含nosql-jsonb-例子"}},[t._v("#")]),t._v(" 包含NoSQL（JsonB）例子")]),t._v(" "),e("blockquote",[e("p",[t._v("本例子可以参看 https://github.com/brant-hwang/springboot-\npostgresql94-hibernate5-example，\n但是这里面pg版本是老的9.4，要知道9.4是刚刚支持JsonB。现在的版本2020-2月份更新的是12.0，对应的驱动版本是42.2.10。")])]),t._v(" "),e("ul",[e("li",[t._v("License")])]),t._v(" "),e("p",[t._v("另外注意下，这个驱动的版本是：BSD 2-clause")]),t._v(" "),e("ul",[e("li",[t._v("最新的Mvn包")])]),t._v(" "),e("div",{staticClass:"language-xml line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- https://mvnrepository.com/artifact/org.postgresql/postgresql --\x3e")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.postgresql"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("postgresql"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("42.2.10"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br")])]),e("h2",{attrs:{id:"postgresql-推荐资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#postgresql-推荐资料"}},[t._v("#")]),t._v(" PostgreSQL 推荐资料")]),t._v(" "),e("blockquote",[e("p",[t._v("pg官方资料基本可以从这里找到")])]),t._v(" "),e("ul",[e("li",[t._v("官方网站 https://www.postgresql.org")]),t._v(" "),e("li",[t._v("官方文档 https://www.postgresql.org/docs/")])]),t._v(" "),e("blockquote",[e("p",[t._v("注意了，官方还有一个中文文档，最新版本是pg 11.2")])]),t._v(" "),e("p",[e("a",{attrs:{href:"http://www.postgres.cn/docs/11/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("PostgreSQL 11.2 手册在新窗口打开"),e("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=n.exports}}]);