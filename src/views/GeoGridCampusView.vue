<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import geogridLogo from "@/assets/geogrid-logo.svg";
import geogridOg from "@/assets/geogrid-o.png";
import Footer from "@/components/Footer.vue";

const router = useRouter();
const copied = ref(false);
const citationCopied = ref(false);

const liveUrl = "https://campus-navigator.kufreabasibassey.com/";
const docUrl = "https://docs.google.com/document/d/1V9p0f-V4UirUi0FOQOjz-3UEqWW8WiYcBZoLt0knlgk/edit?tab=t.0";

const activeTab = ref("overview"); // 'overview' | 'research' | 'architecture' | 'methodology'

const copyShareLink = async () => {
  try {
    const shareUrl = window.location.origin + "/geogrid";
    await navigator.clipboard.writeText(shareUrl);
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 2400);
  } catch {
    const input = document.createElement("input");
    input.value = window.location.origin + "/geogrid";
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 2400);
  }
};

const copyCitation = async () => {
  const citationText = `Bassey, K.-A. U. (2026). Design and Implementation of a Grid-Based Spatial Addressing and Navigation System Using Geocoding Techniques (B.Sc Project Proposal). Department of Geo-Informatics and Surveying, Faculty of Environmental Studies, University of Uyo, Nigeria.`;
  try {
    await navigator.clipboard.writeText(citationText);
    citationCopied.value = true;
    setTimeout(() => {
      citationCopied.value = false;
    }, 2400);
  } catch {
    citationCopied.value = true;
    setTimeout(() => {
      citationCopied.value = false;
    }, 2400);
  }
};

