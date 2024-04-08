function UserList() {
    return (
        <>
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
                            </th>
                            <td className="col-2">{user.user_name}</td>
                            <td>{user.email}</td>
                            <td className="col-2">
                                {user.role_type == 1 ? "Admin" : "Customer"}
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
        </>
    );
}

export default UserList;
