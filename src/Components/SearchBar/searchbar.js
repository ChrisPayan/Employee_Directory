import React from "react";

function search({ handleInputChange }) {
    return (
        <div className="form-group">

            <input
                onChange={handleInputChange}
                name="Employee"
                list="Employees"
                type="text"
                placeholder="Search"
            />
        </div>
    );
}

export default search;
