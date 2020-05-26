<template>
  <v-app>
  <Header />
    <v-content>
      <iconpoint />
    </v-content>
  </v-app>
</template>

<script>
import iconpoint from '@/components/iconpoint.vue';
import Header from '@/components/Header.vue';

export default {
  name: 'App',

  components: {
    iconpoint,
    Header,
  },

  data: () => ({
    //
  }),
};
</script>
