import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ArticleList from './ArticleList';
import ArticleCart from './ArticleCart';
import UserForm from './UserForm';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import Input from './Input';
import Counter from './Counter';
class App extends Component {
  state = {
    selection: null
  };

  changeSelection = selection => this.setState({ selection });

  render() {
    const { articles } = this.props;
    const options = this.props.articles.map(article => ({
      label: article.title,
      value: article.id
    }));
    return (
      <div>
        <Counter />
        <UserForm />
        <DayPickerInput placeholder="DD/MM/YYYY" format="DD/MM/YYYY" />
        <Select
          options={options}
          value={this.state.selection}
          onChange={this.changeSelection}
          multi
        />
        <ArticleList articles={articles} defaultOpenId={articles[0].id} />
        <ArticleCart articles={articles} />
      </div>
    );
  }
}

export default App;
