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
import contactsImg from "@/shared/assets/images/gallery/5.jpg";
import { KinesisContainer, KinesisElement } from "vue-kinesis";
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
          <h3
            v-motion
            :initial="{
              x: -100,
              opacity: 0,
            }"
            :visible-once="{
              x: 0,
              opacity: 1,
              transition: {
                duration: 500,
              },
            }"
          >
            Что-то не получается?
          </h3>
          <span
            >Свяжитесь с нами любым удобным способом, мы поможем по телефону или
            по видеосвязи</span
          >
          <div class="contacts">
            <div class="socials">
              <kinesis-container>
                <kinesis-element :strength="10" type="depth">
                  <Button variable="social">
                    <WhatsappIcon />
                  </Button>
                </kinesis-element>
              </kinesis-container>
              <kinesis-container>
                <kinesis-element :strength="10" type="depth">
                  <Button variable="social">
                    <TelegramIcon />
                  </Button>
                </kinesis-element>
              </kinesis-container>
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
      :imgs="[contactsImg, contactsImg, contactsImg, contactsImg]"
    />
  </div>
</template>

<style lang="scss" scoped>
@import "@/shared/styles/vars";

.manual {
  padding-top: 175px;
  @media (max-width: $tab) {
    padding-top: 100px;
  }
  .manual-inner {
    .info {
      padding-top: 100px;
      padding-bottom: 100px;
      border-top: 1px solid var(--text-color);
      @media (max-width: $tab) {
        padding-top: 80px;
        padding-bottom: 80px;
      }
      h3 {
        font-weight: 400;
        font-size: 64px;
        line-height: 54px;
        color: var(--text-color);
        position: relative;
        padding-left: 70px;
        text-transform: uppercase;
        margin-bottom: 30px;
        @media (max-width: $tab) {
          padding-left: 50px;
          font-size: 30px;
          line-height: 25px;
        }
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
          @media (max-width: $tab) {
            width: 30px;
            height: 30px;
          }
        }
      }
      span {
        padding-left: 70px;
        font-weight: 400;
        font-size: 24px;
        line-height: 26px;
        color: var(--text-color);
        display: block;
        text-transform: uppercase;
        @media (max-width: $tab) {
          font-size: 20px;
          line-height: 22px;
          padding-left: 53px;
        }
      }
      .contacts {
        display: flex;
        align-items: center;
        gap: 30px;
        padding-left: 70px;
        margin-top: 50px;
        @media (max-width: $tab) {
          padding-left: 0;
          margin-top: 20px;
        }
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
            @media (max-width: $tab) {
              width: 50px;
              height: 50px;
            }
          }
        }
      }
    }
  }
}
</style>
