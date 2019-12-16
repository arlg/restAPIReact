import React from 'react';

function User(props) {
    console.log(props);
    return (
        <div className="User">
            <div className="user-img">
                <img src="https://dummyimage.com/100x100.gif" className="img-responsive" alt="image" />
            </div>
            <div className="user-data">
                Nom: <span className="user-name">{props.unUser.nom && props.unUser.nom}</span><br />
                Prénom: <span className="user-prenom">{props.unUser.prenom}</span><br />
                Service: <span className="user-service">{props.unUser.serviceId}</span>
            </div>
        </div>
    );
}

export default User