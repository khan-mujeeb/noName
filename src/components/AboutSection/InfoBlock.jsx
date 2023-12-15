import React from 'react'

const InfoBlock = ({icon, data}) => {
  return (
    <div className=' text-gray-700 flex gap-2 items-center backdrop-blur-sm'>
        <div>{icon}</div>
        <div className=''>{data}</div>
    </div>
  )
}

export default InfoBlock