<template>
  <div class="home">
    <div id="wallpaper">
      <img :src="require('@/assets/wallpaper.jpg')" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="scss">
$hfull: calc(100vh - 60px);

#wallpaper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: $hfull;

  img {
    height: 360px;
    width: 640px;
    border-radius: 5px;
    transition: all 700ms;
    object-fit: cover;

    &:hover {
      height: 360px * (3/2);
      width: 640px * (3/2);
      transition: all 700ms;
    }
  }
}
</style>
