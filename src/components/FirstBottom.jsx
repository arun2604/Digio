import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function FirstBottom() {
  const navigate = useNavigate()
  const [error, setError] = useState(false)

  const handleChnage = (val) => {
    if (val.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      setError(false)
    } else {
      setError(true)
    }
  }

  const handleContinueError = () => {

  }

  const handleContinue = () => {
    navigate('/second')
  }

  return (
    <>
      <label htmlFor="input">Proceed with email</label>
      <input className='inuputBox' id='input' placeholder="Email" onChange={(e) => handleChnage(e.target.value)} />
      {error ? <p style={{ color: "red" }}>Enter valid Email</p> : ''}

      <div className="continueContainer">
        <h3>
          By continueing, i confirm to the Terms and Condition and private policy of <span>Digio.in</span>
        </h3>
        <div className="continue">
          <button className={error?  'continueBtnFalse': 'continueBtn'} onClick= {error ? handleContinueError : handleContinue }>Continue</button>
        </div>
      </div>
    </>
  );
}

export default FirstBottom