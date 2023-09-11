<script setup>
import { ref } from "vue";
import Modal from "@/components/Modal.vue";

const showModal = ref(false);

const talentData = ref([
  {
    name: "Connect",
    content:
      "Connect with top businesses across the globe and showcase your skills to a wider audience.",
    showContent: false,
  },
  {
    name: "Discover",
    content:
      "Discover new job opportunities in your field and receive alerts for job postings that match your skills and interests.",
    showContent: false,
  },
  {
    name: "Build",
    content:
      "Build your portfolio and profile on MySpurr to attract potential employers and showcase your best work.",
    showContent: false,
  },
  {
    name: "Join",
    content:
      "Join a community of creative professionals and gain access to networking events, workshops, and industry insights.",
    showContent: false,
  },
]);
const businessData = ref([
  {
    name: "Access",
    content:
      "Access a diverse pool of talented creatives from around the world and streamline your recruitment process.",
    showContent: false,
  },
  {
    name: "Find",
    content:
      "Find the right talent for your project with ease and get started on your project faster.",
    showContent: false,
  },
  {
    name: "Collaborate",
    content:
      "Collaborate with top professionals in your industry and benefit from their unique perspectives and creative skills.",
    showContent: false,
  },
  {
    name: "Manage",
    content:
      "Manage your hiring process seamlessly with MySpurr's user-friendly platform and tools.",
    showContent: false,
  },
]);

const toggleTalentData = (index) => {
  talentData.value[index].showContent = !talentData.value[index].showContent;
};
const toggleBusinessData = (index) => {
  businessData.value[index].showContent = !businessData.value[index].showContent;
};
const toogleModal = () => {
  showModal.value = !showModal.value;
};
</script>
<template>
  <section class="py-14 lg:py-16 md:h-auto h-full bg-[#E9FAFB] lg:mb-16">
    <div
      class="grid container lg:grid-cols-2 lg:gap-[100px] gap-[75px] grid-cols-1 relative"
    >
      <div>
        <h1
          class="font-Satoshi700 text-brand lg:text-[26px] text-[27px] leading-[52.234px] mb-4"
        >
          Creative Talents
        </h1>
        <h2
          class="text-[#212221] lg:text-[42px] text-[40px] leading-[100%] lg:leading-[114%] font-EBGaramond500 mb-8"
        >
          Find your next creative <br class="md:block hidden" />
          opportunity on MySpurr
        </h2>
        <div class="py-16">
          <ul class="flex flex-col gap-8 font-Satoshi500">
            <li v-for="(content, index) in talentData" :key="content">
              <div
                @click="toggleTalentData(index)"
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
              <hr class="bg-[#6C8285] h-[2px]" />
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
      <div>
        <h1
          class="font-Satoshi700 text-brand lg:text-[26px] text-[27px] leading-[52.234px] mb-4"
        >
          Businesses
        </h1>
        <h2
          class="text-[#212221] lg:text-[42px] text-[40px] leading-[100%] lg:leading-[114%] font-EBGaramond500 mb-8"
        >
          Hire top creative talent <br class="md:block hidden" />
          on MySpurr
        </h2>
        <div class="py-16">
          <ul class="flex flex-col gap-8 font-Satoshi500">
            <li v-for="(content, index) in businessData" :key="content">
              <div
                @click="toggleBusinessData(index)"
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
              <hr class="bg-[#6C8285] h-[2px]" />
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
    </div>
    <Modal @closeModal="toogleModal" v-if="showModal" />
  </section>
</template>
