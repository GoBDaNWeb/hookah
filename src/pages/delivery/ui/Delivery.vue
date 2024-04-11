<script setup lang="jsx">
import { Hero } from "@/widgets/hero";
import { About } from "@/widgets/about";
import { Features } from "@/widgets/features";
import { Stamps } from "@/widgets/stamps";
import { Faq } from "@/widgets/faq";
import { Contacts } from "@/widgets/contacts";
import heroImg from "@/shared/assets/images/hero-photo3.jpg";
import hookahFaqImg from "@/shared/assets/images/hookah-white.jpg";
import Cost from "./Cost.vue";

import { featureList, stampsList } from "../config";
import contactsImg from "@/shared/assets/images/gallery/5.jpg";

const costDescr =
  "<p> Стоимость по тарифу <br/> перевозчика — <br /> Яндекс достависта <br />  и других сервисов доставки </p>";
const list =
  "<ul><li>По Москве и области</li><li>время: 11:00 - 02:00</li><li>Доставка 1 - 1,5 часа<span>доступна экспресс доставка</span></li></ul>";
</script>

<template>
  <main class="delivery-page">
    <Hero
      :title="'Доставка фруктовых чаш'"
      :isMain="false"
      :cost="''"
      :costDescr="costDescr"
      :list="list"
      :imgs="[heroImg]"
      btnText="Заказать доставку"
    />

    <Features :featureList="featureList" :isWhite="true" />
    <Stamps :stampsList="stampsList" />
    <Cost />
    <Faq :img="hookahFaqImg" :hasInfo="true" />
    <Contacts
      :title="'сделать заказ'"
      :tabs="['на дом', 'в офис', 'на дачу', 'в лофт']"
      btnText="заказать доставку"
      :imgs="[contactsImg, contactsImg, contactsImg, contactsImg]"
    />
  </main>
</template>

<style lang="scss">
@import "@/shared/styles/vars";
.delivery-page {
  .features {
    padding-bottom: 150px;
    @media (max-width: $tab) {
      padding-bottom: 80px;
    }
    .features-inner {
      @media (max-width: $tab) {
        padding-top: 30px !important;
      }
    }
  }
}
</style>
