<template>
  <div class="lesson">
    <div class="d-flex justify-content-between">
      <h1>{{ lesson?.title }}</h1>
      <TextToSpeechButton :message="message" />
    </div>
    <div>
      <p class="lead">{{ lesson?.explanation }}</p>
      <p class="lead">{{ lesson?.example }}</p>
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

import { FileBasedLessonService } from "@/services/LessonService";
import TextToSpeechButton from "@/components/TextToSpeechButton.vue";

const lessonService = new FileBasedLessonService();
const props = defineProps(["lessonSlug"]);
const lesson = ref(await lessonService.getLesson(props.lessonSlug));
const hasQuiz = computed(() => {
  if (
    lesson.value?.questions === undefined ||
    lesson.value?.questions.length === 0
  ) {
    return false;
  }
  return true;
});
const message =
  (lesson.value?.explanation || "") + " " + (lesson.value?.example || "");

const router = useRouter();
const goToQuiz = () => {
  router.push(`/quiz/${lesson.value?.slug}`);
};
</script>

<style scoped></style>
