import React, { Component } from 'react';
import './component.tchat.css';
import render from 'react-dom';

import TchatSender from './component.Tchat.Sender/component.Tchat.Sender';
import TchatViewer from './component.Tchat.Viewer/component.Tchat.Viewer';
import TchatUsers from './component.Tchat.Users/component.Tchat.Users';

/**
 * Version 1 : Fonction de chat par défaut
 * @param {*} props
 */
// export default function tchat(props) {

//     return (

//         <div className="Tchat">
//             Mon tchat en react
//         </div>

//     );
// }

/**
 * Version 2 : Classe
 */

class Tchat extends Component {

    // Constructeur avec les props
    // On doit appeler super avec les props
    constructor(props) {
        super(props);

        this.state = {
            props: props
        };
    }

    // La fonction render genere la sortie
    render = () => {
        return (
            <div className="Tchat">
                <div className="Tchat__cols">
                    <TchatViewer adrsrv={this.state.props.adrsrv}></TchatViewer>
                    <TchatUsers adrsrv={this.state.props.adrsrv}></TchatUsers>
                </div>

                <TchatSender></TchatSender>
            </div>
        )
    }
}

export default Tchat;