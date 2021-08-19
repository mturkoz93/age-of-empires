<template>
  <div style="width: 100%">
    <div class="flex justify-start items-center">
      <div style="flex: 1" class="flex justify-start mr-3 w-50">
        <label id="check-box" class="inline-flex items-center my-3">
          <input
            v-model="checkCost"
            type="checkbox"
            class="form-checkbox h-5 w-5 text-orange-600"
          /><span class="ml-2 text-gray-700 text-xl">{{ text }}</span>
        </label>
      </div>

      <div style="flex: 1" class="flex justify-start mr-6">
        <input
          class="slider"
          type="range"
          min="0"
          max="200"
          :disabled="!checkCost"
          v-model="rangeValue"
        />
      </div>

      <div style="flex: 9" class="flex justify-start">
        <span style="font-size: 22px">{{ rangeValue }} - 200</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      checkCost: false,
      rangeValue: 0,
    };
  },
  watch: {
    rangeValue(val) {
      this.$emit("changeRange", {
        cost: this.value,
        range: +val,
      });
    },
    checkCost(val) {
      if (val === false) {
        this.rangeValue = 0;
      }
    },
  },
};
</script>

<style lang="scss">
#check-box {
  input {
    cursor: pointer;
  }
}

input[type="range"] {
  cursor: pointer;
}
</style>
