<template>
  <v-container class="project-overview__container--main">
    <div class="project-overview__title">Projects</div>
    <v-row>
      <v-col
        v-for="(project, index) in projects"
        :key="index"
        sm="12"
        :md="flexes[index]"
      >
        <v-card class="project-overview__card" hover>
          <router-link class="router-nav" :to="project.path">
            <v-img
              class="white--text align-end project-overview__card-img"
              :src="project.frontmatter.overviewImg"
            >
              <v-card-title
                class="headline project-overview__card-title"
                v-text="project.title"
              ></v-card-title>
            </v-img>
            <yuTechProgressbar
              :frontmatterTechs="project.frontmatter.languages"
            ></yuTechProgressbar>
          </router-link>

          <v-card-actions>
            <yuTechLiftButton
              :frontmatterTechs="project.frontmatter.languages"
            ></yuTechLiftButton>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <!-- more btn -->
    <router-link to="/project">
      <div class="text-center project-overview__btn--container">
        <v-btn
          dark
          class="project-overview__btn--more"
          color="primary"
          rounded
          large
          >more</v-btn
        >
      </div>
    </router-link>
  </v-container>
</template>

<script>
import JsonTechs from '../../../data/techs.json';
import yuTechProgressbar from '../../projectPage/widgets/YuTechProgressbar';
import yuTechLiftButton from '../../projectPage/widgets/YuTechLiftButton';

export default {
  name: 'yuProjectsOverview',

  components: {
    yuTechProgressbar,
    yuTechLiftButton,
  },

  data: () => ({
    projects: [],
    flexes: [6, 6, 12],
    techs: JsonTechs,
  }),

  mounted() {
    this.$site.pages.forEach((page) => {
      if (page.frontmatter.type === 'project' && page.frontmatter.highlight) {
        this.projects.push(page);
      }
    });
  },

  methods: {
    getColor: function (name) {
      return this.techs.find((obj) => obj.name == name).color;
    },
  },
};
</script>

<style>
.project-overview__container--main {
  padding: 40px 25px;
}

.project-overview__title {
  margin: 40px 0;
  font-size: 45px;
  font-weight: lighter;
  letter-spacing: 2px;
}

.project-overview__card {
  border-radius: 10px !important;
}

.project-overview__card-img {
  height: 200px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.project-overview__card-title {
  position: absolute;
  top: 0;
}

.project-overview__btn--container {
  margin-top: 30px;
}

.project-overview__btn--more {
  padding: 25px 30px !important;
}
</style>
