<template>
  <div>
    <div>
      <h1 class="text-center">{{ lesson?.title }} quiz</h1>
      <div class="progress" style="height: 5px">
        <div
          class="progress-bar bg-success"
          role="progressbar"
          :style="{ width: barPercentage }"
          aria-valuenow="0"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
    <div>
      <div v-if="!showResult">
        <transition
          mode="out-in"
          enter-active-class="animate__animated animate__faster animate__slideInLeft"
          leave-active-class="animate__animated animate__faster animate__slideOutRight"
        >
          <QuestionItem
            :key="currentQuestionIndex"
            :question="currentQuestion"
            :options="currentQuestionOptions"
            @select-option="onOptionSelected"
          />
        </transition>
      </div>
      <div v-else>
        <QuizResult
          :quizLength="questions.length"
          :score="numCorrectAnswers"
          @retake-quiz="onRetakeQuiz"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import QuestionItem from "./QuestionItem.vue";
import QuizResult from "./QuizResult.vue";
import type { Option, Question } from "@/domain/entities";
import { shuffleObjects } from "@/domain/utils";
import { FileBasedLessonService } from "@/services/LessonService";

const props = defineProps(["lessonSlug"]);

const currentQuestionIndex = ref(0);
const numCorrectAnswers = ref(0);
const showResult = ref(false);

const lessonService = new FileBasedLessonService();
const lesson = await lessonService.getLesson(props.lessonSlug);

let questions = shuffleObjects(lesson?.questions as Question[]) as Question[];

const barPercentage = computed(
  () => `${(currentQuestionIndex.value / questions.length) * 100}%`
);

function getQuestion(questions: Question[]): Question | undefined {
  return questions[currentQuestionIndex.value];
}

let currentQuestion = getQuestion(questions);
let currentQuestionOptions = shuffleObjects(
  currentQuestion?.options as Option[]
);

const onOptionSelected = (isCorrect: boolean) => {
  if (isCorrect) {
    numCorrectAnswers.value++;
  }
  if (questions.length === currentQuestionIndex.value + 1) {
    showResult.value = true;
    currentQuestionIndex.value++;
    return;
  }
  currentQuestionIndex.value++;
  currentQuestion = getQuestion(questions);
  currentQuestionOptions = shuffleObjects(currentQuestion?.options as Option[]);
};

const onRetakeQuiz = () => {
  currentQuestionIndex.value = 0;
  questions = shuffleObjects(lesson?.questions as Question[]) as Question[];
  showResult.value = false;
  numCorrectAnswers.value = 0;
};
</script>

<style scoped></style>
