<script>
import { useForm } from "vue-hooks-form";
import { Button } from "@/shared/ui/button";
import { TelegramIcon } from "@/shared/icons";
import { ParadigmaIcon } from "@/shared/icons";
import { WhatsappIcon } from "@/shared/icons";
import { TheMask } from "vue-the-mask";
export default {
  props: ["tabs", "title", "img", "list", "subTitle", "subTitleForm", "badge"],
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
          <div class="top" v-if="tabs">
            <ul>
              <li v-for="tab in tabs" :key="tab">{{ tab }}</li>
            </ul>
          </div>
          <span v-if="badge" class="badge">{{ badge }}</span>

          <div class="center">
            <h3>{{ title }}</h3>
            <h5 v-if="subTitle">{{ subTitle }}</h5>
            <ul v-if="list">
              <li v-for="item in list" :key="item">{{ item }}</li>
            </ul>
            <h5 class="sub-title-form" v-if="subTitleForm">
              {{ subTitleForm }}
            </h5>
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
            <img v-if="img" :src="img" alt="photo" />
            <img
              v-else
              src="@/shared/assets/images/gallery/5.jpg"
              alt="photo"
            />
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

<style lang="scss" scoped>
.contacts {
  .contacts-inner {
    display: flex;
    padding-bottom: 50px;
    gap: 50px;
    .left {
      width: 50%;
      padding-top: 50px;
      .top {
        padding-bottom: 85px;
        ul {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid var(--text-color);

          padding-bottom: 15px;
          li {
            position: relative;
            padding-left: 36px;
            font-weight: 400;
            font-size: 24px;
            letter-spacing: -7%;
            color: var(--text-color);
            text-transform: uppercase;
            white-space: nowrap;
            &:before {
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
          }
        }
      }
      .badge {
        font-weight: 400;
        font-size: 24px;
        text-transform: uppercase;
        line-height: 26px;
        color: var(--text-color);
        position: relative;
        padding-left: 35px;
        margin-bottom: 65px;
        display: block;
        margin-top: 20px;
        &:before {
          content: "";
          position: absolute;
          width: 20px;
          height: 20px;
          background: var(--text-color);
          border-radius: 999px;
          top: 0;
          bottom: 0;
          margin: auto;
          left: 0;
        }
      }
      .center {
        padding-left: 35px;
        padding-top: 15px;

        h3 {
          font-weight: 400;
          font-size: 80px;
          line-height: 68px;
          color: var(--text-color);
          text-transform: uppercase;
        }
        h5 {
          font-weight: 400;
          font-size: 32px;
          line-height: 35px;
          color: var(--text-color);
          margin-top: 50px;
          margin-bottom: 30px;
          text-transform: uppercase;
        }
        ul {
          display: flex;
          flex-direction: column;
          gap: 20px;
          li {
            font-weight: 400;
            font-size: 20px;
            color: var(--text-color);
            line-height: 20px;
            position: relative;
            padding-left: 33px;

            &:before {
              content: "";
              position: absolute;
              width: 10px;
              height: 10px;
              background: var(--text-color);
              border-radius: 999px;
              top: 0;
              bottom: 0;
              margin: auto;
              left: 0;
            }
          }
        }
        form {
          margin-top: 60px;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
          p {
            font-weight: 400;
            font-size: 14px;
            line-height: 15px;
            color: var(--text-color);
            text-transform: uppercase;
            a {
              text-decoration: underline;
            }
          }
        }
      }
      .bottom {
        display: flex;
        align-items: center;
        gap: 30px;
        padding-left: 35px;
        margin-top: 100px;
        a {
          font-weight: 500;
          font-size: 30px;
          line-height: 30px;
          color: var(--text-color);
          letter-spacing: -2px;
        }
        .socials {
          display: flex;
          gap: 10px;
          button {
            width: 60px;
            height: 60px;
          }
        }
      }
    }
    .right {
      width: 50%;
      padding-top: 20px;
      .image-wrapper {
        width: 100%;
        height: 100%;
        max-height: 615px;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
  .contacts-info {
    display: flex;
    justify-content: space-between;
    border-top: 1px solid var(--text-color);
    margin-top: 50px;
    padding-bottom: 50px;
    .left {
      padding-top: 100px;
      padding-left: 30px;
      position: relative;
      &:before {
        content: "";
        position: absolute;
        height: 50px;
        width: 1px;
        background: var(--text-color);

        left: 0;
        top: 0;
      }
      ul {
        display: flex;
        gap: 15px;
        text-transform: uppercase;
        color: var(--text-color);
        li {
          &:last-child {
            padding-left: 5px;
          }
        }
      }
    }
    .right {
      padding-top: 100px;
      padding-right: 30px;
      position: relative;
      &:before {
        content: "";
        position: absolute;
        height: 50px;
        width: 1px;
        background: var(--text-color);

        left: -200px;
        top: 0;
      }
      ul {
        display: flex;
        gap: 105px;
        align-items: center;
        text-transform: uppercase;
        font-weight: 400;
        font-size: 14px;
        color: var(--text-color);
        li {
          a {
            display: flex;
            gap: 13px;
            align-items: center;
          }
          &:first-child {
            display: flex;
            flex-direction: column;
          }
        }
      }
    }
  }
}
</style>
