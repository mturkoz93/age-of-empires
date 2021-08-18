<template>
  <div style="display: flex; justify-content: center">
    <div id="tablebox">
      <table style="width: 100%">
        <tr>
          <th v-for="header in headers" :key="header">{{ header.text }}</th>
        </tr>
        <tr v-for="unit in units" :key="unit">
          <td>{{ unit.id }}</td>
          <td>{{ unit.name }}</td>
          <td>{{ unit.age }}</td>
          <td>
            <span v-for="(value, key, index) in unit.cost" :key="value">
              {{ key }}: {{ value }}
              <span v-if="index !== Object.keys(unit.cost).length - 1">, </span>
            </span>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    units: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  data() {
    return {
      headers: [
        { text: "id" },
        { text: "name" },
        { text: "age" },
        { text: "costs" },
      ],
    };
  },
};
</script>
<style lang="scss">
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

  table > tr {
    &:first-child {
      background: rgb(0, 110, 255);
      color: white;
    }
  }
}
</style>
