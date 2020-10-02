// breaking effect when transitioning

<template>
  <div>
    Car_video

    <video class="video_forward" loop="true" :hidden="!isForward">
      <source src="../static/forward.webm" type="video/webm" />
      Sorry, your browser doesn't support embedded videos.
    </video>
    <video class="video_reverse" loop="true" :hidden="isForward">
      <source src="../static/reverse.webm" type="video/webm" />
      Sorry, your browser doesn't support embedded videos.
    </video>

    <button @click="playForward">Play button</button>
    <button @click="playReverse">Reverse button</button>
    <button @click="pause">Pause button</button>
  </div>
</template>

<script>
//import stuff here

export default {
  //what components to be expected
  components: {},
  //what props you expect to get
  props: {
    // imgSrc, description, rating, title
  },
  //what data or variables to be used->this needs to be a function
  data() {
    return {
      touch: {
        startX: 0,
        endX: 0,
        moveX: 0,
      },
      isForward: true,
      isPlaying: true,
    };
  },
  //for method w/o params (will always we called when its componets change)
  computed: {
    // incrementSeconds() {
    //   setInterval(this.sharedTime++ % this.videoReverse.duration, 10);
    // },
  },
  //what methods to be used
  methods: {
    touchstart(event) {
      this.touch.startX = event.touches[0].clientX;
    },
    touchmove(event) {
      this.touch.endX = event.touches[0].clientX;
      this.touch.moveX = Math.abs(this.touch.endX - this.touch.startX);
      // hand move
      if (this.touch.moveX >= 1.3) {
        //swipe right
        if (this.touch.startX > this.touch.endX) {
          this.playForward();
        } else {
          this.playReverse();
        }
      } else {
        this.videoForward.pause();
        this.videoReverse.pause();
      }
      this.touch.startX = this.touch.endX;
    },
    touchend() {
      this.videoForward.pause();
      this.videoReverse.pause();
    },
    playForward() {
      //just switch direction
      if (!this.isForward) {
        this.videoForward.currentTime =
          this.videoReverse.duration - this.videoReverse.currentTime;
      }
      this.videoReverse.pause();
      this.isForward = this.isPlaying = true;
      if (this.videoForward.currentTime > this.videoForward.duration - 0.03) {
        this.videoForward.currentTime = 0;
      }
      this.videoForward.play();
      console.log("forward");
    },
    playReverse() {
      //just switch direction
      if (this.isForward) {
        this.videoReverse.currentTime =
          this.videoReverse.duration - this.videoForward.currentTime;
      }
      this.videoForward.pause();
      this.isForward = false;
      this.isPlaying = true;
      if (this.videoReverse.currentTime > this.videoReverse.duration - 0.03) {
        this.videoReverse.currentTime = 0;
      }
      this.videoReverse.play();
      console.log("reverse");
    },
    pause() {
      this.isPlaying = false;
      this.videoForward.pause();
      this.videoReverse.pause();
      console.log("pause");
    },
  },
  //can have lifecyce methods here
  created() {},

  mounted() {
    //$ means we are using vue in-built component
    this.$el.addEventListener("touchstart", (event) => this.touchstart(event));
    this.$el.addEventListener("touchmove", (event) => this.touchmove(event));
    this.$el.addEventListener("touchend", () => this.touchend());
    this.videoForward = this.$el.getElementsByClassName("video_forward")[0];
    this.videoReverse = this.$el.getElementsByClassName("video_reverse")[0];
    this.videoReverse.playbackRate = 0.5;
    this.videoForward.playbackRate = 0.5;
    console.log(this.videoReverse);
  },
};
</script>

<style>
video {
  position: absolute;
  width: 80%;
  height: 100vh;
  z-index: -1;
  transition: visibility 10s linear, opacity 10s linear;
}
</style>