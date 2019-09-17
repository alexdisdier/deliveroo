import React from "react";
import { shallow } from "enzyme";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

import App from "./App";

import { API_MENU } from "./constant/api";

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

  it("should fetch data in useEffect", done => {
    const mock = new MockAdapter(axios);
    const response = {
      data: {
        restaurant: {
          path: "Le Pain Quotidien",
          name: "Le Pain Quotidien - Montorgueil",
          categories: ["Petit Déjeuner", "Salade", "Brunch", "Boulangerie"]
        },
        menu: {
          Brunchs: [
            {
              id: "1519055545-88",
              title: "Brunch authentique 1 personne",
              description: "Assiette de jambon cuit",
              price: "25.00",
              picture: "https://item-image.jpg",
              popular: true
            },
            {
              id: "1519055545-89",
              title: "Brunch vegan",
              description: "Falafels bio, houmous bio",
              price: "25.00",
              picture: "https://photo.jpg"
            }
          ]
        }
      }
    };

    mock.onGet(API_MENU).reply(200, response.data);

    const wrapper = shallow(<App />);
    setImmediate(() => {
      wrapper.update();

      done();
    });

    expect(response.data.restaurant).toEqual({
      path: "Le Pain Quotidien",
      name: "Le Pain Quotidien - Montorgueil",
      categories: ["Petit Déjeuner", "Salade", "Brunch", "Boulangerie"]
    });
    expect(response.data.menu).toEqual({
      Brunchs: [
        {
          id: "1519055545-88",
          title: "Brunch authentique 1 personne",
          description: "Assiette de jambon cuit",
          price: "25.00",
          picture: "https://item-image.jpg",
          popular: true
        },
        {
          id: "1519055545-89",
          title: "Brunch vegan",
          description: "Falafels bio, houmous bio",
          price: "25.00",
          picture: "https://photo.jpg"
        }
      ]
    });
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
