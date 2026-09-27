<script setup>
const getYear = new Date().getFullYear();

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>

<template>
  <footer id="dispatch" class="relative bg-[#F7F5F0] text-[#0D0D0D] border-t border-[#E8E4DF] pt-16 pb-12 overflow-hidden">
    <!-- Subtle Background Texture -->
    <div class="absolute inset-0 scroll-dots-bg opacity-30 pointer-events-none"></div>

    <div class="container mx-auto px-4 lg:px-8 relative z-10">
      <!-- Main Footer Grid -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#E8E4DF]">
        <!-- Identity & Manifesto -->
        <div class="md:col-span-7 flex flex-col items-start">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-8 h-8 rounded-full bg-[#0D0D0D] text-white flex items-center justify-center font-display text-sm font-semibold shadow-xs">
              KB
            </div>
            <div class="font-sans text-sm font-bold text-[#0D0D0D] tracking-tight">
              Kufre-Abasi Bassey
            </div>
          </div>

          <p class="text-[#4A4845] text-xs sm:text-sm font-sans leading-relaxed max-w-xl mb-6">
            Engineering resilient, human-centric digital products, multi-currency fintech systems, and cross-platform mobile apps with architectural rigor and design craft.
          </p>

          <!-- Status & Contact Badge -->
          <div class="inline-flex flex-wrap items-center gap-3 px-3.5 py-2 bg-white border border-[#E8E4DF] rounded-2xl font-mono text-[11px] text-[#4A4845] shadow-xs">
            <span class="flex items-center gap-1.5 text-[#15803D] font-medium">
              <span class="w-1.5 h-1.5 rounded-full bg-[#15803D] animate-ping"></span>
              <span>Available for Hire</span>
            </span>
            <span class="text-[#E8E4DF]">|</span>
            <span>UK / Germany Relocation Ready</span>
            <span class="text-[#E8E4DF]">|</span>
            <a href="mailto:kufreabasibassey3@gmail.com" class="text-[#556B2F] hover:underline font-medium">kufreabasibassey3@gmail.com</a>
          </div>
        </div>

        <!-- Quick Editorial Links -->
        <div class="md:col-span-5 flex flex-col md:items-end justify-between">
          <div class="flex flex-wrap gap-5 font-sans text-xs text-[#4A4845] mb-6 font-medium">
            <a href="#profile" class="hover:text-[#556B2F] transition-colors">01. About</a>
            <a href="#skills" class="hover:text-[#556B2F] transition-colors">02. Toolkit</a>
            <a href="#projects" class="hover:text-[#556B2F] transition-colors">03. Selected Work</a>
            <a
              href="https://docs.google.com/document/d/1ZgPdnedCb9-ziI0U1D7t9by6VhxMmkMF4eXwTlEFrM8/edit#heading=h.y7d3xdxnr44m"
              target="_blank"
              class="text-[#556B2F] hover:underline transition-colors flex items-center gap-1"
            >
              <span>Resume</span>
              <span>↗</span>
            </a>
          </div>

          <!-- Return to Top Button -->
          <button
            @click="scrollToTop"
            class="scroll-btn-secondary text-xs py-2 px-4 self-start md:self-end flex items-center gap-2"
          >
            <span>Back to Top</span>
            <span>↑</span>
          </button>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs text-[#7A756D]">
        <div class="flex items-center gap-2">
          <span>© {{ getYear }} Kufre-Abasi Bassey. All rights reserved.</span>
        </div>

        <div class="flex items-center gap-4 text-[#4A4845]">
          <a
            href="https://github.com/kufre-abasi"
            target="_blank"
            class="hover:text-[#556B2F] transition-colors"
          >
            GitHub
          </a>
          <span>•</span>
          <a
            href="https://www.linkedin.com/in/kufre-abasi-bassey-692b38212/"
            target="_blank"
            class="hover:text-[#556B2F] transition-colors"
          >
            LinkedIn
          </a>
          <span>•</span>
          <a
            href="https://twitter.com/kufreabasiBass1"
            target="_blank"
            class="hover:text-[#556B2F] transition-colors"
          >
            X (Twitter)
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
