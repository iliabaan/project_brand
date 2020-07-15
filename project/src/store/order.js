export default {
  state: {
    order: {
      email: null,
      password: null,
      name: null,
      address_country: null,
      address_location: null,
      address_street: null,
      address_appartaments: null,
      address_state: null,
      address_postcode: null,
      billing_name: null,
      billing_address: null,
      billing_city: null,
      billing_state: null,
      billing_zip: null,
      billing_phone: null,
      shipping_method: null,
      pay_method: null,
      discount: 1,
      order_list: [],
    },
  },
  actions: {
    set_data({ commit }, data) {
      commit('set_data', data);
    },
  },
  getters: {
    order: (state) => state.order,
  },
  mutations: {
    set_data: (state, data) => {
      state.order[data[1]] = data[0]; // eslint-disable-line
    },
  },
};
