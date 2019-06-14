import React from "react";

const Layout = ({ children }) => (
  <div>
    <header className="pa3 bg-blue f2 white tc">
      Most popular movies of 2016
    </header>
    <div className="center mw8">{children}</div>
  </div>
);

export { Layout };
