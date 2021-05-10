import "./App.css";
import { Switch, Route } from "react-router-dom";
//layouts
import LandingPageLayout from "./layouts/LandingPage";
//pages
import HomePage from "./pages/HomePage";
const App = () => {
  return (
    <Switch>
      <Route path="">
        <LandingPageLayout>
          <HomePage />
        </LandingPageLayout>
      </Route>
    </Switch>
  );
};

export default App;
