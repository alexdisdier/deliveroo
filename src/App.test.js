import React from "react";
import { shallow } from "enzyme";

import App from "./App";

jest.mock("./components/Header/Header", () => "Header");
jest.mock("./components/Banner/Banner", () => "Banner");
jest.mock("./components/Menu/Menu", () => "Menu");
jest.mock("./components/Section/Section", () => "Section");
jest.mock("./components/Footer/Footer", () => "Footer");

describe("App", () => {
  let props;

  beforeEach(() => {
    props = {
      scrollToTop: jest.fn()
    };
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
