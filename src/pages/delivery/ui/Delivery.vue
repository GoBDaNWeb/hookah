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

const costDescr =
  "<p> Стоимость по тарифу <br/> перевозчика — <br /> Яндекс достависта <br />  и других сервисов доставки </p>";
</script>

<template>
  <main>
    <Hero
      :title="'Доставка фруктовых чаш'"
      :isMain="false"
      :cost="''"
      :costDescr="costDescr"
      :list="[
        'По Москве и области',
        'время: 11:00 - 02:00',
        'Доставка 1 - 1,5 часа',
      ]"
      :imgs="[heroImg]"
    />

    <Features :featureList="featureList" :isWhite="true" />
    <Stamps :stampsList="stampsList" />
    <Cost />
    <Faq :img="hookahFaqImg" :hasInfo="true" />
    <Contacts
      :title="'сделать заказ'"
      :tabs="['на дом', 'в офис', 'на дачу', 'в лофт']"
    />
  </main>
</template>

<style lang="scss" scoped>
.features {
  padding-bottom: 150px;
}
</style>
