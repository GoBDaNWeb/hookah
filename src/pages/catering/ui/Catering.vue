<script setup>
import { Hero } from "@/widgets/hero";
import { About } from "@/widgets/about";
import { Features } from "@/widgets/features";
import Cost from "./Cost.vue";
import Partners from "./Partners.vue";
import { Stamps } from "@/widgets/stamps";
import { Delivery } from "@/widgets/delivery";
import { Gallery } from "@/widgets/gallery";
import { Faq } from "@/widgets/faq";
import { Contacts } from "@/widgets/contacts";

import heroImg from "@/shared/assets/images/hero-photo2.jpg";
import hookahImg from "@/shared/assets/images/hookah2.png";
import hookahFaqImg from "@/shared/assets/images/hookah-white2.jpg";

import { ordersInfo, featureList, stampsList } from "../config";

const costDescr = "<p>Заказ кальяна <br/> на мероприятие</p>";
const list =
  "<ul><li>По Москве и области</li><li>Работаем с физ лицами и организациями</li></ul>";
</script>

<template>
  <main>
    <Hero
      :title="'кальянный кейтеринг'"
      :isMain="false"
      :cost="'от 3 600 ₽ '"
      :costDescr="costDescr"
      :list="list"
      :imgs="[heroImg]"
    />
    <About
      :ordersInfo="ordersInfo"
      :img="hookahImg"
      :title="'Alpha Hookah Kappa'"
      :listTitle="'входит в кейтеринг'"
    />
    <Features :featureList="featureList" :isWhite="true" />
    <Cost />
    <Stamps :stampsList="stampsList" />
    <Partners />
    <Gallery />
    <Faq :img="hookahFaqImg" :hasInfo="true" />
    <Contacts :title="'Закажите кальянный кейтеринг'" btnText="заказать кейтеринг"/>
  </main>
</template>
