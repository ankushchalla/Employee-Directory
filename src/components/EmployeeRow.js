import React from "react";

function EmployeeRow({firstName, lastName, email, state}) {
    return (
        <>
            <tr>
                <td className="first-name" key="1">{firstName}</td>
                <td className="last-name" key="2">{lastName}</td>
                <td className="email" key="3">{email}</td>
                <td className="state" key="4">{state}</td>
            </tr>
        </>
    );
}

export default EmployeeRow;