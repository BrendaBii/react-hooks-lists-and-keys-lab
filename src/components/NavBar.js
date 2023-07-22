import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (
  <nav>
    <a href={'#'+ links[0]} key='home'>home</a>
    <a href={'#'+ links[1]} key='about'>about</a>
    <a href={'#'+ links[2]} key='projects'>projects</a>
  </nav>
  )
}

export default NavBar;
