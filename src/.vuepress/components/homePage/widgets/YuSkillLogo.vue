<template>
  <div>
    <img
      class="skill-logo"
      :src="logo"
      :style="hoverLogoStyle(isHover)"
      @mouseenter="toggleHover"
      @mouseleave="toggleHover"
    />
    {{count}}
    <button @click="toggleLift">click me</button>
  </div>
</template>

<script>
import JsonTechs from "../../../data/techs.json";
import { lift } from "../../service/yuSkillService";

export default {
  name: "yuSkillLogo",

  props: {
    logo: String,
  },

  data: () => ({
    techs: JsonTechs,
    isHover: false,
  }),

  computed: {
    count() {
      return lift.isUp;
    },
  },

  methods: {
    toggleLift() {
      lift.isUp = !lift.isUp;
    },

    toggleHover: function () {
      return (this.isHover = !this.isHover);
    },

    hoverLogoStyle: function (isHover) {
      if (isHover) {
        return {
          transform: "scale(1.2)",
        };
      }
    },
  },
};
</script>

<style>
.skill-logo {
  width: 50px;
  margin: 20px;
}
</style>