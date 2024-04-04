import Swal from "sweetalert2";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
const object = {
    id: null,
    user_name: "",
    email: "",
    password: "",
    role_type: "",
};
function Create() {
    const { state } = useLocation();
    let navigator = useNavigate();
    const [user, setUser] = useState(state == undefined ? object : state);

    function changeUserDetail(e) {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    }
    function saveData() {
        if (user.id == null) {
            axios
                .post("http://mergeapp.test/user/store-or-update", user)
                .then(function () {
                    navigator("/user");
                    Swal.fire({
                        title: "Good job!",
                        text: "Data successfully entered.",
                        icon: "success",
                        width: "400px",
                        showConfirmButton: false,
                        timer: 1000,
                    });
                })
                .catch(function (error) {
                    console.log(error);
                });
        } else {
            axios
                .post(
                    "http://mergeapp.test/user/store-or-update/" + user.id,
                    user
                )
                .then(function () {
                    navigator("/user");
                    Swal.fire({
                        title: "Good job!",
                        text: "Data successfully updated.",
                        icon: "success",
                        width: "400px",
                        showConfirmButton: false,
                        timer: 1000,
                    });
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

    return (
        <>
            <div className="container">
                <form
                    method="POST"
                    onSubmit={(e) => {
                        e.preventDefault();
                        saveData();
                    }}
                >
                    <h1>User</h1>
                    <div className="card">
                        <h5 className="card-header">
                            {user.id == null ? "Create" : "Edit"} User
                        </h5>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-sm-6 p-1">
                                    <label className="col-form-label col-form-label-lg">
                                        User Name
                                    </label>
                                    <div>
                                        <input
                                            type="text"
                                            name="user_name"
                                            value={user.user_name}
                                            onChange={changeUserDetail}
                                            className="form-control form-control-lg"
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-6 p-1">
                                    <label className="col-form-label col-form-label-lg">
                                        Role Type
                                    </label>
                                    <select
                                        name="role_type"
                                        value={user.role_type}
                                        onChange={changeUserDetail}
                                        className="form-select form-select-lg mb-3"
                                        aria-label="Large select example"
                                    >
                                        <option value="" disabled>
                                            Open this select menu
                                        </option>
                                        <option value="1">Admin</option>
                                        <option value="2">Customer</option>
                                    </select>
                                </div>
                                <div className="col-sm-6 p-1">
                                    <label className="col-form-label col-form-label-lg">
                                        Email
                                    </label>
                                    <div>
                                        <input
                                            type="email"
                                            name="email"
                                            value={user.email}
                                            onChange={changeUserDetail}
                                            className="form-control form-control-lg"
                                        />
                                    </div>
                                </div>
                                {user.id == null && (
                                    <div className="col-sm-6 p-1">
                                        <label className="col-form-label col-form-label-lg">
                                            Password
                                        </label>
                                        <div>
                                            <input
                                                type="password"
                                                name="password"
                                                value={user.password}
                                                onChange={changeUserDetail}
                                                className="form-control form-control-lg"
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div
                                className="col-auto btn-group mt-3"
                                role="group"
                            >
                                <button
                                    type="submit"
                                    className="btn btn-outline-success"
                                >
                                    Submit
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-outline-danger"
                                >
                                    <Link className="nav-link" to="/user">
                                        Cancel
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Create;
