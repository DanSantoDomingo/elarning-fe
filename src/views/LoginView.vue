<script setup lang="ts">
import { useUserStore } from "@/stores/UserStore";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const userName = ref("");
const userStore = useUserStore();

const handleLogin = () => {
  if (userName.value.length > 0) {
    userStore.login(userName.value);
    router.push("/");
  }
};
</script>

<template>
  <div class="d-flex justify-content-center">
    <div class="text-center pt-5 w-50">
      <h4>Please enter your name 💭</h4>
      <form @submit.prevent="handleLogin" class="mt-3">
        <input
          v-model.trim="userName"
          type="text"
          class="form-control form-control-lg me-sm-2"
        />
        <button class="btn btn-primary btn-lg mt-3">Enter</button>
      </form>
    </div>
  </div>
</template>
