export default {
  state: {
    products: [],
    cart: [],
  },
  mutations: {
    updateAllProducts(state, products) {
      state.products = products;
    },
    set_cart: (state, product) => {
      if (state.cart.length) {
        let doesItemExists = false;
        state.cart.map((item) => { // eslint-disable-line
          if (item.id === product.id) {
            doesItemExists = true;
            item.quantity++; // eslint-disable-line
          }
        });
        if (!doesItemExists) {
          state.cart.push(product);
        }
      } else {
        state.cart.push(product);
      }
    },
    remove_from_cart: (state, product) => {
      state.cart.map((item) => { // eslint-disable-line
        if (item.id === product.id) {
          if (item.quantity > 1) {
            item.quantity--; // eslint-disable-line
          } else state.cart.splice(state.cart.indexOf(item), 1);
        }
      });
    },
    clear_cart: (state) => {
      state.cart = [];
      return state.cart;
    },
  },
  actions: {
    async fetchProducts(ctx) {
      const res = await fetch('https://raw.githubusercontent.com/iliabaan/project_brand/master/db.json');
      const products = await res.json();
      ctx.commit('updateAllProducts', products);
    },
    add_to_cart({ commit }, product) {
      commit('set_cart', product);
    },
    remove_from_cart({ commit }, index) {
      commit('remove_from_cart', index);
    },
    clear_cart({ commit }) {
      commit('clear_cart');
    },
  },
  getters: {
    allProducts: (state) => state.products,
    filteredProducts: (state) => (sorters) => state.products
      .filter((product) => product[sorters[0]] === sorters[1]),
    product: (state) => (id) => state.products
      .find((product) => product.id === id),
    cart: (state) => state.cart,
  },
};
