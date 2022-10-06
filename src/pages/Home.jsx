import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../components/Header";

const Home = () => {
return (
<>
<Header/>
<div className="link">
<h1>
<NavLink to={"/posts"}> GO TO BLOG SECTION</NavLink>
</h1>
</div>
</>
);
};

export default Home;
