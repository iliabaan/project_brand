<template>
  <div>
      <div class="checkout__head"><h1>Checkout</h1></div>
      <checkoutcomp />
  </div>
</template>

<script>
import checkoutcomp from '@/components/checkoutComp.vue';

export default {
  name: 'Checkout',
  components: {
    checkoutcomp,
  },
};
</script>

<style scoped>
  .checkout__head {
    display: flex;
    align-items: center;
    height: 100px;
    background-color: #f8f3f4;
  }

  .checkout__head > h1 {
    margin-left: 5%;
    font-size: 24px;
    font-weight: 900;
    text-transform: uppercase;
    color: #f16d7f;
  }
</style>
