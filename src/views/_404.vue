<template>
  <div class="home">
    <div id="_404">
      <div class="text-2xl">Page not found!</div>
      <GoHome></GoHome>
    </div>
  </div>
</template>

<script>
import GoHome from "@/components/shared/GoHome";
export default {
  name: "_404",
  components: {
    GoHome,
  },
};
</script>

<style lang="scss">
#_404 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: $h-full;
}
</style>
