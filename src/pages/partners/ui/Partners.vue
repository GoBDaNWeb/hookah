<script setup>
import { Contacts } from "@/widgets/contacts";
import img from "@/shared/assets/images/contacts1.jpg";
</script>

<template>
  <div class="partners-page">
    <Contacts
      :img="img"
      :title="'партнёрам'"
      :subTitle="'Работаем с партнерами'"
      :subTitleForm="'начать сотрудничество'"
      :list="[
        'Event-агентства',
        'Организаторы свадеб',
        'Организаторы дней рождения и частных вечеринок',
        'Агенты по организации культурных мероприятий и фестивалей',
      ]"
      :badge="'сотрудничество'"
      btnText="отправить"
    />
  </div>
</template>

<style lang="scss">
.partners-page {
  .contacts {
    .contacts-inner {
      border-top: 1px solid var(--text-color);
      .left {
        padding-top: 0 !important;
      }
    }
  }
}
</style>
<style lang="scss" scoped>
@import "@/shared/styles/vars";

.partners-page {
  padding-top: 150px;
  @media (max-width: $tab) {
    padding-top: 100px;
  }
}
</style>
