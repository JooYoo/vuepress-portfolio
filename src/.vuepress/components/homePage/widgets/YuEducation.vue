<template>
  <v-container>
    <div class="display-2 font-weight-thin training-title">Education</div>

    <v-card class="training-main-card">
      <v-list subheader v-for="(education, index) in educations" :key="index">
        <v-subheader inset>
          <v-list-item-title>
            <span
              >{{ education.degree }}&nbsp;|&nbsp;{{ education.timeRoom }}</span
            >
            <div class="flag-container">
              <img
                v-for="(flagUrl, index) in education.flagUrl"
                :key="index"
                class="flag-end"
                :src="flagUrl"
              />
            </div>
          </v-list-item-title>
        </v-subheader>

        <v-list-item three-line>
          <v-list-item-action>
            <span class="icon-start">{{ education.icon }}</span>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ education.major }}</v-list-item-title>
            <v-list-item-subtitle
              v-for="(studyAt, index) in education.studyAt"
              :key="index"
              >{{ studyAt }}</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
      </v-list>
    </v-card>
  </v-container>
</template>

<script>
import JsonEducations from '../../../data/educations.json';

export default {
  name: 'yuEduction',

  data: () => ({
    notifications: false,
    sound: true,
    widgets: false,
    educations: JsonEducations,
  }),
};
</script>

<style>
.training-title {
  margin: 40px 0;
}

.training-main-card {
  border-radius: 10px !important;
}

.v-list {
  padding: 20px 10px;
}

.v-list-item__title {
  display: flex;
  justify-content: space-between;
}

.v-subheader--inset {
  margin-left: 55px;
}

.icon-start {
  font-size: 30px;
}

.flag-container {
  position: absolute;
  right: 20px;
}

.flag-end {
  height: 30px;
  margin-left: 10px;
}
</style>
