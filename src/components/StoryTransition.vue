<script setup>
import { computed } from "vue";

const props = defineProps({
  fromAct: {
    type: String,
    required: true,
  },
  toAct: {
    type: String,
    required: true,
  },
  phase: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  narrative: {
    type: String,
    required: true,
  },
  targetId: {
    type: String,
    required: true,
  },
  actionText: {
    type: String,
    default: "CONTINUE TO NEXT CHAPTER",
  },
  terminalLogs: {
    type: Array,
    default: () => [],
  },
  accentColor: {
    type: String,
    default: "olive", // olive, emerald, amber
  },
});

const scrollToTarget = () => {
  const el = document.getElementById(props.targetId);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

const badgeClass = computed(() => {
  if (props.accentColor === "emerald") return "bg-[#DCFCE7] text-[#15803D] border-[#15803D]/20";
  if (props.accentColor === "amber") return "bg-[#FEF3C7] text-[#B45309] border-[#B45309]/20";
  return "bg-[#EEF3E8] text-[#556B2F] border-[#556B2F]/20";
});

const dotColor = computed(() => {
  if (props.accentColor === "emerald") return "bg-[#15803D]";
  if (props.accentColor === "amber") return "bg-[#B45309]";
  return "bg-[#556B2F]";
});
</script>

<template>
  <div class="relative py-12 md:py-16 overflow-hidden bg-[#FAF9F7] border-y border-[#E8E4DF] flex flex-col items-center">
    <!-- Subtle Background Texture -->
    <div class="absolute inset-0 scroll-dots-bg opacity-30 pointer-events-none"></div>

    <!-- Vertical Connecting Line From Above -->
    <div class="relative w-full flex flex-col items-center mb-6">
      <div class="w-[1.5px] h-12 bg-gradient-to-b from-[#E8E4DF] to-[#556B2F]/50"></div>
      
      <!-- Central Nexus Node -->
      <div class="relative flex items-center justify-center">
        <div class="w-7 h-7 rounded-full border border-[#E8E4DF] bg-white shadow-xs flex items-center justify-center">
          <div :class="['w-2.5 h-2.5 rounded-full animate-pulse', dotColor]"></div>
        </div>
      </div>
    </div>

    <!-- Story Milestone Card -->
    <div class="container mx-auto px-4 max-w-3xl relative z-10">
      <div class="p-6 md:p-8 bg-white border border-[#E8E4DF] rounded-3xl shadow-[0_4px_25px_-4px_rgba(13,13,13,0.04)] relative group transition-all duration-300 hover:border-[#D8D2C8] hover:shadow-md">
        <!-- Header: Phase Trajectory Track -->
        <div class="flex flex-wrap items-center justify-between gap-3 pb-3 mb-4 border-b border-[#E8E4DF] font-mono text-xs">
          <div class="flex items-center gap-2 text-[#4A4845]">
            <span :class="['px-2 py-0.5 rounded-full border text-[11px] font-semibold', badgeClass]">
              {{ phase }}
            </span>
            <span class="text-[#A8A49D]">/</span>
            <span class="text-[#7A756D]">{{ fromAct }}</span>
            <span class="text-[#556B2F]">→</span>
            <span class="font-bold text-[#0D0D0D]">{{ toAct }}</span>
          </div>

          <div class="flex items-center gap-1.5 text-[11px] text-[#15803D] font-mono">
            <span class="w-1.5 h-1.5 rounded-full bg-[#15803D] animate-ping"></span>
            <span>MILESTONE ACTIVE</span>
          </div>
        </div>

        <!-- Headline -->
        <h3 class="text-xl sm:text-2xl md:text-3xl font-display text-[#0D0D0D] tracking-tight mb-3">
          {{ title }}
        </h3>

        <!-- Key Engineering Insights / Logs -->
        <div v-if="terminalLogs && terminalLogs.length" class="mb-5 p-3.5 bg-[#FAF9F7] border border-[#E8E4DF] rounded-xl font-mono text-xs text-[#4A4845] space-y-1.5">
          <div v-for="(log, idx) in terminalLogs" :key="idx" class="flex items-start gap-2">
            <span class="text-[#556B2F] select-none font-bold">›</span>
            <span>{{ log }}</span>
          </div>
        </div>

        <!-- Narrative Passage -->
        <p class="text-[#4A4845] text-sm md:text-base font-sans leading-relaxed mb-6">
          {{ narrative }}
        </p>

        <!-- Advance Button -->
        <div class="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#E8E4DF]">
          <div class="hidden sm:flex items-center gap-2 font-mono text-[11px] text-[#7A756D]">
            <span>Smooth Scroll</span>
            <span>•</span>
            <span class="text-[#556B2F]">Interactive Waypoint</span>
          </div>

          <button
            @click="scrollToTarget"
            class="scroll-btn-secondary w-full sm:w-auto flex items-center justify-center gap-2 text-xs py-2 px-5 group-hover:border-[#556B2F] transition-colors"
          >
            <span>{{ actionText }}</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 transform transition-transform group-hover:translate-y-0.5 text-[#556B2F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Vertical Connecting Line Below -->
    <div class="relative w-full flex flex-col items-center mt-6">
      <div class="w-[1.5px] h-12 bg-gradient-to-b from-[#556B2F]/50 to-[#E8E4DF]"></div>
      <div class="w-2 h-2 rotate-45 border-b border-r border-[#E8E4DF] -mt-1"></div>
    </div>
  </div>
</template>
