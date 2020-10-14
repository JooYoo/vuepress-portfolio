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
      <template v-for="(item, index) in items">
        <v-list-item :key="item.title">
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
            <v-list-item-subtitle
              class="text--primary"
              v-text="item.headline"
            ></v-list-item-subtitle>
            <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-list-item-action-text
              v-text="item.action"
            ></v-list-item-action-text>
          </v-list-item-action>
        </v-list-item>

        <v-divider></v-divider>
      </template>
    </v-list-item-group>
  </v-list>
</template>
<script>
export default {
  data: () => ({
    pages: [],

    items: [
      {
        action: '15 min',
        headline: 'Brunch this weekend?',
        subtitle:
          "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
        title: 'Ali Connors',
      },
      {
        action: '2 hr',
        headline: 'Summer BBQ',
        subtitle: "Wish I could come, but I'm out of town this weekend.",
        title: 'me, Scrott, Jennifer',
      },
      {
        action: '6 hr',
        headline: 'Oui oui',
        subtitle: 'Do you have Paris recommendations? Have you ever been?',
        title: 'Sandra Adams',
      },
      {
        action: '12 hr',
        headline: 'Birthday gift',
        subtitle:
          'Have any ideas about what we should get Heidi for her birthday?',
        title: 'Trevor Hansen',
      },
      {
        action: '18hr',
        headline: 'Recipe to try',
        subtitle:
          'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
        title: 'Britta Holt',
      },
    ],
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
