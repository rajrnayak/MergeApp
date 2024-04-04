import Card from "./card/Card";

function HeaderLeft() {
    return (
        <>
            <span style={{ width: "100px", fontSize: "28px" }}>Home</span>
        </>
    );
}

function HeaderRight() {
    return (
        <>
            <button
                type="button"
                className="btn btn-outline-dark position-relative"
            >
                Home Process
            </button>
        </>
    );
}

function FooterLeft() {
    return (
        <>
            <div className="buttons">
                <div
                    className="btn-group p-0 m-2"
                    role="group"
                    aria-label="Basic example"
                >
                    <button type="button" className="btn btn-outline-primary">
                        Submit
                    </button>
                    <button type="button" className="btn btn-outline-danger">
                        Cancel
                    </button>
                </div>
                <button type="button" className="btn btn-outline-info ms-2">
                    Show
                </button>
            </div>
        </>
    );
}

function FooterRight() {
    return (
        <>
            <ul className="pagination m-0 p-0">
                <li className="page-item">
                    <a className="page-link" href="#">
                        Previous
                    </a>
                </li>
                <li className="page-item">
                    <a className="page-link" href="#">
                        1
                    </a>
                </li>
                <li className="page-item">
                    <a className="page-link" href="#">
                        2
                    </a>
                </li>
                <li className="page-item">
                    <a className="page-link" href="#">
                        3
                    </a>
                </li>
                <li className="page-item">
                    <a className="page-link" href="#">
                        Next
                    </a>
                </li>
            </ul>
        </>
    );
}

function Home() {
    return (
        <>
            <Card
                header_left={<HeaderLeft />}
                header_right={<HeaderRight />}
                footer_left={<FooterLeft />}
                footer_right={<FooterRight />}
            >
                <div className="d-flex justify-content-center">
                    <table className="table">
                        <thead className="table">
                            <tr>
                                <th scope="col">Sr.No</th>
                                <th scope="col">User Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Role Type</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                            <tr key={1}>
                                <th scope="row">1</th>
                                <td>raj</td>
                                <td>raj@abc.com</td>
                                <td>Admin</td>
                                <td>
                                    <div className="btn-group" role="group">
                                        <button
                                            type="button"
                                            className="btn btn-outline-success"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-outline-danger"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr key={2}>
                                <th scope="row">2</th>
                                <td>Jay</td>
                                <td>Jay@abc.com</td>
                                <td>Customer</td>
                                <td>
                                    <div className="btn-group" role="group">
                                        <button
                                            type="button"
                                            className="btn btn-outline-success"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-outline-danger"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr key={3}>
                                <th scope="row">3</th>
                                <td>harsh</td>
                                <td>harsh@abc.com</td>
                                <td>Admin</td>
                                <td>
                                    <div className="btn-group" role="group">
                                        <button
                                            type="button"
                                            className="btn btn-outline-success"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-outline-danger"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Card>
        </>
    );
}

export default Home;
