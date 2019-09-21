import React from "react";
import { shallow } from "enzyme";
import axios from "axios";

import App from "./App";

/**
 * Unit tests should be run in isolation;
 * Thus we shouldn't make any external calls to the server.
 * Mocking axios module
 * makes unit tests independent of the network
 */
jest.mock("axios");

jest.mock("react-scroll", () => ({
  Element: "Element",
  Events: {
    scrollEvent: {
      remove: () => {},
      register: () => {}
    }
  },
  animateScroll: "animateScroll",
  scrollSpy: {
    update: () => {}
  }
}));

jest.mock("./components/Header/Header", () => "Header");
jest.mock("./components/Banner/Banner", () => "Banner");
jest.mock("./components/Menu/Menu", () => "Menu");
jest.mock("./components/Section/Section", () => "Section");
jest.mock("./components/Footer/Footer", () => "Footer");

describe("App", () => {
  let useEffect;
  let props;
  let wrapper;

  const mockUseEffect = () => {
    useEffect.mockImplementationOnce(f => f());
  };

  beforeEach(() => {
    useEffect = jest.spyOn(React, "useEffect");

    props = {
      scrollToTop: jest.fn()
    };

    mockUseEffect();
    wrapper = shallow(<App {...props} />);
  });

  describe("api calls", () => {
    it("fetches data on #useEffect", () => {
      expect(axios.get).toHaveBeenCalled();
      expect(axios.get).toHaveBeenCalledWith(
        "https://deliveroo-api.now.sh/menu"
      );
      expect(wrapper.find("Banner").prop("restaurant")).toEqual({
        path: "Le Pain Quotidien",
        name: "Le Pain Quotidien - Montorgueil",
        categories: ["Petit Déjeuner", "Salade", "Brunch", "Boulangerie"]
      });
      expect(wrapper.find("Section").prop("menus")).toEqual([
        {
          description: "Assiette de jambon cuit",
          id: "1519055545-88",
          picture: "https://item-image.jpg",
          popular: true,
          price: "25.00",
          quantity: 0,
          selected: false,
          title: "Brunch authentique 1 personne"
        },
        {
          description: "Falafels bio, houmous bio",
          id: "1519055545-89",
          picture: "https://photo.jpg",
          price: "25.00",
          quantity: 0,
          selected: false,
          title: "Brunch vegan"
        }
      ]);
      expect(wrapper).toMatchInlineSnapshot(`
                        <div
                          className="App"
                        >
                          <Header />
                          <Banner
                            restaurant={
                              Object {
                                "categories": Array [
                                  "Petit Déjeuner",
                                  "Salade",
                                  "Brunch",
                                  "Boulangerie",
                                ],
                                "name": "Le Pain Quotidien - Montorgueil",
                                "path": "Le Pain Quotidien",
                              }
                            }
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
                          >
                            <Element
                              className="element"
                              key="0"
                              name="test0"
                            >
                              <Section
                                addMeal={[Function]}
                                basket={Array []}
                                menus={
                                  Array [
                                    Object {
                                      "description": "Assiette de jambon cuit",
                                      "id": "1519055545-88",
                                      "picture": "https://item-image.jpg",
                                      "popular": true,
                                      "price": "25.00",
                                      "quantity": 0,
                                      "selected": false,
                                      "title": "Brunch authentique 1 personne",
                                    },
                                    Object {
                                      "description": "Falafels bio, houmous bio",
                                      "id": "1519055545-89",
                                      "picture": "https://photo.jpg",
                                      "price": "25.00",
                                      "quantity": 0,
                                      "selected": false,
                                      "title": "Brunch vegan",
                                    },
                                  ]
                                }
                                sectionTitle="Brunchs"
                              />
                            </Element>
                          </main>
                          <Footer
                            scrollToTop={[Function]}
                          />
                        </div>
                  `);
    });
  });

  describe("render()", () => {
    it("renders a loading component before displaying data", () => {
      mockUseEffect();
      const wrapper = shallow(<App {...props} />);
      expect(wrapper).toMatchInlineSnapshot(`"ADD LOADING COMPONENT ..."`);
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
});
