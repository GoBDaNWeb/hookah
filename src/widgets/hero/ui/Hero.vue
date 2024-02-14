<script setup>
import { TelegramIcon } from "@/shared/icons";
import { WhatsappIcon } from "@/shared/icons";
import { Button } from "@/shared/ui/button";
</script>

<template>
  <div class="hero">
    <div class="container">
      <div class="hero-inner">
        <div class="left">
          <h1>
            Аренда <br />
            кальяна
          </h1>
          <div class="info">
            <div class="info-left">
              <div class="cost">
                <span>от 1 900 ₽</span>

                <p>
                  Стоимость <br />
                  без учета доставки
                </p>
              </div>
            </div>
            <div class="info-right">
              <ul>
                <li>По Москве и области</li>
                <li>время: <span>11:00 - 02:00</span></li>
                <li>Доставка <span>1 - 1,5 часа</span></li>
              </ul>
            </div>
          </div>
          <div class="contacts">
            <a href="tel:8 800 000-00-00">8 800 000-00-00</a>
            <div class="socials">
              <Button variable="social">
                <TelegramIcon />
              </Button>
              <Button variable="social">
                <WhatsappIcon />
              </Button>
            </div>
            <Button variable="primary"> заказать кальян </Button>
          </div>
        </div>
        <div class="right">
          <div class="top">
            <ul>
              <li>на дом</li>
              <li>в офис</li>
              <li>на дачу</li>
              <li>в лофт</li>
            </ul>
          </div>
          <div class="image-wrapper">
            <img src="@/shared/assets/images/hero-photo.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero {
  position: relative;
}
.hero:before {
  content: "";
  background: var(--white-color);
  width: calc(50% + 10px);
  left: 0;
  top: 0;
  position: absolute;
  height: 100%;
}
.hero-inner {
  display: flex;
  min-height: 100vh;
  gap: 40px;
}
.left {
  width: 50%;
  padding-top: 175px;
  z-index: 2;
}
.left h1 {
  font-weight: 400;
  color: var(--text-color);
  font-size: 130px;
  line-height: 110.5px;
  letter-spacing: -7%;
  text-transform: uppercase;
  padding: 0 30px 50px;
}

.info {
  padding: 70px 30px;
  position: relative;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--text-color);
  border-top: 1px solid var(--text-color);
}
/* .info:before {
    content: "";
    position: absolute;
    width: 100%;
    background: var(--text-color);
    height: 1px;
    top: 0;
    left: 0;
  } */
.info:after {
  content: "";
  position: absolute;
  width: 1px;
  background: var(--text-color);
  height: 50px;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.info-left .cost {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.info-left .cost span {
  font-size: 24px;
  font-weight: 600;
  line-height: 26.4px;
  letter-spacing: -7%;
  color: var(--text-color);
  position: relative;
  padding-left: 35px;
  text-transform: uppercase;
}
.info-left .cost span:before {
  position: absolute;
  content: "";
  background: var(--text-color);
  width: 20px;
  height: 20px;
  border-radius: 999px;
  top: 0;
  bottom: 0;
  margin: auto;
  left: 0;
}
.info-left .cost p {
  font-size: 24px;
  font-weight: 400;
  line-height: 26.4px;
  letter-spacing: -7%;
  color: var(--text-color);
}
.info-right ul {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.info-right li {
  position: relative;
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: -7%;
  padding-left: 35px;
  color: var(--text-color);
}
.info-right li span {
  font-weight: 600;
}
.info-right li:before {
  content: "";
  position: absolute;
  width: 20px;
  height: 20px;
  border: 1px solid var(--text-color);
  border-radius: 999px;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
.contacts {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 37px;
  padding-top: 50px;
  padding-left: 30px;
  padding-right: 30px;
}
.contacts a {
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: -2px;
  white-space: nowrap;
  color: var(--text-color);
}
.contacts .socials {
  display: flex;
  align-items: center;
  gap: 10px;
}
.contacts .socials button {
  width: 60px;
  height: 60px;
}
.contacts > button {
  white-space: nowrap;
}
.right {
  width: 50%;
  padding-top: 175px;
}
.right .top {
  position: relative;
  padding-bottom: 20px;
}
.right .top:after {
  content: "";
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 1px;
  background: var(--text-color);
}
.right .top ul {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.right .top ul li {
  position: relative;
  padding-left: 36px;
  font-weight: 400;
  font-size: 24px;
  letter-spacing: -7%;
  color: var(--text-color);
  text-transform: uppercase;
  white-space: nowrap;
}
.right .top ul li:before {
  content: "";
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 999px;
  background: var(--text-color);
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
.right .image-wrapper {
  margin-top: 20px;
}
.right .image-wrapper img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
</style>
