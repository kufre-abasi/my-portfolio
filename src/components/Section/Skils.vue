<template>
  <section id="skills" class="py-24 relative overflow-hidden bg-[#030712] border-t border-cyan-500/15">
    <!-- Cyber Background Accents -->
    <div class="absolute inset-0 cyber-grid-bg opacity-25 pointer-events-none"></div>
    <div class="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

    <div class="container mx-auto px-4 lg:px-8 relative z-10">
      <!-- Section Header with HUD Elements -->
      <div class="flex flex-col items-center text-center mb-14">
        <div class="inline-flex items-center gap-2 px-3 py-1 bg-cyan-950/40 border border-cyan-500/30 rounded-none cyber-chamfer-sm text-[11px] font-mono text-cyan-300 tracking-widest uppercase mb-4">
          <span class="w-1.5 h-1.5 bg-cyan-400 animate-ping"></span>
          <span>// TECHNICAL MATRIX // VERIFIED CAPABILITIES</span>
        </div>

        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-white tracking-tight mb-4 font-Satoshi900">
          TECHNICAL <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-300 glow-cyan">ARSENAL</span>
        </h2>

        <p class="text-slate-400 max-w-2xl text-sm md:text-base font-Satoshi400 leading-relaxed mb-8">
          Extensive hands-on proficiency across modern frontend systems, React Native mobile engineering, real-time data protocols (WebSockets/SSE), resilient state architectures, and Web3 technologies.
        </p>

        <!-- Category Filter Tabs -->
        <div class="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-[#060c18] border border-cyan-500/20 cyber-chamfer-sm font-mono text-xs max-w-3xl">
          <button
            v-for="category in categories"
            :key="category.id"
            @click="activeCategory = category.id"
            :class="[
              'px-3.5 py-2 transition-all duration-300 flex items-center gap-1.5 cyber-chamfer-sm',
              activeCategory === category.id
                ? 'bg-cyan-500 text-black font-bold shadow-[0_0_12px_rgba(0,240,255,0.4)]'
                : 'text-slate-400 hover:text-cyan-300 hover:bg-cyan-950/30'
            ]"
          >
            <span class="text-[9px] opacity-70">{{ category.code }}</span>
            <span>{{ category.label }}</span>
          </button>
        </div>
      </div>

      <!-- Skills Matrix Grid -->
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <div
          v-for="(skill, index) in filteredSkills"
          :key="skill.name"
          class="group relative bg-[#070e1d]/90 border border-cyan-500/20 hover:border-cyan-400 p-4 flex flex-col items-center justify-between text-center transition-all duration-300 cyber-chamfer-sm hover:shadow-[0_0_20px_rgba(0,240,255,0.25)] hover:-translate-y-1"
        >
          <!-- Corner Tech Accent on Hover -->
          <div class="absolute top-1 right-1 w-2 h-2 border-t-2 border-r-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div class="absolute bottom-1 left-1 w-2 h-2 border-b-2 border-l-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>

          <!-- Top Index / Module Tag -->
          <div class="w-full flex items-center justify-between text-[9px] font-mono text-cyan-500/60 mb-3">
            <span>#{{ String(index + 1).padStart(2, '0') }}</span>
            <span class="text-[8px] uppercase tracking-wider text-slate-500 group-hover:text-cyan-400 transition-colors">{{ skill.badge }}</span>
          </div>

          <!-- Tech Icon Container -->
          <div class="w-14 h-14 mb-3 flex items-center justify-center p-2 rounded bg-[#0b162a] border border-cyan-500/10 group-hover:border-cyan-500/40 group-hover:bg-[#0f1f3a] transition-all duration-300">
            <div v-html="skill.iconSvg" class="w-full h-full flex items-center justify-center fill-current transition-transform duration-300 group-hover:scale-110"></div>
          </div>

          <!-- Tech Name -->
          <div class="font-mono text-xs md:text-sm font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
            {{ skill.name }}
          </div>

          <!-- Subtext / Usage -->
          <div class="text-[9px] font-mono text-slate-400 mb-2 truncate w-full">
            {{ skill.sub }}
          </div>

          <!-- Level / Proficiency Readout -->
          <div class="w-full pt-2 mt-auto border-t border-cyan-500/10 flex flex-col gap-1">
            <div class="flex items-center justify-between text-[9px] font-mono text-slate-400">
              <span>MASTERY</span>
              <span class="text-cyan-400 font-bold">{{ skill.level }}%</span>
            </div>
            <!-- Progress Bar -->
            <div class="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
              <div
                class="h-full bg-gradient-to-r from-cyan-500 to-emerald-400 transition-all duration-700"
                :style="{ width: `${skill.level}%` }"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Core Architecture Pillars from Resume -->
      <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
        <div class="p-6 bg-[#070e1c] border border-cyan-500/20 cyber-chamfer">
          <div class="text-cyan-400 text-[10px] uppercase tracking-widest mb-2 flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            <span>PILLAR 01 // FRONTEND ARCHITECTURE</span>
          </div>
          <h4 class="text-white font-bold text-sm mb-2 font-Satoshi700">Design Systems & Monorepos</h4>
          <p class="text-slate-400 leading-relaxed font-Satoshi400">
            Building reusable typed UI component libraries, monorepo architectures, infinite bi-directional lists for large datasets, and performance-tuned SPAs/SSRs.
          </p>
        </div>

        <div class="p-6 bg-[#070e1c] border border-cyan-500/20 cyber-chamfer">
          <div class="text-emerald-400 text-[10px] uppercase tracking-widest mb-2 flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>PILLAR 02 // REACT NATIVE & MOBILE</span>
          </div>
          <h4 class="text-white font-bold text-sm mb-2 font-Satoshi700">Cross-Platform Native Apps</h4>
          <p class="text-slate-400 leading-relaxed font-Satoshi400">
            End-to-end mobile product delivery using React Native, Expo, and NativeWind, covering authentication, offline-first flows, and smooth native bridges.
          </p>
        </div>

        <div class="p-6 bg-[#070e1c] border border-cyan-500/20 cyber-chamfer">
          <div class="text-amber-400 text-[10px] uppercase tracking-widest mb-2 flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
            <span>PILLAR 03 // REAL-TIME & WEB3</span>
          </div>
          <h4 class="text-white font-bold text-sm mb-2 font-Satoshi700">WebSockets, SSE & Wallets</h4>
          <p class="text-slate-400 leading-relaxed font-Satoshi400">
            High-throughput live operational analytics with WebSockets/SSE, in-app custodial multi-asset crypto wallets, and privacy-first Aleo smart contracts.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";

