<script setup>
import featureImg1 from "@/shared/assets/images/features/1.jpg";
import featureImg2 from "@/shared/assets/images/features/2.jpg";
import featureImg3 from "@/shared/assets/images/features/3.jpg";
import featureImg4 from "@/shared/assets/images/features/4.jpg";

const featureList = [
  {
    id: "01",
    img: featureImg1,
    text: "Быстрая доставка от 45 минут",
  },
  {
    id: "02",
    img: featureImg2,
    text: "Идеальное состояние оборудования и аксессуаров",
  },
  {
    id: "03",
    img: featureImg3,
    text: "Богатый выбор табака от проверенных производителей",
  },
  {
    id: "04",
    img: featureImg4,
    text: "Кальян полностью продезинфицирован и упакован",
  },
];
</script>

<template>
  <div class="features">
    <div class="container">
      <div class="features-inner">
        <div class="feature" v-for="feature in featureList" :key="feature.id">
          <div class="image-wrapper">
            <img :src="feature.img" alt="" />
            <span>{{ feature.id }}</span>
          </div>
          <p>{{ feature.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.features {
  background: var(--white-color);
}
.features-inner {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 60px;
  padding-top: 130px;
  position: relative;
}
.features-inner:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: -30px;
  width: 100%;
  height: 1px;
  background: var(--text-color);
}
.feature {
  display: flex;
  flex-direction: column;
  gap: 36px;
  position: relative;
  padding-bottom: 100px;
}
.feature:before {
  content: "";
  position: absolute;
  height: 50px;
  width: 1px;
  background: var(--text-color);
  left: -30px;
  bottom: 0;
}
.feature .image-wrapper {
  position: relative;
}
.feature .image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.feature .image-wrapper span {
  position: absolute;
  top: 20px;
  right: 17px;
  font-weight: 400;
  font-size: 64px;
  line-height: 54px;
  color: var(--text-color);
}
.feature p {
  font-weight: 400;
  font-size: 24px;
  line-height: 26px;
  color: var(--text-color);
  text-transform: uppercase;
}
</style>
