import React from 'react'
import './Loading.css'
import loadingspinner from '../../../public/loading.svg'
const Loading = () => {
  return (
    <div className='loader_container'>
        <img src={loadingspinner} className='loader' alt="loader" />
    </div>
  )
}

export default Loading