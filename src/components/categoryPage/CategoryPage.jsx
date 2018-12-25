import React from "react";
import { NavLink } from "react-router-dom";

const CategoryPage = props => {
  return (
    <section>
      <h1>Rental</h1>
      {props.items.dataItems.map(item => (
        <NavLink to={`/Rental/${item.id}`} key={item.id}>
          {item.Name}
        </NavLink>
      ))}
    </section>
  );
};

export default CategoryPage;
