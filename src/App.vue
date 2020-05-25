<template>
  <v-app>
    <v-content>
      <login />
    </v-content>
  </v-app>
</template>

<script>
import login from '@/components/login.vue';

export default {
  name: 'App',

  components: {
    login,
  },

  data: () => ({
    //
  }),
};
</script>
