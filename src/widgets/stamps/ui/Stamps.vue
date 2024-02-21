<script setup>
import { StampsSwiper } from "@/entities/stamps-swiper";
import { BigArrowIcon } from "@/shared/icons";
import { Button } from "@/shared/ui/button";

defineProps(["stampsList", "howWorkList"]);
</script>

<template>
  <div class="stamps">
    <div class="container">
      <div class="stamps-inner">
        <h3>
          используем проверенные<br />
          марки табака
        </h3>
        <div class="description">
          <div class="left">
            <h5>Большой выбор вкусов</h5>
            <p>Подберём вкус и крепость по Вашему индивидуальному желанию!</p>
          </div>
          <div class="right">
            <h5>
              наш табак не горчит и дает <br />
              вкусный, насыщенный дым
            </h5>
          </div>
        </div>
        <StampsSwiper :stampsList="stampsList" />
        <div class="how-work" v-if="howWorkList">
          <h3>как это работает</h3>
          <div class="how-work__list">
            <div
              class="how-work__item"
              v-for="howWork in howWorkList"
              :key="howWork.id"
            >
              <span class="number"
                >{{ howWork.id }}
                <span v-if="howWork.hasArrow"><BigArrowIcon /></span
              ></span>
              <p>{{ howWork.text }}</p>
              <Button v-if="howWork.hasBtn" variable="outline"
                >инструкция
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.stamps {
  padding-top: 130px;
  padding-bottom: 130px;
  .stamps-inner {
    display: flex;
    flex-direction: column;
    gap: 50px;
    h3 {
      font-weight: 400;
      font-size: 64px;
      line-height: 54px;
      color: var(--text-color);
      text-transform: uppercase;
    }
    .description {
      display: flex;
      justify-content: space-between;
      gap: 80px;
      .left {
        width: 50%;
        display: flex;
        flex-direction: column;
        gap: 25px;
        padding-left: 35px;
        border-left: 1px solid var(--text-color);
      }
      .right {
        width: 50%;
        border-left: 1px solid var(--text-color);
        padding-left: 30px;
      }
      h5 {
        font-weight: 400;
        font-size: 36px;
        line-height: 36px;
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
    .how-work {
      margin-top: 70px;
      padding-top: 30px;
      border-top: 1px solid var(--text-color);
      h3 {
        position: relative;
        padding-left: 70px;
        text-transform: uppercase;
        &:before {
          content: "";
          position: absolute;
          width: 45px;
          height: 45px;
          background: var(--text-color);
          left: 0;
          top: 0;
          bottom: 0;
          margin: auto;
        }
      }
      .how-work__list {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        align-items: flex-start;
        justify-content: space-between;
        margin-top: 80px;
        .how-work__item {
          display: flex;
          flex-direction: column;
          gap: 35px;
          max-width: 335px;
          padding-left: 30px;
          position: relative;
          height: 100%;
          &:before {
            content: "";
            position: absolute;
            height: 100%;
            width: 1px;
            left: 0;
            top: 0;
            background: var(--text-color);
          }
          .number {
            font-weight: 400;
            font-size: 64px;
            line-height: 54px;
            color: var(--text-color);
            display: flex;
            gap: 16px;
          }
          p {
            max-width: 257px;
            font-weight: 400;
            font-size: 16px;
            line-height: 20px;
            color: var(--text-color);
          }
          button {
            width: 130px;
          }
        }
      }
    }
  }
}
</style>
