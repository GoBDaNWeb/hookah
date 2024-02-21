<template>
  <footer>
    <div class="footer-inner">
      <div
        class="footer-item"
        v-for="(_, index) in [...Array(10)]"
        :key="index"
      >
        <h3>Минздрав предупреждает</h3>
        <span
          >Курение вредит <br />
          вашему здоровью</span
        >
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  background: var(--text-color);
  padding: 50px 0;
  overflow: hidden;
  .footer-inner {
    display: flex;
    gap: 100px;
    animation: scroll 35s linear infinite;
    .footer-item {
      display: flex;
      gap: 27px;
      align-items: flex-end;
      h3 {
        font-weight: 400;
        font-size: 64px;
        line-height: 54px;
        text-transform: uppercase;
        color: var(--bg-color);
        white-space: nowrap;
        position: relative;
        &:before {
          content: "";
          position: absolute;
          width: 45px;
          height: 45px;
          background: var(--bg-color);
          top: 0;
          bottom: 0;
          margin: auto;
          left: -70px;
          border-radius: 999px;
        }
      }
      span {
        font-weight: 400;
        font-size: 28px;
        line-height: 23px;
        text-transform: uppercase;
        color: var(--bg-color);
        white-space: nowrap;
      }
    }
  }
}

@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-100% - 20px));
  }
}
</style>
