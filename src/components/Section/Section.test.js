import React from "react";
import { shallow } from "enzyme";

import Section from "./Section";

jest.mock("./Card/Card", () => "Card");

describe("Section", () => {
  let props;

  beforeEach(() => {
    props = {
      menus: ["menu1", "menu2"],
      basket: ["item1", "item2"],
      addMeal: jest.fn(),
      anchor: "anchor",
      sectionTitle: "sectionTitle"
    };
  });

  it("renders the Section correctly", () => {
    const wrapper = shallow(<Section {...props} />);
    expect(wrapper).toMatchInlineSnapshot(`
      <section
        id="anchor"
      >
        <h3>
          sectionTitle
        </h3>
        <div
          className="cards-container"
        >
          <Card
            0="m"
            1="e"
            2="n"
            3="u"
            4="1"
            addMeal={[MockFunction]}
            basket={
              Array [
                "item1",
                "item2",
              ]
            }
            key="0"
          />
          <Card
            0="m"
            1="e"
            2="n"
            3="u"
            4="2"
            addMeal={[MockFunction]}
            basket={
              Array [
                "item1",
                "item2",
              ]
            }
            key="1"
          />
        </div>
      </section>
    `);
  });
});
