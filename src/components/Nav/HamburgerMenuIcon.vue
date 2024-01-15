<template>
  <div class="menu-container" @click="toggleMenu">
    <div class="bar1" :class="{ change: menuVisible }"></div>
    <div class="bar2" :class="{ change: menuVisible }"></div>
    <div class="bar3" :class="{ change: menuVisible }"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuVisible: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
      this.$emit("toggle");
    },
  },
};
</script>

<style scoped>
.menu-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 35px;
  height: 26px;
  cursor: pointer;
  background-color: #fff;
  padding: 0 1rem;
  border-radius: 5px;
  z-index: 2;
}

.menu-container .bar1,
.menu-container .bar2,
.menu-container .bar3 {
  width: 35px;
  height: 3px;
  background-color: #333;
  transition: 0.3s;
  border-radius: 2px;
}

.menu-container .bar1.change {
  transform: rotate(-45deg) translate(-6px, 6px);
}

.menu-container .bar2.change {
  opacity: 0;
}

.menu-container .bar3.change {
  transform: rotate(45deg) translate(-6px, -6px);
}
</style>
