<template>
  <div class="w-8/12 m-auto">
    <ArticleList :data="data"/>
  </div>
</template>

<script setup>
import ArticleList from '../../components/ArticleList/ArticleList.vue';
const data = [
    {
      id: 1,
      creator: 'demo2',
      createTime: '2020-10-10',
      label: ['面试', '框架'],
      title: 'vue3框架测试',
      view: 10,
      star: 10,
      comment: 10,
      description: "本文内容介绍 不是变态，勿喷。 职位是前端高级开发工程师（xia皮） 每个问题都会分析一下面试官的心理活动 以上3点不感兴趣的请X走。（弱小心灵经不起喷） 1. 交友不慎，开局就被强迫面试 我有个兼职"
    },
    {
      id: 2,
      creator: 'demo3',
      createTime: '2020-11-10',
      label: ['面试', '框架'],
      title: 'vue3框架测试',
      view: 10,
      star: 10,
      comment: 10,
      description: "123123123123"
    },
    {
      id: 3,
      creator: 'demo3',
      createTime: '2020-11-10',
      label: ['面试', '框架'],
      title: 'vue3框架测试',
      view: 10,
      star: 10,
      comment: 10,
      description: "123123123123"
    },
    {
      id: 4,
      creator: 'demo3',
      createTime: '2020-11-10',
      label: ['面试', '框架'],
      title: 'vue3框架测试',
      view: 10,
      star: 10,
      comment: 10,
      description: "123123123123"
    },
    {
      id: 5,
      creator: 'demo2',
      createTime: '2020-10-10',
      label: ['面试', '框架'],
      title: 'vue3框架测试',
      view: 10,
      star: 10,
      comment: 10,
      description: "本文内容介绍 不是变态，勿喷。 职位是前端高级开发工程师（xia皮） 每个问题都会分析一下面试官的心理活动 以上3点不感兴趣的请X走。（弱小心灵经不起喷） 1. 交友不慎，开局就被强迫面试 我有个兼职"
    },
  ]
</script>

<style lang="scss" scoped>

</style>