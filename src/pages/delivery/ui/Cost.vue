<script setup>
import { TelegramIcon } from "@/shared/icons";
import { WhatsappIcon } from "@/shared/icons";
import { Button } from "@/shared/ui/button";
import { KinesisContainer, KinesisElement } from "vue-kinesis";
</script>

<template>
  <div class="cost">
    <div class="container">
      <div class="cost-inner">
        <h3>Стоимость</h3>
        <div class="cost-about">
          <div class="cost-about-item">
            <span
              >Больше закладка табака — дольше процесс курения, до 1,5
              часа</span
            >
          </div>
          <div class="cost-about-item">
            <span>По умолчанию в комплект входит:</span>
            <p>Уголь из расчета 8 кубиков на чашу + 5 мундштуков</p>
          </div>
        </div>
        <div class="cost-content">
          <div class="cost-content-item">
            <span class="popular">Лучший выбор</span>
            <div class="image-wrapper">
              <img src="@/shared/assets/images/cost2/1.jpg" alt="photo" />
            </div>
            <p>На грейпфруте</p>
            <span>800 ₽</span>
          </div>
          <div class="cost-content-item">
            <div class="image-wrapper">
              <img src="@/shared/assets/images/cost2/2.jpg" alt="photo" />
            </div>
            <p>На помело</p>
            <span>1 200 ₽</span>
          </div>
          <div class="cost-content-item">
            <div class="image-wrapper">
              <img src="@/shared/assets/images/cost2/3.jpg" alt="photo" />
            </div>
            <p>На гранате</p>
            <span>900 ₽</span>
          </div>
          <div class="cost-content-item">
            <div class="image-wrapper">
              <img src="@/shared/assets/images/cost2/4.jpg" alt="photo" />
            </div>
            <p>На ананасе</p>
            <span>1 400 ₽</span>
          </div>
        </div>
        <div class="cost-info">
          <div class="contacts">
            <a href="tel:8 800 000-00-00">8 800 000-00-00</a>
            <div class="socials">
              <Button variable="social tg">
                <TelegramIcon />
              </Button>
              <Button variable="social wa">
                <WhatsappIcon />
              </Button>
            </div>
            <Button variable="primary"> заказать кальян </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/shared/styles/vars";

.cost {
  background: var(--bg-color);
  .cost-inner {
    h3 {
      font-weight: 400;
      font-size: 64px;
      line-height: 54px;
      color: var(--text-color);
      position: relative;
      padding-left: 70px;
      text-transform: uppercase;
      @media (max-width: $tab) {
        font-size: 35px;
        line-height: 29px;
        padding-left: 40px;
      }
      &:before {
        position: absolute;
        content: "";
        width: 45px;
        height: 45px;
        background: var(--text-color);
        border-radius: 999px;
        left: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        @media (max-width: $tab) {
          width: 30px;
          height: 30px;
        }
      }
    }
    .cost-about {
      display: flex;
      margin-top: 50px;
      gap: 20px;
      @media (max-width: $tab-sm) {
        flex-direction: column;
      }
      .cost-about-item {
        width: 50%;
        border-left: 1px solid var(--text-color);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        @media (max-width: $tab-sm) {
          width: 100%;
        }
        &:first-child {
          padding-left: 38px;
        }
        &:last-child {
          padding-left: 29px;
        }
        span {
          font-weight: 400;
          font-size: 32px;
          line-height: 35px;
          color: var(--text-color);
          text-transform: uppercase;
          @media (max-width: $tab) {
            font-size: 24px;
            line-height: 26px;
          }
        }
        p {
          font-weight: 400;
          font-size: 16px;
          line-height: 20px;
          color: var(--text-color);
        }
      }
    }
    .cost-content {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 60px;
      align-items: flex-end;
      margin-top: 50px;
      padding-left: 20px;
      @media (max-width: $tab) {
        grid-template-columns: repeat(2, 1fr);
        padding-left: 0;
        column-gap: 20px;
        row-gap: 40px;
        align-items: baseline;
        margin-top: 60px;
        margin-bottom: 50px;
      }
      .cost-content-item {
        height: fit-content;
        width: 100%;
        position: relative;
        padding-bottom: 80px;
        @media (max-width: $tab) {
          padding-bottom: 0;
        }
        &:before {
          content: "";
          position: absolute;
          height: 50px;
          width: 1px;
          background: var(--text-color);
          bottom: 0;
          left: -20px;
          @media (max-width: $tab) {
            display: none;
          }
        }
        .popular {
          font-weight: 500;
          color: var(--hover-color);
          font-size: 14px;
          line-height: 15px;
          display: block;
          margin-bottom: 15px;
          @media (max-width: $tab) {
            position: absolute;
            top: -20px;
          }
        }
        .image-wrapper {
          width: 100%;
          height: 100%;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        h5 {
          position: relative;
          font-weight: 400;
          font-size: 24px;
          line-height: 26px;
          color: var(--text-color);
          padding-left: 35px;
          display: flex;
          flex-direction: column;
          text-transform: uppercase;

          &:before {
            content: "";
            position: absolute;
            border-radius: 999px;
            border: 1px solid var(--text-color);
            width: 20px;
            height: 20px;
            top: 4px;
            left: 0;
          }
          span {
            font-weight: 600;
            font-size: 24px;
            line-height: 26px;
          }
        }
        p {
          font-weight: 400;
          font-size: 24px;
          line-height: 26px;
          color: var(--text-color);
          text-transform: uppercase;
          margin-top: 20px;
          @media (max-width: $tab) {
            font-size: 20px;
            line-height: 22px;
          }
        }
        span {
          font-weight: 600;
          font-size: 24px;
          line-height: 26px;
          color: var(--text-color);
          text-transform: uppercase;
          display: block;
        }
      }
    }
    .cost-info {
      padding-top: 50px;
      border-top: 1px solid var(--text-color);
      padding-left: 35px;
      padding-bottom: 150px;
      @media (max-width: $tab) {
        padding-left: 0;
        padding-bottom: 80px;
        padding-top: 20px;
      }
      .contacts {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 37px;
        max-width: 640px;
        @media (max-width: $tab) {
          max-width: 100%;
          flex-wrap: wrap;
          gap: 20px;
        }
        & > button {
          white-space: nowrap;
          @media (max-width: $tab) {
            width: 100%;
          }
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
            @media (max-width: $tab) {
              width: 50px;
              height: 50px;
            }
          }
        }
      }
    }
  }
}
</style>
