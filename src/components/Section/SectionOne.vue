<template>
  <section
    id="profile"
    class="relative min-h-screen py-16 md:py-24 overflow-hidden bg-[#F7F5F0] text-[#0D0D0D] flex flex-col justify-center"
  >
    <!-- Background Editorial Atmosphere -->
    <div class="absolute inset-0 scroll-grid-bg opacity-40 pointer-events-none"></div>
    <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#556B2F]/[0.035] rounded-full blur-[140px] pointer-events-none"></div>
    <div class="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#15803D]/[0.03] rounded-full blur-[120px] pointer-events-none"></div>

    <div class="container mx-auto px-4 lg:px-8 relative z-10">
      <!-- Chapter Milestone Tag -->
      <div class="flex items-center justify-center gap-3 mb-8">
        <div class="h-[1px] w-12 md:w-20 bg-[#E8E4DF]"></div>
        <div class="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-[#E8E4DF] rounded-full text-xs font-mono text-[#7A756D] uppercase tracking-wider shadow-sm">
          <span class="w-2 h-2 rounded-full bg-[#556B2F] animate-pulse"></span>
          <span>Chapter 01 ── Profile & Philosophy</span>
        </div>
        <div class="h-[1px] w-12 md:w-20 bg-[#E8E4DF]"></div>
      </div>

      <!-- Main Profile Hero Layout -->
      <div class="flex flex-col items-center text-center max-w-4xl mx-auto">
        <!-- Editorial Portrait Container -->
        <div class="relative mb-10 flex items-center justify-center">
          <!-- Soft Ambient Halo -->
          <div class="absolute -inset-4 bg-gradient-to-tr from-[#556B2F]/10 via-[#FAF9F7] to-[#15803D]/10 rounded-full blur-xl pointer-events-none"></div>

          <!-- Circular Portrait Frame -->
          <div class="relative w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-white bg-white shadow-[0_12px_36px_-6px_rgba(13,13,13,0.12)] group">
            <img
              class="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              src="@/assets/kufre-pfp.jpeg"
              alt="Kufre-abasi Bassey"
            />
          </div>

          <!-- Floating Floating Capability Pills -->
          <div class="hidden sm:flex absolute -left-16 md:-left-24 top-1/4 flex-col items-end gap-0.5 bg-white/95 px-3 py-1.5 rounded-2xl border border-[#E8E4DF] shadow-md backdrop-blur-sm text-right">
            <span class="text-[9px] font-mono text-[#7A756D] uppercase tracking-wider">SPECIALTY</span>
            <span class="text-xs font-sans font-bold text-[#0D0D0D]">Frontend & Mobile</span>
          </div>

          <div class="hidden sm:flex absolute -right-16 md:-right-24 bottom-1/4 flex-col items-start gap-0.5 bg-white/95 px-3 py-1.5 rounded-2xl border border-[#E8E4DF] shadow-md backdrop-blur-sm text-left">
            <span class="text-[9px] font-mono text-[#7A756D] uppercase tracking-wider">DELIVERY</span>
            <span class="text-xs font-sans font-bold text-[#15803D] flex items-center gap-1">
              <span class="w-1.5 h-1.5 rounded-full bg-[#15803D]"></span>
              16+ Production Apps
            </span>
          </div>
        </div>

        <!-- Headline with Editorial Serif Display Font -->
        <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display text-[#0D0D0D] tracking-tight mb-5 leading-[1.05]">
          Hi, I’m <span class="italic text-[#556B2F]">Kufre-Abasi Bassey</span>
        </h1>

        <!-- Subtitle & Role Badges -->
        <div class="inline-flex flex-wrap items-center justify-center gap-2 mb-8">
          <span class="scroll-badge bg-white text-[#0D0D0D] border border-[#E8E4DF] shadow-xs">
            Senior Frontend Engineer
          </span>
          <span class="scroll-badge bg-white text-[#0D0D0D] border border-[#E8E4DF] shadow-xs">
            React Native Specialist
          </span>
          <span class="scroll-badge bg-[#EEF3E8] text-[#556B2F] border border-[#556B2F]/20 shadow-xs">
            UK & Germany Relocation Ready
          </span>
        </div>

        <!-- Editorial Story Card (Dossier & Bio) -->
        <div class="relative w-full text-left bg-white border border-[#E8E4DF] rounded-3xl p-6 sm:p-8 md:p-10 shadow-[0_4px_25px_-4px_rgba(13,13,13,0.05)] mb-10">
          <!-- Card Header Bar -->
          <div class="flex items-center justify-between pb-4 mb-6 border-b border-[#E8E4DF] text-xs font-mono text-[#7A756D]">
            <div class="flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-[#556B2F]"></span>
              <span class="font-bold uppercase tracking-wider text-[#0D0D0D]">BIOGRAPHY & ENGINEERING PHILOSOPHY</span>
            </div>
            <div class="hidden sm:flex items-center gap-3 text-[#7A756D]">
              <span class="text-[#15803D] font-bold">● OPEN TO WORK</span>
              <span>•</span>
              <span>{{ formattedYearsOfExp }}+ YEARS EXP</span>
            </div>
          </div>

          <!-- Dossier Body Text -->
          <div class="space-y-4 text-[#4A4845] font-sans text-sm md:text-base leading-relaxed">
            <p>
              I’m a <strong class="text-[#0D0D0D] font-semibold">Senior Frontend & React Native Engineer</strong> with {{ yearsOfExp }}+ years of hands-on software development experience building production web and mobile products across 
              <span class="font-mono text-xs px-2 py-0.5 bg-[#FAF9F7] border border-[#E8E4DF] rounded-md text-[#0D0D0D]">Fintech</span>, 
              <span class="font-mono text-xs px-2 py-0.5 bg-[#FAF9F7] border border-[#E8E4DF] rounded-md text-[#0D0D0D]">SaaS</span>, 
              <span class="font-mono text-xs px-2 py-0.5 bg-[#FAF9F7] border border-[#E8E4DF] rounded-md text-[#0D0D0D]">Healthcare</span>, 
              <span class="font-mono text-xs px-2 py-0.5 bg-[#FAF9F7] border border-[#E8E4DF] rounded-md text-[#0D0D0D]">Mobility</span>, 
              <span class="font-mono text-xs px-2 py-0.5 bg-[#FAF9F7] border border-[#E8E4DF] rounded-md text-[#0D0D0D]">Social Commerce</span>, and 
              <span class="font-mono text-xs px-2 py-0.5 bg-[#FAF9F7] border border-[#E8E4DF] rounded-md text-[#0D0D0D]">Web3</span>.
            </p>
            <p>
              Strong in <strong class="text-[#0D0D0D] font-semibold">TypeScript, React, Next.js, React Native</strong>, and <strong class="text-[#0D0D0D] font-semibold">Vue / Nuxt</strong>, with ownership across frontend architecture, real-time streaming interfaces (WebSockets/SSE), resilient state management (Redux, Zustand, Pinia), mission-critical API integrations, and accessible, performance-tuned design systems.
            </p>
            <p>
              Experienced in technical leadership, product discovery, and translating offline business operations into scalable digital systems. Experienced working asynchronously with distributed international teams across the US, UK, Netherlands, Zambia, South Africa, and Nigeria to take products from requirements through implementation and release.
            </p>
            <p class="text-[#7A756D] text-xs md:text-sm font-mono pt-3 border-t border-[#E8E4DF] flex items-center gap-2">
              <span class="text-[#556B2F] font-bold">→</span>
              <span>B.Sc. Geo-Informatics & Surveying; exploring Bitcoin Core RPC/regtest, Rust, NestJS, and spatial navigation architectures.</span>
            </p>
          </div>

          <!-- Three Core Engineering Principles -->
          <div class="mt-8 pt-6 border-t border-[#E8E4DF] grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="p-4 bg-[#FAF9F7] border border-[#E8E4DF] rounded-2xl">
              <div class="text-[10px] font-mono text-[#556B2F] uppercase tracking-wider mb-1.5 flex items-center gap-1.5 font-semibold">
                <span class="w-1.5 h-1.5 rounded-full bg-[#556B2F]"></span>
                <span>Principle 01 // Precision</span>
              </div>
              <div class="text-[#0D0D0D] font-sans font-bold text-sm mb-1">Zero-Assumption State</div>
              <p class="text-[#4A4845] text-xs leading-relaxed">
                Defensive TypeScript types, strict data boundaries, and predictable unidirectional state machines that eliminate runtime surprises.
              </p>
            </div>

            <div class="p-4 bg-[#FAF9F7] border border-[#E8E4DF] rounded-2xl">
              <div class="text-[10px] font-mono text-[#15803D] uppercase tracking-wider mb-1.5 flex items-center gap-1.5 font-semibold">
                <span class="w-1.5 h-1.5 rounded-full bg-[#15803D]"></span>
                <span>Principle 02 // Velocity</span>
              </div>
              <div class="text-[#0D0D0D] font-sans font-bold text-sm mb-1">Sub-Second Real-Time</div>
              <p class="text-[#4A4845] text-xs leading-relaxed">
                WebSockets, SSE streams, optimistic updates, and background reconciliation designed for responsive, lag-free user experiences.
              </p>
            </div>

            <div class="p-4 bg-[#FAF9F7] border border-[#E8E4DF] rounded-2xl">
              <div class="text-[10px] font-mono text-[#B45309] uppercase tracking-wider mb-1.5 flex items-center gap-1.5 font-semibold">
                <span class="w-1.5 h-1.5 rounded-full bg-[#B45309]"></span>
                <span>Principle 03 // Scale</span>
              </div>
              <div class="text-[#0D0D0D] font-sans font-bold text-sm mb-1">Global Discovery</div>
              <p class="text-[#4A4845] text-xs leading-relaxed">
                Translating physical offline logistics into production software across distributed teams in the US, UK, EU & Africa.
              </p>
            </div>
          </div>
        </div>

        <!-- Telemetry Stats Matrix (Scroll.io Style) -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 w-full mb-10">
          <div class="p-4 bg-white border border-[#E8E4DF] rounded-2xl text-left shadow-xs">
            <div class="text-[11px] font-mono text-[#7A756D] uppercase tracking-wider">Experience</div>
            <div class="text-2xl sm:text-3xl font-bold font-display text-[#0D0D0D]">{{ formattedYearsOfExp }}+ <span class="text-xs font-mono font-normal text-[#7A756D]">YRS</span></div>
            <div class="text-[11px] text-[#4A4845] mt-0.5">Mobile & Web Engineering</div>
          </div>
          <div class="p-4 bg-white border border-[#E8E4DF] rounded-2xl text-left shadow-xs">
            <div class="text-[11px] font-mono text-[#7A756D] uppercase tracking-wider">Shipped Apps</div>
            <div class="text-2xl sm:text-3xl font-bold font-display text-[#15803D]">16+ <span class="text-xs font-mono font-normal text-[#7A756D]">APPS</span></div>
            <div class="text-[11px] text-[#4A4845] mt-0.5">Fintech, SaaS & Mobile</div>
          </div>
          <div class="p-4 bg-white border border-[#E8E4DF] rounded-2xl text-left shadow-xs">
            <div class="text-[11px] font-mono text-[#7A756D] uppercase tracking-wider">Reliability</div>
            <div class="text-2xl sm:text-3xl font-bold font-display text-[#556B2F]">99.9%</div>
            <div class="text-[11px] text-[#4A4845] mt-0.5">Production Standards</div>
          </div>
          <div class="p-4 bg-white border border-[#E8E4DF] rounded-2xl text-left shadow-xs">
            <div class="text-[11px] font-mono text-[#7A756D] uppercase tracking-wider">Availability</div>
            <div class="text-2xl sm:text-3xl font-bold font-display text-[#15803D]">OPEN</div>
            <div class="text-[11px] text-[#4A4845] mt-0.5">Senior / Lead Roles</div>
          </div>
        </div>

        <!-- Action CTAs -->
        <div class="flex flex-wrap items-center justify-center gap-4 mb-10">
          <button
            @click="toogleScreenModal"
            class="scroll-btn-primary py-3 px-6 text-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"></path>
            </svg>
            <span>Start a Conversation</span>
          </button>

          <a
            href="#skills"
            class="scroll-btn-secondary py-3 px-6 text-sm"
          >
            <span>Explore Technical Toolkit</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-[#7A756D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
            </svg>
          </a>
        </div>

        <!-- Social Channels -->
        <div class="flex flex-col items-center gap-3">
          <span class="text-[11px] font-mono text-[#7A756D] uppercase tracking-wider">Connect Across Platforms</span>
          <div class="flex flex-wrap items-center justify-center gap-2.5">
            <!-- LinkedIn -->
            <a
              href="https://www.linkedin.com/in/kufre-abasi-bassey-692b38212/"
              target="_blank"
              rel="noopener noreferrer"
              class="px-3.5 py-1.5 bg-white border border-[#E8E4DF] hover:border-[#556B2F] text-[#4A4845] hover:text-[#556B2F] font-sans text-xs font-medium rounded-full flex items-center gap-2 transition-all duration-300 shadow-xs hover:-translate-y-0.5"
            >
              <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45c-.96 0-1.74.77-1.74 1.74a1.74 1.74 0 0 0 1.74 1.74c.96 0 1.74-.78 1.74-1.74 0-.97-.78-1.74-1.74-1.74Z"/>
              </svg>
              <span>LinkedIn</span>
            </a>

            <!-- GitHub -->
            <a
              href="https://github.com/kufre-abasi"
              target="_blank"
              rel="noopener noreferrer"
              class="px-3.5 py-1.5 bg-white border border-[#E8E4DF] hover:border-[#556B2F] text-[#4A4845] hover:text-[#556B2F] font-sans text-xs font-medium rounded-full flex items-center gap-2 transition-all duration-300 shadow-xs hover:-translate-y-0.5"
            >
              <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
              <span>GitHub</span>
            </a>

            <!-- X / Twitter -->
            <a
              href="https://twitter.com/kufreabasiBass1"
              target="_blank"
              rel="noopener noreferrer"
              class="px-3.5 py-1.5 bg-white border border-[#E8E4DF] hover:border-[#556B2F] text-[#4A4845] hover:text-[#556B2F] font-sans text-xs font-medium rounded-full flex items-center gap-2 transition-all duration-300 shadow-xs hover:-translate-y-0.5"
            >
              <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              <span>X (Twitter)</span>
            </a>

            <!-- WhatsApp -->
            <a
              href="https://wa.link/x477i5"
              target="_blank"
              rel="noopener noreferrer"
              class="px-3.5 py-1.5 bg-white border border-[#E8E4DF] hover:border-[#15803D] text-[#4A4845] hover:text-[#15803D] font-sans text-xs font-medium rounded-full flex items-center gap-2 transition-all duration-300 shadow-xs hover:-translate-y-0.5"
            >
              <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.72 4.31 3.81.6.26 1.07.41 1.44.53.61.19 1.16.16 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29Z"/>
              </svg>
              <span>WhatsApp</span>
            </a>

            <!-- Instagram -->
            <a
              href="https://www.instagram.com/basseykufreabasi/"
              target="_blank"
              rel="noopener noreferrer"
              class="px-3.5 py-1.5 bg-white border border-[#E8E4DF] hover:border-[#556B2F] text-[#4A4845] hover:text-[#556B2F] font-sans text-xs font-medium rounded-full flex items-center gap-2 transition-all duration-300 shadow-xs hover:-translate-y-0.5"
            >
              <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Contact Modal -->
    <Modal @closeModal="toogleScreenModal" v-if="showcreenModal" />
  </section>
</template>

<script setup>
import { ref } from "vue";
import Modal from "@/components/Modal.vue";
import { getYearsOfExperience, getFormattedYearsOfExperience } from "@/utils/experience";

const showcreenModal = ref(false);

const toogleScreenModal = () => {
  showcreenModal.value = !showcreenModal.value;
};

const yearsOfExp = getYearsOfExperience();
const formattedYearsOfExp = getFormattedYearsOfExperience();
</script>
