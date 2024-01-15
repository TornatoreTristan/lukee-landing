<template>
  <nav>
    <HambugerMenuIcon @toggle="toggleMenu" class="nav-icon" />
    <div class="main-nav" v-show="menuVisible">
      <div class="content-nav">
        <!-- <ul>
          <li><a href="#">Catalogue</a></li>
          <li><a href="#">Ressources</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">À propos</a></li>
        </ul> -->
        <div class="cta-header">
          <h2>Accédez à Lukee dès maintenant</h2>
          <a href="https://app.lukee.io/login" class="cta-ternary"
            >Se connecter</a
          >
          <a href="https://app.lukee.io/signup" class="cta-primary"
            >S'inscrire gratuitement</a
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import HambugerMenuIcon from "./HamburgerMenuIcon.vue";

export default {
  components: {
    HambugerMenuIcon,
  },
  data() {
    return {
      menuVisible: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
    },
  },
};
</script>

<style>
.nav-icon {
  z-index: 1;
}
.content-nav {
  padding: 3rem;
}
.content-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.content-nav ul li {
  margin-bottom: 2rem;
}
.content-nav ul li a {
  font-size: 2rem;
  text-decoration: none;
}
.main-nav {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  top: 0;
  right: 0;
  z-index: 1;
  height: 100vh;
  width: 100vw;
  border: 4px solid #1a1f30;
  border-radius: 25px;
  color: #fff;
  background-image: url("/banniere-lukee.svg");
  background-repeat: no-repeat;
  background-size: cover;
}
.cta-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
}
.cta-ternary {
  background-color: #fff;
  color: #1a1f30;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: bold;
}
</style>
