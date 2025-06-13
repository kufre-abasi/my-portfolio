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
import Hivvy_NEW_LOGO from "@/assets/Hivvy_NEW_LOGO.svg";
import boifiok from "@/assets/boifiok.svg";
import MOOVTEAM_LOGO from "@/assets/MOOVTEAM_LOGO.webp";
import TechRideLogo from "@/assets/TechRide-Logo.DufkOsa_.svg";
import techIgnite from "@/assets/techIgnite.svg";
import zoogla from "@/assets/zoogla.svg";
import IBS from "@/assets/IBS_050735.DfNe7l6A.png";
import peakgram from "@/assets/peakgram-logo-black.svg";
const showModal = ref(false);
const tab = ref("ALL");
const filteredTab = ref([]);

const projects = ref([
  {
    logo: peakgram,
    name: "Peakgram",
    content: `Peakgram is more than a design studio—we are a powerhouse of design, branding, and development, helping businesses go beyond the ordinary. From crafting bold visual identities to building digital experiences that engage and inspire, we turn ideas into reality.`,
    star: FiveStar,
    user: "TA, Brand Manager",
    rate: "4.8 Excellent",
    bgColor: "#ffffff",
    project_type: "Brands",
    url: "https://peakgram.com/",
  },

  {
    logo: zoogla,
    name: "Zoogla",
    url: "https://zoogla.co.za/",
    project_type: "Brands",
    content: `Zoogla is a fintech company with two primary offerings: a digital banking app and a vehicle finance platform. The app aims to help users manage their finances, track spending, save, and improve their credit score. The vehicle finance platform connects customers, lenders, and dealerships to simplify car financing. `,
    star: FiveStar,
    user: "TA, Brand Manager",
    rate: "4.8 Excellent",
    bgColor: "#ffffff",
  },
  {
    logo: boifiok,
    name: "Boifiok.ng",
    url: "https://boifiok.ng/",
    project_type: "Brands",
    content: `Boifiok is a social commerce platform focused on group buying of groceries in Nigeria, aiming to make them more affordable. It's a way to connect people who want to buy the same items together to negotiate better prices with suppliers. `,
    star: FiveStar,
    user: "TA, Brand Manager",
    rate: "4.8 Excellent",
    bgColor: "#ffffff",
  },
  {
    logo: Hivvy_NEW_LOGO,
    name: "Hivvy",
    url: "https://www.hivvy.app/",
    project_type: "Brands",
    content: `Hivvy.app appears to be a platform designed to foster community and connection, focusing on personal growth and development. It's described as a place to "connect, create, and thrive". Specifically, the app aims to bring users closer to their communities, prioritize value through community management, and make it easier to grow and learn. `,
    star: FiveStar,
    user: "TA, Brand Manager",
    rate: "4.8 Excellent",
    bgColor: "#ffffff",
  },
  {
    logo: TechRideLogo,
    name: "Tec-Ride",
    content: `Tec-Ride is a global ride-hailing service that aims to provide convenient, comfortable, and reliable transportation. It offers a range of features, including quick booking, real-time tracking, secure payments, and fare estimates. Tec-Ride also expands into luxury and VIP experiences, even offering helicopter leasing services. `,
    star: FiveStar,
    user: "TA, Brand Manager",
    rate: "4.8 Excellent",
    bgColor: "#ffffff",
    url: "https://tec-ride.com/",
    project_type: "Brands",
  },
  {
    logo: MOOVTEAM_LOGO,
    name: "Moovteam",
    url: "https://moovteam.com/",
    project_type: "Brands",
    content: `The Moov Investment Limited, a Blockchain Marketing and Business Development Company. Established in 2021, there specialize in providing innovative solutions tailored to businesses worldwide. With a focus on trust, innovation, and client-centeredness, there drive growth and prosperity in the digital landscape.`,
    star: FiveStar,
    user: "TA, Brand Manager",
    rate: "4.8 Excellent",
    bgColor: "#ffffff",
  },
  {
    logo: IBS,
    name: "Ibom Blockchain Summit",
    url: "https://ibomblockchain.com/",
    project_type: "Brands",
    content: `​The Ibom Blockchain Summit is an Annual convergence of Blockchain Innovators, Industry Leaders, Key Opinion Leaders and Enthusiast to gather thoughts experience and expertise while displaying innovative Solutions and Products in the fast Growing tech industry with the rapid evolution of Web3 technologies.`,
    star: FiveStar,
    user: "TA, Brand Manager",
    rate: "4.8 Excellent",
    bgColor: "#ffffff",
  },
  {
    logo: techIgnite,
    name: "Tech ignite By GDGOC",
    url: "https://www.techignite.live/",
    project_type: "Brands",
    content: `Tech Ignite 2025 is a student-focused conference designed to empower the next generation of tech leaders through hands-on learning, networking opportunities, and innovation showcases.`,
    star: FiveStar,
    user: "TA, Brand Manager",
    rate: "4.8 Excellent",
    bgColor: "#ffffff",
  },
  // {
  //   logo: null,
  //   name: "Bread Provider",
  //   content:
  //     "We had a fantastic experience working with MySpurr to find creative talent for our latest brand campaign. Their platform provided us with a diverse pool of talented professionals, and we were able to connect with artists who perfectly aligned with our brand vision.",
  //   star: FourStar,
  //   user: "Seyi Owolabi, Growth Lead",
  //   rate: "4.5 Excellent",
  //   bgColor: "#F4F7FA",
  //   project_type: "Brands",
  //   url: "https://bread-provider.vercel.app/",
  // },
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

    content: `MySpurr is a platform that connects African creative talents with opportunities to grow their careers and showcase their skills. It aims to empower creative professionals by providing tools for building their brand, finding jobs and internships, and connecting with a community of like-minded individuals.`,
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
    content: `CroxxTalent is a Human Resources technology company (HR Tech) focusing on matching talent, particularly in the energy industry, with organizations. They use a competency-based assessment approach, combining it with data-driven insights to ensure the right people are hired for the right roles. `,
    star: FiveStar,
    user: "Felicia O. Marketing Chief",
    rate: "4.8 Excellent",
    bgColor: "#ffffff",
    project_type: "Brands",
    url: "https://croxxtalent.com/",
  },
  {
    logo: KavlrLogo,
    name: "Kavlr.io(Gokamba)",
    content: `Gokamba.com is a platform that offers a variety of financial services, including multicurrency stablecoin accounts, money transfers, and a business current account with a Visa card. It also provides tools for building websites and managing businesses. `,
    star: FiveStar,
    user: "TA, Brand Manager",
    rate: "4.8 Excellent",
    bgColor: "#2B3C87",
    project_type: "Brands",
    url: "https://gokamba.com/",
  },
  // {
  //   logo: Leadfrom,
  //   name: "Lead from",

  //   content:
  //     "MySpurr has been an invaluable resource in our search for creative professionals. Their platform empowered us to find voice over artists who perfectly embodied our brand's personality and vision.",
  //   star: FiveStar,
  //   user: "TA, Brand Manager",
  //   rate: "4.8 Excellent",
  //   bgColor: "#ffffff",
  //   project_type: "Brands",
  //   url: "https://leadfromdemo.netlify.app/",
  // },
  {
    logo: TribinnovAfrica,
    name: "Tribinnov Africa",
    content: `Tribinnov Africa is a crowdsourced innovation platform and Pan-African ecosystem that aims to accelerate African innovations through scientific research, commercialization, business development, and funding. It's essentially a "Tribe of Innovation" that brings together talents, investors, and industry leaders to create and scale African solutions. `,
    star: FourStar,
    user: "Seyi Owolabi, Growth Lead",
    rate: "4.5 Excellent",
    bgColor: "#F4F7FA",
    project_type: "Brands",
    url: "https://tribinnovafrica.com/",
  },
  // {
  //   logo: null,
  //   name: "Octupos Clone",

  //   content:
  //     "MySpurr has been an invaluable resource in our search for creative professionals. Their platform empowered us to find voice over artists who perfectly embodied our brand's personality and vision.",
  //   star: FiveStar,
  //   user: "TA, Brand Manager",
  //   rate: "4.8 Excellent",
  //   bgColor: "#ffffff",
  //   project_type: "Clone",
  //   url: "https://octupos-deploy-clone-kub.netlify.app/",
  // },
  // {
  //   logo: null,
  //   name: "Tribal Gateway",

  //   content:
  //     "MySpurr has been an invaluable resource in our search for creative professionals. Their platform empowered us to find voice over artists who perfectly embodied our brand's personality and vision.",
  //   star: FiveStar,
  //   user: "TA, Brand Manager",
  //   rate: "4.8 Excellent",
  //   bgColor: "#ffffff",
  //   url: "https://tribal-gateway-relocation-k.netlify.app/",
  // },
  // {
  //   logo: null,
  //   name: "Percentage Calculator",

  //   content:
  //     "MySpurr has been an invaluable resource in our search for creative professionals. Their platform empowered us to find voice over artists who perfectly embodied our brand's personality and vision.",
  //   star: FiveStar,
  //   user: "TA, Brand Manager",
  //   rate: "4.8 Excellent",
  //   bgColor: "#ffffff",
  //   url: "https://taskasss.netlify.app/",
  // },
  // {
  //   logo: null,
  //   name: "Themis ...a law agency",

  //   content:
  //     "MySpurr has been an invaluable resource in our search for creative professionals. Their platform empowered us to find voice over artists who perfectly embodied our brand's personality and vision.",
  //   star: FiveStar,
  //   user: "TA, Brand Manager",
  //   rate: "4.8 Excellent",
  //   bgColor: "#ffffff",
  //   url: "https://themis-law.netlify.app/",
  // },
  // {
  //   logo: null,
  //   name: "System Panel UI",

  //   content:
  //     "MySpurr has been an invaluable resource in our search for creative professionals. Their platform empowered us to find voice over artists who perfectly embodied our brand's personality and vision.",
  //   star: FiveStar,
  //   user: "TA, Brand Manager",
  //   rate: "4.8 Excellent",
  //   bgColor: "#ffffff",
  //   url: "https://croxx-task.netlify.app/",
  // },
  // {
  //   logo: null,
  //   name: "Movie App",

  //   content:
  //     "MySpurr has been an invaluable resource in our search for creative professionals. Their platform empowered us to find voice over artists who perfectly embodied our brand's personality and vision.",
  //   star: FiveStar,
  //   user: "TA, Brand Manager",
  //   rate: "4.8 Excellent",
  //   bgColor: "#ffffff",
  //   url: "https://movie-app-two-puce.vercel.app/",
  // },
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
        class="text-white text-[43px] lg:text-[56px] leading-[59px] lg:leading-[74px] font-EBGaramond500 mb-8"
      >
        Projects.
      </h2>
    </div>
    <!-- <div>
      <div
        class="border-brand font-Satoshi400 border-2 text-white flex rounded-full mx-auto lg:w-[40%] mb-12"
      >
        <button
          @click="filterTab('ALL')"
          :class="{ 'bg-brand text-white': tab == 'ALL' }"
          class="border-r-2 rounded-l-full lg:p-3 p-2 py-2 w-full hover:text-white hover:bg-brand text-center border-r-brand"
        >
          All
        </button>
        <button
          @click="filterTab('Brands')"
          :class="{ 'bg-brand text-white': tab == 'Brands' }"
          class="border-r-2 lg:p-3 p-2 py-2 w-full text-center border-r-brand hover:text-white hover:bg-brand"
        >
          Brands
        </button>
        <button
          @click="filterTab('Clone')"
          :class="{ 'bg-brand text-white': tab == 'Clone' }"
          class="lg:p-3 p-2 w-full py-2 rounded-r-full text-center hover:text-white hover:bg-brand"
        >
          Clones
        </button>
      </div>
    </div> -->

    <!-- New Project Grid Layout -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <a
        v-for="item in filteredTab"
        :key="item"
        :href="item.url"
        target="_blank"
        class="group relative bg-[#fff] rounded-2xl overflow-hidden border border-gray-800 hover:border-brand/30 transition-all duration-500"
      >
        <div class="aspect-[4/3] relative overflow-hidden">
          <img
            v-if="item.logo"
            :src="item.logo"
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div
            v-else
            class="w-full h-full flex bg-gradient-to-br from-gray-900 to-gray-800 items-center justify-center"
          >
            <h2
              class="font-Satoshi500 text-[32px] text-brand group-hover:text-brand/80 transition-colors"
            >
              {{ item.name }}
            </h2>
          </div>
        </div>

        <!-- Overlay Content -->
        <div
          class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6"
        >
          <h3
            class="text-white text-xl font-Satoshi500 mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
          >
            {{ item.name }}
          </h3>
          <p
            class="text-gray-300 text-sm font-mono transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100"
          >
            {{ item.content || "No description available" }}
          </p>
          <div
            class="flex items-center gap-2 mt-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200"
          >
            <img :src="item.star" class="w-5 h-5" />
            <span class="text-sm text-gray-400">{{ item.rate }}</span>
          </div>
        </div>
      </a>
    </div>

    <!-- All Projects Grid -->
    <div
      v-if="projects.length && tab == 'ALL'"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      <a
        v-for="item in projects"
        :key="item"
        :href="item.url"
        target="_blank"
        class="group relative bg-[#ebe9f5] h-[40vh] rounded-2xl overflow-hidden border border-gray-800 hover:border-brand/30 transition-all duration-500"
      >
        <div class="aspect-[4/3] relative h-full overflow-hidden">
          <img
            v-if="item.logo"
            :src="item.logo"
            class="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
          />
          <div
            v-else
            class="w-full h-full flex bg-white text-center items-center justify-center"
          >
            <h2
              class="font-Satoshi500 text-[32px] text-brand group-hover:text-brand/80 transition-colors"
            >
              {{ item.name }}
            </h2>
          </div>
        </div>

        <!-- Overlay Content -->
        <div
          class="absolute inset-0 bg-[#000000de] opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6"
        >
          <h3
            class="text-white text-xl font-Satoshi500 mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
          >
            {{ item.name }}
          </h3>
          <p
            class="text-gray-300 text-sm font-mono transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100"
          >
            {{ item.content || "No description available" }}
          </p>
        </div>
      </a>
    </div>

    <div
      class="flex flex-row-reverse lg:flex-nowrap flex-wrap lg:gap-0 gap-10 justify-center pt-20"
    >
      <div
        class="flex lg:flex-nowrap text-white flex-wrap gap-8 lg:gap-1 justify-center lg:justify-center w-full lg:py-14 py-3 font-Satoshi500"
      >
        <div>
          <a target="_blank" role="button" class="btn-light !text-white text-[18px]">
            You want to hire me?
          </a>
        </div>
        <div>
          <a
            role="button"
            @click="toogleModal()"
            class="bg-white p-3 mx-auto rounded-full px-10 text-black text-[16px] font-Satoshi400"
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
