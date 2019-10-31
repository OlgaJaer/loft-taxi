import React from "react";
import "./App.css";
import { Profile } from "./components/Profile/Profile";
import { Login } from "./components/Login";
import { Map } from "./components/Map/Map";
import { Signup } from "./components/Signup";
import { Header } from "./components/Shared/Header/Header";

const PAGES = {
  profile: () => <Profile />,
  map: () => <Map />,
  signup: setPage => <Signup setPage={setPage} />,
  login: setPage => <Login setPage={setPage} />
};

function App() {
  const [page, setPage] = React.useState("login");
  return (
    <>
      <Header setPage={setPage} />
      {PAGES[page](setPage)}
    </>
  );
}

export default App;
