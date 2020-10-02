<template>
  <div class="video">
    <nuxt-link to="/">
      <img src="@/static/logout.svg" alt="exit_button" class="exit-btn" />
    </nuxt-link>
    <video
      :id="chosenColor"
      :src="this.videoURL"
      :ref="car.id"
      class="car-video"
      height="80vh"
      width="auto"
      type="video/webm"
    >
      Sorry your web do not support video
    </video>
  </div>
</template>

<script>
//import stuff here
const FRAME_TOTAL = 50.0; //lower frame->more responsive

export default {
  //what components to be expected
  components: {},
  //what props you expect to get
  props: {
    chosenColor: String,
    car: Object,
  },
  //what data or variables to be used->this needs to be a function
  data() {
    return {
      touch: {
        startX: 0,
        endX: 0,
        moveX: 0,
      },
    };
  },
  watch: {
    // react to changes
    // calculate other variables
  },
  //for method w/o params (will always we called when its componets change)
  computed: {
    videoURL: function () {
      return require("@/static/videos/" +
        this.chosenColor +
        "_" +
        (this.car.id + 1) +
        ".webm");
    },
  },
  //what methods to be used
  methods: {
    touchstart(event) {
      this.touch.startX = event.touches[0].clientX;
      this.touch.endX = 0;
    },
    touchmove(event) {
      this.touch.endX = event.touches[0].clientX;
      this.touch.moveX = Math.abs(this.touch.endX - this.touch.startX);
      if (this.touch.moveX >= 0.3) {
        if (this.touch.startX > this.touch.endX) this.playForward();
        else this.playReverse();
      }
      this.touch.startX = this.touch.endX;
    },
    touchend() {
      this.touch.endX = this.touch.startX = 0;
    },
    playForward() {
      const rate = 1.0 / (FRAME_TOTAL * this.video.duration);
      if (this.video.currentTime > this.video.duration - 0.05) {
        this.video.currentTime = 0.05;
      }
      this.video.currentTime += rate;
    },
    playReverse() {
      const rate = 1.0 / (FRAME_TOTAL * this.video.duration);
      if (this.video.currentTime < 0.05) {
        this.video.currentTime = this.video.duration;
      }
      this.video.currentTime -= rate;
    },
  },
  //can have lifecyce methods here
  mounted() {
    //$ means we are using vue in-built component
    this.$el.addEventListener("touchstart", (event) => this.touchstart(event));
    this.$el.addEventListener("touchmove", (event) => this.touchmove(event));
    this.$el.addEventListener("touchend", () => this.touchend());
    this.video = this.$el.getElementsByClassName("car-video")[0];
  },
};
</script>

<style scoped>
.video {
  position: absolute;
  top: -60%;
}

.exit-btn {
  position: absolute;
  z-index: 10;
  right: 10%;
  top: 50vh;
  width: 25px;
  height: 25px;
}

.exit-btn:hover {
  transform: scale(2);
}
</style>