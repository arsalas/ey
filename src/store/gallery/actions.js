import { getGallery } from "../../services";

export const get = async ({ commit }, page) => {
    const resp = await getGallery(page);
    if (resp) {
        commit('get', resp);
        return { ok: true }
    }
    else {
        return { ok: false }
    }
}

export const remove = async ({ commit }, id) => {
    commit('remove', id);
    return { ok: true }
}

