import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import HomeComponent from "./Home.Component";

configure({ adapter: new Adapter() });

describe("Unit test suite for Home.Component", () => {
  it("Should have div tag with text as Welcome to home", () => {
    const wrapper = shallow(<HomeComponent></HomeComponent>);
    expect(wrapper.find("div").text()).toBe("Welcome to home");
  });
});
