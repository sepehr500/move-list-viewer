import React from "react";

const Layout = ({ children }) => (
  <div className="bg-black-10">
    <header className="pa3 bg-blue f2 tc">Movie List Viewer</header>
    <div className="center mw8">{children}</div>
  </div>
);

export { Layout };
