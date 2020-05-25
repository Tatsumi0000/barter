<template>
<v-app>
 <v-img class="logo"
  src="/img/icons/logo.svg"
  max-height="100"
  max-width="300"
  position="center"></v-img>
  <v-card width="400px" class="rounded-card" color="#57685A">
    <v-card-text>
      <v-form>
        <v-text-field
        prepend-icon="mdi-account-circle"
        label="ユーザ名"
        class="user" />
        <v-text-field
        v-bind:type="showPassword ? 'text' : 'password'"
        append-icon="mdi-eye-off"
        prepend-icon="mdi-lock"
        label="パスワード"
        class="pass" />
        <v-card-actions class="btn">
            <v-btn class="btn2">ログイン</v-btn>
        </v-card-actions>
      </v-form>
    </v-card-text>
  </v-card>
  <v-footer class="footer">
    <v-img src="/img/icons/footer.svg"
      max-height="230"
      ></v-img>
  </v-footer>
</v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    showPassword: false,
  }),
};
</script>

<style>
    .logo{
      transform : translate(-50%,-50%);
      top: 30%;
      left: 50%;
    }
    .rounded-card{
        position: absolute;
        height: 250px;
        transform : translate(-50%,-50%);
        top: 40%;
        left: 50%;
        border-radius: 300px;
    }
    .user{
        position: absolute;
        height: 45px;
        width: 300px;
        transform : translate(-50%,-50%);
        top: 20%;
        left: 50%;
        background: #FFFFFF;
        border: 1px solid #4F4F4F;
        box-sizing: border-box;
        border-radius: 4px;
    }

    .pass{
        position: absolute;
        height: 45px;
        width: 300px;
        transform : translate(-50%,-50%);
        top: 40%;
        left: 50%;
        background: #FFFFFF;
        border: 1px solid #4F4F4F;
        box-sizing: border-box;
        border-radius: 4px;
    }

    .btn{
        position: absolute;
        height: 45px;
        width: 200px;
        transform: translate(-50%,-50%);
        left: 50%;
        top: 70%;
        color: black;
    }

    .btn2{
        position: absolute;
        height: 45px;
        width: 200px;
        transform: translate(-50%,-50%);
        left: 50%;
        top: 60%;
        color: black;
    }

    .footer{
        position: absolute;
        transform: translate(-50%,-50%);
        top: 50%;
        left: 50%;
    }
</style>
