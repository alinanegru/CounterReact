import React from "react";

const Video = (props) =>{

    return(
    <section>
        <h1>Video{props.nr}</h1>
        <button onClick={props.setToggle}>ToggleMe</button>
    </section>
)
};
export default Video;