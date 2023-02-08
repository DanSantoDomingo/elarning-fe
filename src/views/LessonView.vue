<template>
  <div>
    <Suspense>
      <template #default>
        <LessonItem :lessonSlug="lessonSlug" />
      </template>
      <template #fallback>
        <LessonItemSkeleton />
      </template>
    </Suspense>
  </div>
</template>

<script setup lang="ts">
import LessonItem from "@/components/LessonItem.vue";
import LessonItemSkeleton from "@/components/LessonItemSkeleton.vue";
import { useRoute } from "vue-router";
const route = useRoute();
const lessonSlug = route.params.slug as string;
</script>

<style scoped></style>
