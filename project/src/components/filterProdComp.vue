<template>
    <div class="products-filters">
      <h3 @click="showCats = !showCats">Category <font-awesome-icon icon="caret-down"/></h3>
       <transition name="slide">
      <ul class="category-list" v-show="showCats">
        <li v-for="category in categories"
        :key="category.title"
        @click="sort(category)">
        {{category.title}}<font-awesome-icon icon="check" v-if="checkedFilter === category.type"/>
        </li>
      </ul>
       </transition>
            <h3 @click="showBrands = !showBrands"
            >Brand <font-awesome-icon icon="caret-down"/></h3>
            <transition name="slide">
            <ul class="brand-list" v-show="showBrands">
        <li v-for="brand in brands" :key="brand.title" @click="sort(brand)">
          {{brand.title}}<font-awesome-icon icon="check" v-if="checkedFilter === brand.type"/>
        </li>
      </ul>
            </transition>
            <h3 @click="showDesig = !showDesig">Designer <font-awesome-icon icon="caret-down"/></h3>
            <transition name="slide">
            <ul class="designer-list" v-show="showDesig">
        <li v-for="designer in designers" :key="designer.title" @click="sort(designer)">
          {{designer.title}}<font-awesome-icon icon="check" v-if="checkedFilter === designer.type"/>
        </li>
      </ul>
         </transition>
      </div>
</template>

<script>
export default {
  name: 'filterprodcomp',
  props: ['sortProducts', 'filterProducts'],
  data() {
    return {
      categories: [
        { title: 'Accessories', type: 'accoseriese', sort_type: 'category' },
        { title: 'Bags', type: 'bags', sort_type: 'category' },
        { title: 'Denim', type: 'denim' },
        { title: 'Hoodies & Sweatshirts', type: 'hoodies', sort_type: 'category' },
        { title: 'Jackets & Coats', type: 'jackets', sort_type: 'category' },
        { title: 'Pants', type: 'pants', sort_type: 'category' },
        { title: 'Polos', type: 'polos', sort_type: 'category' },
        { title: 'Shirts', type: 'shirts', sort_type: 'category' },
        { title: 'Shoes', type: 'shoes', sort_type: 'category' },
        { title: 'Shorts', type: 'shorts', sort_type: 'category' },
        { title: 'Sweaters & Knits', type: 'sweaters', sort_type: 'category' },
        { title: 'T-Shirts', type: 't-shirts', sort_type: 'category' },
        { title: 'Tanks', type: 'tanks', sort_type: 'category' },
      ],
      brands: [
        { title: 'Mango', type: 'Mango', sort_type: 'brand' },
        { title: 'Banana', type: 'Banana', sort_type: 'brand' },
        { title: 'Grape', type: 'Grape', sort_type: 'brand' },
        { title: 'Apple', type: 'Apple', sort_type: 'brand' },
        { title: 'Peach', type: 'Peach', sort_type: 'brand' },
      ],
      designers: [
        { title: 'Mango', type: 'Mango', sort_type: 'brand' },
        { title: 'Banana', type: 'Banana', sort_type: 'brand' },
        { title: 'Grape', type: 'Grape', sort_type: 'brand' },
        { title: 'Apple', type: 'Apple', sort_type: 'brand' },
        { title: 'Peach', type: 'Peach', sort_type: 'brand' },
      ],
      showCats: true,
      showDesig: false,
      showBrands: false,
      checkedFilter: '',
    };
  },
  methods: {
    sort(sorter) {
      this.checkedFilter = sorter.type;
      this.sortProducts(sorter);
    },
  },
};
</script>

<style scoped>
 .products-filters {
    width: 220px;
    height: 90%;
    display: flex;
    flex-direction: column;
  }

  .products-filters > div > ul {
    display: flex;
    flex-direction: column;
  }

  .products-filters > h3 {
    display: flex;
    justify-content: space-between;
    width: 140px;
    height: 32px;
    border-left: 5px solid #ef5b70;
    border-bottom: 1px solid #ccc;
    margin: 5px 0;
    align-items: center;
    padding-left: 10px;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    color: #ef5b70;
    cursor: pointer;
  }

  .products-filters > ul {
    padding-left: 16px;
    list-style-type: none;
    transform-origin: top;
    transition: .4s ease;
  }

  .products-filters > ul > li {
    font-size: 14px;
    line-height: 33px;
    font-weight: 400;
    color: #6f6e6e;
  }

  .products-filters > ul > li > svg {
    margin-left: 10px;
  }

  /* .slide-enter, .slide-leave-to{
  transform: scaleY(0);
} */
  .slide-enter-active,
  .slide-leave-active {
    transition: all 0.5s;
  }
  .slide-enter,
  .slide-leave-to {
    opacity: 0;
    transform: translateY(-2px);
  }
</style>
