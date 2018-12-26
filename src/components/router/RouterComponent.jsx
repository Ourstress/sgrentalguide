import React from "react";
import { HashRouter as Router, Route, NavLink, Switch } from "react-router-dom";

import CategoryPage from "../categoryPage/CategoryPage";
import DetailsPage from "../detailsPage/DetailsPage";
import MenuToggle from "../nav/MenuToggle";
import AirtableAPI from "../../data/AirtableAPI";

const RouterComponent = () => {
  const { sidebar, setSidebar, SidebarMenuToggle } = MenuToggle();
  const rentalResults = AirtableAPI("Rental");
  return (
    <Router>
      <React.Fragment>
        <nav className="header">
          <NavLink to="#">Sgpropguide</NavLink>
          {SidebarMenuToggle}
        </nav>
        <main>
          <nav className={sidebar ? "sidebar" : "hiddenSidebar"}>
            <NavLink to={"/Rental"}>Rental</NavLink>
          </nav>
          <Switch>
            <Route
              exact
              path={"/Rental"}
              render={() => <CategoryPage items={rentalResults} />}
            />
            {rentalResults.dataItems.map(dataItem => (
              <Route
                path={`/Rental/${dataItem.id}`}
                key={dataItem.id}
                render={() => (
                  <DetailsPage content={dataItem} setSidebar={setSidebar} />
                )}
              />
            ))}
          </Switch>
        </main>
      </React.Fragment>
    </Router>
  );
};

export default RouterComponent;
