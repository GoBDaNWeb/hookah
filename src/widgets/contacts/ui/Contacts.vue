<script>
import { useForm } from "vue-hooks-form";
import { Button } from "@/shared/ui/button";
import { TelegramIcon } from "@/shared/icons";
import { ParadigmaIcon } from "@/shared/icons";
import { WhatsappIcon } from "@/shared/icons";
import { TheMask } from "vue-the-mask";
export default {
  setup() {
    const { useField, handleSubmit } = useForm({
      defaultValues: {},
    });
    const username = useField("username", {
      rule: { required: true },
    });
    const phone = useField("phone", {
      rule: {
        required: true,
      },
    });
    const onSubmit = (data) => console.log(data);
    return {
      username,
      phone,
      onSubmit: handleSubmit(onSubmit),
    };
  },
  components: {
    Button,
    TheMask,
    TelegramIcon,
    WhatsappIcon,
    ParadigmaIcon,
  },
};
</script>

<template>
  <div class="contacts">
    <div class="container">
      <div class="contacts-inner">
        <div class="left">
          <div class="top">
            <ul>
              <li>на дом</li>
              <li>в офис</li>
              <li>на дачу</li>
              <li>в лофт</li>
            </ul>
          </div>
          <div class="center">
            <h3>Закажите кальян</h3>
            <form @submit="onSubmit">
              <input
                placeholder="имя"
                class="input"
                type="text"
                v-model="username.value"
                :ref="username.ref"
              />
              <!-- <TheMask :mask="(##) ####-####"></TheMask> -->
              <input
                placeholder="телефон"
                class="input"
                type="tel"
                v-model="phone.value"
                v-mask="'+7 (###) ###-##-##'"
                :ref="phone.ref"
              />

              <p>
                Нажимая кнопку «Заказать кальян» вы даёте свое согласие
                <a href="#">с правилами обработки персональных данных.</a>
              </p>
              <Button variable="primary">заказать кальян</Button>
            </form>
          </div>
          <div class="bottom">
            <div class="socials">
              <Button variable="social"><WhatsappIcon /></Button>
              <Button variable="social"><TelegramIcon /></Button>
            </div>
            <a href="tel:8 800 000-00-00">8 800 000-00-00</a>
          </div>
        </div>
        <div class="right">
          <div class="image-wrapper">
            <img src="@/shared/assets/images/gallery/5.jpg" alt="" />
          </div>
        </div>
      </div>
      <div class="contacts-info">
        <div class="left">
          <ul>
            <li>© 2024</li>
            <li>кальяннадом.рф</li>
            <li>Все права защищены</li>
          </ul>
        </div>
        <div class="right">
          <ul>
            <li>
              <span>Москва, ул Примерная, 789, оф 101</span>
              <span>11:00 - 02:00</span>
            </li>
            <li>
              <a href="https://paradigma-digital.ru/" target="_blank"
                ><ParadigmaIcon />
                <span
                  >Разработка сайта – <br />
                  Paradigma</span
                ></a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contacts-inner {
  display: flex;
  padding-bottom: 50px;
  gap: 50px;
}
.contacts-inner .left {
  width: 50%;
  padding-top: 50px;
}

.contacts-info .left {
  padding-top: 100px;
  padding-left: 30px;
  position: relative;
}
.contacts-info .left:before {
  content: "";
  position: absolute;
  height: 50px;
  width: 1px;
  background: var(--text-color);

  left: 0;
  top: 0;
}
.contacts-info .right:before {
  content: "";
  position: absolute;
  height: 50px;
  width: 1px;
  background: var(--text-color);

  left: -200px;
  top: 0;
}
.contacts-info .right {
  padding-top: 100px;
  padding-right: 30px;
  position: relative;
}
.contacts-info .left ul {
  display: flex;
  gap: 15px;
  text-transform: uppercase;
  color: var(--text-color);
}
.contacts-info {
  display: flex;
  justify-content: space-between;
  border-top: 1px solid var(--text-color);
  margin-top: 50px;
}
.contacts-info .left ul li:last-child {
  padding-left: 5px;
}
.contacts-info .right ul {
  display: flex;
  gap: 105px;
  align-items: center;
}
.contacts-info .right ul {
  text-transform: uppercase;
}
.contacts-info .right ul {
  display: flex;
  gap: 105px;
  align-items: center;
  font-weight: 400;
  font-size: 14px;
  color: var(--text-color);
}
.contacts-info .right ul li:first-child {
  display: flex;
  flex-direction: column;
}
.contacts-info .right ul li a {
  display: flex;
  gap: 13px;
  align-items: center;
}

.contacts-inner .left .top {
  padding-bottom: 15px;
  border-bottom: 1px solid var(--text-color);
}
.contacts-inner .left .top ul {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.contacts-inner .left .top li:before {
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
.contacts-inner .left .top li {
  position: relative;
  padding-left: 36px;
  font-weight: 400;
  font-size: 24px;
  letter-spacing: -7%;
  color: var(--text-color);
  text-transform: uppercase;
  white-space: nowrap;
}
.contacts-inner .left .center {
  padding-top: 80px;
  padding-left: 35px;
}
.contacts-inner .left .center h3 {
  font-weight: 400;
  font-size: 80px;
  line-height: 68px;
  color: var(--text-color);
  text-transform: uppercase;
}
.contacts-inner .left .center form {
  margin-top: 60px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}
.contacts-inner .left .center form p {
  font-weight: 400;
  font-size: 14px;
  line-height: 15px;
  color: var(--text-color);
  text-transform: uppercase;
}
.contacts-inner .left .center form p a {
  text-decoration: underline;
}
.contacts-inner .left .bottom {
  display: flex;
  align-items: center;
  gap: 30px;
  padding-left: 35px;
  margin-top: 100px;
}
.contacts-inner .left .bottom a {
  font-weight: 500;
  font-size: 30px;
  line-height: 30px;
  color: var(--text-color);
  letter-spacing: -2px;
}
.contacts-inner .left .bottom .socials {
  display: flex;
  gap: 10px;
}
.contacts-inner .left .bottom .socials button {
  width: 60px;
  height: 60px;
}
.contacts-inner .right {
  width: 50%;
  padding-top: 20px;
}
.contacts-inner .right .image-wrapper {
  width: 100%;
  height: 100%;
}
.contacts-inner .right .image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
