<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useRoute, RouterLink } from "vue-router";
import { eventsList, eventCategories, resolveEventImage, getAllEventImages, getImageOrientation } from "@/data/eventsData";
import Footer from "@/components/Footer.vue";

const route = useRoute();

// State
const activeCategory = ref("all");
const searchQuery = ref("");
const clusterMode = ref("all-cluster"); // 'all-cluster' | 'by-event'
const activeLightbox = ref(false);
const activePhoto = ref(null);
const currentPhotoIndex = ref(0);
const activeEvent = ref(eventsList[0]);

// Collect all photos into a single rich flat cluster
const allPhotos = computed(() => {
  const items = [];
  let globalIdx = 0;
  eventsList.forEach((ev) => {
    (ev.gallery || []).forEach((photo, pIdx) => {
      items.push({
        event: ev,
        photo,
        pIdx,
        globalIdx,
        url: resolveEventImage(photo.path),
        orientation: getImageOrientation(photo.path),
        // Orientation-aware cluster span class
        spanClass: getClusterSpan(photo, globalIdx),
      });
      globalIdx++;
    });
  });
  return items;
});

// Dynamic spans for the photo cluster: orientation-aware and dense without gaps
function getClusterSpan(photo, index) {
  const orientation = getImageOrientation(photo.path);

  if (orientation === "portrait") {
    // True vertical portrait: spans 2 rows for natural portrait ratio
    // Every 5th portrait stays 1x1 to create variation without creating gaps
    if (index % 5 === 0) {
      return "col-span-1 row-span-1";
    }
    return "col-span-1 row-span-2";
  }

  if (orientation === "landscape") {
    // True horizontal landscape
    // Every 8th landscape becomes a 2x2 featured focal point
    if (index % 8 === 0) {
      return "col-span-2 row-span-2";
    }
    // Every 3rd landscape spans 2 columns wide
    if (index % 3 === 0) {
      return "col-span-2 row-span-1";
    }
    // Standard unit cell
    return "col-span-1 row-span-1";
  }

  // Square or balanced
  if (index % 6 === 0) {
    return "col-span-2 row-span-2";
  }
  return "col-span-1 row-span-1";
}

// Orientation-aware spans for By-Event mini clusters
function getEventPhotoSpan(photo, pIdx, totalPhotos) {
  const orientation = getImageOrientation(photo.path);

  if (totalPhotos <= 2) {
    return orientation === "portrait"
      ? "col-span-1 sm:col-span-3 row-span-2"
      : "col-span-1 sm:col-span-3 row-span-2";
  }

  if (totalPhotos <= 4) {
    if (pIdx === 0) {
      return orientation === "portrait"
        ? "col-span-1 sm:col-span-2 row-span-2"
        : "col-span-2 sm:col-span-3 row-span-2";
    }
    return orientation === "portrait" ? "col-span-1 row-span-2" : "col-span-1 sm:col-span-2 row-span-1";
  }

  if (pIdx === 0) {
    return orientation === "portrait" ? "col-span-2 row-span-2" : "col-span-2 sm:col-span-3 row-span-2";
  }

  if (orientation === "portrait") {
    return pIdx % 4 === 0 ? "col-span-1 row-span-1" : "col-span-1 row-span-2";
  }

  if (orientation === "landscape") {
    return pIdx % 3 === 0 ? "col-span-2 row-span-1" : "col-span-1 row-span-1";
  }

  return "col-span-1 row-span-1";
}

// Filtered photos for the Mega Cluster
const filteredPhotos = computed(() => {
  return allPhotos.value.filter((item) => {
    const matchesCat = activeCategory.value === "all" || item.event.category === activeCategory.value;
    const q = searchQuery.value.trim().toLowerCase();
    if (!q) return matchesCat;

    const matchesQuery =
      item.event.title.toLowerCase().includes(q) ||
      item.photo.caption.toLowerCase().includes(q) ||
      item.event.role.toLowerCase().includes(q) ||
      item.event.location.toLowerCase().includes(q)
      // item.event.year.includes(q);

    return matchesCat && matchesQuery;
  });
});

