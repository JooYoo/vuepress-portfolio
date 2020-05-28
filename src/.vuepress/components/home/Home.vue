<template>
  <div>
    <yuHeader></yuHeader>

    <v-flex class="container--about">
      <yuAbout></yuAbout>
    </v-flex>

    <v-flex class="container--footer">
      <yuFooter></yuFooter>
    </v-flex>
  </div>
</template>

<script>
import yuHeader from "./widgets/YuHeader";
import yuFooter from "./widgets/YuFooter";
import yuAbout from "./widgets/YuAbout";
export default {
  components: {
    yuHeader,
    yuAbout,
    yuFooter
  },
  data: () => ({
    show: false
  })
};
</script>

<style>
.container--about {
  background-color: #f5f5f5;
  height: fit-content;
}
</style>