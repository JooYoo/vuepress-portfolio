module.exports = {
  plugins: ['@vuepress/back-to-top'],
  title: "Yu💻",
  head:[
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900' }],
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css' }],
  ],
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
  // plugins: [
  //   // "social-share",
  //   // {
  //   //   networks: ["twitter", "facebook", "reddit", "instagram"],
  //   // },
  //   '@vuepress/back-to-top'
  // ],
};
