<template>
  <div>
    <router-link :to="href">
      <a class="hover:border-b-2 border-blue-400 block pb-4">{{ text }}</a>
    </router-link>
  </div>
</template>

<script setup>
defineProps({
  href: String,
  text: String,
});
</script>

<style lang="scss" scoped></style>
