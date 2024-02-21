<script setup>
import { StampsSwiper } from "@/entities/stamps-swiper";
import { partnersList } from "../config";
</script>

<template>
  <div class="partners">
    <div class="container">
      <div class="partners-inner">
        <h3>нам доверяют</h3>
        <StampsSwiper :stampsList="partnersList" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.partners {
  .partners-inner {
    position: relative;
    .swiper-wrapper {
      padding-top: 50px;
      .navigation {
        position: absolute;
        top: -50px;
        right: 0;
      }
    }
  }
}
</style>
<style lang="scss" scoped>
.partners {
  background: var(--white-color);
  .partners-inner {
    padding-top: 130px;
    padding-bottom: 135px;
    position: relative;
    h3 {
      position: relative;
      font-weight: 400;
      font-size: 64px;
      line-height: 54px;
      color: var(--text-color);
      padding-left: 72px;
      text-transform: uppercase;
      &:before {
        content: "";
        position: absolute;
        width: 45px;
        height: 45px;
        background: var(--text-color);
        top: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        border-radius: 999px;
      }
    }
  }
}
</style>
