<template>
  <div className="home">
    <LeftPanel {...props[0]} />
    <img className="image" src="{require(`${props[0].image}`)}" alt="car" />
    <RightPanel {...props[0]} />
    <button onClick="{exploreClick}" className="button">EXPLORE</button>
    <Footer />
  </div>
</template>

<style scoped>
.NuxtLogo {
  animation: 3s appear;
  margin: auto;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}

.home {
  color: white;
  direction: flex;
}

.image {
  margin-left: 10%;
  margin-right: auto;
  margin-top: -15%;
  width: 80%;
}

.button {
  position: absolute;
  left: 50%;
  top: 80%;
  color: white;
  background-color: transparent;
  border: 2px solid white;
  border-radius: 25px;
  padding: 1em;
  font-size: large;
}

.button:hover {
  background-color: darkgray;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>

<script>
import LeftPanel from "./LeftPanel";
import Footer from "./Footer";
import RightPanel from "./RightPanel";

export default {
  name: "Home",

  components: {
    LeftPanel,
    RightPanel,
    Footer,
  },
};
</script>