<template>
  <div class="checkout">
    <div class="checkout__list">
        <h3>01. LOG IN</h3>
      <div class="login__register" v-if="menuElems.loginReg">
        <div class="login">
          <div>
            <h5>Check as a guest or register</h5>
            <p>Register with us for future convenience</p>
          </div>
          <form>
            <input type="radio" id="guest" value="guest" v-model="picked">
            <label for="guest">checkout as guest</label>
            <br>
            <input type="radio" id="register" value="register" v-model="picked">
            <label for="guest">register</label>
          </form>
          <div>
            <h5>register and save time!</h5>
            <p>Register with us for future convenience</p>
          </div>
          <div>
            <p>》Fast and easy checkout</p>
            <p>》Easy access to your order history and status</p>
          </div>
          <button @click="firstElementCheck('continue')">Continue</button>
        </div>
          <div class="register">
            <div>
              <h5>Already registered?</h5>
              <p>Please log in below</p>
            </div>
            <div>
                <form>
              <p>EMAIL ADDRESS</p>
              <input type="email" name="email" id="email" v-model="order.email">
              <p>PASSWORD</p>
              <input type="password" name="password" id="password"
               v-model="order.password" autocomplete="off">
              <p>Required Fileds</p>
              <div class="login__forgot">
                <button @click.prevent="firstElementCheck('login')">log in</button>
                <h5>Forgot Password ?</h5>
              </div>
              </form>
          </div>
        </div>
      </div>
        <h3>02. BILLING INFORMATION</h3>
        <div class="billing__info" v-show="menuElems.billingInfo">
        <form v-on:submit.prevent="menuElems.billingInfo = false; menuElems.shippingInfo = true">
            <div>
                <h5>First and last name</h5>
                <input type="text" placeholder="name" name="billing_name"
                 @change="setData($event.target.value, $event.target.name)" required>
                <h5>ADDRESS</h5>
                <input type="text" placeholder="address" name="billing_address"
                @change="setData($event.target.value, $event.target.name)" required>
                <h5>city</h5>
                <input type="text" placeholder="city" name="billing_city"
                @change="setData($event.target.value, $event.target.name)" required>
            </div>
            <div>
                <h5>state</h5>
                <input type="text" placeholder="state" name="billing_state"
                @change="setData($event.target.value, $event.target.name)" required>
                <h5>zip</h5>
                <input type="text" placeholder="zip" name="billing_zip"
                @change="setData($event.target.value, $event.target.name)" required>
                <h5>phone</h5>
                <input type="text" placeholder="phone" name="billing_phone"
                @change="setData($event.target.value, $event.target.name)" required>
                <input type="submit">
            </div>
        </form>
        </div>
        <h3>03. SHIPPING INFORMATION</h3>
      <div class="shipping__info" v-show="menuElems.shippingInfo">
        <form v-on:submit.prevent="menuElems.shippingInfo = false; menuElems.shippingMethod = true">
              <div>
              <h5>name</h5>
              <input type="text" placeholder="name" name="name"
                 @change="setData($event.target.value, $event.target.name)" required>
              <h5>location</h5>
              <input type="text" placeholder="location" name="address_location"
                 @change="setData($event.target.value, $event.target.name)" required>
              <h5>street address</h5>
              <input type="text" placeholder="street" name="address_street"
                 @change="setData($event.target.value, $event.target.name)" required>
                <h5>appartaments</h5>
              <input type="text" placeholder="appartaments" name="address_appartaments"
                 @change="setData($event.target.value, $event.target.name)" required>
              </div>
              <div>
              <h5>country</h5>
              <input type="text" placeholder="country" name="address_country"
                 @change="setData($event.target.value, $event.target.name)" required>
              <h5>state</h5>
              <input type="text" placeholder="state" name="address_state"
                 @change="setData($event.target.value, $event.target.name)" required>
              <h5>zip code</h5>
              <input type="text" placeholder="zip" name="address_postcode"
                 @change="setData($event.target.value, $event.target.name)" required>
              <button>continue</button>
          </div>
          </form>
      </div>
        <h3>04. SHIPPING METHOD</h3>
      <div class="shipping__method" v-show="menuElems.shippingMethod">
        <form v-on:submit.prevent="menuElems.shippingMethod = false; menuElems.payMethod = true">
          <div>
            <input type="radio" id="usps" name="shipping_method"
            value="USPS Express International"
            @change="setData($event.target.value, $event.target.name)" required>
            <label for="usps">USPS Express International</label>
            </div>
            <div>
            <input type="radio" id="usps_priority"
            name="shipping_method"
             value="USPS Priority International"
             @change="setData($event.target.value, $event.target.name)">
            <label for="usps_priority">USPS Priority International</label>
            </div>
            <div>
            <input type="radio" id="dhl" value="DHL Express"
            name="shipping_method"
            @change="setData($event.target.value, $event.target.name)">
            <label for="dhl">DHL Express</label>
            </div>
            <input type="submit">
        </form>
      </div>
        <h3>05. PAYMENT METHOD</h3>
      <div class="pay__method" v-show="menuElems.payMethod">
        <form v-on:submit.prevent="menuElems.payMethod = false; menuElems.orderReview = true">
            <div>
            <input type="radio" id="cash" name="pay_method" value="cash"
            @change="setData($event.target.value, $event.target.name)">
            <label for="cash">Cash</label>
            </div>
            <div>
            <input type="radio" id="credit_card" name="pay_method"
            value="credit_card" @change="setData($event.target.value, $event.target.name)">
            <label for="credit_card">Credit card</label>
            </div>
            <input type="submit">
        </form>
      </div>
    <h3>06. ORDER REVIEW</h3>
      <div class="order__review" v-show="menuElems.orderReview">
          <div>
          <div>
          <h5>name:</h5>
          <p>{{order.name}}</p>
          </div>
          <div>
              <h5>address:</h5>
              <p>{{order.address_country}} {{order.address_location}}
                {{order.address_street}} {{order.address_appartaments}}
                {{order.address_postcode}}</p>
          </div>
          <div>
              <h5>shipping method:</h5>
              <p>{{order.shipping_method}}</p>
          </div>
          <div>
              <h5>payment method:</h5>
              <p>{{order.pay_method}}</p>
          </div>
          </div>
          <div>
              <h5>Order List</h5>
              <div class="order__items">
              <div v-for="item in cart" :key="item.id">
                  <h5>{{item.title}}</h5>
                  <p>Quantity: <input type="number" v-model="item.quantity" min="1" max="10"></p>
                  <p>Color:
                <select v-model="item.checkedColor">
                <option v-for="color in item.colors" :key="color" class="select-option">
                  {{color}}
                </option>
              </select></p>
                <p>Size:
                <select v-model="item.checkedSize">
                <option v-for="size in item.sizes" :key="size" class="select-option">
                  {{size}}
                </option>
              </select></p>
              </div>
              </div>
          </div>
          <button @click="checkAll">Order</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'checkoutcomp',
  data() {
    return {
      picked: 'register',
      menuElems: {
        loginReg: true,
        billingInfo: false,
        shippingInfo: false,
        shippingMethod: false,
        payMethod: false,
        orderReview: false,
      },
    };
  },
  computed: {
    ...mapGetters(['order', 'cart']),
  },
  methods: {
    ...mapActions(['set_data']),
    firstElementCheck() {
      if ('continue' && this.picked === 'guest' && (this.order.email === null || this.order.email === '')
       && (this.order.password === null || this.order.password === '')) {
        this.menuElems.loginReg = false;
        this.menuElems.billingInfo = true;
      } else if ('login' && this.order.email !== null && this.order.password !== null) {
        this.menuElems.loginReg = false;
        this.menuElems.billingInfo = true;
      }
    },
    setData(value, name) {
      this.set_data([value.toUpperCase(), name]);
    },
    checkAll() {
      if (this.order.email === null && this.order.password === null) {
        this.setData('', 'email');
        this.setData('', 'password');
      }
      const order = Object.values(this.order);
      order.forEach((el) => {
        if (el === null) {
          console.log(el, 'null');
        } console.log(el, 'norm');
      });
    },
  },
};
</script>

