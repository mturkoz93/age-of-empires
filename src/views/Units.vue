<template>
  <div class="units" style="width: 70%">
    <div class="p-3">
      <GroupFilterButtons
        style="display: flex; justify-content: flex-start"
        class="mb-3"
        @listUnits="listUnits"
      ></GroupFilterButtons>
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
import GroupFilterButtons from "@/components/units/GroupFilterButtons.vue";
import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    Table,
    GroupFilterButtons,
  },
  data() {
    return {
      loadingUnit: false,
    };
  },
  computed: {
    ...mapGetters({
      units: "units/getUnits",
    }),
  },
  created() {
    this.listUnits("All");
  },
  methods: {
    listUnits(age) {
      this.loadingUnit = true;
      setTimeout(() => {
        this.$store.dispatch("units/listUnits", age).then(() => {
          this.loadingUnit = false;
        });
      }, 500);
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
