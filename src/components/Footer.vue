<script setup>
const getYear = new Date().getFullYear();

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>

<template>
  <footer class="relative bg-[#02050c] text-white border-t border-cyan-500/20 pt-16 pb-12 overflow-hidden">
    <!-- Subtle Background Ambient Grid -->
    <div class="absolute inset-0 cyber-grid-bg opacity-15 pointer-events-none"></div>

    <div class="container mx-auto px-4 lg:px-8 relative z-10">
      <!-- Main Footer Grid -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-cyan-500/15">
        <!-- Identity & Manifesto -->
        <div class="md:col-span-7 flex flex-col items-start">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-8 h-8 flex items-center justify-center bg-cyan-950/40 border border-cyan-500/40 cyber-chamfer-sm text-cyan-400 font-mono text-xs font-bold">
              &lt;KB/&gt;
            </div>
            <div class="font-mono text-sm font-bold text-white tracking-widest uppercase">
              KUFRE-ABASI BASSEY
            </div>
          </div>

          <p class="text-slate-400 text-xs sm:text-sm font-Satoshi400 leading-relaxed max-w-xl mb-6">
            Engineering high-assurance digital products, fintech systems, and scalable mobile platforms where human-centric design converges with cybernetic precision.
          </p>

          <!-- System Diagnostics Badge -->
          <div class="inline-flex flex-wrap items-center gap-3 px-3 py-1.5 bg-[#050d1a] border border-cyan-500/20 font-mono text-[10px] text-cyan-400/80 cyber-chamfer-sm">
            <span class="flex items-center gap-1.5 text-emerald-400">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
              <span>CORE_ONLINE</span>
            </span>
            <span class="text-slate-600">|</span>
            <span>UYO, NIGERIA // REMOTE</span>
            <span class="text-slate-600">|</span>
            <a href="mailto:kufreabasibassey3@gmail.com" class="text-cyan-300 hover:underline">kufreabasibassey3@gmail.com</a>
          </div>
        </div>

        <!-- Quick Telemetry Links -->
        <div class="md:col-span-5 flex flex-col md:items-end justify-between">
          <div class="flex flex-wrap gap-6 font-mono text-xs text-slate-300 mb-6">
            <a href="#profile" class="hover:text-cyan-400 transition-colors">// PROFILE</a>
            <a href="#skills" class="hover:text-cyan-400 transition-colors">// ARSENAL</a>
            <a href="#projects" class="hover:text-cyan-400 transition-colors">// MISSIONS</a>
            <a
              href="https://docs.google.com/document/d/1ZgPdnedCb9-ziI0U1D7t9by6VhxMmkMF4eXwTlEFrM8/edit#heading=h.y7d3xdxnr44m"
              target="_blank"
              class="text-cyan-400 hover:text-white transition-colors"
            >
              // RESUME ↗
            </a>
          </div>

          <!-- Return to Top Button -->
          <button
            @click="scrollToTop"
            class="cyber-btn-outline text-[11px] py-1.5 px-4 flex items-center gap-2 self-start md:self-end"
          >
            <span>RETURN TO ORBIT</span>
            <span>▲</span>
          </button>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-500">
        <div class="flex items-center gap-2">
          <span>© {{ getYear }} KUFRE-ABASI BASSEY.</span>
          <span class="text-cyan-500/60 font-bold">[ ALL SYSTEMS OPERATIONAL ]</span>
        </div>

        <div class="flex items-center gap-4 text-slate-400">
          <a
            href="https://github.com/kufre-abasi"
            target="_blank"
            class="hover:text-cyan-400 transition-colors"
          >
            GITHUB
          </a>
          <span>•</span>
          <a
            href="https://www.linkedin.com/in/kufre-abasi-bassey-692b38212/"
            target="_blank"
            class="hover:text-cyan-400 transition-colors"
          >
            LINKEDIN
          </a>
          <span>•</span>
          <a
            href="https://twitter.com/kufreabasiBass1"
            target="_blank"
            class="hover:text-cyan-400 transition-colors"
          >
            X // TWITTER
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
