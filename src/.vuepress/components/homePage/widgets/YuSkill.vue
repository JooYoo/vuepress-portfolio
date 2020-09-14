<template>
  <v-container>
    <div class="skill__title display-2 font-weight-thin">Skills</div>

    <v-flex>
      <v-card class="skill__card">
        <div class="skill-logo__container flex-wrap">
          <span v-for="tech in techs">
            <!-- <img
              class="skill-logo"
              :src="tech.logo"
              :style="hoverLogoStyle(tech, isHover)"
              @mouseenter="toggleHover"
              @mouseleave="toggleHover"
            />-->
            <yuSkillLogo :logo="tech.logo"></yuSkillLogo>
          </span>
        </div>

        <v-card-actions class="skill-percent-bar">
          <span>test</span>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-container>
</template>

<script>
import JsonTechs from "../../../data/techs.json";
import yuSkillLogo from "./YuSkillLogo";

export default {
  name: "yuSkill",

  components: {
    yuSkillLogo,
  },

  data: () => ({
    techs: JsonTechs,
    isHover: false,
  }),

  methods: {
    toggleHover: function () {
      return (this.isHover = !this.isHover);
    },

    hoverLogoStyle: function (tech, isHover) {
      if (isHover) {
        return {
          backgroundColor: this.getColor(tech.name),
        };
      }
    },

    getColor: function (name) {
      return this.techs.find((obj) => obj.name == name).color;
    },
  },
};
</script>

<style>
.skill__title {
  margin-top: 40px;
  margin-bottom: 50px;
}

.skill__card {
  border-radius: 10px !important;
}

.skill-logo__container {
  display: flex;
  padding: 20px 10px 40px;
}

.skill-logo {
  width: 50px;
  margin: 20px;
}

.skill-percent-bar {
  border: 1px solid red;
}

.v-list-item__action {
  align-self: center !important;
}

.overflow-hidden {
  overflow: hidden;
}

.horiz-scroll {
  overflow-y: hidden;
  overflow-x: scroll;
}
</style>
