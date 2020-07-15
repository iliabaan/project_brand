<template>
<header>
    <div class="header__top">
        <div class="header__left">
          <router-link to="/" class="logo">
            <img src="../assets/img/logo.png" alt="logo" class="logo__img">
            <h1 class="logo_text">BRAN<span class="logo_text logo_text_pink">D</span></h1>
          </router-link>
          <form class="header__search" action="#">
            <router-link to="/products/all" class="button_browse">
              <p class="button_browse_text">Browse</p>
              <font-awesome-icon icon="caret-down" class="caret-down"></font-awesome-icon>
            </router-link>
            <div class="search_field">
              <input type="text" class="search_browse" placeholder="Search for Item...">
              <a href="#">
                <div class="icon_search_box">
                  <font-awesome-icon icon="search" class="search_position"></font-awesome-icon>
                </div>
              </a>
            </div>
          </form>
        </div>
        <div class="header__right">
          <div class="cart" v-if="showCart">
            <miniCartComp />
          </div>
            <img src="../assets/img/cart.svg" alt="cart"
            class="cart__svg" @click="showCart = !showCart">
          <a href="#" class="button_account">
            <p class="button_account_text">My Account <font-awesome-icon icon="caret-down">
              </font-awesome-icon>
            </p>
          </a>
        </div>
      </div>
      <div id="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/products/man">Man</router-link>
        <router-link to="/products/women">Women</router-link>
        <router-link to="/products/kids">Kids</router-link>
        <router-link to="/products/accoseriese">Accoseriese</router-link>
        <router-link to="/products/featured">Featured</router-link>
        <router-link to="/products/hot-deals">Hot Deals</router-link>
      </div>
    </header>
</template>

<script>
import miniCartComp from '@/components/miniCartComp.vue';

export default {
  name: 'headerMain',
  data() {
    return {
      showCart: false,
    };
  },
  components: {
    miniCartComp,
  },
};
</script>

<style scoped>
header {
  display: flex;
  flex-direction: column;
  border: 1px solid #ececec;
  background-color: #ffffff;
}

.header__top {
  display: inherit;
  margin: 0 auto;
  width: 100%;
  height: 5em;
  justify-content: space-between;
  border-bottom: 0.5px solid #ececec;
  background-color: #ffffff;
}

.header__left, .header__right {
  margin-left: auto;
  margin-right: auto;
  display: inherit;
  flex-direction: row;
  align-items: center;
}

.logo {
  display: inherit;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
}

.logo__img {
  display: block;
  margin-right: 1em;
}

.logo_text {
  color: #222222;
  margin-top: 7px;
  font-size: 27px;
  font-weight: 300;
  line-height: 32px;
  text-transform: uppercase;
}

.logo_text_pink {
  color: #f16d7f;
  font-weight: 700;
  letter-spacing: 0.68px;
}

.header__search {
  margin-left: 3em;
  display: inherit;
}

.button_browse {
  display: flex;
  padding: 0.5em 1.5em;
  flex-direction: row;
  text-decoration: none;
  border-radius: 3px 0 0 3px;
  border: 1px solid #e6e6e6;
  background-color: #cdcdcc;
  background-image: linear-gradient(to bottom, #f9f9f9 0%, #f5f5f5 100%);
}

.button_browse_text {
  font-size: 1em;
  color: #222222;
}

.caret-down {
  color: #222222;
  margin-left: 10%;
}

.search_field {
  display: flex;
  border-radius: 0 3px 3px 0;
  border: 1px solid #e6e6e6;
  border-left: 0px solid #e6e6e6;
  background-color: #ffffff;
  outline: none;
}

.search_browse {
  width: 20em;
  margin-left: 5%;
  border-top-style: none;
  border-right-style: none;
  border-left-style: none;
  border-bottom-style: none;
  outline: none;
}

.icon_search_box {
  height: 100%;
  width: 2em;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #a4a4a4;
  border-left: 1px solid #e8e8e8;
}

.cart__svg {
  cursor: pointer;
}

.button_account {
  padding: 0.7em 1.2em;
  margin-left: 2em;
  background-color: #f16d7f;
  text-decoration: none;
}

.button_account_text {
  color: #ffffff;
}


#nav {
  display: inherit;
  align-items: center;
  width: 50%;
  height: 3.2em;
  margin: 0 auto;
}

#nav a {
  font-weight: bold;
  text-decoration: none;
  color: #222222;
  margin: 0 auto;
}

#nav a.router-link-exact-active {
  color: #f16d7f;
}
</style>
