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
    async listUnits({ commit }, payload) {
      const age = payload.age;
      const costs = payload.costs;

      if (age === "All") {
        const units = ageOfEmpires.units.filter(
          (unit) =>
            (costs.Wood ? costs.Wood < +unit?.cost?.Wood : true) &&
            (costs.Food ? costs.Food < +unit?.cost?.Food : true) &&
            (costs.Gold ? costs.Gold < +unit?.cost?.Gold : true)
        );
        commit("SET_UNITS", units);
        return true;
      }

      const units = ageOfEmpires.units.filter(
        (unit) =>
          unit.age === age &&
          (costs.Wood ? costs.Wood < +unit?.cost?.Wood : true) &&
          (costs.Food ? costs.Food < +unit?.cost?.Food : true) &&
          (costs.Gold ? costs.Gold < +unit?.cost?.Gold : true)
      );

      commit("SET_UNITS", units);
      return true;
    },
  },
};
