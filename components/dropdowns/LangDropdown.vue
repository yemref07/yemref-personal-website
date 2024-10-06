<template>
  <div class="relative rounded-md text-black" @mouseenter="setVisible()" @mouseleave="setHidden()">
    <div class="bg-white p-1 rounded-sm">
      <img
        :src="`/images/flags/${currentLang.flag}.svg`"
        alt=""
        width="24"
        height="24"
        class="rounded-sm cursor-pointer"
      />
    </div>

    <div
      class="absolute top-full bg-white p-1 rounded-sm mt-1 duration-75 delay-75 transition-all"
      :class="{ 'lang-hidden': !dropdownVisibility }"
    >
    <ul v-for="item in availableLanguages" :key="item.code">
        <li class="" @click="setLocale(item.code)">
          <img
            :src="`/images/flags/${item.flag}.svg`"
            :alt="item.code"
            width="24"
            height="24"
            class="rounded-sm cursor-pointer"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const { locale, locales,setLocale } = useI18n();
const switchLocalPath = useSwitchLocalePath();

const availableLanguages = computed(() => {
  return locales.value.filter((i) => {
    return i.code !== locale.value;
  });
});

const currentLang = computed(() => {
  return locales.value.filter((i) => i.code === locale.value)[0];
});

const dropdownVisibility = ref(false);

const setVisible = () => {
  dropdownVisibility.value = true;
};

const setHidden = () => {
  dropdownVisibility.value = false;
};
</script>

<style lang="scss" scoped>
.lang-hidden {
  visibility: hidden;
  opacity: 0;
}
</style>
