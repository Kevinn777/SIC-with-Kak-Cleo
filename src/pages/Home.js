import React from 'react'
import '../style/Home.scoped.css'
import logo from '../asset/logo.png'
import umum from '../asset/umum.png'
import magang from '../asset/ceks.png'
import intro1 from '../asset/intro1.png'
import intro2 from '../asset/intro2.png'
import intro3 from '../asset/intro3.png'
import twitter from "../asset/twitter.png";


function Home() {
    let counter = 1;
        setInterval(function () {
            document.getElementById('radio' + counter).checked = true;
            counter++;

            if (counter > 4) {
                counter = 1;
            }
        }, 5000);
    return (
        <main>
            <div className="header">
            <div className="header-left">
            <div className="nav-left">
                <img className="logo" src={logo} alt="" srcset=""/>
                <ul className="nav-left-list">
                    <li><a href="#">Service</a></li>
                    <li><a href="#">Help</a></li>
                    <li><a href="#">Profile</a></li>
                </ul>
            </div>
            <div className="text-container">
                <p className="misal">Start Small, Think Big</p>
                <p>DO IT NOW !</p>
                <p>Masa Depan Ada Di Tanganmu! Wujudkan Pekerjaan Impian Mu!</p>
                <button className="find">Find</button>
            </div>
        </div>

        <div className="header-right">
            <div className="nav-right">
                <a href="">Login</a>
                <a href="">Sign Up</a>
            </div>
        </div>
    </div>





    <section className="bingung">
        <div className="left">
            <h1 className="head-left">Selamat Datang di Ma.Gangs !</h1>
            <div className="slide-show">
                <div className="slider">
                    <div className="slides">
                        
                        <input type="radio" name="radio-btn" id="radio1"/>
                        <input type="radio" name="radio-btn" id="radio2"/>
                        <input type="radio" name="radio-btn" id="radio3"/>
                        <input type="radio" name="radio-btn" id="radio4"/>
                        
                        <div className="slide first">
                        </div>
                        <div className="slide slide2">
                        </div>
                        <div className="slide slide3">
                        </div>
                        <div className="slide slide4">
                        </div>
                        
                        <div className="navigation-auto">
                            <div className="auto-btn1"></div>
                            <div className="auto-btn2"></div>
                            <div className="auto-btn3"></div>
                            <div className="auto-btn4"></div>
                        </div>
                        
                    </div>
                    
                    <div className="navigation-manual">
                        <label for="radio1" className="manual-btn"></label>
                        <label for="radio2" className="manual-btn"></label>
                        <label for="radio3" className="manual-btn"></label>
                        <label for="radio4" className="manual-btn"></label>
                    </div>
                    
                </div>
            </div>

        </div>

        <div className="right">
            <div className="profile">
                <div className="profile-picture"></div>
                <div className="username">
                    <h2>Sementara</h2>
                    <p>Emailuser@gmail.com</p>
                </div>
            </div>
            <div className="notification">
                <h2 className="judul-notif">Notifikasi</h2>
                <ul className="container-notif-list">
                    <li className="notif-list umum">
                        <div className="icon-notif-umum">
                            <a href=""><img src={umum} alt="" srcset=""/></a>
                        </div>

                        <div className="text-notif-list">
                            <a href="">
                                <h2>Umum</h2>
                            </a>
                            <p>Menampilkan berita terkini seputar dunia kerja</p>
                        </div>
                    </li>
                    <li className="notif-list umum">
                        <div className="icon-notif-umum">
                            <a href=""><img src={umum} alt="" srcset=""/></a>
                        </div>

                        <div className="text-notif-list">
                            <a href="">
                                <h2>Umum</h2>
                            </a>
                            <p>Menampilkan berita terkini seputar dunia kerja</p>
                        </div>
                    </li>
                    <li className="notif-list umum">
                        <div className="icon-notif-umum">
                            <a href=""><img src={umum} alt="" srcset=""/></a>
                        </div>

                        <div className="text-notif-list">
                            <a href="">
                                <h2>Umum</h2>
                            </a>
                            <p>Menampilkan berita terkini seputar dunia kerja</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>






    <section className="main-content">
        <ul className="list-main-content">
            <li>
                <h2 className="judul-list-content">Magang</h2>
                <a href="">
                    <div className="main-content-img">
                        <img src={magang} alt=""/>
                        <h1 className="text-list-content">Cari tempat magang mu</h1>
                    </div>
                </a>
            </li>
            <li>
                <h2 className="judul-list-content">Magang</h2>
                <a href="">
                    <div className="main-content-img">
                        <img src={magang} alt=""/>
                        <h1 className="text-list-content">Cari tempat magang mu</h1>
                    </div>
                </a>
            </li>
            <li>
                <h2 className="judul-list-content">Magang</h2>
                <a href="">
                    <div className="main-content-img">
                        <img src={magang} alt=""/>
                        <h1 className="text-list-content">Cari tempat magang mu</h1>
                    </div>
                </a>
            </li>
        </ul>
    </section>








    <section className="introduce">
        <h1 className="judul-introduce">Kenapa Harus Pakai Ma.Gangs?</h1>
        <div className="container-intro">
            <div className="intro-list-1">
                <img src={intro1} alt="" className="intro-img intro-1-img"/>
                <div className="text-introduce text-introduce-1">
                    <h1 className="judul-text-intro">Mudah & Efisien</h1>
                    <p className="text-intro">Ma.Gangs siap membantu anda mencari tempat magang ataupun pekerjaan dengan
                        mudah dan efisien.</p>
                </div>
            </div>
            <div className="intro-list-2">
                <img src={intro2} alt="" className="intro-img intro-2-img"/>
                <div className="text-introduce text-introduce-2">
                    <h1 className="judul-text-intro">Menyediakan Semua Bidang Keahlian</h1>
                    <p className="text-intro">Dengan Ma.Gangs Anda dapat mencari tempat magang maupun pekerjaan sesuai
                        dengan bidang keahlian yang Anda cari.</p>
                </div>
            </div>
            <div className="intro-list-3">
                <img src={intro3} alt="" className="intro-img intro-3-img"/>
                <div className="text-introduce text-introduce-3">
                    <h1 className="judul-text-intro">Hemat</h1>
                    <p className="text-intro">Dengan menggunakan Ma.Gangs anda dapat menghemat biaya untuk berkeliling
                        mencari lowongan pekerjaan atau magang.</p>
                </div>
            </div>
        </div>
    </section>






    <footer className="footer">
        <div className="footer-left">
            <img src={logo} alt="" srcset=""/>
        </div>
        <div className="footer-right">
            <div className="footer-text">
                <p className="footer-text-heading">
                    START DO IT THE THINGS NOW!
                </p>
                <p className="footer-text-paragraph">
                    Raihlah masa depan cemerlang
                    dengan Ma.Gangs, kami siap
                    mendampingi anda!
                </p>
            </div>
            <ul className="footer-sosmed">
                <li className="tweeter">
                    <img className="footer-sosmed-icon" src={twitter} alt=""/>
                    <div className="sosmed-text">
                        ma.gangs_id
                    </div>
                </li>
                <li className="gmail">
                    <img className="footer-sosmed-icon" src={twitter} alt=""/>
                    <div className="sosmed-text">
                        magangsid@gmail.com
                    </div>
                </li>
                <li className="facebook">
                    <img className="footer-sosmed-icon" src={twitter} alt=""/>
                    <div className="sosmed-text">
                        ma.gangs_id
                    </div>
                </li>
                <li className="instagram">
                    <img className="footer-sosmed-icon" src={twitter} alt=""/>
                    <div className="sosmed-text">
                        ma.gangs_id
                    </div>
                </li>
            </ul>
        </div>
    </footer>

    </main>
    )
}

export default Home
