(window.webpackJsonp=window.webpackJsonp||[]).push([[220],{550:function(t,a,s){"use strict";s.r(a);var v=s(4),l=Object(v.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"mysql-主从复制与读写分离"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql-主从复制与读写分离"}},[t._v("#")]),t._v(" MySQL - 主从复制与读写分离")]),t._v(" "),a("h2",{attrs:{id:"主从复制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主从复制"}},[t._v("#")]),t._v(" 主从复制")]),t._v(" "),a("p",[t._v("主要涉及三个线程: binlog 线程、I/O 线程和 SQL 线程。")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("binlog 线程")]),t._v(" : 负责将主服务器上的数据更改写入二进制日志中。")]),t._v(" "),a("li",[a("strong",[t._v("I/O 线程")]),t._v(" : 负责从主服务器上读取二进制日志，并写入从服务器的中继日志中。")]),t._v(" "),a("li",[a("strong",[t._v("SQL 线程")]),t._v(" : 负责读取中继日志并重放其中的 SQL 语句。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/willpast/image/blog/ka_java/master-slave.png",alt:"img"}})]),t._v(" "),a("h2",{attrs:{id:"读写分离"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#读写分离"}},[t._v("#")]),t._v(" 读写分离")]),t._v(" "),a("p",[t._v("主服务器处理写操作以及实时性要求比较高的读操作，而从服务器处理读操作。")]),t._v(" "),a("p",[t._v("读写分离能提高性能的原因在于:")]),t._v(" "),a("ul",[a("li",[t._v("主从服务器负责各自的读和写，极大程度缓解了锁的争用；")]),t._v(" "),a("li",[t._v("从服务器可以使用 MyISAM，提升查询性能以及节约系统开销；")]),t._v(" "),a("li",[t._v("增加冗余，提高可用性。")])]),t._v(" "),a("p",[t._v("读写分离常用代理方式来实现，代理服务器接收应用层传来的读写请求，然后决定转发到哪个服务器。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/willpast/image/blog/ka_java/master-slave-proxy.png",alt:"img"}})])])}),[],!1,null,null,null);a.default=l.exports}}]);