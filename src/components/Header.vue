<script setup>
import { ref, onMounted } from "vue";
import Modal from "@/components/Modal.vue";
import VidoeModal from "@/components/VideoModal.vue";
const body = document.querySelector("body");
body.classList.remove("overflow-hidden");
const showMobile = ref(false);
const showModal = ref(false);
const showcreenModal = ref(false);

const toogleMobileMenu = () => {
  const body = document.querySelector("body");
  showMobile.value = !showMobile.value;
  if (showMobile.value) {
    body.classList.add("overflow-hidden");
  } else {
    body.classList.remove("overflow-hidden");
  }
};

const toogleModal = () => {
  showModal.value = !showModal.value;
};

const toogleScreenModal = () => {
  showcreenModal.value = !showcreenModal.value;
};
</script>
<template>
  <div class="sticky top-0 z-30">
    <header class="py-8 bg-tranparent">
      <div
        class="lg:px-[15px] container flex items-end justify-end font-Satoshi700"
      >
        <div class="hidden lg:w-auto w-full justify-between gap-5">
          <router-link to="/">
            <img
              src="@/assets/Logo.png"
              class="h-[38px] md:h-[27.53px] w-auto"
              alt="MySpurr logo"
            />
          </router-link>
          <button
            role="button"
            @click="toogleModal()"
            class="bg-brand text-gray-100 px-5 lg:px-8 py-3   rounded-full text-[14px] md:hidden block m-0"
          >
            Get early access
          </button>
        </div>
        <div class="hidden  items-center gap-12">
          <ul class="hidden lg:flex gap-14 text-sm"></ul>
          <div class="flex gap-8">
            <div>
              <a
                role="button"
                class="btn-light"
                @click="toogleScreenModal()"
              >
                About Trigon Media
              </a>
            </div>
            <div>
              <a role="button" @click="toogleModal()" class="btn-brand rounded-full"
                >Get early access
              </a>
            </div>
          </div>
        </div>
                      <div class="justify-end">
                  <a role="button" target="_blank" href="https://docs.google.com/document/d/1ZgPdnedCb9-ziI0U1D7t9by6VhxMmkMF4eXwTlEFrM8/edit#heading=h.y7d3xdxnr44m" class="btn-brand rounded-full"
                    > Resume
                  </a>
                </div>

      </div>
    </header>

  </div>
</template>
