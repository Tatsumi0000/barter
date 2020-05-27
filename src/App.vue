<template>
  <v-app>
  <Header />
    <v-content>
      <iconpoint />
      <sent />
      <Balance />
    </v-content>
  </v-app>
</template>

<script>
import iconpoint from '@/components/iconpoint.vue';
import sent from '@/components/sent.vue';
import Header from '@/components/Header.vue';
import Balance from '@/components/Balance.vue';

export default {
  name: 'App',

  components: {
    iconpoint,
    Header,
    sent,
    Balance,
  },

  data: () => ({
    //
  }),
};
</script>
