(window.webpackJsonp=window.webpackJsonp||[]).push([[306],{636:function(t,e,n){"use strict";n.r(e);var s=n(4),a=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"单元测试-junit5-详解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#单元测试-junit5-详解"}},[t._v("#")]),t._v(" 单元测试 - Junit5 详解")]),t._v(" "),e("blockquote",[e("p",[t._v("JUnit 5是JUnit的下一代。目标是为JVM上的开发人员端测试创建一个最新的基础。这包括专注于Java\n8及更高版本，以及启用许多不同风格的测试。")])]),t._v(" "),e("h2",{attrs:{id:"官方资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#官方资料"}},[t._v("#")]),t._v(" 官方资料")]),t._v(" "),e("blockquote",[e("p",[t._v("最好的资料依然在Junit官方网站，以下我帮你总结下Junit相关的官方网址。")])]),t._v(" "),e("ul",[e("li",[t._v("官网地址")])]),t._v(" "),e("p",[t._v("https://junit.org/junit5/")]),t._v(" "),e("ul",[e("li",[t._v("官方入门文档")])]),t._v(" "),e("p",[t._v("https://junit.org/junit5/docs/current/user-guide/#overview")]),t._v(" "),e("ul",[e("li",[t._v("官方例子")])]),t._v(" "),e("p",[t._v("https://github.com/junit-team/junit5-samples")]),t._v(" "),e("ul",[e("li",[t._v("官方github")])]),t._v(" "),e("p",[t._v("https://github.com/junit-team")]),t._v(" "),e("h2",{attrs:{id:"junit5的架构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#junit5的架构"}},[t._v("#")]),t._v(" Junit5的架构")]),t._v(" "),e("p",[t._v("与以前版本的JUnit不同，JUnit 5由三个不同子项目中的几个不同模块组成。")]),t._v(" "),e("blockquote",[e("p",[t._v("JUnit 5 = JUnit Platform + JUnit Jupiter + JUnit Vintage")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("JUnit Platform")]),t._v(" 是基于JVM的运行测试的基础框架在，它定义了开发运行在这个测试框架上的TestEngine API。此外该平台提供了一个控制台启动器，可以从命令行启动平台，可以为Gradle和 Maven构建插件，同时提供基于JUnit 4的Runner。")]),t._v(" "),e("li",[e("strong",[t._v("JUnit Jupiter")]),t._v(" 是在JUnit 5中编写测试和扩展的新编程模型和扩展模型的组合.Jupiter子项目提供了一个TestEngine在平台上运行基于Jupiter的测试。")]),t._v(" "),e("li",[e("strong",[t._v("JUnit Vintage")]),t._v(" 提供了一个TestEngine在平台上运行基于JUnit 3和JUnit 4的测试。")])]),t._v(" "),e("p",[t._v("架构图如下:")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/willpast/image/blog/ka_java/dev-ut-1.png",alt:"img"}})]),t._v(" "),e("h2",{attrs:{id:"junit-jupiter-api-的使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#junit-jupiter-api-的使用"}},[t._v("#")]),t._v(" JUnit Jupiter API 的使用")]),t._v(" "),e("blockquote",[e("p",[t._v("JUnit Jupiter是在JUnit 5中编写测试和扩展的新编程模型和扩展模型的组合; 所以我们使用Jupiter来学习Junit5。")])]),t._v(" "),e("h3",{attrs:{id:"常用注解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用注解"}},[t._v("#")]),t._v(" 常用注解")]),t._v(" "),e("p",[e("strong",[t._v("@Test")]),t._v(" 表示方法是一种测试方法。 与JUnit 4的@Test注解不同，此注释不会声明任何属性。")]),t._v(" "),e("p",[e("strong",[t._v("@ParameterizedTest")]),t._v(" 表示方法是参数化测试")]),t._v(" "),e("p",[e("strong",[t._v("@RepeatedTest")]),t._v(" 表示方法是重复测试模板")]),t._v(" "),e("p",[e("strong",[t._v("@TestFactory")]),t._v(" 表示方法是动态测试的测试工程")]),t._v(" "),e("p",[e("strong",[t._v("@DisplayName")]),t._v(" 为测试类或者测试方法自定义一个名称")]),t._v(" "),e("p",[e("strong",[t._v("@BeforeEach")]),t._v(" 表示方法在每个测试方法运行前都会运行 ，"),e("strong",[t._v("@AfterEach")]),t._v(" 表示方法在每个测试方法运行之后都会运行")]),t._v(" "),e("p",[e("strong",[t._v("@BeforeAll")]),t._v(" 表示方法在所有测试方法之前运行 ，"),e("strong",[t._v("@AfterAll")]),t._v(" 表示方法在所有测试方法之后运行")]),t._v(" "),e("p",[e("strong",[t._v("@Nested")]),t._v(" 表示带注解的类是嵌套的非静态测试类，"),e("strong",[t._v("@BeforeAll")]),t._v(" 和 "),e("strong",[t._v("@AfterAll")]),t._v("\n方法不能直接在@Nested测试类中使用，除非修改测试实例生命周期。")]),t._v(" "),e("p",[e("strong",[t._v("@Tag")]),t._v(" 用于在类或方法级别声明用于过滤测试的标记")]),t._v(" "),e("p",[e("strong",[t._v("@Disabled")]),t._v(" 用于禁用测试类或测试方法")]),t._v(" "),e("p",[e("strong",[t._v("@ExtendWith")]),t._v(" 用于注册自定义扩展，该注解可以继承")]),t._v(" "),e("p",[e("strong",[t._v("@FixMethodOrder(MethodSorters.NAME_ASCENDING)")]),t._v("\n，控制测试类中方法执行的顺序，这种测试方式将按方法名称的进行排序，由于是按字符的字典顺序，所以以这种方式指定执行顺序会始终保持一致；不过这种方式需要对测试方法有一定的命名规则，如\n测试方法均以testNNN开头（NNN表示测试方法序列号 001-999）")]),t._v(" "),e("h2",{attrs:{id:"编写单元测试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编写单元测试"}},[t._v("#")]),t._v(" 编写单元测试")]),t._v(" "),e("blockquote",[e("p",[t._v("接下来，我们开始学习JUnit5单元测试实例:")])]),t._v(" "),e("h3",{attrs:{id:"maven包引入"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#maven包引入"}},[t._v("#")]),t._v(" Maven包引入")]),t._v(" "),e("p",[t._v("最新的包引入，请参考这里:https://junit.org/junit5/docs/current/user-guide/#running-tests")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v('<?xml version="1.0" encoding="UTF-8"?>\n<project xmlns="http://maven.apache.org/POM/4.0.0"\n         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n    <modelVersion>4.0.0</modelVersion>\n\n    <groupId>pdai.tech</groupId>\n    <artifactId>java-junit5</artifactId>\n    <version>1.0-SNAPSHOT</version>\n\n    <dependencies>\n        \x3c!-- Only needed to run tests in a version of IntelliJ IDEA that bundles older versions --\x3e\n        <dependency>\n            <groupId>org.junit.platform</groupId>\n            <artifactId>junit-platform-launcher</artifactId>\n            <version>1.7.0</version>\n            <scope>test</scope>\n        </dependency>\n        <dependency>\n            <groupId>org.junit.jupiter</groupId>\n            <artifactId>junit-jupiter-engine</artifactId>\n            <version>5.7.0</version>\n            <scope>test</scope>\n        </dependency>\n        <dependency>\n            <groupId>org.junit.vintage</groupId>\n            <artifactId>junit-vintage-engine</artifactId>\n            <version>5.7.0</version>\n            <scope>test</scope>\n        </dependency>\n        <dependency>\n            <groupId>org.junit.jupiter</groupId>\n            <artifactId>junit-jupiter-api</artifactId>\n            <version>5.7.0</version>\n        </dependency>\n\n        \x3c!-- lombok --\x3e\n        <dependency>\n            <groupId>org.projectlombok</groupId>\n            <artifactId>lombok</artifactId>\n            <version>1.18.16</version>\n        </dependency>\n    </dependencies>\n\n</project>\n')])])]),e("h3",{attrs:{id:"测试-hello-world"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#测试-hello-world"}},[t._v("#")]),t._v(" 测试:Hello World")]),t._v(" "),e("p",[t._v("第一个测试:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("package tech.pdai.junit5;\n\nimport org.junit.jupiter.api.Test;\n\nimport static org.junit.jupiter.api.Assertions.assertEquals;\n\n/**\n * Hello world test.\n *\n * @author pdai\n */\npublic class HelloWorldTest {\n\n    @Test\n    void firstTest() {\n        assertEquals(2, 1 + 1);\n    }\n}\n")])])]),e("p",[t._v("执行结果")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/willpast/image/blog/ka_java/dev-ut-2.png",alt:"img"}})]),t._v(" "),e("p",[t._v("@Test注解在方法上标记方法为测试方法，以便构建工具和 IDE 能够识别并执行它们。JUnit\n5不再需要手动将测试类与测试方法为public，包可见的访问级别就足够了。")]),t._v(" "),e("h3",{attrs:{id:"测试-生命周期"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#测试-生命周期"}},[t._v("#")]),t._v(" 测试:生命周期")]),t._v(" "),e("p",[t._v("首先，需要对比下Junit5和Junit4注解:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Junit4")]),t._v(" "),e("th",[t._v("Junit5")]),t._v(" "),e("th",[t._v("注释")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("@Test")]),t._v(" "),e("td",[t._v("@Test")]),t._v(" "),e("td",[t._v("表示该方法是一个测试方法")])]),t._v(" "),e("tr",[e("td",[t._v("@BeforeClass")]),t._v(" "),e("td",[e("strong",[t._v("@BeforeAll")])]),t._v(" "),e("td",[t._v("表示使用了该注解的方法应该在当前类中所有测试方法之前执行（只执行一次），并且它必须是")])])])]),t._v(" "),e("p",[t._v("static方法（除非@TestInstance指定生命周期为Lifecycle.PER_CLASS）"),e("br"),t._v("\n@AfterClass| "),e("strong",[t._v("@AfterAll")]),t._v("|  表示使用了该注解的方法应该在当前类中所有测试方法之后执行（只执行一次），并且它必须是\nstatic方法（除非@TestInstance指定生命周期为Lifecycle.PER_CLASS）"),e("br"),t._v("\n@Before| "),e("strong",[t._v("@BeforeEach")]),t._v("|  表示使用了该注解的方法应该在当前类中每一个测试方法之前执行"),e("br"),t._v("\n@After| "),e("strong",[t._v("@AfterEach")]),t._v("|  表示使用了该注解的方法应该在当前类中每一个测试方法之后执行"),e("br"),t._v("\n@Ignore| @Disabled| 用于禁用（或者说忽略）一个测试类或测试方法"),e("br"),t._v("\n@Category| @Tag| 用于声明过滤测试的tag标签，该注解可以用在方法或类上")]),t._v(" "),e("p",[t._v("测试用例:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v('package tech.pdai.junit5;\n\nimport static org.junit.jupiter.api.Assertions.fail;\nimport static org.junit.jupiter.api.Assumptions.assumeTrue;\n\nimport lombok.extern.slf4j.Slf4j;\nimport org.junit.jupiter.api.AfterAll;\nimport org.junit.jupiter.api.AfterEach;\nimport org.junit.jupiter.api.BeforeAll;\nimport org.junit.jupiter.api.BeforeEach;\nimport org.junit.jupiter.api.Disabled;\nimport org.junit.jupiter.api.Test;\n\n/**\n * Standard Test.\n *\n * @author pdai\n */\npublic class StandardTest {\n\n    @BeforeAll\n    static void initAll() {\n        System.out.println("BeforeAll");\n    }\n\n    @BeforeEach\n    void init() {\n        System.out.println("BeforeEach");\n    }\n\n    @Test\n    void succeedingTest() {\n        System.out.println("succeedingTest");\n    }\n\n    @Test\n    void failingTest() {\n        System.out.println("failingTest");\n        fail("a failing test");\n    }\n\n    @Test\n    @Disabled("for demonstration purposes")\n    void skippedTest() {\n        // not executed\n    }\n\n    @Test\n    void abortedTest() {\n        System.out.println("abortedTest");\n        assumeTrue("abc".contains("Z"));\n        fail("test should have been aborted");\n    }\n\n    @AfterEach\n    void tearDown() {\n        System.out.println("AfterEach");\n    }\n\n    @AfterAll\n    static void tearDownAll() {\n        System.out.println("AfterEach");\n    }\n\n}\n')])])]),e("p",[t._v("执行结果")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/willpast/image/blog/ka_java/dev-ut-3.png",alt:"img"}})]),t._v(" "),e("p",[t._v("观察正确和错误的结果:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("BeforeAll\n\nBeforeEach\nsucceedingTest\nAfterEach\n\n\nBeforeEach\nfailingTest\nAfterEach\n\n\norg.opentest4j.AssertionFailedError: a failing test\n  at org.junit.jupiter.api.AssertionUtils.fail(AssertionUtils.java:39)\n  // ...\n\n\nBeforeEach\nabortedTest\nAfterEach\n\n\norg.opentest4j.TestAbortedException: Assumption failed: assumption is not true\n    at org.junit.jupiter.api.Assumptions.throwTestAbortedException(Assumptions.java:256)\n  // ...\n\nAfterEach\n\nProcess finished with exit code 255\n")])])]),e("h3",{attrs:{id:"测试-禁用测试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#测试-禁用测试"}},[t._v("#")]),t._v(" 测试:禁用测试")]),t._v(" "),e("p",[t._v("这是一个禁用的测试案例：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("import org.junit.jupiter.api.Disabled;\nimport org.junit.jupiter.api.Test;\n\n@Disabled\nclass DisabledClassTest {\n    @Test\n    void testWillBeSkipped() {\n    }\n}\n")])])]),e("p",[t._v("这是一个带有禁用测试方法的测试案例：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("import org.junit.jupiter.api.Disabled;\nimport org.junit.jupiter.api.Test;\n\nclass DisabledTest {\n\n    @Disabled\n    @Test\n    void testWillBeSkipped() {\n    }\n\n    @Test\n    void testWillBeExecuted() {\n    }\n}\n")])])]),e("h3",{attrs:{id:"测试-断言测试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#测试-断言测试"}},[t._v("#")]),t._v(" 测试:断言测试")]),t._v(" "),e("blockquote",[e("p",[t._v("准备好测试实例、执行了被测类的方法以后，断言能确保你得到了想要的结果。一般的断言，无非是检查一个实例的属性（比如，判空与判非空等），或者对两个实例进行比较（比如，检查两个实例对象是否相等）等。无论哪种检查，断言方法都可以接受一个字符串作为最后一个可选参数，它会在断言失败时提供必要的描述信息。如果提供出错信息的过程比较复杂，它也可以被包装在一个\nlambda 表达式中，这样，只有到真正失败的时候，消息才会真正被构造出来。")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("常用断言 Assertions")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("assertEquals")]),t._v(" 断言预期值和实际值相等")]),t._v(" "),e("li",[e("code",[t._v("assertAll")]),t._v(" 分组断言,执行其中包含的所有断言")]),t._v(" "),e("li",[e("code",[t._v("assertArrayEquals")]),t._v(" 断言预期数组和实际数组相等")]),t._v(" "),e("li",[e("code",[t._v("assertFalse")]),t._v(" 断言条件为假")]),t._v(" "),e("li",[e("code",[t._v("assertNotNull")]),t._v(" 断言不为空")]),t._v(" "),e("li",[e("code",[t._v("assertSame")]),t._v(" 断言两个对象相等")]),t._v(" "),e("li",[e("code",[t._v("assertTimeout")]),t._v(" 断言超时")]),t._v(" "),e("li",[e("code",[t._v("fail")]),t._v(" 使单元测试失败")])])])]),t._v(" "),e("p",[t._v("定义一个Person实体类")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("package tech.pdai.junit5.entity;\n\nimport lombok.AllArgsConstructor;\nimport lombok.Data;\n\n/**\n * Person.\n *\n * @author pdai\n */\n@Data\n@AllArgsConstructor\npublic class Person {\n\n    private String firstName;\n\n    private String lastName;\n}\n")])])]),e("p",[t._v("测试代码:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v('package tech.pdai.junit5;\n\nimport org.junit.jupiter.api.Test;\nimport tech.pdai.junit5.entity.Person;\n\nimport static java.time.Duration.ofMillis;\nimport static java.time.Duration.ofMinutes;\nimport static org.junit.jupiter.api.Assertions.*;\n\n/**\n * Assertions Test.\n *\n */\npublic class AssertionsTest {\n\n    Person person = new Person("John", "Doe");\n\n    @Test\n    void standardAssertions() {\n        assertEquals(2, 2);\n        assertEquals(4, 4, "The optional assertion message is now the last parameter.");\n        assertTrue(2 == 2, () -> "Assertion messages can be lazily evaluated -- "\n                + "to avoid constructing complex messages unnecessarily.");\n    }\n\n    @Test\n    void groupedAssertions() {\n        // In a grouped assertion all assertions are executed, and any\n        // failures will be reported together.\n        assertAll("person",\n                () -> assertEquals("John", person.getFirstName()),\n                () -> assertEquals("Doe", person.getLastName())\n        );\n    }\n\n    @Test\n    void dependentAssertions() {\n        // Within a code block, if an assertion fails the\n        // subsequent code in the same block will be skipped.\n        assertAll("properties",\n                () -> {\n                    String firstName = person.getFirstName();\n                    assertNotNull(firstName);\n\n                    // Executed only if the previous assertion is valid.\n                    assertAll("first name",\n                            () -> assertTrue(firstName.startsWith("J")),\n                            () -> assertTrue(firstName.endsWith("n"))\n                    );\n                },\n                () -> {\n                    // Grouped assertion, so processed independently\n                    // of results of first name assertions.\n                    String lastName = person.getLastName();\n                    assertNotNull(lastName);\n\n                    // Executed only if the previous assertion is valid.\n                    assertAll("last name",\n                            () -> assertTrue(lastName.startsWith("D")),\n                            () -> assertTrue(lastName.endsWith("e"))\n                    );\n                }\n        );\n    }\n\n    @Test\n    void exceptionTesting() {\n        Throwable exception = assertThrows(IllegalArgumentException.class, () -> {\n            throw new IllegalArgumentException("a message");\n        });\n        assertEquals("a message", exception.getMessage());\n    }\n\n    @Test\n    void timeoutNotExceeded() {\n        // The following assertion succeeds.\n        assertTimeout(ofMinutes(2), () -> {\n            // Perform task that takes less than 2 minutes.\n        });\n    }\n\n    @Test\n    void timeoutNotExceededWithResult() {\n        // The following assertion succeeds, and returns the supplied object.\n        String actualResult = assertTimeout(ofMinutes(2), () -> {\n            return "a result";\n        });\n        assertEquals("a result", actualResult);\n    }\n\n    @Test\n    void timeoutNotExceededWithMethod() {\n        // The following assertion invokes a method reference and returns an object.\n        String actualGreeting = assertTimeout(ofMinutes(2), AssertionsTest::greeting);\n        assertEquals("hello world!", actualGreeting);\n    }\n\n    @Test\n    void timeoutExceeded() {\n        // The following assertion fails with an error message similar to:\n        // execution exceeded timeout of 10 ms by 91 ms\n        assertTimeout(ofMillis(10), () -> {\n            // Simulate task that takes more than 10 ms.\n            Thread.sleep(100);\n        });\n    }\n\n    @Test\n    void timeoutExceededWithPreemptiveTermination() {\n        // The following assertion fails with an error message similar to:\n        // execution timed out after 10 ms\n        assertTimeoutPreemptively(ofMillis(10), () -> {\n            // Simulate task that takes more than 10 ms.\n            Thread.sleep(100);\n        });\n    }\n\n    private static String greeting() {\n        return "hello world!";\n    }\n}\n')])])]),e("p",[t._v("这里注意下:"),e("code",[t._v("assertTimeoutPreemptively()")]),t._v(" 和 "),e("code",[t._v("assertTimeout()")]),t._v(" 的区别为:\n两者都是断言超时，前者在指定时间没有完成任务就会立即返回断言失败；后者会在任务执行完毕之后才返回。")]),t._v(" "),e("p",[t._v("执行结果:")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/willpast/image/blog/ka_java/dev-ut-4.png",alt:"img"}})]),t._v(" "),e("p",[t._v("观察错误的结果:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("org.opentest4j.AssertionFailedError: execution timed out after 10 ms\n    at org.junit.jupiter.api.AssertTimeout.assertTimeoutPreemptively(AssertTimeout.java:158)\n    at org.junit.jupiter.api.AssertTimeout.assertTimeoutPreemptively(AssertTimeout.java:119)\n    at org.junit.jupiter.api.AssertTimeout.assertTimeoutPreemptively(AssertTimeout.java:101)\n    at org.junit.jupiter.api.AssertTimeout.assertTimeoutPreemptively(AssertTimeout.java:97)\n    at org.junit.jupiter.api.Assertions.assertTimeoutPreemptively(Assertions.java:3323)\n    at tech.pdai.junit5.AssertionsTest.timeoutExceededWithPreemptiveTermination(AssertionsTest.java:108)\n  // ...\n\norg.opentest4j.AssertionFailedError: execution exceeded timeout of 10 ms by 92 ms\n    at org.junit.jupiter.api.AssertionUtils.fail(AssertionUtils.java:39)\n    at org.junit.jupiter.api.Assertions.fail(Assertions.java:117)\n    at org.junit.jupiter.api.AssertTimeout.assertTimeout(AssertTimeout.java:90)\n    at org.junit.jupiter.api.AssertTimeout.assertTimeout(AssertTimeout.java:70)\n    at org.junit.jupiter.api.AssertTimeout.assertTimeout(AssertTimeout.java:52)\n    at org.junit.jupiter.api.AssertTimeout.assertTimeout(AssertTimeout.java:48)\n    at org.junit.jupiter.api.Assertions.assertTimeout(Assertions.java:3186)\n    at tech.pdai.junit5.AssertionsTest.timeoutExceeded(AssertionsTest.java:98)\n  // ...\n\n\nProcess finished with exit code 255\n")])])]),e("h3",{attrs:{id:"测试-异常测试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#测试-异常测试"}},[t._v("#")]),t._v(" 测试:异常测试")]),t._v(" "),e("p",[t._v("我们代码中对于带有异常的方法通常都是使用 try-catch 方式捕获处理，针对测试这样带有异常抛出的代码，而 JUnit 5 提供方法\n"),e("code",[t._v("Assertions#assertThrows(Class<T>, Executable)")]),t._v(" 来进行测试，第一个参数为异常类型，第二个为函数式接口参数，跟\nRunnable 接口相似，不需要参数，也没有返回，并且支持 Lambda表达式方式使用，具体使用方式可参考下方代码:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v('package tech.pdai.junit5;\n\nimport org.junit.jupiter.api.DisplayName;\nimport org.junit.jupiter.api.Test;\n\nimport static org.junit.jupiter.api.Assertions.assertThrows;\n\n/**\n * Exception Test.\n */\npublic class ExceptionTest {\n\n    // 标准的测试例子\n    @Test\n    @DisplayName("Exception Test Demo")\n    void assertThrowsException() {\n        String str = null;\n        assertThrows(IllegalArgumentException.class, () -> {\n            Integer.valueOf(str);\n        });\n    }\n\n    // 注:异常失败例子，当Lambda表达式中代码出现的异常会跟首个参数的异常类型进行比较，如果不属于同一类异常，则失败\n    @Test\n    @DisplayName("Exception Test Demo2")\n    void assertThrowsException2() {\n        String str = null;\n        assertThrows(NullPointerException.class, () -> {\n            Integer.valueOf(str);\n        });\n    }\n}\n')])])]),e("p",[t._v("执行结果:")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/willpast/image/blog/ka_java/dev-ut-5.png",alt:"img"}})]),t._v(" "),e("p",[t._v("观察错误的结果:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("org.opentest4j.AssertionFailedError: Unexpected exception type thrown ==> expected: <java.lang.NullPointerException> but was: <java.lang.NumberFormatException>\n\n    at org.junit.jupiter.api.AssertThrows.assertThrows(AssertThrows.java:65)\n    at org.junit.jupiter.api.AssertThrows.assertThrows(AssertThrows.java:37)\n    at org.junit.jupiter.api.Assertions.assertThrows(Assertions.java:3007)\n    at tech.pdai.junit5.ExceptionTest.assertThrowsException2(ExceptionTest.java:26)\n  // ...\nCaused by: java.lang.NumberFormatException: null\n    at java.lang.Integer.parseInt(Integer.java:542)\n    at java.lang.Integer.valueOf(Integer.java:766)\n    at tech.pdai.junit5.ExceptionTest.lambda$assertThrowsException2$1(ExceptionTest.java:27)\n    at org.junit.jupiter.api.AssertThrows.assertThrows(AssertThrows.java:55)\n    ... 68 more\n")])])]),e("h3",{attrs:{id:"测试-嵌套测试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#测试-嵌套测试"}},[t._v("#")]),t._v(" 测试:嵌套测试")]),t._v(" "),e("p",[t._v("嵌套测试给测试编写者更多的能力，来表达几组测试之间的关系。这里有一个详细的例子。")]),t._v(" "),e("p",[t._v("用于测试stack的嵌套测试套件:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v('package tech.pdai.junit5;\n\nimport org.junit.jupiter.api.BeforeEach;\nimport org.junit.jupiter.api.DisplayName;\nimport org.junit.jupiter.api.Nested;\nimport org.junit.jupiter.api.Test;\n\nimport java.util.EmptyStackException;\nimport java.util.Stack;\n\nimport static org.junit.jupiter.api.Assertions.*;\n\n/**\n * Stack test for Nest Demo.\n */\n@DisplayName("A stack")\npublic class NestedTest {\n\n    Stack stack;\n\n    @Test\n    @DisplayName("is instantiated with new Stack()")\n    void isInstantiatedWithNew() {\n        new Stack<>();\n    }\n\n    @Nested\n    @DisplayName("when new")\n    class WhenNew {\n        @BeforeEach\n        void createNewStack() {\n            stack = new Stack<>();\n        }\n\n        @Test\n        @DisplayName("is empty")\n        void isEmpty() {\n            assertTrue(stack.isEmpty());\n        }\n\n        @Test\n        @DisplayName("throws EmptyStackException when popped")\n        void throwsExceptionWhenPopped() {\n            assertThrows(EmptyStackException.class, () -> stack.pop());\n        }\n\n        @Test\n        @DisplayName("throws EmptyStackException when peeked")\n        void throwsExceptionWhenPeeked() {\n            assertThrows(EmptyStackException.class, () -> stack.peek());\n        }\n\n        @Nested\n        @DisplayName("after pushing an element")\n        class AfterPushing {\n            String anElement = "an element";\n\n            @BeforeEach\n            void pushAnElement() {\n                stack.push(anElement);\n            }\n\n            @Test\n            @DisplayName("it is no longer empty")\n            void isNotEmpty() {\n                assertFalse(stack.isEmpty());\n            }\n\n            @Test\n            @DisplayName("returns the element when popped and is empty")\n            void returnElementWhenPopped() {\n                assertEquals(anElement, stack.pop());\n                assertTrue(stack.isEmpty());\n            }\n\n            @Test\n            @DisplayName("returns the element when peeked but remains not empty")\n            void returnElementWhenPeeked() {\n                assertEquals(anElement, stack.peek());\n                assertFalse(stack.isEmpty());\n            }\n        }\n    }\n}\n')])])]),e("p",[t._v("执行结果:")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/willpast/image/blog/ka_java/dev-ut-6.png",alt:"img"}})]),t._v(" "),e("h3",{attrs:{id:"测试-重复测试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#测试-重复测试"}},[t._v("#")]),t._v(" 测试:重复测试")]),t._v(" "),e("p",[t._v("JUnit\nJupiter通过使用@RepeatedTest注解方法并指定所需的重复次数，提供了重复测试指定次数的功能。每次重复测试的调用都像执行常规的@Test方法一样，完全支持相同的生命周期回调和扩展。")]),t._v(" "),e("p",[t._v("以下示例演示了如何声明名为repeatedTest()的测试，该测试将自动重复10次。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("@RepeatedTest(10)\nvoid repeatedTest() {\n    // ...\n}\n")])])]),e("p",[t._v("除了指定重复次数外，还可以通过@RepeatedTest注解的name属性为每次重复配置自定义显示名称。此外，显示名称可以是模式，由静态文本和动态占位符的组合而成。目前支持以下占位符:")]),t._v(" "),e("ul",[e("li",[t._v("{displayName}: @RepeatedTest方法的显示名称")]),t._v(" "),e("li",[t._v("{currentRepetition}: 当前重复次数")]),t._v(" "),e("li",[t._v("{totalRepetitions}: 重复的总次数")])]),t._v(" "),e("p",[t._v("测试例子")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v('package tech.pdai.junit5;\n\nimport org.junit.jupiter.api.*;\n\nimport static org.junit.jupiter.api.Assertions.assertEquals;\n\n/**\n * Repeat Test.\n */\npublic class RepeatTest {\n\n    @BeforeEach\n    void beforeEach(TestInfo testInfo, RepetitionInfo repetitionInfo) {\n        int currentRepetition = repetitionInfo.getCurrentRepetition();\n        int totalRepetitions = repetitionInfo.getTotalRepetitions();\n        String methodName = testInfo.getTestMethod().get().getName();\n        System.out.println(String.format("About to execute repetition %d of %d for %s", //\n                currentRepetition, totalRepetitions, methodName));\n    }\n\n    @RepeatedTest(3)\n    void repeatedTest() {\n        // ...\n    }\n\n    @RepeatedTest(2)\n    void repeatedTestWithRepetitionInfo(RepetitionInfo repetitionInfo) {\n        assertEquals(2, repetitionInfo.getTotalRepetitions());\n    }\n\n    @RepeatedTest(value = 1, name = "{displayName} {currentRepetition}/{totalRepetitions}")\n    @DisplayName("Repeat!")\n    void customDisplayName(TestInfo testInfo) {\n        assertEquals(testInfo.getDisplayName(), "Repeat! 1/1");\n    }\n\n    @RepeatedTest(value = 1, name = RepeatedTest.LONG_DISPLAY_NAME)\n    @DisplayName("Details...")\n    void customDisplayNameWithLongPattern(TestInfo testInfo) {\n        assertEquals(testInfo.getDisplayName(), "Details... :: repetition 1 of 1");\n    }\n\n    @RepeatedTest(value = 2, name = "Wiederholung {currentRepetition} von {totalRepetitions}")\n    void repeatedTestInGerman() {\n        // ...\n    }\n}\n')])])]),e("p",[t._v("执行结果:")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/willpast/image/blog/ka_java/dev-ut-7.png",alt:"img"}})]),t._v(" "),e("h3",{attrs:{id:"测试-参数化测试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#测试-参数化测试"}},[t._v("#")]),t._v(" 测试:参数化测试")]),t._v(" "),e("p",[t._v("JUnit\nJupiter开箱即用，提供了不少source注解。下面的每个小节都为他们提供了简要的概述和示例。请参阅org.junit.jupiter.params.provider包中的JavaDoc以获取更多信息。")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("@ValueSource")])])]),t._v(" "),e("p",[t._v("@ValueSource是最简单的source之一。它可以让你指定一个原生类型（String，int，long或double）的数组，并且只能为每次调用提供一个参数。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("@ParameterizedTest\n@ValueSource(ints = { 1, 2, 3 })\nvoid testWithValueSource(int argument) {\n    assertNotNull(argument);\n}\n")])])]),e("ul",[e("li",[e("strong",[t._v("@EnumSource")])])]),t._v(" "),e("p",[t._v("@EnumSource提供了一个使用Enum常量的简便方法。该注释提供了一个可选的name参数，可以指定使用哪些常量。如果省略，所有的常量将被用在下面的例子中。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v('@ParameterizedTest\n@EnumSource(TimeUnit.class)\nvoid testWithEnumSource(TimeUnit timeUnit) {\n    assertNotNull(timeUnit);\n}\n@ParameterizedTest\n@EnumSource(value = TimeUnit.class, names = { "DAYS", "HOURS" })\nvoid testWithEnumSourceInclude(TimeUnit timeUnit) {\n    assertTrue(EnumSet.of(TimeUnit.DAYS, TimeUnit.HOURS).contains(timeUnit));\n}\n')])])]),e("p",[t._v("@EnumSource注解还提供了一个可选的mode参数，可以对将哪些常量传递给测试方法进行细化控制。例如，您可以从枚举常量池中排除名称或指定正则表达式，如下例所示。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v('@ParameterizedTest\n@EnumSource(value = TimeUnit.class, mode = EXCLUDE, names = { "DAYS", "HOURS" })\nvoid testWithEnumSourceExclude(TimeUnit timeUnit) {\n    assertFalse(EnumSet.of(TimeUnit.DAYS, TimeUnit.HOURS).contains(timeUnit));\n    assertTrue(timeUnit.name().length() > 5);\n}\n@ParameterizedTest\n@EnumSource(value = TimeUnit.class, mode = MATCH_ALL, names = "^(M|N).+SECONDS$")\nvoid testWithEnumSourceRegex(TimeUnit timeUnit) {\n    String name = timeUnit.name();\n    assertTrue(name.startsWith("M") || name.startsWith("N"));\n    assertTrue(name.endsWith("SECONDS"));\n}\n')])])]),e("ul",[e("li",[e("strong",[t._v("@MethodSource")])])]),t._v(" "),e("p",[t._v("@MethodSource允许你引用一个或多个测试类的工厂方法。这样的方法必须返回一个Stream，Iterable，Iterator或者参数数组。另外，这种方法不能接受任何参数。默认情况下，除非测试类用@TestInstance(Lifecycle.PER_CLASS)注解，否则这些方法必须是静态的。")]),t._v(" "),e("p",[t._v("如果只需要一个参数，则可以返回参数类型的实例Stream，如以下示例所示。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v('@ParameterizedTest\n@MethodSource("stringProvider")\nvoid testWithSimpleMethodSource(String argument) {\n    assertNotNull(argument);\n}\nstatic Stream<String> stringProvider() {\n    return Stream.of("foo", "bar");\n}\n')])])]),e("p",[t._v("支持原始类型（DoubleStream，IntStream和LongStream）的流，示例如下：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v('@ParameterizedTest\n@MethodSource("range")\nvoid testWithRangeMethodSource(int argument) {\n    assertNotEquals(9, argument);\n}\nstatic IntStream range() {\n    return IntStream.range(0, 20).skip(10);\n}\n')])])]),e("p",[t._v("如果测试方法声明多个参数，则需要返回一个集合或Arguments实例流，如下所示。请注意，Arguments.of(Object…)是Arguments接口中定义的静态工厂方法。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v('@ParameterizedTest\n@MethodSource("stringIntAndListProvider")\nvoid testWithMultiArgMethodSource(String str, int num, List<String> list) {\n    assertEquals(3, str.length());\n    assertTrue(num >=1 && num <=2);\n    assertEquals(2, list.size());\n}\nstatic Stream<Arguments> stringIntAndListProvider() {\n    return Stream.of(\n        Arguments.of("foo", 1, Arrays.asList("a", "b")),\n        Arguments.of("bar", 2, Arrays.asList("x", "y"))\n    );\n}\n')])])]),e("ul",[e("li",[e("strong",[t._v("@CsvSource")])])]),t._v(" "),e("p",[t._v("@CsvSource允许您将参数列表表示为以逗号分隔的值（例如，字符串文字）。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v('@ParameterizedTest\n@CsvSource({ "foo, 1", "bar, 2", "\'baz, qux\', 3" })\nvoid testWithCsvSource(String first, int second) {\n    assertNotNull(first);\n    assertNotEquals(0, second);\n}\n')])])]),e("p",[t._v("@CsvSource使用'作为转义字符。 请参阅上述示例和下表中的’baz, qux’值。 一个空的引用值''会导致一个空的String;\n而一个完全空的值被解释为一个null引用。如果null引用的目标类型是基本类型，则引发ArgumentConversionException。")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("示例输入")]),t._v(" "),e("th",[t._v("结果字符列表")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("@CsvSource({ “foo, bar” })")]),t._v(" "),e("td",[t._v('"foo", "bar"')])]),t._v(" "),e("tr",[e("td",[t._v("@CsvSource({ “foo, ‘baz, qux’” })")]),t._v(" "),e("td",[t._v('"foo", "baz, qux"')])]),t._v(" "),e("tr",[e("td",[t._v("@CsvSource({ “foo, ‘’” })")]),t._v(" "),e("td",[t._v('"foo", ""')])]),t._v(" "),e("tr",[e("td",[t._v("@CsvSource({ “foo, “ })")]),t._v(" "),e("td",[t._v('"foo", null')])])])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("@CsvFileSource")])])]),t._v(" "),e("p",[t._v("@CsvFileSource让你使用classpath中的CSV文件。CSV文件中的每一行都会导致参数化测试的一次调用。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v('@ParameterizedTest\n@CsvFileSource(resources = "/two-column.csv")\nvoid testWithCsvFileSource(String first, int second) {\n    assertNotNull(first);\n    assertNotEquals(0, second);\n}\n')])])]),e("p",[t._v("two-column.csv")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v('foo, 1\nbar, 2\n"baz, qux", 3\n')])])]),e("p",[t._v('与@CsvSource中使用的语法相反，@CsvFileSource使用双引号"作为转义字符，请参阅上面例子中的"baz,\nqux"值，一个空的转义值""会产生一个空字符串，\n一个完全为空的值被解释为null引用，如果null引用的目标类型是基本类型，则引发ArgumentConversionException。')]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("@ArgumentsSource")])])]),t._v(" "),e("p",[t._v("可以使用@ArgumentsSource指定一个自定义的，可重用的ArgumentsProvider。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v('@ParameterizedTest\n@ArgumentsSource(MyArgumentsProvider.class)\nvoid testWithArgumentsSource(String argument) {\n    assertNotNull(argument);\n}\nstatic class MyArgumentsProvider implements ArgumentsProvider {\n    @Override\n    public Stream< ? extends Arguments > provideArguments(ExtensionContext context) {\n        return Stream.of("foo", "bar").map(Arguments::of);\n    }\n}\n')])])]),e("p",[t._v("执行结果:")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/willpast/image/blog/ka_java/dev-ut-8.png",alt:"img"}})]),t._v(" "),e("h3",{attrs:{id:"测试-动态测试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#测试-动态测试"}},[t._v("#")]),t._v(" 测试:动态测试")]),t._v(" "),e("p",[t._v("除了这些标准测试外，JUnit Jupiter还引入了一种全新的测试编程模型。这种新的测试是动态测试，它是由 "),e("strong",[t._v("@TestFactory")]),t._v("\n注解的工厂方法在运行时生成的。")]),t._v(" "),e("p",[t._v("与@Test方法相比，@TestFactory方法本身不是测试用例，而是测试用例的工厂。因此，动态测试是工厂的产物。从技术上讲，@TestFactory方法必须返回DynamicNode实例的Stream，Collection，Iterable或Iterator。\nDynamicNode的可实例化的子类是DynamicContainer和DynamicTest。\nDynamicContainer实例由一个显示名称和一个动态子节点列表组成，可以创建任意嵌套的动态节点层次结构。然后，DynamicTest实例将被延迟执行，从而实现测试用例的动态甚至非确定性生成。")]),t._v(" "),e("p",[t._v("任何由@TestFactory返回的Stream都要通过调用stream.close()来正确关闭，使得使用诸如Files.lines()之类的资源变得安全。")]),t._v(" "),e("p",[t._v("与@Test方法一样，@TestFactory方法不能是private或static，并且可以选择声明参数，以便通过ParameterResolvers解析。")]),t._v(" "),e("p",[t._v("DynamicTest是运行时生成的测试用例。它由显示名称和Executable组成。\nExecutable是@FunctionalInterface，这意味着动态测试的实现可以作为lambda表达式或方法引用来提供。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v('package tech.pdai.junit5;\n\nimport org.junit.jupiter.api.DynamicNode;\nimport org.junit.jupiter.api.DynamicTest;\nimport org.junit.jupiter.api.TestFactory;\nimport org.junit.jupiter.api.function.ThrowingConsumer;\n\nimport java.util.*;\nimport java.util.function.Function;\nimport java.util.stream.IntStream;\nimport java.util.stream.Stream;\n\nimport static org.junit.jupiter.api.Assertions.*;\nimport static org.junit.jupiter.api.DynamicContainer.dynamicContainer;\nimport static org.junit.jupiter.api.DynamicTest.dynamicTest;\n\n/**\n * Dynamic Test.\n */\npublic class DynamicsTest {\n\n    // This will result in a JUnitException!\n    @TestFactory\n    List<String> dynamicTestsWithInvalidReturnType() {\n        return Arrays.asList("Hello");\n    }\n\n    @TestFactory\n    Collection<DynamicTest> dynamicTestsFromCollection() {\n        return Arrays.asList(\n                dynamicTest("1st dynamic test", () -> assertTrue(true)),\n                dynamicTest("2nd dynamic test", () -> assertEquals(4, 2 * 2))\n        );\n    }\n\n    @TestFactory\n    Iterable<DynamicTest> dynamicTestsFromIterable() {\n        return Arrays.asList(\n                dynamicTest("3rd dynamic test", () -> assertTrue(true)),\n                dynamicTest("4th dynamic test", () -> assertEquals(4, 2 * 2))\n        );\n    }\n\n    @TestFactory\n    Iterator<DynamicTest> dynamicTestsFromIterator() {\n        return Arrays.asList(\n                dynamicTest("5th dynamic test", () -> assertTrue(true)),\n                dynamicTest("6th dynamic test", () -> assertEquals(4, 2 * 2))\n        ).iterator();\n    }\n\n    @TestFactory\n    Stream<DynamicTest> dynamicTestsFromStream() {\n        return Stream.of("A", "B", "C")\n                .map(str -> dynamicTest("test" + str, () -> { /* ... */ }));\n    }\n\n    @TestFactory\n    Stream<DynamicTest> dynamicTestsFromIntStream() {\n        // Generates tests for the first 10 even integers.\n        return IntStream.iterate(0, n -> n + 2).limit(10)\n                .mapToObj(n -> dynamicTest("test" + n, () -> assertTrue(n % 2 == 0)));\n    }\n\n    @TestFactory\n    Stream<DynamicTest> generateRandomNumberOfTests() {\n        // Generates random positive integers between 0 and 100 until\n        // a number evenly divisible by 7 is encountered.\n        Iterator<Integer> inputGenerator = new Iterator<Integer>() {\n            Random random = new Random();\n            int current;\n\n            @Override\n            public boolean hasNext() {\n                current = random.nextInt(100);\n                return current % 7 != 0;\n            }\n\n            @Override\n            public Integer next() {\n                return current;\n            }\n        };\n        // Generates display names like: input:5, input:37, input:85, etc.\n        Function<Integer, String> displayNameGenerator = (input) -> "input:" + input;\n        // Executes tests based on the current input value.\n        ThrowingConsumer<Integer> testExecutor = (input) -> assertTrue(input % 7 != 0);\n        // Returns a stream of dynamic tests.\n        return DynamicTest.stream(inputGenerator, displayNameGenerator, testExecutor);\n    }\n\n    @TestFactory\n    Stream<DynamicNode> dynamicTestsWithContainers() {\n        return Stream.of("A", "B", "C")\n                .map(input -> dynamicContainer("Container " + input, Stream.of(\n                        dynamicTest("not null", () -> assertNotNull(input)),\n                        dynamicContainer("properties", Stream.of(\n                                dynamicTest("length > 0", () -> assertTrue(input.length() > 0)),\n                                dynamicTest("not empty", () -> assertFalse(input.isEmpty()))\n                        ))\n                )));\n    }\n}\n')])])]),e("p",[t._v("执行结果:")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/willpast/image/blog/ka_java/dev-ut-9.png",alt:"img"}})]),t._v(" "),e("h2",{attrs:{id:"参考文章"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[t._v("#")]),t._v(" 参考文章")]),t._v(" "),e("ul",[e("li",[t._v("https://junit.org/junit5/")]),t._v(" "),e("li",[t._v("https://github.com/junit-team")]),t._v(" "),e("li",[t._v("https://junit.org/junit5/docs/current/user-guide")]),t._v(" "),e("li",[t._v("https://www.bookstack.cn/read/junit5")]),t._v(" "),e("li",[t._v("https://blog.csdn.net/swordcenter/article/details/79279094")]),t._v(" "),e("li",[t._v("https://www.cnblogs.com/one12138/archive/2019/09/17/11536492")])])])}),[],!1,null,null,null);e.default=a.exports}}]);