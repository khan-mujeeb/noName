import React from 'react'

const InfoBlock = ({icon, data}) => {
  return (
    <div className='flex gap-2 items-center'>
        <div>{icon}</div>
        <div>{data}</div>
    </div>
  )
}

export default InfoBlock