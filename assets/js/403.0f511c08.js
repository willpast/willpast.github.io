(window.webpackJsonp=window.webpackJsonp||[]).push([[403],{735:function(a,n,t){"use strict";t.r(n);var e=t(4),r=Object(e.a)({},(function(){var a=this,n=a._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h1",{attrs:{id:"创建型-生成器-builder"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#创建型-生成器-builder"}},[a._v("#")]),a._v(" 创建型 - 生成器(Builder)")]),a._v(" "),n("blockquote",[n("p",[a._v("本文主要分析设计模式 - 生成器(Builder)，封装一个对象的构造过程，并允许按步骤构造。")])]),a._v(" "),n("h2",{attrs:{id:"意图"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#意图"}},[a._v("#")]),a._v(" 意图")]),a._v(" "),n("p",[a._v("封装一个对象的构造过程，并允许按步骤构造。")]),a._v(" "),n("h2",{attrs:{id:"类图"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#类图"}},[a._v("#")]),a._v(" 类图")]),a._v(" "),n("p",[n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/willpast/image/blog/ka_java/13b0940e-d1d7-4b17-af4f-b70cb0a75e08.png",alt:"img"}})]),a._v(" "),n("h2",{attrs:{id:"实现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#实现"}},[a._v("#")]),a._v(" 实现")]),a._v(" "),n("p",[a._v("以下是一个简易的 StringBuilder 实现，参考了 JDK 1.8 源码。")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[a._v("public class AbstractStringBuilder {\n    protected char[] value;\n\n    protected int count;\n\n    public AbstractStringBuilder(int capacity) {\n        count = 0;\n        value = new char[capacity];\n    }\n\n    public AbstractStringBuilder append(char c) {\n        ensureCapacityInternal(count + 1);\n        value[count++] = c;\n        return this;\n    }\n\n    private void ensureCapacityInternal(int minimumCapacity) {\n        // overflow-conscious code\n        if (minimumCapacity - value.length > 0)\n            expandCapacity(minimumCapacity);\n    }\n\n    void expandCapacity(int minimumCapacity) {\n        int newCapacity = value.length * 2 + 2;\n        if (newCapacity - minimumCapacity < 0)\n            newCapacity = minimumCapacity;\n        if (newCapacity < 0) {\n            if (minimumCapacity < 0) // overflow\n                throw new OutOfMemoryError();\n            newCapacity = Integer.MAX_VALUE;\n        }\n        value = Arrays.copyOf(value, newCapacity);\n    }\n}\n\n\n\npublic class StringBuilder extends AbstractStringBuilder {\n    public StringBuilder() {\n        super(16);\n    }\n\n    @Override\n    public String toString() {\n        // Create a copy, don't share the array\n        return new String(value, 0, count);\n    }\n}\n\n\n\npublic class Client {\n    public static void main(String[] args) {\n        StringBuilder sb = new StringBuilder();\n        final int count = 26;\n        for (int i = 0; i < count; i++) {\n            sb.append((char) ('a' + i));\n        }\n        System.out.println(sb.toString());\n    }\n}\n\n\n\nabcdefghijklmnopqrstuvwxyz\n")])])]),n("h2",{attrs:{id:"jdk"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#jdk"}},[a._v("#")]),a._v(" JDK")]),a._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"http://docs.oracle.com/javase/8/docs/api/java/lang/StringBuilder.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("java.lang.StringBuilder在新窗口打开"),n("OutboundLink")],1)]),a._v(" "),n("li",[n("a",{attrs:{href:"http://docs.oracle.com/javase/8/docs/api/java/nio/ByteBuffer.html#put-byte-",target:"_blank",rel:"noopener noreferrer"}},[a._v("java.nio.ByteBuffer在新窗口打开"),n("OutboundLink")],1)]),a._v(" "),n("li",[n("a",{attrs:{href:"http://docs.oracle.com/javase/8/docs/api/java/lang/StringBuffer.html#append-boolean-",target:"_blank",rel:"noopener noreferrer"}},[a._v("java.lang.StringBuffer在新窗口打开"),n("OutboundLink")],1)]),a._v(" "),n("li",[n("a",{attrs:{href:"http://docs.oracle.com/javase/8/docs/api/java/lang/Appendable.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("java.lang.Appendable在新窗口打开"),n("OutboundLink")],1)]),a._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/apache/camel/tree/0e195428ee04531be27a0b659005e3aa8d159d23/camel-core/src/main/java/org/apache/camel/builder",target:"_blank",rel:"noopener noreferrer"}},[a._v("Apache Camel builders在新窗口打开"),n("OutboundLink")],1)])]),a._v(" "),n("h2",{attrs:{id:"参考"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[a._v("#")]),a._v(" 参考")]),a._v(" "),n("ul",[n("li",[a._v("生成器(Builder) https://www.jianshu.com/p/5d34a496e517")]),a._v(" "),n("li",[a._v("生成器(Builder)- 最易懂的设计模式解析 https://www.jianshu.com/p/7deb64f902db")])]),a._v(" "),n("h2",{attrs:{id:"总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[a._v("#")]),a._v(" 总结")]),a._v(" "),n("blockquote",[n("p",[a._v("知识点的东西在上面参考文章中写的非常详细，读完之后问自己下面几个问题，直到可以流利的回答。")])]),a._v(" "),n("ul",[n("li",[n("p",[a._v("使用的场景?")])]),a._v(" "),n("li",[n("p",[a._v("本质是什么?")])]),a._v(" "),n("li",[n("p",[a._v("它解决了什么问题?")])]),a._v(" "),n("li",[n("p",[a._v("它体现了设计模式中什么原则?")])]),a._v(" "),n("li",[n("p",[a._v("存在的缺陷?")])]),a._v(" "),n("li",[n("p",[a._v("你认为与它相关的设计模式有哪些? 它们之间的区别有哪些?")])]),a._v(" "),n("li",[n("p",[a._v("*开源架构中哪些使用了这一模式?")])])])])}),[],!1,null,null,null);n.default=r.exports}}]);