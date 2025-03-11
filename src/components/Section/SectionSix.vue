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
const tab = ref("ALL");
const filteredTab = ref([]);

const projects = ref([
{logo:null,
name:"Zoogla",
URL:"https://zoogla.co.za/",
project_type:"Brands",
content:"",
    star: FiveStar,
    user: "TA, Brand Manager",
    rate: "4.8 Excellent",
    bgColor: "#ffffff",
},
{logo:null,
name:"Boifiok",
URL:"https://boifiok.ng/",
project_type:"Brands",
content:"",
    star: FiveStar,
    user: "TA, Brand Manager",
    rate: "4.8 Excellent",
    bgColor: "#ffffff",
},

  {
    logo: null,
    name: "Tec Ride",

    content:
      "MySpurr has been an invaluable resource in our search for creative professionals. Their platform empowered us to find voice over artists who perfectly embodied our brand's personality and vision.",
    star: FiveStar,
    user: "TA, Brand Manager",
    rate: "4.8 Excellent",
    bgColor: "#ffffff",
    url: "https://tec-ride.com/",
        project_type: "Brands",

  },
    {
    logo: null,
    name: "Bread Provider",
    content:
      "We had a fantastic experience working with MySpurr to find creative talent for our latest brand campaign. Their platform provided us with a diverse pool of talented professionals, and we were able to connect with artists who perfectly aligned with our brand vision.",
    star: FourStar,
    user: "Seyi Owolabi, Growth Lead",
    rate: "4.5 Excellent",
    bgColor: "#F4F7FA",
    project_type: "Brands",
    url: "https://bread-provider.vercel.app/",
   },
 // {
 //    logo: zendmart,
 //   name: "zendmart",
 //   content:
 //     "As a growing startup, we were seeking innovative ways to elevate our brand's visual identity. MySpurr came to the rescue with a plethora of skilled designers and illustrators who were just the right fit for our project",
 //    star: FourStar,
 //    user: "Emmanuel R, Founder",
 //    rate: "4.5 Excellent",
 //    bgColor: "#0E0135",
 //    project_type: "Brands",
 //    url: "https://www.zendmart.xyz/",
 //  },
  {
    logo: MySpurr,
    name: "MySpurr",

    content:
      "Partnering with MySpurr was a strategic move for our company. They helped us discover exceptional artists who became the face of our latest brand collaboration. The process was seamless, and the talented professionals we found on MySpurr added a unique touch to our campaign. ",
    star: FiveStar,
    user: "Paul Mataso. Project Lead",
    rate: "4.8 Awesome",
    bgColor: "#E9FAFB",
    project_type: "Brands",
    url: "https://www.myspurr.net/",
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
    project_type: "Brands",
    url: "https://croxxtalent.com/",
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
    project_type: "Brands",
    url: "https://kavlr.com/",
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
    project_type: "Brands",
    url: "https://leadfromdemo.netlify.app/",
  },{
    logo: TribinnovAfrica,
    name: "Tribinnov Africa",
    content:
      "We had a fantastic experience working with MySpurr to find creative talent for our latest brand campaign. Their platform provided us with a diverse pool of talented professionals, and we were able to connect with artists who perfectly aligned with our brand vision.",
    star: FourStar,
    user: "Seyi Owolabi, Growth Lead",
    rate: "4.5 Excellent",
    bgColor: "#F4F7FA",
    project_type: "Brands",
    url: "https://tribinnovafrica.com/",
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
    project_type: "Clone",
    url: "https://octupos-deploy-clone-kub.netlify.app/",
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
    url: "https://tribal-gateway-relocation-k.netlify.app/",
  },
  {
    logo: null,
    name: "Percentage Calculator",

    content:
      "MySpurr has been an invaluable resource in our search for creative professionals. Their platform empowered us to find voice over artists who perfectly embodied our brand's personality and vision.",
    star: FiveStar,
    user: "TA, Brand Manager",
    rate: "4.8 Excellent",
    bgColor: "#ffffff",
    url: "https://taskasss.netlify.app/",
  },
  {
    logo: null,
    name: "Themis ...a law agency",

    content:
      "MySpurr has been an invaluable resource in our search for creative professionals. Their platform empowered us to find voice over artists who perfectly embodied our brand's personality and vision.",
    star: FiveStar,
    user: "TA, Brand Manager",
    rate: "4.8 Excellent",
    bgColor: "#ffffff",
    url: "https://themis-law.netlify.app/",
  },
  {
    logo: null,
    name: "System Panel UI",

    content:
      "MySpurr has been an invaluable resource in our search for creative professionals. Their platform empowered us to find voice over artists who perfectly embodied our brand's personality and vision.",
    star: FiveStar,
    user: "TA, Brand Manager",
    rate: "4.8 Excellent",
    bgColor: "#ffffff",
    url: "https://croxx-task.netlify.app/",
  },
  {
    logo: null,
    name: "Movie App",

    content:
      "MySpurr has been an invaluable resource in our search for creative professionals. Their platform empowered us to find voice over artists who perfectly embodied our brand's personality and vision.",
    star: FiveStar,
    user: "TA, Brand Manager",
    rate: "4.8 Excellent",
    bgColor: "#ffffff",
    url: "https://movie-app-two-puce.vercel.app/",
  },
  
]);
const toogleModal = () => {
  showModal.value = !showModal.value;
};
const filterTab = (category) => {
  tab.value = category;
  filteredTab.value = [];
  if (category != "ALL") {
    filteredTab.value = projects.value.filter((item) => item.project_type == category);
  }
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
        class="border-brand font-Satoshi400 border-2 flex rounded-full mx-auto lg:w-[40%]"
      >
        <button
          @click="filterTab('ALL')"
          :class="{ 'bg-brand text-white': tab == 'ALL' }"
          class="border-r-2 rounded-l-full lg:p-4 p-2 py-2 w-full hover:text-white hover:bg-brand text-center border-r-brand"
        >
          All
        </button>
        <button
          @click="filterTab('Brands')"
          :class="{ 'bg-brand text-white': tab == 'Brands' }"
          class="border-r-2 lg:p-4 p-2 py-2 w-full text-center border-r-brand hover:text-white hover:bg-brand"
        >
          Brands
        </button>
        <button
          @click="filterTab('Clone')"
          :class="{ 'bg-brand text-white': tab == 'Clone' }"
          class="lg:p-4 p-2 w-full py-2 rounded-r-full text-center hover:text-white hover:bg-brand"
        >
          Clones
        </button>
      </div>
    </div>
    <div class="grid md:grid-cols-4 grid-cols-1 gap-3 my-10">
      <a
        v-for="item in filteredTab"
        :key="item"
        :style="{
          backgroundColor: item.bgColor,
        }"
        target="_blank"
        :href="item.url"
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
      </a>
    </div>
    <div
      v-if="projects.length && tab == 'ALL'"
      class="grid md:grid-cols-4 grid-cols-1 gap-3 my-10"
    >
      <a
        v-for="item in projects"
        :key="item"
        :style="{
          backgroundColor: item.bgColor,
        }"
        target="_blank"
        :href="item.url"
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
      </a>
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
      <!--             href="mailto:kufreabasibassey3@gmail.com"
 -->
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
