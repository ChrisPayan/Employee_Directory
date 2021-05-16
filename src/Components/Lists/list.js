import React from "react";

function List() {

    return (
        <table class="table table-striped table-dark">
            <thead>
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">DOB</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Image</td>
                    <td>Mark Yeah</td>
                    <td>Email@mail.com</td>
                    <td>6199999999</td>
                    <td>10/02/03</td>
                </tr>
            </tbody>
        </table>
    )
}

export default List;