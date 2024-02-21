<script setup>
import { Button } from "@/shared/ui/button";
const costList = [
  {
    id: 1,
    title: "На глиняной чаше",
    cost: "1 900 ₽",
    addTitle: "Доп чаша",
    addCost: "600 ₽",
  },
  {
    id: 2,
    title: "На грейпфруте",
    cost: "1 900 ₽",
    addTitle: "Доп чаша",
    addCost: "800 ₽",
  },
  {
    id: 3,
    title: "На гранате",
    cost: "2 300 ₽",
    addTitle: "Доп чаша",
    addCost: "900 ₽",
  },
  {
    id: 4,
    title: "На помело",
    cost: "2 400 ₽",
    addTitle: "Доп чаша",
    addCost: "1 200 ₽",
  },
  {
    id: 5,
    title: "На ананасе",
    cost: "2 400 ₽",
    addTitle: "Доп чаша",
    addCost: "1 400 ₽",
  },
];
</script>

<template>
  <div class="cost">
    <div class="container">
      <div class="cost-inner">
        <h3>Стоимость кальяна в сутки</h3>
        <div class="cost-content">
          <div class="left">
            <div class="cost-list">
              <div class="cost-item" v-for="cost in costList" :key="cost.id">
                <div class="main">
                  <h5>{{ cost.title }}</h5>
                  <span class="line"></span>
                  <span class="total">
                    {{ cost.cost }}
                  </span>
                </div>
                <div class="additional">
                  <h6>{{ cost.addTitle }}</h6>
                  <span class="total">{{ cost.addCost }}</span>
                </div>
              </div>
            </div>
            <div class="about">
              <div class="about-item">
                <h6>система <span>чек-аут</span></h6>
                <p>
                  Аренда работает по системе чек-аута в гостинице — кальян
                  находится у вас <span>до 19:00</span> следующего дня.
                  <br /><br />
                  <span>После 19:00</span> начинается продление. <br /><br />
                  Стоимость продления <span>700 ₽</span>
                </p>
              </div>
              <div class="about-item">
                <h6>комплектующие</h6>
                <p>
                  На каждую чашу кладем <span>по 8 кубиков угля.</span
                  ><br /><br />
                  Табак, уголь и другие комплектующие
                  <span>оплачиваются отдельно.</span>
                </p>
                <Button variable="outline"> стоимость комплектующих </Button>
              </div>
            </div>
          </div>
          <div class="right">
            <div class="image-wrapper">
              <img src="@/shared/assets/images/cost.jpg" alt="" />
            </div>
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
    .cost-content {
      padding-top: 50px;
      display: flex;
      gap: 20px;
      padding-bottom: 130px;
      .left {
        border-top: 1px solid var(--text-color);
        padding-top: 50px;
        width: 50%;
        .cost-list {
          display: flex;
          flex-direction: column;
          gap: 30px;
          padding-bottom: 50px;
          border-bottom: 1px solid var(--text-color);
          .cost-item {
            display: flex;
            flex-direction: column;
            gap: 10px;
            position: relative;
            padding-left: 38px;
            &:before {
              content: "";
              position: absolute;
              width: 20px;
              height: 20px;
              border-radius: 999px;
              border: 1px solid var(--text-color);
              left: 0;
              top: 4px;
            }
            .main {
              display: flex;
              align-items: baseline;
              gap: 10px;
              h5 {
                font-weight: 400;
                font-size: 24px;
                line-height: 24px;
                color: var(--text-color);
                white-space: nowrap;
                text-transform: uppercase;
              }
              .line {
                width: 100%;
                height: 1px;
                background: var(--bg-color);
              }
              .total {
                font-weight: 500;
                font-size: 24px;
                line-height: 24px;
                color: var(--text-color);
                white-space: nowrap;
              }
            }
            .additional {
              display: flex;
              align-items: baseline;
              justify-content: space-between;
              gap: 10px;
              h6 {
                font-size: 16px;
                font-weight: 400;
                line-height: 20px;
                color: var(--text-color);
                .total {
                  font-weight: 400px;
                  font-size: 16px;
                  line-height: 20px;
                  color: var(--text-color);
                }
              }
            }
          }
        }
        .about {
          display: flex;
          gap: 50px;
          padding-top: 72px;
          .about-item {
            display: flex;
            flex-direction: column;
            gap: 25px;
            h6 {
              font-weight: 400;
              font-size: 24px;
              line-height: 26px;
              color: var(--text-color);
              position: relative;
              padding-left: 35px;
              text-transform: uppercase;
              span {
                font-weight: 600;
                font-size: 24px;
                line-height: 26px;
                color: var(--text-color);
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
              }
            }
            p {
              font-weight: 400;
              font-size: 16px;
              line-height: 20px;
              color: var(--text-color);
              span {
                font-weight: 600;
                font-size: 16px;
                line-height: 20px;
                color: var(--text-color);
              }
            }
            button {
              font-weight: 500;
              font-size: 14px;
              line-height: 14px;
              color: var(--text-color);
            }
          }
        }
      }
      .right {
        width: 50%;
        .image-wrapper {
          width: 100%;
          height: 100%;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
    }
  }
}
</style>
