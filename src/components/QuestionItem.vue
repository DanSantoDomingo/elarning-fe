<template>
  <div>
    <h1 class="fs-4 mt-4 text-center">{{ question.text }}</h1>
    <div class="d-grid gap-2 mb-1" v-for="option in options" :key="option.id">
      <div
        class="alert alert-light border shadow-sm"
        @click="emitSelectedOption(option.isCorrect)"
      >
        {{ option.answer }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import confetti from "canvas-confetti";

defineProps(["question", "options"]);

const emit = defineEmits(["selectOption"]);

const emitSelectedOption = (isCorrect: boolean) => {
  if (isCorrect) {
    confetti({
      spread: 70,
      origin: { y: 1.2 },
    });
  }
  emit("selectOption", isCorrect);
};
</script>

<style scoped>
.alert {
  cursor: pointer;
}
</style>
