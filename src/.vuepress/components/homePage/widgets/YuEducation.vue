<template>
  <v-container>
    <div class="display-2 font-weight-thin training-title">Education</div>

    <v-card class="training-main-card">
      <v-list subheader>
        <v-subheader inset>
          <v-list-item-title>
            <span>Master of Science | 2012 ~ 2014</span>

            <div class="flag-container">
              <img
                class="flag-end"
                src="https://www.flaticon.com/svg/static/icons/svg/197/197374.svg"
              />
              <img
                class="flag-end"
                src="https://www.flaticon.com/svg/static/icons/svg/197/197375.svg"
              />
            </div>
          </v-list-item-title>
        </v-subheader>

        <v-list-item three-line>
          <v-list-item-action>
            <span class="icon-start">⏱</span>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Project Management</v-list-item-title>
            <v-list-item-subtitle>University of Greenwich</v-list-item-subtitle>
            <v-list-item-subtitle
              >Yunnan University of Finance and Economics</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>
      <v-list subheader>
        <v-subheader inset>
          <v-list-item-title>
            <span>Bachelor of Business Studies | 2008 ~ 2012</span>
            <div class="flag-container">
              <img
                class="flag-end"
                src="https://www.flaticon.com/svg/static/icons/svg/197/197507.svg"
              />
              <img
                class="flag-end"
                src="https://www.flaticon.com/svg/static/icons/svg/197/197375.svg"
              />
            </div>
          </v-list-item-title>
        </v-subheader>
        <v-list-item>
          <v-list-item-action>
            <span class="icon-start">💼</span>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Business Studies</v-list-item-title>
            <v-list-item-subtitle
              >Charles Sturt University</v-list-item-subtitle
            >
            <v-list-item-subtitle
              >Yunnan University of Finance and Economics</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>
      <v-list subheader>
        <v-subheader inset>
          <v-list-item-title>
            <span>Bachelor of Management Studies | 2008 ~ 2012</span>
            <img
              class="flag-end"
              src="https://www.flaticon.com/svg/static/icons/svg/197/197375.svg"
            />
          </v-list-item-title>
        </v-subheader>
        <v-list-item>
          <v-list-item-action>
            <span class="icon-start">💸</span>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Financial Management</v-list-item-title>
            <v-list-item-subtitle
              >Yunnan University of Finance and Economics</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "yuEduction",

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

.icon-start {
  font-size: 30px;
}

.flag-end {
  height: 30px;
  margin-left: 10px;
}
</style>