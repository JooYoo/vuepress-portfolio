<template>
  <v-flex>
    <v-footer class="v-footer" height="auto">
      <v-card
        class="flex"
        flat
        tile
        style="background-image: linear-gradient(to right, #3ab5b0 0%, #3d99be 31%, #56317a 100%);"
      >
        <v-card-title>
          <strong class="subheading" style="color:white;">
            © {{ new Date().getFullYear() }} —
            <strong>ZhuYu</strong>
          </strong>
          <v-spacer></v-spacer>

          <v-btn v-for="icon in icons" :key="icon.id" class="v-footer__icon--wrapper" dark icon>
            <a id="link-color" :href="icon.link" :target="icon.target">
              <v-icon :href="icon.link" size="24px" class="v-footer__icon">{{ icon.icon }}</v-icon>
            </a>
          </v-btn>
        </v-card-title>
      </v-card>
    </v-footer>
  </v-flex>
</template>

<script>
export default {
  name: "yuFooter",
  data() {
    return {
      bottomNav: 3,
      icons: [
        {
          icon: "fab fa-github",
          link: "https://github.com/JooYoo",
          target: "_blank"
        },
        {
          icon: "fas fa-envelope",
          link: "mailto:jooyoo@outlook.com",
          target: ""
        },
        {
          icon: "fab fa-linkedin",
          link: "https://www.linkedin.com/in/yu-zhu-511770177",
          target: "_blank"
        }
      ]
    };
  },
  computed: {
    color() {
      switch (this.bottomNav) {
        case 0:
          return "blue-grey";
        case 1:
          return "teal";
        case 2:
          return "brown";
        case 3:
          return "indigo";
      }
    }
  }
};
</script>

<style>
.v-footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0;
}

.v-footer__icon--wrapper{
  margin-right: 40px;
}

.v-footer__icon{
  color: white !important;
}
</style>