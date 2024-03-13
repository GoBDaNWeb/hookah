<script setup>
import { watch, ref } from "vue";
import { RouterView, onBeforeRouteLeave } from "vue-router";
import { Layout } from "@/widgets/layout";
import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";
import { Modal } from "@/widgets/modal";
import { SuccessModal } from "@/widgets/success-modal";
import { MobileMenu } from "@/widgets/mobile-menu";
import { useRoute } from "vue-router";
import { useModalStore } from "@/entities/modal-store";

const modal = useModalStore();
const router = useRoute();

watch(router, () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "instant",
  });
});
</script>

<template>
  <Header />
  <RouterView />
  <Footer />
  <MobileMenu />
  <Modal
    title="Закажите кальян"
    btnText="заказать кальян"
    :isActive="modal.orderModalIsOpen"
    :handleClose="modal.handleOpenOrderModal"
  />
  <Modal
    title="у вас есть вопросы?"
    btnText="отправить"
    :isActive="modal.questionModalIsOpen"
    :handleClose="modal.handleOpenQuestionModal"
  />
  <SuccessModal
    :isActive="modal.successModalIsOpen"
    :handleClose="modal.handleOpenSuccessModal"
  />
</template>

<style scoped></style>
