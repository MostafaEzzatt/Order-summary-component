import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Styles/include.scss";

/* Components */
import Nav from "./Components/nav";

/* Pages */
import Index from "./Pages/Index";
import Country from "./Pages/Country";
import Error from "./Pages/Error";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Index />
        </Route>
        <Route path="/country/:name" children={<Country />}></Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
