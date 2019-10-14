import React from 'react';
import {Text} from 'react-native';

import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';
import SuggestionList from './src/videos/container/suggestion-list';

export default function() {
  return (
    <Home>
      <Header />
      <Text>buscador</Text>
      <Text>categorias</Text>
      <Text>sugerencias</Text>
      <SuggestionList />
    </Home>
  );
  1;
}
