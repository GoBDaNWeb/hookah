<script setup>
import { ref } from "vue";
defineProps(["ordersInfo", "title", "img", "isGrid", "listTitle"]);
import { KinesisContainer, KinesisElement } from "vue-kinesis";
</script>

<template>
  <div class="about">
    <kinesis-container event="scroll">
      <div class="coals">
        <kinesis-element :strength="120" axis="x">
          <img
            v-motion
            :delay="100"
            :initial="{
              x: -100,
              opacity: 0,
            }"
            :visible-once="{
              x: 0,
              opacity: 1,
              transition: {
                duration: 500,
              },
            }"
            src="@/shared/assets/images/coals/1.png"
            alt=""
          />
        </kinesis-element>
        <kinesis-element :strength="70" axis="x">
          <img
            v-motion
            :delay="150"
            :initial="{
              x: -100,
              opacity: 0,
            }"
            :visible-once="{
              x: 0,
              opacity: 1,
              transition: {
                duration: 500,
              },
            }"
            src="@/shared/assets/images/coals/2.png"
            alt=""
          />
        </kinesis-element>
        <kinesis-element :strength="100" axis="x">
          <img
            v-motion
            :delay="200"
            :initial="{
              x: -100,
              opacity: 0,
            }"
            :visible-once="{
              x: 0,
              opacity: 1,
              transition: {
                duration: 500,
              },
            }"
            src="@/shared/assets/images/coals/3.png"
            alt=""
          />
        </kinesis-element>
        <kinesis-element :strength="60" axis="x">
          <img
            v-motion
            :delay="250"
            :initial="{
              x: -50,
              opacity: 0,
            }"
            :visible-once="{
              x: 0,
              opacity: 1,
              transition: {
                duration: 500,
              },
            }"
            src="@/shared/assets/images/coals/4.png"
            alt=""
          />
        </kinesis-element>
      </div>
      <div class="container">
        <div class="about-inner">
          <div class="left">
            <div class="text">
              <span
                v-motion
                :delay="100"
                :initial="{
                  x: -50,
                  opacity: 0,
                }"
                :visible-once="{
                  x: 0,
                  opacity: 1,
                  transition: {
                    duration: 500,
                  },
                }"
              >
                {{ title }}
              </span>
              <p
                v-motion
                :delay="300"
                :initial="{
                  x: -50,
                  opacity: 0,
                }"
                :visible-once="{
                  x: 0,
                  opacity: 1,
                  transition: {
                    duration: 500,
                  },
                }"
              >
                Alpha hookah — лучший кальян 2021 по версии John Calliano Awards
                2021, 2022 гг.
              </p>
            </div>
            <div
              class="image-wrapper"
              v-motion
              :initial="{
                scale: 0.8,
                opacity: 0,
              }"
              :visible-once="{
                scale: 1,
                opacity: 1,
                transition: {
                  duration: 800,
                },
              }"
            >
              <img :src="img" alt="hookah" />
            </div>
            <h3>{{ listTitle }}</h3>
          </div>
          <div class="right">
            <h3
              v-motion
              :delay="100"
              :initial="{
                x: 50,
                opacity: 0,
              }"
              :visible-once="{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 500,
                },
              }"
            >
              {{ listTitle }}
            </h3>
            <div class="order-list" :class="isGrid ? 'grid' : ''">
              <div
                class="order-item"
                v-for="(order, index) in ordersInfo"
                :key="order.id"
                v-motion
                :delay="index * 150"
                :initial="{
                  x: -100,
                  opacity: 0,
                }"
                :visible-once="{
                  x: 0,
                  opacity: 1,
                  transition: {
                    duration: 400,
                  },
                }"
              >
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
    </kinesis-container>
  </div>
</template>

<style lang="scss" scoped>
@import "@/shared/styles/vars";

