import React from 'react';
import "./App.css"
import { Header } from './components/common/heading/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from './components/common/home/Home';
import About from './components/about/About';
import Schemes from './components/schemes/Schemes';
import Team from './components/common/team/Team';
import Contact from './components/contact/Contact';
import Footer from "./components/common/Footer/Footer"
import Gallery from './components/gallery/Gallery';
import Support from './components/support/Support';

export const App = () => {
  return (
    <div>
      
      <Router> 
      <Header />
        <Switch>
            <Route path='/' exact component ={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/schemes" exact component={Schemes} />
            <Route path="/team" exact component={Team} />
            <Route path="/gallery" exact component={Gallery} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/support" exact component={Support} />
        </Switch>
        <br />
        <Footer />
      </Router>

    </div>
  ) 
}


export default App;
