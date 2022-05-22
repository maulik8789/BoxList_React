import React, { useState } from "react";

const NewBoxForm = ({ addBox }) => {
  const INITIAL_STATE = {
    color: "",
    width: "",
    height: ""
  }
  const [formData, setFormData] = useState(INITIAL_STATE);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    addBox({ ...formData });
    setFormData(INITIAL_STATE)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="color">Box Color</label>
      <input
        id="color"
        type="text"
        name="color"
        placeholder="color"
        value={formData.color}
        onChange={handleChange}
      /> <br />

      <label htmlFor="width">Width</label>
      <input
        type="number"
        placeholder="width"
        name="width"
        id="width"
        value={formData.width}
        onChange={handleChange}
      />
         <br />
      <label htmlFor="height">Height</label>
      <input
        type="number"
        placeholder="height"
        name="height"
        id="height"
        value={formData.height}
        onChange={handleChange}
      />

      <button>Add me to list!</button>
    </form>
  )

}

export default NewBoxForm;


