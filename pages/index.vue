<template>
  <div class="dark:bg-black">
    <div :class="{ 'hero-section-dark': mode, 'hero-section-light': !mode }">
      <Container>
        <div class="grid md:grid-cols-2 justify-center items-center">
          <div class="col-span-1">
            <h2 class="text-orange text-2xl md:text-3xl font-semibold">
              {{ $t("entry") }}
            </h2>
            <h1
              class="dark:text-white text-black text-4xl md:text-5xl lg:text-6-xl xl:text-7xl font-semibold"
            >
              {{ $t("name") }}
            </h1>
            <p class="mt-5 text-xl dark:text-white text-black">
              <span class="text-emerald-500"> {{ $t("entryText1") }} </span>
              {{ $t("entryText2") }}
              <span class="text-violet-600">
                {{ $t("entryText3") }}
              </span>
            </p>
            <p class="mt-5 dark:text-white text-black text-base">
              {{ $t("personalInfo") }}
            </p>
            <div class="flex flex-row gap-3 mt-5">
              <a
                href="https://github.com/yemref07"
                target="_blank"
                title="Yunus Emre Fersiz Github"
              >
                <Icon
                  name="bi:github"
                  size="24px"
                  class="align-middle dark:text-white text-black"
              /></a>
              <a
                href="https://www.linkedin.com/in/yunus-emre-fersiz-91499b178/"
                target="_blank"
                title="Yunus Emre Fersiz Linkedin"
              >
                <Icon
                  name="bi:linkedin"
                  size="24px"
                  class="align-middle dark:text-white text-black"
              /></a>
              <a
                href="https://www.instagram.com/yunusfersiz"
                target="_blank"
                title="Yunus Emre Fersiz Instagram"
              >
                <Icon
                  name="bi:instagram"
                  size="24px"
                  class="align-middle dark:text-white text-black"
                />
              </a>
            </div>
          </div>
          <div class="col-span-1 relative">
            <NuxtPicture
              format="webp,png,jpg"
              src="/ai-images/developer.png"
              preload
              placeholder
              sizes="100vw sm:300px md:600px"
              :imgAttrs="{ class: 'mx-auto' }"
            />
            <img
              src="/assets/images/frameworks-logo/nuxt.svg"
              class="skill-icon-nuxt"
              alt="Nuxt JS"
              preload
            />
            <img
              src="/assets/images/frameworks-logo/vue.svg"
              class="skill-icon-vue"
              alt="Vue JS"
              preload
            />
            <img
              src="/assets/images/frameworks-logo/pinia.svg"
              class="skill-icon-pinia"
              alt="Pinia"
              preload
            />
            <img
              src="/assets/images/frameworks-logo/tailwind.svg"
              class="skill-icon-tailwind"
              alt="Tailwind CSS"
              preload
            />
          </div>
        </div>
      </Container>
    </div>

    <section class="section">
      <Container>
        <div
          class="grid lg:grid-cols-3 justify-center items-center gap-8 xl:gap-12"
        >
          <div class="col-span-1">
            <div class="flex flex-col justify-center items-center">
              <img
                src="../assets/images/icons/brush.svg"
                alt="Eager to Learn"
                loading="lazy"
                width="100"
                class="mx-auto mb-5"
              />
              <h3
                class="dark:text-white text-black text-center text-2xl mb-3 font-semibold"
              >
                {{ $t("eagerTitle") }}
              </h3>
              <p class="dark:text-white text-black text-center">
                {{ $t("eagerText") }}
              </p>
            </div>
          </div>
          <div class="col-span-1">
            <div class="flex flex-col justify-center items-center">
              <img
                src="../assets/images/icons/energy.svg"
                alt="Eager to Learn"
                loading="lazy"
                width="100"
                class="mx-auto mb-5"
              />
              <h3
                class="dark:text-white text-black text-center text-2xl mb-3 font-semibold"
              >
                {{ $t("communicationTitle") }}
              </h3>
              <p class="dark:text-white text-black text-center">
                {{ $t("communicationText") }}
              </p>
            </div>
          </div>
          <div class="col-span-1">
            <div class="flex flex-col justify-center items-center">
              <img
                src="../assets/images/icons/target.svg"
                alt="Eager to Learn"
                loading="lazy"
                width="100"
                class="mx-auto mb-5"
              />
              <h3
                class="dark:text-white text-black text-center text-2xl mb-3 font-semibold"
              >
                {{ $t("team") }}
              </h3>
              <p class="dark:text-white text-black text-center">
                {{ $t("teamText") }}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>

    <section class="section">
      <Container>
        <div class="grid grid-cols-2">
          <div class="col-span-1">
            <NuxtImg
              src="/ai-images/developer7.png"
              placeholder
              loading="lazy"
              sizes="100vw sm:300px md:500px"
            />
          </div>
          <div class="col-span-1">
            <h2 class="text-3xl dark:text-white text-black font-semibold">
              {{ $t("about") }}
            </h2>
            <p class="dark:text-white text-black text-base mt-4">
              {{ $t("aboutShort1") }}
            </p>
            <p class="dark:text-white text-black text-base mt-4">
              {{ $t("aboutShort2p1") }}
              <strong>{{ $t("aboutShortSkills") }}</strong>
              {{ $t("aboutShort2p2") }}
            </p>
          </div>
        </div>
      </Container>
    </section>

    <section class="section">
      <Container>
        <h2
          class="text-3xl dark:text-white text-black text-center font-semibold mb-12"
        >
          My Skills
        </h2>
        <div class="grid grid-cols-6 gap-8 lg:gap-12 xl:gap-16">
          <div class="col-span-1">
            <CircleProgressBar title="Java Script" score="S+" />
          </div>
          <div class="col-span-1">
            <CircleProgressBar title="Type Script" score="S+" />
          </div>
          <div class="col-span-1">
            <CircleProgressBar title="CSS" score="S+" />
          </div>
          <div class="col-span-1">
            <CircleProgressBar title="Tailwind" score="S+" />
          </div>

          <div class="col-span-1">
            <CircleProgressBar title="Vue JS" score="S+" />
          </div>

          <div class="col-span-1">
            <CircleProgressBar title="Nuxt JS" score="S+" />
          </div>

          <div class="col-span-1">
            <CircleProgressBar title="HTML" score="S+" />
          </div>

          <div class="col-span-1">
            <CircleProgressBar title="Pinia" score="S+" />
          </div>

          <div class="col-span-1">
            <CircleProgressBar title="SASS" score="B-" />
          </div>

          <div class="col-span-1">
            <CircleProgressBar title="Webpack" score="B-" />
          </div>

          <div class="col-span-1">
            <CircleProgressBar title="Github" score="A" />
          </div>

          <div class="col-span-1">
            <CircleProgressBar title="Vitest" score="B-" />
          </div>
        </div>
      </Container>
    </section>

    <section class="section dark:text-white">
      <h2 class="text-3xl dark:text-white text-black text-center font-semibold mb-12">Blog Post</h2>
      <Container>
        <swiper-container
          :free-mode="true"
          :slides-per-view="3"
          space-between="20"
          :centered-slides="true"
          :loop="true"
          :pagination="false"
        >
          <swiper-slide class="">
            <div class="flex flex-col shadow-md px-4 py-12">
              <img
                loading="lazy"
                src="../assets/images/ai-images/developer2.jpg"
                alt=""
                width="100%"
                height="auto"
                class="rounded-md"
              />
              <h3
                class="dark:text-white text-black text-2xl font-semibold mt-2 mb-4"
              >
                Lorem ipsum dolor sit.
              </h3>
              <p class="line-clamp-4 mb-4 dark:text-white text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
                reprehenderit! Perferendis consequuntur quos repellat, minus
                similique corrupti nam fuga voluptatem! Accusamus necessitatibus
                ex animi quia vero ipsum aperiam asperiores fugit eveniet
                voluptatum labore sapiente molestiae, iste amet eligendi
                voluptates sunt? Qui sunt aliquid, corporis non aperiam tenetur
                soluta. Vitae, eum?
              </p>
              <NuxtLink
                to=""
                class="py-2 px-8 bg-orange-500 text-white rounded-md cursor-pointer w-fit hover:bg-slate-800 delay-75 duration-75"
                >Read More</NuxtLink
              >
            </div>
          </swiper-slide>
          <swiper-slide>Slide 2</swiper-slide>
          <swiper-slide>Slide 3</swiper-slide>
        </swiper-container>
      </Container>
    </section>
  </div>
