<template>
<div>
  <v-btn class="boxb"
  height="100px"
  color="#FF847A"></v-btn>
  <h1 class="btn">送る</h1>
</div>
</template>

<style scoped>
.boxb{
  background: #597B60;
}

.btn{
    position: relative;
    left: 53%;
    transform : translate(-50%,-50%);
    top: 100px;
    width: 100px;
    color: white;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 42px;
}

@media screen and (min-width:360px) {
  .boxb{
    position: relative;
    width: 290px;
    left: 50%;
    transform : translate(-50%,-50%);
    top: 190px;
    background-color: #FF847A;
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
}
</style>
