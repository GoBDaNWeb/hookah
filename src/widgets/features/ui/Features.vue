<script setup>
defineProps(["featureList", "isWhite"]);
</script>

<template>
  <div class="features">
    <div class="container">
      <div class="features-inner">
        <div
          class="feature"
          :class="isWhite ? 'white' : ''"
          v-for="feature in featureList"
          :key="feature.id"
        >
          <div class="image-wrapper">
            <img :src="feature.img" alt="" />
            <span>{{ feature.id }}</span>
          </div>
          <span>{{ feature.title }}</span>
          <p>{{ feature.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.features {
  background: var(--white-color);
  .features-inner {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 60px;
    padding-top: 130px;
    position: relative;
    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: -30px;
      width: 100%;
      height: 1px;
      background: var(--text-color);
    }
    .feature.white {
      .image-wrapper {
        span {
          color: var(--white-color);
        }
      }
    }
    .feature {
      display: flex;
      flex-direction: column;
      gap: 20px;
      position: relative;
      padding-bottom: 100px;
      &:before {
        content: "";
        position: absolute;
        height: 50px;
        width: 1px;
        background: var(--text-color);
        left: -30px;
        bottom: 0;
      }
      .image-wrapper {
        position: relative;
        margin-bottom: 16px;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        span {
          position: absolute;
          top: 20px;
          right: 17px;
          font-weight: 400;
          font-size: 64px;
          line-height: 54px;
          color: var(--text-color);
        }
      }
      span {
        font-weight: 400;
        font-size: 24px;
        line-height: 26px;
        color: var(--text-color);
        text-transform: uppercase;
      }
      p {
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        color: var(--text-color);
      }
    }
  }
}
</style>
