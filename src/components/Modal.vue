<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm transition-opacity">
    <!-- Click outside backdrop to close -->
    <div class="absolute inset-0" @click="closeModal"></div>

    <div
      class="relative z-10 w-full max-w-lg bg-white border border-[#E8E4DF] rounded-3xl shadow-2xl p-6 sm:p-8 overflow-hidden transition-all duration-300"
    >
      <!-- Top Header -->
      <div class="flex items-center justify-between pb-4 mb-6 border-b border-[#E8E4DF]">
        <div class="flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-[#15803D] animate-ping"></span>
          <span class="font-mono text-xs text-[#7A756D] uppercase tracking-wider font-semibold">DIRECT COMMUNICATIONS</span>
        </div>
        <button
          @click="closeModal"
          aria-label="Close dialog"
          class="p-2 text-[#7A756D] hover:text-[#0D0D0D] hover:bg-[#FAF9F7] rounded-full transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      <!-- STEP 0: MESSAGE FORM -->
      <div v-if="steps[0]">
        <div class="mb-6">
          <h2 class="text-2xl sm:text-3xl font-display text-[#0D0D0D] tracking-tight">
            Start a <span class="italic text-[#556B2F]">Conversation</span>
          </h2>
          <p class="text-xs sm:text-sm text-[#4A4845] font-sans mt-1">
            Fill in the details below. Messages route directly to Kufre-abasi’s primary inbox.
          </p>
        </div>

        <form class="space-y-4" @submit.prevent="handleSubmit">
          <!-- Name / Company -->
          <div>
            <label class="block text-xs font-sans font-medium text-[#0D0D0D] mb-1">
              Your Name or Organization <span class="text-rose-500">*</span>
            </label>
            <input
              v-model="formState.name"
              type="text"
              placeholder="e.g. Alex Morgan / Apex Dynamics"
              class="w-full px-4 py-2.5 bg-[#FAF9F7] border border-[#E8E4DF] focus:border-[#556B2F] focus:bg-white text-[#0D0D0D] placeholder-[#A8A49D] text-xs sm:text-sm rounded-xl transition-all outline-none"
            />
            <span v-if="errorsMsg.name" class="text-[11px] font-sans text-rose-500 mt-1 block">
              Name or organization is required.
            </span>
          </div>

          <!-- Email -->
          <div>
            <label class="block text-xs font-sans font-medium text-[#0D0D0D] mb-1">
              Email Address <span class="text-rose-500">*</span>
            </label>
            <input
              v-model="formState.email"
              type="email"
              placeholder="name@company.com"
              class="w-full px-4 py-2.5 bg-[#FAF9F7] border border-[#E8E4DF] focus:border-[#556B2F] focus:bg-white text-[#0D0D0D] placeholder-[#A8A49D] text-xs sm:text-sm rounded-xl transition-all outline-none"
            />
            <span v-if="errorsMsg.email" class="text-[11px] font-sans text-rose-500 mt-1 block">
              A valid email address is required.
            </span>
          </div>

          <!-- Subject -->
          <div>
            <label class="block text-xs font-sans font-medium text-[#0D0D0D] mb-1">
              Subject <span class="text-rose-500">*</span>
            </label>
            <input
              v-model="formState.subject"
              type="text"
              placeholder="Engineering Role / Project Engagement / Advisory"
              class="w-full px-4 py-2.5 bg-[#FAF9F7] border border-[#E8E4DF] focus:border-[#556B2F] focus:bg-white text-[#0D0D0D] placeholder-[#A8A49D] text-xs sm:text-sm rounded-xl transition-all outline-none"
            />
            <span v-if="errorsMsg.subject" class="text-[11px] font-sans text-rose-500 mt-1 block">
              Subject line is required.
            </span>
          </div>

          <!-- Message -->
          <div>
            <label class="block text-xs font-sans font-medium text-[#0D0D0D] mb-1">
              Message <span class="text-rose-500">*</span>
            </label>
            <textarea
              v-model="formState.message"
              rows="4"
              placeholder="Describe your requirements, project scope, team role, or timeline..."
              class="w-full px-4 py-2.5 bg-[#FAF9F7] border border-[#E8E4DF] focus:border-[#556B2F] focus:bg-white text-[#0D0D0D] placeholder-[#A8A49D] text-xs sm:text-sm rounded-xl transition-all outline-none resize-none"
            ></textarea>
            <span v-if="errorsMsg.message" class="text-[11px] font-sans text-rose-500 mt-1 block">
              Message cannot be empty.
            </span>
          </div>

          <!-- Submit Button -->
          <div class="pt-2 flex items-center justify-between">
            <div class="text-[11px] font-mono text-[#7A756D] hidden sm:block">
              Encrypted Delivery
            </div>
            <button
              :disabled="loading"
              type="submit"
              class="scroll-btn-primary w-full sm:w-auto py-2.5 px-6"
            >
              <span v-if="loading" class="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              <span v-if="!loading">Send Message</span>
              <span v-else>Sending...</span>
            </button>
          </div>
        </form>
      </div>

      <!-- STEP 1: TRANSMISSION SUCCESS CONFIRMATION -->
      <div v-if="steps[1]" class="text-center py-8 sm:py-12">
        <div class="w-16 h-16 mx-auto mb-5 flex items-center justify-center rounded-full bg-[#DCFCE7] text-[#15803D] shadow-xs">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>

        <div class="inline-block px-3 py-1 bg-[#FAF9F7] border border-[#E8E4DF] text-[#15803D] font-mono text-xs rounded-full uppercase tracking-wider mb-3">
          Message Received
        </div>

        <h3 class="text-2xl font-display text-[#0D0D0D] tracking-tight mb-2">
          Thank you for reaching out
        </h3>

        <p class="text-[#4A4845] text-xs sm:text-sm font-sans max-w-sm mx-auto mb-8 leading-relaxed">
          Your note has been received. I will review your inquiry and reply to your email address promptly.
        </p>

        <button
          @click="closeModal"
          class="scroll-btn-secondary py-2.5 px-6"
        >
          Close Window
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
    changeScreen(0, 1);
  }
};
</script>
