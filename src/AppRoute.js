import React, { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Nav } from "./Nav";

const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));

export function AppRoute() {
  return (
    <Suspense
      fallback={
        <div
          style={{
            display: "grid",
            height: "100vh",
            placeItems: "center",
          }}
        >
          loading...
        </div>
      }
    >
      <BrowserRouter>
        <div>
          <Nav />
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </Suspense>
  );
}
