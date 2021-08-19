<template>
  <div>
    <div id="tablebox">
      <section class="container mx-auto font-mono">
        <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
          <div class="w-full overflow-x-auto">
            <table class="w-full">
              <thead>
                <tr
                  class="
                    text-md
                    font-semibold
                    tracking-wide
                    text-center text-gray-900
                    bg-gray-100
                    uppercase
                    border-b border-gray-600
                  "
                >
                  <th class="px-4 py-3" v-for="header in headers" :key="header">
                    {{ header.text }}
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white">
                <tr class="text-gray-700" v-for="unit in units" :key="unit">
                  <td class="px-4 py-3 text-ms font-semibold border">
                    {{ unit.id }}
                  </td>
                  <td
                    class="px-4 py-3 text-ms font-semibold border"
                    id="unit-name"
                  >
                    <router-link :to="'/units/' + unit.id">
                      <span>{{ unit.name }}</span>
                    </router-link>
                  </td>
                  <td class="px-4 py-3 text-ms font-semibold border">
                    {{ unit.age }}
                  </td>
                  <td class="px-4 py-3 text-ms font-semibold border">
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
      </section>
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
/* table,
th,
td {
  border: 1px solid gray;
  border-collapse: collapse;
} */

#tablebox {
  width: 100%;

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
    padding: 3px 5px;
    border-radius: 3px;

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
}
</style>
