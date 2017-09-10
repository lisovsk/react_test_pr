import React, { Component } from "react";
import PropTypes from "prop-types";
import ArticleList from "./ArticleList";
import UserForm from "./UserForm";
import Input from "./Input";
import Counter from "./Counter";
import Filters from "./Filters/index";

class App extends Component {
  state = {
    selection: null
  };

  changeSelection = selection => this.setState({ selection });

  render() {
    return (
      <div>
        <Counter />
        <UserForm />
        <Filters articles={[]} />
        <ArticleList />
      </div>
    );
  }
}

export default App;
