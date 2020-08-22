<template>
  <v-container>
    <v-layout>
      <v-flex>
        <v-container>
          <div class="about__title">About</div>
          <p class="about__content">
            Hello World. My name is Zhu Yu (朱瑜).
            I come from China and currently work in Germany.
            As a Frontend Developer my primary responsibility is that,
            to understand the needs of user,
            then rendering the information as friendly as possible.
            <br />I recently work in automotive industry and responsible for frontend development of In-Vehicle Infotainment (IVI) system.
            I am witnessing how software engineering is changing this traditional industry.
            I feel so lucky to live in the age where technology is advancing at a rapid pace.
            <br />In my free time, I also enjoy mobile app development by modern web technologies.
            And I'm passionate about the applications of Machine-Learning in the field of computer vision as well.
          </p>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "yuAbout"
};
</script>

<style>

* {
  font-family: "Roboto", sans-serif;
}

.about__title {
  margin-top: 40px;
  font-size: 45px;
  font-weight: lighter;
  letter-spacing: 2px;
}

.about__content {
  margin: 40px 0;
  font-size: 14px;
}
</style>