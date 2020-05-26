<template>
  <v-app>
  <Header />
    <v-content>
      <login />
    </v-content>
  </v-app>
</template>

<script>
import login from '@/components/login.vue';
import Header from '@/components/Header.vue';

export default {
  name: 'App',

  components: {
    login,
    Header,
  },

  data: () => ({
    //
  }),
};
</script>
