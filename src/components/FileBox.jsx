import React from 'react'

function FileBox({register}) {
  return (
    <div>
        <input type='file' {...register("file")}/>
    </div>
  )
}

export default FileBox