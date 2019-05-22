import React, { Component } from "react";
import { Events, animateScroll as scroll, scrollSpy } from "react-scroll";

import "./assets/css/reset.css";
import "./App.css";

import { Provider } from "react-redux";

import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Menu from "./components/Menu/Menu";
import Section from "./components/Section/Section";
import Footer from "./components/Footer/Footer";

import data from "./assets/deliveroo-api.json";

import store from "./store";

class App extends Component {
  state = {
    basket: [],
    tip: 0,
    error: ""
  };

  async componentDidMount() {
    try {
      Events.scrollEvent.register("begin", function(to, element) {
        // console.log("begin", arguments);
      });

      Events.scrollEvent.register("end", function(to, element) {
        // console.log("end", arguments);
      });

      scrollSpy.update();
    } catch (error) {
      this.setState({
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

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <Banner />

          <Menu
            basket={this.state.basket}
            incQuantity={this.incQuantity}
            decQuantity={this.decQuantity}
            incTip={this.incTip}
            decTip={this.decTip}
            tip={this.state.tip}
            handleSetActive={this.handleSetActive}
          />
          <main className="container">
            <Section addMeal={this.addMeal} basket={this.state.basket} />
          </main>

          <Footer scrollToTop={this.scrollToTop} />
        </div>
      </Provider>
    );
  }
}

export default App;
