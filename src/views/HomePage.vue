<script setup>
import Header from "@/components/Header.vue";
import SectionOne from "@/components/Section/SectionOne.vue";
import Skils from "@/components/Section/Skils.vue";
import SectionSix from "@/components/Section/SectionSix.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div class="bg-[#030712] text-slate-100 min-h-screen relative selection:bg-cyan-500 selection:text-black">
    <!-- Top HUD Navigation -->
    <Header />

    <!-- Section 1: Biometric Profile & Hero -->
    <SectionOne />

    <!-- Section 2: Cybernetic Arsenal (Skills) -->
    <Skils />

    <!-- Section 3: Mission Dossiers (Projects) & Comms -->
    <SectionSix />

    <!-- Section 4: System Diagnostics Footer -->
    <Footer />
  </div>
</template>

<style scoped>
</style>
