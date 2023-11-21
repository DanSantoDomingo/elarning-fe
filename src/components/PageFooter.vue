<template>
  <footer class="py-3 my-4">
    <hr />
    <p class="text-center text-muted">© {{ year }} Dea Ann Sto. Domingo All rights reserved.</p>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear();
</script>

<style scoped></style>
