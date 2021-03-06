<template>
  <v-container>
    <v-layout>
      <v-flex>
        <v-container>
          <div class="about__title">About</div>
          <p class="about__content">
            Hello World. I am Yu (朱瑜). A Frontend Developer, Lifelong Learner,
            Music Lover.
          </p>
          <p class="about__content">
            I love coding. Over the years I have never stopped learning new
            technologies and strengthening my basic knowledge. I've always
            required myself to meet the standards of a Software engineer. In the
            software development process, I try to make my code as simple and
            easy to read, modular, reusable, extendable, and maintainable as
            possible. I hope when the next engineer sees my code, he or she will
            be able to get started quickly and continue developing new features.
            I believe that a willingness to help people, combined with
            technology, can make the world a better place.
          </p>

          <p class="about__content">
            I love UX-Design. As a Frontend Developer, my primary responsibility
            is, to understand the needs of the user, then rendering the
            information as friendly as possible. I like Minimalist Design and
            friendly Interaction. I'd love to think about how users would use
            the software in different scenarios. I'm passionate about new
            technologies, but I also believe that technology is not the goal in
            itself, but a means to achieve the goal. I'd love to develop
            software that helps users achieve their goals efficiently and
            satisfactorily.
          </p>
          <p class="about__content">
            I love challenges. I have been working in Germany since 2015. In the
            meantime, I studied German. Now as a Frontend Developer, working in
            the Automotive Industry. I work close with UI/UX designer to
            implement design ideas into usable software for Automotive
            Infotainment-System. So far, I have participated in the development
            of various features for several vehicle models, such as media
            player, navigation, seat massage, phone, etc.
          </p>
          <p class="about__content">
            I love life. In my free time, I like to try different technologies
            such as mobile app development, machine learning, computer vision,
            etc. and use them to solve problems in my daily life. I will share
            these applications to the open-source community or release them to
            app stores so that more people can use it. I play guitar and
            keyboard and hope to become a professional musician and produce my
            own music albums by the time I retire.
          </p>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'yuAbout',
};
</script>

<style>
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
