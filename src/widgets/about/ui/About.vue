<script setup>
import orderImg1 from "@/shared/assets/images/hookah-about/1.png";
import orderImg2 from "@/shared/assets/images/hookah-about/2.png";
import orderImg3 from "@/shared/assets/images/hookah-about/3.png";
import orderImg4 from "@/shared/assets/images/hookah-about/4.png";
import orderImg5 from "@/shared/assets/images/hookah-about/5.png";
import orderImg6 from "@/shared/assets/images/hookah-about/6.png";
const ordersInfo = [
  {
    id: 1,
    img: orderImg1,
    title: "Чаша с табаком",
    text: "Можно заказать на фрукте. Также можно заказать несколько чаш",
  },
  {
    id: 2,
    img: orderImg2,
    title: "Калауд",
    text: "Оптимальное распределение жара, удобен в использовании",
  },
  {
    id: 3,
    img: orderImg3,
    title: "Плитка",
    text: "На ней удобно разжигать угли, не придется портить свою варочную панель",
  },
  {
    id: 4,
    img: orderImg4,
    title: "Угли",
    text: "К каждой чаше даем по 8 кубиков угля",
  },
  {
    id: 5,
    img: orderImg5,
    title: "Одноразовые мундштуки",
    text: "По умолчанию 5 штук, по запросу можем положить больше",
  },
  {
    id: 6,
    img: orderImg6,
    title: "Щипцы",
    text: "Для комфортного размещения углей на калауде и во время розжига",
  },
];
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
            <span> Alpha Hookah Model X </span>
            <p>
              Alpha hookah — лучший кальян 2021 по версии John Calliano Awards
              2021, 2022 гг.
            </p>
          </div>
          <div class="image-wrapper">
            <img src="@/shared/assets/images/hookah.png" alt="" />
          </div>
        </div>
        <div class="right">
          <h3>в заказ входит</h3>
          <div class="order-list">
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

<style scoped>
.about {
  position: relative;
}
.about .coals {
  position: absolute;
  bottom: 170px;
  width: 360px;
  height: 240px;
  left: 0;
  transform: rotate(10deg);
  z-index: 2;
}
.about .coals img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.about .about-inner {
  display: flex;
  padding-top: 130px;
  padding-bottom: 95px;
  gap: 25px;
}
.about .about-inner .left {
  width: 50%;
  position: relative;
}
.about .about-inner .left .text {
  position: absolute;
  top: 0;
  left: 0;
  max-width: 200px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding-top: 45px;
  padding-bottom: 50px;
}
.about .about-inner .left .text:before {
  content: "";
  position: absolute;
  background: var(--text-color);
  width: 20px;
  height: 20px;
  border-radius: 999px;
  top: 0;
  left: 0;
}
.about .about-inner .left .text:after {
  content: "";
  position: absolute;
  background: var(--text-color);
  width: 100%;
  height: 1px;
  bottom: 0;
  left: 0;
}
.about .about-inner .left .text span {
  font-weight: 400;
  font-size: 36px;
  line-height: 36px;
  color: var(--text-color);
  text-transform: uppercase;
}
.about .about-inner .left .text p {
  font-weight: 400;
  font-size: 16px;
  line-height: 20.8px;
  color: var(--text-color);
}
.about .about-inner .right {
  width: 50%;
}
.about .about-inner .right .order-list:before {
  content: "";
  position: absolute;
  left: 0;
  height: 50px;
  width: 1px;
  top: 0;
  left: 0;
  background: var(--text-color);
}
.about .about-inner .right .order-list:after {
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
.about .about-inner .right .order-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 70px;
  column-gap: 26px;
  border-top: 1px solid var(--text-color);
  padding-top: 80px;
  margin-top: 50px;
  position: relative;
}
.about .about-inner .right .order-list .order-item {
  display: flex;
  gap: 25px;
  align-items: center;
}
.about .about-inner .right .order-list .order-item .image-wrapper {
  min-width: 90px;
  height: 90px;
}
.about .about-inner .right .order-list .order-item .image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
}
.about .about-inner .right .order-list .order-item .text {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.about .about-inner .right .order-list .order-item .text span {
  font-weight: 400;
  font-size: 24px;
  line-height: 26px;
  color: var(--text-color);
  text-transform: uppercase;
}
.about .about-inner .right .order-list .order-item .text p {
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: var(--text-color);
}
.about .about-inner .right h3 {
  font-weight: 400;
  font-size: 64px;
  line-height: 54.4px;
  text-transform: uppercase;
  color: var(--text-color);
}
.about .about-inner .left .image-wrapper {
  width: 100%;
}
.about .about-inner .left .image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
}
</style>
