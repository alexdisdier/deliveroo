import React from 'react';
import { shallow } from 'enzyme';

import Card from './Card';

import './Card.css';

describe('Card', () => {
  let props;

  beforeEach(() => {
    props = {
      title: 'title',
      description: 'description',
      price: '10',
      id: 'id',
      addMeal: jest.fn(),
      img: {
        webp: 'https://img.webp',
        jpg: 'https://img.jpg'
      },
      popular: false,
      quantity: 0
    };
  });

  describe('action', () => {
    it('adds a meal to basket', () => {
      const wrapper = shallow(<Card {...props} />);

      // Test className before card has been added
      expect(wrapper.find('.card').hasClass('card-inactive')).toEqual(true);

      wrapper
        .find('div')
        .at(0)
        .simulate('click');

      expect(props.addMeal).toHaveBeenCalledTimes(1);
      expect(props.addMeal).toHaveBeenCalledWith({
        id: 'id',
        name: 'title',
        price: '10',
        quantity: 1
      });
    });
  });

  describe('render()', () => {
    it('renders the Card correctly with card-inactive class and stars for popular items', () => {
      props.popular = true;
      const wrapper = shallow(<Card {...props} />);
      expect(wrapper).toMatchInlineSnapshot(`
        <div
          className="card card-inactive"
          data-testid="card-meal"
          onClick={[Function]}
        >
          <div
            className="card-content"
          >
            <div>
              <h6
                className="card-title"
              >
                title
              </h6>
            </div>
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
            <div>
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
          </div>
          <div
            className="card-img"
            style={
              Object {
                "backgroundImage": "url(\\"https://img.webp\\")",
              }
            }
          />
        </div>
      `);
    });

    it('renders card-active class', () => {
      props.quantity = 1;
      const wrapper = shallow(<Card {...props} />);
      expect(wrapper).toMatchInlineSnapshot(`
        <div
          className="card card-active"
          data-testid="card-meal"
          onClick={[Function]}
        >
          <div
            className="card-content"
          >
            <div>
              <div
                className="card-quantity"
              >
                1
                x
              </div>
              <h6
                className="card-title"
              >
                title
              </h6>
            </div>
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
            <div>
              <span
                className="card-price"
              >
                10
                 €
              </span>
              <span />
            </div>
          </div>
          <div
            className="card-img"
            style={
              Object {
                "backgroundImage": "url(\\"https://img.webp\\")",
              }
            }
          />
        </div>
      `);
    });

    it('renders the Card correctly with card-inactive class and no stars', () => {
      const wrapper = shallow(<Card {...props} />);
      expect(wrapper).toMatchInlineSnapshot(`
        <div
          className="card card-inactive"
          data-testid="card-meal"
          onClick={[Function]}
        >
          <div
            className="card-content"
          >
            <div>
              <h6
                className="card-title"
              >
                title
              </h6>
            </div>
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
            <div>
              <span
                className="card-price"
              >
                10
                 €
              </span>
              <span />
            </div>
          </div>
          <div
            className="card-img"
            style={
              Object {
                "backgroundImage": "url(\\"https://img.webp\\")",
              }
            }
          />
        </div>
      `);
    });
  });
});
