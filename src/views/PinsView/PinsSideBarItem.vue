<template>
  <router-link :to="'/pins/' + link">
    <li
      class="px-2 hover:bg-gray-200 transition-all hover:cursor-pointer flex h-10 items-center"
    >
      <template v-if="isActive">
        <slot name="activeIcon"></slot>
      </template>
      <template v-else>
        <slot name="icon"></slot>
      </template>
      <div>{{ text }}</div>
    </li>
  </router-link>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
const props = defineProps({
  link: String,
  text: String,
});
const route = useRoute();
console.log();
const isActive = computed(() => {
  return route.path.slice(6) === props.link;
});
</script>

<style lang="scss" scoped></style>
