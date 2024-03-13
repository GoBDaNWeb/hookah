<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import { LogoIcon } from "@/shared/icons";
import { TelegramIcon } from "@/shared/icons";
import { WhatsappIcon } from "@/shared/icons";
import { Button } from "@/shared/ui/button";
import { useMenuStore } from "@/entities/menu-store";
import { useModalStore } from "@/entities/modal-store";
import { links } from "@/shared/config";
import { KinesisContainer, KinesisElement } from "vue-kinesis";
const active = ref(false);
const menu = useMenuStore();
const modal = useModalStore();
const controlNavbar = () => {
  if (typeof window !== "undefined") {
    if (window.scrollY > 0) {
      active.value = true;
    } else {
      active.value = false;
    }
  }
};

window.addEventListener("scroll", controlNavbar);
</script>

<template>
  <header :class="{ active: active }">
    <div class="container">
      <div class="header-inner">
        <kinesis-container>
          <kinesis-element :strength="10" type="depth">
            <RouterLink
              v-motion
              :initial="{
                opacity: 0,
              }"
              :enter="{
                opacity: 1,
              }"
              to="/"
              class="logo"
            >
              <LogoIcon />
            </RouterLink>
          </kinesis-element>
        </kinesis-container>
        <nav>
          <RouterLink
            :to="link.url"
            v-for="(link, index) in links"
            :key="index"
            v-motion
            :delay="index * 100"
            :initial="{
              y: -100,
              opacity: 0,
            }"
            :enter="{
              y: 0,
              opacity: 1,
            }"
          >
            <kinesis-container>
              <kinesis-element :strength="10" type="depth">{{
                link.title
              }}</kinesis-element>
            </kinesis-container>
          </RouterLink>
        </nav>

        <div class="info">
          <a href="tel:8 800 000-00-00">8 800 000-00-00</a>
          <div class="socials">
            <kinesis-container>
              <kinesis-element :strength="10" type="depth">
                <Button variable="social">
                  <TelegramIcon />
                </Button>
              </kinesis-element>
            </kinesis-container>
            <kinesis-container>
              <kinesis-element :strength="10" type="depth">
                <Button variable="social">
                  <WhatsappIcon />
                </Button>
              </kinesis-element>
            </kinesis-container>
          </div>

          <Button variable="outline" :click="modal.handleOpenQuestionModal">
            Консультация
          </Button>
          <button @click="menu.handleOpenMenu" class="burger">
            <span></span>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "@/shared/styles/vars";

header.active {
  background: var(--white-color);
  border-bottom: 1px solid var(--text-color);

  .header-inner {
    padding-top: 10px;
    padding-bottom: 10px;
    .logo {
      width: 65px;
      height: 65px;
      display: block;
      @media (max-width: $tab-sm) {
        width: 45px;
        height: 45px;
      }
      svg {
        width: 100%;
        height: 100%;
      }
    }
  }
}
header {
  position: fixed;
  left: 0;
  right: 0;
  z-index: 100;
  transition: var(--trs-300);
  @media (max-width: $tab) {
    background: #fff;
  }
  .header-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 20px;
    padding-bottom: 20px;
    transition: var(--trs-300);
    @media (max-width: $tab) {
      padding-top: 8px;
      padding-bottom: 8px;
    }
    .logo {
      transition: var(--trs-300);
      width: 85px;
      height: 85px;
      @media (max-width: $tab-sm) {
        width: 45px;
        height: 45px;
      }
      svg {
        width: 100%;
        height: 100%;
      }
    }
    nav {
      list-style: none;
      display: flex;
      align-items: center;
      gap: 25px;
      @media (max-width: $desktop-md-2) {
        display: none;
      }
      a {
        color: #45403d;
        transition: var(--trs-300);
        text-transform: uppercase;
        font-size: 15px;
        font-weight: 500;
        line-height: 15px;
        &:hover {
          color: var(--hover-color);
        }
      }
    }
    .info {
      display: flex;
      align-items: center;
      gap: 15px;
      .socials {
        display: flex;
        gap: 5px;
      }
      .outline {
        @media (max-width: $pre-mob) {
          display: none;
        }
      }
    }
    .burger {
      width: 30px;
      height: 19px;
      display: none;
      align-items: center;
      position: relative;
      padding: 0;
      @media (max-width: $desktop-md-2) {
        display: flex;
      }
      span {
        width: 100%;
        height: 1px;
        background: var(--text-color);
      }
      &:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 1px;
        background: var(--text-color);
        top: 0;
      }
      &:after {
        content: "";
        position: absolute;
        width: 100%;
        height: 1px;
        background: var(--text-color);
        bottom: 0;
      }
    }
  }
}
</style>
