import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import FlagIcon from 'vue-flag-icon-2';

export default ({ Vue, options, router, siteData }) => {
  Vue.use(Vuetify);
  Vue.use(FlagIcon);
  options.vuetify = new Vuetify({});
};
