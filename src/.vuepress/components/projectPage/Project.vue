<template>
  <v-app>
    <v-container fluid>
      <v-row>
        <v-col v-for="page in pages" :cols="page.frontmatter.flex">
          <v-card class="project-overview__card" hover>
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

            <v-card-actions>
              <!-- <v-chip
                  v-for="tech in page.frontmatter.techs"
                  class="ma-1"
                  :color="getColor(tech)"
                  outlined
                >
                  <v-avatar
                    left
                    class="white--text"
                    :color="getColor(tech)"
                    src="https://simpleicons.org/icons/vue-dot-js.svg"
                  ></v-avatar>
                  {{tech}}
              </v-chip>-->
              <v-bottom-navigation dark shift>
                <v-btn>
                  <span>Video</span>
                  <v-icon>fa-email</v-icon>
                </v-btn>

                <v-btn>
                  <span>Music</span>
                  <v-icon>fa-favorite</v-icon>
                </v-btn>

                <v-btn>
                  <span>Book</span>
                  <v-icon>fa-angular</v-icon>
                </v-btn>

                <v-btn>
                  <span>Image</span>
                  <v-icon>fa-react</v-icon>
                </v-btn>
              </v-bottom-navigation>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import JsonTechs from "../../data/techs.json";

export default {
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
}

.project-overview__card-title {
  position: absolute;
  top: 0;
}
</style>