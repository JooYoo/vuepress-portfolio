<template>
  <v-app>
    <v-container fluid>
      <v-row>
        <v-col v-for="page in pages" :cols="page.frontmatter.flex">
          <router-link class="router-nav" :to="page.path">
            <v-card class="project-overview__card" hover>
              <v-img
                class="align-end project-overview__card-img"
                :src="page.frontmatter.overviewImg"
              ></v-img>
              <v-card-title
                class="headline white--text project-overview__card-title"
                v-text="page.frontmatter.title"
              ></v-card-title>

              <v-card-actions>
                <v-chip
                  class="ma-2"
                  v-for="tech in page.frontmatter.techs"
                  outlined
                  :color="getColor(tech)"
                >{{tech}}</v-chip>
              </v-card-actions>
            </v-card>
          </router-link>
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