.about {
  position: relative;
  .coals {
    position: absolute;
    bottom: 170px;
    width: 360px;
    height: 240px;
    left: 0;
    // transform: rotate(10deg);
    z-index: 2;
    @media (max-width: $tab) {
      bottom: auto;
      top: 18%;
    }
    @media (max-width: $pre-mob) {
      width: 168px;
      height: 108px;
    }
    & > div {
      width: 100%;
      height: 100%;
      position: absolute;
      &:nth-child(1) {
        width: 73px;
        height: 66px;
        bottom: 106px;
        left: 210px;
      }
      &:nth-child(2) {
        width: 108px;
        height: 93px;
        bottom: 25px;
        left: 90px;
      }
      &:nth-child(3) {
        width: 73px;
        height: 82px;
        bottom: 130px;
        left: 123px;
      }
      &:nth-child(4) {
        width: 102px;
        height: 194px;
        bottom: 0;
        left: -20px;
      }
    }
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
  .about-inner {
    display: flex;
    padding-top: 130px;
    padding-bottom: 95px;
    gap: 25px;
    @media (max-width: $desktop-sm) {
      padding-top: 80px;
    }
    @media (max-width: $tab) {
      flex-direction: column;
      gap: 40px;
    }
    .left {
      width: 45%;
      position: relative;
      @media (max-width: $tab) {
        width: 100%;
        display: flex;
        flex-direction: column-reverse;
        gap: 30px;
      }
      h3 {
        font-weight: 400;
        font-size: 35px;
        line-height: 29px;
        text-transform: uppercase;
        color: var(--text-color);
        display: none;
        margin-bottom: 40px;
        @media (max-width: $tab) {
          display: block;
        }
      }
      .image-wrapper {
        width: 100%;
        position: absolute;
        bottom: 0;
        @media (max-width: $tab) {
          position: relative;
        }
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
        z-index: 2;
        @media (max-width: $tab) {
          position: relative;
          max-width: 100%;
          gap: 15px;
          padding-top: 27px;
          padding-bottom: 30px;
        }
        span {
          font-weight: 400;
          font-size: 36px;
          line-height: 36px;
          color: var(--text-color);
          text-transform: uppercase;
          @media (max-width: $tab-sm) {
            font-size: 24px;
            line-height: 26px;
          }
        }
        p {
          font-weight: 400;
          font-size: 16px;
          line-height: 20.8px;
          color: var(--text-color);
          @media (max-width: $tab-sm) {
            font-size: 16px;
            line-height: 20px;
          }
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
          @media (max-width: $tab-sm) {
            width: 12px;
            height: 12px;
          }
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
      @media (max-width: $tab) {
        width: 100%;
      }
      h3 {
        font-weight: 400;
        font-size: 64px;
        line-height: 54.4px;
        text-transform: uppercase;
        color: var(--text-color);
        @media (max-width: $tab) {
          display: none;
        }
      }
      .order-list.grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        row-gap: 70px;
        column-gap: 26px;
        @media (max-width: $tab) {
          grid-template-columns: repeat(1, 1fr);
          row-gap: 34px;
        }
      }
      .order-list {
        display: flex;
        flex-direction: column;
        gap: 70px;
        border-top: 1px solid var(--text-color);
        padding-top: 80px;
        margin-top: 50px;
        position: relative;
        @media (max-width: $tab) {
          border-top: none;
          margin-top: 0;
          padding: 0;
        }
        &:before {
          content: "";
          position: absolute;
          left: 0;
          height: 50px;
          width: 1px;
          top: 0;
          left: 0;
          background: var(--text-color);
          @media (max-width: $tab) {
            display: none;
          }
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
          @media (max-width: $tab) {
            display: none;
          }
        }
        .order-item {
          display: flex;
          gap: 25px;
          align-items: center;
          @media (max-width: $tab-sm) {
            gap: 23px;
          }
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
            @media (max-width: $tab-sm) {
              gap: 15px;
            }
            span {
              font-weight: 400;
              font-size: 24px;
              line-height: 26px;
              color: var(--text-color);
              text-transform: uppercase;
              @media (max-width: $tab-sm) {
                font-size: 20px;
                line-height: 22px;
              }
            }
            p {
              font-weight: 400;
              font-size: 16px;
              line-height: 20px;
              color: var(--text-color);
              @media (max-width: $tab-sm) {
                font-size: 16px;
                line-height: 20px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
