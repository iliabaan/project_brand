<template>
    <div class="products">
        <h1 v-if="header">{{ header }}</h1>
        <div class="products__list">
          <h4 class="empty-msg" v-if="showMessage">Nothing to show :(</h4>
            <router-link :to="`/product/${product.id}`"
            class="product"
            v-for="product in filtered" :key="product.id"
            >
             <div class="add-to-cart">
                 <div class="add-to-cart__block" @click.prevent="addToCart(product)">
                     <p><font-awesome-icon icon="cart-plus" />Add to Cart</p>
                 </div>
                 </div>
            <img :src='product.img' alt="product_img">
            <h3>{{product.title}}</h3>
            <p class="price">${{product.price}}</p>
            </router-link>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  props: ['keys', 'values', 'header', 'showSorted'],
  data() {
    return {
      sortedProducts: [],
      filteredByCategories: [],
      showMessage: false,
    };
  },
  name: 'ProductsView',
  computed: {
    ...mapGetters(['filteredProducts', 'allProducts']),
    filtered() {
      if (this.showSorted === true) {
        if (this.sortedProducts.length) {
          this.showMessageFunc(false);
          return this.sortedProducts;
        } return this.showMessageFunc(true);
      } if (this.values === 'all') {
        this.showMessageFunc(false);
        return this.allProducts;
      } this.showMessageFunc(false);
      return this.filteredProducts([this.keys, this.values]);
    },
  },
  methods: {
    ...mapActions(['fetchProducts', 'add_to_cart']),
    filterByCategories(sorter) {
      this.showSorted = true;
      this.sortedProducts = [];
      this.sortedProducts = this.filteredProducts([this.keys, this.values])
        .filter((item) => item.type === sorter.type);
      this.filteredByCategories = this.sortedProducts;
      return this.sortedProducts;
    },
    filterBySize(sorter) {
      this.showSorted = true;
      if (this.filteredByCategories.length) {
        this.sortedProducts = this.sortedProducts
          .filter((item) => item.sizes.includes(sorter.type.toString()));
        return this.sortedProducts;
      } this.sortedProducts = this.filteredProducts([this.keys, this.values])
        .filter((item) => item.sizes.includes(sorter.type.toString()));
      console.log(this.sortedProducts);
      return this.sortedProducts;
    },
    showMessageFunc(boo) {
      this.showMessage = boo;
    },
    addToCart(product) {
      product = Object.assign({}, product, { quantity: 1, checkedColor: product.colors[1], checkedSize: product.sizes[0]}); // eslint-disable-line
      this.add_to_cart(product);
    },
  },
  mounted() {
    console.log(this.keys, this.values);
    this.fetchProducts();
  },
};
</script>

<style scoped>
.products {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    margin-top: 90px;
}

.products h1 {
    display: inherit;
    margin: 0 auto;
}

 .featured > .products__list {
   width: 100%;
   justify-content: space-around;
   display: flex;
   margin-left: 0;
 }

.products__list {
    display: inherit;
    flex-direction: row;
    width: 1000px;
    margin: 0 auto;
    margin-left: 60px;
    flex-wrap: wrap;
}

.product {
    display: flex;
    margin: 5px 10px;
    flex-direction: column;
    height: 376px;
    text-decoration: none;
}

.product:hover {
    box-shadow: 0px 5px 8px 0px rgba(0,0,0,0.15);
}

.product:hover .add-to-cart {
    display: flex;
}

.add-to-cart {
    z-index: 1;
    position: absolute;
    display: none;
    background-color: rgba(58,56,56,0.83);
    width: 16.3em;
    height: 17.5em;
    justify-content: space-around;
    align-items: center;
}

.add-to-cart__block {
    display: inherit;
    align-items: center;
    justify-content: space-around;
    width: 7.8em;
    height: 2.5em;
    border: 1.0px solid #ffffff;
}

.add-to-cart__block > p {
    font-size: 13px;
    line-height: 1.2;
    font-weight: 700;
    color: #ffffff;
}

.add-to-cart__block > p > svg {
    margin-right: 8px;
}

.product > img {
    position: relative;
    z-index: 0;
    width: 16.3em;
    height: 17.5em;
}

.product > h3 {
    margin-top: 16px;
    font-weight: 400;
    font-size: 13px;
    line-height: 1.2;
    margin-left: 10%;
    text-transform: uppercase;
    color: #222222;
}

.price {
    margin-left: 10%;
    margin-top: 1em;
    text-transform: uppercase;
    color: #f16d7f;
}

.products__browse-all {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
    margin-top: 3.5em;
    width: 13.250em;
    height: 3em;
    background-color: #f16d7f;
    font-size: 16px;
    line-height: 54px;
    font-weight: 700;
    letter-spacing: 0.025em;
    color: #ffffff;
    text-decoration: none;
}

.empty-msg {
  width: 20%;
  margin: 20% auto;
}
</style>
