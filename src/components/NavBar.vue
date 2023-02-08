<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container text-light">
      <div class="d-flex">
        <span class="fs-1"> Hey, {{ userStore.getUserName }}! </span>
      </div>
      <div>
        <router-link to="/" class="text-light">
          <i class="material-icons fs-2">home</i>
        </router-link>
        <router-link to="/settings" class="text-light">
          <i class="material-icons fs-2">settings</i>
        </router-link>
        <router-link to="/about" class="text-light">
          <i class="material-icons fs-2">help</i>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useUserStore } from "@/stores/UserStore";

const userStore = useUserStore();
</script>

<style scoped>
a.router-link-active i {
  color: #343a40;
}
</style>
