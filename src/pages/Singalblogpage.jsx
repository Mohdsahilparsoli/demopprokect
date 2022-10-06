import axios from "axios";
import React, { useEffect, useState } from "react";
import { Await, useParams } from "react-router-dom";
import Header from "../components/Header";
import { FaEdit } from "react-icons/fa";
import {AiFillDelete} from "react-icons/ai"
const Singalblogpage = () => {
const [ourdata, mydata] = useState([]);
const [iserror, seterror] = useState("");

const[detedatablog,confirmdelte] = useState(null)

console.log(detedatablog)
const dayanamaicurl = useParams();
console.log();
const Fetchdataapi = async () => {
try {
const fetchdata = await axios.get(`http://localhost:3000/posts/${dayanamaicurl.id}`);
mydata(fetchdata.data);
} catch (err) {
seterror(err.message);
}
};


const detedata = async ()=>{
  try{
    let removedata = await axios.delete(`http://loalhost:3000/posts/${dayanamaicurl.id}`)
    confirmdelte("Delete successful")
  }catch{

  }
}

const  deltepost = ()=>{
    
}

const editpost = ()=>{
    alert("editpost")
}
useEffect(() => {
Fetchdataapi();
}, []);
useEffect(()=>{   
detedata();
},[detedatablog])

return (
<>
<Header />
<h2>{iserror}</h2>
<div className="mainblog-data">
<h1>{ourdata.title}</h1>
<p>{ourdata.boyd}</p>
<h6>{ourdata.author}</h6>
<div className="maiicon">

    <button onClick={editpost}><FaEdit/> </button>
    <button onClick={deltepost}> <AiFillDelete/></button>
</div>
</div>
</>
);
};

export default Singalblogpage;
