<template>
  <v-app>
    <v-flex class="container--header">
      <yuHeader></yuHeader>
      <!-- <vue-particles
        class="header__particles"
        color="#dedede"
        :particleSize="3"
      ></vue-particles> -->
    </v-flex>

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

    <v-flex class="container--training">
      <yuTraining></yuTraining>
    </v-flex>

    <v-flex class="container--education">
      <yuEducation></yuEducation>
    </v-flex>

    <v-flex class="container--footer">
      <yuFooter></yuFooter>
    </v-flex>
  </v-app>
</template>

<script>
import yuHeader from './widgets/YuHeader';
import yuAbout from './widgets/YuAbout';
import yuProjectsOverview from './widgets/YuProjectsOverview';
import yuFooter from './widgets/YuFooter';
import yuSkill from './widgets/YuSkill';
import yuExperience from './widgets/YuExperience';
import yuTraining from './widgets/YuTraining';
import yuEducation from './widgets/YuEducation';

export default {
  components: {
    yuHeader,
    yuAbout,
    yuProjectsOverview,
    yuSkill,
    yuExperience,
    yuTraining,
    yuEducation,
    yuFooter,
  },
  data: () => ({
    show: false,
  }),
};
</script>

<style>
.container--header {
  position: relative;
}

.header__particles {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  z-index: 1;
}

.container--about {
  height: fit-content;
  background-color: #f5f5f5;
}
.container--skill {
  padding: 40px 25px;
  background-color: #f5f5f5;
}
.container--experience {
  padding: 40px 25px;
}
.container--training {
  padding: 40px 25px;
  background-color: #f5f5f5;
}

.container--education {
  padding: 40px 25px;
}
</style>
