<template>
  <div>
      <div class="top-container">
        <div style="position: relative">
          <div class="overlay-color"></div>
          <div class="title">Ngan Lung Restaurant</div>
          <div class="delivery-subtitle"> Delivery: 45min<span class="iconify" data-icon="dashicons:arrow-right-alt2" data-inline="false" style="margin-bottom:-4px;"></span></div>
          <div class="delivery-rating"> <span class="iconify" data-icon="bi:star-fill" data-inline="false" style="margin-bottom: -1px;"></span> <strong>4.1</strong>(311)</div>
          <img src="../assets/images/hero-img.jpg" class="hero-img overlay-class" id="laptop-img" />
          <img src="../assets/images/hero-img2.png" id="mobile-img" class="hero-img" />
        </div>
        <div class="restu-branches">
          <h2 class="hero-heading">
            Ngan Lung Restaurant (Shek Yam)
            <span><img src="../assets/images/info.png" class="info-icon" /></span>
          </h2>
          <div class="rates-div">
            <span class="multi-tag">10% off $80</span>
            <div class="ratings-component">
              <span class="star-svg">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11">
                  <path
                    d="M9 7.02L9.7 11 6 9.12 2.3 11 3 7.02 0 4.2l4.14-.58L6 0l1.86 3.62L12 4.2z"
                  ></path>
                </svg>
              </span>
              <span class="rating"><strong style="color: black">4.1</strong>/5 </span>
              <span class="rating" data-count="(311)"> (311) </span>
            </div>
            <div class="vendor-info-details">
              <div class="summary">
                <ul class="vendor-info-ul">
                  <li class="data-speechify-sentence" style="color: #598eea">
                    <span class="budget-symbol--filled">$ </span>
                    <span class="budget-symbol--filled">$ </span>
                    <span>$</span><span class="data-speechify-dot">.</span>
                  </li>
                  <li class="data-speechify-sentence">
                    Noodles<span class="data-speechify-dot">.</span>
                  </li>
                  <li class="data-speechify-sentence">
                    Cha Chaan Teng<span class="data-speechify-dot">.</span>
                  </li>
                  <li class="data-speechify-sentence">
                    Tea Time<span class="data-speechify-dot">.</span>
                  </li>
                  <li class="data-speechify-sentence">
                    Hong Kong<span class="data-speechify-dot">.</span>
                  </li>
                  <li class="data-speechify-sentence">Carousel Deals</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="deal">
          <div class="deal-wrapper">
            <div class="deal-content">
              <h2 class="deal-name">10% OFF $80</h2>
              <p class="deal-desc">10% off on minimum order value of $80</p>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  @media only screen and (max-width: 900px) {
    .title{
        position: absolute;
        top: 45%;
        left: 50%;
        transform: translate(-48%, -50%);
        color: white;
        font-size: 25px;
        width: 367px;
        text-align: center;
        font-weight: 550;
        font-family: cursive;
    }

    .delivery-subtitle{
      position: absolute;
      top: 65%;
      left: 50%;
      transform: translate(-48%, -50%);
      color: white;
      font-size: 13px;
      text-align: center;
      font-family: inherit;
      border: 1px solid white;
      padding: 3px 10px 3px 15px;
      border-radius: 12px;
      background: rgba(0,0,0,.4);
    }

    .delivery-rating{
      position: absolute;
      top: 80%;
      left: 50%;
      transform: translate(-48%, -50%);
      color: white;
      font-size: 13px;
      text-align: center;
      font-family: inherit;
    }
    .overlay-color{
      background: rgb(0 0 0 / 55%);
      height: 185px;
      width: 109%;
      margin-left: -12px;
      position: absolute;
    }
  }
</style>
