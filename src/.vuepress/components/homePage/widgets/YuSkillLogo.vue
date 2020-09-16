<template>
  <div>
    <img
      class="skill-logo"
      :src="logo"
      :style="hoverLogoStyle(isHover)"
      @mouseenter="toggleHover"
      @mouseleave="toggleHover"
    />
  </div>
</template>

<script>
import JsonTechs from "../../../data/techs.json";

export default {
  name: "yuSkillLogo",

  props: {
    logo: String,
  },

  data: () => ({
    techs: JsonTechs,
    isHover: false,
  }),

  methods: {
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