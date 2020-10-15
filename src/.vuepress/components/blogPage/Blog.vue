<template>
  <!-- <div class="post-container">
    <router-link v-for="page in pages" :to="page.path">
      <div class="post-card">
        <img class="article-image" src="../../public/images/vuepress.png" />
        <div class="page-detail">
          <div class="page-title">{{ page.title }}</div>
          <div class="page-description">{{ page.frontmatter.description }}</div>
          <div class="page-author">Author: {{ page.frontmatter.author }}</div>
        </div>
      </div>
    </router-link>
  </div> -->

  <v-list class="blog-list-container" two-line>
    <v-list-item-group>
      <router-link v-for="(page, index) in pages" :to="page.path">
        <v-list-item :key="page.title">
          <v-list-item-content>
            <v-list-item-title v-text="page.title"></v-list-item-title>
            <v-list-item-subtitle
              class="text--primary"
              v-text="page.frontmatter.keyword"
            ></v-list-item-subtitle>
            <v-list-item-subtitle
              v-text="page.frontmatter.description"
            ></v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-list-item-action-text
              v-text="page.frontmatter.date"
            ></v-list-item-action-text>
          </v-list-item-action>
        </v-list-item>

        <v-divider></v-divider>
      </router-link>
    </v-list-item-group>
  </v-list>
</template>
<script>
export default {
  data: () => ({
    pages: [],
  }),
  mounted() {
    this.$site.pages.forEach((page) => {
      if (page.frontmatter.type === 'blog') {
        this.pages.push(page);
      }
    });
  },
};
</script>

<style>
.blog-list-container {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
}

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
