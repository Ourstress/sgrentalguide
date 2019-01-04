import React, { useEffect } from "react";
import { HashRouter as Router, Route, NavLink, Switch } from "react-router-dom";

import CategoryPage from "../categoryPage/CategoryPage";
import DetailsPage from "../detailsPage/DetailsPage";
import MenuToggle from "../nav/MenuToggle";
import { fetchAllData } from "../../data/AirtableAPI";
import Auth from "../../data/Auth";

const RouterComponent = () => {
  const { sidebar, setSidebar, SidebarMenuToggle } = MenuToggle();
  const {
    authWithGithub,
    userAuthStatus,
    localStorageTokenCheck,
    userData
  } = Auth();
  const rentalResults = fetchAllData("Rental");
  useEffect(() => {
    localStorageTokenCheck();
  }, []);
  return (
    <Router>
      <React.Fragment>
        <nav className="header">
          <NavLink to="#">Sgpropguide</NavLink>
          {SidebarMenuToggle}
          {userAuthStatus ? (
            ""
          ) : (
            <button onClick={authWithGithub} className="authWithGithub">
              Login
            </button>
          )}
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
                  <DetailsPage
                    content={dataItem}
                    setSidebar={setSidebar}
                    userData={userData}
                  />
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
