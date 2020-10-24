import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import AddProjectView0 from "./pages/AddProjectView0";
import AddProjectView1 from "./pages/AddProjectView1";
import AddProjectView2 from "./pages/AddProjectView2";
import AddProjectView3 from "./pages/AddProjectView3";
import AddProjectView4 from "./pages/AddProjectView4";
import AddProjectViewDone from "./pages/AddProjectViewDone";
import AuthMenuMobile from "./pages/AuthMenuMobile";
import AuthWelcomeView from "./pages/AuthWelcomeView";
import MenuMobile from "./pages/MenuMobile";
import Projects from "./pages/Projects";
import SignIn from "./pages/SignIn";
import SignUpDesktop from "./pages/SignUpDesktop";
import SignUpFull1Mobile from "./pages/SignUpFull1Mobile";
import SignUpFull2Mobile from "./pages/SignUpFull6Mobile";
import SignUpFull6Mobile from "./pages/SignUpFull6Mobile";
import SignUpMobile from "./pages/SignUpMobile";
import WelcomePage from "./pages/WelcomePage";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route path="/pages/sign-up-desktop">
          <SignUpDesktop />
        </Route> */}
        {/* <Route path="/pages/sign-in">
          <SignIn />
        </Route> */}
        <Route path="/pages/add-project-view-0">
          <AddProjectView0 />
        </Route>
        <Route path="/pages/add-project-view-1">
          <AddProjectView1 />
        </Route>
        <Route path="/pages/add-project-view-2">
          <AddProjectView2 />
        </Route>
        <Route path="/pages/add-project-view-3">
          <AddProjectView3 />
        </Route>
        <Route path="/pages/add-project-view-4">
          <AddProjectView4 />
        </Route>
        <Route path="/pages/add-project-view-done">
          <AddProjectViewDone />
        </Route>
        <Route path="/pages/auth-welcome-view">
          <AuthWelcomeView />
        </Route>
        <Route path="/">
          <WelcomePage />
        </Route>
        <Route path="/pages/sign-up-full-1-mobile">
          <SignUpFull1Mobile />
        </Route>
        <Route path="/pages/sign-up-full-2-mobile">
          <SignUpFull2Mobile />
        </Route>
        <Route path="/pages/sign-up-full-6-mobile">
          <SignUpFull6Mobile />
        </Route>
      </Switch>
      <Route path="/pages/sign-up-desktop">
        <SignUpDesktop />
      </Route>{" "}
      <Route path="/pages/sign-in">
        <SignIn />
      </Route>
    </BrowserRouter>
  );
};

export default Router;
