<template>
  <div class="rightPanel">
    <div class="title">SPECS</div>
    <li v-for="spec in specifications" :key="spec">
      {{ spec }}
    </li>
  </div>
</template>

<script>
export default {
  props: {
    specifications: Array,
  },
};
</script>

<style scoped>
.rightPanel {
  position: absolute;
  display: flex;
  flex-direction: column;
  right: 0.1rem;
  top: 5em;
  width: 15rem;
  background-color: transparent;
}

.title {
  font-size: 40px;
  font-weight: bold;
}

li {
  padding-top: 30px;
  font-weight: normal;
}
</style>


