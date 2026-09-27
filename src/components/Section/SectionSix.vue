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
import workremitsLogo from "@/assets/workremits-logo.svg";
import fajiriLogo from "@/assets/fajiri-logo.png";
import geogridLogo from "@/assets/geogrid-logo.svg";

const showModal = ref(false);
const activeFilter = ref("ALL");

const toggleModal = () => {
  showModal.value = !showModal.value;
};

// Brands & Partners telemetry strip
const brands = [
  { name: "WorkRemits", location: "London, UK", role: "Frontend Engineer (Contract)", logo: workremitsLogo },
  { name: "Hivvy Inc.", location: "United States", role: "Co-Founder & Software Engineer", logo: Hivvy_NEW_LOGO },
  { name: "Sunga Africa", location: "Zambia", role: "Frontend & Mobile Engineer", logo: sungaLogo },
  { name: "Peakgram", location: "Remote // Global", role: "Frontend Engineer (Contract)", logo: peakgram },
  { name: "Fajiri Foundation", location: "Canada // Nigeria", role: "Lead Frontend Engineer", logo: fajiriLogo },
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

const projects = ref([
  {
    id: "01",
    name: "Hivvy Inc.",
    role: "Co-Founder & Software Engineer",
    timeline: "JUN 2024 - PRESENT",
    location: "United States // Remote",
    category: "FINTECH",
    tag: "WEB3 // CREATOR PLATFORM // WALLET",
    status: "ACTIVE PRODUCT",
    logo: Hivvy_NEW_LOGO,
    content: "Architected core product experiences for a social and creator platform with real-time client updates. Built an in-app custodial wallet spanning fiat, Nectar, and digital assets with balance tracking, funding, withdrawals, and address generation. Designed a flexible feed architecture with typed UI state boundaries.",
    tech: ["React", "Next.js", "TypeScript", "WebSockets", "Web3", "State Management"],
    url: "https://hivvy.app/",
  },
  {
    id: "02",
    name: "WorkRemits",
    role: "Senior Frontend Engineer (Contract)",
    timeline: "2026 - PRESENT",
    location: "London, UK // Remote",
    category: "FINTECH",
    tag: "GLOBAL PAYROLL // EOR & PEO // MULTI-CURRENCY",
    status: "ACTIVE PRODUCT",
    logo: workremitsLogo,
    content: "Architected core enterprise frontend modules for a multi-currency global payroll, invoicing, and Employer of Record (EOR/PEO) platform. Engineered the statutory tax deduction & payroll calculation engine across African and international jurisdictions (PAYE, NAPSA, NHIMA, SDL), automated multi-currency contractor disbursement flows, Money Request approval workflows, and interactive salary summaries.",
    tech: ["React", "TypeScript", "Redux Toolkit", "Vite", "Tailwind CSS", "REST APIs", "TanStack Table", "Framer Motion"],
    url: "https://workremits.com/",
  },
  {
    id: "03",
    name: "Sunga Africa",
    role: "Frontend / Mobile Engineer (Contract)",
    timeline: "NOV 2025 - PRESENT",
    location: "Lusaka, Zambia // Remote",
    category: "MOBILE",
    tag: "FINTECH // SAVINGS // MOBILE APP",
    status: "ACTIVE PRODUCT",
    logo: sungaLogo,
    content: "Led end-to-end frontend and mobile delivery for a fintech savings product, covering authentication, API integration, financial journeys, and production UI. Architected the administration dashboard with scalable data-heavy interfaces and maintainable state management.",
    tech: ["React Native", "Expo", "Next.js", "TypeScript", "Redux", "Zustand", "REST APIs"],
    url: "https://sunga.africa/",
  },
  {
    id: "04",
    name: "One Goal Technologies (SocialStore)",
    role: "Frontend & Mobile Engineer (Consulting)",
    timeline: "FEB 2026 - PRESENT",
    location: "Remote",
    category: "SAAS",
    tag: "REAL-TIME ANALYTICS // ERP",
    status: "ACTIVE PRODUCT",
    logo: null,
    content: "Led frontend development of a real-time sales analytics platform using WebSockets and Server-Sent Events (SSE) for continuously updating operational data. Architected frontend features for an internal ERP product with infinite bi-directional lists and complex state management.",
    tech: ["React", "React Native", "Vue", "TypeScript", "WebSockets", "SSE", "REST APIs"],
    url: "https://getsocialstore.com",
  },
  {
    id: "05",
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
    id: "06",
    name: "GeoGrid Campus",
    role: "Creator & Lead Architect (Side Quest)",
    timeline: "2026 // SIDE QUEST",
    location: "Global // Web Application",
    category: "SIDE_QUEST",
    tag: "GEOSPATIAL // SMART CAMPUS // WAYFINDING",
    status: "LIVE PRODUCTION",
    logo: geogridLogo,
    content: "Built an intelligent campus navigation and smart-grid geocoding web platform. Implemented natural language spatial search, turn-by-turn walking directions for campus buildings and multi-floor offices, a full-featured GeoJSON map editor to draw and calibrate points, boundary lines, and 2D building polygons, and administrative tools for bulk campus spreadsheet imports.",
    tech: ["React", "TypeScript", "Vite", "GeoJSON", "Mapbox / Leaflet", "TanStack Router", "Tailwind CSS"],
    url: "https://campus-grid-nav.lovable.app/",
  },
  {
    id: "07",
    name: "Peakgram",
    role: "Frontend Engineer (Contract)",
    timeline: "2024 - PRESENT",
    location: "Remote // Global",
    category: "SAAS",
    tag: "CREATIVE AGENCY // DESIGN SYSTEMS // WEB APPS",
    status: "LIVE PRODUCTION",
    logo: peakgram,
    content: "Delivered modern, high-performance web applications and digital agency experiences for Peakgram. Built interactive product showcase landing pages for flagship client products (including Hivvy, Blockroll, and HashIT), custom 3D animation showreels, and dynamic marketing flows engineered for smooth responsiveness, SEO optimization, and sub-second load times.",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Video/3D", "REST APIs"],
    url: "https://peakgram.com/",
  },
  {
    id: "08",
    name: "Fajiri Foundation",
    role: "Lead Frontend Engineer (Contract)",
    timeline: "2024 - PRESENT",
    location: "British Columbia, CA // Abuja, NG",
    category: "HEALTH_COMMERCE",
    tag: "GLOBAL CHARITY // DONATION ENGINE // RELIEF PORTAL",
    status: "LIVE PRODUCTION",
    logo: fajiriLogo,
    content: "Architected the public digital platform and member portal for The Fajiri Family Relief Foundation (Canadian Registered Charity #722772027RR0001). Built international donation flows, multi-language localization (EN/FR), interactive humanitarian campaign trackers across education, healthcare, and emergency relief, and member onboarding portals for global African diaspora communities.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Cloudinary", "Internationalization", "REST APIs"],
    url: "https://fajiri.org/",
  },
  {
    id: "09",
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
    id: "10",
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
    id: "11",
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
    id: "12",
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
    id: "13",
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
    id: "14",
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
    id: "15",
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
    id: "16",
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

const filterTabs = computed(() => [
  { id: "ALL", label: "All Projects", count: String(projects.value.length).padStart(2, "0") },
  { id: "FINTECH", label: "Fintech & Web3", count: String(projects.value.filter((p) => p.category === "FINTECH").length).padStart(2, "0") },
  { id: "SAAS", label: "SaaS & Platforms", count: String(projects.value.filter((p) => p.category === "SAAS").length).padStart(2, "0") },
  { id: "MOBILE", label: "Mobile (React Native)", count: String(projects.value.filter((p) => p.category === "MOBILE").length).padStart(2, "0") },
  { id: "HEALTH_COMMERCE", label: "Health & Social Impact", count: String(projects.value.filter((p) => p.category === "HEALTH_COMMERCE").length).padStart(2, "0") },
  { id: "SIDE_QUEST", label: "Side Quests & Labs", count: String(projects.value.filter((p) => p.category === "SIDE_QUEST").length).padStart(2, "0") },
]);

const filteredProjects = computed(() => {
  if (activeFilter.value === "ALL") return projects.value;
  return projects.value.filter((p) => p.category === activeFilter.value);
});
</script>

<template>
  <section id="projects" class="py-24 relative overflow-hidden bg-[#F7F5F0] border-t border-[#E8E4DF]">
    <!-- Ambient Texture -->
    <div class="absolute inset-0 scroll-grid-bg opacity-30 pointer-events-none"></div>
    <div class="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#556B2F]/[0.03] rounded-full blur-[140px] pointer-events-none"></div>
    <div class="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#15803D]/[0.025] rounded-full blur-[130px] pointer-events-none"></div>

    <div class="container mx-auto px-4 lg:px-8 relative z-10">
      <!-- Section Header -->
      <div class="flex flex-col items-center text-center mb-14">
        <div class="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-[#E8E4DF] rounded-full text-xs font-mono text-[#7A756D] uppercase tracking-wider mb-4 shadow-xs">
          <span class="w-1.5 h-1.5 rounded-full bg-[#15803D] animate-ping"></span>
          <span>Chapter 03 ── Selected Work & Verified Products</span>
        </div>

        <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display text-[#0D0D0D] tracking-tight mb-4 leading-tight">
          Selected Work & <span class="italic text-[#556B2F]">Impact</span>
        </h2>

        <p class="text-[#4A4845] max-w-2xl text-sm md:text-base font-sans leading-relaxed mb-8">
          Extensive engineering track record spanning United States, UK, Canada, Netherlands, Zambia, South Africa, and Nigeria. Building high-availability fintech, global payroll engines, real-time analytics, mobile apps, and Web3 architectures.
        </p>

        <!-- Brands & Organizations Telemetry Matrix -->
        <div class="w-full max-w-5xl mb-12 p-6 bg-white border border-[#E8E4DF] rounded-3xl shadow-sm">
          <div class="text-xs font-mono text-[#7A756D] uppercase tracking-wider text-left mb-4 flex items-center justify-between pb-3 border-b border-[#E8E4DF]">
            <span class="font-semibold text-[#0D0D0D]">Partner & Client Network</span>
            <span class="text-[#15803D] font-bold">{{ brands.length }}+ Global Collaborations</span>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
            <div
              v-for="brand in brands"
              :key="brand.name"
              class="p-3 bg-[#FAF9F7] border border-[#E8E4DF] hover:border-[#556B2F]/40 rounded-2xl flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-xs hover:-translate-y-0.5 group"
            >
              <div class="h-8 w-full flex items-center justify-center mb-1.5">
                <img
                  v-if="brand.logo"
                  :src="brand.logo"
                  :alt="brand.name"
                  class="max-h-7 max-w-[80%] object-contain transition-all duration-300 group-hover:scale-105"
                />
                <span v-else class="text-[#0D0D0D] font-mono text-xs font-bold tracking-tight">
                  &lt;{{ brand.name.slice(0, 4) }}/&gt;
                </span>
              </div>
              <div class="font-sans text-xs font-bold text-[#0D0D0D] group-hover:text-[#556B2F] transition-colors truncate w-full">
                {{ brand.name }}
              </div>
              <div class="text-[10px] font-mono text-[#7A756D] truncate w-full">
                {{ brand.location }}
              </div>
            </div>
          </div>
        </div>

        <!-- Project Filter Tabs -->
        <div class="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-white/80 border border-[#E8E4DF] rounded-full font-sans text-xs shadow-xs backdrop-blur-sm">
          <button
            v-for="tab in filterTabs"
            :key="tab.id"
            @click="activeFilter = tab.id"
            :class="[
              'px-4 py-2 rounded-full transition-all duration-200 flex items-center gap-2 font-medium',
              activeFilter === tab.id
                ? 'bg-[#0D0D0D] text-white shadow-xs'
                : 'text-[#4A4845] hover:text-[#0D0D0D] hover:bg-[#FAF9F7]'
            ]"
          >
            <span>{{ tab.label }}</span>
            <span :class="[
              'text-[10px] font-mono px-1.5 py-0.2 rounded-full',
              activeFilter === tab.id ? 'bg-white/20 text-white' : 'bg-[#FAF9F7] text-[#7A756D]'
            ]">
              {{ tab.count }}
            </span>
          </button>
        </div>
      </div>

      <!-- Missions Grid Layout -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="item in filteredProjects"
          :key="item.id"
          class="group relative bg-white border border-[#E8E4DF] hover:border-[#556B2F]/60 rounded-3xl flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden"
        >
          <div>
            <!-- Card Header -->
            <div class="px-5 py-3.5 border-b border-[#E8E4DF] flex items-center justify-between font-mono text-xs text-[#7A756D] bg-[#FAF9F7]/70">
              <span class="font-bold tracking-wider text-[#0D0D0D]">PROJECT // {{ item.id }}</span>
              <div class="flex items-center gap-1.5 text-[#15803D] text-[11px] font-medium">
                <span class="w-1.5 h-1.5 rounded-full bg-[#15803D] animate-ping"></span>
                <span>{{ item.status }}</span>
              </div>
            </div>

            <!-- Logo Bay / Visual Display -->
            <div class="relative h-36 bg-[#FAF9F7] flex items-center justify-center p-6 border-b border-[#E8E4DF] overflow-hidden">
              <div class="absolute inset-0 scroll-dots-bg opacity-30"></div>

              <img
                v-if="item.logo"
                :src="item.logo"
                :alt="item.name"
                class="max-h-16 max-w-[70%] object-contain relative z-10 transition-transform duration-500 group-hover:scale-105"
              />
              <div v-else class="text-[#0D0D0D] font-display font-bold text-2xl relative z-10 flex flex-col items-center">
                <span>{{ item.name }}</span>
              </div>
            </div>

            <!-- Content Bay -->
            <div class="p-6">
              <!-- Sector Tag -->
              <div class="text-[10px] font-mono text-[#556B2F] uppercase tracking-wider font-semibold mb-1">
                {{ item.tag }}
              </div>

              <!-- Title -->
              <h3 class="text-xl font-bold text-[#0D0D0D] font-sans group-hover:text-[#556B2F] transition-colors mb-1">
                {{ item.name }}
              </h3>

              <!-- Role & Timeline -->
              <div class="text-xs font-sans font-medium text-[#15803D] mb-1">
                {{ item.role }}
              </div>
              <div class="font-mono text-[11px] text-[#7A756D] mb-3 flex items-center gap-2">
                <span>{{ item.timeline }}</span>
                <span>•</span>
                <span>{{ item.location }}</span>
              </div>

              <!-- Description -->
              <p class="text-[#4A4845] text-xs sm:text-sm leading-relaxed font-sans mb-5 line-clamp-3">
                {{ item.content }}
              </p>

              <!-- Tech Stack Tags -->
              <div class="flex flex-wrap gap-1.5 mb-2">
                <span
                  v-for="tag in item.tech"
                  :key="tag"
                  class="px-2.5 py-0.5 bg-[#FAF9F7] border border-[#E8E4DF] text-[#4A4845] font-mono text-[10px] rounded-full"
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
              class="scroll-btn-secondary w-full flex items-center justify-between text-xs py-2.5 group-hover:border-[#556B2F] group-hover:text-[#556B2F] transition-colors"
            >
              <span>Explore Project</span>
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
      <div class="mt-20 p-8 md:p-12 bg-white border border-[#E8E4DF] rounded-3xl relative overflow-hidden shadow-sm">
        <div class="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <div class="inline-flex items-center gap-2 text-[#556B2F] font-mono text-xs uppercase tracking-wider mb-2 font-semibold">
              <span class="w-2 h-2 rounded-full bg-[#556B2F] animate-pulse"></span>
              <span>Available for Senior Frontend & React Native Roles</span>
            </div>
            <h3 class="text-2xl sm:text-3xl md:text-4xl font-display text-[#0D0D0D] tracking-tight">
              Looking to build high-impact <span class="italic text-[#556B2F]">digital products</span>?
            </h3>
            <p class="text-[#4A4845] text-sm md:text-base font-sans max-w-xl mt-2 leading-relaxed">
              Open to UK/Germany relocation, US/EU remote roles, and high-growth engineering teams in Fintech, Web3, SaaS, and Mobility.
            </p>
          </div>

          <div class="flex flex-wrap items-center justify-center gap-3">
            <button
              @click="toggleModal"
              class="scroll-btn-primary py-3 px-6 text-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <span>Start a Conversation</span>
            </button>

            <a
              href="https://docs.google.com/document/d/1ZgPdnedCb9-ziI0U1D7t9by6VhxMmkMF4eXwTlEFrM8/edit#heading=h.y7d3xdxnr44m"
              target="_blank"
              class="scroll-btn-secondary py-3 px-6 text-sm"
            >
              <span>View Resume</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Contact Modal -->
    <Modal @closeModal="toggleModal" v-if="showModal" />
  </section>
</template>
