<template>
<div>
    <productcomp :productID="$route.params.id"/>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'product',
  data() {
    return {
      related: [],
    };
  },
  components: {
    productcomp: () => import('@/components/productComp.vue'),
  },
  computed: {
    ...mapGetters(['allProducts']),
  },
  methods: {
    ...mapActions(['fetchProducts']),
    mounted() {
      this.fetchProducts();
    },
  },
};
</script>

<style scoped>
</style>
