<template>
  <div>
    <NavBar />
    <div class=" bg-gray-100 pb-10">
      <router-view></router-view>
    </div>
    <FooterBottom />
  </div>
</template>

<script setup>
import NavBar from "./components/NavBar/NavBar.vue";
import FooterBottom from "./components/FooterBottom/FooterBottom.vue";
</script>

<style lang="scss" scoped></style>
