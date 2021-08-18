<template>
  <div class="home">
    <TailwindExample msg="Welcome to Tailwindcss" />
  </div>
</template>

<script>
// @ is an alias to /src
import TailwindExample from "@/components/TailwindExample.vue";

export default {
  name: "Home",
  components: {
    TailwindExample,
  },
};
</script>
