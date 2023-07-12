    import React from "react";
    import { Link } from "react-router-dom";

    function Main() {
    return (
        <>
        <footer
            className="footer-bg footer-p pt-90"
            style={{
            backgroundColor: "#125875",
            backgroundImage: "url(assets/img/bg/footer-bg.png)",
            }}
        >
            <div className="footer-top pb-70">
            <div className="container">
                <div className="row justify-content-between">
                <div className="col-xl-4 col-lg-4 col-sm-6">
                    <div className="footer-widget mb-30">
                    <div className="f-widget-title">
                        <h2>About Us</h2>
                    </div>
                    <div className="f-contact">
                        <p>
                        MU University is a unique educational institution, which
                        was established in 2020 and is the recognized standard for
                        quality education in the world. MU gives students
                        specialized knowledge & extensive possibilities for furthr
                        learning & choosing own path in life.
                        </p>
                    </div>
                    <div className="footer-social mt-10">
                        <a href="https://www.facebook.com/CambridgeIU/">
                        <i className="fab fa-facebook-f" />
                        </a>
                        <a href="https://www.instagram.com/cambridge_uz/?utm_medium=copy_link">
                        <i className="fab fa-instagram" />
                        </a>
                        <a href="https://www.youtube.com/channel/UC-ocD-O2ox3xAF045G1xLig">
                        <i className="fab fa-youtube" />
                        </a>
                        <a href="https://t.me/cambridgeic">
                        <i className="fab fa-telegram" />
                        </a>
                    </div>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-sm-6">
                    <div className="footer-widget mb-30">
                    <div className="f-widget-title">
                        <h2>Our Links</h2>
                    </div>
                    <div className="footer-link">
                        <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about"> About</Link>
                        </li>
                        <li>
                            <Link to="/courses">Courses</Link>
                        </li>
                        <li>
                            <Link to="/contact"> Contact Us</Link>
                        </li>
                        <li>
                            <Link to="/blog">Blog </Link>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-sm-6">
                    <div className="footer-widget mb-30">
                    <div className="f-widget-title">
                        <h2>Latest Post</h2>
                    </div>
                    <div className="recent-blog-footer">
                        <ul>
                        <li>
                            <div className="thum">
                            {" "}
                            <img
                                src="assets/img/blog/s-blogimg-01.png"
                                alt="img"
                            />
                            </div>
                            <div className="text">
                            {" "}
                            <Link to="/blog-details">
                                Nothing impossble to need hard work
                            </Link>
                            <span>7 March, 2020</span>
                            </div>
                        </li>
                        <li>
                            <div className="thum">
                            {" "}
                            <img
                                src="assets/img/blog/s-blogimg-02.png"
                                alt="img"
                            />
                            </div>
                            <div className="text">
                            {" "}
                            <Link to="/blog-details">
                                Nothing impossble to need hard work
                            </Link>
                            <span>7 March, 2020</span>
                            </div>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-sm-6">
                    <div className="footer-widget mb-30">
                    <div className="f-widget-title">
                        <h2>Contact Us</h2>
                    </div>
                    <div className="f-contact">
                        <ul>
                        <li>
                            <i className="icon fal fa-phone" />
                            <span>
                            <Link to="tel:+14440008888">+998 71 200 03 06</Link>
                            <br />
                            <Link to="tel:+917052101786">+998 71 200 03 06</Link>
                            </span>
                        </li>
                        <li>
                            <i className="icon fal fa-envelope" />
                            <span>
                            <Link to="admission@cambridge.uz">
                            admission@cambridge.uz
                            </Link>
                            <br />
                            <Link to="admission@cambridge.uz">
                            admission@cambridge.uz
                            </Link>
                            </span>
                        </li>
                        <li>
                            <i className="icon fal fa-map-marker-check" />
                            <span>
                            Toshkent sh., Chilonzor tumani,
                            <br /> Bunyodkor, Navbahor 24
                            </span>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className="copyright-wrap">
            <div className="container">
                <div className="row align-items-center">
                <div className="col-lg-4">
                    <div className="copy-text">
                    <Link to="/">
                        <img src="assets/img/logo/f_logo.png" alt="img" />
                    </Link>
                    </div>
                </div>
                <div className="col-lg-4 text-center"></div>
                <div className="col-lg-4 text-right text-xl-right">
                    Copyright © Qeducato 2023 . All rights reserved.
                </div>
                </div>
            </div>
            </div>
        </footer>
        </>
    );
    }

    export default Main;
