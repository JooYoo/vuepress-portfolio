<template>
  <v-card class="footer">
    <v-card-title>
      <div class="footer__subheading">
        © {{ new Date().getFullYear() }} —
        <strong>ZhuYu</strong>
      </div>
      <v-spacer></v-spacer>

      <v-btn v-for="contact in contacts" :key="contact.id" class="footer__icon--wrapper" dark icon>
        <a :href="contact.link" :target="contact.target">
          <v-icon class="footer__icon">{{ contact.icon }}</v-icon>
        </a>
      </v-btn>
    </v-card-title>
  </v-card>
</template>

<script>
import JsonContacts from "../../../data/contacts.json";

export default {
  name: "yuFooter",

  data: ()=>({
    contacts: JsonContacts
  }),
};
</script>

<style>
.footer {
  width: 100%;
  padding: 10px 0 !important;
  background-image: url("../../../public/images/lowpoly-5k-hight-cell-size.png");
  background-position-y: -1370px;
  /* background-image: linear-gradient(
    to right,
    #3ab5b0 0%,
    #3d99be 31%,
    #56317a 100%
  ); */
}

.footer__subheading {
  margin-left: 40px;
  color: white;
  font-weight: normal;
}

.footer__icon--wrapper {
  margin-right: 40px;
}

.footer__icon {
  color: white !important;
}
</style>