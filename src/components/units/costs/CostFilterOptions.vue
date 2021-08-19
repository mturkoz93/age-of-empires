<template>
  <div>
    <div class="flex flex-col w-full overflow-x-auto">
      <div class="unit-section-title mt-6 text-2xl flex justify-start">
        Costs
      </div>
      <div class="flex justify-start items-baseline flex-wrap pl-2">
        <div class="flex flex-col items-start w-screen">
          <CostOption
            v-for="option in costOptions"
            :key="option"
            @changeRange="changeRange"
            :text="option.text"
            :value="option.value"
          ></CostOption>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CostOption from "@/components/units/costs/CostOption";
export default {
  components: {
    CostOption,
  },
  data() {
    return {
      costOptions: [
        {
          text: "Wood",
          value: "Wood",
        },
        {
          text: "Food",
          value: "Food",
        },
        {
          text: "Gold",
          value: "Gold",
        },
      ],
    };
  },
  methods: {
    changeRange(data) {
      this.$emit("changeRange", data);
    },
  },
};
</script>
