<script setup>
import { ManualSwiper } from "@/entities/manual-swiper";

defineProps(["index", "hasTitle", "congrats", "option", "list", "imgs"]);
</script>

<template>
  <div class="manual-item">
    <div class="left">
      <h1 v-if="hasTitle">инструкция</h1>
      <div class="content">
        <h4>{{ index }}</h4>
        <h5>{{ option }}</h5>
        <ul>
          <li v-for="item in list" :key="item">{{ item }}</li>
        </ul>
        <h6>{{ congrats }}</h6>
      </div>
    </div>
    <div class="right">
      <ManualSwiper :imgs="imgs" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.manual-item {
  display: flex;
  align-items: center;
  gap: 55px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-top: 1px solid var(--text-color);
  &:first-child {
    border-top: none;
    .left {
      padding-top: 0;
    }
    .right {
      padding-top: 20px;
      border-top: 1px solid var(--text-color);
    }
  }
  .left {
    width: 50%;
    padding-top: 130px;
    h1 {
      font-weight: 400;
      font-size: 80px;
      line-height: 72px;
      text-transform: uppercase;
      color: var(--text-color);
      margin-bottom: 50px;
    }
    h4 {
      font-weight: 400;
      font-size: 64px;
      line-height: 54px;
      color: var(--text-color);
    }
    h5 {
      color: var(--text-color);
      text-transform: uppercase;
      font-weight: 400;
      font-size: 32px;
      line-height: 35px;
      margin-top: 50px;
    }
    ul {
      display: flex;
      flex-direction: column;
      gap: 15px;
      margin-top: 30px;
      li {
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        color: var(--text-color);

        position: relative;
        padding-left: 30px;
        &:before {
          content: "";
          position: absolute;
          top: 5px;
          left: 0;
          width: 10px;
          height: 10px;
          background: var(--text-color);
          border-radius: 999px;
        }
      }
    }
    h6 {
      font-weight: 400;
      font-size: 24px;
      line-height: 26px;
      color: var(--text-color);
      text-transform: uppercase;
      margin-top: 50px;
    }
  }
  .right {
    width: 50%;
  }
}
</style>
