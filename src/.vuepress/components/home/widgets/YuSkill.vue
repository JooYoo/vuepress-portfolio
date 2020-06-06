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
                    <v-list-item v-for="item in coding" :key="item.id">
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
                    <v-list-item v-for="item in web" :key="item.id">
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
                    <v-list-item v-for="item in ui" :key="item.id">
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
export default {
  name: "yuSkill",

  data: () => ({
    coding: [
      {
        name: "HTML",
        progress: 60,
        icon: "https://cdn.svgporn.com/logos/html-5.svg",
        color: "indigo darken-1"
      },
      {
        name: "CSS",
        progress: 60,
        icon: "https://cdn.svgporn.com/logos/css-3.svg",
        color: "indigo darken-1"
      },
      {
        name: "Sass",
        progress: 50,
        icon: "https://cdn.svgporn.com/logos/sass.svg",
        color: "indigo darken-1"
      },
      {
        name: "Javascript",
        progress: 10,
        icon: "https://cdn.svgporn.com/logos/javascript.svg",
        color: "indigo darken-1"
      },
      {
        name: "Typescript",
        progress: 20,
        icon: "https://cdn.svgporn.com/logos/typescript-icon.svg",
        color: "indigo darken-1"
      },
      {
        name: "C#",
        progress: 60,
        icon:
          "https://www.flamingoajans.com/assets/vendors/devicon/icons/csharp/csharp-original.svg",
        color: "indigo darken-1"
      }
    ],
    web: [
      {
        name: "Angular",
        progress: 60,
        icon: "https://cdn.svgporn.com/logos/angular-icon.svg",
        color: "red darken-1"
      },
      {
        name: "Vuejs",
        progress: 20,
        icon: "https://cdn.svgporn.com/logos/vue.svg",
        color: "red darken-1"
      },
      {
        name: "React",
        progress: 10,
        icon: "https://cdn.svgporn.com/logos/react.svg",
        color: "red darken-1"
      },
      {
        name: "ASP.NET Core",
        progress: 40,
        icon: "https://cdn.svgporn.com/logos/dotnet.svg",
        color: "red darken-1"
      }
    ],
    ui: [
      {
        name: "ionic",
        progress: 60,
        icon: "https://cdn.svgporn.com/logos/ionic.svg",
        color: "teal darken-1"
      },
      {
        name: "Vuetify",
        progress: 30,
        icon: "https://cdn.svgporn.com/logos/vuetifyjs.svg",
        color: "teal darken-1"
      },
      {
        name: "Bootstrap",
        progress: 80,
        icon: "https://cdn.svgporn.com/logos/bootstrap.svg",
        color: "teal darken-1"
      },
      {
        name: "UIkit",
        progress: 60,
        icon: "https://cdn.svgporn.com/logos/uikit.svg",
        color: "teal darken-1"
      }
    ]
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
