(window.webpackJsonp=window.webpackJsonp||[]).push([[197],{527:function(a,e,s){"use strict";s.r(e);var r=s(4),o=Object(r.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"分布式算法-paxos算法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分布式算法-paxos算法"}},[a._v("#")]),a._v(" 分布式算法 - Paxos算法")]),a._v(" "),e("blockquote",[e("p",[a._v("Paxos算法是Lamport宗师提出的一种基于消息传递的分布式一致性算法，使其获得2013年图灵奖。自Paxos问世以来就持续垄断了分布式一致性算法，Paxos这个名词几乎等同于分布式一致性,\n很多分布式一致性算法都由Paxos演变而来。")])]),a._v(" "),e("h2",{attrs:{id:"paxos算法简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#paxos算法简介"}},[a._v("#")]),a._v(" Paxos算法简介")]),a._v(" "),e("p",[a._v("Paxos算法是Lamport宗师提出的一种基于消息传递的分布式一致性算法，使其获得2013年图灵奖。")]),a._v(" "),e("p",[a._v("Paxos由Lamport于1998年在《The Part-Time\nParliament》论文中首次公开，最初的描述使用希腊的一个小岛Paxos作为比喻，描述了Paxos小岛中通过决议的流程，并以此命名这个算法，但是这个描述理解起来比较有挑战性。后来在2001年，Lamport觉得同行不能理解他的幽默感，于是重新发表了朴实的算法描述版本《Paxos\nMade Simple》。")]),a._v(" "),e("p",[a._v("自Paxos问世以来就持续垄断了分布式一致性算法，Paxos这个名词几乎等同于分布式一致性。Google的很多大型分布式系统都采用了Paxos算法来解决分布式一致性问题，如Chubby、Megastore以及Spanner等。开源的ZooKeeper，以及MySQL\n5.7推出的用来取代传统的主从复制的MySQL Group Replication等纷纷采用Paxos算法解决分布式一致性问题。")]),a._v(" "),e("h2",{attrs:{id:"basic-paxos算法实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#basic-paxos算法实现"}},[a._v("#")]),a._v(" Basic Paxos算法实现")]),a._v(" "),e("p",[a._v("Paxos算法解决的问题正是分布式一致性问题，即一个分布式系统中的各个进程如何就某个值(决议)达成一致。")]),a._v(" "),e("p",[a._v("Paxos算法运行在允许宕机故障的异步系统中，不要求可靠的消息传递，可容忍消息丢失、延迟、乱序以及重复。它利用大多数 (Majority)\n机制保证了2F+1的容错能力，即2F+1个节点的系统最多允许F个节点同时出现故障。")]),a._v(" "),e("p",[a._v("一个或多个提议进程 (Proposer) 可以发起提案\n(Proposal)，Paxos算法使所有提案中的某一个提案，在所有进程中达成一致。系统中的多数派同时认可该提案，即达成了一致。最多只针对一个确定的提案达成一致。")]),a._v(" "),e("h3",{attrs:{id:"角色"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#角色"}},[a._v("#")]),a._v(" 角色")]),a._v(" "),e("p",[a._v("Paxos将系统中的角色分为"),e("code",[a._v("提议者 (Proposer)")]),a._v("，"),e("code",[a._v("决策者 (Acceptor)")]),a._v("，和"),e("code",[a._v("最终决策学习者 (Learner)")]),a._v(":")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("Proposer")]),a._v(": 提出提案 (Proposal)。Proposal信息包括提案编号 (Proposal ID) 和提议的值 (Value)。")]),a._v(" "),e("li",[e("code",[a._v("Acceptor")]),a._v(": 参与决策，回应Proposers的提案。收到Proposal后可以接受提案，若Proposal获得多数Acceptors的接受，则称该Proposal被批准。")]),a._v(" "),e("li",[e("code",[a._v("Learner")]),a._v(": 不参与决策，从Proposers/Acceptors学习最新达成一致的提案(Value)。")])]),a._v(" "),e("p",[a._v("在多副本状态机中，每个副本同时具有Proposer、Acceptor、Learner三种角色。")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/willpast/image/blog/ka_java/alg-dst-paxos-1.jpg",alt:"img"}})]),a._v(" "),e("blockquote",[e("p",[a._v("可以理解为人大代表(Proposer)在人大向其它代表(Acceptors)提案，通过后让老百姓(Learner)落实。")])]),a._v(" "),e("h3",{attrs:{id:"_3个阶段"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3个阶段"}},[a._v("#")]),a._v(" 3个阶段")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/willpast/image/blog/ka_java/alg-dst-paxos-2.jpg",alt:"img"}})]),a._v(" "),e("h4",{attrs:{id:"第一阶段-prepare阶段"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第一阶段-prepare阶段"}},[a._v("#")]),a._v(" 第一阶段: Prepare阶段")]),a._v(" "),e("p",[a._v("Proposer向Acceptors发出Prepare请求，Acceptors针对收到的Prepare请求进行Promise承诺。")]),a._v(" "),e("ul",[e("li",[e("p",[e("code",[a._v("Prepare")]),a._v(": Proposer生成全局唯一且递增的Proposal ID (可使用时间戳加Server ID)，向所有Acceptors发送Prepare请求，这里无需携带提案内容，只携带Proposal ID即可。")])]),a._v(" "),e("li",[e("p",[e("code",[a._v("Promise")]),a._v(": Acceptors收到Prepare请求后，做出“两个承诺，一个应答”。")]),a._v(" "),e("ul",[e("li",[a._v("承诺1: 不再接受Proposal ID小于等于(注意: 这里是<= )当前请求的Prepare请求;")]),a._v(" "),e("li",[a._v("承诺2: 不再接受Proposal ID小于(注意: 这里是< )当前请求的Propose请求;")]),a._v(" "),e("li",[a._v("应答: 不违背以前作出的承诺下，回复已经Accept过的提案中Proposal ID最大的那个提案的Value和Proposal ID，没有则返回空值。")])])])]),a._v(" "),e("h4",{attrs:{id:"第二阶段-accept阶段"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第二阶段-accept阶段"}},[a._v("#")]),a._v(" 第二阶段: Accept阶段")]),a._v(" "),e("p",[a._v("Proposer收到多数Acceptors承诺的Promise后，向Acceptors发出Propose请求，Acceptors针对收到的Propose请求进行Accept处理。")]),a._v(" "),e("ul",[e("li",[e("p",[e("code",[a._v("Propose")]),a._v(": Proposer 收到多数Acceptors的Promise应答后，从应答中选择Proposal ID最大的提案的Value，作为本次要发起的提案。如果所有应答的提案Value均为空值，则可以自己随意决定提案Value。然后携带当前Proposal ID，向所有Acceptors发送Propose请求。")])]),a._v(" "),e("li",[e("p",[e("code",[a._v("Accept")]),a._v(": Acceptor收到Propose请求后，在不违背自己之前作出的承诺下，接受并持久化当前Proposal ID和提案Value。")])])]),a._v(" "),e("h4",{attrs:{id:"第三阶段-learn阶段"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第三阶段-learn阶段"}},[a._v("#")]),a._v(" 第三阶段: Learn阶段")]),a._v(" "),e("p",[a._v("Proposer在收到多数Acceptors的Accept之后，标志着本次Accept成功，决议形成，将形成的决议发送给所有Learners。")]),a._v(" "),e("h3",{attrs:{id:"伪代码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#伪代码"}},[a._v("#")]),a._v(" 伪代码")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/willpast/image/blog/ka_java/alg-dst-paxos-3.jpg",alt:"img"}})]),a._v(" "),e("ul",[e("li",[a._v("获取一个Proposal ID n，为了保证Proposal ID唯一，可采用时间戳+Server ID生成；")]),a._v(" "),e("li",[a._v("Proposer向所有Acceptors广播Prepare(n)请求；")]),a._v(" "),e("li",[a._v("Acceptor比较n和minProposal，如果n>minProposal，minProposal=n，并且将 acceptedProposal 和 acceptedValue 返回；")]),a._v(" "),e("li",[a._v("Proposer接收到过半数回复后，如果发现有acceptedValue返回，将所有回复中acceptedProposal最大的acceptedValue作为本次提案的value，否则可以任意决定本次提案的value；")]),a._v(" "),e("li",[a._v("到这里可以进入第二阶段，广播Accept (n,value) 到所有节点；")]),a._v(" "),e("li",[a._v("Acceptor比较n和minProposal，如果n>=minProposal，则acceptedProposal=minProposal=n，acceptedValue=value，本地持久化后，返回；否则，返回minProposal。")]),a._v(" "),e("li",[a._v("提议者接收到过半数请求后，如果发现有返回值result >n，表示有更新的提议，跳转到1；否则value达成一致。")])]),a._v(" "),e("h3",{attrs:{id:"实现举例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实现举例"}},[a._v("#")]),a._v(" 实现举例")]),a._v(" "),e("p",[a._v("下面举几个例子，实例1如下图:")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/willpast/image/blog/ka_java/alg-dst-paxos-4.jpg",alt:"img"}})]),a._v(" "),e("p",[a._v("图中P代表Prepare阶段，A代表Accept阶段。3.1代表Proposal ID为3.1，其中3为时间戳，1为Server\nID。X和Y代表提议Value。")]),a._v(" "),e("p",[a._v("实例1中P 3.1达成多数派，其Value(X)被Accept，然后P 4.5学习到Value(X)，并Accept。")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/willpast/image/blog/ka_java/alg-dst-paxos-5.jpg",alt:"img"}})]),a._v(" "),e("p",[a._v("实例2中P 3.1没有被多数派Accept(只有S3 Accept)，但是被P 4.5学习到，P 4.5将自己的Value由Y替换为X，Accept(X)。")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/willpast/image/blog/ka_java/alg-dst-paxos-6.jpg",alt:"img"}})]),a._v(" "),e("p",[a._v("实例3中P 3.1没有被多数派Accept(只有S1 Accept)，同时也没有被P 4.5学习到。由于P 4.5\nPropose的所有应答，均未返回Value，则P 4.5可以Accept自己的Value (Y)。后续P 3.1的Accept (X)\n会失败，已经Accept的S1，会被覆盖。")]),a._v(" "),e("p",[a._v("Paxos算法可能形成活锁而永远不会结束，如下图实例所示:")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/willpast/image/blog/ka_java/alg-dst-paxos-7.jpg",alt:"img"}})]),a._v(" "),e("p",[a._v("回顾两个承诺之一，Acceptor不再应答Proposal ID小于等于当前请求的Prepare请求。意味着需要应答Proposal\nID大于当前请求的Prepare请求。")]),a._v(" "),e("p",[a._v("两个Proposers交替Prepare成功，而Accept失败，形成活锁(Livelock)。")]),a._v(" "),e("h2",{attrs:{id:"paxos算法推导"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#paxos算法推导"}},[a._v("#")]),a._v(" Paxos算法推导")]),a._v(" "),e("blockquote",[e("p",[a._v("通常说Paxos算法是复杂算法难以理解是指其推导过程复杂。理论证明一个Paxos的实现，比实现这个Paxos还要难。一个成熟的Paxos实现很难独立产生，往往需要和一个系统结合在一起，通过一个或者多个系统来验证其可靠性和完备性。")])]),a._v(" "),e("p",[a._v("https://blog.csdn.net/yeqiuzs/article/details/76862026")]),a._v(" "),e("h2",{attrs:{id:"paxos算法拓展"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#paxos算法拓展"}},[a._v("#")]),a._v(" Paxos算法拓展")]),a._v(" "),e("h3",{attrs:{id:"multi-paxos算法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#multi-paxos算法"}},[a._v("#")]),a._v(" Multi-Paxos算法")]),a._v(" "),e("p",[a._v("原始的Paxos算法(Basic\nPaxos)只能对一个值形成决议，决议的形成至少需要两次网络来回，在高并发情况下可能需要更多的网络来回，极端情况下甚至可能形成活锁。如果想连续确定多个值，Basic\nPaxos搞不定了。因此Basic Paxos几乎只是用来做理论研究，并不直接应用在实际工程中。")]),a._v(" "),e("p",[a._v("实际应用中几乎都需要连续确定多个值，而且希望能有更高的效率。Multi-Paxos正是为解决此问题而提出。Multi-Paxos基于Basic\nPaxos做了两点改进:")]),a._v(" "),e("ul",[e("li",[a._v("针对每一个要确定的值，运行一次Paxos算法实例(Instance)，形成决议。每一个Paxos实例使用唯一的Instance ID标识。")]),a._v(" "),e("li",[a._v("在所有Proposers中选举一个Leader，由Leader唯一地提交Proposal给Acceptors进行表决。这样没有Proposer竞争，解决了活锁问题。在系统中仅有一个Leader进行Value提交的情况下，Prepare阶段就可以跳过，从而将两阶段变为一阶段，提高效率。")])]),a._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/willpast/image/blog/ka_java/alg-dst-paxos-8.jpg",alt:"img"}})]),a._v(" "),e("p",[a._v("Multi-Paxos首先需要选举Leader，Leader的确定也是一次决议的形成，所以可执行一次Basic\nPaxos实例来选举出一个Leader。选出Leader之后只能由Leader提交Proposal，在Leader宕机之后服务临时不可用，需要重新选举Leader继续服务。在系统中仅有一个Leader进行Proposal提交的情况下，Prepare阶段可以跳过。")]),a._v(" "),e("p",[a._v("Multi-\nPaxos通过改变Prepare阶段的作用范围至后面Leader提交的所有实例，从而使得Leader的连续提交只需要执行一次Prepare阶段，后续只需要执行Accept阶段，将两阶段变为一阶段，提高了效率。为了区分连续提交的多个实例，每个实例使用一个Instance\nID标识，Instance ID由Leader本地递增生成即可。")]),a._v(" "),e("p",[a._v("Multi-Paxos允许有多个自认为是Leader的节点并发提交Proposal而不影响其安全性，这样的场景即退化为Basic Paxos。")]),a._v(" "),e("p",[a._v("Chubby和Boxwood均使用Multi-Paxos。ZooKeeper使用的Zab也是Multi-Paxos的变形。")]),a._v(" "),e("h2",{attrs:{id:"参考文章"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[a._v("#")]),a._v(" 参考文章")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("https://zhuanlan.zhihu.com/p/31780743")])]),a._v(" "),e("li",[e("p",[a._v("https://www.jdon.com/artichect/paxos.html")])]),a._v(" "),e("li",[e("p",[a._v("https://blog.csdn.net/yeqiuzs/article/details/76862026")])]),a._v(" "),e("li",[e("p",[a._v("https://blog.csdn.net/qq_35440678/article/details/78080431")])])])])}),[],!1,null,null,null);e.default=o.exports}}]);