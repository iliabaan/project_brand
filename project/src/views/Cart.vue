<template>
  <div>
      <div class="cart__head"><h1>cart</h1></div>
    <cartcomp/>
  </div>
</template>

<script>
import cartcomp from '@/components/cartComp.vue';

export default {
  name: 'Cart',
  components: {
    cartcomp,
  },
};
</script>

<style scoped>
  .cart__head {
    display: flex;
    align-items: center;
    height: 100px;
    background-color: #f8f3f4;
  }

  .cart__head > h1 {
    margin-left: 5%;
    font-size: 24px;
    font-weight: 900;
    text-transform: uppercase;
    color: #f16d7f;
  }
</style>
