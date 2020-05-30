<template>
  <!-- <div class="post-container">
    <router-link v-if="index != 0" v-for="(page, index) in pages" :key="index" :to="page.path">
      <div class="post-card">
        <img class="article-image" :src="pages[4-index].frontmatter.overviewImg" />
        <div class="page-detail">
          <div class="page-title">{{ pages[4-index].title }}</div>
          <div class="page-description">{{ pages[4-index].frontmatter.description }}</div>
          <div class="page-author">Author: {{ pages[4-index].frontmatter.author }}</div>
          <div v-for="tech in page.frontmatter.techs">Techs: {{tech}}</div>
        </div>
      </div>
    </router-link>
  </div> -->

  <v-container>
    <v-layout justify-center>
      <v-flex xs12 sm12>
        <v-container fluid grid-list-xl>
          <div id="experience-title" class="display-2 font-weight-thin">Projects</div>
          <v-layout row wrap>
            <v-flex>
              <router-link class="router-nav" v-if="index != 0" v-for="(page, index) in pages" :key="index" :to="page.path">
                <v-card class="rounded-card" hover>
                  <v-img
                    :src="pages[4-index].frontmatter.overviewImg"
                    height="200px"
                  >
                    <v-container fill-height fluid pa-2>
                      <v-layout fill-height>
                        <v-flex xs12 align-end flexbox>
                          <span
                            class="headline white--text"
                            v-text="pages[4-index].title"
                          ></span>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-img>

                  <v-card-actions class="text-xs-center">
                    <div class="text-xs-left">
                      <v-chip
                        v-for="tech in pages[4-index].frontmatter.techs"
                        small
                        outlined
                      >{{tech}}</v-chip>
                    </div>
                  </v-card-actions>
                </v-card>
              </router-link>
            </v-flex>
          </v-layout>
          <router-link to="/project">
            <div class="text-xs-center">
              <v-btn dark color="primary" rounded large>more</v-btn>
            </div>
          </router-link>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  name: "yuProjectsOverview",
  data() {
    return {
      pages: []
    };
  },
  mounted() {
    this.$site.pages.forEach(page => {
      if (page.frontmatter.type === "project") {
        this.pages.push(page);
      }
    });
  }
};
</script>

<style>
.post-container {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
.post-card {
  width: 600px;
  height: 150px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 10px;
  display: flex;
  align-items: center;
}
.article-image {
  height: 100%;
}
.page-detail {
  width: 100%;
}
.page-title,
.page-description,
.page-author {
  text-align: center;
  line-height: 200%;
}
.page-title {
  font-size: 25px;
  font-weight: bold;
  color: black;
}
.page-description {
  font-style: italic;
  font-weight: lighter;
  color: black;
}
</style>