import { shallowMount, mount } from "@vue/test-utils";
import FilterButton from "@/components/units/ages/FilterButton.vue";
import CostOption from "@/components/units/costs/CostOption.vue";

describe("Age of Empires Test", () => {
  describe("Ages Filter Buttons", () => {
    const filters = ["All", "Dark", "Feudal", "Imperial"];

    filters.forEach((element) => {
      it(element, () => {
        const text = element;
        const value = text;
        const activeBtn = text;
        const wrapper = shallowMount(FilterButton, {
          props: { text, value, activeBtn },
        });
        expect(wrapper.text()).toMatch(text, value, activeBtn);
      });
    });
  });

  describe("Costs Filter Buttons", () => {
    const costOptions = ["Wood", "Food", "Gold"];

    costOptions.forEach((element) => {
      it(element, () => {
        const text = element;
        const value = text;
        const wrapper = shallowMount(CostOption, {
          props: { text, value },
        });
        expect(wrapper.text()).toMatch(text, value);
      });
    });

    it("emits an data", async () => {
      const wrapper = mount(CostOption);

      wrapper.vm.$emit("changeRange", {
        cost: "Wood",
        range: 45,
      });

      await wrapper.vm.$nextTick(); // Wait until $emits have been handled

      expect(wrapper.emitted().changeRange).toBeTruthy();
      expect(wrapper.emitted().changeRange.length).toBe(1);
      expect(wrapper.emitted().changeRange[0][0].range).toEqual(45);
    });

    it("it sets the range data", () => {
      const range = 33;
      const wrapper = mount(CostOption);

      wrapper.setData({ rangeValue: range });
      expect(wrapper.vm.rangeValue).toBe(range);
    });

    it("it checked the checkbox input", async () => {
      const wrapper = mount(CostOption);

      await wrapper.vm.$nextTick(); // Wait until $emits have been handled

      const inputCheckbox = wrapper.find('input[type="checkbox"]');

      inputCheckbox.setChecked(true);
      expect(inputCheckbox).toBeTruthy();
    });

    it("it sets the value to slider", async () => {
      const wrapper = mount(CostOption);

      await wrapper.vm.$nextTick(); // Wait until $emits have been handled

      const inputRange = wrapper.find('input[type="range"]');

      const range = "180";
      inputRange.setValue(range);
      inputRange.element.value = range;

      expect(inputRange.element.value).toBe(range);
    });
  });
});
