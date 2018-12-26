import React, { useState } from "react";
import styles from "./MenuToggle.module.css";

const MenuToggle = () => {
  const [sidebar, setSidebar] = useState(false);
  const SidebarMenuToggle = (
    <div id={styles.menuToggle}>
      <input
        type="checkbox"
        onChange={() => setSidebar(!sidebar)}
        checked={sidebar}
      />
      <span />
      <span />
      <span />
    </div>
  );
  return {
    sidebar,
    setSidebar,
    SidebarMenuToggle
  };
};

export default MenuToggle;
