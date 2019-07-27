import React from "react";
import { shallow } from "enzyme";

import Banner from "./Banner";

describe("Banner", () => {
  let props;

  beforeEach(() => {
    props = {
      restaurant: {
        name: "name",
        description: "description",
        picture: "picture"
      }
    };
  });

  it("renders the Banner correctly", () => {
    const wrapper = shallow(<Banner {...props} />);
    expect(wrapper).toMatchInlineSnapshot(`
<div
  className="banner-container"
>
  <div
    className="container banner"
  >
    <div
      className="banner-content"
    >
      <h3>
        name
      </h3>
      <LinesEllipsis
        basedOn="letters"
        className="banner-description"
        component="div"
        ellipsis="..."
        maxLine="3"
        onReflow={[Function]}
        text="description"
        trimRight={true}
      />
    </div>
    <div
      className="banner-img"
      style={
        Object {
          "backgroundImage": "url(picture)",
        }
      }
    />
  </div>
</div>
`);
  });
});
