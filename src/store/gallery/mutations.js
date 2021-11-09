
export const get = (state, images) => {
        state.gallery = [...state.gallery, ...images]
}

export const remove = (state, id) => {
        state.gallery =  state.gallery.filter((element) => element.id !== id);
}

