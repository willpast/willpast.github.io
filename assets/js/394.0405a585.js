(window.webpackJsonp=window.webpackJsonp||[]).push([[394],{726:function(t,a,v){"use strict";v.r(a);var r=v(4),e=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"敏捷开发-开发实践-测试驱动开发-tdd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#敏捷开发-开发实践-测试驱动开发-tdd"}},[t._v("#")]),t._v(" 敏捷开发 - 开发实践：测试驱动开发(TDD）")]),t._v(" "),a("blockquote",[a("p",[t._v("测试驱动开发(Test Driven Development,\n简称TDD)是敏捷开发中的一项核心实践和技术，也是一种设计方法论。TDD的原理是在开发功能代码之前，先编写单元测试用例代码，测试代码确定需要编写什么产品代码。TDD的基本思路就是通过测试来推动整个开发的进行，但测试驱动开发并不只是单纯的测试工作，而是把需求分析，设计，质量控制量化的过程。TDD首先考虑使用需求（对象、功能、过程、接口等），主要是编写测试用例框架对功能的过程和接口进行设计，而测试框架可以持续进行验证。本主要介绍TDD的基础和实践案例，以及很多团队无法使用TDD方式开发的一些思考。")])]),t._v(" "),a("h2",{attrs:{id:"什么是测试驱动开发-tdd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是测试驱动开发-tdd"}},[t._v("#")]),t._v(" 什么是测试驱动开发(TDD)")]),t._v(" "),a("blockquote",[a("p",[t._v("测试驱动开发(Test Driven Development,\n简称TDD)是敏捷开发中的一项核心实践和技术，也是一种设计方法论。TDD的原理是在开发功能代码之前，先编写单元测试用例代码，测试代码确定需要编写什么产品代码。TDD的基本思路就是通过测试来推动整个开发的进行，但测试驱动开发并不只是单纯的测试工作，而是把需求分析，设计，质量控制量化的过程。TDD首先考虑使用需求（对象、功能、过程、接口等），主要是编写测试用例框架对功能的过程和接口进行设计，而测试框架可以持续进行验证。")])]),t._v(" "),a("h3",{attrs:{id:"如何进行tdd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何进行tdd"}},[t._v("#")]),t._v(" 如何进行TDD？")]),t._v(" "),a("blockquote",[a("p",[t._v("在做TDD时，一个周期(红-绿-重构)如下：")])]),t._v(" "),a("ul",[a("li",[t._v("写一个测试（红）")]),t._v(" "),a("li",[t._v("让测试通过（绿）")]),t._v(" "),a("li",[t._v("优化设计（重构）")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/willpast/image/blog/ka_java/tdd-1.jfif",alt:"img"}})]),t._v(" "),a("p",[t._v("然后重复这个周期。")]),t._v(" "),a("h3",{attrs:{id:"什么是atdd-和tdd是什么关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是atdd-和tdd是什么关系"}},[t._v("#")]),t._v(" 什么是ATDD?和TDD是什么关系?")]),t._v(" "),a("blockquote",[a("p",[t._v("通常我们指的TDD是狭义的测试驱动开发，它是基于单元测试驱动开发，即UTDD（Unit Test Driven Development\n单元测试驱动开发）。由于单元测试的编写是由开发者来进行的，所以"),a("strong",[t._v("UTDD侧重从开发者测试的角度驱动开发")]),t._v(" 。")])]),t._v(" "),a("p",[t._v("由于软件开发生命周期中角色并不仅仅是开发测试者，还需要考虑业务用户（在敏捷中角色是Product\nOwner），所以我们将测试驱动放宽到PO的角色（满足PO可接受的测试驱动开发），这便是ATDD（Acceptance Test Driven\nDevelopment 验收测试驱动开发）， "),a("strong",[t._v("所以ATDD侧重从业务角度进行测试驱动开发")]),t._v(" 。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/willpast/image/blog/ka_java/attd-2.jpeg",alt:"img"}})]),t._v(" "),a("p",[t._v("本质上"),a("strong",[t._v("ATDD还是基于TDD的基础上进行的")]),t._v(" ，并且可以表述如下的4D模型")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/willpast/image/blog/ka_java/attd.png",alt:"img"}})]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Discuss")]),t._v(" : 各个角色一起参与，保障对需求用例（User Story）有一致的理解；避免开发完之后不满足客户需求的情况。")]),t._v(" "),a("li",[a("strong",[t._v("Distill")]),t._v(" : 需求的提取和拆分，也就是将需求分解成开发人员和测试人员都能理解，切认可的最小单元。\n"),a("ul",[a("li",[t._v("为了需求的理解一致，引入了一套满足Gherkins语法的需求描述语言（"),a("strong",[t._v("Gherkin是一种语法，使用 Given,when,then等关键来描述一个User Story")]),t._v(" ），通过这种满足Gherkins语法的GWT语句需求描述语言，可以让需求理解上更加一致。")])])]),t._v(" "),a("li",[a("strong",[t._v("Develop")]),t._v(" : 通过单元测试驱动开发，即上面周期(红-绿-重构)的循环。\n"),a("ul",[a("li",[t._v("开发根据GWT需求描述语言进行开发设计，测试根据GWT需求描述语言来写验收测试用例。")])])]),t._v(" "),a("li",[a("strong",[t._v("Demo")]),t._v(" : 验证阶段，团队成员向产品负责人和客户演示完成的功能, 验证的时候直接执行GWT需求，从而验证需求是否被实现。")])]),t._v(" "),a("h2",{attrs:{id:"tdd实践案例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tdd实践案例"}},[t._v("#")]),t._v(" TDD实践案例")]),t._v(" "),a("blockquote",[a("p",[t._v("通过一个实践案例向你展示如何进行单元测试驱动开发。")])]),t._v(" "),a("p",[t._v("以写一个计算器应用为例，看如何用TDD思路去实现。")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("准备开发环境")]),t._v(" ，这里使用IDEA开发，目录结构如下")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/willpast/image/blog/ka_java/tdd-1.png",alt:"img"}})]),t._v(" "),a("h3",{attrs:{id:"第一个需求-计算两个int类型的加法功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第一个需求-计算两个int类型的加法功能"}},[t._v("#")]),t._v(" 第一个需求：计算两个int类型的加法功能")]),t._v(" "),a("p",[t._v("写第一个测试用例（此时Calculator类是没有的)")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/willpast/image/blog/ka_java/tdd-2.png",alt:"img"}})]),t._v(" "),a("p",[t._v("通过IDEA工具自动创建Calculator类")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/willpast/image/blog/ka_java/tdd-3.png",alt:"img"}})]),t._v(" "),a("p",[t._v("创建类")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/willpast/image/blog/ka_java/tdd-4.png",alt:"img"}})]),t._v(" "),a("p",[t._v("自动创建方法")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/willpast/image/blog/ka_java/tdd-5.png",alt:"img"}})]),t._v(" "),a("p",[t._v("创建后的类和方法，完善该方法")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/willpast/image/blog/ka_java/tdd-6.png",alt:"img"}})]),t._v(" "),a("p",[t._v("进行单元测试")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/willpast/image/blog/ka_java/tdd-7.png",alt:"img"}})]),t._v(" "),a("h3",{attrs:{id:"第二个需求-如果两个int类型相加越界-则抛出异常而不是错误值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第二个需求-如果两个int类型相加越界-则抛出异常而不是错误值"}},[t._v("#")]),t._v(" 第二个需求：如果两个int类型相加越界，则抛出异常而不是错误值")]),t._v(" "),a("p",[t._v("添加测试用例，包含对抛出异常的检查；跑单元测试，出现错误；")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/willpast/image/blog/ka_java/tdd-8.png",alt:"img"}})]),t._v(" "),a("p",[a("strong",[t._v("重构")]),t._v(" 原有add方法")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/willpast/image/blog/ka_java/tdd-9.png",alt:"img"}})]),t._v(" "),a("p",[t._v("重新跑单元测试，通过")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/willpast/image/blog/ka_java/tdd-10.png",alt:"img"}})]),t._v(" "),a("h2",{attrs:{id:"进一步理解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进一步理解"}},[t._v("#")]),t._v(" 进一步理解")]),t._v(" "),a("blockquote",[a("p",[t._v("我们通过几个问题进一步理解TDD。")])]),t._v(" "),a("h3",{attrs:{id:"tdd核心思想是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tdd核心思想是什么"}},[t._v("#")]),t._v(" TDD核心思想是什么?")]),t._v(" "),a("blockquote",[a("p",[t._v("从开发的角度谈谈TDD的核心思想，可以总结为如下几个要点。")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("测试先行")])])]),t._v(" "),a("p",[t._v("更加关注测试的重要性，所以在开发功能代码之前，先编写单元测试用例代码。")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("迭代开发")])])]),t._v(" "),a("p",[t._v("敏捷的本质其实就是迭代，极限编程（XP）实践中的重要一环。迭代是期望逐步交付，减少一次性交付带来的弊端。")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("持续重构")])])]),t._v(" "),a("p",[t._v("每一次迭代，通常涉及到冗余，有冗余就需要重构，重构是满足当前的代码符合代码结构的设计。以避免后续迭代（一次性重构）对当前代码结构的冲击。")]),t._v(" "),a("h3",{attrs:{id:"为什么很多团队无法执行tdd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么很多团队无法执行tdd"}},[t._v("#")]),t._v(" 为什么很多团队无法执行TDD?")]),t._v(" "),a("blockquote",[a("p",[t._v("软件开发领域常讲“没有银弹”，同样TDD也不是银弹；很多开发团队无法执行TDD, 我总结了几方面的内容：")])]),t._v(" "),a("h4",{attrs:{id:"有些场景并不适合tdd方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#有些场景并不适合tdd方式"}},[t._v("#")]),t._v(" 有些场景并不适合TDD方式")]),t._v(" "),a("blockquote",[a("p",[t._v("总结而言，不符合"),a("strong",[t._v("迭代开发")]),t._v(" 的或者无法进行对应的"),a("strong",[t._v("快速测试")]),t._v(" 的场景不适合TDD方式开发。")])]),t._v(" "),a("ol",[a("li",[a("strong",[t._v("无法迭代开发的")])])]),t._v(" "),a("p",[t._v("适合迭代的都是具体的需求实现，对于整体系统的设计是不适合迭代的，也不适合用用测试驱动开发。")]),t._v(" "),a("p",[t._v("因为后续的重构会对之前的代码逻辑有冲击，迭代将带来的持续冲击式重构，这种常见下的测试驱动开发对开发者而言是一种灾难。")]),t._v(" "),a("p",[t._v("比如复杂算法的实现，举个例子，你现在要开发一个傅里叶变化的模块，输入一些数据，得到傅里叶变换的结果。你花了一些时间，看懂了傅里叶变化的公式，对其实现也有把握，但是在写断言的时候就发现结果的验证太困难了，你可能需要借助matlab或者python来预先得到结果，然后复制结果到断言中。")]),t._v(" "),a("p",[t._v("数据驱动的算法也无法用TDD来开发，例如机器学习、深度学习。因为其结果与数据相关，当数据发生变化时，算法行为也会发生变化，这就没法写测试用例了。")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[a("strong",[t._v("无法快速测试的")])])]),t._v(" "),a("p",[t._v("测试驱动开发的另外一个必要条件是每次的迭代是可以被快速验证的，如果无法快速测试，那么就不适合。")]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[a("strong",[t._v("存在交互边界的")])])]),t._v(" "),a("p",[t._v("比如硬件的开发，因为存在物理的边界。")]),t._v(" "),a("h4",{attrs:{id:"tdd对团队本身有一定的要求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tdd对团队本身有一定的要求"}},[t._v("#")]),t._v(" TDD对团队本身有一定的要求")]),t._v(" "),a("ol",[a("li",[a("strong",[t._v("团队对质量管理的要求和认同")])])]),t._v(" "),a("p",[t._v("测试驱动开发只是一种敏捷开发方式，它是将测试提升到与开发同等重要的位置，以保证在敏捷的迭代开发中保持软件的质量。有些团队没有完善的软件开发质量体系和资源，没有将质量规范融入到整个开发流程中（也没有专人或团队来约束规范），甚至团队生存都存在问题，追求短平快更不会关注质量（:\n想起一句经典台词："),a("strong",[t._v("我都混到吃泡面了，我还在乎健康")]),t._v(" ？）；在这些情况下团队对质量管理缺乏认同，对开发测试的工作就变成了负担。")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[a("strong",[t._v("团队对需求和任务拆分的能力")])])]),t._v(" "),a("p",[t._v("测试驱动开发有一个很重要的前提条件是有相对可迭代开发的拆分需求，所以团队对需求的理解以及任务的开发能力极为重要，拆分任务时需要对任务的粒度和可持续性有较高要求；频繁需求的变更和拆分不到位，将让驱动测试开发陷入疲于奔命。")]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[a("strong",[t._v("团队对重构的理解和能力")])])]),t._v(" "),a("p",[t._v("重构对于测试驱动开发是极为重要的，正如上面的例子看到的，在后续的用例需求开发时需要对前面的开发代码进行必要的重构，以满足当前的代码是满足相对最佳实践的；此时你可能会发现，增量写的用例需要对前面写代码大幅度的重构，而这些代码可能不是你写的，所以在团队没有对重构有统一的理解或者缺乏对重构的把控时，测试驱动开发可能会成为一种负担。")]),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[a("strong",[t._v("团队对协作的理解和能力")])])]),t._v(" "),a("p",[t._v("一个团队中是有很多角色的（产品负责人，PM，架构，开发，测试等），测试驱动开发不仅仅是开发者要做的事情，而需要其它角色的协作。举个简单的例子，如果在必要时候后续开发需要对之前代码进行重构，但是产品负责人或者PM无法认同，认为只是一个平行功能的开发，没有给到开发者足够的重构时间，这时便会错失好的重构时间点，对后续整体质量将埋下一个坑，而且这种技术债务有一天是要还的。")]),t._v(" "),a("h4",{attrs:{id:"tdd是否已死"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tdd是否已死"}},[t._v("#")]),t._v(" TDD是否已死？")]),t._v(" "),a("blockquote",[a("p",[t._v("在行业里最有名的是 Kent Beck、Martin Fowler、David关于"),a("a",{attrs:{href:"https://martinfowler.com/articles/is-tdd-dead/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Is TDD\nDead在新窗口打开"),a("OutboundLink")],1),t._v("?的辩论。")])]),t._v(" "),a("p",[t._v("pdai在这里添加这节内容是期望网站的读者明白：")]),t._v(" "),a("ol",[a("li",[t._v("无论采用何种方式开发，都是需要平衡项目，资源，团队等多种因素的；")]),t._v(" "),a("li",[t._v("TDD过不过时都是主观的，但是它提供了一种敏捷开发的思路；作为开发而言，不断思考，不断实现自我的迭代永远不会过时。")])]),t._v(" "),a("h3",{attrs:{id:"amdd-通过敏捷模型拓展tdd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#amdd-通过敏捷模型拓展tdd"}},[t._v("#")]),t._v(" AMDD：通过敏捷模型拓展TDD?")]),t._v(" "),a("blockquote",[a("p",[t._v("Agile Model Driven Development\n(AMDD)即敏捷模型驱动开发，TDD非常擅长详细的规范和验证，但是它不适合很大的问题，如总体设计、系统的使用或UI。AMDD解决了TDD没有解决的敏捷扩展问题,\n因此，AMDD用于更大的问题。如下内容主要翻译自"),a("a",{attrs:{href:"https://www.guru99.com/test-driven-development.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Scaling TDD via Agile Model Driven Development\n(AMDD)在新窗口打开"),a("OutboundLink")],1)])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/willpast/image/blog/ka_java/amdd.png",alt:"img"}})]),t._v(" "),a("p",[t._v("在上图中，每个框代表一个开发活动。")]),t._v(" "),a("p",[t._v("设想(Envisioning)是预测/想象测试的TDD过程之一，将在项目的第一周进行。设想(Envisioning)的主要目标是确定系统范围和系统架构。高级需求和架构建模是为成功的设想(Envisioning)而进行的。这是一个过程，没有对软件/系统进行详细说明，而是探索软件/系统的需求，确定了项目的总体战略。")]),t._v(" "),a("h4",{attrs:{id:"迭代0-设想-envisioning"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#迭代0-设想-envisioning"}},[t._v("#")]),t._v(" 迭代0：设想(Envisioning)")]),t._v(" "),a("p",[t._v("有两个主要的部分：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("最初需求的设想(Initial requirements envisioning)")]),t._v(" ：确定系统的高级需求和范围可能需要几天时间。主要重点是探索使用模型、初始域模型和用户界面模型（UI）。")]),t._v(" "),a("li",[a("strong",[t._v("最初架构的设想(Initial Architectural envisioning)")]),t._v(" ：识别系统的体系结构也需要几天时间。它允许为项目设置技术方向。主要重点是探索技术图、用户界面（UI）流、领域模型和变更案例。")])]),t._v(" "),a("h4",{attrs:{id:"迭代建模-iteration-modeling"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#迭代建模-iteration-modeling"}},[t._v("#")]),t._v(" 迭代建模（Iteration modeling）")]),t._v(" "),a("p",[t._v("在这里，团队必须计划每个迭代将要完成的工作。")]),t._v(" "),a("ul",[a("li",[t._v("敏捷过程用于每次迭代，即在每次迭代期间，将优先添加新的工作项。")]),t._v(" "),a("li",[t._v("首先，将考虑更优先的工作。添加的工作项可以随时重新排序或从项堆栈中删除。")]),t._v(" "),a("li",[t._v("团队讨论如何实现每个需求。建模用于此目的。")]),t._v(" "),a("li",[t._v("建模分析和设计是针对将要为该迭代实现的每个需求进行的。")])]),t._v(" "),a("h4",{attrs:{id:"模型风暴-model-storming"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模型风暴-model-storming"}},[t._v("#")]),t._v(" 模型风暴(Model storming)")]),t._v(" "),a("p",[t._v("这也称为即时建模。")]),t._v(" "),a("ul",[a("li",[t._v("在这里，建模课程涉及一个由2/3名成员组成的团队，他们在纸上或白板上讨论问题。")]),t._v(" "),a("li",[t._v("一名团队成员将要求另一名成员与他们一起建模。本次建模课程大约需要5到10分钟。团队成员聚集在一起共享白板/纸张。")]),t._v(" "),a("li",[t._v("他们探索问题，直到找到问题的主要原因。及时，如果一个团队成员确定了他/她想要解决的问题，那么他/她将迅速得到其他团队成员的帮助。")]),t._v(" "),a("li",[t._v("其他小组成员随后探讨这个问题，然后每个人都像以前一样继续。它也被称为独立建模或客户QA会议。")])]),t._v(" "),a("h4",{attrs:{id:"测试驱动开发-tdd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试驱动开发-tdd"}},[t._v("#")]),t._v(" 测试驱动开发（TDD）")]),t._v(" "),a("ul",[a("li",[t._v("它促进了对应用程序代码和详细规范的确认性测试。")]),t._v(" "),a("li",[t._v("验收测试（详细需求）和开发人员测试（单元测试）都是TDD的输入。")]),t._v(" "),a("li",[t._v("TDD使代码更简单和清晰。它允许开发人员维护较少的文档。")])]),t._v(" "),a("h4",{attrs:{id:"回顾-reviews"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#回顾-reviews"}},[t._v("#")]),t._v(" 回顾（Reviews）")]),t._v(" "),a("ul",[a("li",[t._v("这是可选的。它包括代码检查和模型审查。")]),t._v(" "),a("li",[t._v("这可以为每个迭代或整个项目完成。")]),t._v(" "),a("li",[t._v("这是为项目提供反馈的好选择。")])]),t._v(" "),a("h3",{attrs:{id:"tdd研究文献推荐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tdd研究文献推荐"}},[t._v("#")]),t._v(" TDD研究文献推荐？")]),t._v(" "),a("p",[t._v("有关TDD的有效性和成本已经有很多研究了。下表是个总结")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("作者/年份")]),t._v(" "),a("th",[t._v("重要发现")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("a",{attrs:{href:"https://arxiv.org/ftp/arxiv/papers/1711/1711.05082.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Siniaalto,2017在新窗口打开"),a("OutboundLink")],1)]),t._v(" "),a("td")])])]),t._v(" "),a("p",[t._v("TDD不总是能提高开发效率，特别是在对TDD不熟悉的情况下。但是TDD所生产的代码具有更高的测试覆盖率。"),a("br"),t._v(" "),a("a",{attrs:{href:"http://softwareprocess.es/pubs/borle2017EMSE-TDD.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Neil,2017在新窗口打开"),a("OutboundLink")],1),t._v("|\ngithub上使用TDD开发的Java项目非常少，将TDD开发的项目与其他项目进行对比，并没有发现TDD开发的项目有明显的优势。"),a("br"),t._v(" "),a("a",{attrs:{href:"https://www.sciencedirect.com/science/article/abs/pii/S0950584916300222",target:"_blank",rel:"noopener noreferrer"}},[t._v("Wilson,2016在新窗口打开"),a("OutboundLink")],1),t._v("|\nTDD能够生产更好质量的代码，但是开发效率不如TLD（开发完再测试）"),a("br"),t._v(" "),a("a",{attrs:{href:"https://arxiv.org/pdf/1611.05994.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Davide,2016在新窗口打开"),a("OutboundLink")],1),t._v("|\nTDD声称的好处可能不是由于其独特的测试先行产生的。但类似于TDD所鼓励的细粒度稳步的增量式开发，可以改善开发质量"),a("br"),t._v("\n[Nagappan, 2008在新窗口打开](http://research.microsoft.com/en-\nus/groups/ese/nagappan_tdd.pdf)| TDD消除缺陷是40% ~ 90%,其成本在开发初期多出15% ~ 35%"),a("br"),t._v(" "),a("a",{attrs:{href:"http://www.agile2007.org/downloads/proceedings/006_On%20the%20Sustained%20Use_860.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sanchez,J.C,2007在新窗口打开"),a("OutboundLink")],1),t._v("|\nTDD产生的缺陷密度低于行业标准。TDD或许能减少代码复杂度随着软件年限而增长的程度"),a("br"),t._v("\n[Bhat,2006在新窗口打开](https://www.microsoft.com/en-us/research/group/saintes-\ngroup/)| TDD的使用可以让代码质量提升，初始成本增加至少15%"),a("br"),t._v("\n[Siniaalto,2006在新窗口打开](http://www.agile-itea.org/public/deliverables/ITEA-\nAGILE-D2.7_v1.0.pdf)| 有些情况，TDD会大幅度提升效率，大概在2/13的情况下回减低生产效率（但会提升代码质量）"),a("br"),t._v(" "),a("a",{attrs:{href:"http://collaboration.csc.ncsu.edu/laurie/Papers/TDDpaperv8.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("George,2003在新窗口打开"),a("OutboundLink")],1),t._v("|\nTDD开发的代码质量更好（可以多通过18%或者更多的功能测试），且多用16%的开发时间。事后测试的代码测试不够充分")]),t._v(" "),a("h2",{attrs:{id:"参考文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[t._v("#")]),t._v(" 参考文章")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("https://kentcdodds.com/blog/when-i-follow-tdd")])]),t._v(" "),a("li",[a("p",[t._v("https://blog.csdn.net/weiwei9363/article/details/117805722")])]),t._v(" "),a("li",[a("p",[t._v("https://www.guru99.com/test-driven-development.html")])]),t._v(" "),a("li",[a("p",[t._v("https://github.com/hxfirefox/blog/blob/master/TDD/TDD%E9%9A%8F%E6%83%B3%E5%BD%95.md")])]),t._v(" "),a("li",[a("p",[t._v("http://agiledon.github.io/blog/2013/12/25/thought-about-applying-tdd/")])]),t._v(" "),a("li",[a("p",[t._v("https://www.cxybb.com/article/zanfeng/119480625")])]),t._v(" "),a("li",[a("p",[t._v("https://martinfowler.com/articles/is-tdd-dead/")])]),t._v(" "),a("li",[a("p",[t._v("https://www.jianshu.com/p/b794d5491dd9")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);