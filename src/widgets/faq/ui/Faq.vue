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

defineProps(["img", "hasInfo"]);
</script>

<template>
  <div class="faq">
    <kinesis-container event="scroll">
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
                  <img :src="img" alt="hookah" />

                  <div class="coals">
                    <kinesis-element :strength="-120" axis="x">
                      <img
                        src="@/shared/assets/images/coals-reverse/1.png"
                        alt=""
                      />
                    </kinesis-element>
                    <kinesis-element :strength="-70" axis="x">
                      <img
                        src="@/shared/assets/images/coals-reverse/2.png"
                        alt=""
                      />
                    </kinesis-element>
                    <kinesis-element :strength="-100" axis="x">
                      <img
                        src="@/shared/assets/images/coals-reverse/3.png"
                        alt=""
                      />
                    </kinesis-element>
                    <kinesis-element :strength="-40" axis="x">
                      <img
                        src="@/shared/assets/images/coals-reverse/4.png"
                        alt=""
                      />
                    </kinesis-element>
                    <kinesis-element :strength="-80" axis="x">
                      <img
                        src="@/shared/assets/images/coals-reverse/5.png"
                        alt=""
                      />
                    </kinesis-element>
                    <kinesis-element :strength="-60" axis="x">
                      <img
                        src="@/shared/assets/images/coals-reverse/6.png"
                        alt=""
                      />
                    </kinesis-element>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="faq-about" v-if="hasInfo">
            <div class="left">
              <h5>
                Наслаждайтесь насыщенным дымом у себя дома, заказывая кальян у
                нас.
              </h5>
            </div>
            <div class="right">
              <p>
                Мы предлагаем не просто аренду, а полноценный сервис с
                доставкой. Ваш вечер превратится в настоящее событие, будь то
                вечеринка или спокойный отдых после рабочего дня. <br />
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
    </kinesis-container>
  </div>
</template>

<style lang="scss" scoped>
@import "@/shared/styles/vars";

