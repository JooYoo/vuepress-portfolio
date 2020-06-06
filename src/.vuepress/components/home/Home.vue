<template>
  <v-app>
    <yuHeader></yuHeader>

    <v-flex class="container--about">
      <yuAbout></yuAbout>
    </v-flex>

    <yuProjectsOverview></yuProjectsOverview>

    <v-flex class="container--skill">
      <yuSkill></yuSkill>
    </v-flex>

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
import yuSkill from "./widgets/YuSkill";

export default {
  components: {
    yuHeader,
    yuAbout,
    yuProjectsOverview,
    yuSkill,
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
.container--skill {
  padding: 40px 0;
  background-color: #f5f5f5;
}
</style>