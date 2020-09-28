<template>
  <div class="lift-btn-container">
    <v-bottom-navigation
      v-for="tech in frontmatterTechs"
      class="lift-btn-tab"
      shift
      :color="getColor(tech.name)"
    >
      <v-btn :style="setLogoColor(tech.name)">
        <span>{{ tech.percent }}%</span>
        <yuIcon :logo="tech.name"></yuIcon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script>
import JsonTechs from "../../../data/techs.json";
import yuIcon from "../../share/yuIcon";

export default {
  name: "yuTechLiftButton",

  components: {
    yuIcon,
  },

  data: () => ({
    techs: JsonTechs,
  }),

  props: {
    frontmatterTechs: Array,
  },

  methods: {
    getColor: function (name) {
      return this.techs.find((obj) => obj.name == name).color;
    },

    setLogoColor: function (name) {
      return {
        "--logo-color": this.getColor(name),
      };
    },
  },
};
</script>

<style>
.lift-btn-container {
  display: flex;
  justify-content: center;
  width: 100%;
}

.lift-btn-tab {
  box-shadow: unset !important;
  width: unset !important;
}

.v-btn--active {
  fill: var(--logo-color);
}
</style>