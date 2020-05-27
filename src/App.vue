<template>
  <v-app>
  <Header />
  <Radio />
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
import Radio from '@/components/Radio.vue';


export default {
  name: 'App',

  components: {
    iconpoint,
    Header,
    Radio,
    sent,
  },

  data: () => ({
    //
  }),
};
</script>
