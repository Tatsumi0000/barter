<template>
  <v-app>
    <v-img
      class="logo"
      src="/img/icons/logo.svg"
      max-height="100"
      max-width="300"
      position="center"
    ></v-img>
    <v-card width="400px" class="rounded-card" color="#57685A">
      <v-card-text>
        <v-form>
          <v-text-field
            v-model.number="userInfo.ID"
            prepend-icon="mdi-account-circle"
            label="ユーザ名"
            class="user"
          />
          <v-text-field
            v-model="userInfo.PASS"
            v-bind:type="showPassword ? 'text' : 'password'"
            append-icon="mdi-eye-off"
            prepend-icon="mdi-lock"
            label="パスワード"
            class="pass"
          />
          <v-card-actions class="btn">
            <v-btn class="btn2" @click="login">ログイン</v-btn>
          </v-card-actions>
        </v-form>
      </v-card-text>
      {{ sample }}
    </v-card>
    <v-footer class="footer">
      <v-img src="/img/icons/footer.svg" max-height="230"></v-img>
    </v-footer>
  </v-app>
</template>

<script>
// import store from '@/store/index';

export default {
  name: 'App',
  data: () => ({
    showPassword: false,
    url: 'http://localhost:1234/login',
    // ID: null,
    // PASS: '',
    userInfo: {
      ID: 0,
      PASS: '',
      Name: '',
      Jwt: '',
    },
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
          // console.log(response);
          console.log(response.data.JWT);
          this.$store.commit('userInfo.jwt', this.userInfo.Jwt);
          if (response.data.JWT == null) {
            alert('IDもしくはパスワードが違います');
            this.$store.dispath('');
            // console.log(this.$store.getters.getUserInfo);
          } else {
            // store.state.jwt = response.data.JWT;
            // console.log(this.AAA);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  computed: {
    sample() {
      return this.$store.state.userInfo;
    },
  },
};
</script>

<style>
.logo {
  transform: translate(-50%, -50%);
  top: 30%;
  left: 50%;
}
.rounded-card {
  position: absolute;
  height: 250px;
  transform: translate(-50%, -50%);
  top: 40%;
  left: 50%;
  border-radius: 300px;
}
.user {
  position: absolute;
  height: 45px;
  width: 300px;
  transform: translate(-50%, -50%);
  top: 20%;
  left: 50%;
  background: #ffffff;
  border: 1px solid #4f4f4f;
  box-sizing: border-box;
  border-radius: 4px;
}

.pass {
  position: absolute;
  height: 45px;
  width: 300px;
  transform: translate(-50%, -50%);
  top: 40%;
  left: 50%;
  background: #ffffff;
  border: 1px solid #4f4f4f;
  box-sizing: border-box;
  border-radius: 4px;
}

.btn {
  position: absolute;
  height: 45px;
  width: 200px;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 70%;
  color: black;
}

.btn2 {
  position: absolute;
  height: 45px;
  width: 200px;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 60%;
  color: black;
}

.footer {
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
}
</style>
