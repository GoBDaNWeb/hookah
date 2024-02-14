<script setup>
import { reactive } from "vue";
import { Collapse } from "vue-collapsed";
import { PlusIcon } from "@/shared/icons";
const questions = reactive([
  {
    title: "Могу я забрать кальян самостоятельно?",
    answer:
      "Этого не требуется, существует только денежный страховой депозит — 2 000 руб. Он возвращается когда кальян будет доставлен обратно.",
    isExpanded: false, // Initial value
  },
  {
    title: "Нужно ли оставлять в залог паспорт или другие документы?",
    answer:
      "Этого не требуется, существует только денежный страховой депозит — 2 000 руб. Он возвращается когда кальян будет доставлен обратно.",
    isExpanded: false,
  },
  {
    title: "Нужно ли показывать паспорт при получении кальяна?",
    answer:
      "Этого не требуется, существует только денежный страховой депозит — 2 000 руб. Он возвращается когда кальян будет доставлен обратно.",
    isExpanded: false,
  },
  {
    title: "Что если я повредил кальян или комплектующие?",
    answer:
      "Этого не требуется, существует только денежный страховой депозит — 2 000 руб. Он возвращается когда кальян будет доставлен обратно.",
    isExpanded: false,
  },
  {
    title: "Что делать, если я забуду, что-то положить при возврате?",
    answer:
      "Этого не требуется, существует только денежный страховой депозит — 2 000 руб. Он возвращается когда кальян будет доставлен обратно.",
    isExpanded: false,
  },
  {
    title: "Как происходит обработка кальяна после использования?",
    answer:
      "Этого не требуется, существует только денежный страховой депозит — 2 000 руб. Он возвращается когда кальян будет доставлен обратно.",
    isExpanded: false,
  },
  {
    title: "Если кальян нужен срочно?",
    answer:
      "Этого не требуется, существует только денежный страховой депозит — 2 000 руб. Он возвращается когда кальян будет доставлен обратно.",
    isExpanded: false,
  },
  {
    title: "Вы поможете со сборкой и приготовлением кальяна?",
    answer:
      "Этого не требуется, существует только денежный страховой депозит — 2 000 руб. Он возвращается когда кальян будет доставлен обратно.",
    isExpanded: false,
  },
]);
function handleAccordion(selectedIndex) {
  questions.forEach((_, index) => {
    questions[index].isExpanded =
      index === selectedIndex ? !questions[index].isExpanded : false;
  });
}
</script>

<template>
  <div class="faq">
    <div class="container">
      <div class="faq-inner">
        <h3>
          дополнительная <br />
          информация
        </h3>
        <div class="faq-content">
          <div class="left">
            <div
              class="accordion"
              :class="{ active: question.isExpanded }"
              v-for="(question, index) in questions"
              :key="question.title"
            >
              <button @click="() => handleAccordion(index)">
                <span>
                  <PlusIcon />
                </span>
                <p>
                  {{ question.title }}
                </p>
              </button>
              <Collapse :when="questions[index].isExpanded" class="collapse">
                <p>
                  {{ question.answer }}
                </p>
              </Collapse>
            </div>
          </div>
          <div class="right">
            <div class="image-wrapper">
              <div class="image-wrapper-inner">
                <img src="@/shared/assets/images/hookah-white.jpg" alt="" />
                <img
                  class="coals"
                  src="@/shared/assets/images/coals-reverse.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div class="faq-about">
          <div class="left">
            <h5>
              Наслаждайтесь насыщенным дымом у себя дома, заказывая кальян у
              нас.
            </h5>
          </div>
          <div class="right">
            <p>
              Мы предлагаем не просто аренду, а полноценный сервис с доставкой.
              Ваш вечер превратится в настоящее событие, будь то вечеринка или
              спокойный отдых после рабочего дня. <br />
              <br />
              Наша доставка кальяна — это удобство и высокое качество
              обслуживания. Легко выбрать и заказать кальян, подходящий именно
              вам. <br /><br />
              Мы предлагаем разнообразные варианты для любого случая: от
              романтического вечера до большой вечеринки. Всё необходимое для
              комфортного курения кальяна у вас дома мы предоставим, включая
              качественные аксессуары и разнообразные ароматы табака.
              <br /><br />
              Обратитесь к нам, и ваше мероприятие станет по-настоящему
              особенным.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.faq {
  background: var(--white-color);
  padding-top: 130px;
  padding-bottom: 130px;
}
.faq-inner h3 {
  font-weight: 400;
  font-size: 64px;
  line-height: 54px;
  color: var(--text-color);
  text-transform: uppercase;
}
.faq-content {
  margin-top: 50px;
  display: flex;
  gap: 20px;
}
.faq-content .left {
  width: 50%;
}
.faq-content .right {
  width: 50%;
}
.faq-content .right .image-wrapper {
  width: 100%;
  height: 100%;
  padding: 20px 20px 60px 20px;
  background: var(--bg-color);
  position: relative;
  height: 700px;
}
.faq-content .right .image-wrapper:after {
  content: "";
  position: absolute;
  background: var(--text-color);
  width: 20px;
  height: 20px;
  border-radius: 999px;
  bottom: 20px;
  right: 20px;
}
.faq-content .right .image-wrapper .image-wrapper-inner {
  width: 100%;
  height: 100%;
  position: relative;
}
.faq-content .right .image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.faq-content .right .image-wrapper .coals {
  position: absolute;
  width: 360px;
  height: 280px;
  top: 90px;
  right: 0;
  overflow: contain;
}
.faq-content .left .accordion.active button p {
  color: var(--hover-color);
}
.faq-content .left .accordion button span svg {
  stroke: var(--text-color);
  transition: var(--trs-300);
}
.faq-content .left .accordion.active button span svg {
  transform: rotate(45deg);
  stroke: var(--hover-color);
}
.faq-content .left .accordion {
  border-bottom: 1px solid var(--text-color);
  padding-bottom: 20px;
  padding-top: 20px;
}
.faq-content .left .accordion button {
  display: flex;
  gap: 30px;
  align-items: center;
}
.faq-content .left .accordion button p {
  font-weight: 400;
  font-size: 24px;
  line-height: 26px;
  color: var(--text-color);
  text-align: left;
  transition: var(--trs-300);
}
.faq-content .left .accordion .collapse p {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: var(--text-color);
  padding-top: 20px;
  padding-left: 80px;
}
.faq-content .right {
  width: 50%;
}
.faq-about {
  display: flex;
  margin-top: 130px;
  border-top: 1px solid var(--text-color);
}
.faq-about .left {
  width: 50%;
  padding-top: 100px;
  padding-right: 150px;
}
.faq-about .left h5 {
  position: relative;
  font-weight: 400;
  font-size: 32px;
  line-height: 35px;
  color: var(--text-color);
}
.faq-about .left h5:before {
  content: "";
  position: absolute;
  background: var(--text-color);
  border-radius: 999px;
  width: 20px;
  height: 20px;
  top: -50px;
  left: 0;
}
.faq-about .right {
  width: 50%;
  padding-top: 100px;
  position: relative;
}
.faq-about .right p {
  font-weight: 400;
  color: var(--text-color);
  font-size: 16px;
  line-height: 24px;
}
.faq-about .right:before {
  content: "";
  position: absolute;
  height: 50px;
  width: 1px;
  background: var(--text-color);
  top: 0;
  left: 0;
}
</style>
