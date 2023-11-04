import React from "react";
import Navbar from "./Navbar";
import facebook from "../assets/images/facebook.png";
import linkedin from "../assets/images/linkedin.png";
import instagram1 from "../assets/images/instagram1.jpg";
import bg3 from "../assets/images/bg3.png";
export default function Home() {
    return (
        <div>
            <Navbar />
            <div class="home-body">
                <div class="container">
                    <div class="row">
                        {/* left card */}
                        <div class="col-6 mb-4 ">
                            <div class="card h-100 home-leftcard">
                                <div class="card-body ">
                                    <div class="row ">
                                        <div class="centered-cards">
                                            <div class="col-md-12 mb-3 ">
                                                <div class="card home-leftcardcontent">
                                                    <div class="card-body">
                                                        <h5 class="card-title home-leftcard-title text-white">Hi,I am Uday Singh Arya</h5>
                                                        <p class="card-text text-white">I am a Backend Developer</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-md-12">
                                                <div class="card home-leftcardcontent">
                                                    <div class="card-body">
                                                        <div class="row">
                                                            <div class="col-4">
                                                                <a href="#"><img src={facebook} class="img-fluid" alt="facebook" height="70" width="70" /></a>
                                                            </div>
                                                            <div class="col-4">
                                                                <a href="#"><img src={linkedin} class="img-fluid" alt="linked" height="70" width="70" /></a>
                                                            </div>
                                                            <div class="col-4">
                                                                <a href="#"><img src={instagram1} class="img-fluid" alt="instagram1" height="70" width="70" /></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* right card */}
                        <div class="col-6 mb-4 ">
                            <div class="card h-100 home-rightcard ">
                                <img src={bg3} class="card-img-top img-fluid" alt="Image 3" />
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}