const goHomeProjects = () => {
  router.push("/").then(() => {
    setTimeout(() => {
      const el = document.getElementById("projects");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 150);
  });
};
</script>

<template>
  <div class="bg-[#F7F5F0] text-[#0D0D0D] min-h-screen relative selection:bg-[#556B2F] selection:text-white">
    <!-- Top Editorial Header -->
    <header class="sticky top-0 z-40 w-full bg-[#F7F5F0]/90 backdrop-blur-md border-b border-[#E8E4DF] transition-colors duration-300">
      <div class="container mx-auto px-4 lg:px-8 py-3.5 flex items-center justify-between">
        <!-- Back Navigation -->
        <button
          @click="goHomeProjects"
          class="group flex items-center gap-2.5 text-xs font-mono font-medium text-[#4A4845] hover:text-[#556B2F] transition-colors"
        >
          <span class="w-7 h-7 rounded-none bg-white border border-[#E8E4DF] group-hover:border-[#556B2F] flex items-center justify-center transition-colors shadow-xs">
            ←
          </span>
          <span>Back to Selected Work</span>
        </button>

        <!-- Right: Actions -->
        <div class="flex items-center gap-2 sm:gap-3">
          <button
            @click="copyShareLink"
            class="px-3 sm:px-4 py-2 bg-white hover:bg-[#FAF9F7] border border-[#E8E4DF] rounded-none text-xs font-mono font-medium text-[#0D0D0D] flex items-center gap-1.5 transition-all shadow-xs"
          >
            <svg v-if="!copied" xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 text-[#556B2F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 text-[#15803D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>{{ copied ? "Link Copied!" : "Share Page" }}</span>
          </button>

          <a
            :href="docUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden sm:inline-flex px-3.5 py-2 bg-white hover:bg-[#FAF9F7] border border-[#E8E4DF] hover:border-[#556B2F] text-[#0D0D0D] rounded-none text-xs font-mono font-medium items-center gap-1.5 transition-all shadow-xs"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 text-[#556B2F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
            <span>Research Paper Doc</span>
            <span class="text-[10px]">↗</span>
          </a>

          <a
            :href="liveUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="px-3.5 sm:px-5 py-2 bg-[#0D0D0D] hover:bg-[#556B2F] text-white rounded-none text-xs font-mono font-medium flex items-center gap-1.5 transition-all shadow-sm"
          >
            <span>Launch Web GIS</span>
            <span class="text-[10px] font-mono">↗</span>
          </a>
        </div>
      </div>
    </header>

    <!-- Main Content Stream -->
    <main class="relative z-10 py-12 sm:py-20 overflow-hidden">
      <!-- Ambient Grid Background -->
      <div class="absolute inset-0 scroll-grid-bg opacity-35 pointer-events-none"></div>
      <div class="absolute top-10 right-1/4 w-[500px] h-[500px] bg-[#556B2F]/[0.05] rounded-full blur-[140px] pointer-events-none"></div>
      <div class="absolute bottom-20 left-10 w-[450px] h-[450px] bg-[#15803D]/[0.035] rounded-full blur-[120px] pointer-events-none"></div>

      <div class="container mx-auto px-4 lg:px-8 max-w-6xl relative z-10">
        <!-- Hero Section -->
        <div class="mb-14">
          <!-- Chapter Tag -->
          <div class="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-[#E8E4DF] rounded-none text-xs font-mono text-[#7A756D] uppercase tracking-wider mb-5 shadow-xs">
            <span class="w-1.5 h-1.5 bg-[#556B2F] animate-pulse"></span>
            <span>SIDE QUEST // ACADEMIC RESEARCH & PRODUCTION WEB GIS</span>
          </div>

          <!-- Project Title & Subtitle -->
          <div class="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
            <div class="max-w-3xl">
              <div class="flex items-center gap-3 mb-3">
                <img :src="geogridLogo" alt="GeoGrid Campus Logo" class="w-10 h-10 object-contain rounded-none border border-[#E8E4DF] bg-white p-1" />
                <h1 class="text-3xl sm:text-4xl md:text-5xl font-display text-[#0D0D0D] tracking-tight leading-tight">
                  GeoGrid <span class="italic text-[#556B2F]">Campus</span>
                </h1>
              </div>
              <p class="text-base sm:text-lg text-[#3E3B36] font-serif leading-relaxed">
                Design and Implementation of a Grid-Based Spatial Addressing and Navigation System Using Geocoding Techniques
              </p>
            </div>

            <!-- Key Links Actions -->
            <div class="flex flex-wrap sm:flex-col items-start gap-2 shrink-0">
              <a
                :href="liveUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="scroll-btn-primary px-5 py-2.5 text-xs flex items-center gap-2 rounded-none shadow-sm"
              >
                <span>Launch Live Web GIS</span>
                <span class="font-mono">↗</span>
              </a>
              <a
                :href="docUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="scroll-btn-secondary px-5 py-2.5 text-xs flex items-center gap-2 rounded-none bg-white"
              >
                <span>Read B.Sc Research Doc</span>
                <span class="font-mono">↗</span>
              </a>
            </div>
          </div>

          <!-- Metadata Pill Bar -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-white border border-[#E8E4DF] font-mono text-xs shadow-xs">
            <div>
              <span class="text-[#7A756D] block text-[10px] uppercase">Role & Capacity</span>
              <span class="text-[#0D0D0D] font-bold">Creator & Lead Architect</span>
            </div>
            <div>
              <span class="text-[#7A756D] block text-[10px] uppercase">Academic Thesis</span>
              <span class="text-[#0D0D0D] font-bold">Dept of Geo-Informatics</span>
            </div>
            <div>
              <span class="text-[#7A756D] block text-[10px] uppercase">Institution</span>
              <span class="text-[#556B2F] font-bold">University of Uyo, Uyo</span>
            </div>
            <div>
              <span class="text-[#7A756D] block text-[10px] uppercase">Resolution & System</span>
              <span class="text-[#0D0D0D] font-bold">5m × 5m Discrete Grid</span>
            </div>
          </div>
        </div>

        <!-- Featured App Preview Banner -->
        <div class="mb-16 bg-white border border-[#E8E4DF] p-2 sm:p-3 shadow-lg">
          <div class="bg-[#0D0D0D] text-white px-4 py-2 border-b border-[#2A2A2A] flex items-center justify-between font-mono text-[11px]">
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 bg-[#FF5F56] inline-block"></span>
              <span class="w-2.5 h-2.5 bg-[#FFBD2E] inline-block"></span>
              <span class="w-2.5 h-2.5 bg-[#27C93F] inline-block"></span>
              <span class="ml-2 text-white/70">campus-navigator.kufreabasibassey.com — Spatial Wayfinding Engine</span>
            </div>
            <div class="hidden sm:flex items-center gap-3 text-white/60">
              <span>CRS: EPSG:4326 (WGS 84)</span>
              <span>•</span>
              <span class="text-[#27C93F] font-bold">SYSTEM ACTIVE</span>
            </div>
          </div>
          <div class="relative overflow-hidden bg-[#1A1A1A] group">
            <img
              :src="geogridOg"
              alt="GeoGrid Campus Web GIS Preview"
              class="w-full h-auto object-cover max-h-[520px] transition-transform duration-700 group-hover:scale-[1.01]"
              loading="eager"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>
            <div class="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3 text-white font-mono text-xs">
              <div class="flex items-center gap-2 bg-black/80 backdrop-blur-md px-3 py-1.5 border border-white/20">
                <span class="w-2 h-2 rounded-full bg-[#27C93F] animate-ping"></span>
                <span>Production Web GIS: Interactive GeoJSON Map Editor, Dual Geocoding & Dijkstra Routing</span>
              </div>
              <a
                :href="liveUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="px-3.5 py-1.5 bg-[#556B2F] hover:bg-[#6B8E23] text-white border border-white/20 text-xs font-bold transition-colors"
              >
                Inspect Live Platform ↗
              </a>
            </div>
          </div>
        </div>

        <!-- Section Navigation Tabs -->
        <div class="flex items-center border-b border-[#E8E4DF] mb-10 overflow-x-auto text-xs font-mono">
          <button
            @click="activeTab = 'overview'"
            :class="[
              'px-5 py-3 border-b-2 font-bold uppercase transition-all whitespace-nowrap',
              activeTab === 'overview'
                ? 'border-[#556B2F] text-[#556B2F] bg-white'
                : 'border-transparent text-[#7A756D] hover:text-[#0D0D0D]'
            ]"
          >
            01 // Problem & Overview
          </button>
          <button
            @click="activeTab = 'research'"
            :class="[
              'px-5 py-3 border-b-2 font-bold uppercase transition-all whitespace-nowrap',
              activeTab === 'research'
                ? 'border-[#556B2F] text-[#556B2F] bg-white'
                : 'border-transparent text-[#7A756D] hover:text-[#0D0D0D]'
            ]"
          >
            02 // Scientific Foundations
          </button>
          <button
            @click="activeTab = 'architecture'"
            :class="[
              'px-5 py-3 border-b-2 font-bold uppercase transition-all whitespace-nowrap',
              activeTab === 'architecture'
                ? 'border-[#556B2F] text-[#556B2F] bg-white'
                : 'border-transparent text-[#7A756D] hover:text-[#0D0D0D]'
            ]"
          >
            03 // Grid & Geocoding Engine
          </button>
          <button
            @click="activeTab = 'methodology'"
            :class="[
              'px-5 py-3 border-b-2 font-bold uppercase transition-all whitespace-nowrap',
              activeTab === 'methodology'
                ? 'border-[#556B2F] text-[#556B2F] bg-white'
                : 'border-transparent text-[#7A756D] hover:text-[#0D0D0D]'
            ]"
          >
            04 // PostGIS & System Architecture
          </button>
        </div>

        <!-- TAB 1: Problem & Overview -->
        <div v-if="activeTab === 'overview'" class="space-y-12">
          <!-- The Problem Statement Card -->
          <div class="bg-white border border-[#E8E4DF] p-6 sm:p-10 shadow-xs">
            <div class="text-[11px] font-mono text-[#556B2F] uppercase tracking-wider font-bold mb-3 flex items-center gap-2">
              <span class="w-2 h-2 bg-[#556B2F]"></span>
              <span>CHAPTER 1.2 ── STATEMENT OF THE SPATIAL PROBLEM</span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-display text-[#0D0D0D] mb-4">
              The Spatial Addressing Crisis in Developing Tertiary Institutions
            </h2>
            <div class="prose max-w-none text-sm text-[#4A4845] font-sans leading-relaxed space-y-4">
              <p>
                In emerging economies, conventional spatial addressing infrastructures falter due to rapid, informal physical expansion, absent house numbers, and inconsistent street naming. At the <strong>University of Uyo Main Campus</strong> (covering hundreds of hectares across Akwa Ibom State, Nigeria), students, faculty, emergency dispatchers, and first-time visitors are forced to rely on verbal instructions and physical landmarks.
              </p>
              <div class="p-4 bg-[#FAF9F7] border-l-2 border-[#556B2F] my-4 text-xs font-mono text-[#3E3B36]">
                <p class="font-bold text-[#0D0D0D] mb-1">Commercial Navigation Blindspot:</p>
                Global commercial navigation platforms (Google Maps, Apple Maps) excel at vehicular highway routing, but consistently fail within internal university micro-environments. They omit pedestrian walkways, courtyards, departmental annexes, and multi-entrance lecture theatres—rendering real-world navigation cumbersome and error-prone.
              </div>
              <p>
                <strong>GeoGrid Campus</strong> resolves this systemic breakdown by synthesizing principles from <strong>Geo-Informatics, Geodesy, and Software Engineering</strong>. By establishing an authoritative <strong>5 m × 5 m resolution discrete spatial grid</strong> across the campus terrain, every square meter of physical space is assigned an unambiguous, mathematically reproducible alphanumeric geocode identifier.
              </p>
            </div>
          </div>

          <!-- Research Aim & Objectives -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-white border border-[#E8E4DF] p-6 sm:p-8">
              <div class="text-[11px] font-mono text-[#556B2F] uppercase tracking-wider font-bold mb-2">
                CHAPTER 1.3 ── AIM OF THE STUDY
              </div>
              <h3 class="text-xl font-display text-[#0D0D0D] mb-3">
                Unified Institutional Spatial Referencing
              </h3>
              <p class="text-xs sm:text-sm text-[#4A4845] font-sans leading-relaxed">
                The primary aim is the conceptualization, mathematical modeling, and production deployment of an interactive grid-based spatial addressing and wayfinding Web GIS system, streamlining facility location, emergency response, and infrastructure management across the University of Uyo Main Campus.
              </p>
            </div>

            <div class="bg-white border border-[#E8E4DF] p-6 sm:p-8">
              <div class="text-[11px] font-mono text-[#556B2F] uppercase tracking-wider font-bold mb-2">
                CHAPTER 1.4 ── CORE OBJECTIVES
              </div>
              <ul class="space-y-2 text-xs font-sans text-[#3E3B36]">
                <li class="flex items-start gap-2">
                  <span class="text-[#556B2F] font-mono font-bold">01.</span>
                  <span>Develop a centralized PostGIS spatial database for campus boundaries, building footprints, and pathways.</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-[#556B2F] font-mono font-bold">02.</span>
                  <span>Partition the terrain into a continuous 5m × 5m grid with unique alphanumeric geocodes.</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-[#556B2F] font-mono font-bold">03.</span>
                  <span>Implement dual forward and reverse geocoding engines linked to geometric cell centroids.</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-[#556B2F] font-mono font-bold">04.</span>
                  <span>Architect a graph-theoretic routing module (Dijkstra / A*) for turn-by-turn pedestrian wayfinding.</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-[#556B2F] font-mono font-bold">05.</span>
                  <span>Deploy a production Web GIS interface featuring interactive GeoJSON polygon drafting and spatial querying.</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Multi-Domain Significance Matrix -->
          <div class="bg-white border border-[#E8E4DF] p-6 sm:p-8">
            <div class="text-[11px] font-mono text-[#556B2F] uppercase tracking-wider font-bold mb-4">
              CHAPTER 1.5 ── RESEARCH IMPACT & SIGNIFICANCE
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-sans">
              <div class="p-3.5 bg-[#FAF9F7] border border-[#E8E4DF]">
                <div class="font-bold text-[#0D0D0D] font-mono text-[11px] mb-1 text-[#556B2F]">Academic & Surveying</div>
                <p class="text-[#4A4845]">Exemplifies modern surveyor competencies—transforming raw geodetic measurements into scalable digital spatial intelligence for smart city governance.</p>
              </div>
              <div class="p-3.5 bg-[#FAF9F7] border border-[#E8E4DF]">
                <div class="font-bold text-[#0D0D0D] font-mono text-[11px] mb-1 text-[#556B2F]">Emergency & Logistics</div>
                <p class="text-[#4A4845]">Enables ambulance, fire, and security squads to navigate to exact 5m grid coordinates, slashing critical arrival latency during incidents.</p>
              </div>
              <div class="p-3.5 bg-[#FAF9F7] border border-[#E8E4DF]">
                <div class="font-bold text-[#0D0D0D] font-mono text-[11px] mb-1 text-[#556B2F]">Institutional Governance</div>
                <p class="text-[#4A4845]">Serves as a centralized infrastructure ledger for facility maintenance, utility mapping, room scheduling, and capital expansion planning.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- TAB 2: Scientific Foundations -->
        <div v-if="activeTab === 'research'" class="space-y-10">
          <div class="bg-white border border-[#E8E4DF] p-6 sm:p-10 shadow-xs">
            <div class="text-[11px] font-mono text-[#556B2F] uppercase tracking-wider font-bold mb-3 flex items-center gap-2">
              <span class="w-2 h-2 bg-[#556B2F]"></span>
              <span>CHAPTER 2.2 ── THEORETICAL FRAMEWORK</span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-display text-[#0D0D0D] mb-4">
              The Three Mathematical Pillars of GeoGrid Campus
            </h2>
            <p class="text-sm text-[#4A4845] font-sans leading-relaxed mb-8">
              Rather than a superficial UI skin, GeoGrid Campus is anchored on foundational spatial science principles, ensuring computational rigor, optimal routing, and sub-millisecond database queries.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <!-- Pillar 1 -->
              <div class="border border-[#E8E4DF] p-5 bg-[#FAF9F7] flex flex-col justify-between">
                <div>
                  <div class="w-8 h-8 bg-[#0D0D0D] text-white font-mono font-bold text-xs flex items-center justify-center mb-3">
                    01
                  </div>
                  <h4 class="font-display text-lg text-[#0D0D0D] mb-2">Tobler's First Law of Geography</h4>
                  <div class="text-xs font-serif italic text-[#556B2F] mb-3">
                    “Everything is related to everything else, but near things are more related than distant things.” (Tobler, 1970)
                  </div>
                  <p class="text-xs text-[#4A4845] font-sans leading-relaxed">
                    Provides the scientific premise that buildings, roads, and facilities located in adjoining 5m cells exhibit high spatial dependency. This proximity logic powers our neighborhood searches, nearest-facility lookups, and clustering algorithms.
                  </p>
                </div>
                <div class="mt-4 pt-3 border-t border-[#E8E4DF] text-[10px] font-mono text-[#7A756D]">
                  Application: Proximity Clustering & Buffers
                </div>
              </div>

              <!-- Pillar 2 -->
              <div class="border border-[#E8E4DF] p-5 bg-[#FAF9F7] flex flex-col justify-between">
                <div>
                  <div class="w-8 h-8 bg-[#0D0D0D] text-white font-mono font-bold text-xs flex items-center justify-center mb-3">
                    02
                  </div>
                  <h4 class="font-display text-lg text-[#0D0D0D] mb-2">Graph Theory & Network Analysis</h4>
                  <div class="text-xs font-serif italic text-[#556B2F] mb-3">
                    $G = (V, E)$ — Vertices as Intersections, Edges as Pedestrian Walkways
                  </div>
                  <p class="text-xs text-[#4A4845] font-sans leading-relaxed">
                    Campus transit isn't a straight line. By modeling pedestrian walkways, steps, and roads as a weighted directed graph, the system deploys <strong>Dijkstra's Algorithm</strong> and the <strong>A* (A-Star)</strong> heuristic to calculate true topological walking routes.
                  </p>
                </div>
                <div class="mt-4 pt-3 border-t border-[#E8E4DF] text-[10px] font-mono text-[#7A756D]">
                  Application: Optimal Path Computation
                </div>
              </div>

              <!-- Pillar 3 -->
              <div class="border border-[#E8E4DF] p-5 bg-[#FAF9F7] flex flex-col justify-between">
                <div>
                  <div class="w-8 h-8 bg-[#0D0D0D] text-white font-mono font-bold text-xs flex items-center justify-center mb-3">
                    03
                  </div>
                  <h4 class="font-display text-lg text-[#0D0D0D] mb-2">Spatial Indexing Theory</h4>
                  <div class="text-xs font-serif italic text-[#556B2F] mb-3">
                    R-Tree, Quad-Tree & Uniform Grid Partitioning
                  </div>
                  <p class="text-xs text-[#4A4845] font-sans leading-relaxed">
                    Eliminates slow, full-table scans. By indexing geometries into discrete 5m cells with PostGIS GiST indexes, spatial queries (point-in-polygon, ray casting, intersection) operate in logarithmic time $O(\log N)$.
                  </p>
                </div>
                <div class="mt-4 pt-3 border-t border-[#E8E4DF] text-[10px] font-mono text-[#7A756D]">
                  Application: Sub-Millisecond Spatial Queries
                </div>
              </div>
            </div>
          </div>

          <!-- Academic Literature Review & Gap Analysis -->
          <div class="bg-white border border-[#E8E4DF] p-6 sm:p-8">
            <div class="text-[11px] font-mono text-[#556B2F] uppercase tracking-wider font-bold mb-3">
              CHAPTER 2.1.10 ── RESEARCH GAP RESOLUTION
            </div>
            <h3 class="text-xl font-display text-[#0D0D0D] mb-4">
              Addressing Global Limitations in Localized Navigation
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-[#4A4845] font-sans leading-relaxed">
              <div class="p-4 bg-[#FAF9F7] border border-[#E8E4DF]">
                <div class="font-bold text-[#0D0D0D] mb-1 font-mono">Existing Global Addressing (what3words / Plus Codes):</div>
                While platforms like what3words (3m squares) and Google Plus Codes offer global indexing, they are purely alphanumeric coordinates devoid of localized semantic context. They do not model internal institutional topologies, building entrances, or departmental hierarchies.
              </div>
              <div class="p-4 bg-[#FAF9F7] border border-[#E8E4DF]">
                <div class="font-bold text-[#0D0D0D] mb-1 font-mono">The GeoGrid Campus Advantage:</div>
                GeoGrid combines mathematical 5m grid indexing with localized institutional ontology: associating every cell directly with official university nomenclature, departments, faculties, floor levels, and verifiable pedestrian networks.
              </div>
            </div>
          </div>
        </div>

        <!-- TAB 3: Grid & Geocoding Engine -->
        <div v-if="activeTab === 'architecture'" class="space-y-10">
          <!-- The 5m x 5m Grid Architecture -->
          <div class="bg-white border border-[#E8E4DF] p-6 sm:p-10 shadow-xs">
            <div class="text-[11px] font-mono text-[#556B2F] uppercase tracking-wider font-bold mb-3 flex items-center gap-2">
              <span class="w-2 h-2 bg-[#556B2F]"></span>
              <span>CHAPTER 3.6 ── GRID GENERATION & GEOCODE TAXONOMY</span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-display text-[#0D0D0D] mb-4">
              The 5m × 5m Grid Addressing Framework
            </h2>
            <p class="text-sm text-[#4A4845] font-sans leading-relaxed mb-6">
              The selection of a <strong>5 m by 5 m resolution</strong> achieves the golden ratio between positional accuracy and computational database efficiency. A 1m grid would exponentially inflate polygon storage and memory overhead; a 20m grid would be too coarse for distinct campus doorways.
            </p>

            <!-- Geocode Anatomy Breakdown Box -->
            <div class="bg-[#FAF9F7] border border-[#E8E4DF] p-6 mb-8 font-mono">
              <div class="text-[11px] text-[#7A756D] uppercase tracking-wider mb-2 font-bold">Standard Geocode Syntax:</div>
              <div class="text-2xl sm:text-3xl text-[#0D0D0D] font-bold tracking-wider mb-4 text-[#556B2F]">
                UNIUYO-MC-A01
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs pt-4 border-t border-[#E8E4DF]">
                <div>
                  <span class="text-[#7A756D] block text-[10px]">ZONE / CAMPUS</span>
                  <strong class="text-[#0D0D0D]">UNIUYO-MC</strong>
                  <span class="text-[#4A4845] block text-[11px] mt-0.5">University of Uyo Main Campus</span>
                </div>
                <div>
                  <span class="text-[#7A756D] block text-[10px]">HORIZONTAL ROW</span>
                  <strong class="text-[#0D0D0D]">A, B, C...</strong>
                  <span class="text-[#4A4845] block text-[11px] mt-0.5">Latitudinal coordinate band</span>
                </div>
                <div>
                  <span class="text-[#7A756D] block text-[10px]">VERTICAL COLUMN</span>
                  <strong class="text-[#0D0D0D]">01, 02, 03...</strong>
                  <span class="text-[#4A4845] block text-[11px] mt-0.5">Longitudinal coordinate unit</span>
                </div>
              </div>
            </div>

            <!-- Dual Geocoding Operational Framework -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="border border-[#E8E4DF] p-5 bg-white">
                <div class="text-xs font-mono font-bold text-[#556B2F] uppercase mb-2">FORWARD GEOCODING</div>
                <h4 class="font-display text-lg text-[#0D0D0D] mb-2">Name to Grid Coordinate</h4>
                <p class="text-xs text-[#4A4845] font-sans leading-relaxed mb-3">
                  A user queries “Faculty of Environmental Studies” or “Onyema Ugochukwu Hall”. The system queries the PostGIS database, retrieves the polygon centroid coordinates, and highlights the corresponding grid cells.
                </p>
                <div class="bg-[#FAF9F7] p-2.5 font-mono text-[11px] text-[#3E3B36] border border-[#E8E4DF]">
                  Query: "Main Library" → returns UNIUYO-MC-A01 (Lat: 5.0341°N, Lon: 7.9821°E)
                </div>
              </div>

              <div class="border border-[#E8E4DF] p-5 bg-white">
                <div class="text-xs font-mono font-bold text-[#556B2F] uppercase mb-2">REVERSE GEOCODING</div>
                <h4 class="font-display text-lg text-[#0D0D0D] mb-2">Coordinate to Spatial Geocode</h4>
                <p class="text-xs text-[#4A4845] font-sans leading-relaxed mb-3">
                  A user taps anywhere on the interactive campus map or transmits GPS coordinates. The system executes an instant point-in-polygon query, detecting the enclosing cell and displaying its official geocode and facility metadata.
                </p>
                <div class="bg-[#FAF9F7] p-2.5 font-mono text-[11px] text-[#3E3B36] border border-[#E8E4DF]">
                  Point(7.9821, 5.0341) → Enclosing Cell: UNIUYO-MC-A01 (Centroid Match)
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- TAB 4: PostGIS & System Architecture -->
        <div v-if="activeTab === 'methodology'" class="space-y-10">
          <!-- 4-Tier System Architecture -->
          <div class="bg-white border border-[#E8E4DF] p-6 sm:p-10 shadow-xs">
            <div class="text-[11px] font-mono text-[#556B2F] uppercase tracking-wider font-bold mb-3 flex items-center gap-2">
              <span class="w-2 h-2 bg-[#556B2F]"></span>
              <span>CHAPTER 3.10 ── MULTI-TIER SYSTEM ARCHITECTURE</span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-display text-[#0D0D0D] mb-4">
              Full-Stack Geospatial Engineering Stack
            </h2>
            <p class="text-sm text-[#4A4845] font-sans leading-relaxed mb-8">
              The platform decouples data persistence, analytical geoprocessing, and reactive web visualization across four resilient layers.
            </p>

            <div class="space-y-4 font-mono text-xs">
              <!-- Tier 1 -->
              <div class="p-4 border border-[#E8E4DF] bg-[#FAF9F7]">
                <div class="flex items-center justify-between mb-1.5">
                  <span class="text-[#556B2F] font-bold">TIER 1: PRESENTATION & INTERACTION LAYER</span>
                  <span class="text-[#7A756D]">React • Vite • Tailwind CSS • TanStack Router</span>
                </div>
                <p class="text-[#4A4845] font-sans text-xs">
                  Responsive Web GIS user interface featuring fuzzy natural language search, GeoJSON polygon drawing tools, layer switcher, and accessible turn-by-turn guidance.
                </p>
              </div>

              <!-- Tier 2 -->
              <div class="p-4 border border-[#E8E4DF] bg-[#FAF9F7]">
                <div class="flex items-center justify-between mb-1.5">
                  <span class="text-[#556B2F] font-bold">TIER 2: COMPUTATIONAL APPLICATION LOGIC LAYER</span>
                  <span class="text-[#7A756D]">Dijkstra Engine • A* Heuristic • Geocoding API</span>
                </div>
                <p class="text-[#4A4845] font-sans text-xs">
                  Executes forward/reverse coordinate transformations, graph traversal for shortest pedestrian paths, centroid calculations, and GeoJSON serialization.
                </p>
              </div>

              <!-- Tier 3 -->
              <div class="p-4 border border-[#E8E4DF] bg-[#FAF9F7]">
                <div class="flex items-center justify-between mb-1.5">
                  <span class="text-[#556B2F] font-bold">TIER 3: GEOSPATIAL DATABASE REPOSITORY LAYER</span>
                  <span class="text-[#7A756D]">PostgreSQL • PostGIS Extension • GiST Indexing</span>
                </div>
                <p class="text-[#4A4845] font-sans text-xs">
                  Houses core relational entities: Grid Referencing Table (cell geometry + centroids), Campus Buildings Footprints, Transportation Network (edges/nodes), and Institutional Points of Interest.
                </p>
              </div>

              <!-- Tier 4 -->
              <div class="p-4 border border-[#E8E4DF] bg-[#FAF9F7]">
                <div class="flex items-center justify-between mb-1.5">
                  <span class="text-[#556B2F] font-bold">TIER 4: CARTOGRAPHIC VISUALIZATION LAYER</span>
                  <span class="text-[#7A756D]">Mapbox GL JS • Leaflet • Vector Tiles</span>
                </div>
                <p class="text-[#4A4845] font-sans text-xs">
                  Renders high-DPI vector tiles, raster satellite basemaps, dynamic route polylines, and interactive 2D building extrusion overlays with zero layout thrashing.
                </p>
              </div>
            </div>
          </div>

          <!-- Academic Deliverables & Citation Block -->
          <div class="bg-white border border-[#E8E4DF] p-6 sm:p-8">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <div>
                <div class="text-[11px] font-mono text-[#556B2F] uppercase tracking-wider font-bold">
                  CHAPTER 3.14 ── ACADEMIC CITATION & PROPOSAL DATA
                </div>
                <h3 class="text-xl font-display text-[#0D0D0D]">Official Research Reference</h3>
              </div>
              <button
                @click="copyCitation"
                class="px-3.5 py-1.5 bg-[#FAF9F7] hover:bg-[#E8E4DF] border border-[#E8E4DF] text-xs font-mono text-[#0D0D0D] flex items-center gap-1.5 transition-colors self-start"
              >
                <span>{{ citationCopied ? "Citation Copied!" : "Copy Citation" }}</span>
              </button>
            </div>

            <div class="p-4 bg-[#FAF9F7] border-l-2 border-[#556B2F] font-mono text-xs text-[#3E3B36] leading-relaxed">
              Bassey, K.-A. U. (2026). <em>Design and Implementation of a Grid-Based Spatial Addressing and Navigation System Using Geocoding Techniques</em> (B.Sc Project Proposal). Department of Geo-Informatics and Surveying, Faculty of Environmental Studies, University of Uyo, Uyo, Nigeria.
            </div>

            <div class="mt-6 flex flex-wrap gap-3">
              <a
                :href="docUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="scroll-btn-primary px-5 py-2.5 text-xs flex items-center gap-2 rounded-none"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                </svg>
                <span>Open Full Research Document (Google Docs)</span>
                <span class="font-mono">↗</span>
              </a>

              <a
                :href="liveUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="scroll-btn-secondary px-5 py-2.5 text-xs flex items-center gap-2 rounded-none bg-white"
              >
                <span>Experience Live Interactive Map</span>
                <span class="font-mono">↗</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Bottom Action CTA -->
        <div class="mt-16 p-8 bg-white border border-[#E8E4DF] text-center shadow-sm">
          <h3 class="text-2xl font-display text-[#0D0D0D] mb-2">
            Explore the Live Spatial Platform
          </h3>
          <p class="text-sm font-sans text-[#4A4845] max-w-xl mx-auto mb-6">
            Test the interactive 5m grid overlay, search campus lecture halls by name or geocode, and preview turn-by-turn routing directly in your browser.
          </p>
          <div class="flex items-center justify-center gap-3 flex-wrap">
            <a
              :href="liveUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="scroll-btn-primary px-6 py-3 text-xs flex items-center gap-2 rounded-none font-mono"
            >
              <span>Launch GeoGrid Campus App</span>
              <span>→</span>
            </a>
            <button
              @click="goHomeProjects"
              class="scroll-btn-secondary px-6 py-3 text-xs flex items-center gap-2 rounded-none font-mono bg-white"
            >
              <span>Explore Other Projects</span>
            </button>
          </div>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<style scoped>
/* Sharp architectural styling */
</style>
