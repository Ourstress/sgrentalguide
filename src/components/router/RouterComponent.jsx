import React from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";

import data from "../../data/data";

import CategoryPage from "../categoryPage/CategoryPage";
import DetailsPage from "../detailsPage/DetailsPage";

const RouterComponent = () => {
  return (
    <Router>
      <React.Fragment>
        <nav className="header">
          <NavLink to="#">Login</NavLink>
        </nav>
        <main>
          <nav className="sidebar">
            {Object.keys(data).map(dataItem => (
              <NavLink to={`/${dataItem}`} key={dataItem}>
                {dataItem}
              </NavLink>
            ))}
          </nav>
          <Switch>
            {Object.keys(data).map(dataItem => (
              <Route
                exact
                path={`/${dataItem}`}
                key={dataItem}
                render={() => (
                  <CategoryPage items={data[dataItem]} title={dataItem} />
                )}
              />
            ))}
            {Object.keys(data).map(dataItem =>
              data[dataItem].map(item => (
                <Route
                  path={`/${dataItem}/${item.id}`}
                  key={item.id}
                  render={() => <DetailsPage content={item} />}
                />
              ))
            )}
          </Switch>
        </main>
      </React.Fragment>
    </Router>
  );
};

export default RouterComponent;
