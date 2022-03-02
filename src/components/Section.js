import React from 'react'
import Header from './Header'
// import image
import telkom from './assets/telkom.png'
// import css untuk Section 
import './style/Section.css' 

const Section = () => {
    return (
        <section className='section'>
            <Header/>

            <div className="section__box">
                <div className="section__content">
                    <h1 className='content__header'>Informatics School</h1>
                    <p>Pelopor SMK bidang Teknologi dan Informatika di Indonesia</p>
                    <p className='small__p'>Reach Yor Future</p>
                    <button>Join Us</button>
                    <button>Discover</button>
                </div>

                <div className="section__img">
                    <img src={telkom} alt="" />
                </div>
            </div>

        </section>
    )
}

export default Section