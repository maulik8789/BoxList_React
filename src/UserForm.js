import React, { useState } from "react";

const UserForm = () => {
  const initialState = {
    color: "",
    width: "",
    height: ""
  }
  const [formData, setFormData] = useState(initialState)
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(data => ({
      ...data,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { color, width, height } = formData;
    // alert(`Created box, ${color} w/ email ${email} & password ${password}`)
    setFormData(initialState)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="color">Box Color</label>
      <input
        id="color"
        type="text"
        name="color"
        placeholder="username"
        value={formData.color}
        onChange={handleChange}
      />

      <label htmlFor="width">Width</label>
      <input
        type="number"
        placeholder="width"
        name="width"
        id="width"
        value={formData.width}
        onChange={handleChange}
      />

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

export default UserForm;