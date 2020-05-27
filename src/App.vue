<template>
  <v-app>
  <Header />
  <Radio />
    <v-content>
      <HelloWorld />
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';
import Header from '@/components/Header.vue';
import Radio from '@/components/Radio.vue';

export default {
  name: 'App',

  components: {
    HelloWorld,
    Header,
    Radio,
  },

  data: () => ({
    //
  }),
};
</script>
