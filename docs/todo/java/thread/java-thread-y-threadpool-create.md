---
title: java-thread-y-threadpool-create
date: 2024-05-22 13:45:32
permalink: /pages/a66ea8/
categories: 
  - java
  - thread
tags: 
  - null
author: 
  name: Cyan
  link: https://github.com/willpast
sidebar: auto
---
# 线程池四种创建线程的方法

## 1. 四种方式

### 1.1  方式一：通过 Runnable 使用线程池

最基础的使用方式：无法知道执行结果

```java
 /**
     * 方式一：通过 Runnable 使用线程池
     * 无阻塞表现在：线程还没有执行完，就打印了 “总结耗时：”
     */
    private void testRunnable() {
        long start = System.currentTimeMillis();
        for (int i = 0; i < 1000; i++) {
            MyRunnable myRunnable = new MyRunnable();
            threadPoolTaskExecutor.submit(myRunnable);
        }
        logger.info(String.format("总结耗时：%s", System.currentTimeMillis() - start));
    }
```

### 1.2  方式二： 通过 Callable 使用线程池

使用Callable 可以监听到回调。会阻塞。后面的语句要等直接完成后

```java
    /**
     * 方式二： 使用Callable 可以监听到回调。
     * 阻塞表现在：总在最后打印 “总结耗时：”
     * Callable的Future 能接受到具体结果，也就是线程的生成的随机数
     */
    private void testCallable() {
        long start = System.currentTimeMillis();
        for (int i = 0; i < 1000; i++) {
            MyCallable myCallable = new MyCallable();
            Future<Double> future = threadPoolTaskExecutor.submit(myCallable);
            try {
                Double result = future.get();
                logger.error("Callable返回的结果为：" + result);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        logger.info(String.format("总结耗时：%s", System.currentTimeMillis() - start));
    }
```

### 1.3 方式三：threadPoolTaskExecutor.submitListenable 返回ListenableFuture 参数：Runnable

- 无阻塞表现在：线程还没有执行完，就打印了 “总结耗时：”
-  Runnable监听ListenableFuture 只能知道线程是否执行完毕，线程生成的结果（随机数无法得知）

```java
/**
     * 方式三： threadPoolTaskExecutor.submitListenable 返回ListenableFuture 参数：Runnable
     * 无阻塞表现在：线程还没有执行完，就打印了 “总结耗时：”
     * Runnable监听ListenableFuture 只能知道线程是否执行完毕，线程生成的结果（随机数无法得知）
     */
    private void testSubmitListenableRunnable() {
        long start = System.currentTimeMillis();
        for (int i = 0; i < 1000; i++) {
            MyRunnable myRunnable = new MyRunnable();
            ListenableFuture listenableFuture = threadPoolTaskExecutor.submitListenable(myRunnable);
            listenableFuture.addCallback(new SuccessCallback() {
                @Override
                public void onSuccess(Object o) {
                    logger.info("请求成功：" + Thread.currentThread().getName() + "返回的object:" + o);
                }
            }, new FailureCallback() {
                @Override
                public void onFailure(Throwable throwable) {
                    logger.info("请求失败：" + throwable.getMessage());
                }
            });
        }
        logger.info(String.format("总结耗时：%s", System.currentTimeMillis() - start));
    }
```

### 1.4 方式四： threadPoolTaskExecutor.submitListenable 返回ListenableFuture 参数：Callable

```java
/**
 * 方式四： threadPoolTaskExecutor.submitListenable 返回ListenableFuture 参数：Callable
 * 无阻塞表现在：线程还没有执行完，就打印了 “总结耗时：”
 * Callable监听ListenableFuture 能接受到具体结果，也就是线程的生成的随机数
 */
private void testSubmitListenableCallable() {
    long start = System.currentTimeMillis();
    for (int i = 0; i < 1000; i++) {

        MyCallable myCallable = new MyCallable();
        ListenableFuture<Double> listenableFuture = threadPoolTaskExecutor.submitListenable(myCallable);
        listenableFuture.addCallback(new SuccessCallback<Double>() {
            @Override
            public void onSuccess(Double result) {
                logger.info("请求成功：" + Thread.currentThread().getName() + "具体的执行结果:" + result);
            }
        }, new FailureCallback() {
            @Override
            public void onFailure(Throwable throwable) {
                logger.info("请求失败：" + throwable.getMessage());
            }
        });
    }
    logger.info(String.format("总结耗时：%s", System.currentTimeMillis() - start));
}
```

## 2. 测试

