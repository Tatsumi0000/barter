<template>
    <v-card
      class="boxb">
      <v-card-text >
        <v-text class="have"
        >所持ポイント</v-text>
        <h class="point">
          {{ point }}
        </h>
        <div class="font-pt">pt</div>
        <div class="line"></div>
      </v-card-text>
    </v-card>
</template>

<script>

export default {
  data() {
    return { point: (100) };
  },
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
    top: 85%;
    left: 5%;
    width: 90%;
    background: #597B60;
  }

@media screen and (min-width:360px) {
  .boxb{
    position: relative;
    width: 290px;
    height: 129px;
    left: 50%;
    transform : translate(-50%,-50%);
    top: 90px;
  }
  .point{
    position: absolute;
    top: 31pt;
    left: 30%;
    font-size: 45px;
    line-height: 80px;
  }

  .line{
    height: 4px;
  }

  .font-pt{
    position: absolute;
    top: 60%;
    left: 60%;
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
    top: 200px;
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
