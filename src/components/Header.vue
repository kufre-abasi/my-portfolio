<script setup>
import { ref } from "vue";
import Modal from "@/components/Modal.vue";
import { getYearsOfExperience } from "@/utils/experience";

const yearsOfExp = getYearsOfExperience();

const showMobile = ref(false);
const showModal = ref(false);

const toggleMobileMenu = () => {
  showMobile.value = !showMobile.value;
};

const toggleModal = () => {
  showModal.value = !showModal.value;
};

const scrollToSection = (id) => {
  showMobile.value = false;
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<template>
  <header class="sticky top-0 z-40 w-full bg-[#F7F5F0]/85 backdrop-blur-md border-b border-[#E8E4DF] transition-colors duration-300">
    <!-- Top Editorial Ticker Bar -->
    <div class="hidden md:flex justify-between items-center px-6 lg:px-10 py-1.5 bg-[#FAF9F7] border-b border-[#E8E4DF] text-[11px] font-mono text-[#7A756D]">
      <div class="flex items-center gap-4">
        <span class="inline-flex items-center gap-1.5 text-[#15803D] font-medium">
          <span class="w-2 h-2 rounded-full bg-[#15803D] animate-pulse"></span>
          <span>AVAILABLE FOR FULL-TIME & CONTRACT</span>
        </span>
        <span class="text-[#D6D0C7]">/</span>
        <span>UK & GERMANY RELOCATION READY</span>
        <span class="text-[#D6D0C7]">/</span>
        <span>GLOBAL ASYNCHRONOUS REMOTE</span>
      </div>
      <div class="flex items-center gap-4">
        <span>{{ yearsOfExp }}+ YEARS EXPERIENCE</span>
        <span class="text-[#D6D0C7]">/</span>
        <span class="text-[#0D0D0D] font-medium">16+ SHIPPED PRODUCTS</span>
      </div>
    </div>

    <!-- Main Navigation Bar -->
    <div class="container mx-auto px-4 lg:px-8 py-3.5 flex items-center justify-between">
      <!-- Left: Logo & Title -->
      <a href="#profile" @click.prevent="scrollToSection('profile')" class="group flex items-center gap-3 cursor-pointer">
        <div class="w-9 h-9 rounded-full bg-[#0D0D0D] text-white flex items-center justify-center font-display text-base font-semibold group-hover:bg-[#556B2F] transition-colors shadow-sm">
          KB
        </div>
        <div class="flex flex-col">
          <span class="font-sans font-bold text-sm text-[#0D0D0D] tracking-tight group-hover:text-[#556B2F] transition-colors">
            Kufre-Abasi Bassey
          </span>
          <span class="text-[10px] font-mono text-[#7A756D] uppercase tracking-wider">
            Senior Frontend & Mobile Engineer
          </span>
        </div>
      </a>

      <!-- Center: Editorial Navigation Links -->
      <nav class="hidden md:flex items-center gap-8 text-xs font-medium tracking-normal text-[#4A4845]">
        <button
          @click="scrollToSection('profile')"
          class="hover:text-[#556B2F] transition-colors flex items-center gap-1.5 py-1"
        >
          <span class="text-[10px] font-mono text-[#7A756D]">01.</span>
          <span>About & Story</span>
        </button>
        <button
          @click="scrollToSection('skills')"
          class="hover:text-[#556B2F] transition-colors flex items-center gap-1.5 py-1"
        >
          <span class="text-[10px] font-mono text-[#7A756D]">02.</span>
          <span>Technical Toolkit</span>
        </button>
        <button
          @click="scrollToSection('projects')"
          class="hover:text-[#556B2F] transition-colors flex items-center gap-1.5 py-1"
        >
          <span class="text-[10px] font-mono text-[#7A756D]">03.</span>
          <span>Selected Work</span>
        </button>
        <button
          @click="toggleModal"
          class="hover:text-[#556B2F] transition-colors flex items-center gap-1.5 py-1"
        >
          <span class="text-[10px] font-mono text-[#7A756D]">04.</span>
          <span>Get in Touch</span>
        </button>
      </nav>

      <!-- Right: Action Buttons -->
      <div class="flex items-center gap-3">
        <!-- Resume Pill Button -->
        <a
          href="https://docs.google.com/document/d/1ZgPdnedCb9-ziI0U1D7t9by6VhxMmkMF4eXwTlEFrM8/edit#heading=h.y7d3xdxnr44m"
          target="_blank"
          role="button"
          class="scroll-btn-primary text-xs py-2 px-4 shadow-sm"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 opacity-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
          <span>View Resume</span>
        </a>

        <!-- Mobile Menu Toggle -->
        <button
          @click="toggleMobileMenu"
          aria-label="Toggle navigation menu"
          class="md:hidden p-2 text-[#0D0D0D] border border-[#E8E4DF] bg-white hover:border-[#556B2F] transition-all rounded-full shadow-sm"
        >
          <svg v-if="!showMobile" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Drawer -->
    <div
      v-if="showMobile"
      class="md:hidden bg-[#FAF9F7] border-b border-[#E8E4DF] px-6 py-6 flex flex-col gap-3 font-sans text-sm tracking-normal shadow-lg"
    >
      <button
        @click="scrollToSection('profile')"
        class="text-left text-[#0D0D0D] hover:text-[#556B2F] py-2.5 border-b border-[#E8E4DF] flex items-center justify-between font-medium"
      >
        <span>01. About & Story</span>
        <span class="text-xs text-[#7A756D]">→</span>
      </button>
      <button
        @click="scrollToSection('skills')"
        class="text-left text-[#0D0D0D] hover:text-[#556B2F] py-2.5 border-b border-[#E8E4DF] flex items-center justify-between font-medium"
      >
        <span>02. Technical Toolkit</span>
        <span class="text-xs text-[#7A756D]">→</span>
      </button>
      <button
        @click="scrollToSection('projects')"
        class="text-left text-[#0D0D0D] hover:text-[#556B2F] py-2.5 border-b border-[#E8E4DF] flex items-center justify-between font-medium"
      >
        <span>03. Selected Work</span>
        <span class="text-xs text-[#7A756D]">→</span>
      </button>
      <button
        @click="() => { showMobile = false; toggleModal(); }"
        class="text-left text-[#0D0D0D] hover:text-[#556B2F] py-2.5 border-b border-[#E8E4DF] flex items-center justify-between font-medium"
      >
        <span>04. Get in Touch</span>
        <span class="text-xs text-[#7A756D]">→</span>
      </button>

      <div class="pt-3 flex flex-col gap-2">
        <a
          href="https://docs.google.com/document/d/1ZgPdnedCb9-ziI0U1D7t9by6VhxMmkMF4eXwTlEFrM8/edit#heading=h.y7d3xdxnr44m"
          target="_blank"
          class="scroll-btn-primary w-full text-center"
        >
          View Full Resume
        </a>
      </div>
    </div>

    <!-- Contact Modal -->
    <Modal @closeModal="toggleModal" v-if="showModal" />
  </header>
</template>
