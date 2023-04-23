<template>
  <div class="lesson">
    <div class="d-flex justify-content-between">
      <h1>{{ lesson?.title }}</h1>
      <TextToSpeechButton :message="message" />
    </div>
    <div>
      <p class="lead">
        <div v-html="lesson?.content"></div>
      </p>
    </div>
    <div>
      <button v-if="hasQuiz" class="btn btn-primary" @click="goToQuiz">
        Take Quiz!
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

import { APILessonService } from "@/services/LessonService";
import TextToSpeechButton from "@/components/TextToSpeechButton.vue";

const lessonService = new APILessonService();

const props = defineProps(["lessonSlug"]);
const lesson = ref(await lessonService.getLesson(props.lessonSlug));

const message = lesson.value?.strippedContent;
const hasQuiz = computed(() => {
  return lesson.value?.hasQuiz;
});


const router = useRouter();
const goToQuiz = () => {
  router.push(`/quiz/${lesson.value?.id}/${lesson.value?.slug}`);
};
</script>

<style scoped></style>
