import React from 'react';
import List from './components/List/List';
import Category from './components/Category/Category';
import Posts from './Build/PostBase';
import './components/App.module.scss'

function App() {
  return <>
    <h1 >All Posts</h1>
    <List Posts={Posts} />
    <h1>Posts sorted by categories</h1>
    <Category Posts={Posts} />
  </>;
}

export default App;
