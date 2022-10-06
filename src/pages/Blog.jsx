import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import Fetchdata from "../components/Fetchdata";
import Header from "../components/Header";

const Blog = () => {
const [ourdata,mydata] = useState([]);
const [iserror , seterror] = useState('');
const dayanamaicurl  = useParams();
const Fetchdataapi = async()=>{
    try{
        const fetchdata = await axios.get(`http://localhost:3000/posts`);
        mydata(fetchdata.data)
    }catch(err){
        seterror(err.message)    
    }
} 
useEffect(()=>{
Fetchdataapi();
},[])
return <>
<Header/>


<a href="#" className="addblog"> Add new blog</a>
<div className="mainblog">
<h1> {iserror}</h1>



{
    ourdata.map((posts)=>{

        const {id,title,boyd ,author} = posts
        return (<> 
                    <div className="blog" key={id}>
                    <h1> <Link to={`/post/${id}`}>{title} </Link>  </h1>
                    <p>{boyd}</p>
                    <h6>{author}</h6>

                </div>
        </>) 
    })
}
</div>


</>;
};

export default Blog;
