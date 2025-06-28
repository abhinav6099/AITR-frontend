import React from 'react'

function CalenderBox({register}) {
  return (
    <div>
        <label>Starting date</label>
        <input type='date'  {...register("startingDate")} />
    </div>
  )
}

export default CalenderBox