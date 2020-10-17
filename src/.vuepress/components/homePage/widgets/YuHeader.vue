<template>
  <v-layout class="main-jumbotron">
    <div class="main-title">Z h u Y u</div>
    <div class="subtitle">between Code and Design</div>
    <v-divider class="divider"></v-divider>
    <div class="job-title">Frontend Developer</div>
  </v-layout>
</template>

<script>
export default {
  name: 'yuHeader',
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=ZCOOL+XiaoWei');
.main-jumbotron {
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* background-image: linear-gradient(
    to right,
    #3ab5b0 0%,
    #3d99be 31%,
    #56317a 100%
  ); */
}
.main-title {
  color: white;
  font-size: 65px;
  margin-bottom: 25px;
  font-family: 'ZCOOL XiaoWei', sans-serif;
  text-align: center;
  z-index: 2;
}
.subtitle {
  color: white;
  font-size: 20px;
  margin: 5px 0;
  text-align: center;
  font-weight: 8000;
  font-family: 'ZCOOL XiaoWei', sans-serif !important;
  z-index: 2;
}
.divider {
  margin: 20px 5vw;
  background: white;
  z-index: 2;
}
.job-title {
  text-align: center;
  text-shadow: 2px 2px 4px #000000;
  font-family: 'ZCOOL XiaoWei', sans-serif;
  font-weight: lighter;
  color: white;
  z-index: 2;
}
</style>
