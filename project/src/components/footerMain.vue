<template>
    <footer>
      <div class="footer__top">
      <div class="footer__left">
        <router-link to="/" class="logo">
          <img src="../assets/img/logo.png" alt="logo" class="logo__img">
          <h3 class="logo_text">BRAN<span class="logo_text logo_text_pink">D</span></h3>
        </router-link>
        <p class="footer__left-text">
          Objectively transition extensive data rather than cross functional solutions.
          Monotonectally syndicate multidisciplinary materials before go forward benefits.
          Intrinsicly syndicate an expanded array of processes and cross-unit partnerships.
          <br><br>
          Efficiently plagiarize 24/365 action items and focused infomediaries.
          Distinctively seize superior initiatives for wireless technologies. Dynamically optimize.
        </p>
      </div>
      <div class="footer__right">
        <ul class="footer__right-menu">
         <h3 class="usefulInfo-heading h-company">COMPANY</h3>
          <li v-for="elem in menuElemsOne" :key="elem.title">
              <router-link :to="`/${elem.path}`">{{elem.title}}
              </router-link>
          </li>
        </ul>
        <ul class="footer__right-menu">
                 <h3 class="usefulInfo-heading h-company">INFORMATION</h3>
          <li v-for="elem in menuElemsTwo" :key="elem.title">
              <router-link :to="`/${elem.path}`">{{elem.title}}
              </router-link>
          </li>
        </ul>
        <ul class="footer__right-menu">
                 <h3 class="usefulInfo-heading h-company">SHOP CATEGORY</h3>
          <li v-for="elem in menuElemsThree" :key="elem.title">
              <router-link :to="`/products/${elem.path}`">{{elem.title}}
              </router-link>
          </li>
        </ul>
      </div>
      </div>
      <div class="footer__bottom">
        <p class="footer__bottom-copyright">© 2020 Brand All Rights Reserved.</p>
        <div class="footer__bottom-social_media">
        <a href=""><img src="../assets/img/facebook-f-brands.svg" alt="#"></a>
        <a href=""><img src="../assets/img/twitter-brands.svg" alt="#"></a>
        <a href=""><img src="../assets/img/linkedin-in-brands.svg" alt="#"></a>
        <a href=""><img src="../assets/img/pinterest-p-brands.svg" alt="#"></a>
        <a href=""><img src="../assets/img/google-plus-g-brands.svg" alt="#"></a>
        </div>
      </div>
    </footer>
</template>

<script>
export default {
  name: 'footerMain',
  data() {
    return {
      menuElemsOne: [
        { title: 'Home', path: '/' },
        { title: 'Shop', path: 'shop' },
        { title: 'About', path: 'about' },
        { title: 'How It Works', path: 'howitworks' },
        { title: 'Contact', path: 'contact' },
      ],
      menuElemsTwo: [
        { title: 'Tearms & Condition', path: 'tearmsandcondition' },
        { title: 'Privacy Policy', path: 'privacypolicy' },
        { title: 'How to Buy', path: 'howtobuy' },
        { title: 'How to Sell', path: 'howtosell' },
        { title: 'Promotion', path: 'promotion' },
      ],
      menuElemsThree: [
        { title: 'Men', path: 'man' },
        { title: 'Women', path: 'woman' },
        { title: 'Child', path: 'kids' },
        { title: 'Apparel', path: 'accoseriese' },
        { title: 'Brows All', path: '/' },
      ],
    };
  },
};
</script>

<style scoped>
.logo {
  display: inherit;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
}

.logo__img {
  display: block;
  margin-right: 1em;
}

.logo_text {
  color: #222222;
  margin-top: 7px;
  font-size: 27px;
  font-weight: 300;
  line-height: 32px;
  text-transform: uppercase;
}

.logo_text_pink {
  color: #f16d7f;
  font-weight: 700;
  letter-spacing: 0.68px;
}

footer {
  margin-top: 8em;
  display: flex;
  flex-direction: column;
}

.footer__top {
  display: inherit;
  flex-direction: row;
}

.footer__left {
  display: inherit;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
}

.footer__left-text {
  margin-top: 1.1em;
  color: #898989;
  line-height: 1.5em
}

.footer__right {
  display: inherit;
  flex-direction: row;
  width: 50%;
}

.footer__right-menu {
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  list-style-type: none;
}

.footer__right-menu h3 {
  margin-bottom: 2em;
  font-weight: 700;
  letter-spacing: 0.025em;
  color: #f16d7f;
}

.footer__right-menu li a {
  color: inherit;
  text-decoration: none;
  font-weight: 700;
  line-height: 2.625em;
  color: #898989;
}

.footer__bottom {
  display: inherit;
  align-items: center;
  background-color: #e6e6e6;
  margin-top: 5.625em;
  width: 100%;
  height: 5em;
}

.footer__bottom-copyright {
  margin-left: auto;
  color: #7a7a7a;
  font-weight: 700;
  width: 60%;
}

.footer__bottom-social_media {
  display: inherit;
  justify-content: space-between;
  width: 20%;
  margin-right: auto;
}

.footer__bottom-social_media a {
  display: inherit;
  align-items: center;
  justify-content: center;
  height: 2em;
  width: 2em;
  background-color: #ffffff;
}

.footer__bottom-social_media a img {
  width: 1em;
  height: 1em;
}
</style>
