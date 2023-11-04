import Navbar from "./Navbar";
import call from "../assets/images/call.png";
export default function ContactsUs() {
    return (
        <>
            <Navbar />
            <div class="contact-body">
                <div class="container ">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="card equal-card">
                                <img src={call} class="card-img" alt="Image 2" height="300px" />
                                <div class="card-body">

                                </div>
                            </div>
                        </div>
                        <div class="col-md-8 ">
                            <div class="card equal-card contact-rightcard">
                                <div class="card-body">
                                    <h1 class="card-title custom-contactus-card-title text-white">Contact Us</h1>
                                    <div class="container ">
                                        <div class="row">
                                            <div class="col-12 mt-4">
                                                <hr class="custom-hr" />
                                            </div>

                                            {/* <div class="col-6 mt-4">
                                            Name<hr class="custom-hr-details" />
                                        </div> */}
                                            <div class="container">
                                                <div class="row">
                                                    <div class="col-md-6 ">
                                                        <div class="card h-100 contact-carddetails">
                                                            <div class="card-body ">
                                                                <div class="col-6 ">
                                                                    <div class="card-text text-white">
                                                                        Name
                                                                    </div>
                                                                    <form><i class="fa-solid fa-envelope"></i>
                                                                        <input type="textbox" placeholder="Enter Your Problem" />
                                                                        <button type="submit"><i class="fa-solid fa-arrow-right"></i></button>
                                                                    </form>
                                                                </div>

                                                                <div class="col-6 ">
                                                                    <div class="card-text text-white">
                                                                        Email
                                                                    </div>
                                                                    <form><i class="fa-solid fa-envelope"></i>
                                                                        <input type="textbox" placeholder="Enter Your Problem" />
                                                                        <button type="submit"><i class="fa-solid fa-arrow-right"></i></button>
                                                                    </form>
                                                                </div>
                                                                <div class="col-6 ">
                                                                    <div class="card-text text-white">
                                                                        Message
                                                                    </div>
                                                                    <form><i class="fa-solid fa-envelope"></i>
                                                                        <input type="textbox" placeholder="Enter Your Problem" required />
                                                                        <button type="submit"><i class="fa-solid fa-arrow-right"></i></button>
                                                                    </form>
                                                                </div>
                                                                <div class="container">
                                                                    <div class="row mt-2">
                                                                        <div class="col-md-12 d-flex justify-content-center">
                                                                            <div class="circle-square">
                                                                                <p>Contacts</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="card h-100">
                                                            <div class="card-body ">
                                                                <div class="col-12 ">
                                                                    <h3>Office:</h3>
                                                                    <div class="add">Chakrata Road</div>
                                                                    <div class="add">Sudhowala, Dehradun</div>
                                                                    <div class="add">Uttarakhand, PIN (247667), India</div>
                                                                    <div class="emailid"><a href="us85370@gmail.com" class="link1">us85370@gmail.com</a></div>
                                                                    <h3 class="contactno"> +919149276220</h3>
                                                                </div>
                                                                <div class="container">
                                                                    <div class="row">
                                                                        <div class="col-md-3">
                                                                            <img src="logo1.png" alt="Logo 1" class="img-fluid" />
                                                                        </div>
                                                                        <div class="col-md-3">
                                                                            <img src="logo2.png" alt="Logo 2" class="img-fluid" />
                                                                        </div>
                                                                        <div class="col-md-3">
                                                                            <img src="logo2.png" alt="Logo 2" class="img-fluid" />
                                                                        </div>
                                                                        <div class="col-md-3">
                                                                            <img src="logo2.png" alt="Logo 2" class="img-fluid" />
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
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}