<template>
  <div>
    <div class="navbar">
      <img src="../assets/images/foodpandalogo.png" class="logo" />
      <a href="#"><img src="../assets/images/cart.png" class="cart-icon" /></a>
      <a href="#" class="login">
        <span class="verticle-line2"></span
        ><img src="../assets/images/usericon.png" class="user-icon" />
        <span class="login-txt">LOGIN</span><span class="verticle-line3"></span
      ></a>
      <a href="#" class="language"
        ><span class="verticle-line"></span> <span class="lang">EN | 中文</span></a
      >
    </div>

    <div class="nav-bar" id="header">
      <div class="nav-content">
        <div style="display:flex;">
          <span class="iconify nav-icon" data-icon="ion:arrow-back-sharp" data-inline="false"></span>
          <div style="margin-left:10px;" id="delivery_time">
            <div class="delivery-top">Delivery</div>
            <div class="delivery-bottom">45min</div>
          </div>
        </div>
        <div class="nav-icon-group">
          <span class="iconify nav-icon" data-icon="ant-design:share-alt-outlined" data-inline="false"></span>
          <span class="iconify nav-icon" data-icon="mdi:information-outline" data-inline="false"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data: {
    scrollPosition: null
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY
      if(this.scrollPosition>25){
        document.getElementById("header").classList.add("nav-back")
        document.getElementById("delivery_time").style.display='block'
      } 
      else{
        document.getElementById("delivery_time").style.display='none'
        document.getElementById("header").classList.remove("nav-back")
      } 

    }
  },
  mounted(){
    window.addEventListener('scroll', this.updateScroll);
    let icon = document.createElement('script')
    icon.setAttribute('src', 'https://code.iconify.design/1/1.0.7/iconify.min.js')
    document.head.appendChild(icon)

  }
}
</script>

<style>
  .nav-bar{
    display: none;
  }

  .navbar {
    overflow: hidden;
    background-color: rgb(255, 255, 255);
    position: fixed;
    top: 0;
    width: 100%;
    color: black;
    margin-bottom: 50px;
    margin-left: -8px;
    box-shadow: 0 0 10px 1px rgb(224, 224, 224);
    z-index: 99;
  }

  .logo {
    float: left;
    cursor: pointer;
  }

  .navbar a {
    float: right;
    display: block;
    color: #000000;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 12px;
    font-weight: bold;
    margin-top: 5px;
  }

  @media only screen and (max-width: 900px) {
    .navbar {
      display:none;
    }
    .nav-bar{
      display: block;
      position: fixed;
      top: 0;
      width: 100%;
      left: 0;
      padding: 15px 30px;
      height: 35px;
      z-index: 100;
      transition: all .5s;
    }

    .nav-back{
      background: white;
      transition: all .5s;
    }

    .nav-content{
      display:flex;
      justify-content: space-between;
      margin-left: -20px;
    }
    .nav-icon{
      background: white;
      border-radius: 50%;
      padding: 5px;
      font-size: 25px;
      margin-left: 10px;
      color: #d72164;
    }

    .nav-icon-group{
      display:flex;
      margin-right:65px;
    }

    .delivery-top{
      font-size: 16px;
      font-weight: 600;
      font-family: sans-serif;
    }
    .delivery-bottom{
      font-size: 13px;
      font-weight: 400;
      font-family: sans-serif;
      color: #d72164;
    }
  }
  
</style>
