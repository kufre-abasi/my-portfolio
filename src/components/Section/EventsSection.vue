<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { RouterLink } from "vue-router";
import { eventsList, resolveEventImage } from "@/data/eventsData";

const currentIndex = ref(0);
const isHovered = ref(false);
const autoPlayTimer = ref(null);
const progress = ref(0);
const progressTimer = ref(null);

const currentEvent = computed(() => eventsList[currentIndex.value] || eventsList[0]);

const totalPhotosCount = computed(() => {
  return eventsList.reduce((acc, curr) => acc + (curr.gallery?.length || 0), 0);
});

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % eventsList.length;
  resetProgress();
};

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + eventsList.length) % eventsList.length;
  resetProgress();
};

const goToSlide = (index) => {
  currentIndex.value = index;
  resetProgress();
};

const resetProgress = () => {
  progress.value = 0;
};

// Autoplay logic that respects user hover
const startAutoPlay = () => {
  stopAutoPlay();
  const intervalMs = 6000;
  const tickMs = 60;
  const step = (tickMs / intervalMs) * 100;

  progressTimer.value = setInterval(() => {
    if (!isHovered.value) {
      progress.value += step;
      if (progress.value >= 100) {
        nextSlide();
      }
    }
  }, tickMs);
};

const stopAutoPlay = () => {
  if (progressTimer.value) clearInterval(progressTimer.value);
};

onMounted(() => {
  startAutoPlay();
});

onUnmounted(() => {
  stopAutoPlay();
});
</script>

