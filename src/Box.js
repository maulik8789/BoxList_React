import React from "react";
import "./Box.css";

const Box = ({ id, color, width, height, remove }) => {

  return (
    <div>
        <div onClick={()=> remove(id)} 
          style={{
            backgroundColor : color, 
            width : `${width}px`, 
            padding : `${height}px`,
            }}
          > 
        </div>
    </div>
  )

}

export default Box;

