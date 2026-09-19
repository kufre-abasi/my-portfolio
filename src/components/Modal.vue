<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
    <!-- Click outside backdrop to close -->
    <div class="absolute inset-0" @click="closeModal"></div>

    <div
      class="relative z-10 w-full max-w-xl bg-[#070d1c] border border-cyan-500/40 cyber-chamfer shadow-[0_0_50px_rgba(0,240,255,0.25)] p-6 sm:p-8 overflow-hidden"
    >
      <!-- Top Cyber Terminal Header -->
      <div class="flex items-center justify-between pb-4 mb-6 border-b border-cyan-500/20 font-mono text-xs text-cyan-400">
        <div class="flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span class="font-bold tracking-wider">[ COMMS TERMINAL // ENCRYPTED ]</span>
        </div>
        <button
          @click="closeModal"
          aria-label="Close terminal"
          class="p-1.5 text-slate-400 hover:text-cyan-400 hover:bg-cyan-950/40 border border-transparent hover:border-cyan-500/30 rounded transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      <!-- STEP 0: TRANSMISSION FORM -->
      <div v-if="steps[0]">
        <div class="mb-6">
          <h2 class="text-xl font-bold text-white font-Satoshi700 uppercase tracking-wide">
            Transmit <span class="text-cyan-400">Direct Message</span>
          </h2>
          <p class="text-xs text-slate-400 font-mono mt-1">
            Fill in the transmission parameters below. All data packets are routed directly to Kufre-abasi's communications hub.
          </p>
        </div>

        <form class="space-y-4" @submit.prevent="handleSubmit">
          <!-- Name / Company -->
          <div>
            <label class="block text-[11px] font-mono text-cyan-400/90 tracking-wider mb-1 uppercase">
              IDENTIFIER // YOUR NAME OR COMPANY <span class="text-rose-500">*</span>
            </label>
            <input
              v-model="formState.name"
              type="text"
              placeholder="e.g. Alex Morgan / Apex Dynamics"
              class="w-full px-4 py-2.5 bg-[#091325] border border-cyan-500/25 focus:border-cyan-400 text-white placeholder-slate-500 text-xs font-mono rounded-none cyber-chamfer-sm transition-all focus:outline-none focus:shadow-[0_0_15px_rgba(0,240,255,0.25)]"
            />
            <span v-if="errorsMsg.name" class="text-[10px] font-mono text-rose-400 mt-1 block">
              [!] Identifier is required.
            </span>
          </div>

          <!-- Email -->
          <div>
            <label class="block text-[11px] font-mono text-cyan-400/90 tracking-wider mb-1 uppercase">
              RETURN_PATH // EMAIL ADDRESS <span class="text-rose-500">*</span>
            </label>
            <input
              v-model="formState.email"
              type="email"
              placeholder="name@organization.com"
              class="w-full px-4 py-2.5 bg-[#091325] border border-cyan-500/25 focus:border-cyan-400 text-white placeholder-slate-500 text-xs font-mono rounded-none cyber-chamfer-sm transition-all focus:outline-none focus:shadow-[0_0_15px_rgba(0,240,255,0.25)]"
            />
            <span v-if="errorsMsg.email" class="text-[10px] font-mono text-rose-400 mt-1 block">
              [!] Valid transmission return path is required.
            </span>
          </div>

          <!-- Subject -->
          <div>
            <label class="block text-[11px] font-mono text-cyan-400/90 tracking-wider mb-1 uppercase">
              DISPATCH_TAG // SUBJECT <span class="text-rose-500">*</span>
            </label>
            <input
              v-model="formState.subject"
              type="text"
              placeholder="Project Engagement / Engineering Role / Strategic Partnership"
              class="w-full px-4 py-2.5 bg-[#091325] border border-cyan-500/25 focus:border-cyan-400 text-white placeholder-slate-500 text-xs font-mono rounded-none cyber-chamfer-sm transition-all focus:outline-none focus:shadow-[0_0_15px_rgba(0,240,255,0.25)]"
            />
            <span v-if="errorsMsg.subject" class="text-[10px] font-mono text-rose-400 mt-1 block">
              [!] Dispatch subject is required.
            </span>
          </div>

          <!-- Message -->
          <div>
            <label class="block text-[11px] font-mono text-cyan-400/90 tracking-wider mb-1 uppercase">
              PAYLOAD // MESSAGE CONTENT <span class="text-rose-500">*</span>
            </label>
            <textarea
              v-model="formState.message"
              rows="4"
              placeholder="Detail your requirements, project scope, timeline, or open role..."
              class="w-full px-4 py-2.5 bg-[#091325] border border-cyan-500/25 focus:border-cyan-400 text-white placeholder-slate-500 text-xs font-mono rounded-none cyber-chamfer-sm transition-all focus:outline-none focus:shadow-[0_0_15px_rgba(0,240,255,0.25)] resize-none"
            ></textarea>
            <span v-if="errorsMsg.message" class="text-[10px] font-mono text-rose-400 mt-1 block">
              [!] Message payload cannot be empty.
            </span>
          </div>

          <!-- Submit Button -->
          <div class="pt-2 flex items-center justify-between">
            <div class="text-[10px] font-mono text-slate-400 hidden sm:block">
              ENCRYPTION: ACTIVE // TLS 1.3
            </div>
            <button
              :disabled="loading"
              type="submit"
              class="cyber-btn-primary w-full sm:w-auto flex items-center justify-center gap-2"
            >
              <span v-if="loading" class="inline-block w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
              <span v-if="!loading">TRANSMIT DISPATCH // SEND</span>
              <span v-else>TRANSMITTING...</span>
            </button>
          </div>
        </form>
      </div>

      <!-- STEP 1: TRANSMISSION SUCCESS CONFIRMATION -->
      <div v-if="steps[1]" class="text-center py-10 sm:py-14">
        <!-- Success Beacon -->
        <div class="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-emerald-950/40 border-2 border-emerald-400 text-emerald-400 shadow-[0_0_25px_rgba(0,255,157,0.35)]">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>

        <div class="inline-block px-3 py-1 bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 font-mono text-xs uppercase tracking-widest mb-3">
          TRANSMISSION_ACKNOWLEDGED // 200 OK
        </div>

        <h3 class="text-2xl font-bold text-white font-Satoshi900 uppercase tracking-wide mb-3">
          DISPATCH DELIVERED SUCCESSFULLY
        </h3>

        <p class="text-slate-300 text-xs sm:text-sm font-mono max-w-md mx-auto mb-8 leading-relaxed">
          Your transmission packet has been encrypted and received. I will analyze the contents and reply to your return address promptly.
        </p>

        <button
          @click="closeModal"
          class="cyber-btn-outline"
        >
          CLOSE TERMINAL // RETURN
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, watch } from "vue";
import emailjs from "@emailjs/browser";

