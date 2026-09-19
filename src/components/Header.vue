<script setup>
import { ref } from "vue";
import Modal from "@/components/Modal.vue";

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
  <header class="sticky top-0 z-40 w-full bg-[#030712]/90 backdrop-blur-md border-b border-cyan-500/20 shadow-[0_4px_20px_rgba(0,0,0,0.6)]">
    <!-- Top HUD micro-ticker line -->
    <div class="hidden md:flex justify-between items-center px-6 py-1 bg-[#050b18] border-b border-cyan-500/10 text-[10px] font-mono text-cyan-400/70 tracking-widest">
      <div class="flex items-center gap-4">
        <span class="flex items-center gap-1.5">
          <span class="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
          <span class="text-emerald-400 font-bold">SYS.ONLINE</span>
        </span>
        <span class="text-slate-500">|</span>
        <span>PROTOCOL: V4.2_CYBORG</span>
        <span class="text-slate-500">|</span>
        <span>LOCATION: UYO, NIGERIA // GLOBAL</span>
      </div>
      <div class="flex items-center gap-4">
        <span>SECURITY: 256-BIT ENCRYPTED</span>
        <span class="text-slate-500">|</span>
        <span class="text-cyan-300">NEURAL_SYNC: 99.8%</span>
      </div>
    </div>

    <!-- Main Navigation Bar -->
    <div class="container mx-auto px-4 lg:px-8 py-3.5 flex items-center justify-between">
      <!-- Left: Cyber Brand / Callout -->
      <a href="#profile" @click.prevent="scrollToSection('profile')" class="group flex items-center gap-3 cursor-pointer">
        <div class="relative w-9 h-9 flex items-center justify-center bg-cyan-950/40 border border-cyan-500/40 cyber-chamfer-sm transition-all duration-300 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.4)]">
          <span class="text-cyan-400 font-mono font-bold text-xs tracking-tighter">&lt;KB/&gt;</span>
          <div class="absolute -top-0.5 -right-0.5 w-1 h-1 bg-cyan-400"></div>
          <div class="absolute -bottom-0.5 -left-0.5 w-1 h-1 bg-cyan-400"></div>
        </div>
        <div class="flex flex-col">
          <span class="font-mono text-white text-sm font-bold tracking-wider group-hover:text-cyan-400 transition-colors">
            KUFRE-ABASI BASSEY
          </span>
          <span class="text-[9px] font-mono text-cyan-400/70 tracking-widest">
            SR FRONTEND & REACT NATIVE ENGINEER
          </span>
        </div>
      </a>

      <!-- Center: Tactical Navigation Links -->
      <nav class="hidden md:flex items-center gap-8 font-mono text-xs tracking-wider">
        <button
          @click="scrollToSection('profile')"
          class="text-slate-300 hover:text-cyan-400 transition-colors flex items-center gap-1.5 group"
        >
          <span class="text-cyan-500 text-[10px] opacity-70 group-hover:opacity-100">// 01.</span>
          <span>PROFILE</span>
        </button>
        <button
          @click="scrollToSection('skills')"
          class="text-slate-300 hover:text-cyan-400 transition-colors flex items-center gap-1.5 group"
        >
          <span class="text-cyan-500 text-[10px] opacity-70 group-hover:opacity-100">// 02.</span>
          <span>ARSENAL</span>
        </button>
        <button
          @click="scrollToSection('projects')"
          class="text-slate-300 hover:text-cyan-400 transition-colors flex items-center gap-1.5 group"
        >
          <span class="text-cyan-500 text-[10px] opacity-70 group-hover:opacity-100">// 03.</span>
          <span>MISSIONS</span>
        </button>
        <button
          @click="toggleModal"
          class="text-slate-300 hover:text-cyan-400 transition-colors flex items-center gap-1.5 group"
        >
          <span class="text-cyan-500 text-[10px] opacity-70 group-hover:opacity-100">// 04.</span>
          <span>COMMS</span>
        </button>
      </nav>

      <!-- Right: Action Buttons -->
      <div class="flex items-center gap-3">
        <!-- Resume Button -->
        <a
          href="https://docs.google.com/document/d/1ZgPdnedCb9-ziI0U1D7t9by6VhxMmkMF4eXwTlEFrM8/edit#heading=h.y7d3xdxnr44m"
          target="_blank"
          role="button"
          class="cyber-btn-primary flex items-center gap-2 text-xs"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
          <span>RESUME // ACCESS</span>
        </a>

        <!-- Mobile Menu Toggle -->
        <button
          @click="toggleMobileMenu"
          aria-label="Toggle navigation menu"
          class="md:hidden p-2 text-cyan-400 border border-cyan-500/30 bg-cyan-950/20 hover:border-cyan-400 transition-all rounded"
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
      class="md:hidden bg-[#050b18]/95 border-b border-cyan-500/30 px-6 py-6 flex flex-col gap-4 font-mono text-sm tracking-widest backdrop-blur-xl"
    >
      <button
        @click="scrollToSection('profile')"
        class="text-left text-slate-200 hover:text-cyan-400 py-2 border-b border-cyan-500/10 flex items-center justify-between"
      >
        <span>// 01. PROFILE</span>
        <span class="text-xs text-cyan-400">→</span>
      </button>
      <button
        @click="scrollToSection('skills')"
        class="text-left text-slate-200 hover:text-cyan-400 py-2 border-b border-cyan-500/10 flex items-center justify-between"
      >
        <span>// 02. ARSENAL (SKILLS)</span>
        <span class="text-xs text-cyan-400">→</span>
      </button>
      <button
        @click="scrollToSection('projects')"
        class="text-left text-slate-200 hover:text-cyan-400 py-2 border-b border-cyan-500/10 flex items-center justify-between"
      >
        <span>// 03. MISSIONS (PROJECTS)</span>
        <span class="text-xs text-cyan-400">→</span>
      </button>
      <button
        @click="() => { showMobile = false; toggleModal(); }"
        class="text-left text-slate-200 hover:text-cyan-400 py-2 border-b border-cyan-500/10 flex items-center justify-between"
      >
        <span>// 04. COMMS (CONTACT)</span>
        <span class="text-xs text-cyan-400">→</span>
      </button>

      <div class="pt-2 flex flex-col gap-2">
        <a
          href="https://docs.google.com/document/d/1ZgPdnedCb9-ziI0U1D7t9by6VhxMmkMF4eXwTlEFrM8/edit#heading=h.y7d3xdxnr44m"
          target="_blank"
          class="cyber-btn-primary w-full text-center"
        >
          VIEW RESUME // ACCESS
        </a>
      </div>
    </div>

    <!-- Comms Modal -->
    <Modal @closeModal="toggleModal" v-if="showModal" />
  </header>
</template>
