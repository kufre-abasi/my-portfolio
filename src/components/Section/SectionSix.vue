<script setup>
import { ref, computed } from "vue";
import Modal from "@/components/Modal.vue";

import MySpurr from "@/assets/myspurr.png";
import Croxxtalent from "@/assets/croxxtalent.png";
import Hivvy_NEW_LOGO from "@/assets/Hivvy_NEW_LOGO.svg";
import boifiok from "@/assets/boifiok.svg";
import TechRideLogo from "@/assets/TechRide-Logo.DufkOsa_.svg";
import peakgram from "@/assets/peakgram-logo-black.svg";
import proxyMed from "@/assets/prxy.jpg";
import sungaLogo from "@/assets/sunga-logo.png";
import zoogla from "@/assets/zoogla.svg";
import tribinnovAfrica from "@/assets/tribinnovAfrica.png";
import KavlrLogo from "@/assets/img/kavlr_Logo.svg";

const showModal = ref(false);
const activeFilter = ref("ALL");

const toggleModal = () => {
  showModal.value = !showModal.value;
};

// Brands & Partners telemetry strip
const brands = [
  { name: "Hivvy Inc.", location: "United States", role: "Co-Founder & Software Engineer", logo: Hivvy_NEW_LOGO },
  { name: "Sunga Africa", location: "Zambia", role: "Frontend & Mobile Engineer", logo: sungaLogo },
  { name: "Proxy Med", location: "London, UK", role: "Senior Frontend Engineer", logo: proxyMed },
  { name: "Boifiok.ng", location: "Nigeria", role: "CTO & Lead Engineer", logo: boifiok },
  { name: "One Goal Technologies", location: "Remote", role: "Frontend & Mobile Consultant", logo: null },
  { name: "Tec-Ride B.V.", location: "Amsterdam, NL", role: "Frontend Engineer", logo: TechRideLogo },
  { name: "CroxxTalent", location: "Nigeria", role: "Frontend Engineer", logo: Croxxtalent },
  { name: "Zoogla", location: "South Africa", role: "Support Frontend Dev", logo: zoogla },
  { name: "Gokamba", location: "London, UK", role: "Frontend Web Developer", logo: KavlrLogo },
  { name: "MySpurr", location: "Nigeria", role: "Frontend Web Developer", logo: MySpurr },
  { name: "Tribinnov Africa", location: "Nigeria", role: "Frontend Web Developer", logo: tribinnovAfrica },
];

const filterTabs = [
  { id: "ALL", label: "ALL MISSIONS", count: "12" },
  { id: "FINTECH", label: "FINTECH & WEB3", count: "04" },
  { id: "MOBILE", label: "MOBILE (REACT NATIVE)", count: "03" },
  { id: "SAAS", label: "SAAS & PLATFORMS", count: "03" },
  { id: "HEALTH_COMMERCE", label: "HEALTH & COMMERCE", count: "02" },
];