// Filtered events for By-Event Clusters
const filteredEvents = computed(() => {
  return eventsList.filter((ev) => {
    const matchesCat = activeCategory.value === "all" || ev.category === activeCategory.value;
    const q = searchQuery.value.trim().toLowerCase();
    if (!q) return matchesCat;

    const matchesQuery =
      ev.title.toLowerCase().includes(q) ||
      ev.role.toLowerCase().includes(q) ||
      ev.location.toLowerCase().includes(q) ||
      ev.headline.toLowerCase().includes(q) ||
      ev.summary.toLowerCase().includes(q)
      // ev.year.includes(q);

    return matchesCat && matchesQuery;
  });
});

// Lightbox
const openLightboxForPhoto = (photoItem) => {
  activeEvent.value = photoItem.event;
  currentPhotoIndex.value = photoItem.pIdx;
  activePhoto.value = photoItem;
  activeLightbox.value = true;
  document.body.style.overflow = "hidden";
};

const openLightboxForEvent = (eventObj, pIdx = 0) => {
  activeEvent.value = eventObj;
  currentPhotoIndex.value = pIdx;
  activePhoto.value = {
    event: eventObj,
    photo: eventObj.gallery[pIdx],
    pIdx,
    url: resolveEventImage(eventObj.gallery[pIdx]?.path),
  };
  activeLightbox.value = true;
  document.body.style.overflow = "hidden";
};

const closeLightbox = () => {
  activeLightbox.value = false;
  document.body.style.overflow = "";
};

const nextPhoto = () => {
  if (!activeEvent.value?.gallery?.length) return;
  currentPhotoIndex.value = (currentPhotoIndex.value + 1) % activeEvent.value.gallery.length;
  activePhoto.value = {
    event: activeEvent.value,
    photo: activeEvent.value.gallery[currentPhotoIndex.value],
    pIdx: currentPhotoIndex.value,
    url: resolveEventImage(activeEvent.value.gallery[currentPhotoIndex.value]?.path),
  };
};

const prevPhoto = () => {
  if (!activeEvent.value?.gallery?.length) return;
  currentPhotoIndex.value =
    (currentPhotoIndex.value - 1 + activeEvent.value.gallery.length) % activeEvent.value.gallery.length;
  activePhoto.value = {
    event: activeEvent.value,
    photo: activeEvent.value.gallery[currentPhotoIndex.value],
    pIdx: currentPhotoIndex.value,
    url: resolveEventImage(activeEvent.value.gallery[currentPhotoIndex.value]?.path),
  };
};

// Keyboard navigation
const handleKeyDown = (e) => {
  if (!activeLightbox.value) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowRight") nextPhoto();
  if (e.key === "ArrowLeft") prevPhoto();
};

onMounted(() => {
  window.addEventListener("keydown", handleKeyDown);

  // Check URL query param for specific event jump
  if (route.query.event) {
    const target = eventsList.find((e) => e.id === route.query.event);
    if (target) {
      clusterMode.value = "by-event";
      setTimeout(() => {
        const el = document.getElementById(`cluster-${target.id}`);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 200);
    }
  }
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleKeyDown);
  document.body.style.overflow = "";
});
</script>

