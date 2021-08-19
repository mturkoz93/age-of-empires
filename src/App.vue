<template>
  <div>
    <Navbar />
  </div>

  <div class="main">
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/shared/Navbar";
export default {
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Alice&display=swap");
* {
  font-family: "Alice", serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

$background-color: #eee;

.main {
  margin-top: 60px;
  background: $background-color;
  min-height: $h-full;
  height: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
}
</style>