const projects = ref([
  {
    id: "01",
    name: "Hivvy Inc.",
    role: "Co-Founder & Software Engineer",
    timeline: "JUN 2024 - PRESENT",
    location: "United States // Remote",
    category: "FINTECH",
    tag: "WEB3 // CREATOR PLATFORM // WALLET",
    status: "ACTIVE OPERATION",
    logo: Hivvy_NEW_LOGO,
    content: "Architected core product experiences for a social and creator platform with real-time client updates. Built an in-app custodial wallet spanning fiat, Nectar, and digital assets with balance tracking, funding, withdrawals, and address generation. Designed a flexible feed architecture with typed UI state boundaries.",
    tech: ["React", "Next.js", "TypeScript", "WebSockets", "Web3", "State Management"],
    url: "https://hivvy.app/",
  },
  {
    id: "02",
    name: "Sunga Africa",
    role: "Frontend / Mobile Engineer (Contract)",
    timeline: "NOV 2025 - PRESENT",
    location: "Lusaka, Zambia // Remote",
    category: "MOBILE",
    tag: "FINTECH // SAVINGS // MOBILE APP",
    status: "ACTIVE OPERATION",
    logo: sungaLogo,
    content: "Led end-to-end frontend and mobile delivery for a fintech savings product, covering authentication, API integration, financial journeys, and production UI. Architected the administration dashboard with scalable data-heavy interfaces and maintainable state management.",
    tech: ["React Native", "Expo", "Next.js", "TypeScript", "Redux", "Zustand", "REST APIs"],
    url: "https://sunga.africa/",
  },
  {
    id: "03",
    name: "One Goal Technologies (SocialStore)",
    role: "Frontend & Mobile Engineer (Consulting)",
    timeline: "FEB 2026 - PRESENT",
    location: "Remote",
    category: "SAAS",
    tag: "REAL-TIME ANALYTICS // ERP",
    status: "ACTIVE OPERATION",
    logo: null,
    content: "Led frontend development of a real-time sales analytics platform using WebSockets and Server-Sent Events (SSE) for continuously updating operational data. Architected frontend features for an internal ERP product with infinite bi-directional lists and complex state management.",
    tech: ["React", "React Native", "Vue", "TypeScript", "WebSockets", "SSE", "REST APIs"],
    url: "https://getsocialstore.com",
  },
  {
    id: "04",
    name: "Boifiok.ng",
    role: "Chief Technology Officer & Lead Engineer",
    timeline: "DEC 2024 - PRESENT",
    location: "Uyo, Nigeria",
    category: "HEALTH_COMMERCE",
    tag: "SOCIAL COMMERCE // GROUP-BUYING",
    status: "LIVE PRODUCTION",
    logo: boifiok,
    content: "Own technical direction and system planning for a social-commerce platform digitising the group-buying model for groceries and everyday essentials. Translated business operations into product workflows through on-site operational discovery.",
    tech: ["React.js", "Next.js", "JavaScript", "TypeScript", "Zustand", "REST APIs"],
    url: "https://boifiok.ng/",
  },
  {
    id: "05",
    name: "Demz Aminytics / Proxy Med",
    role: "Senior Frontend Engineer",
    timeline: "JUN 2025 - AUG 2025",
    location: "London, UK // Remote",
    category: "HEALTH_COMMERCE",
    tag: "TELEHEALTH // AI HEALTHCARE",
    status: "COMPLETED",
    logo: proxyMed,
    content: "Delivered pixel-accurate urgent-care and weight-loss patient flows for a telehealth platform. Implemented the frontend experience for an AI doctor chat feature and developed reusable components shared through a monorepo architecture.",
    tech: ["React", "Next.js", "TypeScript", "Redux", "Zustand", "Monorepo", "REST APIs"],
    url: "https://prxy.health/weight-loss",
  },
  {
    id: "06",
    name: "Tec-Ride B.V.",
    role: "Frontend Engineer (Contract)",
    timeline: "MAR 2024 - DEC 2024",
    location: "Amsterdam, Netherlands // Remote",
    category: "SAAS",
    tag: "MOBILITY // FLEET DASHBOARD",
    status: "COMPLETED",
    logo: TechRideLogo,
    content: "Built the company landing website and core public-facing product pages for the mobility platform using Vue.js and Nuxt. Developed the fleet dashboard used to surface and manage fleet-related operational data, integrating REST APIs and Pinia state management.",
    tech: ["Vue.js", "Nuxt.js", "TypeScript", "Pinia", "REST APIs"],
    url: "https://tec-ride.com/",
  },
  {
    id: "07",
    name: "CroxxTalent",
    role: "Frontend Engineer",
    timeline: "JUN 2023 - DEC 2025",
    location: "Lagos, Nigeria // Remote",
    category: "SAAS",
    tag: "HR TECH // ENERGY SECTOR",
    status: "COMPLETED",
    logo: Croxxtalent,
    content: "Developed and optimized talent dashboards, CV/product workflows, and landing experiences for an HR technology platform serving the energy sector. Translated Figma designs into reusable Vue interfaces with complex client-side data flows.",
    tech: ["Vue.js", "TypeScript", "JavaScript", "Pinia", "REST APIs"],
    url: "https://croxxtalent.com/",
  },
  {
    id: "08",
    name: "Leofolio (Aleo Blockchain)",
    role: "Core Developer & Blockchain Architect",
    timeline: "ALEO CODESPRINT V3 (3RD PLACE)",
    location: "Global // Open Source",
    category: "FINTECH",
    tag: "ZERO-KNOWLEDGE // WEB3 FREELANCING",
    status: "AWARD WINNING",
    logo: null,
    content: "Built a zero-knowledge freelancing platform for private professional verification and smart-contract-based payments using Aleo blockchain and Aleo SDK. Designed frontend and blockchain interaction flows around privacy-preserving credentials and escrow.",
    tech: ["Aleo SDK", "Zero-Knowledge Proofs", "TypeScript", "Smart Contracts", "Web3"],
    url: "https://github.com/kufre-abasi",
  },
  {
    id: "09",
    name: "Zoogla",
    role: "Support Frontend Developer",
    timeline: "OCT 2024 - DEC 2024",
    location: "South Africa // Remote",
    category: "FINTECH",
    tag: "FINTECH // VEHICLE FINANCE",
    status: "COMPLETED",
    logo: zoogla,
    content: "Maintained and improved React/Next.js landing-page experiences and interactive digital financing application flows for a vehicle-finance fintech platform.",
    tech: ["React", "Next.js", "TypeScript", "Zustand"],
    url: "https://zoogla.co.za/",
  },
  {
    id: "10",
    name: "MySpurr",
    role: "Frontend Web Developer",
    timeline: "JUL 2023 - JUN 2024",
    location: "Abuja, Nigeria // Remote",
    category: "SAAS",
    tag: "TALENT PLATFORM // CREATIVES",
    status: "COMPLETED",
    logo: MySpurr,
    content: "Collaborated with backend engineers to deliver an MVP talent marketplace platform and scalable business/talent onboarding and portfolio flows using Vue and Pinia.",
    tech: ["Vue.js", "TypeScript", "Pinia", "REST APIs"],
    url: "https://www.myspurr.net/",
  },
  {
    id: "11",
    name: "Gokamba (Kavlr)",
    role: "Frontend Web Developer",
    timeline: "FEB 2023 - JUN 2023",
    location: "London, UK // Remote",
    category: "FINTECH",
    tag: "MULTICURRENCY BANKING // CARDS",
    status: "COMPLETED",
    logo: KavlrLogo,
    content: "Built responsive product interfaces and contributed to the frontend architecture for digital banking, stablecoin multicurrency accounts, payments, and business-management tools.",
    tech: ["Vue.js", "TypeScript", "JavaScript", "Pinia", "REST APIs"],
    url: "https://gokamba.com/",
  },
  {
    id: "12",
    name: "Tribinnov Africa",
    role: "Frontend Web Developer",
    timeline: "APR 2022 - JAN 2024",
    location: "Lagos, Nigeria // Remote",
    category: "SAAS",
    tag: "INNOVATION ECOSYSTEM",
    status: "COMPLETED",
    logo: tribinnovAfrica,
    content: "Integrated core APIs, rebuilt dashboard interfaces based on customer feedback, and managed complex asynchronous application data flows using Vue and Pinia.",
    tech: ["Vue.js", "JavaScript", "TypeScript", "Pinia", "REST APIs"],
    url: "https://tribinnovafrica.com/",
  },
]);

