<template>
  <div>
    <button
      class="
        hover:scale-110
        focus:outline-none
        flex
        justify-center
        px-4
        py-2
        font-bold
        text-xl
        cursor-pointer
        hover:bg-gray-200
        bg-gray-100
        border
        duration-200
        ease-in-out
        border-gray-600
        transition
      "
      :class="{ active: activeBtn === value }"
      @click="filterMethod(value)"
    >
      <div class="flex leading-5">{{ text }}</div>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "Click",
    },
    value: {
      type: String,
      default: "button",
    },
    filterMethod: { type: Function },
    activeBtn: { type: String, default: "" },
  },
};
</script>

<style lang="scss" scoped>
button {
  color: $blue;
}

.active {
  background-color: $blue;
  color: white;

  &:hover {
    background-color: $blue-light;
    transition: all 300ms;
  }
}
</style>
