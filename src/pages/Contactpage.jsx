import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../components/Header";
const Contactpage = () => {
return (
<>
<Header/>
<div className="link">
<h1>
<NavLink to={"#"}>CONTACT PAGE</NavLink>
</h1>
</div>
</>
);
};

export default Contactpage;
