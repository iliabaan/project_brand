<template>
    <div class="products-sort">
        <div>
            <h4>Trending now</h4>
            <div>Bohemian | Floral | Lace Floral | Lace | Bohemian</div>
        </div>
        <div>
            <h4>Size</h4>
            <div>
             <p v-for="size in sizes" :key='size.type'>
             <input type="checkbox" :name="size" :value="size"
             v-model="checkedSizes">{{size.type}}</p>
             </div>
        </div>
        <div>
            <h4>pRICE</h4>
            <div class="range-slider">
                <input type="range"
                 min="0"
                 max ="100"
                 step="1"
                 v-model="prices.minPrice"
                 @change="setRange"
                 >
                <input type="range"
                 min="0"
                 max ="100"
                 step="1"
                 v-model="prices.maxPrice"
                 @change="setRange"
                 >
            </div>
 <div class="range-prices">
            <p>${{prices.minPrice}}</p>
            <p>${{prices.maxPrice}}</p>
            </div>
        </div>
        <button class="filter-btn" value="filter" @click="logger()"><p>FILTER</p></button>
    </div>
</template>

<script>

export default {
  name: 'sortprodcomp',
  props: ['sortProducts'],
  data() {
    return {
      sizes: [
        { type: 'XXS', sort_type: 'size' },
        { type: 'XS', sort_type: 'size' },
        { type: 'S', sort_type: 'size' },
        { type: 'M', sort_type: 'size' },
        { type: 'L', sort_type: 'size' },
        { type: 'XL', sort_type: 'size' },
        { type: 'XXL', sort_type: 'size' },
      ],
      prices: {
        minPrice: 0,
        maxPrice: 100,
        sort_type: 'price',
      },
      checkedSizes: [],
    };
  },
  computed: {
    sortByPrice() {
      return this.checkedSizes;
    },
  },
  methods: {
    setRange() {
      if (this.prices.minPrice > this.prices.maxPrice
      || this.prices.maxPrice < this.prices.minPrice) {
        const tmp = this.prices.maxPrice;
        this.prices.maxPrice = this.prices.minPrice;
        this.prices.minPrice = tmp;
      }
    },
    logger() {
      if (this.checkedSizes.length) {
        this.checkedSizes.forEach((element) => this.sortProducts(element));
      } else this.sortProducts('showAll');
      // this.sortProducts(this.prices);
    },
  },
};
</script>

<style scoped>
    .products-sort {
        height: 125px;
        margin-top: 10px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

    .products-sort > div > h4 {
        font-size: 14px;
        line-height: 20px;
        font-weight: 700;
        text-transform: uppercase;
        color: #6f6e6e;
        margin-bottom: 25px;
    }

    .products-sort > div:first-of-type {
        width: 176px;
        font-size: 14px;
        line-height: 26px;
        font-weight: 400;
        color: #6f6e6e;
    }

    .products-sort > div:nth-of-type(2) {
        font-size: 14px;
        line-height: 20px;
        font-weight: 400;
        text-transform: uppercase;
        color: #6f6e6e;
    }

    .products-sort > div:nth-of-type(2) > div {
        display: flex;
        width: 210px;
        height: 40px;
        margin-left: -20px;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .products-sort > div:nth-of-type(2) > div > p {
        margin: auto 23px;
        width: 5px;
        display: flex;
        align-items: center;
    }

    .products-sort > div:nth-of-type(2) > div > p > input {
        margin-right: 3px;
    }

    .range-slider {
        margin-top: 24px;
        text-align: center;
        position: relative;
        display: flex;
    }

    .range-slider svg, .range-slider input[type=range] {
        position: absolute;
        width: 200px;
        left: 0;
        bottom: 0;
    }

    input[type=range]::-webkit-slider-thumb {
        -webkit-appearance: none;
        z-index: 2;
        position: relative;
        top: 2px;
        margin-top: -7px;
        cursor: ew-resize;
    }

    .range-prices {
        display: flex;
        width: 200px;
        margin-top: 15px;
    }

    .range-prices > p:last-of-type {
        margin-left: 150px;
    }

    .filter-btn {
      padding: 20px;
    }
</style>