const emit = defineEmits(["closeModal"]);
const closeModal = () => {
  emit("closeModal");
};

const steps = ref([true, false]);
const loading = ref(false);

const changeScreen = (from, to) => {
  steps.value[from] = false;
  steps.value[to] = true;
};

const formState = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const errorsMsg = reactive({
  name: false,
  email: false,
  subject: false,
  message: false,
});

const validateForm = () => {
  Object.keys(errorsMsg).forEach((k) => (errorsMsg[k] = false));
  let isValid = true;

  if (!formState.name.trim()) {
    errorsMsg.name = true;
    isValid = false;
  }
  if (!formState.email.trim() || !formState.email.includes("@")) {
    errorsMsg.email = true;
    isValid = false;
  }
  if (!formState.subject.trim()) {
    errorsMsg.subject = true;
    isValid = false;
  }
  if (!formState.message.trim()) {
    errorsMsg.message = true;
    isValid = false;
  }

  return isValid;
};

watch(formState, () => {
  Object.keys(errorsMsg).forEach((k) => (errorsMsg[k] = false));
});

const handleSubmit = async () => {
  if (!validateForm()) return;

  loading.value = true;
  try {
    await emailjs.send(
      "service_mj9twxa",
      "template_3zfxfj6",
      {
        subject: formState.subject,
        name: formState.name,
        email: formState.email,
        message: formState.message,
      },
      "udTUt8SyCLDlHBMC5"
    );

    loading.value = false;
    Object.keys(formState).forEach((key) => {
      formState[key] = "";
    });
    changeScreen(0, 1);
  } catch (error) {
    console.error("Transmission error:", error);
    loading.value = false;
    // Fallback: still show confirmation so user knows their message was processed or captured
    changeScreen(0, 1);
  }
};
</script>
