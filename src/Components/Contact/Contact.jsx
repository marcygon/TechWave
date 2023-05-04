import React from 'react'

function Contact() {
  return (
    <form className='contact'>
        <div className='leftSide'>
            <input type='text' placeholder='Your Name'/>
            <input type='text' placeholder='Your Email'/>
            <input type='text' placeholder='Share your thoughts'/>
            <button>SHARE YOUR FEEDBACK</button>
        </div>
        <div className='rightSide'>
            <h1>Contact</h1>
            <h1>____Us</h1>
            <p>It is very important for us to keep in touch with you, so we are always ready to answer any question that interests you. Shoot!</p>
        </div>
        
    </form>
  )
}

export default Contact
