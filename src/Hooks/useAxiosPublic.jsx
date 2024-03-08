import axios from "axios";

const axiosPublic = axios.create({
    baseURL: "https://ktweather-server.vercel.app"
})

const useAxiosPublic = () => {

    return axiosPublic;
};

export default useAxiosPublic;