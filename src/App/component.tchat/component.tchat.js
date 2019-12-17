import React from 'react';
import './component.tchat.css';



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

class Tchat extends React.Component {

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
            <div className="Tchat">Hello Tchat World</div>
        )
    }
}

export default Tchat;