import React, {Component} from 'react';
import {Text} from 'react-native';
import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';
import SuggestionList from './src/videos/container/suggestion-list';
import CategoryList from './src/videos/container/category-list';
import API from './utils/api';

class App extends Component {
  state = {
    suggestionList: [],
    categoryList: [],
  };

  async componentDidMount() {
    const movies = await API.getSuggestion(10);
    const categories = await API.getMovies();
    console.log(categories);
    this.setState({
      suggestionList: movies,
      categoryList: categories,
    });
  }

  render() {
    return (
      <Home>
        <Header />
        <Text>buscador</Text>
        <Text>categorias</Text>
        <Text>sugerencias</Text>
        <CategoryList list={this.state.categoryList} />
        <SuggestionList list={this.state.suggestionList} />
      </Home>
    );
  }
}

export default App;
