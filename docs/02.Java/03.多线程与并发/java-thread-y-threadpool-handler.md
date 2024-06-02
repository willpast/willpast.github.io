---
title: java-thread-y-threadpool-handler
date: 2024-05-22 13:45:32
permalink: /pages/8cfd4e/
categories:
  - java
  - thread
tags:
  - 
author: 
  name: Cyan
  link: https://github.com/willpast
---
# 线程池的处理流程

## 1. 处理流程

创建线程池需要使用ThreadPoolExecutor 类，他的构造函数参数如下

```java
public ThreadPoolExecutor(int corePoolSize,    //核心线程的数量
                          int maximumPoolSize,    //最大线程数量
                          long keepAliveTime,    //超出核心线程数量以外的线程空余存活时间
                          TimeUnit unit,    //存活时间的单位
                          BlockingQueue<Runnable> workQueue,    //保存待执行任务的队列
                          ThreadFactory threadFactory,    //创建新线程使用的工厂
                          RejectedExecutionHandler handler // 当任务无法执行时的处理器
                          ) {...}
```

参数介绍如注释所示，要了解这些参数左右着什么，就需要了解线程池具体的执行方法`ThreadPoolExecutor.execute`:

```
public void execute(Runnable command) {
    if (command == null)
        throw new NullPointerException();

    int c = ctl.get();
    //1.当前池中线程比核心数少，新建一个线程执行任务
    if (workerCountOf(c) < corePoolSize) {   
        if (addWorker(command, true))
            return;
        c = ctl.get();
    }
    //2.核心池已满，但任务队列未满，添加到队列中
    if (isRunning(c) && workQueue.offer(command)) {   
        int recheck = ctl.get();
        if (! isRunning(recheck) && remove(command))    //如果这时被关闭了，拒绝任务
            reject(command);
        else if (workerCountOf(recheck) == 0)    //如果之前的线程已被销毁完，新建一个线程
            addWorker(null, false);
    }
    //3.核心池已满，队列已满，试着创建一个新线程
    else if (!addWorker(command, false))
        reject(command);    //如果创建新线程失败了，说明线程池被关闭或者线程池完全满了，拒绝任务
}
```

流程图

![image-20200316223656604](https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20200316223656604.png)

## 2. 构造器的作用

- corePoolSize：核心线程池数量
  - 在线程数少于核心数量时，有新任务进来就新建一个线程，即使有的线程没事干
  - 等超出核心数量后，就不会新建线程了，空闲的线程就得去任务队列里取任务执行
- maximumPoolSize: 最大线程数量
  - 包含核心线程池数量+核心以为的数量
  - 如果任务队列满了，并且池中线程数小于最大线程数，会再创建新的线程执行任务
- `keepAliveTime`：核心池以外的线程存活时间，即没有任务的外包的存活时间
  - 如果给线程池设置 `allowCoreThreadTimeOut(true)`，则核心线程在空闲时头上也会响起死亡的倒计时
  - 如果任务是多而容易执行的，可以调大这个参数，那样线程就可以在存活的时间里有更大可能接受新任务
- `workQueue`：保存待执行任务的阻塞队列
  - ArrayBlockingQueue：基于数组、有界，按 FIFO（先进先出）原则对元素进行排序
  - LinkedBlockingQueue：基于链表，按FIFO （先进先出） 排序元素
    - 吞吐量通常要高于 ArrayBlockingQueue
    - Executors.newFixedThreadPool() 使用了这个队列
  - SynchronousQueue：不存储元素的阻塞队列
    - 每个插入操作必须等到另一个线程调用移除操作，否则插入操作一直处于阻塞状态
    - 吞吐量通常要高于 LinkedBlockingQueue
    - Executors.newCachedThreadPool使用了这个队列
  - PriorityBlockingQueue：具有优先级的、无限阻塞队列
- `threadFactory`：每个线程创建的地方
  - 可以给线程起个好听的名字，设置个优先级啥的
- handler：饱和策略，大家都很忙，咋办呢，有四种策略
  - CallerRunsPolicy：只要线程池没关闭，就直接用调用者所在线程来运行任务
  - AbortPolicy：直接抛出 RejectedExecutionException 异
  - DiscardPolicy：悄悄把任务放生，不做了
  - DiscardOldestPolicy：把队列里待最久的那个任务扔了，然后再调用 execute() 试试看能行不
  - 我们也可以实现自己的 RejectedExecutionHandler 接口自定义策略，比如如记录日志什么的
