<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/contact">Contact</router-link> |
    <router-link to="/portfolio">Portfolio</router-link>
  </div>
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  overflow-x: hidden;
  height: 100%;
  scroll-behavior: smooth;
}

body {
  font-family: "Poppins", sans-serif;
  font-size: 15px;
  color: #fff;
  font-weight: 500;
  line-height: 1.6;
  position: relative;
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
  background-color: #111;
  display: flex;
  align-items: center;
  justify-content: center;
}

.poppins-font {
  font-family: "Poppins", sans-serif;
}

.open-sans-font {
  font-family: "Open Sans", sans-serif;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #ffffff;

    &.router-link-exact-active {
      color: #6957af;
    }
  }
}

.route-enter-from,
.route-leave-to{
  opacity: 0;
}

.route-enter-active,
.route-leave-active {
  transition: opacity 0.2s linear;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
}
</style>
