import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";

configure({ adapter: new Adapter() });

describe("Unit test suite for App component", () => {
  it("Should mount successfully", () => {
    const wrapper = shallow(<App></App>);
    expect(wrapper.find(".App")).toBeTruthy();
  });
});
