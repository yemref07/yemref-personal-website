<template>
    <div
      class="dark:bg-black dark:text-white py-3 text-slate-900 bg-gray-100 md:block hidden"
    >
      <Container>
          <div class="flex flex-row items-center justify-between">
  
              <div class="flex justify-start items-center gap-4 ">
                <a href="emailto:yunus.fersiz@gmail.com">
                  <Icon
                    name="ic:baseline-email"
                    color="white"
                    size="24px"
                    class="align-middle mr-1"
                  />
                  yunus.fersiz@gmail.com
                </a>
                <a href="tel:905344997652">
                  <Icon
                    name="ic:baseline-phone"
                    color="white"
                    size="24px"
                    class="align-middle mr-1"
                  />
                  +905344997652
                </a>
              </div>
        
              <div class="flex flex-row items-center justify-start gap-4 ">
  
                <a href="https://github.com/yemref07" target="_blank" rel="noreferrer">
                  <Icon
                    name="bi:github"
                    color="white"
                    size="24px"
                    class="align-middle"
                  />
                </a>
        
                <a href="linkedin.com/in/yunus-emre-fersiz-91499b178" target="_blank" rel="noreferrer">
                  <Icon
                    name="bi:linkedin"
                    color="white"
                    size="24px"
                    class="align-middle"
                  />
                </a>
  
                <a href="https://www.instagram.com/yunusfersiz" target="_blank" rel="noreferrer">
                  <Icon
                    name="bi:instagram"
                    color="white"
                    size="24px"
                    class="align-middle"
                  />
                </a>
  
              </div>

              <div class="flex flex-row items-center justify-start">
                    <ThemeSelector />
                    <LangDropdown class="ms-4" />
              </div>

          </div>
      </Container>
    </div>

  </template>
  
  <script setup lang="ts"></script>
  
  <style lang="scss" scoped>
  .flag-hidden{
      visibility: hidden;
      opacity: 0;
  }
  .flag-show{
      visibility: visible;
      opacity: 1;
  }
  </style>
  