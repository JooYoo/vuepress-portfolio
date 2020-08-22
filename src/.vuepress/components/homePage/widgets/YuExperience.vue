<template>
  <div class="this-component">
    <v-container>
      <v-layout>
        <v-flex align-center text-xs-left>
          <div class="experience__title display-2 font-weight-thin">Experience</div>

          <v-timeline>
            <v-timeline-item v-for="(year, i) in experiences" :color="year.color" :key="i" small>
              <span
                slot="opposite"
                :class="`headline font-weight-bold ${year.color}--text`"
                v-text="year.year"
              ></span>
              <div class="py-3">
                <h2
                  :class="`headline font-weight-light mb-2 ${year.color}--text`"
                  v-text="year.title"
                ></h2>
                <div
                  :class="`subheading font-weight-light mb-1 ${year.color}--text `"
                  v-text="year.where"
                ></div>
                <div>{{year.content.join(" ")}}</div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>



<script>
import JsonExperiences from "../../../data/experiences.json";

export default {
  name: "yuExperience",

  data: () => ({
    experiences: JsonExperiences
  })
};
</script>

<style>
.experience__title {
  margin-bottom: 40px;
  margin-top: 40px;
}

.v-application .mb-2 {
  border-bottom: 0px !important;
}
</style>