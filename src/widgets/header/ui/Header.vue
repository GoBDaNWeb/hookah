<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import { LogoIcon } from "@/shared/icons";
import { TelegramIcon } from "@/shared/icons";
import { WhatsappIcon } from "@/shared/icons";
import { Button } from "@/shared/ui/button";

const active = ref(false);

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

const links = [
  { url: "/", title: "Кальян на дом" },
  { url: "/catering", title: "кейтеринг" },
  { url: "/delivery", title: "Доставка комплектующих" },
  { url: "/manual", title: "Инструкция" },
  { url: "/partners", title: "партнёрам" },
  { url: "/contacts", title: "Контакты" },
];
</script>

<template>
  <header :class="{ active: active }">
    <div class="container">
      <div class="header-inner">
        <RouterLink to="/" class="logo">
          <LogoIcon />
        </RouterLink>
        <nav>
          <RouterLink
            :to="link.url"
            v-for="(link, index) in links"
            :key="index"
            >{{ link.title }}</RouterLink
          >
        </nav>
        <div class="info">
          <a href="tel:8 800 000-00-00">8 800 000-00-00</a>
          <div class="socials">
            <Button variable="social">
              <TelegramIcon />
            </Button>
            <Button variable="social">
              <WhatsappIcon />
            </Button>
          </div>

          <Button variable="outline"> Консультация </Button>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header.active {
  background: var(--white-color);
  border-bottom: 1px solid var(--text-color);

  .header-inner {
    padding-top: 10px;
    padding-bottom: 10px;
    .logo {
      width: 65px;
      height: 65px;
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
  .header-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 20px;
    padding-bottom: 20px;
    transition: var(--trs-300);
    .logo {
      transition: var(--trs-300);
      width: 85px;
      height: 85px;
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
    }
  }
}
</style>
