<template>
  <div class="px-5 py-5 pb-10 bg-white rounded relative">
    <textarea
      :placeholder="placeholder"
      class="h-20 text-xs w-full bg-gray-100 rounded border-blue-500 px-2 py-2 focus:outline-blue-500 resize-none"
    ></textarea>
    <div class="absolute right-5">
      <button class="text-sm bg-blue-500 text-white w-16 rounded h-8">{{text}}</button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  placeholder: String,
  text: String
});
</script>

<style lang="scss" scoped></style>