const filteredProjects = computed(() => {
  if (activeFilter.value === "ALL") return projects.value;
  return projects.value.filter((p) => p.category === activeFilter.value);
});
</script>

<template>
  <section id="projects" class="py-24 relative overflow-hidden bg-[#030712] border-t border-cyan-500/15">
    <!-- Ambient Sci-fi Lighting -->
    <div class="absolute inset-0 cyber-grid-bg opacity-20 pointer-events-none"></div>
    <div class="absolute top-1/3 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none"></div>
    <div class="absolute bottom-10 left-10 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[130px] pointer-events-none"></div>

    <div class="container mx-auto px-4 lg:px-8 relative z-10">
      <!-- Section Header -->
      <div class="flex flex-col items-center text-center mb-14">
        <div class="inline-flex items-center gap-2 px-3 py-1 bg-cyan-950/40 border border-cyan-500/30 rounded-none cyber-chamfer-sm text-[11px] font-mono text-cyan-300 tracking-widest uppercase mb-4">
          <span class="w-1.5 h-1.5 bg-emerald-400 animate-ping"></span>
          <span>// GLOBAL OPERATIONS // VERIFIED MISSIONS</span>
        </div>

        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-white tracking-tight mb-4 font-Satoshi900">
          PROVEN BRANDS & <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-300 glow-cyan">MISSIONS</span>
        </h2>

        <p class="text-slate-400 max-w-2xl text-sm md:text-base font-Satoshi400 leading-relaxed mb-8">
          Extensive engineering track record spanning United States, UK, Netherlands, Zambia, South Africa, and Nigeria. Building high-availability fintech, real-time analytics, mobile apps, and Web3 architectures.
        </p>

        <!-- Brands & Organizations Telemetry Matrix -->
        <div class="w-full max-w-5xl mb-12 p-4 sm:p-6 bg-[#060d1b]/90 border border-cyan-500/25 cyber-chamfer backdrop-blur-md">
          <div class="text-[10px] font-mono text-cyan-400/80 uppercase tracking-widest text-left mb-4 flex items-center justify-between">
            <span>[ CLIENTS & ORGANIZATIONS TELEMETRY NETWORK ]</span>
            <span class="text-emerald-400">11+ GLOBAL PARTNERS</span>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            <div
              v-for="brand in brands"
              :key="brand.name"
              class="p-3 bg-[#0a1426] border border-cyan-500/15 hover:border-cyan-400/60 rounded-none cyber-chamfer-sm flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] hover:-translate-y-0.5 group"
            >
              <div class="h-8 w-full flex items-center justify-center mb-1.5">
                <img
                  v-if="brand.logo"
                  :src="brand.logo"
                  :alt="brand.name"
                  class="max-h-7 max-w-[80%] object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                <span v-else class="text-cyan-400 font-mono text-xs font-bold tracking-tighter">
                  &lt;{{ brand.name.slice(0, 4) }}/&gt;
                </span>
              </div>
              <div class="font-mono text-[11px] font-bold text-white group-hover:text-cyan-300 transition-colors truncate w-full">
                {{ brand.name }}
              </div>
              <div class="text-[9px] font-mono text-slate-400 truncate w-full">
                {{ brand.location }}
              </div>
            </div>
          </div>
        </div>

        <!-- Mission Filter Tabs -->
        <div class="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-[#060c18] border border-cyan-500/20 cyber-chamfer-sm font-mono text-xs">
          <button
            v-for="tab in filterTabs"
            :key="tab.id"
            @click="activeFilter = tab.id"
            :class="[
              'px-4 py-2 transition-all duration-300 flex items-center gap-2 cyber-chamfer-sm',
              activeFilter === tab.id
                ? 'bg-cyan-500 text-black font-bold shadow-[0_0_12px_rgba(0,240,255,0.4)]'
                : 'text-slate-400 hover:text-cyan-300 hover:bg-cyan-950/30'
            ]"
          >
            <span>{{ tab.label }}</span>
            <span class="text-[10px] px-1.5 py-0.5 rounded bg-black/40 text-cyan-300">{{ tab.count }}</span>
          </button>
        </div>
      </div>

      <!-- Missions Grid Layout -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="item in filteredProjects"
          :key="item.id"
          class="group relative bg-[#070e1d]/95 border border-cyan-500/20 hover:border-cyan-400/80 rounded-none cyber-chamfer flex flex-col justify-between transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,240,255,0.2)] hover:-translate-y-1.5"
        >
          <!-- Corner Tech Accent on Hover -->
          <div class="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div class="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>

          <div>
            <!-- Card HUD Header -->
            <div class="p-4 border-b border-cyan-500/15 flex items-center justify-between font-mono text-xs text-cyan-400/70 bg-[#0a1428]/60">
              <span class="font-bold tracking-wider">MISSION // {{ item.id }}</span>
              <div class="flex items-center gap-1.5 text-emerald-400 text-[10px]">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                <span>{{ item.status }}</span>
              </div>
            </div>

            <!-- Logo Bay / Visual Display -->
            <div class="relative h-40 bg-[#0a1324] flex items-center justify-center p-6 border-b border-cyan-500/10 overflow-hidden">
              <div class="absolute inset-0 cyber-dots-bg opacity-30"></div>
              <div class="absolute w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all"></div>

              <img
                v-if="item.logo"
                :src="item.logo"
                :alt="item.name"
                class="max-h-20 max-w-[70%] object-contain relative z-10 filter drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:scale-110"
              />
              <div v-else class="text-white font-mono font-bold text-2xl relative z-10 flex flex-col items-center gap-1">
                <span class="text-cyan-400 text-sm font-normal">&lt;SYSTEM_PROJECT&gt;</span>
                <span>{{ item.name }}</span>
              </div>
            </div>

            <!-- Content Bay -->
            <div class="p-6">
              <!-- Sector Tag -->
              <div class="text-[10px] font-mono text-cyan-400/90 uppercase tracking-widest mb-1.5">
                {{ item.tag }}
              </div>

              <!-- Title -->
              <h3 class="text-xl font-bold text-white font-Satoshi700 group-hover:text-cyan-300 transition-colors mb-1">
                {{ item.name }}
              </h3>

              <!-- Role & Timeline -->
              <div class="font-mono text-[11px] text-emerald-400 mb-1">
                {{ item.role }}
              </div>
              <div class="font-mono text-[10px] text-slate-500 mb-3 flex items-center gap-2">
                <span>{{ item.timeline }}</span>
                <span>•</span>
                <span>{{ item.location }}</span>
              </div>

              <!-- Description -->
              <p class="text-slate-300 text-xs md:text-sm leading-relaxed font-Satoshi400 mb-5 line-clamp-3">
                {{ item.content }}
              </p>

              <!-- Tech Stack Tags -->
              <div class="flex flex-wrap gap-1.5 mb-2">
                <span
                  v-for="tag in item.tech"
                  :key="tag"
                  class="px-2 py-0.5 bg-[#0e1b33] border border-cyan-500/20 text-cyan-300 font-mono text-[10px] rounded-none cyber-chamfer-sm"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>

          <!-- Card Action Footer -->
          <div class="p-6 pt-0">
            <a
              :href="item.url"
              target="_blank"
              rel="noopener noreferrer"
              class="cyber-btn-outline w-full flex items-center justify-between text-xs group-hover:bg-cyan-500 group-hover:text-black group-hover:border-cyan-500 transition-all duration-300"
            >
              <span>INITIALIZE PROTOCOL // ACCESS</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Tactical Hiring / Transmission CTA Callout -->
      <div class="mt-20 p-8 md:p-12 bg-gradient-to-r from-[#070e1c] via-[#09152b] to-[#070e1c] border border-cyan-500/30 cyber-chamfer relative overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.8)]">
        <div class="absolute inset-0 cyber-grid-bg opacity-15 pointer-events-none"></div>
        <div class="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <div class="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-2">
              <span class="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span>DIRECT HIRING CHANNEL // SENIOR FRONTEND & REACT NATIVE</span>
            </div>
            <h3 class="text-2xl md:text-3xl font-bold text-white font-Satoshi900 uppercase">
              LOOKING TO BUILD HIGH-IMPACT <span class="text-cyan-400">DIGITAL PRODUCTS</span>?
            </h3>
            <p class="text-slate-300 text-sm md:text-base font-Satoshi400 max-w-xl mt-2">
              Open to UK/Germany relocation, US/EU remote roles, and high-growth engineering teams in Fintech, Web3, SaaS, and Mobility.
            </p>
          </div>

          <div class="flex flex-wrap items-center justify-center gap-4">
            <button
              @click="toggleModal"
              class="cyber-btn-primary flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <span>TRANSMIT DISPATCH</span>
            </button>

            <a
              href="https://docs.google.com/document/d/1ZgPdnedCb9-ziI0U1D7t9by6VhxMmkMF4eXwTlEFrM8/edit#heading=h.y7d3xdxnr44m"
              target="_blank"
              class="cyber-btn-outline flex items-center gap-2"
            >
              <span>ACCESS RESUME</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Comms Modal -->
    <Modal @closeModal="toggleModal" v-if="showModal" />
  </section>
</template>
