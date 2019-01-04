import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./CategoryPage.module.css";

const CategoryPage = props => {
  return (
    <section className={styles.linkContainer}>
      <h1 className={styles.header}>Rental</h1>
      {props.items.dataItems.map(item => (
        <NavLink
          to={`/Rental/${item.Slug}`}
          key={item.id}
          className={styles.link}
        >
          {item.Name}
        </NavLink>
      ))}
    </section>
  );
};

export default CategoryPage;
