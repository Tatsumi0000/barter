<template>
  <v-app>
    <v-content>
      <namepoint />
    </v-content>
  </v-app>
</template>

<script>
import namepoint from '@/components/namepoint.vue';

export default {
  name: 'App',

  components: {
    namepoint,
  },

  data: () => ({
    //
  }),
};
</script>
