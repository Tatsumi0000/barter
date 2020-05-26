<template>
  <v-app>
  <Header />
    <v-content>
      <iconpoint />
      <sent />
    </v-content>
  </v-app>
</template>

<script>
import iconpoint from '@/components/iconpoint.vue';
import sent from '@/components/sent.vue';
import Header from '@/components/Header.vue';


export default {
  name: 'App',

  components: {
    iconpoint,
    Header,
    sent,
  },

  data: () => ({
    //
  }),
};
</script>
