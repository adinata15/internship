<template>
  <div class="main">
    <div class="car-video">
      <CarTicks :car="car" :chosenColor="chosenColor" />
    </div>
    <ul class="colorBtn">
      <li v-for="color in car.colors" :key="color">
        <span @click="switchColor" class="dot" :id="color" />
      </li>
    </ul>
  </div>
</template>

<script>
import CarTicks from "@/components/CarTicks";

export default {
  head() {
    return {
      title: "Harri's showroom",
      meta: [
        {
          name: "Harri's car",
          content: "Harri's car",
        },
      ],
    };
  },
  components: {
    CarTicks,
  },
  //what components to be expected
  data() {
    return {
      car: this.$store.state.cars[this.$route.params.carId],
      chosenColor: "black",
    };
  },
  methods: {
    switchColor(event) {
      this.chosenColor = event.target.id;
    },
    goBack() {
      window.history.back();
    },
  },
  created() {
    this.$store.dispatch("setIndex", this.$route.params.carId);
  },
};
</script>

<style scoped>
.main {
  position: relative;
  height: "70vh";
}

.colorBtn {
  position: absolute;
  right: 10%;
  top: 30vh;
  margin: 1em;
}

.dot:hover {
  border: 2px solid white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

#red {
  background-color: red;
}

#black {
  background-color: black;
}

.dot {
  height: 25px;
  width: 25px;
  border-radius: 50%;
  display: inline-block;
}

.car-video {
  height: 70vh;
  overflow: hidden;
  object-fit: cover;
}
</style>
