import React from 'react'
import "./Jion.scss"
 const Jion = () => {
  return (
    <div className='jion'>
    <div className='left-j'>
        <hr />
        <div>
            <span className='stroke-text'>Ready to</span>
            <span>Level up</span>
        </div>
        <div>
            <span>your body</span>
            <span className='stroke-text'>with us?</span>
        </div>
    </div>
    <div className='right-j'>
        <from className="email-container">
            <input type="email" name="user_email" placeholder='Enter your Email'></input>
            <button className='btn btn-j'>Jion Now</button>
        </from>
    </div>
    </div>
  )
}
export default Jion