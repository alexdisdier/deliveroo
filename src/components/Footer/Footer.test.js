import React from "react";
import { shallow } from "enzyme";

import Footer from "./Footer";

describe("Footer", () => {
  let props;

  beforeEach(() => {
    props = {
      scrollToTop: jest.fn()
    };
  });

  it("renders the footer correctly", () => {
    const wrapper = shallow(<Footer {...props} />);
    expect(wrapper).toMatchInlineSnapshot(`
      <footer>
        <a
          href="#0"
          onClick={[MockFunction]}
        >
          Haut de la page
        </a>
      </footer>
    `);
  });

  it("scrolls when clicked on haut de la page", () => {
    const wrapper = shallow(<Footer {...props} />);

    wrapper.find("a").simulate("click");

    expect(props.scrollToTop).toHaveBeenCalledTimes(1);
  });
});
