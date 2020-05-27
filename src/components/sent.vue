<template>
<div>
  <v-card class="boxb">
    <v-select
      class="for"
      :items="user"
      label="送り先"
      full-width
      dense
    ></v-select>
    <div class="Mr">さん</div>
    <v-select
      class="point"
      :items="$store.state.items"
      label=""
      dense
      solo
    ></v-select>
    <div class="font-pt">pt</div>
  </v-card>
</div>
</template>

<script>


export default {
  data() {
    return {
      user: ['ガイア', 'マッシュ', 'オルテガ'],
      product: {},
    };
  },
};
</script>

<style scoped>
.boxb{
  background: #597B60;
}

.point, .for{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    color:#597B60;
    background-color: white;
}

.Mr, .font-pt{
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  color: white;
}


@media screen and (min-width:360px) {
  .boxb{
    position: relative;
    width: 290px;
    height: 180px;
    left: 50%;
    transform : translate(-50%,-50%);
    top: 250px;
  }
  .point{
    position: relative;
    width: 30%;
    transform : translate(-50%,0%);
    top: 60%;
    left: 50%;
    font-size: 24px;
  }

  .for{
    position: absolute;
    width: 75%;
    transform : translate(-50%,-50%);
    top: 30%;
    left: 45%;
    font-size: 15px;
  }

  .Mr{
    position: absolute;
    top: 30%;
    left: 85%;
    font-size: 18px;
  }

  .font-pt{
    position: absolute;
    top: 80%;
    left: 75%;
    font-size: 18px;
  }
}


@media screen and (min-width:768px) and (max-width:1440px) {
  .boxb{
  position: relative;
  width: 700px;
  height: 250px;
  left: 50%;
  transform : translate(-50%,-50%);
  top: 300px;
  }

 .point{
    position: absolute;
    width: 15%;
    transform : translate(-50%,0%);
    top: 50%;
    left: 50%;
    font-size: 24px;
  }

  .for{
    position: absolute;
    width: 60%;
    transform : translate(-50%,-50%);
    top: 30%;
    left: 50%;
    font-size: px;
  }

  .Mr{
    position: absolute;
    top: 30%;
    left: 85%;
    font-size: 30px;
  }

  .font-pt{
    position: absolute;
    top: 60%;
    left: 60%;
    font-size: 25px;
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
  }

  .for{
    position: absolute;
    top: 32pt;
    left: 60pt;
    font-size: 30px;
  }

  .font-point{
    position: absolute;
    top: 78pt;
    left: 190pt;
  }

}
</style>