<template>
  <section id="events" class="py-24 relative overflow-hidden bg-[#F7F5F0] border-t border-[#E8E4DF]">
    <!-- Ambient Texture -->
    <div class="absolute inset-0 scroll-grid-bg opacity-35 pointer-events-none"></div>
    <div class="absolute top-1/4 left-10 w-96 h-96 bg-[#556B2F]/[0.035] blur-3xl pointer-events-none"></div>
    <div class="absolute bottom-10 right-10 w-96 h-96 bg-[#15803D]/[0.03] blur-3xl pointer-events-none"></div>

    <div class="container mx-auto px-4 lg:px-8 relative z-10">
      <!-- Section Header -->
      <div class="flex flex-col items-center text-center mb-12">
        <div class="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-[#E8E4DF] rounded-none text-xs font-mono text-[#7A756D] uppercase tracking-wider mb-4 shadow-xs">
          <span class="w-1.5 h-1.5 bg-[#556B2F] animate-pulse"></span>
          <span>Chapter 03.5 ── Public Engagements & Speaking</span>
        </div>

        <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display text-[#0D0D0D] tracking-tight mb-4 leading-tight">
          Speaking & <span class="italic text-[#556B2F]">Technical Stages</span>
        </h2>

        <p class="text-[#4A4845] max-w-2xl text-sm md:text-base font-sans leading-relaxed">
          Featured conference keynotes, protocol architecture workshops, and algorithmic contest coaching. Hover over any slide to reveal the full-color stage atmosphere.
        </p>
      </div>

      <!-- MAIN INTERACTIVE SLIDESHOW -->
      <div
        class="max-w-6xl mx-auto bg-white border border-[#E8E4DF] rounded-none shadow-xl overflow-hidden relative group"
        @mouseenter="isHovered = true"
        @mouseleave="isHovered = false"
      >
        <!-- Top Status Bar & Navigation Header -->
        <div class="px-5 sm:px-8 py-3.5 bg-[#FAF9F7] border-b border-[#E8E4DF] flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
          <div class="flex items-center gap-3">
            <span class="px-2 py-0.5 bg-[#0D0D0D] text-white font-bold text-[11px] rounded-none">
              SLIDE {{ String(currentIndex + 1).padStart(2, '0') }} / {{ String(eventsList.length).padStart(2, '0') }}
            </span>
            <span class="text-[#7A756D] hidden sm:inline">•</span>
            <span class="text-[#15803D] font-semibold hidden sm:inline">{{ currentEvent.categoryLabel }}</span>
          </div>

          <div class="flex items-center gap-4 text-[#7A756D]">
            <span class="hidden md:inline">{{ isHovered ? 'PAUSED ON HOVER' : 'AUTO-ADVANCING' }}</span>
            <div class="flex items-center gap-1">
              <button
                @click="prevSlide"
                aria-label="Previous slide"
                class="w-8 h-8 bg-white border border-[#E8E4DF] hover:border-[#0D0D0D] hover:bg-[#0D0D0D] hover:text-white flex items-center justify-center transition-colors rounded-none shadow-xs"
              >
                ←
              </button>
              <button
                @click="nextSlide"
                aria-label="Next slide"
                class="w-8 h-8 bg-white border border-[#E8E4DF] hover:border-[#0D0D0D] hover:bg-[#0D0D0D] hover:text-white flex items-center justify-center transition-colors rounded-none shadow-xs"
              >
                →
              </button>
            </div>
          </div>
        </div>

        <!-- Timer Progress Line -->
        <div class="w-full h-1 bg-[#E8E4DF] relative overflow-hidden">
          <div
            class="h-full bg-[#556B2F] transition-all duration-75"
            :style="{ width: `${progress}%` }"
          ></div>
        </div>

        <!-- Slideshow Stage: Split Cinematic Layout -->
        <div class="grid grid-cols-1 lg:grid-cols-12 min-h-[460px] lg:min-h-[520px]">
          <!-- Left: High-Impact Visual Display (Black & White default, Full Color on hover) -->
          <div class="lg:col-span-7 relative bg-[#0D0D0D] overflow-hidden group/image min-h-[300px] lg:min-h-full">
            <!-- Event Photograph -->
            <img
              :key="currentEvent.id"
              :src="resolveEventImage(currentEvent.leadPhoto)"
              :alt="'Kufre-Abasi Bassey speaking at ' + currentEvent.title"
              class="w-full h-full object-cover transition-all duration-700 ease-out filter grayscale contrast-115 brightness-95 group-hover/image:grayscale-0 group-hover/image:contrast-100 group-hover/image:brightness-100 group-hover/image:scale-105"
              loading="lazy"
            />

            <!-- Subtle Vignette -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none opacity-80 group-hover/image:opacity-40 transition-opacity duration-500"></div>

            <!-- Floating Role & Year Badge -->
            <div class="absolute top-4 left-4 z-10 flex flex-wrap items-center gap-2">
              <span class="px-3 py-1 bg-black/90 text-white font-mono text-[11px] tracking-wider uppercase border border-white/20 rounded-none shadow-sm backdrop-blur-sm">
                {{ currentEvent.role }}
              </span>
              <!-- <span class="px-2.5 py-1 bg-[#556B2F] text-white font-mono text-[11px] font-bold rounded-none">
                {{ currentEvent.year }}
              </span> -->
            </div>

            <!-- Hover Cue Indicator -->
            <div class="absolute bottom-4 left-4 z-10 pointer-events-none">
              <div class="inline-flex items-center gap-2 px-3 py-1.5 bg-black/80 text-white text-[11px] font-mono border border-white/20 backdrop-blur-sm">
                <span class="w-2 h-2 rounded-full bg-[#15803D] animate-ping"></span>
                <span>Hover photo to view in vivid full color</span>
              </div>
            </div>

            <!-- Frame Count Badge -->
            <div class="absolute bottom-4 right-4 z-10">
              <span class="px-3 py-1.5 bg-black/80 text-white/90 font-mono text-[11px] border border-white/20 backdrop-blur-sm">
                {{ currentEvent.gallery?.length || 1 }} Archive Frames
              </span>
            </div>
          </div>

          <!-- Right: Story & Stage Narrative Column -->
          <div class="lg:col-span-5 p-6 sm:p-8 md:p-10 flex flex-col justify-between bg-white border-t lg:border-t-0 lg:border-l border-[#E8E4DF]">
            <div>
              <!-- Category & Location -->
              <div class="flex items-center justify-between text-xs font-mono text-[#7A756D] mb-3 pb-3 border-b border-[#E8E4DF]">
                <span class="text-[#556B2F] font-bold uppercase tracking-wider">{{ currentEvent.categoryLabel }}</span>
                <span class="truncate max-w-[180px]">{{ currentEvent.location }}</span>
              </div>

              <!-- Main Title -->
              <h3 class="text-2xl sm:text-3xl font-display text-[#0D0D0D] tracking-tight mb-3 leading-snug">
                {{ currentEvent.title }}
              </h3>

              <!-- Keynote Headline Quote -->
              <p class="text-sm font-serif italic text-[#3E3B36] mb-4 pb-4 border-b border-[#E8E4DF] leading-relaxed">
                “{{ currentEvent.headline }}”
              </p>

              <!-- Story Narrative -->
              <p class="text-xs sm:text-sm font-sans text-[#4A4845] leading-relaxed mb-6 whitespace-pre-line">
                {{ currentEvent.story }}
              </p>

              <!-- Key Takeaways Preview -->
              <div class="p-3.5 bg-[#FAF9F7] border border-[#E8E4DF] rounded-none mb-6">
                <div class="text-[10px] font-mono text-[#556B2F] uppercase tracking-wider font-bold mb-2 flex items-center gap-1.5">
                  <span class="w-1.5 h-1.5 bg-[#556B2F]"></span>
                  <span>CORE STAGE INSIGHTS</span>
                </div>
                <ul class="text-xs font-sans text-[#3E3B36] space-y-1.5">
                  <li v-for="(t, tIdx) in currentEvent.takeaways.slice(0, 3)" :key="tIdx" class="flex items-start gap-1.5">
                    <span class="text-[#556B2F] font-mono font-bold">›</span>
                    <span>{{ t }}</span>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Slide Bottom Action Bar -->
            <div class="pt-4 border-t border-[#E8E4DF] flex flex-wrap items-center justify-between gap-3">
              <span class="text-xs font-mono text-[#7A756D]">{{ currentEvent.stats }}</span>

              <div class="flex items-center gap-2">
                <a
                  v-if="currentEvent.slideUrl"
                  :href="currentEvent.slideUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="scroll-btn-secondary py-2.5 px-4 text-xs flex items-center gap-1.5 rounded-none"
                >
                  <span>Slide Deck</span>
                  <span>↗</span>
                </a>

                <RouterLink
                  :to="`/events?event=${currentEvent.id}`"
                  class="scroll-btn-primary py-2.5 px-5 text-xs flex items-center gap-2 rounded-none"
                >
                  <span>Inspect Story in Gallery</span>
                  <span class="font-mono">→</span>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom Slideshow Thumbnail Bar (Clickable Sharp Miniatures) -->
        <div class="p-3 bg-[#FAF9F7] border-t border-[#E8E4DF] flex items-center gap-2.5 overflow-x-auto">
          <button
            v-for="(event, idx) in eventsList"
            :key="event.id"
            @click="goToSlide(idx)"
            :class="[
              'group/thumb relative h-16 w-28 shrink-0 overflow-hidden border transition-all rounded-none text-left',
              currentIndex === idx
                ? 'border-[#0D0D0D] ring-2 ring-[#556B2F] scale-[1.02]'
                : 'border-[#E8E4DF] opacity-60 hover:opacity-100 hover:border-[#556B2F]'
            ]"
          >
            <img
              :src="resolveEventImage(event.leadPhoto)"
              :alt="'Event thumbnail: ' + event.title"
              class="w-full h-full object-cover filter grayscale group-hover/thumb:grayscale-0 transition-all duration-300"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-black/40 group-hover/thumb:bg-black/10 transition-colors"></div>
            <div class="absolute bottom-1 left-1.5 right-1.5 text-white font-mono text-[9px] truncate drop-shadow-sm font-semibold">
              {{ event.shortName }}
            </div>
          </button>
        </div>
      </div>

      <!-- Bottom Gallery Link Invitation (Sharp) -->
      <div class="mt-12 text-center">
        <RouterLink
          to="/events"
          class="inline-flex items-center gap-2 px-6 py-3 bg-white border border-[#E8E4DF] hover:border-[#0D0D0D] text-xs font-mono font-semibold text-[#0D0D0D] transition-all shadow-xs rounded-none hover:-translate-y-0.5"
        >
          <span>VIEW FULL CLUSTER ARCHIVE ({{ totalPhotosCount }}+ EVENT IMAGES)</span>
          <span class="text-[#556B2F]">→</span>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Sharp architectural styling */
</style>
