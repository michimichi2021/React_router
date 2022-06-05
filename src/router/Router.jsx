import { Switch, Route } from "react-router-dom";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route
        path="/page1"
        render={({ match: { url } }) => <Switch>{page1Routes}</Switch>}
      />
      <Route path="/page2">
        <Page2 />
      </Route>
    </Switch>
  );
};
