import React from "react";

const Layout = ({ children }) => (
  <div className="bg-black-10">
    <header className="pa3 bg-blue f2 tc">Most popular movies of 2016</header>
    <div className="center mw8">{children}</div>
  </div>
);

export { Layout };
