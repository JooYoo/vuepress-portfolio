<template>
  <div class="skill-progressbar-container">
    <div style="background: red;" v-for="usedTech in usedTechs">{{usedTech}}</div>
  </div>
</template>

<script>
export default {
  name: "yuSkillProgressbars",

  props: {
    usedTechs: Array,
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