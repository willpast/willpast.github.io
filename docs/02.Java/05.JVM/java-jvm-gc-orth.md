---
category: 
  - Java
  - JVM
title: java-jvm-gc-orth
date: 2024-05-22 13:45:32
permalink: /pages/f9b7cf/
categories: 
  - java
  - jvm
tags: 
  - 
author: 
  name: Cyan
  link: https://github.com/willpast
---

# 垃圾收集器垃圾收集算法

![image-20190925225149527](https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20190925225149527.png)

## 1. 标记-清除算法

该算法分为“标记”和“清除”阶段：首先标记出所有需要回收的对象，在标记完成后统一回收所有被标记的对象。它是最基础的收集算法，后续的算法都是对其不足进行改进得到。这种垃圾收集算法会带来两个明显的问题：

1. **效率问题**
2. **空间问题（标记清除后会产生大量不连续的碎片）**

![image-20190925225333900](https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20190925225333900.png)

## 2. 复制算法

为了解决效率问题，“复制”收集算法出现了。它可以将内存分为大小相同的两块，每次使用其中的一块。当这一块的内存使用完后，就将还存活的对象复制到另一块去，然后再把使用的空间一次清理掉。这样就使每次的内存回收都是对内存区间的一半进行回收。

![image-20190925225448917](https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20190925225448917.png)

## 3. 标记-整理算法

根据老年代的特点提出的一种标记算法，标记过程仍然与“标记-清除”算法一样，但后续步骤不是直接对可回收对象回收，而是让所有存活的对象向一端移动，然后直接清理掉端边界以外的内存。

![image-20190925225549662](https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20190925225549662.png)

## 4. 分代收集算法

当前虚拟机的垃圾收集都采用分代收集算法，这种算法没有什么新的思想，只是根据对象存活周期的不同将内存分为几块。一般将 java 堆分为新生代和老年代，这样我们就可以根据各个年代的特点选择合适的垃圾收集算法。

**比如在新生代中，每次收集都会有大量对象死去，所以可以选择复制算法，只需要付出少量对象的复制成本就可以完成每次垃圾收集。而老年代的对象存活几率是比较高的，而且没有额外的空间对它进行分配担保，所以我们必须选择“标记-清除”或“标记-整理”算法进行垃圾收集。**

**延伸面试问题：** HotSpot 为什么要分为新生代和老年代？

