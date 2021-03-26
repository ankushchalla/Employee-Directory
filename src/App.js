import React, { useState, useEffect } from "react";
import EmployeeRow from "./components/EmployeeRow";
import axios from "axios";

function App() {
    const [directoryState, setDirectoryState] = useState([]);

    useEffect(() => {
        axios.get('https://randomuser.me/api/?results=50&nat=us')
            .then(allUsers => {
                setDirectoryState(allUsers.data.results.map(result => {
                    let employeeInfo = {
                        firstName: result.name.first,
                        lastName: result.name.last,
                        email: result.email,
                        // 'State' as in California, not a React state. 
                        state: result.location.state,
                        id: result.login.uuid
                    }
                    return employeeInfo;
                }));
            })
    }, [])

    const sortByLastName = (event) => {
        // Setting state must always involve creating a new object, array, etc. 
        let sortedDirectory = directoryState.map(employee => employee)
            .sort((a, b) => a.lastName >= b.lastName ? 1 : -1);
        setDirectoryState(sortedDirectory);
    }

    // Backspace doesn't work since you're permanently changing state (until reload).
    const filterByState = (event) => {
        // 'State' as in California, not a React state. 
        let state = event.target.value.toLowerCase();
        setDirectoryState(directoryState.filter(employee => {
            return employee.state.toLowerCase().includes(state);
        }))
    }

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col">
                    <h1>Employee Directory</h1>
                </div>
                <div className="col-3"><button type="button" class="btn btn-primary" onClick={(e) => sortByLastName(e)}>Sort by last name.</button></div>
                <div className="col-3">
                    <div class="input-group mb-3">
                        <input type="text" onChange={(e) => { filterByState(e) }} className="form-control" placeholder="Filter by state." />
                    </div>
                </div>


            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Email</th>
                        <th scope="col">State</th>
                    </tr>
                </thead>
                <tbody>
                    {directoryState.map(employee => <EmployeeRow
                        firstName={employee.firstName}
                        lastName={employee.lastName}
                        email={employee.email}
                        state={employee.state}
                        key={employee.id} />
                    )}
                </tbody>
            </table>
        </div>
    )

}

export default App;