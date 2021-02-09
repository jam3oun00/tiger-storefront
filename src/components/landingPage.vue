//  eslint-disable
<template>
  <div>
    <div v-if="page === 'products'">
      <!-- BOTTOM FOOTER FIXED YOUR CART FOR MOBILE -->
      <div class="your-cart" v-on:click="navigatePage('cart')">
        <div>
          <span class="cart_-icon"><img src="../assets/images/cart_-icon.png" /></span>
          <span class="amount-y-cart">{{ cart.length }}</span>
        </div>
        <span class="view-y-cart">VIEW CART</span>
        <span class="price-y-cart">HK${{ sumIs }}</span>
      </div>

      <!-- RIGHT FIXED YOUR CART FOR DESKTOP -->
      <cartdiv />
      <!--  end  -->

      <div class="main-div">
        <!-- TOP CONTAINER      -->
        <topcontainer />
        <!--  end  -->

        <!--      MENU LIST       -->
        <nav class="dish-menu-category-list">
          <div class="dish-control-holder">
            <div class="nav-holder" id="hello">
              <scrollactive
                v-on:itemchanged="onItemChanged"
                active-class="active"
                :offset="280"
                :duration="800"
                bezier-easing-value=".5,0,.35,1"
              >
                <ul>
                  <li v-for="items in menu" :key="items">
                    <span
                      ><img
                        src="../assets/images/left-arrow.png"
                        class="left-arrow" /></span
                    ><a class="scrollactive-item" :href="items.link" :title="items.title"
                      ><span
                        >{{ items.name }} <span style="color: white">. . </span>
                      </span></a
                    >
                  </li>
                </ul>
              </scrollactive>
            </div>
          </div>
        </nav>
        <!--  END  -->

        <div class="content">
          <div class="gap"><p style="color: white">.</p></div>
          <div class="gap"><p style="color: white">.</p></div>

          <!-- MENUE ITEMS -->
          <div v-for="product in products" :key="product">
            <div class="menue__list" :id="product.id">
              <h2>{{ product.categoryName }}</h2>
              <div
                class="seasonal-product"
                v-for="item in product.items"
                :key="item"
                v-on:click="addItemToCart(item)"
              >
                <h4 class="product-heading">
                  {{ item.heading }}
                  <span class="product-img"
                    ><img
                      :src="item.img"
                      style="width: 100px; height: 100px"
                      width="100px"
                      height="100px"
                  /></span>
                </h4>
                <span
                  ><span class="product-price">HK${{ item.price }}</span></span
                >
                <span class="line-through"
                  >HK${{ item.offprice }}
                  <span class="product-add"
                    ><img
                      src="../assets/images/ic-plus.png"
                      style="width: 24px"
                      width="24px" /></span
                ></span>
              </div>
            </div>
            <div class="gap"><p style="color: white">.</p></div>
          </div>
          <br /><br /><br /><br />
        </div>
      </div>
      <footerr />
    </div>
    <div class="your-Cart" v-if="page === 'cart'">
      <div class="cart-summary">
        <div>
          <img
            v-on:click="navigatePage('products')"
            class="cross-icon"
            src="../assets/images/cross-icon.png"
          />
        </div>
        <br />
        <p>
          <span class="delivery">Delivery </span
          ><span v-if="delivery === 'true'"
            ><img
              class="toggle"
              src="../assets/images/toggle.png"
              v-on:click="navigateTo('false')" /></span
          ><span v-else
            ><img
              class="toggle"
              src="../assets/images/pickup-true.png"
              v-on:click="navigateTo('true')" /></span
          ><span class="pickup"> pickup</span>
        </p>
        <div>
          <img src="../assets/images/time-move-icon.png" /><span class="time"
            >20 min</span
          >
        </div>
        <h3 class="cart-summary-header-title">
          Your order from Ngan Lung Restaurant (Tsim Sha Tsui)
        </h3>
        <div
          v-for="(product, index) in cart"
          :key="index"
          class="cart-summary-amount-list"
        >
          {{ product.index }}
          <h5 class="cart-item-heading">{{ product.heading }}</h5>
          <h5 class="cart-item-price">HK${{ product.price }}</h5>
          <h6 class="product-variation">Hot</h6>
          <span>
            <div v-if="product.quantity >= 2">
              <span class="delete-icon" v-on:click="lessItemFromCart(product)"
                ><img src="../assets/images/minus-icon.png"
              /></span>
            </div>
            <div v-else>
              <span
                class="delete-icon"
                v-on:click="
                  removeItemFromCart(index);
                  reducePrice(product);
                "
                ><img src="../assets/images/delete.png"
              /></span>
            </div>
            <span class="cart-item-quantity">{{ product.quantity }}</span>
            <span class="pluss-icon" v-on:click="plusOne(product)"
              ><img src="../assets/images/plus-.png" /></span
          ></span>
        </div>
      </div>
      <div class="cart-summary-amount-list">
        <span
          ><span class="minimum-subtotal">Subtotal:</span
          ><span class="cartlib-subtotal">HK${{ sumIs }}</span></span
        ><br /><br />
        <span v-if="delivery === 'true'"
          ><span class="minimum-subtotal">Delivery fee:</span
          ><span class="cartlib-subtotal">HK$5</span><br /><br
        /></span>
        <hr class="divider" />
        <br />
        <span id="Total"
          ><span class="minimum-subtotal" id="Total">Total:</span>
          <span v-if="delivery === 'true'" class="cartlib-subtotal" id="Total"
            >HK${{ grandtotal }}</span
          >
          <span v-else class="cartlib-subtotal" id="Total">HK${{ sumIs }}</span> </span
        ><br /><br /><br /><br />
      </div>
      <div class="footer-goToCheckout">
        <button class="goToCheckout">PLACE ORDER</button>
      </div>
      <div class="cutlery-main">
        <div class="cutlery-sub-div">
          <div class="spoons-img-div">
            <img class="spoons-img" src="../assets/images/spoons-img.png" />
          </div>
          <div class="need-cutlery">
            <p class="need-cutlery-heading">Do you need cutlery?</p>
            <span class="need-cutlery-sub-heading"
              >No. Thanks your for helping us reduce plastic waste.</span
            >
          </div>
          <div class="toggle-btn-cutlery">
            <label class="switch">
              <input class="inputt" type="checkbox" />
              <span class="slider round"></span>
            </label>
          </div>
        </div>
        <br />
        <div class="contact-info">
          <div class="info-div">
            <span
              ><span class="contact-txt">Contact info</span
              ><span class="contact-email">sofastfps@gmail.com</span></span
            >
          </div>
          <div class="info-div">
            <span
              ><span class="contact-txt">Delivery details</span
              ><span class="contact-email"
                ><img
                  class="right-arrow"
                  src="../assets/images/right-arrow-red.png" /></span
            ></span>
            <br /><br /><span class="detail-place">Hong Kong</span> <br /><span
              class="detail-place"
              >Note to rider: none</span
            >
          </div>
          <div class="info-div">
            <span
              ><span class="contact-txt">Delivery time</span
              ><span class="contact-email"
                >ASAP (35 min)<img
                  class="right-arrow-red"
                  src="../assets/images/right-arrow-red.png" /></span
            ></span>
          </div>
        </div>
        <br /><b></b>
        <div class="payment-div">
          <span class="contact-txt">Payment methods</span>
          <br /><br />
          <span><img class="plus-icon-plus" src="../assets/images/plus-.png" /></span
          ><span class="add-payment-txt">Add a payment method</span>
        </div>
        <br />
        <div class="footer-details">
          <span>By completing this order, I agree to all Terms & Conditions.</span
          ><br /><br />
          <span>Please note: sold by japanese Tamen & Rice House (Kwai Chung)</span
          ><br /><br />
          <span
            ><b
              >I agree and i demand that you execute the ordered service before the end of
              the revocation period . I am aware that after complete fulfillment of the
              service I lost my right of rescission.</b
            ></span
          >
        </div>
      </div>
    </div>
    <br /><br /><br /><br />
  </div>
