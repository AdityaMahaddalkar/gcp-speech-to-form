import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PDFComponent from "./PDF.Component";

configure({ adapter: new Adapter() });

describe("Unit test suite for PDF.Componentt", () => {
  it("Should have div tag with text as Welcome to PDF", () => {
    const wrapper = shallow(<PDFComponent></PDFComponent>);
    expect(wrapper.find("div").text()).toBe("Welcome to PDF");
  });
});
