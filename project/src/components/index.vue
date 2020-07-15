<template>
<div>
  <div class="promo">
    <div class="promo-text"><span>THE BRAND</span><br><span>OF LUXERIOUS</span>
    <span> FASHION</span></div>
  </div>
  <div class="offers">
    <div class="offers__left">
      <router-link to="man" class="offers__poster"><div><h3>hOT dEAL <br><span>FOR MEN</span></h3>
      </div></router-link>
      <router-link to="accoseriese" class="offers__poster"><div>
        <h3>LUXIROUS & trendy <br><span>ACCESORIES</span></h3>
      </div></router-link>
    </div>
    <div class="offers__right">
      <router-link to="women" class="offers__poster"><div>
        <h3>30% offer <br><span>women</span></h3></div></router-link>
      <router-link to="kids" class="offers__poster">
      <div><h3>new arrivals <br><span>FOR kids</span></h3></div></router-link>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'index',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.promo {
  display: flex;
  align-items: center;
  background-image: url(https://i.ibb.co/TRDTJD2/promo-back.jpg);
  background-color: #e8e8e8;
  background-repeat: no-repeat;
  width: 100%;
  height: 40em;
}

.promo-text {
  font-weight: 900;
  color: #222222;
  letter-spacing: 0.025em;
  line-height: 1.2;
  margin-left: 10%;
  border-left: 12px solid #f16d7f;
  height: 6.2em;
  padding-left: 12px;
}

.promo-text span:nth-child(1) {
  display: inline-block;
  font-size: 3.750em;
  margin-top: -12px;
}

.promo-text span:nth-child(3) {
  font-size: 2.5em;
}

.promo-text span:last-child {
  font-size: 2.5em;
  color: #f16d7f;
}

.offers {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 6em;
  width: 95%;
}

.offers h3 {
  text-transform: uppercase;
  font-weight: 900;
  color: #222222;
  letter-spacing: 0.025em;
}

.offers h3 span {
  color: #f16d7f;
  font-size: 1.5em;
}

.offers__poster {
  text-decoration: none;
}

.offers__left, .offers__right {
  display: inherit;
  flex-direction: column;
  width: 45%;
  margin: 0 auto;
}

.offers__left .offers__poster:first-of-type {
  background-image: url(https://i.ibb.co/0f6BJvf/Layer-30.jpg);
  background-repeat: no-repeat;
  height: 33.8em;
}

.offers__left .offers__poster:last-of-type {
  background-image: url(https://i.ibb.co/VV9Vcmz/Layer-37.jpg);
  background-repeat: no-repeat;
  background-color: #dadad2;
  background-position: 124%;
  height: 16em;
  margin-top: 1.2em;
}

.offers__right .offers__poster:first-of-type  {
  background-image: url(https://i.ibb.co/gM8ZrQv/Layer-32.jpg);
  background-repeat: no-repeat;
  height: 16em;
}

.offers__right .offers__poster:last-of-type {
  background-image: url(https://i.ibb.co/4ptQDkq/Layer-31.jpg);
  background-repeat: no-repeat;
  height: 33.8em;
  margin-top: 1.2em;
}

.offers__poster div {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 2em;
  background-color: #ffffff;
  width: 30%;
}

.offers__left .offers__poster:last-of-type div {
  width: 45%;
}
</style>
