<template>
  <section class="container lg:py-[145px] md:h-auto h-[700px] lg:mb-16">
    <div class="grid lg:grid-cols-2 grid-cols-1 relative">
      <div class="relative">
        <img
          class="h-[100%] w-[100%] hidden lg:block"
          src="@/assets/img/man.webp"
          alt=""
        />
        <img
          class="hidden lg:block absolute w-[50%] left-[40%] top-[90%]"
          src="@/assets/img/Card.svg"
          alt=""
        />
      </div>
      <div class="lg:hidden block">
        <img class="rounded-t-[18px]" src="@/assets/img/man.webp" alt="" />
      </div>
      <div
        class="col-span-1 w-full bg-[#007582] lg:static absolute top-[70%] lg:rounded-r-[25px] lg:rounded-l-[0px] rounded-r-[18px] rounded-l-[18px] flex items-center lg:px-8 px-4 py-12 lg:p-14"
      >
        <div class="lg:w-auto">
          <h1
            class="font-Satoshi700 text-gray-100 text-[30px] lg:text-[40px] leading-[35px] lg:leading-[45.6px] mb-8"
          >
            Find the perfect match for your skills and interests
          </h1>
          <div class="text-gray-100 text-[18px] font-Satoshi400">
            Our mission is to showcase the creative talent of Africa to the world and
            provide a platform that helps creative professionals grow and succeed.
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style></style>
