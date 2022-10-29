<template>
  <div class="px-28 pt-2 flex justify-around">
    <div>
      <PinsSideBar />
    </div>
    <div class="flex-1 mx-36">
      <CommentPublish placeholder="发布一个沸点吧" text="发布"/>
    </div>
    <div>
      <ProfileCard/>
    </div>
  </div>
</template>

<script setup>
import CommentPublish from "../../components/CommentPublish/CommentPublish.vue";
import ProfileCard from "../../components/ProfileCard/ProfileCard.vue";
import PinsSideBar from "./PinsSideBar.vue";
</script>

<style lang="scss" scoped></style>
