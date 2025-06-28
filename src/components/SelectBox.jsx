import React from "react"

export const SelectBox = (({ onChange, onBlur, name, label }) => (
  <>
    <label>{label}</label>
    <select name={name} onChange={onChange} onBlur={onBlur}>
      <option value="20">20</option>
      <option value="30">30</option>
    </select>
  </>
))