import { ArrowBack } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import './style/Contact.css'

const Contact = () => {
    return (
        <div className='contact'>

            <Link to='/' className='a-icon'><ArrowBack className='icon'/></Link>
        
            <div className="input__container">

                <input type="text" placeholder='Name'/>
                <input type="number" placeholder='Phone' />
                <input type="email" placeholder='Email'/>
                <textarea type="text" placeholder='Message'></textarea>

                <button>Send</button>

            </div>

        </div>
    )
}

export default Contact