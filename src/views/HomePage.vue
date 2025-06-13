<script setup>
import Header from "@/components/Header.vue";
import SectionOne from "@/components/Section/SectionOne.vue";
import SectionTwo from "@/components/Section/SectionTwo.vue";
import SectionThree from "@/components/Section/SectionThree.vue";
import SectionFour from "@/components/Section/SectionFour.vue";
import SectionFive from "@/components/Section/SectionFive.vue";
import SectionSix from "@/components/Section/SectionSix.vue";
import Footer from "@/components/Footer.vue";
import Skils from "@/components/Section/Skils.vue";
</script>
<template>
  <div class="bg-[#050b16]">
    <div class="fixed top-10 right-8 z-50">
      <a
        role="button"
        target="_blank"
        href="https://docs.google.com/document/d/1ZgPdnedCb9-ziI0U1D7t9by6VhxMmkMF4eXwTlEFrM8/edit#heading=h.y7d3xdxnr44m"
        class="btn-brand !bg-white !text-black !px-6 !py-2 rounded-full font-Satoshi700 animate-pulse hover:animate-none transition-all duration-300 hover:scale-105"
      >
        Resume
      </a>
    </div>
    <!-- <Header /> -->
    <SectionOne />
    <!-- <SectionTwo /> -->
    <!-- <SectionThree /> -->
    <!-- <SectionFour /> -->
    <!-- <SectionFive /> -->
    <Skils />
    <SectionSix />
    <Footer />
  </div>
</template>

<style scoped>
@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>
