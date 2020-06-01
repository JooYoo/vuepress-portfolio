<template>
  <v-card class="project-overview__container--main">
    <v-container>
      <div class="project-overview__title">Projects</div>
      <v-row>
        <v-col
          v-if="index != 0"
          v-for="(project, index) in projects"
          :key="index"
          :cols="flexes[index - 1]"
        >
          <router-link class="router-nav" :to="project.path">
            <v-card class="project-overview__card" hover>
              <v-img
                :src="projects[4-index].frontmatter.overviewImg"
                class="white--text align-end project-overview__card-img"
              >
                <v-card-title
                  class="headline project-overview__card-title"
                  v-text="projects[4-index].title"
                ></v-card-title>
              </v-img>

              <v-card-actions>
                <v-chip
                  v-for="tech in projects[4-index].frontmatter.techs"
                  class="ma-2"
                  outlined
                  :color="getColor(tech)"
                >{{tech}}</v-chip>
              </v-card-actions>
            </v-card>
          </router-link>
        </v-col>
      </v-row>

      <router-link to="/project">
        <div class="text-center project-overview__btn--container">
          <v-btn dark class="project-overview__btn--more" color="primary" rounded large>more</v-btn>
        </div>
      </router-link>
    </v-container>
  </v-card>
</template>

<script>
import JsonTechs from "../../../data/techs.json";

export default {
  name: "yuProjectsOverview",

  data() {
    return {
      projects: [],
      flexes: [6, 6, 12],
      techs: JsonTechs
    };
  },

  mounted() {
    this.$site.pages.forEach(page => {
      if (page.frontmatter.type === "project") {
        this.projects.push(page);
      }
    });
  },

  methods: {
    getColor: function(name) {
      return this.techs.find(obj => obj.name == name).color;
    }
  }
};
</script>

<style>
.project-overview__container--main {
  padding: 40px 0;
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