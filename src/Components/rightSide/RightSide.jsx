import React from 'react'
import Image from 'react-bootstrap/Image'
import loginImg from '../../assets/img/7566.jpg'
function RightSide() {
  return (
    <div>
      <Image src={loginImg} thumbnail style={{border:'none'}}/>
    </div>
  )
}

export default RightSide
