import React from "react";

// Using the datalist element we can create autofill suggestions based on the
// props.breeds array
function SearchForm(props) {
    return (
        <form className="search" onSubmit={props.handleFormSubmit}>
            <div className="form-group">
                <label htmlFor="breed">Search</label>
                <input
                    value={props.search}
                    onChange={props.handleInputChange}
                    name="breed"
                    list="breeds"
                    type="text"
                    className="form-control"
                    placeholder="Type in a dog breed to begin"
                    id="breed"
                />
                <button type="submit" className="btn btn-success">
                    Search
        </button>
            </div>
        </form>
    );
}

export default SearchForm;
