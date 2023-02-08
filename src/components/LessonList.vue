<template>
  <div>
    <h1>Choose a lesson!</h1>
    <div class="d-flex flex-wrap align-items-center justify-content-center">
      <div v-for="lesson in lessons" :key="lesson.id" class="lesson-container">
        <LessonCard :lesson="lesson" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { FileBasedLessonService } from "@/services/LessonService";
import LessonCard from "@/components/LessonCard.vue";

let lessonService = new FileBasedLessonService();
const lessons = ref(await lessonService.getLessons());
</script>

<style scoped></style>
