import React from "react";
import { NavLink } from "react-router-dom";

const CategoryPage = props => {
  return (
    <section>
      <h1>{props.title}</h1>
      {props.items.map(item => (
        <NavLink to={`/${props.title}/${item.id}`} key={item.id}>
          {item.name}
        </NavLink>
      ))}
    </section>
  );
};

export default CategoryPage;
