import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import { Switch } from "react-router-dom";
import ListEmployeeComponent from "../src/components/ListEmployeeComponent";
import HeaderComponent from "../src/HeaderComponent/HeaderComponent";
import FooterComponent from "./FooterComponent/FooterComponent";
import CreateEmployeeComponent from "../src/components/ListEmployeeComponent";
import ViewEmployeeComponent from "../src/components/ListEmployeeComponent";

function App() {
  return (
    <div>
      <HeaderComponent />
      <div className="container">
        <Router>
          <Route path="/" exact component={CreateEmployeeComponent}></Route>
          <Route path="/employees" component={ListEmployeeComponent}></Route>
          <Route path="/add-employee/:id" component={CreateEmployeeComponent}></Route>
          <Route path="/view-employee/:id" component={ViewEmployeeComponent}></Route>
          </Router>
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
