import { computed } from 'vue'
import { useStore } from 'vuex'

const useGallery = () => {

    const store = useStore();

    const getGallery = async (page) => {
        const resp = await store.dispatch('gallery/get', page)
        return resp
    }

    const removeImage = async (id) => {
        const resp = await store.dispatch('gallery/remove', id)
        return resp
    }

    return {
        getGallery,
        removeImage,
        gallery: computed(() => store.getters['gallery/gallery']),
    }
}

export default useGallery
