<template>
  <div class="skill-progressbar-container">
    <div v-for="usedTech in usedTechs" :style="setTechProgressUI(usedTech)">{{isProgressLift}}</div>
  </div>
</template>

<script>
import JsonTechs from "../../../data/techs.json";
import { lift } from "../../service/yuSkillService";

export default {
  name: "yuSkillProgressbars",

  data: () => ({
    techs: JsonTechs,
  }),

  props: {
    usedTechs: Array,
  },

  computed: {
    isProgressLift() {
      return lift.isUp;
    },
  },

  methods: {
    setTechProgressUI: function (tech) {
      return {
        backgroundColor: this.getColor(tech.name),
        width: `${tech.percent}%`,
      };
    },

    getColor: function (name) {
      return this.techs.find((obj) => obj.name == name).color;
    },
  },
};
</script>

<style>
.skill-progressbar-container {
  display: flex;
  width: 100%;
  height: 15px;
}
</style>