const activeCategory = ref("ALL");

const categories = [
  { id: "ALL", code: "// 00", label: "ALL SKILLS" },
  { id: "FRONTEND", code: "// 01", label: "FRONTEND" },
  { id: "MOBILE", code: "// 02", label: "MOBILE" },
  { id: "STATE", code: "// 03", label: "STATE & DATA" },
  { id: "REALTIME", code: "// 04", label: "REAL-TIME & WEB3" },
  { id: "TOOLING", code: "// 05", label: "TOOLING & DEVOPS" },
];

const skills = [
  // FRONTEND CORE
  {
    name: "React",
    category: "FRONTEND",
    badge: "LIBRARY",
    sub: "SPA / Hooks / UI",
    level: 98,
    iconSvg: `<svg viewBox="0 0 128 128" class="w-8 h-8"><g fill="#61DAFB"><circle cx="64" cy="64" r="11.4"></circle><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8z"/></g></svg>`,
  },
  {
    name: "Next.js",
    category: "FRONTEND",
    badge: "SSR / SSG",
    sub: "App Router / SEO",
    level: 95,
    iconSvg: `<svg viewBox="0 0 128 128" class="w-8 h-8"><circle cx="64" cy="64" r="64" fill="#000"/><path fill="#fff" d="M102.3 108.6 44.2 34.2H34v59.6h8.7V46.6l54.4 69.4c1.8-2.2 3.6-4.7 5.2-7.4z"/><path fill="#fff" d="M84.7 34.2h8.7v59.6h-8.7z"/></svg>`,
  },
  {
    name: "TypeScript",
    category: "FRONTEND",
    badge: "LANGUAGE",
    sub: "Type Safety / Generics",
    level: 97,
    iconSvg: `<svg viewBox="0 0 128 128" class="w-8 h-8"><path fill="#007acc" d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"/></svg>`,
  },
  {
    name: "Vue.js",
    category: "FRONTEND",
    badge: "FRAMEWORK",
    sub: "Vue 3 / Composition",
    level: 98,
    iconSvg: `<svg viewBox="0 0 196.32 170.02" class="w-8 h-8"><polygon fill="#42b883" points="120.83 0 98.16 39.26 75.49 0 0 0 98.16 170.02 196.32 0 120.83 0"/><polygon fill="#35495e" points="120.83 0 98.16 39.26 75.49 0 39.26 0 98.16 102.01 157.06 0 120.83 0"/></svg>`,
  },
  {
    name: "Nuxt.js",
    category: "FRONTEND",
    badge: "FRAMEWORK",
    sub: "Nuxt 3 / Server Engine",
    level: 92,
    iconSvg: `<svg viewBox="0 0 512 512" class="w-8 h-8"><path d="M281.44 397.667H438.32C443.326 397.667 448.118 395.908 452.453 393.427C456.789 390.946 461.258 387.831 463.76 383.533C466.262 379.236 468.002 374.36 468 369.399C467.998 364.437 466.266 359.563 463.76 355.268L357.76 172.947C355.258 168.65 352.201 165.534 347.867 163.053C343.532 160.573 337.325 158.813 332.32 158.813C327.315 158.813 322.521 160.573 318.187 163.053C313.852 165.534 310.795 168.65 308.293 172.947L281.44 219.587L227.733 129.13C225.229 124.834 222.176 120.307 217.84 117.827C213.504 115.346 208.713 115 203.707 115C198.701 115 193.909 115.346 189.573 117.827C185.238 120.307 180.771 124.834 178.267 129.13L46.8267 355.268C44.3208 359.563 44.0022 364.437 44 369.399C43.9978 374.36 44.3246 379.235 46.8267 383.533C49.3288 387.83 53.7979 390.946 58.1333 393.427C62.4688 395.908 67.2603 397.667 72.2667 397.667H171.2C210.401 397.667 238.934 380.082 258.827 346.787L306.88 263.4L332.32 219.587L410.053 352.44H306.88L281.44 397.667ZM169.787 352.44H100.533L203.707 174.36L256 263.4L221.361 323.784C208.151 345.387 193.089 352.44 169.787 352.44Z" fill="#00DC82"/></svg>`,
  },
  {
    name: "JavaScript",
    category: "FRONTEND",
    badge: "CORE",
    sub: "ESNext / Functional",
    level: 99,
    iconSvg: `<svg viewBox="0 0 128 128" class="w-8 h-8"><path fill="#F0DB4F" d="M1.4 1.4h125.2v125.2H1.4z"/><path fill="#323330" d="M116.3 96.7c-.9-5.7-4.6-10.5-15.7-15-3.8-1.8-8.1-3-9.4-5.9-.5-1.7-.5-2.6-.2-3.7.8-3.3 4.8-4.4 7.9-3.4 2 .7 3.9 2.2 5.1 4.7 5.4-3.5 5.4-3.5 9.2-5.9-1.4-2.1-2.1-3.1-3-4-3.2-3.6-7.7-5.5-14.8-5.4l-3.7.5c-3.5.9-6.9 2.7-8.9 5.2-5.9 6.7-4.2 18.5 3 23.3 7.1 5.3 17.5 6.5 18.9 11.5 1.3 6.1-4.5 8.1-10.2 7.4-4.2-.9-6.6-3-9.1-6.9-4.7 2.7-4.7 2.7-9.5 5.5 1.1 2.5 2.3 3.6 4.3 5.8 9.1 9.2 31.8 8.7 35.8-5.2.2-.5 1.3-3.7.4-8.6zM69.5 58.9H57.8l-.1 30.3c0 6.4.3 12.3-.7 14.1-1.7 3.6-6.2 3.1-8.2 2.4-2.1-1-3.1-2.5-4.3-4.5-.3-.6-.6-1-.7-1.1l-9.5 5.8c1.6 3.2 3.9 6.1 6.9 7.9 4.5 2.7 10.5 3.5 16.7 2.1 4.1-1.2 7.6-3.7 9.4-7.4 2.7-4.9 2.1-10.9 2.1-17.4.1-10.8 0-21.5 0-32.2z"/></svg>`,
  },
  {
    name: "Tailwind CSS",
    category: "FRONTEND",
    badge: "STYLING",
    sub: "JIT / Design System",
    level: 98,
    iconSvg: `<svg viewBox="0 0 128 128" class="w-8 h-8"><path fill="#38bdf8" d="M64 25.6c-25.6 0-38.4 12.8-38.4 38.4 6.4-12.8 16-19.2 28.8-19.2 10.7 0 18.5 7.9 26.5 16C93.8 73.8 105.1 85.3 128 85.3c25.6 0 38.4-12.8 38.4-38.4-6.4 12.8-16 19.2-28.8 19.2-10.7 0-18.5-7.9-26.5-16C98.2 37.1 86.9 25.6 64 25.6zM25.6 64C0 64-12.8 76.8-12.8 102.4c6.4-12.8 16-19.2 28.8-19.2 10.7 0 18.5 7.9 26.5 16C55.4 112.2 66.7 123.7 89.6 123.7c25.6 0 38.4-12.8 38.4-38.4-6.4 12.8-16 19.2-28.8 19.2-10.7 0-18.5-7.9-26.5-16C59.8 75.5 48.5 64 25.6 64z"/></svg>`,
  },
  {
    name: "HTML5 & CSS3",
    category: "FRONTEND",
    badge: "CORE WEB",
    sub: "Semantic / A11y",
    level: 99,
    iconSvg: `<svg viewBox="0 0 128 128" class="w-8 h-8"><path fill="#E44D26" d="M19 113.9L9 1.7h110l-10.1 112.2-45 12.5z"/><path fill="#F16529" d="M64 116.8l36.4-10.1 8.6-95.9H64z"/><path fill="#fff" d="M64 52.5h17l-1.6 17.8L64 74.4V88.7l28.2-7.8.2-2.3 3.3-36.3.3-3.7H64v13.9z"/></svg>`,
  },

  // MOBILE ENGINEERING
  {
    name: "React Native",
    category: "MOBILE",
    badge: "MOBILE CORE",
    sub: "iOS & Android Apps",
    level: 96,
    iconSvg: `<svg viewBox="0 0 128 128" class="w-8 h-8"><g fill="#00D8FF"><ellipse cx="64" cy="64" rx="14" ry="48" transform="rotate(30 64 64)"/><ellipse cx="64" cy="64" rx="14" ry="48" transform="rotate(90 64 64)"/><ellipse cx="64" cy="64" rx="14" ry="48" transform="rotate(150 64 64)"/><circle cx="64" cy="64" r="8" fill="#fff"/></g></svg>`,
  },
  {
    name: "Expo",
    category: "MOBILE",
    badge: "FRAMEWORK",
    sub: "EAS / Prebuild",
    level: 95,
    iconSvg: `<svg viewBox="0 0 128 128" class="w-8 h-8"><path fill="#fff" d="M26.4 104.9c-2.4-3.5-3.7-7.6-3.7-11.9 0-11.4 9.3-20.7 20.7-20.7 4.3 0 8.4 1.3 11.9 3.7l46.3-46.3c-3.5-2.4-7.6-3.7-11.9-3.7-11.4 0-20.7 9.3-20.7 20.7 0 4.3 1.3 8.4 3.7 11.9L26.4 104.9z"/><path fill="#000" d="M128 0H0v128h128V0z"/></svg>`,
  },
  {
    name: "NativeWind",
    category: "MOBILE",
    badge: "MOBILE STYLES",
    sub: "Tailwind on Mobile",
    level: 94,
    iconSvg: `<svg viewBox="0 0 128 128" class="w-8 h-8"><path fill="#00f0ff" d="M64 25.6c-25.6 0-38.4 12.8-38.4 38.4 6.4-12.8 16-19.2 28.8-19.2 10.7 0 18.5 7.9 26.5 16C93.8 73.8 105.1 85.3 128 85.3c25.6 0 38.4-12.8 38.4-38.4-6.4 12.8-16 19.2-28.8 19.2-10.7 0-18.5-7.9-26.5-16C98.2 37.1 86.9 25.6 64 25.6z"/></svg>`,
  },
  {
    name: "Bootstrap",
    category: "FRONTEND",
    badge: "GRID / CSS",
    sub: "Rapid Prototypes",
    level: 90,
    iconSvg: `<svg viewBox="0 0 128 128" class="w-8 h-8"><path fill="#7952B3" d="M18.8 11.7L109.2 11.7C114.7 11.7 119.2 16.2 119.2 21.7L119.2 106.3C119.2 111.8 114.7 116.3 109.2 116.3L18.8 116.3C13.3 116.3 8.8 111.8 8.8 106.3L8.8 21.7C8.8 16.2 13.3 11.7 18.8 11.7Z"/><path fill="#fff" d="M47 38.6h20.6c11 0 17.6 5.3 17.6 13.6 0 6.6-4.5 11.4-11.4 12.6v.5c8.3 1.2 13.8 6.6 13.8 14.7 0 9.7-7.8 15.3-19.8 15.3H47V38.6zm13 20h7.3c4.8 0 7.8-2.6 7.8-6.6 0-4.2-3-6.6-7.8-6.6H60v13.2zm0 29.8h8.3c5.4 0 8.7-2.7 8.7-7.2 0-4.6-3.4-7.3-8.7-7.3H60v14.5z"/></svg>`,
  },

  // STATE & DATA
  {
    name: "Zustand",
    category: "STATE",
    badge: "STATE ENGINE",
    sub: "Lean / Reactive Store",
    level: 96,
    iconSvg: `<svg viewBox="0 0 128 128" class="w-8 h-8"><circle cx="64" cy="64" r="54" fill="#443E38"/><path d="M40 44h48L40 84h48" stroke="#E58A3C" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>`,
  },
  {
    name: "Redux & Toolkit",
    category: "STATE",
    badge: "STATE ENGINE",
    sub: "RTK / Middleware",
    level: 94,
    iconSvg: `<svg viewBox="0 0 128 128" class="w-8 h-8"><path fill="#764ABC" d="M64 12c-28.7 0-52 23.3-52 52s23.3 52 52 52 52-23.3 52-52-23.3-52-52-52zm22 66.5c-4.4 7.6-13 12.5-22 12.5s-17.6-4.9-22-12.5c-1.5-2.6-.6-5.9 2-7.4 2.6-1.5 5.9-.6 7.4 2 2.5 4.3 7.3 7 12.6 7s10.1-2.7 12.6-7c1.5-2.6 4.8-3.5 7.4-2 2.6 1.5 3.5 4.8 2 7.4z"/></svg>`,
  },
  {
    name: "Pinia & Vuex",
    category: "STATE",
    badge: "STATE ENGINE",
    sub: "Modular Store Architecture",
    level: 98,
    iconSvg: `<svg viewBox="0 0 128 128" class="w-8 h-8"><path fill="#FFE56E" d="M64 10c-25 0-40 20-40 45 0 35 40 63 40 63s40-28 40-63c0-25-15-45-40-45z"/><circle cx="50" cy="50" r="6" fill="#35495E"/><circle cx="78" cy="50" r="6" fill="#35495E"/><path d="M46 72c6 6 30 6 36 0" stroke="#35495E" stroke-width="4" stroke-linecap="round" fill="none"/></svg>`,
  },
  {
    name: "Context API",
    category: "STATE",
    badge: "REACT NATIVE",
    sub: "Prop Drilling Mitigation",
    level: 95,
    iconSvg: `<svg viewBox="0 0 128 128" class="w-8 h-8"><circle cx="64" cy="64" r="54" fill="#00D8FF" opacity="0.2"/><path d="M44 64h40M64 44v40" stroke="#00D8FF" stroke-width="8" stroke-linecap="round"/></svg>`,
  },
  {
    name: "REST APIs",
    category: "STATE",
    badge: "NETWORKING",
    sub: "Axios / Interceptors",
    level: 99,
    iconSvg: `<svg viewBox="0 0 128 128" class="w-8 h-8"><path fill="#5A29E4" d="M64 10l50 28v54l-50 28-50-28V38z"/><path fill="#fff" d="M38 64h52M72 46l18 18-18 18" stroke="#fff" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>`,
  },

  // REAL-TIME & WEB3
  {
    name: "WebSockets",
    category: "REALTIME",
    badge: "STREAMING",
    sub: "Bi-directional Live Data",
    level: 95,
    iconSvg: `<svg viewBox="0 0 128 128" class="w-8 h-8"><path fill="#00f0ff" d="M64 12c-28.7 0-52 23.3-52 52s23.3 52 52 52 52-23.3 52-52-23.3-52-52-52zm0 18c18.8 0 34 15.2 34 34s-15.2 34-34 34-34-15.2-34-34 15.2-34 34-34zm-8 18v32l24-16-24-16z"/></svg>`,
  },
  {
    name: "SSE (Server-Sent)",
    category: "REALTIME",
    badge: "EVENT STREAM",
    sub: "Real-time Live Feeds",
    level: 93,
    iconSvg: `<svg viewBox="0 0 128 128" class="w-8 h-8"><path fill="#00ff9d" d="M20 64c0-24.3 19.7-44 44-44s44 19.7 44 44-19.7 44-44 44M36 64c0-15.5 12.5-28 28-28s28 12.5 28 28-12.5 28-28 28" stroke="#00ff9d" stroke-width="6" fill="none"/><circle cx="64" cy="64" r="8" fill="#00ff9d"/></svg>`,
  },
  {
    name: "Crypto Wallets",
    category: "REALTIME",
    badge: "WEB3",
    sub: "Custodial & EOA Wallets",
    level: 92,
    iconSvg: `<svg viewBox="0 0 128 128" class="w-8 h-8"><path fill="#F5A623" d="M108 34H20c-4.4 0-8 3.6-8 8v52c0 4.4 3.6 8 8 8h88c4.4 0 8-3.6 8-8V42c0-4.4-3.6-8-8-8zm-8 38c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"/></svg>`,
  },
  {
    name: "Aleo SDK",
    category: "REALTIME",
    badge: "ZERO KNOWLEDGE",
    sub: "ZK Proofs & Leo Smart Contracts",
    level: 90,
    iconSvg: `<svg viewBox="0 0 128 128" class="w-8 h-8"><circle cx="64" cy="64" r="54" fill="#121212"/><path d="M44 84V44h40M44 64h30" stroke="#00f0ff" stroke-width="8" stroke-linecap="round"/></svg>`,
  },

  // TOOLING & ARCHITECTURE
  {
    name: "Monorepos",
    category: "TOOLING",
    badge: "ARCHITECTURE",
    sub: "Turborepo / Shared Packages",
    level: 92,
    iconSvg: `<svg viewBox="0 0 128 128" class="w-8 h-8"><rect x="20" y="20" width="36" height="36" rx="4" fill="#00f0ff"/><rect x="72" y="20" width="36" height="36" rx="4" fill="#00f0ff" opacity="0.7"/><rect x="20" y="72" width="36" height="36" rx="4" fill="#00f0ff" opacity="0.7"/><rect x="72" y="72" width="36" height="36" rx="4" fill="#00ff9d"/></svg>`,
  },
  {
    name: "Git & GitHub",
    category: "TOOLING",
    badge: "DEVOPS",
    sub: "CI/CD & Code Reviews",
    level: 98,
    iconSvg: `<svg viewBox="0 0 128 128" class="w-8 h-8"><path fill="#F05032" d="M125.7 57.5L70.5 2.3c-3-3-8-3-11 0L49.3 12.5l14 14c3.2-1.1 6.9-.3 9.4 2.1 2.5 2.5 3.3 6.2 2.2 9.4l13.5 13.5c3.2-1.1 6.9-.3 9.4 2.2 3.9 3.9 3.9 10.3 0 14.2s-10.3 3.9-14.2 0c-2.8-2.8-3.5-6.9-2.2-10.4L69 42.9v35.3c1 .6 2 1.4 2.8 2.2 3.9 3.9 3.9 10.3 0 14.2s-10.3 3.9-14.2 0-3.9-10.3 0-14.2c1-1 2.2-1.8 3.5-2.4V42.3c-1.3-.6-2.5-1.4-3.5-2.4-2.8-2.8-3.5-6.9-2.2-10.4L41.3 15.4 2.3 54.4c-3 3-3 8 0 11l55.2 55.2c3 3 8 3 11 0l57.2-52.1c3.1-3 3.1-8 0-11z"/></svg>`,
  },
  {
    name: "Vite",
    category: "TOOLING",
    badge: "BUNDLER",
    sub: "HMR / Lightning Builds",
    level: 96,
    iconSvg: `<svg viewBox="0 0 128 128" class="w-8 h-8"><path fill="#BD34FE" d="M117.8 17.6L67.6 122.9c-1.5 3.1-6 3-7.3-.1L10.3 17.6c-1.6-3.7 1.8-7.7 5.7-6.8l48 11.2c1.7.4 3.4.4 5.1 0l43-11.2c3.9-.9 7.3 3.1 5.7 6.8z"/><path fill="#FFD427" d="M78 8l-38 48h26l-12 36 46-56H74l18-28z"/></svg>`,
  },
  {
    name: "Storybook",
    category: "TOOLING",
    badge: "UI DOCS",
    sub: "Isolated Component Dev",
    level: 90,
    iconSvg: `<svg viewBox="0 0 128 128" class="w-8 h-8"><path fill="#FF4785" d="M102 12H26c-4.4 0-8 3.6-8 8v88c0 4.4 3.6 8 8 8h76c4.4 0 8-3.6 8-8V20c0-4.4-3.6-8-8-8zm-22 34h-8v12h8c2.2 0 4-1.8 4-4v-4c0-2.2-1.8-4-4-4zm0 28h-8v12h8c2.2 0 4-1.8 4-4v-4c0-2.2-1.8-4-4-4z"/></svg>`,
  },
  {
    name: "Vercel & Netlify",
    category: "TOOLING",
    badge: "DEPLOYMENT",
    sub: "Edge Deployments / CI",
    level: 95,
    iconSvg: `<svg viewBox="0 0 128 128" class="w-8 h-8"><polygon points="64 16 118 108 10 108" fill="#fff"/></svg>`,
  },
  {
    name: "Microsoft Azure",
    category: "TOOLING",
    badge: "CLOUD",
    sub: "Static Web Apps / Cloud",
    level: 88,
    iconSvg: `<svg viewBox="0 0 128 128" class="w-8 h-8"><path fill="#0078d4" d="M46.8 11.7L11.7 82.5l27 33.8h42.5L46.8 11.7zm34.4 0l-27 50.7 34.4 53.9h31.7L81.2 11.7z"/></svg>`,
  },
];

const filteredSkills = computed(() => {
  if (activeCategory.value === "ALL") return skills;
  return skills.filter((s) => s.category === activeCategory.value);
});
</script>
