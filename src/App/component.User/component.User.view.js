import React, { Component } from "react";

import {
    withRouter
} from "react-router-dom";

class User extends Component {

    // Constructeur avec les props
    // On doit appeler super avec les props
    constructor(props) {
        super(props);

        this.state = {
            props: props,
            unUser: {},

            // On filtre si c'est une URL pour que le composant puisse être utilisé dans une Modal par exemple
            id: (props.match && props.match.params.id && props.match.params.id) || props.userId
        };
        console.log(props);
    }

    componentDidMount() {
        fetch(this.state.props.adrsrv + '/users/' + this.state.id + '?_expand=service')
            .then(_r => _r.json())
            .then(r => {
                this.setState({ unUser: r });
                console.log(this.state.unUser);
            })
            .catch(error => console.log(error));
    }

    render() {
        return (
            <div className="User" >
                <div className="user-img">
                    <img src={this.state.unUser.img && this.state.unUser.img} className="img-responsive" alt="image" />
                </div>
                <div className="user-data">
                    Nom: <span className="user-name">{this.state.unUser.name && this.state.unUser.name}</span><br />
                    Prénom: <span className="user-prenom">{this.state.unUser.prenom}</span><br />
                    Service: <span className="user-service">{this.state.unUser.serviceId}</span>
                </div>
            </div>
        );
    }

}


export default withRouter(User)