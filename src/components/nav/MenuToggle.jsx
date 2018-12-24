import React, { useState } from "react";
import styles from "./MenuToggle.module.css";

const MenuToggle = () => {
  const [sidebar, setSidebar] = useState(false);
  const SidebarMenuToggle = (
    <div id={styles.menuToggle}>
      <input type="checkbox" onClick={() => setSidebar(!sidebar)} />
      <span />
      <span />
      <span />
    </div>
  );
  return {
    sidebar,
    SidebarMenuToggle
  };
};

export default MenuToggle;
