<script setup>
import { StampsSwiper } from "@/entities/stamps-swiper";
import { BigArrowIcon } from "@/shared/icons";
import { Button } from "@/shared/ui/button";
const howWorkList = [
  {
    id: "01",
    text: "В мессенджере или по телефону, обсуждаем детали заказа",
    hasArrow: true,
    hasBtn: false,
  },
  {
    id: "02",
    text: "В оговоренное время курьер привозит заказ. Оплата после получения",
    hasArrow: true,
    hasBtn: false,
  },
  {
    id: "03",
    text: "Вы самостоятельно собираете кальян — есть простая инструкция. Если потребуется помощь мы всегда на связи",
    hasArrow: true,
    hasBtn: true,
  },
  {
    id: "04",
    text: "Курьер заберет кальян в заранее оговоренное время. Также кальян можно вернуть самостоятельно в ближайший пункт выдачи заказа Яндекс маркета",
    hasArrow: false,
    hasBtn: false,
  },
];
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
        <StampsSwiper />
        <div class="how-work">
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

<style scoped>
.stamps {
  padding-top: 130px;
  padding-bottom: 130px;
}
.stamps-inner {
  display: flex;
  flex-direction: column;
  gap: 50px;
}
.stamps-inner h3 {
  font-weight: 400;
  font-size: 64px;
  line-height: 54px;
  color: var(--text-color);
  text-transform: uppercase;
}
.stamps-inner .description {
  display: flex;
  justify-content: space-between;
  gap: 80px;
}
.stamps-inner .description .left {
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 25px;
}
.stamps-inner .description .right {
  width: 50%;
}
.stamps-inner .description h5 {
  font-weight: 400;
  font-size: 36px;
  line-height: 36px;
  color: var(--text-color);
  text-transform: uppercase;
}
.stamps-inner .description p {
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: var(--text-color);
}
.how-work {
  margin-top: 70px;
  padding-top: 30px;
  border-top: 1px solid var(--text-color);
}
.how-work h3 {
  position: relative;
  padding-left: 70px;
  text-transform: uppercase;
}
.how-work h3:before {
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
.how-work__list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 80px;
}
.how-work__list .how-work__item {
  display: flex;
  flex-direction: column;
  gap: 35px;
  max-width: 335px;
  padding-left: 30px;
  position: relative;
  height: 100%;
}
.how-work__list .how-work__item:before {
  content: "";
  position: absolute;
  height: 100%;
  width: 1px;
  left: 0;
  top: 0;
  background: var(--text-color);
}
.how-work__list .how-work__item .number {
  font-weight: 400;
  font-size: 64px;
  line-height: 54px;
  color: var(--text-color);
  display: flex;
  gap: 16px;
}
.how-work__list .how-work__item p {
  max-width: 257px;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: var(--text-color);
}
.how-work__list .how-work__item button {
  width: 130px;
}
</style>
