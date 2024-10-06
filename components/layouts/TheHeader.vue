<template>
  <TheTopHeader />

  <Container>
        <div class="flex flex-row py-3 justify-between items-center" >
          <div class="">
            <NuxtLink :to="localePath('/')" title="Home Page">
              <NuxtPicture
                format="webp,png,jpg"
                src="/ai-images/logo.png"
                preload
                placeholder
                sizes="100vw sm:300px md:100px"
                :imgAttrs="{ class: 'mx-auto rounded-md' }"
              />
            </NuxtLink>
            <nuxt-link :to="localePath('/')" class="text-xl mt-2 block" title="Home Page">Yunus Emre Fersiz</nuxt-link>
          </div>

          <div class="flex flex-row gap-8">

            <NuxtLink :to="localePath('/')" class="text-2xl  font-pocket" title="Anasayfa" >
                HOME
            </NuxtLink>

            <NuxtLink :to="localePath('/blog')" class="text-2xl  font-pocket" title="Blog" >
               BLOG
            </NuxtLink>

            <NuxtLink :to="localePath('/hakkimda')" class="text-2xl  font-pocket" title="Hakkimda" >
                ABOUT ME
            </NuxtLink>

            <NuxtLink :to="localePath('/calismalarim')" class="text-2xl  font-pocket" title="Çalışmalarım" >
                MY WORKS
            </NuxtLink>

            <NuxtLink :to="localePath('/iletisim')" class="text-2xl  font-pocket" title="İletişim" >
                CONTACT
            </NuxtLink>

          </div>

        </div>
    </Container>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
</script>

<style lang="scss" scoped>
.flag-hidden {
  visibility: hidden;
  opacity: 0;
}
.flag-show {
  visibility: visible;
  opacity: 1;
}

@font-face {
  // Defining what the font will be called
  font-family: pocket-monk;
  src: url(../../public/fonts/PocketMonk.ttf);
}

.font-pocket{
  font-family: pocket-monk;
}
</style>
