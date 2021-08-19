<template>
  <div>
    <div class="navbar">
      <router-link to="/">Home</router-link>
      <router-link to="/units">Units</router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navbar {
  overflow: hidden;
  background-color: #fff;
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 10px;
  height: 60px;

  & a {
    float: left;
    display: block;
    color: $blue-dark;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 22px;
    font-weight: bold;
    transition: all 300ms;

    &:hover {
      background: #eee;
      color: #6eb0ee;
      text-decoration: underline;
    }

    &.router-link-exact-active {
      color: $active-link-color;
      text-decoration: underline;
    }
  }
}
</style>
