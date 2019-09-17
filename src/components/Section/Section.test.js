import React from "react";
import { shallow } from "enzyme";

import Section from "./Section";

jest.mock("./Card/Card", () => "Card");

describe("Section", () => {
  let props;

  beforeEach(() => {
    props = {
      menus: [
        {
          id: "1519055545-89",
          title: "Petit-déjeuner 1 personne",
          description: "Assortiment de pains bio",
          price: "10.40"
        },
        {
          id: "1519055545-91",
          title: "Fromage blanc bio au miel",
          description: "",
          price: "10.40"
        }
      ],
      basket: [
        {
          id: "1519055545-90",
          quantity: 1
        },
        {
          id: "1519055545-91",
          quantity: 2
        }
      ],
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
            addMeal={[MockFunction]}
            basket={
              Array [
                Object {
                  "id": "1519055545-90",
                  "quantity": 1,
                },
                Object {
                  "id": "1519055545-91",
                  "quantity": 2,
                },
              ]
            }
            description="Assortiment de pains bio"
            id="1519055545-89"
            key="0"
            price="10.40"
            quantity={null}
            title="Petit-déjeuner 1 personne"
          />
          <Card
            addMeal={[MockFunction]}
            basket={
              Array [
                Object {
                  "id": "1519055545-90",
                  "quantity": 1,
                },
                Object {
                  "id": "1519055545-91",
                  "quantity": 2,
                },
              ]
            }
            description=""
            id="1519055545-91"
            key="1"
            price="10.40"
            quantity={2}
            title="Fromage blanc bio au miel"
          />
        </div>
      </section>
    `);
  });
});
