import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from './components/Navigation'
import Demo from './components/Demo';
import Form from './components/Form';
import UserList from "./components/UserList";
import LayoutGrid from "./components/LayoutGrid";
import LayoutStack from "./components/LayoutStack";
import IndexForm from "./components/IndexForm";
import IndexForm2 from "./components/IndexForm2";

function App() {
  return (
    <div className="App">
    <Navigation/>
    {/* <Demo/> */}
    <Form/>
    {/* <UserList/> */}
    {/* <LayoutGrid/> */}
    {/* <LayoutStack/> */}
    <IndexForm/>
    <IndexForm2/>
    </div>
  );
}

export default App;
