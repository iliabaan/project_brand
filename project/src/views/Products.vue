<template>
<div>
  <div class="products-head">
    <div class="products-head-els">
    <h1>{{$route.params.type.replace(/-/g, ' ')}}</h1>
    <p><router-link to="/products" class="link">{{$route.path
    .slice(1, 10)}}</router-link> <span>{{$route.path.slice(10)}}</span></p>
    </div>
  </div>
  <div class="products-container">
    <filterprodcomp :sortProducts='sortProducts'/>
    <div class="products-container-block">
    <sortprodcomp :sortProducts='sortProducts'/>
    <productsview keys="sort_class"
     :values="$route.params.type"
     :showSorted=false
     ref="productsview"/>
     </div>
    </div>
</div>
</template>

<script>

import productsview from '@/components/ProductsView.vue';
import filterprodcomp from '@/components/filterProdComp.vue';
import sortprodcomp from '@/components/sortProdComp.vue';
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['filteredProducts']),
  },
  name: 'products',
  components: {
    productsview,
    filterprodcomp,
    sortprodcomp,
  },
  methods: {
    sortProducts(sorter) {
      if (sorter.sort_type === 'category') {
        this.$refs.productsview.filterByCategories(sorter);
      } else if (sorter.sort_type === 'size') {
        console.log('sss');
        this.$refs.productsview.filterBySize(sorter);
      }
    },
  },
};
</script>

<style scoped>

  .products-container {
    display: flex;
    flex-direction: row;
    margin: 0 auto;
  }

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

  .products-container {
    margin-top: 70px;
    width: 90%;
    margin: 0 auto;
  }
</style>
