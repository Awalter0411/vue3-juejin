<template>
  <div>
    <div
      class="flex justify-between mt-5 px-20 h-10 leading-5 shadow-xl shadow-gray-100"
    >
      <div class="flex justify-around w-1/3">
        <LogoContainer />
        <NavItem href="/" text="首页" />
        <NavItem href="/pins/new" text="沸点" />
        <NavItem href="/" text="课程" />
        <NavItem href="/" text="商城" />
      </div>
      <div class="flex justify-around w-1/3">
        <SearchInput />
        <CreatorButton />
        <NavItem href="/" text="我的" />
      </div>
    </div>
  </div>
</template>

<script setup>
import NavItem from "./NavItem.vue";
import SearchInput from "./SearchInput.vue";
import CreatorButton from "./CreatorButton.vue";
import LogoContainer from "./LogoContainer.vue";
</script>

<style lang="scss" scoped></style>
