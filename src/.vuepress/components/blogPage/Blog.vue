<template>
  <v-list class="blog-list-container" two-line>
    <v-chip-group
      v-model="selection"
      class="blog-filter__chip-ground-container"
    >
      <v-chip @click="getPages()">ALL</v-chip>
      <v-chip
        v-for="(value, key) in uKeywords"
        :key="key"
        :color="getTechColor(key)"
        @click="getSelection(key)"
        outlined
      >
        {{ key }}
      </v-chip>
    </v-chip-group>
    <v-divider></v-divider>

    <v-list-item-group>
      <router-link v-for="(page, index) in pages" :key="index" :to="page.path">
        <v-list-item :key="page.title">
          <v-list-item-content>
            <v-list-item-title v-text="page.title"></v-list-item-title>
            <v-list-item-subtitle
              class="text--primary"
              v-text="page.frontmatter.keyword"
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
import JsonTechs from '../../data/techs.json';
export default {
  data: () => ({
    pages: [],
    uKeywords: {},
    techs: JsonTechs,
    selection: '',
  }),

  mounted() {
    // get data
    this.getPages();
    // get unique keyword for each page
    this.getUniqueKeywords();
  },

  methods: {
    getUniqueKeywords: function () {
      for (let page of this.pages) {
        this.uKeywords[page.frontmatter.keyword] =
          this.uKeywords[page.frontmatter.keyword] + 1 || 1;
      }
    },
    getTechColor: function (name) {
      const tech = this.techs.find((obj) => obj.name == name);
      const techColor = tech ? tech.color : '#68217a';
      return techColor;
    },
    getSelection: function (name) {
      // get the current chip-name as selection
      this.selection = name;
      // filter pages
      this.getPagesByKeyword();
    },
    getPages: function () {
      this.$site.pages.forEach((page) => {
        if (page.frontmatter.type === 'blog') {
          this.pages.push(page);
        }
      });
    },
    getPagesByKeyword: function () {
      // clean up pages
      this.pages = [];
      // find the pages based on selection
      this.$site.pages.forEach((page) => {
        if (
          page.frontmatter.type === 'blog' &&
          page.frontmatter.keyword === this.selection
        ) {
          this.pages.push(page);
        }
      });
    },
  },
};
</script>

<style>
.blog-list-container {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 100vmin;
  padding-left: 0;
  padding-right: 0;
}

.blog-filter__chip-ground-container {
  margin: 0 15px;
}
</style>
