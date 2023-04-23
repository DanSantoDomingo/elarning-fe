<template>
  <div>
    <Suspense>
      <template #default>
        <QuizItem :lessonSlug="lessonSlug" :lessonId="lessonId" />
      </template>
      <template #fallback>
        <LessonItemSkeleton />
      </template>
    </Suspense>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import QuizItem from "@/components/QuizItem.vue";
import LessonItemSkeleton from "@/components/LessonItemSkeleton.vue";

const route = useRoute();

const lessonSlug = route.params.slug as string;
const lessonId = route.params.lessonId;
</script>

<style scoped></style>
