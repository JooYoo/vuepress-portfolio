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

              <yuTechProgressbar :frontmatterTechs="page.frontmatter.techs"></yuTechProgressbar>
            </router-link>

            <v-card-actions>
              <yuTechLiftButton :frontmatterTechs="page.frontmatter.techs"></yuTechLiftButton>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import JsonTechs from "../../data/techs.json";
import yuTechProgressbar from "./widgets/YuTechProgressbar";
import yuTechLiftButton from "./widgets/YuTechLiftButton";

export default {
  components: {
    yuTechProgressbar,
    yuTechLiftButton,
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

.v-application--wrap {
  min-height: unset;
}
</style>