</template>

<script>
/* eslint-disable */
import cartdiv from './cartdiv.vue'
import footerr from './footerr.vue'
import topcontainer from './topcontainer.vue'

export default {
  components: {
    cartdiv,
    footerr,
    topcontainer
  },
  data: () => {
    return {
      cart: [],
      page: 'products',
      delivery: 'true',
      sum: 0,
      sumIs: 0
    }
  },
  computed: {
    products () {
      // GETTING DATA FROM THE STORE
      return this.$store.state.products
    },
    menu () {
      // GETTING DATA FROM THE STORE
      return this.$store.state.menu
    },
    grandtotal: function () {
      var grandtotal = this.sumIs + 5
      console.log(grandtotal)
      return grandtotal
    }
  },
  methods: {
    addItemToCart (product) {
      const productInCart = this.cart.find((item) => {
        return item.heading === product.heading
      })
      if (!productInCart) {
        this.cart.push(product)
        console.log('product price is: ', product.price)
        this.sum += product.price
        console.log('pushted item is: ', this.cart)
      } else {
        this.sum += productInCart.price
        console.log('total bill is: ', this.sum)
        productInCart.quantity += 1
      }
      this.sumIs = this.sum
    },
    navigateTo (deliveryPickup) {
      this.delivery = deliveryPickup
    },
    plusOne (e) {
      console.log(e)
      e.quantity += 1
      this.sumIs += e.price
    },
    navigatePage (page) {
      this.page = page
    },
    removeItemFromCart (index) {
      this.cart.splice(index, 1)
      this.sum = 0
    },
    reducePrice (product) {
      console.log(product)
      this.sumIs -= product.price
    },
    lessItemFromCart (product) {
      console.log('PRODUCT QUANTITY IS: ', product.quantity)
      product.quantity -= 1
      this.sumIs -= product.price
    },
    onItemChanged (event, currentItem, lastActiveItem) {
      console.log('event is : ', event)
      console.log('lastActiveItem is : ', lastActiveItem)
      console.log('currentItem is : ', currentItem)
      console.log('currentItem item item is : ', currentItem.parentElement)

      const activeItemParent = currentItem.parentElement
      console.log('activeItemParent: ', activeItemParent)

      activeItemParent.scrollIntoView()

      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

.language {
  margin-right: 30px;
  position: relative;
  top: 4px;
}

.user-icon {
  position: absolute;
  top: 5px;
  margin-left: -40px;
}

.login {
  position: relative;
  top: 5px;
}

.cart-icon {
  margin-top: -4px;
}

.cart-div {
  width: 19%;
  float: right;
  font-family: "Open Sans", Arial, sans-serif;
  right: 0;
  overflow-y: auto;
  min-height: 100vh;
  background-color: #fff;
  padding-right: 4px;
  display: block;
  box-sizing: border-box;
  position: sticky;
  position: fixed;
  box-shadow: 0 0 1px 5px rgb(250, 250, 250);
}

.cart-sub {
  margin-top: 100px;
}

.toggle {
  position: relative;
  top: 7px;
}

.active {
  background-image: linear-gradient(120deg, #d72164 0%, #d72164 100%);
  background-repeat: no-repeat;
  background-size: 92% 2px;
  background-position: 20% 88%;
  transition: background-size 0.25s ease-in;
  span {
    font-weight: bold;
  }
}

@media only screen and (max-width: 1700px) {
  .footer {
    max-width: 70%;
    position: absolute;
    left: 70px;
  }
}

@media only screen and (min-width: 900px) {
  #mobile-img,
  .your-cart {
    display: none;
  }
}

@media only screen and (max-width: 900px) {
  .login-txt,
  .verticle-line,
  .verticle-line2,
  .verticle-line3,
  .lang,
  #laptop-img {
    display: none;
  }
  .cart-div {
    display: none;
  }
  .logo {
    position: absolute;
    right: 110px;
    top: 5px;
  }
  .cart-icon {
    position: relative;
  }
  .user-icon {
    position: relative;
    left: -290px;
    top: -5px;
  }

  .hero-img {
    height: 185px;
    width: 109%;
    margin-left: -12px;
  }
  .main-div {
    width: 100%;
    padding-left: 4px;
  }
  .info-icon {
    margin-right: 10px;
  }
  .hero-heading {
    font-size: 17px;
  }
  .seasonal-product {
    width: 90%;
    margin-left: -2px;
  }
  .product-img {
    margin-top: -35px;
    margin-right: -5px;
  }
  .product-add {
    margin-top: -5px;
  }
  .popular-deliver {
    text-align: center;
    width: 90%;
  }
  .deliv-sub-heading {
    text-align: start;
  }
  .gaping {
    margin-top: 110px;
  }
  .footer {
    width: 95%;
    max-width: 1070px;
    margin-left: -60px;
  }
  .product-price,
  .line-through {
    position: relative;
    top: 17px;
  }
  .contact-icon-fb-ins {
    margin-right: -110px;
    position: relative;
    top: -20px;
  }
  .contact-info {
    margin-right: 30px;
  }
  #footer__disclaimer {
    margin-top: 405px;
    position: absolute;
    left: 120px;
  }
  #support {
    margin-top: 430px;
  }
  .nav-holder::-webkit-scrollbar {
    width: 0;
  }
}

@media only screen and (max-width: 500px) {
  .seasonal-product {
    width: 107%;
    height: 100px;
    margin-left: -28px;
    box-shadow: 0 0px 1px 0 rgb(149, 149, 149);
    border-bottom: 1px solid rgb(231, 231, 231);
    display: inline-block;
    margin-right: 20px;
    margin-bottom: 1px;
  }
  .logo {
    position: absolute;
    right: 150px;
    top: 5px;
  }
  .user-icon {
    float: left;
    margin-left: 160px;
  }
  .cart-icon {
    margin-right: 33px;
  }
  .cities {
    margin-right: 20px;
  }
}

@media only screen and (max-width: 415px) {
  .logo {
    position: absolute;
    right: 130px;
    top: 5px;
  }
  .user-icon {
    position: relative;
    left: -280px;
    top: -5px;
  }
}

@media only screen and (max-width: 392px) {
  .logo {
    position: absolute;
    right: 115px;
    top: 5px;
  }
  .user-icon {
    position: relative;
    left: -250px;
    top: -5px;
  }
  .seasonal-product {
    width: 107%;
    height: 100px;
    margin-left: -28px;
    box-shadow: 0 0px 1px 0 rgb(149, 149, 149);
    border-bottom: 1px solid rgb(231, 231, 231);
    display: inline-block;
    margin-right: 20px;
    margin-bottom: 1px;
  }
}

@media only screen and (max-width: 369px) {
  .logo {
    position: absolute;
    right: 100px;
    top: 5px;
  }
  .user-icon {
    position: relative;
    left: -230px;
    top: -5px;
  }
  .cart-icon {
    margin-right: 27px;
  }
  .gap {
    width: 120%;
    position: relative;
    right: 30px;
  }
}

@import "../assets/style.css";
</style>
