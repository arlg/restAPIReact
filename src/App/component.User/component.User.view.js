import React, { Component } from "react";

import {
    BrowserRouter as Router,
    withRouter,
    useParams
} from "react-router-dom";

class User extends Component {

    // Constructeur avec les props
    // On doit appeler super avec les props
    constructor(props) {
        super(props);

        this.state = {
            props: props,
            unUser: {}
        };
        console.log(props);
    }

    componentDidMount() {
        this.userId = this.state.props.match.params.id;
        console.log(this.userId);

        console.log('url', this.state.props.adrsrv + '/users/' + this.userId + '?_expand=service');
        fetch(this.state.props.adrsrv + '/users/' + this.userId + '?_expand=service')
            .then(_r => _r.json())
            .then(r => {
                this.setState({ unUser: r })
            })
            .catch(error => console.log(error));
    }

    render() {
        return (
            <div className="User" >
                <div className="user-img">
                    <img src="https://dummyimage.com/100x100.gif" className="img-responsive" alt="image" />
                </div>
                <div className="user-data">
                    Nom: <span className="user-name">{this.state.unUser.nom && this.state.unUser.nom}</span><br />
                    Prénom: <span className="user-prenom">{this.state.unUser.prenom}</span><br />
                    Service: <span className="user-service">{this.state.unUser.serviceId}</span>
                </div>
            </div>
        );
    }

}


export default withRouter(User)