(window.webpackJsonp=window.webpackJsonp||[]).push([[336],{665:function(v,_,t){"use strict";t.r(_);var a=t(4),s=Object(a.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"正则表达式-知识点学习"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#正则表达式-知识点学习"}},[v._v("#")]),v._v(" 正则表达式 - 知识点学习")]),v._v(" "),_("blockquote",[_("p",[v._v("正则表达式用于文本内容的查找和替换, 通常了解下，具体使用的时候查看下即可。")])]),v._v(" "),_("h2",{attrs:{id:"常用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#常用"}},[v._v("#")]),v._v(" 常用")]),v._v(" "),_("p",[_("strong",[v._v("Java")])]),v._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v('Pattern p_script = Pattern.compile("正则表达式", Pattern.CASE_INSENSITIVE);\nMatcher m_script = p_script.matcher(content);\nwhile (m_script.find()) {\n  // 找到匹配内容，进行后续事情\n  String strAid = m_script.group(1);\n  // ...\n}\n')])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br"),_("span",{staticClass:"line-number"},[v._v("2")]),_("br"),_("span",{staticClass:"line-number"},[v._v("3")]),_("br"),_("span",{staticClass:"line-number"},[v._v("4")]),_("br"),_("span",{staticClass:"line-number"},[v._v("5")]),_("br"),_("span",{staticClass:"line-number"},[v._v("6")]),_("br"),_("span",{staticClass:"line-number"},[v._v("7")]),_("br")])]),_("p",[_("strong",[v._v("Matcher类的常用方法")]),v._v(" :")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("matches(): 返回整个目标字符串与Pattern是否匹配")])]),v._v(" "),_("li",[_("p",[v._v("find(): 返回与Pattern匹配的下一个子串")])]),v._v(" "),_("li",[_("p",[v._v("group(): 返回上一次与Pattern匹配的子串中的内容。group是针对()来说的，group(0)就是指的整个串，group(1) 指的是第一个括号里的东西，group(2)指的第二个括号里的东西")])]),v._v(" "),_("li",[_("p",[v._v("start(): 返回上一次与Pattern匹配的子串在目标字符串中的开始位置。")])]),v._v(" "),_("li",[_("p",[v._v("end(): 返回上一次与Pattern匹配的子串在目标字符串中的结束位置加1。")])])]),v._v(" "),_("p",[_("strong",[v._v("正则表达式语法")])]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("元字符")]),v._v(" "),_("th",[v._v("描述")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[_("code",[v._v("\\")])]),v._v(" "),_("td")])])]),v._v(" "),_("p",[v._v("将下一个字符标记符、或一个向后引用、或一个八进制转义符。例如，“"),_("code",[v._v("\\\\n")]),v._v("”匹配\\n。“"),_("code",[v._v("\\n")]),v._v("”匹配换行符。序列“"),_("code",[v._v("\\\\")]),v._v("”匹配“"),_("code",[v._v("\\")]),v._v("”而“"),_("code",[v._v("\\(")]),v._v("”则匹配“"),_("code",[v._v("(")]),v._v("”。即相当于多种编程语言中都有的“转义字符”的概念。"),_("br"),v._v(" "),_("code",[v._v("^")]),v._v("| 匹配输入字符串的开始位置。如果设置了RegExp对象的Multiline属性，"),_("code",[v._v("^")]),v._v("也匹配“"),_("code",[v._v("\\n")]),v._v("”或“"),_("code",[v._v("\\")]),v._v("r”之后的位置。"),_("br"),v._v(" "),_("code",[v._v("$")]),v._v("| 匹配输入字符串的结束位置。如果设置了RegExp对象的Multiline属性，$也匹配“\\n”或“\\r”之前的位置。"),_("br"),v._v(" "),_("code",[v._v("*")]),v._v("| 匹配前面的子表达式任意次。例如，zo*能匹配“z”，“zo”以及“zoo”。"),_("em",[v._v("等价于"),_("code",[v._v("{0,}")]),_("br"),v._v(" "),_("code",[v._v("+")]),v._v("| 匹配前面的子表达式一次或多次(大于等于1次)。例如，“zo+”能匹配“zo”以及“zoo”，但不能匹配“z”。+等价于"),_("code",[v._v("{1,}")]),v._v("。"),_("br"),v._v(" "),_("code",[v._v("?")]),v._v("| 匹配前面的子表达式零次或一次。例如，“do(es)?”可以匹配“do”或“does”中的“do”。?等价于"),_("code",[v._v("{0,1}")]),v._v("。"),_("br"),v._v(" "),_("code",[v._v("{n}")]),v._v("| n是一个非负整数。匹配确定的n次。例如，“"),_("code",[v._v("o{2}")]),v._v("”不能匹配“Bob”中的“o”，但是能匹配“food”中的两个o。"),_("br"),v._v(" "),_("code",[v._v("{n,}")]),v._v("|\nn是一个非负整数。至少匹配n次。例如，“"),_("code",[v._v("o{2,}")]),v._v("”不能匹配“Bob”中的“o”，但能匹配“foooood”中的所有o。“"),_("code",[v._v("o{1,}")]),v._v("”等价于“o+”。“"),_("code",[v._v("o{0,}")]),v._v("”则等价于“o")]),v._v("”。"),_("br"),v._v(" "),_("code",[v._v("{n,m}")]),v._v("|\nm和n均为非负整数，其中n<=m。最少匹配n次且最多匹配m次。例如，“"),_("code",[v._v("o{1,3}")]),v._v("”将匹配“fooooood”中的前三个o。“"),_("code",[v._v("o{0,1}")]),v._v("”等价于“o?”。请注意在逗号和两个数之间不能有空格。"),_("br"),v._v(" "),_("code",[v._v("x|y")]),v._v("| 匹配x或y。例如，“z"),_("br"),v._v(" "),_("code",[v._v("[xyz]")]),v._v("| 字符集合。匹配所包含的任意一个字符。例如，“"),_("code",[v._v("[abc]")]),v._v("”可以匹配“plain”中的“a”。"),_("br"),v._v(" "),_("code",[v._v("[^xyz]")]),v._v("| 负值字符集合。匹配未包含的任意字符。例如，“"),_("code",[v._v("[^abc]")]),v._v("”可以匹配“plain”中的“plin”。"),_("br"),v._v(" "),_("code",[v._v("[a-z]")]),v._v("| 字符范围。匹配指定范围内的任意字符。例如，“"),_("code",[v._v("[a-z]")]),v._v("”可以匹配“a”到“z”范围内的任意小写字母字符。"),_("br"),v._v(" "),_("code",[v._v("[^a-z]")]),v._v("| 负值字符范围。匹配任何不在指定范围内的任意字符。例如，“"),_("code",[v._v("[^a-z]")]),v._v("”可以匹配任何不在“a”到“z”范围内的任意字符。"),_("br"),v._v(" "),_("code",[v._v(".")]),v._v("| 可以匹配任何字符"),_("br"),v._v(" "),_("code",[v._v("\\d")]),v._v("| 匹配一个数字字符。等价于"),_("code",[v._v("[0-9]")]),_("br"),v._v(" "),_("code",[v._v("\\D")]),v._v("| 匹配一个非数字字符。等价于"),_("code",[v._v("[^0-9]")]),_("br"),v._v(" "),_("code",[v._v("\\s")]),v._v("| 匹配所有的空白字符，包括空格、制表符、换页符、换行符、回车符 等等。等价于"),_("code",[v._v("[ \\f\\n\\r\\t\\v]")]),v._v("。"),_("br"),v._v(" "),_("code",[v._v("\\S")]),v._v("| 匹配所有的非空白字符")]),v._v(" "),_("h2",{attrs:{id:"匹配单个字符"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#匹配单个字符"}},[v._v("#")]),v._v(" 匹配单个字符")]),v._v(" "),_("p",[_("strong",[v._v(".")]),v._v(" 可以用来匹配任何的单个字符，但是在绝大多数实现里面，不能匹配换行符；")]),v._v(" "),_("p",[_("strong",[v._v(".")]),v._v(" 是元字符，表示它有特殊的含义，而不是字符本身的含义。如果需要匹配 . ，那么要用 \\ 进行转义，即在 . 前面加上 \\ 。")]),v._v(" "),_("p",[v._v("正则表达式一般是区分大小写的，但是也有些实现是不区分。")]),v._v(" "),_("p",[_("strong",[v._v("正则表达式")])]),v._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("    nam.\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br")])]),_("p",[_("strong",[v._v("匹配结果")])]),v._v(" "),_("p",[v._v("My "),_("strong",[v._v("name")]),v._v(" is Zheng.")]),v._v(" "),_("h2",{attrs:{id:"匹配一组字符"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#匹配一组字符"}},[v._v("#")]),v._v(" 匹配一组字符")]),v._v(" "),_("p",[_("strong",[v._v("[ ]")]),v._v(" 定义一个字符集合；")]),v._v(" "),_("p",[v._v("0-9、a-z 定义了一个字符区间，区间使用 ASCII 码来确定，字符区间在 [ ] 中使用。")]),v._v(" "),_("p",[_("strong",[v._v("-")]),v._v(" 只有在 [ ] 之间才是元字符，在 [ ] 之外就是一个普通字符；")]),v._v(" "),_("p",[_("strong",[v._v("^")]),v._v(" 在 [ ] 中是取非操作。")]),v._v(" "),_("p",[_("strong",[v._v("应用")])]),v._v(" "),_("p",[v._v("匹配以 abc 为开头，并且最后一个字母不为数字的字符串:")]),v._v(" "),_("p",[_("strong",[v._v("正则表达式")])]),v._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("    abc[^0-9]\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br")])]),_("p",[_("strong",[v._v("匹配结果")])]),v._v(" "),_("ol",[_("li",[_("strong",[v._v("abcd")])]),v._v(" "),_("li",[v._v("abc1")]),v._v(" "),_("li",[v._v("abc2")])]),v._v(" "),_("h2",{attrs:{id:"使用元字符"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#使用元字符"}},[v._v("#")]),v._v(" 使用元字符")]),v._v(" "),_("h3",{attrs:{id:"匹配空白字符"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#匹配空白字符"}},[v._v("#")]),v._v(" 匹配空白字符")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("元字符")]),v._v(" "),_("th",[v._v("说明")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("[\\b]")]),v._v(" "),_("td",[v._v("回退(删除)一个字符")])]),v._v(" "),_("tr",[_("td",[v._v("\\f")]),v._v(" "),_("td",[v._v("换页符")])]),v._v(" "),_("tr",[_("td",[v._v("\\n")]),v._v(" "),_("td",[v._v("换行符")])]),v._v(" "),_("tr",[_("td",[v._v("\\r")]),v._v(" "),_("td",[v._v("回车符")])]),v._v(" "),_("tr",[_("td",[v._v("\\t")]),v._v(" "),_("td",[v._v("制表符")])]),v._v(" "),_("tr",[_("td",[v._v("\\v")]),v._v(" "),_("td",[v._v("垂直制表符")])])])]),v._v(" "),_("p",[v._v("\\r\\n 是 Windows 中的文本行结束标签，在 Unix/Linux 则是 \\n。")]),v._v(" "),_("p",[v._v("\\r\\n\\r\\n 可以匹配 Windows 下的空白行，因为它将匹配两个连续的行尾标签，而这正是两条记录之间的空白行；")]),v._v(" "),_("h3",{attrs:{id:"匹配特定的字符类别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#匹配特定的字符类别"}},[v._v("#")]),v._v(" 匹配特定的字符类别")]),v._v(" "),_("h4",{attrs:{id:"_1-数字元字符"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-数字元字符"}},[v._v("#")]),v._v(" 1. 数字元字符")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("元字符")]),v._v(" "),_("th",[v._v("说明")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("\\d")]),v._v(" "),_("td",[v._v("数字字符，等价于 "),_("code",[v._v("[0-9]")])])]),v._v(" "),_("tr",[_("td",[v._v("\\D")]),v._v(" "),_("td",[v._v("非数字字符，等价于 "),_("code",[v._v("[^0-9]")])])])])]),v._v(" "),_("h4",{attrs:{id:"_2-字母数字元字符"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-字母数字元字符"}},[v._v("#")]),v._v(" 2. 字母数字元字符")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("元字符")]),v._v(" "),_("th",[v._v("说明")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("\\w")]),v._v(" "),_("td",[v._v("大小写字母，下划线和数字，等价于 "),_("code",[v._v("[a-zA-Z0-9\\_]")])])]),v._v(" "),_("tr",[_("td",[v._v("\\W")]),v._v(" "),_("td",[v._v("对 \\w 取非")])])])]),v._v(" "),_("h4",{attrs:{id:"_3-空白字符元字符"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-空白字符元字符"}},[v._v("#")]),v._v(" 3. 空白字符元字符")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("元字符")]),v._v(" "),_("th",[v._v("说明")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("\\s")]),v._v(" "),_("td",[v._v("任何一个空白字符，等价于 "),_("code",[v._v("[\\f\\n\\r\\t\\v]")])])]),v._v(" "),_("tr",[_("td",[v._v("\\S")]),v._v(" "),_("td",[v._v("对 \\s 取非")])])])]),v._v(" "),_("p",[v._v("\\x 匹配十六进制字符，\\0 匹配八进制，例如 \\x0A 对应 ASCII 字符 10，等价于 \\n。")]),v._v(" "),_("h2",{attrs:{id:"重复匹配"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#重复匹配"}},[v._v("#")]),v._v(" 重复匹配")]),v._v(" "),_("ul",[_("li",[_("strong",[_("code",[v._v("\\+")])]),v._v(" 匹配 1 个或者多个字符")]),v._v(" "),_("li",[_("strong",[_("code",[v._v("\\*")])]),v._v(" 匹配 0 个或者多个")]),v._v(" "),_("li",[_("strong",[_("code",[v._v("?")])]),v._v(" 匹配 0 个或者 1 个")])]),v._v(" "),_("p",[_("strong",[v._v("应用")])]),v._v(" "),_("p",[v._v("匹配邮箱地址。")]),v._v(" "),_("p",[_("strong",[v._v("正则表达式")])]),v._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("    [\\w.]+@\\w+\\.\\w+\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br")])]),_("p",[_("code",[v._v("[\\w.]")]),v._v(" 匹配的是字母数字或者 . ，在其后面加上 + ，表示匹配多次。在字符集合 [ ] 里，. 不是元字符；")]),v._v(" "),_("p",[_("strong",[v._v("匹配结果")])]),v._v(" "),_("p",[_("strong",[v._v("abc.def@qq.com")])]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("{n}")]),v._v(" 匹配 n 个字符")]),v._v(" "),_("li",[_("strong",[v._v("{m, n}")]),v._v(" 匹配 m~n 个字符")]),v._v(" "),_("li",[_("strong",[v._v("{m,}")]),v._v(" 至少匹配 m 个字符")])]),v._v(" "),_("p",[_("code",[v._v("\\*")]),v._v(" 和 + 都是贪婪型元字符，会匹配最多的内容。在后面加 ? 可以转换为懒惰型元字符，例如"),_("code",[v._v("\\*?、+? 和 {m, n}?")]),v._v(" 。")]),v._v(" "),_("p",[_("strong",[v._v("正则表达式")])]),v._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("    a.+c\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br")])]),_("p",[v._v("由于 + 是贪婪型的，因此 .+ 会匹配更可能多的内容，所以会把整个 abcabcabc 文本都匹配，而不是只匹配前面的 abc\n文本。用懒惰型可以实现匹配前面的。")]),v._v(" "),_("p",[_("strong",[v._v("匹配结果")])]),v._v(" "),_("p",[_("strong",[v._v("abcabcabc")])]),v._v(" "),_("h2",{attrs:{id:"位置匹配"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#位置匹配"}},[v._v("#")]),v._v(" 位置匹配")]),v._v(" "),_("h3",{attrs:{id:"单词边界"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#单词边界"}},[v._v("#")]),v._v(" 单词边界")]),v._v(" "),_("p",[_("strong",[v._v("\\b")]),v._v(" 可以匹配一个单词的边界，边界是指位于 \\w 和 \\W 之间的位置；"),_("strong",[v._v("\\B")]),v._v(" 匹配一个不是单词边界的位置。")]),v._v(" "),_("p",[v._v("\\b 只匹配位置，不匹配字符，因此 \\babc\\b 匹配出来的结果为 3 个字符。")]),v._v(" "),_("h3",{attrs:{id:"字符串边界"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#字符串边界"}},[v._v("#")]),v._v(" 字符串边界")]),v._v(" "),_("p",[_("strong",[v._v("^")]),v._v(" 匹配整个字符串的开头，"),_("strong",[v._v("$")]),v._v(" 匹配结尾。")]),v._v(" "),_("p",[v._v("^ 元字符在字符集合中用作求非，在字符集合外用作匹配字符串的开头。")]),v._v(" "),_("p",[v._v("分行匹配模式(multiline)下，换行被当做字符串的边界。")]),v._v(" "),_("p",[_("strong",[v._v("应用")])]),v._v(" "),_("p",[v._v("匹配代码中以 // 开始的注释行")]),v._v(" "),_("p",[_("strong",[v._v("正则表达式")])]),v._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("    ^\\s*\\/\\/.*$\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br")])]),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/willpast/image/blog/ka_java/600e9c75-5033-4dad-ae2b-930957db638e.png",alt:"img"}})]),v._v(" "),_("p",[_("strong",[v._v("匹配结果")])]),v._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("     public void fun() {\n      // 注释 1 \n      int a = 1;\n      int b = 2;\n      // 注释 2\n      int c = a + b;\n    }\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br"),_("span",{staticClass:"line-number"},[v._v("2")]),_("br"),_("span",{staticClass:"line-number"},[v._v("3")]),_("br"),_("span",{staticClass:"line-number"},[v._v("4")]),_("br"),_("span",{staticClass:"line-number"},[v._v("5")]),_("br"),_("span",{staticClass:"line-number"},[v._v("6")]),_("br"),_("span",{staticClass:"line-number"},[v._v("7")]),_("br")])]),_("h2",{attrs:{id:"使用子表达式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#使用子表达式"}},[v._v("#")]),v._v(" 使用子表达式")]),v._v(" "),_("p",[v._v("使用 "),_("strong",[v._v("( )")]),v._v(" 定义一个子表达式。子表达式的内容可以当成一个独立元素，即可以将它看成一个字符，并且使用 * 等元字符。")]),v._v(" "),_("p",[v._v("子表达式可以嵌套，但是嵌套层次过深会变得很难理解。")]),v._v(" "),_("p",[_("strong",[v._v("正则表达式")])]),v._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("    (ab){2,}\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br")])]),_("p",[_("strong",[v._v("匹配结果")])]),v._v(" "),_("p",[_("strong",[v._v("ababab")])]),v._v(" "),_("p",[_("strong",[v._v("|")]),v._v(" 是或元字符，它把左边和右边所有的部分都看成单独的两个部分，两个部分只要有一个匹配就行。")]),v._v(" "),_("p",[_("strong",[v._v("正则表达式")])]),v._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("    (19|20)\\d{2}\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br")])]),_("p",[_("strong",[v._v("匹配结果")])]),v._v(" "),_("ol",[_("li",[_("strong",[v._v("1900")])]),v._v(" "),_("li",[_("strong",[v._v("2010")])]),v._v(" "),_("li",[v._v("1020")])]),v._v(" "),_("p",[_("strong",[v._v("应用")])]),v._v(" "),_("p",[v._v("匹配 IP 地址。")]),v._v(" "),_("p",[v._v("IP 地址中每部分都是 0-255 的数字，用正则表达式匹配时以下情况是合法的:")]),v._v(" "),_("ul",[_("li",[v._v("一位数字")]),v._v(" "),_("li",[v._v("不以 0 开头的两位数字")]),v._v(" "),_("li",[v._v("1 开头的三位数")]),v._v(" "),_("li",[v._v("2 开头，第 2 位是 0-4 的三位数")]),v._v(" "),_("li",[v._v("25 开头，第 3 位是 0-5 的三位数")])]),v._v(" "),_("p",[_("strong",[v._v("正则表达式")])]),v._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("    ((25[0-5]|(2[0-4]\\d)|(1\\d{2})|([1-9]\\d)|(\\d))\\.){3}(25[0-5]|(2[0-4]\\d)|(1\\d{2})|([1-9]\\d)|(\\d))\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br")])]),_("p",[_("strong",[v._v("匹配结果")])]),v._v(" "),_("ol",[_("li",[_("strong",[v._v("192.168.0.1")])]),v._v(" "),_("li",[v._v("00.00.00.00")]),v._v(" "),_("li",[v._v("555.555.555.555")])]),v._v(" "),_("h2",{attrs:{id:"回溯引用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#回溯引用"}},[v._v("#")]),v._v(" 回溯引用")]),v._v(" "),_("p",[v._v("回溯引用使用 "),_("strong",[v._v("\\n")]),v._v(" 来引用某个子表达式，其中 n 代表的是子表达式的序号，从 1 开始。它和子表达式匹配的内容一致，比如子表达式匹配到\nabc，那么回溯引用部分也需要匹配 abc 。")]),v._v(" "),_("p",[_("strong",[v._v("应用")])]),v._v(" "),_("p",[v._v("匹配 HTML 中合法的标题元素。")]),v._v(" "),_("p",[_("strong",[v._v("正则表达式")])]),v._v(" "),_("p",[v._v("将回溯引用子表达式 "),_("code",[v._v("(h[1-6])")]),v._v(" 匹配的内容，也就是说必须和子表达式匹配的内容一致。")]),v._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("    <(h[1-6])>\\w*?<\\/\\1>\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br")])]),_("p",[_("strong",[v._v("匹配结果")])]),v._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("  1. **< h1>x</h1>**\n  2. **< h2>x</h2>**\n  3. <h3>x</h1>\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br"),_("span",{staticClass:"line-number"},[v._v("2")]),_("br"),_("span",{staticClass:"line-number"},[v._v("3")]),_("br")])]),_("h3",{attrs:{id:"替换"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#替换"}},[v._v("#")]),v._v(" 替换")]),v._v(" "),_("p",[v._v("需要用到两个正则表达式。")]),v._v(" "),_("p",[_("strong",[v._v("应用")])]),v._v(" "),_("p",[v._v("修改电话号码格式。")]),v._v(" "),_("p",[_("strong",[v._v("文本")])]),v._v(" "),_("p",[v._v("313-555-1234")]),v._v(" "),_("p",[_("strong",[v._v("查找正则表达式")])]),v._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("    (\\d{3})(-)(\\d{3})(-)(\\d{4})\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br")])]),_("p",[_("strong",[v._v("替换正则表达式")])]),v._v(" "),_("p",[v._v("在第一个子表达式查找的结果加上 () ，然后加一个空格，在第三个和第五个字表达式查找的结果中间加上 - 进行分隔。")]),v._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("    ($1) $3-$5\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br")])]),_("p",[_("strong",[v._v("结果")])]),v._v(" "),_("p",[v._v("(313) 555-1234")]),v._v(" "),_("h3",{attrs:{id:"大小写转换"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#大小写转换"}},[v._v("#")]),v._v(" 大小写转换")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("元字符")]),v._v(" "),_("th",[v._v("说明")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("\\l")]),v._v(" "),_("td",[v._v("把下个字符转换为小写")])]),v._v(" "),_("tr",[_("td",[v._v("\\u")]),v._v(" "),_("td",[v._v("把下个字符转换为大写")])]),v._v(" "),_("tr",[_("td",[v._v("\\L")]),v._v(" "),_("td",[v._v("把\\L 和\\E 之间的字符全部转换为小写")])]),v._v(" "),_("tr",[_("td",[v._v("\\U")]),v._v(" "),_("td",[v._v("把\\U 和\\E 之间的字符全部转换为大写")])]),v._v(" "),_("tr",[_("td",[v._v("\\E")]),v._v(" "),_("td",[v._v("结束\\L 或者\\U")])])])]),v._v(" "),_("p",[_("strong",[v._v("应用")])]),v._v(" "),_("p",[v._v("把文本的第二个和第三个字符转换为大写。")]),v._v(" "),_("p",[_("strong",[v._v("文本")])]),v._v(" "),_("p",[v._v("abcd")]),v._v(" "),_("p",[_("strong",[v._v("查找")])]),v._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("    (\\w)(\\w{2})(\\w)\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br")])]),_("p",[_("strong",[v._v("替换")])]),v._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("    $1\\U$2\\E$3\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br")])]),_("p",[_("strong",[v._v("结果")])]),v._v(" "),_("p",[v._v("aBCd")]),v._v(" "),_("h2",{attrs:{id:"前后查找"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#前后查找"}},[v._v("#")]),v._v(" 前后查找")]),v._v(" "),_("p",[v._v("前后查找规定了匹配的内容首尾应该匹配的内容，但是又不包含首尾匹配的内容。向前查找用 "),_("strong",[v._v("?=")]),v._v(" 来定义，它规定了尾部匹配的内容，这个匹配的内容在 ?=\n之后定义。所谓向前查找，就是规定了一个匹配的内容，然后以这个内容为尾部向前面查找需要匹配的内容。向后匹配用 "),_("code",[v._v("?<=")]),v._v(" 定义(注: javaScript\n不支持向后匹配, java 对其支持也不完善)。")]),v._v(" "),_("p",[_("strong",[v._v("应用")])]),v._v(" "),_("p",[v._v("查找出邮件地址 @ 字符前面的部分。")]),v._v(" "),_("p",[_("strong",[v._v("正则表达式")])]),v._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("    \\w+(?=@)\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br")])]),_("p",[_("strong",[v._v("结果")])]),v._v(" "),_("p",[_("strong",[v._v("abc")]),v._v(" @qq.com")]),v._v(" "),_("p",[v._v("对向前和向后查找取非，只要把 = 替换成 ! 即可，比如 (?=) 替换成 (?!) 。取非操作使得匹配那些首尾不符合要求的内容。")]),v._v(" "),_("h2",{attrs:{id:"嵌入条件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#嵌入条件"}},[v._v("#")]),v._v(" 嵌入条件")]),v._v(" "),_("h3",{attrs:{id:"回溯引用条件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#回溯引用条件"}},[v._v("#")]),v._v(" 回溯引用条件")]),v._v(" "),_("p",[v._v("条件判断为某个子表达式是否匹配，如果匹配则需要继续匹配条件表达式后面的内容。")]),v._v(" "),_("p",[_("strong",[v._v("正则表达式")])]),v._v(" "),_("p",[v._v("子表达式 "),_("code",[v._v("(\\\\()")]),v._v(" 匹配一个左括号，其后的 ? 表示匹配 0 个或者 1 个。 ?(1) 为条件，当子表达式 1 匹配时条件成立，需要执行 "),_("code",[v._v("\\)")]),v._v("\n匹配，也就是匹配右括号。")]),v._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("    (\\()?abc(?(1)\\))\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br")])]),_("p",[_("strong",[v._v("结果")])]),v._v(" "),_("ol",[_("li",[_("strong",[v._v("(abc)")])]),v._v(" "),_("li",[_("strong",[v._v("abc")])]),v._v(" "),_("li",[v._v("(abc")])]),v._v(" "),_("h3",{attrs:{id:"前后查找条件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#前后查找条件"}},[v._v("#")]),v._v(" 前后查找条件")]),v._v(" "),_("p",[v._v("条件为定义的首尾是否匹配，如果匹配，则继续执行后面的匹配。注意，首尾不包含在匹配的内容中。")]),v._v(" "),_("p",[_("strong",[v._v("正则表达式")])]),v._v(" "),_("p",[_("code",[v._v("?(?=-)")]),v._v(" 为前向查找条件，只有在以 - 为前向查找的结尾能匹配"),_("code",[v._v("\\d{5}")]),v._v("，才继续匹配 "),_("code",[v._v("-\\d{4}")]),v._v(" 。")]),v._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("    \\d{5}(?(?=-)-\\d{4})\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br")])]),_("p",[_("strong",[v._v("结果")])]),v._v(" "),_("ol",[_("li",[_("strong",[v._v("11111")])]),v._v(" "),_("li",[v._v("22222-")]),v._v(" "),_("li",[_("strong",[v._v("33333-4444")])])]),v._v(" "),_("h2",{attrs:{id:"校验数字的表达式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#校验数字的表达式"}},[v._v("#")]),v._v(" 校验数字的表达式")]),v._v(" "),_("ul",[_("li",[v._v("数字："),_("code",[v._v("^[0-9]*$")])]),v._v(" "),_("li",[v._v("n位的数字："),_("code",[v._v("^\\d{n}$")])]),v._v(" "),_("li",[v._v("至少n位的数字："),_("code",[v._v("^\\d{n,}$")])]),v._v(" "),_("li",[v._v("m-n位的数字："),_("code",[v._v("^\\d{m,n}$")])]),v._v(" "),_("li",[v._v("零和非零开头的数字："),_("code",[v._v("^(0|[1-9][0-9]*)$")])]),v._v(" "),_("li",[v._v("非零开头的最多带两位小数的数字："),_("code",[v._v("^([1-9][0-9]*)+(\\.[0-9]{1,2})?$")])]),v._v(" "),_("li",[v._v("带1-2位小数的正数或负数："),_("code",[v._v("^(\\-)?\\d+(\\.\\d{1,2})$")])]),v._v(" "),_("li",[v._v("正数、负数、和小数："),_("code",[v._v("^(\\-|\\+)?\\d+(\\.\\d+)?$")])]),v._v(" "),_("li",[v._v("有两位小数的正实数："),_("code",[v._v("^[0-9]+(\\.[0-9]{2})?$")])]),v._v(" "),_("li",[v._v("有1~3位小数的正实数："),_("code",[v._v("^[0-9]+(\\.[0-9]{1,3})?$")])]),v._v(" "),_("li",[v._v("非零的正整数："),_("code",[v._v("^[1-9]\\d*$ 或 ^([1-9][0-9]*){1,3}$")]),v._v(" 或 "),_("code",[v._v("^\\+?[1-9][0-9]*$")])]),v._v(" "),_("li",[v._v("非零的负整数："),_("code",[v._v('^\\-[1-9][]0-9"*$')]),v._v(" 或 "),_("code",[v._v("^-[1-9]\\d*$")])]),v._v(" "),_("li",[v._v("非负整数："),_("code",[v._v("^\\d+$")]),v._v(" 或 "),_("code",[v._v("^[1-9]\\d*|0$")])]),v._v(" "),_("li",[v._v("非正整数："),_("code",[v._v("^-[1-9]\\d*|0$")]),v._v(" 或 "),_("code",[v._v("^((-\\d+)|(0+))$")])]),v._v(" "),_("li",[v._v("非负浮点数："),_("code",[v._v("^\\d+(\\.\\d+)?$")]),v._v(" 或 "),_("code",[v._v("^[1-9]\\d*\\.\\d*|0\\.\\d*[1-9]\\d*|0?\\.0+|0$")])]),v._v(" "),_("li",[v._v("非正浮点数："),_("code",[v._v("^((-\\d+(\\.\\d+)?)|(0+(\\.0+)?))$")]),v._v(" 或 "),_("code",[v._v("^(-([1-9]\\d*\\.\\d*|0\\.\\d*[1-9]\\d*))|0?\\.0+|0$")])]),v._v(" "),_("li",[v._v("正浮点数："),_("code",[v._v("^[1-9]\\d*\\.\\d*|0\\.\\d*[1-9]\\d*$")]),v._v(" 或 "),_("code",[v._v("^(([0-9]+\\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\\.+ [0-9]+)|([0-9]*[1-9][0-9]*))$")])]),v._v(" "),_("li",[v._v("负浮点数："),_("code",[v._v("^-([1-9]\\d*\\.\\d*|0\\.\\d*[1-9]\\d*)$")]),v._v(" 或 "),_("code",[v._v("^(-(([0-9]+\\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\\.[0-9]+)|([0-9]*[1-9][0-9]*)))$")])]),v._v(" "),_("li",[v._v("浮点数："),_("code",[v._v("^(-?\\d+)(\\.\\d+)?$")]),v._v(" 或 "),_("code",[v._v("^-?([1-9]\\d*\\.\\d*|0\\.\\d*[1-9]\\d*|0?\\.0+|0)$")])])]),v._v(" "),_("h2",{attrs:{id:"校验字符的表达式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#校验字符的表达式"}},[v._v("#")]),v._v(" 校验字符的表达式")]),v._v(" "),_("ul",[_("li",[v._v("汉字："),_("code",[v._v("^[\\u4e00-\\u9fa5]{0,}$")])]),v._v(" "),_("li",[v._v("英文和数字："),_("code",[v._v("^[A-Za-z0-9]+$")]),v._v(" 或 "),_("code",[v._v("^[A-Za-z0-9]{4,40}$")])]),v._v(" "),_("li",[v._v("长度为3-20的所有字符："),_("code",[v._v("^.{3,20}$")])]),v._v(" "),_("li",[v._v("由26个英文字母组成的字符串："),_("code",[v._v("^[A-Za-z]+$")])]),v._v(" "),_("li",[v._v("由26个大写英文字母组成的字符串："),_("code",[v._v("^[A-Z]+$")])]),v._v(" "),_("li",[v._v("由26个小写英文字母组成的字符串："),_("code",[v._v("^[a-z]+$")])]),v._v(" "),_("li",[v._v("由数字和26个英文字母组成的字符串："),_("code",[v._v("^[A-Za-z0-9]+$")])]),v._v(" "),_("li",[v._v("由数字、26个英文字母或者下划线组成的字符串："),_("code",[v._v("^\\w+$ 或 ^\\w{3,20}$")])]),v._v(" "),_("li",[v._v("中文、英文、数字包括下划线："),_("code",[v._v("^[\\u4E00-\\u9FA5A-Za-z0-9_]+$")])]),v._v(" "),_("li",[v._v("中文、英文、数字但不包括下划线等符号："),_("code",[v._v("^[\\u4E00-\\u9FA5A-Za-z0-9]+$")]),v._v(" 或 "),_("code",[v._v("^[\\u4E00-\\u9FA5A-Za-z0-9]{2,20}$")])]),v._v(" "),_("li",[v._v("可以输入含有"),_("code",[v._v("^%&',;=?$\\\"")]),v._v("等字符："),_("code",[v._v("[^%&',;=?$\\x22]+")])]),v._v(" "),_("li",[v._v("禁止输入含有"),_("code",[v._v("~")]),v._v("的字符："),_("code",[v._v("[^~\\x22]+")])])]),v._v(" "),_("h2",{attrs:{id:"特殊需求表达式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#特殊需求表达式"}},[v._v("#")]),v._v(" 特殊需求表达式")]),v._v(" "),_("ul",[_("li",[v._v("Email地址："),_("code",[v._v("^\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$")])]),v._v(" "),_("li",[v._v("域名："),_("code",[v._v("[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\\.?")])]),v._v(" "),_("li",[v._v("InternetURL："),_("code",[v._v("[a-zA-z]+://[^\\s]*")]),v._v(" 或 "),_("code",[v._v("^http://([\\w-]+\\.)+[\\w-]+(/[\\w-./?%&=]*)?$")])]),v._v(" "),_("li",[v._v("手机号码："),_("code",[v._v("^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\\d{8}$")])]),v._v(" "),_("li",[v._v('电话号码("XXX-XXXXXXX"、"XXXX-XXXXXXXX"、"XXX-XXXXXXX"、"XXX-XXXXXXXX"、"XXXXXXX"和"XXXXXXXX)：'),_("code",[v._v("^(\\(\\d{3,4}-)|\\d{3.4}-)?\\d{7,8}$")])]),v._v(" "),_("li",[v._v("国内电话号码(0511-4405222、021-87888822)："),_("code",[v._v("\\d{3}-\\d{8}|\\d{4}-\\d{7}")])]),v._v(" "),_("li",[v._v("电话号码正则表达式（支持手机号码，3-4位区号，7-8位直播号码，1－4位分机号）: "),_("code",[v._v("((\\d{11})|^((\\d{7,8})|(\\d{4}|\\d{3})-(\\d{7,8})|(\\d{4}|\\d{3})-(\\d{7,8})-(\\d{4}|\\d{3}|\\d{2}|\\d{1})|(\\d{7,8})-(\\d{4}|\\d{3}|\\d{2}|\\d{1}))$)")])]),v._v(" "),_("li",[v._v("身份证号(15位、18位数字)，最后一位是校验位，可能为数字或字符X："),_("code",[v._v("(^\\d{15}$)|(^\\d{18}$)|(^\\d{17}(\\d|X|x)$)")])]),v._v(" "),_("li",[v._v("帐号是否合法(字母开头，允许5-16字节，允许字母数字下划线)："),_("code",[v._v("^[a-zA-Z][a-zA-Z0-9_]{4,15}$")])]),v._v(" "),_("li",[v._v("密码(以字母开头，长度在6~18之间，只能包含字母、数字和下划线)："),_("code",[v._v("^[a-zA-Z]\\w{5,17}$")])]),v._v(" "),_("li",[v._v("强密码(必须包含大小写字母和数字的组合，不能使用特殊字符，长度在 8-10 之间)："),_("code",[v._v("^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,10}$")])]),v._v(" "),_("li",[v._v("强密码(必须包含大小写字母和数字的组合，可以使用特殊字符，长度在8-10之间)："),_("code",[v._v("^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$")])]),v._v(" "),_("li",[v._v("日期格式："),_("code",[v._v("^\\d{4}-\\d{1,2}-\\d{1,2}")])]),v._v(" "),_("li",[v._v("一年的12个月(01～09和1～12)："),_("code",[v._v("^(0?[1-9]|1[0-2])$")])]),v._v(" "),_("li",[v._v("一个月的31天(01～09和1～31)："),_("code",[v._v("^((0?[1-9])|((1|2)[0-9])|30|31)$")])]),v._v(" "),_("li",[v._v("钱的输入格式：\n"),_("ul",[_("li",[v._v('有四种钱的表示形式我们可以接受:"10000.00" 和 "10,000.00", 和没有 "分" 的 "10000" 和 "10,000"：'),_("code",[v._v("^[1-9][0-9]*$")])]),v._v(" "),_("li",[v._v('这表示任意一个不以0开头的数字,但是,这也意味着一个字符"0"不通过,所以我们采用下面的形式：'),_("code",[v._v("^(0|[1-9][0-9]*)$")])]),v._v(" "),_("li",[v._v("一个0或者一个不以0开头的数字.我们还可以允许开头有一个负号："),_("code",[v._v("^(0|-?[1-9][0-9]*)$")])]),v._v(" "),_("li",[v._v("这表示一个0或者一个可能为负的开头不为0的数字.让用户以0开头好了.把负号的也去掉,因为钱总不能是负的吧。下面我们要加的是说明可能的小数部分："),_("code",[v._v("^[0-9]+(.[0-9]+)?$")])]),v._v(" "),_("li",[v._v('必须说明的是,小数点后面至少应该有1位数,所以"10."是不通过的,但是 "10" 和 "10.2" 是通过的：'),_("code",[v._v("^[0-9]+(.[0-9]{2})?$")])]),v._v(" "),_("li",[v._v("这样我们规定小数点后面必须有两位,如果你认为太苛刻了,可以这样："),_("code",[v._v("^[0-9]+(.[0-9]{1,2})?$")])]),v._v(" "),_("li",[v._v("这样就允许用户只写一位小数.下面我们该考虑数字中的逗号了,我们可以这样："),_("code",[v._v("^[0-9]{1,3}(,[0-9]{3})*(.[0-9]{1,2})?$")])]),v._v(" "),_("li",[v._v("1到3个数字,后面跟着任意个 逗号+3个数字,逗号成为可选,而不是必须："),_("code",[v._v("^([0-9]+|[0-9]{1,3}(,[0-9]{3})*)(.[0-9]{1,2})?$")])]),v._v(" "),_("li",[v._v('备注：这就是最终结果了,别忘了"+"可以用"*"替代如果你觉得空字符串也可以接受的话(奇怪,为什么?)最后,别忘了在用函数时去掉去掉那个反斜杠,一般的错误都在这里')])])]),v._v(" "),_("li",[v._v("xml文件："),_("code",[v._v("^([a-zA-Z]+-?)+[a-zA-Z0-9]+\\\\.[x|X][m|M][l|L]$")])]),v._v(" "),_("li",[v._v("中文字符的正则表达式："),_("code",[v._v("[\\u4e00-\\u9fa5]")])]),v._v(" "),_("li",[v._v("双字节字符："),_("code",[v._v("[^\\x00-\\xff]")]),v._v(" (包括汉字在内，可以用来计算字符串的长度(一个双字节字符长度计2，ASCII字符计1))")]),v._v(" "),_("li",[v._v("空白行的正则表达式："),_("code",[v._v("\\n\\s*\\r")]),v._v(" (可以用来删除空白行)")]),v._v(" "),_("li",[v._v("HTML标记的正则表达式："),_("code",[v._v("<(\\S*?)[^>]*>.*?|<.*? />")]),v._v(" ( 首尾空白字符的正则表达式："),_("code",[v._v("^\\s*|\\s*$")]),v._v("或"),_("code",[v._v("(^\\s*)|(\\s*$)")]),v._v(" (可以用来删除行首行尾的空白字符(包括空格、制表符、换页符等等)，非常有用的表达式)")]),v._v(" "),_("li",[v._v("腾讯QQ号："),_("code",[v._v("[1-9][0-9]{4,}")]),v._v(" (腾讯QQ号从10000开始)")]),v._v(" "),_("li",[v._v("中国邮政编码："),_("code",[v._v("[1-9]\\d{5}(?!\\d)")]),v._v(" (中国邮政编码为6位数字)")]),v._v(" "),_("li",[v._v("IP地址："),_("code",[v._v("((?:(?:25[0-5]|2[0-4]\\\\d|[01]?\\\\d?\\\\d)\\\\.){3}(?:25[0-5]|2[0-4]\\\\d|[01]?\\\\d?\\\\d))")])])]),v._v(" "),_("h2",{attrs:{id:"参考资料"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[v._v("#")]),v._v(" 参考资料")]),v._v(" "),_("ul",[_("li",[v._v("BenForta. 正则表达式必知必会 [M]. 人民邮电出版社, 2007.")])])])}),[],!1,null,null,null);_.default=s.exports}}]);