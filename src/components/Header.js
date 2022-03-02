import { Close, MenuOutlined } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import React, {useState} from 'react'
// import logo picture from assets
import profile from './assets/profile.png'
import './style/Header.css'

const Header = () => {

    // build state 
    // if it's active that means if i press that button (close)
    // just take our noteboard back
    // if we press close button if it's closed take away
    // that means we should use two class names for it    
    const [active,setActive] = useState(false)
    // that means by default it's closed 
    // give function in order to toggle it 
    const showUl = () => {
        setActive(!active) // that means true
    }

    return (
        <div className='header'>

            <div className="header__logo">
                <img src={profile} alt="" />
            </div>

            <div className="menu__icon">
                <MenuOutlined className='menu' onClick={showUl}/>
            </div>

            {/* <div className="close__icon">
                <Close className='close'/>
            </div> */}

            <nav>

                {/* <ul className='list__items'> */}
                {/* active ? y : n */}
                <ul className={active ? 'list__items active' : 'list__items'}>   

                    <div className="close__icon">
                        <Close className='close' onClick={showUl}/>
                    </div>

                    <li><Link to='/'>Home</Link></li>

                    <li><Link to='/about'>About</Link></li>

                    <li><Link to='/contact'>Contact</Link></li>

                </ul>

            </nav>

        </div>
    )
}

export default Header