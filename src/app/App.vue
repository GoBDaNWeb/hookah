<script setup>
import { Header } from "@/widgets/header";
import { Hero } from "@/widgets/hero";
import { About } from "@/widgets/about";
import { Features } from "@/widgets/features";
import { Cost } from "@/widgets/cost";
import { Stamps } from "@/widgets/stamps";
import { Delivery } from "@/widgets/delivery";
import { Gallery } from "@/widgets/gallery";
import { Faq } from "@/widgets/faq";
import { Contacts } from "@/widgets/contacts";
</script>

<template>
  <Header />

  <main>
    <Hero />
    <About />
    <Features />
    <Cost />
    <Stamps />
    <Delivery />
    <Gallery />
    <Faq />
    <Contacts />
  </main>
</template>

<style scoped></style>
