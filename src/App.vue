<script setup lang="ts">
import NavBar from "@/components/NavBar.vue";
import PageFooter from "@/components/PageFooter.vue";
import { useSpeechSettingsStore } from "@/stores/SpeechSettingsStore";
import { useUserStore } from "@/stores/UserStore";

const userStore = useUserStore();
userStore.tryLogIn();

const speechSettingsStore = useSpeechSettingsStore();
speechSettingsStore.checkSpeechSupport();
speechSettingsStore.getVoices();
</script>

<template>
  <header class="mb-3">
    <NavBar />
  </header>
  <div class="container">
    <router-view> </router-view>
  </div>
  <PageFooter />
</template>

<style scoped></style>
