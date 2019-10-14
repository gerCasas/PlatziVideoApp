import React from 'react';
import {Text} from 'react-native';

import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';

export default function() {
  return (
    <Home>
      <Header>
        <Text>test</Text>
      </Header>
      <Text>buscador</Text>
      <Text>categorias</Text>
      <Text>sugerencias</Text>
    </Home>
  );
  1;
}
