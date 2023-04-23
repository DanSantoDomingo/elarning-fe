<template>
  <div class="text-center mt-3">
    <div :class="scoreAnimationClass">
      <h1>{{ scoreMessage }}</h1>
      <h3>{{ score }} / {{ quizLength }}</h3>
    </div>
    <div>
      <router-link to="/">Go back to lessons</router-link>
    </div>
    <div>
      <button @click="emitRetakeQuiz" class="btn btn-sm btn-warning mt-2">
        Retake Quiz
      </button>
    </div>
    <div>
      <button class="btn btn-sm btn-info mt-2" @click="toggleExplanation">
        {{ showExplanation ? "Hide" : "Show" }} Explanation
      </button>
    </div>
    <div v-if="showExplanation">
      
      <div v-for="question in questions" :key="question.id" class="explanation-container">
        <ExplanationItem :question="question"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import confetti from "canvas-confetti";
import ExplanationItem from "@/components/ExplanationItem.vue"


const props = defineProps(["quizLength", "score", "questions"]);
const emit = defineEmits(["retakeQuiz"]);
const scoreMessage = ref("Your Score");
const scoreAnimationClass = ref("");
const showExplanation = ref(false)

const end = Date.now() + 1 * 1000;
const colors = ["#56cc9d", "#212529"];

const toggleExplanation = () => {
  showExplanation.value = !showExplanation.value;
}

const createConfetti = (angle: number, origin: { x: number }) => {
  return confetti({
    particleCount: 2,
    angle: angle,
    spread: 55,
    origin: origin,
    colors: colors,
    shapes: ["circle", "star", "square"],
    gravity: 3,
  });
};

const emitRetakeQuiz = () => {
  emit("retakeQuiz");
};

onMounted(() => {
  if (props.quizLength === props.score) {
    scoreMessage.value = "🥇 Perfect score! 🥇";
    scoreAnimationClass.value =
      "animate__animated animate__heartBeat animate__faster animate__repeat-2";

    (function frame() {
      createConfetti(60, { x: 0 });
      createConfetti(120, { x: 1 });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }
});
</script>

<style scoped></style>
