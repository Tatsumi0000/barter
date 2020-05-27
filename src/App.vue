<template>
  <v-app>
  <Header />
    <v-content>
      <iconpoint />
      <sent @change="onChange" :point="point" />
      <Balance :point="point" />
    </v-content>
  </v-app>
</template>

<script>
import iconpoint from '@/components/iconpoint.vue';
import sent from '@/components/sent.vue';
import Header from '@/components/Header.vue';
import Balance from '@/components/Balance.vue';

export default {
  name: 'App',

  components: {
    iconpoint,
    Header,
    sent,
    Balance,
  },

  methods: {
    onChange(val) {
      this.point = val;
    },
  },

  data: () => ({
    point: 0,
  }),
};
</script>
