import React from "react";

const Post = (props) => {
    console.log(props)
    return (
   <div>
       <h1>nick:</h1><span>{props.nick}</span>
       <h2>mensaje:</h2><span>{props.mensaje}</span>
   </div>
    )
    
}


export default Post;