import { defineStore } from "pinia";

export const useSpeechSettingsStore = defineStore("speech", {
  state: () => ({
    selectedVoice: null as SpeechSynthesisVoice | null,
    selectedVoiceID: 0,
    voiceList: [] as SpeechSynthesisVoice[],
    speed: 1,
    isSupported: false,
  }),
  actions: {
    checkSpeechSupport() {
      if ("speechSynthesis" in window) {
        this.isSupported = true;
      } else {
        this.isSupported = false;
      }
    },
    setVoices(voices: SpeechSynthesisVoice[]) {
      this.voiceList = voices;
    },
    getVoices() {
      const store = this;
      let voices = speechSynthesis.getVoices();
      if (voices.length !== 0) {
        this.setVoices(voices);
      } else {
        speechSynthesis.addEventListener("voiceschanged", function () {
          voices = speechSynthesis.getVoices();
          store.setVoices(voices);
        });
      }
    },
    setVoice(voiceIndex: number) {
      this.selectedVoiceID = voiceIndex;
      this.selectedVoice = this.voiceList[voiceIndex];
    },
    cancelMessage() {
      speechSynthesis.pause();
      speechSynthesis.cancel();
    },
  },
});
