<template>
  <div>
        <div class="products-head">
        <div class="products-head-els">
        <h1>{{$route.params.type}}</h1>
        <p><router-link to="/products" class="link">products/</router-link>
         <span>{{productOnPage.sort_class}}</span>
        </p>
    </div>
    </div>
    <div class="product">
      <div class="product-pic">
        <img :src="`${productOnPage.img}`" alt="product_pic">
      </div>
      <div class="product-description">
        <div class="desc">
        <p class="desc-collection">{{productOnPage.sort_class}} collection</p>
        <p class="desc-title">{{productOnPage.title}}</p>
        <p class="desc-text">Compellingly actualize fully researched processes
           before proactive outsourcing.
          Progressively syndicate collaborative architectures before cutting-edge services.
          Completely visualize parallel core competencies rather than exceptional portals.</p>
          <div class="desc-material__design"><p>MATERIAL:
             <span>{{productOnPage.material}}</span></p>
          <p>DESIGNER: <span>{{productOnPage.brand}}</span></p></div>
          <p class="desc-price">${{productOnPage.price}}</p>
          </div>
          <div class="desc__add-to-cart">
            <div>
              <p>CHOOSE COLOR</p>
              <select>
                <option v-for="color in productOnPage.colors" :key="color" class="select-option">
                  {{color}}
                </option>
              </select>
            </div>
            <div>
              <p>CHOOSE SIZE</p>
              <select>
                <option v-for="size in productOnPage.sizes" :key="size">
                  {{ size }}</option>
              </select>
            </div>
            <div>
              <p>QUANTITY</p>
              <input type="number" value="1">
            </div>
          </div>
          <button class="desc__add-to-cart-btn">
            <font-awesome-icon icon="cart-arrow-down"/>Add to Cart</button>
      </div>
      <h3 class="related-header">you may like also</h3>
      <div class="related__products">
            <router-link :to="`/product/${product.id}`"
            class="related__product"
            v-for="product in relatedProducts" :key="product.id" target="_blank">
             <div class="add-to-cart">
                 <div class="add-to-cart__block">
                     <p><font-awesome-icon icon="cart-plus" />Add to Cart</p>
                 </div>
                 </div>
            <img :src='product.img' alt="rel-product__img">
            <h3>{{product.title}}</h3>
            <p class="price">${{product.price}}</p>
            </router-link>
    </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'productComp',
  props: ['productID'],
  data() {
    return {
      id: +this.productID,
      related: [],
    };
  },
  computed: {
    ...mapGetters(['product', 'allProducts']),
    productOnPage() {
      return this.product(this.id);
    },
    relatedProducts() {
      this.randomizeRelated();
      return this.related;
    },
  },
  methods: {
    ...mapActions(['fetchProducts']),
    randomizeRelated() {
      this.related = [];
      for (let i = 0; i < 4; i += 1) {
        const random = parseInt(0 - 0.5 + Math.random() * (15 - 0 + 1), 0);
        const products = this.allProducts;
        this.related.push(products[random]);
        products.splice(random, 1);
      }
    },
  },
  mounted() {
    this.fetchProducts();
  },
};
</script>

<style>
  .products-head {
    display: flex;
    height: 100px;
    background-color: #f8f3f4;
  }

  .products-head-els {
    display: flex;
    height: 100%;
    width: 90%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
  }

  .products-head-els > h1 {
    margin-left: 10%;
    font-size: 24px;
    font-weight: 900;
    margin-left: 1%;
    text-transform: uppercase;
    color: #f16d7f;
  }

  .products-head-els > p {
    font-weight: 300;
    text-transform: uppercase;
    color: #636363;
    letter-spacing: 1px;
  }

  .products-head-els > p > .link {
    color: #636363;
    letter-spacing: 1px;
  }

  .products-head-els > p > span {
    font-weight: 700;
    color: #f16d7f;
  }

  .product-pic {
    width: 100%;
    height: 350px;
    display: flex;
    justify-content: space-around;
    background-color: #f7f7f7;
    z-index: 0;
    position: relative;
  }

  .product-pic > img {
    height: 350px;
    width: 300px;
    z-index: 1;
    position: relative;
  }

  .product-description {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 70%;
    height: 730px;
    background-color: #ffffff;
    border: 1.0px solid #eaeaea;
    margin: 0 auto;
    margin-top: -30px;
    z-index: 10;
  }

  .desc {
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 430px;
    width: 80%;
    margin: 0 auto;
    background-color: #ffffff;
    border-bottom: 2.0px solid #ef5b70;
  }

  .desc-collection {
    font-size: 14px;
    height: 25px;
    margin-top: 70px;
    font-weight: 700;
    color: #f16d7f;
    text-transform: uppercase;
  }

  .desc-title {
    margin-top: 24px;
    font-size: 18px;
    line-height: 24px;
    font-weight: 900;
    text-transform: uppercase;
    color: #4d4d4d;
  }

  .desc-text {
    margin-top: 50px;
    width: 70%;
    margin: 0 auto;
    margin-top: 30px;
  }

  .desc-material__design {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 80%;
    margin: 20px auto;
    font-size: 14px;
    line-height: 24px;
    font-weight: 700;
    color: #b9b9b9;
  }

  .desc-material__design > p > span {
    color: #2f2f2f;
    text-transform: uppercase;
  }

  .desc-price {
    font-size: 24px;
    line-height: 24px;
    font-weight: 700;
    color: #ef5b70;
    margin-top: 17px;
  }

  .desc__add-to-cart {
    display: flex;
    justify-content: space-around;
    width: 70%;
    margin: 0 auto;
    margin-top: 50px;
    font-size: 14px;
    line-height: 24px;
    font-weight: 700;
    color: #2f2f2f;
  }

  .desc__add-to-cart > div > select {
    width: 144px;
    height: 35px;
    background-color: #ffffff;
    border: 1.0px solid #eaeaea;
    font-size: 13px;
    line-height: 24px;
    font-weight: 400;
    color: #bcbcbc;
    text-transform: uppercase;
    outline: none;
  }

  .desc__add-to-cart > div > input {
    width: 134px;
    height: 35px;
    background-color: #ffffff;
    border: 1.0px solid #eaeaea;
    font-size: 14px;
    line-height: 24px;
    font-weight: 400;
    color: #bcbcbc;
    padding-left: 10px;
    outline: none;
  }

  .desc__add-to-cart-btn {
    width: 65%;
    height: 55px;
    margin: 0 auto;
    margin-top: 28px;
    background-color: #ffffff;
    border: 1.0px solid #ef5b70;
    outline: none;
    font-size: 16px;
    line-height: 1.2;
    font-weight: 700;
    color: #ef5b70;
  }

  .desc__add-to-cart-btn > svg {
    margin-right: 15px;
  }

  .related-header {
    font-size: 24px;
    margin-top: 120px;
    text-align: center;
    font-weight: 900;
    text-transform: uppercase;
    color: #4d4d4d;
  }

  .related__products {
    display: flex;
    margin: 0 auto;
    margin-top: 72px;
    width: 90%;
  }

  .related__product {
    display: flex;
    margin: 5px 10px;
    flex-direction: column;
    height: 376px;
    text-decoration: none;
}

.related__product:hover {
    box-shadow: 0px 5px 8px 0px rgba(0,0,0,0.15);
}

.related__product:hover .add-to-cart {
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

.related__product > img {
    position: relative;
    z-index: 0;
    width: 16.3em;
    height: 17.5em;
}

.related__product > h3 {
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
</style>
