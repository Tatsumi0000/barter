<template>
    <v-card
      class="boxb"
      >
      <div >
        <p class="have"
        >残り<br>ポイント
        </p>
        <h1 class="point">
          {{ balance }}
        </h1>
        <div class="font-pt">pt</div>
        <div class="line"></div>
      </div>
    </v-card>
</template>

<script>

export default {
  data() {
    return {
      items: this.point,
    };
  },

  computed: {
    balance() {
      return this.curentpoint - this.point;
    },
  },

  props: ['point', 'curentpoint'],
};


</script>

<style scoped>
  .have, .point, .font-pt{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    color:  #597B60;
  }

  .line{
    position: absolute;
    top: 10%;
    left: 30%;
    width: 2px;
    background: #597B60;
  }

@media screen and (min-width:360px) {
  .boxb{
    position: relative;
    width: 300px;
    height: 50px;
    left: 50%;
    transform : translate(-50%,-50%);
    top: 145px;
    outline: auto;
    outline-color: #597B60;
    padding: 0%;
  }

  .have{
    position: relative;
    left: 5%;
    width: 25%;
  }

  .point{
    position: absolute;
    top: 40%;
    left: 55%;
    font-size: 25px;
  }

  .line{
    height: 80%;
  }

  .font-pt{
    position: absolute;
    top: 55%;
    left: 70%;
    font-size: 18px;
  }

}


@media screen and (min-width:768px) and (max-width:1440px) {
  .boxb{
    position: relative;
    width: 700px;
    height: 200px;
    left: 50%;
    transform : translate(-50%,-50%);
    top: 300px;
  }

  .have{
    position: absolute;
    top: 32pt;
    left: 70pt;
    font-size: 15px;
    line-height: 20px;
  }


  .point{
    position: absolute;
    top: 60pt;
    left: 190pt;
    font-size: 90px;
    line-height: 94px;
  }

  .line{
    height: 5px;
  }

  .font-pt{
    position: absolute;
    top: 60%;
    left: 60%;
    font-size: 30px;
  }
}

@media screen and (min-width:1440px) {
  .boxb{
    position: absolute;
    width: 582px;
    height: 50%;
    left: 5%;
    transform : translate(0%,-50%);
    top: 30%;
  }

  .have{
    position: absolute;
    top: 32pt;
    left: 60pt;
    font-size: 30px;
    line-height: 35px;
  }

  .point{
    position: absolute;
    top: 78pt;
    left: 190pt;
    font-size: 70px;
    line-height: 94px;
  }

  .line{
    height: 5px;
  }

  .font-pt{
    position: absolute;
    top: 60%;
    left: 60%;
    font-size: 18px;
  }

}
</style>
