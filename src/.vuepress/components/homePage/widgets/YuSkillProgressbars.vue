<template>
  <div class="skill-progressbar-container">
    <div
      class="skill-progressbar"
      v-for="(usedTech, index) in usedTechs"
      :key="index"
      :style="
        setTechProgressUI(
          usedTech,
          liftTech,
          isHover,
          liftFramework,
          isFrameworkHover,
        )
      "
    ></div>
  </div>
</template>

<script>
import JsonTechs from '../../../data/techs.json';
import { lift } from '../../service/yuSkillService';

export default {
  name: 'yuSkillProgressbars',

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

    liftFramework() {
      return lift.framework;
    },

    isFrameworkHover() {
      return lift.isFrameworkUp;
    },
  },

  methods: {
    setTechProgressUI(
      tech,
      liftTech,
      isHover,
      liftFramework,
      isFrameworkHover,
    ) {
      return {
        backgroundColor: this.getColor(tech.name),
        width: `${tech.percent}%`,
        transform: this.setProgressbarLift(
          tech.name,
          liftTech,
          isHover,
          liftFramework,
          isFrameworkHover,
        ),
      };
    },

    getColor(name) {
      return this.techs.find((obj) => obj.name == name).color;
    },

    setProgressbarLift(
      currentTech,
      liftTech,
      isHover,
      liftFramework,
      isFrameworkHover,
    ) {
      if (isFrameworkHover) {
        // hover framework
        return liftFramework == currentTech && isFrameworkHover
          ? 'scaleY(2)'
          : 'scaleY(1)';
      } else if (isHover) {
        // hover language
        return liftTech == currentTech && isHover ? 'scaleY(2)' : 'scaleY(1)';
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
