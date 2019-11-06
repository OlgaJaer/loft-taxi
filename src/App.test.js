import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { shallow } from "enzyme";
import LoginForm from "./components/Login/LoginForm";
import renderer from "react-test-renderer";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("render shallow ", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.contains(<LoginForm />)).toEquil(true);
});

it("renders correctly", () => {
  const tree = renderer.cteate(<App />).toJSON();
  expect(tree).toMatchSnapshot()
});
