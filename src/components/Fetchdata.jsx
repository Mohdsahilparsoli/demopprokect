import React from "react";
import { Link } from "react-router-dom";

const Fetchdata = ({ blogid, mytitle, bodydata, ourauthor }) => {
   
return (
<>
<div className="blog" key={blogid}>
<h1> <Link to={`posts/${blogid}`}>{mytitle} </Link>  </h1>
<p>{bodydata}</p>
<h6>{ourauthor}</h6>
</div>
</>
);
};

export default Fetchdata;
