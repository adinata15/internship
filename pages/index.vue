<template>
  <div class="main">
    <Car class="car" :car="$store.state.cars[$store.state.currentCarIndex]" />
    <Carousel class="carousel" />
  </div>
</template>

<script>
import Car from "@/components/Car";
import Carousel from "@/components/Carousel";

export default {
  head() {
    return {
      title: "Home",
      meta: [
        {
          name: "Harri's car",
          content: "Harri's car",
        },
      ],
    };
  },
  data() {
    return {
      touch: {
        startY: 0,
        endY: 0,
        moveY: 0,
      },
      isMouseDown: false,
    };
  },
  methods: {
    touchstart(event) {
      this.touch.startY = event.touches[0].clientY;
      this.touch.endY = 0;
    },
    touchmove(event) {
      this.touch.endY = event.touches[0].clientY;
      this.touch.moveY = this.touch.endY - this.touch.startY;
      console.log(this.touch.moveY);
    },
    touchend(event) {
      console.log(this.touch.moveY);
      if (this.touch.moveY > 3) {
        this.$store.dispatch("decreaseIndex");
      } else if (this.touch.moveY < -3) {
        this.$store.dispatch("increaseIndex");
      }
    },
  },
  components: {
    Car,
    Carousel,
  },
  mounted() {
    this.$el.addEventListener("touchstart", (event) => this.touchstart(event));
    this.$el.addEventListener("touchmove", (event) => this.touchmove(event));
    this.$el.addEventListener("touchend", (event) => this.touchend(event));
  },
};
</script>

<style>
.main {
  display: flex;
  flex-direction: column;
  position: relative;
  display: block;
  overflow: hidden;
  width: 100%;
  height: 75vh;
}

.car {
  object-position: 50% 50%;
  height: 60vh;
  overflow: hidden;
}

.carousel {
  display: flex;
  justify-content: center;
  object-position: 50% 50%;
  overflow: hidden;
  height: 15vh;
}
</style>
