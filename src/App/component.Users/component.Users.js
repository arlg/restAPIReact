import React from 'react';

function Users(props) {
    console.log(props);
    return (

        <div className="Users">
            <table>
                <thead>
                    <tr>
                        <td>Img</td>
                        <td>Prenom</td>
                        <td>Nom</td>
                        <td>Service</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.users.map((e, i, l) => {
                            return (
                                <tr key={'ligne-user-' + e.id}>
                                    <td>Img</td>
                                    <td>{e.prenom}</td>
                                    <td>{e.nom}</td>
                                    <td>{e.serviceId}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Users