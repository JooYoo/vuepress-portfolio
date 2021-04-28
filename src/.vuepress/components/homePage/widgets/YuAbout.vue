<template>
  <v-container>
    <v-layout>
      <v-flex>
        <v-container>
          <div class="about__title">About</div>
          <p
            class="about__content"
            v-for="(about, index) in abouts"
            :key="index"
          >
            {{ about }}
          </p>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import JsonAbouts from '../../../data/abouts.json';

export default {
  name: 'yuAbout',

  data: () => ({
    abouts: JsonAbouts,
  }),
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
