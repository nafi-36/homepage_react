import React from 'react'
import './style/Galery.css'

import satu from './assets/satu.jpg'
import dua from './assets/dua.jpg'
import tiga from './assets/tiga.jpg'
import empat from './assets/empat.jpg'
import lima from './assets/lima.jpg'
import enam from './assets/enam.jpg'

const Galery = () => {
    return (
        <section className="galery">

            <div className="galery__content">

                <h1>Galery</h1>
                <p>This is galery of Telkom School Malang</p>
            
            </div>

            <div className="galery__container">

                <div className="galery__con">
                <div className="card">
                    <img src={satu} alt="" />
                    <button>See</button>
                </div>
                <div className="card">
                    <img src={dua} alt="" />
                    <button>See</button>
                </div>
                </div>

                <div className="galery__con">
                <div className="card">
                    <img src={tiga} alt="" />
                    <button>See</button>
                </div>
                <div className="card">
                    <img src={empat} alt="" />
                    <button>See</button>
                </div>
                </div>

                <div className="galery__con">
                <div className="card">
                    <img src={lima} alt="" />
                    <button>See</button>
                </div>
                <div className="card">
                    <img src={enam} alt="" />
                    <button>See</button>
                </div>
                </div>

            </div>

        </section>
    )
}

export default Galery