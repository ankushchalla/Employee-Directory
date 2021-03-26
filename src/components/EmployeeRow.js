import React from "react";

function EmployeeRow(props) {
    return (
        <>
            <tr>
                <td className="first-name">Mark</td>
                <td className="last-name">Otto</td>
                <td className="email">ankushchalla@gmail.com</td>
                <td className="state">CA</td>
            </tr>
        </>
    );
}

export default EmployeeRow;