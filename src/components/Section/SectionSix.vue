<script setup>
import { ref, onMounted, reactive, watch, computed } from "vue";
import Modal from "@/components/Modal.vue";
import Leadfrom from "@/assets/leadfrom.jpg";
import MySpurr from "@/assets/myspurr.png";
import KavlrLogo from "@/assets/img/kavlr_Logo.svg";
import zendmart from "@/assets/zendmart.svg";
import Croxxtalent from "@/assets/croxxtalent.png";
import TribinnovAfrica from "@/assets/tribinnovAfrica.png";
import FourStar from "@/assets/star/4star.svg";
import FiveStar from "@/assets/star/5star.svg";
const showModal = ref(false);

const data = ref([
  {
    logo: TribinnovAfrica,
    name: "Tribinnov Africa",
    content:
      "We had a fantastic experience working with MySpurr to find creative talent for our latest brand campaign. Their platform provided us with a diverse pool of talented professionals, and we were able to connect with artists who perfectly aligned with our brand vision.",
    star: FourStar,
    user: "Seyi Owolabi, Growth Lead",
    rate: "4.5 Excellent",
    bgColor: "#F4F7FA",
  },
  {
    logo: zendmart,
    name: "zendmart",

    content:
      "As a growing startup, we were seeking innovative ways to elevate our brand's visual identity. MySpurr came to the rescue with a plethora of skilled designers and illustrators who were just the right fit for our project",
    star: FourStar,
    user: "Emmanuel R, Founder",
    rate: "4.5 Excellent",
    bgColor: "#0E0135",
  },
  {
    logo: MySpurr,
    name: "MySpurr",

    content:
      "Partnering with MySpurr was a strategic move for our company. They helped us discover exceptional artists who became the face of our latest brand collaboration. The process was seamless, and the talented professionals we found on MySpurr added a unique touch to our campaign. ",
    star: FiveStar,
    user: "Paul Mataso. Project Lead",
    rate: "4.8 Awesome",
    bgColor: "#E9FAFB",
  },
  {
    logo: Croxxtalent,
    name: "Croxxtalent",

    content:
      "Working with MySpurr was a game-changer for our event planning business. Their platform offered us access to a wide range of talented creatives, including photographers, videographers, and graphic designers.",
    star: FiveStar,
    user: "Felicia O. Marketing Chief",
    rate: "4.8 Excellent",
    bgColor: "#ffffff",
  },
  {
    logo: KavlrLogo,
    name: "Kavlr.io",

    content:
      "MySpurr has been an invaluable resource in our search for creative professionals. Their platform empowered us to find voice over artists who perfectly embodied our brand's personality and vision.",
    star: FiveStar,
    user: "TA, Brand Manager",
    rate: "4.8 Excellent",
    bgColor: "#2B3C87",
  },
  {
    logo: Leadfrom,
    name: "Lead from",

    content:
      "MySpurr has been an invaluable resource in our search for creative professionals. Their platform empowered us to find voice over artists who perfectly embodied our brand's personality and vision.",
    star: FiveStar,
    user: "TA, Brand Manager",
    rate: "4.8 Excellent",
    bgColor: "#ffffff",
  },
  {
    logo: null,
    name: "Octupos Clone",

    content:
      "MySpurr has been an invaluable resource in our search for creative professionals. Their platform empowered us to find voice over artists who perfectly embodied our brand's personality and vision.",
    star: FiveStar,
    user: "TA, Brand Manager",
    rate: "4.8 Excellent",
    bgColor: "#ffffff",
  },
  {
    logo: null,
    name: "Tribal Gateway",

    content:
      "MySpurr has been an invaluable resource in our search for creative professionals. Their platform empowered us to find voice over artists who perfectly embodied our brand's personality and vision.",
    star: FiveStar,
    user: "TA, Brand Manager",
    rate: "4.8 Excellent",
    bgColor: "#ffffff",
  },
  {
    logo: null,
    name: "Coop Wallet(% Calculator)",

    content:
      "MySpurr has been an invaluable resource in our search for creative professionals. Their platform empowered us to find voice over artists who perfectly embodied our brand's personality and vision.",
    star: FiveStar,
    user: "TA, Brand Manager",
    rate: "4.8 Excellent",
    bgColor: "#ffffff",
  },
]);
const toogleModal = () => {
  showModal.value = !showModal.value;
};
</script>
<template>
  <div class="py-20 container">
    <div class="flex justify-center">
      <h2
        class="text-brand text-[43px] lg:text-[56px] leading-[59px] lg:leading-[74px] font-EBGaramond500 mb-8"
      >
        Projects.
      </h2>
    </div>
    <div>
      <div
        class="border-brand font-Satoshi400 border-2 flex rounded-full mx-auto w-[40%]"
      >
        <button
          class="border-r-2 rounded-l-full p-4 py-2 w-full text-center border-r-brand"
        >
          All
        </button>
        <button class="border-r-2 p-4 py-2 w-full text-center border-r-brand">
          Apps
        </button>
        <button class="p-4 w-full py-2 rounded-r-full text-center">Clones</button>
      </div>
    </div>
    <div class="grid md:grid-cols-4 grid-cols-1 gap-3 my-10">
      <div
        v-for="item in data"
        :key="item"
        :style="{
          backgroundColor: item.bgColor,
        }"
        role="button"
        class="text-[#fff] w-full p-6 flex cursor-pointer justify-center shadow-lg items-center rounded-xl"
      >
        <div class="h-[6rem] flex overflow-hidden justify-center items-center">
          <img v-if="item.logo" :src="item.logo" />
          <h2 v-else class="font-Satoshi500 text-[26px] text-brand leading-[28px]">
            {{ item.name }}
          </h2>
        </div>
        <!-- <div class="mt-3 flex flex-col justify-between">
          <div class="h-auto">
            <h3 class="font-Satoshi500 text-[16px] leading-[28px]">
              {{
                item.content.length <= 100
                  ? item.content
                  : item.content.slice(0, 100) + "..."
              }}
            </h3>
          </div>
        </div> -->
      </div>
    </div>
    <div
      class="flex flex-row-reverse lg:flex-nowrap flex-wrap lg:gap-0 gap-10 justify-center pt-20"
    >
      <div
        class="flex lg:flex-nowrap flex-wrap gap-8 lg:gap-1 justify-center lg:justify-center w-full lg:py-14 py-3 font-Satoshi500"
      >
        <div>
          <a target="_blank" role="button" class="btn-light text-[18px]">
            You want to hire me?
          </a>
        </div>
        <div>
          <a
            role="button"
            @click="toogleModal()"
            class="bg-brand p-3 mx-auto rounded-full px-10 text-white text-[16px] font-Satoshi400"
            >Send a mail
          </a>
        </div>
      </div>

      <div class="justify-between w-full hidden mt-3">
        <div>
          <button class="btn-brand rounded-full w-full font-Satoshi400">
            Get early access
          </button>
        </div>
        <div>
          <button class="btn-brand rounded-full w-full font-Satoshi400">
            Get early access
          </button>
        </div>
      </div>
    </div>
    <Modal @closeModal="toogleModal" v-if="showModal" />
  </div>
</template>

<style></style>
