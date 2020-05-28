<template>
  <div class="tabs">
    <input id="all" type="radio" name="tab_item" checked>
    <label class="tab_item" for="all">履歴</label>
    <input id="programming" type="radio" name="tab_item">
    <label class="tab_item" for="programming">送った</label>
    <input id="design" type="radio" name="tab_item">
    <label class="tab_item" for="design">もらった</label>
    <div class="tab_content" id="all_content">
      <div class="tab_content_description">
          <v-list
            class="a"
            :items="user"
            full-width
            dense
          ><img class="get" src="/img/icons/get.svg" /><p class="c-txtsp">{{ user }}</p>
          </v-list>
          <v-list
            class="a"
            :items="user"
            full-width
            dense
          ><img class="get2" src="/img/icons/send.svg" /><p class="c-txtsp">{{ user }}</p>
          </v-list>
          <v-list
            class="a"
            :items="user"
            full-width
            dense
          ><img class="get3" src="/img/icons/get.svg" /><p class="c-txtsp">{{ user }}</p>
          </v-list>
          <v-list
            class="a"
            :items="user"
            full-width
            dense
          ><img class="get4" src="/img/icons/send.svg" /><p class="c-txtsp">{{ user }}</p>
          </v-list>
      </div>
    </div>
    <div class="tab_content" id="programming_content">
      <div class="tab_content_description">
        <p class="c-txtsp"><v-list
            class="a"
            :items="user"
            full-width
            dense
          ><img class="get" src="/img/icons/get.svg" />{{ user }}
          </v-list></p>
      </div>
    </div>
    <div class="tab_content" id="design_content">
      <div class="tab_content_description">
        <p class="c-txtsp"><v-list
            class="a"
            :items="user"
            full-width
            dense
          ><img class="get" src="/img/icons/get.svg" />{{ user }}
          </v-list></p>
      </div>
    </div>
  </div>

</template>
<script>

export default {
  data() {
    return {
      user: ['送信', '50pt', '山川あや', '2020/5/28'],
      product: {},
    };
  },
};

</script>
<style scoped>
    @media screen and (min-width:767px){}
    .tabs {
      position: relative;
      top: 20px;
      margin-top: 50px;
      padding-bottom: 40px;
      background-color: #fff;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      width: 90%;
      margin: 0 auto;}
    /*タブのスタイル*/
    .tab_item {
      width: calc(100%/3);
      height: 50px;
      border-bottom: 3px solid #597B60;
      background-color: #597B60;
      line-height: 50px;
      font-size: 16px;
      text-align: center;
      color: #fff;
      display: block;
      float: left;
      text-align: center;
      font-weight: bold;
      transition: all 0.2s ease;
    }
    .tab_item:hover {
      opacity: 0.75;
    }
    /*ラジオボタンを全て消す*/
    input[name="tab_item"] {
      display: none;
    }
    /*タブ切り替えの中身のスタイル*/
    .tab_content {
      display: none;
      padding: 40px 40px 0;
      clear: both;
      overflow: hidden;
    }
    /*選択されているタブのコンテンツのみを表示*/
    #all:checked ~ #all_content,
    #programming:checked ~ #programming_content,
    #design:checked ~ #design_content {
      display: block;
    }
    /*選択されているタブのスタイルを変える*/
    .tabs input:checked + .tab_item {
      background-color: #fff;
      color: #57685A;
    }
    .c-txtsp {
      list-style-type: none;
      border-bottom: 1px dotted #597b60;
      position: relative;
      left: px;
      }
    .get {
      position:absolute;
      width: 35px;
      height: 20px;
      left: 2px;
      top: 100px;
    }
    .get2 {
      position:absolute;
      width: 35px;
      height: 20px;
      left: 2px;
      top: 155px;
    }
    .get3 {
      position:absolute;
      width: 35px;
      height: 20px;
      left: 2px;
      top: 210px;
    }
    .get4 {
      position:absolute;
      width: 35px;
      height: 20px;
      left: 2px;
      top: 265px;
    }
</style>
