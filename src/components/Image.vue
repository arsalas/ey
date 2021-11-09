<template>
  <vue-load-image>
    <template v-slot:image>
      <img :src="image" alt="" />
    </template>
    <template v-slot:preloader>
      <img class="fit" :src="require('@/assets/placeholder.png')" />
    </template>
    <template v-slot:error>Image load fails</template>
  </vue-load-image>
</template>

<script>
import VueLoadImage from "vue-load-image";

export default {
  components: { VueLoadImage },
  props: {
    image: {
      type: String,
      required: true,
    },
  },
  setup() {
    return {};
  },
};
</script>

<style scoped>
.fit {
  object-fit: cover;
}
</style>