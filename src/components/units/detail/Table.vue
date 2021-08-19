<template>
  <div style="display: flex; justify-content: center; flex-direction: column">
    <div
      class="unit-section-title mb-3 mt-6 text-2xl"
      style="display: flex; justify-content: flex-start"
    >
      <b class="ml-2">{{ unit?.name || "Empty" }} Details</b>
    </div>
    <div id="tablebox" v-if="unit">
      <div>
        <table style="width: 100%">
          <tbody>
            <tr>
              <td>id</td>
              <td>
                <span>{{ unit.id }}</span>
              </td>
            </tr>
            <tr>
              <td>Name</td>
              <td>
                <span>{{ unit.name }}</span>
              </td>
            </tr>
            <tr>
              <td>Description</td>
              <td>
                <span>{{ unit.description || "-" }}</span>
              </td>
            </tr>
            <tr>
              <td>Min. Requirement Age</td>
              <td>
                <span>{{ unit.age }}</span>
              </td>
            </tr>
            <tr>
              <td>Wood Cost</td>
              <td>
                <span>{{ unit?.cost?.Wood || "-" }}</span>
              </td>
            </tr>
            <tr>
              <td>Food Cost</td>
              <td>
                <span>{{ unit?.cost?.Food || "-" }}</span>
              </td>
            </tr>
            <tr>
              <td>Gold Cost</td>
              <td>
                <span>{{ unit?.cost?.Gold || "-" }}</span>
              </td>
            </tr>
            <tr>
              <td>Build Time</td>
              <td>
                <span>{{ unit.build_time || "-" }}</span>
              </td>
            </tr>
            <tr>
              <td>Reload Time</td>
              <td>
                <span>{{ unit.reload_time || "-" }}</span>
              </td>
            </tr>
            <tr>
              <td>Hit Points</td>
              <td>
                <span>{{ unit.hit_points || "-" }}</span>
              </td>
            </tr>
            <tr>
              <td>Attack</td>
              <td>
                <span>{{ unit.attack || "-" }}</span>
              </td>
            </tr>
            <tr>
              <td>Accuracy</td>
              <td>
                <span>{{ unit.accuracy || "-" }}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    unit: {
      type: Object,
      required: true,
      default: function () {
        return {};
      },
    },
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
table,
th,
td {
  border: 1px solid black;
  border-collapse: collapse;
}

#tablebox {
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 22px;

  table {
    tbody > tr {
      td:nth-child(2) {
        font-weight: bold;
        color: $blue;
        padding: 7px;

        span {
          box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
          padding: 3px 5px;
          border-radius: 3px;
        }
      }
    }
  }
}
</style>
