import React from "react";

const CategoryPage = props => {
  return (
    <section>
      {props.items.map(item => (
        <p>{item.name}</p>
      ))}
    </section>
  );
};

export default CategoryPage;
