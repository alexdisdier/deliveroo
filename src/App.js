import React, { Component } from "react";
import axios from "axios";

import "./assets/css/reset.css";
import "./App.css";

import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Menu from "./components/Menu/Menu";
import Section from "./components/Section/Section";
import Footer from "./components/Footer/Footer";

class App extends Component {
  state = {
    restaurant: {},
    menu: {},
    basket: [],
    error: null
  };

  async componentDidMount() {
    try {
      const response = await axios.get("https://deliveroo-api.now.sh/menu");
      const restaurant = response.data.restaurant;
      const menu = response.data.menu;
      this.setState({
        restaurant: restaurant,
        menu: menu
      });
    } catch (error) {
      this.setState({
        error: "An error occurred"
      });
    }
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

  incQuantity = id => {
    const newBasket = [...this.state.basket];
    for (let i = 0; i < newBasket.length; i++) {
      if (newBasket[i].id === id && id !== undefined) {
        newBasket[i].quantity += 1;
      }
    }
    this.setState({
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

  renderSection() {
    const menu = this.state.menu;
    const sections = [];
    const categories = Object.keys(menu);

    for (let i = 0; i < categories.length; i++) {
      const category = categories[i];
      const menus = menu[category];

      if (menus.length > 1) {
        sections.push(
          <Section
            anchor={i}
            key={i}
            sectionTitle={category}
            menus={menus}
            addMeal={this.addMeal}
          />
        );
      }
    }
    return sections;
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Banner restaurant={this.state.restaurant} />

        <Menu
          basket={this.state.basket}
          incQuantity={this.incQuantity}
          decQuantity={this.decQuantity}
        />
        <main className="container">{this.renderSection()}</main>

        <Footer />
      </div>
    );
  }
}

export default App;
