import React from "react";
import {
  BrowserRouter,
  Link
} from "react-router-dom";
import "./root.component.css";

export default function Root() {
  return ( <
    BrowserRouter >
    <
    nav className = "nav" >
    <
    Link to = "/page-one"
    className = "link" >
    Page 1 <
    /Link> <
    Link to = "/page-two"
    className = "link" >
    Page 2 <
    /Link> <
    Link to = "/page-three"
    className = "link" >
    Page 3 <
    /Link> <
    /nav> <
    /BrowserRouter>
  );
}