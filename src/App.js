import React, { useState, useEffect } from "react";
import Jumbotron from "./Components/Jumbotron/jumbotron";
import SearchBar from "./Components/SearchBar/searchbar";
import API from "./Util/API";

function App() {

  const [employees, setEmployees] = useState({
    users: [],
    filteredUsers: [],
    search: "",
  });
  console.log(employees.users);

  const handleInputChange = (event) => {
    const input = event.target.value;
    const newArr = employees.users.filter((foo) => {
      return (foo.name.first + " " + foo.name.last).toLowerCase().includes(input.toLowerCase());
    })
    setEmployees({
      ...employees,
      filteredUsers: newArr,
    })
  }

  useEffect(() => {
    API.search()
      .then((res) => {
        setEmployees({ ...employees, users: res.data.results, filteredUsers: res.data.results });
      });
  }, []);
  let i = 0;
  const Rows = employees.filteredUsers.map((user) => {

    return (
      <tr key={i++}>
        <td><img src={user.picture.thumbnail} alt={user.name.first}></img></td>
        <td>{user.name.first + " " + user.name.last}</td>
        <td>{user.email}</td>
        <td>{user.phone}</td>
        <td>{user.dob.date}</td>
      </tr>
    );

  });

  return (
    <div>
      <Jumbotron />
      <SearchBar handleInputChange={handleInputChange} />
      <table className="table table-striped table-dark">
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
          {Rows}
        </tbody>
      </table>
    </div>

  )
}

export default App;
