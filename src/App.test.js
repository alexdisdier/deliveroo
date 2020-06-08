import React from 'react';
import { shallow } from 'enzyme';
import axios from 'axios';

import App from './App';

/**
 * Unit tests should be run in isolation;
 * Thus we shouldn't make any external calls to the server.
 * Mocking axios module
 * makes unit tests independent of the network
 */
jest.mock('axios');

jest.mock('react-scroll', () => ({
  Element: 'Element',
  Events: {
    scrollEvent: {
      remove: () => {},
      register: () => {}
    }
  },
  animateScroll: 'animateScroll',
  scrollSpy: {
    update: () => {}
  }
}));

jest.mock('./components/Header/Header', () => 'Header');
jest.mock('./components/Banner/Banner', () => 'Banner');
jest.mock('./components/Menu/Menu', () => 'Menu');
jest.mock('./components/Section/Section', () => 'Section');
jest.mock('./components/Footer/Footer', () => 'Footer');

describe('App', () => {
  let useEffect;
  let props;
  let wrapper;

  const mockUseEffect = () => {
    useEffect.mockImplementationOnce(f => f());
  };

  beforeEach(() => {
    useEffect = jest.spyOn(React, 'useEffect');

    props = {
      scrollToTop: jest.fn()
    };

    mockUseEffect();
    wrapper = shallow(<App {...props} />);
  });

  describe('api calls', () => {
    // it('fetches data on #useEffect', () => {
    //   expect(axios.get).toHaveBeenCalled();
    //   expect(axios.get).toHaveBeenCalledWith(
    //     'https://deliveroo-api.now.sh/menu'
    //   );
    //   expect(wrapper.find('Banner').prop('restaurant')).toEqual({
    //     path: 'Le Pain Quotidien',
    //     name: 'Le Pain Quotidien - Montorgueil',
    //     categories: ['Petit Déjeuner', 'Salade', 'Brunch', 'Boulangerie']
    //   });
    //   expect(wrapper.find('Section').prop('menus')).toEqual([
    //     {
    //       description: 'Assiette de jambon cuit',
    //       id: '1519055545-88',
    //       picture: 'https://item-image.jpg',
    //       popular: true,
    //       price: '25.00',
    //       quantity: 0,
    //       selected: false,
    //       title: 'Brunch authentique 1 personne'
    //     },
    //     {
    //       description: 'Falafels bio, houmous bio',
    //       id: '1519055545-89',
    //       picture: 'https://photo.jpg',
    //       price: '25.00',
    //       quantity: 0,
    //       selected: false,
    //       title: 'Brunch vegan'
    //     }
    //   ]);
    //   expect(wrapper).toMatchInlineSnapshot(`
    //                                     <div
    //                                       className="App"
    //                                     >
    //                                       <Header />
    //                                       <Banner
    //                                         restaurant={
    //                                           Object {
    //                                             "categories": Array [
    //                                               "Petit Déjeuner",
    //                                               "Salade",
    //                                               "Brunch",
    //                                               "Boulangerie",
    //                                             ],
    //                                             "name": "Le Pain Quotidien - Montorgueil",
    //                                             "path": "Le Pain Quotidien",
    //                                           }
    //                                         }
    //                                       />
    //                                       <Menu
    //                                         basket={Array []}
    //                                         decQuantity={[Function]}
    //                                         decTip={[Function]}
    //                                         incQuantity={[Function]}
    //                                         incTip={[Function]}
    //                                         tip={0}
    //                                       />
    //                                       <main
    //                                         className="container"
    //                                       >
    //                                         <Element
    //                                           className="element"
    //                                           key="0"
    //                                           name="test0"
    //                                         >
    //                                           <Section
    //                                             addMeal={[Function]}
    //                                             basket={Array []}
    //                                             menus={
    //                                               Array [
    //                                                 Object {
    //                                                   "description": "Assiette de jambon cuit",
    //                                                   "id": "1519055545-88",
    //                                                   "picture": "https://item-image.jpg",
    //                                                   "popular": true,
    //                                                   "price": "25.00",
    //                                                   "quantity": 0,
    //                                                   "selected": false,
    //                                                   "title": "Brunch authentique 1 personne",
    //                                                 },
    //                                                 Object {
    //                                                   "description": "Falafels bio, houmous bio",
    //                                                   "id": "1519055545-89",
    //                                                   "picture": "https://photo.jpg",
    //                                                   "price": "25.00",
    //                                                   "quantity": 0,
    //                                                   "selected": false,
    //                                                   "title": "Brunch vegan",
    //                                                 },
    //                                               ]
    //                                             }
    //                                             sectionTitle="Brunchs"
    //                                           />
    //                                         </Element>
    //                                       </main>
    //                                       <Footer
    //                                         scrollToTop={[Function]}
    //                                       />
    //                                     </div>
    //                           `);
    // });
  });

  describe('render()', () => {
    // it('renders a loading component before displaying data', () => {
    //   mockUseEffect();
    //   const wrapper = shallow(<App {...props} />);
    //   expect(wrapper).toMatchInlineSnapshot(
    //     '"ADD LOADING COMPONENT ..."',
    //     `
    //     <div
    //       className="App"
    //     >
    //       <Header />
    //       <Banner
    //         restaurant={
    //           Object {
    //             "address": "8 Rue de Bretagne, 75003 Paris",
    //             "categories": Array [
    //               "Petit Déjeuner",
    //               "Salade",
    //               "Brunch",
    //               "Boulangerie",
    //             ],
    //             "client_address": Object {
    //               "city": "Paris",
    //               "coordinates": Array [
    //                 2.36051359999999,
    //                 48.8737157,
    //               ],
    //               "country": "FR",
    //               "formatted_address": "25 Passage Dubail, 75010 Paris, France",
    //               "locality": "Paris",
    //               "post_code": "75010",
    //               "route": "Passage Dubail",
    //               "street_number": "25",
    //             },
    //             "delay": "10 - 20 Mins (Au plus tôt)",
    //             "description": "Profitez de chaque plaisir de la vie quotidienne. Le Pain Quotidien propose des ingrédients simples et sains, du bon pain, des fruits et des légumes frais et de saison issus de l’agriculture biologique.",
    //             "name": "Le Pain Quotidien - Montorgueil",
    //             "path": "Le Pain Quotidien",
    //             "percentage": 87,
    //             "phone": "+33144780895",
    //             "picture": "https://f.roocdn.com/images/menus/17697/header-image.jpg",
    //             "price": "€€",
    //             "ratings": "50+",
    //           }
    //         }
    //       />
    //       <Menu
    //         basket={Array []}
    //         decQuantity={[Function]}
    //         decTip={[Function]}
    //         incQuantity={[Function]}
    //         incTip={[Function]}
    //         tip={0}
    //       />
    //       <main
    //         className="container"
    //       >
    //         <Element
    //           className="element"
    //           key="0"
    //           name="test0"
    //         >
    //           <Section
    //             addMeal={[Function]}
    //             basket={Array []}
    //             menus={
    //               Array [
    //                 Object {
    //                   "description": "Assiette de jambon cuit, jambon fumeì, terrine, comté bio & camembert bio, salade jeunes pousses, oeuf poché bio, pain bio & confiture, 1 viennoiserie bio au choix, granola parfait bio, jus de fruits 33cl au choix",
    //                   "id": "1519055545-88",
    //                   "picture": "https://f.roocdn.com/images/menu_items/1583350/item-image.jpg",
    //                   "popular": true,
    //                   "price": "25.00",
    //                   "quantity": 0,
    //                   "selected": false,
    //                   "title": "Brunch authentique 1 personne",
    //                 },
    //                 Object {
    //                   "description": "Falafels bio, houmous bio, avocat aux super graines bio, lentilles au paprika, herbes fraîches, houmous de carotte et légumes de saison, soupe du jour bio, pain bio & confiture, crunola parfait aux fruits de saison, flûte aux raisins et noisettes, jus de fruits 33cl au choix",
    //                   "id": "1519055545-89",
    //                   "picture": "https://f.roocdn.com/images/menu_items/3905693/item-image.jpg",
    //                   "price": "25.00",
    //                   "quantity": 0,
    //                   "selected": false,
    //                   "title": "Brunch vegan",
    //                 },
    //               ]
    //             }
    //             sectionTitle="Brunchs"
    //           />
    //         </Element>
    //         <Element
    //           className="element"
    //           key="1"
    //           name="test1"
    //         >
    //           <Section
    //             addMeal={[Function]}
    //             basket={Array []}
    //             menus={
    //               Array [
    //                 Object {
    //                   "description": "Assortiment de pains bio, beurre & confitures bio + 1 viennoiserie bio au choix + 1 boisson fraîche au choix",
    //                   "id": "1519055545-90",
    //                   "price": "10.40",
    //                   "quantity": 0,
    //                   "selected": false,
    //                   "title": "Petit-déjeuner 1 personne",
    //                 },
    //                 Object {
    //                   "description": "",
    //                   "id": "1519055545-91",
    //                   "price": "10.40",
    //                   "quantity": 0,
    //                   "selected": false,
    //                   "title": "Fromage blanc bio au miel",
    //                 },
    //                 Object {
    //                   "description": "Yaourt, granola, et fruits frais de saison",
    //                   "id": "1519055545-92",
    //                   "picture": "https://f.roocdn.com/images/menu_items/1323271/item-image.jpg",
    //                   "popular": true,
    //                   "price": "6.60",
    //                   "quantity": 0,
    //                   "selected": false,
    //                   "title": "Granola parfait bio",
    //                 },
    //                 Object {
    //                   "description": "100% végétalien - granola cru, banane, lait de coco et beurre de noix de cajou",
    //                   "id": "1519055545-93",
    //                   "price": "6.60",
    //                   "quantity": 0,
    //                   "selected": false,
    //                   "title": "Crunola parfait bio (100% végétalien)",
    //                   "web-scraper-start-url": "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
    //                 },
    //                 Object {
    //                   "description": "Pomme, ananas, kiwi, orange, grenade, myrtilles",
    //                   "id": "1519055545-137",
    //                   "picture": "https://f.roocdn.com/images/menu_items/2549378/item-image.jpg",
    //                   "price": "6.90",
    //                   "quantity": 0,
    //                   "selected": false,
    //                   "title": "Salade de fruits bio de saison",
    //                   "web-scraper-start-url": "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
    //                 },
    //                 Object {
    //                   "description": "Courge butternut, chèvre & thym, avec une salade de jeunes pousses",
    //                   "id": "1519055545-95",
    //                   "price": "6.60",
    //                   "quantity": 0,
    //                   "selected": false,
    //                   "title": "Omelette au four de saison",
    //                   "web-scraper-start-url": "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
    //                 },
    //                 Object {
    //                   "description": "Graines de chia bio, myrtilles, grenades, crunola bio",
    //                   "id": "1519055545-96",
    //                   "popular": true,
    //                   "price": "6.60",
    //                   "quantity": 0,
    //                   "selected": false,
    //                   "title": "Chia bowl",
    //                   "web-scraper-start-url": "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
    //                 },
    //                 Object {
    //                   "description": "Muesli maison bio, boisson à l’amande bio, fruits de
    //     saison et super graines bio (VEGAN)",
    //                   "id": "1519055545-97",
    //                   "picture": "https://f.roocdn.com/images/menu_items/5250391/item-image.jpg",
    //                   "price": "6.60",
    //                   "quantity": 0,
    //                   "selected": false,
    //                   "title": "Bircher Muesli",
    //                   "web-scraper-start-url": "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
    //                 },
    //               ]
    //             }
    //             sectionTitle="Petit déjeuner"
    //           />
    //         </Element>
    //         <Element
    //           className="element"
    //           key="2"
    //           name="test2"
    //         >
    //           <Section
    //             addMeal={[Function]}
    //             basket={Array []}
    //             menus={
    //               Array [
    //                 Object {
    //                   "description": "",
    //                   "id": "1519055545-98",
    //                   "picture": "https://f.roocdn.com/images/menu_items/1323282/item-image.jpg",
    //                   "price": "6.60",
    //                   "quantity": 0,
    //                   "selected": false,
    //                   "title": "Croissant bio",
    //                   "web-scraper-start-url": "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
    //                 },
    //                 Object {
    //                   "description": "",
    //                   "id": "1519055545-99",
    //                   "picture": "https://f.roocdn.com/images/menu_items/1323287/item-image.jpg",
    //                   "popular": true,
    //                   "price": "6.60",
    //                   "quantity": 0,
    //                   "selected": false,
    //                   "title": "Pain au chocolat bio",
    //                   "web-scraper-start-url": "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
    //                 },
    //                 Object {
    //                   "description": "",
    //                   "id": "1519055545-100",
    //                   "picture": "https://f.roocdn.com/images/menu_items/3637782/item-image.jpg",
    //                   "price": "6.60",
    //                   "quantity": 0,
    //                   "selected": false,
    //                   "title": "Pain au raisins bio",
    //                   "web-scraper-start-url": "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
    //                 },
    //                 Object {
    //                   "description": "300g",
    //                   "id": "1519055545-101",
    //                   "picture": "https://f.roocdn.com/images/menu_items/1583350/item-image.jpg",
    //                   "price": "6.60",
    //                   "quantity": 0,
    //                   "selected": false,
    //                   "title": "Baguette à l'ancienne bio",
    //                   "web-scraper-start-url": "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
    //                 },
    //                 Object {
    //                   "description": "",
    //                   "id": "1519055545-102",
    //                   "price": "6.60",
    //                   "quantity": 0,
    //                   "selected": false,
    //                   "title": "Grande brioche",
    //                   "web-scraper-start-url": "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
    //                 },
    //                 Object {
    //                   "description": "Vegan",
    //                   "id": "1519055545-103",
    //                   "picture": "https://f.roocdn.com/images/menu_items/2020235/item-image.jpg",
    //                   "popular": true,
    //                   "price": "6.60",
    //                   "quantity": 0,
    //                   "selected": false,
    //                   "title": "Muffin bio myrtilles (100% végétalien)",
    //                   "web-scraper-start-url": "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
    //                 },
    //                 Object {
    //                   "description": "",
    //                   "id": "1519055545-104",
    //                   "price": "6.60",
    //                   "quantity": 0,
    //                   "selected": false,
    //                   "title": "Muffin bio pomme cannelle",
    //                   "web-scraper-start-url": "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
    //                 },
    //                 Object {
    //                   "description": "",
    //                   "id": "1519055545-105",
    //                   "price": "6.60",
    //                   "quantity": 0,
    //                   "selected": false,
    //                   "title": "Muffin banane chocolat bio",
    //                   "web-scraper-start-url": "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
    //                 },
    //                 Object {
    //                   "description": "350g",
    //                   "id": "1519055545-106",
    //                   "picture": "https://f.roocdn.com/images/menu_items/1323275/item-image.jpg",
    //                   "price": "6.60",
    //                   "quantity": 0,
    //                   "selected": false,
    //                   "title": "Pain multi-céréales sans gluten",
    //                   "web-scraper-start-url": "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
    //                 },
    //                 Object {
    //                   "description": "700g",
    //                   "id": "1519055545-107",
    //                   "price": "6.60",
    //                   "quantity": 0,
    //                   "selected": false,
    //                   "title": "Pain multi-céréales raisins bio",
    //                   "web-scraper-start-url": "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
    //                 },
    //                 Object {
    //                   "description": "",
    //                   "id": "1519055545-108",
    //                   "picture": "https://f.roocdn.com/images/menu_items/2549462/item-image.jpg",
    //                   "price": "6.60",
    //                   "quantity": 0,
    //                   "selected": false,
    //                   "title": "Flûte raisins et noisettes bio",
    //                   "web-scraper-start-url": "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
    //                 },
    //                 Object {
    //                   "description": "300g",
    //                   "id": "1519055545-109",
    //                   "price": "6.60",
    //                   "quantity": 0,
    //                   "selected": false,
    //                   "title": "Baguette Graines de Potiron & Tournesol",
    //                   "web-scraper-start-url": "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
    //                 },
    //               ]
    //             }
    //             sectionTitle="Viennoiseries et pains"
    //           />
    //         </Element>
    //         <Element
    //           className="element"
    //           key="3"
    //           name="test3"
    //         >
    //           <Section
    //             addMeal={[Function]}
    //             basket={Array []}
    //             menus={
    //               Array [
    //                 Object {
    //                   "description": "Poulet, parmesan, avocat, croûtons, bacon, chips de légumes, jeunes pousses, kale et tomates cerises",
    //                   "id": "1519055545-110",
    //                   "picture": "https://f.roocdn.com/images/menu_items/2018213/item-image.jpg",
    //                   "popular": true,
    //                   "price": "6.60",
    //                   "quantity": 0,
    //                   "selected": false,
    //                   "title": "César BLT",
    //                   "web-scraper-start-url": "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
    //                 },
    //                 Object {
    //                   "description": "Saumon fumé, avocat, super graines bio, lentilles au parika, chou rouge, concombre, jeunes pousses",
    //                   "id": "1519055545-111",
    //                   "picture": "https://f.roocdn.com/images/menu_items/1323292/item-image.jpg",
    //                   "price": "6.60",
    //                   "quantity": 0,
    //                   "selected": false,
    //                   "title": "Buddha bowl",
    //                   "web-scraper-start-url": "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
    //                 },
    //                 Object {
    //                   "description": "Sarrasin bio, quinoa bio, houmous de carottes, lentilles au paprika, courge butternut, grenade, avocat, caviar d'algues, chips de légumes bio",
    //                   "id": "1519055545-112",
    //                   "picture": "https://f.roocdn.com/images/menu_items/2549941/item-image.jpg",
    //                   "price": "6.60",
    //                   "quantity": 0,
    //                   "selected": false,
    //                   "title": "Veggie Bowl",
    //                   "web-scraper-start-url": "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
    //                 },
    //                 Object {
    //                   "description": "Quinoa bio, houmous bio, carottes, chou rouge, pousses d’épinard, sauce tahini et pain de saison (VEGAN)",
    //                   "id": "1519055545-113",
    //                   "picture": "https://f.roocdn.com/images/menu_items/5250423/item-image.jpg",
    //                   "popular": true,
    //                   "price": "6.60",
    //                   "quantity": 0,
    //                   "selected": false,
    //                   "title": "Falafel Bowl",
    //                   "web-scraper-start-url": "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
    //                 },
    //                 Object {
    //                   "description": "",
    //                   "id": "1519055545-114",
    //                   "price": "3.90",
    //                   "quantity": 0,
    //                   "selected": false,
    //                   "title": "Bol lentilles ou quinoa (100% végétalien)",
    //                   "web-scraper-start-url": "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
    //                 },
    //                 Object {
    //                   "description": "Servie avec une salade de jeunes pousses bio",
    //                   "id": "1519055545-125",
    //                   "price": "6.90",
    //                   "quantity": 0,
    //                   "selected": false,
    //                   "title": "Quiche Lorraine",
    //                   "web-scraper-start-url": "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
    //                 },
    //                 Object {
    //                   "description": "Lentilles au paprika, carottes bio et oeuf poché bio",
    //                   "id": "1519055545-116",
    //                   "price": "3.90",
    //                   "quantity": 0,
    //                   "selected": false,
    //                   "title": "Mini salade lentilles (100% végétarien)",
    //                   "web-scraper-start-url": "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
    //                 },
    //               ]
    //             }
    //             sectionTitle="Salades"
    //           />
    //         </Element>
    //         <Element
    //           className="element"
    //           key="4"
    //           name="test4"
    //         >
    //           <Section
    //             addMeal={[Function]}
    //             basket={Array []}
    //             menus={
    //               Array [
    //                 Object {
    //                   "description": "Purée d'avocat bio et gomasio bio",
    //                   "id": "1519055545-117",
    //                   "picture": "https://f.roocdn.com/images/menu_items/1323299/item-image.jpg",
    //                   "price": "6.90",
    //                   "quantity": 0,
    //                   "selected": false,
    //                   "title": "Toast avocat bio (100% végétalien)",
    //                   "web-scraper-start-url": "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
    //                 },
    //                 Object {
    //                   "description": "Concombre bio et cébettes",
    //                   "id": "1519055545-118",
    //                   "price": "6.90",
    //                   "quantity": 0,
    //                   "selected": false,
    //                   "title": "Tartine poulet fumé & avocat",
    //                   "web-scraper-start-url": "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
    //                 },
    //                 Object {
    //                   "description": "Mozzarella di bufala bio",
    //                   "id": "1519055545-119",
    //                   "popular": true,
    //                   "price": "6.90",
    //                   "quantity": 0,
    //                   "selected": false,
    //                   "title": "Jambon fumé & mozzarella di bufala bio tomates séchées",
    //                   "web-scraper-start-url": "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
    //                 },
    //                 Object {
    //                   "description": "",
    //                   "id": "1519055545-120",
    //                   "picture": "https://f.roocdn.com/images/menu_items/4607227/item-image.jpg",
    //                   "price": "6.90",
    //                   "quantity": 0,
    //                   "selected": false,
    //                   "title": "Tartine Jambon Blanc & Comté Bio",
    //                   "web-scraper-start-url": "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
    //                 },
    //                 Object {
    //                   "description": "Super graines bio, grenade, concombre et roquette (Végétarien)",
    //                   "id": "1519055545-121",
    //                   "picture": "https://f.roocdn.com/images/menu_items/5250426/item-image.jpg",
    //                   "price": "6.90",
    //                   "quantity": 0,
    //                   "selected": false,
    //                   "title": "Tartine Houmous de Carotte & Féta",
    //                   "web-scraper-start-url": "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
    //                 },
    //               ]
    //             }
    //             sectionTitle="Tartines froides"
    //           />
    //         </Element>
    //         <Element
    //           className="element"
    //           key="5"
    //           name="test5"
    //         >
    //           <Section
    //             addMeal={[Function]}
    //             basket={Array []}
    //             menus={
    //               Array [
    //                 Object {
    //                   "description": "Demi-tartine du jour & soupe du jour aux légumes bio, servi avec du pain bio et une salade de jeunes pousses bio",
    //                   "id": "1519055545-122",
    //                   "price": "6.90",
    //                   "quantity": 0,
    //                   "selected": false,
    //                   "title": "Le déjeuner du boulanger",
    //                   "web-scraper-start-url": "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
    //                 },
    //                 Object {
    //                   "description": "",
    //                   "id": "1519055545-123",
    //                   "price": "6.90",
    //                   "quantity": 0,
    //                   "selected": false,
    //                   "title": "Soupe du jour aux légumes bio (100% végétalien)",
    //                   "web-scraper-start-url": "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
    //                 },
    //                 Object {
    //                   "description": "",
    //                   "id": "1519055545-126",
    //                   "picture": "https://f.roocdn.com/images/menu_items/1493250/item-image.jpg",
    //                   "price": "6.90",
    //                   "quantity": 0,
    //                   "selected": false,
    //                   "title": "Pot-au-feu de légumes bio, curry bio  et poulet grillé",
    //                   "web-scraper-start-url": "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
    //                 },
    //                 Object {
    //                   "description": "",
    //                   "id": "1519055545-124",
    //                   "popular": true,
    //                   "price": "6.90",
    //                   "quantity": 0,
    //                   "selected": false,
    //                   "title": "Pot-au-feu de légumes bio, quinoa bio & harissa bio (100% végétalien)",
    //                   "web-scraper-start-url": "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
    //                 },
    //                 Object {
    //                   "description": "3 haricots, purée avocat, spécialité au soja bio & cebettes",
    //                   "id": "1519055545-127",
    //                   "picture": "https://f.roocdn.com/images/menu_items/4607228/item-image.jpg",
    //                   "price": "6.90",
    //                   "quantity": 0,
    //                   "selected": false,
    //                   "title": "Chili sin carne (vegan)",
    //                   "web-scraper-start-url": "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
    //                 },
    //                 Object {
    //                   "description": "Servi avec sarrasin bio et chutney de cassis au gingembre (VEGAN)",
    //                   "id": "1519055545-128",
    //                   "picture": "https://f.roocdn.com/images/menu_items/5250429/item-image.jpg",
    //                   "popular": true,
    //                   "price": "6.90",
    //                   "quantity": 0,
    //                   "selected": false,
    //                   "title": "Curry de Coco aux Légumes",
    //                   "web-scraper-start-url": "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
    //                 },
    //               ]
    //             }
    //             sectionTitle="Soupe & plats chauds"
    //           />
    //         </Element>
    //       </main>
    //       <Footer
    //         scrollToTop={[Function]}
    //       />
    //     </div>
    //   `
    //   );
    // });

    it('renders the App correctly', () => {
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
