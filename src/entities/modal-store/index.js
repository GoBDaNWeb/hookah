import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useModalStore = defineStore("modal", {
  state: () => {
    return {
      orderModalIsOpen: false,
      questionModalIsOpen: false,
      successModalIsOpen: false,
    };
  },

  actions: {
    handleOpenOrderModal() {
      this.orderModalIsOpen = !this.orderModalIsOpen;
    },
    handleOpenQuestionModal() {
      this.questionModalIsOpen = !this.questionModalIsOpen;
    },
    handleOpenSuccessModal() {
      this.successModalIsOpen = !this.successModalIsOpen;
    },
  },
});
