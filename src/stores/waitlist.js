import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { submitWaitlist  } from "@/Services/form.js"


export const useWaitlistStore = defineStore('waitList', () => {

    const createWaitlist = async(payload) => {
          submitWaitlist(payload)
    }
    return { 
        createWaitlist
    }
})