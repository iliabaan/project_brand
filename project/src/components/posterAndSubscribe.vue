<template>
  <div class="poster_and_subscribe">
    <div class="poster__block">
      <div class="poster__block-pic">
        <h3>30% <span>OFFER</span><br><span>FOR WOMEN</span></h3>
      </div>
      <div class="poster__block-desc">
        <div>
          <font-awesome-icon icon="truck-moving" />
          <div>
            <h4>Free Delivery</h4>
            <p>Worldwide delivery on all. Authorittively
              morph next-generation innovation with extensive models.</p>
          </div>
        </div>
        <div>
          <font-awesome-icon icon="percent" />
          <div>
            <h4>Sales & discounts</h4>
            <p>Worldwide delivery on all. Authorittively morph
              next-generation innovation with extensive models.</p>
          </div>
        </div>
        <div>
          <font-awesome-icon icon="crown" />
          <div>
            <h4>Quality assurance</h4>
            <p>Worldwide delivery on all. Authorittively morph
              next-generation innovation with extensive models.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="subscribe__block">
      <div class="reviews">
        <img src="https://i.ibb.co/9p7nyym/Layer-40.jpg" alt="review-author-pic">
        <div class="review">
          <p>"{{users[0].company.catchPhrase}}.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, cupiditate."</p>
          <p>{{users[0].name}}</p>
          <p>{{users[0].address.city}}</p>
                <div class="review-change_btns">
          <div></div>
          <div></div>
          <div></div>
      </div>
        </div>
              </div>
        <div class="vertical-line"></div>
        <div class="subscribe">
            <p>Subscribe<br><span>FOR OUR NEWLETTER AND PROMOTION</span></p>
            <div class="subscribe-input_email">
            <input type="email" placeholder="Enter Your Email" v-model="email">
            <div @click="getEmail">Subscribe</div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'posterAndSubcribe',
  data() {
    return {
      users: [],
      email: '',
    };
  },
  methods: {
    getEmail() {
      this.order.email = this.email;
      console.log(this.order.email);
    },
  },
  computed: {
    ...mapGetters(['order']),
  },
  async mounted() {
    await this.$root.getJson('https://jsonplaceholder.typicode.com/users')
      .then((data) => {
        data.forEach((element) => {
          this.users.push(element);
        });
      });
  },
};
</script>

<style scoped>

.poster_and_subscribe {
    margin-top: 5em;
}

.poster__block {
     display: flex;
     width: 80%;
     margin: 0 auto;
     height: 33em;
 }

.poster__block-pic {
    background-image: url(https://i.ibb.co/P5VKv92/Layer-38.jpg);
    background-repeat: no-repeat;
    width: 48em;
}

.poster__block-pic > h3 {
    margin-top: 15%;
    margin-left: 5%;
    font-weight: 700;
    letter-spacing: 0.025em;
    font-size: 45px;
    color: #ffffff;
}

.poster__block-pic > h3 > span:first-of-type {
    color: #f16d7f;
}

.poster__block-pic > h3 > span:last-of-type {
    font-size: 32.2px;
}

.poster__block-desc {
    width: 30%;
    background-color: #222224;
    display: flex;
    flex-direction: column;
    color: #fbfbfb;
}

.poster__block-desc > div {
    width: 90%;
    margin: 0 auto;
    margin-top: 3em;
    display: flex;
    flex-direction: row;
}

.poster__block-desc > div > svg {
    width: 45px;
    height: 32px;
    color: #f16d7f;
    margin-right: 1em;
}

.poster__block-desc > div > div {
    display: flex;
    flex-direction: column;
}

.poster__block-desc h {
    font-size: 20px;
    line-height: 1.2;
    font-weight: 700;
    letter-spacing: 0.025em;
    color: #fbfbfb;
}

.poster__block-desc p {
    font-size: 14px;
    line-height: 24px;
    font-weight: 300;
    letter-spacing: 0.025em;
    color: #fbfbfb;
}

.subscribe__block {
    margin-top: 5em;
    background-image: url(https://i.ibb.co/wCBc1st/Layer-41.jpg);
    height: 27.375em;
    display: flex;
    flex-direction: row;
}

.reviews {
    display: flex;
    flex-direction: row;
    margin-left: 10%;
    margin-top: 7%;
}

.reviews > img {
    width: 5em;
    height: 5em;
    border-radius: 50%;
}

.review {
    display: flex;
    flex-direction: column;
    width: 25em;
    margin-left: 5%;
}

.review > p:first-of-type {
    font-size: 16px;
    line-height: 26px;
    font-weight: 400;
    font-style: italic;
    letter-spacing: 0.025em;
    color: #222224;
}

.review > p:nth-of-type(2) {
    margin-top: 1.2em;
    font-size: 16px;
    line-height: 26px;
    font-weight: 700;
    letter-spacing: 0.025em;
    color: #f16d7f;
}

.review >p:last-of-type {
    font-size: 12px;
    line-height: 14px;
    font-weight: 300;
    color: #222224;
}

.review-change_btns {
    margin-top: 2em;
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.review-change_btns > div {
    width: 2.5em;
    height: 4px;
    background-color: #fff;
    cursor: pointer;
}

.review-change_btns > div:hover {
    background-color: #f16d7f;
}

.vertical-line {
    width: 1px;
    height: 95%;
    background-color: #ffffff;
    justify-self: center;
    margin-top: auto;
    margin-bottom: auto;
}

.subscribe {
    display: flex;
    flex-direction: column;
    width: 25%;
    margin: 0 auto;
    margin-top: 9em;
    text-align: center;
}

.subscribe > p {
    font-size: 24px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 0.025em;
    color: #222224;
}

.subscribe > p > span {
    font-size: 14px;
    line-height: 24px;
    text-transform: none;
}

.subscribe-input_email {
    width: 100%;
    height: 46px;
    background-color: #e1e1e1;
    display: flex;
    margin-top: 2em;
    flex-direction: row;
    border-radius: 23.0px;
}

.subscribe-input_email > input{
    width: 100%;
    height: 100%;
    border-top-left-radius: 23px;
    border-bottom-left-radius: 23px;
    border: none;
    background-color: #e1e1e1;
    outline: none;
    padding: 0 5%;
    font-size: 14px;
    opacity: 0.67;
    font-weight: 400;
    letter-spacing: 0.025em;
    color: #222224;
}

.subscribe-input_email > div {
    width: 40%;
    height: 100%;
    background-color: #f16d7f;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 0.0px 23.0px 23.0px 0.0px;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0.025em;
    color: #ffffff;
}
</style>
