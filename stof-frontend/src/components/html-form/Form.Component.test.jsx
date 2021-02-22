import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import FormComponent from "./Form.Component";

configure({ adapter: new Adapter() });

describe("Unit test suite for Form.Componentt", () => {
  it("Should have div tag with text as Welcome to forms", () => {
    const wrapper = shallow(<FormComponent></FormComponent>);
    expect(wrapper.find("div").text()).toBe("Welcome to forms");
  });
});
