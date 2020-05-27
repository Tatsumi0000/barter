<template>
  <div>
    <v-card class="form-size">
      <v-form>
        <div class="form-gravity">
          <tr>
            <th>ID</th>
            <td>
              <v-text-field label="ID"></v-text-field>
            </td>
          </tr>
          <tr>
            <th>パスワード</th>
            <td>
              <v-text-field label="パスワード"></v-text-field>
            </td>
          </tr>
        </div>
        <v-btn></v-btn>
      </v-form>
    </v-card>
  </div>
</template>
<script>
export default {
  name: 'App',
  data: () => ({
    showPassword: false,
    login: 'ログイン',
  }),
};
</script>

<style scoped>
/* 画面サイズが320pxからはここを読み込む */
.form-size {
  max-width: 700px;
  max-height: 300px;
}

.form-details {
  float: left;
}

.form-gravity {
  position: relative;
}
@media screen and (min-width: 320px) {
}
/* 画面サイズが768pxからはここを読み込む */
@media screen and (min-width: 768px) {
}
/* 画面サイズが768pxから1024pxまではここを読み込む */
@media screen and (min-width: 768px) and (max-width: 1024px) {
}
</style>
