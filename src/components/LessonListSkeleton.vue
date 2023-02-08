<template>
  <div class="d-flex flex-wrap align-items-center justify-content-center">
    <div v-for="(item, index) in 8" :key="index">
      <LessonCardSkeleton />
    </div>
  </div>
</template>

<script setup lang="ts">
import LessonCardSkeleton from "@/components/LessonCardSkeleton.vue";
</script>
