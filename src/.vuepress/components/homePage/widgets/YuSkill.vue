<template>
  <v-container>
    <div class="skill__title display-2 font-weight-thin">Skills</div>

    <v-flex>
      <v-card class="skill-card">
        <v-list-item class="skill-description">
          <v-list-item-content>
            <v-list-item-title class="headline">
              <span class="headline__made-by">
                {{ getReducedTechPercent(liftTech) }}%</span
              >
              <span class="headline__tech" :style="setTitleColor(liftTech)">{{
                liftTech
              }}</span>
            </v-list-item-title>
            <!-- TODO: make dynamic -->
            <v-list-item-subtitle>
              {{ liftTech }} accounts for {{ getReducedTechPercent(liftTech) }}%
              of all my projects
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <div class="skill-logo__container flex-wrap">
          <!-- TODO: only display usedTechs -->
          <span v-for="tech in techs">
            <yuSkillLogo :logo="tech.logo" :name="tech.name"></yuSkillLogo>
          </span>
        </div>

        <v-card-actions>
          <div class="skill-percent-bar">
            <yuSkillProgressbars
              :usedTechs="calcUsedTechs"
            ></yuSkillProgressbars>
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
import { lift } from "../../service/yuSkillService";

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
    // get hovered tech from Observable
    liftTech() {
      return lift.tech;
    },

    // summarize all techs from articles
    calcUsedTechs() {
      let articleCount = this.projectArticles.length;
      let allTechs = [];
      let reducedTechs;

      // merge all techs from articles
      this.projectArticles.forEach((article) => {
        allTechs.push(...article.frontmatter.techs);
      });

      // reduce (addition) all the tech which has the same name
      reducedTechs = Object.values(
        allTechs.reduce((total, { name, percent }) => {
          total[name] = total[name] || { name, percent: 0 };
          total[name].percent += percent / articleCount;
          return total;
        }, {})
      );

      return reducedTechs;
    },
  },

  methods: {
    getReducedTechPercent(liftTech) {
      let liftedTech = this.calcUsedTechs.find((x) => x.name == liftTech);
      !liftedTech ? (liftedTech = "Angular") : "";
      let reducedTechPercent = Math.round(liftedTech.percent);

      if (!reducedTechPercent) return "---";
      return reducedTechPercent;
    },

    getColor(name) {
      return this.techs.find((obj) => obj.name == name).color;
    },

    setTitleColor(liftTech) {
      return {
        color: this.getColor(liftTech),
      };
    },
  },
};
</script>

<style>
.skill__title {
  margin-top: 40px;
  margin-bottom: 50px;
}

.skill-card {
  border-radius: 10px !important;
  padding-top: 20px;
}

.skill-description {
  margin: 10px;
  padding-bottom: 20px;
  border-bottom: 1px gainsboro solid;
}

.headline {
  /* TODO: add transition */
  transition: opacity 1s ease-in-out;
}

.headline__made-by {
  color: rgba(0, 0, 0, 0.2);
}

.headline__tech {
  font-weight: bolder;
}

.skill-logo__container {
  display: flex;
  align-items: center;
  padding: 20px 10px 40px;
}

.v-card__actions {
  padding: unset !important;
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
