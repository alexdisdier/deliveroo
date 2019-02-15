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
    basket: [
      {
        id: "1519055545-89",
        name: "Brunch vegan",
        price: 24.5,
        quantity: 1
      },
      {
        id: "1519055545-91",
        name: "Fromage blanc bio au miel",
        price: 3.5,
        quantity: 1
      }
    ],
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
    for (let i = 0; i < newBasket.length; i++) {
      if (String(newBasket[i].id) !== meal.id) {
        // console.log(newBasket[i].id);
        // console.log(meal.id);
        newBasket.push(meal);
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
    console.log(this.state.newBasket);
    return (
      <div className="App">
        <Header />
        <Banner restaurant={this.state.restaurant} />

        <Menu basket={this.state.basket} />
        <main className="container">{this.renderSection()}</main>

        <Footer />
      </div>
    );
  }
}

export default App;
