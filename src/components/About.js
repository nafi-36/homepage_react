import React from 'react'
import './style/About.css'
import { ArrowBack } from '@material-ui/icons'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <section className="about">

            <Link to='/' className='a-icon'><ArrowBack className='icon'/></Link>
            
            <div className="about__head">

                <h1>ABOUT US</h1>
                <p>This is Profile of Telkom School Malang</p>

            </div>

            <div className="about__container">

                <div className="cards long">
                    <p>
                        SMK Telkom Malang adalah pelopor Sekolah menengah kejuruan pertama di Indonesia di bidang Teknologi dan Informatika.
                        Berpengalaman dari tahun 1992 yang telah terakreditasi "A" dan mempunyai standart mutu ISO 9001:2015.
                        SMK Telkom Malang juga merupakan sekolah adiwiyata yang menerapkan prinsip sekolah hijau, hal tersebut semakin memberikan suasana yang nyaman bagi warga sekolah.
                        Manajemen SMK Telkom malang berkomitmen untuk memberikan pelayanan jasa pendidikan yang bermutu tinggi dengan menggunakan Sistem Manajemen Mutu
                        ISO 9001:2015 SMK dengan melibatkan seluruh komponen sekolah yang ada dengan mengembangkan kepribadian yang memiliki jiwa MOKLET.
                    </p>
                </div>

                <div className="cards">
                    <h3>M : Mulia</h3>
                    <p>Membangun karakter generasi yang beriman, bertaqwa, dan berakhlak mulia.</p>
                </div>

                <div className="cards">
                    <h3>O : Obyektif</h3>
                    <p>Mewujudkan insan yang mampu berpikir ilmiah, jujur, dan kompetitif.</p>
                </div>

                <div className="cards">
                    <h3>K : Kreatif</h3>
                    <p>Menciptakan pembelajaran inovatif berbasis teknologi yang mendorong siswa memiliki kompetensi abad 21.</p>
                </div>

                <div className="cards">
                    <h3>L : Loyalitas</h3>
                    <p>Menumbuhkan semangat mengabdi dan rasa memiliki sehingga dapat meningkatkan etos kerja.</p>
                </div>

                <div className="cards">
                    <h3>E : Empati</h3>
                    <p>Mewujudkan budaya sekolah yang saling menghargai dan peduli sehingga menciptakan suasana nyaman di lingkungan sekolah.</p>
                </div>

                <div className="cards">
                    <h3>T : Terampil</h3>
                    <p>Menghasilkan lulusan yang cakap di bidang Teknologi Informasi dan Komunikasi serta unggul dalam menghadapi persaingan global.</p>
                </div>

                {/* <div className="cards long">
                    <h3>About 4</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                </div> */}

            </div>

        </section>
    )
}

export default About