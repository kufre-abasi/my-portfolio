<template>
  <div class="modal backdrop-blur z-30 fixed h-screen">
    <div
      class="modal__body relative w-full md:max-w-[660px] bg-white m-0 md:px-5 py-4 px-4 md:max-w-2/12 md:w-2/5"
    >
      <div class="py-5 flex justify-end">
        <button @click="closeModal" class="bg-white p-3 lg:p-2 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M24 3.752l-4.423-3.752-7.771 9.039-7.647-9.008-4.159 4.278c2.285 2.885 5.284 5.903 8.362 8.708l-8.165 9.447 1.343 1.487c1.978-1.335 5.981-4.373 10.205-7.958 4.304 3.67 8.306 6.663 10.229 8.006l1.449-1.278-8.254-9.724c3.287-2.973 6.584-6.354 8.831-9.245z"
            />
          </svg>
        </button>
      </div>

      <div v-if="steps[0]">
        <div class="space-x-6 overflow-y-auto lg:h-auto h-[300px] hide-scrollbar">
          <div class="grid grid-cols-1 gap-4">
            <div class="w-full">
              <label
                class="text-[13.651px] leading-[31.767px] opacity-[0.4986325204372406] text-[#254035] my-3 font-Satoshi500"
                >Name or company Name

                <span class="text-red-600 text-[16px]">*</span></label
              >

              <div
                class="p-2 px-3 bg-brand/10 border-[#2540350F] border-[0.853px] rounded-[9px]"
              >
                <input
                  v-model="formState.name"
                  class="w-full !py-2 outline-none border-none font-Satoshi500 text-[#254035] text-[13px] bg-transparent rounded text-sm"
                  placeholder=""
                />

                <span v-if="errorsMsg.interest" class="error-msg"
                  >Please enter your interest.</span
                >
              </div>
            </div>
            <div class="w-full">
              <label
                class="text-[13.651px] leading-[31.767px] opacity-[0.4986325204372406] text-[#254035] my-3 font-Satoshi500"
                >Email <span class="text-red-600 text-[16px]">*</span></label
              >

              <div
                class="p-2 px-3 bg-brand/10 border-[#2540350F] border-[0.853px] rounded-[9px]"
              >
                <input
                  v-model="formState.name"
                  class="w-full !py-2 outline-none border-none font-Satoshi500 text-[#254035] text-[13px] bg-transparent rounded text-sm"
                  placeholder=""
                />

                <span v-if="errorsMsg.location" class="error-msg"
                  >Please enter your location.</span
                >
              </div>
            </div>
            <div class="w-full">
              <label
                class="text-[13.651px] leading-[31.767px] opacity-[0.4986325204372406] text-[#254035] my-3 font-Satoshi500"
                >Subject <span class="text-red-600 text-[16px]">*</span></label
              >

              <div
                class="p-2 px-3 bg-brand/10 border-[#2540350F] border-[0.853px] rounded-[9px]"
              >
                <input
                  v-model="formState.name"
                  class="w-full !py-2 outline-none border-none font-Satoshi500 text-[#254035] text-[13px] bg-transparent rounded text-sm"
                  placeholder=""
                />
                <span v-if="errorsMsg.name" class="error-msg"
                  >Please enter your name.</span
                >
              </div>
            </div>

            <div class="w-full">
              <label
                class="text-[13.651px] leading-[31.767px] opacity-[0.4986325204372406] text-[#254035] my-3 font-Satoshi500"
                >Message <span class="text-red-600 text-[16px]">*</span></label
              >

              <div
                class="p-2 px-3 bg-brand/10 border-[#2540350F] border-[0.853px] rounded-[9px]"
              >
                <textarea
                  v-model="formState.role"
                  class="w-full !py-2 outline-none border-none font-Satoshi500 text-[#254035] text-[13px] bg-transparent rounded text-sm"
                  placeholder=""
                />
                <span v-if="errorsMsg.role" class="error-msg"
                  >Please enter your role.</span
                >
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-center w-full mt-3">
          <button
            :disabled="loading"
            @click="handleSubmit()"
            class="bg-brand p-3 mx-auto rounded-full px-10 text-white text-[16px] font-Satoshi400"
          >
            <looping-rhombuses-spinner
              v-if="loading"
              :animation-duration="2500"
              :rhombus-size="15"
              color="#ffffff"
            />

            <span v-if="!loading">Send</span>
          </button>
        </div>
      </div>
      <div v-if="steps[1]">
        <div class="text-center py-[200px]">
          <p class="text-[61.429px] leading-[23px] text-brand my-2 font-EBGaramond500">
            Thank You
          </p>
          <p class="text-[18px] leading-[23px] text-[#254035] my-6 font-Satoshi400">
            Your message has been sent successfully, I will response soon.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { LoopingRhombusesSpinner } from "epic-spinners";
