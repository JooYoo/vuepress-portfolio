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
    {{name}}
  </div>
</template>

<script>
import JsonTechs from "../../../data/techs.json";
import { lift } from "../../service/yuSkillService";

export default {
  name: "yuSkillLogo",

  props: {
    name: String,
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
    toggleHover: function () {
      // pass hoverTech to observable
      //FIXME:
      lift.isUp = !lift.isUp;
      lift.tech = this.name;

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