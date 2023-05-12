import mypic from "../Assets/download.jpg"
import link from "./link";
import Link from "./link";
import { useState } from "react";
function Projects() {
    const [show,setShow]=useState(false)
    const handleClick=()=>{setShow(!show)
    console.log(show)}
    return (
        <div id="Projects">
            <button onClick={handleClick}>
            <img src={mypic} alt="Projects"></img>
            </button>
             {show?<Link />:<></>}
        </div>

    )
}

export default Projects;
