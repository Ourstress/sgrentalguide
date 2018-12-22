import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import data from "../../data/data";

import CategoryPage from "../categoryPage/CategoryPage";

const RouterComponent = () => {
  return (
    <Router>
      <React.Fragment>
        <nav>
          {Object.keys(data).map(dataItem => (
            <NavLink to={`/${dataItem}`}> {dataItem} </NavLink>
          ))}
        </nav>
        <switch>
          {Object.keys(data).map(dataItem => (
            <Route
              path={`/${dataItem}`}
              render={() => (
                <CategoryPage items={data[dataItem]} title={dataItem} />
              )}
            />
          ))}
        </switch>
      </React.Fragment>
    </Router>
  );
};

export default RouterComponent;