<style scoped>
.checkout {
    display: flex;
    flex-direction: column;
    margin-top: 90px;
}

.checkout__list {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 0 auto;
}

.checkout__list h3 {
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    color: #222222;
    height: 50px;
    border-bottom: 1px solid #f3f3f3;
}

.checkout__list p {
    font-size: 13px;
    font-weight: 400;
    color: #b3b2b2;
}

.checkout__list button {
    width: 180px;
    height: 50px;
    background-color: #ffffff;
    border: 1.0px solid #eaeaea;
    outline: none;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    color: #4a4a4a;
}

.login__register {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin: 0 auto;
    margin-top: 40px;
    height: 320px;
    padding-bottom: 40px;
    border-bottom: 1px solid #f3f3f3;
}

h5 {
    font-size: 13px;
    font-weight: 600;
    text-transform: uppercase;
    color: #222222;
}

.login__register p {
    margin: 7.5px 0;
}

.login {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.login > form > label {
    font-size: 12px;
    font-weight: 400;
    text-transform: uppercase;
    color: #222222;
    margin-left: 15px;
}

.register {
    margin-left: 329px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.register input {
    width: 350px;
    height: 45px;
    padding: 0 20px;
    background-color: #ffffff;
    border: 1.0px solid #eaeaea;
    outline: none;
    margin-bottom: 20px;
}

.login__forgot {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.login__forgot > h5 {
    margin-left: 32px;
}

.billing__info > form, .shipping__info > form {
    display: flex;
    flex-direction: row;
    height: 350px;
    justify-content: space-between;
    width: 80%;
}

.billing__info div, .shipping__info div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.billing__info input, .shipping__info input {
    width: 310px;
    padding: 0 20px;
    height: 45px;
    background-color: #ffffff;
    border: 1.0px solid #eaeaea;
    outline: none;
    margin-bottom: 20px;
    text-transform: capitalize;
}

.shipping__info > button {
    align-self: flex-end;
    margin-left: 40px;
}

.shipping__method, .pay__method {
    display: flex;
    flex-direction: column;
    height: 180px;
    justify-content: space-evenly;
}

.shipping__method label, .pay__method label {
    margin-left: 20px;
}

.order__review {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 70%;
}

.order__review > div {
    display: flex;
    flex-direction: column;
}

.order__review > div > div {
    margin: 20px 0;
}

.order__review > div > div > p {
    margin-top: 10px;
}

.order__review > div:last-of-type {
    margin-left: 150px;
}

.order__review > button {
    align-self: flex-end;
    margin-left: 40px;
}

.order__items {
    display: flex;
    flex-direction: column;
    height: 200px;
    width: 300px;
    overflow-y: scroll;
}

.order__items > div {
    display: flex;
    flex-direction: column;
    margin: 10px 0;
}

.order__items > div > p {
    margin: 10px 0;
}

.order__items > div > p > input {
    width: 25px;
    outline: none;
    text-align: center;
}

.order__items > div > p > select {
    background-color: #ffffff;
    border: 1.0px solid #eaeaea;
    font-size: 14px;
    line-height: 24px;
    font-weight: 400;
    color: #919191;
    outline: none;
    text-transform: capitalize;
}

</style>
