import React, { Component } from "react";
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

import data from "./assets/deliveroo-api.json";

import { API_MENU } from "./constant/api";

import "./assets/css/reset.css";
import "./App.css";

const INITIAL_STATE = {
  restaurant: {},
  menu: {},
  basket: [],
  tip: 0,
  error: ""
};

class App extends Component {
  state = INITIAL_STATE;

  async componentDidMount() {
    try {
      const response = await axios.get(API_MENU);
      const restaurant = response.data.restaurant;
      const menu = response.data.menu;
      this.setState({
        restaurant: restaurant,
        menu: menu
      });
      Events.scrollEvent.register("begin", function(to, element) {});

      Events.scrollEvent.register("end", function(to, element) {});

      scrollSpy.update();
    } catch (error) {
      const restaurant = data.restaurant;
      const menu = data.menu;
      this.setState({
        restaurant: restaurant,
        menu: menu,
        error: "An error occurred, this is static api"
      });
    }
  }

  componentWillUnmount() {
    Events.scrollEvent.remove("begin");
    Events.scrollEvent.remove("end");
  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollToBottom() {
    scroll.scrollToBottom();
  }
  scrollTo() {
    scroll.scrollTo(100);
  }
  scrollMore() {
    scroll.scrollMore(100);
  }

  addMeal = meal => {
    const newBasket = [...this.state.basket];

    if (newBasket.length === 0) {
      newBasket.push(meal);
      this.setState({
        basket: newBasket
      });
      // filter check if 1 or 0
    } else if (!newBasket.filter(check => check.id === meal.id).length > 0) {
      newBasket.push(meal);
      this.setState({
        basket: newBasket
      });
    } else {
      this.incQuantity(meal.id);
    }
  };

  incQuantity = async id => {
    const newBasket = [...this.state.basket];

    for (let i = 0; i < newBasket.length; i++) {
      if (newBasket[i].id === id && id !== undefined) {
        newBasket[i].quantity += 1;
      }
    }
    await this.setState({
      basket: newBasket
    });
  };

  decQuantity = id => {
    const newBasket = [...this.state.basket];

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

    this.setState({
      basket: newBasket
    });
  };

  incTip = () => {
    let tip = this.state.tip;

    this.setState({
      tip: tip + 1
    });
  };

  decTip = () => {
    let tip = this.state.tip;

    if (tip > 0) {
      tip = tip - 1;
    }

    this.setState({
      tip: tip
    });
  };

  renderSection() {
    const menu = this.state.menu;
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
              addMeal={this.addMeal}
              basket={this.state.basket}
            />
          </Element>
        );
      }
    }
    return sections;
  }

  render() {
    const { restaurant, basket, tip } = this.state;

    return (
      <div className="App">
        <Header />
        <Banner restaurant={restaurant} />

        <Menu
          basket={basket}
          incQuantity={this.incQuantity}
          decQuantity={this.decQuantity}
          incTip={this.incTip}
          decTip={this.decTip}
          tip={tip}
          handleSetActive={this.handleSetActive}
        />
        <main className="container">{this.renderSection()}</main>

        <Footer scrollToTop={this.scrollToTop} />
      </div>
    );
  }
}

export default App;
