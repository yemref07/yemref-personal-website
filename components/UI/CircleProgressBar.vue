<template>
  <div class="">

    <div class="relative mb-6">
        <svg
          width="100%"
          height="auto"
          viewBox="0 0 250 250"
          class="circular-progress"
          :style="`--progress: 100`"
        >
          <circle class="bg"></circle>
          <circle class="fg"></circle>
        </svg>
        <span
          class="dark:text-white text-black font-semibold text-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >{{ score }}</span
        >
    </div>

    <h3 class="dark:text-white text-black font-semibold text-2xl text-center">
      {{ title }}
    </h3>

  </div>
</template>

<script setup>
const props = defineProps({
    title:{
        type:String,
        require:true
    },
    score:{
        type:String,
        require:true
    }
})

</script>

<style lang="scss" scoped>
.circular-progress {
  --size: 250px;
  --half-size: calc(var(--size) / 2);
  --stroke-width: 20px;
  --radius: calc((var(--size) - var(--stroke-width)) / 2);
  --circumference: calc(var(--radius) * 2 * 3.14159265359);
  --dash: calc((var(--progress) / 100) * var(--circumference));
  animation: progress-animation 5s linear 0s 1 forwards;

  circle {
    cx: var(--half-size);
    cy: var(--half-size);
    r: var(--radius);
    stroke-width: var(--stroke-width);
    fill: none;
    stroke-linecap: round;

    & .bg {
      stroke: #ddd;
    }

    & .fg {
      transform: rotate(-90deg);
      transform-origin: var(--half-size) var(--half-size);
      stroke-dasharray: var(--dash) calc(var(--circumference) - var(--dash));
      transition: stroke-dasharray 0.3s linear 0s;
      stroke: $theme-orange;
    }
  }

  circle.fg {
    transform: rotate(-90deg);
    transform-origin: var(--half-size) var(--half-size);
    stroke-dasharray: var(--dash) calc(var(--circumference) - var(--dash));
    transition: stroke-dasharray 0.3s linear 0s;
    stroke: $theme-orange;
  }
}

@property --progress {
  syntax: "<number>";
  inherits: false;
  initial-value: 0;
}

@keyframes progress-animation {
  from {
    --progress: 0;
  }
  to {
    --progress: 100;
  }
}
</style>
