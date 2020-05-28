<template>
  <div></div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    showPassword: false,
    url: 'http://localhost:1234/login',
    ID: null,
    PASS: '',
    // userData: { ID: 0, PASS: '' },
  }),
  methods: {
    login() {
      const params = new URLSearchParams();
      params.append('ID', this.ID);
      params.append('PASSWORD', this.PASS);
      // console.log(params.header);
      this.axios
        // .post(this.url, this.userData, { 'Content-Type': 'text/plain; charset=utf-8' })
        .post('http://localhost:1234/login', params)
        // .post('http://localhost:1234/login')
        .then((response) => {
          console.log(response);
          // console.log($store.state.jwt);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped></style>
