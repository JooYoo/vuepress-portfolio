<template>
  <div class="skill-progressbar-container">
    <div
      class="skill-progressbar"
      v-for="usedTech in usedTechs"
      :style="setTechProgressUI(usedTech, liftTech)"
    ></div>
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
    liftTech() {
      return lift.tech;
    },
  },

  methods: {
    setTechProgressUI: function (tech, liftTech) {
      return {
        backgroundColor: this.getColor(tech.name),
        width: `${tech.percent}%`,
        transform: this.setProgressbarLift(liftTech, tech.name),
      };
    },

    getColor: function (name) {
      return this.techs.find((obj) => obj.name == name).color;
    },

    //TODO: hoverEnd ProgressbarLift go back
    setProgressbarLift(liftTech, currentTech) {
      if (liftTech == currentTech) {
        return "scaleY(3)";
      }
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

.skill-progressbar {
  transform-origin: bottom;
}
</style>