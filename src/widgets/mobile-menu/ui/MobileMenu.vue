<script setup>
import { LogoIcon, CloseIcon } from "@/shared/icons";
import { useMenuStore } from "@/entities/menu-store";
import { useModalStore } from "@/entities/modal-store";

import { links } from "@/shared/config";
import { TelegramIcon } from "@/shared/icons";
import { WhatsappIcon } from "@/shared/icons";
import { Button } from "@/shared/ui/button";
const menu = useMenuStore();
const modal = useModalStore();
</script>

<template>
  <div :class="menu.isActive ? 'active' : ''" class="mobile-menu">
    <button class="close-btn" @click.prevent="menu.handleOpenMenu">
      <CloseIcon />
    </button>
    <div class="mobile-menu__content">
      <div class="top">
        <RouterLink to="/">
          <LogoIcon />
        </RouterLink>
      </div>
      <div class="center">
        <nav>
          <RouterLink
            :to="link.url"
            v-for="(link, index) in links"
            :key="index"
            >{{ link.title }}</RouterLink
          >
        </nav>
      </div>
      <div class="bottom">
        <a href="tel:8 800 000-00-00">8 800 000-00-00</a>
        <div class="socials">
          <Button variable="social">
            <TelegramIcon />
          </Button>
          <Button variable="social">
            <WhatsappIcon />
          </Button>
        </div>
        <Button variable="outline" :click="modal.handleOpenQuestionModal">
          Консультация</Button
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/shared/styles/vars";

.mobile-menu.active {
  background: rgba(69, 64, 61, 0.8);
  pointer-events: all;
  .close-btn {
    opacity: 1;
  }
  .mobile-menu__content {
    transform: translateX(0);
  }
}
.mobile-menu {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(69, 64, 61, 0);
  z-index: 120;
  pointer-events: none;
  transition: var(--trs-300);

  .close-btn {
    position: absolute;
    top: 18px;
    right: 21px;
    opacity: 0;
  }
  .mobile-menu__content {
    background: var(--bg-color);
    width: 50vw;
    height: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transform: translateX(-100%);
    transition: var(--trs-300);
    @media (max-width: $tab-sm) {
      width: 75vw;
    }
    .top {
      a {
        width: 75px;
        height: 75px;
        display: block;
        svg {
          width: 100%;
          height: 100%;
        }
      }
    }
    .center {
      nav {
        display: flex;
        flex-direction: column;
        gap: 30px;
        a {
          font-weight: 500;
          font-size: 18px;
          line-height: 19px;
          font-family: "Golos", sans-serif;
          color: var(--text-color);
          text-transform: uppercase;
        }
      }
    }
    .bottom {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 20px;
      justify-content: space-between;
      padding-top: 20px;
      border-top: 1px solid var(--text-color);
      a {
        font-weight: 400;
        font-size: 16px;
        line-height: 16px;
        color: var(--text-color);
        font-family: "Golos", sans-serif;
      }
      .socials {
        display: flex;
        align-items: center;
        gap: 5px;
      }
      & > button {
        width: 100%;
      }
    }
  }
}
</style>
