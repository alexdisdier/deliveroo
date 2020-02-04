import React from 'react';
import { shallow } from 'enzyme';

import Banner from './Banner';

jest.mock('react-lines-ellipsis', () => 'LinesEllipsis');

describe('Banner', () => {
  let props;

  beforeEach(() => {
    props = {
      restaurant: {
        name: 'name',
        description: 'description',
        picture: 'picture'
      }
    };
  });

  it('renders the Banner correctly', () => {
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
              ellipsis="..."
              maxLine="3"
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
