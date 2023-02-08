<template>
  <div
    class="card border border-primary"
    @click="goToLesson(props.lesson.slug)"
  >
    <img :src="props.lesson.img" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ props.lesson.title }}</h5>
      <p class="card-text"></p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
const props = defineProps(["lesson"]);

const goToLesson = (slug: string) => {
  router.push(`/lesson/${slug}`);
};
</script>

<style scoped>
.card {
  margin: 0px 10px 10px 10px;
  cursor: pointer;
  width: 18rem;
}

.card img {
  width: 100%;
  height: 190px;
  margin: 0;
}
</style>
