<script setup>
import { ref, reactive } from "vue";
import { TelegramIcon } from "@/shared/icons";
import { WhatsappIcon } from "@/shared/icons";
import { Button } from "@/shared/ui/button";
import { useModalStore } from "@/entities/modal-store";
import { HeroSwiper } from "@/entities/hero-swiper";
import { KinesisContainer, KinesisElement } from "vue-kinesis";
defineProps(["tabs", "title", "isMain", "cost", "costDescr", "list", "imgs"]);

const modal = useModalStore();

const currentTab = reactive({ tab: 0 });
const handleSetTab = (index) => {
  currentTab.tab = index;
};
</script>

<template>
  <div class="hero">
    <div class="container">
      <div class="hero-inner">
        <div class="left">
          <h1
            v-motion
            :initial="{
              x: -100,
              opacity: 0,
            }"
            :enter="{
              x: 0,
              opacity: 1,
            }"
            :class="isMain ? 'main' : ''"
          >
            {{ title }}
          </h1>
          <div class="info">
            <div class="info-left">
              <div class="cost">
                <span>{{ cost }}</span>

                <div v-html="costDescr"></div>
              </div>
            </div>
            <div class="info-right">
              <ul>
                <li
                  v-for="(item, index) in list"
                  :key="item"
                  v-motion
                  :delay="index * 150"
                  :initial="{
                    x: -50,
                    opacity: 0,
                  }"
                  :visible-once="{
                    x: 0,
                    opacity: 1,
                  }"
                >
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
          <div class="contacts">
            <a href="tel:8 800 000-00-00">8 800 000-00-00</a>
            <div class="socials">
              <kinesis-container>
                <kinesis-element :strength="10" type="depth">
                  <Button variable="social">
                    <TelegramIcon />
                  </Button>
                </kinesis-element>
              </kinesis-container>
              <kinesis-container>
                <kinesis-element :strength="10" type="depth">
                  <Button variable="social">
                    <WhatsappIcon />
                  </Button>
                </kinesis-element>
              </kinesis-container>
            </div>
            <Button variable="primary" :click="modal.handleOpenOrderModal">
              заказать кальян
            </Button>
          </div>
        </div>
        <div class="right">
          <div class="top">
            <ul v-if="tabs">
              <li
                v-for="(tab, index) in tabs"
                :key="tab"
                v-motion
                :delay="index * 150"
                :initial="{
                  y: -50,
                  opacity: 0,
                }"
                :visible-once="{
                  y: 0,
                  opacity: 1,
                }"
              >
                <button
                  :class="index === currentTab.tab ? 'active' : ''"
                  @click="handleSetTab(index)"
                >
                  {{ tab }}
                </button>
              </li>
            </ul>
          </div>
          <kinesis-container>
            <div
              class="images"
              v-motion
              :delay="300"
              :initial="{
                opacity: 0,
              }"
              :enter="{
                opacity: 1,
              }"
            >
              <kinesis-element v-if="tabs" :strength="20">
                <HeroSwiper :imgs="imgs" :currentTab="currentTab.tab" />
              </kinesis-element>
              <kinesis-element v-else :strength="20">
                <div
                  class="image-wrapper"
                  v-for="(img, index) in imgs"
                  :key="index"
                >
                  <img :src="img" alt="photo" />
                </div>
              </kinesis-element>
            </div>
          </kinesis-container>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/shared/styles/vars";
