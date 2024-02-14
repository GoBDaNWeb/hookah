<script setup>
import { ref } from "vue";

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
</script>

<template>
  <header :class="{ active: active }">
    <div class="container">
      <div class="header-inner">
        <div class="logo">
          <LogoIcon />
        </div>
        <nav>
          <ul>
            <li>
              <a href="#">Кальян на дом</a>
            </li>
            <li>
              <a href="#">кейтеринг</a>
            </li>
            <li>
              <a href="#">Доставка комплектующих</a>
            </li>
            <li>
              <a href="#">Инструкция</a>
            </li>
            <li>
              <a href="#">партнёрам</a>
            </li>
            <li>
              <a href="#">Контакты</a>
            </li>
          </ul>
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

<style scoped>
header {
  position: fixed;
  left: 0;
  right: 0;
  z-index: 100;
  transition: var(--trs-300);
}
header.active {
  background: var(--white-color);
}
header.active .logo {
  width: 65px;
  height: 65px;
}
header.active .header-inner {
  padding-top: 10px;
  padding-bottom: 10px;
}
.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 20px;
  transition: var(--trs-300);
}
.header-inner .logo svg {
  width: 100%;
  height: 100%;
}
.header-inner .logo {
  transition: var(--trs-300);
  width: 85px;
  height: 85px;
}

.header-inner ul {
  list-style: none;
}

.header-inner nav ul li::marker {
  display: none;
}
.header-inner nav ul {
  display: flex;
  align-items: center;
  gap: 25px;
}
.header-inner nav ul li a:hover {
  color: var(--hover-color);
}
.header-inner nav ul li a {
  color: #45403d;
  transition: var(--trs-300);
}
.info {
  display: flex;
  align-items: center;
  gap: 15px;
}
.socials {
  display: flex;
  gap: 5px;
}
</style>