.faq {
  background: var(--white-color);
  padding-top: 130px;
  padding-bottom: 130px;
  @media (max-width: $tab) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
  .faq-inner {
    h3 {
      font-weight: 400;
      font-size: 64px;
      line-height: 54px;
      color: var(--text-color);
      text-transform: uppercase;
      letter-spacing: -2px;
      @media (max-width: $tab) {
        font-size: 35px;
        line-height: 29px;
      }
    }
    .faq-content {
      margin-top: 50px;
      display: flex;
      gap: 20px;
      @media (max-width: $tab) {
        flex-direction: column;
        margin-top: 20px;
      }
      .left {
        width: 50%;
        @media (max-width: $tab) {
          width: 100%;
        }
        .accordion.active {
          button {
            p {
              color: var(--hover-color);
            }
            span {
              svg {
                transform: rotate(45deg);
                stroke: var(--hover-color);
              }
            }
          }
        }
        .accordion {
          border-bottom: 1px solid var(--text-color);
          padding-bottom: 20px;
          padding-top: 20px;
          button {
            display: flex;
            gap: 30px;
            align-items: center;
            p {
              font-weight: 400;
              font-size: 24px;
              line-height: 26px;
              color: var(--text-color);
              text-align: left;
              transition: var(--trs-300);
              text-transform: uppercase;
            }
            span {
              svg {
                stroke: var(--text-color);
                transition: var(--trs-300);
              }
            }
          }
          .collapse {
            p {
              font-weight: 400;
              font-size: 16px;
              line-height: 24px;
              color: var(--text-color);
              padding-top: 20px;
              padding-left: 80px;
            }
          }
        }
      }
      .right {
        width: 50%;
        @media (max-width: $tab) {
          width: 100%;
          height: calc(30vw * 3);
        }
        .image-wrapper {
          width: 100%;
          height: 100%;
          padding: 20px 20px 60px 20px;
          background: var(--bg-color);
          position: relative;
          max-height: 700px;
          @media (max-width: $tab) {
            padding: 10px 10px 30px 10px;
          }
          &:after {
            content: "";
            position: absolute;
            background: var(--text-color);
            width: 20px;
            height: 20px;
            border-radius: 999px;
            bottom: 20px;
            right: 20px;
            @media (max-width: $tab) {
              width: 12px;
              height: 12px;
              bottom: 10px;
              right: 10px;
            }
          }
          .image-wrapper-inner {
            width: 100%;
            height: 100%;
            position: relative;
            overflow: hidden;
            .coals {
              position: absolute;
              bottom: 170px;
              width: 360px;
              height: 240px;
              right: 0;
              // transform: rotate(10deg);
              z-index: 2;
              @media (max-width: $tab) {
                bottom: auto;
                top: 36%;
              }
              @media (max-width: $pre-mob) {
                top: 10%;
              }
              @media (max-width: $mob) {
                width: 168px;
                height: 108px;
                top: 20%;
              }
              & > div {
                width: 100%;
                height: 100%;
                position: absolute;
                &:nth-child(1) {
                  width: 73px;
                  height: 70px;
                  bottom: 106px;
                  right: 210px;

                  @media (max-width: $tab) {
                    width: 53px;
                    height: 50px;
                  }
                  @media (max-width: $mob) {
                    right: 107px;
                    width: 34px;
                    height: 28px;
                    bottom: 50px;
                  }
                }
                &:nth-child(2) {
                  width: 40px;
                  height: 36px;
                  bottom: 170px;
                  right: 160px;

                  @media (max-width: $tab) {
                    width: 20px;
                    height: 16px;
                  }
                  @media (max-width: $mob) {
                    right: 82px;
                    bottom: 86px;
                  }
                }
                &:nth-child(3) {
                  width: 25px;
                  height: 28px;
                  bottom: 130px;
                  right: 123px;
                  @media (max-width: $tab) {
                    width: 15px;
                    height: 18px;
                  }
                  @media (max-width: $mob) {
                    right: 63px;
                    bottom: 64px;
                  }
                }
                &:nth-child(4) {
                  width: 116px;
                  height: 98px;
                  bottom: 20px;
                  right: 100px;
                  @media (max-width: $tab) {
                    width: 96px;
                    height: 78px;
                  }
                  @media (max-width: $mob) {
                    right: 45px;
                    width: 51px;
                    bottom: 13px;
                    height: 47px;
                  }
                }
                &:nth-child(5) {
                  width: 68px;
                  height: 79px;
                  right: 26px;
                  bottom: 109px;
                  @media (max-width: $tab) {
                    width: 48px;
                    height: 59px;
                  }
                  @media (max-width: $mob) {
                    right: 6px;
                    width: 33px;
                    height: 34px;
                    bottom: 46px;
                  }
                }
                &:nth-child(6) {
                  width: 75px;
                  height: 112px;
                  bottom: 0;
                  right: -25px;
                  @media (max-width: $tab) {
                    width: 55px;
                    height: 92px;
                  }
                  @media (max-width: $mob) {
                    height: 48px;
                    width: 50px;
                    img {
                      object-fit: contain;
                    }
                  }
                }
              }
              img {
                object-fit: cover;
                width: 100%;
                height: 100%;
              }
            }
          }
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .coals {
            position: absolute;
            width: 360px;
            height: 280px;
            top: 90px;
            right: 0;
            overflow: contain;
            @media (max-width: $pre-mob) {
              width: 168px;
              height: 108px;
            }
          }
        }
      }
    }
    .faq-about {
      display: flex;
      margin-top: 130px;
      border-top: 1px solid var(--text-color);

      @media (max-width: $tab-sm) {
        flex-direction: column;
        margin-top: 80px;
      }
      .left {
        width: 50%;
        padding-top: 100px;
        padding-right: 120px;
        @media (max-width: $tab) {
          padding-top: 50px;
          padding-right: 0;
        }
        @media (max-width: $tab-sm) {
          width: 100%;
        }
        h5 {
          position: relative;
          font-weight: 400;
          font-size: 32px;
          line-height: 35px;
          color: var(--text-color);
          text-transform: uppercase;
          @media (max-width: $tab-sm) {
            font-size: 24px;
            line-height: 26px;
          }
          &:before {
            content: "";
            position: absolute;
            background: var(--text-color);
            border-radius: 999px;
            width: 20px;
            height: 20px;
            top: -50px;
            left: 0;
            @media (max-width: $tab) {
              top: -25px;
            }
            @media (max-width: $tab-sm) {
              width: 12px;
              height: 12px;
            }
          }
        }
      }
      .right {
        width: 50%;
        padding-top: 100px;
        position: relative;
        @media (max-width: $tab-sm) {
          width: 100%;
          padding-top: 20px;
        }
        &:before {
          content: "";
          position: absolute;
          height: 50px;
          width: 1px;
          background: var(--text-color);
          top: 0;
          left: 0;
          @media (max-width: $tab-sm) {
            display: none;
          }
        }
        p {
          font-weight: 400;
          color: var(--text-color);
          font-size: 16px;
          line-height: 24px;
        }
      }
    }
  }
}
</style>
