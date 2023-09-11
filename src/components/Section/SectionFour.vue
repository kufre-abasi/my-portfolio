<template>
  <div
    class="flex container mx-auto gap-20 py-[140px] lg:flex-row flex-col-reverse h-full justify-between"
  >
    <div>
      <h2
        class="text-brand text-[43px] lg:text-[56px] leading-[114%] font-EBGaramond500 mb-8"
      >
        Improve your skills and knowledge
      </h2>
      <div class="py-16">
        <ul class="flex flex-col gap-8 font-Satoshi500">
          <li v-for="(content, index) in businessData" :key="content.name">
            <div
              @click="toggleBusinessData(index)"
              role="button"
              class="py-3 flex justify-between text-brand font-Satoshi700 items-center cursor-pointer text-[24px]"
            >
              <div>{{ content.name }}</div>
              <div>
                <svg
                  :class="{ 'rotate-180': content.showContent }"
                  width="16"
                  height="10"
                  viewBox="0 0 16 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.09973 0.999756L8.1367 7.84318L14.3428 0.999756"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
            </div>
            <div v-if="content.showContent" class="py-4">
              <h3 class="text-[18px] text-[#000000B2] font-Satoshi400 mb-4">
                {{ content.content }}
              </h3>
            </div>
            <hr class="bg-[#DEDEDE] h-[2px]" />
          </li>
        </ul>
      </div>
      <button
        @click="toogleModal()"
        class="bg-brand p-4 rounded-full px-10 text-white text-[16px] font-Satoshi400"
      >
        Get early access
      </button>
    </div>
    <img src="@/assets/img/man_and_woman.webp" class="md:h-[600px] md:mt-7" alt="" />
    <Modal @closeModal="toogleModal" v-if="showModal" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Modal from "@/components/Modal.vue";

const showModal = ref(false);

const businessData = ref([
  {
    name: "Learn",
    content:
      "Learn new skills and improve your craft with MySpurr's online courses and workshops.",
    showContent: false,
  },
  {
    name: "Access",
    content:
      "Access online courses and workshops from anywhere, making it easy for you to upskill on your own.",
    showContent: false,
  },
  {
    name: "Grow",
    content:
      "Find apprenticeships that match your skills and interests with our comprehensive mapping system.",
    showContent: false,
  },
]);

const toggleBusinessData = (index) => {
  businessData.value[index].showContent = !businessData.value[index].showContent;
};
const toogleModal = () => {
  showModal.value = !showModal.value;
};
</script>

<style></style>
