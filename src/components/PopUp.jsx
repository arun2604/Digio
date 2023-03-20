import React, { useState } from 'react'

function PopUp(props) {
  const {popup, handleClose,sign}=props;
  const [adhar,setAadhaar] = useState()
  const [reqOtp,setReqOtp] = useState(false)
  const [check,setCheck] = useState(false)
  const [otp , SetOtp] = useState() 
  const [otpOk,setOtpOk] = useState(false)

  const handleAadhar = (value) => {
    setAadhaar(value)
    if(adhar.toString().length === 12 ){
      setReqOtp(true)
    }
    else{
      setReqOtp(false)
    }
  }
  const handleCheck = () => {
    setCheck(!check)
  }

  const handleOtp = (value) => {
    SetOtp(value)
    if(otp.toString().length === 6 ){
      setOtpOk(true)
    }
    else{
      setOtpOk(false)
    }
  }


  return(popup) ? (
    <div>
      <div className="popup">
        <div className="popup-inner">
          <div className = 'popupText'>Register Aadhar</div>
          <hr></hr>
          <div className='aadharNum'>
            <img src="/images/Aadhaar.png" alt="" />
            <input type="number"  onChange={(e)=> handleAadhar(e.target.value)}/>
            <button className={reqOtp ? 'verify' : 'verifyWrong'}  >Verify</button>
          </div>
          <div className="check">
            <input type="checkbox" name="" id="checkbox" onClick={handleCheck}/>
            <label htmlFor="checkbox">I aggre to eSign this KYC document to get started</label>
          </div>
          <div className="otp">
            <div>
              <input type="number"  onChange={(e)=> handleOtp(e.target.value)} />
            </div>
            <div className='otpButton'>
            <button className={check? otpOk ?'otpSubmit' : 'otpSubmitTwo':'otpSubmitTwo'} onClick={handleClose}>Submit</button>
            </div>
          </div>
          <button className={check ? "closeBtn" : 'closeBtnTwo'} >Request OTP</button>
        </div>
      </div>
    </div>
  ) : (
    <div>
      <div className="popupTwo">
        <div className="popup-inner">
          <div className = 'popupText'>{sign ? 'Signing...' : 'Signed'}</div>
        </div>
      </div>

    </div>
  )
}

export default PopUp