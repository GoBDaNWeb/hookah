<script setup>
import { Button } from "@/shared/ui/button";
import { TelegramIcon } from "@/shared/icons";
import { WhatsappIcon } from "@/shared/icons";
let center = [55.84742656888428, 37.478171499999995];

function init() {
  let map = new ymaps.Map("map", {
    center: center,
    zoom: 17,
  });

  // let placemark = new ymaps.Placemark(
  //   center,
  //   {},
  //   {
  //     iconLayout: "default#image",
  //     iconImageHref:
  //       "https://ucarecdn.com/af891ef7-9072-4123-bcf5-189d936ba631/",
  //     iconImageSize: [40, 40],
  //     iconImageOffset: [-19, -44],
  //   }
  // );

  map.controls.remove("geolocationControl"); // удаляем геолокацию
  map.controls.remove("searchControl"); // удаляем поиск
  map.controls.remove("trafficControl"); // удаляем контроль трафика
  map.controls.remove("typeSelector"); // удаляем тип
  map.controls.remove("fullscreenControl"); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove("zoomControl"); // удаляем контрол зуммирования
  map.controls.remove("rulerControl"); // удаляем контрол правил
  map.behaviors.disable(["scrollZoom"]); // отключаем скролл карты (опционально)

  // map.geoObjects.add(placemark);
}

ymaps.ready(init);
</script>

<template>
  <div class="delivery">
    <div class="container">
      <div class="delivery-inner">
        <h3>доставка и возврат</h3>
        <div class="delivery-content">
          <div class="left">
            <h5>
              Стоимость доставки и возврата <br />
              объединена в единый платеж
            </h5>
            <div class="info">
              <div class="info-item">
                <span class="label">В пределах МКАД</span>
                <span class="line"></span>
                <span class="value">500 ₽</span>
              </div>
              <div class="info-item">
                <span class="label">до 5 км от МКАД</span>
                <span class="line"></span>
                <span class="value">800 ₽</span>
              </div>
              <div class="info-item">
                <span class="label">от 5 км от МКАД</span>
                <span class="line"></span>
                <span class="value">Тариф Яндекс.Go экспресс</span>
              </div>
            </div>
            <div class="contacts">
              <div class="contacts-left">
                <h5>самовывоз <span>бесплатно</span></h5>
                <div class="contacts-about">
                  <a href="tel:8 800 000-00-00">8 800 000-00-00</a>
                  <div class="socials">
                    <Button variable="social"><WhatsappIcon /></Button>
                    <Button variable="social"><TelegramIcon /></Button>
                  </div>
                </div>
              </div>
              <div class="contacts-right">
                <p>
                  Доступен бесплатный самовывоз из нашего офиса. Дополнительную
                  информацию о самовывозе уточняйте у менеджера.
                </p>
                <Button variable="primary"> заказать кальян </Button>
              </div>
            </div>
          </div>
          <div class="right">
            <div id="map" class="map"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.delivery {
  background: var(--white-color);
  padding-top: 130px;
  padding-bottom: 130px;
}

.delivery .delivery-inner h3 {
  font-weight: 400;
  font-size: 64px;
  line-height: 54px;
  color: var(--text-color);
  text-transform: uppercase;
}

.delivery-content {
  margin-top: 50px;
  display: flex;
  gap: 20px;
}
.delivery-content .left {
  width: 50%;
}
.delivery-content .left h5 {
  padding-left: 37px;
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
  color: var(--text-color);
  position: relative;
  text-transform: uppercase;
}
.delivery-content .left h5:before {
  content: "";
  position: absolute;
  background: var(--text-color);
  width: 20px;
  height: 20px;
  border-radius: 999px;
  left: 0;
  top: 4px;
}
.delivery-content .left .contacts {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 37px;
}
.delivery-content .left .contacts .contacts-right {
  /* width: 50%; */
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding-top: 100px;
  position: relative;
}
.delivery-content .left .contacts .contacts-right:before {
  content: "";
  position: absolute;
  height: 50px;
  width: 1px;
  background: var(--text-color);
  top: 0;
  left: 0;
}
.delivery-content .right p {
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: var(--text-color);
}
.delivery-content .left .contacts .contacts-left {
  /* width: 50%; */
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  padding-top: 100px;
}

.delivery-content .left .contacts .contacts-left .contacts-about {
  display: flex;
  gap: 37px;
  align-items: center;
}
.delivery-content .left .contacts .contacts-left .contacts-about .socials {
  display: flex;
  gap: 10px;
}
.delivery-content
  .left
  .contacts
  .contacts-left
  .contacts-about
  .socials
  button {
  width: 60px;
  height: 60px;
}
.delivery-content .left .contacts .contacts-left a {
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
  color: var(--text-color);
  letter-spacing: -2px;
}
.delivery-content .left .contacts .contacts-left h5 {
  position: relative;
  font-weight: 400;
  font-size: 24px;
  line-height: 26px;
  color: var(--text-color);
  white-space: nowrap;
}
.delivery-content .left .contacts .contacts-left h5 span {
  font-weight: 600;
}
.delivery-content .left .info {
  border-top: 1px solid var(--text-color);
  border-bottom: 1px solid var(--text-color);
  padding-bottom: 50px;
  padding-top: 50px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.delivery-content .left .info .info-item {
  display: flex;
  align-items: baseline;
  gap: 3px;
}
.delivery-content .left .info .info-item .label {
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  color: var(--text-color);
  position: relative;
  padding-left: 40px;
  white-space: nowrap;
}
.delivery-content .left .info .info-item .label:before {
  content: "";
  position: absolute;
  border: 1px solid var(--text-color);
  width: 20px;
  height: 20px;
  border-radius: 999px;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
.delivery-content .left .info .info-item .line {
  width: 100%;
  height: 1px;
  background: var(--bg-color);
}
.delivery-content .left .info .info-item .value {
  white-space: nowrap;
  font-weight: 500;
  font-size: 24px;
  line-height: 24px;
  color: var(--text-color);
}
.delivery-content .right {
  width: 50%;
}

.map {
  width: 100%;
  height: 100%;
  background-color: var(--bg-color);
  filter: grayscale(1);
}
</style>
