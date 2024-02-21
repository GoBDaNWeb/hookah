<script setup>
import { watch } from "vue";
import { RouterView, onBeforeRouteLeave } from "vue-router";
import { Layout } from "@/widgets/layout";
import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";
import { useRoute } from "vue-router";
const router = useRoute();
watch(router, () => {
  window.scrollTo({
    top: 0,
    left: 0,
  });
});
</script>

<template>
  <Header />
  <RouterView />
  <Footer />
</template>

<style scoped></style>
