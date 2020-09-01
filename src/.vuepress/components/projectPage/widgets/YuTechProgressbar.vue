<template>
  <div class="tech-progressbar-container">
    <div v-for="tech in frontmatterTechs" :style="setTechProgress(tech)"></div>
  </div>
</template>

<script>
import JsonTechs from "../../../data/techs.json";

export default {
  name: "yuTechProgressbar",

  data: () => ({
    techs: JsonTechs,
  }),

  props: {
    frontmatterTechs: Array,
  },

  methods: {
    setTechProgress: function (tech) {
      return {
        backgroundColor: this.getColor(tech.name),
        width: tech.percent,
      };
    },

    getColor: function (name) {
      return this.techs.find((obj) => obj.name == name).color;
    },
  },
};
</script>

<style>
.tech-progressbar-container {
  display: flex;
  position: relative;
  height: 8px;
  width: 100%;
}
</style>