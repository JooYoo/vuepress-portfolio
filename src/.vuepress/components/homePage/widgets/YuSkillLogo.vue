<template>
  <span>
    <img class="skill-logo" :src="logo" @mouseenter="toggleHover" @mouseleave="toggleHover" />
    <!-- {{isHover}} -->
  </span>
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
  },
};
</script>

<style>
.skill-logo {
  width: 50px;
  margin: 20px;
}
</style>