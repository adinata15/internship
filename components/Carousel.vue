<template>
  <div>
    <img
      @click="$store.dispatch(`decreaseIndex`)"
      class="pointer_image"
      src="@/static/prev.svg"
      alt=""
    />
    <img class="carousel_image" src="@/static/images/i30_black.png" alt="" />
    <img class="carousel_image" src="@/static/images/avante_black.png" alt="" />
    <img class="carousel_image" src="@/static/images/i30_red.png" alt="" />
    <img
      @click="$store.dispatch(`increaseIndex`)"
      class="pointer_image"
      src="@/static/next.svg"
      alt=""
    />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.carousel_image {
  position: relative;
  width: auto;
  height: 10vh;
}
.pointer_image {
  height: 3vh;
  margin: 3vh 0;
}
</style>
