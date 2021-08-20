<template>
  <div style="display: flex; justify-content: center; flex-direction: column">
    <div class="unit-section-title mb-3 mt-6 text-2xl flex flex-start">
      <b class="ml-2">{{ unit?.name || "Empty" }} Details</b>
    </div>
    <div
      class="flex flex-start ml-2 text-2xl cursor-pointer"
      @click="$router.back()"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-arrow-left my-auto mr-2"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
        />
      </svg>
      <span class="text-xl my-2">Go Back</span>
    </div>

    <section class="container mx-auto font-mono">
      <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
        <div class="w-full overflow-x-auto">
          <table class="w-full">
            <tbody class="bg-white">
              <tr class="text-gray-700">
                <td class="px-4 py-3 text-ms border">id</td>
                <td class="px-4 py-3 text-ms font-semibold border">
                  <span>{{ unit.id }}</span>
                </td>
              </tr>
              <tr class="text-gray-700">
                <td class="px-4 py-3 text-ms border">Name</td>
                <td class="px-4 py-3 text-ms font-semibold border">
                  <span>{{ unit.name }}</span>
                </td>
              </tr>
              <tr class="text-gray-700">
                <td class="px-4 py-3 text-ms border">Description</td>
                <td class="px-4 py-3 text-ms font-semibold border">
                  <span>{{ unit.description || "-" }}</span>
                </td>
              </tr>
              <tr class="text-gray-700">
                <td class="px-4 py-3 text-ms border">Min. Requirement Age</td>
                <td class="px-4 py-3 text-ms font-semibold border">
                  <span>{{ unit.age }}</span>
                </td>
              </tr>
              <tr class="text-gray-700">
                <td class="px-4 py-3 text-ms border">Wood Cost</td>
                <td class="px-4 py-3 text-ms font-semibold border">
                  <span>{{ unit?.cost?.Wood || "-" }}</span>
                </td>
              </tr>
              <tr class="text-gray-700">
                <td class="px-4 py-3 text-ms border">Food Cost</td>
                <td class="px-4 py-3 text-ms font-semibold border">
                  <span>{{ unit?.cost?.Food || "-" }}</span>
                </td>
              </tr>
              <tr class="text-gray-700">
                <td class="px-4 py-3 text-ms border">Gold Cost</td>
                <td class="px-4 py-3 text-ms font-semibold border">
                  <span>{{ unit?.cost?.Gold || "-" }}</span>
                </td>
              </tr>
              <tr class="text-gray-700">
                <td class="px-4 py-3 text-ms border">Build Time</td>
                <td class="px-4 py-3 text-ms font-semibold border">
                  <span>{{ unit.build_time || "-" }}</span>
                </td>
              </tr>
              <tr class="text-gray-700">
                <td class="px-4 py-3 text-ms border">Reload Time</td>
                <td class="px-4 py-3 text-ms font-semibold border">
                  <span>{{ unit.reload_time || "-" }}</span>
                </td>
              </tr>
              <tr class="text-gray-700">
                <td class="px-4 py-3 text-ms border">Hit Points</td>
                <td class="px-4 py-3 text-ms font-semibold border">
                  <span>{{ unit.hit_points || "-" }}</span>
                </td>
              </tr>
              <tr class="text-gray-700">
                <td class="px-4 py-3 text-ms border">Attack</td>
                <td class="px-4 py-3 text-ms font-semibold border">
                  <span>{{ unit.attack || "-" }}</span>
                </td>
              </tr>
              <tr class="text-gray-700">
                <td class="px-4 py-3 text-ms border">Accuracy</td>
                <td class="px-4 py-3 text-ms font-semibold border">
                  <span>{{ unit.accuracy || "-" }}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
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
