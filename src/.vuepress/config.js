module.exports = {
  title: "Yu",
  description: "My awesome portfolio blog",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Project", link: "/project/" },
      { text: "Blog", link: "/blog/" },
    ],
    sidebar: {
      '/blog/': [
        '',    
        'Article', 
        'Article2',
        'Article3'
      ],

      '/project/': [
        '',
        'Project',
        'Project2',
        'Project3'
      ],

      '/': [
        ''
      ]
    }
  },
  plugins: [
    // "social-share",
    // {
    //   networks: ["twitter", "facebook", "reddit", "instagram"],
    // },
  ],
};
