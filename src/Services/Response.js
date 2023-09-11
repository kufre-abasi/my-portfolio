import { useToast } from "vue-toastification";

const toast = useToast();

export const catchAxiosError = (error) => {

    console.log(error)

    if(error.response?.data?.message){
        toast.error(error.response.data.message, {
            timeout: 4000,
        });
    }

    if(error.response?.data?.errors){
        for (let key in error.response.data.errors) {
            toast.error(error.response.data.errors[key][0], {
                timeout: 18000,
            });
        }
    }

}

export const catchAxiosSuccess = (res) => {

    if(res?.data?.message){
        toast.success(res.data.message, {
            timeout: 4000,
        });
    }

}