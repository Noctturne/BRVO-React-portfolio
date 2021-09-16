import { Link, withRouter } from "react-router-dom";

const Asidemenu = (props) => {
    return (
        <aside className="aside-menu d-flex flex-md-column justify-content-md-between my-md-5 mx-md-5">
            <nav className="nav flex-md-column">
                <li className={`nav-item  ${props.location.pathname === "/" ? "active" : ""}`}>
                    <Link class="nav-link link-secondary" to="/"> HOME <span class="sr-only">(current)</span> </Link>
                </li>
                <li className={`nav-item  ${props.location.pathname === "/about" ? "active" : ""}`}>
                    <Link className="nav-link link-secondary" to="/about"> ABOUT </Link>
                </li>
                <li className={`nav-item  ${props.location.pathname === "/portfolio" ? "active" : ""}`}>
                    <Link className="nav-link link-secondary" to="/portfolio"> PORTFOLIO </Link>
                </li>
                <li className={`nav-item  ${props.location.pathname === "/contact" ? "active" : ""}`}>
                    <Link className="nav-link link-secondary" to="/contact"> CONTACT </Link>
                </li>
            </nav>
        </aside>
    )
}

export default withRouter(Asidemenu);