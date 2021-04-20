<template>
  <v-list class="blog-list-container" two-line>
    <v-chip-group v-model="selection" active-class="active">
      <v-chip
        v-for="(value, key) in uKeywords"
        :key="key"
        outlined
        :color="getTechColor(key)"
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
            <!-- <v-list-item-subtitle
              v-text="page.frontmatter.description"
            ></v-list-item-subtitle> -->
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
  // TODO: [x] 1. get techs display as chips
  // 2. chips color follow techs color
  // 3. click chip to get selection
  // 4. filter posts by selection
  data: () => ({
    pages: [],
    uKeywords: {},
    techs: JsonTechs,

    // UI template
    selection: 'Work',
    tags: ['Work', 'Home Improvement', 'Vacation', 'Food'],
  }),

  mounted() {
    this.$site.pages.forEach((page) => {
      if (page.frontmatter.type === 'blog') {
        this.pages.push(page);
      }
    });
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

.invisible {
  display: none;
}
</style>
