<template>
  <v-container>
    <v-layout justify-center>
      <v-flex xs12 sm12>
        <v-container fluid grid-list-xl>
          <div class="display-2 font-weight-thin training-title">Training</div>
          <v-card class="training-main-card">
            <v-list subheader three-line>
              <v-subheader inset>
                <v-list-item-title
                  >Fachinformatiker - Anwendungsentwicklung | 2016 ~
                  2019</v-list-item-title
                >
              </v-subheader>

              <v-list-item>
                <v-list-item-action>
                  <v-icon color="indigo">fa-desktop</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>Software Development</v-list-item-title>
                  <v-list-item-subtitle
                    >Robert-Bosch-Schule Ulm</v-list-item-subtitle
                  >
                  <v-list-item-subtitle
                    >artiso solutions GmbH</v-list-item-subtitle
                  >
                  <v-list-item-subtitle>IHK Ulm</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <flag class="flag" iso="de" />
                </v-list-item-action>
              </v-list-item>
            </v-list>

            <v-divider></v-divider>
            <v-list subheader three-line>
              <v-subheader inset
                >Niveau B2 das kommunikationstraining für die Sprache Deutsch |
                2019</v-subheader
              >

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
                <v-list-item-action>
                  <flag class="flag" iso="de" />
                </v-list-item-action>
              </v-list-item>
            </v-list>

            <v-divider></v-divider>
            <v-list subheader three-line>
              <v-subheader inset
                >Niveau B1 der Deutsch-Test für Zuwanderer | 2015 ~
                2016</v-subheader
              >
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
                <v-list-item-action>
                  <flag class="flag" iso="de" />
                </v-list-item-action>
              </v-list-item>
            </v-list>
          </v-card>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "yuTraining",

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

.flag {
  margin-left: -10px;
  margin-bottom: 130px;
  font-size: 25px;
}
.flag-second {
  margin-right: 0px;
  margin-bottom: 130px;
  font-size: 25px;
}
.flag-second-one {
  margin-right: -25px;
  margin-bottom: 130px;
  font-size: 25px;
}
.flag-second-title {
  margin-left: -55px;
}
</style>
