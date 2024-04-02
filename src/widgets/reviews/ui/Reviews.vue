<template>
  <div class="reviews">
    <div class="container">
      <div class="reviews-inner">
        <div class="top">
          <h3>отзывы</h3>
        </div>
        <div class="review-content">
          <div
            style="
              width: 560px;
              height: 800px;
              overflow: hidden;
              position: relative;
            "
          >
            <iframe
              style="
                width: 100%;
                height: 100%;
                border: 1px solid #e6e6e6;
                border-radius: 8px;
                box-sizing: border-box;
              "
              src="https://yandex.ru/maps-reviews-widget/144955178324?comments"
            ></iframe
            ><a
              href="https://yandex.com.ge/maps/org/kalyan_na_dom/144955178324/"
              target="_blank"
              style="
                box-sizing: border-box;
                text-decoration: none;
                color: #b3b3b3;
                font-size: 10px;
                font-family: YS Text, sans-serif;
                padding: 0 20px;
                position: absolute;
                bottom: 8px;
                width: 100%;
                text-align: center;
                left: 0;
                overflow: hidden;
                text-overflow: ellipsis;
                display: block;
                max-height: 14px;
                white-space: nowrap;
                padding: 0 16px;
                box-sizing: border-box;
              "
              >Кальян на дом на карте Москвы — Яндекс Карты</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.reviews {
  .review-content {
    iframe {
    }
  }
}
</style>
<style lang="scss" scoped>
@import "@/shared/styles/vars";

.reviews {
  background: var(--white-color);
  .reviews-inner {
    padding-bottom: 130px;

    .top {
      padding-top: 30px;
      padding-bottom: 30px;
      border-top: 1px solid var(--text-color);
      border-bottom: 1px solid var(--text-color);
      h3 {
        font-weight: 400;
        font-size: 64px;
        line-height: 54px;
        color: var(--text-color);
        position: relative;
        padding-left: 70px;
        text-transform: uppercase;
        @media (max-width: $tab) {
          font-size: 35px;
          line-height: 29px;
          padding-left: 40px;
        }
        &:before {
          content: "";
          position: absolute;
          background: var(--text-color);
          width: 45px;
          height: 45px;
          left: 0;
          top: 0;
          bottom: 0;
          margin: auto;
          border-radius: 999px;
          @media (max-width: $tab) {
            width: 30px;
            height: 30px;
          }
        }
      }
    }

    .review-content {
      margin-top: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
