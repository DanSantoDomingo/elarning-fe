<template>
 
 

  <div
    class="card border border-primary mt-3"
  >
    <div class="card-body">
      <p class="card-text">
        <span>Question:</span>
        <span v-html="question.content" />
 
        <span>Solution:</span>
        <span v-html="question.solution" />
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps(["question"])
</script>

<style scoped>

</style>