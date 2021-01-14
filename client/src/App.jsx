import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from "./Containers/Container";
import HomePage from "./Pages/HomePage/HomePage";
import { Provider } from "react-redux";
import { store } from "./store";
import TopSearchedPage from "./Pages/TopSearchedPage/TopSearchedPage";
import BreedDetailsPage from "./Pages/BreedDetailsPage/BreedDetailsPage";
import Article from "./Pages/Article/Article";

function App(props) {
  return (
    <Provider store={store}>
      <Router>
        <Container>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/top-searched" component={TopSearchedPage} />
            <Route
              exact
              path="/why-should-you-have-a-cat"
              component={Article}
            />
            <Route exact path="/:breedId" component={BreedDetailsPage} />
          </Switch>
        </Container>
      </Router>
    </Provider>
  );
}

export default App;
