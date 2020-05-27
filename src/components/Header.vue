<template>
<header>
<div class="header-logo-menu">
<div id="nav-drawer">
  <input id="nav-input" type="checkbox" class="nav-unshown">
  <label id="nav-open" for="nav-input"><span></span></label>
  <label class="nav-unshown" id="nav-close" for="nav-input"></label>
  <div id="nav-content">アカウント情報
  <ul>
  <li><a href="#01">送る</a></li>
  <li><a href="#02">履歴</a></li>
  <li><a href="#03">メンバーリスト</a></li>
  <li><a href="#04">ログアウト</a></li>
  </ul>
  </div>
  </div>
  <div class="logo-area">Community</div>
</div>
</header>
</template>


<script>
export default {
  name: 'Header',
  data: () => ({
  }),
};
</script>

<style scoped>
@media screen and (min-width:767px) {
   #nav-drawer {
     display:none;
   }
 }
  header {
  padding:10px;
  background: #ccc;
}
#nav-drawer {
  position: relative;
}
/*チェックボックス等は非表示に*/
.nav-unshown {
  display:none;
}
/*アイコンのスペース*/
#nav-open {
  display: inline-block;
  width: 30px;
  height: 22px;
  vertical-align: middle;
}
/*ハンバーガーの形をCSSで表現*/
#nav-open span, #nav-open span:before, #nav-open span:after {
  position: absolute;
  height: 3px;/*線の太さ*/
  width: 25px;/*長さ*/
  border-radius: 3px;
  background: #555;
  display: block;
  content: ‘’;
  cursor: pointer;
}
#nav-open span:before {
  bottom: -8px;
}
#nav-open span:after {
  bottom: -16px;
}
/*閉じる用の薄黒箇所*/
#nav-close {
  display: none;
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0;
  transition: .3s ease-in-out;
}
/*メニューの中身*/
#nav-content {
  overflow: auto;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 90%;
  max-width: 330px;/*最大幅（お好みで調整を）*/
  height: 100%;
  background: #fff;
  transition: .3s ease-in-out;
  -webkit-transform: translateX(-105%);
  transform: translateX(-105%);
}
/*チェックがついたら表示させる*/
#nav-input:checked ~ #nav-close {
  display: block;
  opacity: .5;
}
#nav-input:checked ~ #nav-content {
  -webkit-transform: translateX(0%);
  transform: translateX(0%);
  box-shadow: 6px 0 25px rgba(0,0,0,.15);
}
.header-logo-menu{
 display: flex;
 display: -moz-flex;
 display: -o-flex;
 display: -webkit-flex;
 display: -ms-flex;
 flex-direction: row;
 -moz-flex-direction: row;
 -o-flex-direction: row;
 -webkit-flex-direction: row;
 -ms-flex-direction: row;
}
/*ロゴやサイトタイトルをセンタリング*/
.logo-area{text-align:center;margin:auto;}
</style>
