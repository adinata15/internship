<template>
  <div>
    <transition name="slide">
      <span :key="car.id">
        <LeftPanel :car="car" />
        <RightPanel :specifications="car.specifications" />
        <div class="car-container">
          <img
            class="car-image"
            :src="require('@/static/images/' + car.imageFile)"
            :alt="car.description"
            :style="{ transform: 50 }"
            :key="car.id"
          />
          <nuxt-link :to="'/car/' + car.id">
            <button class="explore">Explore</button>
          </nuxt-link>
        </div>
      </span>
    </transition>
  </div>
</template>

<script>
import LeftPanel from "@/components/LeftPanel";
import RightPanel from "@/components/RightPanel";
import CarTicks from "@/components/CarTicks";

export default {
  components: {
    LeftPanel,
    RightPanel,
    CarTicks,
  },
  data() {
    return {
      stars: [],
    };
  },
  methods: {
    starAmount() {
      for (let i = 0; i < 5; i++) {
        if (i < Math.floor(this.car.rating)) {
          this.stars.push(true);
        } else {
          this.stars.push(false);
        }
      }
    },
  },
  //what components to be expected
  props: {
    car: Object,
  },
  mounted() {
    this.starAmount();
  },
};
</script>

<style scoped>
.explore {
  position: relative;
  left: 45%;
  top: 70%;
  color: white;
  background-color: transparent;
  border: 2px solid white;
  border-radius: 25px;
  padding: 0.5em 1em;
  font-size: large;
}

.explore:hover {
  background-color: darkgray;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.car-container {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 50%;
  height: 70vh;
  margin-left: auto;
  margin-right: auto;
}

.car-image {
  object-fit: contain;
  position: relative;
  width: auto;
  margin: -15% auto;
}

.slide-enter-active {
  animation-name: slide-enter;
  animation-delay: 1s;
  animation-duration: 2s;
  animation-timing-function: ease-in;
}

.slide-leave-active {
  animation-name: slide-leave;
  animation-duration: 1s;
  animation-timing-function: ease-out;
}

@keyframes slide-leave {
  100% {
    transform: scale(0);
    opacity: 0;
  }
  60% {
    transform: scale(0.4);
    opacity: 0.5;
  }
  0% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes slide-enter {
  0% {
    transform: scale(1.5);
    opacity: 0;
  }
  60% {
    transform: scale(1.2);
    opacity: 0.5;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
