<template>
  <button
    @click="handleAction"
    type="button"
    class="btn btn-sm h-50"
    :class="buttonClass"
  >
    <i class="material-icons mt-1">
      {{ buttonIcon }}
    </i>
  </button>
</template>

<script setup lang="ts">
import { useSpeechSettingsStore } from "@/stores/SpeechSettingsStore";
import { ref, watch, onMounted, toRefs } from "vue";

const speechSettingsStore = useSpeechSettingsStore();
const props = defineProps(["message"]);
// const message = props.message;
const { message } = toRefs(props);
const speech = new SpeechSynthesisUtterance(message?.value);

const isPlaying = ref(false);
const isPaused = ref(false);
const buttonClass = ref("btn-outline-success");
const buttonIcon = ref("play_arrow");

watch(isPlaying, () => {
  buttonClass.value = isPlaying.value
    ? "btn-outline-danger"
    : "btn-outline-success";
  buttonIcon.value = isPlaying.value ? "pause" : "play_arrow";
});

const handleAction = () => {
  if (isPlaying.value) {
    return pauseMessage();
  } else {
    return playMessage();
  }
};

const resumeMessage = () => {
  speechSynthesis.resume();
  isPaused.value = false;
  isPlaying.value = true;
};

const pauseMessage = () => {
  if (speechSynthesis.speaking) {
    speechSynthesis.pause();
    isPaused.value = true;
    isPlaying.value = false;
  }
};

const playMessage = () => {
  if (speechSynthesis.paused && speechSynthesis.speaking) {
    return resumeMessage();
  }
  speechSynthesis.speak(speech);
  isPlaying.value = true;
  isPaused.value = false;
};

const cancelMessage = () => {
  speechSettingsStore.cancelMessage();
};

onMounted(() => {
  window.addEventListener("beforeunload", cancelMessage);
  if (speechSettingsStore.selectedVoice) {
    speech.voice = speechSettingsStore.selectedVoice;
  }
});
</script>

<style scoped></style>
