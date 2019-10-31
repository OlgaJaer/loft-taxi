import React from "react";
import "./App.css";
import { Profile } from "./Profile/Profile";
import { Login } from "./Login";
import { Map } from "./Map/Map";
import { Signup } from "./Signup";
import { Header } from "./Shared/Header/Header";

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
