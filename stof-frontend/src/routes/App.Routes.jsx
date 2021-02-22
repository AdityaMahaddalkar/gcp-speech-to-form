import React from "react";

import { Nav, Navbar } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NotFoundComponent from "../components/404-not-found/Not.Found.Component";
import FormComponent from "../components/html-form/Form.Component";
import HomeComponent from "../components/home/Home.Component";

import "./App.Routes.css";
import PDFComponent from "../components/pdf-form/PDF.Component";
import HealthComponent from "../components/health/Health.Component";

function AppRoutes() {
  return (
    <React.Fragment>
      {/* Navigation bar declaration */}
      <Router>
        <Navbar bg="light">
          <Navbar.Brand href="#home" className="mx-4">
            STOF
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="custom-navbar-nav"></Navbar.Toggle>
          <Navbar.Collapse>
            <Nav className="d-flex justify-content-center">
              <Nav.Item className="mx-4">
                <Nav.Link href="/home">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item className="mx-4">
                <Nav.Link href="/html-form">HTML Form</Nav.Link>
              </Nav.Item>
              <Nav.Item className="mx-4">
                <Nav.Link href="/pdf-form">PDF Form</Nav.Link>
              </Nav.Item>
              <Nav.Item className="mx-4">
                <Nav.Link href="/health">Health</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {/*  Route - Component correspondence declaration*/}
        <Switch>
          <Route exact path="/html-form">
            <FormComponent />
          </Route>
          <Route exact path="/pdf-form">
            <PDFComponent />
          </Route>
          <Route exact path="/home">
            <HomeComponent />
          </Route>
          <Route exact path="/health">
            <HealthComponent />
          </Route>
          <Route path="/*">
            <NotFoundComponent />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default AppRoutes;
