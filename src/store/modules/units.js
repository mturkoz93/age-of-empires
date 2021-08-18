import ageOfEmpires from "../../mocks/age-of-empires-units.json";

export default {
  namespaced: true,

  state: () => ({
    units: [],
  }),

  getters: {
    getUnits: (state) => state.units,
  },

  mutations: {
    SET_UNITS(state, data) {
      state.units = data;
    },
  },

  actions: {
    async listUnits({ commit }, age) {
      if (age === "All") {
        commit("SET_UNITS", ageOfEmpires.units);
        return true;
      }

      const units = ageOfEmpires.units.filter((unit) => unit.age === age);
      commit("SET_UNITS", units);
      return true;
    },
  },
};
