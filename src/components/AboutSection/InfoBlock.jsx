import React from 'react'

const InfoBlock = ({icon, data}) => {
  return (
    <div className=' text-gray-700 flex gap-2 items-center backdrop-blur-sm'>
        <div className='dark:text-white'>{icon}</div>
        <div className="dark:text-gray-200">{data}</div>
    </div>
  )
}

export default InfoBlock