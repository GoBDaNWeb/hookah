<script setup>
import { TelegramIcon } from "@/shared/icons";
import { WhatsappIcon } from "@/shared/icons";
import { Button } from "@/shared/ui/button";

defineProps(["tabs", "title", "isMain", "cost", "costDescr", "list", "imgs"]);
</script>

<template>
  <div class="hero">
    <div class="container">
      <div class="hero-inner">
        <div class="left">
          <h1 :class="isMain ? 'main' : ''">
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
                <li v-for="item in list" :key="item">{{ item }}</li>
              </ul>
            </div>
          </div>
          <div class="contacts">
            <a href="tel:8 800 000-00-00">8 800 000-00-00</a>
            <div class="socials">
              <Button variable="social">
                <TelegramIcon />
              </Button>
              <Button variable="social">
                <WhatsappIcon />
              </Button>
            </div>
            <Button variable="primary"> заказать кальян </Button>
          </div>
        </div>
        <div class="right">
          <div class="top">
            <ul v-if="tabs">
              <li v-for="tab in tabs" :key="tab">{{ tab }}</li>
            </ul>
          </div>
          <div class="images">
            <div class="image-wrapper" v-for="img in imgs" :key="img">
              <img :src="img" alt="photo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
  }
  .hero-inner {
    display: flex;
    // min-height: 100vh;
    gap: 40px;
    .left {
      width: 50%;
      padding-top: 175px;
      z-index: 2;
      h1.main {
        font-size: 130px;
        line-height: 110.5px;
      }
      h1 {
        font-weight: 400;
        color: var(--text-color);
        font-size: 80px;
        line-height: 72px;
        letter-spacing: -7%;
        text-transform: uppercase;
        padding: 0 30px 50px;
      }
      .info {
        padding: 70px 30px;
        position: relative;
        display: flex;
        // justify-content: space-between;
        border-bottom: 1px solid var(--text-color);
        border-top: 1px solid var(--text-color);
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
        }
        .info-left {
          width: 50%;
          .cost {
            display: flex;
            flex-direction: column;
            gap: 20px;
            span {
              font-size: 24px;
              font-weight: 600;
              line-height: 26.4px;
              letter-spacing: -7%;
              color: var(--text-color);
              position: relative;
              padding-left: 35px;
              text-transform: uppercase;
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
              }
            }
            & > div {
              font-size: 20px;
              font-weight: 400;
              line-height: 20px;
              letter-spacing: -7%;
              color: var(--text-color);
            }
          }
        }
        .info-right {
          width: 50%;
          padding-left: 22px;
          ul {
            display: flex;
            flex-direction: column;
            gap: 16px;
            li {
              position: relative;
              font-weight: 400;
              font-size: 20px;
              line-height: 20px;
              letter-spacing: -7%;
              padding-left: 35px;
              color: var(--text-color);
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
        & > button {
          white-space: nowrap;
        }
        a {
          font-weight: 600;
          font-size: 24px;
          line-height: 24px;
          letter-spacing: -2px;
          white-space: nowrap;
          color: var(--text-color);
        }
        .socials {
          display: flex;
          align-items: center;
          gap: 10px;
          button {
            width: 60px;
            height: 60px;
          }
        }
      }
    }
    .right {
      width: 50%;
      padding-top: 175px;
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
            position: relative;
            padding-left: 36px;
            font-weight: 400;
            font-size: 24px;
            letter-spacing: -7%;
            color: var(--text-color);
            text-transform: uppercase;
            white-space: nowrap;
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