</template>

<script setup>
import { useThemeModeStore } from "~/store/themeMode";
import Container from "~/components/UI/Container.vue";
const themeStore = useThemeModeStore();
const { mode } = storeToRefs(themeStore);

// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();
</script>

<style lang="scss" scoped>
.hero-section-dark {
  padding: 20px;
  background: url(../assets/images/hero-section/background-images/dark.webp);
}

.hero-section-light {
  padding: 20px;
  background: url(../assets/images/hero-section/background-images/light.webp);
}

@keyframes slide-top-bottom {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-7px);
  }

  to {
    transform: translateY(7px);
  }
}

.skill-icon-animation {
  animation-direction: alternate;
  animation-duration: 3s;
  animation-fill-mode: none;
  animation-iteration-count: infinite;
  animation-name: slide-top-bottom;
  animation-timing-function: ease-in-out;
}

.skill-icon-vue {
  position: absolute;
  left: 5%;
  top: 16%;
  width: 75px;
  height: auto;
  @extend .skill-icon-animation;
}

.skill-icon-pinia {
  position: absolute;
  left: 10%;
  top: 75%;
  width: 60px;
  height: auto;
  @extend .skill-icon-animation;
}

.skill-icon-nuxt {
  position: absolute;
  right: 1%;
  bottom: 16%;
  width: 125px;
  height: auto;
  @extend .skill-icon-animation;
}

.skill-icon-tailwind {
  position: absolute;
  right: 10%;
  top: 16%;
  width: 75px;
  height: auto;
  @extend .skill-icon-animation;
}
</style>
