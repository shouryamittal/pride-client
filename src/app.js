import React from 'react';
import './app.scss';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Home from './components/home/home';

class App extends React.Component {
  render() {
    return(
      <div className="app">
        <Header/>
        <Home/>
        <Footer/>
      </div>
    );
  }
}

export default App;
