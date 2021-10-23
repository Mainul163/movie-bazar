import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.scss";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import MovieDetail from "./Components/MovieDetail/MovieDetail";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movie/:movieId" component={MovieDetail} />
          <Route path="/pageNotFound" component={PageNotFound} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
