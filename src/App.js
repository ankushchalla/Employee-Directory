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
                        state: result.location.state
                    }
                    return employeeInfo;
                }));
                console.log("state:", directoryState);
            })
    }, [])

    return (
        <div className="container mt-4">
            <h1>Employee Directory</h1>
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
                    <EmployeeRow></EmployeeRow>
                </tbody>
            </table>
        </div>
    )

}

export default App;