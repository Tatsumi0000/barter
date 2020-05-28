<template>
  <div>
    <div>
      <img class="toplogo" src="/img/icons/BARTER_Q.svg" />
      <img class="topfooter" src="/img/icons/footer.svg" />
    </div>
    <v-spacer></v-spacer>
    <div>
      <img class="ex1" src="/img/icons/explanation1.png" />
      <div>
        <img class="web" src="/img/icons/Web.png" /><img class="web" src="/img/icons/web2.png" />
      </div>
    </div>
    <div>
      <img class="ex2" src="/img/icons/explanation2.png" />
      <img class="hana" src="/img/icons/hana-02.png" />
      <img class="koukan" src="/img/icons/koukan.png" />
    </div>
    <div>
      <img class="ex3" src="/img/icons/explanation3.png" />
      <img class="sapo" src="/img/icons/support.png" />
    </div>
    <v-btn class="btn" height="80px" to="/login"><img src="/img/icons/use.png" alt=""/></v-btn>

    <v-footer class="footer">
      <v-img src="/img/icons/footer.svg" max-height="50"></v-img>
    </v-footer>
  </div>
</template>

<style scoped>
p.marg {
  margin-top: 50px;
}

.toplogo,
.sapo {
  position: relative;
  width: 80%;
  left: 50%;
  transform: translate(-50%, 0%);
}
.web {
  position: relative;
  width: 50%;
  margin-left: 30%;
  /* margin-right: 10%; */
  /* text-align: center; */
  /* transform: translate(-50%, 0%); */
}

.web,
.sapo {
  margin: auto;
}

.ex1,
.ex2,
.ex3 {
  position: relative;
  width: 65%;
  left: 50%;
  transform: translate(-50%, 0%);
  margin: auto;
}

.ex1,
.web {
  top: 30px;
}

.hana,
.koukan {
  position: relative;
  height: 150px;
  transform: translate(-50%, 0%);
}

.hana {
  left: -40%;
  top: 160px;
}

.koukan {
  left: 75%;
}

.sapo {
  height: 60%;
  width: 60%;
}

.btn {
  position: relative;
  width: 50%;
  top: 30px;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: auto;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
}

.text {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 21px;
  color: white;
}
</style>
