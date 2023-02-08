<template>
  <div class="d-flex justify-content-center">
    <div v-if="speechSettingsStore.isSupported">
      <p class="fs-3">Voice Settings</p>
      <div class="form-group" v-if="voices.length">
        <label for="voices">Select a voice</label>
        <select
          class="form-control"
          id="voices"
          v-model="selectedVoiceID"
          @change="selectVoice"
        >
          <option
            v-for="(voice, index) in voices"
            :key="index"
            :data-lang="voice.lang"
            :value="index"
          >
            {{ voice.name }} ({{ voice.lang }})
          </option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-label mt-4">Test Voice</label>
        <div class="form-group">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Enter message..."
              aria-label="Enter message..."
              aria-describedby="button-addon2"
              v-model.trim="testMessage"
            />
            <button @click="testVoice" class="btn btn-primary" type="button">
              Speak!
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <h1>Sorry! Your device does not support text to speech. 😿</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSpeechSettingsStore } from "@/stores/SpeechSettingsStore";
import { ref, onMounted } from "vue";

const speechSettingsStore = useSpeechSettingsStore();
const voices = speechSettingsStore.voiceList;
let selectedVoiceID = speechSettingsStore.selectedVoiceID;
const testMessage = ref("");

const selectVoice = () => {
  speechSettingsStore.setVoice(selectedVoiceID);
};

const testVoice = () => {
  const message = new SpeechSynthesisUtterance(testMessage.value);
  if (speechSettingsStore.selectedVoice) {
    message.voice = speechSettingsStore.selectedVoice;
  }
  speechSynthesis.speak(message);
};

onMounted(() => {
  window.addEventListener("beforeunload", () => {
    speechSettingsStore.cancelMessage();
  });
});
</script>

<style scoped></style>
