<template>
  <v-container>
    <div class="display-2 font-weight-thin training-title">Training</div>

    <v-card class="training-main-card">
      <v-list subheader>
        <v-subheader inset>
          <v-list-item-title>
            <span>Fachinformatiker - Anwendungsentwicklung | 2016 ~ 2019</span>

            <img
              class="flag"
              src="https://www.flaticon.com/svg/static/icons/svg/197/197571.svg"
            />
          </v-list-item-title>
        </v-subheader>

        <v-list-item three-line>
          <v-list-item-action>
            <v-icon color="indigo">fa-desktop</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Software Development</v-list-item-title>
            <v-list-item-subtitle>Robert-Bosch-Schule Ulm</v-list-item-subtitle>
            <v-list-item-subtitle>artiso solutions GmbH</v-list-item-subtitle>
            <v-list-item-subtitle>IHK Ulm</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>
      <v-list subheader>
        <v-subheader inset>
          <v-list-item-title>
            <span>
              Niveau B2 das kommunikationstraining für die Sprache Deutsch |
              2019
            </span>
            <img
              class="flag"
              src="https://www.flaticon.com/svg/static/icons/svg/197/197571.svg"
            />
          </v-list-item-title>
        </v-subheader>
        <v-list-item>
          <v-list-item-action>
            <v-icon color="indigo">fa-battery-half</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>German Level B2</v-list-item-title>
            <v-list-item-subtitle
              >KERN Global Language Services</v-list-item-subtitle
            >
          </v-list-item-content>
          <v-list-item-action> </v-list-item-action>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>
      <v-list subheader>
        <v-subheader inset>
          <v-list-item-title>
            <span>Niveau B1 der Deutsch-Test für Zuwanderer | 2015 ~ 2016</span>
            <img
              class="flag"
              src="https://www.flaticon.com/svg/static/icons/svg/197/197571.svg"
            />
          </v-list-item-title>
        </v-subheader>
        <v-list-item>
          <v-list-item-action>
            <v-icon color="indigo">fa-battery-quarter</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>German Level B1</v-list-item-title>
            <v-list-item-subtitle
              >telc GmbH - The European Language
              Certificates</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'yuTraining',

  data: () => ({
    notifications: false,
    sound: true,
    widgets: false,
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
  margin-left: 61px;
}

.flag {
  height: 30px;
}
</style>
