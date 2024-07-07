(window.webpackJsonp=window.webpackJsonp||[]).push([[422],{754:function(e,n,t){"use strict";t.r(n);var r=t(4),a=Object(r.a)({},(function(){var e=this,n=e._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"行为型-备忘录-memento"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#行为型-备忘录-memento"}},[e._v("#")]),e._v(" 行为型 - 备忘录(Memento)")]),e._v(" "),n("blockquote",[n("p",[e._v('备忘录模式(Memento pattern): 当你需要让对象返回之前的状态时(例如, 你的用户请求"撤销"), 你使用备忘录模式。')])]),e._v(" "),n("h2",{attrs:{id:"意图"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#意图"}},[e._v("#")]),e._v(" 意图")]),e._v(" "),n("p",[e._v("在不违反封装的情况下获得对象的内部状态，从而在需要时可以将对象恢复到最初状态。")]),e._v(" "),n("h2",{attrs:{id:"类图"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#类图"}},[e._v("#")]),e._v(" 类图")]),e._v(" "),n("ul",[n("li",[e._v("Originator: 原始对象")]),e._v(" "),n("li",[e._v("Caretaker: 负责保存好备忘录")]),e._v(" "),n("li",[e._v("Menento: 备忘录，存储原始对象的的状态。备忘录实际上有两个接口，一个是提供给 Caretaker 的窄接口: 它只能将备忘录传递给其它对象；一个是提供给 Originator 的宽接口，允许它访问到先前状态所需的所有数据。理想情况是只允许 Originator 访问本备忘录的内部状态。")])]),e._v(" "),n("p",[n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/willpast/image/blog/ka_java/867e93eb-3161-4f39-b2d2-c0cd3788e194.png",alt:"img"}})]),e._v(" "),n("h2",{attrs:{id:"实现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#实现"}},[e._v("#")]),e._v(" 实现")]),e._v(" "),n("p",[e._v("以下实现了一个简单计算器程序，可以输入两个值，然后计算这两个值的和。备忘录模式允许将这两个值存储起来，然后在某个时刻用存储的状态进行恢复。")]),e._v(" "),n("p",[e._v("实现参考: [Memento Pattern - Calculator Example - Java\nSourcecode在新窗口打开](https://www.oodesign.com/memento-pattern-calculator-example-\njava-sourcecode.html)")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("/**\n * Originator Interface\n */\npublic interface Calculator {\n\n    // Create Memento\n    PreviousCalculationToCareTaker backupLastCalculation();\n\n    // setMemento\n    void restorePreviousCalculation(PreviousCalculationToCareTaker memento);\n\n    int getCalculationResult();\n\n    void setFirstNumber(int firstNumber);\n\n    void setSecondNumber(int secondNumber);\n}\n\n\n\n/**\n * Originator Implementation\n */\npublic class CalculatorImp implements Calculator {\n\n    private int firstNumber;\n    private int secondNumber;\n\n    @Override\n    public PreviousCalculationToCareTaker backupLastCalculation() {\n        // create a memento object used for restoring two numbers\n        return new PreviousCalculationImp(firstNumber, secondNumber);\n    }\n\n    @Override\n    public void restorePreviousCalculation(PreviousCalculationToCareTaker memento) {\n        this.firstNumber = ((PreviousCalculationToOriginator) memento).getFirstNumber();\n        this.secondNumber = ((PreviousCalculationToOriginator) memento).getSecondNumber();\n    }\n\n    @Override\n    public int getCalculationResult() {\n        // result is adding two numbers\n        return firstNumber + secondNumber;\n    }\n\n    @Override\n    public void setFirstNumber(int firstNumber) {\n        this.firstNumber = firstNumber;\n    }\n\n    @Override\n    public void setSecondNumber(int secondNumber) {\n        this.secondNumber = secondNumber;\n    }\n}\n\n\n\n/**\n * Memento Interface to Originator\n *\n * This interface allows the originator to restore its state\n */\npublic interface PreviousCalculationToOriginator {\n    int getFirstNumber();\n    int getSecondNumber();\n}\n\n\n\n/**\n *  Memento interface to CalculatorOperator (Caretaker)\n */\npublic interface PreviousCalculationToCareTaker {\n    // no operations permitted for the caretaker\n}\n\n\n\n/**\n * Memento Object Implementation\n * <p>\n * Note that this object implements both interfaces to Originator and CareTaker\n */\npublic class PreviousCalculationImp implements PreviousCalculationToCareTaker,\n        PreviousCalculationToOriginator {\n\n    private int firstNumber;\n    private int secondNumber;\n\n    public PreviousCalculationImp(int firstNumber, int secondNumber) {\n        this.firstNumber = firstNumber;\n        this.secondNumber = secondNumber;\n    }\n\n    @Override\n    public int getFirstNumber() {\n        return firstNumber;\n    }\n\n    @Override\n    public int getSecondNumber() {\n        return secondNumber;\n    }\n}\n\n\n\n/**\n * CareTaker object\n */\npublic class Client {\n\n    public static void main(String[] args) {\n        // program starts\n        Calculator calculator = new CalculatorImp();\n\n        // assume user enters two numbers\n        calculator.setFirstNumber(10);\n        calculator.setSecondNumber(100);\n\n        // find result\n        System.out.println(calculator.getCalculationResult());\n\n        // Store result of this calculation in case of error\n        PreviousCalculationToCareTaker memento = calculator.backupLastCalculation();\n\n        // user enters a number\n        calculator.setFirstNumber(17);\n\n        // user enters a wrong second number and calculates result\n        calculator.setSecondNumber(-290);\n\n        // calculate result\n        System.out.println(calculator.getCalculationResult());\n\n        // user hits CTRL + Z to undo last operation and see last result\n        calculator.restorePreviousCalculation(memento);\n\n        // result restored\n        System.out.println(calculator.getCalculationResult());\n    }\n}\n\n\n\n110\n-273\n110\n")])])]),n("h2",{attrs:{id:"jdk"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#jdk"}},[e._v("#")]),e._v(" JDK")]),e._v(" "),n("ul",[n("li",[e._v("java.io.Serializable")])])])}),[],!1,null,null,null);n.default=a.exports}}]);