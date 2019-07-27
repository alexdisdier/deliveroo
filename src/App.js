import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import {
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy
} from "react-scroll";

import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Menu from "./components/Menu/Menu";
import Section from "./components/Section/Section";
import Footer from "./components/Footer/Footer";

import { API_MENU } from "./constant/api";

import "./assets/css/reset.css";
import "./App.css";

/*
 great source on useEffect and fetching data: https://www.robinwieruch.de/react-hooks-fetch-data/
*/

function App() {
  const [restaurant, setRestaurant] = useState({});
  const [menu, setMenu] = useState({});
  const [basket, setBasket] = useState([]);
  const [tip, setTip] = useState(0);
  const [isLoading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(
    () => {
      const fetchData = async () => {
        setIsError(false);
        setLoading(true);

        try {
          const response = await axios(API_MENU);

          setRestaurant(response.data.restaurant);
          setMenu(response.data.menu);
        } catch (error) {
          setIsError(true);
        }

        setLoading(false);
      };

      fetchData();
      Events.scrollEvent.register("begin", function(to, element) {});
      Events.scrollEvent.register("end", function(to, element) {});

      scrollSpy.update();
    },
    [],
    Events.scrollEvent.remove("begin"),
    Events.scrollEvent.remove("end")
  );

  const scrollToTop = useCallback(() => {
    scroll.scrollToTop();
  }, []);

  const addMeal = useCallback(
    meal => {
      const newBasket = [...basket];

      if (newBasket.length === 0) {
        newBasket.push(meal);
        setBasket(newBasket);
        // filter check if 1 or 0
      } else if (!newBasket.filter(check => check.id === meal.id).length > 0) {
        newBasket.push(meal);
        setBasket(newBasket);
      } else {
        incQuantity(meal.id);
      }
    },
    [basket]
  );

  const incQuantity = useCallback(
    async id => {
      const newBasket = [...basket];

      for (let i = 0; i < newBasket.length; i++) {
        if (newBasket[i].id === id && id !== undefined) {
          newBasket[i].quantity += 1;
        }
      }
      await setBasket(newBasket);
    },
    [basket]
  );

  const decQuantity = useCallback(
    id => {
      const newBasket = [...basket];

      for (let i = 0; i < newBasket.length; i++) {
        if (
          newBasket[i].id === id &&
          newBasket[i].quantity > 1 &&
          id !== undefined
        ) {
          newBasket[i].quantity -= 1;
        } else if (newBasket[i].id === id && newBasket[i].quantity === 1) {
          newBasket.splice(i, 1);
        }
      }

      setBasket(newBasket);
    },
    [basket]
  );

  const incTip = useCallback(() => {
    setTip(tip + 1);
  }, [tip]);

  const decTip = useCallback(() => {
    if (tip > 0) setTip(tip - 1);
  }, [tip]);

  const renderSection = () => {
    const sections = [];
    const categories = Object.keys(menu);

    for (let i = 0; i < categories.length; i++) {
      const category = categories[i];
      const menus = menu[category];

      for (let i = 0; i < menus.length; i++) {
        menus[i]["selected"] = false;
        menus[i]["quantity"] = 0;
      }

      if (menus.length > 1) {
        sections.push(
          <Element key={i} name={`test${i}`} className="element">
            <Section
              sectionTitle={category}
              menus={menus}
              addMeal={addMeal}
              basket={basket}
            />
          </Element>
        );
      }
    }
    return sections;
  };

  return !isLoading ? (
    <div className="App">
      {isError && <div>Something went wrong ...</div>}
      <Header />
      <Banner restaurant={restaurant} />

      <Menu
        basket={basket}
        incQuantity={incQuantity}
        decQuantity={decQuantity}
        incTip={incTip}
        decTip={decTip}
        tip={tip}
      />
      <main className="container">{renderSection()}</main>

      <Footer scrollToTop={scrollToTop} />
    </div>
  ) : (
    "ADD LOADING COMPONENT ..."
  );
}

export default App;
