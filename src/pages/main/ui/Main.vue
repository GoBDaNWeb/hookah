<script setup>
import { Hero } from "@/widgets/hero";
import { About } from "@/widgets/about";
import { Features } from "@/widgets/features";
import { Cost } from "@/widgets/cost";
import { Stamps } from "@/widgets/stamps";
import { Delivery } from "@/widgets/delivery";
import { Gallery } from "@/widgets/gallery";
import { Faq } from "@/widgets/faq";
import { Contacts } from "@/widgets/contacts";
import { Reviews } from "@/widgets/reviews";

import heroImg from "@/shared/assets/images/hero-photo.jpg";
import contactsImg from "@/shared/assets/images/gallery/5.jpg";
import hookahImg from "@/shared/assets/images/hookah.png";
import hookahFaqImg from "@/shared/assets/images/hookah-white.jpg";
import { ordersInfo, featureList, stampsList, howWorkList } from "../config";

const costDescr = "<p>Стоимость <br/> без учета доставки</p>";
const list =
  "<ul><li>По Москве и области</li><li>время: 11:00 - 02:00</li><li>Доставка 1 - 1,5 часа</li></ul>";
</script>

<template>
  <main>
    <Hero
      :title="'Аренда кальяна'"
      :isMain="true"
      :tabs="['на дом', 'в офис', 'на дачу', 'в лофт']"
      :cost="'от 1 900 ₽'"
      :costDescr="costDescr"
      :list="list"
      :imgs="[heroImg, heroImg, heroImg, heroImg]"
      btnText="Заказать кальян"
    />
    <About
      :ordersInfo="ordersInfo"
      :img="hookahImg"
      :title="'Alpha Hookah Model X'"
      :isGrid="true"
      :listTitle="'в заказ входит'"
    />
    <Features :featureList="featureList" />
    <Cost />
    <Stamps :stampsList="stampsList" :howWorkList="howWorkList" />
    <Delivery />
    <Reviews />
    <Gallery />
    <Faq :img="hookahFaqImg" :hasInfo="true" />
    <Contacts
      :tabs="['на дом', 'в офис', 'на дачу', 'в лофт']"
      :title="'Закажите кальян'"
      :imgs="[contactsImg, contactsImg, contactsImg, contactsImg]"
      btnText="заказать кальян"
    />
  </main>
</template>
