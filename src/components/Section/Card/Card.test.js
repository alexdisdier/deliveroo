import React from "react";
import { shallow } from "enzyme";

import Card from "./Card";

describe("Card", () => {
  let props;

  beforeEach(() => {
    props = {
      title: "title",
      description: "description",
      price: "10",
      id: "1",
      addMeal: jest.fn(),
      picture: "picture",
      popular: true,
      quantity: 2
    };
  });

  it("renders the Card correctly", () => {
    const wrapper = shallow(<Card {...props} />);
    expect(wrapper).toMatchInlineSnapshot(`
<div
  className="card card-active"
  onClick={[Function]}
>
  <div
    className="card-content"
  >
    <div
      className="card-quantity"
    >
      2
      x
    </div>
    <h6>
      title
    </h6>
    <LinesEllipsis
      basedOn="letters"
      className="card-description"
      component="div"
      ellipsis="..."
      maxLine="2"
      onReflow={[Function]}
      text="description"
      trimRight={true}
    />
    <span
      className="card-price"
    >
      10
       €
    </span>
    <span>
      <span
        className="card-popular"
      >
        <svg
          height="12"
          width="12"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 10.08l-3.24 1.8c-.36.2-.6.03-.54-.38l.62-3.84-2.62-2.6c-.3-.3-.2-.54.22-.54h3.82L5.76.34c.13-.38.37-.38.5 0L7.9 4.52h3.66c.42 0 .52.23.22.53l-2.62 2.6.62 3.85c.07.4-.17.58-.54.37L6 10.07z"
            fill="#FF8100"
            fillRule="evenodd"
          />
        </svg>
         populaire
      </span>
    </span>
  </div>
  <div
    className="card-img"
    style={
      Object {
        "backgroundImage": "url(picture)",
      }
    }
  />
</div>
`);
  });
});
