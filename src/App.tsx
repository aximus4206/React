import React from 'react';
import List from './components/List/List';
import Category from './components/Category/Category';
import Posts from './Build/PostBase';

function App() {
  return <>
    <List Posts={Posts} />
    <Category Posts={Posts} />
  </>;
}

export default App;
