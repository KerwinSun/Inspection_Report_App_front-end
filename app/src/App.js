import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  ForgotPasswordPage,
  LoginPage,
  RegisterPage,
  Error400,
  Error401,
  Error403,
  Error404,
  Error500,
  Error503,
  Empty,
  Email,
  ProfilePage,
} from "./pages";

import HomePage from "./HomePage";
import FormElementsPage from "./FormElementsPage";
import PricingCardsPage from "./interface/PricingCardsPage";
import CardsDesignPage from "./interface/CardsDesignPage";
import StoreCardsPage from "./components/StoreCardsPage";
import IconPage from "./components/IconPage";
import ChartsPage from "./interface/ChartsPage";
import GalleryPage from "./GalleryPage";
import BlogPage from "./components/BlogPage";

import "tabler-react/dist/Tabler.css";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/400" component={Error400} />
        <Route exact path="/401" component={Error401} />
        <Route exact path="/403" component={Error403} />
        <Route exact path="/404" component={Error404} />
        <Route exact path="/500" component={Error500} />
        <Route exact path="/503" component={Error503} />
        <Route exact path="/blog" component={BlogPage} />
        <Route exact path="/cards" component={CardsDesignPage} />
        <Route exact path="/charts" component={ChartsPage} />
        <Route exact path="/email" component={Email} />
        <Route exact path="/empty-page" component={Empty} />
        <Route exact path="/form-elements" component={FormElementsPage} />
        <Route exact path="/forgot-password" component={ForgotPasswordPage} />
        <Route exact path="/gallery" component={GalleryPage} />
        <Route exact path="/icons" component={IconPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/pricing-cards" component={PricingCardsPage} />
        <Route exact path="/profile" component={ProfilePage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/store" component={StoreCardsPage} />
        <Route component={Error404} />
      </Switch>
    </Router>
  );
}

export default App;
