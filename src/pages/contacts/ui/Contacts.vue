<script setup>
import { Contacts } from "@/widgets/contacts";
import img from "@/shared/assets/images/contacts2.jpg";
</script>

<template>
  <div class="contacts-page">
    <Contacts
      :img="img"
      :title="'по любым вопросам'"
      :badge="'свяжитесь с нами'"
    />
  </div>
</template>

<style lang="scss">
.contacts-page {
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
.contacts-page {
  padding-top: 150px;
}
</style>
