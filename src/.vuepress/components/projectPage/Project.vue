<template>
  <v-app>
    <v-container fluid grid-list-xl>
      <v-layout row wrap>
        <v-flex xs12 md6 v-for="page in pages">
          <v-card class="project-overview__card rounded-card" hover>
            <router-link class="router-nav" :to="page.path">
              <v-img
                class="align-end project-overview__card-img"
                :src="page.frontmatter.overviewImg"
              >
                <v-card-title
                  class="headline white--text project-overview__card-title"
                  v-text="page.frontmatter.title"
                ></v-card-title>
              </v-img>
            </router-link>

            <v-card-actions class="project-overview__card-footer-container">
              <v-bottom-navigation class="project-overview__card-footer-tech-tab" shift>
                <v-btn
                  v-for="tech in page.frontmatter.techs"
                  class="project-overview__card-footer-tech-tab--btn"
                >
                  <span
                    class="project-overview__card-footer-tech-tab--percent"
                    :style="{'border-color': getColor(tech.name)}"
                  >{{tech.percent}}</span>
                  <yuIcon :logo="tech.name"></yuIcon>
                </v-btn>
              </v-bottom-navigation>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import JsonTechs from "../../data/techs.json";
import yuIcon from "../share/yuIcon";

export default {
  components: {
    yuIcon,
  },

  data: () => ({
    pages: [],
    techs: JsonTechs,
  }),

  mounted() {
    this.$site.pages.forEach((page) => {
      if (page.frontmatter.type === "project") {
        this.pages.push(page);
      }
    });
  },

  methods: {
    getColor: function (name) {
      return this.techs.find((obj) => obj.name == name).color;
    },

    getLogo: function (name) {
      return this.techs.find((obj) => obj.name == name).logo;
    },
  },
};
</script>

<style>
.project-overview__card {
  border-radius: 10px !important;
}

.project-overview__card-img {
  height: 200px;
  border-top-left-radius: 10px !important;
  border-top-right-radius: 10px !important;
}

.project-overview__card-title {
  position: absolute;
  top: 0;
}

.project-overview__card-footer-tech-tab {
  box-shadow: unset !important;
  width: unset !important;
}

.project-overview__card-footer-container {
  display: flex;
  justify-content: center;
}

.project-overview__card-footer-tech-tab--btn {
}

.project-overview__card-footer-tech-tab--percent {
  border-bottom: 3px solid;
}
</style>