import logo from "../../images/logo-inverse.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFlickr, faTwitter, faTwitch } from "@fortawesome/free-brands-svg-icons";

const TopMenu = () => {
    return (
        <header className="top-header">
            <div className="container-fluid d-flex justify-content-between align-items-center">
                <a href="#" className="navbar-brand"><img className="top-header__logo img-fluid" src={logo}></img></a>
                <ul class="nav">
                    <li class="nav-item">
                        <a href="#" className="nav-link link-light"><FontAwesomeIcon icon={faInstagram} size="1x"></FontAwesomeIcon></a>
                    </li>
                    <li class="nav-item">
                        <a href="#" className="nav-link link-light"><FontAwesomeIcon icon={faFlickr} size="1x"></FontAwesomeIcon></a>
                    </li>
                    <li class="nav-item">
                        <a href="#" className="nav-link link-light"><FontAwesomeIcon icon={faTwitter} size="1x"></FontAwesomeIcon></a>
                    </li>
                    <li class="nav-item">
                    <a href="#" className="nav-link link-light"><FontAwesomeIcon icon={faTwitch} size="1x"></FontAwesomeIcon></a>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default TopMenu;