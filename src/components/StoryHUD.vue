<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { getYearsOfExperience } from "@/utils/experience";

const yearsOfExp = getYearsOfExperience();
const scrollProgress = ref(0);
const activeSection = ref("profile");

const chapters = [
  { id: "profile", act: "CH 01", name: "Profile & Story", code: "01" },
  { id: "skills", act: "CH 02", name: "Technical Toolkit", code: "02" },
  { id: "projects", act: "CH 03", name: "Selected Work", code: "03" },
  { id: "dispatch", act: "CH 04", name: "Get in Touch", code: "04" },
];

const updateScroll = () => {
  const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
  scrollProgress.value = Math.min(100, Math.max(0, Math.round(scrolled)));

  // Identify active section
  const sectionIds = ["profile", "skills", "projects", "dispatch"];
  for (let i = sectionIds.length - 1; i >= 0; i--) {
    const el = document.getElementById(sectionIds[i]);
    if (el) {
      const rect = el.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.45) {
        activeSection.value = sectionIds[i];
        break;
      }
    }
  }
};

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

onMounted(() => {
  window.addEventListener("scroll", updateScroll, { passive: true });
  updateScroll();
});

onUnmounted(() => {
  window.removeEventListener("scroll", updateScroll);
});
</script>

<template>
  <div>
    <!-- Top Reading Progress Indicator -->
    <div class="fixed top-0 left-0 w-full h-[2.5px] bg-[#E8E4DF] z-50 pointer-events-none">
      <div
        class="h-full bg-gradient-to-r from-[#556B2F] via-[#6B853E] to-[#15803D] transition-all duration-150"
        :style="{ width: `${scrollProgress}%` }"
      ></div>
    </div>

    <!-- Right-Hand Floating Waypoint Rail (Desktop) -->
    <aside
      aria-label="Story Waypoint Navigation"
      class="fixed right-4 lg:right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-end gap-3 pointer-events-auto select-none"
    >
      <!-- Rail Capsule -->
      <div class="p-2 bg-white/95 border border-[#E8E4DF] rounded-2xl backdrop-blur-md shadow-md flex flex-col items-end gap-2 w-48">
        <div class="text-[10px] font-mono text-[#7A756D] tracking-wider flex items-center gap-1.5 pb-1.5 border-b border-[#E8E4DF] w-full justify-between">
          <div class="flex items-center gap-1.5">
            <span class="w-1.5 h-1.5 rounded-full bg-[#556B2F] animate-pulse"></span>
            <span class="font-semibold text-[#0D0D0D]">READING GUIDE</span>
          </div>
          <span class="text-[#15803D] font-bold">{{ scrollProgress }}%</span>
        </div>

        <!-- Waypoint Nodes -->
        <div class="flex flex-col items-end gap-1.5 w-full">
          <button
            v-for="chapter in chapters"
            :key="chapter.id"
            @click="scrollTo(chapter.id)"
            :class="[
              'group flex items-center justify-end gap-2.5 px-2.5 py-1.5 w-full text-right transition-all duration-200 rounded-xl',
              activeSection === chapter.id
                ? 'bg-[#EEF3E8] text-[#556B2F] font-medium shadow-xs'
                : 'text-[#4A4845] hover:text-[#0D0D0D] hover:bg-[#FAF9F7]'
            ]"
          >
            <div class="flex flex-col items-end text-right">
              <span class="text-[9px] font-mono tracking-wider opacity-60">
                {{ chapter.act }}
              </span>
              <span class="text-xs font-sans tracking-tight">
                {{ chapter.name }}
              </span>
            </div>

            <!-- Dot Indicator -->
            <div class="relative w-3.5 h-3.5 flex items-center justify-center shrink-0">
              <div
                :class="[
                  'w-2 h-2 rounded-full transition-all duration-300',
                  activeSection === chapter.id
                    ? 'bg-[#556B2F] scale-125'
                    : 'bg-[#D8D4CD] group-hover:bg-[#556B2F]/60'
                ]"
              ></div>
            </div>
          </button>
        </div>

        <!-- Rail Bottom Subtext -->
        <div class="pt-1 border-t border-[#E8E4DF] w-full text-right text-[9px] font-mono text-[#7A756D]">
          <span>{{ yearsOfExp }}+ YRS EXP // 16 APPS</span>
        </div>
      </div>
    </aside>

    <!-- Mobile Mini Waypoint Pill (Bottom Floating Indicator) -->
    <div class="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 xl:hidden flex items-center gap-2 px-3.5 py-1.5 bg-white/95 border border-[#E8E4DF] rounded-full shadow-lg backdrop-blur-md text-[11px] font-sans">
      <span class="w-2 h-2 rounded-full bg-[#556B2F] animate-pulse"></span>
      <span class="text-[#7A756D]">Chapter:</span>
      <span class="text-[#0D0D0D] font-semibold truncate max-w-[120px]">
        {{ chapters.find(c => c.id === activeSection)?.name || 'Profile' }}
      </span>
      <span class="text-[#E8E4DF]">|</span>
      <span class="text-[#15803D] font-mono font-bold">{{ scrollProgress }}%</span>
    </div>
  </div>
</template>
