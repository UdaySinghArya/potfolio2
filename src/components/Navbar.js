function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid custome-nav1">
                    <a class="navbar-brand name " href="#">Uday Singh Arya</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse custom-nav-links" id="navbarNav">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <a class="nav-link text-white" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="/about-me">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="projects">Projects</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="contact-us">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;



