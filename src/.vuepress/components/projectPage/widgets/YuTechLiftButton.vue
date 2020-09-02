<template>
  <div class="project-overview__card-footer-container">
    <v-bottom-navigation
      v-for="tech in frontmatterTechs"
      class="project-overview__card-footer-tech-tab"
      shift
    >
      <v-btn>
        <span
          class="project-overview__card-footer-tech-tab--percent"
          :style="{'border-color': getColor(tech.name)}"
        >{{tech.percent}}</span>
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
  },
};
</script>

<style>
.project-overview__card-footer-container {
  display: flex;
  justify-content: center;
  width: 100%;
}

.project-overview__card-footer-tech-tab {
  box-shadow: unset !important;
  width: unset !important;
}

.project-overview__card-footer-tech-tab--percent {
  border-bottom: 3px solid;
}
</style>