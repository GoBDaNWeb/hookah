<script setup>
import galleryImg1 from "@/shared/assets/images/gallery/1.jpg";
import galleryImg2 from "@/shared/assets/images/gallery/2.jpg";
import galleryImg3 from "@/shared/assets/images/gallery/3.jpg";
import galleryImg4 from "@/shared/assets/images/gallery/4.jpg";
import galleryImg5 from "@/shared/assets/images/gallery/5.jpg";
import galleryImg6 from "@/shared/assets/images/gallery/6.jpg";
import galleryImg7 from "@/shared/assets/images/gallery/7.jpg";
import galleryImg8 from "@/shared/assets/images/gallery/8.jpg";
import galleryImg9 from "@/shared/assets/images/gallery/9.jpg";
import galleryImg10 from "@/shared/assets/images/gallery/10.jpg";
import { Fancybox } from "@/widgets/fancybox";
const leftGallery = [
  {
    id: 1,
    img: galleryImg1,
  },
  {
    id: 2,
    img: galleryImg2,
  },
  {
    id: 3,
    img: galleryImg3,
  },
  {
    id: 4,
    img: galleryImg4,
  },
  {
    id: 5,
    img: galleryImg5,
  },
];
const rightGallery = [
  {
    id: 6,
    img: galleryImg6,
  },
  {
    id: 7,
    img: galleryImg7,
  },
  {
    id: 8,
    img: galleryImg8,
  },
  {
    id: 9,
    img: galleryImg9,
  },
  {
    id: 10,
    img: galleryImg10,
  },
];
</script>

<template>
  <div class="gallery">
    <div class="container">
      <div class="gallery-inner">
        <h3>кальяны в деле</h3>
        <Fancybox>
          <div class="gallery-content">
            <div class="left">
              <a
                v-for="img in leftGallery"
                :key="img.id"
                data-fancybox="gallery"
                :href="img.img"
              >
                <div class="image-wrapper">
                  <img :src="img.img" alt="" />
                </div>
              </a>
            </div>

            <div class="right">
              <a
                v-for="img in rightGallery"
                :key="img.id"
                data-fancybox="gallery"
                :href="img.img"
              >
                <div class="image-wrapper">
                  <img :src="img.img" alt="" />
                </div>
              </a>
            </div>
          </div>
        </Fancybox>
      </div>
    </div>
  </div>
</template>

<style scoped>
.gallery {
  background: var(--white-color);
}
.gallery-inner {
  padding-top: 30px;
  border-top: 1px solid var(--text-color);
}
.gallery-inner h3 {
  font-weight: 400;
  font-size: 64px;
  line-height: 54px;
  color: var(--text-color);
  position: relative;
  padding-left: 70px;
  text-transform: uppercase;
}
.gallery-inner h3:before {
  content: "";
  position: absolute;
  background: var(--text-color);
  width: 45px;
  height: 45px;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
.gallery-content {
  margin-top: 50px;
  display: flex;
  gap: 20px;
}
.gallery-content img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.gallery-content .left,
.gallery-content .right {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  width: 50%;
}

.gallery-content .left a:nth-child(1),
.gallery-content .left a:nth-child(2),
.gallery-content .left a:nth-child(3),
.gallery-content .left a:nth-child(4) {
  flex: 1 1 48%;
  width: 335px;
  height: 335px;
}
.gallery-content .left a:nth-child(5) {
  flex: 1 1 100%;
  width: 690px;
  height: 690px;
}
.gallery-content .right a:nth-child(2),
.gallery-content .right a:nth-child(3),
.gallery-content .right a:nth-child(4),
.gallery-content .right a:nth-child(5) {
  flex: 1 1 48.5%;
  width: 335px;
  height: 335px;
}
.gallery-content .right a:nth-child(1) {
  flex: 1 1 100%;
  width: 690px;
  height: 690px;
}
</style>
