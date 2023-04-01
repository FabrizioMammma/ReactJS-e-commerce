import React from 'react';
import { DotSpinner } from '@uiball/loaders'
import './loader.css'


function Loader() {
  return (
    <div className='div-loader--container'>
      <div className='div-loader--wobble'>
        <DotSpinner size={100} color={'white'} />
      </div>
    </div>
  )
}

export default Loader;