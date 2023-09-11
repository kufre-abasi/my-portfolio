<template>
  <div
    class="min-h-[557px] background py-20"
    :style="{ backgroundImage: `url(${image})` }"
  >
    <div class="container">
      <svg
        width="65"
        height="65"
        viewBox="0 0 65 65"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cx="32.5" cy="32.3862" rx="32.5" ry="32.2045" fill="#43D0DF" />
        <path
          d="M25.5371 22.3224C25.5371 20.6555 27.4565 19.7201 28.7694 20.7471L43.2479 32.0736C44.3207 32.9129 44.259 34.5556 43.1263 35.3121L28.6478 44.981C27.3188 45.8685 25.5371 44.9159 25.5371 43.3178V22.3224Z"
          fill="white"
        />
      </svg>

      <h2
        class="text-white text-[50px] lg:text-[62px] leading-[50px] lg:leading-[76px] font-Satoshi400 mt-2 lg:mt-4 mb-8"
      >
        Let’s get started <br class="md:block hidden" />
        It’s <span class="text-brand">simple.</span>
      </h2>
      <p
        class="text-[20px] text-white leading-[30px] lg:leading-[30px] font-Satoshi400 my-8 md:my-6"
      >
        Get access to our top 1% talent as well as a complete set of
        <br class="md:block hidden" />
        workforce management tools to find and retain the best talent.
      </p>
      <div class="flex lg:flex-nowrap flex-wrap justify-between gap-10">
        <div
          class="bg-white flex w-full gap-5 py-6 p-10 rounded-[10px] opacity-[0.8999999761581421]"
        >
          <svg
            width="53"
            height="52"
            viewBox="0 0 53 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.677856"
              y="0.405762"
              width="51.4017"
              height="50.9345"
              rx="25.4672"
              fill="#007582"
            />
            <path
              d="M27.2569 28.2085C22.2107 28.2085 17.9004 28.9969 17.9004 32.1504C17.9004 35.305 22.1838 36.1212 27.2569 36.1212C32.3032 36.1212 36.6135 35.334 36.6135 32.1793C36.6135 29.0247 32.3312 28.2085 27.2569 28.2085Z"
              fill="white"
            />
            <path
              opacity="0.4"
              d="M27.2571 25.2044C30.6946 25.2044 33.4488 22.474 33.4488 19.069C33.4488 15.6639 30.6946 12.9336 27.2571 12.9336C23.8208 12.9336 21.0654 15.6639 21.0654 19.069C21.0654 22.474 23.8208 25.2044 27.2571 25.2044Z"
              fill="white"
            />
          </svg>
          <div>
            <p class="font-Satoshi400 leading-[33px] text-black text-[22px]">
              It’s take 2 minute to open an acocunt.
            </p>
            <p
              class="font-Satoshi500 leading-[15px] mt-1 uppercase text-brand text-[12px]"
            >
              Open Acount
            </p>
          </div>
        </div>
        <div
          class="bg-white flex w-full gap-5 py-6 p-8 rounded-[10px] opacity-[0.8999999761581421]"
        >
          <svg
            width="52"
            height="52"
            viewBox="0 0 52 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.31665"
              y="0.42627"
              width="51.4017"
              height="50.9345"
              rx="25.4672"
              fill="#007582"
            />
            <path
              opacity="0.4"
              d="M30.619 14.8711H21.9028C18.7412 14.8711 16.9004 16.7055 16.9004 19.8486V30.4942C16.9004 33.6889 18.7412 35.482 21.9028 35.482H30.619C33.8316 35.482 35.6204 33.6889 35.6204 30.4942V19.8486C35.6204 16.7055 33.8316 14.8711 30.619 14.8711Z"
              fill="white"
            />
            <path
              d="M22.1831 29.0314H30.3367C30.7517 29.0726 31.0647 29.423 31.0647 29.8455C31.0647 30.2567 30.7517 30.6081 30.3367 30.6494H22.1831C21.8711 30.6906 21.5695 30.536 21.4031 30.2784C21.2367 30.0104 21.2367 29.6704 21.4031 29.4127C21.5695 29.1448 21.8711 29.0005 22.1831 29.0314ZM30.3367 24.3311C30.7839 24.3311 31.1479 24.6928 31.1479 25.136C31.1479 25.5791 30.7839 25.9398 30.3367 25.9398H22.1831C21.7349 25.9398 21.3719 25.5791 21.3719 25.136C21.3719 24.6928 21.7349 24.3311 22.1831 24.3311H30.3367ZM25.2917 19.6638C25.7399 19.6638 26.1039 20.0244 26.1039 20.4666C26.1039 20.921 25.7399 21.2817 25.2917 21.2817H22.1831C21.7349 21.2817 21.3719 20.921 21.3719 20.4779C21.3719 20.0348 21.7349 19.6741 22.1831 19.6741V19.6638H25.2917Z"
              fill="white"
            />
          </svg>

          <div>
            <p class="font-Satoshi400 leading-[33px] text-black text-[22px]">
              Find talents or search your desire work.
            </p>
            <p
              class="font-Satoshi500 leading-[15px] mt-1 uppercase text-brand text-[12px]"
            >
              Apply FOR job or hire
            </p>
          </div>
        </div>
        <div
          class="bg-white flex w-full gap-5 py-6 p-10 rounded-[10px] opacity-[0.8999999761581421]"
        >
          <svg
            width="53"
            height="52"
            viewBox="0 0 53 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.989746"
              y="0.405762"
              width="51.4017"
              height="50.9345"
              rx="25.4672"
              fill="#007582"
            />
            <path
              d="M27.1668 18.4387L33.0488 23.1485C33.1907 23.2611 33.2149 23.4678 33.1042 23.6118L26.1309 32.6155C25.6925 33.1717 25.0465 33.4864 24.3544 33.498L20.5476 33.5445C20.3446 33.5468 20.167 33.4074 20.1208 33.2077L19.2556 29.4804C19.1057 28.7953 19.2556 28.0869 19.694 27.5412L26.7019 18.4945C26.8149 18.3493 27.0237 18.3238 27.1668 18.4387Z"
              fill="white"
            />
            <path
              opacity="0.4"
              d="M35.6835 20.3424L34.5495 21.7451C34.4353 21.8879 34.23 21.9112 34.0881 21.7974C32.7096 20.6919 29.1797 17.8552 28.2003 17.0691C28.0573 16.9529 28.0376 16.7462 28.153 16.6023L29.2466 15.2565C30.2386 13.9908 31.969 13.8747 33.3648 14.9778L34.9683 16.2435C35.6258 16.7544 36.0641 17.4279 36.2141 18.1362C36.3871 18.9153 36.2026 19.6805 35.6835 20.3424Z"
              fill="white"
            />
          </svg>

          <div>
            <p class="font-Satoshi400 leading-[33px] text-black text-[22px]">
              Get your work done quickly with MySpurr
            </p>
            <p
              class="font-Satoshi500 leading-[15px] mt-1 uppercase text-brand text-[12px]"
            >
              GROW WITH MYSPURR
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import mainbg from "@/assets/img/background.webp";
const image = mainbg;
</script>

<style scoped>
.background {
  background-size: cover;
  background-blend-mode: overlay;
  background-color: #000000ab;
}
</style>
