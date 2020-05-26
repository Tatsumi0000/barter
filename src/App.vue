<template>
  <v-app>
  <Header />
    <v-content>
      <namepoint />
    </v-content>
  </v-app>
</template>

<script>
import Header from '@/components/Header.vue';
import namepoint from '@/components/namepoint.vue';

export default {
  name: 'App',

  components: {
    Header,
    namepoint,
  },

  data: () => ({
    //
  }),
};
</script>
