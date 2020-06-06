<template>
  <v-container>
    <div class="skill__title display-2 font-weight-thin">Skills</div>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card class="skill__card">
          <v-card-text class="overflow-hidden py-0">
            <v-layout row align-content-center class="horiz-scroll">
              <v-flex px-1 pb-2>
                <div class="pos-relative">
                  <v-list three-line>
                    <v-subheader>Coding</v-subheader>
                    <v-list-item v-for="item in skills.coding" :key="item.id">
                      <v-list-item-action>
                        <img :src="item.icon" width="25px" />
                      </v-list-item-action>
                      <v-list-item-content>
                        <v-list-item-title>{{item.name}}</v-list-item-title>
                        <v-progress-linear :color="item.color" v-model="item.progress"></v-progress-linear>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </div>
              </v-flex>

              <v-flex px-1 pb-2>
                <div class="pos-relative">
                  <v-list three-line>
                    <v-subheader>Framework / Library</v-subheader>
                    <v-list-item v-for="item in skills.web" :key="item.id">
                      <v-list-item-action>
                        <img :src="item.icon" width="25px" />
                      </v-list-item-action>
                      <v-list-item-content>
                        <v-list-item-title>{{item.name}}</v-list-item-title>
                        <v-progress-linear :color="item.color" v-model="item.progress"></v-progress-linear>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </div>
              </v-flex>

              <v-flex px-1 pb-2>
                <div class="pos-relative">
                  <v-list three-line>
                    <v-subheader>UI Framework</v-subheader>
                    <v-list-item v-for="item in skills.ui" :key="item.id">
                      <v-list-item-action>
                        <img :src="item.icon" width="25px" />
                      </v-list-item-action>
                      <v-list-item-content>
                        <v-list-item-title>{{item.name}}</v-list-item-title>
                        <v-progress-linear :color="item.color" v-model="item.progress"></v-progress-linear>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </div>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import JsonSkills from "../../../data/skills.json";

export default {
  name: "yuSkill",

  data: () => ({
    skills: JsonSkills,
  })
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
