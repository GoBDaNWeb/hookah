<script setup>
import { TelegramIcon } from "@/shared/icons";
import { WhatsappIcon } from "@/shared/icons";
import { Button } from "@/shared/ui/button";
import { Contacts } from "@/widgets/contacts";

import ManualItem from "./ManualItem.vue";
import Options from "./Options.vue";
import { Faq } from "@/widgets/faq";
import { manualList } from "../config";
import hookahFaqImg from "@/shared/assets/images/hookah-white.jpg";
</script>

<template>
  <div class="manual">
    <div class="container">
      <div class="manual-inner">
        <ManualItem
          v-for="manual in manualList"
          :key="manual.index"
          :index="manual.index"
          :hasTitle="manual.hasTitle"
          :congrats="manual.congrats"
          :option="manual.option"
          :list="manual.list"
          :imgs="manual.imgs"
        />
        <div class="info">
          <h3>Что-то не получается?</h3>
          <span
            >Свяжитесь с нами любым удобным способом, мы поможем по телефону или
            по видеосвязи</span
          >
          <div class="contacts">
            <div class="socials">
              <Button variable="social">
                <WhatsappIcon />
              </Button>
              <Button variable="social">
                <TelegramIcon />
              </Button>
            </div>
            <a href="tel:8 800 000-00-00">8 800 000-00-00</a>
          </div>
        </div>
      </div>
    </div>
    <Faq :img="hookahFaqImg" />
    <Options />
    <Contacts
      :title="'сделать заказ'"
      :tabs="['на дом', 'в офис', 'на дачу', 'в лофт']"
    />
  </div>
</template>

<style lang="scss" scoped>
.manual {
  padding-top: 175px;
  .manual-inner {
    .info {
      padding-top: 100px;
      padding-bottom: 100px;
      border-top: 1px solid var(--text-color);
      h3 {
        font-weight: 400;
        font-size: 64px;
        line-height: 54px;
        color: var(--text-color);
        position: relative;
        padding-left: 70px;
        text-transform: uppercase;
        margin-bottom: 30px;
        &:before {
          content: "";
          position: absolute;
          width: 45px;
          height: 45px;
          border-radius: 999px;
          background: var(--text-color);
          top: 0;
          bottom: 0;
          left: 0;
          margin: auto;
        }
      }
      span {
        padding-left: 70px;
        font-weight: 400;
        font-size: 24px;
        line-height: 26px;
        color: var(--text-color);
      }
      .contacts {
        display: flex;
        align-items: center;
        gap: 30px;
        padding-left: 70px;
        margin-top: 50px;
        a {
          font-weight: 600;
          font-size: 24px;
          line-height: 24px;
          letter-spacing: -2px;
          white-space: nowrap;
          color: var(--text-color);
        }
        .socials {
          display: flex;
          align-items: center;
          gap: 10px;
          button {
            width: 60px;
            height: 60px;
          }
        }
      }
    }
  }
}
</style>
