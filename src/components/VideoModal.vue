<template>
    <div class="modal backdrop-blur z-30 fixed h-screen">
        <div class="modal__body relative lg:w-[80%] w-auto bg-white m-0 md:px-5 py-4 px-4 ">
            <div class="py-5 flex justify-between">
                <img src="@/assets/Logo.png" class="h-[40px] md:h-[27.53px] w-auto" alt="mySpurr Logo" />
                <button @click="closeModal" class="bg-brand p-3 lg:p-2 rounded-md">
                    <img src="@/assets/img/xIcon.svg" class="h-[14px] md:h-[12.53px] w-auto" alt="close" />
                </button>
            </div>

            <div class="w-full" v-if="steps[0]">
            <iframe class="w-full lg:h-[80vh] h-[50vh]" width="auto" height="auto" src="https://www.youtube.com/embed/Jq32B1BceDc" title="Trigon Media by Tobi" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>            </div>
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
const errorsMsg = ref({
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
    // submitted.value = true;
    // Perform validation before submission
    Object.keys(formState).forEach((key) => {
        if (!formState[key]) {
            errorsMsg[key] = true;
        } else {
            errorsMsg[key] = false;
        }
    });

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
            formState[key] = " ";
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
