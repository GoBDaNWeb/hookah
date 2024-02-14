<script setup>
const props = defineProps(["title", "variable"]);
</script>

<template>
  <button :class="[variable]"><slot></slot></button>
</template>

<style scoped>
button {
  border-radius: 99px;
  height: 35px;
  padding: 0 20px;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -7%;
}
button.outline:hover {
  color: var(--hover-color);
  border-color: var(--hover-color);
}
button.outline {
  border: 1px solid var(--text-color);
  text-transform: uppercase;
  transition: var(--trs-300);
}
button.social {
  background: var(--white-color);
  border: 1px solid var(--text-color);
  border-radius: 9999px;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
}
button.primary:hover {
  background: var(--hover-color);
}
button.primary {
  height: 60px;
  padding: 0 48px;
  background: var(--text-color);
  color: var(--white-color);
  font-weight: 600;
  font-size: 18px;
  line-height: 18px;
  letter-spacing: -7%;
  text-transform: uppercase;
  transition: var(--trs-300);
}
</style>
