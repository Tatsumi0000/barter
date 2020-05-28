<template>
  <v-app>
  <Header />
    <v-content>
      <Radio />
    </v-content>
  </v-app>
</template>

<script>
import Header from '@/components/Header.vue';
import Radio from '@/components/Radio.vue';


export default {
  name: 'App',

  components: {
    Header,
    Radio,
  },

  data: () => ({
    //
  }),
};
</script>
