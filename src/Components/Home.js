import React from "react";
import {Link, Route, Switch, Redirect} from 'react-router-dom'

class Home extends React.Component {

    render() {
        return(
            <div>
                <Link to={`/`}>
                    <h1>Welcome to Order Out</h1>
                    <p>Please find a restaurant and pick your items!  </p>
                </Link>
            </div>
        )
    }
}

export default Home;
