<template>
  <v-container>
    <div class="skill__title display-2 font-weight-thin">Skills</div>

    <v-flex>
      <!-- skill-card--language -->
      <v-card class="skill-card">
        <v-list-item class="skill-description">
          <v-list-item-content>
            <v-list-item-title class="headline">
              <div class="headline-container">
                <span class="headline__tech" :style="setTitleColor(liftTech)">
                  {{ liftTech }}:
                </span>
                <span class="headline__made-by">
                  {{ getReducedTechPercent(liftTech) }}%
                </span>
              </div>
              <span class="headline-card-type">Languages</span>
            </v-list-item-title>
            <v-list-item-subtitle>
              of my projects developed by {{ liftTech }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <div class="skill-logo__container flex-wrap">
          <span v-for="tech in usedLanguages">
            <yuSkillLogo
              :logo="tech.logo"
              :name="tech.name"
              :isFramework="false"
            ></yuSkillLogo>
          </span>
        </div>

        <v-card-actions>
          <div class="skill-percent-bar">
            <yuSkillProgressbars
              :usedTechs="calcUsedLanguages"
            ></yuSkillProgressbars>
          </div>
        </v-card-actions>
      </v-card>

      <!-- skill-card--framework -->
      <v-card class="skill-card skill-card--framework">
        <v-list-item class="skill-description">
          <v-list-item-content>
            <v-list-item-title class="headline">
              <div class="headline-container">
                <span
                  class="headline__tech"
                  :style="setTitleColor(liftFramework)"
                >
                  {{ liftFramework }}:
                </span>
                <span class="headline__made-by">
                  {{ getUsedFrameworkCount(liftFramework) }} /
                  {{ projectArticles.length }}
                </span>
              </div>
              <span class="headline-card-type">Frameworks / Libraries</span>
            </v-list-item-title>
            <v-list-item-subtitle>
              of my projects developed by {{ liftFramework }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <div class="skill-logo__container flex-wrap">
          <span v-for="tech in usedFrameworks">
            <yuSkillLogo
              :logo="tech.logo"
              :name="tech.name"
              :isFramework="true"
            ></yuSkillLogo>
          </span>
        </div>

        <v-card-actions>
          <div class="skill-percent-bar">
            <yuSkillProgressbars
              :usedTechs="calcUsedFrameworks"
            ></yuSkillProgressbars>
          </div>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-container>
</template>

<script>
import JsonTechs from '../../../data/techs.json';
import yuSkillLogo from './YuSkillLogo';
import yuSkillProgressbars from './YuSkillProgressbars';
import { lift } from '../../service/yuSkillService';

export default {
  name: 'yuSkill',

  components: {
    yuSkillLogo,
    yuSkillProgressbars,
  },

  data: () => ({
    techs: JsonTechs,
    projectArticles: [],
    usedLanguages: [],
    usedFrameworks: [],
  }),

  mounted() {
    this.$site.pages.forEach((page) => {
      if (page.frontmatter.type === 'project') {
        this.projectArticles.push(page);
      }
    });

    // merge all usedLanguage from articles
    this.getUsedLanguages();

    // merge all usedFramework
    this.getUsedFrameworks();
  },

  computed: {
    // get hovered tech from Observable
    liftTech() {
      return lift.tech;
    },

    // get hovered framework from observable
    liftFramework() {
      return lift.framework;
    },

    // summarize all languages from articles
    calcUsedLanguages() {
      let articleCount = this.projectArticles.length;
      let allLanguages = [];
      let reducedLanguages;

      // merge all language from articles
      this.projectArticles.forEach((article) => {
        allLanguages.push(...article.frontmatter.languages);
      });

      // reduce (addition) all the languages which has the same name => {name: 'JavaScript', percent:'60'}
      reducedLanguages = Object.values(
        allLanguages.reduce((total, { name, percent }) => {
          total[name] = total[name] || { name, percent: 0 };
          total[name].percent += percent / articleCount;
          return total;
        }, {}),
      );
      return reducedLanguages;
    },

    // summarize frameworks to => {name: 'React', percent:'20'}
    calcUsedFrameworks() {
      let articleCount = this.projectArticles.length;
      let allFrameworks = [];
      let reducedFrameworks;

      // merge all frameworks from each article
      this.projectArticles.forEach((article) => {
        if (article.frontmatter.frameworks[0].name) {
          allFrameworks.push(...article.frontmatter.frameworks);
        }
      });

      // reduce all the frameworks => {name: 'React', percent:'20'}
      reducedFrameworks = Object.values(
        allFrameworks.reduce((total, { name, percent }) => {
          total[name] = total[name] || { name, percent: 0 };
          total[name].percent = this.getReducedFrameworkPercent(
            total[name].name,
          );
          return total;
        }, {}),
      );

      return reducedFrameworks;
    },
  },

  methods: {
    getUsedLanguages() {
      this.calcUsedLanguages.forEach((language) => {
        this.usedLanguages.push(
          this.techs.find((tech) => tech.name == language.name),
        );
      });
    },

    getUsedFrameworks() {
      this.getUniqueFrameworkName().forEach((frameworkName) => {
        this.usedFrameworks.push(
          this.techs.find((tech) => tech.name == frameworkName),
        );
      });
    },

    getUniqueFrameworkName() {
      // get unique framework name
      let frameworkNames = [];
      let allFrameworks = [];

      this.projectArticles.forEach((article) => {
        allFrameworks.push(...article.frontmatter.frameworks);
      });

      allFrameworks.forEach((framework) => {
        framework.name ? frameworkNames.push(framework.name) : '';
      });

      let uniqFrameworks = [...new Set(frameworkNames)];

      return uniqFrameworks;
    },

    getUsedFrameworkCount(liftFramework) {
      let allFrameworks = [];
      let liftFrameworkCount;

      // how many article mark as 'liftFramework'
      this.projectArticles.forEach((article) => {
        allFrameworks.push(...article.frontmatter.frameworks);
      });
      liftFrameworkCount = allFrameworks.filter((x) => x.name == liftFramework)
        .length;

      return liftFrameworkCount;
    },

    getReducedFrameworkPercent(frameworkName) {
      let numerator = this.getUsedFrameworkCount(frameworkName);
      let denominator = this.projectArticles.length;

      let result = (numerator / denominator) * 100;

      return result;
    },

    getReducedTechPercent(liftTech) {
      let liftedTech = this.calcUsedLanguages.find((x) => x.name == liftTech);
      !liftedTech ? (liftedTech = 'Angular') : '';
      let reducedTechPercent = Math.round(liftedTech.percent);

      if (!reducedTechPercent) return '---';
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

.skill-card--framework {
  margin-top: 40px;
}

.skill-description {
  margin: 10px;
  padding-bottom: 20px;
  border-bottom: 1px gainsboro solid;
}

.headline-container {
  display: flex;
  justify-content: flex-start;
  transition: opacity 1s ease-in-out;
}

.headline-card-type {
  color: rgba(0, 0, 0, 0.2);
}

.headline__made-by {
  margin-inline-start: 10px;
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
