import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import VueParticles from 'vue-particles';

export default ({ Vue, options, router, siteData }) => {
  Vue.use(Vuetify);
  options.vuetify = new Vuetify({});

  Vue.use(VueParticles);
};
