import { defineStore } from "pinia";

export const useThemeModeStore = defineStore('themeMode',()=> {
    const mode = ref(true);

    const toggleTheme = () => {
        mode.value = !mode.value
    }

    return {
        mode,
        toggleTheme
    }
})