import React from 'react'

const Submit = ({value}) => {
  return (
    <div className='text-center'>
        <input type='submit' className='w-9/12  rounded bg-white hover:bg-opacity-90 p-1' value={value}/>
    </div>
  )
}

export default Submit