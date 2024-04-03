import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <a
                    href="/"
                    className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
                >
                    <span className="fs-4">MargeApp</span>
                </a>

                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/user">
                            User
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/student">
                            Student
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/teacher">
                            Teacher
                        </Link>
                    </li>
                </ul>
            </header>
        </>
    );
}

export default Header;
