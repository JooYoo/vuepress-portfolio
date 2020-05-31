<template>
  <v-app>
    <yuHeader></yuHeader>
    
    <v-flex class="container--about">
      <yuAbout></yuAbout>
    </v-flex>

    <yuProjectsOverview></yuProjectsOverview>

    <v-flex class="container--footer">
      <yuFooter></yuFooter>
    </v-flex>
  </v-app>
</template>

<script>
import yuHeader from "./widgets/YuHeader";
import yuAbout from "./widgets/YuAbout";
import yuProjectsOverview from "./widgets/YuProjectsOverview";
import yuFooter from "./widgets/YuFooter";
export default {
  components: {
    yuHeader,
    yuAbout,
    yuProjectsOverview,
    yuFooter
  },
  data: () => ({
    show: false
  })
};
</script>

<style>
.container--about {
  background-color: #f5f5f5;
  height: fit-content;
}
</style>