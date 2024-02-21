<script setup>
defineProps(["ordersInfo", "title", "img", "isGrid", "listTitle"]);
</script>

<template>
  <div class="about">
    <div class="coals">
      <img src="@/shared/assets/images/coals.png" alt="" />
    </div>
    <div class="container">
      <div class="about-inner">
        <div class="left">
          <div class="text">
            <span> {{ title }}</span>
            <p>
              Alpha hookah — лучший кальян 2021 по версии John Calliano Awards
              2021, 2022 гг.
            </p>
          </div>
          <div class="image-wrapper">
            <img :src="img" alt="hookah" />
          </div>
        </div>
        <div class="right">
          <h3>{{ listTitle }}</h3>
          <div class="order-list" :class="isGrid ? 'grid' : ''">
            <div class="order-item" v-for="order in ordersInfo" :key="order.id">
              <div class="image-wrapper">
                <img :src="order.img" alt="" />
              </div>
              <div class="text">
                <span>{{ order.title }}</span>
                <p>
                  {{ order.text }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about {
  position: relative;
  .coals {
    position: absolute;
    bottom: 170px;
    width: 360px;
    height: 240px;
    left: 0;
    transform: rotate(10deg);
    z-index: 2;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .about-inner {
    display: flex;
    padding-top: 130px;
    padding-bottom: 95px;
    gap: 25px;
    .left {
      width: 45%;
      position: relative;
      .image-wrapper {
        width: 100%;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          pointer-events: none;
        }
      }
      .text {
        position: absolute;
        top: 0;
        left: 0;
        max-width: 200px;
        display: flex;
        flex-direction: column;
        gap: 25px;
        padding-top: 45px;
        padding-bottom: 50px;
        span {
          font-weight: 400;
          font-size: 36px;
          line-height: 36px;
          color: var(--text-color);
          text-transform: uppercase;
        }
        p {
          font-weight: 400;
          font-size: 16px;
          line-height: 20.8px;
          color: var(--text-color);
        }
        &:before {
          content: "";
          position: absolute;
          background: var(--text-color);
          width: 20px;
          height: 20px;
          border-radius: 999px;
          top: 0;
          left: 0;
        }
        &:after {
          content: "";
          position: absolute;
          background: var(--text-color);
          width: 100%;
          height: 1px;
          bottom: 0;
          left: 0;
        }
      }
    }
    .right {
      width: 55%;
      h3 {
        font-weight: 400;
        font-size: 64px;
        line-height: 54.4px;
        text-transform: uppercase;
        color: var(--text-color);
      }
      .order-list.grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        row-gap: 70px;
        column-gap: 26px;
      }
      .order-list {
        display: flex;
        flex-direction: column;
        gap: 70px;
        border-top: 1px solid var(--text-color);
        padding-top: 80px;
        margin-top: 50px;
        position: relative;
        &:before {
          content: "";
          position: absolute;
          left: 0;
          height: 50px;
          width: 1px;
          top: 0;
          left: 0;
          background: var(--text-color);
        }
        &:after {
          content: "";
          position: absolute;
          left: 0;
          height: 50px;
          width: 1px;
          top: 0;
          left: 0;
          right: 0;
          margin: auto;
          background: var(--text-color);
        }
        .order-item {
          display: flex;
          gap: 25px;
          align-items: center;
          .image-wrapper {
            min-width: 90px;
            height: 90px;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              pointer-events: none;
            }
          }
          .text {
            display: flex;
            flex-direction: column;
            gap: 20px;
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
    }
  }
}
</style>
