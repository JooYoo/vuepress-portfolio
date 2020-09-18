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

        <v-card-actions>
          <div class="skill-percent-bar">
            <yuSkillProgressbars :usedTechs="calcUsedTechs"></yuSkillProgressbars>
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
    articleTechs: [],
  }),

  mounted() {
    this.$site.pages.forEach((page) => {
      if (page.frontmatter.type === "project") {
        this.projectArticles.push(page);
      }
    });
  },

  computed: {
    calcUsedTechs: function () {
      let projectCount = this.projectArticles.length;
      let allTechs = [];

      this.projectArticles.forEach((article) => {
        // merge all techs from articles
        allTechs.push(...article.frontmatter.techs);
      });

      console.log(allTechs);
      return allTechs;
    },
  },

  methods: {
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

.v-card__actions {
  border-top: 1px lightgray solid;
}

.skill-percent-bar {
  width: 100%;
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
