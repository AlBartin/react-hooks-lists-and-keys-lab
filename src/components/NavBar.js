import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (
  <nav>
    {links.map((linkItem) => <a href={`#${linkItem}`} key={linkItem}>{linkItem}</a>)}
  </nav>)
}
export default NavBar;
