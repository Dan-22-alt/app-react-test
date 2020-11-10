import React from 'react'

const Table = () => {
    return(
         <table>
                <Tablehead />
                <Tablebody />
        </table>
    )
}

const Tablehead = () => {
    return(
        <thead>
            <th>Name</th>
            <th>Job</th>
            <th>Remove</th>
        </thead>
    )
}

const Tablebody = () => {
    return(
        <tbody>
            <tr>
                <td>Luis</td>
                <td>Programador</td>
                <td><Deletebutton /></td>
            </tr>
            <tr>
                <td>Noelia</td>
                <td>Profesora</td>
                <td><Deletebutton /></td>
            </tr>
            <tr>
                <td>Ada</td>
                <td>Cientifica</td>
                <td><Deletebutton /></td>
            </tr>
        </tbody>
    )
}

const Deletebutton = () => {
    return(
        <button>Delete</button>
    )
}

export default Table;