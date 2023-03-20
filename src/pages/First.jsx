import React from 'react'
import FirstBottom from '../components/FirstBottom'
import GoogleLogin from '../components/GoogleLogin'

function First() {
  return (
    <div className='First'>
      <div className='top'>
        <div className='text'>Signin Document using</div>
        <div className="image-container">
          <img className='image' src="/images/generic-logo-hi.png" alt="" />
        </div>
      </div>
      <div className='google'>
        <div >Login using Google</div>
        <div className='googleButton'>
          <GoogleLogin />
        </div>
      </div>
      <div className="line">
        <div className="one">.</div>
        <div className="two">OR</div>
        <div className="three"></div>
      </div>

      <div className="bottom">
        <div className="input">
          <FirstBottom />
        </div>
      </div>
    </div>
  )
}

export default First