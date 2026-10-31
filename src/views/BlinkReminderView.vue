<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import blinkReminderLogo from "@/assets/blink-reminder-logo.png";
import Footer from "@/components/Footer.vue";

const router = useRouter();
const copied = ref(false);

const dmgUrl = "/downloads/Blink-Reminder-1.0.0-x64.dmg";
const dmgName = "Blink Reminder_1.0.0_x64.dmg";

const copyShareLink = async () => {
  try {
    const shareUrl = window.location.origin + "/blink-reminder";
    await navigator.clipboard.writeText(shareUrl);
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 2400);
  } catch (err) {
    // Fallback if clipboard API is restricted
    const input = document.createElement("input");
    input.value = window.location.origin + "/blink-reminder";
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
            <span>{{ copied ? "Link Copied!" : "Share Link" }}</span>
          </button>

          <a
            :href="dmgUrl"
            :download="dmgName"
            class="px-3.5 sm:px-5 py-2 bg-[#0D0D0D] hover:bg-[#556B2F] text-white rounded-none text-xs font-mono font-medium flex items-center gap-1.5 transition-all shadow-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            <span>Download .DMG</span>
          </a>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <main class="relative z-10 py-16 sm:py-24 overflow-hidden">
      <!-- Ambient Lighting -->
      <div class="absolute inset-0 scroll-grid-bg opacity-30 pointer-events-none"></div>
      <div class="absolute top-10 right-1/4 w-[480px] h-[480px] bg-[#1D9E75]/[0.06] rounded-full blur-[140px] pointer-events-none"></div>
      <div class="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#556B2F]/[0.04] rounded-full blur-[120px] pointer-events-none"></div>

      <div class="container mx-auto px-4 lg:px-8 relative z-10">
        <!-- Product Header Badge -->
        <div class="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-[#E8E4DF] rounded-none text-xs font-mono text-[#4A4845] uppercase tracking-wider mb-6 shadow-xs">
            <span class="w-1.5 h-1.5 bg-[#1D9E75] animate-pulse"></span>
            <span>macOS Desktop Companion • v1.0.0 Bundle</span>
          </div>

          <!-- Icon Bay -->
          <div class="relative w-28 h-28 sm:w-32 sm:h-32 mb-8 group">
            <div class="absolute inset-0 bg-[#1D9E75]/30 blur-2xl group-hover:blur-3xl transition-all"></div>
            <img
              :src="blinkReminderLogo"
              alt="Blink Reminder — Minimalist Eye Care Desktop Application Icon"
              class="relative z-10 w-full h-full object-contain rounded-none shadow-xl border border-white/20"
              loading="eager"
            />
          </div>

          <!-- Title & Subtitle -->
          <h1 class="text-4xl sm:text-5xl md:text-6xl font-display text-[#0D0D0D] tracking-tight mb-5 leading-tight">
            Blink <span class="italic text-[#1D9E75]">Reminder</span>
          </h1>

          <p class="text-[#4A4845] text-base sm:text-lg font-sans leading-relaxed max-w-2xl mb-8">
            An ultra-lean, ergonomic eye-strain prevention app engineered for software engineers and intensive screen workers. Built natively with <strong>Tauri v2</strong> and <strong>Rust</strong>.
          </p>

          <!-- Primary Download Call to Action -->
          <div class="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
            <a
              :href="dmgUrl"
              :download="dmgName"
              class="w-full sm:w-auto px-7 py-3.5 bg-[#15803D] hover:bg-[#166534] text-white rounded-none font-mono text-sm font-semibold flex items-center justify-center gap-2.5 transition-all shadow-md hover:-translate-y-0.5"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              <span>Download for macOS (.dmg)</span>
              <span class="text-white/70 text-xs font-normal">6.0 MB</span>
            </a>

            <button
              @click="copyShareLink"
              class="w-full sm:w-auto px-6 py-3.5 bg-white hover:bg-[#FAF9F7] border border-[#E8E4DF] text-[#0D0D0D] rounded-none font-mono text-sm font-medium flex items-center justify-center gap-2 transition-all shadow-xs hover:-translate-y-0.5"
            >
              <svg v-if="!copied" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-[#556B2F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-[#15803D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>{{ copied ? "Copied URL to Clipboard!" : "Copy Share Link" }}</span>
            </button>
          </div>

          <!-- Specs Pill Line -->
          <div class="mt-6 flex flex-wrap items-center justify-center gap-2.5 text-[11px] font-mono text-[#7A756D]">
            <span class="px-2.5 py-0.5 bg-white border border-[#E8E4DF] rounded-none">Universal x64 / Rosetta</span>
            <span class="px-2.5 py-0.5 bg-white border border-[#E8E4DF] rounded-none">&lt; 15 MB RAM</span>
            <span class="px-2.5 py-0.5 bg-white border border-[#E8E4DF] rounded-none">Native Tray Daemon</span>
            <span class="px-2.5 py-0.5 bg-white border border-[#E8E4DF] rounded-none">100% Offline & Private</span>
          </div>
        </div>

        <!-- Interactive Preview & Feature Breakdown Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20 max-w-5xl mx-auto">
          <!-- Left: Frameless App Mockup -->
          <div class="lg:col-span-5 flex flex-col items-center">
            <div class="text-xs font-mono uppercase tracking-wider text-[#7A756D] mb-3 self-start">
              // Desktop Frameless Window Interface
            </div>

            <!-- Stylized Frameless Window -->
            <div class="w-full max-w-[340px] bg-[#0F0F0F] text-[#F0F0F0] rounded-[24px] border border-white/10 shadow-2xl overflow-hidden p-6 relative font-sans">
              <!-- Window Drag Bar -->
              <div class="flex items-center justify-between pb-4 border-b border-white/5 mb-5">
                <span class="text-xs font-medium text-white/50">👁️ Blink Reminder</span>
                <span class="w-5 h-5 rounded-full bg-white/10 text-white/50 text-[10px] flex items-center justify-center">✕</span>
              </div>

              <!-- Ring Visual -->
              <div class="flex flex-col items-center my-2">
                <div class="relative w-28 h-28 flex items-center justify-center">
                  <svg class="w-full h-full -rotate-90" viewBox="0 0 120 120">
                    <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="6"/>
                    <circle
                      cx="60" cy="60" r="50" fill="none"
                      stroke="#1D9E75" stroke-width="6"
                      stroke-dasharray="314"
                      stroke-dashoffset="120"
                      stroke-linecap="round"
                    />
                  </svg>
                  <div class="absolute flex flex-col items-center">
                    <span class="text-2xl font-bold font-mono tracking-tight text-white">14:20</span>
                    <span class="text-[9px] font-mono text-white/40 uppercase">until reminder</span>
                  </div>
                </div>
                <div class="text-[11px] font-mono text-white/50 mt-2">Next blink reminder</div>
              </div>

              <!-- Status Pill -->
              <div class="my-4 px-3 py-1.5 bg-white/5 border border-white/5 rounded-full flex items-center justify-center gap-2 text-xs font-mono text-[#1D9E75]">
                <span class="w-1.5 h-1.5 rounded-full bg-[#1D9E75] animate-ping"></span>
                <span>Active — watching your eyes</span>
              </div>

              <!-- Stats Grid -->
              <div class="grid grid-cols-2 gap-2 mb-4 font-mono">
                <div class="p-2.5 bg-white/5 rounded-xl border border-white/5 text-center">
                  <div class="text-[9px] text-white/40 uppercase">Reminders</div>
                  <div class="text-lg font-bold text-white mt-0.5">8</div>
                </div>
                <div class="p-2.5 bg-white/5 rounded-xl border border-white/5 text-center">
                  <div class="text-[9px] text-white/40 uppercase">Session Time</div>
                  <div class="text-lg font-bold text-white mt-0.5">2:40</div>
                </div>
              </div>

              <!-- Controls preview -->
              <div class="space-y-2 text-xs font-mono text-white/70 mb-4">
                <div class="flex justify-between items-center bg-white/5 px-3 py-2 rounded-xl">
                  <span>Remind every</span>
                  <span class="text-[#1D9E75]">20 min</span>
                </div>
                <div class="flex justify-between items-center bg-white/5 px-3 py-2 rounded-xl">
                  <span>Blinks per reminder</span>
                  <span class="text-[#1D9E75]">10 blinks</span>
                </div>
                <div class="flex justify-between items-center bg-white/5 px-3 py-2 rounded-xl">
                  <span>Launch at login</span>
                  <span class="text-[#1D9E75]">Enabled ✓</span>
                </div>
              </div>

              <!-- Action button -->
              <div class="w-full py-2.5 bg-[#1D9E75] text-white text-center rounded-xl text-xs font-bold font-mono">
                Session Active
              </div>
            </div>
          </div>

          <!-- Right: Architectural Features -->
          <div class="lg:col-span-7 space-y-4">
            <div class="text-xs font-mono uppercase tracking-wider text-[#7A756D] mb-3">
              // Native System Capabilities & Engineering
            </div>

            <!-- Feature 1 -->
            <div class="p-5 bg-white border border-[#E8E4DF] rounded-none shadow-xs hover:border-[#1D9E75]/40 transition-colors">
              <div class="flex items-start gap-3.5">
                <div class="w-8 h-8 rounded-none bg-[#1D9E75]/10 text-[#1D9E75] flex items-center justify-center font-bold shrink-0">
                  ⚡
                </div>
                <div>
                  <h4 class="font-sans font-bold text-sm text-[#0D0D0D] mb-1">
                    Space-Forcing & Focus Attention Kinematics
                  </h4>
                  <p class="text-xs text-[#4A4845] leading-relaxed">
                    When interval arrives, the app unminimizes, centers on screen, and uses AppleScript native process activation (<code class="text-[#1D9E75] font-mono">set frontmost to true</code>) to bypass macOS focus stealing prevention—instantly surfacing the eye rest overlay over any full-screen code editor or browser.
                  </p>
                </div>
              </div>
            </div>

            <!-- Feature 2 -->
            <div class="p-5 bg-white border border-[#E8E4DF] rounded-none shadow-xs hover:border-[#1D9E75]/40 transition-colors">
              <div class="flex items-start gap-3.5">
                <div class="w-8 h-8 rounded-none bg-[#1D9E75]/10 text-[#1D9E75] flex items-center justify-center font-bold shrink-0">
                  📍
                </div>
                <div>
                  <h4 class="font-sans font-bold text-sm text-[#0D0D0D] mb-1">
                    Menu Bar System Tray Daemon
                  </h4>
                  <p class="text-xs text-[#4A4845] leading-relaxed">
                    Closing the window doesn't quit the process. The application hides smoothly into the macOS menu bar tray. Clicking the tray icon instantly toggles window visibility.
                  </p>
                </div>
              </div>
            </div>

            <!-- Feature 3 -->
            <div class="p-5 bg-white border border-[#E8E4DF] rounded-none shadow-xs hover:border-[#1D9E75]/40 transition-colors">
              <div class="flex items-start gap-3.5">
                <div class="w-8 h-8 rounded-none bg-[#1D9E75]/10 text-[#1D9E75] flex items-center justify-center font-bold shrink-0">
                  🚀
                </div>
                <div>
                  <h4 class="font-sans font-bold text-sm text-[#0D0D0D] mb-1">
                    Native LaunchAgent Autostart
                  </h4>
                  <p class="text-xs text-[#4A4845] leading-relaxed">
                    Zero manual script setup. Uses macOS <code class="text-[#1D9E75] font-mono">launchd</code> service bindings to seamlessly start on computer boot with your pre-configured reminder intervals.
                  </p>
                </div>
              </div>
            </div>

            <!-- Feature 4 -->
            <div class="p-5 bg-white border border-[#E8E4DF] rounded-none shadow-xs hover:border-[#1D9E75]/40 transition-colors">
              <div class="flex items-start gap-3.5">
                <div class="w-8 h-8 rounded-none bg-[#1D9E75]/10 text-[#1D9E75] flex items-center justify-center font-bold shrink-0">
                  🔔
                </div>
                <div>
                  <h4 class="font-sans font-bold text-sm text-[#0D0D0D] mb-1">
                    Auditory Ambient Rest Chimes + OS Notifications
                  </h4>
                  <p class="text-xs text-[#4A4845] leading-relaxed">
                    Triggers a soothing dual-tone sine-wave chime using the Web Audio API alongside native macOS Notification Center alerts to gently prompt your focus away from the monitor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Installation Instructions Card (Sharp) -->
        <div class="max-w-4xl mx-auto p-6 sm:p-8 bg-white border border-[#E8E4DF] rounded-none shadow-sm mb-16">
          <div class="text-xs font-mono uppercase tracking-wider text-[#7A756D] mb-4 pb-3 border-b border-[#E8E4DF] flex items-center justify-between">
            <span class="font-semibold text-[#0D0D0D]">macOS Installation Walkthrough</span>
            <span class="text-[#15803D]">3 Simple Steps</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div class="p-4 bg-[#FAF9F7] border border-[#E8E4DF] rounded-none">
              <div class="font-mono text-xs font-bold text-[#15803D] mb-1.5">01 // DOWNLOAD</div>
              <div class="text-sm font-semibold text-[#0D0D0D] mb-1">Grab the .DMG</div>
              <p class="text-xs text-[#4A4845]">Click download to save <code class="font-mono text-[11px] bg-white px-1 py-0.5 rounded-none border border-[#E8E4DF]">Blink Reminder_1.0.0_x64.dmg</code>.</p>
            </div>

            <div class="p-4 bg-[#FAF9F7] border border-[#E8E4DF] rounded-none">
              <div class="font-mono text-xs font-bold text-[#15803D] mb-1.5">02 // DRAG & DROP</div>
              <div class="text-sm font-semibold text-[#0D0D0D] mb-1">Install to Apps</div>
              <p class="text-xs text-[#4A4845]">Double-click the DMG and drag the Blink Reminder icon directly into your Applications folder.</p>
            </div>

            <div class="p-4 bg-[#FAF9F7] border border-[#E8E4DF] rounded-none">
              <div class="font-mono text-xs font-bold text-[#15803D] mb-1.5">03 // LAUNCH</div>
              <div class="text-sm font-semibold text-[#0D0D0D] mb-1">Start Session</div>
              <p class="text-xs text-[#4A4845]">Open from Applications. The eye icon will appear in your system tray and start tracking your session.</p>
            </div>
          </div>

          <!-- Gatekeeper Advisory -->
          <div class="p-4 bg-[#FAF9F7] border border-[#E8E4DF] rounded-none text-xs text-[#4A4845] font-sans">
            <div class="font-bold text-[#0D0D0D] font-mono text-[11px] uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <span>ℹ️</span>
              <span>macOS Gatekeeper First-Launch Note</span>
            </div>
            <p>
              Because this is an independent, non-App Store open release, macOS Gatekeeper may show a verification dialog on first open. Simply right-click <code class="font-mono text-[11px] bg-white px-1 rounded-none border border-[#E8E4DF]">Blink Reminder.app</code> and select <strong>Open</strong>, or navigate to <em>System Settings &gt; Privacy &amp; Security</em> and click <strong>Open Anyway</strong>.
            </p>
          </div>
        </div>

        <!-- Terminal Curl Section for Developers (Sharp) -->
        <div class="max-w-4xl mx-auto p-6 bg-[#0D0D0D] text-white rounded-none shadow-lg mb-12 font-mono">
          <div class="flex items-center justify-between pb-3 border-b border-white/10 text-xs text-white/50 mb-3">
            <span>Direct Terminal Install (cURL)</span>
            <span>macOS x64 / Rosetta</span>
          </div>
          <pre class="text-xs sm:text-sm text-[#1D9E75] overflow-x-auto py-2"><code>curl -L -O "{{ dmgUrl }}"</code></pre>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>
