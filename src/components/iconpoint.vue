<template>
  <v-app>
  <v-flex>
    <v-card
      class="boxb"
      color="#C4C4C4">
      <v-card-text >
        <v-text class="have"
        >所持ポイント</v-text>
        <h class="point">
          100pt
        </h>
        <div class="line"></div>
      </v-card-text>
    </v-card>
  </v-flex>
  </v-app>
</template>

<style>
  @media screen and (min-width:360px) {
  .boxb{
    position: relative;
    width: 290px;
    height: 129px;
    left: 50%;
    transform : translate(-50%,-50%);
    top: 154px;
    background: #C4C4C4;
  }
  .point{
    position: absolute;
    top: 31pt;
    left: 30%;

      font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 45px;
    line-height: 80px;
    /* identical to box height */


    color: #000000;
  }

  .line{
    position: absolute;
    top: 85%;
    left: 20pt;
    width: 253px;
    height: 4px;

    background: #FFFFFF;
  }

  .line2{
    position: relative;
    width: 320px;
    height: 4px;
    left: 50%;
    transform : translate(-50%,-50%);
    top: 100px;

    background: #C4C4C4;
  }

}


@media screen and (min-width:768px) and (max-width:1440px) {
  .boxb{
    position: relative;
  width: 700px;
  height: 250px;
  left: 50%;
  transform : translate(-50%,-50%);
  top: 200px;

  background: #C4C4C4;
  }

  .have{
    position: absolute;
    top: 32pt;
    left: 70pt;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 20px;

    color: #000000;
  }


  .point{
    position: absolute;
    top: 78pt;
    left: 190pt;

      font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 90px;
    line-height: 94px;
    /* identical to box height */


    color: #000000;
  }

  .line{
    position: absolute;
    top: 170pt;
    left: 62pt;
    width: 520px;
    height: 5px;

    background: #FFFFFF;
  }

  .line2{
    position: relative;
    width: 760px;
    height: 4px;
    left: 50%;
    transform : translate(-50%,-50%);
    top: 105px;

    background: #C4C4C4;
  }

}

@media screen and (min-width:1440px) {
  .boxb{
    position: absolute;
    width: 582px;
    height: 250px;
    left: 1200px;
    transform : translate(-50%,-50%);
    top: 30%;

    background: #C4C4C4;
  }

  .have{
    position: absolute;
    top: 32pt;
    left: 60pt;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 35px;

    color: #000000;
  }

  .point{
    position: absolute;
    top: 78pt;
    left: 190pt;

      font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 70px;
    line-height: 94px;
    /* identical to box height */


    color: #000000;
  }

  .line{
    position: absolute;
    top: 170pt;
    left: 62pt;
    width: 489px;
    height: 5px;

    background: #FFFFFF;
  }

  .line2{
    position: relative;
    width: 1600px;
    height: 4px;
    left: 50%;
    transform : translate(-50%,-50%);
    top: 450px;

    background: #C4C4C4;
  }
}
</style>
