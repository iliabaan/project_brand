<template>
<div>
    <div class="empty__cart" v-if="!cart.length">
    <h2>Cart is empty</h2>
    <router-link to="/products">Check products</router-link>
    </div>
  <div class="products__block" v-if="cart.length">
      <div class="products__block-header">
        <h4>Product Details</h4>
        <h4>unite Price</h4>
        <h4>Quantity</h4><h4>shipping</h4>
        <h4>Subtotal</h4><h4>ACTION</h4>
      </div>
    <div class="product__block" v-for="product in cart" :key="product.id">
        <div class="img__desc">
            <div class="product-img">
                <img :src="`${product.img}`" alt="PIC">
            </div>
                <div class="product-desc">
                <p>{{product.title}}</p>
                <br>
                <p>Color:
                <select v-model="product.checkedColor">
                <option v-for="color in product.colors" :key="color" class="select-option">
                  {{color}}
                </option>
              </select></p>
                <p>Size:
                <select v-model="product.checkedSize">
                <option v-for="size in product.sizes" :key="size" class="select-option">
                  {{size}}
                </option>
              </select></p>
            </div>
            </div>
            <div class="product-details">
                <p>${{product.price}}</p>
                <p><input type="number"
                min="1" max="10"
                class="quantity"
                :placeholder="product.quantity"
                v-model="product.quantity"></p>
                <p>FREE</p>
                <p>${{product.price * product.quantity}}</p>
            <div class="product-delete__btn" @click="removeFromCart(product)">
                <font-awesome-icon icon="times-circle"/>
            </div>
            </div>
        </div>
    <div class="buttons">
        <button class="buttons-btn" @click="clearCart()">cLEAR SHOPPING CART</button>
        <router-link to="/" class="buttons-btn">cONTINUE sHOPPING</router-link>
    </div>
  </div>
  <div class="cart__proceed" v-if="cart.length">
      <div class="shipping">
          <h3>Shipping address</h3>
          <select v-model="order.address_country" required>
            <option v-for="country in countries"
            :key="country.country">
            {{country.country}}</option>
          </select>
          <input type="text" v-model="order.address_state" placeholder="State">
          <input type="text" v-model="order.address_zip" placeholder="Postcode / Zip">
          <div class="btn__error"><button>get a quote</button>
            <h5 v-if="showError">All fields must be filled!</h5></div>
      </div>
      <div class="coupon">
          <h3>coupon discount</h3>
          <p>Enter your coupon code if you have one</p>
          <input type="text" placeholder="Code" v-model="discountCode">
          <div><button @click="calculateDiscount">Apply coupon</button>
          <span v-if="showCode">Incorrect code! Try this: "7777"</span></div>
      </div>
      <div class="proceed__block">
          <div>
          <p>Sub total <span>${{calculateOrderPrice}}</span></p><br>
          <p>GRAND TOTAL <span>${{calculateOrderPrice * order.discount}}</span></p>
          </div>
          <button @click="goToCheckout">proceed to checkout</button>
      </div>
  </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import axios from 'axios';

export default {
  name: 'cartcomp',
  data() {
    return {
      countries: [],
      showError: false,
      showCode: false,
      discountCode: '',
    };
  },
  methods: {
    ...mapActions(['remove_from_cart', 'clear_cart']),
    removeFromCart(product) {
      this.remove_from_cart(product);
    },
    clearCart() {
      this.clear_cart();
    },
    logger() {
      console.log(this.order);
    },
    calculateDiscount() {
      if (this.discountCode === '7777') {
        this.showCode = false;
        this.order.discount = 0.75;
      } else this.showCode = true;
    },
    goToCheckout() {
      if (this.order.address_zip !== null && this.order.address_state !== null
        && this.order.address_country !== null) {
        console.log(this.cart);
        this.showError = false;
        this.order = Object
          .assign(this.order, { order_list_price: this.calculateOrderPrice * this.order.discount });
        this.$router.push('/checkout');
      } else this.showError = true;
    },
  },
  computed: {
    ...mapGetters(['cart', 'order']),
    calculateOrderPrice() {
      const orderPrice = this.cart
        .reduce((accumulator, current) => +accumulator + +current.price
         * current.quantity, 0);
      return orderPrice;
    },
  },
  mounted() {
    axios.get('https://raw.githubusercontent.com/samayo/country-json/master/src/country-by-name.json')
      .then((response) => {
        this.countries = response.data;
      });
  },
};
</script>

