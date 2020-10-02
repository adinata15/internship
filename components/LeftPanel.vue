<template>
  <div class="leftPanel">
    <div class="title">{{ car.title }}</div>
    <div class="description">{{ car.description }}</div>
    <div class="rating">{{ car.rating }}</div>
    <div class="stars">
      <span v-for="fullStar in stars" :key="fullStar.alt">
        <img v-if="fullStar" src="@/static/star.svg" alt="full star" />
        <img v-else src="@/static/star_empty.svg" alt="empty star" />
      </span>
    </div>
  </div>
</template>

<script>
//import stuff here

export default {
  components: {},
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
.leftPanel {
  position: absolute;
  left: 1em;
  display: flex;
  flex-direction: column;
  padding: 5rem;
  float: left;
  width: 20rem;
  background-color: transparent;
}
.title {
  font-size: 40px;
  font-weight: bold;
}

.description {
  padding-top: 30px;
  font-weight: normal;
}

.rating {
  block-size: auto;
  font-size: 60px;
  padding-top: 30px;
}
.stars {
  display: flex;
  justify-content: space-between;
}
img {
  width: 25px;
  height: 25px;
  margin: 4px;
}
</style>