.hero {
  position: relative;
  &:before {
    content: "";
    background: var(--white-color);
    width: calc(50% + 10px);
    left: 0;
    top: 0;
    position: absolute;
    height: 100%;
    @media (max-width: $desktop-md-2) {
      width: calc(48% + 10px);
    }
    @media (max-width: $tab) {
      display: none;
    }
  }
  .hero-inner {
    display: flex;
    // min-height: 100vh;
    gap: 40px;
    @media (max-width: $desktop-sm) {
      gap: 15px;
    }
    @media (max-width: $tab) {
      flex-direction: column-reverse;
      gap: 0;
    }
    .left {
      width: 48%;
      padding-top: 175px;
      z-index: 2;
      @media (max-width: $tab) {
        width: 100%;
        position: relative;
        padding-top: 40px;
        margin-top: 20px;
        &:before {
          content: "";
          background: var(--white-color);
          left: 0;
          top: 0;
          position: absolute;
          height: 100%;
          margin: 0 -20px;
          right: 0;
        }
      }
      h1.main {
        font-size: 130px;
        line-height: 110.5px;
        @media (max-width: $desktop-md-2) {
          font-size: 100px;
          line-height: 80px;
        }
        @media (max-width: $desktop-sm) {
          font-size: 80px;
          line-height: 72px;
          padding: 0 0 50px;
        }
        @media (max-width: $tab) {
          font-size: 70px;
          line-height: 60px;
          padding: 0 0 30px;
        }
      }
      h1 {
        font-weight: 400;
        color: var(--text-color);
        font-size: 80px;
        line-height: 72px;
        letter-spacing: -7%;
        text-transform: uppercase;
        padding: 0 30px 50px;
        @media (max-width: $desktop-sm) {
          padding: 0 0 50px;
          font-size: 70px;
          line-height: 60px;
        }
        @media (max-width: $tab) {
          position: relative;
          z-index: 2;
          font-size: 35px;
          line-height: 29px;
        }
      }
      .info {
        padding: 70px 30px;
        position: relative;
        display: flex;
        // justify-content: space-between;
        border-bottom: 1px solid var(--text-color);
        border-top: 1px solid var(--text-color);
        @media (max-width: $desktop-sm) {
          padding: 60px 0;
        }
        @media (max-width: $tab-sm) {
          flex-direction: column;
          gap: 30px;
          padding: 30px 0;
        }
        &:before {
          content: "";
          position: absolute;
          width: 1px;
          background: var(--text-color);
          height: 50px;
          top: 0;
          left: 0;
          right: 0;
          margin: auto;
          @media (max-width: $tab-sm) {
            display: none;
          }
        }
        &:after {
          content: "";
          position: absolute;
          width: 1px;
          background: var(--text-color);
          height: 50px;
          bottom: 0;
          left: 0;
          right: 0;
          margin: auto;
          @media (max-width: $tab-sm) {
            display: none;
          }
        }
        .info-left {
          width: 50%;
          @media (max-width: $tab-sm) {
            width: 100%;
          }
          .cost {
            display: flex;
            flex-direction: column;
            gap: 20px;
            @media (max-width: $tab-sm) {
              gap: 11px;
            }
            span {
              font-size: 24px;
              font-weight: 600;
              line-height: 26.4px;
              letter-spacing: -1px;
              color: var(--text-color);
              position: relative;
              padding-left: 35px;
              text-transform: uppercase;
              @media (max-width: $tab-sm) {
                font-size: 20px;
                line-height: 22px;
                padding-left: 30px;
              }
              &:before {
                position: absolute;
                content: "";
                background: var(--text-color);
                width: 20px;
                height: 20px;
                border-radius: 999px;
                top: 0;
                bottom: 0;
                margin: auto;
                left: 0;
                @media (max-width: $tab-sm) {
                  width: 12px;
                  height: 12px;
                }
              }
            }
            & > div {
              font-size: 20px;
              font-weight: 400;
              line-height: 20px;
              letter-spacing: -7%;
              color: var(--text-color);
              @media (max-width: $tab-sm) {
                font-size: 18px;
                line-height: 19px;
              }
            }
          }
        }
        .info-right {
          width: 50%;
          padding-left: 22px;
          @media (max-width: $tab-sm) {
            width: 100%;
            padding-left: 0;
          }
          ul {
            display: flex;
            flex-direction: column;
            gap: 16px;
            @media (max-width: $tab-sm) {
              gap: 10px;
            }
            li {
              position: relative;
              font-weight: 400;
              font-size: 20px;
              line-height: 20px;
              letter-spacing: -7%;
              padding-left: 35px;
              color: var(--text-color);
              @media (max-width: $tab-sm) {
                font-size: 18px;
                line-height: 19px;
                padding-left: 30px;
              }
              &:before {
                content: "";
                position: absolute;
                width: 20px;
                height: 20px;
                border: 1px solid var(--text-color);
                border-radius: 999px;
                left: 0;
                top: 0;
                bottom: 0;
                margin: auto;
                @media (max-width: $tab-sm) {
                  width: 12px;
                  height: 12px;
                }
              }
            }
          }
        }
      }
      .contacts {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 37px;
        padding-top: 50px;
        padding-left: 30px;
        padding-right: 30px;
        @media (max-width: $desktop-md-2) {
          flex-direction: column;
          padding-bottom: 50px;
        }
        @media (max-width: $tab) {
          z-index: 2;
          position: relative;
          flex-direction: row;
          padding-left: 0;
          padding-right: 0;
        }
        @media (max-width: $tab-sm) {
          flex-wrap: wrap;
          gap: 10px;
        }
        & > button {
          white-space: nowrap;
          @media (max-width: $tab-sm) {
            width: 100%;
          }
        }
        a {
          font-weight: 400;
          font-size: 24px;
          line-height: 24px;
          letter-spacing: -2px;
          white-space: nowrap;
          color: var(--text-color);
          @media (max-width: $tab-sm) {
            font-weight: 500;
          }
        }
        .socials {
          display: flex;
          align-items: center;
          gap: 10px;
          button {
            width: 60px;
            height: 60px;
            @media (max-width: $tab-sm) {
              width: 50px;
              height: 50px;
            }
          }
        }
      }
    }
    .right {
      width: 52%;
      padding: 175px 0px 20px 20px;
      @media (max-width: $tab) {
        width: 100%;
      }
      @media (max-width: $tab-sm) {
        padding: 80px 0 0;
      }
      .top {
        position: relative;
        padding-bottom: 20px;
        &:after {
          content: "";
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 1px;
          background: var(--text-color);
        }
        ul {
          display: flex;
          align-items: center;
          justify-content: space-between;
          li {
            button.active {
              color: var(--hover-color);
              &:before {
                background: var(--hover-color);
              }
            }
            button {
              position: relative;
              padding-left: 36px;
              font-weight: 400;
              font-size: 24px;
              letter-spacing: -2px;
              color: var(--text-color);
              text-transform: uppercase;
              white-space: nowrap;
              transition: var(--trs-300);
              @media (max-width: $desktop-sm) {
                font-size: 22px;
                padding-left: 25px;
              }
              @media (max-width: $tab-sm) {
                font-size: 14px;
                line-height: 14px;
              }
              &:before {
                content: "";
                position: absolute;
                width: 20px;
                height: 20px;
                border-radius: 999px;
                background: var(--text-color);
                left: 0;
                top: 0;
                bottom: 0;
                margin: auto;
                transition: var(--trs-300);
                @media (max-width: $tab-sm) {
                  width: 12px;
                  height: 12px;
                }
              }
            }
          }
        }
      }
      .image-wrapper {
        margin-top: 20px;
        img {
          object-fit: cover;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
