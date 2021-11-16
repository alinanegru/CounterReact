import React from "react";

const Tweet = (props) =>(
   <div>
       <h2>{props.name}</h2>
       <h2>{props.tweet}</h2>
       
   </div>
);
export default Tweet;