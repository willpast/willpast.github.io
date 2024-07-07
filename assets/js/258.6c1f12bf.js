(window.webpackJsonp=window.webpackJsonp||[]).push([[258],{590:function(o,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},(function(){var o=this,t=o._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[t("h1",{attrs:{id:"mongo进阶-mongodb体系结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mongo进阶-mongodb体系结构"}},[o._v("#")]),o._v(" Mongo进阶 - MongoDB体系结构")]),o._v(" "),t("blockquote",[t("p",[o._v("上面章节已经对MongoDB生态中工具以及使用有了基础，后续文章我们将开始理解MongoDB是如何支撑这些功能的。我们将从最基本的MongoDB的体系结构开始介绍，主要包括"),t("code",[o._v("MongoDB的包结构")]),o._v("，"),t("code",[o._v("MongoDB的数据逻辑结构")]),o._v("，"),t("code",[o._v("MongoDB的数据文件结构")]),o._v("。其中围绕着MongoDB的数据文件结构，将为我们后续介绍MongoDB的存储引擎详解打下基础。")])]),o._v(" "),t("h2",{attrs:{id:"mongodb包组件结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mongodb包组件结构"}},[o._v("#")]),o._v(" MongoDB包组件结构")]),o._v(" "),t("blockquote",[t("p",[o._v("主要是MongoDB数据库服务以及一些工具。")])]),o._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/willpast/image/blog/ka_java/mongo-y-arch-1.png",alt:"img"}})]),o._v(" "),t("p",[o._v("回顾下我们在MongoDB生态中展示的"),t("a",{attrs:{href:"https://docs.mongodb.com/database-tools/",target:"_blank",rel:"noopener noreferrer"}},[o._v("MongoDB Database\nTools在新窗口打开"),t("OutboundLink")],1)]),o._v(" "),t("ul",[t("li",[o._v("二进制导入导出\n"),t("ul",[t("li",[t("code",[o._v("mongodump")]),o._v(" Creates a binary export of the contents of a mongod database.")]),o._v(" "),t("li",[t("code",[o._v("mongorestore")]),o._v(" Restores data from a mongodump database dump into a mongod or mongos")]),o._v(" "),t("li",[t("code",[o._v("bsondump")]),o._v(" Converts BSON dump files into JSON.")])])]),o._v(" "),t("li",[o._v("数据导入导出\n"),t("ul",[t("li",[t("code",[o._v("mongoimport")]),o._v(" Imports content from an Extended JSON, CSV, or TSV export file.")]),o._v(" "),t("li",[t("code",[o._v("mongoexport")]),o._v(" Produces a JSON or CSV export of data stored in a mongod instance.")])])]),o._v(" "),t("li",[o._v("诊断工具\n"),t("ul",[t("li",[t("code",[o._v("mongostat")]),o._v(" Provides a quick overview of the status of a currently running mongod or mongos instance.")]),o._v(" "),t("li",[t("code",[o._v("mongotop")]),o._v(" Provides an overview of the time a mongod instance spends reading and writing data.")])])]),o._v(" "),t("li",[o._v("GridFS 工具\n"),t("ul",[t("li",[t("code",[o._v("mongofiles")]),o._v(" Supports manipulating files stored in your MongoDB instance in GridFS objects.")])])])]),o._v(" "),t("p",[o._v("除了上述没有列举到，还有：")]),o._v(" "),t("ul",[t("li",[t("code",[o._v("mongoperf")]),o._v(": mongoDB自带工具，用于评估磁盘随机IO性能。")])]),o._v(" "),t("p",[o._v("包组件可以在[官网MongoDB Package\nComponents在新窗口打开](https://docs.mongodb.com/manual/reference/program/#mongodb-\npackage-components)找到详细的用法。")]),o._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/willpast/image/blog/ka_java/mongo-y-arch-3.png",alt:"img"}})]),o._v(" "),t("p",[o._v("其中最主要的程序当然是mongod（数据库服务），mongod在不同的部署方案中（单机部署，副本集部署，分片集群部署），通过不同的配置，可以扮演多种不同的角色：")]),o._v(" "),t("ul",[t("li",[o._v("在单机部署中扮演 数据库服务器（提供所有读写功能）")]),o._v(" "),t("li",[o._v("在副本集部署中，通过配置，可以部署为 primary节点（主服务器，负责写数据，也可以提供查询）、secondary节点（从服务器，它从主节点复制数据，也可以提供查询）、以及arbiter节点（仲裁节点，不保存数据，主要用于参与选举投票）")]),o._v(" "),t("li",[o._v("在分片集群中，除了在每个分片中扮演上述角色外，还扮演着配置服务器的角色（存储有分片集群的所有元数据信息，mongos的数据路由分发等都要依赖于它）")])]),o._v(" "),t("p",[o._v("在一台服务器上，可以启动多个mongod服务。但在实际生产部署中，通常还是建议一台服务器部署一个mongod实例，这样不仅减少资源竞争，而且服务器故障也不会同时影响到多个服务。")]),o._v(" "),t("h2",{attrs:{id:"mongodb数据逻辑结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mongodb数据逻辑结构"}},[o._v("#")]),o._v(" MongoDB数据逻辑结构")]),o._v(" "),t("p",[o._v("MongoDB 数据逻辑结构分为数据库（database）、集合（collection）、文档（document）三层 :")]),o._v(" "),t("ul",[t("li",[o._v("一个mongod实例中允许创建多个数据库。")]),o._v(" "),t("li",[o._v("一个数据库中允许创建多个集合（集合相当于关系型数据库的表）。")]),o._v(" "),t("li",[o._v("一个集合则是由若干个文档构成（文档相当于关系型数据库的行，是MongoDB中数据的基本单元）。")])]),o._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/willpast/image/blog/ka_java/mongo-y-arch-2.png",alt:"img"}})]),o._v(" "),t("h3",{attrs:{id:"数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据库"}},[o._v("#")]),o._v(" 数据库")]),o._v(" "),t("blockquote",[t("p",[o._v("一个数据库中可以创建多个集合，原则上我们通常把逻辑相近的集合都放在一个数据库中，当然出于性能或者数据量的关系，也可能进行拆分。")])]),o._v(" "),t("p",[o._v("在MongoDB中有几个内建的数据库：")]),o._v(" "),t("ul",[t("li",[t("strong",[o._v("admin")]),o._v(" admin库主要存放有数据库帐号相关信息。")]),o._v(" "),t("li",[t("strong",[o._v("local")]),o._v(" local数据库永远不会被复制到从节点，可以用来存储限于本地单台服务器的任意集合副本集的配置信息、oplog就存储在local库中。\n"),t("ul",[t("li",[o._v("重要的数据不要存储在local库，因为没有冗余副本，如果这个节点故障，存储在local库的数据就无法正常使用了。")])])]),o._v(" "),t("li",[t("strong",[o._v("config")]),o._v(" config数据库用于分片集群环境，存放了分片相关的元数据信息。")]),o._v(" "),t("li",[t("strong",[o._v("test")]),o._v(" MongoDB默认创建的一个测试库，连接mongod服务时，如果不指定连接的具体数据库，默认就会连接到test库。")])]),o._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/willpast/image/blog/ka_java/mongo-y-arch-4.png",alt:"img"}})]),o._v(" "),t("h3",{attrs:{id:"集合"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#集合"}},[o._v("#")]),o._v(" 集合")]),o._v(" "),t("blockquote",[t("p",[o._v("集合由若干条文档记录构成。")])]),o._v(" "),t("ul",[t("li",[o._v("前面介绍MongoDB的时候提到过，集合是"),t("strong",[o._v("schema-less")]),o._v(" 的（无模式或动态模式），这意味着集合不需要在读写数据前创建模式就可以使用，集合中的文档也可以拥有不同的字段，随时可以任意增减某个文档的字段。")]),o._v(" "),t("li",[o._v("在集合上可以对文档进行"),t("strong",[o._v("增删改查")]),o._v(" 以及进行"),t("strong",[o._v("聚合")]),o._v(" 操作。")]),o._v(" "),t("li",[o._v("在集合上还可以对文档中的字段创建"),t("strong",[o._v("索引")]),o._v(" 。")]),o._v(" "),t("li",[o._v("除了一般的集合外，还可以创建一种叫做**定容集合（capped collection）**类型的集合，这种集合与一般集合主要的区别是，它可以限制集合的容量大小，在数据写满的时候，又可以从头开始覆盖最开始的文档进行循环写入。")]),o._v(" "),t("li",[t("strong",[o._v("副本集")]),o._v(" 就是利用这种类型的集合作为"),t("strong",[o._v("oplog")]),o._v(" ，记录primary节点上的写操作，并且同步到从"),t("strong",[o._v("节点重放，以实现主副节点数据复制的功能")]),o._v(" 。")])]),o._v(" "),t("h3",{attrs:{id:"文档"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文档"}},[o._v("#")]),o._v(" 文档")]),o._v(" "),t("blockquote",[t("p",[o._v("文档是MongoDB中数据的基本存储单元，它以一种叫做BSON文档的结构表示。BSON，即Binary\nJSON，多个键及其关联的值有序地存放在其中，类似映射，散列或字典。")])]),o._v(" "),t("ul",[t("li",[o._v("文档中的键/值对是有序的，不同序则是不同文档。并且键是区分大小写的，否则也为不同文档。")]),o._v(" "),t("li",[o._v("文档的键是字符串，而值除了字符串，还可以是int, long, double，boolean，子文档，数组等多种类型。")]),o._v(" "),t("li",[o._v("文档中不能有重复的键。")]),o._v(" "),t("li",[o._v("每个文档都有一个"),t("strong",[o._v("默认的_id键")]),o._v(" ，它相当于关系型数据库中的主键，这个键的值在同一个集合中必须是唯一的，"),t("strong",[o._v("_id键值默认是ObjectId类型")]),o._v(" ，在插入文档的时候，如果用户不设置文档的_id值得话，MongoDB会自动生成生成一个唯一的ObjectId值进行填充。")])]),o._v(" "),t("h2",{attrs:{id:"mongodb数据库文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mongodb数据库文件"}},[o._v("#")]),o._v(" MongoDB数据库文件")]),o._v(" "),t("p",[o._v("注意")]),o._v(" "),t("p",[o._v("MongoDB数据库文件和MongoDB存储的引擎有直接关系，MongoDB一共提供了三种存储引擎：WiredTiger，MMAPV1和In\nMemory；在MongoDB3.2之前采用的是MMAPV1; 后续版本v3.2开始默认采用WiredTiger；\n且在v4.2版本中移除了MMAPV1的引擎。")]),o._v(" "),t("p",[o._v("在后续文章中，还将对MongoDB存储引擎进行详解。")]),o._v(" "),t("h3",{attrs:{id:"mongodb-mmapv1引擎下的数据库文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mongodb-mmapv1引擎下的数据库文件"}},[o._v("#")]),o._v(" MongoDB - MMAPv1引擎下的数据库文件")]),o._v(" "),t("blockquote",[t("p",[o._v("由于v3.0后续版本已经弃用了，所以这里不会详细介绍。")])]),o._v(" "),t("ul",[t("li",[o._v("journal 日志文件")]),o._v(" "),t("li",[o._v("namespace 表名文件")]),o._v(" "),t("li",[o._v("data 数据及索引文件")])]),o._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[o._v("db\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[o._v("|")]),o._v("------journal\n           "),t("span",{pre:!0,attrs:{class:"token operator"}},[o._v("|")]),o._v("----_j.0\n           "),t("span",{pre:!0,attrs:{class:"token operator"}},[o._v("|")]),o._v("----_j.1\n           "),t("span",{pre:!0,attrs:{class:"token operator"}},[o._v("|")]),o._v("----lsn\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[o._v("|")]),o._v("------local\n           "),t("span",{pre:!0,attrs:{class:"token operator"}},[o._v("|")]),o._v("----local.ns\n           "),t("span",{pre:!0,attrs:{class:"token operator"}},[o._v("|")]),o._v("----local.0\n           "),t("span",{pre:!0,attrs:{class:"token operator"}},[o._v("|")]),o._v("----local.1\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[o._v("|")]),o._v("------mydb\n           "),t("span",{pre:!0,attrs:{class:"token operator"}},[o._v("|")]),o._v("----mydb.ns\n           "),t("span",{pre:!0,attrs:{class:"token operator"}},[o._v("|")]),o._v("----mydb.0\n           "),t("span",{pre:!0,attrs:{class:"token operator"}},[o._v("|")]),o._v("----mydb.1\n")])]),o._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[o._v("1")]),t("br"),t("span",{staticClass:"line-number"},[o._v("2")]),t("br"),t("span",{staticClass:"line-number"},[o._v("3")]),t("br"),t("span",{staticClass:"line-number"},[o._v("4")]),t("br"),t("span",{staticClass:"line-number"},[o._v("5")]),t("br"),t("span",{staticClass:"line-number"},[o._v("6")]),t("br"),t("span",{staticClass:"line-number"},[o._v("7")]),t("br"),t("span",{staticClass:"line-number"},[o._v("8")]),t("br"),t("span",{staticClass:"line-number"},[o._v("9")]),t("br"),t("span",{staticClass:"line-number"},[o._v("10")]),t("br"),t("span",{staticClass:"line-number"},[o._v("11")]),t("br"),t("span",{staticClass:"line-number"},[o._v("12")]),t("br"),t("span",{staticClass:"line-number"},[o._v("13")]),t("br")])]),t("ul",[t("li",[t("p",[o._v("如果感兴趣可以参看 "),t("a",{attrs:{href:"https://docs.mongodb.com/v3.2/core/mmapv1/",target:"_blank",rel:"noopener noreferrer"}},[o._v("官方文档 - MMAPv1 Storage Engine在新窗口打开"),t("OutboundLink")],1)])]),o._v(" "),t("li",[t("p",[o._v("如果你希望详解了解MongoDB MMAP的引擎（源码级别），你可以参考这篇"),t("a",{attrs:{href:"https://cloud.tencent.com/developer/article/1004385",target:"_blank",rel:"noopener noreferrer"}},[o._v("MongoDB Mmap 引擎分析在新窗口打开"),t("OutboundLink")],1)]),o._v(" "),t("ul",[t("li",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/willpast/image/blog/ka_java/mongo-y-arch-5.png",alt:"img"}})])])])]),o._v(" "),t("h3",{attrs:{id:"mongodb-wiredtiger"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mongodb-wiredtiger"}},[o._v("#")]),o._v(" MongoDB - WiredTiger")]),o._v(" "),t("blockquote",[t("p",[o._v("MongoDB v3.2已经将WiredTiger设置为了默认的存储引擎")])]),o._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/willpast/image/blog/ka_java/mongo-y-arch-6.png",alt:"img"}})]),o._v(" "),t("ul",[t("li",[t("code",[o._v("collection-*.wt")]),o._v(" 存储collection的数据")]),o._v(" "),t("li",[t("code",[o._v("index-*.wt")]),o._v(" 存储索引的数据")]),o._v(" "),t("li",[t("code",[o._v("WiredTiger")]),o._v(" 存储基本配置信息")]),o._v(" "),t("li",[t("code",[o._v("WiredTiger.wt")]),o._v(" 存储所有其它collection的元数据信息")]),o._v(" "),t("li",[t("code",[o._v("WiredTiger.lock")]),o._v(" 存储进程ID，用于防止多个进程连接同一个Wiredtiger数据库")]),o._v(" "),t("li",[t("code",[o._v("WiredTiger.turtle")]),o._v(" 存储WiredTiger.wt的元数据信息")]),o._v(" "),t("li",[t("code",[o._v("journal")]),o._v(" 存储Write ahead log")])]),o._v(" "),t("p",[o._v("后续的文章将对WiredTiger存储引擎进行详解。")]),o._v(" "),t("h2",{attrs:{id:"参考文章"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[o._v("#")]),o._v(" 参考文章")]),o._v(" "),t("ul",[t("li",[o._v("https://blog.csdn.net/eagle89/article/details/80606372")]),o._v(" "),t("li",[o._v("https://blog.csdn.net/iteye_19607/article/details/82643225")]),o._v(" "),t("li",[o._v("https://blog.csdn.net/zhaowen25/article/details/41871383")]),o._v(" "),t("li",[o._v("https://zhuanlan.zhihu.com/p/34248254")])])])}),[],!1,null,null,null);t.default=e.exports}}]);