<template>
  <div>
    <img
      :class="setLogoSize(name)"
      :src="logo"
      :style="hoverLogoStyle(isHover)"
      @mouseenter="toggleHover"
      @mouseleave="toggleHover"
    />
  </div>
</template>

<script>
import JsonTechs from '../../../data/techs.json';
import { lift } from '../../service/yuSkillService';

export default {
  name: 'yuSkillLogo',

  props: {
    name: String,
    logo: String,
    isFramework: Boolean,
  },

  data: () => ({
    techs: JsonTechs,
    isHover: false,
  }),

  computed: {
    count() {
      return lift.isUp;
    },
  },

  methods: {
    toggleHover: function () {
      // pass hoverTech to observable

      if (this.isFramework) {
        // hover framework icon
        lift.isFrameworkUp = !lift.isFrameworkUp;
        lift.framework = this.name;
      } else {
        // hover language icon
        lift.isUp = !lift.isUp;
        lift.tech = this.name;
      }

      return (this.isHover = !this.isHover);
    },

    hoverLogoStyle: function (isHover) {
      if (isHover) {
        return {
          transform: 'scale(1.2)',
        };
      }
    },

    setLogoSize: (name) => {
      return name == 'Vuepress' ? 'skill-logo--big' : 'skill-logo';
    },
  },
};
</script>

<style>
.skill-logo {
  width: 50px;
  margin: 20px;
}

.skill-logo--big {
  width: 65px;
  margin: 20px;
}
</style>
