import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import NotFoundComponent from "./Not.Found.Component";

configure({ adapter: new Adapter() });

describe("Unit test suite for Not.Found.Component", () => {
  it("Should render one jumbotron", () => {
    const wrapper = shallow(<NotFoundComponent></NotFoundComponent>);
    expect(wrapper.find("#main-jumbotron")).toHaveLength(1);
  });

  it("Should render header text as 404 - Page Not Found", () => {
    const wrapper = shallow(<NotFoundComponent></NotFoundComponent>);
    expect(wrapper.find("h1").text()).toBe("404 - Page Not Found");
  });
});
