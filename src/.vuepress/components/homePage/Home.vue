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

    <v-flex class="container--experience">
      <yuExperience></yuExperience>
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
import yuExperience from "./widgets/YuExperience";

export default {
  components: {
    yuHeader,
    yuAbout,
    yuProjectsOverview,
    yuSkill,
    yuExperience,
    yuFooter,
  },
  data: () => ({
    show: false,
  }),
};
</script>

<style>
.container--about {
  height: fit-content;
  background-color: #f5f5f5;
}
.container--skill {
  padding: 40px 25px;
  background-color: #f5f5f5;
}
.container--experience {
  padding: 40px 0;
}
</style>