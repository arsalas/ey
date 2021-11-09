<template>
  <div class="p-2">
    <infinite-scroll @infinite-scroll="load">
      <Gallery />
    </infinite-scroll>
  </div>
</template>

<script>
import { onMounted } from "vue";
import InfiniteScroll from "infinite-loading-vue3";

import Gallery from "../components/Gallery.vue";
import useGallery from "../composables/useGallery";

export default {
  components: { InfiniteScroll, Gallery },
  setup() {
    const { getGallery } = useGallery();
    let isLoading = false;
    let start = 0;
    onMounted(() => load());
    const load = async () => {
      if (!isLoading) {
        isLoading = true;
        await getGallery(start);
        isLoading = false;
        start++;
      }
    };
    return {
      load,
    };
  },
};
</script>

<style scoped lang="scss">
</style>