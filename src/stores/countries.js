import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getAllCountries  } from "@/Services/countries"


export const useCountriesStore = defineStore('countries', () => {
    const country =  ref({ })

    const getCountries = async() => {
          country.value = await getAllCountries()
          return country.value
    }

    return { 
        country,
        getCountries,
    }
})