```java
package com.zszdevelop.threadpooldemo;

import com.zszdevelop.threadpooldemo.service.impl.AsyncServiceImpl;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;
import org.springframework.util.concurrent.FailureCallback;
import org.springframework.util.concurrent.ListenableFuture;
import org.springframework.util.concurrent.SuccessCallback;

import java.util.concurrent.Callable;
import java.util.concurrent.Future;
import java.util.concurrent.ThreadPoolExecutor;

/**
 * @author 作者: zhangshengzhong
 * @文件名: ThreadPoolTest
 * @版本号:1.0
 * @创建日期: 2020/12/9 9:32
 * @描述:
 */
public class ThreadPoolTest {
    Logger logger = LoggerFactory.getLogger(this.getClass());
    private static ThreadPoolTaskExecutor threadPoolTaskExecutor;

    @BeforeAll
    public static void init(){
        threadPoolTaskExecutor = new ThreadPoolTaskExecutor();
        threadPoolTaskExecutor.setCorePoolSize(5);
        threadPoolTaskExecutor.setMaxPoolSize(10);
        threadPoolTaskExecutor.setQueueCapacity(50);
        threadPoolTaskExecutor.setKeepAliveSeconds(30);
        threadPoolTaskExecutor.setThreadNamePrefix("MY-Thread");
        threadPoolTaskExecutor.setWaitForTasksToCompleteOnShutdown(true);
        threadPoolTaskExecutor.setAwaitTerminationSeconds(60);
        threadPoolTaskExecutor.setRejectedExecutionHandler(new ThreadPoolExecutor.CallerRunsPolicy());
        threadPoolTaskExecutor.initialize();
    }

    @Test
    public void test(){



//            方式一：通过 Runnable 使用线程池
//        testRunnable();
        // 方式二： 使用Callable 可以监听到回调。会阻塞。后面的语句要等直接完成后
            testCallable();

        // 方式三： threadPoolTaskExecutor.submitListenable 返回ListenableFuture 无阻塞的形式 参数：Runnable
//           testSubmitListenableRunnable();

        // 方式四： threadPoolTaskExecutor.submitListenable 返回ListenableFuture 无阻塞的形式 参数：Callable
//           testSubmitListenableCallable();

    }


    /**
     * 方式一：通过 Runnable 使用线程池
     * 无阻塞表现在：线程还没有执行完，就打印了 “总结耗时：”
     */
    private void testRunnable() {
        long start = System.currentTimeMillis();
        for (int i = 0; i < 1000; i++) {
            MyRunnable myRunnable = new MyRunnable();
            threadPoolTaskExecutor.submit(myRunnable);
        }
        logger.info(String.format("总结耗时：%s", System.currentTimeMillis() - start));
    }

    /**
     * 方式二： 使用Callable 可以监听到回调。
     * 阻塞表现在：总在最后打印 “总结耗时：”
     * Callable的Future 能接受到具体结果，也就是线程的生成的随机数
     */
    private void testCallable() {
        long start = System.currentTimeMillis();
        for (int i = 0; i < 1000; i++) {
            MyCallable myCallable = new MyCallable();
            Future<Double> future = threadPoolTaskExecutor.submit(myCallable);
            try {
                Double result = future.get();
                logger.error("Callable返回的结果为：" + result);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        logger.info(String.format("总结耗时：%s", System.currentTimeMillis() - start));
    }


    /**
     * 方式三： threadPoolTaskExecutor.submitListenable 返回ListenableFuture 参数：Runnable
     * 无阻塞表现在：线程还没有执行完，就打印了 “总结耗时：”
     * Runnable监听ListenableFuture 只能知道线程是否执行完毕，线程生成的结果（随机数无法得知）
     */
    private void testSubmitListenableRunnable() {
        long start = System.currentTimeMillis();
        for (int i = 0; i < 1000; i++) {
            MyRunnable myRunnable = new MyRunnable();
            ListenableFuture listenableFuture = threadPoolTaskExecutor.submitListenable(myRunnable);
            listenableFuture.addCallback(new SuccessCallback() {
                @Override
                public void onSuccess(Object o) {
                    logger.info("请求成功：" + Thread.currentThread().getName() + "返回的object:" + o);
                }
            }, new FailureCallback() {
                @Override
                public void onFailure(Throwable throwable) {
                    logger.info("请求失败：" + throwable.getMessage());
                }
            });
        }
        logger.info(String.format("总结耗时：%s", System.currentTimeMillis() - start));
    }

    /**
     * 方式四： threadPoolTaskExecutor.submitListenable 返回ListenableFuture 参数：Callable
     * 无阻塞表现在：线程还没有执行完，就打印了 “总结耗时：”
     * Callable监听ListenableFuture 能接受到具体结果，也就是线程的生成的随机数
     */
    private void testSubmitListenableCallable() {
        long start = System.currentTimeMillis();
        for (int i = 0; i < 1000; i++) {

            MyCallable myCallable = new MyCallable();
            ListenableFuture<Double> listenableFuture = threadPoolTaskExecutor.submitListenable(myCallable);
            listenableFuture.addCallback(new SuccessCallback<Double>() {
                @Override
                public void onSuccess(Double result) {
                    logger.info("请求成功：" + Thread.currentThread().getName() + "具体的执行结果:" + result);
                }
            }, new FailureCallback() {
                @Override
                public void onFailure(Throwable throwable) {
                    logger.info("请求失败：" + throwable.getMessage());
                }
            });
        }
        logger.info(String.format("总结耗时：%s", System.currentTimeMillis() - start));
    }


    class MyRunnable implements Runnable {


        MyRunnable() {

        }

        @Override
        public void run() {
            double random = Math.random();
            // 执行你要的操作
            logger.info("当前线程：" + Thread.currentThread().getName() + "  生成的随机数：" + random);

        }

    }

    class MyCallable implements Callable<Double> {


        MyCallable() {

        }

        @Override
        public Double call() throws Exception {
            double random = Math.random();
            // 执行你要的操作
            logger.info("当前线程：" + Thread.currentThread().getName() + "  生成的随机数：" + random);
            return random;
        }
    }
}
```