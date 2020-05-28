<template>
  <v-app class="app">
  <Header />
    <v-content>
      <iconpoint :curentpoint="mypoint" />
      <sentpoint @change="onChange" :point="point" />
      <Balance :point="point" :curentpoint="mypoint" />
      <sentbtn />
    </v-content>
  </v-app>
</template>

<script>
import iconpoint from '@/components/iconpoint.vue';
import sentpoint from '@/components/sentpoint.vue';
import Header from '@/components/Header.vue';
import Balance from '@/components/Balance.vue';
import sentbtn from '@/components/sentbtn.vue';

export default {
  name: 'App',

  components: {
    iconpoint,
    Header,
    sentpoint,
    Balance,
    sentbtn,
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

<style scoped>
  .app{
    background-color: #FFFAF2;
  }
</style>
