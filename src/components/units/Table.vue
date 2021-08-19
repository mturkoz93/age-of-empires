<template>
  <div style="display: flex; justify-content: center">
    <div id="tablebox">
      <div>
        <table style="width: 100%">
          <thead>
            <tr>
              <th v-for="header in headers" :key="header">{{ header.text }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="unit in units" :key="unit">
              <td>{{ unit.id }}</td>
              <td id="unit-name">
                <router-link :to="'/units/' + unit.id">
                  <span>{{ unit.name }}</span>
                </router-link>
              </td>
              <td>{{ unit.age }}</td>
              <td>
                <span v-for="(value, key, index) in unit.cost" :key="value">
                  {{ key }}: {{ value }}
                  <span v-if="index !== Object.keys(unit.cost).length - 1"
                    >,
                  </span>
                </span>
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
  font-size: 22px;

  table {
    thead > tr {
      background: $blue;
      color: white;
    }
  }
}

#unit-name {
  font-weight: bold;
  color: $blue;
  padding: 7px;

  span {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: 3px 5px;
    border-radius: 3px;

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
}
</style>
