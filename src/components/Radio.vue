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
        <p class="c-txtsp">履歴の内容がここに入ります</p>
      </div>
    </div>
    <div class="tab_content" id="programming_content">
      <div class="tab_content_description">
        <p class="c-txtsp">送った内容がここに入ります</p>
      </div>
    </div>
    <div class="tab_content" id="design_content">
      <div class="tab_content_description">
        <p class="c-txtsp">もらった内容がここに入ります</p>
      </div>
    </div>
  </div>

</template>
<script>


</script>
<style spoped>
    @media screen and (min-width:767px){}
    .tabs {
      margin-top: 50px;
      padding-bottom: 40px;
      background-color: #fff;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      width: 700px;
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
</style>
