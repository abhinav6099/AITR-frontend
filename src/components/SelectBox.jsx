import React from "react"

export const SelectBox = (({ onChange, onBlur, name, label ,options , register }) => (
  <>
    <label>{label}</label>
    <select name={name} onChange={onChange} onBlur={onBlur} {...register(label)}>
      {/* can use mapping here */}
      <option options={options[0]} >{options[0]}</option>
      <option options={options[1]}>{options[1]}</option>
    </select>
  </>
))