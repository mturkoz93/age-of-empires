<template>
  <div class="units" style="width: 70%">
    <div class="p-3 mt-6">
      <Table v-show="unit" class="mb-3" :unit="unit" />
    </div>
    <div v-if="!unit" style="font-size: 22px">Not Found Unit!</div>
  </div>
</template>

<script>
import Table from "@/components/units/detail/Table.vue";

export default {
  name: "Home",
  components: {
    Table,
  },
  data() {
    return {
      unit: {},
    };
  },
  computed: {
    unitId() {
      return +this.$route.params.unit_id;
    },
  },
  created() {
    this.listUnitDetails(this.unitId);
  },
  methods: {
    listUnitDetails(unitId) {
      this.$store.dispatch("units/listUnitDetails", unitId).then((data) => {
        this.unit = data;
      });
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
