<template>
  <Icon
    v-if="mode"
    name="material-symbols:light-mode"
    size="30px"
    class="align-middle cursor-pointer text-red-500"
    @click="toggleTheme"
  />
  <Icon
    v-else
    name="material-symbols-light:dark-mode"
    size="30px"
    class="align-middle cursor-pointer text-red-500"
    @click="toggleTheme"
  />
</template>

<script setup>
import { useThemeModeStore } from "~/store/themeMode";
const themeStore = useThemeModeStore();
const { mode } = storeToRefs(themeStore);
const { toggleTheme } = themeStore;
</script>

<style lang="scss" scoped></style>
