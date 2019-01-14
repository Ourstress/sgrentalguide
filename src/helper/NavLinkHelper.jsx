import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavLinkHelper.module.css";

export const NavLinkFromFilterArray = (
  itemToBeMapped,
  placeToRunFilter,
  filterCriteria,
  category
) => {
  return itemToBeMapped
    .filter(item => item[placeToRunFilter].includes(filterCriteria))
    .map(item => (
      <NavLink
        to={`/${category}/${item.Slug}`}
        key={item.id}
        className={styles.link}
      >
        {item.Name}
      </NavLink>
    ));
};

// Old Code
// {props.items.dataItems
//     .filter(item => !item.Tags.includes("Wiki"))
//     .map(item => (
//       <NavLink
//         to={`/Rental/${item.Slug}`}
//         key={item.id}
//         className={styles.link}
//       >
//         {item.Name}
//       </NavLink>
//     ))}
