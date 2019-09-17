import React from "react";
// import ReactDom from "react-dom";
import { mount, shallow } from "enzyme";
// import { act } from "react-dom/test-utils";

import App from "./App";

// jest.mock("setIsError", () => ({
//   setIsError: jest.fn()
// }));
// jest.mock("setLoading", () => ({
//   setLoading: jest.fn()
// }));
// jest.mock("setRestaurant", () => ({
//   setRestaurant: jest.fn()
// }));
// jest.mock("setMenu", () => ({
//   setMenu: jest.fn()
// }));

jest.mock("./components/Header/Header", () => "Header");
jest.mock("./components/Banner/Banner", () => "Banner");
jest.mock("./components/Menu/Menu", () => "Menu");
jest.mock("./components/Section/Section", () => "Section");
jest.mock("./components/Footer/Footer", () => "Footer");

describe("App", () => {
  let props;
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, "useState");
  useStateSpy.mockImplementation(init => [init, setState]);

  beforeEach(() => {
    props = {
      scrollToTop: jest.fn()
    };
  });

  it("should fetch data on mount", () => {
    const wrapper = shallow(<App />);
    // act(() => {
    //   wrapper = ReactDom.render(<App {...props} />);
    // });
    // expect(wrapper.text()).toBe("");
  });

  it("renders the App correctly", () => {
    const wrapper = shallow(<App {...props} />);
    expect(wrapper).toMatchInlineSnapshot(`
<div
  className="App"
>
  <Header />
  <Banner
    restaurant={Object {}}
  />
  <Menu
    basket={Array []}
    decQuantity={[Function]}
    decTip={[Function]}
    incQuantity={[Function]}
    incTip={[Function]}
    tip={0}
  />
  <main
    className="container"
  />
  <Footer
    scrollToTop={[Function]}
  />
</div>
`);
  });
});
