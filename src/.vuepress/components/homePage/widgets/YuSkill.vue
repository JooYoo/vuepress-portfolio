<template>
  <v-container>
    <div class="skill__title display-2 font-weight-thin">Skills</div>

    <v-flex>
      <v-card class="skill__card">
        <div class="skill-logo__container flex-wrap">
          <span v-for="tech in techs">
            <yuSkillLogo :logo="tech.logo"></yuSkillLogo>
          </span>
        </div>

        <v-card-actions class="skill-percent-bar">
          <div v-for="article in projectArticles">
            <yuSkillProgressbars :usedTechs="article.frontmatter.techs"></yuSkillProgressbars>
          </div>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-container>
</template>

<script>
import JsonTechs from "../../../data/techs.json";
import yuSkillLogo from "./YuSkillLogo";
import yuSkillProgressbars from "./YuSkillProgressbars";

export default {
  name: "yuSkill",

  components: {
    yuSkillLogo,
    yuSkillProgressbars,
  },

  data: () => ({
    techs: JsonTechs,
    projectArticles: [],
    isHover: false,
  }),

  mounted() {
    this.$site.pages.forEach((page) => {
      if (page.frontmatter.type === "project") {
        this.projectArticles.push(page);
      }
    });
  },

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
  align-items: center;
  padding: 20px 10px 40px;
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
