import React from "react";
import { MainPage } from "./pages/MainPage";
import { Layout } from "./components/Layout";
import "./App.css";
// Tachyons can be optimized for size later
import "tachyons";

function App() {
  return (
    <Layout>
      <MainPage />
    </Layout>
  );
}

export default App;
