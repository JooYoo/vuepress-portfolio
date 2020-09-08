<template>
  <v-container>
    <div class="skill__title display-2 font-weight-thin">Skills</div>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card class="skill__card">
          <v-card-actions>
            <div class="lift-btn-container">
              <v-bottom-navigation v-for="tech in techs" class="lift-btn-tab" shift>
                <v-btn>
                  <span>{{tech.name}}</span>
                  <img :src="tech.logo" width="25px" />
                </v-btn>
              </v-bottom-navigation>
            </div>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import JsonSkills from "../../../data/skills.json";
import JsonTechs from "../../../data/techs.json";
import yuTechLiftButton from "../../projectPage/widgets/YuTechLiftButton";

export default {
  name: "yuSkill",

  components: {
    yuTechLiftButton,
  },

  data: () => ({
    skills: JsonSkills,
    techs: JsonTechs,
  }),
};
</script>

<style>
.skill__title {
  margin-top: 40px;
  margin-bottom: 50px;
}

.skill__card {
  border-radius: 10px !important;
}

.v-list-item__action {
  align-self: center !important;
}

.overflow-hidden {
  overflow: hidden;
}

.horiz-scroll {
  overflow-y: hidden;
  overflow-x: scroll;
}
</style>
