<template>
  <v-app>
    <Header />
    <v-content>
      <Iconpoint />
      <Sent />
    </v-content>
  </v-app>
</template>

<script>
import Iconpoint from '@/components/Iconpoint.vue';
import Sent from '@/components/Sent.vue';
import Header from '@/components/Header.vue';


export default {
  name: 'App',

  components: {
    Iconpoint,
    Header,
    Sent,
  },

  data: () => ({
    //
  }),
};
</script>
