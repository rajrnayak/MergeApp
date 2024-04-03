import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Index() {
    const [users, setUsers] = useState("");
    useEffect(() => {
        showUsers();
    }, []);

    function showUsers() {
        axios
            .get("http://mergeapp.test/user/show-users")
            .then(function (response) {
                setUsers(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    function destroyUser(id) {
        axios
            .get("http://mergeapp.test/user/destroy/" + id)
            .then(function () {
                showUsers();
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <>
            <div className="d-flex justify-content-center pb-1">
                <div className="header d-flex justify-content-between w-100">
                    <h4>User</h4>
                    <Link className="nav-link" to="/user/create">
                        <button type="button" className="btn btn-outline-dark">
                            Add User
                        </button>
                    </Link>
                </div>
            </div>
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
                        {users != "" &&
                            users.map((user, index) => (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{user.user_name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        {user.role_type == 1
                                            ? "Admin"
                                            : "Customer"}
                                    </td>
                                    <td>
                                        <div className="btn-group" role="group">
                                            <button
                                                type="button"
                                                className="btn btn-outline-success"
                                            >
                                                <Link
                                                    className="nav-link"
                                                    to={"/user/create"}
                                                    state={user}
                                                >
                                                    Edit
                                                </Link>
                                            </button>
                                            <button
                                                type="button"
                                                className="btn btn-outline-danger"
                                                onClick={() => {
                                                    destroyUser(user.id);
                                                }}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        {users == "" && (
                            <tr>
                                <td colSpan={5} className="text-center">
                                    No Data Available
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Index;
