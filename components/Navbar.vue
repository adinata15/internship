<template>
  <div class="navbar">
    <div class="logo">HARRI'S</div>
    <div class="subnav">GALLERY</div>
    <div class="subnav">COMPANY</div>
    <div class="subnav">ABOUT</div>
  </div>
</template>

<style scoped>
.logo {
  vertical-align: middle;
  float: left;
  font-size: 50px;
  padding-left: 10px;
}

.subnav {
  vertical-align: bottom;
  float: right;
  font-size: 30px;
  padding: 10px;
  padding-top: 20px;
}

.navbar {
  overflow: hidden;
  background-color: transparent;
  color: white;
  font-weight: bold;
}
</style>

<script>
export default { name: "Navbar" };
</script>