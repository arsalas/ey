import axios from "axios";

const limit = 30;

export const getGallery = async (start = 1) => {
    let resp;
    try {
        resp = await axios.get(
            `${process.env.VUE_APP_URL_API}?_start=${start * limit}&_limit=${limit}`
        );
        resp = resp.data;
    } catch (e) {
        resp = false;
    }
    return resp;
}