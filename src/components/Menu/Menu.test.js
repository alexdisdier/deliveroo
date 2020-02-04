import React from 'react';
import { shallow } from 'enzyme';

import Menu from './Menu';

jest.mock('react-scroll', () => ({
  Link: 'Link'
}));

jest.mock('../Basket/Basket', () => 'Basket');

describe('Menu', () => {
  let props;

  beforeEach(() => {
    props = {
      basket: ['item1', 'item2', 'item3'],
      incQuantity: jest.fn(),
      decQuantity: jest.fn(),
      incTip: jest.fn(),
      decTip: jest.fn(),
      handleSetActive: jest.fn(),
      tip: 2
    };
  });

  it('renders the Menu correctly', () => {
    const wrapper = shallow(<Menu {...props} />);
    expect(wrapper).toMatchInlineSnapshot(`
      <div
        className="menu-nav"
      >
        <div
          className="menu-nav-container container"
        >
          <nav>
            <div
              className="link-bar"
            >
              <Link
                activeClass="active"
                className="link"
                duration={500}
                offset={-40}
                onSetActive={[MockFunction]}
                smooth={true}
                spy={true}
                to="test0"
              >
                Brunchs
              </Link>
              <Link
                activeClass="active"
                className="link"
                duration={500}
                offset={-40}
                onSetActive={[MockFunction]}
                smooth={true}
                spy={true}
                to="test1"
              >
                Petit Dejeuner
              </Link>
              <Link
                activeClass="active"
                className="link"
                duration={500}
                offset={-40}
                onSetActive={[MockFunction]}
                smooth={true}
                spy={true}
                to="test2"
              >
                Viennoiseries et Pains
              </Link>
              <Link
                activeClass="active"
                className="link"
                duration={500}
                offset={-40}
                onSetActive={[MockFunction]}
                smooth={true}
                spy={true}
                to="test3"
              >
                Salades
              </Link>
            </div>
            <div
              className="link-bar-grouped"
            >
              <a
                href="#4"
              >
                Plus
              </a>
            </div>
          </nav>
          <Basket
            basket={
              Array [
                "item1",
                "item2",
                "item3",
              ]
            }
            decQuantity={[MockFunction]}
            decTip={[MockFunction]}
            incQuantity={[MockFunction]}
            incTip={[MockFunction]}
            tip={2}
          />
        </div>
      </div>
    `);
  });
});
