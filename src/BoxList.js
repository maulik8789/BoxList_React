import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import Box from "./Box"
import NewBoxForm from "./NewBoxForm";


const BoxList = () => {
  const INITIAL_STATE = [
  ]
  const [boxes, setBoxes] = useState(INITIAL_STATE);
  const addBox = (newBox) => {
    setBoxes(b => [...b, { ...newBox, id: uuid() }])
  }
  const remove = (idx) => {
    console.log("clicked", idx)
    setBoxes(
      boxes.filter(box => box.id != idx)
    )
  }
  return (
    <div>
      <p>Box List</p>
      <NewBoxForm addBox={addBox} />
        <div>
            {boxes.map(({ id, color, width, height }) => 
                <Box id={id} 
                    remove= {remove}
                    color={color} 
                    width={width} 
                    height={height} 
                    key={id} 
                />
            )}
        </div>

    </div>
  )

}

export default BoxList;