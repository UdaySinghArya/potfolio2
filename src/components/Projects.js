import Navbar from "./Navbar";
import library from "../assets/images/library.png";
import contacts from "../assets/images/contacts.png";
import whatsapp from "../assets/images/whatsapp.png";
import calculator from "../assets/images/calculator.png";
export default function Projects() {
    return (
        <>
            <Navbar />
            <div class="project-body">
                <div class="container">
                    <div class="row h-100 justify-content-center align-items-center ">
                        <div class="col-lg-4 ">
                            <div class="card custom-about-border project-cardbody">
                                <div class="card-body ">
                                    <h5 class="card-title text-center custom-about">Projects</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container mt-4">
                    {/* project 1 */}
                    <div class="row project-cardrow">
                        <div class="col-lg-4 col-md-6 mb-4">
                            <div class="card card-size">
                                <div class="centered-image">
                                    <img src={library} class="card-img custom-img" alt="Image 1" />
                                </div>
                                <div class="card-body project-cardbody">
                                    <h5 class="card-title">Library Management</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-6 equal-height-card">
                            <div class="card project-cardbody">
                                <div class="card-body ">
                                    <h5 class="card-title">Used Skills</h5>
                                    <p class="card-text">I Used Java Programming Language with MySQL Database as well as used GUI Programming.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* project 2 */}
                    <div class="row ">
                        <div class="col-lg-4 col-md-6 mb-4">
                            <div class="card card-size">
                                <div class="centered-image">
                                    <img src={contacts} class="card-img custom-img" alt="Image 1" />
                                </div>
                                <div class="card-body project-cardbody">
                                    <h5 class="card-title ">Contacts Manager</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-6 equal-height-card">
                            <div class="card project-cardbody">
                                <div class="card-body ">
                                    <h5 class="card-title">Used Skills</h5>
                                    <p class="card-text">I Used SpringBoot with MongoDB Database</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* project 3 */}
                    <div class="row  mt-4 project-cardrow">
                        <div class="col-lg-4 col-md-6 mb-4">
                            <div class="card card-size">
                                <div class="centered-image">
                                    <img src={whatsapp} class="card-img custom-img" alt="Image 1" />
                                </div>
                                <div class="card-body project-cardbody">
                                    <h5 class="card-title ">Whatsapp</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-6 equal-height-card">
                            <div class="card project-cardbody">
                                <div class="card-body ">
                                    <h5 class="card-title">Used Skills</h5>
                                    <p class="card-text">I Used Java Programming Language with MySQL Database as well as used GUI Programming.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* project 4 */}
                    <div class="row  mt-4">
                        <div class="col-lg-4 col-md-6 mb-4">
                            <div class="card card-size4">
                                <div class="centered-image">
                                    <img src={calculator} class="card-img custom-img4" alt="Image 1" />
                                </div>
                                <div class="card-body project-cardbody">
                                    <h5 class="card-title">Smart Calculator</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-6 equal-height-card">
                            <div class="card">
                                <div class="card-body project-cardbody">
                                    <h5 class="card-title">Used Skills</h5>
                                    <p class="card-text">I Used Python Programming Language.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
