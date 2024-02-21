<script setup>
import { TelegramIcon } from "@/shared/icons";
import { WhatsappIcon } from "@/shared/icons";
import { Button } from "@/shared/ui/button";
</script>

<template>
  <div class="cost">
    <div class="container">
      <div class="cost-inner">
        <h3>Стоимость</h3>
        <div class="cost-about">
          <div class="cost-about-item">
            <span>Чаша меняется раз в 50 минут</span>
            <p>
              либо по первому требованию клиента (не зашло по вкусу, горчит и
              прочее)
            </p>
          </div>
          <div class="cost-about-item">
            <span
              >Оплата услуг наличными <br />
              либо на расчетный счет</span
            >
          </div>
        </div>
        <div class="cost-content">
          <div class="cost-content-item">
            <h5>1 кальян На глиняной чаше <span>1 200 ₽ / час</span></h5>
            <p>Минимальный заказ — от 3-х часов</p>
          </div>
          <div class="cost-content-item">
            <div class="image-wrapper">
              <img src="@/shared/assets/images/cost/1.jpg" alt="photo" />
            </div>
            <p>На грейпфруте</p>
            <span>+ 300 ₽</span>
          </div>
          <div class="cost-content-item">
            <div class="image-wrapper">
              <img src="@/shared/assets/images/cost/2.jpg" alt="photo" />
            </div>
            <p>стоимость На других фруктах</p>
            <span>по запросу</span>
          </div>
        </div>
        <div class="cost-info">
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
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cost {
  background: var(--white-color);
  padding-top: 130px;
  .cost-inner {
    h3 {
      font-weight: 400;
      font-size: 64px;
      line-height: 54px;
      color: var(--text-color);
      position: relative;
      padding-left: 70px;
      text-transform: uppercase;
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
      }
    }
    .cost-about {
      display: flex;
      margin-top: 50px;
      .cost-about-item {
        width: 50%;
        border-left: 1px solid var(--text-color);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
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
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      margin-top: 50px;
      .cost-content-item {
        height: fit-content;
        width: 100%;
        &:first-child {
          padding-top: 50px;
          border-top: 1px solid var(--text-color);
          padding-left: 30px;
          p {
            font-weight: 400;
            font-size: 16px;
            line-height: 20px;
            color: var(--text-color);
            padding-left: 35px;
            margin-top: 20px;
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
      margin-top: 50px;
      border-top: 1px solid var(--text-color);
      padding-left: 35px;
      padding-bottom: 150px;
      .contacts {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 37px;

        max-width: 640px;
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
  }
}
</style>
