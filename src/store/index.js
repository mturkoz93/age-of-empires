// store.ts
import { createStore } from "vuex";
import units from "../store/modules/units";

const store = createStore({
  state: {
    name: "Age of Empires",
  },
  modules: {
    units,
  },
});

export default store;
