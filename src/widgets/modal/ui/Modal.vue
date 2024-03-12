<script>
import { useForm } from "vue-hooks-form";
import { CloseIcon, TelegramIcon, WhatsappIcon } from "@/shared/icons";
import { Button } from "@/shared/ui/button";
import { TheMask } from "vue-the-mask";
import { useModalStore } from "@/entities/modal-store";

export default {
  props: ["title", "btnText", "isActive", "handleClose"],
  setup(props) {
    const { useField, handleSubmit } = useForm({
      defaultValues: {},
    });
    const modal = useModalStore();

    const username = useField("username2", {
      rule: { required: true },
    });
    const phone = useField("phone2", {
      rule: {
        required: true,
      },
    });
    const onSubmit = (data) => {
      console.log(data);
      props.handleClose();
      modal.handleOpenSuccessModal();
    };
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
    CloseIcon,
  },
};
</script>

<template>
  <div @click="handleClose" class="modal" :class="isActive ? 'active' : ''">
    <div class="modal-content" @click.stop>
      <Button :click="handleClose">
        <CloseIcon />
      </Button>
      <div class="modal-item">
        <h2>{{ title }}</h2>
        <div class="contacts">
          <div class="socials">
            <Button variable="social">
              <TelegramIcon />
            </Button>
            <Button variable="social">
              <WhatsappIcon />
            </Button>
          </div>
          <a href="tel:8 800 000-00-00">8 800 000-00-00</a>
        </div>
      </div>
      <div class="modal-item">
        <form @submit="onSubmit">
          <input
            placeholder="имя"
            class="input"
            type="text"
            v-model="username.value"
            :ref="username.ref"
          />
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
          <Button variable="primary">{{ btnText }}</Button>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/shared/styles/vars";

.modal.active {
  background: rgba(69, 64, 61, 0.8);
  pointer-events: all;
  .modal-content {
    transform: translateY(0);
  }
}
.modal {
  z-index: 200;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(69, 64, 61, 0);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  pointer-events: none;
  transition: var(--trs-600);
  .modal-content {
    background: var(--bg-color);
    padding: 100px;
    display: grid;
    grid-template-columns: 40% 50%;
    position: relative;
    gap: 137px;
    transform: translateY(-200%);
    transition-delay: 300ms;
    transition: var(--trs-600);
    max-width: 1200px;
    & > button {
      position: absolute;
      top: 30px;
      right: 30px;
      width: 35px;
      height: 35px;
      padding: 0;
      svg {
        stroke: var(--text-color);
        width: 100%;
        height: 100%;
      }
    }
    .modal-item {
      width: 100%;
      h2 {
        font-weight: 400;
        font-size: 64px;
        line-height: 54px;
        color: var(--text-color);
        position: relative;
        max-width: 370px;
        text-transform: uppercase;
        &:before {
          content: "";
          position: absolute;
          width: 45px;
          height: 45px;
          border-radius: 999px;
          background: var(--text-color);
          left: 0;
          top: -55px;
        }
      }
      .contacts {
        display: flex;
        align-items: center;
        gap: 20px;
        margin-top: 40px;
        padding-top: 40px;
        border-top: 1px solid var(--text-color);
        a {
          font-weight: 400;
          font-size: 24px;
          line-height: 24px;
          letter-spacing: -2px;
          white-space: nowrap;
          color: var(--text-color);
          @media (max-width: $tab-sm) {
            font-weight: 500;
          }
        }
        .socials {
          display: flex;
          align-items: center;
          gap: 10px;
          button {
            width: 60px;
            height: 60px;
            @media (max-width: $tab-sm) {
              width: 50px;
              height: 50px;
            }
          }
        }
      }
      form {
        display: flex;
        flex-direction: column;
        gap: 30px;

        p {
          font-weight: 400;
          font-size: 14px;
          line-height: 15px;
          color: var(--text-color);
          text-transform: uppercase;
          @media (max-width: $tab) {
            font-size: 12px;
            line-height: 13px;
          }
          a {
            text-decoration: underline;
          }
        }
        button {
          width: 300px;
        }
      }
    }
  }
}
</style>
