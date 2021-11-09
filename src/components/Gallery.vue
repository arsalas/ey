<template>
  <div class="columns is-multiline is-mobile">
    <div
      class="column is-6-mobile is-4-tablet is-4-desktop is-3-widescreen is-2-fullhd animate__animated animate__zoomIn"
      v-for="{ thumbnailUrl, id } in gallery"
      :key="id"
    >
      <figure @click="removeImage(id)" class="image is-square gallery">
        <Image :image="thumbnailUrl" />
      </figure>
    </div>
  </div>
</template>

<script>
import Image from "./Image.vue";
import useGallery from "../composables/useGallery";

export default {
  components: { Image },
  setup() {
    const { gallery, removeImage } = useGallery();

    return {
      gallery,
      removeImage,
    };
  },
};
</script>

<style scoped lang="scss">
.gallery {
  cursor: pointer;
}

</style>