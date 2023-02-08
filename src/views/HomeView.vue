<script setup lang="ts">
import LessonList from "@/components/LessonList.vue";
import LessonListSkeleton from "@/components/LessonListSkeleton.vue";
</script>

<template>
  <Suspense>
    <template #default>
      <LessonList />
    </template>
    <template #fallback>
      <LessonListSkeleton />
    </template>
  </Suspense>
</template>