<template>
  <div class="bg-[#F7F5F0] text-[#0D0D0D] min-h-screen relative selection:bg-[#556B2F] selection:text-white">
    <!-- Top Editorial Header (Sharp) -->
    <header class="sticky top-0 z-40 w-full bg-[#F7F5F0]/90 backdrop-blur-md border-b border-[#E8E4DF] transition-colors duration-300">
      <!-- Top Ticker Bar -->
      <div class="hidden md:flex justify-between items-center px-6 lg:px-10 py-1.5 bg-[#FAF9F7] border-b border-[#E8E4DF] text-[11px] font-mono text-[#7A756D]">
        <div class="flex items-center gap-4">
          <span class="inline-flex items-center gap-1.5 text-[#15803D] font-medium">
            <span class="w-1.5 h-1.5 bg-[#15803D] animate-pulse"></span>
            <span>PUBLIC ARCHIVE • EVENT PHOTO CLUSTERS</span>
          </span>
          <span class="text-[#D6D0C7]">/</span>
          <span>KEYNOTES</span>
          <span class="text-[#D6D0C7]">/</span>
          <span>WORKSHOPS</span>
          <span class="text-[#D6D0C7]">/</span>
          <span>ICP.HUB</span>
        </div>
        <div class="flex items-center gap-4">
          <span>{{ eventsList.length }} MAJOR STAGES</span>
          <span class="text-[#D6D0C7]">/</span>
          <span class="text-[#0D0D0D] font-bold">{{ allPhotos.length }} PHOTOS IN CLUSTER</span>
        </div>
      </div>

      <!-- Navigation Bar -->
      <div class="container mx-auto px-4 lg:px-8 py-3.5 flex items-center justify-between">
        <!-- Back to Portfolio -->
        <RouterLink
          to="/"
          class="group flex items-center gap-3 cursor-pointer text-[#0D0D0D] hover:text-[#556B2F] transition-colors"
        >
          <div class="w-8 h-8 bg-[#0D0D0D] text-white flex items-center justify-center font-display text-sm font-semibold group-hover:bg-[#556B2F] transition-colors rounded-none shadow-xs">
            KB
          </div>
          <div class="flex flex-col">
            <div class="flex items-center gap-2">
              <span class="text-xs font-mono text-[#556B2F]">←</span>
              <span class="font-sans font-bold text-sm tracking-tight">Return to Portfolio</span>
            </div>
            <span class="text-[10px] font-mono text-[#7A756D]">Kufre-Abasi Bassey</span>
          </div>
        </RouterLink>

        <!-- Right: Cluster Layout Switcher -->
        <div class="flex items-center gap-3">
          <div class="flex items-center bg-white border border-[#E8E4DF] p-1 text-xs font-mono rounded-none">
            <button
              @click="clusterMode = 'all-cluster'"
              :class="[
                'px-3 py-1.5 transition-colors rounded-none',
                clusterMode === 'all-cluster' ? 'bg-[#0D0D0D] text-white font-bold' : 'text-[#7A756D] hover:text-[#0D0D0D]'
              ]"
            >
              Unified Photo Cluster ({{ allPhotos.length }})
            </button>
            <button
              @click="clusterMode = 'by-event'"
              :class="[
                'px-3 py-1.5 transition-colors rounded-none',
                clusterMode === 'by-event' ? 'bg-[#0D0D0D] text-white font-bold' : 'text-[#7A756D] hover:text-[#0D0D0D]'
              ]"
            >
              Clusters by Event
            </button>
          </div>

          <a
            href="mailto:kufreabasibassey3@gmail.com?subject=Speaking%20Invitation"
            class="scroll-btn-primary text-xs py-2 px-4 rounded-none hidden sm:inline-flex"
          >
            <span>Book to Speak ↗</span>
          </a>
        </div>
      </div>
    </header>

    <!-- Hero Header -->
    <section class="py-12 md:py-16 relative border-b border-[#E8E4DF] overflow-hidden">
      <div class="absolute inset-0 scroll-grid-bg opacity-30 pointer-events-none"></div>

      <div class="container mx-auto px-4 lg:px-8 relative z-10 max-w-4xl text-center">
        <div class="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-[#E8E4DF] text-xs font-mono text-[#7A756D] uppercase tracking-wider mb-4 rounded-none shadow-xs">
          <span class="w-1.5 h-1.5 bg-[#556B2F] animate-pulse"></span>
          <span>Photographic Cluster Mosaic • Hover to reveal color</span>
        </div>

        <h1 class="text-4xl sm:text-5xl md:text-6xl font-display text-[#0D0D0D] tracking-tight mb-4 leading-tight">
          Speaking & <span class="italic text-[#556B2F]">Event Clusters</span>
        </h1>

        <p class="text-[#4A4845] font-sans text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-8">
          A raw, tightly clustered archive of stage keynotes, technical code labs, competitive algorithms judging, and developer community sessions. Hover over any image in the cluster to inspect its color and story.
        </p>

        <!-- Search & Filter Bar (Sharp) -->
        <div class="bg-white border border-[#E8E4DF] p-3 shadow-xs flex flex-col md:flex-row items-center gap-3 text-left rounded-none">
          <div class="relative w-full md:w-64 shrink-0">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search cluster photos..."
              class="w-full pl-9 pr-3 py-2 bg-[#FAF9F7] border border-[#E8E4DF] text-xs font-mono text-[#0D0D0D] placeholder-[#A8A49D] focus:border-[#556B2F] focus:bg-white outline-none rounded-none"
            />
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 absolute left-2.5 top-1/2 -translate-y-1/2 text-[#7A756D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <div class="flex flex-wrap items-center gap-1.5 w-full">
            <button
              v-for="cat in eventCategories"
              :key="cat.id"
              @click="activeCategory = cat.id"
              :class="[
                'px-3 py-1.5 text-xs font-mono transition-colors border rounded-none',
                activeCategory === cat.id
                  ? 'bg-[#0D0D0D] text-white border-[#0D0D0D]'
                  : 'bg-[#FAF9F7] text-[#4A4845] border-[#E8E4DF] hover:border-[#556B2F] hover:text-[#0D0D0D]'
              ]"
            >
              {{ cat.label }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- VIEW 1: UNIFIED PHOTO CLUSTER MOSAIC (NO CARDS - PURE TIGHT IMAGE CLUSTER) -->
    <main v-if="clusterMode === 'all-cluster'" class="container mx-auto px-2 sm:px-4 lg:px-8 py-10 max-w-7xl">
      <div v-if="filteredPhotos.length === 0" class="text-center py-20 bg-white border border-[#E8E4DF] p-10 font-mono text-sm text-[#7A756D] rounded-none">
        No images in cluster matched "{{ searchQuery }}".
      </div>

      <!-- TIGHTLY CLUSTERED IMAGE MOSAIC GRID (Dense packing with zero gaps) -->
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 auto-rows-[140px] sm:auto-rows-[160px] md:auto-rows-[175px] lg:auto-rows-[190px] grid-flow-dense gap-1.5 bg-[#E8E4DF] p-1.5 border border-[#E8E4DF]">
        <div
          v-for="(item, idx) in filteredPhotos"
          :key="idx"
          @click="openLightboxForPhoto(item)"
          :class="[
            'group relative overflow-hidden bg-[#0D0D0D] cursor-pointer transition-all duration-500',
            item.spanClass
          ]"
        >
          <!-- The Cluster Image (Black & White by default, Full Color on hover) -->
          <img
            :src="item.url"
            :alt="item.event.title + ' — ' + item.photo.caption"
            class="w-full h-full object-cover transition-all duration-700 ease-out filter grayscale contrast-115 brightness-95 group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 group-hover:scale-105"
            loading="lazy"
          />

          <!-- Cluster Hover Vignette -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

          <!-- Hover Details Pill right on the image -->
          <div class="absolute bottom-2 left-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <div class="p-2 bg-black/90 text-white border border-white/20 backdrop-blur-md">
              <div class="flex items-center justify-between text-[10px] font-mono text-[#556B2F] font-bold mb-0.5">
                <span>{{ item.event.shortName }}</span>
                <!-- <span class="text-white/60">{{ item.event.year }}</span> -->
              </div>
              <div class="text-xs font-sans font-semibold text-white truncate">
                {{ item.photo.caption }}
              </div>
              <div class="text-[10px] font-mono text-white/70 mt-1 flex items-center gap-1">
                <span class="w-1.5 h-1.5 bg-[#15803D]"></span>
                <span>Click to inspect full story</span>
              </div>
            </div>
          </div>

          <!-- Micro Index Corner Tag -->
          <div class="absolute top-1 left-1 z-10 opacity-60 group-hover:opacity-100 transition-opacity">
            <span class="px-1.5 py-0.5 bg-black/80 text-white font-mono text-[9px] border border-white/15">
              #{{ String(idx + 1).padStart(2, '0') }}
            </span>
          </div>
        </div>
      </div>
    </main>

    <!-- VIEW 2: STORY CLUSTERS BY EVENT (TIGHT PHOTO CLUSTERS PAIRED WITH EVENT STORIES) -->
    <main v-else class="container mx-auto px-4 lg:px-8 py-12 max-w-6xl">
      <div class="space-y-16">
        <section
          v-for="(event, eIdx) in filteredEvents"
          :key="event.id"
          :id="`cluster-${event.id}`"
          class="bg-white border border-[#E8E4DF] p-6 sm:p-8 rounded-none shadow-sm"
        >
          <!-- Event Header Bar -->
          <div class="flex flex-wrap items-center justify-between gap-3 pb-3 mb-6 border-b border-[#E8E4DF] font-mono text-xs">
            <div class="flex items-center gap-2">
              <span class="px-2 py-0.5 bg-[#0D0D0D] text-white font-bold text-[11px] rounded-none">
                EVENT {{ String(eIdx + 1).padStart(2, '0') }}
              </span>
              <span class="text-[#556B2F] font-bold uppercase">{{ event.role }}</span>
            </div>
            <div class="flex items-center gap-3 text-[#7A756D]">
              <span>{{ event.location }}</span>
              <!-- <span>•</span>
              <span class="text-[#15803D] font-bold">{{ event.year }}</span> -->
            </div>
          </div>

          <!-- Headline & Narrative Split -->
          <div class="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
            <div class="md:col-span-8">
              <h2 class="text-2xl sm:text-3xl font-display text-[#0D0D0D] tracking-tight mb-2">
                {{ event.title }}
              </h2>
              <p class="text-sm font-serif italic text-[#556B2F] mb-3">
                “{{ event.headline }}”
              </p>
              <p class="text-xs sm:text-sm font-sans text-[#4A4845] leading-relaxed whitespace-pre-line">
                {{ event.story }}
              </p>
            </div>

            <div class="md:col-span-4 bg-[#FAF9F7] border border-[#E8E4DF] p-4 font-mono text-xs">
              <div class="text-[#556B2F] font-bold uppercase mb-2">AUDIENCE & STATS</div>
              <div class="text-[#0D0D0D] font-bold text-sm mb-3">{{ event.stats }}</div>
              <div class="text-[#7A756D] text-[11px]">
                {{ event.gallery?.length || 1 }} High-Resolution Images in this Cluster
              </div>
            </div>
          </div>

          <!-- THE EVENT'S TIGHT IMAGE CLUSTER (Dense packing without gaps) -->
          <div class="bg-[#E8E4DF] p-1 border border-[#E8E4DF] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 auto-rows-[130px] sm:auto-rows-[150px] md:auto-rows-[165px] grid-flow-dense gap-1">
            <div
              v-for="(photo, pIdx) in event.gallery"
              :key="pIdx"
              @click="openLightboxForEvent(event, pIdx)"
              :class="[
                'group relative overflow-hidden bg-[#0D0D0D] cursor-pointer transition-all duration-300',
                getEventPhotoSpan(photo, pIdx, event.gallery.length)
              ]"
            >
              <img
                :src="resolveEventImage(photo.path)"
                :alt="event.title + ' — ' + photo.caption"
                class="w-full h-full object-cover transition-all duration-500 filter grayscale contrast-115 group-hover:grayscale-0 group-hover:scale-105"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors"></div>

              <div class="absolute bottom-1.5 left-1.5 right-1.5 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <div class="p-1.5 bg-black/90 text-white text-[10px] font-sans truncate border border-white/20">
                  {{ photo.caption }}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>

    <!-- FULLSCREEN INTERACTIVE STORY LIGHTBOX MODAL -->
    <div
      v-if="activeLightbox && activeEvent"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-3 sm:p-6"
    >
      <div class="absolute inset-0 cursor-pointer" @click="closeLightbox"></div>

      <!-- Lightbox Shell (Sharp) -->
      <div class="relative z-10 w-full max-w-6xl max-h-[92vh] bg-[#0D0D0D] border border-white/20 text-white flex flex-col overflow-hidden shadow-2xl rounded-none">
        <!-- Lightbox Header -->
        <div class="px-5 py-3 border-b border-white/15 flex items-center justify-between bg-black/70 font-mono text-xs">
          <div class="flex items-center gap-3 truncate">
            <span class="w-2 h-2 bg-[#15803D] animate-ping"></span>
            <span class="font-bold tracking-wider text-[#EEF3E8] truncate">{{ activeEvent.title }}</span>
            <span class="text-white/40 hidden sm:inline">|</span>
            <span class="text-white/70 hidden sm:inline">{{ activeEvent.role }}</span>
          </div>

          <div class="flex items-center gap-3 shrink-0">
            <span class="text-white/60 text-[11px]">
              {{ currentPhotoIndex + 1 }} / {{ activeEvent.gallery?.length || 1 }}
            </span>
            <button
              @click="closeLightbox"
              class="px-2.5 py-1 bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-colors rounded-none"
            >
              ✕ ESC
            </button>
          </div>
        </div>

        <!-- Lightbox Content Split -->
        <div class="grid grid-cols-1 lg:grid-cols-12 flex-1 min-h-[400px] overflow-hidden">
          <!-- Photo Stage -->
          <div class="lg:col-span-8 relative bg-black flex items-center justify-center p-2 sm:p-4 overflow-hidden select-none">
            <img
              :src="resolveEventImage(activeEvent.gallery?.[currentPhotoIndex]?.path)"
              :alt="activeEvent.title + ' — ' + (activeEvent.gallery?.[currentPhotoIndex]?.caption || 'Photo')"
              class="max-h-[58vh] lg:max-h-[66vh] max-w-full object-contain shadow-2xl border border-white/10"
            />

            <!-- Prev / Next Controls (Sharp) -->
            <button
              @click.stop="prevPhoto"
              aria-label="Previous photo"
              class="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/85 hover:bg-[#556B2F] border border-white/20 text-white flex items-center justify-center transition-colors rounded-none shadow-lg"
            >
              ←
            </button>

            <button
              @click.stop="nextPhoto"
              aria-label="Next photo"
              class="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/85 hover:bg-[#556B2F] border border-white/20 text-white flex items-center justify-center transition-colors rounded-none shadow-lg"
            >
              →
            </button>
          </div>

          <!-- Narrative Dossier -->
          <div class="lg:col-span-4 bg-[#141414] border-t lg:border-t-0 lg:border-l border-white/15 p-5 sm:p-6 overflow-y-auto max-h-[35vh] lg:max-h-[66vh] flex flex-col justify-between">
            <div>
              <div class="text-[10px] font-mono text-[#556B2F] uppercase tracking-wider mb-2 font-bold">
                FRAME CAPTION
              </div>
              <h3 class="font-sans font-bold text-base sm:text-lg text-white mb-4 leading-snug">
                {{ activeEvent.gallery?.[currentPhotoIndex]?.caption }}
              </h3>

              <div class="text-[10px] font-mono text-white/50 uppercase tracking-wider mb-1 font-bold">
                STAGE NARRATIVE
              </div>
              <p class="font-sans text-xs sm:text-sm text-white/80 leading-relaxed mb-4 whitespace-pre-line">
                {{ activeEvent.story }}
              </p>

              <div class="p-3 bg-black/50 border border-white/10 mb-4 rounded-none">
                <div class="text-[10px] font-mono text-[#15803D] uppercase tracking-wider mb-1.5 font-bold">
                  KEY TAKEAWAYS
                </div>
                <ul class="text-xs font-sans text-white/70 space-y-1">
                  <li v-for="(t, i) in activeEvent.takeaways" :key="i" class="flex items-start gap-1.5">
                    <span class="text-[#556B2F] font-mono font-bold">›</span>
                    <span>{{ t }}</span>
                  </li>
                </ul>
              </div>

              <!-- Keynote Slides Presentation Link -->
              <a
                v-if="activeEvent.slideUrl"
                :href="activeEvent.slideUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="w-full mb-3 px-3.5 py-2.5 bg-[#556B2F] hover:bg-[#688238] text-white text-xs font-mono font-medium flex items-center justify-between rounded-none shadow-sm transition-colors"
              >
                <span class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 bg-white animate-pulse"></span>
                  <span>View Keynote Presentation Deck</span>
                </span>
                <span class="font-bold">↗</span>
              </a>
            </div>

            <div class="pt-3 border-t border-white/15 flex items-center justify-between font-mono text-xs text-white/50">
              <span class="text-[10px]">{{ activeEvent.location }}</span>
              <a
                :href="resolveEventImage(activeEvent.gallery?.[currentPhotoIndex]?.path)"
                target="_blank"
                class="text-[#556B2F] hover:underline"
              >
                Direct Asset Link ↗
              </a>
            </div>
          </div>
        </div>

        <!-- Thumbnail Scrubber Strip (Sharp) -->
        <div class="p-2.5 bg-black border-t border-white/15 flex items-center gap-2 overflow-x-auto">
          <button
            v-for="(thumb, tIdx) in activeEvent.gallery"
            :key="tIdx"
            @click="currentPhotoIndex = tIdx"
            :class="[
              'h-12 w-20 shrink-0 border overflow-hidden transition-all rounded-none',
              currentPhotoIndex === tIdx ? 'border-[#556B2F] scale-105 opacity-100' : 'border-white/20 opacity-50 hover:opacity-100'
            ]"
          >
            <img
              :src="resolveEventImage(thumb.path)"
              :alt="thumb.caption"
              class="w-full h-full object-cover"
            />
          </button>
        </div>
      </div>
    </div>

    <!-- Editorial Footer -->
    <Footer />
  </div>
</template>

<style scoped>
/* Sharp architectural styling */
</style>
