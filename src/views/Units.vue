<template>
  <div class="units" style="width: 70%">
    <div class="p-3">
      <AgeFilterButtons
        style="display: flex; justify-content: flex-start"
        class="mb-3"
        @listUnits="filterAge"
      ></AgeFilterButtons>

      <CostFilterOptions
        style="display: flex; justify-content: flex-start"
        class="mb-3"
        @changeRange="filterCost"
        :age="selectedAge"
      ></CostFilterOptions>

      <div class="mb-3 text-2xl flex justify-start">
        Units({{ units.length }})
      </div>

      <Table
        v-show="units && units.length && !loadingUnit"
        class="mb-3"
        :units="units"
      />
    </div>
    <div
      v-if="units && units.length === 0 && loadingUnit === false"
      style="font-size: 35px"
    >
      No Unit!
    </div>
    <div v-if="loadingUnit" style="font-size: 22px">Loading..</div>
  </div>
</template>

<script>
import Table from "@/components/units/Table.vue";
import AgeFilterButtons from "@/components/units/ages/AgeFilterButtons.vue";
import CostFilterOptions from "@/components/units/costs/CostFilterOptions.vue";
import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    Table,
    AgeFilterButtons,
    CostFilterOptions,
  },
  data() {
    return {
      loadingUnit: false,
      selectedAge: "All",
      costFilters: {
        Wood: 0,
        Food: 0,
        Gold: 0,
      },
    };
  },
  computed: {
    ...mapGetters({
      units: "units/getUnits",
    }),
  },
  created() {
    this.listUnits(this.selectedAge, this.costFilters);
  },
  methods: {
    listUnits(age, costs) {
      this.loadingUnit = true;
      setTimeout(() => {
        this.$store.dispatch("units/listUnits", { age, costs }).then(() => {
          this.loadingUnit = false;
        });
      }, 500);
    },
    resetCosts() {
      this.costFilters = {
        Wood: 0,
        Food: 0,
        Gold: 0,
      };
    },
    filterAge(age) {
      if (age === "All") {
        this.resetCosts();
      }
      this.selectedAge = age;
      this.listUnits(
        this.selectedAge,
        JSON.parse(JSON.stringify(this.costFilters))
      );
    },
    filterCost(data) {
      /* this.costFilters.filter((filter) => filter.title === data.cost)[0].value =
        data.range; */
      this.costFilters[data.cost] = data.range;
      this.listUnits(
        this.selectedAge,
        JSON.parse(JSON.stringify(this.costFilters))
      );
    },
  },
};
</script>

<style lang="scss">
.units {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
</style>
