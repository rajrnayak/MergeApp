import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../../components/card/Card";
function Index() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers();
    }, []);

    function getUsers() {
        axios
            .get("http://mergeapp.test/user/show-users")
            .then(function (response) {
                let users = [];
                response.data.forEach((user) => {
                    user.is_checked = false;
                    users.push(user);
                });
                setUsers(users);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    function destroyUser(id) {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-danger",
            },
            buttonsStyling: false,
        });
        swalWithBootstrapButtons
            .fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Yes, delete it!",
                cancelButtonText: "No, cancel!",
                reverseButtons: true,
            })
            .then((result) => {
                if (result.isConfirmed) {
                    axios
                        .get("http://mergeapp.test/user/destroy/" + id)
                        .then(function () {
                            showUsers();
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your data has been deleted.",
                        icon: "success",
                        width: "400px",
                        showConfirmButton: false,
                        timer: 1000,
                    });
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    swalWithBootstrapButtons.fire({
                        title: "Cancelled",
                        text: "Your data file is safe :)",
                        icon: "error",
                    });
                }
            });
    }

    function toggleIsChecked(isChecked, id = null) {
        if (!(id == null)) {
            setUsers(
                users.map((user) => {
                    if (user.id == id) {
                        return { ...user, is_checked: isChecked };
                    } else {
                        return user;
                    }
                })
            );
            if (isChecked == false) {
                document.getElementById("main_check").checked = false;
            }
        } else {
            setUsers(
                users.map((user) => {
                    return { ...user, is_checked: isChecked };
                })
            );
        }
    }

    console.log(users);
    return (
        <>
            <Card
                header_left={<HeaderLeft />}
                header_right={<HeaderRight />}
                footer_left={<FooterLeft />}
            >
                <table className="table">
                    <thead className="table">
                        <tr>
                            <th scope="col">
                                <input
                                    id="main_check"
                                    className="form-check-input border border-2"
                                    type="checkbox"
                                    onClick={(event) =>
                                        toggleIsChecked(event.target.checked)
                                    }
                                />
                            </th>
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
                                    <td className="col-1">
                                        <input
                                            id={user.id}
                                            className="form-check-input"
                                            type="checkbox"
                                            checked={user.is_checked}
                                            onChange={(event) =>
                                                toggleIsChecked(
                                                    event.target.checked,
                                                    user.id
                                                )
                                            }
                                        />
                                    </td>
                                    <th scope="row" className="col-1">
                                        {index + 1}
                                        {user.is_checked
                                            ? "checked"
                                            : "not checked"}
                                    </th>
                                    <td className="col-2">{user.user_name}</td>
                                    <td>{user.email}</td>
                                    <td className="col-2">
                                        {user.role_type == 1
                                            ? "Admin"
                                            : "Customer"}
                                    </td>
                                    <td className="col-2">
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
            </Card>
        </>
    );
}

function HeaderLeft() {
    return (
        <>
            <span style={{ width: "100px", fontSize: "28px" }}>User</span>
        </>
    );
}

function HeaderRight() {
    return (
        <>
            <Link className="nav-link" to="/user/create">
                <button type="button" className="btn btn-outline-dark">
                    Add User
                </button>
            </Link>
        </>
    );
}

function FooterLeft() {
    return (
        <>
            <button type="button" className="btn btn-outline-dark">
                Show Selected Users
            </button>
        </>
    );
}

export default Index;
