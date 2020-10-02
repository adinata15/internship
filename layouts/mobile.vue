<template>
  <div>
    Mobile
    <Navbar />
    <Nuxt />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  margin: 0;
  background-color: grey;
}

.footer {
  position: absolute;
  display: flex;
  align-content: center;
  width: 100vw;
  justify-content: space-between;
  background-color: transparent;
  color: white;
  transform: translateY(-100vh);
}
</style>
