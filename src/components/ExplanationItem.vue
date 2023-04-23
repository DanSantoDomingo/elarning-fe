<template>
  <span>Question:</span>
  <div v-html="question.content" />
  <span>Solution:</span>
  <div v-html="question.solution" />
</template>

<script setup lang="ts">
defineProps(["question"])
</script>

<style scoped>

</style>