<style scoped>
.products__block {
    display: flex;
    flex-direction: column;
    width: 95%;
    margin: 0 auto;
}
.products__block-header {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    margin: 0 auto;
    text-transform: uppercase;
    margin-top: 90px;
    margin-bottom: 20px;
}

.products__block-header > h4 {
    width: 150px;
    text-align: center;
}

.products__block-header > h4:first-of-type {
    margin-right: 210px;
}

.empty__cart {
    text-align: center;
    margin-top: 40px;
}

.empty__cart > h2 {
    margin-bottom: 25px;
}

.empty__cart > a {
    color: #575757;
    text-transform: uppercase;
}

.empty__cart > a:hover {
    text-decoration: none;
}

.product__block {
    display: flex;
    height: 150px;
    width: 100%;
    margin: 0 auto;
    justify-content: space-around;
    align-items: center;
    border-top: 1px solid black;
}

.product-img > img {
    width: 100px;
    height: 115px;
    margin-left: -30px;
}

.img__desc {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.product-desc {
    display: flex;
    flex-direction: column;
    margin-left: 15px;
}

.product-desc > p:first-of-type {
    font-size: 13px;
    width: 170px;
    font-weight: 400;
    text-transform: uppercase;
    color: #222222;
}
.product-desc > p:nth-of-type(2), .product-desc > p:last-of-type {
    font-size: 13px;
    font-weight: 600;
    color: #575757;
    margin: 2.5px 0;
}

.product-desc > p > span {
    text-transform: capitalize;
}

.product-desc > p > select {
    background-color: #ffffff;
    border: 1.0px solid #eaeaea;
    font-size: 14px;
    line-height: 24px;
    font-weight: 400;
    color: #919191;
    outline: none;
    text-transform: capitalize;
}

.product-details {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.product-details > p {
    width: 150px;
    text-align: center;
    font-size: 13px;
    line-height: 20px;
    font-weight: 400;
    color: #656565;
}

.quantity {
    width: 54px;
    height: 20px;
    background-color: #ffffff;
    border: 1.0px solid #eaeaea;
    text-align: center;
    outline: none;
}

.product-delete__btn {
    width: 150px;
    text-align: center;
}

.buttons {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin: 0 auto;
    margin-top: 50px;
}

.buttons-btn {
    display: flex;
    justify-content: center;
    width: 235px;
    height: 50px;
    background-color: #ffffff;
    border: 1.0px solid #eaeaea;
    align-items: center;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    color: #4a4a4a;
    text-decoration: none;
    cursor: pointer;
    outline: none;
}

.cart__proceed {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 63px;
}

h3 {
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    color: #222222;
}

.shipping {
    display: flex;
    flex-direction: column;
    height: 240px;
    justify-content: space-around;
}

.shipping > select {
    width: 355px;
    height: 45px;
    background-color: #ffffff;
    border: 1.0px solid #eaeaea;
    outline: none;
    font-size: 13px;
    font-weight: 300;
    color: #b1b1b1;
}

.cart__proceed input {
    width: 325px;
    height: 45px;
    background-color: #ffffff;
    border: 1.0px solid #eaeaea;
    font-size: 13px;
    font-weight: 300;
    color: #b1b1b1;
    outline: none;
    padding-left: 10px;
    padding-right: 20px;
}

.cart__proceed button {
    width: 100px;
    height: 35px;
    background-color: #ffffff;
    border: 1.0px solid #eaeaea;
    outline: none;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    color: #4a4a4a;
    cursor: pointer;
}

.coupon {
    display: flex;
    flex-direction: column;
    height: 156px;
    justify-content: space-around;
}

.coupon > p {
    font-size: 14px;
    font-weight: 300;
    color: #000000;
}

.proceed__block {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 360px;
    height: 214px;
    background-color: #f5f3f3;
}

.proceed__block > button {
    width: 273px;
    height: 50px;
    background-color: #f16d7f;
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    color: #ffffff;
}

.proceed__block > div {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 0 auto;
    padding-top: 40px;
    align-items: flex-end;
    border-bottom: 1px solid rgba(87, 82, 82, 0.3);
    height: 70px;
}

.proceed__block > div > p:first-of-type {
    font-size: 11px;
    font-weight: 400;
    text-transform: uppercase;
    color: #4a4a4a;
}

.proceed__block > div > p:last-of-type {
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    color: #222222;
}

.proceed__block > div > p:last-of-type > span {
    color: #f16d7f;
}

.btn__error {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.btn__error > h5 {
    margin-left: 40px;
    color: salmon;
}
</style>
