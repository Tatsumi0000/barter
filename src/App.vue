<template>
  <v-app>
  <Header />
    <v-content>
      <namepoint />
    </v-content>
  </v-app>
</template>

<script>
import namepoint from '@/components/namepoint.vue';
import Header from '@/components/Header.vue';

export default {
  name: 'App',

  components: {
    namepoint,
    Header,
  },

  data: () => ({
    //
  }),
};
</script>
