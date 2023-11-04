import Navbar from "./Navbar";
import soft from "../assets/images/soft.jpg";
import dev from "../assets/images/dev.jpeg";
export default function About() {
    return (
        <>
            <Navbar />
            <div class="about-body">
                <div class="container h-100 ">
                    <div class="row h-100 justify-content-center align-items-center ">
                        <div class="col-lg-4 ">
                            <div class="card custom-about-border about-contentbackground">
                                <div class="card-body">
                                    <h5 class="card-title text-center custom-about">ABOUT US</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-4 ">
                        <div class="col-lg-10 mx-auto">
                            <div class="card about-card-border">
                                <div class="card-body text-center about-contentbackground">
                                    <p class="para-font text-white"> My Name is <span class="project1">Uday Singh Arya</span>.I am From <span class="project1">Uttar Pradesh</span>.I have done my graduation in computer science from kurukshetra university.
                                        I am Persuing my MCA at Dev Bhoomi Uttarakhand University.My academic journey has equipped me with a strong foundation in software development, data structures, algorithms, and database managemen. My coursework has allowed me to gain proficiency in languages such as Java, C++, and Python, and I'm constantly honing my skills.I am doing inturship in <span class="project1">Quantum Hill Pvt Ltd</span> company as a web developer.I can do multiple task at a time.
                                        I have done projects on <span class="project1">java and  Spring Boot</span>.Java projects is  <span class="project1">Chatting Application and  Library Management.</span>
                                        Spring Boot Project is <span class="project1">Contact Manager.</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <hr class="custom-hr" />
                        </div>
                    </div>
                </div>

                {/* images */}
                <div class="container">
                    <div class="row">
                        {/* image 1 */}
                        <div class="col-lg-6 text-center">
                            <div class="d-flex h-100">
                                <div class="card w-100 about-card-img">
                                    <img src={soft} class="card-img" alt="Image 1" />
                                    <div class="card-body about-imagetext">
                                        <h2 class="card-title">DESIGN</h2>
                                        <p class="card-text">“Design is not just what it looks like and feels like. <br /> Design is how it works"</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* image 2 */}
                        <div class="col-lg-6 text-center">
                            <div class="d-flex h-100">
                                <div class="card w-100 about-card-img">
                                    <img src={soft} class="card-img" alt="Image 1" />
                                    <div class="card-body about-imagetext">
                                        <h2 class="card-title">DEVELOPMENT</h2>

                                        <p class="card-text">“The world always seems brighter when you’ve just made <br /> something that wasn’t there before.”</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* image 3 */}
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 mx-auto mt-5 text-center">
                            <div class="card about-card-img">
                                <img src={dev} class="card-img" alt="Image 1" />
                                <div class="card-body about-imagetext">
                                    <h2 class="card-title">MANTENANCE</h2>
                                    <p class="card-text">"The secret of landscapes isn't creation...It's maintenance." ~ Michael Dolan</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}