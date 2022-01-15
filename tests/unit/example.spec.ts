import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import About from "@/components/Sections/About.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(About, {
      props: { msg },
    });
    expect(wrapper.text()).to.include(msg);
  });
});
