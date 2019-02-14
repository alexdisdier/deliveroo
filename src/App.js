import React, { Component } from "react";
import axios from "axios";

import "./assets/css/reset.css";
import "./App.css";

import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Menu from "./components/Menu/Menu";
import Section from "./components/Section/Section";
import Basket from "./components/Basket/Basket";
import Footer from "./components/Footer/Footer";

class App extends Component {
  state = {
    restaurant: {},
    menu: {},
    erro: null
  };

  async componentDidMount() {
    try {
      const response = await axios.get("https://deliveroo-api.now.sh/menu");
      // console.log(response.data.restaurant);
      const restaurant = response.data.restaurant;
      // console.log(restaurant);
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

  renderSection() {
    const menu = this.state.menu;
    const render = [];
    const keys = Object.keys(menu);

    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const menus = menu[key];

      render.push(<Section key={i} sectionTitle={key} menus={menus} />);
    }
    return render;
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Banner restaurant={this.state.restaurant} />

        <Menu />
        <main className="container">{this.renderSection()}</main>

        <Footer />
      </div>
    );
  }
}

export default App;
