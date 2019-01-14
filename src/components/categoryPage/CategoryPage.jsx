import React from "react";
import styles from "./CategoryPage.module.css";
import { NavLinkFromFilterArray } from "../../helper/NavLinkHelper";

const CategoryPage = props => {
  return (
    <section className={styles.linkContainer}>
      <h1 className={styles.header}>{props.heading}</h1>
      {NavLinkFromFilterArray(
        props.items.dataItems,
        "Tags",
        props.filterCriteria,
        props.urlCategory
      )}
    </section>
  );
};

export default CategoryPage;
