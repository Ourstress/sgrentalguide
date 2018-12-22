import React from "react";

const CategoryPage = props => {
  return (
    <section>
      <h1>{props.title}</h1>
      {props.items.map(item => (
        <p key={item.name}>{item.name}</p>
      ))}
    </section>
  );
};

export default CategoryPage;
