<template>
  <v-app>
  <v-flex>
    <v-card
      class="boxa"
      color="#C4C4C4">
      <v-list-item two-line>
        <v-list-item-content>
          <p class="id">id 000000</p>
          <div class="name">name</div>
        </v-list-item-content>
      </v-list-item>
    </v-card>

    <v-card
      class="boxb"
      color="#C4C4C4">
      <v-card-text >
        <div>所持ポイント</div>
        <h class="point">
          100pt
        </h>
      </v-card-text>
    </v-card>
  </v-flex>
  </v-app>
</template>

<style>
  @media screen and (min-width:360px) {

  .boxa{
    position: relative;
    width: 290px;
    height: 70px;
    top: 110px;
    left: 50%;
    transform : translate(-50%,-50%);
    text-align: center;

    background: #C4C4C4;

  }

  .name{
    position: absolute;
    top: 40%;
    left: 65%;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 16px;
  }

  .id{
    position: absolute;
    top: 50%;
    left: 40%;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 11px;
    line-height: 13px;
    color: #000000;
  }

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

  .boxa{
    position: relative;
    width: 700px;
    height: 250px;
    left: 50%;
    transform : translate(-50%,-50%);
    top: 165px;
    text-align: center;
  }

  .name{
    position: absolute;
    top: 96pt;
    left: 280pt;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 60px;
    line-height: 59px;
  }

  .id{
    position: absolute;
    top: 43pt;
    left: 280pt;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 35px;

  color: #000000;
  }

  .boxb{
    position: relative;
  width: 700px;
  height: 250px;
  left: 50%;
  transform : translate(-50%,-50%);
  top: 200px;

  background: #C4C4C4;
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

  .boxa{
    position: absolute;
    width: 700px;
    height: 250px;
    left: 400px;
    transform : translate(-50%,-50%);
    top: 266px;


    background: #C4C4C4;

  }

  .name{
    position: absolute;
    top: 96pt;
    left: 280pt;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 78px;
    line-height: 59px;
  }

  .id{
    position: absolute;
    top: 43pt;
    left: 280pt;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 35px;

  color: #000000;
  }

  .boxb{
    position: absolute;
    width: 582px;
    height: 250px;
    left: 1200px;
    transform : translate(-50%,-50%);
    top: 20px;

    background: #C4C4C4;
  }

  .have{
    position: absolute;
    top: 32pt;
    left: 38pt;

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
