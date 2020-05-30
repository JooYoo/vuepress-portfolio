<template>
  <v-card class="footer">
    <v-card-title>
      <div class="footer__subheading">
        © {{ new Date().getFullYear() }} —
        <strong>ZhuYu</strong>
      </div>
      <v-spacer></v-spacer>

      <v-btn v-for="icon in icons" :key="icon.id" class="footer__icon--wrapper" dark icon>
        <a :href="icon.link" :target="icon.target">
          <v-icon :href="icon.link" class="footer__icon">{{ icon.icon }}</v-icon>
        </a>
      </v-btn>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  name: "yuFooter",
  data() {
    return {
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
  }
};
</script>

<style>
.footer {
  width: 100%;
  padding: 10px 0 !important;
  background-image: linear-gradient(
    to right,
    #3ab5b0 0%,
    #3d99be 31%,
    #56317a 100%
  );
}

.footer__subheading {
  color:white;
  font-weight: normal;
}

.footer__icon--wrapper {
  margin-right: 40px;
}

.footer__icon {
  color: white !important;
}
</style>