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
      <Route path='/home' exact component ={Home} active />
      
        <Switch>
           
            <Route path="/about" component={About} />
            <Route path="/schemes" component={Schemes} />
            <Route path="/team"  component={Team} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/contact" component={Contact} />
            <Route path="/support" component={Support} />
        </Switch>
        <br />
        <Footer />
      </Router>

    </div>
  ) 
}


export default App;
