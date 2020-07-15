<template>
  <div>
    <div class="cart__block" v-if="showCart">
        <h4 v-if="cart.length === 0">Cart is empty</h4>
        <div class="products__block" v-if="cart.length">
        <div class="product__block" v-for="product in cart" :key="product.id">
            <div class="product-img">
                <img :src="`${product.img}`" alt="PIC">
            </div>
            <div class="product-desc">
                <p>{{product.title.replace(/People/g, '')}}</p>
                <p class="rate"><starRating
                :rating=+product.rate
                :isIndicatorActive = false
                v-bind="config"
                 /></p>
                <p>{{product.quantity}} x ${{product.price}}</p>
            </div>
            <div class="product-delete__btn" @click="removeFromCart(product)">
                <font-awesome-icon icon="times-circle"/>
            </div>
        </div>
        </div>
        <div class="cart-total" v-show="cart.length">
            <p>TOTAL</p>
            <p>${{(cart.reduce((accumulator, current) =>
                +accumulator + +current.price * current.quantity, 0)).toFixed(2)}}</p>
        </div>
        <router-link to="/checkout" class="checkout">Checkout</router-link>
        <router-link to="/cart" class="go-to-cart">Go to cart</router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import starRating from 'vue-dynamic-star-rating';

export default {
  name: 'miniCartComp',
  data() {
    return {
      config: {
        starStyle: {
          starWidth: 12,
          starHeight: 12,
        },
      },
      showCart: true,
    };
  },
  components: {
    starRating,
  },
  methods: {
    ...mapActions(['remove_from_cart']),
    removeFromCart(product) {
      this.remove_from_cart(product);
    },
  },
  computed: {
    ...mapGetters(['cart']),
  },
};
</script>

<style scoped>
  .cart__block {
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 252px;
    margin-top: 45px;
    right: 85px;
    z-index: 10;
    background: #ffffff;
    border: 2px solid rgb(233, 227, 227);
    border-radius: 5.0px;
  }
  .cart__block:after, .cart__block:before {
    bottom: 100%;
    left: 13%;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
  }

  .cart__block:after {
    border-color: rgba(136, 183, 213, 0);
    border-bottom-color: #ffffff;
    border-width: 15px;
    margin-left: -15px;
  }
  .cart__block:before {
    border-color: rgba(194, 225, 245, 0);
    border-bottom-color: rgb(233, 227, 227);
    border-width: 18px;
    margin-left: -18px;
  }

 .cart__block > h4 {
     text-align: center;
     padding-top: 20px;
 }

 .products__block {
    height: 150px;
    overflow-y: scroll;
    scrollbar-width: 0px;
 }

 .products__block::-webkit-scrollbar {
    width: 0px;
 }

 .product__block {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 122px;
    justify-content: space-around;
    border-bottom: 1px solid rgba(237,237,237,0.74)
 }

 .product-img > img {
    width: 72px;
    height: 85px;
 }

 .product-desc {
    margin-left: -10px;
 }

 .product-delete__btn {
    color: #c0c0c0;
 }

 .product-desc > p:first-of-type {
    font-size: 11px;
    font-weight: 700;
    width: 100px;
    text-transform: uppercase;
    margin: 5px;
    color: #222222;
 }

 .product-desc > p:last-of-type {
    font-weight: 400;
    text-transform: uppercase;
    color: #f16d7f;
    margin: 5px;
}

 .rate {
     margin: 5px;
 }

 .cart-total {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 80%;
    margin: 0 auto;
    margin-top: 20px;
 }

.cart-total > p {
    font-size: 16px;
    line-height: 1.2;
    font-weight: 700;
    text-transform: uppercase;
    color: #222222;
}

.checkout {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    width: 80%;
    margin: 0 auto;
    margin-top: 32px;
    height: 50px;
    border: 1.0px solid #f16d7f;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    color: #f16d7f;
    cursor: pointer;
    outline: none;
}

.go-to-cart {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    width: 80%;
    height: 50px;
    margin: 0 auto;
    margin-top: 11px;
    background-color: #ffffff;
    border: 1.0px solid #eaeaea;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    color: #4a4a4a;
    margin-bottom: 20px;
    cursor: pointer;
    outline: none;
}
</style>
