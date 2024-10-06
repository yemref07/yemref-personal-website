<template>
  <div :class="{ 'dark': mode }" class="dark:text-white dark:bg-black">
    <TheHeader />
    <slot />
    <TheFooter />
  </div>
</template>

<script setup>
import { useThemeModeStore } from "../store/themeMode";
const themeModeStore = useThemeModeStore();
const { mode } = storeToRefs(themeModeStore);

</script>

<style lang="scss" scoped></style>
