<template>
  <div class="card">
    <img class="card-img-top" />
    <div class="card-body">
      <h5 class="card-title" />
      <p class="card-text" />
    </div>
  </div>
</template>

<style scoped>
.card {
  margin: 0px 10px 10px 10px;
  cursor: pointer;
  width: 18rem;
}
.card img {
  width: 100%;
  height: 190px;
  margin: 0;
  display: inline-block;
  background-color: #ddd;
  animation: pulse-bg 1s infinite;
}

.card-title {
  content: " ";
  width: 250px;
  height: 24px;
  background-color: #ddd;
  margin: 10px 0;
  animation: pulse-bg 1s infinite;
}
.card-text {
  width: 80%;
  background-color: #ddd;
  height: 16px;
  line-height: 140%;
  animation: pulse-bg 1s infinite;
}
</style>
