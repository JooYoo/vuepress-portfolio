<template>
  <div class="skill-progressbar-container">
    <div
      class="skill-progressbar"
      v-for="usedTech in usedTechs"
      :style="setTechProgressUI(usedTech, liftTech, isHover)"
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

    isHover() {
      return lift.isUp;
    },
  },

  methods: {
    setTechProgressUI(tech, liftTech, isHover) {
      return {
        backgroundColor: this.getColor(tech.name),
        width: `${tech.percent}%`,
        transform: this.setProgressbarLift(tech.name, liftTech, isHover),
      };
    },

    getColor(name) {
      return this.techs.find((obj) => obj.name == name).color;
    },

    setProgressbarLift(currentTech, liftTech, isHover) {
      if (liftTech == currentTech && isHover) {
        return "scaleY(2)";
      } else if (!isHover) {
        return "scaleY(1)";
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
  opacity: 0.75;
}

.skill-progressbar {
  transform-origin: bottom;
  transition: 0.2s ease-in;
}

.skill-progressbar:first-child {
  border-bottom-left-radius: 10px;
}

.skill-progressbar:last-child {
  border-bottom-right-radius: 10px;
}
</style>