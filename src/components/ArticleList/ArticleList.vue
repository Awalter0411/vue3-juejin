<template>
  <div class="pt-5 rounded">
    <div>
      <div class="bg-white px-5 h-14" style="line-height: 4rem">
        <div class="flex">
          <router-link to="/">
            <a class="text-blue-500">推荐</a>
          </router-link>
          <span class="mx-2 text-gray-300">|</span>
          <router-link to="/">
            <a class="text-gray-400 hover:text-blue-500">最新</a>
          </router-link>
          <span class="mx-2 text-gray-300">|</span>
          <router-link to="/">
            <a class="text-gray-400 hover:text-blue-500">热榜</a>
          </router-link>
        </div>
      </div>
      <div class="bg-white">
        <ArticleListItem :data="item" v-for="item in data" :key="item.id" />
      </div>
    </div>
  </div>
</template>

<script setup>
import ArticleListItem from "./ArticleListItem.vue";
defineProps({
  data: Object,
});
</script>

<style lang="scss" scoped></style>
