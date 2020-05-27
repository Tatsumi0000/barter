<template>
  <v-app>
  <Header />
    <v-content>
      <iconpoint :curentpoint="mypoint" />
      <sent @change="onChange" :point="point" />
      <Balance :point="point" :curentpoint="mypoint" />
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
    mypoint: 100,
  }),
};
</script>
