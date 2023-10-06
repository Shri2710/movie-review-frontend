import React from 'react'

const Submit = ({value}) => {
  return (
    <div className='text-center mt-5'>
        <input type='submit' className='w-9/12  rounded dark:bg-white dark:text-primary text-white bg-primary hover:bg-opacity-90 p-1' value={value}/>
    </div>
  )
}

export default Submit