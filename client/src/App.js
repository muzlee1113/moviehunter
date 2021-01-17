import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Search from "./pages/Search"
import Result from "./pages/Result"
import NoMatch from "./pages/NoMatch";
import MovieDetail from "./pages/MovieDetail";




class App extends Component {
  render() {
    return (<>
      <Header/>
      <Router>
          <Switch>
            <Route exact path="/" render={props=><Search {...props}/>} />
            <Route exact path="/result" render={props=><Result {...props} />}/>
            <Route exact path="/movie/:id" component={MovieDetail}  />
            <Route component={NoMatch} />
          </Switch>
      </Router>
      <Footer/>
    </>);
  }
}

export default App;
