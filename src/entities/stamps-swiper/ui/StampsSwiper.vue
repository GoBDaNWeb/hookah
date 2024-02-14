<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import { ref } from "vue";
import "swiper/css";
import "swiper/css/navigation";
import stampImg1 from "@/shared/assets/images/stamps/1.png";
import stampImg2 from "@/shared/assets/images/stamps/2.png";
import stampImg3 from "@/shared/assets/images/stamps/3.png";
import stampImg4 from "@/shared/assets/images/stamps/4.png";
import stampImg5 from "@/shared/assets/images/stamps/5.png";
import stampImg6 from "@/shared/assets/images/stamps/6.png";

import { Button } from "@/shared/ui/button";
import { ArrowLeftIcon } from "@/shared/icons";
import { ArrowRightIcon } from "@/shared/icons";

const modules = ref([Navigation]);
const prev = ref(null);
const next = ref(null);
const stampsList = [
  {
    id: 1,
    title: "darkside",
    img: stampImg1,
  },
  {
    id: 2,
    title: "MustHave",
    img: stampImg2,
  },
  {
    id: 3,
    title: "Overdose",
    img: stampImg3,
  },
  {
    id: 4,
    title: "Наш",
    img: stampImg4,
  },
  {
    id: 5,
    title: "Starline",
    img: stampImg5,
  },
  {
    id: 6,
    title: "Trofimoff's",
    img: stampImg6,
  },
  {
    id: 7,
    title: "darkside",
    img: stampImg1,
  },
  {
    id: 8,
    title: "MustHave",
    img: stampImg2,
  },
  {
    id: 9,
    title: "Overdose",
    img: stampImg3,
  },
  {
    id: 10,
    title: "Наш",
    img: stampImg4,
  },
  {
    id: 11,
    title: "Starline",
    img: stampImg5,
  },
  {
    id: 12,
    title: "Trofimoff's",
    img: stampImg6,
  },
];
console.log(prev);
</script>

<template>
  <div class="swiper-wrapper">
    <div class="navigation">
      <button ref="prev" variant="clear"><ArrowLeftIcon /></button>
      <button ref="next" variant="clear"><ArrowRightIcon /></button>
    </div>
    <Swiper
      :slidesPerView="6"
      :spaceBetween="20"
      :navigation="{
        prevEl: prev,
        nextEl: next,
      }"
      :modules="modules"
      class="stamp-swiper"
    >
      <SwiperSlide v-for="stamp in stampsList" :key="stamp.id"
        ><div class="image-wrapper">
          <img :src="stamp.img" alt="" />
        </div>
        <span>{{ stamp.title }}</span></SwiperSlide
      >
    </Swiper>
  </div>
</template>

<style scoped>
.swiper-wrapper {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.navigation {
  display: flex;
  justify-content: flex-end;
  gap: 30px;
}
.stamp-swiper {
  width: 100%;
}
.stamp-swiper .image-wrapper {
  width: 217px;
  height: 170px;
  background: var(--white-color);
  display: flex;
  align-items: center;
  justify-content: center;
}
.stamp-swiper .image-wrapper img {
  width: 80%;
  /* height: 100%; */
  object-fit: cover;
}
.stamp-swiper span {
  width: 80%;
  /* height: 100%; */
  object-fit: cover;
  font-weight: 400;
  font-size: 26px;
  color: var(--text-color);
  margin-top: 17px;
  position: relative;
  display: block;
  padding-left: 35px;
  text-transform: uppercase;
}
.stamp-swiper span:before {
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
</style>