import {
  onMounted,
  computed,
  ref,
  onBeforeMount,
  reactive,
  onUnmounted,
  watch,
} from "vue";
import { useCountriesStore } from "@/stores/countries";
import { useWaitlistStore } from "@/stores/waitlist";
import { storeToRefs } from "pinia";

const countriesStore = useCountriesStore();
const waitlistStore = useWaitlistStore();

const { country } = storeToRefs(countriesStore);
const steps = ref([true, false]);
const changeScreen = (from, to, type = null) => {
  steps.value[from] = false;
  steps.value[to] = true;
};

const loading = ref(false);
onMounted(async () => {
  await countriesStore.getCountries();
});
const emit = defineEmits(["closeModal"]);
const closeModal = () => {
  emit("closeModal");
};
const formState = reactive({
  role: "",
  interest: "",
  name: "",
  location: "",
  email: "",
  phoneNo: "",
});
const errorsMsg = reactive({
  role: false,
  interest: false,
  name: false,
  location: false,
  email: false,
  phoneNo: false,
});
// const submitted = ref(false);

const handleSubmit = async () => {
  loading.value = true;

  // Reset errorsMsg
  Object.keys(errorsMsg).forEach((key) => {
    errorsMsg[key] = false;
  });

  // Perform validation before submission
  Object.keys(formState).forEach((key) => {
    if (!formState[key]) {
      errorsMsg[key] = true;
    }
  });

  // Check if there are any errors
  if (Object.values(errorsMsg).some((error) => error)) {
    loading.value = false;
    return;
  }

  // // Reset errorsMsg
  // Object.keys(errorsMsg).forEach((key) => {
  //   errorsMsg[key] = false;
  // });
  // // submitted.value = true;
  // // Perform validation before submission
  // Object.keys(formState).forEach((key) => {
  //   if (!formState[key]) {
  //     errorsMsg[key] = true;
  //   } else {
  //     errorsMsg[key] = false;
  //   }
  // });

  let payload = {
    role: formState.role,
    interest: formState.interest,
    name: formState.name,
    location: formState.location,
    email: formState.email,
    phoneNo: formState.phoneNo,
  };
  try {
    const res = await waitlistStore.createWaitlist(payload);
    loading.value = false;

    // Reset form fields after successful submission
    Object.keys(formState).forEach((key) => {
      formState[key] = "";
    });
    changeScreen(0, 1);
  } catch (error) {
    console.log(error);
  }
};
</script>

<style lang="scss" scoped>
.modal {
  // position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  // height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
  // background-color: transparent;
  /* From https://css.glass */
  background: rgba(0, 0, 0, 0.3);
  // backdrop-filter: blur(7px);

  &__body {
    position: relative;
    // margin-left: auto;
    // width: 40%;
    // background-color: $color-white;
    border-radius: 12px;
    // padding: 20px 30px;
    // padding-bottom: 0px;
    animation: slidedown 0.5s ease;
    // border:'2px solid red';
    // height: 100vh;
    overflow: auto;

    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
